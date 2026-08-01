import { useEffect, useRef } from 'react';
import { projects } from '../data';
import { useReveal } from '../hooks/useReveal';

function ProjectCard({ project, side }) {
  const ref = useReveal(0.2);
  return (
    <div className={`p-item ${side}`}>
      <div className="p-dot" />
      <div className={`p-card reveal-${side === 'left' ? 'left' : 'right'}`} ref={ref}>
        <div className="p-top">
          <span className="p-num mono">0{project.order ?? ''}</span>
          <span className="p-date mono">{project.date}</span>
        </div>
        <h3>{project.title}</h3>
        {project.tagline && <div className="p-tagline">{project.tagline}</div>}
        <p>{project.description}</p>
        {!!project.tags?.length && (
          <div className="p-tags">
            {project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
        )}
        <div className="p-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Code ↗</a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live ↗</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsTimeline() {
  const lineRef = useRef(null);
  const fillRef = useRef(null);
  const headRef = useReveal();

  useEffect(() => {
    function onScroll() {
      const line = lineRef.current;
      const fill = fillRef.current;
      if (!line || !fill) return;
      const rect = line.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const visible = Math.min(total, Math.max(0, vh * 0.75 - rect.top));
      const pct = total > 0 ? Math.min(100, Math.max(0, (visible / total) * 100)) : 0;
      fill.style.height = pct + '%';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="section-spacer" />
      <section id="projects" className="wrap">
        <div className="sec-head center reveal" ref={headRef}>
          <span className="sec-tag">// featured-projects</span>
          <h2 className="sec-title">Selected work</h2>
          <p className="sec-sub">Four end-to-end applications spanning AI integration, machine learning, and full-stack engineering.</p>
        </div>

        <div className="timeline" ref={lineRef}>
          <div className="line-track" />
          <div className="line-fill" ref={fillRef} />
          {projects.map((p, i) => (
            <ProjectCard project={p} side={i % 2 === 0 ? 'left' : 'right'} key={p.title} />
          ))}
        </div>
      </section>

      <style>{`
        .timeline{position:relative;}
        .line-track{
          position:absolute;left:50%;top:0;bottom:0;width:2px;margin-left:-1px;
          background:var(--border-soft);
        }
        .line-fill{
          position:absolute;left:50%;top:0;width:2px;margin-left:-1px;height:0;
          background:linear-gradient(var(--pink), var(--pink-dim));
          box-shadow:0 0 12px var(--pink-glow);
          transition:height .1s linear;
        }
        .p-item{position:relative;width:50%;padding:0 48px 58px;}
        .p-item:last-child{padding-bottom:0;}
        .p-item.left{left:0;text-align:right;}
        .p-item.right{left:50%;text-align:left;}
        .p-dot{
          position:absolute;top:6px;width:15px;height:15px;border-radius:50%;
          background:var(--bg);border:2px solid var(--pink);z-index:2;
          transition:transform .3s ease, box-shadow .3s ease;
        }
        .p-item.left .p-dot{right:-8px;}
        .p-item.right .p-dot{left:-8px;}
        .p-item:hover .p-dot{transform:scale(1.35);box-shadow:0 0 14px var(--pink-glow);}
        .p-card{
          position:relative;overflow:hidden;
          display:inline-block;text-align:left;width:100%;
          border:1px solid var(--border);background:var(--surface);border-radius:14px;padding:26px 28px;
          transition:border-color .3s ease, transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease;
        }
        .p-card::before{
          content:'';position:absolute;inset:0;pointer-events:none;
          background:linear-gradient(115deg, transparent 40%, rgba(245,163,199,0.10) 50%, transparent 60%);
          transform:translateX(-120%);transition:transform .7s ease;
        }
        .p-card:hover::before{transform:translateX(120%);}
        .p-card:hover{
          border-color:var(--pink-dim);
          transform:translateY(-7px) scale(1.015);
          box-shadow:0 18px 40px -14px rgba(245,163,199,0.28);
        }
        .p-top{display:flex;justify-content:space-between;margin-bottom:14px;}
        .p-num{color:var(--text-faint);font-size:12px;}
        .p-date{color:var(--pink);font-size:12px;}
        .p-card h3{font-family:var(--font-display);font-size:21px;font-weight:600;margin-bottom:4px;transition:color .3s ease;}
        .p-card:hover h3{color:var(--pink);}
        .p-tagline{color:var(--text-faint);font-size:13px;margin-bottom:12px;}
        .p-card p{color:var(--text-dim);font-size:14px;margin-bottom:16px;}
        .p-tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;}
        .p-tags .tag{transition:transform .25s ease, border-color .25s ease, color .25s ease;}
        .p-card:hover .p-tags .tag{border-color:rgba(245,163,199,0.3);color:var(--text);}
        .p-tags .tag:hover{transform:translateY(-2px);}
        .p-links{display:flex;gap:16px;padding-top:14px;border-top:1px solid var(--border-soft);position:relative;z-index:1;}
        .p-links a{font-family:var(--font-mono);font-size:12.5px;color:var(--text);transition:color .2s, transform .2s;display:inline-block;}
        .p-links a:hover{color:var(--pink);transform:translateX(2px);}

        @media (max-width:820px){
          .line-track,.line-fill{left:20px;margin-left:0;}
          .p-item,.p-item.left,.p-item.right{width:100%;left:0;text-align:left;padding:0 0 40px 56px;}
          .p-item.left .p-dot,.p-item.right .p-dot{left:12px;right:auto;}
        }
      `}</style>
    </>
  );
}
