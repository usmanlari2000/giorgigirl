"use client";

import { gothamLight, butlerMedium, ellianaSamantha } from "@/app/fonts";
import Image from "next/image";
import urlFor from "@/sanity/image";
import { useState, useContext } from "react";
import { Context } from "@/app/context";

export default function TestimonialCarousel() {
  const data = useContext(Context);
  const testimonialCarousel = data.find(
    (item) => item._id == "7d1c77ba-fdc2-42fd-8ed5-9c6bf74a873c"
  );
  const [displacement, setDisplacement] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const testimonials = [];

  for (let i = 0; i < 4; i++) {
    testimonials.push(...testimonialCarousel.testimonials);
  }

  const handlePrev = () => {
    if (isDisabled || displacement <= -testimonials.length / 2) return;
    setDisplacement((prevDisplacement) => prevDisplacement - 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  const handleNext = () => {
    if (isDisabled || displacement >= testimonials.length / 2 - 1) return;
    setDisplacement((prevDisplacement) => prevDisplacement + 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  return (
    <div className="w-full h-[432px] relative">
      <Image
        src={urlFor(testimonialCarousel.backgroundImage).url()}
        alt=""
        fill={true}
        sizes="100vw"
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="w-full h-full bg-[#4e4e4e] bg-opacity-80 absolute top-0 left-0"></div>
      <div className="w-full h-full absolute top-0 left-0">
        <div className="max-w-screen-md lg:max-w-screen-xl w-4/5 h-full mx-auto px-5 pt-[72px] relative">
          <h1
            className={`mb-8 lg:mb-10 ${ellianaSamantha.className} text-[#b89958] text-5xl lg:text-[80px] text-center`}
          >
            {testimonialCarousel.title}
          </h1>
          <div className="h-[280px] lg:h-60 relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  left: `${(index - displacement - testimonials.length / 2) * 100}%`,
                }}
                className="w-full absolute top-0 transition-all duration-[1500ms]"
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
            disabled={isDisabled}
            className="cursor-pointer absolute top-1/2 left-[-4%] transform -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/Testimonial-Slider-Left-Arrow.png"
              alt=""
              width={18}
              height={35}
              loading="lazy"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={isDisabled}
            className="cursor-pointer absolute top-1/2 right-[-4%] transform translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/Testimonial-Slider-Right-Arrow.png"
              alt=""
              width={17}
              height={35}
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
