export default function Footer() {
  return (
    <footer className="bg-toprak text-krem/70 py-12 px-6 border-t border-krem/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-krem mb-4">
              <span className="font-display text-2xl leading-none">X</span>
              <div className="leading-tight">
                <div className="text-sm font-medium">union medya</div>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed">
              Emlakta 360° Yeni Nesil Pazarlama. Arsa & arazi odaklı drone
              çekimi.
            </p>
          </div>

          <div>
            <div className="text-[13px] font-display font-medium tracking-wide text-krem/70 mb-4">
              HİZMETLER
            </div>
            <ul className="space-y-2 text-[14px]">
              <li><a href="#hizmetler" className="hover:text-pin transition-colors">Drone Çekimi</a></li>
              <li><a href="#hizmetler" className="hover:text-pin transition-colors">Sınır Overlay</a></li>
              <li><a href="#hizmetler" className="hover:text-pin transition-colors">Sanal Drone Kurgusu</a></li>
              <li><a href="#hizmetler" className="hover:text-pin transition-colors">Satışa Hazır Video</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-display font-medium tracking-wide text-krem/70 mb-4">
              KURUMSAL
            </div>
            <ul className="space-y-2 text-[14px]">
              <li><a href="#paketler" className="hover:text-pin transition-colors">Paketler</a></li>
              <li><a href="#surec" className="hover:text-pin transition-colors">Süreç</a></li>
              <li><a href="#sss" className="hover:text-pin transition-colors">SSS</a></li>
              <li><a href="#iletisim" className="hover:text-pin transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-display font-medium tracking-wide text-krem/70 mb-4">
              İLETİŞİM
            </div>
            <ul className="space-y-2 text-[14px]">
              <li>+90 541 843 15 18</li>
              <li>fizziomedia@gmail.com</li>
              <li>
                <a
                  href="https://instagram.com/unionmedya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pin transition-colors"
                >
                  @unionmedya
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 text-[12px] text-krem/40">
          <div>© 2026 Union Medya. Tüm hakları saklıdır.</div>
          <div className="flex gap-6">
            <a href="/gizlilik" className="hover:text-pin transition-colors">Gizlilik Politikası</a>
            <a href="/kvkk" className="hover:text-pin transition-colors">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
