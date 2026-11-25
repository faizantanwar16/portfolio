import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { about, cases } from './os/content';
import { skills } from './data';

const CMD = {
  help: () => ['Available commands:', '  about     who I am', '  projects  featured work', '  skills    tech stack', '  contact   get in touch', '  clear     clear the screen'],
  about: () => about,
  projects: () => cases.flatMap((c) => [`> ${c.title}: ${c.tagline}`, `  ${c.github}`]),
  skills: () => [...new Set(skills.map((s) => s.category))].map((c) => `${c}: ${skills.filter((s) => s.category === c).map((s) => s.name).join(', ')}`),
  contact: () => ['GitHub:   https://github.com/faizantanwar16', 'LinkedIn: https://linkedin.com/in/faizan-tanwar', 'Resume:   /Faizan_Tanwar_Resume.pdf'],
};

export default function Terminal({ onClose }) {
  const [log, setLog] = useState([{ k: 'out', t: 'faizan.os terminal. Type help to begin.' }]);
  const [val, setVal] = useState('');
  const end = useRef(null);
  const input = useRef(null);

  useEffect(() => {
    input.current?.focus();
    const esc = (e) => e.key === 'Escape' && onClose();
    addEventListener('keydown', esc);
    return () => removeEventListener('keydown', esc);
  }, [onClose]);
  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }); }, [log]);

  const run = (e) => {
    e.preventDefault();
    const c = val.trim().toLowerCase();
    setVal('');
    if (!c) return;
    if (c === 'clear') return setLog([]);
    const out = CMD[c] ? CMD[c]() : [`command not found: ${c}. Type help.`];
    setLog((l) => [...l, { k: 'in', t: `$ ${c}` }, ...out.map((t) => ({ k: 'out', t }))]);
  };

  return (
    <div className="overlay" onClick={onClose}>
      <motion.section className="win term" role="dialog" aria-modal="true" aria-label="Terminal"
        initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }} onClick={(e) => e.stopPropagation()}>
        <header className="win-bar">
          <span className="dots"><button className="d r" aria-label="Close terminal" onClick={onClose} /><i className="d y" /><i className="d g" /></span>
          <span className="win-title">terminal</span>
        </header>
        <div className="term-out" onClick={() => input.current?.focus()}>
          {log.map((l, i) => <p key={i} className={l.k}>{l.t}</p>)}
          <form onSubmit={run} className="term-row">
            <label htmlFor="term-in">$</label>
            <input id="term-in" ref={input} value={val} onChange={(e) => setVal(e.target.value)} autoComplete="off" autoCapitalize="none" spellCheck="false" />
          </form>
          <span ref={end} />
        </div>
      </motion.section>
    </div>
  );
}
