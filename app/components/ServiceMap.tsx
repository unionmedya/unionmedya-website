"use client";

// Harita projeksiyon parametreleri (SVG viewBox 0 0 1024 500)
const toX = (lon: number) => ((lon - 26) / 19) * 1024;
const toY = (lat: number) => ((42 - lat) / 6) * 500;

// 81 ilin merkez koordinatları [ad, enlem, boylam]
const PROVINCES: [string, number, number][] = [
  ["Adana",           37.00, 35.32],
  ["Adıyaman",        37.76, 38.28],
  ["Afyon",           38.76, 30.54],
  ["Ağrı",            39.72, 43.05],
  ["Amasya",          40.65, 35.83],
  ["Ankara",          39.93, 32.86],
  ["Antalya",         36.90, 30.71],
  ["Artvin",          41.18, 41.82],
  ["Aydın",           37.84, 27.84],
  ["Balıkesir",       39.65, 27.88],
  ["Bilecik",         40.15, 29.98],
  ["Bingöl",          38.88, 40.50],
  ["Bitlis",          38.40, 42.12],
  ["Bolu",            40.74, 31.61],
  ["Burdur",          37.72, 30.29],
  ["Bursa",           40.19, 29.06],
  ["Çanakkale",       40.15, 26.41],
  ["Çankırı",         40.60, 33.62],
  ["Çorum",           40.55, 34.96],
  ["Denizli",         37.78, 29.10],
  ["Diyarbakır",      37.91, 40.23],
  ["Edirne",          41.68, 26.56],
  ["Elazığ",          38.68, 39.22],
  ["Erzincan",        39.75, 39.50],
  ["Erzurum",         39.90, 41.27],
  ["Eskişehir",       39.78, 30.52],
  ["Gaziantep",       37.06, 37.38],
  ["Giresun",         40.91, 38.39],
  ["Gümüşhane",       40.46, 39.48],
  ["Hakkari",         37.57, 43.74],
  ["Hatay",           36.40, 36.36],
  ["Isparta",         37.76, 30.55],
  ["Mersin",          36.80, 34.63],
  ["İstanbul",        41.01, 28.96],
  ["İzmir",           38.42, 27.14],
  ["Kars",            40.61, 43.09],
  ["Kastamonu",       41.38, 33.78],
  ["Kayseri",         38.72, 35.49],
  ["Kırklareli",      41.74, 27.23],
  ["Kırşehir",        39.15, 34.17],
  ["Kocaeli",         40.76, 29.92],
  ["Konya",           37.87, 32.49],
  ["Kütahya",         39.42, 29.98],
  ["Malatya",         38.35, 38.32],
  ["Manisa",          38.62, 27.43],
  ["K.Maraş",         37.58, 36.94],
  ["Mardin",          37.31, 40.74],
  ["Muğla",           37.21, 28.36],
  ["Muş",             38.75, 41.50],
  ["Nevşehir",        38.63, 34.72],
  ["Niğde",           37.97, 34.68],
  ["Ordu",            40.98, 37.88],
  ["Rize",            41.02, 40.52],
  ["Sakarya",         40.77, 30.40],
  ["Samsun",          41.29, 36.33],
  ["Siirt",           37.93, 41.94],
  ["Sinop",           42.03, 35.15],
  ["Sivas",           39.75, 37.02],
  ["Tekirdağ",        40.97, 27.51],
  ["Tokat",           40.32, 36.55],
  ["Trabzon",         41.00, 39.73],
  ["Tunceli",         39.10, 39.55],
  ["Şanlıurfa",       37.16, 38.79],
  ["Uşak",            38.68, 29.41],
  ["Van",             38.49, 43.37],
  ["Yozgat",          39.82, 34.80],
  ["Zonguldak",       41.46, 31.80],
  ["Aksaray",         38.37, 34.04],
  ["Bayburt",         40.26, 40.23],
  ["Karaman",         37.18, 33.22],
  ["Kırıkkale",       39.85, 33.52],
  ["Batman",          37.89, 41.13],
  ["Şırnak",          37.52, 42.46],
  ["Bartın",          41.64, 32.34],
  ["Ardahan",         41.11, 42.70],
  ["Iğdır",           39.92, 44.05],
  ["Yalova",          40.65, 29.27],
  ["Karabük",         41.20, 32.62],
  ["Kilis",           36.72, 37.12],
  ["Osmaniye",        37.08, 36.25],
  ["Düzce",           40.84, 31.16],
];

