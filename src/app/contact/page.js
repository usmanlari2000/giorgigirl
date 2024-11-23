"use client";

import { gothamBook, ellianaSamantha } from "../fonts";
import Image from "next/image";
import urlFor from "@/sanity/image";
import { useContext } from "react";
import { Context } from "../context";
import { useSearchParams } from "next/navigation";
import Header from "@/components/header";
import ContactForm from "@/components/contact/contactForm";
import Footer from "@/components/footer";

export default function Page() {
  const data = useContext(Context);
  const contact = data.find((item) => item._id == "contact");
  const regex = /(`[^`]*`|[^`]+)/g;
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  return (
    <html lang="en">
      <head>
        <title>{contact.title}</title>
        <meta name="description" content={contact.description} />
        <meta property="og:title" content={contact.OGTitle} />
        <meta property="og:description" content={contact.OGDescription} />
        <meta property="og:image" content={urlFor(contact.OGImage).url()} />
        <meta property="og:url" content={`${process.env.SITE_URL}/contact`} />
      </head>
      <body className={`${gothamBook.className} text-[#4c4c4c] antialiased`}>
        <Header />
        <main>
          <div className="w-full h-52 sm:h-80 relative">
            <Image
              src={urlFor(contact.coverImage).url()}
              alt=""
              fill={true}
              sizes="100vw"
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#f5f5f5]">
            <div className="max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-12 lg:py-16">
              <h1 className="flex justify-center items-center gap-4 flex-wrap mb-12 lg:mb-16">
                {(contact.formTitle.match(regex) || []).map((item, index) =>
                  item[0] == "`" && item[item.length - 1] == "`" ? (
                    <span
                      key={index}
                      className={`${ellianaSamantha.className} text-[#b89958] text-5xl lg:text-[90px] text-center`}
                    >
                      {item}
                    </span>
                  ) : (
                    <span
                      key={index}
                      className="text-[#b89958] text-lg lg:text-2xl tracking-[7px] uppercase text-center"
                    >
                      {item}
                    </span>
                  )
                )}
              </h1>
              <div className="bg-white shadow-md p-10 sm:p-16">
                {success ? (
                  success == "true" ? (
                    <div className="text-xl text-center">
                      Thanks for contacting us! We will get in touch with you
                      shortly.
                    </div>
                  ) : (
                    <div className="text-xl text-center">
                      The form could not be submitted. Please email us at
                      erin@giorgigirl.com.
                    </div>
                  )
                ) : (
                  <ContactForm />
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
