import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { PAL, HEAD, BODY, BODY_Y, ARM_Y, ARM_L, ARM_R } from './avatarArt';

function Layer({ rows, y0 = 0 }) {
  const out = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      let n = 1;
      while (row[x + n] === ch) n++;
      if (ch !== '.') out.push(<rect key={`${y}-${x}`} x={x} y={y0 + y} width={n} height={1} fill={PAL[ch]} />);
      x += n;
    }
  });
  return <g>{out}</g>;
}

const LINES = ['Hi, I’m Faizan!', 'I build full-stack apps', 'SIH 2025 National Finalist', 'Hiring interns?', 'Click me!'];

export default function Avatar() {
  const svg = useRef(null);
  const pupils = useRef(null);
  const jump = useAnimationControls();
  const [i, setI] = useState(0);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % LINES.length), 3600);
    const move = (e) => {
      if (!svg.current || !pupils.current) return;
      const b = svg.current.getBoundingClientRect();
      const vx = e.clientX - (b.left + b.width / 2), vy = e.clientY - (b.top + b.height * 0.4);
      const d = Math.hypot(vx, vy) || 1, k = Math.min(1, d / 300) * 0.5;
      pupils.current.style.transform = `translate(${(vx / d) * k}px, ${(vy / d) * k}px)`;
    };
    addEventListener('pointermove', move);
    return () => { clearInterval(t); removeEventListener('pointermove', move); };
  }, []);

  const poke = () => {
    jump.start({ y: [0, -30, 0], scaleY: [1, 1.06, 0.94, 1], transition: { duration: 0.55, ease: 'easeOut' } });
    setMsg('Hehe, that tickles!');
    setTimeout(() => setMsg(null), 1800);
  };

  return (
    <div className="avatar-wrap" data-hot>
      <div className="bubble" key={msg || i} aria-hidden="true">{msg || LINES[i]}</div>
      <motion.div className="avatar" animate={jump} onClick={poke} role="img" aria-label="Pixel-art cartoon of Faizan">
        <svg ref={svg} viewBox="0 0 24 30">
          <g className="idle">
            <Layer rows={BODY} y0={BODY_Y} />
            <Layer rows={ARM_L} y0={ARM_Y} />
            <g className="arm-r"><Layer rows={ARM_R} y0={ARM_Y} /></g>
            <g className="head">
              <Layer rows={HEAD} />
              <rect x="7" y="10" width="3" height="3" fill="#fff" />
              <rect x="14" y="10" width="3" height="3" fill="#fff" />
              <g ref={pupils} className="pupils">
                <rect x="7.5" y="10.5" width="2" height="2" fill="#1a1210" />
                <rect x="14.5" y="10.5" width="2" height="2" fill="#1a1210" />
              </g>
              <rect className="lid" x="7" y="10" width="3" height="3" fill={PAL.S} />
              <rect className="lid" x="14" y="10" width="3" height="3" fill={PAL.S} />
            </g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
