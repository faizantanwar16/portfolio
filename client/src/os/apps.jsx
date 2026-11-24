import { useState } from 'react';
import { skills } from '../data';
import { featured, lab } from './repos';

const Links = ({ p }) => (
  <p className="links">
    <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
    {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live demo</a>}
  </p>
);
const Tags = ({ tags }) => <p className="tags">{tags.map((t) => <span key={t}>{t}</span>)}</p>;

const About = () => (
  <div className="card">
    <div className="photo" data-hot>your photo<br />goes here</div>
    <div>
      <h1><span className="hl">Faizan Tanwar</span></h1>
      <p className="role">Full-stack developer, MERN + TypeScript</p>
      <p className="meta">Computer Engineering student, graduating 2027. SIH 2025 National Finalist.</p>
      <p className="note">Hiring interns? <span className="circle">Say hi</span></p>
    </div>
  </div>
);

const Projects = () => (
  <div className="stack">
    {featured.map((p) => (
      <article key={p.title} className="proj">
        <h2>{p.title}</h2>
        <p className="sub">{p.tagline}</p>
        <p>{p.desc}</p>
        <Tags tags={p.tags} />
        <Links p={p} />
      </article>
    ))}
  </div>
);

const Lab = () => {
  const [f, setF] = useState('All');
  const chips = ['All', ...new Set(lab.flatMap((p) => p.tags))];
  return (
    <>
      <p className="chips">
        {chips.map((c) => <button key={c} className={c === f ? 'on' : ''} onClick={() => setF(c)}>{c}</button>)}
      </p>
      <div className="stack">
        {lab.filter((p) => f === 'All' || p.tags.includes(f)).map((p) => (
          <article key={p.title} className="proj">
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <Tags tags={p.tags} />
            <Links p={p} />
          </article>
        ))}
      </div>
    </>
  );
};

const Skills = () => (
  <div className="stack">
    {[...new Set(skills.map((s) => s.category))].map((c) => (
      <section key={c}>
        <h2>{c}</h2>
        <p className="pills">
          {skills.filter((s) => s.category === c).map((s) => <span key={s.name} className="pill">{s.name}</span>)}
        </p>
      </section>
    ))}
  </div>
);

const Contact = () => (
  <div className="stack">
    <p className="note">Open to internships. Let's talk.</p>
    <p className="links">
      <a href="https://github.com/faizantanwar16" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/faizan-tanwar" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="/Faizan_Tanwar_Resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a>
    </p>
  </div>
);

// Add a new window here and it appears on the desktop automatically.
export const apps = [
  { id: 'about', title: 'about_me.exe', glyph: 'ME', start: true, pos: { x: 60, y: 90 }, size: { w: 600 }, render: () => <About /> },
  { id: 'projects', title: 'projects/', glyph: 'PR', start: true, pos: { x: 470, y: 230 }, size: { w: 520 }, render: () => <Projects /> },
  { id: 'lab', title: 'lab_archive/', glyph: 'LB', pos: { x: 200, y: 140 }, size: { w: 500 }, render: () => <Lab /> },
  { id: 'skills', title: 'skills.dock', glyph: 'SK', pos: { x: 120, y: 200 }, size: { w: 460 }, render: () => <Skills /> },
  { id: 'contact', title: 'contact.txt', glyph: 'HI', pos: { x: 260, y: 260 }, size: { w: 380 }, render: () => <Contact /> },
];
