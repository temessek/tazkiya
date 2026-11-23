# Contributing to Tazkiya

<div dir="rtl">

شكرًا لرغبتك في تحسين تزكية. التطوير يجري هنا، في هذا المستودع وحده.

- **الاقتراحات والأخطاء:** افتح مسألة (Issue) في https://github.com/temessek/tazkiya/issues باختيار «اقتراح» أو «خطأ».
- **التعديلات:** أرسل طلب دمج (Pull Request) إلى `temessek/tazkiya`. التطبيق ملفات ثابتة دون خطوة بناء: عدّل في `app/` وجرّب محليًا كما في `README.md`.
- **قبل الإرسال:** شغّل `node tests/smoke.mjs --no-shots` من داخل `app/` وتأكد أنه يمر.
- **قواعد المحتوى:** كل آية أو حديث يُنقل حرفيًا من مصدر موثق مع رقمه، والصلاة على النبي «صلى الله عليه وآله وسلم»، ولأهل البيت «عليهم السلام». كل نص جديد بالعربية والإنجليزية معًا. أسماء المراتب تصف السلوك، ولا بيانات أو صور لأطفال حقيقيين. لا مكتبات خارجية ولا طلبات إلى مواقع أخرى ولا أدوات تتبع.
- **رسائل الإيداع:** بصيغة Conventional Commits، مثل `fix: correct hadith reference in pig stage`.
- **حق الاستعمال:** بفتح طلب الدمج تمنح المشروع حق استعمال مساهمتك وتعديلها ونشرها جزءًا من تزكية.
- **المراجعة والنشر:** المشرفون يراجعون الطلبات ويدمجونها، والنشر على الموقع للمشرفين وحدهم.

</div>

Thank you for wanting to improve Tazkiya. Development happens here, in this repository only.

- **Suggestions and bugs:** open an Issue at https://github.com/temessek/tazkiya/issues and pick "Suggestion" or "Bug".
- **Changes:** send a Pull Request to `temessek/tazkiya`. The app is static files with no build step: edit in `app/` and try it locally as described in `README.md`.
- **Before you send it:** run `node tests/smoke.mjs --no-shots` from `app/` and make sure it passes.
- **Content rules:** every verse or hadith is quoted exactly from a verified source with its number; use «صلى الله عليه وآله وسلم» for the Prophet and «عليهم السلام» for the Ahl al-Bayt. Every new text comes in both Arabic and English. Stage names describe behaviour, and no real children's data or photos are added. No external libraries, requests to other sites or tracking.
- **Commit messages:** Conventional Commits, for example `fix: correct hadith reference in pig stage`.
- **Right to use:** by opening a Pull Request you grant the project the right to use, modify and publish your contribution as part of Tazkiya.
- **Review and deploy:** maintainers review and merge, and only maintainers deploy.

The repository is "all rights reserved" (see `LICENSE`): it is open for review and contribution, not for copying into another app or site.
