"use client";

import Image from "next/image";
import urlFor from "@/sanity/image";
import { useState } from "react";

export default function ImageCarousel({ imageCarousel }) {
  const [displacement, setDisplacement] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const images = [];

  for (let i = 0; i < 4; i++) {
    images.push(...imageCarousel);
  }

  const handlePrev = () => {
    if (isDisabled || displacement <= -images.length / 2) return;
    setDisplacement((prevDisplacement) => prevDisplacement - 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  const handleNext = () => {
    if (isDisabled || displacement >= images.length / 2 - 1) return;
    setDisplacement((prevDisplacement) => prevDisplacement + 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  return (
    <div className="w-full h-[432px] sm:h-[720px] relative overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={urlFor(image).url()}
          alt=""
          fill={true}
          sizes="100vw"
          priority={index == images.length / 2}
          style={{
            left: `${(index - displacement - images.length / 2) * 100}%`,
          }}
          className="w-full h-full object-cover absolute top-0 transition-all duration-[1500ms]"
        />
      ))}
      <div className="sm:w-96 sm:h-96 border-[10px] border-white border-opacity-40 transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
        <div className="w-full h-full bg-white bg-opacity-90 p-4 sm:p-0">
          <Image
            src="/GG-Logo-Horizontal.png"
            alt=""
            width={350}
            height={397}
            className="block w-1/2 sm:w-32 h-auto mx-auto mb-5 sm:mb-9 pt-0 sm:pt-14"
          />
          <Image src="/GG-Color-Design.png" alt="" width={750} height={237} />
        </div>
      </div>
      <button
        onClick={handlePrev}
        disabled={isDisabled}
        className="w-11 h-11 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-11"
      >
        <Image src="/Slider-Left-Arrow.png" alt="" width={92} height={92} />
      </button>
      <button
        onClick={handleNext}
        disabled={isDisabled}
        className="w-11 h-11 cursor-pointer transform translate-x-1/2 -translate-y-1/2 absolute top-1/2 right-11"
      >
        <Image src="/Slider-Right-Arrow.png" alt="" width={92} height={92} />
      </button>
    </div>
  );
}
