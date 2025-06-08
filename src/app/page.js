import Hero from "@/components/sections/Hero";
import LogoScrollSection from "@/components/sections/LogoScrollSection";
import Navbar from "@/components/shared/Navbar";
import TrainSectionOne from "@/components/sections/TrainSectionOne";
import TrainSectionTwo from "@/components/sections/TrainSectionTwo";
import HeroSample from "@/components/sections/HeroSample";
import FeatureSection from "@/components/sections/FeatureSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Footer from "@/components/shared/Footer";
export default function Home() {
  return (
    <div className="bg-[linear-gradient(180deg,_#040406_50%,_#09080D_100%)]">
      <Navbar/>
        <HeroSample/>
      <LogoScrollSection/>
      <TrainSectionOne/>
         <TrainSectionTwo/>
        <div className="px-8">
         <FeatureSection/>
        </div>
        <PricingSection/>
        <TestimonialSection/>
        <Footer/>

    </div>
  );
}
