import FeatureImage from "./feature-image";

const FeatureSection = () => {
  return (
    <>
      <section className="container mt-24 md:mt-36 lg:mt-[62px] relative">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[15px] items-start relative">
          <div className="md:space-y-8">
            <h6 className="text-blue-500 tracking-widest font-bold uppercase text-sm md:text-base">
              POWERING THE FUTURE OF FINANCE
            </h6>
            <h2 className="whitespace-pre-line text-3xl md:text-[45px] lg:text-[56px] leading-[110%] text-secondary font-semibold mt-5 md:mt-0">
              Uncovering new ways to delight customers
            </h2>

            <div className="block md:hidden my-20">
              <FeatureImage />
            </div>

            <p className="text-secondary text-sm md:text-base">
              <strong>
                AnyTech is revolutionising financial technology by introducing
                innovative and real-time transaction account processing
                capabilities, specifically designed for retail financial
                services.
              </strong>
            </p>

            <p className="text-secondary mt-5 md:mt-0 text-sm md:text-base">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>

          <div className="hidden md:block">
            <FeatureImage />
          </div>
        </div>
      </section>

      <svg
        className="max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default FeatureSection;
