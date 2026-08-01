import { useState } from 'react'
import TerminalHero from './components/TerminalHero'
import SessionLog from './components/SessionLog'
import Stats from './components/Stats'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Contact from './components/Contact'
import EasterEgg from './components/EasterEgg'

function App() {
  const [booted, setBooted] = useState(false)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {booted && <SessionLog />}
      <div id="hero">
        <TerminalHero onBootComplete={() => setBooted(true)} />
      </div>
      <Stats />
      <About />
      <Education />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
      <EasterEgg />
    </div>
  )
}

export default App
