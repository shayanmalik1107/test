"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  // Why Us Tabs State
  const [activeTab, setActiveTab] = useState("approach");

  // Testimonials Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const whyUsData = {
    approach: {
      title: "Agile & Collaborative Approach",
      subtitle: "We build with transparency and velocity.",
      description: "Our iterative methodology guarantees alignment at every stage. We break complex builds into bi-weekly sprints, offering working builds and open communications. You remain in complete control while we manage engineering complexity.",
      points: ["Bi-weekly demo sessions", "Dedicated slack & sync channels", "Adaptive backlog management"]
    },
    tech: {
      title: "Cutting-Edge Tech Stack",
      subtitle: "Built for speed, scalability, and long-term durability.",
      description: "We avoid legacy tech debt by deploying modern tools like React, Next.js, Flutter, Node.js, and serverless architectures. Every line of code is optimized for Core Web Vitals, enterprise security, and cloud scalability.",
      points: ["100% Type-safe TypeScript", "Edge & CDN-first deployments", "Automated CI/CD pipelines"]
    },
    quality: {
      title: "Obsessive Quality Assurance",
      subtitle: "Zero compromise on user experience and speed.",
      description: "Every deployment goes through automated unit tests, end-to-end integration testing, and rigorous manual checks across multiple physical devices and screen sizes. If it isn't perfect, it doesn't ship.",
      points: ["Unit, Integration & E2E tests", "Strict performance budget (LCP < 2.5s)", "ADA and Web accessibility auditing"]
    }
  };

  const testimonials = [
    {
      quote: "Vortex Digital didn't just build our app; they partnered in our product strategy. Their Next.js implementation cut our load times in half and increased customer signups by 42%.",
      author: "Sarah Jenkins",
      role: "CTO, NovaCommerce",
      avatar: "/devcms-upload-1782381627402-ChatGPT-Image-May-21--2026--06_34_55-AM.png"
    },
    {
      quote: "The AI agent integration built by Vortex has automated 60% of our operations. The team's command of large language models and latency optimization was spectacular.",
      author: "Marcus Aurelius",
      role: "Head of Product, Aether AI",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Our cross-platform mobile app was delivered on time and within budget. Their Flutter expertise saved us months of redundant work. Highly recommend their design-first engineers.",
      author: "Elena Rostova",
      role: "Founder, Pulse Health",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={styles.container}>
      {/* Background glow orbs */}
      <div className="glow-orb" style={{ top: "10%", left: "15%", width: "350px", height: "350px", background: "rgba(139, 92, 246, 0.15)" }} />
      <div className="glow-orb" style={{ top: "35%", right: "10%", width: "400px", height: "400px", background: "rgba(6, 182, 212, 0.12)" }} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className="badge-neon">
            <span className={styles.pulseDot}></span> Scaling Tech Agencies
          </span>
          <h1 className={styles.title}>
            Architecting High-Performance <br />
            <span className="text-gradient-primary">Digital Masterpieces</span>
          </h1>
          <p className={styles.description}>
            We design, build, and deploy premium web applications, native mobile experiences, and advanced AI integrations. Engineered for speed, designed to inspire.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: "#ffffff" }}>
              Explore Our Work
              <svg viewBox="0 0 24 24" fill="none" stroke="#f472b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
            </div>
            <h3 className={styles.serviceCardTitle}>Agentic AI & LLM Integrations</h3>
            <p className={styles.serviceCardDesc}>
              Integrating customized agents, conversational pipelines, semantic search, and automation to supercharge product capabilities.
            </p>
            <Link href="/contact" className={styles.serviceLink}>
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className={styles.portfolioSection}>
        <div className="page-section">
          <div className={styles.portfolioHeader}>
            <div>
              <span className="badge-neon" style={{ marginBottom: "1rem" }}>Our Case Studies</span>
              <h2 className="section-title">Crafting digital products on purpose</h2>
            </div>
            <Link href="/contact" className="btn btn-secondary" style={{ backgroundColor: "#000000" }}>
              View All Projects
            </Link>
          </div>

          <div className="grid-container grid-2">
            {/* Project 1 */}
            <div className={`${styles.projectCard} glass-panel`}>
              <div className={styles.projectImageContainer}>
                <Image
                  className={styles.projectImage}
                  src="/devcms-upload-1782123134171-ChatGPT-Image-Jun-8--2026--11_43_24-PM-1.png"
                  alt="NovaCommerce Headless E-commerce Application"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <span className={styles.projectTag}>E-Commerce / Web App</span>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>NovaCommerce</h3>
                <p className={styles.projectDesc}>
                  A blazing-fast headless commerce engine supporting 12,000 active concurrent connections and full edge-rendering.
                </p>
                <div className={styles.projectTools}>
                  <span>Next.js</span>
                  <span>GraphQL</span>
                  <span>Tailwind</span>
                  <span>Stripe API</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className={`${styles.projectCard} glass-panel`}>
              <div className={styles.projectImageContainer}>
                <Image
                  className={styles.projectImage}
                  src="/devcms-upload-1782123134171-ChatGPT-Image-Jun-8--2026--11_43_24-PM-1.png"
                  alt="Pulse Health Patient Portal Mobile Application"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <span className={styles.projectTag}>Healthcare / Flutter</span>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>Pulse Health</h3>
                <p className={styles.projectDesc}>
                  Cross-platform patient metrics tracker featuring offline databases, biometrics authentication, and charts.
                </p>
                <div className={styles.projectTools}>
                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Firebase</span>
                  <span>SQLite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs: Why Vortex */}
      <section className="page-section">
        <div className={styles.tabsLayout}>
          <div className={styles.tabsHeader}>
            <span className="badge-neon" style={{ marginBottom: "1rem" }}>The Vortex Edge</span>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>How we ensure premium execution</h2>
            <p className={styles.tabsSub} style={{ color: "var(--muted-foreground)", marginBottom: "2rem", lineHeight: "1.6" }}>
              Creating software is more than writing code. It is an engineering discipline. Here is how we make sure your product stands out.
            </p>

            <div className={styles.tabButtons}>
              <button
                onClick={() => setActiveTab("approach")}
                className={`${styles.tabBtn} ${activeTab === "approach" ? styles.tabBtnActive : ""}`}
              >
                Our Agile Process
              </button>
              <button
                onClick={() => setActiveTab("tech")}
                className={`${styles.tabBtn} ${activeTab === "tech" ? styles.tabBtnActive : ""}`}
              >
                Technology Stack
              </button>
              <button
                onClick={() => setActiveTab("quality")}
                className={`${styles.tabBtn} ${activeTab === "quality" ? styles.tabBtnActive : ""}`}
              >
                Quality Guarantee
              </button>
            </div>
          </div>

          <div className={`${styles.tabContent} glass-panel`}>
            <span className={styles.tabHighlightText}>Focused Capabilities</span>
            <h3 className={styles.tabContentTitle}>{whyUsData[activeTab].title}</h3>
            <h4 className={styles.tabContentSub}>{whyUsData[activeTab].subtitle}</h4>
            <p className={styles.tabContentDesc}>{whyUsData[activeTab].description}</p>
            <ul className={styles.tabContentList}>
              {whyUsData[activeTab].points.map((pt, i) => (
                <li key={i}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Client Testimonial Slider */}
      <section className={styles.testimonialSection}>
        <div className="page-section">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="badge-neon" style={{ marginBottom: "1rem" }}>Client Voice</span>
            <h2 className="section-title">What Partners Say About Vortex</h2>
          </div>

          <div className={styles.testimonialSlider}>
            <button className={styles.sliderArrow} onClick={handlePrevTestimonial} aria-label="Previous testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <div className={`${styles.testimonialCard} glass-panel`}>
              <span className={styles.quoteIcon}>“</span>
              <p className={styles.testimonialQuote}>{testimonials[activeTestimonial].quote}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.avatarContainer}>
                  <Image
                    className={styles.avatar}
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].author}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h4 className={styles.authorName}>{testimonials[activeTestimonial].author}</h4>
                  <p className={styles.authorRole}>{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>

            <button className={styles.sliderArrow} onClick={handleNextTestimonial} aria-label="Next testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>

          <div className={styles.sliderDots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`${styles.sliderDot} ${activeTestimonial === i ? styles.sliderDotActive : ""}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Energetic CTA Banner */}
      <section className="page-section" style={{ paddingTop: "2rem" }}>
        <div className={`${styles.ctaBanner} glass-panel`}>
          <div className="glow-orb" style={{ top: "-20%", right: "-10%", width: "250px", height: "250px", background: "rgba(139, 92, 246, 0.25)" }} />
          <h2 className={styles.bannerTitle}>Ready to build something extraordinary?</h2>
          <p className={styles.bannerDesc}>
            Let's translate your product design or legacy application into a robust, high-performance solution.
          </p>
          <Link href="/contact" className="btn btn-cyan btn-lg" style={{ backgroundColor: "#000000", fontSize: "1.1rem", padding: "1rem 2rem", borderRadius: "var(--radius-sm)" }}>
            Initiate Project
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
