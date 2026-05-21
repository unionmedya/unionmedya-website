export default function Testimonial() {
  return (
    <section className="bg-toprak text-krem py-24 px-6 border-t border-krem/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Açılış tırnağı */}
        <div className="font-display text-6xl text-pin/40 leading-none mb-4">
          &ldquo;
        </div>

        <blockquote className="font-display text-2xl md:text-3xl leading-relaxed mb-8 italic text-krem/95">
          3 aydır satamadığım arsa, drone videosu paylaştığım gün 4 ciddi alıcı
          çıkardı. Artık her ilanım için Union Medya ile çekim yaptırıyorum.
        </blockquote>

        <div className="text-sm text-krem/60 space-y-1">
          <div className="font-medium text-krem/90">Mehmet K.</div>
          <div>Emlak Danışmanı · Çeşme</div>
        </div>

        {/* İstatistik kartları */}
        <div className="mt-16 pt-12 border-t border-krem/10 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-zeytin/20 border border-krem/10 rounded-lg px-6 py-8">
            <div className="font-display text-5xl text-pin mb-3">%403</div>
            <div className="text-[14px] text-krem/85 leading-snug mb-4">
              daha fazla tıklanma
            </div>
            <div className="text-[12px] text-krem/60 leading-snug">
              Video içerikli emlak ilanları
            </div>
            <div className="mt-4 pt-4 border-t border-krem/10 text-[10px] text-krem/35 font-mono tracking-wide">
              Kaynak: NAR & Zillow araştırmaları
            </div>
          </div>

          <div className="bg-zeytin/20 border border-krem/10 rounded-lg px-6 py-8">
            <div className="font-display text-5xl text-pin mb-3">%40</div>
            <div className="text-[14px] text-krem/85 leading-snug mb-4">
              daha hızlı satış
            </div>
            <div className="text-[12px] text-krem/60 leading-snug">
              Video içeren ilanlar ortalamada
            </div>
            <div className="mt-4 pt-4 border-t border-krem/10 text-[10px] text-krem/35 font-mono tracking-wide">
              Kaynak: NAR & Zillow araştırmaları
            </div>
          </div>

          <div className="bg-zeytin/20 border border-krem/10 rounded-lg px-6 py-8">
            <div className="font-display text-5xl text-pin mb-3">%85</div>
            <div className="text-[14px] text-krem/85 leading-snug mb-4">
              alıcı
            </div>
            <div className="text-[12px] text-krem/60 leading-snug">
              Karar vermeden önce online görsele bakıyor
            </div>
            <div className="mt-4 pt-4 border-t border-krem/10 text-[10px] text-krem/35 font-mono tracking-wide">
              Kaynak: NAR & Zillow araştırmaları
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
