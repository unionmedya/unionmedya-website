const services = [
  {
    code: "01",
    title: "Profesyonel Drone Çekimi",
    desc: "4K çözünürlükte havadan foto ve video. Arsanın sınırı, çevresi, manzarası tek karede.",
  },
  {
    code: "02",
    title: "Sınır & Kadastro Overlay",
    desc: "Çekim üzerine arsa sınırı, parsel bilgisi ve yola mesafe net şekilde işlenir.",
  },
  {
    code: "03",
    title: "Sanal Drone Kurgusu",
    desc: "Sinematik geçişler, profesyonel renk düzeltme. Sosyal medya ve ilan portalları için optimize.",
  },
  {
    code: "04",
    title: "Satışa Hazır Video",
    desc: "9:16 reels, 16:9 youtube, 1:1 instagram. Tek çekim, tüm formatlar, hazır müzikle teslim.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-krem text-toprak py-24 px-6 border-t border-zeytin/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl">
            Tek bir uçuşta, ilanınızın <span className="italic">tam donanımı.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-zeytin/15 border border-zeytin/15 rounded-lg overflow-hidden">
          {services.map((s) => (
            <div
              key={s.code}
              className="bg-krem p-8 hover:bg-white transition-colors duration-300 group"
            >
              <h3 className="font-display font-medium text-lg mb-3 leading-snug group-hover:text-toprak transition-colors">
                {s.title}
              </h3>
              <p className="font-sans text-zeytin/90 text-[16px] leading-loose">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
