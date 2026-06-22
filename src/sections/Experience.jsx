import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section className="experience section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Professional experience</p>
            <h2 id="experience-title">Building at the intersection of systems and people.</h2>
          </div>
          <p>
            From distributed backend services to thoughtful healthcare interfaces, I’ve worked across
            the product stack to make complex technology more reliable, useful, and human.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <article className="experience-card glass-panel" key={item.id}>
              <div className="experience-card__rail" aria-hidden="true">
                <span className="experience-card__number">0{index + 1}</span>
                <span className="experience-card__line" />
              </div>

              <div className="experience-card__meta">
                <p>{item.period}</p>
                <span>{item.location}</span>
              </div>

              <div className="experience-card__content">
                <div className="experience-card__heading">
                  <div>
                    <p className="experience-card__company">{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>
                  {item.current && <span className="status-pill">Current role</span>}
                </div>

                <p className="experience-card__summary">{item.summary}</p>

                <ul className="experience-card__highlights">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>

                <ul className="tag-list" aria-label={`${item.role} skills and technologies`}>
                  {item.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
