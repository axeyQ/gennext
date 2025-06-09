import HeroSectionsGallery from '@/components/pages/templates/HeroSectionGallery'
import PremiumTemplateShowcase from '@/components/pages/templates/PremiumTemplateShowcase'
import TemplateLibraryHero from '@/components/pages/templates/TemplateLibraryHero'
import React from 'react'

const page = () => {
  return (
    <>
        <TemplateLibraryHero/>
        <PremiumTemplateShowcase/>
        <HeroSectionsGallery/>
    </>
  )
}

export default page