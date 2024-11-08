import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import TestimonialCarouselChild from "./testimonialCarouselChild";

const options = { next: { revalidate: 0 } };
const QUERY = defineQuery(`*[_type == "testimonialCarousel"][0]`);

export default async function TestimonialCarousel() {
  const testimonialCarousel = await client.fetch(QUERY, {}, options);

  return <TestimonialCarouselChild testimonialCarousel={testimonialCarousel} />;
}
