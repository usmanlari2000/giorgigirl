import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import urlFor from "@/sanity/image";

const options = { next: { revalidate: 30 } };
const QUERY = defineQuery(`*[_type == "contact"][0]`);

export async function generateMetadata() {
  const contact = await client.fetch(QUERY, {}, options);

  return {
    title: contact.title,
    description: contact.description,
    openGraph: {
      title: contact.OGTitle,
      description: contact.OGDescription,
      url: "https://giorgigirl.com/contact",
      images: urlFor(contact.OGImage).url(),
    },
  };
}

export default function Page() {
  return <></>;
}
