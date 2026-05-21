const steps = [
  {
    n: "1",
    title: "Talep",
    desc: "Form veya telefon ile arsa konumunu ve ihtiyacınızı paylaşın. 24 saat içinde teklif sunalım.",
  },
  {
    n: "2",
    title: "Saha Uçuşu",
    desc: "2-3 gün içinde lisanslı pilot ekibimiz sahaya gider. Hava ve ışık koşullarını optimize ederiz.",
  },
  {
    n: "3",
    title: "Profesyonel Kurgu",
    desc: "Renk düzeltme, sınır overlay, sinematik geçişler. Tüm sosyal medya formatlarına optimize edilir.",
  },
  {
    n: "4",
    title: "48 Saatte Teslim",
    desc: "Bulut linki ile tüm dosyalara anında erişim. İhtiyaç olursa 1 ücretsiz revizyon hakkı dahil.",
  },
];

export default function Process() {
  return (
    <section id="surec" className="bg-toprak text-krem py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl">
            Talepten teslime <span className="italic text-pin">48 saat.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-12">
          {steps.map((step) => (
            <div key={step.n}>
              <div className="w-12 h-12 rounded-full bg-toprak border border-pin/40 flex items-center justify-center mb-6">
                <span className="font-display font-medium text-2xl text-krem/70">{step.n}</span>
              </div>
              <h3 className="font-medium text-lg mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-krem/90 text-[16px] leading-loose">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
