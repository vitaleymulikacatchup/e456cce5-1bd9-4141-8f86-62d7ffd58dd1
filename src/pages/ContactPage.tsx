import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBrandReveal from '@/components/sections/footer/FooterBrandReveal';
import NavbarCentered from '@/components/ui/NavbarCentered';

export default function ContactPage() {
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

  <div id="contact-form" data-section="contact-form">
      <ContactSplitForm
      tag="Contact Us"
      title="Get in touch today"
      description="Have questions about adoption? Send us a message."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help?",
        rows: 4,
      }}
      buttonText="Send Message"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=pf7lnq"
    />
  </div>

  <div id="about" data-section="about">
      <AboutTestimonial
      tag="Feedback"
      quote="Responsive and helpful communication during the entire process."
      author="Sam White"
      role="Community Partner"
      imageSrc="asset://new-testimonial-contact"
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
