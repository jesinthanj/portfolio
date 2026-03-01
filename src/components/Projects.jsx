import { PROJECTS } from "../data/portfolioData";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="section section--white">
      <FadeIn>
        <div className="section__label">What I've built</div>
        <h2 className="section__title">Projects</h2>
        <div className="section__divider" />
      </FadeIn>

      <div className="projects-grid">
        {PROJECTS.map((proj, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              className="card project-card"
              style={{ borderTop: `4px solid ${proj.color}` }}
            >
              <div
                className="project-card__org"
                style={{ color: proj.color }}
              >
                {proj.org}
              </div>
              <div className="project-card__title">{proj.title}</div>
              <div className="project-card__tech">
                {proj.tech.map((t) => (
                  <span key={t} className="pill pill--gray">{t}</span>
                ))}
              </div>
              <ul className="project-card__bullets">
                {proj.bullets.map((bullet, j) => (
                  <li key={j} className="project-card__bullet">{bullet}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
