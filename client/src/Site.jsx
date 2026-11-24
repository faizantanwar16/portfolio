import { motion, useScroll } from 'framer-motion';
import { PixelFX, Decode, Typer, Tilt, Mag, Count, Floaters } from './fx';
import { skills } from './data';
import { about, education, stats, achievements, cases } from './os/content';
import { lab } from './os/repos';

const nav = [['about', 'About'], ['achievements', 'Wins'], ['projects', 'Projects'], ['lab', 'Lab'], ['skills', 'Skills'], ['contact', 'Contact']];

function Drop({ children, i = 0 }) {
  return (
    <motion.div
      initial={{ y: -50, rotate: i % 2 ? 2.5 : -2.5, opacity: 0 }}
      whileInView={{ y: 0, rotate: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 160, damping: 16 }}
    >
      {children}
    </motion.div>
  );
}

function Panel({ title, children }) {
  return (
    <section className="win panel">
      <header className="win-bar">
        <span className="dots"><i className="d r" /><i className="d y" /><i className="d g" /></span>
        <span className="win-title">{title}</span>
      </header>
      <div className="win-body">{children}</div>
    </section>
  );
}

const Tags = ({ tags }) => <p className="tags">{tags.map((t) => <span key={t}>{t}</span>)}</p>;
const Links = ({ p }) => (
  <p className="links">
    <Mag href={p.github} target="_blank" rel="noreferrer">GitHub</Mag>
    {p.live && <Mag href={p.live} target="_blank" rel="noreferrer">Live demo</Mag>}
  </p>
);

export default function Site() {
  const { scrollYProgress } = useScroll();
  const cats = [...new Set(skills.map((s) => s.category))];
  return (
    <div className="site-wrap">
      <Floaters />
      <PixelFX />
      <header className="topbar">
        <a href="#top" className="brand">faizan.os</a>
        <nav>{nav.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
        <div className="progress" aria-hidden="true"><motion.i style={{ scaleX: scrollYProgress }} /></div>
      </header>

      <main className="site" id="top">
        <section className="block hero">
          <Drop>
            <Panel title="about_me.exe">
              <div className="card">
                <Tilt><div className="photo" data-hot>your photo<br />goes here</div></Tilt>
                <div>
                  <h1><span className="hl"><Decode text="Faizan Tanwar" /></span></h1>
                  <p className="role"><Typer lines={['Full-stack developer, MERN + TypeScript', 'SIH 2025 National Finalist', 'Builds AI-powered web apps']} /></p>
                  <p className="meta">Computer Engineering student, graduating 2027. SIH 2025 National Finalist.</p>
                  <p className="note">Hiring interns? <span className="circle">Say hi</span></p>
                  <p className="links"><Mag href="#projects">See my work</Mag><Mag href="/Faizan_Tanwar_Resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</Mag></p>
                </div>
              </div>
            </Panel>
          </Drop>
          <div className="stats">
            {stats.map(([n, l], i) => <Drop key={l} i={i}><Tilt><div className="sticky"><b><Count v={n} /></b>{l}</div></Tilt></Drop>)}
          </div>
        </section>

        <div className="marq" aria-hidden="true"><div>{[...skills, ...skills].map((k, i) => <span key={i}>{k.name}</span>)}</div></div>

        <section className="block" id="about">
          <h2 className="sec">Who I am</h2>
          <div className="two">
            <Drop><Panel title="about.txt">{about.map((t) => <p key={t} className="long">{t}</p>)}</Panel></Drop>
            <Drop i={1}>
              <Panel title="education.doc">
                <h3>{education.degree}</h3>
                <p className="sub">{education.school}</p>
                <p className="long">{education.when}, {education.cgpa}</p>
                <p className="tags">{education.subjects.map((s) => <span key={s}>{s}</span>)}</p>
              </Panel>
            </Drop>
          </div>
        </section>

        <section className="block" id="achievements">
          <h2 className="sec">Achievements</h2>
          <div className="two">
            {achievements.map(([t, d], i) => (
              <Drop key={t} i={i}><Tilt><div className="ticket"><h3>{t}</h3><p>{d}</p></div></Tilt></Drop>
            ))}
          </div>
        </section>

        <section className="block" id="projects">
          <h2 className="sec">Projects</h2>
          <div className="stack big">
            {cases.map((c, i) => (
              <Drop key={c.slug} i={i}>
                <Panel title={`projects/${c.slug}`}>
                  <div className="case">
                    <div>
                      <h3>{c.title}</h3>
                      <p className="sub">{c.tagline}{c.when ? `, ${c.when}` : ''}</p>
                      <p className="long">{c.what}</p>
                      <Tags tags={c.tags} />
                      <Links p={c} />
                    </div>
                    <ul className="pts">{c.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                </Panel>
              </Drop>
            ))}
          </div>
        </section>

        <section className="block" id="lab">
          <h2 className="sec">Lab and archive</h2>
          <div className="two">
            {lab.map((p, i) => (
              <Drop key={p.title} i={i}>
                <Panel title={`lab/${p.title.toLowerCase().replace(/\W+/g, '-')}`}>
                  <h3>{p.title}</h3>
                  <p className="long">{p.desc}</p>
                  <Tags tags={p.tags} />
                  <Links p={p} />
                </Panel>
              </Drop>
            ))}
          </div>
        </section>

        <section className="block" id="skills">
          <h2 className="sec">Skills</h2>
          <div className="two">
            {cats.map((c, i) => (
              <Drop key={c} i={i}>
                <Panel title={c.toLowerCase().replace(/\W+/g, '_') + '.dock'}>
                  <p className="pills">{skills.filter((s) => s.category === c).map((s) => <span key={s.name} className="pill">{s.name}</span>)}</p>
                </Panel>
              </Drop>
            ))}
          </div>
        </section>

        <section className="block" id="contact">
          <Drop>
            <Panel title="contact.txt">
              <p className="note big-note">Open to internships. Let's talk.</p>
              <p className="links">
                <Mag href="https://github.com/faizantanwar16" target="_blank" rel="noreferrer">GitHub</Mag>
                <Mag href="https://linkedin.com/in/faizan-tanwar" target="_blank" rel="noreferrer">LinkedIn</Mag>
                <Mag href="/Faizan_Tanwar_Resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</Mag>
              </p>
            </Panel>
          </Drop>
        </section>
      </main>
    </div>
  );
}
