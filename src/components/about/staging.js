import { ellianaSamantha } from "@/app/fonts";
import Image from "next/image";
import urlFor from "@/sanity/image";
import { PortableText } from "@portabletext/react";

export default function Staging({ staging }) {
  const regex = /(`[^`]*`|[^`]+)/g;

  return (
    <div id="home-staging" className="bg-[#f5f5f5]">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-12 lg:py-16">
        <h1 className="flex justify-center items-center flex-wrap gap-4 mb-12 lg:mb-16 text-[#b89958]">
          {(staging.title.match(regex) || []).map((item, index) =>
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
        <p className="py-6 border-y border-[#ccc] border-opacity-60 text-[#b89958] text-xl lg:text-2xl text-center">
          {staging.text}
        </p>
        {staging.blocks.map((block, index) =>
          index % 2 == 1 ? (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-x-8 lg:gap-x-14 xl:gap-x-20 gap-y-8 py-8 lg:py-12"
            >
              <div className="group max-w-[496px] lg:max-w-[544px] w-full lg:w-1/2 relative">
                <div className="h-80 relative">
                  <Image
                    className="w-full h-full object-cover"
                    src={urlFor(block.image).url()}
                    alt=""
                    fill={true}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="h-[95%] w-[95%] border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
              </div>
              <div className="block-content flex-1">
                <PortableText value={block.text} />
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="flex flex-col-reverse lg:flex-row items-center gap-x-8 lg:gap-x-14 xl:gap-x-20 gap-y-8 py-8 lg:py-12"
            >
              <div className="block-content flex-1">
                <PortableText value={block.text} />
              </div>
              <div className="group max-w-[496px] lg:max-w-[544px] w-full lg:w-1/2 relative">
                <div className="h-80 relative">
                  <Image
                    className="w-full h-full object-cover"
                    src={urlFor(block.image).url()}
                    alt=""
                    fill={true}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading={index == 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="h-[95%] w-[95%] border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
