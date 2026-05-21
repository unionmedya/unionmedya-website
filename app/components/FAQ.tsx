"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Hangi şehirlerde hizmet veriyorsunuz?",
    a: "Birkaç şehirde aktif olarak hizmet veriyoruz. Lokasyonunuzu paylaşın, en uygun ekibi sahaya yönlendirelim. Belirli bir mesafenin dışındaki noktalarda yol gideri eklenebilir.",
  },
  {
    q: "Drone uçuşu yasal ve sigortalı mı?",
    a: "Tüm pilotlarımız Sivil Havacılık Genel Müdürlüğü (SHGM) lisanslıdır. Her uçuş için ekipman ve üçüncü taraf sigortası mevcuttur. Yasaklı bölgelerde uçuş yapmıyoruz, gerekli izinleri biz takip ederiz.",
  },
  {
    q: "Çekim sonrası video ve fotoğrafların hakları kimde?",
    a: "Tüm çekim materyallerinin kullanım hakları size aittir. Ticari amaçla, sosyal medyada ve ilan portallarında sınırsız kullanabilirsiniz. Biz portföy paylaşımı için sadece izninizle kullanırız.",
  },
  {
    q: "Hava koşulu çekimi etkilerse ne olur?",
    a: "Şiddetli rüzgar veya yağışta uçuş güvenli değildir. Bu durumda çekimi ücretsiz olarak en yakın uygun tarihe erteleriz. Müşteri için ek maliyet olmaz.",
  },
  {
    q: "Revizyon hakkım var mı?",
    a: "Profesyonel pakette 1, Premium pakette sınırsız ücretsiz revizyon hakkı vardır. Temel pakette ek revizyon talebi düşük ücretle eklenir.",
  },
  {
    q: "Ödeme nasıl alınıyor?",
    a: "Onaylı teklif sonrası %50 ön ödeme alınır, kalan %50 teslim sonrası tahsil edilir. Banka havalesi ve kredi kartı ile ödeme yapabilirsiniz. Fatura düzenlenir.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="sss" className="bg-krem text-toprak py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Karar vermeden önce <span className="italic">bilmek istedikleriniz.</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-zeytin/15 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zeytin/5 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-medium text-[15px] pr-4">{faq.q}</span>
                <span
                  className={`text-zeytin/50 text-2xl leading-none transition-transform duration-300 flex-shrink-0 ${
                    open === i ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-zeytin/80 text-[14px] leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
