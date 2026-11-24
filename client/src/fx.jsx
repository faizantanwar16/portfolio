import { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

const COLORS = ['#ffe14a', '#e0393e', '#3f43a8', '#f2eee3'];

/* pixel trail behind the cursor + confetti burst on click */
export function PixelFX() {
  const ref = useRef(null);
  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = ref.current, ctx = c.getContext('2d');
    let ps = [], raf, last = 0;
    const size = () => { c.width = innerWidth; c.height = innerHeight; };
    size();
    const add = (x, y, n, spd, life) => {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * 6.28, s = Math.random() * spd;
        ps.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, l: life, m: life, z: 4 + ((Math.random() * 4) | 0) * 2, c: COLORS[(Math.random() * 4) | 0] });
      }
    };
    const move = (e) => { const t = performance.now(); if (t - last > 30) { last = t; add(e.clientX, e.clientY, 1, 0.8, 26); } };
    const down = (e) => add(e.clientX, e.clientY, 26, 7, 42);
    const loop = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      ps = ps.filter((p) => p.l > 0);
      for (const p of ps) {
        p.x += p.vx; p.y += p.vy; p.vy += 0.1; p.l--;
        ctx.globalAlpha = p.l / p.m; ctx.fillStyle = p.c;
        ctx.fillRect(Math.round(p.x / 2) * 2, Math.round(p.y / 2) * 2, p.z, p.z);
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    addEventListener('pointermove', move); addEventListener('pointerdown', down); addEventListener('resize', size);
    return () => { cancelAnimationFrame(raf); removeEventListener('pointermove', move); removeEventListener('pointerdown', down); removeEventListener('resize', size); };
  }, []);
  return <canvas ref={ref} className="pixfx" aria-hidden="true" />;
}

/* text that scrambles then resolves, left to right */
const G = '01#$%&*+=?';
export function Decode({ text }) {
  const rm = useReducedMotion();
  const [out, setOut] = useState(rm ? text : '');
  useEffect(() => {
    if (rm) return;
    let f = 0;
    const t = setInterval(() => {
      f++;
      const done = Math.floor(f / 2.2);
      setOut(text.split('').map((ch, i) => (ch === ' ' ? ' ' : i < done ? ch : G[(Math.random() * G.length) | 0])).join(''));
      if (done >= text.length) { clearInterval(t); setOut(text); }
    }, 45);
    return () => clearInterval(t);
  }, [text, rm]);
  return <span className="dec"><span className="ghost">{text}</span><span className="live" aria-hidden="true">{out}</span></span>;
}

/* types, pauses, deletes, moves to the next line */
export function Typer({ lines }) {
  const rm = useReducedMotion();
  const [s, setS] = useState({ i: 0, n: 0, del: false });
  useEffect(() => {
    if (rm) return;
    const cur = lines[s.i];
    let d = s.del ? 28 : 62;
    if (!s.del && s.n === cur.length) d = 1500;
    const t = setTimeout(() => setS((p) => {
      if (!p.del && p.n === cur.length) return { ...p, del: true };
      if (p.del && p.n === 0) return { i: (p.i + 1) % lines.length, n: 0, del: false };
      return { ...p, n: p.n + (p.del ? -1 : 1) };
    }), d);
    return () => clearTimeout(t);
  }, [s, lines, rm]);
  return <span aria-label={lines[0]}>{rm ? lines[0] : lines[s.i].slice(0, s.n)}<i className="caret" /></span>;
}

/* card leans toward the pointer */
export function Tilt({ children }) {
  const px = useMotionValue(0), py = useMotionValue(0);
  const cfg = { stiffness: 200, damping: 18 };
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), cfg);
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), cfg);
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); px.set((e.clientX - r.left) / r.width - 0.5); py.set((e.clientY - r.top) / r.height - 0.5); };
  return <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }} onPointerMove={move} onPointerLeave={() => { px.set(0); py.set(0); }}>{children}</motion.div>;
}

/* link that is pulled toward the pointer */
export function Mag({ children, ...p }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const cfg = { stiffness: 300, damping: 14 };
  const sx = useSpring(x, cfg), sy = useSpring(y, cfg);
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - (r.left + r.width / 2)) * 0.35); y.set((e.clientY - (r.top + r.height / 2)) * 0.35); };
  return <motion.a style={{ x: sx, y: sy }} onPointerMove={move} onPointerLeave={() => { x.set(0); y.set(0); }} {...p}>{children}</motion.a>;
}

/* number counts up when it scrolls into view */
export function Count({ v }) {
  const m = /^(\d+)(.*)$/.exec(v);
  const ref = useRef(null);
  const seen = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const c = animate(0, +m[1], { duration: 1.4, ease: 'easeOut', onUpdate: (x) => setN(Math.round(x)) });
    return () => c.stop();
  }, [seen]);
  return <span ref={ref}>{n}{m[2]}</span>;
}

/* shapes that drift upward at different speeds as you scroll */
const SH = [
  { l: 6, t: 20, s: 34, c: '#ffe14a', k: 'sq', v: 0.25 }, { l: 90, t: 35, s: 40, c: '#e0393e', k: 'tri', v: 0.4 },
  { l: 15, t: 70, s: 26, c: '#3f43a8', k: 'ci', v: 0.3 }, { l: 78, t: 80, s: 30, c: '#f2eee3', k: 'sq', v: 0.5 },
  { l: 48, t: 10, s: 22, c: '#e0393e', k: 'ci', v: 0.35 }, { l: 62, t: 55, s: 28, c: '#ffe14a', k: 'tri', v: 0.2 },
];
function Shape({ s }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => { const h = innerHeight + 160; return ((((s.t / 100) * innerHeight - v * s.v) % h) + h) % h - 80; });
  const r = useTransform(scrollY, (v) => v * s.v * 0.2);
  return <motion.i className={`fl ${s.k}`} style={{ left: `${s.l}%`, width: s.s, height: s.s, background: s.c, y, rotate: r }} />;
}
export function Floaters() {
  const rm = useReducedMotion();
  if (rm) return null;
  return <div className="floaters" aria-hidden="true">{SH.map((s, i) => <Shape key={i} s={s} />)}</div>;
}
