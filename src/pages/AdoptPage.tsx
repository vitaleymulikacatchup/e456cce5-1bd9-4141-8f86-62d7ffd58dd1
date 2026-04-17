import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import FeaturesAlternatingSplit from '@/components/sections/features/FeaturesAlternatingSplit';
import FooterBrandReveal from '@/components/sections/footer/FooterBrandReveal';
import NavbarCentered from '@/components/ui/NavbarCentered';

export default function AdoptPage() {
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

  <div id="adopt-grid" data-section="adopt-grid">
      <FeaturesAlternatingSplit
      tag="Available Pets"
      title="Meet Our Residents"
      description="These wonderful animals are looking for their perfect match."
      items={[
        {
          title: "Buddy",
          description: "Energetic Terrier mix, loves playing fetch.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=8x12no",
        },
        {
          title: "Luna",
          description: "Calm Tabby cat, loves sunny windows.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h2qwbr",
        },
        {
          title: "Rex",
          description: "Gentle Golden Retriever, great with kids.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vovz92",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutTestimonial
      tag="Success Story"
      quote="We found our best friend thanks to the incredible team at Paws & Hope. The matching process was perfect."
      author="Lisa Reynolds"
      role="Adoptive Pet Parent"
      imageSrc="asset://new-testimonial-adopt"
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
