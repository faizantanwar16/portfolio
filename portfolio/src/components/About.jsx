import { motion } from 'framer-motion'
import { useState } from 'react'
import { profile } from '../data/content'

export default function About() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section id="about" className="py-28 px-6 max-w-4xl mx-auto scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="grid sm:grid-cols-[1fr_auto] gap-10 items-center"
      >
        <div>
          <p className="mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
            $ cat about.md
          </p>
          <p className="text-3xl sm:text-4xl leading-snug font-extrabold mb-4" style={{ color: 'var(--fg)' }}>
            Computer Engineering student who'd rather ship a working app than write about one.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            Studying at {profile.location}. I specialize in the MERN stack and have shipped multiple
            full-stack products end-to-end — from database schema to deployment — following the same
            branching and PR discipline used on real engineering teams. Currently building toward
            Software Engineering internships at product-based companies.
          </p>
        </div>

        <div
          className="relative w-48 h-56 cursor-pointer [perspective:1000px]"
          onClick={() => setFlipped((f) => !f)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setFlipped((f) => !f)}
          aria-label="Flip badge for details"
        >
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full [transform-style:preserve-3d]"
          >
            {/* front */}
            <div
              className="absolute inset-0 rounded-xl border flex flex-col items-center justify-center gap-3 p-4 text-center [backface-visibility:hidden]"
              style={{ borderColor: 'var(--accent-dim)', background: 'var(--bg-raised)' }}
            >
              <span className="text-4xl">🏆</span>
              <p className="mono text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                SIH 2025
              </p>
              <p className="text-xs" style={{ color: 'var(--fg-muted)' }}>
                National Finalist
              </p>
              <p className="text-[10px] mt-2" style={{ color: 'var(--fg-muted)' }}>
                tap to flip
              </p>
            </div>
            {/* back */}
            <div
              className="absolute inset-0 rounded-xl border flex flex-col items-center justify-center gap-2 p-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
              style={{ borderColor: 'var(--accent-dim)', background: 'var(--bg-raised)' }}
            >
              <p className="mono text-xs" style={{ color: 'var(--fg)' }}>
                Hardware Edition
              </p>
              <p className="text-xs" style={{ color: 'var(--fg-muted)' }}>
                Kottayam, Kerala
              </p>
              <p className="text-xs mt-2" style={{ color: 'var(--fg-muted)' }}>
                Smart India Hackathon — national-level finalist among thousands of teams.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
