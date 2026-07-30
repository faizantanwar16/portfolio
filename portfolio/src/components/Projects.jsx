import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { projects } from '../data/content'

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-xl border overflow-hidden"
      style={{ borderColor: 'var(--rule)', background: 'var(--bg-raised)' }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="mono text-xs" style={{ color: 'var(--fg-muted)' }}>
              0{index + 1}
            </span>
            <span
              className="mono text-[10px] px-2 py-0.5 rounded-full border"
              style={{ borderColor: 'var(--accent-dim)', color: 'var(--accent)' }}
            >
              {project.status}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--fg)' }}>
            {project.name}
          </h3>
          <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
            {project.tagline}
          </p>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="mono text-2xl shrink-0"
          style={{ color: 'var(--accent)' }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-4 border-t pt-5" style={{ borderColor: 'var(--rule)' }}>
              <div>
                <p className="mono text-xs mb-1" style={{ color: 'var(--accent)' }}>
                  problem
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg)' }}>
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="mono text-xs mb-1" style={{ color: 'var(--accent)' }}>
                  approach
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg)' }}>
                  {project.approach}
                </p>
              </div>
              {project.challenge && (
                <div>
                  <p className="mono text-xs mb-1" style={{ color: 'var(--warn)' }}>
                    biggest challenge
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg)' }}>
                    {project.challenge}
                  </p>
                </div>
              )}
              <div>
                <p className="mono text-xs mb-1" style={{ color: 'var(--accent)' }}>
                  outcome
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg)' }}>
                  {project.outcome}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="mono text-[10px] px-2 py-1 rounded"
                    style={{ background: 'var(--bg)', color: 'var(--fg-muted)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mono text-xs hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  view on GitHub →
                </a>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mono text-xs hover:underline"
                    style={{ color: 'var(--warn)' }}
                  >
                    live demo →
                  </a>
                )}
                {project.links.api && (
                  <a
                    href={project.links.api}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mono text-xs hover:underline"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    API →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-4xl mx-auto scroll-mt-24">
      <p className="mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
        $ ls projects/
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-2" style={{ color: 'var(--fg)' }}>
        Things I've built
      </h2>
      <p className="text-sm mb-10" style={{ color: 'var(--fg-muted)' }}>
        Tap a project to expand the case study.
      </p>
      <div className="space-y-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
