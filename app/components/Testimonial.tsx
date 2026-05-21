"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    label: "Video içerikli ilanlar daha fazla tıklanıyor",
    value: "%403",
    fill: 100,
    delay: "0ms",
  },
  {
    label: "Video içeren ilanlar daha hızlı satılıyor",
    value: "%40",
    fill: 40,
    delay: "200ms",
  },
  {
    label: "Alıcılar karar vermeden önce online görsele bakıyor",
    value: "%85",
    fill: 85,
    delay: "400ms",
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
      <div className="max-w-3xl mx-auto space-y-10">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="flex justify-between items-baseline mb-3">
              <p className="font-sans text-[14px] text-krem/75 leading-snug">
                {stat.label}
              </p>
              <span className="font-display text-3xl text-pin ml-6 shrink-0">
                {stat.value}
              </span>
            </div>
            <div className="h-[6px] bg-krem/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-pin rounded-full"
                style={{
                  width: started ? `${stat.fill}%` : "0%",
                  transition: `width 1s ease-out ${stat.delay}`,
                }}
              />
            </div>
            <p className="mt-2 text-[11px] text-krem/35 font-sans">
              Kaynak: NAR &amp; Zillow araştırmaları
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
