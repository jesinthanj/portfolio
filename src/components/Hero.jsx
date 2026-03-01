import Avatar from "./Avatar";
import FadeIn from "./FadeIn";

export default function Hero({ onNavigate }) {
  return (
    <section id="about" className="hero">
      <div className="hero__inner">

        {/* Left: intro text */}
        <div className="hero__text">
          <FadeIn delay={0}>
            {/* <span className="hero__badge">
              Available for opportunities in Ireland 🇮🇪
            </span> */}
            <h1 className="hero__title">
              Hi, I'm <span className="hero__title-accent">Jesinthan</span>
            </h1>
            <p className="hero__bio">
              Full-Stack Developer with production experience building scalable
              web apps, REST APIs and AI-powered data pipelines. Proficient in
              React, Node.js, TypeScript and AWS with hands-on LLM integration experience.
            </p>
            <div className="hero__cta">
              <button className="btn-primary" onClick={() => onNavigate("Contact")}>
                Get in touch
              </button>
              <button className="btn-outline" onClick={() => onNavigate("Projects")}>
                View projects
              </button>
            </div>
            <div className="hero__links">
              <a href="mailto:jesinthan.ie@gmail.com" className="hero__link">
                jesinthan.ie@gmail.com
              </a>
              <a
                href="https://github.com/jesinthanj"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__link"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/jesinthan"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__link"
              >
                in LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right: avatar card */}
        <FadeIn delay={0.2}>
          <div className="hero__avatar-card">
            <Avatar />
            <div className="hero__avatar-info">
              <div className="hero__avatar-name">Jesinthan Joseph Durairaj</div>
              <div className="hero__avatar-sub">
                MSc Data & Computational Science · UCD
              </div>
              <div className="hero__avatar-tags">
                {["React", "Node.js", "Python", "AWS", "LLMs"].map((t) => (
                  <span key={t} className="pill pill--blue">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
