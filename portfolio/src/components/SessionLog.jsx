import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SECTIONS = [
  { id: 'hero', cmd: 'whoami' },
  { id: 'about', cmd: 'cat about.md' },
  { id: 'education', cmd: 'cat education.md' },
  { id: 'projects', cmd: 'ls projects/' },
  { id: 'achievements', cmd: 'cat achievements.log' },
  { id: 'skills', cmd: 'cat skills.json' },
  { id: 'contact', cmd: 'ping faizan --contact' },
]

export default function SessionLog() {
  const [activeId, setActiveId] = useState('hero')
  const [visited, setVisited] = useState(['hero'])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            setVisited((v) => (v.includes(entry.target.id) ? v : [...v, entry.target.id]))
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 mono text-xs">
      {SECTIONS.map((s) => {
        const isVisited = visited.includes(s.id)
        const isActive = activeId === s.id
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-2"
            style={{ opacity: isVisited ? 1 : 0.35 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full transition-colors"
              style={{ background: isActive ? 'var(--accent)' : isVisited ? 'var(--fg-muted)' : 'var(--rule)' }}
            />
            <AnimatePresence>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.25 }}
                  style={{ color: 'var(--accent)' }}
                >
                  $ {s.cmd}
                </motion.span>
              )}
            </AnimatePresence>
          </a>
        )
      })}
    </div>
  )
}
