import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  const values = [
    {
      title: "Technical Mastery",
      desc: "We do not cut corners. We write type-safe, scale-tested, clean code designed for long-term product viability.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
      )
    },
    {
      title: "Radical Transparency",
      desc: "No black boxes. You get access to our sprint pipelines, direct Slack channels with engineers, and weekly working builds.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      )
    },
    {
      title: "Purpose-Driven Design",
      desc: "We build exactly what is required to hit business goals. We avoid useless animations and validate every UX choice.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"></path></svg>
      )
    },
    {
      title: "Client Synergy",
      desc: "We act as your product co-founders, advising on infrastructure scaling, user workflows, and long-term tech strategy.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "The Collective Forms",
      desc: "Vortex was established by three backend engineers who wanted to build high-performance software without the overhead of massive corporate bureaucracies."
    },
    {
      year: "2023",
      title: "Client-Centric Growth",
      desc: "Our team grew to 8 engineers. We completed 40+ project launches and our startups collectively raised over $15M in venture funding."
    },
    {
      year: "2025",
      title: "Global Systems Delivery",
      desc: "We scaled our core team, integrated AI workflows, and set up offices in key hubs. Over 100 successful deployments completed."
    }
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & Lead Architect",
      bio: "Ex-Stripe Infrastructure engineer. Obsessed with sub-millisecond database queries and edge computation layout systems.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Tanya Chen",
      role: "Head of Engineering",
      bio: "Frontend specialist and compiler lover. Tanya oversees our Next.js architectures and CI/CD automated test runs.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Marcus Vance",
      role: "Lead UI/UX Designer",
      bio: "Advocate for accessible design systems. Marcus bridges visual layouts and development specs with Figma variables.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Sofia Rossi",
      role: "Principal AI Scientist",
      bio: "PhD in Neural Networks. Sofia manages our vector database pipelines, semantic retrieval logic, and agent reasoning structures.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className={styles.container}>
      <div className="glow-orb" style={{ top: "15%", left: "5%", width: "400px", height: "400px", background: "rgba(139, 92, 246, 0.08)" }} />
      <div className="glow-orb" style={{ bottom: "20%", right: "5%", width: "350px", height: "350px", background: "rgba(6, 182, 212, 0.08)" }} />

      {/* About Header */}
      <section className="page-section" style={{ paddingBottom: "3rem" }}>
        <span className="badge-neon" style={{ marginBottom: "1rem" }}>Our Origins</span>
        <h1 className={`${styles.mainTitle} text-gradient-accent`}>Crafting Digital Frontiers</h1>
        <p className="section-desc" style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
          We are a dedicated group of software engineers, system architects, and design system advocates who build systems designed to perform and scale.
        </p>
      </section>

      {/* Mission and Vision Grid */}
      <section className="page-section" style={{ paddingTop: "0" }}>
        <div className={styles.missionGrid}>
          <div className={`${styles.missionCard} glass-panel`}>
            <span className={styles.cardIndicator} style={{ background: "var(--primary)" }} />
            <h3 className={styles.cardHeaderTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              To eliminate technical bloat and deliver robust engineering solutions. We believe software should be fast, transparent, and structured for modular scaling.
            </p>
          </div>
          <div className={`${styles.missionCard} glass-panel`}>
            <span className={styles.cardIndicator} style={{ background: "var(--secondary)" }} />
            <h3 className={styles.cardHeaderTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              To set the benchmark for modern software development agencies. We seek to build long-term systems where clients interact directly with creators, fostering radical collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="page-section">
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="badge-neon" style={{ marginBottom: "1rem" }}>Core Philosophy</span>
          <h2 className="section-title">Values that guide our commits</h2>
        </div>

        <div className="grid-container grid-2">
          {values.map((val, idx) => (
            <div key={idx} className="glass-panel-interactive" style={{ padding: "2.5rem 2rem", display: "flex", gap: "1.5rem" }}>
              <div className={styles.valueIconBox}>
                {val.icon}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <h3 className={styles.valueTitle}>{val.title}</h3>
                <p className={styles.valueDesc}>{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className={styles.journeySection}>
        <div className="page-section">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="badge-neon" style={{ marginBottom: "1rem" }}>Our Milestones</span>
            <h2 className="section-title">The Journey So Far</h2>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {milestones.map((ms, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineBadge}>
                  <span>{ms.year}</span>
                </div>
                <div className={`${styles.timelineContent} glass-panel`}>
                  <h3 className={styles.timelineTitle}>{ms.title}</h3>
                  <p className={styles.timelineDesc}>{ms.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Grid */}
      <section className="page-section">
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="badge-neon" style={{ marginBottom: "1rem" }}>The Team</span>
          <h2 className="section-title">Engineers & Creators</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Meet the primary specialists managing your applications. We write code directly and sync daily.
          </p>
        </div>

        <div className="grid-container grid-4">
          {team.map((member, idx) => (
            <div key={idx} className={`${styles.teamCard} glass-panel`}>
              <div className={styles.avatarWrapper}>
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                  className={styles.avatarImage}
                />
              </div>
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
                <p className={styles.teamBio}>{member.bio}</p>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink} aria-label={`${member.name} LinkedIn Profile`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  Connect
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
