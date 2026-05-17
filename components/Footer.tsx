import Link from "next/link";

const nav = [
  { label: "יתרונות", href: "#features" },
  { label: "איך זה עובד", href: "#how-it-works" },
  { label: "לקוחות", href: "#testimonials" },
  { label: "צור קשר", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10 ring-1 ring-orange-500/30">
              <svg
                className="h-3.5 w-3.5 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </span>
            <span className="text-base font-semibold text-white">
              iLand<span className="text-orange-400">Guard</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
            <a
              href="https://iland-guard.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              iland-guard.com ↗
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-xs text-zinc-600">
          <p>
            © {new Date().getFullYear()} iLand Guard. כל הזכויות שמורות. ניטור אבטחה מבוסס בינה מלאכותית.
          </p>
        </div>
      </div>
    </footer>
  );
}
