/* تزكية: العرض المتحرك عند أول فتح (اعتُمد في 22 نوفمبر 2026).
 * Tazkiya: the first-open intro. Nine watercolour stills moved with the Web Animations API, real bilingual text over
 * them, the app's own sounds (fx.js, no voice), skippable from the first second, pausable, and calm under
 * prefers-reduced-motion (stills with a fade, a Next button, no drift). Loaded on demand by app.js.
 * window.TZINTRO.play({ lang, adult, fem, reduce, speed, fx, first, onEnd(skipped) }) */
(function () {
  "use strict";
  const A = "assets/intro/", HAND = "assets/hand.webp";
  // scene durations in seconds (children); the adults' verse scene is longer (four verses)
  const DUR = [6, 5, 5, 6, 7, 7, 8, 6, 4];
  const T = {
    kids: {
      ar: ["يولد كل طفل على الفطرة، نقيًّا يحب الخير.", "ويكبر يومًا بعد يوم.", "وأحيانًا ينشغل فيغفل.", "ويريد كل شيء لنفسه: «أنا أولًا».",
        "ويستعجل ويغضب ولا يتوقف. وما يُترك منها يكبر معه.", "فيأخذ الوالدان والمعلمون بيده: يعلّمونه ويربّونه.", "ويصعد إصبعًا بعد إصبع.", "", "هذه يدك. لنبدأ."],
      ar_f: ["تولد كل طفلة على الفطرة، نقيّةً تحب الخير.", "وتكبر يومًا بعد يوم.", "وأحيانًا تنشغل فتغفل.", "وتريد كل شيء لنفسها: «أنا أولًا».",
        "وتستعجل وتغضب ولا تتوقف. وما يُترك منها يكبر معها.", "فيأخذ الوالدان والمعلمون بيدها: يعلّمونها ويربّونها.", "وتصعد إصبعًا بعد إصبع.", "", "هذه يدكِ. لنبدأ."],
      en: ["Every child is born on the fitra: pure, and loving what is good.", "And grows, day by day.", "Sometimes he gets busy and forgets.", "He wants everything for himself: “me first”.",
        "He rushes, gets angry, won’t stop. What is left alone grows with him.", "Parents and teachers take his hand: they teach him and raise him.", "And he climbs, finger by finger.", "", "This is your hand. Let’s begin."],
      en_f: ["Every child is born on the fitra: pure, and loving what is good.", "And grows, day by day.", "Sometimes she gets busy and forgets.", "She wants everything for herself: “me first”.",
        "She rushes, gets angry, won’t stop. What is left alone grows with her.", "Parents and teachers take her hand: they teach her and raise her.", "And she climbs, finger by finger.", "", "This is your hand. Let’s begin."],
      verse: { ar: "﴿قَدْ أَفْلَحَ مَنْ زَكَّاهَا﴾", ref: ["الشمس: 9", "al-Shams 91:9"], en: "“Successful indeed is the one who purifies it.”" },
      go: ["لنبدأ", "Let’s begin"]
    },
    adult: {
      ar: ["قال رسول الله صلى الله عليه وآله وسلم: «ما من مولود إلا يولد على الفطرة» (البخاري 1359، مسلم 2658).", "ثم يكبر، وتكبر معه قواه ورغباته.", "فتأتيه الغفلة: تمضي الأيام ولا ينتبه.",
        "وتطلب النفس حظها: أنا أولًا، والمزيد لي.", "والعجلة والغضب. وما يُترك من الطباع يشتد مع العمر.", "والتربية يد تأخذ بيده: والدان ومعلمون وصحبة صالحة.", "وبالتزكية يرتقي درجة بعد درجة.", "", "هذه يدك. ابدأ من حيث أنت."],
      en: ["The Prophet (peace and blessings be upon him and his family) said: “No child is born except upon the fitra.” (al-Bukhari 1359; Muslim 2658)", "Then he grows, and his strengths and desires grow with him.",
        "Heedlessness comes: days pass and he does not notice.", "The self demands its share: me first, more for me.", "Then haste and anger. Traits left untended harden with age.",
        "Upbringing is a hand that takes his: parents, teachers and good company.", "Through tazkiya he rises, one degree after another.", "", "This is your hand. Begin where you are."],
      last_f: "هذه يدكِ. ابدئي من حيث أنتِ.",
      verse: { ar: "﴿وَنَفْسٍ وَمَا سَوَّاهَا ۝ فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا ۝ قَدْ أَفْلَحَ مَنْ زَكَّاهَا ۝ وَقَدْ خَابَ مَنْ دَسَّاهَا﴾", ref: ["الشمس: 7 إلى 10", "al-Shams 91:7–10"],
        en: "“By the soul and the One who fashioned it, then inspired it with its wickedness and its mindfulness of God: successful is the one who purifies it, and lost is the one who buries it.”" },
      go: ["ابدأ", "Begin"], go_f: "ابدئي"
    },
    ui: { skip: ["تخطَّ", "Skip"], pause: ["إيقاف مؤقت", "Pause"], play: ["تابع", "Play"], next: ["التالي", "Next"], label: ["قصة اليد", "The story of the hand"],
      alt: [["يد مولود صغيرة تمسك إصبع والده", "A newborn's tiny hand holding a parent's finger"], ["يد طفل صغير تكبر", "A toddler's hand growing"],
        ["يد طفل مفتوحة", "A child's open hand"], ["يد طفل مفتوحة", "A child's open hand"], ["يد طفل مفتوحة", "A child's open hand"],
        ["يد الوالد تسند يد الطفل", "A parent's hand supporting the child's hand"], ["النور يصعد في أصابع اليد", "Light climbing the fingers"], ["الإبهام يتوهج", "The thumb glowing"], ["يد تزكية الملونة", "Tazkiya's coloured hand"]] }
  };
  // where the light crosses each finger on assets/hand.webp, as a fraction of the image height from the top
  // (little finger lowest, thumb highest): the light rises from the bottom of the picture to its top
  const FING_Y = [0.84, 0.70, 0.56, 0.40, 0.17];

  let root = null, opts = null, raf = 0, clock = 0, last = 0, paused = false, scene = -1, ends = [], total = 0, done = false, prevFocus = null, sweepN = -1, mq = null;

  const el = (tag, cls, attrs) => { const e = document.createElement(tag); if (cls) e.className = cls; if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };
  const pick = a => a[opts.lang === "en" ? 1 : 0];
  const anim = (node, kf, ms, extra) => { try { return node.animate(kf, Object.assign({ duration: ms, fill: "forwards", easing: "ease-in-out" }, extra || {})); } catch (e) { return null; } };
  const fx = (k, a) => { try { if (opts.fx) opts.fx(k, a); } catch (e) {} };

  function lines() {
    const ed = opts.adult ? T.adult : T.kids, en = opts.lang === "en";
    let L = en ? (opts.fem && ed.en_f ? ed.en_f : ed.en) : (opts.fem && ed.ar_f ? ed.ar_f : ed.ar);
    if (opts.adult && opts.fem && !en) { L = L.slice(); L[8] = ed.last_f; }
    return L;
  }

  function build() {
    const en = opts.lang === "en";
    root = el("div", "film" + (opts.reduce ? " still" : ""), { role: "dialog", "aria-modal": "true", "aria-label": pick(T.ui.label), dir: en ? "ltr" : "rtl", lang: en ? "en" : "ar" });
    const ctl = el("div", "film-ctl");
    const skip = el("button", "film-btn film-skip", { type: "button", "data-film": "skip" }); skip.textContent = pick(T.ui.skip);
    const pause = el("button", "film-btn film-pause", { type: "button", "data-film": "pause", "aria-label": pick(T.ui.pause), "aria-pressed": "false" });
    pause.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path class="pz" d="M8 5v14M16 5v14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/><path class="pl" d="M8 5l11 7-11 7z" fill="currentColor"/></svg>';
    ctl.append(pause, skip);
    const stage = el("div", "film-stage", { "aria-hidden": "true" });
    const img = (src, cls) => { const i = el("img", "fl " + (cls || ""), { src, alt: "", decoding: "async", draggable: "false" }); stage.append(i); return i; };
    const L = {
      fitra: img(A + "s1-fitra.webp"), glow: (() => { const g = el("div", "fl film-glow"); stage.append(g); return g; })(),
      todd: img(A + "s2-toddler.webp"), child: img(A + "s3-child.webp"),
      mist: img(A + "ov-mist.webp", "ov ov-mist"), plate: img(A + "ov-plate.webp", "ov ov-plate"), knot: img(A + "ov-knot.webp", "ov ov-knot"),
      guide: img(A + "s4-guide.webp"),
      handBase: img(HAND, "hand hand-base"), handCol: img(HAND, "hand hand-col"),
      thumb: (() => { const g = el("div", "fl film-thumb"); stage.append(g); return g; })()
    };
    const txt = el("div", "film-text");
    const line = el("p", "film-line", { "aria-live": "polite" });
    const verse = el("div", "film-verse"); verse.hidden = true;
    const foot = el("div", "film-foot");
    const next = el("button", "btn ghost film-next", { type: "button", "data-film": "next" }); next.textContent = pick(T.ui.next); next.hidden = !opts.reduce;
    const go = el("button", "btn film-go", { type: "button", "data-film": "go" });
    const ed = opts.adult ? T.adult : T.kids; go.textContent = opts.adult && opts.fem && !en ? ed.go_f : pick(ed.go); go.hidden = true;
    foot.append(next, go); txt.append(line, verse, foot);
    const mid = el("div", "film-mid"); mid.append(stage);
    root.append(ctl, mid, txt);
    root.L = L; root.line = line; root.verse = verse; root.go = go; root.next = next; root.pauseBtn = pause;
    root.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey, true);
    document.body.append(root);
    document.body.classList.add("film-open");
    ["view", "tabs", "sheet"].forEach(id => { const e = document.getElementById(id); if (e) e.inert = true; });
    const top = document.querySelector("header.top"); if (top) top.inert = true;
    prevFocus = document.activeElement;
    setTimeout(() => skip.focus({ preventScroll: true }), 30);
  }

  function onKey(e) {
    if (!root) return;
    if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); finish(true); return; }
    if (e.key === "Tab") { // keep focus inside the intro
      const f = [...root.querySelectorAll("button")].filter(b => !b.hidden && b.offsetParent !== null);
      if (!f.length) return; const i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  }
  function onClick(e) {
    const b = e.target.closest("[data-film]"); if (!b) return;
    const k = b.dataset.film;
    if (k === "skip") finish(true);
    else if (k === "go") { fx("ok"); finish(false); }
    else if (k === "pause") setPaused(!paused);
    else if (k === "next") { if (scene < ends.length - 1) { clock = ends[scene]; if (paused) setPaused(false); } }
  }
  function setPaused(p) {
    paused = p; root.classList.toggle("paused", p);
    root.pauseBtn.setAttribute("aria-pressed", String(p)); root.pauseBtn.setAttribute("aria-label", pick(p ? T.ui.play : T.ui.pause));
    try { root.getAnimations({ subtree: true }).forEach(a => (p ? a.pause() : a.play())); } catch (e) {}
    last = performance.now();
  }

  /* ---------- scenes ---------- */
  const show = (n, ms) => anim(n, [{ opacity: getComputedStyle(n).opacity }, { opacity: 1 }], ms || 1100);
  const hide = (n, ms) => anim(n, [{ opacity: getComputedStyle(n).opacity }, { opacity: 0 }], ms || 1100);
  const drift = (n, kf, s) => { if (!opts.reduce) anim(n, kf, s * 1000 / opts.speed, { easing: "ease-in-out" }); };

  function enter(i) {
    const L = root.L, d = ends[i] - (i ? ends[i - 1] : 0), ms = d * 1000 / opts.speed, f = opts.reduce ? 700 : 1100, F = f / opts.speed;
    const ln = lines()[i];
    root.dataset.scene = String(i + 1);
    if (ln) { root.verse.hidden = true; root.line.hidden = false; root.line.textContent = ln; anim(root.line, opts.reduce ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], 700 / opts.speed); }
    if (i === 0) {
      fx("open");
      show(L.fitra, 1400 / opts.speed); show(L.glow, 2000 / opts.speed);
      drift(L.fitra, [{ transform: "scale(1)" }, { transform: "scale(1.06)" }], d);
      drift(L.glow, [{ transform: "scale(.6)" }, { transform: "scale(1.15)" }], d);
    } else if (i === 1) {
      hide(L.fitra, F); show(L.todd, F); anim(L.glow, [{ opacity: 1 }, { opacity: .45 }], F);
      drift(L.todd, [{ transform: "scale(.9)" }, { transform: "scale(1.04)" }], d);
    } else if (i === 2) {
      hide(L.todd, F); hide(L.glow, F); show(L.child, F);
      drift(L.child, [{ transform: "scale(.98)" }, { transform: "scale(1.02)" }], d * 3.4);
      show(L.mist, 1600 / opts.speed);
      drift(L.mist, [{ transform: "translate(-60%, 0)" }, { transform: "translate(0, 0)" }], d * .8);
    } else if (i === 3) {
      show(L.plate, 1400 / opts.speed);
      drift(L.plate, [{ transform: "translate(-40%, -30%) rotate(-10deg)" }, { transform: "translate(0, 0) rotate(4deg)" }], d * .8);
    } else if (i === 4) {
      show(L.knot, 1200 / opts.speed);
      drift(L.knot, [{ transform: "translate(-40%, 30%) rotate(0)" }, { transform: "translate(0, 0) rotate(12deg)" }], d * .45);
      if (!opts.reduce) setTimeout(() => { if (!root || done) return; [L.mist, L.plate, L.knot].forEach(n => anim(n, [{ scale: 1 }, { scale: 1.15 }], ms * .5)); }, ms * .45);
    } else if (i === 5) {
      fx("tick");
      hide(L.child, F); show(L.guide, F);
      [L.mist, L.plate, L.knot].forEach(n => anim(n, [{ opacity: getComputedStyle(n).opacity }, { opacity: .3 }], F));
      drift(L.guide, [{ transform: "translateY(4%)" }, { transform: "translateY(0)" }], d);
    } else if (i === 6) {
      hide(L.guide, F); show(L.handBase, F); show(L.handCol, opts.reduce ? F : 10);
      // the knot loosens into a straight line, the plate settles; both leave
      if (opts.reduce) { hide(L.knot, F); hide(L.plate, F); }
      else {
        anim(L.knot, [{ transform: getComputedStyle(L.knot).transform, opacity: .3 }, { transform: "scale(1.35, .04)", opacity: 0 }], ms * .6);
        anim(L.plate, [{ transform: getComputedStyle(L.plate).transform, opacity: .3 }, { transform: "rotate(0)", opacity: 0 }], ms * .6);
      }
      hide(L.mist, ms * .4);
      sweepN = -1; if (opts.reduce) sweep(1);
    } else if (i === 7) {
      fx("rise");
      if (opts.adult || ln === "") showVerse();
      show(L.thumb, 900 / opts.speed);
      if (!opts.reduce) anim(L.thumb, [{ transform: "scale(.7)" }, { transform: "scale(1.15)" }, { transform: "scale(1)" }], ms, { easing: "ease-out" });
    } else if (i === 8) {
      hide(L.handBase, F); hide(L.thumb, F * 1.5);
      root.next.hidden = true; root.go.hidden = false; root.go.focus({ preventScroll: true });
    }
  }
  function showVerse() {
    const v = (opts.adult ? T.adult : T.kids).verse, en = opts.lang === "en";
    root.line.hidden = true; root.verse.hidden = false;
    root.verse.innerHTML = "";
    const q = el("p", "film-q", { lang: "ar", dir: "rtl" }); q.textContent = v.ar; root.verse.append(q);
    if (en) { const t = el("p", "film-qen"); t.textContent = v.en; root.verse.append(t); }
    const r = el("p", "film-ref"); r.textContent = pick(v.ref); root.verse.append(r);
    anim(root.verse, [{ opacity: 0 }, { opacity: 1 }], 900 / opts.speed);
  }
  // the light rising: p from 0 (nothing coloured) to 1 (the whole hand); a step sound as it crosses each finger
  function sweep(p) {
    const y = 100 - p * 108; // % from the top where the light's edge is; a soft 10% feather
    const m = `linear-gradient(to bottom, transparent ${y.toFixed(1)}%, #000 ${(y + 10).toFixed(1)}%)`;
    root.L.handCol.style.webkitMaskImage = m; root.L.handCol.style.maskImage = m;
    const n = FING_Y.filter(fy => (y + 5) / 100 <= fy).length - 1;
    if (n > sweepN && !opts.reduce) { for (let k = sweepN + 1; k <= n; k++) fx("step", k); sweepN = n; }
  }

  function tick(now) {
    if (!root || done) return;
    const dt = Math.min(1000, now - last); last = now; // a long gap (a hidden tab) never jumps more than a second
    if (!paused) clock += dt * opts.speed / 1000;
    let s = 0; while (s < ends.length - 1 && clock >= ends[s]) s++;
    if (s !== scene) { for (let k = scene + 1; k <= s; k++) { scene = k; enter(k); } }
    if (scene === 6 && !opts.reduce) sweep(Math.min(1, (clock - ends[5]) / (ends[6] - ends[5]) / .9));
    if (scene === ends.length - 1 && clock > total) clock = total; // the last scene waits for the button
    raf = requestAnimationFrame(tick);
  }

  function finish(skipped) {
    if (!root || done) return; done = true;
    cancelAnimationFrame(raf);
    document.removeEventListener("keydown", onKey, true);
    if (mq && mq.removeEventListener) mq.removeEventListener("change", onMQ);
    const r = root; root = null;
    ["view", "tabs", "sheet"].forEach(id => { const e = document.getElementById(id); if (e) e.inert = false; });
    const top = document.querySelector("header.top"); if (top) top.inert = false;
    document.body.classList.remove("film-open");
    try { r.getAnimations({ subtree: true }).forEach(a => a.cancel()); } catch (e) {}
    const fade = anim(r, [{ opacity: 1 }, { opacity: 0 }], opts.reduce ? 150 : 450);
    const rm = () => r.remove(); if (fade) fade.onfinish = rm; else rm();
    setTimeout(rm, 700);
    const pf = prevFocus; prevFocus = null;
    try { if (pf && document.contains(pf) && pf.focus) pf.focus({ preventScroll: true }); } catch (e) {}
    const cb = opts.onEnd; opts = null;
    if (cb) cb(!!skipped);
  }
  function onMQ(e) { if (root && e.matches && !opts.reduce) { opts.reduce = true; root.classList.add("still"); root.next.hidden = scene >= ends.length - 1; try { root.getAnimations({ subtree: true }).forEach(a => a.finish()); } catch (er) {} if (scene >= 6) sweep(1); } }

  window.TZINTRO = {
    play(o) {
      if (root) return;
      opts = Object.assign({ lang: "ar", adult: false, fem: false, reduce: false, speed: 1, fx: null, onEnd: null }, o || {});
      opts.speed = Math.max(.25, Math.min(50, +opts.speed || 1));
      const dur = DUR.slice(); if (opts.adult) dur[7] = 8;
      if (opts.reduce) for (let k = 0; k < 8; k++) dur[k] = Math.round(dur[k] * 1.3 * 10) / 10;
      ends = []; total = 0; dur.forEach(x => { total += x; ends.push(total); });
      clock = 0; scene = -1; paused = false; done = false; sweepN = -1;
      build();
      try { mq = matchMedia("(prefers-reduced-motion: reduce)"); if (mq.addEventListener) mq.addEventListener("change", onMQ); } catch (e) { mq = null; }
      last = performance.now(); raf = requestAnimationFrame(tick);
    },
    skip() { finish(true); },
    setSpeed(v) { if (opts) opts.speed = Math.max(.25, Math.min(50, +v || 1)); }, // tests only
    get open() { return !!root; },
    get scene() { return scene + 1; },
    seconds(adult) { return DUR.reduce((a, b) => a + b, 0) + (adult ? 2 : 0); }
  };
})();
