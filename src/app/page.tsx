import ContactUs from "@/components/sections/contact/contact-us";
import FeatureSection from "@/components/sections/feature/feature-section";
import HeroSection from "@/components/sections/hero/hero-section";
import Philosophy from "@/components/sections/philosophy/philosophy";

const HomeHero = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Philosophy />
      <ContactUs />
    </>
  );
};

export default HomeHero;
