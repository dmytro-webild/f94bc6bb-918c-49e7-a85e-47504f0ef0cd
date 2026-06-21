// Created by add_section_from_catalog (HeroOverlay).

import React from 'react';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" id="hero">
      <HeroOverlay
        description="The Ultimate Landmark Cafe & Roastery in Surin."
        imageSrc="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2940&auto=format&fit=crop"
        title="361 THREE SIX ONE"
        primaryButton={{"text":"Explore Our Space","href":"#about"}}
        secondaryButton={{"text":"View Menu","href":"#menu"}}
        tag="Landmark Cafe & Roastery"
      />
    </div>
  );
}
