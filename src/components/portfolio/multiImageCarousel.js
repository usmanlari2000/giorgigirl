"use client";

import { ellianaSamantha } from "@/app/fonts";
import Image from "next/image";
import urlFor from "@/sanity/image";
import { useState } from "react";

export default function MultiImageCarousel({ multiImageCarousel }) {
  const regex = /(`[^`]*`|[^`]+)/g;
  const [displacement, setDisplacement] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const imageGrids = [];

  for (let i = 0; i < 4; i++) {
    imageGrids.push(...multiImageCarousel.carousel);
  }

  const handlePrev = () => {
    if (isDisabled || displacement <= -imageGrids.length / 2) return;
    setDisplacement((prevDisplacement) => prevDisplacement - 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  const handleNext = () => {
    if (isDisabled || displacement >= imageGrids.length / 2 - 1) return;
    setDisplacement((prevDisplacement) => prevDisplacement + 1);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-12 lg:py-16">
        <h1 className="flex justify-center items-center flex-wrap gap-4 mb-12 lg:mb-16 text-[#b89958]">
          {(multiImageCarousel.title.match(regex) || []).map((item, index) =>
            item[0] == "`" && item[item.length - 1] == "`" ? (
              <span
                key={index}
                className={`${ellianaSamantha.className} text-5xl lg:text-[80px] text-center`}
              >
                {item}
              </span>
            ) : (
              <span
                key={index}
                className="tracking-[6px] uppercase text-center whitespace-nowrap"
              >
                {item}
              </span>
            )
          )}
        </h1>
        <div className="h-[1636px] lg:h-[1084px] relative overflow-hidden">
          {imageGrids.map((item, index) => (
            <div
              key={index}
              style={{
                left: `${(index - displacement - imageGrids.length / 2) * 100}%`,
              }}
              className="flex flex-col gap-y-5 w-full h-full object-cover absolute top-0 transition-all duration-[1500ms]"
            >
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1">
                  <div className="group relative">
                    <div className="h-64 sm:h-[532px] relative">
                      <Image
                        src={urlFor(item.images[0]).url()}
                        alt=""
                        fill={true}
                        sizes="100vw"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full h-full bg-black opacity-0 absolute top-0 left-0"></div>
                    <div className="w-[95%] h-[95%] border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-5 justify-between lg:w-96">
                  <div className="flex-1 lg:flex-none">
                    <div className="group relative">
                      <div className="w-full h-64 relative">
                        <Image
                          src={urlFor(item.images[1]).url()}
                          alt=""
                          fill={true}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-full bg-black opacity-0 absolute top-0 left-0"></div>
                      <div className="w-[95%] h-[95%] border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
                    </div>
                  </div>
                  <div className="flex-1 lg:flex-none">
                    <div className="group relative">
                      <div className="h-64 w-full relative">
                        <Image
                          src={urlFor(item.images[2]).url()}
                          alt=""
                          fill={true}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-full bg-black opacity-0 absolute top-0 left-0"></div>
                      <div className="w-[95%] h-[95%] border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex flex-col sm:flex-row lg:flex-col gap-5 justify-between lg:w-96">
                  <div className="flex-1 lg:flex-none">
                    <div className="group relative">
                      <div className="w-full h-64 relative">
                        <Image
                          src={urlFor(item.images[3]).url()}
                          alt=""
                          fill={true}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-full bg-black opacity-0 absolute top-0 left-0"></div>
                      <div className="w-[95%] h-[95%] border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
                    </div>
                  </div>
                  <div className="flex-1 lg:flex-none">
                    <div className="group relative">
                      <div className="h-64 w-full relative">
                        <Image
                          src={urlFor(item.images[4]).url()}
                          alt=""
                          fill={true}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-full bg-black opacity-0 absolute top-0 left-0"></div>
                      <div className="w-[95%] h-[95%] border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="group relative">
                    <div className="h-64 sm:h-[532px] relative">
                      <Image
                        src={urlFor(item.images[5]).url()}
                        alt=""
                        fill={true}
                        sizes="100vw"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full h-full bg-black opacity-0 absolute top-0 left-0"></div>
                    <div className="w-[95%] h-[95%] border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-x-6 lg:gap-x-8 mt-6 lg:mt-10">
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
    </div>
  );
}
