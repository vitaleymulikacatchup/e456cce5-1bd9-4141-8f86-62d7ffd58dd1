import FeaturesProfileCards from '@/components/sections/features/FeaturesProfileCards';
import FooterBrandReveal from '@/components/sections/footer/FooterBrandReveal';
import NavbarCentered from '@/components/ui/NavbarCentered';
import TeamMinimalCards from '@/components/sections/team/TeamMinimalCards';

export default function VolunteerPage() {
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

  <div id="volunteer-info" data-section="volunteer-info">
      <TeamMinimalCards
      tag="Volunteer"
      title="Help Us Help Them"
      members={[
        {
          name: "Sarah Smith",
          role: "Head Caretaker",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=iuffkc",
        },
        {
          name: "John Doe",
          role: "Pet Walker",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=7c8bei",
        },
        {
          name: "Alex Lee",
          role: "Adoption Coordinator",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=z36nsu",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeaturesProfileCards
      tag="Volunteer Roles"
      title="Join Our Team"
      description="Various ways you can contribute to our mission."
      items={[
        {
          title: "Pet Socializer",
          description: "Spend time playing and socializing with pets.",
          avatarSrc: "asset://new-avatar-1",
          buttonText: "Sign Up",
          imageSrc: "asset://new-vol-1",
        },
        {
          title: "Event Coordinator",
          description: "Help us organize local adoption events.",
          avatarSrc: "asset://new-avatar-2",
          buttonText: "Sign Up",
          imageSrc: "asset://new-vol-2",
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
