"use client";

import { ellianaSamantha } from "@/app/fonts";
import Image from "next/image";
import urlFor from "@/sanity/image";
import Link from "next/link";
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

    containerRef.current.style.cursor = "grab";
  };

  const onDrag = (e) => {
    if (!isDragging) return;

    const deltaX = (e.clientX || e.touches[0].clientX) - initialX;

    const containerWidth = containerRef.current.getBoundingClientRect().width;

    let newPosition = ((offsetX + deltaX) / containerWidth) * 100;
    newPosition = Math.max(0, Math.min(newPosition, 100));
    setPosition(newPosition);
  };

  const stopDrag = (e) => {
    setIsDragging(false);
    setOffsetX(
      (position / 100) * containerRef.current.getBoundingClientRect().width
    );

    containerRef.current.style.cursor = "default";
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
    <div className="flex flex-col lg:flex-row items-center gap-5 max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-12 lg:py-16">
      <Link
        href={beforeAndAfterImages.linkDestination}
        className="group block max-w-96 w-full h-[464px] relative"
      >
        <Image
          src={urlFor(beforeAndAfterImages.backgroundImage).url()}
          alt=""
          fill={true}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full bg-white group-hover:bg-black opacity-80 group-hover:opacity-60 transition-all duration-500 absolute top-0 left-0"></div>
        <div className="w-[95%] group-hover:w-[80%] h-[95%] group-hover:h-[80%] transition-all duration-500 border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
        <div className="transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
          <h1
            className={`mb-8 lg:mb-10 ${ellianaSamantha.className} text-[#b89958] text-5xl lg:text-[80px] text-center`}
          >
            {beforeAndAfterImages.title}
          </h1>
          <p className="group-hover:text-white transition-colors duration-500 text-center">
            {beforeAndAfterImages.text}
          </p>
        </div>
      </Link>
      <div
        ref={containerRef}
        className="w-full lg:flex-1 h-64 sm:h-[464px] relative overflow-hidden"
      >
        <Image
          src={urlFor(beforeAndAfterImages.afterImage).url()}
          alt=""
          fill={true}
          sizes="100vw"
          className="w-full h-full object-cover select-none"
        />
        <div className="absolute bottom-4 right-4 text-white text-xl sm:text-2xl uppercase select-none">
          After
        </div>
        <div
          style={{
            clipPath: isMounted
              ? `inset(0 ${100 - position}% 0 0)`
              : "inset(0 50% 0 0)",
          }}
          className="w-full h-full absolute top-0 left-0"
        >
          <Image
            src={urlFor(beforeAndAfterImages.beforeImage).url()}
            alt=""
            fill={true}
            sizes="100vw"
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl uppercase select-none">
            Before
          </div>
        </div>
        <div
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          style={{ left: isMounted ? `${position}%` : "50%" }}
          className="w-14 h-14 cursor-grab absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none"
        >
          <div className="pulse-effect w-full h-full relative rounded-full">
            <Image
              src="/Before-After-Arrow.png"
              alt=""
              width={112}
              height={112}
              className="w-full h-full"
            />
            <div className="w-full h-full absolute top-0 left-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
