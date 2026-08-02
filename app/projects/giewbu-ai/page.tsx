import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GIEWBU AI Project — Aurarwach Tachaveeraphong",
  description: "An AI-powered call center speech transcription and conversation analysis project.",
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function GiewbuProjectPage() {
  return (
    <main className="project-detail-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Back to portfolio home">AT<span>.</span></a>
        <a className="project-detail-back" href="/#projects">← BACK TO PROJECTS</a>
        <a className="header-cta" href="/projects/giewbu-ai/GIEWBU-Project-Redacted-v2.pdf" target="_blank" rel="noreferrer">READ PDF <Arrow /></a>
      </header>

      <section className="projects section project-detail-section">
        <div className="section-heading light">
          <div className="section-kicker">PROJECT 01 / CASE STUDY</div>
          <h1 className="project-detail-title">GIEWBU<br /><em>AI PROJECT</em></h1>
          <p>AI-powered call center speech transcription and conversation analysis.</p>
        </div>

        <article className="featured-project">
          <div className="project-feature-top">
            <div className="project-main-image">
              <Image src="/projects/giewbu-ai/summary-insight.png" alt="GIEWBU AI conversation analysis dashboard showing summary insights, intent detection, keywords, anomalies, and recommendations" fill priority sizes="(max-width: 980px) 90vw, 54vw" />
            </div>
            <div className="project-overview">
              <span className="award-badge">AWARD-WINNING AI PROJECT</span>
              <p className="project-label">OVERVIEW</p>
              <h3>Turning call center conversations into structured insights.</h3>
              <p>GIEWBU AI transcribes recorded call center conversations using Typhoon AI for speech-to-text, then sends the transcript to Llama AI for analysis.</p>
              <p>The system identifies product brands and models, reported problems, suggested solutions, and employee performance scores from each conversation.</p>
              <div className="project-role">
                <span>MY ROLE</span>
                <strong>Backend Developer</strong>
                <p>Core Logic &amp; API Integration</p>
              </div>
              <div className="project-tech">
                {["TypeScript", "Python", "CSS", "JavaScript", "SQL"].map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          </div>

          <div className="project-capabilities">
            <div><span>01</span><h4>Speech to Text</h4><p>Transcribes recorded customer calls into text using Typhoon AI.</p></div>
            <div><span>02</span><h4>Conversation Analysis</h4><p>Uses Llama AI to understand important details and patterns in each conversation.</p></div>
            <div><span>03</span><h4>Structured Insights</h4><p>Extracts products, issues, solutions, and employee performance scores.</p></div>
          </div>

          <div className="project-gallery">
            <figure className="project-gallery-card portrait-project">
              <div className="project-gallery-image"><Image src="/projects/giewbu-ai/metadata-details.png" alt="GIEWBU AI metadata dashboard showing product details and quality scores" fill sizes="(max-width: 700px) 90vw, 34vw" /></div>
              <figcaption>Metadata, product details, QA score, and warranty information.</figcaption>
            </figure>
            <figure className="project-gallery-card award-project">
              <div className="project-gallery-image"><Image src="/projects/giewbu-ai/award-team.jpg" alt="GIEWBU AI team receiving an award at Bangkok University IT Empowering Day 2026" fill sizes="(max-width: 700px) 90vw, 50vw" /></div>
              <figcaption>Best AI Prototype for Real-World Impact Award - IT Empowering Day 2026: In the Era of AI, Bangkok University.</figcaption>
            </figure>
          </div>

          <div className="project-footer">
            <div className="project-team">
              <p className="project-label">TEAM COLLABORATORS</p>
              <ul>
                <li>เขมเดช เหนียวแน่น</li>
                <li>วชิรวิทย์ ตันติพูลผล</li>
                <li>กัญญ์วรา บ่นหา</li>
                <li>จีระเดช มักเจริญ</li>
              </ul>
            </div>
            <div className="project-award">
              <p className="project-label">RECOGNITION</p>
              <strong>Best AI Prototype for Real-World Impact Award</strong>
              <span>Bangkok University</span>
            </div>
            <a className="project-document" href="/projects/giewbu-ai/GIEWBU-Project-Redacted-v2.pdf" target="_blank" rel="noreferrer"><span>READ PROJECT<br />DOCUMENTATION</span><Arrow /></a>
          </div>
        </article>

        <a className="project-back-home" href="/#projects">← BACK TO ALL PROJECTS</a>
      </section>
    </main>
  );
}
