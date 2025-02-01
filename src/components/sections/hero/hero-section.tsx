import Image from "next/image";
import HeroBackgroundImage from "./hero-background-image";
import * as motion from "motion/react-client";
import HeroBackgroundImageMobile from "./hero-background-image-mobile";

const HeroSection = () => {
  return (
    <>
      <section
        id="hero_container"
        className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white hero-bg-clip overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[20%]"
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
        <HeroBackgroundImageMobile />
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
