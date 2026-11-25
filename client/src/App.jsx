import { useState, useCallback } from 'react';
import { MotionConfig } from 'framer-motion';
import BootScreen from './os/BootScreen';
import Cursor from './os/Cursor';
import Site from './Site';

const seen = () => { try { return sessionStorage.getItem('booted') === '1'; } catch { return false; } };

export default function App() {
  const [booted, setBooted] = useState(seen);
  const done = useCallback(() => {
    try { sessionStorage.setItem('booted', '1'); } catch { /* storage unavailable */ }
    setBooted(true);
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <Cursor />
      {booted ? <Site /> : <BootScreen onDone={done} />}
    </MotionConfig>
  );
}
