import Image from "next/image";
import React from "react";
import PhilosophyItems from "./philosophy-items";
import PhilosophyItemsMobile from "./philosophy-items-mobile";

const Philosophy = () => {
  return (
    <div className="container py-10">
      <h4 className="font-bold text-blue-500 tracking-widest text-center text-sm md:text-base">
        OUR PHILOSOPHY
      </h4>
      <h1 className="text-secondary text-3xl md:text-4xl lg:text-6xl font-semibold text-center my-4 md:my-8">
        Human-centred innovation
      </h1>

      <figure>
        <Image
          height={700}
          width={1600}
          src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1600&auto=format"
          alt="image"
          className="hidden md:block"
        />

        <Image
          src="https://cdn.sanity.io/images/6jywt20u/production/50bc481601f8adb912da12788f7d0143eb5b5eb3-1710x1965.png?w=1600&auto=format"
          alt="image"
          height={700}
          width={1600}
          className="block md:hidden"
        />
      </figure>

      <PhilosophyItems />
      <PhilosophyItemsMobile />
    </div>
  );
};

export default Philosophy;
