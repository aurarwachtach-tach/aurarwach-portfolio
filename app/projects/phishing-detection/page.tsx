import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Phishing Website Detection — Aurarwach Tachaveeraphong",
  description: "A Random Forest data mining project for phishing website detection using the PhiUSIIL dataset.",
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function PhishingDetectionPage() {
  return (
    <main className="project-detail-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Back to portfolio home">AT<span>.</span></a>
        <a className="project-detail-back" href="/#projects">← BACK TO PROJECTS</a>
        <a className="header-cta" href="/projects/phishing-detection/DataMining.pdf" target="_blank" rel="noreferrer">READ PDF <Arrow /></a>
      </header>

      <section className="projects section project-detail-section">
        <div className="section-heading light">
          <div className="section-kicker">PROJECT 02 / CASE STUDY</div>
          <h1 className="project-detail-title">PHISHING<br /><em>DETECTION</em></h1>
          <p>Random Forest classification for detecting phishing websites from URL characteristics.</p>
        </div>

        <article className="featured-project">
          <div className="project-feature-top">
            <div className="project-main-image light-project-image">
              <Image src="/projects/phishing-detection/evaluation-metrics.png" alt="Random Forest phishing detection evaluation metrics and confusion matrix" fill priority sizes="(max-width: 980px) 90vw, 42vw" />
            </div>
            <div className="project-overview">
              <span className="award-badge">DATA MINING &amp; CYBERSECURITY</span>
              <p className="project-label">OVERVIEW</p>
              <h3>Detecting phishing websites through URL data.</h3>
              <p>This project applies Random Forest classification to the PhiUSIIL Phishing URL Dataset to distinguish phishing websites from legitimate websites without relying only on traditional blacklists.</p>
              <p>The analysis uses 188,636 URL records and 51 features, with model performance evaluated through Accuracy, Precision, Recall, F-Measure, and a Confusion Matrix.</p>
              <div className="project-role">
                <span>MY ROLE</span>
                <strong>Data Analyst</strong>
                <p>Dataset Analysis &amp; Feature Interpretation</p>
              </div>
              <div className="project-tech">
                {["Weka", "Random Forest", "Data Mining", "Machine Learning", "PhiUSIIL"].map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          </div>

          <div className="project-capabilities">
            <div><span>01</span><h4>Dataset Analysis</h4><p>Studied 188,636 URL records and interpreted the statistical characteristics of 51 phishing-related features.</p></div>
            <div><span>02</span><h4>Model Development</h4><p>Used data cleaning, NumericToNominal preprocessing, and a Random Forest classifier in Weka.</p></div>
            <div><span>03</span><h4>Model Evaluation</h4><p>Measured 99.9979% accuracy with only four false positives and zero false negatives.</p></div>
          </div>

          <div className="project-gallery equal-project-gallery">
            <figure className="project-gallery-card">
              <div className="project-gallery-image"><Image src="/projects/phishing-detection/workflow.png" alt="Weka workflow for phishing URL classification using Random Forest" fill sizes="(max-width: 700px) 90vw, 43vw" /></div>
              <figcaption>Data loading, class assignment, training-set generation, Random Forest classification, and evaluation workflow in Weka.</figcaption>
            </figure>
            <figure className="project-gallery-card">
              <div className="project-gallery-image"><Image src="/projects/phishing-detection/weka-results.png" alt="Weka Random Forest classification results and confusion matrix" fill sizes="(max-width: 700px) 90vw, 43vw" /></div>
              <figcaption>Weka model output showing 188,632 correctly classified instances and only four errors.</figcaption>
            </figure>
          </div>

          <div className="project-footer">
            <div className="project-team">
              <p className="project-label">TEAM COLLABORATORS</p>
              <ul>
                <li>วชิรวิทย์ ตันติพูลผล</li>
                <li>เขมเดช เหนียวแน่น</li>
                <li>กัญญ์วรา บ่นหา</li>
              </ul>
            </div>
            <div className="project-award">
              <p className="project-label">ACADEMIC CONTEXT</p>
              <strong>Data Analytics and Mining</strong>
              <span>Bangkok University - 2026</span>
            </div>
            <a className="project-document" href="/projects/phishing-detection/DataMining.pdf" target="_blank" rel="noreferrer"><span>READ PROJECT<br />DOCUMENTATION</span><Arrow /></a>
          </div>
        </article>

        <a className="project-back-home" href="/#projects">← BACK TO ALL PROJECTS</a>
      </section>
    </main>
  );
}
