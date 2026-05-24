'use client'
import { useState, useEffect } from 'react'

export function useTypewriter(texts: string[], speed = 75, pause = 2200) {
  const [displayed, setDisplayed] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setTextIndex((i) => (i + 1) % texts.length)
    } else {
      const next = isDeleting
        ? displayed.slice(0, -1)
        : current.slice(0, displayed.length + 1)
      timeout = setTimeout(() => setDisplayed(next), isDeleting ? speed / 2 : speed)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, textIndex, texts, speed, pause])

  return displayed
}
