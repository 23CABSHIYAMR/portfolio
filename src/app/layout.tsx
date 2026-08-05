import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHIYAM R — Software Engineer",
  description: "Personal portfolio of Shiyam R, Software Engineer specializing in React.js, Next.js, Node.js, Express.js, REST APIs, and scalable web applications.",
  keywords: ["Software Engineer", "Frontend Developer", "Full Stack Developer", "Next.js", "React.js", "Node.js", "Express.js", "REST API", "Shiyam R", "Portfolio"],
  authors: [{ name: "Shiyam R" }],
  openGraph: {
    title: "SHIYAM R — Software Engineer",
    description: "Building performant, scalable and intuitive web applications.",
    type: "website",
    locale: "en_US",
    siteName: "SHIYAM R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIYAM R — Software Engineer",
    description: "Building performant, scalable and intuitive web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth font-sans antialiased`}
    >
      <body className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
