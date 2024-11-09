import { gothamBook } from "./fonts";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const runtime = 'edge';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${gothamBook.className} text-[#4c4c4c] antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
