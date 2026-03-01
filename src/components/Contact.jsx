import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="section section--dark">
      <div className="section__center">
        <FadeIn>
          <div className="section__label section__label--light">Let's connect</div>
          <h2 className="section__title section__title--light">Get In Touch</h2>
          <div className="section__divider section__divider--center" />
          <p className="contact__bio">
            I'm actively looking for junior developer, data and AI roles in
            Ireland. Whether it's a project or a full-time opportunity, I'd
            love to hear from you!
          </p>
          <div className="contact__links">
            <a
              href="mailto:jesinthan.ie@gmail.com"
              className="contact__link contact__link--email"
            >
              jesinthan.ie@gmail.com
            </a>
            <a
              href="https://github.com/jesinthanj"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link contact__link--outline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jesinthan"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link contact__link--outline"
            >
              in LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
