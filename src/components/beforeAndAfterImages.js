"use client";

import Image from "next/image";
import urlFor from "@/sanity/image";
import { useState, useEffect, useRef } from "react";

export default function BeforeAndAfterImages({ beforeAndAfterImages }) {
  const [position, setPosition] = useState(50);
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const containerRef = useRef(null);

  const updatePosition = () => {
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.getBoundingClientRect().width;
      const initialPosition = (position / 100) * containerWidth;
      setInitialX(initialPosition);
      setOffsetX(initialPosition);
    }
  };

  useEffect(() => {
    updatePosition();
    setIsMounted(true);

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  const startDrag = (e) => {
    setInitialX(e.clientX || e.touches[0].clientX);
    setIsDragging(true);

    const container = containerRef.current;
    container.style.cursor = "grab";
  };

  const onDrag = (e) => {
    if (!isDragging) return;

    const deltaX = (e.clientX || e.touches[0].clientX) - initialX;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;

    let newPosition = ((offsetX + deltaX) / containerWidth) * 100;

    newPosition = Math.max(0, Math.min(newPosition, 100));

    setPosition(newPosition);
  };

  const stopDrag = () => {
    setIsDragging(false);
    setOffsetX(
      (position / 100) * containerRef.current.getBoundingClientRect().width
    );

    const container = containerRef.current;
    container.style.cursor = "default";
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e) => onDrag(e);
      const handleMouseUp = () => stopDrag();
      const handleTouchMove = (e) => onDrag(e);
      const handleTouchEnd = () => stopDrag();

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isDragging, initialX, offsetX, position]);

  return (
    <div
      className="w-full lg:flex-1 h-64 sm:h-[464px] relative overflow-hidden"
      ref={containerRef}
    >
      <Image
        className="object-cover select-none"
        src={urlFor(beforeAndAfterImages.afterImage).url()}
        alt="After Image"
        fill={true}
      />
      <div className="absolute bottom-4 right-4 text-white text-xl sm:text-2xl uppercase select-none">
        After
      </div>
      <div
        className="w-full h-full absolute top-0 left-0"
        style={{
          clipPath: isMounted
            ? `inset(0 ${100 - position}% 0 0)`
            : "inset(0 50% 0 0)",
        }}
      >
        <Image
          className="object-cover select-none"
          src={urlFor(beforeAndAfterImages.beforeImage).url()}
          alt="Before Image"
          fill={true}
        />
        <div className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl uppercase select-none">
          Before
        </div>
      </div>
      <div
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        className="cursor-grab h-14 w-14 absolute top-2/4 transform -translate-y-2/4 -translate-x-2/4 whitespace-nowrap select-none"
        style={{
          left: isMounted ? `${position}%` : "50%",
        }}
      >
        <div className="pulse-effect h-full w-full relative rounded-full">
          <Image
            className="h-full w-full"
            src="/Before-After-Arrow.webp"
            alt="Arrow"
            width={112}
            height={112}
          />
          <div className="h-full w-full absolute top-0 left-0"></div>
        </div>
      </div>
    </div>
  );
}
