const testimonials = [
  {
    quote:
      "לפני iLand Guard היו לנו שני פריצות לאתר הבנייה שלנו תוך חודש. מאז שהפעלנו את המערכת — אפס אירועים, ויש לנו התראות להוכיח את זה. הצוות שלהם מגיב מהר יותר מכל שומר שנשכרנו אי פעם.",
    name: "דוד מ.",
    role: "מנהל אתר",
    company: "BuildTech בנייה",
    initials: "דמ",
  },
  {
    quote:
      "אנחנו מפעילים 6 חוות ברחבי הארץ. iLand Guard מאפשרת לי לעקוב אחרי הכל מאפליקציה אחת. ה-AI תופס תנועות רכבים בלילה שלגמרי היינו מפספסים. זה מחזיר את עצמו כל שבוע.",
    name: "שרה כ.",
    role: "מנהלת תפעול",
    company: "AgriPrime Holdings",
    initials: "שכ",
  },
  {
    quote:
      "חברת הביטוח שלנו בפועל הורידה את הפרמיות שלנו אחרי שהתקנו את iLand Guard. הניטור החי ותיעוד האירועים נותנים להם — ולנו — ביטחון אמיתי. אבטחה פרואקטיבית באמת.",
    name: "רון ל.",
    role: "מנהל מתקנים",
    company: "מרכז קניות מטרופלקס",
    initials: "רל",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-black py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-[350px] w-[350px] rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            סיפורי לקוחות
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            אמון של עסקים בכל מגזר
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/5 bg-zinc-950 p-8"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-zinc-300 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-sm font-bold text-orange-300 ring-1 ring-orange-500/25">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
