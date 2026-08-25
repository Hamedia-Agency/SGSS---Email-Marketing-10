import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import ApplicationsCarousel from "@/components/ApplicationsCarousel";
import IntegrationCarousel from "@/components/IntegrationCarousel";
import ParticleMesh from "@/components/ParticleMesh";
import FloatingShapes from "@/components/FloatingShapes";
import FAQAccordion from "@/components/FAQAccordion";
import { CoverageSection } from "@/components/CoverageSection";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ===== SECTION 1: HERO ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/em10-1.webp"
            alt="Active Video Monitoring"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              Comprehensive Protection
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Active Video <span className={styles.heroTitleAccent}>Monitoring</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard connects existing security camera infrastructure to live video monitoring operations. When automated systems detect after-hours motion, trained operators inspect the live feed, verify site conditions, and initiate immediate on-site response protocols.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="#prefooter-cta" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                Explore Video Monitoring for Your Property
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== SECTION 2: Passive Recording to Live Response ===== */}
      <section className={styles.section} id="vulnerability">
        <div className="container">
          <div className={styles.addonGrid}>
            <div className={styles.addonImageCol}>
              <Image 
                src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/em10-2.webp" 
                alt="Live Threat Detection" 
                width={500} 
                height={400} 
                className={styles.addonImage} 
                style={{ borderRadius: "12px", objectFit: "cover" }}
              />
            </div>
            <div className={styles.addonContent}>
              <div className={styles.sectionHeader} style={{ margin: "0", textAlign: "left" }}>
                <span className={styles.sectionTag}>Live Threat Response</span>
                <h2 className={styles.sectionTitle} style={{ marginBottom: "16px" }}>
                  Passive Recording to Live Response
                </h2>
              </div>
              <p className={styles.bodyText}>
                Secure Guard integrates active video monitoring into existing camera setups, converting standalone recording systems into a live threat detection and response network.
              </p>
              <p className={styles.bodyText}>
                The moment suspicious motion is detected, trained monitoring personnel immediately evaluate the live feed to distinguish routine site activity from genuine security threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: How Active Video Monitoring Works ===== */}
      <section className={styles.section} id="setup" style={{ background: "var(--color-bg-alt, #f7f9fc)" }}>
        <div className="container">
          <div className={styles.setupUnifiedContainer}>
            {/* Left Pane */}
            <div className={styles.setupLeftPane}>
              <span className={styles.setupLeftTag}>Active Operational Response</span>
              <h2 className={styles.setupLeftTitle}>
                How Active Video Monitoring Works
              </h2>
              <p className={styles.setupLeftDesc}>
                Active video monitoring transforms automated camera alerts into an immediate, verified human response. Instead of storing footage of an ongoing incident or triggering false alarms, live feeds are instantly routed to trained operators who evaluate the threat and execute your property's specific escalation procedures. This closed-loop process moves your security from passive detection to active operational response across four key steps:
              </p>
            </div>
            
            {/* Right Pane (Grid) */}
            <div className={styles.setupRightGrid}>
              <div className={`${styles.setupGridItem} ${styles.setupItem1}`}>
                <div className={styles.setupItemHeader}>
                  <span className={styles.setupItemIcon}>01</span>
                  <h3 className={styles.setupItemTitle}>Activity Detection</h3>
                </div>
                <p className={styles.setupItemDesc}>
                  Targeted camera zones flag motion during high-vulnerability hours. Critical access points instantly trigger alerts, capturing potential risks early without manual screen monitoring.
                </p>
              </div>

              <div className={`${styles.setupGridItem} ${styles.setupItem2}`}>
                <div className={styles.setupItemHeader}>
                  <span className={styles.setupItemIcon}>02</span>
                  <h3 className={styles.setupItemTitle}>Live Feed Review</h3>
                </div>
                <p className={styles.setupItemDesc}>
                  Operators perform an immediate live video inspection to determine the true nature of the alert, filtering out harmless environmental triggers and focusing on genuine threats.
                </p>
              </div>

              <div className={`${styles.setupGridItem} ${styles.setupItem3}`}>
                <div className={styles.setupItemHeader}>
                  <span className={styles.setupItemIcon}>03</span>
                  <h3 className={styles.setupItemTitle}>Suspicious Activity Verification</h3>
                </div>
                <p className={styles.setupItemDesc}>
                  The monitoring team conducts a visual assessment of location, individuals, and actions, creating a verified intelligence profile before initiating any escalation.
                </p>
              </div>

              <div className={`${styles.setupGridItem} ${styles.setupItem4}`}>
                <div className={styles.setupItemHeader}>
                  <span className={styles.setupItemIcon}>04</span>
                  <h3 className={styles.setupItemTitle}>Response Protocol</h3>
                </div>
                <p className={styles.setupItemDesc}>
                  Operators execute your designated response, which can include two-way voice-down warnings, notifying managers, dispatching field supervisors, or contacting law enforcement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Industry Applications (Carousel) ===== */}
      <section className={styles.featuresSection} id="applications">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag} style={{ color: "#b89000", background: "rgba(254, 207, 49, 0.13)", borderColor: "rgba(254, 207, 49, 0.35)" }}>Customized Coverage</span>
            <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>
              Industry Applications
            </h2>
            <p className={styles.bodyTextCenteredLight} style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              Secure Guard customizes active video monitoring to align with the specific operational layouts, high-value assets, and risk profiles of diverse commercial environments, delivering real-time threat response where traditional security falls short.
            </p>
          </div>

          <ApplicationsCarousel />
        </div>
      </section>

      {/* ===== SECTION 5: Why Live Verification Matters (Escalation box) ===== */}
      <section className={styles.contactSection} id="verification">
        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.contactContentPanel}>
            <div className={styles.sectionHeader} style={{ margin: "0 0 24px 0", textAlign: "left" }}>
              <span className={styles.sectionTag} style={{ color: "#b89000", background: "rgba(254, 207, 49, 0.13)", borderColor: "rgba(254, 207, 49, 0.35)" }}>Verified Proof</span>
              <h2 className={styles.sectionTitle} style={{ marginBottom: "16px", color: "var(--color-white)" }}>
                Why Live Verification Matters
              </h2>
            </div>
            <p className={styles.bodyText} style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              Unverified alerts lead to alarm fatigue, wasted operational costs, and delayed emergency response. Live human verification ensures your team only acts on genuine threats, keeping property managers focused on real issues rather than constant false notifications.
            </p>
            <p className={styles.bodyText} style={{ color: "rgba(255, 255, 255, 0.9)", marginBottom: 0 }}>
              More importantly, verification connects video technology directly to physical security on the ground. While cameras provide broad visual coverage from a distance, mobile patrols and on-site guards deliver the physical presence needed to resolve issues. Pairing live remote oversight with field response creates a complete defense—closing blind spots across your facility without unnecessarily inflating post-hour costs.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: Integration & Coverage (Carousel section) ===== */}
      <section className={styles.section} id="integration">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Seamless Hardware Use</span>
            <h2 className={styles.sectionTitle}>
              Integration & Coverage
            </h2>
          </div>
          <IntegrationCarousel />
        </div>
      </section>

      {/* ===== SECTION 7: Our Security Standard ===== */}
      <section className={styles.standardSection} id="standard">
        <div className={styles.standardPatternLeft}>
          <FloatingShapes shapeCount={18} />
        </div>
        <div className={styles.standardPatternRight}>
          <FloatingShapes shapeCount={18} />
        </div>
        <div className="container">
          <div className={styles.standardHeader} style={{ marginBottom: 0 }}>
            <span className={styles.sectionTag}>Connected Security</span>
            <h2 className={styles.sectionTitle}>The Secure Guard Difference</h2>
            <p className={styles.standardSubtitle}>
              Cameras and automated alerts can flag activity, but they cannot assess intent or evaluate real-world risk. Secure Guard bridges this gap by pairing video technology with trained human judgment and integrated field operations. By combining remote live monitoring with dispatch support, mobile patrols, on-site officers, and detailed reporting, we deliver a fully connected security model.
            </p>
          </div>
        </div>
      </section>

      {/* ===== COVERAGE SECTION ===== */}
      <CoverageSection />

      {/* ===== SECTION 8: FAQ ===== */}
      <section className={styles.faqSection} id="faq">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>FAQ</span>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA />

      <Footer />
      <BackToTop />
    </main>
  );
}
