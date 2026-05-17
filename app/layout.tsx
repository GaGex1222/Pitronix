import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pitornix — ניטור אבטחה 24/7 מבוסס בינה מלאכותית",
  description:
    "Pitronix מגנה על הבית, העסק והנכסים שלך עם ניטור מצלמות בזמן אמת, התראות מיידיות ומרכז שליטה חי — ללא צורך בהתקנה.",
  openGraph: {
    title: "Pitronix — ניטור אבטחה 24/7 מבוסס בינה מלאכותית",
    description: "אבטחה פרואקטיבית מבוססת SENTRA AI. מעקב על הכל, לא מפספסים כלום.",
    url: "https://iland-guard.com",
    siteName: "Pitronix",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
