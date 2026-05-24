'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export function Experience() {
  const lineRef = useRef<HTMLDivElement>(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-16 lg:py-32">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Career
          </p>
          <h2
            className="animate-shimmer section-heading text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Experience
          </h2>
        </motion.div>

        {/* Single-column timeline */}
        <div className="relative">
          {/* Vertical line — draws in on scroll */}
          <div ref={lineRef} className="absolute left-5 top-0 bottom-0 w-px overflow-hidden" aria-hidden="true">
            <motion.div
              className="w-full h-full origin-top"
              style={{ background: 'linear-gradient(to bottom, var(--accent), rgba(var(--accent-rgb),0.15))' }}
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="flex flex-col gap-10">
            {portfolioData.experience.map((job, i) => (
              <div key={job.company} className="relative pl-10 sm:pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-5 top-7 -translate-x-1/2 w-4 h-4 rounded-full"
                  style={{
                    background: 'var(--accent)',
                    boxShadow: '0 0 14px rgba(var(--accent-rgb),0.55)',
                  }}
                  aria-hidden="true"
                />

                <motion.article
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass-card p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-2 sm:gap-3 mb-5">
                    <div>
                      <h3
                        className="text-xl font-bold mb-1"
                        style={{ color: 'var(--fg)', fontFamily: 'var(--font-syne)' }}
                      >
                        {job.role}
                      </h3>
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-sm hover:underline"
                          style={{ color: 'var(--accent)' }}
                        >
                          {job.company}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
                          {job.company}
                        </p>
                      )}
                    </div>
                    <p
                      className="text-xs font-medium px-3 py-1 rounded-full shrink-0"
                      style={{
                        background: 'rgba(var(--accent-rgb),0.08)',
                        border: '1px solid rgba(var(--accent-rgb),0.2)',
                        color: 'var(--accent)',
                      }}
                    >
                      {job.start} — {job.end}
                    </p>
                  </div>

                  <ul className="space-y-2.5" role="list">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-relaxed">
                        <span
                          className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: '#f59e0b' }}
                          aria-hidden="true"
                        />
                        <span style={{ color: 'var(--fg-muted)' }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
