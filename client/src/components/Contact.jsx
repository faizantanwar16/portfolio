import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal();

  return (
    <>
      <div className="section-spacer" />
      <section id="contact" className="wrap">
        <div className="contact-box reveal" ref={ref}>
          <span className="sec-tag">// ready-to-connect</span>
          <h2>Let's build something real.</h2>
          <p>Open to Software Engineering internships and collaborative full-stack or AI-integration projects.</p>
          <div className="contact-btns">
            <a href="mailto:faizantanwar1611@gmail.com" className="btn btn-primary">Email Me</a>
            <a href="tel:+918421083326" className="btn btn-outline">+91 84210 83326</a>
            <a href="https://linkedin.com/in/faizan-tanwar" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
            <a href="https://github.com/faizantanwar16" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
          </div>
        </div>
      </section>

      <style>{`
        .contact-box{
          border:1px solid var(--border);border-radius:22px;padding:76px 50px;
          background:radial-gradient(circle at 30% 20%, var(--pink-glow), transparent 60%), var(--surface);
          text-align:center;
        }
        .contact-box .sec-tag{display:flex;justify-content:center;}
        .contact-box h2{font-family:var(--font-display);font-weight:700;font-size:clamp(30px,5vw,50px);margin-bottom:18px;}
        .contact-box p{color:var(--text-dim);max-width:480px;margin:0 auto 34px;font-size:15.5px;}
        .contact-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
        @media (max-width:600px){ .contact-box{padding:48px 24px;} }
      `}</style>
    </>
  );
}
