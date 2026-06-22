import { useState } from 'react'
import Icon from './ui/Icon.jsx'

export default function ContactLink({ method }) {
  const [copied, setCopied] = useState(false)

  async function copyContact() {
    if (!method.copyValue || !navigator.clipboard) return
    await navigator.clipboard.writeText(method.copyValue)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  const externalProps = method.href.startsWith('http')
    ? { target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <div className="contact-method">
      <a className="contact-method__link" href={method.href} {...externalProps}>
        <span className="contact-method__icon"><Icon name={method.icon} size={21} /></span>
        <span>
          <small>{method.label}</small>
          <strong>{method.display}</strong>
        </span>
        <Icon className="contact-method__arrow" name="arrowUpRight" size={19} />
      </a>

      {method.copyValue && (
        <button
          className="copy-button"
          onClick={copyContact}
          type="button"
          aria-label={`Copy ${method.label.toLowerCase()}`}
        >
          <Icon name={copied ? 'check' : 'copy'} size={17} />
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      )}
    </div>
  )
}
