import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarDock from "@/components/SidebarDock";
import MobileDock from "@/components/MobileDock";
import SkipToContent from "@/components/SkipToContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Iglesias | Instructional Design Portfolio",
  description:
    "Instructional design portfolio featuring accessible, high-impact learning solutions.",
  metadataBase: new URL("https://victormiglesias.com"),
  openGraph: {
    title: "Victor Iglesias | Instructional Design Portfolio",
    description:
      "Instructional design portfolio featuring accessible, high-impact learning solutions.",
    url: "https://victormiglesias.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Victor Iglesias — Instructional Design Consultant",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <SkipToContent />
        <SidebarDock />
        <MobileDock />
        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.25),_transparent_60%)]" />
          <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-32 pt-8 md:pl-56">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
