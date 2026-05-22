const packages = [
  {
    name: "Temel",
    code: "PKG · 01",
    fromPrice: "₺2.500",
    desc: "Tek arsa, hızlı teslim. Küçük parseller için ideal.",
    features: [
      "15 drone fotoğraf (4K)",
      "1 dakika ham video",
      "1 sosyal medya formatı",
      "48 saatte teslim",
    ],
    featured: false,
  },
  {
    name: "Profesyonel",
    code: "PKG · 02",
    fromPrice: "₺4.500",
    desc: "Çoğu emlakçının tercihi. Kapsamlı paket, kurgulu çıktı.",
    features: [
      "30 drone fotoğraf (4K)",
      "2 dk kurgulu video + müzik",
      "Sınır & yola mesafe overlay",
      "3 sosyal medya formatı (9:16, 16:9, 1:1)",
      "1 ücretsiz revizyon",
    ],
    featured: true,
  },
  {
    name: "Premium",
    code: "PKG · 03",
    fromPrice: "₺7.500",
    desc: "Büyük arazi, lüks proje, geliştirici sunumu için.",
    features: [
      "50+ drone fotoğraf (4K + RAW)",
      "3 dk sinematik kurgu",
      "3D arazi haritası",
      "Sanal tur entegrasyonu",
      "Kadastro & parsel detayı",
      "3 ücretsiz revizyon",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="paketler" className="bg-krem text-toprak py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl mb-4">
            Şeffaf başlangıç fiyatları, <span className="italic">projeye özel teklif.</span>
          </h2>
          <p className="text-zeytin/70 max-w-2xl">
            Her arsa farklı koşul gerektirir. Aşağıdaki fiyatlar başlangıç
            ücretleridir, kesin fiyat keşif sonrası belirlenir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative p-8 rounded-lg flex flex-col ${
                pkg.featured
                  ? "bg-toprak text-krem border-2 border-pin"
                  : "bg-white border border-zeytin/15"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-8 bg-pin text-gece text-[11px] font-medium px-3 py-1 rounded-md tracking-wide">
                  EN ÇOK TERCİH EDİLEN
                </div>
              )}

              <h3 className="font-display text-3xl mb-2">{pkg.name}</h3>
              <p
                className={`text-[16px] mb-6 leading-loose ${
                  pkg.featured ? "text-krem/90" : "text-zeytin/70"
                }`}
              >
                {pkg.desc}
              </p>

              <div className="mb-8 pb-8 border-b border-current/10">
                <div
                  className={`text-[11px] mb-1 ${
                    pkg.featured ? "text-krem/50" : "text-zeytin/50"
                  }`}
                >
                  Başlangıç fiyatı
                </div>
                <div className="font-display text-4xl">
                  {pkg.fromPrice}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-[16px] ${
                      pkg.featured ? "text-krem/85" : "text-zeytin/85"
                    }`}
                  >
                    <span
                      className={`mt-1 ${pkg.featured ? "text-pin" : "text-zeytin"}`}
                    >
                      ◦
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#iletisim"
                className={`text-center py-3 rounded-md font-medium transition-colors ${
                  pkg.featured
                    ? "bg-pin text-gece hover:bg-pin/90"
                    : "border border-toprak text-toprak hover:bg-toprak hover:text-krem"
                }`}
              >
                Bu paket için teklif al
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
