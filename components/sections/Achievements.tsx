'use client'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

function OracleLogo() {
  return (
    <svg viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg" aria-label="Oracle" className="w-16 h-6">
      <text
        x="0" y="16"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="17"
        fill="#C74634"
        letterSpacing="0.5"
      >
        ORACLE
      </text>
    </svg>
  )
}

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn" className="w-8 h-8">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M7.2 9.6H4.8V19.2H7.2V9.6ZM6 8.4C6.795 8.4 7.44 7.755 7.44 6.96C7.44 6.165 6.795 5.52 6 5.52C5.205 5.52 4.56 6.165 4.56 6.96C4.56 7.755 5.205 8.4 6 8.4ZM19.2 19.2H16.8V14.4C16.8 13.12 16.776 11.472 15.024 11.472C13.248 11.472 12.984 12.876 12.984 14.304V19.2H10.584V9.6H12.888V11.088H12.924C13.248 10.464 14.052 9.804 15.252 9.804C17.676 9.804 19.2 11.364 19.2 13.776V19.2Z"
        fill="white"
      />
    </svg>
  )
}

const logoMap: Record<string, React.ReactNode> = {
  oracle: <OracleLogo />,
  linkedin: <LinkedInLogo />,
}

export function Achievements() {
  return (
    <section id="achievements" className="py-16 lg:py-32" style={{ background: 'var(--bg-secondary)' }}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Recognition
          </p>
          <h2
            className="animate-shimmer section-heading text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.achievements.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(var(--accent-rgb),0.1)' }}
              className="glass-card p-6 flex flex-col gap-4 group cursor-default"
            >
              {/* Logo */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                aria-hidden="true"
              >
                {item.logo && logoMap[item.logo]
                  ? logoMap[item.logo]
                  : <span className="text-2xl">{(item as any).icon}</span>
                }
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="font-bold text-sm leading-snug mb-1"
                  style={{ color: 'var(--fg)', fontFamily: 'var(--font-syne)' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs mb-3" style={{ color: 'var(--fg-muted)' }}>
                  {item.issuer}
                </p>
              </div>

              <span
                className="self-start text-xs font-medium px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(245,158,11,0.1)',
                  border: '1px solid rgba(245,158,11,0.2)',
                  color: '#f59e0b',
                }}
              >
                {item.date}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
