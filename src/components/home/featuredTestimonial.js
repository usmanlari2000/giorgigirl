import { butlerMedium, gothamLight } from "@/app/fonts";

export default function FeaturedTestimonial({ featuredTestimonial }) {
  return (
    <div className="max-w-screen-md lg:max-w-screen-xl mx-auto px-5 py-12">
      <p
        className={`mb-5 ${gothamLight.className} text-xl lg:text-[22px] text-center`}
      >
        "{featuredTestimonial.text}"
      </p>
      <p
        className={`${butlerMedium.className} text-lg lg:text-xl text-[#b89958] text-center`}
      >
        -{featuredTestimonial.by}
      </p>
    </div>
  );
}
