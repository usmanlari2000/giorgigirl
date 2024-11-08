import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import urlFor from "@/sanity/image";
import CallToAction from "@/components/callToAction";

const options = { next: { revalidate: 60 } };
const QUERY = defineQuery(`*[_type == "portfolio"][0]`);

export async function generateMetadata() {
  const portfolio = await client.fetch(QUERY, {}, options);

  return {
    title: portfolio.title,
    description: portfolio.description,
    openGraph: {
      title: portfolio.OGTitle,
      description: portfolio.OGDescription,
      url: "https://giorgigirl.com/portfolio",
      images: urlFor(portfolio.OGImage).url(),
    },
  };
}

export default function Page() {
  return (
    <>
      <CallToAction />
    </>
  );
}
