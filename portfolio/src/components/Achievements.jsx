import { motion } from 'framer-motion'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 max-w-4xl mx-auto scroll-mt-24">
      <p className="mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
        $ cat achievements.log
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10" style={{ color: 'var(--fg)' }}>
        Achievements
      </h2>

      <div className="space-y-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-4 items-start rounded-xl border p-5"
            style={{ borderColor: 'var(--rule)', background: 'var(--bg-raised)' }}
          >
            <span className="text-2xl" style={{ color: 'var(--warn)' }}>
              ★
            </span>
            <div>
              <p className="font-semibold text-base" style={{ color: 'var(--fg)' }}>
                {a.title}
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--fg-muted)' }}>
                {a.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
