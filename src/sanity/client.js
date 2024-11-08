import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "len6o02v",
  dataset: "production",
  apiVersion: "2024-11-03",
  useCdn: false,
});
