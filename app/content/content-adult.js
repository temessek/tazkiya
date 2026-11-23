/* تزكية: محتوى طبعة الكبار (18+)
 * Tazkiya adult edition content. Same shape as content.js: stages.<id> replaces the children's stage whole.
 * All five stages are written (zombie, pig, monkey, human, sabiq). Draft for the author's review.
 * Quran text matched to tanzil quran-simple (api.alquran.cloud); hadith text matched to hadith-api (fawazahmed0);
 * Miskawayh and al-Ghazali quotes matched to online editions (safahat.org, ar.wikisource.org). All characters are fictional.
 * IDs start with "az-" / "ap-" / "am-" / "ah-" / "as-" / "ad" so an adult record never mixes with a children's one.
 */
window.AKHLAQ_CONTENT_ADULT = {
  version: "0.3.0-adult-draft-2026-11-22",
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
          "خرج أحمد من صلاة العشاء، فسأله ابنه الصغير: أي سورة قرأ الإمام يا أبي؟",
          "فكّر قليلًا فلم يتذكر. كان في الصف الأول، وذهنه طوال الصلاة في اجتماع الغد.",
          "في الطريق قال لابنه: سأتعلم معنى ما أحفظ من السور، لعلّي أسمعه حين يُتلى. وفي الليلة التالية وضع هاتفه في جيبه قبل أن يدخل المسجد، ووقف لحظة قبل التكبير."
        ],
        en: [
          "Ahmad came out of the Isha prayer and his young son asked: which surah did the imam recite, Dad?",
          "He thought for a moment and could not remember. He had been in the front row, his mind on tomorrow's meeting the whole prayer.",
          "On the way home he told his son: I will learn the meaning of the surahs I know, so that I hear them when they are recited. The next night he put his phone away before entering the mosque, and paused for a moment before the takbir."
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
          { ar: "أؤخر الصلاة إلى البيت حتى أتفرغ لها", en: "Delay the prayer until I'm home and free for it" },
          { ar: "قبل الصلاة القادمة أبعد الهاتف، وأقف لحظة أتذكر بين يدي من أقف", en: "Before the next prayer, put the phone away and pause to remember before Whom I stand" },
          { ar: "لا بأس، المهم أني صليت", en: "Never mind, what matters is that I prayed" }
        ],
        why: {
          ar: "الحضور يبدأ قبل التكبير: لحظة تُفرغ فيها يديك وقلبك مما كنت فيه. وتأخير الصلاة عن وقتها لا يعالج الغفلة.",
          en: "Presence starts before the takbir: a moment in which you empty your hands and heart of what you were doing. Delaying the prayer past its time does not cure heedlessness."
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
          { ar: "أشرح له أسباب التأخير وأنتهي", en: "Explain the reasons for the delay and leave it there" },
          { ar: "أكتب ملاحظته، وأختار خطوة أبدأ بها هذا الأسبوع، وأسأله بعد شهر", en: "Write his remark down, pick one step to start this week, and ask him again in a month" },
          { ar: "أقول: معك حق، ثم أنسى", en: "Say «you're right», then forget" }
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
          "فغيّرت المكان قبل أن تغيّر النية: صارت تترك الهاتف عند الباب، وتجلس عشر دقائق مع كوب شاي وأذكار المساء. وبعد شهر قالت: لم أكن أحتاج الهاتف، كنت أحتاج أن أرتاح."
        ],
        en: [
          "Huda came home from work tired, lay down and opened her phone «for five minutes» before starting on the house.",
          "The five minutes became an hour every day. She blamed herself at night, then did it again the next day.",
          "So she changed the place before changing the intention: she left the phone by the door and sat for ten minutes with a cup of tea and the evening adhkar. A month later she said: I never needed the phone; I needed to rest."
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
          ar: "كل مساء تعد نفسك أن تنام مبكرًا، ثم تجد نفسك بعد منتصف الليل أمام الشاشة. ما أنفع خطوة أولى؟",
          ar_f: "كل مساء تعدين نفسك أن تنامي مبكرًا، ثم تجدين نفسك بعد منتصف الليل أمام الشاشة. ما أنفع خطوة أولى؟",
          en: "Every evening you promise yourself an early night, then find yourself in front of a screen after midnight. What is the most useful first step?"
        },
        options: [
          { ar: "أعد نفسي وعدًا أقوى الليلة", en: "Make myself a firmer promise tonight" },
          { ar: "أضع الشاحن خارج غرفة النوم، وأجعل مكان الشاشة أذكار النوم أو صفحة من كتاب", en: "Put the charger outside the bedroom, and put the bedtime adhkar or a page of a book where the screen was" },
          { ar: "أترك الهاتف أسبوعًا كاملًا دفعة واحدة", en: "Give up the phone for a whole week at once" }
        ],
        why: {
          ar: "العادة تُغلب بمكان يتغير وعادة تحل محلها، لا بوعد يتجدد كل ليلة ولا بقرار ضخم ينهار بعد يومين.",
          en: "A habit is beaten by a changed setting and a habit that takes its place, not by a promise renewed every night or a huge decision that collapses after two days."
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
          "لم يقرر كريم أن يترك الهاتف. قرر شيئًا أصغر: يبقى الشاحن في الصالة، ويقرأ قبل النوم عشر صفحات. تعثّر في الأسبوع الأول ثلاث ليالٍ. وفي الشهر الثاني صلّى الفجر في وقته أكثر الأيام، وأنهى أول كتاب منذ سنوات."
        ],
        en: [
          "Karim works as an accountant at a large company. He gets home at seven, has dinner with his family, then lies down to rest a little. He opens his phone on a news item, then a clip, then another clip.",
          "When he looks up it is one in the morning. He cannot remember what he watched, and he does not feel rested. He sleeps late, misses the Fajr prayer, and begins his day tired and blaming himself.",
          "One night his daughter asked him: when did you last read a book, Dad? He had no answer. He understood that her question was about time more than about books: where had the hours gone that he kept saying he did not have?",
          "The Quran warns of exactly this state, meaning: do not be like those who forgot Allah, so He made them forget themselves (al-Hashr 59:19). Whoever forgets Allah forgets himself too: what he wants, what he needs, and who is waiting for him.",
          "Karim did not decide to give up his phone. He decided something smaller: the charger stays in the living room, and he reads ten pages before sleep. In the first week he slipped three nights. By the second month he was praying Fajr on time most days, and had finished his first book in years."
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
          "في القرآن وصف لمن ينتفع بما يسمع: ﴿الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ فَيَتَّبِعُونَ أَحْسَنَهُ ۚ أُولَٰئِكَ الَّذِينَ هَدَاهُمُ اللَّهُ﴾ (الزمر 39:18). الاستماع وحده لا يكفي، والهداية تأتي مع الاتّباع.",
          "فغيّرت ريم طريقتها: تكتب في الأسبوع نصيحة واحدة في رأس صفحة جديدة، وتحتها سبعة أسطر، تكتب في كل سطر ما فعلته بها في ذلك اليوم. صار الدفتر أبطأ امتلاءً، وصارت هي أسرع تغيّرًا."
        ],
        en: [
          "Reem has an elegant notebook where she writes down every lesson she attends and every lecture she hears: on patience, honouring parents, guarding the tongue, the night prayer. In three years the notebook filled up.",
          "One day she wanted to advise a friend and opened the notebook to find something on patience. Then she stopped at a question: how many of these pages have I acted on?",
          "The Quran describes those who benefit from what they hear, meaning: those who listen to speech and follow the best of it; they are the ones Allah has guided (az-Zumar 39:18). Listening alone is not enough; guidance comes with following.",
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
          "وفي «إحياء علوم الدين» (كتاب رياضة النفس) يقرر الغزالي أن الأخلاق تقبل التغيير بالمجاهدة، وأن طريقها أن يتكلّف الإنسان الأفعال التي تصدر عن الخلق المطلوب، ويداوم عليها حتى تصير له طبعًا. فالبخيل يتكلّف البذل، والغافل يتكلّف الذكر، حتى يسهل.",
          "والقرآن يضع القاعدة الكبرى: ﴿إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ﴾ (الرعد 13:11). التغيير يبدأ من الداخل، ويظهر في الأفعال الصغيرة المتكررة.",
          "طريقة عملية: اختر عادة واحدة لا كل العادات. لاحظ ما يسبقها (الملل، التعب، إشعار)، وضع في مكانها فعلًا صالحًا صغيرًا في الوقت نفسه، وغيّر المكان حين تستطيع: الهاتف خارج الغرفة، والمصحف على الطاولة. ثم داوم، فالقليل الدائم أقوى من الكثير المنقطع."
        ],
        ar_f: [
          "أكثر ما نفعله في اليوم لا نقرره: نمسك الهاتف حين نملّ، ونؤجل حين نقلق، ونأكل حين نتعب. تبدأ العادة اختيارًا، ثم تتكرر حتى تصير هي التي تختار.",
          "وقد عرّف مسكويه الخُلُق بأنه «حالٌ للنفس داعيةٌ لها إلى أفعالها من غير فكرٍ ولا رويّة» (تهذيب الأخلاق، المقالة الثانية)، وذكر أن منه ما يكون بالطبع، ومنه ما يُكتسب بالعادة والتدرّب حتى يصير خُلقًا. وهذا خبر طيب: ما صنعته العادة تستطيع العادة أن تغيّره.",
          "وفي «إحياء علوم الدين» (كتاب رياضة النفس) يقرر الغزالي أن الأخلاق تقبل التغيير بالمجاهدة، وأن طريقها أن يتكلّف الإنسان الأفعال التي تصدر عن الخلق المطلوب، ويداوم عليها حتى تصير له طبعًا. فالبخيل يتكلّف البذل، والغافل يتكلّف الذكر، حتى يسهل.",
          "والقرآن يضع القاعدة الكبرى: ﴿إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ﴾ (الرعد 13:11). التغيير يبدأ من الداخل، ويظهر في الأفعال الصغيرة المتكررة.",
          "طريقة عملية: اختاري عادة واحدة لا كل العادات. لاحظي ما يسبقها (الملل، التعب، إشعار)، وضعي في مكانها فعلًا صالحًا صغيرًا في الوقت نفسه، وغيّري المكان حين تستطيعين: الهاتف خارج الغرفة، والمصحف على الطاولة. ثم داومي، فالقليل الدائم أقوى من الكثير المنقطع."
        ],
        en: [
          "Most of what we do in a day we never decide: we reach for the phone when bored, put things off when anxious, eat when tired. A habit begins as a choice, then repeats until it does the choosing.",
          "Miskawayh defined character as «a state of the soul that moves it to its actions without thought or deliberation» (Tahdhib al-Akhlaq, second discourse), and noted that some of it is natural and some is acquired by habit and training until it becomes character. That is good news: what habit has made, habit can change.",
          "In the Ihya (Book of Disciplining the Soul), al-Ghazali holds that character can be changed by striving, and that the way is to take on, with effort, the actions that flow from the character you want, and keep at them until they become natural. The miser makes himself give, the heedless makes himself remember, until it comes easily.",
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
          "سُئلت السيدة عائشة: ما كان النبي صلى الله عليه وآله وسلم يصنع في بيته؟ فقالت: «كَانَ يَكُونُ فِي مِهْنَةِ أَهْلِهِ (تَعْنِي خِدْمَةَ أَهْلِهِ) فَإِذَا حَضَرَتِ الصَّلاَةُ خَرَجَ إِلَى الصَّلاَةِ» (البخاري 676).",
          "في هذا الخبر القصير صورة الحضور الكامل: في البيت حاضر مع أهله، يخدمهم بيده، وفي الصلاة حاضر مع ربه. البيت لا يأخذه من الصلاة، والعبادة لا تأخذه من أهله.",
          "والغافل يتوزّع على غير مكانه: يفكر في العمل وهو في البيت، وفي البيت وهو في الصلاة. أما هدي النبي صلى الله عليه وآله وسلم فأن يكون الإنسان كله حيث هو.",
          "سؤال للتأمل: في أي مكان من يومك يحضر جسدك وحده؟ وما الخطوة التي تعيد إليه قلبك؟"
        ],
        en: [
          "Lady Aisha was asked what the Prophet, peace and blessings be upon him and his family, did at home. She said: «He would be at the service of his household, and when the time of prayer came he went out to the prayer» (Bukhari 676).",
          "This short report holds a picture of full presence: at home, present with his family, serving them with his own hands; at prayer, present with his Lord. Home did not take him from the prayer, and worship did not take him from his family.",
          "The heedless person is spread across places other than where they are: thinking of work at home, and of home in the prayer. The way of the Prophet, peace and blessings be upon him and his family, is for a person to be wholly where they are.",
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
          "هذا حديث الكبار: زوج وأولاد وعمل ومال، ومشاغل تأخذ القلب. ولم يطلب النبي صلى الله عليه وآله وسلم من حنظلة أن يترك بيته وعمله، وطمأنه أن للقلب ساعات. والفرق بين حنظلة والغافل أن حنظلة لاحظ غفلته وخاف منها ورجع، والغافل لا يلاحظ.",
          "فلتكن لك ساعتك: وقت ثابت في يومك، ولو قصيرًا، للذكر والقرآن والمحاسبة، تعود إليه من بين المشاغل كما يعود المسافر إلى بيته."
        ],
        en: [
          "Hanzala al-Usayyidi, may Allah be pleased with him, was one of the Prophet's scribes. Abu Bakr, may Allah be pleased with him, met him one day and asked: how are you, Hanzala? He said: «Hanzala has become a hypocrite.»",
          "He explained his fear: they would be with the Prophet, peace and blessings be upon him and his family, who reminded them of the Fire and Paradise until it was as if they saw them; then they went out «and busied ourselves with wives, children and livelihoods, and forgot much». Abu Bakr said he found the same in himself.",
          "They went to the Prophet, and Hanzala told him. He said, in meaning: «By the One in whose hand is my soul, if you remained as you are with me and in remembrance, the angels would shake your hands on your beds and in your streets. But, Hanzala, a time and a time», three times (Sahih Muslim 2750).",
          "This is a hadith for adults: spouse, children, work and money, and concerns that take hold of the heart. The Prophet did not ask Hanzala to leave his home and work; he reassured him that the heart has its hours. What separates Hanzala from the heedless is that he noticed his heedlessness, feared it, and came back. The heedless do not notice.",
          "So keep your own hour: a fixed time in your day, however short, for remembrance, Quran and self-review, to come back to from among your concerns as a traveller comes home."
        ]
      },
      quote: {
        ar: "«يَا حَنْظَلَةُ سَاعَةً وَسَاعَةً»",
        en: "Meaning: Hanzala, a time for this and a time for that.",
        ref: "صحيح مسلم 2750 (ترقيم sunnah.com: الكتاب 50، الحديث 14)، عن حنظلة الأسيدي", checked: "hadith-api (fawazahmed0)", verify: true
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
        { ar: "تحذير من مديره في العمل", en: "A warning from his manager at work" },
        { ar: "نفاد بطارية الهاتف", en: "His phone battery running out" }
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
        { ar: "أحذف كل التطبيقات الليلة", en: "Delete every app tonight" },
        { ar: "أضع الشاحن خارج غرفة النوم، وأقرأ صفحات قليلة قبل النوم", en: "Put the charger outside the bedroom and read a few pages before sleep" },
        { ar: "أسهر الليلة وأعوّض النوم في العطلة", en: "Stay up tonight and catch up on sleep at the weekend" }
      ],
      why: { ar: "خطوة صغيرة في المكان والعادة تثبت، والقرار الضخم ينهار سريعًا.", en: "A small step in the setting and the habit lasts; a huge decision collapses quickly." }
    },
    {
      id: "az-q3", readingId: "az-r2", type: "comprehension", correct: 0,
      q: { ar: "ما الأشياء الصغيرة الثلاثة التي جرّبتها سلوى في عملها؟", en: "What three small things did Salwa try at work?" },
      options: [
        { ar: "جملة نية، ومهمة واحدة في كل مرة، ودقيقة صمت بين المهام", en: "A sentence of intention, one task at a time, and a minute of silence between tasks" },
        { ar: "ساعات عمل أطول، وقهوة أكثر، وإجازة", en: "Longer hours, more coffee and a holiday" },
        { ar: "ترك العمل، والبحث عن عمل جديد، والسفر", en: "Quitting, looking for a new job, and travelling" }
      ],
      why: { ar: "النية والتركيز والوقفة القصيرة تعيد الإنسان حاضرًا في عمله.", en: "Intention, focus and a short pause bring a person back to being present at work." }
    },
    {
      id: "az-q4", readingId: "az-r2", type: "comprehension", correct: 1,
      q: { ar: "ما الذي يجعل يوم العمل عبادة بحسب حديث «إنما الأعمال بالنيات»؟", en: "According to the hadith «actions are only by intentions», what turns a workday into worship?" },
      options: [
        { ar: "كثرة ساعات العمل", en: "Working many hours" },
        { ar: "النية التي يعمل بها الإنسان", en: "The intention with which a person works" },
        { ar: "نوع الوظيفة", en: "The kind of job" }
      ],
      why: { ar: "لكل امرئ ما نوى: العمل نفسه يرتفع أو ينزل بنيته.", en: "Each person has what they intended: the same work rises or falls by its intention." }
    },
    {
      id: "az-q5", readingId: "az-r3", type: "comprehension", correct: 0,
      q: { ar: "ما أول المعاني الستة التي تحيا بها الصلاة عند الغزالي؟", en: "For al-Ghazali, what is the first of the six meanings that give a prayer its life?" },
      options: [
        { ar: "حضور القلب", en: "Presence of heart" },
        { ar: "طول القراءة", en: "Long recitation" },
        { ar: "رفع الصوت", en: "Raising the voice" }
      ],
      why: { ar: "حضور القلب أن يكون القلب مع ما يفعله اللسان والجسد، وعليه تُبنى بقية المعاني.", en: "Presence of heart is the heart being with what the tongue and body are doing, and the other meanings are built on it." }
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
        { ar: "صارت تكتب نصيحة واحدة في الأسبوع، وتسجّل ما فعلته بها كل يوم", en: "She writes one piece of advice a week and records what she did with it each day" },
        { ar: "صارت تكتب أكثر في كل محاضرة", en: "She writes more in every lecture" },
        { ar: "تركت الكتابة نهائيًا", en: "She stopped writing altogether" }
      ],
      why: { ar: "العبرة بالعمل بالنصيحة، لا بكثرة ما يُكتب عنها.", en: "What counts is acting on advice, not how much is written about it." }
    },
    {
      id: "az-q8", readingId: "az-r5", type: "comprehension", correct: 1,
      q: { ar: "ما الخبر الطيب في كلام مسكويه عن الخُلُق؟", en: "What is the good news in Miskawayh's words on character?" },
      options: [
        { ar: "أن الأخلاق كلها فطرية لا تتغير", en: "That all character is inborn and cannot change" },
        { ar: "أن من الخُلُق ما يُكتسب بالعادة والتدرّب، فيمكن تغييره", en: "That some character is acquired by habit and training, so it can be changed" },
        { ar: "أن العادات لا علاقة لها بالأخلاق", en: "That habits have nothing to do with character" }
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
        { ar: "أعد نفسي ألا ألمسه أبدًا", en: "Promise myself never to touch it" },
        { ar: "ألاحظ لحظة الملل، وأضع مكان الهاتف فعلًا صغيرًا ثابتًا، كالقيام لشرب الماء مع ذكر", en: "Notice the moment of boredom and put a small fixed act in place of the phone, like getting up for water with a remembrance" },
        { ar: "أستسلم، فالعادة أقوى مني", en: "Give in; the habit is stronger than me" }
      ],
      why: { ar: "عادة واحدة، وما يسبقها، وبديل صغير في الوقت نفسه: هكذا تتغير العادات.", en: "One habit, what comes before it, and a small replacement at the same moment: that is how habits change." }
    },
    {
      id: "az-q10", readingId: "az-r6", type: "comprehension", correct: 0,
      q: { ar: "لماذا صارت مريم تحكي لأمها وحدها؟", en: "Why did Maryam start telling only her mother?" },
      options: [
        { ar: "لأن أباها كان يسمعها بلا حضور، وعيناه في الهاتف", en: "Because her father listened without being present, his eyes on his phone" },
        { ar: "لأن أباها رفض أن يسمعها", en: "Because her father refused to listen to her" },
        { ar: "لأنها انتقلت إلى مدرسة أخرى", en: "Because she moved to another school" }
      ],
      why: { ar: "الحاضر بالجسد وحده يغيب عمن حوله، والأولاد يلاحظون ذلك قبل الكبار.", en: "Someone present only in body is absent to those around them, and children notice it before adults do." }
    },
    {
      id: "az-q11", readingId: "az-r7", type: "comprehension", correct: 0,
      q: { ar: "ماذا قالت السيدة عائشة عن النبي صلى الله عليه وآله وسلم في بيته؟", en: "What did Lady Aisha say about the Prophet at home?" },
      options: [
        { ar: "كان في مهنة أهله، فإذا حضرت الصلاة خرج إليها", en: "He was at the service of his household, and when prayer came he went out to it" },
        { ar: "كان يقضي وقته في البيت منفردًا", en: "He spent his time at home alone" },
        { ar: "كان لا يدخل البيت إلا للنوم", en: "He came home only to sleep" }
      ],
      why: { ar: "حاضر مع أهله في البيت، وحاضر مع ربه في الصلاة.", en: "Present with his family at home, and present with his Lord in prayer." }
    },
    {
      id: "az-q12", readingId: "az-r8", type: "comprehension", correct: 1,
      q: { ar: "ما الذي ميّز حنظلة رضي الله عنه من الغافل؟", en: "What set Hanzala, may Allah be pleased with him, apart from the heedless?" },
      options: [
        { ar: "أنه لم ينشغل بأهله وعمله أبدًا", en: "He was never busy with his family and work" },
        { ar: "أنه لاحظ غفلته وخاف منها ورجع", en: "He noticed his heedlessness, feared it, and came back" },
        { ar: "أنه ترك عمله ليتفرغ للذكر", en: "He left his work to devote himself to remembrance" }
      ],
      why: { ar: "القلب الحي يلاحظ متى يغيب، ويرجع. وهذه أول اليقظة.", en: "A living heart notices when it drifts, and comes back. That is the beginning of waking." }
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
          "The next day he went into the kitchen and asked Layla: what can I do? Washing the dishes after dinner became his job, and the children dry them with him."
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
          "تعمل دينا مصممة، ودخلها جيد. وفي آخر كل يوم تفتح تطبيقات التسوق لتسترخي: حقيبة، ثم عطر، ثم قطعة للبيت. تصل الطرود كل أسبوع، وبعضها يبقى في علبته.",
          "ومع ذلك تشعر دائمًا أن شيئًا ينقصها. كلما اشترت شيئًا رأت ما هو أجمل منه، وكلما امتلأت خزانتها قلّ رضاها عمّا فيها.",
          "وصف النبي صلى الله عليه وآله وسلم هذه الحال وصفًا دقيقًا: «لَوْ كَانَ لاِبْنِ آدَمَ وَادِيَانِ مِنْ مَالٍ لاَبْتَغَى ثَالِثًا، وَلاَ يَمْلأُ جَوْفَ ابْنِ آدَمَ إِلاَّ التُّرَابُ، وَيَتُوبُ اللَّهُ عَلَى مَنْ تَابَ» (البخاري 6436). وبيّن أين يكون الغنى: «لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ، وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ» (البخاري 6446).",
          "جرّبت دينا ثلاثة أشياء: حذفت تطبيقين من هاتفها، وجعلت لكل شراء غير ضروري مهلة ثلاثة أيام، وصارت كلما أرادت شيئًا جديدًا أخرجت من بيتها شيئًا لا تستعمله وأعطته لمن يحتاج إليه.",
          "بعد شهرين صار ما في بيتها أقل، ورضاها عنه أكثر. وصار يبقى في حسابها آخر الشهر مبلغ تتصدق منه. قالت لأختها: لم أكن أشتري الأشياء، كنت أشتري لحظة الشراء."
        ],
        en: [
          "Dina works as a designer and earns well. At the end of each day she opens shopping apps to unwind: a bag, then a perfume, then something for the house. Parcels arrive every week, and some stay in their boxes.",
          "Yet she always feels something is missing. Whenever she buys something she sees something lovelier, and the fuller her wardrobe grows the less content she is with it.",
          "The Prophet, peace and blessings be upon him and his family, described this state precisely, meaning: if the son of Adam had two valleys of wealth he would seek a third, and nothing fills the son of Adam's belly but dust, and Allah turns to whoever turns to Him (Bukhari 6436). And he showed where wealth truly lies: «Wealth is not an abundance of goods; wealth is the richness of the soul» (Bukhari 6446).",
          "Dina tried three things: she deleted two apps from her phone, gave every non-essential purchase three days' grace, and whenever she wanted something new she took something she no longer used out of her home and gave it to someone who needed it.",
          "Two months later she owned less and was more content with it. At the end of each month there was money left in her account to give in charity. She told her sister: I wasn't buying things; I was buying the moment of buying."
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
          "خطوات عملية: ابدأ بطبق صغير، وكُل ببطء، واشرب الماء قبل الطعام، وانتظر دقائق قبل أن تقوم إلى الطبق الثاني. فإن لم تعد إليه فقد عرفت أنك كنت شبعان."
        ],
        ar_f: [
          "في البوفيه المفتوح يشعر كثير منا أن عليه أن يستوفي ما دفع: طبق أول، ثم ثانٍ، ثم حلوى، ثم شيء أخير لأنه موجود. ويقوم عن المائدة ثقيلًا، وينام بعدها نومًا لا يريح.",
          "والقرآن يضع للطعام قاعدة قصيرة: ﴿وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ﴾ (الأعراف 7:31). الطعام نعمة، والإسراف فيه يحوّل النعمة عبئًا.",
          "وبيّن النبي صلى الله عليه وآله وسلم المقدار: «مَا مَلأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ بِحَسْبِ ابْنِ آدَمَ أُكُلاَتٌ يُقِمْنَ صُلْبَهُ فَإِنْ كَانَ لاَ مَحَالَةَ فَثُلُثٌ لِطَعَامِهِ وَثُلُثٌ لِشَرَابِهِ وَثُلُثٌ لِنَفَسِهِ» (جامع الترمذي 2380، وقال: حسن صحيح).",
          "والمقصود أن يبقى في الجسد متّسع: للنَّفَس، وللخفة، وللقيام إلى الصلاة دون ثقل. والحساب الدقيق للأثلاث أقل أهمية من هذا المتّسع.",
          "خطوات عملية: ابدئي بطبق صغير، وكُلي ببطء، واشربي الماء قبل الطعام، وانتظري دقائق قبل أن تقومي إلى الطبق الثاني. فإن لم تعودي إليه فقد عرفتِ أنكِ كنتِ شبعى."
        ],
        en: [
          "At an open buffet many of us feel we must get our money's worth: a first plate, then a second, then dessert, then one last thing because it is there. We get up from the table heavy and sleep afterwards without rest.",
          "The Quran gives food a short rule, meaning: eat and drink, and do not waste; He does not love the wasteful (al-A'raf 7:31). Food is a blessing, and excess turns the blessing into a burden.",
          "The Prophet, peace and blessings be upon him and his family, set the measure, meaning: no human fills a vessel worse than his belly; a few morsels to keep his back straight are enough for the son of Adam, and if he must, then a third for his food, a third for his drink and a third for his breath (Jami' at-Tirmidhi 2380, graded hasan sahih by him).",
          "The point is to leave room in the body: room to breathe, to feel light, to stand for prayer without heaviness. Counting the thirds exactly matters less than keeping that room.",
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
          "تأخرت ترقيتها شهرين، وجاءت. وصار سامي أول من تستشيره في كل عرض بعدها، وصار المدير يثق بكلامها حين تمدح أحدًا، لأنه عرف أنها لا تأخذ ما ليس لها."
        ],
        en: [
          "Rana prepared a presentation for a major client with her colleague Sami. Sami stayed up two nights on the figures and the analysis; she wrote and designed the slides. When she sent it to the manager, she put only her own name beneath it.",
          "She didn't mean to wrong him, she told herself. A promotion was coming, and she wanted the manager to see her work clearly. At the general meeting the manager thanked her in front of everyone, while Sami sat silent at the back of the room.",
          "On the way home she remembered a hadith she had known since childhood: «None of you believes until he loves for his brother what he loves for himself» (Bukhari 13). She asked herself: if I had stayed up two nights and someone else got the thanks, how would I feel?",
          "In the morning she wrote the manager a short message: «The figures and analysis in the presentation are Sami's work, and the thanks for them are his.» Then she went to Sami and apologised.",
          "Her promotion came two months later than it might have. Sami became the first person she consulted on every presentation after that, and the manager came to trust her praise of others, because he knew she did not take what was not hers."
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
          "كثير من الخلاف في البيوت لا يبدأ بكلمة جارحة، بل بتعب يحمله واحد ويستريح منه الآخر. يتراكم التعب أيامًا، ثم يخرج في جملة غاضبة عن شيء صغير، فيتعجب الطرف الآخر من الغضب.",
          "والكسل في البيت لا يظهر دائمًا في صورة النوم. قد يظهر في الانشغال بالهاتف والأولاد يسألون، وفي «سأفعلها لاحقًا» التي يفعلها غيرك، وفي ترك الحديث مع الطرف الآخر عن يومه لأنك متعب.",
          "وقد جعل النبي صلى الله عليه وآله وسلم البيت ميزان الخيرية: «خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ وَأَنَا خَيْرُكُمْ لأَهْلِي» (جامع الترمذي 3895). الخير الذي يراه الناس في العمل والمسجد يُختبر في المطبخ وغرفة الأولاد.",
          "خطوات عملية: اجلسا مرة واحدة واكتبا أعمال البيت كلها، ثم اختر منها عملًا ثابتًا يكون لك. اجعل للأولاد نصيبًا بحسب أعمارهم. واسأل الطرف الآخر مرة في الأسبوع: ما الذي يثقل عليك هذه الأيام؟ واسمع الجواب دون أن تدافع عن نفسك.",
          "والمقصود ليس قسمة حسابية دقيقة، فلكل بيت ظروفه. المقصود ألا يستريح أحد على تعب غيره وهو يقدر أن يعينه."
        ],
        ar_f: [
          "كثير من الخلاف في البيوت لا يبدأ بكلمة جارحة، بل بتعب يحمله واحد ويستريح منه الآخر. يتراكم التعب أيامًا، ثم يخرج في جملة غاضبة عن شيء صغير، فيتعجب الطرف الآخر من الغضب.",
          "والكسل في البيت لا يظهر دائمًا في صورة النوم. قد يظهر في الانشغال بالهاتف والأولاد يسألون، وفي «سأفعلها لاحقًا» التي يفعلها غيرك، وفي ترك الحديث مع الطرف الآخر عن يومه لأنك متعبة.",
          "وقد جعل النبي صلى الله عليه وآله وسلم البيت ميزان الخيرية: «خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ وَأَنَا خَيْرُكُمْ لأَهْلِي» (جامع الترمذي 3895). الخير الذي يراه الناس في العمل والمسجد يُختبر في المطبخ وغرفة الأولاد.",
          "خطوات عملية: اجلسا مرة واحدة واكتبا أعمال البيت كلها، ثم اختاري منها عملًا ثابتًا يكون لك. اجعلي للأولاد نصيبًا بحسب أعمارهم. واسألي الطرف الآخر مرة في الأسبوع: ما الذي يثقل عليك هذه الأيام؟ واسمعي الجواب دون أن تدافعي عن نفسك.",
          "والمقصود ليس قسمة حسابية دقيقة، فلكل بيت ظروفه. المقصود ألا يستريح أحد على تعب غيره وهو يقدر أن يعينه."
        ],
        en: [
          "Many quarrels at home don't begin with a hurtful word, but with tiredness that one person carries while the other rests. It builds up for days, then comes out in an angry sentence about something small, and the other is surprised by the anger.",
          "Laziness at home doesn't always look like sleep. It can look like being busy on the phone while the children ask for you, like the «I'll do it later» that someone else ends up doing, like not asking your spouse about their day because you are tired.",
          "The Prophet, peace and blessings be upon him and his family, made the home the measure of goodness: «The best of you are the best to their families, and I am the best of you to my family» (Jami' at-Tirmidhi 3895). The goodness people see at work and in the mosque is tested in the kitchen and the children's room.",
          "Practical steps: sit down together once and list all the housework, then pick one fixed job to be yours. Give the children a share according to their ages. Once a week, ask your spouse: what is weighing on you these days? Listen to the answer without defending yourself.",
          "The aim is not an exact split; every home has its circumstances. The aim is that no one rests on another's tiredness when they could help."
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
      title: { ar: "الطابور والطريق", en: "The queue and the road" },
      body: {
        ar: [
          "في الطريق يظهر من الإنسان ما لا يظهر في المجلس: من يزاحم عند الإشارة، ومن يقف في مكان ذوي الإعاقة لأنه «دقيقة واحدة»، ومن يغلق مخرج جاره، ومن يتجاوز الطابور في المخبز لأنه مستعجل.",
          "نهى النبي صلى الله عليه وآله وسلم عن الجلوس في الطرقات، فقال الصحابة إنها مجالسهم لا بد لهم منها، فقال: «فَإِذَا أَبَيْتُمْ إِلاَّ الْمَجَالِسَ فَأَعْطُوا الطَّرِيقَ حَقَّهَا». قالوا: وما حق الطريق؟ قال: «غَضُّ الْبَصَرِ، وَكَفُّ الأَذَى، وَرَدُّ السَّلاَمِ، وَأَمْرٌ بِالْمَعْرُوفِ، وَنَهْىٌ عَنِ الْمُنْكَرِ» (البخاري 2465).",
          "وطريقنا اليوم أوسع من طريقهم وأسرع، وحقه أوسع أيضًا. كفّ الأذى فيه أن تقف حيث لا تعطّل أحدًا، وألا تستعمل البوق في الليل، وألا تقطع على غيرك طريقه لتسبقه بثوانٍ.",
          "والطابور صورة صغيرة من العدل: كل من فيه وقته ثمين مثل وقتك، وحاجته مثل حاجتك. ومن تجاوزه أخذ من وقت الناس ما ليس له، ولو كان دقائق.",
          "خطوات عملية: اخرج قبل موعدك بدقائق حتى لا يدفعك الاستعجال إلى المزاحمة، وقف في آخر الصف ولو رأيت فرجة، ودع سيارة تدخل أمامك مرة في كل مشوار."
        ],
        ar_f: [
          "في الطريق يظهر من الإنسان ما لا يظهر في المجلس: من يزاحم عند الإشارة، ومن يقف في مكان ذوي الإعاقة لأنه «دقيقة واحدة»، ومن يغلق مخرج جاره، ومن يتجاوز الطابور في المخبز لأنه مستعجل.",
          "نهى النبي صلى الله عليه وآله وسلم عن الجلوس في الطرقات، فقال الصحابة إنها مجالسهم لا بد لهم منها، فقال: «فَإِذَا أَبَيْتُمْ إِلاَّ الْمَجَالِسَ فَأَعْطُوا الطَّرِيقَ حَقَّهَا». قالوا: وما حق الطريق؟ قال: «غَضُّ الْبَصَرِ، وَكَفُّ الأَذَى، وَرَدُّ السَّلاَمِ، وَأَمْرٌ بِالْمَعْرُوفِ، وَنَهْىٌ عَنِ الْمُنْكَرِ» (البخاري 2465).",
          "وطريقنا اليوم أوسع من طريقهم وأسرع، وحقه أوسع أيضًا. كفّ الأذى فيه أن تقفي حيث لا تعطّلين أحدًا، وألا تستعملي البوق في الليل، وألا تقطعي على غيرك طريقه لتسبقيه بثوانٍ.",
          "والطابور صورة صغيرة من العدل: كل من فيه وقته ثمين مثل وقتك، وحاجته مثل حاجتك. ومن تجاوزه أخذ من وقت الناس ما ليس له، ولو كان دقائق.",
          "خطوات عملية: اخرجي قبل موعدك بدقائق حتى لا يدفعك الاستعجال إلى المزاحمة، وقفي في آخر الصف ولو رأيتِ فرجة، ودعي سيارة تدخل أمامك مرة في كل مشوار."
        ],
        en: [
          "On the road a person shows what never shows in company: who pushes in at the lights, who parks in a disabled space because it's «just a minute», who blocks a neighbour's driveway, who skips the queue at the bakery because they're in a hurry.",
          "The Prophet, peace and blessings be upon him and his family, forbade sitting in the streets. The Companions said these were their meeting places and they could not do without them. He said: «If you insist on sitting there, then give the road its right.» They asked: what is the road's right? He said: «Lowering the gaze, keeping harm away, returning greetings, enjoining good and forbidding wrong» (Bukhari 2465).",
          "Our roads today are wider and faster than theirs, and their right is wider too. Keeping harm away means stopping where you hold no one up, not using the horn at night, and not cutting across someone to get ahead by a few seconds.",
          "A queue is a small picture of justice: everyone in it values their time as you do yours, and needs what they came for as you do. Whoever skips it takes people's time that isn't theirs, even if only minutes.",
          "Practical steps: leave a few minutes early so that hurry does not push you to shove; stand at the back of the line even if you see a gap; and let one car in ahead of you on every trip."
        ]
      },
      quote: {
        ar: "«غَضُّ الْبَصَرِ، وَكَفُّ الأَذَى، وَرَدُّ السَّلاَمِ، وَأَمْرٌ بِالْمَعْرُوفِ، وَنَهْىٌ عَنِ الْمُنْكَرِ»",
        en: "Meaning (the road's right): Lowering the gaze, keeping harm away, returning greetings, enjoining good and forbidding wrong.",
        ref: "صحيح البخاري 2465، عن أبي سعيد الخدري", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "مقالة مع حديث في صحيح البخاري.", en: "An article with a hadith in Sahih al-Bukhari." }
    },
    {
      id: "ap-r6", minutes: 5, ages: "18+",
      title: { ar: "الغزالي وكسر الشهوتين", en: "Al-Ghazali on breaking the two appetites" },
      body: {
        ar: [
          "في «إحياء علوم الدين» كتاب كامل عنوانه «كتاب كسر الشهوتين»: شهوة البطن، وشهوة الفرج. ويبدأ الغزالي كلامه في شهوة البطن بقوله: «فأعظم المهلكات لابن آدم شهوة البطن، فبها أخرج آدم عليه السلام وحواء من دار القرار إلى دار الذل والافتقار».",
          "ويبيّن الغزالي أن شهوة البطن لا تبقى وحدها: من أطاع بطنه احتاج إلى المال الذي يشبعه، ثم إلى ما يجلب المال، فتجرّه شهوة صغيرة إلى شهوات أكبر منها. ولهذا جعلها أول ما يُعالج.",
          "والعلاج عنده ليس في ترك الطعام ولا في تعذيب الجسد. المحمود في أكثر الناس الاعتدال: أن يأكل فلا يحس بثقل الشبع، ولا يضعفه الجوع عن عبادته وعمله.",
          "ومن طرق تدريب النفس التي يذكرها: التدرّج في تقليل ما زاد عن الحاجة، وتأخير الأكل حتى يصدق الجوع، والصوم الذي يعلّم النفس أنها تستطيع أن تقول لا.",
          "وفي حياتنا اليوم تظهر الشهوتان في صور كثيرة: طعام حاضر في كل وقت، وإعلانات تعدك باللذة، وشاشات تعرض ما لا يحل النظر إليه. والطريق واحد: أن تملك النفس قرارها، فتأخذ ما يحل وما يكفي، وتترك الباقي. وأيسر بداية: صيام الاثنين والخميس، أو أحدهما."
        ],
        en: [
          "The Ihya 'Ulum al-Din has a whole book titled «The Book of Breaking the Two Appetites»: the appetite of the stomach and the appetite of the private parts. Al-Ghazali opens his discussion of the stomach with: «The greatest of the things that destroy the son of Adam is the appetite of the stomach; through it Adam, peace be upon him, and Hawwa were sent out from the abode of permanence to the abode of lowliness and need.»",
          "Al-Ghazali shows that the stomach's appetite does not stay alone: whoever obeys his stomach needs the money to satisfy it, then whatever brings money, so a small appetite drags him to larger ones. That is why he makes it the first thing to treat.",
          "His cure is neither giving up food nor tormenting the body. For most people the praiseworthy way is moderation: to eat so as not to feel the heaviness of fullness, nor be weakened by hunger from worship and work.",
          "Among the ways of training the self he mentions: gradually cutting what goes beyond need, delaying eating until hunger is real, and fasting, which teaches the self that it can say no.",
          "In our lives today both appetites appear in many forms: food available at every hour, advertisements promising pleasure, screens showing what is not lawful to look at. The path is one: for the self to own its decisions, taking what is lawful and enough and leaving the rest. The easiest start is fasting on Mondays and Thursdays, or one of them."
        ]
      },
      quote: {
        ar: "«فأعظم المهلكات لابن آدم شهوة البطن، فبها أخرج آدم عليه السلام وحواء من دار القرار إلى دار الذل والافتقار»",
        en: "Meaning: The greatest of the things that destroy the son of Adam is the appetite of the stomach; through it Adam and Hawwa were sent out from the abode of permanence to the abode of lowliness and need.",
        ref: "إحياء علوم الدين، كتاب كسر الشهوتين", checked: "ar.wikisource.org (إحياء علوم الدين)", verify: true
      },
      source: { ar: "إحياء علوم الدين للغزالي (كتاب كسر الشهوتين)، مع خلاصة لمنهجه في العلاج.", en: "Al-Ghazali's Ihya 'Ulum al-Din (Book of Breaking the Two Appetites), with a summary of his method of cure." }
    },
    {
      id: "ap-r7", summit: true, minutes: 3, ages: "18+",
      title: { ar: "القمة: بيت لم يشبع من خبز البُرّ", en: "The summit: a house that never had its fill of wheat bread" },
      body: {
        ar: [
          "قالت السيدة عائشة: «مَا شَبِعَ آلُ مُحَمَّدٍ» صلى الله عليه وآله وسلم «مُنْذُ قَدِمَ الْمَدِينَةَ مِنْ طَعَامِ الْبُرِّ ثَلاَثَ لَيَالٍ تِبَاعًا، حَتَّى قُبِضَ» (البخاري 5416).",
          "ولم يكن ذلك لأن العطاء لا يصل إلى يده. فقد كان صلى الله عليه وآله وسلم يعطي من يسأله، حتى قال جابر رضي الله عنه إنه ما سُئل شيئًا قط فقال: لا (البخاري 6034). كانت اليد تعطي، والقلب غنيّ عمّا تعطيه.",
          "في هذا الخبر ميزان لمن يملأ بيته وبطنه وخزانته: الشبع الدائم لا يزيد صاحبه قربًا ولا راحة، والغنى الحقيقي في قلب يكتفي ويعطي.",
          "سؤال للتأمل: ما الشيء الذي تأخذ منه أكثر مما تحتاج؟ وماذا يتغير لو أخذت منه ما يكفيك، وأعطيت الباقي؟"
        ],
        ar_f: [
          "قالت السيدة عائشة: «مَا شَبِعَ آلُ مُحَمَّدٍ» صلى الله عليه وآله وسلم «مُنْذُ قَدِمَ الْمَدِينَةَ مِنْ طَعَامِ الْبُرِّ ثَلاَثَ لَيَالٍ تِبَاعًا، حَتَّى قُبِضَ» (البخاري 5416).",
          "ولم يكن ذلك لأن العطاء لا يصل إلى يده. فقد كان صلى الله عليه وآله وسلم يعطي من يسأله، حتى قال جابر رضي الله عنه إنه ما سُئل شيئًا قط فقال: لا (البخاري 6034). كانت اليد تعطي، والقلب غنيّ عمّا تعطيه.",
          "في هذا الخبر ميزان لمن يملأ بيته وبطنه وخزانته: الشبع الدائم لا يزيد صاحبه قربًا ولا راحة، والغنى الحقيقي في قلب يكتفي ويعطي.",
          "سؤال للتأمل: ما الشيء الذي تأخذين منه أكثر مما تحتاجين؟ وماذا يتغير لو أخذتِ منه ما يكفيك، وأعطيتِ الباقي؟"
        ],
        en: [
          "Lady Aisha said: «The family of Muhammad, peace and blessings be upon him and his family, never ate their fill of wheat bread for three nights in a row from the time he came to Medina until he passed away» (Bukhari 5416).",
          "It was not that gifts never reached his hand. He gave to whoever asked him, so that Jabir, may Allah be pleased with him, said he was never asked for anything and answered no (Bukhari 6034). The hand gave, and the heart had no need of what it gave.",
          "This report holds a measure for anyone filling their home, stomach and wardrobe: constant fullness brings its owner neither nearness nor rest; true wealth lies in a heart that is content and gives.",
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
          "في هذا المشهد علاج سمات هذه المرحلة كلها. سعد يقدّم أخاه على نفسه في أحب ما يملك، وهذا ضد «أنا أولًا». وعبد الرحمن يُعرض عن مال حاضر لا تعب فيه، وهذا ضد الشره. ثم يطلب السوق ليعمل بيده، وهذا ضد الكسل.",
          "ولم يرَ أحدهما في موقف الآخر عيبًا: الكرم لم يُذلّ عبد الرحمن، والعفة لم تجرح سعدًا. دعا له بالبركة، وانصرف إلى رزقه.",
          "سؤال للتأمل: أين تقف أنت اليوم من هذا المشهد؟ هل تعطي من مالك ووقتك كما أعطى سعد؟ وهل تكفّ يدك عمّا لا تحتاج إليه، وتسعى في رزقك كما فعل عبد الرحمن؟"
        ],
        ar_f: [
          "روى أنس رضي الله عنه أن عبد الرحمن بن عوف رضي الله عنه قدم المدينة مهاجرًا لا مال معه، فآخى النبي صلى الله عليه وآله وسلم بينه وبين سعد بن الربيع الأنصاري رضي الله عنه، وكان سعد ذا غنى.",
          "فقال سعد لأخيه الجديد: «أُقَاسِمُكَ مَالِي نِصْفَيْنِ، وَأُزَوِّجُكَ». فأجابه عبد الرحمن: «بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ، دُلُّونِي عَلَى السُّوقِ» (البخاري 2049). فذهب إلى السوق، فما رجع حتى ربح شيئًا من أقط وسمن، وجاء به إلى أهل منزله.",
          "في هذا المشهد علاج سمات هذه المرحلة كلها. سعد يقدّم أخاه على نفسه في أحب ما يملك، وهذا ضد «أنا أولًا». وعبد الرحمن يُعرض عن مال حاضر لا تعب فيه، وهذا ضد الشره. ثم يطلب السوق ليعمل بيده، وهذا ضد الكسل.",
          "ولم يرَ أحدهما في موقف الآخر عيبًا: الكرم لم يُذلّ عبد الرحمن، والعفة لم تجرح سعدًا. دعا له بالبركة، وانصرف إلى رزقه.",
          "سؤال للتأمل: أين تقفين أنتِ اليوم من هذا المشهد؟ هل تعطين من مالك ووقتك كما أعطى سعد؟ وهل تكفّين يدك عمّا لا تحتاجين إليه، وتسعين في رزقك كما فعل عبد الرحمن؟"
        ],
        en: [
          "Anas, may Allah be pleased with him, reported that Abd al-Rahman ibn Awf, may Allah be pleased with him, arrived in Medina as an emigrant with nothing. The Prophet, peace and blessings be upon him and his family, made him a brother of Sa'd ibn al-Rabi' al-Ansari, may Allah be pleased with him, who was a man of means.",
          "Sa'd said to his new brother: «I will divide my wealth with you in two halves, and arrange a marriage for you.» Abd al-Rahman answered: «May Allah bless you in your family and your wealth; show me the market» (Bukhari 2049). He went to the market, and did not return until he had earned some dried curd and ghee, which he brought to the people of his house.",
          "This scene holds the cure for every trait of this stage. Sa'd puts his brother before himself in what he holds dearest: the opposite of «me first». Abd al-Rahman turns away from wealth that is there for the taking without effort: the opposite of greed. Then he asks for the market so he can work with his own hands: the opposite of laziness.",
          "Neither saw any fault in the other's stance: the generosity did not humiliate Abd al-Rahman, and the restraint did not wound Sa'd. He prayed for blessing on him, and went off to earn his living.",
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
      q: { ar: "أين يكون الغنى بحسب الحديث الذي في قصة دينا؟", en: "According to the hadith in Dina's story, where does wealth lie?" },
      options: [
        { ar: "في كثرة ما يملكه الإنسان", en: "In how much a person owns" },
        { ar: "في غنى النفس", en: "In the richness of the soul" },
        { ar: "في الدخل الشهري الجيد", en: "In a good monthly income" }
      ],
      why: { ar: "«لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ، وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ».", en: "«Wealth is not an abundance of goods; wealth is the richness of the soul.»" }
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
        { ar: "أشتري مرة في الأسبوع بدل كل يوم، وأشتري أكثر", en: "Buy once a week instead of every day, but buy more" },
        { ar: "أترك الأمر، فمالي حلال وأنا حر فيه", en: "Leave it; my money is lawful and I can do as I like" }
      ],
      why: { ar: "تغيير المكان والمهلة قبل الشراء يكسر حلقة الشراء للترويح، ويترك في المال مكانًا للصدقة.", en: "Changing the setting and waiting before buying break the cycle of shopping to unwind, and leave room in the budget for charity." }
    },
    {
      id: "ap-q3", readingId: "ap-r2", type: "comprehension", correct: 2,
      q: { ar: "ما المقصود من حديث الأثلاث في الطعام؟", en: "What is the point of the hadith of the thirds in eating?" },
      options: [
        { ar: "أن يحسب الإنسان طعامه بالميزان", en: "That one should weigh one's food" },
        { ar: "أن يأكل وجبة واحدة في اليوم", en: "That one should eat one meal a day" },
        { ar: "أن يبقى في الجسد متّسع للنَّفَس والخفة والعبادة", en: "That there should be room left in the body for breath, lightness and worship" }
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
      q: { ar: "ما الميزان الذي وضعه النبي صلى الله عليه وآله وسلم للخيرية في حديث الترمذي؟", en: "What measure of goodness did the Prophet give in the hadith in at-Tirmidhi?" },
      options: [
        { ar: "كثرة العبادة في المسجد", en: "Much worship in the mosque" },
        { ar: "أن يكون الإنسان خيرًا لأهله", en: "Being good to one's family" },
        { ar: "النجاح في العمل", en: "Success at work" }
      ],
      why: { ar: "«خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ»: البيت أول ما يُختبر فيه الخلق.", en: "«The best of you are the best to their families»: the home is the first place character is tested." }
    },
    {
      id: "ap-q7", readingId: "ap-r4", type: "situation", correct: 2,
      q: {
        ar: "تلاحظ أن الطرف الآخر في البيت صار يغضب من أشياء صغيرة. ما الخطوة التي تقترحها المقالة؟",
        ar_f: "تلاحظين أن الطرف الآخر في البيت صار يغضب من أشياء صغيرة. ما الخطوة التي تقترحها المقالة؟",
        en: "You notice your spouse has started getting angry over small things. Which step does the article suggest?"
      },
      options: [
        { ar: "أتجنب الكلام حتى يهدأ", en: "Avoid talking until things calm down" },
        { ar: "أشرح أنني متعب أيضًا", ar_f: "أشرح أنني متعبة أيضًا", en: "Explain that I am tired too" },
        { ar: "أسأل: ما الذي يثقل عليك هذه الأيام؟ وأسمع، وآخذ عملًا ثابتًا في البيت", en: "Ask what is weighing on them these days, listen, and take on a fixed job at home" }
      ],
      why: { ar: "الغضب من الصغير كثيرًا ما يكون تعبًا متراكمًا. والسؤال والمشاركة يخففانه قبل أن يصير خلافًا.", en: "Anger over small things is often built-up tiredness. Asking and sharing the load ease it before it becomes a quarrel." }
    },
    {
      id: "ap-q8", readingId: "ap-r5", type: "comprehension", correct: 0,
      q: { ar: "أيٌّ مما يلي من حق الطريق في حديث البخاري؟", en: "Which of these is among the road's rights in the hadith in al-Bukhari?" },
      options: [
        { ar: "كفّ الأذى", en: "Keeping harm away" },
        { ar: "السرعة في الوصول", en: "Getting there quickly" },
        { ar: "الوقوف أقرب ما يكون إلى الباب", en: "Parking as close to the door as possible" }
      ],
      why: { ar: "حق الطريق: غض البصر، وكف الأذى، ورد السلام، والأمر بالمعروف، والنهي عن المنكر.", en: "The road's right: lowering the gaze, keeping harm away, returning greetings, enjoining good and forbidding wrong." }
    },
    {
      id: "ap-q9", readingId: "ap-r6", type: "comprehension", correct: 1,
      q: { ar: "لماذا جعل الغزالي شهوة البطن أول ما يُعالج؟", en: "Why did al-Ghazali make the stomach's appetite the first thing to treat?" },
      options: [
        { ar: "لأن الطعام مذموم في ذاته", en: "Because food is blameworthy in itself" },
        { ar: "لأنها تجرّ إلى شهوات أكبر منها، كالحرص على المال", en: "Because it drags a person into larger appetites, such as craving money" },
        { ar: "لأنها أسهل الشهوات", en: "Because it is the easiest appetite" }
      ],
      why: { ar: "من أطاع بطنه احتاج إلى ما يشبعه، ثم إلى ما يجلبه، فتكبر الشهوة الصغيرة.", en: "Whoever obeys his stomach needs what satisfies it, then what brings that, and the small appetite grows." }
    },
    {
      id: "ap-q10", readingId: "ap-r7", type: "comprehension", correct: 2,
      q: { ar: "ماذا يدل عليه خبر بيت النبي صلى الله عليه وآله وسلم الذي لم يشبع من خبز البُرّ؟", en: "What does the report of the Prophet's household never having its fill of wheat bread show?" },
      options: [
        { ar: "أنه لم يكن يصل إليه مال", en: "That no wealth ever reached him" },
        { ar: "أن الطعام الطيب حرام", en: "That good food is forbidden" },
        { ar: "أن الغنى في القلب الذي يكتفي ويعطي", en: "That wealth lies in a heart that is content and gives" }
      ],
      why: { ar: "كان يعطي من يسأله، ولم يكن الشبع غايته. الغنى غنى القلب.", en: "He gave to whoever asked, and fullness was never his aim. Wealth is the heart's wealth." }
    },
    {
      id: "ap-q11", readingId: "ap-r8", type: "comprehension", correct: 0,
      q: { ar: "بماذا أجاب عبد الرحمن بن عوف حين عرض عليه سعد نصف ماله؟", en: "How did Abd al-Rahman ibn Awf answer when Sa'd offered him half his wealth?" },
      options: [
        { ar: "دعا له بالبركة، وطلب أن يدلّوه على السوق", en: "He prayed for blessing on him and asked to be shown the market" },
        { ar: "قبل المال، ووعده أن يردّه", en: "He accepted the money and promised to repay it" },
        { ar: "طلب المال كله", en: "He asked for all of it" }
      ],
      why: { ar: "«بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ، دُلُّونِي عَلَى السُّوقِ»: عفة عن الأخذ، وسعي إلى العمل.", en: "«May Allah bless you in your family and your wealth; show me the market»: restraint from taking, and going out to work." }
    },
    {
      id: "ap-q12", readingId: "ap-r5", type: "situation", correct: 1,
      q: {
        ar: "تأخرت عن موعد، ورأيت فرجة تتيح لك تجاوز صف السيارات عند الإشارة. ما الأقرب إلى حق الطريق؟",
        ar_f: "تأخرتِ عن موعد، ورأيتِ فرجة تتيح لك تجاوز صف السيارات عند الإشارة. ما الأقرب إلى حق الطريق؟",
        en: "You are late for an appointment and see a gap that would let you skip the line of cars at the lights. What is closest to the road's right?"
      },
      options: [
        { ar: "أدخل منها، فأنا متأخر", ar_f: "أدخل منها، فأنا متأخرة", en: "Take it; I'm late" },
        { ar: "أبقى في دوري، وأخبر من ينتظرني أنني سأتأخر قليلًا", en: "Keep my place, and let the person waiting know I'll be a little late" },
        { ar: "أستعمل البوق حتى يفسحوا لي", en: "Use the horn until they make way" }
      ],
      why: { ar: "استعجالك لا يجعل وقتك أثمن من وقت غيرك. وكفّ الأذى من حق الطريق.", en: "Your hurry does not make your time worth more than others'. Keeping harm away is the road's right." }
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
          "بدأت سهى هذا العام ثلاث دورات على الإنترنت: في التصميم، وفي اللغة، وفي الطبخ. ولم تكمل منها واحدة.",
          "كانت كلما رأت دورة جديدة أعجبتها اشتركت فيها، ثم تركتها عند أول درس صعب.",
          "فكتبت الدورات الثلاث على ورقة، واختارت واحدة، وقررت ألا تفتح غيرها حتى تنهيها. وبعد شهرين علّقت شهادتها الأولى فوق مكتبها."
        ],
        en: [
          "This year Suha started three online courses: in design, in a language, and in cooking. She finished none of them.",
          "Whenever she saw a new course she liked, she signed up, then dropped it at the first hard lesson.",
          "So she wrote the three courses on a sheet of paper, chose one, and decided not to open any other until she had finished it. Two months later she hung her first certificate above her desk."
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
          { ar: "أرد على الرسائل أولًا حتى أرتاح منها", en: "Answer the messages first to get them out of the way" },
          { ar: "أكتم الإشعارات ساعة، وأنهي جزءًا من العرض، ثم أنظر في الرسائل", en: "Mute notifications for an hour, finish part of the presentation, then look at the messages" },
          { ar: "أكتب سطرًا وأرد على رسالة، بالتناوب", en: "Write a line, answer a message, and alternate" }
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
        ar: "الكلام قبل الاستماع، والرد قبل الفهم، والمضيّ في الأمر دون وقفة: لا يتوقف ليسمع، ولا ليتأكد، ولا ليراجع.",
        en: "Speaking before listening, replying before understanding, pressing on without a pause: never stopping to hear, to check, or to think again."
      },
      looks: {
        ar: "تقاطع زوجتك قبل أن تنهي جملتها لأنك عرفت ما ستقول، وتكتب ردًّا طويلًا في مجموعة العائلة على رسالة لم تقرأها كاملة.",
        ar_f: "تقاطعين زوجك قبل أن ينهي جملته لأنكِ عرفتِ ما سيقول، وتكتبين ردًّا طويلًا في مجموعة العائلة على رسالة لم تقرئيها كاملة.",
        en: "You interrupt your spouse before they finish their sentence because you know what they will say, and you write a long reply in the family group to a message you didn't read to the end."
      },
      story: {
        ar: [
          "في اجتماع القسم كان فراس يقاطع كل من يتكلم: «فهمتك، فهمتك»، ثم يعرض فكرته.",
          "وفي آخر الاجتماع تبيّن أن زميله كان يقترح الحل نفسه الذي يدافع عنه فراس، لكنه لم يدعه يكمل.",
          "في الاجتماع التالي وضع فراس أمامه ورقة، يكتب فيها ما يريد قوله وينتظر حتى ينتهي المتكلم. وقال له زميله بعدها: هذه أول مرة أشعر أنك سمعتني."
        ],
        en: [
          "In department meetings Firas interrupted everyone who spoke: «I get it, I get it», then put forward his own idea.",
          "At the end of one meeting it turned out that his colleague had been proposing the very solution Firas was arguing for, but Firas had not let him finish.",
          "At the next meeting Firas put a sheet of paper in front of him, wrote down what he wanted to say, and waited until the speaker had finished. Afterwards his colleague told him: this is the first time I've felt you heard me."
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
          { ar: "أعيد توجيهها، فقد ينتفع بها أحد", en: "Forward it; someone might benefit" },
          { ar: "لا أنشرها حتى أتحقق من مصدر موثوق، وأكتب لخالتي بلطف أن الخبر غير مؤكد", en: "Don't share it until I check a reliable source, and gently tell my aunt it isn't confirmed" },
          { ar: "أكتب ردًّا ساخرًا في المجموعة", en: "Post a mocking reply in the group" }
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
          "وفي يوم كان ابنه في المقعد الخلفي، فسمعه بعد أيام يصرخ على أخيه الصغير بالكلمات نفسها.",
          "من يومها جعل باسل لنفسه قاعدة في السيارة: إذا غضب قال «أعوذ بالله من الشيطان الرجيم» وسكت حتى الإشارة التالية. وصار ابنه يذكّره بها إذا نسي."
        ],
        en: [
          "Basil was calm at work, but on the road he changed: he shouted at every driver who made a mistake and waved his hand out of the window.",
          "One day his son was in the back seat, and a few days later Basil heard him shouting at his little brother with the very same words.",
          "From then on Basil kept a rule in the car: when he got angry he said «I seek refuge in Allah from Satan the accursed» and stayed silent until the next traffic light. His son now reminds him when he forgets."
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
        en: "Keep the Prophet's counsel before your eyes. A man said to him: advise me. He said: «Do not get angry.» The man repeated his request several times, and each time he said: «Do not get angry» (Bukhari 6116)."
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
          { ar: "أصرخ عليه حتى لا يكررها", en: "Shout at him so he won't do it again" },
          { ar: "أسكت قليلًا وأبتعد حتى أهدأ، ثم أكلمه بهدوء عن الحرص على أغراض الناس", en: "Go quiet and step away until I am calm, then talk to him calmly about taking care of other people's things" },
          { ar: "أمنعه من اللعب شهرًا كاملًا", en: "Ban him from playing for a whole month" }
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
          "وفي آخر اليوم يعرف أنه لم يعمل على شيء. كل تبويب يذكّره بعمل ناقص، والذهن ينتقل بينها كما ينتقل من غصن إلى غصن، ولا يستقر على واحد.",
          "في القرآن آية جاءت في سياق آخر، لكنها تذكّر بحقيقة الإنسان: ﴿مَا جَعَلَ اللَّهُ لِرَجُلٍ مِنْ قَلْبَيْنِ فِي جَوْفِهِ﴾ (الأحزاب 33:4). للإنسان قلب واحد، وانتباه واحد، وما يوزّعه على عشرين أمرًا يأخذ كل أمر منه قليلًا.",
          "وكل انتقال من عمل إلى عمل له ثمن: يحتاج الذهن وقتًا ليعود إلى ما كان فيه، فتضيع في الانتقالات ساعات لا يراها صاحبها.",
          "خطوات عملية: أغلق كل تبويب لا يحتاج إليه عملك الآن، واكتب ما تخاف أن تنساه على ورقة بدل أن تتركه مفتوحًا. اعمل على أمر واحد وقتًا متصلًا، ثم انتقل. وفي آخر اليوم، أتمّ شيئًا واحدًا، ولو صغيرًا، قبل أن تغلق الحاسوب."
        ],
        ar_f: [
          "على حاسوب أيمن عشرون تبويبًا مفتوحًا: بريد، ومقال لم يكمله، وفاتورة لم يدفعها، وسيارة يفكر في شرائها، ودرس بدأه قبل أسبوعين. يقول إنه يعمل على كل شيء في وقت واحد.",
          "وفي آخر اليوم يعرف أنه لم يعمل على شيء. كل تبويب يذكّره بعمل ناقص، والذهن ينتقل بينها كما ينتقل من غصن إلى غصن، ولا يستقر على واحد.",
          "في القرآن آية جاءت في سياق آخر، لكنها تذكّر بحقيقة الإنسان: ﴿مَا جَعَلَ اللَّهُ لِرَجُلٍ مِنْ قَلْبَيْنِ فِي جَوْفِهِ﴾ (الأحزاب 33:4). للإنسان قلب واحد، وانتباه واحد، وما يوزّعه على عشرين أمرًا يأخذ كل أمر منه قليلًا.",
          "وكل انتقال من عمل إلى عمل له ثمن: يحتاج الذهن وقتًا ليعود إلى ما كان فيه، فتضيع في الانتقالات ساعات لا يراها صاحبها.",
          "خطوات عملية: أغلقي كل تبويب لا يحتاج إليه عملك الآن، واكتبي ما تخافين أن تنسيه على ورقة بدل أن تتركيه مفتوحًا. اعملي على أمر واحد وقتًا متصلًا، ثم انتقلي. وفي آخر اليوم، أتمّي شيئًا واحدًا، ولو صغيرًا، قبل أن تغلقي الحاسوب."
        ],
        en: [
          "Ayman has twenty tabs open on his computer: email, an article he never finished, a bill he hasn't paid, a car he is thinking of buying, a lesson he started two weeks ago. He says he is working on everything at once.",
          "At the end of the day he knows he has worked on nothing. Every tab reminds him of something unfinished, and his mind jumps between them as from branch to branch, settling on none.",
          "There is a verse in the Quran that came in another context, yet it reminds us of something true of every person, meaning: Allah has not placed two hearts inside any man (al-Ahzab 33:4). A person has one heart and one attention, and whatever is spread across twenty things gives each of them little.",
          "Every switch from one task to another has a cost: the mind needs time to return to where it was, and hours are lost in the switching that their owner never sees.",
          "Practical steps: close every tab your current work doesn't need, and write down on paper whatever you fear forgetting instead of leaving it open. Work on one thing for an unbroken stretch, then move on. At the end of the day, finish one thing, however small, before you shut the computer."
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
          "خطوات عملية: دع المتكلم ينهي كلامه كله. أعد عليه ما فهمته في جملة: «تقصد أن...». واسأل قبل أن تنصح: «تريد رأيي، أم تريد أن أسمعك؟». وفي الاجتماعات اكتب فكرتك على ورقة بدل أن تقطع بها كلام غيرك."
        ],
        ar_f: [
          "عادت منى من عملها مهمومة، وبدأت تحكي لزوجها زياد عن خلاف مع مديرتها. وقبل أن تكمل الجملة الثانية قال زياد: «لا تهتمي، اكتبي لها رسالة واضحة، أو ابحثي عن عمل آخر».",
          "سكتت منى، ثم قالت: «لم أطلب حلًّا يا زياد، أردت أن تسمعني». واستغرب زياد، فقد ظن أنه يساعدها.",
          "كثير منا يسمع ليرد، لا ليفهم. يبدأ تحضير الجواب والآخر ما زال يتكلم، فيقاطعه، أو يكمل جملته عنه، أو يقفز إلى نصيحة لم تُطلب. والقرآن يأمر بأحسن القول، ويحذّر مما يفعله الكلام السيئ بين الناس: ﴿وَقُلْ لِعِبَادِي يَقُولُوا الَّتِي هِيَ أَحْسَنُ ۚ إِنَّ الشَّيْطَانَ يَنْزَغُ بَيْنَهُمْ﴾ (الإسراء 17:53).",
          "والمقاطعة من أسرع ما يفتح باب هذا النزغ: يشعر المقاطَع أنه غير مهم، فيرفع صوته، ويتحول الحديث إلى خصام.",
          "خطوات عملية: دعي المتكلم ينهي كلامه كله. أعيدي عليه ما فهمتِه في جملة: «تقصد أن...». واسألي قبل أن تنصحي: «تريد رأيي، أم تريد أن أسمعك؟». وفي الاجتماعات اكتبي فكرتك على ورقة بدل أن تقطعي بها كلام غيرك."
        ],
        en: [
          "Mona came home from work troubled and began telling her husband Ziyad about a disagreement with her manager. Before she had finished her second sentence Ziyad said: «Don't worry about it; write her a clear message, or look for another job.»",
          "Mona fell silent, then said: «I didn't ask for a solution, Ziyad. I wanted you to listen.» Ziyad was surprised; he had thought he was helping.",
          "Many of us listen in order to reply, not to understand. We start preparing the answer while the other is still talking, so we interrupt, finish their sentence for them, or jump to advice nobody asked for. The Quran commands the best speech and warns of what bad words do between people, meaning: tell My servants to say what is best; Satan sows discord among them (al-Isra 17:53).",
          "Interrupting is one of the quickest ways to open the door to that discord: the person cut off feels unimportant, raises their voice, and the conversation turns into a quarrel.",
          "Practical steps: let the speaker finish everything. Sum up what you understood in one sentence: «You mean that...». Ask before advising: «Do you want my opinion, or do you want me to listen?» In meetings, write your idea on paper instead of cutting into someone else's words with it."
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
          "قال النبي صلى الله عليه وآله وسلم: «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ» (البخاري 6114). القوة ليست في أن تغلب الآخر، بل في أن تغلب ما يشتعل فيك.",
          "وعلّم النبي صلى الله عليه وآله وسلم دواء الغضب. استبّ رجلان عنده، وقد احمرّ وجه أحدهما، فقال: «إِنِّي لأَعْلَمُ كَلِمَةً لَوْ قَالَهَا لَذَهَبَ عَنْهُ مَا يَجِدُ لَوْ قَالَ أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ» (البخاري 6115).",
          "خطوات عملية: اخرج قبل موعدك بدقائق، فالاستعجال وقود الغضب. وإذا أخطأ أحد في حقك على الطريق فقل الاستعاذة، وخفّف السرعة، ولا تلحق به. وتذكّر أن السائق الآخر قد يكون مسرعًا إلى مستشفى، أو أبًا متعبًا، أو مخطئًا كما تخطئ أنت أحيانًا."
        ],
        ar_f: [
          "كان نادر متأخرًا عن اجتماع، فدخلت سيارة أمامه فجأة. ضغط البوق طويلًا، ولحق بها، وأنزل زجاج النافذة وصاح. وحين وقفت السيارتان عند الإشارة رأى في المقعد الخلفي للسيارة الأخرى طفلًا خائفًا ينظر إليه.",
          "وصل نادر إلى الاجتماع وقلبه يخفق، ولم يستطع أن يركّز فيه. وطوال اليوم كانت صورة الطفل تعود إليه.",
          "قال النبي صلى الله عليه وآله وسلم: «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ» (البخاري 6114). القوة ليست في أن تغلب الآخر، بل في أن تغلب ما يشتعل فيك.",
          "وعلّم النبي صلى الله عليه وآله وسلم دواء الغضب. استبّ رجلان عنده، وقد احمرّ وجه أحدهما، فقال: «إِنِّي لأَعْلَمُ كَلِمَةً لَوْ قَالَهَا لَذَهَبَ عَنْهُ مَا يَجِدُ لَوْ قَالَ أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ» (البخاري 6115).",
          "خطوات عملية: اخرجي قبل موعدك بدقائق، فالاستعجال وقود الغضب. وإذا أخطأ أحد في حقك على الطريق فقولي الاستعاذة، وخفّفي السرعة، ولا تلحقي به. وتذكّري أن السائق الآخر قد يكون مسرعًا إلى مستشفى، أو أبًا متعبًا، أو مخطئًا كما تخطئين أنتِ أحيانًا."
        ],
        en: [
          "Nader was late for a meeting when a car suddenly pulled in front of him. He leaned on the horn, chased it, rolled down his window and shouted. When the two cars stopped at the lights he saw a frightened child in the back seat of the other car, looking at him.",
          "Nader reached the meeting with his heart pounding and could not concentrate. All day the picture of that child kept coming back to him.",
          "The Prophet, peace and blessings be upon him and his family, said: «The strong one is not the one who wrestles others down; the strong one is he who controls himself when angry» (Bukhari 6114). Strength is not in overpowering the other, but in overpowering what flares up inside you.",
          "The Prophet also taught the remedy for anger. Two men were insulting each other in his presence, and one had gone red in the face. He said, in meaning: I know a phrase which, if he said it, what he feels would leave him: if he said, I seek refuge in Allah from Satan the accursed (Bukhari 6115).",
          "Practical steps: leave a few minutes early, for hurry is the fuel of anger. If someone wrongs you on the road, say the words of refuge, slow down, and don't chase them. Remember that the other driver may be rushing to a hospital, or be a tired parent, or simply be wrong, as you are sometimes."
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
          "قالت السيدة عائشة إن النبي صلى الله عليه وآله وسلم قال: «إِنَّ الرِّفْقَ لاَ يَكُونُ فِي شَىْءٍ إِلاَّ زَانَهُ وَلاَ يُنْزَعُ مِنْ شَىْءٍ إِلاَّ شَانَهُ» (صحيح مسلم 2594). والصراخ ينزع الرفق من البيت، ويعلّم الأولاد أن الصوت العالي طريقة لحل المشكلات.",
          "وأكثر الغضب على الأولاد لا يأتي من خطئهم، بل من ضغط سابق: استعجال، أو تعب، أو همّ من العمل. ومن عرف ذلك عرف أين يبدأ العلاج.",
          "خطوات عملية: حضّر في الليل ما تستطيع: الملابس والحقائب والإفطار. وإذا شعرت بالصوت يرتفع فانزل إلى مستوى الطفل، وتكلم بصوت أخفض مما تريد. وإن صرخت فاعتذر إليه بعد أن تهدأ، فالاعتذار للصغير درس لا ينساه."
        ],
        ar_f: [
          "الساعة السابعة صباحًا. سلمى تحضّر الإفطار، وتبحث عن حذاء ابنها، وتذكّر ابنتها بكتاب نسيته، والحافلة بعد عشر دقائق. وحين سكب الصغير الحليب على قميصه المدرسي صرخت بصوت سمعه الجيران.",
          "ركب الأولاد الحافلة صامتين. وجلست سلمى في المطبخ تشعر بثقل، وتعرف أن الحليب لم يكن السبب، وأن الصباح المزدحم كان يغلي فيها قبل أن يُسكب.",
          "قالت السيدة عائشة إن النبي صلى الله عليه وآله وسلم قال: «إِنَّ الرِّفْقَ لاَ يَكُونُ فِي شَىْءٍ إِلاَّ زَانَهُ وَلاَ يُنْزَعُ مِنْ شَىْءٍ إِلاَّ شَانَهُ» (صحيح مسلم 2594). والصراخ ينزع الرفق من البيت، ويعلّم الأولاد أن الصوت العالي طريقة لحل المشكلات.",
          "وأكثر الغضب على الأولاد لا يأتي من خطئهم، بل من ضغط سابق: استعجال، أو تعب، أو همّ من العمل. ومن عرف ذلك عرف أين يبدأ العلاج.",
          "خطوات عملية: حضّري في الليل ما تستطيعين: الملابس والحقائب والإفطار. وإذا شعرتِ بالصوت يرتفع فانزلي إلى مستوى الطفل، وتكلمي بصوت أخفض مما تريدين. وإن صرختِ فاعتذري إليه بعد أن تهدئي، فالاعتذار للصغير درس لا ينساه."
        ],
        en: [
          "Seven in the morning. Salma is making breakfast, hunting for her son's shoe, reminding her daughter of a book she forgot, and the bus comes in ten minutes. When the youngest spills milk on his school shirt she shouts loud enough for the neighbours to hear.",
          "The children get on the bus in silence. Salma sits in the kitchen feeling heavy, knowing the milk wasn't the cause, that the crowded morning had been boiling inside her before anything was spilled.",
          "Lady Aisha reported that the Prophet, peace and blessings be upon him and his family, said: «Gentleness is not in anything except that it adorns it, and it is not removed from anything except that it disfigures it» (Sahih Muslim 2594). Shouting removes gentleness from a home, and teaches children that a loud voice is the way to solve problems.",
          "Most anger at children does not come from their mistakes but from pressure already there: hurry, tiredness, or worry from work. Whoever knows that knows where the cure begins.",
          "Practical steps: prepare what you can the night before: clothes, bags, breakfast. When you feel your voice rising, get down to the child's level and speak more softly than you want to. If you do shout, apologise once you are calm, for an apology to a little one is a lesson they never forget."
        ]
      },
      quote: {
        ar: "«إِنَّ الرِّفْقَ لاَ يَكُونُ فِي شَىْءٍ إِلاَّ زَانَهُ وَلاَ يُنْزَعُ مِنْ شَىْءٍ إِلاَّ شَانَهُ»",
        en: "Meaning: Gentleness is not in anything except that it adorns it, and it is not removed from anything except that it disfigures it.",
        ref: "صحيح مسلم 2594 (ترقيم sunnah.com: الكتاب 45، الحديث 100)، عن عائشة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع حديث في صحيح مسلم.", en: "An original story with fictional characters, with a hadith in Sahih Muslim." }
    },
    {
      id: "am-r5", minutes: 4, ages: "18+",
      title: { ar: "قبل أن تضغط «إعادة توجيه»", en: "Before you press «forward»" },
      body: {
        ar: [
          "في مجموعات المحادثة تنتقل الأخبار أسرع من أي وقت مضى: تحذير من دواء، وخبر وفاة، وصورة لحادث، وكلام منسوب إلى عالم أو طبيب. يكفي ضغطة واحدة لتصل الرسالة إلى مئات الناس، وأكثرهم لا يسأل: من قال هذا؟",
          "والقرآن وضع لهذا قاعدة واضحة قبل أن تُخترع الهواتف: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَنْ تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُمْ نَادِمِينَ﴾ (الحجرات 49:6).",
          "في الآية سبب الأمر ونتيجة تركه: من نقل ما لم يتبيّنه قد يصيب قومًا بجهالة، فيُتّهم بريء، أو يُصدَّق علاج كاذب، أو يُنشر خوف لا أصل له. ثم يأتي الندم بعد أن يكون الخبر قد طار.",
          "والرد قبل الفهم مثل النقل قبل التبيّن: يقرأ أحدنا أول سطر من رسالة طويلة، فيرد غاضبًا على ما لم يُقل، ويتحول النقاش في المجموعة إلى خلاف بين الأقارب.",
          "خطوات عملية: اقرأ الرسالة كاملة قبل أن ترد. اسأل عن مصدرها، وابحث عنه إن استطعت. وإن لم تعرف صحتها فلا تنقلها، ويكفيك أن تسكت. وإذا كتبت ردًّا وأنت منفعل فاتركه دقائق قبل أن ترسله."
        ],
        ar_f: [
          "في مجموعات المحادثة تنتقل الأخبار أسرع من أي وقت مضى: تحذير من دواء، وخبر وفاة، وصورة لحادث، وكلام منسوب إلى عالم أو طبيب. يكفي ضغطة واحدة لتصل الرسالة إلى مئات الناس، وأكثرهم لا يسأل: من قال هذا؟",
          "والقرآن وضع لهذا قاعدة واضحة قبل أن تُخترع الهواتف: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَنْ تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُمْ نَادِمِينَ﴾ (الحجرات 49:6).",
          "في الآية سبب الأمر ونتيجة تركه: من نقل ما لم يتبيّنه قد يصيب قومًا بجهالة، فيُتّهم بريء، أو يُصدَّق علاج كاذب، أو يُنشر خوف لا أصل له. ثم يأتي الندم بعد أن يكون الخبر قد طار.",
          "والرد قبل الفهم مثل النقل قبل التبيّن: يقرأ أحدنا أول سطر من رسالة طويلة، فيرد غاضبًا على ما لم يُقل، ويتحول النقاش في المجموعة إلى خلاف بين الأقارب.",
          "خطوات عملية: اقرئي الرسالة كاملة قبل أن تردي. اسألي عن مصدرها، وابحثي عنه إن استطعتِ. وإن لم تعرفي صحتها فلا تنقليها، ويكفيك أن تسكتي. وإذا كتبتِ ردًّا وأنتِ منفعلة فاتركيه دقائق قبل أن ترسليه."
        ],
        en: [
          "In group chats news travels faster than ever: a warning about a medicine, a death announcement, a photo of an accident, words attributed to a scholar or a doctor. One tap is enough for a message to reach hundreds of people, most of whom never ask: who said this?",
          "The Quran set a clear rule for this long before phones were invented, meaning: O you who believe, if a wrongdoer brings you news, verify it, lest you harm a people out of ignorance and then regret what you have done (al-Hujurat 49:6).",
          "The verse gives both the reason for the command and the result of ignoring it: whoever passes on what they have not verified may harm people out of ignorance, so that an innocent person is accused, a false cure is believed, or baseless fear is spread. Regret comes after the story has already flown.",
          "Replying before understanding is like passing on before verifying: we read the first line of a long message, reply angrily to something that was never said, and the discussion in the group turns into a quarrel between relatives.",
          "Practical steps: read the whole message before you reply. Ask where it comes from, and look it up if you can. If you don't know whether it is true, don't pass it on; silence is enough. And if you write a reply while upset, leave it for a few minutes before you send it."
        ]
      },
      quote: {
        ar: "﴿يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَنْ تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُمْ نَادِمِينَ﴾",
        en: "Meaning (not a translation): O you who believe, if a wrongdoer brings you news, verify it, lest you harm a people out of ignorance and then regret what you have done.",
        ref: "الحجرات 49:6", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "مقالة مع آية من سورة الحجرات.", en: "An article with a verse from al-Hujurat." }
    },
    {
      id: "am-r6", minutes: 4, ages: "18+",
      title: { ar: "ما يفعله الجميع", en: "What everyone is doing" },
      body: {
        ar: [
          "رأى عادل على هاتفه صديقًا قديمًا يسافر كل شهر، ويصوّر مطاعم فاخرة وسيارة جديدة. وبعد أسابيع كان قد غيّر سيارته بقرض، وحجز رحلة لا تحتملها ميزانيته، وصار يصوّر كل ما يأكل.",
          "ولم يشعر بالسعادة التي رآها في الصور. شعر بالقلق من القسط، وبالتعب من الحرص على أن تبدو حياته جميلة لمن يتابعه.",
          "التقليد في ذاته ليس عيبًا، فالإنسان يتعلم بالاقتداء. لكن التقليد الأعمى يأخذ ما يراه دون أن يسأل: هل هذا صحيح؟ وهل يناسبني؟ وهل أعرف ما وراء الصورة؟ والقرآن يحذّر من اتباع ما لا علم للإنسان به: ﴿وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ ۚ إِنَّ السَّمْعَ وَالْبَصَرَ وَالْفُؤَادَ كُلُّ أُولَٰئِكَ كَانَ عَنْهُ مَسْئُولًا﴾ (الإسراء 17:36).",
          "والبصر مسؤول عمّا يرى، والقلب مسؤول عمّا يقلّده. وما يُعرض على الشاشة مختار ومقصوص: لا ترى فيه الديون، ولا الخلافات، ولا الأيام العادية.",
          "خطوات عملية: قبل أن تشتري ما رأيته أو تفعل ما انتشر، اسأل ثلاثة أسئلة: هل هو حلال؟ هل أحتاج إليه؟ هل كنت سأريده لو لم أره عند غيري؟ وألغِ متابعة من يتركك كل مرة ساخطًا على حياتك، وتابع من يزيدك علمًا أو خيرًا."
        ],
        ar_f: [
          "رأى عادل على هاتفه صديقًا قديمًا يسافر كل شهر، ويصوّر مطاعم فاخرة وسيارة جديدة. وبعد أسابيع كان قد غيّر سيارته بقرض، وحجز رحلة لا تحتملها ميزانيته، وصار يصوّر كل ما يأكل.",
          "ولم يشعر بالسعادة التي رآها في الصور. شعر بالقلق من القسط، وبالتعب من الحرص على أن تبدو حياته جميلة لمن يتابعه.",
          "التقليد في ذاته ليس عيبًا، فالإنسان يتعلم بالاقتداء. لكن التقليد الأعمى يأخذ ما يراه دون أن يسأل: هل هذا صحيح؟ وهل يناسبني؟ وهل أعرف ما وراء الصورة؟ والقرآن يحذّر من اتباع ما لا علم للإنسان به: ﴿وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ ۚ إِنَّ السَّمْعَ وَالْبَصَرَ وَالْفُؤَادَ كُلُّ أُولَٰئِكَ كَانَ عَنْهُ مَسْئُولًا﴾ (الإسراء 17:36).",
          "والبصر مسؤول عمّا يرى، والقلب مسؤول عمّا يقلّده. وما يُعرض على الشاشة مختار ومقصوص: لا ترين فيه الديون، ولا الخلافات، ولا الأيام العادية.",
          "خطوات عملية: قبل أن تشتري ما رأيتِه أو تفعلي ما انتشر، اسألي ثلاثة أسئلة: هل هو حلال؟ هل أحتاج إليه؟ هل كنت سأريده لو لم أره عند غيري؟ وألغي متابعة من يتركك كل مرة ساخطة على حياتك، وتابعي من يزيدك علمًا أو خيرًا."
        ],
        en: [
          "On his phone Adel saw an old friend travelling every month, posting fine restaurants and a new car. Within weeks Adel had changed his car with a loan, booked a trip his budget could not bear, and started photographing everything he ate.",
          "He did not feel the happiness he had seen in the pictures. He felt anxious about the instalments, and tired from working to make his life look beautiful to those who followed him.",
          "Imitation in itself is no fault; people learn by following good examples. But blind imitation takes what it sees without asking: is this true? Does it suit me? Do I know what lies behind the picture? The Quran warns against following what one has no knowledge of, meaning: do not pursue what you have no knowledge of; hearing, sight and heart will each be asked about it (al-Isra 17:36).",
          "Sight is answerable for what it looks at, and the heart for what it copies. What is shown on a screen is chosen and cut: you don't see the debts in it, or the quarrels, or the ordinary days.",
          "Practical steps: before you buy what you saw or do what is trending, ask three questions: is it lawful? Do I need it? Would I want it if I hadn't seen it with someone else? Unfollow whoever leaves you resentful of your own life every time, and follow those who add to your knowledge or your good."
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
      id: "am-r7", summit: true, minutes: 3, ages: "18+",
      title: { ar: "القمة: «دَعُوهُ»", en: "The summit: «Leave him»" },
      body: {
        ar: [
          "روى أبو هريرة رضي الله عنه أن أعرابيًّا قام فبال في المسجد، فتناوله الناس، أي همّوا به ينهرونه. فقال لهم النبي صلى الله عليه وآله وسلم: «دَعُوهُ وَهَرِيقُوا عَلَى بَوْلِهِ سَجْلاً مِنْ مَاءٍ، أَوْ ذَنُوبًا مِنْ مَاءٍ، فَإِنَّمَا بُعِثْتُمْ مُيَسِّرِينَ، وَلَمْ تُبْعَثُوا مُعَسِّرِينَ» (البخاري 220).",
          "الخطأ هنا كبير وفي أطهر مكان، والغضب له مفهوم. واندفع الناس كما يندفع أكثرنا. لكن النبي صلى الله عليه وآله وسلم توقف، ونظر في العاقبة: رجل جاهل لا يعرف، وماء يطهّر المكان، وقلب يُكسب للإسلام بدل أن يُنفَّر منه.",
          "في هذا الموقف كل ما تعالجه هذه المرحلة: لم يتشتت عن المقصود، ولم يندفع قبل أن ينظر، ولم يغضب قبل أن يفكر. ثم جعل من الموقف درسًا لأصحابه في التيسير.",
          "سؤال للتأمل: متى اندفعت آخر مرة إلى إنسان أخطأ؟ وكيف كان يمكن أن يكون الموقف لو قلت أولًا: «دعوه»، ثم أصلحت الخطأ بهدوء؟"
        ],
        ar_f: [
          "روى أبو هريرة رضي الله عنه أن أعرابيًّا قام فبال في المسجد، فتناوله الناس، أي همّوا به ينهرونه. فقال لهم النبي صلى الله عليه وآله وسلم: «دَعُوهُ وَهَرِيقُوا عَلَى بَوْلِهِ سَجْلاً مِنْ مَاءٍ، أَوْ ذَنُوبًا مِنْ مَاءٍ، فَإِنَّمَا بُعِثْتُمْ مُيَسِّرِينَ، وَلَمْ تُبْعَثُوا مُعَسِّرِينَ» (البخاري 220).",
          "الخطأ هنا كبير وفي أطهر مكان، والغضب له مفهوم. واندفع الناس كما يندفع أكثرنا. لكن النبي صلى الله عليه وآله وسلم توقف، ونظر في العاقبة: رجل جاهل لا يعرف، وماء يطهّر المكان، وقلب يُكسب للإسلام بدل أن يُنفَّر منه.",
          "في هذا الموقف كل ما تعالجه هذه المرحلة: لم يتشتت عن المقصود، ولم يندفع قبل أن ينظر، ولم يغضب قبل أن يفكر. ثم جعل من الموقف درسًا لأصحابه في التيسير.",
          "سؤال للتأمل: متى اندفعتِ آخر مرة إلى إنسان أخطأ؟ وكيف كان يمكن أن يكون الموقف لو قلتِ أولًا: «دعوه»، ثم أصلحتِ الخطأ بهدوء؟"
        ],
        en: [
          "Abu Hurayra, may Allah be pleased with him, reported that a Bedouin stood up and urinated in the mosque, and the people rushed at him. The Prophet, peace and blessings be upon him and his family, said to them: «Leave him, and pour a bucket of water over his urine; you were sent to make things easy, not to make them hard» (Bukhari 220).",
          "The wrong here was serious, and in the purest of places, and anger at it is understandable. The people rushed forward as most of us would. But the Prophet paused and looked at the outcome: an ignorant man who did not know, water that would purify the place, and a heart to be won for Islam rather than driven from it.",
          "This one moment holds everything this stage treats: he was not distracted from what mattered, did not rush before looking, did not grow angry before thinking. Then he turned the moment into a lesson in ease for his Companions.",
          "A question to reflect on: when did you last rush at someone who made a mistake? How might it have gone if you had first said «leave him», and then put the mistake right calmly?"
        ]
      },
      quote: {
        ar: "«فَإِنَّمَا بُعِثْتُمْ مُيَسِّرِينَ، وَلَمْ تُبْعَثُوا مُعَسِّرِينَ»",
        en: "Meaning: You were sent to make things easy, not to make them hard.",
        ref: "صحيح البخاري 220، عن أبي هريرة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "حديث في صحيح البخاري.", en: "A hadith in Sahih al-Bukhari." }
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
        { ar: "لأن عمله أكثر من طاقته", en: "Because he had more work than he could handle" },
        { ar: "لأن انتباهه توزّع على عشرين أمرًا، فأخذ كل أمر منه قليلًا", en: "Because his attention was spread over twenty things, giving each of them little" },
        { ar: "لأن حاسوبه بطيء", en: "Because his computer was slow" }
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
        { ar: "أكتبها على ورقة، وأغلق ما لا يحتاج إليه عملي الآن", en: "Write them on paper, and close whatever my current work doesn't need" },
        { ar: "أفتح المزيد حتى لا يفوتني شيء", en: "Open more so that nothing slips" },
        { ar: "أعمل على كل أمر خمس دقائق بالتناوب", en: "Work on each for five minutes in turn" }
      ],
      why: { ar: "الورقة تحفظ ما تخاف نسيانه، فيتفرغ الذهن لعمل واحد.", en: "The paper holds what you fear forgetting, so the mind is free for one task." }
    },
    {
      id: "am-q3", readingId: "am-r2", type: "comprehension", correct: 2,
      q: { ar: "ماذا أرادت منى من زوجها حين حكت له عن عملها؟", en: "What did Mona want from her husband when she told him about work?" },
      options: [
        { ar: "أن يكتب لمديرتها", en: "For him to write to her manager" },
        { ar: "أن يبحث لها عن عمل آخر", en: "For him to find her another job" },
        { ar: "أن يسمعها", en: "For him to listen" }
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
        { ar: "أتركها، فلن يسمعني أحد", en: "Drop it; no one will listen to me anyway" }
      ],
      why: { ar: "الورقة تحفظ الفكرة، والانتظار يحفظ حق المتكلم ويجعل الناس يسمعونك حين تتكلم.", en: "The paper keeps the idea; waiting keeps the speaker's right and makes people listen when it is your turn." }
    },
    {
      id: "am-q5", readingId: "am-r3", type: "comprehension", correct: 0,
      q: { ar: "ما الكلمة التي قال النبي صلى الله عليه وآله وسلم إنها تُذهب الغضب؟", en: "Which words did the Prophet say would take anger away?" },
      options: [
        { ar: "أعوذ بالله من الشيطان الرجيم", en: "I seek refuge in Allah from Satan the accursed" },
        { ar: "سبحان الله", en: "Glory be to Allah" },
        { ar: "لا حول ولا قوة إلا بالله", en: "There is no power nor strength except through Allah" }
      ],
      why: { ar: "في البخاري (6115): «لَوْ قَالَ أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ» لذهب عنه ما يجد.", en: "In al-Bukhari (6115): if he said «I seek refuge in Allah from Satan the accursed», what he feels would leave him." }
    },
    {
      id: "am-q6", readingId: "am-r3", type: "comprehension", correct: 1,
      q: { ar: "من الشديد بحسب حديث البخاري 6114؟", en: "Who is the strong one according to Bukhari 6114?" },
      options: [
        { ar: "من يغلب غيره في الخصام", en: "The one who beats others in a quarrel" },
        { ar: "من يملك نفسه عند الغضب", en: "The one who controls himself when angry" },
        { ar: "من لا يغضب أبدًا", en: "The one who never gets angry" }
      ],
      why: { ar: "القوة الحقيقية أن تغلب ما يشتعل فيك، لا أن تغلب الآخر.", en: "True strength is overpowering what flares in you, not overpowering the other." }
    },
    {
      id: "am-q7", readingId: "am-r4", type: "comprehension", correct: 2,
      q: { ar: "ما الذي فهمته سلمى بعد أن صرخت على ابنها؟", en: "What did Salma realise after shouting at her son?" },
      options: [
        { ar: "أن ابنها يتعمد إزعاجها", en: "That her son was annoying her on purpose" },
        { ar: "أن الصراخ ضروري في الصباح", en: "That shouting is necessary in the mornings" },
        { ar: "أن ضغط الصباح كان يغلي فيها قبل أن يُسكب الحليب", en: "That the pressure of the morning had been boiling in her before the milk was spilled" }
      ],
      why: { ar: "أكثر الغضب على الأولاد يأتي من ضغط سابق. ومن عرف السبب عرف أين يبدأ العلاج.", en: "Most anger at children comes from pressure already there. Knowing the cause shows where the cure begins." }
    },
    {
      id: "am-q8", readingId: "am-r5", type: "comprehension", correct: 0,
      q: { ar: "ماذا تأمر آية الحجرات من يصله خبر؟", en: "What does the verse of al-Hujurat command anyone who receives news?" },
      options: [
        { ar: "أن يتبيّن قبل أن يعمل به أو ينقله", en: "To verify it before acting on it or passing it on" },
        { ar: "أن ينشره بسرعة حتى يعلم الناس", en: "To spread it quickly so people know" },
        { ar: "أن يكذّب كل خبر", en: "To disbelieve every report" }
      ],
      why: { ar: "«فَتَبَيَّنُوا أَنْ تُصِيبُوا قَوْمًا بِجَهَالَةٍ»: التبيّن يحمي الأبرياء ويحمي الناقل من الندم.", en: "«Verify it, lest you harm a people out of ignorance»: verifying protects the innocent and protects the one passing it on from regret." }
    },
    {
      id: "am-q9", readingId: "am-r6", type: "situation", correct: 1,
      q: {
        ar: "رأيت كثيرين يشترون جهازًا جديدًا ويعرضونه، وأحسست أنك تريده. أي سؤال تقترحه المقالة أولًا؟",
        ar_f: "رأيتِ كثيرين يشترون جهازًا جديدًا ويعرضونه، وأحسستِ أنكِ تريدينه. أي سؤال تقترحه المقالة أولًا؟",
        en: "You see many people buying and showing off a new gadget, and you feel you want it. Which question does the article suggest first?"
      },
      options: [
        { ar: "أين أجده بأرخص سعر؟", en: "Where can I find it cheapest?" },
        { ar: "هل كنت سأريده لو لم أره عند غيري؟", en: "Would I want it if I hadn't seen it with others?" },
        { ar: "كم شخصًا سيرى صورتي معه؟", en: "How many people will see my photo with it?" }
      ],
      why: { ar: "التقليد الأعمى يأخذ ما يراه دون سؤال. والسؤال الصادق يكشف هل الرغبة منك أم من الشاشة.", en: "Blind imitation takes what it sees without asking. An honest question shows whether the wish is yours or the screen's." }
    },
    {
      id: "am-q10", readingId: "am-r7", type: "comprehension", correct: 0,
      q: { ar: "ماذا قال النبي صلى الله عليه وآله وسلم للناس حين همّوا بالأعرابي؟", en: "What did the Prophet say to the people when they rushed at the Bedouin?" },
      options: [
        { ar: "«دعوه»، وأمر بماء يُصبّ على المكان", en: "«Leave him», and told them to pour water over the place" },
        { ar: "أمر بإخراجه من المسجد", en: "He ordered him put out of the mosque" },
        { ar: "سكت ولم يقل شيئًا", en: "He kept silent and said nothing" }
      ],
      why: { ar: "«فَإِنَّمَا بُعِثْتُمْ مُيَسِّرِينَ، وَلَمْ تُبْعَثُوا مُعَسِّرِينَ»: توقف قبل الاندفاع، وإصلاح بهدوء.", en: "«You were sent to make things easy, not to make them hard»: a pause before rushing, and calm repair." }
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
        { ar: "أنسى الأمر، فالأطفال ينسون سريعًا", en: "Forget it; children forget quickly" },
        { ar: "أعتذر إليها حين تعود، وأحضّر في الليل ما يخفف ضغط الصباح", en: "Apologise when she comes home, and prepare the night before what eases the morning rush" },
        { ar: "أشتري لها هدية بدل الاعتذار", en: "Buy her a present instead of apologising" }
      ],
      why: { ar: "الاعتذار للصغير يعلّمه الرجوع عن الخطأ، وتحضير الليل يعالج سبب الغضب لا أثره فقط.", en: "Apologising to a child teaches them to turn back from mistakes, and preparing the night before treats the cause of the anger, not only its effect." }
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
    { ar: "أحافظ على عمل خير صغير كل يوم، فالقليل الدائم أحب إلى الله.", en: "I keep up one small good deed every day, for a little done constantly is most loved by Allah." },
    { ar: "إذا أخطأت فلا أيأس: أعتذر، وأصلح، وأُتبع السيئة حسنة.", en: "When I go wrong I don't despair: I apologise, put it right, and follow the bad deed with a good one." },
    { ar: "أبدأ بالخير قبل أن يُطلب مني، فهذا باب الإبهام.", en: "I start the good before I am asked, for that is the door to the thumb." },
    { ar: "أختار قدوة من الأنبياء عليهم السلام أو الصحابة، وأقرأ سيرته.", en: "I choose a model from the prophets, peace be upon them, or the Companions, and read their life." }
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
        id: "ah-d1q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "في مجموعة الأصدقاء بدأ أحدهم يسخر من زميل غائب بسبب لهجته، والجميع يضحكون. ماذا تفعل؟",
          ar_f: "في مجموعة الصديقات بدأت إحداهن تسخر من زميلة غائبة بسبب لهجتها، والجميع يضحكن. ماذا تفعلين؟",
          en: "In your group of friends someone starts mocking an absent colleague's accent, and everyone is laughing. What do you do?"
        },
        options: [
          { ar: "أضحك معهم، فهو لن يعرف", ar_f: "أضحك معهن، فهي لن تعرف", en: "Laugh along; they'll never know" },
          { ar: "لا أشارك، وأقول بلطف: لنتكلم في شيء آخر", en: "Don't join in, and say gently: let's talk about something else" },
          { ar: "أنقل الكلام إلى الزميل ليعرف ما قيل عنه", ar_f: "أنقل الكلام إلى الزميلة لتعرف ما قيل عنها", en: "Pass it on to the colleague so they know what was said" }
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
        id: "ah-d2q", type: "situation", readingId: null, correct: 1,
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
        id: "ah-d3q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "اكتشفت أنك أرسلت إلى زميلك أرقامًا خاطئة بنى عليها تقريره، ولم يلاحظ أحد بعد. ماذا تفعل؟",
          ar_f: "اكتشفتِ أنكِ أرسلتِ إلى زميلتك أرقامًا خاطئة بنت عليها تقريرها، ولم يلاحظ أحد بعد. ماذا تفعلين؟",
          en: "You discover you sent a colleague wrong figures on which they built their report, and no one has noticed yet. What do you do?"
        },
        options: [
          { ar: "أنتظر، فربما لا يلاحظ أحد", en: "Wait; maybe no one will notice" },
          { ar: "أخبره الآن، وأعتذر، وأرسل الأرقام الصحيحة، وأساعده في التصحيح", ar_f: "أخبرها الآن، وأعتذر، وأرسل الأرقام الصحيحة، وأساعدها في التصحيح", en: "Tell them now, apologise, send the correct figures, and help them fix it" },
          { ar: "أصحح الأرقام عندي فقط", en: "Correct the figures on my side only" }
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
      id: "ah-r1", minutes: 4, ages: "18+",
      title: { ar: "قبل أن تنشر", en: "Before you post" },
      body: {
        ar: [
          "تختلف الكلمة على الشاشة عن الكلمة في المجلس في أمرين: أنها تبقى، وأنها تصل إلى من لا تعرفه. تعليق قاله صاحبه في لحظة غضب قد يقرؤه المقصود به بعد سنوات، وقد يقرؤه أولاده.",
          "وكثير ممن يكتبون على الإنترنت لا يكتبون ما يقولونه في وجه أحد. يسخرون من شكل إنسان، أو يفضحون خطأه، أو يتهمونه بما سمعوا. والقرآن يذكّر بأن الكلمة كلها محفوظة: ﴿مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ﴾ (ق 50:18). وما يُكتب أولى بالحفظ مما يُلفظ.",
          "وقال النبي صلى الله عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ» (البخاري 10). واليد اليوم تكتب، فتؤذي كما يؤذي اللسان.",
          "وفي «إحياء علوم الدين» كتاب كامل في آفات اللسان، عدّها الغزالي عشرين آفة، وأولها «الكلام فيما لا يعنيك». وأكثر ما يُكتب في التعليقات من هذا الباب: رأي في أمر لا يخص كاتبه، ولم يُسأل عنه.",
          "خطوات عملية: اقرأ ما كتبت مرتين قبل أن تنشره، واسأل: هل أقوله في وجه صاحبه؟ لا تكتب وأنت غاضب. وإذا رأيت من يُهاجَم ظلمًا فاكتب كلمة طيبة بدل أن تزيد الهجوم. ويكفيك أحيانًا ألا تكتب شيئًا."
        ],
        ar_f: [
          "تختلف الكلمة على الشاشة عن الكلمة في المجلس في أمرين: أنها تبقى، وأنها تصل إلى من لا تعرفينه. تعليق قاله صاحبه في لحظة غضب قد يقرؤه المقصود به بعد سنوات، وقد يقرؤه أولاده.",
          "وكثير ممن يكتبون على الإنترنت لا يكتبون ما يقولونه في وجه أحد. يسخرون من شكل إنسان، أو يفضحون خطأه، أو يتهمونه بما سمعوا. والقرآن يذكّر بأن الكلمة كلها محفوظة: ﴿مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ﴾ (ق 50:18). وما يُكتب أولى بالحفظ مما يُلفظ.",
          "وقال النبي صلى الله عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ» (البخاري 10). واليد اليوم تكتب، فتؤذي كما يؤذي اللسان.",
          "وفي «إحياء علوم الدين» كتاب كامل في آفات اللسان، عدّها الغزالي عشرين آفة، وأولها «الكلام فيما لا يعنيك». وأكثر ما يُكتب في التعليقات من هذا الباب: رأي في أمر لا يخص كاتبه، ولم يُسأل عنه.",
          "خطوات عملية: اقرئي ما كتبتِ مرتين قبل أن تنشريه، واسألي: هل أقوله في وجه صاحبه؟ لا تكتبي وأنتِ غاضبة. وإذا رأيتِ من يُهاجَم ظلمًا فاكتبي كلمة طيبة بدل أن تزيدي الهجوم. ويكفيك أحيانًا ألا تكتبي شيئًا."
        ],
        en: [
          "A word on a screen differs from a word in company in two ways: it stays, and it reaches people you don't know. A comment written in a moment of anger may be read by the person it targets years later, or by their children.",
          "Many who write online write what they would never say to anyone's face. They mock a person's looks, expose their mistake, or accuse them of what they have heard. The Quran reminds us that every word is recorded, meaning: not a word does one utter but there is a watcher ready beside him (Qaf 50:18). What is written is all the more recorded than what is spoken.",
          "The Prophet, peace and blessings be upon him and his family, said: «The Muslim is the one from whose tongue and hand the Muslims are safe» (Bukhari 10). Today the hand types, and can hurt as the tongue does.",
          "The Ihya 'Ulum al-Din has a whole book on the afflictions of the tongue. Al-Ghazali counts twenty, the first being «speaking about what does not concern you». Much of what is written in comment sections belongs here: an opinion on a matter that does not concern the writer, which no one asked for.",
          "Practical steps: read what you wrote twice before posting, and ask: would I say this to their face? Don't write while angry. When you see someone attacked unjustly, write a kind word rather than add to the attack. And sometimes it is enough to write nothing."
        ]
      },
      quote: {
        ar: "﴿مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ﴾",
        en: "Meaning (not a translation): Not a word does one utter but there is a watcher ready beside him.",
        ref: "ق 50:18", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "مقالة مع آية من سورة ق، وحديث في صحيح البخاري، وإحياء علوم الدين للغزالي (كتاب آفات اللسان).", en: "An article with a verse from Qaf, a hadith in Sahih al-Bukhari, and al-Ghazali's Ihya (Book of the Afflictions of the Tongue)." }
    },
    {
      id: "ah-r2", minutes: 4, ages: "18+",
      title: { ar: "الموعد الذي يتأخر", en: "The deadline that keeps slipping" },
      body: {
        ar: [
          "تعمل هالة مصممة مستقلة. كانت تقبل كل مشروع يُعرض عليها، وتعد كل عميل بموعد قريب لتكسبه، ثم تتأخر. تعتذر بالمرض مرة، وبانقطاع الإنترنت مرة، وبضغط العمل مرات.",
          "وفي يوم كتب لها عميل قديم: «عملك جميل، لكني لا أستطيع أن أبني موعدي على وعدك». وخسرت أكبر عملائها في الشهر نفسه.",
          "قال النبي صلى الله عليه وآله وسلم: «آيَةُ الْمُنَافِقِ ثَلاَثٌ إِذَا حَدَّثَ كَذَبَ، وَإِذَا وَعَدَ أَخْلَفَ، وَإِذَا اؤْتُمِنَ خَانَ» (البخاري 33). وخلف الموعد في العمل ليس أمرًا صغيرًا: هو وعد يُخلف، وأمانة وقت لا تُؤدّى، وعذر قد يكون كذبًا.",
          "وفي صفات المؤمنين المفلحين: ﴿وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ﴾ (المؤمنون 23:8). والرعاية حفظ دائم، لا وفاء متقطع حين يسهل.",
          "غيّرت هالة طريقتها: صارت تحسب الوقت الذي يحتاجه العمل وتزيد عليه، وتعد بموعد تستطيع الوفاء به، وترفض المشروع الذي لا يتسع له وقتها. قلّ عملاؤها الجدد أولًا، ثم صار عملاؤها يعودون إليها، ويدلّون غيرهم عليها."
        ],
        en: [
          "Hala works as a freelance designer. She used to accept every project offered, promise every client an early date to win them, then run late. One time she blamed illness, another time the internet, many times the workload.",
          "One day an old client wrote to her: «Your work is beautiful, but I can't build my deadline on your promise.» In the same month she lost her biggest client.",
          "The Prophet, peace and blessings be upon him and his family, said: «The signs of a hypocrite are three: when he speaks he lies, when he promises he breaks it, and when he is trusted he betrays» (Bukhari 33). A missed deadline at work is no small thing: it is a broken promise, a trust of time not rendered, and an excuse that may be a lie.",
          "Among the qualities of the successful believers, meaning: those who look after their trusts and their promises (al-Mu'minun 23:8). Looking after means constant care, not keeping faith now and then when it is easy.",
          "Hala changed her approach: she now estimates the time a job needs and adds to it, promises a date she can keep, and turns down projects her schedule can't hold. At first she had fewer new clients; then her clients began coming back to her, and sending others her way."
        ]
      },
      quote: {
        ar: "﴿وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ﴾",
        en: "Meaning (not a translation): Those who look after their trusts and their promises.",
        ref: "المؤمنون 23:8", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع حديث في صحيح البخاري وآية من سورة المؤمنون.", en: "An original story with fictional characters, with a hadith in Sahih al-Bukhari and a verse from al-Mu'minun." }
    },
    {
      id: "ah-r3", minutes: 4, ages: "18+",
      title: { ar: "«فَأَعْطِ كُلَّ ذِي حَقٍّ حَقَّهُ»", en: "«Give each one its due»" },
      body: {
        ar: [
          "آخى النبي صلى الله عليه وآله وسلم بين سلمان الفارسي وأبي الدرداء رضي الله عنهما. فزار سلمان أخاه، فرأى زوجته أم الدرداء في ثياب مهملة، فسألها عن شأنها، فقالت: أخوك أبو الدرداء ليس له حاجة في الدنيا.",
          "كان أبو الدرداء يصوم النهار ويقوم الليل كله. فبات سلمان عنده، وأمره أن يأكل وينام، ثم قاما يصليان في آخر الليل، وقال له: «إِنَّ لِرَبِّكَ عَلَيْكَ حَقًّا، وَلِنَفْسِكَ عَلَيْكَ حَقًّا، وَلأَهْلِكَ عَلَيْكَ حَقًّا، فَأَعْطِ كُلَّ ذِي حَقٍّ حَقَّهُ». فذكر أبو الدرداء ذلك للنبي صلى الله عليه وآله وسلم، فقال: «صَدَقَ سَلْمَانُ» (البخاري 1968).",
          "أداء الواجب عند الكبار ميزان بين حقوق كثيرة: حق الله في العبادة، وحق العمل في الإتقان، وحق الجسد في النوم والطعام، وحق الزوج والأولاد في الوقت والرعاية. ومن أعطى حقًّا واحدًا كل وقته ضيّع غيره، ولو كان الحق الذي أعطاه عبادة.",
          "وفي القرآن أمر جامع في معاملة الزوجة: ﴿وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ﴾ (النساء 4:19). والمعروف يشمل الوقت والكلمة والاهتمام، لا النفقة وحدها. والحقوق بين الزوجين متبادلة، فقد قال تعالى: ﴿وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ﴾ (البقرة 2:228).",
          "خطوات عملية: اكتب أصحاب الحقوق عليك في ورقة: ربك، ونفسك، وأهلك، وعملك، ووالديك. وانظر من منهم يأخذ أقل من حقه هذا الشهر، وأعطه ساعة إضافية هذا الأسبوع."
        ],
        ar_f: [
          "آخى النبي صلى الله عليه وآله وسلم بين سلمان الفارسي وأبي الدرداء رضي الله عنهما. فزار سلمان أخاه، فرأى زوجته أم الدرداء في ثياب مهملة، فسألها عن شأنها، فقالت: أخوك أبو الدرداء ليس له حاجة في الدنيا.",
          "كان أبو الدرداء يصوم النهار ويقوم الليل كله. فبات سلمان عنده، وأمره أن يأكل وينام، ثم قاما يصليان في آخر الليل، وقال له: «إِنَّ لِرَبِّكَ عَلَيْكَ حَقًّا، وَلِنَفْسِكَ عَلَيْكَ حَقًّا، وَلأَهْلِكَ عَلَيْكَ حَقًّا، فَأَعْطِ كُلَّ ذِي حَقٍّ حَقَّهُ». فذكر أبو الدرداء ذلك للنبي صلى الله عليه وآله وسلم، فقال: «صَدَقَ سَلْمَانُ» (البخاري 1968).",
          "أداء الواجب عند الكبار ميزان بين حقوق كثيرة: حق الله في العبادة، وحق العمل في الإتقان، وحق الجسد في النوم والطعام، وحق الزوج والأولاد في الوقت والرعاية. ومن أعطى حقًّا واحدًا كل وقته ضيّع غيره، ولو كان الحق الذي أعطاه عبادة.",
          "وفي القرآن أمر جامع في معاملة الزوجة: ﴿وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ﴾ (النساء 4:19). والمعروف يشمل الوقت والكلمة والاهتمام، لا النفقة وحدها. والحقوق بين الزوجين متبادلة، فقد قال تعالى: ﴿وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ﴾ (البقرة 2:228).",
          "خطوات عملية: اكتبي أصحاب الحقوق عليك في ورقة: ربك، ونفسك، وأهلك، وعملك، ووالديك. وانظري من منهم يأخذ أقل من حقه هذا الشهر، وأعطيه ساعة إضافية هذا الأسبوع."
        ],
        en: [
          "The Prophet, peace and blessings be upon him and his family, made Salman al-Farisi and Abu al-Darda brothers, may Allah be pleased with them both. Salman visited his brother and saw his wife, Umm al-Darda, in neglected clothes. He asked what was the matter, and she said: your brother Abu al-Darda has no interest in this world.",
          "Abu al-Darda fasted every day and prayed all night. Salman stayed the night with him, told him to eat and to sleep, then they both rose to pray in the last part of the night, and Salman said to him: «Your Lord has a right over you, your self has a right over you, and your family has a right over you, so give each one its due.» Abu al-Darda mentioned this to the Prophet, who said: «Salman has spoken the truth» (Bukhari 1968).",
          "For adults, doing what is due is a balance between many rights: Allah's right in worship, work's right to be done well, the body's right to sleep and food, and the right of spouse and children to time and care. Whoever gives one right all their time neglects the others, even if the right they gave it to is worship.",
          "The Quran gives a comprehensive command about living with one's wife, meaning: live with them in kindness (an-Nisa 4:19). Kindness covers time, words and attention, not only provision. Rights between spouses run both ways; Allah says, meaning: and women have rights like those owed by them, in kindness (al-Baqara 2:228).",
          "Practical steps: write down on paper those who have rights over you: your Lord, yourself, your family, your work, your parents. See which of them is getting less than its due this month, and give it an extra hour this week."
        ]
      },
      quote: {
        ar: "«إِنَّ لِرَبِّكَ عَلَيْكَ حَقًّا، وَلِنَفْسِكَ عَلَيْكَ حَقًّا، وَلأَهْلِكَ عَلَيْكَ حَقًّا، فَأَعْطِ كُلَّ ذِي حَقٍّ حَقَّهُ»",
        en: "Meaning: Your Lord has a right over you, your self has a right over you, and your family has a right over you, so give each one its due.",
        ref: "صحيح البخاري 1968، عن أبي جحيفة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "حديث في صحيح البخاري، مع آيتين من سورتي النساء والبقرة.", en: "A hadith in Sahih al-Bukhari, with verses from an-Nisa and al-Baqara." }
    },
    {
      id: "ah-r4", minutes: 4, ages: "18+",
      title: { ar: "اعتذار بلا «لكن»", en: "An apology without «but»" },
      body: {
        ar: [
          "يعتذر كثير منا اعتذارًا يحمل دفاعًا: «آسف، لكنك استفززتني»، «أعتذر إن كنت فهمت كلامي خطأ». وهذا الاعتذار يعيد الخطأ إلى الطرف الآخر، فيزيد الجرح بدل أن يداويه.",
          "وفي القرآن نموذج الاعتذار الأول. أخطأ آدم وحواء، فلم يقولا: أغوانا الشيطان، ولم يلم أحدهما الآخر، بل قالا: ﴿رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ﴾ (الأعراف 7:23). ثم جاء القبول: ﴿فَتَلَقَّىٰ آدَمُ مِنْ رَبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ﴾ (البقرة 2:37).",
          "والاعتذار الصادق إلى الناس فيه ثلاثة أشياء: أن تسمّي الخطأ («رفعت صوتي عليك»)، وأن تقرّ بأثره («وأعرف أن ذلك جرحك»)، وأن تصلح ما تستطيع («ولن أكلمك هكذا مرة أخرى»).",
          "وأصعب الاعتذار ما يكون للأقرب: للزوج، وللولد، وللوالدين. نظن أن المكانة تضيع بالاعتذار، والحقيقة أن الأولاد يتعلمون الرجوع عن الخطأ حين يرون آباءهم وأمهاتهم يرجعون.",
          "خطوات عملية: إذا أخطأت فلا تؤجل الاعتذار حتى تبرد المسألة، فالتأجيل يجعلها تتجذّر. قل الجملة كاملة دون «لكن». ولا تطلب من الآخر أن يسامحك فورًا، بل دع له وقته."
        ],
        ar_f: [
          "يعتذر كثير منا اعتذارًا يحمل دفاعًا: «آسف، لكنك استفززتني»، «أعتذر إن كنت فهمت كلامي خطأ». وهذا الاعتذار يعيد الخطأ إلى الطرف الآخر، فيزيد الجرح بدل أن يداويه.",
          "وفي القرآن نموذج الاعتذار الأول. أخطأ آدم وحواء، فلم يقولا: أغوانا الشيطان، ولم يلم أحدهما الآخر، بل قالا: ﴿رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ﴾ (الأعراف 7:23). ثم جاء القبول: ﴿فَتَلَقَّىٰ آدَمُ مِنْ رَبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ﴾ (البقرة 2:37).",
          "والاعتذار الصادق إلى الناس فيه ثلاثة أشياء: أن تسمّي الخطأ («رفعت صوتي عليك»)، وأن تقرّي بأثره («وأعرف أن ذلك جرحك»)، وأن تصلحي ما تستطيعين («ولن أكلمك هكذا مرة أخرى»).",
          "وأصعب الاعتذار ما يكون للأقرب: للزوج، وللولد، وللوالدين. نظن أن المكانة تضيع بالاعتذار، والحقيقة أن الأولاد يتعلمون الرجوع عن الخطأ حين يرون آباءهم وأمهاتهم يرجعون.",
          "خطوات عملية: إذا أخطأتِ فلا تؤجلي الاعتذار حتى تبرد المسألة، فالتأجيل يجعلها تتجذّر. قولي الجملة كاملة دون «لكن». ولا تطلبي من الآخر أن يسامحك فورًا، بل دعي له وقته."
        ],
        en: [
          "Many of us apologise with a defence inside: «Sorry, but you provoked me», «I apologise if you misunderstood me». Such an apology hands the fault back to the other person and deepens the wound instead of healing it.",
          "The Quran holds the first model of apology. Adam and Hawwa went wrong, and they did not say «Satan led us astray», nor did either blame the other. They said, meaning: our Lord, we have wronged ourselves, and if You do not forgive us and have mercy on us, we will surely be among the losers (al-A'raf 7:23). Then came the acceptance, meaning: Adam received words from his Lord, and He turned to him; He is the Ever-Relenting, the Merciful (al-Baqara 2:37).",
          "A sincere apology to people has three parts: naming the mistake («I raised my voice at you»), acknowledging its effect («and I know it hurt you»), and repairing what you can («and I won't speak to you like that again»).",
          "The hardest apologies are to those closest: a spouse, a child, a parent. We think we lose standing by apologising, when in truth children learn to turn back from mistakes by watching their fathers and mothers turn back.",
          "Practical steps: when you are wrong, don't put off apologising until things cool down, for delay lets it take root. Say the whole sentence without «but». And don't ask the other person to forgive you at once; give them their time."
        ]
      },
      quote: {
        ar: "﴿رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ﴾",
        en: "Meaning (not a translation): Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy on us, we will surely be among the losers.",
        ref: "الأعراف 7:23", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "مقالة مع آيتين من سورتي الأعراف والبقرة.", en: "An article with verses from al-A'raf and al-Baqara." }
    },
    {
      id: "ah-r5", minutes: 4, ages: "18+",
      title: { ar: "الدَّين المؤجل", en: "The postponed debt" },
      body: {
        ar: [
          "اقترض منصور من صديقه مبلغًا حين ضاقت به الحال، ووعده أن يردّه بعد ثلاثة أشهر. ومرت الأشهر الثلاثة، وتحسنت حاله، واشترى هاتفًا جديدًا وسافر مع أسرته، والدين في مكانه.",
          "لم يطالبه صديقه حياءً. لكنه صار يتجنب لقاءه، وصارت المودة بينهما ثقيلة. ثم علم منصور من صديق ثالث أن صاحب الدين يحتاج المال لعلاج أمه.",
          "قال النبي صلى الله عليه وآله وسلم: «مَطْلُ الْغَنِيِّ ظُلْمٌ» (البخاري 2287). والمطل أن يؤخر القادرُ ما عليه وهو يستطيع أداءه. سمّاه النبي ظلمًا، ولو كان صاحب الدين صديقًا لا يطالب.",
          "وفي الجهة الأخرى أدب للدائن: ﴿وَإِنْ كَانَ ذُو عُسْرَةٍ فَنَظِرَةٌ إِلَىٰ مَيْسَرَةٍ ۚ وَأَنْ تَصَدَّقُوا خَيْرٌ لَكُمْ﴾ (البقرة 2:280). فالمعسر يُمهَل، والقادر يؤدي. ومن عجز حقًّا فليصارح صاحب الحق ولا يختفِ عنه.",
          "ذهب منصور إلى صديقه في اليوم نفسه، وردّ له المال كله، واعتذر عن التأخير. وقال له صديقه: لم يكن المال ما أحزنني. ثم عادت جلستهما الأسبوعية كما كانت."
        ],
        en: [
          "Mansour borrowed money from a friend when times were hard, and promised to repay it in three months. The three months passed, his situation improved, he bought a new phone and travelled with his family, and the debt stayed where it was.",
          "His friend was too shy to ask. But he began avoiding him, and their friendship grew heavy. Then Mansour learned from a third friend that the lender needed the money for his mother's treatment.",
          "The Prophet, peace and blessings be upon him and his family, said: «Delay by one who is able to pay is injustice» (Bukhari 2287). Delay here means someone able to pay holding back what he owes. The Prophet called it injustice, even when the lender is a friend who never asks.",
          "On the other side there is a courtesy owed by the lender, meaning: if the debtor is in hardship, then grant him time until ease; and to give it as charity is better for you (al-Baqara 2:280). The one in hardship is given time, and the one who can pay pays. Whoever truly cannot should speak openly to the lender, not disappear.",
          "Mansour went to his friend that same day, repaid all the money and apologised for the delay. His friend said: it wasn't the money that saddened me. Then their weekly visit went back to how it had been."
        ]
      },
      quote: {
        ar: "«مَطْلُ الْغَنِيِّ ظُلْمٌ»",
        en: "Meaning: Delay by one who is able to pay is injustice.",
        ref: "صحيح البخاري 2287، عن أبي هريرة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع حديث في صحيح البخاري وآية من سورة البقرة.", en: "An original story with fictional characters, with a hadith in Sahih al-Bukhari and a verse from al-Baqara." }
    },
    {
      id: "ah-r6", minutes: 5, ages: "18+",
      title: { ar: "التوبة: علم، وحال، وفعل", en: "Repentance: knowledge, state and action" },
      body: {
        ar: [
          "يظن بعض الناس أن التوبة كلمة تُقال: «أستغفر الله» ثم يمضي. ويظن آخرون أن من أذنب كثيرًا فات وقته. والقرآن يدعو المؤمنين جميعًا إلى التوبة: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَصُوحًا﴾ (التحريم 66:8).",
          "وفي «إحياء علوم الدين» (كتاب التوبة) يشرح الغزالي التوبة شرحًا دقيقًا، فيقول: «إن التوبة عبارة عن معنى ينتظم ويلتئم من ثلاثة أمور مرتبة: علم، وحال، وفعل».",
          "العلم: أن يعرف الإنسان ضرر الذنب، وأنه حجاب بينه وبين ربه. فإذا عرف ذلك حقًّا جاءت الحال، وهي الندم: ألم في القلب على ما فات. ثم يثمر الندم فعلًا في ثلاثة أزمنة: يترك الذنب الآن، ويعزم ألا يعود إليه، ويتدارك ما مضى بقضاء ما فاته وردّ الحقوق إلى أهلها.",
          "وبهذا الترتيب يُفهم لماذا لا تكفي الكلمة وحدها: من لم يعرف ضرر الذنب لم يندم، ومن لم يندم لم يترك. ومن كان ذنبه في حق إنسان، كغيبة أو مال أو ظلم، فتوبته لا تتم إلا بإصلاح ما بينه وبين ذلك الإنسان.",
          "خطوات عملية: اختر ذنبًا واحدًا تعود إليه كثيرًا. اكتب ما يضرك منه في دينك وأهلك وعملك. ثم اسأل: ما الذي يسبقه عادة؟ وغيّر ذلك. وإن عدت إليه فتب مرة أخرى، فباب التوبة لا يُغلق بالتكرار، والله تعالى يقول عن نفسه: ﴿إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ﴾."
        ],
        ar_f: [
          "يظن بعض الناس أن التوبة كلمة تُقال: «أستغفر الله» ثم يمضي. ويظن آخرون أن من أذنب كثيرًا فات وقته. والقرآن يدعو المؤمنين جميعًا إلى التوبة: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَصُوحًا﴾ (التحريم 66:8).",
          "وفي «إحياء علوم الدين» (كتاب التوبة) يشرح الغزالي التوبة شرحًا دقيقًا، فيقول: «إن التوبة عبارة عن معنى ينتظم ويلتئم من ثلاثة أمور مرتبة: علم، وحال، وفعل».",
          "العلم: أن يعرف الإنسان ضرر الذنب، وأنه حجاب بينه وبين ربه. فإذا عرف ذلك حقًّا جاءت الحال، وهي الندم: ألم في القلب على ما فات. ثم يثمر الندم فعلًا في ثلاثة أزمنة: يترك الذنب الآن، ويعزم ألا يعود إليه، ويتدارك ما مضى بقضاء ما فاته وردّ الحقوق إلى أهلها.",
          "وبهذا الترتيب يُفهم لماذا لا تكفي الكلمة وحدها: من لم يعرف ضرر الذنب لم يندم، ومن لم يندم لم يترك. ومن كان ذنبه في حق إنسان، كغيبة أو مال أو ظلم، فتوبته لا تتم إلا بإصلاح ما بينه وبين ذلك الإنسان.",
          "خطوات عملية: اختاري ذنبًا واحدًا تعودين إليه كثيرًا. اكتبي ما يضرك منه في دينك وأهلك وعملك. ثم اسألي: ما الذي يسبقه عادة؟ وغيّري ذلك. وإن عدتِ إليه فتوبي مرة أخرى، فباب التوبة لا يُغلق بالتكرار، والله تعالى يقول عن نفسه: ﴿إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ﴾."
        ],
        en: [
          "Some people think repentance is a word one says, «I seek Allah's forgiveness», and moves on. Others think that whoever has sinned a great deal has missed their chance. The Quran calls all believers to repentance, meaning: O you who believe, turn to Allah in sincere repentance (at-Tahrim 66:8).",
          "In the Ihya 'Ulum al-Din (Book of Repentance), al-Ghazali explains repentance precisely: «Repentance is a meaning that is ordered and made whole from three things in sequence: knowledge, state and action.»",
          "Knowledge: knowing the harm of the sin, that it is a veil between a person and their Lord. When that is truly known, the state follows, which is remorse: pain in the heart over what has passed. Remorse then bears fruit in action across three times: leaving the sin now, resolving not to return to it, and making up for the past by doing what was missed and returning rights to their owners.",
          "This order shows why the word alone is not enough: whoever does not know the sin's harm does not feel remorse, and whoever feels no remorse does not leave it. And whoever's sin was against a person, such as backbiting, money or injustice, has not completed their repentance until they set right what lies between them and that person.",
          "Practical steps: choose one sin you keep returning to. Write down how it harms your religion, your family and your work. Then ask: what usually comes just before it? Change that. If you return to it, repent again, for the door of repentance is not shut by repetition, and Allah says of Himself, meaning: He is the Ever-Relenting, the Merciful."
        ]
      },
      quote: {
        ar: "«إن التوبة عبارة عن معنى ينتظم ويلتئم من ثلاثة أمور مرتبة: علم، وحال، وفعل»",
        en: "Meaning: Repentance is a meaning that is ordered and made whole from three things in sequence: knowledge, state and action.",
        ref: "إحياء علوم الدين، كتاب التوبة", checked: "ar.wikisource.org (مجلة الرسالة، نقلًا عن إحياء علوم الدين)", verify: true
      },
      source: { ar: "إحياء علوم الدين للغزالي (كتاب التوبة)، مع آية من سورة التحريم.", en: "Al-Ghazali's Ihya 'Ulum al-Din (Book of Repentance), with a verse from at-Tahrim." }
    },
    {
      id: "ah-r7", summit: true, minutes: 3, ages: "18+",
      title: { ar: "القمة: يد لم تضرب أحدًا", en: "The summit: a hand that struck no one" },
      body: {
        ar: [
          "قالت السيدة عائشة: «مَا ضَرَبَ رَسُولُ اللَّهِ» صلى الله عليه وآله وسلم «شَيْئًا قَطُّ بِيَدِهِ وَلاَ امْرَأَةً وَلاَ خَادِمًا إِلاَّ أَنْ يُجَاهِدَ فِي سَبِيلِ اللَّهِ وَمَا نِيلَ مِنْهُ شَىْءٌ قَطُّ فَيَنْتَقِمَ مِنْ صَاحِبِهِ إِلاَّ أَنْ يُنْتَهَكَ شَىْءٌ مِنْ مَحَارِمِ اللَّهِ فَيَنْتَقِمَ لِلَّهِ عَزَّ وَجَلَّ» (صحيح مسلم 2328).",
          "في هذا الخبر أعلى صور كفّ الأذى. في البيت، حيث لا يراه الناس، لم تمتد يده إلى زوجة ولا خادم. وفي حق نفسه، حين يُؤذى، لم ينتقم لنفسه قط. وكان غضبه لحرمات الله وحدها.",
          "وهذا ميزان للكبار خاصة، لأن الكبير يملك سلطة: على زوجته وأولاده، وعلى من يعمل عنده، وعلى من هو أضعف منه. وكفّ الأذى يُمتحن حيث تكون اليد قادرة.",
          "سؤال للتأمل: من الأضعف منك في حياتك؟ وهل يسلم من يدك ولسانك وأنت غاضب؟"
        ],
        en: [
          "Lady Aisha said: «The Messenger of Allah, peace and blessings be upon him and his family, never struck anything with his hand, neither a woman nor a servant, except when striving in the path of Allah; and nothing was ever done to harm him for which he took revenge on its doer, unless something Allah made sacred was violated, and then he took revenge for Allah, the Mighty and Majestic» (Sahih Muslim 2328).",
          "This report holds the highest form of keeping harm away. At home, where no one sees, his hand never reached for a wife or a servant. In his own right, when harmed, he never took revenge for himself. His anger was for what Allah made sacred, and nothing else.",
          "This is a measure for adults especially, because an adult holds power: over a spouse and children, over those who work for them, over anyone weaker. Keeping harm away is tested where the hand is able.",
          "A question to reflect on: who in your life is weaker than you? And are they safe from your hand and your tongue when you are angry?"
        ]
      },
      quote: {
        ar: "«وَمَا نِيلَ مِنْهُ شَىْءٌ قَطُّ فَيَنْتَقِمَ مِنْ صَاحِبِهِ إِلاَّ أَنْ يُنْتَهَكَ شَىْءٌ مِنْ مَحَارِمِ اللَّهِ فَيَنْتَقِمَ لِلَّهِ عَزَّ وَجَلَّ»",
        en: "Meaning: Nothing was ever done to harm him for which he took revenge on its doer, unless something Allah made sacred was violated, and then he took revenge for Allah.",
        ref: "صحيح مسلم 2328 (ترقيم sunnah.com: الكتاب 43، الحديث 108)، عن عائشة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "حديث في صحيح مسلم.", en: "A hadith in Sahih Muslim." }
    },
    {
      id: "ah-r8", companions: true, minutes: 5, ages: "18+",
      title: { ar: "كعب بن مالك: نجّاني الصدق", en: "Ka'b ibn Malik: truthfulness saved me" },
      body: {
        ar: [
          "تخلّف كعب بن مالك رضي الله عنه عن غزوة تبوك دون عذر. كان يقول كل يوم: أتجهز غدًا، حتى سار الجيش ولم يلحق به. ولما عاد النبي صلى الله عليه وآله وسلم جاءه المتخلفون يعتذرون ويحلفون، فقبل منهم علانيتهم، ووكل سرائرهم إلى الله.",
          "وجاء كعب، وكان قادرًا على أن يعتذر كما اعتذروا، فقد قال عن نفسه: «وَلَقَدْ أُعْطِيتُ جَدَلاً». لكنه قال للنبي صلى الله عليه وآله وسلم: «لاَ وَاللَّهِ مَا كَانَ لِي مِنْ عُذْرٍ، وَاللَّهِ مَا كُنْتُ قَطُّ أَقْوَى وَلاَ أَيْسَرَ مِنِّي حِينَ تَخَلَّفْتُ عَنْكَ». فقال النبي: «أَمَّا هَذَا فَقَدْ صَدَقَ».",
          "ثم نُهي الناس عن كلامه هو وصاحبيه، ومرت أيام ثقيلة «حَتَّى كَمَلَتْ لَنَا خَمْسُونَ لَيْلَةً»، ثم نزلت توبة الله عليهم: ﴿وَعَلَى الثَّلَاثَةِ الَّذِينَ خُلِّفُوا حَتَّىٰ إِذَا ضَاقَتْ عَلَيْهِمُ الْأَرْضُ بِمَا رَحُبَتْ﴾ إلى قوله: ﴿ثُمَّ تَابَ عَلَيْهِمْ لِيَتُوبُوا ۚ إِنَّ اللَّهَ هُوَ التَّوَّابُ الرَّحِيمُ﴾ (التوبة 9:118).",
          "فقال كعب للنبي صلى الله عليه وآله وسلم: «إِنَّ اللَّهَ إِنَّمَا نَجَّانِي بِالصِّدْقِ، وَإِنَّ مِنْ تَوْبَتِي أَنْ لاَ أُحَدِّثَ إِلاَّ صِدْقًا مَا بَقِيتُ» (البخاري 4418).",
          "في قصة كعب درجات هذه المرحلة كلها: أخطأ في أداء الواجب، ثم رجع عن خطئه بالاعتراف الصادق، ثم جعل من توبته عهدًا ألا يؤذي بكذب أبدًا. ولم يكن الصدق سهلًا، فقد كلّفه خمسين ليلة. وكان العذر الكاذب أسهل، لكنه لا ينجي."
        ],
        en: [
          "Ka'b ibn Malik, may Allah be pleased with him, stayed behind from the expedition of Tabuk without excuse. Every day he said: I'll get ready tomorrow, until the army had gone and he never caught up. When the Prophet, peace and blessings be upon him and his family, returned, those who had stayed behind came to him with excuses and oaths. He accepted what they showed outwardly and left their inner selves to Allah.",
          "Ka'b came too. He could have made excuses as they did; he said of himself: «I have been given a gift for argument.» But he said to the Prophet: «No, by Allah, I had no excuse. By Allah, I was never stronger nor better off than when I stayed behind from you.» The Prophet said: «As for this one, he has told the truth.»",
          "Then people were told not to speak to him and his two companions, and heavy days went by «until fifty nights were complete for us». Then Allah's acceptance of their repentance came down, meaning: and to the three who were left behind, until the earth, vast as it is, closed in on them... then He turned to them so that they might turn back; Allah is the Ever-Relenting, the Merciful (at-Tawba 9:118).",
          "Ka'b said to the Prophet: «Allah saved me only through truthfulness, and part of my repentance is that I will speak nothing but the truth for as long as I live» (Bukhari 4418).",
          "Ka'b's story holds every degree of this stage: he fell short in a duty, then turned back from his mistake with an honest admission, then made his repentance a lifelong pledge never to harm with a lie. Truthfulness was not easy; it cost him fifty nights. A false excuse would have been easier, but it would not have saved him."
        ]
      },
      quote: {
        ar: "«إِنَّ اللَّهَ إِنَّمَا نَجَّانِي بِالصِّدْقِ، وَإِنَّ مِنْ تَوْبَتِي أَنْ لاَ أُحَدِّثَ إِلاَّ صِدْقًا مَا بَقِيتُ»",
        en: "Meaning: Allah saved me only through truthfulness, and part of my repentance is that I will speak nothing but the truth for as long as I live.",
        ref: "صحيح البخاري 4418، عن كعب بن مالك", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "حديث كعب بن مالك في صحيح البخاري، مع آية من سورة التوبة.", en: "The hadith of Ka'b ibn Malik in Sahih al-Bukhari, with a verse from at-Tawba." }
    }
  ],
  quiz: [
    {
      id: "ah-q1", readingId: "ah-r1", type: "comprehension", correct: 1,
      q: { ar: "بماذا تختلف الكلمة على الشاشة عن الكلمة في المجلس بحسب المقالة؟", en: "According to the article, how does a word on a screen differ from a word in company?" },
      options: [
        { ar: "بأنها أخف أثرًا", en: "It has a lighter effect" },
        { ar: "بأنها تبقى، وتصل إلى من لا تعرفه", en: "It stays, and reaches people you don't know" },
        { ar: "بأنها لا تُحاسَب", en: "It is not held to account" }
      ],
      why: { ar: "ما يُكتب يبقى ويصل بعيدًا، وكل قول محفوظ: ﴿مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ﴾.", en: "What is written stays and travels far, and every word is recorded." }
    },
    {
      id: "ah-q2", readingId: "ah-r1", type: "situation", correct: 2,
      q: {
        ar: "رأيت منشورًا لشخص تختلف معه بشدة، وكتبت ردًّا حادًّا. ما الأقرب إلى كفّ الأذى؟",
        ar_f: "رأيتِ منشورًا لشخص تختلفين معه بشدة، وكتبتِ ردًّا حادًّا. ما الأقرب إلى كفّ الأذى؟",
        en: "You see a post by someone you strongly disagree with, and you have written a sharp reply. What is closest to keeping harm away?"
      },
      options: [
        { ar: "أنشره، فرأيي صحيح", en: "Post it; my opinion is right" },
        { ar: "أنشره باسم مستعار", en: "Post it under a fake name" },
        { ar: "أقرؤه مرتين وأسأل: هل أقوله في وجهه؟ فإن لم يكن نافعًا فلا أنشره", en: "Read it twice and ask: would I say this to their face? If it does no good, don't post it" }
      ],
      why: { ar: "لا تكتب وأنت غاضب، ويكفيك أحيانًا ألا تكتب شيئًا.", en: "Don't write while angry; sometimes it is enough to write nothing." }
    },
    {
      id: "ah-q3", readingId: "ah-r2", type: "comprehension", correct: 0,
      q: { ar: "ما الذي غيّرته هالة في طريقة عملها؟", en: "What did Hala change in the way she works?" },
      options: [
        { ar: "صارت تعد بموعد تستطيع الوفاء به، وترفض ما لا يتسع له وقتها", en: "She promises dates she can keep, and turns down what her schedule can't hold" },
        { ar: "صارت تعمل الليل كله", en: "She started working all night" },
        { ar: "صارت تعتذر بأعذار أفضل", en: "She started giving better excuses" }
      ],
      why: { ar: "الوفاء يبدأ قبل الوعد: أن تعد بما تقدر عليه.", en: "Keeping a promise begins before making it: promise what you can do." }
    },
    {
      id: "ah-q4", readingId: "ah-r2", type: "comprehension", correct: 2,
      q: { ar: "ما علامات المنافق الثلاث في حديث البخاري 33؟", en: "What are the three signs of a hypocrite in Bukhari 33?" },
      options: [
        { ar: "الكسل، والغضب، والبخل", en: "Laziness, anger and stinginess" },
        { ar: "كثرة الكلام، والضحك، والنوم", en: "Talking, laughing and sleeping too much" },
        { ar: "الكذب في الحديث، وإخلاف الوعد، وخيانة الأمانة", en: "Lying when speaking, breaking promises, and betraying trust" }
      ],
      why: { ar: "«إِذَا حَدَّثَ كَذَبَ، وَإِذَا وَعَدَ أَخْلَفَ، وَإِذَا اؤْتُمِنَ خَانَ».", en: "«When he speaks he lies, when he promises he breaks it, and when he is trusted he betrays.»" }
    },
    {
      id: "ah-q5", readingId: "ah-r3", type: "comprehension", correct: 1,
      q: { ar: "ماذا قال النبي صلى الله عليه وآله وسلم حين أُخبر بكلام سلمان لأبي الدرداء؟", en: "What did the Prophet say when told what Salman said to Abu al-Darda?" },
      options: [
        { ar: "بل الأفضل أن يقوم الليل كله", en: "Rather, it is better to pray all night" },
        { ar: "«صَدَقَ سَلْمَانُ»", en: "«Salman has spoken the truth»" },
        { ar: "لا تتدخل في شأن أخيك", en: "Don't interfere in your brother's affairs" }
      ],
      why: { ar: "لربك عليك حق، ولنفسك حق، ولأهلك حق: فأعطِ كل ذي حق حقه.", en: "Your Lord has a right over you, your self has a right, your family has a right: give each its due." }
    },
    {
      id: "ah-q6", readingId: "ah-r4", type: "comprehension", correct: 0,
      q: { ar: "ما الأشياء الثلاثة في الاعتذار الصادق بحسب المقالة؟", en: "What are the three parts of a sincere apology, according to the article?" },
      options: [
        { ar: "تسمية الخطأ، والإقرار بأثره، وإصلاح ما يُستطاع", en: "Naming the mistake, acknowledging its effect, and repairing what one can" },
        { ar: "الاعتذار، ثم الشرح، ثم «لكن»", en: "Apologising, then explaining, then «but»" },
        { ar: "الهدية، والصمت، والانتظار", en: "A gift, silence and waiting" }
      ],
      why: { ar: "الاعتذار بلا «لكن» يداوي الجرح، والاعتذار الذي يحمل دفاعًا يزيده.", en: "An apology without «but» heals the wound; an apology with a defence inside deepens it." }
    },
    {
      id: "ah-q7", readingId: "ah-r4", type: "situation", correct: 1,
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
      id: "ah-q8", readingId: "ah-r5", type: "comprehension", correct: 2,
      q: { ar: "ما معنى «مَطْلُ الْغَنِيِّ ظُلْمٌ»؟", en: "What does «delay by one who is able to pay is injustice» mean?" },
      options: [
        { ar: "أن الاقتراض حرام", en: "That borrowing is forbidden" },
        { ar: "أن الغني لا يقترض", en: "That the rich never borrow" },
        { ar: "أن من قدر على أداء دينه فأخّره فقد ظلم", en: "That whoever is able to repay a debt and delays it has done wrong" }
      ],
      why: { ar: "سمّاه النبي ظلمًا، ولو كان صاحب الدين لا يطالب.", en: "The Prophet called it injustice, even when the lender does not ask." }
    },
    {
      id: "ah-q9", readingId: "ah-r6", type: "comprehension", correct: 0,
      q: { ar: "ما الأمور الثلاثة التي تنتظم منها التوبة عند الغزالي؟", en: "For al-Ghazali, what three things make up repentance?" },
      options: [
        { ar: "علم، وحال، وفعل", en: "Knowledge, state and action" },
        { ar: "صوم، وصدقة، وحج", en: "Fasting, charity and pilgrimage" },
        { ar: "كلمة، ودمعة، وصمت", en: "A word, a tear and silence" }
      ],
      why: { ar: "يعرف ضرر الذنب، فيندم، فيترك ويعزم ويصلح ما مضى.", en: "One knows the sin's harm, feels remorse, then leaves it, resolves, and repairs the past." }
    },
    {
      id: "ah-q10", readingId: "ah-r6", type: "situation", correct: 1,
      q: {
        ar: "تبت من الغيبة، ثم وقعت فيها مرة أخرى في مجلس. ما الأقرب إلى ما في المقالة؟",
        ar_f: "تبتِ من الغيبة، ثم وقعتِ فيها مرة أخرى في مجلس. ما الأقرب إلى ما في المقالة؟",
        en: "You repented of backbiting, then fell into it again at a gathering. What is closest to the article?"
      },
      options: [
        { ar: "أيأس، فلا فائدة من التوبة", en: "Despair; repentance is pointless" },
        { ar: "أتوب مرة أخرى، وأنظر فيما يسبقها عادة فأغيّره، وأذكر الغائب بخير", en: "Repent again, look at what usually comes before it and change that, and speak well of the person" },
        { ar: "أنتظر حتى أتأكد أني لن أعود، ثم أتوب", en: "Wait until I'm sure I won't return to it, then repent" }
      ],
      why: { ar: "باب التوبة لا يُغلق بالتكرار. وتغيير ما يسبق الذنب جزء من الفعل الذي تثمره التوبة.", en: "The door of repentance is not shut by repetition. Changing what precedes the sin is part of the action repentance bears." }
    },
    {
      id: "ah-q11", readingId: "ah-r7", type: "comprehension", correct: 2,
      q: { ar: "متى كان النبي صلى الله عليه وآله وسلم ينتقم بحسب حديث السيدة عائشة؟", en: "According to Lady Aisha's report, when did the Prophet take revenge?" },
      options: [
        { ar: "إذا أوذي في نفسه", en: "When he was harmed personally" },
        { ar: "إذا أخطأ أهل بيته", en: "When his household made a mistake" },
        { ar: "إذا انتُهكت حرمات الله، فينتقم لله", en: "When something Allah made sacred was violated, and then for Allah" }
      ],
      why: { ar: "لم ينتقم لنفسه قط. كفّ الأذى عنده في أعلى صوره.", en: "He never took revenge for himself: keeping harm away in its highest form." }
    },
    {
      id: "ah-q12", readingId: "ah-r8", type: "comprehension", correct: 1,
      q: { ar: "ما الذي نجّى كعب بن مالك رضي الله عنه بحسب قوله؟", en: "According to his own words, what saved Ka'b ibn Malik?" },
      options: [
        { ar: "قدرته على الجدل", en: "His skill in argument" },
        { ar: "الصدق", en: "Truthfulness" },
        { ar: "عذر قبله النبي صلى الله عليه وآله وسلم", en: "An excuse the Prophet accepted" }
      ],
      why: { ar: "«إِنَّ اللَّهَ إِنَّمَا نَجَّانِي بِالصِّدْقِ». كان قادرًا على العذر، واختار الاعتراف.", en: "«Allah saved me only through truthfulness.» He could have made excuses, and chose to admit." }
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
    { id: "ah-s3", q: { ar: "هل أعطي كل ذي حق حقه: ربي، ونفسي، وأهلي، وعملي؟", en: "Do I give each its due: my Lord, myself, my family, my work?" } },
    { id: "ah-s4", q: { ar: "هل أعتذر حين أخطئ، دون «لكن»؟", en: "Do I apologise when I'm wrong, without «but»?" } },
    { id: "ah-s5", q: { ar: "هل أردّ الديون والأمانات في وقتها؟", en: "Do I return debts and trusts on time?" } }
  ]
};

/* ───────────── الإبهام: السابق بالخيرات للكبار / Racing to good, adult ───────────── */
window.AKHLAQ_CONTENT_ADULT.stages.sabiq = {
  name: { ar: "السابق بالخيرات", en: "Racing to good" },
  short: {
    ar: "سلوك المبادرة بالخير: يسبق إلى الخير قبل أن يُطلب منه، في بيته وحيّه ومسجده، ويأخذ بيد غيره ليصعد معه، ويعرف أن سبقه بإذن الله وفضله. وهو بداية الترقي، ودرجات يتفاوت الناس فيها تفاوتًا كبيرًا.",
    en: "The behaviour of taking the lead in good: hurrying to good before being asked, at home, in the neighbourhood and in the mosque, taking others by the hand to climb together, and knowing that one's lead is by Allah's leave and grace. It is where the ascent begins, with degrees in which people differ greatly."
  },
  signs: [
    { ar: "رؤية ما يحتاج إلى عمل في البيت أو الحي أو المسجد، وعمله قبل أن يُطلب.", en: "Seeing what needs doing at home, in the neighbourhood or the mosque, and doing it before being asked." },
    { ar: "جار يُسأل عنه إذا غاب، ويُعان إذا احتاج.", en: "A neighbour asked after when absent, and helped when in need." },
    { ar: "صدقة خفية لا يعرفها إلا الله.", en: "Hidden charity that only Allah knows of." },
    { ar: "علم أو مهارة تُعلَّم لمن يحتاج إليها دون مقابل.", en: "Knowledge or a skill taught, free, to someone who needs it." },
    { ar: "ساعات تطوع ثابتة، مع الأهل أو الأصحاب، والفرح إذا سبق غيرك إلى الخير.", en: "Regular hours of volunteering with family or friends, and joy when someone else gets to the good first." }
  ],
  climb: [
    { ar: "أجعل لي كل يوم عملًا خفيًّا لا يعرفه إلا الله.", en: "Each day I keep one hidden deed that only Allah knows." },
    { ar: "أسأل عن جاري، وأبدأه بالسلام والهدية.", en: "I ask after my neighbour, and greet them first and bring a gift." },
    { ar: "أعين غيري على الخير بالكلمة الطيبة لا باللوم.", en: "I help others toward good with kind words, not blame." },
    { ar: "لا أغترّ بعملي، فالسبق بإذن الله، وأنا أحتاج الهداية كل يوم.", en: "I am not deceived by my deeds: any lead is by Allah's leave, and I need guidance every day." }
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
        id: "as-d1q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "لاحظت أن إشارة المرور قرب مدرسة الحي معطلة منذ أسبوع، والأطفال يعبرون بصعوبة. ما الأقرب إلى المبادرة بالخير؟",
          ar_f: "لاحظتِ أن إشارة المرور قرب مدرسة الحي معطلة منذ أسبوع، والأطفال يعبرون بصعوبة. ما الأقرب إلى المبادرة بالخير؟",
          en: "You notice the traffic light near the neighbourhood school has been broken for a week, and the children struggle to cross. What is closest to taking the lead in good?"
        },
        options: [
          { ar: "أنتظر حتى تصلحها البلدية", en: "Wait for the council to fix it" },
          { ar: "أبلّغ الجهة المسؤولة اليوم، وأتفق مع بعض الجيران على مساعدة الأطفال في العبور حتى تُصلح", en: "Report it today, and arrange with some neighbours to help the children cross until it is fixed" },
          { ar: "أنشر صورة غاضبة على الإنترنت", en: "Post an angry photo online" }
        ],
        why: {
          ar: "المبادر لا ينتظر أن يُكلَّف. والمبادرة النافعة عمل، لا شكوى.",
          en: "One who takes the lead doesn't wait to be told. Useful initiative is action, not complaint."
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
        id: "as-d2q", type: "situation", readingId: null, correct: 1,
        q: {
          ar: "سبقك زميلك في المسجد إلى فكرة درس أسبوعي للشباب كنت تفكر فيها، ونال الثناء عليها. ماذا تفعل؟",
          ar_f: "سبقتكِ صديقتك إلى فكرة حلقة أسبوعية للفتيات كنتِ تفكرين فيها، ونالت الثناء عليها. ماذا تفعلين؟",
          en: "Someone at the mosque beats you to the idea of a weekly class for young people that you had in mind, and is praised for it. What do you do?"
        },
        options: [
          { ar: "أبتعد عن الدرس، فالفكرة كانت فكرتي", ar_f: "أبتعد عن الحلقة، فالفكرة كانت فكرتي", en: "Keep away from the class; the idea was mine" },
          { ar: "أشكره، وأعرض أن أعينه فيه", ar_f: "أشكرها، وأعرض أن أعينها فيها", en: "Thank them and offer to help with it" },
          { ar: "أبدأ درسًا آخر في الوقت نفسه لأثبت أنني أفضل", ar_f: "أبدأ حلقة أخرى في الوقت نفسه لأثبت أنني أفضل", en: "Start another class at the same time to prove I'm better" }
        ],
        why: {
          ar: "التنافس في الخير لا يجعل الآخر خصمًا. ومن أعان على خير شارك في أجره.",
          en: "Competing in good does not make the other a rival. Whoever helps with a good shares in its reward."
        }
      }
    }
  ],
  readings: [
    {
      id: "as-r1", minutes: 4, ages: "18+",
      title: { ar: "جار لا نعرف اسمه", en: "A neighbour whose name we don't know" },
      body: {
        ar: [
          "في عمارة من ثمانية طوابق قد يعيش الناس سنوات دون أن يعرف أحدهم اسم جاره. يلتقون في المصعد، ويتبادلون التحية بإيماءة، ثم يغلق كل منهم بابه. وقد يمرض الجار أو يحزن أو يرحل، ولا يعلم به من يسكن خلف الجدار.",
          "وقالت السيدة عائشة إن النبي صلى الله عليه وآله وسلم قال: «مَا زَالَ يُوصِينِي جِبْرِيلُ بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ» (البخاري 6014). وصية تتكرر حتى يظن النبي أن الجار سيصير من الورثة.",
          "وللجار حقان: حق لا يتم الإيمان إلا به، وهو ألا يُؤذى، فقد قال صلى الله عليه وآله وسلم: «لاَ يَدْخُلُ الْجَنَّةَ مَنْ لاَ يَأْمَنُ جَارُهُ بَوَائِقَهُ» (صحيح مسلم 46). وحق يسبق إليه السابقون، وهو الإكرام: أن تبدأه بالسلام، وتسأل عنه إذا غاب، وتعينه إذا احتاج.",
          "والمبادرة مع الجار سهلة إذا بدأت صغيرة: طبق من طعامك في أول رمضان، أو بطاقة ترحيب لجار جديد، أو رقم هاتفك لجار مسن يعيش وحده.",
          "خطوات عملية: تعرّف هذا الأسبوع إلى اسم جار واحد لا تعرفه. وإذا طبخت شيئًا طيبًا فأرسل منه طبقًا. وإن كان في عمارتك من يعيش وحده فاترك له رقمك، وقل له: إن احتجت شيئًا فاتصل بي."
        ],
        ar_f: [
          "في عمارة من ثمانية طوابق قد يعيش الناس سنوات دون أن يعرف أحدهم اسم جاره. يلتقون في المصعد، ويتبادلون التحية بإيماءة، ثم يغلق كل منهم بابه. وقد يمرض الجار أو يحزن أو يرحل، ولا يعلم به من يسكن خلف الجدار.",
          "وقالت السيدة عائشة إن النبي صلى الله عليه وآله وسلم قال: «مَا زَالَ يُوصِينِي جِبْرِيلُ بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ» (البخاري 6014). وصية تتكرر حتى يظن النبي أن الجار سيصير من الورثة.",
          "وللجار حقان: حق لا يتم الإيمان إلا به، وهو ألا يُؤذى، فقد قال صلى الله عليه وآله وسلم: «لاَ يَدْخُلُ الْجَنَّةَ مَنْ لاَ يَأْمَنُ جَارُهُ بَوَائِقَهُ» (صحيح مسلم 46). وحق يسبق إليه السابقون، وهو الإكرام: أن تبدئيه بالسلام، وتسألي عنه إذا غاب، وتعينيه إذا احتاج.",
          "والمبادرة مع الجار سهلة إذا بدأت صغيرة: طبق من طعامك في أول رمضان، أو بطاقة ترحيب لجارة جديدة، أو رقم هاتفك لجارة مسنة تعيش وحدها.",
          "خطوات عملية: تعرّفي هذا الأسبوع إلى اسم جارة واحدة لا تعرفينها. وإذا طبختِ شيئًا طيبًا فأرسلي منه طبقًا. وإن كان في عمارتك من تعيش وحدها فاتركي لها رقمك، وقولي لها: إن احتجتِ شيئًا فاتصلي بي."
        ],
        en: [
          "In an eight-storey building people may live for years without knowing their neighbours' names. They meet in the lift, nod a greeting, and each closes their door. A neighbour may fall ill, grieve or move away, and the person behind the wall never knows.",
          "Lady Aisha reported that the Prophet, peace and blessings be upon him and his family, said: «Jibril kept enjoining me to treat the neighbour well until I thought he would make him an heir» (Bukhari 6014). Counsel repeated until the Prophet thought the neighbour would be counted among the heirs.",
          "A neighbour has two rights. One without which faith is incomplete: not to be harmed. He said: «He will not enter Paradise whose neighbour is not safe from his harm» (Sahih Muslim 46). And one that those who race to good hurry toward: honour. Greeting them first, asking after them when they are away, helping when they are in need.",
          "Taking the lead with a neighbour is easy when it starts small: a plate of your food at the start of Ramadan, a welcome card for a new neighbour, your phone number for an elderly neighbour who lives alone.",
          "Practical steps: this week, learn the name of one neighbour you don't know. When you cook something good, send a plate. If someone in your building lives alone, leave them your number and say: if you need anything, call me."
        ]
      },
      quote: {
        ar: "«مَا زَالَ يُوصِينِي جِبْرِيلُ بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ»",
        en: "Meaning: Jibril kept enjoining me to treat the neighbour well until I thought he would make him an heir.",
        ref: "صحيح البخاري 6014، عن عائشة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "مقالة مع حديثين في صحيحي البخاري ومسلم (مسلم 46، ترقيم sunnah.com: الكتاب 1، الحديث 79).", en: "An article with hadiths in Sahih al-Bukhari and Sahih Muslim (Muslim 46, sunnah.com: book 1, hadith 79)." }
    },
    {
      id: "as-r2", minutes: 4, ages: "18+",
      title: { ar: "من يفتح باب المسجد", en: "The one who opens the mosque door" },
      body: {
        ar: [
          "في كل حي إنسان لا ينتبه إليه أحد: يفتح باب المسجد قبل الفجر، ويشغّل التدفئة في الشتاء، ويرتب المصاحف بعد الصلاة، ويملأ قوارير الماء. يعرفه المصلون بوجهه، وقليل منهم يعرف اسمه.",
          "روى أبو هريرة رضي الله عنه أن رجلًا أسود، أو امرأة سوداء، كان يَقُمّ المسجد، أي ينظفه، فمات. فسأل النبي صلى الله عليه وآله وسلم عنه، فقالوا: مات. فقال: «أَفَلاَ كُنْتُمْ آذَنْتُمُونِي بِهِ دُلُّونِي عَلَى قَبْرِهِ»، فأتى قبره فصلى عليه (البخاري 458).",
          "لم يعدّه الناس شأنًا يُخبر به النبي، وعدّه النبي صلى الله عليه وآله وسلم شأنًا يُخرج إليه. خدمة المسجد عند الله أكبر مما تبدو عند الناس، وقد قال تعالى: ﴿إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ﴾ (التوبة 9:18).",
          "وعمارة المسجد اليوم أبواب كثيرة: ترتيب، وتنظيف، وإصلاح عطل، وتعليم الصغار، وزيارة المصلي الذي غاب، وتبرع بما يحتاجه المسجد من مال أو مهارة.",
          "خطوات عملية: اسأل إمام مسجدك أو القائم عليه: ما الذي يحتاجه المسجد ولا يقوم به أحد؟ واختر منه عملًا تستطيع المداومة عليه، ولو ساعة في الشهر. وإذا عرفت خادم المسجد فاعرف اسمه، واشكره، وادعُ له."
        ],
        ar_f: [
          "في كل حي إنسان لا ينتبه إليه أحد: يفتح باب المسجد قبل الفجر، ويشغّل التدفئة في الشتاء، ويرتب المصاحف بعد الصلاة، ويملأ قوارير الماء. يعرفه المصلون بوجهه، وقليل منهم يعرف اسمه.",
          "روى أبو هريرة رضي الله عنه أن رجلًا أسود، أو امرأة سوداء، كان يَقُمّ المسجد، أي ينظفه، فمات. فسأل النبي صلى الله عليه وآله وسلم عنه، فقالوا: مات. فقال: «أَفَلاَ كُنْتُمْ آذَنْتُمُونِي بِهِ دُلُّونِي عَلَى قَبْرِهِ»، فأتى قبره فصلى عليه (البخاري 458).",
          "لم يعدّه الناس شأنًا يُخبر به النبي، وعدّه النبي صلى الله عليه وآله وسلم شأنًا يُخرج إليه. خدمة المسجد عند الله أكبر مما تبدو عند الناس، وقد قال تعالى: ﴿إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ﴾ (التوبة 9:18).",
          "وعمارة المسجد اليوم أبواب كثيرة: ترتيب، وتنظيف، وإصلاح عطل، وتعليم الصغار، وزيارة المصلية التي غابت، وتبرع بما يحتاجه المسجد من مال أو مهارة.",
          "خطوات عملية: اسألي القائمين على مصلى النساء في مسجدك: ما الذي يحتاجه المسجد ولا يقوم به أحد؟ واختاري منه عملًا تستطيعين المداومة عليه، ولو ساعة في الشهر. وإذا عرفتِ من تخدم المسجد فاعرفي اسمها، واشكريها، وادعي لها."
        ],
        en: [
          "In every neighbourhood there is someone nobody notices: they open the mosque door before Fajr, switch on the heating in winter, tidy the copies of the Quran after prayer, refill the water bottles. The worshippers know their face; few know their name.",
          "Abu Hurayra, may Allah be pleased with him, reported that a black man, or a black woman, used to sweep the mosque, and died. The Prophet, peace and blessings be upon him and his family, asked about him, and they said: he died. He said: «Why did you not tell me? Show me his grave.» He went to the grave and prayed over him (Bukhari 458).",
          "People did not think it worth telling the Prophet about; the Prophet thought it worth going out for. Serving the mosque is greater with Allah than it looks to people. Allah says, meaning: the mosques of Allah are maintained only by those who believe in Allah and the Last Day (at-Tawba 9:18).",
          "Maintaining a mosque today has many doors: tidying, cleaning, fixing what is broken, teaching children, visiting a worshipper who has been absent, giving the mosque money or a skill it needs.",
          "Practical steps: ask your mosque's imam or caretaker what the mosque needs that no one is doing. Choose one thing you can keep up, even one hour a month. And if you know who serves the mosque, learn their name, thank them, and pray for them."
        ]
      },
      quote: {
        ar: "«أَفَلاَ كُنْتُمْ آذَنْتُمُونِي بِهِ دُلُّونِي عَلَى قَبْرِهِ»",
        en: "Meaning: Why did you not tell me? Show me his grave.",
        ref: "صحيح البخاري 458، عن أبي هريرة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "مقالة مع حديث في صحيح البخاري وآية من سورة التوبة.", en: "An article with a hadith in Sahih al-Bukhari and a verse from at-Tawba." }
    },
    {
      id: "as-r3", minutes: 4, ages: "18+",
      title: { ar: "ساعة بعد العصر", en: "An hour after Asr" },
      body: {
        ar: [
          "تقاعد الأستاذ فؤاد بعد ثلاثين سنة في تدريس الرياضيات. وفي الشهر الأول بعد التقاعد شعر بفراغ ثقيل، حتى رأى في المسجد أولادًا يراجعون واجباتهم بصعوبة بعد صلاة العصر، ولا أحد يساعدهم.",
          "جلس معهم يومًا، ثم صار يجلس كل يوم. وبعد سنة صار في المسجد درس منتظم للرياضيات وتلاوة القرآن، يأتيه ثلاثون ولدًا، ومعه شابان من تلاميذه القدامى يعينانه.",
          "قال النبي صلى الله عليه وآله وسلم: «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ» (البخاري 5027). وتعليم القرآن رأس التعليم، وكل علم نافع يعلّمه المسلم لغيره بنية صالحة من الخير الذي يسبق إليه.",
          "وفي صحيح مسلم أن رجلًا جاء النبي صلى الله عليه وآله وسلم يطلب دابة يُحمل عليها، فقال: «مَا عِنْدِي». فقال رجل: يا رسول الله، أنا أدلّه على من يحمله. فقال: «مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ» (صحيح مسلم 1893). فمن لم يملك ما يُعطي، فليدلّ على من يملك.",
          "خطوات عملية: اكتب ثلاثة أشياء تعرفها جيدًا: لغة، أو مهارة في عملك، أو سورة تتقن تلاوتها. واسأل: من حولي يحتاج إلى واحد منها؟ ثم ابدأ بساعة واحدة في الأسبوع."
        ],
        ar_f: [
          "تقاعد الأستاذ فؤاد بعد ثلاثين سنة في تدريس الرياضيات. وفي الشهر الأول بعد التقاعد شعر بفراغ ثقيل، حتى رأى في المسجد أولادًا يراجعون واجباتهم بصعوبة بعد صلاة العصر، ولا أحد يساعدهم.",
          "جلس معهم يومًا، ثم صار يجلس كل يوم. وبعد سنة صار في المسجد درس منتظم للرياضيات وتلاوة القرآن، يأتيه ثلاثون ولدًا، ومعه شابان من تلاميذه القدامى يعينانه.",
          "قال النبي صلى الله عليه وآله وسلم: «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ» (البخاري 5027). وتعليم القرآن رأس التعليم، وكل علم نافع يعلّمه المسلم لغيره بنية صالحة من الخير الذي يسبق إليه.",
          "وفي صحيح مسلم أن رجلًا جاء النبي صلى الله عليه وآله وسلم يطلب دابة يُحمل عليها، فقال: «مَا عِنْدِي». فقال رجل: يا رسول الله، أنا أدلّه على من يحمله. فقال: «مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ» (صحيح مسلم 1893). فمن لم يملك ما يُعطي، فليدلّ على من يملك.",
          "خطوات عملية: اكتبي ثلاثة أشياء تعرفينها جيدًا: لغة، أو مهارة في عملك، أو سورة تتقنين تلاوتها. واسألي: من حولي يحتاج إلى واحد منها؟ ثم ابدئي بساعة واحدة في الأسبوع."
        ],
        en: [
          "Mr Fuad retired after thirty years of teaching mathematics. In his first month of retirement he felt a heavy emptiness, until he saw boys in the mosque struggling with their homework after the Asr prayer, with no one to help.",
          "He sat with them one day, then every day. A year later the mosque had a regular class in mathematics and Quran recitation, attended by thirty children, with two young men, his former pupils, helping him.",
          "The Prophet, peace and blessings be upon him and his family, said: «The best of you is the one who learns the Quran and teaches it» (Bukhari 5027). Teaching the Quran heads all teaching, and any useful knowledge a Muslim teaches others with good intention belongs to the good one races toward.",
          "In Sahih Muslim, a man came to the Prophet asking for a mount to carry him, and he said: «I have none.» Another man said: Messenger of Allah, I will direct him to someone who can carry him. He said: «Whoever guides to good has a reward like that of the one who does it» (Sahih Muslim 1893). Whoever has nothing to give can point to someone who has.",
          "Practical steps: write down three things you know well: a language, a skill from your work, a surah you recite well. Ask: who around me needs one of these? Then start with one hour a week."
        ]
      },
      quote: {
        ar: "«خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»",
        en: "Meaning: The best of you is the one who learns the Quran and teaches it.",
        ref: "صحيح البخاري 5027، عن عثمان بن عفان", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع حديثين في صحيحي البخاري ومسلم (مسلم 1893، ترقيم sunnah.com: الكتاب 33، الحديث 195).", en: "An original story with fictional characters, with hadiths in Sahih al-Bukhari and Sahih Muslim (Muslim 1893, sunnah.com: book 33, hadith 195)." }
    },
    {
      id: "as-r4", minutes: 3, ages: "18+",
      title: { ar: "عند الصيدلية", en: "At the pharmacy" },
      body: {
        ar: [
          "وقف حامد في الصيدلية خلف امرأة مسنة، سمعها تسأل الصيدلي عن ثمن دوائها، ثم تعيد علبة منه إلى الرف لأن ما معها لا يكفي.",
          "خرجت المرأة. فدفع حامد ثمن العلبة، وطلب من الصيدلي أن يتصل بها ويقول إن الدواء صار متوفرًا بسعر أقل، دون أن يذكر اسمه. ثم اتفق معه أن يترك عنده مبلغًا كل شهر لمن يعجز عن دوائه.",
          "ذكر النبي صلى الله عليه وآله وسلم في السبعة الذين يظلهم الله في ظله يوم لا ظل إلا ظله: «وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لاَ تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ» (البخاري 1423).",
          "وفي إخفاء الصدقة حفظ لأمرين: قلب المعطي من أن يطلب ثناء الناس، وكرامة الآخذ من أن يُرى محتاجًا. ولذلك كانت الصدقة الخفية من أعلى الخير: لا يعرفها إلا الله، ولا يُنتظر عليها إلا أجره."
        ],
        en: [
          "Hamid stood in the pharmacy behind an elderly woman. He heard her ask the pharmacist the price of her medicine, then put one box back on the shelf because she did not have enough.",
          "The woman left. Hamid paid for the box and asked the pharmacist to call her and say the medicine had become available at a lower price, without mentioning his name. Then he arranged to leave a sum with him every month for anyone who could not afford their medicine.",
          "Among the seven whom Allah will shade in His shade on the day when there is no shade but His, the Prophet, peace and blessings be upon him and his family, mentioned: «a man who gave charity and hid it so that his left hand does not know what his right hand spends» (Bukhari 1423).",
          "Hiding charity protects two things: the giver's heart from seeking people's praise, and the receiver's dignity from being seen in need. That is why hidden charity is among the highest good: only Allah knows it, and nothing is awaited for it but His reward."
        ]
      },
      quote: {
        ar: "«وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لاَ تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ»",
        en: "Meaning: A man who gave charity and hid it so that his left hand does not know what his right hand spends.",
        ref: "صحيح البخاري 1423، عن أبي هريرة", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "قصة مؤلفة بشخصيات خيالية، مع حديث في صحيح البخاري.", en: "An original story with fictional characters, with a hadith in Sahih al-Bukhari." }
    },
    {
      id: "as-r5", minutes: 4, ages: "18+",
      title: { ar: "ساعتان في الشهر", en: "Two hours a month" },
      body: {
        ar: [
          "يقول كثير منا: أحب أن أتطوع، لكن ليس عندي وقت. ثم يمضي الشهر وفيه ساعات كثيرة ضاعت بين الشاشات. والتطوع لا يحتاج إلى تفرغ، بل إلى ساعة ثابتة يُتّفق عليها ولا تُترك.",
          "والقرآن يجعل التعاون على الخير أمرًا: ﴿وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ﴾ (المائدة 5:2). والتعاون عمل جماعة: يجمع كل واحد ما عنده إلى ما عند غيره.",
          "وجعل النبي صلى الله عليه وآله وسلم أبواب الصدقة واسعة: «كُلُّ سُلاَمَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ»، وذكر منها: «وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ... وَيُمِيطُ الأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ» (البخاري 2989). فكل عضو في الجسد عليه شكر، وكل خدمة للناس من هذا الشكر.",
          "أبواب التطوع قريبة: توزيع طعام في رمضان، وزيارة مرضى في مستشفى، وتنظيف حديقة الحي، ومساعدة جمعية تعتني بالأيتام، ونقل كبير في السن إلى موعده عند الطبيب.",
          "خطوات عملية: اختر مع أهلك أو أصحابك عملًا تطوعيًّا واحدًا، وحدّدوا له ساعتين ثابتتين في الشهر، واكتبوه في التقويم كما تكتبون موعد العمل. وخذ أولادك معك إن استطعت، فهم يتعلمون الخير بالمشاركة قبل أن يتعلموه بالكلام."
        ],
        ar_f: [
          "يقول كثير منا: أحب أن أتطوع، لكن ليس عندي وقت. ثم يمضي الشهر وفيه ساعات كثيرة ضاعت بين الشاشات. والتطوع لا يحتاج إلى تفرغ، بل إلى ساعة ثابتة يُتّفق عليها ولا تُترك.",
          "والقرآن يجعل التعاون على الخير أمرًا: ﴿وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ﴾ (المائدة 5:2). والتعاون عمل جماعة: يجمع كل واحد ما عنده إلى ما عند غيره.",
          "وجعل النبي صلى الله عليه وآله وسلم أبواب الصدقة واسعة: «كُلُّ سُلاَمَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ»، وذكر منها: «وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ... وَيُمِيطُ الأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ» (البخاري 2989). فكل عضو في الجسد عليه شكر، وكل خدمة للناس من هذا الشكر.",
          "أبواب التطوع قريبة: توزيع طعام في رمضان، وزيارة مرضى في مستشفى، وتنظيف حديقة الحي، ومساعدة جمعية تعتني بالأيتام، ونقل كبيرة في السن إلى موعدها عند الطبيب.",
          "خطوات عملية: اختاري مع أهلك أو صديقاتك عملًا تطوعيًّا واحدًا، وحدّدوا له ساعتين ثابتتين في الشهر، واكتبوه في التقويم كما تكتبون موعد العمل. وخذي أولادك معك إن استطعتِ، فهم يتعلمون الخير بالمشاركة قبل أن يتعلموه بالكلام."
        ],
        en: [
          "Many of us say: I'd love to volunteer, but I have no time. Then the month goes by with many hours lost among screens. Volunteering doesn't need free days; it needs one fixed hour that is agreed on and kept.",
          "The Quran makes cooperation in good a command, meaning: help one another in righteousness and piety, and do not help one another in sin and aggression (al-Ma'ida 5:2). Cooperation is group work: each person adds what they have to what others have.",
          "The Prophet, peace and blessings be upon him and his family, made the doors of charity wide: «Every joint of a person owes a charity every day the sun rises», and among them he named: «a good word is charity... and removing something harmful from the road is charity» (Bukhari 2989). Every part of the body owes thanks, and every service to people is part of that thanks.",
          "The doors of volunteering are close: handing out food in Ramadan, visiting patients in hospital, cleaning the neighbourhood park, helping an association that cares for orphans, driving an elderly person to a doctor's appointment.",
          "Practical steps: with your family or friends, choose one volunteering activity, set two fixed hours a month for it, and put it in the calendar as you would a work appointment. Take your children along if you can; they learn good by sharing in it before they learn it from words."
        ]
      },
      quote: {
        ar: "﴿وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ﴾",
        en: "Meaning (not a translation): Help one another in righteousness and piety, and do not help one another in sin and aggression.",
        ref: "المائدة 5:2", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "مقالة مع آية من سورة المائدة وحديث في صحيح البخاري.", en: "An article with a verse from al-Ma'ida and a hadith in Sahih al-Bukhari." }
    },
    {
      id: "as-r6", minutes: 5, ages: "18+",
      title: { ar: "سابق بإذن الله", en: "Ahead, by Allah's leave" },
      body: {
        ar: [
          "في سورة فاطر آية ترسم المراتب كلها: ﴿فَمِنْهُمْ ظَالِمٌ لِنَفْسِهِ وَمِنْهُمْ مُقْتَصِدٌ وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ بِإِذْنِ اللَّهِ ۚ ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ﴾ (فاطر 35:32). ظالم لنفسه بما يقع فيه، ومقتصد يؤدي ما عليه ويكفّ أذاه، وسابق يزيد على الواجب.",
          "وفي الآية كلمتان تحرسان السابق من أخطر ما يصيبه، وهو العُجب: «بِإِذْنِ اللَّهِ»، و«ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ». السبق نفسه إذن من الله وفضل منه، لا ملك للسابق يفخر به على من خلفه.",
          "ومن علامات العجب أن ينظر الإنسان إلى من دونه في الخير نظرة استعلاء، أو أن يحب أن يُعرف بعمله، أو أن يظن أنه وصل فيتوقف. والسابق الحقيقي يرى ما بقي عليه أكثر مما قطع، ويخاف أن يتغير قلبه، فقد قال النبي صلى الله عليه وآله وسلم: «بَادِرُوا بِالأَعْمَالِ فِتَنًا كَقِطَعِ اللَّيْلِ الْمُظْلِمِ» (صحيح مسلم 118).",
          "والقرآن يأمر بالسباق صراحة: ﴿فَاسْتَبِقُوا الْخَيْرَاتِ﴾ (البقرة 2:148). لكنه سباق لا خاسر فيه: من سبقك لم يأخذ مكانك، ومن أعنته شاركته في أجره. ولذلك يفرح السابق إذا سبقه غيره.",
          "خطوات عملية: إذا عملت خيرًا فقل: الحمد لله الذي وفّقني، ولا تحدّث به إلا لحاجة. وإذا رأيت من هو دونك في الخير فادعُ له ولا تحتقره، فلعله يسبقك غدًا. واسأل الله الثبات كل يوم، فالقلوب تتقلب."
        ],
        ar_f: [
          "في سورة فاطر آية ترسم المراتب كلها: ﴿فَمِنْهُمْ ظَالِمٌ لِنَفْسِهِ وَمِنْهُمْ مُقْتَصِدٌ وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ بِإِذْنِ اللَّهِ ۚ ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ﴾ (فاطر 35:32). ظالم لنفسه بما يقع فيه، ومقتصد يؤدي ما عليه ويكفّ أذاه، وسابق يزيد على الواجب.",
          "وفي الآية كلمتان تحرسان السابق من أخطر ما يصيبه، وهو العُجب: «بِإِذْنِ اللَّهِ»، و«ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ». السبق نفسه إذن من الله وفضل منه، لا ملك للسابق يفخر به على من خلفه.",
          "ومن علامات العجب أن ينظر الإنسان إلى من دونه في الخير نظرة استعلاء، أو أن يحب أن يُعرف بعمله، أو أن يظن أنه وصل فيتوقف. والسابق الحقيقي يرى ما بقي عليه أكثر مما قطع، ويخاف أن يتغير قلبه، فقد قال النبي صلى الله عليه وآله وسلم: «بَادِرُوا بِالأَعْمَالِ فِتَنًا كَقِطَعِ اللَّيْلِ الْمُظْلِمِ» (صحيح مسلم 118).",
          "والقرآن يأمر بالسباق صراحة: ﴿فَاسْتَبِقُوا الْخَيْرَاتِ﴾ (البقرة 2:148). لكنه سباق لا خاسر فيه: من سبقك لم يأخذ مكانك، ومن أعنته شاركته في أجره. ولذلك يفرح السابق إذا سبقه غيره.",
          "خطوات عملية: إذا عملتِ خيرًا فقولي: الحمد لله الذي وفّقني، ولا تحدّثي به إلا لحاجة. وإذا رأيتِ من هي دونك في الخير فادعي لها ولا تحتقريها، فلعلها تسبقك غدًا. واسألي الله الثبات كل يوم، فالقلوب تتقلب."
        ],
        en: [
          "A verse in Surat Fatir maps all the stages, meaning: among them is one who wrongs himself, one who is moderate, and one who races ahead in good deeds by Allah's leave; that is the great favour (Fatir 35:32). One who wrongs himself by what he falls into, a moderate one who does what is owed and keeps harm away, and one who races beyond what is required.",
          "Two phrases in the verse guard the one who races ahead from the worst thing that can befall him, self-admiration: «by Allah's leave», and «that is the great favour». The lead itself is Allah's leave and His favour, not a possession to boast of over those behind.",
          "Signs of self-admiration include looking down on those less advanced in good, loving to be known for one's deeds, or thinking one has arrived and stopping. The one truly ahead sees more road still to go than road travelled, and fears a change of heart. The Prophet, peace and blessings be upon him and his family, said: «Hasten to good deeds before trials like pieces of a dark night» (Sahih Muslim 118).",
          "The Quran commands the race plainly, meaning: race to good things (al-Baqara 2:148). But it is a race with no losers: whoever gets ahead of you has not taken your place, and whoever you help, you share in their reward. That is why the one ahead is glad when someone else gets ahead.",
          "Practical steps: when you do some good, say: praise be to Allah who enabled me, and speak of it only when there is a need. When you see someone less advanced in good, pray for them and don't look down on them; they may be ahead of you tomorrow. And ask Allah for steadfastness every day, for hearts turn."
        ]
      },
      quote: {
        ar: "﴿فَمِنْهُمْ ظَالِمٌ لِنَفْسِهِ وَمِنْهُمْ مُقْتَصِدٌ وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ بِإِذْنِ اللَّهِ ۚ ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ﴾",
        en: "Meaning (not a translation): Among them is one who wrongs himself, one who is moderate, and one who races ahead in good deeds by Allah's leave; that is the great favour.",
        ref: "فاطر 35:32", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
      },
      source: { ar: "مقالة مع آيتين من سورتي فاطر والبقرة، وحديث في صحيح مسلم (118، ترقيم sunnah.com: الكتاب 1، الحديث 220).", en: "An article with verses from Fatir and al-Baqara, and a hadith in Sahih Muslim (118, sunnah.com: book 1, hadith 220)." }
    },
    {
      id: "as-r7", summit: true, minutes: 3, ages: "18+",
      title: { ar: "القمة: أجود من الريح المرسلة", en: "The summit: more generous than the sent wind" },
      body: {
        ar: [
          "قال ابن عباس رضي الله عنهما: «كَانَ رَسُولُ اللَّهِ» صلى الله عليه وآله وسلم «أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدُ مَا يَكُونُ فِي رَمَضَانَ حِينَ يَلْقَاهُ جِبْرِيلُ، وَكَانَ يَلْقَاهُ فِي كُلِّ لَيْلَةٍ مِنْ رَمَضَانَ فَيُدَارِسُهُ الْقُرْآنَ، فَلَرَسُولُ اللَّهِ» صلى الله عليه وآله وسلم «أَجْوَدُ بِالْخَيْرِ مِنَ الرِّيحِ الْمُرْسَلَةِ» (البخاري 6).",
          "الريح المرسلة لا تنتظر من يطلبها، ولا تختار أرضًا دون أرض، وتصل إلى البعيد قبل القريب. وهذه صورة المبادرة في أعلى درجاتها: خير يسبق السؤال، ويعم الناس.",
          "وفي الخبر سرّ هذا الجود: كان أجود ما يكون حين يدارسه جبريل القرآن. فكلما قرب القلب من كلام الله اتسعت اليد بالعطاء. والسبق إلى الخير ثمرة قرب، قبل أن يكون جهدًا.",
          "سؤال للتأمل: ما الخير الذي تعطيه إذا طُلب منك فقط؟ وكيف يكون لو سبقت به الطلب؟"
        ],
        ar_f: [
          "قال ابن عباس رضي الله عنهما: «كَانَ رَسُولُ اللَّهِ» صلى الله عليه وآله وسلم «أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدُ مَا يَكُونُ فِي رَمَضَانَ حِينَ يَلْقَاهُ جِبْرِيلُ، وَكَانَ يَلْقَاهُ فِي كُلِّ لَيْلَةٍ مِنْ رَمَضَانَ فَيُدَارِسُهُ الْقُرْآنَ، فَلَرَسُولُ اللَّهِ» صلى الله عليه وآله وسلم «أَجْوَدُ بِالْخَيْرِ مِنَ الرِّيحِ الْمُرْسَلَةِ» (البخاري 6).",
          "الريح المرسلة لا تنتظر من يطلبها، ولا تختار أرضًا دون أرض، وتصل إلى البعيد قبل القريب. وهذه صورة المبادرة في أعلى درجاتها: خير يسبق السؤال، ويعم الناس.",
          "وفي الخبر سرّ هذا الجود: كان أجود ما يكون حين يدارسه جبريل القرآن. فكلما قرب القلب من كلام الله اتسعت اليد بالعطاء. والسبق إلى الخير ثمرة قرب، قبل أن يكون جهدًا.",
          "سؤال للتأمل: ما الخير الذي تعطينه إذا طُلب منك فقط؟ وكيف يكون لو سبقتِ به الطلب؟"
        ],
        en: [
          "Ibn Abbas, may Allah be pleased with them both, said: «The Messenger of Allah, peace and blessings be upon him and his family, was the most generous of people, and he was most generous in Ramadan when Jibril met him. Jibril met him every night of Ramadan and studied the Quran with him. The Messenger of Allah was more generous in good than the sent wind» (Bukhari 6).",
          "The sent wind does not wait to be asked, does not choose one land over another, and reaches the far before the near. This is initiative at its highest: good that comes before the request, and reaches everyone.",
          "The report also holds the secret of this generosity: he was most generous when Jibril studied the Quran with him. The nearer the heart comes to Allah's words, the wider the hand opens. Racing to good is the fruit of nearness before it is effort.",
          "A question to reflect on: what good do you give only when asked? What would it be like if you gave it before the asking?"
        ]
      },
      quote: {
        ar: "«أَجْوَدُ بِالْخَيْرِ مِنَ الرِّيحِ الْمُرْسَلَةِ»",
        en: "Meaning: More generous in good than the sent wind.",
        ref: "صحيح البخاري 6، عن ابن عباس", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "حديث في صحيح البخاري.", en: "A hadith in Sahih al-Bukhari." }
    },
    {
      id: "as-r8", companions: true, minutes: 4, ages: "18+",
      title: { ar: "أبو بكر وعمر: «لاَ أُسَابِقُكَ إِلَى شَىْءٍ أَبَدًا»", en: "Abu Bakr and Umar: «I will never race you to anything»" },
      body: {
        ar: [
          "روى عمر بن الخطاب رضي الله عنه أن النبي صلى الله عليه وآله وسلم أمرهم يومًا أن يتصدقوا، ووافق ذلك مالًا عنده، فقال في نفسه: «الْيَوْمَ أَسْبِقُ أَبَا بَكْرٍ إِنْ سَبَقْتُهُ يَوْمًا». فجاء بنصف ماله.",
          "فسأله النبي صلى الله عليه وآله وسلم: «مَا أَبْقَيْتَ لأَهْلِكَ؟». قال: مثله. وأتى أبو بكر رضي الله عنه بكل ما عنده، فسأله: «مَا أَبْقَيْتَ لأَهْلِكَ؟». قال: «أَبْقَيْتُ لَهُمُ اللَّهَ وَرَسُولَهُ». فقال عمر: «لاَ أُسَابِقُكَ إِلَى شَىْءٍ أَبَدًا» (سنن أبي داود 1678).",
          "في هذا المشهد سباق حقيقي بين اثنين من خير الناس، ولا حسد فيه. أراد عمر أن يسبق، وهذا من التنافس المحمود. ثم رأى من سبقه، فأقرّ له بالفضل صراحة، ولم يجد في نفسه عليه شيئًا.",
          "وفي سؤال النبي صلى الله عليه وآله وسلم «ما أبقيت لأهلك؟» أدب لكل سابق: الأهل حق لا يُنسى في السباق. وقد قبل من أبي بكر ماله كله لما عرف من يقينه، وقال لكعب بن مالك حين أراد أن يتصدق بماله كله: «أَمْسِكْ عَلَيْكَ بَعْضَ مَالِكَ فَهُوَ خَيْرٌ لَكَ» (البخاري 4418). فلكل سابق مقامه، والعبرة بصدق القلب لا بمقدار ما يُعطى.",
          "سؤال للتأمل: من تسابقه في الخير؟ وهل تفرح إذا سبقك كما فرح عمر بفضل أبي بكر؟"
        ],
        ar_f: [
          "روى عمر بن الخطاب رضي الله عنه أن النبي صلى الله عليه وآله وسلم أمرهم يومًا أن يتصدقوا، ووافق ذلك مالًا عنده، فقال في نفسه: «الْيَوْمَ أَسْبِقُ أَبَا بَكْرٍ إِنْ سَبَقْتُهُ يَوْمًا». فجاء بنصف ماله.",
          "فسأله النبي صلى الله عليه وآله وسلم: «مَا أَبْقَيْتَ لأَهْلِكَ؟». قال: مثله. وأتى أبو بكر رضي الله عنه بكل ما عنده، فسأله: «مَا أَبْقَيْتَ لأَهْلِكَ؟». قال: «أَبْقَيْتُ لَهُمُ اللَّهَ وَرَسُولَهُ». فقال عمر: «لاَ أُسَابِقُكَ إِلَى شَىْءٍ أَبَدًا» (سنن أبي داود 1678).",
          "في هذا المشهد سباق حقيقي بين اثنين من خير الناس، ولا حسد فيه. أراد عمر أن يسبق، وهذا من التنافس المحمود. ثم رأى من سبقه، فأقرّ له بالفضل صراحة، ولم يجد في نفسه عليه شيئًا.",
          "وفي سؤال النبي صلى الله عليه وآله وسلم «ما أبقيت لأهلك؟» أدب لكل سابق: الأهل حق لا يُنسى في السباق. وقد قبل من أبي بكر ماله كله لما عرف من يقينه، وقال لكعب بن مالك حين أراد أن يتصدق بماله كله: «أَمْسِكْ عَلَيْكَ بَعْضَ مَالِكَ فَهُوَ خَيْرٌ لَكَ» (البخاري 4418). فلكل سابق مقامه، والعبرة بصدق القلب لا بمقدار ما يُعطى.",
          "سؤال للتأمل: من تسابقينها في الخير؟ وهل تفرحين إذا سبقتك كما فرح عمر بفضل أبي بكر؟"
        ],
        en: [
          "Umar ibn al-Khattab, may Allah be pleased with him, reported that the Prophet, peace and blessings be upon him and his family, told them one day to give charity, and it happened that Umar had wealth at the time. He said to himself: «Today I will outrun Abu Bakr, if ever I outrun him.» He brought half of his wealth.",
          "The Prophet asked him: «What have you left for your family?» He said: the same amount. Abu Bakr, may Allah be pleased with him, brought everything he had, and the Prophet asked him: «What have you left for your family?» He said: «I have left them Allah and His Messenger.» Umar said: «I will never race you to anything» (Sunan Abi Dawud 1678).",
          "This scene is a true race between two of the best of people, with no envy in it. Umar wanted to get ahead, which is praiseworthy competition. Then he saw who had beaten him, acknowledged his merit openly, and held nothing against him in his heart.",
          "In the Prophet's question, «What have you left for your family?», there is a courtesy for everyone who races: family is a right not forgotten in the race. He accepted all of Abu Bakr's wealth, knowing his certainty, while to Ka'b ibn Malik, who wished to give away all he had, he said: «Keep some of your wealth; that is better for you» (Bukhari 4418). Each who races has their own station, and what counts is the sincerity of the heart, not the size of the gift.",
          "A question to reflect on: who do you race in good? And are you glad when they get ahead of you, as Umar was glad of Abu Bakr's merit?"
        ]
      },
      quote: {
        ar: "«أَبْقَيْتُ لَهُمُ اللَّهَ وَرَسُولَهُ»",
        en: "Meaning: I have left them Allah and His Messenger.",
        ref: "سنن أبي داود 1678، عن عمر بن الخطاب", checked: "hadith-api (fawazahmed0)", verify: true
      },
      source: { ar: "حديث في سنن أبي داود (1678)، مع جملة من حديث كعب بن مالك في صحيح البخاري (4418).", en: "A hadith in Sunan Abi Dawud (1678), with a phrase from the hadith of Ka'b ibn Malik in Sahih al-Bukhari (4418)." }
    }
  ],
  quiz: [
    {
      id: "as-q1", readingId: "as-r1", type: "comprehension", correct: 1,
      q: { ar: "ما الحقان اللذان للجار بحسب المقالة؟", en: "According to the article, what are a neighbour's two rights?" },
      options: [
        { ar: "الهدية والزيارة فقط", en: "Gifts and visits only" },
        { ar: "ألا يُؤذى، وأن يُكرم ويُسبق إليه بالخير", en: "Not to be harmed, and to be honoured and approached first with good" },
        { ar: "أن يُعطى من الميراث، وأن يُستشار", en: "To receive inheritance and be consulted" }
      ],
      why: { ar: "كفّ الأذى عن الجار شرط الإيمان، وإكرامه باب يسبق إليه السابقون.", en: "Keeping harm from a neighbour is a condition of faith; honouring them is a door those who race to good hurry toward." }
    },
    {
      id: "as-q2", readingId: "as-r1", type: "situation", correct: 0,
      q: {
        ar: "انتقلت أسرة جديدة إلى الشقة المقابلة لك، ولم تلتقوا بعد. ما الأقرب إلى المبادرة؟",
        ar_f: "انتقلت أسرة جديدة إلى الشقة المقابلة لكِ، ولم تلتقوا بعد. ما الأقرب إلى المبادرة؟",
        en: "A new family moves into the flat opposite yours, and you haven't met. What is closest to taking the lead?"
      },
      options: [
        { ar: "أطرق بابهم بطبق صغير وأرحب بهم، وأترك لهم رقمي", en: "Knock with a small dish, welcome them, and leave my number" },
        { ar: "أنتظر حتى يبدؤوا هم بالسلام", en: "Wait for them to greet me first" },
        { ar: "أسأل الجيران عنهم أولًا", en: "Ask the other neighbours about them first" }
      ],
      why: { ar: "السابق يبدأ بالسلام والهدية، ولا ينتظر.", en: "One who races to good greets first and brings a gift, without waiting." }
    },
    {
      id: "as-q3", readingId: "as-r2", type: "comprehension", correct: 2,
      q: { ar: "ماذا فعل النبي صلى الله عليه وآله وسلم حين عرف بموت من كان يقمّ المسجد؟", en: "What did the Prophet do when he learned that the one who swept the mosque had died?" },
      options: [
        { ar: "دعا له في خطبة الجمعة", en: "Prayed for them in the Friday sermon" },
        { ar: "أمر بتعيين غيره", en: "Ordered someone else to be appointed" },
        { ar: "عاتبهم لأنهم لم يخبروه، وأتى قبره فصلى عليه", en: "Gently reproached them for not telling him, went to the grave and prayed over them" }
      ],
      why: { ar: "خدمة المسجد عند الله أكبر مما تبدو عند الناس.", en: "Serving the mosque is greater with Allah than it looks to people." }
    },
    {
      id: "as-q4", readingId: "as-r3", type: "comprehension", correct: 0,
      q: { ar: "ما الذي يعلّمه حديث «مَنْ دَلَّ عَلَى خَيْرٍ» لمن لا يملك ما يعطيه؟", en: "What does the hadith «whoever guides to good» teach someone with nothing to give?" },
      options: [
        { ar: "أن يدلّ على من يملك، فله مثل أجر الفاعل", en: "To point to someone who has, and gain the same reward as the doer" },
        { ar: "أن يعتذر ويمضي", en: "To apologise and move on" },
        { ar: "أن يقترض ليعطي", en: "To borrow in order to give" }
      ],
      why: { ar: "الدلالة على الخير خير، وأجرها مثل أجر فاعله.", en: "Guiding to good is itself good, with a reward like the doer's." }
    },
    {
      id: "as-q5", readingId: "as-r3", type: "situation", correct: 1,
      q: {
        ar: "تتقن لغة أجنبية، وفي حيّك شباب يحتاجونها في دراستهم ولا يقدرون على دروس خاصة. ما الأقرب إلى السبق بالخير؟",
        ar_f: "تتقنين لغة أجنبية، وفي حيّك فتيات يحتجنها في دراستهن ولا يقدرن على دروس خاصة. ما الأقرب إلى السبق بالخير؟",
        en: "You speak a foreign language well, and young people in your neighbourhood need it for their studies but can't afford private lessons. What is closest to racing to good?"
      },
      options: [
        { ar: "أنتظر حتى يطلب أحدهم", ar_f: "أنتظر حتى تطلب إحداهن", en: "Wait until one of them asks" },
        { ar: "أعرض ساعة أسبوعية مجانية في المسجد أو في مركز الحي", en: "Offer a free weekly hour at the mosque or the community centre" },
        { ar: "أنصحهم بتطبيق على الهاتف وأنتهي", ar_f: "أنصحهن بتطبيق على الهاتف وأنتهي", en: "Recommend a phone app and leave it there" }
      ],
      why: { ar: "تعليم ما تعرفه لمن يحتاج إليه دون مقابل من أوسع أبواب السبق.", en: "Teaching what you know, free, to those who need it is one of the widest doors of racing to good." }
    },
    {
      id: "as-q6", readingId: "as-r4", type: "comprehension", correct: 2,
      q: { ar: "ما الأمران اللذان يحفظهما إخفاء الصدقة بحسب القراءة؟", en: "According to the reading, what two things does hiding charity protect?" },
      options: [
        { ar: "المال والوقت", en: "Money and time" },
        { ar: "سمعة المعطي ومكانته", en: "The giver's reputation and standing" },
        { ar: "قلب المعطي من طلب الثناء، وكرامة الآخذ", en: "The giver's heart from seeking praise, and the receiver's dignity" }
      ],
      why: { ar: "الصدقة الخفية لا يعرفها إلا الله، فتبقى خالصة ويبقى الآخذ عزيزًا.", en: "Hidden charity is known only to Allah, so it stays pure and the receiver keeps their dignity." }
    },
    {
      id: "as-q7", readingId: "as-r5", type: "comprehension", correct: 0,
      q: { ar: "ماذا يحتاج التطوع بحسب المقالة؟", en: "According to the article, what does volunteering need?" },
      options: [
        { ar: "ساعة ثابتة يُتّفق عليها ولا تُترك", en: "A fixed hour that is agreed on and kept" },
        { ar: "تفرغًا كاملًا", en: "Being completely free" },
        { ar: "مالًا كثيرًا", en: "A lot of money" }
      ],
      why: { ar: "القليل الثابت يبقى، والكثير المؤجل لا يأتي.", en: "A little done steadily lasts; a lot postponed never comes." }
    },
    {
      id: "as-q8", readingId: "as-r6", type: "comprehension", correct: 1,
      q: { ar: "ما الكلمتان في آية فاطر اللتان تحرسان السابق من العُجب؟", en: "Which two phrases in the verse of Fatir guard the one who races ahead from self-admiration?" },
      options: [
        { ar: "«ظَالِمٌ لِنَفْسِهِ» و«مُقْتَصِدٌ»", en: "«wrongs himself» and «moderate»" },
        { ar: "«بِإِذْنِ اللَّهِ» و«ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ»", en: "«by Allah's leave» and «that is the great favour»" },
        { ar: "«فَاسْتَبِقُوا» و«الْخَيْرَاتِ»", en: "«race» and «good things»" }
      ],
      why: { ar: "السبق إذن من الله وفضل منه، لا ملك للسابق يفخر به.", en: "The lead is Allah's leave and favour, not a possession to boast of." }
    },
    {
      id: "as-q9", readingId: "as-r6", type: "situation", correct: 2,
      q: {
        ar: "أثنى عليك الناس كثيرًا لأنك تنظّم مشروع خير في الحي، وبدأت تحب هذا الثناء. ما الأقرب إلى ما في المقالة؟",
        ar_f: "أثنى عليكِ الناس كثيرًا لأنكِ تنظّمين مشروع خير في الحي، وبدأتِ تحبين هذا الثناء. ما الأقرب إلى ما في المقالة؟",
        en: "People praise you a lot for organising a charitable project in the neighbourhood, and you have started to enjoy the praise. What is closest to the article?"
      },
      options: [
        { ar: "أترك المشروع حتى لا أقع في العجب", en: "Leave the project so as not to fall into self-admiration" },
        { ar: "أزيد من الحديث عنه حتى يشارك الناس", en: "Talk about it more so people join" },
        { ar: "أحمد الله الذي وفّقني، وأقلّل الحديث عن نفسي، وأُبرز من يعمل معي", en: "Praise Allah who enabled me, speak less about myself, and bring forward those who work with me" }
      ],
      why: { ar: "العلاج ليس ترك الخير، بل رده إلى صاحبه: «بِإِذْنِ اللَّهِ».", en: "The cure is not to stop doing good, but to return it to its Owner: «by Allah's leave»." }
    },
    {
      id: "as-q10", readingId: "as-r7", type: "comprehension", correct: 0,
      q: { ar: "متى كان النبي صلى الله عليه وآله وسلم أجود ما يكون؟", en: "When was the Prophet most generous?" },
      options: [
        { ar: "في رمضان حين يلقاه جبريل فيدارسه القرآن", en: "In Ramadan, when Jibril met him and studied the Quran with him" },
        { ar: "في أيام الغنائم", en: "In times of spoils" },
        { ar: "في السفر", en: "On journeys" }
      ],
      why: { ar: "كلما قرب القلب من كلام الله اتسعت اليد بالعطاء.", en: "The nearer the heart comes to Allah's words, the wider the hand opens." }
    },
    {
      id: "as-q11", readingId: "as-r8", type: "comprehension", correct: 1,
      q: { ar: "ماذا قال عمر رضي الله عنه حين رأى ما جاء به أبو بكر رضي الله عنه؟", en: "What did Umar say when he saw what Abu Bakr had brought?" },
      options: [
        { ar: "سأسبقك في المرة القادمة", en: "I'll beat you next time" },
        { ar: "«لاَ أُسَابِقُكَ إِلَى شَىْءٍ أَبَدًا»", en: "«I will never race you to anything»" },
        { ar: "لقد أسرفت يا أبا بكر", en: "You have gone too far, Abu Bakr" }
      ],
      why: { ar: "سباق بلا حسد: أراد أن يسبق، ثم أقرّ لمن سبقه بالفضل.", en: "A race without envy: he wanted to get ahead, then acknowledged the merit of the one who did." }
    },
    {
      id: "as-q12", readingId: "as-r8", type: "comprehension", correct: 2,
      q: { ar: "ما الأدب الذي في سؤال النبي صلى الله عليه وآله وسلم: «ما أبقيت لأهلك؟»", en: "What courtesy lies in the Prophet's question «What have you left for your family?»" },
      options: [
        { ar: "أن الصدقة لا تكون إلا بالقليل", en: "That charity must always be small" },
        { ar: "أن الأهل يُقدَّمون على كل خير", en: "That family comes before every other good" },
        { ar: "أن الأهل حق لا يُنسى في السباق، ولكل سابق مقامه", en: "That family is a right not forgotten in the race, and each who races has their own station" }
      ],
      why: { ar: "قبل من أبي بكر ماله كله، وقال لكعب: «أَمْسِكْ عَلَيْكَ بَعْضَ مَالِكَ». العبرة بصدق القلب.", en: "He accepted all of Abu Bakr's wealth, and told Ka'b: «keep some of your wealth». What counts is the sincerity of the heart." }
    }
  ],
  tasks: [
    { id: "as-t1", ar: "حاجة رأيتها فقضيتها دون أن يطلبها أحد.", en: "Met a need I saw without anyone asking." },
    { id: "as-t2", ar: "سؤال عن جار، أو هدية له، أو تعرّف إلى اسمه.", en: "Asked after a neighbour, gave them a gift, or learned their name." },
    { id: "as-t3", ar: "صدقة خفية لا يعرفها أحد.", en: "A hidden charity no one knows of." },
    { id: "as-t4", ar: "خير علّمته لشخص يحتاج إليه.", en: "Taught something good to someone who needed it." },
    { id: "as-t5", ar: "ساعة تطوع، أو خدمة للمسجد، مع أهلي أو أصحابي.", en: "An hour of volunteering, or service to the mosque, with family or friends." }
  ],
  selfcheck: [
    { id: "as-s1", q: { ar: "هل أبادر بالخير قبل أن يُطلب مني؟", en: "Do I start the good before I'm asked?" } },
    { id: "as-s2", q: { ar: "هل يعرفني جيراني بالخير؟", en: "Do my neighbours know me for good?" } },
    { id: "as-s3", q: { ar: "هل لي عمل خفي ثابت لا يعرفه إلا الله؟", en: "Do I have a steady hidden deed that only Allah knows?" } },
    { id: "as-s4", q: { ar: "هل آخذ بيد غيري إلى الخير، وأفرح إذا سبقني؟", en: "Do I take others by the hand toward good, and rejoice when they get ahead of me?" } },
    { id: "as-s5", q: { ar: "هل أردّ ما أعمله من خير إلى فضل الله، لا إلى نفسي؟", en: "Do I attribute the good I do to Allah's favour, not to myself?" } }
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
        out: { ar: "رنّ المؤقت، فتردّد سامر ثم أغلق. لم يكن الأمر سهلًا، لكنه نام قبل الواحدة، وقرّر أن يبقى الهاتف في الغد خارج الغرفة.", en: "The timer rang; Samer hesitated, then closed the app. It wasn't easy, but he slept before one, and decided the phone would stay outside the room the next night." },
        why: { ar: "حدّ صغير تضعه بنفسك خير من حدّ لا تضعه أبدًا.", en: "A small limit you set yourself beats no limit at all." } }
    ],
    end: { ar: "الغفلة لا تأتي دفعة واحدة. تأتي مقطعًا بعد مقطع حتى يضيع الليل والفجر، وقرار واحد قبل النوم يحمي يومًا كاملًا.", en: "Heedlessness doesn't arrive all at once. It comes clip by clip until the night and the dawn are gone, and one decision before sleep protects a whole day." }
  },
  {
    id: "ach-pig-1", stage: "pig", trait: 0, age: "18+",
    title: { ar: "اجتماع المكافأة", en: "The bonus meeting" },
    intro: {
      ar: ["أنهى فريق هدى مشروعًا كبيرًا قبل موعده. قادت هدى العمل، أما الفكرة التي أنقذت المشروع في الأسبوع الأخير فجاءت من زميلها الجديد كريم.", "دعا المدير هدى وحدها إلى اجتماع قصير، وقال: «عمل ممتاز. سأرفع اسمك للترقية هذا العام. حدّثيني كيف فعلتِ ذلك».", "كريم لن يحضر الاجتماع، ولن يعرف أحد ما سيُقال فيه."],
      en: ["Huda's team finished a big project ahead of schedule. Huda led the work, but the idea that saved the project in its last week came from her new colleague, Karim.", "The manager called Huda alone into a short meeting: “Excellent work. I'm putting your name forward for promotion this year. Tell me how you did it.”", "Karim won't be in the meeting, and no one will know what is said there."]
    },
    q: { ar: "لو كنتَ مكان هدى، ماذا تفعل؟", ar_f: "لو كنتِ مكان هدى، ماذا تفعلين؟", en: "If you were Huda, what would you do?" },
    opts: [
      { t: { ar: "أعرض المشروع كله على أنه عملي، فأنا قائدة الفريق.", en: "Present the whole project as my work. I led the team, after all." }, weak: true,
        out: { ar: "خرجت هدى بوعد الترقية. وبعد شهر سمع كريم المدير يثني على «فكرة هدى» في اجتماع عام، فصمت، ومن يومها صار يحتفظ بأفكاره لنفسه.", en: "Huda left with the promise of a promotion. A month later Karim heard the manager praise “Huda's idea” in a team meeting and said nothing. From then on he kept his ideas to himself." },
        why: { ar: "ما تأخذه من حق غيرك يُنقص من فريقك ومن نفسك.", en: "Whatever you take from another's due is taken from your team, and from yourself." } },
      { t: { ar: "أذكر دور كريم باسمه، وأقترح أن يُشكر أمام الفريق.", en: "Name Karim's part and suggest he be thanked in front of the team." },
        out: { ar: "تعجّب المدير، ثم دوّن اسم كريم. وفي الاجتماع العام شُكر الاثنان، وصار كريم بعدها أول من يأتي هدى بكل فكرة جديدة.", en: "The manager looked surprised, then wrote Karim's name down. In the team meeting both were thanked, and afterwards Karim was the first to bring Huda each new idea." },
        why: { ar: "التنافس في الخير أن تسبق غيرك إلى الإنصاف، لا إلى المديح.", en: "Competing in good means racing others to fairness, not to praise." } }
    ],
    end: { ar: "النفس تحب أن تأخذ أكثر مما تستحق وقبل غيرها، في المال والمديح والفرص. وكلمة إنصاف واحدة في غرفة مغلقة تكشف ما في القلب.", en: "The self likes to take more than its due, and before others, in money, praise and opportunity. One fair word in a closed room shows what is in the heart." }
  },
  {
    id: "ach-monkey-1", stage: "monkey", trait: 2, age: "18+",
    title: { ar: "رسالة في مجموعة العائلة", en: "A message in the family group" },
    intro: {
      ar: ["كتب ابن عم ماجد في مجموعة العائلة تعليقًا ساخرًا على صورة أرسلها ماجد من حفل تخرّج ابنته، وضحك بعض الأقارب بالرموز.", "شعر ماجد أن الدم يغلي في عروقه، وبدأت أصابعه تكتب ردًا طويلًا حادًا، فيه أمور قديمة يعرفها عن ابن عمه.", "إصبعه الآن فوق زر الإرسال."],
      en: ["Majid's cousin posted a mocking comment in the family group on a photo Majid had shared from his daughter's graduation, and a few relatives laughed with emojis.", "Majid felt his blood boil. His fingers began typing a long, sharp reply, full of old things he knew about his cousin.", "His finger is now over the send button."]
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
        why: { ar: "الشجاعة في الحق أن تقول ما آلمك لصاحبه، لا للناس.", en: "Courage for what is right means telling the person what hurt you, not telling everyone." } }
    ],
    end: { ar: "الغضب السريع يكتب بسرعة ويرسل بسرعة. والقوة الحقيقية في الإصبع الذي يتوقف فوق زر الإرسال.", en: "Quick anger types fast and sends fast. Real strength is the finger that stops above the send button." }
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
