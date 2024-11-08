import { defineQuery } from "next-sanity";
import { client } from "../../sanity/client";
import urlFor from "@/sanity/image";
import CallToAction from "@/components/callToAction";

const options = { next: { cache: "no-store" } };
const QUERY = defineQuery(`*[_type == "about"][0]`);

export async function generateMetadata() {
  const about = await client.fetch(QUERY, {}, options);

  return {
    title: about.title,
    description: about.description,
    openGraph: {
      title: about.OGTitle,
      description: about.OGDescription,
      url: "https://giorgigirl.com/about",
      images: urlFor(about.OGImage).url(),
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
