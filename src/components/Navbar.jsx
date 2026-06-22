const links = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  return (
    <header className="site-header">
      <nav className="glass-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#home" aria-label="Ivan Blaise Gonzales, home">
          IBG<span>.</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={activeSection === link.id ? 'nav-link is-active' : 'nav-link'}
              href={`#${link.id}`}
              key={link.id}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
