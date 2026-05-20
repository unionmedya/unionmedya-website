"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-toprak/95 backdrop-blur-sm border-b border-krem/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo placeholder — 'X' ile şimdilik */}
        <a href="#hero" className="flex items-center gap-2 text-krem">
          <span className="font-display text-3xl leading-none">X</span>
          <div className="leading-tight">
            <div className="text-sm font-medium tracking-tight">union medya</div>
            <div className="text-[9px] font-mono tracking-[0.2em] text-pin/80">AERIAL ANALYSIS</div>
          </div>
        </a>

        {/* Menü */}
        <div className="hidden md:flex items-center gap-8 text-sm text-krem/80">
          <a href="#bolgeler" className="hover:text-pin transition-colors">Bölgeler</a>
          <a href="#hizmetler" className="hover:text-pin transition-colors">Hizmetler</a>
          <a href="#surec" className="hover:text-pin transition-colors">Süreç</a>
          <a href="#paketler" className="hover:text-pin transition-colors">Paketler</a>
          <a href="#sss" className="hover:text-pin transition-colors">SSS</a>
        </div>

        {/* Sağ buton */}
        <a
          href="#iletisim"
          className="bg-pin text-gece text-sm font-medium px-4 py-2.5 rounded-md hover:bg-pin/90 transition-colors"
        >
          Teklif al
        </a>
      </div>
    </nav>
  );
}
