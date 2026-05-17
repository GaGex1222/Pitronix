const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "זיהוי מבוסס בינה מלאכותית",
    title: "SENTRA AI רואה מה שאחרים מפספסים",
    description:
      "ה-AI הקנייני שלנו, SENTRA, הופך כל מצלמה קיימת לגלאי איומים חכם. הוא מזהה אנשים, רכבים והתנהגות חריגה בזמן אמת — מפחית התראות שווא תוך לכידת מה שחשוב.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "התראות מיידיות",
    title: "תגובה בזמן אמת, בכל פעם",
    description:
      "ברגע שה-AI מזהה איום, המפעילים החיים שלנו פועלים — מאמתים את האירוע, יוצרים איתך קשר מיד ומתאמים עם הרשויות במידת הצורך. זמן תגובה ממוצע: פחות מ-60 שניות.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    label: "שליטה מרחוק",
    title: "פיקוד מלא מכל מקום",
    description:
      "שלוט על כל מצלמה מרחוק — פן, טילט וזום. קבע לוחות זמנים חכמים, קבל התראות מותאמות אישית וצפה בצילומים מהטלפון או המחשב שלך, מכל מקום בעולם.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            למה iLand Guard
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            הגנה שלא נרדמת
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            אבטחה מסורתית מגיבה. אנחנו מונעים. שלושה עמודי תווך ששומרים על הנכס שלך סביב השעון.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.label}
              className="group relative rounded-2xl border border-white/8 bg-white/3 p-8 transition-all hover:border-orange-500/20 hover:bg-white/5"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-orange-500/4 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 ring-1 ring-orange-500/25 text-orange-400">
                {f.icon}
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                {f.label}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 gap-px rounded-2xl border border-white/8 bg-white/5 overflow-hidden sm:grid-cols-4">
          {[
            { value: "24/7", label: "ניטור חי" },
            { value: "<60s", label: "זמן תגובה" },
            { value: "ללא", label: "צורך בהתקנה" },
            { value: "100%", label: "גישה מרחוק" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-8 px-4 text-center bg-black">
              <span className="text-3xl font-bold text-orange-400">{s.value}</span>
              <span className="mt-1 text-sm text-zinc-500">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
