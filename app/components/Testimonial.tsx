export default function Testimonial() {
  return (
    <section className="bg-toprak text-krem py-24 px-6 border-t border-krem/5">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
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
