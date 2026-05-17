"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/15 ring-1 ring-orange-500/40">
              <svg
                className="h-4 w-4 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              iLand<span className="text-orange-400">Guard</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <Link href="#features" className="hover:text-white transition-colors">יתרונות</Link>
            <Link href="#how-it-works" className="hover:text-white transition-colors">איך זה עובד</Link>
            <Link href="#testimonials" className="hover:text-white transition-colors">לקוחות</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400"
            >
              קבל הגנה עכשיו
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="תפריט"
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-black px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-4 text-sm text-zinc-400">
            <Link href="#features" className="hover:text-white" onClick={() => setOpen(false)}>יתרונות</Link>
            <Link href="#how-it-works" className="hover:text-white" onClick={() => setOpen(false)}>איך זה עובד</Link>
            <Link href="#testimonials" className="hover:text-white" onClick={() => setOpen(false)}>לקוחות</Link>
            <Link
              href="#contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              קבל הגנה עכשיו
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
