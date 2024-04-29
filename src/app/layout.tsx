import { FeedbackWidget } from "@/components/FeedbackWidget";
import "./globals.css";

import { Plus_Jakarta_Sans, Martian_Mono, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plus-jakarta",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-martian-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative ${plusJakarta.variable} ${martianMono.variable} ${inter.variable} font-sans`}
      >
        {children}
        <FeedbackWidget />
      </body>
    </html>
  );
}
