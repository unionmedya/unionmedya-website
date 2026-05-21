export default function ProblemSolution() {
  return (
    <section className="bg-krem text-toprak py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Bölüm başlığı */}
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl">
            Düz fotoğrafla satılmayan arsa,{" "}
            <span className="italic">havadan farklı konuşur.</span>
          </h2>
        </div>

        {/* 3 sütun: Sorun — Sorun — Çözüm */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sorun 1 */}
          <div className="bg-white border border-zeytin/15 p-8 rounded-lg">
            <h3 className="font-display font-medium text-lg mb-3">Sınır görünmüyor</h3>
            <p className="font-sans text-zeytin/90 leading-loose text-[15px]">
              Yerden çekilen fotoğraf arsanın gerçek büyüklüğünü, çevresini ve
              komşu yapılaşmayı göstermez. Alıcı &quot;ne aldığımı anlamadım&quot;
              der, telefonu kapatır.
            </p>
          </div>

          {/* Sorun 2 */}
          <div className="bg-white border border-zeytin/15 p-8 rounded-lg">
            <h3 className="font-display font-medium text-lg mb-3">İlanlar birbirine benziyor</h3>
            <p className="font-sans text-zeytin/90 leading-loose text-[15px]">
              Yola mesafe, deniz/dağ manzarası, çevresel potansiyel ilanda
              görünmüyor. İlanınız onlarcası arasında sıradanlaşıyor, tıklanma
              oranı düşüyor.
            </p>
          </div>

          {/* Çözüm */}
          <div className="bg-toprak text-krem p-8 rounded-lg relative overflow-hidden">
            <h3 className="font-display font-medium text-lg mb-3 text-krem">
              Havadan video + sınır overlay + drone fotoğraf
            </h3>
            <p className="font-sans text-krem/90 leading-loose text-[15px]">
              Alıcı arsayı zihninde &quot;yerleştirir&quot;, çevreyi ölçer,
              potansiyeli görür. Karar süresi kısalır, ciddi alıcı sayısı
              artar.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
