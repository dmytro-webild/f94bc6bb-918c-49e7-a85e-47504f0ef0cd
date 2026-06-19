import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBorderGlow from '@/components/sections/features/FeaturesBorderGlow';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroCenteredLogos from '@/components/sections/hero/HeroCenteredLogos';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { Camera, Coffee, Utensils } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroCenteredLogos
      title="361 THREE SIX ONE"
      description="The Ultimate Landmark Cafe & Roastery in Surin."
      primaryButton={{
        text: "Explore Our Space",        href: "#about"}}
      secondaryButton={{
        text: "View Menu",        href: "#menu"}}
      imageSrc="http://img.b2bpic.net/free-photo/black-white-photo-circular-room-with-pillar-center_250224-126.jpg"
      avatarsSrc={[]}
      avatarText=""
      names={[]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Our Heritage"
      title="A Blend of Nordic Design and Rice Mill Heritage"
      description="Spanning over 7 Rai, our cafe perfectly merges modern architecture with the nostalgic, warm soul of traditional teak wood rice mill construction."
      imageSrc="http://img.b2bpic.net/free-photo/beverage-baked-apples-near-napkin-leaves_23-2147885822.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="zones" data-section="zones">
    <SectionErrorBoundary name="zones">
          <FeaturesBorderGlow
      tag="Our Zones"
      title="Experience the Landmark"
      description="Three unique areas designed to elevate your sensory experience."
      features={[
        {
          icon: Coffee,
          title: "Specialty Roastery",          description: "In-house roasted beans, featuring a curated selection from light to dark roasts."},
        {
          icon: Utensils,
          title: "Dining & Shabu",          description: "More than just a cafe, a complete family dining experience centered on quality."},
        {
          icon: Camera,
          title: "The Skywalk",          description: "Breathtaking views of the 7 Rai grounds, providing endless unique photo spots."},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="menu" data-section="menu">
    <SectionErrorBoundary name="menu">
          <FeaturesRevealCardsBento
      tag="Signature Menu"
      title="Premium Selections"
      description="Hand-crafted quality in every cup and dish."
      items={[
        {
          title: "House Blend",          description: "Premium House Blend Coffee",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-charming-lady-with-dark-hair-white-tshirt-is-holding-cup-looking-window-sunshine-after-morning-wake-up_291650-2275.jpg"},
        {
          title: "Matcha",          description: "Strawberry Matcha Latte",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/food-cold-healthy-wood-mint_1172-510.jpg"},
        {
          title: "Pastries",          description: "Freshly baked artisan pastries daily",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chocolate-cake-with-blueberries-copy-space_23-2148689787.jpg"},
        {
          title: "Brunch",          description: "Gourmet seasonal lunch plates",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/fried-salmon-fillet-with-sauce-top_140725-6436.jpg"},
        {
          title: "Cold Brew",          description: "Slow-steeped cold brew",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-glass-cups_23-2149646424.jpg"},
        {
          title: "Dessert",          description: "Signature dessert creations",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/golden-dyed-chocolate-volcano-served-with-vanilla-ice-cream-berries-tea_141793-2309.jpg"},
        {
          title: "Espresso",          description: "Rich artisanal espresso",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/food-celebrating-world-tapas-day_23-2149361453.jpg"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Voices"
      title="What Our Guests Say"
      description="Community stories from the heart of Surin."
      testimonials={[
        {
          name: "Alice Chen",          role: "Travel Blogger",          quote: "The architecture is stunning and the roastery is world-class.",          imageSrc: "http://img.b2bpic.net/free-photo/pretty-blonde-woman-sitting-cafe_273609-6756.jpg"},
        {
          name: "David Miller",          role: "Food Critic",          quote: "A unique blend of heritage and modern luxury. The shabu is incredible.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-one-black-american-female-eats-gourmet-vegetarian-meal-drinks-wine-restaurant_613910-7365.jpg"},
        {
          name: "Sarah Smith",          role: "Local Resident",          quote: "My favorite place for a weekend brunch with family.",          imageSrc: "http://img.b2bpic.net/free-photo/mix-asian-woman-caucasian-men-people-meeting-friendship-togetherness-happiness-enjoy-coffee-shop-concept-casual-relax-moment_609648-2392.jpg"},
        {
          name: "James Wong",          role: "Coffee Enthusiast",          quote: "The signature house blend has notes I've never tasted before.",          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-gentle-tender-relaxed-urban-woman-wearing-glasses-enjoying-moment-sitting-alone-cafe_197531-22826.jpg"},
        {
          name: "Elena Rossi",          role: "Design Student",          quote: "An absolute masterclass in Nordic interior design.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-interesting-reddish-man-posing-with-coffee_158595-3757.jpg"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Visit Us"
      text="Open Daily 07:30 - 23:00 | Chaniang, Mueang Surin District."
      primaryButton={{
        text: "Get Directions",        href: "https://maps.google.com"}}
      secondaryButton={{
        text: "Contact Us",        href: "mailto:hello@361.com"}}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
