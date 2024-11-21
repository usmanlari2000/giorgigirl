"use client";

import { ellianaSamantha } from "@/app/fonts";

export default function Slogan({ slogan }) {
  const regex = /(`[^`]*`|[^`]+)/g;

  return (
    <h1 className="flex justify-center items-center gap-4 flex-wrap max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-12 lg:py-16">
      {(slogan.match(regex) || []).map((item, index) =>
        item[0] == "`" && item[item.length - 1] == "`" ? (
          <span
            key={index}
            className={`${ellianaSamantha.className} text-[#bb9958] text-5xl lg:text-[90px] text-center`}
          >
            {item}
          </span>
        ) : (
          <span
            key={index}
            className="text-lg lg:text-2xl tracking-[7px] uppercase text-center"
          >
            {item}
          </span>
        )
      )}
    </h1>
  );
}
