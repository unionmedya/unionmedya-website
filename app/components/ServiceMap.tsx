/**
 * Hizmet Bölgeleri — sade tipografi.
 * Üç aktif il büyük Outfit fontuyla, sıra numarası ve koordinat ile.
 */
export default function ServiceMap() {
  const cities = [
    { num: "01", name: "İstanbul", coord: "41.01°N · 28.96°E" },
    { num: "02", name: "Kocaeli", coord: "40.85°N · 29.88°E" },
    { num: "03", name: "Tekirdağ", coord: "40.97°N · 27.51°E" },
  ];

  return (
    <section
      id="bolgeler"
      className="bg-toprak text-krem py-24 px-6 border-t border-krem/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-[10px] tracking-[0.3em] text-pin mb-3">
          HİZMET BÖLGELERİ
        </div>

        <p className="font-display text-lg md:text-xl text-krem/70 leading-relaxed mb-12 max-w-2xl">
          Şu an üç ilde aktif çekim yapıyoruz.
        </p>

        <div className="flex flex-wrap gap-x-16 gap-y-12 mb-8 pb-8 border-b border-krem/15">
          {cities.map((c) => (
            <div key={c.name}>
              <div className="font-mono text-[10px] text-pin/70 tracking-[0.2em] mb-1">
                {c.num}
              </div>
              <div className="font-display text-4xl md:text-5xl font-medium leading-none">
                {c.name}
              </div>
              <div className="font-mono text-[10px] text-krem/40 tracking-wider mt-2">
                {c.coord}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-krem/50 max-w-xl">
          Bölgenizde değil misiniz? Yine de yazın — kapsama alanımızı sürekli
          genişletiyoruz.
        </p>
      </div>
    </section>
  );
}
