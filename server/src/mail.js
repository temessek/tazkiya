import { HttpError } from "./http.js";

// The sign-in email, in the reader's language. Plain text and a simple HTML version, no images, no tracking.
export function signInMail(link, lang) {
  const ar = lang !== "en";
  const subject = ar ? "رابط الدخول إلى تزكية" : "Your Tazkiya sign-in link";
  const lines = ar
    ? ["السلام عليكم،", "", "اضغط الرابط لتدخل إلى حسابك في تزكية. يعمل مرة واحدة خلال 15 دقيقة.", "", link, "",
       "إن لم تطلب الدخول فتجاهل هذه الرسالة، ولن يتغير شيء في حسابك.", "", "تزكية · tazkiya.family"]
    : ["Peace be upon you,", "", "Open this link to sign in to your Tazkiya account. It works once, within 15 minutes.", "", link, "",
       "If you did not ask to sign in, ignore this message; nothing changes in your account.", "", "Tazkiya · tazkiya.family"];
  const text = lines.join("\n");
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const dir = ar ? "rtl" : "ltr";
  const html = `<!doctype html><html lang="${ar ? "ar" : "en"}" dir="${dir}"><body style="font-family:Tahoma,Arial,sans-serif;font-size:16px;line-height:1.7;color:#24364b;background:#fbf7ef;padding:24px">
<div style="max-width:480px;margin:auto;background:#fff;border-radius:14px;padding:24px">
<p>${esc(lines[0])}</p><p>${esc(lines[2])}</p>
<p style="text-align:center;margin:28px 0"><a href="${esc(link)}" style="background:#24364b;color:#fff;text-decoration:none;padding:12px 26px;border-radius:10px;display:inline-block">${ar ? "ادخل إلى تزكية" : "Sign in to Tazkiya"}</a></p>
<p style="font-size:13px;color:#6b7a8c">${esc(lines[6])}</p>
<p style="font-size:13px;color:#6b7a8c">${esc(lines[8])}</p></div></body></html>`;
  return { subject, text, html };
}

// MAIL_MODE: "worker" sends through the tazkiya-mailer Worker (service binding MAILER, Cloudflare Email Service);
// "test" sends nothing (preview and local tests read the link from the response with the test key); "off" refuses.
export async function sendMail(env, to, msg) {
  const mode = env.MAIL_MODE || "off";
  if (mode === "test") return "test";
  if (mode !== "worker" || !env.MAILER) throw new HttpError(503, "email_unavailable");
  const r = await env.MAILER.fetch("https://mailer.internal/send", {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ to, subject: msg.subject, text: msg.text, html: msg.html }),
  });
  if (!r.ok) throw new HttpError(502, "email_failed");
  return "sent";
}
