'use client'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

export function About() {
  return (
    <section id="about" className="py-16 lg:py-32" style={{ background: 'var(--bg-secondary)' }}>
      <div className="page-container">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mb-10 lg:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Who I am
          </p>
          <h2
            className="animate-shimmer section-heading text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            About Me
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-base sm:text-xl leading-relaxed mb-5"
            style={{ color: 'var(--fg)' }}
          >
            {portfolioData.about.bio}
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-sm sm:text-lg leading-relaxed mb-10"
            style={{ color: 'var(--fg-muted)' }}
          >
            {portfolioData.about.extended}
          </motion.p>

          {/* Highlight chips */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="flex flex-wrap gap-3"
          >
            {portfolioData.about.highlights.map((chip) => (
              <motion.span
                key={chip}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(var(--accent-rgb),0.25)',
                  color: 'var(--accent)',
                }}
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
