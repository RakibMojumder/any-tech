"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const tabContents = [
  {
    subtitle: "AGILE AND ADAPTABLE",
    title: "Agile and adaptable for growth",
    description:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    additionalText:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=640&auto=format",
  },
  {
    subtitle: "CUSTOMER FOCUSED",
    title: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    additionalText:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format",
  },
  {
    subtitle: "COMPLIANCE READY",
    title: "Manage compliance with ease",
    description:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    additionalText:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&auto=format",
  },
  {
    subtitle: "SECURE AND SAFE",
    title: "Highly secure and safe",
    description:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    additionalText:
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=640&auto=format",
  },
];

interface TabContentProps {
  activeTab: number;
  onSlideChange: (index: number) => void;
}

export function TabContent({ activeTab, onSlideChange }: TabContentProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== activeTab) {
      swiperRef.current.slideTo(activeTab);
    }
  }, [activeTab]);

  return (
    <Swiper
      modules={[Pagination]}
      speed={1000}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      simulateTouch={false}
      allowTouchMove={true}
      touchStartPreventDefault={false}
      className="mySwiper md:!pb-20"
    >
      {tabContents.map((content, index) => (
        <SwiperSlide key={index}>
          <div className="grid gap-8 lg:grid-cols-2 items-center p-6 lg:p-12 bg-white">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-blue-600 font-semibold tracking-wide">
                  {content.subtitle}
                </h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
                  {content.title}
                </h2>

                <Image
                  src={content.image}
                  alt="Technology"
                  className="object-cover w-full h-[150px] rounded-2xl md:hidden"
                  width={300}
                  height={150}
                />
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="font-semibold text-secondary">
                  {content.description}
                </p>
                <p>{content.additionalText}</p>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden hidden md:block">
              <Image
                src={content.image}
                alt="Technology"
                className="object-cover w-full h-full rounded-2xl"
                width={800}
                height={600}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
