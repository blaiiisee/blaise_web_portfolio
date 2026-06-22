import Icon from './ui/Icon.jsx'

export default function ProjectCard({ project, index }) {
  return (
    <article className={`project-card glass-panel${project.featured ? ' project-card--featured' : ''}`}>
      <div className="project-card__media">
        <img src={project.image} alt={`Preview of ${project.title}`} loading={index === 0 ? 'eager' : 'lazy'} />
        <span className="project-number" aria-hidden="true">0{index + 1}</span>
      </div>

      <div className="project-card__content">
        <div>
          {project.featured && <p className="card-kicker">Featured project</p>}
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        <p className="project-summary">{project.summary}</p>

        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.links.map((link) => (
            <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
              <Icon name={link.type === 'github' ? 'github' : 'arrowUpRight'} size={18} />
              {link.label}
              <Icon name="arrowUpRight" size={16} />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
