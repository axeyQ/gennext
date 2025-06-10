'use client';
import TemplateLibraryHero from '@/components/pages/templates/TemplateLibraryHero';
import PremiumTemplateShowcase from '@/components/pages/templates/PremiumTemplateShowcase';
import HeroSectionGallery from '@/components/pages/templates/HeroSectionGallery';

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#040406_50%,#09080D_100%)]">
      <TemplateLibraryHero />
      <PremiumTemplateShowcase />
      <HeroSectionGallery />
    </div>
  );
}