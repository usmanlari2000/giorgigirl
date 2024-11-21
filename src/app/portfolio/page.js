"use client";

import { gothamBook } from "../fonts";
import urlFor from "@/sanity/image";
import { useContext } from "react";
import { Context } from "../context";
import Header from "@/components/header";
import BeforeAndAfterImages from "@/components/portfolio/beforeAndAfterImages";
import MultiImageCarousel from "@/components/portfolio/multiImageCarousel";
import TestimonialCarousel from "@/components/testimonialCarousel";
import CallToAction from "@/components/callToAction";
import Footer from "@/components/footer";

export default function Page() {
  const data = useContext(Context);
  const portfolio = data.find((item) => item._id == "portfolio");

  return (
    <html lang="en">
      <head>
        <title>{portfolio.title}</title>
        <meta name="description" content={portfolio.description} />
        <meta property="og:title" content={portfolio.OGTitle} />
        <meta property="og:description" content={portfolio.OGDescription} />
        <meta property="og:image" content={urlFor(portfolio.OGImage).url()} />
        <meta property="og:url" content={`${process.env.SITE_URL}/portfolio`} />
      </head>
      <body className={`${gothamBook.className} text-[#4c4c4c] antialiased`}>
        <Header />
        <main>
          <BeforeAndAfterImages
            beforeAndAfterImages={portfolio.beforeAndAfterImages}
          />
          <MultiImageCarousel
            multiImageCarousel={portfolio.multiImageCarousel}
          />
          <TestimonialCarousel />
          <CallToAction />
        </main>
        <Footer />
      </body>
    </html>
  );
}
