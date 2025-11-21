import Image from "next/image";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-decoration contact-decoration--left">
        <Image
          src="/images/contact/left.svg"
          alt=""
          width={69}
          height={163}
          priority
        />
      </div>
      <div className="contact-decoration contact-decoration--right">
        <Image
          src="/images/contact/right.svg"
          alt=""
          width={180}
          height={224}
          priority
        />
      </div>
      <div className="contact-wrapper">
        <div className="contact-cta">
          <div className="contact-form-card">
            <p className="contact-form-eyebrow">Send us a Message</p>
            <form className="contact-form">
              <label className="contact-form-field">
                <span className="sr-only">Name</span>
                <input type="text" name="name" placeholder="Name" />
              </label>
              <label className="contact-form-field">
                <span className="sr-only">Email</span>
                <input type="email" name="email" placeholder="Email" />
              </label>
              <label className="contact-form-field contact-form-field--textarea">
                <span className="sr-only">How we can help you?</span>
                <textarea
                  name="message"
                  placeholder="How we can help you?"
                  rows={4}
                />
              </label>
              <button className="contact-form-button" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="contact-cta-content">
            <div className="contact-cta-copy">
              <h3>Schedule a Free Consultation</h3>
              <p>Or apply as a digital accessibility expert</p>
            </div>
            <div className="contact-accessibility-note">
              <Image
                src="/images/contact/hand-heart.svg"
                alt="Inclusive workplace"
                width={36}
                height={36}
                className="contact-accessibility-symbol"
                priority
              />
              <p>
                We are an accessible workplace. People with disabilities are
                welcome to apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}