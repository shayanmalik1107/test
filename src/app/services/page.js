"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Services.module.css";

export default function Services() {
  // Service Cards Expansions State
  const [expandedService, setExpandedService] = useState(null);

  // Development Lifecycle State
  const [activeStep, setActiveStep] = useState(0);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleExpandService = (id) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const ServicesData = [
    {
      id: "web",
      title: "Full-Stack Web Architectures",
      desc: "Delivering modern corporate portals, SaaS platforms, and digital marketplaces using Next.js and secure databases.",
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Redis"],
      deliverables: [
        "SEO-optimized server-side rendering (SSR)",
        "Edge-deployed database integrations",
        "Responsive fluid layout grids",
        "Secure payment integrations (Stripe, Adyen)"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
      )
    },
    {
      id: "mobile",
      title: "Cross-Platform Mobile Apps",
      desc: "Creating high-fidelity, native-performance iOS and Android applications built on Flutter and React Native.",
      techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Redux Toolkit", "SQLite"],
      deliverables: [
        "App Store & Google Play distribution",
        "Biometrics & hardware APIs integrations",
        "Offline storage with database synchronization",
        "Push notifications and location telemetry"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
      )
    },
    {
      id: "ai",
      title: "Agentic AI & ML Integrations",
      desc: "Supercharging software applications with context-aware LLMs, custom agents, semantic search, and prediction models.",
      techStack: ["OpenAI API", "LangChain", "Python", "Pinecone", "TensorFlow", "LlamaIndex"],
      deliverables: [
        "Automated AI customer agents",
        "Retrieval-Augmented Generation (RAG) setups",
        "Vector database configuration",
        "Real-time sentiment and prediction pipelines"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      )
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure Operations",
      desc: "Designing resilient AWS and GCP architectures with continuous deployment automation and zero-downtime clustering.",
      techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      deliverables: [
        "Infrastructure as Code (IaC) templates",
        "Container clustering and autoscaling",
        "Advanced CI/CD deployment logic",
        "Comprehensive vulnerability auditing"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>
      )
    },
    {
      id: "uiux",
      title: "Premium Design Systems & UI/UX",
      desc: "Crafting beautiful layouts, high-fidelity prototypes, and cohesive design tokens that align design with development.",
      techStack: ["Figma", "Adobe CC", "Principle", "Lottie Animations", "Tailwind Design tokens"],
      deliverables: [
        "Comprehensive UI kit & components documentation",
        "Wireframe workflows and high-fidelity testing",
        "Lottie/micro-animations setup",
        "Usability validation reporting"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
      )
    }
  ];

  const lifecycleData = [
    {
      step: "01",
      name: "Discovery & Strategy",
      tagline: "Aligning product objectives with realistic timelines.",
      details: "We start with mapping your technical requirements. We organize design workshops, define functional backlog scopes, select the optimal database architectures, and establish concrete milestone expectations."
    },
    {
      step: "02",
      name: "Technical Architecture",
      tagline: "Mapping out data diagrams and deployment structures.",
      details: "Before writing any code, we document the software architecture. We define SQL/NoSQL schemas, mock up REST/GraphQL API endpoints, draft container mapping, and construct the cloud network architecture."
    },
    {
      step: "03",
      name: "High-Fidelity Design",
      tagline: "Iterating on interactive UI flow and design system assets.",
      details: "Our UI/UX designers create pixel-perfect Figma screens. We build a cohesive set of color variables, font tokens, and component cards, ensuring design validation before frontend development begins."
    },
    {
      step: "04",
      name: "Sprint-Based Engineering",
      tagline: "Translating architectural specs into high-performance code.",
      details: "We build in two-week agile sprints. Standard practices include daily checks, continuous code reviews, and push workflows, giving you access to interactive development builds at the end of every sprint."
    },
    {
      step: "05",
      name: "Quality Auditing & Launch",
      tagline: "Rigorous testing and releasing to cloud endpoints.",
      details: "We run unit testing suites, verify performance metrics, and perform cross-browser layout audits. We configure continuous hosting, secure SSL layers, and transfer operational assets to your team."
    },
    {
      step: "06",
      name: "Operations & Support",
      tagline: "Providing robust SLAs and progressive system features.",
      details: "We offer continuous maintenance agreements to handle server security upgrades, database backup tracking, performance tuning, and the prioritization of feature additions based on real user analytics."
    }
  ];

  const faqs = [
    {
      q: "Do you sign non-disclosure agreements (NDAs) before discussion?",
      a: "Yes, absolutely. We prioritize client intellectual property. We are happy to execute standard or custom NDAs prior to reviewing project details or sharing proprietary software specs."
    },
    {
      q: "What is the typical timeline for an enterprise MVP?",
      a: "Most medium-complexity web or mobile products require 8 to 12 weeks from starting layout specs to production release. Large scale systems requiring complex integrations or AI agents can range from 16 to 24 weeks."
    },
    {
      q: "How do you estimate project costs?",
      a: "We work primarily on a fixed-scope, fixed-price model for initial versions (MVPs) once specifications are approved. For long-term engagements, team scaling, or evolving specifications, we provide dedicated sprint teams billed weekly."
    },
    {
      q: "Can Vortex integrate directly with our existing engineering team?",
      a: "Yes. Our team can operate as an autonomous product team or blend directly into your technical organization. We integrate with your existing GitHub channels, Jira boards, and Slack teams."
    }
  ];

  return (
    <div className={styles.container}>
      <div className="glow-orb" style={{ top: "15%", left: "5%", width: "400px", height: "400px", background: "rgba(139, 92, 246, 0.1)" }} />
      <div className="glow-orb" style={{ bottom: "25%", right: "5%", width: "350px", height: "350px", background: "rgba(6, 182, 212, 0.08)" }} />

      {/* Services Header */}
      <section className="page-section" style={{ paddingBottom: "2rem" }}>
        <span className="badge-neon" style={{ marginBottom: "1rem" }}>Services Deep Dive</span>
        <h1 className={`${styles.mainTitle} text-gradient-primary`}>Our Engineering Capabilities</h1>
        <p className="section-desc" style={{ fontSize: "1.2rem", maxWidth: "750px" }}>
          We design and deploy modern software architectures. Explore our core service verticals below and expand them to view tech stack and deliverables.
        </p>
      </section>

      {/* Interactive Services Catalog */}
      <section className="page-section" style={{ paddingTop: "0" }}>
        <div className={styles.ServicesGrid}>
          {ServicesData.map((service) => {
            const isExpanded = expandedService === service.id;
            return (
              <div
                key={service.id}
                className={`${styles.serviceCard} glass-panel-interactive ${
                  isExpanded ? styles.serviceCardExpanded : ""
                }`}
                onClick={() => toggleExpandService(service.id)}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    {service.icon}
                  </div>
                  <div className={styles.titleBox}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.desc}</p>
                  </div>
                  <button className={`${styles.expandBtn} ${isExpanded ? styles.expandBtnActive : ""}`} aria-label="Toggle Details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>
                </div>

                <div className={`${styles.cardDetails} ${isExpanded ? styles.detailsOpen : ""}`}>
                  <div className={styles.detailsDivider} />
                  <div className={styles.detailsContent}>
                    <div className={styles.detailCol}>
                      <h4 className={styles.detailTitle}>Technologies We Use</h4>
                      <div className={styles.techTags}>
                        {service.techStack.map((tech, i) => (
                          <span key={i} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.detailCol}>
                      <h4 className={styles.detailTitle}>Key Deliverables</h4>
                      <ul className={styles.deliverableList}>
                        {service.deliverables.map((del, i) => (
                          <li key={i}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            {del}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}>
                    <Link href={`/contact?service=${service.id}`} className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }} onClick={(e) => e.stopPropagation()}>
                      Request a quote
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Development Process Timeline */}
      <section className={styles.lifecycleSection}>
        <div className="page-section">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="badge-neon" style={{ marginBottom: "1rem" }}>Execution Lifecycle</span>
            <h2 className="section-title">From Concept to Scaled Release</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Our step-by-step engineering roadmap ensures predictability and high-quality deliverables.
            </p>
          </div>

          <div className={styles.timelineContainer}>
            {/* Timeline selector bar */}
            <div className={styles.timelineBar}>
              {lifecycleData.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`${styles.timelineDot} ${activeStep === idx ? styles.dotActive : ""}`}
                >
                  <span className={styles.dotNum}>{step.step}</span>
                  <span className={styles.dotLabel}>{step.name.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Timeline content box */}
            <div className={`${styles.timelineContent} glass-panel`}>
              <span className={styles.stepBadge}>Step {lifecycleData[activeStep].step}</span>
              <h3 className={styles.stepTitle}>{lifecycleData[activeStep].name}</h3>
              <p className={styles.stepTagline}>{lifecycleData[activeStep].tagline}</p>
              <p className={styles.stepDesc}>{lifecycleData[activeStep].details}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQ Accordion */}
      <section className="page-section">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="badge-neon" style={{ marginBottom: "1rem" }}>Faq Matrix</span>
          <h2 className="section-title">Common Project Inquiries</h2>
        </div>

        <div className={styles.faqWrapper}>
          {faqs.map((faq, idx) => {
            const isFaqOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqItem} glass-panel-interactive`}
                onClick={() => toggleFaq(idx)}
              >
                <div className={styles.faqHeader}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <button className={`${styles.faqToggle} ${isFaqOpen ? styles.faqToggleActive : ""}`} aria-label="Expand question">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                </div>
                <div className={`${styles.faqBody} ${isFaqOpen ? styles.bodyOpen : ""}`}>
                  <div className={styles.faqDivider} />
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
