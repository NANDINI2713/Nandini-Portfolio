'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { portfolioData } from '@/data/portfolio'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const [active, setActive] = useState('#home')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = portfolioData.navLinks.map((l) => l.href.replace('#', ''))
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observers.forEach((o) => o?.disconnect())
    }
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'var(--bg-card)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        <nav
          className="page-container h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="font-display font-bold text-xl tracking-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
            aria-label="Go to top"
          >
            <span className="gradient-text">{portfolioData.initials}</span>
          </button>

          {/* Desktop nav */}
          <ul
            className="hidden lg:flex items-center gap-1"
            role="list"
            onMouseLeave={() => setHovered(null)}
          >
            {portfolioData.navLinks.map((link) => {
              const isActive = active === link.href
              const isHovered = hovered === link.href
              return (
                <li key={link.href} className="relative">
                  {/* Sliding hover pill */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        background: 'rgba(var(--accent-rgb),0.08)',
                        border: '1px solid rgba(var(--accent-rgb),0.18)',
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <button
                    onClick={() => handleNav(link.href)}
                    onMouseEnter={() => setHovered(link.href)}
                    className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex flex-col items-center gap-0.5"
                    style={{ color: isActive ? 'var(--accent)' : isHovered ? 'var(--accent)' : 'var(--fg-muted)' }}
                  >
                    {link.label}
                    {/* Active underline dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }}
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.svg
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-[#f59e0b]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                      />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      style={{ color: 'var(--fg-muted)' }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </button>
            )}

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-all"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-4 h-0.5 bg-[var(--fg)] rounded-full"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-4 h-0.5 bg-[var(--fg)] rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-4 h-0.5 bg-[var(--fg)] rounded-full"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col pt-20 px-6 pb-8"
            style={{ background: 'var(--bg)', backdropFilter: 'blur(20px)' }}
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-2" role="list">
                {portfolioData.navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <motion.button
                      onClick={() => handleNav(link.href)}
                      whileHover={{ x: 8, color: 'var(--accent)' }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-colors"
                      style={{
                        color: active === link.href ? 'var(--accent)' : 'var(--fg-muted)',
                        border: `1px solid ${active === link.href ? 'rgba(var(--accent-rgb),0.3)' : 'var(--border)'}`,
                        background: active === link.href ? 'rgba(var(--accent-rgb),0.06)' : 'var(--bg-card)',
                      }}
                    >
                      {link.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
