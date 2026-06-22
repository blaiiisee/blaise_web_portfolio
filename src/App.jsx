import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'

const BackgroundScene = lazy(() => import('./components/BackgroundScene.jsx'))

const sectionIds = ['home', 'experience', 'projects', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    function updateActiveSection() {
      const marker = window.scrollY + window.innerHeight * 0.35
      let currentSection = sectionIds[0]

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) currentSection = id
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="background" aria-hidden="true">
        <Suspense fallback={null}>
          <BackgroundScene />
        </Suspense>
        <div className="background__wash" />
      </div>

      <Navbar activeSection={activeSection} />

      <main id="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p>Designed and built by Ivan Blaise Gonzales.</p>
          <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  )
}

export default App
