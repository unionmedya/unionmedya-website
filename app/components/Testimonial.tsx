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

        {/* Alt güven istatistikleri */}
        <div className="mt-16 pt-12 border-t border-krem/10 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div>
            <div className="font-display text-4xl text-pin mb-2">3×</div>
            <div className="text-[12px] text-krem/60 leading-snug">
              daha hızlı satış<br />ortalaması
            </div>
          </div>
          <div>
            <div className="font-display text-4xl text-pin mb-2">48 sa</div>
            <div className="text-[12px] text-krem/60 leading-snug">
              brieften teslime<br />ortalama süre
            </div>
          </div>
          <div>
            <div className="font-display text-4xl text-pin mb-2">100%</div>
            <div className="text-[12px] text-krem/60 leading-snug">
              SHGM lisanslı<br />sigortalı uçuş
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
