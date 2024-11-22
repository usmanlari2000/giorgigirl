"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Context } from "@/app/context";

export default function Header() {
  const data = useContext(Context);
  const header = data.find(
    (item) => item._id == "e58c7217-f1e5-4936-8c94-120f5e16e041"
  );
  const pathname = usePathname();

  return (
    <header className={pathname != "/" ? "bg-[#f5f5f5]" : ""}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-y-2 max-w-screen-xl mx-auto px-4 py-2">
        <div className="flex items-center gap-x-10">
          <Link href="/">
            <Image
              src="/GG-Logo-Horizontal.png"
              alt=""
              width={350}
              height={397}
              loading="eager"
              className="h-[72px] w-auto"
            />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex gap-x-12">
              {header.links.map((link, index) => (
                <li key={index} className="flex gap-x-12">
                  <Link
                    href={link.destination}
                    className={`${pathname == link.destination ? "text-[#b89958]" : ""} hover:text-[#b89958] transition-colors duration-500`}
                  >
                    {link.title}
                  </Link>
                  {index != header.links.length - 1 ? (
                    <div className="h-3/4 border-[0.5px] border-[#4c4c4c] skew-x-[150deg] relative top-1"></div>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <a
          href={`mailto:${header.emailAddress}`}
          className="hover:text-[#b89958] transition-colors duration-500"
        >
          {header.emailAddress}
        </a>
      </div>
    </header>
  );
}
