import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile, bootSequence } from '../data/content'

const TYPE_SPEED = 28

function useTypedLines(lines, active) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active || done) return
    if (lineIndex >= lines.length) {
      const t = setTimeout(() => setDone(true), 400)
      return () => clearTimeout(t)
    }
    const currentCmd = lines[lineIndex].cmd
    if (charIndex < currentCmd.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setLineIndex((l) => l + 1)
        setCharIndex(0)
      }, 550)
      return () => clearTimeout(t)
    }
  }, [active, charIndex, lineIndex, lines, done])

  return { lineIndex, charIndex, done }
}

export default function TerminalHero({ onBootComplete }) {
  const [skip, setSkip] = useState(false)
  const { lineIndex, charIndex, done } = useTypedLines(bootSequence, !skip)
  const completedRef = useRef(false)

  useEffect(() => {
    if ((done || skip) && !completedRef.current) {
      completedRef.current = true
      const t = setTimeout(() => onBootComplete?.(), skip ? 0 : 700)
      return () => clearTimeout(t)
    }
  }, [done, skip, onBootComplete])

  const showBoot = !done && !skip

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6" style={{ background: 'var(--bg)' }}>
      <AnimatePresence mode="wait">
        {showBoot ? (
          <motion.div
            key="terminal"
            exit={{ opacity: 0, filter: 'blur(6px)', scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl mono text-sm sm:text-base rounded-lg border overflow-hidden"
            style={{ borderColor: 'var(--rule)', background: 'var(--bg-raised)' }}
          >
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b" style={{ borderColor: 'var(--rule)' }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F0A868' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--accent)' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#5B6373' }} />
              <span className="ml-3 text-xs" style={{ color: 'var(--fg-muted)' }}>faizan@portfolio:~</span>
            </div>
            <div className="p-5 sm:p-6 space-y-2 min-h-[180px]">
              {bootSequence.map((line, i) => {
                if (i > lineIndex) return null
                const isCurrent = i === lineIndex
                const typed = isCurrent ? line.cmd.slice(0, charIndex) : line.cmd
                const cmdDone = isCurrent ? charIndex >= line.cmd.length : true
                return (
                  <div key={i}>
                    <div className="flex gap-2">
                      <span style={{ color: 'var(--accent)' }}>$</span>
                      <span style={{ color: 'var(--fg)' }}>
                        {typed}
                        {isCurrent && !cmdDone && (
                          <span className="inline-block w-2 h-4 ml-0.5 align-middle animate-pulse" style={{ background: 'var(--accent)' }} />
                        )}
                      </span>
                    </div>
                    {cmdDone && (
                      <div className="pl-4 pt-0.5" style={{ color: 'var(--fg-muted)' }}>
                        {line.out}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <button
              onClick={() => setSkip(true)}
              className="w-full text-xs py-2 border-t hover:bg-white/5 transition-colors"
              style={{ borderColor: 'var(--rule)', color: 'var(--fg-muted)' }}
            >
              skip intro →
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-3xl text-center"
          >
            <p className="mono text-sm mb-4" style={{ color: 'var(--accent)' }}>
              $ whoami
            </p>
            <h1
              className="text-6xl sm:text-8xl font-extrabold tracking-tight mb-4"
              style={{ color: 'var(--fg)', textShadow: '0 0 40px rgba(95,224,163,0.15)' }}
            >
              {profile.name}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold mb-6" style={{ color: 'var(--accent)' }}>
              {profile.role}
            </p>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: 'var(--fg)' }}>
              {profile.pitch}
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mono text-sm font-semibold px-4 py-2 rounded-full border mb-10"
              style={{
                borderColor: 'var(--accent)',
                color: 'var(--accent)',
                boxShadow: '0 0 24px rgba(95,224,163,0.25)',
                background: 'rgba(95,224,163,0.06)',
              }}
            >
              ★ {profile.badge.title} — {profile.badge.detail}
            </motion.div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-md font-bold text-base transition-transform hover:scale-105"
                style={{ background: 'var(--accent)', color: '#0B0E14', boxShadow: '0 0 32px rgba(95,224,163,0.3)' }}
              >
                View projects
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-md font-bold text-base border transition-colors hover:bg-white/5"
                style={{ borderColor: 'var(--rule)', color: 'var(--fg)' }}
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-md font-bold text-base border transition-colors hover:bg-white/5"
                style={{ borderColor: 'var(--rule)', color: 'var(--fg)' }}
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
