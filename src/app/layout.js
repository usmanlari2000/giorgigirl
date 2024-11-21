import "./globals.css";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import ContextProvider from "./context";

export const runtime = "edge";
export const revalidate = 60;

const options = { next: { revalidate } };
const QUERY = defineQuery(`*`);

export default async function Layout({ children }) {
  const data = await client.fetch(QUERY, {}, options);

  return <ContextProvider data={data}>{children}</ContextProvider>;
}
