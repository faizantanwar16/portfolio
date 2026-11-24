import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Window from './Window';
import { apps } from './apps';

const maxZ = (w) => Math.max(...Object.values(w).map((v) => v.z));

export default function Desktop() {
  const [wins, setWins] = useState(() =>
    Object.fromEntries(apps.map((a, i) => [a.id, { open: !!a.start, min: false, z: i + 1 }]))
  );

  const patch = (id, p) => setWins((w) => ({ ...w, [id]: { ...w[id], ...p } }));
  const focus = (id) => setWins((w) => ({ ...w, [id]: { ...w[id], z: maxZ(w) + 1 } }));
  const launch = (id) => { patch(id, { open: true, min: false }); focus(id); };

  return (
    <main className="desk">
      <nav className="icons" aria-label="Desktop apps">
        {apps.map((a) => (
          <button key={a.id} className="icon" onClick={() => launch(a.id)}>
            <span className="glyph">{a.glyph}</span>
            {a.title}
          </button>
        ))}
      </nav>

      <AnimatePresence>
        {apps.filter((a) => wins[a.id].open && !wins[a.id].min).map((a) => (
          <Window
            key={a.id}
            title={a.title}
            pos={a.pos}
            size={a.size}
            z={wins[a.id].z}
            onFocus={() => focus(a.id)}
            onClose={() => patch(a.id, { open: false })}
            onMin={() => patch(a.id, { min: true })}
          >
            {a.render()}
          </Window>
        ))}
      </AnimatePresence>

      <div className="dock" aria-label="Open windows">
        {apps.filter((a) => wins[a.id].open).map((a) => (
          <button key={a.id} className={wins[a.id].min ? 'min' : ''} onClick={() => launch(a.id)}>
            {a.title}
          </button>
        ))}
      </div>
    </main>
  );
}
