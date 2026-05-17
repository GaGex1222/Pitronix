const steps = [
  {
    number: "01",
    title: "חיבור המצלמות שלך",
    description:
      "עובד עם כל מצלמת IP שכבר ברשותך. הצוות שלנו מחבר את המצלמות לפלטפורמת הענן של Pitronix — ללא צורך בביקור טכנאי.",
  },
  {
    number: "02",
    title: "SENTRA AI נכנסת לפעולה",
    description:
      "שכבת ה-AI שלנו מופעלת ומנתחת כל פריים בזמן אמת. היא לומדת את הסביבה שלך ומסננת פעילות יומיומית כדי להתמקד באיומים אמיתיים.",
  },
  {
    number: "03",
    title: "מפעילים חיים עוקבים 24/7",
    description:
      "מרכז המבצעים הייעודי שלנו עוקב לצד ה-AI. כשאיום מאושר, אנחנו יוצרים איתך קשר מיד ומתאמים את התגובה.",
  },
  {
    number: "04",
    title: "אתה שולט לחלוטין",
    description:
      "גש לצילומים חיים, קבל התראות מיידיות, נהל לוחות זמנים וסקור אירועים מהטלפון — בכל מקום, בכל שעה.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-zinc-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Right (RTL: appears first visually) */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 rounded-xl border border-white/5 bg-black/60 p-6 transition-colors hover:border-orange-500/20 hover:bg-black/80"
              >
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold text-orange-500/40 font-mono">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Left copy */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              התהליך
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              פעיל תוך שעות, לא שבועות
            </h2>
            <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
              ללא חיווט מחדש. ללא עבודות בנייה. Pitronix משתלבת עם התשתית הקיימת שלך ומופעלת
              מהר — כך שאתה מוגן ללא הפרעה.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400"
              >
                התחל היום
              </a>
              <a
                href="https://iland-guard.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                למד עוד ←
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
