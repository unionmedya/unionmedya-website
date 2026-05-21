"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "4 Kat",
    fill: 100,
    delay: "0ms",
    label: "Video içerikli ilanlar daha fazla tıklanıyor",
  },
  {
    value: "%85",
    fill: 85,
    delay: "150ms",
    label: "Alıcılar karar vermeden önce görselin tutarlılığına bakıyor",
  },
  {
    value: "%40",
    fill: 40,
    delay: "300ms",
    label: "Video içeren ilanlar daha hızlı satılıyor",
  },
];

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-toprak text-krem py-24 px-6 border-t border-krem/5"
    >
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-6 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="font-display text-3xl md:text-5xl text-pin mb-5">
                {stat.value}
              </div>

              <div className="relative w-full h-40 md:h-56 bg-krem/10 rounded-sm overflow-hidden">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-pin"
                  style={{
                    height: started ? `${stat.fill}%` : "0%",
                    transition: `height 1.2s ease-out ${stat.delay}`,
                  }}
                />
              </div>

              <p className="font-sans text-[16px] text-krem/90 leading-loose mt-4">
                {stat.label}
              </p>

              <p className="mt-3 text-[10px] text-krem/35 font-sans">
                Kaynak: NAR &amp; Zillow araştırmaları
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
