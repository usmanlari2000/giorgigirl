import { defineQuery } from "next-sanity";
import { client } from "../sanity/client";
import urlFor from "@/sanity/image";
import ImageCarousel from "@/components/imageCarousel";
import Slogan from "@/components/slogan";
import LearnMore from "@/components/learnMore";
import FeaturedTestimonial from "@/components/featuredTestimonial";
import PortfolioImageLink from "@/components/portfolioImageLink";
import BeforeAndAfterImages from "@/components/beforeAndAfterImages";
import TestimonialCarousel from "@/components/testimonialCarousel";
import CallToAction from "@/components/callToAction";

const options = { next: { revalidate: 0 } };
const QUERY = defineQuery(`*[_type == "home"][0]`);

export async function generateMetadata() {
  const home = await client.fetch(QUERY, {}, options);

  return {
    title: home.title,
    description: home.description,
    openGraph: {
      title: home.OGTitle,
      description: home.OGDescription,
      url: "https://giorgigirl.com",
      images: urlFor(home.OGImage).url(),
    },
  };
}

export default async function Page() {
  const home = await client.fetch(QUERY, {}, options);

  return (
    <>
      <ImageCarousel imageCarousel={home.imageCarousel} />
      <div className="bg-[#f8f8f8]">
        <Slogan slogan={home.slogan} />
        <LearnMore learnMore={home.learnMore} />
        <FeaturedTestimonial featuredTestimonial={home.featuredTestimonial} />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-5 max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-14">
        <PortfolioImageLink portfolioImageLink={home.portfolioImageLink} />
        <BeforeAndAfterImages
          beforeAndAfterImages={home.beforeAndAfterImages}
        />
      </div>
      <TestimonialCarousel />
      <CallToAction />
    </>
  );
}
