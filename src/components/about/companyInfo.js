import { ellianaSamantha } from "@/app/fonts";
import Image from "next/image";
import urlFor from "@/sanity/image";
import { PortableText } from "@portabletext/react";

export default function CompanyInfo({ companyInfo }) {
  const regex = /(`[^`]*`|[^`]+)/g;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-12 lg:py-16">
      <div className="group max-w-[496px] lg:max-w-none w-full lg:w-1/2 xl:w-3/5 relative">
        <div className="h-80 lg:h-[496px] w-full relative">
          <Image
            src={urlFor(companyInfo.image).url()}
            alt=""
            fill={true}
            sizes="100vw"
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[95%] w-[95%] border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
      </div>
      <div className="flex-1">
        <h1 className="flex justify-center lg:justify-start items-center flex-wrap gap-4 mb-8 lg:mb-12 text-[#b89958]">
          {(companyInfo.title.match(regex) || []).map((item, index) =>
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
        <div className="block-content">
          <PortableText value={companyInfo.text} />
        </div>
      </div>
    </div>
  );
}
