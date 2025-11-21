import Image from "next/image";

const contactDetails = [
  {
    icon: "/images/contact/contact-email-icon.svg",
    label: "Email",
    value: "hello@byteshifted.com",
  },
  {
    icon: "/images/contact/contact-phone-icon.svg",
    label: "Phone",
    value: "+45 60 47 52 64",
  },
];

const socialIcons = [
  { src: "/images/contact/social-1.svg", alt: "LinkedIn" },
  { src: "/images/contact/social-2.svg", alt: "X (Twitter)" },
  { src: "/images/contact/social-instagram.svg", alt: "Instagram" },
  { src: "/images/contact/social-4.svg", alt: "WhatsApp" },
];

const navSections = [
  {
    title: "Company",
    links: ["About Us", "Careers", "What We Do"],
  },
  {
    title: "Resources",
    links: ["Privacy Policy", "Cookies", "Terms & Conditions", "What We Do"],
  },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-contact">
            <Image
              src="/images/contact/contact-logo.svg"
              alt="Byteshifted wordmark"
              width={123}
              height={31}
              priority
            />

            <div className="footer-contact-details">
              {contactDetails.map((detail) => (
                <div className="footer-contact-detail" key={detail.label}>
                  <Image
                    src={detail.icon}
                    alt={`${detail.label} icon`}
                    width={26}
                    height={26}
                  />
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>

            <div className="footer-social">
              {socialIcons.map((icon) => (
                <button
                  key={icon.alt}
                  className="footer-social-button"
                  aria-label={icon.alt}
                  type="button"
                >
                  <Image src={icon.src} alt={icon.alt} width={30} height={30} />
                </button>
              ))}
            </div>
          </div>

          <span className="footer-vertical-line" />

          <div className="footer-nav">
            {navSections.map((section) => (
              <div className="footer-nav-section" key={section.title}>
                <p>{section.title}</p>
                <ul>
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" aria-label={link}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="footer-copy">© 2025 Byteshifted. All rights reserved.</p>
      </div>
    </footer>
  );
}