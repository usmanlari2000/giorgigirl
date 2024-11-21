import Image from "next/image";
import urlFor from "@/sanity/image";
import Link from "next/link";

export default function LearnMore({ learnMore }) {
  return (
    <div className="flex flex-col lg:flex-row gap-5 max-w-screen-md lg:max-w-screen-xl mx-auto px-5 text-[#667959]">
      <div className="flex-1">
        <Link href={learnMore[0].linkDestination} className="group relative">
          <div className="h-64 sm:h-[576px] relative">
            <Image
              src={urlFor(learnMore[0].image).url()}
              alt=""
              fill={true}
              sizes="100vw"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 absolute top-0 left-0"></div>
          <div className="w-[95%] group-hover:w-3/4 sm:group-hover:w-[85%] h-[95%] group-hover:h-3/4 sm:group-hover:h-[85%] transition-all duration-500 border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-white text-lg uppercase">
            {learnMore[0].hoverText}
          </div>
        </Link>
        <div className="bg-white px-5 py-3 sm:py-4 border border-[#ccc] border-opacity-40 text-xl sm:text-2xl uppercase text-center lg:text-left">
          {learnMore[0].title}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-col gap-5 justify-between lg:w-96">
        <div className="flex-1 lg:flex-none">
          <Link href={learnMore[1].linkDestination} className="group relative">
            <div className="w-full h-64 relative">
              <Image
                src={urlFor(learnMore[1].image).url()}
                alt=""
                fill={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 absolute top-0 left-0"></div>
            <div className="w-[95%] group-hover:w-3/4 h-[95%] group-hover:h-3/4 transition-all duration-500 border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-white text-lg uppercase">
              {learnMore[1].hoverText}
            </div>
          </Link>
          <div className="bg-white px-5 py-3 border border-[#ccc] border-opacity-40 text-xl uppercase text-center lg:text-left">
            {learnMore[1].title}
          </div>
        </div>
        <div className="flex-1 lg:flex-none">
          <Link href={learnMore[2].linkDestination} className="group relative">
            <div className="h-64 w-full relative">
              <Image
                src={urlFor(learnMore[2].image).url()}
                alt=""
                fill={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 absolute top-0 left-0"></div>
            <div className="w-[95%] group-hover:w-3/4 h-[95%] group-hover:h-3/4 transition-all duration-500 border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-white text-lg uppercase">
              {learnMore[2].hoverText}
            </div>
          </Link>
          <div className="bg-white px-5 py-3 border border-[#ccc] border-opacity-40 text-xl uppercase text-center lg:text-left">
            {learnMore[2].title}
          </div>
        </div>
      </div>
    </div>
  );
}
