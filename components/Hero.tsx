import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 pt-16 text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[130px]" />
        <div className="absolute left-1/4 top-3/4 h-[300px] w-[300px] rounded-full bg-orange-600/6 blur-[100px]" />
        <div className="absolute right-1/4 top-1/2 h-[250px] w-[250px] rounded-full bg-amber-400/5 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1.5 text-xs font-medium text-orange-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
          </span>
          מרכז שליטה פעיל — ניטור 24/7
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
          אבטחה שמקדימה את{" "}
          <span className="bg-gradient-to-l from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
            האיום
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          iLand Guard משלבת זיהוי מבוסס בינה מלאכותית עם מרכז שליטה חי כדי לשמור על הבית,
          העסק או האתר שלך — 24 שעות ביממה, 7 ימים בשבוע. ללא התקנה. ללא עיוורונות. ללא פשרות.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:bg-orange-400 hover:-translate-y-0.5"
          >
            קבל הערכת אבטחה חינם
            <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-zinc-300 transition-all hover:bg-white/10 hover:text-white"
          >
            ראה איך זה עובד
          </Link>
        </div>

        {/* Trust bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs text-zinc-500">
          {[
            "אתרי בנייה",
            "דירות פרטיות",
            "חוות חקלאיות",
            "אזורי תעשייה",
            "תשתיות קריטיות",
            "מרכזי קניות",
          ].map((sector) => (
            <div key={sector} className="flex items-center gap-2">
              <svg className="h-3.5 w-3.5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              {sector}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
