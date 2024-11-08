import Link from "next/link";
import Image from "next/image";
import urlFor from "@/sanity/image";
import { ellianaSamantha } from "@/app/fonts";

export default function PortfolioImageLink({ portfolioImageLink }) {
  return (
    <Link
      className="group block max-w-96 w-full h-[464px] relative"
      href={portfolioImageLink.destination}
    >
      <Image
        className="object-cover"
        src={urlFor(portfolioImageLink.image).url()}
        alt=""
        fill={true}
      />
      <div className="w-full h-full bg-white group-hover:bg-black opacity-80 group-hover:opacity-60 transition-all duration-500 absolute top-0 left-0"></div>
      <div className="h-[95%] group-hover:h-[80%] w-[95%] group-hover:w-[80%] transition-all duration-500 border border-white transform -translate-x-1/2 -translate-y-1/2 absolute top-2/4 left-2/4"></div>
      <div className="transform -translate-x-1/2 -translate-y-1/2 absolute top-2/4 left-2/4">
        <h1
          className={`mb-8 lg:mb-10 ${ellianaSamantha.className} text-[#b89958] text-5xl lg:text-[80px] text-center`}
        >
          {portfolioImageLink.title}
        </h1>
        <p className="group-hover:text-white transition-colors duration-500 text-center">
          {portfolioImageLink.text}
        </p>
      </div>
    </Link>
  );
}
