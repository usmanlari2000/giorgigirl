"use client";

import { butlerMedium } from "@/app/fonts";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/app/context";

export default function CallToAction() {
  const data = useContext(Context);
  const callToAction = data.find(
    (item) => item._id == "772979c8-c048-40a8-842d-62e57a8ca990"
  );

  return (
    <div className="flex flex-col lg:flex-row gap-x-10 gap-y-5 justify-center items-center max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-6 lg:py-9">
      <h2
        className={`${butlerMedium.className} text-[#677b59] text-2xl lg:text-[28px] text-center`}
      >
        {callToAction.text}
      </h2>
      <Link
        href={callToAction.buttonLinkDestination}
        className="flex items-center h-12 hover:bg-[#b89958] px-6 border border-[#b89958] text-lg text-[#b89958] hover:text-white uppercase transition-colors duration-500"
      >
        {callToAction.buttonText}
      </Link>
    </div>
  );
}
