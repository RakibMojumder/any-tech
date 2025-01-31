"use client";

import Image from "next/image";
import HeroBackgroundImage from "./hero-background-image";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <>
      <section
        id="home-hero__content__container"
        className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[20%]"
      >
        <div className="container mx-auto relative z-10 w-full h-full md:flex md:items-center md:justify-center pb-12 lg:pb-0">
          <div className="h-fit lg:flex-[65%] xl:flex-[75%]">
            <div className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
              <h1 className="text-[56px] lg:text-[80px] font-semibold text-white tracking-tight leading-[115%]">
                Embrace the future of finance
              </h1>

              <h5 className="max-w-[590px] lg:mr-5 font-semibold">
                Reimagine financial services with AnyTech&apos;s open platform,
                distributed banking solution that powers transformation
              </h5>
            </div>

            <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
              <button className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs bg-primary text-link text-white flex items-center justify-center space-x-[8px] font-semibold text-lg group/highlight">
                <span>Reach Out to Us</span>

                <svg
                  width="6"
                  height="9"
                  viewBox="0 0 6 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="translate-x-3.5 transition-transform group-hover/highlight:translate-x-5"
                >
                  <path
                    d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute top-10 xl:left-[32%] xl:w-[68%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none">
          <motion.div
            initial={{ x: 60 }}
            animate={{ x: 0, transition: { duration: 1.5 } }}
            className="h-full"
          >
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?auto=format"
              alt="background image"
              className="h-full w-full object-cover object-center"
              width={600}
              height={600}
            />
          </motion.div>

          <div className="gradient-overlay"></div>
        </div>

        <HeroBackgroundImage />

        <svg
          className="block lg:hidden absolute top-0 left-0 w-[110%] h-[65%] objectCover"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 797 645"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="hero-background-mobile">
            <g
              id="dark"
              style={{
                transform:
                  "translate3d(0%, 0.218%, 0px); transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);",
              }}
            >
              <g id="Group" style={{ mixBlendMode: "multiply" }}>
                <path
                  id="Vector"
                  d="M797 437.791V345L497 645H589.791L797 437.791Z"
                  fill="url(#paint0_linear_6_180)"
                ></path>
              </g>
              <g id="Group_2" style={{ mixBlendMode: "multiply" }}>
                <path
                  id="Vector_2"
                  d="M409.788 305V109.212L0 519.004H195.789L409.788 305Z"
                  fill="url(#paint1_linear_6_180)"
                ></path>
              </g>
              <g id="Group_3" style={{ mixBlendMode: "multiply" }}>
                <path
                  id="Vector_3"
                  d="M684 365.595V0L39 644.991H404.596L684 365.595Z"
                  fill="url(#paint2_linear_6_180)"
                ></path>
              </g>
            </g>
            <g
              id="light"
              clipPath="url(#clip0_6_180)"
              style={{
                transform:
                  "translate3d(0%, 1.09%, 0px); transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);",
              }}
            >
              <g id="Group_4" filter="url(#filter0_f_6_180)">
                <path
                  id="Vector_4"
                  d="M684 272.067V200L451 433H523.068L684 272.067Z"
                  fill="url(#paint3_linear_6_180)"
                ></path>
              </g>
              <g id="Group_5" filter="url(#filter1_f_6_180)">
                <path
                  id="Vector_5"
                  d="M706.1 69L485 290.1H500.8L706.1 84.8V69Z"
                  fill="url(#paint4_linear_6_180)"
                ></path>
              </g>
              <g id="Group_6" filter="url(#filter2_f_6_180)">
                <path
                  id="Vector_6"
                  d="M111 313H284L111 486V313Z"
                  fill="url(#paint5_linear_6_180)"
                ></path>
                <path
                  id="Vector_7"
                  d="M111 313H284L111 486V313Z"
                  fill="url(#paint6_linear_6_180)"
                ></path>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_6_180"
              x="420"
              y="169"
              width="295"
              height="295"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="15.5"
                result="effect1_foregroundBlur_6_180"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter1_f_6_180"
              x="473"
              y="57"
              width="245.1"
              height="245.1"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="6"
                result="effect1_foregroundBlur_6_180"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter2_f_6_180"
              x="78"
              y="280"
              width="239"
              height="239"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="16.5"
                result="effect1_foregroundBlur_6_180"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_6_180"
              x1="366"
              y1="923"
              x2="707"
              y2="519.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_6_180"
              x1="-276.407"
              y1="1105.58"
              x2="443.103"
              y2="254.197"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_6_180"
              x1="971.501"
              y1="1062"
              x2="401"
              y2="388.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_6_180"
              x1="408.636"
              y1="452.001"
              x2="678.393"
              y2="221.805"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_6_180"
              x1="444.8"
              y1="308.131"
              x2="700.779"
              y2="89.6911"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_6_180"
              x1="111"
              y1="399.15"
              x2="284"
              y2="399.15"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint6_linear_6_180"
              x1="6.9711"
              y1="513.992"
              x2="251.76"
              y2="258.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA"></stop>
              <stop offset="1" stopColor="#1F80F0"></stop>
            </linearGradient>
            <clipPath id="clip0_6_180">
              <rect
                width="641"
                height="462"
                fill="white"
                transform="translate(78 57)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </section>
      <div className="block lg:hidden translate-y-[-30%] -mb-[30%] overflow-hidden">
        <figure
          style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)" }}
          className="object-cover overflow-hidden"
        >
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?auto=format"
            alt="background image"
            className="h-full w-full object-cover"
            width={600}
            height={600}
            sizes="55vw"
          />
        </figure>
      </div>
    </>
  );
};

export default HeroSection;
