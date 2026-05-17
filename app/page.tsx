'use client'

import React, { useState } from 'react';
import { 
  Shield, 
  ShieldAlert, 
  Video, 
  Radio, 
  Wifi, 
  PhoneCall, 
  Flame, 
  BellRing, 
  CheckCircle, 
  ArrowLeft, 
  Menu, 
  X 
} from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased" dir="rtl">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur text-white border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 sm:h-28 flex items-center justify-between">
          
          {/* Logo Area - Tailored for 960x230, highly responsive */}
          <div className="flex items-center h-full py-2">
            <a href="#" className="block h-full w-auto relative group max-w-[200px] sm:max-w-[280px] md:max-w-[320px]">
              <img 
                src="./pitronix.png" 
                alt="פתרוניקס לוגו" 
                width={960}
                height={230}
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
              />
              <noscript>
                <div className="text-xl font-black bg-gradient-to-l from-white to-blue-400 bg-clip-text text-transparent">
                  פתרוניקס
                </div>
              </noscript>
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-slate-300 hover:text-white font-medium transition-colors">השירותים שלנו</a>
            <a href="#why-us" className="text-slate-300 hover:text-white font-medium transition-colors">למה פתרוניקס</a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105"
            >
              <PhoneCall size={18} />
              <span>ייעוץ חינם</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100 border-t border-slate-800' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-4 pb-6 space-y-3 bg-slate-950/98">
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-all"
            >
              השירותים שלנו
            </a>
            <a 
              href="#why-us" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-all"
            >
              למה פתרוניקס
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-3 rounded-xl font-bold text-center shadow-lg"
            >
              <PhoneCall size={18} />
              <span>ייעוץ חינם</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <ShieldAlert size={16} />
                מעל 20 שנות מצוינות באבטחה ומיגון
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight sm:leading-none">
                מגינים על כל מה ששווה <br className="hidden sm:inline" />
                <span className="bg-gradient-to-l from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  לחזור אליו באמת
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                פתרוניקס היא החברה המובילה בישראל לתכנון, אינטגרציה והתקנת מערכות מיגון ואבטחה מתקדמות לעסקים, מוסדות ובתים פרטיים. שירות מוקפד ומקצועי עד לפרט האחרון.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#services" className="w-full sm:w-auto text-center bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl border border-slate-700 transition-all">
                  למידע על השירותים שלנו
                </a>
                <a href="#video" className="w-full sm:w-auto text-center text-blue-400 hover:text-blue-300 font-bold flex items-center justify-center gap-2 group py-2">
                  צפו בסרטון החברה 
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* HERO FORM */}
            <div id="contact" className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                <div className="absolute -top-3 right-6 bg-amber-500 text-slate-950 text-xs font-black uppercase px-3 py-1 rounded-md tracking-wider shadow-md">
                  מבצע בדיקת התאמה
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">לקבלת ייעוץ והצעה מותאמת אישית</h3>
                <p className="text-slate-400 text-sm mb-6">השאירו פרטים ומומחה מיגון יחזור אליכם בהקדם</p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1.5">שם מלא</label>
                    <input type="text" placeholder="ישראל ישראלי" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1.5">טלפון נייד</label>
                    <input type="tel" placeholder="050-0000000" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-left dir-ltr focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1.5">כתובת (עיר/יישוב)</label>
                    <input type="text" placeholder="תל אביב, רוטשילד" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transform active:scale-95 transition-all text-lg mt-2">
                    שלח פרטים ליועץ מיגון
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">פתרונות אבטחה מקצה לקצה</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            אנו מתמחים בהתאמה אישית של מערכות מתקדמות, תוך שימוש בציוד האמין ביותר בשוק ובסטנדרט התקנה חסר פשרות.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Service 1 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Video size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">מצלמות אבטחה</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                התקנה ושירות למערכות צילום מתקדמות לעסקים ובתים. תיעוד מלא, הרתעה בזמן אמת ותחקור אירועים קל וידידותי ישירות מהנייד, מהמחשב או מהטאבלט מכל מקום בעולם.
              </p>
            </div>
            <a href="#contact" className="text-blue-600 font-bold text-sm flex items-center gap-1.5 hover:text-blue-700 mt-auto">
              למידע נוסף <ArrowLeft size={16} />
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <BellRing size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">מערכות אזעקה</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                מערכות חכמות המבוססות על בקר אלקטרוני וגלאי נפח, תנועה ושטח מתקדמים. שליטה מלאה מהנייד, חייגן אוטומטי לבעל הנכס או למוקד שמירה, והפעלה אוטומטית של צופר הרתעה.
              </p>
            </div>
            <a href="#contact" className="text-blue-600 font-bold text-sm flex items-center gap-1.5 hover:text-blue-700 mt-auto">
              למידע נוסף <ArrowLeft size={16} />
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Flame size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">מערכות גילוי אש</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                איתור שריפות בשלבים מוקדמים קריטי להצלת חיים וצמצום נזק לרכוש. המערכות שלנו מספקות אינדיקציה מדויקת על מיקום השריפה ומאפשרות שליטה מהירה של כוחות הכיבוי וההצלה.
              </p>
            </div>
            <a href="#contact" className="text-blue-600 font-bold text-sm flex items-center gap-1.5 hover:text-blue-700 mt-auto">
              למידע נוסף <ArrowLeft size={16} />
            </a>
          </div>

          {/* Service 4 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Wifi size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">תקשורת מחשבים</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                תכנון והקמת תשתיות תקשורת יציבות ומהירות לפי התקנים המחמירים ביותר. התקנת קווי רשת, סיבים, ארונות תקשורת מסודרים, נקודות קצה ופתרונות וויפיי רחבים לעסקים ולפרטיים.
              </p>
            </div>
            <a href="#contact" className="text-blue-600 font-bold text-sm flex items-center gap-1.5 hover:text-blue-700 mt-auto">
              למידע נוסף <ArrowLeft size={16} />
            </a>
          </div>

          {/* Service 5 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Radio size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">מערכות אינטרקום</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                קו ההגנה הראשון של העסק והבית השומר על פרטיותכם ומונע כניסת גורמים לא רצויים. פתרונות שמע ווידאו מתקדמים משולבי קודנים, בקרות כניסה ואפליקציה ייעודית לפתיחה מרחוק.
              </p>
            </div>
            <a href="#contact" className="text-blue-600 font-bold text-sm flex items-center gap-1.5 hover:text-blue-700 mt-auto">
              למידע נוסף <ArrowLeft size={16} />
            </a>
          </div>

          {/* Service 6 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">כריזה ומוזיקת רקע</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                מערכות סאונד וכריזה חיוניות המותאמות לחללים מסחריים וציבוריים. מענה מושלם לניהול מצבי חירום ומתן הוראות פינוי, לצד שילוב מוזיקת רקע ליצירת אווירה נעימה בשגרה.
              </p>
            </div>
            <a href="#contact" className="text-blue-600 font-bold text-sm flex items-center gap-1.5 hover:text-blue-700 mt-auto">
              למידע נוסף <ArrowLeft size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* WHY US SECTION (The "Difference") */}
      <section id="why-us" className="bg-slate-900 text-white py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-right">
              <h2 className="text-3xl sm:text-4xl font-black">המומחיות והאמינות שלנו עושות את ההבדל</h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto lg:margin-0 lg:mr-0 rounded-full block md:hidden" />
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                במשך שני עשורים, פתרוניקס מובילה את תרבות הביטחון והטכנולוגיה בישראל. אנו מאמינים כי אבטחה איכותית נשענת על דיוק התכנון, מקצועיות ההתקנה ושירות אדיב וזמין תמיד.
              </p>
              
              <div className="space-y-4 pt-2 text-right">
                {[
                  'מעל ל-20 שנות ניסיון מעשי בשטח האבטחה והמתח הנמוך',
                  'ליווי מלא החל משלב הייעוץ, התכנון ועד להתקנה הסופית',
                  'שימוש בציוד טכנולוגי מתקדם בעל תקנים מחמירים',
                  'שירות לקוחות אישי, אדיב ומקצועי ללא פשרות'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 justify-start">
                    <CheckCircle className="text-cyan-400 shrink-0 mt-1" size={18} />
                    <span className="text-slate-200 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* VIDEO PLACEHOLDER SECTION */}
            <div id="video" className="bg-slate-800 rounded-2xl border border-slate-700 aspect-video flex flex-col items-center justify-center text-center p-4 sm:p-6 shadow-2xl relative group overflow-hidden w-full max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-600/30 cursor-pointer transform hover:scale-110 transition-all z-10">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-[-2px]" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="mt-4 font-bold text-base sm:text-lg text-slate-200 z-10">צפו בסרטון התדמית של פתרוניקס</span>
              <p className="text-slate-500 text-xs mt-1 z-10">כך אנו מגינים על הנכס שלך 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-10 border-t border-slate-900 text-xs sm:text-sm text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="font-bold text-slate-400 text-sm sm:text-base">פתרוניקס - פתרונות אבטחה ומיגון מתקדמים</p>
          <p>© {new Date().getFullYear()} פתרוניקס. כל הזכויות שמורות. מגינים על כל החשוב לך באמת.</p>
        </div>
      </footer>

    </div>
  );
}