import { useEffect, useState } from 'react';
import { motion, useDragControls, useMotionValue } from 'framer-motion';

function useIsMobile() {
  const q = '(max-width: 760px)';
  const [m, setM] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const f = (e) => setM(e.matches);
    mq.addEventListener('change', f);
    return () => mq.removeEventListener('change', f);
  }, []);
  return m;
}

export default function Window({ title, pos, size, z, onFocus, onClose, onMin, children }) {
  const mobile = useIsMobile();
  const controls = useDragControls();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [full, setFull] = useState(false);

  const toggleFull = () => {
    x.set(0);
    y.set(0);
    setFull((f) => !f);
  };

  const layout = mobile ? {} : full ? { inset: '72px 16px 96px' } : { left: pos.x, top: pos.y, width: size.w };

  return (
    <motion.section
      className="win"
      style={{ ...layout, zIndex: z, x, y }}
      drag={!mobile && !full}
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      onPointerDown={onFocus}
    >
      <header className="win-bar" onPointerDown={(e) => !mobile && !full && controls.start(e)}>
        <span className="dots">
          <button className="d r" aria-label="Close window" onClick={onClose} />
          <button className="d y" aria-label="Minimise window" onClick={onMin} />
          <button className="d g" aria-label="Maximise window" onClick={toggleFull} />
        </span>
        <span className="win-title">{title}</span>
      </header>
      <div className="win-body">{children}</div>
    </motion.section>
  );
}
