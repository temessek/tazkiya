/* Minimal fallback content so the app runs before content/content.js lands.
   The content session owns content/; this file is only a safety net. All items are placeholders. */
window.AKHLAQ_FALLBACK = {
  version: "fallback-0",
  stages: {
    zombie: {
      name: { ar: "سلوكيات الموتى أحياء (الزومبي)", en: "Living-dead behaviours (zombie)" },
      short: { ar: "حاضر بجسده، غائب بقلبه: لا يشعر ولا يستجيب.", en: "Present in body, absent in heart: not feeling, not responding." },
      signs: [
        { ar: "يمرّ بمن يحتاجه ولا يلتفت.", en: "Walks past someone in need without noticing." },
        { ar: "يقضي الساعات أمام الشاشة بلا شعور بالوقت.", en: "Spends hours at a screen without feeling the time." },
        { ar: "لا يجيب حين يُنادى.", en: "Does not answer when called." }
      ],
      climb: [
        { ar: "استيقظ: انظر حولك، من يحتاج شيئًا الآن؟", en: "Wake up: look around, who needs something now?" },
        { ar: "أجب أول نداء بكلمة «نعم».", en: "Answer the first call with a \"yes\"." }
      ],
      degrees: [
        { name: { ar: "الغفلة", en: "Heedless" }, desc: { ar: "لا ينتبه لما حوله.", en: "Does not notice what is around." } },
        { name: { ar: "الخمول", en: "Sluggish" }, desc: { ar: "يرى ولا يتحرك.", en: "Sees, but does not move." } },
        { name: { ar: "بداية اليقظة", en: "Stirring" }, desc: { ar: "ينتبه أحيانًا ثم يعود.", en: "Notices at times, then drifts back." } }
      ],
      readings: [
        { id: "z1", title: { ar: "الولد الذي لا يسمع", en: "The boy who didn't hear" }, minutes: 3, ages: "4-8",
          body: { ar: ["كان سامر يجلس أمام الشاشة، وأمه تناديه للعشاء مرة ثم مرتين.", "حين رفع رأسه أخيرًا كان الطعام قد برد، وكانت أخته قد رتبت المائدة وحدها.", "في الليلة التالية سمع النداء الأول، فقام، وشعر لأول مرة أن البيت يحتاجه."],
                  en: ["Samer sat at the screen while his mother called him to dinner, once, then twice.", "When he finally looked up, the food was cold and his sister had set the table alone.", "The next night he heard the first call, stood up, and felt for the first time that the house needed him."] },
          quote: null, source: { ar: "قصة قصيرة (عنصر مؤقت)", en: "Short story (placeholder)" } }
      ],
      quiz: [
        { id: "zq1", readingId: "z1", type: "comprehension", q: { ar: "ماذا تغيّر في الليلة التالية؟", en: "What changed the next night?" },
          options: [{ ar: "سمع النداء الأول وقام", en: "He heard the first call and stood up" }, { ar: "أطفأ أبوه الشاشة", en: "His father switched off the screen" }, { ar: "لم يتغير شيء", en: "Nothing changed" }],
          correct: 0, why: { ar: "اليقظة تبدأ من الاستجابة الأولى.", en: "Waking up begins with the first response." } },
        { id: "zq2", readingId: null, type: "situation", q: { ar: "رأيت جدتك تحمل أكياسًا ثقيلة. ماذا تفعل؟", en: "You see your grandmother carrying heavy bags. What do you do?" },
          options: [{ ar: "أكمل لعبتي", en: "Keep playing" }, { ar: "أقوم وأحمل عنها", en: "Get up and carry them for her" }, { ar: "أنادي غيري", en: "Call someone else" }],
          correct: 1, why: { ar: "القلب الحي يتحرك حين يرى الحاجة.", en: "A living heart moves when it sees a need." } }
      ],
      tasks: [ { id: "zt1", ar: "أجب أول نداء اليوم بـ«نعم» وقُم.", en: "Answer the first call today with \"yes\" and get up." },
               { id: "zt2", ar: "اسأل أحد أهلك: هل تحتاج مساعدة؟", en: "Ask someone at home: do you need help?" } ]
    },
    pig: {
      name: { ar: "سلوكيات الخنزير", en: "Pig behaviours" },
      short: { ar: "يدور حول ما يريد هو، ولا يرى حاجة غيره.", en: "Circles around what he wants, blind to what others need." },
      signs: [
        { ar: "يأخذ أكبر قطعة دون أن يسأل.", en: "Takes the biggest piece without asking." },
        { ar: "يريد الشيء الآن، ولو على حساب أخيه.", en: "Wants it now, even at a sibling's cost." },
        { ar: "يأكل أكثر من حاجته.", en: "Eats more than he needs." }
      ],
      climb: [ { ar: "قدّم غيرك مرة واحدة كل يوم.", en: "Put someone else first once a day." }, { ar: "اسأل قبل أن تأخذ.", en: "Ask before you take." } ],
      degrees: [
        { name: { ar: "الأخذ بلا سؤال", en: "Taking without asking" }, desc: { ar: "يمد يده إلى ما يريد.", en: "Reaches for whatever he wants." } },
        { name: { ar: "الإلحاح", en: "Insisting" }, desc: { ar: "لا يهدأ حتى ينال.", en: "Won't settle until he gets it." } },
        { name: { ar: "الالتفات للآخر", en: "Glancing at others" }, desc: { ar: "يتذكر غيره بعد أن يأخذ.", en: "Remembers others after taking." } }
      ],
      readings: [
        { id: "p1", title: { ar: "القطعة الكبرى", en: "The biggest slice" }, minutes: 3, ages: "4-8",
          body: { ar: ["جاءت الكعكة إلى المائدة، فمدّ يوسف يده إلى أكبر قطعة.", "نظر إلى أخته الصغيرة، ثم أعاد القطعة إلى الطبق وقال: اختاري أنتِ أولًا.", "كانت القطعة الصغيرة أطيب من أي كعكة أكلها."],
                  en: ["The cake came to the table and Yusuf reached for the biggest slice.", "He looked at his little sister, put it back and said: you choose first.", "The small slice tasted better than any cake he had eaten."] },
          quote: null, source: { ar: "قصة قصيرة (عنصر مؤقت)", en: "Short story (placeholder)" } }
      ],
      quiz: [
        { id: "pq1", readingId: "p1", type: "comprehension", q: { ar: "لماذا أعاد يوسف القطعة؟", en: "Why did Yusuf put the slice back?" },
          options: [{ ar: "لم تعجبه", en: "He didn't like it" }, { ar: "تذكّر أخته وقدّمها", en: "He remembered his sister and let her go first" }, { ar: "خاف من أمه", en: "He was afraid of his mother" }],
          correct: 1, why: { ar: "الالتفات إلى الآخر أول درجة في الخروج من الطمع.", en: "Noticing the other is the first step out of greed." } },
        { id: "pq2", readingId: null, type: "situation", q: { ar: "بقيت قطعة حلوى واحدة وأنتم ثلاثة. ماذا تفعل؟", en: "One sweet is left and there are three of you. What do you do?" },
          options: [{ ar: "آخذها بسرعة", en: "Grab it fast" }, { ar: "أقترح أن نقسمها", en: "Suggest we share it" }, { ar: "أخبئها لنفسي", en: "Hide it for myself" }],
          correct: 1, why: { ar: "القسمة تجعل الجميع يأكل.", en: "Sharing lets everyone eat." } }
      ],
      tasks: [ { id: "pt1", ar: "قدّم غيرك في الطعام مرة اليوم.", en: "Let someone go first at a meal today." },
               { id: "pt2", ar: "شارك لعبتك المفضلة دقائق.", en: "Share your favourite toy for a few minutes." } ]
    },
    monkey: {
      name: { ar: "سلوكيات القرد", en: "Monkey behaviours" },
      short: { ar: "لا يثبت على شيء: يقفز، ويرفع صوته، ولا يتوقف حين يُطلب منه.", en: "Never settles: jumps around, gets loud, and won't stop when asked." },
      signs: [
        { ar: "يقاطع الكلام ويرفع صوته.", en: "Interrupts and raises their voice." },
        { ar: "يغضب بسرعة ويرمي الأشياء.", en: "Loses temper fast and throws things." },
        { ar: "لا يتوقف حين يُقال له: كفى.", en: "Doesn't stop when told: enough." }
      ],
      climb: [ { ar: "إذا قيل لك «كفى» فتوقف وعدّ إلى ثلاثة.", en: "When told \"enough\", stop and count to three." }, { ar: "أكمل شيئًا واحدًا قبل أن تبدأ غيره.", en: "Finish one thing before starting another." } ],
      degrees: [
        { name: { ar: "الصخب", en: "Loudness" }, desc: { ar: "صوت عالٍ وحركة بلا هدف.", en: "Loud voice, aimless movement." } },
        { name: { ar: "سرعة الغضب", en: "Quick temper" }, desc: { ar: "يشتعل من كلمة.", en: "Flares up at a word." } },
        { name: { ar: "بداية الثبات", en: "Learning to settle" }, desc: { ar: "يتوقف أحيانًا حين يُطلب منه.", en: "Sometimes stops when asked." } }
      ],
      readings: [
        { id: "m1", title: { ar: "كفى!", en: "Enough!" }, minutes: 3, ages: "4-8",
          body: { ar: ["كانت ليلى تقفز على الأريكة وأخوها يحاول النوم.", "قال أبوها بهدوء: كفى. فتوقفت، وعدّت إلى ثلاثة، ثم جلست.", "نام أخوها، وشعرت ليلى أنها أقوى من القفز."],
                  en: ["Layla was jumping on the sofa while her brother tried to sleep.", "Her father said calmly: enough. She stopped, counted to three, and sat down.", "Her brother fell asleep, and Layla felt stronger than the jumping."] },
          quote: null, source: { ar: "قصة قصيرة (عنصر مؤقت)", en: "Short story (placeholder)" } }
      ],
      quiz: [
        { id: "mq1", readingId: "m1", type: "comprehension", q: { ar: "ماذا فعلت ليلى حين قيل لها «كفى»؟", en: "What did Layla do when told \"enough\"?" },
          options: [{ ar: "قفزت أعلى", en: "Jumped higher" }, { ar: "توقفت وعدّت إلى ثلاثة", en: "Stopped and counted to three" }, { ar: "بكت", en: "Cried" }],
          correct: 1, why: { ar: "التوقف عند الطلب قوة لا ضعف.", en: "Stopping when asked is strength, not weakness." } },
        { id: "mq2", readingId: null, type: "situation", q: { ar: "أخذ أخوك قلمك فغضبت. ماذا تفعل أولًا؟", en: "Your brother took your pen and you're angry. What do you do first?" },
          options: [{ ar: "أصرخ عليه", en: "Shout at him" }, { ar: "أتنفس وأطلبه بهدوء", en: "Breathe and ask for it calmly" }, { ar: "آخذ قلمه", en: "Take his pen" }],
          correct: 1, why: { ar: "الهدوء يردّ القلم ويحفظ الأخوّة.", en: "Calm gets the pen back and keeps the friendship." } }
      ],
      tasks: [ { id: "mt1", ar: "توقف فورًا حين يقال لك «كفى» مرة اليوم.", en: "Stop at once when told \"enough\" today." },
               { id: "mt2", ar: "أكمل واجبًا واحدًا دون أن تقوم.", en: "Finish one piece of homework without getting up." } ]
    },
    human: {
      name: { ar: "الآدمية (المسلم)", ar_f: "الآدمية (المسلمة)", en: "True humanity (the Muslim)" },
      short: { ar: "يؤدي ما عليه، ويحترم غيره، ويرجع إذا أخطأ.", en: "Does what is due, respects others, and returns when wrong." },
      signs: [
        { ar: "يعتذر إذا أخطأ.", en: "Apologises when wrong." },
        { ar: "يؤدي واجبه دون أن يُذكَّر كثيرًا.", en: "Does their duty without many reminders." },
        { ar: "يستمع حين يتكلم غيره.", en: "Listens when others speak." }
      ],
      climb: [ { ar: "زد على الواجب خيرًا صغيرًا لم يُطلب منك.", en: "Add one small good no one asked for." } ],
      degrees: [
        { name: { ar: "أداء الواجب", en: "Doing what's due" }, desc: { ar: "يفعل ما يُطلب منه.", en: "Does what is asked." } },
        { name: { ar: "الإنصاف", en: "Fairness" }, desc: { ar: "يعطي غيره حقه.", en: "Gives others their due." } },
        { name: { ar: "حسن الخلق", en: "Good manners" }, desc: { ar: "لطيف في كلامه وفعله.", en: "Kind in word and deed." } }
      ],
      readings: [
        { id: "h1", title: { ar: "الاعتذار", en: "Saying sorry" }, minutes: 2, ages: "all",
          body: { ar: ["كسر عمر كوب صديقه دون قصد.", "لم يختبئ ولم يتهم غيره، بل قال: آسف، سأعوّضك.", "صار صديقه يثق به أكثر من قبل."],
                  en: ["Omar broke his friend's cup by accident.", "He didn't hide or blame anyone. He said: sorry, I'll make it up to you.", "His friend trusted him more than before."] },
          quote: null, source: { ar: "قصة قصيرة (عنصر مؤقت)", en: "Short story (placeholder)" } }
      ],
      quiz: [
        { id: "hq1", readingId: "h1", type: "comprehension", q: { ar: "ماذا قال عمر بعد أن كسر الكوب؟", en: "What did Omar say after breaking the cup?" },
          options: [{ ar: "لم أفعل", en: "It wasn't me" }, { ar: "آسف، سأعوّضك", en: "Sorry, I'll make it up to you" }, { ar: "لا شيء", en: "Nothing" }],
          correct: 1, why: { ar: "الاعتراف بالخطأ يبني الثقة.", en: "Owning a mistake builds trust." } }
      ],
      tasks: [ { id: "ht1", ar: "اعتذر عن خطأ صغير اليوم.", en: "Apologise for one small mistake today." },
               { id: "ht2", ar: "رتّب سريرك دون أن يذكّرك أحد.", en: "Make your bed without being reminded." } ]
    },
    sabiq: {
      name: { ar: "السابق بالخيرات", en: "Racing to good" },
      short: { ar: "لا يكتفي بالواجب: يسبق إلى الخير قبل أن يُطلب منه.", en: "Not content with duty: races to good before being asked." },
      signs: [
        { ar: "يبادر بالمساعدة قبل أن تُطلب.", en: "Offers help before being asked." },
        { ar: "يفرح لنجاح غيره.", en: "Is glad at others' success." },
        { ar: "يخفي خيره ولا يتباهى.", en: "Hides their good deeds, never boasts." }
      ],
      climb: [ { ar: "النور فوق الإبهام هو نور الهداية التي أتى بها الأنبياء عليهم السلام، وبنورهم ورسالاتهم يُهتدى.", en: "The light above the thumb is the light of guidance the prophets, peace be upon them, brought; by their light and their messages we are guided." } ],
      degrees: [
        { name: { ar: "المبادرة", en: "Initiative" }, desc: { ar: "يسبق إلى الخير.", en: "Goes first to the good." } },
        { name: { ar: "الإخلاص", en: "Sincerity" }, desc: { ar: "يفعله لله لا للناس.", en: "Does it for God, not for people." } }
      ],
      readings: [
        { id: "s1", title: { ar: "ثلاثة أصناف", en: "Three kinds" }, minutes: 2, ages: "9-14",
          body: { ar: ["ذكر القرآن ثلاثة أصناف من الناس: ظالم لنفسه، ومقتصد، وسابق بالخيرات.", "السابق لا ينتظر أن يُطلب منه؛ يرى الخير فيسبق إليه."],
                  en: ["The Quran names three kinds of people: those who wrong themselves, those in the middle, and those who race to good.", "The one who races does not wait to be asked; they see the good and go first."] },
          quote: { ar: "ثُمَّ أَوْرَثْنَا الْكِتَابَ الَّذِينَ اصْطَفَيْنَا مِنْ عِبَادِنَا ۖ فَمِنْهُمْ ظَالِمٌ لِّنَفْسِهِ وَمِنْهُم مُّقْتَصِدٌ وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ بِإِذْنِ اللَّهِ", en: "Then We gave the Book as inheritance to those We chose of Our servants: among them is one who wrongs himself, one who is in the middle, and one who races ahead in good deeds by God's leave.", ref: "فاطر 32 / Fatir 35:32", verify: true },
          source: { ar: "القرآن الكريم", en: "The Quran" } }
      ],
      quiz: [
        { id: "sq1", readingId: "s1", type: "comprehension", q: { ar: "ما الذي يميز السابق بالخيرات؟", en: "What marks the one who races to good?" },
          options: [{ ar: "ينتظر حتى يُطلب منه", en: "Waits to be asked" }, { ar: "يرى الخير فيسبق إليه", en: "Sees the good and goes first" }, { ar: "يفعل الخير ليُمدح", en: "Does good to be praised" }],
          correct: 1, why: { ar: "السبق مبادرة لا انتظار.", en: "Racing is initiative, not waiting." } }
      ],
      tasks: [ { id: "st1", ar: "افعل خيرًا خفيًا اليوم لا يعرفه أحد.", en: "Do a hidden good today that no one knows of." } ]
    }
  },
  muhasaba: {
    questions: [
      { ar: "ما الخير الذي فعلته اليوم، ولو كان صغيرًا؟", en: "What good did I do today, however small?" },
      { ar: "أين أخطأت اليوم، وماذا سأفعل غدًا بدلًا منه؟", en: "Where did I slip today, and what will I do instead tomorrow?" },
      { ar: "هل أحتاج أن أعتذر لأحد، أو أن أشكر أحدًا؟", en: "Do I owe someone an apology, or a thank-you?" },
      { ar: "أي إصبع كان أقرب إليّ اليوم، وأي إصبع أريد غدًا؟", en: "Which finger was closest to me today, and which do I want tomorrow?" }
    ]
  },
  virtues: [
    { id: "salihun", name: { ar: "الصالحون", en: "The righteous" }, desc: { ar: "يصلح عمله وقلبه.", en: "Set right in deed and heart." }, ref: "النساء 69 / An-Nisa 4:69", verify: true },
    { id: "shuhada", name: { ar: "الشهداء", en: "The witnesses" }, desc: { ar: "يشهد للحق بقوله وفعله.", en: "Bear witness to the truth in word and deed." }, ref: "النساء 69 / An-Nisa 4:69", verify: true },
    { id: "siddiqun", name: { ar: "الصديقون", en: "The truthful" }, desc: { ar: "يصدق حتى يصير الصدق طبعه.", en: "So truthful it becomes their nature." }, ref: "النساء 69 / An-Nisa 4:69", verify: true },
    { id: "muqarrabun", name: { ar: "السابقون المقربون", en: "The foremost, brought near" }, desc: { ar: "يسبقون إلى الخير فيُقرَّبون.", en: "Race to good and are brought near." }, ref: "الواقعة 10–11 / Al-Waqi'ah 56:10–11", verify: true }
  ]
};