const ACTIVE = new Set(["İstanbul", "Kocaeli", "Tekirdağ"]);

// İl sınırlarının yaklaşık dikdörtgen kutuları (harita SVG koordinatlarında)
const RAISED_PROVINCES = [
  {
    name: "Tekirdağ",
    // Doğu Trakya'nın güneyi — Tekirdağ ili yaklaşık sınırı
    points: "49,17 113,17 113,108 49,108",
  },
  {
    name: "İstanbul",
    // Boğaz iki yakası — İstanbul ili yaklaşık sınırı
    points: "147,60 213,60 213,103 147,103",
  },
  {
    name: "Kocaeli",
    // İzmit körfezi çevresi — Kocaeli ili yaklaşık sınırı
    points: "200,74 260,74 260,122 200,122",
  },
];

const cities = [
  { num: "01", name: "İstanbul", coord: "41.01°N · 28.96°E" },
  { num: "02", name: "Kocaeli",  coord: "40.85°N · 29.88°E" },
  { num: "03", name: "Tekirdağ", coord: "40.97°N · 27.51°E" },
];

export default function ServiceMap() {
  return (
    <section
      id="bolgeler"
      className="bg-toprak text-krem py-24 px-6 border-t border-krem/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-[10px] tracking-[0.3em] text-pin mb-3">
          HİZMET BÖLGELERİ
        </div>

        <p className="font-display text-lg md:text-xl text-krem/70 leading-relaxed mb-10 max-w-2xl">
          Şu an üç ilde aktif çekim yapıyoruz.
        </p>

        {/* Harita */}
        <div
          className="relative w-full mb-12 rounded-lg overflow-hidden border border-krem/10"
          style={{ background: "rgba(8,12,4,0.6)" }}
        >
          {/* Temel SVG haritası — tüm il sınırları */}
          <img
            src="/turkey-map.svg"
            alt="Türkiye hizmet haritası"
            className="w-full"
            style={{ aspectRatio: "1024 / 500", display: "block", opacity: 0.9 }}
          />

          {/* Overlay: kabarmış iller + il isimleri */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1024 500"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Yukarı kabarmış il efekti */}
              <filter id="raise" x="-40%" y="-40%" width="180%" height="180%">
                {/* Zemin gölgesi — ilin altına düşüyor gibi görünür */}
                <feDropShadow
                  dx="0"
                  dy="7"
                  stdDeviation="5"
                  floodColor="rgba(0,0,0,0.85)"
                  result="shadow"
                />
              </filter>

              {/* Aktif il yazısı için altın parlaması */}
              <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ── Kabarmış il kutuları ── */}
            {RAISED_PROVINCES.map((p) => (
              <g
                key={p.name}
                /* -6px yukarı kaydır → "kalkma" hissi */
                transform="translate(0,-6)"
                filter="url(#raise)"
              >
                <polygon
                  points={p.points}
                  fill="rgba(255,210,0,0.14)"
                  stroke="#FFD700"
                  strokeWidth="1.8"
                  strokeOpacity="0.85"
                  rx={4}
                />
                {/* Üst kenar — ışık yansıması */}
                <line
                  x1={parseInt(p.points.split(" ")[0].split(",")[0])}
                  y1={parseInt(p.points.split(" ")[0].split(",")[1])}
                  x2={parseInt(p.points.split(" ")[1].split(",")[0])}
                  y2={parseInt(p.points.split(" ")[1].split(",")[1])}
                  stroke="rgba(255,240,120,0.6)"
                  strokeWidth="2.5"
                />
              </g>
            ))}

            {/* ── Tüm il isimleri ── */}
            {PROVINCES.map(([name, lat, lon]) => {
              const x = toX(lon);
              const y = toY(lat);
              const active = ACTIVE.has(name);
              return (
                <text
                  key={name}
                  x={x}
                  y={active ? y - 6 : y} /* aktif iller yukarı kaymış */
                  fill={active ? "#FFD700" : "rgba(220,210,190,0.55)"}
                  fontSize={active ? 9 : 6}
                  fontFamily="'Courier New', monospace"
                  fontWeight={active ? "700" : "400"}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  letterSpacing={active ? 0.6 : 0}
                  filter={active ? "url(#text-glow)" : undefined}
                >
                  {name}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Şehir listesi */}
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
