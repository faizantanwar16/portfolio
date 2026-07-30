import { motion } from 'framer-motion'
import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
          $ cat education.md
        </p>
        <div
          className="rounded-xl border p-6 sm:p-8"
          style={{ borderColor: 'var(--rule)', background: 'var(--bg-raised)' }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--fg)' }}>
              {education.degree}
            </h3>
            <span className="mono text-xs" style={{ color: 'var(--fg-muted)' }}>
              {education.period}
            </span>
          </div>
          <p className="text-base mb-1" style={{ color: 'var(--fg-muted)' }}>
            {education.school}
          </p>
          <p className="mono text-sm mb-5" style={{ color: 'var(--accent)' }}>
            {education.cgpa}
          </p>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <span
                key={c}
                className="mono text-[11px] px-3 py-1.5 rounded-full border"
                style={{ borderColor: 'var(--rule)', color: 'var(--fg-muted)' }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
