"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: "all", label: "All Works" },
    { id: "web", label: "Web Systems" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "design", label: "UI/UX & Systems" },
    { id: "ai", label: "AI Solutions" },
  ];

  const projects = [
    {
      id: "novacommerce",
      title: "NovaCommerce",
      category: "web",
      tag: "E-Commerce / Headless Web App",
      desc: "A high-performance headless e-commerce store built for massive traffic peaks and edge-based checkout rendering.",
      image: "/hero.png",
      tech: ["Next.js", "GraphQL", "Tailwind CSS", "Stripe API", "Vercel Edge"],
      challenge: "The client suffered from 6-second page load times which led to a 40% cart abandonment rate. They needed an architecture that could load in under 1.5 seconds globally.",
      solution: "We rebuilt their frontend on Next.js App Router, caching static data on Vercel's global Edge Network, and integrated with a headless Shopify commerce API. All critical pages now load in under 1.2s.",
      results: ["LCP < 1.2s globally", "42% increase in sales conversion", "90% decrease in server expenses"]
    },
    {
      id: "pulsehealth",
      title: "Pulse Health",
      category: "mobile",
      tag: "Healthcare / Native Mobile App",
      desc: "A cross-platform patient monitoring app featuring local encrypted databases and automated vital notifications.",
      image: "/hero.png",
      tech: ["Flutter", "Dart", "Firebase Auth", "SQLite Encrypted", "Push Telemetry"],
      challenge: "Pulse Health needed a secure app enabling patients in remote regions to upload daily biometric logs offline and synchronizing with medical clinics when connected.",
      solution: "We deployed a Flutter native wrapper utilizing an SQLite database with AES-256 local database encryption. Background sync processes upload health payloads securely when signals return.",
      results: ["HIPAA certified security", "99.99% syncing success rate", "4.8 average Google Play rating"]
    },
    {
      id: "zenith",
      title: "Zenith UI",
      category: "design",
      tag: "Design System / SaaS UX",
      desc: "An enterprise design system unified across iOS, Android, and web products to streamline brand components.",
      image: "/hero.png",
      tech: ["Figma Tokens", "Stitches", "React", "Storybook", "Web Accessibility"],
      challenge: "Over 40 developer squads were building custom components, causing interface clutter and leading to prolonged frontend sprint timelines.",
      solution: "We created a centralized design tokens framework linking Figma styles to code components. We designed 60 accessible, reusable UI components exported to React, iOS, and Android ecosystems.",
      results: ["Sprint delivery times cut by 35%", "100% layout consistency", "WCAG 2.1 AA design validation"]
    },
    {
      id: "aetherai",
      title: "Aether AI Agents",
      category: "ai",
      tag: "Artificial Intelligence / RAG",
      desc: "An automated customer success agent pipeline incorporating vector indexing and context-based response paths.",
      image: "/hero.png",
      tech: ["OpenAI LLM", "LangChain", "Pinecone DB", "Python", "FastAPI"],
      challenge: "A leading financial firm was handling over 10,000 repetitive customer tickets daily, slowing response times and scaling support overhead costs.",
      solution: "We engineered a Retrieval-Augmented Generation (RAG) assistant connected to corporate policy data. The agent validates inputs and responds to queries instantly.",
      results: ["60% customer tickets automated", "Average response latency < 800ms", "Zero hallucination rate verified"]
    },
    {
      id: "orbit",
      title: "Orbit Data Engine",
      category: "web",
      tag: "Financial / WebGL Dashboards",
      desc: "A real-time financial tracking dashboard utilizing hardware-accelerated WebGL charts and web socket feeds.",
      image: "/hero.png",
      tech: ["React", "WebGL", "Three.js", "WebSockets", "Node.js cluster"],
      challenge: "Processing 50,000 real-time transaction updates per second caused standard HTML DOM charting components to freeze and crash browsers.",
      solution: "We designed a custom WebGL rendering canvas that draws transaction graphs directly onto the GPU. Data streams directly to the browser via dedicated WebSocket endpoints.",
      results: ["120 FPS graph updates", "Zero browser lag on 100k data nodes", "99.99% connection socket stability"]
    },
    {
      id: "mindflow",
      title: "Mindflow Audio",
      category: "mobile",
      tag: "Mental Health / Mobile App",
      desc: "A audio meditation application featuring offline media caching, custom audio mixers, and user streak logs.",
      image: "/hero.png",
      tech: ["React Native", "Expo Core", "AV Audio Engine", "Realm DB", "Lottie CSS"],
      challenge: "The client wanted a lightweight audio player offering smooth sound mixing (e.g. ambient rain overlaying music) that works without internet access.",
      solution: "We coded a React Native audio engine mapping AV nodes locally on iOS and Android. Audio assets are pre-cached in local memory with a Streak streak tracker in Realm DB.",
      results: ["1M+ tracks downloaded offline", "50% increase in daily user retention", "Featured on App Store frontpage"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className={styles.container}>
      <div className="glow-orb" style={{ top: "20%", right: "5%", width: "400px", height: "400px", background: "rgba(139, 92, 246, 0.08)" }} />
      <div className="glow-orb" style={{ bottom: "20%", left: "5%", width: "350px", height: "350px", background: "rgba(6, 182, 212, 0.08)" }} />

      {/* Portfolio Header */}
      <section className="page-section" style={{ paddingBottom: "2rem" }}>
        <span className="badge-neon" style={{ marginBottom: "1rem" }}>Our Case Studies</span>
        <h1 className={`${styles.mainTitle} text-gradient-cyan`}>Products Designed on Purpose</h1>
        <p className="section-desc" style={{ fontSize: "1.2rem", maxWidth: "750px" }}>
          We partner with ambitious startups and enterprises to build premium systems. Browse our projects below and click to read the full technical case study.
        </p>
      </section>

      {/* Category Filters */}
      <section className="page-section" style={{ paddingTop: "0", paddingBottom: "1.5rem" }}>
        <div className={styles.filtersWrapper}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.filterActive : ""}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="page-section" style={{ paddingTop: "2rem" }}>
        <div className="grid-container grid-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} glass-panel-interactive`}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className={styles.image}
                />
                <span className={styles.projectTag}>{project.tag.split(" / ")[0]}</span>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                <div className={styles.techTags}>
                  {project.tech.slice(0, 3).map((t, idx) => (
                    <span key={idx} className={styles.techTag}>{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className={styles.techTag}>+{project.tech.length - 3}</span>
                  )}
                </div>
                <button className={styles.readMoreBtn}>
                  Read Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Details Modal Overlay */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div className={`${styles.modalContent} glass-panel`} onClick={(e) => e.stopPropagation()}>
            {/* Modal Close Button */}
            <button className={styles.modalClose} onClick={() => setSelectedProject(null)} aria-label="Close Case Study">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Modal Image */}
            <div className={styles.modalImageContainer}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 1200px) 100vw, 800px"
                className={styles.modalImage}
              />
              <div className={styles.modalOverlayGradient} />
              <div className={styles.modalHeaderInfo}>
                <span className="badge-neon" style={{ marginBottom: "0.5rem" }}>{selectedProject.tag}</span>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className={styles.modalBody}>
              <div className={styles.modalGrid}>
                {/* Text explanation */}
                <div className={styles.modalDetailsCol}>
                  <div className={styles.detailBlock}>
                    <h4 className={styles.modalSectionTitle}>The Challenge</h4>
                    <p className={styles.modalText}>{selectedProject.challenge}</p>
                  </div>
                  <div className={styles.detailBlock}>
                    <h4 className={styles.modalSectionTitle}>Our Engineering Solution</h4>
                    <p className={styles.modalText}>{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Specs and stats column */}
                <div className={styles.modalSpecsCol}>
                  <div className={styles.detailBlock}>
                    <h4 className={styles.modalSectionTitle}>Tech Stack</h4>
                    <div className={styles.modalTechTags}>
                      {selectedProject.tech.map((t, idx) => (
                        <span key={idx} className={styles.modalTechTag}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.detailBlock}>
                    <h4 className={styles.modalSectionTitle}>Measurable Results</h4>
                    <ul className={styles.resultsList}>
                      {selectedProject.results.map((r, idx) => (
                        <li key={idx}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
