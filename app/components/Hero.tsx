export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-toprak text-krem flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Arka plan deseni — incelikli grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#F2EBD8 1px, transparent 1px), linear-gradient(90deg, #F2EBD8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Üst rozet */}
          <div className="inline-flex items-center gap-2 bg-pin/10 border border-pin/20 px-3 py-1.5 rounded-md mb-8">
            <span className="w-1.5 h-1.5 bg-pin rounded-full animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.15em] text-pin">
              EMLAKTA 360° YENİ NESİL PAZARLAMA
            </span>
          </div>

          {/* Ana başlık */}
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
            Arsanız havadan görününce{" "}
            <span className="italic">3 kat daha hızlı</span> satılır.
          </h1>

          {/* Alt başlık */}
          <p className="text-lg md:text-xl text-krem/90 leading-loose mb-10 max-w-2xl">
            Emlakçı için arsa drone çekimi. Net sınır, net konum, net karar.
          </p>

          {/* CTA butonu */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#iletisim"
              className="bg-pin text-gece px-6 py-3.5 rounded-md font-medium hover:bg-pin/90 transition-colors inline-flex items-center gap-2"
            >
              Teklif al
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Güven sinyalleri */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-krem/60">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pin">
                <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              SHGM lisanslı pilot
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pin">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" strokeLinecap="round" />
              </svg>
              48 saatte teslim
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pin">
                <path d="M12 3C12 3 5 6 5 9v5c0 3.5 3 6 7 7 4-1 7-3.5 7-7V9c0-3-7-6-7-6z" />
              </svg>
              Sigortalı uçuş
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
