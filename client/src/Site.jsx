import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Avatar from './Avatar';
import Terminal from './Terminal';
import { PixelFX, Decode, Tilt, Mag, Count, Floaters } from './fx';
import { skills } from './data';
import { about, education, stats, achievements, cases } from './os/content';
import { lab } from './os/repos';

const NAV = [['projects', 'Projects'], ['about', 'About'], ['achievements', 'Wins'], ['skills', 'Skills'], ['archive', 'Archive'], ['contact', 'Contact']];
const featured = cases.slice(0, 3);
const archive = [...cases.slice(3).map((c) => ({ title: c.title, desc: c.what, tags: c.tags, github: c.github, live: c.live })), ...lab];

function Drop({ children, i = 0 }) {
  return (
    <motion.div initial={{ y: -40, rotate: i % 2 ? 2 : -2, opacity: 0 }} whileInView={{ y: 0, rotate: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ type: 'spring', stiffness: 160, damping: 16 }}>
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
  <p className="links" onClick={(e) => e.stopPropagation()}>
    <Mag href={p.github} target="_blank" rel="noreferrer">GitHub</Mag>
    {p.live && <Mag href={p.live} target="_blank" rel="noreferrer">Live demo</Mag>}
  </p>
);

function useActive(ids) {
  const [a, setA] = useState('');
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setA(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);
  return a;
}

function Nav({ active, onTerm }) {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <a href="#top" className="brand">faizan.os</a>
      <nav className={open ? 'open' : ''} aria-label="Sections">
        {NAV.map(([id, l]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{l}</a>
        ))}
      </nav>
      <button className="tbtn" onClick={onTerm} aria-label="Open terminal">&gt;_</button>
      <button className="tbtn burger" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Menu">{open ? 'X' : '='}</button>
      <div className="progress" aria-hidden="true"><motion.i style={{ scaleX: scrollYProgress }} /></div>
    </header>
  );
}

function Modal({ c, onClose }) {
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => { removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="overlay" onClick={onClose}>
      <motion.section className="win modal" role="dialog" aria-modal="true" aria-label={c.title}
        initial={{ scale: 0.92, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }} onClick={(e) => e.stopPropagation()}>
        <header className="win-bar">
          <span className="dots"><button className="d r" aria-label="Close details" onClick={onClose} autoFocus /><i className="d y" /><i className="d g" /></span>
          <span className="win-title">projects/{c.slug}</span>
        </header>
        <div className="win-body">
          <h3>{c.title}</h3>
          <p className="sub">{c.tagline}{c.when ? `, ${c.when}` : ''}</p>
          <p className="long">{c.what}</p>
          <ul className="pts">{c.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <Tags tags={c.tags} />
          <Links p={c} />
        </div>
      </motion.section>
    </div>
  );
}

export default function Site() {
  const ids = NAV.map(([id]) => id);
  const active = useActive(ids);
  const [term, setTerm] = useState(false);
  const [sel, setSel] = useState(null);
  const [more, setMore] = useState(false);
  const cats = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="site-wrap">
      <Floaters />
      <PixelFX />
      <Nav active={active} onTerm={() => setTerm(true)} />

      <main className="site" id="top">
        <section className="block hero">
          <Drop>
            <Panel title="about_me.exe">
              <div className="herocard">
                <div className="herotxt">
                  <p className="avail"><i />Available for internships and collaborations</p>
                  <h1><span className="hl"><Decode text="Faizan Tanwar" /></span></h1>
                  <p className="headline">I build digital experiences that feel alive.</p>
                  <p className="long">Full-stack developer focused on interactive web experiences, intelligent applications, and creative engineering.</p>
                  <p className="links">
                    <Mag href="#projects">Explore My Work</Mag>
                    <Mag href="#contact" className="alt">Let’s Connect</Mag>
                  </p>
                </div>
                <Avatar />
              </div>
            </Panel>
          </Drop>
          <div className="stats">
            {stats.map(([n, l], i) => <Drop key={l} i={i}><Tilt><div className="sticky"><b><Count v={n} /></b>{l}</div></Tilt></Drop>)}
          </div>
        </section>

        <div className="marq" aria-hidden="true">
          <div>{Array.from({ length: 8 }, (_, i) => <span key={i}>AVAILABLE FOR INTERNSHIPS • BUILDING SOMETHING NEW • OPEN TO COLLABORATIONS •</span>)}</div>
        </div>

        <section className="block" id="projects">
          <h2 className="sec">Featured projects</h2>
          <div className="featgrid">
            {featured.map((c, i) => (
              <Drop key={c.slug} i={i}>
                <article className="win feat" onClick={() => setSel(c)}>
                  <header className="win-bar">
                    <span className="dots"><i className="d r" /><i className="d y" /><i className="d g" /></span>
                    <span className="win-title">projects/{c.slug}</span>
                  </header>
                  <div className="win-body">
                    <h3>{c.title}</h3>
                    <p className="sub">{c.tagline}{c.when ? `, ${c.when}` : ''}</p>
                    <p className="long">{c.what}</p>
                    <ul className="peek">{c.points.slice(0, 2).map((p) => <li key={p}>{p}</li>)}</ul>
                    <Tags tags={c.tags} />
                    <div className="featrow">
                      <button className="more" onClick={(e) => { e.stopPropagation(); setSel(c); }}>View details</button>
                      <Links p={c} />
                    </div>
                  </div>
                </article>
              </Drop>
            ))}
          </div>
        </section>

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

        <section className="block" id="archive">
          <h2 className="sec">Lab and archive</h2>
          <button className="more big" onClick={() => setMore((m) => !m)} aria-expanded={more}>
            {more ? 'Hide archive' : `Show ${archive.length} more projects`}
          </button>
          <AnimatePresence initial={false}>
            {more && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                <div className="two arch">
                  {archive.map((p) => (
                    <Panel key={p.title} title={`archive/${p.title.toLowerCase().replace(/\W+/g, '-')}`}>
                      <h3>{p.title}</h3>
                      <p className="long">{p.desc}</p>
                      <Tags tags={p.tags} />
                      <Links p={p} />
                    </Panel>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section className="block contact" id="contact">
          <Drop>
            <Panel title="contact.txt">
              <h2 className="sec dark">Let’s build something interesting.</h2>
              <p className="long">Open to internships, collaborations and good conversations about building for the web.</p>
              <p className="links">
                <Mag href="https://linkedin.com/in/faizan-tanwar" target="_blank" rel="noreferrer">LinkedIn</Mag>
                <Mag href="https://github.com/faizantanwar16" target="_blank" rel="noreferrer">GitHub</Mag>
                <Mag href="/Faizan_Tanwar_Resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</Mag>
              </p>
            </Panel>
          </Drop>
        </section>
      </main>

      <AnimatePresence>{sel && <Modal key="m" c={sel} onClose={() => setSel(null)} />}</AnimatePresence>
      <AnimatePresence>{term && <Terminal key="t" onClose={() => setTerm(false)} />}</AnimatePresence>
    </div>
  );
}
