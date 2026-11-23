/* Tazkiya (تزكية), formerly Akhlaq Path: the sideways-hand app. Static, no build. Demo user only. */
(function () {
  "use strict";

  /* ---------- content ---------- */
  const FB = window.AKHLAQ_FALLBACK || { stages: {}, virtues: [] };
  const RAW = (window.AKHLAQ_CONTENT && window.AKHLAQ_CONTENT.stages) ? window.AKHLAQ_CONTENT : null;
  const ORDER = ["zombie", "pig", "monkey", "human", "sabiq"];
  const LOWER = ["zombie", "pig", "monkey"];
  const C = { stages: {}, virtues: (RAW && RAW.virtues && RAW.virtues.length) ? RAW.virtues : (FB.virtues || []) };
  // editions: "kids" (content.js) and "adult" (content/content-adult.js, loaded on demand).
  // An adult stage replaces the children's stage whole; a stage not yet written for adults falls back to the children's one.
  const ADULT = () => (window.AKHLAQ_CONTENT_ADULT && window.AKHLAQ_CONTENT_ADULT.stages) ? window.AKHLAQ_CONTENT_ADULT : null;
  let ED = "kids"; // edition of the content currently built into C
  function buildC(ed) {
    const A = ed === "adult" ? ADULT() : null;
    ORDER.forEach(id => {
      const ad = A && A.stages[id], k = (RAW && RAW.stages[id]) || {};
      const a = ad || k, b = FB.stages[id] || {};
      const s = {};
      ["name", "short", "signs", "climb", "degrees", "readings", "quiz", "tasks", "selfcheck"].forEach(key => {
        const v = a[key], kv = ad ? k[key] : null;
        s[key] = (v && (!Array.isArray(v) || v.length)) ? v : (kv && (!Array.isArray(kv) || kv.length)) ? kv : (b[key] || (key === "name" || key === "short" ? { ar: "", en: "" } : []));
      });
      s.parent = (!ad && a.parent && (a.parent.ar || a.parent.en)) ? a.parent : null;
      s.adult = !!ad;
      C.stages[id] = s;
    });
    const kidsOnb = (RAW && Array.isArray(RAW.onboarding) && RAW.onboarding.length) ? RAW.onboarding : null;
    const kidsDaily = (RAW && Array.isArray(RAW.daily)) ? RAW.daily : [];
    C.onboarding = (A && Array.isArray(A.onboarding) && A.onboarding.length) ? A.onboarding : kidsOnb;
    C.daily = A ? (Array.isArray(A.daily) ? A.daily : []).concat(kidsDaily.filter(d => !A.stages[d.stage])) : kidsDaily;
    // choice stories: the adult edition's own, and the children's for any stage without an adult one
    const okCh = a => (Array.isArray(a) ? a : []).filter(x => x && x.id && ORDER.includes(x.stage) && Array.isArray(x.opts) && x.opts.length >= 2);
    const kidsCh = okCh(RAW && RAW.choices), adCh = okCh(A && A.choices);
    C.choices = A ? adCh.concat(kidsCh.filter(x => !adCh.some(y => y.stage === x.stage))) : kidsCh;
    ED = A ? "adult" : "kids";
  }
  buildC("kids");
  C.faq = (RAW && Array.isArray(RAW.faq)) ? RAW.faq : [];
  const okBooks = a => (Array.isArray(a) ? a : []).filter(b => b && b.id && Array.isArray(b.chapters) && b.chapters.length);
  C.books = okBooks(Array.isArray(window.AKHLAQ_BOOKS) ? window.AKHLAQ_BOOKS : RAW && RAW.books);
  // books may move to content/books.js (window.AKHLAQ_BOOKS); it is loaded only when a book screen needs it
  let booksState = Array.isArray(window.AKHLAQ_BOOKS) ? "ready" : "idle"; // AKHLAQ_BOOKS wins; content.books serves meanwhile
  C.circle = (RAW && Array.isArray(RAW.circle)) ? RAW.circle.slice().sort((a, b) => (a.week || 0) - (b.week || 0)) : [];
  C.muhasaba = (RAW && RAW.muhasaba) || FB.muhasaba || null;
  C.muhasabaPh = !(RAW && RAW.muhasaba);
  const USING_FALLBACK = !RAW;

  /* ---------- geometry on hand.webp (1448 x 1086) ---------- */
  const G = {
    zombie: { finger: "little", color: "#8f8f8a",
      poly: "155,880 180,845 300,830 480,825 620,815 660,880 610,945 480,940 300,935 180,920",
      cap: { x: 145, y: 828, w: 500, h: 110, rot: 0 }, chip: [252, 882],
      degs: [[565, 880], [440, 882], [272, 884]] },
    pig: { finger: "ring", color: "#ee865b",
      poly: "60,740 80,700 200,693 480,688 620,690 650,760 610,810 480,808 200,802 80,785",
      cap: { x: 48, y: 688, w: 595, h: 120, rot: 0 }, chip: [152, 746],
      degs: [[530, 748], [340, 746], [162, 746]] },
    monkey: { finger: "middle", color: "#e6af3f",
      poly: "45,600 60,565 200,545 480,550 620,550 650,610 610,685 480,680 200,655 60,640",
      cap: { x: 32, y: 545, w: 605, h: 118, rot: 0 }, chip: [142, 600],
      degs: [[520, 606], [340, 602], [152, 600]] },
    human: { finger: "index", color: "#39afc6",
      poly: "100,430 130,398 300,385 480,392 600,398 650,470 610,530 560,548 400,500 200,490 110,470",
      cap: { x: 88, y: 382, w: 545, h: 118, rot: 0 }, chip: [192, 440],
      degs: [[540, 446], [392, 440], [212, 440]] },
    sabiq: { finger: "thumb", color: "#d9a21b",
      poly: "515,165 540,130 580,130 700,190 850,270 960,330 900,410 780,400 720,360 640,280 540,220",
      cap: { x: 487, y: 202, w: 470, h: 120, rot: 31 }, chip: [604, 190],
      degs: [[830, 312], [622, 196]] }
  };
  const FINGER = {
    little: { ar: "الخنصر", en: "little finger" }, ring: { ar: "البنصر", en: "ring finger" }, middle: { ar: "الوسطى", en: "middle finger" },
    index: { ar: "السبابة", en: "index finger" }, thumb: { ar: "الإبهام", en: "thumb" }
  };

  /* ---------- finger mappings (placeholder, compared live from settings) ---------- */
  const FINGERS = ["little", "ring", "middle", "index", "thumb"];
  const GF = {}; ORDER.forEach(id => { GF[G[id].finger] = G[id]; });
  const MAPS = {
    one: { L: { little: "zombie", ring: "pig", middle: "monkey", index: "human", thumb: "sabiq" }, R: null },
    two: { L: { little: "zombie", ring: "pig", middle: "monkey", index: "slot", thumb: "human" },
           R: { little: "v:v-salih", ring: "v:v-shahid", middle: "v:v-siddiq", index: "v:v-muqarrab", thumb: "prophets" } },
    right: { L: null, R: { little: "v:v-salih", ring: "v:v-shahid", middle: "v:v-siddiq", index: "v:v-muqarrab", thumb: "prophets" } }
  };
  const VCOL = { little: "#4daf89", ring: "#39afc6", middle: "#987bc1", index: "#d9a21b", thumb: "#e6af3f" };
  const MODE = () => (MAPS[S.map] ? S.map : "one");
  // which finger a stage sits on in the active left hand (falls back to the one-hand mapping)
  function fingerOf(id) {
    const L = MAPS[MODE()].L || MAPS.one.L;
    for (const f of FINGERS) if (L[f] === id) return f;
    return null;
  }
  function findVirtue(vid) {
    const list = C.virtues || [];
    return list.find(v => v.id === vid) || null;
  }

  /* ---------- strings ---------- */
  const U = {
    brand: ["تزكية", "Tazkiya"],
    hello: ["أهلًا يا {n}", "Hello, {n}"],
    helloSub: ["كل إصبع مرحلة، وكل عُقلة سمة من سماتها.", "Each finger a stage, each joint one of its traits."],
    hint: ["اضغط على كل إصبع لتعرف رمزيته وأين أنت منه", "Tap each finger to learn what it stands for and where you are on it"],
    dignity: ["الأسماء تصف السلوك، لا تصف الإنسان.", "The names describe behaviour, never the person."],
    principle: ["قيمة الإنسان من قيمة أخلاقه وقيمه وسلوكياته، وكل إصبع يمثّل درجة من درجات الوعي.", "A person's worth is the worth of their character, values and behaviour, and each finger stands for a degree of awareness."],
    ph: ["عنصر مؤقت", "placeholder"],
    open: ["افتح المرحلة", "Open this stage"],
    yourShare: ["نصيبك منها الآن", "Your share now"],
    degNote: ["الأولى عند الكف، والأخيرة عند طرف الإصبع. لكل سمة سيئة علاجها، ثم ما تصير إليه حين تتحول إلى خير.", "The first sits by the palm, the last at the fingertip. Each bad trait has its cure, and then what it becomes once it turns to good."], dgCure: ["كيف نتخلّص منها", "How to leave it behind"], dgTurn: ["حين تتحول إلى خير", "When it turns to good"], turnTo: ["تتحول إلى: {x}", "Turns into: {x}"],
    degrees: ["العُقَل وسماتها", "The joints and their traits"],
    signsOf: ["سمات ", ""], signsSuffix: ["", " signs"],
    signsSub: ["علامات تظهر في اليوم. اضغط «لاحظتها اليوم» على ما رأيته في نفسك.", "Signs that show up in a day. Tap \"noticed today\" on any you saw in yourself."],
    noticed: ["لاحظتها اليوم", "Noticed today"],
    climb: ["كيف أصعد منها", "How to climb"],
    readings: ["قراءات", "Readings"],
    minutes: ["دقائق", "min"], ages: ["العمر", "Ages"], agesAll: ["للجميع", "all ages"],
    read: ["قرأتها", "Read"],
    quiz: ["اختبار", "Quiz"], startQuiz: ["ابدأ الاختبار", "Start the quiz"], questions: ["أسئلة", "questions"],
    tasks: ["مهام", "Tasks"], tasksTab: ["المهام", "Tasks"], handTab: ["افهم المبدأ", "The principle"], meTab: ["يدي", "My hand"],
    back: ["رجوع", "Back"],
    continue: ["تابع من هنا", "Pick up here"],
    rightHand: ["اليد اليمنى: درجات الكمال", "The right hand: ranks of virtue"],
    rightHandSub: ["بعد الإبهام تبدأ يد أخرى للفضائل. الترتيب على الأصابع مقترح.", "Beyond the thumb another hand begins, for virtues. Order on the fingers is a proposal."],
    summitT: ["النور فوق الإبهام", "The light beyond the thumb"],
    summitB: ["النور هو نور الهداية التي أتى بها الأنبياء عليهم السلام، وبنورهم ورسالاتهم يُهتدى.", "The light is the light of guidance the prophets, peace be upon them, brought; by their light and their messages we are guided."],
    close: ["إغلاق", "Close"],
    verify: ["يُطابَق على المصحف", "to verify against the mushaf"], verifyHadith: ["يُراجَع تخريجه", "source to be reviewed"],
    checkedQuran: ["مطابق للمصحف الرقمي", "matched to the digital mushaf"], checkedHadith: ["مطابق لمصدر الحديث الرقمي", "matched to a digital hadith source"],
    textSize: ["حجم الخط", "Text size"],
    toQuiz: ["اختبر فهمك", "Check your understanding"],
    comp: ["فهم", "Understanding"], sit: ["ماذا تفعل؟", "What would you do?"],
    right: ["أحسنت", "Well done"], wrong: ["ليس تمامًا", "Not quite"],
    next: ["التالي", "Next"], finish: ["النتيجة", "See result"],
    result: ["النتيجة", "Result"], again: ["أعد الاختبار", "Try again"],
    already: ["أجبت عنه من قبل، فلا يتغير المزيج.", "Answered before, so the mix doesn't change."],
    moved: ["انتقل {n}% من {a} إلى {b}", "{n}% moved from {a} to {b}"],
    noQuiz: ["لا أسئلة هنا بعد.", "No questions here yet."],
    did: ["فعلتها", "I did it"], waiting: ["تنتظر تأكيد الوالد", "Waiting for a parent"], confirmed: ["أنجزتها", "Done"],
    confirm: ["تأكيد", "Confirm"], notYet: ["ليس بعد", "Not yet"],
    parentMode: ["وضع الوالدين", "Parent mode"], parentOn: ["وضع الوالدين مفعّل", "Parent mode is on"], exitParent: ["خروج", "Exit"],
    pinT: ["أدخل رمز الوالدين", "Enter the parent PIN"], pinDemo: ["رمز تجريبي: 1234", "Demo PIN: 1234"], pinErr: ["الرمز غير صحيح", "Wrong PIN"],
    selfT: ["تقييم ذاتي", "Self-check"], selfQ: ["أي إصبع ظهر فيك أكثر اليوم؟", "Which finger showed most in you today?"], selfSaved: ["سُجّل تقييمك لليوم", "Today's self-check saved"],
    myT: ["مهامي اليومية", "My daily tasks"], mySub: ["مهامك الشخصية لكل يوم، تبدأ من جديد كل صباح.", "Your own tasks for each day. They start fresh every morning."],
    myEmpty: ["لا مهام بعد. اكتب مهمة، أو اختر من الاقتراحات.", "No tasks yet. Write one, or pick a suggestion."], myPh: ["مهمة جديدة، مثل: أرتّب سريري", "A new task, e.g. make my bed"],
    myAdd: ["أضف", "Add"], mySug: ["اقتراحات", "Suggestions"], myLink: ["صِلها بإصبع:", "Link to a finger:"], myDel: ["احذف", "Remove"], myNone: ["بلا", "None"],
    myToday: ["تمّ {a} من {b} اليوم", "{a} of {b} done today"], stageTasksT: ["مهام المراحل", "Stage tasks"], stageTasksSub: ["مهام لكل إصبع، وكل مهمة تنجزها ترفع المزيج.", "Tasks for each finger; each one you finish lifts the mix."],
    dashToday: ["يومي", "My day"], dashWeek: ["آخر سبعة أيام", "The last seven days"], dashStreak: ["أيام متتالية: {n}", "Days in a row: {n}"], dashStreakS: ["أيام متتالية", "days in a row"],
    dashMission: ["مهمة اليوم", "Today's mission"], dashReads: ["قراءات اليوم", "Readings today"], dashAns: ["إجابات اليوم", "Answers today"], dashGo: ["إلى المهام", "To tasks"],
    statMy: ["مهمة يومية تمّت", "daily tasks done"], statDays: ["يوم نشاط", "active days"],
    meT: ["يدي", "My hand"], meSub: ["سلوكياتك الآن. ترتقي بالفهم والعمل والتطبيق.", "Your behaviours right now. You rise through understanding, work and practice."], toWork: ["إلى العمل: أنجز مهام هذه المرحلة", "To work: do this stage's tasks"], learnStage: ["افهم وتعلّم: كيف تزكّي نفسك في هذه المرحلة", "Understand and learn: purifying yourself at this stage"], tLearn: ["تعلّم", "Learn"], readStage: ["اقرأ عن المرحلة", "Read about this stage"], tToday: ["اليوم", "Today"], tTodayT: ["قائمة اليوم", "Today's list"], tMission: ["مهمة اليوم", "Today's mission"], tStages: ["مهام المراحل", "Tasks by stage"], tMore: ["اقتراحات وربط بإصبع", "Suggestions and linking to a finger"], tSteps: ["مهام لكل سمة", "Tasks for each trait"], readOk: ["✓ سُجّلت قراءتك", "✓ Your reading is recorded"], readWait: ["تُسجَّل القراءة حين تصل إلى آخرها وتقرؤها على مهل.", "The reading is recorded once you reach the end, reading at a steady pace."], readSaved: ["سُجّلت القراءة", "Reading recorded"], recT: ["سجلّ التقدم", "Progress record"], recSub: ["ما قرأته وما أجبت عنه وما أنجزته، بتاريخه، محفوظًا على هذا الجهاز.", "What you read, answered and did, with dates, saved on this device."], recSubShort: ["ما قُرئ وما أُجيب وما أُنجز، بتاريخه", "What was read, answered and done, with dates"], recDays: ["أيام الحضور", "Days present"], recStreak: ["أيام متتالية الآن", "Days in a row now"], recSince: ["البداية", "Started"], recReads: ["قصص قُرئت", "Stories read"], recChaps: ["فصول كتب قُرئت", "Book chapters read"], recAns: ["أسئلة أُجيب عنها", "Questions answered"], recRight: ["صحيحة من أول مرة", "Right first time"], recTasks: ["مهام منجزة", "Tasks done"], recNotRead: ["لم تُقرأ بعد", "Not read yet"], recMin: ["{n} د", "{n} min"], recSec: ["أقل من دقيقة", "under a minute"], recQuiz: ["الاختبار: أُجيب عن {a} من {b}، منها {c} صحيحة من أول مرة.", "Quiz: {a} of {b} answered, {c} right first time."], recLast14: ["آخر أسبوعين", "Last two weeks"], recOpen: ["سجلّ التقدم المفصّل", "Detailed progress record"], recNone: ["لا شيء بعد", "Nothing yet"], bkT: ["حفظ البيانات", "Keeping your data"], bkPersistOk: ["محفوظة على هذا الجهاز، والمتصفح لن يحذفها من تلقاء نفسه.", "Saved on this device; the browser will not clear it on its own."], bkPersistNo: ["محفوظة على هذا الجهاز، لكن المتصفح قد يحذفها إن امتلأت ذاكرته أو مُسحت بيانات المواقع. ثبّت التطبيق، واحفظ نسخة احتياطية من حين لآخر.", "Saved on this device, but the browser may clear it if storage fills up or site data is cleared. Install the app and save a backup now and then."], bkExport: ["احفظ نسخة احتياطية", "Save a backup"], bkImport: ["استعد من نسخة", "Restore a backup"], bkLast: ["آخر نسخة احتياطية: {d}", "Last backup: {d}"], bkNever: ["لم تُحفظ نسخة احتياطية بعد.", "No backup saved yet."], bkAsk: ["ستحلّ النسخة المختارة محل كل البيانات الحالية على هذا الجهاز. أنكمل؟", "The chosen backup will replace all current data on this device. Continue?"], bkYes: ["نعم، استعد النسخة", "Yes, restore it"], bkBad: ["هذا الملف ليس نسخة احتياطية من تزكية", "This file is not a Tazkiya backup"], bkSaved: ["حُفظ ملف النسخة الاحتياطية", "Backup file saved"], presT: ["حضورك اليوم", "Your presence today"], presOk: ["✓ حضرت اليوم", "✓ You showed up today"], presNo: ["لم تحضر بعد اليوم: علّم تحدياتك، أو اقرأ قصة، أو أجب سؤالًا.", "Not yet today: mark your challenges, read a story, or answer a question."], presStart: ["ابدأ تحديًا من مهام المراحل", "Start a challenge from the stage tasks"], trToday: ["أنجزتها اليوم", "Done today"], trDoneToday: ["✓ اليوم", "✓ Today"], trOf: ["{n} من 7 أيام", "{n} of 7 days"], trDayN: ["اليوم {n} من 7. أحسنت", "Day {n} of 7. Well done"], trWeekDone: ["أتممت سبعة أيام، وفُتحت العادة الثابتة", "Seven days done: the lasting habit is open"], trHabitMeta: ["متتالية: {s} · كل الأيام: {a}", "In a row: {s} · All days: {a}"], trHabitDay: ["فعلتها اليوم. متتالية: {s}", "Done today. In a row: {s}"], trActive: ["تحدياتي الجارية", "My running challenges"], trActiveSub: ["تحدي الأيام السبعة والعادات الثابتة. علّم ما فعلته اليوم.", "Seven-day challenges and lasting habits. Mark what you did today."], trNone: ["حين تنجز «الخطوة الأولى» لسمة في مهام المراحل، يظهر تحديها هنا كل يوم.", "When you finish a trait's first step in the stage tasks, its challenge shows up here every day."], stepLearn: ["افهم السمات", "Understand the traits"], stepRead: ["اقرأ القصص", "Read the stories"], stepQuiz: ["اختبر فهمك", "Check your understanding"], stepWork: ["إلى العمل", "To work"], secLearn: ["افهم: سمات هذه المرحلة", "Understand: this stage's traits"], secRead: ["اقرأ: قصص هذه المرحلة", "Read: this stage's stories"], readSub: ["كتب بفصول تُقرأ على أيام، وقصص قصيرة تُقرأ في دقائق. في آخر كل قصة أسئلة عنها.", "Chapter books to read over several days, and short stories that take a few minutes. Each story ends with questions about it."], booksH: ["كتب بفصول", "Chapter books"], storiesH: ["قصص قصيرة", "Short stories"], allBooks: ["كل كتب المكتبة ({n})", "The whole library ({n})"], quizSub: ["أسئلة من قصص هذه المرحلة وسماتها، تراجع بها ما فهمت.", "Questions from this stage's stories and traits, to review what you understood."], nTraits: ["{n} سمات", "{n} traits"], nTraits2: ["سمتان", "2 traits"], oneBook: ["كتاب واحد", "1 book"], nBooks: ["{n} كتب", "{n} books"], toTrait: ["إلى مهام هذه السمة", "To this trait's tasks"], obsT: ["علامات لاحظتها اليوم", "Signs I noticed today"], tiersSub: ["لكل سمة ثلاث درجات: خطوة أولى، ثم سبعة أيام، ثم عادة ثابتة. تُفتح كل درجة بعد إنجاز التي قبلها.", "Each trait has three levels: a first step, then seven days, then a lasting habit. Each level opens once the one before it is done."], tierStep: ["خطوة أولى", "First step"], tierWeek: ["سبعة أيام", "Seven days"], tierHabit: ["عادة ثابتة", "Lasting habit"], signsOfNm: ["سمات {s}", "Signs of {s}"], tQuiz: ["اختبر فهمك", "Check your understanding"], tStageTasks: ["مهام عامة", "General tasks"], tDone: ["{a} من {b}", "{a} of {b}"], pwaInstall: ["ثبّت التطبيق على جهازك", "Install the app on this device"], pwaHow: ["للتثبيت: افتح قائمة المتصفح واختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».", "To install: open the browser menu and choose \"Install app\" or \"Add to Home Screen\"."], pwaT: ["التطبيق على جهازك", "The app on your device"],
    statRead: ["قراءة", "readings"], statRight: ["إجابة صحيحة", "right answers"], statTasks: ["مهمة مؤكدة", "tasks confirmed"],
    hist: ["آخر التغييرات", "Recent changes"], histEmpty: ["لا تغييرات بعد.", "No changes yet."],
    rulesT: ["كيف يتغير المزيج", "How the mix changes"],
    rules: ["إجابة صحيحة: +2 نحو المرتبة الأعلى. إجابة خاطئة: −1. مهمة منجزة: +1. والغياب عن التطبيق لا يغيّر شيئًا.", "Right answer: +2 toward the higher stage. Wrong answer: −1. Completed task: +1. Being away from the app changes nothing."],
    reset: ["ابدأ هذا الملف من جديد", "Start this profile over"], resetDone: ["بدأ الملف من جديد", "The profile starts afresh"],
    demo: ["مستخدم تجريبي: {n}", "Demo user: {n}"],
    fallbackNote: ["محتوى تجريبي مؤقت إلى أن يصل ملف المحتوى", "Temporary demo content until the content file arrives"],
    welcomeBack: ["أهلًا بعودتك يا {n}", "Welcome back, {n}"], quizWord: ["اختبار", "quiz"], taskWord: ["مهمة", "task"],
    selfLog: ["تقييم ذاتي: {f}", "Self-check: {f}"],
    lower: ["الإصبع الأدنى", "Lower finger"], higher: ["الإصبع الأعلى", "Higher finger"], nextReading: ["القراءة التالية", "Next reading"],
    parentCard: ["يفعل الطفل المهمة، ثم يؤكدها الوالد.", "The child does the task, then a parent confirms it."],
    perFinger: ["التقدم في كل إصبع", "Progress on each finger"], rShort: ["قراءة", "read"], qShort: ["سؤال", "answered"], tShort: ["مهمة", "tasks"],
    next2: ["التالي", "Next"], prev2: ["السابق", "Back"],
    scT: ["تقييم ذاتي", "Self-check"], scSub: ["أجب بصدق، فهذا لك وحدك ولا يغيّر المزيج.", "Answer honestly. It's just for you and doesn't change the mix."],
    often: ["غالبًا", "Often"], sometimes: ["أحيانًا", "Sometimes"], rarely: ["نادرًا", "Rarely"],
    scTally: ["«غالبًا» في {a} من {b}", "\u201cOften\u201d on {a} of {b}"], pickFinger: ["اختر إصبعًا", "Pick a finger"],
    forParents: ["للوالدين", "For parents"],
    card: ["بطاقة الإشارة", "Sign card"], cardOf: ["سمات {f}", "{F} signs"], print: ["اطبع", "Print"], share: ["شارك", "Share"], copied: ["نُسخ نص البطاقة", "Card text copied"],
    cardFoot: ["تزكية · tazkiya.family", "Tazkiya · tazkiya.family"],
    today: ["مهمة اليوم", "Today's mission"],
    aloud: ["اقرأها بصوت عالٍ", "Read aloud"], aloudExit: ["عرض النص كاملًا", "Show full text"],
    rightHandWord: ["اليد اليمنى", "the right hand"],
    settings: ["الإعدادات", "Settings"], mapT: ["توزيع المراتب", "Stage mapping"],
    mapPh: ["اختر التوزيع لنقارن", "Pick a mapping to compare"],
    mapOne: ["يد واحدة", "One hand"], mapOneD: ["الخنصر سلوكيات الموتى أحياء (الزومبي)، ثم سلوكيات الخنزير، ثم سلوكيات القرد، والسبابة الآدمية (المسلم)، والإبهام السابق بالخيرات.", "Little finger: living-dead (zombie) behaviours, then pig behaviours, monkey behaviours, the index true humanity (the Muslim), the thumb racing to good."],
    mapTwo: ["يدان", "Two hands"], mapTwoD: ["اليسرى للأخلاق الدنيا وتنتهي بالآدمية (المسلم) في الإبهام، والسبابة خانة مفتوحة. واليمنى لدرجات الكمال.", "The left hand holds the lower ladder, ending with true humanity (the Muslim) at the thumb; the index is an open slot. The right hand holds the ranks of virtue."],
    mapRight: ["اليد اليمنى وحدها", "Right hand only"], mapRightD: ["عرض درجات الكمال وحدها على يد واحدة.", "Shows only the ranks of virtue on one hand."],
    leftT: ["اليد اليسرى: من الغفلة إلى الإنسان", "Left hand: from heedless to human"],
    rightT: ["اليد اليمنى: درجات الكمال", "Right hand: ranks of virtue"],
    rightSub: ["اضغط على إصبع لتقرأ عن درجته.", "Tap a finger to read about its rank."],
    slotT: ["خانة مفتوحة", "An open slot"], slotB: ["مرتبة حيوانية ثالثة محتملة لم تُحسم بعد، وتبقى السبابة فارغة إلى أن تُحسم.", "A possible third animal stage, not decided yet. The index stays empty until it is decided."],
    prophetsT: ["الاقتداء بالأنبياء عليهم السلام", "Following the Prophets, peace be upon them"],
    readVirtue: ["اقرأ عنها", "Read about it"], practice: ["تمرين", "Practice"],
    sabiqShare: ["نصيبك من السبق بالخيرات", "Your share of racing to good"],
    faqT: ["أسئلة الوالدين", "Parents' questions"],
    ttsPlay: ["استمع", "Listen"], ttsStop: ["أوقف القراءة", "Stop reading"], askChild: ["اسأل طفلك:", "Ask your child:"],
    faqLink: ["أسئلة الوالدين", "Parents' questions"],
    profT: ["الملف", "Profile"], profPh: ["يُحفظ على هذا الجهاز فقط", "Kept on this device only"],
    profName: ["الاسم", "Name"], boy: ["ولد", "Boy"], girl: ["بنت", "Girl"], profNote: ["اختيار «بنت» يعرض صيغة المؤنث حيث توفّرها المادة.", "\u201cGirl\u201d uses feminine Arabic wording where the content has it."],
    save: ["حفظ", "Save"], famTalk: ["حديث العائلة بعد الكتاب", "Family talk after the book"], famAct: ["نشاط الأسبوع معًا", "This week's shared activity"],
    wkBook: ["أنهى كتاب «{b}»", "Finished “{b}”"], climbSmall: ["خطوة صغيرة إلى أعلى", "A small step up"],
    ttsHint: ["للوالدين: لا يوجد صوت عربي على هذا الجهاز. ثبّتوا صوتًا عربيًا من إعدادات «تحويل النص إلى كلام» ليظهر زر 🔊.", "For parents: this device has no Arabic voice. Install one in the device's text-to-speech settings to show the 🔊 button."], storyQ: ["إلى الخطوة والسؤال على يدك", "To the step and the question, on your hand"], readFirst: ["اقرأ", "Read"],
    nextRead: ["القراءة التالية", "Next reading"], toMission: ["إلى مهام اليوم", "To today's tasks"], awaitT: ["بانتظار تأكيدك", "Waiting for your confirmation"],
    resetAsk: ["سيُمحى تقدّم هذا الملف كله، ويبدأ من المقدمة والجولة الأولى. يحسن حفظ نسخة احتياطية قبل ذلك.", "All progress of this profile will be cleared, and it starts again from the intro and the first tour. Saving a backup first is wise."],
    resetYes: ["نعم، من جديد", "Yes, start over"], resetNo: ["إلغاء", "Cancel"], loading: ["يُحمَّل…", "Loading…"],
    tourTouch: ["المس {f}", "Touch your {f}"], tourIs: ["{f}: {s}", "Your {f}: {s}"], tourName: ["اسم لسلوك نرتقي منه.", "A name for a behaviour we rise from."],
    tourTry: ["جرّب: {f}", "Try your {f}"], tourLight: ["وفوق الإبهام نور. المسه", "Above the thumb there is a light. Touch it"],
    tourLightT: ["النور فوق الإبهام", "The light above the thumb"], tourLightIs: ["هو نور الهداية التي أتى بها الأنبياء عليهم السلام، وبنورهم ورسالاتهم يُهتدى.", "It is the light of guidance the prophets, peace be upon them, brought; by their light and their messages we are guided."],
    tourEnd: ["كل إصبع سلوك نتعلّم أن نرتقي منه.", "Each finger is a behaviour we learn to rise from."], tourEndSub: ["في كل واحد منا شيء من كل إصبع، ونصعد خطوة خطوة.", "Each of us has a little of every finger, and we climb step by step."],
    filmAgain: ["شاهد قصة اليد من جديد", "Watch the story of the hand again"], tourNext: ["التالي", "Next"], tourGo: ["لنبدأ", "Let's begin"], tourSkip: ["تخطَّ الجولة", "Skip the tour"], tourAgain: ["أعد الجولة الأولى", "Replay the first tour"],
    wkT: ["ملخص الأسبوع", "This week"], wkSub: ["لكل طفل وحده، بلا مقارنة بين الإخوة. الأيام السبعة الأخيرة.", "Each child on their own, with no comparison between siblings. The last seven days."],
    wkReads: ["قراءات وفصول", "readings and chapters"], wkAns: ["إجابات", "answers"], wkRight: ["صحيحة", "right"], wkTasks: ["مهام أكّدتموها", "tasks you confirmed"], wkCircle: ["حلقة العائلة", "family circle"],
    wkMoved: ["أكثر ما تحرّك: {f} ({s})", "Moved most: {f} ({s})"], wkMore: ["زاد نصيبه", "its share grew"], wkLess: ["خفّ نصيبه", "its share eased"],
    wkFocus: ["اقتراح للأسبوع القادم", "A focus for next week"], wkFocusWhy: ["من {s}", "from {s}"],
    wkQuiet: ["أسبوع هادئ، لا نشاط مسجّل بعد. خطوة صغيرة تكفي للبداية.", "A quiet week, nothing recorded yet. One small step is enough to begin."], bookProgP: ["قرأت {a} من {b} صفحات", "{a} of {b} pages read"], yourAge: ["عمرك", "your age"], bookPg: ["{c} صفحات", "{c} pages"], pgOf: ["الصفحة {a} من {b}", "Page {a} of {b}"],
    pgQ: ["سؤال عن الصفحة", "A question about this page"], pgNext: ["الصفحة التالية", "Next page"], chQ1: ["سؤال عن الفصل", "A question on this chapter"],
    abT: ["عن المسار", "About the path"], abShort: ["للوالدين: الإطار والمبادئ", "For parents: the frame and the principles"],
    abSub: ["صفحة قصيرة للوالدين: من أين جاءت فكرة اليد، وما الذي تقصده وما الذي لا تقصده.", "A short page for parents: where the hand comes from, what it means and what it does not."],
    abFrameT: ["الإطار: آية فاطر", "The frame: the verse of Fatir"],
    abFrame1: ["في هذه الآية ثلاثة أقسام: ظالم لنفسه، ومقتصد، وسابق بالخيرات بإذن الله. واليد ترسم هذا الطريق: الأصابع الثلاثة الأولى سلوكيات يظلم بها المرء نفسه (الغفلة، والأخذ بلا شبع، والاندفاع)، والإصبع الرابع هو الإنسان المقتصد، والإبهام هو السبق إلى الخير.", "The verse names three groups: those who wrong themselves, the moderate, and those who race ahead in good deeds by Allah's permission. The hand draws this path: the first three fingers are behaviours by which a person wrongs themselves (heedlessness, taking without end, rushing), the fourth finger is the moderate human, and the thumb is racing ahead in good."],
    abFrame2: ["على كل عُقلة من الإصبع سمة. ولكل سمة سيئة علاجها، ثم ما تصير إليه حين تتحول إلى خير. والصعود خطوة بعد خطوة، بسلوك يراه الطفل ويستطيع فعله اليوم.", "Each joint of a finger holds a trait. Each bad trait has its cure, and then what it becomes once it turns to good. The climb is step by step, through behaviour the child can see and do today."],
    abSummitT: ["النور فوق اليد", "The light above the hand"],
    abSummit: ["النور هو نور الهداية التي أتى بها الأنبياء عليهم السلام، وبنورهم ورسالاتهم يُهتدى. وتحته السابق بالخيرات: سلوك المبادرة بالخير، وهو بداية الترقي، ودرجات كثيرة يتفاوت الناس فيها تفاوتًا كبيرًا.", "The light is the light of guidance the prophets, peace be upon them, brought; by their light and their messages we are guided. Below it is racing to good: the behaviour of taking the lead in good. It is where the ascent begins, with many degrees in which people differ greatly."],
    abRuleT: ["المبدأ الهادي", "The guiding principle"],
    abRule: ["«الروح هي الكلمة هي الهداية، وبقدر ما تتبعها تصعد»", "“The spirit is the word is the guidance, and the more you follow it, the higher you climb.”"],
    abRule2: ["فالصعود ليس جمعًا للنقاط، بل اتباع للهداية في السلوك اليومي. النقاط والأوسمة علامات على الطريق، والمكافأة الحقيقية هي النمو نفسه.", "So the climb is not collecting points; it is following guidance in daily behaviour. Points and badges mark the road; the real reward is the growth itself."],
    abNamesT: ["الأسماء تصف السلوك لا الشخص", "Names describe behaviour, never the person"],
    abNames: ["حين نقول «هذه من سمات الخنزير» فنحن نصف فعلًا رأيناه، لا الطفل. الطفل مكرَّم دائمًا، والسلوك هو الذي يُسمّى ويتغيّر.", "When we say “this is a trait of the pig”, we describe an action we saw, not the child. The child is always honoured; it is the behaviour that gets a name and changes."],
    abNames2: ["لا تقل للطفل «أنت كذا»، بل قل: «هذا الفعل من سمات كذا، فما الخطوة التي ترفعك؟».", "Never tell a child “you are…”; say instead: “this action is a trait of…; what step lifts you up?”"],
    abMixT: ["لا عقوبة على الغياب", "No penalty for absence"],
    abMix: ["مزيج اليد يتغيّر بما يفعله الطفل وحده: الإجابة الصحيحة والمهمة المنجزة ترفعانه، والغياب لا ينقص منه شيئًا.", "The hand's mix changes only through what the child does: a right answer or a completed task lifts it, and absence never takes anything away."],
    abTempT: ["ماذا تعني «عنصر مؤقت»؟", "What does “placeholder” mean?"],
    abTemp: ["علامة على نص أو صورة أو اختيار لم يُحسم بعد، وُضع ليعمل النموذج. سيُراجَع قبل النشر، وقد يتغيّر.", "A mark on a text, image or choice that is not decided yet, put in so the prototype works. It will be reviewed before publication and may change."], openShort: ["المرحلة", "Stage"], libT: ["المكتبة", "Library"], libSub: ["لكل إصبع كتب قصيرة، مرتبة حسب العمر. بعد كل فصل سؤال أو سؤالان.", "Short books for each finger, arranged by age. One or two questions after each chapter."],
    libEmpty: ["الكتب في الطريق.", "The books are on their way."], bookCh: ["{c} فصول", "{c} chapters"], bookProg: ["قرأت {a} من {b} فصول", "{a} of {b} chapters read"],
    bookStart: ["ابدأ القراءة", "Start reading"], bookCont: ["تابع القراءة", "Continue reading"], bookAgain: ["اقرأ من جديد", "Read again"], bookQ: ["{a}/{b} صحيحة", "{a}/{b} right"],
    chOf: ["الفصل {a} من {b}", "Chapter {a} of {b}"], chQ: ["أسئلة عن الفصل", "Questions on this chapter"], chNext: ["الفصل التالي", "Next chapter"], chLocked: ["يُفتح بعد قراءة الفصل الذي قبله", "Opens after the chapter before it is read"], pgLocked: ["تُفتح بعد قراءة الصفحة التي قبلها", "Opens after the page before it is read"], chGate: ["هذا الفصل يُفتح بعد أن تقرأ الفصل {n}. القصة تُقرأ من أولها بالترتيب.", "This chapter opens once you have read chapter {n}. A story is read from its beginning, in order."], pgGate: ["هذه الصفحة تُفتح بعد أن تقرأ الصفحة {n}. القصة تُقرأ من أولها بالترتيب.", "This page opens once you have read page {n}. A story is read from its beginning, in order."], chGo: ["إلى الفصل {n}", "Go to chapter {n}"], pgGo: ["إلى الصفحة {n}", "Go to page {n}"], chDone: ["عودة إلى الكتاب", "Back to the book"], parentGT: ["في وضع الوالدين، خاطبني بصيغة:", "In parent mode, address me as:"], father: ["أب", "Father"], mother: ["أم", "Mother"],
    parentGNote: ["تُستعمل لمراجعة المساء حين يقرؤها الوالد. بلا اختيار: صيغة المذكر.", "Used for the evening review when a parent reads it (affects Arabic wording)."], revAdults: ["للكبار والوالدين", "for teens 15+ and parents"], more: ["المزيد: خطوة الصعود والسؤال", "More: the step up and the question"], moreS: ["الخطوة والسؤال", "Step and question"], less: ["عودة إلى اليد", "Back to the hand"], srcT: ["المصادر", "Sources"], srcSub: ["كل آية وحديث في التطبيق، مع حال التحقق. النص القرآني يُطابَق على المصحف، والأحاديث يُراجَع تخريجها قبل النشر.", "Every verse and hadith in the app, with its checking status. Quran text is matched to the mushaf; hadith references are reviewed before publication."],
    srcQuran: ["آية ومرجع قرآني", "Quran references"], srcHadith: ["حديث", "hadith"], srcChecked: ["مطابق آليًّا", "machine-matched"], srcPendingN: ["بانتظار المراجعة البشرية", "awaiting human review"],
    srcPending: ["بانتظار مراجعة المؤلف", "awaiting the author's review"], srcLink: ["المصادر", "Sources"], posterT: ["اليد في البيت", "The hand at home"], posterSub: ["لوحة للثلاجة: لكل إصبع علامتان وخطوة صعود.", "A poster for the fridge: two signs and one step up for each finger."],
    posterPhrase: ["جملة البيت: «هذه من سمات الإصبع...»، لا «أنت...».", "The family phrase: \u201cThat's a ...-finger trait\u201d, never \u201cYou are...\u201d."], posterLink: ["لوحة البيت للطباعة", "Printable home poster"], degree: ["السمة", "Trait"], rolesSec: ["قدوات: النبي صلى الله عليه وآله وسلم وآل البيت عليهم السلام والصحابة", "Role models: the Prophet (peace and blessings be upon him and his family), his family (peace be upon them) and the Companions"],
    tagSummit: ["النبي صلى الله عليه وآله وسلم", "The Prophet (peace and blessings be upon him and his family)"], tagComp: ["آل البيت والصحابة", "Family and Companions"],
    dgLooks: ["كيف تبدو", "What it looks like"], dgStory: ["القصة", "The story"], dgStep: ["خطوة الصعود", "The step up"], dgQ: ["سؤال واحد", "One question"],
    dgDoor: ["افتح {f}", "Open the {f}"], dgBack: ["إلى صفحة المرحلة", "To the stage page"], summitSec: ["القمة التي نقتدي بها", "The summit we follow"], summitSecSub: ["هدي النبي صلى الله عليه وآله وسلم قمة يُهتدى بها، ومعه آل بيته عليهم السلام وأصحابه أمثلة حيّة في هذا الباب.", "The Prophet (peace and blessings be upon him and his family) and his guidance are a summit that guides the way; his family (peace be upon them) and Companions are living examples on this theme."], famT: ["العائلة", "Family"], famPh: ["حتى أربعة ملفات على هذا الجهاز، ولكل ملف طبعته وسجلّه", "Up to four profiles on this device, each with its own edition and record"],
    famAdd: ["إضافة ملف", "Add profile"], famDel: ["حذف هذا الملف", "Delete this profile"], famDelQ: ["حذف ملف {n} وكل تقدّمه من هذا الجهاز؟", "Delete {n}'s profile and all its progress from this device?"],
    famGlance: ["العائلة في لمحة", "The family at a glance"], famOpen: ["افتح", "Open"], badgesT: ["أختام الطريق", "Stamps on the way"], badgesSub: ["النموّ نفسه هو المكافأة، وهذه الأختام تذكير بخطواتك في طريق التزكية.", "Growth itself is the reward; these stamps remind you of the steps you have taken on the path of purification."],
    rankSub: ["{p}% في الأعلى", "{p}% on the upper side"], rankNext: ["التالي: {r} عند {p}%", "next: {r} at {p}%"], circleDone: ["قمنا بها هذا الأسبوع", "We did it this week"], circleDid: ["تمّت حلقة هذا الأسبوع", "This week's circle is done"], climbDeg: ["صعدتَ في {f}", "You climbed on the {f}"], climbStep: ["خطوة إلى أعلى، نحو {s}", "A step up, toward {s}"], ageT: ["الفئة العمرية (اختياري)", "Age band (optional)"], ageNote: ["تُقدَّم القراءات المناسبة لها أولًا.", "Readings for this age come first."],
    circleT: ["حلقة العائلة", "Family circle"], circleWeek: ["الأسبوع {w} من {n} · عشر دقائق", "Week {w} of {n} · ten minutes"], circleUses: ["القراءة", "Reading"],
    revT: ["مراجعة المساء", "Evening review"], revSub: ["دقائق هادئة قبل النوم. لا يُحفظ شيء هنا، ولا يغيّر شيئًا في اليد.", "A few quiet minutes before sleep. Nothing you think here is saved, and it changes nothing on the hand."],
    revLink: ["مراجعة المساء", "Evening review"], revDone: ["انتهيت", "Done"], revThanks: ["تقبّل الله منّا. ليلة هادئة.", "Rest well. Tomorrow is a new start."],
    revDoneToday: ["تمّت مراجعة الليلة.", "You reviewed today."],
    showSign: ["أشِر إلى الإصبع", "Show the sign"],
    signTitle: ["هذه من سمات {f}", "This is a trait of {f}"],
    signLead: ["أشِر إلى إصبع طفلك، ثم اقرآ معًا:", "Point at your child's finger, then read together:"],
    climbHint: ["والصعود منها:", "And the way up:"],
    signOf: ["سمة {a} من {b}", "Sign {a} of {b}"],
    introT: ["يدك سلّم", "Your hand is a ladder"],
    intro1: ["كل إصبع مرحلة: من الخنصر في الأسفل إلى الإبهام في الأعلى، والنور بعده.", "Each finger is a stage: from the little finger at the bottom to the thumb at the top, with the light beyond."],
    intro2: ["كلنا فينا شيء من كل إصبع، وكل واحد منا يستطيع أن يصعد.", "Each of us has a little of every finger, and every one of us can climb."],
    intro3: ["تصعد بالقراءة والاختبار والمهام.", "You climb by reading, quizzes and tasks."],
    start: ["لنبدأ", "Let's start"],
    notFound: ["لم نجد هذه الصفحة.", "Page not found."], home: ["إلى اليد", "Back to the hand"],
    // profiles, the edition link, install, share, updates, storage (security and install pass, 22 Nov 2026)
    agT: ["الفئة العمرية", "Age group"], agChild: ["أطفال", "Kids"], agTeen: ["مراهقون", "Teens"], agAdult: ["كبار", "Adults"],
    agChildD: ["من 4 إلى 12 سنة: قصص وأمثلة من يوم الطفل في البيت والمدرسة", "Ages 4 to 12: stories and examples from a child's day at home and school"],
    agTeenD: ["من 13 إلى 17 سنة: المحتوى نفسه، والكتب الأنسب لهذا العمر في أول المكتبة", "Ages 13 to 17: the same path, with the books best suited to this age first in the library"],
    agAdultD: ["18 سنة فما فوق: أمثلة من العمل والبيت والعبادة", "18 and over: examples from work, home and worship"],
    agNote: ["اختر الفئة، فيتغير المحتوى لهذا الملف ويبقى سجلّه محفوظًا.", "Pick a group: the content changes for this profile, and its record stays saved."],
    agSwitched: ["صار المحتوى لفئة «{e}»", "The content is now for {e}"], agBand: ["عمر الطفل", "Child's age"], famOpen: ["ملفات العائلة", "Family profiles"],
    fxT: ["الصوت والاهتزاز", "Sound and vibration"], fxSnd: ["أصوات خفيفة عند اللمس", "Soft sounds on touch"], fxAmb: ["خلفية هادئة", "Calm background"],
    fxOff: ["بلا", "None"], fxWind: ["نسيم", "Breeze"], fxStream: ["جدول ماء", "Stream"], fxRain: ["مطر خفيف", "Light rain"],
    fxHap: ["اهتزاز خفيف عند التنقل", "Light vibration as you move"], fxVol: ["مستوى الصوت", "Volume"], fxOn: ["تشغيل", "On"], fxOffL: ["إيقاف", "Off"],
    fxNote: ["الأصوات قطرات ماء وأنفاس هادئة، والخلفية من أصوات الطبيعة، وكلها تعمل دون إنترنت.", "The sounds are water drops and soft breaths, the background is made of nature sounds, and all of it works offline."],
    profLine: ["الملف: {p}", "Profile: {p}"], profOf: ["ملف «{n}»", "{n}'s profile"], profAdultOf: ["ملف الكبار", "the adult profile"], profChange: ["تغيير", "Change"], adultDef: ["ملف الكبار", "Adult profile"],
    helloA: ["أهلًا بك", "Welcome"], welcomeBackA: ["أهلًا بعودتك", "Welcome back"], namePhA: ["الاسم (اختياري)", "Name (optional)"],
    linkAdultT: ["رابط طبعة الكبار", "The adults' edition link"], linkKidsT: ["رابط طبعة الصغار", "The children's edition link"],
    linkAdultB: ["هذا الجهاز يفتح {p} بطبعة الصغار. لكل ملف سجلّه، فيمكن إنشاء ملف للكبار بجانبه دون أن يتغير {p}.", "This device opens {p} in the children's edition. Each profile keeps its own record, so an adult profile can be added beside it and {p} stays as it is."],
    linkKidsB: ["هذا الجهاز يفتح {p} بطبعة الكبار. لكل ملف سجلّه، فيمكن إنشاء ملف للصغار بجانبه دون أن يتغير {p}.", "This device opens {p} in the adults' edition. Each profile keeps its own record, so a children's profile can be added beside it and {p} stays as it is."],
    linkNewA: ["إنشاء ملف للكبار", "Create an adult profile"], linkNewK: ["إنشاء ملف للصغار", "Create a children's profile"],
    linkConvA: ["استعمال {p} للكبار (لا تقدّم فيه بعد)", "Use {p} for adults (it has no progress yet)"], linkConvK: ["استعمال {p} للصغار (لا تقدّم فيه بعد)", "Use {p} for children (it has no progress yet)"],
    linkStay: ["المتابعة في {p}", "Continue in {p}"], linkFull: ["على هذا الجهاز أربعة ملفات، وهي الحد. احذف ملفًا من الإعدادات، ثم افتح الرابط من جديد.", "This device already has four profiles, the limit. Delete one in Settings, then open the link again."],
    linkOpenSet: ["فتح الإعدادات", "Open Settings"], linkSwitched: ["فُتح {p}", "Opened {p}"],
    addT: ["ملف جديد", "New profile"], addB: ["لمن هذا الملف؟ لكل ملف طبعته وسجلّه.", "Who is this profile for? Each profile has its own edition and record."],
    shareT: ["مشاركة تزكية", "Share Tazkiya"], shareBtn: ["مشاركة", "Share"], shareSub: ["رابطان: واحد للصغار وآخر للكبار. التطبيق يعمل في المتصفح ويُثبَّت على الهاتف والحاسوب.", "Two links, one for children and one for adults. The app runs in the browser and installs on phones and computers."],
    shareKids: ["رابط طبعة الصغار", "Children's edition link"], shareAdult: ["رابط طبعة الكبار", "Adults' edition link"], shareCopy: ["نسخ الرابط", "Copy link"], shareSend: ["مشاركة الرابط", "Share the link"],
    shareCopied: ["نُسخ الرابط", "Link copied"], shareText: ["تزكية: مسار للأطفال للارتقاء بالأخلاق على اليد، بالعربية والإنجليزية.", "Tazkiya: a path of moral growth for children, on the hand, in Arabic and English."],
    shareTextA: ["تزكية للكبار: مسار للارتقاء بالسلوك والأخلاق، من الغفلة إلى السبق بالخيرات.", "Tazkiya for adults: a path of growth in behaviour and character, from heedlessness to racing ahead in good."],
    instT: ["ثبّت تزكية على شاشتك", "Install Tazkiya on your screen"], instSub: ["يفتح من أيقونته كأي تطبيق، ويعمل دون اتصال.", "It opens from its icon like any app, and works offline."],
    instNow: ["تثبيت", "Install"], instHow: ["كيف أثبّته؟", "How do I install it?"], instLater: ["لاحقًا", "Later"],
    iosT: ["التثبيت على آيفون وآيباد", "Installing on iPhone and iPad"],
    ios1: ["اضغط زر المشاركة {i} في سفاري: أسفل الشاشة على آيفون، وأعلاها على آيباد.", "Tap the Share button {i} in Safari: at the bottom on iPhone, at the top on iPad."],
    ios2: ["مرّر القائمة واختر «إضافة إلى الشاشة الرئيسية». إن لم تجده فاضغط «عرض المزيد».", "Scroll the list and choose “Add to Home Screen”. If you cannot see it, tap “View More”."],
    ios3: ["اضغط «إضافة»، ثم افتح تزكية من أيقونتها.", "Tap “Add”, then open Tazkiya from its icon."],
    iosNote: ["على آيفون للتطبيق المثبّت تخزين منفصل عن سفاري. إن كان لك تقدّم في سفاري فاحفظ نسخة احتياطية هنا، ثم استعدها داخل التطبيق المثبّت.", "On iPhone the installed app keeps its storage apart from Safari. If you have progress in Safari, save a backup here, then restore it inside the installed app."],
    iosOther: ["إن لم يظهر الخيار في متصفح آخر، فافتح الرابط في سفاري.", "If another browser does not show the option, open the link in Safari."],
    deskHow: ["في كروم وإيدج على الحاسوب: أيقونة التثبيت في شريط العنوان، أو القائمة ثم «تثبيت تزكية». وعلى أندرويد: قائمة كروم ثم «تثبيت التطبيق».", "In Chrome or Edge on a computer: the install icon in the address bar, or the menu, then “Install Tazkiya”. On Android: the Chrome menu, then “Install app”."],
    instDone: ["تزكية مثبّت على هذا الجهاز.", "Tazkiya is installed on this device."],
    updT: ["نسخة جديدة من تزكية جاهزة", "A new version of Tazkiya is ready"], updNow: ["حدّث الآن", "Update now"],
    storeFull: ["ذاكرة المتصفح ممتلئة، فلم يُحفظ آخر تغيير. احفظ نسخة احتياطية الآن، ثم أفرغ مساحة على الجهاز.", "The browser's storage is full, so the last change was not saved. Save a backup now, then free some space on the device."],
    storeOff: ["المتصفح يمنع الحفظ على هذا الجهاز (ربما التصفح الخاص)، فالتقدّم يبقى حتى إغلاق الصفحة فقط.", "This browser blocks saving on this device (private browsing, perhaps), so progress lasts only until the page closes."],
    bkBig: ["الملف أكبر من أن يكون نسخة احتياطية من تزكية.", "This file is too large to be a Tazkiya backup."],
    bkProf: ["الملفات ({n})", "Profiles ({n})"], bkFail: ["تعذّر حفظ النسخة على هذا الجهاز، فبقيت بياناتك كما كانت.", "The backup could not be stored on this device, so your data stays as it was."],
    navMain: ["التنقل الرئيسي", "Main navigation"], navSteps: ["خطوات المرحلة", "Stage steps"]
  };

  /* ---------- state ---------- */
  const KEY = "akhlaq-app-v1", PKEY = KEY + ":profiles", PMAX = 4;
  // family mode: up to 4 demo profiles; profile p1 keeps the original key
  const keyOf = id => (id === "p1" ? KEY : KEY + ":" + id);
  /* stored data is checked field by field (on load and on restore): known keys only, the right types, bounded sizes.
     Anything else is dropped, so a hand-edited or foreign file can never put markup or odd values into the page. */
  const ID_RE = /^[\w.:#\/\-]{1,90}$/, DAY_RE = /^\d{4}-\d{2}-\d{2}$/, PID_RE = /^p[1-9]$/, STAGE_IDS = ["zombie", "pig", "monkey", "human", "sabiq"];
  const isObj = v => !!v && typeof v === "object" && !Array.isArray(v);
  const num = (v, a, b) => { const n = Number(v); return typeof v !== "boolean" && v !== null && v !== "" && Number.isFinite(n) ? Math.max(a, Math.min(b, n)) : undefined; };
  const ts = v => num(v, 0, 4102444800000); // a timestamp up to 2100
  const txt = (v, n) => (typeof v === "string" ? v.replace(/[\u0000-\u001f<>{}]/g, "").trim().slice(0, n) : "");
  const oneOf = (v, list, d) => (list.includes(v) ? v : d);
  function cmap(m, val, max, keyRe) { const o = {}; if (!isObj(m)) return o; let k = 0; const keys = Object.keys(m); if (keyRe === DAY_RE) keys.sort().reverse(); /* keep the newest days */ for (const key of keys) { if (k >= max) break; if (!(keyRe || ID_RE).test(key) || BADKEY.has(key)) continue; const v = val(m[key]); if (v !== undefined) { o[key] = v; k++; } } return o; }
  const bool = v => (typeof v === "boolean" ? v : undefined);
  const BADKEY = new Set(["__proto__", "constructor", "prototype"]); // never copied from a backup into a plain object
  function cleanState(o) {
    if (!isObj(o) || !isObj(o.mix)) return null;
    const mix = {}; let sum = 0;
    for (const k of STAGE_IDS) { const n = num(o.mix[k], 0, 100); mix[k] = n === undefined ? 0 : Math.round(n); sum += mix[k]; }
    const s = { v: 1, mix: sum > 0 && sum <= 500 ? mix : null };
    s.lang = oneOf(o.lang, ["ar", "en"], "ar"); s.fs = Math.round(num(o.fs, 15, 32) || 19);
    s.answered = cmap(o.answered, bool, 3000); s.ansT = cmap(o.ansT, ts, 3000);
    s.read = cmap(o.read, v => (v === true ? true : ts(v)), 3000); s.readSecs = cmap(o.readSecs, v => num(v, 0, 864000), 3000);
    s.tasks = cmap(o.tasks, v => (typeof v === "string" && /^[a-z]{1,12}$/.test(v) ? v : undefined), 3000); s.taskT = cmap(o.taskT, ts, 3000);
    s.tr = cmap(o.tr, v => (Array.isArray(v) ? v.filter(d => typeof d === "string" && DAY_RE.test(d)).slice(-400) : undefined), 500);
    s.trPts = cmap(o.trPts, v => num(v, 0, 1000), 500);
    s.bookRead = cmap(o.bookRead, v => (v === true ? true : ts(v)), 3000);
    const perDay = val => m => cmap(m, val, 200);
    s.seen = cmap(o.seen, perDay(bool), 800, DAY_RE);
    s.sc = cmap(o.sc, perDay(v => (typeof v === "string" && /^[a-z]{1,16}$/.test(v) ? v : undefined)), 800, DAY_RE);
    s.self = cmap(o.self, v => oneOf(v, STAGE_IDS, undefined), 800, DAY_RE);
    s.myDone = cmap(o.myDone, perDay(bool), 120, DAY_RE);
    s.rev = cmap(o.rev, bool, 800, DAY_RE);
    s.circles = cmap(o.circles, v => (typeof v === "string" && DAY_RE.test(v) ? v : undefined), 200);
    s.my = (Array.isArray(o.my) ? o.my : []).filter(x => isObj(x) && typeof x.id === "string" && ID_RE.test(x.id) && txt(x.tx, 60)).slice(0, 20)
      .map(x => ({ id: x.id, tx: txt(x.tx, 60), s: oneOf(x.s, STAGE_IDS, "") }));
    const evt = x => { if (!isObj(x)) return null; const e = { t: ts(x.t) || 0 };
      if (typeof x.k === "string" && /^[a-z]{1,8}$/.test(x.k)) e.k = x.k;
      ["s", "a", "b", "self"].forEach(k => { if (STAGE_IDS.includes(x[k])) e[k] = x[k]; });
      if (typeof x.ok === "boolean") e.ok = x.ok; if (num(x.n, 0, 100) !== undefined) e.n = num(x.n, 0, 100);
      if (x.why != null) e.why = txt(x.why, 40); return e; };
    s.hist = (Array.isArray(o.hist) ? o.hist : []).slice(0, 30).map(evt).filter(Boolean);
    s.ev = (Array.isArray(o.ev) ? o.ev : []).slice(-500).map(evt).filter(Boolean);
    s.parent = false;
    s.last = typeof o.last === "string" && DAY_RE.test(o.last) ? o.last : undefined;
    s.start = typeof o.start === "string" && DAY_RE.test(o.start) ? o.start : undefined;
    s.revealDay = typeof o.revealDay === "string" && DAY_RE.test(o.revealDay) ? o.revealDay : undefined;
    s.name = txt(o.name, 20); s.gender = oneOf(o.gender, ["m", "f"], ""); s.age = oneOf(o.age, ["4-8", "9-14", "15+"], "");
    s.edition = oneOf(o.edition, ["kids", "adult"], ""); s.parentG = oneOf(o.parentG, ["m", "f"], "");
    s.map = oneOf(o.map, ["one", "two", "right"], undefined);
    if (typeof o.intro === "boolean") s.intro = o.intro; if (typeof o.tour === "boolean") s.tour = o.tour;
    { const per = {}; s.khab = (Array.isArray(o.khab) ? o.khab : []).filter(d => typeof d === "string" && DAY_RE.test(d) && (per[d] = (per[d] || 0) + 1) <= 3).slice(-3000); }
    s.chs = cmap(o.chs, v => (isObj(v) && num(v.c, 0, 3) !== undefined ? Object.assign({ c: Math.round(num(v.c, 0, 3)) }, ts(v.t) ? { t: ts(v.t) } : {}) : undefined), 300);
    s.eve = cmap(o.eve, v => (isObj(v) && STAGE_IDS.includes(v.f) ? Object.assign({ f: v.f }, txt(v.g, 120) ? { g: txt(v.g, 120) } : {}, ts(v.t) ? { t: ts(v.t) } : {}) : undefined), 800, DAY_RE);
    Object.keys(s).forEach(k => { if (s[k] === undefined || s[k] === null) delete s[k]; });
    return s;
  }
  function cleanProfiles(p) {
    if (!isObj(p) || !Array.isArray(p.list)) return null;
    const list = [...new Set(p.list.filter(id => typeof id === "string" && PID_RE.test(id)))].slice(0, PMAX);
    if (!list.length) return null;
    if (!list.includes("p1")) list.unshift("p1"), list.splice(PMAX);
    return { active: list.includes(p.active) ? p.active : list[0], list };
  }
  function loadProfiles() { try { const p = cleanProfiles(JSON.parse(localStorage.getItem(PKEY) || "null")); if (p) return p; } catch (e) {} return { active: "p1", list: ["p1"] }; }
  function saveProfiles() { try { localStorage.setItem(PKEY, JSON.stringify(P)); } catch (e) { storeFail(e); } }
  // a failed write (storage full, or blocked as in some private modes) is said once, plainly; the data stays in memory meanwhile
  let storeWarned = false;
  function storeFail(e) {
    if (storeWarned) return; storeWarned = true;
    const full = e && (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.code === 22 || e.code === 1014);
    setTimeout(() => { try { toast(u(full ? "storeFull" : "storeOff"), 7000); } catch (x) {} }, 300);
  }
  let P = loadProfiles(); if (!P.list.includes(P.active)) P.active = P.list[0];
  const MEM = {}; // in-memory fallback when storage is blocked
  const ymd = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const today = () => ymd(new Date());
  function fresh() {
    return { v: 1, lang: "ar", fs: 19, mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 },
      answered: {}, ansT: {}, read: {}, readSecs: {}, tasks: {}, taskT: {}, tr: {}, trPts: {}, seen: {}, self: {}, hist: [], parent: false, last: today(), start: today(), name: "", gender: "", age: "", edition: "" };
  }
  function load() {
    return loadOf(P.active);
  }
  function loadOf(id) {
    try { const s = cleanState(JSON.parse(localStorage.getItem(keyOf(id)) || "null")); if (s) return Object.assign(fresh(), s); } catch (e) {}
    if (MEM[id]) return Object.assign(fresh(), MEM[id]);
    return fresh();
  }
  function save() { MEM[P.active] = JSON.parse(JSON.stringify(S)); try { localStorage.setItem(keyOf(P.active), JSON.stringify(S)); } catch (e) { storeFail(e); } askPersist(); }
  // ask the browser to keep this site's storage (installed apps usually get it silently)
  let PERSIST = false, persistAsked = false;
  try { if (navigator.storage && navigator.storage.persisted) navigator.storage.persisted().then(v => { PERSIST = !!v; }); } catch (e) {}
  let userActed = false; document.addEventListener("click", () => { userActed = true; }, { once: true, capture: true });
  function askPersist() {
    if (persistAsked || PERSIST || !userActed) return; persistAsked = true;
    try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist().then(v => { PERSIST = !!v; }); } catch (e) {}
  }
  const BKKEY = "tazkiya-backup-at";
  const fmtDate = ts => { try { return new Date(ts).toLocaleDateString(L() === "ar" ? "ar-u-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return ymd(new Date(ts)); } };
  const fmtShort = ts => { try { return new Date(ts).toLocaleDateString(L() === "ar" ? "ar-u-nu-latn" : "en-GB", { day: "numeric", month: "short" }); } catch (e) { return ymd(new Date(ts)); } };
  const DEFNAMES = [["نور", "Nour"], ["سلمى", "Salma"], ["آدم", "Adam"], ["ليلى", "Layla"]];
  const defName = id => DEFNAMES[Math.max(0, P.list.indexOf(id)) % 4][S && S.lang === "en" ? 1 : 0];
  const nameOf = (id, st) => ((st && st.name) || "").trim() || (st && st.edition === "adult" ? U.adultDef[S && S.lang === "en" ? 1 : 0] : defName(id));
  // "Salma's profile" / "the adult profile": how a profile is named inside a sentence
  const profPhrase = (id, st) => (st && st.edition === "adult" && !(st.name || "").trim() ? fmt(U.profAdultOf, {}) : fmt(U.profOf, { n: nameOf(id, st) }));
  function switchProfile(id, after) {
    if (!P.list.includes(id) || id === P.active) return;
    save(); const par = S.parent, lang = S.lang; P.active = id; saveProfiles();
    S = loadOf(id); S.parent = par; S.lang = lang; QZ = null; homeSel = null; homeDeg = -1; save();
    applyEdition(() => { render(true); if (after) after(); else if (sheetState && sheetState.kind === "settings") settingsSheet(); setTimeout(sawCheck, 450); });
  }
  let S = load();

  const params = new URLSearchParams(location.search);
  const CANON = "https://tazkiya.family/"; // the public address (since 23 Nov 2026)
  // progress carried over from the former address arrives in the fragment (#move=…): read it once, then clear it from the address
  let MOVE_IN = null;
  if (/^#move=/.test(location.hash)) { MOVE_IN = location.hash.slice(6); try { history.replaceState(null, "", location.pathname + location.search + "#/"); } catch (e) { location.hash = "#/"; } }
  if (params.get("reset") === "1" && /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) { S = fresh(); try { history.replaceState(null, "", location.pathname + location.hash); } catch (e) {} }
  if (params.get("lang") === "en" || params.get("lang") === "ar") S.lang = params.get("lang");
  // ?ed=adult (or ?ed=kids) opens that edition directly, and never changes a profile behind its owner's back:
  // - a brand-new profile (no edition chosen, not used) simply takes the linked edition;
  // - if another profile on the device already uses that edition, the link opens it (and says so);
  // - otherwise the app asks: create a profile of that edition beside this one, use this one (only while it has
  //   no progress), or stay. The question is shown after the first render (edLink).
  const hasProgress = st => !!(Object.keys(st.read || {}).length || Object.keys(st.answered || {}).length || Object.keys(st.tasks || {}).length || Object.keys(st.bookRead || {}).length || (st.my || []).length || Object.keys(st.tr || {}).length);
  const edOf = st => (st.edition === "adult" ? "adult" : "kids");
  const GRP = st => (st.edition === "adult" ? "adult" : st.age === "15+" ? "teen" : "child");
  const GRPK = { child: "agChild", teen: "agTeen", adult: "agAdult" }, GRPS = ["child", "teen", "adult"];
  const FX = (k, a) => { try { if (window.TZFX) window.TZFX.play(k, a); } catch (e) {} };
  let edLink = null, edLinkNote = null;
  { const AD_PATH = /\/adult\/(index\.html)?$/.test(location.pathname);
    const ep = params.get("ed") || (AD_PATH ? "adult" : null);
    if (ep === "adult" || ep === "kids") {
      if (edOf(S) === ep) { if (!S.edition) S.edition = ep; }
      else if (!S.edition && !S.intro && !hasProgress(S)) S.edition = ep; // a brand-new profile with no edition chosen yet
      else {
        const other = P.list.find(id => id !== P.active && edOf(loadOf(id)) === ep);
        if (other) { P.active = other; saveProfiles(); const lang = S.lang; S = loadOf(other); S.lang = lang; edLinkNote = other; }
        else edLink = ep;
      }
      save();
      try { params.delete("ed"); const q = params.toString(); history.replaceState(null, "", location.pathname.replace(/adult\/(index\.html)?$/, "") + (q ? "?" + q : "") + location.hash); } catch (e) {}
    }
  }
  // service worker: a new version waits until the user taps "Update now", so a page never changes under a reader
  let swWaiting = null, swReload = false;
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    try {
      navigator.serviceWorker.register("sw.js").then(reg => {
        const offer = w => { if (w && navigator.serviceWorker.controller) { swWaiting = w; updateBar(); } };
        if (reg.waiting) offer(reg.waiting);
        reg.addEventListener("updatefound", () => { const w = reg.installing; if (w) w.addEventListener("statechange", () => { if (w.state === "installed") offer(w); }); });
        document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") reg.update().catch(() => {}); });
      }).catch(() => {});
      navigator.serviceWorker.addEventListener("controllerchange", () => { if (swReload) { swReload = false; location.reload(); } });
    } catch (e) {}
  }
  function updateBar() {
    if (!swWaiting || document.getElementById("updBar")) return;
    const d = document.createElement("div"); d.id = "updBar"; d.className = "updbar"; d.setAttribute("role", "status");
    d.innerHTML = `<span>${esc(u("updT"))}</span><button type="button" class="btn" data-act="swupdate">${esc(u("updNow"))}</button>`;
    document.body.appendChild(d);
  }
  let installEv = null;
  const UAS = navigator.userAgent || "";
  const IOS = /iPad|iPhone|iPod/.test(UAS) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const INSTKEY = "tazkiya-install-later", BKLATER = "tazkiya-backup-later";
  const ANDROID = /Android/i.test(UAS);
  const MAC_SAFARI = !IOS && /Macintosh/.test(UAS) && /Safari\//.test(UAS) && !/Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Firefox/.test(UAS);
  window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); installEv = e; instBtn(); if (route().name === "home" && sheet.hidden && !TOUR) render(true); });
  window.addEventListener("appinstalled", () => { installEv = null; instBtn(); if (route().name === "home") render(true); });
  // the install button in the top bar: shown while the app can be installed (Chrome's prompt, or Safari's steps on iPhone and iPad)
  function instBtn() {
    const b = document.getElementById("instBtn"); if (!b) return;
    const on = !STANDALONE() && (!!installEv || IOS);
    b.hidden = !on; document.body.classList.toggle("has-inst", on); if (!on) return;
    b.dataset.act = installEv ? "install" : "ioshow";
    const w = u("instNow"); b.querySelector("span").textContent = w; b.setAttribute("aria-label", u("instT")); b.title = u("instT");
  }
  const STANDALONE = () => { try { return matchMedia("(display-mode: standalone)").matches || navigator.standalone === true; } catch (e) { return false; } };
  S.parent = false; // parent mode is off for now (owner decision, 21 Nov 2026)
  Object.keys(S.tasks || {}).forEach(k => { if (S.tasks[k] === "done") delete S.tasks[k]; });
  if (!S.start) S.start = today();
  // opening moment: once per day, colour fills the hand from the little finger up
  let revealPending = false;
  try { revealPending = S.revealDay !== today() && !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches); } catch (e) {}


  /* ---------- helpers ---------- */
  const L = () => S.lang;
  const UF = { "agNote": "اختاري الفئة، فيتغير المحتوى لهذا الملف ويبقى سجلّه محفوظًا.", "chGate": "هذا الفصل يُفتح بعد أن تقرئي الفصل {n}. القصة تُقرأ من أولها بالترتيب.", "pgGate": "هذه الصفحة تُفتح بعد أن تقرئي الصفحة {n}. القصة تُقرأ من أولها بالترتيب.", "readWait": "تُسجَّل القراءة حين تصلين إلى آخرها وتقرئينها على مهل.", "recSub": "ما قرأتِه وما أجبتِ عنه وما أنجزتِه، بتاريخه، محفوظًا على هذا الجهاز.", "bkPersistNo": "محفوظة على هذا الجهاز، لكن المتصفح قد يحذفها إن امتلأت ذاكرته أو مُسحت بيانات المواقع. ثبّتي التطبيق، واحفظي نسخة احتياطية من حين لآخر.", "bkExport": "احفظي نسخة احتياطية", "bkImport": "استعيدي من نسخة", "bkYes": "نعم، استعيدي النسخة", "presOk": "✓ حضرتِ اليوم", "presNo": "لم تحضري بعد اليوم: علّمي تحدياتك، أو اقرئي قصة، أو أجيبي سؤالًا.", "presStart": "ابدئي تحديًا من مهام المراحل", "trWeekDone": "أتممتِ سبعة أيام، وفُتحت العادة الثابتة", "trActiveSub": "تحدي الأيام السبعة والعادات الثابتة. علّمي ما فعلتِه اليوم.", "trNone": "حين تنجزين «الخطوة الأولى» لسمة في مهام المراحل، يظهر تحديها هنا كل يوم.", "quizSub": "أسئلة من قصص هذه المرحلة وسماتها، تراجعين بها ما فهمتِ.", "signsSub": "علامات تظهر في اليوم. اضغطي «لاحظتها اليوم» على ما رأيتِه في نفسك.", "badgesSub": "النموّ نفسه هو المكافأة، وهذه الأختام تذكير بخطواتكِ في طريق التزكية.", "stageTasksSub": "مهام لكل إصبع، وكل مهمة تنجزينها ترفع المزيج.", "wkBook": "أنهت كتاب «{b}»", "storyQ": "إلى الخطوة والسؤال على يدكِ", "readFirst": "اقرئي", "tourTouch": "المسي {f}", "tourTry": "جرّبي: {f}", "tourLight": "وفوق الإبهام نور. المسيه", "tourSkip": "تخطَّي الجولة", "tourAgain": "أعيدي الجولة الأولى", "bookProgP": "قرأتِ {a} من {b} صفحات", "bookProg": "قرأتِ {a} من {b} فصول", "bookStart": "ابدئي القراءة", "bookCont": "تابعي القراءة", "bookAgain": "اقرئي من جديد", "climbDeg": "صعدتِ في {f}", "climbStep": "خطوة إلى أعلى، نحو {s}", "hint": "اضغطي على كل إصبع لتعرفي رمزيته وأين أنتِ منه", "yourShare": "نصيبكِ منها الآن", "startQuiz": "ابدئي الاختبار", "continue": "تابعي من هنا", "toQuiz": "اختبري فهمكِ", "sit": "ماذا تفعلين؟", "right": "أحسنتِ", "again": "أعيدي الاختبار", "already": "أجبتِ عنه من قبل، فلا يتغير المزيج.", "selfQ": "أي إصبع ظهر فيكِ أكثر اليوم؟", "selfSaved": "سُجّل تقييمكِ لليوم", "meSub": "سلوكياتكِ الآن. ترتقين بالفهم والعمل والتطبيق.", "toWork": "إلى العمل: أنجزي مهام هذه المرحلة", "learnStage": "افهمي وتعلّمي: كيف تزكّين نفسك في هذه المرحلة", "tQuiz": "اختبري فهمكِ", "pwaHow": "للتثبيت: افتحي قائمة المتصفح واختاري «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».", "confirmed": "أنجزتِها", "welcomeBack": "أهلًا بعودتكِ يا {n}", "scSub": "أجيبي بصدق، فهذا لكِ وحدكِ ولا يغيّر المزيج.", "pickFinger": "اختاري إصبعًا", "aloud": "اقرئيها بصوت عالٍ", "rightSub": "اضغطي على إصبع لتقرئي عن درجته.", "readVirtue": "اقرئي عنها", "sabiqShare": "نصيبكِ من السبق بالخيرات", "introT": "يدكِ سلّم", "intro3": "تصعدين بالقراءة والاختبار والمهام.", "ttsPlay": "استمعي", "instT": "ثبّتي تزكية على شاشتك", "ios1": "اضغطي زر المشاركة {i} في سفاري: أسفل الشاشة على آيفون، وأعلاها على آيباد.", "ios2": "مرّري القائمة واختاري «إضافة إلى الشاشة الرئيسية». إن لم تجديه فاضغطي «عرض المزيد».", "ios3": "اضغطي «إضافة»، ثم افتحي تزكية من أيقونتها.", "iosNote": "على آيفون للتطبيق المثبّت تخزين منفصل عن سفاري. إن كان لكِ تقدّم في سفاري فاحفظي نسخة احتياطية هنا، ثم استعيديها داخل التطبيق المثبّت.", "iosOther": "إن لم يظهر الخيار في متصفح آخر، فافتحي الرابط في سفاري.", "storeFull": "ذاكرة المتصفح ممتلئة، فلم يُحفظ آخر تغيير. احفظي نسخة احتياطية الآن، ثم أفرغي مساحة على الجهاز.", "linkFull": "على هذا الجهاز أربعة ملفات، وهي الحد. احذفي ملفًا من الإعدادات، ثم افتحي الرابط من جديد.", "helloA": "أهلًا بكِ", "welcomeBackA": "أهلًا بعودتكِ" };
  const GEN = () => (S.parent && route().name === "review" ? (S.parentG === "f" ? "f" : "") : S.gender);
  // adult edition: the same interface in an adult register (UA), with feminine Arabic where it differs (UAF)
  const UA = {
    edT: ["الطبعة", "Edition"], edKids: ["للصغار", "For children"], edAdult: ["للكبار", "For adults"],
    edNote: ["لكل ملف طبعته: ملف بطبعة الكبار وآخر بطبعة الصغار على الجهاز نفسه، ولكلٍّ سجلّه.", "Each profile has its own edition, so an adult profile and a child's profile can share this device, each with its own record."],
    edAskT: ["لمن هذا الملف؟", "Who is this profile for?"], edAskB: ["اختر الطبعة، ويمكن تغييرها لاحقًا من الإعدادات.", "Choose the edition. You can change it later in Settings."],
    edKidsD: ["قصص وأمثلة من يوم الطفل والبيت والمدرسة", "Stories and examples from a child's day at home and school"],
    edAdultD: ["18 سنة فما فوق: أمثلة من العمل والبيت والعبادة", "18 and over: examples from work, home and worship"],
    edSwitched: ["تحوّل هذا الملف إلى طبعة {e}", "This profile now uses the {e} edition"],
    boy: ["رجل", "Man"], girl: ["امرأة", "Woman"], profNote: ["اختيار «امرأة» يعرض صيغة المؤنث حيث توفّرها المادة.", "“Woman” uses feminine Arabic wording where the content has it."],
    myPh: ["مهمة جديدة، مثل: أقرأ صفحة من القرآن بعد الفجر", "A new task, e.g. read a page of Quran after Fajr"],
    secRead: ["اقرأ: قصص هذه المرحلة ومقالاتها", "Read: this stage's stories and articles"], storiesH: ["قصص ومقالات قصيرة", "Short stories and articles"],
    readSub: ["كتب بفصول تُقرأ على أيام، وقصص ومقالات قصيرة تُقرأ في دقائق. في آخر كل واحدة أسئلة عنها.", "Chapter books to read over several days, and short stories and articles that take a few minutes. Each one ends with questions about it."],
    libSub: ["كتب للكبار بفصول تُقرأ على أيام. بعد كل فصل سؤال أو سؤالان.", "Chapter books for adults, read over several days. One or two questions after each chapter."],
    abShort: ["الإطار والمبادئ", "The frame and the principles"], abSub: ["صفحة قصيرة: من أين جاءت فكرة اليد، وكيف تُقرأ.", "A short page: where the hand comes from, and how to read it."],
    abFrame2: ["على كل عُقلة من الإصبع سمة. ولكل سمة سيئة علاجها، ثم ما تصير إليه حين تتحول إلى خير. والصعود خطوة بعد خطوة، بسلوك تراه في يومك وتستطيع فعله اليوم.", "Each joint of a finger holds a trait. Each bad trait has its cure, and then what it becomes once it turns to good. The climb is step by step, through behaviour you can see in your own day and do today."],
    abMix: ["مزيج اليد يتغيّر بما تفعله أنت: الإجابة الصحيحة والمهمة المنجزة ترفعانه، والغياب لا ينقص منه شيئًا.", "The hand's mix changes only through what you do: a right answer or a completed task lifts it, and absence never takes anything away."],
    wkSub: ["الأيام السبعة الأخيرة، لك وحدك.", "The last seven days, for you alone."],
    signLead: ["انظر إلى الإصبع، واقرأ:", "Look at the finger, and read:"], posterPhrase: ["تذكير للبيت: كل إصبع سلوك نرتقي منه.", "A reminder for home: each finger is a behaviour we rise from."]
  };
  const UAF = { edAskB: "اختاري الطبعة، ويمكن تغييرها لاحقًا من الإعدادات.", readSub: "كتب بفصول تُقرأ على أيام، وقصص ومقالات قصيرة تُقرأ في دقائق. في آخر كل واحدة أسئلة عنها.", abFrame2: "على كل عُقلة من الإصبع سمة. ولكل سمة سيئة علاجها، ثم ما تصير إليه حين تتحول إلى خير. والصعود خطوة بعد خطوة، بسلوك ترينه في يومك وتستطيعين فعله اليوم.", abMix: "مزيج اليد يتغيّر بما تفعلينه أنتِ: الإجابة الصحيحة والمهمة المنجزة ترفعانه، والغياب لا ينقص منه شيئًا.", wkSub: "الأيام السبعة الأخيرة، لكِ وحدكِ.", signLead: "انظري إلى الإصبع، واقرئي:" };
  const ADU = () => S.edition === "adult";
  /* strings for the five improvements of 22 Nov 2026 (docs/FIVE-IDEAS.md): U children, UF children feminine, UA adults, UAF adult feminine */
  Object.assign(U, {
  });
  Object.assign(U, {
    eveT: ["محاسبة المساء", "Evening reckoning"], eveCardSub: ["دقيقة واحدة قبل النوم: إصبع، وشكر، واستغفار، ودعاء.", "One minute before sleep: a finger, a thanks, a plea for forgiveness and a prayer."],
    eveLinkSub: ["دقيقة قبل النوم تحاسب فيها يومك", "A minute before sleep to look back on your day"],
    eveQ1: ["أين كنتَ اليوم أكثر الوقت؟", "Where were you most of today?"], eveQ1s: ["المس الإصبع.", "Touch the finger."],
    eveQ2: ["شيء تشكر الله عليه اليوم", "Something to thank Allah for today"], eveQ2s: ["سطر واحد، إن شئت.", "One line, if you like."],
    eveQ2ph: ["مثل: ضحكة أخي في الصباح", "e.g. my little brother's laugh this morning"],
    eveQ3: ["أستغفر الله", "Astaghfirullah"], eveQ3s: ["قلها مرة بقلبك ولسانك، ثم المس.", "Say it once, with your heart and your tongue, then tap."],
    eveQ3b: ["أستغفر الله", "Astaghfirullah"], eveQ3en: ["", "I ask Allah's forgiveness"],
    eveQ4: ["دعاء الختام", "The closing prayer"],
    eveDuaEn: ["", "O Allah, give my soul its taqwa and purify it, for You are the best of those who purify it. You are its Guardian and its Master."],
    eveDuaRef: ["من دعاء النبي صلى الله عليه وآله وسلم · صحيح مسلم 2722", "A supplication of the Prophet, peace and blessings be upon him and his family · Sahih Muslim 2722"],
    eveAmen: ["آمين", "Amin"], eveNext: ["التالي", "Next"], eveSkip: ["تخطَّ", "Skip"],
    eveDone: ["تمّت محاسبة الليلة. تصبح على خير.", "Tonight's reckoning is done. Good night."],
    eveDoneT: ["حاسبتَ نفسك الليلة", "You looked back on your day tonight"], eveYour: ["أكثر يومك", "Most of your day"], eveThanks: ["شكرتَ الله على", "You thanked Allah for"],
    eveHome: ["إلى يدي", "Back to my hand"], eveSteps: ["خطوات المحاسبة", "Reckoning steps"],
    eveRemind: ["ذكّرني كل مساء", "Remind me every evening"],
    eveRemSub: ["يُحفظ على جهازك ملف تقويم صغير فيه تذكير يومي في الساعة التي تختارها. افتحه فيُضاف إلى تقويمك، ولا يُرسل شيء إلى أي مكان.", "A small calendar file with a daily reminder at the time you choose is saved on your device. Open it to add it to your calendar; nothing is sent anywhere."],
    eveAt: ["الساعة", "Time"], eveIcsGo: ["احفظ ملف التذكير", "Save the reminder file"], eveIcsOk: ["حُفظ ملف التذكير. افتحه ليُضاف إلى تقويمك.", "The reminder file is saved. Open it to add it to your calendar."],
    eveIcsT: ["محاسبة المساء · تزكية", "Evening reckoning · Tazkiya"], eveIcsD: ["دقيقة قبل النوم: إصبع، وشكر، واستغفار، ودعاء.", "One minute before sleep: a finger, a thanks, a plea for forgiveness and a prayer."],
    recEveT: ["محاسبة المساء", "Evening reckoning"], recEveN: ["ليالي المحاسبة", "Nights of reckoning"],
    recEve14: ["أكثر اليوم، في آخر أسبوعين", "Most of the day, over the last two weeks"], recEveNone: ["لم تبدأ محاسبة المساء بعد.", "No evening reckoning yet."]
  });
  Object.assign(UF, { eveQ1: "أين كنتِ اليوم أكثر الوقت؟", eveQ1s: "المسي الإصبع.", eveQ2: "شيء تشكرين الله عليه اليوم", eveQ2s: "سطر واحد، إن شئتِ.", eveQ2ph: "مثل: ضحكة أختي في الصباح",
    eveQ3s: "قوليها مرة بقلبك ولسانك، ثم المسي.", eveSkip: "تخطَّي", eveDone: "تمّت محاسبة الليلة. تصبحين على خير.", eveDoneT: "حاسبتِ نفسك الليلة", eveThanks: "شكرتِ الله على",
    eveRemind: "ذكّريني كل مساء", eveRemSub: "يُحفظ على جهازك ملف تقويم صغير فيه تذكير يومي في الساعة التي تختارينها. افتحيه فيُضاف إلى تقويمك، ولا يُرسل شيء إلى أي مكان.", eveIcsOk: "حُفظ ملف التذكير. افتحيه ليُضاف إلى تقويمك.", recEveNone: "لم تبدئي محاسبة المساء بعد." });
  Object.assign(U, {
    khBtn: ["خبيئة: فعلتُ خيرًا في السر", "A hidden deed: I did good in secret"],
    khLead: ["قال النبي صلى الله عليه وآله وسلم في السبعة الذين يظلهم الله في ظله يوم لا ظل إلا ظله:", "Of the seven whom Allah shades on the Day when there is no shade but His, the Prophet, peace and blessings be upon him and his family, named:"],
    khEn: ["", "“a man who gave in charity and hid it, so that his left hand did not know what his right hand spent.” (meaning)"],
    khRef: ["صحيح البخاري 1423", "Sahih al-Bukhari 1423"],
    khNote: ["لا تكتب ما فعلت، ولا تخبر به أحدًا. المس هنا فقط، ويبقى سرًّا بينك وبين الله.", "Do not write what you did, and do not tell anyone. Just tap here, and it stays a secret between you and Allah."],
    khSave: ["سجّلتُها", "I've noted it"], khSaved: ["سُجّلت. يعلمها الله.", "Noted. Allah knows it."],
    khLine: ["خبيئاتك: {c}. يعلمها الله", "Your hidden deeds: {c}. Allah knows them"],
    khMax: ["سجّلتَ خبيئات اليوم. يكفيك أن الله يعلمها.", "You have noted today's hidden deeds. It is enough that Allah knows them."]
  });
  Object.assign(UF, { khNote: "لا تكتبي ما فعلتِ، ولا تخبري به أحدًا. المسي هنا فقط، ويبقى سرًّا بينك وبين الله.", khMax: "سجّلتِ خبيئات اليوم. يكفيكِ أن الله يعلمها." });
  Object.assign(UA, {
    khBtn: ["خبيئة: عملتُ خيرًا في السر", "A hidden deed: I did good in secret"],
    khNote: ["لا وصف ولا تفاصيل: يُحفظ تاريخ اليوم وحده، ويبقى العمل بينك وبين الله.", "No description and no details: only the date is kept, and the deed stays between you and Allah."]
  });
  Object.assign(UAF, { khBtn: "خبيئة: عملتُ خيرًا في السر" });
  Object.assign(U, {
    pactT: ["ميثاق أسرتكم", "Your family's pact"],
    pactNone: ["اختاروا سمة واحدة يعمل عليها البيت كله هذا الأسبوع، كلٌّ في ملفه، حتى يوم الجمعة.", "Choose one trait the whole household works on this week, each in their own profile, until Friday."],
    pactPick: ["اختاروا ميثاق الأسبوع", "Choose this week's pact"], pactPickT: ["ميثاق الأسبوع: سمة واحدة للبيت كله", "This week's pact: one trait for the whole home"],
    pactPickSub: ["يظهر الميثاق في كل ملف على هذا الجهاز، ولكل ملف مهمته فيه بحسب طبعته، وينتهي يوم الجمعة.", "The pact shows in every profile on this device, each with its own task for it, and ends on Friday."],
    pactNow: ["ميثاق أسرتكم هذا الأسبوع: {v}", "Your family's pact this week: {v}"],
    pactLeft1: ["بقي يوم واحد", "1 day left"], pactLeft2: ["بقي يومان", "2 days left"], pactLeftN: ["بقي {c} أيام", "{c} days left"],
    pactToday: ["مهمتك اليوم في هذه السمة", "Your task today for this trait"], pactGo: ["إلى المهمة", "To the task"],
    pactEnded: ["انتهى أسبوع «{v}».", "The week of “{v}” has ended."], pactHowQ: ["كيف كان أسبوعكم؟", "How was your week?"],
    pactHow_good: ["طيب", "Good"], pactHow_mid: ["بين بين", "So-so"], pactHow_hard: ["صعب", "Hard"],
    pactSaved: ["ميثاق هذا الأسبوع: {v}", "This week's pact: {v}"], pactPast: ["مواثيق سابقة", "Past pacts"],
    sawT: ["رأيتُ خيرًا", "I saw good"],
    sawSub: ["رأيت خيرًا من أحد أهلك اليوم؟ أخبره، فيصله في ملفه.", "Did you see good in someone at home today? Tell them, and it reaches their profile."],
    sawBtn: ["رأيتُ خيرًا من…", "I saw good in…"], sawWho: ["من رأيت منه خيرًا؟", "Whom did you see good in?"],
    sawWhat: ["ما الخير الذي رأيته؟", "What good did you see?"], sawWhatSub: ["اختر سمة، أو اكتب سطرًا قصيرًا.", "Pick a trait, or write a short line."],
    sawPh: ["مثل: ساعدني في حمل الأكياس", "e.g. helped me carry the bags"], sawSend: ["أرسل", "Send"],
    sawSent: ["وصل. سيجده في ملفه حين يفتحه.", "Sent. It will be waiting when their profile opens."],
    sawOne: ["هذا الملف وحده على الجهاز. أضف ملفًا لفرد من الأسرة، فيصله ما تراه فيه من خير.", "This is the only profile on this device. Add a profile for a family member, and the good you see in them will reach it."],
    sawAdd: ["أضف ملفًا لفرد من الأسرة", "Add a profile for a family member"],
    sawGotT: ["رأى فيك أهلك خيرًا", "Your family saw good in you"], sawGotM: ["رأى فيك {w} خيرًا", "{w} saw good in you"], sawGotF: ["رأت فيك {w} خيرًا", "{w} saw good in you"],
    sawGotOk: ["الحمد لله", "Al-hamdu lillah"], sawAdultName: ["أحد الكبار في البيت", "A grown-up at home"],
    sawMine: ["ما رآه أهلي فيّ ({c})", "What my family saw in me ({c})"], seenT: ["ما رآه أهلي فيّ", "What my family saw in me"],
    seenNone: ["لم يصل شيء بعد. ما يراه أهلك فيك من خير يظهر هنا.", "Nothing yet. The good your family sees in you will appear here."]
  });
  Object.assign(UF, { sawSub: "رأيتِ خيرًا من أحد أهلك اليوم؟ أخبريه، فيصله في ملفه.", sawWho: "من رأيتِ منه خيرًا؟", sawWhat: "ما الخير الذي رأيتِه؟", sawWhatSub: "اختاري سمة، أو اكتبي سطرًا قصيرًا.",
    sawSend: "أرسلي", sawOne: "هذا الملف وحده على الجهاز. أضيفي ملفًا لفرد من الأسرة، فيصله ما ترينه فيه من خير.", sawAdd: "أضيفي ملفًا لفرد من الأسرة", sawPh: "مثل: ساعدتني في حمل الأكياس" });
  Object.assign(U, {
    chT: ["قصص تختار فيها", "Stories where you choose"], chTag: ["تختار فيها", "You choose"], chOut: ["ما حدث", "What happened"],
    chTry: ["جرّب الاختيار الآخر", "Try the other choice"], chOn: ["تابع إلى الخاتمة", "On to the ending"], chEndT: ["الخاتمة", "The ending"],
    chToTasks: ["إلى مهام «{v}»", "To the tasks for “{v}”"], chFirst: ["اختيارك الأول", "Your first choice"], chAgain: ["اقرأ القصة من أولها", "Read the story again"]
  });
  Object.assign(U, {
    shareQr: ["يمسحه هاتف آخر بالكاميرا", "Scan it with another phone's camera"], shareQrAlt: ["رمز QR للرابط {v}", "QR code for {v}"],
    parT: ["صفحة للوالدين", "A page for parents"], trLink: ["التدريب على منهج سلّم اليد", "Training in the Tazkiya Hand Method"], parSub: ["ما التطبيق، والخصوصية، والتثبيت، والنسخة الاحتياطية", "What it is, privacy, installing, and backups"],
    bkFileT: ["نسخة تزكية الاحتياطية", "Tazkiya backup"],
    itpT: ["ثبّت تزكية حتى يبقى تقدّمك", "Install Tazkiya so your progress stays"],
    itpSub: ["سفاري يمسح بيانات المواقع التي لم تُفتح أسبوعًا. على الشاشة الرئيسية يبقى تقدّمك محفوظًا.", "Safari clears the data of sites not opened for a week. On the Home Screen your progress stays saved."],
    itpTMac: ["احفظ تقدّمك", "Keep your progress"],
    itpSubMac: ["سفاري يمسح بيانات المواقع التي لم تُفتح أسبوعًا. احفظ نسخة احتياطية، أو أضف تزكية إلى Dock من قائمة «ملف».", "Safari clears the data of sites not opened for a week. Save a backup, or add Tazkiya to the Dock from the File menu."],
    bkRemT: ["احفظ نسخة احتياطية", "Save a backup"],
    bkRemSub: ["مضى أكثر من أسبوعين على آخر نسخة. النسخة ملف صغير يعيد التقدّم إن ضاع.", "It has been over two weeks since the last backup. A backup is a small file that brings your progress back if it is lost."],
    bkRemNever: ["لم تُحفظ نسخة بعد. النسخة ملف صغير يعيد التقدّم إن ضاع.", "No backup has been saved yet. A backup is a small file that brings your progress back if it is lost."],
    iosMove: ["لك تقدّم في سفاري؟ احفظ نسخة هناك، ثم استعدها هنا.", "Have progress in Safari? Save a backup there, then restore it here."],
    eveGcal: ["أضِف إلى تقويم جوجل", "Add to Google Calendar"], eveIcsOther: ["ملف لتقويم آخر", "A file for another calendar"],
    fxIos: ["على آيفون لا تُسمع الأصوات والهاتف على الصامت.", "On iPhone the sounds are silent while the phone is on silent mode."]
  });
  Object.assign(UF, { itpT: "ثبّتي تزكية حتى يبقى تقدّمك", itpSubMac: "سفاري يمسح بيانات المواقع التي لم تُفتح أسبوعًا. احفظي نسخة احتياطية، أو أضيفي تزكية إلى Dock من قائمة «ملف».",
    bkRemT: "احفظي نسخة احتياطية", itpTMac: "احفظي تقدّمك", iosMove: "لكِ تقدّم في سفاري؟ احفظي نسخة هناك، ثم استعيديها هنا.", eveGcal: "أضيفي إلى تقويم جوجل" });
  Object.assign(U, {
    moveT: ["انتقلت تزكية إلى tazkiya.family", "Tazkiya has moved to tazkiya.family"],
    moveB: ["تقدّمك محفوظ في هذا الجهاز على العنوان القديم. بضغطة واحدة ينتقل معك إلى العنوان الجديد داخل الرابط نفسه، دون أن يمرّ بأي خادم.", "Your progress is saved on this device under the old address. One tap carries it to the new address inside the link itself, without passing through any server."],
    moveGo: ["انقل تقدّمي وافتح الموقع الجديد", "Move my progress and open the new site"],
    moveBig: ["تقدّمك أكبر من أن ينتقل داخل الرابط. احفظ نسخة احتياطية، ثم افتح الموقع الجديد واستعدها من الإعدادات.", "Your progress is too large to travel inside the link. Save a backup, then open the new site and restore it from Settings."],
    moveOpen: ["افتح الموقع الجديد", "Open the new site"],
    moveInT: ["تقدّمك من العنوان القديم", "Your progress from the old address"],
    moveInAsk: ["انقل هذا التقدّم إلى هنا؟", "Bring this progress here?"],
    moveInOver: ["في هذا الموقع تقدّم محفوظ من قبل، والنقل يحلّ محله.", "This site already has saved progress; the move replaces it."],
    moveInYes: ["انقل التقدّم", "Move the progress"],
    moveBad: ["تعذّرت قراءة التقدّم المنقول. افتح العنوان القديم واحفظ نسخة احتياطية، ثم استعدها هنا من الإعدادات.", "The moved progress could not be read. Open the old address and save a backup, then restore it here from Settings."]
  });
  Object.assign(UF, { moveBig: "تقدّمك أكبر من أن ينتقل داخل الرابط. احفظي نسخة احتياطية، ثم افتحي الموقع الجديد واستعيديها من الإعدادات.",
    moveBad: "تعذّرت قراءة التقدّم المنقول. افتحي العنوان القديم واحفظي نسخة احتياطية، ثم استعيديها هنا من الإعدادات." });
  Object.assign(UF, { chTry: "جرّبي الاختيار الآخر", chOn: "تابعي إلى الخاتمة", chAgain: "اقرئي القصة من أولها" });
  Object.assign(UA, {
    eveQ1: ["أين غلبتك نفسك اليوم، وأين غلبتها؟", "Where did your self get the better of you today, and where did you get the better of it?"],
    eveQ1s: ["المس الإصبع الذي غلب على يومك.", "Touch the finger that ruled your day."],
    eveQ2: ["نعمة تشكر الله عليها اليوم", "A blessing to thank Allah for today"], eveQ2ph: ["مثل: عافية في البدن، أو كلمة طيبة سمعتها", "e.g. good health, or a kind word I heard"],
    eveQ3s: ["قلها بحضور قلب، لما كان اليوم من تقصير، ثم المس.", "Say it with a present heart, for the day's shortcomings, then tap."],
    eveDone: ["تمّت محاسبة الليلة. نومًا هنيئًا.", "Tonight's reckoning is done. Sleep well."]
  });
  Object.assign(UAF, { eveQ1s: "المسي الإصبع الذي غلب على يومك.", eveQ2: "نعمة تشكرين الله عليها اليوم", eveQ3s: "قوليها بحضور قلب، لما كان اليوم من تقصير، ثم المسي.", eveDone: "تمّت محاسبة الليلة. نومًا هنيئًا." });
  const ED_KEYS = new Set(["edT", "edKids", "edAdult", "edNote", "edAskT", "edAskB", "edKidsD", "edAdultD", "edSwitched"]); // shared by both editions
  const u = k => {
    const ar = L() === "ar", f = ar && GEN() === "f";
    let s;
    if (UA[k] && (ADU() || ED_KEYS.has(k))) s = (f && UAF[k]) || UA[k][ar ? 0 : 1];
    else s = (f && UF[k]) || (U[k] || ["", ""])[ar ? 0 : 1];
    return (s || "").split("{n}").join(NAME());
  };
  const AR = o => (GEN() === "f" && o.ar_f != null ? o.ar_f : o.ar);
  const t = o => (o == null ? "" : typeof o === "string" ? o : L() === "ar" ? (AR(o) != null ? AR(o) : (o.en != null ? o.en : "")) : (o.en != null ? o.en : (AR(o) != null ? AR(o) : "")));
  const ageRank = r => (!S.age ? 0 : r.ages === S.age ? 0 : (r.ages === "all" || !r.ages) ? 1 : 2);
  const byAge = list => S.age ? list.map((r, i) => [r, i]).sort((a, b) => ageRank(a[0]) - ageRank(b[0]) || a[1] - b[1]).map(x => x[0]) : list;
  const NAME = () => nameOf(P.active, S);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (pair, o) => { let s = Array.isArray(pair) ? pair[L() === "ar" ? 0 : 1] : pair; Object.keys(o).forEach(k => { s = s.split("{" + k + "}").join(o[k]); }); return s; };
  const nm = id => t(C.stages[id].name);
  const fing = id => { const f = fingerOf(id); return f ? t(FINGER[f]) : u("rightHandWord"); };
  const BK = () => (L() === "ar" ? "→" : "←");
  function move(a, b, n) { const k = Math.max(0, Math.min(n, S.mix[a])); S.mix[a] -= k; S.mix[b] += k; return k; }
  function ev(e) { S.ev = (S.ev || []).concat([Object.assign({ t: Date.now() }, e)]).slice(-500); }
  function log(e) { S.hist.unshift(Object.assign({ t: Date.now() }, e)); S.hist = S.hist.slice(0, 30); if (e && e.a && e.b) ev({ k: "mv", a: e.a, b: e.b, n: e.n || 1 }); }

  function scoreQuiz(stage, ok) {
    const moves = [];
    const mv = (a, b, n) => { const k = move(a, b, n); if (k) moves.push({ a, b, n: k }); return k; };
    if (ok) {
      let need = 2;
      if (LOWER.includes(stage)) need -= mv(stage, "human", need);
      if (stage === "sabiq") need -= mv("human", "sabiq", need);
      for (const s of LOWER) { if (need <= 0) break; need -= mv(s, "human", need); }
      if (need > 0) mv("human", "sabiq", need);
    } else {
      if (LOWER.includes(stage)) { if (!mv("human", stage, 1)) mv("sabiq", stage, 1); }
      else if (!mv("sabiq", "human", 1)) mv("human", "monkey", 1);
    }
    return moves;
  }
  function scoreTask(stage) {
    // a confirmed task lifts one point: out of its own lower stage, else out of the lowest filled one, else human toward sabiq
    const order = LOWER.includes(stage) ? [stage].concat(LOWER) : LOWER;
    for (const s of order) if (move(s, "human", 1)) return [{ a: s, b: "human", n: 1 }];
    return move("human", "sabiq", 1) ? [{ a: "human", b: "sabiq", n: 1 }] : [];
  }
  const moveText = m => fmt(U.moved, { n: m.n, a: nm(m.a), b: nm(m.b) });

  // climbing feedback: a quiet ink bloom on the finger that rose, with one warm line
  function climb(moves) {
    const up = (moves || []).find(m => ORDER.indexOf(m.b) > ORDER.indexOf(m.a));
    if (!up) return false;
    const b = up.b, after = S.mix[b], before = after - up.n, f = fingerOf(b); setTimeout(() => FX("rise"), 220);
    const deg = Math.floor(after / 10) > Math.floor(before / 10);
    const fn = f ? t(FINGER[f]) : u("rightHandWord");
    const rr = route(), kidsBook = rr.name === "chapter" && (bookOf(rr.id) || {}).picture === true;
    const line = kidsBook ? u("climbSmall") : fmt(deg ? (L() === "ar" && GEN() === "f" ? UF.climbDeg : U.climbDeg) : (L() === "ar" && GEN() === "f" ? UF.climbStep : U.climbStep), { f: fn, s: nm(b) });
    const R = !f, g = R ? GR.thumb : GF[f], src = R ? "assets/right-hand-virtues.webp" : "assets/hand.webp";
    const old = document.querySelector(".climb"); if (old) old.remove();
    const d = document.createElement("div"); d.className = "climb"; d.setAttribute("role", "status");
    d.innerHTML = `<div class="mini"><img src="${src}" alt=""><svg viewBox="0 0 1448 1086" aria-hidden="true">
      <circle class="bloom" cx="${g.chip[0]}" cy="${g.chip[1]}" r="120" fill="${G[b].color}"/>
      <circle class="bloom b2" cx="${g.chip[0]}" cy="${g.chip[1]}" r="120" fill="none" stroke="#24364b" stroke-width="10"/></svg></div>
      <p>${esc(line)}${route().name === "quiz" || kidsBook ? "" : `<span>${esc(moveText(up))}</span>`}</p>`;
    document.body.appendChild(d);
    let reduce = false; try { reduce = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    const bye = () => { d.classList.add("out"); setTimeout(() => d.remove(), 450); document.removeEventListener("pointerdown", bye, true); };
    setTimeout(() => document.addEventListener("pointerdown", bye, true), 50);
    setTimeout(bye, reduce ? 3200 : 3000);
    return true;
  }
  function toast(msg, ms) {
    const old = document.querySelector(".toast"); if (old) old.remove();
    const d = document.createElement("div"); d.className = "toast" + (ms ? " long" : ""); d.setAttribute("role", "status"); d.textContent = msg;
    document.body.appendChild(d); setTimeout(() => d.remove(), ms || 2700);
  }

  // returning on a later day: a warm welcome only, the mix never changes for being away (owner decision, 17 Nov)
  const WELCOME_BACK = !!S.last && S.last < today();
  S.last = today(); save();

  /* ---------- the hand ---------- */
  const mx = x => 1448 - x;
  const mpoly = (poly, R) => R ? poly.split(" ").map(p => { const [x, y] = p.split(",").map(Number); return mx(x) + "," + y; }).join(" ") : poly;
  const mpt = (p, R) => R ? [mx(p[0]), p[1]] : p;
  function targetColor(tg, f) {
    if (!tg) return "#b9b2a6";
    if (G[tg]) return G[tg].color;
    if (tg === "slot") return "#b9b2a6";
    return VCOL[f];
  }
  function targetLabel(tg) {
    if (G[tg]) return nm(tg);
    if (tg === "slot") return u("slotT");
    if (tg === "prophets") return u("prophetsT");
    const v = findVirtue(String(tg).slice(2)); return v ? t(v.name) : "";
  }
  // o: side "L"|"R", selF (finger), deg, chips, interactive, focusF
  // Right hand of virtues: its own illustration (assets/right-hand-virtues.webp, 1448x1086), measured in its own coordinates
  const GR = {
    thumb:  { poly: [[520, 360], [860, 100], [990, 160], [720, 400]], cap: { x: 570, y: 180, w: 390, h: 124, rot: -30 }, chip: [905, 165], degs: [[690, 300], [860, 200]] },
    index:  { poly: [[760, 372], [1362, 368], [1362, 522], [760, 540]], cap: { x: 850, y: 380, w: 505, h: 112, rot: -1 }, chip: [1290, 430], degs: [[960, 440], [1110, 435], [1260, 430]] },
    middle: { poly: [[800, 540], [1418, 536], [1418, 672], [800, 672]], cap: { x: 860, y: 545, w: 548, h: 110, rot: 0 }, chip: [1340, 600], degs: [[980, 600], [1150, 600], [1320, 600]] },
    ring:   { poly: [[800, 672], [1402, 672], [1402, 812], [800, 812]], cap: { x: 850, y: 690, w: 540, h: 115, rot: 0 }, chip: [1325, 748], degs: [[970, 748], [1140, 748], [1310, 748]] },
    little: { poly: [[780, 812], [1312, 812], [1312, 958], [780, 958]], cap: { x: 830, y: 818, w: 470, h: 118, rot: 0 }, chip: [1235, 877], degs: [[930, 877], [1080, 877], [1225, 877]] }
  };
  const RLIGHT = [990, 160];
  function handX(o) {
    o = Object.assign({ side: "L", selF: null, deg: -1, chips: true, interactive: true, focusF: null, reveal: false, map: null, light: null, degs: true }, o);
    const R = o.side === "R", geo = f => (R ? GR[f] : GF[f]), map = o.map || (MAPS[MODE()][o.side]) || MAPS.one.L, uid = o.side + Math.random().toString(36).slice(2, 7);
    const lightOn = o.light != null ? o.light : (R || MODE() === "one");
    let s = `<svg viewBox="0 0 1448 1086" preserveAspectRatio="xMidYMid meet" aria-hidden="${o.interactive ? "false" : "true"}">
      <defs><filter id="rough${uid}"><feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="2" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="7"/></filter>
      <radialGradient id="glowg${uid}"><stop offset="0" stop-color="#f6c65a" stop-opacity=".55"/><stop offset=".45" stop-color="#f6c65a" stop-opacity=".18"/><stop offset="1" stop-color="#f6c65a" stop-opacity="0"/></radialGradient>`;
    if (o.focusF) s += `<filter id="soft${uid}" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="26"/></filter>
      <mask id="veilm${uid}"><rect width="1448" height="1086" fill="#fff"/><polygon points="${mpoly(geo(o.focusF).poly, false)}" fill="#000" filter="url(#soft${uid})"/></mask>`;
    s += `</defs>`;
    if (lightOn) s += `<circle class="glow" cx="${R ? RLIGHT[0] : 470}" cy="${R ? RLIGHT[1] : 95}" r="170" fill="url(#glowg${uid})" pointer-events="none"/>`;
    if (o.focusF) s += `<rect width="1448" height="1086" fill="#fbe9d6" opacity=".62" mask="url(#veilm${uid})"/>`;
    if (o.selF) {
      const f = o.selF, g = geo(f), c = g.cap, x = c.x, rot = c.rot, cx = x + c.w / 2, cy = c.y + c.h / 2;
      s += (R ? `<rect class="tint" x="${x + 4}" y="${c.y + 4}" width="${c.w - 8}" height="${c.h - 8}" rx="${(c.h - 8) / 2}" transform="rotate(${rot} ${cx} ${cy})" fill="${targetColor(map[f], f)}"/>` : `<polygon class="tint" points="${mpoly(g.poly, false)}" fill="${targetColor(map[f], f)}"/>`) + `
        <rect class="ring on" x="${x}" y="${c.y}" width="${c.w}" height="${c.h}" rx="${c.h / 2}" transform="rotate(${rot} ${cx} ${cy})"
        stroke="#24364b" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" filter="url(#rough${uid})"/>
        <rect class="ring on two" x="${x - 7}" y="${c.y - 6}" width="${c.w + 12}" height="${c.h + 11}" rx="${(c.h + 11) / 2}" transform="rotate(${rot - 0.8} ${cx} ${cy})"
        stroke="#24364b" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" filter="url(#rough${uid})"/>`;
    }
    if (o.hintF) {
      const g = geo(o.hintF), c = g.cap, cx = c.x + c.w / 2, cy = c.y + c.h / 2;
      s += `<rect class="tour-ring" x="${c.x - 10}" y="${c.y - 9}" width="${c.w + 20}" height="${c.h + 18}" rx="${(c.h + 18) / 2}" transform="rotate(${c.rot} ${cx} ${cy})" pointer-events="none"/>`;
    }
    if (o.interactive) {
      if (lightOn) s += `<circle class="summit" cx="${R ? RLIGHT[0] : 470}" cy="${R ? RLIGHT[1] - 10 : 80}" r="95" data-act="summit" role="button" tabindex="0" aria-label="${esc(u("summitT"))}"/>`;
      FINGERS.forEach(f => {
        s += `<polygon class="hit" points="${mpoly(geo(f).poly, false)}" data-act="finger" data-side="${o.side}" data-f="${f}" role="button" tabindex="0" aria-label="${esc(t(FINGER[f]) + ": " + targetLabel(map[f]))}"/>`;
      });
    }
    FINGERS.forEach(f => {
      const g = geo(f), tg = map[f];
      if (o.degs && (o.selF === f || o.focusF === f) && G[tg]) {
        g.degs.forEach((p0, i) => {
          if (i >= (C.stages[tg].degrees.length || g.degs.length)) return;
          const p = mpt(p0, false), act = o.deg === i;
          s += `<g class="deg" ${o.interactive ? `data-act="deg" data-s="${tg}" data-side="${o.side}" data-i="${i}" role="button" tabindex="0"` : ""} aria-label="${esc((C.stages[tg].degrees[i] ? t(C.stages[tg].degrees[i].name) : ""))}">
            <circle cx="${p[0]}" cy="${p[1]}" r="${act ? 30 : 24}" fill="${act ? "#24364b" : "#fcf6ee"}"/>
            <text x="${p[0]}" y="${p[1] + 9}" text-anchor="middle" direction="ltr" style="fill:${act ? "#fcf6ee" : "#24364b"}">${i + 1}</text></g>`;
        });
      } else if (o.chips && G[tg] && o.selF !== f) {
        const [x, y] = mpt(g.chip, false), label = (o.mix || S.mix)[tg] + "%", w = 30 + label.length * 21;
        s += `<g class="chip" pointer-events="none"><rect x="${x - w / 2}" y="${y - 26}" width="${w}" height="52" rx="26"/>
          <text x="${x}" y="${y + 12}" text-anchor="middle" direction="ltr">${label}</text></g>`;
      }
    });
    s += `</svg>`;
    const src = `assets/${R ? "right-hand-virtues" : "hand"}.webp`;
    return `<div class="handbox ${R ? "rside" : ""}"><div class="hand ${R ? "right" : ""} ${o.reveal ? "revealing" : ""}"><img src="${src}" alt="${esc(u(R ? "rightT" : "helloSub"))}" draggable="false" decoding="async"${R ? ' loading="lazy"' : ""}>${o.reveal ? `<div class="inkveil" aria-hidden="true"></div>` : ""}${s}</div></div>`;
  }
  // stage-keyed wrapper used by stage, sign and card pages
  function hand(o) {
    o = Object.assign({ chips: true, sel: null, deg: -1, interactive: true, focus: null }, o);
    const f = o.focus || o.sel;
    if (f && !fingerOf(f) && MODE() !== "one") return handX({ side: "R", chips: false, interactive: false });
    return handX({ side: "L", selF: o.sel ? fingerOf(o.sel) : null, deg: o.deg, chips: o.chips, interactive: o.interactive, focusF: o.focus ? fingerOf(o.focus) : null });
  }

  /* ---------- sheet ---------- */
  const sheet = document.getElementById("sheet"), scrim = document.getElementById("scrim");
  let sheetState = null; // {kind, s, i}
  let closeT = 0;
  function openSheet(html, st) {
    clearTimeout(closeT);
    document.body.classList.remove("intro-open");
    sheet.classList.remove("tall", "movefull"); sheet.classList.toggle("expanded", !!(st && st.expanded)); sheetState = st; sheet.innerHTML = `<button class="grab" data-act="sheetmore" aria-label="${esc(u("more"))}" tabindex="-1"></button><button class="x" data-act="close" aria-label="${esc(u("close"))}">×</button>` + html;
    sheet.hidden = false; scrim.hidden = !(st && st.kind === "pin"); sheet.classList.remove("closing"); document.body.classList.add("sheet-open");
    setInert(!(st && HAND_SHEETS.includes(st.kind)));
    if (st && ["stage", "virtue", "slot", "prophets"].includes(st.kind) && !st.expanded) keepHandInView();
    const hd = sheet.querySelector("h2"); if (hd) { hd.id = "sheetT"; hd.tabIndex = -1; sheet.setAttribute("aria-labelledby", "sheetT"); } else sheet.removeAttribute("aria-labelledby");
    const ae = document.activeElement; if (ae && ae !== document.body && ae !== view && !sheet.contains(ae)) rememberFocus(ae);
    setTimeout(() => { const f = hd || sheet.querySelector(".btn, button, a"); if (f && !sheet.contains(document.activeElement)) f.focus({ preventScroll: true }); }, 50);
  }
  let lastFocus = null, lastFocusSel = null;
  function rememberFocus(el) { lastFocus = el; lastFocusSel = el.dataset && el.dataset.act ? `[data-act="${el.dataset.act}"]` + ["side", "f", "s", "i"].filter(k => el.dataset[k] != null).map(k => `[data-${k}="${el.dataset[k]}"]`).join("") : null; }
  const focusables = () => [...sheet.querySelectorAll('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])')].filter(e => e.offsetParent !== null);
  const HAND_SHEETS = ["stage", "virtue", "slot", "prophets", "summit", "tour"];
  function setInert(on) { ["view", "tabs"].forEach(id => { const e = document.getElementById(id); if (e) e.inert = !!on; }); }
  function closeSheet() {
    if (sheet.hidden) return;
    setInert(false);
    sheet.classList.add("closing"); scrim.hidden = true; document.body.classList.remove("sheet-open", "intro-open");
    const back = sheet.contains(document.activeElement), lf0 = lastFocus, sel0 = lastFocusSel; lastFocus = null;
    clearTimeout(closeT); closeT = setTimeout(() => { sheet.hidden = true; sheet.classList.remove("closing"); }, 300);
    const was = sheetState; sheetState = null;
    if (was && was.kind === "intro" && !S.intro) { S.intro = true; save(); }
    if (was && ["stage", "virtue", "slot", "prophets"].includes(was.kind) && route().name === "home") { homeSel = null; homeDeg = -1; render(true); }
    if (back) { let lf = lf0 && document.contains(lf0) ? lf0 : (sel0 ? view.querySelector(sel0) : null); (lf || view).focus({ preventScroll: true }); }
  }
  function degList(id, sel) {
    return `<ol class="degs">${C.stages[id].degrees.map((d, i) => `<li class="${i === sel ? "sel" : ""}"><span class="num">${i + 1}</span><div><b>${esc(t(d.name))}</b><span>${esc(t(d.desc))}</span>${d.turnName ? `<span class="turn">${esc(fmt(U.turnTo, { x: t(d.turnName) }))}</span>` : ""}</div></li>`).join("")}</ol>`;
  }
  function stageSheet(id, i) {
    const st = C.stages[id];
    openSheet(`<div class="meta"><span>${esc(fing(id))}</span><span>·</span><span>${esc(u("yourShare"))}: <b dir="ltr">${S.mix[id]}%</b></span></div>
      <h2 class="h" style="color:${G[id].color === "#e6af3f" ? "#a8770f" : G[id].color === "#8f8f8a" ? "#5f5f5a" : G[id].color}">${esc(nm(id))}</h2>
      <p class="short${i >= 0 && st.degrees[i] && st.degrees[i].looks ? " degmode" : ""}">${esc(t(st.short))}</p>
      <ul class="dchips">${st.degrees.map((d, k) => `<li class="${k === i ? "sel" : ""}"><span class="num">${k + 1}</span>${esc(t(d.name))}</li>`).join("")}</ul>
      ${i >= 0 && st.degrees[i] ? `<p class="desc">${esc(t(st.degrees[i].desc))}</p>${degDetail(id, i)}` : ""}
      ${i >= 0 && st.degrees[i] && st.degrees[i].looks ? "" : `<div class="two-go"><a class="btn block learn" href="#/stage/${id}" data-act="go">${esc(u("learnStage"))}</a><a class="btn block work" href="#/tasks/${id}" data-act="go">${esc(u("toWork"))}</a></div>`}`, { kind: "stage", s: id, i, expanded: sheetExpandNext });
    sheetExpandNext = false; sheet.classList.toggle("degsheet", i >= 0 && !!(st.degrees[i] && st.degrees[i].looks));
  }
  let DQ = null; // degree question state {id, sq, picked}
  let sheetExpandNext = false;
  // keep the tapped finger (its pen ring) in view above the sheet
  function keepHandInView() {
    requestAnimationFrame(() => {
      if (sheet.hidden || sheet.classList.contains("expanded")) return;
      const ring = view.querySelector(".hand .ring.on") || view.querySelector(".hand .tint");
      const box = ring ? ring.getBoundingClientRect() : null; if (!box || !box.height) return;
      const top = 56, bottom = window.innerHeight - sheet.getBoundingClientRect().height;
      const want = top + (bottom - top) * 0.5, now = box.top + box.height / 2;
      window.scrollTo({ top: Math.max(0, window.scrollY + now - want), behavior: "smooth" });
    });
  }
  function setExpanded(on) {
    sheet.classList.toggle("expanded", on); if (sheetState) sheetState.expanded = on;
    const b = sheet.querySelector(".more-btn"); if (b) { b.setAttribute("aria-expanded", on); b.innerHTML = `${esc(u(on ? "less" : "moreS"))} <span aria-hidden="true">${on ? "▴" : "▾"}</span>`; }
    if (on) { const m = sheet.querySelector(".sheet-more"); if (m) setTimeout(() => m.scrollIntoView({ block: "nearest", behavior: "smooth" }), 60); }
    else { sheet.scrollTop = 0; keepHandInView(); }
  }
  function degDetail(id, i) {
    const st = C.stages[id], d = st.degrees[i]; if (!d || !(d.looks || d.step || d.q || d.story)) return "";
    let h = "";
    const looks = d.looks ? `<div class="dg"><h3>${esc(u("dgLooks"))}</h3><p>${esc(t(d.looks))}</p></div>` : "";
    const story = d.story ? t(d.story) : null;
    const storyBtn = story && story.length ? `<a class="btn ghost dg-story" href="#/deg/${id}/${i}" data-act="go">📖 ${esc(u("dgStory"))}</a>` : "";
    const exp = sheetExpandNext;
    let more = "";
    if (d.step) more += `<div class="dg step"><h3>${esc(u(d.turn ? "dgCure" : "dgStep"))}</h3><p>${esc(t(d.step))}</p></div>`;
    if (d.turn) more += `<div class="dg turn"><h3>${esc(u("dgTurn"))}: ${esc(t(d.turnName))}</h3><p>${esc(t(d.turn))}</p></div>`;
    if (d.q && d.q.options) {
      if (!DQ || DQ.id !== d.q.id) DQ = { id: d.q.id, sq: shuffleQ(d.q), picked: null };
      const q = DQ.sq, ans = DQ.picked != null, ok = ans && DQ.picked === q.correct;
      more += `<div class="dg q"><h3>${esc(u("dgQ"))}</h3><p>${esc(t(q.q))}</p><div class="opts">${q.options.map((op, k) => {
        let c = ""; if (ans) c = k === q.correct ? "right" : k === DQ.picked ? "wrong" : "dim";
        return `<button class="opt ${c}" data-act="dpick" data-s="${id}" data-d="${i}" data-i="${k}" ${ans ? "disabled" : ""}><span class="l">${(L() === "ar" ? "أبجده" : "ABCDE")[k]}</span><span>${esc(t(op))}</span></button>`; }).join("")}</div>
        ${ans ? `<div class="fb ${ok ? "ok" : "no"}" role="status"><b>${esc(u(ok ? "right" : "wrong"))}</b>${q.why ? `<p>${esc(t(q.why))}</p>` : ""}</div>` : ""}</div>`;
    }
    const last = i === st.degrees.length - 1, nx = ORDER[ORDER.indexOf(id) + 1];
    if (last && nx) more += `<a class="btn ghost block" href="#/stage/${nx}" data-act="go">${esc(fmt(U.dgDoor, { f: fing(nx) }))} →</a>`;
    h += looks + `<div class="dg-actions">${storyBtn}${more ? `<button class="more-btn" data-act="sheetmore" aria-expanded="${exp}" aria-controls="sheetMore">${esc(u(exp ? "less" : "moreS"))} <span aria-hidden="true">${exp ? "▴" : "▾"}</span></button>` : ""}<a class="btn dark-mini" href="#/tasks/${id}/t${i}" data-act="go" aria-label="${esc(u("toWork"))}">${esc(u("tasksTab"))}</a></div>
      ${more ? `<div class="sheet-more" id="sheetMore">${more}</div>` : ""}`;
    return h;
  }
  function pager(n) {
    const last = aloudIx >= n - 1;
    return `<div class="pager"><button class="small-btn" data-act="aloudprev" ${aloudIx ? "" : "disabled"} aria-label="${esc(u("prev2"))}">${L() === "ar" ? "\u2192" : "\u2190"}</button>
      <span dir="ltr">${aloudIx + 1} / ${n}</span>
      ${last ? `<span class="pg-end">✓</span>` : `<button class="btn pg-next" data-act="aloudnext">${esc(u("next2"))} ${L() === "ar" ? "\u2190" : "\u2192"}</button>`}</div>`;
  }
  function openDegOnHand(id, i) {
    const f = fingerOf(id); if (!f) { stageSheet(id, i); return; }
    homeSel = "L:" + f; homeDeg = i; render(true); sheetExpandNext = true; stageSheet(id, i);
  }
  function vDegStory(id, i) {
    const st = C.stages[id], d = st && st.degrees[+i]; if (!d || !d.story) return vMissing();
    const body = t(d.story) || []; if (!body.length) return vMissing();
    aloudIx = Math.max(0, Math.min(aloudIx, body.length - 1)); const lastP = aloudIx === body.length - 1;
    return `<div class="wrap article aloud${lastP ? " last" : ""}" style="--fs:${Math.max(S.fs, 24)}px">
      <div class="reader-bar"><a class="back" href="#/stage/${id}">${BK()} ${esc(nm(id))}</a><span class="fsz">${ttsBtn()}</span></div>
      <p class="meta" style="margin:0"><span>${esc(fing(id))} · ${esc(u("degree"))} ${+i + 1}</span></p>
      <h1 class="h">${esc(t(d.name))}</h1>
      <div class="aloud-page"><p>${esc(body[aloudIx])}</p></div>
      ${pager(body.length)}
      ${lastP && d.step ? `<div class="card ask"><b>${esc(u(d.turn ? "dgCure" : "dgStep"))}</b><p>${esc(t(d.step))}</p></div>` : ""}
      ${lastP && d.turn ? `<div class="card ask turnc"><b>${esc(u("dgTurn"))}: ${esc(t(d.turnName))}</b><p>${esc(t(d.turn))}</p></div>` : ""}
      ${lastP ? `<a class="btn block work" style="margin-top:18px" href="#/tasks/${id}/t${+i}">${esc(u("toTrait"))} →</a>
        <a class="btn ghost block" style="margin-top:10px" href="#/stage/${id}">${esc(u("dgBack"))}</a>` : ""}</div>`;
  }
  function summitSheet() {
    openSheet(`<h2 class="h" style="color:#a8770f">${esc(u("summitT"))}</h2><p class="short">${esc(u("summitB"))}</p>
      <button class="btn block ghost" data-act="close">${esc(u("close"))}</button>`, { kind: "summit" });
  }
  function virtueSheet(vid, f) {
    const v = findVirtue(vid);
    if (!v) { openSheet(`<h2 class="h">${esc(u("rightT"))}</h2><button class="btn block ghost" data-act="close">${esc(u("close"))}</button>`, { kind: "virtue" }); return; }
    openSheet(`<div class="meta"><span>${esc(t(FINGER[f]))} · ${esc(u("rightHandWord"))}</span></div>
      <h2 class="h" style="color:${VCOL[f] === "#e6af3f" || VCOL[f] === "#d9a21b" ? "#a8770f" : VCOL[f]}">${esc(t(v.name))}</h2>
      <p class="short">${esc(t(v.desc))}</p>
      ${v.ref ? `<p class="meta"><bdi>${esc(v.ref)}</bdi><span class="verify">${esc(u("verify"))}</span></p>` : ""}
      ${v.reading ? `<a class="btn block" href="#/virtue/${encodeURIComponent(v.id)}" data-act="go">${esc(u("readVirtue"))}</a>` : ""}`, { kind: "virtue", v: vid, f });
  }
  function slotSheet() {
    openSheet(`<h2 class="h" style="color:#6d675d">${esc(u("slotT"))}</h2><p class="short">${esc(u("slotB"))}</p>
      <p></p><button class="btn block ghost" data-act="close">${esc(u("close"))}</button>`, { kind: "slot" });
  }
  function prophetsSheet() {
    openSheet(`<h2 class="h" style="color:#a8770f">${esc(u("prophetsT"))}</h2><p class="short">${esc(u("summitB"))}</p>
      <button class="btn block ghost" data-act="close">${esc(u("close"))}</button>`, { kind: "prophets" });
  }
  function settingsSheet() {
    const m = MODE();
    openSheet(`<h2 class="h">${esc(u("famT"))}</h2><p><span class="ph">${esc(u("famPh"))}</span></p>
      <div class="fam">${P.list.map(id => { const st = id === P.active ? S : loadOf(id); return `<button class="tog ${id === P.active ? "on" : ""}" data-act="prof" data-p="${id}" aria-pressed="${id === P.active}">${esc(nameOf(id, st))}${edOf(st) === "adult" ? ` <small class="edmark">${esc(u("edAdult"))}</small>` : ""}</button>`; }).join("")}
        ${P.list.length < PMAX ? `<button class="tog add" data-act="profadd">+ ${esc(u("famAdd"))}</button>` : ""}</div>
      ${P.list.length > 1 && P.active !== "p1" ? `<button class="linkbtn" data-act="profdel">${esc(u("famDel"))}</button>` : ""}
      <h2 class="h" style="margin-top:20px">${esc(u("profT"))}</h2><p><span class="ph">${esc(u("profPh"))}</span></p>
      <div class="prof"><p style="margin:0 0 6px;font-weight:600;font-size:14px">${esc(u("agT"))}</p>
        <div class="seg3 seg-3" role="group">${GRPS.map(g => { const on = GRP(S) === g; return `<button class="tog ${on ? "on" : ""}" data-act="setgrp" data-g="${g}" aria-pressed="${on}">${esc(u(GRPK[g]))}</button>`; }).join("")}</div>
        <p class="sub" style="margin:6px 0 14px">${esc(u("edNote"))}</p>
        <label>${esc(u("profName"))} <input id="profName" type="text" maxlength="20" autocomplete="off" value="${esc(S.name || "")}" placeholder="${esc(ADU() ? u("namePhA") : L() === "ar" ? "نور" : "Nour")}"></label>
        <div class="seg3" role="group">${[["m", "boy"], ["f", "girl"]].map(([g, k]) => `<button class="tog ${S.gender === g ? "on" : ""}" data-act="setgender" data-g="${g}" aria-pressed="${S.gender === g}">${esc(u(k))}</button>`).join("")}</div>
        <p class="sub" style="margin:6px 0 0">${esc(u("profNote"))}</p>
        ${GRP(S) !== "child" ? "" : `<p style="margin:14px 0 6px;font-weight:600;font-size:14px">${esc(u("agBand"))}</p>
        <div class="seg3" role="group">${["4-8", "9-14"].map(a => `<button class="tog ${S.age === a ? "on" : ""}" data-act="setage" data-a="${a}" aria-pressed="${S.age === a}" dir="ltr">${a}</button>`).join("")}</div>
        <p class="sub" style="margin:6px 0 0">${esc(u("ageNote"))}</p>`}
        ${fxBlock()}
        <p style="margin:14px 0 6px;font-weight:600;font-size:14px">${esc(u("pwaT"))}</p>${installBlock()}
        <p style="margin:14px 0 6px;font-weight:600;font-size:14px">${esc(u("shareT"))}</p><button class="btn block ghost" data-act="sharesheet">${SHARE_SVG} ${esc(u("shareBtn"))}</button>
        ${dataBlock()}
        <p style="margin:14px 0 0"><button class="btn ghost block" data-act="filmplay">${esc(u("filmAgain"))}</button></p>
        <p style="margin:10px 0 0"><button class="btn ghost block" data-act="tourstart">${esc(u("tourAgain"))}</button></p>
        <p style="margin:8px 0 0"><button class="btn ghost block" data-act="resetask">${esc(u("reset"))}</button></p>
        <details class="mapdet"><summary>${esc(u("mapT"))}</summary><p class="sub">${esc(u("mapPh"))}</p>
      <div class="maps">${[["one", "mapOne", "mapOneD"], ["two", "mapTwo", "mapTwoD"], ["right", "mapRight", "mapRightD"]].map(([k, a, d]) =>
        `<button class="mapopt ${m === k ? "on" : ""}" data-act="setmap" data-m="${k}" aria-pressed="${m === k}"><b>${esc(u(a))}</b><span>${esc(u(d))}</span></button>`).join("")}</div></details>
        <a class="card next" href="#/about" data-act="go" style="margin-top:10px"><span class="tx"><b>${esc(u("abT"))}</b><span class="m">${esc(u("abShort"))}</span></span><span class="arrow">→</span></a></div>`, { kind: "settings" });
    sheet.classList.add("tall");
  }
  let introIx = 0;
  function edSheet() {
    openSheet(`<div class="onb-art"><img src="assets/hand.webp" alt=""></div>
      <h2 class="h">${esc(u("edAskT"))}</h2><p class="onb-body">${esc(u("edAskB"))}</p>
      <div class="maps edpick">${GRPS.map(g => `<button class="mapopt" data-act="introed" data-g="${g}"><b>${esc(u(GRPK[g]))}</b><span>${esc(u(GRPK[g] + "D"))}</span></button>`).join("")}</div>`, { kind: "intro" });
    document.body.classList.add("intro-open");
    sheet.classList.add("tall");
  }
  // first open (owner decision, 22 Nov 2026): the age group, then the animated story of the hand (intro.js), then the
  // tour. The story replaces the three welcome cards; on an installed iPhone app with no progress, the card that
  // offers to bring a Safari backup follows the story.
  function introSheet() {
    if (!S.edition) { edSheet(); return; }
    if (!sheet.hidden) { sheetState = null; closeSheet(); }
    playFilm(true);
  }
  let filmBusy = false;
  function playFilm(first) {
    if (filmBusy) return; filmBusy = true;
    const end = skipped => { filmBusy = false; filmDone(first, skipped); };
    const go = () => {
      if (!window.TZINTRO) { end(true); return; }
      let reduce = false; try { reduce = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
      window.TZINTRO.play({ lang: L(), adult: ADU(), fem: S.gender === "f", reduce, speed: +params.get("filmspeed") || 1, fx: FX, onEnd: end });
    };
    if (window.TZINTRO) { go(); return; }
    const sc = document.createElement("script"); sc.src = "intro.js?v=1"; sc.onload = go; sc.onerror = () => end(true); document.head.appendChild(sc);
  }
  function filmDone(first, skipped) {
    if (!first) return;
    S.intro = true; save();
    if (IOS && STANDALONE() && !hasProgress(S)) { iosMoveSheet(); return; }
    if (!S.tour) startTour();
  }
  function iosMoveSheet() {
    openSheet(`<div class="card ios-move"><p>${esc(u("iosMove"))}</p><button class="btn ghost" data-act="bkimport">${esc(u("bkImport"))}</button><input type="file" id="bkFile" accept=".json,application/json" hidden></div>
      <div class="row"><button class="btn" data-act="introok">${esc(u("start"))}</button></div>`, { kind: "iosmove" });
  }
  let pinBuf = "", pinErr = false;
  function pinSheet() {
    openSheet(`<h2 class="h">${esc(u("pinT"))}</h2><p class="meta">${esc(u("pinDemo"))}</p>
      <div class="pin-dots">${[0, 1, 2, 3].map(i => `<i class="${i < pinBuf.length ? "f" : ""}"></i>`).join("")}</div>
      <div class="err" role="alert">${pinErr ? esc(u("pinErr")) : ""}</div>
      <div class="pad">${["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"].map(k => k ? `<button data-act="pin" data-k="${k}" aria-label="${k === "⌫" ? "delete" : k}">${k}</button>` : "<span></span>").join("")}</div>`, { kind: "pin" });
  }

  /* ---------- views ---------- */
  let homeSel = null, homeDeg = -1, pendingSummit = false, pendingDeg = null, pendingIntro = false;
  function suggest() {
    // the lower stage with the biggest share, first unread reading in it
    const ids = LOWER.slice().sort((a, b) => S.mix[b] - S.mix[a]).concat(["human", "sabiq"]);
    for (const id of ids) for (const r of C.stages[id].readings) if (!S.read[r.id]) return { id, r };
    const id = ids[0]; return { id, r: C.stages[id].readings[0] };
  }
  function todaysMission() {
    if (!C.daily.length) return null;
    const n = Math.floor(Date.parse(today()) / 864e5);
    return C.daily[n % C.daily.length];
  }
  function missionCard(m) {
    if (!m || !C.stages[m.stage]) return "";
    const st = S.tasks[m.id];
    const act = st === "ok" ? `<span class="status ok">\u2713 ${esc(u("confirmed"))}</span>`
      : st === "done" ? (S.parent ? `<div class="row"><button class="small-btn dark" data-act="tconfirm" data-s="${m.stage}" data-t="${esc(m.id)}">${esc(u("confirm"))}</button><button class="small-btn" data-act="treject" data-t="${esc(m.id)}">${esc(u("notYet"))}</button></div>` : `<span class="status wait">${esc(u("waiting"))}</span>`)
      : `<button class="small-btn dark" data-act="dailydid" data-s="${m.stage}" data-t="${esc(m.id)}">${esc(u("did"))}</button>`;
    return `<div class="card mission"><div class="meta"><span class="bullet" style="background:${G[m.stage].color};margin:0"></span>${esc(u("today"))} · ${esc(fing(m.stage))}</div>
      <p style="margin:6px 0 10px;font-size:16px">${esc(t(m))}</p>${act}</div>`;
  }
  function homeHands() {
    const m = MODE(), selSide = homeSel ? homeSel.split(":")[0] : null, selF = homeSel ? homeSel.split(":")[1] : null;
    const rv = revealPending && !homeSel; let first = true;
    if (revealPending) { revealPending = false; S.revealDay = today(); save(); }
    const L = side => { const r = rv && first; first = false; return handX({ side, selF: selSide === side ? selF : null, deg: selSide === side ? homeDeg : -1, reveal: r }); };
    if (m === "one") return `${L("L")}<p class="hint">${esc(u("hint"))}</p>`;
    let h = "";
    if (MAPS[m].L) h += `<h2 class="h hand-h">${esc(u("leftT"))}</h2>${L("L")}`;
    if (MAPS[m].R) h += `<h2 class="h hand-h">${esc(u("rightT"))}</h2><p class="hint" style="margin-top:-4px">${esc(u("rightSub"))} · ${esc(u("sabiqShare"))}: <b dir="ltr">${S.mix.sabiq}%</b></p>${L("R")}`;
    return `<div class="hands ${m}">${h}</div>`;
  }
  let TOUR = null; // {i, hit} while the first tour runs
  const TOUR_N = FINGERS.length + 2; // five fingers, the light, the closing line
  let tourSaid = "";
  function tourSay(text) {
    const v = ttsVoice(); if (!v || !text || tourSaid === text) return; tourSaid = text;
    try { speechSynthesis.cancel(); const ut = new SpeechSynthesisUtterance(text); ut.voice = v; ut.lang = v.lang; ut.rate = L() === "ar" ? .88 : .92; speechSynthesis.speak(ut); } catch (e) {}
  }
  function startTour() { TOUR = { i: 0, hit: false }; tourSaid = ""; if (route().name !== "home") location.hash = "#/"; else render(); window.scrollTo(0, 0); }
  function endTour() { TOUR = null; S.tour = true; save(); ttsStop(); render(); }
  function vTour() {
    const i = TOUR.i, hit = TOUR.hit, M = MAPS.one.L;
    let say = "", big = "", sub = "", art = "", hand;
    if (i < FINGERS.length) {
      const f = FINGERS[i], tg = M[f], fn = t(FINGER[f]);
      hand = handX({ side: "L", map: M, light: true, chips: false, interactive: true, degs: false, focusF: hit ? null : f, selF: hit ? f : null, hintF: hit ? null : f });
      if (hit) { big = fmt(U.tourIs, { f: fn, s: nm(tg) }); sub = ""; art = symImg(tg, "tour-sym"); }
      else big = fmt(u("tourTouch"), { f: fn });
    } else if (i === FINGERS.length) {
      hand = handX({ side: "L", map: M, light: true, chips: false, interactive: true, degs: false });
      big = u(hit ? "tourLightT" : "tourLight"); sub = hit ? u("tourLightIs") : "";
    } else {
      hand = handX({ side: "L", map: M, light: true, chips: false, interactive: false });
      big = u("tourEnd"); sub = u("tourEndSub");
    }
    say = big + (sub ? ". " + sub : "");
    setTimeout(() => tourSay(say), 250);
    const done = i >= FINGERS.length + 1, canNext = hit || done;
    return `<section class="tour ${hit ? "hit" : ""}" aria-live="polite">
      <div class="tour-dots" aria-hidden="true">${Array.from({ length: TOUR_N }, (_, k) => `<i class="${k < i ? "done" : k === i ? "on" : ""}"></i>`).join("")}</div>
      <div class="tour-hand">${hand}</div>
      <div class="tour-card">${art}<p class="tour-big">${esc(big)}</p>${sub ? `<p class="tour-sub">${esc(sub)}</p>` : ""}
        <div class="tour-row">${ttsVoice() ? `<button class="small-btn" data-act="toursay" aria-label="${esc(u("ttsPlay"))}">🔊</button>` : ""}
          ${canNext ? `<button class="btn" data-act="${done ? "tourend" : "tournext"}">${esc(u(done ? "tourGo" : "tourNext"))}</button>` : ""}</div>
        ${done ? "" : `<button class="tour-skip" data-act="tourend">${esc(u("tourSkip"))}</button>`}</div></section>`;
  }
  function presenceBlock() {
    const act = activeTiers(), here = actDays().has(today());
    return `<section class="sec card pres"><div class="dash-h"><h2 class="h" style="font-size:20px;margin:0">${esc(u("presT"))}</h2>${here ? `<span class="m ok">${esc(u("presOk"))}</span>` : ""}</div>
      ${here ? "" : `<p class="sub" style="margin:6px 0 0">${esc(u("presNo"))}</p>`}
      ${act.length ? `<ul class="mylist">${act.map(a => tierRow(a.s, a.x, true, u(a.x.k) + " · " + t(a.d.name))).join("")}</ul>` : `<a class="btn block work" style="margin-top:10px" href="#/tasks">${esc(u("presStart"))}</a>`}</section>`;
  }

  /* ---------- choice stories (FIVE-IDEAS 5): #/choice/<id>; read = the ending reached; the first choice is kept ---------- */
  let CHQ = null; // {id, pick}
  const chOf = id => (C.choices || []).find(x => x.id === id);
  const choicesFor = id => byAge((C.choices || []).filter(x => x.stage === id).map(x => Object.assign({ ages: x.age }, x)));
  const chIsDone = x => !!(S.chs && S.chs[x.id] && S.chs[x.id].t);
  const chTrait = x => traitOf(x.stage + ":" + (x.trait | 0));
  function chRow(x) {
    const tr = chTrait(x);
    return `<a class="reading chrow" href="#/choice/${encodeURIComponent(x.id)}"><span class="tx"><span class="rtag ch">${esc(u("chTag"))}</span><b>${esc(t(x.title))}</b>${tr ? `<span class="m">${esc(tr.label)}</span>` : ""}</span>
      ${chIsDone(x) ? `<span class="done-mark">✓ ${esc(u("read"))}</span>` : ""}<span class="arrow">→</span></a>`;
  }
  function vChoice(id) {
    const x = chOf(id); if (!x) return vMissing();
    if (!CHQ || CHQ.id !== id) CHQ = { id, pick: null, end: false };
    const tr = chTrait(x), back = `<div class="reader-bar"><a class="back" href="#/stage/${x.stage}/read">${BK()} ${esc(nm(x.stage))}</a></div>`;
    const intro = (t(x.intro) || []).map(p => `<p>${esc(p)}</p>`).join("");
    if (CHQ.end) {
      const first = S.chs && S.chs[id] && x.opts[S.chs[id].c];
      return `<div class="wrap article choice" style="--fs:${S.fs}px">${back}<h1 class="h">${esc(t(x.title))}</h1>
        <p class="ch-k">${esc(u("chEndT"))}</p><div class="body ch-end"><p>${esc(t(x.end))}</p></div>
        <div class="read-end"></div>${first ? `<p class="sub ch-first">${esc(u("chFirst"))}: ${esc(t(first.t))}</p>` : ""}
        ${tr ? `<a class="btn block work" href="#/tasks/${x.stage}/t${tr.i}">${esc(fmt(u("chToTasks"), { v: tr.label }))}</a>` : ""}
        <button class="btn block ghost" style="margin-top:10px" data-act="chrestart">${esc(u("chAgain"))}</button></div>`;
    }
    const pk = CHQ.pick, o = pk != null ? x.opts[pk] : null;
    return `<div class="wrap article choice" style="--fs:${S.fs}px">${back}<h1 class="h">${esc(t(x.title))}</h1>
      <div class="body">${intro}</div>
      <div class="card ch-q"><p>${esc(t(x.q))}</p></div>
      <div class="opts ch-opts">${x.opts.map((op, i) => `<button class="opt ${pk == null ? "" : i === pk ? "right" : "dim"}" data-act="chpick" data-i="${i}" ${pk != null ? "disabled" : ""}><span class="l">${(L() === "ar" ? "أبجده" : "ABCDE")[i]}</span><span>${esc(t(op.t))}</span></button>`).join("")}</div>
      ${o ? `<div class="fb ch-fb ${o.weak ? "weak" : "ok"}" role="status"><b>${esc(u("chOut"))}</b><p>${esc(t(o.out))}</p><p class="ch-why">${esc(t(o.why))}</p></div>
        ${o.weak ? `<button class="btn block" style="margin-top:14px" data-act="chagain">${esc(u("chTry"))}</button><button class="btn block ghost" style="margin-top:8px" data-act="chend">${esc(u("chOn"))}</button>`
          : `<button class="btn block" style="margin-top:14px" data-act="chend">${esc(u("chOn"))}</button>`}` : ""}
    </div>`;
  }

  /* ---------- the family pact and "I saw good" (FIVE-IDEAS 4): device-level family data (tazkiya-family) ---------- */
  const FKEY = "tazkiya-family", PACT_HOW = ["good", "mid", "hard"], VKEY_RE = /^(zombie|pig|monkey|human|sabiq):[0-2]$/;
  function cleanFamily(o) {
    const f = { past: [], seen: [] }; if (!isObj(o)) return f;
    const pk = x => isObj(x) && typeof x.v === "string" && VKEY_RE.test(x.v) && typeof x.from === "string" && DAY_RE.test(x.from) && typeof x.to === "string" && DAY_RE.test(x.to);
    if (pk(o.pact)) f.pact = { v: o.pact.v, from: o.pact.from, to: o.pact.to };
    f.past = (Array.isArray(o.past) ? o.past : []).filter(pk).slice(-104).map(x => Object.assign({ v: x.v, from: x.from, to: x.to }, PACT_HOW.includes(x.how) ? { how: x.how } : {}));
    f.seen = (Array.isArray(o.seen) ? o.seen : []).filter(x => isObj(x) && typeof x.from === "string" && PID_RE.test(x.from) && typeof x.to === "string" && PID_RE.test(x.to) && x.from !== x.to && ts(x.t)).slice(-300).map(x => {
      const m = { id: typeof x.id === "string" && /^[a-z0-9]{1,16}$/.test(x.id) ? x.id : ts(x.t).toString(36), from: x.from, to: x.to, t: ts(x.t) };
      if (typeof x.v === "string" && VKEY_RE.test(x.v)) m.v = x.v; const tx = txt(x.tx, 120); if (tx) m.tx = tx; if (ts(x.got)) m.got = ts(x.got);
      return m; }).filter(m => m.v || m.tx);
    return f;
  }
  let F = (() => { try { return cleanFamily(JSON.parse(localStorage.getItem(FKEY) || "null")); } catch (e) { return cleanFamily(null); } })();
  function saveFamily() { try { localStorage.setItem(FKEY, JSON.stringify(F)); } catch (e) { storeFail(e); } }
  function traitOf(v) { const [s, i] = String(v || "").split(":"), st = C.stages[s], d = st && st.degrees[+i]; return d ? { s, i: +i, d, label: t(d.turnName || d.name) } : null; }
  const allTraits = () => [].concat(...ORDER.map(s => C.stages[s].degrees.map((d, i) => traitOf(s + ":" + i)))).filter(Boolean);
  const dayAdd = (d, n) => { const [y, m, dd] = d.split("-").map(Number); return ymd(new Date(y, m - 1, dd + n)); };
  const dayDiff = (a, b) => { const p = d => { const [y, m, dd] = d.split("-").map(Number); return Date.UTC(y, m - 1, dd); }; return Math.round((p(b) - p(a)) / 864e5); };
  const nextFriday = d => { const [y, m, dd] = d.split("-").map(Number), k = (5 - new Date(y, m - 1, dd).getDay() + 7) % 7; return dayAdd(d, k || 7); };
  const leftText = n => n === 1 ? u("pactLeft1") : n === 2 ? u("pactLeft2") : fmt(u("pactLeftN"), { c: n });
  function pactTask(tr) { const ts0 = tiersOf(tr.s, tr.d); return ts0.find(x => S.tasks[x.id] !== "ok") || ts0[ts0.length - 1] || null; }
  function pactPast() {
    const past = F.past.slice().reverse().filter(p => traitOf(p.v)); if (!past.length) return "";
    return `<details class="pact-past"><summary>${esc(u("pactPast"))} (${past.length})</summary><ul class="rec-list">${past.map(p => `<li><span>${esc(traitOf(p.v).label)}</span><span class="m"><bdi>${esc(fmtShort(Date.parse(p.from)))} – ${esc(fmtShort(Date.parse(p.to)))}</bdi>${p.how ? " · " + esc(u("pactHow_" + p.how)) : ""}</span></li>`).join("")}</ul></details>`;
  }
  function pactCard() {
    const p = F.pact, tr = p && traitOf(p.v);
    if (!tr) return `<section class="sec card pact"><h2 class="h pact-h">${esc(u("pactT"))}</h2><p class="sub">${esc(u("pactNone"))}</p><button class="btn block" data-act="pactpick">${esc(u("pactPick"))}</button>${pactPast()}</section>`;
    const left = dayDiff(today(), p.to);
    if (left <= 0) return `<section class="sec card pact"><h2 class="h pact-h">${esc(u("pactT"))}</h2><p>${esc(fmt(u("pactEnded"), { v: tr.label }))}</p><p class="pact-q"><b>${esc(u("pactHowQ"))}</b></p>
      <div class="seg3 pact-how">${PACT_HOW.map(h => `<button class="tog" data-act="pacthow" data-h="${h}">${esc(u("pactHow_" + h))}</button>`).join("")}</div>${pactPast()}</section>`;
    const x = pactTask(tr), on = x && (x.k === "tierStep" ? S.tasks[x.id] === "ok" : trHas(x.id));
    return `<section class="sec card pact"><p class="pact-k">${esc(u("pactT"))}</p><h2 class="h pact-v"><i class="dotc" style="background:${G[tr.s].color}"></i> ${esc(fmt(u("pactNow"), { v: tr.label }))}</h2><p class="m pact-left">${esc(leftText(left))}</p>
      ${x ? `<div class="pact-task"><span class="ttag">${esc(u("pactToday"))} · ${esc(u(x.k))}</span><p>${on ? "✓ " : ""}${esc(t(x.tx))}</p><a class="small-btn dark" href="#/tasks/${tr.s}/t${tr.i}">${esc(u("pactGo"))}</a></div>` : ""}${pactPast()}</section>`;
  }
  function pactSheet() {
    openSheet(`<h2 class="h">${esc(u("pactPickT"))}</h2><p class="short">${esc(u("pactPickSub"))}</p>
      ${ORDER.map(s => `<p class="pact-st"><i class="dotc" style="background:${G[s].color}"></i> ${esc(sNm(s))}</p><div class="pact-opts">${C.stages[s].degrees.map((d, i) => `<button class="tog" data-act="pactset" data-v="${s}:${i}">${esc(traitOf(s + ":" + i).label)}</button>`).join("")}</div>`).join("")}`, { kind: "pact", expanded: true });
  }
  let SAW = null; // {to, v}
  const sawName = id => { const st = id === P.active ? S : loadOf(id); return st.edition === "adult" && !(st.name || "").trim() ? u("sawAdultName") : nameOf(id, st); };
  const sawGot = m => { const st = m.from === P.active ? S : loadOf(m.from); return fmt(u(st.gender === "f" ? "sawGotF" : "sawGotM"), { w: sawName(m.from) }); };
  const sawWhat = m => [m.v && traitOf(m.v) ? traitOf(m.v).label : "", m.tx || ""].filter(Boolean).join(" · ");
  const sawMine = () => F.seen.filter(m => m.to === P.active && P.list.includes(m.from));
  function sawBlock() {
    const n = sawMine().length;
    return `<section class="sec card sawc"><h2 class="h pact-h">${esc(u("sawT"))}</h2><p class="sub">${esc(u("sawSub"))}</p><button class="btn block ghost" data-act="sawopen">${esc(u("sawBtn"))}</button>
      ${n ? `<a class="card next" href="#/seen" style="margin-top:10px"><span class="tx"><b>${esc(fmt(u("sawMine"), { c: n }))}</b></span><span class="arrow">→</span></a>` : ""}</section>`;
  }
  function sawSheet() {
    const others = P.list.filter(id => id !== P.active);
    if (!others.length) { openSheet(`<h2 class="h">${esc(u("sawT"))}</h2><p class="short">${esc(u("sawOne"))}</p>${P.list.length < PMAX ? `<button class="btn block" data-act="profadd">${esc(u("sawAdd"))}</button>` : ""}`, { kind: "saw" }); return; }
    if (!SAW || !others.includes(SAW.to)) {
      openSheet(`<h2 class="h">${esc(u("sawWho"))}</h2><div class="saw-who">${others.map(id => `<button class="mapopt" data-act="sawto" data-p="${id}"><b>${esc(sawName(id))}</b></button>`).join("")}</div>`, { kind: "saw" }); return;
    }
    const tx = (document.getElementById("sawTx") || {}).value || "";
    openSheet(`<h2 class="h">${esc(u("sawWhat"))}</h2><p class="short">${esc(sawName(SAW.to))} · ${esc(u("sawWhatSub"))}</p>
      <div class="pact-opts">${allTraits().map(tr => `<button class="tog ${SAW.v === tr.s + ":" + tr.i ? "on" : ""}" data-act="sawv" data-v="${tr.s}:${tr.i}" aria-pressed="${SAW.v === tr.s + ":" + tr.i}">${esc(tr.label)}</button>`).join("")}</div>
      <input id="sawTx" class="eve-in" type="text" maxlength="120" autocomplete="off" dir="auto" value="${esc(tx)}" placeholder="${esc(u("sawPh"))}">
      <button class="btn block" data-act="sawsend">${esc(u("sawSend"))}</button>`, { kind: "saw", expanded: true });
  }
  // new messages for the profile now open: one quiet sheet, then they stay in "What my family saw in me"
  function sawCheck() {
    if (sheetState && sheetState.kind !== "settings") return;
    const nw = sawMine().filter(m => !m.got); if (!nw.length) return;
    const now = Date.now(); nw.forEach(m => { m.got = now; }); saveFamily(); FX("ok");
    sawGotSheet(nw.map(m => m.id));
  }
  function sawGotSheet(ids) {
    const ms = F.seen.filter(m => ids.includes(m.id) && m.to === P.active);
    openSheet(`<h2 class="h">${esc(u("sawGotT"))}</h2><ul class="saw-list">${ms.map(m => `<li><b>${esc(sawGot(m))}:</b> <bdi>${esc(sawWhat(m))}</bdi></li>`).join("")}</ul>
      <button class="btn block" data-act="close">${esc(u("sawGotOk"))}</button><a class="linkbtn" href="#/seen" style="display:block;text-align:center">${esc(u("seenT"))}</a>`, { kind: "sawgot", ids });
  }
  function vSeen() {
    const ms = sawMine().slice().reverse();
    return `<div class="wrap"><div class="st-back"><a class="back" href="#/" data-act="histback">${BK()} ${esc(u("back"))}</a></div>
      <h1 class="h" style="font-size:28px;margin:6px 0 10px">${esc(u("seenT"))}</h1>
      ${ms.length ? `<ul class="saw-list big">${ms.map(m => `<li><span class="m">${esc(fmtShort(m.t))}</span><b>${esc(sawGot(m))}</b><p>${esc(sawWhat(m))}</p></li>`).join("")}</ul>` : `<p class="sub">${esc(u("seenNone"))}</p>`}
      <section class="sec">${sawBlock()}</section></div>`;
  }

  /* ---------- the hidden deed, khabī'a (FIVE-IDEAS 3): only the date is kept; no points, no mix, no presence,
     seen only by the profile's owner (never in the record, the parent views or anywhere else) ---------- */
  const KH_MAX = 3;
  const khList = () => (Array.isArray(S.khab) ? S.khab : []);
  const khToday = () => khList().filter(d => d === today()).length;
  const KH_AR = "وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لَا تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ";
  function khBlock() {
    const n = khList().length;
    return `<div class="khab"><button class="btn block ghost khbtn" data-act="khab"><span aria-hidden="true">🤲</span> ${esc(u("khBtn"))}</button>${n && !S.parent ? `<p class="khline">${esc(fmt(u("khLine"), { c: n }))}</p>` : ""}</div>`;
  }
  function khSheet() {
    if (khToday() >= KH_MAX) { openSheet(`<div class="apply"><h2 class="h kh-h">${esc(u("khMax"))}</h2><button class="linkbtn" data-act="close">${esc(u("close"))}</button></div>`, { kind: "khab" }); return; }
    openSheet(`<h2 class="h kh-h">${esc(u("khBtn"))}</h2><p class="short">${esc(u("khLead"))}</p>
      <figure class="quote kh-q" style="margin-inline:0"><p class="qar" lang="ar">«${esc(KH_AR)}»</p>${L() === "en" ? `<p class="qen" lang="en">${esc(u("khEn"))}</p>` : ""}
        <figcaption class="ref"><bdi>${esc(u("khRef"))}</bdi><span class="checked">✓ ${esc(u("checkedHadith"))}</span></figcaption></figure>
      <p class="sub">${esc(u("khNote"))}</p>
      <button class="btn block" data-act="khsave">${esc(u("khSave"))}</button>`, { kind: "khab" });
  }

  /* ---------- evening reckoning (FIVE-IDEAS 2): #/evening, one minute, one step per screen ---------- */
  let EVE = null; // {d, i, f, g}
  const eveDone = () => !!(S.eve && S.eve[today()]);
  function eveCard() {
    if (new Date().getHours() < 17 || eveDone()) return "";
    return `<a class="card next evecard" href="#/evening" data-act="evego"><span class="tx"><b>${esc(u("eveT"))}</b><span class="m">${esc(u("eveCardSub"))}</span></span><span class="arrow">→</span></a>`;
  }
  const eveLink = () => `<a class="card next evelink" href="#/evening"><span class="tx"><b>${esc(u("eveT"))}</b><span class="m">${esc(u(eveDone() ? "eveDoneT" : "eveLinkSub"))}</span></span><span class="arrow">→</span></a>`;
  const DUA_AR = "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا، وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا";
  function vEvening() {
    const d0 = today();
    if (!EVE || EVE.d !== d0) EVE = { d: d0, i: eveDone() ? 4 : 0, f: null, g: "" };
    if (eveDone()) EVE.i = 4;
    const i = EVE.i, ar = L() === "ar";
    const dots = `<div class="eve-dots" role="img" aria-label="${esc(u("eveSteps"))}: ${Math.min(i + 1, 4)} / 4">${[0, 1, 2, 3].map(k => `<i class="${k < i ? "done" : k === i ? "on" : ""}"></i>`).join("")}</div>`;
    const top = `<div class="st-back"><a class="back" href="#/">${BK()} ${esc(u("back"))}</a></div><p class="eve-k">${esc(u("eveT"))}</p>${i < 4 ? dots : ""}`;
    let b = "";
    if (i === 0) {
      const tg = EVE.f ? MAPS.one.L[EVE.f] : null;
      b = `<h1 class="h eve-q">${esc(u("eveQ1"))}</h1><p class="sub eve-s">${esc(u("eveQ1s"))}</p>
        <div class="eve-hand">${handX({ side: "L", map: MAPS.one.L, chips: false, light: false, degs: false, selF: EVE.f })}</div>
        ${tg ? `<p class="eve-pick"><i class="dotc" style="background:${G[tg].color}"></i><b>${esc(fing(tg))}</b> · ${esc(nm(tg))}</p><button class="btn block" data-act="evenext">${esc(u("eveNext"))}</button>` : ""}
        <button class="linkbtn eve-rem" data-act="everemind">${esc(u("eveRemind"))}</button>`;
    } else if (i === 1) {
      b = `<h1 class="h eve-q">${esc(u("eveQ2"))}</h1><p class="sub eve-s">${esc(u("eveQ2s"))}</p>
        <input id="eveG" class="eve-in" type="text" maxlength="120" autocomplete="off" dir="auto" value="${esc(EVE.g)}" placeholder="${esc(u("eveQ2ph"))}">
        <div class="row eve-row"><button class="btn ghost" data-act="eveskip">${esc(u("eveSkip"))}</button><button class="btn" data-act="evenext">${esc(u("eveNext"))}</button></div>`;
    } else if (i === 2) {
      b = `<h1 class="vh">${esc(u("eveQ3"))}</h1><p class="sub eve-s" style="margin-top:22px">${esc(u("eveQ3s"))}</p>
        <button class="eve-say" data-act="evesay"><span lang="ar">${esc(U.eveQ3b[0])}</span>${ar ? "" : `<small>${esc(u("eveQ3en"))}</small>`}</button>`;
    } else if (i === 3) {
      b = `<h1 class="h eve-q">${esc(u("eveQ4"))}</h1>
        <figure class="quote eve-dua"><p class="qar" lang="ar">«${esc(DUA_AR)}»</p>${ar ? "" : `<p class="qen" lang="en">${esc(u("eveDuaEn"))}</p>`}
          <figcaption class="ref"><bdi>${esc(u("eveDuaRef"))}</bdi><span class="checked">✓ ${esc(u("checkedHadith"))}</span></figcaption></figure>
        <button class="btn block" data-act="evefinish">${esc(u("eveAmen"))}</button>`;
    } else {
      const e = (S.eve || {})[d0] || {};
      b = `<div class="eve-end"><p class="eve-ok" aria-hidden="true">✓</p><h1 class="h eve-q">${esc(u("eveDone"))}</h1>
        ${e.f ? `<p class="eve-pick"><span class="m">${esc(u("eveYour"))}:</span> <i class="dotc" style="background:${G[e.f].color}"></i><b>${esc(fing(e.f))}</b> · ${esc(nm(e.f))}</p>` : ""}
        ${e.g ? `<p class="eve-thanks"><span class="m">${esc(u("eveThanks"))}:</span> <bdi>${esc(e.g)}</bdi></p>` : ""}
        <button class="btn block ghost" data-act="everemind">${esc(u("eveRemind"))}</button>
        <a class="btn block" style="margin-top:10px" href="#/">${esc(u("eveHome"))}</a></div>`;
    }
    return `<div class="wrap evening">${top}${b}</div>`;
  }
  function eveRemindSheet() {
    openSheet(`<h2 class="h">${esc(u("eveRemind"))}</h2><p class="short">${esc(u("eveRemSub"))}</p>
      <label class="eve-at"><span>${esc(u("eveAt"))}</span><input id="eveTime" type="time" value="20:00" step="300" dir="ltr"></label>
      ${ANDROID ? `<button class="btn block" data-act="evegcal">${esc(u("eveGcal"))}</button>` : ""}
      <button class="btn block${ANDROID ? " ghost" : ""}" ${ANDROID ? 'style="margin-top:8px"' : ""} data-act="eveics">${esc(u(ANDROID ? "eveIcsOther" : "eveIcsGo"))}</button>`, { kind: "everemind" });
  }
  // a daily repeating calendar event at a local ("floating") time, as an .ics file saved on the device: no server
  function eveIcs(hhmm) {
    const m = /^(\d{1,2}):(\d{2})/.exec(hhmm || "") || [0, "20", "00"], hh = Math.min(23, +m[1]), mm = Math.min(59, +m[2]);
    const p2 = n => String(n).padStart(2, "0"), now = new Date(), d = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hh, mm, 0);
    if (d <= now) d.setDate(d.getDate() + 1);
    const loc = x => x.getFullYear() + p2(x.getMonth() + 1) + p2(x.getDate()) + "T" + p2(x.getHours()) + p2(x.getMinutes()) + "00";
    const utc = x => x.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const ie = x => String(x).replace(/[\\;,]/g, c => "\\" + c).replace(/\r?\n/g, "\\n");
    const url = CANON + "#/evening", title = u("eveIcsT");
    const enc = new TextEncoder();
    const fold = line => { let out = "", cur = "", n = 0, lim = 75; for (const ch of line) { const b = enc.encode(ch).length; if (n + b > lim) { out += cur + "\r\n "; cur = ""; n = 0; lim = 74; } cur += ch; n += b; } return out + cur; };
    return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Tazkiya//Evening reckoning//" + (L() === "ar" ? "AR" : "EN"), "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
      "BEGIN:VEVENT", "UID:tazkiya-evening-" + Date.now().toString(36) + "@tazkiya.family", "DTSTAMP:" + utc(now), "DTSTART:" + loc(d), "DURATION:PT5M", "RRULE:FREQ=DAILY",
      "SUMMARY:" + ie(title), "DESCRIPTION:" + ie(u("eveIcsD") + " " + url), "URL:" + url,
      "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:" + ie(title), "TRIGGER:PT0M", "END:VALARM", "END:VEVENT", "END:VCALENDAR"].map(fold).join("\r\n") + "\r\n";
  }
  function eveSaveIcs() {
    const el = document.getElementById("eveTime");
    saveFile(new Blob([eveIcs(el && el.value)], { type: "text/calendar;charset=utf-8" }), "tazkiya-evening.ics", u("eveIcsT")).then(ok => {
      if (!ok) return; FX("ok"); closeSheet(); toast(u("eveIcsOk"), 4000);
    });
  }
  // B3: Android's Google Calendar does not import .ics files from the phone; a daily event template opens it directly.
  // Only the event's own text goes into the link, nothing from the app's data
  function eveGcalUrl(hhmm) {
    const m = /^(\d{1,2}):(\d{2})/.exec(hhmm || "") || [0, "20", "00"], hh = Math.min(23, +m[1]), mm = Math.min(59, +m[2]);
    const p2 = n => String(n).padStart(2, "0"), now = new Date(), d = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hh, mm, 0);
    if (d <= now) d.setDate(d.getDate() + 1);
    const e = new Date(d.getTime() + 5 * 6e4), loc = x => x.getFullYear() + p2(x.getMonth() + 1) + p2(x.getDate()) + "T" + p2(x.getHours()) + p2(x.getMinutes()) + "00";
    return "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(u("eveIcsT")) + "&details=" + encodeURIComponent(u("eveIcsD") + " " + CANON + "#/evening")
      + "&recur=" + encodeURIComponent("RRULE:FREQ=DAILY") + "&dates=" + loc(d) + "/" + loc(e);
  }
  function eveRecord() {
    const E = S.eve || {}, days = Object.keys(E), d0 = Date.parse(today());
    const last = [...Array(14)].map((_, i) => new Date(d0 - i * 864e5).toISOString().slice(0, 10)).filter(d => E[d]);
    const n = {}; last.forEach(d => { const f = E[d].f; n[f] = (n[f] || 0) + 1; });
    return `<section class="sec"><h2 class="h">${esc(u("recEveT"))}</h2>
      ${days.length ? `<div class="rec-grid eve-grid"><div><b dir="ltr">${days.length}</b><span>${esc(u("recEveN"))}</span></div></div>
        ${last.length ? `<h3 class="h tr-h">${esc(u("recEve14"))}</h3><div class="mix eve-mix" aria-hidden="true">${ORDER.filter(k => n[k]).map(k => `<i style="flex-basis:${n[k] / last.length * 100}%;background:${MC(k)}"></i>`).join("")}</div>
        <ul class="rec-list">${ORDER.filter(k => n[k]).map(k => `<li><span><i class="dotc" style="background:${MC(k)}"></i> ${esc(fing(k))} · ${esc(nm(k))}</span><span class="ok" dir="ltr">${n[k]}</span></li>`).join("")}</ul>` : ""}`
        : `<p class="sub">${esc(u("recEveNone"))}</p>`}
      ${eveLink()}</section>`;
  }

  /* ---------- install, share, the edition link, new profiles ---------- */
  const SHARE_SVG = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M6 11H5v9h14v-9h-1"/></svg>';
  const IOS_SHARE = '<svg class="ios-share" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1a73e8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="share"><path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M8 10H6v10h12V10h-2"/></svg>';
  const canInstall = () => !STANDALONE() && (IOS || !!installEv);
  function installCard() {
    const itp = (IOS || MAC_SAFARI) && !STANDALONE() && hasProgress(S); // Safari clears a site's data after 7 days without a visit, unless installed
    if (!S.intro || !(canInstall() || itp)) return "";
    let later = 0; try { later = +localStorage.getItem(INSTKEY) || 0; } catch (e) {}
    if (later && Date.now() - later < (itp ? 7 : 14) * 864e5) return "";
    if (itp) return `<section class="sec card inst itp"><div class="inst-h"><img src="assets/icon-192.png" alt="" width="44" height="44"><div><h2 class="h">${esc(u(MAC_SAFARI ? "itpTMac" : "itpT"))}</h2><p class="sub">${esc(u(MAC_SAFARI ? "itpSubMac" : "itpSub"))}</p></div></div>
      <div class="row">${MAC_SAFARI ? `<button class="btn" type="button" data-act="bkexport">${esc(u("bkExport"))}</button>` : `<button class="btn" type="button" data-act="ioshow">${esc(u("instHow"))}</button>`}
      <button class="btn ghost" type="button" data-act="instlater">${esc(u("instLater"))}</button></div></section>`;
    return `<section class="sec card inst"><div class="inst-h"><img src="assets/icon-192.png" alt="" width="44" height="44"><div><h2 class="h">${esc(u("instT"))}</h2><p class="sub">${esc(u("instSub"))}</p></div></div>
      <div class="row">${installEv ? `<button class="btn" type="button" data-act="install">${esc(u("instNow"))}</button>` : `<button class="btn" type="button" data-act="ioshow">${esc(u("instHow"))}</button>`}
      <button class="btn ghost" type="button" data-act="instlater">${esc(u("instLater"))}</button></div></section>`;
  }
  // a backup reminder: progress, and 14 days since the last backup (or since the first activity, when there is none)
  function bkCard() {
    if (!S.intro || !hasProgress(S) || ((IOS || MAC_SAFARI) && !STANDALONE())) return ""; // Safari's card above already says it
    let at = 0, later = 0; try { at = +localStorage.getItem(BKKEY) || 0; later = +localStorage.getItem(BKLATER) || 0; } catch (e) {}
    const first = (S.ev || []).reduce((m, e) => (e && e.t && e.t < m ? e.t : m), Date.now()), since = at || first, now = Date.now();
    if (now - since < 14 * 864e5 || (later && now - later < 14 * 864e5)) return "";
    return `<section class="sec card bkcard"><h2 class="h">${esc(u("bkRemT"))}</h2><p class="sub">${esc(u(at ? "bkRemSub" : "bkRemNever"))}</p>
      <div class="row"><button class="btn" type="button" data-act="bkexport">${esc(u("bkExport"))}</button><button class="btn ghost" type="button" data-act="bklater">${esc(u("instLater"))}</button></div></section>`;
  }
  function iosSteps() {
    return `<ol class="ios-steps"><li>${esc(u("ios1")).replace("{i}", IOS_SHARE)}</li><li>${esc(u("ios2"))}</li><li>${esc(u("ios3"))}</li></ol>
      <p class="sub">${esc(u("iosNote"))}</p><p class="sub">${esc(u("iosOther"))}</p>`;
  }
  function iosSheet() {
    openSheet(`<h2 class="h">${esc(u("iosT"))}</h2>${iosSteps()}<button class="btn block ghost" data-act="close">${esc(u("close"))}</button>`, { kind: "ios" });
  }
  function installBlock() {
    if (STANDALONE()) return `<p class="sub" style="margin:0">${esc(u("instDone"))}</p>`;
    if (installEv) return `<button class="btn block" data-act="install">${esc(u("pwaInstall"))}</button>`;
    if (IOS) return `<button class="btn block ghost" data-act="ioshow">${esc(u("iosT"))}</button>`;
    return `<p class="sub" style="margin:0">${esc(u("deskHow"))}</p><p class="sub" style="margin:6px 0 0"><button class="linkbtn" data-act="ioshow">${esc(u("iosT"))}</button></p>`;
  }
  // the app's public base: on the public site (tazkiya.family, its www, or the former tazkiya.pages.dev and its per-deploy hosts)
  // the public address; elsewhere (a local copy) where it is served from
  const appBase = () => /(^|\.)tazkiya\.(family|pages\.dev)$/.test(location.hostname) ? CANON : location.origin + location.pathname.replace(/[^/]*$/, "").replace(/adult\/$/, "");
  const shareUrl = ed => appBase() + (ed === "adult" ? "adult/" : "");
  async function shareApp(ed) {
    const data = { title: u("brand"), text: u(ed === "adult" ? "shareTextA" : "shareText"), url: shareUrl(ed) };
    try { if (navigator.share && (!navigator.canShare || navigator.canShare(data))) { await navigator.share(data); return; } }
    catch (e) { if (e && e.name === "AbortError") return; }
    shareSheet();
  }
  async function copyText(s) {
    try { await navigator.clipboard.writeText(s); return true; } catch (e) {}
    try { const ta = document.createElement("textarea"); ta.value = s; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); const ok = document.execCommand("copy"); ta.remove(); return ok; } catch (e) { return false; }
  }
  function shareSheet() {
    const row = (ed, k) => `<div class="sharerow"><p class="sharek">${esc(u(k))}</p><input class="shareurl" type="text" readonly value="${esc(shareUrl(ed))}" aria-label="${esc(u(k))}" dir="ltr">
      <div class="row">${navigator.share ? `<button class="btn" data-act="sharego" data-e="${ed}">${esc(u("shareSend"))}</button>` : ""}<button class="btn ghost" data-act="sharecopy" data-e="${ed}">${esc(u("shareCopy"))}</button></div>
      <figure class="qr"><img src="assets/qr-${ed}.svg" width="132" height="132" alt="${esc(fmt(U.shareQrAlt, { v: shareUrl(ed) }))}"><figcaption>${esc(u("shareQr"))}</figcaption></figure></div>`;
    const mine = ADU() ? "adult" : "kids";
    openSheet(`<h2 class="h">${esc(u("shareT"))}</h2><p class="sub">${esc(u("shareSub"))}</p>
      ${row(mine, mine === "adult" ? "shareAdult" : "shareKids")}${row(mine === "adult" ? "kids" : "adult", mine === "adult" ? "shareKids" : "shareAdult")}
      ${parentsLink()}`, { kind: "share" });
  }
  // the short page for parents (what it is, privacy, install, backup): a static page beside the app
  const parentsLink = () => `<a class="card next parents-link" href="parents/${L() === "en" ? "#en" : ""}" target="_blank" rel="noopener"><span class="tx"><b>${esc(u("parT"))}</b><span class="m">${esc(u("parSub"))}</span></span><span class="arrow">→</span></a>`;
  // B2: a file goes through the share sheet where files can be shared (iPhone, iPad: "Save to Files", or send it to a parent),
  // else as a download. true when it was handed over; false when the person closed the share sheet
  async function saveFile(blob, name, title) {
    const file = (() => { try { return new File([blob], name, { type: blob.type }); } catch (e) { return null; } })();
    try { if (file && navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title }); return true; } }
    catch (e) { if (e && e.name === "AbortError") return false; }
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500); return true;
  }
  // a link to the other edition on a profile already in use: ask, never convert silently
  function edLinkSheet(ep) {
    const p = profPhrase(P.active, S), A = ep === "adult", full = P.list.length >= PMAX, conv = !hasProgress(S);
    openSheet(`<h2 class="h">${esc(u(A ? "linkAdultT" : "linkKidsT"))}</h2><p class="short">${esc(fmt(U[A ? "linkAdultB" : "linkKidsB"], { p }))}</p>
      ${full ? `<p class="sub">${esc(u("linkFull"))}</p><button class="btn block" data-act="settings">${esc(u("linkOpenSet"))}</button>`
        : `<button class="btn block" data-act="edlinknew" data-e="${ep}">${esc(u(A ? "linkNewA" : "linkNewK"))}</button>`}
      ${conv ? `<button class="btn block ghost" style="margin-top:8px" data-act="edlinkconv" data-e="${ep}">${esc(fmt(U[A ? "linkConvA" : "linkConvK"], { p }))}</button>` : ""}
      <button class="btn block ghost" style="margin-top:8px" data-act="close">${esc(fmt(U.linkStay, { p }))}</button>`, { kind: "edlink", ep });
  }
  function ageSheet() {
    const g0 = GRP(S);
    openSheet(`<h2 class="h">${esc(u("agT"))}</h2><p class="short">${esc(u("agNote"))}</p>
      <div class="maps edpick">${GRPS.map(g => `<button class="mapopt ${g === g0 ? "on" : ""}" data-act="setgrp" data-g="${g}" aria-pressed="${g === g0}"><b>${esc(u(GRPK[g]))}</b><span>${esc(u(GRPK[g] + "D"))}</span></button>`).join("")}</div>
      ${P.list.length > 1 ? `<p class="sub" style="margin:14px 0 0">${esc(profPhrase(P.active, S))} · <button class="linkbtn" data-act="settings">${esc(u("famOpen"))}</button></p>` : ""}`, { kind: "age" });
  }
  function fxBlock() {
    const X = window.TZFX; if (!X || (!X.hasAudio() && !X.canHaptic())) return "";
    const p = X.prefs(), K = t => `<p class="fxk">${esc(u(t))}</p>`;
    const onoff = k => `<div class="seg3" role="group">${[[true, "fxOn"], [false, "fxOffL"]].map(([v, l]) => `<button class="tog ${p[k] === v ? "on" : ""}" data-act="fxset" data-k="${k}" data-v="${v ? 1 : 0}" aria-pressed="${p[k] === v}">${esc(u(l))}</button>`).join("")}</div>`;
    return `<p style="margin:14px 0 6px;font-weight:600;font-size:14px">${esc(u("fxT"))}</p><div class="fxbox">
      ${X.hasAudio() ? `${K("fxSnd")}${onoff("snd")}${K("fxAmb")}
      <div class="seg3 seg4" role="group">${[["off", "fxOff"], ["wind", "fxWind"], ["stream", "fxStream"], ["rain", "fxRain"]].map(([v, l]) => `<button class="tog ${p.amb === v ? "on" : ""}" data-act="fxset" data-k="amb" data-v="${v}" aria-pressed="${p.amb === v}">${esc(u(l))}</button>`).join("")}</div>
      <label class="fxk fxvol">${esc(u("fxVol"))} <input id="fxVol" type="range" min="0" max="100" step="5" value="${p.vol}"></label>` : ""}
      ${X.canHaptic() ? `${K("fxHap")}${onoff("hap")}` : ""}
      <p class="sub" style="margin:8px 0 0">${esc(u("fxNote"))}</p>${IOS && X.hasAudio() ? `<p class="sub fxios" style="margin:6px 0 0">${esc(u("fxIos"))}</p>` : ""}</div>`;
  }
  // re-open the settings sheet in place (keeps its scroll position)
  function settingsAgain() { const y = sheet.scrollTop; settingsSheet(); sheet.scrollTop = y; }
  function profAddSheet() {
    openSheet(`<h2 class="h">${esc(u("addT"))}</h2><p class="short">${esc(u("addB"))}</p>
      <div class="maps edpick">${GRPS.map(g => `<button class="mapopt" data-act="profadded" data-g="${g}"><b>${esc(u(GRPK[g]))}</b><span>${esc(u(GRPK[g] + "D"))}</span></button>`).join("")}</div>`, { kind: "profadd" });
  }
  // a new profile of the given edition; it starts with that edition's short onboarding
  function newProfile(ed, age) {
    if (P.list.length >= PMAX) return;
    let n = 2; while (P.list.includes("p" + n)) n++;
    const id = "p" + n, st = Object.assign(fresh(), { lang: S.lang, map: S.map, edition: ed, age: age || "" });
    P.list.push(id); saveProfiles();
    try { localStorage.setItem(keyOf(id), JSON.stringify(st)); } catch (e) { storeFail(e); } MEM[id] = st;
    introIx = 0; sheetState = null; closeSheet();
    switchProfile(id, () => introSheet());
  }
  function vHome() {
    if (TOUR) return vTour();
    const anon = ADU() && !(S.name || "").trim();
    return `<section class="hello"><h1 class="h">${esc(u(anon ? (WELCOME_BACK ? "welcomeBackA" : "helloA") : (WELCOME_BACK ? "welcomeBack" : "hello")))}</h1><p>${esc(u("helloSub"))}</p></section>
      ${homeHands()}
      <p class="principle">${esc(u("principle"))}</p>
      <div class="wrap">
        ${eveCard()}
        <p class="sub center" style="margin:18px 0 6px">${esc(u("meSub"))}</p>
        <div class="mix memix" aria-hidden="true">${ORDER.map(k => `<i style="flex-basis:${S.mix[k]}%;background:${MC(k)}"></i>`).join("")}</div>
        <div class="legend melegend">${ORDER.map(k => `<a href="#/tasks/${k}"><i style="background:${MC(k)}"></i><em>${esc(nm(k))}</em><b>${S.mix[k]}%</b></a>`).join("")}</div>
        ${presenceBlock()}
        ${pactCard()}
        ${sawBlock()}
        ${khBlock()}
        ${installCard()}
        ${bkCard()}
        ${dashBlock()}
        ${badgeBlock()}
        <section class="sec"><h2 class="h">${esc(u("perFinger"))}</h2><div class="pf">${ORDER.slice().reverse().map(id => { const st = C.stages[id];
          const r = st.readings.filter(x => S.read[x.id]).length, q = st.quiz.filter(x => S.answered[x.id] !== undefined).length, tk = st.tasks.filter(x => S.tasks[x.id] === "ok").length;
          const tot = st.readings.length + st.quiz.length + st.tasks.length, done = r + q + tk;
          return `<a class="pfrow" href="#/tasks/${id}"><span class="pfn"><b style="color:${darker(id)}">${esc(nm(id))}</b></span>
            <span class="pfbar"><i style="width:${tot ? done / tot * 100 : 0}%;background:${MC(id)}"></i></span>
            <span class="m pfc"><bdi>${r}/${st.readings.length}</bdi> ${esc(u("rShort"))} · <bdi>${q}/${st.quiz.length}</bdi> ${esc(u("qShort"))} · <bdi>${tk}/${st.tasks.length}</bdi> ${esc(u("tShort"))}</span></a>`; }).join("")}</div></section>
        ${eveLink()}
        <a class="card next" href="#/record" style="margin-top:14px"><span class="tx"><b>${esc(u("recOpen"))}</b><span class="m">${esc(u("recSubShort"))}</span></span><span class="arrow">→</span></a>
        ${USING_FALLBACK ? `<p class="center meta" style="margin-top:14px"><span class="ph">${esc(u("fallbackNote"))}</span></p>` : ""}
        ${P.list.length > 1 ? `<p class="center profline">${esc(profPhrase(P.active, S))} · <button class="linkbtn" type="button" data-act="settings">${esc(u("famOpen"))}</button></p>` : ""}
      </div>`;
  }
  function agesHtml(a) { const l = agesLabel(a); return /\d/.test(l) ? `<bdi dir="ltr">${esc(l)}</bdi>` : `<bdi>${esc(l)}</bdi>`; }
  function agesLabel(a) { return a === "all" || !a ? u("agesAll") : a; }
  function vStage(id) {
    const st = C.stages[id]; if (!st) return vMissing();
    const f = fing(id);
    let h = `<div class="stage-top"><div class="st-back"><a class="back" href="#/">${BK()} ${esc(u("back"))}</a></div>
      <div class="stage-hero">${hand({ chips: false, focus: id, interactive: false })}</div>
      <div class="stage-title">${symImg(id, "st-sym")}<div class="finger">${esc(f)}</div>
        <h1 class="h" style="color:${darker(id)}">${esc(nm(id))}</h1>
        <p style="margin:4px 0 0">${esc(t(st.short))}</p>
        <div class="mix" aria-hidden="true">${ORDER.map(k => `<i style="flex-basis:${S.mix[k]}%;background:${G[k].color};opacity:${k === id ? 1 : .28}"></i>`).join("")}</div>
        <div class="meta" style="color:var(--muted);font-size:13px">${esc(u("yourShare"))}: <b dir="ltr">${S.mix[id]}%</b></div>
        ${stepStrip(id, true)}</div></div>
      <div class="wrap">
      <section class="sec" id="sec-learn"><h2 class="h">${esc(u("secLearn"))}</h2><p class="sub">${esc(u("degNote"))}</p>${degList(id, -1)}
        ${st.climb.length ? `<h3 class="h tr-h">${esc(u("climb"))}</h3><ul class="list">${st.climb.map(c => `<li><span class="bullet" style="background:var(--viridian)"></span><span class="grow">${esc(t(c))}</span></li>`).join("")}</ul>` : ""}</section>`;
    if (S.parent && st.parent) h += `<section class="sec">${parentBlock(id, true)}</section>`;
    const row = r => `<a class="reading" href="#/read/${id}/${encodeURIComponent(r.id)}">
        <span class="tx"><b>${esc(t(r.title))}</b><span class="m">${ADU() ? (r.minutes ? r.minutes + " " + esc(u("minutes")) : "") : `${r.minutes ? r.minutes + " " + esc(u("minutes")) + " · " : ""}${esc(u("ages"))}: ${agesHtml(r.ages)}`}${r.quote ? `${ADU() ? "" : " · "}<span class="verify">${esc(u(isHadith(r.quote) ? "verifyHadith" : "verify"))}</span>` : ""}</span></span>
        ${S.read[r.id] ? `<span class="done-mark">✓ ${esc(u("read"))}</span>` : ""}<span class="arrow">→</span></a>`;
    const summ = st.readings.filter(r => r.summit === true), comp = st.readings.filter(r => r.companions === true && r.summit !== true);
    const norm = st.readings.filter(r => r.summit !== true && r.companions !== true);
    const tagged = (r, k) => row(r).replace('<span class="tx"><b>', `<span class="tx"><span class="rtag ${k}">${esc(u(k === "s" ? "tagSummit" : "tagComp"))}</span><b>`);
    const bks = booksFor(id);
    h += `<section class="sec" id="sec-read"><h2 class="h">${esc(u("secRead"))}</h2><p class="sub">${esc(u("readSub"))}</p>
      ${bks.length ? `<h3 class="h tr-h">${esc(u("booksH"))}</h3><div class="shelf row">${bks.map(b => bookCover(b)).join("")}</div><a class="linkbtn" href="#/library">${esc(fmt(U.allBooks, { n: BOOKS().length }))} →</a>` : ""}
      <h3 class="h tr-h">${esc(u("storiesH"))}</h3><div>${byAge(norm).map(row).join("")}</div>
      ${choicesFor(id).length ? `<h3 class="h tr-h" id="sec-choices">${esc(u("chT"))}</h3><div>${choicesFor(id).map(chRow).join("")}</div>` : ""}
      ${summ.length || comp.length ? `<div class="summit-sec"><h3 class="h tr-h">${esc(u("rolesSec"))}</h3><p class="sub">${esc(u("summitSecSub"))}</p>
      <div>${summ.map(r => tagged(r, "s")).join("")}${byAge(comp).map(r => tagged(r, "c")).join("")}</div></div>` : ""}</section>`;
    h += `
      <section class="sec" id="sec-quiz"><h2 class="h">${esc(u("stepQuiz"))}</h2>
        ${st.quiz.length ? `<p class="sub">${esc(u("quizSub"))}</p><a class="btn block" href="#/quiz/${id}">${esc(u("startQuiz"))} · ${st.quiz.length} ${esc(u("questions"))}</a>` : `<p class="sub">${esc(u("noQuiz"))}</p>`}</section>
      <a class="btn block towork work" href="#/tasks/${id}">${esc(u("toWork"))} →</a>`;
    if (id === "sabiq") h += vVirtues();
    const ix = ORDER.indexOf(id), pv = ORDER[ix - 1], nx = ORDER[ix + 1];
    h += `<nav class="snav">${pv ? `<a href="#/stage/${pv}"><span class="m">${esc(u("lower"))}</span><b>${esc(nm(pv))}</b></a>` : "<span></span>"}
      ${nx ? `<a href="#/stage/${nx}" class="up"><span class="m">${esc(u("higher"))}</span><b>${esc(nm(nx))}</b></a>` : `<a href="#/" class="up" data-act="summitgo"><span class="m">${esc(u("higher"))}</span><b>${esc(u("summitT"))}</b></a>`}</nav>`;
    return h + `</div>`;
  }
  function darker(id) { return { zombie: "#5f5f5a", pig: "#a34a22", monkey: "#82590a", human: "#17687a", sabiq: "#82590a" }[id]; }
  function vVirtues() {
    const fingers = ["little", "ring", "middle", "index", "thumb"];
    return `<section class="sec"><h2 class="h">${esc(u("rightHand"))}</h2><p class="sub">${esc(u("rightHandSub"))}</p>
      <div class="vhand"><img src="assets/right-hand-virtues.webp" alt="" loading="lazy" decoding="async"><ul class="list">${C.virtues.map((v, i) => `<li><span class="grow">
        ${C.virtues.length <= 5 ? `<span class="meta" style="color:var(--muted);font-size:12.5px">${esc(t(FINGER[fingers[i]]))}</span>` : ""}
        <a href="#/virtue/${encodeURIComponent(v.id)}" style="display:block;font-weight:600">${esc(t(v.name))}${v.reading ? " ←".replace("←", L() === "ar" ? "←" : "→") : ""}</a><span style="font-size:13.5px">${esc(t(v.desc))}</span>
        ${v.ref ? `<span class="meta" style="display:flex;gap:6px;flex-wrap:wrap;font-size:12px;color:var(--muted);margin-top:2px"><bdi>${esc(v.ref)}</bdi>${v.verify ? `<span class="verify">${esc(u("verify"))}</span>` : ""}</span>` : ""}
      </span></li>`).join("")}</ul></div></section>`;
  }
  function taskRow(id, tk) {
    const st = S.tasks[tk.id];
    let right;
    if (st === "ok") right = "";
    else if (st === "done") right = S.parent ? `<button class="small-btn dark" data-act="tconfirm" data-s="${id}" data-t="${esc(tk.id)}">${esc(u("confirm"))}</button>
        <button class="small-btn" data-act="treject" data-t="${esc(tk.id)}">${esc(u("notYet"))}</button>` : "";
    else right = `<button class="small-btn" data-act="tdid" data-s="${id}" data-t="${esc(tk.id)}">${esc(u("did"))}</button>`;
    const label = st === "ok" ? `<span class="status ok">✓ ${esc(u("confirmed"))}</span>` : st === "done" ? `<span class="status wait">${esc(u("waiting"))}</span>` : "";
    return `<div class="task"><span class="bullet" style="background:${G[id].color};margin-top:0"></span><span class="grow">${esc(t(tk))}${label}</span>${right}</div>`;
  }
  function nextReading(id, after) {
    const rs = (C.stages[id] ? C.stages[id].readings : []).filter(r => r.summit !== true && r.companions !== true);
    const from = after ? rs.findIndex(r => String(r.id) === String(after)) + 1 : 0;
    return rs.slice(from).find(r => !S.read[r.id]) || rs.find(r => !S.read[r.id]) || null;
  }
  function findReading(id, rid) { const st = C.stages[id]; return st && st.readings.find(r => String(r.id) === rid); }
  function isHadith(q) { return /hadith|حديث/i.test(String(q.checked || "") + " " + String(q.ref || "")) && !/tanzil/i.test(String(q.checked || "")); }
  function quoteBadges(q) {
    const had = isHadith(q);
    let b = `<span class="verify">${esc(u(had ? "verifyHadith" : "verify"))}</span>`;
    if (q.checked) b += `<span class="checked">✓ ${esc(u(/tanzil/i.test(q.checked) ? "checkedQuran" : "checkedHadith"))}</span>`;
    return b;
  }
  function vSources() {
    let nQ = 0, nH = 0, nC = 0, nV = 0;
    const item = (q, title, href, src) => {
      const had = isHadith(q); had ? nH++ : nQ++; if (q.checked) nC++; if (q.verify) nV++;
      return `<li class="src"><div class="src-q ${had ? "had" : "quran"}" lang="ar" dir="rtl">${esc(q.ar || "")}</div>
        ${L() === "en" && q.en ? `<p class="src-en">${esc(q.en)}</p>` : ""}
        <div class="src-meta"><bdi class="src-ref">${esc(q.ref || "")}</bdi>${quoteBadges(q)}${q.verify ? `<span class="pend">${esc(u("srcPending"))}</span>` : ""}</div>
        ${src ? `<p class="src-note">${esc(src)}</p>` : ""}
        <a class="src-link" href="${href}">${esc(title)} ${L() === "ar" ? "←" : "→"}</a></li>`;
    };
    let body = ORDER.map(id => {
      const rs = C.stages[id].readings.filter(r => r.quote && (r.quote.ar || r.quote.ref));
      if (!rs.length) return "";
      return `<section class="sec"><h2 class="h" style="color:${darker(id)}">${esc(fing(id))} · ${esc(nm(id))}</h2><ul class="srcs">${rs.map(r => item(r.quote, t(r.title), `#/read/${id}/${encodeURIComponent(r.id)}`, r.source ? t(r.source) : "")).join("")}</ul></section>`;
    }).join("");
    const vs = C.virtues.filter(v => v.ref);
    if (vs.length) body += `<section class="sec"><h2 class="h" style="color:#a8770f">${esc(u("rightT"))}</h2><ul class="srcs">${vs.map(v => {
      nQ++; if (v.verify) nV++;
      return `<li class="src"><div class="src-meta"><b>${esc(t(v.name))}</b> · <bdi class="src-ref">${esc(v.ref)}</bdi><span class="verify">${esc(u("verify"))}</span>${v.verify ? `<span class="pend">${esc(u("srcPending"))}</span>` : ""}</div>
        ${v.reading ? `<a class="src-link" href="#/virtue/${encodeURIComponent(v.id)}">${esc(u("readVirtue"))} ${L() === "ar" ? "←" : "→"}</a>` : ""}</li>`; }).join("")}</ul></section>`;
    return `<div class="wrap"><h1 class="h" style="font-size:30px;margin:6px 0 2px">${esc(u("srcT"))}</h1>
      <p class="sub">${esc(u("srcSub"))}</p>
      <div class="src-sum"><span><b>${nQ}</b> ${esc(u("srcQuran"))}</span><span><b>${nH}</b> ${esc(u("srcHadith"))}</span><span><b>${nC}</b> ${esc(u("srcChecked"))}</span><span><b>${nV}</b> ${esc(u("srcPendingN"))}</span></div>
      ${body}</div>`;
  }
  function askQ(id, r) { const q = C.stages[id].quiz.find(x => x.readingId === r.id); return q ? q.q : null; }
  let aloudOn = false, aloudIx = 0, speaking = false, aloudAuto = null;
  const hasTTS = () => { try { return "speechSynthesis" in window && typeof SpeechSynthesisUtterance === "function"; } catch (e) { return false; } };
  function ttsVoice() {
    if (!hasTTS()) return null;
    const want = L() === "ar" ? "ar" : "en", vs = speechSynthesis.getVoices() || [];
    return vs.find(v => (v.lang || "").toLowerCase().startsWith(want)) || null;
  }
  function ttsBtn() {
    if (!ttsVoice()) return "";
    return `<button data-act="tts" class="${speaking ? "on" : ""}" aria-pressed="${speaking}" aria-label="${esc(u(speaking ? "ttsStop" : "ttsPlay"))}" title="${esc(u(speaking ? "ttsStop" : "ttsPlay"))}">${speaking ? "■" : "🔊"}</button>`;
  }
  function ttsStop() { try { if (hasTTS()) speechSynthesis.cancel(); } catch (e) {} speaking = false; }
  function ttsToggle() {
    if (speaking) { ttsStop(); render(true); return; }
    const v = ttsVoice(); if (!v) return;
    const parts = [...view.querySelectorAll(".article h1, .article .body p, .aloud-page p, .article .ask p")].map(e => e.textContent.trim()).filter(Boolean);
    if (!parts.length) return;
    try {
      speechSynthesis.cancel();
      const ut = new SpeechSynthesisUtterance(parts.join(". "));
      ut.voice = v; ut.lang = v.lang || (L() === "ar" ? "ar-SA" : "en-US"); ut.rate = L() === "ar" ? .9 : .95;
      ut.onend = ut.onerror = () => { speaking = false; render(true); };
      speaking = true; speechSynthesis.speak(ut); render(true);
    } catch (e) { speaking = false; }
  }
  if (hasTTS()) { try { speechSynthesis.addEventListener("voiceschanged", () => { const n = route().name; if (["read", "virtue", "chapter", "deg"].includes(n)) render(true); }); } catch (e) {} }
  /* reading sessions: visible seconds are counted; a reading is recorded once its end has been reached
     and the time spent is at least words / 4 seconds (faster than 240 words a minute is skimming) */
  let RS = null;
  const wordsOf = arr => [].concat(arr || []).join(" ").split(/\s+/).filter(Boolean).length;
  const minRead = w => Math.max(6, Math.round(w / 4));
  function readSess(key, body) { if (!RS || RS.key !== key) RS = { key, words: wordsOf(body), secs: 0, end: false, done: false }; return RS; }
  const readStat = rs => `<p class="readstat ${rs.done ? "ok" : ""}" id="readStat">${esc(u(rs.done ? "readOk" : "readWait"))}</p>`;
  function readKey() { const r = route(); return r.name === "read" ? "r:" + r.rid : r.name === "chapter" ? (() => { const b = bookOf(r.id); return b ? "c:" + chKey(b, Math.max(1, Math.min(+r.n || 1, b.chapters.length))) : null; })() : null; }
  function creditRead() {
    RS.done = true; const k = RS.key.slice(0, 1), id = RS.key.slice(2); S.readSecs = S.readSecs || {};
    if (k === "r") { if (!S.read[id]) { S.read[id] = Date.now(); S.readSecs[id] = RS.secs; ev({ k: "read" }); } }
    else { S.bookRead = S.bookRead || {}; if (!S.bookRead[id]) { S.bookRead[id] = Date.now(); S.readSecs["c:" + id] = RS.secs; ev({ k: "read" }); } }
    save(); const el = document.getElementById("readStat"); if (el) { el.textContent = u("readOk"); el.classList.add("ok"); }
    const nx = document.getElementById("nextCh"); if (nx) { nx.removeAttribute("aria-disabled"); nx.removeAttribute("tabindex"); } FX("read"); toast(u("readSaved"));
  }
  setInterval(() => {
    if (!RS || RS.done || document.visibilityState !== "visible" || readKey() !== RS.key) return;
    RS.secs++;
    if (!RS.end) { const e = view.querySelector(".read-end"); if (e && e.getBoundingClientRect().top < window.innerHeight) RS.end = true; }
    if (RS.end && RS.secs >= minRead(RS.words)) creditRead();
  }, 1000);
  function dataBlock(noRec) {
    let at = 0; try { at = +localStorage.getItem(BKKEY) || 0; } catch (e) {}
    return `<p style="margin:16px 0 6px;font-weight:600;font-size:14px">${esc(u("bkT"))}</p>
      <p class="sub" style="margin:0 0 6px">${esc(u(PERSIST || STANDALONE() ? "bkPersistOk" : "bkPersistNo"))}</p>
      <p class="sub" style="margin:0 0 8px">${esc(at ? fmt(U.bkLast, { d: fmtDate(at) }) : u("bkNever"))}</p>
      <div class="bkrow"><button class="btn ghost" data-act="bkexport">${esc(u("bkExport"))}</button><button class="btn ghost" data-act="bkimport">${esc(u("bkImport"))}</button></div>
      <input type="file" id="bkFile" accept=".json,application/json" hidden>
      ${noRec ? "" : `<a class="card next" href="#/record" data-act="go" style="margin-top:10px"><span class="tx"><b>${esc(u("recT"))}</b><span class="m">${esc(u("recSubShort"))}</span></span><span class="arrow">→</span></a>`}`;
  }
  // the backup payload: every profile, the family record and the sound preferences (also what the move to the new address carries)
  function backupData() {
    save(); const states = {}; P.list.forEach(id => { states[id] = id === P.active ? S : loadOf(id); });
    const fx = window.TZFX && window.TZFX.prefs ? window.TZFX.prefs() : null;
    return Object.assign({ app: "tazkiya", v: 1, at: new Date().toISOString(), profiles: P, states, family: F }, fx ? { fx } : {});
  }
  const FXKEY = "tazkiya-fx";
  function cleanFx(o) {
    if (!isObj(o)) return null; const r = {};
    if (typeof o.snd === "boolean") r.snd = o.snd; if (typeof o.hap === "boolean") r.hap = o.hap;
    if (["off", "wind", "stream", "rain"].includes(o.amb)) r.amb = o.amb; if (num(o.vol, 0, 100) !== undefined) r.vol = Math.round(num(o.vol, 0, 100));
    return Object.keys(r).length ? r : null;
  }
  function exportData() {
    const data = backupData();
    return saveFile(new Blob([JSON.stringify(data)], { type: "application/json" }), "tazkiya-backup-" + today() + ".json", u("bkFileT")).then(ok => {
      if (!ok) return false;
      try { localStorage.setItem(BKKEY, String(Date.now())); } catch (e) {} toast(u("bkSaved"));
      if (sheetState && sheetState.kind === "settings") settingsAgain(); else if (route().name === "home" && sheet.hidden) render(true);
      return true;
    });
  }
  let pendingImport = null;
  // a backup is read as data only: size and type are checked first, then every profile and state is rebuilt
  // through cleanProfiles/cleanState, so only known fields with sane values can ever be restored
  const BK_MAX = 5 * 1024 * 1024;
  function parseBackup(text) {
    let d = null; try { d = JSON.parse(text); } catch (e) { return null; }
    if (!isObj(d) || d.app !== "tazkiya" || !isObj(d.states)) return null;
    const prof = cleanProfiles(d.profiles); if (!prof) return null;
    const states = {};
    for (const id of prof.list) { const st = cleanState(d.states[id]); if (!st) return null; states[id] = st; }
    const at = typeof d.at === "string" && !isNaN(Date.parse(d.at)) ? Date.parse(d.at) : 0;
    return { profiles: prof, states, at, family: d.family !== undefined ? cleanFamily(d.family) : null, fx: cleanFx(d.fx) };
  }
  function importFile(f) {
    if (!f) return;
    if (f.size > BK_MAX) { toast(u("bkBig")); return; }
    if (f.type && !/json|text\/plain|octet-stream/i.test(f.type)) { toast(u("bkBad")); return; }
    const rd = new FileReader();
    rd.onload = () => {
      const d = parseBackup(String(rd.result || ""));
      if (!d) { toast(u("bkBad")); return; }
      bkAskSheet(d); };
    rd.onerror = () => toast(u("bkBad"));
    rd.readAsText(f);
  }
  // all or nothing: if the device refuses part of the write, the previous data is put back
  function bkAskSheet(d, moved) {
    pendingImport = d;
    const names = d.profiles.list.map(id => nameOf(id, d.states[id])).join("، ");
    const here = P.list.some(id => hasProgress(id === P.active ? S : loadOf(id)));
    openSheet(`<h2 class="h">${esc(u(moved ? "moveInT" : "bkImport"))}</h2><p class="short">${esc(u(moved ? (here ? "moveInOver" : "moveInAsk") : "bkAsk"))}</p><p class="sub bk-who">${esc(d.at ? fmtDate(d.at) : "")}${d.at ? " · " : ""}${esc(fmt(U.bkProf, { n: d.profiles.list.length }))}: <bdi>${esc(names)}</bdi></p>
      <button class="btn block" data-act="bkyes">${esc(u(moved ? "moveInYes" : "bkYes"))}</button><button class="btn block ghost" style="margin-top:8px" data-act="close">${esc(u("close"))}</button>`, { kind: "bk" });
  }

  /* ---------- the move from tazkiya.pages.dev to tazkiya.family (23 Nov 2026) ----------
     Each address keeps its own storage. On the former address (boot.js found progress) a sheet carries everything over
     inside the URL fragment, which browsers never send to a server: the backup payload as JSON, gzip-compressed where
     CompressionStream exists, base64url, "#move=z.…" or "#move=j.…". The new address decodes it under the same limits
     and checks as a backup file (size, parseBackup, cleanState, cleanProfiles), shows the names and date, and asks. */
  const MOVE_MAX = 1500000, NEW_SITE = "https://tazkiya.family/";
  const b64u = bytes => { let s = ""; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); };
  const unb64u = s => { const b = atob(s.replace(/-/g, "+").replace(/_/g, "/")); const o = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) o[i] = b.charCodeAt(i); return o; };
  async function readLimited(stream, max) {
    const r = stream.getReader(), parts = []; let n = 0;
    for (;;) { const { done, value } = await r.read(); if (done) break; n += value.length; if (n > max) { try { r.cancel(); } catch (e) {} throw new Error("too big"); } parts.push(value); }
    const out = new Uint8Array(n); let o = 0; parts.forEach(p => { out.set(p, o); o += p.length; }); return out;
  }
  async function moveEncode(json) {
    const raw = new TextEncoder().encode(json);
    if (window.CompressionStream) { try { return "z." + b64u(await readLimited(new Blob([raw]).stream().pipeThrough(new CompressionStream("gzip")), MOVE_MAX)); } catch (e) {} }
    return "j." + b64u(raw);
  }
  async function moveDecode(s) {
    if (typeof s !== "string" || s.length > MOVE_MAX || !/^[jz]\.[A-Za-z0-9_-]+$/.test(s)) return null;
    let bytes; try { bytes = unb64u(s.slice(2)); } catch (e) { return null; }
    try {
      if (s[0] === "z") { if (!window.DecompressionStream) return null; bytes = await readLimited(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip")), BK_MAX); }
      else if (bytes.length > BK_MAX) return null;
      return parseBackup(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
    } catch (e) { return null; }
  }
  async function moveIn(s) {
    const d = await moveDecode(s);
    if (!d) { toast(u("moveBad"), 7000); return; }
    bkAskSheet(d, true);
  }
  function moveSheet(big) {
    const other = k => (U[k] || [])[L() === "ar" ? 1 : 0] || "";
    openSheet(`<div class="move"><img src="assets/icon-192.png" alt="" width="64" height="64">
      <h2 class="h">${esc(u("moveT"))}</h2><p class="sub move-alt" lang="${L() === "ar" ? "en" : "ar"}" dir="${L() === "ar" ? "ltr" : "rtl"}">${esc(other("moveT"))}</p>
      ${big ? `<p class="short">${esc(u("moveBig"))}</p><button class="btn block" data-act="bkexport">${esc(u("bkExport"))}</button>
        <a class="btn block ghost" style="margin-top:8px" href="${NEW_SITE}?restore=1#/">${esc(u("moveOpen"))}</a>`
        : `<p class="short">${esc(u("moveB"))}</p><button class="btn block" data-act="movego">${esc(u("moveGo"))}</button>`}</div>`, { kind: "move", big: !!big });
    sheet.classList.add("tall", "movefull");
  }
  async function moveGo() {
    const enc = await moveEncode(JSON.stringify(backupData()));
    if (enc.length > MOVE_MAX) { moveSheet(true); return; }
    FX("ok"); location.href = NEW_SITE + "#move=" + enc;
  }

  function restoreBackup(d) {
    const keys = [PKEY, FKEY, FXKEY].concat([...new Set(P.list.concat(d.profiles.list))].map(keyOf)), prev = {};
    try { keys.forEach(k => { prev[k] = localStorage.getItem(k); }); } catch (e) { return false; }
    try {
      P.list.filter(id => !d.profiles.list.includes(id)).forEach(id => localStorage.removeItem(keyOf(id)));
      d.profiles.list.forEach(id => localStorage.setItem(keyOf(id), JSON.stringify(Object.assign(fresh(), d.states[id]))));
      localStorage.setItem(PKEY, JSON.stringify(d.profiles));
      if (d.family) localStorage.setItem(FKEY, JSON.stringify(d.family));
      if (d.fx) localStorage.setItem(FXKEY, JSON.stringify(Object.assign(window.TZFX && window.TZFX.prefs ? window.TZFX.prefs() : {}, d.fx)));
      return true;
    } catch (e) {
      try { keys.forEach(k => { if (prev[k] == null) localStorage.removeItem(k); else localStorage.setItem(k, prev[k]); }); } catch (x) {}
      return false;
    }
  }
  document.addEventListener("change", e => { if (e.target && e.target.id === "bkFile") { importFile(e.target.files && e.target.files[0]); e.target.value = ""; } });
  function vReader(id, rid) {
    const r = findReading(id, rid); if (!r) return vMissing();
    const body = (r.body && t(r.body)) || [];
    const rs = readSess("r:" + r.id, body); if (S.read[r.id]) rs.done = true;
    const q = r.quote, hasQ = C.stages[id].quiz.some(x => x.readingId === r.id);
    const young = r.ages === "4-8" || r.picture === true;
    if (young && aloudAuto !== r.id) { aloudAuto = r.id; aloudOn = true; aloudIx = 0; }
    if (young && aloudOn && body.length) {
      aloudIx = Math.max(0, Math.min(aloudIx, body.length - 1)); if (aloudIx === body.length - 1) rs.end = true;
      return `<div class="wrap article aloud${aloudIx === body.length - 1 ? " last" : ""}" style="--fs:${Math.max(S.fs, 24)}px">
        <div class="reader-bar"><a class="back" href="#/stage/${id}">${BK()} ${esc(nm(id))}</a><span class="fsz">${ttsBtn()}<button class="small-btn" data-act="aloud" style="width:auto;border-radius:99px;padding:6px 12px">${esc(u("aloudExit"))}</button></span></div>
        <h1 class="h">${esc(t(r.title))}</h1>
        <div class="aloud-page"><p>${esc(body[aloudIx])}</p></div>
        ${pager(body.length)}
        ${aloudIx === body.length - 1 ? readStat(rs) : ""}
        ${aloudIx === body.length - 1 && (r.ask || askQ(id, r)) ? `<div class="card ask"><b>${esc(u("askChild"))}</b><p>${esc(t(r.ask || askQ(id, r)))}</p></div>` : ""}
        ${aloudIx === body.length - 1 && hasQ ? `<a class="btn block" style="margin-top:18px" href="#/quiz/${id}/${encodeURIComponent(r.id)}">${esc(u("toQuiz"))}</a>` : ""}</div>`;
    }
    return `<div class="wrap article${r.summit === true ? " summit-read" : ""}" style="--fs:${S.fs}px">
      <div class="reader-bar"><a class="back" href="#/stage/${id}">${BK()} ${esc(nm(id))}</a>
        <div class="fsz" role="group" aria-label="${esc(u("textSize"))}">${ttsBtn()}<button data-act="fs" data-d="-2" aria-label="A−">A−</button><button data-act="fs" data-d="2" aria-label="A+">A+</button></div></div>
      <h1 class="h">${esc(t(r.title))}</h1>
      <div class="meta"><span>${r.minutes ? r.minutes + " " + esc(u("minutes")) : ""}</span>${ADU() ? "" : `<span>${esc(u("ages"))}: ${agesHtml(r.ages)}</span>`}${young ? `<button class="small-btn" data-act="aloud">${esc(u("aloud"))}</button>` : ""}</div>
      <div class="body">${body.map(p => `<p>${esc(p)}</p>`).join("")}</div>
      ${q ? `<figure class="quote" style="margin-inline:0">${q.ar ? `<p class="qar" lang="ar">${esc(q.ar)}</p>` : ""}${L() === "en" && q.en ? `<p class="qen" lang="en">${esc(q.en)}</p>` : ""}
        <figcaption class="ref">${q.ref ? `<bdi>${esc(q.ref)}</bdi>` : ""}${quoteBadges(q)}<a class="src-mini" href="#/sources">${esc(u("srcLink"))}</a></figcaption></figure>` : ""}
      ${r.source ? `<p class="source">${esc(t(r.source))}</p>` : ""}
      <div class="read-end"></div>${readStat(rs)}
      ${hasQ ? `<a class="btn block" style="margin-top:12px" href="#/quiz/${id}/${encodeURIComponent(r.id)}">${esc(u("toQuiz"))}</a>` : ""}
      ${(() => { const rs = C.stages[id].readings, k = rs.indexOf(r), n = rs[k + 1]; return n ? `<a class="card next" href="#/read/${id}/${encodeURIComponent(n.id)}"><span class="tx"><span class="m">${esc(u("nextReading"))}</span><b>${esc(t(n.title))}</b></span><span class="arrow">→</span></a>` : ""; })()}
    </div>`;
  }
  /* ---------- library: one bound book per finger, read chapter by chapter ---------- */
  const VG = "assets/vignettes/";
  const ART = { sym: {}, book: {} };
  ["zombie", "pig", "monkey", "human", "sabiq"].forEach(k => { ART.sym[k] = VG + "sym-" + k + ".webp?v=" + (k === "pig" ? 6 : 5); ART.book["book-" + k] = VG + "book-" + k + ".webp?v=5"; ART.book["book-" + k + "-2"] = VG + "book-" + k + "-2.webp?v=5"; });
  const symImg = (id, cls) => ART.sym[id] ? `<img class="${cls}" src="${ART.sym[id]}" alt="" aria-hidden="true" decoding="async" loading="lazy">` : "";
  const bookOf = id => C.books.find(b => b.id === id);
  const chKey = (b, n) => b.id + "#" + n;
  const chRead = (b, n) => !!(S.bookRead && S.bookRead[chKey(b, n)]);
  const chOpen = (b, n) => n <= 1 || chRead(b, n) || chRead(b, n - 1);
  function bookProgress(b) { const done = b.chapters.filter((c, i) => S.bookRead && S.bookRead[chKey(b, i + 1)]).length; return { done, all: b.chapters.length }; }
  function bookArt(b, cls) { const src = ART.book[b.id] || (b.picture ? ART.sym[b.stage] : ART.book["book-" + b.stage]) || ART.sym[b.stage]; return src ? `<img class="${cls}" src="${src}" alt="" loading="lazy" decoding="async">` : ""; }
  function bookCover(b, big) {
    const st = C.stages[b.stage], col = st ? G[b.stage].color : "#e6af3f", pr = bookProgress(b);
    return `<a class="book ${big ? "big" : ""}" href="#/book/${encodeURIComponent(b.id)}" style="--c:${col}">
      <span class="spine" aria-hidden="true"></span>
      <span class="cover"><span class="b-top">${st ? esc(fing(b.stage)) + " · " + esc(nm(b.stage)) : ""}</span>
        <b class="b-title">${esc(t(b.title))}</b>
        ${bookArt(b, "b-art") || `<span class="b-orn" aria-hidden="true"><i></i><i></i><i></i></span>`}
        <span class="b-meta">${esc(fmt(b.picture ? U.bookPg : U.bookCh, { c: pr.all }))}${b.ages && !ADU() ? ` · ${agesHtml(b.ages)}` : ""}</span>
        <span class="b-prog" aria-label="${esc(fmt(u(b.picture ? "bookProgP" : "bookProg"), { a: pr.done, b: pr.all }))}">${b.chapters.map((c, i) => `<i class="${S.bookRead && S.bookRead[chKey(b, i + 1)] ? "on" : ""}"></i>`).join("")}</span></span></a>`;
  }
  const BANDS = ["4-8", "9-14", "15+", "all"];
  const BOOKS = () => (ADU() ? C.books.filter(b => b.ages === "15+") : C.books);
  function bandOrder() { const extra = [...new Set(BOOKS().map(b => b.ages || "all"))].filter(a => !BANDS.includes(a)); const all = BANDS.concat(extra); return S.age && all.includes(S.age) ? [S.age].concat(all.filter(a => a !== S.age)) : all; }
  function sortBooks(bs) { const ix = b => { const i = ORDER.indexOf(b.stage); return i < 0 ? 99 : i; }; return bs.slice().sort((a, b) => ix(a) - ix(b)); }
  function booksFor(id) { const bs = BOOKS().filter(b => b.stage === id), ord = bandOrder(); return bs.sort((a, b) => ord.indexOf(a.ages || "all") - ord.indexOf(b.ages || "all")); }
  function vRecord() {
    const sts = ORDER.map(id => C.stages[id]);
    const rTot = sts.reduce((a, st) => a + st.readings.length, 0), rDone = sts.reduce((a, st) => a + st.readings.filter(r => S.read[r.id]).length, 0);
    const ans = S.answered || {}, qAll = Object.keys(ans).length, qOk = Object.values(ans).filter(v => v === true).length;
    const chDone = Object.keys(S.bookRead || {}).length, tkDone = Object.values(S.tasks || {}).filter(v => v === "ok").length;
    const d0 = Date.parse(today()), last = [...Array(14)].map((_, i) => new Date(d0 - (13 - i) * 864e5).toISOString().slice(0, 10)), cnt = last.map(dayCount), mx = Math.max(1, ...cnt);
    const cell = (n, k) => `<div><b dir="ltr">${esc(String(n))}</b><span>${esc(u(k))}</span></div>`;
    const mins = x => x >= 60 ? fmt(U.recMin, { n: Math.round(x / 60) }) : u("recSec");
    const RS2 = S.readSecs || {}, TT = S.taskT || {};
    const stageRec = id => {
      const st = C.stages[id], rd = st.readings.filter(r => S.read[r.id]).length, qa = st.quiz.filter(q => ans[q.id] !== undefined).length, qr = st.quiz.filter(q => ans[q.id] === true).length;
      const tks = st.tasks.map(x => ({ id: x.id, tx: t(x) })).concat([].concat(...st.degrees.filter(d => d.step).map(d => tiersOf(id, d).map(x => ({ id: x.id, tx: u(x.k) + " · " + t(d.name) })))));
      const done = tks.filter(x => S.tasks[x.id] === "ok"), bks = booksFor(id);
      return `<details class="rec"><summary><b style="color:${darker(id)}">${esc(nm(id))}</b><span class="m"><bdi>${rd}/${st.readings.length}</bdi> ${esc(u("rShort"))} · <bdi>${qa}/${st.quiz.length}</bdi> ${esc(u("qShort"))} · <bdi>${done.length}/${tks.length}</bdi> ${esc(u("tShort"))}</span></summary>
        <h3 class="h tr-h">${esc(u("storiesH"))}</h3><ul class="rec-list">${st.readings.map(r => `<li><span>${esc(t(r.title))}</span>${S.read[r.id] ? `<span class="ok">✓ ${esc(fmtShort(S.read[r.id]))}${RS2[r.id] ? " · " + esc(mins(RS2[r.id])) : ""}</span>` : `<span class="no">${esc(u("recNotRead"))}</span>`}</li>`).join("")}</ul>
        ${choicesFor(id).length ? `<h3 class="h tr-h">${esc(u("chT"))}</h3><ul class="rec-list">${choicesFor(id).map(x => `<li><span>${esc(t(x.title))}</span>${chIsDone(x) ? `<span class="ok">✓ ${esc(fmtShort(S.chs[x.id].t))}</span>` : `<span class="no">${esc(u("recNotRead"))}</span>`}</li>`).join("")}</ul>` : ""}
        <p class="sub">${esc(fmt(U.recQuiz, { a: qa, b: st.quiz.length, c: qr }))}</p>
        ${bks.length ? `<h3 class="h tr-h">${esc(u("booksH"))}</h3><ul class="rec-list">${bks.map(b => { const pr = bookProgress(b); return `<li><span>${esc(t(b.title))}</span><span class="${pr.done ? "ok" : "no"}" dir="ltr">${pr.done}/${pr.all}</span></li>`; }).join("")}</ul>` : ""}
        <h3 class="h tr-h">${esc(u("recTasks"))}</h3><ul class="rec-list">${done.length ? done.map(x => `<li><span>${esc(x.tx)}</span><span class="ok">✓${TT[x.id] ? " " + esc(fmtShort(TT[x.id])) : ""}</span></li>`).join("") : `<li><span class="no">${esc(u("recNone"))}</span></li>`}</ul></details>`;
    };
    return `<div class="wrap"><div class="st-back"><a class="back" href="#/" data-act="histback">${BK()} ${esc(u("back"))}</a></div>
      <h1 class="h" style="font-size:30px;margin:6px 0 2px">${esc(u("recT"))}</h1><p class="sub">${esc(u("recSub"))}</p>
      <section class="sec"><div class="rec-grid">${cell(actDays().size, "recDays")}${cell(streak(), "recStreak")}${cell(rDone + "/" + rTot, "recReads")}${cell(chDone, "recChaps")}${cell(qAll, "recAns")}${cell(qOk + (qAll ? " · " + Math.round(qOk / qAll * 100) + "%" : ""), "recRight")}${cell(tkDone, "recTasks")}${cell(fmtShort(Date.parse(S.start) || Date.now()), "recSince")}</div></section>
      <section class="sec"><h2 class="h">${esc(u("recLast14"))}</h2><div class="rec14" dir="ltr">${cnt.map((n, i) => `<i class="${n ? "" : "z"}" style="height:${Math.max(6, Math.round(n / mx * 100))}%" title="${last[i]}: ${n}"></i>`).join("")}</div></section>
      ${eveRecord()}
      <section class="sec">${ORDER.map(stageRec).join("")}</section>
      <section class="sec card">${dataBlock(true)}</section></div>`;
  }
  function vLibrary() {
    if (!C.books.length && booksState !== "ready") return booksWait();
    return `<div class="wrap"><div class="st-back"><a class="back" href="#/" data-act="histback">${BK()} ${esc(u("back"))}</a></div><h1 class="h" style="font-size:30px;margin:6px 0 2px">${esc(u("libT"))}</h1><p class="sub">${esc(u("libSub"))}</p>
      ${BOOKS().length ? bandOrder().map(band => { const bs = sortBooks(BOOKS().filter(b => (b.ages || "all") === band)); return bs.length ? `<section class="sec shelf-band"><h2 class="h">${ADU() ? esc(u("edAdult")) : band === "all" ? esc(u("agesAll")) : `${esc(u("ages"))} ${agesHtml(band)}`}${!ADU() && S.age && S.age === band ? ` <span class="ph mine">${esc(u("yourAge"))}</span>` : ""}</h2><div class="shelf">${bs.map(b => bookCover(b)).join("")}</div></section>` : ""; }).join("") : `<p class="sub">${esc(u("libEmpty"))}</p>`}</div>`;
  }
  const booksWait = () => `<div class="wrap"><p class="sub center" style="margin-top:40px">${esc(u("loading"))}</p></div>`;
  function vBook(bid) {
    const b = bookOf(bid); if (!b) return booksState === "ready" ? vMissing() : booksWait();
    const pr = bookProgress(b), next = b.chapters.findIndex((c, i) => !(S.bookRead && S.bookRead[chKey(b, i + 1)]));
    return `<div class="wrap"><a class="back" href="${C.stages[b.stage] ? "#/stage/" + b.stage : "#/library"}">${BK()} ${esc(C.stages[b.stage] ? nm(b.stage) : u("libT"))}</a>
      <div class="book-hero">${bookCover(b, true)}</div>
      <p class="sub center">${esc(fmt(u(b.picture ? "bookProgP" : "bookProg"), { a: pr.done, b: pr.all }))}</p>
      <a class="btn block" href="#/book/${encodeURIComponent(b.id)}/${next < 0 ? 1 : next + 1}">${esc(u(next < 0 ? "bookAgain" : pr.done ? "bookCont" : "bookStart"))}</a>
      <ol class="chapters">${b.chapters.map((c, i) => { const done = S.bookRead && S.bookRead[chKey(b, i + 1)], qs = c.quiz || [], ok = qs.filter(q => S.answered[q.id] === true).length;
        if (!chOpen(b, i + 1)) return `<li class="locked"><span class="chrow" aria-disabled="true"><span class="cn">${i + 1}</span><span class="tx"><b>${esc(t(c.title))}</b><span class="m">${esc(u(b.picture ? "pgLocked" : "chLocked"))}</span></span></span></li>`;
        return `<li class="${!done && i === next ? "cur" : ""}"><a href="#/book/${encodeURIComponent(b.id)}/${i + 1}"><span class="cn">${done ? "✓" : i + 1}</span><span class="tx"><b>${esc(t(c.title))}</b>
          <span class="m">${done ? esc(u("read")) : ""}${qs.length ? `${done ? " · " : ""}${esc(fmt(U.bookQ, { a: ok, b: qs.length }))}` : ""}</span></span><span class="arrow">→</span></a></li>`; }).join("")}</ol>
      ${familyBlock(b)}
      <a class="card next" href="#/library" style="margin-top:14px"><span class="tx"><b>${esc(u("libT"))}</b><span class="m">${BOOKS().length}</span></span><span class="arrow">→</span></a></div>`;
  }
  function familyBlock(b) {
    const f = b.family; if (!S.parent || !f || !(Array.isArray(f.q) && f.q.length || f.act)) return "";
    return `<details class="family"><summary>${esc(u("famTalk"))}</summary>
      ${Array.isArray(f.q) && f.q.length ? `<ol>${f.q.map(q => `<li>${esc(t(q))}</li>`).join("")}</ol>` : ""}
      ${f.act ? `<p class="fam-act"><b>${esc(u("famAct"))}:</b> ${esc(t(f.act))}</p>` : ""}</details>`;
  }
  let BQ = {}; // book question state by id: {sq, picked}
  function vChapter(bid, n) {
    const b = bookOf(bid); if (!b) return booksState === "ready" ? vMissing() : booksWait();
    const k = Math.max(1, Math.min(+n || 1, b.chapters.length)), c = b.chapters[k - 1];
    if (!chOpen(b, k)) { const f = b.chapters.findIndex((x, i) => !chRead(b, i + 1)) + 1 || 1;
      return `<div class="wrap article chapter"><div class="reader-bar"><a class="back" href="#/book/${encodeURIComponent(b.id)}">${BK()} ${esc(t(b.title))}</a></div>
        <div class="card gate"><p>${esc(fmt(U[b.picture ? "pgGate" : "chGate"], { n: f }))}</p><a class="btn block" href="#/book/${encodeURIComponent(b.id)}/${f}">${esc(fmt(U[b.picture ? "pgGo" : "chGo"], { n: f }))}</a></div></div>`; }
    const body = (c.body && t(c.body)) || [], qs = c.quiz || [];
    const rs = readSess("c:" + chKey(b, k), body); if (S.bookRead && S.bookRead[chKey(b, k)]) rs.done = true;
    const qHtml = qs.map(q0 => {
      const st = BQ[q0.id] || (BQ[q0.id] = { sq: shuffleQ(q0), picked: null }), q = st.sq, ans = st.picked != null, ok = ans && st.picked === q.correct;
      return `<div class="dg q"><p class="qtext" style="font-size:calc(18px * var(--k))">${esc(t(q.q))}</p><div class="opts">${q.options.map((op, i) => {
        let cl = ""; if (ans) cl = i === q.correct ? "right" : i === st.picked ? "wrong" : "dim";
        return `<button class="opt ${cl}" data-act="bpick" data-q="${esc(q0.id)}" data-s="${esc(b.stage)}" data-i="${i}" ${ans ? "disabled" : ""}><span class="l">${(L() === "ar" ? "أبجده" : "ABCDE")[i]}</span><span>${esc(t(op))}</span></button>`; }).join("")}</div>
        ${ans ? `<div class="fb ${ok ? "ok" : "no"}" role="status"><b>${esc(u(ok ? "right" : "wrong"))}</b>${q.why ? `<p>${esc(t(q.why))}</p>` : ""}${S.answered[q0.id] !== undefined && st.again ? `<p class="m">${esc(u("already"))}</p>` : ""}</div>` : ""}</div>`; }).join("");
    const nextHref = k < b.chapters.length ? `#/book/${encodeURIComponent(b.id)}/${k + 1}` : `#/book/${encodeURIComponent(b.id)}`;
    if (b.picture) return `<div class="wrap article chapter picbook" style="--fs:${S.fs}px">
      <div class="reader-bar"><a class="back" href="#/book/${encodeURIComponent(b.id)}">${BK()} ${esc(t(b.title))}</a>
        <div class="fsz" role="group" aria-label="${esc(u("textSize"))}">${ttsBtn()}<button data-act="fs" data-d="-2" aria-label="A−">A−</button><button data-act="fs" data-d="2" aria-label="A+">A+</button></div></div>
      <div class="pb-page"><p class="pb-n">${esc(fmt(U.pgOf, { a: k, b: b.chapters.length }))}</p>
        ${symImg(b.stage, "pb-art")}
        <h1 class="h">${esc(t(c.title))}</h1>
        <div class="body">${body.map(p => `<p>${esc(p)}</p>`).join("")}</div><div class="read-end"></div>${readStat(rs)}</div>
      ${qs.length ? `<section class="sec ch-q"><h2 class="h" style="font-size:21px">${esc(u(qs.length === 1 ? "pgQ" : "chQ"))}</h2>${qHtml}</section>` : ""}
      <div class="pb-dots" aria-hidden="true">${b.chapters.map((x, i) => `<i class="${i + 1 === k ? "on" : S.bookRead && S.bookRead[chKey(b, i + 1)] ? "done" : ""}"></i>`).join("")}</div>
      <a class="btn block" id="nextCh" style="margin-top:12px" href="${nextHref}" ${rs.done || k >= b.chapters.length ? "" : 'aria-disabled="true" tabindex="-1"'}>${esc(u(k < b.chapters.length ? "pgNext" : "chDone"))}</a></div>`;
    return `<div class="wrap article chapter" style="--fs:${S.fs}px">
      <div class="reader-bar"><a class="back" href="#/book/${encodeURIComponent(b.id)}">${BK()} ${esc(t(b.title))}</a>
        <div class="fsz" role="group" aria-label="${esc(u("textSize"))}">${ttsBtn()}<button data-act="fs" data-d="-2" aria-label="A−">A−</button><button data-act="fs" data-d="2" aria-label="A+">A+</button></div></div>
      <p class="meta" style="margin:0"><span>${esc(fmt(U.chOf, { a: k, b: b.chapters.length }))}</span></p>
      <h1 class="h">${esc(t(c.title))}</h1>
      <div class="body">${body.map(p => `<p>${esc(p)}</p>`).join("")}</div><div class="read-end"></div>${readStat(rs)}
      ${qs.length ? `<section class="sec ch-q"><h2 class="h" style="font-size:21px">${esc(u(qs.length === 1 ? "chQ1" : "chQ"))}</h2>${qHtml}</section>` : ""}
      <a class="btn block" id="nextCh" style="margin-top:16px" href="${nextHref}" ${rs.done || k >= b.chapters.length ? "" : 'aria-disabled="true" tabindex="-1"'}>${esc(u(k < b.chapters.length ? "chNext" : "chDone"))}</a></div>`;
  }
  function shuffleQ(q) {
    const order = q.options.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
    return Object.assign({}, q, { options: order.map(i => q.options[i]), correct: order.indexOf(q.correct) });
  }
  let QZ = null; // {key, list, i, picked, right, moves}
  function vQuiz(id, rid) {
    const st = C.stages[id]; if (!st) return vMissing();
    const key = id + "/" + (rid || "");
    if (!QZ || QZ.key !== key) QZ = { key, list: st.quiz.filter(q => !rid || q.readingId === rid).map(shuffleQ), i: 0, picked: null, right: 0, moves: null, again: false };
    const list = QZ.list;
    if (!list.length) return `<div class="wrap"><a class="back" href="#/stage/${id}">${BK()} ${esc(nm(id))}</a><p>${esc(u("noQuiz"))}</p></div>`;
    if (QZ.i >= list.length) {
      return `<div class="wrap"><a class="back" href="#/stage/${id}">${BK()} ${esc(nm(id))}</a>
        <h1 class="h" style="font-size:30px;margin:10px 0 4px">${esc(u("result"))}</h1>
        <p style="font-size:20px;margin:0" dir="ltr" class="${L() === "ar" ? "" : ""}">${QZ.right} / ${list.length}</p>
        <div class="mix" aria-hidden="true">${ORDER.map(k => `<i style="flex-basis:${S.mix[k]}%;background:${G[k].color}"></i>`).join("")}</div>
        <div class="legend">${ORDER.map(k => `<span><i style="background:${G[k].color}"></i><em>${esc(nm(k))}</em><b>${S.mix[k]}%</b></span>`).join("")}</div>
        ${(() => { const nr = nextReading(id, rid); return nr ? `<a class="btn block" style="margin-top:18px" href="#/read/${id}/${encodeURIComponent(nr.id)}">${esc(u("nextRead"))}: ${esc(t(nr.title))}</a>` : `<a class="btn block" style="margin-top:18px" href="#/tasks">${esc(u("toMission"))}</a>`; })()}
        <div class="row" style="margin-top:10px"><button class="btn ghost" data-act="qagain">${esc(u("again"))}</button><a class="btn ghost" href="#/me">${esc(u("meTab"))}</a></div></div>`;
    }
    const q = list[QZ.i], ans = QZ.picked != null, ok = ans && QZ.picked === q.correct;
    const sitType = q.type === "situation";
    return `<div class="wrap"><a class="back" href="#/stage/${id}">${BK()} ${esc(nm(id))}</a>
      <h1 class="vh">${esc(u("quiz"))}: ${esc(nm(id))}</h1>
      <div class="qhead"><span class="qtype ${sitType ? "sit" : ""}">${esc(u(sitType ? "sit" : "comp"))}</span><span dir="ltr">${QZ.i + 1} / ${list.length}</span></div>
      <div class="progress"><i style="width:${(QZ.i + (ans ? 1 : 0)) / list.length * 100}%"></i></div>
      <p class="qtext">${esc(t(q.q))}</p>
      <div class="opts">${q.options.map((op, i) => {
        let c = ""; if (ans) c = i === q.correct ? "right" : i === QZ.picked ? "wrong" : "dim";
        return `<button class="opt ${c}" data-act="pick" data-i="${i}" ${ans ? "disabled" : ""}><span class="l">${(L() === "ar" ? "أبجده" : "ABCDE")[i]}</span><span>${esc(t(op))}</span></button>`;
      }).join("")}</div>
      ${ans ? `<div class="fb ${ok ? "ok" : "no"}" role="status"><b>${esc(u(ok ? "right" : "wrong"))}</b><p>${esc(t(q.why))}</p>
        <div class="delta">${QZ.moves && QZ.moves.length ? QZ.moves.map(moveText).map(esc).join("<br>") : (QZ.again ? esc(u("already")) : "")}</div></div>
        <button class="btn block" style="margin-top:14px" data-act="qnext">${esc(u(QZ.i + 1 < list.length ? "next" : "finish"))}</button>` : ""}
    </div>`;
  }
  /* ---------- personal daily tasks (placeholder set) ---------- */
  const MYSUG = [
    { s: "human", ar: "أرتّب سريري", en: "Make my bed" }, { s: "sabiq", ar: "أصلي الصلاة في وقتها", en: "Pray on time" },
    { s: "zombie", ar: "أقول «بسم الله» قبل الأكل", en: "Say Bismillah before eating" }, { s: "sabiq", ar: "أساعد في البيت قبل أن يُطلب مني", en: "Help at home before being asked" },
    { s: "zombie", ar: "أطفئ الشاشة في وقتها", en: "Turn off the screen on time" }, { s: "pig", ar: "أشارك شيئًا أحبه", en: "Share something I like" },
    { s: "monkey", ar: "أتكلم بصوت هادئ", en: "Speak in a calm voice" }, { s: "human", ar: "أقرأ قراءة اليوم", en: "Do today's reading" }
  ];
  const MYSUG_A = [
    { s: "zombie", ar: "أضع الهاتف بعيدًا عن السرير قبل النوم", en: "Put the phone away from the bed before sleep" }, { s: "sabiq", ar: "أصلي الصلاة في أول وقتها", en: "Pray at the start of its time" },
    { s: "zombie", ar: "أذكر الله في الطريق إلى العمل", en: "Remember Allah on the way to work" }, { s: "human", ar: "أتصل بوالديّ أو بأحد أرحامي", en: "Call my parents or a relative" },
    { s: "monkey", ar: "أنهي مهمة واحدة قبل أن أبدأ غيرها", en: "Finish one task before starting another" }, { s: "pig", ar: "أتصدق بشيء ولو قليل", en: "Give something in charity, however little" },
    { s: "human", ar: "أؤدي عملي اليوم بإتقان", en: "Do today's work with care" }, { s: "human", ar: "أقرأ قراءة اليوم", en: "Do today's reading" }
  ];
  const SUGS = () => (ADU() ? MYSUG_A : MYSUG);
  let myStage = "";
  const dayKey = ts => ymd(new Date(ts));
  const myList = () => (Array.isArray(S.my) ? S.my : []);
  const myDoneOn = d => (S.myDone && S.myDone[d]) || {};
  function myCounts(d) { const l = myList(), dn = myDoneOn(d); return { a: l.filter(x => dn[x.id]).length, b: l.length }; }
  function myAdd(tx, st) {
    tx = String(tx || "").replace(/[<>{}\u0000-\u001f]/g, "").trim().slice(0, 60); if (!tx) return false;
    S.my = myList().concat([{ id: "m" + Date.now().toString(36), tx, s: C.stages[st] ? st : "" }]).slice(0, 20); return true;
  }
  const SHORT = { zombie: ["الزومبي", "Zombie"], pig: ["الخنزير", "Pig"], monkey: ["القرد", "Monkey"], human: ["الآدمية", "Humanity"], sabiq: ["السابق", "Racing ahead"] };
  const sNm = k => SHORT[k][L() === "ar" ? 0 : 1];
  function chkRow(o) {
    return `<li class="${o.on ? "on" : ""}${o.cls ? " " + o.cls : ""}"><button class="mychk" data-act="${o.act}" ${o.data} aria-pressed="${!!o.on}" ${o.lock ? "disabled" : ""}><span class="box">${o.on ? "✓" : ""}</span><span class="grow">${o.tag ? `<span class="ttag">${esc(o.tag)}</span>` : ""}${esc(o.tx)}</span>${o.s ? `<span class="bullet" style="background:${G[o.s].color};margin:0" title="${esc(sNm(o.s))}"></span>` : ""}</button>${o.del ? `<button class="mydel" data-act="mydel" data-i="${esc(o.del)}" aria-label="${esc(u("myDel"))}">×</button>` : ""}</li>`;
  }
  function todayList() {
    const l = myList(), dn = myDoneOn(today()), m = todaysMission(), used = new Set(l.map(x => x.tx));
    const sugs = SUGS().filter(x => !used.has(t(x))).slice(0, 6);
    const rows = [];
    if (m && C.stages[m.stage]) rows.push(chkRow({ act: "dailydid", data: `data-s="${m.stage}" data-t="${esc(m.id)}"`, on: S.tasks[m.id] === "ok", lock: S.tasks[m.id] === "ok", tx: t(m), tag: u("tMission"), s: m.stage, cls: "mis" }));
    l.forEach(x => rows.push(chkRow({ act: "mytog", data: `data-i="${esc(x.id)}"`, on: dn[x.id], tx: x.tx, s: x.s || "", del: x.id })));
    const act = activeTiers(), c = myCounts(today()), mOk = m && S.tasks[m.id] === "ok" ? 1 : 0, tot = c.b + (m ? 1 : 0) + act.length, done = c.a + mOk + act.filter(a => trHas(a.x.id)).length;
    return `<section class="sec card my"><div class="dash-h"><h2 class="h" style="font-size:21px;margin:0">${esc(u("tTodayT"))}</h2><b class="m" dir="ltr">${done}/${tot}</b></div>
      <ul class="mylist">${rows.join("")}</ul>
      ${activeBlock(act)}
      <div class="myadd"><input id="myNew" type="text" maxlength="60" autocomplete="off" placeholder="${esc(u("myPh"))}"><button class="small-btn dark" data-act="myadd">${esc(u("myAdd"))}</button></div>
      <details class="myopts"><summary>${esc(u("tMore"))}</summary>
        <div class="fpick mylink"><span class="m">${esc(u("myLink"))}</span><button class="tog ${!myStage ? "on" : ""}" data-act="mystage" data-s="" aria-pressed="${!myStage}">${esc(u("myNone"))}</button>${ORDER.map(k => `<button class="tog ${myStage === k ? "on" : ""}" data-act="mystage" data-s="${k}" aria-pressed="${myStage === k}"><i class="dotc" style="background:${G[k].color}"></i>${esc(sNm(k))}</button>`).join("")}</div>
        ${sugs.length ? `<div class="mysug">${sugs.map(x => `<button class="tog" data-act="mysug" data-i="${SUGS().indexOf(x)}">+ ${esc(t(x))}</button>`).join("")}</div>` : ""}
      </details></section>`;
  }
  function tSeg(id) {
    return `<nav class="tseg" aria-label="${esc(u("tStages"))}"><a class="${!id ? "on" : ""}" href="#/tasks">${esc(u("tToday"))}</a>${ORDER.map(k => `<a class="${id === k ? "on" : ""}" href="#/tasks/${k}"><i class="dotc" style="background:${G[k].color}"></i>${esc(sNm(k))}</a>`).join("")}</nav>`;
  }
  const tiersOf = (id, d) => { const b = (C.stages[id].adult ? "a-" : "") + id + "-d" + (C.stages[id].degrees.indexOf(d) + 1); return [["s", d.step, "tierStep"], ["w", d.week, "tierWeek"], ["h", d.habit, "tierHabit"]].filter(x => x[1]).map(x => ({ id: b + x[0], tx: x[1], k: x[2] })); };
  const trDays = id => (S.tr && S.tr[id]) || [];
  const trHas = id => trDays(id).includes(today());
  function trStreak(id) {
    const set = new Set(trDays(id)); let n = 0, d = Date.parse(today());
    if (!set.has(today())) d -= 864e5;
    while (set.has(new Date(d).toISOString().slice(0, 10))) { n++; d -= 864e5; }
    return n;
  }
  function tierRow(id, x, open, tag) {
    const on = S.tasks[x.id] === "ok";
    if (x.k === "tierStep" || !open || (on && x.k === "tierWeek"))
      return chkRow({ act: "tdid", data: `data-s="${id}" data-t="${esc(x.id)}"`, on, lock: on || !open, tx: t(x.tx), tag, cls: !on && !open ? "locked" : "" });
    const td = trHas(x.id), btn = `<button class="trbtn ${td ? "on" : ""}" data-act="trday" data-s="${id}" data-t="${esc(x.id)}" data-k="${x.k === "tierWeek" ? "w" : "h"}" aria-pressed="${td}">${esc(u(td ? "trDoneToday" : "trToday"))}</button>`;
    let meta;
    if (x.k === "tierWeek") { const n = Math.min(7, trDays(x.id).length); meta = `<span class="dots7" aria-label="${esc(fmt(U.trOf, { n }))}">${[...Array(7)].map((_, i) => `<i class="${i < n ? "f" : ""}"></i>`).join("")}<em>${esc(fmt(U.trOf, { n }))}</em></span>`; }
    else meta = `<span class="trmeta">${esc(fmt(U.trHabitMeta, { s: trStreak(x.id), a: trDays(x.id).length }))}</span>`;
    return `<li class="tr ${td ? "on" : ""}"><div class="grow"><span class="ttag">${esc(tag)}</span><span class="trtx">${esc(t(x.tx))}</span>${meta}</div>${btn}</li>`;
  }
  function activeTiers() {
    const out = [];
    ORDER.forEach(s => C.stages[s].degrees.forEach(d => {
      if (!d.step) return; const ts = tiersOf(s, d), st = ts[0], w = ts.find(x => x.k === "tierWeek"), h = ts.find(x => x.k === "tierHabit");
      if (w && S.tasks[st.id] === "ok" && S.tasks[w.id] !== "ok") out.push({ s, d, x: w });
      else if (h && w && S.tasks[w.id] === "ok") out.push({ s, d, x: h });
    }));
    return out;
  }
  function activeBlock(act) {
    return `<h3 class="h tr-h">${esc(u("trActive"))}</h3>${act.length ? `<p class="sub tiers-sub">${esc(u("trActiveSub"))}</p><ul class="mylist">${act.map(a => tierRow(a.s, a.x, true, u(a.x.k) + " · " + t(a.d.name))).join("")}</ul>` : `<p class="sub tiers-sub">${esc(u("trNone"))}</p>`}`;
  }
  function stepStrip(id, withWork) {
    const st = C.stages[id], ar = L() === "ar", num = n => ar ? "٠١٢٣٤٥٦٧٨٩"[n] : String(n);
    const nd = st.degrees.length, rd = st.readings.filter(r => S.read[r.id]).length, qa = st.quiz.filter(q => S.answered[q.id] !== undefined).length, nb = booksFor(id).length;
    const tk = st.tasks.length + [].concat(...st.degrees.filter(d => d.step).map(d => tiersOf(id, d))).length;
    const tok = st.tasks.filter(x => S.tasks[x.id] === "ok").length + [].concat(...st.degrees.filter(d => d.step).map(d => tiersOf(id, d))).filter(x => S.tasks[x.id] === "ok").length;
    const it = [[`#/stage/${id}/learn`, "stepLearn", nd === 2 ? u("nTraits2") : fmt(U.nTraits, { n: nd }), ""],
      [`#/stage/${id}/read`, "stepRead", (nb ? (nb === 1 ? u("oneBook") : fmt(U.nBooks, { n: nb })) + " · " : "") + `${rd}/${st.readings.length}`, ""],
      [`#/stage/${id}/quiz`, "stepQuiz", `${qa}/${st.quiz.length}`, ""]];
    if (withWork) it.push([`#/tasks/${id}`, "stepWork", `${tok}/${tk}`, "work"]);
    return `<nav class="steps4 ${withWork ? "" : "three"}" aria-label="${esc(u("navSteps"))}">${it.map(([h, k, m, c], i) => `<a class="${c}" href="${h}"><i>${num(i + 1)}</i><b>${esc(u(k))}</b><span dir="auto">${esc(m)}</span></a>`).join("")}</nav>`;
  }
  function stageWork(id) {
    const st = C.stages[id], tk = st.tasks, ok = tk.filter(x => S.tasks[x.id] === "ok").length;
    const ix = ORDER.indexOf(id), pv = ORDER[ix - 1], nx = ORDER[ix + 1];
    const steps = st.degrees.filter(d => d.step);
    const tierAll = [].concat(...steps.map(d => tiersOf(id, d).map(x => x.id)));
    return `<section class="sec work-h"><h2 class="h" style="color:${darker(id)};margin:0">${esc(nm(id))}</h2><p class="sub" style="margin:4px 0 0">${esc(t(st.short))}</p></section>
      <section class="sec card learnbox"><h3 class="h" style="font-size:19px;margin:0 0 10px">${esc(u("tLearn"))}</h3>
        <a class="btn block learn" href="#/stage/${id}">${esc(u("learnStage"))}</a>
        ${stepStrip(id, false)}</section>
      <section class="sec card">${selfcheckBlock(id, true)}${signsBlock(id)}</section>
      <section class="sec card"><div class="dash-h"><h3 class="h" style="font-size:19px;margin:0">${esc(u("tStageTasks"))}</h3><b class="m" dir="ltr">${ok}/${tk.length}</b></div>
        <ul class="mylist">${tk.map(x => chkRow({ act: "tdid", data: `data-s="${id}" data-t="${esc(x.id)}"`, on: S.tasks[x.id] === "ok", lock: S.tasks[x.id] === "ok", tx: t(x) })).join("")}</ul></section>
      ${steps.length ? `<section class="sec card tiers"><div class="dash-h"><h3 class="h" style="font-size:19px;margin:0">${esc(u("tSteps"))}</h3><b class="m" dir="ltr">${tierAll.filter(x => S.tasks[x] === "ok").length}/${tierAll.length}</b></div>
        <p class="sub tiers-sub">${esc(u("tiersSub"))}</p>
        ${steps.map(d => `<div class="trait-t" id="tr-t${st.degrees.indexOf(d)}"><b>${esc(t(d.name))}</b>${d.turnName ? `<span class="turn">${esc(fmt(U.turnTo, { x: t(d.turnName) }))}</span>` : ""}</div>
        <ul class="mylist">${tiersOf(id, d).map((x, j, a) => tierRow(id, x, j === 0 || S.tasks[a[j - 1].id] === "ok", u(x.k))).join("")}</ul>`).join("")}</section>` : ""}
      <nav class="snav">${pv ? `<a href="#/tasks/${pv}"><span class="m">${esc(u("lower"))}</span><b>${esc(sNm(pv))}</b></a>` : "<span></span>"}${nx ? `<a href="#/tasks/${nx}" class="up"><span class="m">${esc(u("higher"))}</span><b>${esc(sNm(nx))}</b></a>` : "<span></span>"}</nav>`;
  }
  function stageList() {
    return `<section class="sec"><h3 class="h" style="font-size:19px">${esc(u("tStages"))}</h3><div class="pf">${ORDER.map(k => { const tk = C.stages[k].tasks, ok = tk.filter(x => S.tasks[x.id] === "ok").length;
      return `<a class="pfrow" href="#/tasks/${k}"><span class="pfn"><b style="color:${darker(k)}">${esc(nm(k))}</b></span><span class="pfbar"><i style="width:${tk.length ? ok / tk.length * 100 : 0}%;background:${MC(k)}"></i></span><span class="m pfc"><bdi>${ok}/${tk.length}</bdi></span></a>`; }).join("")}</div></section>`;
  }
  function vTasks(id) {
    return `<div class="wrap"><h1 class="h" style="font-size:30px;margin:6px 0 8px">${esc(u("tasksTab"))}</h1>
      ${tSeg(id)}
      ${id ? stageWork(id) : todayList() + khBlock() + stageList()}
</div>`;
  }
  function awaitBlock() {
    if (!S.parent) return "";
    const rows = [];
    ORDER.forEach(id => C.stages[id].tasks.forEach(tk => { if (S.tasks[tk.id] === "done") rows.push(taskRow(id, tk)); }));
    const m = todaysMission(), md = m && S.tasks[m.id] === "done";
    if (!rows.length && !md) return "";
    return `<section class="sec card await"><h2 class="h" style="font-size:21px;margin:0 0 6px">${esc(u("awaitT"))}</h2>${md ? missionCard(m) : ""}${rows.join("")}</section>`;
  }
  function famGlance() {
    if (!S.parent || P.list.length < 2) return "";
    return `<section class="sec card"><h2 class="h" style="font-size:21px;margin:0 0 8px">${esc(u("famGlance"))}</h2>
      <div class="famgrid">${P.list.map(id => { const st = id === P.active ? S : loadOf(id), up = st.mix.human + st.mix.sabiq;
        return `<button class="famcell ${id === P.active ? "on" : ""}" data-act="prof" data-p="${id}">
          <span class="famhand">${handX({ side: "L", chips: false, interactive: false })}</span>
          <span class="mix famix" aria-hidden="true">${ORDER.map(k => `<i style="flex-basis:${st.mix[k]}%;background:${G[k].color}"></i>`).join("")}</span>
          <b>${esc(nameOf(id, st))}</b><span class="m">${esc(fmt(U.rankSub, { p: up }))}</span></button>`; }).join("")}</div></section>`;
  }
  let circleOff = 0;
  function circleNow() {
    if (!C.circle.length) return null;
    const days = Math.max(0, Math.floor((Date.parse(today()) - Date.parse(S.start || today())) / 864e5));
    const n = C.circle.length, i = ((Math.floor(days / 7) + circleOff) % n + n) % n;
    return { c: C.circle[i], i, n };
  }
  function readingLink(rid) {
    for (const id of ORDER) { const r = C.stages[id].readings.find(x => String(x.id) === String(rid)); if (r) return `<a class="chipl" href="#/read/${id}/${encodeURIComponent(r.id)}">${esc(t(r.title))}</a>`; }
    return "";
  }
  function circleCard() {
    const x = circleNow(); if (!x || !S.parent) return "";
    const c = x.c, steps = t(c.steps) || [];
    return `<section class="sec card circle"><div class="circle-h"><h2 class="h">${esc(u("circleT"))}</h2></div>
      <p class="sub" style="margin:2px 0 6px">${esc(fmt(U.circleWeek, { w: c.week || x.i + 1, n: x.n }))}</p>
      <h3 class="circle-t">${esc(t(c.title))}</h3>
      <ol class="circle-s">${steps.map(sx => `<li>${esc(sx)}</li>`).join("")}</ol>
      ${S.circles && S.circles["w" + (c.week || x.i + 1)] ? `<p class="circle-ok">✓ ${esc(u("circleDid"))}</p>` : `<button class="small-btn dark" style="margin-top:10px" data-act="circledone" data-w="${c.week || x.i + 1}">${esc(u("circleDone"))}</button>`}
      ${(c.uses || []).length ? `<p class="circle-u"><b>${esc(u("circleUses"))}:</b> ${(c.uses || []).map(readingLink).join(" ")}</p>` : ""}
      <div class="sign-nav" style="margin-top:8px"><button class="small-btn" data-act="circleprev" aria-label="prev">${L() === "ar" ? "\u2192" : "\u2190"}</button><span dir="ltr">${x.i + 1} / ${x.n}</span><button class="small-btn" data-act="circlenext" aria-label="next">${L() === "ar" ? "\u2190" : "\u2192"}</button></div></section>`;
  }
  function vSelf() {
    const hasSc = ORDER.some(id => (C.stages[id].selfcheck || []).length);
    if (!hasSc) return "";
    const id = scStage || LOWER.slice().sort((a, b) => S.mix[b] - S.mix[a])[0];
    return `<section class="sec card"><h2 class="h" style="font-size:21px;margin:0">${esc(u("scT"))}</h2>
      <p class="sub" style="margin:4px 0 8px">${esc(u("pickFinger"))}</p>
      <div class="fpick" style="justify-content:flex-start;margin:0 0 10px">${ORDER.map(k => `<button class="tog ${k === id ? "on" : ""}" data-act="scstage" data-s="${k}" aria-pressed="${k === id}">${esc(fing(k))}</button>`).join("")}</div>
      ${selfcheckBlock(id, false)}</section>`;
  }
  /* ---------- badges and ranks (quiet ink stamps; placeholder set) ---------- */
  const GLYPH = {
    book: '<path d="M4 6c3-1.2 5.4-1 8 .8V19c-2.6-1.8-5-2-8-.8zM20 6c-3-1.2-5.4-1-8 .8V19c2.6-1.8 5-2 8-.8z"/>',
    books: '<path d="M5 4h3v16H5zM10 4h3v16h-3zM15.2 4.6l2.9-.8 3.6 15.4-2.9.8z"/>',
    check: '<path d="M5 12.5l4.2 4.2L19 7"/>',
    hand: '<path d="M7 20c-2-2-3-4-3-7V9M8 12V5.5M11 11V4M14 11V4.8M17 12V7"/><path d="M4 9c1 0 2 1 2 2.5M17 12c0 4-2 8-6 8H7"/>',
    seal: '<circle cx="12" cy="12" r="6.5"/><path d="M9 12.2l2 2 4-4.2"/>',
    hands5: '<circle cx="5" cy="15" r="1.6"/><circle cx="8.5" cy="10" r="1.6"/><circle cx="12" cy="7.5" r="1.6"/><circle cx="15.5" cy="10" r="1.6"/><circle cx="19" cy="15" r="1.6"/>',
    circle: '<circle cx="12" cy="7" r="2.4"/><circle cx="6.5" cy="15" r="2.4"/><circle cx="17.5" cy="15" r="2.4"/><path d="M8.5 9.5 7.6 12.6M15.5 9.5l.9 3.1M9.2 16h5.6"/>',
    moon: '<path d="M15.5 4.5a7.8 7.8 0 1 0 4 12.8 6.6 6.6 0 0 1-4-12.8z"/>',
    sun: '<circle cx="12" cy="12" r="3.6"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>'
  };
  function badges() {
    const reads = Object.keys(S.read).length, right = Object.values(S.answered).filter(Boolean).length;
    const tasks = Object.values(S.tasks).filter(x => x === "ok").length, circles = Object.keys(S.circles || {}).length, revs = Object.keys(S.rev || {}).length;
    const everyFinger = ORDER.every(id => C.stages[id].readings.some(r => S.read[r.id]));
    return [
      { id: "read1", g: "book", c: "#39afc6", ok: reads >= 1, n: ["أول قراءة", "First reading"] },
      { id: "read10", g: "books", c: "#4daf89", ok: reads >= 10, n: ["عشر قراءات", "Ten readings"], p: [reads, 10] },
      { id: "q1", g: "check", c: "#e6af3f", ok: right >= 1, n: ["أول إجابة صحيحة", "First right answer"] },
      { id: "q10", g: "seal", c: "#d9a21b", ok: right >= 10, n: ["عشر إجابات صحيحة", "Ten right answers"], p: [right, 10] },
      { id: "fingers", g: "hands5", c: "#987bc1", ok: everyFinger, n: ["قراءة في كل إصبع", "A reading on every finger"], p: [ORDER.filter(id => C.stages[id].readings.some(r => S.read[r.id])).length, 5] },
      { id: "t1", g: "hand", c: "#ee865b", ok: tasks >= 1, n: ["أول مهمة منجزة", "First task done"] },
      { id: "t5", g: "sun", c: "#e6af3f", ok: tasks >= 5, n: ["خمس مهام منجزة", "Five tasks done"], p: [tasks, 5] },
      { id: "my10", g: "circle", c: "#39afc6", ok: myTotal() >= 10, n: ["عشر مهام يومية", "Ten daily tasks"], p: [myTotal(), 10] },
      { id: "days7", g: "moon", c: "#987bc1", ok: actDays().size >= 7, n: ["سبعة أيام على الطريق", "Seven days on the path"], p: [actDays().size, 7] }
    ];
  }
  const RANKS = [[0, ["أول الطريق", "Setting out"]], [45, ["على الدرج", "On the stairs"]], [55, ["منتصف السلّم", "Halfway up"]], [70, ["قرب القمة", "Near the top"]], [85, ["في ضوء القمة", "In the light of the summit"]]];
  function rankBlock() {
    const up = S.mix.human + S.mix.sabiq; let i = 0; RANKS.forEach((r, k) => { if (up >= r[0]) i = k; });
    const nx = RANKS[i + 1];
    return `<div class="rank"><div class="rank-steps" aria-hidden="true">${RANKS.map((r, k) => `<i class="${k <= i ? "on" : ""}"></i>`).join("")}</div>
      <div><b>${esc(RANKS[i][1][L() === "ar" ? 0 : 1])}</b>
      <span class="m">${esc(fmt(U.rankSub, { p: up }))}${nx ? " · " + esc(fmt(U.rankNext, { r: nx[1][L() === "ar" ? 0 : 1], p: nx[0] })) : ""}</span></div></div>`;
  }
  function stamp(b, i) {
    const rot = [-7, 4, -3, 6, -5, 3, -6, 5, -2][i % 9];
    return `<li class="stamp ${b.ok ? "on" : ""}" style="--c:${b.c};--r:${rot}deg">
      <svg viewBox="0 0 100 100" aria-hidden="true"><defs><filter id="ink${b.id}"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="1" seed="${i + 2}" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.4"/></filter></defs>
        <g filter="url(#ink${b.id})"><circle class="wash" cx="50" cy="50" r="40"/><circle class="r1" cx="50" cy="50" r="44"/><circle class="r2" cx="50" cy="50" r="37"/>
        <g class="gl" transform="translate(26 26) scale(2)">${GLYPH[b.g]}</g></g></svg>
      <span class="bn">${esc(b.n[L() === "ar" ? 0 : 1])}</span>${!b.ok && b.p ? `<span class="bp" dir="ltr">${Math.min(b.p[0], b.p[1])}/${b.p[1]}</span>` : ""}</li>`;
  }
  function badgeBlock() {
    const bs = badges(), got = bs.filter(b => b.ok).length;
    return `<section class="sec"><h2 class="h">${esc(u("badgesT"))}</h2>
      <p class="sub" style="margin-top:0">${esc(u("badgesSub"))}</p>
      <ul class="stamps">${bs.map(stamp).join("")}</ul></section>`;
  }
  const WEEK = 7 * 864e5;
  function weekOf(st) {
    const since = Date.now() - WEEK, inW = t => typeof t === "number" ? t >= since : (typeof t === "string" && Date.parse(t) >= since - 864e5);
    const evs = (st.ev || []).filter(e => e.t >= since);
    const readStage = {}; ORDER.forEach(id => C.stages[id].readings.forEach(r => { if (inW(st.read && st.read[r.id])) readStage[id] = (readStage[id] || 0) + 1; }));
    let chapters = 0; const chStage = {};
    Object.entries(st.bookRead || {}).forEach(([k, t]) => { if (!inW(t)) return; chapters++; const b = bookOf(k.split("#")[0]); if (b) chStage[b.stage] = (chStage[b.stage] || 0) + 1; });
    const reads = Object.values(readStage).reduce((a, b) => a + b, 0) + chapters;
    const qs = evs.filter(e => e.k === "q"), tasks = evs.filter(e => e.k === "task").length;
    const circle = Object.values(st.circles || {}).some(inW);
    const net = {}; evs.filter(e => e.k === "mv").forEach(e => { net[e.a] = (net[e.a] || 0) - e.n; net[e.b] = (net[e.b] || 0) + e.n; });
    const most = Object.keys(net).filter(k => net[k]).sort((a, b) => Math.abs(net[b]) - Math.abs(net[a]))[0] || null;
    const active = new Set(qs.map(e => e.s).concat(evs.filter(e => e.k === "task").map(e => e.s), Object.keys(readStage), Object.keys(chStage)));
    const low = ORDER.find(id => active.has(id)) || ORDER.find(id => (st.mix[id] || 0) > 0) || ORDER[0];
    const ms = C.daily.filter(d => d.stage === low), wk = Math.floor(Date.now() / WEEK);
    const doneBooks = C.books.filter(b => { const ts = b.chapters.map((c, i) => st.bookRead && st.bookRead[chKey(b, i + 1)]); return ts.every(Boolean) && inW(Math.max(...ts)); });
    return { doneBooks, reads, qn: qs.length, right: qs.filter(e => e.ok).length, tasks, circle, most, mostN: most ? net[most] : 0, low, focus: ms.length ? ms[wk % ms.length] : null, any: !!(reads || qs.length || tasks || circle) };
  }
  function weekBlock() {
    if (!S.parent) return "";
    const cell = (n, k) => `<span><b dir="ltr">${n}</b> ${esc(u(k))}</span>`;
    return `<section class="sec card week"><h2 class="h" style="font-size:22px;margin:0 0 2px">${esc(u("wkT"))}</h2><p class="sub" style="margin:0 0 10px">${esc(u("wkSub"))}</p>
      ${P.list.map(id => { const st = id === P.active ? S : loadOf(id), w = weekOf(st);
        const moved = w.most ? `<p class="wk-line"><span class="dotc" style="background:${G[w.most].color}"></span>${esc(fmt(U.wkMoved, { f: fing(w.most), s: nm(w.most) }))} · ${esc(u(w.mostN > 0 ? "wkMore" : "wkLess"))}</p>` : "";
        return `<details class="wk" ${id === P.active ? "open" : ""}><summary><b>${esc(nameOf(id, st))}</b></summary>
          ${w.any ? `<div class="wk-nums">${cell(w.reads, "wkReads")}${cell(w.qn, "wkAns")}${cell(w.right, "wkRight")}${cell(w.tasks, "wkTasks")}<span>${w.circle ? "✓" : "–"} ${esc(u("wkCircle"))}</span></div>${moved}` : `<p class="sub">${esc(u("wkQuiet"))}</p>`}
          ${w.doneBooks.map(b => `<p class="wk-line wk-book">📖 ${esc(fmt(st.gender === "f" && L() === "ar" ? UF.wkBook : U.wkBook, { b: t(b.title) }))}${b.family && b.family.q && b.family.q[0] ? ` <a href="#/book/${encodeURIComponent(b.id)}">${esc(u("famTalk"))}</a>` : ""}</p>`).join("")}
          ${w.focus ? `<div class="wk-focus"><p class="m">${esc(u("wkFocus"))} · ${esc(fmt(U.wkFocusWhy, { s: fing(w.low) + " · " + nm(w.low) }))}</p><p class="wk-m">${esc(t(w.focus))}</p></div>` : ""}</details>`; }).join("")}</section>`;
  }
  function actDays() {
    const set = new Set();
    (S.ev || []).forEach(e => e.t && set.add(dayKey(e.t)));
    Object.values(S.read || {}).forEach(v => typeof v === "number" && set.add(dayKey(v)));
    Object.keys(S.myDone || {}).forEach(d => { if (Object.values(S.myDone[d]).some(Boolean)) set.add(d); });
    Object.keys(S.eve || {}).forEach(d => set.add(d));
    return set;
  }
  function dayCount(d) {
    let n = (S.ev || []).filter(e => e.t && e.k !== "mv" && dayKey(e.t) === d).length;
    n += Object.values(S.read || {}).filter(v => typeof v === "number" && dayKey(v) === d).length;
    return n + Object.values(myDoneOn(d)).filter(Boolean).length + (S.eve && S.eve[d] ? 1 : 0);
  }
  function streak() {
    const set = actDays(); let n = 0, d = Date.parse(today());
    if (!set.has(today())) d -= 864e5;
    while (set.has(new Date(d).toISOString().slice(0, 10))) { n++; d -= 864e5; }
    return n;
  }
  const myTotal = () => Object.values(S.myDone || {}).reduce((a, o) => a + Object.values(o).filter(Boolean).length, 0);
  function dashBlock() {
    const d0 = today(), c = myCounts(d0), m = todaysMission(), ms = m ? S.tasks[m.id] : null;
    const readsT = Object.values(S.read || {}).filter(v => typeof v === "number" && dayKey(v) === d0).length;
    const ansT = (S.ev || []).filter(e => e.k === "q" && e.t && dayKey(e.t) === d0).length;
    const days = [...Array(7)].map((_, i) => new Date(Date.parse(d0) - (6 - i) * 864e5).toISOString().slice(0, 10));
    const cnt = days.map(dayCount), mx = Math.max(1, ...cnt);
    return `<section class="sec card dash compact"><div class="dash-h"><h2 class="h" style="font-size:20px;margin:0">${esc(u("dashToday"))}</h2><span class="m">${esc(fmt(U.dashStreak, { n: streak() }))}</span></div>
      <div class="dash-row"><a href="#/tasks"><b dir="ltr">${c.a + (ms === "ok" ? 1 : 0)}/${c.b + (m ? 1 : 0)}</b><span>${esc(u("myT"))}</span></a><span><b>${readsT}</b><span>${esc(u("dashReads"))}</span></span><span><b>${ansT}</b><span>${esc(u("dashAns"))}</span></span>
        <span class="dash-mini" role="img" aria-label="${esc(u("dashWeek"))}">${days.map((d, i) => `<i class="${d === d0 ? "now" : ""}" style="height:${Math.max(12, Math.round(cnt[i] / mx * 100))}%"></i>`).join("")}</span></div></section>`;
  }
  const MC = k => ({ monkey: "#c47f17", sabiq: "#f2d06a" }[k] || G[k].color);
  let scStage = null;
  function selfcheckBlock(id, withTitle) {
    const st = C.stages[id], qs = st.selfcheck || []; if (!qs.length) return "";
    const ans = (S.sc && S.sc[today()]) || {}, often = qs.filter(q => ans[q.id] === "often").length;
    return `${withTitle ? `<h2 class="h">${esc(u("scT"))}</h2>` : ""}<p class="sub">${esc(u("scSub"))}</p>
      <ul class="list sc">${qs.map(q => `<li><div class="grow"><div>${esc(t(q.q))}</div>
        <div class="seg3" role="group">${["often", "sometimes", "rarely"].map(v => `<button class="tog ${ans[q.id] === v ? "on" : ""}" data-act="sc" data-q="${esc(q.id)}" data-v="${v}" aria-pressed="${ans[q.id] === v}">${esc(u(v))}</button>`).join("")}</div></div></li>`).join("")}</ul>
      <p class="sub" style="margin-top:6px">${esc(fmt(U.scTally, { a: often, b: qs.length }))}</p>`;
  }
  function signsBlock(id) {
    const st = C.stages[id], seenToday = S.seen[today()] || {}; if (!st.signs || !st.signs.length) return "";
    return `<h3 class="h tr-h">${esc(fmt(U.signsOfNm, { s: nm(id) }))}</h3><p class="sub">${esc(fmt(U.signsSub, { f: theF(fing(id)) }))}</p>
      <ul class="list">${st.signs.map((sg, i) => { const k = id + ":" + i, on = !!seenToday[k];
        return `<li><span class="bullet" style="background:${G[id].color}"></span><span class="grow">${esc(t(sg))}</span>
        <button class="tog ${on ? "on" : ""}" data-act="seen" data-k="${k}" aria-pressed="${on}">${esc(u("noticed"))}</button></li>`; }).join("")}</ul>`;
  }
  function parentBlock(id, open) {
    const p = C.stages[id].parent; if (!p) return "";
    const paras = t(p) || []; if (!paras.length) return "";
    return `<details class="parent" ${open ? "open" : ""}><summary>${esc(u("forParents"))}</summary>${paras.map(x => `<p>${esc(x)}</p>`).join("")}</details>`;
  }
  function theF(f) { return L() === "en" && !/^the /i.test(f) ? "the " + f : f; }
  function cardTitle(id) { const f = fing(id); return fmt(U.cardOf, { f, F: f.charAt(0).toUpperCase() + f.slice(1) }); }
  function vCard(id) {
    const st = C.stages[id]; if (!st) return vMissing();
    return `<div class="wrap"><div class="noprint cardbar"><a class="back" href="#/stage/${id}">${BK()} ${esc(nm(id))}</a>
      <span class="cardbtns"><button class="small-btn" data-act="share" data-s="${id}">${esc(u("share"))}</button><button class="small-btn dark" data-act="print">${esc(u("print"))}</button></span></div>
      <article class="pcard"><header><div class="pc-brand">${esc(u("brand"))}</div><h1 class="h" style="color:${darker(id)}">${esc(cardTitle(id))}</h1>
        <div class="pc-sub">${esc(nm(id))}</div></header>
        <div class="pc-art">${hand({ chips: false, focus: id, interactive: false, sel: id })}</div>
        <ul class="list">${st.signs.map(sg => `<li><span class="bullet" style="background:${G[id].color}"></span><span class="grow">${esc(t(sg))}</span></li>`).join("")}</ul>
        ${st.climb.length ? `<h2 class="h pc-h">${esc(u("climb"))}</h2><ul class="list">${st.climb.map(c => `<li><span class="bullet" style="background:var(--viridian)"></span><span class="grow">${esc(t(c))}</span></li>`).join("")}</ul>` : ""}
        ${parentBlock(id, true)}<footer>${esc(u("cardFoot"))}</footer></article></div>`;
  }
  function vPoster() {
    const ids = ORDER.filter(id => fingerOf(id)); // little finger first: the way up
    return `<div class="wrap poster-wrap"><div class="noprint cardbar"><a class="back" href="#/tasks">${BK()} ${esc(u("tasksTab"))}</a>
      <span class="cardbtns"><button class="small-btn dark" data-act="print">${esc(u("print"))}</button></span></div>
      <article class="poster"><header><div class="pc-brand">${esc(u("brand"))}</div><h1 class="h">${esc(u("posterT"))}</h1>
        <p class="pc-sub">${esc(u("posterSub"))}</p></header>
        <div class="poster-art">${handX({ side: "L", chips: false, interactive: false })}</div>
        <div class="poster-grid">${ids.map(id => { const st = C.stages[id];
          return `<section class="pf" style="--c:${G[id].color}">${symImg(id, "pf-sym").replace(' loading="lazy"', "")}<h2><span class="dot"></span>${esc(fing(id))}<span class="pn">${esc(nm(id))}</span></h2>
            <ul>${st.signs.slice(0, 2).map(sg => `<li>${esc(t(sg))}</li>`).join("")}</ul>
            ${st.climb[0] ? `<p class="up"><b>${esc(u("climb"))}:</b> ${esc(t(st.climb[0]))}</p>` : ""}</section>`; }).join("")}</div>
        <p class="poster-phrase">${esc(u("posterPhrase"))}</p>
        <footer>${esc(u("cardFoot"))}</footer></article></div>`;
  }
  async function shareCard(id) {
    const st = C.stages[id], text = cardTitle(id) + " \u00b7 " + nm(id) + "\n" + st.signs.map(x => "\u2022 " + t(x)).join("\n");
    try { if (navigator.share) { await navigator.share({ title: cardTitle(id), text }); return; } } catch (e) { if (e && e.name === "AbortError") return; }
    try { await navigator.clipboard.writeText(text); toast(u("copied")); } catch (e) { toast(text.slice(0, 80)); }
  }
  let signIx = 0;
  function vSign(id) {
    const st = C.stages[id]; if (!st) return vMissing();
    const f = fing(id), n = st.signs.length; signIx = ((signIx % n) + n) % n;
    return `<div class="sign-view"><div class="wrap" style="padding-bottom:0"><a class="back" href="#/stage/${id}">${BK()} ${esc(nm(id))}</a></div>
      <div class="stage-hero">${hand({ chips: false, focus: id, interactive: false, sel: id })}</div>
      <div class="wrap center">
        <p class="meta" style="justify-content:center">${esc(u("signLead"))}</p>
        <h1 class="h sign-h" style="color:${darker(id)}">${esc(fmt(U.signTitle, { f: theF(f) }))}</h1>
        <div class="sign-card" aria-live="polite">${symImg(id, "sg-sym")}<p>${esc(t(st.signs[signIx]))}</p>
          <div class="sign-nav noprint"><button class="small-btn" data-act="signprev" aria-label="prev">${L() === "ar" ? "→" : "←"}</button>
          <span dir="ltr">${signIx + 1} / ${n}</span><button class="small-btn" data-act="signnext" aria-label="next">${L() === "ar" ? "←" : "→"}</button></div></div>
        ${st.climb.length ? `<p class="climb-hint"><b>${esc(u("climbHint"))}</b> ${esc(t(st.climb[signIx % st.climb.length]))}</p>` : ""}
        ${parentBlock(id, false)}
        <div class="signbtns noprint"><button class="btn ghost" data-act="share" data-s="${id}">${esc(u("share"))}</button><button class="btn ghost" data-act="print">${esc(u("print"))}</button><a class="btn ghost" href="#/card/${id}">${esc(u("card"))}</a></div>
        <ul class="list sign-all">${st.signs.map(sg => `<li><span class="bullet" style="background:${G[id].color}"></span><span class="grow">${esc(t(sg))}</span></li>`).join("")}</ul>
        <div class="fpick noprint">${ORDER.map(k => `<a href="#/sign/${k}" class="${k === id ? "on" : ""}" style="--c:${G[k].color}">${esc(fing(k))}</a>`).join("")}</div>
      </div></div>`;
  }
  function vVirtue(vid) {
    const v = findVirtue(vid); if (!v) return vMissing();
    const rd = v.reading || {}, body = (rd.body && t(rd.body)) || [];
    return `<div class="wrap article" style="--fs:${S.fs}px">
      <div class="reader-bar"><a class="back" href="#/stage/sabiq">${BK()} ${esc(u("rightT"))}</a>
        <div class="fsz" role="group" aria-label="${esc(u("textSize"))}">${ttsBtn()}<button data-act="fs" data-d="-2" aria-label="A−">A−</button><button data-act="fs" data-d="2" aria-label="A+">A+</button></div></div>
      
      <h1 class="h">${esc(t(v.name))}</h1>
      ${rd.title ? `<p class="meta" style="font-size:15px">${esc(t(rd.title))}</p>` : ""}
      <p style="color:var(--muted)">${esc(t(v.desc))}</p>
      <div class="body">${body.map(x => `<p>${esc(x)}</p>`).join("")}</div>
      ${v.practice ? `<div class="card"><b>${esc(u("practice"))}</b><p style="margin:4px 0 0">${esc(t(v.practice))}</p></div>` : ""}
      ${v.ref ? `<p class="source"><bdi>${esc(v.ref)}</bdi> <span class="verify">${esc(u("verify"))}</span></p>` : ""}
    </div>`;
  }
  function fatirQuote() {
    let q = null;
    JSON.stringify(RAW || {}, (k, v) => { if (!q && v && typeof v === "object" && v.ar && typeof v.ref === "string" && /35:32/.test(v.ref)) q = v; return v; });
    return q;
  }
  function vAbout() {
    const q = fatirQuote();
    const sec = (h, p) => `<section class="sec about-s"><h2 class="h">${esc(u(h))}</h2>${[].concat(p).map(k => `<p>${esc(u(k))}</p>`).join("")}</section>`;
    return `<div class="wrap article about"><h1 class="h" style="font-size:30px;margin:6px 0 4px">${esc(u("abT"))}</h1>
      <p class="sub">${esc(u("abSub"))}</p>
      ${q ? `<figure class="quote"><p class="qar" lang="ar" dir="rtl">${esc(q.ar)}</p>${L() === "en" && q.en ? `<p class="qen">${esc(q.en)}</p>` : ""}<figcaption class="ref"><bdi>${esc(q.ref)}</bdi>${quoteBadges(q)}<a class="src-mini" href="#/sources">${esc(u("srcLink"))}</a></figcaption></figure>` : ""}
      ${sec("abFrameT", ["abFrame1", "abFrame2"])}
      ${sec("abSummitT", "abSummit")}
      <section class="sec about-s"><h2 class="h">${esc(u("abRuleT"))}</h2><p class="about-rule">${esc(u("abRule"))}</p><p>${esc(u("abRule2"))}</p></section>
      ${sec("abMixT", "abMix")}
      <p style="margin:14px 0 0"><button class="btn ghost block" data-act="filmplay">${esc(u("filmAgain"))}</button></p>
      <div style="margin-top:14px">${parentsLink()}</div>
      ${ADU() ? `<p class="sub training-link" style="margin:8px 0 0;text-align:center"><a href="training/${L() === "en" ? "#en" : ""}" target="_blank" rel="noopener">${esc(u("trLink"))}</a></p>` : ""}
      <a class="card next" href="#/sources"><span class="tx"><b>${esc(u("srcT"))}</b></span><span class="arrow">→</span></a></div>`;
  }
  function vFaq() {
    return `<div class="wrap"><h1 class="h" style="font-size:30px;margin:6px 0 10px">${esc(u("faqT"))}</h1>
      ${C.faq.length ? C.faq.map((x, i) => `<details class="faq" ${i === 0 ? "open" : ""}><summary>${esc(t(x.q))}</summary><p>${esc(t(x.a))}</p></details>`).join("") : `<p class="sub">${esc(u("notFound"))}</p>`}
      <a class="card next" href="#/about" style="margin-top:14px"><span class="tx"><b>${esc(u("abT"))}</b><span class="m">${esc(u("abShort"))}</span></span><span class="arrow">→</span></a>
      <a class="card next" href="#/sources"><span class="tx"><b>${esc(u("srcT"))}</b><span class="m">${esc(u("srcQuran"))} · ${esc(u("srcHadith"))}</span></span><span class="arrow">→</span></a></div>`;
  }
  const REV_ADULT = ["mh-sabiq-2"];
  function revItems() {
    const m = C.muhasaba; if (!Array.isArray(m)) return null;
    const young = S.age === "4-8" || S.age === "9-14";
    return m.filter(x => !(young && REV_ADULT.includes(x.id))).map(x => ({ stage: x.stage, q: t(x.q || x.question || x) })).filter(x => x.q);
  }
  function revQs() {
    const m = C.muhasaba; if (!m) return [];
    if (Array.isArray(m)) return revItems().map(x => x.q);
    const qs = m.questions || m.items || m;
    if (Array.isArray(qs)) return qs.map(x => t(x.q || x.question || x)).filter(Boolean);
    const arr = t(qs); return Array.isArray(arr) ? arr : [];
  }
  function vReview() {
    const qs = revQs(), m = C.muhasaba || {}, done = S.rev && S.rev[today()];
    const intro = m && !Array.isArray(m) && m.intro ? t(m.intro) : u("revSub");
    return `<div class="review"><div class="wrap">
      <a class="back" href="#/me">${BK()} ${esc(u("meTab"))}</a>
      <h1 class="h">${esc(m && !Array.isArray(m) && m.title ? t(m.title) : u("revT"))} </h1>
      <p class="rev-sub">${esc(intro)}</p>
      ${(() => { const it = revItems(); if (!it || !it.some(x => x.stage && C.stages[x.stage])) return `<ol class="rev-q">${qs.map(q => `<li>${esc(q)}</li>`).join("")}</ol>`;
        return ORDER.map(id => { const g = it.filter(x => x.stage === id); return g.length ? `<h2 class="rev-st"><i style="background:${G[id].color}"></i>${esc(fing(id))} · ${esc(nm(id))}</h2><ol class="rev-q">${g.map(x => `<li>${esc(x.q)}</li>`).join("")}</ol>` : ""; }).join(""); })()}
      ${done ? `<p class="rev-thanks">${esc(u("revThanks"))}</p>` : `<button class="btn block" data-act="revdone">${esc(u("revDone"))}</button>`}
    </div></div>`;
  }
  function vMissing() { return `<div class="wrap missing"><p>${esc(u("notFound"))}</p><a class="btn" href="#/">${esc(u("home"))}</a></div>`; }

  /* ---------- router ---------- */
  function route() {
    const p = (location.hash.replace(/^#\/?/, "") || "").split("/").map(decodeURIComponent);
    if (!p[0]) return { name: "home" };
    if (p[0] === "stage") return { name: "stage", id: p[1], sec: p[2] ? "sec-" + p[2] : null };
    if (p[0] === "read") return { name: "read", id: p[1], rid: p[2] };
    if (p[0] === "quiz") return { name: "quiz", id: p[1], rid: p[2] || null };
    if (p[0] === "tasks") return { name: "tasks", id: C.stages[p[1]] ? p[1] : null, sec: p[2] ? "tr-" + p[2] : null };
    if (p[0] === "sign") return { name: "sign", id: p[1] };
    if (p[0] === "card") return { name: "card", id: p[1] };
    if (p[0] === "virtue") return { name: "virtue", id: p[1] };
    if (p[0] === "faq") return { name: "faq" };
    if (p[0] === "review") return { name: "review" };
    if (p[0] === "poster") return { name: "poster" };
    if (p[0] === "library") return { name: "library" };
    if (p[0] === "record") return { name: "record" };
    if (p[0] === "evening") return { name: "evening" };
    if (p[0] === "seen") return { name: "seen" };
    if (p[0] === "choice") return { name: "choice", id: p[1] };
    if (p[0] === "book") return p[2] ? { name: "chapter", id: p[1], n: p[2] } : { name: "book", id: p[1] };
    if (p[0] === "sources") return { name: "sources" };
    if (p[0] === "about") return { name: "about" };
    if (p[0] === "deg") return { name: "deg", id: p[1], i: p[2] };
    if (p[0] === "me") return { name: "home" };
    return { name: "missing" };
  }
  const view = document.getElementById("view");
  const ICON = {
    hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14H9.5M20 11H8M19 8h-9M17 17H10M10 8 8.5 5.5C8 4.6 6.8 4.6 6.4 5.5L5 9c-.8 2-.8 4 0 6l.5 1.2C6.3 18 8 19 10 19h4"/></svg>',
    tasks: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11M9 12h11M9 18h11"/><path d="m3.5 6 1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"/></svg>',
    me: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v8.5l6 6"/></svg>'
  };
  function ensureBooks() {
    if (booksState !== "idle") return;
    booksState = "loading";
    const el = document.createElement("script");
    el.src = "content/books.js?v=" + encodeURIComponent((RAW && RAW.version) || "1");
    el.onload = () => { if (Array.isArray(window.AKHLAQ_BOOKS)) C.books = okBooks(window.AKHLAQ_BOOKS); booksState = "ready"; render(true); };
    el.onerror = () => { booksState = "ready"; render(true); };
    document.head.appendChild(el);
  }
  // adult content is a separate file, fetched the first time an adult profile needs it
  let adultState = ADULT() ? "ready" : "idle", adultWait = [];
  function applyEdition(cb) {
    const want = S.edition === "adult" ? "adult" : "kids";
    if (want === "adult" && adultState !== "ready") {
      adultWait.push(cb || null);
      if (adultState === "idle") {
        adultState = "loading";
        const el = document.createElement("script");
        el.src = "content/content-adult.js?v=" + encodeURIComponent((RAW && RAW.version) || "1");
        const done = () => { adultState = "ready"; const w = adultWait; adultWait = []; if (S.edition === "adult" && ADULT()) { buildC("adult"); QZ = null; DQ = null; BQ = {}; } w.forEach(f => f && f()); };
        el.onload = done; el.onerror = done;
        document.head.appendChild(el);
      }
      return;
    }
    const target = want === "adult" && ADULT() ? "adult" : "kids";
    if (ED !== target) { buildC(target); QZ = null; DQ = null; BQ = {}; }
    if (cb) cb();
  }
  function render(keepScroll) {
    const r = route();
    if (["library", "book", "chapter", "stage", "me", "record"].includes(r.name) || (r.name === "home" && Object.keys(S.bookRead || {}).length)) ensureBooks();
    document.documentElement.lang = L(); document.documentElement.dir = L() === "ar" ? "rtl" : "ltr";
    document.title = u("brand"); document.body.dataset.route = r.name;
    document.documentElement.style.setProperty("--k", String(Math.max(.8, Math.min(1.7, S.fs / 19))));
    document.getElementById("brand").textContent = u("brand");
    langLabel();
    const sb = document.getElementById("setBtn"); if (sb) { sb.setAttribute("aria-label", u("settings")); sb.title = u("settings"); }
    instBtn();
    const shb = document.getElementById("shareBtn"); if (shb) { shb.setAttribute("aria-label", u("shareT")); shb.title = u("shareT"); }
    document.getElementById("langBtn").setAttribute("lang", L() === "ar" ? "en" : "ar");
    { const ab = document.getElementById("ageBtn"); if (ab) { const w = u(GRPK[GRP(S)]); ab.innerHTML = `<span>${esc(w)}</span><svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`; ab.setAttribute("aria-label", u("agT") + ": " + w); ab.title = u("agT"); } }
    const tab = r.name === "tasks" ? "tasks" : "hand";
    document.getElementById("tabs").setAttribute("aria-label", u("navMain"));
    document.getElementById("tabs").innerHTML = [["hand", "#/", "meTab"], ["tasks", "#/tasks", "tasksTab"]]
      .map(([k, h, l]) => `<a href="${h}" class="${tab === k ? "on" : ""}" ${tab === k ? 'aria-current="page"' : ""}>${ICON[k]}<span>${esc(u(l))}</span></a>`).join("");
    let h;
    switch (r.name) {
      case "home": h = vHome(); break;
      case "stage": h = vStage(r.id); break;
      case "read": h = vReader(r.id, r.rid); break;
      case "quiz": h = vQuiz(r.id, r.rid); break;
      case "tasks": h = vTasks(r.id); break;
      case "sign": h = vSign(r.id); break;
      case "card": h = vCard(r.id); break;
      case "virtue": h = vVirtue(r.id); break;
      case "faq": h = vFaq(); break;
      case "review": h = vReview(); break;
      case "poster": h = vPoster(); break;
      case "library": h = vLibrary(); break;
      case "record": h = vRecord(); break;
      case "evening": h = vEvening(); break;
      case "seen": h = vSeen(); break;
      case "choice": h = vChoice(r.id); break;
      case "book": h = vBook(r.id); break;
      case "chapter": h = vChapter(r.id, r.n); break;
      case "sources": h = vSources(); break;
      case "about": h = vAbout(); break;
      case "deg": h = vDegStory(r.id, r.i); break;
      default: h = vMissing();
    }
    const y = window.scrollY;
    view.innerHTML = h;
    { const tg = view.querySelector(".tseg"), so = tg && tg.querySelector("a.on"); if (so) { const d = so.getBoundingClientRect().left - tg.getBoundingClientRect().left - (tg.clientWidth - so.offsetWidth) / 2; tg.scrollLeft += d; } }
    if (S.parent && hasTTS() && !ttsVoice() && L() === "ar") { const rb = view.querySelector(".reader-bar"); if (rb) rb.insertAdjacentHTML("afterend", `<p class="tts-hint">${esc(u("ttsHint"))}</p>`); }
    if (!keepScroll) { view.classList.remove("fade"); void view.offsetWidth; view.classList.add("fade"); }
    if (keepScroll) window.scrollTo(0, y);
  }

  /* ---------- events ---------- */
  function act(el) {
    const a = el.dataset.act;
    if (!sheet.contains(el) && el.matches && el.matches(":focus-visible, [role=button]:focus")) rememberFocus(el);
    switch (a) {
      case "finger": if (route().name === "evening" && EVE && EVE.i === 0) {
        if (!MAPS.one.L[el.dataset.f]) break;
        EVE.f = el.dataset.f; FX("step", ORDER.indexOf(MAPS.one.L[EVE.f])); render(true); break;
      } else if (TOUR && route().name === "home") {
        if (TOUR.i < FINGERS.length && el.dataset.f === FINGERS[TOUR.i] && !TOUR.hit) { TOUR.hit = true; FX("step", TOUR.i); render(true); }
        else if (!TOUR.hit && TOUR.i < FINGERS.length) toast(fmt(u("tourTry"), { f: t(FINGER[FINGERS[TOUR.i]]) }));
        break;
      } else {
        const side = el.dataset.side || "L", f = el.dataset.f, tg = ((MAPS[MODE()][side]) || MAPS.one.L)[f];
        if (route().name === "me" && G[tg]) { location.hash = "#/tasks/" + tg; return; }
        homeSel = side + ":" + f; homeDeg = -1; FX("step", G[tg] ? ORDER.indexOf(tg) : 4);
        if (route().name === "home") render(true);
        if (G[tg]) stageSheet(tg, -1); else if (tg === "slot") slotSheet(); else if (tg === "prophets") prophetsSheet(); else virtueSheet(String(tg).slice(2), f);
        break;
      }
      case "tournext": if (TOUR) { FX("tick"); TOUR.i++; TOUR.hit = TOUR.i > FINGERS.length; render(true); } break;
      case "tourend": endTour(); break;
      case "toursay": tourSaid = ""; { const b = view.querySelector(".tour-big"), sb = view.querySelector(".tour-sub"); tourSay((b ? b.textContent : "") + (sb ? ". " + sb.textContent : "")); } break;
      case "tourstart": closeSheet(); startTour(); break;
      case "filmplay": closeSheet(); playFilm(false); break;
      case "deg": {
        const side = el.dataset.side || "L", id = el.dataset.s, f = (function () { const m = (MAPS[MODE()][side]) || MAPS.one.L; return FINGERS.find(k => m[k] === id); })();
        homeSel = side + ":" + f; homeDeg = +el.dataset.i; FX("step", Math.max(0, ORDER.indexOf(id))); if (route().name === "home") render(true); stageSheet(id, homeDeg); break;
      }
      case "settings": settingsSheet(); break;
      case "tts": ttsToggle(); break;
      case "seted": {
        const e = el.dataset.e === "adult" ? "adult" : "kids", was = S.edition === "adult" ? "adult" : "kids";
        S.edition = e; save(); if (e === was) { settingsSheet(); break; }
        homeSel = null; homeDeg = -1;
        applyEdition(() => { render(true); settingsSheet(); toast(fmt(UA.edSwitched, { e: u(e === "adult" ? "edAdult" : "edKids") })); });
        break;
      }
      case "agesheet": FX("tick"); ageSheet(); break;
      case "setgrp": {
        const g = GRPS.includes(el.dataset.g) ? el.dataset.g : "child", was = GRP(S), fromSet = !!(sheetState && sheetState.kind === "settings");
        FX("tick");
        if (g === was) { if (!fromSet) closeSheet(); break; }
        S.edition = g === "adult" ? "adult" : "kids"; if (g === "teen") S.age = "15+"; else if (S.age === "15+") S.age = "";
        save(); homeSel = null; homeDeg = -1;
        applyEdition(() => { render(true); if (fromSet) settingsAgain(); else closeSheet(); toast(fmt(U.agSwitched, { e: u(GRPK[g]) })); });
        break;
      }
      case "fxset": { const X = window.TZFX; if (!X) break; const k = el.dataset.k, v = el.dataset.v; X.set(k, k === "amb" ? v : v === "1"); if (k === "amb") FX("tick"); settingsAgain(); break; }
      case "introed": {
        const g = GRPS.includes(el.dataset.g) ? el.dataset.g : (el.dataset.e === "adult" ? "adult" : "child");
        S.edition = g === "adult" ? "adult" : "kids"; if (g === "teen") S.age = "15+"; save(); introIx = 0; FX("tick");
        applyEdition(() => { render(true); introSheet(); });
        break;
      }
      case "setage": S.age = S.age === el.dataset.a ? "" : el.dataset.a; save(); FX("tick"); render(true); settingsAgain(); break;
      case "setparentg": S.parentG = S.parentG === el.dataset.g ? "" : el.dataset.g; save(); render(true); settingsSheet(); break;
      case "setgender": S.gender = S.gender === el.dataset.g ? "" : el.dataset.g; save(); FX("tick"); render(true); settingsAgain(); break;
      case "circledone": S.circles = S.circles || {}; S.circles["w" + el.dataset.w] = today(); save(); render(true); toast(u("circleDid")); break;
      case "circlenext": circleOff++; render(true); break;
      case "circleprev": circleOff--; render(true); break;
      case "revdone": S.rev = S.rev || {}; S.rev[today()] = true; save(); render(true); break;
      case "prof": switchProfile(el.dataset.p); if (sheetState && sheetState.kind === "settings") settingsSheet(); break;
      case "profadd": if (P.list.length < PMAX) profAddSheet(); break;
      case "profadded": { const g = GRPS.includes(el.dataset.g) ? el.dataset.g : (el.dataset.e === "adult" ? "adult" : "child"); newProfile(g === "adult" ? "adult" : "kids", g === "teen" ? "15+" : ""); break; }
      case "edlinknew": newProfile(el.dataset.e === "adult" ? "adult" : "kids"); break;
      case "edlinkconv": { if (hasProgress(S)) break; const e = el.dataset.e === "adult" ? "adult" : "kids"; S.edition = e; save(); sheetState = null; closeSheet(); homeSel = null; homeDeg = -1;
        applyEdition(() => { render(true); toast(fmt(UA.edSwitched, { e: u(e === "adult" ? "edAdult" : "edKids") })); }); break; }
      case "shareapp": shareApp(ADU() ? "adult" : "kids"); break;
      case "sharesheet": shareSheet(); break;
      case "sharego": shareApp(el.dataset.e === "adult" ? "adult" : "kids"); break;
      case "sharecopy": copyText(shareUrl(el.dataset.e === "adult" ? "adult" : "kids")).then(ok => toast(ok ? u("shareCopied") : shareUrl(el.dataset.e === "adult" ? "adult" : "kids"))); break;
      case "ioshow": iosSheet(); break;
      case "instlater": try { localStorage.setItem(INSTKEY, String(Date.now())); } catch (e) {} render(true); break;
      case "swupdate": if (swWaiting) { swReload = true; try { swWaiting.postMessage({ type: "SKIP_WAITING" }); } catch (e) { location.reload(); } const b = document.getElementById("updBar"); if (b) b.remove(); } break;
      case "profdel": {
        if (P.active === "p1" || P.list.length < 2) break;
        let ok = true; try { ok = window.confirm(fmt(U.famDelQ, { n: NAME() })); } catch (e) {}
        if (!ok) break;
        const id = P.active; try { localStorage.removeItem(keyOf(id)); } catch (e) {} delete MEM[id];
        P.list = P.list.filter(x => x !== id); P.active = "p1"; saveProfiles();
        F.seen = F.seen.filter(m => m.to !== id && m.from !== id); saveFamily();
        const par = S.parent, lang = S.lang; S = loadOf("p1"); S.parent = par; S.lang = lang; render(true); settingsSheet(); break;
      }
      case "bpick": {
        const id = el.dataset.q, st = BQ[id]; if (!st || st.picked != null) return;
        const k = +el.dataset.i, ok = k === st.sq.correct; st.picked = k; let mv = null;
        if (S.answered[id] === undefined) { S.answered[id] = ok; (S.ansT = S.ansT || {})[id] = Date.now(); ev({ k: "q", s: el.dataset.s, ok }); mv = scoreQuiz(el.dataset.s, ok); mv.forEach(m => log(Object.assign({ why: u("quizWord") }, m))); save(); } else st.again = true;
        render(true); if (ok && mv) climb(mv); break;
      }
      case "sheetmore": if (sheet.querySelector(".sheet-more")) setExpanded(!sheet.classList.contains("expanded")); break;
      case "dpick": {
        if (!DQ || DQ.picked != null) return;
        const id = el.dataset.s, di = +el.dataset.d, k = +el.dataset.i, q = DQ.sq, ok = k === q.correct;
        DQ.picked = k; let mv = null;
        if (S.answered[q.id] === undefined) { S.answered[q.id] = ok; (S.ansT = S.ansT || {})[q.id] = Date.now(); ev({ k: "q", s: id, ok }); mv = scoreQuiz(id, ok); mv.forEach(m => log(Object.assign({ why: u("quizWord") }, m))); save(); }
        const top = sheet.scrollTop; sheetExpandNext = true; render(true); stageSheet(id, di); sheet.scrollTop = top;
        { const fb = sheet.querySelector(".fb"); if (fb) setTimeout(() => fb.scrollIntoView({ block: "nearest", behavior: "smooth" }), 80); }
        if (ok && mv) climb(mv); break;
      }
      case "setmap": S.map = el.dataset.m; save(); homeSel = null; homeDeg = -1; render(true); settingsSheet(); break;
      case "summit": if (TOUR && route().name === "home") { if (TOUR.i === FINGERS.length && !TOUR.hit) { TOUR.hit = true; render(true); } break; } summitSheet(); break;
      case "signnext": signIx++; render(true); break;
      case "signprev": signIx--; render(true); break;
      case "introok": S.intro = true; save(); sheetState = null; closeSheet(); if (!S.tour) startTour(); break;
      case "sc": { const d = today(); S.sc = S.sc || {}; S.sc[d] = S.sc[d] || {}; S.sc[d][el.dataset.q] = el.dataset.v; save(); render(true); break; }
      case "scstage": scStage = el.dataset.s; render(true); break;
      case "print": window.print(); break;
      case "share": shareCard(el.dataset.s); break;
      case "aloud": aloudIx = 0; aloudOn = !aloudOn; render(); window.scrollTo(0, 0); break;
      case "aloudnext": ttsStop(); aloudIx++; render(true); break;
      case "aloudprev": ttsStop(); aloudIx--; render(true); break;
      case "deggo": pendingDeg = { id: el.dataset.s, i: +el.dataset.i }; if (route().name === "home") { const pd = pendingDeg; pendingDeg = null; openDegOnHand(pd.id, pd.i); } else location.hash = "#/"; break;
      case "resetask": openSheet(`<h2 class="h">${esc(u("reset"))}</h2><p class="short">${esc(u("resetAsk"))}</p>
        <div class="row"><button class="btn ghost" data-act="close">${esc(u("resetNo"))}</button><button class="btn" data-act="resetyes">${esc(u("resetYes"))}</button></div>`, { kind: "reset" }); break;
      case "resetyes": {
        S = Object.assign(fresh(), { lang: S.lang, edition: S.edition || "" }); save(); QZ = null; BQ = {}; DQ = null; TOUR = null; homeSel = null; homeDeg = -1; introIx = 0;
        try { revealPending = !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches); } catch (e) {}
        sheetState = null; closeSheet();
        if (route().name !== "home") { pendingIntro = true; location.hash = "#/"; } else { render(); window.scrollTo(0, 0); introSheet(); }
        toast(u("resetDone")); break;
      }
      case "summitgo": pendingSummit = true; if (location.hash === "#/" || !location.hash) { pendingSummit = false; summitSheet(); } else location.hash = "#/"; break;
      case "close": closeSheet(); break;
      case "evego": FX("tick"); break;
      case "evenext": case "eveskip": {
        if (!EVE) break;
        if (EVE.i === 0 && !EVE.f) break;
        if (EVE.i === 1) { const inp = document.getElementById("eveG"); EVE.g = a === "eveskip" ? "" : String((inp && inp.value) || "").replace(/[<>{}\u0000-\u001f]/g, "").trim().slice(0, 120); }
        EVE.i = Math.min(3, EVE.i + 1); FX("tick"); render(); window.scrollTo(0, 0); break;
      }
      case "evesay": if (EVE && EVE.i === 2) { EVE.i = 3; FX("ok"); render(); window.scrollTo(0, 0); } break;
      case "evefinish": {
        if (!EVE || EVE.i !== 3 || !EVE.f || !MAPS.one.L[EVE.f]) break;
        S.eve = S.eve || {}; S.eve[today()] = Object.assign({ f: MAPS.one.L[EVE.f], t: Date.now() }, EVE.g ? { g: EVE.g } : {});
        const ks = Object.keys(S.eve).sort(); ks.slice(0, Math.max(0, ks.length - 800)).forEach(k => delete S.eve[k]);
        save(); EVE.i = 4; FX("done"); render(); window.scrollTo(0, 0); break;
      }
      case "everemind": FX("tick"); eveRemindSheet(); break;
      case "khab": FX("tick"); khSheet(); break;
      case "chpick": {
        const x = CHQ && chOf(CHQ.id), i = +el.dataset.i; if (!x || CHQ.pick != null || !x.opts[i]) break;
        CHQ.pick = i; S.chs = S.chs || {};
        if (!S.chs[x.id]) { S.chs[x.id] = { c: i }; save(); }
        FX(x.opts[i].weak ? "no" : "ok"); render(true);
        { const fb = view.querySelector(".ch-fb"); if (fb) setTimeout(() => fb.scrollIntoView({ block: "nearest", behavior: "smooth" }), 60); }
        break;
      }
      case "chagain": if (CHQ) { CHQ.pick = null; FX("tick"); render(true); { const q = view.querySelector(".ch-q"); if (q) q.scrollIntoView({ block: "start", behavior: "smooth" }); } } break;
      case "chend": {
        const x = CHQ && chOf(CHQ.id); if (!x || CHQ.pick == null) break;
        CHQ.end = true; S.chs = S.chs || {}; const rec = S.chs[x.id] || { c: CHQ.pick };
        if (!rec.t) { rec.t = Date.now(); S.chs[x.id] = rec; ev({ k: "read", s: x.stage }); save(); FX("read"); toast(u("readSaved")); } else FX("tick");
        render(); window.scrollTo(0, 0); break;
      }
      case "chrestart": if (CHQ) { CHQ.pick = null; CHQ.end = false; FX("tick"); render(); window.scrollTo(0, 0); } break;
      case "pactpick": FX("tick"); pactSheet(); break;
      case "pactset": { const tr = traitOf(el.dataset.v); if (!tr || !VKEY_RE.test(el.dataset.v)) break;
        if (F.pact && dayDiff(today(), F.pact.to) <= 0) F.past = F.past.concat([F.pact]).slice(-104);
        F.pact = { v: el.dataset.v, from: today(), to: nextFriday(today()) }; saveFamily(); FX("ok"); closeSheet(); render(true); toast(fmt(u("pactSaved"), { v: tr.label })); break; }
      case "pacthow": { if (!F.pact || !PACT_HOW.includes(el.dataset.h)) break;
        F.past = F.past.concat([Object.assign({}, F.pact, { how: el.dataset.h })]).slice(-104); delete F.pact; saveFamily(); FX("ok"); render(true); pactSheet(); break; }
      case "sawopen": FX("tick"); SAW = null; sawSheet(); break;
      case "sawto": if (P.list.includes(el.dataset.p) && el.dataset.p !== P.active) { SAW = { to: el.dataset.p, v: "" }; FX("tick"); sawSheet(); } break;
      case "sawv": if (SAW && VKEY_RE.test(el.dataset.v)) { SAW.v = SAW.v === el.dataset.v ? "" : el.dataset.v; FX("tick"); const y = sheet.scrollTop; sawSheet(); sheet.scrollTop = y; } break;
      case "sawsend": {
        if (!SAW || !P.list.includes(SAW.to)) break;
        const inp = document.getElementById("sawTx"), tx = String((inp && inp.value) || "").replace(/[<>{}\u0000-\u001f]/g, "").trim().slice(0, 120);
        if (!SAW.v && !tx) { if (inp) inp.focus(); break; }
        const now = Date.now(), m = { id: now.toString(36), from: P.active, to: SAW.to, t: now };
        if (SAW.v) m.v = SAW.v; if (tx) m.tx = tx;
        F.seen = F.seen.concat([m]).slice(-300); saveFamily(); SAW = null; FX("ok"); closeSheet(); render(true); toast(u("sawSent"), 3500); break;
      }
      case "khsave": {
        if (khToday() >= KH_MAX) { khSheet(); break; }
        S.khab = khList().concat([today()]).slice(-3000); save(); FX("ok"); closeSheet(); render(true); toast(u("khSaved")); break;
      }
      case "eveics": eveSaveIcs(); break;
      case "go": sheetState = null; closeSheet(); homeSel = null; break;
      case "seen": { FX("tick"); const d = today(); S.seen[d] = S.seen[d] || {}; S.seen[d][el.dataset.k] = !S.seen[d][el.dataset.k]; save(); render(true); break; }
      case "fs": S.fs = Math.max(15, Math.min(32, S.fs + +el.dataset.d)); save(); render(true); break;
      case "pick": {
        if (!QZ || QZ.picked != null) return;
        const q = QZ.list[QZ.i], i = +el.dataset.i, ok = i === q.correct;
        QZ.picked = i; if (ok) QZ.right++; FX(ok ? "ok" : "no");
        const r = route();
        if (S.answered[q.id] === undefined) {
          S.answered[q.id] = ok; (S.ansT = S.ansT || {})[q.id] = Date.now(); ev({ k: "q", s: r.id, ok }); QZ.moves = scoreQuiz(r.id, ok); QZ.again = false;
          QZ.moves.forEach(m => log(Object.assign({ why: u("quizWord") }, m))); save();
        } else { QZ.moves = null; QZ.again = true; }
        render(true); if (ok && QZ.moves) climb(QZ.moves); break;
      }
      case "qnext": FX("tick"); QZ.i++; QZ.picked = null; QZ.moves = null; render(); window.scrollTo(0, 0); break;
      case "qagain": QZ = null; render(); break;
      case "mytog": { const d = today(); S.myDone = S.myDone || {}; const o = S.myDone[d] = S.myDone[d] || {}; o[el.dataset.i] = !o[el.dataset.i];
        const ks = Object.keys(S.myDone).sort(); ks.slice(0, Math.max(0, ks.length - 90)).forEach(k => delete S.myDone[k]); save(); render(true); break; }
      case "mydel": S.my = myList().filter(x => x.id !== el.dataset.i); save(); render(true); break;
      case "myadd": { const inp = document.getElementById("myNew"); if (inp && myAdd(inp.value, myStage)) { save(); render(true); const n = document.getElementById("myNew"); if (n) n.focus(); } break; }
      case "mysug": { const x = SUGS()[+el.dataset.i]; if (x && myAdd(t(x), x.s)) { save(); render(true); } break; }
      case "mystage": myStage = el.dataset.s || ""; render(true); break;
      case "treject": delete S.tasks[el.dataset.t]; save(); render(true); break;
      case "tdid": case "dailydid": case "tconfirm": {
        if (S.tasks[el.dataset.t] === "ok") break;
        S.tasks[el.dataset.t] = "ok"; (S.taskT = S.taskT || {})[el.dataset.t] = Date.now(); ev({ k: "task", s: el.dataset.s }); const mv = scoreTask(el.dataset.s); FX("done");
        mv.forEach(m => log(Object.assign({ why: u("taskWord") }, m))); save(); render(true);
        if (mv[0] && !climb(mv)) toast(moveText(mv[0])); break;
      }
      case "trday": {
        const tid = el.dataset.t, sg = el.dataset.s, k = el.dataset.k, d = today();
        S.tr = S.tr || {}; S.trPts = S.trPts || {}; const arr = S.tr[tid] = (S.tr[tid] || []).slice(), ix = arr.indexOf(d);
        if (ix >= 0) { arr.splice(ix, 1); save(); FX("tick"); render(true); break; }
        arr.push(d); if (arr.length > 400) arr.splice(0, arr.length - 400); ev({ k: "tier", s: sg }); FX("done");
        let mv = [], msg = "";
        if (k === "w") { if (arr.length >= 7 && S.tasks[tid] !== "ok") { S.tasks[tid] = "ok"; (S.taskT = S.taskT || {})[tid] = Date.now(); mv = scoreTask(sg); msg = u("trWeekDone"); } else msg = fmt(U.trDayN, { n: Math.min(7, arr.length) }); }
        else { const due = Math.floor(arr.length / 7); if (due > (S.trPts[tid] || 0)) { S.trPts[tid] = due; mv = scoreTask(sg); } msg = fmt(U.trHabitDay, { s: trStreak(tid) }); }
        mv.forEach(m => log(Object.assign({ why: u("taskWord") }, m))); save(); render(true);
        if (!(mv[0] && climb(mv))) toast(msg); break;
      }
      case "bkexport": exportData(); break;
      case "movego": el.disabled = true; moveGo().finally(() => { el.disabled = false; }); break;
      case "bklater": try { localStorage.setItem(BKLATER, String(Date.now())); } catch (e) {} render(true); break;
      case "evegcal": { const el2 = document.getElementById("eveTime"); window.open(eveGcalUrl(el2 && el2.value), "_blank", "noopener"); FX("ok"); closeSheet(); break; }
      case "bkimport": { const f = document.getElementById("bkFile"); if (f) f.click(); break; }
      case "bkyes": { const d = pendingImport; if (!d) break; pendingImport = null;
        if (!restoreBackup(d)) { closeSheet(); toast(u("bkFail"), 5000); break; }
        location.replace(location.pathname + "#/"); location.reload(); break; }
      case "histback": if (history.length > 1) history.back(); else location.hash = "#/"; break;
      case "install": if (installEv) { const ie = installEv; installEv = null; try { ie.prompt(); } catch (e) {} closeSheet(); render(true); } break;
      case "pinopen": pinBuf = ""; pinErr = false; pinSheet(); break;
      case "pin": {
        const k = el.dataset.k; pinErr = false;
        if (k === "⌫") pinBuf = pinBuf.slice(0, -1); else if (pinBuf.length < 4) pinBuf += k;
        if (pinBuf.length === 4) { if (pinBuf === "1234") { S.parent = true; pinBuf = ""; sheetState = null; closeSheet(); render(true); return; } pinErr = true; pinBuf = ""; }
        pinSheet(); break;
      }
      case "parentoff": S.parent = false; render(true); break;
      case "self": { FX("tick"); const d = today(); const id = el.dataset.s; S.self[d] = id; log({ self: id }); save(); render(true); toast(u("selfSaved")); break; }
      case "reset": S = Object.assign(fresh(), { lang: S.lang }); save(); QZ = null; render(); toast(u("resetDone")); break;
    }
  }
  document.addEventListener("change", e => {
    if (e.target && e.target.id === "fxVol" && window.TZFX) { window.TZFX.set("vol", e.target.value); FX("ok"); return; }
    if (e.target && e.target.id === "profName") {
      S.name = String(e.target.value || "").replace(/[<>{}\u0000-\u001f]/g, "").trim().slice(0, 20); save(); render(true);
    }
  });
  document.addEventListener("click", e => {
    if (e.target && e.target.closest && e.target.closest(".tz-hap")) return;
    const el = e.target.closest("[data-act]");
    if (!el) { if (!sheet.hidden && !sheet.contains(e.target) && !e.target.closest(".top")) closeSheet(); return; }
    if (el.tagName !== "A") e.preventDefault();
    act(el);
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeSheet(); return; }
    if (e.key === "Enter" && e.target && e.target.id === "eveG") { e.preventDefault(); const b = document.querySelector('[data-act="evenext"]'); if (b) act(b); return; }
    if (e.key === "Enter" && e.target && e.target.id === "myNew") { e.preventDefault(); const b = document.querySelector('[data-act="myadd"]'); if (b) act(b); return; }
    if (e.key === "Tab" && !sheet.hidden && sheet.contains(document.activeElement)) {
      const fs = focusables(); if (!fs.length) return;
      const first = fs[0], last = fs[fs.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement.id === "sheetT")) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches("[data-act][role=button]")) { e.preventDefault(); act(e.target); }
  });
  scrim.addEventListener("click", closeSheet);
  if (window.visualViewport) { const vv = window.visualViewport, kb = () => document.documentElement.style.setProperty("--kb", Math.max(0, Math.round(innerHeight - vv.height - vv.offsetTop)) + "px"); vv.addEventListener("resize", kb); vv.addEventListener("scroll", kb); }
  document.addEventListener("focusin", e => { if (e.target && e.target.matches && e.target.matches(".sheet input:not([type=range]):not([type=file])")) setTimeout(() => { try { e.target.scrollIntoView({ block: "center" }); } catch (x) {} }, 300); });
  let swY = null;
  sheet.addEventListener("touchstart", e => { const r = sheet.getBoundingClientRect(); swY = (e.touches[0].clientY - r.top < 44 || sheet.scrollTop <= 0) ? e.touches[0].clientY : null; }, { passive: true });
  sheet.addEventListener("touchend", e => {
    if (swY == null) return; const dy = e.changedTouches[0].clientY - swY; swY = null;
    if (!sheet.querySelector(".sheet-more")) { if (dy > 70 && sheet.scrollTop <= 0) closeSheet(); return; }
    if (dy < -50 && !sheet.classList.contains("expanded")) setExpanded(true);
    else if (dy > 60 && sheet.scrollTop <= 0) { if (sheet.classList.contains("expanded")) setExpanded(false); else closeSheet(); }
  }, { passive: true });
  const NARROW = window.matchMedia ? matchMedia("(max-width: 340px)") : null;
  function langLabel() {
    const b = document.getElementById("langBtn"); if (!b) return;
    const full = L() === "ar" ? "English" : "العربية";
    b.textContent = NARROW && NARROW.matches ? (L() === "ar" ? "EN" : "ع") : full; b.setAttribute("aria-label", full);
  }
  if (NARROW && NARROW.addEventListener) NARROW.addEventListener("change", langLabel);
  document.getElementById("langBtn").addEventListener("click", () => {
    S.lang = L() === "ar" ? "en" : "ar"; save(); FX("tick"); render(true);
    if (sheetState && sheetState.kind === "stage") stageSheet(sheetState.s, sheetState.i);
    else if (sheetState && sheetState.kind === "summit") summitSheet();
    else if (sheetState && sheetState.kind === "pin") pinSheet();
    else if (sheetState && sheetState.kind === "intro") introSheet();
    else if (sheetState && sheetState.kind === "settings") settingsSheet();
    else if (sheetState && sheetState.kind === "virtue") virtueSheet(sheetState.v, sheetState.f);
    else if (sheetState && sheetState.kind === "slot") slotSheet();
    else if (sheetState && sheetState.kind === "prophets") prophetsSheet();
    else if (sheetState && sheetState.kind === "share") shareSheet();
    else if (sheetState && sheetState.kind === "ios") iosSheet();
    else if (sheetState && sheetState.kind === "profadd") profAddSheet();
    else if (sheetState && sheetState.kind === "age") ageSheet();
    else if (sheetState && sheetState.kind === "edlink") edLinkSheet(sheetState.ep);
    else if (sheetState && sheetState.kind === "everemind") eveRemindSheet();
    else if (sheetState && sheetState.kind === "khab") khSheet();
    else if (sheetState && sheetState.kind === "move") moveSheet(sheetState.big);
    else if (sheetState && sheetState.kind === "pact") pactSheet();
    else if (sheetState && sheetState.kind === "saw") sawSheet();
    else if (sheetState && sheetState.kind === "sawgot") sawGotSheet(sheetState.ids);
    const ub = document.getElementById("updBar"); if (ub) { ub.remove(); updateBar(); }
  });
  window.addEventListener("hashchange", () => {
    if (!sheet.hidden) { sheetState = null; sheet.hidden = true; scrim.hidden = true; document.body.classList.remove("sheet-open", "intro-open"); }
    ttsStop(); homeSel = null; homeDeg = -1; signIx = 0; aloudOn = false; render(); window.scrollTo(0, 0); view.focus({ preventScroll: true });
    { const rs = route().sec, el = rs && document.getElementById(rs); if (el) el.scrollIntoView({ block: "start" }); }
    if (pendingSummit) { pendingSummit = false; summitSheet(); }
    if (pendingDeg) { const pd = pendingDeg; pendingDeg = null; openDegOnHand(pd.id, pd.i); }
    if (pendingIntro) { pendingIntro = false; introSheet(); }
  });

  if (params.get("map") && MAPS[params.get("map")]) { S.map = params.get("map"); save(); }
  if (params.get("tour") === "1") { S.intro = true; TOUR = { i: 0, hit: false }; }
  applyEdition(boot);
  function boot() {
    render();
    const sel = params.get("sel");
    if (MOVE_IN) { S.intro = true; save(); moveIn(MOVE_IN); }
    else if (window.TZ_MOVE) moveSheet();
    else if (params.get("restore") === "1") { S.intro = true; save(); settingsSheet(); }
    else if (sel && G[sel] && route().name === "home" && fingerOf(sel)) { homeSel = "L:" + fingerOf(sel); homeDeg = params.get("deg") ? +params.get("deg") : -1; render(); stageSheet(sel, homeDeg); }
    else if (sel === "summit") summitSheet();
    else if (params.get("intro") === "0") { S.intro = true; if (params.get("tour") !== "1") S.tour = true; save(); }
    else if (!S.intro && route().name === "home") introSheet();
    setTimeout(sawCheck, 700);
    if (edLink) edLinkSheet(edLink);
    else if (edLinkNote) toast(fmt(U.linkSwitched, { p: profPhrase(P.active, S) + ((S.name || "").trim() || !ADU() ? " (" + u(ADU() ? "edAdult" : "edKids") + ")" : "") }), 4000);
  }
})();
