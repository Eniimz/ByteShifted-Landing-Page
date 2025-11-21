import Image from "next/image";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-image-wrapper">
          <Image
            src="/images/cta/cta-crop.jpeg"
            alt="CTA illustration"
            width={725}
            height={725}
            className="cta-image"
          />
        </div>
        <div className="cta-content">
          <h2 className="cta-heading">Ready to Upgrade?</h2>
          <p className="cta-description">
            With Byteshifted Email Hosting, you'll enjoy professional branding,
            enterprise-grade protection, and reliable performance, all at a
            price that scales with your business.
          </p>
          <button className="cta-button">Upgrade Your Email Now !</button>
        </div>
      </div>
    </section>
  );
}