import { EDUCATION } from "../data/portfolioData";
import FadeIn from "./FadeIn";

export default function Education() {
  return (
    <section id="education" className="section section--muted">
      <FadeIn>
        <div className="section__label">My academic background</div>
        <h2 className="section__title">Education</h2>
        <div className="section__divider" />
      </FadeIn>

      <div className="education-list">
        {EDUCATION.map((edu, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="card" style={{ borderLeft: "4px solid #0ea5e9" }}>
              <div className="edu-card__header">
                <div>
                  <div className="edu-card__degree">{edu.degree}</div>
                  <div className="edu-card__institution">{edu.institution}</div>
                </div>
                <span className="edu-card__period">{edu.period}</span>
              </div>
              <div className="edu-card__coursework-label">Relevant Coursework</div>
              <div className="edu-card__coursework">
                {edu.coursework.map((c) => (
                  <span key={c} className="pill pill--gray">{c}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
