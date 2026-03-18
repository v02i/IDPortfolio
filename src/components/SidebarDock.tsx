"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Process", href: "/#process", sectionId: "process" },
  { label: "Impact", href: "/#impact", sectionId: "impact" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

function Icon({ label }: { label: string }) {
  switch (label) {
    case "Home":
      return (
        <path
          d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8z"
          fill="currentColor"
        />
      );
    case "Projects":
      return (
        <path
          d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"
          fill="currentColor"
        />
      );
    case "Process":
      return (
        <path
          d="M6 4h12v4H6V4zm0 6h12v4H6v-4zm0 6h12v4H6v-4z"
          fill="currentColor"
        />
      );
    case "Impact":
      return (
        <path
          d="M4 18h4V6H4v12zm6 0h4V10h-4v8zm6 0h4V4h-4v14z"
          fill="currentColor"
        />
      );
    case "About":
      return (
        <path
          d="M12 12a4 4 0 1 0-0.001-8A4 4 0 0 0 12 12zm-6 8a6 6 0 0 1 12 0v1H6v-1z"
          fill="currentColor"
        />
      );
    case "Contact":
      return (
        <path
          d="M4 6h16v12H4V6zm8 6 8-5H4l8 5z"
          fill="currentColor"
        />
      );
    default:
      return null;
  }
}

export default function SidebarDock() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.sectionId);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed left-2 top-6 z-40 hidden h-[calc(100%-3rem)] w-44 flex-col justify-between rounded-[28px] border border-slate-200 bg-white/80 px-4 py-4 shadow-lg backdrop-blur md:flex">
      <div className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex flex-col items-center gap-2 rounded-2xl px-2 py-2 text-slate-900"
          aria-label="Go to home"
        >
          <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-white bg-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.18)] ring-2 ring-slate-200">
            <Image
              src="/artifacts/victor.jpg"
              alt="Victor Iglesias"
              width={160}
              height={160}
              quality={85}
              sizes="80px"
              priority
              className="h-full w-full object-cover"
            />
          </span>
          <span className="text-sm font-semibold tracking-tight">Victor Iglesias</span>
          <span className="text-[11px] font-medium text-slate-500">Instructional Design Consultant</span>
        </Link>
        <div className="h-px w-full bg-slate-200" />
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              aria-current={activeSection === item.sectionId ? "true" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400",
                activeSection === item.sectionId
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600"
              )}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <Icon label={item.label} />
              </svg>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
