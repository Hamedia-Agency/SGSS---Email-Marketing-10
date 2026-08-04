"use client";

import React from "react";
import styles from "./PreFooterCTA.module.css";
import { ShieldCheck, Calendar } from "lucide-react";

interface PreFooterCTAProps {
  onOpenConsultation?: () => void;
}

export function PreFooterCTA({ onOpenConsultation }: PreFooterCTAProps) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.badge}>
          <ShieldCheck size={16} />
          Active Security Upgrade
        </div>
        <h2 className={styles.heading}>
          Are Your Cameras Helping You Respond?
        </h2>
        <div className={styles.subtext}>
          <p>
            If your cameras are only showing you what went wrong after the damage is done, it is time to upgrade to an active solution.
          </p>
        </div>
        <div className={styles.buttons}>
          <button
            onClick={onOpenConsultation}
            className={styles.btnPrimary}
          >
            <Calendar size={18} />
            See How Active Video Monitoring Works at Your Property
          </button>
          <a
            href="tel:1-888-908-7818"
            className={styles.btnSecondary}
          >
            Speak to a Specialist (1-888-908-7818)
          </a>
        </div>
      </div>
    </section>
  );
}

export default PreFooterCTA;
