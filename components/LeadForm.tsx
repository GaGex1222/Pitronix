"use client";

import { useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-zinc-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/7 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/8 bg-black p-8 sm:p-12">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 text-center py-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 ring-1 ring-orange-500/30">
                <svg className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">ניצור איתך קשר בקרוב</h3>
              <p className="text-zinc-400 max-w-sm">
                מומחה אבטחה יצור איתך קשר תוך 24 שעות לדיון בצרכי ההגנה שלך.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                  הערכה חינם
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  אבטח את הנכס שלך היום
                </h2>
                <p className="mt-3 text-zinc-400">
                  מלא את הפרטים ומומחה אבטחה יתכנן עבורך תוכנית ניטור מותאמת אישית — ללא התחייבות.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
                      שם מלא
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="ישראל ישראלי"
                      className="w-full rounded-xl border border-white/8 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none ring-orange-500/50 transition focus:border-orange-500/40 focus:ring-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-300">
                      מספר טלפון
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="050-000-0000"
                      className="w-full rounded-xl border border-white/8 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none ring-orange-500/50 transition focus:border-orange-500/40 focus:ring-2"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
                    כתובת אימייל
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="israel@company.co.il"
                    className="w-full rounded-xl border border-white/8 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none ring-orange-500/50 transition focus:border-orange-500/40 focus:ring-2"
                  />
                </div>

                <div>
                  <label htmlFor="property" className="mb-1.5 block text-sm font-medium text-zinc-300">
                    מה אתה צריך להגן?
                  </label>
                  <select
                    id="property"
                    name="property"
                    required
                    className="w-full rounded-xl border border-white/8 bg-zinc-900 px-4 py-3 text-sm text-white outline-none ring-orange-500/50 transition focus:border-orange-500/40 focus:ring-2"
                  >
                    <option value="">בחר סוג נכס…</option>
                    <option>דירה / בית פרטי</option>
                    <option>אתר בנייה</option>
                    <option>חווה חקלאית</option>
                    <option>מפעל / מחסן</option>
                    <option>מרכז קניות</option>
                    <option>תשתית קריטית</option>
                    <option>אחר</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
                    פרטים נוספים{" "}
                    <span className="text-zinc-600">(אופציונלי)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="ספר לנו על אתגרי האבטחה שלך או על המערכת הקיימת…"
                    className="w-full rounded-xl border border-white/8 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none ring-orange-500/50 transition focus:border-orange-500/40 focus:ring-2 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-orange-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "שולח…" : "← בקש הערכה חינם"}
                </button>

                <p className="text-center text-xs text-zinc-600">
                  בשליחת הטופס אתה מסכים ל
                  <a href="https://iland-guard.com" className="underline hover:text-zinc-400 mx-1">
                    מדיניות הפרטיות
                  </a>
                  שלנו. אנחנו לעולם לא משתפים את המידע שלך.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
