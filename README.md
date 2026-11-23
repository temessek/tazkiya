# تزكية · Tazkiya

<div dir="rtl">

## بالعربية

تزكية تطبيق ويب بالعربية والإنجليزية يرافق الطفل، ثم الكبير، في مسار متدرج لتهذيب السلوك والأخلاق. يبدأ من الأخلاق الذميمة ويصعد إلى السلوك الإنساني السوي، ثم إلى التزكية وفعل الخير. في كل مرحلة قراءات قصيرة من القرآن والسنة وكتب الأدب، ثم أسئلة تطبيقية، ومهام يومية، ومراجعة مسائية.

### الروابط

- نسخة الأطفال: https://tazkiya.family
- نسخة الكبار: https://tazkiya.family/adult/
- صفحة الوالدين: https://tazkiya.family/parents/

### الخصوصية

لا خادم للتطبيق ولا حسابات ولا تحليلات. كل التقدم يُحفظ على جهاز المستخدم وحده، ولا يُرسل شيء إلى أي جهة. الصفحات لا تحمّل شيئًا من خارج موقعها، وسياسة أمان المحتوى تمنع ذلك.

### البنية

- `app/`: التطبيق كاملًا، صفحات HTML وCSS وJavaScript ثابتة، تعمل كما هي دون خطوة بناء، وتُثبَّت تطبيقًا (PWA) مع عامل خدمة للعمل دون اتصال.
- `app/content/`: نصوص المراحل والقراءات والأسئلة (`content.js` للأطفال، `content-adult.js` للكبار، `books.js` للكتب).
- `app/assets/`: الرسوم والخطوط والأيقونات المستعملة فعلًا. `app/assets-src/` فيها الخطوط المصدرية وتعليمات توليد الرسوم ونصوصها؛ صور المصدر الكبيرة لم تُرفع إلى المستودع.
- `app/tests/`: اختبار شامل يمر على كل المسارات باللغتين وبثلاثة أعراض للشاشة، ويتحقق من سلامة المحتوى.
- `publish/`: أداة بناء النسخة العامة ونشرها.
- `server/`: الحسابات الاختيارية ومزامنة التدوين (Cloudflare Pages Functions وD1 وWorkers AI). قيد التجربة على نسخة معاينة، ولم يُربط بالتطبيق المنشور بعد. اختباراته: `npm test` من داخل `server/`.

### التشغيل محليًا

```
python -m http.server 8770 --bind 127.0.0.1 --directory app
```

ثم افتح http://127.0.0.1:8770 في المتصفح.

### الاختبارات

من داخل `app/`:

```
node tests/smoke.mjs --no-shots
```

يحتاج Playwright ومتصفح Chromium مثبتًا (`npx playwright install chromium`). يستغرق التشغيل الكامل بضع دقائق، و`--content-only` يفحص المحتوى وحده في ثوانٍ. يخرج الاختبار برمز 1 عند أي خطأ.

### البناء والنشر (للمشرفين فقط)

```
python publish/build_public.py
npx wrangler@4 pages deploy public-dist --project-name tazkiya --branch main --commit-dirty=true
```

أداة البناء تنسخ ما يحمّله التطبيق فقط، وتصغّر الملفات، وتكتب ترويسات الأمان، وتوقف البناء إن وجدت مسارًا محليًا أو بريدًا أو بيانات وصفية في الصور. ارفع اسم الذاكرة المؤقتة `CACHE` في `app/sw.js` مع كل نشر.

### المساهمة

