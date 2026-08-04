"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveSimulator from "@/components/LiveSimulator";
import HowItWorks from "@/components/HowItWorks";
import BusinessBenefits from "@/components/BusinessBenefits";
import ComparisonTable from "@/components/ComparisonTable";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";
import AssessmentModal from "@/components/AssessmentModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#fecf31] selection:text-[#1d2c48]">
      {/* Header & Sticky Top Navigation */}
      <Header onOpenModal={handleOpenModal} />

      {/* Hero Section */}
      <Hero onOpenModal={handleOpenModal} />

      {/* Interactive Active Video Monitoring Live Simulator */}
      <LiveSimulator />

      {/* How Active Video Monitoring Works (3-step flow) */}
      <HowItWorks onOpenModal={handleOpenModal} />

      {/* How Secure Guard Helps Your Business (4 feature cards) */}
      <BusinessBenefits onOpenModal={handleOpenModal} />

      {/* Active Monitoring vs Passive Camera Comparison */}
      <ComparisonTable onOpenModal={handleOpenModal} />

      {/* Pre-Footer Call To Action Banner */}
      <PreFooterCTA onOpenModal={handleOpenModal} />

      {/* Footer */}
      <Footer />

      {/* Assessment Booking Popup Modal */}
      <AssessmentModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Circular Progress Scroll To Top Button */}
      <ScrollToTop />
    </main>
  );
}
