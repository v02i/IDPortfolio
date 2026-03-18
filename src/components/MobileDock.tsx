import Link from "next/link";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/#projects" },
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

export default function MobileDock() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-40 flex w-[min(94vw,520px)] -translate-x-1/2 items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 shadow-lg backdrop-blur md:hidden">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className="flex flex-col items-center justify-center gap-1 rounded-xl px-3 py-2 text-[11px] font-semibold text-slate-600 transition hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
            <Icon label={item.label} />
          </svg>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
