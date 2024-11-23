"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/app/context";

export default function Footer() {
  const data = useContext(Context);
  const footer = data.find(
    (item) => item._id == "e0171e8b-1c0a-4947-bc20-0336052b934c"
  );

  return (
    <footer className="bg-[#f5f5f5]">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-10">
          <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-3">
            <Link href="/">
              <Image
                src="/Footer-Logo.png"
                alt=""
                width={2338}
                height={832}
                loading="lazy"
                className="w-60 h-auto"
              />
            </Link>
            <div className="flex items-center gap-x-3">
              <div className="flex justify-center items-center h-10 w-10 border border-[#ccc] rounded-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 text-[#b89958]"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                </svg>
              </div>
              <a
                href={`tel:${footer.phoneNumber}`}
                className="text-sm hover:underline"
              >
                {footer.phoneNumber}
              </a>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="flex justify-center items-center h-10 w-10 border border-[#ccc] rounded-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#b89958]"
                >
                  <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
                  <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
                </svg>
              </div>
              <a
                href={`tel:${footer.emailAddress}`}
                className="text-sm hover:underline"
              >
                {footer.emailAddress}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <a
              href={footer.instagramPageLink}
              className="group flex justify-center items-center h-10 w-10 hover:bg-[#b89958] transition-colors duration-500 border border-[#ccc] rounded-full"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-[#b89958] group-hover:text-white transition-colors duration-500"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a
              href={footer.facebookPageLink}
              className="group flex justify-center items-center h-10 w-10 hover:bg-[#b89958] transition-colors duration-500 border border-[#ccc] rounded-full"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-[#b89958] group-hover:text-white transition-colors duration-500"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-y-3 py-6 border-t border-[#ccc]">
          <div className="text-sm text-center">{footer.copyrightText}</div>
          <div className="text-sm text-center">
            Powered by{" "}
            <a href="https://devignitr.com" className="hover:underline">
              Dev Ignitr
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
