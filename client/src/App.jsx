import { useState, useCallback } from 'react';
import { MotionConfig } from 'framer-motion';
import BootScreen from './os/BootScreen';
import Cursor from './os/Cursor';
import Site from './Site';

export default function App() {
  const [booted, setBooted] = useState(false);
  const done = useCallback(() => setBooted(true), []);
  return (
    <MotionConfig reducedMotion="user">
      <Cursor />
      {booted ? <Site /> : <BootScreen onDone={done} />}
    </MotionConfig>
  );
}
