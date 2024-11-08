import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import HeaderChild from "./headerChild";

const options = { next: { revalidate: 60 } };
const QUERY = defineQuery(`*[_type == "header"][0]`);

export default async function Header() {
  const header = await client.fetch(QUERY, {}, options);

  return <HeaderChild header={header} />;
}
