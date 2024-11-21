"use client";

import { gothamBook } from "../fonts";
import urlFor from "@/sanity/image";
import { useContext } from "react";
import { Context } from "../context";
import Header from "@/components/header";
import CompanyInfo from "@/components/about/companyInfo";
import OwnerInfo from "@/components/about/ownerInfo";
import Services from "@/components/about/services";
import Staging from "@/components/about/staging";
import TestimonialCarousel from "@/components/testimonialCarousel";
import CallToAction from "@/components/callToAction";
import Footer from "@/components/footer";

export default function Page() {
  const data = useContext(Context);
  const about = data.find((item) => item._id == "about");

  return (
    <html lang="en">
      <head>
        <title>{about.title}</title>
        <meta name="description" content={about.description} />
        <meta property="og:title" content={about.OGTitle} />
        <meta property="og:description" content={about.OGDescription} />
        <meta property="og:image" content={urlFor(about.OGImage).url()} />
        <meta property="og:url" content={`${process.env.SITE_URL}/about`} />
      </head>
      <body className={`${gothamBook.className} text-[#4c4c4c] antialiased`}>
        <Header />
        <main>
          <CompanyInfo companyInfo={about.companyInfo} />
          <OwnerInfo ownerInfo={about.ownerInfo} />
          <Services services={about.services} />
          <Staging staging={about.staging} />
          <TestimonialCarousel />
          <CallToAction />
        </main>
        <Footer />
      </body>
    </html>
  );
}
