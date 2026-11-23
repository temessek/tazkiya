// tazkiya-mailer: a tiny Worker that sends the sign-in email through Cloudflare Email Service.
// It has no public route (workers_dev = false, no routes): only the Pages project reaches it, through its service binding.
// Pages Functions cannot hold the send_email binding themselves, hence this Worker.

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]{1,64}@[a-z0-9.-]{1,190}\.[a-z]{2,63}$/i;

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (req.method !== "POST" || url.pathname !== "/send") return new Response(null, { status: 404 });
    let m; try { m = await req.json(); } catch { return new Response(null, { status: 400 }); }
    const ok = m && typeof m.to === "string" && m.to.length <= 254 && EMAIL_RE.test(m.to)
      && typeof m.subject === "string" && m.subject.length <= 200
      && typeof m.text === "string" && m.text.length <= 4000 && typeof m.html === "string" && m.html.length <= 8000;
    if (!ok) return new Response(null, { status: 400 });
    try {
      await env.EMAIL.send({
        to: m.to,
        from: { email: env.FROM_ADDRESS, name: "Tazkiya · تزكية" },
        subject: m.subject, text: m.text, html: m.html,
      });
      return Response.json({ ok: true });
    } catch (e) {
      // the recipient address is never logged
      console.error("send failed", e && e.name, e && String(e.message).slice(0, 160));
      return new Response(null, { status: 502 });
    }
  },
};
