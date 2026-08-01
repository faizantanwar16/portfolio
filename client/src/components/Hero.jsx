const ROW_A = [
  'Full Stack Developer', 'MERN Architecture', 'AI & ML Integration',
  'REST APIs', 'Real-time WebSockets', 'Claude API Integration',
];
const ROW_B = [
  'Problem Solver', 'DSA Enthusiast', 'SIH 2025 Finalist',
  'UI/UX Minded', 'Open Source Contributor', 'Product Builder',
];

function Marquee({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row">
      <div className={`marquee-track ${reverse ? 'rev' : ''}`}>
        {doubled.map((t, i) => (
          <span className="marquee-item" key={i}>
            {t}
            <span className="sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <p className="greeting mono">
          <span className="d" />
          Available for Software Engineering Internships
        </p>
        <h1 className="name">Faizan Tanwar</h1>
        <p className="role">
          Full Stack Developer building AI-integrated MERN applications — SIH 2025 National Finalist.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects →</a>
          <a href="mailto:faizantanwar1611@gmail.com" className="btn btn-outline">Say Hello</a>
        </div>
      </div>

      <div className="marquee-block">
        <div className="marquee-strip strip-a">
          <Marquee items={ROW_A} />
        </div>
        <div className="marquee-strip strip-b">
          <Marquee items={ROW_B} reverse />
        </div>
      </div>

      <style>{`
        .hero{padding:150px 0 0;min-height:92vh;display:flex;flex-direction:column;justify-content:center;}
        .hero-inner{display:flex;flex-direction:column;align-items:center;text-align:center;}
        .greeting{
          display:inline-flex;align-items:center;gap:8px;font-size:12.5px;color:var(--pink);
          border:1px solid rgba(245,163,199,0.25);background:rgba(245,163,199,0.06);
          padding:6px 14px;border-radius:20px;margin-bottom:34px;
        }
        .greeting .d{width:6px;height:6px;border-radius:50%;background:var(--pink);display:inline-block;}
        .name{
          font-family:var(--font-display);font-weight:700;
          font-size:clamp(52px,10vw,108px);line-height:1;letter-spacing:-.02em;
          color:var(--pink);
          text-shadow:0 0 60px var(--pink-glow);
        }
        .role{
          font-family:var(--font-display);font-weight:500;
          font-size:clamp(16px,2.2vw,22px);color:var(--text-dim);
          margin-top:22px;max-width:620px;
        }
        .hero-cta{display:flex;gap:14px;flex-wrap:wrap;justify-content:center;margin-top:36px;}

        .marquee-block{position:relative;height:104px;margin-top:44px;overflow:hidden;}
        .marquee-strip{
          position:absolute;left:-10%;right:-10%;top:50%;overflow:hidden;padding:10px 0;
          background:var(--surface);border-top:1px solid var(--border-soft);border-bottom:1px solid var(--border-soft);
        }
        .strip-a{transform:translateY(-50%) rotate(-3.5deg);z-index:1;}
        .strip-b{transform:translateY(-50%) rotate(3.5deg);z-index:2;}
        .marquee-row{width:100%;}
        .marquee-track{display:flex;width:max-content;animation:scroll-left 36s linear infinite;}
        .marquee-track.rev{animation:scroll-right 42s linear infinite;}
        .marquee-item{
          font-family:var(--font-mono);font-size:12px;color:var(--text-faint);
          padding:0 18px;white-space:nowrap;display:flex;align-items:center;gap:18px;
        }
        .marquee-item .sep{color:var(--pink-dim);font-size:10px;}
        @keyframes scroll-left{from{transform:translateX(0);}to{transform:translateX(-50%);}}
        @keyframes scroll-right{from{transform:translateX(-50%);}to{transform:translateX(0);}}

        @media (max-width:600px){
          .marquee-block{height:90px;}
        }
      `}</style>
    </section>
  );
}
