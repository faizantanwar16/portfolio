import { useEffect, useState } from 'react';

const LINES = ['INITIALIZING PERSONAL SYSTEM...', 'LOADING PROJECTS...', 'WELCOME, EXPLORER.'];

export default function BootScreen({ onDone }) {
  const [n, setN] = useState(1);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { onDone(); return; }
    const t = [setTimeout(() => setN(2), 450), setTimeout(() => setN(3), 900), setTimeout(onDone, 1400)];
    return () => t.forEach(clearTimeout);
  }, [onDone]);
  return (
    <div className="boot" role="status" aria-live="polite">
      <div className="boot-box boot-lines">
        {LINES.slice(0, n).map((l) => <p key={l}>{l}</p>)}
        <div className="bar"><i style={{ width: `${n * 33.4}%` }} /></div>
      </div>
      <button className="skip" onClick={onDone}>Skip intro</button>
    </div>
  );
}
