"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { motion } from "motion/react";
import Image from "next/image";

const FeatureImage = () => {
  const [isVisible] = useScrollDirection();

  return (
    <div className="block relative h-fit lg:text-clip">
      <figure
        className="w-[76%] mx-auto"
        style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
      >
        <Image
          src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?auto=format"
          width={425}
          height={520}
          alt="POWERING THE FUTURE OF FINANCE"
          className="object-cover w-full h-full"
          sizes="(min-width: 1024px) 45vw, 95vw"
          loading="lazy"
        />
      </figure>
      <div>
        <figure className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?auto=format"
            width="116"
            height="115"
            alt="anybass"
            sizes="115px"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </figure>
        <figure className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format"
            width="89"
            height="88"
            alt="anypass"
            sizes="87px"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </figure>
        <figure className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?auto=format"
            width="74"
            height="75"
            alt="anycaas"
            sizes="73px"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </figure>
      </div>

      <motion.figure
        className="absolute inset-0 w-full h-full -z-10"
        whileInView={{
          translateY: isVisible ? 0 : 30,
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
        }}
      >
        <Image
          className="object-cover w-full h-full overflow-visible"
          loading="lazy"
          width={500}
          height={500}
          src="https://anytxn.com/backgrounds/home/futureOfFinance/background.svg"
          alt="background frame"
        />
      </motion.figure>
      <figure className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]">
        <Image
          className="object-cover w-full h-full overflow-visible"
          loading="lazy"
          width={500}
          height={500}
          src="https://anytxn.com/backgrounds/home/futureOfFinance/foreground.png"
          alt="foreground frame"
        />
      </figure>
    </div>
  );
};

export default FeatureImage;
