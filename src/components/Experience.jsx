import { EXPERIENCE } from "../data/portfolioData";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="section section--muted">
      <FadeIn>
        <div className="section__label">Where I've worked</div>
        <h2 className="section__title">Experience</h2>
        <div className="section__divider" />
      </FadeIn>

      <div className="timeline">
        <div className="timeline__line" />
        {EXPERIENCE.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="timeline__item">
              <div className="timeline__dot-col">
                <div className="timeline__dot" />
              </div>
              <div className="card timeline__card">
                <div className="exp-card__header">
                  <div>
                    <div className="exp-card__role">{exp.role}</div>
                    <div className="exp-card__company">{exp.company}</div>
                  </div>
                  <span className="exp-card__period">{exp.period}</span>
                </div>
                <div className="exp-card__tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="pill pill--tech">{t}</span>
                  ))}
                </div>
                <ul className="exp-card__bullets">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="exp-card__bullet">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
