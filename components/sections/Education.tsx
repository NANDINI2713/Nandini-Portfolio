'use client'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export function Education() {
  return (
    <section id="education" className="py-16 lg:py-32">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Academic background
          </p>
          <h2
            className="animate-shimmer section-heading text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Education
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {portfolioData.education.map((edu, i) => (
            <motion.article
              key={edu.institution}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 0%, rgba(var(--accent-rgb),0.06) 0%, transparent 70%)',
                }}
                aria-hidden="true"
              />

              <div className="mb-5">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: 'var(--fg)', fontFamily: 'var(--font-syne)' }}
                >
                  {edu.institution}
                </h3>
                <p className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
                  {edu.degree}
                </p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs" style={{ color: 'var(--fg-muted)' }}>Graduated</span>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--fg)' }}
                  >
                    {edu.year}
                  </span>
                </div>
                <div className="w-px h-4" style={{ background: 'var(--border)' }} aria-hidden="true" />
                <div className="flex items-center gap-1.5">
                  <span className="text-xs" style={{ color: 'var(--fg-muted)' }}>GPA</span>
                  <span className="text-xs font-semibold" style={{ color: '#f59e0b' }}>
                    {edu.gpa}
                  </span>
                </div>
              </div>

              {/* Focus — specialization badges */}
              <div
                className="pt-5"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <p
                  className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  Specialization
                </p>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(edu.focus) ? edu.focus : [edu.focus]).map((topic, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        background: 'linear-gradient(135deg, rgba(var(--accent-rgb),0.08) 0%, rgba(167,139,250,0.08) 100%)',
                        border: '1px solid rgba(var(--accent-rgb),0.22)',
                        color: 'var(--accent)',
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: 'var(--accent)', boxShadow: '0 0 4px var(--accent)' }}
                        aria-hidden="true"
                      />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
