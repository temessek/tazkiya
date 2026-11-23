# Akhlaq Path app (working build)

Static HTML/CSS/JS, no build step, relative paths only. Run with launch config `akhlaq-app` (port 8770) or:

    python -m http.server 8770 --bind 127.0.0.1 --directory outputs/app

## Files

- `manifest.json` and `assets/icon-*.png`: installable web app (local only, no service worker).
- `index.html`: shell. Loads `fallback.js`, then `content/content.js`, then `app.js`.
- `app.js`: hash router, state, all views. The hand geometry (`G`) is measured on `assets/hand.webp` (1448x1086): finger hit polygons, pen-ring capsules (`cap`) that hug each finger, % chip spots, degree dots (degree 1 by the palm, last at the fingertip).
- `styles.css`: approved ink-and-wash palette. The page paper `#fbe9d6` matches the image paper.
- `fallback.js`: small safety net. It is used per stage or field only when `content/content.js` lacks it.
- `content/`: owned by the content session. Do not edit here.
- `assets/hand.webp` (from explorations a1, the left hand). `assets/right-hand-virtues.webp` (the right hand of virtues, generated with Codex built-in image generation on 18 Nov from the a1 prompt family, mirrored; source PNGs, brief and exact prompt in `assets-src/right-hand/`). Its geometry is `GR` in app.js, measured on that image. `assets/right-hand.webp` (an older b1 crop) is no longer used.

## Routes

