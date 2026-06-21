"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./contact.module.css";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "web",
    budget: "medium",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Pre-populate service selection if URL parameter is present
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && ["web", "mobile", "ai", "cloud", "uiux"].includes(serviceParam)) {
      setFormData((prev) => ({ ...prev, projectType: serviceParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectProjectType = (type) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const handleSelectBudget = (budget) => {
    setFormData((prev) => ({ ...prev, budget }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a little bit about your project.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message must be at least 15 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        projectType: "web",
        budget: "medium",
        message: ""
      });
    }, 1800);
  };

  return (
    <div className={styles.grid}>
      {/* Contact Form Glass Panel */}
      <div className={`${styles.formCard} glass-panel`}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.formTitle}>Initiate Project Discovery</h2>
          <p className={styles.formSubtitle}>Fill out the parameters below to launch a sprint discussion.</p>

          {/* Name Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. David Hasselhoff"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. david@vortex.dev"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          {/* Project Type Grid */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Project Scope Category</label>
            <div className={styles.optionsGrid}>
              {[
                { id: "web", label: "Web Architecture" },
                { id: "mobile", label: "Mobile Product" },
                { id: "ai", label: "AI Integration" },
                { id: "cloud", label: "Cloud & Devops" },
                { id: "uiux", label: "UIUX & Systems" }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectProjectType(opt.id)}
                  className={`${styles.optionBtn} ${
                    formData.projectType === opt.id ? styles.optionActive : ""
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Range selector */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Project Budget Range</label>
            <div className={styles.optionsGrid}>
              {[
                { id: "low", label: "< $15k" },
                { id: "medium", label: "$15k - $40k" },
                { id: "high", label: "$40k - $90k" },
                { id: "enterprise", label: "$90k+" }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectBudget(opt.id)}
                  className={`${styles.optionBtn} ${
                    formData.budget === opt.id ? styles.optionActive : ""
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Description Message */}
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Project Objectives</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us what you are building, target timeline, core goals, and tech stack details..."
              value={formData.message}
              onChange={handleChange}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
            />
            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
            style={{ width: "100%", height: "50px", marginTop: "1rem" }}
          >
            {isSubmitting ? (
              <div className={styles.spinnerWrapper}>
                <span className={styles.spinner}></span>
                Encrypting & Submitting...
              </div>
            ) : (
              <>
                Initiate Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Info Column and Mock Map */}
      <div className={styles.infoCol}>
        <div className={`${styles.infoCard} glass-panel`}>
          <h3 className={styles.infoTitle}>Vortex Coordinates</h3>
          <p className={styles.infoDesc}>Connect directly with our engineering team or visit our developer hubs.</p>

          <div className={styles.coords}>
            <div className={styles.coordItem}>
              <div className={styles.coordIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <span className={styles.coordLabel}>Write to us</span>
                <a href="mailto:engineering@vortex.dev" className={styles.coordValue}>engineering@vortex.dev</a>
              </div>
            </div>

            <div className={styles.coordItem}>
              <div className={styles.coordIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <span className={styles.coordLabel}>Direct Line</span>
                <a href="tel:+15550192831" className={styles.coordValue}>+1 (555) 019-2831</a>
              </div>
            </div>

            <div className={styles.coordItem}>
              <div className={styles.coordIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <span className={styles.coordLabel}>Global Offices</span>
                <p className={styles.coordValue}>Silicon Valley Hub / London Canary Wharf</p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Interactive Mock Map Panel */}
        <div className={`${styles.mapCard} glass-panel`}>
          <div className={styles.mapGridLineH1} />
          <div className={styles.mapGridLineH2} />
          <div className={styles.mapGridLineV1} />
          <div className={styles.mapGridLineV2} />

          <div className={styles.mapPath} />
          <div className={styles.mapPinContainer}>
            <div className={styles.mapPinPulse} />
            <div className={styles.mapPin} />
            <div className={styles.mapTooltip}>
              <h4>Vortex Developer HQ</h4>
              <p>Silicon Valley, CA</p>
            </div>
          </div>
          <span className={styles.mapLegend}>Interactive Network Vector</span>
        </div>
      </div>

      {/* Success Dialog Modal Overlay */}
      {showSuccess && (
        <div className={styles.successOverlay} onClick={() => setShowSuccess(false)}>
          <div className={`${styles.successModal} glass-panel`} onClick={(e) => e.stopPropagation()}>
            <div className={styles.successIconWrapper}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className={styles.successTitle}>Sprint Pipeline Initiated!</h3>
            <p className={styles.successDesc}>
              We have securely encrypted your inquiry and piped it to our core architects. An engineer will review your product parameters and reach out within 12 hours.
            </p>
            <button className="btn btn-primary" onClick={() => setShowSuccess(false)} style={{ minWidth: "120px" }}>
              Acknowledge
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className="glow-orb" style={{ top: "15%", left: "5%", width: "400px", height: "400px", background: "rgba(139, 92, 246, 0.08)" }} />
      <div className="glow-orb" style={{ bottom: "25%", right: "5%", width: "350px", height: "350px", background: "rgba(6, 182, 212, 0.08)" }} />

      {/* Contact Header */}
      <section className="page-section" style={{ paddingBottom: "2rem" }}>
        <span className="badge-neon" style={{ marginBottom: "1rem" }}>Inquire Now</span>
        <h1 className={`${styles.mainTitle} text-gradient-primary`}>Let's Construct Your Vision</h1>
        <p className="section-desc" style={{ fontSize: "1.2rem", maxWidth: "750px" }}>
          Tell us about your project objectives. Our core engineers will review your inputs and align on architectural plans.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="page-section" style={{ paddingTop: "0" }}>
        <Suspense fallback={
          <div className="glass-panel" style={{ padding: "3rem", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px" }}>
            <span className={styles.spinner} style={{ marginRight: "1rem" }}></span>
            <span>Loading discovery console...</span>
          </div>
        }>
          <ContactFormContent />
        </Suspense>
      </section>
    </div>
  );
}
