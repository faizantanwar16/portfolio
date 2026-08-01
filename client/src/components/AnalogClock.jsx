import { useEffect, useState } from 'react';

export default function AnalogClock({ size = 150, showCaption = true }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secDeg = seconds * 6;
  const minDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  const ticks = Array.from({ length: 12 }, (_, i) => i);
  const r = size / 2; // radius, used as the tick transform-origin

  return (
    <div className="clock" style={{ '--size': `${size}px` }}>
      <div className="clock-face">
        {ticks.map((i) => (
          <div
            key={i}
            className={`tick ${i % 3 === 0 ? 'major' : ''}`}
            style={{ transform: `rotate(${i * 30}deg) translateY(3px)`, transformOrigin: `50% ${r}px` }}
          />
        ))}
        <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }} />
        <div className="hand minute" style={{ transform: `rotate(${minDeg}deg)` }} />
        <div className="hand second" style={{ transform: `rotate(${secDeg}deg)` }} />
        <div className="pin" />
      </div>
      {showCaption && (
        <div className="clock-caption mono">
          {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} · Wardha, IN
        </div>
      )}

      <style>{`
        .clock{display:flex;flex-direction:column;align-items:center;gap:14px;}
        .clock-face{
          position:relative;width:var(--size);height:var(--size);border-radius:50%;
          background:radial-gradient(circle at 35% 30%, #171f29, #0c1218);
          border:2px solid var(--border);
          box-shadow:0 0 0 1px rgba(245,163,199,0.08), 0 14px 40px rgba(0,0,0,0.5), inset 0 0 24px rgba(0,0,0,0.5);
          flex-shrink:0;
        }
        .tick{position:absolute;top:0;left:50%;width:calc(var(--size) * 0.01);height:calc(var(--size) * 0.05);background:var(--text-faint);margin-left:calc(var(--size) * -0.005);}
        .tick.major{height:calc(var(--size) * 0.08);width:calc(var(--size) * 0.013);background:var(--pink);margin-left:calc(var(--size) * -0.0065);}
        .hand{position:absolute;bottom:50%;left:50%;transform-origin:bottom center;border-radius:4px;}
        .hand.hour{width:calc(var(--size) * 0.027);height:calc(var(--size) * 0.25);margin-left:calc(var(--size) * -0.0135);background:var(--text);}
        .hand.minute{width:calc(var(--size) * 0.02);height:calc(var(--size) * 0.36);margin-left:calc(var(--size) * -0.01);background:var(--text-dim);}
        .hand.second{width:calc(var(--size) * 0.01);height:calc(var(--size) * 0.4);margin-left:calc(var(--size) * -0.005);background:var(--pink);}
        .pin{position:absolute;top:50%;left:50%;width:calc(var(--size) * 0.06);height:calc(var(--size) * 0.06);margin:calc(var(--size) * -0.03);border-radius:50%;background:var(--pink);box-shadow:0 0 8px var(--pink-glow);}
        .clock-caption{font-size:12px;color:var(--text-faint);white-space:nowrap;}
      `}</style>
    </div>
  );
}
