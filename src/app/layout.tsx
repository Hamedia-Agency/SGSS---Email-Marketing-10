import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Secure Guard Security Services | Active Video Monitoring",
  description:
    "Turn your passive security cameras into a proactive, real-time defense system. Real-time AI threat detection, professional human verification, and rapid response by SGSS.",
  keywords: [
    "SGSS",
    "Active Video Monitoring",
    "Proactive Security",
    "CCTV Threat Detection",
    "Real-Time Security Services"
  ],
  authors: [{ name: "Secure Guard Security Services" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
