'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const ALL = 'All'

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

type Project = typeof portfolioData.projects[number]

export function Projects() {
  const [projects, setProjects] = useState<Project[]>(portfolioData.projects)
  const [active, setActive] = useState(ALL)

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => r.json())
      .then((data: Project[]) => {
        if (!Array.isArray(data) || data.length === 0) return
        const staticUrls = new Set(portfolioData.projects.map((p) => p.github?.toLowerCase()))
        const newOnly = data.filter((p) => !staticUrls.has(p.github?.toLowerCase()))
        if (newOnly.length > 0) setProjects([...portfolioData.projects, ...newOnly])
      })
      .catch(() => {})
  }, [])

  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))]
  const filtered = active === ALL ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-16 lg:py-32">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Work
          </p>
          <h2
            className="animate-shimmer section-heading text-4xl sm:text-5xl mb-8"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Projects
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={
                  active === cat
                    ? { background: 'var(--accent)', color: '#000' }
                    : {
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        color: 'var(--fg-muted)',
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Horizontal scroll row */}
        <div
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 -mx-4 sm:mx-0 px-4 sm:px-0"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(var(--accent-rgb),0.4) transparent',
            WebkitOverflowScrolling: 'touch',
          } as React.CSSProperties}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <TiltCard key={project.name} className="flex-none" style={{ width: 'min(280px, 80vw)' }}>
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card overflow-hidden group relative h-full animate-border-glow"
              >
                {/* Gradient header */}
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                >
                  <span
                    className="text-4xl font-bold opacity-20 select-none"
                    style={{ fontFamily: 'var(--font-syne)', color: 'var(--fg)' }}
                    aria-hidden="true"
                  >
                    {project.name.slice(0, 2).toUpperCase()}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label={`GitHub repo for ${project.name}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitHubIcon />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label={`Live demo for ${project.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3
                      className="font-bold text-base leading-snug"
                      style={{ color: 'var(--fg)', fontFamily: 'var(--font-syne)' }}
                    >
                      {project.name}
                    </h3>
                    <span
                      className="shrink-0 text-xs px-2 py-0.5 rounded"
                      style={{
                        background: 'var(--bg-secondary)',
                        color: 'var(--fg-muted)',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--fg-muted)' }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(var(--accent-rgb),0.06)',
                          border: '1px solid rgba(var(--accent-rgb),0.15)',
                          color: 'var(--accent)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
              </TiltCard>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
