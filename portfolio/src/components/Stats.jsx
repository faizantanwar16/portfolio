import { motion } from 'framer-motion'
import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="px-6 py-14 border-y" style={{ borderColor: 'var(--rule)', background: 'var(--bg-raised)' }}>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p
              className="mono font-extrabold text-4xl sm:text-5xl mb-1"
              style={{ color: 'var(--accent)', textShadow: '0 0 24px rgba(95,224,163,0.35)' }}
            >
              {s.value}
            </p>
            <p className="text-xs sm:text-sm" style={{ color: 'var(--fg-muted)' }}>
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
