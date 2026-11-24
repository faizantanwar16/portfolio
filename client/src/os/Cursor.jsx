import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const enabled = () =>
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 38 });
  const sy = useSpring(y, { stiffness: 600, damping: 38 });
  const [hot, setHot] = useState(false);
  const [on] = useState(enabled);

  useEffect(() => {
    if (!on) return;
    document.documentElement.classList.add('has-cursor');
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHot(!!e.target.closest?.('a,button,[data-hot],.win-bar'));
    };
    window.addEventListener('pointermove', move);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.classList.remove('has-cursor');
    };
  }, [on, x, y]);

  if (!on) return null;
  return <motion.div className={`cur${hot ? ' hot' : ''}`} style={{ x: sx, y: sy }} aria-hidden="true" />;
}
