"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { philosophyItems } from "./philosophy-items";
import Image from "next/image";

const PhilosophyItemsMobile = () => {
  return (
    <div className="block md:hidden mt-8">
      <Swiper slidesPerView={"auto"} spaceBetween={30} className="mySwiper">
        {philosophyItems.map((item) => (
          <SwiperSlide key={item.title} className="!w-[275px] !h-auto">
            <div className="bg-[#F8FCFF] rounded-2xl p-6 space-y-4">
              <Image src={item.image} alt={item.title} width={50} height={50} />
              <h3 className="text-secondary text-xl md:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="text-secondary text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhilosophyItemsMobile;
