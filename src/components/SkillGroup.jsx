import Icon from './ui/Icon.jsx'

export default function SkillGroup({ group }) {
  return (
    <article className="skill-card glass-panel">
      <div className="skill-card__heading">
        <span className="icon-box"><Icon name={group.icon} size={21} /></span>
        <div>
          <h3>{group.title}</h3>
          <p>{group.description}</p>
        </div>
      </div>

      <ul className="skill-list" aria-label={`${group.title} technologies`}>
        {group.skills.map((skill) => (
          <li key={skill.name} title={skill.name}>
            <img src={skill.asset} alt="" loading="lazy" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
