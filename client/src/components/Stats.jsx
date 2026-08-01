import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 4, suffix: '', label: 'Apps Shipped' },
  { target: 90, suffix: '%+', label: 'ML Model Accuracy' },
  { target: 36, suffix: 'hr', label: 'Hackathon Sprint' },
  { target: 319, suffix: 'K+', label: 'Records Modeled' },
];

function Counter({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const step = Math.max(1, Math.ceil(target / 40));
            let cur = 0;
            const tick = () => {
              cur += step;
              if (cur >= target) { setVal(target); return; }
              setVal(cur);
              requestAnimationFrame(tick);
            };
            tick();
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <div className="num" ref={ref}>{val}{suffix}</div>;
}

export default function Stats() {
  return (
    <>
      <div className="section-spacer" />
      <section className="wrap">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <Counter target={s.target} suffix={s.suffix} />
              <div className="lbl mono">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border-soft);border:1px solid var(--border-soft);border-radius:16px;overflow:hidden;}
        .stat{background:var(--bg);padding:40px 24px;text-align:center;}
        .num{font-family:var(--font-display);font-weight:700;font-size:clamp(32px,4vw,46px);color:var(--pink);}
        .lbl{font-size:12px;color:var(--text-faint);margin-top:8px;letter-spacing:.02em;}
        @media (max-width:700px){ .stats-grid{grid-template-columns:repeat(2,1fr);} }
      `}</style>
    </>
  );
}
