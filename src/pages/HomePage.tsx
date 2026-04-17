import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FooterBrandReveal from '@/components/sections/footer/FooterBrandReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import NavbarCentered from '@/components/ui/NavbarCentered';
import { Award, Heart, Home } from "lucide-react";

export default function HomePage() {
  return (
    <>
  <div id="nav" data-section="nav">
      <NavbarCentered
      logo="Paws & Hope"
      navItems={[
        {
          name: "Home",
          href: "/",
        },
        {
          name: "Adopt",
          href: "/adopt",
        },
        {
          name: "Volunteer",
          href: "/volunteer",
        },
        {
          name: "Contact",
          href: "/contact",
        },
      ]}
      ctaButton={{
        text: "Donate",
        href: "/donate",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      tag="Find Your Best Friend"
      title="Every Pet Deserves a Second Chance"
      description="We are a dedicated team committed to rescuing, rehabilitating, and finding loving forever homes for pets in need."
      primaryButton={{
        text: "View Pets",
        href: "/adopt",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "#about",
      }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ynkrum"
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricsIconCards
      tag="Our Impact"
      title="Shelter Highlights"
      description="Together with our community, we have achieved so much."
      metrics={[
        {
          icon: Heart,
          title: "Pets Adopted",
          value: "1,200+",
        },
        {
          icon: Home,
          title: "Currently Rescued",
          value: "45",
        },
        {
          icon: Award,
          title: "Years Helping",
          value: "15+",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSimple
      tag="Questions?"
      title="Adoption FAQ"
      description="Common answers about our adoption process."
      items={[
        {
          question: "What are the adoption requirements?",
          answer: "We require a stable home environment, valid ID, and a vet reference.",
        },
        {
          question: "Can I return a pet?",
          answer: "Yes, we always take back our animals regardless of the timeframe.",
        },
        {
          question: "Do you adopt out-of-state?",
          answer: "Case-by-case evaluation based on transportation safety.",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutTestimonial
      tag="Happy Tails"
      quote="Adopting Buddy changed our lives. The team at Paws & Hope provided such a smooth and compassionate experience."
      author="Jane and Mark D."
      role="Adoptive Family"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=7z6qc6"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricsMediaCards
      tag="Our Growth"
      title="Building a Better Future"
      description="Our community-driven efforts continue to grow year over year."
      metrics={[
        {
          value: "95%",
          title: "Success Rate",
          description: "Rehabilitation rate for our rescue animals.",
          imageSrc: "asset://new-stat-1",
        },
        {
          value: "24/7",
          title: "Support",
          description: "Dedicated care provided by our veterinary partners.",
          imageSrc: "asset://new-stat-2",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBrandReveal
      brand="Paws & Hope"
      columns={[
        {
          items: [
            {
              label: "Adopt",
              href: "/adopt",
            },
            {
              label: "Volunteer",
              href: "/volunteer",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "/contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
    </>
  );
}