هذا المستودع مفتوح ليتطور فيه تطبيق تزكية نفسه، ونرحب بكل من يشارك في ذلك. ضع اقتراحاتك وما تجده من أخطاء في [المسائل (Issues)](https://github.com/temessek/tazkiya/issues)، وأرسل تعديلاتك طلبات دمج ([Pull Requests](https://github.com/temessek/tazkiya/pulls)) إلى هذا المستودع، بعد قراءة `CONTRIBUTING.md`. المشرفون يراجعون الطلبات ويدمجونها وينشرونها.

### قواعد المحتوى

- كل آية تُنقل من مصحف موثق، وكل حديث يُنقل من مصدره مع رقمه، ولا يُنسب قول إلى النبي صلى الله عليه وآله وسلم دون تخريج.
- الصلاة على النبي بصيغة «صلى الله عليه وآله وسلم»، ولأهل البيت «عليهم السلام».
- كرامة الطفل شرط تصميمي: أسماء المراتب تصف السلوك، والطفل يرتقي بسلوكه من مرتبة إلى أخرى.
- لا بيانات أطفال حقيقيين ولا صورهم في أي ملف أو مثال.

### الترخيص

جميع الحقوق محفوظة (`LICENSE`). الشيفرة والنصوص والرسوم معروضة للاطلاع والمساهمة في هذا التطبيق، ونسخها أو بناء تطبيق أو موقع آخر منها يحتاج إذنًا مكتوبًا. الآيات والأحاديث منقولة من مصادرها.

</div>

## English

Tazkiya is a bilingual Arabic and English web app that walks a child, and an adult, through a graded path of moral growth. It starts from blameworthy traits, rises to ordinary decent human conduct, and then to self-purification (tazkiya) and doing good. Each stage has short readings from the Quran, the Sunnah and classical works on character, followed by practical questions, daily tasks and an evening review.

### Links

- Children's edition: https://tazkiya.family
- Adult edition: https://tazkiya.family/adult/
- For parents: https://tazkiya.family/parents/

### Privacy

There is no server, no account and no analytics. All progress stays on the user's own device and nothing is sent anywhere. Pages load nothing from outside their own origin, and the content security policy enforces that.

### Structure

- `app/`: the whole app as static HTML, CSS and JavaScript. It runs as is, with no build step, and installs as a PWA with a service worker for offline use.
- `app/content/`: stage texts, readings and questions (`content.js` for children, `content-adult.js` for adults, `books.js` for the books).
- `app/assets/`: the illustrations, fonts and icons the app actually loads. `app/assets-src/` holds source fonts and the briefs and scripts used to make the illustrations; the large source images are not in the repository.
- `app/tests/`: an end-to-end smoke test over every route in both languages at three screen widths, plus a content contract check.
- `publish/`: the public build and deploy tooling.
- `server/`: optional accounts and journal sync (Cloudflare Pages Functions, D1, Workers AI). Being tested on a preview deployment; the published app does not use it yet. Tests: `npm test` from inside `server/`.

### Run locally

```
python -m http.server 8770 --bind 127.0.0.1 --directory app
```

Then open http://127.0.0.1:8770.

### Tests

From `app/`:

```
node tests/smoke.mjs --no-shots
```

It needs Playwright and an installed Chromium (`npx playwright install chromium`). A full run takes a few minutes; `--content-only` checks the content alone in seconds. The exit code is 1 on any failure.

### Build and deploy (maintainers only)

```
python publish/build_public.py
npx wrangler@4 pages deploy public-dist --project-name tazkiya --branch main --commit-dirty=true
```

The build copies only what the app loads, minifies it, writes the security headers, and stops if it finds a local path, an email address or image metadata. Bump the `CACHE` name in `app/sw.js` with every deploy.

### Contributing

This repository is open so that the Tazkiya app itself can grow, and everyone who helps is welcome. Put suggestions and bugs in [Issues](https://github.com/temessek/tazkiya/issues), and send changes as [Pull Requests](https://github.com/temessek/tazkiya/pulls) to this repository after reading `CONTRIBUTING.md`. Maintainers review, merge and deploy.

### Content rules

- Every verse is quoted from a verified mushaf text and every hadith from its source with its number. Nothing is attributed to the Prophet without a reference.
- The Prophet is honoured with «صلى الله عليه وآله وسلم» and the Ahl al-Bayt with «عليهم السلام».
- Child dignity is a design requirement: stage names describe behaviour, and a child rises through them by changing that behaviour.
- No real children's data or photos in any file or example.

### License

All rights reserved (`LICENSE`). The code, texts and illustrations are visible for review and for contributions to this app; copying them or building another app or site from them needs written permission. Quranic verses and hadith are quoted from their sources. The bundled fonts keep their SIL Open Font License (`app/assets/fonts/OFL.txt`).
