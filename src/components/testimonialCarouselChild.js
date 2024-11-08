"use client";

import Image from "next/image";
import { gothamLight, butlerMedium, ellianaSamantha } from "@/app/fonts";
import { useState, useEffect } from "react";
import urlFor from "@/sanity/image";

export default function TestimonialCarouselChild({ testimonialCarousel }) {
  const [offsetX, setOffsetX] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const repeatedTestimonials = [];

  for (let i = 0; i < 10; i++) {
    repeatedTestimonials.push(...testimonialCarousel.testimonials);
  }

  useEffect(() => {
    let intervalId;

    const startInterval = () => {
      if (!isDisabled && offsetX < repeatedTestimonials.length / 2 - 1) {
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
      if (document.hidden || offsetX >= repeatedTestimonials.length / 2 - 1) {
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
  }, [isDisabled, offsetX, repeatedTestimonials.length]);

  const handlePrev = () => {
    if (isDisabled || offsetX <= -(repeatedTestimonials.length / 2)) return;
    setOffsetX((prevOffsetX) => prevOffsetX - 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  const handleNext = () => {
    if (isDisabled || offsetX >= repeatedTestimonials.length / 2 - 1) return;
    setOffsetX((prevOffsetX) => prevOffsetX + 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  return (
    <div className="w-full h-[432px] relative">
      <Image
        className="object-cover"
        src={urlFor(testimonialCarousel.image).url()}
        alt=""
        fill={true}
      />
      <div className="w-full h-full bg-[#4e4e4e] bg-opacity-80 absolute top-0 left-0"></div>
      <div className="w-full h-full absolute top-0 left-0">
        <div className="max-w-screen-md lg:max-w-screen-xl w-4/5 h-full mx-auto px-5 pt-[72px] relative">
          <h1
            className={`mb-8 lg:mb-10 ${ellianaSamantha.className} text-[#ccb88c] text-5xl lg:text-[80px] text-center`}
          >
            {testimonialCarousel.title}
          </h1>
          <div className="h-[280px] lg:h-60 relative overflow-hidden">
            {repeatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full absolute top-0 transition-all duration-[1500ms]"
                style={{
                  left: `${(index - offsetX - repeatedTestimonials.length / 2) * 100}%`,
                }}
              >
                <p
                  className={`mb-5 ${gothamLight.className} text-white text-xl lg:text-[22px] text-center line-clamp-6 lg:line-clamp-5`}
                >
                  "{testimonial.text}"
                </p>
                <p
                  className={`${butlerMedium.className} text-[#acada3] text-lg lg:text-xl text-center`}
                >
                  -{testimonial.by}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="cursor-pointer absolute top-2/4 left-[-3%] transform -translate-x-1/2 -translate-y-1/2"
            disabled={isDisabled}
          >
            <Image
              src="/Testimonial-Slider-Left-Arrow.webp"
              alt="Previous testimonial"
              width={18}
              height={35}
            />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer absolute top-2/4 right-[-3%] transform translate-x-1/2 -translate-y-1/2"
            disabled={isDisabled}
          >
            <Image
              src="/Testimonial-Slider-Right-Arrow.webp"
              alt="Next testimonial"
              width={17}
              height={35}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
