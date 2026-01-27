import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="space-y-4 pb-24">
      <h1 className="text-2xl font-semibold text-slate-900">Page not found</h1>
      <p className="text-sm text-slate-600">
        The page you’re looking for doesn’t exist.
      </p>
      <Link href="/" className="text-sm font-semibold text-slate-600">
        Back to home
      </Link>
    </main>
  );
}
