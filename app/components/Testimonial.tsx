type Stat =
  | { kind: "number"; top: string; value: string; side?: string; bottom: string }
  | { kind: "lines"; lines: string[] };

const stats: Stat[] = [
  {
    kind: "number",
    top: "Video içerikli ilanlar",
    value: "4 Kat",
    bottom: "Daha fazla tıklanıyor",
  },
  {
    kind: "lines",
    lines: [
      "Alıcıların %85'i",
      "Karar vermeden önce görselin tutarlılığına bakıyor",
    ],
  },
  {
    kind: "number",
    top: "Video içeren ilanlar",
    value: "3 Kat",
    bottom: "Daha hızlı alıcı kararı",
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
              className="border border-pin/40 rounded-lg p-8 flex flex-col items-center justify-center text-center"
            >
              {stat.kind === "lines" ? (
                <div className="flex flex-col gap-3">
                  {stat.lines.map((line, j) => (
                    <span
                      key={j}
                      className="font-display text-3xl text-pin font-bold leading-snug"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              ) : (
                <>
                  {stat.top && (
                    <p className="font-sans text-[13px] text-krem/60 leading-snug mb-4">
                      {stat.top}
                    </p>
                  )}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-5xl md:text-6xl text-pin">
                      {stat.value}
                    </span>
                    {stat.side && (
                      <span className="font-display text-2xl text-pin">
                        {stat.side}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-[14px] text-krem/80 leading-snug">
                    {stat.bottom}
                  </p>
                </>
              )}
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
