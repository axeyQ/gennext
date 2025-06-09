import Hero from "@/components/sections/Hero";
import LogoScrollSection from "@/components/sections/LogoScrollSection";
import Navbar from "@/components/shared/Navbar";
import TrainSectionTwo from "@/components/sections/TrainSectionTwo";
import FeatureSection from "@/components/sections/FeatureSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import AutoGenChatbot from "@/components/ui/AutoGenChatBot";
import ThreeSteps from "@/components/sections/ThreeSteps";
import TipOne from "@/components/sections/TipOne";
import TipTwo from "@/components/sections/TipTwo";
import TipThree from "@/components/sections/TipThree";
import TipFour from "@/components/sections/TipFour";
import TipFive from "@/components/sections/TipFive";
import FAQSection from "@/components/sections/FAQSection";
export default function Home() {
  return (
    <div className="bg-[linear-gradient(180deg,_#040406_50%,_#09080D_100%)]">
        <Hero/>
      <LogoScrollSection/>
      <ThreeSteps/>
      <TipOne/>
      <TipTwo/>
      <TipThree/>
      <TipFour/>
      <TipFive/>
         <TrainSectionTwo/>
        <div className="px-8">
         <FeatureSection/>
        </div>
        <PricingSection/>
        <TestimonialSection/>
        <ContactSection/>
        <AboutUsSection/>
        <FAQSection/>
        <AutoGenChatbot/>

    </div>
  );
}
