"use client";

import React from "react";
import { Shield, PhoneCall, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#131e33] text-gray-400 pt-16 pb-12 border-t border-white/10">
      <div className="container-custom">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#fecf31] flex items-center justify-center text-[#1d2c48] font-bold shadow-md">
                <Shield className="w-6 h-6 fill-[#1d2c48]/20 stroke-[#1d2c48] stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg tracking-tight flex items-center gap-1.5 leading-none">
                  SECURE GUARD
                </span>
                <span className="text-[#fecf31] text-xs font-semibold tracking-wider uppercase mt-1">
                  Security Services (SGSS)
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Moving property security from reactive history recording to active, real-time intervention. 24/7 human intelligence backed by advanced AI threat surveillance.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#fecf31]" />
                <span>24/7 Command Center: <strong>1-800-SGSS-PRO</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#fecf31]" />
                <span>Active Monitoring Inquiries: <strong>active@sgss-security.com</strong></span>
              </div>
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div className="space-y-3 text-sm">
            <h4 className="text-white font-bold text-base tracking-wide">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#live-demo" className="hover:text-[#fecf31] transition-colors">Active Video Monitoring</a></li>
              <li><a href="#how-it-works" className="hover:text-[#fecf31] transition-colors">AI Threat Detection</a></li>
              <li><a href="#how-it-works" className="hover:text-[#fecf31] transition-colors">Live Audio Intervention</a></li>
              <li><a href="#how-it-works" className="hover:text-[#fecf31] transition-colors">Mobile Patrol Dispatch</a></li>
              <li><a href="#comparison" className="hover:text-[#fecf31] transition-colors">Camera Compatibility</a></li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div className="space-y-3 text-sm">
            <h4 className="text-white font-bold text-base tracking-wide">Industries</h4>
            <ul className="space-y-2">
              <li><a href="#business-benefits" className="hover:text-[#fecf31] transition-colors">Commercial Real Estate</a></li>
              <li><a href="#business-benefits" className="hover:text-[#fecf31] transition-colors">Retail Malls & Outlets</a></li>
              <li><a href="#business-benefits" className="hover:text-[#fecf31] transition-colors">Warehouses & Logistics</a></li>
              <li><a href="#business-benefits" className="hover:text-[#fecf31] transition-colors">HOA & Residential Parks</a></li>
              <li><a href="#business-benefits" className="hover:text-[#fecf31] transition-colors">Construction Sites</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div className="space-y-3 text-sm">
            <h4 className="text-white font-bold text-base tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#fecf31] transition-colors">About SGSS</a></li>
              <li><a href="#" className="hover:text-[#fecf31] transition-colors">Command Center Operations</a></li>
              <li><a href="#" className="hover:text-[#fecf31] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#fecf31] transition-colors">Client Portal</a></li>
              <li><a href="#" className="hover:text-[#fecf31] transition-colors">Contact Security Team</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-300 gap-4">
          <div>
            © {new Date().getFullYear()} Secure Guard Security Services (SGSS). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security Audit SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
