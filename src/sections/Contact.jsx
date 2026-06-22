import ContactLink from '../components/ContactLink.jsx'
import Icon from '../components/ui/Icon.jsx'
import { contactMethods } from '../data/contact.js'

export default function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel glass-panel">
          <div className="contact-panel__intro">
            <p className="eyebrow"><span /> Get in touch</p>
            <h2 id="contact-title">Let’s make something genuinely useful.</h2>
            <p>
              Have a project, role, or collaboration in mind? Send me a note. I’m always happy to talk
              through an interesting technical or creative problem.
            </p>

            <a className="button button--primary" href="mailto:ivanblaise02@gmail.com">
              Start a conversation <Icon name="arrowUpRight" size={18} />
            </a>
          </div>

          <div className="contact-panel__methods">
            {contactMethods.map((method) => (
              <ContactLink key={method.id} method={method} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
