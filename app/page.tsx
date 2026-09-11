import Image from "next/image";
import { ContactCopyButton } from "./ContactCopyButton";

const skills = [
  {
    label: "Programming",
    items: ["Python", "C#", "JavaScript", "TypeScript", "CSS", "Dart"],
  },
  {
    label: "Database",
    items: ["SQL", "SQLite", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Visual Studio Code", "Visual Studio", "Android Studio", "Docker", "Weka"],
  },
  {
    label: "Soft Skills",
    items: ["Effective Communication", "Adaptability", "Calm Under Pressure", "Continuous Learner"],
  },
];

const awsCertificates = [
  { title: "Cloud Foundations", image: "/certificates/aws-cloud-foundations.png" },
  { title: "Generative AI Foundations", image: "/certificates/aws-generative-ai-foundations.png" },
  { title: "Machine Learning for Natural Language Processing", image: "/certificates/aws-machine-learning-nlp.png" },
  { title: "Machine Learning Foundations", image: "/certificates/aws-machine-learning-foundations.png" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Back to home">
          AT<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About &amp; Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          Let&apos;s Talk <Arrow />
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Hey there, I&apos;m</p>
          <h1 className="hero-name">
            <span>AURARWACH</span>
            <em>TACHAVEERAPHONG</em>
          </h1>
          <div className="hero-actions">
            <a className="button primary" href="#projects">See My Work <Arrow /></a>
            <a className="text-link" href="#about">More About Me <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile photo of Aurarwach Tachaveeraphong">
          <div className="portrait-card">
            <div className="portrait-image">
              <Image
                src="/profile.jpg"
                alt="Aurarwach Tachaveeraphong"
                fill
                priority
                sizes="(max-width: 700px) 82vw, 440px"
              />
            </div>
            <div className="availability"><i /> OPEN TO OPPORTUNITIES</div>
          </div>
          <div className="orbit-note">NICKNAME<br /><strong>TAN</strong></div>
        </div>
        <div className="hero-index">PORTFOLIO / 2026</div>
      </section>

      <section className="profile-section section" id="about">
        <div className="section-kicker">01 / EDUCATION &amp; SKILLS</div>

        <article className="education-card">
          <div className="education-year">2023 — PRESENT</div>
          <div>
            <span className="education-type">EDUCATION</span>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>School of Information Technology and Innovation</p>
            <strong>Bangkok University</strong>
          </div>
          <div className="gpa"><span>GPA</span><strong>3.07</strong></div>
        </article>

        <div className="combined-skills">
          <div className="skills-title">
            <h2>MY<br /><em>SKILLS</em></h2>
          </div>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <article className="skill-row" key={skill.label}>
                <span>0{index + 1}</span>
                <h3>{skill.label}</h3>
                <div className="skill-tags">
                  {skill.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading light">
          <div className="section-kicker">02 / SELECTED PROJECTS</div>
          <h2>FEATURED<br /><em>WORK</em></h2>
        </div>
        <div className="project-summary-grid">
          <a className="project-summary-card" href="/projects/giewbu-ai">
            <div className="project-summary-image">
              <Image src="/projects/giewbu-ai/summary-insight.png" alt="GIEWBU AI conversation analysis dashboard" fill sizes="(max-width: 700px) 90vw, 48vw" />
              <span>AWARD-WINNING AI PROJECT</span>
            </div>
            <div className="project-summary-content">
              <div className="project-summary-top"><span>01 / ARTIFICIAL INTELLIGENCE</span><span>BACKEND DEVELOPMENT</span></div>
              <h3>GIEWBU AI Project</h3>
              <p>AI-powered call center speech transcription and conversation analysis, transforming recorded calls into structured product, issue, solution, and employee-performance insights.</p>
              <div className="project-tech">
                {["TypeScript", "Python", "CSS", "JavaScript", "SQL"].map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <span className="view-case-study">VIEW CASE STUDY <Arrow /></span>
            </div>
          </a>

          <a className="project-summary-card" href="/projects/phishing-detection">
            <div className="project-summary-image light-project-summary">
              <Image src="/projects/phishing-detection/evaluation-metrics.png" alt="Random Forest phishing website detection evaluation metrics and confusion matrix" fill sizes="(max-width: 700px) 90vw, 48vw" />
              <span>DATA MINING PROJECT</span>
            </div>
            <div className="project-summary-content">
              <div className="project-summary-top"><span>02 / CYBERSECURITY</span><span>DATA ANALYSIS</span></div>
              <h3>Phishing Website Detection</h3>
              <p>A Random Forest classification project that analyzes 188,636 URLs across 51 features to distinguish phishing websites from legitimate ones with 99.9979% accuracy.</p>
              <div className="project-tech">
                {["Weka", "Random Forest", "Data Mining", "Machine Learning"].map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <span className="view-case-study">VIEW CASE STUDY <Arrow /></span>
            </div>
          </a>
        </div>
      </section>

      <section className="certificates section" id="certificates">
        <div>
          <div className="section-kicker">03 / CERTIFICATES</div>
          <h2>ALWAYS<br /><em>GROWING</em></h2>
        </div>
        <div className="certificate-grid">
          <a className="certificate-card" href="/certificates/oracle-ai-foundations.pdf" target="_blank" rel="noreferrer">
            <div className="certificate-preview">
              <Image src="/certificates/oracle-ai-foundations.png" alt="Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate certificate" fill sizes="(max-width: 700px) 90vw, 35vw" />
            </div>
            <div className="certificate-number">01 / ORACLE UNIVERSITY</div>
            <h3>Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</h3>
            <div className="certificate-meta"><span>Issued Nov 07, 2025</span><span>Valid until Nov 07, 2027</span></div>
            <span className="certificate-link">View Certificate <Arrow /></span>
          </a>

          <a className="certificate-card" href="/certificates/oracle-cx-process-essentials.pdf" target="_blank" rel="noreferrer">
            <div className="certificate-preview">
              <Image src="/certificates/oracle-cx-process-essentials.png" alt="Oracle Fusion Cloud Applications CX Process Essentials Certified certificate" fill sizes="(max-width: 700px) 90vw, 35vw" />
            </div>
            <div className="certificate-number">02 / ORACLE UNIVERSITY</div>
            <h3>Oracle Fusion Cloud Applications CX Process Essentials Certified - Rel 1</h3>
            <div className="certificate-meta"><span>Issued Dec 02, 2025</span><span>Oracle Certified Essentials</span></div>
            <span className="certificate-link">View Certificate <Arrow /></span>
          </a>

          {awsCertificates.map((certificate, index) => (
            <a className="certificate-card" href={certificate.image} target="_blank" rel="noreferrer" key={certificate.image}>
              <div className="certificate-preview">
                <Image src={certificate.image} alt={`AWS Academy ${certificate.title} training badge`} fill sizes="(max-width: 430px) 90vw, (max-width: 980px) 43vw, 26vw" />
              </div>
              <div className="certificate-number">0{index + 3} / AWS ACADEMY</div>
              <h3>AWS Academy {certificate.title}</h3>
              <div className="certificate-meta"><span>AWS Academy Graduate</span><span>Trained</span></div>
              <span className="certificate-link">View Certificate <Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="experience-heading">
          <div className="section-kicker">04 / WORK EXPERIENCE</div>
          <h2>WORK<br /><em>EXPERIENCE</em></h2>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <span className="experience-number">01</span>
            <div className="experience-role"><small>POSITION</small><h3>Barista</h3></div>
            <div className="experience-place"><small>WORKPLACE</small><p>Qottontale Cafe</p></div>
            <div className="experience-period"><small>PERIOD</small><p>January 2023 - August 2023</p></div>
            <p className="experience-description">Prepared coffee and other beverages, managed ingredients and stock, provided customer service, and completed opening and closing duties.</p>
          </article>

          <article className="experience-item">
            <span className="experience-number">02</span>
            <div className="experience-role"><small>POSITION</small><h3>Bartender</h3></div>
            <div className="experience-place"><small>WORKPLACE</small><p>Charoen Krung Bar &amp; Bistro</p></div>
            <div className="experience-period"><small>PERIOD</small><p>July 2022 - December 2022</p></div>
            <p className="experience-description">Prepared alcoholic and non-alcoholic beverages, managed ingredients and bar stock, provided customer service, and completed opening and closing duties.</p>
          </article>

          <article className="experience-item">
            <span className="experience-number">03</span>
            <div className="experience-role"><small>POSITION</small><h3>Barista</h3></div>
            <div className="experience-place"><small>WORKPLACE</small><p>House of Common (HOC)</p></div>
            <div className="experience-period"><small>PERIOD</small><p>March 2020 - September 2022</p></div>
            <p className="experience-description">Prepared coffee and other beverages, managed ingredients and stock, provided customer service, and completed opening and closing duties.</p>
          </article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <div className="section-kicker light-kicker">05 / CONTACT</div>
          <h2>LET&apos;S<br />CONNECT<span>.</span></h2>
          <p>Feel free to contact me for work, collaboration, or a conversation about data and technology.</p>
          <a
            className="button coral-button"
            href="/cv/Aurarwach-Tachaveeraphong-CV.pdf"
            download="Aurarwach-Tachaveeraphong-CV.pdf"
            aria-label="Download Aurarwach Tachaveeraphong CV as a PDF"
          >
            DOWNLOAD CV <Arrow />
          </a>
        </div>
        <div className="social-links" aria-label="Contact information">
          <ContactCopyButton label="EMAIL" value="aurarwach.tach@gmail.com" displayValue="aurarwach.tach@gmail.com" />
          <ContactCopyButton label="PHONE" value="0923599524" displayValue="092-359-9524" />
          <a href="https://www.linkedin.com/in/aurarwach-tachaveeraphong-1b186840a/" target="_blank" rel="noreferrer"><span><small>LINKEDIN</small>Aurarwach Tachaveeraphong</span><Arrow /></a>
          <div className="contact-row"><span><small>LOCATION</small>Nonthaburi, Thailand</span><i>TH</i></div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#home">AT<span>.</span></a>
        <p>DESIGNED &amp; DEVELOPED WITH INTENTION · © 2026 AURARWACH TACHAVEERAPHONG</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
