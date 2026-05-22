import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası · Union Medya",
  description: "Union Medya gizlilik politikası ve çerez kullanımı hakkında bilgi.",
  robots: { index: false, follow: false },
};

export default function GizlilikPage() {
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
          Gizlilik Politikası
        </h1>
        <p className="text-krem/50 text-sm mb-12">Son güncelleme: Mayıs 2026</p>

        <hr className="border-krem/10 mb-12" />

        <div className="space-y-10 font-sans text-[16px] text-krem/85 leading-loose">

          <section>
            <h2 className="font-display text-xl text-krem mb-3">1. Genel Bakış</h2>
            <p>
              Bu Gizlilik Politikası, <strong className="text-krem">Union Medya</strong>{" "}
              web sitesini (unionmedya.com) ziyaret ettiğinizde kişisel
              verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu
              açıklamaktadır. Sitemizi kullanarak bu politikayı kabul etmiş
              sayılırsınız.
            </p>
            <ul className="mt-4 space-y-1 text-krem/70">
              <li>Şirket: Union Medya</li>
              <li>E-posta: fizziomedia@gmail.com</li>
              <li>Telefon: +90 541 843 15 18</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">2. Toplanan Bilgiler</h2>
            <p>
              Web sitemiz aracılığıyla yalnızca siz bize ilettiğinizde kişisel
              veri toplamaktayız. İletişim formu doldurulduğunda:
            </p>
            <ul className="mt-4 space-y-1 list-disc list-inside text-krem/70">
              <li>Ad ve soyad</li>
              <li>Telefon numarası</li>
              <li>E-posta adresi</li>
              <li>Arsa konumu bilgisi</li>
              <li>İlgilenilen hizmet paketi ve notlar</li>
            </ul>
            <p className="mt-4">
              Bu bilgiler yalnızca tarafınıza teklif sunmak ve iletişim kurmak
              amacıyla kullanılmaktadır.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">3. Çerez Kullanımı</h2>
            <p>
              Web sitemiz teknik olarak zorunlu çerezler dışında herhangi bir
              izleme veya analitik çerez kullanmamaktadır. Zorunlu çerezler
              sitenin düzgün çalışması için gereklidir ve kişisel veri
              içermez. Tarayıcı ayarlarınızdan çerezleri devre dışı
              bırakabilirsiniz; ancak bu durumda sitenin bazı işlevleri
              çalışmayabilir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">4. Verilerin Kullanım Amacı</h2>
            <p>Toplanan kişisel veriler yalnızca şu amaçlarla kullanılır:</p>
            <ul className="mt-4 space-y-1 list-disc list-inside text-krem/70">
              <li>Size özel fiyat teklifi hazırlama</li>
              <li>Çekim tarihi ve lojistik koordinasyonu</li>
              <li>Hizmet kalitesini artırmaya yönelik iç değerlendirmeler</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">5. Üçüncü Taraflarla Paylaşım</h2>
            <p>
              Kişisel verileriniz hiçbir koşulda üçüncü taraflara, reklam
              ağlarına veya veri aracılarına satılmaz ya da kiralanmaz.
              Verileriniz yalnızca Union Medya bünyesinde işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">6. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizi yetkisiz erişim, değiştirme, ifşa etme veya
              imhaya karşı korumak için endüstri standardı teknik ve idari
              önlemler uygulamaktayız. Form verileri şifreli bağlantı (HTTPS)
              üzerinden iletilmektedir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">7. Veri Saklama Süresi</h2>
            <p>
              İletişim formu aracılığıyla iletilen veriler, hizmet ilişkisi
              sona erdikten sonra en fazla 3 yıl süreyle saklanmakta; bu
              sürenin dolmasıyla birlikte güvenli biçimde silinmekte veya anonim
              hale getirilmektedir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">8. Kullanıcı Hakları</h2>
            <p>Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:</p>
            <ul className="mt-4 space-y-1 list-disc list-inside text-krem/70">
              <li>Verilerinize erişim talep etme</li>
              <li>Hatalı verilerin düzeltilmesini isteme</li>
              <li>Verilerinizin silinmesini talep etme ("unutulma hakkı")</li>
              <li>İşleme itiraz etme</li>
              <li>Veri taşınabilirliği talep etme</li>
            </ul>
            <p className="mt-4">
              Talepleriniz için{" "}
              <a
                href="mailto:fizziomedia@gmail.com"
                className="text-pin hover:underline"
              >
                fizziomedia@gmail.com
              </a>{" "}
              adresine e-posta gönderebilirsiniz. En geç 30 gün içinde yanıt
              verilecektir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">9. Politika Güncellemeleri</h2>
            <p>
              Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler
              bu sayfada yayımlanacak olup önemli değişiklikler e-posta ile
              bildirilecektir. Siteyi kullanmaya devam etmeniz güncel politikayı
              kabul ettiğiniz anlamına gelir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-krem mb-3">10. İletişim</h2>
            <p>
              Bu gizlilik politikasıyla ilgili sorularınız için bizimle
              iletişime geçebilirsiniz:
            </p>
            <ul className="mt-4 space-y-1 text-krem/70">
              <li>
                E-posta:{" "}
                <a href="mailto:fizziomedia@gmail.com" className="text-pin hover:underline">
                  fizziomedia@gmail.com
                </a>
              </li>
              <li>Telefon: +90 541 843 15 18</li>
            </ul>
          </section>

        </div>

        <hr className="border-krem/10 mt-16 mb-8" />
        <p className="text-krem/35 text-sm font-sans">
          © 2026 Union Medya. Tüm hakları saklıdır.
        </p>
      </div>
    </main>
  );
}
