'use client';
import { useEffect } from 'react';
import { useProgressiveLoading } from '@/components/hooks/useProgressiveLoading';
import { TEMPLATE_LOADING_STAGES } from '@/utils/loadingStages';
import TemplateLibraryHero from '@/components/pages/templates/TemplateLibraryHero';
import PremiumTemplateShowcase from '@/components/pages/templates/PremiumTemplateShowcase';
import HeroSectionGallery from '@/components/pages/templates/HeroSectionGallery';

export default function TemplatesPage() {
  const {
    setProgress,
    runStages,
    markComponentLoaded,
    markImageLoaded,
    markDataLoaded
  } = useProgressiveLoading(TEMPLATE_LOADING_STAGES);

  useEffect(() => {
    // Initialize progressive loading for templates page
    const initializeTemplatesPage = async () => {
      // Stage 1: Fetch template data
      setProgress(10, 'Fetching template data...');
      await simulateDataFetch('templates');
      markDataLoaded('templates');

      // Stage 2: Load hero section
      setProgress(30, 'Loading hero section...');
      await new Promise(resolve => setTimeout(resolve, 500));
      markComponentLoaded('hero');

      // Stage 3: Load template showcase
      setProgress(60, 'Loading template showcase...');
      await new Promise(resolve => setTimeout(resolve, 800));
      markComponentLoaded('showcase');

      // Stage 4: Load gallery
      setProgress(90, 'Loading template gallery...');
      await new Promise(resolve => setTimeout(resolve, 600));
      markComponentLoaded('gallery');

      // Final stage
      setProgress(100, 'Templates loaded successfully!');
    };

    initializeTemplatesPage();
  }, [setProgress, markComponentLoaded, markDataLoaded]);

  // Simulate data fetching
  const simulateDataFetch = async (dataType) => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`${dataType} data fetched successfully`);
        resolve();
      }, Math.random() * 1000 + 500); // Random delay between 500-1500ms
    });
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#040406_50%,#09080D_100%)]">
      {/* Templates Hero Section */}
      <TemplateLibraryHero />
      
      {/* Premium Template Showcase */}
      <PremiumTemplateShowcase />
      
      {/* Hero Section Gallery */}
      <HeroSectionGallery />
    </div>
  );
}