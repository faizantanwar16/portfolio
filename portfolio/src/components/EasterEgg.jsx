import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TARGET = 'sudo hire faizan'

export default function EasterEgg() {
  const [buffer, setBuffer] = useState('')
  const [triggered, setTriggered] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    function handleKey(e) {
      if (e.key.length !== 1) return
      setBuffer((prev) => {
        const next = (prev + e.key).slice(-TARGET.length)
        if (next === TARGET) {
          setTriggered(true)
        }
        return next
      })
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setBuffer(''), 2500)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-6 right-6 z-50 max-w-xs mono text-xs rounded-lg border p-4 shadow-2xl"
          style={{ borderColor: 'var(--accent)', background: 'var(--bg-raised)', color: 'var(--fg)' }}
        >
          <p style={{ color: 'var(--accent)' }}>$ sudo hire faizan</p>
          <p className="mt-1" style={{ color: 'var(--fg-muted)' }}>
            [sudo] permission granted.
          </p>
          <p className="mt-2">Nice — you found it. Let's talk: fastest way is LinkedIn or email below.</p>
          <button
            onClick={() => setTriggered(false)}
            className="mt-3 text-[10px] underline"
            style={{ color: 'var(--fg-muted)' }}
          >
            dismiss
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
