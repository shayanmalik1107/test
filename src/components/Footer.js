"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
    setEmail("");
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Bio */}
          <div className={styles.bio}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>VORTEX</span>
              <span className={styles.logoDot}>.</span>
            </Link>
            <p className={styles.bioText}>
              Engineering high-performance web systems, custom mobile apps, and agentic AI integrations for next-generation enterprises.
            </p>
            <div className={styles.socials}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Github">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Dribbble">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.linksList}>
              <li><Link href="/about" className={styles.link}>Web App Development</Link></li>
              <li><Link href="/services" className={styles.link}>Mobile Applications</Link></li>
              <li><Link href="/services" className={styles.link}>UI/UX Design Systems</Link></li>
              <li><Link href="/services" className={styles.link}>AI & Machine Learning</Link></li>
              <li><Link href="/services" className={styles.link}>Cloud Infrastructure</Link></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Agency</h4>
            <ul className={styles.linksList}>
              <li><Link href="/about" className={styles.link}>About Our Team</Link></li>
              <li><Link href="/portfolio" className={styles.link}>Client Showcase</Link></li>
              <li><Link href="/contact" className={styles.link}>Get In Touch</Link></li>
              <li><Link href="/about#careers" className={styles.link}>Careers</Link></li>
              <li><Link href="/privacy" className={styles.link}>Privacy & Terms</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className={styles.newsletter}>
            <h4 className={styles.columnTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>Subscribe to get insights on design, tech, and custom software trends.</p>
            <form onSubmit={handleSubscribe} className={styles.form}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
                <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>
              {submitted && <span className={styles.successMsg}>Subscribed successfully! ✨</span>}
              {error && <span className={styles.errorMsg}>{error}</span>}
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Vortex Digital. All rights reserved. Created with purpose and premium code.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.link}>Security</a>
            <span className={styles.dot}>&middot;</span>
            <a href="#" className={styles.link}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
