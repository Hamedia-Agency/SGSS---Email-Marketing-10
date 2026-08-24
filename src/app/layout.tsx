import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Secure Guard Security Services | Active Video Monitoring",
  description:
    "Upgrade your security cameras to a proactive defense system. SGSS offers real-time AI threat detection, live human verification, and rapid response.",
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
