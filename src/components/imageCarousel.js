"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import urlFor from "@/sanity/image";

export default function ImageCarousel({ imageCarousel }) {
  const [offsetX, setOffsetX] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const repeatedImages = [];

  for (let i = 0; i < 10; i++) {
    repeatedImages.push(...imageCarousel);
  }

  useEffect(() => {
    let intervalId;

    const startInterval = () => {
      if (!isDisabled && offsetX < repeatedImages.length / 2 - 1) {
        intervalId = setInterval(() => {
          setOffsetX((prevOffsetX) => prevOffsetX + 1);
          setIsDisabled(true);

          setTimeout(() => {
            setIsDisabled(false);
          }, 1500);
        }, 9000);
      }
    };

    startInterval();

    const handleVisibilityChange = () => {
      if (document.hidden || offsetX >= repeatedImages.length / 2 - 1) {
        clearInterval(intervalId);
      } else {
        startInterval();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isDisabled, offsetX, repeatedImages.length]);

  const handlePrev = () => {
    if (isDisabled || offsetX <= -(repeatedImages.length / 2)) return;
    setOffsetX((prevOffsetX) => prevOffsetX - 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  const handleNext = () => {
    if (isDisabled || offsetX >= repeatedImages.length / 2 - 1) return;
    setOffsetX((prevOffsetX) => prevOffsetX + 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  return (
    <div className="w-full h-[432px] sm:h-[720px] relative overflow-hidden">
      {repeatedImages.map((image, index) => (
        <Image
          key={index}
          className="object-cover absolute top-0 transition-all duration-[1500ms]"
          src={urlFor(image).url()}
          alt=""
          fill={true}
          priority={index == repeatedImages.length / 2}
          style={{
            left: `${(index - offsetX - repeatedImages.length / 2) * 100}%`,
          }}
        />
      ))}
      <div className="sm:w-96 sm:h-96 border-[10px] border-white border-opacity-40 transform -translate-x-1/2 -translate-y-1/2 absolute top-2/4 left-2/4">
        <div className="h-full w-full bg-white bg-opacity-90 p-4 sm:p-0">
          <Image
            className="block w-2/4 sm:w-32 h-auto mx-auto mb-5 sm:mb-9 pt-0 sm:pt-14"
            src="/GG-Logo-Horizontal.webp"
            alt=""
            width={350}
            height={397}
          />
          <Image src="/GG-Color-Design.png" alt="" width={750} height={237} />
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="w-11 h-11 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 absolute top-2/4 left-11"
        disabled={isDisabled}
      >
        <Image src="/Slider-Left-Arrow.webp" alt="" width={92} height={92} />
      </button>
      <button
        onClick={handleNext}
        className="w-11 h-11 cursor-pointer transform translate-x-1/2 -translate-y-1/2 absolute top-2/4 right-11"
        disabled={isDisabled}
      >
        <Image src="/Slider-Right-Arrow.webp" alt="" width={92} height={92} />
      </button>
    </div>
  );
}
