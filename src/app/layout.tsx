import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@tailwindplus/elements';
import Header from "../components/layout/Header/Navigation/header";
import Footer from "@/components/layout/Footer/index";
import ScrollToTop from "@/components/ScrollToTop/index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOMOHOLIC",
  description: "Fresh Himalayan Momo delivered to your doorstep",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-amber-200 min-h-screen`}>
        <Header />
        <main className="pt-5">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
