import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "Zones",
    "href": "#zones"
  },
  {
    "name": "Menu",
    "href": "#menu"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="noise" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="361 THREE SIX ONE"
      ctaButton={{
        text: "Explore",
        href: "#",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="361 THREE SIX ONE"
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Facebook",
              href: "#",
            },
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "TikTok",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 361 Three Six One. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/black-white-photo-circular-room-with-pillar-center_250224-126.jpg?_wi=2"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
