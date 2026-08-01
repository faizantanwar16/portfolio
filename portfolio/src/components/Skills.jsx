import { motion } from 'framer-motion'
import { skills } from '../data/content'

const GROUPS = [
  { key: 'frontend', label: 'frontend/' },
  { key: 'backend', label: 'backend/' },
  { key: 'ml_ai', label: 'ml-and-ai/' },
  { key: 'tooling', label: 'tooling/' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-4xl mx-auto scroll-mt-24">
      <p className="mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
        $ cat skills.json
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10" style={{ color: 'var(--fg)' }}>
        Stack
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {GROUPS.map((group, gi) => (
          <motion.div
            key={group.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
          >
            <p className="mono text-xs mb-3" style={{ color: 'var(--fg-muted)' }}>
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills[group.key].map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.08 + i * 0.03 }}
                  whileHover={{ y: -2, borderColor: 'var(--accent)' }}
                  className="mono text-xs px-3 py-1.5 rounded-lg border transition-colors"
                  style={{ borderColor: 'var(--rule)', color: 'var(--fg)', background: 'var(--bg-raised)' }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
