/* Suggest an improvement (owner request, 27 Nov 2026; suggestions only, one text field and no kind to choose, owner
 * correction the same day): a calm, always-visible place to suggest an improvement. Sent to POST /api/feedback; no account is needed.
 * Adult edition: a side tab on wide screens (>= 1280 px, in the free margin), and below that a labelled item at the end of
 * the tab bar (the bottom bar on phones, the top navigation from 900 px). Neither covers the page.
 * Children's edition: nothing on any child's screen (no free text from children); the form is on the parents' page
 * (for adults), opened from any [data-fb-open] button there.
 * Self-contained: its own small stylesheet (built on the app's colour tokens), its own <dialog>. User text is only ever
 * set as textContent or an input's value, never as markup. */
(function () {
  "use strict";
  const MAX = 1000;
  const T = {
    ar: {
      entry: "اقتراح أو تحسين", nav: "اقتراح", title: "اقتراح أو تحسين",
      intro: "ما الذي نحسّنه في تزكية؟ اكتب اقتراحك بكلماتك، ونحن نقرأ كل اقتراح.",
      text: "اقتراحك", ph: "اكتب هنا…", email: "بريدك إن أردت ردًّا", emailNote: "اختياري. اتركه فارغًا إن لم تحتج ردًّا.",
      contact: "يمكنكم مراسلتي على بريد حسابي", send: "أرسل", sending: "جارٍ الإرسال…", close: "إغلاق",
      priv: "نحفظ الاقتراح والشاشة التي أرسلته منها، والبريد إن كتبته. لا نحفظ عنوانك ولا حسابك إلا إن أذنت.", privL: "الخصوصية",
      thanks: "شكرًا لك، وصلنا اقتراحك.", thanksSub: "نقرأ الاقتراحات كلها، ومنها نختار ما نحسّنه.", again: "اقتراح آخر",
      eText: "اكتب اقتراحك أولًا.", eEmail: "هذا البريد لا يبدو صحيحًا.", eRate: "وصلتنا منك رسائل كثيرة في وقت قصير. جرّب بعد قليل.",
      eNet: "تعذّر الإرسال. تحقّق من الاتصال وجرّب مرة أخرى.",
    },
    en: {
      entry: "Suggest an improvement", nav: "Suggest", title: "Suggest an improvement",
      intro: "What should we improve in Tazkiya? Write your suggestion in your own words; we read every one.",
      text: "Your suggestion", ph: "Write here…", email: "Your email, if you'd like a reply", emailNote: "Optional. Leave it empty if you need no reply.",
      contact: "You may contact me at my account email", send: "Send", sending: "Sending…", close: "Close",
      priv: "We keep the suggestion, the screen you sent it from, and the email if you give one. Not your address, and not your account unless you allow it.", privL: "Privacy",
      thanks: "Thank you, your suggestion reached us.", thanksSub: "We read all of them and choose what to improve from them.", again: "Another suggestion",
      eText: "Write your suggestion first.", eEmail: "This email doesn't look right.", eRate: "Many messages from you in a short time. Please try again shortly.",
      eNet: "Couldn't send. Check the connection and try again.",
    },
  };
  const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]{1,64}@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;
  // a speech bubble with a question mark, in the tab icons' line style; in Arabic it is mirrored, so the mark reads «؟» (owner request, 27 Nov 2026)
  const ICON = '<svg class="fb-i" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 4.5h14A1.5 1.5 0 0 1 20.5 6v9a1.5 1.5 0 0 1-1.5 1.5h-8l-4 3.5v-3.5H5A1.5 1.5 0 0 1 3.5 15V6A1.5 1.5 0 0 1 5 4.5z"/><path d="M9.8 8.7a2.3 2.3 0 1 1 3.2 2.2c-.6.3-1 .8-1 1.4v.2"/><path d="M12 14.6h.01" stroke-width="2.2"/></svg>';
  const CSS = `
.fb-tab, .tabs .fb-nav { display: none; }
body[data-ed="adult"] .tabs .fb-nav { display: flex; }
@media (min-width: 1280px) {
  body[data-ed="adult"] .tabs .fb-nav { display: none; }
  body[data-ed="adult"] .fb-tab { display: flex; }
}
.tabs .fb-nav { flex: 1; max-width: 140px; flex-direction: column; align-items: center; justify-content: center; gap: 2px; border: 0; background: none; padding: 0;
  color: var(--muted, rgba(36,54,75,.78)); font-family: inherit; font-size: 12.5px; line-height: 1.6; cursor: pointer; }
.tabs .fb-nav svg { width: 24px; height: 24px; }
@media (min-width: 900px) {
  .tabs .fb-nav { flex: none; max-width: none; flex-direction: row; gap: 6px; padding: 0 12px; font-size: 14px; border-radius: 99px; height: 40px; align-self: center; }
  .tabs .fb-nav svg { width: 20px; height: 20px; }
}
.fb-tab { position: fixed; z-index: 19; right: 0; left: auto; top: 50%; transform: translateY(-50%); writing-mode: vertical-rl; align-items: center; gap: 8px;
  padding: 16px 9px; border: 1.5px solid var(--line, rgba(36,54,75,.16)); border-right: 0; border-radius: 14px 0 0 14px; background: var(--card, #fdf3e8);
  color: var(--ink, #24364b); font-family: inherit; font-weight: 600; font-size: 14px; line-height: 1.2; cursor: pointer; box-shadow: 0 6px 22px rgba(36,54,75,.10); letter-spacing: .01em; }
.fb-tab:hover, .fb-tab:focus-visible { background: var(--paper, #fbe9d6); }
.fb-tab svg { flex: none; width: 22px; height: 22px; }
[dir="rtl"] svg.fb-i { transform: scaleX(-1); }
[dir="rtl"] [dir="ltr"] svg.fb-i { transform: none; }
[data-fb-open] { gap: 8px; }
[data-fb-open] svg.fb-i { flex: none; width: 20px; height: 20px; }
body.sheet-open .fb-tab, body.intro-open .fb-tab { visibility: hidden; }
.fb-dlg { border: 0; padding: 0; margin: auto auto 0; width: 100%; max-width: 560px; max-height: 92vh; background: var(--card, #fdf3e8); color: var(--ink, #24364b);
  border-radius: 22px 22px 0 0; box-shadow: 0 -10px 40px rgba(36,54,75,.18); font-family: inherit; font-size: 15px; line-height: 1.6; overflow: auto; }
@media (min-width: 640px) { .fb-dlg { margin: auto; border-radius: 22px; box-shadow: 0 16px 50px rgba(36,54,75,.22); } }
.fb-dlg [hidden] { display: none !important; }
.fb-dlg::backdrop { background: rgba(36,54,75,.22); }
.fb-dlg form, .fb-dlg .fb-done { padding: 18px 20px calc(20px + env(safe-area-inset-bottom)); margin: 0; }
.fb-dlg .fb-x { position: absolute; top: 10px; inset-inline-end: 12px; width: 44px; height: 44px; border-radius: 50%; border: 0; background: none; font-size: 24px; line-height: 1; color: var(--muted, rgba(36,54,75,.78)); cursor: pointer; }
.fb-dlg h2 { font-family: var(--ar-h, serif); font-weight: 700; font-size: 25px; line-height: 1.3; margin: 0 0 4px; padding-inline-end: 44px; }
.fb-dlg[lang="en"] h2 { font-family: var(--en-h, Georgia, serif); font-weight: 600; }
.fb-dlg p { margin: 0 0 12px; }
.fb-dlg .fb-sub { color: var(--muted, rgba(36,54,75,.78)); font-size: 14px; }
.fb-dlg label.fb-l { display: block; font-weight: 600; font-size: 14px; margin: 0 0 6px; }
.fb-dlg textarea, .fb-dlg input[type="email"] { width: 100%; font: inherit; color: inherit; background: #fffaf4; border: 1.5px solid var(--line, rgba(36,54,75,.16)); border-radius: 14px; padding: 10px 12px; }
.fb-dlg textarea { min-height: 120px; resize: vertical; }
.fb-dlg textarea:focus, .fb-dlg input[type="email"]:focus { outline: 2px solid var(--ink, #24364b); outline-offset: 1px; }
.fb-count { display: block; text-align: end; font-size: 12.5px; color: var(--muted, rgba(36,54,75,.78)); margin: 2px 0 10px; }
.fb-note { display: block; font-size: 13px; color: var(--muted, rgba(36,54,75,.78)); margin: 4px 0 12px; }
.fb-chk { display: flex; gap: 10px; align-items: flex-start; margin: 0 0 12px; font-size: 14px; cursor: pointer; }
.fb-chk input { width: 20px; height: 20px; margin: 2px 0 0; flex: none; accent-color: var(--ink, #24364b); }
.fb-chk bdi { font-weight: 600; }
.fb-hp { position: absolute !important; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.fb-err { color: #a3392b; font-weight: 600; font-size: 14px; margin: 0 0 10px; }
.fb-err:empty { display: none; }
.fb-send { display: flex; width: 100%; align-items: center; justify-content: center; min-height: 48px; padding: 10px 22px; border-radius: 99px; border: 0;
  background: var(--ink, #24364b); color: var(--paper, #fbe9d6); font: inherit; font-weight: 600; font-size: 15.5px; cursor: pointer; }
.fb-send[disabled] { opacity: .6; cursor: default; }
.fb-send.ghost { background: transparent; color: var(--ink, #24364b); border: 1.5px solid var(--line, rgba(36,54,75,.16)); margin-top: 8px; }
.fb-priv { font-size: 12.5px; color: var(--muted, rgba(36,54,75,.78)); margin: 12px 0 0 !important; }
.fb-priv a { color: inherit; font-weight: 600; text-underline-offset: 3px; }
.fb-done { text-align: center; }
.fb-done .fb-ok { font-size: 38px; line-height: 1; margin: 8px 0 6px; color: var(--viridian, #4daf89); }
`;
  let dlg = null, ctx = null, lastFocus = null;
  const $ = (tag, attrs, text) => { const e = document.createElement(tag); if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]); if (text != null) e.textContent = text; return e; };
  const appLang = () => (document.documentElement.lang === "en" ? "en" : "ar");
  const appEd = () => (document.body.dataset.ed === "adult" ? "adult" : "kids");
  function page() {
    const p = (location.pathname + location.hash).replace(/[^A-Za-z0-9/#?=&._~%:+-]/g, "");
    return p.slice(0, 160);
  }

  function addStyle() { const s = document.createElement("style"); s.textContent = CSS; document.head.appendChild(s); }

  // the adult edition's entry points: a side tab (wide screens) and an item at the end of the tab bar, in the app's language.
  // app.js redraws the tab bar on every view, so the item is put back whenever the bar changes.
  function addEntries(tabs) {
    const nav = $("button", { class: "fb-nav", type: "button", id: "fbBtn" }); nav.innerHTML = ICON; nav.appendChild($("span"));
    const tab = $("button", { class: "fb-tab", type: "button", id: "fbTab" }); tab.innerHTML = ICON; tab.appendChild($("span"));
    document.body.appendChild(tab);
    const label = () => { const t = T[appLang()]; nav.querySelector("span").textContent = t.nav; nav.setAttribute("aria-label", t.title); nav.title = t.title; tab.querySelector("span").textContent = t.entry; tab.setAttribute("aria-label", t.title); };
    const place = () => { if (nav.parentNode !== tabs || tabs.lastElementChild !== nav) tabs.appendChild(nav); label(); };
    place();
    new MutationObserver(place).observe(tabs, { childList: true });
    new MutationObserver(label).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    const go = e => { e.preventDefault(); e.stopPropagation(); open({ lang: appLang(), edition: appEd(), from: e.currentTarget }); };
    nav.addEventListener("click", go); tab.addEventListener("click", go);
  }

  async function signedInEmail() {
    try {
      const ac = new AbortController(), to = setTimeout(() => ac.abort(), 4000);
      const r = await fetch("/api/me", { credentials: "same-origin", signal: ac.signal, headers: { accept: "application/json" } });
      clearTimeout(to);
      if (!r.ok) return null;
      const j = await r.json(); return j && typeof j.email === "string" ? j.email : null;
    } catch (e) { return null; }
  }

  function build(lang) {
    const t = T[lang];
    const d = $("dialog", { class: "fb-dlg", lang, dir: lang === "ar" ? "rtl" : "ltr", "aria-labelledby": "fbH" });
    const x = $("button", { class: "fb-x", type: "button", "aria-label": t.close }, "×"); x.addEventListener("click", () => d.close());
    const f = $("form", { novalidate: "" });
    f.append($("h2", { id: "fbH" }, t.title), $("p", { class: "fb-sub" }, t.intro));
    const ta = $("textarea", { id: "fbText", maxlength: String(MAX), placeholder: t.ph, rows: "5" });
    const cnt = n => (lang === "ar" ? n + " من " + MAX : n + " / " + MAX);
    const count = $("span", { class: "fb-count" }, cnt(0));
    ta.addEventListener("input", () => { count.textContent = cnt([...ta.value].length); });
    const em = $("input", { id: "fbEmail", type: "email", autocomplete: "email", inputmode: "email", maxlength: "254", dir: "ltr", "aria-describedby": "fbEmailNote" });
    const chk = $("label", { class: "fb-chk", hidden: "" }), cb = $("input", { type: "checkbox", id: "fbContact" }), cbt = $("span");
    chk.append(cb, cbt);
    // the honeypot: off-screen, out of the tab order, ignored by assistive tech and autofill
    const hp = $("div", { class: "fb-hp", "aria-hidden": "true" }); hp.append($("label", { for: "fbWeb" }, "Website"), $("input", { id: "fbWeb", name: "website", type: "text", tabindex: "-1", autocomplete: "off" }));
    const err = $("p", { class: "fb-err", role: "alert" });
    const send = $("button", { class: "fb-send", type: "submit" }, t.send);
    const priv = $("p", { class: "fb-priv" }, t.priv + " "); priv.appendChild($("a", { href: "/privacy/" + (lang === "en" ? "#en" : ""), target: "_blank", rel: "noopener" }, t.privL));
    f.append($("label", { class: "fb-l", for: "fbText" }, t.text), ta, count, $("label", { class: "fb-l", for: "fbEmail" }, t.email), em, $("span", { class: "fb-note", id: "fbEmailNote" }, t.emailNote), chk, hp, err, send, priv);
    const done = $("div", { class: "fb-done", hidden: "" });
    const again = $("button", { class: "fb-send ghost", type: "button" }, t.again), closeB = $("button", { class: "fb-send", type: "button" }, t.close);
    done.append($("div", { class: "fb-ok", "aria-hidden": "true" }, "✓"), $("h2", { tabindex: "-1" }, t.thanks), $("p", { class: "fb-sub" }, t.thanksSub), closeB, again);
    closeB.addEventListener("click", () => d.close());
    again.addEventListener("click", () => { done.hidden = true; f.hidden = false; ta.value = ""; count.textContent = cnt(0); ta.focus(); });
    d.append(x, f, done);
    d.addEventListener("click", e => { if (e.target === d) d.close(); });   // a tap on the backdrop closes it
    d.addEventListener("close", () => { if (lastFocus && document.contains(lastFocus)) try { lastFocus.focus(); } catch (e) {} });

    f.addEventListener("submit", async e => {
      e.preventDefault(); err.textContent = "";
      const tx = ta.value.trim(), mail = em.value.trim().toLowerCase();
      if (!tx) { err.textContent = t.eText; ta.focus(); return; }
      if (mail && !EMAIL_RE.test(mail)) { err.textContent = t.eEmail; em.focus(); return; }
      send.disabled = true; send.textContent = t.sending;
      const body = { text: tx, edition: ctx.edition, lang: ctx.lang, page: page() };
      if (mail) body.email = mail;
      if (!chk.hidden && cb.checked) body.contact = true;
      const web = d.querySelector("#fbWeb").value; if (web) body.website = web;
      try {
        const r = await fetch("/api/feedback", { method: "POST", credentials: "same-origin", headers: { "content-type": "application/json", "x-tazkiya": "1" }, body: JSON.stringify(body) });
        if (r.ok) { f.hidden = true; done.hidden = false; done.querySelector("h2").focus(); }
        else if (r.status === 429) err.textContent = t.eRate;
        else if (r.status === 400) { const j = await r.json().catch(() => ({})); err.textContent = j.error === "bad_email" ? t.eEmail : j.error === "bad_text" ? t.eText : t.eNet; }
        else err.textContent = t.eNet;
      } catch (x2) { err.textContent = t.eNet; }
      send.disabled = false; send.textContent = t.send;
    });
    d._fb = { f, done, ta, chk, cbt, cb, err };
    return d;
  }

  async function open(c) {
    ctx = { lang: c.lang === "en" ? "en" : "ar", edition: c.edition === "adult" ? "adult" : "kids" };
    lastFocus = c.from || document.activeElement;
    if (!dlg || dlg.lang !== ctx.lang) { if (dlg) dlg.remove(); dlg = build(ctx.lang); document.body.appendChild(dlg); }
    const q = dlg._fb; q.err.textContent = "";
    if (!q.done.hidden) { q.done.hidden = true; q.f.hidden = false; q.ta.value = ""; q.ta.dispatchEvent(new Event("input")); }
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    q.ta.focus();
    // signed in: offer the account's own email as the way back, unticked (no account is attached without the tick)
    const mail = await signedInEmail();
    if (mail) { q.cbt.textContent = T[ctx.lang].contact + " "; const b = document.createElement("bdi"); b.dir = "ltr"; b.textContent = "(" + mail + ")"; q.cbt.appendChild(b); q.chk.hidden = false; }
    else { q.chk.hidden = true; q.cb.checked = false; }
  }

  function init() {
    addStyle();
    const tabs = document.getElementById("tabs"); if (tabs && document.querySelector(".top")) addEntries(tabs);
    // the parents' page (and any static page): buttons that open the form in their own language, with the same icon
    document.querySelectorAll("[data-fb-open]").forEach(b => { if (!b.querySelector("svg")) b.insertAdjacentHTML("afterbegin", ICON); });
    document.addEventListener("click", e => {
      const b = e.target.closest && e.target.closest("[data-fb-open]"); if (!b) return;
      e.preventDefault(); open({ lang: b.dataset.lang || appLang(), edition: b.dataset.ed || "kids", from: b });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
  window.TZ_FEEDBACK = { open };
})();
