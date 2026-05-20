export default function ProblemSolution() {
  return (
    <section className="bg-krem text-toprak py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Bölüm başlığı */}
        <div className="mb-16">
          <div className="font-mono text-[10px] tracking-[0.3em] text-zeytin mb-3">
            01 — DURUM ANALİZİ
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl">
            Düz fotoğrafla satılmayan arsa,{" "}
            <span className="italic">havadan farklı konuşur.</span>
          </h2>
        </div>

        {/* 3 sütun: Sorun — Sorun — Çözüm */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sorun 1 */}
          <div className="bg-white border border-zeytin/15 p-8 rounded-lg">
            <div className="text-[10px] font-mono tracking-[0.2em] text-zeytin/60 mb-4">
              SORUN · 01
            </div>
            <h3 className="font-medium text-lg mb-3">Sınır görünmüyor</h3>
            <p className="text-zeytin/80 leading-relaxed text-[15px]">
              Yerden çekilen fotoğraf arsanın gerçek büyüklüğünü, çevresini ve
              komşu yapılaşmayı göstermez. Alıcı &quot;ne aldığımı anlamadım&quot;
              der, telefonu kapatır.
            </p>
          </div>

          {/* Sorun 2 */}
          <div className="bg-white border border-zeytin/15 p-8 rounded-lg">
            <div className="text-[10px] font-mono tracking-[0.2em] text-zeytin/60 mb-4">
              SORUN · 02
            </div>
            <h3 className="font-medium text-lg mb-3">İlanlar birbirine benziyor</h3>
            <p className="text-zeytin/80 leading-relaxed text-[15px]">
              Yola mesafe, deniz/dağ manzarası, çevresel potansiyel ilanda
              görünmüyor. İlanınız onlarcası arasında sıradanlaşıyor, tıklanma
              oranı düşüyor.
            </p>
          </div>

          {/* Çözüm */}
          <div className="bg-toprak text-krem p-8 rounded-lg relative overflow-hidden">
            <div className="text-[10px] font-mono tracking-[0.2em] text-pin mb-4">
              ÇÖZÜM · UNION MEDYA
            </div>
            <h3 className="font-medium text-lg mb-3 text-krem">
              Havadan video + sınır overlay + drone fotoğraf
            </h3>
            <p className="text-krem/80 leading-relaxed text-[15px]">
              Alıcı arsayı zihninde &quot;yerleştirir&quot;, çevreyi ölçer,
              potansiyeli görür. Karar süresi kısalır, ciddi alıcı sayısı
              artar.
            </p>

            {/* Dekoratif teknik detay */}
            <div className="absolute top-6 right-6 font-mono text-[9px] tracking-[0.2em] text-pin/40">
              N40°45&apos; E29°55&apos;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
