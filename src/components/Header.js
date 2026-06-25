"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Helper to normalize path for comparison
  const normalizePath = (p) => {
    if (!p) return "/";
    if (p.startsWith("http") || p.startsWith("#")) return p;
    let normalized = p.startsWith("/") ? p : `/${p}`;
    return normalized === "/" ? "/" : normalized.replace(/\/$/, "");
  };

  const activePath = normalizePath(pathname);
  
  // Find all links that match the current path
  const matchingLinks = navLinks.filter(link => normalizePath(link.href) === activePath);
  
  let activeLinkName = null;
  if (matchingLinks.length === 1) {
    activeLinkName = matchingLinks[0].name;
  } else if (matchingLinks.length > 1) {
    // If multiple links point to the same URL, prefer the one whose name matches the path
    const pathKey = activePath.split("/").pop().toLowerCase();
    const exactMatch = matchingLinks.find(link => link.name.toLowerCase() === pathKey);
    activeLinkName = exactMatch ? exactMatch.name : matchingLinks[0].name;
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>VORTEX</span>
          <span className={styles.logoDot}>.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isActive = activeLinkName === link.name;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.activeLink : ""
                    }`}
                  >
                    {link.name}
                    {isActive && <span className={styles.activeIndicator} />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "0.6rem 1.2rem", fontSize: "0.9rem" }}>
            Get a Quote
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ""}`}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => {
                const isActive = activeLinkName === link.name;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`${styles.mobileNavLink} ${
                        isActive ? styles.mobileActiveLink : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li style={{ marginTop: "2rem" }}>
                <Link href="/contact" className="btn btn-primary" style={{ width: "100%", textAlign: "center" }}>
                  Get a Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
