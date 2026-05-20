import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Union Medya · Arsa & Arazi Drone Çekimi | Emlakta 360° Yeni Nesil Pazarlama",
  description:
    "Emlakçılar için profesyonel arsa drone çekimi. Sınır overlay, sanal tur, satışa hazır video. SHGM lisanslı pilot, sigortalı uçuş, 48 saatte teslim.",
  keywords: [
    "arsa drone çekimi",
    "arazi drone",
    "emlak drone",
    "drone fotoğraf",
    "arsa pazarlama",
    "emlak pazarlama",
    "havadan çekim",
    "Union Medya",
  ],
  openGraph: {
    title: "Union Medya · Arsa & Arazi Drone Çekimi",
    description: "Emlakta 360° Yeni Nesil Pazarlama",
    type: "website",
    locale: "tr_TR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
