'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { useTypewriter } from '@/hooks/useTypewriter'

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let frame = 0
    const totalFrames = Math.round(duration * 60)
    const increment = target / totalFrames
    const timer = setInterval(() => {
      frame++
      setCount(Math.min(Math.round(increment * frame), target))
      if (frame >= totalFrames) clearInterval(timer)
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return <span ref={ref}>{count}</span>
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const PARTICLES = [
  { left: '5%',  top: '12%', size: 2,   delay: '0s',   dur: '6s',  color: 'var(--accent)' },
  { left: '18%', top: '80%', size: 3,   delay: '1.2s', dur: '8s',  color: '#f59e0b' },
  { left: '30%', top: '25%', size: 1.5, delay: '2.4s', dur: '7s',  color: '#a78bfa' },
  { left: '45%', top: '68%', size: 2.5, delay: '0.6s', dur: '9s',  color: 'var(--accent)' },
  { left: '60%', top: '15%', size: 1.5, delay: '3s',   dur: '6.5s',color: '#f59e0b' },
  { left: '72%', top: '55%', size: 2,   delay: '1.8s', dur: '7.5s',color: '#34d399' },
  { left: '85%', top: '30%', size: 3,   delay: '0.3s', dur: '8.5s',color: 'var(--accent)' },
  { left: '90%', top: '75%', size: 1.5, delay: '2s',   dur: '6s',  color: '#a78bfa' },
  { left: '12%', top: '45%', size: 2,   delay: '3.5s', dur: '7s',  color: '#f59e0b' },
  { left: '55%', top: '88%', size: 2.5, delay: '1s',   dur: '9.5s',color: 'var(--accent)' },
  { left: '38%', top: '5%',  size: 1.5, delay: '4s',   dur: '7s',  color: '#34d399' },
  { left: '78%', top: '90%', size: 2,   delay: '2.8s', dur: '8s',  color: '#f59e0b' },
]

export function Hero() {
  const role = useTypewriter(portfolioData.roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden mesh-bg"
    >
      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animation: `particle-float ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(var(--accent-rgb),0.06)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(245,158,11,0.05)' }}
        aria-hidden="true"
      />

      <div className="page-container w-full py-16 pt-24 lg:py-20 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: text */}
          <div>
            <motion.p
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="visible"
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
              style={{ color: 'var(--accent)' }}
            >
              Available for work
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="visible"
              className="section-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {portfolioData.tagline}
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 mb-6 h-10"
            >
              <span
                className="text-xl sm:text-2xl font-semibold"
                style={{ color: 'var(--fg-muted)', fontFamily: 'var(--font-syne)' }}
              >
                {role}
                <span
                  className="inline-block w-0.5 h-6 ml-1 animate-pulse-glow"
                  style={{ background: 'var(--accent)', verticalAlign: 'middle' }}
                  aria-hidden="true"
                />
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg leading-relaxed max-w-xl mb-8"
              style={{ color: 'var(--fg-muted)' }}
            >
              {portfolioData.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'var(--accent)',
                  color: '#000',
                  boxShadow: '0 0 24px rgba(var(--accent-rgb),0.3)',
                }}
              >
                View Projects
              </a>
              <a
                href={portfolioData.resume}
                download
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  border: '1.5px solid var(--border)',
                  color: 'var(--fg)',
                  background: 'var(--bg-card)',
                }}
              >
                Download Resume ↓
              </a>
            </motion.div>
          </div>

          {/* Right: avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative w-36 h-36 sm:w-52 sm:h-52 lg:w-80 lg:h-80">
              {/* Spinning gradient ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0%, var(--accent) 35%, transparent 50%, #f59e0b 75%, transparent 100%)',
                  padding: 3,
                }}
                aria-hidden="true"
              />
              {/* Mask */}
              <div
                className="absolute inset-[3px] rounded-full"
                style={{ background: 'var(--bg)' }}
              />
              {/* Photo */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden">
                <Image
                  src="/np.jpeg"
                  alt={portfolioData.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-3 gap-4 sm:gap-12 mt-10 lg:mt-24 max-w-lg"
        >
          {portfolioData.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-4xl font-bold mb-1"
                style={{ fontFamily: 'var(--font-syne)', color: 'var(--accent)' }}
              >
                <CountUp target={stat.value} />
                <span>+</span>
              </div>
              <div className="text-xs sm:text-sm" style={{ color: 'var(--fg-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
