const stats = [
  {
    value: "4 Kat",
    label: "Video içerikli ilanlar daha fazla tıklanıyor",
  },
  {
    value: "%85",
    label: "Karar vermeden önce görselin tutarlılığına bakıyor",
  },
  {
    value: "3 Kat",
    label: "Daha hızlı alıcı kararı",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-toprak text-krem py-24 px-6 border-t border-krem/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-krem leading-tight mb-8">
            Drone&apos;lu İlanlar
          </h2>
          <hr className="border-krem/15" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border border-pin/40 rounded-lg p-8 flex flex-col items-center text-center"
            >
              <div className="font-display text-5xl md:text-6xl text-pin mb-4">
                {stat.value}
              </div>
              <p className="font-sans text-[15px] text-krem/80 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] text-krem/35 font-sans">
          Kaynak: NAR &amp; Zillow araştırması
        </p>
      </div>
    </section>
  );
}
