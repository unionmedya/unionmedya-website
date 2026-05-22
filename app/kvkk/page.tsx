import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni · Union Medya",
  description: "Union Medya kişisel verilerin korunması kanunu aydınlatma metni.",
  robots: { index: false, follow: false },
};

export default function KVKKPage() {
  return (
    <main className="bg-toprak text-krem min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-krem/50 hover:text-pin transition-colors text-sm mb-12"
        >
          ← Ana Sayfaya Dön
        </a>

        <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
          Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni
        </h1>
        <p className="text-krem/50 text-sm mb-12">Son güncelleme: Mayıs 2026</p>

        <hr className="border-krem/10 mb-12" />

        <div className="space-y-10 font-sans text-[16px] text-krem/85 leading-loose">

          <section>
            <h2 className="font-display text-xl text-krem mb-3">1. Veri Sorumlusu</h2>
            <p>
              Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu
              ("KVKK") kapsamında <strong className="text-krem">Union Medya</strong>{" "}
              tarafından hazırlanmıştır. Veri sorumlusu sıfatıyla iletişim
              bilgilerimiz aşağıdaki gibidir:
            </p>
            <ul className="mt-4 space-y-1 text-krem/70">
              <li>Ticaret Unvanı: Union Medya</li>
              <li>E-posta: fizziomedia@gmail.com</li>
              <li>Telefon: +90 541 843 15 18</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">2. İşlenen Kişisel Veriler</h2>
            <p>
              Web sitemizde yer alan iletişim formu aracılığıyla aşağıdaki kişisel
              verileriniz toplanmaktadır:
            </p>
            <ul className="mt-4 space-y-1 list-disc list-inside text-krem/70">
              <li>Ad ve soyad</li>
              <li>Telefon numarası</li>
              <li>E-posta adresi</li>
              <li>Arsa konumu (şehir / ilçe)</li>
              <li>İlgilenilen hizmet paketi ve ek notlar</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">3. Kişisel Verilerin İşlenme Amacı</h2>
            <p>Toplanan veriler yalnızca aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="mt-4 space-y-1 list-disc list-inside text-krem/70">
              <li>Teklif hazırlama ve fiyat bilgisi iletme</li>
              <li>Çekim randevusu planlaması ve koordinasyonu</li>
              <li>Hizmet sonrası destek ve iletişim</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">4. Kişisel Verilerin İşlenme Hukuki Dayanağı</h2>
            <p>
              Kişisel verileriniz; KVKK'nın 5. maddesi uyarınca bir sözleşmenin
              kurulması veya ifasıyla doğrudan ilgili olması ve veri sorumlusunun
              meşru menfaatlerinin korunması hukuki sebeplerine dayanılarak
              işlenmektedir. İletişim formu doldurularak iletişim kurulması, bu
              işleme için açık rıza yerine geçmektedir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">5. Kişisel Verilerin Aktarılması</h2>
            <p>
              Kişisel verileriniz; üçüncü kişi, kurum veya kuruluşlarla
              paylaşılmamaktadır. Verileriniz yalnızca hizmet sürecinin
              yürütülmesi amacıyla Union Medya bünyesinde işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">6. Kişisel Verilerin Saklanma Süresi</h2>
            <p>
              Kişisel verileriniz, hizmet ilişkisinin sona ermesinden itibaren
              yasal yükümlülükler kapsamında en fazla 3 yıl süreyle saklanacak,
              bu sürenin sonunda güvenli biçimde silinecek ya da anonim hale
              getirilecektir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">7. Veri Sahibinin Hakları</h2>
            <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul className="mt-4 space-y-1 list-disc list-inside text-krem/70">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme</li>
              <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
              <li>KVKK'da öngörülen koşullar çerçevesinde verilerin silinmesini isteme</li>
              <li>İşlemenin otomatik sistemler aracılığıyla yapılması halinde aleyhte bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı işleme nedeniyle uğranılan zararın tazmin edilmesini talep etme</li>
            </ul>
            <p className="mt-4">
              Bu haklarınızı kullanmak için{" "}
              <a
                href="mailto:fizziomedia@gmail.com"
                className="text-pin hover:underline"
              >
                fizziomedia@gmail.com
              </a>{" "}
              adresine e-posta gönderebilirsiniz.
            </p>
          </section>

        </div>

        <hr className="border-krem/10 mt-16 mb-8" />
        <p className="text-krem/35 text-sm font-sans">
          © 2026 Union Medya. Bu metin yürürlükteki KVKK mevzuatı kapsamında
          hazırlanmıştır.
        </p>
      </div>
    </main>
  );
}
