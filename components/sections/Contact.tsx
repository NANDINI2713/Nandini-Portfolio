'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}


function EmailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

const socials = [
  { label: 'GitHub', href: portfolioData.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: portfolioData.linkedin, Icon: LinkedInIcon },
  { label: 'Email', href: `mailto:${portfolioData.email}`, Icon: EmailIcon },
].filter((s) => s.href)

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(null)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio message from ${form.name}`,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error('send failed')
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setError('Something went wrong. Please try emailing me directly.')
    } finally {
      setSending(false)
    }
  }

  const inputStyle = (field: string) => ({
    background: 'var(--bg-card)',
    border: `1px solid ${focused === field ? 'var(--accent)' : 'var(--border)'}`,
    color: 'var(--fg)',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxShadow: focused === field ? '0 0 0 3px rgba(var(--accent-rgb),0.1)' : 'none',
    borderRadius: 10,
    width: '100%',
    padding: '12px 16px',
    fontSize: 14,
    fontFamily: 'inherit',
  })

  return (
    <section id="contact" className="py-16 lg:py-32" style={{ background: 'var(--bg-secondary)' }}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Get in touch
          </p>
          <h2
            className="animate-shimmer section-heading text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Contact
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  aria-label="Contact form"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('name')}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('email')}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 120 }}
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-center" style={{ color: '#f87171' }}>
                      {error}
                    </p>
                  )}
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={sending ? {} : { scale: 1.02 }}
                    whileTap={sending ? {} : { scale: 0.98 }}
                    className="w-full py-3.5 rounded-full font-semibold text-sm transition-all"
                    style={{
                      background: sending ? 'rgba(var(--accent-rgb),0.4)' : 'var(--accent)',
                      color: '#000',
                      boxShadow: sending ? 'none' : '0 0 24px rgba(var(--accent-rgb),0.3)',
                      cursor: sending ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {sending ? 'Sending…' : 'Send Message →'}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-10 flex flex-col items-center text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-5"
                    style={{ background: 'rgba(var(--accent-rgb),0.1)', border: '1px solid rgba(var(--accent-rgb),0.3)' }}
                    aria-hidden="true"
                  >
                    ✓
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--fg)', fontFamily: 'var(--font-syne)' }}
                  >
                    Message sent!
                  </h3>
                  <p className="text-sm mb-6" style={{ color: 'var(--fg-muted)' }}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-medium"
                    style={{ color: 'var(--accent)' }}
                  >
                    Send another →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Socials + email */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: 'var(--fg)', fontFamily: 'var(--font-syne)' }}
              >
                Let's build something great.
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                Open to full-time roles, consulting, and interesting side projects. Drop me a line or
                find me on any of the platforms below.
              </p>
            </div>

            {/* Email display */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>
                Email
              </p>
              <a
                href={`mailto:${portfolioData.email}`}
                className="text-base font-medium transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--fg)' }}
              >
                {portfolioData.email}
              </a>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--fg-muted)' }}>
                Social
              </p>
              <div className="flex flex-col gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 group"
                    aria-label={label}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:border-[var(--accent)]/40"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className="text-sm font-medium transition-colors group-hover:text-[var(--accent)]"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
