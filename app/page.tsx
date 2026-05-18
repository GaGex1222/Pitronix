'use client'

import React, { useState, useEffect } from 'react';
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
  X,
  Building2,
  Users,
  Award,
  Clock,
  MapPin,
  Mail,
  Zap,
  Lock
} from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // מעקב אחר גלילה להוספת אפקט ל-Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // רשימת הלוגואים מהתיקייה הציבורית שלך (ללא המחוקים)
  const clientLogos = [
    { src: '/afula.png', alt: 'עיריית עפולה' },
    { src: '/Rivulis_Irrigation.jpg', alt: 'ריבוליס השקיה' },
    { src: '/אגדיר.png', alt: 'אגדיר' },
    { src: '/אריאל.jpg', alt: 'אריאל' },
    { src: '/סמל_המשרד.png', alt: 'משרד ממשלתי' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white" dir="rtl">
      
      {/* NAVBAR */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-2' 
          : 'bg-slate-900/40 backdrop-blur-sm border-b border-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 sm:h-28 flex items-center justify-between">
          
          {/* Logo Area */}
          <div className="flex items-center h-full py-2 animate-fade-in">
            <a href="#" className="block h-full w-auto relative group max-w-[200px] sm:max-w-[280px] md:max-w-[320px]">
              <img 
                src="./pitronix.png" 
                alt="פתרוניקס לוגו" 
                width={960}
                height={230}
                className="h-full w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-110 drop-shadow-[0_0_15px_rgba(37,99,235,0.2)]" 
              />
              <noscript>
                <div className="text-xl font-black bg-gradient-to-l from-white to-blue-400 bg-clip-text text-transparent">
                  פתרוניקס
                </div>
              </noscript>
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-300 hover:text-blue-400 font-semibold transition-all hover:-translate-y-0.5 relative group">
              השירותים שלנו
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#clients" className="text-slate-300 hover:text-blue-400 font-semibold transition-all hover:-translate-y-0.5 relative group">
              לקוחות מרוצים
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#why-us" className="text-slate-300 hover:text-blue-400 font-semibold transition-all hover:-translate-y-0.5 relative group">
              למה פתרוניקס
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#metrics" className="text-slate-300 hover:text-blue-400 font-semibold transition-all hover:-translate-y-0.5 relative group">
              המספרים שלנו
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-blue-600/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <PhoneCall size={18} className="animate-pulse" />
              <span>ייעוץ חינם</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none transition-colors border border-slate-800 rounded-xl bg-slate-900/50"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100 border-t border-slate-800/80' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-4 pb-6 space-y-3 bg-slate-950/98">
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition-all"
            >
              השירותים שלנו
            </a>
            <a 
              href="#clients" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition-all"
            >
              חברות שעובדות איתנו
            </a>
            <a 
              href="#why-us" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition-all"
            >
              למה פתרוניקס
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-3.5 rounded-xl font-bold text-center shadow-lg"
            >
              <PhoneCall size={18} />
              <span>ייעוץ חינם</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* בקראונד גרדיאנטים עתידניים צפים */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse duration-4000" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-right transform transition-all duration-1000 translate-y-0 opacity-100">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-inner shadow-blue-500/5">
                <ShieldAlert size={16} className="text-blue-400 shrink-0" />
                מעל 20 שנות מצוינות באבטחה, תקשורת ומיגון מתקדם
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.15] tracking-tight">
                מגינים על כל מה ששווה <br />
                <span className="bg-gradient-to-l from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  לחזור אליו באמת
                </span>
              </h1>
              <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                פתרוניקס היא החברה המובילה בישראל לתכנון, אינטגרציה והתקנת מערכות מיגון ואבטחה מתקדמות לעסקים, מפעלים, מוסדות ובתים פרטיים. אנו יוצרים מעטפת ביטחון טכנולוגית חסרת פשרות.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#services" className="w-full sm:w-auto text-center bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl hover:-translate-y-0.5">
                  למידע על השירותים שלנו
                </a>
                <a href="#video" className="w-full sm:w-auto text-center text-blue-400 hover:text-blue-300 font-bold flex items-center justify-center gap-2 group py-3 transition-all">
                  צפו בסרטון החברה 
                  <ArrowLeft size={18} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* HERO FORM */}
            <div id="contact" className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none transform transition-all duration-1000 delay-200">
              <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative shadow-blue-950/20">
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black uppercase px-4 py-1.5 rounded-lg tracking-wider shadow-lg">
                  מבצע בדיקת התאמה חינם
                </div>
                <h3 className="text-2xl font-extrabold mb-2 text-white">לקבלת ייעוץ והצעה מותאמת אישית</h3>
                <p className="text-slate-400 text-sm mb-6 font-normal">השאירו פרטים ומומחה מיגון מוסמך יחזור אליכם בהקדם</p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs text-slate-400 font-semibold mb-1.5">שם מלא / שם העסק</label>
                    <input type="text" placeholder="ישראל ישראלי" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-semibold mb-1.5">טלפון נייד ליצירת קשר</label>
                    <input type="tel" placeholder="050-0000000" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 text-left dir-ltr focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-semibold mb-1.5">כתובת הנכס (עיר/יישוב)</label>
                    <input type="text" placeholder="תל אביב, מרכז הסחר" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300" />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-extrabold py-4 rounded-xl shadow-xl shadow-blue-900/30 transform active:scale-98 hover:scale-[1.01] transition-all text-lg mt-3">
                    שלח פרטים ליועץ מיגון
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* NEW SECTION: FLOATING CLIENTS LOGO TRACK */}
{/* SECTION: BRAND LOGOS LINE */}
<section id="clients" className="py-20 bg-slate-900/30 border-y border-slate-900/60 relative overflow-hidden">
  
  {/* כותרת הסקשן */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center lg:text-right">
    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400 mb-2">שותפים לדרך</h3>
    <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">חברות וארגונים שעובדים איתנו כבר:</h2>
    <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full hidden lg:block" />
  </div>

  {/* שורה אחת ישרה ומרווחת ללא תנועה ואנימציה */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-12 lg:gap-16">
      
      {/* לוגו 1: עיריית עפולה */}
      <div className="flex items-center justify-center h-24 w-44 shrink-0 transition-all duration-300 hover:scale-105 backdrop-blur-md bg-slate-900/60 border border-slate-800/60 p-4 rounded-2xl shadow-xl hover:border-slate-700">
        <img 
          src="/afula.png" 
          alt="עיריית עפולה" 
          className="max-h-full max-w-full object-contain pointer-events-none"
        />
      </div>

      {/* לוגו 2: ריבוליס השקיה */}
      <div className="flex items-center justify-center h-24 w-44 shrink-0 transition-all duration-300 hover:scale-105 backdrop-blur-md bg-slate-900/60 border border-slate-800/60 p-4 rounded-2xl shadow-xl hover:border-slate-700">
        <img 
          src="/Rivulis_Irrigation.jpg" 
          alt="ריבוליס השקיה" 
          className="max-h-full max-w-full object-contain pointer-events-none"
        />
      </div>

      {/* לוגו 3: אגדיר */}
      <div className="flex items-center justify-center h-24 w-44 shrink-0 transition-all duration-300 hover:scale-105 backdrop-blur-md bg-slate-900/60 border border-slate-800/60 p-4 rounded-2xl shadow-xl hover:border-slate-700">
        <img 
          src="/אגדיר.png" 
          alt="אגדיר" 
          className="max-h-full max-w-full object-contain pointer-events-none"
        />
      </div>

      {/* לוגו 4: אריאל */}
      <div className="flex items-center justify-center h-24 w-44 shrink-0 transition-all duration-300 hover:scale-105 backdrop-blur-md bg-slate-900/60 border border-slate-800/60 p-4 rounded-2xl shadow-xl hover:border-slate-700">
        <img 
          src="/אריאל.jpg" 
          alt="אריאל" 
          className="max-h-full max-w-full object-contain pointer-events-none"
        />
      </div>

      {/* לוגו 5: משרד ממשלתי */}
      <div className="flex items-center justify-center h-24 w-44 shrink-0 transition-all duration-300 hover:scale-105 backdrop-blur-md bg-slate-900/60 border border-slate-800/60 p-4 rounded-2xl shadow-xl hover:border-slate-700">
        <img 
          src="/סמל_המשרד.png" 
          alt="משרד ממשלתי" 
          className="max-h-full max-w-full object-contain pointer-events-none"
        />
      </div>

    </div>
  </div>
</section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
          <h3 className="text-sm font-bold text-blue-500 uppercase tracking-widest">פתרונות טכנולוגיים מקיפים</h3>
          <h2 className="text-4xl sm:text-5xl font-black text-white">מערכות מתח נמוך ואבטחה מקצה לקצה</h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full shadow-md shadow-blue-500/20" />
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
            אנו מתמחים בהנדסה, התאמה אישית ואינטגרציה של מערכות מורכבות, תוך שימוש בלעדי בציוד המוביל והאמין ביותר בעולם.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-blue-500/5 hover:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-blue-600/10" />
            <div>
              <div className="bg-blue-950 text-blue-400 border border-blue-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-500 group-hover:scale-105 shadow-inner">
                <Video size={26} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">מצלמות אבטחה ו-AI</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                הקמת מערכות צילום ברזולוציות Ultra-HD המבוססות על אנליטיקה מתקדמת ובינה מלאכותית. זיהוי פנים, קריאת לוחיות רישוי (LPR), חציית קו והתרעות חכמות ישירות לנייד בזמן אמת.
              </p>
            </div>
            <a href="#contact" className="text-blue-400 font-bold text-sm flex items-center gap-2 hover:text-blue-300 mt-auto transition-colors group/link">
              <span>לייעוץ ותכנון מערכת</span> 
              <ArrowLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-blue-500/5 hover:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-blue-600/10" />
            <div>
              <div className="bg-blue-950 text-blue-400 border border-blue-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-500 group-hover:scale-105 shadow-inner">
                <BellRing size={26} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">מערכות אזעקה חכמות</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                בקרים מתוחכמים המשלבים גלאי נפח, וילון, זעזועים ותנועה תחת תדרים מאובטחים. סינכרון מלא למוקדי שמירה, מערכות בית חכם, הפעלת צופרי הרתעה חזקים ונטרול אזורים מרוחק.
              </p>
            </div>
            <a href="#contact" className="text-blue-400 font-bold text-sm flex items-center gap-2 hover:text-blue-300 mt-auto transition-colors group/link">
              <span>לייעוץ ותכנון מערכת</span> 
              <ArrowLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-blue-500/5 hover:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-blue-600/10" />
            <div>
              <div className="bg-blue-950 text-blue-400 border border-blue-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-500 group-hover:scale-105 shadow-inner">
                <Flame size={26} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">מערכות גילוי אש ועשן</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                תכנון קפדני לפי תקן 1220 של מכון התקנים. גלאי עשן, חום, קרן ומערכות יניקה מתקדמות המחוברות לרכזות אנלוגיות חכמות המונעות נזקי גוף ורכוש ומאפשרות אישור כיבוי אש מהיר לעסקים.
              </p>
            </div>
            <a href="#contact" className="text-blue-400 font-bold text-sm flex items-center gap-2 hover:text-blue-300 mt-auto transition-colors group/link">
              <span>לייעוץ ותכנון מערכת</span> 
              <ArrowLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Service 4 */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-blue-500/5 hover:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-blue-600/10" />
            <div>
              <div className="bg-blue-950 text-blue-400 border border-blue-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-500 group-hover:scale-105 shadow-inner">
                <Wifi size={26} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">תשתיות ותקשורת מחשבים</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                פריסת סיבים אופטיים, חיווט קווי רשת Cat7/Cat8, ארונות תקשורת מנוהלים ופתרונות WiFi Mesh רחבים לאתרי בנייה, משרדי הייטק ובתים רחבי ידיים עם אפס ניתוקים ויציבות מקסימלית.
              </p>
            </div>
            <a href="#contact" className="text-blue-400 font-bold text-sm flex items-center gap-2 hover:text-blue-300 mt-auto transition-colors group/link">
              <span>לייעוץ ותכנון מערכת</span> 
              <ArrowLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Service 5 */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-blue-500/5 hover:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-blue-600/10" />
            <div>
              <div className="bg-blue-950 text-blue-400 border border-blue-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-500 group-hover:scale-105 shadow-inner">
                <Radio size={26} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">מערכות אינטרקום ובקרת כניסה</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                בקרות כניסה ביומטריות, קודנים אנטי-ונדליים, ומערכות אינטרקום וידאו מבוססות IP המאפשרות מענה, צפייה ופתיחת שערים ודלתות מרחוק מכל מקום בעולם דרך הנייד בצורה מאובטחת.
              </p>
            </div>
            <a href="#contact" className="text-blue-400 font-bold text-sm flex items-center gap-2 hover:text-blue-300 mt-auto transition-colors group/link">
              <span>לייעוץ ותכנון מערכת</span> 
              <ArrowLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Service 6 */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-blue-500/5 hover:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-blue-600/10" />
            <div>
              <div className="bg-blue-950 text-blue-400 border border-blue-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-500 group-hover:scale-105 shadow-inner">
                <Shield size={26} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">מערכות כריזה וסאונד מסחרי</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                פתרונות שמע מקצועיים לחללים ציבוריים, קניונים, מפעלים וחנויות. שילוב מדויק בין כריזת חירום מצילה חיים התואמת להנחיות כוחות הביטחון, לבין מוזיקת רקע נעימה בווליום מבוקר.
              </p>
            </div>
            <a href="#contact" className="text-blue-400 font-bold text-sm flex items-center gap-2 hover:text-blue-300 mt-auto transition-colors group/link">
              <span>לייעוץ ותכנון מערכת</span> 
              <ArrowLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* NEW SECTION: CORE METRICS & NUMBERS */}
      <section id="metrics" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-2 group">
              <div className="text-4xl sm:text-6xl font-black text-blue-500 tracking-tight transition-transform duration-300 group-hover:scale-105">+20</div>
              <div className="text-sm sm:text-base font-bold text-slate-200">שנות ניסיון ומוניטין</div>
              <p className="text-xs text-slate-500 max-w-[180px] mx-auto">מובילים את שוק המיגון והמתח הנמוך בישראל</p>
            </div>

            <div className="space-y-2 group">
              <div className="text-4xl sm:text-6xl font-black text-cyan-400 tracking-tight transition-transform duration-300 group-hover:scale-105">+1,500</div>
              <div className="text-sm sm:text-base font-bold text-slate-200">פרויקטים שבוצעו בהצלחה</div>
              <p className="text-xs text-slate-500 max-w-[180px] mx-auto">פריסה ארצית רחבה בכל מגזרי השוק</p>
            </div>

            <div className="space-y-2 group">
              <div className="text-4xl sm:text-6xl font-black text-blue-500 tracking-tight transition-transform duration-300 group-hover:scale-105">100%</div>
              <div className="text-sm sm:text-base font-bold text-slate-200">חומרה בתקנים מחמירים</div>
              <p className="text-xs text-slate-500 max-w-[180px] mx-auto">שימוש במותגים המובילים בעולם בלבד</p>
            </div>

            <div className="space-y-2 group">
              <div className="text-4xl sm:text-6xl font-black text-cyan-400 tracking-tight transition-transform duration-300 group-hover:scale-105">24/7</div>
              <div className="text-sm sm:text-base font-bold text-slate-200">זמינות שירות ומענה</div>
              <p className="text-xs text-slate-500 max-w-[180px] mx-auto">תמיכה מלאה וליווי צמוד גם לאחר סיום ההתקנה</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY US SECTION (The "Difference") */}
      <section id="why-us" className="bg-slate-950 text-white py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6 text-center lg:text-right">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">הסטנדרט המקצועי שלנו</h3>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">המומחיות והאמינות שלנו עושות את ההבדל בשטח</h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
                במשך שני עשורים, פתרוניקס מציבה רף חדש של איכות והנדסה בעולם המיגון. אנו מאמינים כי אבטחה ברמה הגבוהה ביותר נשענת על שילוב מדויק בין תכנון מוקפד, גימור אסתטי מושלם בשטח, ושירות לקוחות זמין ללא פשרות.
              </p>
              
              <div className="space-y-5 pt-4 text-right">
                {[
                  { title: 'ליווי הנדסי מלא מאפס', desc: 'משלב הייעוץ הראשוני, אפיון הצרכים, התכנון האדריכלי ועד למסירת מערכת מושלמת.' },
                  { title: 'התקנות ברמת גימור עילאית', desc: 'חיווט מסודר בארונות תקשורת, תעלות מוגנות ואפס חוטים חשופים – אצלנו המראה חשוב לא פחות מהביצוע.' },
                  { title: 'טכנולוגיית קצה מעודכנת', desc: 'עדכוני תוכנה שוטפים, שימוש במצלמות וגלאים מבוססי AI ומערכות אנליטיקה חכמות מהדור החדש.' },
                  { title: 'שירות אישי ואדיב במיוחד', desc: 'אנחנו זמינים עבורכם תמיד, פותרים תקלות במהירות ומספקים הדרכה מקיפה לשימוש קל וידידותי במערכות.' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 justify-start group">
                    <div className="bg-slate-900 border border-slate-800 p-2 rounded-xl text-cyan-400 shrink-0 mt-1 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-slate-950 shadow-md">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-100 font-extrabold text-base sm:text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* CONTACT INFO / QUICK FOOTER CARD */}
      <section className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
            
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                <MapPin size={22} />
              </div>
              <div>
                <h5 className="font-bold text-white text-base">אזור פעילות וכיסוי</h5>
                <p className="text-slate-500 text-sm mt-0.5">פריסה ארצית רחבה, שירות מהיר במרכז ובצפון</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                <Mail size={22} />
              </div>
              <div>
                <h5 className="font-bold text-white text-base">כתבו לנו בדוא"ל</h5>
                <p className="text-slate-500 text-sm mt-0.5">info@pitronix.co.il</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                <Lock size={22} />
              </div>
              <div>
                <h5 className="font-bold text-white text-base">אבטחת מידע מובטחת</h5>
                <p className="text-slate-500 text-sm mt-0.5">כל המערכות שלנו מוצפנות ומאובטחות בסייבר</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-600 py-12 border-t border-slate-900/50 text-sm text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="font-extrabold text-slate-400 text-base">פתרוניקס – פתרונות תקשורת, אבטחה ומיגון מתקדמים</p>
          <p className="font-light text-slate-500 max-w-xl mx-auto text-xs leading-relaxed">
            כלל פתרונות החומרה והתוכנה המותקנים על ידינו עומדים בתקנים המחמירים ביותר בישראל ובעולם. התמונות והלוגואים המוצגים שייכים לחברות וארגונים אשר נהנים או נהנו משירותי החברה לאורך השנים.
          </p>
          <div className="w-12 h-0.5 bg-slate-900 mx-auto my-2" />
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} פתרוניקס. כל הזכויות שמורות. מגינים על כל מה ששווה לחזור אליו באמת.</p>
        </div>
      </footer>

    </div>
  );
}