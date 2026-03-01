import { SKILLS } from "../data/portfolioData";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="section section--white">
      <FadeIn>
        <div className="section__label">What I work with</div>
        <h2 className="section__title">Skills &amp; Technologies</h2>
        <div className="section__divider" />
      </FadeIn>

      <div className="skills-grid">
        {Object.entries(SKILLS).map(([category, items], i) => (
          <FadeIn key={category} delay={i * 0.07}>
            <div className="card">
              <div className="skill-card__category">{category}</div>
              <div className="skill-card__tags">
                {items.map((skill) => (
                  <span key={skill} className="pill pill--gray">{skill}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
