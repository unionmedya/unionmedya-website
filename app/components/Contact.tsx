"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    package: "Profesyonel",
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      setForm({ name: "", phone: "", email: "", location: "", package: "Profesyonel", message: "" });
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="iletisim" className="bg-toprak text-krem py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Sol: Başlık + bilgi */}
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-pin mb-3">
              07 — TEKLİF AL
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              Arsanızı havaya kaldıralım, <span className="italic text-pin">teklifimiz 24 saat içinde.</span>
            </h2>
            <p className="text-krem/70 mb-12 leading-relaxed">
              Aşağıdaki formu doldurun, en uygun paket ve fiyat teklifimizi 24
              saat içinde size iletelim. Acil durumlarda telefonla doğrudan
              ulaşabilirsiniz.
            </p>

            {/* Birincil iletişim: telefon */}
            <div className="space-y-6">
              <a
                href="tel:+905418431518"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-md bg-pin/10 border border-pin/20 flex items-center justify-center flex-shrink-0 group-hover:bg-pin/20 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pin">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-mono tracking-[0.2em] text-krem/50 mb-1">
                    TELEFON
                  </div>
                  <div className="font-medium text-lg group-hover:text-pin transition-colors">
                    +90 541 843 15 18
                  </div>
                  <div className="text-[12px] text-krem/50 mt-1">
                    Hafta içi 09:00 — 19:00
                  </div>
                </div>
              </a>

              {/* İkincil: WhatsApp */}
              <a
                href="https://wa.me/905418431518"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-md bg-krem/5 border border-krem/15 flex items-center justify-center flex-shrink-0 group-hover:bg-krem/10 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-krem/70">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-mono tracking-[0.2em] text-krem/50 mb-1">
                    WHATSAPP
                  </div>
                  <div className="font-medium text-[15px] group-hover:text-krem transition-colors">
                    Hızlı soru için
                  </div>
                  <div className="text-[12px] text-krem/50 mt-1">
                    Hızlıca dönüyoruz
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Sağ: Form */}
          <div>
            <form
              onSubmit={onSubmit}
              className="bg-krem text-toprak p-8 rounded-lg space-y-5"
            >
              <div className="font-mono text-[10px] tracking-[0.3em] text-zeytin mb-2">
                TEKLİF FORMU
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Ad Soyad"
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <Input
                  label="Telefon"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
              </div>

              <Input
                label="E-posta"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />

              <Input
                label="Arsa Konumu (şehir/ilçe)"
                required
                value={form.location}
                onChange={(v) => setForm({ ...form, location: v })}
              />

              <div>
                <label className="block text-[12px] font-medium text-zeytin mb-2 tracking-wide">
                  İLGİLENDİĞİNİZ PAKET
                </label>
                <select
                  value={form.package}
                  onChange={(e) => setForm({ ...form, package: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zeytin/20 rounded-md focus:outline-none focus:border-toprak text-[14px]"
                >
                  <option>Temel</option>
                  <option>Profesyonel</option>
                  <option>Premium</option>
                  <option>Henüz emin değilim</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-medium text-zeytin mb-2 tracking-wide">
                  EK NOT
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-zeytin/20 rounded-md focus:outline-none focus:border-toprak text-[14px] resize-none"
                  placeholder="Arsanızın büyüklüğü, özel istekler, çekim için tercih ettiğiniz tarih..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-toprak text-krem py-4 rounded-md font-medium hover:bg-zeytin transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Gönderiliyor..." : "Teklif al"}
              </button>

              {status === "ok" && (
                <div className="text-[13px] text-toprak bg-pin/20 p-3 rounded-md">
                  Talebiniz alındı. 24 saat içinde dönüş yapacağız.
                </div>
              )}
              {status === "err" && (
                <div className="text-[13px] text-red-700 bg-red-50 p-3 rounded-md">
                  Bir hata oluştu. Lütfen telefonla ulaşın.
                </div>
              )}

              <div className="text-[11px] text-zeytin/60 leading-relaxed">
                Form bilgileriniz sadece teklif iletişimi için kullanılır,
                üçüncü kişilerle paylaşılmaz.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-[12px] font-medium text-zeytin mb-2 tracking-wide">
        {label.toUpperCase()}
        {required && <span className="text-pin ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-white border border-zeytin/20 rounded-md focus:outline-none focus:border-toprak text-[14px]"
      />
    </div>
  );
}
