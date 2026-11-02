import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHIYAM R — Creative Developer & Full Stack Engineer",
  description:
    "Creative developer and full stack engineer crafting immersive digital experiences, real-time architectures, and performant web applications.",
  keywords: [
    "Creative Developer",
    "Full Stack Engineer",
    "WebGL",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Shiyam R",
    "Portfolio",
    "Interactive UI",
  ],
  authors: [{ name: "Shiyam R" }],
  openGraph: {
    title: "SHIYAM R — Creative Developer & Full Stack Engineer",
    description:
      "Crafting immersive digital experiences, real-time systems, and high-performance web applications.",
    type: "website",
    locale: "en_US",
    siteName: "SHIYAM R — Creative Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIYAM R — Creative Developer & Full Stack Engineer",
    description:
      "Crafting immersive digital experiences, real-time systems, and high-performance web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#090a0f] text-[#f2f4f8] selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