`#/` hand · `#/stage/<id>` · `#/read/<id>/<readingId>` · `#/quiz/<id>[/<readingId>]` · `#/sign/<id>` (parent "show the sign") · `#/card/<id>` (printable/shareable sign card) · `#/virtue/<vid>` (virtue reader) · `#/faq` (parents' questions) · `#/review` (evening review) · `#/tasks` · `#/me`

Stage ids: `zombie` (little finger), `pig` (ring), `monkey` (middle), `human` (index), `sabiq` (thumb). The mapping is a placeholder.

URL params for demos: `?lang=en|ar`, `?reset=1` (fresh demo user, then removed from the URL), `?intro=0` (skip the first-run sheet), `?sel=<id>&deg=<0-2>` (open a finger sheet), `?sel=summit`, `?map=one|two|right` (mapping placeholder; also chosen in the settings sheet).

## Mix rules (placeholder, shown in "My hand")

- Right answer (first attempt only): +2 toward the higher side.
- Wrong answer: −1.
- Parent-confirmed task (PIN 1234): +1.
- Being away changes nothing (owner decision, 17 Nov). A later-day return only shows «أهلًا بعودتك».

State lives in localStorage key `akhlaq-app-v1`, with every access wrapped in try/catch. Parent mode never persists. The demo user is «نور» / Nour.

## Optional content keys (read when present)

`stages.*.selfcheck` (stage page and tasks page; no effect on the mix), `stages.*.parent` (sign screen, sign card, stage page in parent mode), top-level `onboarding` (first-run sheet), `quote.checked` (a "matched to the digital mushaf/hadith source" badge), top-level `daily` (today's mission card on home and tasks; parent-confirmable). A reading with ages `4-8` or `picture: true` gets a read-aloud mode with one paragraph per screen.

## Mapping placeholder (settings sheet)

`one`: one hand, little→thumb = zombie, pig, monkey, human, sabiq. `two`: left hand = zombie, pig, monkey, open slot (index), human (thumb); right hand (mirrored image) = virtues salih, shahid, siddiq, muqarrab, and the prophets' light above the thumb (light only, never a rank). `right`: right hand only.

## Reading and printing

Read aloud (🔊) uses the Web Speech API and is hidden when no ar/en voice exists. Readings for ages 4-8 open as a picture book, one paragraph per screen, ending with «اسأل طفلك» from `ask`. `#/sign/<id>` and `#/card/<id>` print on A5 (all signs listed, controls hidden) and share through `navigator.share` or the clipboard.

## Profile, family circle, evening review

The settings sheet holds a demo profile (name, default «نور» / Nour, boy/girl, and an optional age band 4-8 / 9-14 / 15+), stored locally only. With "girl", Arabic text uses an `ar_f` sibling field (strings, arrays and `body.ar_f`) when the content has one. Top-level `circle` gives a "Family circle" card on the tasks page in parent mode: this week's circle (from the demo start date, browsable), its steps and links to the readings in `uses`. Top-level `muhasaba` feeds the quiet `#/review` screen, linked from "My hand"; until it lands, `fallback.js` supplies four placeholder questions. Nothing typed or answered there is stored beyond a done-today flag, and it never touches the mix.
With girl, UI strings addressed to the child also switch to their feminine forms (`UF` in app.js). With an age band, readings whose `ages` match come first (then `all`), and the evening review hides `mh-sabiq-2` under 15. `muhasaba` from content is grouped by stage.

## Round 11 (18 Nov afternoon)

- Opening moment: the first home view of each day fills the hand with colour from the little finger up to the thumb (ink-wash mask, about 1.7 s), then the light breathes. Skipped under reduced motion and on later visits that day (`revealDay`).
- Climbing feedback: a correct first answer or a confirmed task that moves share upward shows a small card with an ink bloom on that finger and one line («خطوة إلى أعلى، نحو …», or «صعدتَ/صعدتِ درجة في …» when the receiving share crosses a multiple of 10%; placeholder rule).
- Stamps and ranks on "My hand": 9 quiet ink stamps (reading, quizzes, tasks, family circles, evening reviews) and a rank line from the upper share (human + sabiq). Both are placeholders. The family circle card has "we did it this week".
- Family mode: up to 4 demo profiles (`akhlaq-app-v1:profiles`; p1 keeps `akhlaq-app-v1`, others `akhlaq-app-v1:pN`), switcher in settings, each with its own state. Parent mode on the tasks page shows the family at a glance.
- Readings with `summit: true` appear in «القمة التي نقتدي بها» with a gold edge; others (including r8) stay in the normal list.

## Round 12

- Role models: readings with `summit: true` (first) and `companions: true` share one section, «قدوات: النبي صلى الله عليه وآله وسلم وآل البيت عليهم السلام والصحابة», each with a small tag. Other readings stay in the main list.
- Degree sheet (tap a phalanx): when `degrees[i]` has `looks`, `story`, `step`, `q`, the sheet shows looks, a story button (`#/deg/<stage>/<i>`, picture-book view ending with the step), the step up, and the one question (scored once like a quiz item, by its `id`). The last degree adds a link to the next finger.

## Rounds 13-14

- `#/poster`: printable A4 "the hand at home" poster (named `@page poster`), linked from the tasks page and My hand.
- `#/sources`: every Quran/hadith quote in the readings and every virtue reference, grouped by finger, with badges (mushaf/hadith match, awaiting the author's review). Linked from the FAQ and from each quote in the reader.
- Accessibility: finger-name colours darkened to WCAG AA on the paper; sheets are labelled by their heading, take focus on open, trap Tab, close on Escape and return focus to the finger or button that opened them; the reader's A−/A+ setting (`--k`) scales text on quiz, FAQ, sources, review, degree sheet and lists.
- Performance: hand images re-encoded at WebP q72 (75 KB and 55 KB; previous versions in `assets-src/prev/`), icons palette-quantized, unused font weights dropped (Amiri italic, Plex 500, Cormorant 500), the dignity line uses Amiri 700 so Amiri 400 loads only on reading pages, the hand image is preloaded, the right hand is lazy. First view (AR, one hand): about 796 KB from this uncompressed local server; about 466 KB if the host gzips text (content.js is 299 KB raw, 87 KB gzipped). Fonts are now the largest part (about 285 KB); self-hosted subset fonts would be the next step.

## Rounds 15-16

- Two-stage degree sheet: opens compact (≤54vh) with the tapped finger's pen ring centred in view above it; a pinned row offers the story and «الخطوة والسؤال», which expands the sheet (button, handle, swipe up). Collapsing (or swipe down) returns to the hand.
- Persona fixes: evening review link only for 15+ or parent mode (unset age shows it labelled «للكبار والوالدين»); `mh-sabiq-2` hidden under 15; in parent mode the review addresses the parent by the new «أب / أم» setting (`parentG`); EN "a trait of the index finger".
- Library: top-level `books` → `#/library`, `#/book/<id>` (bound cover in the paper style, spine on the binding side, chapter list with progress) and `#/book/<id>/<n>` (chapter reader, then its questions scored once by id with the climb card, then "next chapter"). The finger's book also sits on its stage page; My hand links to the library.

## Rounds 17-19 (18 November 2026)

- The stage link sits in the sheet's pinned row as «المرحلة»; age ranges render in `<bdi dir="ltr">`.
- Ink vignettes (generated with the built-in Codex image tool, a1 style; colour-to-alpha webp, each ≤40 KB): `assets/vignettes/sym-<stage>.webp` (stage page, sign card, poster, picture books) and `assets/vignettes/book-<stage>.webp` (book covers). Sources, brief and prompts: `assets-src/vignettes/`.
- Self-hosted subset fonts in `assets/fonts/` (woff2, SIL OFL), no Google Fonts request. The subset is built from the text in app.js, content and fallback, plus the full Arabic block for Plex and the basic letters for Amiri; rebuild with pyftsubset (sources in `assets-src/fonts/`) if new content adds unusual characters.
- `#/about`: the page for parents (Fatir 32, prophets as a summit, the guiding principle, names describe behaviour, no penalty for absence, what «عنصر مؤقت» means). Linked from the FAQ and the settings sheet.
- Library grouped by age band (the profile's band first); `picture: true` books use the picture-book reader (pages, big type, one question per page); one or two questions per chapter.

## Round 20 (18 November 2026)

- Books load lazily from `content/books.js` (`window.AKHLAQ_BOOKS`) when the library, a book, a stage page or «يدي» opens; `AKHLAQ_CONTENT.books` remains the fallback. While loading, book routes show «يُحمَّل…»; if the file is missing the library says the books are on their way.
- First tour (`TOUR`): starts after the intro (`introok`) for a profile without `S.tour`; touch each finger from the little finger up (pulsing dashed ring, then the pen ring, the name and its vignette), then the light, then «الأسماء تصف ما نفعل، لا من نحن». Read aloud when a voice exists; skippable; replay from settings; `?tour=1` opens it directly, `?intro=0` skips it.
- Parent weekly summary on «يدي» in parent mode: per child, no ranking (readings and chapters, answers, confirmed tasks, family circle, the finger that moved most, a daily mission suggested from the lowest finger with activity). New events are recorded in `S.ev` (answers, confirmed tasks, mix moves).
- Desktop (≥1024px): reading pages 660px, other pages 700px, library and poster 820px.

## Round 21 (18 November 2026)

First-time usability walk and fixes; details and before/after in `USABILITY.md`. Settings now has «ابدأ التجربة من جديد» with a confirmation sheet (clears the active profile only, returns to the hand with the intro, then the tour). Books prefer `window.AKHLAQ_BOOKS` over `AKHLAQ_CONTENT.books`.

## Smoke test (round 23)

From `outputs/app`:

```
node tests/smoke.mjs
```

It serves this folder itself, walks every route × AR/EN × 320/375/1280 and checks for console errors, failed requests (4xx/5xx), horizontal overflow, «undefined»/«NaN»/«{x}» in text, clipped labels and unhandled routes. It also validates the content contract for `content/content.js` + `content/books.js`: unique ids per state key, readingIds that resolve, `correct` in range, ar/en present, and ar_f matching the shape of ar. Results go to `tests/out/report.md` and `report.json`, with 375 px screenshots in `tests/out/shots/`. The exit code is 1 on any failure. A full run takes about 3 minutes.

- `--content-only`: the contract check alone (seconds); `AKHLAQ_CONTENT_DIR=<dir>` validates another copy.
- `--quick`: fewer routes; `--no-shots`: no screenshots.
- `--ideas-only`: only the five-ideas flows (about a minute), for development.
- Needs Playwright (local, global or in the npx cache) and an installed Chromium.
- `tests/` is a development tool: do not publish it with the app.

## Round 23 (18 November 2026)

- `tests/smoke.mjs`, described above, replaces the ad-hoc scans. `vMissing` now carries the class `missing` so the test can tell a handled 404 from a broken route.
- `helloSub` is shortened and hidden while the intro sheet is open (`body.intro-open`).
- New covers `assets/vignettes/book-<stage>-2.webp` for the five 9-14 second books; sources in `assets-src/vignettes2/`.
- Parent mode: «حديث العائلة بعد الكتاب» (`book.family.q` + `book.family.act`) is collapsed on the book page, and «يدي» → «ملخص الأسبوع» lists books finished that week.
- The app.js split into ES modules was deferred: ~40 shared mutable bindings, and `type="module"` scripts do not run from `file://`. Safer path: first gather the state into one object, then split.

## Security, install and share (22 Nov 2026)

- Stored data and restored backups pass through `cleanState`/`cleanProfiles` in app.js: known keys only, typed values, bounded sizes; a backup file over 5 MB or not JSON is refused, and a restore is all or nothing.
- A failed write (storage full, or blocked in private modes) shows one notice; the session keeps working in memory.
- `?ed=adult` / `?ed=kids` never convert a profile in use: they take an unused profile, open an existing profile of that edition, or ask (create one beside it / use this one when it has no progress / stay).
- Share: the top-bar button (Web Share API, else a sheet with both links and "Copy link"). The adult link is `adult/`: a copy of `index.html` with the adult preview tags and `<base href="/">`, generated by `outputs/publish/adult_page.py` (the build runs it); `app.js` reads the edition from the path. The share sheet in Settings also shows QR codes (`assets/qr-*.svg`, drawn by the build) and links `/parents/`.
- Install: an install card on the home page (iOS guide, or the browser's install prompt), and the same in Settings. Preview images: `assets/og-image*.jpg`; iOS launch screens: `assets/splash/`; manifest screenshots: `assets/screens/`.
- Service worker: a new version waits; the app shows "A new version is ready" and switches on "Update now". Keep the `?v=` numbers in `sw.js` CORE equal to those in `index.html` (the smoke test checks it).
- Security headers are written by `outputs/publish/build_public.py` (`_headers`); the smoke test serves pages with the same CSP.

## Five improvements (22 Nov 2026, docs/FIVE-IDEAS.md)

- Idea 1 (today's step and "go and live it") was removed by the owner's decision on 22 Nov 2026: the home page opens with the hand; an old stored `step` is dropped by `cleanState`. The evening card sits under the hand.

- Routes: `#/evening` (evening reckoning), `#/seen` (what my family saw in me), `#/choice/<id>` (choice story).
- Per-profile state (checked in `cleanState`, carried in backups): `eve` (day → `{f: stage, g?: thanks ≤120, t}`), `khab` (dates only, ≤3 a day), `chs` (story id → `{c: first choice, t?: ending reached}`).
- Device/family state: `localStorage["tazkiya-family"]` = `{ pact?: {v: "stage:i", from, to (a Friday)}, past: [...{how?}], seen: [{id, from, to, v?, tx?, t, got?}] }`, checked by `cleanFamily`, carried in backups as `family`.
- Content key `choices` (content.js, and content-adult.js with ids `ach-…`): `{ id, stage, trait (degree index), age, title, intro: {ar:[…], en:[…]}, q: {ar, ar_f, en}, opts: [{ t, out, why, weak? }] (2-3, at least one not weak), end }`, exactly one story per stage in each edition. Checked by the smoke test's contract (`checkChoices`).
