import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // TODO: Gerçek e-posta gönderimi (Resend, SendGrid vb.) veya CRM entegrasyonu
    // Şimdilik konsola log atıyoruz, geliştirme aşamasında.
    console.log("[contact form]", {
      time: new Date().toISOString(),
      data,
    });

    // Basit doğrulama
    if (!data.name || !data.phone || !data.location) {
      return NextResponse.json(
        { error: "Zorunlu alanlar eksik" },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Bir hata oluştu" },
      { status: 500 }
    );
  }
}
