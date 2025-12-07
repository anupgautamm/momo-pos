"use client"; 
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-amber-200/80 backdrop-blur">
      <nav className="flex items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center">
            <img src="/img/logo.png" alt="logo" className="h-16 w-16" />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-gray-900 p-2"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-md font-semibold text-gray-800">Product</a>
          <a href="#" className="text-md font-semibold text-gray-800">Features</a>
          <a href="#" className="text-md font-semibold text-gray-800">Company</a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-md font-semibold text-gray-800">Log in →</a>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="fixed right-0 top-0 w-64 bg-amber-300 p-6 shadow-lg animate-slideIn">
            <div className="flex justify-between items-center mb-6">
              <img src="/img/logo.png" className="h-12 w-12" alt="Menu Logo" />
              <button onClick={() => setMobileOpen(false)} className="text-gray-900">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                  <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <nav className="space-y-4">
              {["Product", "Features", "Company", "Log in"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-900 bg-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-orange-400 hover:text-white transition"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
