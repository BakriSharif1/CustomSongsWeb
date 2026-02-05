import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const from = process.env.EMAIL_FROM ?? "BVKRI Songs <hello@bvkri-songs.com>";

export async function sendEmail({
  to,
  subject,
  html
}: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!resend) {
    console.warn("Resend is not configured. Skipping email.");
    return;
  }

  await resend.emails.send({
    from,
    to,
    subject,
    html
  });
}

export async function sendMagicLink({
  to,
  url
}: {
  to: string;
  url: string;
}) {
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6">
      <h2 style="color:#3B1F2B">Your BVKRI Songs sign-in link</h2>
      <p>Tap the button below to securely sign in.</p>
      <p><a href="${url}" style="display:inline-block;padding:12px 18px;border-radius:999px;background:#C4683A;color:#fff;text-decoration:none">Sign in</a></p>
      <p style="color:#6B5B62">If you did not request this, you can ignore this email.</p>
    </div>
  `;

  await sendEmail({
    to,
    subject: "Sign in to BVKRI Songs",
    html
  });
}
