import { Navbar } from '@/components/Navbar'
import { Cursor } from '@/components/Cursor'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Education } from '@/components/sections/Education'
import { Achievements } from '@/components/sections/Achievements'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { portfolioData } from '@/data/portfolio'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <footer
        className="py-10 text-center text-xs border-t"
        style={{
          borderColor: 'var(--border)',
          color: 'var(--fg-muted)',
          background: 'var(--bg)',
        }}
      >
        {/* Work in progress badge */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: 'rgba(245,158,11,0.08)',
              border: '1px solid rgba(245,158,11,0.3)',
              color: '#f59e0b',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-wip-pulse" aria-hidden="true" />
            Portfolio in progress
          </span>
        </div>
        <p>
          Designed &amp; built by{' '}
          <span style={{ color: '#00f5ff' }}>{portfolioData.name}</span>
          {' '}· {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
