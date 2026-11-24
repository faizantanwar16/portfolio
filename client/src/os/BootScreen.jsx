import { useEffect, useState } from 'react';

export default function BootScreen({ onDone }) {
  const [p, setP] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setInterval(() => setP((v) => Math.min(100, v + (reduce ? 50 : 6 + Math.random() * 9))), 90);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (p >= 100) {
      const t = setTimeout(onDone, 350);
      return () => clearTimeout(t);
    }
  }, [p, onDone]);

  return (
    <div className="boot" role="status" aria-live="polite">
      <div className="boot-box">
        <p className="boot-title">faizan.os</p>
        <div className="bar"><i style={{ width: `${p}%` }} /></div>
        <p className="boot-sub">{p < 100 ? 'loading portfolio' : 'ready'}</p>
      </div>
    </div>
  );
}
