"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { LeadGenForm } from "@/components/LeadGenForm";
import { LeadGenModal } from "@/components/LeadGenModal";
import { ActiveMonitoringDemoWidget } from "@/components/ActiveMonitoringDemoWidget";
import { BackToTop } from "@/components/BackToTop";
import { 
  ShieldCheck, 
  CheckCircle, 
  Eye, 
  UserCheck, 
  ArrowRight,
  Shield,
  Zap,
  Siren,
  Building2,
  HeartHandshake
} from "lucide-react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("See How Active Video Monitoring Works at Your Property");

  const handleOpenConsultation = (title?: string) => {
    if (title) setModalTitle(title);
    else setModalTitle("See How Active Video Monitoring Works at Your Property");
    setModalOpen(true);
  };

  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="/active_video_hero.png"
            alt="Secure Guard Active Video Monitoring"
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
              The Secure Guard Advantage
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Secure Guard’s Active Video Monitoring turns your passive security cameras into a{" "}
              <span className={styles.heroTitleAccent}>
                proactive, real-time defense system.
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              Most property security systems share a common flaw: they are reactive. They record footage after a theft, vandalism, or safety incident has already occurred, leaving you to deal with the damage after the fact. Secure Guard Security Services (SGSS) changes that. We move security from "recording history" to "active intervention."
            </p>
            <div className={styles.heroCtas}>
              <button 
                onClick={() => handleOpenConsultation("See How Active Video Monitoring Works at Your Property")}
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                <Shield className="w-5 h-5 inline mr-2" />
                See How Active Video Monitoring Works at Your Property
              </button>
              <a
                href="#how-it-works"
                className={styles.btnSecondary}
              >
                Explore How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: HOW ACTIVE VIDEO MONITORING WORKS ===== */}
      <section className={styles.secureTrackSection} id="how-it-works">
        <div className="container">
          <div className={styles.sectionHeaderLight}>
            <span className={styles.sectionTagLight}>Proactive Defense</span>
            <h2 className={styles.sectionTitleLight}>
              How Active Video Monitoring Works
            </h2>
            <p className={styles.sectionSubtextLight}>
              We add a live, intelligent layer behind your existing camera infrastructure. Our system doesn't just store data; it provides real-time awareness.
            </p>
          </div>

          <div className={styles.pillarList}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <Zap size={22} className={styles.pillarIcon} />
                <span>Instant Detection</span>
              </div>
              <p className={styles.pillarDesc}>
                Our technology flags suspicious activity the moment it occurs—loitering, unauthorized access, or after-hours movement—ensuring no event goes unnoticed.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <ShieldCheck size={22} className={styles.pillarIcon} />
                <span>Professional Verification</span>
              </div>
              <p className={styles.pillarDesc}>
                Our trained personnel review the live feed immediately upon detection. We filter out false alarms (like animals or environmental movement) to focus exclusively on genuine security threats.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <Siren size={22} className={styles.pillarIcon} />
                <span>Rapid, Coordinated Response</span>
              </div>
              <p className={styles.pillarDesc}>
                Once a threat is verified, we take immediate action. This includes notifying your designated contacts, dispatching mobile patrol units, or coordinating with local emergency services to stop incidents while they are still in progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: LIVE VIDEO MONITORING DEMO WIDGET ===== */}
      <section className={styles.featuresSection} id="live-demo">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Live Technology Preview</span>
            <h2 className={styles.sectionTitle}>
              Real-Time Video Surveillance Console
            </h2>
            <div className={styles.titleDivider} />
          </div>

          <ActiveMonitoringDemoWidget />
        </div>
      </section>

      {/* ===== SECTION 3: HOW SECURE GUARD HELPS YOUR BUSINESS ===== */}
      <section className={styles.howHelpsSection} id="how-it-helps">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Site Safety Partner</span>
            <h2 className={styles.sectionTitle}>
              How Secure Guard Helps Your Business
            </h2>
            <div className={styles.titleDivider} />
            <p className={styles.sectionSubtext}>
              By partnering with SGSS, you move beyond simple recording and gain a comprehensive security partner dedicated to site safety.
            </p>
          </div>

          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamIconBadge}>
                <ShieldCheck size={24} />
              </div>
              <h3 className={styles.teamTitle}>Minimized Liability</h3>
              <p className={styles.teamDesc}>
                By identifying and acting on threats early, we help reduce the likelihood of property damage and theft, significantly lowering your risk exposure.
              </p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamIconBadge}>
                <Building2 size={24} />
              </div>
              <h3 className={styles.teamTitle}>Proactive Site Management</h3>
              <p className={styles.teamDesc}>
                We don’t just watch; we help manage your property. From verifying access points to identifying potential safety hazards in parking lots or back entrances, we provide the visibility you need to keep your site secure.
              </p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamIconBadge}>
                <UserCheck size={24} />
              </div>
              <h3 className={styles.teamTitle}>Expert Oversight</h3>
              <p className={styles.teamDesc}>
                You aren’t just getting software; you get a team. Our experts understand the unique security requirements of retail, residential, and commercial properties, ensuring your security measures are tailored to your specific operational needs.
              </p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamIconBadge}>
                <HeartHandshake size={24} />
              </div>
              <h3 className={styles.teamTitle}>Peace of Mind</h3>
              <p className={styles.teamDesc}>
                You no longer need to rely on 3:00 AM manual reviews. With SGSS, you have the confidence that trained professionals are monitoring your site, allowing you to focus on your core business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CONVERSION & LEAD FORM ===== */}
      <section className={styles.transparencySection} id="lead-form">
        <div className="container">
          <div className={styles.transparencyGrid}>
            <div className={styles.transparencyColLeft}>
              <span className={styles.sectionTag}>Active Solution Upgrade</span>
              <h2 className={styles.sectionTitleLeft}>
                Are Your Cameras Helping You Respond?
              </h2>
              <p className={styles.bodyTextLeft}>
                If your cameras are only showing you what went wrong after the damage is done, it is time to upgrade to an active solution.
              </p>
              <div>
                <button
                  onClick={() => handleOpenConsultation("See How Active Video Monitoring Works at Your Property")}
                  className={styles.btnGoldAction}
                >
                  <ShieldCheck size={20} />
                  See How Active Video Monitoring Works at Your Property
                </button>
              </div>
            </div>

            <div>
              <LeadGenForm
                title="See How Active Video Monitoring Works at Your Property"
                subtitle="Fill out your property details below. An SGSS active security specialist will contact you with a customized setup analysis."
                buttonText="See How Active Video Monitoring Works at Your Property"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA onOpenConsultation={() => handleOpenConsultation("See How Active Video Monitoring Works at Your Property")} />

      {/* ===== FOOTER ===== */}
      <Footer />

      {/* ===== LEAD GENERATION MODAL ===== */}
      <LeadGenModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />

      {/* ===== BACK TO TOP BUTTON ===== */}
      <BackToTop />
    </main>
  );
}
