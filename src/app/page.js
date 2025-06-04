import Hero from "@/components/sections/Hero";
import LogoScrollSection from "@/components/sections/LogoScrollSection";
import Navbar from "@/components/shared/Navbar";
import TrainSectionOne from "@/components/sections/TrainSectionOne";
import TrainSectionTwo from "@/components/sections/TrainSectionTwo";
import VideoSection from "@/components/ui/VideoSection";
export default function Home() {
  return (
    <div className="bg-[linear-gradient(180deg,_#040406_50%,_#09080D_100%)]">
      <Navbar/>
      <Hero/>
      <LogoScrollSection/>

      <TrainSectionOne/>
      <div className=" px-8">
         <TrainSectionTwo/>
      </div>
    </div>
  );
}
