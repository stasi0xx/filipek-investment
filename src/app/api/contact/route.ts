import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Nowy Relax <noreply@stanautomation.com>";
const NOTIFY_TO = "nowyrelax@fi-invest.pl";

export async function POST(request: NextRequest) {
  const { name, phone, email, message } = await request.json();

  if (!name || !phone || !email) {
    return NextResponse.json({ error: "Brak wymaganych pól." }, { status: 400 });
  }

  try {
    await Promise.all([
      // ── 1. Powiadomienie dla inwestora ────────────────────────────────────
      resend.emails.send({
        from: FROM,
        to: NOTIFY_TO,
        subject: `Nowe zapytanie: ${name}`,
        html: adminEmail({ name, phone, email, message }),
      }),

      // ── 2. Potwierdzenie dla klienta ──────────────────────────────────────
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "Dziękujemy za wiadomość — Nowy Relax",
        html: clientEmail({ name, message }),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "Błąd wysyłki." }, { status: 500 });
  }
}

// ─── Templates ────────────────────────────────────────────────────────────────

function wrap(body: string) {
  return `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Nowy Relax</title>
</head>
<body style="margin:0;padding:0;background:#F5F2ED;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F5F2ED;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
        ${body}
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function adminEmail({ name, phone, email, message }: {
  name: string; phone: string; email: string; message: string;
}) {
  return wrap(`
    <!-- Header -->
    <tr><td style="background:#14130F;border-radius:12px 12px 0 0;padding:36px 40px;">
      <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#C9B896;opacity:0.7;">Nowy Relax · Filipek Investment</p>
      <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:400;color:#FAF7F2;line-height:1.2;">Nowe zapytanie</h1>
    </td></tr>

    <!-- Body -->
    <tr><td style="background:#FFFFFF;padding:40px;">
      <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;color:#4A4540;">
        Klient wypełnił formularz kontaktowy na stronie <strong>nowyrelax.pl</strong>.
      </p>

      <!-- Data rows -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        ${[
          ["Imię i nazwisko", name],
          ["Telefon", phone],
          ["E-mail", email],
        ].map(([label, value], i) => `
        <tr>
          <td style="padding:14px 0;border-top:${i === 0 ? "none" : "1px solid #EDE9E3"};">
            <p style="margin:0 0 3px;font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#9E9189;">${label}</p>
            <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;font-weight:500;color:#14130F;">${value}</p>
          </td>
        </tr>`).join("")}

        <!-- Message -->
        <tr>
          <td style="padding:14px 0;border-top:1px solid #EDE9E3;">
            <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#9E9189;">Wiadomość</p>
            <div style="background:#F5F2ED;border-radius:8px;padding:16px 20px;">
              <p style="margin:0;font-family:Georgia,serif;font-size:15px;line-height:1.75;color:#4A4540;font-style:italic;">${message.replace(/\n/g, "<br/>")}</p>
            </div>
          </td>
        </tr>
      </table>

      <!-- CTA -->
      <div style="margin-top:32px;text-align:center;">
        <a href="tel:${phone.replace(/\s/g, "")}" style="display:inline-block;background:#14130F;color:#FAF7F2;font-family:Arial,sans-serif;font-size:14px;font-weight:500;text-decoration:none;padding:14px 28px;border-radius:100px;letter-spacing:0.02em;">Zadzwoń do klienta</a>
      </div>
    </td></tr>

    <!-- Footer -->
    <tr><td style="background:#F5F2ED;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;">
      <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#9E9189;">Filipek Investment Sp. z o.o. · nowyrelax@fi-invest.pl</p>
    </td></tr>
  `);
}

function clientEmail({ name, message }: { name: string; message: string }) {
  const firstName = name.split(" ")[0];
  return wrap(`
    <!-- Header -->
    <tr><td style="background:#14130F;border-radius:12px 12px 0 0;padding:36px 40px;">
      <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#C9B896;opacity:0.7;">Nowy Relax · Cicibór Duży</p>
      <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:400;color:#FAF7F2;line-height:1.2;">Dziękujemy za wiadomość</h1>
    </td></tr>

    <!-- Body -->
    <tr><td style="background:#FFFFFF;padding:40px;">
      <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:15px;line-height:1.75;color:#4A4540;">
        Dzień dobry ${firstName},
      </p>
      <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:15px;line-height:1.75;color:#4A4540;">
        Otrzymaliśmy Twoje zapytanie dotyczące inwestycji <strong>Nowy Relax</strong>.
        Odezwiemy się tak szybko, jak to możliwe — zwykle w ciągu kilku godzin.
      </p>

      <!-- Message recap -->
      <div style="background:#F5F2ED;border-radius:8px;padding:20px 24px;margin-bottom:32px;">
        <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#9E9189;">Twoja wiadomość</p>
        <p style="margin:0;font-family:Georgia,serif;font-size:15px;line-height:1.75;color:#4A4540;font-style:italic;">${message.replace(/\n/g, "<br/>")}</p>
      </div>

      <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:15px;line-height:1.75;color:#4A4540;">
        W razie pilnych pytań możesz się z nami skontaktować bezpośrednio:
      </p>
      <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;line-height:1.9;color:#4A4540;">
        <strong style="color:#14130F;">Telefon:</strong> <a href="tel:+48692404796" style="color:#7B6649;text-decoration:none;">+48 692 404 796</a><br/>
        <strong style="color:#14130F;">E-mail:</strong> <a href="mailto:nowyrelax@fi-invest.pl" style="color:#7B6649;text-decoration:none;">nowyrelax@fi-invest.pl</a>
      </p>
    </td></tr>

    <!-- Separator -->
    <tr><td style="background:#FFFFFF;padding:0 40px;">
      <div style="height:1px;background:#EDE9E3;"></div>
    </td></tr>

    <!-- Footer -->
    <tr><td style="background:#FFFFFF;border-radius:0 0 12px 12px;padding:28px 40px;text-align:center;">
      <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:14px;color:#14130F;font-style:italic;">Nowy Relax</p>
      <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#9E9189;">Filipek Investment Sp. z o.o. · Cicibór Duży</p>
    </td></tr>
  `);
}
