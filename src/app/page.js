// src/app/page.jsx (Optimized with Lazy Loading)
import Hero from "@/components/sections/Hero";
import LogoScrollSection from "@/components/sections/LogoScrollSection";

// Lazy-loaded components
import {
  DynamicThreeSteps,
  DynamicTipOne,
  DynamicTipTwo,
  DynamicTipThree,
  DynamicTipFour,
  DynamicTipFive,
  DynamicTrainSectionTwo,
  DynamicFeatureSection,
  DynamicPricingSection,
  DynamicTestimonialSection,
  DynamicContactSection,
  DynamicAboutUsSection,
  DynamicFAQSection,
  DynamicChatbot
} from "@/components/dynamic/DynamicComponents";

import { LazyComponent, LazyVideo } from "@/components/ui/LazyLoader";

export default function Home() {
  return (
    <div className="bg-[linear-gradient(180deg,_#040406_50%,_#09080D_100%)]">
      {/* Critical - Load immediately */}
      <Hero />
      <LogoScrollSection />

      {/* High Priority - Load when in viewport */}
      <LazyComponent delay={500}>
        <DynamicThreeSteps />
      </LazyComponent>

      <LazyComponent delay={800}>
        <DynamicTipOne />
      </LazyComponent>

      <LazyComponent delay={1000}>
        <DynamicTipTwo />
      </LazyComponent>

      {/* Medium Priority - Load when in viewport with more delay */}
      <LazyComponent delay={1200}>
        <DynamicTipThree />
      </LazyComponent>

      <LazyComponent delay={1400}>
        <DynamicTipFour />
      </LazyComponent>

      <LazyComponent delay={1600}>
        <DynamicTipFive />
      </LazyComponent>

      <LazyComponent delay={1800}>
        <DynamicTrainSectionTwo />
      </LazyComponent>

      {/* Feature Section - Heavy network diagrams */}
      <div className="px-8">
        <LazyComponent delay={2000}>
          <DynamicFeatureSection />
        </LazyComponent>
      </div>

      {/* Lower Priority - Load when scrolled to */}
      <LazyComponent delay={2200}>
        <DynamicPricingSection />
      </LazyComponent>

      <LazyComponent delay={2400}>
        <DynamicTestimonialSection />
      </LazyComponent>

      <LazyComponent delay={2600}>
        <DynamicContactSection />
      </LazyComponent>

      <LazyComponent delay={2800}>
        <DynamicAboutUsSection />
      </LazyComponent>

      <LazyComponent delay={3000}>
        <DynamicFAQSection />
      </LazyComponent>

      {/* Lowest Priority - Load last */}
      <LazyComponent delay={5000} viewport={false}>
        <DynamicChatbot />
      </LazyComponent>
    </div>
  );
}