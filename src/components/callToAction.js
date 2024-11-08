import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import { butlerMedium } from "@/app/fonts";

const options = { next: { revalidate: 30 } };
const QUERY = defineQuery(`*[_type == "callToAction"][0]`);

export default async function CallToAction() {
  const callToAction = await client.fetch(QUERY, {}, options);

  return (
    <div className="flex flex-col lg:flex-row gap-x-10 gap-y-5 justify-center items-center max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-6 lg:py-9">
      <h2
        className={`${butlerMedium.className} text-[#677b59] text-2xl lg:text-[28px] text-center`}
      >
        {callToAction.text}
      </h2>
      <a
        className="flex items-center h-12 hover:bg-[#bd9d5f] px-6 border border-[#bd9d5f] text-lg text-[#bd9d5f] hover:text-white uppercase transition-colors duration-500"
        href={callToAction.buttonLinkDestination}
      >
        {callToAction.buttonText}
      </a>
    </div>
  );
}
