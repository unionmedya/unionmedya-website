# Union Medya — Web Sitesi

Emlakta 360° Yeni Nesil Pazarlama. Arsa & arazi odaklı drone çekimi sitesi.

## Teknoloji

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Inter + Cormorant Garamond + JetBrains Mono** (Google Fonts)

## Kurulum (yerel geliştirme)

Önkoşul: Node.js 18+

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini aç.

## Yayına Alma (Vercel)

1. Bu klasörü bir Git deposuna (GitHub) yükle
2. [vercel.com](https://vercel.com) hesabıyla giriş yap
3. "Import Project" → GitHub deponu seç
4. Otomatik build çalışır, 2 dakikada yayında olur
5. Vercel sana ücretsiz `unionmedya.vercel.app` adresi verir
6. Kendi domainini bağlamak için Vercel → Settings → Domains

## Yapı

```
app/
├── components/        — Bileşenler (Hero, Pricing, Contact vb.)
├── api/contact/       — Form gönderim API'si
├── globals.css        — Global stiller
├── layout.tsx         — Kök layout + SEO meta
└── page.tsx           — Ana sayfa
tailwind.config.ts     — Marka renkleri
```

## Marka Renkleri (Tailwind sınıfları)

- `bg-toprak` `#2E3B16` — ana zemin
- `bg-zeytin` `#4A5D24` — ikincil zemin
- `bg-krem` `#F2EBD8` — açık zemin
- `bg-pin` `#E0B82E` — vurgu (CTA)
- `bg-gece` `#1A1F0E` — koyu detay
- `bg-sis` `#A8B098` — muted

## Yapılacaklar Listesi

### Yayın öncesi gerekli:
- [ ] **Logo** ekle (`app/components/Navbar.tsx` ve `Footer.tsx` içindeki `X` placeholder'ı değiştir)
- [ ] **Telefon numarası** güncelle (Contact.tsx, Footer.tsx — `+90 5XX XXX XX XX`)
- [ ] **WhatsApp linki** güncelle (`https://wa.me/905XXXXXXXXX`)
- [ ] **E-posta adresi** güncelle (`info@unionmedya.com`)
- [ ] **Form gönderimi** için Resend veya SendGrid bağla (`app/api/contact/route.ts`)
- [ ] **Gerçek müşteri yorumu** ekle (Testimonial.tsx — şu an placeholder)
- [ ] **Domain** satın al ve Vercel'e bağla
- [ ] **Google Analytics** veya **Plausible** ekle

### Geliştirilebilir:
- [ ] Portfolyo galerisi (örnek işler)
- [ ] Blog (SEO için)
- [ ] Online randevu sistemi
- [ ] Müşteri paneli (teslim edilen videoları izleme)
- [ ] Çoklu dil desteği (İngilizce)

## Notlar

Form şu an konsola log atıyor. Üretim ortamında çalışması için:

1. [Resend](https://resend.com) hesabı aç
2. `npm install resend` yap
3. `.env.local` dosyasına `RESEND_API_KEY` ekle
4. `app/api/contact/route.ts` dosyasını güncelle (Resend ile e-posta gönderimi)
