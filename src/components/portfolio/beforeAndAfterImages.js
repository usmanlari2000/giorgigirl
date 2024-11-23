"use client";

import { ellianaSamantha } from "@/app/fonts";
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
  const [displacement, setDisplacement] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const imagePairs = [];

  for (let i = 0; i < 4; i++) {
    imagePairs.push(...beforeAndAfterImages.imagePairs);
  }

  const handlePrev = () => {
    if (isDisabled || displacement <= -imagePairs.length / 2) return;
    setDisplacement((prevDisplacement) => prevDisplacement - 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  const handleNext = () => {
    if (isDisabled || displacement >= imagePairs.length / 2 - 1) return;
    setDisplacement((prevDisplacement) => prevDisplacement + 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

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
    <div className=" max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="group block max-w-96 w-full h-[464px] relative">
          <Image
            src={urlFor(beforeAndAfterImages.backgroundImage).url()}
            alt=""
            fill={true}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full bg-white opacity-80 absolute top-0 left-0"></div>
          <div className="w-[95%] h-[95%] border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
          <div className="transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
            <h1
              className={`mb-8 lg:mb-10 ${ellianaSamantha.className} text-[#b89958] text-5xl lg:text-[80px] text-center`}
            >
              {beforeAndAfterImages.title}
            </h1>
            <p className="text-center">{beforeAndAfterImages.text}</p>
          </div>
        </div>
        <div
          ref={containerRef}
          className="w-full lg:flex-1 h-64 sm:h-[464px] relative overflow-hidden"
        >
          {imagePairs.map((imagePair, index) => (
            <div
              key={index}
              style={{
                left: `${(index - displacement - imagePairs.length / 2) * 100}%`,
              }}
              className="w-full h-full absolute top-0 transition-all duration-[1500ms] overflow-hidden"
            >
              <Image
                src={urlFor(imagePair.afterImage).url()}
                alt=""
                fill={true}
                sizes="100vw"
                priority={index == imagePairs.length / 2}
                loading={index == imagePairs.length / 2 ? "eager" : "lazy"}
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
                  src={urlFor(imagePair.beforeImage).url()}
                  alt=""
                  fill={true}
                  sizes="100vw"
                  priority={index == imagePairs.length / 2}
                  loading={index == imagePairs.length / 2 ? "eager" : "lazy"}
                  className="w-full h-full object-cover select-none"
                />
                <div className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl uppercase select-none">
                  Before
                </div>
              </div>
              <div
                onMouseDown={startDrag}
                onTouchStart={startDrag}
                style={{
                  left: isMounted ? `${position}%` : "50%",
                }}
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
          ))}
        </div>
      </div>
      <div className="flex justify-center lg:justify-end items-center gap-x-6 lg:gap-x-8 mt-6 lg:mt-10">
        <button onClick={handlePrev}>
          <Image
            src="/Portfolio-Prev-Arrow.png"
            alt=""
            width={76}
            height={19}
            className="w-auto h-5"
          />
        </button>
        <div className="text-[#b89958] text-xl">|</div>
        <button onClick={handleNext}>
          <Image
            src="/Portfolio-Next-Arrow.png"
            alt=""
            width={74}
            height={19}
            className="w-auto h-5"
          />
        </button>
      </div>
    </div>
  );
}
