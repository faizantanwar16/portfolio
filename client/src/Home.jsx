import Nav from './components/Nav';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import ResumeClockCard from './components/ResumeClockCard';
import Stats from './components/Stats';
import ProjectsTimeline from './components/ProjectsTimeline';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutEducation />
        <ResumeClockCard />
        <Stats />
        <ProjectsTimeline />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
