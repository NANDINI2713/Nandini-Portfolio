'use client'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const categoryColors: Record<string, string> = {
  Languages:          'var(--accent)',
  'Frameworks & APIs':'#f59e0b',
  'ML & AI':          '#a78bfa',
  'Data & Pipelines': '#34d399',
  'Data Science':     '#fb923c',
  'Cloud & DevOps':   '#f87171',
  Specialties:        '#e879f9',
}

export function Skills() {
  const categories = Object.entries(portfolioData.skills)

  return (
    <section id="skills" className="py-16 lg:py-32" style={{ background: 'var(--bg-secondary)' }}>
      <div className="page-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Toolkit
          </p>
          <h2
            className="animate-shimmer section-heading text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Skills
          </h2>
        </motion.div>

        <div className="space-y-10">
          {categories.map(([category, skills], catIndex) => {
            const accent = categoryColors[category] ?? 'var(--accent)'
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: accent }} aria-hidden="true" />
                  <h3
                    className="text-sm font-semibold tracking-wide uppercase"
                    style={{ color: accent, fontFamily: 'var(--font-syne)' }}
                  >
                    {category}
                  </h3>
                  <div className="flex-1 h-px" style={{ background: 'var(--border)' }} aria-hidden="true" />
                </div>

                <div
                  className="flex flex-wrap gap-2.5"
                  role="list"
                  aria-label={`${category} skills`}
                >
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      role="listitem"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.04 }}
                      whileHover={{
                        scale: 1.08,
                        y: -3,
                        boxShadow: `0 8px 24px ${accent}33`,
                      }}
                      className="px-4 py-2 rounded-full text-sm font-medium cursor-default select-none"
                      style={{
                        background: 'var(--bg-card)',
                        border: `1px solid ${accent}33`,
                        color: 'var(--fg)',
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
