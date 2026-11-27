/* Tazkiya: soft sounds, a quiet nature background and light haptics (22 Nov 2026).
   Everything is synthesised with the Web Audio API: no audio files, works offline, nothing is fetched.
   Sound design: water drops and soft breaths, no bells or instruments; the background is wind, a stream or light rain.
   Settings are per device in localStorage "tazkiya-fx". */
(function () {
  "use strict";
  const KEY = "tazkiya-fx";
  const DEF = { snd: true, amb: "wind", hap: true, vol: 60 };
  const AMBS = ["off", "wind", "stream", "rain"];
  let P = Object.assign({}, DEF);
  try {
    const o = JSON.parse(localStorage.getItem(KEY) || "{}") || {};
    if (typeof o.snd === "boolean") P.snd = o.snd;
    if (typeof o.hap === "boolean") P.hap = o.hap;
    if (AMBS.includes(o.amb)) P.amb = o.amb;
    if (Number.isFinite(o.vol)) P.vol = Math.max(0, Math.min(100, Math.round(o.vol)));
  } catch (e) {}
  const store = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) {} };

  const AC = window.AudioContext || window.webkitAudioContext;
  const UAS = navigator.userAgent || "";
  const IOS = /iPad|iPhone|iPod/.test(UAS) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  // Safari 17+: "ambient" mixes with what is already playing (a parent's audio is not cut) and follows the silent switch
  try { if (navigator.audioSession) navigator.audioSession.type = "ambient"; } catch (e) {}
  const canVibe = typeof navigator.vibrate === "function";
  let reduce = false; try { reduce = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  let ctx = null, master = null, fxBus = null, ambBus = null, unlocked = false, amb = null, duck = 1;
  const V = () => (P.vol / 100);

  function init() {
    if (ctx || !AC) return !!ctx;
    try {
      ctx = new AC({ latencyHint: "interactive" });
      master = ctx.createGain(); master.gain.value = 1;
      const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 3;
      master.connect(comp); comp.connect(ctx.destination);
      fxBus = ctx.createGain(); fxBus.gain.value = V(); fxBus.connect(master);
      ambBus = ctx.createGain(); ambBus.gain.value = 0; ambBus.connect(master);
    } catch (e) { ctx = null; }
    return !!ctx;
  }
  // the first touch anywhere unlocks audio (browsers allow sound only after a gesture)
  function unlock() {
    if (!init()) return;
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    if (!unlocked) { unlocked = true; if (P.amb !== "off") startAmb(P.amb); }
  }
  ["pointerdown", "keydown", "touchend"].forEach(ev => window.addEventListener(ev, unlock, { capture: true, passive: true }));
  document.addEventListener("visibilitychange", () => {
    if (!ctx || !unlocked) return;
    if (document.hidden) ctx.suspend().catch(() => {}); else ctx.resume().catch(() => {});
  });

  /* ---------- noise buffers (made once) ---------- */
  const BUF = {};
  function noise(kind) {
    if (BUF[kind]) return BUF[kind];
    const sr = ctx.sampleRate, n = Math.floor(sr * (kind === "white" ? 1 : 9)), b = ctx.createBuffer(1, n, sr), d = b.getChannelData(0);
    if (kind === "white") for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    else if (kind === "brown") { let l = 0; for (let i = 0; i < n; i++) { l = (l + .02 * (Math.random() * 2 - 1)) / 1.02; d[i] = l * 3.5; } }
    else { let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0; // pink (Kellet)
      for (let i = 0; i < n; i++) { const w = Math.random() * 2 - 1;
        b0 = .99886 * b0 + w * .0555179; b1 = .99332 * b1 + w * .0750759; b2 = .969 * b2 + w * .153852; b3 = .8665 * b3 + w * .3104856;
        b4 = .55 * b4 + w * .5329522; b5 = -.7616 * b5 - w * .016898; d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * .5362) * .11; b6 = w * .115926; } }
    // soften the loop seam
    const f = Math.floor(sr * .05); for (let i = 0; i < f; i++) { const k = i / f; d[i] *= k; d[n - 1 - i] *= k; }
    return (BUF[kind] = b);
  }
  function src(kind, loop) { const s = ctx.createBufferSource(); s.buffer = noise(kind); s.loop = !!loop; return s; }
  function lfo(freq, depth, param, type) {
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type || "sine"; o.frequency.value = freq; g.gain.value = depth;
    o.connect(g); g.connect(param); o.start(); return o;
  }

  /* ---------- the background: wind, a stream, light rain ---------- */
  function startAmb(kind) {
    stopAmb(true);
    if (!ctx || kind === "off") return;
    const nodes = [], t = ctx.currentTime, out = ctx.createGain(); out.gain.value = 1; out.connect(ambBus); nodes.push(out);
    let timer = null;
    if (kind === "wind") {
      const s = src("brown", true), lp = ctx.createBiquadFilter(), g = ctx.createGain();
      lp.type = "lowpass"; lp.frequency.value = 520; lp.Q.value = .7; g.gain.value = .55;
      s.connect(lp); lp.connect(g); g.connect(out); s.start(t, Math.random() * 8);
      nodes.push(s, lfo(.061, 260, lp.frequency), lfo(.043, .28, g.gain), lfo(.17, 60, lp.frequency));
    } else if (kind === "stream") {
      const s = src("pink", true), hp = ctx.createBiquadFilter(), bp = ctx.createBiquadFilter(), g = ctx.createGain();
      hp.type = "highpass"; hp.frequency.value = 350; bp.type = "bandpass"; bp.frequency.value = 1500; bp.Q.value = .5; g.gain.value = .5;
      s.connect(hp); hp.connect(bp); bp.connect(g); g.connect(out); s.start(t, Math.random() * 8);
      const s2 = src("brown", true), lp2 = ctx.createBiquadFilter(), g2 = ctx.createGain();
      lp2.type = "lowpass"; lp2.frequency.value = 380; g2.gain.value = .35; s2.connect(lp2); lp2.connect(g2); g2.connect(out); s2.start(t, Math.random() * 8);
      nodes.push(s, s2, lfo(.33, 380, bp.frequency), lfo(.51, 240, bp.frequency, "triangle"), lfo(.21, .12, g.gain));
      // now and then a small bubble
      const bub = () => { if (!amb || amb.kind !== "stream") return; if (!document.hidden) drop(700 + Math.random() * 900, .05, out, .9 + Math.random() * .8); timer = setTimeout(bub, 900 + Math.random() * 2600); amb.timer = timer; };
      timer = setTimeout(bub, 1500);
    } else if (kind === "rain") {
      const s = src("pink", true), hp = ctx.createBiquadFilter(), lp = ctx.createBiquadFilter(), g = ctx.createGain();
      hp.type = "highpass"; hp.frequency.value = 900; lp.type = "lowpass"; lp.frequency.value = 6500; g.gain.value = .42;
      s.connect(hp); hp.connect(lp); lp.connect(g); g.connect(out); s.start(t, Math.random() * 8);
      nodes.push(s, lfo(.09, .08, g.gain));
      const tick = () => { if (!amb || amb.kind !== "rain") return; if (!document.hidden) patter(out); timer = setTimeout(tick, 60 + Math.random() * 320); amb.timer = timer; };
      timer = setTimeout(tick, 400);
    }
    amb = { kind, nodes, out, timer };
    const target = .085 * V() * duck;
    ambBus.gain.cancelScheduledValues(t); ambBus.gain.setValueAtTime(ambBus.gain.value, t); ambBus.gain.linearRampToValueAtTime(target, t + (reduce ? .5 : 3.5));
  }
  function stopAmb(quick) {
    if (!amb || !ctx) { amb = null; return; }
    const a = amb; amb = null; clearTimeout(a.timer);
    const t = ctx.currentTime, d = quick ? .25 : 1.2;
    a.out.gain.setValueAtTime(a.out.gain.value, t); a.out.gain.linearRampToValueAtTime(0, t + d);
    setTimeout(() => a.nodes.forEach(n => { try { n.stop && n.stop(); } catch (e) {} try { n.disconnect(); } catch (e) {} }), d * 1000 + 80);
  }
  function setAmbLevel() {
    if (!ctx) return; const t = ctx.currentTime;
    ambBus.gain.cancelScheduledValues(t); ambBus.gain.setValueAtTime(ambBus.gain.value, t);
    ambBus.gain.linearRampToValueAtTime(amb ? .085 * V() * duck : 0, t + .6);
  }
  // the background steps back while a voice reads aloud
  setInterval(() => {
    const sp = !!window.TZ_AUDIO_PLAYING; // set by the app while a recorded narration plays
    const want = sp ? .3 : 1; if (want !== duck) { duck = want; setAmbLevel(); }
  }, 700);

  /* ---------- small sounds ---------- */
  function env(g, t, peak, a, d) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); }
  // a water drop: a short sine that slides upward and fades
  function drop(f, peak, dest, len, at) {
    const t = (at != null ? at : ctx.currentTime) + .005, o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
    const L = .16 * (len || 1);
    o.type = "sine"; o.frequency.setValueAtTime(f * .78, t); o.frequency.exponentialRampToValueAtTime(f * 1.32, t + L * .55);
    lp.type = "lowpass"; lp.frequency.value = Math.min(9000, f * 5);
    env(g, t, peak, .006, L); o.connect(lp); lp.connect(g); g.connect(dest || fxBus); o.start(t); o.stop(t + L + .05);
  }
  function patter(dest) {
    const t = ctx.currentTime + .005, s = src("white"), bp = ctx.createBiquadFilter(), g = ctx.createGain();
    bp.type = "bandpass"; bp.frequency.value = 2200 + Math.random() * 3200; bp.Q.value = 4;
    env(g, t, .05 + Math.random() * .1, .002, .03 + Math.random() * .04); s.connect(bp); bp.connect(g); g.connect(dest); s.start(t, Math.random() * .8); s.stop(t + .12);
  }
  // a breath: filtered noise that swells and passes
  function breath(f1, f2, dur, peak) {
    const t = ctx.currentTime + .005, s = src("white"), bp = ctx.createBiquadFilter(), g = ctx.createGain();
    bp.type = "bandpass"; bp.Q.value = 1.2; bp.frequency.setValueAtTime(f1, t); bp.frequency.exponentialRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + dur * .45); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(bp); bp.connect(g); g.connect(fxBus); s.start(t, Math.random() * .2); s.stop(t + dur + .05);
  }
  function thud() {
    const t = ctx.currentTime + .005, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "sine"; o.frequency.setValueAtTime(210, t); o.frequency.exponentialRampToValueAtTime(140, t + .2);
    env(g, t, .16, .01, .24); o.connect(g); g.connect(fxBus); o.start(t); o.stop(t + .3);
  }
  // one step per stage, rising from the little finger to the thumb
  const STEP = [392, 440, 494, 587, 659];
  const ready = () => P.snd && unlocked && ctx && ctx.state === "running";
  const SND = {
    step: i => drop(STEP[Math.max(0, Math.min(4, i | 0))], .2),
    tick: () => drop(1250, .07, null, .45),
    open: () => breath(500, 1200, .28, .05),
    ok: () => { const t = ctx.currentTime; drop(587, .17, null, 1, t); drop(880, .15, null, 1.1, t + .11); },
    no: () => thud(),
    done: () => { const t = ctx.currentTime; drop(494, .15, null, 1, t); drop(659, .15, null, 1, t + .1); drop(988, .13, null, 1.3, t + .2); },
    rise: () => { breath(380, 2400, .75, .09); const t = ctx.currentTime; drop(784, .14, null, 1.2, t + .55); drop(1175, .11, null, 1.4, t + .68); },
    read: () => { const t = ctx.currentTime; drop(659, .13, null, 1, t); drop(988, .1, null, 1.2, t + .12); }
  };

  /* ---------- haptics ---------- */
  // Android and most browsers: navigator.vibrate. iPhone (iOS 18+): toggling a hidden switch gives a light tap.
  let hapLabel = null;
  function iosTap() {
    try {
      if (!hapLabel) {
        hapLabel = document.createElement("label"); hapLabel.className = "tz-hap"; hapLabel.setAttribute("aria-hidden", "true"); hapLabel.style.display = "none";
        const inp = document.createElement("input"); inp.type = "checkbox"; inp.setAttribute("switch", ""); inp.tabIndex = -1; hapLabel.appendChild(inp);
        document.head.appendChild(hapLabel);
      }
      hapLabel.click();
    } catch (e) {}
  }
  const HAP = { step: [9], tick: [6], ok: [10, 50, 14], no: [22], done: [10, 40, 10, 40, 16], rise: [12, 60, 24], read: [10, 40, 12] };
  function buzz(kind) {
    if (!P.hap) return;
    const pat = HAP[kind]; if (!pat) return;
    if (canVibe) { try { navigator.vibrate(pat.length === 1 ? pat[0] : pat); } catch (e) {} }
    else if (IOS) iosTap(); // one tap only: a second one from a timer falls outside the touch and is not felt
  }

  window.TZFX = {
    // play a sound (and its matching tap) by name; step takes the stage index 0..4
    play(kind, arg) {
      if (kind !== "open") buzz(kind);
      if (!ready() || !SND[kind]) return;
      try { SND[kind](arg); } catch (e) {}
    },
    prefs: () => Object.assign({}, P),
    canHaptic: () => canVibe || IOS,
    hasAudio: () => !!AC,
    set(k, v) {
      if (k === "snd" || k === "hap") P[k] = !!v;
      else if (k === "amb" && AMBS.includes(v)) { P.amb = v; if (unlocked) { if (v === "off") { stopAmb(); setAmbLevel(); } else startAmb(v); } }
      else if (k === "vol") { P.vol = Math.max(0, Math.min(100, Math.round(+v || 0))); if (fxBus) fxBus.gain.value = V(); setAmbLevel(); }
      store();
      if (k === "snd" && v) { unlock(); setTimeout(() => this.play("ok"), 30); }
      if (k === "hap" && v) buzz("ok");
    }
  };
})();
