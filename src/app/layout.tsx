import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Secure Guard Security Services | Active Video Monitoring",
  description:
    "Turn your passive security cameras into a proactive, real-time defense system. Instant AI threat detection, professional human verification, and rapid emergency dispatch by SGSS.",
  keywords: [
    "SGSS",
    "Active Video Monitoring",
    "Security Services",
    "Proactive Defense",
    "Real-time Security",
    "Commercial Property Security",
    "CCTV Monitoring",
    "Threat Detection"
  ],
  authors: [{ name: "Secure Guard Security Services" }],
  openGraph: {
    title: "Secure Guard's Active Video Monitoring | Proactive Defense System",
    description:
      "Stop theft and property damage before it happens. Learn how SGSS Active Video Monitoring replaces reactive recording with real-time intervention.",
    type: "website",
    siteName: "Secure Guard Security Services (SGSS)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased text-[#2a2829] bg-white selection:bg-[#fecf31] selection:text-[#1d2c48]">
        {children}
      </body>
    </html>
  );
}
