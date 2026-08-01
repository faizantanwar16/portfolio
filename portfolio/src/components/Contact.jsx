import { motion } from 'framer-motion'
import { profile, languages } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-4xl mx-auto scroll-mt-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
          $ ping faizan --contact
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: 'var(--fg)' }}>
          Let's talk
        </h2>
        <p className="text-lg max-w-md mx-auto mb-8" style={{ color: 'var(--fg-muted)' }}>
          Open to Software Engineering internships — happy to walk through any project in detail.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-md font-bold text-base transition-transform hover:scale-105"
            style={{ background: 'var(--accent)', color: '#0B0E14', boxShadow: '0 0 32px rgba(95,224,163,0.3)' }}
          >
            Connect on LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-md font-bold text-base border hover:bg-white/5"
            style={{ borderColor: 'var(--rule)', color: 'var(--fg)' }}
          >
            GitHub
          </a>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center mono text-sm mb-10" style={{ color: 'var(--fg-muted)' }}>
          <a href={`mailto:${profile.email}`} className="hover:underline" style={{ color: 'var(--fg)' }}>
            {profile.email}
          </a>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {languages.map((l) => (
            <span
              key={l.name}
              className="mono text-[11px] px-3 py-1.5 rounded-full border"
              style={{ borderColor: 'var(--rule)', color: 'var(--fg-muted)' }}
              title={l.level}
            >
              {l.name}
            </span>
          ))}
        </div>

        <p className="mono text-[11px] mt-16" style={{ color: 'var(--fg-muted)' }}>
          $ echo "thanks for scrolling this far" — psst, try typing "sudo hire faizan"
        </p>
      </motion.div>
    </section>
  )
}
