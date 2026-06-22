import Icon from '../components/ui/Icon.jsx'
import SkillGroup from '../components/SkillGroup.jsx'
import { skillGroups } from '../data/skills.js'

export default function Hero() {
  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow"><span /> Hello, I’m Ivan Blaise Gonzales</p>
          <h1 id="hero-title">
            Building thoughtful software with a <em>visual edge.</em>
          </h1>
          <p className="hero__intro">
            I’m a software engineer and creative web developer who enjoys turning complex systems into
            clear, interactive experiences—from full-stack and IoT platforms to AI and real-time 3D.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              Explore my work <Icon name="arrowUpRight" size={18} />
            </a>
            <a
              className="button button--ghost"
              href="/Resume - Ivan Blaise Gonzales.pdf"
              download="Resume - Ivan Blaise Gonzales.pdf"
            >
              <Icon name="download" size={18} /> Download résumé
            </a>
          </div>

          <div className="hero__socials" aria-label="Social links">
            <a href="https://github.com/blaiiisee" rel="noreferrer" target="_blank">
              <Icon name="github" size={19} /> GitHub
            </a>
            <a href="https://linkedin.com/in/ibrgonzales" rel="noreferrer" target="_blank">
              <Icon name="linkedin" size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="profile-card glass-panel">
          <div className="profile-card__image-wrap">
            <img src="/Display_Photo.jpg" alt="Ivan Blaise Gonzales" />
            <div className="profile-card__monogram" aria-hidden="true">IBG</div>
          </div>

          <div className="profile-card__details">
            <p>Software Engineer</p>
            <h2>Code, systems &amp; creative technology.</h2>
            <div className="profile-card__education">
              <span>Magna Cum Laude</span>
              <span>UP Diliman</span>
              <span>B.S. Computer Engineering</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container skills-grid" aria-label="Skills and tools">
        {skillGroups.map((group) => <SkillGroup group={group} key={group.title} />)}
      </div>
    </section>
  )
}
