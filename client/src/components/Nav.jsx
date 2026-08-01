import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: 'https://github.com/faizantanwar16', label: 'GitHub ↗', external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner wrap">
        <a href="#top" className="logo">
          <span className="dot" />
          faizan.dev
        </a>
        <nav className={`links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="nav-cta">
          Get in touch
        </a>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      <style>{`
        .nav{
          position:fixed;top:0;left:0;right:0;z-index:100;
          background:rgba(10,14,18,0.72);
          backdrop-filter:blur(14px);
          border-bottom:1px solid var(--border-soft);
        }
        .nav-inner{padding:16px 28px;display:flex;align-items:center;justify-content:space-between;gap:24px;}
        .logo{font-family:var(--font-mono);font-weight:600;font-size:15px;display:flex;align-items:center;gap:8px;}
        .dot{width:7px;height:7px;border-radius:50%;background:var(--pink);box-shadow:0 0 10px var(--pink);animation:pulse 2s ease-in-out infinite;}
        @keyframes pulse{0%,100%{opacity:1;}50%{opacity:.35;}}
        .links{display:flex;gap:30px;align-items:center;}
        .links a{font-size:13.5px;color:var(--text-dim);font-weight:500;position:relative;padding:4px 0;transition:color .2s ease;}
        .links a:hover{color:var(--text);}
        .links a::after{content:'';position:absolute;left:0;bottom:0;width:0;height:1px;background:var(--pink);transition:width .25s ease;}
        .links a:hover::after{width:100%;}
        .nav-cta{font-family:var(--font-mono);font-size:12.5px;font-weight:500;background:var(--pink);color:#1a0a12;padding:9px 16px;border-radius:7px;transition:transform .2s ease, box-shadow .2s ease;white-space:nowrap;}
        .nav-cta:hover{transform:translateY(-1px);box-shadow:0 6px 18px var(--pink-glow);}
        .nav-toggle{display:none;background:none;border:none;color:var(--text);font-size:20px;}
        @media (max-width:860px){
          .links{position:fixed;top:64px;left:0;right:0;flex-direction:column;background:var(--bg-alt);border-bottom:1px solid var(--border-soft);padding:20px 28px;gap:18px;display:none;}
          .links.open{display:flex;}
          .nav-toggle{display:block;}
          .nav-cta{display:none;}
        }
      `}</style>
    </header>
  );
}
