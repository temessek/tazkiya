/* تزكية: محتوى طبعة الكبار (18+)
 * Tazkiya adult edition content. Same shape as content.js: stages.<id> replaces the children's stage whole.
 * All five stages are written (zombie, pig, monkey, human, sabiq). Draft for the author's review.
 * Quran text matched to tanzil quran-simple (api.alquran.cloud); hadith text matched to hadith-api (fawazahmed0);
 * Miskawayh and al-Ghazali quotes matched to online editions (safahat.org, ar.wikisource.org). All characters are fictional.
 * IDs start with "az-" / "ap-" / "am-" / "ah-" / "as-" / "ad" so an adult record never mixes with a children's one.
 */
window.AKHLAQ_CONTENT_ADULT = {
  version: "0.4.0-adult-draft-2026-11-24",
  stages: {},
  onboarding: [
    {
      title: { ar: "يدك سُلّم", ar_f: "يدكِ سُلّم", en: "Your hand is a ladder" },
      body: {
        ar: "هذه يدك، وهي سُلّم من الخنصر إلى الإبهام. كل إصبع مرحلة من السلوك، وكل عُقلة سمة من سماتها: تعرف السمة، ثم علاجها، ثم ما تصير إليه حين تتحول إلى خير.",
        ar_f: "هذه يدكِ، وهي سُلّم من الخنصر إلى الإبهام. كل إصبع مرحلة من السلوك، وكل عُقلة سمة من سماتها: تعرفين السمة، ثم علاجها، ثم ما تصير إليه حين تتحول إلى خير.",
        en: "This is your hand, a ladder from the little finger to the thumb. Each finger is a stage of behaviour and each joint one of its traits: you learn the trait, then its cure, then what it becomes once it turns to good."
      }
    },
    {
      title: { ar: "التزكية عمل يومي", en: "Purification is daily work" },
      body: {
        ar: "قال الله تعالى: ﴿قَدْ أَفْلَحَ مَنْ زَكَّاهَا﴾ (الشمس 91:9). تقرأ قصة أو مقالة من حياتك اليومية، وتختبر فهمك، وتبدأ بخطوة صغيرة تكررها سبعة أيام حتى تصير عادة.",
        ar_f: "قال الله تعالى: ﴿قَدْ أَفْلَحَ مَنْ زَكَّاهَا﴾ (الشمس 91:9). تقرئين قصة أو مقالة من حياتك اليومية، وتختبرين فهمك، وتبدئين بخطوة صغيرة تكررينها سبعة أيام حتى تصير عادة.",
        en: "Allah says, in meaning: whoever purifies it has succeeded (ash-Shams 91:9). You read a story or an article from everyday life, check your understanding, and begin with a small step repeated for seven days until it becomes a habit."
      }
    }
  ],
  daily: [
    { id: "ad01", stage: "zombie", ar: "لا هاتف في أول عشر دقائق بعد الاستيقاظ.", en: "No phone in the first ten minutes after waking." },
    { id: "ad02", stage: "zombie", ar: "أتأمل في صلاة اليوم معنى آية واحدة.", en: "In today's prayers, reflect on the meaning of one verse." },
    { id: "ad03", stage: "zombie", ar: "أبدأ عملي اليوم بجملة نية.", en: "Begin today's work with a sentence of intention." },
    { id: "ad04", stage: "zombie", ar: "قبل النوم أحاسب نفسي دقيقتين: ماذا قرّبني اليوم من الله، وماذا أبعدني؟", en: "Before sleep, review yourself for two minutes: what brought me closer to Allah today, and what took me further away?" }
  ]
};

/* ───────────── الخنصر: الزومبي للكبار / Living-dead behaviours, adult ───────────── */
window.AKHLAQ_CONTENT_ADULT.stages.zombie = {
  name: { ar: "سلوكيات الموتى أحياء (الزومبي)", en: "Living-dead behaviours (zombie)" },
  short: {
    ar: "سلوك الغفلة: يمضي اليوم بالعادة لا بالقصد. يعمل الجسد ويصلّي ويجالس الناس، والقلب في مكان آخر.",
    en: "The behaviour of heedlessness: the day runs on habit, not intention. The body works, prays and sits with people while the heart is somewhere else."
  },
  signs: [
    { ar: "التصفح بلا نهاية قبل النوم، ثم السهر والندم في الصباح.", en: "Endless scrolling before sleep, then a late night and regret in the morning." },
    { ar: "انتهاء يوم العمل دون تذكّر ما أُنجز فيه، ولا لماذا.", en: "The workday ends and you cannot recall what was done in it, or why." },
    { ar: "الخروج من الصلاة دون معرفة ما قُرئ فيها.", en: "Leaving the prayer without knowing what was recited in it." },
    { ar: "سماع النصيحة نفسها مرة بعد مرة، والموافقة عليها، وبقاء الحال كما هو.", en: "Hearing the same advice again and again, agreeing with it, and nothing changing." },
    { ar: "الجلوس مع الأهل والعين في الشاشة، فلا يُسمع ما يقولون.", en: "Sitting with family, eyes on a screen, not hearing what they say." }
  ],
  climb: [
    { ar: "أبدأ صباحي بالذكر قبل أي إشعار.", en: "I begin my morning with remembrance before any notification." },
    { ar: "أسأل نفسي قبل العمل: لماذا أفعله، ولوجه من؟", en: "Before a task I ask myself: why am I doing it, and for whose sake?" },
    { ar: "أقف قبل التكبير لحظة، أترك فيها ما كنت فيه.", en: "I pause for a moment before the takbir and leave behind what I was doing." },
    { ar: "أختار نصيحة واحدة سمعتها، وأعمل بها هذا الأسبوع.", en: "I choose one piece of advice I have heard and act on it this week." }
  ],
  degrees: [
    {
      name: { ar: "الغفلة", en: "Heedlessness" },
      desc: {
        ar: "يمضي اليوم بين الشاشة والعمل والنوم، ويُذكر الله فيه باللسان والقلب غائب، ولا يُحَسّ بالعمر وهو يمضي.",
        en: "The day slips by between screen, work and sleep. Allah is mentioned by the tongue while the heart is absent, and life passes unfelt."
      },
      looks: {
        ar: "تفتح الهاتف لترى الساعة، فتجد نفسك بعد نصف ساعة في مقطع لا تذكر كيف وصلت إليه. وتقف في الصلاة وذهنك في رسالة العمل.",
        ar_f: "تفتحين الهاتف لتري الساعة، فتجدين نفسك بعد نصف ساعة في مقطع لا تذكرين كيف وصلتِ إليه. وتقفين في الصلاة وذهنك في رسالة العمل.",
        en: "You open the phone to check the time and find yourself half an hour later in a clip you can't remember reaching. You stand in prayer with your mind on a work message."
      },
      story: {
        ar: [
          "خرج أحمد من صلاة العشاء، فسأله ابنه الصغير وهو يمسك يده: أي سورة قرأ الإمام يا أبي؟",
          "فكّر قليلًا فلم يتذكر. كان في الصف الأول، وذهنه طوال الصلاة في اجتماع الغد.",
          "في الليلة التالية ترك هاتفه في السيارة، ووقف قبل التكبير لحظة ينظر إلى موضع سجوده. وعند باب المسجد سبق ابنه بالجواب: قرأ الإمام سورة الضحى."
        ],
        en: [
          "Ahmad came out of the Isha prayer, and his young son, holding his hand, asked: which surah did the imam recite, Dad?",
          "He thought for a moment and could not remember. He had been in the front row, his mind on tomorrow's meeting the whole prayer.",
          "The next night he left his phone in the car, and before the takbir he stood a moment looking at the place where he would prostrate. At the mosque door he answered before his son could ask: the imam recited ad-Duha."
        ]
      },
      step: {
        ar: "قبل أن تفتح الهاتف صباحًا، قل ما كان النبي صلى الله عليه وآله وسلم يقوله إذا استيقظ: «الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ» (البخاري 6312)، ثم انظر في يومك دقيقة.",
        ar_f: "قبل أن تفتحي الهاتف صباحًا، قولي ما كان النبي صلى الله عليه وآله وسلم يقوله إذا استيقظ: «الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ» (البخاري 6312)، ثم انظري في يومك دقيقة.",
        en: "Before you open your phone in the morning, say what the Prophet, peace and blessings be upon him and his family, said on waking: «Praise be to Allah who gave us life after He had made us die, and to Him is the rising» (Bukhari 6312). Then spend one minute looking at your day."
      },
      week: {
        ar: "لا هاتف في أول عشر دقائق بعد الاستيقاظ، كل يوم. اجعلها للوضوء والذكر والنظر فيما تريد من يومك.",
        ar_f: "لا هاتف في أول عشر دقائق بعد الاستيقاظ، كل يوم. اجعليها للوضوء والذكر والنظر فيما تريدين من يومك.",
        en: "No phone in the first ten minutes after waking, every day. Give them to wudu, remembrance and thinking about what you want from your day."
      },
      habit: {
        ar: "في كل صلاة اختر آية مما تقرأ، واستحضر معناها وأنت تتلوها، حتى يصير الحضور في الصلاة عادتك.",
        ar_f: "في كل صلاة اختاري آية مما تقرئين، واستحضري معناها وأنتِ تتلينها، حتى يصير الحضور في الصلاة عادتك.",
        en: "In every prayer, choose one verse of what you recite and keep its meaning in mind as you recite it, until presence in prayer becomes your habit."
      },
      turnName: { ar: "التركيز والخشوع", en: "Focus and khushu'" },
      turn: {
        ar: "القدرة نفسها على الانغماس، التي تأخذك ساعة في التصفح، إذا وُجّهت صارت تركيزًا في العمل وخشوعًا في الصلاة. قال الله تعالى: ﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ ۝ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ﴾ (المؤمنون 23:1-2).",
        en: "The same power of absorption that takes an hour of your scrolling becomes, once directed, focus at work and khushu' in prayer. Allah says, in meaning: the believers have succeeded, those who are humble in their prayer (al-Mu'minun 23:1-2)."
      },
      turnVerify: true,
      q: {
        id: "az-d1q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "انتهيت من صلاة الظهر في مكتبك، ولا تذكر منها شيئًا لأن ذهنك كان في البريد. ما الخطوة الأقرب إلى العلاج؟",
          ar_f: "انتهيتِ من صلاة الظهر في مكتبك، ولا تذكرين منها شيئًا لأن ذهنك كان في البريد. ما الخطوة الأقرب إلى العلاج؟",
          en: "You finish the Dhuhr prayer at your desk and remember nothing of it, because your mind was on your email. Which step is closest to the cure?"
        },
        options: [
          { ar: "أؤخر الصلاة القادمة إلى البيت، حيث أكون أفرغ لها", en: "Put off the next prayer until I'm home and freer for it" },
          { ar: "قبل الصلاة القادمة أبعد الهاتف، وأقف لحظة أتذكر بين يدي من أقف", en: "Before the next prayer, put the phone away and pause to remember before Whom I stand" },
          { ar: "أعيد الصلاة نفسها الآن، لعلي أحضر فيها هذه المرة", en: "Repeat the same prayer now, hoping to be present this time" }
        ],
        why: {
          ar: "الحضور يبدأ قبل التكبير: لحظة تُفرغ فيها يديك وقلبك مما كنت فيه، وتستقبل بها الصلاة القادمة في وقتها.",
          en: "Presence starts before the takbir: a moment in which you empty your hands and heart of what you were doing, and meet the next prayer in its time."
        }
      }
    },
    {
      name: { ar: "الأذن المغلقة", en: "The closed ear" },
      desc: {
        ar: "تُسمع الموعظة والنصيحة، ويُوافَق عليها، ثم لا يتغير شيء.",
        en: "The sermon and the advice are heard and agreed with, and then nothing changes."
      },
      looks: {
        ar: "تحضر خطبة الجمعة كل أسبوع، وتعجبك، ولا تذكر موضوعها يوم السبت. وتقول لمن ينصحك «معك حق»، ثم تعود إلى ما كنت عليه.",
        ar_f: "تحضرين خطبة الجمعة كل أسبوع، وتعجبك، ولا تذكرين موضوعها يوم السبت. وتقولين لمن ينصحك «معك حق»، ثم تعودين إلى ما كنتِ عليه.",
        en: "You attend the Friday sermon every week and like it, and by Saturday you cannot recall its subject. You tell whoever advises you «you're right», then go back to what you were doing."
      },
      story: {
        ar: [
          "نصح الطبيب سميرًا أن يمشي نصف ساعة كل يوم، ونصحه صديقه أن يترك السهر، ونصحه أبوه أن يزور عمته.",
          "كان يقول لكل واحد منهم: جزاك الله خيرًا، معك حق. ومرت سنة وحاله كما هو.",
          "ثم كتب النصائح الثلاث في ورقة، واختار واحدة يبدأ بها، فزار عمته يوم الجمعة. قالت له وهي تودّعه: كنت أنتظرك منذ زمن."
        ],
        en: [
          "Samir's doctor advised him to walk half an hour a day, his friend advised him to stop staying up late, and his father advised him to visit his aunt.",
          "To each of them he said: may Allah reward you, you're right. A year went by and nothing changed.",
          "Then he wrote the three pieces of advice on a sheet of paper and chose one to begin with. On Friday he visited his aunt. As she saw him off she said: I have been waiting for you for a long time."
        ]
      },
      step: {
        ar: "اكتب في سطر واحد نصيحة سمعتها هذا الأسبوع، من خطبة أو من أحد أهلك أو زملائك، واعمل بها مرة واحدة اليوم.",
        ar_f: "اكتبي في سطر واحد نصيحة سمعتِها هذا الأسبوع، من خطبة أو من أحد أهلك أو زملائك، واعملي بها مرة واحدة اليوم.",
        en: "Write in one line a piece of advice you heard this week, from a sermon or from family or colleagues, and act on it once today."
      },
      week: {
        ar: "اسأل كل يوم شخصًا قريبًا منك: «ما الشيء الذي تحب أن أحسّنه؟»، واستمع حتى ينتهي دون أن تدافع عن نفسك.",
        ar_f: "اسألي كل يوم شخصًا قريبًا منك: «ما الشيء الذي تحب أن أحسّنه؟»، واستمعي حتى ينتهي دون أن تدافعي عن نفسك.",
        en: "Each day, ask someone close to you: «what would you like me to improve?», and listen to the end without defending yourself."
      },
      habit: {
        ar: "إذا بدأ حديث غيبة أو سخرية أو جدل لا ينفع، في مجلس أو في مجموعة محادثة، فأعرض عنه بلطف أو غيّر الموضوع، واجعل ذلك عادتك.",
        ar_f: "إذا بدأ حديث غيبة أو سخرية أو جدل لا ينفع، في مجلس أو في مجموعة محادثة، فأعرضي عنه بلطف أو غيّري الموضوع، واجعلي ذلك عادتك.",
        en: "When backbiting, mockery or pointless argument starts, in a gathering or a group chat, turn away from it gently or change the subject, and make that your habit."
      },
      turnName: { ar: "الإعراض عن اللغو", en: "Turning away from idle talk" },
      turn: {
        ar: "الأذن التي تعرف كيف تُغلَق تستطيع أن تُغلَق عن اللغو، وتنفتح لأحسن القول. قال الله تعالى: ﴿وَالَّذِينَ هُمْ عَنِ اللَّغْوِ مُعْرِضُونَ﴾ (المؤمنون 23:3).",
        en: "An ear that knows how to close can close to idle talk and open to the best of speech. Allah says, in meaning: and those who turn away from idle talk (al-Mu'minun 23:3)."
      },
      turnVerify: true,
      q: {
        id: "az-d2q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "في التقييم السنوي قال لك مديرك إن تقاريرك تتأخر، وقالها لك العام الماضي أيضًا. ما الذي يخرجك من الأذن المغلقة؟",
          en: "In your annual review your manager says your reports are late. He said the same last year. What takes you out of the closed ear?"
        },
        options: [
          { ar: "أشرح له أسباب التأخير بالتفصيل، حتى يفهم ظروفي", en: "Explain the reasons for the delay in detail, so he understands my situation" },
          { ar: "أكتب ملاحظته، وأبدأ بخطوة هذا الأسبوع، وأسأله بعد شهر", en: "Write his remark down, start one step this week, and ask him again in a month" },
          { ar: "أشكره بحرارة، وأعده أن تتحسن تقاريري من الآن", en: "Thank him warmly and promise that my reports will improve from now on" }
        ],
        why: {
          ar: "النصيحة التي تُكتب ويُعمل بها خطوةً خطوة تنتقل من الأذن إلى السلوك.",
          en: "Advice that is written down and acted on step by step moves from the ear into behaviour."
        }
      }
    },
    {
      name: { ar: "العادة العمياء", en: "Blind habit" },
      desc: {
        ar: "عادات تحكم صاحبها: يفعلها كل يوم دون أن يختارها، ولا يسأل: لماذا أفعل هذا؟",
        en: "Habits that rule their owner: done every day without being chosen, and never asking: why am I doing this?"
      },
      looks: {
        ar: "تفتح التطبيق نفسه عند كل إشارة مرور، وتؤجل الأمر الثقيل نفسه كل أسبوع، وتنام كل ليلة على المقطع الأخير.",
        ar_f: "تفتحين التطبيق نفسه عند كل إشارة مرور، وتؤجلين الأمر الثقيل نفسه كل أسبوع، وتنامين كل ليلة على المقطع الأخير.",
        en: "You open the same app at every red light, put off the same heavy task every week, and fall asleep every night on the last clip."
      },
      story: {
        ar: [
          "كانت هدى تعود من عملها متعبة، فتستلقي وتفتح الهاتف «خمس دقائق» قبل أن تبدأ أمور البيت.",
          "وكانت الدقائق الخمس تصير ساعة كل يوم، فتلوم نفسها في الليل، ثم تعيدها في الغد.",
          "فغيّرت المكان قبل أن تعتمد على العزيمة: صارت تترك الهاتف عند الباب، وتجلس عشر دقائق مع كوب شاي وأذكار المساء. وبعد شهر قالت لزوجها وهي تصبّ الشاي: هذه هي الدقائق الخمس التي كنت أبحث عنها."
        ],
        en: [
          "Huda came home from work tired, lay down and opened her phone «for five minutes» before starting on the house.",
          "The five minutes became an hour every day. She blamed herself at night, then did it again the next day.",
          "So she changed the place before relying on willpower: she left the phone by the door and sat for ten minutes with a cup of tea and the evening adhkar. A month later, pouring the tea, she told her husband: these are the five minutes I was looking for."
        ]
      },
      step: {
        ar: "راقب اليوم عادة واحدة تحكمك: متى تبدأ، وما الذي يسبقها، وماذا تريد منها حقًّا؟ واكتب ذلك في سطر.",
        ar_f: "راقبي اليوم عادة واحدة تحكمك: متى تبدأ، وما الذي يسبقها، وماذا تريدين منها حقًّا؟ واكتبي ذلك في سطر.",
        en: "Today, watch one habit that rules you: when it starts, what comes before it, and what you really want from it. Write it down in one line."
      },
      week: {
        ar: "ضع مكان تلك العادة عادة صالحة صغيرة، في الوقت نفسه والمكان نفسه، مثل أذكار المساء أو صفحة من كتاب، وعلّم كل يوم فعلتها فيه.",
        ar_f: "ضعي مكان تلك العادة عادة صالحة صغيرة، في الوقت نفسه والمكان نفسه، مثل أذكار المساء أو صفحة من كتاب، وعلّمي كل يوم فعلتِها فيه.",
        en: "Put a small good habit in its place, at the same time and in the same place, such as the evening adhkar or a page of a book, and mark each day you do it."
      },
      habit: {
        ar: "داوم على عادتك الصالحة ولو كانت قليلة، فقد قال النبي صلى الله عليه وآله وسلم: «أَحَبُّ الأَعْمَالِ أَدْوَمُهَا إِلَى اللَّهِ، وَإِنْ قَلَّ» (البخاري 6464).",
        ar_f: "داومي على عادتك الصالحة ولو كانت قليلة، فقد قال النبي صلى الله عليه وآله وسلم: «أَحَبُّ الأَعْمَالِ أَدْوَمُهَا إِلَى اللَّهِ، وَإِنْ قَلَّ» (البخاري 6464).",
        en: "Keep up your good habit, however small. The Prophet, peace and blessings be upon him and his family, said: «The deeds most loved by Allah are the most constant, even if small» (Bukhari 6464)."
      },
      turnName: { ar: "المداومة على الخير", en: "Steadiness in good" },
      turn: {
        ar: "قوة التكرار التي جعلت العادة تحكمك هي نفسها التي تثبّت الخير الصغير حتى لا يحتاج إلى جهد كل يوم. ويعرّف مسكويه الخُلُق بأنه «حالٌ للنفس داعيةٌ لها إلى أفعالها من غير فكرٍ ولا رويّة»، ويذكر أن منه ما يُكتسب بالعادة والتدرّب (تهذيب الأخلاق، المقالة الثانية).",
        en: "The same power of repetition that let a habit rule you is what makes a small good steady, until it needs no effort each day. Miskawayh defines character as «a state of the soul that moves it to its actions without thought or deliberation», and notes that some of it is acquired by habit and training (Tahdhib al-Akhlaq, second discourse)."
      },
      turnVerify: true,
      q: {
        id: "az-d3q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "كل يوم أحد تؤجل التقرير الثقيل نفسه، وتفتح بدلًا منه البريد والأخبار. ما أنفع خطوة أولى؟",
          ar_f: "كل يوم أحد تؤجلين التقرير الثقيل نفسه، وتفتحين بدلًا منه البريد والأخبار. ما أنفع خطوة أولى؟",
          en: "Every Sunday you put off the same heavy report and open your email and the news instead. What is the most useful first step?"
        },
        options: [
          { ar: "أعد نفسي أن أنهيه كله دفعة واحدة يوم الخميس", en: "Promise myself to finish all of it in one go on Thursday" },
          { ar: "ألاحظ ما يسبق التأجيل، وأبدأ بربع ساعة منه في الوقت نفسه كل يوم", en: "Notice what comes before the putting off, and start with a quarter of an hour of it at that same time each day" },
          { ar: "أنتظر حتى أجد في نفسي رغبة حقيقية في البدء", en: "Wait until I feel a real wish to begin" }
        ],
        why: {
          ar: "العادة تُعرف بما يسبقها، وتُغلب بفعل صغير يأخذ مكانها في الوقت نفسه. والرغبة تأتي في الغالب بعد البدء.",
          en: "A habit is known by what comes before it, and beaten by a small act that takes its place at the same moment. The wish to work usually comes after you begin."
        }
      }
    }
  ],
  readings: [
    {
      id: "az-r1", minutes: 4, ages: "18+",
      title: { ar: "التمرير الأخير", en: "The last scroll" },
      body: {
        ar: [
          "يعمل كريم محاسبًا في شركة كبيرة. يصل إلى البيت في السابعة، ويتعشّى مع أسرته، ثم يستلقي ليرتاح قليلًا. يفتح الهاتف على خبر، ثم على مقطع، ثم على مقطع آخر.",
          "حين يرفع رأسه تكون الساعة الواحدة بعد منتصف الليل. لا يذكر ما شاهد، ولا يشعر أنه ارتاح. ينام متأخرًا، وتفوته صلاة الفجر، ويبدأ يومه متعبًا يلوم نفسه.",
          "وفي ليلة سألته ابنته: متى قرأت آخر كتاب يا أبي؟ فلم يجد جوابًا. وفهم أن سؤالها عن الوقت أكثر منه عن الكتب: أين ذهبت الساعات التي يقول إنه لا يملكها؟",
          "في القرآن تحذير دقيق من هذه الحال: ﴿وَلَا تَكُونُوا كَالَّذِينَ نَسُوا اللَّهَ فَأَنْسَاهُمْ أَنْفُسَهُمْ﴾ (الحشر 59:19). من نسي الله نسي نفسه أيضًا: ينسى ما يريد، وما يحتاج، ومن ينتظره.",
          "قرر كريم شيئًا صغيرًا: يبقى الشاحن في الصالة، ويقرأ قبل النوم عشر صفحات. تعثّر في الأسبوع الأول ثلاث ليالٍ. وفي الشهر الثاني صار يصلّي الفجر في وقته أكثر الأيام. وذات ليلة دخلت ابنته فوجدته يطوي آخر صفحة من كتاب، فجلست بجانبه تسأله عنه."
        ],
        en: [
          "Karim works as an accountant at a large company. He gets home at seven, has dinner with his family, then lies down to rest a little. He opens his phone on a news item, then a clip, then another clip.",
          "When he looks up it is one in the morning. He cannot remember what he watched, and he does not feel rested. He sleeps late, misses the Fajr prayer, and begins his day tired and blaming himself.",
          "One night his daughter asked him: when did you last read a book, Dad? He had no answer. He understood that her question was about time more than about books: where had the hours gone that he kept saying he did not have?",
          "The Quran warns of exactly this state, meaning: do not be like those who forgot Allah, so He made them forget themselves (al-Hashr 59:19). Whoever forgets Allah forgets himself too: what he wants, what he needs, and who is waiting for him.",
          "Karim decided on something small: the charger stays in the living room, and he reads ten pages before sleep. In the first week he slipped three nights. By the second month he was praying Fajr on time most days. One night his daughter came in and found him turning the last page of a book, and she sat beside him to ask what it was about."
        ]
      },
      quote: {
        ar: "﴿وَلَا تَكُونُوا كَالَّذِينَ نَسُوا اللَّهَ فَأَنْسَاهُمْ أَنْفُسَهُمْ﴾",
        en: "Meaning (not a translation): Do not be like those who forgot Allah, so He made them forget themselves.",
        ref: "الحشر 59:19", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع آية من سورة الحشر.", en: "An original story with fictional characters, with a verse from al-Hashr." }
    },
    {
      id: "az-r2", minutes: 4, ages: "18+",
      title: { ar: "يوم عمل بلا أحد", en: "A workday with no one in it" },
      body: {
        ar: [
          "تبدأ سلوى يومها في الثامنة: بريد، ثم اجتماع، ثم مكالمة، ثم بريد. تنتقل بين عشر نوافذ مفتوحة، وتردّ على كل رسالة فور وصولها. وفي الخامسة تغلق الحاسوب منهكة.",
          "في الطريق إلى البيت تحاول أن تتذكر شيئًا واحدًا أتقنته اليوم، فلا تجد. كانت مشغولة طوال اليوم، ولم تحضر لحظة منه.",
          "أول حديث في صحيح البخاري يضع للعمل كله ميزانًا: «إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى» (البخاري 1). النية تجعل يوم العمل عبادة، والغفلة تجعله ساعات تمضي ولا تُحسب لصاحبها.",
          "جرّبت سلوى ثلاثة أشياء صغيرة: جملة نية في أول اليوم («أعمل لأكسب رزقًا حلالًا وأنفع الناس»)، ومهمة واحدة في كل مرة والنوافذ الأخرى مغلقة، ودقيقة صمت بين مهمة وأخرى تسأل فيها: ماذا أنجزت الآن؟",
          "بقي عملها بحجمه، وصار عملها هي. وصارت في المساء تعرف ماذا فعلت، ولماذا."
        ],
        en: [
          "Salwa starts her day at eight: email, then a meeting, then a call, then email. She moves between ten open windows and answers every message the moment it arrives. At five she shuts the laptop, exhausted.",
          "On the way home she tries to remember one thing she did well today, and finds none. She was busy all day, and present for not a moment of it.",
          "The first hadith in Sahih al-Bukhari gives all work a measure, meaning: actions are only by intentions, and each person has only what they intended (Bukhari 1). Intention turns a workday into worship; heedlessness turns it into hours that pass without counting for their owner.",
          "Salwa tried three small things: a sentence of intention at the start of the day («I work to earn a lawful living and to benefit people»), one task at a time with the other windows closed, and a minute of silence between tasks to ask: what have I just done?",
          "Her work stayed the same size, and became her own. In the evening she knew what she had done, and why."
        ]
      },
      quote: {
        ar: "«إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى»",
        en: "Meaning: Actions are only by intentions, and each person has only what they intended.",
        ref: "صحيح البخاري 1، عن عمر بن الخطاب", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع الحديث الأول في صحيح البخاري.", en: "An original story with fictional characters, with the first hadith in Sahih al-Bukhari." }
    },
    {
      id: "az-r3", minutes: 5, ages: "18+",
      title: { ar: "صلاة بالجسد", en: "Praying with the body" },
      body: {
        ar: [
          "قد يصلّي الإنسان سنوات بالحركات الصحيحة كلها، وقلبه في كل صلاة في مكان آخر: في حساب، أو خلاف، أو رسالة لم يرد عليها. يركع ويسجد، ثم يسلّم ولا يدري ماذا قرأ.",
          "روى عمار بن ياسر رضي الله عنه أن النبي صلى الله عليه وآله وسلم قال: «إِنَّ الرَّجُلَ لَيَنْصَرِفُ وَمَا كُتِبَ لَهُ إِلاَّ عُشْرُ صَلاَتِهِ تُسْعُهَا ثُمُنُهَا سُبُعُهَا سُدُسُهَا خُمُسُهَا رُبُعُهَا ثُلُثُهَا نِصْفُهَا» (سنن أبي داود 796). فالصلاة الواحدة تتفاوت بقدر ما حضر فيها القلب.",
          "وفي «إحياء علوم الدين» يذكر الغزالي أن المعاني التي تحيا بها الصلاة «يجمعها ست جمل وهي: حضور القلب والتفهم والتعظيم والهيبة والرجاء والحياء» (كتاب أسرار الصلاة، الباب الثالث). وأولها حضور القلب: أن يكون القلب مع ما يفعله اللسان والجسد.",
          "ويردّ الغزالي شرود القلب في الصلاة إلى سببين: شيء من الخارج يشغل السمع والبصر، وشيء من الداخل هو الهمّ الذي يملأ القلب. وعلاج الأول قطع أسباب الشغل، وعلاج الثاني أن يفهم المصلي ما يقول، وأن يخفّ تعلّق قلبه بما يشغله.",
          "خطوات عملية: ضع الهاتف بعيدًا قبل الوضوء لا بعد التكبير، وتعلّم معنى ما تحفظ من السور القصيرة، وقف قبل التكبير لحظة تتذكر فيها بين يدي من تقف. وإن شرد القلب في الصلاة فأعده بلطف، فالرجوع نفسه حضور."
        ],
        ar_f: [
          "قد يصلّي الإنسان سنوات بالحركات الصحيحة كلها، وقلبه في كل صلاة في مكان آخر: في حساب، أو خلاف، أو رسالة لم يرد عليها. يركع ويسجد، ثم يسلّم ولا يدري ماذا قرأ.",
          "روى عمار بن ياسر رضي الله عنه أن النبي صلى الله عليه وآله وسلم قال: «إِنَّ الرَّجُلَ لَيَنْصَرِفُ وَمَا كُتِبَ لَهُ إِلاَّ عُشْرُ صَلاَتِهِ تُسْعُهَا ثُمُنُهَا سُبُعُهَا سُدُسُهَا خُمُسُهَا رُبُعُهَا ثُلُثُهَا نِصْفُهَا» (سنن أبي داود 796). فالصلاة الواحدة تتفاوت بقدر ما حضر فيها القلب.",
          "وفي «إحياء علوم الدين» يذكر الغزالي أن المعاني التي تحيا بها الصلاة «يجمعها ست جمل وهي: حضور القلب والتفهم والتعظيم والهيبة والرجاء والحياء» (كتاب أسرار الصلاة، الباب الثالث). وأولها حضور القلب: أن يكون القلب مع ما يفعله اللسان والجسد.",
          "ويردّ الغزالي شرود القلب في الصلاة إلى سببين: شيء من الخارج يشغل السمع والبصر، وشيء من الداخل هو الهمّ الذي يملأ القلب. وعلاج الأول قطع أسباب الشغل، وعلاج الثاني أن يفهم المصلي ما يقول، وأن يخفّ تعلّق قلبه بما يشغله.",
          "خطوات عملية: ضعي الهاتف بعيدًا قبل الوضوء لا بعد التكبير، وتعلّمي معنى ما تحفظين من السور القصيرة، وقفي قبل التكبير لحظة تتذكرين فيها بين يدي من تقفين. وإن شرد القلب في الصلاة فأعيديه بلطف، فالرجوع نفسه حضور."
        ],
        en: [
          "A person may pray for years with every movement correct, while in each prayer the heart is somewhere else: in a sum, a quarrel, or a message not yet answered. They bow and prostrate, then give the salam without knowing what they recited.",
          "Ammar ibn Yasir, may Allah be pleased with him, reported that the Prophet, peace and blessings be upon him and his family, said, in meaning: a man may finish his prayer with only a tenth of it recorded for him, a ninth, an eighth, a seventh, a sixth, a fifth, a quarter, a third, a half (Sunan Abi Dawud 796). One and the same prayer differs by how much of the heart was present in it.",
          "In «The Revival of the Religious Sciences», al-Ghazali says the meanings that give a prayer its life «are gathered in six: presence of heart, understanding, reverence, awe, hope and shame before Allah» (Book of the Secrets of Prayer, chapter three). The first is presence of heart: the heart being with what the tongue and body are doing.",
          "Al-Ghazali traces the heart's wandering in prayer to two causes: something outside that occupies the ears and eyes, and something inside, the worry that fills the heart. The cure for the first is to cut off what distracts; the cure for the second is to understand what one is saying, and to loosen the heart's hold on what occupies it.",
          "Practical steps: put the phone away before wudu, not after the takbir; learn the meaning of the short surahs you know; and pause before the takbir to remember before Whom you stand. If the heart wanders during the prayer, bring it back gently: coming back is itself presence."
        ]
      },
      quote: {
        ar: "«إِنَّ الرَّجُلَ لَيَنْصَرِفُ وَمَا كُتِبَ لَهُ إِلاَّ عُشْرُ صَلاَتِهِ تُسْعُهَا ثُمُنُهَا سُبُعُهَا سُدُسُهَا خُمُسُهَا رُبُعُهَا ثُلُثُهَا نِصْفُهَا»",
        en: "Meaning: A man may finish his prayer with only a tenth of it recorded for him, a ninth, an eighth, a seventh, a sixth, a fifth, a quarter, a third, a half.",
        ref: "سنن أبي داود 796، عن عمار بن ياسر", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "سنن أبي داود 796، وإحياء علوم الدين للغزالي (كتاب أسرار الصلاة، الباب الثالث).", en: "Sunan Abi Dawud 796, and al-Ghazali's Ihya 'Ulum al-Din (Book of the Secrets of Prayer, chapter three)." }
    },
    {
      id: "az-r4", minutes: 3, ages: "18+",
      title: { ar: "دفتر المحاضرات", en: "The notebook of lectures" },
      body: {
        ar: [
          "عند ريم دفتر أنيق تكتب فيه كل درس تحضره وكل محاضرة تسمعها: عن الصبر، وبرّ الوالدين، وحفظ اللسان، وقيام الليل. امتلأ الدفتر في ثلاث سنوات.",
          "وفي يوم أرادت أن تنصح صديقتها، ففتحت الدفتر تبحث عن كلمة في الصبر، ثم توقفت عند سؤال: كم نصيحة من هذه الصفحات عملتُ بها؟",
          "في القرآن وصف لمن ينتفع بما يسمع: ﴿الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ فَيَتَّبِعُونَ أَحْسَنَهُ ۚ أُولَٰئِكَ الَّذِينَ هَدَاهُمُ اللَّهُ﴾ (الزمر 39:18). فالهداية في الآية لمن سمع ثم اتّبع.",
          "فغيّرت ريم طريقتها: تكتب في الأسبوع نصيحة واحدة في رأس صفحة جديدة، وتحتها سبعة أسطر، تكتب في كل سطر ما فعلته بها في ذلك اليوم. صار الدفتر أبطأ امتلاءً، وصارت هي أسرع تغيّرًا."
        ],
        en: [
          "Reem has an elegant notebook where she writes down every lesson she attends and every lecture she hears: on patience, honouring parents, guarding the tongue, the night prayer. In three years the notebook filled up.",
          "One day she wanted to advise a friend and opened the notebook to find something on patience. Then she stopped at a question: how many of these pages have I acted on?",
          "The Quran describes those who benefit from what they hear, meaning: those who listen to speech and follow the best of it; they are the ones Allah has guided (az-Zumar 39:18). In the verse, guidance belongs to those who hear and then follow.",
          "So Reem changed her method: each week she writes one piece of advice at the top of a new page, with seven lines beneath it, and on each line she writes what she did with it that day. The notebook now fills more slowly, and she changes more quickly."
        ]
      },
      quote: {
        ar: "﴿الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ فَيَتَّبِعُونَ أَحْسَنَهُ ۚ أُولَٰئِكَ الَّذِينَ هَدَاهُمُ اللَّهُ﴾",
        en: "Meaning (not a translation): Those who listen to speech and follow the best of it; they are the ones Allah has guided.",
        ref: "الزمر 39:18", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع آية من سورة الزمر.", en: "An original story with fictional characters, with a verse from az-Zumar." }
    },
    {
      id: "az-r5", minutes: 5, ages: "18+",
      title: { ar: "العادات التي تحكمنا", en: "The habits that rule us" },
      body: {
        ar: [
          "أكثر ما نفعله في اليوم لا نقرره: نمسك الهاتف حين نملّ، ونؤجل حين نقلق، ونأكل حين نتعب. تبدأ العادة اختيارًا، ثم تتكرر حتى تصير هي التي تختار.",
          "وقد عرّف مسكويه الخُلُق بأنه «حالٌ للنفس داعيةٌ لها إلى أفعالها من غير فكرٍ ولا رويّة» (تهذيب الأخلاق، المقالة الثانية)، وذكر أن منه ما يكون بالطبع، ومنه ما يُكتسب بالعادة والتدرّب حتى يصير خُلقًا. وهذا خبر طيب: ما صنعته العادة تستطيع العادة أن تغيّره.",
          "وفي «إحياء علوم الدين» (كتاب رياضة النفس) يقرر الغزالي أن الأخلاق تقبل التغيير بالمجاهدة، وأن طريقها أن يتكلّف الإنسان الأفعال التي تصدر عن الخلق المطلوب، ويداوم عليها حتى تصير له طبعًا. ومثاله عنده: من أراد خُلق الجود تكلّف بذل المال حتى يصير الجود طبعه. وعلى مثاله يتكلّف الذكرَ من طالت غفلته، حتى يسهل عليه.",
          "والقرآن يضع القاعدة الكبرى: ﴿إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ﴾ (الرعد 13:11). التغيير يبدأ من الداخل، ويظهر في الأفعال الصغيرة المتكررة.",
          "طريقة عملية: اختر عادة واحدة لا كل العادات. لاحظ ما يسبقها (الملل، التعب، إشعار)، وضع في مكانها فعلًا صالحًا صغيرًا في الوقت نفسه، وغيّر المكان حين تستطيع: الهاتف خارج الغرفة، والمصحف على الطاولة. ثم داوم، فالقليل الدائم أقوى من الكثير المنقطع."
        ],
        ar_f: [
          "أكثر ما نفعله في اليوم لا نقرره: نمسك الهاتف حين نملّ، ونؤجل حين نقلق، ونأكل حين نتعب. تبدأ العادة اختيارًا، ثم تتكرر حتى تصير هي التي تختار.",
          "وقد عرّف مسكويه الخُلُق بأنه «حالٌ للنفس داعيةٌ لها إلى أفعالها من غير فكرٍ ولا رويّة» (تهذيب الأخلاق، المقالة الثانية)، وذكر أن منه ما يكون بالطبع، ومنه ما يُكتسب بالعادة والتدرّب حتى يصير خُلقًا. وهذا خبر طيب: ما صنعته العادة تستطيع العادة أن تغيّره.",
          "وفي «إحياء علوم الدين» (كتاب رياضة النفس) يقرر الغزالي أن الأخلاق تقبل التغيير بالمجاهدة، وأن طريقها أن يتكلّف الإنسان الأفعال التي تصدر عن الخلق المطلوب، ويداوم عليها حتى تصير له طبعًا. ومثاله عنده: من أراد خُلق الجود تكلّف بذل المال حتى يصير الجود طبعه. وعلى مثاله يتكلّف الذكرَ من طالت غفلته، حتى يسهل عليه.",
          "والقرآن يضع القاعدة الكبرى: ﴿إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ﴾ (الرعد 13:11). التغيير يبدأ من الداخل، ويظهر في الأفعال الصغيرة المتكررة.",
          "طريقة عملية: اختاري عادة واحدة لا كل العادات. لاحظي ما يسبقها (الملل، التعب، إشعار)، وضعي في مكانها فعلًا صالحًا صغيرًا في الوقت نفسه، وغيّري المكان حين تستطيعين: الهاتف خارج الغرفة، والمصحف على الطاولة. ثم داومي، فالقليل الدائم أقوى من الكثير المنقطع."
        ],
        en: [
          "Most of what we do in a day we never decide: we reach for the phone when bored, put things off when anxious, eat when tired. A habit begins as a choice, then repeats until it does the choosing.",
          "Miskawayh defined character as «a state of the soul that moves it to its actions without thought or deliberation» (Tahdhib al-Akhlaq, second discourse), and noted that some of it is natural and some is acquired by habit and training until it becomes character. That is good news: what habit has made, habit can change.",
          "In the Ihya (Book of Disciplining the Soul), al-Ghazali holds that character can be changed by striving, and that the way is to take on, with effort, the actions that flow from the character you want, and keep at them until they become natural. His example: whoever wants the trait of generosity makes himself give money until generosity becomes his nature. In the same way, someone long absent from remembrance makes himself remember, until it comes easily.",
          "The Quran sets the great rule, meaning: Allah does not change the condition of a people until they change what is in themselves (ar-Ra'd 13:11). Change begins inside and shows in small, repeated actions.",
          "A practical way: choose one habit, not all of them. Notice what comes before it (boredom, tiredness, a notification), put a small good act in its place at the same time, and change the setting when you can: the phone out of the room, the mushaf on the table. Then keep going, for a little done constantly is stronger than a lot done and dropped."
        ]
      },
      quote: {
        ar: "﴿إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ﴾",
        en: "Meaning (not a translation): Allah does not change the condition of a people until they change what is in themselves.",
        ref: "الرعد 13:11", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "تهذيب الأخلاق لمسكويه (المقالة الثانية)، وإحياء علوم الدين للغزالي (كتاب رياضة النفس)، والقرآن الكريم، الرعد 13:11.", en: "Miskawayh's Tahdhib al-Akhlaq (second discourse), al-Ghazali's Ihya 'Ulum al-Din (Book of Disciplining the Soul), and the Quran, ar-Ra'd 13:11." }
    },
    {
      id: "az-r6", minutes: 3, ages: "18+",
      title: { ar: "على المائدة، والعين في الشاشة", en: "At the table, eyes on the screen" },
      body: {
        ar: [
          "كانت مريم، ابنة خالد ذات العشر سنوات، تحكي له على العشاء عن صديقتها التي انتقلت إلى مدرسة أخرى. وكان خالد يقول: «همم»، وعيناه في هاتفه.",
          "وفي الأسبوع التالي سألها عن صديقتها، فقالت: «حكيت لك من قبل». وصارت بعدها تحكي لأمها وحدها. لاحظ خالد ذلك بعد شهر، وأحزنه أكثر مما توقع.",
          "قال النبي صلى الله عليه وآله وسلم: «كُلُّكُمْ رَاعٍ، وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ»، وذكر فيه: «وَالرَّجُلُ رَاعٍ فِي أَهْلِهِ وَهْوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالْمَرْأَةُ رَاعِيَةٌ فِي بَيْتِ زَوْجِهَا وَمَسْئُولَةٌ عَنْ رَعِيَّتِهَا» (البخاري 893). والرعاية تبدأ بأن يكون الراعي حاضرًا.",
          "اتفق خالد مع أسرته على قاعدة بسيطة: سلّة عند باب المطبخ توضع فيها الهواتف وقت الطعام، وهاتفه أولها. وفي الليلة الأولى سأل مريم عن صديقتها، واستمع حتى أنهت حكايتها."
        ],
        en: [
          "Maryam, Khalid's ten-year-old daughter, was telling him at dinner about her friend who had moved to another school. Khalid kept saying «mm», his eyes on his phone.",
          "The next week he asked her about the friend, and she said: «I told you already». After that she told only her mother. Khalid noticed a month later, and it hurt him more than he expected.",
          "The Prophet, peace and blessings be upon him and his family, said: «Each of you is a shepherd, and each of you is responsible for his flock», and in it: «a man is a shepherd over his family and responsible for his flock, and a woman is a shepherd in her husband's house and responsible for her flock» (Bukhari 893). Caring for a flock begins with the shepherd being present.",
          "Khalid agreed a simple rule with his family: a basket by the kitchen door where phones go at mealtimes, his first. On the first night he asked Maryam about her friend, and listened until she had finished."
        ]
      },
      quote: {
        ar: "«كُلُّكُمْ رَاعٍ، وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ»",
        en: "Meaning: Each of you is a shepherd, and each of you is responsible for his flock.",
        ref: "صحيح البخاري 893، عن ابن عمر", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع حديث في صحيح البخاري.", en: "An original story with fictional characters, with a hadith in Sahih al-Bukhari." }
    },
    {
      id: "az-r7", summit: true, minutes: 3, ages: "18+",
      title: { ar: "القمة: في مهنة أهله", en: "The summit: at the service of his household" },
      body: {
        ar: [
          "سُئلت السيدة عائشة رضي الله عنها: ما كان النبي صلى الله عليه وآله وسلم يصنع في بيته؟ فقالت: «كَانَ يَكُونُ فِي مِهْنَةِ أَهْلِهِ (تَعْنِي خِدْمَةَ أَهْلِهِ) فَإِذَا حَضَرَتِ الصَّلاَةُ خَرَجَ إِلَى الصَّلاَةِ» (البخاري 676).",
          "في هذا الخبر القصير صورة الحضور الكامل: في البيت حاضر مع أهله، يخدمهم بيده، وفي الصلاة حاضر مع ربه. البيت لا يأخذه من الصلاة، والعبادة لا تأخذه من أهله.",
          "وفي الغفلة يتوزّع الإنسان على غير مكانه: يفكر في العمل وهو في البيت، وفي البيت وهو في الصلاة. أما هدي النبي صلى الله عليه وآله وسلم فأن يكون الإنسان كله حيث هو.",
          "سؤال للتأمل: في أي مكان من يومك يحضر جسدك وحده؟ وما الخطوة التي تعيد إليه قلبك؟"
        ],
        en: [
          "Lady Aisha, may Allah be pleased with her, was asked what the Prophet, peace and blessings be upon him and his family, did at home. She said: «He would be at the service of his household, and when the time of prayer came he went out to the prayer» (Bukhari 676).",
          "This short report holds a picture of full presence: at home, present with his family, serving them with his own hands; at prayer, present with his Lord. Home did not take him from the prayer, and worship did not take him from his family.",
          "In heedlessness a person is spread across places other than where they are: thinking of work at home, and of home in the prayer. The way of the Prophet, peace and blessings be upon him and his family, is for a person to be wholly where they are.",
          "A question to reflect on: where in your day is only your body present? And what step brings your heart back there?"
        ]
      },
      quote: {
        ar: "«كَانَ يَكُونُ فِي مِهْنَةِ أَهْلِهِ (تَعْنِي خِدْمَةَ أَهْلِهِ) فَإِذَا حَضَرَتِ الصَّلاَةُ خَرَجَ إِلَى الصَّلاَةِ»",
        en: "Meaning: He would be at the service of his household, and when the time of prayer came he went out to the prayer.",
        ref: "صحيح البخاري 676، عن عائشة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "حديث في صحيح البخاري.", en: "A hadith in Sahih al-Bukhari." }
    },
    {
      id: "az-r8", companions: true, minutes: 4, ages: "18+",
      title: { ar: "حنظلة: البيت والعمل والذكر", en: "Hanzala: home, work and remembrance" },
      body: {
        ar: [
          "كان حنظلة الأسيدي رضي الله عنه من كتّاب النبي صلى الله عليه وآله وسلم. لقيه أبو بكر رضي الله عنه يومًا فسأله: كيف أنت يا حنظلة؟ فقال: «نَافَقَ حَنْظَلَةُ».",
          "وشرح سبب خوفه: يكونون عند النبي صلى الله عليه وآله وسلم يذكّرهم بالنار والجنة حتى كأنهم يرونهما، فإذا خرجوا «عَافَسْنَا الأَزْوَاجَ وَالأَوْلاَدَ وَالضَّيْعَاتِ فَنَسِينَا كَثِيرًا»، أي انشغلوا بالأزواج والأولاد والأرزاق. فقال أبو بكر إنه يجد مثل ذلك.",
          "فذهبا إلى النبي صلى الله عليه وآله وسلم، وأخبره حنظلة، فقال: «وَالَّذِي نَفْسِي بِيَدِهِ إِنْ لَوْ تَدُومُونَ عَلَى مَا تَكُونُونَ عِنْدِي وَفِي الذِّكْرِ لَصَافَحَتْكُمُ الْمَلاَئِكَةُ عَلَى فُرُشِكُمْ وَفِي طُرُقِكُمْ، وَلَكِنْ يَا حَنْظَلَةُ سَاعَةً وَسَاعَةً»، ثلاث مرات (صحيح مسلم 2750).",
          "يعرف هذا الحديثَ كلُّ من له زوج وأولاد وعمل ومال: مشاغل حلال تأخذ القلب. وأبقى النبي صلى الله عليه وآله وسلم حنظلة في بيته وعمله، وطمأنه أن للقلب ساعات. وما فعله حنظلة أول الطريق: لاحظ تغيّر قلبه، وخاف عليه، وذهب يسأل.",
          "فلتكن لك ساعتك: وقت ثابت في يومك، ولو قصيرًا، للذكر والقرآن والمحاسبة، يُرجَع إليه من بين المشاغل كما يرجع المسافر إلى بيته."
        ],
        en: [
          "Hanzala al-Usayyidi, may Allah be pleased with him, was one of the Prophet's scribes. Abu Bakr, may Allah be pleased with him, met him one day and asked: how are you, Hanzala? He said: «Hanzala has become a hypocrite.»",
          "He explained his fear: they would be with the Prophet, peace and blessings be upon him and his family, who reminded them of the Fire and Paradise until it was as if they saw them; then they went out «and busied ourselves with wives, children and livelihoods, and forgot much». Abu Bakr said he found the same in himself.",
          "They went to the Prophet, peace and blessings be upon him and his family, and Hanzala told him. He said, in meaning: «By the One in whose hand is my soul, if you remained as you are with me and in remembrance, the angels would shake your hands on your beds and in your streets. But, Hanzala, a time and a time», three times (Sahih Muslim 2750).",
          "Anyone with a spouse, children, work and money knows this hadith: lawful concerns that take hold of the heart. The Prophet kept Hanzala in his home and his work, and reassured him that the heart has its hours. What Hanzala did is the start of the road: he noticed his heart had changed, feared for it, and went to ask.",
          "So keep your own hour: a fixed time in your day, however short, for remembrance, Quran and self-review, to come back to from among your concerns as a traveller comes home."
        ]
      },
      quote: {
        ar: "«يَا حَنْظَلَةُ سَاعَةً وَسَاعَةً»",
        en: "Meaning: Hanzala, a time for this and a time for that.",
        ref: "صحيح مسلم 2750 (ترقيم sunnah.com: الكتاب 50، الحديث 14)، عن حنظلة الأسيدي", checked: "hadith-api (fawazahmed0), ara-muslim 6966", verify: true
      },
      source: { ar: "حديث في صحيح مسلم.", en: "A hadith in Sahih Muslim." }
    }
  ],
  quiz: [
    {
      id: "az-q1", readingId: "az-r1", type: "comprehension", correct: 0,
      q: { ar: "ما الذي جعل كريمًا يتوقف ويراجع لياليه؟", en: "What made Karim stop and look at his nights?" },
      options: [
        { ar: "سؤال ابنته: متى قرأت آخر كتاب؟", en: "His daughter's question: when did you last read a book?" },
        { ar: "فوات صلاة الفجر عليه مرة بعد مرة", en: "Missing the Fajr prayer time after time" },
        { ar: "ملاحظة من مديره عن تعبه في العمل", en: "A remark from his manager about how tired he looked at work" }
      ],
      why: { ar: "سؤال بسيط من ابنته كشف له أين تذهب ساعاته. واليقظة كثيرًا ما تبدأ بسؤال صادق.", en: "A simple question from his daughter showed him where his hours were going. Waking often begins with an honest question." }
    },
    {
      id: "az-q2", readingId: "az-r1", type: "situation", correct: 1,
      q: {
        ar: "تقول لنفسك كل ليلة: خمس دقائق فقط على الهاتف، ثم تمر ساعة. أي خطوة تشبه ما فعله كريم؟",
        ar_f: "تقولين لنفسك كل ليلة: خمس دقائق فقط على الهاتف، ثم تمر ساعة. أي خطوة تشبه ما فعله كريم؟",
        en: "Every night you tell yourself: just five minutes on the phone, and an hour goes by. Which step is like what Karim did?"
      },
      options: [
        { ar: "أحذف التطبيقات كلها الليلة، وأبدأ صفحة جديدة من الغد", en: "Delete every app tonight and start afresh tomorrow" },
        { ar: "أترك الشاحن في الصالة، وأقرأ صفحات قليلة قبل النوم", en: "Leave the charger in the living room and read a few pages before sleep" },
        { ar: "أضبط منبّهين للفجر، حتى لا تفوتني الصلاة مهما سهرت", en: "Set two alarms for Fajr, so I don't miss it however late I stay up" }
      ],
      why: { ar: "خطوة كريم الصغيرة غيّرت المكان والعادة معًا، فثبتت. والمنبّه الإضافي يعالج الأثر ويترك السبب في مكانه.", en: "Karim's small step changed the setting and the habit together, so it held. An extra alarm treats the effect and leaves the cause where it was." }
    },
    {
      id: "az-q3", readingId: "az-r2", type: "comprehension", correct: 0,
      q: { ar: "ما الأشياء الصغيرة الثلاثة التي جرّبتها سلوى في عملها؟", en: "What three small things did Salwa try at work?" },
      options: [
        { ar: "جملة نية، ومهمة واحدة في كل مرة، ودقيقة صمت بين المهام", en: "A sentence of intention, one task at a time, and a minute of silence between tasks" },
        { ar: "قائمة مهام صباحية، وإغلاق البريد، واستراحة غداء أطول", en: "A morning to-do list, closing her email, and a longer lunch break" },
        { ar: "جملة نية، والرد على كل رسالة فورًا، وتأجيل الاجتماعات", en: "A sentence of intention, answering every message at once, and postponing meetings" }
      ],
      why: { ar: "النية والتركيز والوقفة القصيرة تعيد الإنسان حاضرًا في عمله.", en: "Intention, focus and a short pause bring a person back to being present at work." }
    },
    {
      id: "az-q4", readingId: "az-r2", type: "comprehension", correct: 1,
      q: { ar: "ماذا اكتشفت سلوى في طريق عودتها إلى البيت؟", en: "What did Salwa discover on her way home?" },
      options: [
        { ar: "أنها نسيت اجتماعًا مهمًا كان في جدول يومها منذ الصباح", en: "That she had forgotten an important meeting on her schedule" },
        { ar: "أنها لا تذكر شيئًا واحدًا أتقنته، مع انشغالها طوال اليوم", en: "That she could not recall one thing she did well, though she was busy all day" },
        { ar: "أن رسائل كثيرة بقيت في بريدها دون رد حتى المساء", en: "That many messages were still sitting unanswered in her inbox" }
      ],
      why: { ar: "كانت مشغولة طوال اليوم، ولم تحضر لحظة منه. ومن هذه الملاحظة بدأت جملة النية والمهمة الواحدة.", en: "She was busy all day and present for not a moment of it. From that noticing came the sentence of intention and the single task." }
    },
    {
      id: "az-q5", readingId: "az-r3", type: "comprehension", correct: 0,
      q: { ar: "إلى أي سببين يردّ الغزالي شرود القلب في الصلاة؟", en: "To which two causes does al-Ghazali trace the heart's wandering in prayer?" },
      options: [
        { ar: "شاغل من الخارج يأخذ السمع والبصر، وهمّ من الداخل يملأ القلب", en: "Something outside that takes the ears and eyes, and a worry inside that fills the heart" },
        { ar: "طول القراءة في الصلاة، وقلة النوم في الليلة السابقة", en: "Long recitation in the prayer, and too little sleep the night before" },
        { ar: "ضعف حفظ السور، وسرعة الإمام في الركوع والسجود", en: "Weak memorisation of surahs, and an imam who rushes the bowing and prostration" }
      ],
      why: { ar: "لكل سبب علاجه: يُقطع الشاغل الخارجي، ويُعالج الداخلي بفهم ما يقال وتخفيف تعلّق القلب بما يشغله.", en: "Each cause has its cure: the outside distraction is cut off, and the inside one is treated by understanding what is said and loosening the heart's hold on what occupies it." }
    },
    {
      id: "az-q6", readingId: "az-r3", type: "situation", correct: 1,
      q: {
        ar: "شرد ذهنك في السجود إلى مشكلة في العمل. ماذا تفعل؟",
        ar_f: "شرد ذهنك في السجود إلى مشكلة في العمل. ماذا تفعلين؟",
        en: "In prostration your mind drifts to a problem at work. What do you do?"
      },
      options: [
        { ar: "أقطع الصلاة وأبدأ من جديد", en: "Break off the prayer and start again" },
        { ar: "أعيد قلبي بلطف إلى ما أقول، وأكمل", en: "Gently bring my heart back to what I am saying, and carry on" },
        { ar: "أكمل وأنا أفكر في المشكلة، فالصلاة صحيحة", en: "Carry on thinking about the problem; the prayer is valid anyway" }
      ],
      why: { ar: "الرجوع إلى الحضور حضور، ولا يحتاج إلى قطع الصلاة.", en: "Coming back to presence is itself presence, and needs no breaking off of the prayer." }
    },
    {
      id: "az-q7", readingId: "az-r4", type: "comprehension", correct: 0,
      q: { ar: "ماذا غيّرت ريم في دفترها؟", en: "What did Reem change in her notebook?" },
      options: [
        { ar: "صارت تكتب نصيحة واحدة في الأسبوع، وتحتها ما فعلته بها كل يوم", en: "She writes one piece of advice a week, with what she did with it each day beneath" },
        { ar: "صارت تلخّص كل محاضرة في سطر، لتراجع الدفتر كله بسرعة", en: "She sums up each lecture in one line, to review the whole notebook quickly" },
        { ar: "صارت تكتب النصائح على بطاقات صغيرة، وتعلّقها في غرفتها", en: "She writes the advice on small cards and pins them up in her room" }
      ],
      why: { ar: "العبرة بالعمل بالنصيحة، لا بكثرة ما يُكتب عنها.", en: "What counts is acting on advice, not how much is written about it." }
    },
    {
      id: "az-q8", readingId: "az-r5", type: "comprehension", correct: 1,
      q: { ar: "ما الخبر الطيب في كلام مسكويه عن الخُلُق؟", en: "What is the good news in Miskawayh's words on character?" },
      options: [
        { ar: "أن الخُلُق كله طبع ثابت، فيكفي أن يعرف الإنسان طبعه", en: "That all character is fixed nature, so it is enough to know your own" },
        { ar: "أن من الخُلُق ما يُكتسب بالعادة والتدرّب، فيمكن تغييره", en: "That some character is acquired by habit and training, so it can be changed" },
        { ar: "أن الخُلُق يتغير وحده مع تقدم العمر والتجربة", en: "That character changes by itself with age and experience" }
      ],
      why: { ar: "ما صنعته العادة تستطيع العادة أن تغيّره، بالمجاهدة والمداومة.", en: "What habit has made, habit can change, through striving and constancy." }
    },
    {
      id: "az-q9", readingId: "az-r5", type: "situation", correct: 1,
      q: {
        ar: "تمسك الهاتف كلما شعرت بالملل في العمل. أي طريقة توافق ما في المقالة؟",
        ar_f: "تمسكين الهاتف كلما شعرتِ بالملل في العمل. أي طريقة توافق ما في المقالة؟",
        en: "You pick up your phone whenever you feel bored at work. Which approach matches the article?"
      },
      options: [
        { ar: "أعد نفسي كل صباح ألا ألمسه أبدًا في ساعات العمل", en: "Promise myself each morning never to touch it during work hours" },
        { ar: "ألاحظ لحظة الملل، وأضع مكانه فعلًا صغيرًا كشرب الماء مع ذكر", en: "Notice the moment of boredom and put a small act in the phone's place, like getting water with a remembrance" },
        { ar: "أعالج الملل نفسه، فأطلب من مديري عملًا أكثر تحديًا", en: "Treat the boredom itself by asking my manager for more challenging work" }
      ],
      why: { ar: "عادة واحدة، وما يسبقها، وبديل صغير في الوقت نفسه: هكذا تتغير العادات.", en: "One habit, what comes before it, and a small replacement at the same moment: that is how habits change." }
    },
    {
      id: "az-q10", readingId: "az-r6", type: "comprehension", correct: 0,
      q: { ar: "لماذا صارت مريم تحكي لأمها وحدها؟", en: "Why did Maryam start telling only her mother?" },
      options: [
        { ar: "لأن أباها كان يسمعها وعيناه في الهاتف، فلم يحفظ ما قالت", en: "Because her father listened with his eyes on his phone, and kept nothing of what she said" },
        { ar: "لأن أباها كان يقاطعها ليصحّح طريقة كلامها", en: "Because her father kept interrupting to correct the way she spoke" },
        { ar: "لأن أمها طلبت منها ألا تشغل أباها وقت العشاء", en: "Because her mother asked her not to bother her father at dinner" }
      ],
      why: { ar: "الحاضر بالجسد وحده يغيب عمن حوله، والأولاد يلاحظون ذلك قبل الكبار.", en: "Someone present only in body is absent to those around them, and children notice it before adults do." }
    },
    {
      id: "az-q11", readingId: "az-r7", type: "comprehension", correct: 0,
      q: { ar: "ماذا قالت السيدة عائشة رضي الله عنها عن النبي صلى الله عليه وآله وسلم في بيته؟", en: "What did Lady Aisha, may Allah be pleased with her, say about the Prophet, peace and blessings be upon him and his family, at home?" },
      options: [
        { ar: "كان في مهنة أهله، فإذا حضرت الصلاة خرج إليها", en: "He was at the service of his household, and when prayer came he went out to it" },
        { ar: "كان يجلس فيه للناس يعلّمهم ويقضي حوائجهم", en: "He sat there receiving people, teaching them and seeing to their needs" },
        { ar: "كان يخلو فيه للعبادة، ويترك شؤون البيت لأهله", en: "He withdrew there for worship and left the household's affairs to his family" }
      ],
      why: { ar: "حاضر مع أهله في البيت، وحاضر مع ربه في الصلاة.", en: "Present with his family at home, and present with his Lord in prayer." }
    },
    {
      id: "az-q12", readingId: "az-r8", type: "comprehension", correct: 1,
      q: { ar: "ماذا فعل حنظلة رضي الله عنه حين وجد قلبه يتغير بعد مجلس النبي صلى الله عليه وآله وسلم؟", en: "What did Hanzala, may Allah be pleased with him, do when he found his heart changing after sitting with the Prophet, peace and blessings be upon him and his family?" },
      options: [
        { ar: "كتم الأمر في نفسه، وانتظر أيامًا حتى يعود إليه صفاء قلبه", en: "Kept it to himself and waited some days for his heart's clarity to return" },
        { ar: "خاف على نفسه، وذهب مع أبي بكر يسأل النبي صلى الله عليه وآله وسلم", en: "Feared for himself, and went with Abu Bakr to ask the Prophet" },
        { ar: "ترك ضيعته وأهله أيامًا، وانقطع في المسجد ليتفرغ للذكر", en: "Left his estate and family for some days and stayed in the mosque to devote himself to remembrance" }
      ],
      why: { ar: "لاحظ تغيّر قلبه، وخاف عليه، وسأل. والقلب الحي يلاحظ متى يغيب، ويرجع.", en: "He noticed the change in his heart, feared for it, and asked. A living heart notices when it drifts, and comes back." }
    },
    {
      id: "az-q13", readingId: "az-r4", type: "comprehension", correct: 2,
      q: { ar: "حين فتحت ريم دفترها تبحث عن كلمة في الصبر، أي سؤال أوقفها؟", en: "When Reem opened her notebook looking for something on patience, what question stopped her?" },
      options: [
        { ar: "هل تقبل صديقتي النصيحة مني أصلًا؟", en: "Will my friend even accept advice from me?" },
        { ar: "في أي صفحة كتبتُ درس الصبر؟", en: "On which page did I write the lesson on patience?" },
        { ar: "كم نصيحة من هذه الصفحات عملتُ بها؟", en: "How many of these pages have I acted on?" }
      ],
      why: { ar: "سؤال واحد صادق حوّل الدفتر من سجلّ لما سمعته إلى سجلّ لما فعلته.", en: "One honest question turned the notebook from a record of what she heard into a record of what she did." }
    },
    {
      id: "az-q14", readingId: "az-r8", type: "comprehension", correct: 0,
      q: { ar: "بماذا أجاب النبي صلى الله عليه وآله وسلم حنظلة رضي الله عنه؟", en: "How did the Prophet, peace and blessings be upon him and his family, answer Hanzala, may Allah be pleased with him?" },
      options: [
        { ar: "لو داموا على حالهم عنده لصافحتهم الملائكة، ولكن ساعة وساعة", en: "If they stayed as they were with him the angels would shake their hands, but a time and a time" },
        { ar: "أن يلزم مجلسه ويترك الضيعات أيامًا حتى يثبت قلبه", en: "That he should stay close to his gatherings and leave his estates until his heart was steady" },
        { ar: "أن ما يجده نفاق حقًّا، فليتب منه ويكثر من الاستغفار", en: "That what he felt was truly hypocrisy, so he should repent and seek forgiveness often" }
      ],
      why: { ar: "أبقاه في بيته وعمله، وجعل للقلب ساعات: ساعة للمشاغل، وساعة يُرجَع فيها إلى الذكر.", en: "He kept him in his home and work and gave the heart its hours: a time for concerns, and a time to return to remembrance." }
    }
  ],
  tasks: [
    { id: "az-t1", ar: "صلاة واحدة اليوم بحضور: الهاتف بعيد، ووقفة قبل التكبير، وتأمل آية.", en: "One prayer today with presence: phone away, a pause before the takbir, one verse reflected on." },
    { id: "az-t2", ar: "ليلة نوم والهاتف خارج غرفة النوم.", en: "A night's sleep with the phone outside the bedroom." },
    { id: "az-t3", ar: "بداية يوم العمل بجملة نية: لماذا أعمل، ولوجه من.", en: "Began the workday with a sentence of intention: why I work, and for whose sake." },
    { id: "az-t4", ar: "العمل مرة واحدة بنصيحة سُمعت هذا الأسبوع.", en: "Acted once on a piece of advice heard this week." },
    { id: "az-t5", ar: "نصف ساعة مع الأهل والهاتف بعيد، مع سؤال أحدهم عن يومه والاستماع حتى ينتهي.", en: "Half an hour with family, phone away, asking one of them about their day and listening to the end." }
  ],
  selfcheck: [
    { id: "az-s1", q: { ar: "هل أبدأ يومي بالذكر قبل أن أبدأه بالهاتف؟", en: "Do I begin my day with remembrance before the phone?" } },
    { id: "az-s2", q: { ar: "هل أعرف في آخر يوم العمل ماذا أنجزت، ولماذا؟", en: "At the end of the workday, do I know what I did, and why?" } },
    { id: "az-s3", q: { ar: "هل أعرف ما قرأت في صلاتي بعد أن أنتهي منها؟", en: "Do I know what I recited in my prayer once it is over?" } },
    { id: "az-s4", q: { ar: "هل أعمل بالنصيحة التي أوافق عليها؟", en: "Do I act on the advice I agree with?" } },
    { id: "az-s5", q: { ar: "هل أكون حاضرًا مع أهلي حين أجلس معهم؟", ar_f: "هل أكون حاضرة مع أهلي حين أجلس معهم؟", en: "Am I present with my family when I sit with them?" } }
  ]
};

/* ───────────── البنصر: الخنزير للكبار / Pig behaviours, adult ───────────── */
window.AKHLAQ_CONTENT_ADULT.stages.pig = {
  name: { ar: "سلوكيات الخنزير", en: "Pig behaviours" },
  short: {
    ar: "سلوك الشهوة والأنانية: تريد النفس أن تأخذ أكثر مما تحتاج، وقبل غيرها، وبأقل جهد. في المال والطعام والعمل والبيت والطريق.",
    en: "The behaviour of appetite and selfishness: the self wants to take more than it needs, before others, with the least effort. In money, food, work, home and on the road."
  },
  signs: [
    { ar: "شراء ما لا حاجة إليه لأن العرض ينتهي الليلة، ثم الضيق من الفاتورة آخر الشهر.", en: "Buying what you don't need because the offer ends tonight, then dreading the bill at the end of the month." },
    { ar: "الأكل حتى الثقل، ثم العودة إلى الطعام قبل الجوع.", en: "Eating until heavy, then going back to food before hunger returns." },
    { ar: "الحديث عن «إنجازي» في عمل شارك فيه الفريق كله.", en: "Talking about «my achievement» in work the whole team shared." },
    { ar: "ترك أعمال البيت وحاجات الأولاد للطرف الآخر، مع الشكوى من التعب.", en: "Leaving the housework and the children's needs to the other spouse, while complaining of being tired." },
    { ar: "تجاوز الطابور، والمزاحمة في الطريق، والوقوف حيث يتعطل الناس.", en: "Cutting the queue, pushing in on the road, and parking where others are held up." }
  ],
  climb: [
    { ar: "أسأل قبل أن أشتري: هل أحتاج إليه، أم أريده الآن فقط؟", en: "Before I buy I ask: do I need it, or do I only want it now?" },
    { ar: "أقوم عن الطعام وفيّ بقية من شهية.", en: "I get up from the table while I still have some appetite left." },
    { ar: "أذكر جهد زملائي بأسمائهم قبل أن أذكر جهدي.", en: "I name my colleagues' effort before I mention my own." },
    { ar: "أبدأ بحق أهلي في البيت قبل راحتي.", en: "At home I begin with my family's due before my own rest." }
  ],
  degrees: [
    {
      name: { ar: "«أنا أولًا»", en: "“Me first”" },
      desc: {
        ar: "تريد النفس أن تكون الأولى في كل شيء: في الطابور، وفي الطريق، وفي الثناء، وفي أطيب ما على المائدة، ولو كان ذلك على حساب غيرها.",
        en: "The self wants to be first in everything: in the queue, on the road, in the praise, at the best of the table, even at others' expense."
      },
      looks: {
        ar: "تصل بسيارتك إلى صف طويل عند المخرج، فتدخل من الجانب. وفي الاجتماع تقول «فكرتي» عن فكرة نضجت مع الفريق.",
        ar_f: "تصلين بسيارتك إلى صف طويل عند المخرج، فتدخلين من الجانب. وفي الاجتماع تقولين «فكرتي» عن فكرة نضجت مع الفريق.",
        en: "You reach a long line of cars at the exit and slip in from the side. In the meeting you say «my idea» about an idea that grew with the team."
      },
      story: {
        ar: [
          "كان هشام يوصل ابنته إلى المدرسة كل صباح، فيتجاوز صف السيارات الطويل ويقف في الممر المخصص للحافلة، ثم يمضي مسرعًا.",
          "وفي صباح قالت له ابنته وهي تنزل: يا أبي، قالت لنا المعلمة إن من يتجاوز الطابور يأخذ دور غيره.",
          "في الغد خرج هشام من البيت قبل موعده بخمس دقائق، ووقف في آخر الصف. ولوّحت له ابنته من النافذة قبل أن تنزل."
        ],
        en: [
          "Every morning Hisham drove his daughter to school. He would skip the long line of cars, stop in the lane kept for the school bus, then speed off.",
          "One morning, as she got out, his daughter said: Dad, our teacher told us that whoever skips the queue takes someone else's turn.",
          "The next day Hisham left home five minutes earlier and waited at the end of the line. His daughter waved to him from the window before she got out."
        ]
      },
      step: {
        ar: "اليوم، حين تتكلم عن عمل شاركك فيه غيرك، اذكر أسماءهم وما فعلوا قبل أن تذكر ما فعلت.",
        ar_f: "اليوم، حين تتكلمين عن عمل شاركك فيه غيرك، اذكري أسماءهم وما فعلوا قبل أن تذكري ما فعلتِ.",
        en: "Today, when you talk about work others shared with you, name them and what they did before you mention what you did."
      },
      week: {
        ar: "سبعة أيام تدع فيها غيرك يتقدم مرة كل يوم: في الطابور، أو عند الباب، أو في الطريق، أو في الكلام، وتلاحظ ما تشعر به.",
        ar_f: "سبعة أيام تدعين فيها غيرك يتقدم مرة كل يوم: في الطابور، أو عند الباب، أو في الطريق، أو في الكلام، وتلاحظين ما تشعرين به.",
        en: "For seven days, let someone go ahead of you once a day: in a queue, at a door, on the road or in conversation, and notice how it feels."
      },
      habit: {
        ar: "اجعل عادتك أن تحب لغيرك ما تحب لنفسك، فقد قال النبي صلى الله عليه وآله وسلم: «لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ» (البخاري 13).",
        ar_f: "اجعلي عادتك أن تحبي لغيرك ما تحبين لنفسك، فقد قال النبي صلى الله عليه وآله وسلم: «لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ» (البخاري 13).",
        en: "Make it your habit to want for others what you want for yourself. The Prophet, peace and blessings be upon him and his family, said: «None of you believes until he loves for his brother what he loves for himself» (Bukhari 13)."
      },
      turnName: { ar: "التنافس في الخير", en: "Competing in good" },
      turn: {
        ar: "الرغبة نفسها في أن تكون الأول، إذا وُجّهت إلى الخير صارت مسابقة محمودة: أن تكون أول من يعين، وأول من يعتذر، وأول من يصل إلى المسجد. قال الله تعالى: ﴿وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ﴾ (المطففين 83:26).",
        en: "The same wish to be first, once turned to good, becomes a praiseworthy race: to be the first to help, the first to apologise, the first to reach the mosque. Allah says, in meaning: for that let the competitors compete (al-Mutaffifin 83:26)."
      },
      turnVerify: true,
      q: {
        id: "ap-d1q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "في موقف سيارات مزدحم رأيت مكانًا فارغًا، وسيارة أخرى تنتظره قبلك وإشارتها مضاءة. ماذا تفعل؟",
          ar_f: "في موقف سيارات مزدحم رأيتِ مكانًا فارغًا، وسيارة أخرى تنتظره قبلكِ وإشارتها مضاءة. ماذا تفعلين؟",
          en: "In a crowded car park you see an empty space, and another car waiting for it before you with its indicator on. What do you do?"
        },
        options: [
          { ar: "أسبقها إليه، فالمكان لمن يدخله أولًا", en: "Beat it to the space; it belongs to whoever gets in first" },
          { ar: "أتركه لها، وأبحث عن مكان آخر", en: "Leave it to that car and look for another space" },
          { ar: "أقف قريبًا منه حتى يملّ صاحبها ويذهب", en: "Wait close by until the other driver gives up and leaves" }
        ],
        why: {
          ar: "الحق لمن سبق إليه. وحب الخير لغيرك كما تحبه لنفسك يُمتحن في المواقف الصغيرة قبل الكبيرة.",
          en: "The right belongs to whoever got there first. Wanting good for others as for yourself is tested in small moments before large ones."
        }
      }
    },
    {
      name: { ar: "الشَّرَه", en: "Greed" },
      desc: {
        ar: "رغبة لا تشبع في المال والشراء والطعام: كلما نالت النفس شيئًا طلبت ما بعده، ولا تجد الراحة فيما عندها.",
        en: "An appetite that is never full, for money, shopping and food: whenever the self gets something it wants the next thing, and finds no rest in what it has."
      },
      looks: {
        ar: "تملأ سلة التسوق على الهاتف في منتصف الليل بأشياء لم تكن تعرف أنك تريدها، وتأكل في المناسبات حتى يثقل عليك القيام.",
        ar_f: "تملئين سلة التسوق على الهاتف في منتصف الليل بأشياء لم تكوني تعرفين أنك تريدينها، وتأكلين في المناسبات حتى يثقل عليك القيام.",
        en: "At midnight you fill your shopping basket on the phone with things you didn't know you wanted, and at gatherings you eat until it is hard to get up."
      },
      story: {
        ar: [
          "كان وليد يحب العروض: يشتري قطعتين لأن الثانية بنصف السعر، ويشترك في تطبيقات لا يستعملها، ويغيّر هاتفه كل عام.",
          "وفي آخر شهر جلس مع زوجته يحسبان المصروف، فوجد أن ما أنفقه على أشياء لم يفتح نصفها كان يكفي قسط مدرسة ابنه.",
          "فوضع لنفسه قاعدة: كل ما ليس ضروريًّا ينتظر في السلة ثلاثة أيام. وفي الشهر الأول حذف من السلة أكثر مما اشترى."
        ],
        en: [
          "Walid loved offers: he bought two of everything because the second was half price, subscribed to apps he never used, and changed his phone every year.",
          "At the end of one month he sat down with his wife to go over their spending, and found that what he had spent on things he had not even opened would have paid his son's school fees.",
          "So he set himself a rule: anything not essential waits in the basket for three days. In the first month he deleted more from the basket than he bought."
        ]
      },
      step: {
        ar: "قبل أي شراء اليوم اسأل نفسك سؤالين: هل أحتاج إليه حقًّا؟ وهل كنت سأشتريه لو لم يكن عليه عرض؟",
        ar_f: "قبل أي شراء اليوم اسألي نفسك سؤالين: هل أحتاج إليه حقًّا؟ وهل كنت سأشتريه لو لم يكن عليه عرض؟",
        en: "Before any purchase today, ask yourself two questions: do I really need it? And would I buy it if there were no offer on it?"
      },
      week: {
        ar: "سبعة أيام يبقى فيها كل ما تريد شراءه، عدا الضروري، في السلة يومين قبل أن تقرر. وفي الطعام، قم عن المائدة وفيك بقية من شهية.",
        ar_f: "سبعة أيام يبقى فيها كل ما تريدين شراءه، عدا الضروري، في السلة يومين قبل أن تقرري. وفي الطعام، قومي عن المائدة وفيك بقية من شهية.",
        en: "For seven days, everything you want to buy, apart from essentials, waits two days in the basket before you decide. At meals, get up while you still have some appetite."
      },
      habit: {
        ar: "حين تشتهي ما في أيدي الناس، فاجعل عادتك ما أرشد إليه النبي صلى الله عليه وآله وسلم: «انْظُرُوا إِلَى مَنْ أَسْفَلَ مِنْكُمْ وَلاَ تَنْظُرُوا إِلَى مَنْ هُوَ فَوْقَكُمْ فَهُوَ أَجْدَرُ أَنْ لاَ تَزْدَرُوا نِعْمَةَ اللَّهِ» (صحيح مسلم 2963).",
        ar_f: "حين تشتهين ما في أيدي الناس، فاجعلي عادتك ما أرشد إليه النبي صلى الله عليه وآله وسلم: «انْظُرُوا إِلَى مَنْ أَسْفَلَ مِنْكُمْ وَلاَ تَنْظُرُوا إِلَى مَنْ هُوَ فَوْقَكُمْ فَهُوَ أَجْدَرُ أَنْ لاَ تَزْدَرُوا نِعْمَةَ اللَّهِ» (صحيح مسلم 2963).",
        en: "When you crave what others have, make it your habit to follow the guidance of the Prophet, peace and blessings be upon him and his family: «Look at those below you and do not look at those above you; that is more fitting so that you do not belittle Allah's blessing» (Sahih Muslim 2963)."
      },
      turnName: { ar: "الحرص على ما ينفع", en: "Eagerness for what benefits" },
      turn: {
        ar: "الشهية القوية للأخذ، إذا وُجّهت، صارت حرصًا على ما ينفع: على العلم، والوقت، والكسب الحلال، والعمل الصالح. قال النبي صلى الله عليه وآله وسلم: «احْرِصْ عَلَى مَا يَنْفَعُكَ وَاسْتَعِنْ بِاللَّهِ وَلاَ تَعْجِزْ» (صحيح مسلم 2664).",
        en: "A strong appetite for taking, once directed, becomes eagerness for what benefits: for knowledge, time, lawful earning and good deeds. The Prophet, peace and blessings be upon him and his family, said: «Be eager for what benefits you, seek Allah's help, and do not give up» (Sahih Muslim 2664)."
      },
      turnVerify: true,
      q: {
        id: "ap-d2q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "وصلتك رسالة: «خصم 50% لمدة ساعتين فقط» على جهاز عندك مثله ويعمل جيدًا. ما الأقرب إلى العلاج؟",
          en: "A message arrives: «50% off for two hours only» on a device you already own, and yours works well. What is closest to the cure?"
        },
        options: [
          { ar: "أشتريه قبل أن ينتهي العرض", en: "Buy it before the offer ends" },
          { ar: "أسأل نفسي: هل أحتاج إليه؟ وأترك الرسالة تمضي", en: "Ask myself whether I need it, and let the message go" },
          { ar: "أشتريه وأهدي القديم لأحد", en: "Buy it and give the old one away" }
        ],
        why: {
          ar: "العرض يصنع حاجة لم تكن موجودة. والسؤال الصادق قبل الشراء أول علاج الشره.",
          en: "An offer creates a need that wasn't there. An honest question before buying is the first cure for greed."
        }
      }
    },
    {
      name: { ar: "الكسل", en: "Laziness" },
      desc: {
        ar: "ثقل عن الواجب وعن حقوق الآخرين، مع حب الراحة: يؤجَّل ما على الإنسان، ويُترك لغيره ما يستطيع أن يفعله بنفسه.",
        en: "Heaviness toward duty and toward others' rights, with a love of comfort: what is owed is put off, and what one could do oneself is left to others."
      },
      looks: {
        ar: "تعود من العمل فتجلس أمام الشاشة، وزوجتك تطبخ وتساعد الأولاد في واجباتهم، وتقول: أنا متعب. وتؤجل الاتصال بأمك حتى تنسى.",
        ar_f: "تعودين من العمل فتجلسين أمام الشاشة، وزوجك يرتّب البيت ويساعد الأولاد في واجباتهم وحده، وتقولين: أنا متعبة. وتؤجلين الاتصال بأمك حتى تنسي.",
        en: "You come home from work and sit in front of a screen while your spouse cooks and helps the children with homework, and you say: I'm tired. You put off calling your mother until you forget."
      },
      story: {
        ar: [
          "كان طارق يعود من عمله في السادسة فيستلقي على الأريكة حتى العشاء، وزوجته ليلى تعمل مثله وتعود بعده بساعة.",
          "وفي ليلة سمع ابنه يقول لأخته: أبي لا يساعد في البيت لأنه يتعب في العمل. فسكت طارق طويلًا، وتذكر أن أمهما تتعب في العمل أيضًا.",
          "في اليوم التالي دخل المطبخ وسأل ليلى: ماذا أفعل؟ وصار غسل الصحون بعد العشاء عمله، والأولاد يجففونها معه."
        ],
        en: [
          "Tariq came home from work at six and lay on the sofa until dinner. His wife Layla worked as he did and got home an hour after him.",
          "One night he heard his son tell his sister: Dad doesn't help at home because he gets tired at work. Tariq was silent for a long time, remembering that their mother got tired at work too.",
          "The next day he went into the kitchen and asked Layla: what can I do? Washing the dishes after dinner became his job, and the children dried them with him."
        ]
      },
      step: {
        ar: "اختر اليوم عملًا واحدًا في البيت يقوم به غيرك عادة، وقم به أنت دون أن يطلبه منك أحد.",
        ar_f: "اختاري اليوم عملًا واحدًا في البيت يقوم به غيرك عادة، وقومي به أنتِ دون أن يطلبه منك أحد.",
        en: "Today, choose one job at home that someone else usually does, and do it yourself without being asked."
      },
      week: {
        ar: "سبعة أيام لا تؤجل فيها عملًا يأخذ أقل من خمس دقائق: رسالة أمك، وما استعملته يعود إلى مكانه، والصغير يُنجز فور تذكّره.",
        ar_f: "سبعة أيام لا تؤجلين فيها عملًا يأخذ أقل من خمس دقائق: رسالة أمك، وما استعملتِه يعود إلى مكانه، والصغير يُنجز فور تذكّره.",
        en: "For seven days, put off nothing that takes under five minutes: your mother's message, putting back what you used, doing the small thing the moment you remember it."
      },
      habit: {
        ar: "اجعل دعاء النبي صلى الله عليه وآله وسلم وِردًا لك: «اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ» (البخاري 2823)، وقم إلى العمل فور الدعاء.",
        ar_f: "اجعلي دعاء النبي صلى الله عليه وآله وسلم وِردًا لك: «اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ» (البخاري 2823)، وقومي إلى العمل فور الدعاء.",
        en: "Make the Prophet's supplication a regular part of your day: «O Allah, I seek refuge in You from incapacity and laziness» (Bukhari 2823), and get up to work as soon as you have said it."
      },
      turnName: { ar: "الإيثار", en: "Putting others first" },
      turn: {
        ar: "النفس التي تعلّقت براحتها تستطيع أن تقدّم راحة غيرها عليها، وهذا أعلى ما يبلغه من كان يحب الراحة. قال الله تعالى: ﴿وَيُؤْثِرُونَ عَلَىٰ أَنْفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ ۚ وَمَنْ يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ﴾ (الحشر 59:9).",
        en: "A self attached to its comfort can learn to put others' comfort first, and that is the height a lover of comfort can reach. Allah says, in meaning: they prefer others over themselves even when they are in need, and whoever is saved from the greed of his own soul, they are the successful (al-Hashr 59:9)."
      },
      turnVerify: true,
      q: {
        id: "ap-d3q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "عدت من العمل متعبًا، وزوجتك متعبة أيضًا، والأولاد يحتاجون إلى العشاء وإلى من يساعدهم في الواجبات. ما الأقرب إلى علاج الكسل؟",
          ar_f: "عدتِ من العمل متعبة، وزوجك متعب أيضًا، والأولاد يحتاجون إلى العشاء وإلى من يساعدهم في الواجبات. ما الأقرب إلى علاج الكسل؟",
          en: "You come home from work tired, your spouse is tired too, and the children need dinner and help with homework. What is closest to the cure for laziness?"
        },
        options: [
          { ar: "أرتاح ساعة أولًا، ثم أرى", en: "Rest for an hour first, then see" },
          { ar: "نتقاسم العمل: أتولى العشاء أو الواجبات، ثم نرتاح معًا", en: "Share the work: I take dinner or homework, then we rest together" },
          { ar: "نطلب طعامًا جاهزًا كل ليلة", en: "Order takeaway every night" }
        ],
        why: {
          ar: "حق البيت على الزوجين معًا. والراحة بعد عمل مشترك أطيب من راحة يدفع ثمنها غيرك.",
          en: "The home is owed by both spouses together. Rest after shared work is sweeter than rest someone else pays for."
        }
      }
    }
  ],
  readings: [
    {
      id: "ap-r1", minutes: 4, ages: "18+",
      title: { ar: "سلة المشتريات", en: "The shopping basket" },
      body: {
        ar: [
          "تعمل دينا مصممة، ودخلها جيد. وفي آخر كل يوم، حين تهدأ الرسائل، تفتح تطبيقات التسوق لتسترخي: حقيبة، ثم عطر، ثم قطعة للبيت. تصل الطرود كل أسبوع، وبعضها يبقى في علبته عند باب الغرفة.",
          "وكلما وصل طرد رأت على الشاشة ما هو أجمل منه. امتلأت الخزانة، وبقي في صدرها مكان فارغ لا تملؤه العلب.",
          "وفي ليلة أرادت أن تعرف متى تشتري، فراجعت طلبات شهر كامل. وجدت أكثرها في ليالٍ بعينها: بعد اجتماع متعب، أو مكالمة ثقيلة، أو يوم مرّ ولم يشكرها فيه أحد على عملها. كانت تشتري لتسكّن شيئًا آخر.",
          "وفي الحديث صورة هذا الجوع الذي لا يشبع: «لَوْ كَانَ لاِبْنِ آدَمَ وَادِيَانِ مِنْ مَالٍ لاَبْتَغَى ثَالِثًا، وَلاَ يَمْلأُ جَوْفَ ابْنِ آدَمَ إِلاَّ التُّرَابُ، وَيَتُوبُ اللَّهُ عَلَى مَنْ تَابَ» (البخاري 6436). وفي حديث آخر موضع الغنى: «لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ، وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ» (البخاري 6446).",
          "جرّبت دينا ثلاثة أشياء: حذفت تطبيقين من هاتفها، وجعلت لكل شراء غير ضروري مهلة ثلاثة أيام، وصارت كلما أرادت شيئًا جديدًا أخرجت من بيتها شيئًا لا تستعمله وأعطته لمن يحتاج إليه. وفي الليالي الثقيلة صارت تتصل بأختها قبل أن تفتح التطبيق.",
          "بعد شهرين صار ما في بيتها أقل، ورضاها عنه أكثر، وبقي في حسابها آخر الشهر مبلغ تتصدق منه. وفي إحدى تلك المكالمات قالت لأختها: لم أكن أشتري الأشياء، كنت أشتري لحظة الشراء."
        ],
        en: [
          "Dina works as a designer and earns well. At the end of each day, once the messages die down, she opens shopping apps to unwind: a bag, then a perfume, then something for the house. Parcels arrive every week, and some stay in their boxes by the bedroom door.",
          "Every time a parcel arrived, the screen showed her something lovelier. The wardrobe filled up, and a space in her chest stayed empty that no box could fill.",
          "One night she wanted to know when she bought, so she went through a whole month of orders. Most of them fell on certain nights: after a draining meeting, a heavy phone call, or a day that went by without anyone thanking her for her work. She was buying to quiet something else.",
          "A hadith pictures this hunger that is never full, meaning: if the son of Adam had two valleys of wealth he would seek a third, and nothing fills the son of Adam's belly but dust, and Allah turns to whoever turns to Him (Bukhari 6436). Another shows where wealth lies: «Wealth is not an abundance of goods; wealth is the richness of the soul» (Bukhari 6446).",
          "Dina tried three things: she deleted two apps from her phone, gave every non-essential purchase three days' grace, and whenever she wanted something new she took something she no longer used out of her home and gave it to someone who needed it. On the heavy nights she began calling her sister before opening the app.",
          "Two months later she owned less and was more content with it, and at the end of each month there was money left in her account to give in charity. In one of those calls she told her sister: I wasn't buying things; I was buying the moment of buying."
        ]
      },
      quote: {
        ar: "«لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ، وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ»",
        en: "Meaning: Wealth is not an abundance of goods; wealth is the richness of the soul.",
        ref: "صحيح البخاري 6446، عن أبي هريرة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع حديثين في صحيح البخاري.", en: "An original story with fictional characters, with two hadiths in Sahih al-Bukhari." }
    },
    {
      id: "ap-r2", minutes: 4, ages: "18+",
      title: { ar: "البوفيه المفتوح", en: "The open buffet" },
      body: {
        ar: [
          "في البوفيه المفتوح يشعر كثير منا أن عليه أن يستوفي ما دفع: طبق أول، ثم ثانٍ، ثم حلوى، ثم شيء أخير لأنه موجود. ويقوم عن المائدة ثقيلًا، وينام بعدها نومًا لا يريح.",
          "والقرآن يضع للطعام قاعدة قصيرة: ﴿وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ﴾ (الأعراف 7:31). الطعام نعمة، والإسراف فيه يحوّل النعمة عبئًا.",
          "وبيّن النبي صلى الله عليه وآله وسلم المقدار: «مَا مَلأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ بِحَسْبِ ابْنِ آدَمَ أُكُلاَتٌ يُقِمْنَ صُلْبَهُ فَإِنْ كَانَ لاَ مَحَالَةَ فَثُلُثٌ لِطَعَامِهِ وَثُلُثٌ لِشَرَابِهِ وَثُلُثٌ لِنَفَسِهِ» (جامع الترمذي 2380، وقال: حسن صحيح).",
          "والمقصود أن يبقى في الجسد متّسع: للنَّفَس، وللخفة، وللقيام إلى الصلاة دون ثقل. والحساب الدقيق للأثلاث أقل أهمية من هذا المتّسع.",
          "ومحاسبة البطن تبدأ بسؤال قبل اللقمة: أجائع أنا، أم متعب، أم ضَجِر؟ كثير مما يؤكل في آخر الليل جواب عن تعب النهار: يطلب الجسد النوم، فنعطيه طعامًا.",
          "خطوات عملية: ابدأ بطبق صغير، وكُل ببطء، واشرب الماء قبل الطعام، وانتظر دقائق قبل أن تقوم إلى الطبق الثاني. فإن لم تعد إليه فقد عرفت أنك كنت شبعان."
        ],
        ar_f: [
          "في البوفيه المفتوح يشعر كثير منا أن عليه أن يستوفي ما دفع: طبق أول، ثم ثانٍ، ثم حلوى، ثم شيء أخير لأنه موجود. ويقوم عن المائدة ثقيلًا، وينام بعدها نومًا لا يريح.",
          "والقرآن يضع للطعام قاعدة قصيرة: ﴿وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ﴾ (الأعراف 7:31). الطعام نعمة، والإسراف فيه يحوّل النعمة عبئًا.",
          "وبيّن النبي صلى الله عليه وآله وسلم المقدار: «مَا مَلأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ بِحَسْبِ ابْنِ آدَمَ أُكُلاَتٌ يُقِمْنَ صُلْبَهُ فَإِنْ كَانَ لاَ مَحَالَةَ فَثُلُثٌ لِطَعَامِهِ وَثُلُثٌ لِشَرَابِهِ وَثُلُثٌ لِنَفَسِهِ» (جامع الترمذي 2380، وقال: حسن صحيح).",
          "والمقصود أن يبقى في الجسد متّسع: للنَّفَس، وللخفة، وللقيام إلى الصلاة دون ثقل. والحساب الدقيق للأثلاث أقل أهمية من هذا المتّسع.",
          "ومحاسبة البطن تبدأ بسؤال قبل اللقمة: أجائعة أنا، أم متعبة، أم ضَجِرة؟ كثير مما يؤكل في آخر الليل جواب عن تعب النهار: يطلب الجسد النوم، فنعطيه طعامًا.",
          "خطوات عملية: ابدئي بطبق صغير، وكُلي ببطء، واشربي الماء قبل الطعام، وانتظري دقائق قبل أن تقومي إلى الطبق الثاني. فإن لم تعودي إليه فقد عرفتِ أنكِ كنتِ شبعى."
        ],
        en: [
          "At an open buffet many of us feel we must get our money's worth: a first plate, then a second, then dessert, then one last thing because it is there. We get up from the table heavy and sleep afterwards without rest.",
          "The Quran gives food a short rule, meaning: eat and drink, and do not waste; He does not love the wasteful (al-A'raf 7:31). Food is a blessing, and excess turns the blessing into a burden.",
          "The Prophet, peace and blessings be upon him and his family, set the measure, meaning: no human fills a vessel worse than his belly; a few morsels to keep his back straight are enough for the son of Adam, and if he must, then a third for his food, a third for his drink and a third for his breath (Jami' at-Tirmidhi 2380, graded hasan sahih by him).",
          "The point is to leave room in the body: room to breathe, to feel light, to stand for prayer without heaviness. Counting the thirds exactly matters less than keeping that room.",
          "Taking the stomach to account begins with a question before the first bite: am I hungry, or tired, or bored? Much of what is eaten late at night is an answer to the day's tiredness: the body asks for sleep, and we give it food.",
          "Practical steps: start with a small plate, eat slowly, drink water before eating, and wait a few minutes before going back for a second plate. If you don't go back, you have learned that you were already full."
        ]
      },
      quote: {
        ar: "﴿وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ﴾",
        en: "Meaning (not a translation): Eat and drink, and do not waste; He does not love the wasteful.",
        ref: "الأعراف 7:31", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "مقالة مع آية من سورة الأعراف وحديث في جامع الترمذي (2380).", en: "An article with a verse from al-A'raf and a hadith in Jami' at-Tirmidhi (2380)." }
    },
    {
      id: "ap-r3", minutes: 4, ages: "18+",
      title: { ar: "اسمي على العرض", en: "My name on the presentation" },
      body: {
        ar: [
          "أعدّت رنا مع زميلها سامي عرضًا لعميل كبير. سهر سامي ليلتين على الأرقام والتحليل، وكتبت هي الشرائح ونسّقتها. وحين أرسلت العرض إلى المدير، كتبت تحته اسمها وحده.",
          "لم تقصد أن تظلمه، هكذا قالت لنفسها. كانت الترقية قريبة، وأرادت أن يرى المدير عملها واضحًا. وفي الاجتماع العام شكرها المدير أمام الجميع، وسامي جالس في آخر القاعة صامتًا.",
          "في الطريق إلى البيت تذكرت حديثًا تحفظه منذ صغرها: «لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ» (البخاري 13). سألت نفسها: لو سهرتُ أنا ليلتين، وأخذ غيري الشكر، ماذا كنت سأشعر؟",
          "في الصباح كتبت إلى المدير رسالة قصيرة: «الأرقام والتحليل في العرض من عمل سامي، وهو أحق بالشكر عليها». ثم ذهبت إلى سامي واعتذرت إليه.",
          "تأخرت ترقيتها شهرين، وجاءت. وصار سامي أول من تستشيره في كل عرض بعدها. وصار المدير، إذا أثنت رنا على أحد، يكتب اسمه في دفتره."
        ],
        en: [
          "Rana prepared a presentation for a major client with her colleague Sami. Sami stayed up two nights on the figures and the analysis; she wrote and designed the slides. When she sent it to the manager, she put only her own name beneath it.",
          "She didn't mean to wrong him, she told herself. A promotion was coming, and she wanted the manager to see her work clearly. At the general meeting the manager thanked her in front of everyone, while Sami sat silent at the back of the room.",
          "On the way home she remembered a hadith she had known since childhood: «None of you believes until he loves for his brother what he loves for himself» (Bukhari 13). She asked herself: if I had stayed up two nights and someone else got the thanks, how would I feel?",
          "In the morning she wrote the manager a short message: «The figures and analysis in the presentation are Sami's work, and the thanks for them are his.» Then she went to Sami and apologised.",
          "Her promotion came two months later than it might have. Sami became the first person she consulted on every presentation after that. And whenever Rana praised someone, the manager wrote that person's name in his notebook."
        ]
      },
      quote: {
        ar: "«لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ»",
        en: "Meaning: None of you believes until he loves for his brother what he loves for himself.",
        ref: "صحيح البخاري 13، عن أنس بن مالك", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع حديث في صحيح البخاري.", en: "An original story with fictional characters, with a hadith in Sahih al-Bukhari." }
    },
    {
      id: "ap-r4", minutes: 4, ages: "18+",
      title: { ar: "الأريكة والمطبخ", en: "The sofa and the kitchen" },
      body: {
        ar: [
          "كثير من الخلاف في البيوت يبدأ قبل أي كلمة جارحة، بتعب يحمله واحد ويستريح منه الآخر. يتراكم التعب أيامًا، ثم يخرج في جملة غاضبة عن شيء صغير، فيتعجب الطرف الآخر من الغضب.",
          "وللكسل في البيت صور أخفى من النوم: الانشغال بالهاتف والأولاد يسألون، و«سأفعلها لاحقًا» التي يفعلها غيرك، وترك السؤال عن يوم الطرف الآخر لأنك متعب. ومحاسبة آخر اليوم تكشفها بسؤال واحد: من تعب الليلة لأرتاح أنا؟",
          "وقد جعل النبي صلى الله عليه وآله وسلم البيت ميزان الخيرية: «خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ وَأَنَا خَيْرُكُمْ لأَهْلِي» (جامع الترمذي 3895). الخير الذي يراه الناس في العمل والمسجد يُختبر في المطبخ وغرفة الأولاد.",
          "خطوات عملية: اجلسا مرة واحدة واكتبا أعمال البيت كلها، ثم اختر منها عملًا ثابتًا يكون لك. اجعل للأولاد نصيبًا بحسب أعمارهم. واسأل الطرف الآخر مرة في الأسبوع: ما الذي يثقل عليك هذه الأيام؟ واسمع الجواب دون أن تدافع عن نفسك.",
          "ولكل بيت ظروفه وقسمته، والميزان فيها واحد: ألا يستريح أحد على تعب غيره وهو يقدر أن يعينه."
        ],
        ar_f: [
          "كثير من الخلاف في البيوت يبدأ قبل أي كلمة جارحة، بتعب يحمله واحد ويستريح منه الآخر. يتراكم التعب أيامًا، ثم يخرج في جملة غاضبة عن شيء صغير، فيتعجب الطرف الآخر من الغضب.",
          "وللكسل في البيت صور أخفى من النوم: الانشغال بالهاتف والأولاد يسألون، و«سأفعلها لاحقًا» التي يفعلها غيرك، وترك السؤال عن يوم الطرف الآخر لأنك متعبة. ومحاسبة آخر اليوم تكشفها بسؤال واحد: من تعب الليلة لأرتاح أنا؟",
          "وقد جعل النبي صلى الله عليه وآله وسلم البيت ميزان الخيرية: «خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ وَأَنَا خَيْرُكُمْ لأَهْلِي» (جامع الترمذي 3895). الخير الذي يراه الناس في العمل والمسجد يُختبر في المطبخ وغرفة الأولاد.",
          "خطوات عملية: اجلسا مرة واحدة واكتبا أعمال البيت كلها، ثم اختاري منها عملًا ثابتًا يكون لك. اجعلي للأولاد نصيبًا بحسب أعمارهم. واسألي الطرف الآخر مرة في الأسبوع: ما الذي يثقل عليك هذه الأيام؟ واسمعي الجواب دون أن تدافعي عن نفسك.",
          "ولكل بيت ظروفه وقسمته، والميزان فيها واحد: ألا يستريح أحد على تعب غيره وهو يقدر أن يعينه."
        ],
        en: [
          "Many quarrels at home begin before any hurtful word, with tiredness that one person carries while the other rests. It builds up for days, then comes out in an angry sentence about something small, and the other is surprised by the anger.",
          "Laziness at home takes quieter forms than sleep: being busy on the phone while the children ask for you, the «I'll do it later» that someone else ends up doing, not asking your spouse about their day because you are tired. An end-of-day review uncovers them with one question: who was tired tonight so that I could rest?",
          "The Prophet, peace and blessings be upon him and his family, made the home the measure of goodness: «The best of you are the best to their families, and I am the best of you to my family» (Jami' at-Tirmidhi 3895). The goodness people see at work and in the mosque is tested in the kitchen and the children's room.",
          "Practical steps: sit down together once and list all the housework, then pick one fixed job to be yours. Give the children a share according to their ages. Once a week, ask your spouse: what is weighing on you these days? Listen to the answer without defending yourself.",
          "Every home has its own circumstances and its own split, and one measure for all of them: that no one rests on another's tiredness when they could help."
        ]
      },
      quote: {
        ar: "«خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ وَأَنَا خَيْرُكُمْ لأَهْلِي»",
        en: "Meaning: The best of you are the best to their families, and I am the best of you to my family.",
        ref: "جامع الترمذي 3895، عن عائشة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "مقالة مع حديث في جامع الترمذي (3895).", en: "An article with a hadith in Jami' at-Tirmidhi (3895)." }
    },
    {
      id: "ap-r5", minutes: 4, ages: "18+",
      title: { ar: "سيارة ابن الخال", en: "The cousin's new car" },
      body: {
        ar: [
          "اشترى عادل سيارته قبل ثلاث سنوات، وكان راضيًا بها. وفي عشاء العائلة ركن ابن خاله سيارة جديدة أمام البيت، ودار الحديث حولها نصف السهرة. وفي طريق العودة بدت سيارة عادل أضيق قليلًا، وصوت محركها أعلى مما كان في الصباح.",
          "بقيت السيارة كما هي، وتغيّر الميزان الذي يزن به ما عنده: صار يقيسه على ما عند غيره. وصار يفتح صفحات أصحابه على الهاتف فيرى سفرًا وبيوتًا وموائد، ثم يغلقها وفي صدره ثقل لا يعرف اسمه، ويجد صبره على أولاده في المساء أقصر.",
          "والقرآن يردّ العين إلى نصيبها: ﴿وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللَّهُ بِهِ بَعْضَكُمْ عَلَىٰ بَعْضٍ﴾، ثم يفتح في الآية نفسها بابًا لا يزاحم فيه أحد أحدًا: ﴿وَاسْأَلُوا اللَّهَ مِنْ فَضْلِهِ﴾ (النساء 4:32).",
          "وفي السنة علاج يُعمل به في اللحظة نفسها: «إِذَا نَظَرَ أَحَدُكُمْ إِلَى مَنْ فُضِّلَ عَلَيْهِ فِي الْمَالِ وَالْخَلْقِ، فَلْيَنْظُرْ إِلَى مَنْ هُوَ أَسْفَلَ مِنْهُ» (البخاري 6490). نظرة ثانية بعد الأولى، تعيد الميزان إلى مكانه.",
          "وللمقارنة وجه محمود: أن تتمنى مثل ما عند غيرك من الخير لتعمل مثله. قال النبي صلى الله عليه وآله وسلم: «لاَ حَسَدَ إِلاَّ فِي اثْنَتَيْنِ رَجُلٌ آتَاهُ اللَّهُ مَالاً فَسُلِّطَ عَلَى هَلَكَتِهِ فِي الْحَقِّ، وَرَجُلٌ آتَاهُ اللَّهُ الْحِكْمَةَ، فَهْوَ يَقْضِي بِهَا وَيُعَلِّمُهَا» (البخاري 73). والمال الذي يستحق أن يُتمنّى في الحديث مال يُنفق في الحق.",
          "جرّب عادل أمرين: كلما أغلق صفحة أحد أصحابه كتب في هاتفه ثلاث نعم عنده كان قد كفّ عن رؤيتها، وكلما أعجبه شيء عند أحد دعا له بالبركة فيه. وبعد أسابيع سأل ابن خاله عن سيارته الجديدة، وفرح له، ثم عاد بأولاده إلى البيت في سيارته، وهم يغنّون في المقعد الخلفي.",
          "سؤال للمحاسبة: آخر مرة تصفّحت فيها حياة غيرك، هل خرجت شاكرًا أم متحسّرًا؟ وما النعمة التي عندك ولم تذكرها اليوم؟"
        ],
        ar_f: [
          "اشترى عادل سيارته قبل ثلاث سنوات، وكان راضيًا بها. وفي عشاء العائلة ركن ابن خاله سيارة جديدة أمام البيت، ودار الحديث حولها نصف السهرة. وفي طريق العودة بدت سيارة عادل أضيق قليلًا، وصوت محركها أعلى مما كان في الصباح.",
          "بقيت السيارة كما هي، وتغيّر الميزان الذي يزن به ما عنده: صار يقيسه على ما عند غيره. وصار يفتح صفحات أصحابه على الهاتف فيرى سفرًا وبيوتًا وموائد، ثم يغلقها وفي صدره ثقل لا يعرف اسمه، ويجد صبره على أولاده في المساء أقصر.",
          "والقرآن يردّ العين إلى نصيبها: ﴿وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللَّهُ بِهِ بَعْضَكُمْ عَلَىٰ بَعْضٍ﴾، ثم يفتح في الآية نفسها بابًا لا يزاحم فيه أحد أحدًا: ﴿وَاسْأَلُوا اللَّهَ مِنْ فَضْلِهِ﴾ (النساء 4:32).",
          "وفي السنة علاج يُعمل به في اللحظة نفسها: «إِذَا نَظَرَ أَحَدُكُمْ إِلَى مَنْ فُضِّلَ عَلَيْهِ فِي الْمَالِ وَالْخَلْقِ، فَلْيَنْظُرْ إِلَى مَنْ هُوَ أَسْفَلَ مِنْهُ» (البخاري 6490). نظرة ثانية بعد الأولى، تعيد الميزان إلى مكانه.",
          "وللمقارنة وجه محمود: أن تتمني مثل ما عند غيرك من الخير لتعملي مثله. قال النبي صلى الله عليه وآله وسلم: «لاَ حَسَدَ إِلاَّ فِي اثْنَتَيْنِ رَجُلٌ آتَاهُ اللَّهُ مَالاً فَسُلِّطَ عَلَى هَلَكَتِهِ فِي الْحَقِّ، وَرَجُلٌ آتَاهُ اللَّهُ الْحِكْمَةَ، فَهْوَ يَقْضِي بِهَا وَيُعَلِّمُهَا» (البخاري 73). والمال الذي يستحق أن يُتمنّى في الحديث مال يُنفق في الحق.",
          "جرّب عادل أمرين: كلما أغلق صفحة أحد أصحابه كتب في هاتفه ثلاث نعم عنده كان قد كفّ عن رؤيتها، وكلما أعجبه شيء عند أحد دعا له بالبركة فيه. وبعد أسابيع سأل ابن خاله عن سيارته الجديدة، وفرح له، ثم عاد بأولاده إلى البيت في سيارته، وهم يغنّون في المقعد الخلفي.",
          "سؤال للمحاسبة: آخر مرة تصفّحتِ فيها حياة غيرك، هل خرجتِ شاكرة أم متحسّرة؟ وما النعمة التي عندكِ ولم تذكريها اليوم؟"
        ],
        en: [
          "Adel bought his car three years ago and was happy with it. At a family dinner his cousin parked a new car outside the house, and half the evening's talk circled around it. On the drive home Adel's car seemed a little smaller, and its engine louder than it had been that morning.",
          "The car was the same; the scale he weighed his life on had changed. He now measured what he had against what others had. He began opening his friends' pages on his phone and seeing trips, houses and dinners, then closing them with a weight in his chest he had no name for, and a shorter patience with his children in the evening.",
          "The Quran turns the eye back to its own share, meaning: do not covet what Allah has given some of you over others; and in the same verse it opens a door where no one crowds anyone: ask Allah of His bounty (an-Nisa' 4:32).",
          "The Sunnah gives a cure to use in the very moment, meaning: when one of you looks at someone given more than him in wealth and in looks, let him look at someone below him (Bukhari 6490). A second look after the first sets the scale right again.",
          "Comparison has a praiseworthy face: to wish for the good another has so that you may do as they do. The Prophet, peace and blessings be upon him and his family, said, in meaning: there is no envy except in two cases: a man Allah has given wealth who spends it on what is right, and a man Allah has given wisdom who judges by it and teaches it (Bukhari 73). The wealth worth wishing for in this hadith is wealth spent on what is right.",
          "Adel tried two things: each time he closed a friend's page he wrote on his phone three blessings of his own that he had stopped seeing, and each time he admired something someone had, he prayed for blessing on them in it. A few weeks later he asked his cousin about the new car and was glad for him, then drove his children home in his own, with them singing in the back seat.",
          "A question for self-review: the last time you scrolled through other people's lives, did you come away grateful or regretful? And which blessing of yours have you not remembered today?"
        ]
      },
      quote: {
        ar: "«إِذَا نَظَرَ أَحَدُكُمْ إِلَى مَنْ فُضِّلَ عَلَيْهِ فِي الْمَالِ وَالْخَلْقِ، فَلْيَنْظُرْ إِلَى مَنْ هُوَ أَسْفَلَ مِنْهُ»",
        en: "Meaning: When one of you looks at someone given more than him in wealth and in looks, let him look at someone below him.",
        ref: "صحيح البخاري 6490، عن أبي هريرة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع آية من سورة النساء وحديثين في صحيح البخاري.", en: "An original story with fictional characters, with a verse from an-Nisa' and two hadiths in Sahih al-Bukhari." }
    },
    {
      id: "ap-r6", minutes: 5, ages: "18+",
      title: { ar: "الغزالي وكسر الشهوتين", en: "Al-Ghazali on breaking the two appetites" },
      body: {
        ar: [
          "في «إحياء علوم الدين» كتاب كامل عنوانه «كتاب كسر الشهوتين»: شهوة البطن، وشهوة الفرج. ويبدأ الغزالي كلامه في شهوة البطن بقوله: «فأعظم المهلكات لابن آدم شهوة البطن، فبها أخرج آدم عليه السلام وحواء من دار القرار إلى دار الذل والافتقار».",
          "ويسمّي الغزالي البطن «ينبوع الشهوات ومنبت الأدواء والآفات»، ويبيّن أن شهوته تجرّ ما بعدها: من أطاع بطنه احتاج إلى المال الذي يشبعه، ثم إلى ما يجلب المال، فتجرّه شهوة صغيرة إلى شهوات أكبر منها. ولهذا جعلها أول ما يُعالج.",
          "وميزان العلاج عنده الوسط، فهو يقرر في الكتاب نفسه أن «المطلوب الأقصى في جميع الأمور والأخلاق: الوسط». والوسط في الطعام أن يأكل الإنسان فلا يحس بثقل الشبع، ولا يضعفه الجوع عن عبادته وعمله.",
          "ومن طرق تدريب النفس التي يذكرها: التدرّج في تقليل ما زاد عن الحاجة، وتأخير الأكل حتى يصدق الجوع، والصوم الذي يعلّم النفس أنها تستطيع أن تقول لا.",
          "وفي حياتنا اليوم تظهر الشهوتان في صور كثيرة: طعام حاضر في كل وقت، وإعلانات تعدك باللذة، وشاشات تعرض ما لا يحل النظر إليه. والطريق واحد: أن تملك النفس قرارها، فتأخذ ما يحل وما يكفي، وتترك الباقي. وأيسر بداية: صيام الاثنين والخميس، أو أحدهما."
        ],
        en: [
          "The Ihya 'Ulum al-Din has a whole book titled «The Book of Breaking the Two Appetites»: the appetite of the stomach and the appetite of the private parts. Al-Ghazali opens his discussion of the stomach with: «The greatest of the things that destroy the son of Adam is the appetite of the stomach; through it Adam, peace be upon him, and Hawwa were sent out from the abode of permanence to the abode of lowliness and need.»",
          "Al-Ghazali calls the stomach «the wellspring of the appetites and the breeding ground of ailments and ills», and shows that its appetite pulls others behind it: whoever obeys his stomach needs the money to satisfy it, then whatever brings money, so a small appetite drags him to larger ones. That is why he makes it the first thing to treat.",
          "The measure of his cure is the middle way. In the same book he states that «the furthest aim in all matters and traits of character is the middle». In food, the middle is to eat so as not to feel the heaviness of fullness, nor be weakened by hunger from worship and work.",
          "Among the ways of training the self he mentions: gradually cutting what goes beyond need, delaying eating until hunger is real, and fasting, which teaches the self that it can say no.",
          "In our lives today both appetites appear in many forms: food available at every hour, advertisements promising pleasure, screens showing what is not lawful to look at. The path is one: for the self to own its decisions, taking what is lawful and enough and leaving the rest. The easiest start is fasting on Mondays and Thursdays, or one of them."
        ]
      },
      quote: {
        ar: "«فأعظم المهلكات لابن آدم شهوة البطن، فبها أخرج آدم عليه السلام وحواء من دار القرار إلى دار الذل والافتقار»",
        en: "Meaning: The greatest of the things that destroy the son of Adam is the appetite of the stomach; through it Adam and Hawwa were sent out from the abode of permanence to the abode of lowliness and need.",
        ref: "إحياء علوم الدين، كتاب كسر الشهوتين", checked: "ar.wikisource.org (إحياء علوم الدين)", verify: true
      },
      source: { ar: "إحياء علوم الدين للغزالي (كتاب كسر الشهوتين، ومنه «بيان اختلاف حكم الجوع وفضيلته واختلاف أحوال الناس فيه»)، مع خلاصة لمنهجه في العلاج.", en: "Al-Ghazali's Ihya 'Ulum al-Din (Book of Breaking the Two Appetites, including the section on the differing rulings and merit of hunger), with a summary of his method of cure." }
    },
    {
      id: "ap-r7", summit: true, minutes: 3, ages: "18+",
      title: { ar: "القمة: بيت لم يشبع من خبز البُرّ", en: "The summit: a house that never had its fill of wheat bread" },
      body: {
        ar: [
          "قالت السيدة عائشة رضي الله عنها: «مَا شَبِعَ آلُ مُحَمَّدٍ» صلى الله عليه وآله وسلم «مُنْذُ قَدِمَ الْمَدِينَةَ مِنْ طَعَامِ الْبُرِّ ثَلاَثَ لَيَالٍ تِبَاعًا، حَتَّى قُبِضَ» (البخاري 5416).",
          "وفي البيت نفسه يد لا تردّ سائلًا. قال جابر رضي الله عنه: «مَا سُئِلَ النَّبِيُّ» صلى الله عليه وآله وسلم «عَنْ شَىْءٍ قَطُّ فَقَالَ لاَ» (البخاري 6034). ما يصل إلى اليد يمضي منها إلى من يحتاج إليه، والقلب غنيّ عمّا تعطيه.",
          "في الخبرين معًا ميزان لكل بيت امتلأت خزائنه: القرب والراحة في قلب يكتفي بالقليل، ويد تعطي الكثير.",
          "سؤال للتأمل: ما الشيء الذي تأخذ منه أكثر مما تحتاج؟ وماذا يتغير لو أخذت منه ما يكفيك، وأعطيت الباقي؟"
        ],
        ar_f: [
          "قالت السيدة عائشة رضي الله عنها: «مَا شَبِعَ آلُ مُحَمَّدٍ» صلى الله عليه وآله وسلم «مُنْذُ قَدِمَ الْمَدِينَةَ مِنْ طَعَامِ الْبُرِّ ثَلاَثَ لَيَالٍ تِبَاعًا، حَتَّى قُبِضَ» (البخاري 5416).",
          "وفي البيت نفسه يد لا تردّ سائلًا. قال جابر رضي الله عنه: «مَا سُئِلَ النَّبِيُّ» صلى الله عليه وآله وسلم «عَنْ شَىْءٍ قَطُّ فَقَالَ لاَ» (البخاري 6034). ما يصل إلى اليد يمضي منها إلى من يحتاج إليه، والقلب غنيّ عمّا تعطيه.",
          "في الخبرين معًا ميزان لكل بيت امتلأت خزائنه: القرب والراحة في قلب يكتفي بالقليل، ويد تعطي الكثير.",
          "سؤال للتأمل: ما الشيء الذي تأخذين منه أكثر مما تحتاجين؟ وماذا يتغير لو أخذتِ منه ما يكفيك، وأعطيتِ الباقي؟"
        ],
        en: [
          "Lady Aisha, may Allah be pleased with her, said: «The family of Muhammad, peace and blessings be upon him and his family, never ate their fill of wheat bread for three nights in a row from the time he came to Medina until he passed away» (Bukhari 5416).",
          "In that same house was a hand that turned no one away. Jabir, may Allah be pleased with him, said: «The Prophet, peace and blessings be upon him and his family, was never asked for anything and said no» (Bukhari 6034). Whatever reached the hand passed on from it to whoever needed it, and the heart had no need of what it gave.",
          "Together the two reports hold a measure for every home whose cupboards are full: nearness and rest lie in a heart content with little, and a hand that gives much.",
          "A question to reflect on: what do you take more of than you need? And what would change if you took just enough of it, and gave the rest?"
        ]
      },
      quote: {
        ar: "«مُنْذُ قَدِمَ الْمَدِينَةَ مِنْ طَعَامِ الْبُرِّ ثَلاَثَ لَيَالٍ تِبَاعًا، حَتَّى قُبِضَ»",
        en: "Meaning: (The family of Muhammad never ate their fill) of wheat bread for three nights in a row from the time he came to Medina until he passed away.",
        ref: "صحيح البخاري 5416، عن عائشة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "حديثان في صحيح البخاري.", en: "Two hadiths in Sahih al-Bukhari." }
    },
    {
      id: "ap-r8", companions: true, minutes: 4, ages: "18+",
      title: { ar: "عبد الرحمن بن عوف وسعد بن الربيع: دلّوني على السوق", en: "Abd al-Rahman ibn Awf and Sa'd ibn al-Rabi': show me the market" },
      body: {
        ar: [
          "روى أنس رضي الله عنه أن عبد الرحمن بن عوف رضي الله عنه قدم المدينة مهاجرًا لا مال معه، فآخى النبي صلى الله عليه وآله وسلم بينه وبين سعد بن الربيع الأنصاري رضي الله عنه، وكان سعد ذا غنى.",
          "فقال سعد لأخيه الجديد: «أُقَاسِمُكَ مَالِي نِصْفَيْنِ، وَأُزَوِّجُكَ». فأجابه عبد الرحمن: «بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ، دُلُّونِي عَلَى السُّوقِ» (البخاري 2049). فذهب إلى السوق، فما رجع حتى ربح شيئًا من أقط وسمن، وجاء به إلى أهل منزله.",
          "في هذا المشهد علاج سمات المرحلة الثلاث: سعد يقدّم أخاه على نفسه في أحب ما يملك، فيقابل «أنا أولًا» بالإيثار. وعبد الرحمن يُعرض عن مال حاضر لا تعب فيه، فيقابل الشره بالعفة. ثم يطلب السوق ليأكل من عمل يده، فيقابل الكسل بالسعي.",
          "وحفظ كل منهما كرامة صاحبه: عرض سعد عرض من يعطي بلا منّ، وردّ عبد الرحمن بالدعاء لأخيه في أهله وماله، ثم انصرف إلى رزقه.",
          "سؤال للتأمل: أين تقف أنت اليوم من هذا المشهد؟ هل تعطي من مالك ووقتك كما أعطى سعد؟ وهل تكفّ يدك عمّا لا تحتاج إليه، وتسعى في رزقك كما فعل عبد الرحمن؟"
        ],
        ar_f: [
          "روى أنس رضي الله عنه أن عبد الرحمن بن عوف رضي الله عنه قدم المدينة مهاجرًا لا مال معه، فآخى النبي صلى الله عليه وآله وسلم بينه وبين سعد بن الربيع الأنصاري رضي الله عنه، وكان سعد ذا غنى.",
          "فقال سعد لأخيه الجديد: «أُقَاسِمُكَ مَالِي نِصْفَيْنِ، وَأُزَوِّجُكَ». فأجابه عبد الرحمن: «بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ، دُلُّونِي عَلَى السُّوقِ» (البخاري 2049). فذهب إلى السوق، فما رجع حتى ربح شيئًا من أقط وسمن، وجاء به إلى أهل منزله.",
          "في هذا المشهد علاج سمات المرحلة الثلاث: سعد يقدّم أخاه على نفسه في أحب ما يملك، فيقابل «أنا أولًا» بالإيثار. وعبد الرحمن يُعرض عن مال حاضر لا تعب فيه، فيقابل الشره بالعفة. ثم يطلب السوق ليأكل من عمل يده، فيقابل الكسل بالسعي.",
          "وحفظ كل منهما كرامة صاحبه: عرض سعد عرض من يعطي بلا منّ، وردّ عبد الرحمن بالدعاء لأخيه في أهله وماله، ثم انصرف إلى رزقه.",
          "سؤال للتأمل: أين تقفين أنتِ اليوم من هذا المشهد؟ هل تعطين من مالك ووقتك كما أعطى سعد؟ وهل تكفّين يدك عمّا لا تحتاجين إليه، وتسعين في رزقك كما فعل عبد الرحمن؟"
        ],
        en: [
          "Anas, may Allah be pleased with him, reported that Abd al-Rahman ibn Awf, may Allah be pleased with him, arrived in Medina as an emigrant with nothing. The Prophet, peace and blessings be upon him and his family, made him a brother of Sa'd ibn al-Rabi' al-Ansari, may Allah be pleased with him, who was a man of means.",
          "Sa'd said to his new brother: «I will divide my wealth with you in two halves, and arrange a marriage for you.» Abd al-Rahman answered: «May Allah bless you in your family and your wealth; show me the market» (Bukhari 2049). He went to the market, and did not return until he had earned some dried curd and ghee, which he brought to the people of his house.",
          "This scene holds the cure for all three traits of this stage. Sa'd puts his brother before himself in what he holds dearest, answering «me first» with selflessness. Abd al-Rahman turns away from wealth there for the taking without effort, answering greed with restraint. Then he asks for the market so he can live from the work of his own hands, answering laziness with striving.",
          "Each kept the other's dignity whole: Sa'd offered as one who gives without reminding, and Abd al-Rahman replied with a prayer for his brother's family and wealth, then went off to earn his living.",
          "A question to reflect on: where do you stand in this scene today? Do you give of your money and time as Sa'd gave? And do you hold back from what you don't need, and work for your living as Abd al-Rahman did?"
        ]
      },
      quote: {
        ar: "«بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ، دُلُّونِي عَلَى السُّوقِ»",
        en: "Meaning: May Allah bless you in your family and your wealth; show me the market.",
        ref: "صحيح البخاري 2049، عن أنس بن مالك", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "حديث في صحيح البخاري.", en: "A hadith in Sahih al-Bukhari." }
    }
  ],
  quiz: [
    {
      id: "ap-q1", readingId: "ap-r1", type: "comprehension", correct: 1,
      q: { ar: "ماذا وجدت دينا حين راجعت طلبات شهر كامل؟", en: "What did Dina find when she went through a whole month of orders?" },
      options: [
        { ar: "أن أكثرها كان في أيام العروض والتخفيضات الكبيرة", en: "That most of them fell on days of big offers and sales" },
        { ar: "أن أكثرها كان في ليالٍ متعبة: بعد اجتماع أو مكالمة ثقيلة", en: "That most of them came on draining nights, after a meeting or a heavy call" },
        { ar: "أن أكثرها كان هدايا اشترتها لأختها وصديقاتها", en: "That most of them were gifts she had bought for her sister and friends" }
      ],
      why: { ar: "كانت تشتري لتسكّن شيئًا آخر. ومعرفة متى تشتهي النفس أول المحاسبة.", en: "She was buying to quiet something else. Knowing when the self craves is where self-review begins." }
    },
    {
      id: "ap-q2", readingId: "ap-r1", type: "situation", correct: 0,
      q: {
        ar: "تجد نفسك كل مساء تتصفح تطبيقات التسوق لتسترخي. أي خطوة تشبه ما فعلته دينا؟",
        ar_f: "تجدين نفسك كل مساء تتصفحين تطبيقات التسوق لتسترخي. أي خطوة تشبه ما فعلته دينا؟",
        en: "Every evening you find yourself browsing shopping apps to unwind. Which step is like what Dina did?"
      },
      options: [
        { ar: "أحذف التطبيقات، وأجعل لكل شراء غير ضروري مهلة أيام", en: "Delete the apps and give every non-essential purchase a few days' wait" },
        { ar: "أُبقي التطبيقات، وأضع لنفسي حدًّا شهريًّا لا أتجاوزه", en: "Keep the apps and set myself a monthly limit I won't go over" },
        { ar: "أجمع مشترياتي كلها في طلب واحد آخر كل أسبوع", en: "Gather all my purchases into one order at the end of each week" }
      ],
      why: { ar: "تغيير المكان والمهلة قبل الشراء يكسران حلقة الشراء للترويح، ويتركان في المال مكانًا للصدقة.", en: "Changing the setting and waiting before buying break the cycle of shopping to unwind, and leave room in the budget for charity." }
    },
    {
      id: "ap-q3", readingId: "ap-r2", type: "comprehension", correct: 2,
      q: { ar: "ما المقصود من حديث الأثلاث في الطعام، بحسب المقالة؟", en: "According to the article, what is the point of the hadith of the thirds?" },
      options: [
        { ar: "أن يقسم الإنسان طعامه وشرابه بالميزان الدقيق", en: "That one should measure food and drink out exactly" },
        { ar: "أن يكتفي الإنسان بوجبة واحدة كبيرة في اليوم", en: "That one should make do with one large meal a day" },
        { ar: "أن يبقى في الجسد متّسع للنَّفَس والخفة والصلاة", en: "That room is left in the body for breath, lightness and prayer" }
      ],
      why: { ar: "المتّسع أهم من الحساب الدقيق: لا يملأ الإنسان بطنه حتى يثقل.", en: "The room matters more than exact counting: do not fill the stomach until it is heavy." }
    },
    {
      id: "ap-q4", readingId: "ap-r3", type: "comprehension", correct: 0,
      q: { ar: "ما السؤال الذي غيّر موقف رنا؟", en: "Which question changed Rana's stance?" },
      options: [
        { ar: "لو سهرتُ أنا وأخذ غيري الشكر، ماذا كنت سأشعر؟", en: "If I had stayed up and someone else got the thanks, how would I feel?" },
        { ar: "هل سيكتشف المدير ما فعلت؟", en: "Will the manager find out what I did?" },
        { ar: "هل ستتأخر ترقيتي؟", en: "Will my promotion be delayed?" }
      ],
      why: { ar: "أن تحب لأخيك ما تحب لنفسك يبدأ بأن تضع نفسك مكانه.", en: "Loving for your brother what you love for yourself begins with putting yourself in his place." }
    },
    {
      id: "ap-q5", readingId: "ap-r3", type: "situation", correct: 1,
      q: {
        ar: "مديرك يمدحك على تقرير كتبت أكثره زميلتك. ماذا تفعل؟",
        ar_f: "مديرك يمدحك على تقرير كتبت أكثره زميلتك. ماذا تفعلين؟",
        en: "Your manager praises you for a report your colleague wrote most of. What do you do?"
      },
      options: [
        { ar: "أشكره وأسكت، فالفريق كله واحد", en: "Thank him and say nothing; the team is all one" },
        { ar: "أشكره، وأقول له إن أكثر التقرير من عمل زميلتي", en: "Thank him, and tell him most of the report was my colleague's work" },
        { ar: "أخبر زميلتي سرًّا أن المدير أعجبه التقرير", en: "Tell my colleague privately that the manager liked the report" }
      ],
      why: { ar: "نسبة الجهد إلى صاحبه حق له، وهي أيضًا ما يجعل الناس يثقون بكلامك.", en: "Crediting effort to its owner is their right, and it is also what makes people trust your word." }
    },
    {
      id: "ap-q6", readingId: "ap-r4", type: "comprehension", correct: 1,
      q: { ar: "بحسب المقالة، كيف يبدأ كثير من الخلاف في البيوت؟", en: "According to the article, how do many quarrels at home begin?" },
      options: [
        { ar: "بكلمة جارحة تقال في لحظة غضب ثم تُنسى", en: "With a hurtful word said in anger and then forgotten" },
        { ar: "بتعب يحمله واحد ويستريح منه الآخر حتى يتراكم", en: "With tiredness one carries while the other rests, until it builds up" },
        { ar: "بخلاف على المال والمصروف في آخر الشهر", en: "With a disagreement over money at the end of the month" }
      ],
      why: { ar: "التعب المتراكم يخرج في جملة غاضبة عن شيء صغير، فيتعجب الطرف الآخر من الغضب.", en: "Built-up tiredness comes out in an angry sentence about something small, and the other is surprised by the anger." }
    },
    {
      id: "ap-q7", readingId: "ap-r4", type: "situation", correct: 2,
      q: {
        ar: "تلاحظ أن الطرف الآخر في البيت صار يغضب من أشياء صغيرة. ما الخطوة التي تقترحها المقالة؟",
        ar_f: "تلاحظين أن الطرف الآخر في البيت صار يغضب من أشياء صغيرة. ما الخطوة التي تقترحها المقالة؟",
        en: "You notice your spouse has started getting angry over small things. Which step does the article suggest?"
      },
      options: [
        { ar: "أتجنب الكلام معه أيامًا حتى يهدأ وحده", en: "Avoid talking for a few days until things calm down by themselves" },
        { ar: "أشرح له بهدوء أنني متعب أيضًا من العمل", ar_f: "أشرح له بهدوء أنني متعبة أيضًا من العمل", en: "Calmly explain that I am tired from work too" },
        { ar: "أسأله عمّا يثقل عليه، وأسمع، وآخذ عملًا ثابتًا", en: "Ask what is weighing on them, listen, and take on a fixed job" }
      ],
      why: { ar: "الغضب من الصغير كثيرًا ما يكون تعبًا متراكمًا. والسؤال والمشاركة يخففانه قبل أن يصير خلافًا.", en: "Anger over small things is often built-up tiredness. Asking and sharing the load ease it before it becomes a quarrel." }
    },
    {
      id: "ap-q8", readingId: "ap-r5", type: "comprehension", correct: 1,
      q: { ar: "بعد عشاء العائلة بدت سيارة عادل «أضيق». ما الذي تغيّر؟", en: "After the family dinner Adel's car seemed «smaller». What had changed?" },
      options: [
        { ar: "ظهر في محركها عطل لم ينتبه له من قبل", en: "A fault had appeared in the engine that he hadn't noticed before" },
        { ar: "الميزان الذي يزن به ما عنده: صار يقيسه على غيره", en: "The scale he weighed his life on: he measured it against others" },
        { ar: "سخر ابن خاله من سيارته القديمة أمام العائلة", en: "His cousin had mocked his old car in front of the family" }
      ],
      why: { ar: "بقيت السيارة كما هي، وتغيّرت العين التي تنظر إليها.", en: "The car stayed the same; the eye looking at it had changed." }
    },
    {
      id: "ap-q9", readingId: "ap-r6", type: "comprehension", correct: 1,
      q: { ar: "لماذا جعل الغزالي شهوة البطن أول ما يُعالج؟", en: "Why did al-Ghazali make the stomach's appetite the first thing to treat?" },
      options: [
        { ar: "لأنها أكثر الشهوات انتشارًا بين الناس", en: "Because it is the most widespread appetite among people" },
        { ar: "لأنها تجرّ إلى شهوات أكبر منها، كالحرص على المال", en: "Because it drags a person into larger appetites, such as craving money" },
        { ar: "لأن علاجها أيسر، فيبدأ المرء بالأيسر", en: "Because it is the easiest to cure, so one starts with the easiest" }
      ],
      why: { ar: "البطن عنده «ينبوع الشهوات»: من أطاع بطنه احتاج إلى ما يشبعه، ثم إلى ما يجلبه، فتكبر الشهوة الصغيرة.", en: "For him the stomach is «the wellspring of the appetites»: whoever obeys it needs what satisfies it, then what brings that, and the small appetite grows." }
    },
    {
      id: "ap-q10", readingId: "ap-r7", type: "comprehension", correct: 2,
      q: { ar: "أي صورتين يضعهما خبر القمة في بيت النبي صلى الله عليه وآله وسلم؟", en: "Which two pictures does the summit reading set in the Prophet's house, peace and blessings be upon him and his family?" },
      options: [
        { ar: "مائدة وافرة كل ليلة، ويد تطعم كل من يدخل", en: "A full table every night, and a hand that fed everyone who came in" },
        { ar: "صيام أكثر الأيام، ويد تدّخر لأهلها ما يكفيهم", en: "Fasting most days, and a hand that saved enough for the family" },
        { ar: "بيت لم يشبع من خبز البُرّ، ويد لا تردّ سائلًا", en: "A house never full of wheat bread, and a hand that refused no one" }
      ],
      why: { ar: "قلب يكتفي بالقليل، ويد تعطي ما يصل إليها: الغنى غنى القلب.", en: "A heart content with little, and a hand that gives whatever reaches it: wealth is the heart's wealth." }
    },
    {
      id: "ap-q11", readingId: "ap-r8", type: "comprehension", correct: 0,
      q: { ar: "بماذا أجاب عبد الرحمن بن عوف رضي الله عنه حين عرض عليه سعد نصف ماله؟", en: "How did Abd al-Rahman ibn Awf, may Allah be pleased with him, answer when Sa'd offered him half his wealth?" },
      options: [
        { ar: "دعا له بالبركة، وطلب أن يدلّوه على السوق", en: "He prayed for blessing on him and asked to be shown the market" },
        { ar: "قبل نصف المال قرضًا حتى يقف على قدميه", en: "He took the half as a loan until he was on his feet" },
        { ar: "شكره، وطلب أن يعمل عنده في تجارته", en: "He thanked him and asked to work for him in his trade" }
      ],
      why: { ar: "«بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ، دُلُّونِي عَلَى السُّوقِ»: عفة عن الأخذ، وسعي إلى العمل.", en: "«May Allah bless you in your family and your wealth; show me the market»: restraint from taking, and going out to work." }
    },
    {
      id: "ap-q12", readingId: "ap-r5", type: "situation", correct: 1,
      q: {
        ar: "أغلقت صفحة صديق على الهاتف، وفي صدرك ثقل مما رأيت من سفره وبيته. أي خطوة تشبه ما فعله عادل؟",
        ar_f: "أغلقتِ صفحة صديقة على الهاتف، وفي صدرك ثقل مما رأيتِ من سفرها وبيتها. أي خطوة تشبه ما فعله عادل؟",
        en: "You close a friend's page on your phone with a weight in your chest from their trips and home. Which step is like what Adel did?"
      },
      options: [
        { ar: "أحذفه من قائمتي حتى لا أرى صوره بعد اليوم", ar_f: "أحذفها من قائمتي حتى لا أرى صورها بعد اليوم", en: "Remove them from my list so I don't see their pictures again" },
        { ar: "أكتب ثلاث نعم عندي، وأدعو له بالبركة", ar_f: "أكتب ثلاث نعم عندي، وأدعو لها بالبركة", en: "Write down three blessings of mine, and pray for blessing on them" },
        { ar: "أبدأ ادخارًا جادًّا حتى أسافر مثله في الصيف", ar_f: "أبدأ ادخارًا جادًّا حتى أسافر مثلها في الصيف", en: "Start saving seriously so I can travel like them next summer" }
      ],
      why: { ar: "النظرة الثانية إلى ما عندك تعيد الميزان، والدعاء لصاحب النعمة يطفئ الحسرة قبل أن تكبر.", en: "A second look at what you have sets the scale right, and praying for the one who has the blessing puts out regret before it grows." }
    },
    {
      id: "ap-q13", readingId: "ap-r2", type: "situation", correct: 0,
      q: {
        ar: "عدت في الحادية عشرة ليلًا بعد يوم طويل، ووقفت أمام الثلاجة بلا جوع حقيقي. ما الذي تقترحه المقالة؟",
        ar_f: "عدتِ في الحادية عشرة ليلًا بعد يوم طويل، ووقفتِ أمام الثلاجة بلا جوع حقيقي. ما الذي تقترحه المقالة؟",
        en: "You get home at eleven at night after a long day and stand at the fridge without real hunger. What does the article suggest?"
      },
      options: [
        { ar: "أسأل نفسي: أجائع أنا أم متعب؟ وأنام إن كان تعبًا", ar_f: "أسأل نفسي: أجائعة أنا أم متعبة؟ وأنام إن كان تعبًا", en: "Ask myself: am I hungry or tired? And sleep, if it's tiredness" },
        { ar: "آكل شيئًا خفيفًا بدل الحلوى، حتى لا أثقل قبل النوم", en: "Eat something light instead of dessert, so I don't sleep heavy" },
        { ar: "أشرب كوبين من الماء، ثم آكل ما أريد بلا حرج", en: "Drink two glasses of water, then eat what I like without guilt" }
      ],
      why: { ar: "كثير مما يؤكل في آخر الليل جواب عن تعب النهار: يطلب الجسد النوم، فنعطيه طعامًا.", en: "Much of what is eaten late at night answers the day's tiredness: the body asks for sleep, and we give it food." }
    },
    {
      id: "ap-q14", readingId: "ap-r8", type: "comprehension", correct: 2,
      q: { ar: "بماذا رجع عبد الرحمن بن عوف رضي الله عنه من السوق؟", en: "What did Abd al-Rahman ibn Awf, may Allah be pleased with him, come back from the market with?" },
      options: [
        { ar: "بمال اقترضه من تاجر ليبدأ به تجارته", en: "Money he had borrowed from a merchant to start trading" },
        { ar: "بنصف مال سعد بعد أن ألحّ عليه أن يأخذه", en: "Half of Sa'd's wealth, after Sa'd insisted he take it" },
        { ar: "بشيء من أقط وسمن ربحه من تجارته", en: "Some dried curd and ghee he had earned by trading" }
      ],
      why: { ar: "قليل من كسب يده أحبّ إليه من كثير حاضر بلا تعب.", en: "A little earned by his own hand was dearer to him than plenty that came without effort." }
    }
  ],
  tasks: [
    { id: "ap-t1", ar: "شراء غير ضروري أُجّل ثلاثة أيام، ثم حُسم بعدها.", en: "A non-essential purchase put off for three days, then decided." },
    { id: "ap-t2", ar: "وجبة انتهت والنفس فيها بقية من شهية.", en: "A meal finished with some appetite still left." },
    { id: "ap-t3", ar: "ذِكر جهد زميل باسمه أمام غيره.", en: "Named a colleague's effort in front of others." },
    { id: "ap-t4", ar: "عمل في البيت يقوم به غيري عادة، قمت به دون طلب.", en: "Did a job at home that someone else usually does, without being asked." },
    { id: "ap-t5", ar: "الوقوف في آخر الطابور، أو إفساح الطريق لسيارة، مرة واحدة على الأقل.", en: "Waited at the back of a queue, or let a car in, at least once." }
  ],
  selfcheck: [
    { id: "ap-s1", q: { ar: "هل أشتري ما أحتاج إليه، أم ما يُعرض عليّ؟", en: "Do I buy what I need, or what is put in front of me?" } },
    { id: "ap-s2", q: { ar: "هل أقوم عن الطعام قبل أن أثقل؟", en: "Do I get up from the table before I feel heavy?" } },
    { id: "ap-s3", q: { ar: "هل أنسب الجهد إلى أصحابه في العمل؟", en: "Do I credit effort to those it belongs to at work?" } },
    { id: "ap-s4", q: { ar: "هل أحمل نصيبي من أعمال البيت وحاجات الأولاد؟", en: "Do I carry my share of the housework and the children's needs?" } },
    { id: "ap-s5", q: { ar: "هل أحب لغيري في الطريق والطابور ما أحب لنفسي؟", en: "On the road and in queues, do I want for others what I want for myself?" } }
  ]
};

/* ───────────── الوسطى: القرد للكبار / Monkey behaviours, adult ───────────── */
window.AKHLAQ_CONTENT_ADULT.stages.monkey = {
  name: { ar: "سلوكيات القرد", en: "Monkey behaviours" },
  short: {
    ar: "سلوك التشتت والاندفاع: ينتقل الإنسان من شيء إلى شيء قبل أن يتمه، ويرد قبل أن يفهم، ويغضب قبل أن يفكر، ويقلّد ما يراه قبل أن يسأل.",
    en: "The behaviour of distraction and impulse: moving from one thing to the next before finishing it, replying before understanding, getting angry before thinking, and copying what one sees before asking."
  },
  signs: [
    { ar: "عشرون نافذة مفتوحة، وثلاثة أعمال بدأت ولم يتم واحد منها.", en: "Twenty open tabs, and three tasks started with none of them finished." },
    { ar: "مقاطعة المتكلم في الاجتماع أو في البيت لإكمال جملته عنه.", en: "Interrupting the speaker at a meeting or at home to finish their sentence for them." },
    { ar: "الغضب في الطريق من خطأ سائق آخر، ورفع الصوت على الأولاد لأمر صغير.", en: "Anger on the road at another driver's mistake, and raising your voice at the children over something small." },
    { ar: "فعل ما يفعله الناس على وسائل التواصل لأنه منتشر، دون سؤال: هل يناسبني؟ وهل يحل؟", en: "Doing what people do on social media because it is everywhere, without asking: does it suit me? Is it lawful?" },
    { ar: "الرد في مجموعة المحادثة، أو إعادة توجيه خبر، قبل قراءة الرسالة كاملة أو التحقق منها.", en: "Replying in a group chat, or forwarding a story, before reading the whole message or checking it." }
  ],
  climb: [
    { ar: "أتم ما بدأت قبل أن أبدأ غيره.", en: "I finish what I started before I begin something else." },
    { ar: "أدع المتكلم ينهي كلامه، ثم أرد.", en: "I let the speaker finish, then I reply." },
    { ar: "أسكت حين أغضب، ولا أتكلم حتى أهدأ.", en: "When I am angry I fall silent, and I don't speak until I am calm." },
    { ar: "أتحقق من الخبر قبل أن أنقله.", en: "I check a story before I pass it on." }
  ],
  degrees: [
    {
      name: { ar: "التشتت", en: "Scattered attention" },
      desc: {
        ar: "ينتقل الانتباه من شيء إلى شيء قبل أن يتم الأول: أعمال كثيرة تبدأ، وقليل منها ينتهي.",
        en: "Attention jumps from one thing to the next before the first is done: many tasks begin, and few of them end."
      },
      looks: {
        ar: "تكتب تقريرًا، فتفتح البريد، ثم ترد على رسالة، ثم تقرأ خبرًا، وتعود إلى التقرير بعد ساعة لا تذكر أين وقفت.",
        ar_f: "تكتبين تقريرًا، فتفتحين البريد، ثم تردين على رسالة، ثم تقرئين خبرًا، وتعودين إلى التقرير بعد ساعة لا تذكرين أين وقفتِ.",
        en: "You are writing a report, open your email, answer a message, read a news item, and come back to the report an hour later unable to remember where you were."
      },
      story: {
        ar: [
          "بدأت سهى هذا العام ثلاث دورات على الإنترنت: في التصميم، وفي اللغة، وفي الطبخ. كانت كلما رأت إعلان دورة جديدة اشتركت فيها في الليلة نفسها، ثم تركتها عند أول درس صعب.",
          "وفي صباح واحد وصلتها ثلاث رسائل تذكّرها بتجديد الاشتراكات الثلاثة. فتحتها واحدة بعد واحدة: الأولى توقفت فيها عند الدرس الرابع، والثانية عند الثالث، والثالثة لم تدخلها منذ دفعت ثمنها.",
          "ألغت اشتراكين، وكتبت على ورقة ألصقتها بطرف الشاشة: «دورة واحدة حتى آخرها». وبعد شهرين علّقت شهادتها الأولى فوق مكتبها، وتحتها الورقة نفسها."
        ],
        en: [
          "This year Suha started three online courses: in design, in a language, and in cooking. Whenever she saw an advert for a new course she signed up that same night, then dropped it at the first hard lesson.",
          "One morning three emails arrived reminding her to renew all three subscriptions. She opened them one by one: in the first course she had stopped at lesson four, in the second at lesson three, and the third she had not opened since paying for it.",
          "She cancelled two of them and wrote on a slip of paper stuck to the edge of her screen: «One course, to the end». Two months later she hung her first certificate above her desk, with the same slip of paper beneath it."
        ]
      },
      step: {
        ar: "اختر اليوم عملًا واحدًا بدأته ولم تتمه، وأعطه نصف ساعة متصلة والهاتف بعيد.",
        ar_f: "اختاري اليوم عملًا واحدًا بدأتِه ولم تتميه، وأعطيه نصف ساعة متصلة والهاتف بعيد.",
        en: "Today, choose one task you started and never finished, and give it half an hour without a break, phone out of reach."
      },
      week: {
        ar: "سبعة أيام تسأل فيها نفسك قبل أن تبدأ عملًا جديدًا: هل أتممت الذي قبله؟ وتغلق كل نافذة لا يحتاج إليها عملك الحالي.",
        ar_f: "سبعة أيام تسألين فيها نفسك قبل أن تبدئي عملًا جديدًا: هل أتممتُ الذي قبله؟ وتغلقين كل نافذة لا يحتاج إليها عملك الحالي.",
        en: "For seven days, ask yourself before starting anything new: have I finished the one before it? And close every window your current task doesn't need."
      },
      habit: {
        ar: "اجعل لكل يوم «عملًا أول» تختاره في الليلة السابقة، وتتمه في الصباح قبل أن تفتح البريد والرسائل.",
        ar_f: "اجعلي لكل يوم «عملًا أول» تختارينه في الليلة السابقة، وتتمينه في الصباح قبل أن تفتحي البريد والرسائل.",
        en: "Give each day a «first task» chosen the night before, and finish it in the morning before you open email and messages."
      },
      turnName: { ar: "المسارعة إلى الخير", en: "Hastening to good" },
      turn: {
        ar: "الحركة السريعة التي تنقلك من شيء إلى شيء، إذا وُجّهت صارت مسارعة إلى الخير: لا تؤجل صدقة، ولا صلة رحم، ولا توبة. قال الله تعالى: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ أُعِدَّتْ لِلْمُتَّقِينَ﴾ (آل عمران 3:133).",
        en: "The quick movement that carries you from one thing to the next becomes, once directed, hastening to good: never putting off charity, family ties or repentance. Allah says, in meaning: hasten to forgiveness from your Lord and to a Garden as wide as the heavens and the earth, prepared for the God-conscious (Al 'Imran 3:133)."
      },
      turnVerify: true,
      q: {
        id: "am-d1q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "تكتب عرضًا مهمًّا موعده غدًا، ووصلتك عشر رسائل في مجموعات المحادثة. ما الأنفع؟",
          ar_f: "تكتبين عرضًا مهمًّا موعده غدًا، ووصلتكِ عشر رسائل في مجموعات المحادثة. ما الأنفع؟",
          en: "You are writing an important presentation due tomorrow, and ten messages arrive in your group chats. What is most useful?"
        },
        options: [
          { ar: "أرد على الرسائل أولًا، فهي قصيرة، ثم أتفرغ للعرض", en: "Answer the messages first, since they're short, then give myself to the presentation" },
          { ar: "أكتم الإشعارات ساعة، وأنهي جزءًا من العرض أولًا", en: "Mute notifications for an hour and finish part of the presentation first" },
          { ar: "أفتح المجموعات كل ربع ساعة، حتى لا يتراكم عليّ شيء", en: "Check the groups every quarter of an hour so that nothing piles up" }
        ],
        why: {
          ar: "كل انتقال يأخذ من الذهن وقتًا ليعود إلى ما كان فيه. والوقت المتصل لعمل واحد ينجز أكثر من ساعات متقطعة.",
          en: "Every switch costs the mind time to come back to where it was. Unbroken time on one task gets more done than broken hours."
        }
      }
    },
    {
      name: { ar: "لا يسمع ولا يتوقف", en: "Not listening, not stopping" },
      desc: {
        ar: "الكلام قبل الاستماع، والرد قبل الفهم، والنقل قبل التثبت: يمضي صاحبها في الأمر ولا يقف ليسمع، أو ليتأكد، أو ليراجع.",
        en: "Speaking before listening, replying before understanding, passing things on before checking them: pressing ahead without pausing to hear, to confirm, or to think again."
      },
      looks: {
        ar: "تقاطع زوجتك قبل أن تنهي جملتها لأنك عرفت ما ستقول، وتكتب ردًّا طويلًا في مجموعة العائلة على رسالة لم تقرأها كاملة.",
        ar_f: "تقاطعين زوجك قبل أن ينهي جملته لأنكِ عرفتِ ما سيقول، وتكتبين ردًّا طويلًا في مجموعة العائلة على رسالة لم تقرئيها كاملة.",
        en: "You interrupt your spouse before they finish their sentence because you know what they will say, and you write a long reply in the family group to a message you didn't read to the end."
      },
      story: {
        ar: [
          "في اجتماعات القسم كان فراس يقاطع كل من يتكلم: «فهمتك، فهمتك»، ثم يعرض فكرته.",
          "وفي آخر أحد الاجتماعات قرأ المدير الخلاصة بصوت عالٍ، فإذا الحل الذي دافع عنه فراس عشرين دقيقة هو الحل الذي بدأ زميله سليم يقترحه في أول الاجتماع، قبل أن يقطعه فراس.",
          "في الاجتماع التالي وضع فراس أمامه ورقة وقلمًا، وكلما خطرت له فكرة كتبها وانتظر. وبعد الاجتماع وقف سليم عند باب مكتبه وقال: «هذه أول مرة أكمل فيها فكرة أمامك»."
        ],
        en: [
          "In department meetings Firas interrupted everyone who spoke: «I get it, I get it», then put forward his own idea.",
          "At the end of one meeting the manager read out the summary, and the solution Firas had argued for twenty minutes turned out to be the very one his colleague Salim had started to propose at the beginning, before Firas cut him off.",
          "At the next meeting Firas put a sheet of paper and a pen in front of him, and whenever an idea came to him he wrote it down and waited. Afterwards Salim stopped at the door of his office and said: «That's the first time I've finished an idea in front of you»."
        ]
      },
      step: {
        ar: "في أول حديث اليوم، دع من يكلمك ينهي كلامه كله، ثم أعد عليه ما فهمته في جملة واحدة قبل أن ترد.",
        ar_f: "في أول حديث اليوم، دعي من يكلمك ينهي كلامه كله، ثم أعيدي عليه ما فهمتِه في جملة واحدة قبل أن تردي.",
        en: "In your first conversation today, let the other person finish everything they want to say, then sum up what you understood in one sentence before you reply."
      },
      week: {
        ar: "سبعة أيام لا ترد فيها في أي مجموعة محادثة، ولا تعيد توجيه أي رسالة، حتى تقرأها كاملة وتسأل: هل هي صحيحة؟ وهل ينفع نشرها؟",
        ar_f: "سبعة أيام لا تردين فيها في أي مجموعة محادثة، ولا تعيدين توجيه أي رسالة، حتى تقرئيها كاملة وتسألي: هل هي صحيحة؟ وهل ينفع نشرها؟",
        en: "For seven days, don't reply in any group chat or forward any message until you have read it all and asked: is it true? And does sharing it do any good?"
      },
      habit: {
        ar: "اجعل عادتك التثبت قبل الكلام والنقل، كما أمر الله تعالى: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا﴾ (الحجرات 49:6).",
        ar_f: "اجعلي عادتك التثبت قبل الكلام والنقل، كما أمر الله تعالى: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا﴾ (الحجرات 49:6).",
        en: "Make it your habit to verify before you speak or pass something on, as Allah commands, meaning: O you who believe, if a wrongdoer brings you news, verify it (al-Hujurat 49:6)."
      },
      turnName: { ar: "العزيمة والثبات", en: "Resolve and steadiness" },
      turn: {
        ar: "الاندفاع الذي لا يتوقف، إذا سبقه تفكير ومشورة، صار عزيمة ماضية لا تتردد. قال الله تعالى: ﴿وَشَاوِرْهُمْ فِي الْأَمْرِ ۖ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ﴾ (آل عمران 3:159). المشورة أولًا، ثم العزم، ثم التوكل.",
        en: "Drive that never stops becomes, once thought and counsel come before it, firm resolve that does not waver. Allah says, in meaning: consult them in the matter, and once you have resolved, rely on Allah (Al 'Imran 3:159). Counsel first, then resolve, then reliance."
      },
      turnVerify: true,
      q: {
        id: "am-d2q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "وصلتك في مجموعة العائلة رسالة عن دواء «يشفي من السكري في أسبوع»، وخالتك تطلب من الجميع نشرها. ماذا تفعل؟",
          ar_f: "وصلتكِ في مجموعة العائلة رسالة عن دواء «يشفي من السكري في أسبوع»، وخالتك تطلب من الجميع نشرها. ماذا تفعلين؟",
          en: "In the family group you get a message about a remedy that «cures diabetes in a week», and your aunt asks everyone to share it. What do you do?"
        },
        options: [
          { ar: "أعيد توجيهها، وأكتب معها أن على من يجرّبها أن يسأل طبيبه", en: "Forward it, adding that anyone who tries it should ask their doctor" },
          { ar: "لا أنشرها حتى أتحقق من مصدرها، وأكتب لخالتي بلطف أنها غير مؤكدة", en: "Don't share it until I check its source, and gently tell my aunt it isn't confirmed" },
          { ar: "أكتب في المجموعة أن رسائل العلاج كلها كاذبة، ليتوقف الجميع", en: "Write in the group that all such remedy messages are lies, so everyone stops" }
        ],
        why: {
          ar: "التبيّن قبل النقل أمر قرآني، والخبر الطبي الكاذب يضر من يصدّقه. واللطف مع الخالة من صلة الرحم.",
          en: "Verifying before passing on is a Quranic command, and false medical news harms those who believe it. Gentleness with your aunt is part of keeping family ties."
        }
      }
    },
    {
      name: { ar: "الغضب السريع", en: "Quick anger" },
      desc: {
        ar: "غضب يسبق التفكير: كلمة أو خطأ صغير يشعله، فيرتفع الصوت، وتخرج كلمات يندم عليها صاحبها.",
        en: "Anger that comes before thought: a word or a small mistake sets it off, the voice rises, and words come out that one later regrets."
      },
      looks: {
        ar: "يقطع عليك سائق الطريق فتلاحقه بالبوق، وتعود إلى البيت فتصرخ على ابنك لأنه سكب الماء.",
        ar_f: "يقطع عليكِ سائق الطريق فتلاحقينه بالبوق، وتعودين إلى البيت فتصرخين على ابنك لأنه سكب الماء.",
        en: "A driver cuts you off and you chase him with the horn; you get home and shout at your son because he spilled some water."
      },
      story: {
        ar: [
          "كان باسل هادئًا في عمله، لكنه في الطريق يتغير: يرفع صوته على كل سائق يخطئ، ويلوّح بيده من النافذة.",
          "وفي يوم كان ابنه في المقعد الخلفي. وبعد أيام سمعه في الصالة يلعب بسيارتين صغيرتين على السجادة، ويصرخ على أخيه بالكلمات نفسها، ويلوّح بيده كما يلوّح أبوه.",
          "من يومها جعل باسل لنفسه قاعدة في السيارة: إذا غضب قال «أعوذ بالله من الشيطان الرجيم» وسكت حتى الإشارة التالية. وصار ابنه يذكّره بها من المقعد الخلفي إذا نسي."
        ],
        en: [
          "Basil was calm at work, but on the road he changed: he shouted at every driver who made a mistake and waved his hand out of the window.",
          "One day his son was in the back seat. A few days later Basil heard him in the living room, playing with two toy cars on the rug, shouting at his brother with the very same words and waving his hand the way his father did.",
          "From then on Basil kept a rule in the car: when he got angry he said «I seek refuge in Allah from Satan the accursed» and stayed silent until the next traffic light. Now his son reminds him from the back seat when he forgets."
        ]
      },
      step: {
        ar: "إذا غضبت اليوم فاسكت، وقل: أعوذ بالله من الشيطان الرجيم، ولا تتكلم حتى تهدأ.",
        ar_f: "إذا غضبتِ اليوم فاسكتي، وقولي: أعوذ بالله من الشيطان الرجيم، ولا تتكلمي حتى تهدئي.",
        en: "If you get angry today, fall silent, say «I seek refuge in Allah from Satan the accursed», and don't speak until you are calm."
      },
      week: {
        ar: "سبعة أيام تلاحظ فيها كل مرة يرتفع فيها صوتك، وتكتب في المساء ما الذي أغضبك، وما الذي كان يمكن أن تقوله بهدوء.",
        ar_f: "سبعة أيام تلاحظين فيها كل مرة يرتفع فيها صوتك، وتكتبين في المساء ما الذي أغضبك، وما الذي كان يمكن أن تقوليه بهدوء.",
        en: "For seven days, notice each time your voice rises, and in the evening write down what made you angry and what you could have said calmly."
      },
      habit: {
        ar: "اجعل وصية النبي صلى الله عليه وآله وسلم أمام عينك. قال له رجل: أوصني، فقال: «لاَ تَغْضَبْ». فردّد مرارًا، قال: «لاَ تَغْضَبْ» (البخاري 6116).",
        ar_f: "اجعلي وصية النبي صلى الله عليه وآله وسلم أمام عينك. قال له رجل: أوصني، فقال: «لاَ تَغْضَبْ». فردّد مرارًا، قال: «لاَ تَغْضَبْ» (البخاري 6116).",
        en: "Keep before your eyes the counsel of the Prophet, peace and blessings be upon him and his family. A man said to him: advise me. He said: «Do not get angry.» The man repeated his request several times, and each time he said: «Do not get angry» (Bukhari 6116)."
      },
      turnName: { ar: "الشجاعة في الحق", en: "Courage for what is right" },
      turn: {
        ar: "حرارة الغضب نفسها، إذا ملكتها، صارت قوة في الحق: أن تقول الحق بهدوء، وتقف مع المظلوم، ولا تخاف في الله لومة لائم. قال النبي صلى الله عليه وآله وسلم: «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ» (البخاري 6114).",
        en: "The same heat of anger, once mastered, becomes strength for what is right: saying the truth calmly, standing with the wronged, fearing no one's blame for Allah's sake. The Prophet, peace and blessings be upon him and his family, said: «The strong one is not the one who wrestles others down; the strong one is he who controls himself when angry» (Bukhari 6114)."
      },
      turnVerify: true,
      q: {
        id: "am-d3q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "كسر ابنك ذو السبع سنوات هاتفك وهو يلعب، وأنت متعب. ما الأقرب إلى علاج الغضب السريع؟",
          ar_f: "كسر ابنكِ ذو السبع سنوات هاتفكِ وهو يلعب، وأنتِ متعبة. ما الأقرب إلى علاج الغضب السريع؟",
          en: "Your seven-year-old breaks your phone while playing, and you are tired. What is closest to the cure for quick anger?"
        },
        options: [
          { ar: "أرفع صوتي عليه مرة واحدة، حتى يعرف قيمة ما كسر", en: "Raise my voice at him once, so he learns the value of what he broke" },
          { ar: "أبتعد حتى أهدأ، ثم أكلمه بهدوء عن الحرص على الأغراض", en: "Step away until I am calm, then talk to him calmly about taking care of things" },
          { ar: "أمنعه من اللعب شهرًا، ولا أكلمه في الأمر الليلة", en: "Ban him from playing for a month, and say nothing about it tonight" }
        ],
        why: {
          ar: "الصمت والابتعاد يطفئان أول الغضب، والكلام الهادئ بعده يعلّم الطفل أكثر من الصراخ والعقوبة المبالغ فيها.",
          en: "Silence and stepping away put out the first flare of anger, and calm words afterwards teach a child more than shouting or an excessive punishment."
        }
      }
    }
  ],
  readings: [
    {
      id: "am-r1", minutes: 4, ages: "18+",
      title: { ar: "عشرون تبويبًا", en: "Twenty tabs" },
      body: {
        ar: [
          "على حاسوب أيمن عشرون تبويبًا مفتوحًا: بريد، ومقال لم يكمله، وفاتورة لم يدفعها، وسيارة يفكر في شرائها، ودرس بدأه قبل أسبوعين. يقول إنه يعمل على كل شيء في وقت واحد.",
          "وفي آخر اليوم يعرف أنه لم يعمل على شيء. كل تبويب يذكّره بعمل ناقص، والذهن يقفز بينها ولا يستقر على واحد. وفي المساء جاءه ابنه بورقة رسمها في المدرسة، فقال «جميلة» وعينه على الشاشة، فطوى الصغير ورقته وخرج.",
          "وفي سورة الأحزاب آية نزلت في شأن آخر، وفي لفظها حقيقة عن الإنسان كله: ﴿مَا جَعَلَ اللَّهُ لِرَجُلٍ مِنْ قَلْبَيْنِ فِي جَوْفِهِ﴾ (الأحزاب 33:4). للإنسان قلب واحد، وانتباه واحد، وما يوزّعه على عشرين أمرًا يأخذ كل أمر منه قليلًا.",
          "وكل انتقال من عمل إلى عمل له ثمن: يحتاج الذهن وقتًا ليعود إلى ما كان فيه، فتضيع في الانتقالات ساعات لا يراها صاحبها.",
          "خطوات عملية: أغلق كل تبويب لا يحتاج إليه عملك الآن، واكتب ما تخاف أن تنساه على ورقة بدل أن تتركه مفتوحًا. اعمل على أمر واحد وقتًا متصلًا، ثم انتقل. وإذا جاءك أحد أولادك فأدر الشاشة عنك قبل أن تنظر إليه. وفي آخر اليوم، أتمّ شيئًا واحدًا، ولو صغيرًا، قبل أن تغلق الحاسوب.",
          "في الليلة التالية أغلق أيمن ثمانية عشر تبويبًا، وكتب ما فيها على بطاقة صغيرة وضعها بجانب لوحة المفاتيح. ودفع الفاتورة، وأتم المقال. وحين دخل ابنه، أنزل غطاء الحاسوب، وطلب أن يرى الرسم من جديد."
        ],
        ar_f: [
          "على حاسوب أيمن عشرون تبويبًا مفتوحًا: بريد، ومقال لم يكمله، وفاتورة لم يدفعها، وسيارة يفكر في شرائها، ودرس بدأه قبل أسبوعين. يقول إنه يعمل على كل شيء في وقت واحد.",
          "وفي آخر اليوم يعرف أنه لم يعمل على شيء. كل تبويب يذكّره بعمل ناقص، والذهن يقفز بينها ولا يستقر على واحد. وفي المساء جاءه ابنه بورقة رسمها في المدرسة، فقال «جميلة» وعينه على الشاشة، فطوى الصغير ورقته وخرج.",
          "وفي سورة الأحزاب آية نزلت في شأن آخر، وفي لفظها حقيقة عن الإنسان كله: ﴿مَا جَعَلَ اللَّهُ لِرَجُلٍ مِنْ قَلْبَيْنِ فِي جَوْفِهِ﴾ (الأحزاب 33:4). للإنسان قلب واحد، وانتباه واحد، وما يوزّعه على عشرين أمرًا يأخذ كل أمر منه قليلًا.",
          "وكل انتقال من عمل إلى عمل له ثمن: يحتاج الذهن وقتًا ليعود إلى ما كان فيه، فتضيع في الانتقالات ساعات لا يراها صاحبها.",
          "خطوات عملية: أغلقي كل تبويب لا يحتاج إليه عملك الآن، واكتبي ما تخافين أن تنسيه على ورقة بدل أن تتركيه مفتوحًا. اعملي على أمر واحد وقتًا متصلًا، ثم انتقلي. وإذا جاءك أحد أولادك فأديري الشاشة عنكِ قبل أن تنظري إليه. وفي آخر اليوم، أتمّي شيئًا واحدًا، ولو صغيرًا، قبل أن تغلقي الحاسوب.",
          "في الليلة التالية أغلق أيمن ثمانية عشر تبويبًا، وكتب ما فيها على بطاقة صغيرة وضعها بجانب لوحة المفاتيح. ودفع الفاتورة، وأتم المقال. وحين دخل ابنه، أنزل غطاء الحاسوب، وطلب أن يرى الرسم من جديد."
        ],
        en: [
          "Ayman has twenty tabs open on his computer: email, an article he never finished, a bill he hasn't paid, a car he is thinking of buying, a lesson he started two weeks ago. He says he is working on everything at once.",
          "At the end of the day he knows he has worked on nothing. Every tab reminds him of something unfinished, and his mind jumps between them, settling on none. In the evening his son brought him a drawing from school; Ayman said «lovely» with his eyes on the screen, and the boy folded his paper and left.",
          "A verse of al-Ahzab, revealed about another matter, holds in its wording a truth about every person, meaning: Allah has not placed two hearts inside any man (al-Ahzab 33:4). A person has one heart and one attention, and whatever is spread across twenty things gives each of them little.",
          "Every switch from one task to another has a cost: the mind needs time to return to where it was, and hours are lost in the switching that their owner never sees.",
          "Practical steps: close every tab your current work doesn't need, and write down on paper whatever you fear forgetting instead of leaving it open. Work on one thing for an unbroken stretch, then move on. When one of your children comes to you, turn the screen away before you look at them. At the end of the day, finish one thing, however small, before you shut the computer.",
          "The next night Ayman closed eighteen tabs and wrote what was in them on a small card by the keyboard. He paid the bill and finished the article. When his son came in, he lowered the laptop lid and asked to see the drawing again."
        ]
      },
      quote: {
        ar: "﴿مَا جَعَلَ اللَّهُ لِرَجُلٍ مِنْ قَلْبَيْنِ فِي جَوْفِهِ﴾",
        en: "Meaning (not a translation): Allah has not placed two hearts inside any man.",
        ref: "الأحزاب 33:4", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع آية من سورة الأحزاب.", en: "An original story with fictional characters, with a verse from al-Ahzab." }
    },
    {
      id: "am-r2", minutes: 4, ages: "18+",
      title: { ar: "حتى تنهي جملتها", en: "Until she finishes her sentence" },
      body: {
        ar: [
          "عادت منى من عملها مهمومة، وبدأت تحكي لزوجها زياد عن خلاف مع مديرتها. وقبل أن تكمل الجملة الثانية قال زياد: «لا تهتمي، اكتبي لها رسالة واضحة، أو ابحثي عن عمل آخر».",
          "سكتت منى، ثم قالت: «لم أطلب حلًّا يا زياد، أردت أن تسمعني». واستغرب زياد، فقد ظن أنه يساعدها.",
          "كثير منا يسمع ليرد، لا ليفهم. يبدأ تحضير الجواب والآخر ما زال يتكلم، فيقاطعه، أو يكمل جملته عنه، أو يقفز إلى نصيحة لم تُطلب. والقرآن يأمر بأحسن القول، ويحذّر مما يفعله الكلام السيئ بين الناس: ﴿وَقُلْ لِعِبَادِي يَقُولُوا الَّتِي هِيَ أَحْسَنُ ۚ إِنَّ الشَّيْطَانَ يَنْزَغُ بَيْنَهُمْ﴾ (الإسراء 17:53).",
          "والمقاطعة من أسرع ما يفتح باب هذا النزغ: يشعر المقاطَع أنه غير مهم، فيرفع صوته، ويتحول الحديث إلى خصام.",
          "خطوات عملية: دع المتكلم ينهي كلامه كله. أعد عليه ما فهمته في جملة: «تقصد أن...». واسأل قبل أن تنصح: «تريد رأيي، أم تريد أن أسمعك؟». وفي الاجتماعات اكتب فكرتك على ورقة بدل أن تقطع بها كلام غيرك.",
          "بعد أيام عادت منى متعبة مرة أخرى. أطفأ زياد الموقد، وجلس قبالتها، وسألها: «تريدين رأيي، أم أسمعك؟». قالت: «اسمعني أولًا». فسمع عشر دقائق لم يقل فيها شيئًا، ثم كانت هي التي سألته عن رأيه."
        ],
        ar_f: [
          "عادت منى من عملها مهمومة، وبدأت تحكي لزوجها زياد عن خلاف مع مديرتها. وقبل أن تكمل الجملة الثانية قال زياد: «لا تهتمي، اكتبي لها رسالة واضحة، أو ابحثي عن عمل آخر».",
          "سكتت منى، ثم قالت: «لم أطلب حلًّا يا زياد، أردت أن تسمعني». واستغرب زياد، فقد ظن أنه يساعدها.",
          "كثير منا يسمع ليرد، لا ليفهم. يبدأ تحضير الجواب والآخر ما زال يتكلم، فيقاطعه، أو يكمل جملته عنه، أو يقفز إلى نصيحة لم تُطلب. والقرآن يأمر بأحسن القول، ويحذّر مما يفعله الكلام السيئ بين الناس: ﴿وَقُلْ لِعِبَادِي يَقُولُوا الَّتِي هِيَ أَحْسَنُ ۚ إِنَّ الشَّيْطَانَ يَنْزَغُ بَيْنَهُمْ﴾ (الإسراء 17:53).",
          "والمقاطعة من أسرع ما يفتح باب هذا النزغ: يشعر المقاطَع أنه غير مهم، فيرفع صوته، ويتحول الحديث إلى خصام.",
          "خطوات عملية: دعي المتكلم ينهي كلامه كله. أعيدي عليه ما فهمتِه في جملة: «تقصد أن...». واسألي قبل أن تنصحي: «تريد رأيي، أم تريد أن أسمعك؟». وفي الاجتماعات اكتبي فكرتك على ورقة بدل أن تقطعي بها كلام غيرك.",
          "بعد أيام عادت منى متعبة مرة أخرى. أطفأ زياد الموقد، وجلس قبالتها، وسألها: «تريدين رأيي، أم أسمعك؟». قالت: «اسمعني أولًا». فسمع عشر دقائق لم يقل فيها شيئًا، ثم كانت هي التي سألته عن رأيه."
        ],
        en: [
          "Mona came home from work troubled and began telling her husband Ziyad about a disagreement with her manager. Before she had finished her second sentence Ziyad said: «Don't worry about it; write her a clear message, or look for another job.»",
          "Mona fell silent, then said: «I didn't ask for a solution, Ziyad. I wanted you to listen.» Ziyad was surprised; he had thought he was helping.",
          "Many of us listen in order to reply, not to understand. We start preparing the answer while the other is still talking, so we interrupt, finish their sentence for them, or jump to advice nobody asked for. The Quran commands the best speech and warns of what bad words do between people, meaning: tell My servants to say what is best; Satan sows discord among them (al-Isra 17:53).",
          "Interrupting is one of the quickest ways to open the door to that discord: the person cut off feels unimportant, raises their voice, and the conversation turns into a quarrel.",
          "Practical steps: let the speaker finish everything. Sum up what you understood in one sentence: «You mean that...». Ask before advising: «Do you want my opinion, or do you want me to listen?» In meetings, write your idea on paper instead of cutting into someone else's words with it.",
          "A few days later Mona came home tired again. Ziyad turned off the stove, sat down facing her and asked: «Do you want my opinion, or shall I listen?» She said: «Listen first.» He listened for ten minutes without a word, and in the end it was she who asked what he thought."
        ]
      },
      quote: {
        ar: "﴿وَقُلْ لِعِبَادِي يَقُولُوا الَّتِي هِيَ أَحْسَنُ ۚ إِنَّ الشَّيْطَانَ يَنْزَغُ بَيْنَهُمْ﴾",
        en: "Meaning (not a translation): Tell My servants to say what is best; Satan sows discord among them.",
        ref: "الإسراء 17:53", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع آية من سورة الإسراء.", en: "An original story with fictional characters, with a verse from al-Isra." }
    },
    {
      id: "am-r3", minutes: 4, ages: "18+",
      title: { ar: "على الطريق", en: "On the road" },
      body: {
        ar: [
          "كان نادر متأخرًا عن اجتماع، فدخلت سيارة أمامه فجأة. ضغط البوق طويلًا، ولحق بها، وأنزل زجاج النافذة وصاح. وحين وقفت السيارتان عند الإشارة رأى في المقعد الخلفي للسيارة الأخرى طفلًا خائفًا ينظر إليه.",
          "وصل نادر إلى الاجتماع وقلبه يخفق، ولم يستطع أن يركّز فيه. وطوال اليوم كانت صورة الطفل تعود إليه.",
          "قال النبي صلى الله عليه وآله وسلم: «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ» (البخاري 6114). والقوة التي يمدحها الحديث أن تغلب ما يشتعل فيك أنت.",
          "وعلّم النبي صلى الله عليه وآله وسلم دواء الغضب. استبّ رجلان عنده، وأحدهما يسبّ صاحبه مغضبًا قد احمرّ وجهه، فقال: «إِنِّي لأَعْلَمُ كَلِمَةً لَوْ قَالَهَا لَذَهَبَ عَنْهُ مَا يَجِدُ لَوْ قَالَ أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ» (البخاري 6115).",
          "خطوات عملية: اخرج قبل موعدك بدقائق، فالاستعجال وقود الغضب. وإذا أخطأ أحد في حقك على الطريق فقل الاستعاذة، وخفّف السرعة، ولا تلحق به. وتذكّر أن السائق الآخر قد يكون مسرعًا إلى مستشفى، أو أبًا متعبًا، أو مخطئًا كما تخطئ أنت أحيانًا.",
          "في الأسبوع التالي خرج نادر قبل موعده بربع ساعة. وعلى الطريق نفسه دخلت سيارة أمامه، فرفع قدمه عن الوقود، وقال الاستعاذة بصوت لم يسمعه غيره، وترك بينه وبينها مسافة حتى الإشارة."
        ],
        ar_f: [
          "كان نادر متأخرًا عن اجتماع، فدخلت سيارة أمامه فجأة. ضغط البوق طويلًا، ولحق بها، وأنزل زجاج النافذة وصاح. وحين وقفت السيارتان عند الإشارة رأى في المقعد الخلفي للسيارة الأخرى طفلًا خائفًا ينظر إليه.",
          "وصل نادر إلى الاجتماع وقلبه يخفق، ولم يستطع أن يركّز فيه. وطوال اليوم كانت صورة الطفل تعود إليه.",
          "قال النبي صلى الله عليه وآله وسلم: «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ» (البخاري 6114). والقوة التي يمدحها الحديث أن تغلبي ما يشتعل فيكِ أنتِ.",
          "وعلّم النبي صلى الله عليه وآله وسلم دواء الغضب. استبّ رجلان عنده، وأحدهما يسبّ صاحبه مغضبًا قد احمرّ وجهه، فقال: «إِنِّي لأَعْلَمُ كَلِمَةً لَوْ قَالَهَا لَذَهَبَ عَنْهُ مَا يَجِدُ لَوْ قَالَ أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ» (البخاري 6115).",
          "خطوات عملية: اخرجي قبل موعدك بدقائق، فالاستعجال وقود الغضب. وإذا أخطأ أحد في حقك على الطريق فقولي الاستعاذة، وخفّفي السرعة، ولا تلحقي به. وتذكّري أن السائق الآخر قد يكون مسرعًا إلى مستشفى، أو أبًا متعبًا، أو مخطئًا كما تخطئين أنتِ أحيانًا.",
          "في الأسبوع التالي خرج نادر قبل موعده بربع ساعة. وعلى الطريق نفسه دخلت سيارة أمامه، فرفع قدمه عن الوقود، وقال الاستعاذة بصوت لم يسمعه غيره، وترك بينه وبينها مسافة حتى الإشارة."
        ],
        en: [
          "Nader was late for a meeting when a car suddenly pulled in front of him. He leaned on the horn, chased it, rolled down his window and shouted. When the two cars stopped at the lights he saw a frightened child in the back seat of the other car, looking at him.",
          "Nader reached the meeting with his heart pounding and could not concentrate. All day the picture of that child kept coming back to him.",
          "The Prophet, peace and blessings be upon him and his family, said: «The strong one is not the one who wrestles others down; the strong one is he who controls himself when angry» (Bukhari 6114). The strength the hadith praises is overpowering what flares up inside you.",
          "The Prophet also taught the remedy for anger. Two men were insulting each other in his presence, one of them furious and red in the face. He said, in meaning: I know a phrase which, if he said it, what he feels would leave him: if he said, I seek refuge in Allah from Satan the accursed (Bukhari 6115).",
          "Practical steps: leave a few minutes early, for hurry is the fuel of anger. If someone wrongs you on the road, say the words of refuge, slow down, and don't chase them. Remember that the other driver may be rushing to a hospital, or be a tired parent, or simply be wrong, as you are sometimes.",
          "The following week Nader left a quarter of an hour early. On the same road a car pulled in front of him; he lifted his foot off the accelerator, said the words of refuge too quietly for anyone else to hear, and kept his distance until the lights."
        ]
      },
      quote: {
        ar: "«لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ»",
        en: "Meaning: The strong one is not the one who wrestles others down; the strong one is he who controls himself when angry.",
        ref: "صحيح البخاري 6114، عن أبي هريرة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع حديثين في صحيح البخاري.", en: "An original story with fictional characters, with two hadiths in Sahih al-Bukhari." }
    },
    {
      id: "am-r4", minutes: 4, ages: "18+",
      title: { ar: "صوت أعلى من اللازم", en: "A voice louder than it needs to be" },
      body: {
        ar: [
          "الساعة السابعة صباحًا. سلمى تحضّر الإفطار، وتبحث عن حذاء ابنها، وتذكّر ابنتها بكتاب نسيته، والحافلة بعد عشر دقائق. وحين سكب الصغير الحليب على قميصه المدرسي صرخت بصوت سمعه الجيران.",
          "ركب الأولاد الحافلة صامتين. وجلست سلمى في المطبخ تشعر بثقل، وتعرف أن الحليب لم يكن السبب، وأن الصباح المزدحم كان يغلي فيها قبل أن يُسكب.",
          "روت السيدة عائشة رضي الله عنها عن النبي صلى الله عليه وآله وسلم أنه قال: «إِنَّ الرِّفْقَ لاَ يَكُونُ فِي شَىْءٍ إِلاَّ زَانَهُ وَلاَ يُنْزَعُ مِنْ شَىْءٍ إِلاَّ شَانَهُ» (صحيح مسلم 2594). والصراخ ينزع الرفق من البيت، ويعلّم الأولاد أن الصوت العالي طريقة لحل المشكلات.",
          "وأكثر الغضب على الأولاد يبدأ قبل خطئهم بكثير: في استعجال، أو تعب، أو همّ حُمل من العمل. ومن عرف ذلك عرف أين يبدأ العلاج.",
          "خطوات عملية: حضّر في الليل ما تستطيع: الملابس والحقائب والإفطار. وإذا شعرت بالصوت يرتفع فانزل إلى مستوى الطفل، وتكلم بصوت أخفض مما تريد. وإن صرخت فاعتذر إليه بعد أن تهدأ، فالاعتذار للصغير درس لا ينساه.",
          "في المساء صفّت سلمى الحقائب الثلاث عند الباب، وعلّقت القمصان على ظهور الكراسي. ثم دخلت غرفة الصغير، وجلست على طرف سريره، وقالت: «صرختُ عليك اليوم، وأنا آسفة». فأمسك يدها وقال: «والقميص صار نظيفًا»."
        ],
        ar_f: [
          "الساعة السابعة صباحًا. سلمى تحضّر الإفطار، وتبحث عن حذاء ابنها، وتذكّر ابنتها بكتاب نسيته، والحافلة بعد عشر دقائق. وحين سكب الصغير الحليب على قميصه المدرسي صرخت بصوت سمعه الجيران.",
          "ركب الأولاد الحافلة صامتين. وجلست سلمى في المطبخ تشعر بثقل، وتعرف أن الحليب لم يكن السبب، وأن الصباح المزدحم كان يغلي فيها قبل أن يُسكب.",
          "روت السيدة عائشة رضي الله عنها عن النبي صلى الله عليه وآله وسلم أنه قال: «إِنَّ الرِّفْقَ لاَ يَكُونُ فِي شَىْءٍ إِلاَّ زَانَهُ وَلاَ يُنْزَعُ مِنْ شَىْءٍ إِلاَّ شَانَهُ» (صحيح مسلم 2594). والصراخ ينزع الرفق من البيت، ويعلّم الأولاد أن الصوت العالي طريقة لحل المشكلات.",
          "وأكثر الغضب على الأولاد يبدأ قبل خطئهم بكثير: في استعجال، أو تعب، أو همّ حُمل من العمل. ومن عرف ذلك عرف أين يبدأ العلاج.",
          "خطوات عملية: حضّري في الليل ما تستطيعين: الملابس والحقائب والإفطار. وإذا شعرتِ بالصوت يرتفع فانزلي إلى مستوى الطفل، وتكلمي بصوت أخفض مما تريدين. وإن صرختِ فاعتذري إليه بعد أن تهدئي، فالاعتذار للصغير درس لا ينساه.",
          "في المساء صفّت سلمى الحقائب الثلاث عند الباب، وعلّقت القمصان على ظهور الكراسي. ثم دخلت غرفة الصغير، وجلست على طرف سريره، وقالت: «صرختُ عليك اليوم، وأنا آسفة». فأمسك يدها وقال: «والقميص صار نظيفًا»."
        ],
        en: [
          "Seven in the morning. Salma is making breakfast, hunting for her son's shoe, reminding her daughter of a book she forgot, and the bus comes in ten minutes. When the youngest spills milk on his school shirt she shouts loud enough for the neighbours to hear.",
          "The children get on the bus in silence. Salma sits in the kitchen feeling heavy, knowing the milk wasn't the cause, that the crowded morning had been boiling inside her before anything was spilled.",
          "Lady Aisha, may Allah be pleased with her, reported that the Prophet, peace and blessings be upon him and his family, said: «Gentleness is not in anything except that it adorns it, and it is not removed from anything except that it disfigures it» (Sahih Muslim 2594). Shouting removes gentleness from a home, and teaches children that a loud voice is the way to solve problems.",
          "Most anger at children begins long before their mistake: in hurry, in tiredness, in worry carried home from work. Whoever knows that knows where the cure begins.",
          "Practical steps: prepare what you can the night before: clothes, bags, breakfast. When you feel your voice rising, get down to the child's level and speak more softly than you want to. If you do shout, apologise once you are calm, for an apology to a little one is a lesson they never forget.",
          "That evening Salma lined up the three bags by the door and hung the shirts over the backs of the chairs. Then she went into the youngest's room, sat on the edge of his bed and said: «I shouted at you today, and I'm sorry.» He took her hand and said: «And the shirt got clean again.»"
        ]
      },
      quote: {
        ar: "«إِنَّ الرِّفْقَ لاَ يَكُونُ فِي شَىْءٍ إِلاَّ زَانَهُ وَلاَ يُنْزَعُ مِنْ شَىْءٍ إِلاَّ شَانَهُ»",
        en: "Meaning: Gentleness is not in anything except that it adorns it, and it is not removed from anything except that it disfigures it.",
        ref: "صحيح مسلم 2594 (ترقيم sunnah.com: الكتاب 45، الحديث 100)، عن عائشة رضي الله عنها", checked: "hadith-api (fawazahmed0), ara-muslim 6602", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع حديث في صحيح مسلم.", en: "An original story with fictional characters, with a hadith in Sahih Muslim." }
    },
    {
      id: "am-r5", minutes: 5, ages: "18+",
      title: { ar: "مقطع أضحك المجموعة", en: "A clip that made the group laugh" },
      body: {
        ar: [
          "وصل إلى وائل في مجموعة الأصدقاء مقطع قصير: رجل مسنّ عند صندوق الدفع في متجر، يحاول أن يدفع بهاتفه فيضغط الزر الخطأ مرة بعد مرة، والطابور خلفه يتأفف. وفوق المقطع موسيقى مضحكة، وتحته تعليق: «جيل لا أمل فيه».",
          "ضحك وائل، وأعاد توجيهه إلى مجموعة العمل، وزاد عليه ثلاثة رموز ضاحكة. وفي دقائق امتلأت المجموعة بالضحكات، ومضى كل واحد إلى عمله.",
          "وفي صباح الجمعة وقف وائل في طابور الصيدلية، فرأى أباه أمامه عند الصندوق يحاول أن يدفع بهاتفه الجديد. أخطأ أبوه الزر مرتين، وتنهّد الشاب الذي خلفه بصوت مسموع، فاحمرّ وجه الأب ونظر حوله كأنه يعتذر. تقدّم وائل ووقف بجانبه، وأمسك الهاتف معه حتى تم الدفع.",
          "قال الله تعالى: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ عَسَىٰ أَنْ يَكُونُوا خَيْرًا مِنْهُمْ﴾ (الحجرات 49:11). والرجل في المقطع له اسم وبيت وأولاد، ولعل له عند الله منزلة لا يبلغها أحد ممن ضحكوا منه. وقال النبي صلى الله عليه وآله وسلم: «بِحَسْبِ امْرِئٍ مِنَ الشَّرِّ أَنْ يَحْقِرَ أَخَاهُ الْمُسْلِمَ» (صحيح مسلم 2564).",
          "ويعرّف الغزالي السخرية بأنها «الاستهانة والتحقير والتنبيه على العيوب والنقائص على وجه يضحك منه»، ويذكر أنها قد تكون «بالمحاكاة في الفعل والقول»، وقد تكون «بالإشارة والإيماء» (إحياء علوم الدين، كتاب آفات اللسان، الآفة الحادية عشرة). وفي زماننا صار للإشارة شكل جديد: رمز ضاحك تحت مقطع، أو إعادة توجيه بضغطة واحدة.",
          "خطوات عملية: قبل أن تعيد توجيه مقطع يُضحك، اسأل: هل فيه إنسان يُضحك منه؟ وهل أرضى أن يدور مثله عن أبي، أو عني؟ وإذا دار في مجموعة فلا تزد عليه رمزًا، ويكفيك أن تسكت، أو أن تكتب: «لعل له عذرًا». وإن أرسلته ثم تبيّن لك، فاحذفه، واعتذر في المجموعة نفسها التي أرسلته فيها.",
          "في السيارة فتح وائل مجموعة العمل، فوجد المقطع ما زال في أعلاها. حذفه، وكتب تحته: «أرسلت أمس مقطعًا لا يليق، وأعتذر. رأيت اليوم أبي في الموقف نفسه». ثم أعاد الهاتف إلى جيبه، وسأل أباه إن كان يريد أن يتعلم الدفع بالهاتف في البيت."
        ],
        ar_f: [
          "وصل إلى وائل في مجموعة الأصدقاء مقطع قصير: رجل مسنّ عند صندوق الدفع في متجر، يحاول أن يدفع بهاتفه فيضغط الزر الخطأ مرة بعد مرة، والطابور خلفه يتأفف. وفوق المقطع موسيقى مضحكة، وتحته تعليق: «جيل لا أمل فيه».",
          "ضحك وائل، وأعاد توجيهه إلى مجموعة العمل، وزاد عليه ثلاثة رموز ضاحكة. وفي دقائق امتلأت المجموعة بالضحكات، ومضى كل واحد إلى عمله.",
          "وفي صباح الجمعة وقف وائل في طابور الصيدلية، فرأى أباه أمامه عند الصندوق يحاول أن يدفع بهاتفه الجديد. أخطأ أبوه الزر مرتين، وتنهّد الشاب الذي خلفه بصوت مسموع، فاحمرّ وجه الأب ونظر حوله كأنه يعتذر. تقدّم وائل ووقف بجانبه، وأمسك الهاتف معه حتى تم الدفع.",
          "قال الله تعالى: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ عَسَىٰ أَنْ يَكُونُوا خَيْرًا مِنْهُمْ﴾ (الحجرات 49:11). والرجل في المقطع له اسم وبيت وأولاد، ولعل له عند الله منزلة لا يبلغها أحد ممن ضحكوا منه. وقال النبي صلى الله عليه وآله وسلم: «بِحَسْبِ امْرِئٍ مِنَ الشَّرِّ أَنْ يَحْقِرَ أَخَاهُ الْمُسْلِمَ» (صحيح مسلم 2564).",
          "ويعرّف الغزالي السخرية بأنها «الاستهانة والتحقير والتنبيه على العيوب والنقائص على وجه يضحك منه»، ويذكر أنها قد تكون «بالمحاكاة في الفعل والقول»، وقد تكون «بالإشارة والإيماء» (إحياء علوم الدين، كتاب آفات اللسان، الآفة الحادية عشرة). وفي زماننا صار للإشارة شكل جديد: رمز ضاحك تحت مقطع، أو إعادة توجيه بضغطة واحدة.",
          "خطوات عملية: قبل أن تعيدي توجيه مقطع يُضحك، اسألي: هل فيه إنسان يُضحك منه؟ وهل أرضى أن يدور مثله عن أبي، أو عني؟ وإذا دار في مجموعة فلا تزيدي عليه رمزًا، ويكفيكِ أن تسكتي، أو أن تكتبي: «لعل له عذرًا». وإن أرسلتِه ثم تبيّن لكِ، فاحذفيه، واعتذري في المجموعة نفسها التي أرسلتِه فيها.",
          "في السيارة فتح وائل مجموعة العمل، فوجد المقطع ما زال في أعلاها. حذفه، وكتب تحته: «أرسلت أمس مقطعًا لا يليق، وأعتذر. رأيت اليوم أبي في الموقف نفسه». ثم أعاد الهاتف إلى جيبه، وسأل أباه إن كان يريد أن يتعلم الدفع بالهاتف في البيت."
        ],
        en: [
          "A short clip reached Wael in his friends' group: an elderly man at a shop checkout trying to pay with his phone, pressing the wrong button again and again while the queue behind him sighs. Comic music plays over it, and beneath it a caption: «A hopeless generation».",
          "Wael laughed, forwarded it to his work group and added three laughing emojis. Within minutes the group was full of laughter, and everyone went back to work.",
          "On Friday morning Wael was standing in the pharmacy queue when he saw his father ahead of him at the counter, trying to pay with his new phone. His father pressed the wrong button twice, the young man behind him sighed audibly, and his father's face reddened as he looked around as if to apologise. Wael stepped up beside him and held the phone with him until the payment went through.",
          "Allah says, in meaning: O you who believe, let no people mock another people; perhaps they are better than them (al-Hujurat 49:11). The man in the clip has a name, a home and children, and perhaps a standing with Allah that none of those laughing at him will reach. The Prophet, peace and blessings be upon him and his family, said: «It is evil enough for a man to look down on his Muslim brother» (Sahih Muslim 2564).",
          "Al-Ghazali defines mockery as «belittling and scorning, and pointing out faults and shortcomings in a way that makes people laugh», and notes that it can be «by imitation in deed and word» or «by gesture and hint» (Ihya 'Ulum al-Din, Book of the Afflictions of the Tongue, eleventh affliction). In our time the gesture has taken a new form: a laughing emoji under a clip, or a forward with a single tap.",
          "Practical steps: before you forward a funny clip, ask: is there a person in it being laughed at? Would I accept something like it going round about my father, or about me? If it is circulating in a group, add no emoji to it; silence is enough, or write: «Perhaps he has an excuse.» And if you sent it and then saw it for what it was, delete it and apologise in the same group where you sent it.",
          "In the car Wael opened the work group and found the clip still at the top. He deleted it and wrote: «Yesterday I sent a clip that wasn't fitting, and I apologise. Today I saw my father in the same situation.» Then he put the phone back in his pocket and asked his father whether he would like to learn to pay with his phone at home."
        ]
      },
      quote: {
        ar: "﴿يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ عَسَىٰ أَنْ يَكُونُوا خَيْرًا مِنْهُمْ﴾",
        en: "Meaning (not a translation): O you who believe, let no people mock another people; perhaps they are better than them.",
        ref: "الحجرات 49:11", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud); Muslim 2564 = hadith-api ara-muslim 6541; al-Ghazali text: ar.wikisource.org (Ihya, Kitab Afat al-Lisan)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع آية من سورة الحجرات، وحديث في صحيح مسلم، ونقل من «إحياء علوم الدين» للغزالي.", en: "An original story with fictional characters, with a verse from al-Hujurat, a hadith in Sahih Muslim, and a passage from al-Ghazali's Ihya 'Ulum al-Din." }
    },
    {
      id: "am-r6", minutes: 4, ages: "18+",
      title: { ar: "ما يفعله الجميع", en: "What everyone is doing" },
      body: {
        ar: [
          "رأى عادل على هاتفه صديقًا قديمًا يسافر كل شهر، ويصوّر مطاعم فاخرة وسيارة جديدة. وبعد أسابيع كان قد غيّر سيارته بقرض، وحجز رحلة لا تحتملها ميزانيته، وصار يصوّر كل ما يأكل.",
          "ولم يشعر بالسعادة التي رآها في الصور. شعر بالقلق من القسط، وبالتعب من الحرص على أن تبدو حياته جميلة لمن يتابعه.",
          "الإنسان يتعلم بالاقتداء، وبه يأخذ الولد لغة أبيه وصلاته وطريقته في الكلام. والتقليد الأعمى يأخذ ما يراه دون أن يسأل: هل هذا صحيح؟ وهل يناسبني؟ وهل أعرف ما وراء الصورة؟ والقرآن يحذّر من اتباع ما لا علم للإنسان به: ﴿وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ ۚ إِنَّ السَّمْعَ وَالْبَصَرَ وَالْفُؤَادَ كُلُّ أُولَٰئِكَ كَانَ عَنْهُ مَسْئُولًا﴾ (الإسراء 17:36).",
          "والبصر مسؤول عمّا يرى، والقلب مسؤول عمّا يقلّده. وما يُعرض على الشاشة مختار ومقصوص: لا ترى فيه الديون، ولا الخلافات، ولا الأيام العادية.",
          "خطوات عملية: قبل أن تشتري ما رأيته أو تفعل ما انتشر، اسأل ثلاثة أسئلة: هل هو حلال؟ هل أحتاج إليه؟ هل كنت سأريده لو لم أره عند غيري؟ وألغِ متابعة من يتركك كل مرة ساخطًا على حياتك، وتابع من يزيدك علمًا أو خيرًا.",
          "في آخر الشهر جلس عادل مع زوجته أمام كشف الحساب، وألغى حجز الرحلة. وفي العطلة أخذ أولاده إلى بيت جدهم في القرية، وبقي الهاتف في جيبه حتى المساء."
        ],
        ar_f: [
          "رأى عادل على هاتفه صديقًا قديمًا يسافر كل شهر، ويصوّر مطاعم فاخرة وسيارة جديدة. وبعد أسابيع كان قد غيّر سيارته بقرض، وحجز رحلة لا تحتملها ميزانيته، وصار يصوّر كل ما يأكل.",
          "ولم يشعر بالسعادة التي رآها في الصور. شعر بالقلق من القسط، وبالتعب من الحرص على أن تبدو حياته جميلة لمن يتابعه.",
          "الإنسان يتعلم بالاقتداء، وبه يأخذ الولد لغة أبيه وصلاته وطريقته في الكلام. والتقليد الأعمى يأخذ ما يراه دون أن يسأل: هل هذا صحيح؟ وهل يناسبني؟ وهل أعرف ما وراء الصورة؟ والقرآن يحذّر من اتباع ما لا علم للإنسان به: ﴿وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ ۚ إِنَّ السَّمْعَ وَالْبَصَرَ وَالْفُؤَادَ كُلُّ أُولَٰئِكَ كَانَ عَنْهُ مَسْئُولًا﴾ (الإسراء 17:36).",
          "والبصر مسؤول عمّا يرى، والقلب مسؤول عمّا يقلّده. وما يُعرض على الشاشة مختار ومقصوص: لا ترين فيه الديون، ولا الخلافات، ولا الأيام العادية.",
          "خطوات عملية: قبل أن تشتري ما رأيتِه أو تفعلي ما انتشر، اسألي ثلاثة أسئلة: هل هو حلال؟ هل أحتاج إليه؟ هل كنت سأريده لو لم أره عند غيري؟ وألغي متابعة من يتركك كل مرة ساخطة على حياتك، وتابعي من يزيدك علمًا أو خيرًا.",
          "في آخر الشهر جلس عادل مع زوجته أمام كشف الحساب، وألغى حجز الرحلة. وفي العطلة أخذ أولاده إلى بيت جدهم في القرية، وبقي الهاتف في جيبه حتى المساء."
        ],
        en: [
          "On his phone Adel saw an old friend travelling every month, posting fine restaurants and a new car. Within weeks Adel had changed his car with a loan, booked a trip his budget could not bear, and started photographing everything he ate.",
          "He did not feel the happiness he had seen in the pictures. He felt anxious about the instalments, and tired from working to make his life look beautiful to those who followed him.",
          "People learn by following examples; that is how a child takes on his father's language, his prayer and his way of speaking. Blind imitation takes what it sees without asking: is this true? Does it suit me? Do I know what lies behind the picture? The Quran warns against following what one has no knowledge of, meaning: do not pursue what you have no knowledge of; hearing, sight and heart will each be asked about it (al-Isra 17:36).",
          "Sight is answerable for what it looks at, and the heart for what it copies. What is shown on a screen is chosen and cut: you don't see the debts in it, or the quarrels, or the ordinary days.",
          "Practical steps: before you buy what you saw or do what is trending, ask three questions: is it lawful? Do I need it? Would I want it if I hadn't seen it with someone else? Unfollow whoever leaves you resentful of your own life every time, and follow those who add to your knowledge or your good.",
          "At the end of the month Adel sat down with his wife over the bank statement and cancelled the trip. In the holidays he took his children to their grandfather's house in the village, and the phone stayed in his pocket until evening."
        ]
      },
      quote: {
        ar: "﴿وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ ۚ إِنَّ السَّمْعَ وَالْبَصَرَ وَالْفُؤَادَ كُلُّ أُولَٰئِكَ كَانَ عَنْهُ مَسْئُولًا﴾",
        en: "Meaning (not a translation): Do not pursue what you have no knowledge of; hearing, sight and heart will each be asked about it.",
        ref: "الإسراء 17:36", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع آية من سورة الإسراء.", en: "An original story with fictional characters, with a verse from al-Isra." }
    },
    {
      id: "am-r7", summit: true, minutes: 4, ages: "18+",
      title: { ar: "القمة: «دَعُوهُ»", en: "The summit: «Leave him»" },
      body: {
        ar: [
          "روى أبو هريرة رضي الله عنه أن أعرابيًّا قام فبال في المسجد، فتناوله الناس، أي همّوا به ينهرونه. فقال لهم النبي صلى الله عليه وآله وسلم: «دَعُوهُ وَهَرِيقُوا عَلَى بَوْلِهِ سَجْلاً مِنْ مَاءٍ، أَوْ ذَنُوبًا مِنْ مَاءٍ، فَإِنَّمَا بُعِثْتُمْ مُيَسِّرِينَ، وَلَمْ تُبْعَثُوا مُعَسِّرِينَ» (البخاري 220).",
          "وفي رواية أنس بن مالك رضي الله عنه أنه صلى الله عليه وآله وسلم قال لأصحابه: «لاَ تُزْرِمُوهُ دَعُوهُ»، أي لا تقطعوا عليه، فتركوه حتى فرغ. ثم دعاه فقال له: «إِنَّ هَذِهِ الْمَسَاجِدَ لاَ تَصْلُحُ لِشَىْءٍ مِنْ هَذَا الْبَوْلِ وَلاَ الْقَذَرِ إِنَّمَا هِيَ لِذِكْرِ اللَّهِ عَزَّ وَجَلَّ وَالصَّلاَةِ وَقِرَاءَةِ الْقُرْآنِ» (صحيح مسلم 285).",
          "الخطأ هنا كبير، وفي أطهر مكان، واندفع الناس كما يندفع أكثرنا حين يرى خطأ أمام عينه. ونظر النبي صلى الله عليه وآله وسلم إلى العاقبة: رجل لا يعرف، وماء يطهّر المكان، وقلب يُكسب ويبقى قريبًا.",
          "وفي الموقف دواء هذه المرحلة كلها: انتباه ثابت على المقصود وسط الضجة، ونظر يسبق الحركة، وحِلم يسبق الغضب، ثم كلمة تعليم هادئة بعد أن يهدأ كل شيء. وجعل من الموقف درسًا لأصحابه في التيسير.",
          "سؤال للتأمل: متى اندفعت آخر مرة إلى إنسان أخطأ أمامك، في البيت أو في العمل؟ وكيف كان يمكن أن يكون الموقف لو قلت أولًا: «دعوه»، ثم علّمت بهدوء؟"
        ],
        ar_f: [
          "روى أبو هريرة رضي الله عنه أن أعرابيًّا قام فبال في المسجد، فتناوله الناس، أي همّوا به ينهرونه. فقال لهم النبي صلى الله عليه وآله وسلم: «دَعُوهُ وَهَرِيقُوا عَلَى بَوْلِهِ سَجْلاً مِنْ مَاءٍ، أَوْ ذَنُوبًا مِنْ مَاءٍ، فَإِنَّمَا بُعِثْتُمْ مُيَسِّرِينَ، وَلَمْ تُبْعَثُوا مُعَسِّرِينَ» (البخاري 220).",
          "وفي رواية أنس بن مالك رضي الله عنه أنه صلى الله عليه وآله وسلم قال لأصحابه: «لاَ تُزْرِمُوهُ دَعُوهُ»، أي لا تقطعوا عليه، فتركوه حتى فرغ. ثم دعاه فقال له: «إِنَّ هَذِهِ الْمَسَاجِدَ لاَ تَصْلُحُ لِشَىْءٍ مِنْ هَذَا الْبَوْلِ وَلاَ الْقَذَرِ إِنَّمَا هِيَ لِذِكْرِ اللَّهِ عَزَّ وَجَلَّ وَالصَّلاَةِ وَقِرَاءَةِ الْقُرْآنِ» (صحيح مسلم 285).",
          "الخطأ هنا كبير، وفي أطهر مكان، واندفع الناس كما يندفع أكثرنا حين يرى خطأ أمام عينه. ونظر النبي صلى الله عليه وآله وسلم إلى العاقبة: رجل لا يعرف، وماء يطهّر المكان، وقلب يُكسب ويبقى قريبًا.",
          "وفي الموقف دواء هذه المرحلة كلها: انتباه ثابت على المقصود وسط الضجة، ونظر يسبق الحركة، وحِلم يسبق الغضب، ثم كلمة تعليم هادئة بعد أن يهدأ كل شيء. وجعل من الموقف درسًا لأصحابه في التيسير.",
          "سؤال للتأمل: متى اندفعتِ آخر مرة إلى إنسان أخطأ أمامك، في البيت أو في العمل؟ وكيف كان يمكن أن يكون الموقف لو قلتِ أولًا: «دعوه»، ثم علّمتِ بهدوء؟"
        ],
        en: [
          "Abu Hurayra, may Allah be pleased with him, reported that a Bedouin stood up and urinated in the mosque, and the people rushed at him. The Prophet, peace and blessings be upon him and his family, said to them: «Leave him, and pour a bucket of water over his urine; you were sent to make things easy, not to make them hard» (Bukhari 220).",
          "In the narration of Anas ibn Malik, may Allah be pleased with him, he told his Companions: «Do not cut him short; leave him», and they left him until he had finished. Then he called the man and said to him, in meaning: these mosques are not fit for anything of this urine or filth; they are only for the remembrance of Allah, the prayer and the recitation of the Quran (Sahih Muslim 285).",
          "The wrong here was serious, and in the purest of places, and the people rushed forward as most of us do when a mistake happens before our eyes. The Prophet looked to the outcome: a man who did not know, water that would purify the place, and a heart to be won and kept close.",
          "This one moment holds the cure for this whole stage: attention held on what matters amid the commotion, looking before moving, forbearance before anger, and then a calm word of teaching once everything has settled. And he turned the moment into a lesson in ease for his Companions.",
          "A question to reflect on: when did you last rush at someone who made a mistake in front of you, at home or at work? How might it have gone if you had first said «leave him», and then taught calmly?"
        ]
      },
      quote: {
        ar: "«فَإِنَّمَا بُعِثْتُمْ مُيَسِّرِينَ، وَلَمْ تُبْعَثُوا مُعَسِّرِينَ»",
        en: "Meaning: You were sent to make things easy, not to make them hard.",
        ref: "صحيح البخاري 220، عن أبي هريرة؛ وصحيح مسلم 285 (ترقيم sunnah.com: الكتاب 2، الحديث 127)، عن أنس", checked: "hadith-api (fawazahmed0): ara-bukhari 220, ara-muslim 661", verify: true
      },
      source: { ar: "حديثان في صحيحي البخاري ومسلم.", en: "Two hadiths, in Sahih al-Bukhari and Sahih Muslim." }
    },
    {
      id: "am-r8", companions: true, minutes: 4, ages: "18+",
      title: { ar: "عمر بن الخطاب: وقّاف عند كتاب الله", en: "Umar ibn al-Khattab: one who stopped at the Book of Allah" },
      body: {
        ar: [
          "روى ابن عباس رضي الله عنهما أن عيينة بن حصن قدم المدينة، فاستأذن له ابن أخيه الحرّ بن قيس على عمر بن الخطاب رضي الله عنه، وكان الحرّ من القرّاء الذين يقرّبهم عمر ويستشيرهم.",
          "فلما دخل عيينة قال: «هِيْ يَا ابْنَ الْخَطَّابِ، فَوَاللَّهِ مَا تُعْطِينَا الْجَزْلَ، وَلاَ تَحْكُمُ بَيْنَنَا بِالْعَدْلِ». فغضب عمر حتى همّ به. فقال الحرّ: يا أمير المؤمنين، إن الله تعالى قال لنبيه: ﴿خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ﴾ (الأعراف 7:199)، وإن هذا من الجاهلين.",
          "قال ابن عباس: «وَاللَّهِ مَا جَاوَزَهَا عُمَرُ حِينَ تَلاَهَا عَلَيْهِ، وَكَانَ وَقَّافًا عِنْدَ كِتَابِ اللَّهِ» (البخاري 4642).",
          "كان عمر رضي الله عنه أمير المؤمنين، شديدًا في الحق، وقد اتُّهم في وجهه بالظلم، وغضبه في ذلك مفهوم. ومع ذلك توقف عند آية واحدة. لم يكمل اندفاعه، ولم يجادل، ولم يقل: هذا الرجل يستحق.",
          "هذه هي الصفة التي تحتاج إليها هذه المرحلة: أن يكون في الغضب مكان للوقوف. ولا يكون ذلك إلا لمن حفظ في قلبه ما يقف عنده، وجعل حوله من يذكّره به كما ذكّره الحرّ. فمن حولك يذكّرك عند الغضب؟"
        ],
        en: [
          "Ibn Abbas, may Allah be pleased with them both, reported that Uyayna ibn Hisn came to Medina, and his nephew al-Hurr ibn Qays asked permission for him to see Umar ibn al-Khattab, may Allah be pleased with him. Al-Hurr was one of the Quran reciters whom Umar kept close and consulted.",
          "When Uyayna came in he said: «Listen, son of al-Khattab, by Allah you neither give us generously nor judge between us with justice.» Umar grew so angry that he was about to strike him. Al-Hurr said: Commander of the Believers, Allah said to His Prophet, meaning: take what is easily given, enjoin what is right, and turn away from the ignorant (al-A'raf 7:199), and this man is one of the ignorant.",
          "Ibn Abbas said: «By Allah, Umar did not go beyond it when it was recited to him, and he was one who stopped at the Book of Allah» (Bukhari 4642).",
          "Umar was the Commander of the Believers, firm for the truth; he had been accused of injustice to his face, and his anger was understandable. Yet he stopped at a single verse. He did not carry his impulse through, did not argue, did not say: this man deserves it.",
          "This is the quality this stage needs: room to stop in the middle of anger. It belongs only to someone who keeps in his heart something to stop at, and keeps people around him who remind him, as al-Hurr reminded Umar. Who around you reminds you when you are angry?"
        ]
      },
      quote: {
        ar: "«وَاللَّهِ مَا جَاوَزَهَا عُمَرُ حِينَ تَلاَهَا عَلَيْهِ، وَكَانَ وَقَّافًا عِنْدَ كِتَابِ اللَّهِ»",
        en: "Meaning: By Allah, Umar did not go beyond it when it was recited to him, and he was one who stopped at the Book of Allah.",
        ref: "صحيح البخاري 4642، عن ابن عباس", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "حديث في صحيح البخاري، مع آية من سورة الأعراف.", en: "A hadith in Sahih al-Bukhari, with a verse from al-A'raf." }
    }
  ],
  quiz: [
    {
      id: "am-q1", readingId: "am-r1", type: "comprehension", correct: 1,
      q: { ar: "لماذا لم ينجز أيمن شيئًا مع أنه يعمل على كل شيء؟", en: "Why did Ayman get nothing done although he was working on everything?" },
      options: [
        { ar: "لأن عمله في ذلك اليوم كان أكثر من طاقته", en: "Because he had more work that day than he could handle" },
        { ar: "لأن انتباهه توزّع على عشرين أمرًا مفتوحًا", en: "Because his attention was spread over twenty open things" },
        { ar: "لأنه كان ينتظر ردود زملائه على البريد", en: "Because he was waiting for his colleagues to answer his emails" }
      ],
      why: { ar: "للإنسان قلب واحد وانتباه واحد. وكل انتقال يأخذ من الذهن وقتًا ليعود.", en: "A person has one heart and one attention, and every switch costs the mind time to come back." }
    },
    {
      id: "am-q2", readingId: "am-r1", type: "situation", correct: 0,
      q: {
        ar: "تخاف أن تنسى أمورًا كثيرة، فتتركها كلها مفتوحة أمامك. أي خطوة تقترحها المقالة؟",
        ar_f: "تخافين أن تنسي أمورًا كثيرة، فتتركينها كلها مفتوحة أمامك. أي خطوة تقترحها المقالة؟",
        en: "You are afraid of forgetting many things, so you leave them all open in front of you. Which step does the article suggest?"
      },
      options: [
        { ar: "أكتبها على ورقة، وأغلق ما لا يحتاج إليه عملي", en: "Write them on paper, and close what my current work doesn't need" },
        { ar: "أتركها مفتوحة، وأرتّبها في نوافذ منفصلة", en: "Leave them open, sorted into separate windows" },
        { ar: "أعمل على كل أمر منها خمس دقائق بالتناوب", en: "Work on each of them for five minutes in turn" }
      ],
      why: { ar: "الورقة تحفظ الأمور المؤجلة، فيتفرغ الذهن لعمل واحد.", en: "The paper holds what is waiting, so the mind is free for one task." }
    },
    {
      id: "am-q3", readingId: "am-r2", type: "comprehension", correct: 2,
      q: { ar: "ماذا أرادت منى من زوجها حين حكت له عن عملها؟", en: "What did Mona want from her husband when she told him about work?" },
      options: [
        { ar: "أن يقترح عليها رسالة تكتبها لمديرتها", en: "For him to suggest a message she could write to her manager" },
        { ar: "أن يشجعها على البحث عن عمل آخر", en: "For him to encourage her to look for another job" },
        { ar: "أن يسمعها حتى تنتهي من كلامها", en: "For him to listen until she had finished" }
      ],
      why: { ar: "كثير ممن يتكلمون يريدون أن يُسمعوا قبل أن يُنصحوا. والسؤال «تريد رأيي أم أسمعك؟» يحفظ الحديث.", en: "Many people who speak want to be heard before being advised. Asking «do you want my opinion, or shall I listen?» protects the conversation." }
    },
    {
      id: "am-q4", readingId: "am-r2", type: "situation", correct: 1,
      q: {
        ar: "في الاجتماع خطرت لك فكرة ممتازة وزميلك ما زال يتكلم. ماذا تفعل؟",
        ar_f: "في الاجتماع خطرت لكِ فكرة ممتازة وزميلتك ما زالت تتكلم. ماذا تفعلين؟",
        en: "In a meeting you have an excellent idea while a colleague is still speaking. What do you do?"
      },
      options: [
        { ar: "أقاطعه قبل أن تضيع الفكرة", ar_f: "أقاطعها قبل أن تضيع الفكرة", en: "Interrupt before the idea is lost" },
        { ar: "أكتبها على ورقة، وأنتظر حتى ينتهي", ar_f: "أكتبها على ورقة، وأنتظر حتى تنتهي", en: "Write it on paper and wait until they finish" },
        { ar: "أهمس بها لمن بجانبي حتى لا أنساها", en: "Whisper it to the person next to me so I don't forget it" }
      ],
      why: { ar: "الورقة تحفظ الفكرة، والانتظار يحفظ حق المتكلم ويجعل الناس يسمعونك حين تتكلم.", ar_f: "الورقة تحفظ الفكرة، والانتظار يحفظ حق المتكلم ويجعل الناس يسمعونكِ حين تتكلمين.", en: "The paper keeps the idea; waiting keeps the speaker's right and makes people listen when it is your turn." }
    },
    {
      id: "am-q5", readingId: "am-r3", type: "comprehension", correct: 0,
      q: { ar: "ما الذي رآه نادر عند الإشارة فبقي معه طوال اليوم؟", en: "What did Nader see at the lights that stayed with him all day?" },
      options: [
        { ar: "طفلًا خائفًا في المقعد الخلفي للسيارة الأخرى", en: "A frightened child in the back seat of the other car" },
        { ar: "شرطيًّا يكتب له مخالفة على جانب الطريق", en: "A police officer writing him a ticket at the roadside" },
        { ar: "السائق الآخر يلوّح له بيده معتذرًا", en: "The other driver waving to him in apology" }
      ],
      why: { ar: "صورة الطفل كشفت لنادر أن غضبه وصل إلى من لا ذنب له.", en: "The child's face showed Nader that his anger had reached someone who had done nothing." }
    },
    {
      id: "am-q6", readingId: "am-r3", type: "comprehension", correct: 1,
      q: { ar: "من الشديد بحسب الحديث الذي في القراءة؟", en: "Who is the strong one according to the hadith in the reading?" },
      options: [
        { ar: "من يغلب غيره في الخصام", en: "The one who beats others in a quarrel" },
        { ar: "من يملك نفسه عند الغضب", en: "The one who controls himself when angry" },
        { ar: "من لا يغضب مهما أُوذي", en: "The one who never gets angry, however he is hurt" }
      ],
      why: { ar: "القوة التي يمدحها الحديث أن تغلب ما يشتعل فيك.", ar_f: "القوة التي يمدحها الحديث أن تغلبي ما يشتعل فيكِ.", en: "The strength the hadith praises is overpowering what flares up inside you." }
    },
    {
      id: "am-q7", readingId: "am-r4", type: "comprehension", correct: 2,
      q: { ar: "ما الذي فهمته سلمى بعد أن صرخت على ابنها؟", en: "What did Salma realise after shouting at her son?" },
      options: [
        { ar: "أن ابنها الصغير يتعمد إزعاجها كل صباح", en: "That her youngest annoys her on purpose every morning" },
        { ar: "أن الصراخ لا بد منه أحيانًا مع الأولاد", en: "That shouting is sometimes unavoidable with children" },
        { ar: "أن ضغط الصباح كان يغلي فيها قبل الحليب", en: "That the morning's pressure was boiling in her before the milk" }
      ],
      why: { ar: "أكثر الغضب على الأولاد يبدأ من ضغط سابق. ومن عرف السبب عرف أين يبدأ العلاج.", en: "Most anger at children starts from pressure already there. Knowing the cause shows where the cure begins." }
    },
    {
      id: "am-q8", readingId: "am-r5", type: "comprehension", correct: 0,
      q: { ar: "ما الذي رآه وائل في طابور الصيدلية؟", en: "What did Wael see in the pharmacy queue?" },
      options: [
        { ar: "أباه يتعثر في الدفع بهاتفه، وشابًّا يتنهّد خلفه", en: "His father struggling to pay with his phone, and a young man sighing behind him" },
        { ar: "الرجل نفسه الذي في المقطع، يشتري دواءه", en: "The very man from the clip, buying his medicine" },
        { ar: "زميلًا من العمل يعرض المقطع على الصيدلي", en: "A colleague from work showing the clip to the pharmacist" }
      ],
      why: { ar: "حين صار الموقف موقف أبيه رأى وائل ما لم يره في المقطع: إنسانًا يُحرَج أمام الناس.", en: "Once the scene was his father's, Wael saw what he had missed in the clip: a person embarrassed in front of others." }
    },
    {
      id: "am-q9", readingId: "am-r6", type: "situation", correct: 1,
      q: {
        ar: "رأيت كثيرين يشترون جهازًا جديدًا ويعرضونه، وأحسست أنك تريده. أي سؤال تقترحه المقالة أولًا؟",
        ar_f: "رأيتِ كثيرين يشترون جهازًا جديدًا ويعرضونه، وأحسستِ أنكِ تريدينه. أي سؤال تقترحه المقالة أولًا؟",
        en: "You see many people buying and showing off a new gadget, and you feel you want it. Which question does the article suggest first?"
      },
      options: [
        { ar: "أين أجده بأرخص سعر هذا الأسبوع؟", en: "Where can I find it cheapest this week?" },
        { ar: "هل كنت سأريده لو لم أره عند غيري؟", en: "Would I want it if I hadn't seen it with others?" },
        { ar: "كم شخصًا سيرى صورتي وأنا أستعمله؟", en: "How many people will see my photo using it?" }
      ],
      why: { ar: "التقليد الأعمى يأخذ ما يراه دون سؤال. والسؤال الصادق يكشف هل الرغبة منك أم من الشاشة.", en: "Blind imitation takes what it sees without asking. An honest question shows whether the wish is yours or the screen's." }
    },
    {
      id: "am-q10", readingId: "am-r7", type: "comprehension", correct: 0,
      q: { ar: "ماذا فعل النبي صلى الله عليه وآله وسلم بالأعرابي بعد أن فرغ، في رواية أنس؟", en: "In the narration of Anas, what did the Prophet do with the Bedouin once he had finished?" },
      options: [
        { ar: "دعاه وعلّمه بهدوء ما تصلح له المساجد", en: "He called him and calmly taught him what mosques are for" },
        { ar: "أمر أن يُخرج من المسجد فلا يعود إليه", en: "He ordered him out of the mosque, never to return" },
        { ar: "تركه يمضي، ولم يكلمه في الأمر", en: "He let him go and said nothing to him about it" }
      ],
      why: { ar: "«إِنَّمَا هِيَ لِذِكْرِ اللَّهِ عَزَّ وَجَلَّ وَالصَّلاَةِ وَقِرَاءَةِ الْقُرْآنِ»: وقف الأذى أولًا، ثم علّم بالكلمة الهادئة.", en: "«They are only for the remembrance of Allah, the prayer and the recitation of the Quran»: first he stopped the harm, then he taught with a calm word." }
    },
    {
      id: "am-q11", readingId: "am-r8", type: "comprehension", correct: 2,
      q: { ar: "ماذا فعل عمر رضي الله عنه حين تلا عليه الحرّ آية الأعراف؟", en: "What did Umar do when al-Hurr recited the verse of al-A'raf to him?" },
      options: [
        { ar: "عاقب عيينة على كلامه", en: "He punished Uyayna for his words" },
        { ar: "جادل الحرّ في معنى الآية", en: "He argued with al-Hurr about the verse's meaning" },
        { ar: "وقف عندها ولم يجاوزها", en: "He stopped at it and did not go beyond it" }
      ],
      why: { ar: "«وَكَانَ وَقَّافًا عِنْدَ كِتَابِ اللَّهِ»: في غضبه مكان للوقوف.", en: "«He was one who stopped at the Book of Allah»: in his anger there was room to stop." }
    },
    {
      id: "am-q12", readingId: "am-r4", type: "situation", correct: 1,
      q: {
        ar: "صرخت على ابنتك صباحًا لأمر صغير، وندمت بعد أن ذهبت إلى المدرسة. ما أنفع ما تفعله؟",
        ar_f: "صرختِ على ابنتك صباحًا لأمر صغير، وندمتِ بعد أن ذهبت إلى المدرسة. ما أنفع ما تفعلينه؟",
        en: "You shouted at your daughter this morning over something small, and regretted it after she left for school. What is most useful?"
      },
      options: [
        { ar: "أتجاوز الأمر، فالأطفال ينسون ما يجري في الصباح", en: "Let it pass; children forget what happens in the morning" },
        { ar: "أعتذر إليها حين تعود، وأحضّر الصباح من الليل", en: "Apologise when she's home, and prepare the morning the night before" },
        { ar: "أشتري لها في المساء شيئًا تحبه بدل الكلام", en: "Buy her something she likes in the evening instead of talking" }
      ],
      why: { ar: "الاعتذار للصغير يعلّمه الرجوع عن الخطأ، وتحضير الليل يعالج سبب الغضب مع أثره.", en: "Apologising to a child teaches them to turn back from mistakes, and preparing the night before treats the cause of the anger along with its effect." }
    },
    {
      id: "am-q13", readingId: "am-r6", type: "comprehension", correct: 2,
      q: { ar: "بماذا شعر عادل بعد أن غيّر سيارته وحجز الرحلة؟", en: "How did Adel feel after changing his car and booking the trip?" },
      options: [
        { ar: "بالفرح، لأنه صار يعيش مثل صديقه القديم", en: "Happy, because he was living like his old friend" },
        { ar: "بالندم، لأنه لم يفعل ذلك منذ سنوات", en: "Regretful, because he hadn't done it years before" },
        { ar: "بالقلق من القسط، والتعب من تجميل صورة حياته", en: "Anxious about the instalments, and tired of polishing the picture of his life" }
      ],
      why: { ar: "ما يُعرض على الشاشة مختار ومقصوص، ومن قلّده حمل ما لم يظهر في الصورة.", en: "What is shown on a screen is chosen and cut, and whoever copies it carries what the picture left out." }
    },
    {
      id: "am-q14", readingId: "am-r5", type: "situation", correct: 1,
      q: { ar: "في مجموعة العمل أرسل أحد الزملاء ملصقًا يقلّد طريقة مدير القسم في الكلام، وانهالت الرموز الضاحكة. أي تصرف أقرب إلى ما في القراءة؟", en: "In the work group a colleague posts a sticker imitating the way the department head talks, and laughing emojis pour in. Which response is closest to the reading?" },
      options: [
        { ar: "أضع رمزًا ضاحكًا واحدًا، حتى لا أبدو متكلفًا", en: "Add a single laughing emoji, so I don't seem stiff" },
        { ar: "لا أزيد عليه شيئًا، وأسكت أو أصرف الحديث عنه", en: "Add nothing to it, and stay silent or steer the talk away" },
        { ar: "أعيد توجيهه إلى المدير حتى يعرف ما يقال عنه", en: "Forward it to the manager so he knows what is said about him" }
      ],
      why: { ar: "السخرية عند الغزالي تكون «بالمحاكاة في الفعل والقول» وتكون «بالإشارة والإيماء»، والرمز الضاحك مشاركة فيها.", en: "For al-Ghazali, mockery can be «by imitation in deed and word» or «by gesture and hint», and a laughing emoji is a share in it." }
    }
  ],
  tasks: [
    { id: "am-t1", ar: "عمل بدأته ولم أتمه، أعطيته نصف ساعة متصلة حتى انتهى.", en: "Gave an unfinished task an unbroken half hour until it was done." },
    { id: "am-t2", ar: "حديث كامل دون مقاطعة، مع إعادة ما فهمته قبل الرد.", en: "A whole conversation without interrupting, summing up what I understood before replying." },
    { id: "am-t3", ar: "موقف غضب سكتّ فيه وقلت الاستعاذة حتى هدأت.", en: "A moment of anger in which I fell silent and sought refuge in Allah until I was calm." },
    { id: "am-t4", ar: "رسالة لم أنقلها لأني لم أتحقق منها.", en: "A message I did not forward because I had not verified it." },
    { id: "am-t5", ar: "شراء أو تقليد تركته بعد أن سألت: هل كنت سأريده لو لم أره عند غيري؟", en: "A purchase or a trend I let go after asking: would I want it if I hadn't seen it with others?" }
  ],
  selfcheck: [
    { id: "am-s1", q: { ar: "هل أتم ما أبدؤه قبل أن أنتقل إلى غيره؟", en: "Do I finish what I start before moving on?" } },
    { id: "am-s2", q: { ar: "هل أدع من يكلمني ينهي كلامه؟", en: "Do I let people finish what they are saying to me?" } },
    { id: "am-s3", q: { ar: "هل أملك لساني وصوتي حين أغضب، في الطريق ومع أهلي؟", en: "Do I control my tongue and my voice when angry, on the road and with my family?" } },
    { id: "am-s4", q: { ar: "هل أتحقق من الخبر قبل أن أنقله أو أرد عليه؟", en: "Do I verify a story before I pass it on or reply to it?" } },
    { id: "am-s5", q: { ar: "هل أختار ما أفعله، أم أقلّد ما أراه على الشاشة؟", en: "Do I choose what I do, or copy what I see on the screen?" } }
  ]
};

/* ───────────── السبابة: الآدمية للكبار / True humanity, adult ───────────── */
window.AKHLAQ_CONTENT_ADULT.stages.human = {
  name: { ar: "الآدمية (المسلم)", ar_f: "الآدمية (المسلمة)", en: "True humanity (the Muslim)" },
  short: {
    ar: "السلوك الإنساني المعتدل، «المقتصد»: يسلم الناس من لسانه ويده في الحياة وعلى الشاشة، ويؤدي ما عليه لربه وعمله وأهله، ويرجع عن خطئه إذا أخطأ، كما رجع أبونا آدم عليه السلام.",
    en: "Balanced human behaviour, «the moderate one»: people are safe from one's tongue and hand, in life and on the screen; one does what is owed to one's Lord, work and family; and one turns back from a mistake when wrong, as our father Adam, peace be upon him, turned back."
  },
  signs: [
    { ar: "تعليق يُقرأ مرتين قبل أن يُنشر، وكلمة في غائب لا تُقال.", en: "A comment read twice before it is posted, and a word about someone absent left unsaid." },
    { ar: "العمل يُنجز في وقته وبإتقان، ولو لم يكن أحد يراقب.", en: "Work done on time and done well, even when no one is watching." },
    { ar: "الصلاة في وقتها في الأيام المزدحمة، والوعد الصغير يُوفى به.", en: "Prayers on time on busy days, and small promises kept." },
    { ar: "الدَّين يُردّ في موعده، والأمانة تعود إلى صاحبها ولو نسيها.", en: "Debts repaid on time, and what was entrusted returned even if its owner forgot." },
    { ar: "«أخطأتُ، وأنا آسف» تُقال للزوج والزميل والولد، دون «لكن».", en: "«I was wrong, and I'm sorry» said to a spouse, a colleague or a child, without «but»." }
  ],
  climb: [
    {
      ar: "أحافظ على عمل خير صغير كل يوم، فالقليل الدائم أحب إلى الله.",
      en: "I keep up one small good deed every day, for a little done constantly is most loved by Allah."
    },
    {
      ar: "إذا أخطأت فلا أيأس: أعتذر، وأصلح، وأُتبع السيئة حسنة.",
      en: "When I go wrong I don't despair: I apologise, put it right, and follow the bad deed with a good one."
    },
    { ar: "أبدأ بالخير قبل أن يُطلب مني، فهذا باب الإبهام.", en: "I start the good before I am asked, for that is the door to the thumb." },
    {
      ar: "أختار قدوة من الأنبياء عليهم السلام أو الصحابة، وأقرأ سيرته.",
      en: "I choose a model from the prophets, peace be upon them, or the Companions, and read their life."
    }
  ],
  degrees: [
    {
      name: { ar: "كفّ الأذى", en: "Keeping harm away" },
      desc: {
        ar: "يسلم الناس من يدك ولسانك وما تكتبه: في البيت، وفي العمل، وفي التعليقات والرسائل.",
        en: "People are safe from your hand, your tongue and what you write: at home, at work, in comments and messages."
      },
      looks: {
        ar: "تقرأ منشورًا يغضبك فتكتب ردًّا جارحًا، ثم تحذفه قبل أن ترسله. وتسكت في المجلس حين يبدأ الكلام في غائب، أو تغيّر الحديث.",
        ar_f: "تقرئين منشورًا يغضبك فتكتبين ردًّا جارحًا، ثم تحذفينه قبل أن ترسليه. وتسكتين في المجلس حين يبدأ الكلام في غائب، أو تغيّرين الحديث.",
        en: "You read a post that angers you and write a cutting reply, then delete it before sending. In company you go quiet when talk turns to someone absent, or you change the subject."
      },
      story: {
        ar: [
          "كتب جمال تعليقًا ساخرًا تحت صورة زميل قديم أعلن أنه افتتح مطعمًا صغيرًا: «أخيرًا وجدت عملًا يناسبك».",
          "ضحك له اثنان، وسكت صاحب المطعم. وبعد أيام عرف جمال أن الرجل أغلق عمله السابق بعد خسارة كبيرة، وأن المطعم كل ما بقي له.",
          "حذف التعليق، وكتب له رسالة اعتذار، وزار المطعم مع أسرته يوم الجمعة. وصار يقرأ تعليقه مرتين قبل أن ينشره."
        ],
        en: [
          "Jamal wrote a mocking comment under the photo of an old colleague who had announced the opening of a small restaurant: «Finally found a job that suits you.»",
          "Two people laughed; the restaurant owner said nothing. A few days later Jamal learned that the man had closed his previous business after a heavy loss, and that the restaurant was all he had left.",
          "He deleted the comment, wrote him an apology, and took his family to the restaurant on Friday. He now reads a comment twice before posting it."
        ]
      },
      step: {
        ar: "قبل أن تنشر أو ترسل أو تقول شيئًا اليوم، اسأل نفسك: هل يؤذي هذا أحدًا؟ فإن شككت فلا تفعل.",
        ar_f: "قبل أن تنشري أو ترسلي أو تقولي شيئًا اليوم، اسألي نفسك: هل يؤذي هذا أحدًا؟ فإن شككتِ فلا تفعلي.",
        en: "Before you post, send or say anything today, ask yourself: will this hurt anyone? If in doubt, don't."
      },
      week: {
        ar: "سبعة أيام لا تكتب فيها تعليقًا ساخرًا، ولا تقول كلمة في غائب، في المجلس ولا على الشاشة. وإن زلّ لسانك فاعتذر في اليوم نفسه.",
        ar_f: "سبعة أيام لا تكتبين فيها تعليقًا ساخرًا، ولا تقولين كلمة في غائب، في المجلس ولا على الشاشة. وإن زلّ لسانك فاعتذري في اليوم نفسه.",
        en: "For seven days, write no mocking comment and say no word about anyone absent, in company or on a screen. If your tongue slips, apologise the same day."
      },
      habit: {
        ar: "اجعل كفّ الأذى طبعًا فيك، فقد قال النبي صلى الله عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ» (البخاري 10).",
        ar_f: "اجعلي كفّ الأذى طبعًا فيك، فقد قال النبي صلى الله عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ» (البخاري 10).",
        en: "Make keeping harm away part of your nature. The Prophet, peace and blessings be upon him and his family, said: «The Muslim is the one from whose tongue and hand the Muslims are safe» (Bukhari 10)."
      },
      q: {
        id: "ah-d1q",
        type: "situation",
        readingId: null,
        correct: 1,
        q: {
          ar: "في مجموعة الأصدقاء بدأ أحدهم يسخر من زميل غائب بسبب لهجته، والجميع يضحكون. ماذا تفعل؟",
          ar_f: "في مجموعة الصديقات بدأت إحداهن تسخر من زميلة غائبة بسبب لهجتها، والجميع يضحكن. ماذا تفعلين؟",
          en: "In your group of friends someone starts mocking an absent colleague's accent, and everyone is laughing. What do you do?"
        },
        options: [
          { ar: "أضحك معهم، فهو لن يعرف", ar_f: "أضحك معهن، فهي لن تعرف", en: "Laugh along; they'll never know" },
          { ar: "لا أشارك، وأقول بلطف: لنتكلم في شيء آخر", en: "Don't join in, and say gently: let's talk about something else" },
          {
            ar: "أنقل الكلام إلى الزميل ليعرف ما قيل عنه",
            ar_f: "أنقل الكلام إلى الزميلة لتعرف ما قيل عنها",
            en: "Pass it on to the colleague so they know what was said"
          }
        ],
        why: {
          ar: "كفّ الأذى يشمل الغائب. ونقل الكلام إليه أذى آخر، أما تغيير الحديث بلطف فيحفظ الجميع.",
          en: "Keeping harm away includes the absent. Carrying the words to them is another harm; changing the subject gently protects everyone."
        }
      }
    },
    {
      name: { ar: "أداء الواجب", en: "Doing what is due" },
      desc: {
        ar: "يؤدي ما عليه في وقته وبإتقان: لربه صلاته، ولعمله حقه، ولأهله حقوقهم، ولمن له دَين دَينه.",
        en: "Doing what is owed, on time and done well: to one's Lord the prayer, to one's work its due, to one's family their rights, to a creditor the debt."
      },
      looks: {
        ar: "تنهي العمل في موعده دون أن يذكّرك أحد، وتصلي في الوقت ولو كان اليوم مزدحمًا، وتردّ ما استعرته ولو نسيه صاحبه.",
        ar_f: "تنهين العمل في موعده دون أن يذكّرك أحد، وتصلين في الوقت ولو كان اليوم مزدحمًا، وتردّين ما استعرتِه ولو نسيه صاحبه.",
        en: "You finish work on time without a reminder, pray on time even on a crowded day, and return what you borrowed even if its owner forgot."
      },
      story: {
        ar: [
          "كانت وفاء موظفة في قسم الحسابات، ووجدت يومًا فاتورة أخطأ فيها عميل لمصلحة الشركة بمبلغ كبير.",
          "قال لها زميلها: لم ينتبه أحد، والخطأ خطؤه هو.",
          "فاتصلت بالعميل وصحّحت الفاتورة. وبعد شهر جاء العميل نفسه بعقد أكبر، وقال للمدير: أريد أن تتولى ملفي الموظفة التي اتصلت بي."
        ],
        en: [
          "Wafa worked in the accounts department. One day she found an invoice on which a client had made a large mistake in the company's favour.",
          "Her colleague said: nobody noticed, and the mistake is his.",
          "She called the client and corrected the invoice. A month later the same client came back with a bigger contract and told the manager: I want my file handled by the employee who called me."
        ]
      },
      step: {
        ar: "اختر اليوم واجبًا واحدًا تؤجله منذ أيام، في عملك أو بيتك أو مع أحد له حق عليك، وأدِّه قبل أن تنام.",
        ar_f: "اختاري اليوم واجبًا واحدًا تؤجلينه منذ أيام، في عملك أو بيتك أو مع أحد له حق عليك، وأدّيه قبل أن تنامي.",
        en: "Today, choose one duty you have been putting off for days, at work, at home or toward someone who has a right over you, and do it before you sleep."
      },
      week: {
        ar: "سبعة أيام تصلي فيها كل صلاة في وقتها، وتبدأ عملك في موعده، وتفي بكل وعد صغير تقطعه.",
        ar_f: "سبعة أيام تصلين فيها كل صلاة في وقتها، وتبدئين عملك في موعده، وتفين بكل وعد صغير تقطعينه.",
        en: "For seven days, pray every prayer on time, start work at the agreed time, and keep every small promise you make."
      },
      habit: {
        ar: "اجعل الأمانة ميزانك في كل ما بين يديك من مال وعمل ووقت، فقد قال الله تعالى: ﴿إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا﴾ (النساء 4:58).",
        ar_f: "اجعلي الأمانة ميزانك في كل ما بين يديك من مال وعمل ووقت، فقد قال الله تعالى: ﴿إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا﴾ (النساء 4:58).",
        en: "Make trust your measure in everything in your hands, money, work and time. Allah says, in meaning: Allah commands you to render trusts to those they are owed to (an-Nisa 4:58)."
      },
      q: {
        id: "ah-d2q",
        type: "situation",
        readingId: null,
        correct: 1,
        q: {
          ar: "مديرك مسافر أسبوعًا، ولا أحد يراقب ساعات العمل. ما الأقرب إلى أداء الواجب؟",
          en: "Your manager is away for a week and no one is checking working hours. What is closest to doing what is due?"
        },
        options: [
          { ar: "أعمل نصف الوقت، فلن يلاحظ أحد", en: "Work half the time; no one will notice" },
          { ar: "أعمل كما لو كان حاضرًا، فالأمانة لا تتعلق برؤية الناس", en: "Work as if he were here; trust does not depend on being seen" },
          { ar: "أنجز عملي في يومين وأغيب بقية الأسبوع دون إذن", en: "Do my work in two days and stay away the rest of the week without permission" }
        ],
        why: {
          ar: "الأجر مقابل وقت متفق عليه، والوفاء به أمانة يراها الله ولو غاب المدير.",
          en: "The wage is for agreed time, and honouring it is a trust Allah sees even when the manager is away."
        }
      }
    },
    {
      name: { ar: "الرجوع عن الخطأ", en: "Turning back from mistakes" },
      desc: {
        ar: "إذا أخطأ اعترف، واعتذر لمن أساء إليه، وأصلح ما يستطيع، وتاب إلى ربه، كما رجع أبونا آدم عليه السلام.",
        en: "When wrong, one admits it, apologises to whoever was hurt, repairs what one can, and turns to one's Lord in repentance, as our father Adam, peace be upon him, turned back."
      },
      looks: {
        ar: "تقول لزوجتك «كنت مخطئًا» دون أن تضيف «لكن»، وتعتذر لزميلك أمام من سمع الخطأ، وتستغفر في الليل عمّا فعلت في النهار.",
        ar_f: "تقولين لزوجك «كنت مخطئة» دون أن تضيفي «لكن»، وتعتذرين لزميلتك أمام من سمع الخطأ، وتستغفرين في الليل عمّا فعلتِ في النهار.",
        en: "You tell your spouse «I was wrong» without adding «but», apologise to a colleague in front of those who heard the mistake, and at night ask Allah's forgiveness for what you did in the day."
      },
      story: {
        ar: [
          "اختلف سعيد مع زوجته في المساء، فرفع صوته وقال كلمة جارحة، ثم دخل غرفته غاضبًا.",
          "وفي الصباح قضى وقتًا طويلًا يبحث عن طريقة يصالحها بها دون أن يقول إنه أخطأ.",
          "ثم جلس معها وقال: «الكلمة التي قلتها أمس كانت ظلمًا، وأنا آسف». فسكتت قليلًا، ثم قالت: كنت أنتظر هذه الجملة وحدها."
        ],
        en: [
          "Sa'id argued with his wife one evening, raised his voice, said a hurtful word, and went off angry to his room.",
          "In the morning he spent a long time looking for a way to make up with her without saying he had been wrong.",
          "Then he sat with her and said: «What I said last night was unjust, and I'm sorry.» She was silent for a moment, then said: that sentence was all I was waiting for."
        ]
      },
      step: {
        ar: "إذا أخطأت اليوم في حق أحد، فقل له: «أخطأت، وأنا آسف» دون «لكن»، ثم أصلح ما تستطيع.",
        ar_f: "إذا أخطأتِ اليوم في حق أحد، فقولي له: «أخطأت، وأنا آسفة» دون «لكن»، ثم أصلحي ما تستطيعين.",
        en: "If you wrong someone today, tell them: «I was wrong, and I'm sorry», without «but», then repair what you can."
      },
      week: {
        ar: "راجع يومك كل مساء سبعة أيام. فإن وجدت خطأ في حق أحد فاعتذر إليه في الغد، وإن وجدته في حق الله فاستغفر وأتبعه حسنة.",
        ar_f: "راجعي يومك كل مساء سبعة أيام. فإن وجدتِ خطأ في حق أحد فاعتذري إليه في الغد، وإن وجدتِه في حق الله فاستغفري وأتبعيه حسنة.",
        en: "Review your day every evening for seven days. If you find a wrong done to someone, apologise to them the next day; if it was against Allah's right, seek forgiveness and follow it with a good deed."
      },
      habit: {
        ar: "اجعل دعاء أبوينا آدم وحواء وِردك كل ليلة: ﴿رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ﴾ (الأعراف 7:23).",
        ar_f: "اجعلي دعاء أبوينا آدم وحواء وِردك كل ليلة: ﴿رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ﴾ (الأعراف 7:23).",
        en: "Make the prayer of our first parents, Adam and Hawwa, your nightly words, meaning: our Lord, we have wronged ourselves, and if You do not forgive us and have mercy on us, we will surely be among the losers (al-A'raf 7:23)."
      },
      q: {
        id: "ah-d3q",
        type: "situation",
        readingId: null,
        correct: 1,
        q: {
          ar: "اكتشفت أنك أرسلت إلى زميلك أرقامًا خاطئة بنى عليها تقريره، ولم يلاحظ أحد بعد. ماذا تفعل؟",
          ar_f: "اكتشفتِ أنكِ أرسلتِ إلى زميلتك أرقامًا خاطئة بنت عليها تقريرها، ولم يلاحظ أحد بعد. ماذا تفعلين؟",
          en: "You discover you sent a colleague wrong figures on which they built their report, and no one has noticed yet. What do you do?"
        },
        options: [
          { ar: "أنتظر حتى يسألني، ثم أشرح ما حدث", ar_f: "أنتظر حتى تسألني، ثم أشرح ما حدث", en: "Wait until they ask, then explain what happened" },
          {
            ar: "أخبره الآن، وأعتذر، وأرسل الأرقام الصحيحة",
            ar_f: "أخبرها الآن، وأعتذر، وأرسل الأرقام الصحيحة",
            en: "Tell them now, apologise, and send the correct figures"
          },
          { ar: "أرسل له الأرقام الصحيحة دون تعليق", ar_f: "أرسل لها الأرقام الصحيحة دون تعليق", en: "Send them the correct figures without comment" }
        ],
        why: {
          ar: "الرجوع عن الخطأ اعتراف وإصلاح. وكلما تأخر الاعتراف كبر الضرر على غيرك.",
          en: "Turning back from a mistake means admitting it and repairing it. The longer the admission waits, the greater the harm to others."
        }
      }
    }
  ],
  readings: [
    {
      id: "ah-r1",
      minutes: 4,
      ages: "18+",
      title: { ar: "قبل أن تنشر", en: "Before you post" },
      body: {
        ar: [
          "تختلف الكلمة على الشاشة عن الكلمة في المجلس في أمرين: أنها تبقى، وأنها تصل إلى من لا تعرفه. تعليق قاله صاحبه في لحظة غضب قد يقرؤه المقصود به بعد سنوات، وقد يقرؤه أولاده.",
          "وكثير ممن يكتبون على الإنترنت يكتبون ما لا يقولونه في وجه أحد. يسخرون من شكل إنسان، أو يفضحون خطأه، أو يتهمونه بما سمعوا. والقرآن يذكّر بأن الكلمة كلها محفوظة: ﴿مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ﴾ (ق 50:18). وما يُكتب أولى بالحفظ مما يُلفظ.",
          "وقال النبي صلى الله عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ» (البخاري 10). واليد اليوم تكتب، فتؤذي كما يؤذي اللسان.",
          "وفي «إحياء علوم الدين» كتاب كامل في آفات اللسان، عدّها الغزالي عشرين آفة، وأولها «الكلام فيما لا يعنيك». وأكثر ما يُكتب في التعليقات من هذا الباب: رأي في أمر لا يخص كاتبه، ولم يُسأل عنه.",
          "خطوات عملية: اقرأ ما كتبت مرتين قبل أن تنشره، واسأل: هل أقوله في وجه صاحبه؟ لا تكتب وأنت غاضب. وإذا رأيت من يُهاجَم ظلمًا فاكتب كلمة طيبة بدل أن تزيد الهجوم. ويكفيك أحيانًا ألا تكتب شيئًا.",
          "في الحادية عشرة ليلًا كتب مازن ردًّا طويلًا في مجموعة أولياء الأمور على أب انتقد المعلمة. قرأه مرة، فوجد فيه جملة عن «أمثاله». وقرأه مرة ثانية، فحذف الجملة، ثم حذف الرد كله. وكتب للمعلمة وحدها رسالة قصيرة يشكرها فيها على صبرها، وأطفأ الهاتف."
        ],
        ar_f: [
          "تختلف الكلمة على الشاشة عن الكلمة في المجلس في أمرين: أنها تبقى، وأنها تصل إلى من لا تعرفينه. تعليق قاله صاحبه في لحظة غضب قد يقرؤه المقصود به بعد سنوات، وقد يقرؤه أولاده.",
          "وكثير ممن يكتبون على الإنترنت يكتبون ما لا يقولونه في وجه أحد. يسخرون من شكل إنسان، أو يفضحون خطأه، أو يتهمونه بما سمعوا. والقرآن يذكّر بأن الكلمة كلها محفوظة: ﴿مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ﴾ (ق 50:18). وما يُكتب أولى بالحفظ مما يُلفظ.",
          "وقال النبي صلى الله عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ» (البخاري 10). واليد اليوم تكتب، فتؤذي كما يؤذي اللسان.",
          "وفي «إحياء علوم الدين» كتاب كامل في آفات اللسان، عدّها الغزالي عشرين آفة، وأولها «الكلام فيما لا يعنيك». وأكثر ما يُكتب في التعليقات من هذا الباب: رأي في أمر لا يخص كاتبه، ولم يُسأل عنه.",
          "خطوات عملية: اقرئي ما كتبتِ مرتين قبل أن تنشريه، واسألي: هل أقوله في وجه صاحبه؟ لا تكتبي وأنتِ غاضبة. وإذا رأيتِ من يُهاجَم ظلمًا فاكتبي كلمة طيبة بدل أن تزيدي الهجوم. ويكفيك أحيانًا ألا تكتبي شيئًا.",
          "في الحادية عشرة ليلًا كتب مازن ردًّا طويلًا في مجموعة أولياء الأمور على أب انتقد المعلمة. قرأه مرة، فوجد فيه جملة عن «أمثاله». وقرأه مرة ثانية، فحذف الجملة، ثم حذف الرد كله. وكتب للمعلمة وحدها رسالة قصيرة يشكرها فيها على صبرها، وأطفأ الهاتف."
        ],
        en: [
          "A word on a screen differs from a word in company in two ways: it stays, and it reaches people you don't know. A comment written in a moment of anger may be read by the person it targets years later, or by their children.",
          "Many who write online write what they would never say to anyone's face. They mock a person's looks, expose their mistake, or accuse them of what they have heard. The Quran reminds us that every word is recorded, meaning: not a word does one utter but there is a watcher ready beside him (Qaf 50:18). What is written is all the more recorded than what is spoken.",
          "The Prophet, peace and blessings be upon him and his family, said: «The Muslim is the one from whose tongue and hand the Muslims are safe» (Bukhari 10). Today the hand types, and can hurt as the tongue does.",
          "The Ihya 'Ulum al-Din has a whole book on the afflictions of the tongue. Al-Ghazali counts twenty, the first being «speaking about what does not concern you». Much of what is written in comment sections belongs here: an opinion on a matter that does not concern the writer, which no one asked for.",
          "Practical steps: read what you wrote twice before posting, and ask: would I say this to their face? Don't write while angry. When you see someone attacked unjustly, write a kind word rather than add to the attack. And sometimes it is enough to write nothing.",
          "At eleven at night Mazen wrote a long reply in the parents' group to a father who had criticised the teacher. He read it once and found a sentence about «people like him». He read it a second time, deleted the sentence, then deleted the whole reply. He wrote the teacher alone a short message thanking her for her patience, and switched off the phone."
        ]
      },
      quote: {
        ar: "﴿مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ﴾",
        en: "Meaning (not a translation): Not a word does one utter but there is a watcher ready beside him.",
        ref: "ق 50:18",
        checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)",
        verify: true
      },
      source: {
        ar: "مقالة مع آية من سورة ق، وحديث في صحيح البخاري، وإحياء علوم الدين للغزالي (كتاب آفات اللسان)، ومشهد بشخصية خيالية.",
        en: "An article with a verse from Qaf, a hadith in Sahih al-Bukhari, al-Ghazali's Ihya (Book of the Afflictions of the Tongue), and a scene with a fictional character."
      }
    },
    {
      id: "ah-r2",
      minutes: 4,
      ages: "18+",
      title: { ar: "الموعد الذي يتأخر", en: "The deadline that keeps slipping" },
      body: {
        ar: [
          "تعمل هالة مصممة مستقلة. كانت تقبل كل مشروع يُعرض عليها، وتعد كل عميل بموعد قريب لتكسبه، ثم تتأخر. تعتذر بالمرض مرة، وبانقطاع الإنترنت مرة، وبضغط العمل مرات.",
          "وفي يوم كتب لها عميل قديم: «عملك جميل، لكني لا أستطيع أن أبني موعدي على وعدك». وخسرت أكبر عملائها في الشهر نفسه.",
          "قال النبي صلى الله عليه وآله وسلم: «آيَةُ الْمُنَافِقِ ثَلاَثٌ إِذَا حَدَّثَ كَذَبَ، وَإِذَا وَعَدَ أَخْلَفَ، وَإِذَا اؤْتُمِنَ خَانَ» (البخاري 33). وخُلف الموعد في العمل يحمل الثلاث معًا: وعد يُخلَف، وأمانة وقت لا تُؤدّى، وعذر قد يكون كذبًا.",
          "وفي صفات المؤمنين المفلحين: ﴿وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ﴾ (المؤمنون 23:8). والرعاية حفظ دائم، لا وفاء متقطع حين يسهل.",
          "جلست هالة ليلة مع تقويمها، وحسبت كم يأخذ كل عمل حقًّا، وزادت عليه يومين. ولم تعد تعد إلا بموعد تقدر عليه، ولو خسرت به المشروع.",
          "وفي الشهر التالي اتصل بها صاحب متجر يريد شعارًا خلال أسبوع. نظرت في التقويم، فرأت مشروعين قبله، فقالت: «أستطيع أن أسلّمه بعد ثلاثة أسابيع، لا قبل ذلك». سكت الرجل قليلًا، ثم قال: «هذا أول موعد يعطينيه أحد وأصدّقه». وسلّمته الشعار قبل الموعد بيومين."
        ],
        en: [
          "Hala works as a freelance designer. She used to accept every project offered, promise every client an early date to win them, then run late. One time she blamed illness, another time the internet, many times the workload.",
          "One day an old client wrote to her: «Your work is beautiful, but I can't build my deadline on your promise.» In the same month she lost her biggest client.",
          "The Prophet, peace and blessings be upon him and his family, said: «The sign of a hypocrite is three: when he speaks he lies, when he promises he breaks it, and when he is trusted he betrays» (Bukhari 33). A missed deadline at work can carry all three at once: a promise broken, a trust of time not rendered, and an excuse that may be a lie.",
          "Among the qualities of the successful believers, meaning: those who look after their trusts and their promises (al-Mu'minun 23:8). Looking after means constant care, not keeping faith now and then when it is easy.",
          "Hala sat one night with her calendar and worked out how long each job really takes, then added two days. From then on she promised only dates she could keep, even if it cost her the project.",
          "The next month a shop owner called wanting a logo within a week. She looked at the calendar, saw two projects ahead of his, and said: «I can deliver it in three weeks, not before.» The man was quiet for a moment, then said: «That's the first deadline anyone has given me that I actually believe.» She delivered the logo two days early."
        ]
      },
      quote: {
        ar: "﴿وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ﴾",
        en: "Meaning (not a translation): Those who look after their trusts and their promises.",
        ref: "المؤمنون 23:8",
        checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)",
        verify: true
      },
      source: {
        ar: "قصة مؤلفة بشخصيات خيالية، مع حديث في صحيح البخاري وآية من سورة المؤمنون.",
        en: "An original story with fictional characters, with a hadith in Sahih al-Bukhari and a verse from al-Mu'minun."
      }
    },
    {
      id: "ah-r3",
      minutes: 4,
      ages: "18+",
      title: { ar: "«فَأَعْطِ كُلَّ ذِي حَقٍّ حَقَّهُ»", en: "«Give each one its due»" },
      body: {
        ar: [
          "آخى النبي صلى الله عليه وآله وسلم بين سلمان الفارسي وأبي الدرداء رضي الله عنهما. فزار سلمان أخاه، فرأى زوجته أم الدرداء في ثياب مهملة، فسألها عن شأنها، فقالت: أخوك أبو الدرداء ليس له حاجة في الدنيا.",
          "كان أبو الدرداء يصوم النهار ويقوم الليل كله. فبات سلمان عنده، وأمره أن يأكل وينام، ثم قاما يصليان في آخر الليل، وقال له: «إِنَّ لِرَبِّكَ عَلَيْكَ حَقًّا، وَلِنَفْسِكَ عَلَيْكَ حَقًّا، وَلأَهْلِكَ عَلَيْكَ حَقًّا، فَأَعْطِ كُلَّ ذِي حَقٍّ حَقَّهُ». فذكر أبو الدرداء ذلك للنبي صلى الله عليه وآله وسلم، فقال: «صَدَقَ سَلْمَانُ» (البخاري 1968).",
          "أداء الواجب عند الكبار ميزان بين حقوق كثيرة: حق الله في العبادة، وحق العمل في الإتقان، وحق الجسد في النوم والطعام، وحق الزوج والأولاد في الوقت والرعاية. ومن أعطى حقًّا واحدًا كل وقته ضيّع غيره، ولو كان الحق الذي أعطاه عبادة.",
          "وفي القرآن أمر جامع في معاملة الزوجة: ﴿وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ﴾ (النساء 4:19). والمعروف يشمل الوقت والكلمة والاهتمام، لا النفقة وحدها. والحقوق بين الزوجين متبادلة، فقد قال تعالى: ﴿وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ﴾ (البقرة 2:228).",
          "خطوات عملية: اكتب أصحاب الحقوق عليك في ورقة: ربك، ونفسك، وأهلك، وعملك، ووالديك. وانظر من منهم يأخذ أقل من حقه هذا الشهر، وأعطه ساعة إضافية هذا الأسبوع.",
          "كتب عمرو الورقة ليلة الخميس، فرأى أن العمل يأخذ مساءه كله، وأن أمه لم تسمع صوته منذ أسبوعين. وفي الجمعة أغلق حاسوب العمل بعد العصر، واتصل بأمه، وخرج بأولاده إلى الحديقة، ثم صلّى المغرب معهم في المسجد القريب."
        ],
        ar_f: [
          "آخى النبي صلى الله عليه وآله وسلم بين سلمان الفارسي وأبي الدرداء رضي الله عنهما. فزار سلمان أخاه، فرأى زوجته أم الدرداء في ثياب مهملة، فسألها عن شأنها، فقالت: أخوك أبو الدرداء ليس له حاجة في الدنيا.",
          "كان أبو الدرداء يصوم النهار ويقوم الليل كله. فبات سلمان عنده، وأمره أن يأكل وينام، ثم قاما يصليان في آخر الليل، وقال له: «إِنَّ لِرَبِّكَ عَلَيْكَ حَقًّا، وَلِنَفْسِكَ عَلَيْكَ حَقًّا، وَلأَهْلِكَ عَلَيْكَ حَقًّا، فَأَعْطِ كُلَّ ذِي حَقٍّ حَقَّهُ». فذكر أبو الدرداء ذلك للنبي صلى الله عليه وآله وسلم، فقال: «صَدَقَ سَلْمَانُ» (البخاري 1968).",
          "أداء الواجب عند الكبار ميزان بين حقوق كثيرة: حق الله في العبادة، وحق العمل في الإتقان، وحق الجسد في النوم والطعام، وحق الزوج والأولاد في الوقت والرعاية. ومن أعطى حقًّا واحدًا كل وقته ضيّع غيره، ولو كان الحق الذي أعطاه عبادة.",
          "وفي القرآن أمر جامع في معاملة الزوجة: ﴿وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ﴾ (النساء 4:19). والمعروف يشمل الوقت والكلمة والاهتمام، لا النفقة وحدها. والحقوق بين الزوجين متبادلة، فقد قال تعالى: ﴿وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ﴾ (البقرة 2:228).",
          "خطوات عملية: اكتبي أصحاب الحقوق عليك في ورقة: ربك، ونفسك، وأهلك، وعملك، ووالديك. وانظري من منهم يأخذ أقل من حقه هذا الشهر، وأعطيه ساعة إضافية هذا الأسبوع.",
          "كتب عمرو الورقة ليلة الخميس، فرأى أن العمل يأخذ مساءه كله، وأن أمه لم تسمع صوته منذ أسبوعين. وفي الجمعة أغلق حاسوب العمل بعد العصر، واتصل بأمه، وخرج بأولاده إلى الحديقة، ثم صلّى المغرب معهم في المسجد القريب."
        ],
        en: [
          "The Prophet, peace and blessings be upon him and his family, made Salman al-Farisi and Abu al-Darda brothers, may Allah be pleased with them both. Salman visited his brother and saw his wife, Umm al-Darda, in neglected clothes. He asked what was the matter, and she said: your brother Abu al-Darda has no interest in this world.",
          "Abu al-Darda fasted every day and prayed all night. Salman stayed the night with him, told him to eat and to sleep, then they both rose to pray in the last part of the night, and Salman said to him: «Your Lord has a right over you, your self has a right over you, and your family has a right over you, so give each one its due.» Abu al-Darda mentioned this to the Prophet, who said: «Salman has spoken the truth» (Bukhari 1968).",
          "For adults, doing what is due is a balance between many rights: Allah's right in worship, work's right to be done well, the body's right to sleep and food, and the right of spouse and children to time and care. Whoever gives one right all their time neglects the others, even if the right they gave it to is worship.",
          "The Quran gives a comprehensive command about living with one's wife, meaning: live with them in kindness (an-Nisa 4:19). Kindness covers time, words and attention, not only provision. Rights between spouses run both ways; Allah says, meaning: and women have rights like those owed by them, in kindness (al-Baqara 2:228).",
          "Practical steps: write down on paper those who have rights over you: your Lord, yourself, your family, your work, your parents. See which of them is getting less than its due this month, and give it an extra hour this week.",
          "Amr wrote the list on Thursday night and saw that work was taking all his evenings, and that his mother had not heard his voice in two weeks. On Friday he shut the work laptop after the afternoon prayer, called his mother, took his children to the park, and prayed maghrib with them at the nearby mosque."
        ]
      },
      quote: {
        ar: "«إِنَّ لِرَبِّكَ عَلَيْكَ حَقًّا، وَلِنَفْسِكَ عَلَيْكَ حَقًّا، وَلأَهْلِكَ عَلَيْكَ حَقًّا، فَأَعْطِ كُلَّ ذِي حَقٍّ حَقَّهُ»",
        en: "Meaning: Your Lord has a right over you, your self has a right over you, and your family has a right over you, so give each one its due.",
        ref: "صحيح البخاري 1968، عن أبي جحيفة",
        checked: "hadith-api (fawazahmed0)",
        verify: true
      },
      source: {
        ar: "حديث في صحيح البخاري، مع آيتين من سورتي النساء والبقرة، ومشهد بشخصية خيالية.",
        en: "A hadith in Sahih al-Bukhari, with verses from an-Nisa and al-Baqara, and a scene with a fictional character."
      }
    },
    {
      id: "ah-r4",
      minutes: 4,
      ages: "18+",
      title: { ar: "اعتذار بلا «لكن»", en: "An apology without «but»" },
      body: {
        ar: [
          "يعتذر كثير منا اعتذارًا يحمل دفاعًا: «آسف، لكنك استفززتني»، «أعتذر إن كنت فهمت كلامي خطأ». وهذا الاعتذار يعيد الخطأ إلى الطرف الآخر، فيزيد الجرح بدل أن يداويه.",
          "وفي القرآن نموذج الاعتذار الأول. أخطأ آدم وحواء، فقالا معًا، ولم يُلقيا اللوم على أحد: ﴿رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ﴾ (الأعراف 7:23). ثم جاء القبول: ﴿فَتَلَقَّىٰ آدَمُ مِنْ رَبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ﴾ (البقرة 2:37).",
          "والاعتذار الصادق إلى الناس فيه ثلاثة أشياء: أن تسمّي الخطأ («رفعت صوتي عليك»)، وأن تقرّ بأثره («وأعرف أن ذلك جرحك»)، وأن تصلح ما تستطيع («ولن أكلمك هكذا مرة أخرى»).",
          "وأصعب الاعتذار ما يكون للأقرب: للزوج، وللولد، وللوالدين. نظن أن المكانة تضيع بالاعتذار، والحقيقة أن الأولاد يتعلمون الرجوع عن الخطأ حين يرون آباءهم وأمهاتهم يرجعون.",
          "خطوات عملية: إذا أخطأت فلا تؤجل الاعتذار حتى تبرد المسألة، فالتأجيل يجعلها تتجذّر. قل الجملة كاملة دون «لكن». ولا تطلب من الآخر أن يسامحك فورًا، بل دع له وقته.",
          "عاد حسام من عمله متعبًا، فوجد كوبًا مكسورًا على أرض المطبخ، فصاح بابنه الأكبر أمام إخوته. وبعد دقائق قالت الصغيرة إنها هي التي أسقطته. وفي المساء طرق حسام باب غرفة ابنه، وجلس على طرف السرير، وقال: «صرخت عليك أمام إخوتك في أمر لم تفعله، وأعرف أن ذلك أحرجك. أنا آسف». نظر إليه الولد طويلًا، ثم أفسح له مكانًا بجانبه."
        ],
        ar_f: [
          "يعتذر كثير منا اعتذارًا يحمل دفاعًا: «آسف، لكنك استفززتني»، «أعتذر إن كنت فهمت كلامي خطأ». وهذا الاعتذار يعيد الخطأ إلى الطرف الآخر، فيزيد الجرح بدل أن يداويه.",
          "وفي القرآن نموذج الاعتذار الأول. أخطأ آدم وحواء، فقالا معًا، ولم يُلقيا اللوم على أحد: ﴿رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ﴾ (الأعراف 7:23). ثم جاء القبول: ﴿فَتَلَقَّىٰ آدَمُ مِنْ رَبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ﴾ (البقرة 2:37).",
          "والاعتذار الصادق إلى الناس فيه ثلاثة أشياء: أن تسمّي الخطأ («رفعت صوتي عليك»)، وأن تقرّي بأثره («وأعرف أن ذلك جرحك»)، وأن تصلحي ما تستطيعين («ولن أكلمك هكذا مرة أخرى»).",
          "وأصعب الاعتذار ما يكون للأقرب: للزوج، وللولد، وللوالدين. نظن أن المكانة تضيع بالاعتذار، والحقيقة أن الأولاد يتعلمون الرجوع عن الخطأ حين يرون آباءهم وأمهاتهم يرجعون.",
          "خطوات عملية: إذا أخطأتِ فلا تؤجلي الاعتذار حتى تبرد المسألة، فالتأجيل يجعلها تتجذّر. قولي الجملة كاملة دون «لكن». ولا تطلبي من الآخر أن يسامحك فورًا، بل دعي له وقته.",
          "عاد حسام من عمله متعبًا، فوجد كوبًا مكسورًا على أرض المطبخ، فصاح بابنه الأكبر أمام إخوته. وبعد دقائق قالت الصغيرة إنها هي التي أسقطته. وفي المساء طرق حسام باب غرفة ابنه، وجلس على طرف السرير، وقال: «صرخت عليك أمام إخوتك في أمر لم تفعله، وأعرف أن ذلك أحرجك. أنا آسف». نظر إليه الولد طويلًا، ثم أفسح له مكانًا بجانبه."
        ],
        en: [
          "Many of us apologise with a defence inside: «Sorry, but you provoked me», «I apologise if you misunderstood me». Such an apology hands the fault back to the other person and deepens the wound instead of healing it.",
          "The Quran holds the first model of apology. Adam and Hawwa went wrong, and together, laying the blame on no one, they said, meaning: our Lord, we have wronged ourselves, and if You do not forgive us and have mercy on us, we will surely be among the losers (al-A'raf 7:23). Then came the acceptance, meaning: Adam received words from his Lord, and He turned to him; He is the Ever-Relenting, the Merciful (al-Baqara 2:37).",
          "A sincere apology to people has three parts: naming the mistake («I raised my voice at you»), acknowledging its effect («and I know it hurt you»), and repairing what you can («and I won't speak to you like that again»).",
          "The hardest apologies are to those closest: a spouse, a child, a parent. We think we lose standing by apologising, when in truth children learn to turn back from mistakes by watching their fathers and mothers turn back.",
          "Practical steps: when you are wrong, don't put off apologising until things cool down, for delay lets it take root. Say the whole sentence without «but». And don't ask the other person to forgive you at once; give them their time.",
          "Hussam came home tired from work, found a broken cup on the kitchen floor, and shouted at his eldest son in front of his siblings. A few minutes later the youngest said she was the one who had dropped it. That evening Hussam knocked on his son's door, sat on the edge of the bed, and said: «I shouted at you in front of your brothers and sisters over something you didn't do, and I know it embarrassed you. I'm sorry.» The boy looked at him for a long moment, then moved over to make room beside him."
        ]
      },
      quote: {
        ar: "﴿رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ﴾",
        en: "Meaning (not a translation): Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy on us, we will surely be among the losers.",
        ref: "الأعراف 7:23",
        checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)",
        verify: true
      },
      source: {
        ar: "مقالة مع آيتين من سورتي الأعراف والبقرة، ومشهد بشخصيات خيالية.",
        en: "An article with verses from al-A'raf and al-Baqara, and a scene with fictional characters."
      }
    },
    {
      id: "ah-r5",
      minutes: 4,
      ages: "18+",
      title: { ar: "هاتف يوسف", en: "Yusuf's phone" },
      body: {
        ar: [
          "اشترى خالد لابنه الأكبر يوسف هاتفًا جديدًا يوم ظهرت نتيجته بتفوق، وقال على مائدة العشاء: «هذا لمن يتعب». وكان ابنه الأوسط سامي قد نجح بدرجات أقل بعد سنة صعبة مع القراءة، يذاكر فيها كل ليلة ساعة أطول من أخيه.",
          "لم يقل سامي شيئًا. لكنه صار يترك كتبه مغلقة على المكتب، وإذا سُئل عن المدرسة قال: «أنا لست مثل يوسف». وفي ليلة سمع خالد ابنته الصغيرة تسأل أمها همسًا: «هل يحب بابا يوسف أكثر منا؟»",
          "وفي صحيح البخاري أن النعمان بن بشير رضي الله عنهما حدّث أن أباه أعطاه عطية، فقالت أمه عمرة بنت رواحة رضي الله عنها: لا أرضى حتى تُشهد رسول الله صلى الله عليه وآله وسلم. فأتاه أبوه، فسأله: «أَعْطَيْتَ سَائِرَ وَلَدِكَ مِثْلَ هَذَا؟». قال: لا. قال: «فَاتَّقُوا اللَّهَ، وَاعْدِلُوا بَيْنَ أَوْلاَدِكُمْ». فرجع فردّ عطيته (البخاري 2587).",
          "والعدل بين الأولاد أوسع من الهدايا. يكون في المديح الذي يُقال أمام الإخوة، وفي المقارنة التي تجرح، وفي الوقت: من يجلس معه الأب، ومن تسأله الأم عن يومه. والولد يقيس محبة أبويه بما يرى إخوته يُعطَون، قبل ما يُعطى هو.",
          "خطوات عملية: إذا أعطيت أحد أولادك شيئًا فاسأل نفسك: ماذا يرى إخوته؟ امدح كل ولد على جهده هو، ولا تقارنه بأخيه. واجعل لكل واحد منهم هذا الأسبوع وقتًا معك وحده، ولو ربع ساعة.",
          "في يوم الجمعة أخذ خالد سامي وحده إلى المكتبة، وتركه يختار كتابين، وقال له في الطريق: «رأيتك تذاكر كل ليلة، وأعرف كم تتعب». وفي المساء جمع أولاده الثلاثة، وقال إن كل من يُتم كتابًا هذا الشهر يختار معه نزهة يوم السبت. ونام سامي تلك الليلة وكتاب المكتبة مفتوح على صدره."
        ],
        ar_f: [
          "اشترى خالد لابنه الأكبر يوسف هاتفًا جديدًا يوم ظهرت نتيجته بتفوق، وقال على مائدة العشاء: «هذا لمن يتعب». وكان ابنه الأوسط سامي قد نجح بدرجات أقل بعد سنة صعبة مع القراءة، يذاكر فيها كل ليلة ساعة أطول من أخيه.",
          "لم يقل سامي شيئًا. لكنه صار يترك كتبه مغلقة على المكتب، وإذا سُئل عن المدرسة قال: «أنا لست مثل يوسف». وفي ليلة سمع خالد ابنته الصغيرة تسأل أمها همسًا: «هل يحب بابا يوسف أكثر منا؟»",
          "وفي صحيح البخاري أن النعمان بن بشير رضي الله عنهما حدّث أن أباه أعطاه عطية، فقالت أمه عمرة بنت رواحة رضي الله عنها: لا أرضى حتى تُشهد رسول الله صلى الله عليه وآله وسلم. فأتاه أبوه، فسأله: «أَعْطَيْتَ سَائِرَ وَلَدِكَ مِثْلَ هَذَا؟». قال: لا. قال: «فَاتَّقُوا اللَّهَ، وَاعْدِلُوا بَيْنَ أَوْلاَدِكُمْ». فرجع فردّ عطيته (البخاري 2587).",
          "والعدل بين الأولاد أوسع من الهدايا. يكون في المديح الذي يُقال أمام الإخوة، وفي المقارنة التي تجرح، وفي الوقت: من يجلس معه الأب، ومن تسأله الأم عن يومه. والولد يقيس محبة أبويه بما يرى إخوته يُعطَون، قبل ما يُعطى هو.",
          "خطوات عملية: إذا أعطيتِ أحد أولادك شيئًا فاسألي نفسك: ماذا يرى إخوته؟ امدحي كل ولد على جهده هو، ولا تقارنيه بأخيه. واجعلي لكل واحد منهم هذا الأسبوع وقتًا معكِ وحده، ولو ربع ساعة.",
          "في يوم الجمعة أخذ خالد سامي وحده إلى المكتبة، وتركه يختار كتابين، وقال له في الطريق: «رأيتك تذاكر كل ليلة، وأعرف كم تتعب». وفي المساء جمع أولاده الثلاثة، وقال إن كل من يُتم كتابًا هذا الشهر يختار معه نزهة يوم السبت. ونام سامي تلك الليلة وكتاب المكتبة مفتوح على صدره."
        ],
        en: [
          "Khalid bought his eldest son Yusuf a new phone the day his top results came out, and said at the dinner table: «This is for whoever works hard.» His middle son Sami had passed with lower grades after a hard year with reading, a year in which he studied an hour longer than his brother every night.",
          "Sami said nothing. But he began leaving his books closed on the desk, and when asked about school he said: «I'm not like Yusuf.» One night Khalid heard his little daughter whisper to her mother: «Does Baba love Yusuf more than us?»",
          "In Sahih al-Bukhari, an-Nu'man ibn Bashir, may Allah be pleased with them both, related that his father gave him a gift, and his mother, Amra bint Rawaha, may Allah be pleased with her, said: I will not be content until you have the Messenger of Allah, peace and blessings be upon him and his family, witness it. His father went to him, and he asked: «Have you given the rest of your children the like of this?» He said: No. He said: «Be mindful of Allah, and be fair between your children.» So he went back and took the gift back (Bukhari 2587).",
          "Fairness between children reaches beyond gifts. It lives in the praise spoken in front of siblings, in the comparison that wounds, and in time: whom the father sits with, whom the mother asks about their day. A child measures his parents' love by what he sees his siblings given before what he is given himself.",
          "Practical steps: when you give one of your children something, ask yourself: what do the others see? Praise each child for his own effort, and do not compare him with his brother. This week, give each of them some time alone with you, even a quarter of an hour.",
          "On Friday Khalid took Sami alone to the library, let him choose two books, and said to him on the way: «I've seen you studying every night, and I know how hard you work.» That evening he gathered his three children and said that whoever finished a book this month would choose a Saturday outing with him. Sami fell asleep that night with the library book open on his chest."
        ]
      },
      quote: {
        ar: "«فَاتَّقُوا اللَّهَ، وَاعْدِلُوا بَيْنَ أَوْلاَدِكُمْ»",
        en: "Meaning: Be mindful of Allah, and be fair between your children.",
        ref: "صحيح البخاري 2587، عن النعمان بن بشير",
        checked: "hadith-api (fawazahmed0)",
        verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع حديث في صحيح البخاري.", en: "An original story with fictional characters, with a hadith in Sahih al-Bukhari." }
    },
    {
      id: "ah-r6",
      minutes: 5,
      ages: "18+",
      title: { ar: "النفس اللوامة: دقيقتان قبل النوم", en: "The self-reproaching soul: two minutes before sleep" },
      body: {
        ar: [
          "استلقى طارق على فراشه بعد يوم طويل، والهاتف في يده. وقبل أن يفتح المقاطع مرّ يومه أمامه: كلمة حادة قالها لزميله وليد في الاجتماع، ووعد لابنته بأن يقرأ لها قصة ثم نسيه، وصلاة العصر صلّاها في آخر وقتها وذهنه في العمل. وشعر بشيء في داخله يلومه.",
          "هذا الصوت الذي يلوم صاحبه أقسم الله به: ﴿وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ﴾ (القيامة 75:2). هو بداية الإصلاح، إذا عرف صاحبه ماذا يصنع به قبل أن يغطيه بالمقاطع والنوم.",
          "وفي «إحياء علوم الدين» (كتاب التوبة) يقول الغزالي: «إن التوبة عبارة عن معنى ينتظم ويلتئم من ثلاثة أمور مرتبة: علم، وحال، وفعل». العلم أن يعرف الإنسان ضرر الذنب. والحال ندم يؤلم القلب على ما فات. والفعل ثمرة الندم في ثلاثة أزمنة: يترك الذنب الآن، ويعزم ألا يعود إليه، ويتدارك ما مضى بقضاء ما فاته وردّ الحقوق إلى أهلها. فاللوم الذي يقف عند الحزن يبقى حزنًا، واللوم الذي يصير فعلًا هو التوبة.",
          "ويكفي لهذا وقت قصير ثابت. قال النبي صلى الله عليه وآله وسلم: «أَحَبُّ الأَعْمَالِ أَدْوَمُهَا إِلَى اللَّهِ، وَإِنْ قَلَّ» (البخاري 6464). دقيقتان كل ليلة أنفع من ليلة محاسبة طويلة يتبعها شهر من النسيان.",
          "خطوات عملية: قبل أن تفتح الهاتف في فراشك اسأل نفسك ثلاثة أسئلة: من آذيت اليوم بكلمة أو فعل؟ وأي وعد لم أفِ به؟ وأي حق لله أخّرته؟ ثم اختر أمرًا واحدًا تصلحه غدًا، واستغفر. وإن عدت إلى الذنب نفسه فتب مرة أخرى، وانظر فيما يسبقه عادة فغيّره، فباب التوبة لا يُغلق بالتكرار.",
          "وضع طارق الهاتف على الطاولة مقلوبًا، وكتب على ورقة صغيرة: «وليد. القصة». وفي الصباح بدأ الاجتماع بكلمة لزميله لم يسمعها غيرهما. وفي المساء جلس على طرف سرير ابنته يقرأ لها، حتى نامت قبل أن تنتهي القصة."
        ],
        ar_f: [
          "استلقى طارق على فراشه بعد يوم طويل، والهاتف في يده. وقبل أن يفتح المقاطع مرّ يومه أمامه: كلمة حادة قالها لزميله وليد في الاجتماع، ووعد لابنته بأن يقرأ لها قصة ثم نسيه، وصلاة العصر صلّاها في آخر وقتها وذهنه في العمل. وشعر بشيء في داخله يلومه.",
          "هذا الصوت الذي يلوم صاحبه أقسم الله به: ﴿وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ﴾ (القيامة 75:2). هو بداية الإصلاح، إذا عرف صاحبه ماذا يصنع به قبل أن يغطيه بالمقاطع والنوم.",
          "وفي «إحياء علوم الدين» (كتاب التوبة) يقول الغزالي: «إن التوبة عبارة عن معنى ينتظم ويلتئم من ثلاثة أمور مرتبة: علم، وحال، وفعل». العلم أن يعرف الإنسان ضرر الذنب. والحال ندم يؤلم القلب على ما فات. والفعل ثمرة الندم في ثلاثة أزمنة: يترك الذنب الآن، ويعزم ألا يعود إليه، ويتدارك ما مضى بقضاء ما فاته وردّ الحقوق إلى أهلها. فاللوم الذي يقف عند الحزن يبقى حزنًا، واللوم الذي يصير فعلًا هو التوبة.",
          "ويكفي لهذا وقت قصير ثابت. قال النبي صلى الله عليه وآله وسلم: «أَحَبُّ الأَعْمَالِ أَدْوَمُهَا إِلَى اللَّهِ، وَإِنْ قَلَّ» (البخاري 6464). دقيقتان كل ليلة أنفع من ليلة محاسبة طويلة يتبعها شهر من النسيان.",
          "خطوات عملية: قبل أن تفتحي الهاتف في فراشك اسألي نفسك ثلاثة أسئلة: من آذيت اليوم بكلمة أو فعل؟ وأي وعد لم أفِ به؟ وأي حق لله أخّرته؟ ثم اختاري أمرًا واحدًا تصلحينه غدًا، واستغفري. وإن عدتِ إلى الذنب نفسه فتوبي مرة أخرى، وانظري فيما يسبقه عادة فغيّريه، فباب التوبة لا يُغلق بالتكرار.",
          "وضع طارق الهاتف على الطاولة مقلوبًا، وكتب على ورقة صغيرة: «وليد. القصة». وفي الصباح بدأ الاجتماع بكلمة لزميله لم يسمعها غيرهما. وفي المساء جلس على طرف سرير ابنته يقرأ لها، حتى نامت قبل أن تنتهي القصة."
        ],
        en: [
          "Tariq lay down on his bed after a long day, phone in hand. Before he opened the videos, his day passed before him: a sharp word to his colleague Walid in the meeting, a promise to read his daughter a story that he forgot, and the afternoon prayer prayed at the very end of its time with his mind on work. He felt something inside him reproach him.",
          "Allah swears by this voice that reproaches its owner, meaning: and I swear by the self-reproaching soul (al-Qiyama 75:2). It is where repair begins, if its owner knows what to do with it before covering it with videos and sleep.",
          "In the Ihya 'Ulum al-Din (Book of Repentance), al-Ghazali says: «Repentance is a meaning that is ordered and made whole from three things in sequence: knowledge, state and action.» Knowledge is to know the harm of the sin. The state is remorse that pains the heart over what is past. Action is the fruit of remorse in three times: leaving the sin now, resolving not to return to it, and making up for the past by fulfilling what was missed and returning rights to their owners. Reproach that stops at sadness stays sadness; reproach that becomes action is repentance.",
          "A short, steady time is enough for this. The Prophet, peace and blessings be upon him and his family, said: «The deeds most loved by Allah are those done most constantly, even if they are few» (Bukhari 6464). Two minutes every night do more good than one long night of self-accounting followed by a month of forgetting.",
          "Practical steps: before you open your phone in bed, ask yourself three questions: whom did I hurt today by a word or a deed? Which promise did I not keep? Which right of Allah did I delay? Then choose one thing to put right tomorrow, and ask forgiveness. If you return to the same sin, repent again, and look at what usually comes before it and change that, for the door of repentance is not shut by repetition.",
          "Tariq put the phone face down on the table and wrote on a small piece of paper: «Walid. The story.» In the morning he opened the meeting with a word to his colleague that no one else heard. In the evening he sat on the edge of his daughter's bed reading to her, until she fell asleep before the story ended."
        ]
      },
      quote: {
        ar: "﴿وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ﴾",
        en: "Meaning (not a translation): And I swear by the self-reproaching soul.",
        ref: "القيامة 75:2",
        checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)",
        verify: true
      },
      source: {
        ar: "قصة مؤلفة بشخصيات خيالية، مع آية من سورة القيامة، وحديث في صحيح البخاري، وإحياء علوم الدين للغزالي (كتاب التوبة).",
        en: "An original story with fictional characters, with a verse from al-Qiyama, a hadith in Sahih al-Bukhari, and al-Ghazali's Ihya 'Ulum al-Din (Book of Repentance)."
      }
    },
    {
      id: "ah-r7",
      summit: true,
      minutes: 3,
      ages: "18+",
      title: { ar: "القمة: يد لم تضرب أحدًا", en: "The summit: a hand that struck no one" },
      body: {
        ar: [
          "قالت السيدة عائشة رضي الله عنها: «مَا ضَرَبَ رَسُولُ اللَّهِ» صلى الله عليه وآله وسلم «شَيْئًا قَطُّ بِيَدِهِ وَلاَ امْرَأَةً وَلاَ خَادِمًا إِلاَّ أَنْ يُجَاهِدَ فِي سَبِيلِ اللَّهِ وَمَا نِيلَ مِنْهُ شَىْءٌ قَطُّ فَيَنْتَقِمَ مِنْ صَاحِبِهِ إِلاَّ أَنْ يُنْتَهَكَ شَىْءٌ مِنْ مَحَارِمِ اللَّهِ فَيَنْتَقِمَ لِلَّهِ عَزَّ وَجَلَّ» (صحيح مسلم 2328).",
          "في هذا الخبر أعلى صور كفّ الأذى. في البيت، حيث لا يراه الناس، لم تمتد يده إلى زوجة ولا خادم. وفي حق نفسه، حين يُؤذى، لم ينتقم لنفسه قط. وكان غضبه لحرمات الله وحدها.",
          "وهذا ميزان للكبار خاصة، لأن الكبير يملك سلطة: على زوجته وأولاده، وعلى من يعمل عنده، وعلى من هو أضعف منه. وكفّ الأذى يُمتحن حيث تكون اليد قادرة.",
          "سؤال للتأمل: من الأضعف منك في حياتك؟ وهل يسلم من يدك ولسانك وأنت غاضب؟",
          "في ورشة صغيرة أفسد عامل جديد لوحًا من الخشب الغالي. التفت إليه صاحب الورشة، وكان معروفًا بحدة لسانه، ورفع اللوح بيده، ثم وضعه على الطاولة بهدوء، وقال: «تعال، أريك كيف نقيس مرتين قبل أن نقطع»."
        ],
        ar_f: [
          "قالت السيدة عائشة رضي الله عنها: «مَا ضَرَبَ رَسُولُ اللَّهِ» صلى الله عليه وآله وسلم «شَيْئًا قَطُّ بِيَدِهِ وَلاَ امْرَأَةً وَلاَ خَادِمًا إِلاَّ أَنْ يُجَاهِدَ فِي سَبِيلِ اللَّهِ وَمَا نِيلَ مِنْهُ شَىْءٌ قَطُّ فَيَنْتَقِمَ مِنْ صَاحِبِهِ إِلاَّ أَنْ يُنْتَهَكَ شَىْءٌ مِنْ مَحَارِمِ اللَّهِ فَيَنْتَقِمَ لِلَّهِ عَزَّ وَجَلَّ» (صحيح مسلم 2328).",
          "في هذا الخبر أعلى صور كفّ الأذى. في البيت، حيث لا يراه الناس، لم تمتد يده إلى زوجة ولا خادم. وفي حق نفسه، حين يُؤذى، لم ينتقم لنفسه قط. وكان غضبه لحرمات الله وحدها.",
          "وهذا ميزان للكبار خاصة، لأن الكبير يملك سلطة: على زوجته وأولاده، وعلى من يعمل عنده، وعلى من هو أضعف منه. وكفّ الأذى يُمتحن حيث تكون اليد قادرة.",
          "سؤال للتأمل: من الأضعف منكِ في حياتك؟ وهل يسلم من يدكِ ولسانكِ وأنتِ غاضبة؟",
          "في ورشة صغيرة أفسد عامل جديد لوحًا من الخشب الغالي. التفت إليه صاحب الورشة، وكان معروفًا بحدة لسانه، ورفع اللوح بيده، ثم وضعه على الطاولة بهدوء، وقال: «تعال، أريك كيف نقيس مرتين قبل أن نقطع»."
        ],
        en: [
          "Lady Aisha, may Allah be pleased with her, said: «The Messenger of Allah, peace and blessings be upon him and his family, never struck anything with his hand, neither a woman nor a servant, except when striving in the path of Allah; and nothing was ever done to harm him for which he took revenge on its doer, unless something Allah made sacred was violated, and then he took revenge for Allah, the Mighty and Majestic» (Sahih Muslim 2328).",
          "This report holds the highest form of keeping harm away. At home, where no one sees, his hand never reached for a wife or a servant. In his own right, when harmed, he never took revenge for himself. His anger was for what Allah made sacred, and nothing else.",
          "This is a measure for adults especially, because an adult holds power: over a spouse and children, over those who work for them, over anyone weaker. Keeping harm away is tested where the hand is able.",
          "A question to reflect on: who in your life is weaker than you? And are they safe from your hand and your tongue when you are angry?",
          "In a small workshop a new worker ruined a costly board of wood. The owner, known for his sharp tongue, turned to him and lifted the board in his hand, then laid it calmly on the bench and said: «Come, let me show you how we measure twice before we cut.»"
        ]
      },
      quote: {
        ar: "«وَمَا نِيلَ مِنْهُ شَىْءٌ قَطُّ فَيَنْتَقِمَ مِنْ صَاحِبِهِ إِلاَّ أَنْ يُنْتَهَكَ شَىْءٌ مِنْ مَحَارِمِ اللَّهِ فَيَنْتَقِمَ لِلَّهِ عَزَّ وَجَلَّ»",
        en: "Meaning: Nothing was ever done to harm him for which he took revenge on its doer, unless something Allah made sacred was violated, and then he took revenge for Allah.",
        ref: "صحيح مسلم 2328 (ترقيم sunnah.com: الكتاب 43، الحديث 108)، عن عائشة",
        checked: "hadith-api (fawazahmed0)",
        verify: true
      },
      source: { ar: "حديث في صحيح مسلم، ومشهد بشخصيات خيالية.", en: "A hadith in Sahih Muslim, and a scene with fictional characters." }
    },
    {
      id: "ah-r8",
      companions: true,
      minutes: 5,
      ages: "18+",
      title: { ar: "كعب بن مالك: نجّاني الصدق", en: "Ka'b ibn Malik: truthfulness saved me" },
      body: {
        ar: [
          "تخلّف كعب بن مالك رضي الله عنه عن غزوة تبوك دون عذر. كان يقول كل يوم: أتجهز غدًا، حتى سار الجيش ولم يلحق به. ولما عاد النبي صلى الله عليه وآله وسلم جاءه المتخلفون يعتذرون ويحلفون، فقبل منهم علانيتهم، ووكل سرائرهم إلى الله.",
          "وجاء كعب، وكان قادرًا على أن يعتذر كما اعتذروا، فقد قال عن نفسه: «وَلَقَدْ أُعْطِيتُ جَدَلاً». لكنه قال للنبي صلى الله عليه وآله وسلم: «لاَ وَاللَّهِ مَا كَانَ لِي مِنْ عُذْرٍ، وَاللَّهِ مَا كُنْتُ قَطُّ أَقْوَى وَلاَ أَيْسَرَ مِنِّي حِينَ تَخَلَّفْتُ عَنْكَ». فقال النبي صلى الله عليه وآله وسلم: «أَمَّا هَذَا فَقَدْ صَدَقَ».",
          "ثم نُهي الناس عن كلامه هو وصاحبيه، ومرت أيام ثقيلة «حَتَّى كَمَلَتْ لَنَا خَمْسُونَ لَيْلَةً»، ثم نزلت توبة الله عليهم: ﴿وَعَلَى الثَّلَاثَةِ الَّذِينَ خُلِّفُوا حَتَّىٰ إِذَا ضَاقَتْ عَلَيْهِمُ الْأَرْضُ بِمَا رَحُبَتْ﴾ إلى قوله: ﴿ثُمَّ تَابَ عَلَيْهِمْ لِيَتُوبُوا ۚ إِنَّ اللَّهَ هُوَ التَّوَّابُ الرَّحِيمُ﴾ (التوبة 9:118).",
          "ولما جاءه البشير بالتوبة نزع له ثوبيه فكساه إياهما، وقال: «وَاللَّهِ مَا أَمْلِكُ غَيْرَهُمَا يَوْمَئِذٍ». ثم قال للنبي صلى الله عليه وآله وسلم: «إِنَّ اللَّهَ إِنَّمَا نَجَّانِي بِالصِّدْقِ، وَإِنَّ مِنْ تَوْبَتِي أَنْ لاَ أُحَدِّثَ إِلاَّ صِدْقًا مَا بَقِيتُ» (البخاري 4418).",
          "كان العذر الكاذب أسهل عليه يوم جاء المعتذرون، وكلّفه الصدق خمسين ليلة. وحين حدّث بقصته بعد ذلك قال: «مَا تَعَمَّدْتُ مُنْذُ ذَكَرْتُ ذَلِكَ لِرَسُولِ اللَّهِ» صلى الله عليه وآله وسلم «إِلَى يَوْمِي هَذَا كَذِبًا»."
        ],
        en: [
          "Ka'b ibn Malik, may Allah be pleased with him, stayed behind from the expedition of Tabuk without excuse. Every day he said: I'll get ready tomorrow, until the army had gone and he never caught up. When the Prophet, peace and blessings be upon him and his family, returned, those who had stayed behind came to him with excuses and oaths. He accepted what they showed outwardly and left their inner selves to Allah.",
          "Ka'b came too. He could have made excuses as they did; he said of himself: «I have been given a gift for argument.» But he said to the Prophet, peace and blessings be upon him and his family: «No, by Allah, I had no excuse. By Allah, I was never stronger nor better off than when I stayed behind from you.» The Prophet said: «As for this one, he has told the truth.»",
          "Then people were told not to speak to him and his two companions, and heavy days went by «until fifty nights were complete for us». Then Allah's acceptance of their repentance came down, meaning: and to the three who were left behind, until the earth, vast as it is, closed in on them... then He turned to them so that they might turn back; Allah is the Ever-Relenting, the Merciful (at-Tawba 9:118).",
          "When the man bringing the good news of his repentance reached him, Ka'b took off his two garments and clothed him in them, saying: «By Allah, I owned nothing else that day.» Then he said to the Prophet, peace and blessings be upon him and his family: «Allah saved me only through truthfulness, and part of my repentance is that I will speak nothing but the truth for as long as I live» (Bukhari 4418).",
          "A false excuse would have been easier on the day the others came with theirs; truthfulness cost him fifty nights. When he later told his story, he said: «I have not deliberately told a lie from the day I said that to the Messenger of Allah,» peace and blessings be upon him and his family, «until this day of mine.»"
        ]
      },
      quote: {
        ar: "«إِنَّ اللَّهَ إِنَّمَا نَجَّانِي بِالصِّدْقِ، وَإِنَّ مِنْ تَوْبَتِي أَنْ لاَ أُحَدِّثَ إِلاَّ صِدْقًا مَا بَقِيتُ»",
        en: "Meaning: Allah saved me only through truthfulness, and part of my repentance is that I will speak nothing but the truth for as long as I live.",
        ref: "صحيح البخاري 4418، عن كعب بن مالك",
        checked: "hadith-api (fawazahmed0)",
        verify: true
      },
      source: { ar: "حديث كعب بن مالك في صحيح البخاري، مع آية من سورة التوبة.", en: "The hadith of Ka'b ibn Malik in Sahih al-Bukhari, with a verse from at-Tawba." }
    }
  ],
  quiz: [
    {
      id: "ah-q1",
      readingId: "ah-r1",
      type: "comprehension",
      correct: 1,
      q: {
        ar: "بماذا تختلف الكلمة على الشاشة عن الكلمة في المجلس بحسب المقالة؟",
        en: "According to the article, how does a word on a screen differ from a word in company?"
      },
      options: [
        { ar: "بأنها أخف أثرًا", en: "It has a lighter effect" },
        { ar: "بأنها تبقى، وتصل إلى من لا تعرفه", en: "It stays, and reaches people you don't know" },
        { ar: "بأنها لا تُحاسَب", en: "It is not held to account" }
      ],
      why: {
        ar: "ما يُكتب يبقى ويصل بعيدًا، وكل قول محفوظ: ﴿مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ﴾.",
        en: "What is written stays and travels far, and every word is recorded."
      }
    },
    {
      id: "ah-q2",
      readingId: "ah-r1",
      type: "situation",
      correct: 2,
      q: {
        ar: "رأيت منشورًا لشخص تختلف معه بشدة، وكتبت ردًّا حادًّا. ما الأقرب إلى كفّ الأذى؟",
        ar_f: "رأيتِ منشورًا لشخص تختلفين معه بشدة، وكتبتِ ردًّا حادًّا. ما الأقرب إلى كفّ الأذى؟",
        en: "You see a post by someone you strongly disagree with, and you have written a sharp reply. What is closest to keeping harm away?"
      },
      options: [
        { ar: "أنشره، فرأيي صحيح وهو يستحق الرد", en: "Post it; my view is right and he deserves the reply" },
        { ar: "أنشره باسم مستعار حتى لا أُعرف", en: "Post it under a fake name so I'm not known" },
        { ar: "أقرؤه مرتين وأسأل: هل أقوله في وجهه؟", en: "Read it twice and ask: would I say this to his face?" }
      ],
      why: {
        ar: "هذا ما تنصح به المقالة وما فعله مازن: القراءة الثانية تكشف ما كتبه الغضب، ويكفيك أحيانًا ألا تكتب شيئًا.",
        en: "This is what the article advises and what Mazen did: the second reading shows what anger wrote, and sometimes it is enough to write nothing."
      }
    },
    {
      id: "ah-q3",
      readingId: "ah-r2",
      type: "comprehension",
      correct: 2,
      q: { ar: "ماذا قالت هالة لصاحب المتجر الذي أراد شعاره خلال أسبوع؟", en: "What did Hala tell the shop owner who wanted his logo within a week?" },
      options: [
        { ar: "إنها تسلّمه في أسبوع إن دفع أكثر", en: "That she would deliver in a week if he paid more" },
        { ar: "إنها لا تقبل مشاريع جديدة هذا الشهر", en: "That she was taking no new projects this month" },
        { ar: "إنها تسلّمه بعد ثلاثة أسابيع، لا قبل ذلك", en: "That she would deliver in three weeks, not before" }
      ],
      why: {
        ar: "الوفاء يبدأ قبل الوعد: أن تعد بما تقدر عليه، فيصدّقك الناس.",
        en: "Keeping a promise begins before making it: promise what you can do, and people believe you."
      }
    },
    {
      id: "ah-q4",
      readingId: "ah-r2",
      type: "comprehension",
      correct: 1,
      q: { ar: "لماذا ترك العميل القديم هالة بحسب رسالته؟", en: "According to his message, why did the old client leave Hala?" },
      options: [
        { ar: "لأن عملها لم يعد يعجبه كما كان", en: "Because he no longer liked her work as before" },
        { ar: "لأنه لا يستطيع أن يبني موعده على وعدها", en: "Because he could not build his deadline on her promise" },
        { ar: "لأنه وجد مصممًا أرخص منها", en: "Because he found a cheaper designer" }
      ],
      why: {
        ar: "كتب لها: «عملك جميل»، فالإتقان وحده لم يحفظ العميل، والوعد المخلف أضاعه.",
        en: "He wrote «your work is beautiful»: skill alone did not keep the client, and the broken promises lost him."
      }
    },
    {
      id: "ah-q5",
      readingId: "ah-r3",
      type: "comprehension",
      correct: 1,
      q: {
        ar: "ماذا قال النبي صلى الله عليه وآله وسلم حين أُخبر بكلام سلمان لأبي الدرداء؟",
        en: "What did the Prophet, peace and blessings be upon him and his family, say when told what Salman said to Abu al-Darda?"
      },
      options: [
        { ar: "بل الأفضل أن يقوم الليل كله", en: "Rather, it is better to pray all night" },
        { ar: "«صَدَقَ سَلْمَانُ»", en: "«Salman has spoken the truth»" },
        { ar: "لا تتدخل في شأن أخيك", en: "Don't interfere in your brother's affairs" }
      ],
      why: {
        ar: "لربك عليك حق، ولنفسك حق، ولأهلك حق: فأعطِ كل ذي حق حقه.",
        en: "Your Lord has a right over you, your self has a right, your family has a right: give each its due."
      }
    },
    {
      id: "ah-q6",
      readingId: "ah-r4",
      type: "comprehension",
      correct: 1,
      q: { ar: "ما الأشياء الثلاثة في الاعتذار الصادق بحسب المقالة؟", en: "What are the three parts of a sincere apology, according to the article?" },
      options: [
        { ar: "الاعتذار، وشرح الظروف، وطلب المسامحة فورًا", en: "Apologising, explaining the circumstances, and asking for forgiveness at once" },
        { ar: "تسمية الخطأ، والإقرار بأثره، وإصلاح ما يُستطاع", en: "Naming the mistake, acknowledging its effect, and repairing what one can" },
        { ar: "الاعتراف، ثم هدية، ثم انتظار أن تبرد المسألة", en: "Admitting it, then a gift, then waiting for things to cool down" }
      ],
      why: {
        ar: "الاعتذار بلا «لكن» يداوي الجرح، والاعتذار الذي يحمل دفاعًا يزيده.",
        en: "An apology without «but» heals the wound; an apology with a defence inside deepens it."
      }
    },
    {
      id: "ah-q7",
      readingId: "ah-r4",
      type: "situation",
      correct: 1,
      q: {
        ar: "رفعت صوتك على ابنك أمام إخوته لأمر لم يكن خطأه. ماذا تفعل؟",
        ar_f: "رفعتِ صوتك على ابنك أمام إخوته لأمر لم يكن خطأه. ماذا تفعلين؟",
        en: "You raised your voice at your son in front of his siblings over something that wasn't his fault. What do you do?"
      },
      options: [
        { ar: "لا أعتذر، حتى لا تضيع هيبتي", en: "Don't apologise, so as not to lose my authority" },
        { ar: "أعتذر إليه، وأسمّي خطئي، دون «لكن»", en: "Apologise to him, naming my mistake, without «but»" },
        { ar: "أشتري له شيئًا يحبه، وأنسى الأمر", en: "Buy him something he likes and forget it" }
      ],
      why: { ar: "الأولاد يتعلمون الرجوع عن الخطأ حين يرون آباءهم وأمهاتهم يرجعون.", en: "Children learn to turn back from mistakes by watching their parents turn back." }
    },
    {
      id: "ah-q8",
      readingId: "ah-r5",
      type: "comprehension",
      correct: 1,
      q: {
        ar: "بماذا سأل النبي صلى الله عليه وآله وسلم والد النعمان قبل أن يأمره بالعدل؟",
        en: "What did the Prophet, peace and blessings be upon him and his family, ask an-Nu'man's father before telling him to be fair?"
      },
      options: [
        { ar: "هل استشرت أم النعمان قبل العطية؟", en: "Did you consult an-Nu'man's mother before the gift?" },
        { ar: "هل أعطيت سائر ولدك مثل هذا؟", en: "Have you given the rest of your children the like of this?" },
        { ar: "هل تقدر على هذه العطية من مالك؟", en: "Can your wealth bear this gift?" }
      ],
      why: {
        ar: "سؤال واحد عن الإخوة، فلما قال «لا» أمره بالعدل، فردّ العطية.",
        en: "One question, about the siblings. When he said «no», he was told to be fair, and he took the gift back."
      }
    },
    {
      id: "ah-q9",
      readingId: "ah-r6",
      type: "comprehension",
      correct: 1,
      q: { ar: "ما الأمور الثلاثة التي تنتظم منها التوبة عند الغزالي؟", en: "For al-Ghazali, what three things make up repentance?" },
      options: [
        { ar: "ندم، واستغفار، وعزم", en: "Remorse, seeking forgiveness, and resolve" },
        { ar: "علم، وحال، وفعل", en: "Knowledge, state and action" },
        { ar: "قول، ونية، وعمل", en: "Word, intention and deed" }
      ],
      why: { ar: "يعرف ضرر الذنب، فيندم، فيترك ويعزم ويصلح ما مضى.", en: "One knows the sin's harm, feels remorse, then leaves it, resolves, and repairs the past." }
    },
    {
      id: "ah-q10",
      readingId: "ah-r6",
      type: "situation",
      correct: 1,
      q: {
        ar: "تبت من الغيبة، ثم وقعت فيها مرة أخرى في مجلس. ما الأقرب إلى ما في المقالة؟",
        ar_f: "تبتِ من الغيبة، ثم وقعتِ فيها مرة أخرى في مجلس. ما الأقرب إلى ما في المقالة؟",
        en: "You repented of backbiting, then fell into it again at a gathering. What is closest to the article?"
      },
      options: [
        { ar: "أيأس، فقد عدت إليه بعد التوبة", en: "Despair, since I went back to it after repenting" },
        { ar: "أتوب مرة أخرى، وأغيّر ما يسبقه عادة", en: "Repent again, and change what usually comes before it" },
        { ar: "أؤجل التوبة حتى أتأكد أني لن أعود", en: "Put off repenting until I'm sure I won't go back" }
      ],
      why: {
        ar: "باب التوبة لا يُغلق بالتكرار، وتغيير ما يسبق الذنب من الفعل الذي تثمره التوبة.",
        en: "The door of repentance is not shut by repetition, and changing what precedes the sin is part of the action repentance bears."
      }
    },
    {
      id: "ah-q11",
      readingId: "ah-r7",
      type: "comprehension",
      correct: 2,
      q: {
        ar: "متى كان النبي صلى الله عليه وآله وسلم ينتقم بحسب حديث السيدة عائشة؟",
        en: "According to Lady Aisha's report, when did the Prophet, peace and blessings be upon him and his family, take revenge?"
      },
      options: [
        { ar: "إذا أوذي في نفسه", en: "When he was harmed personally" },
        { ar: "إذا أخطأ أهل بيته", en: "When his household made a mistake" },
        { ar: "إذا انتُهكت حرمة من حرمات الله", en: "When something Allah made sacred was violated" }
      ],
      why: { ar: "لم ينتقم لنفسه قط. كفّ الأذى عنده في أعلى صوره.", en: "He never took revenge for himself: keeping harm away in its highest form." }
    },
    {
      id: "ah-q12",
      readingId: "ah-r8",
      type: "comprehension",
      correct: 1,
      q: { ar: "ما الذي نجّى كعب بن مالك رضي الله عنه بحسب قوله؟", en: "According to his own words, what saved Ka'b ibn Malik?" },
      options: [
        { ar: "قدرته على الجدل", en: "His skill in argument" },
        { ar: "الصدق", en: "Truthfulness" },
        { ar: "عذر قبله منه النبي صلى الله عليه وآله وسلم", en: "An excuse the Prophet, peace and blessings be upon him and his family, accepted" }
      ],
      why: {
        ar: "«إِنَّ اللَّهَ إِنَّمَا نَجَّانِي بِالصِّدْقِ». كان قادرًا على العذر، واختار الاعتراف.",
        en: "«Allah saved me only through truthfulness.» He could have made excuses, and chose to admit."
      }
    },
    {
      id: "ah-q13",
      readingId: "ah-r5",
      type: "comprehension",
      correct: 0,
      q: { ar: "ماذا فعل خالد مع ابنه سامي يوم الجمعة؟", en: "What did Khalid do with his son Sami on Friday?" },
      options: [
        { ar: "أخذه وحده إلى المكتبة، ومدح تعبه", en: "Took him alone to the library and praised his effort" },
        { ar: "اشترى له هاتفًا مثل هاتف أخيه", en: "Bought him a phone like his brother's" },
        { ar: "جعل يوسف يذاكر معه كل ليلة", en: "Had Yusuf study with him every night" }
      ],
      why: {
        ar: "الهاتف الثاني يسوّي الهدايا، والوقت والكلمة يصلان إلى ما جرحته المقارنة.",
        en: "A second phone evens out the gifts; time and a word reach what the comparison wounded."
      }
    },
    {
      id: "ah-q14",
      readingId: "ah-r6",
      type: "comprehension",
      correct: 2,
      q: { ar: "ماذا فعل طارق حين لامته نفسه على يومه؟", en: "What did Tariq do when his own soul reproached him for his day?" },
      options: [
        { ar: "فتح المقاطع حتى يخف عنه ثقل اليوم", en: "Opened the videos to lighten the weight of the day" },
        { ar: "قرر أن يحاسب نفسه ساعة كاملة كل ليلة", en: "Decided to hold himself to account for a full hour every night" },
        { ar: "قلب الهاتف، وكتب ما سيصلحه في الغد", en: "Turned the phone over and wrote down what he would fix tomorrow" }
      ],
      why: {
        ar: "اللوم الذي يصير فعلًا صغيرًا ثابتًا هو التوبة، وأحب الأعمال إلى الله أدومها وإن قل.",
        en: "Reproach that becomes a small, steady act is repentance, and the deeds most loved by Allah are the most constant, even if few."
      }
    }
  ],
  tasks: [
    { id: "ah-t1", ar: "يوم بلا تعليق ساخر ولا كلمة في غائب.", en: "A day with no mocking comment and no word about anyone absent." },
    { id: "ah-t2", ar: "واجب مؤجل منذ أيام، أُدّي اليوم.", en: "A duty put off for days, done today." },
    { id: "ah-t3", ar: "الصلوات الخمس في وقتها في يوم مزدحم.", en: "All five prayers on time on a busy day." },
    { id: "ah-t4", ar: "اعتذار كامل دون «لكن» لمن أخطأت في حقه.", en: "A full apology, without «but», to someone I wronged." },
    { id: "ah-t5", ar: "حق مؤجل رُدّ إلى صاحبه: دين، أو شيء مستعار، أو وعد.", en: "A postponed right returned to its owner: a debt, something borrowed, or a promise." }
  ],
  selfcheck: [
    { id: "ah-s1", q: { ar: "هل يسلم الناس مما أقول وأكتب؟", en: "Are people safe from what I say and write?" } },
    { id: "ah-s2", q: { ar: "هل أؤدي عملي بإتقان ولو لم يرني أحد؟", en: "Do I do my work well even when no one sees?" } },
    {
      id: "ah-s3",
      q: {
        ar: "هل أعطي كل ذي حق حقه: ربي، وأهلي، وعملي، وأعدل بين أولادي في الكلمة والعطية؟",
        en: "Do I give each its due, my Lord, my family, my work, and am I fair between my children in word and gift?"
      }
    },
    { id: "ah-s4", q: { ar: "هل أعتذر حين أخطئ، دون «لكن»؟", en: "Do I apologise when I'm wrong, without «but»?" } },
    {
      id: "ah-s5",
      q: { ar: "هل أراجع يومي قبل النوم، وأصلح في الغد أمرًا واحدًا وجدته؟", en: "Do I review my day before sleep, and put right one thing I found the next day?" }
    }
  ]
};

/* ───────────── الإبهام: السابق بالخيرات للكبار / Racing to good, adult ───────────── */
window.AKHLAQ_CONTENT_ADULT.stages.sabiq = {
  name: { ar: "السابق بالخيرات", en: "Racing to good" },
  short: {
    ar: "سلوك السبق إلى الخير: يبادر بالخير قبل أن يُطلب منه، ويتقن عمله حيث لا يراه أحد، ويخفي ما استطاع من عمله، ويداوم على القليل بعد أن تهدأ الحماسة الأولى، ويأخذ بيد غيره ليصعد معه. ويعرف أن سبقه بإذن الله وفضله، فيزداد تواضعًا كلما زاد عمله.",
    en: "The behaviour of racing to good: doing good before being asked, doing one's work well where no one sees it, hiding what one can of one's deeds, keeping up the little after the first fervour has gone, and taking others by the hand to climb together. One knows that any lead is by Allah's leave and grace, and grows humbler as the deeds grow."
  },
  signs: [
    {
      ar: "حاجة تُرى في البيت أو العمل أو المسجد، فتُقضى قبل أن يطلبها أحد.",
      en: "A need seen at home, at work or in the mosque, and met before anyone asks."
    },
    { ar: "عمل يُتقن في الجزء الذي لا يفحصه أحد.", en: "Work done well in the part no one checks." },
    {
      ar: "صدقة أو خدمة لا يعرفها إلا الله، ورغبة في نشرها تُترك.",
      en: "A charity or a service only Allah knows of, and the urge to post about it, left alone."
    },
    {
      ar: "ركعتان في آخر الليل، أو ورد صغير، يبقى بعد أن تذهب الحماسة.",
      en: "Two rak'as late at night, or a small daily portion, that remains after the enthusiasm has gone."
    },
    {
      ar: "علم يُعلَّم دون مقابل، وفرح صادق إذا سبقك غيرك إلى الخير.",
      en: "Knowledge taught for nothing in return, and real joy when someone else gets to the good first."
    }
  ],
  climb: [
    { ar: "أجعل لي كل يوم عملًا خفيًّا لا يعرفه إلا الله.", en: "Each day I keep one hidden deed that only Allah knows." },
    {
      ar: "أختار عبادة صغيرة أقدر عليها في أتعب أيامي، وأداوم عليها.",
      en: "I choose a small act of worship I can manage on my most tiring day, and keep it up."
    },
    { ar: "أعين غيري على الخير بالكلمة الطيبة لا باللوم.", en: "I help others toward good with kind words, not blame." },
    {
      ar: "لا أغترّ بعملي، فالسبق بإذن الله، وأنا أحتاج الهداية كل يوم.",
      en: "I am not deceived by my deeds: any lead is by Allah's leave, and I need guidance every day."
    }
  ],
  degrees: [
    {
      name: { ar: "مبادرة بالخير", en: "Starting the good" },
      desc: {
        ar: "يفعل الخير من نفسه قبل أن يُطلب منه: يرى الحاجة فيقضيها، ويرى الأذى فيزيله، ولا ينتظر أن يُكلَّف.",
        en: "Doing good of one's own accord before being asked: seeing a need and meeting it, seeing harm and removing it, without waiting to be told."
      },
      looks: {
        ar: "ترى كيس القمامة أمام باب جارك المسن فتحمله معك وأنت نازل، وتلاحظ أن سجاد المسجد يحتاج إلى تنظيف فتتفق مع اثنين على تنظيفه يوم السبت.",
        ar_f: "ترين كيس القمامة أمام باب جارتك المسنة فتحملينه معك وأنتِ نازلة، وتلاحظين أن مصلى النساء في المسجد يحتاج إلى ترتيب فتتفقين مع اثنتين على ترتيبه يوم السبت.",
        en: "You see the rubbish bag outside your elderly neighbour's door and take it down with you, and you notice the mosque carpet needs cleaning and arrange with two others to clean it on Saturday."
      },
      story: {
        ar: [
          "انقطعت الكهرباء عن العمارة التي يسكنها نبيل في ليلة شديدة البرد، وفيها جارة مسنة تعيش وحدها في الطابق الأول.",
          "لم يطلب منه أحد شيئًا. أخذ بطانية وترمس شاي وطرق بابها، وسألها إن كانت تحتاج إلى شيء، ثم اتصل بابنها في مدينة أخرى ليطمئنه.",
          "وفي الصباح أنشأ مجموعة صغيرة لسكان العمارة، يكتب فيها من يحتاج إلى مساعدة. وصار الجيران يتناوبون على زيارة الجارة كل يوم."
        ],
        en: [
          "The power went out in Nabil's building on a bitterly cold night. An elderly neighbour lived alone on the first floor.",
          "No one asked him for anything. He took a blanket and a flask of tea, knocked on her door and asked if she needed anything, then called her son in another city to reassure him.",
          "In the morning he set up a small group for the residents, where anyone needing help could write. The neighbours now take turns visiting her every day."
        ]
      },
      step: {
        ar: "انظر اليوم حولك في البيت أو العمل أو الحي، واقضِ حاجة واحدة رأيتها دون أن يطلبها منك أحد، ولا تخبر بها أحدًا.",
        ar_f: "انظري اليوم حولك في البيت أو العمل أو الحي، واقضي حاجة واحدة رأيتِها دون أن يطلبها منك أحد، ولا تخبري بها أحدًا.",
        en: "Today, look around you at home, at work or in the neighbourhood, meet one need you see without being asked, and tell no one."
      },
      week: {
        ar: "سبعة أيام تبادر فيها كل يوم بخير لم يُطلب منك: سلام على جار، أو إزالة أذى من طريق، أو رسالة اطمئنان على قريب مريض.",
        ar_f: "سبعة أيام تبادرين فيها كل يوم بخير لم يُطلب منك: سلام على جارة، أو إزالة أذى من طريق، أو رسالة اطمئنان على قريب مريض.",
        en: "For seven days, take the lead each day in some good no one asked of you: greeting a neighbour, clearing something harmful from a path, a message checking on a sick relative."
      },
      habit: {
        ar: "اجعل لك صدقة خفية ثابتة تداوم عليها، فقد ذكر النبي صلى الله عليه وآله وسلم في السبعة الذين يظلهم الله في ظله: «وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لاَ تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ» (البخاري 1423).",
        ar_f: "اجعلي لك صدقة خفية ثابتة تداومين عليها، فقد ذكر النبي صلى الله عليه وآله وسلم في السبعة الذين يظلهم الله في ظله: «وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لاَ تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ» (البخاري 1423).",
        en: "Keep a regular hidden charity. Among the seven whom Allah shades in His shade, the Prophet, peace and blessings be upon him and his family, mentioned: «a man who gave charity and hid it so that his left hand does not know what his right hand spends» (Bukhari 1423)."
      },
      q: {
        id: "as-d1q",
        type: "situation",
        readingId: null,
        correct: 1,
        q: {
          ar: "لاحظت أن إشارة المرور قرب مدرسة الحي معطلة منذ أسبوع، والأطفال يعبرون بصعوبة. ما الأقرب إلى المبادرة بالخير؟",
          ar_f: "لاحظتِ أن إشارة المرور قرب مدرسة الحي معطلة منذ أسبوع، والأطفال يعبرون بصعوبة. ما الأقرب إلى المبادرة بالخير؟",
          en: "You notice the traffic light near the neighbourhood school has been broken for a week, and the children struggle to cross. What is closest to taking the lead in good?"
        },
        options: [
          {
            ar: "أكتب منشورًا في مجموعة الحي عن الخطر حتى يتحرك أحد",
            en: "Write a post in the neighbourhood group about the danger so that someone acts"
          },
          {
            ar: "أبلّغ الجهة المسؤولة اليوم، وأتفق مع بعض الجيران على مساعدة الأطفال في العبور حتى تُصلح",
            en: "Report it today, and arrange with some neighbours to help the children cross until it is fixed"
          },
          { ar: "أوصي أولادي بالحذر عند العبور، فهذا ما في يدي", en: "Tell my own children to take care crossing; that much is in my hands" }
        ],
        why: {
          ar: "المبادر يبلّغ اليوم، ويقف مع أطفال الحي كلهم حتى تُصلح الإشارة، فالحاجة حاجتهم جميعًا.",
          en: "One who takes the lead reports it today and stands with all the neighbourhood's children until the light is fixed, for the need belongs to all of them."
        }
      }
    },
    {
      name: { ar: "مسابقة وعون للغير", en: "Racing and helping others rise" },
      desc: {
        ar: "يتسابق إلى الخير، ويأخذ بيد غيره ليصعد معه: يعلّم ما يعرف، ويدعو أهله وأصحابه إلى خير يفعلونه معًا، ويفرح إذا سبقه غيره.",
        en: "Racing to good while taking others by the hand to climb together: teaching what one knows, inviting family and friends to good done together, and rejoicing when someone else gets ahead."
      },
      looks: {
        ar: "تجمع أصدقاءك على ختمة قرآن في رمضان، وتعلّم جارك الجديد اللغة التي يحتاجها في عمله، وتفرح إذا سبقك أخوك إلى الصف الأول.",
        ar_f: "تجمعين صديقاتك على ختمة قرآن في رمضان، وتعلّمين جارتك الجديدة اللغة التي تحتاجها في عملها، وتفرحين إذا سبقتك أختك إلى الخير.",
        en: "You gather your friends to complete the Quran together in Ramadan, teach a new neighbour the language they need for work, and are glad when your brother reaches the front row before you."
      },
      story: {
        ar: [
          "كانت أمل تحفظ القرآن وتعمل مدرّسة. وفي الحي نساء كثيرات يقلن إنهن يتمنين الحفظ، ولا يجدن من يبدأ معهن.",
          "فخصصت ساعة بعد عصر كل سبت في بيتها، وبدأت بثلاث جارات تراجع معهن جزء عمّ.",
          "بعد سنة صرن خمس عشرة، وصارت اثنتان منهن تعلّمان الجديدات. وكانت أمل تقول: لم أعد أسابقهن، صرت أسابق معهن."
        ],
        en: [
          "Amal had memorised the Quran and worked as a teacher. Many women in the neighbourhood said they wished to memorise it but found no one to start with.",
          "So she set aside an hour after Asr every Saturday in her home, and began with three neighbours, revising Juz' 'Amma with them.",
          "A year later there were fifteen, and two of them were teaching the newcomers. Amal used to say: I no longer race against them; I race alongside them."
        ]
      },
      step: {
        ar: "اختر خيرًا تعرفه، علمًا أو مهارة أو عادة صالحة، وعلّمه اليوم لشخص واحد يحتاج إليه.",
        ar_f: "اختاري خيرًا تعرفينه، علمًا أو مهارة أو عادة صالحة، وعلّميه اليوم لشخص واحد يحتاج إليه.",
        en: "Choose some good you know, knowledge, a skill or a good habit, and teach it today to one person who needs it."
      },
      week: {
        ar: "ادعُ هذا الأسبوع أحد أهلك أو أصحابك إلى خير تفعلانه معًا: زيارة مريض، أو صدقة مشتركة، أو صيام يوم، أو ورد قرآن.",
        ar_f: "ادعي هذا الأسبوع أحد أهلك أو صديقاتك إلى خير تفعلانه معًا: زيارة مريض، أو صدقة مشتركة، أو صيام يوم، أو ورد قرآن.",
        en: "This week, invite a family member or friend to some good you do together: visiting the sick, a shared charity, a day's fast, or a portion of Quran."
      },
      habit: {
        ar: "اجعل لك مع أهلك أو أصحابك مشروع خير ثابتًا تستمرون فيه، وتذكّر قول النبي صلى الله عليه وآله وسلم: «مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ» (صحيح مسلم 1893).",
        ar_f: "اجعلي لك مع أهلك أو صديقاتك مشروع خير ثابتًا تستمرون فيه، وتذكّري قول النبي صلى الله عليه وآله وسلم: «مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ» (صحيح مسلم 1893).",
        en: "Keep a steady project of good with your family or friends, and remember the words of the Prophet, peace and blessings be upon him and his family: «Whoever guides to good has a reward like that of the one who does it» (Sahih Muslim 1893)."
      },
      q: {
        id: "as-d2q",
        type: "situation",
        readingId: null,
        correct: 1,
        q: {
          ar: "سبقك زميلك في المسجد إلى فكرة درس أسبوعي للشباب كنت تفكر فيها، ونال الثناء عليها. ماذا تفعل؟",
          ar_f: "سبقتكِ صديقتك إلى فكرة حلقة أسبوعية للفتيات كنتِ تفكرين فيها، ونالت الثناء عليها. ماذا تفعلين؟",
          en: "Someone at the mosque beats you to the idea of a weekly class for young people that you had in mind, and is praised for it. What do you do?"
        },
        options: [
          {
            ar: "أتركه له، وأبحث عن مشروع آخر لم يسبقني إليه أحد",
            ar_f: "أتركها لها، وأبحث عن مشروع آخر لم يسبقني إليه أحد",
            en: "Leave it to them, and look for another project no one has got to first"
          },
          { ar: "أشكره، وأعرض أن أعينه فيه", ar_f: "أشكرها، وأعرض أن أعينها فيها", en: "Thank them and offer to help with it" },
          {
            ar: "أحضر مرة، ثم أرسل إليه قائمة بما ينقص درسه",
            ar_f: "أحضر مرة، ثم أرسل إليها قائمة بما ينقص حلقتها",
            en: "Attend once, then send them a list of what their class is missing"
          }
        ],
        why: {
          ar: "في سباق الخير يصير من سبقك شريكًا، والعون على خير بدأه غيرك سبقٌ آخر إليه.",
          en: "In the race to good, the one who got there first becomes a partner, and helping with a good someone else began is another way of reaching it first."
        }
      }
    }
  ],
  readings: [
    {
      id: "as-r1",
      minutes: 4,
      ages: "18+",
      title: { ar: "الجزء الذي لا يفحصه أحد", en: "The part no one checks" },
      body: {
        ar: [
          "في كل عمل جزء يراه الناس وجزء لا يراه أحد: اللحام تحت الطلاء، والسطر الأخير في التقرير، والمريض الأخير في نوبة الليل، والسؤال الذي يسأله طالب ضعيف قبل الجرس بدقيقة. ويُعرف الإنسان في الجزء الثاني أكثر مما يُعرف في الأول.",
          "سأل جبريل عليه السلام النبيَّ صلى الله عليه وآله وسلم عن الإحسان، فقال: «أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ» (البخاري 50). والعمل الذي يُبتغى به وجه الله عبادة، فيدخله الإحسان كما يدخل الصلاة: أن تعمل وأنت تعلم أن الله يرى الجزء الذي لا يفحصه أحد.",
          "ويبدأ الإحسان في العمل بعشر دقائق زائدة: مراجعة ثانية لما كتبت، وجواب كامل لمن سألك وأنت متعب، وإصلاح عيب صغير كان يمكن أن يمرّ. وهذه الدقائق هي المسافة بين من يؤدي ما عليه ومن يسبق إلى الخير. وأولى الناس بها أهل بيتك: الطبق الذي تعدّه لأولادك، والإصلاح الذي يُؤجَّل في البيت لأن الضيوف لا يرونه.",
          "خطوات عملية: اختر في عملك هذا الأسبوع الجزء الذي لا يراجعه أحد، وأتقنه كما لو كان سيُعرض على الجميع. وإذا أنهيت عملًا فاسأل: لو كان هذا لأبي أو لولدي، هل أسلّمه هكذا؟",
          "كان كريم يصلح أنابيب الماء في بيوت الحي. وفي شقة امرأة مسنة انتهى من الإصلاح قبل العصر، ثم رأى خلف الخزانة وصلة قديمة تقطر قطرة كل دقيقة. لم تكن في الطلب، ولن تراها صاحبة البيت. أخرج عدّته مرة أخرى، وجثا على ركبتيه نصف ساعة، ثم مسح الأرض بخرقته، وقال لها وهو يخرج: «الأجرة كما اتفقنا»."
        ],
        ar_f: [
          "في كل عمل جزء يراه الناس وجزء لا يراه أحد: اللحام تحت الطلاء، والسطر الأخير في التقرير، والمريض الأخير في نوبة الليل، والسؤال الذي يسأله طالب ضعيف قبل الجرس بدقيقة. ويُعرف الإنسان في الجزء الثاني أكثر مما يُعرف في الأول.",
          "سأل جبريل عليه السلام النبيَّ صلى الله عليه وآله وسلم عن الإحسان، فقال: «أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ» (البخاري 50). والعمل الذي يُبتغى به وجه الله عبادة، فيدخله الإحسان كما يدخل الصلاة: أن تعمل وأنت تعلم أن الله يرى الجزء الذي لا يفحصه أحد.",
          "ويبدأ الإحسان في العمل بعشر دقائق زائدة: مراجعة ثانية لما كتبت، وجواب كامل لمن سألك وأنت متعب، وإصلاح عيب صغير كان يمكن أن يمرّ. وهذه الدقائق هي المسافة بين من يؤدي ما عليه ومن يسبق إلى الخير. وأولى الناس بها أهل بيتك: الطبق الذي تعدّه لأولادك، والإصلاح الذي يُؤجَّل في البيت لأن الضيوف لا يرونه.",
          "خطوات عملية: اختاري في عملك هذا الأسبوع الجزء الذي لا يراجعه أحد، وأتقنيه كما لو كان سيُعرض على الجميع. وإذا أنهيتِ عملًا فاسألي: لو كان هذا لأبي أو لولدي، هل أسلّمه هكذا؟",
          "كان كريم يصلح أنابيب الماء في بيوت الحي. وفي شقة امرأة مسنة انتهى من الإصلاح قبل العصر، ثم رأى خلف الخزانة وصلة قديمة تقطر قطرة كل دقيقة. لم تكن في الطلب، ولن تراها صاحبة البيت. أخرج عدّته مرة أخرى، وجثا على ركبتيه نصف ساعة، ثم مسح الأرض بخرقته، وقال لها وهو يخرج: «الأجرة كما اتفقنا»."
        ],
        en: [
          "Every job has a part people see and a part no one sees: the weld under the paint, the last line of the report, the last patient of the night shift, the question a struggling student asks a minute before the bell. A person is known by the second part more than by the first.",
          "Jibril, peace be upon him, asked the Prophet, peace and blessings be upon him and his family, about ihsan, and he said: «That you worship Allah as though you see Him, and if you do not see Him, He sees you» (Bukhari 50). Work done for Allah's sake is worship, and ihsan enters it as it enters prayer: you work knowing that Allah sees the part no one inspects.",
          "Ihsan at work begins with ten extra minutes: a second look at what you wrote, a full answer to someone who asks while you are tired, a small fault fixed that could have slipped through. Those minutes are the distance between doing what is owed and racing to good. Your own household has the first claim on them: the dish you make for your children, the repair at home that keeps being put off because guests never see it.",
          "Practical steps: this week, pick the part of your work that no one reviews, and do it as well as if it were going to be shown to everyone. When you finish a job, ask: if this were for my father or my child, would I hand it over like this?",
          "Karim fixed water pipes in the neighbourhood's homes. In an elderly woman's flat he finished the repair before Asr, then noticed behind the cupboard an old joint dripping once a minute. It was not on the job, and she would never see it. He took out his tools again, knelt there for half an hour, wiped the floor with his rag, and said as he left: «The fee is what we agreed.»"
        ]
      },
      quote: {
        ar: "«أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ»",
        en: "Meaning: That you worship Allah as though you see Him, and if you do not see Him, He sees you.",
        ref: "صحيح البخاري 50، عن أبي هريرة",
        checked: "hadith-api (fawazahmed0)",
        verify: true
      },
      source: {
        ar: "مقالة مع حديث في صحيح البخاري، ومشهد بشخصية خيالية.",
        en: "An article with a hadith in Sahih al-Bukhari, and a scene with a fictional character."
      }
    },
    {
      id: "as-r2",
      minutes: 4,
      ages: "18+",
      title: { ar: "من يفتح باب المسجد", en: "The one who opens the mosque door" },
      body: {
        ar: [
          "في كل حي إنسان لا ينتبه إليه أحد: يفتح باب المسجد قبل الفجر، ويشغّل التدفئة في الشتاء، ويرتب المصاحف بعد الصلاة، ويملأ قوارير الماء. يعرفه المصلون بوجهه، وقليل منهم يعرف اسمه.",
          "روى أبو هريرة رضي الله عنه أن رجلًا أسود، أو امرأة سوداء، كان يَقُمّ المسجد، أي ينظفه، فمات. فسأل النبي صلى الله عليه وآله وسلم عنه، فقالوا: مات. فقال: «أَفَلاَ كُنْتُمْ آذَنْتُمُونِي بِهِ دُلُّونِي عَلَى قَبْرِهِ»، فأتى قبره فصلى عليه (البخاري 458).",
          "لم يعدّه الناس شأنًا يُخبر به النبي، وعدّه النبي صلى الله عليه وآله وسلم شأنًا يُخرج إليه. خدمة المسجد عند الله أكبر مما تبدو عند الناس، وقد قال تعالى: ﴿إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ﴾ (التوبة 9:18).",
          "وعمارة المسجد اليوم أبواب كثيرة: ترتيب، وتنظيف، وإصلاح عطل، وتعليم الصغار، وزيارة المصلي الذي غاب، وتبرع بما يحتاجه المسجد من مال أو مهارة.",
          "خطوات عملية: اسأل إمام مسجدك أو القائم عليه: ما الذي يحتاجه المسجد ولا يقوم به أحد؟ واختر منه عملًا تستطيع المداومة عليه، ولو ساعة في الشهر. وإذا عرفت خادم المسجد فاعرف اسمه، واشكره، وادعُ له.",
          "بعد صلاة العشاء في ليلة ممطرة بقي في المسجد رجل واحد يجمع المصاحف عن الرفوف المبتلة، ويمسح الماء عند الباب. سأله شاب يحمل مفاتيح سيارته عن اسمه، فقال: سالم. أخذ الشاب الممسحة من يده، وقال: «اذهب أنت يا عم سالم، الليلة دوري». ومسح الماء حتى الباب، ثم أطفأ الأنوار وخرج."
        ],
        ar_f: [
          "في كل حي إنسان لا ينتبه إليه أحد: يفتح باب المسجد قبل الفجر، ويشغّل التدفئة في الشتاء، ويرتب المصاحف بعد الصلاة، ويملأ قوارير الماء. يعرفه المصلون بوجهه، وقليل منهم يعرف اسمه.",
          "روى أبو هريرة رضي الله عنه أن رجلًا أسود، أو امرأة سوداء، كان يَقُمّ المسجد، أي ينظفه، فمات. فسأل النبي صلى الله عليه وآله وسلم عنه، فقالوا: مات. فقال: «أَفَلاَ كُنْتُمْ آذَنْتُمُونِي بِهِ دُلُّونِي عَلَى قَبْرِهِ»، فأتى قبره فصلى عليه (البخاري 458).",
          "لم يعدّه الناس شأنًا يُخبر به النبي، وعدّه النبي صلى الله عليه وآله وسلم شأنًا يُخرج إليه. خدمة المسجد عند الله أكبر مما تبدو عند الناس، وقد قال تعالى: ﴿إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ﴾ (التوبة 9:18).",
          "وعمارة المسجد اليوم أبواب كثيرة: ترتيب، وتنظيف، وإصلاح عطل، وتعليم الصغار، وزيارة المصلية التي غابت، وتبرع بما يحتاجه المسجد من مال أو مهارة.",
          "خطوات عملية: اسألي القائمين على مصلى النساء في مسجدك: ما الذي يحتاجه المسجد ولا يقوم به أحد؟ واختاري منه عملًا تستطيعين المداومة عليه، ولو ساعة في الشهر. وإذا عرفتِ من تخدم المسجد فاعرفي اسمها، واشكريها، وادعي لها.",
          "بعد صلاة العشاء في ليلة ممطرة بقي في المسجد رجل واحد يجمع المصاحف عن الرفوف المبتلة، ويمسح الماء عند الباب. سأله شاب يحمل مفاتيح سيارته عن اسمه، فقال: سالم. أخذ الشاب الممسحة من يده، وقال: «اذهب أنت يا عم سالم، الليلة دوري». ومسح الماء حتى الباب، ثم أطفأ الأنوار وخرج."
        ],
        en: [
          "In every neighbourhood there is someone nobody notices: they open the mosque door before Fajr, switch on the heating in winter, tidy the copies of the Quran after prayer, refill the water bottles. The worshippers know their face; few know their name.",
          "Abu Hurayra, may Allah be pleased with him, reported that a black man, or a black woman, used to sweep the mosque, and died. The Prophet, peace and blessings be upon him and his family, asked about him, and they said: he died. He said: «Why did you not tell me? Show me his grave.» He went to the grave and prayed over him (Bukhari 458).",
          "People did not think it worth telling the Prophet about; the Prophet thought it worth going out for. Serving the mosque is greater with Allah than it looks to people. Allah says, meaning: the mosques of Allah are maintained only by those who believe in Allah and the Last Day (at-Tawba 9:18).",
          "Maintaining a mosque today has many doors: tidying, cleaning, fixing what is broken, teaching children, visiting a worshipper who has been absent, giving the mosque money or a skill it needs.",
          "Practical steps: ask your mosque's imam or caretaker what the mosque needs that no one is doing. Choose one thing you can keep up, even one hour a month. And if you know who serves the mosque, learn their name, thank them, and pray for them.",
          "After Isha on a rainy night one man stayed behind in the mosque, moving the Qurans off the damp shelves and mopping the water by the door. A young man with his car keys in his hand asked his name. «Salim,» he said. The young man took the mop from him and said: «You go home, Uncle Salim. Tonight it's my turn.» He mopped the water as far as the door, switched off the lights, and left."
        ]
      },
      quote: {
        ar: "«أَفَلاَ كُنْتُمْ آذَنْتُمُونِي بِهِ دُلُّونِي عَلَى قَبْرِهِ»",
        en: "Meaning: Why did you not tell me? Show me his grave.",
        ref: "صحيح البخاري 458، عن أبي هريرة",
        checked: "hadith-api (fawazahmed0)",
        verify: true
      },
      source: {
        ar: "مقالة مع حديث في صحيح البخاري وآية من سورة التوبة، ومشهد بشخصية خيالية.",
        en: "An article with a hadith in Sahih al-Bukhari and a verse from at-Tawba, and a scene with a fictional character."
      }
    },
    {
      id: "as-r3",
      minutes: 4,
      ages: "18+",
      title: { ar: "ساعة بعد العصر", en: "An hour after Asr" },
      body: {
        ar: [
          "تقاعد الأستاذ فؤاد بعد ثلاثين سنة في تدريس الرياضيات. وفي الشهر الأول بعد التقاعد شعر بفراغ ثقيل، حتى رأى في المسجد أولادًا يراجعون واجباتهم بصعوبة بعد صلاة العصر، ولا أحد يساعدهم.",
          "جلس معهم يومًا، ثم صار يجلس كل يوم. وبعد سنة صار في المسجد درس منتظم للرياضيات وتلاوة القرآن، يأتيه ثلاثون ولدًا، ومعه شابان من تلاميذه القدامى يعينانه.",
          "قال النبي صلى الله عليه وآله وسلم: «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ» (البخاري 5027). وتعليم القرآن رأس التعليم، وكل علم نافع يعلّمه المسلم لغيره بنية صالحة من الخير الذي يسبق إليه.",
          "وفي صحيح مسلم أن رجلًا جاء النبي صلى الله عليه وآله وسلم يطلب دابة يُحمل عليها، فقال: «مَا عِنْدِي». فقال رجل: يا رسول الله، أنا أدلّه على من يحمله. فقال: «مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ» (صحيح مسلم 1893). فمن لم يملك ما يُعطي، فليدلّ على من يملك.",
          "خطوات عملية: اكتب ثلاثة أشياء تعرفها جيدًا: لغة، أو مهارة في عملك، أو سورة تتقن تلاوتها. واسأل: من حولي يحتاج إلى واحد منها؟ ثم ابدأ بساعة واحدة في الأسبوع.",
          "وفي الشتاء الثاني أصاب فؤادًا ألم في ركبته، فصار يصعد درج المسجد درجة بعد درجة. اقترح عليه أحد الشابين أن يرتاح شهرًا، فقال: «اشرح لهم أنت هذا الشهر، وأنا أجلس في الصف الأخير أسمع». وفي آخر الشهر كان في الصف الأخير، والشاب يشرح، والأولاد يلتفتون إليه كل حين ليروا هل يبتسم."
        ],
        ar_f: [
          "تقاعد الأستاذ فؤاد بعد ثلاثين سنة في تدريس الرياضيات. وفي الشهر الأول بعد التقاعد شعر بفراغ ثقيل، حتى رأى في المسجد أولادًا يراجعون واجباتهم بصعوبة بعد صلاة العصر، ولا أحد يساعدهم.",
          "جلس معهم يومًا، ثم صار يجلس كل يوم. وبعد سنة صار في المسجد درس منتظم للرياضيات وتلاوة القرآن، يأتيه ثلاثون ولدًا، ومعه شابان من تلاميذه القدامى يعينانه.",
          "قال النبي صلى الله عليه وآله وسلم: «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ» (البخاري 5027). وتعليم القرآن رأس التعليم، وكل علم نافع يعلّمه المسلم لغيره بنية صالحة من الخير الذي يسبق إليه.",
          "وفي صحيح مسلم أن رجلًا جاء النبي صلى الله عليه وآله وسلم يطلب دابة يُحمل عليها، فقال: «مَا عِنْدِي». فقال رجل: يا رسول الله، أنا أدلّه على من يحمله. فقال: «مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ» (صحيح مسلم 1893). فمن لم يملك ما يُعطي، فليدلّ على من يملك.",
          "خطوات عملية: اكتبي ثلاثة أشياء تعرفينها جيدًا: لغة، أو مهارة في عملك، أو سورة تتقنين تلاوتها. واسألي: من حولي يحتاج إلى واحد منها؟ ثم ابدئي بساعة واحدة في الأسبوع.",
          "وفي الشتاء الثاني أصاب فؤادًا ألم في ركبته، فصار يصعد درج المسجد درجة بعد درجة. اقترح عليه أحد الشابين أن يرتاح شهرًا، فقال: «اشرح لهم أنت هذا الشهر، وأنا أجلس في الصف الأخير أسمع». وفي آخر الشهر كان في الصف الأخير، والشاب يشرح، والأولاد يلتفتون إليه كل حين ليروا هل يبتسم."
        ],
        en: [
          "Mr Fuad retired after thirty years of teaching mathematics. In his first month of retirement he felt a heavy emptiness, until he saw boys in the mosque struggling with their homework after the Asr prayer, with no one to help.",
          "He sat with them one day, then every day. A year later the mosque had a regular class in mathematics and Quran recitation, attended by thirty children, with two young men, his former pupils, helping him.",
          "The Prophet, peace and blessings be upon him and his family, said: «The best of you is the one who learns the Quran and teaches it» (Bukhari 5027). Teaching the Quran heads all teaching, and any useful knowledge a Muslim teaches others with good intention belongs to the good one races toward.",
          "In Sahih Muslim, a man came to the Prophet asking for a mount to carry him, and he said: «I have none.» Another man said: Messenger of Allah, I will direct him to someone who can carry him. He said: «Whoever guides to good has a reward like that of the one who does it» (Sahih Muslim 1893). Whoever has nothing to give can point to someone who has.",
          "Practical steps: write down three things you know well: a language, a skill from your work, a surah you recite well. Ask: who around me needs one of these? Then start with one hour a week.",
          "In the second winter Fuad's knee began to hurt, and he climbed the mosque stairs one step at a time. One of the two young men suggested he rest for a month. He said: «You explain to them this month, and I'll sit in the back row and listen.» At the end of the month he was in the back row, the young man was explaining, and every so often the children turned round to see whether he was smiling."
        ]
      },
      quote: {
        ar: "«خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»",
        en: "Meaning: The best of you is the one who learns the Quran and teaches it.",
        ref: "صحيح البخاري 5027، عن عثمان بن عفان",
        checked: "hadith-api (fawazahmed0)",
        verify: true
      },
      source: {
        ar: "قصة مؤلفة بشخصيات خيالية، مع حديثين في صحيحي البخاري ومسلم (مسلم 1893، ترقيم sunnah.com: الكتاب 33، الحديث 195).",
        en: "An original story with fictional characters, with hadiths in Sahih al-Bukhari and Sahih Muslim (Muslim 1893, sunnah.com: book 33, hadith 195)."
      }
    },
    {
      id: "as-r4",
      minutes: 5,
      ages: "18+",
      title: { ar: "عند الصيدلية", en: "At the pharmacy" },
      body: {
        ar: [
          "وقف حامد في الصيدلية خلف امرأة مسنة، سمعها تسأل الصيدلي عن ثمن دوائها، ثم تعيد علبة منه إلى الرف لأن ما معها لا يكفي.",
          "خرجت المرأة. فدفع حامد ثمن العلبة، وطلب من الصيدلي أن يتصل بها ويقول إن الدواء صار متوفرًا بسعر أقل، دون أن يذكر اسمه. ثم اتفق معه أن يترك عنده مبلغًا كل شهر لمن يعجز عن دوائه.",
          "ذكر النبي صلى الله عليه وآله وسلم في السبعة الذين يظلهم الله في ظله يوم لا ظل إلا ظله: «وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لاَ تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ» (البخاري 1423). وفي إخفاء الصدقة حفظ لأمرين: قلب المعطي من أن يطلب ثناء الناس، وكرامة الآخذ من أن يُرى محتاجًا. ولذلك كانت الصدقة الخفية من أعلى الخير: لا يعرفها إلا الله، ولا يُنتظر عليها إلا أجره.",
          "وفي سورة الإنسان وصف لقوم يطعمون الطعام وهم يحبونه، مسكينًا ويتيمًا وأسيرًا، ويقولون: ﴿إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنْكُمْ جَزَاءً وَلَا شُكُورًا﴾ (الإنسان 76:9). ورُوي عن ابن عباس رضي الله عنهما أنها نزلت في علي وفاطمة عليهما السلام وأهل بيتهما: صاموا ثلاثة أيام وفاءً بنذر نذروه لشفاء الحسن والحسين عليهما السلام، وكانوا كل مساء يعطون فطورهم لمن وقف بالباب، مسكين في الليلة الأولى، ويتيم في الثانية، وأسير في الثالثة، ويبيتون على الماء. لا جزاء ولا شكر: يخلو القلب حتى من انتظار الكلمة الطيبة.",
          "ثم يأتي امتحان أدق من الإخفاء نفسه. في المساء أمسك حامد هاتفه، وبدأ يكتب منشورًا عن «موقف مؤثر في الصيدلية» دون أن يذكر نفسه، ثم انتبه إلى أن من يعرفه سيفهم من كان هناك. قال النبي صلى الله عليه وآله وسلم: «مَنْ سَمَّعَ سَمَّعَ اللَّهُ بِهِ، وَمَنْ يُرَائِي يُرَائِي اللَّهُ بِهِ» (البخاري 6499). وفي كتاب ذم الجاه والرياء من «إحياء علوم الدين» يفرّق الغزالي بين رياء جليّ يبعث على العمل، ورياء خفيّ يسكن القلب ويظهر في سرور صاحبه إذا اطّلع الناس على عمله.",
          "قرأ حامد ما كتبه مرة أخرى، ثم مسحه حرفًا حرفًا. وفي أول الشهر التالي مرّ بالصيدلية، وترك المبلغ عند الصيدلي في ظرف أبيض، ولم يسأله هل عادت المرأة."
        ],
        en: [
          "Hamid stood in the pharmacy behind an elderly woman. He heard her ask the pharmacist the price of her medicine, then put one box back on the shelf because she did not have enough.",
          "The woman left. Hamid paid for the box and asked the pharmacist to call her and say the medicine had become available at a lower price, without mentioning his name. Then he arranged to leave a sum with him every month for anyone who could not afford their medicine.",
          "Among the seven whom Allah will shade in His shade on the day when there is no shade but His, the Prophet, peace and blessings be upon him and his family, mentioned: «a man who gave charity and hid it so that his left hand does not know what his right hand spends» (Bukhari 1423). Hiding charity protects two things: the giver's heart from seeking people's praise, and the receiver's dignity from being seen in need. That is why hidden charity is among the highest good: only Allah knows it, and nothing is awaited for it but His reward.",
          "Surat al-Insan describes people who give food, though they love it, to the poor, the orphan and the captive, saying, meaning: we feed you only for the sake of Allah; we want from you neither reward nor thanks (al-Insan 76:9). It is narrated from Ibn Abbas, may Allah be pleased with them both, that it was revealed about Ali and Fatima, peace be upon them, and their household: they fasted three days to fulfil a vow made for the recovery of al-Hasan and al-Husayn, peace be upon them, and each evening they gave their meal to whoever stood at the door, a poor man on the first night, an orphan on the second, a captive on the third, and spent the night on water. Neither reward nor thanks: the heart empty even of waiting for a kind word.",
          "Then comes a test finer than hiding itself. That evening Hamid picked up his phone and began writing a post about «a moving moment at the pharmacy» without mentioning himself, then realised that anyone who knew him would guess who had been there. The Prophet, peace and blessings be upon him and his family, said: «Whoever seeks to be heard of, Allah will make him heard of; and whoever shows off, Allah will show him up» (Bukhari 6499). In the Book of Condemning Status and Showing Off in the Ihya 'Ulum al-Din, al-Ghazali distinguishes an open showing off that drives the deed from a hidden one that lives in the heart and shows itself in one's pleasure when people learn of the deed.",
          "Hamid read what he had written once more, then deleted it letter by letter. At the start of the next month he stopped at the pharmacy, left the money with the pharmacist in a white envelope, and did not ask whether the woman had come back."
        ]
      },
      quote: {
        ar: "«وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لاَ تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ»",
        en: "Meaning: A man who gave charity and hid it so that his left hand does not know what his right hand spends.",
        ref: "صحيح البخاري 1423، عن أبي هريرة",
        checked: "hadith-api (fawazahmed0)",
        verify: true
      },
      source: {
        ar: "قصة مؤلفة بشخصيات خيالية، مع حديثين في صحيح البخاري، وآية من سورة الإنسان، وإحياء علوم الدين للغزالي (كتاب ذم الجاه والرياء). وخبر نزول الآيات في أهل البيت عليهم السلام، بالنذر والأيام الثلاثة، يُروى عن ابن عباس، ذكره الثعلبي ونقله البغوي في «معالم التنزيل» والقرطبي في «الجامع لأحكام القرآن» عند الآيات 76:7-9؛ وروى الواحدي في «أسباب النزول» (844) خبرًا أقصر عن عطاء عن ابن عباس أنها نزلت في علي عليه السلام.",
        en: "An original story with fictional characters, with two hadiths in Sahih al-Bukhari, a verse from al-Insan, and al-Ghazali's Ihya (Book of Condemning Status and Showing Off). The report that these verses were revealed about the Ahl al-Bayt, peace be upon them, with the vow and the three days, is narrated from Ibn Abbas; al-Tha'labi gives it, and al-Baghawi (Ma'alim al-Tanzil) and al-Qurtubi (al-Jami' li-Ahkam al-Quran) cite it at 76:7-9. Al-Wahidi's «Asbab al-Nuzul» (844) gives a shorter report from Ata from Ibn Abbas that they were revealed about Ali, peace be upon him."
      }
    },
    {
      id: "as-r5",
      minutes: 5,
      ages: "18+",
      title: { ar: "الليلة الرابعة", en: "The fourth night" },
      body: {
        ar: [
          "يبدأ كثير منا قيام الليل بحماسة كبيرة، في أول رمضان أو بعد درس مؤثر: منبّه قبل الفجر بساعة، وصفحات طويلة. وفي الليلة الرابعة يرنّ المنبّه والجسد متعب من يوم عمل، والصغير استيقظ مرتين، فيُطفأ المنبّه، ثم يُطفأ في الليلة التالية أسرع.",
          "قالت عائشة رضي الله عنها إن النبي صلى الله عليه وآله وسلم كان يقوم من الليل حتى تتفطر قدماه، فسألته: لِمَ تصنع هذا وقد غفر الله لك ما تقدم من ذنبك وما تأخر؟ فقال: «أَفَلاَ أُحِبُّ أَنْ أَكُونَ عَبْدًا شَكُورًا» (البخاري 4837). قيامه شكر لنعمة يعرفها. وروت عنه أيضًا: «أَحَبَّ الأَعْمَالِ أَدْوَمُهَا إِلَى اللَّهِ، وَإِنْ قَلَّ» (البخاري 6464).",
          "وفي بيت علي وفاطمة عليهما السلام درس في التعب نفسه. اشتكت فاطمة عليها السلام ما تلقى من أثر الرحى في يدها، فذهبت تسأل أباها خادمًا. فأتاهما ليلًا وقد أخذا مضاجعهما، فقعد بينهما حتى وجد علي برد قدميه على صدره، وقال: «أَلاَ أُعَلِّمُكُمَا خَيْرًا مِمَّا سَأَلْتُمَانِي»، فعلّمهما التكبير والتسبيح والتحميد عند النوم، وقال: «فَهْوَ خَيْرٌ لَكُمَا مِنْ خَادِمٍ» (البخاري 3705).",
          "قال علي عليه السلام: «فَمَا تَرَكْتُهَا بَعْدُ». قيل له: ولا ليلة صفين؟ قال: «وَلاَ لَيْلَةَ صِفِّينَ» (البخاري 5362). ذِكر يُقال في دقائق، بقي معه في ليلة من أثقل ليالي عمره. وهذه هي المجاهدة بعد الحماسة: عمل صغير على قدر أتعب الأيام، يبقى حين يذهب كل شيء آخر، ﴿وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ﴾ (العنكبوت 29:69).",
          "خطوات عملية: اختر لقيام الليل قدرًا تقدر عليه في أتعب أيامك، ولو ركعتين قبل أن تنام، وداوم عليه أربعين ليلة قبل أن تزيد. وإذا فاتتك ليلة فابدأ التي بعدها كما بدأت أول مرة، ولا تجعل ما فات حجة لترك ما بقي.",
          "رنّ منبّه سلمى في الثالثة والنصف، وكانت قد نامت بعد منتصف الليل عند سرير ابنها المحموم. مدّت يدها لتطفئه كما فعلت أمس، ثم تذكرت ما اتفقت عليه مع نفسها: ركعتان فقط. توضأت بماء بارد أيقظها، وصلّت الركعتين قرب السرير، تضع يدها بين حين وآخر على جبين الصغير. ثم كبّرت وسبّحت وحمدت، ونامت قبل الأذان بقليل."
        ],
        ar_f: [
          "يبدأ كثير منا قيام الليل بحماسة كبيرة، في أول رمضان أو بعد درس مؤثر: منبّه قبل الفجر بساعة، وصفحات طويلة. وفي الليلة الرابعة يرنّ المنبّه والجسد متعب من يوم عمل، والصغير استيقظ مرتين، فيُطفأ المنبّه، ثم يُطفأ في الليلة التالية أسرع.",
          "قالت عائشة رضي الله عنها إن النبي صلى الله عليه وآله وسلم كان يقوم من الليل حتى تتفطر قدماه، فسألته: لِمَ تصنع هذا وقد غفر الله لك ما تقدم من ذنبك وما تأخر؟ فقال: «أَفَلاَ أُحِبُّ أَنْ أَكُونَ عَبْدًا شَكُورًا» (البخاري 4837). قيامه شكر لنعمة يعرفها. وروت عنه أيضًا: «أَحَبَّ الأَعْمَالِ أَدْوَمُهَا إِلَى اللَّهِ، وَإِنْ قَلَّ» (البخاري 6464).",
          "وفي بيت علي وفاطمة عليهما السلام درس في التعب نفسه. اشتكت فاطمة عليها السلام ما تلقى من أثر الرحى في يدها، فذهبت تسأل أباها خادمًا. فأتاهما ليلًا وقد أخذا مضاجعهما، فقعد بينهما حتى وجد علي برد قدميه على صدره، وقال: «أَلاَ أُعَلِّمُكُمَا خَيْرًا مِمَّا سَأَلْتُمَانِي»، فعلّمهما التكبير والتسبيح والتحميد عند النوم، وقال: «فَهْوَ خَيْرٌ لَكُمَا مِنْ خَادِمٍ» (البخاري 3705).",
          "قال علي عليه السلام: «فَمَا تَرَكْتُهَا بَعْدُ». قيل له: ولا ليلة صفين؟ قال: «وَلاَ لَيْلَةَ صِفِّينَ» (البخاري 5362). ذِكر يُقال في دقائق، بقي معه في ليلة من أثقل ليالي عمره. وهذه هي المجاهدة بعد الحماسة: عمل صغير على قدر أتعب الأيام، يبقى حين يذهب كل شيء آخر، ﴿وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ﴾ (العنكبوت 29:69).",
          "خطوات عملية: اختاري لقيام الليل قدرًا تقدرين عليه في أتعب أيامك، ولو ركعتين قبل أن تنامي، وداومي عليه أربعين ليلة قبل أن تزيدي. وإذا فاتتك ليلة فابدئي التي بعدها كما بدأتِ أول مرة، ولا تجعلي ما فات حجة لترك ما بقي.",
          "رنّ منبّه سلمى في الثالثة والنصف، وكانت قد نامت بعد منتصف الليل عند سرير ابنها المحموم. مدّت يدها لتطفئه كما فعلت أمس، ثم تذكرت ما اتفقت عليه مع نفسها: ركعتان فقط. توضأت بماء بارد أيقظها، وصلّت الركعتين قرب السرير، تضع يدها بين حين وآخر على جبين الصغير. ثم كبّرت وسبّحت وحمدت، ونامت قبل الأذان بقليل."
        ],
        en: [
          "Many of us start praying at night with great enthusiasm, at the beginning of Ramadan or after a moving talk: an alarm an hour before Fajr, long pages of Quran. On the fourth night the alarm rings, the body is tired from a day's work, the little one has woken twice, and the alarm is switched off. The next night it is switched off faster.",
          "A'isha, may Allah be pleased with her, said that the Prophet, peace and blessings be upon him and his family, would stand in prayer at night until his feet cracked. She asked him: why do you do this when Allah has forgiven you your past and future sins? He said: «Should I not love to be a grateful servant?» (Bukhari 4837). His night prayer was gratitude for a blessing he knew. She also reported from him: «The deeds most loved by Allah are the most constant, even if few» (Bukhari 6464).",
          "The house of Ali and Fatima, peace be upon them, holds a lesson about this very tiredness. Fatima, peace be upon her, complained of what the hand mill did to her hand, and went to ask her father for a servant. He came to them at night when they had already gone to bed, and sat between them until Ali felt the coolness of his feet on his chest, and said: «Shall I not teach you something better than what you asked me for?» He taught them to say Allahu akbar, subhan Allah and al-hamdu lillah at bedtime, and said: «It is better for you than a servant» (Bukhari 3705).",
          "Ali, peace be upon him, said: «I have never left it since.» Someone asked: not even on the night of Siffin? He said: «Not even on the night of Siffin» (Bukhari 5362). A remembrance said in a few minutes stayed with him on one of the heaviest nights of his life. This is striving after the enthusiasm has gone: a small deed sized to your most tiring day, which stays when everything else falls away. Allah says, meaning: those who strive for Us, We will surely guide them to Our ways, and Allah is with those who do good (al-'Ankabut 29:69).",
          "Practical steps: choose an amount of night prayer you can manage on your most tiring day, even two rak'as before you sleep, and keep it up for forty nights before adding to it. If you miss a night, begin the next one as you began the first time, and do not let what you missed become a reason to drop what is left.",
          "Salma's alarm rang at half past three. She had fallen asleep after midnight beside her feverish son's bed. She reached out to switch it off as she had the day before, then remembered what she had agreed with herself: two rak'as, nothing more. She made wudu with cold water that woke her, prayed the two rak'as beside the bed, now and then laying her hand on the little one's forehead, then said her Allahu akbar, subhan Allah and al-hamdu lillah, and slept again a little before the adhan."
        ]
      },
      quote: {
        ar: "«فَمَا تَرَكْتُهَا بَعْدُ... وَلاَ لَيْلَةَ صِفِّينَ»",
        en: "Meaning: I have never left it since... not even on the night of Siffin.",
        ref: "صحيح البخاري 5362، عن علي عليه السلام",
        checked: "hadith-api (fawazahmed0)",
        verify: true
      },
      source: {
        ar: "مقالة مع أحاديث في صحيح البخاري (4837، 6464، 3705، 5362) وآية من سورة العنكبوت، ومشهد بشخصية خيالية.",
        en: "An article with hadiths in Sahih al-Bukhari (4837, 6464, 3705, 5362) and a verse from al-'Ankabut, and a scene with a fictional character."
      }
    },
    {
      id: "as-r6",
      minutes: 5,
      ages: "18+",
      title: { ar: "سابق بإذن الله", en: "Ahead, by Allah's leave" },
      body: {
        ar: [
          "في سورة فاطر آية ترسم المراتب كلها: ﴿فَمِنْهُمْ ظَالِمٌ لِنَفْسِهِ وَمِنْهُمْ مُقْتَصِدٌ وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ بِإِذْنِ اللَّهِ ۚ ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ﴾ (فاطر 35:32). ظالم لنفسه بما يقع فيه، ومقتصد يؤدي ما عليه ويكفّ أذاه، وسابق يزيد على الواجب.",
          "وفي الآية كلمتان تحرسان السابق من أخطر ما يصيبه، وهو العُجب: «بِإِذْنِ اللَّهِ»، و«ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ». السبق نفسه إذن من الله وفضل منه، لا ملك للسابق يفخر به على من خلفه.",
          "ومن علامات العجب أن ينظر الإنسان إلى من دونه في الخير نظرة استعلاء، أو أن يحب أن يُعرف بعمله، أو أن يظن أنه وصل فيتوقف. والسابق الحقيقي يرى ما بقي عليه أكثر مما قطع، ويخاف أن يتغير قلبه، فقد قال النبي صلى الله عليه وآله وسلم: «بَادِرُوا بِالأَعْمَالِ فِتَنًا كَقِطَعِ اللَّيْلِ الْمُظْلِمِ» (صحيح مسلم 118).",
          "والقرآن يأمر بالسباق صراحة: ﴿فَاسْتَبِقُوا الْخَيْرَاتِ﴾ (البقرة 2:148). لكنه سباق لا خاسر فيه: من سبقك لم يأخذ مكانك، ومن أعنته شاركته في أجره. ولذلك يفرح السابق إذا سبقه غيره.",
          "خطوات عملية: إذا عملت خيرًا فقل: الحمد لله الذي وفّقني، ولا تحدّث به إلا لحاجة. وإذا رأيت من هو دونك في الخير فادعُ له ولا تحتقره، فلعله يسبقك غدًا. واسأل الله الثبات كل يوم، فالقلوب تتقلب.",
          "صار مراد يصلي الفجر في المسجد كل يوم منذ سنة. وفي صباح رأى جاره الشاب يدخل بعد الإقامة مسرعًا بثياب العمل، فخطرت له كلمة عن «الذين لا يأتون إلا متأخرين»، فأمسكها. وبعد الصلاة عرف أن الشاب يعمل في نوبة ليلية في مستشفى، ويأتي من عمله إلى المسجد قبل أن ينام. فدعا له في سجوده ذلك اليوم، وصار يترك له مكانًا بجانبه في الصف."
        ],
        ar_f: [
          "في سورة فاطر آية ترسم المراتب كلها: ﴿فَمِنْهُمْ ظَالِمٌ لِنَفْسِهِ وَمِنْهُمْ مُقْتَصِدٌ وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ بِإِذْنِ اللَّهِ ۚ ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ﴾ (فاطر 35:32). ظالم لنفسه بما يقع فيه، ومقتصد يؤدي ما عليه ويكفّ أذاه، وسابق يزيد على الواجب.",
          "وفي الآية كلمتان تحرسان السابق من أخطر ما يصيبه، وهو العُجب: «بِإِذْنِ اللَّهِ»، و«ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ». السبق نفسه إذن من الله وفضل منه، لا ملك للسابق يفخر به على من خلفه.",
          "ومن علامات العجب أن ينظر الإنسان إلى من دونه في الخير نظرة استعلاء، أو أن يحب أن يُعرف بعمله، أو أن يظن أنه وصل فيتوقف. والسابق الحقيقي يرى ما بقي عليه أكثر مما قطع، ويخاف أن يتغير قلبه، فقد قال النبي صلى الله عليه وآله وسلم: «بَادِرُوا بِالأَعْمَالِ فِتَنًا كَقِطَعِ اللَّيْلِ الْمُظْلِمِ» (صحيح مسلم 118).",
          "والقرآن يأمر بالسباق صراحة: ﴿فَاسْتَبِقُوا الْخَيْرَاتِ﴾ (البقرة 2:148). لكنه سباق لا خاسر فيه: من سبقك لم يأخذ مكانك، ومن أعنته شاركته في أجره. ولذلك يفرح السابق إذا سبقه غيره.",
          "خطوات عملية: إذا عملتِ خيرًا فقولي: الحمد لله الذي وفّقني، ولا تحدّثي به إلا لحاجة. وإذا رأيتِ من هي دونك في الخير فادعي لها ولا تحتقريها، فلعلها تسبقك غدًا. واسألي الله الثبات كل يوم، فالقلوب تتقلب.",
          "صار مراد يصلي الفجر في المسجد كل يوم منذ سنة. وفي صباح رأى جاره الشاب يدخل بعد الإقامة مسرعًا بثياب العمل، فخطرت له كلمة عن «الذين لا يأتون إلا متأخرين»، فأمسكها. وبعد الصلاة عرف أن الشاب يعمل في نوبة ليلية في مستشفى، ويأتي من عمله إلى المسجد قبل أن ينام. فدعا له في سجوده ذلك اليوم، وصار يترك له مكانًا بجانبه في الصف."
        ],
        en: [
          "A verse in Surat Fatir maps all the stages, meaning: among them is one who wrongs himself, one who is moderate, and one who races ahead in good deeds by Allah's leave; that is the great favour (Fatir 35:32). One who wrongs himself by what he falls into, a moderate one who does what is owed and keeps harm away, and one who races beyond what is required.",
          "Two phrases in the verse guard the one who races ahead from the worst thing that can befall him, self-admiration: «by Allah's leave», and «that is the great favour». The lead itself is Allah's leave and His favour, not a possession to boast of over those behind.",
          "Signs of self-admiration include looking down on those less advanced in good, loving to be known for one's deeds, or thinking one has arrived and stopping. The one truly ahead sees more road still to go than road travelled, and fears a change of heart. The Prophet, peace and blessings be upon him and his family, said: «Hasten to good deeds before trials like pieces of a dark night» (Sahih Muslim 118).",
          "The Quran commands the race plainly, meaning: race to good things (al-Baqara 2:148). But it is a race with no losers: whoever gets ahead of you has not taken your place, and whoever you help, you share in their reward. That is why the one ahead is glad when someone else gets ahead.",
          "Practical steps: when you do some good, say: praise be to Allah who enabled me, and speak of it only when there is a need. When you see someone less advanced in good, pray for them and don't look down on them; they may be ahead of you tomorrow. And ask Allah for steadfastness every day, for hearts turn.",
          "For a year now Murad had prayed Fajr in the mosque every day. One morning he saw his young neighbour hurry in after the iqama, still in work clothes, and a remark came to him about «people who only ever turn up late». He held it back. After the prayer he learned that the young man worked night shifts at a hospital and came straight from work to the mosque before going to sleep. Murad prayed for him in his prostrations that day, and began keeping a place for him beside him in the row."
        ]
      },
      quote: {
        ar: "﴿فَمِنْهُمْ ظَالِمٌ لِنَفْسِهِ وَمِنْهُمْ مُقْتَصِدٌ وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ بِإِذْنِ اللَّهِ ۚ ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ﴾",
        en: "Meaning (not a translation): Among them is one who wrongs himself, one who is moderate, and one who races ahead in good deeds by Allah's leave; that is the great favour.",
        ref: "فاطر 35:32",
        checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)",
        verify: true
      },
      source: {
        ar: "مقالة مع آيتين من سورتي فاطر والبقرة، وحديث في صحيح مسلم (118، ترقيم sunnah.com: الكتاب 1، الحديث 220)، ومشهد بشخصية خيالية.",
        en: "An article with verses from Fatir and al-Baqara, and a hadith in Sahih Muslim (118, sunnah.com: book 1, hadith 220), and a scene with a fictional character."
      }
    },
    {
      id: "as-r7",
      summit: true,
      minutes: 4,
      ages: "18+",
      title: { ar: "القمة: أجود من الريح المرسلة", en: "The summit: more generous than the sent wind" },
      body: {
        ar: [
          "قال ابن عباس رضي الله عنهما: «كَانَ رَسُولُ اللَّهِ» صلى الله عليه وآله وسلم «أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدُ مَا يَكُونُ فِي رَمَضَانَ حِينَ يَلْقَاهُ جِبْرِيلُ، وَكَانَ يَلْقَاهُ فِي كُلِّ لَيْلَةٍ مِنْ رَمَضَانَ فَيُدَارِسُهُ الْقُرْآنَ، فَلَرَسُولُ اللَّهِ» صلى الله عليه وآله وسلم «أَجْوَدُ بِالْخَيْرِ مِنَ الرِّيحِ الْمُرْسَلَةِ» (البخاري 6).",
          "الريح المرسلة لا تنتظر من يطلبها، ولا تختار أرضًا دون أرض، وتصل إلى البعيد قبل القريب. وهذه صورة المبادرة في أعلى درجاتها: خير يسبق السؤال، ويعم الناس.",
          "وفي الخبر سرّ هذا الجود: كان أجود ما يكون حين يدارسه جبريل القرآن. فكلما قرب القلب من كلام الله اتسعت اليد بالعطاء. والسبق إلى الخير ثمرة قرب، قبل أن يكون جهدًا.",
          "سؤال للتأمل: ما الخير الذي تعطيه إذا طُلب منك فقط؟ وكيف يكون لو سبقت به الطلب؟",
          "في ليلة من رمضان أنهت هدى وردها من القرآن، وتذكّرت زميلة في العمل قالت عرضًا إن إيجار بيتها تأخر. لم تطلب الزميلة شيئًا، ولم تكن صديقة قريبة. وفي الصباح أرسلت إليها هدى المبلغ مع رسالة من سطر واحد: «قرض بلا موعد، تردّينه حين يتيسر، ولا يعلم به أحد»."
        ],
        ar_f: [
          "قال ابن عباس رضي الله عنهما: «كَانَ رَسُولُ اللَّهِ» صلى الله عليه وآله وسلم «أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدُ مَا يَكُونُ فِي رَمَضَانَ حِينَ يَلْقَاهُ جِبْرِيلُ، وَكَانَ يَلْقَاهُ فِي كُلِّ لَيْلَةٍ مِنْ رَمَضَانَ فَيُدَارِسُهُ الْقُرْآنَ، فَلَرَسُولُ اللَّهِ» صلى الله عليه وآله وسلم «أَجْوَدُ بِالْخَيْرِ مِنَ الرِّيحِ الْمُرْسَلَةِ» (البخاري 6).",
          "الريح المرسلة لا تنتظر من يطلبها، ولا تختار أرضًا دون أرض، وتصل إلى البعيد قبل القريب. وهذه صورة المبادرة في أعلى درجاتها: خير يسبق السؤال، ويعم الناس.",
          "وفي الخبر سرّ هذا الجود: كان أجود ما يكون حين يدارسه جبريل القرآن. فكلما قرب القلب من كلام الله اتسعت اليد بالعطاء. والسبق إلى الخير ثمرة قرب، قبل أن يكون جهدًا.",
          "سؤال للتأمل: ما الخير الذي تعطينه إذا طُلب منك فقط؟ وكيف يكون لو سبقتِ به الطلب؟",
          "في ليلة من رمضان أنهت هدى وردها من القرآن، وتذكّرت زميلة في العمل قالت عرضًا إن إيجار بيتها تأخر. لم تطلب الزميلة شيئًا، ولم تكن صديقة قريبة. وفي الصباح أرسلت إليها هدى المبلغ مع رسالة من سطر واحد: «قرض بلا موعد، تردّينه حين يتيسر، ولا يعلم به أحد»."
        ],
        en: [
          "Ibn Abbas, may Allah be pleased with them both, said: «The Messenger of Allah, peace and blessings be upon him and his family, was the most generous of people, and he was most generous in Ramadan when Jibril met him. Jibril met him every night of Ramadan and studied the Quran with him. The Messenger of Allah was more generous in good than the sent wind» (Bukhari 6).",
          "The sent wind does not wait to be asked, does not choose one land over another, and reaches the far before the near. This is initiative at its highest: good that comes before the request, and reaches everyone.",
          "The report also holds the secret of this generosity: he was most generous when Jibril studied the Quran with him. The nearer the heart comes to Allah's words, the wider the hand opens. Racing to good is the fruit of nearness before it is effort.",
          "A question to reflect on: what good do you give only when asked? What would it be like if you gave it before the asking?",
          "One night in Ramadan Huda finished her portion of the Quran and remembered a colleague who had mentioned in passing that her rent was overdue. The colleague had asked for nothing, and they were not close friends. In the morning Huda sent her the money with a one-line message: «A loan with no date. Repay it when things ease, and no one will know.»"
        ]
      },
      quote: {
        ar: "«أَجْوَدُ بِالْخَيْرِ مِنَ الرِّيحِ الْمُرْسَلَةِ»",
        en: "Meaning: More generous in good than the sent wind.",
        ref: "صحيح البخاري 6، عن ابن عباس",
        checked: "hadith-api (fawazahmed0)",
        verify: true
      },
      source: { ar: "حديث في صحيح البخاري، ومشهد بشخصية خيالية.", en: "A hadith in Sahih al-Bukhari, and a scene with a fictional character." }
    },
    {
      id: "as-r8",
      companions: true,
      minutes: 5,
      ages: "18+",
      title: { ar: "أبو بكر وعمر: «لاَ أُسَابِقُكَ إِلَى شَىْءٍ أَبَدًا»", en: "Abu Bakr and Umar: «I will never race you to anything»" },
      body: {
        ar: [
          "روى عمر بن الخطاب رضي الله عنه أن النبي صلى الله عليه وآله وسلم أمرهم يومًا أن يتصدقوا، ووافق ذلك مالًا عنده، فقال في نفسه: «الْيَوْمَ أَسْبِقُ أَبَا بَكْرٍ إِنْ سَبَقْتُهُ يَوْمًا». فجاء بنصف ماله.",
          "فسأله النبي صلى الله عليه وآله وسلم: «مَا أَبْقَيْتَ لأَهْلِكَ؟». قال: مثله. وأتى أبو بكر رضي الله عنه بكل ما عنده، فسأله: «مَا أَبْقَيْتَ لأَهْلِكَ؟». قال: «أَبْقَيْتُ لَهُمُ اللَّهَ وَرَسُولَهُ». فقال عمر: «لاَ أُسَابِقُكَ إِلَى شَىْءٍ أَبَدًا» (سنن أبي داود 1678).",
          "في هذا المشهد سباق حقيقي بين اثنين من خير الناس، ولا حسد فيه. أراد عمر أن يسبق، وهذا من التنافس المحمود. ثم رأى من سبقه، فأقرّ له بالفضل صراحة، ولم يجد في نفسه عليه شيئًا.",
          "وفي سؤال النبي صلى الله عليه وآله وسلم «ما أبقيت لأهلك؟» أدب لكل سابق: الأهل حق لا يُنسى في السباق. وقد قبل من أبي بكر ماله كله لما عرف من يقينه، وقال لكعب بن مالك حين أراد أن يتصدق بماله كله: «أَمْسِكْ عَلَيْكَ بَعْضَ مَالِكَ فَهُوَ خَيْرٌ لَكَ» (البخاري 4418). فلكل سابق مقامه، والعبرة بصدق القلب لا بمقدار ما يُعطى.",
          "سؤال للتأمل: من تسابقه في الخير؟ وهل تفرح إذا سبقك كما فرح عمر بفضل أبي بكر؟",
          "عُلّقت في المسجد ورقة لمن يتكفّل بإفطار الصائمين في رمضان. كتب طارق اسمه أمام خمسة أيام، ثم رأى أن جاره بلالًا، وهو أقل منه مالًا، كتب اسمه أمام عشرة. أحسّ بوخزة صغيرة، ووقف والقلم في يده. ثم ذهب إليه بعد الصلاة، وسلّم عليه، وقال: «سبقتني يا بلال، فاجعلني معك في أيامك العشرة»."
        ],
        ar_f: [
          "روى عمر بن الخطاب رضي الله عنه أن النبي صلى الله عليه وآله وسلم أمرهم يومًا أن يتصدقوا، ووافق ذلك مالًا عنده، فقال في نفسه: «الْيَوْمَ أَسْبِقُ أَبَا بَكْرٍ إِنْ سَبَقْتُهُ يَوْمًا». فجاء بنصف ماله.",
          "فسأله النبي صلى الله عليه وآله وسلم: «مَا أَبْقَيْتَ لأَهْلِكَ؟». قال: مثله. وأتى أبو بكر رضي الله عنه بكل ما عنده، فسأله: «مَا أَبْقَيْتَ لأَهْلِكَ؟». قال: «أَبْقَيْتُ لَهُمُ اللَّهَ وَرَسُولَهُ». فقال عمر: «لاَ أُسَابِقُكَ إِلَى شَىْءٍ أَبَدًا» (سنن أبي داود 1678).",
          "في هذا المشهد سباق حقيقي بين اثنين من خير الناس، ولا حسد فيه. أراد عمر أن يسبق، وهذا من التنافس المحمود. ثم رأى من سبقه، فأقرّ له بالفضل صراحة، ولم يجد في نفسه عليه شيئًا.",
          "وفي سؤال النبي صلى الله عليه وآله وسلم «ما أبقيت لأهلك؟» أدب لكل سابق: الأهل حق لا يُنسى في السباق. وقد قبل من أبي بكر ماله كله لما عرف من يقينه، وقال لكعب بن مالك حين أراد أن يتصدق بماله كله: «أَمْسِكْ عَلَيْكَ بَعْضَ مَالِكَ فَهُوَ خَيْرٌ لَكَ» (البخاري 4418). فلكل سابق مقامه، والعبرة بصدق القلب لا بمقدار ما يُعطى.",
          "سؤال للتأمل: من تسابقينها في الخير؟ وهل تفرحين إذا سبقتك كما فرح عمر بفضل أبي بكر؟",
          "عُلّقت في المسجد ورقة لمن يتكفّل بإفطار الصائمين في رمضان. كتب طارق اسمه أمام خمسة أيام، ثم رأى أن جاره بلالًا، وهو أقل منه مالًا، كتب اسمه أمام عشرة. أحسّ بوخزة صغيرة، ووقف والقلم في يده. ثم ذهب إليه بعد الصلاة، وسلّم عليه، وقال: «سبقتني يا بلال، فاجعلني معك في أيامك العشرة»."
        ],
        en: [
          "Umar ibn al-Khattab, may Allah be pleased with him, reported that the Prophet, peace and blessings be upon him and his family, told them one day to give charity, and it happened that Umar had wealth at the time. He said to himself: «Today I will outrun Abu Bakr, if ever I outrun him.» He brought half of his wealth.",
          "The Prophet asked him: «What have you left for your family?» He said: the same amount. Abu Bakr, may Allah be pleased with him, brought everything he had, and the Prophet asked him: «What have you left for your family?» He said: «I have left them Allah and His Messenger.» Umar said: «I will never race you to anything» (Sunan Abi Dawud 1678).",
          "This scene is a true race between two of the best of people, with no envy in it. Umar wanted to get ahead, which is praiseworthy competition. Then he saw who had beaten him, acknowledged his merit openly, and held nothing against him in his heart.",
          "In the Prophet's question, «What have you left for your family?», there is a courtesy for everyone who races: family is a right not forgotten in the race. He accepted all of Abu Bakr's wealth, knowing his certainty, while to Ka'b ibn Malik, who wished to give away all he had, he said: «Keep some of your wealth; that is better for you» (Bukhari 4418). Each who races has their own station, and what counts is the sincerity of the heart, not the size of the gift.",
          "A question to reflect on: who do you race in good? And are you glad when they get ahead of you, as Umar was glad of Abu Bakr's merit?",
          "A sheet went up in the mosque for those who would sponsor the fast-breaking meal in Ramadan. Tariq wrote his name beside five days, then saw that his neighbour Bilal, who had less money than he did, had written his beside ten. He felt a small sting, and stood there with the pen in his hand. Then after the prayer he went over, greeted him, and said: «You got there before me, Bilal. Let me join you in your ten days.»"
        ]
      },
      quote: {
        ar: "«أَبْقَيْتُ لَهُمُ اللَّهَ وَرَسُولَهُ»",
        en: "Meaning: I have left them Allah and His Messenger.",
        ref: "سنن أبي داود 1678، عن عمر بن الخطاب",
        checked: "hadith-api (fawazahmed0)",
        verify: true
      },
      source: {
        ar: "حديث في سنن أبي داود (1678)، مع جملة من حديث كعب بن مالك في صحيح البخاري (4418)، ومشهد بشخصية خيالية.",
        en: "A hadith in Sunan Abi Dawud (1678), with a phrase from the hadith of Ka'b ibn Malik in Sahih al-Bukhari (4418), and a scene with a fictional character."
      }
    }
  ],
  quiz: [
    {
      id: "as-q1",
      readingId: "as-r1",
      type: "comprehension",
      correct: 1,
      q: { ar: "ماذا فعل كريم بالوصلة التي رآها تقطر خلف الخزانة؟", en: "What did Karim do about the joint he saw dripping behind the cupboard?" },
      options: [
        { ar: "أخبر صاحبة البيت، ونصحها بعامل آخر يصلحها", en: "Told the owner, and advised her to call another plumber" },
        { ar: "أصلحها، ولم يزد شيئًا على الأجرة", en: "Fixed it, and added nothing to the fee" },
        { ar: "أصلحها، وزاد أجرة نصف ساعة", en: "Fixed it, and charged for the extra half hour" }
      ],
      why: {
        ar: "هذا هو الإحسان: أن تتقن الجزء الذي لن يراه أحد، لأن الله يراه.",
        en: "This is ihsan: doing well the part no one will ever see, because Allah sees it."
      }
    },
    {
      id: "as-q2",
      readingId: "as-r1",
      type: "situation",
      correct: 1,
      q: {
        ar: "أنهيت تقريرًا قبل نهاية الدوام، والمدير يقرأ عادة صفحته الأولى وحدها. ما الأقرب إلى الإحسان الذي في المقالة؟",
        ar_f: "أنهيتِ تقريرًا قبل نهاية الدوام، والمدير يقرأ عادة صفحته الأولى وحدها. ما الأقرب إلى الإحسان الذي في المقالة؟",
        en: "You have finished a report before the end of the day, and your manager usually reads only the first page. What is closest to the ihsan in the article?"
      },
      options: [
        { ar: "أسلّمه الآن، فالصفحة الأولى متقنة وهي ما يُقرأ", en: "Hand it in now; the first page is polished and that's what gets read" },
        { ar: "أراجع صفحاته الأخيرة ثم أسلّمه", en: "Go over the last pages, then hand it in" },
        { ar: "أسلّمه، وأنبّه إلى أن آخره لم يُراجع", en: "Hand it in, noting that the end hasn't been checked" }
      ],
      why: {
        ar: "الإحسان عشر دقائق زائدة في الجزء الذي لا يفحصه أحد: «فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ».",
        en: "Ihsan is ten extra minutes on the part no one checks: «if you do not see Him, He sees you»."
      }
    },
    {
      id: "as-q3",
      readingId: "as-r2",
      type: "comprehension",
      correct: 2,
      q: {
        ar: "ماذا فعل النبي صلى الله عليه وآله وسلم حين عرف بموت من كان يقمّ المسجد؟",
        en: "What did the Prophet do when he learned that the one who swept the mosque had died?"
      },
      options: [
        { ar: "سأل عن أهله، وأمر لهم بصدقة", en: "Asked after his family and ordered charity for them" },
        { ar: "دعا له بعد الصلاة، وأمر بتعيين غيره", en: "Prayed for him after the prayer and had someone else appointed" },
        { ar: "قال: هلّا أخبرتموني، ثم صلّى على قبره", en: "Said: why did you not tell me? Then prayed at his grave" }
      ],
      why: { ar: "خدمة المسجد عند الله أكبر مما تبدو عند الناس.", en: "Serving the mosque is greater with Allah than it looks to people." }
    },
    {
      id: "as-q4",
      readingId: "as-r3",
      type: "comprehension",
      correct: 0,
      q: {
        ar: "ما الذي يعلّمه حديث «مَنْ دَلَّ عَلَى خَيْرٍ» لمن لا يملك ما يعطيه؟",
        en: "What does the hadith «whoever guides to good» teach someone with nothing to give?"
      },
      options: [
        { ar: "أن يدلّ على من يملك، فله مثل أجر الفاعل", en: "To guide him to someone who has it, and earn the doer's reward" },
        { ar: "أن يعتذر بلطف، فلا يُكلَّف ما لا يملك", en: "To excuse himself kindly, since no one must give what they lack" },
        { ar: "أن يقترض ليعطي، فالسبق لا يقبل العذر", en: "To borrow so as to give, since racing to good takes no excuse" }
      ],
      why: { ar: "الدلالة على الخير خير، وأجرها مثل أجر فاعله.", en: "Guiding to good is itself good, with a reward like the doer's." }
    },
    {
      id: "as-q5",
      readingId: "as-r3",
      type: "comprehension",
      correct: 1,
      q: { ar: "ماذا فعل فؤاد حين اشتد عليه ألم ركبته في الشتاء الثاني؟", en: "What did Fuad do when his knee got worse in the second winter?" },
      options: [
        { ar: "أوقف الدرس شهرًا حتى يُشفى", en: "Stopped the class for a month until he recovered" },
        { ar: "ترك الشرح للشاب، وجلس في الصف الأخير يسمع", en: "Left the teaching to the young man and sat in the back row listening" },
        { ar: "نقل الدرس إلى بيته ليبقى هو الذي يشرح", en: "Moved the class to his home so he could keep teaching it" }
      ],
      why: {
        ar: "من يسبق إلى الخير يفرح بمن يحمله بعده، ويرضى أن يجلس في الصف الأخير.",
        en: "One who races to good is glad of those who carry it on after him, and content to sit in the back row."
      }
    },
    {
      id: "as-q6",
      readingId: "as-r4",
      type: "comprehension",
      correct: 1,
      q: {
        ar: "ما الذي قال المطعمون في سورة الإنسان إنهم لا يريدونه ممن أطعموهم؟",
        en: "In Surat al-Insan, what did those who gave food say they wanted from the people they fed?"
      },
      options: [
        { ar: "الجزاء وحده، أما الشكر فيقبلونه", en: "No reward, though they would accept thanks" },
        { ar: "لا جزاء ولا شكر", en: "Neither reward nor thanks" },
        { ar: "لا جزاء، ويكفيهم الدعاء", en: "No reward; a prayer for them would be enough" }
      ],
      why: {
        ar: "﴿لَا نُرِيدُ مِنْكُمْ جَزَاءً وَلَا شُكُورًا﴾: أعلى الإخفاء أن يخلو القلب حتى من انتظار الكلمة الطيبة.",
        en: "Neither reward nor thanks: the highest hiding is a heart empty even of waiting for a kind word."
      }
    },
    {
      id: "as-q7",
      readingId: "as-r5",
      type: "comprehension",
      correct: 1,
      q: {
        ar: "ماذا أعطى النبي صلى الله عليه وآله وسلم عليًّا وفاطمة عليهما السلام حين جاءت تسأله خادمًا؟",
        en: "What did the Prophet, peace and blessings be upon him and his family, give Ali and Fatima, peace be upon them, when she came asking for a servant?"
      },
      options: [
        { ar: "دعاءً يُقال عند الطحن ليخف التعب", en: "A supplication to say while grinding, to ease the tiredness" },
        { ar: "ذكرًا عند النوم، خيرًا لهما من خادم", en: "A remembrance at bedtime, better for them than a servant" },
        { ar: "أسيرًا يعينهما بعد أن يُعلّماه", en: "A captive to help them once they had taught him" }
      ],
      why: {
        ar: "أعطاهما ما يقوّي القلب على التعب، فداوم عليه علي عليه السلام حتى ليلة صفين.",
        en: "He gave them what strengthens the heart against tiredness, and Ali, peace be upon him, kept it up even on the night of Siffin."
      }
    },
    {
      id: "as-q8",
      readingId: "as-r6",
      type: "comprehension",
      correct: 1,
      q: {
        ar: "ما الكلمتان في آية فاطر اللتان تحرسان السابق من العُجب؟",
        en: "Which two phrases in the verse of Fatir guard the one who races ahead from self-admiration?"
      },
      options: [
        { ar: "«ظَالِمٌ لِنَفْسِهِ» و«مُقْتَصِدٌ»", en: "«wrongs himself» and «moderate»" },
        { ar: "«بِإِذْنِ اللَّهِ» و«ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ»", en: "«by Allah's leave» and «that is the great favour»" },
        { ar: "«فَاسْتَبِقُوا» و«الْخَيْرَاتِ»", en: "«race» and «good things»" }
      ],
      why: { ar: "السبق إذن من الله وفضل منه، لا ملك للسابق يفخر به.", en: "The lead is Allah's leave and favour, not a possession to boast of." }
    },
    {
      id: "as-q9",
      readingId: "as-r6",
      type: "situation",
      correct: 2,
      q: {
        ar: "أثنى عليك الناس كثيرًا لأنك تنظّم مشروع خير في الحي، وبدأت تحب هذا الثناء. ما الأقرب إلى ما في المقالة؟",
        ar_f: "أثنى عليكِ الناس كثيرًا لأنكِ تنظّمين مشروع خير في الحي، وبدأتِ تحبين هذا الثناء. ما الأقرب إلى ما في المقالة؟",
        en: "People praise you a lot for organising a charitable project in the neighbourhood, and you have started to enjoy the praise. What is closest to the article?"
      },
      options: [
        { ar: "أترك المشروع حتى لا يدخلني العجب", en: "Give up the project so that pride doesn't get in" },
        { ar: "أكثر من الحديث عنه ليشارك الناس", en: "Talk about it more so that people join in" },
        { ar: "أحمد الله، وأُبرز من يعمل معي", en: "Praise Allah, and bring forward those who work with me" }
      ],
      why: {
        ar: "يبقى العمل، ويُردّ الفضل إلى صاحبه: «بِإِذْنِ اللَّهِ». وهكذا تقول المقالة: لا تحدّث به إلا لحاجة.",
        en: "The work goes on and the credit goes back to its Owner: «by Allah's leave». As the article says: speak of it only when there is a need."
      }
    },
    {
      id: "as-q10",
      readingId: "as-r7",
      type: "comprehension",
      correct: 0,
      q: { ar: "متى كان النبي صلى الله عليه وآله وسلم أجود ما يكون؟", en: "When was the Prophet most generous?" },
      options: [
        { ar: "في رمضان، حين يلقاه جبريل فيدارسه القرآن", en: "In Ramadan, when Jibril met him to study the Quran" },
        { ar: "في أيام الغنائم، حين يكثر المال", en: "In times of spoils, when wealth was plentiful" },
        { ar: "في السفر، حين تكثر حاجة الناس", en: "On journeys, when people's needs were many" }
      ],
      why: { ar: "كلما قرب القلب من كلام الله اتسعت اليد بالعطاء.", en: "The nearer the heart comes to Allah's words, the wider the hand opens." }
    },
    {
      id: "as-q11",
      readingId: "as-r8",
      type: "comprehension",
      correct: 1,
      q: { ar: "ماذا قال عمر رضي الله عنه حين رأى ما جاء به أبو بكر رضي الله عنه؟", en: "What did Umar say when he saw what Abu Bakr had brought?" },
      options: [
        { ar: "سأسبقك في المرة القادمة", en: "I'll beat you next time" },
        { ar: "«لاَ أُسَابِقُكَ إِلَى شَىْءٍ أَبَدًا»", en: "«I will never race you to anything»" },
        { ar: "لقد أسرفت يا أبا بكر", en: "You have gone too far, Abu Bakr" }
      ],
      why: {
        ar: "سباق بلا حسد: أراد أن يسبق، ثم أقرّ لمن سبقه بالفضل.",
        en: "A race without envy: he wanted to get ahead, then acknowledged the merit of the one who did."
      }
    },
    {
      id: "as-q12",
      readingId: "as-r8",
      type: "comprehension",
      correct: 2,
      q: {
        ar: "ما الأدب الذي في سؤال النبي صلى الله عليه وآله وسلم: «ما أبقيت لأهلك؟»",
        en: "What courtesy lies in the Prophet's question «What have you left for your family?»"
      },
      options: [
        { ar: "أن الصدقة تكون بالقليل دائمًا", en: "That charity should always be small" },
        { ar: "أن الأهل يُقدَّمون على كل خير", en: "That family comes before every other good" },
        { ar: "أن للأهل حقًّا، ولكل سابق مقامه", en: "That family has a right, and each who races has his own station" }
      ],
      why: {
        ar: "قبل من أبي بكر ماله كله، وقال لكعب: «أَمْسِكْ عَلَيْكَ بَعْضَ مَالِكَ». العبرة بصدق القلب.",
        en: "He accepted all of Abu Bakr's wealth, and told Ka'b: «keep some of your wealth». What counts is the sincerity of the heart."
      }
    },
    {
      id: "as-q13",
      readingId: "as-r4",
      type: "comprehension",
      correct: 2,
      q: { ar: "ماذا فعل حامد بالمنشور الذي كتبه في المساء؟", en: "What did Hamid do with the post he wrote that evening?" },
      options: [
        { ar: "نشره دون أن يذكر نفسه فيه", en: "Posted it without mentioning himself" },
        { ar: "أرسله إلى صديق واحد يثق به", en: "Sent it to one friend he trusted" },
        { ar: "مسحه، وعاد في الشهر التالي بالظرف", en: "Deleted it, and came back the next month with the envelope" }
      ],
      why: {
        ar: "ما يُكتب للناس عن عمل خفي يُخرجه من الخفاء، ولو غاب الاسم: «مَنْ سَمَّعَ سَمَّعَ اللَّهُ بِهِ».",
        en: "Writing for people about a hidden deed brings it out of hiding, even without a name: «whoever seeks to be heard of, Allah will make him heard of»."
      }
    },
    {
      id: "as-q14",
      readingId: "as-r5",
      type: "comprehension",
      correct: 1,
      q: {
        ar: "ماذا فعلت سلمى حين رنّ المنبّه بعد ليلتها عند سرير ابنها؟",
        en: "What did Salma do when the alarm rang after her night beside her son's bed?"
      },
      options: [
        { ar: "أطفأته، ونوت أن تقوم في الليلة التالية", en: "Switched it off, intending to get up the next night" },
        { ar: "قامت، وصلّت ركعتين قرب السرير", en: "Got up and prayed two rak'as beside the bed" },
        { ar: "قامت، وقرأت جزءًا كاملًا كأول ليلة", en: "Got up and read a whole juz', as on the first night" }
      ],
      why: {
        ar: "القليل الذي تقدر عليه في أتعب أيامك هو الذي يبقى: «أَحَبَّ الأَعْمَالِ أَدْوَمُهَا إِلَى اللَّهِ، وَإِنْ قَلَّ».",
        en: "The little you can manage on your most tiring day is what lasts: «the deeds most loved by Allah are the most constant, even if few»."
      }
    }
  ],
  tasks: [
    { id: "as-t1", ar: "حاجة رأيتها فقضيتها دون أن يطلبها أحد.", en: "Met a need I saw without anyone asking." },
    { id: "as-t2", ar: "جزء من عملي لا يراجعه أحد، أتقنته.", en: "A part of my work that no one reviews, done well." },
    {
      id: "as-t3",
      ar: "صدقة خفية لا يعرفها أحد، ولم أحدّث بها ولم أنشرها.",
      en: "A hidden charity no one knows of, which I neither mentioned nor posted."
    },
    { id: "as-t4", ar: "خير علّمته لشخص يحتاج إليه.", en: "Taught something good to someone who needed it." },
    {
      id: "as-t5",
      ar: "ركعتان في الليل، أو ورد صغير، داومت عليه سبعة أيام.",
      en: "Two rak'as at night, or a small daily portion, kept up for seven days."
    }
  ],
  selfcheck: [
    {
      id: "as-s1",
      q: { ar: "هل أبادر بالخير قبل أن يُطلب مني، في بيتي قبل غيره؟", en: "Do I start the good before I'm asked, at home before anywhere else?" }
    },
    { id: "as-s2", q: { ar: "هل أتقن الجزء من عملي الذي لا يفحصه أحد؟", en: "Do I do well the part of my work that no one inspects?" } },
    {
      id: "as-s3",
      q: {
        ar: "إذا عملت خيرًا، هل أشتاق إلى أن يعرفه الناس، أو أفكر في نشره؟",
        en: "When I do good, do I long for people to know of it, or think of posting it?"
      }
    },
    {
      id: "as-s4",
      q: { ar: "هل لي عمل صغير ثابت بقي بعد أن ذهبت الحماسة الأولى؟", en: "Do I have a small, steady deed that stayed after the first fervour faded?" }
    },
    {
      id: "as-s5",
      q: {
        ar: "هل أفرح إذا سبقني غيري إلى الخير، وأدعو لمن أراه دوني بدل أن أنظر إليه من فوق؟",
        en: "Do I rejoice when someone gets to the good before me, and pray for those I see behind me instead of looking down on them?"
      }
    }
  ]
};

/* مهام يومية للمراحل الأربع / Daily missions for the four stages */
window.AKHLAQ_CONTENT_ADULT.daily.push(
  { id: "ad05", stage: "pig", ar: "أؤجل كل شراء غير ضروري اليوم إلى الغد.", en: "Put off every non-essential purchase today until tomorrow." },
  { id: "ad06", stage: "pig", ar: "أقوم عن كل وجبة اليوم وفيّ بقية من شهية.", en: "Get up from every meal today with some appetite left." },
  { id: "ad07", stage: "pig", ar: "أذكر جهد زميل أو فرد من أهلي باسمه أمام غيره.", en: "Name a colleague's or family member's effort in front of others." },
  { id: "ad08", stage: "pig", ar: "أقوم بعمل في البيت يقوم به غيري عادة.", en: "Do a household job someone else usually does." },
  { id: "ad09", stage: "monkey", ar: "أتم عملًا واحدًا قبل أن أفتح البريد والرسائل.", en: "Finish one task before opening email and messages." },
  { id: "ad10", stage: "monkey", ar: "أدع كل من يكلمني اليوم ينهي كلامه قبل أن أرد.", en: "Let everyone who speaks to me today finish before I reply." },
  { id: "ad11", stage: "monkey", ar: "لا أعيد توجيه أي رسالة اليوم قبل أن أتحقق منها.", en: "Forward no message today before checking it." },
  { id: "ad12", stage: "monkey", ar: "إذا غضبت اليوم أسكت، وأقول: أعوذ بالله من الشيطان الرجيم.", en: "If I get angry today, fall silent and say: I seek refuge in Allah from Satan the accursed." },
  { id: "ad13", stage: "human", ar: "أقرأ كل ما أكتبه اليوم مرتين قبل أن أرسله.", en: "Read everything I write today twice before sending it." },
  { id: "ad14", stage: "human", ar: "أؤدي اليوم واجبًا أؤجله منذ أيام.", en: "Do a duty today that I have been putting off for days." },
  { id: "ad15", stage: "human", ar: "أصلي الصلوات الخمس اليوم في أوقاتها.", en: "Pray all five prayers on time today." },
  { id: "ad16", stage: "human", ar: "أعتذر اليوم عن خطأ أعرفه، دون «لكن».", en: "Apologise today for a mistake I know of, without «but»." },
  { id: "ad17", stage: "sabiq", ar: "أقضي حاجة أراها اليوم دون أن يطلبها مني أحد.", en: "Meet a need I see today without being asked." },
  { id: "ad18", stage: "sabiq", ar: "أسأل عن جار أو قريب لم أسمع عنه منذ مدة.", en: "Ask after a neighbour or relative I haven't heard from in a while." },
  { id: "ad19", stage: "sabiq", ar: "صدقة خفية اليوم، ولو قليلة.", en: "A hidden charity today, however small." },
  { id: "ad20", stage: "sabiq", ar: "أعلّم أحدًا اليوم شيئًا نافعًا أعرفه.", en: "Teach someone something useful I know today." }
);

/* ───────────── قصص تختار فيها للكبار / Adult choice stories (22 Nov 2026) ─────────────
 * Same shape as content.js choices; ids start with "ach-" so the record never mixes with the children's. Fictional characters. */
window.AKHLAQ_CONTENT_ADULT.choices = [
  {
    id: "ach-zombie-1", stage: "zombie", trait: 0, age: "18+",
    title: { ar: "مقطع واحد آخر", en: "Just one more video" },
    intro: {
      ar: ["الساعة الحادية عشرة والنصف ليلًا. أنهى سامر يومه متعبًا، وأطفأ النور، وأمسك الهاتف «دقيقة واحدة» قبل النوم.", "مقطع يجرّ مقطعًا. نظر إلى الساعة فإذا هي الثانية عشرة وأربعون دقيقة، والمنبّه مضبوط على الفجر.", "ويظهر على الشاشة مقطع جديد عن موضوع يحبه."],
      en: ["It is half past eleven at night. Samer has finished a tiring day, switched off the light, and picked up his phone for “one minute” before sleep.", "One clip pulls in the next. He checks the time: twenty to one, and the alarm is set for Fajr.", "A new clip appears, on a subject he loves."]
    },
    q: { ar: "لو كنتَ مكان سامر، ماذا تفعل؟", ar_f: "لو كنتِ مكان سامر، ماذا تفعلين؟", en: "If you were Samer, what would you do?" },
    opts: [
      { t: { ar: "أشاهد هذا المقطع فقط، ثم أنام.", en: "Watch just this one, then sleep." }, weak: true,
        out: { ar: "صار المقطع خمسة. نام سامر بعد الواحدة والنصف، ورنّ المنبّه فأطفأه دون أن يستيقظ حقًا، وصلّى الفجر بعد الشروق متثاقلًا، ومضى يومه بعين نصف مفتوحة.", en: "One became five. Samer fell asleep after half past one, silenced the alarm without really waking, prayed Fajr after sunrise, heavy-headed, and went through the day half awake." },
        why: { ar: "التطبيق لا يعرف كلمة «فقط»، فهو مصمَّم ليجعل الواحد عشرة.", en: "The app doesn't know the word “just”. It is built to turn one into ten." } },
      { t: { ar: "أضع الهاتف خارج الغرفة، وأقرأ أذكار النوم.", en: "Put the phone outside the room and say the bedtime remembrances." },
        out: { ar: "قام سامر فوضع الهاتف على الشاحن في الصالة. كانت الغرفة أهدأ مما توقّع، وبدأ أذكاره فنام قبل أن يتمّها، واستيقظ للفجر قبل المنبّه.", en: "Samer got up and left the phone charging in the living room. The room was quieter than he expected; he began his remembrances, fell asleep before finishing them, and woke for Fajr before the alarm." },
        why: { ar: "المسافة بين اليد والهاتف أقوى من أي عزيمة في منتصف الليل.", en: "Distance between hand and phone is stronger than any midnight resolve." } },
      { t: { ar: "أضبط مؤقتًا لعشر دقائق، وأغلق التطبيق حين يرن.", en: "Set a ten-minute timer and close the app when it rings." },
        out: { ar: "رنّ المؤقت، فبقي إبهام سامر فوق الشاشة لحظة، ثم أغلق التطبيق. نام قبل الواحدة، وفي الليلة التالية وضع الهاتف على الشاحن في الصالة قبل أن يطفئ النور.", en: "The timer rang. Samer's thumb hovered over the screen for a moment, then he closed the app. He slept before one, and the next night he left the phone charging in the living room before switching off the light." },
        why: { ar: "حدّ صغير تضعه بنفسك خير من حدّ لا تضعه أبدًا.", en: "A small limit you set yourself beats no limit at all." } }
    ],
    end: { ar: "تأتي الغفلة مقطعًا بعد مقطع حتى يضيع الليل والفجر، ويحمي اليومَ كله قرارٌ واحد قبل النوم.", en: "Heedlessness comes clip by clip until the night and the dawn are gone; one decision before sleep protects the whole day." }
  },
  {
    id: "ach-pig-1", stage: "pig", trait: 0, age: "18+",
    title: { ar: "اجتماع المكافأة", en: "The bonus meeting" },
    intro: {
      ar: ["في آخر السنة دعا المدير زيادًا إلى مكتبه، وقال: «مكافأة الفريق هذا العام مبلغ واحد. أنت قائد الفريق، فوزّعه عليكم أنتم الأربعة، وأرسل لي الأرقام غدًا».", "في السيارة حسب زياد القسط المتأخر على سيارته، فوجد أن نصيبًا كبيرًا من المكافأة يسدّه. ثم تذكّر أن نسرين عملت عطلات الأسبوع كلها في الشهر الأخير، وأن فارسًا الجديد سهر معها ليلتين.", "الجدول لن يراه أحد غير المدير."],
      en: ["At the end of the year the manager called Ziad into his office: “This year the team's bonus is one sum. You lead the team, so divide it among the four of you and send me the figures tomorrow.”", "In the car Ziad worked out his overdue car instalment and found that a large share of the bonus would cover it. Then he remembered that Nisreen had worked every weekend of the last month, and that Fares, the new one, had stayed up two nights with her.", "No one but the manager will see the sheet."]
    },
    q: { ar: "لو كنتَ مكان زياد، ماذا تفعل؟", ar_f: "لو كنتِ مكان زياد، ماذا تفعلين؟", en: "If you were Ziad, what would you do?" },
    opts: [
      { t: { ar: "أجعل لنفسي النصيب الأكبر، فأنا أحمل مسؤولية الفريق كله.", en: "Give myself the largest share. I carry the whole team's responsibility." }, weak: true,
        out: { ar: "أرسل زياد الجدول، فوافق عليه المدير دون تعليق. وفي عشاء الفريق شكرته نسرين بحرارة على المكافأة، فابتسم، ونادى النادل يطلب الحساب قبل أن تكمل كلامها.", en: "Ziad sent the sheet and the manager approved it without comment. At the team dinner Nisreen thanked him warmly for the bonus; he smiled, and called the waiter for the bill before she could finish." },
        why: { ar: "النفس تعرف ما أخذت، ولو لم يعرفه أحد غيرها.", en: "The self knows what it took, even when no one else does." } },
      { t: { ar: "أقسم المبلغ بالتساوي، فهذا أبعد عن الكلام.", en: "Split it equally. That leaves nothing to talk about." }, weak: true,
        out: { ar: "مرّ التوزيع بلا كلام. وبعد أسبوعين طلب زياد من نسرين أن تعمل عطلة أخرى، فاعتذرت بأدب، وكانت تلك أول مرة تعتذر فيها.", en: "The split passed without a word. Two weeks later Ziad asked Nisreen to work another weekend. She declined politely, for the first time." },
        why: { ar: "المساواة أسهل من العدل. والعدل أن يأخذ كل واحد بقدر ما بذل.", en: "Equality is easier than fairness. Fairness gives each person the measure of what they gave." } },
      { t: { ar: "أكتب المعيار قبل الأسماء: الساعات والمهام، وأطبّقه على نفسي أولًا.", en: "Write the criteria before the names, hours and tasks, and apply them to myself first." },
        out: { ar: "خرج نصيب زياد أصغر مما حسبه في السيارة، وخرج نصيب نسرين أكبر. أرسل الجدول وتحته المعيار في سطر واحد، وانتظر قسط السيارة شهرًا آخر. وفي الأسبوع التالي طلب منه المدير ذلك السطر ليعمل به مع الفرق الأخرى.", en: "Ziad's share came out smaller than he had worked out in the car, and Nisreen's larger. He sent the sheet with the criteria in one line beneath it, and the car instalment waited another month. The following week the manager asked him for that line, to use with the other teams." },
        why: { ar: "القسمة التي تبدأ بالمعيار قبل الأسماء تحمي القاسم من ميل نفسه.", en: "A division that starts with criteria before names protects the one dividing from his own leanings." } }
    ],
    end: { ar: "حين يكون القلم في يدك تميل القسمة إلى نفسك ميلًا خفيًّا. والتنافس في الخير أن تسبق غيرك إلى الإنصاف وأنت قادر على غيره.", ar_f: "حين يكون القلم في يدكِ تميل القسمة إلى نفسكِ ميلًا خفيًّا. والتنافس في الخير أن تسبقي غيرك إلى الإنصاف وأنتِ قادرة على غيره.", en: "When the pen is in your hand, the division leans quietly toward you. Competing in good means reaching fairness first, while you could have done otherwise." }
  },
  {
    id: "ach-monkey-1", stage: "monkey", trait: 2, age: "18+",
    title: { ar: "رسالة في مجموعة العائلة", en: "A message in the family group" },
    intro: {
      ar: ["أرسل ماجد في مجموعة العائلة صورة ابنته يوم تخرّجها. وبعد دقائق كتب ابن عمه تحتها: «أخيرًا! كنا نخاف أن تلحق بأبيها في الرسوب»، وضحك بعض الأقارب بالرموز.", "شعر ماجد بالحرارة تصعد إلى وجهه، وبدأت أصابعه تكتب ردًّا طويلًا حادًّا، فيه أمور قديمة يعرفها عن ابن عمه ولا يعرفها أكثر من في المجموعة.", "إصبعه الآن فوق زر الإرسال."],
      en: ["Majid posted a photo of his daughter on her graduation day in the family group. A few minutes later his cousin wrote beneath it: “Finally! We were afraid she'd follow her dad and fail,” and a few relatives laughed with emojis.", "Majid felt the heat rise to his face. His fingers began typing a long, sharp reply, full of old things he knew about his cousin that most of the group did not.", "His finger is now over the send button."]
    },
    q: { ar: "لو كنتَ مكان ماجد، ماذا تفعل؟", ar_f: "لو كنتِ مكان ماجد، ماذا تفعلين؟", en: "If you were Majid, what would you do?" },
    opts: [
      { t: { ar: "أرسل الرد الآن، فهو يستحق أن يسمعه.", en: "Send it now. He deserves to hear it." }, weak: true,
        out: { ar: "أرسل ماجد الرد، فجاءه رد أحدّ منه، ودخل آخرون في الخلاف. وفي المساء خرج اثنان من المجموعة، واتصلت به أمه حزينة تسأله: «لماذا أمام الجميع؟»", en: "Majid sent it. A sharper reply came back, others joined in, and by evening two relatives had left the group. His mother called, upset: “Why in front of everyone?”" },
        why: { ar: "ما يُكتب في لحظة غضب يبقى بعد أن يزول الغضب.", en: "What is written in a moment of anger outlasts the anger." } },
      { t: { ar: "أحذف ما كتبت، وأؤجل الرد إلى ما بعد الصلاة.", en: "Delete it and leave any reply until after the prayer." },
        out: { ar: "حذف ماجد الرد، وقام فتوضأ وصلّى. وبعد الصلاة بدا التعليق أصغر مما كان، فكتب: «شكرًا لكم جميعًا، فرحتنا بها كبيرة»، ولم يزد.", en: "Majid deleted it, made wudu and prayed. Afterwards the comment looked smaller than before. He wrote, “Thank you all, we're so happy for her,” and nothing more." },
        why: { ar: "التأجيل يعطي العقل فرصة ليلحق بالقلب.", en: "Waiting gives the mind a chance to catch up with the heart." } },
      { t: { ar: "أتصل به على انفراد، وأقول له إن التعليق آلمني.", en: "Call him privately and tell him the comment hurt." },
        out: { ar: "تردّد ماجد ثم اتصل، وقال بهدوء: «تعليقك في المجموعة جرحني». سكت ابن عمه، ثم قال: «لم أقصد، كان مزاحًا ثقيلًا، سامحني». وحذف التعليق بنفسه.", en: "Majid hesitated, then called. He said calmly, “Your comment in the group hurt me.” His cousin went quiet, then said, “I didn't mean it, it was a heavy joke. Forgive me,” and deleted the comment himself." },
        why: { ar: "الشجاعة في الحق أن تقول ما آلمك لصاحبه وحده.", ar_f: "الشجاعة في الحق أن تقولي ما آلمكِ لصاحبه وحده.", en: "Courage for what is right means telling the one who hurt you, and him alone." } }
    ],
    end: { ar: "السخرية تُكتب في سطر، والرد الغاضب عليها يُكتب في عشرة. والقوة في الإصبع الذي يقف فوق زر الإرسال.", en: "Mockery takes one line to write, and the angry answer to it takes ten. Strength is in the finger that stops above the send button." }
  },
  {
    id: "ach-human-1", stage: "human", trait: 2, age: "18+",
    title: { ar: "الرقم الخاطئ", en: "The wrong figure" },
    intro: {
      ar: ["أرسلت ريم تقرير الميزانية إلى إدارة الشركة صباح الأحد. وفي المساء، وهي تراجع أوراقها، رأت أنها جمعت عمودًا مرتين، فصار أحد الأرقام أكبر من حقيقته بكثير.", "الاجتماع الذي سيُعتمد فيه التقرير بعد يومين، ولم ينتبه أحد للخطأ بعد."],
      en: ["Rim sent the budget report to the company's management on Sunday morning. That evening, going over her papers, she saw she had added one column twice, making one figure far larger than it really was.", "The meeting to approve the report is in two days, and no one has noticed the error yet."]
    },
    q: { ar: "لو كنتَ مكان ريم، ماذا تفعل؟", ar_f: "لو كنتِ مكان ريم، ماذا تفعلين؟", en: "If you were Rim, what would you do?" },
    opts: [
      { t: { ar: "أسكت، فلعلّ أحدًا لا ينتبه.", en: "Say nothing. Maybe no one will notice." }, weak: true,
        out: { ar: "مرّ الاجتماع، واعتُمدت الميزانية على الرقم الخاطئ. وبعد ثلاثة أشهر ظهر العجز في الحسابات وبدأ البحث عن سببه، وريم تعرفه منذ اليوم الأول.", en: "The meeting passed and the budget was approved on the wrong figure. Three months later the gap showed up in the accounts and the search for its cause began. Rim had known it from the first day." },
        why: { ar: "الخطأ الذي يُترك يكبر، ويكبر ثقله معه.", en: "A mistake left alone grows, and so does its weight." } },
      { t: { ar: "أراسل الإدارة الليلة، فأعترف بالخطأ وأرسل النسخة المصححة.", en: "Write to management tonight, admit the error and send the corrected version." },
        out: { ar: "كتبت ريم: «وجدت خطأ في الجمع في الصفحة الثالثة، وهذه النسخة المصححة، وأعتذر». وردّ المدير في الصباح: «شكرًا على الدقة. الآن أفضل من بعد الاعتماد».", en: "Rim wrote: “I found an addition error on page three; here is the corrected version, with my apologies.” The manager replied in the morning: “Thank you for the care. Better now than after approval.”" },
        why: { ar: "الرجوع عن الخطأ سريعًا أهون من الدفاع عنه طويلًا.", en: "Turning back quickly is easier than defending a mistake for long." } },
      { t: { ar: "أصحح الملف في النظام بصمت، دون أن أخبر أحدًا.", en: "Quietly fix the file in the system without telling anyone." }, weak: true,
        out: { ar: "استبدلت ريم الملف. لكن بعض المديرين كانوا قد طبعوا النسخة الأولى، فجاؤوا إلى الاجتماع بأرقام مختلفة، وضاع نصف الوقت في معرفة أيّ النسختين الصحيحة.", en: "Rim swapped the file. But some managers had already printed the first version, came to the meeting with different numbers, and half the time went on working out which version was right." },
        why: { ar: "الإصلاح الصامت يصلح الورقة، ويترك الثقة معلقة.", en: "A silent fix mends the paper and leaves trust hanging." } }
    ],
    end: { ar: "كل من يعمل يخطئ. ويفترق الناس في الساعة التي تلي الخطأ: منهم من يرجع، ومنهم من يخفي.", en: "Everyone who works makes mistakes. People part ways in the hour after: some turn back, some hide." }
  },
  {
    id: "ach-sabiq-1", stage: "sabiq", trait: 1, age: "18+",
    title: { ar: "الجار الذي صار وحده", en: "The neighbour left alone" },
    intro: {
      ar: ["توفيت زوجة أبي صالح، جار نادية، قبل شهر. ومنذ ذلك الحين قلّ خروجه، وصارت أكياس القمامة تتجمع عند بابه، والنور في شقته مطفأ في أكثر المساء.", "مرّت نادية من أمام بابه وهي عائدة من عملها، تحمل أكياس السوق، ووقتها ضيق."],
      en: ["A month ago Abu Salih, Nadia's neighbour, lost his wife. Since then he rarely goes out, rubbish bags pile up by his door, and his flat stays dark most evenings.", "Nadia passes his door on her way home from work, carrying her shopping, short of time."]
    },
    q: { ar: "لو كنتَ مكان نادية، ماذا تفعل؟", ar_f: "لو كنتِ مكان نادية، ماذا تفعلين؟", en: "If you were Nadia, what would you do?" },
    opts: [
      { t: { ar: "أرسل له رسالة: «إن احتجت شيئًا فأخبرني».", en: "Send him a message: “If you need anything, let me know.”" }, weak: true,
        out: { ar: "أرسلت نادية الرسالة، فردّ بكلمة شكر. ومرت الأسابيع ولم يطلب شيئًا، فهو لا يحب أن يثقل على أحد، وبقيت الأكياس عند الباب.", en: "Nadia sent the message and he replied with a word of thanks. Weeks went by and he asked for nothing; he doesn't like to be a burden. The bags stayed by the door." },
        why: { ar: "«أخبرني إن احتجت» تترك العبء على من يصعب عليه أن يطلب.", en: "“Let me know if you need anything” leaves the burden on the one who finds it hardest to ask." } },
      { t: { ar: "أطرق بابه بطبق من عشائنا، وأسأله أيّ يوم يناسبه لنزوره كل أسبوع.", en: "Knock with a plate from our dinner and ask which day would suit him for a weekly visit." },
        out: { ar: "فتح أبو صالح الباب متفاجئًا، وطالت الوقفة عند الباب نصف ساعة، واتفقا على عصر الجمعة. وفي الجمعة الثالثة كان هو من أعدّ الشاي.", en: "Abu Salih opened the door, surprised, and the chat at the door lasted half an hour. They settled on Friday afternoons. By the third Friday, he was the one making the tea." },
        why: { ar: "العون الحق يسبق إلى الحاجة قبل أن تُطلب.", en: "Real help reaches the need before it is asked for." } },
      { t: { ar: "أكلّم جيران العمارة لنتقاسم زيارته وقضاء حاجاته.", en: "Talk to the neighbours in the building so we share visiting him and running his errands." },
        out: { ar: "أنشأت نادية مجموعة صغيرة لجيران العمارة، فتوزعوا الأيام، وصار باب أبي صالح يُطرق كل يوم. وبعد شهر قال لها: «ما شعرت بالوحدة كما خشيت».", en: "Nadia started a small group for the building and the neighbours shared out the days, so Abu Salih's door was knocked on every day. After a month he told her, “I haven't felt as alone as I feared.”" },
        why: { ar: "من يسبق إلى الخير ويأخذ غيره معه يضاعف أثره.", en: "Whoever races to good and brings others along multiplies its effect." } }
    ],
    end: { ar: "الحاجة لا تطرق الأبواب دائمًا. كثيرًا ما تقف صامتة خلفها، تنتظر من يسبق إليها.", en: "Need does not always knock. Often it waits silently behind a door for someone to reach it first." }
  }
];

/* ───────────── من حكايات العالم وتجاربه للكبار، الدفعة الأولى، 24 نوفمبر 2026 ─────────────
 * One retold public-domain tale per stage, followed by a short essay drawing on world education and on the psychology
 * of habits and self-control, each study named with its journal and year. world:"tale" or "wisdom" sets the card tag.
 * Invented characters are fictional.
 */
(function () {
  var S = window.AKHLAQ_CONTENT_ADULT.stages;
  function R(k, o) {
    var b = o.body; o.body = { ar: b.common.ar.concat(b.tryAr), ar_f: b.common.ar.concat(b.tryArF || b.tryAr), en: b.common.en.concat(b.tryEn) };
    S[k].readings.push(Object.assign({ world: "tale", quote: null, ages: "18+" }, o));
  }
  function Q(k, list) { list.forEach(function (q) { S[k].quiz.push(Object.assign({ type: "comprehension" }, q)); }); }
  function O(a) { return a.map(function (x) { return { ar: x[0], en: x[1] }; }); }

  /* ── الخنصر: الغفلة ── */
  R("zombie", { id: "az-r9", minutes: 5,
    title: { ar: "شجرة التنّوب التي كانت تنتظر", en: "The fir tree that kept waiting" },
    origin: { ar: "من حكايات أندرسن", en: "From Hans Christian Andersen" },
    body: { common: {
      ar: ["في حكاية لأندرسن شجرة تنّوب صغيرة في غابة، حولها شمس ونسيم، وأرانب تقفز من فوقها. ولم يكن شيء من ذلك يفرحها. كانت تريد أن تكبر. وحين قطع الحطّابون الأشجار الكبيرة وحملوها بعيدًا، تمنّت أن تصير صاريًا في سفينة. وحين حُملت الأشجار الصغيرة إلى البيوت في الشتاء، تمنّت أن تُزيَّن مثلها.",
        "ثم جاء دورها. حُملت إلى بيت دافئ، وعُلّقت عليها الأضواء والحلوى، وتجمّع حولها الأطفال ليلة واحدة. وكانت طوال الليلة تفكر في الغد: ماذا سيأتي بعد هذا؟ ما الأجمل منه؟ وفي الصباح حملوها إلى العلّية المظلمة.",
        "في العلّية حكت للفئران عن الغابة: عن الشمس والنسيم والأرانب. وبينما هي تحكي فهمت أن تلك كانت أيامها السعيدة، ولم تعرف ذلك وهي فيها. وفي الربيع أُخرجت إلى الساحة، ورأت الحديقة تزهر وهي يابسة، وقالت في نفسها: ليتني فرحتُ حين كان الفرح ممكنًا.",
        "سلوك الغفلة عند الكبير يأتي أحيانًا في ثوب الطموح: «حين أُرقّى سأرتاح»، «حين يكبر الأولاد نسافر»، «حين أنهي هذا المشروع أقرأ». ويصير الحاضر في كل ذلك ممرًّا إلى يوم آخر.",
        "وقد قاس هذا باحثان من جامعة هارفارد، ماثيو كيلينغزورث ودانيال غيلبرت. سألا آلاف البالغين عبر هواتفهم، في لحظات عشوائية من يومهم: ماذا تفعل الآن؟ وفيمَ تفكر؟ وكيف تشعر؟ فوجدا الذهن شاردًا عمّا بين يدي صاحبه في نحو 47% من اللحظات التي سُئلوا فيها، ووجدا الناس وهم شاردون أقل سعادة منهم وهم حاضرون. والشرود إلى أمر سارّ لم يجعلهم أسعد من حضورهم في عملهم نفسه (مجلة Science، 2010).",
        "للتفكير في الغد وقته ومكانه. وما فعلته الشجرة شيء آخر: جعلت كل يوم انتظارًا لليوم الذي بعده. والعلاج يبدأ صغيرًا محسوسًا: عمل واحد في اليوم يُؤدّى كله وصاحبه فيه. وجبة تُؤكل والهاتف في غرفة أخرى. حديث مع الابن إلى آخره، دون إعداد الجواب في الرأس. مشي عشر دقائق ينظر فيه الماشي إلى ما حوله."],
      en: ["In one of Andersen's tales a little fir tree stands in a forest, with sunshine and breezes around it and hares leaping over it. None of it made the tree happy. It wanted to be big. When the woodcutters felled the tall trees and carried them away, it longed to be a ship's mast. When the small trees were carried into houses in winter, it longed to be decorated like them.",
        "Then its turn came. It was carried into a warm house, hung with lights and sweets, and the children gathered round it for one night. All night it thought about tomorrow: what comes after this? What could be even lovelier? In the morning they carried it up to the dark attic.",
        "In the attic it told the mice about the forest: the sunshine, the breezes, the hares. And as it talked, it understood that those had been its happy days, and it had not known it while it was in them. In spring it was dragged out into the yard and saw the garden in bloom while it stood dry, and it thought: if only I had been glad when gladness was possible.",
        "In an adult, the behaviour of heedlessness sometimes comes dressed as ambition: “When I'm promoted I'll rest.” “When the children are older we'll travel.” “When I finish this project I'll read.” In each, the present becomes a corridor to some other day.",
        "Two Harvard researchers, Matthew Killingsworth and Daniel Gilbert, measured this. They asked thousands of adults through their phones, at random moments of the day: What are you doing right now? What are you thinking about? How do you feel? They found the mind wandering away from the task at hand in about 47% of the moments sampled, and people less happy while wandering than while present. Wandering to something pleasant made them no happier than staying with what they were actually doing (Science, 2010).",
        "Thinking about tomorrow has its time and place. What the tree did was something else: it made every day a wait for the next. The remedy starts small and concrete: one act a day done wholly, with yourself in it. A meal eaten with the phone in another room. A conversation with your child to the very end, without preparing your answer in your head. A ten-minute walk spent looking at what is around you."] },
      tryAr: "جرّب هذا الأسبوع: اختر كل يوم عملًا عاديًّا واحدًا، وأدّه بحضور كامل، ثم اكتب في المساء سطرًا: ماذا رأيتُ فيه لم أكن أراه؟",
      tryArF: "جرّبي هذا الأسبوع: اختاري كل يوم عملًا عاديًّا واحدًا، وأدّيه بحضور كامل، ثم اكتبي في المساء سطرًا: ماذا رأيتُ فيه لم أكن أراه؟",
      tryEn: "Try this week: each day choose one ordinary task and do it with full presence, then write one line in the evening: what did I see in it that I had not been seeing?" },
    source: { ar: "حكاية «شجرة التنّوب» للدنماركي هانس كريستيان أندرسن (1844)، رويناها بالمعنى، ومعها دراسة كيلينغزورث وغيلبرت «A wandering mind is an unhappy mind» في مجلة Science (2010).", en: "Hans Christian Andersen's “The Fir Tree” (1844), retold by meaning, with Killingsworth and Gilbert's study “A wandering mind is an unhappy mind”, Science (2010)." } });
  Q("zombie", [
    { id: "az-q15", readingId: "az-r9", correct: 1,
      q: { ar: "بماذا كانت الشجرة تفكر ليلة زُيّنت في البيت؟", en: "What was the tree thinking about on the night it was decorated?" },
      options: O([["في الغابة التي جاءت منها", "The forest it came from"], ["في الغد: ماذا سيأتي بعد هذا؟", "Tomorrow: what comes after this?"], ["في الأطفال الذين حولها", "The children around it"]]),
      why: { ar: "حتى في ليلتها الجميلة كانت تنتظر ما بعدها، فلم تعشها.", en: "Even on its lovely night it was waiting for what came next, so it never lived that night." } },
    { id: "az-q16", readingId: "az-r9", correct: 2,
      q: { ar: "ماذا وجد كيلينغزورث وغيلبرت عن شرود الذهن؟", en: "What did Killingsworth and Gilbert find about mind-wandering?" },
      options: O([["أنه نادر عند من يعملون عملًا يحبونه", "That it is rare in people doing work they love"], ["أنه يزيد السعادة إذا كان في أمور سارة", "That it raises happiness when it drifts to pleasant things"], ["أنه ظهر في نحو نصف اللحظات التي سُئلوا فيها، والناس فيه أقل سعادة", "That it showed up in about half the moments sampled, and people were less happy in it"]]),
      why: { ar: "نحو 47% من اللحظات، والسعادة فيه أقل، والشرود إلى أمر سارّ لم يرفعها فوق الحضور.", en: "About 47% of sampled moments, with lower happiness; wandering somewhere pleasant did not lift it above being present." } }
  ]);

  /* ── البنصر: الكسل ── */
  R("pig", { id: "ap-r9", minutes: 5,
    title: { ar: "الكنز في الحقل", en: "The treasure in the field" },
    origin: { ar: "من حكايات لافونتين", en: "From La Fontaine's fables" },
    body: { common: {
      ar: ["في حكاية لافونتين فلّاح غنيّ أحسّ بقرب أجله، فدعا أولاده وقال لهم: «لا تبيعوا الأرض التي ورثناها عن آبائنا. فيها كنز مخبوء، لا أعرف موضعه. فاحفروا، وقلّبوا التراب، ولا تتركوا شبرًا».",
        "مات الأب. وبعد الحصاد حمل الأولاد المعاول، وقلّبوا الحقل كله، هنا وهناك وفي كل زاوية. فما وجدوا ذهبًا. وأعطت الأرض المقلوبة تلك السنة غلّة لم تعطها من قبل. وفهموا ما أراده أبوهم: العمل نفسه كنز.",
        "سلوك الكسل عند الكبير قلّما يظهر كسلًا. يظهر انتظارًا: انتظار الحماسة، أو الوقت المناسب، أو صفاء الذهن. والفلاح العجوز أعطى أولاده سببًا ليبدؤوا، وترك للتراب بقية الشغل.",
        "وفي علم النفس الحديث ما يشبه وصيته. فقد راجعت أنجيلا داكوورث وزميلاها ما يُعرف عن ضبط النفس، ورجّحوا أن ما يفعله المرء قبل لحظة الإغراء قد يكون أنفع مما يفعله فيها: أن يرتّب موقفه، فيبعد ما يغريه، ويقرّب ما يريد فعله (Perspectives on Psychological Science، 2016).",
        "ومن ذلك ما سمّاه بيتر غولفيتزر «نيّة التنفيذ»: خطة بصيغة «إذا... فإني...». «إذا انتهيتُ من العشاء، فإني أغسل الصحون قبل أن أجلس». وقد جمع غولفيتزر وباسكال شيران أربعًا وتسعين دراسة، فوجدا أن هذه الخطة الصغيرة تزيد بوضوح احتمال أن يفعل المرء ما نوى (2006).",
        "والعادة تحتاج وقتها. في دراسة فيليبا لالي وزملائها في لندن، على سلوكيات بسيطة اختارها المشاركون، احتاجوا نحو 66 يومًا في الوسط حتى صار السلوك الجديد يأتي وحده تقريبًا، ومنهم من احتاج 18 يومًا، ومنهم من قارب 254 يومًا. وتفويت يوم واحد لم يُفسد الطريق (2010)."],
      en: ["In La Fontaine's fable a rich farmer feels his end approaching. He calls his sons and tells them: “Never sell the land our forefathers left us. A treasure is hidden in it; I don't know where. So dig, turn the soil, and leave no patch untouched.”",
        "The father died. After the harvest the sons took up their spades and turned the whole field, here, there and in every corner. They found no gold. And that year the turned earth gave a crop it had never given before. They understood what their father had meant: work itself is a treasure.",
        "In an adult, the behaviour of laziness rarely looks like laziness. It looks like waiting: for motivation, for the right time, for a clear head. The old farmer gave his sons a reason to begin, and left the rest to the soil.",
        "Modern psychology says something close to his advice. Angela Duckworth and two colleagues reviewed what is known about self-control and argued that what you do before the moment of temptation may work better than what you do in it: arranging your situation, moving the tempting thing away and the intended thing closer (Perspectives on Psychological Science, 2016).",
        "One such tool is what Peter Gollwitzer called an “implementation intention”: a plan in the form “If... then I will...”. “If I've finished dinner, then I'll wash the dishes before I sit down.” Gollwitzer and Paschal Sheeran gathered ninety-four studies and found that this small plan clearly raises the chance of doing what you intended (2006).",
        "And habits take their time. In Phillippa Lally's study in London, on simple behaviours the participants chose themselves, they needed about 66 days at the median before a new behaviour came almost by itself; some needed 18 days, and some nearly 254. Missing a single day did not spoil the path (2010)."] },
      tryAr: "جرّب هذا الأسبوع: اختر عملًا واحدًا تؤجّله دائمًا، واكتب له جملة «إذا... فإني...» تربطه بشيء تفعله كل يوم، وأبعد عنه عائقًا واحدًا: الكتاب على الوسادة، أو الحذاء الرياضي عند الباب.",
      tryArF: "جرّبي هذا الأسبوع: اختاري عملًا واحدًا تؤجّلينه دائمًا، واكتبي له جملة «إذا... فإني...» تربطه بشيء تفعلينه كل يوم، وأبعدي عنه عائقًا واحدًا: الكتاب على الوسادة، أو الحذاء الرياضي عند الباب.",
      tryEn: "Try this week: pick one task you always put off, write it an “If... then I will...” sentence that ties it to something you do every day, and remove one obstacle: the book on the pillow, the trainers by the door." },
    source: { ar: "حكاية «الفلّاح وأولاده» لجان دو لافونتين (1668)، وأصلها عند إيسوب، رويناها بالمعنى. ومعها مراجعة داكوورث وغندلر وغروس (2016)، وتحليل غولفيتزر وشيران لأربع وتسعين دراسة (2006)، ودراسة لالي وزملائها في European Journal of Social Psychology (2010).", en: "La Fontaine's “The Ploughman and his Sons” (1668), after Aesop, retold by meaning. With the review by Duckworth, Gendler and Gross (2016), Gollwitzer and Sheeran's meta-analysis of ninety-four studies (2006), and Lally and colleagues in the European Journal of Social Psychology (2010)." } });
  Q("pig", [
    { id: "ap-q15", readingId: "ap-r9", correct: 1,
      q: { ar: "ماذا وجد الأولاد بعد أن قلّبوا الحقل؟", en: "What did the sons find after turning the field?" },
      options: O([["جرّة ذهب قرب البئر", "A jar of gold by the well"], ["لا ذهب، وغلّة لم يروا مثلها", "No gold, and a crop like none they had seen"], ["أن أباهم باع الأرض قبل موته", "That their father had sold the land before he died"]]),
      why: { ar: "الكنز الذي وعد به الأب كان في التعب نفسه.", en: "The treasure the father promised was in the labour itself." } },
    { id: "ap-q16", readingId: "ap-r9", correct: 0,
      q: { ar: "ما «نيّة التنفيذ» التي وصفها غولفيتزر؟", en: "What is the “implementation intention” Gollwitzer described?" },
      options: O([["خطة بصيغة: إذا حدث كذا، فإني أفعل كذا", "A plan in the form: if this happens, then I will do that"], ["الانتظار حتى تأتي الحماسة", "Waiting until motivation arrives"], ["وعد يُقال أمام الناس", "A promise made in front of others"]]),
      why: { ar: "تربط النية بموقف محدد، فيأتي الفعل حين يأتي الموقف.", en: "It ties the intention to a specific situation, so the action comes when the situation does." } }
  ]);

  /* ── الوسطى: الغضب السريع ── */
  R("monkey", { id: "am-r9", minutes: 5,
    title: { ar: "من شدّ الزرع ليطول", en: "The man who pulled his sprouts" },
    origin: { ar: "حكاية صينية من منشيوس", en: "A Chinese tale from Mencius" },
    body: { common: {
      ar: ["يحكي الفيلسوف الصيني منشيوس عن رجل من مملكة سونغ، كان يرى زرعه بطيئًا لا يطول. فخرج يومًا إلى الحقل، وشدّ كل نبتة قليلًا إلى أعلى، واحدة واحدة، من الصباح إلى المساء. ورجع إلى أهله متعبًا يقول: «تعبتُ اليوم، ساعدتُ الزرع أن يطول». فركض ابنه إلى الحقل، فوجد النبات كله ذابلًا.",
        "الحكاية عن الزرع، وهي في البيوت كل يوم. ابن في السابعة يربط حذاءه ببطء، والأب متأخر عن عمله، فينحني ويربطه عنه بحركة حادة. بنت تحكي حكاية طويلة عن المدرسة، والأم تكمل جملها عنها لتصل إلى النهاية. واجب لا يُفهم في المرة الثالثة، فيرتفع الصوت: «كم مرة سأشرح؟».",
        "يولد كثير من سلوك الغضب السريع في هذه المسافة: بين سرعة ما نريد وسرعة ما يكبر. وللزرع إيقاعه، وللولد إيقاعه.",
        "وفي تجربة نشرها ماثيو ليبرمان وزملاؤه، عُرضت على المشاركين صور وجوه غاضبة أو خائفة وهم في جهاز تصوير الدماغ. وحين اختاروا للشعور اسمه («غاضب»، «خائف») هدأ نشاط اللوزة الدماغية، وهي من مراكز الإنذار في الدماغ، أكثر مما هدأ حين اختاروا اسم شخص يناسب الوجه (Psychological Science، 2007). تجربة مختبر على صور، وفيها ما يُجرَّب في البيت: كلمة واحدة تضع مسافة بين الشعور والفعل.",
        "وتقترح «التربية الإيجابية» التي طوّرتها جين نيلسن، على خطى ألفرد أدلر ورودولف درايكورس، أن يكون الوالد لطيفًا وحازمًا في الوقت نفسه: الحذاء يُربط، والخروج في السابعة والنصف، ولهذا يبدأ ربطه في السابعة والربع. الحزم في الترتيب، واللطف في الصوت."],
      en: ["The Chinese philosopher Mencius tells of a man from the state of Song who thought his crop was slow and would not grow. One day he went out to the field and pulled every sprout up a little, one by one, from morning to evening. He came home exhausted and told his family: “I'm worn out today. I helped the crop grow.” His son ran to the field and found every plant withered.",
        "The tale is about crops, and it happens in homes every day. A seven-year-old ties his shoes slowly, his father is late for work, so he bends down and ties them for him with a sharp tug. A girl tells a long story about school, and her mother finishes her sentences to get to the end. Homework still not understood the third time, and the voice rises: “How many times do I have to explain?”",
        "Much of the behaviour of quick anger is born in this gap: between the speed we want and the speed at which things grow. The crop has its rhythm, and so does the child.",
        "In an experiment published by Matthew Lieberman and colleagues, participants in a brain scanner were shown pictures of angry or frightened faces. When they picked the name of the feeling (“angry”, “scared”), activity in the amygdala, one of the brain's alarm centres, calmed more than when they picked a person's name to match the face (Psychological Science, 2007). A lab experiment with pictures, with something to try at home: one word puts some distance between feeling and action.",
        "Positive Discipline, developed by Jane Nelsen after Alfred Adler and Rudolf Dreikurs, suggests that a parent be kind and firm at the same time: the shoes get tied, we leave at half past seven, so tying starts at a quarter past. Firmness in the arrangement, kindness in the voice."] },
      tryAr: "جرّب هذا الأسبوع: حين تحسّ بالحرارة تصعد، سمِّ ما تشعر به لنفسك بجملة واحدة قبل أن تتكلم: «أنا مستعجل، وخائف أن أتأخر». ثم انظر إلى ما بين يدي ولدك، واسأل نفسك: أيحتاج يدي، أم يحتاج وقتًا؟",
      tryArF: "جرّبي هذا الأسبوع: حين تحسّين بالحرارة تصعد، سمّي ما تشعرين به لنفسك بجملة واحدة قبل أن تتكلمي: «أنا مستعجلة، وخائفة أن أتأخر». ثم انظري إلى ما بين يدي ولدك، واسألي نفسك: أيحتاج يدي، أم يحتاج وقتًا؟",
      tryEn: "Try this week: when you feel the heat rising, name what you feel to yourself in one sentence before you speak: “I'm rushed, and afraid of being late.” Then look at what is in your child's hands, and ask yourself: does this need my hands, or does it need time?" },
    source: { ar: "حكاية «شدّ الزرع» من كتاب «منشيوس» (القرن الرابع قبل الميلاد)، رويناها بالمعنى. ومعها تجربة ليبرمان وزملائه «Putting feelings into words» (2007)، ومبدأ «اللطف والحزم معًا» من «التربية الإيجابية» لجين نيلسن.", en: "The tale of the pulled sprouts from the book of Mencius (4th century BCE), retold by meaning. With Lieberman and colleagues' “Putting feelings into words” (2007) and the “kind and firm” principle of Jane Nelsen's Positive Discipline." } });
  Q("monkey", [
    { id: "am-q15", readingId: "am-r9", correct: 1,
      q: { ar: "ماذا وجد الابن حين ركض إلى الحقل؟", en: "What did the son find when he ran to the field?" },
      options: O([["النبات أطول مما كان", "The plants taller than before"], ["النبات كله ذابلًا", "Every plant withered"], ["أن أباه نسي نصف الحقل", "That his father had missed half the field"]]),
      why: { ar: "استعجل الفلاح النمو، فقطع الجذور عن ترابها.", en: "The farmer hurried the growth, and tore the roots from their soil." } },
    { id: "am-q16", readingId: "am-r9", correct: 0,
      q: { ar: "ماذا حدث في تجربة ليبرمان حين اختار المشاركون اسم الشعور؟", en: "What happened in Lieberman's experiment when participants picked the name of the feeling?" },
      options: O([["هدأ نشاط مركز من مراكز الإنذار في الدماغ", "Activity in one of the brain's alarm centres calmed"], ["زاد غضبهم لأنهم انتبهوا إليه", "Their anger grew because they focused on it"], ["لم يظهر أي فرق", "No difference appeared"]]),
      why: { ar: "تسمية الشعور بكلمة هدّأت اللوزة الدماغية أكثر من تسمية الشخص.", en: "Naming the feeling calmed the amygdala more than naming the person did." } }
  ]);

  /* ── السبابة: أداء الواجب ── */
  R("human", { id: "ah-r9", minutes: 4,
    title: { ar: "السيف على الشجرة", en: "The sword on the tree" },
    origin: { ar: "حكاية صينية", en: "A Chinese tale" },
    body: { common: {
      ar: ["يروي المؤرخ الصيني سيما تشيان أن الأمير جي تشا، من مملكة وو، خرج في سفارة إلى الممالك الشمالية، ومرّ في طريقه بأمير دولة صغيرة اسمها شو. وفي المجلس كان أمير شو ينظر إلى سيف جي تشا ويطيل النظر، ولم يطلبه، ولم يقل شيئًا.",
        "فهم جي تشا ما في عينيه، وقال في نفسه: أعطيه السيف حين أعود، فالسفير لا يدخل على الملوك بلا سيف. ولم يقل ذلك لأحد.",
        "ورجع بعد شهور، فوجد أمير شو قد مات. فذهب إلى قبره، وفكّ السيف عن خصره، وعلّقه على شجرة عند القبر، ومضى.",
        "قال له من معه: «الرجل مات، ولم تعده بشيء. لمن تترك السيف؟». قال جي تشا: «وعدته في قلبي. أفأنقض ما في قلبي لأن صاحبه مات؟».",
        "أداء الواجب عند كثيرين حساب لما يُطالَب به المرء: العقد المكتوب، والكلمة المسموعة، وما يراه الناس. وجي تشا حاسب نفسه على ما لم يسمعه أحد غيره.",
        "ويصف عالم التربية الأمريكي توماس ليكونا الخُلق في كتابه «Educating for Character» (1991) بثلاث طبقات: أن يعرف المرء الخير، وأن يحبّه، وأن يفعله: الرأس والقلب واليد. يقف أكثرنا عند الأولى: يعرف أن الكلمة دَين. ووصل جي تشا إلى الثالثة في أمر لم يكن أحد سيسأله عنه.",
        "وفي البيت دَين من هذا النوع كل يوم: «سأنظر إلى رسمك بعد قليل»، «في العطلة نذهب إلى البحر»، «غدًا أصلح الدرّاجة». وعود يقولها الكبير ليمضي، ويحفظها الصغير كلمة كلمة."],
      en: ["The Chinese historian Sima Qian tells that Prince Ji Zha of the state of Wu set out on an embassy to the northern states, and on the way he visited the lord of a small state called Xu. At their meeting the lord of Xu kept looking at Ji Zha's sword, a long look; he did not ask for it, and said nothing.",
        "Ji Zha understood what was in his eyes, and said to himself: I'll give him the sword when I come back, since an envoy cannot appear before kings without one. He told no one.",
        "He returned months later and found the lord of Xu had died. So he went to his grave, unfastened the sword from his waist, hung it on a tree by the grave, and went on his way.",
        "His companions said: “The man is dead, and you never promised him anything. Who are you leaving the sword for?” Ji Zha said: “I promised him in my heart. Should I break what was in my heart because the man has died?”",
        "For many people, doing what is due means keeping account of what they can be asked for: the written contract, the word others heard, what people can see. Ji Zha held himself to account for what no one else had heard.",
        "The American educator Thomas Lickona, in Educating for Character (1991), describes character in three layers: knowing the good, loving the good, and doing the good: head, heart and hand. Most of us stop at the first: we know a word given is a debt. Ji Zha reached the third, in a matter no one would ever have asked him about.",
        "At home there are debts of this kind every day: “I'll look at your drawing in a minute.” “In the holidays we'll go to the sea.” “Tomorrow I'll fix the bike.” Promises an adult says to move on, and a child keeps word for word."] },
      tryAr: "جرّب هذا الأسبوع: اكتب كل وعد قلته لأحد في البيت، صغيرًا كان أو كبيرًا، ثم أوفِ كل يوم بواحد منها، أو اعتذر عنه بوضوح، وضع مكانه وعدًا تقدر عليه.",
      tryArF: "جرّبي هذا الأسبوع: اكتبي كل وعد قلتِه لأحد في البيت، صغيرًا كان أو كبيرًا، ثم أوفي كل يوم بواحد منها، أو اعتذري عنه بوضوح، وضعي مكانه وعدًا تقدرين عليه.",
      tryEn: "Try this week: write down every promise you have made to someone at home, small or large, then each day keep one of them, or apologise for it clearly and put in its place a promise you can keep." },
    source: { ar: "من «سجلات المؤرخ» لسيما تشيان (نحو 90 قبل الميلاد)، في خبر جي تشا من مملكة وو، رويناها بالمعنى. ومعها تعريف توماس ليكونا للخُلق في «Educating for Character» (1991).", en: "From Sima Qian's Records of the Grand Historian (c. 90 BCE), in the account of Ji Zha of Wu, retold by meaning. With Thomas Lickona's definition of character in Educating for Character (1991)." } });
  Q("human", [
    { id: "ah-q15", readingId: "ah-r9", correct: 1,
      q: { ar: "لماذا لم يُعطِ جي تشا السيف لأمير شو في المرة الأولى؟", en: "Why didn't Ji Zha give the lord of Xu the sword the first time?" },
      options: O([["لأن الأمير لم يطلبه", "Because the lord did not ask for it"], ["لأنه يحتاج إليه في سفارته", "Because he needed it for his embassy"], ["لأنه سيف ورثه عن أبيه", "Because it was a sword he had inherited from his father"]]),
      why: { ar: "نوى العطاء من أول نظرة، وأجّله لأن السفير لا يدخل على الملوك بلا سيف.", en: "He meant to give it from the first look, and only waited because an envoy could not appear before kings without a sword." } },
    { id: "ah-q16", readingId: "ah-r9", correct: 2,
      q: { ar: "بمَ أجاب جي تشا حين سُئل لمن يترك السيف؟", en: "What did Ji Zha answer when asked who he was leaving the sword for?" },
      options: O([["أن الأمير طلبه منه قبل موته", "That the lord had asked for it before he died"], ["أن السيف ثقيل في الطريق", "That the sword was heavy for the road"], ["أنه وعده في قلبه", "That he had promised him in his heart"]]),
      why: { ar: "الوعد الذي في القلب دَين عنده، سمعه الناس أو لم يسمعوه.", en: "A promise in the heart was a debt to him, whether anyone heard it or not." } }
  ]);

  /* ── الإبهام: المبادرة بالخير ── */
  R("sabiq", { id: "as-r9", minutes: 5, world: "wisdom",
    title: { ar: "عقدة الكشّاف", en: "The Scout's knot" },
    origin: { ar: "من عادات الكشافة", en: "From the Scouts" },
    body: { common: {
      ar: ["سنة 1908 نشر روبرت بادن باول، مؤسس الكشافة، كتابه «Scouting for Boys». وفيه عادة بسيطة: أن يفعل الكشّاف كل يوم عملًا طيبًا لأحد، بلا أجر. واقترح لها طريقة لا تحتاج إلى قوة إرادة: عقدة في المنديل أو في ربطة العنق، لا تُفكّ حتى يُفعل العمل الطيب.",
        "وما زالت العقدة تعمل بعد أكثر من قرن، لأنها تعالج أمرًا يعرفه كل كبير: الخير الذي ننويه في الصباح يذوب في زحمة النهار، والنسيان يسبق التردد.",
        "جرّبتها مها، وهي محاسبة وأمّ لثلاثة، بطريقتها: ربطت خيطًا أحمر حول ساعة يدها. في اليوم الأول تذكّرته في الحادية عشرة، فأرسلت لزميلة مريضة تسأل عنها. وفي الثاني نسيته حتى الليل، فطوت غسيل جارتها المسنّة المنشور قبل المطر. وفي الخامس لم تجد شيئًا حتى المساء، ثم رأت عيني ابنها الأوسط تطلبان من يسمعه، فجلست معه، وفكّت العقدة بعد نصف ساعة.",
        "وفي علم النفس اسم لما تفعله العقدة: تذكير مربوط بموقف. فقد وجد غولفيتزر وشيران، في مراجعتهما لأربع وتسعين دراسة (2006)، أن من يربط نيّته بموقف محدد بصيغة «إذا... فإني...» يفعل ما نوى أكثر بوضوح ممن يكتفي بالنية العامة. «إذا جلستُ إلى الغداء، فإني أسأل نفسي: لمن أفعل خيرًا اليوم؟».",
        "والعادة تحتاج وقتًا أطول مما نظن. في دراسة لالي وزملائها (2010) كان الوسط نحو 66 يومًا حتى يصير السلوك تلقائيًّا، وتفويت يوم لم يكسر الطريق. والعقدة تُربط من جديد في الصباح التالي.",
        "وبعد شهرين صارت مها تفكّ الخيط قبل الظهر في أكثر الأيام. ثم نسيت أن تربطه ذات صباح، وفي الطريق إلى العمل وجدت نفسها تحمل عن رجل عجوز كيس خبزه إلى باب بيته."],
      en: ["In 1908 Robert Baden-Powell, founder of the Scouts, published Scouting for Boys. In it is a simple habit: a Scout does a good turn for someone every day, unpaid. And he suggested a way to keep it that needs no willpower: a knot in your handkerchief or necktie, not untied until the good turn is done.",
        "The knot still works more than a century later, because it deals with something every adult knows: the good we intend in the morning dissolves in the rush of the day, and forgetting comes before hesitating.",
        "Maha, an accountant and mother of three, tried it her own way: a red thread tied around her watch. On the first day she remembered at eleven and messaged a colleague who was ill. On the second she forgot until night, then brought in her elderly neighbour's washing before the rain. On the fifth she found nothing until evening, then saw her middle son's eyes asking for someone to listen, so she sat with him, and untied the knot half an hour later.",
        "Psychology has a name for what the knot does: a reminder tied to a situation. In their review of ninety-four studies (2006), Gollwitzer and Sheeran found that people who tie an intention to a specific situation, in the form “If... then I will...”, follow through clearly more often than those with a general intention. “If I sit down to lunch, then I'll ask myself: who can I do some good for today?”",
        "And habits take longer than we expect. In Lally and colleagues' study (2010) the median was about 66 days before a behaviour became automatic, and missing one day did not break the path. The knot is tied again the next morning.",
        "Two months on, Maha was untying the thread before noon on most days. Then one morning she forgot to tie it, and on the way to work found herself carrying an old man's bag of bread to his front door."] },
      tryAr: "جرّب هذا الأسبوع: اربط عقدة، أو ضع منبّهًا بعد الغداء، واكتب جملتك: «إذا... فإني أفعل خيرًا لأحد لم يطلبه».",
      tryArF: "جرّبي هذا الأسبوع: اربطي عقدة، أو ضعي منبّهًا بعد الغداء، واكتبي جملتك: «إذا... فإني أفعل خيرًا لأحد لم يطلبه».",
      tryEn: "Try this week: tie a knot, or set an alarm for after lunch, and write your sentence: “If..., then I will do some good for someone who didn't ask.”" },
    source: { ar: "العمل الطيب اليومي من «Scouting for Boys» لروبرت بادن باول (1908؛ رجعنا إلى طبعة 1910)، ومعه مراجعة غولفيتزر وشيران في Advances in Experimental Social Psychology (2006) ودراسة لالي وزملائها (2010). مها شخصية خيالية.", en: "The daily good turn from Robert Baden-Powell's Scouting for Boys (1908; checked in the 1910 edition), with Gollwitzer and Sheeran's review in Advances in Experimental Social Psychology (2006) and Lally and colleagues' study (2010). Maha is a fictional character." } });
  Q("sabiq", [
    { id: "as-q15", readingId: "as-r9", correct: 0,
      q: { ar: "بماذا اقترح بادن باول أن يتذكر الكشّاف عمله الطيب؟", en: "How did Baden-Powell suggest a Scout remember the good turn?" },
      options: O([["بعقدة في المنديل أو ربطة العنق لا تُفكّ حتى يفعله", "A knot in his handkerchief or necktie, not untied until it is done"], ["بدفتر يكتب فيه كل مساء", "A notebook written in every evening"], ["بشارة تُعلَّق على الصدر", "A badge worn on the chest"]]),
      why: { ar: "تذكير يُرى ويُلمس، مربوط بالجسد طوال النهار.", en: "A reminder you can see and touch, tied to you all day." } },
    { id: "as-q16", readingId: "as-r9", correct: 1,
      q: { ar: "ماذا فعلت مها في الصباح الذي نسيت فيه أن تربط الخيط؟", en: "What did Maha do on the morning she forgot to tie the thread?" },
      options: O([["رجعت إلى البيت لتربطه", "Went home to tie it"], ["حملت عن رجل عجوز كيس خبزه", "Carried an old man's bag of bread for him"], ["أرسلت رسالة لزميلتها المريضة", "Messaged her colleague who was ill"]]),
      why: { ar: "بعد شهرين صار الخير يأتي وحده، بلا خيط.", en: "After two months the good came by itself, with no thread." } }
  ]);

  /* ── «إلى العمل» للكبار: مهام من تجارب التربية في العالم ── */
  S.zombie.tasks.push({ id: "az-t6", ar: "وجبة واحدة اليوم بلا هاتف، تؤكل ببطء، مع سؤال: من زرع هذا، ومن أعدّه؟", en: "One meal today without the phone, eaten slowly, asking: who grew this, and who made it?" });
  S.pig.tasks.push({ id: "ap-t6", ar: "أسبوع من أدوار البيت بالتناوب على الأسرة كلها، كنوبات الفصل في مدارس اليابان، والبدء بدوري.", en: "A week of household roles rotating through the whole family, like class duties in Japanese schools, starting with my own." });
  S.monkey.tasks.push({ id: "am-t6", ar: "تسمية الشعور بجملة قبل الرد مرة واحدة اليوم («أنا منزعج لأن...»)، ثم الرد بعد دقيقة.", ar_f: "تسمية الشعور بجملة قبل الرد مرة واحدة اليوم («أنا منزعجة لأن...»)، ثم الرد بعد دقيقة.", en: "Named the feeling in a sentence before replying, once today (“I'm annoyed because...”), then replied a minute later." });
  S.human.tasks.push({ id: "ah-t6", ar: "اجتماع عائلي ربع ساعة: شكر متبادل أولًا، ثم مشكلة واحدة يقترح الجميع لها حلولًا، ويُختار حل يُجرَّب أسبوعًا.", en: "A fifteen-minute family meeting: thanks to each other first, then one problem everyone suggests solutions for, and one solution chosen to try for a week." });
  S.sabiq.tasks.push(
    { id: "as-t6", ar: "عمل طيب كل يوم سبعة أيام لم يطلبه أحد، بتذكير ثابت: عقدة، أو منبّه بعد الغداء.", en: "A good turn every day for seven days that nobody asked for, with a fixed reminder: a knot, or an alarm after lunch." },
    { id: "as-t7", ar: "تسمية فضيلة رأيتُها في ولد أو زميل بجملة محددة: «رأيتُ أمانتك اليوم حين...».", en: "Named a virtue I saw in a child or a colleague, in a specific sentence: “I saw your honesty today when...”" });
})();
