const services = [
  {
    code: "01",
    title: "Profesyonel Drone Çekimi",
    desc: "Arsanız havadan görününce alıcı ne aldığını anlar. Sınır, çevre, manzara — hepsi tek karede.",
  },
  {
    code: "02",
    title: "Arsa Sınır Çizgisi",
    desc: "Alıcı 'burası benim' der. Parsel sınırları ve yola mesafe video üzerinde işaretlenir, soru kalmaz.",
  },
  {
    code: "03",
    title: "Profesyonel Video Kurgusu",
    desc: "Ham görüntü değil, satışa hazır hikaye. Müzik, renk, kurgu — alıcıyı arsaya bağlar.",
  },
  {
    code: "04",
    title: "Satış Videosu",
    desc: "Tek çekimden Instagram reels'i, ilanın videosu, WhatsApp'ta paylaşılacak kısa klip. Hepsi hazır.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-krem text-toprak py-24 px-6 border-t border-zeytin/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl">
            Çekimden ilana, <span className="italic">her format hazır.</span>
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
