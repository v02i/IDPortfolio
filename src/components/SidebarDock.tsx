import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Impact", href: "/#impact" },
  { label: "Contact", href: "/#contact" },
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
    case "Services":
      return (
        <path
          d="M4 7h16v2H4V7zm0 4h16v2H4v-2zm0 4h10v2H4v-2z"
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
  return (
    <aside className="fixed left-2 top-6 z-40 hidden h-[calc(100%-3rem)] w-44 flex-col justify-between rounded-[28px] border border-slate-200 bg-white/80 px-4 py-4 shadow-lg backdrop-blur md:flex">
      <div className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex flex-col items-center gap-2 rounded-2xl px-2 py-2 text-slate-900"
          aria-label="Go to home"
        >
          <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white bg-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.18)] ring-2 ring-slate-200">
            <Image
              src="/artifacts/victor.jpg"
              alt="Victor Iglesias"
              width={64}
              height={64}
              quality={75}
              sizes="64px"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="text-sm font-semibold tracking-tight">Victor Iglesias</span>
          <span className="text-[11px] font-medium text-slate-500">Instructional Designer</span>
        </Link>
        <div className="h-px w-full bg-slate-200" />
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
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
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <span className="h-8 w-8 rounded-full border border-slate-200" aria-hidden="true" />
        <span>Portfolio</span>
      </div>
    </aside>
  );
}
