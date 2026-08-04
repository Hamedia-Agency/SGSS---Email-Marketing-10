"use client";

import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      setScrollPercent(scrolled);
      setIsVisible(winScroll > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const strokeDashoffset = 100 - scrollPercent;

  return (
    <div
      className={`${styles.backToTopContainer} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      role="button"
      aria-label="Back to top"
    >
      <svg className="absolute w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
        <path
          className="text-gray-200"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-[#fecf31] transition-all duration-150"
          strokeDasharray="100, 100"
          strokeDashoffset={strokeDashoffset}
          strokeWidth="3"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className={styles.innerCircle}>
        <div className={styles.iconContainer}>
          <ChevronUp size={20} />
        </div>
      </div>
    </div>
  );
}

export default BackToTop;
