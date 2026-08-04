"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Video, PhoneCall } from "lucide-react";

interface PreFooterCTAProps {
  onOpenModal: () => void;
}

export default function PreFooterCTA({ onOpenModal }: PreFooterCTAProps) {
  return (
    <section className="py-20 bg-[#1d2c48] relative overflow-hidden text-white border-t border-white/10">
      {/* Background Decorative Gradient Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fecf31]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="bg-[#263659] border border-[#fecf31]/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fecf31] text-[#1d2c48] text-xs font-black uppercase tracking-wider shadow-md">
            <Video className="w-4 h-4" />
            <span>Active Property Upgrade</span>
          </div>

          {/* Prompt Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Are Your Cameras Helping You Respond?
          </h2>

          {/* Prompt Body */}
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            If your cameras are only showing you what went wrong after the damage is done, it is time to upgrade to an active solution.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="btn-primary text-base font-extrabold py-4 px-8 rounded-xl flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
            >
              <span>See How Active Video Monitoring Works at Your Property</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:18005557477"
              className="btn-outline-light text-base font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 w-full sm:w-auto"
            >
              <PhoneCall className="w-4 h-4 text-[#fecf31]" />
              <span>1-800-SGSS-PRO</span>
            </a>
          </div>

          {/* Bottom Security Guarantee */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-gray-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#fecf31]" />
              Zero Hardware Lock-In
            </span>
            <span className="hidden sm:inline">•</span>
            <span>24-Hour Remote Setup</span>
            <span className="hidden sm:inline">•</span>
            <span>24/7 Human Oversight</span>
          </div>
        </div>
      </div>
    </section>
  );
}
