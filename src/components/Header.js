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
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

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
              const isActive = pathname === link.href;
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
                const isActive = pathname === link.href;
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
