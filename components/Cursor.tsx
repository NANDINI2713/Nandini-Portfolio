'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const rafRef = useRef<number>(0)
  const rawPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    // Only activate on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.body.classList.add('cursor-active')
    setIsVisible(true)

    const onMove = (e: MouseEvent) => {
      rawPos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovering(true)
      }
    }

    const onLeave = () => setIsHovering(false)

    const loop = () => {
      setPos({ x: rawPos.current.x, y: rawPos.current.y })
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      document.body.classList.remove('cursor-active')
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full"
        style={{
          width: isHovering ? 44 : 12,
          height: isHovering ? 44 : 12,
          background: isHovering ? 'rgba(var(--accent-rgb),0.15)' : 'var(--accent)',
          border: isHovering ? '1.5px solid var(--accent)' : 'none',
          translateX: pos.x - (isHovering ? 22 : 6),
          translateY: pos.y - (isHovering ? 22 : 6),
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 40, mass: 0.2 }}
      />
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border border-[var(--accent)]/30"
        style={{ width: 32, height: 32 }}
        animate={{ x: pos.x - 16, y: pos.y - 16 }}
        transition={{ type: 'spring', stiffness: 150, damping: 25, mass: 0.5 }}
      />
    </>
  )
}
