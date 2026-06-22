import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="projects section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Selected work</p>
            <h2 id="projects-title">Projects built to be used, explored, and felt.</h2>
          </div>
          <p>
            A selection of full-stack, AI, IoT, and interactive 3D work. Each project started with a
            practical problem and became a chance to learn something new.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
