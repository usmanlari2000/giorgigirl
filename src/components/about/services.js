import { ellianaSamantha } from "@/app/fonts";
import Image from "next/image";
import urlFor from "@/sanity/image";
import { PortableText } from "@portabletext/react";

export default function Services({ services }) {
  const regex = /(`[^`]*`|[^`]+)/g;

  return (
    <div
      id="what-we-do"
      className="max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-12 lg:py-16"
    >
      <h1 className="flex justify-center items-center flex-wrap gap-4 text-[#b89958]">
        {(services.title.match(regex) || []).map((item, index) =>
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
      {services.types.map((type, index) =>
        index % 2 == 1 ? (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-x-8 lg:gap-x-14 xl:gap-x-20 gap-y-8 py-8 lg:py-12 border-b border-[#ccc] border-opacity-60"
          >
            <div className="group max-w-[496px] lg:max-w-[544px] w-full lg:w-1/2 relative">
              <div className="h-80 relative">
                <Image
                  className="w-full h-full object-cover"
                  src={urlFor(type.image).url()}
                  alt=""
                  fill={true}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="h-[95%] w-[95%] border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
            </div>
            <div className="flex-1">
              <h1 className="flex justify-center lg:justify-start items-center flex-wrap gap-4 mb-8 lg:mb-12 text-[#b89958]">
                {(type.title.match(regex) || []).map((item, index) =>
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
                <PortableText value={type.text} />
              </div>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="flex flex-col-reverse lg:flex-row items-center gap-x-8 lg:gap-x-14 xl:gap-x-20 gap-y-8 py-8 lg:py-12 border-b border-[#ccc] border-opacity-60"
          >
            <div className="flex-1">
              <h1 className="flex justify-center lg:justify-start items-center flex-wrap gap-4 mb-8 lg:mb-12 text-[#b89958]">
                {(type.title.match(regex) || []).map((item, index) =>
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
                <PortableText value={type.text} />
              </div>
            </div>
            <div className="group max-w-[496px] lg:max-w-[544px] w-full lg:w-1/2 relative">
              <div className="h-80 relative">
                <Image
                  className="w-full h-full object-cover"
                  src={urlFor(type.image).url()}
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
  );
}
