"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HeaderChild({ header }) {
  const pathname = usePathname();

  return (
    <header className={pathname != "/" ? "bg-[#f5f5f5]" : ""}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-y-2 max-w-screen-xl mx-auto px-5 py-2">
        <div className="flex items-center gap-x-10">
          <Link href="/">
            <Image
              className="h-[72px] w-auto"
              src="/GG-Logo-Horizontal.webp"
              alt=""
              width={350}
              height={397}
            />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex gap-x-12">
              {header.links.map((link, index) => (
                <li key={index} className="flex gap-x-12">
                  <Link
                    className={`${
                      pathname == link.destination ? "text-[#b89958]" : ""
                    } hover:text-[#b89958] transition-colors duration-500`}
                    href={link.destination}
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
          className="hover:text-[#b89958] transition-colors duration-500"
          href={`mailto:${header.emailAddress}`}
        >
          {header.emailAddress}
        </a>
      </div>
    </header>
  );
}
