"use client";

import { gothamBook } from "./fonts";
import urlFor from "@/sanity/image";
import { useContext } from "react";
import { Context } from "./context";
import Header from "@/components/header";
import ImageCarousel from "@/components/home/imageCarousel";
import Slogan from "@/components/home/slogan";
import LearnMore from "@/components/home/learnMore";
import FeaturedTestimonial from "@/components/home/featuredTestimonial";
import BeforeAndAfterImages from "@/components/home/beforeAndAfterImages";
import TestimonialCarousel from "@/components/testimonialCarousel";
import CallToAction from "@/components/callToAction";
import Footer from "@/components/footer";

export default function Page() {
  const data = useContext(Context);
  const home = data.find((item) => item._id == "home");

  return (
    <html lang="en">
      <head>
        <title>{home.title}</title>
        <meta name="description" content={home.description} />
        <meta property="og:title" content={home.OGTitle} />
        <meta property="og:description" content={home.OGDescription} />
        <meta property="og:image" content={urlFor(home.OGImage).url()} />
        <meta property="og:url" content={`${process.env.SITE_URL}/`} />
      </head>
      <body className={`${gothamBook.className} text-[#4c4c4c] antialiased`}>
        <Header />
        <main>
          <ImageCarousel imageCarousel={home.imageCarousel} />
          <div className="bg-[#f5f5f5]">
            <Slogan slogan={home.slogan} />
            <LearnMore learnMore={home.learnMore} />
            <FeaturedTestimonial
              featuredTestimonial={home.featuredTestimonial}
            />
          </div>
          <BeforeAndAfterImages
            beforeAndAfterImages={home.beforeAndAfterImages}
          />
          <TestimonialCarousel />
          <CallToAction />
        </main>
        <Footer />
      </body>
    </html>
  );
}
