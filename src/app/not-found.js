import { gothamBook, ellianaSamantha } from "./fonts";
import Header from "@/components/header";
import CallToAction from "@/components/callToAction";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>Page Not Found</title>
      </head>
      <body className={`${gothamBook.className} text-[#4c4c4c] antialiased`}>
        <Header />
        <main>
          <div className="max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-12 lg:py-16">
            <h1
              className={`${ellianaSamantha.className} text-[#bb9958] text-5xl lg:text-[90px] text-center`}
            >
              Page not found
            </h1>
          </div>
        </main>
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
