// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in ./<PageBase>/sections/<X>.tsx. Edit the section
// files directly. Non-block content (wrappers, non-inlinable sections) is
// preserved inline; extracted section blocks become <XSection/> refs.

import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import ZonesSection from './HomePage/sections/Zones';
import MenuSection from './HomePage/sections/Menu';
import TestimonialsSection from './HomePage/sections/Testimonials';
import ContactSection from './HomePage/sections/Contact';


import PricingCalculatorSection from './HomePage/sections/PricingCalculator';export default function HomePage(): React.JSX.Element {
  return (
<>
  <HeroSection />

  <AboutSection />

  <ZonesSection />

  <MenuSection />
      <PricingCalculatorSection />

  <TestimonialsSection />

  <ContactSection />
    </>
  );
}
