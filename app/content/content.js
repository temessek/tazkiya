/* تزكية: محتوى القراءات والعلامات والاختبارات
 * Tazkiya content. Plain JS, UTF-8. Draft for the author's review.
 * كل نص قرآني أو حديث منقول من الحفظ ويحمل verify:true حتى يُطابق على المصحف وكتب الحديث.
 * Scripture in English is a simple meaning, not a translation.
 * Names always describe behaviour, never the person. All children in stories are fictional.
 */
window.AKHLAQ_CONTENT = {
  version: "0.30.2-draft-2026-11-25",
  stages: {},
  virtues: []
};

/* ───────────── الخنصر: الزومبي / Lifeless ───────────── */
window.AKHLAQ_CONTENT.stages.zombie = {
  "name": {
    "ar": "سلوكيات الموتى أحياء (الزومبي)",
    "en": "Living-dead behaviours (zombie)"
  },
  "short": {
    "ar": "سلوك الغفلة التامة: جسد يتحرك وقلب نائم، لا يسمع النصيحة ولا يسأل لماذا يعيش.",
    "en": "The behaviour of total heedlessness: the body moves but the heart is asleep. It does not hear advice or ask why it lives."
  },
  "signs": [
    {
      "ar": "مرور اليوم كله دون ذكر الله مرة واحدة.",
      "en": "A whole day passes without remembering Allah even once."
    },
    {
      "ar": "سماع النصيحة كأنها صوت بعيد لا يعني صاحبها.",
      "en": "Hears advice as if it were a far-away noise that has nothing to do with them."
    },
    {
      "ar": "قضاء ساعات أمام الشاشة دون الشعور بالوقت.",
      "en": "Spends hours in front of a screen without feeling the time go."
    },
    {
      "ar": "عدم ملاحظة ما حولنا: من الحزين، ومن يحتاج المساعدة.",
      "en": "Does not notice what is around: who is sad, who needs help."
    },
    {
      "ar": "تكرار الخطأ نفسه دون سؤال: لماذا؟",
      "en": "Repeats the same mistake without asking: why?"
    },
    {
      "ar": "نسيان الشكر على النعم لأنها لا تُرى.",
      "en": "Does not give thanks for blessings, because they do not see them."
    }
  ],
  "climb": [
    {
      "ar": "أستيقظ كل صباح بسؤال صغير: ما الخير الذي سأفعله اليوم؟",
      "en": "I wake up each morning with one small question: what good will I do today?"
    },
    {
      "ar": "أذكر الله بكلمة واحدة في أوقات ثابتة: عند الاستيقاظ والأكل والنوم.",
      "en": "I remember Allah with one short word at fixed times: waking, eating and sleeping."
    },
    {
      "ar": "أتوقف دقيقة كل يوم وأعدّ ثلاث نعم أراها حولي.",
      "en": "I stop for one minute every day and count three blessings I can see around me."
    },
    {
      "ar": "حين ينصحني أحد، أعيد نصيحته بكلماتي لأتأكد أني سمعت.",
      "en": "When someone advises me, I repeat the advice in my own words to be sure I heard it."
    }
  ],
  "degrees": [
    {
      "name": {
        "ar": "الغفلة",
        "en": "Heedlessness"
      },
      "desc": {
        "ar": "يمرّ اليوم بين الشاشة والنوم، ولا يُذكر الله فيه، ولا يُحَسّ بالوقت.",
        "en": "The day slips by between screen and sleep, without remembering Allah or feeling the time pass."
      }
    },
    {
      "name": {
        "ar": "الأذن المغلقة",
        "en": "The closed ear"
      },
      "desc": {
        "ar": "تصل النصيحة إلى الأذن ثم تخرج من الأخرى، ولا تغيّر شيئًا.",
        "en": "Advice comes in one ear and goes out of the other, changing nothing."
      }
    },
    {
      "name": {
        "ar": "العادة العمياء",
        "en": "Blind habit"
      },
      "desc": {
        "ar": "يتكرر الخطأ نفسه كل يوم دون سؤال: لماذا أفعل هذا؟",
        "en": "The same mistake repeats every day without asking: why am I doing this?"
      }
    }
  ],
  "readings": [
    {
      "id": "zombie-r1",
      "title": {
        "ar": "سامي والشاشة التي أكلت اليوم",
        "en": "Sami and the screen that ate the day"
      },
      "minutes": 3,
      "ages": "4-8",
      "body": {
        "ar": [
          "استيقظ سامي يوم العطلة، وأمسك الجهاز قبل أن يغسل وجهه.",
          "مرت ساعة، ثم ساعتان. نادته أمه للفطور فقال: «حاضر»، ولم يتحرك. جاء أخوه الصغير يريد أن يلعب معه، فلم يرفع سامي عينيه.",
          "حين انطفأ الجهاز لأن البطارية فرغت، نظر سامي من النافذة. كانت الشمس قد صارت في وسط السماء. قال في نفسه: «أين ذهب الصباح؟»",
          "جلس قليلًا وسأل نفسه سؤالًا لم يسأله من قبل: «ماذا فعلت اليوم؟». لم يجد جوابًا. فقام، وقال «بسم الله»، وذهب إلى أخيه يلعب معه.",
          "في تلك اللحظة استيقظ قلب سامي. لم يكن الجهاز سيئًا، لكن سامي نسي أن يكون حاضرًا. وكل واحد منا يستطيع أن يستيقظ في أي لحظة."
        ],
        "en": [
          "Sami woke up on a holiday and picked up the tablet before washing his face.",
          "One hour passed, then two. His mother called him for breakfast and he said \"coming\", but he did not move. His little brother came to play, and Sami did not even look up.",
          "When the battery ran out and the screen went dark, Sami looked out of the window. The sun was already high in the sky. He thought: \"Where did the morning go?\"",
          "He sat for a moment and asked himself a question he had never asked before: \"What did I do today?\" He had no answer. So he stood up, said \"Bismillah\", and went to play with his brother.",
          "At that moment Sami's heart woke up. The tablet had done nothing wrong; Sami had simply forgotten to be present. Any one of us can wake up at any moment."
        ]
      },
      "quote": null,
      "source": {
        "ar": "قصة تربوية مؤلفة، أبطالها خياليون.",
        "en": "An original teaching story with fictional characters."
      }
    },
    {
      "id": "zombie-r2",
      "title": {
        "ar": "الميت الذي صار حيًّا",
        "en": "The one who was dead and was given life"
      },
      "minutes": 4,
      "ages": "all",
      "body": {
        "ar": [
          "في القرآن آية عجيبة تتحدث عن إنسان كان «ميتًا» وهو يمشي ويأكل ويتكلم. كيف يكون ميتًا؟",
          "المقصود موت القلب: أن يعيش الإنسان ولا يعرف ربه، ولا يرى النعم، ولا يسأل لماذا خُلق. هذا هو سلوك الغفلة الذي نسميه في التطبيق «سلوكيات الموتى أحياء».",
          "ثم تقول الآية إن الله «أحياه» وجعل له «نورًا يمشي به في الناس». النور هو الهداية: كلمة الله التي تجعل القلب يرى ويسمع.",
          "وانتبه: الآية لا تقول إن هذا الإنسان سيئ إلى الأبد. بل تقول إنه كان ميتًا ثم صار حيًّا. الباب مفتوح لكل واحد، وأول خطوة أن تتبع النور خطوة بعد خطوة."
        ],
        "en": [
          "There is a wonderful verse in the Quran about a person who was \"dead\" even while walking, eating and talking. How can someone be dead like that?",
          "It means the death of the heart: living without knowing your Lord, without seeing blessings, without asking why you were created. This is the behaviour of heedlessness that the app calls \"living-dead behaviours\".",
          "Then the verse says Allah \"gave him life\" and gave him \"a light to walk with among people\". The light is guidance: Allah's word, which makes the heart see and hear.",
          "Notice: the verse does not say this person is bad forever. It says he was dead and then became alive. The door is open to everyone, and the first step is to follow the light, one step at a time."
        ]
      },
      "quote": {
        "ar": "﴿أَوَمَنْ كَانَ مَيْتًا فَأَحْيَيْنَاهُ وَجَعَلْنَا لَهُ نُورًا يَمْشِي بِهِ فِي النَّاسِ﴾",
        "en": "Meaning (not a translation): Is the one who was dead, and We gave him life and a light to walk with among people, [like the one lost in darkness]?",
        "ref": "الأنعام 6:122",
        "checked": "tanzil quran-simple, with diacritics (api.alquran.cloud)",
        "verify": true
      },
      "source": {
        "ar": "القرآن الكريم، سورة الأنعام، الآية 122.",
        "en": "The Quran, Surat al-An'am, verse 122."
      }
    },
    {
      "id": "zombie-r3",
      "title": {
        "ar": "الحي والميت: حديث عن الذكر",
        "en": "The living and the dead: a hadith on remembrance"
      },
      "minutes": 3,
      "ages": "9-14",
      "body": {
        "ar": [
          "قال النبي صلى الله عليه وآله وسلم إن الذي يذكر ربه والذي لا يذكره مثل الحي والميت.",
          "الذكر ليس كلامًا طويلًا. «بسم الله» قبل الأكل ذكر، و«الحمد لله» بعد الشبع ذكر، و«سبحان الله» حين ترى السماء ذكر.",
          "كل ذكر صغير مثل نفَس للقلب. ومن لا يتنفس قلبه يصير كالزومبي: يتحرك ولا يحيا.",
          "جرّب اليوم: اختر ثلاثة أوقات، واذكر فيها الله بكلمة واحدة. ستلاحظ أن قلبك صار أكثر انتباهًا."
        ],
        "en": [
          "The Prophet, peace and blessings be upon him and his family, said that the one who remembers his Lord and the one who does not are like the living and the dead.",
          "Remembrance does not have to be long. \"Bismillah\" before eating is remembrance, \"Alhamdulillah\" after eating is remembrance, \"Subhanallah\" when you look at the sky is remembrance.",
          "Each small remembrance is like a breath for the heart. A heart that does not breathe becomes like the living dead: it moves, but it does not live.",
          "Try it today: choose three moments and remember Allah in each with one word. You will notice your heart becoming more awake."
        ]
      },
      "quote": {
        "ar": "«مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لَا يَذْكُرُ مَثَلُ الْحَيِّ وَالْمَيِّتِ»",
        "en": "Meaning: The one who remembers his Lord and the one who does not are like the living and the dead.",
        "ref": "صحيح البخاري 6407",
        "checked": "hadith-api (fawazahmed0)",
        "verify": true
      },
      "source": {
        "ar": "حديث نبوي في صحيح البخاري.",
        "en": "A hadith in Sahih al-Bukhari."
      }
    },
    {
      "id": "zombie-r4",
      "title": {
        "ar": "تمرين الدقيقة الحاضرة",
        "en": "The present-minute exercise"
      },
      "minutes": 2,
      "ages": "all",
      "body": {
        "ar": [
          "هذه صفحة عملية. علماء السلوك اليوم يسمون الغفلة «العمل على الطيار الآلي»: نفعل الأشياء دون أن ننتبه لها.",
          "التمرين: توقف دقيقة واحدة. انظر حولك وسمِّ ثلاثة أشياء تراها، وشيئين تسمعهما، وشيئًا واحدًا تشكر الله عليه.",
          "كرره مرة في الصباح ومرة قبل النوم. بعد أسبوع سيصير قلبك أسرع يقظة، وستلاحظ ما لم تكن تلاحظه: تعب أمك، وفرح صديقك، وجمال المطر."
        ],
        "en": [
          "This is a practical page. Behaviour scientists today call heedlessness \"running on autopilot\": doing things without noticing them.",
          "The exercise: stop for one minute. Look around and name three things you see, two things you hear, and one thing you thank Allah for.",
          "Do it once in the morning and once before sleep. After a week your heart will wake faster, and you will notice what you missed before: your mother's tiredness, your friend's joy, the beauty of rain."
        ]
      },
      "quote": null,
      "source": {
        "ar": "مستفاد من تمارين الانتباه في علم النفس السلوكي المعاصر، مع ربطها بالشكر.",
        "en": "Adapted from attention exercises in modern behavioural psychology, linked to gratitude."
      }
    }
  ],
  "quiz": [
    {
      "id": "zombie-q1",
      "readingId": "zombie-r1",
      "type": "comprehension",
      "q": {
        "ar": "ماذا سأل سامي نفسه حين انطفأ الجهاز؟",
        "en": "What did Sami ask himself when the screen went dark?"
      },
      "options": [
        {
          "ar": "ماذا فعلت اليوم؟",
          "en": "What did I do today?"
        },
        {
          "ar": "أين الشاحن؟",
          "en": "Where is the charger?"
        },
        {
          "ar": "متى الغداء؟",
          "en": "When is lunch?"
        }
      ],
      "correct": 0,
      "why": {
        "ar": "هذا السؤال هو لحظة اليقظة: حين يسأل الإنسان عن وقته يبدأ قلبه يحيا.",
        "en": "That question is the moment of waking: when you ask about your time, your heart starts to live."
      }
    },
    {
      "id": "zombie-q2",
      "readingId": "zombie-r1",
      "type": "situation",
      "q": {
        "ar": "تلعب بالجهاز، ونادتك أمك للطعام. ماذا تفعل؟",
        "en": "You are playing on a device and your mother calls you to eat. What do you do?"
      },
      "options": [
        {
          "ar": "أقول «حاضر» وأبقى ألعب.",
          "en": "Say \"coming\" and keep playing."
        },
        {
          "ar": "لا أرد لأني لم أسمع.",
          "en": "Do not answer, because I did not hear."
        },
        {
          "ar": "أضع الجهاز وأذهب إليها الآن.",
          "en": "Put the device down and go to her now."
        }
      ],
      "correct": 2,
      "why": {
        "ar": "حين يوضع الجهاز ويُلبّى النداء في الحال، تعرف الأم أن نداءها وصل. أما «حاضر» بلا حركة فمن سلوك الغفلة.",
        "en": "When the device goes down and the call is answered straight away, a mother knows she was heard. Saying “coming” without moving is heedless behaviour."
      }
    },
    {
      "id": "zombie-q3",
      "readingId": "zombie-r2",
      "type": "comprehension",
      "q": {
        "ar": "ما «النور» الذي يمشي به الإنسان في الناس في الآية؟",
        "en": "What is the \"light\" the person walks with among people in the verse?"
      },
      "options": [
        {
          "ar": "مصباح في يده",
          "en": "A lamp in the hand"
        },
        {
          "ar": "الهداية التي تجعل القلب يرى",
          "en": "Guidance that makes the heart see"
        },
        {
          "ar": "ضوء الشمس",
          "en": "Sunlight"
        }
      ],
      "correct": 1,
      "why": {
        "ar": "النور في الآية هو الهداية من الله، وبها يحيا القلب بعد موته.",
        "en": "The light in the verse is guidance from Allah; by it the heart comes alive."
      }
    },
    {
      "id": "zombie-q4",
      "readingId": "zombie-r2",
      "type": "comprehension",
      "q": {
        "ar": "هل تقول الآية إن الميت يبقى ميتًا إلى الأبد؟",
        "en": "Does the verse say the dead one stays dead forever?"
      },
      "options": [
        {
          "ar": "نعم",
          "en": "Yes"
        },
        {
          "ar": "الآية لا تذكر ذلك",
          "en": "The verse does not say"
        },
        {
          "ar": "لا، بل أحياه الله",
          "en": "No, Allah gave him life"
        }
      ],
      "correct": 2,
      "why": {
        "ar": "الآية تحكي انتقالًا من الموت إلى الحياة، فالباب مفتوح لكل إنسان.",
        "en": "The verse tells of a move from death to life, so the door is open to everyone."
      }
    },
    {
      "id": "zombie-q5",
      "readingId": "zombie-r3",
      "type": "comprehension",
      "q": {
        "ar": "بماذا شبّه الحديث الذي لا يذكر ربه؟",
        "en": "What does the hadith compare the one who does not remember his Lord to?"
      },
      "options": [
        {
          "ar": "بالميت",
          "en": "The dead"
        },
        {
          "ar": "بالنائم",
          "en": "Someone asleep"
        },
        {
          "ar": "بالمريض",
          "en": "Someone sick"
        }
      ],
      "correct": 0,
      "why": {
        "ar": "الحديث شبّه الذاكر بالحي، والغافل بالميت.",
        "en": "The hadith likens the one who remembers to the living, and the heedless to the dead."
      }
    },
    {
      "id": "zombie-q6",
      "readingId": "zombie-r3",
      "type": "situation",
      "q": {
        "ar": "انتهيت من طعامك وشبعت. ما الذكر المناسب؟",
        "en": "You finished eating and you are full. Which remembrance fits?"
      },
      "options": [
        {
          "ar": "لا شيء، الطعام انتهى",
          "en": "Nothing, the food is finished"
        },
        {
          "ar": "الحمد لله",
          "en": "Alhamdulillah"
        },
        {
          "ar": "أطلب طعامًا آخر",
          "en": "Ask for more food"
        }
      ],
      "correct": 1,
      "why": {
        "ar": "الحمد بعد الشبع ذكر صغير يُحيي القلب ويجعله يرى النعمة.",
        "en": "Praising Allah after eating is a small remembrance that wakes the heart to the blessing."
      }
    },
    {
      "id": "zombie-q7",
      "readingId": "zombie-r4",
      "type": "situation",
      "q": {
        "ar": "لاحظت أنك قضيت وقتًا طويلًا دون أن تنتبه. ما أول خطوة؟",
        "en": "You notice you spent a long time without paying attention. What is the first step?"
      },
      "options": [
        {
          "ar": "أحزن وأقول: أنا سيئ.",
          "en": "Feel sad and say: I am bad."
        },
        {
          "ar": "أكمل كأن شيئًا لم يحدث.",
          "en": "Carry on as if nothing happened."
        },
        {
          "ar": "أتوقف دقيقة وأنظر حولي وأشكر الله على نعمة.",
          "en": "Stop for a minute, look around and thank Allah for one blessing."
        }
      ],
      "correct": 2,
      "why": {
        "ar": "يكفي للانتباه خطوة صغيرة: توقف، وانظر حولك، واشكر.",
        "en": "One small step is enough to wake up: stop, look around, and give thanks."
      }
    }
  ],
  "tasks": [
    {
      "id": "zombie-t1",
      "ar": "قول «بسم الله» قبل كل وجبة اليوم.",
      "en": "Said \"Bismillah\" before every meal today."
    },
    {
      "id": "zombie-t2",
      "ar": "إطفاء الشاشة دون تذكير حين ينتهي وقتها.",
      "en": "Turned the screen off by themselves when its time was over."
    },
    {
      "id": "zombie-t3",
      "ar": "ذكر ثلاث نعم قبل النوم وشكر الله عليها.",
      "en": "Named three blessings before sleep and thanked Allah for them."
    },
    {
      "id": "zombie-t4",
      "ar": "شرح نصيحة سُمعت اليوم لأحد أفراد البيت.",
      "en": "Repeated a piece of advice heard today in their own words."
    }
  ]
};

/* ───────────── البنصر: الخنزير / Greed ───────────── */
window.AKHLAQ_CONTENT.stages.pig = {
  "name": {
    "ar": "سلوكيات الخنزير",
    "en": "Pig behaviours"
  },
  "short": {
    "ar": "سلوك التمحور حول النفس والشهوة، دون انتباه لحاجة الآخرين: أنانية وانغماس في الشهوات.",
    "en": "The behaviour of being centred on yourself and your appetites, without noticing what others need: selfishness and sinking into one's desires."
  },
  "signs": [
    {
      "ar": "أخذ أكبر قطعة قبل سؤال الآخرين.",
      "en": "Takes the biggest piece before asking anyone else."
    },
    {
      "ar": "الطلب من الأم وهي متعبة دون انتباه لتعبها.",
      "en": "Asks their mother for things while she is tired, without noticing her tiredness."
    },
    {
      "ar": "قول «أريد» كثيرًا، و«ماذا تريد أنت؟» قليلًا.",
      "en": "Says \"I want\" a lot, and \"what do you want?\" rarely."
    },
    {
      "ar": "الانزعاج إذا لم تتحقق الرغبة فورًا.",
      "en": "Gets upset if they do not get what they want right away."
    },
    {
      "ar": "الأكل حتى التعب، أو الأكل مع المشي واللعب.",
      "en": "Eats until it hurts, or eats while walking and playing."
    },
    {
      "ar": "عدم مشاركة الألعاب والحلوى إلا بإجبار.",
      "en": "Does not share toys or sweets unless made to."
    },
    {
      "ar": "الجلوس في أريح مكان وترك الكبير أو المتعب واقفًا.",
      "en": "Sits in the most comfortable place and leaves an older or tired person standing."
    }
  ],
  "climb": [
    {
      "ar": "قبل أن آخذ، أسأل: هل أخذ الجميع؟",
      "en": "Before I take, I ask: has everyone had some?"
    },
    {
      "ar": "أنظر إلى وجوه من حولي: هل فيها تعب أو حزن أو جوع؟",
      "en": "I look at the faces around me: is anyone tired, sad or hungry?"
    },
    {
      "ar": "أتمرن على الانتظار قليلًا، فالصبر عن الرغبة عضلة تقوى بالتمرين.",
      "en": "I practise waiting a little: patience with wanting is a muscle that grows with training."
    },
    {
      "ar": "أعطي شيئًا أحبه مرة في الأسبوع.",
      "en": "I give away something I love once a week."
    }
  ],
  "degrees": [
    {
      "name": {
        "ar": "«أنا أولًا»",
        "en": "\"Me first\""
      },
      "desc": {
        "ar": "لا يُرى إلا ما أريد: الدور الأول، والمكان الأول، والطلب قبل الجميع.",
        "en": "Only what I want is seen: the first turn, the first place, asking before everyone."
      }
    },
    {
      "name": {
        "ar": "الشَّرَه",
        "en": "Greed"
      },
      "desc": {
        "ar": "الرغبة في المزيد دائمًا: أكبر قطعة، والأكل حتى التعب.",
        "en": "Always wanting more: the biggest piece, eating until it hurts."
      }
    },
    {
      "name": {
        "ar": "الكسل",
        "en": "Laziness"
      },
      "desc": {
        "ar": "تأجيل العمل وترك الثقيل للآخرين: أريح كرسي وأسهل عمل لي، ولا يُرى تعب الأم.",
        "en": "Putting work off and leaving the heavy jobs to others: the comfiest chair and the easiest job for me, without seeing how tired Mum is."
      }
    }
  ],
  "readings": [
    {
      "id": "pig-r1",
      "title": {
        "ar": "سلمى والكرسي المريح",
        "en": "Salma and the comfy chair"
      },
      "minutes": 3,
      "ages": "4-8",
      "body": {
        "ar": [
          "عادت سلمى من المدرسة، ورمت حقيبتها، وجلست على الكرسي الكبير المريح. قالت: «أنا جائعة! أريد الطعام الآن!»",
          "بعد قليل فُتح الباب، ودخل جدها من السوق يحمل أكياسًا ثقيلة، ووقف عند الباب يلتقط أنفاسه ويمسح جبينه.",
          "رفعت سلمى عينيها، فرأت يدي جدها حمراوين من ثقل الأكياس. تذكرت تمرين «انتظر ثم انظر»: هل هناك من هو أتعب مني؟",
          "قامت عن الكرسي، وأخذت كيسًا من يده، وقالت: «اجلس هنا يا جدي، وأنا أرتب الأغراض». ابتسم جدها وقال: «بارك الله فيك يا سلمى».",
          "في تلك الليلة نامت سلمى وقلبها أخف. لم تكن سلمى سيئة، كانت فقط لا ترى. وحين رأت، صعدت."
        ],
        "en": [
          "Salma came home from school, dropped her bag and sat in the big comfy chair. \"I'm hungry! I want food now!\"",
          "A moment later the door opened and her grandfather came in from the market with heavy bags, standing by the door to catch his breath and wipe his forehead.",
          "Salma looked up and saw his hands were red from the heavy bags. She remembered the exercise \"wait, then look\": is anyone more tired than me?",
          "She got up from the chair, took a bag from his hand and said: \"Sit here, Grandpa, and I'll put the shopping away.\" Her grandfather smiled: \"May Allah bless you, Salma.\"",
          "That night Salma went to sleep with a lighter heart. Salma was not bad, she just had not been seeing. When she saw, she climbed."
        ]
      },
      "quote": null,
      "source": {
        "ar": "قصة تربوية مؤلفة، أبطالها خياليون.",
        "en": "An original teaching story with fictional characters."
      }
    },
    {
      "id": "pig-r2",
      "title": {
        "ar": "يطعمون الطعام وهم يحبونه",
        "en": "They give food even though they love it"
      },
      "minutes": 4,
      "ages": "all",
      "body": {
        "ar": [
          "يصف القرآن قومًا من أهل الجنة بأنهم يُطعمون الطعام «على حبه»، أي وهم يحبونه ويشتهونه، ومع ذلك يعطونه للمسكين واليتيم والأسير.",
          "وروى كثير من المفسرين أن هذه الآيات نزلت في أهل البيت عليهم السلام، حين أعطوا طعام إفطارهم لمن طرق بابهم وباتوا صائمين.",
          "سلوك الخنزير يقول: «طعامي لي». وهذه الآية تعلّمنا العكس: أجمل العطاء أن تعطي الشيء الذي تحبه أنت.",
          "وفي آية أخرى: ﴿وَمَنْ يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ﴾ (الحشر 59:9). الشح حرص النفس على أن يكون كل شيء لها، ومن نجا منه أفلح."
        ],
        "en": [
          "The Quran describes some people of Paradise who give food \"despite loving it\": they want it themselves, and still give it to the poor, the orphan and the captive.",
          "Many commentators reported that these verses came down about the Ahl al-Bayt, peace be upon them, when they gave their fast-breaking food to those who knocked at their door and spent the night fasting.",
          "Pig behaviour says: \"My food is mine.\" This verse teaches the opposite: the finest giving is to give the thing you love yourself.",
          "Another verse (al-Hashr 59:9) means: whoever is saved from the stinginess of their own soul, those are the successful. Stinginess is the soul's wish to keep everything for itself; whoever escapes it succeeds."
        ]
      },
      "quote": {
        "ar": "﴿وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا﴾",
        "en": "Meaning (not a translation): They give food, despite loving it, to the poor, the orphan and the captive.",
        "ref": "الإنسان 76:8",
        "checked": "tanzil quran-simple, with diacritics (api.alquran.cloud)",
        "verify": true
      },
      "source": {
        "ar": "القرآن الكريم، الإنسان 76:8 والحشر 59:9. خبر نزول آيات الإنسان في أهل البيت عليهم السلام يُوثَّق من التفاسير المسندة قبل النشر.",
        "en": "The Quran, al-Insan 76:8 and al-Hashr 59:9. The report about the Ahl al-Bayt is to be checked in sourced commentaries before publication."
      }
    },
    {
      "id": "pig-r3",
      "title": {
        "ar": "يا غلام، كُل مما يليك",
        "en": "Young boy, eat from what is in front of you"
      },
      "minutes": 3,
      "ages": "4-8",
      "body": {
        "ar": [
          "كان عمر بن أبي سلمة غلامًا صغيرًا يعيش في بيت النبي صلى الله عليه وآله وسلم. وكانت يده تطيش في الصحن: تأخذ من هنا ومن هناك.",
          "لم يغضب النبي صلى الله عليه وآله وسلم ولم يصرخ. قال له بلطف: «يا غلام، سمِّ الله، وكُل بيمينك، وكُل مما يليك».",
          "ثلاث كلمات تعلّمنا الأكل الإنساني: نذكر الله فنتذكر أن الطعام نعمة، ونأكل بأدب، ونترك لغيرنا نصيبهم.",
          "قال عمر بعدها إن هذه صارت طريقته في الأكل بعد ذلك. نصيحة صغيرة، بلطف، غيّرت عادة كاملة."
        ],
        "en": [
          "Umar ibn Abi Salama was a young boy who lived in the house of the Prophet, peace and blessings be upon him and his family. His hand used to wander all over the dish, taking from here and there.",
          "The Prophet did not get angry or shout. He told him gently: \"Young boy, say Allah's name, eat with your right hand, and eat from what is in front of you.\"",
          "Three short instructions teach us to eat like a human: we remember Allah so we see food as a blessing, we eat politely, and we leave others their share.",
          "Umar later said this stayed his way of eating from then on. A small piece of advice, given gently, changed a whole habit."
        ]
      },
      "quote": {
        "ar": "«يَا غُلَامُ، سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ»",
        "en": "Meaning: Young boy, say the name of Allah, eat with your right hand, and eat from what is near you.",
        "ref": "صحيح البخاري 5376؛ صحيح مسلم، كتاب الأشربة (ترقيم sunnah.com: الكتاب 36، الحديث 143)",
        "checked": "hadith-api (fawazahmed0)",
        "verify": true
      },
      "source": {
        "ar": "حديث متفق عليه عن عمر بن أبي سلمة.",
        "en": "A hadith in both Sahih al-Bukhari and Sahih Muslim, narrated by Umar ibn Abi Salama."
      }
    },
    {
      "id": "pig-r4",
      "title": {
        "ar": "تمرين: انتظر ثم انظر",
        "en": "Exercise: wait, then look"
      },
      "minutes": 2,
      "ages": "9-14",
      "body": {
        "ar": [
          "صفحة عملية. وجد علماء النفس أن القدرة على تأجيل الرغبة قليلًا مهارة تُتعلَّم، وأنها تساعد الإنسان في الدراسة والصداقة والحياة كلها.",
          "التمرين له خطوتان. الأولى: «انتظر». حين تشتهي شيئًا، عُدّ إلى عشرة قبل أن تأخذه.",
          "الثانية: «انظر». وأنت تعد، انظر حولك: هل يحتاج أحد هذا الشيء أكثر مني؟ هل أخذ الجميع؟ هل هناك من هو متعب؟",
          "بعد العد، قرر. أحيانًا ستأخذ القطعة، وأحيانًا ستعطيها لغيرك. وفي المرتين تكون أنت الذي اختار، بعد أن انتظر."
        ],
        "en": [
          "A practical page. Psychologists have found that being able to delay a want a little is a learnable skill, and that it helps in study, friendship and all of life.",
          "The exercise has two steps. First: \"Wait.\" When you want something, count to ten before taking it.",
          "Second: \"Look.\" While you count, look around: does anyone need this more than me? Has everyone had some? Is anyone tired?",
          "After counting, decide. Sometimes you will take the piece, sometimes you will give it away. Either way, you are the one who chose, after waiting."
        ]
      },
      "quote": null,
      "source": {
        "ar": "مستفاد من أبحاث تأجيل الإشباع وضبط النفس في علم النفس المعاصر.",
        "en": "Adapted from research on delayed gratification and self-control in modern psychology."
      }
    }
  ],
  "quiz": [
    {
      "id": "pig-q1",
      "readingId": "pig-r1",
      "type": "comprehension",
      "q": {
        "ar": "ماذا رأت سلمى حين دخل جدها؟",
        "en": "What did Salma see when her grandfather came in?"
      },
      "options": [
        {
          "ar": "جدها متعب من حمل الأكياس الثقيلة",
          "en": "Her grandfather tired from carrying heavy bags"
        },
        {
          "ar": "جدها يحمل هدية لها",
          "en": "A present for her"
        },
        {
          "ar": "جدها نائم",
          "en": "Her grandfather asleep"
        }
      ],
      "correct": 0,
      "why": {
        "ar": "كان الجد متعبًا، وحين نظرت سلمى لاحظت. الملاحظة أول خطوة.",
        "en": "Her grandfather was tired, and when Salma looked, she noticed. Noticing is the first step."
      }
    },
    {
      "id": "pig-q2",
      "readingId": "pig-r1",
      "type": "comprehension",
      "q": {
        "ar": "ما الذي جعل سلمى تغيّر سلوكها؟",
        "en": "What made Salma change her behaviour?"
      },
      "options": [
        {
          "ar": "نظرت فرأت تعب جدها",
          "en": "She looked and saw how tired her grandfather was"
        },
        {
          "ar": "عاقبها أبوها",
          "en": "Her father punished her"
        },
        {
          "ar": "انتهى الطعام",
          "en": "The food ran out"
        }
      ],
      "correct": 0,
      "why": {
        "ar": "حين رأت سلمى، أحبت أن تساعد. الرؤية تُصلح ما لا يُصلحه الصراخ.",
        "en": "When Salma saw, she wanted to help. Seeing fixes what shouting cannot."
      }
    },
    {
      "id": "pig-q3",
      "readingId": "pig-r2",
      "type": "comprehension",
      "q": {
        "ar": "ما معنى أنهم يطعمون الطعام «على حبه»؟",
        "en": "What does it mean that they give food \"despite loving it\"?"
      },
      "options": [
        {
          "ar": "يعطون ما لا يحبونه",
          "en": "They give what they do not like"
        },
        {
          "ar": "يعطون لمن يحبونهم فقط",
          "en": "They give only to people who love them"
        },
        {
          "ar": "يعطون وهم يحبون الطعام ويشتهونه",
          "en": "They give even though they want the food themselves"
        }
      ],
      "correct": 2,
      "why": {
        "ar": "«على حبه» أي وهم يحبون الطعام ويشتهونه، ومع ذلك يعطونه لغيرهم.",
        "en": "“Despite their love for it” means they want the food themselves, and they give it away all the same."
      }
    },
    {
      "id": "pig-q4",
      "readingId": "pig-r2",
      "type": "situation",
      "q": {
        "ar": "بقيت قطعة حلوى واحدة، وأنت وأختك تريدانها. ماذا تفعل؟",
        "en": "One sweet is left, and you and your sister both want it. What do you do?"
      },
      "options": [
        {
          "ar": "آخذها بسرعة قبلها.",
          "en": "Grab it quickly before her."
        },
        {
          "ar": "أقسمها بيننا أو أعطيها لها.",
          "en": "Split it or give it to her."
        },
        {
          "ar": "أبكي حتى أحصل عليها.",
          "en": "Cry until I get it."
        }
      ],
      "correct": 1,
      "why": {
        "ar": "القسمة أو الإيثار سلوك إنساني، ومن وُقي شح نفسه أفلح.",
        "en": "Sharing or giving it up is human behaviour; whoever is saved from stinginess succeeds."
      }
    },
    {
      "id": "pig-q5",
      "readingId": "pig-r3",
      "type": "comprehension",
      "q": {
        "ar": "كيف نصح النبي صلى الله عليه وآله وسلم الغلام؟",
        "en": "How did the Prophet, peace be upon him and his family, advise the boy?"
      },
      "options": [
        {
          "ar": "بغضب وصراخ",
          "en": "Angrily, shouting"
        },
        {
          "ar": "أبعد الصحن عنه دون كلام",
          "en": "Moved the dish away without a word"
        },
        {
          "ar": "بلطف وبكلمات قليلة",
          "en": "Gently, with few words"
        }
      ],
      "correct": 2,
      "why": {
        "ar": "النصيحة اللطيفة القصيرة غيّرت عادة الغلام.",
        "en": "Short, gentle advice changed the boy's habit."
      }
    },
    {
      "id": "pig-q6",
      "readingId": "pig-r3",
      "type": "situation",
      "q": {
        "ar": "جلستم للأكل من صحن واحد. من أين تأكل؟",
        "en": "You are all eating from one dish. Where do you eat from?"
      },
      "options": [
        {
          "ar": "من الجهة القريبة مني",
          "en": "From the side near me"
        },
        {
          "ar": "من حيث توجد أفضل القطع",
          "en": "Wherever the best pieces are"
        },
        {
          "ar": "أسحب الصحن كله إليّ",
          "en": "Pull the whole dish to me"
        }
      ],
      "correct": 0,
      "why": {
        "ar": "«كُل مما يليك»: تأخذ نصيبك وتترك لغيرك نصيبهم.",
        "en": "\"Eat from what is near you\": take your share and leave others theirs."
      }
    },
    {
      "id": "pig-q7",
      "readingId": "pig-r4",
      "type": "situation",
      "q": {
        "ar": "رأيت طعامًا تحبه على المائدة، ولم يجلس الجميع بعد. ما الخطوة الأولى في التمرين؟",
        "en": "You see food you love on the table and not everyone has sat down. What is the first step of the exercise?"
      },
      "options": [
        {
          "ar": "آكل قبل أن ينتهي.",
          "en": "Eat before it is gone."
        },
        {
          "ar": "أنتظر وأعد إلى عشرة وأنظر حولي.",
          "en": "Wait, count to ten and look around."
        },
        {
          "ar": "أخفي نصيبي.",
          "en": "Hide my portion."
        }
      ],
      "correct": 1,
      "why": {
        "ar": "«انتظر ثم انظر»: هكذا تصير أنت من يقرر لا رغبتك.",
        "en": "\"Wait, then look\": that is how you decide, not your craving."
      }
    },
    {
      "id": "pig-q8",
      "readingId": "pig-r4",
      "type": "situation",
      "q": {
        "ar": "أمك تحمل أكياسًا ثقيلة وأنت جالس تلعب. ماذا تفعل؟",
        "en": "Your mother is carrying heavy bags and you are sitting and playing. What do you do?"
      },
      "options": [
        {
          "ar": "أكمل اللعب، هي لم تطلب.",
          "en": "Keep playing; she did not ask."
        },
        {
          "ar": "أسألها ماذا اشترت لي.",
          "en": "Ask what she bought for me."
        },
        {
          "ar": "أقوم وأحمل معها.",
          "en": "Get up and carry some with her."
        }
      ],
      "correct": 2,
      "why": {
        "ar": "السلوك الإنساني يرى حاجة غيره دون أن يُطلب منه.",
        "en": "Human behaviour sees others' needs without being asked."
      }
    }
  ],
  "tasks": [
    {
      "id": "pig-t1",
      "ar": "الانتظار حتى يأخذ الجميع قبل الأكل.",
      "en": "Waited until everyone had been served before eating."
    },
    {
      "id": "pig-t2",
      "ar": "ملاحظة تعب أحد في البيت ومساعدته دون طلب.",
      "en": "Noticed someone at home was tired and helped without being asked."
    },
    {
      "id": "pig-t3",
      "ar": "مشاركة شيء محبوب مع أخ أو أخت أو صديق.",
      "en": "Shared something they love with a sibling or friend."
    },
    {
      "id": "pig-t4",
      "ar": "ترك المكان المريح لشخص أكبر أو متعب.",
      "en": "Gave up the comfy seat to someone older or tired."
    },
    {
      "id": "pig-t5",
      "ar": "الأكل جلوسًا مما يلي، وحمد الله بعد الطعام.",
      "en": "Ate sitting down from what was near them, and praised Allah after."
    }
  ]
};

/* ───────────── الوسطى: القرد / Restless ───────────── */
window.AKHLAQ_CONTENT.stages.monkey = {
  "name": {
    "ar": "سلوكيات القرد",
    "en": "Monkey behaviours"
  },
  "short": {
    "ar": "سلوك الاندفاع: قلة التركيز، وفقدان الأعصاب، ورفع الصوت، والحركة العنيفة، وعدم الاستماع، وعدم التوقف حين يُطلب منه.",
    "en": "The behaviour of impulse: little focus, losing your temper, raising your voice, rough movement, not listening, and not stopping when asked."
  },
  "signs": [
    {
      "ar": "رفع الصوت عند الاختلاف مع أحد.",
      "en": "Raises their voice when they disagree with someone."
    },
    {
      "ar": "مقاطعة المتكلم قبل أن يكمل.",
      "en": "Interrupts before the other person finishes."
    },
    {
      "ar": "عدم التوقف عند سماع «توقف».",
      "en": "Does not stop when told \"stop\"."
    },
    {
      "ar": "الدفع أو الضرب أو رمي الأشياء عند الغضب.",
      "en": "Pushes, hits or throws things when angry."
    },
    {
      "ar": "بدء عمل وتركه قبل إتمامه.",
      "en": "Starts something and leaves it before finishing."
    },
    {
      "ar": "الحركة والقفز في مكان يحتاج إلى هدوء.",
      "en": "Moves and jumps around in a place that needs calm."
    },
    {
      "ar": "كثرة الأسئلة دون انتظار الجواب.",
      "en": "Asks lots of questions without waiting for the answers."
    }
  ],
  "climb": [
    {
      "ar": "حين أسمع «توقف»، أتوقف أولًا، ثم أسأل لماذا.",
      "en": "When I hear \"stop\", I stop first, then ask why."
    },
    {
      "ar": "إذا جاء الغضب غيّرت وضعي: من الوقوف إلى الجلوس، ومن الجلوس إلى الاضطجاع، أو ابتعدت قليلًا.",
      "en": "If anger comes, I change position: from standing to sitting, from sitting to lying down, or I step away for a moment."
    },
    {
      "ar": "أتنفس ببطء: شهيق إلى أربعة، وزفير إلى أربعة، ثلاث مرات.",
      "en": "I breathe slowly: in for four, out for four, three times."
    },
    {
      "ar": "أخفض صوتي عمدًا حين أشعر أنه يرتفع.",
      "en": "I lower my voice on purpose when I feel it rising."
    },
    {
      "ar": "أعيد ما قاله محدّثي قبل أن أرد عليه.",
      "en": "I repeat what the other person said before I reply."
    }
  ],
  "degrees": [
    {
      "name": {
        "ar": "التشتت",
        "en": "Scattered attention"
      },
      "desc": {
        "ar": "القفز من شيء إلى شيء: عمل يبدأ ولا يتم، وسؤال لا يُنتظر جوابه.",
        "en": "Jumping from one thing to the next: work started and never finished, questions asked without waiting for the answer."
      }
    },
    {
      "name": {
        "ar": "لا يسمع ولا يتوقف",
        "en": "Not listening, not stopping"
      },
      "desc": {
        "ar": "الكلام يُقاطَع، وكلمة «توقف» لا تُسمع، والاندفاع يستمر حتى بعد الطلب.",
        "en": "Others are interrupted, the word «stop» goes unheard, and the rush carries on even after being asked."
      }
    },
    {
      "name": {
        "ar": "الغضب السريع",
        "en": "Quick anger"
      },
      "desc": {
        "ar": "فقدان الأعصاب: صوت يعلو، ويد تدفع، وحركة عنيفة.",
        "en": "Losing one's temper: a voice that rises, a hand that pushes, rough movement."
      }
    }
  ],
  "readings": [
    {
      "id": "monkey-r1",
      "title": {
        "ar": "يونس وكلمة «توقف»",
        "en": "Yunus and the word \"stop\""
      },
      "minutes": 3,
      "ages": "4-8",
      "body": {
        "ar": [
          "كان يونس يركل الكرة في غرفة الجلوس، وأخته هالة تبني برجًا عاليًا من المكعبات قرب الباب.",
          "رأى أبوه الكرة تقترب من البرج، فقال بهدوء: «يونس، توقف الآن من فضلك».",
          "أراد يونس أن يقول: «ركلة واحدة فقط!». لكنه تذكر ما تعلمه: حين تسمع «توقف»، توقف أولًا ثم اسأل.",
          "أمسك يونس الكرة بيديه، ونظر فرأى البرج كاد يسقط. قال لهالة: «آسف، لم أنتبه لبرجك. هل أساعدك أن تبنيه أعلى؟». ابتسمت هالة وبنيا البرج معًا.",
          "لم يكن لعب يونس شرًّا. لكن التوقف في الوقت المناسب هو ما جعله يصعد درجة."
        ],
        "en": [
          "Yunus was kicking a ball in the living room while his sister Hala built a tall tower of blocks by the door.",
          "His father saw the ball getting close to the tower and said calmly: \"Yunus, please stop now.\"",
          "Yunus wanted to say: \"Just one more kick!\" Then he remembered what he had learned: when you hear \"stop\", stop first, then ask.",
          "Yunus held the ball in his hands, looked, and saw the tower had nearly fallen. He told Hala: \"Sorry, I didn't notice your tower. Can I help you build it higher?\" Hala smiled and they built it together.",
          "Yunus's playing was not wicked. But stopping at the right moment is what made him climb a step."
        ]
      },
      "quote": null,
      "source": {
        "ar": "قصة تربوية مؤلفة، أبطالها خياليون.",
        "en": "An original teaching story with fictional characters."
      }
    },
    {
      "id": "monkey-r2",
      "title": {
        "ar": "القوي الحقيقي",
        "en": "The truly strong one"
      },
      "minutes": 3,
      "ages": "all",
      "body": {
        "ar": [
          "يظن بعض الناس أن القوي هو من يغلب غيره في المصارعة، أو من يعلو صوته على الجميع.",
          "لكن النبي صلى الله عليه وآله وسلم علّمنا أن القوي الحقيقي هو الذي يملك نفسه عند الغضب.",
          "حين تغضب، يحاول الغضب أن يقود يدك وصوتك وقدمك. سلوك القرد يترك الغضب يقود. والسلوك الإنساني يمسك المقود.",
          "وعلّمنا النبي صلى الله عليه وآله وسلم طريقة عملية: من غضب وهو قائم فليجلس، فإن ذهب عنه الغضب وإلا فليضطجع. تغيير وضع الجسد يطفئ النار شيئًا فشيئًا."
        ],
        "en": [
          "Some people think the strong one is whoever wins a wrestling match, or whoever is loudest.",
          "But the Prophet, peace and blessings be upon him and his family, taught that the truly strong one is the one who controls himself when angry.",
          "When you are angry, anger tries to drive your hand, your voice and your feet. Monkey behaviour lets anger drive. Human behaviour holds the wheel.",
          "He also taught a practical way: whoever gets angry while standing should sit down; if the anger goes, good, and if not, he should lie down. Changing your body's position cools the fire little by little."
        ]
      },
      "quote": {
        "ar": "«لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ»",
        "en": "Meaning: The strong one is not the one who wins at wrestling; the strong one is the one who controls himself when angry.",
        "ref": "صحيح البخاري 6114؛ صحيح مسلم (ترقيم sunnah.com: الكتاب 45، الحديث 140)؛ وحديث الجلوس عند الغضب: سنن أبي داود 4782",
        "checked": "hadith-api (fawazahmed0)",
        "verify": true
      },
      "source": {
        "ar": "حديثان نبويان: الأول متفق عليه، والثاني في سنن أبي داود.",
        "en": "Two hadiths: the first in both al-Bukhari and Muslim, the second in Sunan Abi Dawud."
      }
    },
    {
      "id": "monkey-r3",
      "title": {
        "ar": "عباد الرحمن يمشون هونًا",
        "en": "The servants of the Most Merciful walk gently"
      },
      "minutes": 4,
      "ages": "9-14",
      "body": {
        "ar": [
          "في سورة الفرقان وصف جميل لمن سماهم الله «عباد الرحمن». أول صفة لهم: أنهم يمشون على الأرض «هونًا»، أي بهدوء ولين، لا بعنف ولا تكبر.",
          "وإذا كلمهم الجاهلون بكلام سيئ لم يردوا بمثله، بل قالوا «سلامًا»: كلمة تُنهي الشجار.",
          "وفي سورة لقمان يوصي لقمان ابنه: ﴿وَاقْصِدْ فِي مَشْيِكَ وَاغْضُضْ مِنْ صَوْتِكَ﴾ (لقمان 31:19). المشي المعتدل والصوت المنخفض علامتان على قلب هادئ.",
          "هذه الصفات هي عكس سلوك القرد تمامًا: هدوء بدل العنف، وسلام بدل الصراخ. وكل واحد منا يستطيع أن يتمرن عليها في البيت والمدرسة كل يوم."
        ],
        "en": [
          "Surat al-Furqan has a beautiful description of those Allah calls \"the servants of the Most Merciful\". Their first quality: they walk on the earth gently, calmly and softly, without roughness or arrogance.",
          "And when ignorant people speak badly to them, they do not answer in kind; they say \"peace\", a word that ends the quarrel.",
          "In Surat Luqman, Luqman advises his son (31:19), meaning: be moderate in your walk and lower your voice. A moderate walk and a low voice are signs of a calm heart.",
          "These qualities are the exact opposite of monkey behaviour: calm instead of roughness, peace instead of shouting. Each of us can practise them at home and at school every day."
        ]
      },
      "quote": {
        "ar": "﴿وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا وَإِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا﴾",
        "en": "Meaning (not a translation): The servants of the Most Merciful are those who walk on the earth gently, and when the ignorant address them, they say: peace.",
        "ref": "الفرقان 25:63",
        "checked": "tanzil quran-simple, with diacritics (api.alquran.cloud)",
        "verify": true
      },
      "source": {
        "ar": "القرآن الكريم، الفرقان 25:63 ولقمان 31:19.",
        "en": "The Quran, al-Furqan 25:63 and Luqman 31:19."
      }
    },
    {
      "id": "monkey-r4",
      "title": {
        "ar": "تمرين: قِف، تنفّس، اختر",
        "en": "Exercise: stop, breathe, choose"
      },
      "minutes": 2,
      "ages": "all",
      "body": {
        "ar": [
          "صفحة عملية. يقول علماء السلوك إن بين الشيء الذي يغضبنا وبين ردّنا عليه مسافة صغيرة، ومن تعلّم أن يوسّعها صار أهدأ.",
          "الخطوة الأولى: «قِف». جمّد يديك وقدميك وفمك ثانية واحدة.",
          "الخطوة الثانية: «تنفّس». شهيق ببطء إلى أربعة، وزفير إلى أربعة. ثلاث مرات. ويمكنك أن تقول في نفسك: «أعوذ بالله من الشيطان الرجيم».",
          "الخطوة الثالثة: «اختر». اسأل نفسك: ما التصرف الإنساني الآن؟ أن أتكلم بهدوء؟ أن أبتعد قليلًا؟ أن أطلب المساعدة؟ ثم افعله.",
          "تمرّن عليها وأنت هادئ أيضًا، حتى تصير جاهزة حين تحتاجها."
        ],
        "en": [
          "A practical page. Behaviour scientists say there is a small gap between what makes us angry and how we respond, and whoever learns to widen it becomes calmer.",
          "Step one: \"Stop.\" Freeze your hands, your feet and your mouth for one second.",
          "Step two: \"Breathe.\" In slowly for four, out for four, three times. You can also say quietly: \"I seek refuge in Allah from the accursed Shaytan.\"",
          "Step three: \"Choose.\" Ask yourself: what is the human thing to do now? Speak calmly? Step away for a bit? Ask for help? Then do it.",
          "Practise it when you are calm too, so it is ready when you need it."
        ]
      },
      "quote": null,
      "source": {
        "ar": "مستفاد من تقنيات تنظيم الانفعال في علم النفس المعاصر، مع الاستعاذة الواردة في السنة عند الغضب.",
        "en": "Adapted from emotion-regulation techniques in modern psychology, with the seeking of refuge taught in the Sunna for anger."
      }
    }
  ],
  "quiz": [
    {
      "id": "monkey-q1",
      "readingId": "monkey-r1",
      "type": "comprehension",
      "q": {
        "ar": "ماذا فعل يونس حين قال أبوه «توقف»؟",
        "en": "What did Yunus do when his father said \"stop\"?"
      },
      "options": [
        {
          "ar": "أمسك الكرة واعتذر وساعد أخته",
          "en": "Held the ball, apologised and helped his sister"
        },
        {
          "ar": "ركل ركلة أخيرة",
          "en": "Gave one last kick"
        },
        {
          "ar": "قال إن البرج في المكان الخطأ",
          "en": "Said the tower was in the wrong place"
        }
      ],
      "correct": 0,
      "why": {
        "ar": "توقف أولًا ثم نظر وأصلح، وهذا سلوك إنساني.",
        "en": "He stopped first, then looked and made things right. That is human behaviour."
      }
    },
    {
      "id": "monkey-q2",
      "readingId": "monkey-r1",
      "type": "situation",
      "q": {
        "ar": "تلعب مع أخيك، وقال لك: «توقف، هذا يؤلمني». ماذا تفعل؟",
        "en": "You are playing with your brother and he says \"stop, that hurts\". What do you do?"
      },
      "options": [
        {
          "ar": "أتوقف فورًا وأسأله هل هو بخير.",
          "en": "Stop at once and ask if he is OK."
        },
        {
          "ar": "أكمل قليلًا لأنها مجرد لعبة.",
          "en": "Carry on a bit; it's only a game."
        },
        {
          "ar": "أضحك وأقول إنه يبالغ.",
          "en": "Laugh and say he's exaggerating."
        }
      ],
      "correct": 0,
      "why": {
        "ar": "التوقف الفوري حين يُطلب منك هو أول درجة للخروج من سمات الوسطى، وسؤالك عنه يُشعره أنك تهتم.",
        "en": "Stopping at once when asked is the first step out of middle-finger traits, and asking if he is OK shows you care."
      }
    },
    {
      "id": "monkey-q3",
      "readingId": "monkey-r2",
      "type": "comprehension",
      "q": {
        "ar": "من القوي الحقيقي في الحديث؟",
        "en": "Who is truly strong in the hadith?"
      },
      "options": [
        {
          "ar": "من يغلب في المصارعة",
          "en": "The one who wins at wrestling"
        },
        {
          "ar": "من صوته أعلى",
          "en": "The loudest one"
        },
        {
          "ar": "من يملك نفسه عند الغضب",
          "en": "The one who controls himself when angry"
        }
      ],
      "correct": 2,
      "why": {
        "ar": "القوي من يملك نفسه حين يغضب.",
        "en": "The strong one is the one who holds himself back when angry."
      }
    },
    {
      "id": "monkey-q4",
      "readingId": "monkey-r2",
      "type": "situation",
      "q": {
        "ar": "غضبت وأنت واقف. ماذا علّمنا النبي صلى الله عليه وآله وسلم أن نفعل؟",
        "en": "You get angry while standing. What did the Prophet, peace be upon him and his family, teach us to do?"
      },
      "options": [
        {
          "ar": "أركض",
          "en": "Run"
        },
        {
          "ar": "أجلس",
          "en": "Sit down"
        },
        {
          "ar": "أصرخ ليخرج الغضب",
          "en": "Shout to let the anger out"
        }
      ],
      "correct": 1,
      "why": {
        "ar": "تغيير وضع الجسد بالجلوس يطفئ الغضب شيئًا فشيئًا.",
        "en": "Changing position by sitting down cools anger little by little."
      }
    },
    {
      "id": "monkey-q5",
      "readingId": "monkey-r3",
      "type": "comprehension",
      "q": {
        "ar": "ماذا يقول عباد الرحمن إذا كلمهم الجاهلون؟",
        "en": "What do the servants of the Most Merciful say when the ignorant speak to them?"
      },
      "options": [
        {
          "ar": "يردون بكلام أشد",
          "en": "Answer even harsher"
        },
        {
          "ar": "لا يسمعون",
          "en": "They do not hear"
        },
        {
          "ar": "سلامًا",
          "en": "Peace"
        }
      ],
      "correct": 2,
      "why": {
        "ar": "هكذا وصفهم الله في سورة الفرقان: إذا كلمهم الجاهل بكلام سيئ ردّوا بكلمة واحدة: «سلامًا».",
        "en": "That is how Allah describes them in Surat al-Furqan: when the ignorant speak badly to them, they answer with one word: “peace”."
      }
    },
    {
      "id": "monkey-q6",
      "readingId": "monkey-r3",
      "type": "situation",
      "q": {
        "ar": "قال لك زميل كلمة جارحة في الملعب. ما الرد الأقرب لعباد الرحمن؟",
        "en": "A classmate says something hurtful in the playground. Which reply is closest to the servants of the Most Merciful?"
      },
      "options": [
        {
          "ar": "أقول بهدوء: «سلام»، وأبتعد، وأخبر الكبار إن تكرر.",
          "en": "Calmly say \"peace\", walk away, and tell an adult if it happens again."
        },
        {
          "ar": "أدفعه بقوة.",
          "en": "Shove him hard."
        },
        {
          "ar": "أقول له كلمة أسوأ.",
          "en": "Say something worse back."
        }
      ],
      "correct": 0,
      "why": {
        "ar": "تبتعد بسلام، وتطلب العون إن احتجت.",
        "en": "Walk away in peace, and ask for help if you need it."
      }
    },
    {
      "id": "monkey-q7",
      "readingId": "monkey-r4",
      "type": "comprehension",
      "q": {
        "ar": "ما ترتيب خطوات التمرين؟",
        "en": "What is the order of the exercise steps?"
      },
      "options": [
        {
          "ar": "اختر، قِف، تنفّس",
          "en": "Choose, stop, breathe"
        },
        {
          "ar": "قِف، تنفّس، اختر",
          "en": "Stop, breathe, choose"
        },
        {
          "ar": "تنفّس، اصرخ، اختر",
          "en": "Breathe, shout, choose"
        }
      ],
      "correct": 1,
      "why": {
        "ar": "نوقف الجسد أولًا، ثم نهدئه بالتنفس، ثم نختار التصرف الإنساني.",
        "en": "First freeze the body, then calm it with breathing, then choose the human action."
      }
    },
    {
      "id": "monkey-q8",
      "readingId": "monkey-r4",
      "type": "situation",
      "q": {
        "ar": "أخذ أخوك لعبتك دون إذن، وشعرت بيدك تريد أن تضربه. ماذا تفعل؟",
        "en": "Your brother took your toy without asking, and your hand wants to hit him. What do you do?"
      },
      "options": [
        {
          "ar": "أضربه ليتعلم.",
          "en": "Hit him so he learns."
        },
        {
          "ar": "أكسر لعبته.",
          "en": "Break his toy."
        },
        {
          "ar": "أقف وأتنفس، ثم أطلب اللعبة بهدوء.",
          "en": "Stop, breathe, then ask for the toy calmly."
        }
      ],
      "correct": 2,
      "why": {
        "ar": "المسافة بين الغضب والرد هي مكان الصعود.",
        "en": "The gap between anger and reaction is where the climbing happens."
      }
    }
  ],
  "tasks": [
    {
      "id": "monkey-t1",
      "ar": "التوقف فورًا عند سماع «توقف» اليوم.",
      "en": "Stopped at once when told \"stop\" today."
    },
    {
      "id": "monkey-t2",
      "ar": "الكلام بصوت هادئ في خلاف بدل الصراخ.",
      "en": "Spoke in a calm voice during a disagreement instead of shouting."
    },
    {
      "id": "monkey-t3",
      "ar": "استعمال «قِف، تنفّس، اختر» عند الغضب.",
      "en": "Used \"stop, breathe, choose\" when angry."
    },
    {
      "id": "monkey-t4",
      "ar": "الاستماع حتى ينتهي المتكلم ثم الرد.",
      "en": "Listened until the speaker finished, then replied."
    },
    {
      "id": "monkey-t5",
      "ar": "إتمام عمل بُدئ حتى نهايته.",
      "en": "Finished a task they started."
    }
  ]
};

/* ───────────── السبابة: الإنسان العادي / Ordinary human (المقتصد) ───────────── */
window.AKHLAQ_CONTENT.stages.human = {
  "name": {
    "ar": "الآدمية (المسلم)",
    "ar_f": "الآدمية (المسلمة)",
    "en": "True humanity (the Muslim)"
  },
  "short": {
    "ar": "السلوك الإنساني المعتدل، «المقتصد»: يكفّ أذاه عن الناس، ويؤدي ما عليه، ويرجع عن خطئه إذا أخطأ، كما رجع أبونا آدم عليه السلام.",
    "en": "Balanced human behaviour, \"the moderate one\": keeps harm away from people, does what is due, and turns back from a mistake when wrong, as our father Adam, peace be upon him, turned back."
  },
  "signs": [
    {
      "ar": "سلامة الناس من الأذى باليد واللسان.",
      "en": "Does not hurt anyone with their hands or their tongue."
    },
    {
      "ar": "قول «آسف» عند الخطأ، و«شكرًا» عند الإحسان.",
      "en": "Says \"sorry\" when wrong and \"thank you\" when someone is kind."
    },
    {
      "ar": "الوفاء بالوعد الصغير: «سأرتب غرفتي»، ثم ترتيبها.",
      "en": "Keeps small promises: \"I'll tidy my room\", and does it."
    },
    {
      "ar": "أداء الواجب دون تذكير كل مرة.",
      "en": "Does their duties without being reminded every time."
    },
    {
      "ar": "الاستماع حين يتكلم الآخرون، وانتظار الدور.",
      "en": "Listens when others speak and waits their turn."
    },
    {
      "ar": "ملاحظة حاجة من حولنا والمساعدة عند الطلب.",
      "en": "Notices what people around need and helps when asked."
    }
  ],
  "climb": [
    {
      "ar": "أحافظ على عمل خير صغير كل يوم، فالقليل الدائم أحب إلى الله.",
      "en": "I keep one small good deed every day; a little that lasts is most loved by Allah."
    },
    {
      "ar": "إذا أخطأت فلا أيأس: أعتذر، وأصلح، وأُتبع السيئة حسنة.",
      "en": "If I slip, I do not give up: I apologise, repair it, and follow the bad deed with a good one."
    },
    {
      "ar": "أبدأ بالخير قبل أن يُطلب مني، فهذا باب الإبهام.",
      "en": "I start doing good before being asked; that is the door to the thumb."
    },
    {
      "ar": "أختار قدوة من الأنبياء عليهم السلام وأقرأ قصته.",
      "en": "I choose a prophet, peace be upon them, as a role model and read his story."
    }
  ],
  "degrees": [
    {
      "name": {
        "ar": "كفّ الأذى",
        "en": "Keeping harm away"
      },
      "desc": {
        "ar": "يسلم الناس من يدي ولساني.",
        "en": "People are safe from my hands and tongue."
      }
    },
    {
      "name": {
        "ar": "أداء الواجب",
        "en": "Doing what is due"
      },
      "desc": {
        "ar": "أقوم بواجباتي وأفي بوعودي دون تذكير دائم.",
        "en": "I do my duties and keep my promises without constant reminders."
      }
    },
    {
      "name": {
        "ar": "الرجوع عن الخطأ",
        "en": "Turning back from mistakes"
      },
      "desc": {
        "ar": "إذا أخطأتُ اعترفت واعتذرت وأصلحت، كما رجع أبونا آدم عليه السلام إلى ربه.",
        "en": "When I get something wrong, I admit it, apologise and put it right, as our father Adam, peace be upon him, turned back to his Lord."
      }
    }
  ],
  "readings": [
    {
      "id": "human-r1",
      "title": {
        "ar": "زيد والكوب المكسور",
        "en": "Zayd and the broken cup"
      },
      "minutes": 3,
      "ages": "4-8",
      "body": {
        "ar": [
          "كان زيد يركض في المطبخ، فاصطدم بالطاولة وسقط كوب جدته المفضل وانكسر.",
          "لم يره أحد. فكّر زيد أن يهرب إلى غرفته ويسكت. ثم تذكر أن الإنسان يقول الحق ويعتذر.",
          "ذهب إلى جدته وقال: «يا جدتي، كسرت كوبك. أنا آسف، كنت أركض». ثم جمع القطع بحذر مع أبيه.",
          "ضمته جدته وقالت: «الكوب يُشترى، أما صدقك فلا يُشترى». وفي اليوم التالي رسم لها زيد بطاقة وكتب: «سأمشي في المطبخ».",
          "الإنسان يخطئ، لكنه لا يخبئ خطأه. يعتذر، ويصلح، ويتعلم."
        ],
        "en": [
          "Zayd was running in the kitchen when he bumped the table, and his grandmother's favourite cup fell and broke.",
          "Nobody saw. Zayd thought of running to his room and saying nothing. Then he remembered that a human being tells the truth and apologises.",
          "He went to his grandmother: \"Grandma, I broke your cup. I'm sorry, I was running.\" Then he carefully picked up the pieces with his father.",
          "His grandmother hugged him: \"A cup can be bought, but your honesty cannot.\" The next day Zayd drew her a card that said: \"I will walk in the kitchen.\"",
          "A human makes mistakes, but does not hide them. They apologise, repair and learn."
        ]
      },
      "quote": null,
      "source": {
        "ar": "قصة تربوية مؤلفة، أبطالها خياليون.",
        "en": "An original teaching story with fictional characters."
      }
    },
    {
      "id": "human-r2",
      "title": {
        "ar": "في أحسن تقويم",
        "en": "In the finest form"
      },
      "minutes": 4,
      "ages": "all",
      "body": {
        "ar": [
          "يقول الله في سورة التين إنه خلق الإنسان «في أحسن تقويم»: أجمل صورة وأحسن هيئة. شكلك جميل كما خلقه الله.",
          "ثم تقول الآية إن الإنسان قد يُرَدّ «أسفل سافلين». والذي يسقط سلوكه، حين يترك الهداية.",
          "ثم يأتي الاستثناء: «إلا الذين آمنوا وعملوا الصالحات». بالإيمان والعمل الصالح يبقى الإنسان في مكانه الكريم ويصعد.",
          "وفي سورة فاطر يقسم الله الناس ثلاثة: ظالم لنفسه، ومقتصد، وسابق بالخيرات (فاطر 35:32). المقتصد هو الإنسان المعتدل الذي يؤدي ما عليه. وهذه مرتبة السبابة في التطبيق، وفوقها السابقون."
        ],
        "en": [
          "In Surat at-Tin, Allah says He created the human being \"in the finest form\": the most beautiful shape and stature. Your shape is beautiful as Allah made it.",
          "Then the verse says a person may be brought down \"to the lowest of the low\". What falls is their behaviour, when they leave guidance behind.",
          "Then comes the exception: \"except those who believe and do good deeds\". With faith and good deeds a person keeps their honoured place and climbs.",
          "In Surat Fatir (35:32), Allah divides people into three: those who wrong themselves, the moderate, and those who race to good deeds. The moderate one is the balanced human who does what is due. This is the index-finger stage in the app, and above it is Racing to good."
        ]
      },
      "quote": {
        "ar": "﴿لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ ۝ ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ﴾",
        "en": "Meaning (not a translation): We created the human being in the finest form, then brought him down to the lowest of the low, except those who believe and do good deeds.",
        "ref": "التين 95:4-6",
        "checked": "tanzil quran-simple, with diacritics (api.alquran.cloud)",
        "verify": true
      },
      "source": {
        "ar": "القرآن الكريم، التين 95:4-6، وفاطر 35:32.",
        "en": "The Quran, at-Tin 95:4-6 and Fatir 35:32."
      }
    },
    {
      "id": "human-r3",
      "title": {
        "ar": "سلم الناس من لسانه ويده",
        "en": "People are safe from his tongue and hand"
      },
      "minutes": 3,
      "ages": "9-14",
      "body": {
        "ar": [
          "سُئل النبي صلى الله عليه وآله وسلم عن المسلم، فقال إنه من سلم المسلمون من لسانه ويده.",
          "هذه أول درجة في السبابة: ألّا يخاف منك أحد. لا ضرب، ولا دفع، ولا سخرية، ولا كلمة جارحة.",
          "وقال أيضًا: «أحب الأعمال إلى الله تعالى أدومها وإن قل». يكفي الإنسانَ عمل صغير يداوم عليه، كل يوم.",
          "اجمع الحديثين: كفّ أذاك، وداوم على خير صغير. هكذا تثبت على السبابة وتتهيأ للإبهام."
        ],
        "en": [
          "The Prophet, peace and blessings be upon him and his family, was asked who a Muslim is. He said it is the one from whose tongue and hand people are safe.",
          "That is the first step on the index finger: nobody is afraid of you. No hitting, no pushing, no mocking, no hurtful words.",
          "He also said, meaning: the deeds most loved by Allah are the most lasting, even if small. A small good deed kept up every day is enough.",
          "Put the two together: keep your harm away, and keep up a small good. That is how you stay on the index finger and get ready for the thumb."
        ]
      },
      "quote": {
        "ar": "«الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ»",
        "en": "Meaning: The Muslim is the one from whose tongue and hand the Muslims are safe.",
        "ref": "صحيح البخاري 10؛ صحيح مسلم (ترقيم sunnah.com: الكتاب 1، الحديث 68)؛ وحديث «أحب الأعمال إلى الله تعالى أدومها وإن قل»: صحيح مسلم (الكتاب 6، الحديث 258)، ونحوه في البخاري 6464",
        "checked": "hadith-api (fawazahmed0)",
        "verify": true
      },
      "source": {
        "ar": "حديثان متفق عليهما.",
        "en": "Two hadiths found in both al-Bukhari and Muslim."
      }
    },
    {
      "id": "human-r4",
      "title": {
        "ar": "تمرين: العادة الصغيرة",
        "en": "Exercise: the tiny habit"
      },
      "minutes": 2,
      "ages": "15+",
      "body": {
        "ar": [
          "صفحة عملية. تقول أبحاث العادات إن السلوك يثبت حين يكون صغيرًا جدًا، ومرتبطًا بشيء نفعله كل يوم، ومتبوعًا بشعور طيب.",
          "اختر عادة صغيرة: أن تشكر أمك بعد كل وجبة، أو أن ترتب سريرك بعد الاستيقاظ، أو أن تقول كلمة طيبة لأول من تلقاه.",
          "اربطها بشيء ثابت: «بعد أن أغسل يدي من الطعام، أقول لأمي: شكرًا».",
          "وحين تفعلها، ابتسم وقل «الحمد لله». بعد أسابيع تصير العادة جزءًا منك، وهذا معنى «أدومها وإن قل»."
        ],
        "en": [
          "A practical page. Habit research says a behaviour sticks when it is very small, tied to something you already do every day, and followed by a good feeling.",
          "Choose one tiny habit: thank your mother after every meal, make your bed after waking, or say a kind word to the first person you meet.",
          "Tie it to something fixed: \"After I wash my hands from eating, I say thank you to my mother.\"",
          "When you do it, smile and say \"Alhamdulillah\". After a few weeks the habit becomes part of you; that is the meaning of \"the most lasting, even if small\"."
        ]
      },
      "quote": null,
      "source": {
        "ar": "مستفاد من أبحاث تكوين العادات في علم النفس السلوكي المعاصر، مع حديث المداومة.",
        "en": "Adapted from habit-formation research in modern behavioural psychology, with the hadith on consistency."
      }
    }
  ],
  "quiz": [
    {
      "id": "human-q1",
      "readingId": "human-r1",
      "type": "comprehension",
      "q": {
        "ar": "ماذا فعل زيد بعد أن كسر الكوب؟",
        "en": "What did Zayd do after breaking the cup?"
      },
      "options": [
        {
          "ar": "اعترف واعتذر وساعد في الجمع",
          "en": "Owned up, apologised and helped clean up"
        },
        {
          "ar": "هرب وسكت",
          "en": "Ran away and kept quiet"
        },
        {
          "ar": "قال إن أخاه كسره",
          "en": "Said his brother broke it"
        }
      ],
      "correct": 0,
      "why": {
        "ar": "الإنسان لا يخبئ خطأه: يعترف ويعتذر ويصلح.",
        "en": "A human does not hide a mistake: they own it, apologise and repair."
      }
    },
    {
      "id": "human-q2",
      "readingId": "human-r1",
      "type": "situation",
      "q": {
        "ar": "أوقعت كتاب صديقك في الماء دون قصد. ماذا تفعل؟",
        "en": "You accidentally dropped your friend's book in water. What do you do?"
      },
      "options": [
        {
          "ar": "أعتذر وأعرض أن أصلحه أو أعوضه.",
          "en": "Apologise and offer to fix or replace it."
        },
        {
          "ar": "أعيده دون أن أقول شيئًا.",
          "en": "Give it back without saying anything."
        },
        {
          "ar": "ألومه لأنه تركه قربي.",
          "en": "Blame him for leaving it near me."
        }
      ],
      "correct": 0,
      "why": {
        "ar": "الاعتذار مع الإصلاح هو السلوك الإنساني.",
        "en": "Apologising and repairing is human behaviour."
      }
    },
    {
      "id": "human-q3",
      "readingId": "human-r2",
      "type": "comprehension",
      "q": {
        "ar": "في سورة التين، ما الذي يجعل الإنسان يسقط «أسفل سافلين»؟",
        "en": "In Surat at-Tin, what brings a person down \"to the lowest of the low\"?"
      },
      "options": [
        {
          "ar": "شكله",
          "en": "Their looks"
        },
        {
          "ar": "فقره",
          "en": "Being poor"
        },
        {
          "ar": "سلوكه حين يترك الهداية",
          "en": "Their behaviour when they leave guidance"
        }
      ],
      "correct": 2,
      "why": {
        "ar": "خلق الله الإنسان في أحسن تقويم، ثم يسقط حين يترك الهداية بسلوكه. ومن آمن وعمل الصالحات بقي في مكانه الكريم.",
        "en": "Allah created people in the finest form. A person falls when their behaviour leaves guidance behind, and those who believe and do good keep their honoured place."
      }
    },
    {
      "id": "human-q4",
      "readingId": "human-r2",
      "type": "comprehension",
      "q": {
        "ar": "ما الأقسام الثلاثة في آية فاطر؟",
        "en": "What are the three groups in the verse of Fatir?"
      },
      "options": [
        {
          "ar": "غني، ومتوسط، وفقير",
          "en": "Rich, middle, poor"
        },
        {
          "ar": "ظالم لنفسه، ومقتصد، وسابق بالخيرات",
          "en": "Wronging themselves, moderate, racing to good"
        },
        {
          "ar": "صغير، وكبير، وشيخ",
          "en": "Young, adult, elderly"
        }
      ],
      "correct": 1,
      "why": {
        "ar": "هذا التقسيم هو إطار السلم في التطبيق.",
        "en": "This division is the frame of the app's ladder."
      }
    },
    {
      "id": "human-q5",
      "readingId": "human-r3",
      "type": "comprehension",
      "q": {
        "ar": "ما أحب الأعمال إلى الله في الحديث؟",
        "en": "Which deeds are most loved by Allah in the hadith?"
      },
      "options": [
        {
          "ar": "أكبرها وإن انقطع",
          "en": "The biggest, even if they stop"
        },
        {
          "ar": "ما يراه الناس",
          "en": "Those people see"
        },
        {
          "ar": "أدومها وإن قل",
          "en": "The most lasting, even if small"
        }
      ],
      "correct": 2,
      "why": {
        "ar": "الخير الصغير الدائم أحب إلى الله من الكبير المنقطع.",
        "en": "A small lasting good is more loved than a big one that stops."
      }
    },
    {
      "id": "human-q6",
      "readingId": "human-r3",
      "type": "situation",
      "q": {
        "ar": "يسخر أصدقاؤك من طالب جديد، ويريدونك أن تضحك معهم. ماذا تفعل؟",
        "en": "Your friends are mocking a new student and want you to laugh along. What do you do?"
      },
      "options": [
        {
          "ar": "لا أشارك، وأقول لهم بلطف أن يتوقفوا، وأسلّم على الطالب.",
          "en": "Don't join in, kindly tell them to stop, and greet the student."
        },
        {
          "ar": "أضحك حتى لا يغضبوا مني.",
          "en": "Laugh so they don't get upset with me."
        },
        {
          "ar": "أسخر منه أكثر منهم.",
          "en": "Mock him even more."
        }
      ],
      "correct": 0,
      "why": {
        "ar": "أن يسلم الناس من لسانك يعني ألا تشارك في السخرية أبدًا.",
        "en": "People being safe from your tongue means never joining in mockery."
      }
    },
    {
      "id": "human-q7",
      "readingId": "human-r4",
      "type": "situation",
      "q": {
        "ar": "تريد أن تبني عادة شكر أمك. ما الطريقة الأنجح؟",
        "en": "You want to build the habit of thanking your mother. What works best?"
      },
      "options": [
        {
          "ar": "أقرر أن أشكرها مئة مرة غدًا.",
          "en": "Decide to thank her a hundred times tomorrow."
        },
        {
          "ar": "أربطها بشيء ثابت: بعد كل وجبة أقول شكرًا.",
          "en": "Tie it to something fixed: after every meal I say thank you."
        },
        {
          "ar": "أنتظر حتى أتذكر.",
          "en": "Wait until I remember."
        }
      ],
      "correct": 1,
      "why": {
        "ar": "العادة الصغيرة المربوطة بشيء يومي تدوم.",
        "en": "A tiny habit tied to a daily moment lasts."
      }
    }
  ],
  "tasks": [
    {
      "id": "human-t1",
      "ar": "الاعتذار عن خطأ دون أن يُطلب ذلك.",
      "en": "Apologised for a mistake without being asked."
    },
    {
      "id": "human-t2",
      "ar": "الوفاء بوعد صغير قُطع اليوم.",
      "en": "Kept a small promise made today."
    },
    {
      "id": "human-t3",
      "ar": "يوم كامل بلا أذى بيد أو لسان.",
      "en": "Went the whole day without hurting anyone by hand or tongue."
    },
    {
      "id": "human-t4",
      "ar": "المحافظة على العادة الصغيرة سبعة أيام.",
      "en": "Kept their tiny habit for seven days."
    }
  ]
};

/* ───────────── الإبهام: السابق بالخيرات / Racing to good ───────────── */
window.AKHLAQ_CONTENT.stages.sabiq = {
  "name": {
    "ar": "السابق بالخيرات",
    "en": "Racing to good"
  },
  "short": {
    "ar": "سلوك المبادرة بالخير: يسارع إلى الخير قبل أن يُطلب منه، ويعين غيره على الصعود. وهو بداية الترقي، ودرجات كثيرة يتفاوت الناس فيها تفاوتًا كبيرًا.",
    "en": "The behaviour of taking the lead in good: hurrying to good before being asked, and helping others climb. It is where the ascent begins, with many degrees in which people differ greatly."
  },
  "signs": [
    {
      "ar": "رؤية العمل الذي يحتاج أن يُعمل، وعمله قبل الطلب.",
      "en": "Sees what needs doing and does it before being asked."
    },
    {
      "ar": "خير خفي لا يعرفه أحد.",
      "en": "Does a hidden good deed nobody knows about."
    },
    {
      "ar": "العفو عمن أخطأ، والابتسام له.",
      "en": "Forgives someone who wronged them and smiles at them."
    },
    {
      "ar": "مساعدة الأخ أو الصديق على التحسن دون تكبر عليه.",
      "en": "Helps a sibling or friend improve, without looking down on them."
    },
    {
      "ar": "تقديم الآخرين على النفس في شيء محبوب.",
      "en": "Puts others first even with something they love."
    },
    {
      "ar": "كثرة ذكر الله في اليوم.",
      "en": "Remembers Allah often through the day."
    }
  ],
  "climb": [
    {
      "ar": "أجعل لي كل يوم عملًا خفيًّا لا يعرفه إلا الله.",
      "en": "I keep one hidden good deed each day that only Allah knows."
    },
    {
      "ar": "أقرأ قصة نبي وأسأل: ماذا أفعل اليوم كما فعل؟",
      "en": "I read a prophet's story and ask: what can I do today the way he did?"
    },
    {
      "ar": "أعين غيري على الصعود بالكلمة الطيبة لا باللوم.",
      "en": "I help others climb with kind words, not blame."
    },
    {
      "ar": "لا أغترّ، فأنا أحتاج الهداية كل يوم.",
      "en": "I do not become proud: I need guidance every day."
    }
  ],
  "degrees": [
    {
      "name": {
        "ar": "مبادرة بالخير",
        "en": "Starting the good"
      },
      "desc": {
        "ar": "أفعل الخير من نفسي قبل أن يُطلب مني.",
        "en": "I do good on my own before being asked."
      }
    },
    {
      "name": {
        "ar": "مسابقة وعون للغير",
        "en": "Racing and helping others rise"
      },
      "desc": {
        "ar": "أتسابق إلى الخير، وآخذ بيد غيري ليصعد معي.",
        "en": "I race to good and take others by the hand to climb with me."
      }
    }
  ],
  "readings": [
    {
      "id": "sabiq-r1",
      "title": {
        "ar": "مريم والحديقة قبل أن يستيقظوا",
        "en": "Maryam and the garden before anyone woke"
      },
      "minutes": 3,
      "ages": "4-8",
      "body": {
        "ar": [
          "كانت جارة مريم العجوز مريضة، وحديقتها الصغيرة امتلأت بالأوراق اليابسة.",
          "لم يطلب أحد من مريم شيئًا. لكنها استيقظت باكرًا يوم الجمعة، وأخذت مكنسة صغيرة، وجمعت الأوراق كلها، وسقت الزهور.",
          "حين فتحت الجارة النافذة، رأت الحديقة نظيفة، فدعت لمن فعل ذلك ولم تعرف من هو.",
          "وفي الأسبوع التالي جاءت مريم ومعها أخوها، وعلّمته كيف يسقي الزهور بلطف.",
          "هذا هو السابق بالخيرات: يرى الخير قبل أن يُطلب منه، ويفعله لوجه الله، ويأخذ غيره معه."
        ],
        "en": [
          "Maryam's elderly neighbour was ill, and her little garden had filled with dry leaves.",
          "Nobody asked Maryam to do anything. But she woke up early on Friday, took a small broom, gathered all the leaves and watered the flowers.",
          "When the neighbour opened her window she saw the clean garden and prayed for whoever had done it, without knowing who.",
          "The next week Maryam came back with her brother and showed him how to water the flowers gently.",
          "That is Racing to good: sees the good before being asked, does it for the sake of Allah, and brings others along."
        ]
      },
      "quote": null,
      "source": {
        "ar": "قصة تربوية مؤلفة، أبطالها خياليون.",
        "en": "An original teaching story with fictional characters."
      }
    },
    {
      "id": "sabiq-r2",
      "title": {
        "ar": "والسابقون السابقون",
        "en": "And the foremost, the foremost"
      },
      "minutes": 4,
      "ages": "all",
      "body": {
        "ar": [
          "في سورة فاطر ذكر الله ثلاثة أقسام من الناس، وأعلاها «سابق بالخيرات بإذن الله». و«بإذن الله» تذكّرنا أن السبق نفسه هداية من الله، نشكره عليها.",
          "وفي سورة الواقعة: ﴿وَالسَّابِقُونَ السَّابِقُونَ ۝ أُولَٰئِكَ الْمُقَرَّبُونَ﴾ (الواقعة 56:10-11). السابقون إلى الخير في الدنيا هم السابقون إلى القرب من الله.",
          "وأمرنا الله بالمسارعة: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ﴾ (آل عمران 3:133). والمسارعة أن تقوم إلى الخير في اللحظة التي تخطر لك فيها، قبل أن يأتي الكسل.",
          "وكلما اتبعت الهداية زادك الله هدى: ﴿وَالَّذِينَ اهْتَدَوْا زَادَهُمْ هُدًى﴾ (محمد 47:17)."
        ],
        "en": [
          "In Surat Fatir, Allah mentions three groups of people, the highest being those \"racing to good deeds by Allah's permission\". \"By Allah's permission\" reminds us that the racing itself is guidance from Allah, and we thank Him for it.",
          "In Surat al-Waqi'a (56:10-11), the meaning is: and the foremost, the foremost, they are the ones brought near. Those who are first to good in this life are first in nearness to Allah.",
          "Allah tells us to hurry (Al Imran 3:133), meaning: hasten to forgiveness from your Lord. Hurrying means getting up to do the good the moment it occurs to you, before laziness arrives.",
          "And the more you follow guidance, the more guidance Allah gives (Muhammad 47:17)."
        ]
      },
      "quote": {
        "ar": "﴿فَمِنْهُمْ ظَالِمٌ لِنَفْسِهِ وَمِنْهُمْ مُقْتَصِدٌ وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ بِإِذْنِ اللَّهِ﴾",
        "en": "Meaning (not a translation): Among them are some who wrong themselves, some who are moderate, and some who race ahead in good deeds by Allah's permission.",
        "ref": "فاطر 35:32",
        "checked": "tanzil quran-simple, with diacritics (api.alquran.cloud)",
        "verify": true
      },
      "source": {
        "ar": "القرآن الكريم، فاطر 35:32، والواقعة 56:10-11، وآل عمران 3:133، ومحمد 47:17.",
        "en": "The Quran, Fatir 35:32, al-Waqi'a 56:10-11, Al Imran 3:133 and Muhammad 47:17."
      }
    },
    {
      "id": "sabiq-r3",
      "title": {
        "ar": "فبهداهم اقتده: الأنبياء نور يُهتدى به",
        "en": "Follow their guidance: the prophets, a light that guides"
      },
      "minutes": 4,
      "ages": "9-14",
      "body": {
        "ar": [
          "فوق كل المراحل في التطبيق نور: نور الهداية التي أتى بها الأنبياء عليهم السلام، وبنورهم ورسالاتهم يُهتدى، نمشي في ضوئه خطوة بعد خطوة.",
          "بعد أن ذكر الله في سورة الأنعام أنبياء كثيرين، قال لنبيه: ﴿أُولَٰئِكَ الَّذِينَ هَدَى اللَّهُ ۖ فَبِهُدَاهُمُ اقْتَدِهْ﴾ (الأنعام 6:90). أي اتبع هدايتهم.",
          "وقال: ﴿لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ﴾ (الأحزاب 33:21). الأسوة من نقلّده في خُلقه.",
          "ووعد الله من يطيعه ويطيع رسوله أن يكون «مع» الذين أنعم عليهم: النبيين والصديقين والشهداء والصالحين، ﴿وَحَسُنَ أُولَٰئِكَ رَفِيقًا﴾ (النساء 4:69). الجائزة أن نكون في رفقتهم.",
          "جرّب هذا الأسبوع: اختر خلقًا واحدًا من نبي: صبر أيوب، أو صدق يوسف، أو رحمة النبي محمد صلى الله عليه وآله وسلم بالصغار، وطبّقه يومًا كاملًا."
        ],
        "en": [
          "Above every stage in the app there is a light: the light of guidance the prophets, peace be upon them, brought; by their light and their messages we are guided, and we walk in it step by step.",
          "After naming many prophets in Surat al-An'am, Allah told His Prophet (6:90), meaning: those are the ones Allah guided, so follow their guidance.",
          "And (al-Ahzab 33:21), meaning: in the Messenger of Allah you have a beautiful example. An example is someone whose character we copy.",
          "Allah promised that whoever obeys Him and His Messenger will be \"with\" those He has blessed: the prophets, the truthful, the witnesses and the righteous, and what fine companions they are (an-Nisa 4:69). The reward is to be in their company.",
          "Try this week: choose one quality of a prophet, such as the patience of Ayyub, the honesty of Yusuf, or the gentleness of the Prophet Muhammad, peace and blessings be upon him and his family, with children, and live it for a whole day."
        ]
      },
      "quote": {
        "ar": "﴿أُولَٰئِكَ الَّذِينَ هَدَى اللَّهُ ۖ فَبِهُدَاهُمُ اقْتَدِهْ﴾",
        "en": "Meaning (not a translation): Those are the ones Allah guided, so follow their guidance.",
        "ref": "الأنعام 6:90",
        "checked": "tanzil quran-simple, with diacritics (api.alquran.cloud)",
        "verify": true
      },
      "source": {
        "ar": "القرآن الكريم، الأنعام 6:90، والأحزاب 33:21، والنساء 4:69.",
        "en": "The Quran, al-An'am 6:90, al-Ahzab 33:21 and an-Nisa 4:69."
      }
    },
    {
      "id": "sabiq-r4",
      "title": {
        "ar": "تمرين: خطة الخير الخفي",
        "en": "Exercise: the hidden-good plan"
      },
      "minutes": 2,
      "ages": "all",
      "body": {
        "ar": [
          "صفحة عملية. قال النبي صلى الله عليه وآله وسلم: «كل معروف صدقة» (صحيح البخاري). حتى الابتسامة والكلمة الطيبة.",
          "ويقول علماء النفس إن أفعال اللطف الصغيرة تُسعد فاعلها كما تُسعد من تصله، وإن التخطيط لها مسبقًا يجعلنا نفعلها فعلًا.",
          "الخطة: كل مساء اكتب عملًا خفيًّا واحدًا ستفعله غدًا: ترتيب حذاء أبيك، أو وضع ماء لعطشان، أو دعاء لصديق باسمه.",
          "لا تخبر أحدًا. واكتب في المساء التالي: هل فعلته؟ وماذا شعرت؟"
        ],
        "en": [
          "A practical page. The Prophet, peace and blessings be upon him and his family, said, meaning: every act of kindness is charity (Sahih al-Bukhari). Even a smile and a kind word.",
          "Psychologists say small acts of kindness make the doer as happy as the receiver, and planning them ahead makes us actually do them.",
          "The plan: every evening, write one hidden good deed you will do tomorrow: arranging your father's shoes, bringing water to someone thirsty, praying for a friend by name.",
          "Tell nobody. The next evening, write: did I do it? How did it feel?"
        ]
      },
      "quote": {
        "ar": "«كُلُّ مَعْرُوفٍ صَدَقَةٌ»",
        "en": "Meaning: Every act of kindness is charity.",
        "ref": "صحيح البخاري 6021",
        "checked": "hadith-api (fawazahmed0)",
        "verify": true
      },
      "source": {
        "ar": "حديث في صحيح البخاري، مع أبحاث أفعال اللطف في علم النفس الإيجابي.",
        "en": "A hadith in Sahih al-Bukhari, with research on acts of kindness from positive psychology."
      }
    }
  ],
  "quiz": [
    {
      "id": "sabiq-q1",
      "readingId": "sabiq-r1",
      "type": "comprehension",
      "q": {
        "ar": "لماذا نظفت مريم حديقة جارتها؟",
        "en": "Why did Maryam clean her neighbour's garden?"
      },
      "options": [
        {
          "ar": "لأن أمها أمرتها",
          "en": "Her mother told her to"
        },
        {
          "ar": "لتأخذ مكافأة",
          "en": "To get a reward"
        },
        {
          "ar": "لأنها رأت الحاجة وبادرت دون طلب",
          "en": "She saw the need and acted without being asked"
        }
      ],
      "correct": 2,
      "why": {
        "ar": "المبادرة قبل الطلب علامة السابق بالخيرات.",
        "en": "Acting before being asked is the mark of Racing to good."
      }
    },
    {
      "id": "sabiq-q2",
      "readingId": "sabiq-r1",
      "type": "comprehension",
      "q": {
        "ar": "ماذا فعلت مريم في الأسبوع التالي؟",
        "en": "What did Maryam do the following week?"
      },
      "options": [
        {
          "ar": "جاءت مع أخيها وعلّمته",
          "en": "Came with her brother and taught him"
        },
        {
          "ar": "أخبرت الجميع بما فعلت",
          "en": "Told everyone what she did"
        },
        {
          "ar": "لم تعد",
          "en": "Did not come back"
        }
      ],
      "correct": 0,
      "why": {
        "ar": "السابق يأخذ غيره معه إلى الخير، وهذه الدرجة الأعلى.",
        "en": "Someone racing to good brings others along to the good; that is the higher step."
      }
    },
    {
      "id": "sabiq-q3",
      "readingId": "sabiq-r2",
      "type": "comprehension",
      "q": {
        "ar": "ماذا تعلّمنا كلمة «بإذن الله» في آية فاطر؟",
        "en": "What does \"by Allah's permission\" teach us in the verse of Fatir?"
      },
      "options": [
        {
          "ar": "أن السبق هداية من الله فلا نتكبر",
          "en": "Racing ahead is guidance from Allah, so we do not boast"
        },
        {
          "ar": "أن نستأذن الناس",
          "en": "That we must ask people's permission"
        },
        {
          "ar": "أن السبق سهل لا يحتاج جهدًا",
          "en": "That racing ahead is easy and needs no effort"
        }
      ],
      "correct": 0,
      "why": {
        "ar": "كل صعود هداية من الله، فالسابق متواضع.",
        "en": "Every climb is guidance from Allah, so someone racing to good stays humble."
      }
    },
    {
      "id": "sabiq-q4",
      "readingId": "sabiq-r2",
      "type": "situation",
      "q": {
        "ar": "رأيت أكواب الضيوف على الطاولة بعد ذهابهم. ماذا يفعل السابق بالخيرات؟",
        "en": "You see the guests' cups on the table after they leave. What does someone racing to good do?"
      },
      "options": [
        {
          "ar": "ينتظر أن يُطلب منه.",
          "en": "Waits to be asked."
        },
        {
          "ar": "يذهب إلى غرفته بسرعة.",
          "en": "Hurries off to their room."
        },
        {
          "ar": "يجمعها ويغسلها من نفسه.",
          "en": "Collects and washes them without being asked."
        }
      ],
      "correct": 2,
      "why": {
        "ar": "المسارعة أن تسبق الكسل إلى الخير.",
        "en": "Hurrying means getting to the good before laziness does."
      }
    },
    {
      "id": "sabiq-q5",
      "readingId": "sabiq-r3",
      "type": "comprehension",
      "q": {
        "ar": "بماذا أمر الله نبيه بعد أن ذكر الأنبياء في سورة الأنعام؟",
        "en": "What did Allah tell His Prophet after naming the prophets in Surat al-An'am?"
      },
      "options": [
        {
          "ar": "أن يبتعد عن طريقهم",
          "en": "To keep away from their way"
        },
        {
          "ar": "أن يقتدي بهداهم",
          "en": "To follow their guidance"
        },
        {
          "ar": "أن ينسى قصصهم",
          "en": "To forget their stories"
        }
      ],
      "correct": 1,
      "why": {
        "ar": "نقتدي بهداهم ونرجو رفقتهم، كما في آية النساء.",
        "en": "We follow their guidance and hope for their company, as in the verse of an-Nisa."
      }
    },
    {
      "id": "sabiq-q6",
      "readingId": "sabiq-r3",
      "type": "situation",
      "q": {
        "ar": "أخوك الصغير ما زال يصرخ كثيرًا. كيف تعينه على الصعود؟",
        "en": "Your little brother still shouts a lot. How do you help him climb?"
      },
      "options": [
        {
          "ar": "أسميه «قردًا» أمام الجميع.",
          "en": "Call him a monkey in front of everyone."
        },
        {
          "ar": "أتجاهله.",
          "en": "Ignore him."
        },
        {
          "ar": "أهدأ أمامه وأعلّمه «قِف، تنفّس، اختر» بلطف.",
          "en": "Stay calm in front of him and gently teach him \"stop, breathe, choose\"."
        }
      ],
      "correct": 2,
      "why": {
        "ar": "السابق بالخيرات يعين غيره على الصعود بالقدوة والكلمة الطيبة.",
        "en": "Someone racing to good helps others climb by example and kind words."
      }
    },
    {
      "id": "sabiq-q7",
      "readingId": "sabiq-r4",
      "type": "situation",
      "q": {
        "ar": "فعلت خيرًا خفيًّا اليوم. ماذا تفعل بعده؟",
        "en": "You did a hidden good deed today. What next?"
      },
      "options": [
        {
          "ar": "أشكر الله وأكتبه في دفتري دون أن أخبر أحدًا.",
          "en": "Thank Allah and note it in my notebook without telling anyone."
        },
        {
          "ar": "أخبر كل أصدقائي.",
          "en": "Tell all my friends."
        },
        {
          "ar": "أنتظر أن يشكرني أحد.",
          "en": "Wait for someone to thank me."
        }
      ],
      "correct": 0,
      "why": {
        "ar": "الخير الخفي لوجه الله، والشكر لله الذي هداك إليه.",
        "en": "Hidden good is for Allah's sake, and the thanks goes to Allah who guided you to it."
      }
    }
  ],
  "tasks": [
    {
      "id": "sabiq-t1",
      "ar": "عمل في البيت قبل أن يُطلب.",
      "en": "Did a household job before being asked."
    },
    {
      "id": "sabiq-t2",
      "ar": "العفو عمن أخطأ والكلام معه بلطف.",
      "en": "Forgave someone who wronged them and spoke to them kindly."
    },
    {
      "id": "sabiq-t3",
      "ar": "مساعدة أخ أو أخت أو صديق على عادة طيبة.",
      "en": "Helped a sibling or friend with a good habit."
    },
    {
      "id": "sabiq-t4",
      "ar": "تطبيق خلق من قصة نبي يومًا كاملًا.",
      "en": "Lived one quality from a prophet's story for a whole day."
    }
  ]
};

/* ───────────── اليد اليمنى: درجات الكمال. كلها مقترحات (proposal:true) لم يحسمها المؤلف.
 * group: ahzab35 = صفات الأحزاب 33:35 العشر، nisa69 = مراتب النساء 4:69 دون الأنبياء (هم القمة لا مرتبة)، waqia = المقربون، الواقعة 56:10-11. ───────────── */
window.AKHLAQ_CONTENT.virtues = [
  {
    "id": "v-muslim",
    "group": "ahzab35",
    "proposal": true,
    "name": {
      "ar": "المسلم",
      "en": "Surrendered"
    },
    "desc": {
      "ar": "يسلّم أمره لله، ويؤدي الفرائض، ويسلم الناس من أذاه.",
      "en": "Gives themself over to Allah, does the obligations, and keeps people safe from harm."
    },
    "ref": "الأحزاب 33:35",
    "verify": true
  },
  {
    "id": "v-mumin",
    "group": "ahzab35",
    "proposal": true,
    "name": {
      "ar": "المؤمن",
      "en": "Believing"
    },
    "desc": {
      "ar": "يصدّق بقلبه، فيطمئن إلى الله في الخوف والفرح.",
      "en": "Believes with the heart, and finds rest in Allah in fear and in joy."
    },
    "ref": "الأحزاب 33:35",
    "verify": true
  },
  {
    "id": "v-qanit",
    "group": "ahzab35",
    "proposal": true,
    "name": {
      "ar": "القانت",
      "en": "Devoted"
    },
    "desc": {
      "ar": "يداوم على الطاعة بخشوع وهدوء، لا مرة ويترك.",
      "en": "Keeps up obedience calmly and humbly, not once and then stops."
    },
    "ref": "الأحزاب 33:35",
    "verify": true
  },
  {
    "id": "v-sadiq",
    "group": "ahzab35",
    "proposal": true,
    "name": {
      "ar": "الصادق",
      "en": "Truthful"
    },
    "desc": {
      "ar": "يقول الحق ولو على نفسه، ويطابق فعله قوله.",
      "en": "Speaks the truth even against themself, and their actions match their words."
    },
    "ref": "الأحزاب 33:35",
    "verify": true
  },
  {
    "id": "v-sabir",
    "group": "ahzab35",
    "proposal": true,
    "name": {
      "ar": "الصابر",
      "en": "Patient"
    },
    "desc": {
      "ar": "يصبر على الطاعة، وعن الغضب والرغبة، وعلى ما يؤلمه.",
      "en": "Is patient in doing good, in holding back anger and craving, and in what hurts."
    },
    "ref": "الأحزاب 33:35",
    "verify": true
  },
  {
    "id": "v-khashi",
    "group": "ahzab35",
    "proposal": true,
    "name": {
      "ar": "الخاشع",
      "en": "Humble-hearted"
    },
    "desc": {
      "ar": "قلبه حاضر في صلاته، متواضع مع الناس.",
      "en": "Their heart is present in prayer, and they are humble with people."
    },
    "ref": "الأحزاب 33:35",
    "verify": true
  },
  {
    "id": "v-mutasaddiq",
    "group": "ahzab35",
    "proposal": true,
    "name": {
      "ar": "المتصدّق",
      "en": "Giving"
    },
    "desc": {
      "ar": "يعطي من ماله ووقته وابتسامته، فكل معروف صدقة.",
      "en": "Gives from their money, time and smile; every kindness is charity."
    },
    "ref": "الأحزاب 33:35",
    "verify": true
  },
  {
    "id": "v-saim",
    "group": "ahzab35",
    "proposal": true,
    "name": {
      "ar": "الصائم",
      "en": "Fasting"
    },
    "desc": {
      "ar": "يملك نفسه عن الطعام والكلام السيئ، فيقوى على الخير.",
      "en": "Holds back from food and bad words, and so grows strong for good."
    },
    "ref": "الأحزاب 33:35",
    "verify": true
  },
  {
    "id": "v-hafiz",
    "group": "ahzab35",
    "proposal": true,
    "name": {
      "ar": "العفيف الحيي",
      "en": "Modest"
    },
    "desc": {
      "ar": "يحفظ نفسه وجسده، ويستحيي من الله ومن الناس. (صياغة الآية «الحافظين فروجهم» قُدّمت للأطفال بلفظ العفة والحياء.)",
      "en": "Guards themself and their body, and has modesty before Allah and people. (The verse's wording is presented to children as modesty and chastity.)"
    },
    "ref": "الأحزاب 33:35",
    "verify": true
  },
  {
    "id": "v-dhakir",
    "group": "ahzab35",
    "proposal": true,
    "name": {
      "ar": "الذاكر الله كثيرًا",
      "en": "Remembering Allah much"
    },
    "desc": {
      "ar": "لسانه وقلبه مع الله في يومه كله، وهو أبعد الناس عن الغفلة.",
      "en": "Their tongue and heart are with Allah all day; the furthest of all from heedlessness."
    },
    "ref": "الأحزاب 33:35",
    "verify": true
  },
  {
    "id": "v-salih",
    "group": "nisa69",
    "proposal": true,
    "name": {
      "ar": "الصالح",
      "en": "Righteous"
    },
    "desc": {
      "ar": "صلح ظاهره وباطنه، فصار خيره ثابتًا.",
      "en": "Sound inside and out, so their goodness has become steady."
    },
    "ref": "النساء 4:69",
    "verify": true
  },
  {
    "id": "v-shahid",
    "group": "nisa69",
    "proposal": true,
    "name": {
      "ar": "الشهيد",
      "en": "Witness"
    },
    "desc": {
      "ar": "يشهد بالحق ويقوم به بين الناس، ومنه معنى ﴿لِتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ﴾ (البقرة 2:143).",
      "en": "Bears witness to the truth and stands for it among people, including the meaning of being witnesses over mankind (al-Baqara 2:143)."
    },
    "ref": "النساء 4:69",
    "verify": true
  },
  {
    "id": "v-siddiq",
    "group": "nisa69",
    "proposal": true,
    "name": {
      "ar": "الصدّيق",
      "en": "Utterly truthful"
    },
    "desc": {
      "ar": "كمُل صدقه في القول والعمل والحال، كما وُصف إبراهيم ومريم عليهما السلام.",
      "en": "Complete truthfulness in word, deed and state, as Ibrahim and Maryam, peace be upon them, were described."
    },
    "ref": "النساء 4:69",
    "verify": true
  },
  {
    "id": "v-muqarrab",
    "group": "waqia",
    "proposal": true,
    "name": {
      "ar": "المقرّب",
      "en": "Brought near"
    },
    "desc": {
      "ar": "من السابقين السابقين، قريب من الله بسبقه إلى الخير.",
      "en": "Among the foremost, near to Allah through racing to good."
    },
    "ref": "الواقعة 56:10-11",
    "verify": true
  }
];

/* ───────────── قراءات الكبار (15+)، الجولة الثالثة، 18 نوفمبر 2026 ───────────── */
(function () {
  var S = window.AKHLAQ_CONTENT.stages;

  S.zombie.readings.push({
    id: 'zombie-r5',
    title: { ar: 'ألم يأنِ؟ الغفلة في زمن الشاشات', en: 'Has the time not come? Heedlessness in the age of screens' },
    minutes: 5,
    ages: '15+',
    body: {
      ar: [
        'الغفلة عند الكبير لا تبدو موتًا. يعمل ويدرس ويضحك، لكن أيامه تمضي بلا وقفة واحدة يسأل فيها: إلى أين أمضي؟',
        'تصف آية البقرة قلوبًا قست بعد أن رأت الآيات ﴿فَهِيَ كَالْحِجَارَةِ أَوْ أَشَدُّ قَسْوَةً﴾ (البقرة 2:74). والقسوة تأتي طبقة فوق طبقة، من إعراض صغير يتكرر.',
        'وتأتي آية الحديد سؤالًا رحيمًا: ﴿أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَنْ تَخْشَعَ قُلُوبُهُمْ لِذِكْرِ اللَّهِ﴾ (الحديد 57:16). سؤال يقرؤه المؤمن فيبدأ من الآن.',
        'ويقول باحثو الانتباه اليوم إن كثيرًا من التطبيقات مصمَّمة لتأخذ انتباهنا أطول وقت ممكن. الغفلة صارت صناعة، واليقظة صارت مقاومة واعية.',
        'خطوات عملية: حدّد أوقاتًا بلا شاشة (بعد الفجر وقبل النوم)، واجعل أول ما تفعله صباحًا ذكرًا لا إشعارًا، واسأل كل مساء: ماذا قرّبني اليوم من الله، وماذا أبعدني؟'
      ],
      en: [
        'In an adult, heedlessness does not look like death. They work, study and laugh, yet the days pass without a single pause to ask: where am I going?',
        'A verse in al-Baqara (2:74) describes hearts that hardened after seeing signs, meaning: they became like stone or even harder. Hardness does not come at once; it builds layer by layer from small turnings-away.',
        'A verse in al-Hadid (57:16) comes as a merciful question, meaning: has the time not come for the believers\' hearts to soften at the remembrance of Allah? A believer reads it and begins now.',
        'Attention researchers today say many apps are designed to hold our attention as long as possible. Heedlessness has become an industry, and wakefulness a conscious resistance.',
        'Practical steps: set screen-free times (after Fajr and before sleep), make your first act in the morning a remembrance rather than a notification, and ask every evening: what brought me closer to Allah today, and what took me further away?'
      ]
    },
    quote: {
      ar: '﴿أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَنْ تَخْشَعَ قُلُوبُهُمْ لِذِكْرِ اللَّهِ﴾',
      en: 'Meaning (not a translation): Has the time not come for those who believe that their hearts humble themselves at the remembrance of Allah?',
      ref: 'الحديد 57:16', checked: 'tanzil quran-simple, with diacritics (api.alquran.cloud)',
      verify: true
    },
    source: { ar: 'القرآن الكريم، البقرة 2:74 والحديد 57:16، مع ملاحظات من أبحاث الانتباه المعاصرة.', en: 'The Quran, al-Baqara 2:74 and al-Hadid 57:16, with notes from contemporary attention research.' }
  });
  S.zombie.quiz.push({
    id: 'zombie-q8', readingId: 'zombie-r5', type: 'situation',
    q: { ar: 'تستيقظ وأول ما تمد يدك إليه الهاتف. ما الخطوة الأقرب لليقظة؟', en: 'You wake up and your hand reaches for the phone first. Which step is closest to wakefulness?' },
    options: [ { ar: 'أقرأ الإشعارات كلها ثم أفكر في يومي.', en: 'Read all notifications, then think about my day.' }, { ar: 'أبعد الهاتف عن السرير، وأبدأ صباحي بذكر.', en: 'Keep the phone away from the bed and start the morning with remembrance.' }, { ar: 'أحذف كل التطبيقات مرة واحدة ثم أعيدها غدًا.', en: 'Delete every app at once and reinstall tomorrow.' } ],
    correct: 1,
    why: { ar: 'إبعاد الهاتف والبدء بذكر خطوة صغيرة تقدر عليها كل صباح، فتبقى معك.', en: 'Moving the phone away and starting with dhikr is a small step you can manage every morning, so it lasts.' }
  });

  S.pig.readings.push({
    id: 'pig-r5',
    title: { ar: 'النفس الأمّارة وسباق الرغبات', en: 'The commanding self and the race of wants' },
    minutes: 5,
    ages: '15+',
    body: {
      ar: [
        'قال يوسف عليه السلام: ﴿إِنَّ النَّفْسَ لَأَمَّارَةٌ بِالسُّوءِ إِلَّا مَا رَحِمَ رَبِّي﴾ (يوسف 12:53). قالها نبيٌّ صدّيق، فلا أحد فوق الحاجة إلى رحمة الله في مجاهدة نفسه.',
        'سلوك الخنزير عند الكبار لا يقف عند الطعام: شراء ما لا نحتاج، ومقارنة أنفسنا بمن يملك أكثر، وتقديم راحتنا على حقوق من حولنا.',
        'يسمي علماء النفس ظاهرة «التكيّف مع المتعة»: كل رغبة نحققها تعود بنا بعد قليل إلى النقطة نفسها، فنطلب أكثر. هذا ما يجعل الشهوة سباقًا بلا خط نهاية.',
        'والعلاج في القرآن أن تُرتَّب الرغبة: ﴿وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ ۝ فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ﴾ (النازعات 79:40-41). النهي هنا قيادة: أنت الذي تمسك الزمام.',
        'تمرين: قبل أي شراء غير ضروري انتظر يومًا كاملًا. وكل أسبوع أعطِ شيئًا تحبه. ولاحظ كيف يخف ضجيج الرغبة كلما مارست العطاء.'
      ],
      en: [
        'Yusuf, peace be upon him, said (12:53), meaning: the self keeps urging towards evil, except where my Lord has mercy. A truthful prophet said it, so no one is beyond needing Allah\'s mercy in struggling with the self.',
        'In adults, pig behaviour does not stop at food: buying what we do not need, comparing ourselves with those who have more, and putting our comfort ahead of the rights of those around us.',
        'Psychologists call it "hedonic adaptation": each want we satisfy soon returns us to the same point, so we ask for more. That turns desire into a race with no finish line.',
        'The Quranic remedy is to put desire in order (an-Nazi\'at 79:40-41), meaning: as for the one who feared standing before his Lord and held the self back from its whims, Paradise is the refuge. Holding back here is leadership: you hold the reins.',
        'Exercise: before any unnecessary purchase, wait a full day. Each week, give away something you love. Notice how the noise of wanting quietens as you practise giving.'
      ]
    },
    quote: {
      ar: '﴿وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ ۝ فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ﴾',
      en: 'Meaning (not a translation): As for whoever feared standing before his Lord and held the self back from its whims, Paradise will be the refuge.',
      ref: 'النازعات 79:40-41', checked: 'tanzil quran-simple, with diacritics (api.alquran.cloud)',
      verify: true
    },
    source: { ar: 'القرآن الكريم، يوسف 12:53 والنازعات 79:40-41، مع مفهوم التكيّف مع المتعة في علم النفس.', en: 'The Quran, Yusuf 12:53 and an-Nazi\'at 79:40-41, with the psychological concept of hedonic adaptation.' }
  });

  S.monkey.readings.push({
    id: 'monkey-r5',
    title: { ar: 'الكاظمين الغيظ: ثلاث درجات للغضب', en: 'Those who restrain anger: three steps with anger' },
    minutes: 5,
    ages: '15+',
    body: {
      ar: [
        'تذكر آية آل عمران من صفات المتقين: ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾ (آل عمران 3:134). ثلاث خطوات متصاعدة: أن تكظم، ثم أن تعفو، ثم أن تحسن.',
        'الكظم أن تمسك الغضب فلا يخرج يدًا ولا لسانًا. وهذا هو الخروج من سلوك القرد.',
        'والعفو أن تُسقط حقك في قلبك، فلا تحمل الغضب معك أيامًا. وهذا هو السلوك الإنساني.',
        'والإحسان أن ترد الإساءة بخير. وهذا باب السابقين.',
        'ويضيف علم النفس أداة نافعة اسمها «إعادة التقييم»: أن تسأل حين تغضب: هل هناك تفسير آخر لما حدث؟ هل كان متعبًا؟ هل أسأت الفهم؟ إعادة التفسير تطفئ كثيرًا من الغضب قبل أن يشتعل.',
        'وتذكّر أن الغضب نفسه ليس عيبًا، فهو شعور طبيعي. العيب أن يقودك. والمطلوب أن تمسك أنت المقود.'
      ],
      en: [
        'A verse in Al Imran (3:134) lists among the qualities of the God-conscious, meaning: those who restrain anger and pardon people, and Allah loves those who do good. Three rising steps: restrain, then pardon, then do good.',
        'Restraining means holding anger so it comes out neither through the hand nor the tongue. That is leaving monkey behaviour.',
        'Pardoning means letting go of your claim in your heart, so you do not carry the anger for days. That is human behaviour.',
        'Doing good means answering harm with kindness. That is the door to Racing to good.',
        'Psychology adds a useful tool called "reappraisal": when angry, ask whether there is another explanation. Were they tired? Did I misunderstand? Reinterpreting puts out much anger before it flares.',
        'Anger is a natural feeling, and everyone has it. The trouble starts when it drives. Your task is to hold the wheel.'
      ]
    },
    quote: {
      ar: '﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾',
      en: 'Meaning (not a translation): Those who restrain anger and pardon people; and Allah loves those who do good.',
      ref: 'آل عمران 3:134', checked: 'tanzil quran-simple, with diacritics (api.alquran.cloud)',
      verify: true
    },
    source: { ar: 'القرآن الكريم، آل عمران 3:134، مع أداة إعادة التقييم في علم النفس المعرفي.', en: 'The Quran, Al Imran 3:134, with the reappraisal tool from cognitive psychology.' }
  });

  S.human.readings.push({
    id: 'human-r5',
    title: { ar: 'النفس اللوّامة: دقيقة المحاسبة', en: 'The self-reproaching soul: the minute of review' },
    minutes: 4,
    ages: '15+',
    body: {
      ar: [
        'أقسم الله في سورة القيامة بالنفس اللوّامة: ﴿وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ﴾ (القيامة 75:2). وهي النفس التي تراجع صاحبها إذا قصّر. فإذا سمعت هذا الصوت في داخلك، فقلبك حي.',
        'الفرق بين اللوم النافع والضار دقيق. اللوم الضار يقول: «أنا سيئ ولن أتغير». واللوم النافع يقول: «فعلت هذا، وسأصلحه، وغدًا أفعل أحسن».',
        'وفي الحديث: «وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن» (سنن الترمذي). فإذا أخطأت وحزنت، فاتبع خطأك بحسنة.',
        'ويؤيد علم النفس هذا: من يحاسب نفسه برفق ويخطط لما بعد الخطأ يتغير أكثر ممن يجلد نفسه.',
        'التمرين: كل مساء دقيقة واحدة، ثلاثة أسئلة: ما الذي أحسنت فيه اليوم فأحمد الله؟ ما الذي قصّرت فيه؟ ما الحسنة التي أُتبعه بها غدًا؟'
      ],
      en: [
        'In Surat al-Qiyama (75:2) Allah swears by the self-reproaching soul: the self that holds its owner to account when they fall short. If you hear that voice inside you, your heart is alive.',
        'The line between helpful and harmful self-blame is fine. Harmful blame says: "I am bad and I will never change." Helpful blame says: "I did this, I will fix it, and tomorrow I will do better."',
        'A hadith (Sunan al-Tirmidhi) means: follow a bad deed with a good one and it will erase it, and treat people with good character. So when you get something wrong and feel sorry, follow it with a good deed.',
        'Psychology supports this: people who review themselves kindly and plan what to do after a mistake change more than those who punish themselves.',
        'The exercise: one minute each evening, three questions. What did I do well today, so I can praise Allah? Where did I fall short? What good deed will I follow it with tomorrow?'
      ]
    },
    quote: {
      ar: '«وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ»',
      en: 'Meaning: Follow a bad deed with a good one and it will wipe it out, and treat people with good character.',
      ref: 'سنن الترمذي 1987', checked: 'hadith-api (fawazahmed0)',
      verify: true
    },
    source: { ar: 'القرآن الكريم، القيامة 75:2، وحديث في سنن الترمذي، مع أبحاث التعاطف مع الذات في علم النفس.', en: 'The Quran, al-Qiyama 75:2, a hadith in Sunan al-Tirmidhi, and research on self-compassion in psychology.' }
  });
  S.human.quiz.push({
    id: 'human-q8', readingId: 'human-r5', type: 'situation',
    q: { ar: 'صرخت اليوم في وجه أخيك وندمت. أي لوم هو لوم النفس اللوامة النافع؟', en: 'You shouted at your brother today and regret it. Which is the helpful self-reproach?' },
    options: [ { ar: '«أنا سيئ ولن أتغير أبدًا».', en: '"I am bad and I will never change."' }, { ar: '«لا يهم، هو استحق ذلك».', en: '"It doesn\'t matter, he deserved it."' }, { ar: '«أخطأت، سأعتذر له غدًا وأفعل له خيرًا».', en: '"I was wrong; I\'ll apologise tomorrow and do something kind for him."' } ],
    correct: 2,
    why: { ar: 'أنت لست سيئًا، بل أخطأت. واللوم النافع يعترف بالخطأ ويخطط لحسنة تمحوه.', en: 'You are not bad; you made a mistake. Helpful self-reproach admits it and plans a good deed to wipe it out.' }
  });

  S.sabiq.readings.push({
    id: 'sabiq-r5',
    title: { ar: 'والذين جاهدوا فينا: طريق النفس المطمئنة', en: 'Those who strive for Us: the road to the soul at peace' },
    minutes: 5,
    ages: '15+',
    body: {
      ar: [
        'يعد الله المجاهدين في سبيله بالهداية: ﴿وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا﴾ (العنكبوت 29:69). المجاهدة هنا جهد النفس اليومي: أن تقوم إلى الخير وهي تريد الراحة.',
        'والسبل جمع: كلما سلكت طريقًا من الخير فُتح لك طريق آخر. هذا هو الصعود الذي يقوم عليه التطبيق: الهداية تُتّبع فيزيدها الله.',
        'وآخر المطاف في القرآن نداء رقيق: ﴿يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ۝ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَرْضِيَّةً﴾ (الفجر 89:27-28). النفس التي كانت أمّارة ثم لوّامة صارت مطمئنة.',
        'وخطر هذه المرحلة العُجب: أن يرى السابق نفسه فوق غيره. لذلك جاء في آية فاطر «بإذن الله»: السبق هداية من الله يشكره عليها صاحبها. ومن علامات السابق أنه يأخذ بيد غيره.',
        'خطوة عملية: اختر صفة من صفات الأحزاب 35 العشر، واعمل عليها أربعين يومًا، ثم انتقل إلى التي تليها.'
      ],
      en: [
        'Allah promises guidance to those who strive in His way (al-\'Ankabut 29:69), meaning: those who strive for Us, We will surely guide them to Our paths. Striving here is the daily effort of the self: getting up to do good while it wants rest.',
        'The word "paths" is plural: each path of good you walk opens another. That is the climb the app is built on: guidance followed is guidance increased by Allah.',
        'At the end of the road the Quran calls tenderly (al-Fajr 89:27-28), meaning: O soul at peace, return to your Lord, well pleased and pleasing. The self that once kept urging to evil, then reproached itself, has come to rest.',
        'The danger of this stage is self-admiration: seeing yourself above others. That is why the verse of Fatir says "by Allah\'s permission": racing ahead is guidance to be thankful for, not a privilege to boast of. One sign of racing to good is taking others by the hand.',
        'A practical step: choose one of the ten qualities of al-Ahzab 33:35, work on it for forty days, then move on to the next.'
      ]
    },
    quote: {
      ar: '﴿وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا﴾',
      en: 'Meaning (not a translation): Those who strive for Us, We will surely guide them to Our paths.',
      ref: 'العنكبوت 29:69', checked: 'tanzil quran-simple, with diacritics (api.alquran.cloud)',
      verify: true
    },
    source: { ar: 'القرآن الكريم، العنكبوت 29:69 والفجر 89:27-28 وفاطر 35:32.', en: 'The Quran, al-\'Ankabut 29:69, al-Fajr 89:27-28 and Fatir 35:32.' }
  });
  S.sabiq.quiz.push({
    id: 'sabiq-q8', readingId: 'sabiq-r5', type: 'comprehension',
    q: { ar: 'ما الخطر الذي تحذّر منه قراءة «والذين جاهدوا فينا» في مرحلة السابقين؟', en: 'What danger does the reading "those who strive for Us" warn about at the Racing to good stage?' },
    options: [ { ar: 'العُجب ورؤية النفس فوق الناس', en: 'Self-admiration and seeing yourself above people' }, { ar: 'كثرة القراءة', en: 'Reading too much' }, { ar: 'التعب من الخير', en: 'Getting tired of doing good' } ],
    correct: 0,
    why: { ar: 'السبق هداية من الله «بإذنه»، فالسابق يشكر ويتواضع ويعين غيره.', en: 'Racing ahead is guidance "by Allah\'s permission", so someone racing to good gives thanks, stays humble and helps others.' }
  });
})();

/* ───────────── الجولة الرابعة، 18 نوفمبر 2026: أسئلة التقييم الذاتي، ودليل الوالد، وشاشات الترحيب ─────────────
 * selfcheck: كل الأسئلة مصوغة إيجابيًا، فالجواب «غالبًا» (often) هو الأحسن دائمًا، و«نادرًا» (rarely) هو موضع الصعود.
 * All self-check questions are phrased positively: "often" is always the better answer, "rarely" marks room to climb.
 */
(function () {
  var C = window.AKHLAQ_CONTENT, S = C.stages;

  S.zombie.selfcheck = [
    { id: 'zombie-s1', q: { ar: 'هل أذكر الله في يومي، ولو بكلمة واحدة؟', en: 'Do I remember Allah during my day, even with one word?' } },
    { id: 'zombie-s2', q: { ar: 'هل أتوقف لأسأل نفسي: ماذا فعلت اليوم؟', en: 'Do I stop to ask myself: what did I do today?' } },
    { id: 'zombie-s3', q: { ar: 'هل أطفئ الشاشة حين ينتهي وقتها؟', en: 'Do I turn the screen off when its time is up?' } },
    { id: 'zombie-s4', q: { ar: 'هل ألاحظ النعم من حولي وأشكر عليها؟', en: 'Do I notice the blessings around me and give thanks?' } },
    { id: 'zombie-s5', q: { ar: 'هل أسمع النصيحة وأفكر فيها؟', en: 'Do I listen to advice and think about it?' } }
  ];
  S.zombie.parent = {
    ar: [
      'سمات الخنصر هي الغفلة: أن يمضي الوقت والقلب غائب. وهي أكثر ما يصيبنا جميعًا مع الشاشات، فابدأ بنفسك قدوةً قبل أن تنبّه طفلك.',
      'أشِر إلى الخنصر بهدوء وابتسامة، وصِف السلوك لا الطفل، ثم افتح له باب الصعود فورًا.',
      'قل مثلًا: «أرى أن الشاشة أخذتك ساعة، وهذه من سمات الخنصر. تعال نتوقف دقيقة ونعدّ ثلاث نعم معًا».',
      'وتجنّب أن تقول: «أنت زومبي لا تفهم شيئًا». قل بدلها: «ناديتك ثلاث مرات ولم ترفع عينيك عن الشاشة، وهذه من سمات الخنصر». يسمعها خبرًا عن لحظة مضت، يقدر أن يغيّرها في المرة القادمة.'
    ],
    en: [
      'Little-finger traits are heedlessness: time passing while the heart is absent. Screens bring it to all of us, so start with yourself as the example before pointing it out to your child.',
      'Point to the little finger calmly and with a smile, describe the behaviour rather than the child, then open the way up straight away.',
      'Say, for example: "I can see the screen has taken an hour from you; that is a little-finger trait. Come, let\'s stop for a minute and count three blessings together."',
      'Avoid saying: "You are a zombie who understands nothing." Say instead: “I called you three times and you didn’t look up from the screen; that’s a little-finger trait.” They hear it as news about a moment that has passed, something they can change next time.'
    ]
  };

  S.pig.selfcheck = [
    { id: 'pig-s1', q: { ar: 'هل أنتظر حتى يأخذ الجميع قبل أن آخذ؟', en: 'Do I wait until everyone has some before I take?' } },
    { id: 'pig-s2', q: { ar: 'هل ألاحظ حين يكون أحد في البيت متعبًا؟', en: 'Do I notice when someone at home is tired?' } },
    { id: 'pig-s3', q: { ar: 'هل أشارك ما أحب مع غيري؟', en: 'Do I share what I love with others?' } },
    { id: 'pig-s4', q: { ar: 'هل أصبر إذا تأخر ما أريده؟', en: 'Am I patient when what I want is delayed?' } },
    { id: 'pig-s5', q: { ar: 'هل أسأل غيري: ماذا تريد أنت؟', en: 'Do I ask others: what would you like?' } }
  ];
  S.pig.parent = {
    ar: [
      'سمات البنصر هي التمحور حول الرغبة: «أنا أريد» قبل أن يرى الطفل غيره. والطفل في سنواته الأولى يرى نفسه أولًا بطبيعته، فنعلّمه بصبر أن يرى من حوله.',
      'أشِر إلى البنصر حين ترى السلوك، ثم ساعده أن ينظر: إلى وجه أخيه، أو تعب جدته، أو نصيب غيره.',
      'قل مثلًا: «أخذ أكبر قطعة قبل الجميع من سمات البنصر. انظر حولك: هل أخذ أخوك؟ ماذا تفعل الآن؟».',
      'وتجنّب أن تقول: «أنت خنزير لا تفكر إلا في بطنك». جرّب أن تقول: «أخذتَ القطعة الكبيرة قبل أن يجلس أحد». ستراه أحيانًا يعيدها دون أن تطلب.',
      'وامدحه بالإصبع الأعلى حين يحسن: «هذا الذي فعلته الآن من سمات السبابة».'
    ],
    en: [
      'Ring-finger traits are being centred on wanting: "I want" before the child sees anyone else. Young children naturally see themselves first, so we patiently teach them to see the people around them.',
      'Point to the ring finger when you see the behaviour, then help them look: at a sibling\'s face, a grandmother\'s tiredness, someone else\'s share.',
      'Say, for example: "Taking the biggest piece before everyone else is a ring-finger trait. Look around: has your brother had some? What will you do now?"',
      'Avoid saying: "You are a pig who only thinks about your stomach." Try saying instead: “You took the big piece before anyone sat down.” Sometimes you’ll see them put it back without being asked.',
      'Praise them with the higher finger when they do well: "What you just did is an index-finger trait."'
    ]
  };

  S.monkey.selfcheck = [
    { id: 'monkey-s1', q: { ar: 'هل أتوقف فورًا حين يقال لي «توقف»؟', en: 'Do I stop at once when someone says "stop"?' } },
    { id: 'monkey-s2', q: { ar: 'هل أتكلم بصوت هادئ حين أختلف مع أحد؟', en: 'Do I speak calmly when I disagree with someone?' } },
    { id: 'monkey-s3', q: { ar: 'هل أستمع حتى ينتهي المتكلم؟', en: 'Do I listen until the speaker has finished?' } },
    { id: 'monkey-s4', q: { ar: 'هل أهدئ نفسي حين أغضب قبل أن أتصرف؟', en: 'Do I calm myself when angry before I act?' } },
    { id: 'monkey-s5', q: { ar: 'هل أكمل ما أبدأه؟', en: 'Do I finish what I start?' } }
  ];
  S.monkey.parent = {
    ar: [
      'سمات الوسطى هي الاندفاع: الصوت العالي، والحركة العنيفة، وعدم التوقف. وهي أشد ما تكون حين يكون الطفل متعبًا أو جائعًا أو منفعلًا، فاختر لحظة الهدوء للتعليم، ولحظة الانفعال للتوقيف فقط.',
      'في لحظة الانفعال: صوتك المنخفض أقوى من صوته العالي. أشِر إلى الوسطى بلا كلام كثير، وقل كلمة واحدة: «توقف»، ثم اجلس معه.',
      'قل مثلًا بعد أن يهدأ: «رفع الصوت قبل قليل كان من سمات الوسطى. ما الذي أغضبك؟ وماذا نفعل في المرة القادمة: قِف، تنفّس، اختر؟».',
      'وتجنّب أن تقول وأنت غاضب: «أنت قرد لا تسمع أبدًا». حين نرفع أصواتنا عليه نعلّمه ما نريد أن يتركه. وكلمة «أبدًا» تقول له إن المحاولة لا فائدة منها.',
      'وحين يتوقف من نفسه، احتفل بذلك: «توقفت فورًا، هذه درجة جديدة».'
    ],
    en: [
      'Middle-finger traits are impulsiveness: a loud voice, rough movement, not stopping. They are strongest when a child is tired, hungry or upset, so teach in calm moments and use the heated moment only to pause.',
      'In the heated moment your low voice is stronger than their loud one. Point to the middle finger without many words, say one word, "stop", then sit with them.',
      'Once they are calm, say, for example: "Raising your voice just now was a middle-finger trait. What made you angry? And what do we do next time: stop, breathe, choose?"',
      'Avoid saying, while angry yourself: "You are a monkey who never listens." When we raise our voice at them, we teach the very thing we want them to drop. And the word "never" closes the way up.',
      'When they stop by themselves, celebrate it: "You stopped straight away; that is a new step."'
    ]
  };

  S.human.selfcheck = [
    { id: 'human-s1', q: { ar: 'هل أعتذر حين أخطئ؟', en: 'Do I apologise when I am wrong?' } },
    { id: 'human-s2', q: { ar: 'هل أفي بوعودي الصغيرة؟', en: 'Do I keep my small promises?' } },
    { id: 'human-s3', q: { ar: 'هل يمر يومي دون أن أؤذي أحدًا بيدي أو لساني؟', en: 'Does my day pass without hurting anyone by hand or tongue?' } },
    { id: 'human-s4', q: { ar: 'هل أقوم بواجباتي دون أن أُذكَّر؟', en: 'Do I do my duties without being reminded?' } },
    { id: 'human-s5', q: { ar: 'هل أحافظ على عادة خير صغيرة كل يوم؟', en: 'Do I keep one small good habit every day?' } }
  ];
  S.human.parent = {
    ar: [
      'السبابة هي الإنسان المعتدل: يكفّ أذاه، ويؤدي ما عليه، ويعتذر إذا أخطأ. وهي الإصبع التي يكثر أن تشير إليها مدحًا، فاجعل الإشارة إليها فرحًا يتكرر.',
      'حين ترى سلوكًا إنسانيًا، أشِر إلى السبابة وسمِّ الفعل بالتحديد، فالمديح المحدد يثبّت السلوك أكثر من المديح العام.',
      'قل مثلًا: «اعترفت بأنك كسرت الكوب واعتذرت، وهذه من سمات السبابة. أنا فخور بصدقك».',
      'وتجنّب أن تقول: «أخيرًا صرت إنسانًا!». فهي توحي بأنه لم يكن إنسانًا قبل ذلك. وهو إنسان كريم من يوم وُلد. امدح الفعل نفسه: «انتظرت دورك في الأرجوحة، وهذه من سمات السبابة».'
    ],
    en: [
      'The index finger is the balanced human: keeps harm away, does what is due, apologises when wrong. It is the finger you will often point to in praise, so make pointing to it a joy that repeats.',
      'When you see human behaviour, point to the index finger and name the exact action; specific praise fixes a behaviour better than general praise.',
      'Say, for example: "You owned up to breaking the cup and apologised; that is an index-finger trait. I\'m proud of your honesty."',
      'Avoid saying: "Finally you\'ve become a human!" It suggests they were not human before. They have been an honoured human being since the day they were born. Praise the act itself: “You waited your turn on the swing; that’s an index-finger trait.”'
    ]
  };

  S.sabiq.selfcheck = [
    { id: 'sabiq-s1', q: { ar: 'هل أفعل الخير قبل أن يُطلب مني؟', en: 'Do I do good before being asked?' } },
    { id: 'sabiq-s2', q: { ar: 'هل أفعل خيرًا خفيًّا لا يعرفه إلا الله؟', en: 'Do I do hidden good that only Allah knows?' } },
    { id: 'sabiq-s3', q: { ar: 'هل أعفو عمن أخطأ في حقي؟', en: 'Do I forgive those who wrong me?' } },
    { id: 'sabiq-s4', q: { ar: 'هل أساعد غيري على أن يتحسن بلطف؟', en: 'Do I gently help others improve?' } },
    { id: 'sabiq-s5', q: { ar: 'هل أتذكر أن الخير الذي أفعله هداية من الله فأشكره؟', en: 'Do I remember that the good I do is guidance from Allah, and thank Him?' } }
  ];
  S.sabiq.parent = {
    ar: [
      'الإبهام هو السابق بالخيرات: يبادر قبل أن يُطلب منه، ويأخذ بيد غيره. وخطر هذه المرحلة أن يتعلم الطفل فعل الخير ليُمدح، فاجعل المدح هنا قليلًا هادئًا، والشكر لله.',
      'أشِر إلى الإبهام حين يبادر، واربط الفعل بقدوة من الأنبياء عليهم السلام لا بالمقارنة مع إخوته.',
      'قل مثلًا: «رتبت الأكواب قبل أن أطلب، وهذه من سمات الإبهام. الحمد لله الذي هداك إليها، وهكذا كان النبي صلى الله عليه وآله وسلم يخدم أهله».',
      'وتجنّب أن تقول: «أنت أحسن من أخيك، هو ما زال في الوسطى». بعدها يتكبّر واحد قليلًا ويحزن الآخر. اطلب من الأول أن يعين أخاه في مهمته، فهذا من سمات الإبهام.'
    ],
    en: [
      'The thumb is Racing to good: acting before being asked and taking others by the hand. The danger here is a child learning to do good in order to be praised, so keep praise brief and quiet at this stage, and give the thanks to Allah.',
      'Point to the thumb when they take the initiative, and link the action to a prophet\'s example, peace be upon them, rather than comparing them with siblings.',
      'Say, for example: "You cleared the cups before I asked; that is a thumb trait. Praise be to Allah who guided you to it. The Prophet used to help his family like that too."',
      'Avoid saying: "You\'re better than your brother; he\'s still on the middle finger." One child walks away a little proud and the other sad. Ask the first to help their brother with his task instead; that is a thumb trait.'
    ]
  };

  C.onboarding = [
    {
      title: { ar: 'يدك سُلّم', en: 'Your hand is a ladder' },
      body: {
        ar: 'هذه يدك، وهي سُلّم تصعد فيه من الخنصر إلى الإبهام. كل إصبع مرحلة، وكل عُقلة سمة من سماتها.',
        en: 'This is your hand, a ladder you climb from the little finger to the thumb. Each finger is a stage, and each joint one of its traits.'
      }
    },
    {
      title: { ar: 'كل واحد يستطيع أن يصعد', en: 'Everyone can climb' },
      body: {
        ar: 'كل واحد منا يستطيع أن يصعد خطوة بعد خطوة، بالقراءة والاختبار والمهام اليومية.',
        en: 'Every one of us can climb, one step at a time, through reading, quizzes and daily tasks.'
      }
    }
  ];
})();

/* ───────────── الجولة الخامسة، 18 نوفمبر 2026: قراءات الصغار (4-8) ومهام اليوم ─────────────
 * قراءات مصورة قصيرة تُقرأ للطفل بصوت عالٍ، تنتهي بسؤال واحد يسأله الوالد (حقل ask).
 * Short picture-book readings to read aloud, each ending with one question for the parent to ask (field "ask").
 * daily: مهام يوم واحد صغيرة يؤكدها الوالد.
 */
(function () {
  var C = window.AKHLAQ_CONTENT, S = C.stages;
  var srcStory = { ar: 'قصة مصورة مؤلفة للصغار، أبطالها خياليون.', en: 'An original picture-book story for little ones, with fictional characters.' };

  /* الخنصر */
  S.zombie.readings.push({
    id: 'zombie-r6', title: { ar: 'عينا آدم تستيقظان', en: 'Adam\'s eyes wake up' }, minutes: 2, ages: '4-8',
    body: {
      ar: [
        'كان آدم يمشي إلى الحديقة وعيناه على الأرض.',
        'لم يرَ الطائر الأصفر على الشجرة.',
        'ولم يرَ جدته تلوّح له من النافذة.',
        'قالت أمه: «يا آدم، ارفع عينيك وانظر!».',
        'رفع آدم عينيه، فرأى الطائر، ورأى جدته، ورأى السماء الزرقاء.',
        'قال آدم: «سبحان الله! كل هذا كان هنا».',
        'ولوّح لجدته وهو يضحك.'
      ],
      en: [
        'Adam was walking to the park with his eyes on the ground.',
        'He did not see the yellow bird in the tree.',
        'He did not see his grandmother waving from the window.',
        'His mother said: "Adam, lift your eyes and look!"',
        'Adam looked up. He saw the bird, he saw his grandmother, he saw the blue sky.',
        'Adam said: "Subhanallah! All of this was here."',
        'And he waved to his grandmother, laughing.'
      ]
    },
    ask: { ar: 'ما الشيء الجميل الذي رأيته اليوم ولم تكن تنتبه له؟', en: 'What lovely thing did you see today that you had not noticed before?' },
    quote: null, source: srcStory
  });
  S.zombie.quiz.push(
    { id: 'zombie-q9', readingId: 'zombie-r6', type: 'situation',
      q: { ar: 'تمشي إلى المدرسة، ويلوّح لك جارك. ماذا تفعل؟', en: 'You are walking to school and your neighbour waves at you. What do you do?' },
      options: [ { ar: 'أبقي عيني على الأرض.', en: 'Keep my eyes on the ground.' }, { ar: 'أرفع عيني وألوّح له وأبتسم.', en: 'Look up, wave back and smile.' }, { ar: 'أركض بسرعة.', en: 'Run off quickly.' } ],
      correct: 1,
      why: { ar: 'العين اليقظة ترى الناس وتفرح بهم، وهكذا يستيقظ القلب.', en: 'Wakeful eyes see people and are glad of them; that is how the heart wakes up.' } },
    { id: 'zombie-q10', readingId: 'zombie-r6', type: 'situation',
      q: { ar: 'ترى السماء ملوّنة وقت المغرب. ماذا تقول؟', en: 'You see the sky full of colour at sunset. What do you say?' },
      options: [ { ar: 'لا أقول شيئًا.', en: 'I say nothing.' }, { ar: 'أقول: هذا ممل.', en: 'I say: this is boring.' }, { ar: 'أقول: سبحان الله، ما أجملها!', en: 'I say: Subhanallah, how beautiful!' } ],
      correct: 2,
      why: { ar: 'حين نرى الجمال ونذكر الله، يصير قلبنا حيًّا فرحًا.', en: 'When we see beauty and remember Allah, our heart comes alive with joy.' } }
  );

  /* البنصر */
  S.pig.readings.push({
    id: 'pig-r6', title: { ar: 'تفاحتان وصديق', en: 'Two apples and a friend' }, minutes: 2, ages: '4-8',
    body: {
      ar: [
        'كان مع ليلى تفاحتان حمراوان.',
        'جلست بجانبها صديقتها ريم، وليس معها شيء.',
        'قالت ليلى في نفسها: «أحب التفاح كثيرًا».',
        'ثم نظرت إلى وجه ريم، فرأتها جائعة.',
        'أعطت ليلى ريمَ تفاحة وقالت: «تفضلي».',
        'أكلت الصديقتان معًا وضحكتا.',
        'قالت ليلى: «طعم التفاحة مع صديقتي أحلى».'
      ],
      en: [
        'Layla had two red apples.',
        'Her friend Reem sat beside her with nothing at all.',
        'Layla thought: "I love apples so much."',
        'Then she looked at Reem\'s face and saw she was hungry.',
        'Layla gave Reem an apple and said: "Here you are."',
        'The two friends ate together and laughed.',
        'Layla said: "An apple tastes sweeter with my friend."'
      ]
    },
    ask: { ar: 'ما الشيء الذي تحب أن تشاركه مع صديقك؟', en: 'What would you like to share with a friend?' },
    quote: null, source: srcStory
  });
  S.pig.quiz.push(
    { id: 'pig-q9', readingId: 'pig-r6', type: 'situation',
      q: { ar: 'معك كيس حلوى، وأخوك ينظر إليك. ماذا تفعل؟', en: 'You have a bag of sweets and your brother is looking at you. What do you do?' },
      options: [ { ar: 'أعطيه منها.', en: 'Give him some.' }, { ar: 'أخفي الكيس.', en: 'Hide the bag.' }, { ar: 'آكلها كلها بسرعة.', en: 'Eat them all quickly.' } ],
      correct: 0,
      why: { ar: 'العطاء يفرح أخاك ويفرح قلبك أيضًا.', en: 'Giving makes your brother happy, and your heart too.' } },
    { id: 'pig-q10', readingId: 'pig-r6', type: 'situation',
      q: { ar: 'أمك تحمل صحونًا كثيرة إلى المطبخ. ماذا تفعل؟', en: 'Your mother is carrying lots of plates to the kitchen. What do you do?' },
      options: [ { ar: 'أطلب منها عصيرًا.', en: 'Ask her for juice.' }, { ar: 'أحمل صحنًا معها.', en: 'Carry a plate with her.' }, { ar: 'أبقى أشاهد التلفاز.', en: 'Keep watching TV.' } ],
      correct: 1,
      why: { ar: 'حين نرى تعب من نحب ونساعده، نصعد إلى السبابة.', en: 'When we see someone we love working hard and help them, we climb to the index finger.' } }
  );

  /* الوسطى */
  S.monkey.readings.push({
    id: 'monkey-r6', title: { ar: 'عمر والصوت الصغير', en: 'Omar and the small voice' }, minutes: 2, ages: '4-8',
    body: {
      ar: [
        'أخذت أخت عمر قلمه الأزرق.',
        'شعر عمر بالغضب يكبر في صدره، مثل بالون.',
        'أراد أن يصرخ بأعلى صوته.',
        'لكنه وضع يده على صدره، وتنفّس ببطء: واحد، اثنان، ثلاثة، أربعة.',
        'صغر البالون قليلًا.',
        'قال عمر بصوت صغير هادئ: «أعطيني قلمي من فضلك».',
        'أعطته أخته القلم، وقالت: «آسفة».'
      ],
      en: [
        'Omar\'s sister took his blue pencil.',
        'Omar felt anger growing in his chest like a balloon.',
        'He wanted to shout as loud as he could.',
        'But he put his hand on his chest and breathed slowly: one, two, three, four.',
        'The balloon got a little smaller.',
        'Omar said in a small, calm voice: "Please give me my pencil."',
        'His sister gave it back and said: "Sorry."'
      ]
    },
    ask: { ar: 'ماذا تفعل حين تشعر أن بالون الغضب يكبر في صدرك؟', en: 'What do you do when you feel the anger balloon growing in your chest?' },
    quote: null, source: srcStory
  });
  S.monkey.quiz.push(
    { id: 'monkey-q9', readingId: 'monkey-r6', type: 'situation',
      q: { ar: 'أحد الأطفال سبقك إلى الأرجوحة. ماذا تفعل؟', en: 'Another child got to the swing before you. What do you do?' },
      options: [ { ar: 'أدفعه عنها.', en: 'Push them off.' }, { ar: 'أصرخ حتى ينزل.', en: 'Shout until they get off.' }, { ar: 'أنتظر دوري بهدوء.', en: 'Wait calmly for my turn.' } ],
      correct: 2,
      why: { ar: 'الانتظار بهدوء قوة، والدور سيأتيك قريبًا.', en: 'Waiting calmly is strength, and your turn will come soon.' } },
    { id: 'monkey-q10', readingId: 'monkey-r6', type: 'situation',
      q: { ar: 'أبوك يقول: «حان وقت النوم»، وأنت تلعب. ماذا تفعل؟', en: 'Your father says "it\'s bedtime" while you are playing. What do you do?' },
      options: [ { ar: 'أضع اللعبة وأذهب، وأقول: هل نكمل غدًا؟', en: 'Put the toy down, go, and ask: can we carry on tomorrow?' }, { ar: 'أبكي وأرمي اللعبة.', en: 'Cry and throw the toy.' }, { ar: 'أختبئ تحت الطاولة.', en: 'Hide under the table.' } ],
      correct: 0,
      why: { ar: 'نتوقف حين يُطلب منا، ونسأل بلطف، فيصير الكلام سهلًا.', en: 'We stop when asked and ask kindly; then talking becomes easy.' } }
  );

  /* السبابة */
  S.human.readings.push({
    id: 'human-r6', title: { ar: 'كلمة صغيرة سحرية', en: 'A small magic word' }, minutes: 2, ages: '4-8',
    body: {
      ar: [
        'داس يوسف على قدم صديقه سامر دون قصد.',
        'قال سامر: «آي!».',
        'توقف يوسف ونظر إليه.',
        'قال يوسف: «آسف يا سامر، لم أقصد. هل تؤلمك؟».',
        'ابتسم سامر وقال: «لا بأس، صارت أحسن».',
        'رجعا يلعبان معًا كأن شيئًا لم يكن.',
        'كلمة «آسف» صغيرة، لكنها تصلح أشياء كبيرة.'
      ],
      en: [
        'Yusuf stepped on his friend Samer\'s foot by accident.',
        'Samer said: "Ouch!"',
        'Yusuf stopped and looked at him.',
        'Yusuf said: "Sorry, Samer, I didn\'t mean it. Does it hurt?"',
        'Samer smiled: "It\'s OK, it\'s better now."',
        'They went back to playing together as if nothing had happened.',
        '"Sorry" is a small word, but it mends big things.'
      ]
    },
    ask: { ar: 'متى قلت «آسف» آخر مرة؟ وماذا حدث بعدها؟', en: 'When did you last say "sorry"? What happened next?' },
    quote: null, source: srcStory
  });
  S.human.quiz.push(
    { id: 'human-q9', readingId: 'human-r6', type: 'situation',
      q: { ar: 'سكبت الماء على الطاولة دون قصد. ماذا تفعل؟', en: 'You spilled water on the table by accident. What do you do?' },
      options: [ { ar: 'أمشي بعيدًا.', en: 'Walk away.' }, { ar: 'أقول: آسف، وأمسحه.', en: 'Say sorry and wipe it up.' }, { ar: 'أقول: لست أنا.', en: 'Say: it wasn\'t me.' } ],
      correct: 1,
      why: { ar: 'الاعتذار والإصلاح يجعلان الخطأ الصغير يمر بسلام.', en: 'Saying sorry and fixing it lets a small mistake pass peacefully.' } },
    { id: 'human-q10', readingId: 'human-r6', type: 'situation',
      q: { ar: 'جدتك أعطتك هدية. ماذا تقول؟', en: 'Your grandmother gave you a present. What do you say?' },
      options: [ { ar: 'أريد هدية أخرى.', en: 'I want another present.' }, { ar: 'لا أقول شيئًا وأفتحها.', en: 'Say nothing and open it.' }, { ar: 'شكرًا يا جدتي، جزاك الله خيرًا.', en: 'Thank you, Grandma, may Allah reward you.' } ],
      correct: 2,
      why: { ar: 'كلمة الشكر تفرح من أعطاك، وهي من سمات السبابة.', en: 'Saying thank you makes the giver happy; it is an index-finger trait.' } }
  );

  /* الإبهام */
  S.sabiq.readings.push({
    id: 'sabiq-r6', title: { ar: 'نور والحذاء المرتّب', en: 'Noor and the tidy shoes' }, minutes: 2, ages: '4-8',
    body: {
      ar: [
        'رأت نور أحذية العائلة متفرقة عند الباب.',
        'لم يطلب منها أحد أن ترتبها.',
        'قالت في نفسها: «سأفعلها لأن الله يحب ذلك».',
        'وضعت كل حذاء بجانب أخيه، صفًّا جميلًا.',
        'حين عاد أبوها، وجد حذاءه مرتبًا ينتظره.',
        'ابتسم ولم يعرف من فعلها.',
        'ابتسمت نور أيضًا، فالله يعرف.'
      ],
      en: [
        'Noor saw the family\'s shoes scattered by the door.',
        'Nobody had asked her to tidy them.',
        'She thought: "I\'ll do it because Allah loves it."',
        'She placed each shoe beside its pair, in a neat row.',
        'When her father came home, he found his shoes waiting, tidy.',
        'He smiled and did not know who had done it.',
        'Noor smiled too, because Allah knows.'
      ]
    },
    ask: { ar: 'ما الخير الصغير الذي تستطيع أن تفعله غدًا دون أن يطلبه أحد؟', en: 'What small good thing could you do tomorrow without anyone asking?' },
    quote: null, source: srcStory
  });
  S.sabiq.quiz.push(
    { id: 'sabiq-q9', readingId: 'sabiq-r6', type: 'situation',
      q: { ar: 'رأيت ألعاب أخيك الصغير على الأرض. ماذا تفعل؟', en: 'You see your little brother\'s toys on the floor. What do you do?' },
      options: [ { ar: 'أرتبها معه أو عنه.', en: 'Tidy them with him or for him.' }, { ar: 'أتركها، ليست ألعابي.', en: 'Leave them; they\'re not mine.' }, { ar: 'أناديه وأصرخ عليه.', en: 'Call him and shout at him.' } ],
      correct: 0,
      why: { ar: 'السابق بالخيرات يبادر ويساعد دون أن يُطلب منه.', en: 'Someone racing to good starts helping without being asked.' } },
    { id: 'sabiq-q10', readingId: 'sabiq-r6', type: 'situation',
      q: { ar: 'طفل جديد في الصف يجلس وحده. ماذا تفعل؟', en: 'A new child in class is sitting alone. What do you do?' },
      options: [ { ar: 'أنتظر أن يأتي هو إليّ.', en: 'Wait for them to come to me.' }, { ar: 'أذهب إليه وأدعوه ليلعب معنا.', en: 'Go over and invite them to play with us.' }, { ar: 'أنظر إليه وأضحك مع أصدقائي.', en: 'Look at them and laugh with my friends.' } ],
      correct: 1,
      why: { ar: 'الذي يبادر بالترحيب يسبق إلى الخير ويُدخل الفرح على قلب غيره.', en: 'Whoever starts the welcome races to good and brings joy into another heart.' } }
  );

  /* مهام اليوم */
  C.daily = [
    { id: 'd01', stage: 'zombie', ar: 'أقول «بسم الله» قبل كل ما آكله اليوم.', en: 'Say "Bismillah" before everything you eat today.' },
    { id: 'd02', stage: 'zombie', ar: 'قبل النوم أعدّ ثلاث نعم، وأقول عن كل واحدة: الحمد لله.', en: 'Before sleep, count three blessings and say "Alhamdulillah" for each.' },
    { id: 'd03', stage: 'zombie', ar: 'أطفئ الشاشة بنفسي حين ينتهي وقتها، دون أن يذكّرني أحد.', en: 'Turn off the screen yourself when its time is up, without a reminder.' },
    { id: 'd04', stage: 'zombie', ar: 'أنظر إلى السماء دقيقة واحدة، وأقول: سبحان الله.', en: 'Look at the sky for one minute and say: Subhanallah.' },
    { id: 'd05', stage: 'pig', ar: 'ألاحظ من هو متعب في البيت، وأساعده دقيقتين.', en: 'Notice who is tired at home and help them for two minutes.' },
    { id: 'd06', stage: 'pig', ar: 'أنتظر حتى يأخذ الجميع، ثم آخذ.', en: 'Wait until everyone has been served, then take yours.' },
    { id: 'd07', stage: 'pig', ar: 'أعطي شيئًا أحبه لأخ أو أخت أو صديق.', en: 'Give something you love to a sibling or friend.' },
    { id: 'd08', stage: 'pig', ar: 'أسأل أحد أفراد العائلة: ماذا تحب أن نفعل معًا؟ ثم نفعله.', en: 'Ask someone in the family: what would you like us to do together? Then do it.' },
    { id: 'd09', stage: 'monkey', ar: 'إذا قيل لي «توقف» اليوم، أتوقف فورًا.', en: 'If someone says "stop" today, stop at once.' },
    { id: 'd10', stage: 'monkey', ar: 'أتكلم بصوت هادئ طوال وقت العشاء.', en: 'Speak in a calm voice all through dinner.' },
    { id: 'd11', stage: 'monkey', ar: 'أجرّب «قِف، تنفّس، اختر» مرة واحدة حين أنزعج.', en: 'Try "stop, breathe, choose" once when something bothers you.' },
    { id: 'd12', stage: 'monkey', ar: 'أكمل عملًا واحدًا بدأته حتى آخره.', en: 'Finish one thing you started, right to the end.' },
    { id: 'd13', stage: 'human', ar: 'أقول «شكرًا» لثلاثة أشخاص اليوم.', en: 'Say "thank you" to three people today.' },
    { id: 'd14', stage: 'human', ar: 'إذا أخطأت اليوم، أقول «آسف» وأصلح ما أستطيع.', en: 'If you make a mistake today, say "sorry" and fix what you can.' },
    { id: 'd15', stage: 'human', ar: 'أرتّب سريري بعد أن أستيقظ.', en: 'Make your bed after you wake up.' },
    { id: 'd16', stage: 'human', ar: 'أفي بوعد صغير أقطعه اليوم.', en: 'Keep one small promise you make today.' },
    { id: 'd17', stage: 'sabiq', ar: 'أفعل خيرًا خفيًّا لا يعرفه أحد إلا الله.', en: 'Do a hidden good deed that only Allah knows about.' },
    { id: 'd18', stage: 'sabiq', ar: 'أبدأ بالسلام على كل من ألقاه اليوم.', en: 'Be the first to greet everyone you meet today.' },
    { id: 'd19', stage: 'sabiq', ar: 'أعلّم أخي أو أختي أو صديقي شيئًا طيبًا تعلمته.', en: 'Teach a sibling or friend something good you have learned.' },
    { id: 'd20', stage: 'sabiq', ar: 'أدعو لصديق باسمه دون أن أخبره.', en: 'Pray for a friend by name without telling them.' }
  ];
})();

/* ───────────── الجولة السادسة، 18 نوفمبر 2026: قراءات الفضائل وتمارينها، وأسئلة الوالدين ─────────────
 * reading/practice للفضائل الأربع عشرة. كلها ما زالت مقترحات (proposal:true). لا نص قرآنيًا جديدًا في هذه الجولة.
 */
(function () {
  var C = window.AKHLAQ_CONTENT;
  var V = {};
  C.virtues.forEach(function (v) { V[v.id] = v; });
  function add(id, title, ar, en, pAr, pEn) {
    V[id].reading = { title: title, body: { ar: ar, en: en } };
    V[id].practice = { ar: pAr, en: pEn };
  }

  add('v-muslim', { ar: 'المسلم: الناس في أمان منك', en: 'Surrendered: people are safe with you' },
    ['المسلم يسلّم أمره لله، فيصلي ويطيع.', 'ومن علاماته في يوم الطفل أن يكون الناس في أمان منه: لا يضرب، ولا يسخر، ولا يأخذ ما ليس له.', 'مثال: سقطت ممحاة زميل هند تحت كرسيها، فأعادتها إليه ولم تخبئها.'],
    ['A Muslim gives themself over to Allah, praying and obeying.', 'In a child\'s day, one sign is that people feel safe with them: no hitting, no mocking, no taking what is not theirs.', 'Example: a classmate\'s eraser rolled under Hind\'s chair, and she gave it back instead of keeping it.'],
    'صلِّ صلاتك في وقتها اليوم، وأعِد كل شيء ليس لك إلى صاحبه.', 'Pray on time today, and return anything that is not yours to its owner.');

  add('v-mumin', { ar: 'المؤمن: قلب مطمئن', en: 'Believing: a heart at rest' },
    ['المؤمن يصدّق بقلبه أن الله يراه ويحبه ويعتني به.', 'فإذا خاف دعا الله، وإذا فرح حمده.', 'مثال: خاف سليم قبل الامتحان، فقال «حسبي الله» وتنفّس، ثم بدأ يكتب بهدوء.'],
    ['A believer trusts with their heart that Allah sees them, loves them and takes care of them.', 'When they are scared they ask Allah for help, and when they are happy they praise Him.', 'Example: Salim felt scared before a test, so he said "Allah is enough for me", took a breath, and began to write calmly.'],
    'إذا خفت من شيء اليوم، ادعُ الله بكلماتك قبل أن تبدأ.', 'If something scares you today, ask Allah for help in your own words before you begin.');

  add('v-qanit', { ar: 'القانت: خير لا ينقطع', en: 'Devoted: good that keeps going' },
    ['القانت يداوم على الطاعة بهدوء وخشوع، لا يفعلها مرة ثم يتركها.', 'هو الذي يحافظ على ورده الصغير كل يوم، ولو كان آية واحدة.', 'مثال: تقرأ سلمى آية قبل النوم كل ليلة، حتى في أيام العطلة.'],
    ['A devoted person keeps up good deeds calmly and humbly, not once and then never again.', 'They keep their small daily practice, even if it is only one verse.', 'Example: Salma reads one verse before bed every night, even in the holidays.'],
    'اختر عملًا صغيرًا واحدًا، وافعله اليوم في الوقت نفسه الذي ستفعله فيه غدًا.', 'Choose one small good deed and do it today at the same time you will do it tomorrow.');

  add('v-sadiq', { ar: 'الصادق: كلامي مثل فعلي', en: 'Truthful: my words match my actions' },
    ['الصادق يقول الحق ولو كان صعبًا، ويفعل ما يقول.', 'لا يكذب ليهرب من خطأ، ولا يعد بشيء لن يفعله.', 'مثال: سألت المعلمة: من رمى الورقة؟ فرفع زيد يده وقال: «أنا، وسأرفعها الآن».'],
    ['A truthful person says what is true even when it is hard, and does what they say.', 'They do not lie to escape a mistake, and they do not promise what they will not do.', 'Example: the teacher asked who threw the paper. Zayd raised his hand: "It was me, and I\'ll pick it up now."'],
    'لا تقل اليوم إلا ما هو صحيح، ولا تعد إلا بما تستطيع.', 'Today, say only what is true, and promise only what you can do.');

  add('v-sabir', { ar: 'الصابر: أنتظر وأحتمل', en: 'Patient: I can wait and keep going' },
    ['الصبر ثلاثة: صبر على فعل الخير، وصبر عن الغضب والرغبة، وصبر على ما يؤلم.', 'الصابر لا يستسلم حين يصعب الأمر، ولا ينفجر حين يتأخر ما يريده.', 'مثال: كان واجب الرياضيات صعبًا على عمر، فلم يرمِ الدفتر، بل استراح دقيقة ثم حاول مرة أخرى.'],
    ['Patience comes in three kinds: patience in doing good, patience in holding back anger and wanting, and patience with what hurts.', 'A patient person does not give up when things get hard, and does not explode when what they want is late.', 'Example: Omar\'s maths homework was hard. He did not throw his notebook; he rested for a minute and tried again.'],
    'حين يصعب عليك شيء اليوم، قل «الحمد لله» وحاول مرة أخرى قبل أن تطلب المساعدة.', 'When something is hard today, say "Alhamdulillah" and try once more before asking for help.');

  add('v-khashi', { ar: 'الخاشع: قلبي حاضر', en: 'Humble-hearted: my heart is present' },
    ['الخاشع حاضر القلب في صلاته، يعرف أنه يقف بين يدي الله.', 'ومن خشوعه أنه متواضع مع الناس، لا يتكبر على صغير ولا على من لا يعرف.', 'مثال: صلّت ريم ببطء، وفكرت في معنى «الحمد لله رب العالمين» وهي تقرؤها.'],
    ['A humble-hearted person is present in their prayer, knowing they stand before Allah.', 'Part of that humility is being modest with people, never looking down on someone younger or someone who knows less.', 'Example: Reem prayed slowly and thought about the meaning of "All praise is for Allah, Lord of the worlds" as she recited it.'],
    'في صلاة واحدة اليوم، صلِّ ببطء، وفكّر في معنى آية واحدة.', 'In one prayer today, pray slowly and think about the meaning of one verse.');

  add('v-mutasaddiq', { ar: 'المتصدّق: يدي تعطي', en: 'Giving: my hand gives' },
    ['الصدقة ليست مالًا فقط. الابتسامة صدقة، والكلمة الطيبة صدقة، ومساعدة أخيك صدقة.', 'المتصدق يفرح حين يعطي، ولا يذكّر من أعطاه بما أعطى.', 'مثال: وضع آدم جزءًا من مصروفه في صندوق المسجد، ولم يخبر أصدقاءه.'],
    ['Giving is not only money. A smile is charity, a kind word is charity, helping your brother is charity.', 'A giving person is happy to give, and never reminds anyone of what they gave.', 'Example: Adam put part of his pocket money in the mosque box and did not tell his friends.'],
    'أعطِ اليوم شيئًا: ابتسامة، أو مساعدة، أو جزءًا من مصروفك.', 'Give something today: a smile, some help, or part of your pocket money.');

  add('v-saim', { ar: 'الصائم: أملك نفسي', en: 'Fasting: I am in charge of myself' },
    ['الصيام يعلّمنا أن نملك أنفسنا: نترك الطعام وقتًا، ونترك الكلام السيئ دائمًا.', 'ومن صام لسانه عن السوء صار قلبه أقوى على الخير.', 'مثال: الصغير الذي لم يبلغ سن الصيام يستطيع أن يصوم عن الحلوى حتى العصر، أو يصوم عن الشكوى يومًا كاملًا.'],
    ['Fasting teaches us to be in charge of ourselves: we leave food for a time, and leave bad words always.', 'Whoever keeps their tongue from bad words grows a heart stronger for good.', 'Example: a child too young to fast can skip sweets until the afternoon, or go a whole day without complaining.'],
    'صُم اليوم عن شيء صغير: عن الحلوى حتى العصر، أو عن الشكوى يومًا كاملًا.', 'Fast from one small thing today: sweets until the afternoon, or complaining for a whole day.');

  add('v-hafiz', { ar: 'العفيف الحيي: أحفظ نفسي', en: 'Modest: I look after myself' },
    ['العفيف يحفظ نفسه وجسده، ويحترم أجساد الآخرين وخصوصيتهم.', 'والحياء خلق جميل: أن نستحيي من الله ومن الناس فلا نفعل ما يخجلنا.', 'مثال: يستأذن يوسف قبل أن يدخل غرفة أخته، ويطرق الباب وينتظر.'],
    ['A modest person looks after themself and their body, and respects other people\'s bodies and privacy.', 'Modesty is a beautiful trait: feeling shy before Allah and before people, so we avoid doing what would embarrass us.', 'Example: Yusuf knocks and waits before going into his sister\'s room.'],
    'اطرق الباب واستأذن قبل أن تدخل أي غرفة اليوم.', 'Knock and ask before entering any room today.');

  add('v-dhakir', { ar: 'الذاكر: الله في قلبي طوال اليوم', en: 'Remembering Allah much: Allah in my heart all day' },
    ['الذاكر الله كثيرًا أبعد الناس عن الغفلة، فهو عكس سمات الخنصر تمامًا.', 'يذكر الله عند الاستيقاظ والطعام والخروج والنوم، وحين يرى شيئًا جميلًا.', 'مثال: تقول نور «بسم الله» حين تلبس حذاءها، و«سبحان الله» حين ترى القمر.'],
    ['Someone who remembers Allah much is furthest from heedlessness, the very opposite of little-finger traits.', 'They remember Allah on waking, eating, going out and sleeping, and whenever they see something beautiful.', 'Example: Noor says "Bismillah" as she puts on her shoes, and "Subhanallah" when she sees the moon.'],
    'اذكر الله في خمسة أوقات اليوم: الاستيقاظ، والطعام، والخروج، والعودة، والنوم.', 'Remember Allah at five moments today: waking, eating, going out, coming home and sleeping.');

  add('v-salih', { ar: 'الصالح: خير ثابت', en: 'Righteous: steady goodness' },
    ['الصالح من صلح قلبه وصلح عمله، فصار الخير عادته لا مناسبة عابرة.', 'تثق به أمه حين تغيب، ويفرح به من حوله.', 'مثال: حين خرجت الأم، رتب سامي غرفته وساعد أخاه في واجبه دون أن يذكّره أحد.'],
    ['A righteous person has a sound heart and sound deeds, so goodness is their habit, not a one-off.', 'Their mother can trust them when she is away, and people around them are glad of them.', 'Example: while his mother was out, Sami tidied his room and helped his brother with homework without being reminded.'],
    'افعل اليوم ما كنت ستفعله لو كان أبوك أو أمك يراك، وأنت تعلم أن الله يراك.', 'Today, do what you would do if your parent were watching, knowing that Allah sees you.');

  add('v-shahid', { ar: 'الشهيد: أشهد بالحق', en: 'Witness: I stand up for what is true' },
    ['الشهيد في القرآن معانٍ، منها أن تشهد بالحق بين الناس وتقوم به.', 'يقول الحق حين يُظلم أحد، ولو كان المظلوم لا يعرفه.', 'مثال: اتُّهم طفل في الصف بشيء لم يفعله، فقالت ليلى بهدوء: «رأيت ما حدث، لم يكن هو».'],
    ['In the Quran "witness" has several meanings; one is bearing witness to the truth among people and standing by it.', 'They speak up when someone is treated unfairly, even someone they do not know.', 'Example: a child in class was blamed for something he did not do. Layla said calmly: "I saw what happened; it wasn\'t him."'],
    'إذا رأيت اليوم أحدًا يُظلم، قل الحق بلطف أو أخبر الكبار.', 'If you see someone treated unfairly today, speak the truth kindly or tell an adult.');

  add('v-siddiq', { ar: 'الصدّيق: صدق كامل', en: 'Utterly truthful: truth all the way through' },
    ['الصدّيق كمُل صدقه في القول والعمل والقلب، فلا يتغير بين ما يقوله وما يخفيه.', 'وصف القرآن إبراهيم ومريم عليهما السلام بالصدق الكامل، فهما قدوة لنا.', 'مثال: وجد عمر ورقة نقدية في الطريق، ولم يره أحد، فأعطاها لحارس المسجد ليبحث عن صاحبها.'],
    ['An utterly truthful person is truthful in word, deed and heart, with no gap between what they say and what they hide.', 'The Quran describes Ibrahim and Maryam, peace be upon them, as utterly truthful, so they are our examples.', 'Example: Omar found a banknote in the street. No one saw him, but he gave it to the mosque caretaker to find its owner.'],
    'كن اليوم كما أنت أمام الناس وحين تكون وحدك.', 'Today, be the same person in front of people as when you are alone.');

  add('v-muqarrab', { ar: 'المقرّب: أسبق إلى الخير', en: 'Brought near: first to the good' },
    ['المقربون هم السابقون السابقون، يسبقون إلى الخير في الدنيا فيكونون قريبين من الله.', 'يبادر قبل أن يُطلب منه، ويفرح حين يسبقه غيره إلى الخير ولا يحسده.', 'مثال: حين نادى المؤذن، ترك آدم لعبته وكان أول من توضأ من إخوته، ثم نادى أخاه الصغير ليتوضأ معه.'],
    ['Those brought near are the foremost, who race to good in this life and so are near to Allah.', 'They act before being asked, and are glad, not jealous, when someone else gets to the good first.', 'Example: when the call to prayer came, Adam put down his game, was the first of his siblings to make wudu, and then called his little brother to join him.'],
    'حين تسمع الأذان اليوم، اترك ما في يدك وكن أول من يستعد للصلاة.', 'When you hear the call to prayer today, put down what you are doing and be the first to get ready.');

  C.faq = [
    { q: { ar: 'أليس وصف السلوك بـ«الخنزير» أو «القرد» مؤذيًا للطفل؟', en: 'Isn\'t naming behaviours after the pig or the monkey harmful to a child?' },
      a: { ar: 'يصف التطبيق السلوك وحده، بلغة الإصبع: «هذه من سمات البنصر». والطفل نفسه خلقه الله في أحسن تقويم، ونذكّره بذلك دائمًا، ونذكّره أن في كل الناس شيئًا من هذه السمات، وأن كل واحد يستطيع أن يصعد. وأصل الفكرة قرآني: ضرب القرآن الأمثال بالحيوان لسلوك الإنسان. ولهذا صارت إشارة الإصبع لغة البيت اليومية.', en: 'The app describes the behaviour alone, in the language of the hand: \"that is a ring-finger trait\". The child is someone Allah created in the finest form, and we remind them of that often, along with two more things: everyone has some of these traits, and everyone can climb. The idea is Quranic: the Quran uses animal images to describe human behaviour. That is why the finger sign is the everyday language at home.' } },
    { q: { ar: 'ماذا أفعل إن رفض طفلي النسبة المئوية أو حزن منها؟', en: 'What if my child objects to a percentage or is upset by it?' },
      a: { ar: 'استمع إليه أولًا ولا تجادله. قل له: «هذه النسبة صورة لسلوكك هذا الأسبوع، وستتغير». وابدأ دائمًا بالجزء الإنساني والاتجاه: «انظر، صعدت هذا الأسبوع». وإن اعترض على رقم بعينه فاسأله: «وكيف تراه أنت؟»، فالتقييم الذاتي جزء من التطبيق، وحواره معك أهم من الرقم نفسه.', en: 'Listen first and do not argue. Say: "This number is a picture of how this week went, and it will change." Always start with the human part and the direction: "Look, you went up this week." If they disagree with a particular number, ask: "How do you see it?" Self-assessment is part of the app, and talking it through with you matters more than the number itself.' } },
    { q: { ar: 'كم مرة نستعمل التطبيق؟', en: 'How often should we use the app?' },
      a: { ar: 'القليل الدائم أفضل: قراءة واحدة قصيرة وأسئلتها في اليوم، ومهمة يوم واحدة، وجلسة أسبوعية هادئة تنظران فيها معًا إلى المزيج. واجعله عادة لطيفة في وقت ثابت، كبعد العصر أو قبل النوم، بعيدًا عن ساعة العقاب بعد الخطأ.', en: 'A little, consistently, is best: one short reading with its questions each day, one daily mission, and a calm weekly sit-down to look at the mix together. Make it a gentle habit at a fixed time, such as after Asr or before bed, well away from the moment of punishment after a mistake.' } },
    { q: { ar: 'هل التطبيق نفسه لابن أربع سنوات ولابن اثنتي عشرة سنة وللكبير؟', en: 'Is it the same for a 4-year-old, a 12-year-old and an adult?' },
      a: { ar: 'السلم واحد، والطريقة تختلف. ابن الرابعة يسمع القصص المصورة من والده، ويجيب عن أسئلة المواقف بصوت عالٍ، ويرى الأصابع أكثر من الأرقام. وابن الثانية عشرة يقرأ وحده، ويحل الاختبارات، ويقيّم نفسه. والكبير يقرأ قراءات 15+، ويحاسب نفسه، ويكون قدوة. ولكل قراءة وسم عمري يساعدك على الاختيار.', en: 'The ladder is the same; the way of using it differs. A 4-year-old hears the picture-book stories from a parent, answers the situation questions aloud, and sees fingers more than numbers. A 12-year-old reads alone, does the quizzes and assesses themself. An adult reads the 15+ pages, reviews themself and sets the example. Every reading has an age tag to help you choose.' } },
    { q: { ar: 'هل ينزل طفلي إذا أخطأ؟', en: 'Does my child go down when they make a mistake?' },
      a: { ar: 'تنزل النسبة الإنسانية ببطء شديد، وتصعد بسرعة أكبر بالاعتذار والإصلاح والحسنة بعد السيئة. والفكرة أن يعرف الطفل أن الباب مفتوح دائمًا، فيخطئ اليوم، ويعتذر غدًا، ويكمل صعوده.', en: 'The human share drops only slowly, and rises faster through apologising, repairing and following a bad deed with a good one. The point is for the child to know the door is always open: a mistake today, an apology tomorrow, and the climb goes on.' } },
    { q: { ar: 'ما دوري في تأكيد المهام؟', en: 'What is my role in confirming tasks?' },
      a: { ar: 'أنت الشاهد على السلوك الحقيقي في البيت. أكّد المهمة حين تراها فعلًا، وسمِّ الفعل بالتحديد حين تمدحه. ولا تؤكد ما لم يحدث لتفرحه، فالصدق هنا جزء من التربية. وإن لم ينجز المهمة فقل: «نجرّبها غدًا».', en: 'You are the witness of real behaviour at home. Confirm a task when you have actually seen it, and name the exact action when you praise it. Do not confirm something that did not happen just to please them; honesty here is part of the upbringing. If they did not manage it, just say: “We’ll try it again tomorrow.”' } },
    { q: { ar: 'كيف أستعمل إشارة الإصبع خارج التطبيق؟', en: 'How do I use the finger sign outside the app?' },
      a: { ar: 'أشِر إلى الإصبع بهدوء وابتسامة، بلا صراخ ولا أمام الغرباء. «هذه من سمات الوسطى» تكفي، ثم افتح باب الصعود: «ماذا نفعل الآن؟». واستعملها في المدح أكثر من التنبيه: «هذا الذي فعلته من سمات الإبهام!». وحين يبدأ الطفل يشير إلى إصبعه بنفسه، فقد بدأ يرى سلوكه.', en: 'Point to the finger calmly and with a smile, never shouting and never in front of strangers. "That\'s a middle-finger trait" is enough; then open the way up: "What shall we do now?" Use it for praise more than for correction: "What you did is a thumb trait!" When the child starts pointing to their own finger, they have begun to see their behaviour.' } },
    { q: { ar: 'وماذا عن سلوكي أنا بوصفي والدًا؟', en: 'What about my own behaviour as a parent?' },
      a: { ar: 'الطفل يتعلم مما يرى أكثر مما يسمع. إذا رفعت صوتك فاعترف: «رفعت صوتي، وهذه من سمات الوسطى، وأنا آسف». فاعتذارك أمامه درس لا تعلّمه قراءة. ويمكنك أن تستعمل التطبيق لنفسك أيضًا، فهو للأعمار من 4 إلى 99.', en: 'Children learn more from what they see than from what they hear. If you raise your voice, own it: "I raised my voice; that\'s a middle-finger trait, and I\'m sorry." Your apology in front of them teaches what no reading can. You can use the app for yourself too; it is for ages 4 to 99.' } },
    { q: { ar: 'هل يحتاج التطبيق إلى بيانات شخصية عن طفلي؟', en: 'Does the app need personal data about my child?' },
      a: { ar: 'هذه النسخة تجريبية ولا تحتاج إلا اسمًا مستعارًا أو لقبًا. لا ترفع صورًا للطفل، ولا تكتب تفاصيل خاصة. وسياسة الحسابات والخصوصية في المنتج العام ما زالت قيد الدراسة قبل النشر.', en: 'This is a test version and needs nothing more than a nickname. Do not upload photos of your child or write private details. The account and privacy policy for the public product is still being worked out before release.' } }
  ];
})();

/* ───────────── الجولة الثامنة، 18 نوفمبر 2026: حلقة العائلة الأسبوعية (مقترحات) ─────────────
 * ثماني حلقات، كل حلقة عشر دقائق: افتتاح بقراءة موجودة في المحتوى (uses)، ثم سؤال، ثم تمرين، ثم دعاء.
 * الأدعية الثلاثة مؤكدة من hadith-api (fawazahmed0): مسلم (sunnah.com الكتاب 6 الحديث 240؛ الكتاب 48 الحديث 99)، أبو داود 1522.
 * Eight 10-minute family circles; each opens with a reading already in the content (uses), then a question, a practice and a du'a.
 */
(function () {
  var C = window.AKHLAQ_CONTENT;
  var D1 = { ar: 'نختم بالدعاء: «اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الْأَخْلَاقِ، لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لَا يَصْرِفُ عَنِّي سَيِّئَهَا إِلَّا أَنْتَ» (من حديث في صحيح مسلم).', en: 'Close with the du\'a, meaning: O Allah, guide me to the best of character, for none guides to the best of it but You, and turn its bad away from me, for none turns its bad away but You (from a hadith in Sahih Muslim).' };
  var D2 = { ar: 'نختم بالدعاء: «اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا، وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا» (صحيح مسلم).', en: 'Close with the du\'a, meaning: O Allah, give my soul its God-consciousness and purify it, for You are the best to purify it; You are its Guardian and Master (Sahih Muslim).' };
  var D3 = { ar: 'نختم بالدعاء: «اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ» (سنن أبي داود 1522).', en: 'Close with the du\'a, meaning: O Allah, help me to remember You, to thank You and to worship You well (Sunan Abi Dawud 1522).' };

  C.circle = [
    { week: 1, proposal: true, uses: ['human-r2'],
      title: { ar: 'يدي سُلَّمي', en: 'My hand is my ladder' },
      steps: {
        ar: ['افتتاح (دقيقتان): يرفع كل واحد يده، ونقرأ معًا قراءة «في أحسن تقويم»: شكلنا جميل كما خلقه الله، والسلوك هو الذي يصعد.', 'سؤال (3 دقائق): ما الإصبع الذي تحب أن تصل إليه هذا الشهر؟ ولماذا؟ يجيب الكبار أيضًا.', 'تمرين (4 دقائق): نعدّ الأصابع معًا من الخنصر إلى الإبهام، ونقول اسم كل مرحلة، ونتفق على جملة البيت: «هذه من سمات الإصبع...»، لا «أنت...».', D3.ar],
        en: ['Opening (2 min): everyone raises a hand, and we read "In the finest form" together: our shape is beautiful as Allah made it, and it is behaviour that climbs.', 'Question (3 min): which finger would you like to reach this month, and why? The grown-ups answer too.', 'Practice (4 min): count the fingers together from the little finger to the thumb, name each stage, and agree on the family phrase: "That\'s a ...-finger trait", never "You are...".', D3.en]
      } },
    { week: 2, proposal: true, uses: ['zombie-r6', 'zombie-r2'],
      title: { ar: 'الخنصر: نستيقظ', en: 'Little finger: waking up' },
      steps: {
        ar: ['افتتاح (دقيقتان): نقرأ قصة «عينا آدم تستيقظان» للصغار، أو «الميت الذي صار حيًّا» للكبار.', 'سؤال (3 دقائق): ما الشيء الجميل الذي مرّ بنا هذا الأسبوع ولم ننتبه له؟', 'تمرين (4 دقائق): «الدقيقة الحاضرة» معًا: ثلاثة أشياء نراها، وشيئان نسمعهما، ونعمة واحدة نشكر الله عليها.', D3.ar],
        en: ['Opening (2 min): read "Adam\'s eyes wake up" for the little ones, or "The one who was dead and was given life" for older ones.', 'Question (3 min): what lovely thing happened this week that we did not notice?', 'Practice (4 min): the "present minute" together: three things we see, two we hear, and one blessing we thank Allah for.', D3.en]
      } },
    { week: 3, proposal: true, uses: ['pig-r6', 'pig-r1'],
      title: { ar: 'البنصر: نرى غيرنا', en: 'Ring finger: seeing others' },
      steps: {
        ar: ['افتتاح (دقيقتان): نقرأ «تفاحتان وصديق» أو «سلمى والكرسي المريح».', 'سؤال (3 دقائق): من في بيتنا تعب هذا الأسبوع؟ كيف عرفنا؟', 'تمرين (4 دقائق): لعبة «انتظر ثم انظر»: نضع صحن فاكهة في الوسط، ولا يأخذ أحد حتى يعدّ إلى عشرة وينظر هل أخذ الجميع.', D1.ar],
        en: ['Opening (2 min): read "Two apples and a friend" or "Salma and the comfy chair".', 'Question (3 min): who in our home was tired this week? How did we know?', 'Practice (4 min): the "wait, then look" game: put a plate of fruit in the middle; nobody takes until they have counted to ten and checked that everyone has some.', D1.en]
      } },
    { week: 4, proposal: true, uses: ['monkey-r6', 'monkey-r2'],
      title: { ar: 'الوسطى: نمسك المقود', en: 'Middle finger: holding the wheel' },
      steps: {
        ar: ['افتتاح (دقيقتان): نقرأ «عمر والصوت الصغير» أو «القوي الحقيقي».', 'سؤال (3 دقائق): متى شعرنا بـ«بالون الغضب» هذا الأسبوع؟ وماذا فعلنا؟ يبدأ الوالد بنفسه.', 'تمرين (4 دقائق): نتمرن على «قِف، تنفّس، اختر» ونحن هادئون: يقول أحدنا «توقف» فجأة، ويتجمد الجميع، ثم نتنفس معًا إلى أربعة.', D1.ar],
        en: ['Opening (2 min): read "Omar and the small voice" or "The truly strong one".', 'Question (3 min): when did we feel the "anger balloon" this week, and what did we do? The parent goes first.', 'Practice (4 min): rehearse "stop, breathe, choose" while calm: someone suddenly says "stop", everyone freezes, then we all breathe to four together.', D1.en]
      } },
    { week: 5, proposal: true, uses: ['human-r3', 'human-r4'],
      title: { ar: 'البوابة: من القراءة إلى الفعل', en: 'The gate: from reading to doing' },
      steps: {
        ar: ['افتتاح (دقيقتان): نقرأ «سلم الناس من لسانه ويده»، ونقف عند «أحب الأعمال إلى الله تعالى أدومها وإن قل».', 'سؤال (3 دقائق): ما الشيء الذي قرأناه هذا الشهر ولم نفعله بعد؟', 'تمرين (4 دقائق): يختار كل واحد عادة صغيرة مربوطة بشيء ثابت («بعد العشاء أشكر أمي»)، ويكتبها الوالد ليؤكدها في الأسبوع.', D2.ar],
        en: ['Opening (2 min): read "People are safe from his tongue and hand" and pause at "the deeds most loved by Allah are the most lasting, even if small".', 'Question (3 min): what have we read this month that we have not yet done?', 'Practice (4 min): each person picks one tiny habit tied to a fixed moment ("after dinner I thank my mother"), and the parent writes it down to confirm during the week.', D2.en]
      } },
    { week: 6, proposal: true, uses: ['human-r6', 'human-r1'],
      title: { ar: 'السبابة: آسف وشكرًا', en: 'Index finger: sorry and thank you' },
      steps: {
        ar: ['افتتاح (دقيقتان): نقرأ «كلمة صغيرة سحرية» أو «زيد والكوب المكسور».', 'سؤال (3 دقائق): متى قلنا «آسف» هذا الأسبوع؟ ومتى كان يجب أن نقولها ولم نقلها؟', 'تمرين (4 دقائق): دائرة الشكر: يقول كل واحد «شكرًا» لكل فرد في الحلقة على شيء محدد فعله هذا الأسبوع.', D1.ar],
        en: ['Opening (2 min): read "A small magic word" or "Zayd and the broken cup".', 'Question (3 min): when did we say "sorry" this week, and when should we have said it but did not?', 'Practice (4 min): the thank-you circle: each person thanks everyone in the circle for one specific thing they did this week.', D1.en]
      } },
    { week: 7, proposal: true, uses: ['sabiq-r6', 'sabiq-r1'],
      title: { ar: 'الإبهام: الخير الخفي', en: 'Thumb: the hidden good' },
      steps: {
        ar: ['افتتاح (دقيقتان): نقرأ «نور والحذاء المرتّب» أو «مريم والحديقة قبل أن يستيقظوا».', 'سؤال (3 دقائق): ما الخير الذي نستطيع أن نفعله دون أن يطلبه أحد؟', 'تمرين (4 دقائق): يكتب كل واحد على ورقة صغيرة خيرًا خفيًّا سيفعله هذا الأسبوع، ويطويها ويحتفظ بها، ولا يخبر أحدًا.', D2.ar],
        en: ['Opening (2 min): read "Noor and the tidy shoes" or "Maryam and the garden before anyone woke".', 'Question (3 min): what good could we do without anyone asking?', 'Practice (4 min): each person writes on a small slip one hidden good deed for this week, folds it, keeps it, and tells nobody.', D2.en]
      } },
    { week: 8, proposal: true, uses: ['sabiq-r3'],
      title: { ar: 'اليد اليمنى والقمة', en: 'The right hand and the summit' },
      steps: {
        ar: ['افتتاح (دقيقتان): نقرأ «فبهداهم اقتده»: النور فوق اليد هو نور الهداية التي أتى بها الأنبياء عليهم السلام، وبنورهم ورسالاتهم يُهتدى.', 'سؤال (3 دقائق): أي خلق من أخلاق الأنبياء عليهم السلام نحب أن نعيشه أسبوعًا كاملًا؟', 'تمرين (4 دقائق): نختار معًا فضيلة واحدة من فضائل اليد اليمنى المقترحة، ونقرأ وصفها، ويتعهد كل واحد بتمرينها هذا الأسبوع.', D2.ar],
        en: ['Opening (2 min): read "So follow their guidance": the light above the hand is the light of guidance the prophets, peace be upon them, brought; by their light and their messages we are guided.', 'Question (3 min): which quality of the prophets, peace be upon them, would we like to live for a whole week?', 'Practice (4 min): together choose one of the proposed right-hand virtues, read its description, and each of us commits to its practice this week.', D2.en]
      } }
  ];
})();

/* ───────────── الجولة التاسعة، 18 نوفمبر 2026: صيغة المؤنث ar_f ─────────────
 * يختار التطبيق ar_f حين يكون ملف الطفل لبنت. لا يتغير ar. تُضاف ar_f فقط حيث يختلف النص المكتوب.
 * أسماء التمارين («قِف، تنفّس، اختر»، «انتظر ثم انظر») ونصوص الآيات والأحاديث تبقى كما هي.
 * For a girl's profile the app reads ar_f. Only strings whose written form differs get ar_f; body.ar_f keeps the shape of body.ar.
 */
(function () {
  var C = window.AKHLAQ_CONTENT, S = C.stages;
  var F = {
    /* الخنصر */
    'zombie-r2.b3': 'وانتبهي: الآية لا تقول إن هذا الإنسان سيئ إلى الأبد. بل تقول إنه كان ميتًا ثم صار حيًّا. الباب مفتوح لكل واحد، وأول خطوة أن تتبعي النور خطوة بعد خطوة.',
    'zombie-r3.b1': 'الذكر ليس كلامًا طويلًا. «بسم الله» قبل الأكل ذكر، و«الحمد لله» بعد الشبع ذكر، و«سبحان الله» حين ترين السماء ذكر.',
    'zombie-r3.b3': 'جرّبي اليوم: اختاري ثلاثة أوقات، واذكري فيها الله بكلمة واحدة. ستلاحظين أن قلبك صار أكثر انتباهًا.',
    'zombie-r4.b1': 'التمرين: توقفي دقيقة واحدة. انظري حولك وسمّي ثلاثة أشياء ترينها، وشيئين تسمعينهما، وشيئًا واحدًا تشكرين الله عليه.',
    'zombie-r4.b2': 'كرريه مرة في الصباح ومرة قبل النوم. بعد أسبوع سيصير قلبك أسرع يقظة، وستلاحظين ما لم تكوني تلاحظينه: تعب أمك، وفرح صديقتك، وجمال المطر.',
    'zombie-r5.b4': 'خطوات عملية: حدّدي أوقاتًا بلا شاشة (بعد الفجر وقبل النوم)، واجعلي أول ما تفعلينه صباحًا ذكرًا لا إشعارًا، واسألي كل مساء: ماذا قرّبني اليوم من الله، وماذا أبعدني؟',
    'zombie-r6.ask': 'ما الشيء الجميل الذي رأيتِه اليوم ولم تكوني تنتبهين له؟',
    'zombie-q2.q': 'تلعبين بالجهاز، ونادتك أمك للطعام. ماذا تفعلين؟',
    'zombie-q7.q': 'لاحظتِ أنك قضيتِ وقتًا طويلًا دون أن تنتبهي. ما أول خطوة؟',
    'zombie-q7.o0': 'أحزن وأقول: أنا سيئة.',
    'zombie-q7.why': 'يكفي للانتباه خطوة صغيرة: توقفي، وانظري حولك، واشكري.',
    'zombie-q8.q': 'تستيقظين وأول ما تمدين يدك إليه الهاتف. ما الخطوة الأقرب لليقظة؟',
    'zombie-q9.q': 'تمشين إلى المدرسة، ويلوّح لك جارك. ماذا تفعلين؟',
    'zombie-q10.q': 'ترين السماء ملوّنة وقت المغرب. ماذا تقولين؟',
    'zombie.parent0': 'سمات الخنصر هي الغفلة: أن يمضي الوقت والقلب غائب. وهي أكثر ما يصيبنا جميعًا مع الشاشات، فابدأ بنفسك قدوةً قبل أن تنبّه طفلتك.',
    'zombie.parent1': 'أشِر إلى الخنصر بهدوء وابتسامة، وصِف السلوك لا الطفلة، ثم افتح لها باب الصعود فورًا.',
    'zombie.parent2': 'قل مثلًا: «أرى أن الشاشة أخذتك ساعة، وهذه من سمات الخنصر. تعالي نتوقف دقيقة ونعدّ ثلاث نعم معًا».',
    'zombie.parent3': 'وتجنّب أن تقول: «أنتِ زومبي لا تفهمين شيئًا». قل بدلها: «ناديتك ثلاث مرات ولم ترفع عينيك عن الشاشة، وهذه من سمات الخنصر». يسمعها خبرًا عن لحظة مضت، يقدر أن يغيّرها في المرة القادمة.',

    /* البنصر */
    'pig-r2.b2': 'سلوك الخنزير يقول: «طعامي لي». وهذه الآية تعلّمنا العكس: أجمل العطاء أن تعطي الشيء الذي تحبينه أنتِ.',
    'pig-r4.b1': 'التمرين له خطوتان. الأولى: «انتظر». حين تشتهين شيئًا، عُدّي إلى عشرة قبل أن تأخذيه.',
    'pig-r4.b2': 'الثانية: «انظر». وأنتِ تعدّين، انظري حولك: هل يحتاج أحد هذا الشيء أكثر مني؟ هل أخذ الجميع؟ هل هناك من هو متعب؟',
    'pig-r4.b3': 'بعد العد، قرري. أحيانًا ستأخذين القطعة، وأحيانًا ستعطينها لغيركِ. وفي المرتين تكونين أنتِ التي اختارت، بعد أن انتظرت.',
    'pig-r5.b3': 'والعلاج في القرآن أن تُرتَّب الرغبة: ﴿وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ ۝ فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ﴾ (النازعات 79:40-41). النهي هنا قيادة: أنتِ التي تمسكين الزمام.',
    'pig-r5.b4': 'تمرين: قبل أي شراء غير ضروري انتظري يومًا كاملًا. وكل أسبوع أعطي شيئًا تحبينه. ولاحظي كيف يخف ضجيج الرغبة كلما مارستِ العطاء.',
    'pig-r6.ask': 'ما الشيء الذي تحبين أن تشاركيه مع صديقتك؟',
    'pig-q3.why': '«على حبه» أي وهم يحبون الطعام ويشتهونه، ومع ذلك يعطونه لغيرهم.',
    'pig-q4.q': 'بقيت قطعة حلوى واحدة، وأنتِ وأختك تريدانها. ماذا تفعلين؟',
    'pig-q6.q': 'جلستم للأكل من صحن واحد. من أين تأكلين؟',
    'pig-q6.why': '«كُل مما يليك»: تأخذين نصيبك وتتركين لغيرك نصيبهم.',
    'pig-q7.q': 'رأيتِ طعامًا تحبينه على المائدة، ولم يجلس الجميع بعد. ما الخطوة الأولى في التمرين؟',
    'pig-q7.why': '«انتظر ثم انظر»: هكذا تصيرين أنتِ من تقرر لا رغبتك.',
    'pig-q8.q': 'أمك تحمل أكياسًا ثقيلة وأنتِ جالسة تلعبين. ماذا تفعلين؟',
    'pig-q9.q': 'معك كيس حلوى، وأخوك ينظر إليك. ماذا تفعلين؟',
    'pig-q10.q': 'أمك تحمل صحونًا كثيرة إلى المطبخ. ماذا تفعلين؟',
    'pig.parent0': 'سمات البنصر هي التمحور حول الرغبة: «أنا أريد» قبل أن ترى الطفلة غيرها. والطفلة في سنواتها الأولى ترى نفسها أولًا بطبيعتها، فنعلّمها بصبر أن ترى من حولها.',
    'pig.parent1': 'أشِر إلى البنصر حين ترى السلوك، ثم ساعدها أن تنظر: إلى وجه أخيها، أو تعب جدتها، أو نصيب غيرها.',
    'pig.parent2': 'قل مثلًا: «أخذ أكبر قطعة قبل الجميع من سمات البنصر. انظري حولك: هل أخذ أخوك؟ ماذا تفعلين الآن؟».',
    'pig.parent3': 'وتجنّب أن تقول: «أنتِ خنزيرة لا تفكرين إلا في بطنك». جرّب أن تقول: «أخذتِ القطعة الكبيرة قبل أن يجلس أحد». ستراها أحيانًا تعيدها دون أن تطلب.',
    'pig.parent4': 'وامدحها بالإصبع الأعلى حين تحسن: «هذا الذي فعلتِه الآن من سمات السبابة».',

    /* الوسطى */
    'monkey-r2.b2': 'حين تغضبين، يحاول الغضب أن يقود يدك وصوتك وقدمك. سلوك القرد يترك الغضب يقود. والسلوك الإنساني يمسك المقود.',
    'monkey-r4.b1': 'الخطوة الأولى: «قِف». جمّدي يديك وقدميك وفمك ثانية واحدة.',
    'monkey-r4.b2': 'الخطوة الثانية: «تنفّس». شهيق ببطء إلى أربعة، وزفير إلى أربعة. ثلاث مرات. ويمكنك أن تقولي في نفسك: «أعوذ بالله من الشيطان الرجيم».',
    'monkey-r4.b3': 'الخطوة الثالثة: «اختر». اسألي نفسك: ما التصرف الإنساني الآن؟ أن أتكلم بهدوء؟ أن أبتعد قليلًا؟ أن أطلب المساعدة؟ ثم افعليه.',
    'monkey-r4.b4': 'تمرّني عليها وأنتِ هادئة أيضًا، حتى تصير جاهزة حين تحتاجينها.',
    'monkey-r5.b0': 'تذكر آية آل عمران من صفات المتقين: ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾ (آل عمران 3:134). ثلاث خطوات متصاعدة: أن تكظمي، ثم أن تعفي، ثم أن تحسني.',
    'monkey-r5.b1': 'الكظم أن تمسكي الغضب فلا يخرج يدًا ولا لسانًا. وهذا هو الخروج من سلوك القرد.',
    'monkey-r5.b2': 'والعفو أن تُسقطي حقك في قلبك، فلا تحملي الغضب معك أيامًا. وهذا هو السلوك الإنساني.',
    'monkey-r5.b3': 'والإحسان أن تردي الإساءة بخير. وهذا باب السابقين.',
    'monkey-r5.b4': 'ويضيف علم النفس أداة نافعة اسمها «إعادة التقييم»: أن تسألي حين تغضبين: هل هناك تفسير آخر لما حدث؟ هل كان متعبًا؟ هل أسأتُ الفهم؟ إعادة التفسير تطفئ كثيرًا من الغضب قبل أن يشتعل.',
    'monkey-r5.b5': 'وتذكّري أن الغضب نفسه ليس عيبًا، فهو شعور طبيعي. العيب أن يقودك. والمطلوب أن تمسكي أنتِ المقود.',
    'monkey-r6.ask': 'ماذا تفعلين حين تشعرين أن بالون الغضب يكبر في صدرك؟',
    'monkey-q2.q': 'تلعبين مع أخيك، وقال لك: «توقفي، هذا يؤلمني». ماذا تفعلين؟',
    'monkey-q2.why': 'التوقف الفوري حين يُطلب منك هو أول درجة للخروج من سمات الوسطى، وسؤالك عنه يُشعره أنك تهتمين.',
    'monkey-q4.q': 'غضبتِ وأنتِ واقفة. ماذا علّمنا النبي صلى الله عليه وآله وسلم أن نفعل؟',
    'monkey-q6.why': 'الهدوء لا يعني الضعف: تبتعدين بسلام، وتطلبين العون إن احتجتِ.',
    'monkey-q8.q': 'أخذ أخوك لعبتك دون إذن، وشعرتِ بيدك تريد أن تضربه. ماذا تفعلين؟',
    'monkey-q9.q': 'أحد الأطفال سبقك إلى الأرجوحة. ماذا تفعلين؟',
    'monkey-q10.q': 'أبوك يقول: «حان وقت النوم»، وأنتِ تلعبين. ماذا تفعلين؟',
    'monkey.parent0': 'سمات الوسطى هي الاندفاع: الصوت العالي، والحركة العنيفة، وعدم التوقف. وهي أشد ما تكون حين تكون الطفلة متعبة أو جائعة أو منفعلة، فاختر لحظة الهدوء للتعليم، ولحظة الانفعال للتوقيف فقط.',
    'monkey.parent1': 'في لحظة الانفعال: صوتك المنخفض أقوى من صوتها العالي. أشِر إلى الوسطى بلا كلام كثير، وقل كلمة واحدة: «توقفي»، ثم اجلس معها.',
    'monkey.parent2': 'قل مثلًا بعد أن تهدأ: «رفع الصوت قبل قليل كان من سمات الوسطى. ما الذي أغضبك؟ وماذا نفعل في المرة القادمة: قِف، تنفّس، اختر؟».',
    'monkey.parent3': 'وتجنّب أن تقول وأنت غاضب: «أنتِ قردة لا تسمعين أبدًا». حين نرفع أصواتنا عليه نعلّمه ما نريد أن يتركه. وكلمة «أبدًا» تقول له إن المحاولة لا فائدة منها.',
    'monkey.parent4': 'وحين تتوقف من نفسها، احتفل بذلك: «توقفتِ فورًا، هذه درجة جديدة».',

    /* السبابة */
    'human-r3.b3': 'اجمعي الحديثين: كفّي أذاك، وداومي على خير صغير. هكذا تثبتين على السبابة وتتهيئين للإبهام.',
    'human-r4.b1': 'اختاري عادة صغيرة: أن تشكري أمك بعد كل وجبة، أو أن ترتبي سريرك بعد الاستيقاظ، أو أن تقولي كلمة طيبة لأول من تلقينه.',
    'human-r4.b2': 'اربطيها بشيء ثابت: «بعد أن أغسل يدي من الطعام، أقول لأمي: شكرًا».',
    'human-r4.b3': 'وحين تفعلينها، ابتسمي وقولي «الحمد لله». بعد أسابيع تصير العادة جزءًا منك، وهذا معنى «أدومها وإن قل».',
    'human-r5.b1': 'الفرق بين اللوم النافع والضار دقيق. اللوم الضار يقول: «أنا سيئة ولن أتغير». واللوم النافع يقول: «فعلت هذا، وسأصلحه، وغدًا أفعل أحسن».',
    'human-r6.ask': 'متى قلتِ «آسفة» آخر مرة؟ وماذا حدث بعدها؟',
    'human-q2.q': 'أوقعتِ كتاب صديقك في الماء دون قصد. ماذا تفعلين؟',
    'human-q6.q': 'يسخر أصدقاؤك من طالب جديد، ويريدونك أن تضحكي معهم. ماذا تفعلين؟',
    'human-q6.why': 'أن يسلم الناس من لسانك يعني ألا تشاركي في السخرية أبدًا.',
    'human-q7.q': 'تريدين أن تبني عادة شكر أمك. ما الطريقة الأنجح؟',
    'human-q8.o0': '«أنا سيئة ولن أتغير أبدًا».',
    'human-q8.why': 'أنتِ لستِ سيئة، بل أخطأتِ. واللوم النافع يعترف بالخطأ ويخطط لحسنة تمحوه.',
    'human-q9.q': 'سكبتِ الماء على الطاولة دون قصد. ماذا تفعلين؟',
    'human-q9.o1': 'أقول: آسفة، وأمسحه.',
    'human-q10.q': 'جدتك أعطتك هدية. ماذا تقولين؟',
    'human.parent3': 'وتجنّب أن تقول: «أخيرًا صرتِ إنسانة!». فهي توحي بأنها لم تكن إنسانة قبل ذلك. وهي إنسانة كريمة من يوم وُلدت. امدح الفعل نفسه: «انتظرتِ دوركِ في الأرجوحة، وهذه من سمات السبابة».',

    /* الإبهام */
    'sabiq-r2.b2': 'وأمرنا الله بالمسارعة: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ﴾ (آل عمران 3:133). والمسارعة أن تقومي إلى الخير في اللحظة التي يخطر لكِ فيها، قبل أن يأتي الكسل.',
    'sabiq-r3.b4': 'جرّبي هذا الأسبوع: اختاري خلقًا واحدًا من نبي: صبر أيوب، أو صدق يوسف، أو رحمة النبي محمد صلى الله عليه وآله وسلم بالصغار، وطبّقيه يومًا كاملًا.',
    'sabiq-r4.b2': 'الخطة: كل مساء اكتبي عملًا خفيًّا واحدًا ستفعلينه غدًا: ترتيب حذاء أبيك، أو وضع ماء لعطشان، أو دعاء لصديقتك باسمها.',
    'sabiq-r4.b3': 'لا تخبري أحدًا. واكتبي في المساء التالي: هل فعلتُه؟ وماذا شعرتُ؟',
    'sabiq-r5.b0': 'يعد الله المجاهدين في سبيله بالهداية: ﴿وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا﴾ (العنكبوت 29:69). المجاهدة هنا جهد النفس اليومي: أن تقومي إلى الخير ونفسك تريد الراحة.',
    'sabiq-r5.b4': 'خطوة عملية: اختاري صفة من صفات الأحزاب 35 العشر، واعملي عليها أربعين يومًا، ثم انتقلي إلى التي تليها.',
    'sabiq-r6.ask': 'ما الخير الصغير الذي تستطيعين أن تفعليه غدًا دون أن يطلبه أحد؟',
    'sabiq-q4.q': 'رأيتِ أكواب الضيوف على الطاولة بعد ذهابهم. ماذا يفعل السابق بالخيرات؟',
    'sabiq-q4.why':'المسارعة أن تسبقي الكسل إلى الخير.',
    'sabiq-q6.q': 'أخوك الصغير ما زال يصرخ كثيرًا. كيف تعينينه على الصعود؟',
    'sabiq-q7.q': 'فعلتِ خيرًا خفيًّا اليوم. ماذا تفعلين بعده؟',
    'sabiq-q9.q': 'رأيتِ ألعاب أخيك الصغير على الأرض. ماذا تفعلين؟',
    'sabiq-q10.q': 'طفل جديد في الصف يجلس وحده. ماذا تفعلين؟',
    'sabiq.parent0': 'الإبهام هو السابق بالخيرات: يبادر قبل أن يُطلب منه، ويأخذ بيد غيره. وخطر هذه المرحلة أن تتعلم الطفلة فعل الخير لتُمدح، فاجعل المدح هنا قليلًا هادئًا، والشكر لله.',
    'sabiq.parent1': 'أشِر إلى الإبهام حين تبادر، واربط الفعل بقدوة من الأنبياء عليهم السلام لا بالمقارنة مع إخوتها.',

    /* شاشات الترحيب */
    'onb0.title': 'يدكِ سُلّم',
    'onb0.body': 'هذه يدكِ، وهي سُلّم تصعدين فيه من الخنصر إلى الإبهام. كل إصبع مرحلة، وكل عُقلة سمة من سماتها.',
    'onb1.body': 'كل واحد منا يستطيع أن يصعد خطوة بعد خطوة، بالقراءة والاختبار والمهام اليومية.',

    /* تمارين الفضائل */
    'v-muslim.practice': 'صلّي صلاتك في وقتها اليوم، وأعيدي كل شيء ليس لك إلى صاحبه.',
    'v-mumin.practice': 'إذا خفتِ من شيء اليوم، ادعي الله بكلماتك قبل أن تبدئي.',
    'v-qanit.practice': 'اختاري عملًا صغيرًا واحدًا، وافعليه اليوم في الوقت نفسه الذي ستفعلينه فيه غدًا.',
    'v-sadiq.practice': 'لا تقولي اليوم إلا ما هو صحيح، ولا تعدي إلا بما تستطيعين.',
    'v-sabir.practice': 'حين يصعب عليك شيء اليوم، قولي «الحمد لله» وحاولي مرة أخرى قبل أن تطلبي المساعدة.',
    'v-khashi.practice': 'في صلاة واحدة اليوم، صلّي ببطء، وفكّري في معنى آية واحدة.',
    'v-mutasaddiq.practice': 'أعطي اليوم شيئًا: ابتسامة، أو مساعدة، أو جزءًا من مصروفك.',
    'v-saim.practice': 'صومي اليوم عن شيء صغير: عن الحلوى حتى العصر، أو عن الشكوى يومًا كاملًا.',
    'v-hafiz.practice': 'اطرقي الباب واستأذني قبل أن تدخلي أي غرفة اليوم.',
    'v-dhakir.practice': 'اذكري الله في خمسة أوقات اليوم: الاستيقاظ، والطعام، والخروج، والعودة، والنوم.',
    'v-salih.practice': 'افعلي اليوم ما كنتِ ستفعلينه لو كان أبوك أو أمك يراك، وأنتِ تعلمين أن الله يراك.',
    'v-shahid.practice': 'إذا رأيتِ اليوم أحدًا يُظلم، قولي الحق بلطف أو أخبري الكبار.',
    'v-siddiq.practice': 'كوني اليوم كما أنتِ أمام الناس وحين تكونين وحدك.',
    'v-muqarrab.practice': 'حين تسمعين الأذان اليوم، اتركي ما في يدك وكوني أول من يستعد للصلاة.'
  };

  var applied = 0, missing = [];
  function hit(key) { applied++; delete F[key]; }
  Object.keys(S).forEach(function (k) {
    var s = S[k];
    s.readings.forEach(function (r) {
      var fb = null;
      r.body.ar.forEach(function (p, i) {
        var key = r.id + '.b' + i;
        if (F[key]) { fb = fb || r.body.ar.slice(); fb[i] = F[key]; hit(key); }
      });
      if (fb) r.body.ar_f = fb;
      if (F[r.id + '.ask'] && r.ask) { r.ask.ar_f = F[r.id + '.ask']; hit(r.id + '.ask'); }
    });
    s.quiz.forEach(function (q) {
      if (F[q.id + '.q']) { q.q.ar_f = F[q.id + '.q']; hit(q.id + '.q'); }
      if (F[q.id + '.why']) { q.why.ar_f = F[q.id + '.why']; hit(q.id + '.why'); }
      q.options.forEach(function (o, i) { var key = q.id + '.o' + i; if (F[key]) { o.ar_f = F[key]; hit(key); } });
    });
    var pf = null;
    s.parent.ar.forEach(function (p, i) {
      var key = k + '.parent' + i;
      if (F[key]) { pf = pf || s.parent.ar.slice(); pf[i] = F[key]; hit(key); }
    });
    if (pf) s.parent.ar_f = pf;
  });
  C.onboarding.forEach(function (o, i) {
    if (F['onb' + i + '.title']) { o.title.ar_f = F['onb' + i + '.title']; hit('onb' + i + '.title'); }
    if (F['onb' + i + '.body']) { o.body.ar_f = F['onb' + i + '.body']; hit('onb' + i + '.body'); }
  });
  C.virtues.forEach(function (v) {
    var key = v.id + '.practice';
    if (F[key]) { v.practice.ar_f = F[key]; hit(key); }
  });
})();

/* ───────────── الجولة العاشرة، 18 نوفمبر 2026: محاسبة المساء للكبار (15+ والوالدين) ─────────────
 * ثلاثة أسئلة لكل مرحلة، تُعرض مساءً. مستوحاة من باب المحاسبة في كتب الأدب والتزكية، بلا نسبة أقوال إلى أحد.
 * Evening self-review for ages 15+ and parents: three questions per stage. No quotations or attributions.
 */
(function () {
  var C = window.AKHLAQ_CONTENT;
  C.muhasaba = [
    { id: 'mh-zombie-1', stage: 'zombie', q: {
      ar: 'كم ساعة مضت عليك اليوم وقلبك غائب عمّا تفعل؟ وما الذي كان يسرقك؟',
      ar_f: 'كم ساعة مضت عليكِ اليوم وقلبك غائب عمّا تفعلين؟ وما الذي كان يسرقك؟',
      en: 'How many hours passed today with your heart absent from what you were doing? And what was taking it?' } },
    { id: 'mh-zombie-2', stage: 'zombie', q: {
      ar: 'هل مرّت بك اليوم كلمة حق أو نصيحة، فسمعتها بأذنك ولم يصل منها شيء إلى قلبك؟',
      ar_f: 'هل مرّت بكِ اليوم كلمة حق أو نصيحة، فسمعتِها بأذنك ولم يصل منها شيء إلى قلبك؟',
      en: 'Did a word of truth or a piece of advice reach you today that your ears heard but your heart did not take in?' } },
    { id: 'mh-zombie-3', stage: 'zombie', q: {
      ar: 'ما النعمة التي تمتعت بها اليوم ولم تذكر الله عندها؟',
      ar_f: 'ما النعمة التي تمتعتِ بها اليوم ولم تذكري الله عندها؟',
      en: 'Which blessing did you enjoy today without remembering Allah over it?' } },

    { id: 'mh-pig-1', stage: 'pig', q: {
      ar: 'أين قدّمت اليوم رغبتك على حاجة غيرك، في طعام أو راحة أو مال أو وقت؟',
      ar_f: 'أين قدّمتِ اليوم رغبتك على حاجة غيرك، في طعام أو راحة أو مال أو وقت؟',
      en: 'Where today did you put your own desire before someone else\'s need, in food, comfort, money or time?' } },
    { id: 'mh-pig-2', stage: 'pig', q: {
      ar: 'هل أخذت اليوم أكثر من حاجتك؟ وهل كان في البيت أو العمل من يحتاج ما زاد عنك؟',
      ar_f: 'هل أخذتِ اليوم أكثر من حاجتك؟ وهل كان في البيت أو العمل من يحتاج ما زاد عنك؟',
      en: 'Did you take more than you needed today? Was there anyone at home or at work who needed what you had to spare?' } },
    { id: 'mh-pig-3', stage: 'pig', q: {
      ar: 'من أتعبته اليوم بطلباتك دون أن تنظر في وجهه وترى تعبه؟',
      ar_f: 'من أتعبتِه اليوم بطلباتك دون أن تنظري في وجهه وتري تعبه؟',
      en: 'Whom did you wear out today with your demands, without looking at their face and seeing their tiredness?' } },

    { id: 'mh-monkey-1', stage: 'monkey', q: {
      ar: 'متى ارتفع صوتك اليوم أو سبقت يدك عقلك؟ وما الذي أشعل ذلك حقًّا؟',
      en: 'When did your voice rise today, or your hand move before your mind? What really set it off?' } },
    { id: 'mh-monkey-2', stage: 'monkey', q: {
      ar: 'هل قاطعت أحدًا اليوم، أو رددت قبل أن تفهم ما أراد؟',
      ar_f: 'هل قاطعتِ أحدًا اليوم، أو رددتِ قبل أن تفهمي ما أراد؟',
      en: 'Did you interrupt anyone today, or answer before understanding what they meant?' } },
    { id: 'mh-monkey-3', stage: 'monkey', q: {
      ar: 'ما العمل الذي بدأته اليوم وتركته قبل تمامه؟ وما الذي صرفك عنه؟',
      ar_f: 'ما العمل الذي بدأتِه اليوم وتركتِه قبل تمامه؟ وما الذي صرفك عنه؟',
      en: 'What did you start today and leave unfinished? What drew you away from it?' } },

    { id: 'mh-human-1', stage: 'human', q: {
      ar: 'هل سلم الناس اليوم من لسانك ويدك، حتى في غيابهم وفيما كتبت على الشاشة؟',
      ar_f: 'هل سلم الناس اليوم من لسانك ويدك، حتى في غيابهم وفيما كتبتِ على الشاشة؟',
      en: 'Were people safe today from your tongue and your hand, even in their absence and in what you wrote on a screen?' } },
    { id: 'mh-human-2', stage: 'human', q: {
      ar: 'ما الوعد الذي قطعته ولم تفِ به بعد؟ وما الخطأ الذي يحتاج منك اعتذارًا لم تقله؟',
      ar_f: 'ما الوعد الذي قطعتِه ولم تفي به بعد؟ وما الخطأ الذي يحتاج منك اعتذارًا لم تقوليه؟',
      en: 'Which promise have you made and not yet kept? Which mistake still waits for an apology you have not said?' } },
    { id: 'mh-human-3', stage: 'human', q: {
      ar: 'هل حافظت اليوم على عملك الصغير الدائم؟ وإن فاتك، فما الحسنة التي تُتبعها السيئة غدًا؟',
      ar_f: 'هل حافظتِ اليوم على عملك الصغير الدائم؟ وإن فاتك، فما الحسنة التي تُتبعينها السيئة غدًا؟',
      en: 'Did you keep your small lasting deed today? If you missed it, what good deed will follow the lapse tomorrow?' } },

    { id: 'mh-sabiq-1', stage: 'sabiq', q: {
      ar: 'ما الخير الذي رأيته يحتاج إلى من يقوم به، فتأخرت عنه حتى سبقك غيرك أو فات؟',
      ar_f: 'ما الخير الذي رأيتِه يحتاج إلى من يقوم به، فتأخرتِ عنه حتى سبقك غيرك أو فات؟',
      en: 'What good did you see waiting to be done, yet you held back until someone else did it or the chance passed?' } },
    { id: 'mh-sabiq-2', stage: 'sabiq', q: {
      ar: 'في الخير الذي عملته اليوم: كم كان منه لله وحده، وكم كان لنظر الناس أو لرضاك عن نفسك؟',
      ar_f: 'في الخير الذي عملتِه اليوم: كم كان منه لله وحده، وكم كان لنظر الناس أو لرضاكِ عن نفسك؟',
      en: 'Of the good you did today, how much was for Allah alone, and how much for people\'s eyes or your own self-satisfaction?' } },
    { id: 'mh-sabiq-3', stage: 'sabiq', q: {
      ar: 'من أخذت بيده اليوم ليصعد؟ ومن تركته وأنت تقدر أن تعينه بكلمة طيبة؟',
      ar_f: 'من أخذتِ بيده اليوم ليصعد؟ ومن تركتِه وأنتِ تقدرين أن تعينيه بكلمة طيبة؟',
      en: 'Whose hand did you take today to help them climb? And whom did you pass by when a kind word from you could have helped?' } }
  ];
})();

/* ───────────── الجولة الحادية عشرة، 18 نوفمبر 2026: صيغة المؤنث لأسماء الدرجات، وقراءات القمة (r7) ─────────────
 * (ar_f لأسماء الدرجات أُلغي في جولة الاختبار: صارت مصادر محايدة.)
 * قراءات القمة: خلق النبي صلى الله عليه وآله وسلم في مقابل سلوك كل مرحلة، للأعمار 9 إلى 14، قمة نتبعها لا مرتبة نبلغها.
 * الأحاديث طوبقت على hadith-api (fawazahmed0): البخاري 6203، 2093، 3149، 2587، 4837، 851.
 */
(function () {
  var C = window.AKHLAQ_CONTENT, S = C.stages;

  /* أسماء الدرجات صارت مصادر محايدة في جولة الاختبار، فلا تحتاج ar_f. */

  var SRC = { ar: 'حديث في صحيح البخاري.', en: 'A hadith in Sahih al-Bukhari.' };
  var CHK = 'hadith-api (fawazahmed0)';

  var R = {
    zombie: {
      id: 'zombie-r7', summit: true, minutes: 3, ages: '9-14',
      title: { ar: 'القمة: حاضر مع الصغير', en: 'The summit: present with the little one' },
      body: {
        ar: ['كان قلب النبي صلى الله عليه وآله وسلم حاضرًا مع كل من حوله، كبيرًا كان أو صغيرًا. ومن خلقه نعرف وجهة الطريق.',
          'كان لأنس بن مالك أخ صغير اسمه أبو عمير، وكان له طائر صغير يلعب به يسمى «النُّغَير». وكان النبي صلى الله عليه وآله وسلم إذا جاء بيتهم سأله عن طائره.',
          'لم يكن عنده وقت فارغ، فهو يعلّم الناس ويقودهم. ومع ذلك كان ينتبه لطفل فطيم ولطائره، ويسأله سؤالًا يعرف أنه يهمّه.',
          'سمات الخنصر أن يمرّ اليوم والقلب غائب، فلا نرى من حولنا. والقمة عكس ذلك: قلب حاضر يرى الصغير، ويتذكر ما يحبه، ويسأل عنه.',
          'جرّب اليوم: اسأل أخاك الصغير أو صديقك عن شيء يحبه هو، واستمع إلى جوابه حتى النهاية.'],
        ar_f: ['كان قلب النبي صلى الله عليه وآله وسلم حاضرًا مع كل من حوله، كبيرًا كان أو صغيرًا. ومن خلقه نعرف وجهة الطريق.',
          'كان لأنس بن مالك أخ صغير اسمه أبو عمير، وكان له طائر صغير يلعب به يسمى «النُّغَير». وكان النبي صلى الله عليه وآله وسلم إذا جاء بيتهم سأله عن طائره.',
          'لم يكن عنده وقت فارغ، فهو يعلّم الناس ويقودهم. ومع ذلك كان ينتبه لطفل فطيم ولطائره، ويسأله سؤالًا يعرف أنه يهمّه.',
          'سمات الخنصر أن يمرّ اليوم والقلب غائب، فلا نرى من حولنا. والقمة عكس ذلك: قلب حاضر يرى الصغير، ويتذكر ما يحبه، ويسأل عنه.',
          'جرّبي اليوم: اسألي أخاك الصغير أو صديقتك عن شيء يحبه، واستمعي إلى جوابه حتى النهاية.'],
        en: ['The Prophet\'s heart, peace and blessings be upon him and his family, was present with everyone around him, old or young. His character shows us where the road leads.',
          'Anas ibn Malik had a little brother called Abu Umayr, who had a small bird he played with, called "al-Nughayr". Whenever the Prophet, peace and blessings be upon him and his family, came to their house, he asked the boy about his bird.',
          'He was never short of work: he taught people and led them. Yet he noticed a small child and his bird, and asked him the one question he knew mattered to him.',
          'The little-finger trait is a day passing with an absent heart, not seeing who is around us. The summit is the opposite: a present heart that sees the little one, remembers what they love, and asks about it.',
          'Try it today: ask your little brother or a friend about something they love, and listen to the whole answer.']
      },
      quote: { ar: '«يَا أَبَا عُمَيْرٍ مَا فَعَلَ النُّغَيْرُ»', en: 'Meaning: Abu Umayr, what happened to the little bird?', ref: 'صحيح البخاري 6203، عن أنس بن مالك', checked: CHK, verify: true },
      source: SRC
    },
    pig: {
      id: 'pig-r7', summit: true, minutes: 3, ages: '9-14',
      title: { ar: 'القمة: البُردة التي أعطاها', en: 'The summit: the cloak he gave away' },
      body: {
        ar: ['في عطاء النبي صلى الله عليه وآله وسلم نرى الصورة التي نمشي نحوها.',
          'نسجت امرأة بُردة بيدها وأهدتها إلى النبي صلى الله عليه وآله وسلم، فأخذها وكان محتاجًا إليها، ولبسها.',
          'فطلبها منه رجل من الحاضرين، فقال: «نعم». ثم طواها وأرسلها إليه. وكان الصحابة يعرفون أنه لا يردّ من سأله.',
          'سمات البنصر أن نقول «لي» قبل أن نرى غيرنا. والقمة أن تعطي الشيء الذي تحتاجه أنت، لأنك رأيت حاجة أخيك.',
          'لا يُطلب منك أن تعطي كل شيء. ابدأ بشيء صغير تحبه، وأعطه بوجه راضٍ.'],
        ar_f: ['في عطاء النبي صلى الله عليه وآله وسلم نرى الصورة التي نمشي نحوها.',
          'نسجت امرأة بُردة بيدها وأهدتها إلى النبي صلى الله عليه وآله وسلم، فأخذها وكان محتاجًا إليها، ولبسها.',
          'فطلبها منه رجل من الحاضرين، فقال: «نعم». ثم طواها وأرسلها إليه. وكان الصحابة يعرفون أنه لا يردّ من سأله.',
          'سمات البنصر أن نقول «لي» قبل أن نرى غيرنا. والقمة أن تعطي الشيء الذي تحتاجينه أنتِ، لأنك رأيتِ حاجة أختك.',
          'لا يُطلب منك أن تعطي كل شيء. ابدئي بشيء صغير تحبينه، وأعطيه بوجه راضٍ.'],
        en: ['In the giving of the Prophet, peace and blessings be upon him and his family, we see the picture we walk towards.',
          'A woman wove a cloak with her own hands and gave it to the Prophet, peace and blessings be upon him and his family. He took it, needing it, and wore it.',
          'Then a man among those present asked him for it, and he said "Yes". He folded it and sent it to him. His Companions knew he never turned away anyone who asked.',
          'The ring-finger trait is saying "mine" before we see anyone else. The summit is giving the very thing you need, because you saw your brother\'s or sister\'s need.',
          'Nobody asks you to give everything. Start with one small thing you love, and give it gladly.']
      },
      quote: { ar: '«فَأَخَذَهَا النَّبِيُّ صلى الله عليه وسلم مُحْتَاجًا إِلَيْهَا»', en: 'Meaning: the Prophet took it, needing it.', ref: 'صحيح البخاري 2093، عن سهل بن سعد', checked: CHK, verify: true },
      source: SRC
    },
    monkey: {
      id: 'monkey-r7', summit: true, minutes: 3, ages: '9-14',
      title: { ar: 'القمة: جذبة الرداء', en: 'The summit: the tug on the cloak' },
      body: {
        ar: ['حِلم النبي صلى الله عليه وآله وسلم عند الغضب نور نمشي على ضوئه، نتبعه ونتعلم منه.',
          'كان أنس بن مالك يمشي مع النبي صلى الله عليه وآله وسلم، وعليه بُرد غليظ الحاشية. فأدركه أعرابي وجذبه من ردائه جذبة شديدة، حتى ظهر أثر الحاشية على عاتقه.',
          'ثم قال الأعرابي بخشونة: أعطني من مال الله الذي عندك.',
          'فالتفت إليه النبي صلى الله عليه وآله وسلم، فضحك، ثم أمر له بعطاء. لم يدفعه، ولم يرفع صوته عليه.',
          'سمات الوسطى أن يقود الغضب اليد والصوت. والقمة قلب يمسك المقود حتى حين يُؤذى الجسد، ثم يزيد فيُحسن إلى من أساء.'],
        en: ['The forbearance of the Prophet, peace and blessings be upon him and his family, in the face of anger is a light we walk by; we follow it and learn from him.',
          'Anas ibn Malik was walking with the Prophet, peace and blessings be upon him and his family, who wore a cloak with a rough edge. A Bedouin caught up with him and tugged the cloak so hard that its edge left a mark on his shoulder.',
          'Then the Bedouin said roughly: give me some of Allah\'s wealth that you have.',
          'The Prophet turned to him, laughed, and ordered that he be given something. He did not push him, and he did not raise his voice at him.',
          'The middle-finger trait is letting anger drive the hand and the voice. The summit is a heart that holds the wheel even when the body is hurt, and then goes further and is good to the one who did wrong.']
      },
      quote: { ar: '«فَالْتَفَتَ إِلَيْهِ، فَضَحِكَ ثُمَّ أَمَرَ لَهُ بِعَطَاءٍ»', en: 'Meaning: he turned to him, laughed, and ordered a gift for him.', ref: 'صحيح البخاري 3149، عن أنس بن مالك', checked: CHK, verify: true },
      source: SRC
    },
    human: {
      id: 'human-r7', summit: true, minutes: 3, ages: '9-14',
      title: { ar: 'القمة: اعدلوا بين أولادكم', en: 'The summit: be fair between your children' },
      body: {
        ar: ['عدل النبي صلى الله عليه وآله وسلم ورحمته بالصغار ميزان نزن به أفعالنا.',
          'أعطى بشير بن سعد ابنه النعمان عطية، فقالت أمه: لا أرضى حتى تُشهد رسول الله صلى الله عليه وآله وسلم.',
          'فجاء بشير إلى النبي صلى الله عليه وآله وسلم، فسأله: «أعطيت سائر ولدك مثل هذا؟». قال: لا. فقال: «فاتقوا الله واعدلوا بين أولادكم». فرجع بشير وردّ العطية.',
          'لم يرضَ النبي صلى الله عليه وآله وسلم أن يُظلم طفل واحد في بيته، ولو بهدية. فالعدل حق للصغير كما هو حق للكبير.',
          'السبابة تعني أن يأخذ كل واحد حقه منك. والقمة أن تحرس العدل حتى في الأشياء الصغيرة: في القسمة، وفي الدور، وفي الكلمة الطيبة.'],
        ar_f: ['عدل النبي صلى الله عليه وآله وسلم ورحمته بالصغار ميزان نزن به أفعالنا.',
          'أعطى بشير بن سعد ابنه النعمان عطية، فقالت أمه: لا أرضى حتى تُشهد رسول الله صلى الله عليه وآله وسلم.',
          'فجاء بشير إلى النبي صلى الله عليه وآله وسلم، فسأله: «أعطيت سائر ولدك مثل هذا؟». قال: لا. فقال: «فاتقوا الله واعدلوا بين أولادكم». فرجع بشير وردّ العطية.',
          'لم يرضَ النبي صلى الله عليه وآله وسلم أن يُظلم طفل واحد في بيته، ولو بهدية. فالعدل حق للصغير كما هو حق للكبير.',
          'السبابة تعني أن يأخذ كل واحد حقه منك. والقمة أن تحرسي العدل حتى في الأشياء الصغيرة: في القسمة، وفي الدور، وفي الكلمة الطيبة.'],
        en: ['The fairness of the Prophet, peace and blessings be upon him and his family, and his mercy to children are a scale for our own deeds.',
          'Bashir ibn Sa\'d gave his son al-Nu\'man a gift, and the boy\'s mother said: I will not be content until you take the Messenger of Allah as witness.',
          'So Bashir came to the Prophet, peace and blessings be upon him and his family, who asked him: "Have you given all your other children the same?" He said no. The Prophet said, meaning: "Then be mindful of Allah and be fair between your children." Bashir went back and took the gift back.',
          'The Prophet would not accept that a single child be treated unfairly at home, even over a present. Fairness is a child’s right just as it is a grown-up’s.',
          'The index finger means everyone gets their due from you. The summit is guarding fairness even in small things: in sharing, in taking turns, and in kind words.']
      },
      quote: { ar: '«فَاتَّقُوا اللَّهَ، وَاعْدِلُوا بَيْنَ أَوْلاَدِكُمْ»', en: 'Meaning: Be mindful of Allah, and be fair between your children.', ref: 'صحيح البخاري 2587، عن النعمان بن بشير', checked: CHK, verify: true },
      source: SRC
    },
    sabiq: {
      id: 'sabiq-r7', summit: true, minutes: 4, ages: '9-14',
      title: { ar: 'القمة: يسرع إلى الخير ويقوم الليل', en: 'The summit: hurrying to good, standing at night' },
      body: {
        ar: ['سبق النبي صلى الله عليه وآله وسلم الناس إلى الخير في نهاره وليله، ونحن نسير خلفه ونقتدي به.',
          'صلّى عقبة بن الحارث العصر خلف النبي صلى الله عليه وآله وسلم في المدينة. فلما سلّم قام مسرعًا إلى بيته، فعجب الناس من سرعته.',
          'فخرج إليهم وقال إنه تذكّر قطعة ذهب عنده، فكره أن تبقى عنده فتشغله، فأمر بقسمتها على المحتاجين. لم ينتظر الغد، ولم ينتظر أن يذكّره أحد.',
          'وكانت السيدة عائشة ترى النبي صلى الله عليه وآله وسلم يقوم الليل حتى تتشقق قدماه، فسألته: لماذا تصنع هذا وقد غفر الله لك؟ فقال: «أفلا أحب أن أكون عبدًا شكورًا».',
          'هذا هو الإبهام في قمته: أن تسبق إلى الخير قبل أن يبرد، وأن تعبد الله شكرًا لا خوفًا من عقاب فقط.'],
        ar_f: ['سبق النبي صلى الله عليه وآله وسلم الناس إلى الخير في نهاره وليله، ونحن نسير خلفه ونقتدي به.',
          'صلّى عقبة بن الحارث العصر خلف النبي صلى الله عليه وآله وسلم في المدينة. فلما سلّم قام مسرعًا إلى بيته، فعجب الناس من سرعته.',
          'فخرج إليهم وقال إنه تذكّر قطعة ذهب عنده، فكره أن تبقى عنده فتشغله، فأمر بقسمتها على المحتاجين. لم ينتظر الغد، ولم ينتظر أن يذكّره أحد.',
          'وكانت السيدة عائشة ترى النبي صلى الله عليه وآله وسلم يقوم الليل حتى تتشقق قدماه، فسألته: لماذا تصنع هذا وقد غفر الله لك؟ فقال: «أفلا أحب أن أكون عبدًا شكورًا».',
          'هذا هو الإبهام في قمته: أن تسبقي إلى الخير قبل أن يبرد، وأن تعبدي الله شكرًا لا خوفًا من عقاب فقط.'],
        en: ['The Prophet, peace and blessings be upon him and his family, raced ahead of everyone to good, by day and by night, and we walk behind him and follow his example.',
          'Uqba ibn al-Harith prayed the afternoon prayer behind the Prophet, peace and blessings be upon him and his family, in Madina. As soon as he finished, he got up quickly and went home, and people were surprised at his hurry.',
          'He came back out and told them he had remembered a piece of gold at home and did not want it to hold him back, so he had ordered it to be shared out to those in need. He did not wait for tomorrow, or for anyone to remind him.',
          'Lady Aisha used to see the Prophet stand in prayer at night until his feet cracked. She asked him why, when Allah had forgiven him. He said, meaning: "Should I not love to be a grateful servant?"',
          'That is the thumb at its summit: racing to good before it goes cold, and worshipping Allah out of gratitude, not only out of fear.']
      },
      quote: { ar: '«ذَكَرْتُ شَيْئًا مِنْ تِبْرٍ عِنْدَنَا فَكَرِهْتُ أَنْ يَحْبِسَنِي، فَأَمَرْتُ بِقِسْمَتِهِ»؛ «أَفَلاَ أُحِبُّ أَنْ أَكُونَ عَبْدًا شَكُورًا»', en: 'Meaning: I remembered some gold we had and did not want it to hold me back, so I ordered it shared out; and: Should I not love to be a grateful servant?', ref: 'صحيح البخاري 851، عن عقبة بن الحارث؛ وصحيح البخاري 4837، عن عائشة', checked: CHK, verify: true },
      source: { ar: 'حديثان في صحيح البخاري.', en: 'Two hadiths in Sahih al-Bukhari.' }
    }
  };

  var Q = {
    zombie: [
      { id: 'zombie-q11', readingId: 'zombie-r7', type: 'comprehension', correct: 1,
        q: { ar: 'عمّ كان النبي صلى الله عليه وآله وسلم يسأل أبا عمير؟', en: 'What did the Prophet, peace and blessings be upon him and his family, ask Abu Umayr about?' },
        options: [{ ar: 'عن واجباته المدرسية', en: 'His homework' }, { ar: 'عن طائره الصغير الذي يلعب به', en: 'The little bird he played with' }, { ar: 'عن طعامه', en: 'His food' }],
        why: { ar: 'سأله عن الشيء الذي يهمّه هو. والقلب الحاضر يعرف ما يحبه الآخر.', en: 'He asked about the thing that mattered to the boy. A present heart knows what others love.' } },
      { id: 'zombie-q12', readingId: 'zombie-r7', type: 'comprehension', correct: 2,
        q: { ar: 'ما عكس سمات الخنصر في هذه القصة؟', en: 'What is the opposite of the little-finger trait in this story?' },
        options: [{ ar: 'أن يكون عندنا وقت فارغ كثير', en: 'Having lots of free time' }, { ar: 'أن نتكلم مع الكبار فقط', en: 'Only talking to grown-ups' }, { ar: 'أن ننتبه لمن حولنا، حتى الصغير', en: 'Noticing those around us, even the little ones' }],
        why: { ar: 'الغفلة ألّا نرى، والحضور أن نرى حتى طفلًا صغيرًا وطائره.', en: 'Heedlessness is not seeing; presence is seeing even a small child and his bird.' } }
    ],
    pig: [
      { id: 'pig-q11', readingId: 'pig-r7', type: 'comprehension', correct: 0,
        q: { ar: 'لماذا كان عطاء البردة عظيمًا؟', en: 'Why was giving away the cloak so great?' },
        options: [{ ar: 'لأن النبي صلى الله عليه وآله وسلم كان محتاجًا إليها ومع ذلك أعطاها', en: 'Because the Prophet needed it and still gave it' }, { ar: 'لأنها كانت قديمة', en: 'Because it was old' }, { ar: 'لأنه كان عنده كثير مثلها', en: 'Because he had many like it' }],
        why: { ar: 'أعطى البُردة وهو محتاج إليها ويحبها.', en: 'He gave the cloak while he needed it and liked it.' } }
    ],
    monkey: [
      { id: 'monkey-q11', readingId: 'monkey-r7', type: 'comprehension', correct: 2,
        q: { ar: 'ماذا فعل النبي صلى الله عليه وآله وسلم حين جذبه الأعرابي بقوة؟', en: 'What did the Prophet do when the Bedouin tugged him hard?' },
        options: [{ ar: 'دفعه بعيدًا', en: 'Pushed him away' }, { ar: 'رفع صوته عليه', en: 'Raised his voice at him' }, { ar: 'التفت إليه وضحك وأمر له بعطاء', en: 'Turned to him, laughed, and ordered him a gift' }],
        why: { ar: 'أمسك المقود فلم يقده الغضب، ثم أحسن إلى من أساء.', en: 'He held the wheel so anger did not drive him, then was good to the one who did wrong.' } }
    ],
    human: [
      { id: 'human-q11', readingId: 'human-r7', type: 'comprehension', correct: 1,
        q: { ar: 'ماذا طلب النبي صلى الله عليه وآله وسلم من بشير؟', en: 'What did the Prophet ask of Bashir?' },
        options: [{ ar: 'أن يعطي النعمان أكثر', en: 'To give al-Nu\'man more' }, { ar: 'أن يعدل بين أولاده كلهم', en: 'To be fair between all his children' }, { ar: 'أن يخفي العطية', en: 'To hide the gift' }],
        why: { ar: '«اعدلوا بين أولادكم»: العدل حق لكل طفل في البيت.', en: '"Be fair between your children": fairness is every child\'s right at home.' } }
    ],
    sabiq: [
      { id: 'sabiq-q11', readingId: 'sabiq-r7', type: 'comprehension', correct: 0,
        q: { ar: 'لماذا أسرع النبي صلى الله عليه وآله وسلم إلى بيته بعد الصلاة؟', en: 'Why did the Prophet hurry home after the prayer?' },
        options: [{ ar: 'ليأمر بقسمة ذهب كان عنده على المحتاجين', en: 'To have some gold he had shared out to those in need' }, { ar: 'ليرتاح', en: 'To rest' }, { ar: 'ليأكل', en: 'To eat' }],
        why: { ar: 'تذكّر ذهبًا بقي في بيته، فكره أن يبقى عنده، فأمر بقسمته في الحال.', en: 'He remembered some gold left in his house, disliked keeping it, and had it shared out at once.' } },
      { id: 'sabiq-q12', readingId: 'sabiq-r7', type: 'comprehension', correct: 1,
        q: { ar: 'بماذا أجاب النبي صلى الله عليه وآله وسلم حين سألته السيدة عائشة عن قيامه الطويل؟', en: 'How did the Prophet answer when Lady Aisha asked about his long night prayer?' },
        options: [{ ar: 'إنه يخاف أن يُعاقب', en: 'That he was afraid of punishment' }, { ar: 'إنه يحب أن يكون عبدًا شكورًا', en: 'That he loved to be a grateful servant' }, { ar: 'إنه لا يستطيع النوم', en: 'That he could not sleep' }],
        why: { ar: 'عبادة القمة شكر لله على نعمه.', en: 'Worship at the summit is thanking Allah for His blessings.' } }
    ]
  };

  Object.keys(R).forEach(function (k) {
    S[k].readings.push(R[k]);
    Q[k].forEach(function (q) { S[k].quiz.push(q); });
  });
})();

/* ───────────── الجولة الثانية عشرة، 18 نوفمبر 2026: قراءات أهل البيت والصحابة (r8) ─────────────
 * قراءة لكل مرحلة، للأعمار 9 إلى 14، من الصحيحين وحدهما. «عليهم السلام» لأهل البيت، و«رضي الله عنه» للصحابة.
 * طوبقت على hadith-api (fawazahmed0): مسلم (sunnah.com الكتاب 50 الحديث 15؛ الكتاب 1 الحديث 25)، البخاري 3705، 2296، 3798. والحشر 59:9 من تنزيل quran-simple.
 */
(function () {
  var C = window.AKHLAQ_CONTENT, S = C.stages;
  var CHK = 'hadith-api (fawazahmed0)';

  var R = {
    zombie: {
      id: 'zombie-r8', companions: true, minutes: 3, ages: '9-14',
      title: { ar: 'حنظلة يخاف على قلبه', en: 'Hanzala worries about his heart' },
      body: {
        ar: ['كان حنظلة الأسيدي رضي الله عنه من كتّاب النبي صلى الله عليه وآله وسلم. وكان إذا جلس عنده يذكّرهم بالجنة والنار، شعر كأنه يراهما بعينه.',
          'فإذا رجع إلى بيته، ولاعب الأولاد وانشغل بعمله، نسي كثيرًا. فخاف على نفسه، وقال لأبي بكر رضي الله عنه: «نافق حنظلة». فقال أبو بكر: وأنا أجد مثل هذا.',
          'فذهبا معًا إلى النبي صلى الله عليه وآله وسلم وأخبراه. فطمأنهما وقال: «يا حنظلة ساعة وساعة».',
          'لم يكن حنظلة غافلًا، بل كان منتبهًا لغفلته، وهذه أول اليقظة. فالقلب الحي يلاحظ متى يغيب، ويرجع. ولا يُطلب منا أن نكون في الذكر كل لحظة، بل أن لا ننسى الرجوع.'],
        en: ['Hanzala al-Usayyidi, may Allah be pleased with him, was one of the Prophet\'s scribes. When he sat with the Prophet, peace and blessings be upon him and his family, who reminded them of Paradise and the Fire, he felt as if he could see them.',
          'But when he went home, played with the children and got busy with work, he forgot a lot. He worried about himself and said to Abu Bakr, may Allah be pleased with him: "Hanzala has become a hypocrite!" Abu Bakr said: I feel the same.',
          'So they went together to the Prophet and told him. He reassured them and said, meaning: "Hanzala, there is a time for this and a time for that."',
          'Hanzala was not heedless: he noticed his heedlessness, and that is the beginning of waking. A living heart notices when it drifts, and comes back. We are not asked to be in remembrance every moment, only never to forget to come back.']
      },
      quote: { ar: '«يَا حَنْظَلَةُ سَاعَةً وَسَاعَةً»', en: 'Meaning: Hanzala, a time for this and a time for that.', ref: 'صحيح مسلم (ترقيم sunnah.com: الكتاب 50، الحديث 15)، عن حنظلة الأسيدي', checked: CHK, verify: true },
      source: { ar: 'حديث في صحيح مسلم.', en: 'A hadith in Sahih Muslim.' }
    },
    pig: {
      id: 'pig-r8', companions: true, minutes: 3, ages: '9-14',
      title: { ar: 'فاطمة وعلي عليهما السلام: خير من خادم', en: 'Fatima and Ali, peace be upon them: better than a servant' },
      body: {
        ar: ['كانت السيدة فاطمة عليها السلام تطحن بالرحى بيدها حتى أثّرت في يدها. فلما جاء إلى النبي صلى الله عليه وآله وسلم أسرى، ذهبت تسأله خادمًا يعينها، فلم تجده.',
          'فجاءهما النبي صلى الله عليه وآله وسلم في الليل، وقد أخذا مضاجعهما، فأراد علي عليه السلام أن يقوم، فقال: «على مكانكما». وجلس بينهما.',
          'ثم قال: «ألا أعلّمكما خيرًا مما سألتماني؟». وعلّمهما أن يكبّرا أربعًا وثلاثين، ويسبّحا ثلاثًا وثلاثين، ويحمدا ثلاثًا وثلاثين عند النوم، وقال إنه خير لهما من خادم.',
          'كانت حاجتها حقيقية، وطلبها لم يكن خطأ. لكن البيت النبوي تعلّم أن القلب الذي يذكر الله يقوى على التعب، وأن الراحة ليست أول ما يُطلب. ونحن نرتاح حين نحتاج، ونبقى نحن الذين نقرر متى نقوم.'],
        en: ['Lady Fatima, peace be upon her, ground grain with a hand-mill until it marked her hand. When some captives were brought to the Prophet, peace and blessings be upon him and his family, she went to ask him for a servant to help her, but did not find him.',
          'The Prophet came to them at night, when they had already gone to bed. Ali, peace be upon him, started to get up, and the Prophet said: "Stay where you are." He sat down between them.',
          'Then he said, meaning: "Shall I not teach you something better than what you asked me for?" He taught them to say Allahu akbar thirty-four times, Subhan Allah thirty-three times and al-hamdu lillah thirty-three times at bedtime, and said it was better for them than a servant.',
          'Her need was real, and asking was not wrong. But the Prophet\'s household learned that a heart that remembers Allah grows strong against tiredness, and that comfort is not the first thing to ask for. We rest when we need to, and we are still the ones who decide when to get up.']
      },
      quote: { ar: '«أَلاَ أُعَلِّمُكُمَا خَيْرًا مِمَّا سَأَلْتُمَانِي»', en: 'Meaning: Shall I not teach you something better than what you asked me for?', ref: 'صحيح البخاري 3705، عن علي عليه السلام', checked: CHK, verify: true },
      source: { ar: 'حديث في صحيح البخاري، يرويه علي عليه السلام.', en: 'A hadith in Sahih al-Bukhari, narrated by Ali, peace be upon him.' }
    },
    monkey: {
      id: 'monkey-r8', companions: true, minutes: 3, ages: '9-14',
      title: { ar: 'خصلتان يحبهما الله', en: 'Two qualities Allah loves' },
      body: {
        ar: ['جاء وفد من قبيلة عبد القيس إلى المدينة ليلقوا النبي صلى الله عليه وآله وسلم، وكان فيهم رجل يُعرف بأشجّ عبد القيس رضي الله عنه.',
          'فقال له النبي صلى الله عليه وآله وسلم: «إن فيك خصلتين يحبهما الله: الحلم والأناة».',
          'الحلم أن تملك نفسك حين تغضب، فلا تسبق يدك ولا لسانك. والأناة أن تتمهل ولا تستعجل، فتفكر قبل أن تفعل.',
          'وهاتان الخصلتان هما عكس سمات الوسطى تمامًا: الاندفاع والعجلة. ولاحظ أن الله «يحبهما»، فالهدوء صفة يحبها الله في عباده.'],
        ar_f: ['جاء وفد من قبيلة عبد القيس إلى المدينة ليلقوا النبي صلى الله عليه وآله وسلم، وكان فيهم رجل يُعرف بأشجّ عبد القيس رضي الله عنه.',
          'فقال له النبي صلى الله عليه وآله وسلم: «إن فيك خصلتين يحبهما الله: الحلم والأناة».',
          'الحلم أن تملكي نفسك حين تغضبين، فلا تسبق يدك ولا لسانك. والأناة أن تتمهلي ولا تستعجلي، فتفكري قبل أن تفعلي.',
          'وهاتان الخصلتان هما عكس سمات الوسطى تمامًا: الاندفاع والعجلة. ولاحظي أن الله «يحبهما»، فالهدوء صفة يحبها الله في عباده.'],
        en: ['A delegation from the tribe of Abd al-Qays came to Madina to meet the Prophet, peace and blessings be upon him and his family. Among them was a man known as al-Ashajj of Abd al-Qays, may Allah be pleased with him.',
          'The Prophet said to him, meaning: "You have two qualities that Allah loves: forbearance and deliberateness."',
          'Forbearance is keeping hold of yourself when you are angry, so neither your hand nor your tongue gets ahead of you. Deliberateness is taking your time instead of rushing, so you think before you act.',
          'These two qualities are the exact opposite of the middle-finger trait: impulsiveness and haste. And notice that Allah "loves" them: calm is a quality Allah loves in His servants.']
      },
      quote: { ar: '«إِنَّ فِيكَ خَصْلَتَيْنِ يُحِبُّهُمَا اللَّهُ الْحِلْمُ وَالأَنَاةُ»', en: 'Meaning: You have two qualities that Allah loves: forbearance and deliberateness.', ref: 'صحيح مسلم (ترقيم sunnah.com: الكتاب 1، الحديث 25)، عن ابن عباس', checked: CHK, verify: true },
      source: { ar: 'حديث في صحيح مسلم.', en: 'A hadith in Sahih Muslim.' }
    },
    human: {
      id: 'human-r8', companions: true, minutes: 3, ages: '9-14',
      title: { ar: 'أبو بكر يفي بوعد غيره', en: 'Abu Bakr keeps someone else\'s promise' },
      body: {
        ar: ['قال النبي صلى الله عليه وآله وسلم لجابر بن عبد الله رضي الله عنه: لو جاء مال البحرين لأعطيتك منه كذا وكذا. ثم تُوفي النبي صلى الله عليه وآله وسلم قبل أن يأتي المال.',
          'فلما جاء مال البحرين، أمر أبو بكر رضي الله عنه مناديًا ينادي: «من كان له عند النبي صلى الله عليه وآله وسلم عِدَة أو دَين فليأتنا».',
          'فجاءه جابر وأخبره بالوعد، فأعطاه حفنة، فعدّها فإذا هي خمسمئة، فقال له: خذ مثليها.',
          'الوعد عند أبي بكر لم يكن كلامًا يُنسى. حفظ وعد النبي صلى الله عليه وآله وسلم بعد وفاته، وبحث عن صاحبه بنفسه. والسبابة أن تفي بوعدك الصغير، فكيف بمن يفي بوعد غيره؟'],
        en: ['The Prophet, peace and blessings be upon him and his family, told Jabir ibn Abdullah, may Allah be pleased with him: if the wealth from Bahrain comes, I will give you this much and this much. Then the Prophet passed away before the wealth arrived.',
          'When the wealth from Bahrain came, Abu Bakr, may Allah be pleased with him, had a caller announce: "Whoever was promised something by the Prophet, or is owed a debt by him, let him come to us."',
          'Jabir came and told him about the promise. Abu Bakr gave him a double handful; Jabir counted it and it was five hundred, and Abu Bakr told him: take twice as much again.',
          'For Abu Bakr, a promise was not words to be forgotten. He kept the Prophet\'s promise after his passing, and went looking for the person it was owed to. The index finger is keeping your own small promise; imagine keeping someone else\'s.']
      },
      quote: { ar: '«مَنْ كَانَ لَهُ عِنْدَ النَّبِيِّ صلى الله عليه وسلم عِدَةٌ أَوْ دَيْنٌ فَلْيَأْتِنَا»', en: 'Meaning: Whoever was promised something by the Prophet, or is owed a debt by him, let him come to us.', ref: 'صحيح البخاري 2296، عن جابر بن عبد الله', checked: CHK, verify: true },
      source: { ar: 'حديث في صحيح البخاري.', en: 'A hadith in Sahih al-Bukhari.' }
    },
    sabiq: {
      id: 'sabiq-r8', companions: true, minutes: 4, ages: '9-14',
      title: { ar: 'الضيف والسراج المطفأ', en: 'The guest and the lamp put out' },
      body: {
        ar: ['جاء رجل جائع إلى النبي صلى الله عليه وآله وسلم، فأرسل إلى بيوته فلم يجد فيها إلا الماء. فقال: «من يضيف هذا؟». فقال رجل من الأنصار رضي الله عنه: أنا.',
          'فذهب به إلى امرأته، فقالت: ما عندنا إلا قوت صبياننا. فاتفقا على خطة: تهيئ الطعام، وتنيّم الصبيان، ثم تقوم كأنها تصلح السراج فتطفئه.',
          'فجلسا مع الضيف في الظلام يريانه أنهما يأكلان، فأكل الضيف حتى شبع، وباتا جائعين. فلما أصبح الرجل قال له النبي صلى الله عليه وآله وسلم إن الله عجب من صنيعهما الليلة.',
          'ونزل فيهما: ﴿وَيُؤْثِرُونَ عَلَىٰ أَنْفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ﴾ (الحشر 59:9). هذا هو الإبهام: أن تقدّم غيرك على نفسك، وتخفي ذلك حتى لا يشعر الضيف بالحرج.'],
        en: ['A hungry man came to the Prophet, peace and blessings be upon him and his family, who sent word to his own homes and found nothing there but water. He asked: "Who will host this man?" A man of the Ansar, may Allah be pleased with him, said: I will.',
          'He took him home to his wife, who said: we have nothing but our children\'s food. So they made a plan: she would prepare the food, put the children to sleep, then get up as if to fix the lamp and put it out.',
          'They sat with the guest in the dark, letting him think they were eating, so the guest ate his fill while they went to bed hungry. In the morning the Prophet told the man that Allah had marvelled at what the two of them did that night.',
          'And about them it was revealed, meaning: "They prefer others over themselves, even though they are in need" (al-Hashr 59:9). That is the thumb: putting others before yourself, and hiding it so the guest feels no embarrassment.']
      },
      quote: { ar: '﴿وَيُؤْثِرُونَ عَلَىٰ أَنْفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ﴾', en: 'Meaning (not a translation): They prefer others over themselves, even though they are in need.', ref: 'الحشر 59:9؛ والقصة في صحيح البخاري 3798، عن أبي هريرة', checked: 'tanzil quran-simple, with diacritics (api.alquran.cloud); hadith-api (fawazahmed0)', verify: true },
      source: { ar: 'آية من القرآن الكريم، وقصتها في صحيح البخاري.', en: 'A verse of the Quran, with its story in Sahih al-Bukhari.' }
    }
  };

  var Q = {
    zombie: [{ id: 'zombie-q13', readingId: 'zombie-r8', type: 'comprehension', correct: 2,
      q: { ar: 'لماذا خاف حنظلة رضي الله عنه على نفسه؟', en: 'Why was Hanzala worried about himself?' },
      options: [{ ar: 'لأنه لم يكن يحضر مجلس النبي صلى الله عليه وآله وسلم', en: 'Because he did not attend the Prophet\'s gatherings' }, { ar: 'لأنه لا يحب أولاده', en: 'Because he did not love his children' }, { ar: 'لأنه لاحظ أنه ينسى حين ينشغل في بيته', en: 'Because he noticed he forgot when busy at home' }],
      why: { ar: 'كان قلبه حاضرًا في مجلس النبي صلى الله عليه وآله وسلم، فإذا رجع إلى بيته ولاعب الأولاد نسي كثيرًا. لاحظ ذلك في نفسه فخاف.', en: 'His heart was present when he sat with the Prophet (peace and blessings be upon him and his family), but back home, playing with the children, he forgot a great deal. He noticed this in himself, and it frightened him.' } }],
    pig: [{ id: 'pig-q12', readingId: 'pig-r8', type: 'comprehension', correct: 0,
      q: { ar: 'ماذا علّم النبي صلى الله عليه وآله وسلم فاطمة وعليًّا عليهما السلام بدل الخادم؟', en: 'What did the Prophet teach Fatima and Ali, peace be upon them, instead of a servant?' },
      options: [{ ar: 'التكبير والتسبيح والتحميد عند النوم', en: 'Saying Allahu akbar, Subhan Allah and al-hamdu lillah at bedtime' }, { ar: 'أن يتركا العمل في البيت', en: 'To stop working at home' }, { ar: 'أن يشتريا رحى جديدة', en: 'To buy a new hand-mill' }],
      why: { ar: 'الذكر قوة للقلب، وقال إنه خير لهما من خادم.', en: 'Remembrance strengthens the heart, and he said it was better for them than a servant.' } }],
    monkey: [{ id: 'monkey-q12', readingId: 'monkey-r8', type: 'comprehension', correct: 1,
      q: { ar: 'ما الخصلتان اللتان يحبهما الله في أشج عبد القيس؟', en: 'Which two qualities that Allah loves did al-Ashajj have?' },
      options: [{ ar: 'القوة والسرعة', en: 'Strength and speed' }, { ar: 'الحلم والأناة', en: 'Forbearance and deliberateness' }, { ar: 'المال والجاه', en: 'Wealth and status' }],
      why: { ar: 'الحلم والأناة عكس الاندفاع والعجلة، والله يحبهما.', en: 'Forbearance and deliberateness are the opposite of impulse and haste, and Allah loves them.' } }],
    human: [{ id: 'human-q12', readingId: 'human-r8', type: 'comprehension', correct: 2,
      q: { ar: 'لماذا نادى أبو بكر رضي الله عنه في الناس حين جاء مال البحرين؟', en: 'Why did Abu Bakr make an announcement when the wealth from Bahrain came?' },
      options: [{ ar: 'ليجمع المال لنفسه', en: 'To collect the wealth for himself' }, { ar: 'ليعرف كم عدد الناس', en: 'To count the people' }, { ar: 'ليفي بوعود النبي صلى الله عليه وآله وسلم وديونه', en: 'To keep the Prophet\'s promises and pay his debts' }],
      why: { ar: 'الوفاء بالوعد من السبابة، وأبو بكر وفى حتى بوعد غيره.', en: 'Keeping promises belongs to the index finger, and Abu Bakr kept even someone else\'s.' } }],
    sabiq: [{ id: 'sabiq-q13', readingId: 'sabiq-r8', type: 'comprehension', correct: 0,
      q: { ar: 'لماذا أطفأت المرأة الأنصارية السراج؟', en: 'Why did the Ansari woman put out the lamp?' },
      options: [{ ar: 'ليأكل الضيف ولا يرى أنهما لا يأكلان', en: 'So the guest could eat without seeing that they were not eating' }, { ar: 'لأن الزيت انتهى', en: 'Because the oil ran out' }, { ar: 'لأنها أرادت أن تنام', en: 'Because she wanted to sleep' }],
      why: { ar: 'الإيثار الخفي: قدّما الضيف على نفسيهما، وأخفيا ذلك ليبقى مرتاحًا.', en: 'Hidden preference: they put the guest first and hid it so he stayed at ease.' } }]
  };

  Object.keys(R).forEach(function (k) {
    S[k].readings.push(R[k]);
    Q[k].forEach(function (q) { S[k].quiz.push(q); });
  });
})();

/* ───────────── الجولة الثالثة عشرة، 18 نوفمبر 2026: محتوى كل عُقلة (درجة) ─────────────
 * في كل درجة حقول اختيارية: looks (كيف تبدو في اليوم)، story (مشهد صغير للأعمار 4 إلى 8، بأسماء خيالية)، step (الخطوة الواحدة إلى الدرجة التالية)، q (سؤال موقف بشكل أسئلة الاختبار).
 * الدرجة الأخيرة في كل إصبع تفتح باب الإصبع التالي. ar_f حيث يختلف النص فقط.
 */
window.AKHLAQ_DEG = function (k, list) {
  var S = window.AKHLAQ_CONTENT.stages[k];
  list.forEach(function (x, i) {
    var d = S.degrees[i];
    if (x.name) d.name = x.name; if (x.desc) d.desc = x.desc;
    d.looks = x.looks; d.story = x.story; d.step = x.step;
    if (x.turn) { d.turnName = x.turnName; d.turn = x.turn; d.turnVerify = !!x.turnVerify; }
    x.q.id = k + '-d' + (i + 1) + 'q'; x.q.type = 'situation';
    d.q = x.q;
  });
};

/* الخنصر: ثلاث سمات، ولكل سمة علاجها (step) وما تصير إليه حين تتحول إلى خير (turn) */
window.AKHLAQ_DEG('zombie', [
  {
    name: {"ar": "الغفلة", "en": "Heedlessness"},
    desc: {"ar": "يمرّ اليوم بين الشاشة والنوم، ولا يُذكر الله فيه، ولا يُحَسّ بالوقت.", "en": "The day slips by between screen and sleep, without remembering Allah or feeling the time pass."},
    looks: {"ar": "انغماس كامل في اللعب أو الشاشة: النداء لا يُسمع، والطعام لا يُتذوَّق.", "en": "Total absorption in a game or a screen: calls go unheard and food goes untasted."},
    story: {"ar": ["استيقظ يوسف، وأمسك الجهاز قبل أن يفتح عينيه جيدًا.", "أكل فطوره ولم يعرف ماذا أكل، ونادته أمه ثلاث مرات فلم يسمع.", "وفي المساء سأله أبوه: ماذا كان أجمل شيء اليوم؟ ففكّر طويلًا ولم يجد جوابًا."], "en": ["Yusuf woke up and grabbed the tablet before his eyes were properly open.", "He ate breakfast without knowing what he ate, and his mother called him three times but he did not hear.", "In the evening his father asked: what was the loveliest thing today? He thought for a long time and found no answer."]},
    step: {"ar": "قبل أن تمسك أي شاشة في الصباح، قل «الحمد لله» وانظر من النافذة.", "ar_f": "قبل أن تمسكي أي شاشة في الصباح، قولي «الحمد لله» وانظري من النافذة.", "en": "Before you touch any screen in the morning, say «al-hamdu lillah» and look out of the window."},
    turnName: {"ar": "التركيز والخشوع", "en": "Focus and khushu'"},
    turn: {"ar": "القدرة نفسها على الانغماس، إذا وُجّهت، تصير تركيزًا في التعلّم وخشوعًا في الصلاة.", "en": "The same power to be absorbed, once it is directed, becomes focus in learning and khushu' in prayer."},
    q: {"readingId": null, "correct": 1, "q": {"ar": "استيقظت صباحًا، والجهاز بجانب سريرك. ما أول شيء تفعله؟", "ar_f": "استيقظتِ صباحًا، والجهاز بجانب سريرك. ما أول شيء تفعلينه؟", "en": "You wake up and the tablet is next to your bed. What do you do first?"}, "options": [{"ar": "أفتح الجهاز فورًا", "en": "Turn the tablet on straight away"}, {"ar": "أقول «الحمد لله» وأنظر حولي", "en": "Say «al-hamdu lillah» and look around"}, {"ar": "أعود إلى النوم", "en": "Go back to sleep"}], "why": {"ar": "كلمة شكر واحدة توقظ القلب قبل أن تأخذه الشاشة.", "en": "One word of thanks wakes the heart before the screen takes it."}}
  },

  {
    name: {"ar": "الأذن المغلقة", "en": "The closed ear"},
    desc: {"ar": "تصل النصيحة إلى الأذن ثم تخرج من الأخرى، ولا تغيّر شيئًا.", "en": "Advice comes in one ear and goes out of the other, changing nothing."},
    looks: {"ar": "يقول «حسنًا» ويكمل ما كان يفعل، ثم يعود إلى الخطأ نفسه في الغد.", "en": "Says «okay», carries on, and is back at the same mistake the next day."},
    story: {"ar": ["قالت المعلمة لليلى: لا تتركي حقيبتك في الممر، قد يتعثر بها أحد.", "قالت ليلى: حسنًا، ثم تركتها في المكان نفسه في اليوم التالي.", "تعثر بها أخوها الصغير، فنظرت ليلى إلى الحقيبة وتذكرت: لقد سمعتُ هذا من قبل!"], "en": ["The teacher told Layla: don't leave your bag in the corridor, someone might trip over it.", "Layla said: okay, and left it in the same place the next day.", "Her little brother tripped over it, and Layla looked at the bag and remembered: I have heard this before!"]},
    step: {"ar": "حين ينصحك أحد، أعِد نصيحته بكلماتك، ثم افعلها مرة واحدة اليوم.", "ar_f": "حين ينصحك أحد، أعيدي نصيحته بكلماتك، ثم افعليها مرة واحدة اليوم.", "en": "When someone gives you advice, say it back in your own words, then do it once today."},
    turnName: {"ar": "الإعراض عن اللغو", "en": "Turning away from idle talk"},
    turn: {"ar": "الأذن التي تعرف كيف تُغلَق تستطيع أن تُغلَق عن الكلام السيئ واللغو، وتنفتح للنصيحة. قال الله تعالى: ﴿وَالَّذِينَ هُمْ عَنِ اللَّغْوِ مُعْرِضُونَ﴾ (المؤمنون 23:3).", "en": "An ear that knows how to close can close to bad and idle talk, and open to good advice. Allah says, in meaning: and those who turn away from idle talk (al-Mu'minun 23:3)."},
    turnVerify: true,
    q: {"readingId": null, "correct": 2, "q": {"ar": "قالت لك أمك: «أغلق الباب بهدوء». ماذا تفعل لتتأكد أنك سمعت حقًّا؟", "ar_f": "قالت لك أمك: «أغلقي الباب بهدوء». ماذا تفعلين لتتأكدي أنك سمعتِ حقًّا؟", "en": "Your mother says: «Close the door gently». What do you do to make sure you really heard?"}, "options": [{"ar": "أقول «حسنًا» وأكمل ما أفعل", "en": "Say «okay» and carry on"}, {"ar": "أغلقه بقوة كالعادة", "en": "Slam it as usual"}, {"ar": "أقول: «أغلقه بهدوء»، ثم أفعل", "en": "Say: «close it gently», then do it"}], "why": {"ar": "إعادة النصيحة بكلماتك تنقلها من الأذن إلى القلب.", "en": "Saying the advice back moves it from the ear to the heart."}}
  },

  {
    name: {"ar": "العادة العمياء", "en": "Blind habit"},
    desc: {"ar": "يتكرر الخطأ نفسه كل يوم دون سؤال: لماذا أفعل هذا؟", "en": "The same mistake repeats every day without asking: why am I doing this?"},
    looks: {"ar": "الأيام متشابهة: الشاشة نفسها، والتأخير نفسه، والنسيان نفسه، ولا وقفة.", "en": "Every day looks the same: the same screen, the same lateness, the same forgetting, and no pause."},
    story: {"ar": ["كل يوم بعد المدرسة، كان عمر يرمي حقيبته ويجلس أمام الشاشة حتى العشاء.", "وكل ليلة يتذكر واجبه متأخرًا، فيكتبه وهو نعسان، وتدمع عيناه من التعب.", "وفي يوم وقف عند الباب وسأل نفسه: لماذا أفعل هذا كل يوم؟ فجلس إلى واجبه أولًا، ونام تلك الليلة مرتاحًا."], "en": ["Every day after school, Omar dropped his bag and sat in front of the screen until dinner.", "And every night he remembered his homework too late, wrote it half asleep, and his eyes filled with tired tears.", "One day he stopped at the door and asked himself: why do I do this every day? He sat down to his homework first, and slept easily that night."]},
    step: {"ar": "اختر عادة سيئة واحدة، وضع مكانها عادة صالحة صغيرة تفعلها في الوقت نفسه كل يوم.", "en": "Pick one bad habit, and put a small good habit in its place, done at the same time every day.", "ar_f": "اختاري عادة سيئة واحدة، وضعي مكانها عادة صالحة صغيرة تفعلينها في الوقت نفسه كل يوم."},
    turnName: {"ar": "المداومة على الخير", "en": "Steadiness in good"},
    turn: {"ar": "قوة التكرار نفسها تصير مداومة على خير صغير. وأخبر النبي صلى الله عليه وآله وسلم أن أحب الأعمال إلى الله أدومها وإن قلّ (متفق عليه).", "en": "The same power of repetition becomes steadiness in a small good. The Prophet, peace and blessings be upon him and his family, told us that the deeds most loved by Allah are the most constant, even if small (Bukhari and Muslim)."},
    turnVerify: true,
    q: {"readingId": null, "correct": 1, "q": {"ar": "تعوّدتَ أن تؤجل واجبك كل يوم حتى الليل. ما أول خطوة للخروج من هذه العادة؟", "en": "You have got used to putting off your homework every day until night. What is the first step out of this habit?", "ar_f": "تعوّدتِ أن تؤجلي واجبك كل يوم حتى الليل. ما أول خطوة للخروج من هذه العادة؟"}, "options": [{"ar": "أقول: سأبدأ يومًا ما", "en": "Say: I'll start some day"}, {"ar": "أختار وقتًا ثابتًا للواجب، وأبدأ اليوم", "en": "Choose a fixed time for homework, and start today"}, {"ar": "أغضب من نفسي ثم أكمل كما أنا", "en": "Get cross with myself, then carry on the same"}], "why": {"ar": "العادة تُغلب بعادة: وقت ثابت لخير صغير، كل يوم.", "en": "A habit is beaten by a habit: a fixed time for a small good, every day."}}
  }
]);

/* البنصر: ثلاث سمات، ولكل سمة علاجها (step) وما تصير إليه حين تتحول إلى خير (turn) */
window.AKHLAQ_DEG('pig', [
  {
    name: {"ar": "«أنا أولًا»", "en": "\"Me first\""},
    desc: {"ar": "لا يُرى إلا ما أريد: الدور الأول، والمكان الأول، والطلب قبل الجميع.", "en": "Only what I want is seen: the first turn, the first place, asking before everyone."},
    looks: {"ar": "«أنا جئت أولًا!» في كل طابور ولعبة، والانزعاج إن لم تتحقق الرغبة فورًا.", "en": "«I came first!» in every queue and game, and upset if the wish is not met at once."},
    story: {"ar": ["كانت سارة تلعب بالأرجوحة، فجاءت طفلة صغيرة ووقفت تنتظر.", "أرادت سارة أن تكمل، وشعرت بشيء يقول: أنا جئت أولًا!", "لكنها توقفت، ونزلت، وقالت للطفلة: تفضلي. ثم انتظرت دورها بهدوء."], "en": ["Sara was on the swing when a little girl came and stood waiting.", "Sara wanted to keep going, and felt something inside say: I came first!", "But she stopped, got off, and said to the girl: here you go. Then she waited for her turn calmly."]},
    step: {"ar": "حين تشعر بـ«أنا أولًا» تشتد في صدرك، توقف ثانية واسأل: ماذا يريد غيري؟", "en": "When «me first» grows strong in your chest, stop for one second and ask: what does the other person want?", "ar_f": "حين تشعرين بـ«أنا أولًا» تشتد في صدرك، توقفي ثانية واسألي: ماذا يريد غيري؟"},
    turnName: {"ar": "التنافس في الخير", "en": "Competing in good"},
    turn: {"ar": "حب السبق نفسه يصير سبقًا إلى العطاء: أن أكون أول من يعطي، وأول من يساعد. قال الله تعالى: ﴿وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ﴾ (المطففين 83:26).", "en": "The same love of being first becomes being first to give and first to help. Allah says, in meaning: so for this let the competitors compete (al-Mutaffifin 83:26)."},
    turnVerify: true,
    q: {"readingId": null, "correct": 0, "q": {"ar": "أنت على الأرجوحة، وطفل صغير ينتظر، وتريد أن تكمل. ماذا تفعل؟", "en": "You are on the swing, a little child is waiting, and you want to keep going. What do you do?", "ar_f": "أنتِ على الأرجوحة، وطفل صغير ينتظر، وتريدين أن تكملي. ماذا تفعلين؟"}, "options": [{"ar": "أتوقف ثانية، وأمسك رغبتي، وأعطيه دوره", "en": "Stop for a second, hold my wish back, and give him his turn"}, {"ar": "أصرخ: أنا جئت أولًا!", "en": "Shout: I came first!"}, {"ar": "أتظاهر أني لم أره", "en": "Pretend I didn't see him"}], "why": {"ar": "ثانية واحدة تمسك فيها «أنا أولًا» تفتح عينك على غيرك.", "en": "One second of holding back «me first» opens your eyes to someone else."}}
  },

  {
    name: {"ar": "الشَّرَه", "en": "Greed"},
    desc: {"ar": "الرغبة في المزيد دائمًا: أكبر قطعة، والأكل حتى التعب.", "en": "Always wanting more: the biggest piece, eating until it hurts."},
    looks: {"ar": "اليد تسبق إلى الصحن، والعين على ما بقي قبل أن يفرغ الفم.", "en": "The hand reaches the plate first, and the eyes are on what is left before the mouth is empty."},
    story: {"ar": ["جاءت الفطائر ساخنة من الفرن، فركض آدم وأخذ أكبرها.", "ثم أخذ الثانية قبل أن تجلس أخته هدى.", "نظرت هدى إلى الصحن، فلم يبقَ إلا قطعة صغيرة محروقة."], "en": ["The pastries came hot out of the oven. Adam ran and grabbed the biggest one.", "Then he took a second before his sister Huda had even sat down.", "Huda looked at the plate: only one small burnt piece was left."]},
    step: {"ar": "قبل أن تأخذ، اسأل سؤالًا واحدًا: هل أخذ الجميع؟", "ar_f": "قبل أن تأخذي، اسألي سؤالًا واحدًا: هل أخذ الجميع؟", "en": "Before you take, ask one question: has everyone had some?"},
    turnName: {"ar": "الحرص على ما ينفع", "en": "Eagerness for what benefits"},
    turn: {"ar": "الرغبة القوية نفسها، إذا وُجّهت، تصير حرصًا على العلم والخير ورضا الله. وفي الحديث: «احرص على ما ينفعك» (رواه مسلم).", "en": "The same strong wanting, once it is directed, becomes eagerness for knowledge, for good and for Allah's pleasure. In the hadith: «Be eager for what benefits you» (Muslim)."},
    turnVerify: true,
    q: {"readingId": null, "correct": 2, "q": {"ar": "وُضعت الفطائر على المائدة، ولم تجلس أختك بعد. ماذا تفعل؟", "ar_f": "وُضعت الفطائر على المائدة، ولم تجلس أختك بعد. ماذا تفعلين؟", "en": "Pastries are on the table and your sister has not sat down yet. What do you do?"}, "options": [{"ar": "آخذ أكبر قطعة بسرعة", "en": "Quickly take the biggest piece"}, {"ar": "آخذ قطعتين", "en": "Take two pieces"}, {"ar": "أنتظر حتى تجلس ويأخذ الجميع", "en": "Wait until she sits and everyone takes"}], "why": {"ar": "سؤال «هل أخذ الجميع؟» أول خطوة خارج «أنا أولًا».", "en": "Asking «has everyone had some?» is the first step out of «me first»."}}
  },

  {
    name: {"ar": "الكسل", "en": "Laziness"},
    desc: {"ar": "تأجيل العمل وترك الثقيل للآخرين: أريح كرسي وأسهل عمل لي، ولا يُرى تعب الأم.", "en": "Putting work off and leaving the heavy jobs to others: the comfiest chair and the easiest job for me, without seeing how tired Mum is."},
    looks: {"ar": "جلوس مريح والأم تحمل الثقيل، و«بعد قليل» جواب كل طلب.", "en": "Sitting comfortably while Mum carries the heavy things, and «in a minute» is the answer to every request."},
    story: {"ar": ["كانت أم رَيّان تحمل سلة الغسيل الثقيلة، وريّان يلوّن.", "قال أبوه: ريّان، أمك تحتاج مساعدة. فقام فورًا وحمل طرف السلة.", "ثم سأل نفسه: لماذا لم أرَها قبل أن يقول أبي؟"], "en": ["Rayyan's mother was carrying the heavy laundry basket while Rayyan was colouring.", "His father said: Rayyan, your mother needs help. He got up at once and took one side of the basket.", "Then he asked himself: why didn't I see her before Dad said so?"]},
    step: {"ar": "كل ساعة، ارفع عينيك وانظر إلى وجوه من في البيت: هل فيها تعب؟", "ar_f": "كل ساعة، ارفعي عينيك وانظري إلى وجوه من في البيت: هل فيها تعب؟", "en": "Every hour, lift your eyes and look at the faces at home: is anyone tired?"},
    turnName: {"ar": "الإيثار", "en": "Putting others first"},
    turn: {"ar": "من يعرف طعم الراحة يعرف كم يحتاجها غيره، فيقدّم الكرسي المريح للكبير، ويحمل عن أمه. قال الله تعالى: ﴿وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ﴾ (الحشر 59:9).", "en": "Whoever knows how good rest feels knows how much others need it, so they give the comfy chair to an elder and carry the load for their mother. Allah says, in meaning: and they put others before themselves, even when they are in need (al-Hashr 59:9)."},
    turnVerify: true,
    q: {"readingId": null, "correct": 1, "q": {"ar": "أمك تحمل سلة ثقيلة، وأنت جالس مرتاح تلوّن. ماذا تفعل؟", "en": "Your mother is carrying a heavy basket while you sit comfortably colouring. What do you do?", "ar_f": "أمك تحمل سلة ثقيلة، وأنتِ جالسة مرتاحة تلوّنين. ماذا تفعلين؟"}, "options": [{"ar": "أكمل التلوين، فهي لم تطلب", "en": "Keep colouring, she didn't ask"}, {"ar": "أقوم وأحمل معها دون أن تطلب", "en": "Get up and carry it with her without being asked"}, {"ar": "أنتظر حتى يقول أبي", "en": "Wait until Dad says so"}], "why": {"ar": "من قام قبل أن يُطلب منه، بدأ يخرج من الكسل.", "en": "Whoever gets up before being asked has started to leave laziness behind."}}
  }
]);

/* الوسطى: ثلاث سمات، ولكل سمة علاجها (step) وما تصير إليه حين تتحول إلى خير (turn) */
window.AKHLAQ_DEG('monkey', [
  {
    name: {"ar": "التشتت", "en": "Scattered attention"},
    desc: {"ar": "القفز من شيء إلى شيء: عمل يبدأ ولا يتم، وسؤال لا يُنتظر جوابه.", "en": "Jumping from one thing to the next: work started and never finished, questions asked without waiting for the answer."},
    looks: {"ar": "لعبة تُترك لأخرى، وكتاب يُفتح ويُغلق، وحركة وقفز في مكان يحتاج إلى هدوء.", "en": "One game dropped for another, a book opened and shut, moving and jumping in a place that needs calm."},
    story: {"ar": ["بدأت هالة ترسم شجرة، ثم تركتها لتبني برجًا من المكعبات.", "ثم تركت البرج لتقفز على الكنبة، والمعلمة تشرح الدرس على الشاشة.", "وفي آخر اليوم نظرت حولها، فوجدت أشياء كثيرة بدأتها، ولم يكتمل منها شيء."], "en": ["Hala started drawing a tree, then left it to build a tower of blocks.", "Then she left the tower to jump on the sofa while the teacher was explaining the lesson on the screen.", "At the end of the day she looked around and saw many things she had started, and not one of them was finished."]},
    step: {"ar": "اختر عملًا واحدًا، ولا تبدأ غيره حتى تتمه، ولو كان صغيرًا.", "en": "Choose one task, and do not start another until it is finished, however small it is.", "ar_f": "اختاري عملًا واحدًا، ولا تبدئي غيره حتى تتمّيه، ولو كان صغيرًا."},
    turnName: {"ar": "المسارعة إلى الخير", "en": "Hastening to good"},
    turn: {"ar": "الخفة والحيوية نفسها، إذا اجتمعت على هدف، تصير نشاطًا ومسارعة إلى الخير. قال الله تعالى: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ﴾ (آل عمران 3:133).", "en": "The same quickness and energy, once gathered on one aim, become liveliness and hastening to good. Allah says, in meaning: and hasten to forgiveness from your Lord (Al 'Imran 3:133)."},
    turnVerify: true,
    q: {"readingId": null, "correct": 1, "q": {"ar": "تكتب واجبك، وسمعت أخاك يلعب في الغرفة الأخرى. ماذا تفعل؟", "en": "You are writing your homework and hear your brother playing in the next room. What do you do?", "ar_f": "تكتبين واجبك، وسمعتِ أخاك يلعب في الغرفة الأخرى. ماذا تفعلين؟"}, "options": [{"ar": "أركض إليه وأترك الواجب", "en": "Run to him and leave the homework"}, {"ar": "أتم الواجب أولًا، ثم ألعب", "en": "Finish the homework first, then play"}, {"ar": "أكتب سطرًا، وأقفز، ثم أعود", "en": "Write a line, jump up, then come back"}], "why": {"ar": "إتمام العمل الواحد أول علاج التشتت.", "en": "Finishing one task is the first cure for scattered attention."}}
  },

  {
    name: {"ar": "لا يسمع ولا يتوقف", "en": "Not listening, not stopping"},
    desc: {"ar": "الكلام يُقاطَع، وكلمة «توقف» لا تُسمع، والاندفاع يستمر حتى بعد الطلب.", "en": "Others are interrupted, the word «stop» goes unheard, and the rush carries on even after being asked."},
    looks: {"ar": "يُطلب منه التوقف مرة ومرتين، والحركة مستمرة، والرد يأتي قبل أن ينتهي الكلام.", "en": "Asked to stop once, then twice, and the movement goes on; the reply comes before the other person has finished."},
    story: {"ar": ["بنى بلال قلعة من الوسائد، فمرّ أخوه خالد وأسقط واحدة.", "صرخ بلال ورمى وسادة على خالد، ثم أخرى.", "قالت أمه: توقف يا بلال. لكنه لم يتوقف حتى بكى خالد."], "en": ["Bilal built a castle of cushions, and his brother Khalid walked past and knocked one down.", "Bilal shouted and threw a cushion at Khalid, then another.", "His mother said: stop, Bilal. But he did not stop until Khalid was crying."]},
    step: {"ar": "اتفق مع أهلك على كلمة «توقف»: حين تسمعها، جمّد يديك أولًا، ثم تكلم.", "ar_f": "اتفقي مع أهلك على كلمة «توقف»: حين تسمعينها، جمّدي يديك أولًا، ثم تكلمي.", "en": "Agree on the word «stop» with your family: when you hear it, freeze your hands first, then talk."},
    turnName: {"ar": "العزيمة والثبات", "en": "Resolve and steadiness"},
    turn: {"ar": "الاندفاع الذي لا يتوقف، إذا اتجه إلى الخير، يصير عزيمة تمضي حتى يتم الخير، وثباتًا لا يتركه عند أول تعب. قال الله تعالى: ﴿فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ﴾ (آل عمران 3:159).", "en": "The drive that will not stop, once it turns to good, becomes resolve that keeps going until the good is done, and steadiness that does not quit at the first tiredness. Allah says, in meaning: and once you have resolved, rely on Allah (Al 'Imran 3:159)."},
    turnVerify: true,
    q: {"readingId": null, "correct": 1, "q": {"ar": "أنت غاضب جدًا، وقال أبوك: «توقف». ماذا تفعل؟", "ar_f": "أنتِ غاضبة جدًا، وقال أبوك: «توقفي». ماذا تفعلين؟", "en": "You are very angry and your father says: «stop». What do you do?"}, "options": [{"ar": "أكمل لأنه هو الذي بدأ", "en": "Carry on, because he started it"}, {"ar": "أجمّد يديّ فورًا، ثم أشرح", "en": "Freeze my hands at once, then explain"}, {"ar": "أصرخ أعلى", "en": "Shout louder"}], "why": {"ar": "التوقف حين نسمع «توقف» هو أول مخرج من سمات الوسطى.", "en": "Stopping when we hear «stop» is the first way out of the middle-finger trait."}}
  },

  {
    name: {"ar": "الغضب السريع", "en": "Quick anger"},
    desc: {"ar": "فقدان الأعصاب: صوت يعلو، ويد تدفع، وحركة عنيفة.", "en": "Losing one's temper: a voice that rises, a hand that pushes, rough movement."},
    looks: {"ar": "صراخ عند أول إزعاج، ورفع اليد قبل أي كلمة.", "en": "Shouting at the first annoyance, and a raised hand before any word."},
    story: {"ar": ["غضبت آمنة حين أخذت صديقتها قلمها الأزرق، ورفعت يدها.", "قالت المعلمة: آمنة، توقفي. فتوقفت آمنة، وأنزلت يدها.", "وفي الطريق إلى البيت فكرت: لو توقفتُ قبل أن تقول المعلمة، لكان أجمل."], "en": ["Amina got angry when her friend took her blue pencil, and she raised her hand.", "The teacher said: Amina, stop. And Amina stopped and lowered her hand.", "On the way home she thought: it would have been even better if I had stopped before the teacher said so."]},
    step: {"ar": "حين تشعر بأول الغضب (حرارة في الوجه، أو قبضة في اليد)، غيّر مكانك وتنفّس ببطء ثلاث مرات.", "en": "When you feel anger starting (a hot face, a fist), change where you are and breathe slowly three times.", "ar_f": "حين تشعرين بأول الغضب (حرارة في الوجه، أو قبضة في اليد)، غيّري مكانك وتنفّسي ببطء ثلاث مرات."},
    turnName: {"ar": "الشجاعة في الحق", "en": "Courage for what is right"},
    turn: {"ar": "قوة الغضب، إذا ملكها صاحبها، تصير شجاعة في نصرة المظلوم، وقولًا للحق بهدوء. وقال النبي صلى الله عليه وآله وسلم: «ليس الشديد بالصُّرَعة، إنما الشديد الذي يملك نفسه عند الغضب» (متفق عليه).", "en": "The strength of anger, once it is mastered, becomes courage to stand up for the wronged and to say what is true, calmly. The Prophet, peace and blessings be upon him and his family, said: «The strong one is not the one who throws others down; the strong one is the one who masters himself when angry» (Bukhari and Muslim)."},
    turnVerify: true,
    q: {"readingId": null, "correct": 1, "q": {"ar": "دفعك طفل في الملعب، وشعرت بالغضب يصعد. ماذا تفعل؟", "en": "A child pushed you in the playground and you feel anger rising. What do you do?", "ar_f": "دفعك طفل في الملعب، وشعرتِ بالغضب يصعد. ماذا تفعلين؟"}, "options": [{"ar": "أدفعه أقوى منه", "en": "Push him back harder"}, {"ar": "أجلس وأتنفس، ثم أقول له بهدوء ما حدث", "en": "Sit and breathe, then tell him calmly what happened"}, {"ar": "أصرخ عليه أمام الجميع", "en": "Shout at him in front of everyone"}], "why": {"ar": "من ملك غضبه صار قويًّا حقًّا.", "en": "Whoever masters their anger has become truly strong."}}
  }
]);

/* السبابة */
window.AKHLAQ_DEG('human', [
  { looks: { ar: "يوم بلا أذى: لا ضرب، ولا سخرية، ولا كلمة تجرح.", en: "A day without harm: no hitting, no mocking, no wounding words." },
    story: { ar: ["ضحك الأولاد على حذاء زميلهم الجديد، وقالوا لزيد: قل معنا!", "سكت زيد، ولم يضحك.", "وفي الفسحة جلس بجانب زميله، وقال: هل تريد أن تلعب معنا؟"],
      en: ["The boys laughed at a new classmate's shoes and told Zayd: say it with us!", "Zayd kept quiet and did not laugh.", "At break he sat next to the new boy and said: do you want to play with us?"] },
    step: { ar: "قبل أن تتكلم أو تمد يدك، اسأل نفسك: هل يؤذي هذا أحدًا؟", ar_f: "قبل أن تتكلمي أو تمدي يدك، اسألي نفسك: هل يؤذي هذا أحدًا؟", en: "Before you speak or reach out your hand, ask yourself: will this hurt anyone?" },
    q: { readingId: null, correct: 1,
      q: { ar: "أصدقاؤك يضحكون على زميل، ويريدونك أن تضحك معهم. ماذا تفعل؟", ar_f: "صديقاتك يضحكن على زميلة، ويردن أن تضحكي معهن. ماذا تفعلين؟", en: "Your friends are laughing at a classmate and want you to join in. What do you do?" },
      options: [{ ar: "أضحك قليلًا حتى لا يغضبوا", ar_f: "أضحك قليلًا حتى لا يغضبن", en: "Laugh a little so they don't get upset" }, { ar: "لا أشارك، وأقترب من الزميل بلطف", ar_f: "لا أشارك، وأقترب من الزميلة بلطف", en: "Don't join in, and kindly go over to the classmate" }, { ar: "أضحك أعلى منهم", ar_f: "أضحك أعلى منهن", en: "Laugh louder than them" }],
      why: { ar: "أول السبابة ألّا يصل منك أذى، ولو بضحكة.", en: "The first index-finger degree is that no harm comes from you, not even a laugh." } } },

  { looks: { ar: "الواجبات تُؤدّى، والوعود تُحفظ، دون تذكير كل مرة.", en: "Duties get done and promises are kept, without a reminder every time." },
    story: { ar: ["وعدت مريم أمها أن ترتب ألعابها قبل العشاء.", "نادتها صديقتها لتلعب، فقالت: بعد أن أرتب، لأني وعدت.", "وحين جاءت أمها للعشاء، وجدت الغرفة مرتبة، ولم تقل كلمة تذكير واحدة."],
      en: ["Maryam promised her mother she would tidy her toys before dinner.", "Her friend called her to play, and she said: after I tidy up, because I promised.", "When her mother came in for dinner, the room was tidy, and she had not needed to say a single reminder."] },
    step: { ar: "اختر وعدًا صغيرًا تستطيع الوفاء به اليوم، وقله لأحد، ثم افعله.", ar_f: "اختاري وعدًا صغيرًا تستطيعين الوفاء به اليوم، وقوليه لأحد، ثم افعليه.", en: "Pick one small promise you can keep today, say it to someone, then do it." },
    q: { readingId: null, correct: 0,
      q: { ar: "وعدت أن ترتب غرفتك، وناداك صديقك لتلعب. ماذا تفعل؟", ar_f: "وعدتِ أن ترتبي غرفتك، ونادتك صديقتك لتلعبي. ماذا تفعلين؟", en: "You promised to tidy your room, and a friend calls you to play. What do you do?" },
      options: [{ ar: "أرتب أولًا لأني وعدت، ثم ألعب", en: "Tidy first because I promised, then play" }, { ar: "ألعب وأنسى الوعد", en: "Play and forget the promise" }, { ar: "أخبئ الألعاب تحت السرير", en: "Hide the toys under the bed" }],
      why: { ar: "حفظ الوعد الصغير دون تذكير هو قلب السبابة.", en: "Keeping a small promise without a reminder is the heart of the index finger." } } },

  { looks: { ar: "خطأ يقع، ثم اعتراف سريع: «أخطأتُ، آسف»، وإصلاح لما فسد. وهنا باب الإبهام: من رجع عن خطئه بدأ يسارع إلى الخير.", en: "A mistake happens, then a quick «I got it wrong, sorry», and putting right what was spoilt. This is the door to the thumb: whoever turns back from a mistake starts hurrying to good." },
    story: { ar: ["استعار زياد كتاب أخته، فتمزقت منه صفحة وهو يلعب.", "فكّر أن يعيده إلى مكانه ولا يقول شيئًا، فلن يعرف أحد.", "لكنه ذهب إليها وقال: أخطأتُ، تمزقت صفحة من كتابك، أنا آسف. ثم ألصقها معها بعناية، فابتسمت أخته وقالت: شكرًا لأنك صدقتني."],
      en: ["Ziyad borrowed his sister's book, and a page tore while he was playing.", "He thought of putting it back and saying nothing: nobody would know.", "But he went to her and said: I got it wrong, a page of your book tore, I'm sorry. Then he carefully taped it with her, and his sister smiled and said: thank you for telling me the truth."] },
    step: { ar: "إذا أخطأت، قل: «أخطأتُ، آسف»، وأصلح ما تستطيع، واستغفر الله كما استغفر أبونا آدم عليه السلام.", ar_f: "إذا أخطأتِ، قولي: «أخطأتُ، آسفة»، وأصلحي ما تستطيعين، واستغفري الله كما استغفر أبونا آدم عليه السلام.", en: "When you get something wrong, say «I got it wrong, sorry», put right what you can, and ask Allah's forgiveness as our father Adam, peace be upon him, did." },
    q: { readingId: null, correct: 1,
      q: { ar: "مزّقتَ صفحة من كتاب أختك دون قصد، ولم يرك أحد. ماذا تفعل؟", ar_f: "مزّقتِ صفحة من كتاب أختك دون قصد، ولم يرك أحد. ماذا تفعلين؟", en: "You tore a page of your sister's book by accident, and nobody saw. What do you do?" },
      options: [{ ar: "أعيده إلى مكانه ولا أقول شيئًا", en: "Put it back and say nothing" }, { ar: "أقول لها: أخطأتُ، وأصلحه معها", en: "Tell her: I got it wrong, and fix it with her" }, { ar: "أقول إن أخي هو الذي فعلها", en: "Say my brother did it" }],
      why: { ar: "الآدمي إذا أخطأ رجع، كما قال أبوانا آدم وحواء عليهما السلام: ﴿رَبَّنَا ظَلَمْنَا أَنفُسَنَا﴾ (الأعراف 7:23).", en: "A true human turns back after a mistake, as our parents Adam and Hawwa, peace be upon them, said, in meaning: our Lord, we have wronged ourselves (al-A'raf 7:23)." } } }
]);

/* الإبهام: درجتان، والثانية تفتح باب اليد اليمنى (مقترح) ونور القمة */
window.AKHLAQ_DEG('sabiq', [
  { looks: { ar: "عين ترى العمل الذي يحتاج أن يُعمل، ويد تسبق الطلب إليه.", en: "Eyes that see what needs doing, and hands that get there before anyone asks." },
    story: { ar: ["انتهى الضيوف من الطعام، وجلس الكبار يتحدثون.", "رأت نور الأكواب على الطاولة، فحملتها واحدًا واحدًا إلى المطبخ.", "لم تقل لأحد. وحين دخلت أمها المطبخ، وجدت الطاولة نظيفة، فدعت لها في سرها."],
      en: ["The guests had finished eating, and the grown-ups sat chatting.", "Noor saw the cups on the table and carried them one by one to the kitchen.", "She told nobody. When her mother came into the kitchen and found the table clear, she quietly made a du'a for her."] },
    step: { ar: "بعد أن تبادر بالخير، خذ بيد أحد معك: علّم أخاك أو صديقك خيرًا تعرفه.", ar_f: "بعد أن تبادري بالخير، خذي بيد أحد معك: علّمي أختك أو صديقتك خيرًا تعرفينه.", en: "Once you start the good yourself, take someone along: teach a brother, sister or friend a good thing you know." },
    q: { readingId: null, correct: 1,
      q: { ar: "رأيت أكواب الضيوف على الطاولة، ولم يطلب منك أحد شيئًا. ماذا تفعل؟", ar_f: "رأيتِ أكواب الضيوف على الطاولة، ولم يطلب منك أحد شيئًا. ماذا تفعلين؟", en: "You see the guests' cups on the table and nobody has asked you to do anything. What do you do?" },
      options: [{ ar: "أنتظر حتى يطلب مني أحد", en: "Wait until someone asks me" }, { ar: "أحملها إلى المطبخ بهدوء", en: "Quietly carry them to the kitchen" }, { ar: "أحملها وأطلب من الجميع أن يشكروني", en: "Carry them and ask everyone to thank me" }],
      why: { ar: "السابق يرى الخير ويسبق إليه، ولا ينتظر شكرًا.", en: "Someone racing to good sees it and gets there first, without waiting to be thanked." } } },

  { looks: { ar: "سباق إلى الخير، ويد ممدودة لغيره ليصعد معه. وهنا الباب إلى اليد اليمنى، والنور فوقها: نور الهداية التي أتى بها الأنبياء عليهم السلام، وبنورهم ورسالاتهم يُهتدى.", en: "Racing to good, with a hand held out so others can climb too. This is the door to the right hand, with the light above it: the light of guidance the prophets, peace be upon them, brought; by their light and their messages we are guided." },
    story: { ar: ["تعلّم خالد أن يقول «بسم الله» قبل الأكل، فصار يذكّر أخاه الصغير بلطف كل يوم.", "وفي يوم نسي خالد نفسه، فقال له أخوه الصغير: بسم الله يا خالد!", "ضحك خالد وقال: صرتَ تسبقني! وفرح، لأن الخير الذي علّمه صار يعود إليه."],
      en: ["Khalid learned to say «Bismillah» before eating, and began gently reminding his little brother every day.", "One day Khalid forgot himself, and his little brother said: Bismillah, Khalid!", "Khalid laughed and said: now you're ahead of me! And he was glad, because the good he had taught was coming back to him."] },
    step: { ar: "إلى القمة: اختر خلقًا واحدًا من أخلاق النبي صلى الله عليه وآله وسلم، وعِشه يومًا كاملًا، وتذكّر أنك تحتاج الهداية كل يوم.", ar_f: "إلى القمة: اختاري خلقًا واحدًا من أخلاق النبي صلى الله عليه وآله وسلم، وعيشيه يومًا كاملًا، وتذكّري أنك تحتاجين الهداية كل يوم.", en: "Towards the summit: choose one quality of the Prophet, peace and blessings be upon him and his family, live it for a whole day, and remember that you need guidance every day." },
    q: { readingId: null, correct: 0,
      q: { ar: "صرت تفعل الخير من نفسك، وأخوك الصغير يراك. كيف تصعد معه؟", ar_f: "صرتِ تفعلين الخير من نفسك، وأخوك الصغير يراكِ. كيف تصعدين معه؟", en: "You now do good on your own, and your little brother is watching. How do you climb together?" },
      options: [{ ar: "أعلّمه الخير بلطف وأفرح حين يسبقني", en: "Teach him the good gently and be glad when he gets ahead of me" }, { ar: "أقول له إنه لن يصل إلى درجتي", en: "Tell him he will never reach my degree" }, { ar: "أخفي عنه ما أعرف", en: "Keep what I know from him" }],
      why: { ar: "السابق يأخذ بيد غيره، ولا يغترّ بما وصل إليه.", en: "Someone racing to good takes others by the hand, and is never proud of how far they have come." } } }
]);
/* مهام متدرجة لكل سمة (22 نوفمبر 2026): الخطوة الأولى هي step، ثم «سبعة أيام» (week)، ثم «عادة ثابتة» (habit) */
(function () {
  var T = {
    zombie: [
      { week: { ar: "قبل النوم اذكر شيئًا واحدًا جميلًا حدث اليوم، واشكر الله عليه.", ar_f: "قبل النوم اذكري شيئًا واحدًا جميلًا حدث اليوم، واشكري الله عليه.", en: "Before sleep, name one lovely thing that happened today and thank Allah for it." },
        habit: { ar: "اجعل لك كل يوم ربع ساعة بلا شاشة، تقرأ فيها أو تذكر الله أو تتأمل، حتى تصير عادة لا تتركها.", ar_f: "اجعلي لكِ كل يوم ربع ساعة بلا شاشة، تقرئين فيها أو تذكرين الله أو تتأملين، حتى تصير عادة لا تتركينها.", en: "Keep a screen-free quarter of an hour every day to read, remember Allah or reflect, until it becomes a habit you keep." } },
      { week: { ar: "اسأل كل يوم أحد أهلك «ما الذي تحب أن أحسّنه؟»، واستمع حتى ينتهي دون أن تقاطعه.", ar_f: "اسألي كل يوم أحد أهلك «ما الذي تحب أن أحسّنه؟»، واستمعي حتى ينتهي دون أن تقاطعيه.", en: "Each day, ask someone in your family \"what would you like me to improve?\" and listen to the end without interrupting." },
        habit: { ar: "كلما سمعت كلامًا لا خير فيه (سخرية أو غيبة أو لغو)، أعرض عنه بهدوء وانشغل بما ينفع.", ar_f: "كلما سمعتِ كلامًا لا خير فيه (سخرية أو غيبة أو لغو)، أعرضي عنه بهدوء وانشغلي بما ينفع.", en: "Whenever you hear talk with no good in it (mockery, backbiting, idle chatter), calmly turn away and get busy with something useful." } },
      { week: { ar: "افعل العادة الصالحة التي اخترتها، وضع علامة في ورقة كل يوم.", ar_f: "افعلي العادة الصالحة التي اخترتِها، وضعي علامة في ورقة كل يوم.", en: "Do the good habit you chose, and tick a sheet of paper each day." },
        habit: { ar: "داوم على عادتك الصالحة شهرًا ولو كانت صغيرة، فقد قال النبي صلى الله عليه وآله وسلم: «أحبّ الأعمال إلى الله أدومها وإن قلّ».", ar_f: "داومي على عادتك الصالحة شهرًا ولو كانت صغيرة، فقد قال النبي صلى الله عليه وآله وسلم: «أحبّ الأعمال إلى الله أدومها وإن قلّ».", en: "Keep up your good habit for a month, however small. The Prophet, peace and blessings be upon him and his family, said: \"The deeds most loved by Allah are the most constant, even if they are small.\"" } }
    ],
    pig: [
      { week: { ar: "اترك الدور الأول لغيرك مرة كل يوم (في الطابور، أو اللعب، أو اختيار البرنامج).", ar_f: "اتركي الدور الأول لغيرك مرة كل يوم (في الطابور، أو اللعب، أو اختيار البرنامج).", en: "Once a day, let someone else go first (in a queue, a game, or choosing what to watch)." },
        habit: { ar: "اجعل سباقك في الخير لا في الأخذ: كن أول من يساعد، وأول من يسلّم، وأول من يعتذر.", ar_f: "اجعلي سباقك في الخير لا في الأخذ: كوني أول من يساعد، وأول من يسلّم، وأول من يعتذر.", en: "Race in good, not in taking: be the first to help, the first to greet, the first to apologise." } },
      { week: { ar: "خذ نصيبك من الطعام مرة واحدة، ولا تعد للزيادة حتى تتأكد أن الجميع أخذ.", ar_f: "خذي نصيبك من الطعام مرة واحدة، ولا تعودي للزيادة حتى تتأكدي أن الجميع أخذ.", en: "Take your share of food once, and do not go back for more until you are sure everyone has had some." },
        habit: { ar: "حوّل حرصك إلى ما ينفع: كل يوم احرص على شيء نافع واحد، صفحة تقرؤها، أو آية تحفظها، أو مهارة تتدرب عليها.", ar_f: "حوّلي حرصك إلى ما ينفع: كل يوم احرصي على شيء نافع واحد، صفحة تقرئينها، أو آية تحفظينها، أو مهارة تتدربين عليها.", en: "Turn your eagerness to what benefits: each day, be eager for one useful thing, a page to read, a verse to memorise, or a skill to practise." } },
      { week: { ar: "أنجز عملًا واحدًا في البيت كل يوم قبل أن يُطلب منك (ترتيب، أو مساعدة في الطعام، أو حمل شيء).", ar_f: "أنجزي عملًا واحدًا في البيت كل يوم قبل أن يُطلب منكِ (ترتيب، أو مساعدة في الطعام، أو حمل شيء).", en: "Do one job at home each day before anyone asks (tidying, helping with food, carrying something)." },
        habit: { ar: "اجعل لك عملًا ثابتًا تخدم به أهلك كل يوم، وقدّم راحتهم على راحتك.", ar_f: "اجعلي لكِ عملًا ثابتًا تخدمين به أهلك كل يوم، وقدّمي راحتهم على راحتك.", en: "Keep one fixed daily job by which you serve your family, and put their rest before your own." } }
    ],
    monkey: [
      { week: { ar: "أتمّ كل يوم عملًا واحدًا كاملًا دون أن تفتح شاشة أو تنتقل إلى غيره، واكتب ما أتممت.", ar_f: "أتمّي كل يوم عملًا واحدًا كاملًا دون أن تفتحي شاشة أو تنتقلي إلى غيره، واكتبي ما أتممتِ.", en: "Finish one whole task each day without opening a screen or switching to something else, and write down what you finished." },
        habit: { ar: "حين يخطر لك خير، ابدأ به فورًا قبل أن يشغلك شيء آخر: صلاة في وقتها، أو مساعدة، أو كلمة طيبة.", ar_f: "حين يخطر لكِ خير، ابدئي به فورًا قبل أن يشغلكِ شيء آخر: صلاة في وقتها، أو مساعدة، أو كلمة طيبة.", en: "When a good deed comes to mind, start it at once before anything else distracts you: a prayer on time, a helping hand, a kind word." } },
      { week: { ar: "حين تسمع «توقف» أو يناديك أحد، توقف من أول مرة، وعُدّ كم مرة نجحت.", ar_f: "حين تسمعين «توقف» أو يناديكِ أحد، توقفي من أول مرة، وعُدّي كم مرة نجحتِ.", en: "When you hear \"stop\" or someone calls you, stop the first time, and count how often you managed." },
        habit: { ar: "اختر أمرًا صعبًا قليلًا تعزم عليه (حفظ سورة قصيرة، أو تمرين)، واثبت عليه كل يوم حتى تتمه.", ar_f: "اختاري أمرًا صعبًا قليلًا تعزمين عليه (حفظ سورة قصيرة، أو تمرين)، واثبتي عليه كل يوم حتى تتمّيه.", en: "Pick something a little hard to resolve on (memorising a short surah, an exercise), and stick with it every day until it is done." } },
      { week: { ar: "تذكّر كل مساء موقفًا أغضبك، وقل ماذا ستفعل لو تكرر، ثم جرّبه حين يتكرر.", ar_f: "تذكّري كل مساء موقفًا أغضبكِ، وقولي ماذا ستفعلين لو تكرر، ثم جرّبيه حين يتكرر.", en: "Each evening recall a moment that angered you, say what you will do if it happens again, then try it when it does." },
        habit: { ar: "املك نفسك عند الغضب، واجعل قوتك في قول الحق بهدوء ونصرة المظلوم. قال النبي صلى الله عليه وآله وسلم: «ليس الشديد بالصُّرَعة، إنما الشديد الذي يملك نفسه عند الغضب».", ar_f: "املكي نفسك عند الغضب، واجعلي قوتكِ في قول الحق بهدوء ونصرة المظلوم. قال النبي صلى الله عليه وآله وسلم: «ليس الشديد بالصُّرَعة، إنما الشديد الذي يملك نفسه عند الغضب».", en: "Master yourself in anger, and put your strength into speaking the truth calmly and standing up for the wronged. The Prophet, peace and blessings be upon him and his family, said: \"The strong one is not the one who overpowers others; the strong one is he who controls himself when angry.\"" } }
    ],
    human: [
      { week: { ar: "لا تؤذِ أحدًا بكلمة ولا بيد، وإن أخطأت فاعتذر في الحال وابدأ العدّ من جديد.", ar_f: "لا تؤذي أحدًا بكلمة ولا بيد، وإن أخطأتِ فاعتذري في الحال وابدئي العدّ من جديد.", en: "Hurt no one by word or hand; if you slip, apologise at once and start counting again." },
        habit: { ar: "اجعل كفّ الأذى طبعًا فيك، فقد قال النبي صلى الله عليه وآله وسلم: «المسلم من سلم المسلمون من لسانه ويده».", ar_f: "اجعلي كفّ الأذى طبعًا فيكِ، فقد قال النبي صلى الله عليه وآله وسلم: «المسلم من سلم المسلمون من لسانه ويده».", en: "Make holding back harm part of your nature. The Prophet, peace and blessings be upon him and his family, said: \"The Muslim is the one from whose tongue and hand the Muslims are safe.\"" } },
      { week: { ar: "أدِّ واجباتك كل يوم (الصلاة، والدرس، وترتيب أغراضك) في وقتها دون تذكير.", ar_f: "أدّي واجباتكِ كل يوم (الصلاة، والدرس، وترتيب أغراضكِ) في وقتها دون تذكير.", en: "Do your duties each day (prayer, homework, tidying your things) on time, without reminders." },
        habit: { ar: "اجعل لواجباتك اليومية جدولًا ثابتًا، والتزم به حتى يصير أداء الواجب سهلًا عليك.", ar_f: "اجعلي لواجباتكِ اليومية جدولًا ثابتًا، والتزمي به حتى يصير أداء الواجب سهلًا عليكِ.", en: "Give your daily duties a fixed timetable, and keep to it until doing your duty comes easily." } },
      { week: { ar: "راجع يومك كل مساء، فإن وجدت خطأ فأصلحه أو اعتذر عنه في الغد.", ar_f: "راجعي يومكِ كل مساء، فإن وجدتِ خطأ فأصلحيه أو اعتذري عنه في الغد.", en: "Review your day each evening; if you find a mistake, fix it or apologise for it the next day." },
        habit: { ar: "اجعل الاستغفار ومحاسبة النفس كل ليلة عادة لا تتركها، كما تاب أبونا آدم عليه السلام فتاب الله عليه.", ar_f: "اجعلي الاستغفار ومحاسبة النفس كل ليلة عادة لا تتركينها، كما تاب أبونا آدم عليه السلام فتاب الله عليه.", en: "Make asking forgiveness and reviewing yourself each night a habit you keep, as our father Adam, peace be upon him, repented and Allah accepted his repentance." } }
    ],
    sabiq: [
      { week: { ar: "بادر كل يوم بخير لم يطلبه منك أحد، ولا تخبر به أحدًا.", ar_f: "بادري كل يوم بخير لم يطلبه منكِ أحد، ولا تخبري به أحدًا.", en: "Start one good deed each day that nobody asked of you, and tell no one about it." },
        habit: { ar: "اجعل لك خيرًا خفيًا ثابتًا (صدقة صغيرة، أو دعاء لغيرك، أو خدمة) تداوم عليه بينك وبين الله.", ar_f: "اجعلي لكِ خيرًا خفيًا ثابتًا (صدقة صغيرة، أو دعاء لغيرك، أو خدمة) تداومين عليه بينكِ وبين الله.", en: "Keep a steady hidden good deed (a small charity, a prayer for others, a service) between you and Allah." } },
      { week: { ar: "ادعُ كل يوم أحد إخوتك أو أصدقائك إلى خير تفعلانه معًا.", ar_f: "ادعي كل يوم إحدى أخواتك أو صديقاتك إلى خير تفعلانه معًا.", en: "Invite a sibling or friend each day to a good deed you do together." },
        habit: { ar: "كن عونًا ثابتًا لغيرك على الخير: مشروع خير صغير مع أهلك أو أصحابك تستمرون فيه.", ar_f: "كوني عونًا ثابتًا لغيرك على الخير: مشروع خير صغير مع أهلك أو صاحباتك تستمرون فيه.", en: "Be a steady helper of others in good: a small good project with your family or friends that you keep going." } }
    ]
  };
  Object.keys(T).forEach(function (k) {
    var ds = window.AKHLAQ_CONTENT.stages[k].degrees;
    T[k].forEach(function (x, i) { if (ds[i]) { ds[i].week = x.week; ds[i].habit = x.habit; } });
  });
})();

delete window.AKHLAQ_DEG;

/* ───────────── جولة الاختبار، 18 نوفمبر 2026: صيغة المؤنث لفضائل اليد اليمنى ─────────────
 * الأحزاب 33:35 نفسها تذكر الصفة بالمذكر والمؤنث («الصابرين والصابرات»)، فللفضيلة اسم مؤنث في ملف البنت.
 * ar_f للاسم والوصف وعنوان القراءة. متن القراءة وصف عام بالغائب فلا يتغير.
 */
(function () {
  var V = {
    'v-muslim': ['المسلمة', 'تسلّم أمرها لله، وتؤدي الفرائض، ويسلم الناس من أذاها.', 'المسلمة: الناس في أمان منكِ'],
    'v-mumin': ['المؤمنة', 'تصدّق بقلبها، فتطمئن إلى الله في الخوف والفرح.', 'المؤمنة: قلب مطمئن'],
    'v-qanit': ['القانتة', 'تداوم على الطاعة بخشوع وهدوء، لا مرة وتترك.', 'القانتة: خير لا ينقطع'],
    'v-sadiq': ['الصادقة', 'تقول الحق ولو على نفسها، ويطابق فعلها قولها.', 'الصادقة: كلامي مثل فعلي'],
    'v-sabir': ['الصابرة', 'تصبر على الطاعة، وعن الغضب والرغبة، وعلى ما يؤلمها.', 'الصابرة: أنتظر وأحتمل'],
    'v-khashi': ['الخاشعة', 'قلبها حاضر في صلاتها، متواضعة مع الناس.', 'الخاشعة: قلبي حاضر'],
    'v-mutasaddiq': ['المتصدّقة', 'تعطي من مالها ووقتها وابتسامتها، فكل معروف صدقة.', 'المتصدّقة: يدي تعطي'],
    'v-saim': ['الصائمة', 'تملك نفسها عن الطعام والكلام السيئ، فتقوى على الخير.', 'الصائمة: أملك نفسي'],
    'v-hafiz': ['العفيفة الحيية', 'تحفظ نفسها وجسدها، وتستحيي من الله ومن الناس. (صياغة الآية «والحافظات» قُدّمت للأطفال بلفظ العفة والحياء.)', 'العفيفة الحيية: أحفظ نفسي'],
    'v-dhakir': ['الذاكرة الله كثيرًا', 'لسانها وقلبها مع الله في يومها كله، وهي أبعد الناس عن الغفلة.', 'الذاكرة: الله في قلبي طوال اليوم'],
    'v-salih': ['الصالحة', 'صلح ظاهرها وباطنها، فصار خيرها ثابتًا.', 'الصالحة: خير ثابت'],
    'v-shahid': ['الشهيدة', 'تشهد بالحق وتقوم به بين الناس، ومنه معنى ﴿لِتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ﴾ (البقرة 2:143).', 'الشهيدة: أشهد بالحق'],
    'v-siddiq': ['الصدّيقة', 'كمُل صدقها في القول والعمل والحال، كما وُصف إبراهيم ومريم عليهما السلام.', 'الصدّيقة: صدق كامل'],
    'v-muqarrab': ['المقرّبة', 'من السابقين السابقين، قريبة من الله بسبقها إلى الخير.', 'المقرّبة: أسبق إلى الخير']
  };
  window.AKHLAQ_CONTENT.virtues.forEach(function (v) {
    var f = V[v.id]; if (!f) return;
    v.name.ar_f = f[0]; v.desc.ar_f = f[1];
    if (v.reading && v.reading.title) v.reading.title.ar_f = f[2];
  });
})();

/* ───────────── قصص تختار فيها / Choice stories (22 Nov 2026) ─────────────
 * Shape (checked by tests/smoke.mjs): { id, stage, trait (degree index), age, title, intro: {ar:[…], en:[…]}, q (with ar_f),
 *   opts: [ { t, out, why, weak? } ] (2-3; weak marks the weaker outcome, shown with "try the other choice"), end }.
 * A story is recorded as read when its ending is reached; the first choice is kept. All characters are fictional. */
window.AKHLAQ_CONTENT.choices = [
  {
    id: "ch-zombie-1", stage: "zombie", trait: 0, age: "all",
    title: { ar: "الأذان والحلقة الأخيرة", en: "The adhan and the last episode" },
    intro: {
      ar: ["كان رامي يشاهد الحلقة الأخيرة من مسلسله المفضل، والبطل على وشك أن يكشف السر الكبير.", "فجأة ارتفع أذان المغرب من المسجد القريب. قام أبوه يتوضأ، ونادى: «يا رامي، الصلاة».", "في الحلقة عشر دقائق باقية، والشاشة تعرض زرًا صغيرًا: «الحلقة التالية بعد 5 ثوانٍ»."],
      en: ["Rami was watching the last episode of his favourite series, and the hero was about to reveal the big secret.", "Suddenly the Maghrib adhan rose from the mosque nearby. His father got up to make wudu and called, “Rami, prayer.”", "Ten minutes of the episode were left, and the screen showed a little button: “Next episode in 5 seconds.”"]
    },
    q: { ar: "لو كنتَ مكان رامي، ماذا تفعل؟", ar_f: "لو كنتِ مكان رامي، ماذا تفعلين؟", en: "If you were Rami, what would you do?" },
    opts: [
      { t: { ar: "أوقف الحلقة، وأقوم إلى الصلاة مع أبي.", en: "Pause the episode and go to pray with Dad." },
        out: { ar: "صلّى رامي بجانب أبيه، وسمع الإمام يقرأ آية لم ينتبه لها من قبل. ثم عاد، فوجد الحلقة تنتظره حيث تركها.", en: "Rami prayed beside his father and heard the imam recite a verse he had never noticed before. Then he came back, and the episode was waiting exactly where he had left it." },
        why: { ar: "الشاشة تنتظر، أما وقت الصلاة فلا ينتظر أحدًا.", en: "The screen can wait; prayer time waits for no one." } },
      { t: { ar: "أكمل الحلقة أولًا، ثم أصلي.", en: "Finish the episode first, then pray." }, weak: true,
        out: { ar: "انتهت الحلقة، فبدأت التالية وحدها بعد خمس ثوانٍ. ورفع رامي رأسه بعد قليل فإذا الظلام قد نزل، وأبوه قد رجع من المسجد، وفي صدره ثقل لا يعرف سببه.", en: "The episode ended and the next one started by itself five seconds later. When Rami looked up, it was dark, his father was back from the mosque, and he felt a heaviness he couldn't explain." },
        why: { ar: "«بعد قليل» تكبر وحدها حين نتركها للشاشة.", en: "“In a minute” grows by itself when we leave it to the screen." } },
      { t: { ar: "أطفئ الجهاز، وأطلب من أبي أن نكمل الحلقة معًا بعد الصلاة.", en: "Switch it off and ask Dad to watch the rest together after prayer." },
        out: { ar: "ضحك أبوه وقال: «اتفقنا». صلّيا معًا، ثم جلسا يشاهدان النهاية، وكان السر الكبير أجمل وهما معًا.", en: "His father laughed and said, “Deal.” They prayed together, then sat down to watch the ending, and the big secret was even better shared." },
        why: { ar: "حين نوقف الشاشة بأيدينا، نكون نحن من يقرر.", en: "When we stop the screen with our own hands, we are the ones deciding." } }
    ],
    end: { ar: "الشاشات مصنوعة لتأخذ انتباهنا دقيقة بعد دقيقة. ولمسة واحدة على زر الإيقاف تعيد القلب إلى ما يهمه.", en: "Screens are made to take our attention one minute after another. One touch of the pause button brings the heart back to what matters." }
  },
  {
    id: "ch-pig-1", stage: "pig", trait: 0, age: "4-8",
    title: { ar: "آخر قطعة كعك", en: "The last piece of cake" },
    intro: {
      ar: ["في عيد ميلاد الجدة صنعت الأم كعكة بالشوكولاتة. أكلت ليلى قطعتين، وكانت لذيذة جدًا.", "بقيت في الصحن قطعة واحدة. ونظرت ليلى إلى أخيها الصغير يوسف، فإذا هو لم يأكل شيئًا بعد، لأنه كان يساعد جده في ترتيب الكراسي.", "مدّت ليلى يدها نحو الصحن."],
      en: ["For Grandma's birthday, Mum made a chocolate cake. Layla had two pieces, and they were delicious.", "One piece was left on the plate. Layla looked at her little brother Yusuf: he hadn't had any yet, because he had been helping Grandpa set out the chairs.", "Layla reached toward the plate."]
    },
    q: { ar: "لو كنتَ مكان ليلى، ماذا تفعل؟", ar_f: "لو كنتِ مكان ليلى، ماذا تفعلين؟", en: "If you were Layla, what would you do?" },
    opts: [
      { t: { ar: "آخذ القطعة بسرعة قبل أن يراها أحد.", en: "Grab the piece quickly before anyone sees." }, weak: true,
        out: { ar: "أكلت ليلى القطعة الثالثة، فلم تجد لها طعم الأولى. ثم جاء يوسف إلى الصحن فوجده فارغًا، فسكت ونظر إليها.", en: "Layla ate the third piece, and it didn't taste like the first. Then Yusuf came to the plate, found it empty, said nothing, and looked at her." },
        why: { ar: "القطعة الزائدة لا تُشبع، ونظرة الأخ تبقى.", en: "The extra piece doesn't fill you; your brother's look stays with you." } },
      { t: { ar: "أقسمها نصفين بيني وبين يوسف.", en: "Cut it in half, one for me and one for Yusuf." },
        out: { ar: "فرح يوسف بنصيبه وقال: «شكرًا يا ليلى، كنت جائعًا جدًا».", en: "Yusuf was delighted with his half and said, “Thank you, Layla, I was so hungry.”" },
        why: { ar: "النصف الذي تقسمه بيدك أطيب من قطعة كاملة تأخذها وحدك.", en: "Half you share tastes better than a whole you keep." } },
      { t: { ar: "أحمل القطعة كلها إلى يوسف.", en: "Carry the whole piece to Yusuf." },
        out: { ar: "حملت ليلى الصحن إلى يوسف. تعجّب، ثم قسمها هو نصفين وقال: «تعالي نأكلها معًا». ورأت الجدة ذلك فابتسمت.", en: "Layla carried the plate to Yusuf. He was surprised, then cut it in two himself: “Come, let's eat it together.” Grandma saw and smiled." },
        why: { ar: "من يسبق إلى العطاء يربح مرتين.", en: "Whoever races to give wins twice." } }
    ],
    end: { ar: "النفس تقول دائمًا: «أنا أولًا». فمن سبق إلى الصحن ثم أعطى، صار سباقه إلى العطاء.", en: "The self always says “me first”. Whoever reaches the plate first and then gives has turned the race into a race to give." }
  },
  {
    id: "ch-monkey-1", stage: "monkey", trait: 2, age: "all",
    title: { ar: "البرج الذي سقط", en: "The tower that fell" },
    intro: {
      ar: ["قضى عمر ساعة كاملة يبني برجًا عاليًا من المكعبات، أعلى من أي برج بناه من قبل.", "دخل أخوه الصغير زياد راكضًا وراء الكرة، فاصطدم بالبرج، فانهار كله على الأرض.", "شعر عمر بالحرارة تصعد إلى وجهه، وانقبضت يداه."],
      en: ["Omar spent a whole hour building a tall tower of blocks, taller than any he had built before.", "His little brother Ziyad ran in chasing a ball, bumped into the tower, and it all crashed to the floor.", "Omar felt the heat rise to his face, and his hands clenched."]
    },
    q: { ar: "لو كنتَ مكان عمر، ماذا تفعل؟", ar_f: "لو كنتِ مكان عمر، ماذا تفعلين؟", en: "If you were Omar, what would you do?" },
    opts: [
      { t: { ar: "أصرخ في زياد وأدفعه.", en: "Shout at Ziyad and push him." }, weak: true,
        out: { ar: "صرخ عمر ودفع أخاه، فوقع زياد على المكعبات وبكى. جاءت الأم مسرعة، وضاعت الساعة، وضاع البرج، وبقي عمر متضايقًا طوال المساء.", en: "Omar shouted and pushed his brother. Ziyad fell onto the blocks and cried. Mum came running; the hour was gone, the tower was gone, and Omar felt bad all evening." },
        why: { ar: "الغضب لا يعيد البرج، لكنه يكسر شيئًا آخر.", en: "Anger doesn't rebuild the tower, but it breaks something else." } },
      { t: { ar: "أتوقف، وآخذ نفسًا عميقًا، ثم أقول: «أنا غاضب، كان برجي».", en: "Stop, take a deep breath, then say: “I'm angry. That was my tower.”" },
        out: { ar: "سكت عمر لحظة وتنفّس، ثم قال كلمته بصوت واضح. خفض زياد رأسه وقال: «آسف، لم أره». وجلسا يجمعان المكعبات معًا.", en: "Omar was quiet for a moment and breathed, then said it in a clear voice. Ziyad lowered his head: “Sorry, I didn't see it.” They sat and gathered the blocks together." },
        why: { ar: "أن تقول ما يغضبك بهدوء شجاعة، والصراخ هو الطريق السهل.", en: "Saying calmly what made you angry takes courage; shouting is the easy way." } },
      { t: { ar: "أخرج من الغرفة قليلًا حتى أهدأ، ثم أرجع.", en: "Leave the room for a little until I calm down, then come back." },
        out: { ar: "خرج عمر إلى المطبخ وشرب ماء. ولما رجع وجد زيادًا يحاول وحده أن يبني الطابق الأول من جديد، فجلس بجانبه.", en: "Omar went to the kitchen and drank some water. When he came back, Ziyad was trying on his own to rebuild the first floor, so Omar sat down beside him." },
        why: { ar: "دقيقة بعيدًا عن الغضب تمنع ساعة من الندم.", en: "A minute away from anger saves an hour of regret." } }
    ],
    end: { ar: "الغضب يأتي سريعًا، ولا عيب في أن نشعر به. والقوة أن نمسك أيدينا وألسنتنا حتى يمرّ.", en: "Anger comes fast, and there is no shame in feeling it. Strength is holding our hands and tongues until it passes." }
  },
  {
    id: "ch-human-1", stage: "human", trait: 2, age: "all",
    title: { ar: "الكأس المكسورة", en: "The broken glass" },
    intro: {
      ar: ["كانت أم سلمى في السوق. أرادت سلمى أن تشرب، فمدّت يدها إلى الكأس الزجاجية الجميلة التي تحبها أمها، مع أنها للضيوف وحدهم.", "انزلقت الكأس من يدها، وانكسرت على البلاط قطعًا صغيرة.", "لا أحد في البيت، وفي الزاوية سلة المهملات."],
      en: ["Salma's mother was at the market. Salma wanted a drink and reached for the beautiful glass her mother loved, even though it was only for guests.", "The glass slipped from her hand and broke into small pieces on the tiles.", "No one was home, and the bin stood in the corner."]
    },
    q: { ar: "لو كنتَ مكان سلمى، ماذا تفعل؟", ar_f: "لو كنتِ مكان سلمى، ماذا تفعلين؟", en: "If you were Salma, what would you do?" },
    opts: [
      { t: { ar: "أجمع القطع وأخفيها في سلة المهملات، ولا أقول شيئًا.", en: "Gather the pieces, hide them in the bin and say nothing." }, weak: true,
        out: { ar: "أخفت سلمى القطع. وفي المساء بحثت الأم عن كأسها لتقدّم فيها العصير للخالة، فلم تجدها، وظلت تبحث وتسأل. وكانت سلمى تسمع ولا تتكلم، وقلبها يدق.", en: "Salma hid the pieces. In the evening Mum looked for her glass to serve juice to Auntie, couldn't find it, and kept searching and asking. Salma listened without a word, her heart pounding." },
        why: { ar: "الخطأ المخفي يبقى ثقيلًا، وإن لم يره أحد.", en: "A hidden mistake stays heavy, even when no one sees it." } },
      { t: { ar: "أبتعد عن الزجاج حتى لا أُجرح، وحين تعود أمي أخبرها بما حدث وأعتذر.", en: "Keep away from the glass so I don't get cut, and when Mum comes home, tell her what happened and say sorry." },
        out: { ar: "حين دخلت الأم قالت سلمى: «كسرتُ كأسك، أنا آسفة، أخذتها دون إذن». سكتت الأم قليلًا، ثم قالت: «الكأس تُعوَّض، وصدقك لا يُعوَّض». وكنستا الزجاج معًا.", en: "When Mum came in, Salma said, “I broke your glass. I'm sorry, I took it without asking.” Mum was quiet for a moment, then said, “A glass can be replaced; your honesty can't.” They swept up the glass together." },
        why: { ar: "الاعتراف بالخطأ أول طريق الرجوع عنه، كما رجع أبونا آدم عليه السلام.", en: "Owning a mistake is the first step back from it, as our father Adam, peace be upon him, turned back." } },
      { t: { ar: "أقول إن القطة أوقعتها.", en: "Say the cat knocked it over." }, weak: true,
        out: { ar: "صدّقت الأم في البداية، وأبعدت القطة عن المطبخ أيامًا. وكلما رأت سلمى القطة حزينة خلف الباب تذكّرت ما قالت.", en: "Mum believed it at first and kept the cat out of the kitchen for days. Every time Salma saw the cat sad behind the door, she remembered what she had said." },
        why: { ar: "الكذبة الصغيرة تحمّل خطأك لغيرك، ولا تمحوه عنك.", en: "A small lie puts your mistake on someone else; it doesn't wipe it from you." } }
    ],
    end: { ar: "كل الناس يخطئون. والآدمي الحق يقول: «أخطأتُ»، ثم يصلح ما استطاع.", en: "Everyone makes mistakes. A true human says “I got it wrong”, then mends what they can." }
  },
  {
    id: "ch-sabiq-1", stage: "sabiq", trait: 0, age: "9-14",
    title: { ar: "الطالب الجديد", en: "The new student" },
    intro: {
      ar: ["جاء إلى الصف طالب جديد اسمه أنس، انتقل أهله من مدينة بعيدة.", "في الفسحة جلس أنس وحده على المقعد يأكل شطيرته وينظر إلى الأرض، والجميع يلعبون الكرة.", "نادى أصدقاء حمزة: «هيا يا حمزة، ينقصنا لاعب!»"],
      en: ["A new student named Anas joined the class; his family had moved from a faraway city.", "At break Anas sat alone on the bench, eating his sandwich and looking at the ground, while everyone played football.", "Hamza's friends called out, “Come on, Hamza, we're a player short!”"]
    },
    q: { ar: "لو كنتَ مكان حمزة، ماذا تفعل؟", ar_f: "لو كنتِ مكان حمزة، ماذا تفعلين؟", en: "If you were Hamza, what would you do?" },
    opts: [
      { t: { ar: "ألعب مع أصدقائي كالعادة، فلعلّ المعلم يهتم به.", en: "Play with my friends as usual. Maybe the teacher will look after him." }, weak: true,
        out: { ar: "لعب حمزة وفاز فريقه. وحين انتهت الفسحة رأى أنسًا يدخل الصف وحده كما خرج. لم يفعل حمزة شيئًا سيئًا، لكن فرصة طيبة مرّت من أمامه.", en: "Hamza played and his team won. When break ended, he saw Anas walk back into class alone, just as he had come out. Hamza had done nothing bad, but a good chance had passed him by." },
        why: { ar: "الخير الذي ننتظر غيرنا ليفعله يفوتنا نحن.", en: "The good we wait for someone else to do is good we miss." } },
      { t: { ar: "أذهب إلى أنس وأدعوه ليلعب معنا.", en: "Go over to Anas and invite him to play with us." },
        out: { ar: "تردد أنس، ثم قام. وتبيّن أنه حارس مرمى ماهر. وفي آخر الفسحة كان الأصدقاء ينادونه باسمه.", en: "Anas hesitated, then stood up. He turned out to be a great goalkeeper. By the end of break, the friends were calling him by name." },
        why: { ar: "خطوة واحدة نحو الوحيد قد تغيّر يومه كله.", en: "One step toward someone alone can change their whole day." } },
      { t: { ar: "أجلس بجانبه وأسأله عن مدينته، ثم أعرّفه بأصدقائي.", en: "Sit beside him, ask about his city, then introduce him to my friends." },
        out: { ar: "حدّثه أنس عن البحر في مدينته القديمة، وعن أصدقائه هناك. وفي اليوم التالي جاء أنس إلى المدرسة مبتسمًا، وجلس بجانب حمزة.", en: "Anas told him about the sea in his old city and the friends he had there. The next day Anas came to school smiling and sat next to Hamza." },
        why: { ar: "المبادر إلى الخير لا ينتظر أن يُطلب منه.", en: "Someone who starts the good doesn't wait to be asked." } }
    ],
    end: { ar: "أكثر الخير لا يحتاج إلى مال ولا إلى قوة. يحتاج إلى أن نراه قبل غيرنا، ثم نمشي إليه.", en: "Most good needs no money and no strength. It needs us to see it first, then walk toward it." }
  }
];

/* ───────────── مراجعة الكتابة، 24 نوفمبر 2026: المرحلة الأولى (الخنصر) ─────────────
 * المعيار: دليل الكتابة حسب العمر (الصغار، والفتيان، والمراهقون، والكبار).
 * هذه الجولة تحلّ محلّ ما سبقها في الحقول المذكورة هنا وحدها، وتبقى المعرّفات كما هي:
 * - قصة سمة «العادة العمياء»: صار للحظة التحول سبب في القصة نفسها (ملاحظة المعلمة على الدفتر).
 * - zombie-r1 (4-8): جمل قصيرة وحوار ودعابة، والعبرة في آخر فعل بلا فقرة شرح.
 * - zombie-r2 وzombie-r3 وzombie-r8: الخاتمة بصيغة الإثبات، والسلوك يُسمّى بدل الشخص.
 * - zombie-r5 (15+): بصوت المراهق وعالمه (المجموعة والتمرير في الليل)، والآيتان كما في تنزيل.
 * - zombie-r9 (15+، جديدة): قصة «رسالة في منتصف الليل» (سؤال في مجموعة الصف لم يُجب عنه)، وسؤالاها zombie-q14 وzombie-q15.
 * - الأسئلة zombie-q1 وq7 وq8 وq9 صارت تختبر قصتها نفسها.
 * التحقق: البقرة 2:74، الحديد 57:16، المؤمنون 23:3 على تنزيل (quran-simple عبر api.alquran.cloud)؛ البخاري 6407 و6203،
 * ومسلم (hadith-api ara-muslim 6966، حديث حنظلة) على hadith-api.
 */
(function () {
  var Z = window.AKHLAQ_CONTENT.stages.zombie;
  var R = function (id) { return Z.readings.filter(function (r) { return r.id === id; })[0]; };
  var Q = function (id) { return Z.quiz.filter(function (q) { return q.id === id; })[0]; };

  /* سمة «العادة العمياء» */
  Z.degrees[2].story = {
    ar: ['كل يوم بعد المدرسة، كان عمر يرمي حقيبته ويجلس أمام الشاشة حتى العشاء.',
      'وكل ليلة يتذكر واجبه متأخرًا، فيكتبه وهو نعسان، والحروف تميل على السطر.',
      'وفي الصباح أعاد إليه المعلم دفتره، وكتب تحت الواجب: «أعرف أن خطك أجمل من هذا يا عمر».',
      'فلما رجع من المدرسة ورفع الحقيبة ليرميها كعادته، توقف عند الباب وسأل نفسه: لماذا أفعل هذا كل يوم؟',
      'ثم وضع الحقيبة على المكتب، وكتب واجبه أولًا، ونام تلك الليلة مبكرًا، ودفتره المرتّب ينتظر الصباح.'],
    en: ['Every day after school, Omar dropped his bag and sat in front of the screen until dinner.',
      'And every night he remembered his homework too late and wrote it half asleep, the letters sliding off the line.',
      'In the morning the teacher handed back his notebook with a note under the homework: "I know your writing is better than this, Omar."',
      'When he got home and lifted his bag to drop it as usual, he stopped at the door and asked himself: why do I do this every day?',
      'Then he put the bag on his desk, did his homework first, and went to bed early that night, his tidy notebook waiting for the morning.']
  };

  /* zombie-r1: 4-8 */
  var r1 = R('zombie-r1');
  r1.body = {
    ar: ['استيقظ سامي يوم العطلة، وأمسك الجهاز قبل أن يغسل وجهه.',
      'نادته أمه: «يا سامي، الفطور!». قال: «حاضر»، ولم يتحرك.',
      'جاء أخوه الصغير يحمل كرته الحمراء: «تلعب معي؟». قال سامي: «بعد قليل»، ولم يرفع عينيه.',
      'ثم قفزت القطة، وجلست على الشاشة كلها! ضحك سامي، ورفع رأسه أخيرًا.',
      'نظر من النافذة، فإذا الشمس في وسط السماء. قال: «أين ذهب الصباح؟».',
      'وسأل نفسه: «ماذا فعلتُ اليوم؟». ففكّر، ولم يجد شيئًا يحكيه.',
      'فوضع الجهاز على الرف، وقال: «بسم الله»، وركض إلى أخيه: «أين الكرة الحمراء؟».'],
    en: ['Sami woke up on a holiday and grabbed the tablet before he had washed his face.',
      'His mother called: "Sami, breakfast!" He said, "Coming," and did not move.',
      'His little brother came carrying his red ball: "Will you play with me?" Sami said, "In a minute," and did not look up.',
      'Then the cat jumped up and sat on the whole screen! Sami laughed, and at last he lifted his head.',
      'He looked out of the window. The sun was high in the sky. "Where did the morning go?" he said.',
      'He asked himself, "What did I do today?" He thought, and found nothing to tell.',
      'So he put the tablet on the shelf, said "Bismillah", and ran to his brother: "Where\'s the red ball?"']
  };
  delete r1.body.ar_f;
  var q1 = Q('zombie-q1');
  q1.q = { ar: 'ما الذي جعل سامي يرفع رأسه عن الجهاز أخيرًا؟', en: 'What finally made Sami lift his head from the tablet?' };
  q1.options = [{ ar: 'نداء أمه للفطور', en: 'His mother calling him to breakfast' },
    { ar: 'أخوه حين جاء بالكرة الحمراء', en: 'His brother coming with the red ball' },
    { ar: 'القطة حين جلست على الشاشة', en: 'The cat sitting on the screen' }];
  q1.correct = 2;
  q1.why = { ar: 'نادته أمه وجاءه أخوه وهو لا يرفع عينيه، ثم أضحكته القطة فرأى الصباح قد مضى.', en: 'His mother called and his brother came while he kept his eyes down; then the cat made him laugh, and he saw the morning had gone.' };

  /* zombie-r2: الخاتمة بالإثبات */
  var r2 = R('zombie-r2');
  r2.body.ar[3] = 'والآية تحكي انتقالًا: كان ميتًا فأحياه الله. وهذا الانتقال ممكن لكل قلب في أي يوم، وأوله أن تمشي وراء النور خطوة بعد خطوة.';
  r2.body.en[3] = 'The verse tells of a crossing: he was dead, and Allah gave him life. That crossing is open to every heart on any day, and it begins when you follow the light, one step after another.';
  delete r2.body.ar_f;

  /* zombie-r3: السلوك يُسمّى */
  var r3 = R('zombie-r3');
  r3.body.ar[2] = 'كل ذكر صغير نفَس للقلب. وبلا ذكر يصير اليوم كيوم الزومبي: حركة كثيرة، وحياة قليلة.';
  r3.body.en[2] = 'Each small remembrance is a breath for the heart. Without remembrance a day turns into a living-dead day: plenty of movement, very little life.';
  if (r3.body.ar_f) r3.body.ar_f[2] = r3.body.ar[2];

  /* zombie-r4: السؤال يختبر التمرين نفسه */
  var q7 = Q('zombie-q7');
  q7.type = 'comprehension';
  q7.q = { ar: 'في «تمرين الدقيقة الحاضرة»، ماذا تفعل بعد أن تسمّي ثلاثة أشياء تراها وشيئين تسمعهما؟',
    ar_f: 'في «تمرين الدقيقة الحاضرة»، ماذا تفعلين بعد أن تسمّي ثلاثة أشياء ترينها وشيئين تسمعينهما؟',
    en: 'In the present-minute exercise, what do you do after naming three things you see and two things you hear?' };
  q7.options = [{ ar: 'أفتح الجهاز لأرتاح قليلًا', en: 'Turn on the tablet for a little rest' },
    { ar: 'أشكر الله على شيء واحد', en: 'Thank Allah for one thing' },
    { ar: 'أعيد العدّ من البداية', en: 'Start counting again from the beginning' }];
  q7.correct = 1;
  q7.why = { ar: 'آخر التمرين شكر: ترى النعمة، ثم تشكر الله عليها.', ar_f: 'آخر التمرين شكر: ترين النعمة، ثم تشكرين الله عليها.', en: 'The exercise ends in thanks: you see the blessing, then you thank Allah for it.' };

  /* zombie-r5: 15+، بصوت المراهق وعالمه */
  var r5 = R('zombie-r5');
  r5.body = {
    ar: ['الساعة الواحدة بعد منتصف الليل. في المجموعة مئتا رسالة لم تُقرأ، ومقطع يتبعه مقطع، والإبهام يمرّر وحده. وغدًا اختبار.',
      'الغفلة في هذا العمر لا تشبه النوم. أنت مستيقظ جدًّا، ترى كل شيء وتعلّق على كل شيء، وسؤال واحد لا يجد وقته: إلى أين أمضي أنا؟',
      'في سورة البقرة وصف لقلوب قست بعد أن رأت الآيات: ﴿فَهِيَ كَالْحِجَارَةِ أَوْ أَشَدُّ قَسْوَةً﴾ (البقرة 2:74). والحجر يتكوّن طبقة فوق طبقة، وكذلك القسوة: تأجيل صغير، ثم تأجيل.',
      'وفي سورة الحديد سؤال: ﴿أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَنْ تَخْشَعَ قُلُوبُهُمْ لِذِكْرِ اللَّهِ﴾ (الحديد 57:16). سؤال موجَّه إلى المؤمنين أنفسهم، والجواب متروك لكل واحد.',
      'وكثير من التطبيقات مصمَّم ليبقيك أطول وقت ممكن: تمرير بلا آخر، وتشغيل تلقائي، وإشعار يصل في اللحظة التي تناسبهم. فاليقظة اليوم قرار يُتخذ عن وعي، مرة بعد مرة.',
      'جرّب أسبوعًا: الهاتف خارج الغرفة في الليل، وأول دقيقة في الصباح لذكر قبل أي إشعار، وسؤال قبل النوم: ما الذي قرّبني اليوم من الله، وما الذي أبعدني؟'],
    en: ['One in the morning. Two hundred unread messages in the group, one clip after another, and a thumb scrolling on its own. There is a test tomorrow.',
      'Heedlessness at this age looks nothing like sleep. You are very awake: you see everything and comment on everything, and one question never gets its turn: where am I actually going?',
      'Surat al-Baqara describes hearts that hardened after seeing signs, meaning: they became like stone, or even harder (al-Baqara 2:74). Stone forms layer upon layer, and so does hardness: one small delay, then another.',
      'Surat al-Hadid asks, meaning: has the time not come for those who believe that their hearts humble themselves at the remembrance of Allah? (al-Hadid 57:16). It is a question put to believers themselves, and the answer is left to each one.',
      'Many apps are designed to keep you as long as possible: endless scrolling, autoplay, a notification that lands at the moment that suits them. So being awake today is a decision made on purpose, again and again.',
      'Try it for a week: the phone outside the room at night, the first minute of the morning for remembrance before any notification, and one question before sleep: what brought me closer to Allah today, and what took me further away?']
  };
  r5.body.ar_f = r5.body.ar.slice();
  r5.body.ar_f[1] = 'الغفلة في هذا العمر لا تشبه النوم. أنتِ مستيقظة جدًّا، ترين كل شيء وتعلّقين على كل شيء، وسؤال واحد لا يجد وقته: إلى أين أمضي أنا؟';
  r5.body.ar_f[5] = 'جرّبي أسبوعًا: الهاتف خارج الغرفة في الليل، وأول دقيقة في الصباح لذكر قبل أي إشعار، وسؤال قبل النوم: ما الذي قرّبني اليوم من الله، وما الذي أبعدني؟';
  var q8 = Q('zombie-q8');
  q8.q = { ar: 'الساعة الواحدة ليلًا، والمجموعة لا تهدأ، وغدًا اختبار. أي خطوة تشبه ما تقترحه القراءة؟', en: 'It is one in the morning, the group will not stop, and there is a test tomorrow. Which step matches what the reading suggests?' };
  q8.options = [{ ar: 'أقرأ الرسائل كلها كي لا يفوتني شيء، ثم أنام', en: 'Read every message so I miss nothing, then sleep' },
    { ar: 'أكتم المجموعة الليلة، وأضع الهاتف خارج الغرفة', en: 'Mute the group tonight and put the phone outside the room' },
    { ar: 'أحذف التطبيقات كلها الليلة، ثم أعيدها غدًا', en: 'Delete every app tonight and reinstall them tomorrow' }];
  q8.correct = 1;
  q8.why = { ar: 'الخطوة الصغيرة الثابتة تصمد، والقرار الضخم في منتصف الليل ينهار في الصباح.', en: 'A small steady step holds; a huge midnight decision collapses by morning.' };

  /* zombie-r6: السؤال يختبر القصة */
  var q9 = Q('zombie-q9');
  q9.type = 'comprehension';
  q9.q = { ar: 'ماذا رأى آدم حين رفع عينيه؟', en: 'What did Adam see when he lifted his eyes?' };
  q9.options = [{ ar: 'الطائر الأصفر وجدته والسماء الزرقاء', en: 'The yellow bird, his grandmother and the blue sky' },
    { ar: 'قطة تنام على السور', en: 'A cat asleep on the wall' },
    { ar: 'صديقه يلعب في الحديقة', en: 'His friend playing in the park' }];
  q9.correct = 0;
  q9.why = { ar: 'كان ذلك كله هناك من قبل، ورآه آدم حين رفع عينيه.', en: 'All of it was there before; Adam saw it once he lifted his eyes.' };

  /* zombie-r8: الخاتمة بالإثبات */
  var r8 = R('zombie-r8');
  r8.body.ar[3] = 'انتبه حنظلة لغفلته، وخاف منها، وجاء يسأل. ونحن كذلك: ننتبه بعد ساعة من اللعب أو الانشغال، فنرجع إلى الله بكلمة، ثم ننسى، ثم ننتبه ونرجع.';
  r8.body.en[3] = 'Hanzala noticed his own heedlessness, was frightened by it, and came to ask. We are the same: after an hour lost in play or busyness we notice, come back to Allah with a word, forget again, then notice and come back.';
  if (r8.body.ar_f) r8.body.ar_f[3] = r8.body.ar[3];

  /* zombie-r9: 15+، جديدة */
  Z.readings.push({
    id: 'zombie-r9', minutes: 3, ages: '15+',
    title: { ar: 'رسالة في منتصف الليل', en: 'A message at midnight' },
    body: {
      ar: ['كان زياد متصلًا تلك الليلة حتى الواحدة: مقاطع، وصور، وضحك في مجموعة الصف لا ينقطع.',
        'في الصباح جلس هادي في المقعد المجاور، وعيناه حمراوان، وأمامه ورقة اختبار الإعادة في الرياضيات. وحين جُمعت الأوراق كانت المسألة الرابعة في ورقته فارغة.',
        'في الفسحة قال هادي بصوت خافت: «سهرتُ عليها حتى الثالثة، ولم أفهمها».',
        'فتح زياد المجموعة وصعد بإصبعه إلى الأعلى، فوق النكات والملصقات، حتى وجدها: رسالة من هادي، الساعة 12:47: «أحد يقدر يشرح لي المسألة الرابعة؟ الإعادة غدًا».',
        'لا رد واحد. وتحتها مباشرة، بعد دقيقة، صورة مضحكة أرسلها زياد نفسه. وزياد حلّ تلك المسألة قبل أسبوع.',
        'قال في نفسه: كنتُ هنا. كنتُ متصلًا طوال الليل. وأحسّ بشيء ثقيل لا يعرف أين يضعه.',
        'فكّر أن يكتب في المجموعة اعتذارًا يراه الجميع، ثم أغلقها. أخرج دفتره، وجلس بجانب هادي على درج الملعب، وقال: «ورقة ثانية؟ أريك كيف تُحلّ».',
        'وفي تلك الليلة، قبل أن يفتح مجموعة الصف، فتح محادثة هادي وكتب: «المسألة الخامسة أسهل. نحلّها غدًا في الفسحة؟».'],
      en: ['Ziyad was online that night until one: clips, pictures, and nonstop laughing in the class group.',
        'In the morning Hadi sat in the next seat, his eyes red, the maths resit paper in front of him. When the papers were collected, question four on his sheet was blank.',
        'At break Hadi said quietly: "I stayed up till three on it and still didn\'t get it."',
        'Ziyad opened the group and scrolled up, past the jokes and the stickers, until he found it: a message from Hadi at 12:47: "Can anyone explain question four? The resit is tomorrow."',
        'Not one reply. Right under it, a minute later, a funny picture Ziyad himself had sent. Ziyad had solved that question a week ago.',
        'He thought: I was here. I was online the whole night. Something heavy settled in him and he didn\'t know where to put it.',
        'He thought of writing an apology in the group for everyone to see, then closed it. He took out his notebook, sat beside Hadi on the playground steps and said: "Got a spare sheet? I\'ll show you how it works."',
        'That night, before opening the class group, he opened Hadi\'s chat and wrote: "Question five is easier. Shall we do it at break tomorrow?"']
    },
    ask: { ar: 'متى كنتَ متصلًا وغائبًا في الوقت نفسه؟', ar_f: 'متى كنتِ متصلة وغائبة في الوقت نفسه؟', en: 'When have you been online and absent at the same time?' },
    quote: null,
    source: { ar: 'قصة مؤلفة، أبطالها خياليون.', en: 'An original story with fictional characters.' }
  });
  Z.quiz.push(
    { id: 'zombie-q14', readingId: 'zombie-r9', type: 'comprehension', correct: 0,
      q: { ar: 'ماذا طلب هادي في المجموعة تلك الليلة؟', en: 'What did Hadi ask for in the group that night?' },
      options: [{ ar: 'أن يشرح له أحد المسألة الرابعة قبل اختبار الإعادة', en: 'Someone to explain question four before the resit' },
        { ar: 'أن يرسل له أحد صور الدرس الذي فاته', en: 'Someone to send him photos of the lesson he missed' },
        { ar: 'أن يخبر أحد المعلم بأنه مريض', en: 'Someone to tell the teacher he was ill' }],
      why: { ar: 'سؤال واحد صادق ضاع بين مئات الرسائل، والجميع متصل.', en: 'One honest request was lost among hundreds of messages while everyone was online.' } },
    { id: 'zombie-q15', readingId: 'zombie-r9', type: 'comprehension', correct: 2,
      q: { ar: 'ماذا فعل زياد حين وجد الرسالة؟', en: 'What did Ziyad do when he found the message?' },
      options: [{ ar: 'كتب اعتذارًا طويلًا في المجموعة ليراه الجميع', en: 'Wrote a long apology in the group for everyone to see' },
        { ar: 'أرسل إلى هادي حلّ المسألة صورة وأكمل يومه', en: 'Sent Hadi a photo of the solution and got on with his day' },
        { ar: 'أغلق المجموعة وجلس يشرح المسألة لهادي', en: 'Closed the group and sat down to explain the question to Hadi' }],
      why: { ar: 'اليقظة هنا حضور لصديقه هو: دفتر مفتوح، وجلسة على الدرج، وموعد للغد.', en: 'Waking up here meant being there for his friend himself: an open notebook, a seat on the steps, a plan for tomorrow.' } }
  );
})();

/* ───────────── مراجعة الكتابة، 24 نوفمبر 2026: المرحلة الثانية (البنصر) ─────────────
 * المعيار: دليل الكتابة حسب العمر. هذه الجولة تحلّ محلّ ما سبقها في الحقول المذكورة هنا وحدها، وتبقى المعرّفات كما هي:
 * - قصة سمة «أنا أولًا»: صار للحظة التحول سبب في القصة (الطفلة تعدّ على أصابعها وهي تنتظر).
 * - قصة سمة «الشره»: لم تعد تقف عند القطعة المحروقة؛ يرى آدم وجه أخته فيصلح ما فعل، بدعابة من الموقف.
 * - سؤالا الموقف في السمتين الأوليين: خيارات متقاربة الطول، فلا يُعرف الجواب من طوله.
 * - pig-r1 (4-8): جمل قصيرة وحوار ودعابة، وحذف خاتمة الشرح («لم تكن سلمى سيئة...»)؛ وسؤالاها pig-q1 وpig-q2 يختبران القصة الجديدة.
 * - pig-r2: مصدر خبر نزول آيات سورة الإنسان في أهل البيت عليهم السلام بمراجعه بدل ملاحظة «يُوثَّق قبل النشر».
 * - pig-r3 (4-8): مشهد قصير بلا فقرة شرح، و«رضي الله عنه» لعمر بن أبي سلمة، وخاتمة بكلمته هو «فما زالت تلك طِعمتي بعد».
 * - pig-r4: مثال من البيت للتمرين، وpig-q8 صار يختبر التمرين نفسه.
 * - pig-r5 (15+): بصوت المراهق وعالمه (قائمة الأمنيات وإشعار العرض)، وبلا «ليس... بل»، والآية تُذكر بموضعها في سورة يوسف دون نسبة قائلها.
 * - pig-q10 صار يختبر قصة pig-r6. pig-r7 وpig-r8: الخاتمة بالإثبات بدل النفي الدفاعي، وأسئلتهما pig-q11 وpig-q12 بخيارات معقولة.
 * - جديد: pig-q13 (لقراءة pig-r5)، وpig-r9 (15+) قصة «الحساب بالتساوي» وسؤالاها pig-q14 وpig-q15.
 * التحقق: المطففين 83:26، الحشر 59:9، الإنسان 76:8، يوسف 12:53، النازعات 79:40-41 على تنزيل (quran-simple عبر api.alquran.cloud)؛
 * البخاري 5376 و1277 و5810 و3705 و5362، ومسلم (hadith-api ara-muslim 6774 و5269) على hadith-api.
 */
(function () {
  var P = window.AKHLAQ_CONTENT.stages.pig;
  var R = function (id) { return P.readings.filter(function (r) { return r.id === id; })[0]; };
  var Q = function (id) { return P.quiz.filter(function (q) { return q.id === id; })[0]; };

  /* سمة «أنا أولًا» */
  var d0 = P.degrees[0];
  d0.story = {
    ar: ['كانت سارة على الأرجوحة، تطير إلى الأمام وإلى الخلف، وتضحك.',
      'جاءت طفلة صغيرة بضفيرتين، ووقفت تنتظر، وعيناها تذهبان مع الأرجوحة وتعودان.',
      'قالت سارة في نفسها: «أنا جئت أولًا!»، وطارت مرة أخرى.',
      'ثم سمعت الطفلة تعدّ على أصابعها بصوت خافت: «واحد... اثنان... ثلاثة...».',
      'أوقفت سارة الأرجوحة بقدميها، ونزلت، وقالت: «تفضّلي، وأنا أدفعك».',
      'وطارت الصغيرة عاليًا، وضحكت سارة أكثر مما ضحكت وهي على الأرجوحة.'],
    en: ['Sara was on the swing, flying forwards and backwards and laughing.',
      'A little girl with two plaits came and stood waiting, her eyes going with the swing and coming back.',
      'Sara thought: "I came first!" and flew up again.',
      'Then she heard the little girl counting quietly on her fingers: "One... two... three..."',
      'Sara stopped the swing with her feet, got off and said: "Your turn. I\'ll push you."',
      'The little girl flew up high, and Sara laughed more than she had laughed on the swing.']
  };
  d0.q.options = [{ ar: 'أنزل وأقول له: تفضّل', en: 'Get off and say: your turn' },
    { ar: 'أصرخ: أنا جئت أولًا!', en: 'Shout: I came first!' },
    { ar: 'أغمض عينيّ كأني لم أره', en: 'Shut my eyes as if I hadn\'t seen him' }];
  d0.q.correct = 0;

  /* سمة «الشره» */
  var d1 = P.degrees[1];
  d1.story = {
    ar: ['جاءت الفطائر ساخنة من الفرن، فركض آدم وأخذ أكبرها.',
      'ثم أخذ الثانية قبل أن تجلس أخته هدى.',
      'نظرت هدى إلى الصحن، فلم يبقَ إلا قطعة صغيرة محروقة.',
      'نظر آدم إلى وجهها، ثم إلى الفطيرتين في يديه.',
      'فوضع الكبيرة في صحن هدى، وأعاد الثانية لأبيه، وأخذ هو المحروقة.',
      'وقال وهو يقضمها: «أنا أحب الطرف المقرمش!». فضحكت هدى.'],
    en: ['The pastries came hot out of the oven. Adam ran and grabbed the biggest one.',
      'Then he took a second before his sister Huda had even sat down.',
      'Huda looked at the plate: only one small burnt piece was left.',
      'Adam looked at her face, then at the two pastries in his hands.',
      'He put the big one on Huda\'s plate, put the second back for Dad, and took the burnt one himself.',
      'Taking a bite, he said: "I like the crunchy edge!" And Huda laughed.']
  };
  d1.q.options = [{ ar: 'آخذ أكبر قطعة قبلها', en: 'Take the biggest piece before her' },
    { ar: 'آخذ قطعتين وأخبئ واحدة', en: 'Take two and hide one' },
    { ar: 'أنتظر حتى تجلس هي', en: 'Wait until she sits down' }];
  d1.q.correct = 2;

  /* pig-r1: 4-8 */
  var r1 = R('pig-r1');
  r1.body = {
    ar: ['عادت سلمى من المدرسة، ورمت حقيبتها، وقفزت على الكرسي الكبير المريح.',
      '«أنا جائعة! أريد الطعام الآن!»',
      'فُتح الباب، ودخل جدها من السوق، وفي كل يد ثلاثة أكياس.',
      'وقف عند الباب يلتقط أنفاسه، ويمسح جبينه.',
      'نظرت سلمى إلى يديه، فإذا هما حمراوان من ثقل الأكياس.',
      'قالت: «يا جدي، هل اشتريت السوق كله؟». ضحك جدها: «نصفه فقط».',
      'قفزت سلمى عن الكرسي، وأخذت كيسين من يده.',
      '«اجلس هنا يا جدي، على الكرسي الكبير، وأنا أرتب الأغراض».',
      'جلس جدها وقال: «بارك الله فيكِ يا سلمى».',
      'ونسيت سلمى جوعها، حتى وضعت آخر تفاحة في مكانها.'],
    en: ['Salma came home from school, dropped her bag and jumped into the big comfy chair.',
      '"I\'m hungry! I want food now!"',
      'The door opened and her grandfather came in from the market, three bags in each hand.',
      'He stood by the door, catching his breath and wiping his forehead.',
      'Salma looked at his hands. They were red from the heavy bags.',
      '"Grandpa, did you buy the whole market?" Her grandfather laughed: "Only half of it."',
      'Salma jumped off the chair and took two bags from his hand.',
      '"Sit here, Grandpa, in the big chair, and I\'ll put the shopping away."',
      'Her grandfather sat down and said: "May Allah bless you, Salma."',
      'And Salma forgot all about being hungry until the last apple was in its place.']
  };
  delete r1.body.ar_f;
  var q1 = Q('pig-q1');
  q1.q = { ar: 'ماذا رأت سلمى في يدي جدها؟', en: 'What did Salma see on her grandfather\'s hands?' };
  q1.options = [{ ar: 'كانتا حمراوين من ثقل الأكياس', en: 'They were red from the heavy bags' },
    { ar: 'كان فيهما كيس حلوى لها', en: 'They held a bag of sweets for her' },
    { ar: 'كانتا مبتلتين من المطر', en: 'They were wet from the rain' }];
  q1.correct = 0;
  q1.why = { ar: 'رأت سلمى أثر التعب في يدي جدها، فعرفت من هو أتعب منها.', en: 'Salma saw the tiredness on her grandfather\'s hands, and knew who was more tired than she was.' };
  var q2 = Q('pig-q2');
  q2.q = { ar: 'أين أجلست سلمى جدها؟', en: 'Where did Salma sit her grandfather down?' };
  q2.options = [{ ar: 'على كرسي المطبخ', en: 'On the kitchen chair' },
    { ar: 'على الكرسي الكبير', en: 'In the big chair' },
    { ar: 'على الدرج عند الباب', en: 'On the step by the door' }];
  q2.correct = 1;
  q2.why = { ar: 'قامت عن أريح مكان في البيت، وأعطته لمن تعب أكثر منها.', en: 'She got up from the comfiest seat in the house and gave it to the one more tired than her.' };

  /* pig-r2: مصدر خبر أهل البيت عليهم السلام */
  R('pig-r2').source = {
    ar: 'القرآن الكريم، الإنسان 76:8 والحشر 59:9. وخبر نزول آيات سورة الإنسان في أهل البيت عليهم السلام يُروى عن ابن عباس، ذكره الثعلبي وغيره من المفسرين، ونقله البغوي في «معالم التنزيل» والقرطبي في «الجامع لأحكام القرآن» عند تفسير الآيات 76:7-9.',
    en: 'The Quran, al-Insan 76:8 and al-Hashr 59:9. The report that the verses of Surat al-Insan came down about the Ahl al-Bayt, peace be upon them, is narrated from Ibn Abbas; al-Tha\'labi and other commentators mention it, and al-Baghawi (Ma\'alim al-Tanzil) and al-Qurtubi (al-Jami\' li-Ahkam al-Quran) record it on verses 76:7-9.'
  };

  /* pig-r3: 4-8 */
  var r3 = R('pig-r3');
  r3.body = {
    ar: ['كان عمر بن أبي سلمة رضي الله عنه غلامًا صغيرًا، يعيش في بيت النبي صلى الله عليه وآله وسلم.',
      'جلس يومًا يأكل معه من صحن واحد كبير.',
      'ويد عمر الصغيرة تتنقل في الصحن: من هنا، ومن هناك، ومن الطرف البعيد.',
      'لم يغضب النبي صلى الله عليه وآله وسلم، ولم يُبعد الصحن.',
      'قال له بلطف: «يا غلام، سمِّ الله، وكُل بيمينك، وكُل مما يليك».',
      'اسم الله أولًا، واليد اليمنى، والجهة القريبة منك. وما بقي في الصحن يبقى لغيرك.',
      'وحين كبر عمر كان يحكي القصة ويقول: «فما زالت تلك طِعمتي بعد»، أي: بقيتُ آكل هكذا من يومها.'],
    en: ['Umar ibn Abi Salama, may Allah be pleased with him, was a young boy who lived in the house of the Prophet, peace and blessings be upon him and his family.',
      'One day he sat eating with him from one big dish.',
      'Umar\'s little hand went all over the dish: from here, from there, and from the far side.',
      'The Prophet, peace and blessings be upon him and his family, did not get angry, and he did not move the dish away.',
      'He told him gently: "Young boy, say Allah\'s name, eat with your right hand, and eat from what is in front of you."',
      'Allah\'s name first, the right hand, and the side near you. What is left in the dish stays for everyone else.',
      'When Umar grew up he would tell this story and say, meaning: "That stayed my way of eating ever after."']
  };
  delete r3.body.ar_f;
  r3.source = { ar: 'رواه البخاري (5376) ومسلم عن عمر بن أبي سلمة رضي الله عنه.', en: 'Narrated by al-Bukhari (5376) and Muslim from Umar ibn Abi Salama, may Allah be pleased with him.' };

  /* pig-r4: مثال من البيت، والسؤال يختبر التمرين */
  var r4 = R('pig-r4');
  r4.minutes = 3;
  r4.body = {
    ar: ['صفحة عملية. وجد علماء النفس أن القدرة على تأجيل الرغبة قليلًا مهارة تُتعلَّم، وأنها تساعد الإنسان في الدراسة والصداقة والحياة كلها.',
      'التمرين له خطوتان. الأولى: «انتظر». حين تشتهي شيئًا، عُدّ إلى عشرة قبل أن تأخذه.',
      'الثانية: «انظر». وأنت تعد، انظر حولك: هل يحتاج أحد هذا الشيء أكثر مني؟ هل أخذ الجميع؟ هل هناك من هو متعب؟',
      'مثال: وصلت إلى البيت علبة حلوى، والكل يحبها. عددتَ إلى عشرة، ونظرت حولك، فرأيت أخاك الصغير يقف على أطراف أصابعه ليرى ما في العلبة. أعطيته أولًا، ثم أخذت قطعتك. القطعة نفسها، والقرار قرارك.',
      'بعد العد، قرر. أحيانًا ستأخذ القطعة، وأحيانًا ستعطيها لغيرك. وفي المرتين تكون أنت الذي اختار، بعد أن انتظر.'],
    en: ['A practical page. Psychologists have found that being able to delay a want a little is a learnable skill, and that it helps in study, friendship and all of life.',
      'The exercise has two steps. First: "Wait." When you want something, count to ten before taking it.',
      'Second: "Look." While you count, look around: does anyone need this more than me? Has everyone had some? Is anyone tired?',
      'For example: a box of sweets arrives at home, and everyone loves them. You count to ten and look around, and you see your little brother on tiptoe, trying to see inside the box. You give him one first, then take yours. The same sweet, and the decision was yours.',
      'After counting, decide. Sometimes you will take the piece, sometimes you will give it away. Either way, you are the one who chose, after waiting.']
  };
  r4.body.ar_f = ['صفحة عملية. وجد علماء النفس أن القدرة على تأجيل الرغبة قليلًا مهارة تُتعلَّم، وأنها تساعد الإنسان في الدراسة والصداقة والحياة كلها.',
    'التمرين له خطوتان. الأولى: «انتظر». حين تشتهين شيئًا، عُدّي إلى عشرة قبل أن تأخذيه.',
    'الثانية: «انظر». وأنتِ تعدّين، انظري حولك: هل يحتاج أحد هذا الشيء أكثر مني؟ هل أخذ الجميع؟ هل هناك من هو متعب؟',
    'مثال: وصلت إلى البيت علبة حلوى، والكل يحبها. عددتِ إلى عشرة، ونظرتِ حولك، فرأيتِ أخاكِ الصغير يقف على أطراف أصابعه ليرى ما في العلبة. أعطيتِه أولًا، ثم أخذتِ قطعتك. القطعة نفسها، والقرار قراركِ.',
    'بعد العد، قرري. أحيانًا ستأخذين القطعة، وأحيانًا ستعطينها لغيركِ. وفي المرتين تكونين أنتِ التي اختارت، بعد أن انتظرت.'];
  var q8 = Q('pig-q8');
  q8.type = 'comprehension';
  q8.q = { ar: 'في الخطوة الثانية «انظر»، ماذا تسأل نفسك وأنت تعدّ؟',
    ar_f: 'في الخطوة الثانية «انظر»، ماذا تسألين نفسك وأنتِ تعدّين؟',
    en: 'In the second step, "Look", what do you ask yourself while you count?' };
  q8.options = [{ ar: 'كم قطعة ستبقى لي في الآخر؟', en: 'How many pieces will be left for me at the end?' },
    { ar: 'هل يحتاج أحد هذا أكثر مني؟', en: 'Does anyone need this more than me?' },
    { ar: 'هل يراني أحد وأنا آخذ؟', en: 'Can anyone see me taking it?' }];
  q8.correct = 1;
  q8.why = { ar: 'تنظر لترى غيرك: من يحتاج، ومن لم يأخذ بعد، ومن هو متعب.', ar_f: 'تنظرين لتري غيرك: من يحتاج، ومن لم يأخذ بعد، ومن هو متعب.', en: 'You look in order to see others: who needs it, who has not had any yet, who is tired.' };

  /* pig-r5: 15+، بصوت المراهق وعالمه */
  var r5 = R('pig-r5');
  r5.body = {
    ar: ['الحادية عشرة ليلًا. إشعار: «الحذاء الذي في قائمة أمنياتك نزل سعره، والعرض ينتهي بعد ساعتين». وقبله بدقيقة نشر صديقك صورة حذائه الجديد.',
      'حذاؤك عمره أربعة أشهر، ولا عيب فيه. ومع ذلك تشعر أنك تحتاج الجديد، الآن، قبل أن تنتهي الساعتان.',
      'يسمّي علماء النفس ما يحدث بعد الشراء «التكيّف مع المتعة»: فرحة اليوم الأول عالية، وبعد أسبوع يصير الشيء الجديد عاديًا، وتعود العين إلى القائمة. لذلك تبدو الرغبة سباقًا بلا خط نهاية: كلما وصلتَ، تحرّك الخط.',
      'وفي سورة يوسف: ﴿إِنَّ النَّفْسَ لَأَمَّارَةٌ بِالسُّوءِ إِلَّا مَا رَحِمَ رَبِّي﴾ (يوسف 12:53). و«أمّارة» صيغة مبالغة: تأمر ثم تعيد الأمر، كإشعار يصل كل ساعة. والسؤال الذي تتركه الآية لك: من يقود عندي، أنا أم الإشعار التالي؟',
      'والقرآن يصف الطريق الآخر: ﴿وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ ۝ فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ﴾ (النازعات 79:40-41). «نهى النفس» فعل يقوم به صاحبها: يسمع الرغبة كاملة، ويعرف ما يريده هو، ثم يقرر.',
      'جرّب أسبوعًا: كل شراء غير ضروري ينتظر في السلة يومًا كاملًا قبل أن تدفع. اكتم إشعارات العروض. وأعطِ مرة واحدة شيئًا تحبه. وفي آخر الأسبوع انظر إلى السلة: كم شيئًا بقيت تريده بعد يوم من الانتظار؟'],
    en: ['Eleven at night. A notification: "The trainers on your wishlist just dropped in price. The offer ends in two hours." A minute earlier, your friend posted a photo of his new pair.',
      'Your trainers are four months old and there is nothing wrong with them. Still, you feel you need the new ones, now, before the two hours run out.',
      'Psychologists call what happens after buying "hedonic adaptation": the first day\'s thrill is high, a week later the new thing is ordinary, and your eyes go back to the list. That is why wanting feels like a race with no finish line: every time you arrive, the line moves.',
      'Surat Yusuf says, meaning: the self keeps urging towards evil, except where my Lord has mercy (Yusuf 12:53). The Arabic word for "keeps urging" is an intensive form: it commands, then commands again, like a notification arriving every hour. The question the verse leaves you: who is leading here, me or the next notification?',
      'The Quran describes the other road, meaning: as for the one who feared standing before his Lord and held the self back from its whims, Paradise is the refuge (an-Nazi\'at 79:40-41). Holding the self back is something its owner does: hear the want in full, know what you yourself want, then decide.',
      'Try it for a week: anything you do not need waits in the basket for a full day before you pay. Mute the sale notifications. Give away, once, something you love. At the end of the week, look at the basket: how many things do you still want after a day of waiting?']
  };
  r5.body.ar_f = r5.body.ar.slice();
  r5.body.ar_f[0] = 'الحادية عشرة ليلًا. إشعار: «الحذاء الذي في قائمة أمنياتك نزل سعره، والعرض ينتهي بعد ساعتين». وقبله بدقيقة نشرت صديقتك صورة حذائها الجديد.';
  r5.body.ar_f[1] = 'حذاؤكِ عمره أربعة أشهر، ولا عيب فيه. ومع ذلك تشعرين أنكِ تحتاجين الجديد، الآن، قبل أن تنتهي الساعتان.';
  r5.body.ar_f[2] = 'يسمّي علماء النفس ما يحدث بعد الشراء «التكيّف مع المتعة»: فرحة اليوم الأول عالية، وبعد أسبوع يصير الشيء الجديد عاديًا، وتعود العين إلى القائمة. لذلك تبدو الرغبة سباقًا بلا خط نهاية: كلما وصلتِ، تحرّك الخط.';
  r5.body.ar_f[5] = 'جرّبي أسبوعًا: كل شراء غير ضروري ينتظر في السلة يومًا كاملًا قبل أن تدفعي. اكتمي إشعارات العروض. وأعطي مرة واحدة شيئًا تحبينه. وفي آخر الأسبوع انظري إلى السلة: كم شيئًا بقيتِ تريدينه بعد يوم من الانتظار؟';

  /* pig-q10: يختبر قصة pig-r6 */
  var q10 = Q('pig-q10');
  q10.type = 'comprehension';
  q10.q = { ar: 'لماذا أعطت ليلى ريمَ تفاحة؟', en: 'Why did Layla give Reem an apple?' };
  q10.options = [{ ar: 'طلبت منها المعلمة أن تعطيها', en: 'The teacher told her to give her one' },
    { ar: 'نظرت إلى وجهها فرأتها جائعة', en: 'She looked at her face and saw she was hungry' },
    { ar: 'كانت التفاحة صغيرة لا تريدها', en: 'The apple was small and she didn\'t want it' }];
  q10.correct = 1;
  q10.why = { ar: 'نظرت ليلى إلى وجه صديقتها قبل أن تأكل، فرأت حاجتها.', en: 'Layla looked at her friend\'s face before eating, and saw what she needed.' };

  /* pig-r7: القمة */
  var r7 = R('pig-r7');
  r7.body = {
    ar: ['في عطاء النبي صلى الله عليه وآله وسلم نرى الصورة التي نمشي نحوها.',
      'جاءت امرأة ببُردة نسجتها بيدها، وقالت: نسجتُها لأكسوك إياها. فأخذها النبي صلى الله عليه وآله وسلم وهو محتاج إليها، ولبسها.',
      'فرآها عليه رجل من الحاضرين، فقال: ما أحسنها! اكسُنيها. فقال: «نعم». ثم طواها وأرسلها إليه.',
      'فقال الناس للرجل: لبسها النبي صلى الله عليه وآله وسلم محتاجًا إليها، ثم سألته إياها، وأنت تعلم أنه لا يردّ أحدًا.',
      'في سمات البنصر نقول «لي» قبل أن ننظر حولنا. والنبي صلى الله عليه وآله وسلم كان محتاجًا إلى البُردة يوم لبسها، ثم طواها وأرسلها إلى من طلبها. ابدأ بشيء صغير تحبه، وأعطه بوجه راضٍ.'],
    en: ['In the giving of the Prophet, peace and blessings be upon him and his family, we see the picture we walk towards.',
      'A woman brought him a cloak she had woven with her own hands and said: I wove it to clothe you in it. The Prophet, peace and blessings be upon him and his family, took it, needing it, and wore it.',
      'A man among those present saw it on him and said: How beautiful it is! Give it to me to wear. He said, "Yes." Then he folded it and sent it to him.',
      'The people said to the man: The Prophet wore it because he needed it, and then you asked him for it, knowing that he never turns anyone away.',
      'The ring-finger trait is saying "mine" before we see anyone else. The Prophet (peace and blessings be upon him and his family) needed that cloak the day he put it on, and still folded it and sent it to the man who asked. Start with one small thing you love, and give it gladly.']
  };
  r7.body.ar_f = r7.body.ar.slice();
  r7.body.ar_f[4] = 'في سمات البنصر نقول «لي» قبل أن ننظر حولنا. والنبي صلى الله عليه وآله وسلم كان محتاجًا إلى البُردة يوم لبسها، ثم طواها وأرسلها إلى من طلبها. ابدئي بشيء صغير تحبينه، وأعطيه بوجه راضٍ.';
  r7.source = { ar: 'حديث في صحيح البخاري (1277 و5810)، يرويه سهل بن سعد رضي الله عنه.', en: 'A hadith in Sahih al-Bukhari (1277 and 5810), narrated by Sahl ibn Sa\'d, may Allah be pleased with him.' };
  var q11 = Q('pig-q11');
  q11.options = [{ ar: 'كانت عنده بردة أخرى أجمل منها', en: 'He had another, finer cloak' },
    { ar: 'طلب الرجل أن يشتريها بثمنها', en: 'The man offered to buy it at its price' },
    { ar: 'كان محتاجًا إليها، وأعطاها لمن طلبها', en: 'He needed it, and gave it to the one who asked' }];
  q11.correct = 2;
  q11.why = { ar: 'لبسها وهو محتاج إليها، ثم أعطاها في يومها لمن طلبها.', en: 'He wore it because he needed it, then gave it away that same day to the one who asked.' };

  /* pig-r8: الخاتمة بالإثبات، وكلمة علي عليه السلام */
  var r8 = R('pig-r8');
  r8.body.ar[3] = 'طلبت السيدة فاطمة عليها السلام عونًا على تعب حقيقي، فأعطاها أبوها صلى الله عليه وآله وسلم عونًا يبقى معها: قلبًا يذكر الله فيقوى على التعب. وقال علي عليه السلام بعد ذلك: فما تركتُها بعدُ. فقيل له: ولا ليلة صفّين؟ (وهي ليلة معركة شديدة). قال: ولا ليلة صفّين.';
  r8.body.en[3] = 'Lady Fatima, peace be upon her, asked for help with a real tiredness, and her father, peace and blessings be upon him and his family, gave her a help that would stay: a heart that remembers Allah and grows strong against tiredness. Ali, peace be upon him, said later: I never left it after that. Someone asked: Not even on the night of Siffin? (a night of fierce battle). He said: Not even on the night of Siffin.';
  if (r8.body.ar_f) r8.body.ar_f[3] = r8.body.ar[3];
  r8.source = { ar: 'حديث في صحيح البخاري (3705 و5362)، يرويه علي عليه السلام.', en: 'A hadith in Sahih al-Bukhari (3705 and 5362), narrated by Ali, peace be upon him.' };
  var q12 = Q('pig-q12');
  q12.options = [{ ar: 'أن ينتظرا خادمًا من السبي القادم', en: 'To wait for a servant from the next captives' },
    { ar: 'التكبير والتسبيح والتحميد عند النوم', en: 'Saying Allahu akbar, Subhan Allah and al-hamdu lillah at bedtime' },
    { ar: 'أن يقتسما عمل البيت بينهما', en: 'To share the housework between them' }];
  q12.correct = 1;

  /* pig-q13: سؤال لقراءة pig-r5 */
  P.quiz.push(
    { id: 'pig-q13', readingId: 'pig-r5', type: 'situation', correct: 1,
      q: { ar: 'إشعار في الليل: عرض على شيء في قائمة أمنياتك، وينتهي بعد ساعتين. أي خطوة تشبه ما تقترحه القراءة؟', en: 'A notification at night: a deal on something in your wishlist, ending in two hours. Which step matches what the reading suggests?' },
      options: [{ ar: 'أشتريه الآن قبل أن ينتهي العرض', en: 'Buy it now before the deal ends' },
        { ar: 'أتركه في السلة يومًا كاملًا ثم أقرر', en: 'Leave it in the basket a full day, then decide' },
        { ar: 'أحذف كل تطبيقات التسوق الليلة', en: 'Delete every shopping app tonight' }],
      why: { ar: 'يوم الانتظار يفصل بين الرغبة والقرار، فيبقى القرار لصاحبه.', en: 'A day of waiting puts space between the want and the decision, so the decision stays yours.' } }
  );

  /* pig-r9: 15+، جديدة */
  P.readings.push({
    id: 'pig-r9', minutes: 4, ages: '15+',
    title: { ar: 'الحساب بالتساوي', en: 'Split evenly' },
    body: {
      ar: ['في قائمة أمنيات رنا شيء واحد منذ شهر: سماعات بيضاء، وتحتها سطر صغير يعدّ ما بقي: «ينقصك 40».',
        'بعد تسليم المشروع طلبت المجموعة بيتزا إلى بيت جود: ثماني قطع، وأربع صديقات. لم تكن رنا قد أكلت منذ الصباح، فأخذت قطعة، ثم ثانية، ثم ثالثة، وهلا منحنية على الحاسوب تكتب ملخص العرض.',
        'حين التفتت هلا إلى العلبة كانت فيها قطعة واحدة. قالت: «لا بأس، لست جائعة كثيرًا»، وأكلتها بسرعة، ورجعت إلى الملخص.',
        'في المساء كتبت جود في المجموعة: «الحساب 120، كل واحدة 30. حوّلن لي». وبعد دقيقة وصلت رسالة هلا: «حوّلت». ورنا تعرف أن هلا تجمع مصروفها منذ أسابيع لرحلة المدرسة.',
        'فتحت رنا تطبيق التحويل، وفوقه إعلان صغير: «السماعات البيضاء: العرض ينتهي الليلة».',
        'قالت في نفسها: ثلاث قطع لي، وقطعة واحدة لهلا، والمبلغ نفسه. ثم قالت: لا أحد انتبه، ولا أحد سيسأل. وبقي إبهامها فوق الرقم 30 وقتًا طويلًا.',
        'ثم مسحته وكتبت 45، وأرسلت إلى جود وحدها: «أكلت ثلاث قطع. أعيدي إلى هلا 15، ولا تقولي لها من أين».',
        'وقبل أن تنام فتحت قائمة الأمنيات، فإذا السطر الصغير قد صار: «ينقصك 55». ووصلت رسالة من هلا: «أعادت لي جود 15، تقول إن في الحساب خطأ». فردّت رنا بقلب، وأطفأت الشاشة.'],
      en: ['Rana\'s wishlist has had one thing on it for a month: white headphones, with a small line underneath counting what is left: "You need 40 more."',
        'After they handed in the project, the group ordered pizza to Jood\'s house: eight slices, four friends. Rana had not eaten since the morning, so she took a slice, then a second, then a third, while Hala was bent over the laptop writing up the presentation summary.',
        'When Hala turned to the box there was one slice in it. "It\'s fine, I\'m not that hungry," she said, ate it quickly and went back to the summary.',
        'That evening Jood wrote in the group: "The bill is 120, that\'s 30 each. Send it to me." A minute later Hala\'s message arrived: "Sent." And Rana knew Hala had been saving her pocket money for weeks for the school trip.',
        'Rana opened the payment app. Above it sat a small ad: "White headphones: offer ends tonight."',
        'She thought: three slices for me, one for Hala, and the same amount. Then she thought: nobody noticed, and nobody is going to ask. Her thumb stayed over the 30 for a long time.',
        'Then she deleted it, typed 45, and wrote to Jood alone: "I had three slices. Give Hala back 15, and don\'t tell her where it came from."',
        'Before sleeping she opened the wishlist. The small line now read: "You need 55 more." A message came from Hala: "Jood gave me back 15, she says there was a mistake in the bill." Rana replied with a heart and turned off the screen.']
    },
    ask: { ar: 'حين يُقسَم شيء بين أصحابك، من ينتبه عندكم لنصيب كل واحد؟', ar_f: 'حين يُقسَم شيء بين صاحباتك، من تنتبه عندكنّ لنصيب كل واحدة؟', en: 'When something is shared out among your friends, who notices everyone\'s share?' },
    quote: null,
    source: { ar: 'قصة مؤلفة، أبطالها خياليون.', en: 'An original story with fictional characters.' }
  });
  P.quiz.push(
    { id: 'pig-q14', readingId: 'pig-r9', type: 'comprehension', correct: 0,
      q: { ar: 'لماذا بقي إبهام رنا فوق الرقم 30 وقتًا طويلًا؟', en: 'Why did Rana\'s thumb stay over the 30 for so long?' },
      options: [{ ar: 'الزيادة ستؤخر السماعات التي تريدها', en: 'Paying more would push back the headphones she wanted' },
        { ar: 'لم تتذكر كم قطعة أكلت بالضبط', en: 'She couldn\'t remember exactly how many slices she ate' },
        { ar: 'خافت أن تنزعج جود من الحساب', en: 'She was afraid Jood would mind the change' }],
      why: { ar: 'للأمانة هنا ثمن حقيقي: كل زيادة تُبعد السماعات قليلًا، ورنا تعرف ذلك وهي تكتب الرقم.', en: 'Honesty has a real price here: every extra amount pushes the headphones a little further away, and Rana knows it as she types the number.' } },
    { id: 'pig-q15', readingId: 'pig-r9', type: 'comprehension', correct: 2,
      q: { ar: 'كيف أصلحت رنا الحساب؟', en: 'How did Rana put the bill right?' },
      options: [{ ar: 'اعتذرت في المجموعة أمام الصديقات كلهن', en: 'Apologised in the group in front of everyone' },
        { ar: 'دعت هلا إلى بيتزا أخرى يوم السبت', en: 'Invited Hala for another pizza on Saturday' },
        { ar: 'دفعت ثمن قطعها، وأعادت جود الفرق لهلا', en: 'Paid for her slices, and Jood gave Hala the difference' }],
      why: { ar: 'أصلحت الحساب بصمت: دفعت ما أكلت، ووصل إلى هلا حقها دون أن تُحرَج.', en: 'She fixed the bill quietly: she paid for what she ate, and Hala got her share back without being embarrassed.' } }
  );
})();

/* ───────────── مراجعة الكتابة، 24 نوفمبر 2026: المرحلة الثالثة (الوسطى) ─────────────
 * المعيار: دليل الكتابة حسب العمر. هذه الجولة تحلّ محلّ ما سبقها في الحقول المذكورة هنا وحدها، وتبقى المعرّفات كما هي:
 * - قصص السمات الثلاث: لكل قصة لحظة تحول سببها في القصة نفسها، ونهاية بفعل (جنى وشجرتها، وبلال والوسادة الثالثة، وآمنة في الطابور).
 *   وسؤالا الموقف في السمتين الثانية والثالثة بخيارات متقاربة الطول. وآية آل عمران 3:133 بنص تنزيل.
 * - monkey-r1 (4-8): جمل قصيرة وحوار ودعابة، وحذف خاتمة «لم يكن لعب يونس شرًّا. لكن...»؛ وmonkey-q1 يختبر القصة الجديدة.
 * - monkey-r3: الرد بـ«سلامًا» بالإثبات، وخطوة عملية في آخرها؛ وmonkey-q5 وq6 بخيارات معقولة، وبلا «الهدوء لا يعني الضعف».
 * - monkey-r4: مثال من البيت، ومرجع الاستعاذة عند الغضب؛ وmonkey-q7 صار يختبر خطوة «اختر» بدل ترتيب الخطوات الظاهر في العنوان.
 * - monkey-r5 (15+): بصوت المراهق وعالمه (رسالة «خسرنا بسببك» في مجموعة الفريق)، وبلا «الغضب ليس عيبًا».
 * - monkey-q9 وq10 صارا من قصة monkey-r6. monkey-r7: «رضي الله عنه» لأنس، ولفظ «مُر لي»، وخطوة صغيرة في آخرها، ورقم الحديث.
 * - monkey-r8: مشهد انتظار الأشج من سنن أبي داود، والخاتمة بالإثبات بدل «ليس ضعفًا، بل...». الأسئلة q11 وq12 بخيارات متقاربة.
 * - ch-monkey-1: الخاتمة بالإثبات بدل «لا عيب في أن نشعر به»، وصيغة المؤنث للخيار الذي يقول «أنا غاضب».
 * - جديد: monkey-q13 (لقراءة monkey-r5)، وmonkey-r9 (15+) قصة «ملصق في مجموعة الصف» وسؤالاها monkey-q14 وmonkey-q15.
 * التحقق: آل عمران 3:133 و3:134 و3:159، الفرقان 25:63، لقمان 31:19 على تنزيل (quran-simple عبر api.alquran.cloud)؛
 * البخاري 6114 و6115 و3149، ومسلم (hadith-api ara-muslim 6643 و117)، وأبو داود 4782 و5225 على hadith-api.
 */
(function () {
  var M = window.AKHLAQ_CONTENT.stages.monkey;
  var R = function (id) { return M.readings.filter(function (r) { return r.id === id; })[0]; };
  var Q = function (id) { return M.quiz.filter(function (q) { return q.id === id; })[0]; };

  /* سمة «التشتت» */
  var d0 = M.degrees[0];
  d0.story = {
    ar: ['أخرجت جنى ألوانها، ورسمت جذع شجرة بنيًّا.',
      'ثم رأت المكعبات، فتركت الشجرة، وبنت نصف برج.',
      'ثم سمعت الكرة تتدحرج، فتركت البرج، وجرت وراءها.',
      'جاء أخوها الصغير، ورفع الورقة، وقال: «شجرة بلا أوراق؟ ألا تبرد؟».',
      'ضحكت جنى، وجلست، وأمسكت اللون الأخضر.',
      'ورقة، ثم ورقة، ثم ورقة، حتى امتلأت الشجرة كلها.',
      'ثم علّقتها على باب الثلاجة، ورجعت إلى برجها.'],
    en: ['Jana got out her crayons and drew a brown tree trunk.',
      'Then she saw the blocks, left the tree, and built half a tower.',
      'Then she heard the ball rolling, left the tower, and ran after it.',
      'Her little brother came, held up the paper and said: "A tree with no leaves? Won\'t it get cold?"',
      'Jana laughed, sat down, and picked up the green crayon.',
      'A leaf, then a leaf, then another leaf, until the whole tree was full.',
      'Then she stuck it on the fridge door, and went back to her tower.']
  };
  d0.turn = {
    ar: 'الخفة والحيوية نفسها، إذا اجتمعت على هدف، تصير نشاطًا ومسارعة إلى الخير. قال الله تعالى: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ﴾ (آل عمران 3:133).',
    en: d0.turn.en
  };

  /* سمة «لا يسمع ولا يتوقف» */
  var d1 = M.degrees[1];
  d1.story = {
    ar: ['بنى بلال قلعة كبيرة من الوسائد.',
      'مرّ أخوه الصغير خالد، فأسقط وسادة من فوقها.',
      'صرخ بلال، ورمى وسادة على خالد، ثم أخرى.',
      'قالت أمه: «توقف يا بلال». فرفع بلال الوسادة الثالثة.',
      'ثم رأى خالدًا يغطي وجهه بيديه الصغيرتين.',
      'فتجمّدت يدا بلال، والوسادة فوق رأسه، كأنه تمثال في حديقة.',
      'أنزلها ببطء، وأعاد الوسادة الساقطة إلى مكانها، وقال: «تعال يا خالد، أنت حارس القلعة».'],
    en: ['Bilal built a big castle out of cushions.',
      'His little brother Khalid walked past and knocked a cushion off the top.',
      'Bilal shouted and threw a cushion at Khalid, then another.',
      'His mother said: "Stop, Bilal." And Bilal lifted the third cushion.',
      'Then he saw Khalid covering his face with his small hands.',
      'Bilal\'s hands froze, the cushion above his head, like a statue in a park.',
      'He lowered it slowly, put the fallen cushion back in its place, and said: "Come on, Khalid, you\'re the castle guard."']
  };
  d1.q.options = [{ ar: 'أكمل، فأخي هو الذي بدأ', en: 'Carry on, my brother started it' },
    { ar: 'أجمّد يديّ فورًا، ثم أشرح', en: 'Freeze my hands at once, then explain' },
    { ar: 'أصرخ أعلى حتى يسمعوني', en: 'Shout louder so they hear me' }];
  d1.q.correct = 1;

  /* سمة «الغضب السريع» */
  var d2 = M.degrees[2];
  d2.story = {
    ar: ['كانت آمنة ترسم بيتًا، فاصطدمت بها صديقتها، فخطّ القلم خطًّا طويلًا على الرسم.',
      'احمرّ وجه آمنة، ورفعت يدها لتدفعها.',
      'قالت المعلمة: «آمنة، توقفي». فتوقفت آمنة، وأنزلت يدها.',
      'وفي الطريق إلى البيت قالت في نفسها: «في المرة القادمة أتوقف أنا، قبل أن تقول المعلمة».',
      'وفي الغد وقف زميل في مكانها في الطابور.',
      'أحسّت آمنة بالحرارة في وجهها، فوضعت يديها خلف ظهرها، وتنفّست ثلاث مرات.',
      'ثم قالت بصوت هادئ: «هذا مكاني، كنتُ هنا». فرجع زميلها خطوة، ونظرت آمنة إلى المعلمة فوجدتها تبتسم.'],
    en: ['Amina was drawing a house when her friend bumped into her, and the pencil made a long line across the picture.',
      'Amina\'s face went red, and she raised her hand to push her.',
      'The teacher said: "Amina, stop." Amina stopped and lowered her hand.',
      'On the way home she told herself: "Next time I\'ll stop myself, before the teacher has to say it."',
      'The next day a classmate stepped into her place in the line.',
      'Amina felt the heat in her face, so she put her hands behind her back and breathed three times.',
      'Then she said in a calm voice: "That\'s my place, I was here." Her classmate stepped back, and when Amina looked at the teacher, she was smiling.']
  };
  d2.q.options = [{ ar: 'أدفعه بقوة حتى لا يكررها', en: 'Push him hard so he won\'t do it again' },
    { ar: 'أبتعد خطوة، وأتنفس، ثم أكلمه', en: 'Step back, breathe, then talk to him' },
    { ar: 'أصرخ عليه أمام الجميع', en: 'Shout at him in front of everyone' }];
  d2.q.correct = 1;

  /* monkey-r1: 4-8 */
  var r1 = R('monkey-r1');
  r1.body = {
    ar: ['طاخ! طاخ! كان يونس يركل الكرة في غرفة الجلوس.',
      'وعند الباب كانت أخته هالة تبني برجًا عاليًا، مكعبًا فوق مكعب، وهي تحبس أنفاسها.',
      'قال أبوه: «يونس، توقف من فضلك».',
      'قال يونس: «ركلة واحدة فقط!»، ورفع قدمه.',
      'ثم سمع الكلمة مرة ثانية في رأسه: «توقف».',
      'فتجمّد في مكانه، وقدمه في الهواء، كأنه تمثال في حديقة.',
      'ضحكت هالة: «يونس صار تمثالًا!».',
      'أنزل يونس قدمه، وأمسك الكرة، وسأل: «لماذا يا أبي؟». فأشار أبوه إلى البرج، وكانت الكرة قريبة منه جدًّا.',
      'قالت هالة: «تضع أنت المكعب الأخير؟».',
      'فوضعه يونس في القمة بهدوء. وبقي البرج واقفًا، والكرة نائمة في حضنه.'],
    en: ['Thud! Thud! Yunus was kicking a ball in the living room.',
      'By the door his sister Hala was building a tall tower, block on block, holding her breath.',
      'His father said: "Yunus, stop, please."',
      'Yunus said: "Just one more kick!" and lifted his foot.',
      'Then he heard the word again inside his head: "Stop."',
      'So he froze where he was, one foot in the air, like a statue in a park.',
      'Hala laughed: "Yunus has turned into a statue!"',
      'Yunus put his foot down, picked up the ball, and asked: "Why, Dad?" His father pointed at the tower. The ball had been very close to it.',
      'Hala said: "Do you want to put the last block on?"',
      'Yunus placed it on top, gently. The tower stayed standing, and the ball sat quietly in his lap.']
  };
  delete r1.body.ar_f;
  var q1 = Q('monkey-q1');
  q1.q = { ar: 'ماذا فعل يونس حين سمع كلمة «توقف» في رأسه؟', en: 'What did Yunus do when he heard the word "stop" inside his head?' };
  q1.options = [{ ar: 'تجمّد وقدمه في الهواء', en: 'Froze with one foot in the air' },
    { ar: 'ركل ركلة أخيرة صغيرة', en: 'Gave one last small kick' },
    { ar: 'ركض بالكرة إلى غرفته', en: 'Ran off to his room with the ball' }];
  q1.correct = 0;
  q1.why = { ar: 'توقف أولًا، ثم سأل «لماذا؟»، فرأى كم كانت الكرة قريبة من البرج.', en: 'He stopped first, then asked "why?", and saw how close the ball had been to the tower.' };

  /* monkey-r3: الرد بالإثبات، وخطوة عملية */
  var r3 = R('monkey-r3');
  r3.body.ar[1] = 'وإذا كلمهم الجاهلون بكلام سيئ، قالوا «سلامًا»: كلمة تُنهي الشجار قبل أن يكبر.';
  r3.body.en[1] = 'And when ignorant people speak badly to them, they say "peace", a word that ends a quarrel before it grows.';
  r3.body.ar[3] = 'وهذا ما يفعله عباد الرحمن حين يستفزّهم أحد. جرّب غدًا: إذا قال لك أحد كلمة سيئة في الملعب، قل «سلام» بصوت منخفض، وامشِ بخطوات هادئة، ثم لاحظ ماذا يحدث للشجار.';
  r3.body.en[3] = 'This is what the servants of the Most Merciful do when someone provokes them. Try it tomorrow: if someone says something nasty to you in the playground, say "peace" in a low voice, walk away with calm steps, and notice what happens to the quarrel.';
  r3.body.ar_f = r3.body.ar.slice();
  r3.body.ar_f[3] = 'وهذا ما يفعله عباد الرحمن حين يستفزّهم أحد. جرّبي غدًا: إذا قال لكِ أحد كلمة سيئة في الملعب، قولي «سلام» بصوت منخفض، وامشي بخطوات هادئة، ثم لاحظي ماذا يحدث للشجار.';
  var q5 = Q('monkey-q5');
  q5.options = [{ ar: 'يردّون عليهم بمثل كلامهم', en: 'They answer them in the same words' },
    { ar: 'يسكتون ويغضبون في قلوبهم', en: 'They keep quiet and fume inside' },
    { ar: 'يقولون: سلامًا', en: 'They say: peace' }];
  q5.correct = 2;
  var q6 = Q('monkey-q6');
  q6.options = [{ ar: 'أقول «سلام» بهدوء، وأبتعد', en: 'Say "peace" calmly and walk away' },
    { ar: 'أدفعه بقوة حتى يسكت', en: 'Shove him hard until he stops' },
    { ar: 'أقول له كلمة أسوأ منها', en: 'Say something worse back' }];
  q6.correct = 0;
  q6.why = { ar: 'تقول «سلام» بهدوء وتمشي، فلا يجد الشجار من يكمله. وإن تكرر الأمر فأخبر الكبار.', ar_f: 'تقولين «سلام» بهدوء وتمشين، فلا يجد الشجار من يكمله. وإن تكرر الأمر فأخبري الكبار.', en: 'Calm is strength: say "peace", walk away, and tell an adult if it happens again.' };

  /* monkey-r4: مثال من البيت، والسؤال يختبر التمرين */
  var r4 = R('monkey-r4');
  r4.minutes = 3;
  r4.body = {
    ar: ['صفحة عملية. يقول علماء السلوك إن بين الشيء الذي يغضبنا وبين ردّنا عليه مسافة صغيرة، ومن تعلّم أن يوسّعها صار أهدأ.',
      'الخطوة الأولى: «قِف». جمّد يديك وقدميك وفمك ثانية واحدة.',
      'الخطوة الثانية: «تنفّس». شهيق ببطء إلى أربعة، وزفير إلى أربعة. ثلاث مرات. ويمكنك أن تقول في نفسك: «أعوذ بالله من الشيطان الرجيم».',
      'الخطوة الثالثة: «اختر». اسأل نفسك: ما التصرف الإنساني الآن؟ أن أتكلم بهدوء؟ أن أبتعد قليلًا؟ أن أطلب المساعدة؟ ثم افعله.',
      'مثال: أخوك يمسك جهاز التحكم ولا يعطيك دورك، ويدك تريد أن تخطفه. «قِف»: يداك على ركبتيك. «تنفّس»: أربعة وأربعة، ثلاث مرات. «اختر»: «دوري بعد هذه الجولة، اتفقنا؟».',
      'تمرّن عليها وأنت هادئ أيضًا، حتى تصير جاهزة حين تحتاجها.'],
    en: ['A practical page. Behaviour scientists say there is a small gap between what makes us angry and how we respond, and whoever learns to widen it becomes calmer.',
      'Step one: "Stop." Freeze your hands, your feet and your mouth for one second.',
      'Step two: "Breathe." In slowly for four, out for four, three times. You can also say quietly: "I seek refuge in Allah from the accursed Shaytan."',
      'Step three: "Choose." Ask yourself: what is the human thing to do now? Speak calmly? Step away for a bit? Ask for help? Then do it.',
      'For example: your brother has the remote and won\'t give you your turn, and your hand wants to snatch it. "Stop": hands on your knees. "Breathe": four in, four out, three times. "Choose": "My turn after this round, deal?"',
      'Practise it when you are calm too, so it is ready when you need it.']
  };
  r4.body.ar_f = ['صفحة عملية. يقول علماء السلوك إن بين الشيء الذي يغضبنا وبين ردّنا عليه مسافة صغيرة، ومن تعلّم أن يوسّعها صار أهدأ.',
    'الخطوة الأولى: «قِف». جمّدي يديك وقدميك وفمك ثانية واحدة.',
    'الخطوة الثانية: «تنفّس». شهيق ببطء إلى أربعة، وزفير إلى أربعة. ثلاث مرات. ويمكنك أن تقولي في نفسك: «أعوذ بالله من الشيطان الرجيم».',
    'الخطوة الثالثة: «اختر». اسألي نفسك: ما التصرف الإنساني الآن؟ أن أتكلم بهدوء؟ أن أبتعد قليلًا؟ أن أطلب المساعدة؟ ثم افعليه.',
    'مثال: أخوكِ يمسك جهاز التحكم ولا يعطيكِ دوركِ، ويدكِ تريد أن تخطفه. «قِف»: يداكِ على ركبتيكِ. «تنفّس»: أربعة وأربعة، ثلاث مرات. «اختر»: «دوري بعد هذه الجولة، اتفقنا؟».',
    'تمرّني عليها وأنتِ هادئة أيضًا، حتى تصير جاهزة حين تحتاجينها.'];
  r4.source = { ar: 'مستفاد من تقنيات تنظيم الانفعال في علم النفس المعاصر، مع الاستعاذة عند الغضب الواردة في صحيح البخاري (6115).', en: 'Adapted from emotion-regulation techniques in modern psychology, with seeking refuge in Allah when angry, as taught in Sahih al-Bukhari (6115).' };
  var q7 = Q('monkey-q7');
  q7.q = { ar: 'في خطوة «اختر»، ماذا تسأل نفسك؟', ar_f: 'في خطوة «اختر»، ماذا تسألين نفسك؟', en: 'In the "Choose" step, what do you ask yourself?' };
  q7.options = [{ ar: 'ما التصرف الإنساني الآن؟', en: 'What is the human thing to do now?' },
    { ar: 'من الذي بدأ المشكلة؟', en: 'Who started the trouble?' },
    { ar: 'كيف أردّ عليه بمثلها؟', en: 'How do I pay him back?' }];
  q7.correct = 0;
  q7.why = { ar: 'بعد أن يهدأ الجسد، تسأل: ما التصرف الإنساني الآن؟ ثم تفعله.', ar_f: 'بعد أن يهدأ الجسد، تسألين: ما التصرف الإنساني الآن؟ ثم تفعلينه.', en: 'Once the body is calm, you ask: what is the human thing to do now? Then you do it.' };
  var q8 = Q('monkey-q8');
  q8.options = [{ ar: 'أضربه ليتعلم ألا يأخذها', en: 'Hit him so he learns not to take it' },
    { ar: 'أكسر لعبته كما أخذ لعبتي', en: 'Break his toy, since he took mine' },
    { ar: 'أقف وأتنفس، ثم أطلبها بهدوء', en: 'Stop, breathe, then ask for it calmly' }];
  q8.correct = 2;

  /* monkey-r5: 15+، بصوت المراهق وعالمه */
  var r5 = R('monkey-r5');
  r5.body = {
    ar: ['«خسرنا بسببك». رسالة من زميلك في مجموعة الفريق بعد المباراة، وتحتها ثلاثة وجوه ضاحكة من آخرين. والرد جاهز في أصابعك قبل أن تنتهي من القراءة.',
      'في تلك الثواني يحدث شيء معروف: الغضب يصل قبل التفكير. وصوت في الداخل يقول: اكتب الآن، بأقسى كلمة عندك، وأمام الجميع.',
      'تذكر آية آل عمران من صفات المتقين: ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾ (آل عمران 3:134). ثلاث درجات، كل واحدة فوق التي قبلها: أن تكظم، ثم أن تعفو، ثم أن تحسن.',
      'الكظم أن تمسك الغيظ فلا يخرج من يدك ولا من لسانك ولا من أصابعك على الشاشة. والعرب تقول: كظم السقاء، إذا ملأه وسدّ فاه. الغيظ موجود، والفم مشدود عليه.',
      'والعفو أن تُسقط الحساب من قلبك، فلا تحمل الرسالة معك إلى النوم، ولا إلى مباراة الأسبوع القادم. والإحسان أن ترد بخير: أن تكتب له في الغد «المباراة القادمة لنا»، أو تمرّر له الكرة الأولى.',
      'ويضيف علم النفس أداة اسمها «إعادة التقييم»: أن تسأل قبل الرد: هل هناك تفسير آخر؟ ربما كتبها وهو غاضب من نفسه بعد الخسارة. التفسير الآخر يترك الخطأ خطأً، ويطفئ نصف النار قبل أن تشتعل.',
      'جرّب أسبوعًا: كل رد تكتبه وأنت غاضب يبقى في المسودة عشر دقائق قبل أن ترسله. وفي آخر الأسبوع عُدّ: كم ردًّا أرسلتَه كما كتبته أول مرة؟'],
    en: ['"We lost because of you." A message from a teammate in the team group after the match, with three laughing faces from others underneath. The reply is already in your fingers before you have finished reading.',
      'Something well known happens in those seconds: anger arrives before thinking. A voice inside says: write now, with the harshest words you have, in front of everyone.',
      'A verse in Al Imran lists among the qualities of the God-conscious, meaning: those who restrain anger and pardon people, and Allah loves those who do good (Al Imran 3:134). Three steps, each one above the last: restrain, then pardon, then do good.',
      'Restraining means holding the anger in, so it comes out neither through your hand, nor your tongue, nor your fingers on the screen. The Arabic word is the one used for filling a waterskin and closing its mouth: the anger is there, and the mouth is held closed over it.',
      'Pardoning means dropping the account in your heart, so you do not carry the message to bed, or to next week\'s match. Doing good means answering with something good: writing to him the next day "the next match is ours", or passing him the first ball.',
      'Psychology adds a tool called "reappraisal": before replying, ask whether there is another explanation. Maybe he wrote it while angry with himself after the loss. The other explanation leaves the wrong a wrong, and puts out half the fire before it catches.',
      'Try it for a week: any reply you write while angry waits in your drafts for ten minutes before you send it. At the end of the week, count: how many replies did you send exactly as you first wrote them?']
  };
  r5.body.ar_f = ['«خسرنا بسببك». رسالة من زميلتك في مجموعة الفريق بعد المباراة، وتحتها ثلاثة وجوه ضاحكة من أخريات. والرد جاهز في أصابعك قبل أن تنتهي من القراءة.',
    'في تلك الثواني يحدث شيء معروف: الغضب يصل قبل التفكير. وصوت في الداخل يقول: اكتبي الآن، بأقسى كلمة عندك، وأمام الجميع.',
    'تذكر آية آل عمران من صفات المتقين: ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾ (آل عمران 3:134). ثلاث درجات، كل واحدة فوق التي قبلها: أن تكظمي، ثم أن تعفي، ثم أن تحسني.',
    'الكظم أن تمسكي الغيظ فلا يخرج من يدك ولا من لسانك ولا من أصابعك على الشاشة. والعرب تقول: كظم السقاء، إذا ملأه وسدّ فاه. الغيظ موجود، والفم مشدود عليه.',
    'والعفو أن تُسقطي الحساب من قلبك، فلا تحملي الرسالة معك إلى النوم، ولا إلى مباراة الأسبوع القادم. والإحسان أن تردي بخير: أن تكتبي لها في الغد «المباراة القادمة لنا»، أو تمرّري لها الكرة الأولى.',
    'ويضيف علم النفس أداة اسمها «إعادة التقييم»: أن تسألي قبل الرد: هل هناك تفسير آخر؟ ربما كتبتها وهي غاضبة من نفسها بعد الخسارة. التفسير الآخر يترك الخطأ خطأً، ويطفئ نصف النار قبل أن تشتعل.',
    'جرّبي أسبوعًا: كل رد تكتبينه وأنتِ غاضبة يبقى في المسودة عشر دقائق قبل أن ترسليه. وفي آخر الأسبوع عُدّي: كم ردًّا أرسلتِه كما كتبتِه أول مرة؟'];
  r5.source = { ar: 'القرآن الكريم، آل عمران 3:134، ومعنى «كظم السقاء» في «المعجم الوسيط» (مادة كظم)، مع أداة إعادة التقييم في علم النفس المعرفي.', en: 'The Quran, Al Imran 3:134; the sense of "filling the waterskin and closing its mouth" from al-Mu\'jam al-Wasit (root k-z-m); with the reappraisal tool from cognitive psychology.' };

  /* monkey-q9 وq10: من قصة monkey-r6 */
  var q9 = Q('monkey-q9');
  q9.type = 'comprehension';
  q9.q = { ar: 'ماذا فعل عمر حين كبر بالون الغضب في صدره؟', en: 'What did Omar do when the anger balloon grew in his chest?' };
  q9.options = [{ ar: 'صرخ بأعلى صوته على أخته', en: 'Shouted at his sister as loud as he could' },
    { ar: 'وضع يده على صدره وتنفّس ببطء', en: 'Put his hand on his chest and breathed slowly' },
    { ar: 'أخذ قلمًا آخر من حقيبتها', en: 'Took another pencil from her bag' }];
  q9.correct = 1;
  q9.why = { ar: 'تنفّس ببطء حتى صغر البالون، ثم طلب قلمه بصوت هادئ.', en: 'He breathed slowly until the balloon shrank, then asked for his pencil in a calm voice.' };
  var q10 = Q('monkey-q10');
  q10.q = { ar: 'أخذ أخوك ألوانك وأنت ترسم، وأحسست بالبالون يكبر في صدرك. ماذا تفعل أولًا؟', ar_f: 'أخذ أخوكِ ألوانكِ وأنتِ ترسمين، وأحسستِ بالبالون يكبر في صدركِ. ماذا تفعلين أولًا؟', en: 'Your brother took your crayons while you were drawing, and you feel the balloon growing in your chest. What do you do first?' };
  q10.options = [{ ar: 'أضع يدي على صدري وأعدّ إلى أربعة', en: 'Put my hand on my chest and count to four' },
    { ar: 'أصرخ حتى يعيد إليّ ألواني', en: 'Shout until he gives my crayons back' },
    { ar: 'آخذ ألعابه أنا أيضًا', en: 'Take his toys too' }];
  q10.correct = 0;
  q10.why = { ar: 'أنفاس قليلة تصغّر البالون، فيخرج الكلام هادئًا.', en: 'A few breaths shrink the balloon, and the words come out calm.' };

  /* monkey-r7: القمة */
  var r7 = R('monkey-r7');
  r7.body.ar[1] = 'كان أنس بن مالك رضي الله عنه يمشي مع النبي صلى الله عليه وآله وسلم، وعليه بُرد نجراني غليظ الحاشية. فأدركه أعرابي وجذبه من ردائه جذبة شديدة، حتى رأى أنس أثر الحاشية على عاتقه.';
  r7.body.en[1] = 'Anas ibn Malik, may Allah be pleased with him, was walking with the Prophet, peace and blessings be upon him and his family, who wore a cloak from Najran with a rough edge. A Bedouin caught up with him and tugged the cloak so hard that Anas saw the mark its edge had left on his shoulder.';
  r7.body.ar[2] = 'ثم قال الأعرابي بخشونة: مُر لي من مال الله الذي عندك.';
  r7.body.en[2] = 'Then the Bedouin said roughly: order me something from the wealth of Allah that you hold.';
  r7.body.ar[4] = 'في سمات الوسطى يقود الغضب اليد والصوت. وأثر الجذبة كان ما زال على عاتق النبي صلى الله عليه وآله وسلم حين ضحك، وأمر للأعرابي بعطاء. نبدأ من شيء صغير: حين يشدّنا أحد من كمّنا، نلتفت إليه بابتسامة قبل أي كلمة.';
  r7.body.en[4] = 'The middle-finger trait is letting anger drive the hand and the voice. The mark of the tug was still on the Prophet’s shoulder (peace and blessings be upon him and his family) when he laughed and had the man given a gift. We start small: when someone pulls at our sleeve, we turn to them with a smile before any word.';
  if (r7.body.ar_f) { r7.body.ar_f[1] = r7.body.ar[1]; r7.body.ar_f[2] = r7.body.ar[2]; r7.body.ar_f[4] = r7.body.ar[4]; }
  r7.source = { ar: 'حديث في صحيح البخاري (3149)، يرويه أنس بن مالك رضي الله عنه.', en: 'A hadith in Sahih al-Bukhari (3149), narrated by Anas ibn Malik, may Allah be pleased with him.' };
  var q11 = Q('monkey-q11');
  q11.options = [{ ar: 'دفعه عنه وأكمل طريقه', en: 'Pushed him off and walked on' },
    { ar: 'رفع صوته عليه أمام الناس', en: 'Raised his voice at him in front of people' },
    { ar: 'ضحك، ثم أمر له بعطاء', en: 'Laughed, then ordered him a gift' }];
  q11.correct = 2;

  /* monkey-r8: مشهد الانتظار، والخاتمة بالإثبات */
  var r8 = R('monkey-r8');
  r8.body = {
    ar: ['جاء وفد من قبيلة عبد القيس إلى المدينة ليلقوا النبي صلى الله عليه وآله وسلم، وكان فيهم رجل يُعرف بأشجّ عبد القيس رضي الله عنه.',
      'فلما وصلوا، أسرع أصحابه عن رواحلهم شوقًا إلى النبي صلى الله عليه وآله وسلم. وانتظر الأشج، حتى أتى حقيبة ثيابه، فلبس ثوبيه، ثم جاء.',
      'فقال له النبي صلى الله عليه وآله وسلم: «إن فيك خصلتين يحبهما الله: الحلم والأناة».',
      'الحلم أن تملك نفسك حين تغضب، فلا تسبق يدك ولا لسانك. والأناة أن تتمهل، فتفكر قبل أن تفعل، كما تمهّل الأشج عند رواحله.',
      'وهاتان الخصلتان عكس سمات الوسطى: الاندفاع والعجلة. ولاحظ كلمة «يحبهما»: التمهل قوة يحبها الله في عباده.'],
    en: ['A delegation from the tribe of Abd al-Qays came to Madina to meet the Prophet, peace and blessings be upon him and his family. Among them was a man known as al-Ashajj of Abd al-Qays, may Allah be pleased with him.',
      'When they arrived, his companions hurried down from their mounts, eager to reach the Prophet, peace and blessings be upon him and his family. Al-Ashajj waited: he went to his bag of clothes, put on his two garments, and then came.',
      'The Prophet said to him, meaning: "You have two qualities that Allah loves: forbearance and deliberateness."',
      'Forbearance is keeping hold of yourself when you are angry, so neither your hand nor your tongue gets ahead of you. Deliberateness is taking your time, so you think before you act, as al-Ashajj took his time by his mount.',
      'These two qualities are the opposite of the middle-finger trait: impulsiveness and haste. And notice the word "loves": taking your time is a strength Allah loves in His servants.']
  };
  r8.body.ar_f = r8.body.ar.slice();
  r8.body.ar_f[3] = 'الحلم أن تملكي نفسك حين تغضبين، فلا تسبق يدك ولا لسانك. والأناة أن تتمهلي، فتفكري قبل أن تفعلي، كما تمهّل الأشج عند رواحله.';
  r8.body.ar_f[4] = 'وهاتان الخصلتان عكس سمات الوسطى: الاندفاع والعجلة. ولاحظي كلمة «يحبهما»: التمهل قوة يحبها الله في عباده.';
  r8.source = { ar: 'حديث في صحيح مسلم عن ابن عباس رضي الله عنهما، وخبر انتظار الأشج في سنن أبي داود (5225).', en: 'A hadith in Sahih Muslim from Ibn Abbas, may Allah be pleased with them both; the account of al-Ashajj waiting is in Sunan Abi Dawud (5225).' };
  var q12 = Q('monkey-q12');
  q12.options = [{ ar: 'الشجاعة والكرم', en: 'Courage and generosity' },
    { ar: 'الحلم والأناة', en: 'Forbearance and deliberateness' },
    { ar: 'الصبر والصدق', en: 'Patience and truthfulness' }];
  q12.correct = 1;
  q12.why = { ar: 'تمهّل الأشج حين أسرع غيره، فذكر النبي صلى الله عليه وآله وسلم الحلم والأناة، وهما عكس الاندفاع والعجلة.', en: 'Al-Ashajj took his time while others hurried, and the Prophet, peace and blessings be upon him and his family, named forbearance and deliberateness, the opposite of impulse and haste.' };

  /* ch-monkey-1: الخاتمة بالإثبات */
  var ch = window.AKHLAQ_CONTENT.choices.filter(function (c) { return c.id === 'ch-monkey-1'; })[0];
  ch.opts[0].why = { ar: 'الغضب يكسر شيئًا آخر، والبرج يبقى على الأرض.', en: 'Anger breaks something else, and the tower stays on the floor.' };
  ch.opts[1].t.ar_f = 'أتوقف، وآخذ نفسًا عميقًا، ثم أقول: «أنا غاضبة، كان برجي».';
  ch.opts[1].why = { ar: 'قول ما يغضبنا بهدوء شجاعة، والصراخ هو الطريق السهل.', en: 'Saying calmly what made us angry takes courage; shouting is the easy way.' };
  ch.end = { ar: 'الغضب يأتي سريعًا، وكلنا نشعر به. والقوة أن نمسك أيدينا وألسنتنا حتى يمرّ.', en: 'Anger comes fast, and all of us feel it. Strength is holding our hands and tongues until it passes.' };

  /* monkey-q13: سؤال لقراءة monkey-r5 */
  M.quiz.push(
    { id: 'monkey-q13', readingId: 'monkey-r5', type: 'situation', correct: 1,
      q: { ar: '«خسرنا بسببك» في مجموعة الفريق، والرد جاهز في أصابعك. أي خطوة تشبه ما تقترحه القراءة؟', en: '"We lost because of you" in the team group, and the reply is ready in your fingers. Which step matches what the reading suggests?' },
      options: [{ ar: 'أرد فورًا قبل أن يظن الجميع أنه محق', ar_f: 'أرد فورًا قبل أن يظن الجميع أنها محقة', en: 'Reply at once before everyone thinks he is right' },
        { ar: 'أترك ردي في المسودة عشر دقائق', en: 'Leave my reply in drafts for ten minutes' },
        { ar: 'أخرج من مجموعة الفريق الليلة', en: 'Leave the team group tonight' }],
      why: { ar: 'الدقائق العشر تفصل بين الغيظ والرد، فيبقى الرد لصاحبه.', en: 'Ten minutes put space between the anger and the reply, so the reply stays yours.' } }
  );

  /* monkey-r9: 15+، جديدة */
  M.readings.push({
    id: 'monkey-r9', minutes: 4, ages: '15+',
    title: { ar: 'ملصق في مجموعة الصف', en: 'A sticker in the class group' },
    body: {
      ar: ['في حصة العلوم قدّم سليم عرضه عن البراكين. وفي منتصفه قال: «ثار البركان سنة 2079»، وهو يقصد 1079. ضحك الصف، وضحك سليم معهم، وأكمل.',
        'وفي المساء نشر فارس في مجموعة الصف ملصقًا: صورة سليم أمام اللوح، وفوقها بخط أصفر: «عاجل من سنة 2079». وفي ساعة صار الملصق لعبة المجموعة: كل رسالة يرد عليها أحدهم به، والوجوه الضاحكة تنهال.',
        'والملصق مضحك فعلًا، ويامن يعرف ذلك. ويامن أمهر من في الصف في صنع الملصقات، والكل ينتظر ملصقاته. في ثلاثين ثانية صنع واحدًا أضحك: سليم بنظارة شمسية فوق بركان، وتحته: «المؤرخ القادم من المستقبل». ووقف إبهامه فوق زر الإرسال.',
        'ثم ظهر تحت اسم سليم: «يكتب...». واختفى. ثم ظهر مرة أخرى، واختفى. ثم وصل منه وجه ضاحك واحد، وحده.',
        'نظر يامن إلى ذلك الوجه طويلًا. تذكّر سليمًا في المكتبة أمس، يعيد عرضه بصوت خافت أمام الحائط، ويكتب التواريخ على بطاقات صغيرة.',
        'ثم وجد أصابعه تكتب لفارس، بسرعة: «تضحك على غيرك؟ نسيت عرضك الشهر الماضي؟». رد جاهز وحاد، وسيضحك له نصف الصف أيضًا.',
        'وضع يامن الهاتف على المكتب ووجهه إلى الأسفل، وعدّ أنفاسه حتى عشرة.',
        'ثم رفعه، ومسح الملصق، ومسح الرد. وكتب في المجموعة: «يكفي يا جماعة، عرضه كان أحسن من عرضي». فرد فارس: «اهدأ يا شيخ يامن»، وضحك اثنان. وأحسّ يامن بالحرارة في وجهه، وترك الهاتف.',
        'وبعد العشاء فتح محادثة سليم، وكتب: «جزء الرماد الذي غطّى المدينة ما فهمته إلا من عرضك. نراجع معًا للاختبار في الفسحة؟».',
        'وصل الرد بعد دقيقة: «أكيد». وفي المجموعة صعد الملصق إلى الأعلى، ودفنته رسائل الواجب وصور المباراة.'],
      en: ['In science, Salim gave his presentation on volcanoes. Halfway through he said: "The volcano erupted in 2079," meaning 1079. The class laughed, Salim laughed with them, and carried on.',
        'That evening Faris posted a sticker in the class group: a photo of Salim at the board, with yellow letters on top: "Breaking news from 2079." Within an hour the sticker was the group\'s game: someone answered every message with it, and the laughing faces poured in.',
        'The sticker really was funny, and Yamen knew it. Yamen was the best sticker-maker in the class, and everyone waited for his. In thirty seconds he made a funnier one: Salim in sunglasses on top of a volcano, with the caption "The historian from the future." His thumb stopped over the send button.',
        'Then under Salim\'s name appeared: "typing..." It disappeared. It appeared again, and disappeared. Then a single laughing face arrived from him, on its own.',
        'Yamen looked at that face for a long time. He remembered Salim in the library yesterday, going over his presentation quietly in front of the wall, writing the dates on little cards.',
        'Then he found his fingers typing to Faris, fast: "Laughing at someone else? Forgotten your own presentation last month?" A ready, sharp reply, and half the class would laugh at it too.',
        'Yamen put the phone face down on the desk and counted his breaths to ten.',
        'Then he picked it up, deleted the sticker, and deleted the reply. In the group he wrote: "Enough, guys, his presentation was better than mine." Faris replied: "Calm down, Sheikh Yamen," and two people laughed. Yamen felt the heat in his face, and put the phone down.',
        'After dinner he opened Salim\'s chat and wrote: "The part about the ash covering the city, I only got it from your presentation. Revise together for the test at break?"',
        'The reply came a minute later: "Sure." In the group, the sticker drifted up out of sight, buried under homework messages and match photos.']
    },
    ask: { ar: 'متى وقف إبهامك فوق زر الإرسال، وأنت تعرف أن الضحكة ستكون على حساب أحد؟', ar_f: 'متى وقف إبهامكِ فوق زر الإرسال، وأنتِ تعرفين أن الضحكة ستكون على حساب أحد؟', en: 'When has your thumb hovered over send, knowing the laugh would be at someone\'s expense?' },
    quote: null,
    source: { ar: 'قصة مؤلفة، أبطالها خياليون.', en: 'An original story with fictional characters.' }
  });
  M.quiz.push(
    { id: 'monkey-q14', readingId: 'monkey-r9', type: 'comprehension', correct: 2,
      q: { ar: 'ما الذي جعل يامن ينظر طويلًا قبل أن يرسل ملصقه؟', en: 'What made Yamen stare for a long time before sending his sticker?' },
      options: [{ ar: 'طلب المعلم من الصف حذف الملصق', en: 'The teacher told the class to delete the sticker' },
        { ar: 'سبقه فارس بملصق أضحك من ملصقه', en: 'Faris beat him to it with a funnier sticker' },
        { ar: 'أرسل سليم وجهًا ضاحكًا واحدًا بعد تردد', en: 'Salim sent a single laughing face after hesitating' }],
      why: { ar: 'كتب سليم ثم مسح مرتين، ثم ضحك على نفسه مع الجميع، ويامن رآه أمس يتدرب في المكتبة.', en: 'Salim typed and deleted twice, then laughed at himself along with everyone, and Yamen had seen him rehearsing in the library the day before.' } },
    { id: 'monkey-q15', readingId: 'monkey-r9', type: 'comprehension', correct: 1,
      q: { ar: 'ماذا فعل يامن بالرد الحاد الذي كتبه لفارس؟', en: 'What did Yamen do with the sharp reply he typed to Faris?' },
      options: [{ ar: 'أرسله إلى فارس في رسالة خاصة', en: 'Sent it to Faris in a private message' },
        { ar: 'مسحه، وكتب: «عرضه أحسن من عرضي»', en: 'Deleted it and wrote: "His was better than mine"' },
        { ar: 'أرسله في المجموعة ثم حذفه', en: 'Sent it to the group, then deleted it' }],
      why: { ar: 'أمسك الرد الذي كان سيُضحك نصف الصف، ودفع ثمن ذلك ضحكة على نفسه.', en: 'He held back a reply that would have made half the class laugh, and paid for it with a laugh at his own expense.' } }
  );
})();

/* ───────────── مراجعة الكتابة، 24 نوفمبر 2026: المرحلة الرابعة (السبابة) ─────────────
 * المعيار: دليل الكتابة حسب العمر. هذه الجولة تحلّ محلّ ما سبقها في الحقول المذكورة هنا وحدها، وتبقى المعرّفات كما هي:
 * - قصص الدرجات الثلاث: مشاهد أقصر جملًا وأكثر حوارًا، ونهاية بفعل (عمّار والحذاء الأصفر، ومريم والحبل، وزياد والقلم الأزرق).
 *   وأسئلة الدرجات بخيارات متقاربة الطول، وسؤال الدرجة الثالثة من قصتها الجديدة، وآية الأعراف 7:23 بنص تنزيل.
 * - human-r1 (4-8): قصة جديدة «زيد والأرجوحة» بدل قصة الكوب التي كانت تكرر قصة الاختيار؛ وhuman-q1 وq2 يختبرانها.
 * - human-r2: الخاتمة بالإثبات بدل «ليس شكله... بل سلوكه»؛ وhuman-q3 بخيارات متقاربة.
 * - human-r3: لفظ سؤال الصحابة كما في البخاري 11، وأمثلة من يوم القارئ، وخطوة عملية في آخرها؛ وhuman-q6 صار يختبر القراءة.
 * - human-r4 وhuman-r5 (15+): بصوت المراهق وعالمه، وبلا «لا علامة فشل» ولا «لا يُمحى... بل»؛ وhuman-q8 من مشهد القراءة.
 * - human-r6 (4-8): دعابة خفيفة ونهاية بفعل بدل سطر العبرة؛ وhuman-q9 وq10 صارا من القصة نفسها.
 * - human-r7: الترضي عن النعمان وأمه، والقصة من فم النعمان على المنبر كما في البخاري، والخاتمة بالإثبات.
 * - human-r8: «حثية» بلفظ الحديث، والخاتمة بالإثبات؛ وhuman-q12 بخيارات معقولة.
 * - ch-human-1: الخيار الصحيح بطول الخيارين الآخرين.
 * - جديد: human-r9 (15+) قصة «الصف الأول» (وعد لأخ صغير في مقابل رحلة الأصحاب)، وسؤالاها human-q13 وhuman-q14.
 * التحقق: التين 95:4-6، فاطر 35:32، الأعراف 7:23، القيامة 75:2 على تنزيل (quran-simple عبر api.alquran.cloud)؛
 * البخاري 10 و11 و2296 و2587 و6464 و6465، ومسلم (hadith-api ara-muslim 163 و1830)، والترمذي 1987 على hadith-api.
 */
(function () {
  var H = window.AKHLAQ_CONTENT.stages.human;
  var R = function (id) { return H.readings.filter(function (r) { return r.id === id; })[0]; };
  var Q = function (id) { return H.quiz.filter(function (q) { return q.id === id; })[0]; };

  /* درجة «كفّ الأذى» */
  var d0 = H.degrees[0];
  d0.story = {
    ar: ['جاء ولد جديد إلى الصف اسمه رامي، وفي قدميه حذاء أصفر لامع.',
      'ضحك الأولاد وقالوا: «حذاء موز! حذاء موز!».',
      'ونظروا إلى عمّار: «قلها معنا يا عمّار!».',
      'فتح عمّار فمه، ثم رأى رامي يخبئ قدميه تحت الكرسي.',
      'فأغلق عمّار فمه، ولم يضحك.',
      'وفي الفسحة جلس بجانب رامي، وقال: «حذاؤك سريع؟ تسابقني إلى الشجرة؟».',
      'فركضا معًا، والحذاء الأصفر يلمع في الشمس، ووصل رامي أولًا.'],
    en: ['A new boy called Rami came to the class, wearing shiny yellow shoes.',
      'The boys laughed and said: "Banana shoes! Banana shoes!"',
      'Then they looked at Ammar: "Say it with us, Ammar!"',
      'Ammar opened his mouth, then saw Rami hiding his feet under his chair.',
      'So Ammar closed his mouth, and did not laugh.',
      'At break he sat next to Rami and said: "Are your shoes fast? Race me to the tree?"',
      'So they ran together, the yellow shoes shining in the sun, and Rami got there first.']
  };
  d0.q.options = [{ ar: 'أضحك قليلًا حتى لا يغضبوا مني', ar_f: 'أضحك قليلًا حتى لا يغضبن مني', en: 'Laugh a little so they won\'t be cross with me' },
    { ar: 'لا أضحك، وأجلس بجانب الزميل', ar_f: 'لا أضحك، وأجلس بجانب الزميلة', en: 'Don\'t laugh, and sit next to the classmate' },
    { ar: 'أسكت الآن، وأضحك معهم لاحقًا', ar_f: 'أسكت الآن، وأضحك معهن لاحقًا', en: 'Stay quiet now, and laugh with them later' }];
  d0.q.correct = 1;

  /* درجة «أداء الواجب» */
  var d1 = H.degrees[1];
  d1.story = {
    ar: ['قالت أم مريم: «رتّبي ألعابك قبل العشاء». قالت مريم: «وعد!».',
      'ثم نادتها صديقتها هند من الشرفة: «تعالي نلعب بالحبل!».',
      'نظرت مريم إلى الحبل، ثم إلى الدمى على الأرض، وقالت: «بعد أن أرتّب، لأني وعدت».',
      'وضعت الدمى في الصندوق، والمكعبات في السلة، والدب الكبير على السرير.',
      'ثم خرجت إلى الشرفة، وقفزت مع هند على الحبل عشرين مرة.',
      'وحين جاءت أمها تنادي للعشاء، فتحت فمها لتقول: «رتّبي...»، ثم رأت الغرفة، فضحكت وقالت: «تعالي نأكل».'],
    en: ['Maryam\'s mother said: "Tidy your toys before dinner." Maryam said: "Promise!"',
      'Then her friend Hind called from the balcony: "Come and skip with me!"',
      'Maryam looked at the skipping rope, then at the dolls on the floor, and said: "After I tidy up, because I promised."',
      'She put the dolls in the box, the blocks in the basket, and the big teddy on the bed.',
      'Then she went out to the balcony and skipped with Hind twenty times.',
      'When her mother came to call her for dinner, she opened her mouth to say "Tidy your...", then saw the room, laughed and said: "Come and eat."']
  };
  d1.q.options = [{ ar: 'أرتّب أولًا لأني وعدت، ثم ألعب', en: 'Tidy first because I promised, then play' },
    { ar: 'ألعب قليلًا، ثم أرتّب إن تذكرت', en: 'Play a little, then tidy if I remember' },
    { ar: 'أطلب من أمي أن ترتّب عني', en: 'Ask Mum to tidy up for me' }];
  d1.q.correct = 0;

  /* درجة «الرجوع عن الخطأ» */
  var d2 = H.degrees[2];
  d2.story = {
    ar: ['بحث زياد عن قلمه الأزرق في كل مكان، فلم يجده.',
      'رأى أخته سارة ترسم، فصاح: «أنتِ أخذتِ قلمي!».',
      'قالت سارة: «ما أخذته!»، وعيناها تلمعان بالدموع.',
      'فتح زياد حقيبته وهو غاضب، فإذا القلم الأزرق في الجيب الصغير.',
      'وقف ينظر إلى القلم، وقال في نفسه: «لن تعرف سارة أني وجدته هنا».',
      'ثم مشى إليها، وقال: «أخطأتُ يا سارة. القلم كان في حقيبتي. أنا آسف».',
      'ومدّ إليها القلم وقال: «ارسمي به السماء». فرسمت سماء كبيرة، ووضعت فيها شمسًا لزياد.'],
    en: ['Ziyad looked everywhere for his blue pencil, and could not find it.',
      'He saw his sister Sara drawing, and shouted: "You took my pencil!"',
      'Sara said: "I didn\'t take it!", her eyes shining with tears.',
      'Ziyad opened his bag, still angry, and there was the blue pencil in the little pocket.',
      'He stood looking at the pencil and told himself: "Sara won\'t know I found it here."',
      'Then he walked over to her and said: "I got it wrong, Sara. The pencil was in my bag. I\'m sorry."',
      'He held out the pencil and said: "Draw the sky with it." So she drew a big sky, and put a sun in it for Ziyad.']
  };
  d2.q.q = { ar: 'صرختَ في أختك أنها أخذت قلمك، ثم وجدته في حقيبتك. ماذا تفعل؟', ar_f: 'صرختِ في أختك أنها أخذت قلمك، ثم وجدتِه في حقيبتك. ماذا تفعلين؟', en: 'You shouted at your sister that she took your pencil, then found it in your own bag. What do you do?' };
  d2.q.options = [{ ar: 'أسكت، فهي لم ترني وأنا أجده', en: 'Keep quiet; she didn\'t see me find it' },
    { ar: 'أقول لها: أخطأتُ، وأعتذر منها', en: 'Tell her: I got it wrong, and say sorry' },
    { ar: 'أضعه على مكتبها لتظن أنها وجدته', en: 'Leave it on her desk so she thinks she found it' }];
  d2.q.correct = 1;
  d2.q.why = { ar: 'الآدمي إذا أخطأ رجع، كما قال أبوانا آدم وحواء عليهما السلام: ﴿رَبَّنَا ظَلَمْنَا أَنْفُسَنَا﴾ (الأعراف 7:23).', en: d2.q.why.en };

  /* human-r1: 4-8، قصة جديدة */
  var r1 = R('human-r1');
  r1.title = { ar: 'زيد والأرجوحة', en: 'Zayd and the swing' };
  r1.minutes = 2;
  r1.body = {
    ar: ['في الحديقة أرجوحة حمراء واحدة، وزيد فوقها يطير.',
      'جاء ولد صغير اسمه عادل، ووقف بجانبها يمسك يد أمه.',
      'قال زيد في نفسه: «وصلتُ أولًا. الأرجوحة لي».',
      'وعادل ينتظر ولا يقول شيئًا، وعيناه تصعدان وتنزلان مع الأرجوحة.',
      'فقال زيد: «عشر مرات، ثم دورك. اتفقنا؟». فهزّ عادل رأسه.',
      'عدّ زيد ببطء شديد: «واحد... اثناااان...». فضحك عادل، فضحك زيد، وأكمل العدّ بسرعته العادية.',
      'وعند العاشرة نزل زيد وقال: «تفضل يا عادل».',
      'جلس عادل على الأرجوحة، ثم نظر إلى زيد وقال: «تدفعني؟».',
      'فدفعه زيد، وطار عادل يضحك، وأمه تبتسم من بعيد.'],
    en: ['In the park there is one red swing, and Zayd is flying on it.',
      'A little boy called Adil came and stood beside it, holding his mother\'s hand.',
      'Zayd told himself: "I got here first. The swing is mine."',
      'Adil waited and said nothing, his eyes going up and down with the swing.',
      'So Zayd said: "Ten more times, then it\'s your turn. Deal?" Adil nodded.',
      'Zayd counted very, very slowly: "One... twooooo..." Adil laughed, Zayd laughed, and he counted the rest at normal speed.',
      'At ten Zayd got off and said: "Your turn, Adil."',
      'Adil sat on the swing, then looked at Zayd and said: "Will you push me?"',
      'So Zayd pushed him, and Adil flew up laughing, while his mother smiled from a distance.']
  };
  delete r1.body.ar_f;
  var q1 = Q('human-q1');
  q1.q = { ar: 'كم مرة تأرجح زيد قبل أن يعطي عادلًا دوره؟', en: 'How many more times did Zayd swing before giving Adil his turn?' };
  q1.options = [{ ar: 'حتى نادته أمه إلى البيت', en: 'Until his mother called him home' },
    { ar: 'عشر مرات، كما اتفقا', en: 'Ten times, as they agreed' },
    { ar: 'حتى تعب وأراد النزول', en: 'Until he got tired and wanted to get off' }];
  q1.correct = 1;
  q1.why = { ar: 'قال زيد: «عشر مرات، ثم دورك»، وعدّ، ونزل عند العاشرة.', en: 'Zayd said "ten more times, then it\'s your turn", counted, and got off at ten.' };
  var q2 = Q('human-q2');
  q2.type = 'comprehension';
  q2.q = { ar: 'ماذا طلب عادل من زيد بعد أن جلس على الأرجوحة؟', en: 'What did Adil ask Zayd after he sat on the swing?' };
  q2.options = [{ ar: 'أن يدفعه على الأرجوحة', en: 'To push him on the swing' },
    { ar: 'أن يعدّ له عشر مرات', en: 'To count ten times for him' },
    { ar: 'أن يذهب ليلعب وحده', en: 'To go and play on his own' }];
  q2.correct = 0;
  q2.why = { ar: 'قال عادل: «تدفعني؟»، فدفعه زيد، وطار عادل يضحك.', en: 'Adil said "Will you push me?", so Zayd pushed him, and Adil flew up laughing.' };

  /* human-r2: الخاتمة بالإثبات */
  var r2 = R('human-r2');
  r2.body.ar[1] = 'ثم تقول الآية إن الإنسان قد يُرَدّ «أسفل سافلين». والذي ينزل هو السلوك حين يترك الهداية، والصورة التي خلقها الله تبقى كريمة.';
  r2.body.en[1] = 'Then the verse says a person may be brought down "to the lowest of the low". What falls is behaviour, when it leaves guidance; the form Allah made stays honoured.';
  var q3 = Q('human-q3');
  q3.options = [{ ar: 'شكله الذي خُلق عليه', en: 'The form they were created in' },
    { ar: 'فقره وقلة ماله', en: 'Being poor and having little' },
    { ar: 'سلوكه حين يترك الهداية', en: 'Their behaviour when they leave guidance' }];
  q3.correct = 2;

  /* human-r3: لفظ الحديث، وأمثلة من اليوم، وخطوة عملية */
  var r3 = R('human-r3');
  r3.body = {
    ar: ['سأل الصحابة النبي صلى الله عليه وآله وسلم: أي الإسلام أفضل؟ فقال: «من سلم المسلمون من لسانه ويده».',
      'هذه أول درجة في السبابة: أن يأمن الناس جانبك. واللسان يؤذي بطرق كثيرة: لقب يضحك له الصف، وكلمة ساخرة في المجموعة، ونقل كلام عن غائب. واليد تؤذي بدفعة في الطابور، وبأخذ شيء دون إذن.',
      'وقال صلى الله عليه وآله وسلم: «أحب الأعمال إلى الله تعالى أدومها وإن قل». يكفي الإنسانَ عمل صغير يداوم عليه: سلام على حارس المدرسة كل صباح، أو صفحة من القرآن بعد العشاء.',
      'والحديثان معًا طريق ثابت على السبابة: كفّ أذاك، وداوم على خير صغير. جرّب هذا الأسبوع: اكتب في آخر دفترك خيرًا صغيرًا واحدًا، وضع بجانبه علامة كل يوم تفعله فيه.'],
    en: ['The Companions asked the Prophet, peace and blessings be upon him and his family: which Islam is best? He said, meaning: "The one from whose tongue and hand the Muslims are safe."',
      'That is the first step on the index finger: people feel safe around you. The tongue hurts in many ways: a nickname the class laughs at, a mocking word in the group chat, passing on talk about someone who isn\'t there. The hand hurts with a shove in the queue, or by taking something without asking.',
      'He also said, meaning: "The deeds most loved by Allah are the most lasting, even if small." A small deed kept up is enough: a greeting to the school guard every morning, or one page of the Quran after the evening prayer.',
      'Together the two hadiths make a steady path on the index finger: keep your harm away, and keep up a small good. Try it this week: write one small good deed at the back of your notebook, and put a tick beside it every day you do it.']
  };
  r3.body.ar_f = r3.body.ar.slice();
  r3.body.ar_f[3] = 'والحديثان معًا طريق ثابت على السبابة: كفّي أذاك، وداومي على خير صغير. جرّبي هذا الأسبوع: اكتبي في آخر دفترك خيرًا صغيرًا واحدًا، وضعي بجانبه علامة كل يوم تفعلينه فيه.';
  r3.quote.ref = 'صحيح البخاري 10، وسؤال الصحابة في البخاري 11؛ صحيح مسلم (ترقيم sunnah.com: الكتاب 1، الحديث 68)؛ وحديث «أحب الأعمال إلى الله تعالى أدومها وإن قل»: صحيح مسلم (الكتاب 6، الحديث 258)، ونحوه في البخاري 6464 و6465';
  var q5 = Q('human-q5');
  q5.options = [{ ar: 'أكبرها وإن انقطع', en: 'The biggest, even if they stop' },
    { ar: 'ما يراه الناس ويمدحونه', en: 'Those people see and praise' },
    { ar: 'أدومها وإن قل', en: 'The most lasting, even if small' }];
  var q6 = Q('human-q6');
  q6.type = 'comprehension';
  q6.q = { ar: 'أيّ هذه ذكرته القراءة مثالًا على أذى اللسان؟', en: 'Which of these does the reading give as an example of harm by the tongue?' };
  q6.options = [{ ar: 'دفعة في الطابور', en: 'A shove in the queue' },
    { ar: 'لقب يضحك له الصف', en: 'A nickname the class laughs at' },
    { ar: 'أخذ شيء دون إذن', en: 'Taking something without asking' }];
  q6.correct = 1;
  q6.why = { ar: 'اللقب الذي يضحك له الصف أذى باللسان، والدفعة وأخذ الشيء دون إذن أذى باليد.', en: 'A nickname the class laughs at is harm by the tongue; a shove and taking without asking are harm by the hand.' };

  /* human-r4: 15+، بصوت المراهق وعالمه */
  var r4 = R('human-r4');
  r4.minutes = 3;
  r4.body = {
    ar: ['صفحة عملية. أكثر العزائم الكبيرة تبدأ يوم الأحد وتنتهي يوم الثلاثاء. وتقول أبحاث العادات إن السلوك يثبت حين يكون صغيرًا جدًا، ومربوطًا بشيء تفعله كل يوم أصلًا، ومتبوعًا بشعور طيب.',
      'اختر عادة أصغر من طموحك: أن تشكر أمك بعد كل وجبة، أو أن تضع الهاتف خارج الغرفة قبل النوم، أو أن تقول كلمة طيبة لأول من تلقاه في المدرسة.',
      'واربطها بشيء ثابت في جملة واحدة: «بعد أن أغسل يدي من الطعام، أقول لأمي: شكرًا». أو: «حين أشحن الهاتف ليلًا، أتركه في الصالة».',
      'وحين تفعلها، قل «الحمد لله»، وضع علامة على ورقة في باب خزانتك. ستأتي ليلة تبدو فيها العادة سخيفة وأنت متعب، وتلك الليلة تُحسب أكثر من غيرها. وبعد أسابيع تصير العادة جزءًا منك، وهذا معنى «أدومها وإن قل».'],
    en: ['A practical page. Most big resolutions start on Sunday and end on Tuesday. Habit research says a behaviour sticks when it is very small, tied to something you already do every day, and followed by a good feeling.',
      'Choose a habit smaller than your ambition: thank your mother after every meal, leave your phone outside your room at bedtime, or say a kind word to the first person you meet at school.',
      'Tie it to something fixed, in one sentence: "After I wash my hands from eating, I say thank you to my mother." Or: "When I charge my phone at night, I leave it in the living room."',
      'When you do it, say "Alhamdulillah" and put a tick on a sheet inside your wardrobe door. A night will come when the habit feels silly and you are tired, and that night counts more than the others. After a few weeks the habit becomes part of you; that is the meaning of "the most lasting, even if small".']
  };
  r4.body.ar_f = ['صفحة عملية. أكثر العزائم الكبيرة تبدأ يوم الأحد وتنتهي يوم الثلاثاء. وتقول أبحاث العادات إن السلوك يثبت حين يكون صغيرًا جدًا، ومربوطًا بشيء تفعلينه كل يوم أصلًا، ومتبوعًا بشعور طيب.',
    'اختاري عادة أصغر من طموحك: أن تشكري أمك بعد كل وجبة، أو أن تضعي الهاتف خارج الغرفة قبل النوم، أو أن تقولي كلمة طيبة لأول من تلقينه في المدرسة.',
    'واربطيها بشيء ثابت في جملة واحدة: «بعد أن أغسل يدي من الطعام، أقول لأمي: شكرًا». أو: «حين أشحن الهاتف ليلًا، أتركه في الصالة».',
    'وحين تفعلينها، قولي «الحمد لله»، وضعي علامة على ورقة في باب خزانتك. ستأتي ليلة تبدو فيها العادة سخيفة وأنتِ متعبة، وتلك الليلة تُحسب أكثر من غيرها. وبعد أسابيع تصير العادة جزءًا منك، وهذا معنى «أدومها وإن قل».'];
  var q7 = Q('human-q7');
  q7.options = [{ ar: 'أقرر أن أشكرها مئة مرة غدًا', en: 'Decide to thank her a hundred times tomorrow' },
    { ar: 'أربطها بشيء ثابت: بعد كل وجبة', en: 'Tie it to something fixed: after every meal' },
    { ar: 'أنتظر حتى أتذكرها من نفسي', en: 'Wait until I remember on my own' }];
  q7.correct = 1;

  /* human-r5: 15+، مشهد من الليل، والخاتمة بالإثبات */
  var r5 = R('human-r5');
  r5.body = {
    ar: ['الحادية عشرة ليلًا، والهاتف مطفأ على صدرك، وتعود إليك جملة قلتها لأخيك على العشاء أمام الجميع. ضحك لها الكل إلا هو.',
      'ذلك الصوت الذي يعيد الجملة له اسم في القرآن: «النفس اللوّامة»، وقد أقسم الله بها: ﴿وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ﴾ (القيامة 75:2). هي النفس التي تراجع صاحبها إذا قصّر، ووجودها علامة حياة في القلب.',
      'وللوم طريقان. لوم يقول: «أنا سيئ ولن أتغير»، فيتركك ثقيلًا في السرير حتى الصباح. ولوم يقول: «قلت هذا، وسأصلحه، وغدًا أفعل أحسن»، فيعطيك شيئًا تفعله.',
      'وفي الحديث: «وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن» (سنن الترمذي). فإذا أخطأت وندمت، فابحث عن حسنة تفعلها بعده: اعتذار، أو مساعدة لمن أخطأت في حقه.',
      'ويؤيد علم النفس هذا: من يحاسب نفسه برفق ويخطط لما بعد الخطأ يتغير أكثر ممن يجلد نفسه. والحسنة هنا قد تكون صغيرة: أن تطرق باب أخيك وتقول: «كلمة العشاء كانت ثقيلة. آسف».',
      'التمرين: كل مساء دقيقة واحدة، ثلاثة أسئلة: ما الذي أحسنت فيه اليوم فأحمد الله؟ ما الذي قصّرت فيه؟ ما الحسنة التي أُتبعه بها غدًا؟'],
    en: ['Eleven at night, the phone switched off on your chest, and a line you said to your brother at dinner, in front of everyone, keeps coming back. Everyone laughed except him.',
      'The Quran has a name for the voice that replays it: "the self-reproaching soul", and Allah swears by it (al-Qiyama 75:2). It is the self that holds its owner to account when they fall short, and its presence is a sign of life in the heart.',
      'Blame can go two ways. One says: "I\'m bad and I\'ll never change," and leaves you lying heavy until morning. The other says: "I said that, I\'ll put it right, and tomorrow I\'ll do better," and hands you something to do.',
      'A hadith (Sunan al-Tirmidhi) means: follow a bad deed with a good one and it will wipe it out, and treat people with good character. So when you get something wrong and feel sorry, look for a good deed to do after it: an apology, or a hand for the person you wronged.',
      'Psychology supports this: people who review themselves kindly and plan what to do after a mistake change more than those who punish themselves. The good deed can be small: knocking on your brother\'s door and saying, "That thing at dinner was heavy. Sorry."',
      'The exercise: one minute each evening, three questions. What did I do well today, so I can praise Allah? Where did I fall short? What good deed will I follow it with tomorrow?']
  };
  r5.body.ar_f = ['الحادية عشرة ليلًا، والهاتف مطفأ على صدرك، وتعود إليكِ جملة قلتِها لأخيك على العشاء أمام الجميع. ضحك لها الكل إلا هو.',
    r5.body.ar[1],
    'وللوم طريقان. لوم يقول: «أنا سيئة ولن أتغير»، فيترككِ ثقيلة في السرير حتى الصباح. ولوم يقول: «قلت هذا، وسأصلحه، وغدًا أفعل أحسن»، فيعطيكِ شيئًا تفعلينه.',
    r5.body.ar[3],
    'ويؤيد علم النفس هذا: من يحاسب نفسه برفق ويخطط لما بعد الخطأ يتغير أكثر ممن يجلد نفسه. والحسنة هنا قد تكون صغيرة: أن تطرقي باب أخيك وتقولي: «كلمة العشاء كانت ثقيلة. آسفة».',
    r5.body.ar[5]];
  var q8 = Q('human-q8');
  q8.q = { ar: 'قلتَ لأخيك جملة جارحة على العشاء، وندمت. أي لوم هو اللوم النافع كما في القراءة؟', ar_f: 'قلتِ لأخيك جملة جارحة على العشاء، وندمتِ. أي لوم هو اللوم النافع كما في القراءة؟', en: 'You said something hurtful to your brother at dinner, and regret it. Which is the helpful self-reproach, as in the reading?' };
  q8.options = [{ ar: '«أنا سيئ ولن أتغير أبدًا»', ar_f: '«أنا سيئة ولن أتغير أبدًا»', en: '"I\'m bad and I\'ll never change."' },
    { ar: '«لا يهم، كانت مجرد مزحة»', en: '"It doesn\'t matter, it was just a joke."' },
    { ar: '«قلتها، وسأعتذر له غدًا»', en: '"I said it, and I\'ll apologise tomorrow."' }];
  q8.correct = 2;
  q8.why = { ar: 'اللوم النافع يسمّي الخطأ، ثم يخطط لحسنة تمحوه.', en: 'Helpful self-reproach names the mistake, then plans a good deed to wipe it out.' };

  /* human-r6: 4-8، نهاية بفعل */
  var r6 = R('human-r6');
  r6.body = {
    ar: ['كان يوسف وسامر يلعبان بالكرة في الحديقة.',
      'ركض يوسف وراء الكرة، فداس على قدم سامر.',
      'قال سامر: «آي!»، وجلس على العشب يمسك قدمه.',
      'توقف يوسف. أما الكرة فتدحرجت وحدها حتى وقفت عند القطة.',
      'جلس يوسف بجانب سامر وقال: «آسف يا سامر، لم أقصد. هل تؤلمك؟».',
      'نفخ سامر على أصابع قدمه، وقال: «صارت أحسن».',
      'ثم قفز واقفًا وقال: «أنا أركل الآن!».',
      'فركلا الكرة معًا، وقفزت القطة من مكانها.'],
    en: ['Yusuf and Samer were playing football in the garden.',
      'Yusuf ran after the ball and stepped on Samer\'s foot.',
      'Samer said: "Ouch!" and sat on the grass holding his foot.',
      'Yusuf stopped. The ball rolled on by itself until it stopped by the cat.',
      'Yusuf sat down next to Samer and said: "Sorry, Samer, I didn\'t mean it. Does it hurt?"',
      'Samer blew on his toes and said: "It\'s better now."',
      'Then he jumped up and said: "My kick now!"',
      'So they kicked the ball together, and the cat jumped out of the way.']
  };
  delete r6.body.ar_f;
  var q9 = Q('human-q9');
  q9.type = 'comprehension';
  q9.q = { ar: 'ماذا قال يوسف بعد أن داس على قدم سامر؟', en: 'What did Yusuf say after stepping on Samer\'s foot?' };
  q9.options = [{ ar: '«ابتعد عن طريقي يا سامر»', en: '"Get out of my way, Samer"' },
    { ar: '«آسف، لم أقصد. هل تؤلمك؟»', en: '"Sorry, I didn\'t mean it. Does it hurt?"' },
    { ar: '«هيا نكمل، لم يحدث شيء»', en: '"Come on, let\'s carry on, it\'s nothing"' }];
  q9.correct = 1;
  q9.why = { ar: 'توقف يوسف، وجلس بجانب صديقه، واعتذر، وسأله عن قدمه.', en: 'Yusuf stopped, sat next to his friend, said sorry, and asked about his foot.' };
  var q10 = Q('human-q10');
  q10.type = 'comprehension';
  q10.q = { ar: 'ماذا فعل سامر بعد أن قال «صارت أحسن»؟', en: 'What did Samer do after he said "It\'s better now"?' };
  q10.options = [{ ar: 'قفز وقال: «أنا أركل الآن!»', en: 'Jumped up and said: "My kick now!"' },
    { ar: 'رجع إلى البيت وهو يبكي', en: 'Went back home crying' },
    { ar: 'جلس وحده على العشب', en: 'Sat on the grass on his own' }];
  q10.correct = 0;
  q10.why = { ar: 'كلمة «آسف» أصلحت الوجع، فرجع سامر يلعب ويركل.', en: 'The word "sorry" mended the hurt, and Samer went back to playing and kicking.' };

  /* human-r7: القمة، من فم النعمان على المنبر */
  var r7 = R('human-r7');
  r7.body = {
    ar: ['وقف النعمان بن بشير رضي الله عنهما على المنبر، وهو رجل كبير، يحكي قصة حدثت له وهو صغير.',
      'قال: أعطاني أبي عطية. فقالت أمي عمرة بنت رواحة رضي الله عنها: لا أرضى حتى تُشهد رسول الله صلى الله عليه وآله وسلم.',
      'فذهب أبوه إلى النبي صلى الله عليه وآله وسلم، فسأله: «أعطيت سائر ولدك مثل هذا؟». قال: لا. فقال: «فاتقوا الله، واعدلوا بين أولادكم». فرجع أبوه، وردّ العطية.',
      'خسر النعمان الهدية يومها. وبعد سنين رواها للناس من فوق المنبر: أن النبي صلى الله عليه وآله وسلم أراد لكل طفل في البيت حقه، ولو في هدية واحدة.',
      'يكفي في السبابة أن يأخذ كل واحد حقه منك. أما القمة فأن تحرس العدل في الأشياء الصغيرة: حين تقسم الكعكة بين إخوتك فتأخذ أنت القطعة الأخيرة، وحين يأتي دور الصغير في اللعبة، وفي الكلمة الطيبة لمن لا يلتفت إليه أحد.'],
    en: ['Al-Nu\'man ibn Bashir, may Allah be pleased with them both, stood on the pulpit as a grown man and told a story from when he was a boy.',
      'He said: my father gave me a gift. My mother, Amra bint Rawaha, may Allah be pleased with her, said: I will not be content until you take the Messenger of Allah, peace and blessings be upon him and his family, as witness.',
      'So his father went to the Prophet, peace and blessings be upon him and his family, who asked him, meaning: "Have you given all your other children the same?" He said no. The Prophet said: "Then be mindful of Allah, and be fair between your children." His father went back and took the gift back.',
      'Al-Nu\'man lost the present that day. Years later he told the story to people from the pulpit: the Prophet, peace and blessings be upon him and his family, wanted every child at home to have their due, even over a single present.',
      'On the index finger it is enough that everyone gets their due from you. The summit is guarding fairness in small things: when you cut the cake for your brothers and sisters and take the last piece yourself, when it is the little one\'s turn in the game, and in a kind word for the one nobody notices.']
  };
  r7.body.ar_f = r7.body.ar.slice();
  r7.body.ar_f[4] = 'يكفي في السبابة أن يأخذ كل واحد حقه منك. أما القمة فأن تحرسي العدل في الأشياء الصغيرة: حين تقسمين الكعكة بين إخوتك فتأخذين أنتِ القطعة الأخيرة، وحين يأتي دور الصغير في اللعبة، وفي الكلمة الطيبة لمن لا يلتفت إليه أحد.';
  r7.source = { ar: 'حديث في صحيح البخاري (2587)، يرويه النعمان بن بشير رضي الله عنهما وهو على المنبر.', en: 'A hadith in Sahih al-Bukhari (2587), told by al-Nu\'man ibn Bashir, may Allah be pleased with them both, from the pulpit.' };

  /* human-r8: لفظ «حثية»، والخاتمة بالإثبات */
  var r8 = R('human-r8');
  r8.body.ar[2] = 'فجاءه جابر وأخبره بالوعد، فحثا له أبو بكر حثية بكفّيه، فعدّها جابر فإذا هي خمسمئة، فقال له: خذ مثليها.';
  r8.body.ar[3] = 'حفظ أبو بكر رضي الله عنه وعد النبي صلى الله عليه وآله وسلم بعد وفاته، وأرسل مناديًا يبحث عن صاحبه. والسبابة أن تفي بوعدك الصغير، فكيف بمن يفي بوعد غيره؟';
  r8.body.en[2] = 'Jabir came and told him about the promise. Abu Bakr scooped up a double handful for him; Jabir counted it and it was five hundred, and Abu Bakr told him: take twice as much again.';
  r8.body.en[3] = 'Abu Bakr, may Allah be pleased with him, kept the Prophet\'s promise after his passing, and sent a caller out to find the person it was owed to. The index finger is keeping your own small promise; imagine keeping someone else\'s.';
  var q12 = Q('human-q12');
  q12.options = [{ ar: 'ليجمع المال في بيت المال أولًا', en: 'To gather the wealth into the treasury first' },
    { ar: 'ليسأل الناس كيف يقسم المال', en: 'To ask people how to divide the wealth' },
    { ar: 'ليفي بما وعد به النبي صلى الله عليه وآله وسلم', en: 'To keep what the Prophet had promised' }];
  q12.correct = 2;

  /* ch-human-1: الخيار الصحيح بطول غيره */
  var ch = window.AKHLAQ_CONTENT.choices.filter(function (c) { return c.id === 'ch-human-1'; })[0];
  ch.opts[1].t = { ar: 'أبتعد عن الزجاج، وأخبر أمي حين تعود.', en: 'Keep away from the glass, and tell Mum when she gets home.' };

  /* human-r9: 15+، جديدة */
  H.readings.push({
    id: 'human-r9', minutes: 4, ages: '15+',
    title: { ar: 'الصف الأول', en: 'The front row' },
    body: {
      ar: ['يوم الإثنين، وهو يربط حذاء الكرة الجديد، سأل إلياس أخاه حمزة: «مباراتي الأولى مع فريق الحي، السبت الساعة العاشرة. ستأتي؟». قال حمزة وعينه على الهاتف: «أكيد. وعد».',
        'ومساء الجمعة كتب ماجد في مجموعة الأصحاب: «غدًا رحلة الدراجات إلى البحيرة. نتحرك التاسعة، وأبي يوصلنا، والسيارة تتسع لستة». وتوالت الأسماء: «أنا». «أنا». «وأنا». وبقي مكان واحد.',
        'حمزة ينتظر هذه الرحلة منذ الصيف. كتب «وأنا»، وأرسلها، وقام إلى المطبخ يشرب.',
        'وفي الممر رأى حذاء إلياس عند الباب، ممسوحًا حتى يلمع، وفوقه ورقة بخط أخيه المائل: «حمزة في الصف الأول».',
        'وقف حمزة والكأس في يده، وقال في نفسه: مباراة صغار، يركضون كلهم وراء كرة واحدة، وبعد أسبوع لن يذكر إلياس من حضر. ثم نظر إلى الورقة مرة أخرى.',
        'رجع إلى غرفته، وكتب في المجموعة: «آسف يا شباب، عندي وعد لأخي. خذوا غيري». فرد ماجد: «وعد لطفل؟ يحزن خمس دقائق ثم ينسى»، وأرسل أحدهم وجهًا نائمًا. وبعد دقيقة كتب نزار: «أخذتُ المكان».',
        'يوم السبت كان الملعب باردًا، والمدرج ثلاث درجات من الإسمنت. خسر فريق إلياس أربعة لصفر. وفي جيب حمزة ظل الهاتف يهتز. أخرجه مرة، فرأى أول صورة: الدراجات على العشب، والماء يلمع خلفها. ثم أعاده إلى جيبه.',
        'وفي الدقيقة الأخيرة خطف إلياس الكرة من لاعب أطول منه بشبرين. فوقف حمزة وصفّر بإصبعين في فمه، وحده في الصف الأول.',
        'في طريق العودة قال إلياس وهو يمسح الطين عن ركبته: «خسرنا. لكن رأيت كيف أخذتها منه؟». قال حمزة: «رأيت. كنت في الصف الأول».',
        'وفي المساء نشر ماجد صورة الستة على صخرة عند البحيرة. كتب حمزة تحتها: «صورة رائعة. في الرحلة القادمة اسمي أول اسم». ثم حمل حذاء إلياس إلى الحوض، وبدأ يغسل عنه الطين.'],
      en: ['On Monday, while tying the laces of his new football boots, Ilyas asked his brother Hamza: "My first match with the neighbourhood team, Saturday at ten. Will you come?" Hamza said, his eyes on his phone: "Sure. Promise."',
        'On Friday evening Majid wrote in the friends\' group: "Bike trip to the lake tomorrow. We leave at nine, my dad\'s driving, and the car takes six." The names came one after another: "Me." "Me." "Me too." One place was left.',
        'Hamza had been waiting for this trip since the summer. He typed "Me too", sent it, and went to the kitchen for a drink.',
        'In the hallway he saw Ilyas\'s boots by the door, wiped until they shone, and on top of them a note in his brother\'s slanting handwriting: "Hamza in the front row."',
        'Hamza stood there with the glass in his hand and told himself: a kids\' match, all of them chasing one ball, and in a week Ilyas won\'t remember who came. Then he looked at the note again.',
        'He went back to his room and wrote in the group: "Sorry, guys, I promised my brother. Take someone else." Majid replied: "A promise to a kid? He\'ll be sad for five minutes and then forget," and someone sent a sleeping face. A minute later Nizar wrote: "I\'ll take the place."',
        'On Saturday the pitch was cold, and the stand was three steps of concrete. Ilyas\'s team lost four-nil. In Hamza\'s pocket the phone kept buzzing. He took it out once and saw the first photo: bikes on the grass, the water shining behind them. Then he put it back in his pocket.',
        'In the last minute Ilyas snatched the ball from a player a hand-span taller than him. Hamza stood up and whistled with two fingers in his mouth, alone in the front row.',
        'On the way home Ilyas said, wiping the mud off his knee: "We lost. But did you see how I took it off him?" Hamza said: "I saw. I was in the front row."',
        'That evening Majid posted a photo of the six of them on a rock by the lake. Hamza wrote underneath: "Great photo. Next trip, my name goes first." Then he carried Ilyas\'s boots to the sink and started washing off the mud.']
    },
    ask: { ar: 'متى كلّفك وعد صغير شيئًا كنت تريده كثيرًا؟', ar_f: 'متى كلّفكِ وعد صغير شيئًا كنتِ تريدينه كثيرًا؟', en: 'When has a small promise cost you something you really wanted?' },
    quote: null,
    source: { ar: 'قصة مؤلفة، أبطالها خياليون.', en: 'An original story with fictional characters.' }
  });
  H.quiz.push(
    { id: 'human-q13', readingId: 'human-r9', type: 'comprehension', correct: 1,
      q: { ar: 'ما الذي رآه حمزة مساء الجمعة، بعد أن أرسل «وأنا»؟', en: 'What did Hamza see on Friday evening, after he sent "Me too"?' },
      options: [{ ar: 'رسالة من أمه تذكّره بالمباراة', en: 'A message from his mother reminding him of the match' },
        { ar: 'حذاء أخيه عند الباب، وفوقه ورقة', en: 'His brother\'s boots by the door, with a note on them' },
        { ar: 'صورة الدراجات على عشب البحيرة', en: 'A photo of the bikes on the grass by the lake' }],
      why: { ar: 'الحذاء الممسوح والورقة «حمزة في الصف الأول» ذكّراه بأن أخاه ينتظره.', en: 'The polished boots and the note "Hamza in the front row" reminded him that his brother was counting on him.' } },
    { id: 'human-q14', readingId: 'human-r9', type: 'comprehension', correct: 2,
      q: { ar: 'ماذا كلّف الوعدُ حمزة؟', en: 'What did the promise cost Hamza?' },
      options: [{ ar: 'مكانه في فريق الحي، فلعب غيره', en: 'His place in the neighbourhood team, so someone else played' },
        { ar: 'هاتفه، فقد أخذه أبوه يوم المباراة', en: 'His phone, which his father took on match day' },
        { ar: 'مكانه في الرحلة، فأخذه نزار', en: 'His place on the trip, which Nizar took' }],
      why: { ar: 'انسحب من الرحلة أمام المجموعة، وسمع «وعد لطفل؟»، وأخذ نزار المكان الأخير.', en: 'He pulled out in front of the group, heard "a promise to a kid?", and Nizar took the last place.' } }
  );
})();

/* ───────────── مراجعة الكتابة، 24 نوفمبر 2026: المرحلة الخامسة (الإبهام) ─────────────
 * المعيار: دليل الكتابة حسب العمر. هذه الجولة تحلّ محلّ ما سبقها في الحقول المذكورة هنا وحدها، وتبقى المعرّفات كما هي:
 * - درجة «مسابقة وعون للغير»: خيارات سؤالها معقولة ومتقاربة الطول.
 * - sabiq-r1 (4-8): مشهد بحوار ونهاية بفعل بدل سطر العبرة؛ وsabiq-q1 وq2 يختبران تفاصيلها.
 * - sabiq-r2: الشكر والمسارعة بالإثبات؛ وsabiq-q3 بخيارات معقولة، وsabiq-q4 صار يختبر القراءة بدل موقف الأكواب المكرر.
 * - sabiq-r3: «عليه السلام» لأيوب ويوسف؛ وsabiq-q5 بخيارات معقولة، وsabiq-q6 يختبر آية النساء بدل موقف فيه لقب جارح.
 * - sabiq-r4: أمثلة من يوم القارئ؛ وsabiq-q7 بخيارات متقاربة.
 * - sabiq-r5 (15+): بعالم المراهق: اليوم الرابع حين تذهب الحماسة، والتواضع في الفعل؛ وsabiq-q8 من مشهدها، وجديد sabiq-q14.
 * - sabiq-r6 (4-8): sabiq-q9 وq10 صارا من القصة نفسها.
 * - sabiq-r7: الذي أسرع هو النبي صلى الله عليه وآله وسلم كما في البخاري 851، والترضي عن عقبة وعائشة، وخاتمة عملية؛ وخيارات q11 وq12 معقولة.
 * - sabiq-r8: لفظ «أكرمي ضيف رسول الله»، والترضي عن المرأة، وخاتمة بمشهد؛ وخيارات q13 معقولة.
 * - ch-sabiq-1: نتيجة الخيار الأول بمشهد بدل النفي، والخاتمة بالإثبات.
 * - جديد: sabiq-r9 (15+) قصة «لقطة أخرى» (الخير أمام الكاميرا والخير الذي لا يراه أحد)، وسؤالاها sabiq-q15 وsabiq-q16.
 * التحقق: فاطر 35:32، الواقعة 56:10-11، آل عمران 3:133، محمد 47:17، الأنعام 6:90، الأحزاب 33:21، النساء 4:69، العنكبوت 29:69،
 * الفجر 89:27-28، الحشر 59:9 على تنزيل (quran-simple عبر api.alquran.cloud)؛ البخاري 851 و1423 و3798 و4837 و6021 على hadith-api.
 */
(function () {
  var S = window.AKHLAQ_CONTENT.stages.sabiq;
  var R = function (id) { return S.readings.filter(function (r) { return r.id === id; })[0]; };
  var Q = function (id) { return S.quiz.filter(function (q) { return q.id === id; })[0]; };

  /* درجة «مسابقة وعون للغير» */
  var d1 = S.degrees[1];
  d1.q.options = [{ ar: 'أعلّمه بلطف، وأفرح حين يسبقني', en: 'Teach him gently, and be glad when he gets ahead of me' },
    { ar: 'أفعل الخير وحدي، فهو ما زال صغيرًا', en: 'Do the good on my own; he is still little' },
    { ar: 'أصحّح له أمام الجميع كلما أخطأ', en: 'Correct him in front of everyone whenever he slips' }];
  d1.q.correct = 0;

  /* sabiq-r1: 4-8، مشهد وحوار ونهاية بفعل */
  var r1 = R('sabiq-r1');
  r1.body = {
    ar: ['الخالة سعاد جارة مريم، وهي مريضة في سريرها منذ أيام.',
      'ومن نافذتها ترى مريم حديقة الخالة: أوراق صفراء في كل مكان، والزهور مائلة من العطش.',
      'يوم الجمعة استيقظت مريم قبل الجميع. لبست حذاءها بهدوء، وأخذت المكنسة الصغيرة.',
      'خشش، خشش. جمعت الأوراق كومة كبيرة. ثم ملأت الإبريق، وسقت الزهور واحدة واحدة.',
      'وفتحت الخالة سعاد نافذتها، فرأت الحديقة نظيفة والزهور واقفة. فرفعت يديها وقالت: «اللهم أكرم من فعل هذا». ولم تعرف من هو.',
      'وفي الجمعة التالية فتح أخوها الصغير عمر عينيه وقال: «إلى أين؟». قالت مريم هامسة: «تعال، واحمل الإبريق».',
      'فحمل عمر الإبريق بيديه الاثنتين، وانحنى على أول زهرة، وقال لها: «اشربي».'],
    en: ['Auntie Suad is Maryam\'s neighbour, and she has been ill in bed for days.',
      'From her window Maryam can see Auntie Suad\'s garden: yellow leaves everywhere, and the flowers drooping with thirst.',
      'On Friday Maryam woke before everyone. She slipped on her shoes quietly and took the little broom.',
      'Swish, swish. She swept the leaves into a big pile. Then she filled the watering can and watered the flowers one by one.',
      'Auntie Suad opened her window and saw the garden clean and the flowers standing up. She raised her hands and said: "O Allah, honour whoever did this." She never knew who it was.',
      'The next Friday her little brother Omar opened his eyes and said: "Where are you going?" Maryam whispered: "Come on, and carry the watering can."',
      'So Omar carried the watering can with both hands, bent over the first flower, and told it: "Drink up."']
  };
  var q1 = Q('sabiq-q1');
  q1.q = { ar: 'ماذا قالت الخالة سعاد حين رأت حديقتها نظيفة؟', en: 'What did Auntie Suad say when she saw her garden clean?' };
  q1.options = [{ ar: '«من دخل حديقتي دون إذن؟»', en: '"Who came into my garden without asking?"' },
    { ar: '«شكرًا يا مريم، رأيتك من النافذة»', en: '"Thank you, Maryam, I saw you from the window"' },
    { ar: '«اللهم أكرم من فعل هذا»', en: '"O Allah, honour whoever did this"' }];
  q1.correct = 2;
  q1.why = { ar: 'دعت الخالة سعاد لمن نظّف حديقتها، ولم تعرف أنها مريم.', en: 'Auntie Suad prayed for whoever had cleaned her garden, without knowing it was Maryam.' };
  var q2 = Q('sabiq-q2');
  q2.q = { ar: 'من جاء مع مريم في الجمعة التالية؟', en: 'Who came with Maryam the next Friday?' };
  q2.options = [{ ar: 'أخوها عمر، وحمل الإبريق', en: 'Her brother Omar, carrying the watering can' },
    { ar: 'الخالة سعاد، وجمعت معها الأوراق', en: 'Auntie Suad, who swept the leaves with her' },
    { ar: 'أمها، وسقت معها الزهور', en: 'Her mother, who watered the flowers with her' }];
  q2.correct = 0;
  q2.why = { ar: 'أخذت مريم أخاها معها، فسقى أول زهرة بيديه الاثنتين.', en: 'Maryam brought her brother along, and he watered the first flower with both hands.' };

  /* sabiq-r2: الشكر والمسارعة بالإثبات */
  var r2 = R('sabiq-r2');
  r2.body.ar[0] = 'في سورة فاطر ذكر الله ثلاثة أقسام من الناس، وأعلاها «سابق بالخيرات بإذن الله». و«بإذن الله» تعلّمنا أن السبق نفسه هداية من الله نشكره عليها.';
  r2.body.ar_f[0] = r2.body.ar[0];
  r2.body.en[0] = 'In Surat Fatir, Allah mentions three groups of people, the highest being those "racing to good deeds by Allah\'s permission". "By Allah\'s permission" teaches us that the racing itself is guidance from Allah, which we thank Him for.';
  r2.body.ar[2] = 'وأمرنا الله بالمسارعة: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ﴾ (آل عمران 3:133). والمسارعة أن تسبق نفسك إلى الخير قبل أن يسبقك الكسل: تقوم إلى الصلاة مع الأذان، وتحمل الكوب حين تراه.';
  r2.body.ar_f[2] = 'وأمرنا الله بالمسارعة: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ﴾ (آل عمران 3:133). والمسارعة أن تسبقي نفسك إلى الخير قبل أن يسبقك الكسل: تقومين إلى الصلاة مع الأذان، وتحملين الكوب حين ترينه.';
  r2.body.en[2] = 'Allah tells us to hurry (Al Imran 3:133), meaning: hasten to forgiveness from your Lord. Hurrying means getting to the good before laziness gets to you: getting up for prayer with the call, picking up the cup the moment you see it.';
  var q3 = Q('sabiq-q3');
  q3.options = [{ ar: 'أن السبق هداية من الله نشكره عليها', en: 'Racing ahead is guidance from Allah, and we thank Him for it' },
    { ar: 'أن نستأذن أهلنا قبل كل خير', en: 'We ask our parents\' permission before every good deed' },
    { ar: 'أن السبق يأتي وحده دون جهد منا', en: 'Racing ahead comes by itself, with no effort from us' }];
  q3.correct = 0;
  var q4 = Q('sabiq-q4');
  q4.type = 'comprehension';
  q4.q = { ar: 'ما المسارعة كما تشرحها القراءة؟', en: 'What is hurrying, as the reading explains it?' };
  q4.options = [{ ar: 'أن تركض بقدميك إلى المسجد', en: 'Running to the mosque on your feet' },
    { ar: 'أن تسبق الكسل إلى الخير', en: 'Getting to the good before laziness does' },
    { ar: 'أن تنهي الخير بسرعة لتلعب', en: 'Finishing the good quickly so you can play' }];
  q4.correct = 1;
  q4.why = { ar: 'المسارعة أن تقوم إلى الخير حين تراه، قبل أن يسبقك الكسل.', ar_f: 'المسارعة أن تقومي إلى الخير حين ترينه، قبل أن يسبقك الكسل.', en: 'Hurrying is getting up for the good when you see it, before laziness gets there first.' };

  /* sabiq-r3: «عليه السلام» للنبيين، وسؤالان من القراءة */
  var r3 = R('sabiq-r3');
  r3.body.ar[4] = 'جرّب هذا الأسبوع: اختر خلقًا واحدًا من نبي: صبر أيوب عليه السلام، أو صدق يوسف عليه السلام، أو رحمة النبي محمد صلى الله عليه وآله وسلم بالصغار، وطبّقه يومًا كاملًا.';
  r3.body.ar_f[4] = 'جرّبي هذا الأسبوع: اختاري خلقًا واحدًا من نبي: صبر أيوب عليه السلام، أو صدق يوسف عليه السلام، أو رحمة النبي محمد صلى الله عليه وآله وسلم بالصغار، وطبّقيه يومًا كاملًا.';
  r3.body.en[4] = 'Try this week: choose one quality of a prophet, such as the patience of Ayyub, peace be upon him, the honesty of Yusuf, peace be upon him, or the gentleness of the Prophet Muhammad, peace and blessings be upon him and his family, with children, and live it for a whole day.';
  var q5 = Q('sabiq-q5');
  q5.options = [{ ar: 'أن يقصّ أخبارهم على قومه', en: 'To tell their stories to his people' },
    { ar: 'أن يقتدي بهداهم', en: 'To follow their guidance' },
    { ar: 'أن يدعو لهم بالرحمة', en: 'To pray for mercy for them' }];
  q5.correct = 1;
  var q6 = Q('sabiq-q6');
  q6.type = 'comprehension';
  q6.q = { ar: 'بماذا وعدت آية النساء من يطيع الله ورسوله؟', en: 'What does the verse of an-Nisa promise those who obey Allah and His Messenger?' };
  q6.options = [{ ar: 'أن يصير نبيًّا مثلهم', en: 'That they will become prophets like them' },
    { ar: 'أن يكون في رفقة النبيين والصالحين', en: 'That they will be in the company of the prophets and the righteous' },
    { ar: 'أن يحفظ أسماء الأنبياء كلها', en: 'That they will know all the prophets\' names by heart' }];
  q6.correct = 1;
  q6.why = { ar: 'الأنبياء عليهم السلام نور نمشي في ضوئه، والجائزة أن نكون معهم: ﴿وَحَسُنَ أُولَٰئِكَ رَفِيقًا﴾ (النساء 4:69).', en: 'The prophets, peace be upon them, are a light we walk by, and the reward is to be with them: what fine companions they are (an-Nisa 4:69).' };

  /* sabiq-r4: أمثلة من يوم القارئ */
  var r4 = R('sabiq-r4');
  r4.body.ar[2] = 'الخطة: كل مساء اكتب عملًا خفيًّا واحدًا ستفعله غدًا: ملء قارورة أخيك بالماء قبل المدرسة، أو طيّ سجادة صلاة جدتك، أو دعاء لصديق باسمه.';
  r4.body.ar_f[2] = 'الخطة: كل مساء اكتبي عملًا خفيًّا واحدًا ستفعلينه غدًا: ملء قارورة أخيك بالماء قبل المدرسة، أو طيّ سجادة صلاة جدتك، أو دعاء لصديقتك باسمها.';
  r4.body.en[2] = 'The plan: every evening, write one hidden good deed you will do tomorrow: filling your brother\'s water bottle before school, folding your grandmother\'s prayer mat, praying for a friend by name.';
  var q7 = Q('sabiq-q7');
  q7.options = [{ ar: 'أكتبه في دفتري، ولا أخبر به أحدًا', en: 'Note it in my notebook and tell no one' },
    { ar: 'أخبر صديقي المقرّب وحده', ar_f: 'أخبر صديقتي المقرّبة وحدها', en: 'Tell only my closest friend' },
    { ar: 'أنشره ليقلّدني الآخرون', en: 'Post it so others copy me' }];
  q7.correct = 0;

  /* sabiq-r5: 15+، اليوم الرابع */
  var r5 = R('sabiq-r5');
  r5.body = {
    ar: ['اليوم الأول من أي عزيمة سهل. تضبط المنبّه قبل أذان الفجر بربع ساعة لتصلي ركعتين في آخر الليل، فتقوم قبل أن يرن، وتشعر أنك صرت شخصًا جديدًا. واليوم الثاني والثالث يمضيان بالحماسة نفسها تقريبًا.',
      'ثم يأتي اليوم الرابع. نمت متأخرًا بعد مقطع جرّ مقطعًا، والغرفة باردة، والبطانية دافئة، والحماسة التي حملتك ثلاثة أيام اختفت. بقي المنبّه وحده، وصوت في رأسك يقول: «اليوم فقط، وغدًا تعود».',
      'في ذلك الصباح تبدأ المجاهدة التي ذكرها القرآن: ﴿وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا﴾ (العنكبوت 29:69). المجاهدة جهد النفس اليومي: أن تقوم إلى الخير وهي تريد الراحة، ولا يدفعك إليه إلا أنك قررت.',
      'والسبل في الآية جمع: من يثبت على طريق من الخير يُفتح له طريق آخر. الذي يثبت على ركعتين في آخر الليل قد يجد نفسه بعد شهر يقرأ صفحة بعدهما، دون أن يكتب ذلك في قائمة عزائمه.',
      'وفي الطريق امتحان أخفى من البرد: أن تمرّ بباب أخيك النائم فتشعر أنك أفضل منه. لذلك وصفت آية فاطر السابق بأنه سابق ﴿بِإِذْنِ اللَّهِ﴾ (فاطر 35:32). القيام هدية وصلتك، ومن يعرف أنها هدية يغلق باب أخيه بهدوء حتى لا يوقظه، ويدعو له في سجوده.',
      'وآخر الطريق نداء رقيق: ﴿يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ۝ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَرْضِيَّةً﴾ (الفجر 89:27-28). النفس التي كانت تقاوم في اليوم الرابع تسكن مع الأيام، ويصير الخير راحتها.',
      'خطوة عملية: اختر خيرًا صغيرًا واحدًا، واكتب على ورقة: «اليوم الرابع». وحين يأتي اليوم الذي لا تريده فيه، افعله في أصغر صورة ممكنة، ركعتين خفيفتين أو صفحة واحدة، ولا تتركه.'],
    en: ['Day one of any resolution is easy. You set the alarm a quarter of an hour before the dawn call to pray two rak\'as at the end of the night, you are up before it rings, and you feel like a new person. Days two and three go by on almost the same energy.',
      'Then comes day four. You slept late after one clip led to another, the room is cold, the blanket is warm, and the enthusiasm that carried you for three days has gone. Only the alarm is left, and a voice in your head saying: "Just today. Back to it tomorrow."',
      'That morning is where the striving the Quran speaks of begins (al-\'Ankabut 29:69), meaning: those who strive for Us, We will surely guide them to Our paths. Striving is the daily effort of the self: getting up to do good while it wants rest, with nothing pushing you but the fact that you decided.',
      'The word "paths" is plural: whoever keeps to one path of good finds another opening. Someone who keeps up two rak\'as at the end of the night may find, a month later, that they read a page after them too, without ever putting it on a list of resolutions.',
      'On the way there is a test quieter than the cold: walking past your sleeping brother\'s door and feeling you are better than him. That is why the verse of Fatir describes the one racing ahead as racing "by Allah\'s permission" (Fatir 35:32). Getting up is a gift that reached you, and someone who knows it is a gift closes their brother\'s door softly so as not to wake him, and prays for him in prostration.',
      'At the end of the road the Quran calls tenderly (al-Fajr 89:27-28), meaning: O soul at peace, return to your Lord, well pleased and pleasing. The self that resisted on day four settles with the days, and good becomes its rest.',
      'A practical step: choose one small good deed and write on a piece of paper: "Day four". When the day comes that you do not want to, do it in the smallest form possible, two short rak\'as or a single page, and do not drop it.']
  };
  r5.body.ar_f = ['اليوم الأول من أي عزيمة سهل. تضبطين المنبّه قبل أذان الفجر بربع ساعة لتصلّي ركعتين في آخر الليل، فتقومين قبل أن يرن، وتشعرين أنكِ صرتِ شخصًا جديدًا. واليوم الثاني والثالث يمضيان بالحماسة نفسها تقريبًا.',
    'ثم يأتي اليوم الرابع. نمتِ متأخرة بعد مقطع جرّ مقطعًا، والغرفة باردة، والبطانية دافئة، والحماسة التي حملتكِ ثلاثة أيام اختفت. بقي المنبّه وحده، وصوت في رأسك يقول: «اليوم فقط، وغدًا تعودين».',
    'في ذلك الصباح تبدأ المجاهدة التي ذكرها القرآن: ﴿وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا﴾ (العنكبوت 29:69). المجاهدة جهد النفس اليومي: أن تقومي إلى الخير ونفسكِ تريد الراحة، ولا يدفعكِ إليه إلا أنكِ قررتِ.',
    r5.body.ar[3],
    'وفي الطريق امتحان أخفى من البرد: أن تمرّي بباب أختك النائمة فتشعري أنكِ أفضل منها. لذلك وصفت آية فاطر السابق بأنه سابق ﴿بِإِذْنِ اللَّهِ﴾ (فاطر 35:32). القيام هدية وصلتكِ، ومن تعرف أنها هدية تغلق باب أختها بهدوء حتى لا توقظها، وتدعو لها في سجودها.',
    r5.body.ar[5],
    'خطوة عملية: اختاري خيرًا صغيرًا واحدًا، واكتبي على ورقة: «اليوم الرابع». وحين يأتي اليوم الذي لا تريدينه فيه، افعليه في أصغر صورة ممكنة، ركعتين خفيفتين أو صفحة واحدة، ولا تتركيه.'];
  var q8 = Q('sabiq-q8');
  q8.q = { ar: 'في القراءة، ماذا يفعل من يعرف أن قيامه في الليل هدية من الله؟', ar_f: 'في القراءة، ماذا تفعل من تعرف أن قيامها في الليل هدية من الله؟', en: 'In the reading, what does someone do who knows that getting up at night is a gift from Allah?' };
  q8.options = [{ ar: 'يوقظ أخاه ليريه كيف يقوم مبكرًا', ar_f: 'توقظ أختها لتريها كيف تقوم مبكرًا', en: 'Wakes their brother to show him how to get up early' },
    { ar: 'يغلق باب أخيه بهدوء، ويدعو له', ar_f: 'تغلق باب أختها بهدوء، وتدعو لها', en: 'Closes their brother\'s door softly, and prays for him' },
    { ar: 'يخبر أهله في الصباح كم ركعة صلّى', ar_f: 'تخبر أهلها في الصباح كم ركعة صلّت', en: 'Tells the family in the morning how many rak\'as they prayed' }];
  q8.correct = 1;
  q8.why = { ar: 'السبق «بإذن الله» هدية تُشكر، فيظهر التواضع في الفعل: باب يُغلق بهدوء، ودعاء في السجود.', en: 'Racing ahead "by Allah\'s permission" is a gift to be thankful for, so humility shows in the action: a door closed softly, a prayer in prostration.' };
  S.quiz.push({ id: 'sabiq-q14', readingId: 'sabiq-r5', type: 'comprehension', correct: 2,
    q: { ar: 'ماذا تقترح القراءة لليوم الذي لا تريد فيه الخير الذي بدأته؟', ar_f: 'ماذا تقترح القراءة لليوم الذي لا تريدين فيه الخير الذي بدأتِه؟', en: 'What does the reading suggest for the day you do not want to do the good you started?' },
    options: [{ ar: 'أن ترتاح منه حتى تعود الحماسة', ar_f: 'أن ترتاحي منه حتى تعود الحماسة', en: 'Take a break from it until the enthusiasm returns' },
      { ar: 'أن تبدأ من جديد يوم الأحد القادم', ar_f: 'أن تبدئي من جديد يوم الأحد القادم', en: 'Start again fresh next Sunday' },
      { ar: 'أن تفعله في أصغر صورة ولا تتركه', ar_f: 'أن تفعليه في أصغر صورة ولا تتركيه', en: 'Do it in its smallest form, and not drop it' }],
    why: { ar: 'اليوم الرابع هو المجاهدة نفسها: ركعتان خفيفتان أو صفحة واحدة، والطريق باقٍ.', en: 'Day four is the striving itself: two short rak\'as or a single page, and the road stays open.' } });

  /* sabiq-r6: سؤالان من القصة نفسها */
  var q9 = Q('sabiq-q9');
  q9.type = 'comprehension';
  q9.q = { ar: 'ماذا وجد أبو نور حين عاد إلى البيت؟', en: 'What did Noor\'s father find when he came home?' };
  q9.options = [{ ar: 'نورًا تنتظره عند الباب', en: 'Noor waiting for him at the door' },
    { ar: 'حذاءه مرتّبًا ينتظره', en: 'His shoes waiting for him, tidy' },
    { ar: 'ورقة عليها اسم نور', en: 'A note with Noor\'s name on it' }];
  q9.correct = 1;
  q9.why = { ar: 'رتّبت نور الأحذية صفًّا جميلًا، فوجد أبوها حذاءه ينتظره.', en: 'Noor lined the shoes up neatly, so her father found his shoes waiting for him.' };
  var q10 = Q('sabiq-q10');
  q10.type = 'comprehension';
  q10.q = { ar: 'لماذا ابتسمت نور، مع أن أباها لم يعرف من رتّب الأحذية؟', en: 'Why did Noor smile, even though her father did not know who had tidied the shoes?' };
  q10.options = [{ ar: 'لأنها ستخبره في الصباح', en: 'Because she would tell him in the morning' },
    { ar: 'لأن أمها رأتها ترتّبها', en: 'Because her mother had seen her do it' },
    { ar: 'لأن الله يعرف', en: 'Because Allah knows' }];
  q10.correct = 2;
  q10.why = { ar: 'فعلتها نور «لأن الله يحب ذلك»، وفرحت لأن الله يعرف.', en: 'Noor did it "because Allah loves it", and was glad because Allah knows.' };

  /* sabiq-r7: القمة، والذي أسرع هو النبي صلى الله عليه وآله وسلم */
  var r7 = R('sabiq-r7');
  r7.body.ar[1] = 'قال عقبة بن الحارث رضي الله عنه: صلّيت العصر خلف النبي صلى الله عليه وآله وسلم في المدينة. فلما سلّم قام مسرعًا، يتخطى الناس إلى بيته، ففزع الناس من سرعته.';
  r7.body.ar[2] = 'ثم خرج إليهم، فرأى العجب في وجوههم، فقال: «ذكرت شيئًا من تبر عندنا، فكرهت أن يحبسني، فأمرت بقسمته». والتبر قطع من الذهب. لم ينتظر الغد، ولم ينتظر أن يذكّره أحد.';
  r7.body.ar[3] = 'وكان صلى الله عليه وآله وسلم يقوم الليل حتى تتفطر قدماه، فسألته السيدة عائشة رضي الله عنها: لم تصنع هذا يا رسول الله وقد غفر الله لك؟ فقال: «أفلا أحب أن أكون عبدًا شكورًا».';
  r7.body.ar[4] = 'والقمة أمامنا نور نمشي إليه. جرّب هذا الأسبوع: إذا خطر لك خير صغير، فافعله في الدقيقة نفسها قبل أن يبرد: الصدقة التي نويتها، والاتصال بجدتك، والكوب الذي تراه على الطاولة. وإذا صليت ركعتين في الليل، فاجعلهما شكرًا.';
  r7.body.ar_f = r7.body.ar.slice();
  r7.body.ar_f[4] = 'والقمة أمامنا نور نمشي إليه. جرّبي هذا الأسبوع: إذا خطر لكِ خير صغير، فافعليه في الدقيقة نفسها قبل أن يبرد: الصدقة التي نويتِها، والاتصال بجدتك، والكوب الذي ترينه على الطاولة. وإذا صليتِ ركعتين في الليل، فاجعليهما شكرًا.';
  r7.body.en[1] = 'Uqba ibn al-Harith, may Allah be pleased with him, said: I prayed the afternoon prayer behind the Prophet, peace and blessings be upon him and his family, in Madina. As soon as he finished the prayer, he got up quickly and made his way past the people to his home, and they were alarmed at his hurry.';
  r7.body.en[2] = 'Then he came back out, saw the surprise on their faces, and said, meaning: "I remembered some gold we had, and did not want it to hold me back, so I ordered it to be shared out." He did not wait for tomorrow, or for anyone to remind him.';
  r7.body.en[3] = 'He used to stand in prayer at night until his feet cracked, and Lady Aisha, may Allah be pleased with her, asked him: why do you do this, Messenger of Allah, when Allah has forgiven you? He said, meaning: "Should I not love to be a grateful servant?"';
  r7.body.en[4] = 'The summit is a light ahead of us that we walk towards. Try this week: when a small good thing comes to mind, do it that same minute, before it goes cold: the charity you intended, the call to your grandmother, the cup you see on the table. And if you pray two rak\'as at night, let them be a thank-you.';
  var q11 = Q('sabiq-q11');
  q11.options = [{ ar: 'ليأمر بقسمة ذهب كان في بيته', en: 'To have some gold at home shared out' },
    { ar: 'ليحضر طعامًا لضيف ينتظره', en: 'To fetch food for a guest who was waiting' },
    { ar: 'ليطمئن على أحد أهله المرضى', en: 'To check on someone in his family who was ill' }];
  q11.correct = 0;
  var q12 = Q('sabiq-q12');
  q12.options = [{ ar: 'إنه يريد أن يكون قدوة لأصحابه', en: 'That he wanted to be an example to his Companions' },
    { ar: 'إنه يحب أن يكون عبدًا شكورًا', en: 'That he loved to be a grateful servant' },
    { ar: 'إنه يرجو أن يبلغ درجة أعلى', en: 'That he hoped to reach a higher rank' }];
  q12.correct = 1;

  /* sabiq-r8: لفظ الحديث، وخاتمة بمشهد */
  var r8 = R('sabiq-r8');
  r8.body.ar[1] = 'فذهب به إلى امرأته رضي الله عنها، وقال: أكرمي ضيف رسول الله صلى الله عليه وآله وسلم. فقالت: ما عندنا إلا قوت صبياني. فاتفقا على خطة: تهيئ الطعام، وتنيّم الصبيان، ثم تقوم كأنها تصلح السراج فتطفئه.';
  r8.body.ar[3] = 'ونزل فيهما: ﴿وَيُؤْثِرُونَ عَلَىٰ أَنْفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ﴾ (الحشر 59:9). ونام الضيف شبعان تلك الليلة، ولم يعرف أنه أكل عشاء الصبيان، ولا أن السراج أُطفئ من أجله.';
  r8.body.en[1] = 'He took him home to his wife, may Allah be pleased with her, and said: honour the guest of the Messenger of Allah, peace and blessings be upon him and his family. She said: we have nothing but my children\'s food. So they made a plan: she would prepare the food, put the children to sleep, then get up as if to fix the lamp and put it out.';
  r8.body.en[3] = 'And about them it was revealed, meaning: "They prefer others over themselves, even though they are in need" (al-Hashr 59:9). The guest slept with a full stomach that night, never knowing he had eaten the children\'s supper, or that the lamp had been put out for his sake.';
  var q13 = Q('sabiq-q13');
  q13.options = [{ ar: 'حتى لا يرى الضيف أنهما لا يأكلان', en: 'So the guest would not see that they were not eating' },
    { ar: 'حتى ينام الصبيان ولا يطلبوا الطعام', en: 'So the children would sleep and not ask for food' },
    { ar: 'حتى يبقى زيت السراج لليلة أخرى', en: 'To save the lamp oil for another night' }];
  q13.correct = 0;

  /* ch-sabiq-1: نتيجة بمشهد، وخاتمة بالإثبات */
  var ch = window.AKHLAQ_CONTENT.choices.filter(function (c) { return c.id === 'ch-sabiq-1'; })[0];
  ch.opts[0].out = { ar: 'لعب حمزة وفاز فريقه بهدفين. وحين رنّ الجرس رأى أنسًا يدخل الصف وحده كما خرج، ونصف شطيرته ما زال في يده.', en: 'Hamza played, and his team won by two goals. When the bell rang, he saw Anas walk back into class alone, just as he had come out, half his sandwich still in his hand.' };
  ch.end = { ar: 'أكثر الخير قريب: يكفي أن نراه قبل غيرنا، ثم نمشي إليه.', en: 'Most good is close at hand: it is enough to see it first, then walk toward it.' };

  /* sabiq-r9: 15+، جديدة */
  S.readings.push({
    id: 'sabiq-r9', minutes: 5, ages: '15+',
    title: { ar: 'لقطة أخرى', en: 'One more take' },
    body: {
      ar: ['صباح السبت، وأعضاء نادي التطوع في المدرسة يوزعون سلال الطعام في الحي. سلمى تحمل السلال، وصديقتها رنا تحمل الهاتف.',
        'صعدتا إلى الطابق الرابع، إلى باب العم صابر، رجل كبير يسكن وحده، ومدّت سلمى إليه السلة. قالت رنا: «انتظري، الضوء سيئ. أعيدي». ثم: «ابتسمي أكثر». ثم: «مرة أخيرة، السلة لم تظهر».',
        'وفي اللقطة الرابعة كان العم صابر ما زال واقفًا، يمد يده إلى سلة لا تصل، وعيناه في الأرض.',
        'نشرت سلمى الصورة في المساء. وصلت إلى مئتين واثني عشر إعجابًا، وكتبت معلمة العلوم تحتها: «قدوة!». وصارت سلمى تفتح الهاتف كل ربع ساعة لترى الرقم. وكان في صدرها شيء دافئ، وشيء آخر ثقيل لا تعرف اسمه.',
        'وفي الليل كبّرت الصورة لترى ابتسامتها، فرأت عيني العم صابر. كانتا في الأرض.',
        'السبت التالي مرضت رنا، وأُلغي توزيع النادي. فاشترت سلمى من مصروفها كيس خبز وعلبة تمر، وأخذت معها أخاها الصغير معاذًا يحمل علبة التمر، وصعدا إلى العم صابر بلا ناد ولا كاميرا. المصعد معطّل، والطابق الرابع بعيد.',
        'في الطابق الثالث وقفت تلتقط أنفاسها، ووجدت يدها تُخرج الهاتف من جيبها وحدها: صورة سريعة مع الكيس، للحساب فقط. ثم أعادته إلى جيبها، وأكملت الصعود.',
        'فتح العم صابر الباب، ونظر هذه المرة في وجهها. قال: «أنتِ بنت الصورة؟ تفضلا، الشاي جاهز». وعلى الشرفة حدّثهما عن نباتات زوجته رحمها الله، ثلاثة أصص لم يسقها أحد منذ أتعبه ظهره. فملأت سلمى الإبريق وسقتها.',
        'وفي النزول تذكرت حديثًا للنبي صلى الله عليه وآله وسلم قرأته عليهم المعلمة، عن سبعة يظلهم الله في ظله، منهم: «ورجل تصدق بصدقة فأخفاها حتى لا تعلم شماله ما تنفق يمينه». فضحكت وحدها على الدرج: في السبت الماضي عرف الحي كله ما أنفقت يمينها، وعرفه معه مئتان واثنا عشر إعجابًا.',
        'وفي البيت فتحت حسابها، ونظرت طويلًا إلى صورة السبت الماضي، ثم أخفتها. كان الرقم ما زال يشدّها، فقلبت الهاتف على وجهه، وكتبت في ورقة على مكتبها: «الثلاثاء: شاي عند العم صابر. الأصيص الثالث يحتاج ماء أكثر».'],
      en: ['Saturday morning, and the school volunteering club is handing out food baskets around the neighbourhood. Salma carries the baskets; her friend Rana carries the phone.',
        'They climbed to the fourth floor, to the door of Uncle Saber, an old man who lives alone, and Salma held out the basket. Rana said: "Wait, the light\'s bad. Again." Then: "Smile more." Then: "One last time, the basket didn\'t show."',
        'On the fourth take Uncle Saber was still standing there, reaching for a basket that never arrived, his eyes on the floor.',
        'Salma posted the photo that evening. It reached two hundred and twelve likes, and the science teacher commented: "A role model!" Salma kept opening her phone every quarter of an hour to check the number. There was something warm in her chest, and something else, heavy, that she had no name for.',
        'That night she zoomed in to look at her smile, and saw Uncle Saber\'s eyes instead. They were on the floor.',
        'The next Saturday Rana was ill and the club\'s round was cancelled. So Salma bought a bag of bread and a box of dates with her pocket money and took her little brother Muadh along to carry the dates. The two of them went up to Uncle Saber, with no club and no camera. The lift was broken, and the fourth floor was a long way up.',
        'On the third floor she stopped to catch her breath, and found her hand taking the phone out of her pocket by itself: a quick photo with the bag, just for the account. Then she put it back and kept climbing.',
        'Uncle Saber opened the door, and this time he looked at her face. He said: "You\'re the girl from the photo? Come in, both of you, the tea\'s ready." On the balcony he told them about his late wife\'s plants, may Allah have mercy on her: three pots nobody had watered since his back gave out. So Salma filled the jug and watered them.',
        'On the way down she remembered a hadith of the Prophet, peace and blessings be upon him and his family, that their teacher had read to them, about seven people Allah shades in His shade, among them, meaning: "a man who gave in charity and hid it, so that his left hand did not know what his right hand gave." She laughed to herself on the stairs: last Saturday the whole neighbourhood knew what her right hand gave, and so did two hundred and twelve likes.',
        'At home she opened her account, looked for a long time at last Saturday\'s photo, then hid it. The number still tugged at her, so she turned the phone face down and wrote on a note on her desk: "Tuesday: tea at Uncle Saber\'s. The third pot needs more water."']
    },
    ask: { ar: 'متى فعلتَ خيرًا ثم انتظرت أن يراه أحد؟ وماذا تغيّر فيه حين رآه الناس؟', ar_f: 'متى فعلتِ خيرًا ثم انتظرتِ أن يراه أحد؟ وماذا تغيّر فيه حين رآه الناس؟', en: 'When have you done something good and then waited for someone to see it? What changed in it once people saw?' },
    quote: { ar: '«وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لاَ تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ»', en: 'Meaning: A man who gave in charity and hid it, so that his left hand did not know what his right hand gave.', ref: 'صحيح البخاري 1423، عن أبي هريرة رضي الله عنه', checked: 'hadith-api (fawazahmed0)', verify: true },
    source: { ar: 'قصة مؤلفة، أبطالها خياليون، وفيها حديث من صحيح البخاري.', en: 'An original story with fictional characters, with a hadith from Sahih al-Bukhari.' }
  });
  S.quiz.push(
    { id: 'sabiq-q15', readingId: 'sabiq-r9', type: 'comprehension', correct: 0,
      q: { ar: 'ماذا رأت سلمى حين كبّرت الصورة في الليل؟', en: 'What did Salma see when she zoomed in on the photo that night?' },
      options: [{ ar: 'عيني العم صابر في الأرض', en: 'Uncle Saber\'s eyes on the floor' },
        { ar: 'أن السلة لم تظهر في اللقطة', en: 'That the basket did not show in the shot' },
        { ar: 'تعليق المعلمة تحت الصورة', en: 'The teacher\'s comment under the photo' }],
      why: { ar: 'كانت تبحث عن ابتسامتها، فرأت ما كلّفته اللقطات الأربع للعم صابر.', en: 'She was looking for her own smile, and saw what the four takes had cost Uncle Saber.' } },
    { id: 'sabiq-q16', readingId: 'sabiq-r9', type: 'comprehension', correct: 2,
      q: { ar: 'ماذا فعلت سلمى بالهاتف على درج الطابق الثالث؟', en: 'What did Salma do with her phone on the third-floor stairs?' },
      options: [{ ar: 'صوّرت نفسها مع الكيس للحساب', en: 'Took a photo of herself with the bag for the account' },
        { ar: 'اتصلت برنا لتخبرها أين هي', en: 'Called Rana to tell her where she was' },
        { ar: 'أخرجته، ثم أعادته إلى جيبها', en: 'Took it out, then put it back in her pocket' }],
      why: { ar: 'شدّتها الصورة مرة أخرى، فصعدت بلا لقطة، ونظر إليها العم صابر هذه المرة.', en: 'The photo pulled at her again; she climbed on without a shot, and this time Uncle Saber looked at her.' } }
  );
})();

/* ───────────── من حكايات العالم، الدفعة الأولى، 24 نوفمبر 2026 ─────────────
 * Non-religious retellings from world heritage, one per age band (4-8, 9-14, 15+) for each stage, written in our own words
 * from public-domain tales. world:"tale" shows the «من حكايات العالم» tag on the card; origin is the one-line origin under the title.
 * Names of invented characters are fictional; names inside old tales are the tales' own.
 */
(function () {
  var S = window.AKHLAQ_CONTENT.stages;
  function R(k, o) { S[k].readings.push(Object.assign({ world: "tale", quote: null }, o)); }
  function Q(k, list) { list.forEach(function (q) { S[k].quiz.push(Object.assign({ type: "comprehension" }, q)); }); }
  function O(a) { return a.map(function (x) { return { ar: x[0], en: x[1] }; }); }
  var TALE = { ar: "أعدنا حكايتها بكلماتنا.", en: "Retold in our own words." };

  /* ── الخنصر: الغفلة، والأذن المغلقة ── */
  R("zombie", { id: "zombie-r10", minutes: 2, ages: "4-8",
    title: { ar: "صحن الخشب", en: "The wooden bowl" },
    origin: { ar: "من حكايات الأخوين غريم", en: "From the Brothers Grimm" },
    body: {
      ar: ["كان جدّ رامي يأكل معهم على المائدة كل يوم.",
        "ثم كبر الجد، فصارت يداه ترتجفان، وصار الحساء يسيل من ملعقته على المفرش.",
        "وفي يوم سقط صحنه على الأرض، فانكسر.",
        "قال أبو رامي: «يأكل أبي من اليوم وحده، عند الباب». وأعطوه صحنًا من خشب لا ينكسر.",
        "فصار الجد يأكل في الزاوية، وينظر إلى المائدة من بعيد، وعيناه تلمعان بالدمع.",
        "وفي المساء رأى الأب رامي جالسًا على الأرض، يجمع قطعًا صغيرة من الخشب.",
        "قال: «ماذا تصنع يا رامي؟».",
        "قال رامي: «أصنع صحنًا من خشب. لك ولأمي، حين تكبران».",
        "نظر الأب إلى الأم طويلًا. ثم قاما معًا، وأمسكا يد الجد، وأجلساه في مكانه على المائدة.",
        "وفي الغداء التالي سال الحساء على المفرش، فمسحته الأم بهدوء، وناولت الجد الخبز."],
      en: ["Rami's grandfather ate with them at the table every day.",
        "Then Grandfather grew old. His hands began to shake, and soup dribbled from his spoon onto the tablecloth.",
        "One day his bowl fell to the floor and broke.",
        "Rami's father said, “From today my father eats on his own, by the door.” And they gave him a wooden bowl that could not break.",
        "So Grandfather ate in the corner, looking at the table from far away, his eyes shining with tears.",
        "That evening Rami's father saw him sitting on the floor, gathering little pieces of wood.",
        "“What are you making, Rami?” he asked.",
        "“A wooden bowl,” said Rami. “For you and Mum, when you get old.”",
        "His father looked at his mother for a long time. Then they both got up, took Grandfather's hand, and sat him back in his place at the table.",
        "At the next lunch the soup dribbled onto the cloth again. Rami's mother wiped it up quietly and passed Grandfather the bread."]
    },
    ask: { ar: "من في بيتنا يحتاج أن نقترب منه أكثر؟", en: "Who in our home needs us to come closer?" },
    source: { ar: "حكاية ألمانية في مجموعة الأخوين غريم (1812)، أعدنا حكايتها بكلماتنا، والاسم من عندنا.", en: "A German tale from the Brothers Grimm collection (1812), retold in our own words; the boy's name is ours." } });
  R("zombie", { id: "zombie-r11", minutes: 3, ages: "9-14",
    title: { ar: "الحذاء المخيط", en: "The stitched trainer" },
    origin: { ar: "من «كلستان» لسعدي الشيرازي", en: "From Saadi's Gulistan" },
    body: {
      ar: ["تمزّق جانب حذاء مازن الرياضي قبل المباراة بيومين. وكان كل لاعب في الفريق يلبس حذاءً جديدًا لامعًا، إلا هو.",
        "قال لأبيه: «اشترِ لي واحدًا». قال الأب: «في آخر الشهر إن شاء الله». فدخل مازن غرفته، وأغلق الباب بقوة، وجلس يقلّب صور الأحذية في الهاتف، وكل صورة تزيده ضيقًا.",
        "طرقت جدّته الباب، وجلست على طرف السرير، وقالت: «سأحكي لك شيئًا كتبه سعدي الشيرازي، شاعر من بلاد فارس، قبل نحو ثمانمئة سنة».",
        "«قال سعدي: ما شكوتُ من أيامي إلا مرة واحدة: كانت قدماي حافيتين، وليس معي ما أشتري به حذاءً. فدخلت جامع الكوفة ضيّق الصدر، فرأيت هناك رجلًا ليست له قدمان. فحمدت الله على قدميّ، وصبرت على الحفاء».",
        "سكت مازن. قال في نفسه: حكاية جدّات. ما علاقتها بحذائي؟",
        "وفي الليل لم يستطع النوم. أخرج قدميه من تحت الغطاء، وحرّك أصابعه في الظلام. وتذكّر أنه ركض أمس حول الملعب عشر مرات، ولم يفكر لحظة واحدة في قدميه.",
        "في الصباح أخرج إبرة وخيطًا من درج جدّته، وخاط جانب الحذاء بغرز غير مستوية.",
        "وفي المباراة سجّل هدفًا بقدمه اليسرى. وحين ركض إلى زملائه نظر إلى الحذاء المخيط، وضحك، ثم التفت إلى المدرّجات حيث تجلس جدّته، ورفع لها قدمه."],
      en: ["Two days before the match, the side of Mazin's trainer split open. Every player on the team wore shiny new shoes, except him.",
        "“Buy me a pair,” he told his father. “At the end of the month, in sha Allah,” said his father. Mazin went into his room, shut the door hard, and sat scrolling through pictures of trainers on his phone. Every picture made him feel worse.",
        "His grandmother knocked and sat on the edge of the bed. “Let me tell you something Saadi of Shiraz wrote,” she said. “He was a Persian poet, about eight hundred years ago.”",
        "“Saadi said: I only ever complained about my lot once. My feet were bare and I had nothing to buy shoes with. I went into the great mosque of Kufa with a heavy heart, and there I saw a man who had no feet. So I praised Allah for my feet, and bore going barefoot.”",
        "Mazin said nothing. A grandma story, he thought. What has it got to do with my shoes?",
        "That night he could not sleep. He pushed his feet out from under the blanket and wiggled his toes in the dark. He remembered running ten laps of the pitch yesterday without thinking about his feet once.",
        "In the morning he took a needle and thread from his grandmother's drawer and sewed up the side of the shoe with uneven stitches.",
        "In the match he scored with his left foot. As he ran to his teammates he looked down at the stitched shoe and laughed, then turned to the stands where his grandmother sat, and lifted his foot to her."]
    },
    ask: { ar: "ما النعمة التي تستعملها كل يوم ولا تفكر فيها؟", ar_f: "ما النعمة التي تستعملينها كل يوم ولا تفكرين فيها؟", en: "What blessing do you use every day without thinking about it?" },
    source: { ar: "حكاية سعدي الشيرازي من كتابه «كلستان» (روضة الورد، 1258)، في باب القناعة، رويناها بالمعنى في قصة مؤلفة أبطالها خياليون.", en: "Saadi's anecdote from his Gulistan (The Rose Garden, 1258), chapter on contentment, told by meaning inside an original story with fictional characters." } });
  R("zombie", { id: "zombie-r12", minutes: 4, ages: "15+",
    title: { ar: "الفيل في الغرفة المظلمة", en: "The elephant in the dark room" },
    origin: { ar: "حكاية هندية رواها الرومي", en: "An Indian tale, told by Rumi" },
    body: {
      ar: ["في حكاية هندية قديمة، رواها جلال الدين الرومي في «المثنوي»، جاء قوم بفيل إلى مدينة لم يرَ أهلها فيلًا قط، وأدخلوه بيتًا مظلمًا. فدخل الناس يتلمّسونه بأيديهم.",
        "وقعت يد أحدهم على خرطومه، فخرج يقول: الفيل أنبوب. ولمس الثاني أذنه، فقال: بل مروحة. ولمس الثالث رجله، فقال: عمود. واختلفوا، وكل واحد منهم صادق في ما لمسه، ومخطئ في الفيل.",
        "وفي مساء الأربعاء امتلأت مجموعة الصف بمقطع من اثنتي عشرة ثانية: كريم يدفع أنسًا في الممر، فيسقط أنس على الأرض.",
        "في نصف ساعة صار في المجموعة ستون رسالة. «متنمّر». «دائمًا يفعلها». «يجب أن يُفصل». وأرسل أحدهم صورة كريم مع وجه ضاحك.",
        "كانت نور في ذلك الممر. رأت أنسًا يتعثر بحقيبة على الأرض، ورأت كريمًا يمسك ذراعه ليمنعه من السقوط على الدرج، فاختلّ توازنهما معًا. والمقطع بدأ في الثانية التي ظهرت فيها يد كريم.",
        "كتبت: «كنتُ هناك، الأمر غير ما ترون». ثم مسحتها. قالت في نفسها: سيقولون إني أدافع عنه، ولا أحتاج هذا الصداع.",
        "ثم كتب أحدهم: «أنس المسكين». وتحتها، بين عشرات الرسائل، رسالة من أنس نفسه لم يردّ عليها أحد: «لم يدفعني».",
        "كتبت نور ما رأته سطرًا سطرًا، بلا حكم على أحد. وبعد دقيقة جاءها: «أنتِ معه طبعًا». ثم سكتت المجموعة.",
        "بعد ساعة أرسلت ليلى، التي صوّرت المقطع، النسخة الكاملة: أربعون ثانية، فيها الحقيبة والتعثر واليد. اعتذر اثنان فقط، وغادر واحد المجموعة.",
        "وفي آخر الليل وصلت نور رسالة خاصة من كريم، كلمة واحدة: «شكرًا». وفي الفسحة صباحًا جلس كريم وأنس على درجة واحدة، يتفرجان على المقطع الكامل، ويضحكان من الحقيبة."],
      en: ["In an old Indian tale, told by Rumi in his Masnavi, some people brought an elephant to a town where no one had ever seen one, and kept it in a dark house. The townspeople went in and felt it with their hands.",
        "One man's hand landed on the trunk, and he came out saying: an elephant is a pipe. The second touched an ear and said: no, it's a fan. The third touched a leg: it's a pillar. They argued, each one right about what he had touched, and wrong about the elephant.",
        "On Wednesday evening the class group chat filled up with a twelve-second clip: Karim shoving Anas in the corridor, and Anas hitting the floor.",
        "Within half an hour there were sixty messages. “Bully.” “He always does this.” “He should be expelled.” Someone posted Karim's photo with a laughing emoji.",
        "Nour had been in that corridor. She saw Anas trip over a bag on the floor, and Karim grab his arm to stop him falling down the stairs, so they both lost their balance. The clip started at the second Karim's hand appeared.",
        "She typed: “I was there, it's not what you think.” Then she deleted it. They'll say I'm defending him, she thought. I don't need the headache.",
        "Then someone wrote: “Poor Anas.” And below it, among dozens of messages, was one from Anas himself that nobody had answered: “He didn't push me.”",
        "Nour wrote down what she had seen, line by line, without judging anyone. A minute later: “You're on his side, obviously.” Then the chat went quiet.",
        "An hour later Layla, who had filmed it, posted the full version: forty seconds, with the bag, the trip and the hand. Only two people apologised. One left the group.",
        "Late that night Nour got a private message from Karim. One word: “Thanks.” And at break the next morning Karim and Anas sat on the same step, watching the whole clip and laughing at the bag."]
    },
    ask: { ar: "متى حكمتَ على أحد من جزء صغير مما حدث؟", ar_f: "متى حكمتِ على أحد من جزء صغير مما حدث؟", en: "When did you judge someone from a small piece of what happened?" },
    source: { ar: "حكاية «الفيل في الظلام» من «المثنوي» لجلال الدين الرومي (القرن الثالث عشر)، وأصلها حكاية العميان والفيل الهندية، أعدناها بكلماتنا في قصة مؤلفة أبطالها خياليون.", en: "“The elephant in the dark” from Rumi's Masnavi (13th century), from the older Indian tale of the blind men and the elephant, retold in our own words inside an original story with fictional characters." } });
  Q("zombie", [
    { id: "zombie-q16", readingId: "zombie-r10", correct: 1,
      q: { ar: "لماذا كان رامي يجمع قطع الخشب؟", en: "Why was Rami gathering pieces of wood?" },
      options: O([["ليصلح صحن جدّه المكسور", "To mend Grandfather's broken bowl"], ["ليصنع صحنًا لأبيه وأمه حين يكبران", "To make a bowl for his parents when they get old"], ["ليصنع لعبة يلعب بها وحده", "To make a toy to play with on his own"]]),
      why: { ar: "فعل رامي ما رآه يُصنع بجدّه، فرأى أبوه وأمه أنفسهما في كلامه.", en: "Rami copied what he saw done to his grandfather, and his parents saw themselves in his words." } },
    { id: "zombie-q17", readingId: "zombie-r10", correct: 2,
      q: { ar: "ماذا فعل الأب والأم بعد كلام رامي؟", en: "What did the father and mother do after Rami spoke?" },
      options: O([["اشتريا للجد صحنًا جديدًا من زجاج", "Bought Grandfather a new glass bowl"], ["أخذا قطع الخشب من رامي", "Took the pieces of wood away from Rami"], ["أجلسا الجد في مكانه على المائدة", "Sat Grandfather back in his place at the table"]]),
      why: { ar: "انتبها إلى ما لم يكونا يريانه، فرجع الجد إلى المائدة.", en: "They noticed what they had not been seeing, and Grandfather came back to the table." } },
    { id: "zombie-q18", readingId: "zombie-r11", correct: 1,
      q: { ar: "ماذا كان مازن يفعل في غرفته قبل أن تدخل جدّته؟", en: "What was Mazin doing in his room before his grandmother came in?" },
      options: O([["يخيط حذاءه القديم", "Sewing up his old shoe"], ["يقلّب صور الأحذية في الهاتف", "Scrolling through pictures of trainers on his phone"], ["يتدرّب على التسديد بقدمه اليسرى", "Practising shots with his left foot"]]),
      why: { ar: "كلما رأى حذاءً جديدًا زاد ضيقه، ولم يرَ ما عنده.", en: "Every new shoe he saw made him feel worse, and he did not see what he had." } },
    { id: "zombie-q19", readingId: "zombie-r11", correct: 0,
      q: { ar: "ما الذي فعله مازن في الليل فغيّر نظرته؟", en: "What did Mazin do that night that changed how he saw things?" },
      options: O([["حرّك أصابع قدميه في الظلام وتذكّر ركضه", "Wiggled his toes in the dark and remembered running"], ["بحث عن حكاية سعدي في الهاتف", "Looked up Saadi's story on his phone"], ["كتب لأبيه رسالة يعتذر فيها", "Wrote his father a message to apologise"]]),
      why: { ar: "حين أحسّ بقدميه رأى النعمة التي حكت عنها جدّته.", en: "When he felt his feet, he saw the blessing his grandmother had told him about." } },
    { id: "zombie-q20", readingId: "zombie-r12", correct: 1,
      q: { ar: "ما الذي كان أمام أهل المجموعة، وفاتهم؟", en: "What was right in front of the group chat, and missed?" },
      options: O([["صورة كريم مع الوجه الضاحك", "Karim's photo with the laughing emoji"], ["رسالة أنس: «لم يدفعني»", "Anas's message: “He didn't push me”"], ["رسالة نور الأولى التي مسحتها", "Nour's first message, the one she deleted"]]),
      why: { ar: "سمعوا المقطع، ولم يسمعوا صاحب الشأن نفسه، كمن لمس جزءًا من الفيل.", en: "They heard the clip, and not the person it was about, like the men who each touched one part of the elephant." } },
    { id: "zombie-q21", readingId: "zombie-r12", correct: 0,
      q: { ar: "لماذا مسحت نور رسالتها الأولى؟", en: "Why did Nour delete her first message?" },
      options: O([["خافت أن يقولوا إنها تدافع عن كريم", "She was afraid they would say she was defending Karim"], ["لم تكن متأكدة مما رأت", "She was not sure what she had seen"], ["طلبت منها ليلى ألا تكتب شيئًا", "Layla asked her not to write anything"]]),
      why: { ar: "كانت تعرف ما حدث، وثمن الكلام أخّرها قليلًا ثم كتبت.", en: "She knew what had happened; the cost of speaking held her back a little, and then she wrote." } }
  ]);

  /* ── البنصر: «أنا أولًا»، والشره ── */
  R("pig", { id: "pig-r10", minutes: 2, ages: "4-8",
    title: { ar: "الكمثرى الصغيرة", en: "The little pear" },
    origin: { ar: "حكاية صينية", en: "A Chinese tale" },
    body: {
      ar: ["في الصين، قبل زمن طويل، كان صبي صغير اسمه كونغ رونغ. عمره أربع سنوات.",
        "جاء أبوه بسلة كمثرى صفراء، ووضعها على الطاولة.",
        "قال الأب: «اختر يا كونغ رونغ، أنت أولًا».",
        "في السلة كمثرى كبيرة لامعة، وكمثرى صغيرة.",
        "مدّ كونغ رونغ يده... وأخذ أصغر واحدة.",
        "قال الأب: «لماذا الصغيرة؟».",
        "قال: «أنا صغير، فآخذ الصغيرة. والكبيرة لإخوتي الكبار».",
        "قال الأب: «وأخوك الأصغر منك؟».",
        "قال كونغ رونغ: «أنا أكبر منه، فأعطيه كبيرة».",
        "ضحك الأب، وضمّه إلى صدره.",
        "وجلس الإخوة كلهم يأكلون. وكانت كمثرى كونغ رونغ الصغيرة حلوة جدًّا."],
      en: ["Long ago in China there was a little boy called Kong Rong. He was four years old.",
        "His father brought a basket of yellow pears and put it on the table.",
        "“Choose, Kong Rong,” said his father. “You go first.”",
        "In the basket were big shiny pears, and small ones.",
        "Kong Rong reached out his hand... and took the smallest one.",
        "“Why the small one?” asked his father.",
        "“I'm small, so I take a small one. The big ones are for my big brothers.”",
        "“And your little brother?”",
        "“I'm bigger than him,” said Kong Rong, “so I give him a big one.”",
        "His father laughed and hugged him close.",
        "Then all the brothers sat down to eat. And Kong Rong's little pear was very sweet."]
    },
    ask: { ar: "حين تأتي الحلوى إلى البيت، لمن نقدّم أولًا؟", en: "When sweets come into the house, who do we offer them to first?" },
    source: { ar: "من خبر الصبي كونغ رونغ (القرن الثاني الميلادي)، حفظه شرح «تاريخ هان المتأخرين»، وما زال أطفال الصين يحفظونه. أعدنا حكايته بكلماتنا.", en: "From the story of the boy Kong Rong (2nd century CE), kept in a commentary on the History of the Later Han and still learned by Chinese children; retold in our own words." } });
  R("pig", { id: "pig-r11", minutes: 3, ages: "9-14",
    title: { ar: "جرّة الحكمة", en: "The pot of wisdom" },
    origin: { ar: "حكاية من غانا", en: "A tale from Ghana" },
    body: {
      ar: ["في بلاد الفانتي، في غانا، عاش رجل اسمه الأب أنانسي، وكانت عنده حكمة الدنيا كلها. يأتيه الناس كل يوم: هذا يسأله متى يزرع، وهذه كيف تصالح جارتها، وذاك كيف يقسم الأرض بين إخوته.",
        "وفي يوم أغضبه رجال القرية. فقال في نفسه: أعاقبهم بأشدّ عقاب: أخبّئ عنهم الحكمة كلها، فتبقى لي وحدي.",
        "فطاف البيوت يسترجع كل نصيحة أعطاها، وكل كلمة علّمها، وجمع ذلك كله في جرّة كبيرة، وأغلقها بإحكام.",
        "وكان له ابن اسمه كويكو تسين. لاحظ أن أباه يخفي شيئًا، فقرر أن يراقبه.",
        "وفي الصباح التالي خرج الأب من البيت خفية، والجرّة معلّقة في عنقه تتدلى على صدره. فتبعه كويكو من بعيد بين الأشجار.",
        "اختار الأب أعلى شجرة في الغابة وأصعبها، وبدأ يتسلق. أراد أن يعلّق الجرّة في رأسها، حيث لا تصل إليها يد غير يده. والجرّة الثقيلة تتأرجح أمامه، وتدفعه عن الجذع كلما ارتفع. حاول مرة، ومرتين، وعشرًا.",
        "راقبه الابن طويلًا، ثم لم يستطع أن يسكت، فصاح: «يا أبي، لماذا لا تعلّق الجرّة على ظهرك؟ تتسلق بسهولة!».",
        "التفت الأب إليه، وقال: «ظننتُ أن حكمة الدنيا كلها في هذه الجرّة، فإذا عندك ما ليس عندي. حكمتي كلها لم تدلّني، وأنت دللتني».",
        "وغضب، فرمى الجرّة من أعلى الشجرة. فاصطدمت بصخرة كبيرة وانكسرت، وخرجت منها الحكمة، وانتشرت في الدنيا كلها.",
        "ولهذا، يقول أهل الحكاية، عند كل واحد من الناس شيء من الحكمة، وليست كلها عند أحد."],
      en: ["In Fanti-land, in Ghana, there lived a man called Father Anansi, and he had all the wisdom in the world. People came to him every day: one asking when to plant, another how to make peace with her neighbour, another how to divide the land among his brothers.",
        "One day the men of the village made him angry. I'll punish them with the hardest punishment there is, he thought: I'll hide all the wisdom from them, and keep it for myself alone.",
        "So he went from house to house taking back every piece of advice he had given and every word he had taught, gathered it all into one great pot, and sealed it tight.",
        "Now he had a son called Kweku Tsin. The boy noticed that his father was hiding something, and decided to watch him.",
        "Next morning the father slipped quietly out of the house with the pot hung round his neck, dangling on his chest. Kweku followed at a distance through the trees.",
        "The father chose the tallest, hardest tree in the forest and began to climb. He meant to hang the pot at the very top, where no hand but his could reach it. But the heavy pot swung in front of him and pushed him off the trunk every time he climbed. He tried once, twice, ten times.",
        "His son watched for a long time, then could keep quiet no longer and called out: “Father, why don't you hang the pot on your back? Then you could climb easily!”",
        "The father turned to him and said: “I thought all the world's wisdom was in this pot, and here you have something I don't. All my wisdom couldn't show me the way, and you have.”",
        "In his anger he threw the pot down from the top of the tree. It struck a great rock and broke, and the wisdom came out of it and spread through the whole world.",
        "And that, say the people who tell this tale, is why everyone has a little wisdom, and no one has all of it."]
    },
    ask: { ar: "ما الشيء الذي تعرفه، وتستطيع أن تعلّمه لغيرك اليوم؟", ar_f: "ما الشيء الذي تعرفينه، وتستطيعين أن تعلّميه لغيرك اليوم؟", en: "What do you know that you could teach someone else today?" },
    source: { ar: "حكاية «كيف صارت الحكمة ملكًا للناس» عند الفانتي في غانا، كما جمعها و. ه. باركر وسيسيليا سنكلير في «West African Folk-Tales» (1917)، أعدنا حكايتها بكلماتنا.", en: "“How wisdom became the property of the human race”, a Fanti tale from Ghana, as collected by W. H. Barker and Cecilia Sinclair in West African Folk-Tales (1917); retold in our own words." } });
  R("pig", { id: "pig-r12", minutes: 4, ages: "15+",
    title: { ar: "الكلمة التي نسيها قاسم", en: "The word Qasim forgot" },
    origin: { ar: "من «ألف ليلة وليلة»", en: "From The Thousand and One Nights" },
    body: {
      ar: ["كان علي بابا حطّابًا فقيرًا، وكان أخوه قاسم تاجرًا غنيًّا. وفي يوم، بين الأشجار، رأى علي بابا أربعين فارسًا يقفون أمام صخرة، وسمع كبيرهم يقول: «افتح يا سمسم»، فانشقّ الصخر عن مغارة.",
        "حين ذهبوا دخل علي بابا، فوجد ذهبًا ما رآه في حياته. حمل منه ما يحمله حماره، وخرج، وقال: «أغلق يا سمسم».",
        "أراد أن يعرف مقدار ما معه، فاستعار مكيالًا من زوجة قاسم. واستغربت هي: ماذا يكيل الحطّاب الفقير؟ فدهنت قاع المكيال بشحم. ورجع المكيال وفي قاعه دينار ذهب لاصق.",
        "لم ينم قاسم تلك الليلة. كان يرى الدينار في عينيه، ويحسب: إن كان هذا في قاع مكيال، فكم في المغارة؟ وفي الصباح ضغط على أخيه حتى عرف السر كله، ثم خرج قبل الفجر بعشرة بغال، ولم يخبر أحدًا.",
        "«افتح يا سمسم». انفتح الصخر. دخل، فانغلق الباب خلفه. وأمامه أكوام الذهب والحرير والجواهر، تلمع في ضوء مصباحه.",
        "ملأ كيسًا، ثم فرّغه ليملأه بما هو أثمن. ثم ملأ عشرين كيسًا، وجرّها كلها إلى الباب، وكل كيس يقول له: والذي في الزاوية أجمل.",
        "وقف أمام الصخرة وقال: «افتح يا... شعير!». لم يتحرك شيء. «افتح يا قمح!». «افتح يا فول!». سمّى كل حبّ يعرفه، إلا الحبّ الذي يُفتح به.",
        "كان رأسه مزدحمًا بالأكياس، ولم يبقَ فيه مكان لكلمة واحدة صغيرة.",
        "وفي الخارج، من بعيد، سمع وقع حوافر أربعين فرسًا يقترب."],
      en: ["Ali Baba was a poor woodcutter, and his brother Qasim was a rich merchant. One day, among the trees, Ali Baba saw forty horsemen stop in front of a rock, and heard their chief say: “Open, Sesame!” The rock split open onto a cave.",
        "When they had gone, Ali Baba went in and found more gold than he had seen in his life. He loaded as much as his donkey could carry, came out, and said: “Close, Sesame!”",
        "He wanted to know how much he had, so he borrowed a measure from Qasim's wife. She wondered what a poor woodcutter could have to measure, so she smeared the bottom with suet. The measure came back with a gold coin stuck in it.",
        "Qasim did not sleep that night. He kept seeing the coin, and counting: if this was stuck in the bottom of a measure, how much was in the cave? In the morning he pressed his brother until he had the whole secret, then set off before dawn with ten mules, and told no one.",
        "“Open, Sesame!” The rock opened. He went in, and the door closed behind him. Before him lay heaps of gold, silk and jewels, glittering in the light of his lamp.",
        "He filled a sack, then emptied it to fill it with something more precious. Then he filled twenty sacks and dragged them all to the door, and every sack seemed to say: the one in the corner is lovelier.",
        "He stood before the rock and said: “Open... Barley!” Nothing moved. “Open, Wheat!” “Open, Beans!” He named every grain he knew, except the one that opened the door.",
        "His head was crowded with sacks, and there was no room left in it for one small word.",
        "Outside, far off, he heard the hooves of forty horses coming closer."]
    },
    ask: { ar: "ما «الكيس الذي في الزاوية» عندك: الشيء الذي تريد منه دائمًا أكثر؟", ar_f: "ما «الكيس الذي في الزاوية» عندكِ: الشيء الذي تريدين منه دائمًا أكثر؟", en: "What is your “sack in the corner”: the thing you always want more of?" },
    source: { ar: "من حكاية «علي بابا والأربعين لصًّا»، أدخلها أنطوان غالان في ترجمته الفرنسية لـ«ألف ليلة وليلة» (1717) عن الراوي الحلبي حنّا دياب. أعدنا حكايتها بكلماتنا، وتوقفنا قبل نهايتها.", en: "From “Ali Baba and the Forty Thieves”, which Antoine Galland added to his French Thousand and One Nights (1717) from the Aleppine storyteller Hanna Diyab. Retold in our own words, stopping before its end." } });
  Q("pig", [
    { id: "pig-q16", readingId: "pig-r10", correct: 1,
      q: { ar: "أي كمثرى أخذ كونغ رونغ لنفسه؟", en: "Which pear did Kong Rong take for himself?" },
      options: O([["أكبر واحدة في السلة", "The biggest one in the basket"], ["أصغر واحدة", "The smallest one"], ["لم يأخذ شيئًا", "He took nothing"]]),
      why: { ar: "أخذ الصغيرة ليبقى الكبير لغيره.", en: "He took the small one so that the big ones stayed for the others." } },
    { id: "pig-q17", readingId: "pig-r10", correct: 2,
      q: { ar: "لماذا أعطى كونغ رونغ أخاه الأصغر كمثرى كبيرة؟", en: "Why did Kong Rong give his little brother a big pear?" },
      options: O([["لأن أخاه بكى وطلبها", "Because his brother cried for it"], ["لأنه لا يحب الكمثرى الكبيرة", "Because he does not like big pears"], ["لأنه أكبر من أخيه", "Because he was older than his brother"]]),
      why: { ar: "كان هذه المرة هو الأكبر، فأعطى.", en: "This time he was the older one, so he gave." } },
    { id: "pig-q18", readingId: "pig-r11", correct: 1,
      q: { ar: "لماذا جمع الأب أنانسي الحكمة كلها في الجرّة؟", en: "Why did Father Anansi gather all the wisdom into the pot?" },
      options: O([["ليحفظها من المطر والريح", "To keep it safe from rain and wind"], ["ليخفيها عن أهل القرية وتبقى له وحده", "To hide it from the villagers and keep it for himself"], ["ليعطيها لابنه وحده", "To give it to his son alone"]]),
      why: { ar: "غضب منهم، فأراد أن تكون الحكمة كلها له.", en: "He was angry with them, and wanted all the wisdom to be his." } },
    { id: "pig-q19", readingId: "pig-r11", correct: 2,
      q: { ar: "ماذا اقترح كويكو على أبيه؟", en: "What did Kweku suggest to his father?" },
      options: O([["أن يختار شجرة أقصر", "To choose a shorter tree"], ["أن يترك الجرّة على الأرض", "To leave the pot on the ground"], ["أن يعلّق الجرّة على ظهره", "To hang the pot on his back"]]),
      why: { ar: "رأى الابن ما لم تدلّ عليه حكمة أبيه كلها: الجرّة في المكان الخطأ.", en: "The son saw what all his father's wisdom had missed: the pot was in the wrong place." } },
    { id: "pig-q20", readingId: "pig-r12", correct: 1,
      q: { ar: "كيف عرف قاسم أن أخاه وجد ذهبًا؟", en: "How did Qasim find out that his brother had found gold?" },
      options: O([["أخبره علي بابا حين زاره", "Ali Baba told him on a visit"], ["وجد دينارًا لاصقًا في قاع المكيال", "He found a coin stuck in the bottom of the measure"], ["رأى الحمار محمّلًا بالأكياس", "He saw the donkey loaded with sacks"]]),
      why: { ar: "دهنت زوجته قاع المكيال بشحم، فرجع المكيال ومعه الدليل.", en: "His wife had smeared the bottom of the measure with suet, and it came back with the proof." } },
    { id: "pig-q21", readingId: "pig-r12", correct: 2,
      q: { ar: "لماذا لم ينفتح الصخر لقاسم وهو يريد الخروج؟", en: "Why would the rock not open when Qasim wanted to get out?" },
      options: O([["لأن اللصوص غيّروا الكلمة", "Because the thieves had changed the word"], ["لأن الأكياس سدّت الباب", "Because the sacks blocked the door"], ["لأنه نسي الكلمة، ورأسه مزدحم بالأكياس", "Because he forgot the word, his head crowded with sacks"]]),
      why: { ar: "ملأ رأسه بما يريد حمله، فضاعت منه الكلمة الصغيرة التي يخرج بها.", en: "He filled his head with what he wanted to carry, and lost the small word that would let him out." } }
  ]);

  /* ── الوسطى: لا يسمع ولا يتوقف، والغضب السريع ── */
  R("monkey", { id: "monkey-r10", minutes: 2, ages: "4-8",
    title: { ar: "الريح والشمس", en: "The Wind and the Sun" },
    origin: { ar: "من حكايات إيسوب", en: "From Aesop's fables" },
    body: {
      ar: ["قالت الريح للشمس: «أنا أقوى منكِ!».",
        "قالت الشمس: «انظري إلى ذلك الرجل بمعطفه. من منّا تجعله يخلع معطفه؟».",
        "نفخت الريح: ووووش! فطارت قبعة الرجل.",
        "نفخت أقوى: ووووووش! فشدّ الرجل معطفه على جسمه.",
        "نفخت بكل قوتها، وصرخت، وهزّت الشجر. فلفّ الرجل معطفه أكثر، وانحنى، وأغمض عينيه.",
        "تعبت الريح، وسكتت.",
        "خرجت الشمس من وراء الغيمة، وابتسمت، وأرسلت دفئها بهدوء.",
        "مسح الرجل جبينه. فكّ زرًّا، ثم زرًّا آخر...",
        "ثم خلع المعطف، وجلس في الظل، وقال: «آه، ما أجمل هذا اليوم!».",
        "وفي المساء هبّت نسمة صغيرة لطيفة، تحرّك أوراق الشجر بهدوء. قالت الشمس: «هذه أنتِ؟». قالت الريح: «نعم. أتعلّم»."],
      en: ["The Wind said to the Sun, “I'm stronger than you!”",
        "The Sun said, “See that man in his coat? Which of us can make him take it off?”",
        "The Wind blew: whoooosh! The man's hat flew away.",
        "It blew harder: whooooooosh! The man pulled his coat tight around him.",
        "It blew with all its strength, howling and shaking the trees. The man wrapped his coat tighter, bent over, and shut his eyes.",
        "The Wind grew tired, and went quiet.",
        "The Sun came out from behind a cloud, smiled, and sent down its warmth, gently.",
        "The man wiped his forehead. He undid one button, then another...",
        "Then he took off his coat, sat in the shade, and said, “Ah, what a lovely day!”",
        "That evening a small, soft breeze came, rustling the leaves gently. “Is that you?” asked the Sun. “Yes,” said the Wind. “I'm learning.”"]
    },
    ask: { ar: "متى رأيتَ الكلام الهادئ يفعل ما لا يفعله الصراخ؟", ar_f: "متى رأيتِ الكلام الهادئ يفعل ما لا يفعله الصراخ؟", en: "When have you seen quiet words do what shouting can't?" },
    source: { ar: "حكاية «ريح الشمال والشمس» من حكايات إيسوب اليونانية، وحكاها لافونتين شعرًا، أعدنا حكايتها بكلماتنا.", en: "“The North Wind and the Sun” from Aesop's Greek fables, also told in verse by La Fontaine; retold in our own words." } });
  R("monkey", { id: "monkey-r11", minutes: 3, ages: "9-14",
    title: { ar: "السلحفاة التي أرادت أن تردّ", en: "The tortoise who had to answer back" },
    origin: { ar: "حكاية هندية من «بنجاتنترا»", en: "An Indian tale from the Panchatantra" },
    body: {
      ar: ["كانت في الغدير سلحفاة تحب الكلام، ومعها صديقتان بطّتان تسكنان الغدير منذ سنين. ثم جاء صيف حار، فجفّ الغدير حتى صار طينًا.",
        "قالت البطتان: «سنطير إلى بحيرة بعيدة فيها ماء كثير، ونأخذك معنا: نمسك عودًا من طرفيه، وتعضّين أنتِ على وسطه. لكن بشرط: لا تفتحي فمك مهما سمعتِ».",
        "قالت السلحفاة: «سهل!». وعضّت على العود.",
        "طارت البطتان، والسلحفاة بينهما، فوق الحقول والطرق. ثم مرّوا فوق قرية، فخرج الناس يصيحون ويضحكون: «انظروا! بطتان تحملان سلحفاة!». «يا لها من سلحفاة كسولة!».",
        "احمرّت السلحفاة. قالت في نفسها: كسولة؟ أنا؟ سأقول لهم كلمة واحدة فقط. كلمة واحدة لا تضر.",
        "وفتحت فمها: «يا أيها الـ...».",
        "وانفلت العود، وهوت إلى الأرض. ونزلت في طين حقل أرز، فانغرزت فيه، ونجت، وظهرها مخدوش.",
        "نزلت البطتان بجانبها، ولم تقولا شيئًا. وانتظرتا يومين حتى قويت، ثم رفعتا العود من جديد.",
        "وفي الطريق مرّوا فوق قرية أخرى، وخرج الناس يصيحون ويضحكون. فشدّت السلحفاة أسنانها على العود، وعدّت في نفسها حتى عشرة، ثم حتى عشرين، وأغمضت عينيها حتى ابتعد الصوت."],
      en: ["In the pond lived a tortoise who loved to talk, and with her lived two friends, a pair of ducks, who had shared the pond for years. Then came a hot summer, and the pond dried up until it was only mud.",
        "“We're going to fly to a faraway lake with plenty of water,” said the ducks, “and we'll take you: we'll hold a stick by its ends, and you bite on the middle. But on one condition: don't open your mouth, whatever you hear.”",
        "“Easy!” said the tortoise, and bit on the stick.",
        "The ducks took off, with the tortoise between them, over fields and roads. Then they passed over a village, and people ran out shouting and laughing: “Look! Two ducks carrying a tortoise!” “What a lazy tortoise!”",
        "The tortoise went red. Lazy? Me? she thought. I'll say just one word to them. One word won't hurt.",
        "And she opened her mouth: “You silly...”",
        "The stick slipped away, and she dropped to the ground. She landed in the mud of a rice field, sank into it, and survived, with a scratched shell.",
        "The ducks landed beside her and said nothing. They waited two days until she was strong again, then lifted the stick once more.",
        "On the way they passed over another village, and the people ran out shouting and laughing. The tortoise clamped her teeth on the stick, counted to ten in her head, then to twenty, and shut her eyes until the voices were far behind."]
    },
    ask: { ar: "ما الكلمة التي تجعلك تردّ بسرعة قبل أن تفكر؟", ar_f: "ما الكلمة التي تجعلكِ تردّين بسرعة قبل أن تفكري؟", en: "What words make you answer back before you think?" },
    source: { ar: "من «بنجاتنترا» الهندية، وفي «كليلة ودمنة» لابن المقفّع مثلها: السلحفاة والبطّتان. أعدنا حكايتها بكلماتنا، وجعلنا لها خاتمة غير خاتمتها القديمة.", en: "From the Indian Panchatantra; Ibn al-Muqaffa's Kalila and Dimna has the same tale of the tortoise and the two ducks. Retold in our own words, with an ending of our own in place of the old one." } });
  R("monkey", { id: "monkey-r12", minutes: 3, ages: "15+",
    title: { ar: "الناسك وابن عرس", en: "The hermit and the weasel" },
    origin: { ar: "من «كليلة ودمنة»", en: "From Kalila and Dimna" },
    body: {
      ar: ["في «كليلة ودمنة» حكاية رجل ناسك انتظر الولد سنين، ثم وُلد له ابن، ففرح به فرحًا لا يوصف. وكان في بيته ابن عرس ربّاه صغيرًا، يأكل من يده ويحرس البيت.",
        "خرجت الأم يومًا في حاجة، وتركت الطفل في مهده مع أبيه. ثم جاء رسول الملك يطلب الناسك، فلم يجد من يترك عنده ابنه، فتركه في البيت مع ابن عرس، وخرج على عجل.",
        "وبعد قليل خرجت من شقّ في الجدار حية سوداء، وزحفت نحو المهد. فوثب عليها ابن عرس، وتقاتلا، حتى قتلها وقطّعها، وفمه ملطّخ بالدم.",
        "وحين سمع خطوات الناسك عند الباب، ركض إليه فرحًا، يدور حول قدميه، كأنه يريد أن يحكي له.",
        "رأى الناسك الدم على فمه. ولم يرَ غيره.",
        "قال في نفسه: قتل ابني. وقبل أن يكمل الفكرة كانت عصاه قد نزلت على رأس ابن عرس، فسقط ميتًا عند عتبة الباب.",
        "دخل الناسك يجري إلى المهد، فوجد ابنه نائمًا يتنفس بهدوء، وبجانب المهد بقايا الحية.",
        "جلس على الأرض بين المهد والعتبة، وأمسك رأسه بيديه. وحين رجعت امرأته وجدته على تلك الحال، والعصا بجانبه، وابن عرس لا يتحرك.",
        "قال لها، ولم يرفع رأسه: «رأيتُ الدم، فلم أنتظر حتى أرى غيره»."],
      en: ["Kalila and Dimna tells of a hermit who waited years for a child, until at last a son was born to him, and his joy had no words. In his house lived a weasel he had raised from small, which ate from his hand and guarded the house.",
        "One day the mother went out on an errand and left the baby in the cradle with his father. Then the king's messenger came calling for the hermit. He had no one to leave his son with, so he left him in the house with the weasel and hurried out.",
        "A little later a black snake slid out of a crack in the wall and crept towards the cradle. The weasel sprang on it, and they fought, until it had killed the snake and torn it apart, its mouth smeared with blood.",
        "When it heard the hermit's steps at the door, it ran to him gladly, circling his feet, as if it wanted to tell him something.",
        "The hermit saw the blood on its mouth. He saw nothing else.",
        "He killed my son, he thought. Before he had finished the thought his stick had come down on the weasel's head, and it fell dead on the threshold.",
        "The hermit ran in to the cradle. His son lay asleep, breathing quietly, and beside the cradle lay what was left of the snake.",
        "He sat on the floor between the cradle and the threshold, his head in his hands. When his wife came home she found him like that, the stick beside him, and the weasel not moving.",
        "He said to her, without lifting his head: “I saw the blood, and I didn't wait to see anything else.”"]
    },
    ask: { ar: "متى حكمتَ بسرعة، ثم رأيت بقية الصورة؟", ar_f: "متى حكمتِ بسرعة، ثم رأيتِ بقية الصورة؟", en: "When did you judge quickly, and then see the rest of the picture?" },
    source: { ar: "من باب «الناسك وابن عرس» في «كليلة ودمنة» لابن المقفّع (القرن الثامن الميلادي)، وأصله في «بنجاتنترا» الهندية، أعدنا حكايته بكلماتنا.", en: "From the chapter of the hermit and the weasel in Ibn al-Muqaffa's Kalila and Dimna (8th century), which comes from the Indian Panchatantra; retold in our own words." } });
  Q("monkey", [
    { id: "monkey-q16", readingId: "monkey-r10", correct: 1,
      q: { ar: "ماذا فعل الرجل حين نفخت الريح بقوة؟", en: "What did the man do when the Wind blew hard?" },
      options: O([["خلع معطفه وجرى", "Took off his coat and ran"], ["شدّ معطفه على جسمه", "Pulled his coat tight around him"], ["رجع إلى بيته", "Went back home"]]),
      why: { ar: "كلما اشتدت الريح تمسّك الرجل بمعطفه أكثر.", en: "The harder the Wind blew, the tighter the man held his coat." } },
    { id: "monkey-q17", readingId: "monkey-r10", correct: 2,
      q: { ar: "ما الذي جعل الرجل يخلع معطفه؟", en: "What made the man take off his coat?" },
      options: O([["صوت الريح العالي", "The Wind's loud howling"], ["المطر الغزير", "Heavy rain"], ["دفء الشمس الهادئ", "The Sun's gentle warmth"]]),
      why: { ar: "الدفء الهادئ فعل ما لم تفعله القوة.", en: "Gentle warmth did what force could not." } },
    { id: "monkey-q18", readingId: "monkey-r11", correct: 0,
      q: { ar: "ما الشرط الذي اشترطته البطتان قبل الطيران؟", en: "What was the ducks' condition before they flew?" },
      options: O([["ألا تفتح فمها مهما سمعت", "That she must not open her mouth, whatever she heard"], ["أن تمسك العود برجليها", "That she hold the stick with her feet"], ["ألا تنظر إلى الأرض", "That she not look down at the ground"]]),
      why: { ar: "عرفت البطتان أن الكلمة الواحدة تكفي ليفلت العود.", en: "The ducks knew one word was enough to lose the stick." } },
    { id: "monkey-q19", readingId: "monkey-r11", correct: 2,
      q: { ar: "ماذا فعلت السلحفاة في الرحلة الثانية حين صاح الناس؟", en: "What did the tortoise do on the second journey when people shouted?" },
      options: O([["ردّت عليهم بكلمة واحدة", "Answered them with one word"], ["طلبت من البطتين أن تنزلا", "Asked the ducks to land"], ["شدّت على العود وعدّت في نفسها", "Clamped on the stick and counted in her head"]]),
      why: { ar: "عرفت هذه المرة ثمن الكلمة السريعة، فأمسكت لسانها حتى ابتعد الصوت.", en: "This time she knew the price of a quick word, and held her tongue until the voices faded." } },
    { id: "monkey-q20", readingId: "monkey-r12", correct: 1,
      q: { ar: "لماذا خرج الناسك وترك ابنه مع ابن عرس؟", en: "Why did the hermit go out and leave his son with the weasel?" },
      options: O([["أراد أن يختبر وفاء ابن عرس", "He wanted to test the weasel's loyalty"], ["جاءه رسول الملك يطلبه", "The king's messenger came calling for him"], ["خرج يبحث عن امرأته", "He went out looking for his wife"]]),
      why: { ar: "استدعاه رسول الملك، ولم يجد من يترك عنده ابنه.", en: "The king's messenger called him away, and he had no one to leave his son with." } },
    { id: "monkey-q21", readingId: "monkey-r12", correct: 2,
      q: { ar: "لماذا كان ابن عرس يدور فرحًا حول قدمي الناسك؟", en: "Why was the weasel circling the hermit's feet so gladly?" },
      options: O([["كان جائعًا يطلب الطعام", "It was hungry and wanted food"], ["كان خائفًا من الحية", "It was afraid of the snake"], ["كأنه يريد أن يخبره أنه حمى الطفل", "As if it wanted to tell him it had protected the baby"]]),
      why: { ar: "جاء يحكي ما فعل، والدم الذي على فمه دم الحية.", en: "It came to tell what it had done; the blood on its mouth was the snake's." } }
  ]);

  /* ── السبابة: أداء الواجب، وكفّ الأذى، والرجوع عن الخطأ ── */
  R("human", { id: "human-r10", minutes: 2, ages: "4-8",
    title: { ar: "الأسد والفأر", en: "The Lion and the Mouse" },
    origin: { ar: "من حكايات إيسوب", en: "From Aesop's fables" },
    body: {
      ar: ["كان الأسد نائمًا تحت الشجرة.",
        "جاء فأر صغير يجري، ومرّ فوق أنف الأسد!",
        "استيقظ الأسد، وأمسك الفأر بمخلبه: «من أيقظني؟».",
        "قال الفأر وهو يرتجف: «أنا، آسف! اتركني، وسأساعدك يومًا ما».",
        "ضحك الأسد: «أنت؟ تساعدني أنا؟». ثم فتح مخلبه، وترك الفأر يذهب.",
        "وبعد أيام وقع الأسد في شبكة الصيادين. شدّ، وزأر، وشدّ، ولم يخرج.",
        "سمع الفأر الزئير من بعيد، فقال: «هذا صاحبي!»، وركض.",
        "قرض الحبل الأول بأسنانه الصغيرة: كرك، كرك. ثم الثاني. ثم الثالث.",
        "وخرج الأسد من الشبكة.",
        "قال الفأر: «قلتُ لك: سأساعدك». ومشيا معًا تحت الشجرة، الكبير والصغير."],
      en: ["The Lion was asleep under the tree.",
        "A little Mouse came running, and ran right over the Lion's nose!",
        "The Lion woke up and caught the Mouse in his paw. “Who woke me?”",
        "“Me, sorry!” said the Mouse, trembling. “Let me go, and one day I'll help you.”",
        "The Lion laughed. “You? Help me?” Then he opened his paw and let the Mouse go.",
        "A few days later the Lion was caught in the hunters' net. He pulled, and roared, and pulled, and could not get out.",
        "The Mouse heard the roar from far away. “That's my friend!” he said, and ran.",
        "He gnawed the first rope with his little teeth: crunch, crunch. Then the second. Then the third.",
        "And the Lion stepped out of the net.",
        "“I told you,” said the Mouse. “I said I'd help you.” And they walked together under the tree, the big one and the small one."]
    },
    ask: { ar: "ما الوعد الذي وعدته، وتستطيع أن تفي به اليوم؟", ar_f: "ما الوعد الذي وعدتِه، وتستطيعين أن تفي به اليوم؟", en: "What promise have you made that you can keep today?" },
    source: { ar: "من حكايات إيسوب اليونانية، وحكاها لافونتين شعرًا، أعدنا حكايتها بكلماتنا.", en: "From Aesop's Greek fables, also told in verse by La Fontaine; retold in our own words." } });
  R("human", { id: "human-r11", minutes: 3, ages: "9-14",
    title: { ar: "الشرّ الثالث", en: "The third harm" },
    origin: { ar: "حكاية صينية", en: "A Chinese tale" },
    body: {
      ar: ["في قرية صينية قديمة، بين جبل ونهر، عاش شاب اسمه تشو تشو. كان قويًّا سريع الغضب، يضرب من يخالفه، ويأخذ ما يعجبه، والناس يغيّرون طريقهم إذا رأوه.",
        "ولاحظ تشو تشو أن أهل القرية لا يضحكون. فسأل شيخًا: «ما بالكم حزانى، والمحصول جيد هذه السنة؟».",
        "قال الشيخ: «عندنا ثلاثة شرور لا نرتاح منها: نمر في الجبل يأكل الماشية، ووحش في النهر يقلب القوارب...»، وسكت.",
        "قال تشو تشو: «والثالث؟». نظر الشيخ إلى الأرض، ولم يجب.",
        "صعد تشو تشو الجبل، وقاتل النمر حتى قتله. ثم نزل إلى النهر، وقاتل الوحش ثلاثة أيام وثلاث ليالٍ، يغطس ويطفو، حتى حمله التيار بعيدًا عن القرية.",
        "وفي القرية قال الناس: مات تشو تشو مع الوحش. فخرجوا إلى الساحة، وقرعوا الطبول، ورقصوا، وعلّقوا الفوانيس، وهنّأ بعضهم بعضًا: ذهبت الشرور الثلاثة كلها!",
        "ورجع تشو تشو في الليلة الرابعة، متعبًا جائعًا، فرحًا بما فعل. وعند مدخل القرية سمع الطبول، ورأى الفوانيس، وسمع اسمه بين الضحك.",
        "وقف في الظلام طويلًا. وقال في نفسه: أنا الشرّ الثالث.",
        "ولم يدخل الساحة. مشى أيامًا إلى معلّم حكيم اسمه لو يون، وقال له: «أريد أن أتغيّر، لكني أضعت سنين كثيرة، وأخاف أن الوقت فات». قال المعلم: «الوقت لا يفوت من قرّر في الصباح أن يتغير. المهم أن يثبت قلبك».",
        "تعلّم تشو تشو القراءة، وتعلّم أن يسمع قبل أن يغضب. وبعد سنين، حين رجع إلى القرية، كان الأطفال يركضون ليستقبلوه."],
      en: ["In an old Chinese village, between a mountain and a river, lived a young man called Zhou Chu. He was strong and quick to anger. He hit anyone who crossed him and took whatever he liked, and people changed their path when they saw him coming.",
        "Zhou Chu noticed that the villagers never laughed. He asked an old man: “Why is everyone so gloomy, when the harvest is good this year?”",
        "“We have three harms we can never rest from,” said the old man. “A tiger on the mountain that eats our cattle, and a beast in the river that overturns our boats...” And he stopped.",
        "“And the third?” asked Zhou Chu. The old man looked at the ground and did not answer.",
        "Zhou Chu climbed the mountain and fought the tiger until he killed it. Then he went down to the river and fought the beast for three days and three nights, diving and surfacing, until the current carried him far from the village.",
        "In the village people said: Zhou Chu has died with the beast. They poured into the square, beat drums, danced and hung up lanterns, and congratulated each other: all three harms are gone!",
        "Zhou Chu came back on the fourth night, tired, hungry and proud of what he had done. At the edge of the village he heard the drums, saw the lanterns, and heard his own name among the laughter.",
        "He stood in the dark for a long time. I am the third harm, he thought.",
        "He did not go into the square. He walked for days to a wise teacher called Lu Yun and said: “I want to change, but I've wasted so many years. I'm afraid it's too late.” The teacher said: “It is never too late for someone who decides one morning to change. What matters is that your heart holds firm.”",
        "Zhou Chu learned to read, and learned to listen before he got angry. Years later, when he went back to the village, the children came running to meet him."]
    },
    ask: { ar: "هل في ما أفعله شيء يضايق من حولي ولا يقولونه لي؟", en: "Is there something I do that bothers people around me, which they don't tell me?" },
    source: { ar: "من كتاب «شي شوو شين يو» (أخبار جديدة من أحاديث الناس) الصيني، في القرن الخامس الميلادي، أعدنا حكايته بكلماتنا.", en: "From the Chinese book Shishuo Xinyu (A New Account of Tales of the World), 5th century; retold in our own words." } });
  R("human", { id: "human-r12", minutes: 3, ages: "15+",
    title: { ar: "كُلْ يا كُمّي", en: "Eat, my sleeve" },
    origin: { ar: "من نوادر جحا", en: "From the tales of Juha" },
    body: {
      ar: ["دُعي جحا إلى وليمة عرس في بيت من بيوت الأغنياء، فذهب بثيابه التي يعمل فيها: جبّة قديمة، وعمامة باهتة.",
        "وقف عند الباب، فلم يلتفت إليه أحد. ودخل، فأُجلس في آخر المجلس قرب الباب. ومرّت صحون اللحم من فوق رأسه إلى صدر المجلس، ولم يقف عنده صحن واحد.",
        "قام جحا بهدوء، ورجع إلى بيته، ولبس فروة فاخرة استعارها من جاره، ثم رجع.",
        "هذه المرة استقبله صاحب الدار عند الباب، وأخذ بيده إلى صدر المجلس، ووضعوا أمامه أطيب الصحون.",
        "فمدّ جحا كمّ الفروة إلى صحن الحساء، وغمسه فيه، وقال: «كُلْ يا كمّي، كُل! فالكرامة لك، لا لي».",
        "تلك نادرة عمرها مئات السنين. وفي أول يوم من العام الدراسي دخلت صفَّ ليان طالبة جديدة اسمها هالة، بحقيبة مخيطة من جانبها، وهاتف قديم شاشته مشروخة.",
        "في الفسحة التفّت المجموعة حول جود، لأن معه الهاتف الجديد الذي نزل الأسبوع الماضي. وجلست هالة وحدها على الدرج تأكل شطيرتها، وتنظر إلى الأرض.",
        "كانت ليان في وسط المجموعة. قالت في نفسها: لو قمتُ الآن سيلاحظون. وتذكرت كيف وقفت هي نفسها وحدها في مدرسة أخرى قبل سنتين، تنتظر أن يسألها أحد عن اسمها.",
        "انتظرت دقيقة أخرى. ثم أخذت علبة العصير، ونزلت الدرج، وجلست بجانب هالة، وقالت: «أنا ليان. أنتِ رسمتِ هذا؟»، وأشارت إلى طائر صغير مرسوم على حقيبتها."],
      en: ["Juha was invited to a wedding feast at a rich man's house. He went in his working clothes: an old cloak and a faded turban.",
        "He stood at the door and nobody looked his way. He went in and was seated at the far end, by the door. Plates of meat passed over his head to the top of the room, and not one stopped in front of him.",
        "Juha got up quietly, went home, put on a splendid fur coat he borrowed from his neighbour, and came back.",
        "This time the host met him at the door, led him by the hand to the top of the room, and set the best dishes before him.",
        "Juha dipped the sleeve of the fur coat into the bowl of soup and said: “Eat, my sleeve, eat! The honour is yours, not mine.”",
        "That joke is hundreds of years old. On the first day of the school year a new girl called Hala walked into Layan's class, with a bag sewn up at the side and an old phone with a cracked screen.",
        "At break the group gathered around Joud, who had the new phone that came out last week. Hala sat alone on the steps eating her sandwich, looking at the ground.",
        "Layan was in the middle of the group. If I get up now they'll notice, she thought. And she remembered standing alone herself, at another school two years ago, waiting for someone to ask her name.",
        "She waited another minute. Then she picked up her juice box, went down the steps and sat next to Hala. “I'm Layan,” she said. “Did you draw this?” And she pointed to a little bird drawn on Hala's bag."]
    },
    ask: { ar: "من «يجلس قرب الباب» في مكانك: في الصف، أو المجموعة، أو العائلة؟", en: "Who is “sitting by the door” where you are: in class, in a group chat, in the family?" },
    source: { ar: "نادرة تُروى عن جحا عند العرب، وعن نصر الدين خوجه في تركيا، أعدناها بكلماتنا في قصة مؤلفة أبطالها خياليون.", en: "A tale told of Juha among the Arabs and of Nasreddin Hodja in Turkey, retold in our own words inside an original story with fictional characters." } });
  Q("human", [
    { id: "human-q15", readingId: "human-r10", correct: 2,
      q: { ar: "ماذا وعد الفأر الأسد؟", en: "What did the Mouse promise the Lion?" },
      options: O([["أن يحضر له طعامًا", "To bring him food"], ["ألا يمرّ قربه مرة أخرى", "Never to come near him again"], ["أن يساعده يومًا ما", "To help him one day"]]),
      why: { ar: "وعد وهو صغير خائف، ثم وفى حين جاء الوقت.", en: "He promised while small and frightened, and kept his word when the time came." } },
    { id: "human-q16", readingId: "human-r10", correct: 0,
      q: { ar: "كيف أخرج الفأر الأسد من الشبكة؟", en: "How did the Mouse get the Lion out of the net?" },
      options: O([["قرض الحبال بأسنانه", "He gnawed the ropes with his teeth"], ["نادى الحيوانات لتساعده", "He called the animals to help"], ["أخاف الصيادين حتى هربوا", "He scared the hunters away"]]),
      why: { ar: "أسنان صغيرة، وحبل بعد حبل، حتى خرج الأسد.", en: "Small teeth, rope after rope, until the Lion was out." } },
    { id: "human-q17", readingId: "human-r11", correct: 1,
      q: { ar: "من كان الشرّ الثالث الذي سكت عنه الشيخ؟", en: "Who was the third harm the old man would not name?" },
      options: O([["وحش النهر", "The beast in the river"], ["تشو تشو نفسه", "Zhou Chu himself"], ["القحط الذي يصيب المحصول", "Drought that ruins the harvest"]]),
      why: { ar: "سكت الشيخ خوفًا، ثم فهم تشو تشو الجواب من فرح الناس.", en: "The old man kept quiet out of fear; Zhou Chu understood the answer from the people's celebration." } },
    { id: "human-q18", readingId: "human-r11", correct: 2,
      q: { ar: "ما الذي جعل تشو تشو يقرر أن يتغير؟", en: "What made Zhou Chu decide to change?" },
      options: O([["خسارته أمام النمر", "Losing to the tiger"], ["أمر من حاكم القرية", "An order from the village governor"], ["سماعه فرح الناس حين ظنوه مات", "Hearing the people celebrate when they thought he was dead"]]),
      why: { ar: "رأى نفسه في عيون الناس لأول مرة.", en: "For the first time he saw himself through the people's eyes." } },
    { id: "human-q19", readingId: "human-r12", correct: 1,
      q: { ar: "لماذا أُجلس جحا في صدر المجلس في المرة الثانية؟", en: "Why was Juha seated at the top of the room the second time?" },
      options: O([["لأنه جاء مبكرًا هذه المرة", "Because he came early this time"], ["لأنه لبس فروة فاخرة", "Because he wore a splendid fur coat"], ["لأن صاحب الدار عرف أنه جحا", "Because the host recognised him as Juha"]]),
      why: { ar: "الرجل نفسه، والثوب وحده تغيّر، فتغيّرت المعاملة.", en: "The same man; only the clothes changed, and so did the welcome." } },
    { id: "human-q20", readingId: "human-r12", correct: 2,
      q: { ar: "ماذا فعلت ليان في آخر القصة؟", en: "What did Layan do at the end of the story?" },
      options: O([["التقطت صورة مع جود وهاتفه", "Took a photo with Joud and his phone"], ["أعطت هالة علبة العصير ورجعت", "Gave Hala the juice box and went back"], ["جلست بجانب هالة وسألتها عن رسمها", "Sat beside Hala and asked about her drawing"]]),
      why: { ar: "تذكّرت وحدتها القديمة، فنزلت الدرج، وبدأت بالاسم والرسم.", en: "She remembered her own loneliness, went down the steps, and began with a name and a drawing." } }
  ]);

  /* ── الإبهام: المبادرة بالخير، والمسابقة وعون الغير ── */
  R("sabiq", { id: "sabiq-r10", minutes: 2, ages: "4-8",
    title: { ar: "النملة والحمامة", en: "The Ant and the Dove" },
    origin: { ar: "من حكايات إيسوب", en: "From Aesop's fables" },
    body: {
      ar: ["عطشت النملة، فمشت إلى النهر لتشرب.",
        "زلّت رجلها، فوقعت في الماء! وأخذها الماء يدور بها، ويدور.",
        "رأتها حمامة على غصن الشجرة. والنملة لم تنادِها، ولم تطلب شيئًا.",
        "فقطفت الحمامة ورقة بمنقارها، ورمتها في الماء قرب النملة.",
        "صعدت النملة على الورقة، وسبحت الورقة إلى الشاطئ. نجت!",
        "وبعد أيام جاء صياد، ورفع شبكته نحو الحمامة.",
        "رأته النملة. فركضت، وعضّت قدمه بكل قوتها!",
        "صاح الصياد: «آي!»، وقفز، وسقطت الشبكة.",
        "وطارت الحمامة إلى السماء الزرقاء.",
        "ومن يومها، كلما شربت النملة من النهر، نظرت إلى الغصن، فوجدت صديقتها هناك."],
      en: ["The Ant was thirsty, so she walked to the river for a drink.",
        "Her foot slipped and she fell in! The water whirled her round and round.",
        "A Dove on a branch of the tree saw her. The Ant had not called out, or asked for anything.",
        "So the Dove picked a leaf with her beak and dropped it into the water near the Ant.",
        "The Ant climbed onto the leaf, and the leaf floated to the bank. She was safe!",
        "A few days later a hunter came and lifted his net towards the Dove.",
        "The Ant saw him. She ran and bit his foot as hard as she could!",
        "“Ow!” cried the hunter, and jumped, and the net fell.",
        "And the Dove flew up into the blue sky.",
        "After that, every time the Ant drank from the river, she looked up at the branch, and there was her friend."]
    },
    ask: { ar: "من رأيتَ اليوم يحتاج مساعدة، ولم يطلبها؟", ar_f: "من رأيتِ اليوم يحتاج مساعدة، ولم يطلبها؟", en: "Who did you see today who needed help, but didn't ask?" },
    source: { ar: "من حكايات إيسوب اليونانية، وحكاها لافونتين شعرًا، أعدنا حكايتها بكلماتنا.", en: "From Aesop's Greek fables, also told in verse by La Fontaine; retold in our own words." } });
  R("sabiq", { id: "sabiq-r11", minutes: 3, ages: "9-14",
    title: { ar: "الحمامة المطوّقة", en: "The Ringdove" },
    origin: { ar: "من «كليلة ودمنة»", en: "From Kalila and Dimna" },
    body: {
      ar: ["كان سرب من الحمام تقوده حمامة في عنقها طوق ملوّن، يسمّونها «المطوّقة». وفي صباح رأى السرب حبًّا منثورًا في أرض خضراء، فنزل يلتقط.",
        "ولم يرَ أحد الشبكة المنصوبة فوق الحب. فانطبقت عليهم كلهم، ومن بعيد خرج الصياد يجري.",
        "أخذت كل حمامة ترفرف وحدها، وتشدّ إلى جهة، فتلتفّ الخيوط عليها أكثر. صاحت المطوّقة: «لا تنشغل كل واحدة بنفسها! نطير معًا، في لحظة واحدة، ونحمل الشبكة».",
        "عدّت: «واحد، اثنان، الآن!». فارتفعت الشبكة والحمام فيها فوق الأشجار، وتبعهم الصياد يجري ويتعثر، حتى غابوا عن عينيه.",
        "قالت المطوّقة: «لي صديق جرذ اسمه زيرك، يسكن قرب هذا الوادي، يقطع لنا الخيوط». فنزلوا عند جحره، وخرج زيرك.",
        "بدأ زيرك بعقدة المطوّقة، لأنها صاحبته. فقالت: «لا. ابدأ بعقد صاحباتي، واترك عقدتي آخرًا».",
        "قال زيرك: «أتهتمين بهن قبل نفسك؟».",
        "قالت: «أخاف إن بدأتَ بي أن تتعب، فتترك بعضهن في الشبكة. وإن بدأتَ بهن وبقيتُ أنا آخرًا، فلن تتركني مهما تعبت».",
        "ضحك زيرك، وقرض الخيوط واحدًا واحدًا، وأسنانه تؤلمه. وطارت الحمامات واحدة بعد الأخرى. وكانت المطوّقة آخر من رفرف خارج الشبكة، ثم دارت فوق الجحر مرة، وطارت أمام السرب كما كانت."],
      en: ["A flock of doves was led by a dove with a coloured ring around her neck. They called her the Ringdove. One morning the flock saw grain scattered on a green field and flew down to peck.",
        "Nobody saw the net spread over the grain. It came down on all of them, and in the distance the hunter came running.",
        "Each dove began to flap on its own, pulling in its own direction, and the threads wound tighter around them. “Don't each look after yourselves!” cried the Ringdove. “We fly together, all at once, and carry the net.”",
        "She counted: “One, two, now!” And the net rose with the doves inside it, over the trees. The hunter ran after them, stumbling, until they were out of sight.",
        "“I have a friend, a rat called Zirak, who lives near this valley,” said the Ringdove. “He'll cut the threads for us.” They landed by his hole, and Zirak came out.",
        "Zirak started on the Ringdove's knots, because she was his friend. “No,” she said. “Start with my companions' knots, and leave mine till last.”",
        "“You care for them before yourself?” said Zirak.",
        "“I'm afraid that if you start with me, you'll tire and leave some of them in the net,” she said. “But if you start with them and leave me till last, you won't leave me, however tired you get.”",
        "Zirak laughed and gnawed the threads one by one, though his teeth ached. The doves flew free one after another. The Ringdove was the last to flutter out of the net. She circled once over the hole, then flew at the head of the flock, as before."]
    },
    ask: { ar: "من تستطيع أن تأخذه معك حين تفعل الخير؟", ar_f: "من تستطيعين أن تأخذيه معكِ حين تفعلين الخير؟", en: "Who could you bring along with you when you do good?" },
    source: { ar: "من باب «الحمامة المطوّقة» في «كليلة ودمنة» لابن المقفّع، أعدنا حكايته بكلماتنا.", en: "From the chapter of the Ringdove in Ibn al-Muqaffa's Kalila and Dimna; retold in our own words." } });
  R("sabiq", { id: "sabiq-r12", minutes: 4, ages: "15+",
    title: { ar: "النار في أكوام الأرز", en: "Fire in the rice stacks" },
    origin: { ar: "حكاية يابانية", en: "A Japanese tale" },
    body: {
      ar: ["كان الجد غوهي أغنى رجل في قرية ساحلية في اليابان، وبيته على تلّ فوقها. وكان أهل القرية في ذلك المساء على الشاطئ يستعدون لعيد الحصاد، وأكوام أرزه المحصود مصفوفة حول البيت: محصول سنة كاملة.",
        "ثم جاءت هزّة خفيفة، طويلة بطيئة، كأن الأرض تتنفس. فوقف غوهي على حافة التل ينظر إلى البحر.",
        "رأى الماء يتراجع عن الشاطئ، يجري إلى الوراء كأنه يُسحب، ويكشف رمالًا وصخورًا لم يرها أحد من قبل. وأهل القرية ينزلون إليها يتفرجون ويضحكون.",
        "كان غوهي قد سمع من أبيه، وهو صغير، عن هذا. وعرف ما سيرجع بعد قليل. ولم يكن عنده وقت لينزل إليهم، ولا صوت يصلهم من هذا البعد.",
        "قال لحفيده: «يا تادا، أسرع، أشعل لي شعلة!». جاءه تادا بها مستغربًا. فأخذها الجد، وجرى إلى أول كومة أرز، وأشعلها. ثم الثانية، ثم الثالثة.",
        "صرخ تادا وهو يبكي: «جدّي! ماذا تفعل؟ هذا أرزنا كله!». وظن أن جدّه فقد عقله. والجد لا يجيب، ينتقل من كومة إلى كومة، والنار ترتفع في السماء.",
        "ورأى أهل القرية النار على التل، فتركوا الشاطئ، وصعدوا يجرون ليطفئوها: الشباب أولًا، ثم النساء، ثم الشيوخ يحملون الأطفال. أربعمئة نفس.",
        "وصل الأوائل يلهثون، ونظروا إلى غوهي غاضبين. فرفع يده، وأشار إلى البحر، وقال كلمة واحدة: «انظروا!».",
        "كان الماء يرجع: حائطًا رماديًّا طويلًا أعلى من الأشجار، ضرب القرية فلم يترك منها بيتًا. ثم تراجع، وضرب مرة أخرى.",
        "وقف الناس صامتين على التل، حول أكوام الأرز المحترقة، وعدّوا أنفسهم. كانوا كلهم هناك. ووقف تادا بجانب جدّه، يمسك طرف ثوبه، وقد كفّ عن البكاء."],
      en: ["Old Gohei was the richest man in a seaside village in Japan, and his house stood on a hill above it. That evening the villagers were down on the beach getting ready for the harvest festival, and his harvested rice stood in stacks around the house: a whole year's crop.",
        "Then came a tremor: a light one, long and slow, as if the earth were breathing. Gohei stood at the edge of the hill and looked at the sea.",
        "He saw the water draw back from the shore, running backwards as if it were being pulled, uncovering sand and rocks no one had ever seen. The villagers went down onto them to look, laughing.",
        "Gohei had heard of this from his father when he was a boy. He knew what would come back in a little while. He had no time to go down to them, and no voice that would reach them from so far.",
        "“Tada, quickly, light me a torch!” he told his grandson. Tada brought it, puzzled. His grandfather took it, ran to the first rice stack and set it alight. Then the second, then the third.",
        "“Grandfather! What are you doing? That's all our rice!” Tada screamed, crying. He thought his grandfather had lost his mind. The old man did not answer. He moved from stack to stack, and the fire climbed into the sky.",
        "The villagers saw the fire on the hill. They left the beach and came running up to put it out: the young men first, then the women, then the old men carrying the children. Four hundred people.",
        "The first ones arrived panting and glared at Gohei. He raised his hand, pointed to the sea, and said one word: “Look!”",
        "The water was coming back: a long grey wall, higher than the trees. It struck the village and left no house standing. It drew back, and struck again.",
        "The people stood silent on the hill, around the burnt rice stacks, and counted themselves. Everyone was there. Tada stood beside his grandfather, holding the edge of his robe, and he had stopped crying."]
    },
    ask: { ar: "ما الذي تراه أنت ولا يراه من حولك بعد؟ وماذا يكلّفك أن تتحرك قبلهم؟", ar_f: "ما الذي ترينه أنتِ ولا يراه من حولك بعد؟ وماذا يكلّفكِ أن تتحركي قبلهم؟", en: "What do you see that the people around you don't yet? And what would it cost you to move before they do?" },
    source: { ar: "رواها لافكاديو هيرن في كتابه «Gleanings in Buddha-Fields» (1897). وأصلها رجل حقيقي، هاماغوتشي غوريو، أشعل أكوام الأرز في قرية هيرو سنة 1854 ليدلّ الناس على مكان آمن، وكان في الخامسة والثلاثين؛ والجدّ والحفيد من رواية هيرن. أعدنا حكايتها بكلماتنا.", en: "Told by Lafcadio Hearn in Gleanings in Buddha-Fields (1897). It comes from a real man, Hamaguchi Goryō, who set rice stacks alight in the village of Hiro in 1854 to guide people to safety, at the age of thirty-five; the grandfather and grandson are Hearn's. Retold in our own words." } });
  Q("sabiq", [
    { id: "sabiq-q17", readingId: "sabiq-r10", correct: 1,
      q: { ar: "كيف أنقذت الحمامة النملة؟", en: "How did the Dove save the Ant?" },
      options: O([["حملتها بمنقارها إلى الشجرة", "She carried her to the tree in her beak"], ["رمت لها ورقة في الماء", "She dropped a leaf into the water for her"], ["نادت النمل ليساعدها", "She called the other ants to help"]]),
      why: { ar: "ورقة واحدة في وقتها كانت كل ما تحتاجه النملة.", en: "One leaf, at the right moment, was all the Ant needed." } },
    { id: "sabiq-q18", readingId: "sabiq-r10", correct: 0,
      q: { ar: "هل طلبت النملة من الحمامة أن تساعدها؟", en: "Did the Ant ask the Dove to help her?" },
      options: O([["لا، رأتها الحمامة فبادرت وحدها", "No, the Dove saw her and acted on her own"], ["نعم، صرخت تطلب المساعدة", "Yes, she shouted for help"], ["نعم، ووعدتها بهدية", "Yes, and promised her a present"]]),
      why: { ar: "سبقت الحمامة إلى الخير قبل أن يُطلب منها.", en: "The Dove raced to do good before anyone asked her." } },
    { id: "sabiq-q19", readingId: "sabiq-r11", correct: 2,
      q: { ar: "كيف نجا السرب من الصياد أول الأمر؟", en: "How did the flock first escape the hunter?" },
      options: O([["اختبأ تحت الأشجار حتى ذهب", "They hid under the trees until he left"], ["قطع الشبكة بالمناقير", "They cut the net with their beaks"], ["طار معًا يحمل الشبكة", "They flew together, carrying the net"]]),
      why: { ar: "كل واحدة وحدها كانت تشدّ الخيوط عليها، ومعًا رفعن الشبكة.", en: "Each one alone only pulled the threads tighter; together they lifted the net." } },
    { id: "sabiq-q20", readingId: "sabiq-r11", correct: 1,
      q: { ar: "لماذا طلبت المطوّقة أن تكون عقدتها آخرًا؟", en: "Why did the Ringdove ask for her own knots to be last?" },
      options: O([["لأن عقدتها كانت أصعب العقد", "Because her knots were the hardest"], ["خافت أن يتعب زيرك فيترك بعضهن", "She feared Zirak would tire and leave some behind"], ["أرادت أن تستريح قليلًا في الشبكة", "She wanted to rest a little in the net"]]),
      why: { ar: "أرادت أن يخرج الجميع، ووثقت أن صديقها لن يتركها.", en: "She wanted everyone out, and trusted her friend not to leave her." } },
    { id: "sabiq-q21", readingId: "sabiq-r12", correct: 1,
      q: { ar: "لماذا أحرق غوهي أكوام أرزه؟", en: "Why did Gohei set fire to his rice stacks?" },
      options: O([["ليحتفل بعيد الحصاد مع القرية", "To celebrate the harvest festival with the village"], ["ليصعد الناس إلى التل قبل أن يرجع البحر", "To bring the people up the hill before the sea came back"], ["لأن الأرز تلف في الهزة", "Because the rice was ruined in the tremor"]]),
      why: { ar: "صوته لا يصل إليهم، فأوصلت النار ما يريد أن يقوله.", en: "His voice could not reach them, so the fire carried what he needed to say." } },
    { id: "sabiq-q22", readingId: "sabiq-r12", correct: 2,
      q: { ar: "ماذا ظن تادا حين رأى جدّه يشعل النار؟", en: "What did Tada think when he saw his grandfather lighting the fire?" },
      options: O([["أنه يرسل إشارة إلى السفن", "That he was signalling to ships"], ["أنه يطبخ لضيوف العيد", "That he was cooking for the festival guests"], ["أنه فقد عقله", "That he had lost his mind"]]),
      why: { ar: "رأى تادا الأرز يحترق، ولم يرَ ما رآه جدّه في البحر.", en: "Tada saw the rice burning, and not what his grandfather had seen in the sea." } }
  ]);

  /* ── «إلى العمل»: مهام من تجارب التربية في العالم ── */
  S.zombie.tasks.push({ id: "zombie-t5", ar: "شكر من أعدّ الطعام باسمه قبل الأكل، ومعرفة من أين جاء شيء واحد في الصحن (كما يتعلّم أطفال اليابان في مدارسهم).", en: "Thanked whoever cooked, by name, before eating, and found out where one thing on the plate came from (as Japanese children learn at school)." });
  S.pig.tasks.push({ id: "pig-t6", ar: "دور ثابت في البيت سبعة أيام، كنوبة المائدة في مدارس اليابان: تجهيز المائدة ورفعها كل يوم دون تذكير.", en: "A fixed role at home for seven days, like lunch duty in Japanese schools: setting and clearing the table every day without a reminder." });
  S.monkey.tasks.push({ id: "monkey-t6", ar: "عند الغضب: التوقف، وثلاثة أنفاس بطيئة، ثم تسمية الشعور بجملة («أنا غاضب لأن...») قبل الكلام.", ar_f: "عند الغضب: التوقف، وثلاثة أنفاس بطيئة، ثم تسمية الشعور بجملة («أنا غاضبة لأن...») قبل الكلام.", en: "When angry: stopped, took three slow breaths, then named the feeling in a sentence (“I'm angry because...”) before speaking." });
  S.human.tasks.push({ id: "human-t5", ar: "تمرين أدب مع الوالد، ثم فعله اليوم: مقاطعة من يتكلم بلطف (اليد على كتفه، والانتظار حتى ينظر).", en: "Practised a courtesy with a parent, then did it today: interrupting someone politely (a hand on their shoulder, waiting until they look)." });
  S.sabiq.tasks.push(
    { id: "sabiq-t5", ar: "عمل طيب واحد لم يطلبه أحد اليوم، مع عقدة صغيرة في خيط على المعصم تُفكّ بعد فعله (على طريقة الكشافة).", en: "One good turn today that nobody asked for, with a little knot in a string on the wrist, untied once it was done (after the Scouts' custom)." },
    { id: "sabiq-t6", ar: "تسمية فضيلة رآها في أحد أفراد البيت بجملة واضحة: «رأيتُ صبرك اليوم حين...».", en: "Named a virtue seen in someone at home, in a clear sentence: “I saw your patience today when...”" });
})();

/* ───────────── من حكايات العالم، الدفعة الثانية، 24 نوفمبر 2026 ─────────────
 * One more piece per age band for each stage (4-8, 9-14, 15+), retold in our own words from public-domain sources,
 * and two choice stories on everyday situations taught in English PSHE (a photo shared without asking; spending).
 * Invented characters are fictional; names inside old tales are the tales' own.
 */
(function () {
  var C = window.AKHLAQ_CONTENT, S = C.stages;
  function R(k, o) { S[k].readings.push(Object.assign({ world: "tale", quote: null }, o)); }
  function Q(k, list) { list.forEach(function (q) { S[k].quiz.push(Object.assign({ type: "comprehension" }, q)); }); }
  function O(a) { return a.map(function (x) { return { ar: x[0], en: x[1] }; }); }

  /* ── الخنصر ── */
  R("zombie", { id: "zombie-r13", minutes: 2, ages: "4-8",
    title: { ar: "جحا والغصن", en: "Juha and the branch" },
    origin: { ar: "من نوادر جحا", en: "From the tales of Juha" },
    body: {
      ar: ["صعد جحا إلى شجرة كبيرة، ومعه منشار.",
        "جلس على غصن طويل، وبدأ ينشر الغصن نفسه: زِرّ، زِرّ، زِرّ.",
        "مرّ رجل تحت الشجرة، فرفع رأسه وصاح: «يا جحا! ستقع!».",
        "قال جحا: «أنا مشغول»، ولم ينظر إليه. زِرّ، زِرّ.",
        "قال الرجل: «يا جحا، أنت جالس على الغصن الذي تقطعه!».",
        "قال جحا: «سمعت، سمعت»، وأكمل: زِرّ، زِرّ... كراااك!",
        "وقع الغصن، ووقع جحا معه على العشب: بوم!",
        "جلس جحا يفرك ظهره، ونظر إلى الرجل بعينين واسعتين: «كيف عرفتَ أني سأقع؟».",
        "قال الرجل: «نظرتُ فقط».",
        "وفي الغد صعد جحا الشجرة مرة أخرى. وهذه المرة جلس قرب الجذع، ونظر أين يجلس، ثم بدأ ينشر."],
      en: ["Juha climbed a big tree with a saw.",
        "He sat on a long branch and began to saw the very same branch: zzzt, zzzt, zzzt.",
        "A man passed under the tree, looked up and shouted, “Juha! You'll fall!”",
        "“I'm busy,” said Juha, without looking at him. Zzzt, zzzt.",
        "“Juha,” said the man, “you're sitting on the branch you're cutting!”",
        "“I heard, I heard,” said Juha, and carried on: zzzt, zzzt... CRAAACK!",
        "Down came the branch, and down came Juha with it onto the grass: BUMP!",
        "Juha sat rubbing his back and looked at the man with wide eyes. “How did you know I would fall?”",
        "“I just looked,” said the man.",
        "The next day Juha climbed the tree again. This time he sat near the trunk, looked at where he was sitting, and then began to saw."]
    },
    ask: { ar: "متى قال لك أحد «انتبه»، فكان معه حق؟", ar_f: "متى قال لكِ أحد «انتبهي»، فكان معه حق؟", en: "When did someone tell you “careful”, and they were right?" },
    source: { ar: "نادرة تُروى عن جحا عند العرب، وعن نصر الدين خوجه في تركيا (وهي في «The Turkish Jester» لجورج بورو، 1884)، أعدناها بكلماتنا، وجعلنا لها خاتمة من عندنا.", en: "A tale told of Juha among the Arabs and of Nasreddin Hodja in Turkey (it is in George Borrow's The Turkish Jester, 1884), retold in our own words with an ending of our own." } });
  R("zombie", { id: "zombie-r14", minutes: 3, ages: "9-14",
    title: { ar: "علامة على حافة القارب", en: "A mark on the side of the boat" },
    origin: { ar: "حكاية صينية", en: "A Chinese tale" },
    body: {
      ar: ["يحكي كتاب صيني قديم عن رجل من مملكة تشو كان يعبر النهر في قارب، ومعه سيف ثمين. وفي وسط النهر انزلق السيف من يده، وسقط في الماء.",
        "لم يصرخ الرجل، ولم يقفز. أخرج سكينًا، وحفر علامة على حافة القارب، وقال بثقة: «من هنا سقط سيفي».",
        "ومضى القارب. وحين وصل إلى الضفة الأخرى ووقف، خلع الرجل ثيابه، وقفز في الماء عند العلامة، يبحث عن سيفه.",
        "والسيف بقي في قاع النهر حيث سقط، والقارب مشى بعيدًا عنه.",
        "ضحك طلال حين قرأ الحكاية في كتاب أخته الكبيرة. قال: «من يفعل هذا؟».",
        "وفي الأسبوع التالي كان امتحان الرياضيات. ذاكر طلال كما يذاكر منذ الصف الرابع: حفظ الأمثلة المحلولة كما هي، سطرًا سطرًا، ونام مطمئنًا.",
        "وفي الامتحان جاءت المسائل كلها جديدة: الأرقام نفسها تقريبًا، والسؤال من جهة أخرى. حاول طلال أن يتذكر المثال المحلول، فلم يجد له مكانًا في الورقة.",
        "رجع إلى البيت ساكتًا. سألته أخته عن الامتحان، فقال: «حفرتُ علامة على حافة القارب».",
        "ثم فتح الكتاب على أول درس، وأخذ ورقة بيضاء، وحاول أن يحل المثال وحده قبل أن ينظر إلى الحل."],
      en: ["An old Chinese book tells of a man from the state of Chu who was crossing a river by boat with a precious sword. In the middle of the river the sword slipped from his hand and fell into the water.",
        "The man did not shout or jump in. He took out a knife, carved a mark on the side of the boat, and said confidently: “This is where my sword fell.”",
        "The boat went on. When it reached the far bank and stopped, the man took off his clothes and dived into the water at the mark to look for his sword.",
        "The sword stayed at the bottom of the river where it had fallen, and the boat had travelled far away from it.",
        "Talal laughed when he read the tale in his big sister's book. “Who would do that?” he said.",
        "The next week was the maths exam. Talal revised the way he had revised since Year 4: he memorised the worked examples exactly as they were, line by line, and went to sleep feeling safe.",
        "In the exam every problem was new: nearly the same numbers, but the question came from another direction. Talal tried to remember the worked example, and could find no place for it on the paper.",
        "He came home quiet. When his sister asked about the exam, he said: “I carved a mark on the side of the boat.”",
        "Then he opened the book at the first lesson, took a blank sheet, and tried to solve the example by himself before looking at the answer."]
    },
    ask: { ar: "ما الطريقة التي تفعل بها شيئًا منذ زمن، وقد تغيّر ما حولها؟", ar_f: "ما الطريقة التي تفعلين بها شيئًا منذ زمن، وقد تغيّر ما حولها؟", en: "What do you still do the old way, though things around it have changed?" },
    source: { ar: "حكاية «حفر علامة على القارب» من كتاب «ربيع وخريف السيد لو» الصيني (القرن الثالث قبل الميلاد)، أعدناها بكلماتنا في قصة مؤلفة أبطالها خياليون.", en: "The tale of the man who marked the boat, from the Chinese Lüshi Chunqiu (3rd century BCE), retold in our own words inside an original story with fictional characters." } });
  R("zombie", { id: "zombie-r15", minutes: 4, ages: "15+",
    title: { ar: "ثياب الإمبراطور الجديدة", en: "The emperor's new clothes" },
    origin: { ar: "من حكايات أندرسن", en: "From Hans Christian Andersen" },
    body: {
      ar: ["كان إمبراطور يحب الثياب الجديدة أكثر من أي شيء آخر. وجاء إلى مدينته رجلان قالا إنهما ينسجان قماشًا عجيبًا: لا يراه من كان غير جدير بمنصبه، أو كان غبيًّا جدًّا.",
        "دفع لهما الإمبراطور ذهبًا كثيرًا. فنصبا نولين، وجلسا أمامهما يحرّكان أيديهما في الهواء من الصباح إلى الليل، والأنوال فارغة.",
        "أرسل الإمبراطور وزيره العجوز الأمين لينظر. فتح الوزير عينيه أوسع ما يستطيع، ولم يرَ شيئًا. وقال في نفسه: أأنا غير جدير بمنصبي؟ لا يعرف هذا أحد. ثم قال بصوت عالٍ: «ما أجمل الألوان! ما أدق النقش!».",
        "وجاء موظف ثانٍ، فلم يرَ شيئًا، ومدح. ثم جاء الإمبراطور نفسه مع حاشيته، فلم يرَ شيئًا، وخاف أن يكون هو غير الجدير، فقال: «رائع جدًّا!». وردّد كل من حوله: «رائع جدًّا!».",
        "ولبس الإمبراطور الثياب التي لا يراها أحد، وخرج في موكب في شوارع المدينة. وكان الناس على الجانبين يصيحون: «ما أجمل ثياب الإمبراطور الجديدة!». لم يُرد أحد أن يبدو غبيًّا.",
        "ثم قال طفل صغير، بصوت عادي جدًّا: «لكنه لا يلبس شيئًا!».",
        "قال أبوه: «اسمعوا صوت البريء». وهمس الناس بالكلمة بعضهم لبعض، ثم قالوها بصوت عالٍ، ثم صاحت بها المدينة كلها.",
        "أحسّ الإمبراطور بقشعريرة، لأنه عرف أنهم على حق. لكنه قال في نفسه: يجب أن أكمل الموكب. فمشى أشدّ استقامة من قبل، والخدم وراءه يحملون ذيلًا لا وجود له."],
      en: ["There was an emperor who loved new clothes more than anything. Two men came to his city saying they could weave a marvellous cloth: anyone unfit for his post, or very stupid, could not see it.",
        "The emperor paid them a great deal of gold. They set up two looms and sat at them moving their hands in the air from morning till night, and the looms were empty.",
        "The emperor sent his honest old minister to look. The minister opened his eyes as wide as he could and saw nothing. Am I unfit for my post? he thought. Nobody must know. Then he said aloud: “What lovely colours! What fine patterns!”",
        "A second official came, saw nothing, and praised it. Then the emperor himself came with his court, saw nothing, and, afraid that he might be the unfit one, said: “Quite magnificent!” And everyone around him repeated: “Quite magnificent!”",
        "The emperor put on the clothes that no one could see and set out in a procession through the streets. The people on both sides cried: “How beautiful the emperor's new clothes are!” Nobody wanted to look stupid.",
        "Then a small child said, in a perfectly ordinary voice: “But he hasn't got anything on!”",
        "“Listen to the innocent,” said his father. People whispered it to each other, then said it out loud, until the whole city was shouting it.",
        "The emperor shivered, because he knew they were right. But he thought: I must go on with the procession. So he walked even straighter than before, and the servants walked behind him carrying a train that was not there."]
    },
    ask: { ar: "متى قلتَ «رائع» لأن الجميع قالوها؟", ar_f: "متى قلتِ «رائع» لأن الجميع قالوها؟", en: "When did you say “amazing” because everyone else did?" },
    source: { ar: "حكاية «ثياب الإمبراطور الجديدة» للدنماركي هانس كريستيان أندرسن (1837)، أعدنا حكايتها بكلماتنا.", en: "Hans Christian Andersen's “The Emperor's New Clothes” (1837), retold in our own words." } });
  Q("zombie", [
    { id: "zombie-q22", readingId: "zombie-r13", correct: 1,
      q: { ar: "ماذا قال الرجل لجحا وهو تحت الشجرة؟", en: "What did the man tell Juha from under the tree?" },
      options: O([["إن المنشار مكسور", "That the saw was broken"], ["إنه جالس على الغصن الذي يقطعه", "That he was sitting on the branch he was cutting"], ["إن الشجرة ليست له", "That the tree wasn't his"]]),
      why: { ar: "نبّهه الرجل مرتين، وجحا يقول «سمعت» ولا يسمع.", en: "The man warned him twice, and Juha said “I heard” without listening." } },
    { id: "zombie-q23", readingId: "zombie-r13", correct: 2,
      q: { ar: "ماذا فعل جحا في الغد؟", en: "What did Juha do the next day?" },
      options: O([["ترك المنشار في البيت", "Left the saw at home"], ["طلب من الرجل أن ينشر عنه", "Asked the man to saw for him"], ["جلس قرب الجذع ونظر أين يجلس", "Sat near the trunk and looked at where he was sitting"]]),
      why: { ar: "تعلّم أن ينظر، كما نظر الرجل.", en: "He learned to look, as the man had." } },
    { id: "zombie-q24", readingId: "zombie-r14", correct: 0,
      q: { ar: "لماذا لم يجد الرجل سيفه عند العلامة؟", en: "Why didn't the man find his sword at the mark?" },
      options: O([["لأن القارب مشى والسيف بقي حيث سقط", "Because the boat moved on and the sword stayed where it fell"], ["لأن أحدًا أخذ السيف من الماء", "Because someone took the sword from the water"], ["لأن العلامة انمحت في الطريق", "Because the mark was rubbed off on the way"]]),
      why: { ar: "العلامة صحيحة في لحظتها، ثم تغيّر كل شيء حولها.", en: "The mark was right at that moment; then everything around it changed." } },
    { id: "zombie-q25", readingId: "zombie-r14", correct: 1,
      q: { ar: "ما «العلامة على القارب» عند طلال؟", en: "What was Talal's “mark on the boat”?" },
      options: O([["أنه نام متأخرًا قبل الامتحان", "That he slept late before the exam"], ["حفظ الأمثلة المحلولة كما كان يفعل منذ الصف الرابع", "Memorising worked examples, as he had since Year 4"], ["أنه نسي كتاب أخته", "That he forgot his sister's book"]]),
      why: { ar: "تغيّرت الأسئلة، وبقيت طريقته كما هي.", en: "The questions changed, and his method stayed the same." } },
    { id: "zombie-q26", readingId: "zombie-r15", correct: 2,
      q: { ar: "لماذا مدح الوزير العجوز قماشًا لم يره؟", en: "Why did the old minister praise cloth he could not see?" },
      options: O([["لأن الإمبراطور أمره بذلك", "Because the emperor ordered him to"], ["لأنه رأى جزءًا صغيرًا منه", "Because he saw a small part of it"], ["لأنه خاف أن يُظن غير جدير بمنصبه", "Because he feared being thought unfit for his post"]]),
      why: { ar: "خوف كل واحد على صورته أغلق عيون الجميع.", en: "Each one's fear for his image closed everyone's eyes." } },
    { id: "zombie-q27", readingId: "zombie-r15", correct: 0,
      q: { ar: "ماذا فعل الإمبراطور بعد أن صاحت المدينة؟", en: "What did the emperor do after the city cried out?" },
      options: O([["أكمل الموكب أشدّ استقامة من قبل", "Went on with the procession, walking even straighter"], ["رجع إلى القصر يجري", "Ran back to the palace"], ["أمر بالقبض على الطفل", "Ordered the child to be arrested"]]),
      why: { ar: "عرف الحقيقة، وكان الاعتراف بها أصعب عليه من المشي.", en: "He knew the truth, and admitting it was harder for him than walking on." } }
  ]);

  /* ── البنصر ── */
  R("pig", { id: "pig-r13", minutes: 3, ages: "4-8",
    title: { ar: "الأم هولّه", en: "Mother Holle" },
    origin: { ar: "من حكايات الأخوين غريم", en: "From the Brothers Grimm" },
    body: {
      ar: ["كانت أمينة تغزل الصوف عند البئر كل يوم. وفي يوم وقع المغزل في البئر، فنزلت وراءه.",
        "فوجدت نفسها في مرج أخضر جميل.",
        "مرّت بفرن فيه خبز. صاح الخبز: «أخرجيني! أخرجيني! احترقتُ!». فأخرجته رغيفًا رغيفًا.",
        "ومرّت بشجرة تفاح. صاحت الشجرة: «هزّيني! هزّيني! نضج تفاحي!». فهزّتها، وجمعت التفاح كومة.",
        "ووصلت إلى بيت الأم هولّه، العجوز الطيبة. قالت: «ساعديني في البيت، وانفضي لي الفُرُش جيدًا، فإذا طار ريشها نزل الثلج على الدنيا».",
        "فنفضت أمينة الفُرُش كل يوم حتى طار الريش كالثلج.",
        "ولما رجعت إلى بيتها، نزل عليها مطر من ذهب!",
        "رأت أختها سارة الذهب، فقالت: «أريد مثله». ونزلت البئر.",
        "صاح الخبز، فقالت: «أتّسخ؟ لا». وصاحت الشجرة، فقالت: «يقع التفاح على رأسي؟ لا». وعند الأم هولّه نامت حتى الظهر، ولم تنفض الفُرُش.",
        "ولما رجعت، نزل عليها قار أسود لزج.",
        "فركت سارة القار أيامًا. ثم قامت ذات صباح، وأخذت المغزل، وجلست بجانب أختها تغزل."],
      en: ["Amina sat spinning wool by the well every day. One day her spindle fell into the well, and she went down after it.",
        "She found herself in a lovely green meadow.",
        "She passed an oven full of bread. The bread cried, “Take me out! Take me out! I'm burning!” So she took the loaves out, one by one.",
        "She passed an apple tree. The tree cried, “Shake me! Shake me! My apples are ripe!” So she shook it and gathered the apples in a heap.",
        "She came to the house of Mother Holle, a kind old woman. “Help me in the house,” she said, “and shake my featherbeds well. When the feathers fly, it snows on the world.”",
        "So Amina shook the featherbeds every day until the feathers flew like snow.",
        "When she went home, a shower of gold fell on her!",
        "Her sister Sara saw the gold and said, “I want some too.” And down the well she went.",
        "The bread cried out, and she said, “And get dirty? No.” The tree cried out, and she said, “And have apples fall on my head? No.” At Mother Holle's she slept till noon and never shook the featherbeds.",
        "When she went home, sticky black tar poured down on her.",
        "Sara scrubbed at the tar for days. Then one morning she got up, took a spindle, and sat down beside her sister to spin."]
    },
    ask: { ar: "ما العمل الصغير الذي يناديك في البيت مثل الخبز في الفرن؟", ar_f: "ما العمل الصغير الذي يناديكِ في البيت مثل الخبز في الفرن؟", en: "What small job at home calls to you, like the bread in the oven?" },
    source: { ar: "حكاية «الأم هولّه» في مجموعة الأخوين غريم (1812)، أعدنا حكايتها بكلماتنا، والاسمان من عندنا، وجعلنا لها خاتمة غير خاتمتها.", en: "“Mother Holle” from the Brothers Grimm collection (1812), retold in our own words; the girls' names and the ending are ours." } });
  R("pig", { id: "pig-r14", minutes: 3, ages: "9-14",
    title: { ar: "الفلاح الذي انتظر عند الجذع", en: "The farmer who waited by the stump" },
    origin: { ar: "حكاية صينية", en: "A Chinese tale" },
    body: {
      ar: ["في كتاب الفيلسوف الصيني هان فاي زي حكاية فلاح من مملكة سونغ، كان في حقله جذع شجرة مقطوعة. وفي يوم جاء أرنب يجري بأقصى سرعته، فاصطدم بالجذع، فانكسرت رقبته.",
        "أخذ الفلاح الأرنب إلى البيت، وأكل منه عشاءً لم يتعب فيه. وفي الصباح ترك محراثه، وجلس عند الجذع ينتظر أرنبًا آخر.",
        "وانتظر يومًا، ويومين، وشهرًا. ولم يأتِ أرنب. ونبت العشب في حقله المهجور، وصار أهل سونغ يضحكون كلما مرّوا به.",
        "في الأسبوع الماضي حلّ يمان اختبار العلوم القصير بالتخمين، فحصل على الدرجة كاملة. قال في نفسه: بعض الأيام هكذا. لماذا أتعب؟",
        "وجاء الاختبار الثاني، فلم يفتح الكتاب، وجلس ينتظر أن يحدث الشيء نفسه. وخمّن، وخمّن.",
        "حصل على أربعة من عشرين. ونظر إلى الرقم الأحمر، ثم إلى ورقة صديقه زين، المليئة بخطوط وأسهم وكلمات صغيرة كتبها زين وهو يذاكر.",
        "في الطريق إلى البيت مرّ يمان بحديقة الحي، فرأى عامل الحديقة يقلّب التراب حول الأشجار. توقف قليلًا، وقال في نفسه: هذا لا ينتظر أرنبًا.",
        "وفي المساء أخرج دفتر العلوم، وكتب في أعلى أول صفحة فارغة: «الدرس الأول»، ثم بدأ يرسم الخطوط والأسهم."],
      en: ["The book of the Chinese philosopher Han Feizi tells of a farmer from the state of Song who had a tree stump in his field. One day a hare came running at full speed, crashed into the stump, and broke its neck.",
        "The farmer took the hare home and ate a supper he had not worked for. Next morning he left his plough and sat by the stump waiting for another hare.",
        "He waited a day, two days, a month. No hare came. Weeds grew in his abandoned field, and the people of Song laughed whenever they passed it.",
        "Last week Yaman did the short science quiz by guessing, and got full marks. Some days are like that, he thought. Why work hard?",
        "The second quiz came. He didn't open the book, and sat waiting for the same thing to happen. He guessed, and guessed.",
        "He got four out of twenty. He looked at the red number, then at his friend Zain's paper, full of lines, arrows and little words Zain had written while revising.",
        "On the way home Yaman passed the neighbourhood park and saw the gardener turning the soil around the trees. He stopped for a moment. He's not waiting for a hare, he thought.",
        "That evening he took out his science notebook, wrote “Lesson one” at the top of the first empty page, and began drawing the lines and arrows."]
    },
    ask: { ar: "ما «الأرنب» الذي تنتظره بدل أن تعمل؟", ar_f: "ما «الأرنب» الذي تنتظرينه بدل أن تعملي؟", en: "What “hare” are you waiting for instead of working?" },
    source: { ar: "حكاية «انتظار الأرنب عند الجذع» من كتاب «هان فاي زي» الصيني (القرن الثالث قبل الميلاد، فصل «الحشرات الخمس»)، أعدناها بكلماتنا في قصة مؤلفة أبطالها خياليون.", en: "The tale of waiting for a hare by the stump, from the Chinese book Han Feizi (3rd century BCE, chapter “The Five Vermin”), retold in our own words inside an original story with fictional characters." } });
  R("pig", { id: "pig-r15", minutes: 4, ages: "15+",
    title: { ar: "الصياد وزوجته", en: "The fisherman and his wife" },
    origin: { ar: "من حكايات الأخوين غريم", en: "From the Brothers Grimm" },
    body: {
      ar: ["كان صياد فقير يسكن مع زوجته في كوخ صغير قرب البحر. وفي يوم علقت في صنارته سمكة مفلطحة كبيرة، فتكلمت: «اتركني، فأنا أمير مسحور، ولن أنفعك طعامًا». فتركها الصياد، ورجع بلا شيء.",
        "قالت زوجته: «تركتها ولم تطلب منها شيئًا؟ ارجع، واطلب بيتًا صغيرًا بدل هذا الكوخ». فرجع، ونادى السمكة، فقالت: «اذهب، فهي فيه». فوجد بيتًا صغيرًا بحديقة ودجاج.",
        "فرحت الزوجة أسبوعين. ثم قالت: «البيت ضيق. اطلب قصرًا من حجر». ورجع الصياد، وكان البحر هذه المرة أخضر داكنًا. وصار البيت قصرًا.",
        "ونامت الزوجة في القصر ليلة، وفي الصباح نظرت من النافذة إلى الأرض الواسعة: «لماذا لا أكون ملكة على هذا كله؟». فصارت ملكة. ثم قالت: «إمبراطورة». فصارت إمبراطورة. وكان البحر يسودّ ويرتفع موجه كلما رجع الصياد.",
        "قال لها الصياد مرة: «يكفي يا امرأة، أليس هذا كافيًا؟». قالت: «سنرى».",
        "ولم تنم تلك الليلة. كانت تتقلب، وتفكر: ماذا بعد؟ ماذا أكثر؟ ورأت الشمس تطلع من النافذة، فغضبت لأنها لم تأمرها بالطلوع.",
        "قالت: «اذهب، وقل للسمكة: أريد أن أُطلِع الشمس والقمر بأمري».",
        "رجع الصياد يرتجف. كانت العاصفة تقتلع الأشجار، والموج كالجبال. ونادى السمكة، وقال طلب زوجته.",
        "قالت السمكة: «اذهب إليها. ستجدها في كوخها القديم».",
        "ووجدها هناك، جالسة على العتبة، في الكوخ نفسه، كما كانا في أول الحكاية."],
      en: ["A poor fisherman lived with his wife in a little hovel by the sea. One day a big flatfish caught on his line and spoke: “Let me go. I'm an enchanted prince, and I'd be no good to you as food.” So the fisherman let it go and came home with nothing.",
        "“You let it go and didn't ask for anything?” said his wife. “Go back and ask for a little cottage instead of this hovel.” He went back and called the fish, which said: “Go home, she has it.” He found a little cottage with a garden and hens.",
        "His wife was happy for two weeks. Then she said: “The cottage is cramped. Ask for a stone castle.” The fisherman went back, and this time the sea was dark green. The cottage became a castle.",
        "The wife slept one night in the castle, and in the morning looked out of the window at the wide land: “Why shouldn't I be queen over all of it?” So she became queen. Then she said: “Empress.” So she became empress. And each time the fisherman went back, the sea was blacker and its waves higher.",
        "Once the fisherman said to her: “Enough, wife. Isn't this enough?” She said: “We'll see.”",
        "She didn't sleep that night. She tossed and turned, thinking: what next? What more? She saw the sun rising through the window, and was angry that she had not ordered it to rise.",
        "She said: “Go and tell the fish: I want the sun and the moon to rise at my command.”",
        "The fisherman went back trembling. The storm was tearing up trees, and the waves were like mountains. He called the fish and told it his wife's wish.",
        "The fish said: “Go home to her. You'll find her in her old hovel.”",
        "And he found her there, sitting on the doorstep of the same hovel, just as they had been at the start of the tale."]
    },
    ask: { ar: "متى أخذتَ ما تمنّيته، ثم لم يكفِك أسبوعين؟", ar_f: "متى أخذتِ ما تمنّيتِه، ثم لم يكفِكِ أسبوعين؟", en: "When did you get what you wished for, and it stopped being enough within two weeks?" },
    source: { ar: "حكاية «الصياد وزوجته» في مجموعة الأخوين غريم (1812)، أعدنا حكايتها بكلماتنا، واختصرنا طلبات الزوجة، وجعلنا آخرها أن تُطلع الشمس والقمر بأمرها.", en: "“The Fisherman and his Wife” from the Brothers Grimm collection (1812), retold in our own words; we shortened the wife's wishes and made her last one to have the sun and moon rise at her command." } });
  Q("pig", [
    { id: "pig-q22", readingId: "pig-r13", correct: 0,
      q: { ar: "ماذا فعلت أمينة حين صاح الخبز في الفرن؟", en: "What did Amina do when the bread in the oven cried out?" },
      options: O([["أخرجته رغيفًا رغيفًا", "Took it out, loaf by loaf"], ["أكلت رغيفًا وتركت الباقي", "Ate one loaf and left the rest"], ["مشت ولم تلتفت إليه", "Walked on without looking"]]),
      why: { ar: "سمعت ما يحتاج إلى يد، فمدّت يدها.", en: "She heard something that needed a hand, and gave hers." } },
    { id: "pig-q23", readingId: "pig-r13", correct: 2,
      q: { ar: "ماذا فعلت سارة في آخر الحكاية؟", en: "What did Sara do at the end of the story?" },
      options: O([["نزلت البئر مرة ثالثة", "Went down the well a third time"], ["أخذت ذهب أختها", "Took her sister's gold"], ["أخذت المغزل وجلست تغزل بجانب أختها", "Took a spindle and sat spinning beside her sister"]]),
      why: { ar: "رأت الفرق بين اليومين، فبدأت تعمل.", en: "She saw the difference between the two stays, and started working." } },
    { id: "pig-q24", readingId: "pig-r14", correct: 1,
      q: { ar: "لماذا ترك الفلاح محراثه؟", en: "Why did the farmer leave his plough?" },
      options: O([["لأن المحراث انكسر", "Because the plough broke"], ["لينتظر أرنبًا آخر يصطدم بالجذع", "To wait for another hare to crash into the stump"], ["لأنه مرض بعد أكل الأرنب", "Because he fell ill after eating the hare"]]),
      why: { ar: "ظن أن الحظ الذي جاء مرة سيأتي كل يوم.", en: "He thought luck that came once would come every day." } },
    { id: "pig-q25", readingId: "pig-r14", correct: 0,
      q: { ar: "ما الذي رآه يمان في طريقه فغيّر رأيه؟", en: "What did Yaman see on his way home that changed his mind?" },
      options: O([["عامل الحديقة يقلّب التراب حول الأشجار", "The gardener turning the soil around the trees"], ["أرنبًا يجري في الحديقة", "A hare running in the park"], ["زين يلعب الكرة", "Zain playing football"]]),
      why: { ar: "رأى من يعمل ولا ينتظر، فتذكّر الحكاية.", en: "He saw someone working rather than waiting, and remembered the tale." } },
    { id: "pig-q26", readingId: "pig-r15", correct: 2,
      q: { ar: "ماذا كان يتغيّر في البحر كلما رجع الصياد بطلب جديد؟", en: "What changed in the sea each time the fisherman came back with a new wish?" },
      options: O([["يصير أهدأ وأصفى", "It grew calmer and clearer"], ["تكثر فيه الأسماك", "It filled with more fish"], ["يسودّ ويرتفع موجه", "It grew darker and its waves higher"]]),
      why: { ar: "كلما زاد الطلب اضطرب البحر، كأنه صورة لما في قلبها.", en: "The more she asked, the wilder the sea, like a picture of her heart." } },
    { id: "pig-q27", readingId: "pig-r15", correct: 1,
      q: { ar: "لماذا غضبت الزوجة حين رأت الشمس تطلع؟", en: "Why was the wife angry when she saw the sun rise?" },
      options: O([["لأن الشمس أيقظتها مبكرًا", "Because the sun woke her early"], ["لأنها لم تطلع بأمرها", "Because it had not risen at her command"], ["لأن الصياد لم يرجع بعد", "Because the fisherman had not come back yet"]]),
      why: { ar: "لم يبقَ شيء يكفيها، حتى الشمس.", en: "Nothing was enough for her any more, not even the sun." } }
  ]);

  /* ── الوسطى ── */
  R("monkey", { id: "monkey-r13", minutes: 2, ages: "4-8",
    title: { ar: "قفي يا قِدر!", en: "Stop, little pot!" },
    origin: { ar: "من حكايات الأخوين غريم", en: "From the Brothers Grimm" },
    body: {
      ar: ["كانت عند بنت صغيرة قِدر عجيبة.",
        "إذا قالت لها: «اطبخي يا قِدر!»، طبخت عصيدة حلوة ساخنة.",
        "وإذا قالت لها: «قفي يا قِدر!»، وقفت.",
        "وفي يوم خرجت البنت. وجاعت أمها، فقالت: «اطبخي يا قِدر!». فطبخت القِدر عصيدة حلوة.",
        "أكلت الأم وشبعت. وأرادت أن توقف القِدر... لكنها نسيت الكلمة!",
        "قالت: «يكفي يا قِدر!». والقِدر تطبخ.",
        "قالت: «انتهينا يا قِدر!». والقِدر تطبخ وتطبخ.",
        "سالت العصيدة على الطاولة، ثم على الأرض، ثم من الباب إلى الشارع، ثم إلى البيت المجاور!",
        "ورجعت البنت، فرأت الشارع كله عصيدة. فصاحت: «قفي يا قِدر!».",
        "ووقفت القِدر.",
        "ومن يومها، من أراد أن يمرّ في ذلك الشارع، أكل طريقه بالملعقة!"],
      en: ["A little girl had a wonderful pot.",
        "When she said, “Cook, little pot!”, it cooked sweet, hot porridge.",
        "And when she said, “Stop, little pot!”, it stopped.",
        "One day the girl went out. Her mother was hungry, so she said, “Cook, little pot!” And the pot cooked sweet porridge.",
        "The mother ate until she was full. She wanted to stop the pot... but she had forgotten the word!",
        "“That's enough, pot!” she said. And the pot kept cooking.",
        "“We're done, pot!” she said. And the pot cooked and cooked.",
        "The porridge ran over the table, then over the floor, then out of the door into the street, and into the house next door!",
        "The girl came home and saw the whole street full of porridge. She cried, “Stop, little pot!”",
        "And the pot stopped.",
        "After that, anyone who wanted to get down that street had to eat their way through with a spoon!"]
    },
    ask: { ar: "ما «الكلمة السحرية» التي تجعلك تتوقف حين يُطلب منك؟", ar_f: "ما «الكلمة السحرية» التي تجعلكِ تتوقفين حين يُطلب منكِ؟", en: "What is your “magic word” for stopping when you're asked to?" },
    source: { ar: "حكاية «العصيدة الحلوة» في مجموعة الأخوين غريم (1815)، أعدنا حكايتها بكلماتنا.", en: "“Sweet Porridge” from the Brothers Grimm collection (1815), retold in our own words." } });
  R("monkey", { id: "monkey-r14", minutes: 3, ages: "9-14",
    title: { ar: "تلميذا معلّم الشطرنج", en: "The chess master's two pupils" },
    origin: { ar: "حكاية صينية من منشيوس", en: "A Chinese tale from Mencius" },
    body: {
      ar: ["يحكي الفيلسوف الصيني منشيوس عن «يي تشيو»، أمهر لاعب في البلاد كلها في لعبة تشبه الشطرنج. وجاءه تلميذان يتعلمان منه.",
        "التلميذ الأول جلس قريبًا، وعيناه على الرقعة، وأذناه على كلام المعلم. إذا قال المعلم «انظر إلى هذه الزاوية» نظر، وإذا قال «لماذا؟» فكّر.",
        "والتلميذ الثاني جلس معه في الدرس نفسه، وسمع الكلام نفسه. لكن قلبه كان في مكان آخر: كان يسمع أجنحة بجعة تطير فوق البيت، ويفكر كيف يشدّ قوسه ويرميها.",
        "وبعد شهور صار الأول لاعبًا ماهرًا، وبقي الثاني يخسر في كل مباراة.",
        "قال منشيوس: «أكان أقل ذكاءً من صاحبه؟ لا. الفرق في القلب الذي حضر»." ,
        "تذكّرت هند الحكاية في حصة البرمجة. كانت جالسة بجانب لمى، والمعلمة تشرح الحلقة التكرارية خطوة خطوة.",
        "وكان الهاتف تحت الطاولة يهتز: إشعار من المجموعة، ثم آخر، ثم مقطع. قالت هند في نفسها: ألقي نظرة واحدة فقط. وحين رفعت رأسها كانت المعلمة في الخطوة الرابعة.",
        "في الواجب حلّت لمى التمرين في عشر دقائق، وجلست هند أمامه ساعة.",
        "وفي الحصة التالية أطفأت هند الهاتف قبل أن تدخل، ووضعته في الحقيبة، وكتبت على طرف دفترها بخط صغير: «بجعة»، كلما رأته عرفت أين قلبها."],
      en: ["The Chinese philosopher Mencius tells of Yi Qiu, the finest player in the whole land of a game like chess. Two pupils came to learn from him.",
        "The first pupil sat close, his eyes on the board and his ears on the master's words. When the master said “Look at this corner”, he looked, and when he said “Why?”, he thought.",
        "The second pupil sat in the same lesson and heard the same words. But his heart was somewhere else: he could hear a swan's wings flying over the house, and was thinking how to draw his bow and shoot it.",
        "Months later the first had become a skilled player, and the second still lost every game.",
        "Mencius said: “Was he less clever than his friend? No. The difference was in the heart that was present.”",
        "Hind remembered the tale in coding class. She was sitting next to Lama, and the teacher was explaining loops step by step.",
        "Her phone buzzed under the desk: a group notification, then another, then a clip. Just one look, Hind thought. When she looked up, the teacher was on step four.",
        "For homework Lama solved the exercise in ten minutes, and Hind sat in front of it for an hour.",
        "In the next lesson Hind switched her phone off before she went in, put it in her bag, and wrote one small word in the corner of her notebook: “Swan”. Whenever she saw it, she knew where her heart was."]
    },
    ask: { ar: "ما «البجعة» التي تطير فوق رأسك وأنت تتعلم؟", ar_f: "ما «البجعة» التي تطير فوق رأسكِ وأنتِ تتعلمين؟", en: "What “swan” flies over your head while you're learning?" },
    source: { ar: "من كتاب «منشيوس» (القرن الرابع قبل الميلاد، 6أ:9)، أعدناها بكلماتنا في قصة مؤلفة أبطالها خياليون.", en: "From the book of Mencius (4th century BCE, 6A:9), retold in our own words inside an original story with fictional characters." } });
  R("monkey", { id: "monkey-r15", minutes: 4, ages: "15+",
    title: { ar: "الرجل الذي أضاع فأسه", en: "The man who lost his axe" },
    origin: { ar: "حكاية صينية", en: "A Chinese tale" },
    body: {
      ar: ["في كتاب «ليه زي» الصيني حكاية رجل أضاع فأسه، فظن أن ابن جاره سرقها.",
        "صار يراقب الفتى. مشيته مشية لص. وجهه وجه لص. كلامه كلام لص. كل ما يفعله، وكل ما لا يفعله، يقول: أنا أخذت الفأس.",
        "ثم ذهب الرجل يحفر في الوادي، فوجد فأسه هناك، حيث نسيها.",
        "وفي الغد رأى ابن جاره. لم يجد في مشيته، ولا في وجهه، ولا في كلامه، شيئًا من اللص.",
        "اختفت سمّاعتا يزن في رحلة المدرسة. آخر مرة رآهما كانتا على المقعد بجانب ماجد.",
        "في طريق العودة صار يراقب ماجدًا. ماجد ينظر من النافذة كثيرًا: يتهرب. ماجد يضحك مع سامر: يضحكان عليه. ماجد يضع يده في جيب سترته: هناك هما.",
        "فتح يزن الهاتف، وكتب لماجد رسالة طويلة، كل جملة فيها أحدّ من التي قبلها. وإصبعه على زر الإرسال، سمع في رأسه صوت أمه حين يغضب: «يا يزن، لماذا أنت غاضب هكذا؟». وكانت تكلّمه دائمًا باسمه، كأنها تكلّم شخصًا آخر.",
        "فقال لنفسه بالطريقة نفسها: يا يزن، ماذا رأيت بعينك؟ وماذا ظننت؟ ولم يجد شيئًا رآه بعينه.",
        "ترك الرسالة في المسودات. وفي البيت، وهو يعلّق السترة، سقط شيء ثقيل من البطانة: السمّاعتان، نزلتا من ثقب صغير في الجيب.",
        "في الصباح سلّم عليه ماجد عند البوابة. نظر إليه يزن طويلًا: ولد عادي، بمشية عادية، يتثاءب. ثم فتح المسودات، ومسح الرسالة كلمة كلمة."],
      en: ["The Chinese book Liezi tells of a man who lost his axe and suspected his neighbour's son of stealing it.",
        "He began watching the boy. His walk was a thief's walk. His face was a thief's face. His speech was a thief's speech. Everything he did, and everything he didn't do, said: I took the axe.",
        "Then the man went to dig in the valley, and found his axe there, where he had left it.",
        "The next day he saw his neighbour's son. He could find nothing of a thief in his walk, his face or his speech.",
        "Yazan's earbuds went missing on the school trip. The last time he saw them they were on the seat next to Majid.",
        "On the way back he started watching Majid. Majid kept looking out of the window: avoiding him. Majid was laughing with Samer: laughing at him. Majid put his hand in his jacket pocket: that's where they are.",
        "Yazan opened his phone and wrote Majid a long message, each sentence sharper than the last. With his finger on send, he heard his mother's voice in his head, the way she spoke when he got angry: “Yazan, why are you so angry?” She always spoke to him by name, as if to someone else.",
        "So he spoke to himself the same way: Yazan, what did you see with your own eyes? And what did you guess? He could find nothing he had seen with his own eyes.",
        "He left the message in drafts. At home, as he hung up his jacket, something heavy fell out of the lining: the earbuds, slipped through a little hole in the pocket.",
        "In the morning Majid said hello at the gate. Yazan looked at him for a long time: an ordinary boy with an ordinary walk, yawning. Then he opened his drafts and deleted the message word by word."]
    },
    ask: { ar: "متى رأيتَ «لصًّا» في كل حركة لأنك ظننت شيئًا قبل أن تعرفه؟", ar_f: "متى رأيتِ «لصًّا» في كل حركة لأنكِ ظننتِ شيئًا قبل أن تعرفيه؟", en: "When did you see a “thief” in every move because you had guessed before you knew?" },
    source: { ar: "حكاية «الشك في ابن الجار» من كتاب «ليه زي» الصيني (فصل «شرح الأقوال»)، وفي «ربيع وخريف السيد لو» مثلها، أعدناها بكلماتنا في قصة مؤلفة أبطالها خياليون.", en: "The tale of suspecting the neighbour's son, from the Chinese book Liezi (chapter “Explaining Conjunctions”; the Lüshi Chunqiu has the same tale), retold in our own words inside an original story with fictional characters." } });
  Q("monkey", [
    { id: "monkey-q22", readingId: "monkey-r13", correct: 1,
      q: { ar: "لماذا لم تتوقف القِدر حين أمرتها الأم؟", en: "Why didn't the pot stop when the mother told it to?" },
      options: O([["لأن القِدر كانت مكسورة", "Because the pot was broken"], ["لأن الأم نسيت كلمة «قفي»", "Because the mother forgot the word “stop”"], ["لأن البنت أخذت القِدر معها", "Because the girl had taken the pot with her"]]),
      why: { ar: "قالت كلمات كثيرة، إلا الكلمة الصحيحة.", en: "She said lots of words, but not the right one." } },
    { id: "monkey-q23", readingId: "monkey-r13", correct: 0,
      q: { ar: "إلى أين وصلت العصيدة؟", en: "How far did the porridge get?" },
      options: O([["إلى الشارع والبيت المجاور", "Into the street and the house next door"], ["إلى الطاولة فقط", "Only onto the table"], ["إلى غرفة البنت", "Into the girl's room"]]),
      why: { ar: "ما لا يتوقف في وقته يكبر حتى يملأ الشارع.", en: "What doesn't stop in time grows until it fills the street." } },
    { id: "monkey-q24", readingId: "monkey-r14", correct: 2,
      q: { ar: "بماذا كان التلميذ الثاني يفكر في الدرس؟", en: "What was the second pupil thinking about in the lesson?" },
      options: O([["في أن المعلم لا يشرح جيدًا", "That the master explained badly"], ["في المباراة القادمة", "The next game"], ["في بجعة يرميها بقوسه", "A swan he could shoot with his bow"]]),
      why: { ar: "جسده في الدرس، وقلبه مع البجعة.", en: "His body was in the lesson, and his heart with the swan." } },
    { id: "monkey-q25", readingId: "monkey-r14", correct: 1,
      q: { ar: "لماذا كتبت هند كلمة «بجعة» على دفترها؟", en: "Why did Hind write “Swan” on her notebook?" },
      options: O([["لأنها تحب رسم الطيور", "Because she likes drawing birds"], ["لتتذكر أين قلبها كلما رأتها", "To remember where her heart was whenever she saw it"], ["لأن المعلمة طلبت ذلك", "Because the teacher asked her to"]]),
      why: { ar: "كلمة صغيرة تعيدها إلى الدرس حين يشرد قلبها.", en: "A small word to bring her back to the lesson when her heart wandered." } },
    { id: "monkey-q26", readingId: "monkey-r15", correct: 0,
      q: { ar: "ماذا تغيّر في ابن الجار بعد أن وجد الرجل فأسه؟", en: "What changed in the neighbour's son after the man found his axe?" },
      options: O([["لا شيء فيه؛ تغيّرت نظرة الرجل", "Nothing in him; the man's way of seeing changed"], ["صار يمشي مشية أخرى", "He started walking differently"], ["اعتذر للرجل", "He apologised to the man"]]),
      why: { ar: "الفتى لم يأخذ الفأس. كان الظن في رأس الرجل، فصار يراه في كل حركة.", en: "The boy never took the axe. The suspicion was in the man’s head, so he saw it in every move." } },
    { id: "monkey-q27", readingId: "monkey-r15", correct: 2,
      q: { ar: "ما الذي أوقف يزن قبل أن يرسل الرسالة؟", en: "What stopped Yazan before he sent the message?" },
      options: O([["رأى السمّاعتين مع ماجد", "He saw the earbuds with Majid"], ["نفدت بطارية هاتفه", "His phone battery died"], ["كلّم نفسه باسمه: ماذا رأيت بعينك؟", "He spoke to himself by name: what did you see with your own eyes?"]]),
      why: { ar: "حين كلّم نفسه من مسافة، رأى أنه لم يرَ شيئًا، وإنما ظنّ.", en: "When he spoke to himself from a distance, he saw that he had seen nothing, only guessed." } }
  ]);

  /* ── السبابة ── */
  R("human", { id: "human-r13", minutes: 2, ages: "4-8", world: "wisdom",
    title: { ar: "اليد على الكتف", en: "A hand on the shoulder" },
    origin: { ar: "من دروس مونتيسوري في الأدب", en: "From Montessori courtesy lessons" },
    body: {
      ar: ["رسمت ليان طائرًا أزرق كبيرًا، وركضت لتريه أمها.",
        "كانت أمها تتكلم في الهاتف.",
        "أرادت ليان أن تصيح: «ماما! ماما! انظري!».",
        "ثم تذكّرت درس الأمس في الروضة. المعلمة مثّلت أمامهم: حين يتكلم أحد، لا نصيح. نضع يدنا على كتفه بهدوء، وننتظر.",
        "فوضعت ليان يدها الصغيرة على كتف أمها، ووقفت ساكتة.",
        "عدّت في نفسها: واحد، اثنان، ثلاثة...",
        "نظرت أمها إليها، ووضعت يدها على يد ليان، كأنها تقول: «رأيتك».",
        "وبعد قليل قالت في الهاتف: «لحظة من فضلك»، ونظرت إلى ليان: «نعم يا حبيبتي؟».",
        "رفعت ليان الرسم: «طائر أزرق!».",
        "قالت أمها: «ما أجمله! وما أجمل اليد التي على كتفي!»."],
      en: ["Layan drew a big blue bird and ran to show her mother.",
        "Her mother was on the phone.",
        "Layan wanted to shout, “Mummy! Mummy! Look!”",
        "Then she remembered yesterday's lesson at nursery. The teacher had acted it out for them: when someone is talking, we don't shout. We put our hand gently on their shoulder, and wait.",
        "So Layan put her little hand on her mother's shoulder and stood quietly.",
        "She counted in her head: one, two, three...",
        "Her mother looked at her and put her hand over Layan's, as if to say, “I see you.”",
        "A moment later she said into the phone, “Just a moment, please,” and looked at Layan. “Yes, darling?”",
        "Layan held up the drawing. “A blue bird!”",
        "“How lovely!” said her mother. “And how lovely the hand on my shoulder is!”"]
    },
    ask: { ar: "لنتدرّب الآن: أنا أتكلم، وأنت تضع يدك على كتفي وتنتظر.", ar_f: "لنتدرّب الآن: أنا أتكلم، وأنتِ تضعين يدك على كتفي وتنتظرين.", en: "Let's practise now: I'll talk, and you put your hand on my shoulder and wait." },
    source: { ar: "قصة مؤلفة أبطالها خياليون، على طريقة دروس «الأدب واللطف» (Grace and Courtesy) في مدارس مونتيسوري، حيث يمثّل المعلم الموقف ثم يتدرّب عليه الأطفال.", en: "An original story with fictional characters, after the Grace and Courtesy lessons of Montessori schools, where the teacher acts out a situation and the children practise it." } });
  R("human", { id: "human-r14", minutes: 3, ages: "9-14",
    title: { ar: "الأولاد والضفادع", en: "The boys and the frogs" },
    origin: { ar: "من حكايات إيسوب", en: "From Aesop's fables" },
    body: {
      ar: ["في حكاية لإيسوب، كان أولاد يلعبون عند بركة، فرأوا الضفادع تطلّ برؤوسها من الماء. فأخذوا يرمونها بالحصى، ويضحكون كلما أصاب حجر واحدة منها.",
        "فرفع ضفدع كبير رأسه، وقال: «يا أولاد، ما هو لعب عندكم، هو موت عندنا».",
        "قرأ فارس الحكاية في كتاب القراءة، وقلب الصفحة بسرعة. ضفادع؟ هذه للصغار.",
        "وفي المساء كانت مجموعة الصف مشغولة بصورة لزميلهم عمر: صورة من حصة الرياضة، وهو يقع على وجهه في سباق الجري. أحدهم كتب عليها كلمة، والثاني رسم عليها أذنين كبيرتين، والثالث جعلها ملصقًا.",
        "كان الجميع يضحك. وأرسل فارس وجهًا ضاحكًا، ثم آخر. لم يكن يقصد شيئًا. كان لعبًا.",
        "ثم لاحظ أن عمر في المجموعة، وأن رسائله تظهر: «قُرئت». قُرئت كلها. ولم يكتب عمر شيئًا.",
        "وفي الغد جلس عمر وحده في الفسحة، وغطاء سترته على رأسه، مع أن الشمس كانت دافئة.",
        "تذكّر فارس الضفدع الكبير. قال في نفسه: ما هو لعب عندنا...",
        "وفي المساء، حين أرسل أحدهم الملصق مرة أخرى، كتب فارس: «خلاص يا شباب. عمر معنا هنا»، ومسح وجهيه الضاحكين من الأمس. وأرسل لعمر رسالة خاصة: «سباق الغد؟ أنا أعرف تمرينًا للانطلاق»."],
      en: ["In one of Aesop's fables, some boys were playing by a pond when they saw the frogs poking their heads out of the water. They began throwing stones at them, laughing every time a stone hit one.",
        "A big frog raised his head and said: “Boys, what is play to you is death to us.”",
        "Faris read the fable in his reading book and turned the page quickly. Frogs? That's for little kids.",
        "That evening the class group chat was busy with a photo of their classmate Omar: a picture from PE of him falling flat on his face in a running race. Someone wrote a word on it, a second drew big ears on it, a third turned it into a sticker.",
        "Everyone was laughing. Faris sent a laughing face, then another. He didn't mean anything by it. It was just a joke.",
        "Then he noticed that Omar was in the group, and that the messages showed “seen”. All of them, seen. And Omar wrote nothing.",
        "The next day Omar sat alone at break with his hood up, though the sun was warm.",
        "Faris remembered the big frog. What is play to us... he thought.",
        "That evening, when someone posted the sticker again, Faris wrote: “Enough, guys. Omar's in here with us,” and deleted his two laughing faces from the day before. Then he sent Omar a private message: “Race tomorrow? I know a good drill for the start.”"]
    },
    ask: { ar: "ما النكتة التي يضحك لها الجميع، ويسكت لها واحد؟", ar_f: "ما النكتة التي يضحك لها الجميع، ويسكت لها واحد؟", en: "What joke makes everyone laugh, except one person who goes quiet?" },
    source: { ar: "حكاية «الأولاد والضفادع» من حكايات إيسوب اليونانية، أعدناها بكلماتنا في قصة مؤلفة أبطالها خياليون.", en: "“The Boys and the Frogs” from Aesop's Greek fables, retold in our own words inside an original story with fictional characters." } });
  R("human", { id: "human-r15", minutes: 3, ages: "15+",
    title: { ar: "الخروف الضائع والحظيرة", en: "The lost sheep and the pen" },
    origin: { ar: "حكاية صينية", en: "A Chinese tale" },
    body: {
      ar: ["في كتاب «مكائد الممالك المتحاربة» الصيني خبر مستشار اسمه تشوانغ شين، قال لملك تشو: «يا مولاي، أنت تقضي أيامك في اللهو مع أربعة من المتملّقين، وتنفق مال الدولة على اللذة، والأعداء يراقبون حدودك. إن بقيت هكذا ضاعت عاصمتك».",
        "غضب الملك وقال: «أخرفتَ يا تشوانغ شين؟ أم جئت تتشاءم على بلاد تشو؟». قال المستشار: «أقول ما أرى. وإن لم تسمعني، فأذن لي أن أذهب». وذهب إلى مملكة أخرى.",
        "وبعد خمسة أشهر دخل جيش تشين بلاد تشو، وأخذ مدنها واحدة بعد أخرى، وهرب الملك من عاصمته، ونزل في مدينة صغيرة على الحدود.",
        "هناك، في الغرفة الضيقة، تذكّر الملك كلمات تشوانغ شين كلها، كلمة كلمة. وكان أمامه طريقان: أن يقول «لم يكن ممكنًا أن أعرف»، أو أن يعترف.",
        "فأرسل رسولًا إلى المستشار، وطلب منه أن يرجع، وقال له حين رجع: «لم أسمع كلامك، فوصلتُ إلى هنا. فماذا أفعل الآن؟».",
        "قال تشوانغ شين: «يقول الناس: إذا رأيت الأرنب ثم التفتّ إلى كلب الصيد، لم يفت الوقت. وإذا ضاع خروف ثم أصلحت الحظيرة، لم تتأخر».",
        "ثم جلسا يخططان. ويذكر المؤرخ الصيني سيما تشيان أن ملك تشو جمع بعد ذلك جيشًا من مدن الشرق، واستردّ مدنًا مما أخذه جيش تشين.",
        "ومن هذا الخبر صار المثل الصيني «إصلاح الحظيرة بعد ضياع الخروف» يقال لمن أخطأ، ثم بدأ الإصلاح بدل أن يبكي على ما فات."],
      en: ["The Chinese book Strategies of the Warring States tells of an adviser called Zhuang Xin who said to the king of Chu: “My lord, you spend your days amusing yourself with four flatterers and pour the state's money into pleasure, while enemies watch your borders. Carry on like this and you will lose your capital.”",
        "The king was angry. “Are you going senile, Zhuang Xin? Or have you come to croak ill omens over Chu?” The adviser said: “I say what I see. If you won't listen, let me go.” And he went to another kingdom.",
        "Five months later the army of Qin entered Chu and took its cities one after another. The king fled his capital and took refuge in a small town on the border.",
        "There, in a cramped room, the king remembered every word Zhuang Xin had said. Two roads lay before him: to say “I couldn't have known”, or to admit it.",
        "He sent a messenger to the adviser asking him to come back, and when he came, said: “I didn't listen to you, and I've ended up here. What do I do now?”",
        "Zhuang Xin said: “People say: if you see the hare and then turn to your hunting dog, it is not too late. If a sheep is lost and then you mend the pen, you are not too late.”",
        "Then they sat down to plan. The Chinese historian Sima Qian records that the king of Chu later raised an army from his eastern cities and won back some of the towns Qin had taken.",
        "From this story the Chinese saying “mending the pen after the sheep is lost” came to be said of someone who made a mistake and then started repairing it instead of weeping over what had passed."]
    },
    ask: { ar: "ما «الحظيرة» التي تستطيع أن تصلحها اليوم، بعد خطأ مضى؟", ar_f: "ما «الحظيرة» التي تستطيعين أن تصلحيها اليوم، بعد خطأ مضى؟", en: "What “pen” could you mend today, after a mistake that's already happened?" },
    source: { ar: "من خبر تشوانغ شين وملك تشو في كتاب «مكائد الممالك المتحاربة» الصيني (جُمع في القرن الأول قبل الميلاد)، أعدناه بكلماتنا.", en: "From the account of Zhuang Xin and the king of Chu in the Chinese Strategies of the Warring States (compiled in the 1st century BCE), retold in our own words." } });
  Q("human", [
    { id: "human-q21", readingId: "human-r13", correct: 2,
      q: { ar: "ماذا فعلت ليان بدل أن تصيح؟", en: "What did Layan do instead of shouting?" },
      options: O([["شدّت أمها من ثوبها", "Pulled at her mother's clothes"], ["أخذت الهاتف من أمها", "Took the phone from her mother"], ["وضعت يدها على كتف أمها وانتظرت", "Put her hand on her mother's shoulder and waited"]]),
      why: { ar: "تذكّرت ما تدرّبت عليه في الروضة، ففعلته.", en: "She remembered what she had practised at nursery, and did it." } },
    { id: "human-q22", readingId: "human-r13", correct: 0,
      q: { ar: "كيف عرفت ليان أن أمها رأتها؟", en: "How did Layan know her mother had seen her?" },
      options: O([["وضعت أمها يدها على يدها", "Her mother put her hand over hers"], ["صاحت أمها باسمها", "Her mother shouted her name"], ["أغلقت أمها الهاتف فورًا", "Her mother hung up at once"]]),
      why: { ar: "يد على يد: «رأيتك، وسأكون معك بعد لحظة».", en: "A hand on a hand: “I see you, and I'll be with you in a moment.”" } },
    { id: "human-q23", readingId: "human-r14", correct: 1,
      q: { ar: "ماذا قال الضفدع الكبير للأولاد؟", en: "What did the big frog say to the boys?" },
      options: O([["إن البركة ملك الضفادع", "That the pond belonged to the frogs"], ["إن ما هو لعب عندهم موت عند الضفادع", "That what was play to them was death to the frogs"], ["إنه سيشكوهم إلى آبائهم", "That he would tell their parents"]]),
      why: { ar: "اللعبة نفسها لها وجهان: وجه من يرمي، ووجه من يُرمى.", en: "The same game has two faces: the thrower's and the one being hit." } },
    { id: "human-q24", readingId: "human-r14", correct: 2,
      q: { ar: "ما الذي جعل فارس ينتبه إلى أن «اللعب» يؤذي؟", en: "What made Faris notice that the “joke” was hurting?" },
      options: O([["عاقبه المعلم", "The teacher punished him"], ["خرج عمر من المجموعة", "Omar left the group"], ["رأى الرسائل «قُرئت» وعمر ساكت، ثم رآه وحده في الفسحة", "He saw the messages “seen” and Omar silent, then saw him alone at break"]]),
      why: { ar: "صمت عمر كان صوته، كما كان صوت الضفدع.", en: "Omar's silence was his voice, as the frog's words were his." } },
    { id: "human-q25", readingId: "human-r15", correct: 0,
      q: { ar: "ماذا فعل الملك حين تذكّر كلام مستشاره في المدينة الصغيرة؟", en: "What did the king do when he remembered his adviser's words in the small town?" },
      options: O([["اعترف، وأرسل يطلب رجوعه", "Admitted it, and sent asking him to come back"], ["قال: لم يكن ممكنًا أن أعرف", "Said: I couldn't have known"], ["أرسل جيشًا يعاقب المستشار", "Sent an army to punish the adviser"]]),
      why: { ar: "اختار الطريق الأصعب: أن يقول «لم أسمع كلامك».", en: "He chose the harder road: to say “I didn't listen to you.”" } },
    { id: "human-q26", readingId: "human-r15", correct: 1,
      q: { ar: "ما معنى «إصلاح الحظيرة بعد ضياع الخروف» في الخبر؟", en: "What does “mending the pen after the sheep is lost” mean in the story?" },
      options: O([["أن الإصلاح بعد الخطأ لا فائدة منه", "That repair after a mistake is useless"], ["أن من أخطأ ثم بدأ الإصلاح لم يتأخر", "That someone who erred and then starts repairing is not too late"], ["أن الخروف الضائع يرجع وحده", "That a lost sheep comes back by itself"]]),
      why: { ar: "ما ضاع لا يرجع، والحظيرة المصلحة تحفظ ما بقي.", en: "What was lost does not return; a mended pen keeps what remains." } }
  ]);

  /* ── الإبهام ── */
  R("sabiq", { id: "sabiq-r13", minutes: 2, ages: "4-8",
    title: { ar: "حزمة العصيّ", en: "The bundle of sticks" },
    origin: { ar: "من حكايات إيسوب", en: "From Aesop's fables" },
    body: {
      ar: ["كان لرجل أولاد كثيرون، يتشاجرون كل يوم.",
        "«هذه لعبتي!». «لا، لي!». «أنت بدأت!». «لا، أنت!».",
        "نادى الأب أولاده، وأعطى كل واحد عصا رفيعة: «اكسرها».",
        "طَق! كسر كل واحد عصاه بسهولة.",
        "ثم جمع الأب عصيًّا كثيرة، وربطها بحبل في حزمة واحدة: «والآن، اكسروا هذه».",
        "شدّ الكبير بكل قوته. لم تنكسر.",
        "شدّ الأوسط، ووضعها على ركبته. لم تنكسر.",
        "حاول الصغير، فضحك الجميع، لأنه لم يستطع حتى أن يحملها!",
        "قال الأب: «العصا وحدها تنكسر. والعصيّ معًا لا تنكسر».",
        "نظر الإخوة بعضهم إلى بعض. ثم حمل الكبير والأوسط والصغير الحزمة معًا، ووضعوها حطبًا بجانب المدفأة."],
      en: ["A man had many children, and they quarrelled every day.",
        "“That's my toy!” “No, it's mine!” “You started it!” “No, you did!”",
        "The father called his children and gave each of them a thin stick. “Break it.”",
        "Snap! Each one broke his stick easily.",
        "Then the father gathered many sticks and tied them with a rope into one bundle. “Now break this.”",
        "The eldest pulled with all his strength. It didn't break.",
        "The middle one pulled and put it over his knee. It didn't break.",
        "The youngest tried, and everyone laughed, because he couldn't even lift it!",
        "The father said, “One stick on its own breaks. Sticks together don't.”",
        "The brothers looked at each other. Then the eldest, the middle one and the youngest carried the bundle together and stacked it as firewood by the stove."]
    },
    ask: { ar: "ما الشيء الذي نستطيع أن نفعله معًا في البيت ولا يستطيعه واحد وحده؟", en: "What can we do together at home that one of us couldn't do alone?" },
    source: { ar: "من حكايات إيسوب اليونانية («الأب وأبناؤه»)، أعدنا حكايتها بكلماتنا.", en: "From Aesop's Greek fables (“The Father and his Sons”), retold in our own words." } });
  R("sabiq", { id: "sabiq-r14", minutes: 4, ages: "9-14",
    title: { ar: "الأصدقاء الأربعة", en: "The four friends" },
    origin: { ar: "من «كليلة ودمنة»", en: "From Kalila and Dimna" },
    body: {
      ar: ["كان غراب على شجرة يوم وقعت الحمامة المطوّقة وصاحباتها في الشبكة، ورأى الجرذ زيرك يقرض الخيوط ويحرر الحمام كله. فقال في نفسه: صديق مثل هذا لا يُترك. ونزل إلى جحر الجرذ، وطلب صداقته.",
        "تردد زيرك أولًا: الغراب يأكل الجرذان. ثم رأى صدقه، فصارا صديقين. وكان للجرذ صديقة سلحفاة تسكن عند عين ماء، فصاروا ثلاثة. ثم جاءهم ظبي هارب من الصيادين، فصاروا أربعة.",
        "وفي يوم تأخر الظبي عن موعدهم. فطار الغراب يبحث، فوجده عالقًا في شبكة صياد. رجع يصيح: «زيرك! أنت وحدك تقدر على هذا!». فجرى الجرذ، وبدأ يقرض الحبال.",
        "وجاءت السلحفاة تمشي على مهل. قال لها الظبي: «لماذا جئتِ؟ إن جاء الصياد ركضتُ أنا، ودخل زيرك جحرًا، وطار الغراب، وأنتِ بطيئة». قالت: «لا عيش لي بعيدًا عن أحبتي».",
        "وما أكمل زيرك آخر حبل حتى ظهر الصياد. فركض الظبي، وطار الغراب، واختبأ الجرذ. وبقيت السلحفاة تدبّ على الأرض، فأخذها الصياد وربطها في حبله.",
        "اجتمع الثلاثة حزانى. قال الغراب والظبي: «كلامنا لا يفك عنها حبلًا. ماذا نفعل؟». فقال زيرك: «عندي خطة. أيها الظبي، اسقط أمام الصياد كأنك جريح. وأنت أيها الغراب، قف عليه كأنك تأكل منه. فإذا رآكما الصياد ترك ما معه، وجرى إليك. فابتعد عنه قليلًا قليلًا، ودعه يطمع فيك، وأنا أقرض الحبل».",
        "سقط الظبي يعرج، ووقف عليه الغراب. فرمى الصياد ما معه، وجرى نحوه. وكلما اقترب ابتعد الظبي خطوة، حتى سحبه بعيدًا.",
        "وفي تلك الدقائق قرض زيرك الحبل حول السلحفاة. ولما رجع الصياد لاهثًا وجد الحبل مقطوعًا، والسلحفاة لا أثر لها.",
        "وعند عين الماء، في المساء، كان الأربعة جالسين معًا. وكانت السلحفاة أبطأهم، وصديقة الجميع."],
      en: ["A crow was sitting in a tree on the day the Ringdove and her companions were caught in the net, and he saw the rat Zirak gnaw the threads and free every dove. A friend like that is not to be missed, he thought. So he flew down to the rat's hole and asked for his friendship.",
        "At first Zirak hesitated: crows eat rats. Then he saw the crow was sincere, and they became friends. The rat had a friend, a tortoise who lived by a spring, so they became three. Then a gazelle came to them fleeing from hunters, and they became four.",
        "One day the gazelle was late for their meeting. The crow flew off to look and found him caught in a hunter's net. He came back shouting: “Zirak! Only you can do this!” The rat ran and began gnawing the ropes.",
        "The tortoise came too, walking slowly. The gazelle said to her: “Why did you come? If the hunter comes, I'll run, Zirak will go into a hole, the crow will fly, and you are slow.” She said: “There's no life for me far from the ones I love.”",
        "Zirak had hardly finished the last rope when the hunter appeared. The gazelle ran, the crow flew, the rat hid. Only the tortoise was left plodding on the ground, so the hunter took her and tied her with his rope.",
        "The three gathered, grieving. The crow and the gazelle said: “Our words won't untie a single rope for her. What do we do?” Zirak said: “I have a plan. Gazelle, fall down in front of the hunter as if you're wounded. Crow, stand on him as if you're eating him. When the hunter sees you, he'll drop what he's carrying and run at you. Move away from him little by little, and keep him hoping, while I gnaw the rope.”",
        "The gazelle fell, limping, and the crow stood on him. The hunter threw down what he carried and ran towards him. Every time he got close, the gazelle moved one step away, until he had drawn him far off.",
        "In those minutes Zirak gnawed through the rope around the tortoise. When the hunter came back, panting, he found the rope cut and no sign of the tortoise.",
        "That evening, by the spring, the four sat together. The tortoise was the slowest of them, and everyone's friend."]
    },
    ask: { ar: "من «السلحفاة» في جماعتك: الأبطأ، الذي يحتاج خطة الجميع؟", ar_f: "من «السلحفاة» في جماعتكِ: الأبطأ، الذي يحتاج خطة الجميع؟", en: "Who is the “tortoise” in your group: the slowest one, who needs everyone's plan?" },
    source: { ar: "من تتمة باب «الحمامة المطوّقة» في «كليلة ودمنة» لابن المقفّع: الغراب والجرذ والسلحفاة والظبي، أعدنا حكايتها بكلماتنا واختصرناها.", en: "From the second half of the Ringdove chapter in Ibn al-Muqaffa's Kalila and Dimna: the crow, the rat, the tortoise and the gazelle, retold and shortened in our own words." } });
  R("sabiq", { id: "sabiq-r15", minutes: 4, ages: "15+",
    title: { ar: "دامون وفينتياس", en: "Damon and Phintias" },
    origin: { ar: "حكاية يونانية", en: "A Greek tale" },
    body: {
      ar: ["في سيراكوزة، في جزيرة صقلية، حكم طاغية اسمه ديونيسيوس، لا يثق بأحد، ولا يثق به أحد. وحكم على شاب اسمه فينتياس بالموت.",
        "قال فينتياس: «لي أهل وأمور لم أرتّبها. أعطني أيامًا أذهب فيها وأرجع، ثم افعل ما تشاء».",
        "ضحك الطاغية: «ومن يضمن أنك سترجع؟».",
        "فتقدّم صديقه دامون، وقال: «أنا. أبقى في السجن مكانه. فإن لم يرجع في الموعد، متّ أنا بدلًا منه».",
        "دُهش الطاغية. لم يرَ في حياته أحدًا يضع رأسه مكان رأس غيره. وقبل، وهو ينتظر أن يرى دامون يندم.",
        "مرّت الأيام. وكان الناس في السوق يقولون: «مسكين دامون، صدّق صديقه». وكان الحراس يبتسمون له ابتسامة شفقة. وكان دامون يجيب كل يوم بالجملة نفسها: «سيرجع».",
        "وجاء اليوم الأخير، ولم يرجع فينتياس. وأُخرج دامون إلى ساحة الإعدام، والناس حوله صامتون.",
        "وفي آخر الساعة ظهر غبار على الطريق، ورجل يجري، ثيابه ممزقة، يلهث ويصيح: «أنا هنا! أنا هنا!». كان فينتياس. أخّرته عاصفة في البحر، ثم مشى وجرى ليلًا ونهارًا حتى وصل.",
        "وقف الطاغية ينظر إلى الصديقين، ثم قال شيئًا لم يقله أحد قبله: «اذهبا كلاكما حرّين. وأريد منكما شيئًا واحدًا: أن تقبلاني صديقًا ثالثًا»."],
      en: ["In Syracuse, on the island of Sicily, ruled a tyrant called Dionysius, who trusted no one and whom no one trusted. He sentenced a young man called Phintias to death.",
        "Phintias said: “I have family and affairs I haven't settled. Give me some days to go and come back, then do as you wish.”",
        "The tyrant laughed. “And who will guarantee that you come back?”",
        "His friend Damon stepped forward and said: “I will. I'll stay in prison in his place. If he isn't back on time, I'll die instead of him.”",
        "The tyrant was astonished. He had never in his life seen anyone put his own head in place of another's. He agreed, waiting to watch Damon regret it.",
        "The days passed. In the market people said: “Poor Damon, he believed his friend.” The guards gave him pitying smiles. And every day Damon gave the same answer: “He'll come back.”",
        "The last day came, and Phintias had not returned. Damon was led out to the place of execution, the crowd silent around him.",
        "In the final hour dust rose on the road, and a man came running, his clothes torn, panting and shouting: “I'm here! I'm here!” It was Phintias. A storm at sea had held him back, and he had walked and run night and day to arrive.",
        "The tyrant stood looking at the two friends, then said something no one had heard from him before: “Go, both of you, free. I ask only one thing of you: take me as your third friend.”"]
    },
    ask: { ar: "لمن تضع اسمك ضامنًا: من الذي تقول عنه «سيرجع»؟", ar_f: "لمن تضعين اسمكِ ضامنة: من الذي تقولين عنه «سيرجع»؟", en: "Who would you stand guarantee for: who would you say “he'll come back” about?" },
    source: { ar: "خبر «دامون وفينتياس» كما رواه شيشرون في «الواجبات» (القرن الأول قبل الميلاد) وفاليريوس مكسيموس، وزدنا في تفاصيل الطريق.", en: "The story of Damon and Phintias as told by Cicero in On Duties (1st century BCE) and by Valerius Maximus, with details of the journey added by us." } });
  Q("sabiq", [
    { id: "sabiq-q23", readingId: "sabiq-r13", correct: 1,
      q: { ar: "لماذا لم تنكسر الحزمة؟", en: "Why didn't the bundle break?" },
      options: O([["لأن العصيّ كانت من حديد", "Because the sticks were iron"], ["لأن العصيّ كانت مربوطة معًا", "Because the sticks were tied together"], ["لأن الأولاد لم يحاولوا", "Because the children didn't try"]]),
      why: { ar: "كل عصا وحدها رفيعة، ومعًا صارت قوية.", en: "Each stick alone was thin; together they were strong." } },
    { id: "sabiq-q24", readingId: "sabiq-r13", correct: 2,
      q: { ar: "ماذا فعل الإخوة في آخر الحكاية؟", en: "What did the brothers do at the end of the story?" },
      options: O([["تشاجروا على الحزمة", "Fought over the bundle"], ["رموا الحزمة في الحديقة", "Threw the bundle into the garden"], ["حملوها معًا إلى المدفأة", "Carried it together to the fire"]]),
      why: { ar: "ما لم يستطعه واحد، حمله الثلاثة معًا.", en: "What none could manage alone, the three carried together." } },
    { id: "sabiq-q25", readingId: "sabiq-r14", correct: 0,
      q: { ar: "لماذا جاءت السلحفاة وهي تعرف أنها بطيئة؟", en: "Why did the tortoise come, knowing she was slow?" },
      options: O([["لأنها لا تريد أن تبقى بعيدًا عن أحبتها", "Because she would not stay far from those she loved"], ["لأنها ظنت أن الصياد لن يأتي", "Because she thought the hunter wouldn't come"], ["لأن الغراب طلب منها أن تأتي", "Because the crow asked her to"]]),
      why: { ar: "سبقها قلبها إلى صديقها قبل أن تسبقه رجلاها.", en: "Her heart raced to her friend ahead of her feet." } },
    { id: "sabiq-q26", readingId: "sabiq-r14", correct: 2,
      q: { ar: "ما خطة زيرك لإنقاذ السلحفاة؟", en: "What was Zirak's plan to save the tortoise?" },
      options: O([["أن يعضّ الصياد في قدمه", "To bite the hunter's foot"], ["أن يطلب العون من الحمام", "To ask the doves for help"], ["أن يُبعد الظبي والغراب الصياد، ويقرض هو الحبل", "For the gazelle and the crow to draw the hunter away while he gnawed the rope"]]),
      why: { ar: "لكل صديق دور بما يقدر عليه، والخطة جمعتهم.", en: "Each friend had a part he could play, and the plan joined them." } },
    { id: "sabiq-q27", readingId: "sabiq-r15", correct: 1,
      q: { ar: "ماذا عرض دامون على الطاغية؟", en: "What did Damon offer the tyrant?" },
      options: O([["أن يدفع مالًا بدل صديقه", "To pay money instead of his friend"], ["أن يبقى في السجن مكانه، ويموت إن لم يرجع", "To stay in prison in his place, and die if he didn't return"], ["أن يذهب مع صديقه ويرجعا معًا", "To go with his friend and come back together"]]),
      why: { ar: "سبق إلى الخير قبل أن يطلبه أحد، ووضع نفسه مكان صديقه.", en: "He moved to do good before anyone asked, and put himself in his friend's place." } },
    { id: "sabiq-q28", readingId: "sabiq-r15", correct: 0,
      q: { ar: "ماذا طلب الطاغية في آخر الحكاية؟", en: "What did the tyrant ask for at the end?" },
      options: O([["أن يكون صديقًا ثالثًا لهما", "To be their third friend"], ["أن يرجع فينتياس إلى السجن", "That Phintias go back to prison"], ["أن يخدمه دامون في قصره", "That Damon serve him in his palace"]]),
      why: { ar: "رأى الوفاء الذي لم يعرفه، فأراد أن يكون منه.", en: "He saw a loyalty he had never known, and wanted to be part of it." } }
  ]);

  /* ── «ماذا تفعل لو كنت في القصة؟»: موقفان من محاور PSHE ── */
  C.choices.push(
    { id: "ch-human-2", stage: "human", trait: 0, age: "15+",
      title: { ar: "العطسة في الصورة", en: "The sneeze in the photo" },
      intro: {
        ar: ["في رحلة الصف إلى البحر التقطت ميار صورة لصديقتها دانة في اللحظة الخطأ تمامًا: عيناها مغمضتان، وفمها مفتوح في عطسة كبيرة، وشعرها كله على وجهها بسبب الريح.",
          "ضحكت ميار حتى دمعت عيناها. وفي الحافلة رأت لانا الصورة من فوق كتفها، وصاحت: «أرسليها للمجموعة! ستكون أضحك صورة في الرحلة!».",
          "دانة جالسة في المقعد الأمامي، تسمع أغنية بسمّاعتيها، ولا تعرف شيئًا."],
        en: ["On the class trip to the beach Mayar took a photo of her friend Dana at exactly the wrong moment: eyes shut, mouth open in a huge sneeze, and all her hair blown across her face.",
          "Mayar laughed until her eyes watered. On the bus Lana saw the photo over her shoulder and cried: “Send it to the group! It'll be the funniest photo of the trip!”",
          "Dana was sitting in the front seat listening to a song on her earbuds, knowing nothing."] },
      q: { ar: "لو كنتَ مكان ميار، ماذا تفعل؟", ar_f: "لو كنتِ مكان ميار، ماذا تفعلين؟", en: "If you were Mayar, what would you do?" },
      opts: [
        { t: { ar: "أرسلها للمجموعة. صديقتي، وستضحك معنا.", en: "Send it to the group. She's my friend; she'll laugh with us." }, weak: true,
          out: { ar: "وصلت الصورة إلى ثلاثين هاتفًا في دقيقة، ثم إلى مجموعة أخرى لا تعرفها ميار. ورأتها دانة في المساء ملصقًا عند ابن خالتها. لم تضحك. كتبت لميار: «كان يمكن أن تسأليني»، ولم تجلس معها في الفسحة أسبوعًا.", en: "The photo reached thirty phones in a minute, then another group Mayar didn't even know. That evening Dana saw it as a sticker on her cousin's phone. She didn't laugh. She messaged Mayar: “You could have asked me,” and didn't sit with her at break for a week." },
          why: { ar: "الصورة إذا خرجت من الهاتف لم تعد في يدك. وصاحبة الوجه أحقّ أن تقرر.", en: "Once a photo leaves your phone it is no longer in your hands. The person whose face it is has the first right to decide." } },
        { t: { ar: "أذهب إلى دانة، وأريها الصورة، وأسألها: نرسلها أم لا؟", en: "Go to Dana, show her the photo and ask: shall we send it or not?" },
          out: { ar: "نزعت دانة السمّاعة، ونظرت إلى الصورة، وانفجرت ضحكًا. قالت: «لا للمجموعة! لكن أرسليها لي، سأجعلها صورة أختي على هاتفي لتضحك». وبقيت الصورة بينهما، نكتةً لا يعرفها غيرهما.", en: "Dana took out an earbud, looked at the photo and burst out laughing. “Not to the group! But send it to me, I'll put it on my sister's contact to make her laugh.” The photo stayed between them, a joke nobody else knew." },
          why: { ar: "سؤال صغير قبل النشر يحفظ الصداقة والضحكة معًا.", en: "One small question before posting keeps both the friendship and the laugh." } },
        { t: { ar: "أقول للانا «لا»، وأمسح الصورة.", en: "Tell Lana “no” and delete the photo." },
          out: { ar: "قالت لانا: «يا لكِ من مملّة». ومسحت ميار الصورة. لم تعرف دانة شيئًا، ولم يحدث شيء. وفي آخر الرحلة التقطت لهما لانا صورة جميلة معًا على الرمل، وأرسلتها للمجموعة.", en: "“You're so boring,” said Lana. Mayar deleted the photo. Dana never knew, and nothing happened. At the end of the trip Lana took a lovely photo of the two of them together on the sand and sent that to the group." },
          why: { ar: "الحذف يكفّ الأذى، والسؤال يفتح بابًا للضحك المشترك.", en: "Deleting keeps harm away; asking can open a door to a shared laugh." } }
      ],
      end: { ar: "الوجه في الصورة له صاحب، وكلمة صاحبه أولًا.", en: "The face in a photo belongs to someone, and their word comes first." } },
    { id: "ch-pig-2", stage: "pig", trait: 1, age: "9-14",
      title: { ar: "نقود العيد والعرض الذي ينتهي بعد ساعة", en: "Eid money and the offer ending in an hour" },
      intro: {
        ar: ["جمع خالد من العيد مئتين. ووضعها في درجه، وكان يفكر منذ شهور في دراجة جديدة ثمنها خمسمئة.",
          "وفي المساء ظهر في لعبته المفضلة إعلان أحمر يلمع: «زيّ البطل الذهبي! خصم 50%! ينتهي العرض بعد 59 دقيقة». الثمن: مئة وخمسون.",
          "العداد يعدّ الثواني: 58:41، 58:40، 58:39... وصديقه زياد كتب في المجموعة: «اشتريته! أنت؟»."],
        en: ["Khalid collected two hundred in Eid money. He put it in his drawer; for months he had been dreaming of a new bike costing five hundred.",
          "That evening a flashing red advert popped up in his favourite game: “Golden Hero Skin! 50% off! Offer ends in 59 minutes.” The price: one hundred and fifty.",
          "The timer counted the seconds: 58:41, 58:40, 58:39... And his friend Ziad wrote in the group: “Bought it! You?”"] },
      q: { ar: "لو كنتَ مكان خالد، ماذا تفعل؟", ar_f: "لو كنتِ مكان خالد، ماذا تفعلين؟", en: "If you were Khalid, what would you do?" },
      opts: [
        { t: { ar: "أشتريه الآن قبل أن ينتهي العرض.", en: "Buy it now before the offer ends." }, weak: true,
          out: { ar: "لبس بطله الزيّ الذهبي، وكان جميلًا ساعة. وفي الصباح جاء إعلان جديد: «الزي الماسي! خصم 60%!». ونظر خالد إلى الدرج: خمسون فقط، والدراجة أبعد من قبل.", en: "His hero wore the golden skin, and it looked great for an hour. Next morning a new advert came: “Diamond Skin! 60% off!” Khalid looked in his drawer: only fifty left, and the bike further away than ever." },
          why: { ar: "العدّاد صُنع ليمنعك من التفكير. والعروض لا تنتهي، تتغيّر فقط.", en: "The timer is built to stop you thinking. Offers never really end; they just change." } },
        { t: { ar: "أغلق اللعبة، وأنام، وأسأل نفسي غدًا: هل ما زلت أريده؟", en: "Close the game, sleep, and ask myself tomorrow: do I still want it?" },
          out: { ar: "انتهى العرض وهو نائم. وفي الصباح لم يتذكره إلا حين رأى رسالة زياد. فتح الدرج، وعدّ المئتين، وكتب على ورقة: «الدراجة: 200 من 500»، وألصقها على باب خزانته.", en: "The offer ended while he slept. In the morning he only remembered it when he saw Ziad's message. He opened the drawer, counted the two hundred, and wrote on a note: “Bike: 200 of 500”, and stuck it on his wardrobe door." },
          why: { ar: "ليلة واحدة تفصل بين الرغبة والقرار.", en: "One night puts a space between wanting and deciding." } },
        { t: { ar: "أقسم المال: جزء للدراجة، وجزء أهدي به أمي، وشيء صغير ألعب به.", en: "Split the money: some for the bike, some for a present for Mum, and a little for the game." },
          out: { ar: "وضع مئة وخمسين للدراجة، واشترى لأمه وردة وعلبة حلوى بثلاثين، واشترى في اللعبة شيئًا صغيرًا بعشرين. لم يحصل على الزيّ الذهبي، ورأى أمه تضع الوردة في كأس على المائدة، فنسي الزيّ تمامًا.", en: "He put a hundred and fifty towards the bike, bought his mother a flower and a box of sweets for thirty, and something small in the game for twenty. He didn't get the golden skin, but he saw his mother put the flower in a glass on the table, and forgot the skin completely." },
          why: { ar: "المال المقسوم بخطة يعطي أكثر مما يعطيه مال يُنفق في دقيقة.", en: "Money split with a plan gives more than money spent in a minute." } }
      ],
      end: { ar: "العرض الذي ينتهي بعد ساعة يعود غدًا بلون آخر. والخطة التي تكتبها اليوم تبقى.", en: "The offer that ends in an hour comes back tomorrow in another colour. The plan you write today stays." } }
  );
})();

/* ───────────── قصص العلاقات السليمة في البيت، 27 نوفمبر 2026 ─────────────
 * الطلب: قصص تُظهر العلاقات السليمة (الأخ وأخته، والولد وأمه، والوالدان أحدهما مع الآخر، والمراهق مع والديه)،
 * كل موضوع في مستواه، مع سطر يُظهر المعنى. الخطة: docs/FAMILY-STORIES-PLAN.md. الأبطال خياليون.
 * Healthy family relationships, one story per theme at its age, each with a line that states its meaning. Fictional characters.
 */
(function () {
  var S = window.AKHLAQ_CONTENT.stages;
  var STORY = { ar: "قصة مؤلفة، أبطالها خياليون.", en: "An original story with fictional characters." };
  function R(k, o) { S[k].readings.push(Object.assign({ quote: null }, o)); }
  function Q(k, list) { list.forEach(function (q) { S[k].quiz.push(Object.assign({ type: "comprehension" }, q)); }); }
  function O(a) { return a.map(function (x) { return { ar: x[0], en: x[1] }; }); }
  function src(ar, en) { return { ar: STORY.ar + " " + ar, en: STORY.en + " " + en }; }

  /* ── 4-8: الأخت مع أخيها، والشعور ببعضنا ── */
  R("zombie", { id: "zombie-r16", minutes: 2, ages: "4-8",
    title: { ar: "سكت عمر", en: "Omar went quiet" },
    origin: { ar: "على معنى حديث «مثل المؤمنين في توادّهم»", en: "On the hadith of the believers as one body" },
    body: {
      ar: ["رجع عمر من المباراة، ودخل غرفته، وأغلق الباب.",
        "كانت أخته ليلى تلوّن على الأرض. قالت: «عمر لم يقل: مرحبًا».",
        "كان عمر كل يوم يرمي حذاءه ويصيح: «سجّلتُ هدفًا!». واليوم لم يصِح.",
        "تركت ليلى ألوانها، وطرقت الباب بهدوء: «أدخل؟».",
        "كان عمر جالسًا على سريره، وقميصه ما زال مبلّلًا. قال: «خسرنا».",
        "لم تقل ليلى شيئًا. جلست بجانبه، وأعطته أجمل رسمة عندها: شمس كبيرة، وولد يركض.",
        "نظر عمر إلى الرسمة، وضحك قليلًا: «هذا أنا؟». قالت ليلى: «هذا أنت حين تفوز في المرة القادمة».",
        "عرفت ليلى أن أخاها حزين من سكوته، قبل أن يقول كلمة. وحين جلست بجانبه صار حزنه أخفّ، لأن عمر لم يعد وحده فيه."],
      en: ["Omar came home from the match, went into his room and shut the door.",
        "His sister Layla was colouring on the floor. “Omar didn't say hello,” she said.",
        "Every other day Omar kicked off his shoes and shouted, “I scored a goal!” Today he didn't shout.",
        "Layla put down her crayons and knocked softly. “Can I come in?”",
        "Omar was sitting on his bed, his shirt still wet. “We lost,” he said.",
        "Layla didn't say anything. She sat down next to him and gave him her best drawing: a big sun, and a boy running.",
        "Omar looked at the drawing and laughed a little. “Is that me?” “That's you when you win next time,” said Layla.",
        "Layla knew her brother was sad from his silence, before he said a word. And when she sat beside him his sadness grew lighter, because Omar was not alone in it any more."]
    },
    ask: { ar: "من في بيتنا سكت اليوم على غير عادته؟ كيف نعرف أن أحدًا حزين؟", en: "Who at home was quieter than usual today? How can we tell that someone is sad?" },
    quote: {
      ar: "«مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ، إِذَا اشْتَكَى مِنْهُ عُضْوٌ تَدَاعَى لَهُ سَائِرُ الْجَسَدِ بِالسَّهَرِ وَالْحُمَّى»",
      en: "Meaning: The believers in their love, mercy and kindness to one another are like one body: when one part of it hurts, the whole body stays awake with it and feels its fever.",
      ref: "صحيح مسلم 2586 (ترقيم sunnah.com: الكتاب 45، الحديث 84)، ونحوه في البخاري 6011، عن النعمان بن بشير", checked: "hadith-api (fawazahmed0)", verify: true
    },
    source: src("ومعناها من حديث في صحيح مسلم (2586) وصحيح البخاري (6011).", "Its meaning comes from a hadith in Sahih Muslim (2586) and Sahih al-Bukhari (6011).") });
  Q("zombie", [
    { id: "zombie-q28", readingId: "zombie-r16", correct: 1,
      q: { ar: "كيف عرفت ليلى أن أخاها حزين؟", en: "How did Layla know her brother was sad?" },
      options: O([["قال لها: «أنا حزين»", "He told her, “I'm sad”"], ["سكت، ولم يصِح كعادته كل يوم", "He went quiet and didn't shout the way he did every day"], ["رأت أمها تبكي عند الباب", "She saw her mother crying by the door"]]),
      why: { ar: "انتبهت ليلى إلى شيء صغير تغيّر: عمر لم يصِح كعادته.", en: "Layla noticed one small thing that had changed: Omar didn't shout as he always did." } },
    { id: "zombie-q29", readingId: "zombie-r16", correct: 2,
      q: { ar: "ماذا فعلت ليلى حين دخلت غرفة أخيها؟", en: "What did Layla do when she went into her brother's room?" },
      options: O([["سألته أسئلة كثيرة عن المباراة", "Asked him lots of questions about the match"], ["نادت أمها لتكلّمه", "Called her mother to talk to him"], ["جلست بجانبه وأعطته رسمتها", "Sat beside him and gave him her drawing"]]),
      why: { ar: "لم تحتج ليلى إلى كلام كثير. جلست بجانبه، فلم يعد وحده في حزنه.", en: "Layla didn't need many words. She sat beside him, so he was not alone in his sadness." } }
  ]);

  /* ── 4-8: الأخ مع أخته، والرجل في البيت ── */
  R("human", { id: "human-r16", minutes: 2, ages: "4-8",
    title: { ar: "من يرفع الصحون؟", en: "Who clears the plates?" },
    origin: { ar: "من حديث السيدة عائشة رضي الله عنها في صحيح البخاري", en: "From a hadith of Lady Aisha in Sahih al-Bukhari" },
    body: {
      ar: ["انتهى الغداء. قالت الأم: «هيا يا يوسف، ويا هدى، نرفع الصحون».",
        "قامت هدى، وحملت صحنها. وبقي يوسف جالسًا، وقال: «هذا شغل البنات».",
        "سكتت هدى، ونظرت إلى أبيها.",
        "قام الأب، وحمل الصحون الكبيرة، ومشى إلى المطبخ وهو يدندن.",
        "قال يوسف: «أبي! أنت ترفع الصحون؟».",
        "قال الأب: «نعم. وكان النبي صلى الله عليه وآله وسلم يساعد أهله في البيت، فإذا جاء وقت الصلاة خرج إلى الصلاة».",
        "فهم يوسف أن البيت بيت الجميع، وأن أخته ليست هنا لتخدمه. والرجل القوي يقوم ويساعد، كما قام أبوه.",
        "قام يوسف، وحمل صحنه وصحن هدى، وقال: «وأنا أمسح الطاولة!»."],
      en: ["Lunch was over. “Come on, Yusuf, come on, Huda,” said their mother. “Let's clear the plates.”",
        "Huda got up and picked up her plate. Yusuf stayed in his seat and said, “That's a girls' job.”",
        "Huda said nothing, and looked at her father.",
        "Their father got up, picked up the big dishes, and walked to the kitchen humming.",
        "“Dad!” said Yusuf. “You're clearing the plates?”",
        "“Yes,” said his father. “The Prophet, peace and blessings be upon him and his family, used to help his family at home, and when it was time to pray he went out to pray.”",
        "Yusuf understood that the house belongs to everyone, and that his sister is not there to serve him. A strong man gets up and helps, the way his father did.",
        "Yusuf got up, picked up his own plate and Huda's too, and said, “And I'll wipe the table!”"]
    },
    ask: { ar: "ما العمل الذي نتقاسمه في بيتنا؟ وأيّ عمل تختاره أنت؟", en: "Which jobs do we share at home? Which one will you choose?" },
    quote: {
      ar: "«كَانَ يَكُونُ فِي مِهْنَةِ أَهْلِهِ، تَعْنِي خِدْمَةَ أَهْلِهِ، فَإِذَا حَضَرَتِ الصَّلَاةُ خَرَجَ إِلَى الصَّلَاةِ»",
      en: "Meaning: He used to be busy serving his family, and when the time for prayer came, he went out to pray.",
      ref: "صحيح البخاري 676، عن عائشة رضي الله عنها", checked: "hadith-api (fawazahmed0)", verify: true
    },
    source: src("ومعناها من حديث في صحيح البخاري (676).", "Its meaning comes from a hadith in Sahih al-Bukhari (676).") });
  Q("human", [
    { id: "human-q27", readingId: "human-r16", correct: 1,
      q: { ar: "ماذا قال يوسف حين طلبت أمه أن يرفعوا الصحون؟", en: "What did Yusuf say when his mother asked them to clear the plates?" },
      options: O([["«أنا متعب، بعد قليل»", "“I'm tired, in a minute”"], ["«هذا شغل البنات»", "“That's a girls' job”"], ["«بعد الحلوى»", "“After pudding”"]]),
      why: { ar: "ظنّ يوسف أن رفع الصحون عمل أخته وحدها، حتى رأى أباه يقوم.", en: "Yusuf thought clearing the plates was his sister's job alone, until he saw his father get up." } },
    { id: "human-q28", readingId: "human-r16", correct: 0,
      q: { ar: "ماذا فعل يوسف في آخر القصة؟", en: "What did Yusuf do at the end of the story?" },
      options: O([["حمل صحنه وصحن أخته، ومسح الطاولة", "Carried his plate and his sister's, and wiped the table"], ["ذهب إلى غرفته يلعب", "Went to his room to play"], ["طلب من هدى أن تمسح الطاولة", "Asked Huda to wipe the table"]]),
      why: { ar: "فهم أن البيت بيت الجميع، فقام يساعد كما قام أبوه.", en: "He understood the house belongs to everyone, so he got up to help as his father had." } }
  ]);

  /* ── 4-8: الأب والأم كما يراهما الطفل ── */
  R("sabiq", { id: "sabiq-r16", minutes: 2, ages: "4-8",
    title: { ar: "الحساء والشاي", en: "Soup and tea" },
    origin: { ar: "على معنى آية من سورة الروم", en: "On a verse of Surat ar-Rum" },
    body: {
      ar: ["في الصباح عطست ماما، ثم عطست مرة أخرى. كانت مريضة.",
        "قال بابا: «نامي واستريحي. اليوم أنا الطبّاخ».",
        "لبس بابا مئزر ماما الأحمر، وقطّع الجزر، وطبخ حساءً ساخنًا. وكان يحيى يناوله الملعقة.",
        "حمل بابا الحساء إلى ماما، وقال: «بالشفاء». ابتسمت ماما وقالت: «جزاك الله خيرًا».",
        "وبعد أيام رجع بابا من العمل متعبًا، ويده على ظهره.",
        "كانت ماما قد شُفيت. وضعت له الشاي على الطاولة، ووسادة خلف ظهره، وقالت: «استرح، العشاء جاهز».",
        "رأى يحيى أن أباه وأمه يحسّ كل واحد منهما بتعب الآخر، ويسرع إليه قبل أن يطلب. هذه هي المودة والرحمة التي جعلها الله بين الزوجين.",
        "ففكّر يحيى قليلًا، ثم رسم قلبًا كبيرًا فيه اسمان، وعلّقه على باب الثلاجة: «بابا وماما»."],
      en: ["In the morning Mama sneezed, and then she sneezed again. She was ill.",
        "“Sleep and rest,” said Baba. “Today I'm the cook.”",
        "Baba put on Mama's red apron, chopped the carrots and made a hot soup. Yahya handed him the spoon.",
        "Baba carried the soup to Mama and said, “Get well soon.” Mama smiled. “May Allah reward you,” she said.",
        "A few days later Baba came home from work tired, with his hand on his back.",
        "Mama was better by then. She put a cup of tea on the table for him and a cushion behind his back, and said, “Rest. Dinner's ready.”",
        "Yahya saw that his father and mother each feel how tired the other is, and hurry to help before being asked. This is the love and mercy that Allah has placed between husband and wife.",
        "Yahya thought for a moment. Then he drew a big heart with two names in it, and stuck it on the fridge door: “Baba and Mama.”"]
    },
    ask: { ar: "ماذا رأيت أحدًا في بيتنا يفعله اليوم ليريح غيره؟", en: "What did you see someone at home do today to give someone else a rest?" },
    quote: {
      ar: "﴿وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً﴾",
      en: "Meaning: Among His signs is that He created for you spouses from among yourselves so that you may find rest in them, and He placed love and mercy between you.",
      ref: "الروم 30:21", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
    },
    source: src("ومعناها من سورة الروم (30:21).", "Its meaning comes from Surat ar-Rum (30:21).") });
  Q("sabiq", [
    { id: "sabiq-q29", readingId: "sabiq-r16", correct: 2,
      q: { ar: "ماذا فعل بابا حين مرضت ماما؟", en: "What did Baba do when Mama was ill?" },
      options: O([["ذهب بها إلى الطبيب ثم إلى العمل", "Took her to the doctor and then went to work"], ["طلب من يحيى أن يطبخ", "Asked Yahya to cook"], ["لبس المريلة وطبخ لها حساءً ساخنًا", "Put on the apron and made her a hot soup"]]),
      why: { ar: "أحسّ بابا بتعب ماما، فقام عنها بعملها حتى تستريح.", en: "Baba felt how tired Mama was, so he did her work for her until she could rest." } },
    { id: "sabiq-q30", readingId: "sabiq-r16", correct: 0,
      q: { ar: "ماذا علّق يحيى على باب الثلاجة؟", en: "What did Yahya stick on the fridge door?" },
      options: O([["قلبًا كبيرًا فيه اسما بابا وماما", "A big heart with Baba's and Mama's names in it"], ["طريقة طبخ الحساء", "The recipe for the soup"], ["رسمة لجزرة حمراء", "A drawing of a red carrot"]]),
      why: { ar: "رأى يحيى المودة والرحمة بين أبيه وأمه، ففرح بها ورسمها.", en: "Yahya saw the love and mercy between his father and mother, and was so glad of it that he drew it." } }
  ]);

  /* ── 9-14: الولد وأمه، ونظرته إلى عملها ── */
  R("zombie", { id: "zombie-r17", minutes: 3, ages: "9-14",
    title: { ar: "ماذا تفعل أمي طوال اليوم؟", en: "What does my mum do all day?" },
    origin: { ar: "على معنى حديث «أمك، ثم أمك، ثم أمك»", en: "On the hadith “Your mother, then your mother, then your mother”" },
    body: {
      ar: ["في الفسحة قال كريم وهو يأكل شطيرته: «أمي لا تعمل. تجلس في البيت فقط». فضحك بعض الأولاد.",
        "لم يضحك حمزة، ولم يجد ما يقوله. أمه أيضًا في البيت، ولم يكن يعرف بماذا يجيب.",
        "في المساء أخرج ورقة، وكتب في أعلاها: «ماذا تفعل أمي طوال اليوم؟». وقرر أن يكتب كل ما يراها تفعله يوم السبت، من غير أن يخبرها.",
        "الخامسة والنصف: أيقظت الجميع لصلاة الفجر. السابعة: الفطور، وضفيرة أخته الصغيرة، والجورب الذي ضاع. التاسعة: الغسيل، ومكالمة لجدته تسأل فيها عن دوائها. الحادية عشرة: جدول الضرب مع أخيه، للمرة الثالثة، وبالهدوء نفسه.",
        "الثانية: الغداء. الثالثة: الصحون. الرابعة: الطبيب مع أخته. السادسة: «يا حمزة، هل أنهيت واجبك؟». الثامنة: جلست أخيرًا، فنادتها أخته: «ماما، أنا عطشى».",
        "في التاسعة لم يبقَ في الورقة مكان، فقلبها حمزة وكتب على ظهرها.",
        "وفهم لماذا لا يرى أحد عمل أمه: لأنها تتمّه كله، فلا يبقى شيء ناقص يلفت النظر. وفهم أنها تفعل هذا حبًّا لهم، وأن من حقها أن يُرى عملها ويُشكر. وتذكّر أن رجلًا سأل النبي صلى الله عليه وآله وسلم: من أحق الناس بحسن صحابتي؟ فقال: «أمك» ثلاث مرات، ثم «أبوك».",
        "صباح الأحد وضع حمزة الورقة تحت كوب شاي أمه، ورتّب سريره وسرير أخيه. وفي الفسحة، حين عاد كريم إلى كلامه، قال له حمزة: «جرّب أن تكتب يوم أمك مرة واحدة»."],
      en: ["At break, Karim said with his mouth full of sandwich, “My mum doesn't work. She just stays at home.” A few of the boys laughed.",
        "Hamza didn't laugh, and he couldn't think of anything to say. His mum stayed at home too, and he didn't know what to answer.",
        "That evening he took out a sheet of paper and wrote at the top: “What does my mum do all day?” He decided to write down everything he saw her do on Saturday, without telling her.",
        "5:30: woke everyone for the dawn prayer. 7:00: breakfast, his little sister's plait, the sock that went missing. 9:00: the washing, and a call to Grandma to ask about her medicine. 11:00: times tables with his brother, for the third time, just as calmly.",
        "2:00: lunch. 3:00: the dishes. 4:00: the doctor with his sister. 6:00: “Hamza, have you finished your homework?” 8:00: she finally sat down, and his sister called, “Mama, I'm thirsty.”",
        "By nine there was no room left on the paper, so Hamza turned it over and kept writing on the back.",
        "And he understood why nobody sees his mother's work: she finishes all of it, so nothing is left undone to catch the eye. He understood that she does it out of love for them, and that she has a right to have her work seen and thanked. He remembered that a man once asked the Prophet, peace and blessings be upon him and his family, who most deserved his good company, and he said, “Your mother,” three times, and then, “Your father.”",
        "On Sunday morning Hamza put the paper under his mother's cup of tea, and made his bed and his brother's. At break, when Karim said it again, Hamza told him, “Try writing down your mum's day, just once.”"]
    },
    ask: { ar: "ما الشيء الذي يفعله أحد في بيتنا كل يوم، ولا ينتبه له أحد؟", en: "What does someone at home do every day that nobody notices?" },
    quote: {
      ar: "«يَا رَسُولَ اللَّهِ، مَنْ أَحَقُّ بِحُسْنِ صَحَابَتِي؟ قَالَ: أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: ثُمَّ أَبُوكَ»",
      en: "Meaning: “Messenger of Allah, who most deserves my good company?” He said: “Your mother.” “Then who?” “Your mother.” “Then who?” “Your mother.” “Then who?” “Then your father.”",
      ref: "صحيح البخاري 5971، وصحيح مسلم 2548 (ترقيم sunnah.com: الكتاب 45، الحديث 1)، عن أبي هريرة رضي الله عنه", checked: "hadith-api (fawazahmed0)", verify: true
    },
    source: src("ومعناها من حديث في صحيح البخاري (5971) وصحيح مسلم (2548).", "Its meaning comes from a hadith in Sahih al-Bukhari (5971) and Sahih Muslim (2548).") });
  Q("zombie", [
    { id: "zombie-q30", readingId: "zombie-r17", correct: 0,
      q: { ar: "لماذا لم يجد حمزة ما يقوله لكريم في الفسحة؟", en: "Why couldn't Hamza think of anything to say to Karim at break?" },
      options: O([["لأنه لم يكن يعرف ما تفعله أمه طوال اليوم", "Because he didn't know what his mother did all day"], ["لأنه كان يوافق كريمًا في كلامه", "Because he agreed with Karim"], ["لأن المعلم دخل في تلك اللحظة", "Because the teacher walked in at that moment"]]),
      why: { ar: "كان عمل أمه أمامه كل يوم، ولم يكن يراه، حتى كتبه.", en: "His mother's work was in front of him every day, and he didn't see it until he wrote it down." } },
    { id: "zombie-q31", readingId: "zombie-r17", correct: 2,
      q: { ar: "ماذا فهم حمزة حين امتلأت الورقة؟", en: "What did Hamza understand when the paper was full?" },
      options: O([["أن أمه تحتاج إلى خادمة تساعدها", "That his mother needed a maid to help her"], ["أن يوم السبت أصعب الأيام", "That Saturday is the hardest day"], ["أن عمل أمه لا يُرى لأنها تتمّه كله، وأن من حقها أن يُشكر", "That his mother's work goes unseen because she finishes all of it, and that she has a right to be thanked"]]),
      why: { ar: "العمل الذي يُتمّ بحب لا يترك شيئًا ناقصًا يلفت النظر، فيحتاج إلى عين تراه ولسان يشكره.", en: "Work finished with love leaves nothing undone to catch the eye, so it needs eyes that see it and words that thank it." } }
  ]);

  /* ── 9-14: الأخ مع أخته ── */
  R("pig", { id: "pig-r16", minutes: 3, ages: "9-14",
    title: { ar: "الغرفة الكبيرة", en: "The big room" },
    origin: { ar: "على معنى حديث «حتى يحب لأخيه ما يحب لنفسه»", en: "On the hadith “until he loves for his brother what he loves for himself”" },
    body: {
      ar: ["انتقلت العائلة إلى شقة جديدة فيها غرفتان للأولاد: كبيرة لها شرفة، وصغيرة نافذتها على الدرج.",
        "دخل زياد الغرفة الكبيرة أولًا، ورمى حقيبته على السرير، وقال: «هذه لي. أنا الولد، وأنا الأكبر».",
        "ووقفت أخته سارة عند الباب، وفي يدها صندوق صغير فيه أصص نبتاتها. كانت تريد الشرفة لها، ولم تقل شيئًا.",
        "قال الأب: «نقرر بعد العشاء». وعلى العشاء سأل: «من يحتاج الغرفة الكبيرة أكثر، ولماذا؟».",
        "قال زياد: «لأني الولد». قال الأب: «وما علاقة هذا بالغرفة؟». فلم يجد زياد جوابًا ثانيًا.",
        "وقالت سارة: «نبتاتي تحتاج إلى الشمس. ومكتبي كبير، لا يدخل الغرفة الصغيرة».",
        "نام زياد تلك الليلة في الغرفة الكبيرة وهو غاضب. وفي الصباح رأى سارة عند نافذة الدرج الضيقة، تصفّ أصصها على العتبة واحدًا بجانب الآخر، تبحث لها عن شمس.",
        "وتذكّر حديثًا حفظه في المدرسة: «لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه». وفهم أن كونه الولد لا يعطيه في البيت نصيبًا أكبر من أخته، وأن الأخ الكبير يحمل عن أخته. وأحبّ لها ما كان يحبه لنفسه: غرفة فيها شمس.",
        "حمل زياد حقيبته إلى الغرفة الصغيرة، ثم رجع وحمل مع سارة مكتبها الكبير. وفي العصر كانت الأصص على الشرفة، وزياد يسقيها معها."],
      en: ["The family moved to a new flat with two rooms for the children: a big one with a balcony, and a small one whose window looked onto the stairwell.",
        "Ziyad went into the big room first, threw his bag on the bed and said, “This one's mine. I'm the boy, and I'm the eldest.”",
        "His sister Sara stood at the door holding a small box of her potted plants. She wanted the balcony for them, but she said nothing.",
        "“We'll decide after dinner,” said their father. Over dinner he asked, “Who needs the big room more, and why?”",
        "“Because I'm the boy,” said Ziyad. “And what does that have to do with the room?” asked his father. Ziyad couldn't find a second reason.",
        "Sara said, “My plants need sun. And my desk is big; it won't fit in the small room.”",
        "Ziyad slept in the big room that night, still angry. In the morning he saw Sara at the narrow stairwell window, lining her pots up on the sill one beside the other, looking for some sun for them.",
        "He remembered a hadith he had learnt at school: “None of you truly believes until he loves for his brother what he loves for himself.” And he understood that being the boy gives him no bigger share at home than his sister, and that an older brother carries things for his sister. He wanted for her what he had wanted for himself: a room with sun in it.",
        "Ziyad carried his bag to the small room, then came back and carried Sara's big desk with her. By the afternoon the pots were on the balcony, and Ziyad was watering them with her."]
    },
    ask: { ar: "هل أخذتَ شيئًا مرة لأنك الأكبر فقط؟ من كان يحتاجه أكثر منك؟", ar_f: "هل أخذتِ شيئًا مرة لأنك الكبرى فقط؟ من كان يحتاجه أكثر منك؟", en: "Have you ever taken something just because you were the eldest? Who needed it more than you?" },
    quote: {
      ar: "«لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ»",
      en: "Meaning: None of you truly believes until he loves for his brother what he loves for himself.",
      ref: "صحيح البخاري 13، وصحيح مسلم 45 (ترقيم sunnah.com: الكتاب 1، الحديث 77)، عن أنس بن مالك", checked: "hadith-api (fawazahmed0)", verify: true
    },
    source: src("ومعناها من حديث في صحيح البخاري (13) وصحيح مسلم (45).", "Its meaning comes from a hadith in Sahih al-Bukhari (13) and Sahih Muslim (45).") });
  Q("pig", [
    { id: "pig-q28", readingId: "pig-r16", correct: 1,
      q: { ar: "ما السبب الذي قاله زياد حين سأل الأب: من يحتاج الغرفة الكبيرة أكثر؟", en: "What reason did Ziyad give when their father asked who needed the big room more?" },
      options: O([["أن عنده كتبًا كثيرة", "That he had lots of books"], ["أنه الولد", "That he was the boy"], ["أنه يحب الشرفة", "That he loved the balcony"]]),
      why: { ar: "لم يكن عند زياد سبب من حاجته، فلما سأله أبوه عن علاقة ذلك بالغرفة لم يجد جوابًا.", en: "Ziyad had no reason from his own need, so when his father asked what that had to do with the room, he had no answer." } },
    { id: "pig-q29", readingId: "pig-r16", correct: 0,
      q: { ar: "ماذا رأى زياد في الصباح فغيّر رأيه؟", en: "What did Ziyad see in the morning that changed his mind?" },
      options: O([["سارة تصفّ أصصها عند نافذة الدرج الضيقة تبحث لها عن شمس", "Sara lining up her pots at the narrow stairwell window, looking for sun"], ["أباه يحمل حقيبته إلى الغرفة الصغيرة", "His father carrying his bag to the small room"], ["أن الغرفة الكبيرة باردة في الليل", "That the big room was cold at night"]]),
      why: { ar: "حين رأى حاجة أخته بعينه، أحب لها ما كان يحبه لنفسه.", en: "When he saw his sister's need with his own eyes, he wanted for her what he had wanted for himself." } }
  ]);

  /* ── 9-14: الأخت مع أخيها ── */
  R("human", { id: "human-r17", minutes: 3, ages: "9-14",
    title: { ar: "التقليد", en: "The impression" },
    origin: { ar: "على معنى آية من سورة الحجرات", en: "On a verse of Surat al-Hujurat" },
    body: {
      ar: ["كان آدم، أخو سارة الصغير، يتلعثم في الحروف حين يستعجل: «س... س... سارة، أين قلمي؟».",
        "وفي يوم زارت سارةَ صاحباتُها. ودخل آدم يسأل عن قلمه الأزرق، فتلعثم كعادته، ثم خرج.",
        "فقلّدته سارة: «أ... أ... أين ق... ق... قلمي؟». وضحكت البنات كثيرًا، فقلّدته مرة ثانية، بصوت أعلى.",
        "ولم يكن آدم قد ابتعد. كان واقفًا في الممر، والقلم في يده، ووجهه أحمر.",
        "رأته سارة من فتحة الباب، فسكتت. وسكتت البنات معها.",
        "وفي الليل لم يأتِ آدم ليقول لها: تصبحين على خير، كما يفعل كل ليلة.",
        "فهمت سارة أن ضحك صاحباتها أخذته من أخيها، وأن آدم صار يخاف أن يتكلم أمامها. وتذكّرت أن الله نهى أن يسخر أحد من أحد، لأن من نسخر منه قد يكون خيرًا منا. والأخت مكانها أن تكون الأمان لأخيها حين يتعثر.",
        "في اليوم التالي جاءت صاحباتها، فنادت سارة آدم، وقالت أمامهن: «قلّدتك أمس، وكان هذا قبيحًا مني. سامحني». ثم طلبت منه أن يحكي لهن عن حصانه الذي رسمه، فحكى بمهل، ولم يستعجل، ولم يضحك أحد."],
      en: ["Adam, Sara's little brother, stumbled over his letters when he was in a hurry: “S... S... Sara, where's my pen?”",
        "One day Sara's friends came round. Adam came in asking about his blue pen, stumbled as usual, and went out again.",
        "So Sara did an impression of him: “W... w... where's my p... p... pen?” The girls laughed and laughed, so she did it again, louder.",
        "But Adam hadn't gone far. He was standing in the corridor with the pen in his hand, his face red.",
        "Sara saw him through the gap in the door and fell silent. The girls fell silent with her.",
        "That night Adam didn't come to say goodnight to her, the way he did every night.",
        "Sara understood that her friends' laughter had been taken from her brother, and that Adam was now afraid to speak in front of her. She remembered that Allah has forbidden anyone to mock anyone else, because the one we mock may be better than us. A sister's place is to be the safe place for her brother when he stumbles.",
        "The next day her friends came again. Sara called Adam and said in front of them all: “I made fun of you yesterday, and it was an ugly thing to do. Please forgive me.” Then she asked him to tell them about the horse he had drawn, and he told them slowly, without hurrying, and nobody laughed."]
    },
    ask: { ar: "هل ضحكنا مرة على أحد في بيتنا؟ كيف نصلح ذلك؟", en: "Have we ever laughed at someone at home? How do we put it right?" },
    quote: {
      ar: "﴿يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ عَسَىٰ أَنْ يَكُونُوا خَيْرًا مِنْهُمْ وَلَا نِسَاءٌ مِنْ نِسَاءٍ عَسَىٰ أَنْ يَكُنَّ خَيْرًا مِنْهُنَّ﴾",
      en: "Meaning: O you who believe, let no people mock another people, for they may be better than them; nor let women mock other women, for they may be better than them.",
      ref: "الحجرات 49:11", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
    },
    source: src("ومعناها من سورة الحجرات (49:11).", "Its meaning comes from Surat al-Hujurat (49:11).") });
  Q("human", [
    { id: "human-q29", readingId: "human-r17", correct: 2,
      q: { ar: "أين كان آدم حين قلّدته سارة؟", en: "Where was Adam when Sara did her impression of him?" },
      options: O([["في غرفته يرسم حصانه", "In his room, drawing his horse"], ["عند جدته في البيت المجاور", "At his grandmother's next door"], ["في الممر قريبًا، يسمع كل شيء", "Nearby in the corridor, hearing everything"]]),
      why: { ar: "ظنت سارة أنه ابتعد، وكان يسمع، فصار يخاف أن يتكلم أمامها.", en: "Sara thought he had gone, but he could hear, and now he was afraid to speak in front of her." } },
    { id: "human-q30", readingId: "human-r17", correct: 1,
      q: { ar: "كيف أصلحت سارة خطأها؟", en: "How did Sara put her mistake right?" },
      options: O([["أعطت آدم قلمًا أزرق جديدًا", "She gave Adam a new blue pen"], ["اعتذرت له أمام صاحباتها أنفسهن", "She apologised to him in front of the same friends"], ["طلبت من أمها أن تكلّمه", "She asked her mother to talk to him"]]),
      why: { ar: "السخرية كانت أمام صاحباتها، فجعلت الاعتذار أمامهن، ثم أعطته مكانًا يتكلم فيه بأمان.", en: "The mocking happened in front of her friends, so she apologised in front of them, then gave him a safe place to speak." } }
  ]);

  /* ── 15+: نظرة البنت إلى الرجل، وأمها مع أبيها ── */
  R("pig", { id: "pig-r17", minutes: 4, ages: "15+",
    title: { ar: "حين خسر أبي عمله", en: "When Dad lost his job" },
    origin: { ar: "على معنى حديث «ليس الغنى عن كثرة العرض»", en: "On the hadith “Wealth is not having many possessions”" },
    body: {
      ar: ["أُغلقت الشركة التي يعمل فيها أبو هالة في آخر الشهر. عرفت هالة قبل أن يقول أحد شيئًا: من صوت الباب حين دخل، ومن أنه لم يخلع حذاءه عند الباب كعادته.",
        "وفي الأسبوع نفسه خُطبت ابنة خالتها. وفي مجموعة البنات كان السؤال الأول: «ما سيارته؟»، والثاني: «كم راتبه؟». وأرسلت إحداهن صورة الخاتم، فامتلأت المجموعة بالقلوب.",
        "وفي المساء كانت هالة ترى أباها جالسًا على طرف الكنبة، يكتب سيرته الذاتية على الهاتف، ويمسحها، ويعيد كتابتها. وسألت نفسها سؤالًا خافت منه: هل صار أبي الآن أقل؟",
        "لكن أمها لم تتغير. كانت تصبّ له الشاي في كوبه نفسه، وتسأله رأيه في مدرسة أخيها كما كانت تسأله، وتقول لجدتها على الهاتف: «أبو هالة يبحث، والله لا يضيّعه».",
        "وفي ليلة سمعتها تقول له في المطبخ، بصوت منخفض: «تزوجتك وأنت تقبض نصف هذا الراتب، أتذكر؟ وكنا سعداء. ابحث بهدوء، ونحن معك». ورأت هالة أباها يضحك لأول مرة منذ أسبوعين.",
        "فهمت هالة أن أمها لا تزن أباها بما في جيبه. ترى فيه رجلًا أمينًا، يتعب لهم، ويصلّي، ويضحك مع أولاده، ويُستشار في أمرهم، وهذا كله بقي حين ذهب الراتب. والمرأة التي تنظر إلى الرجل هذه النظرة تحبه هو، وتبقى معه في الضيق. وتذكّرت أسئلة المجموعة عن السيارة والراتب، ولم يسأل أحد: كيف يعامل أمه؟ هل يصدق إذا وعد؟",
        "كتبت هالة في المجموعة: «الله يتمّم لها على خير. وكيف أخلاقه؟». ولم يجبها أحد. وبعد ساعة كتبت لها ابنة خالتها نفسها، في رسالة خاصة: «سؤالك أجمل سؤال جاءني اليوم»."],
      en: ["The company Hala's father worked for closed at the end of the month. Hala knew before anyone said anything: from the sound of the door when he came in, and from the way he didn't take his shoes off at the door as he always did.",
        "That same week her cousin got engaged. In the girls' group chat the first question was “What car does he drive?” and the second was “What's his salary?” Someone posted a photo of the ring, and the chat filled up with hearts.",
        "In the evenings Hala watched her father sitting on the edge of the sofa, typing his CV on his phone, deleting it, and typing it again. And she asked herself a question that frightened her: is my father worth less now?",
        "But her mother hadn't changed. She poured his tea into the same cup, asked his opinion about her brother's school as she always had, and told Grandma on the phone, “He's looking. Allah won't let him down.”",
        "One night Hala heard her say to him in the kitchen, quietly: “I married you when you earned half that salary, remember? And we were happy. Look calmly. We're with you.” And Hala saw her father laugh for the first time in two weeks.",
        "Hala understood that her mother doesn't weigh her father by what is in his pocket. She sees an honest man who works hard for them, who prays, who laughs with his children and is consulted about them, and all of that stayed when the salary went. A woman who looks at a man this way loves him for himself, and stays with him through hard times. And Hala thought of the questions in the chat about the car and the salary, and how nobody had asked: how does he treat his mother? Does he keep his word?",
        "Hala wrote in the group: “May Allah bless it for her. And what's his character like?” Nobody replied. An hour later her cousin herself sent her a private message: “Your question was the nicest one I got today.”"]
    },
    ask: { ar: "حين تحترم شخصًا، بماذا تقيسه؟ وبماذا تحب أن يقيسك الناس؟", ar_f: "حين تحترمين شخصًا، بماذا تقيسينه؟ وبماذا تحبين أن يقيسك الناس؟", en: "When you respect someone, what do you measure them by? And what would you like people to measure you by?" },
    quote: {
      ar: "«لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ، وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ»",
      en: "Meaning: Wealth is not having many possessions; true wealth is the wealth of the soul.",
      ref: "صحيح البخاري 6446، وصحيح مسلم 1051، عن أبي هريرة رضي الله عنه", checked: "hadith-api (fawazahmed0)", verify: true
    },
    source: src("ومعناها من حديث في صحيح البخاري (6446) وصحيح مسلم (1051).", "Its meaning comes from a hadith in Sahih al-Bukhari (6446) and Sahih Muslim (1051).") });
  Q("pig", [
    { id: "pig-q30", readingId: "pig-r17", correct: 2,
      q: { ar: "ما الذي بقي كما هو في معاملة الأم لزوجها بعد أن خسر عمله؟", en: "What stayed the same in the way the mother treated her husband after he lost his job?" },
      options: O([["أعطته كل ما ادّخرته من مال", "She gave him all the money she had saved"], ["طلبت منه ألا يخبر أحدًا", "She asked him not to tell anyone"], ["كانت تسأله رأيه في أمر الأولاد كما كانت تسأله", "She asked his opinion about the children as she always had"]]),
      why: { ar: "لم يتغير مكانه عندها، لأنها كانت ترى الرجل نفسه بأخلاقه وعمله.", en: "His place with her didn't change, because she saw the man himself, his character and his work." } },
    { id: "pig-q31", readingId: "pig-r17", correct: 0,
      q: { ar: "ماذا سألت هالة في مجموعة البنات؟", en: "What did Hala ask in the girls' group chat?" },
      options: O([["كيف أخلاق الخاطب", "What the groom's character is like"], ["كم ثمن الخاتم", "How much the ring cost"], ["أين سيسكنان بعد الزواج", "Where they would live after the wedding"]]),
      why: { ar: "تعلّمت من أمها السؤال الذي يقيس الرجل بما يبقى منه: أخلاقه.", en: "She had learnt from her mother the question that measures a man by what lasts: his character." } }
  ]);

  /* ── 15+: نظرة الشاب إلى أخته وإلى المرأة ── */
  R("human", { id: "human-r18", minutes: 4, ages: "15+",
    title: { ar: "اعملي لي شايًا", en: "Make me a tea" },
    origin: { ar: "على معنى حديث «استوصوا بالنساء خيرًا»", en: "On the hadith “Treat women well”" },
    body: {
      ar: ["رجع أنس من التدريب، ورمى نفسه على الكنبة، وقال من غير أن يلتفت: «مريم، اعملي لي شايًا».",
        "كانت أخته مريم على طاولة الطعام بين كتب الكيمياء، وامتحانها غدًا في الثامنة صباحًا. قالت: «اعمله لنفسك، أنا أذاكر».",
        "قال: «أنا راجع من التدريب، وأنتِ قاعدة. ثم إن هذا شغلك أصلًا».",
        "لم تردّ مريم، لكن قلمها توقف. وجدّهما في الكرسي القريب طوى جريدته ببطء.",
        "قام الجد، ودخل المطبخ، ورجع بثلاثة أكواب: واحد لمريم، وواحد لأنس، وواحد له. وجلس بجانب أنس وقال: «أتعرف أن جدتك، رحمها الله، كانت تحفظ من القرآن أكثر مني؟ كنت أعمل لها الشاي حين تراجع حفظها، وكان هذا من أحب أوقاتي».",
        "ثم قال: «أوصى النبي صلى الله عليه وآله وسلم بالنساء خيرًا. وأختك وأمك أهلك، ولهما في البيت ما لك. وامتحان مريم غدًا عندها مثل مباراتك عندك».",
        "سكت أنس. وفهم أن كلمة «هذا شغلك» جعلت أخته في عينه أقل منه، كأن وقتها أرخص من وقته وتعبها أخف من تعبه. وأخته مثله في الكرامة، والرجل الذي يجعل المرأة خادمة له يسيء إليها، ويسيء إلى نفسه أيضًا.",
        "في التاسعة ليلًا دخل أنس المطبخ، وعمل كوبين، ووضع واحدًا بجانب كتاب الكيمياء، ولم يقل شيئًا. وفي الظهر وجد ورقة على باب غرفته بخط مريم: «حللتُ الأسئلة كلها. شكرًا على الشاي»."],
      en: ["Anas got back from training, threw himself onto the sofa and said, without turning round, “Maryam, make me a tea.”",
        "His sister Maryam was at the dining table among her chemistry books, with an exam at eight the next morning. “Make it yourself,” she said. “I'm revising.”",
        "“I've just got back from training, and you're just sitting there,” he said. “Anyway, that's your job.”",
        "Maryam didn't answer, but her pen stopped. Their grandfather, in the chair nearby, slowly folded his newspaper.",
        "He got up, went into the kitchen, and came back with three cups: one for Maryam, one for Anas, one for himself. He sat down next to Anas and said, “Did you know your grandmother, may Allah have mercy on her, knew more Quran by heart than I did? I used to make her tea while she revised it, and those were some of my favourite times.”",
        "Then he said, “The Prophet, peace and blessings be upon him and his family, told us to treat women well. Your sister and your mother are your family, and this house is as much theirs as yours. Maryam's exam tomorrow matters to her as much as your match matters to you.”",
        "Anas said nothing. He understood that the words “that's your job” had made his sister smaller than him in his own eyes, as if her time were cheaper than his and her tiredness lighter than his. His sister is his equal in dignity, and a man who turns a woman into his servant wrongs her, and wrongs himself too.",
        "At nine that night Anas went into the kitchen, made two cups, put one next to the chemistry book, and said nothing. At midday he found a note on his door in Maryam's handwriting: “I answered every question. Thanks for the tea.”"]
    },
    ask: { ar: "ما الكلمة التي قلتها مرة لأختك أو أخيك وجعلته أقل منك؟", ar_f: "ما الكلمة التي قلتِها مرة لأختك أو أخيك وجعلته أقل منك؟", en: "What have you once said to your sister or brother that made them smaller than you?" },
    quote: {
      ar: "«وَاسْتَوْصُوا بِالنِّسَاءِ خَيْرًا»",
      en: "Meaning: And treat women well; take my counsel to be good to them.",
      ref: "صحيح البخاري 5186، وصحيح مسلم 1468 (ترقيم sunnah.com: الكتاب 17، الحديث 80)، عن أبي هريرة رضي الله عنه", checked: "hadith-api (fawazahmed0)", verify: true
    },
    source: src("ومعناها من حديث في صحيح البخاري (5186) وصحيح مسلم (1468).", "Its meaning comes from a hadith in Sahih al-Bukhari (5186) and Sahih Muslim (1468).") });
  Q("human", [
    { id: "human-q31", readingId: "human-r18", correct: 0,
      q: { ar: "ماذا كانت مريم تفعل حين طلب أنس الشاي؟", en: "What was Maryam doing when Anas asked for tea?" },
      options: O([["تذاكر الكيمياء لامتحان صباح الغد", "Revising chemistry for an exam the next morning"], ["تشاهد مقطعًا على الهاتف", "Watching a clip on her phone"], ["تطبخ العشاء مع أمها", "Cooking dinner with her mother"]]),
      why: { ar: "كان وقتها مشغولًا بما يهمها، كما كان وقته مشغولًا بتدريبه.", en: "Her time was taken up with something that mattered to her, just as his was with training." } },
    { id: "human-q32", readingId: "human-r18", correct: 1,
      q: { ar: "ماذا فعل الجد بعد كلام أنس؟", en: "What did the grandfather do after Anas spoke?" },
      options: O([["وبّخ أنس أمام أخته", "Told Anas off in front of his sister"], ["عمل الشاي للثلاثة، وحكى عن جدتهم", "Made tea for all three of them and told them about their grandmother"], ["طلب من مريم أن تعمل الشاي ثم تذاكر", "Told Maryam to make the tea and then revise"]]),
      why: { ar: "أراه الجد بفعله قبل كلامه أن الرجل يقوم ويخدم أهله.", en: "The grandfather showed him by doing it, before saying anything, that a man gets up and serves his family." } }
  ]);

  /* ── 15+: المراهق مع والديه ── */
  R("monkey", { id: "monkey-r16", minutes: 4, ages: "15+",
    title: { ar: "أفّ", en: "Ugh" },
    origin: { ar: "على معنى آية من سورة الإسراء", en: "On a verse of Surat al-Isra" },
    body: {
      ar: ["«رانيا، كيف أرسل رسالة صوتية؟ أنسى دائمًا». كانت هذه المرة الرابعة هذا الأسبوع، ورانيا في منتصف مقطع، وسمّاعة في أذن واحدة.",
        "قالت: «أفّ يا ماما! اضغطي على الميكروفون وامسكيه. قلتها لك ألف مرة». وأخذت الهاتف من يد أمها، وأرسلت الرسالة بنفسها، وأعادته إليها.",
        "قالت أمها: «شكرًا يا حبيبتي»، ورجعت إلى المطبخ. ولم تسألها عن شيء بعد ذلك.",
        "في الليلة نفسها كانت رانيا تبحث في هاتف أمها عن صورة قديمة لعيد ميلادها. فوجدت مقطعًا: طفلة في الرابعة تحاول أن تربط حذاءها، والرباط يفلت من أصابعها، وصوت أمها من خلف الكاميرا: «مرة ثانية يا روني. أنتِ تقدرين».",
        "والطفلة تحاول، مرة بعد مرة، والصوت لا يتغير. عدّت رانيا: تسع مرات. وفي التاسعة ربطت الطفلة الحذاء، وصفّق الصوت.",
        "وفهمت رانيا لماذا ذكر القرآن كلمة صغيرة مثل «أف» بين حقوق الوالدين. حرفان فقط، لكنهما يقولان لمن علّمك كل شيء: أنت ثقيل عليّ. وأمها لم تقلها لها مرة واحدة في تسع محاولات. والأم التي تسأل للمرة الرابعة تحتاج من ابنتها الصبر نفسه الذي أعطتها إياه، وهي لا تطلبه.",
        "في الصباح جلست رانيا بجانب أمها، وفتحت الهاتف، وقالت: «تعالي نتعلمها معًا، وأنتِ التي تضغطين، أنا لن ألمس شيئًا». أخطأت الأم مرتين. وفي الثالثة وصلت رانيا، وهي في الغرفة المجاورة، رسالة صوتية: «نجحت!»."],
      en: ["“Rania, how do I send a voice message? I always forget.” It was the fourth time that week, and Rania was in the middle of a video with one earbud in.",
        "“Ugh, Mum! Press the microphone and hold it. I've told you a thousand times.” She took the phone out of her mother's hand, sent the message herself, and handed it back.",
        "“Thank you, love,” said her mother, and went back to the kitchen. She didn't ask her anything else after that.",
        "That same night Rania was scrolling through her mother's phone for an old birthday photo when she found a video: a four-year-old trying to tie her shoe, the lace slipping through her fingers, and her mother's voice behind the camera: “Again, Rani. You can do it.”",
        "The little girl kept trying, again and again, and the voice never changed. Rania counted: nine times. On the ninth the girl tied the shoe, and the voice clapped.",
        "And Rania understood why the Quran mentions a word as small as “uff”, a sigh of impatience, among the rights of parents. It is only a sound, but it tells the person who taught you everything: you are a burden to me. Her mother had not said it to her once in nine tries. A mother asking for the fourth time needs the same patience from her daughter that she once gave her, and she does not ask for it.",
        "In the morning Rania sat down next to her mother, opened the phone and said, “Let's learn it together, and you do the pressing. I won't touch anything.” Her mother got it wrong twice. On the third try Rania, in the next room, received a voice message: “I did it!”"]
    },
    ask: { ar: "ما السؤال الذي يكرره أبوك أو أمك؟ وكيف تجيب عنه في المرة الرابعة؟", ar_f: "ما السؤال الذي يكرره أبوكِ أو أمكِ؟ وكيف تجيبين عنه في المرة الرابعة؟", en: "What question does your father or mother keep asking? How do you answer it the fourth time?" },
    quote: {
      ar: "﴿فَلَا تَقُلْ لَهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُلْ لَهُمَا قَوْلًا كَرِيمًا﴾",
      en: "Meaning: Do not say to them even “uff”, do not scold them, and speak to them with noble words.",
      ref: "الإسراء 17:23", checked: "tanzil quran-simple, with diacritics (api.alquran.cloud)", verify: true
    },
    source: src("ومعناها من سورة الإسراء (17:23-24).", "Its meaning comes from Surat al-Isra (17:23-24).") });
  Q("monkey", [
    { id: "monkey-q28", readingId: "monkey-r16", correct: 1,
      q: { ar: "كم مرة حاولت الطفلة في المقطع أن تربط حذاءها؟", en: "How many times did the little girl in the video try to tie her shoe?" },
      options: O([["ثلاث مرات", "Three times"], ["تسع مرات", "Nine times"], ["مرة واحدة", "Once"]]),
      why: { ar: "تسع محاولات، والصوت من خلف الكاميرا لم يتغير ولم يتعب.", en: "Nine tries, and the voice behind the camera never changed and never grew tired." } },
    { id: "monkey-q29", readingId: "monkey-r16", correct: 2,
      q: { ar: "ماذا فعلت رانيا في الصباح؟", en: "What did Rania do in the morning?" },
      options: O([["صارت ترسل عن أمها الرسائل كلها", "Started sending all her mother's messages for her"], ["كتبت لها الخطوات على ورقة وتركتها", "Wrote the steps on a piece of paper and left it for her"], ["جلست معها وتركتها تجرّب بنفسها حتى نجحت", "Sat with her and let her try by herself until she managed it"]]),
      why: { ar: "أعطت أمها الصبر الذي أخذته منها وهي صغيرة: مرة ثانية، وثالثة، حتى تنجح.", en: "She gave her mother the patience she had received from her as a child: again, and again, until she managed." } }
  ]);

  /* ── مهام البيت للعلاقات ── */
  S.zombie.tasks.push({ id: "zombie-t6", ar: "سؤال أحد أفراد البيت حين يبدو صامتًا أو متعبًا: «ما بك؟»، والجلوس معه دقيقة.", en: "Asked someone at home who seemed quiet or tired, “Are you alright?”, and sat with them for a minute." });
  S.human.tasks.push({ id: "human-t6", ar: "عمل من أعمال البيت بعد الأكل مع الجميع (رفع الصحون أو مسح الطاولة)، دون أن يُطلب.", en: "Did a household job after a meal along with everyone (clearing plates or wiping the table), without being asked." });
  S.pig.tasks.push({ id: "pig-t7", ar: "ترك شيء للأخ أو الأخت (المقعد، أو القطعة الكبرى، أو الدور) لأنه يحتاجه أكثر.", en: "Let a brother or sister have something (the seat, the bigger piece, the turn) because they needed it more." });
  S.monkey.tasks.push({ id: "monkey-t7", ar: "الإجابة عن سؤال يكرره أحد الوالدين بهدوء، كأنها المرة الأولى.", en: "Answered a question a parent keeps asking, calmly, as if it were the first time." });
  S.sabiq.tasks.push({ id: "sabiq-t7", ar: "عمل شيء يريح أحد الوالدين قبل أن يطلبه: كوب ماء، أو ترتيب، أو كلمة شكر.", en: "Did something to give a parent a rest before they asked: a glass of water, some tidying, a word of thanks." });
})();

/* ───────────── إظهار المعنى، 27 نوفمبر 2026 (قراءات الأطفال والمراهقين) ─────────────
 * الطلب: «لا نعتمد على ذكاء القارئ فقط». سطر يُظهر وجه الخصلة ومعناها، يُضاف إلى الفقرة التي يفهم فيها البطل.
 * The owner's request: stories should not rely on the reader's intelligence alone. Each entry appends one line to a paragraph:
 * [reading id, paragraph index, ar, ar_f (null = same as ar), en].
 */
(function () {
  var S = window.AKHLAQ_CONTENT.stages, all = {};
  Object.keys(S).forEach(function (k) { S[k].readings.forEach(function (r) { all[r.id] = r; }); });
  [
    ["zombie-r9", 5, "كان هادي وحده تلك الليلة، يكتب وينتظر، وكان زياد على بُعد رسالة واحدة منه، وقلبه مشغول بالضحك فلم يرَ صديقه.", null, "Hadi had been alone that night, typing and waiting, and Ziyad had been one message away from him, his heart too busy laughing to see his friend."],
    ["zombie-r11", 5, "وفهم حينها أن قدميه نعمة تحمله كل يوم، وأنه لم يشكر الله عليها مرة واحدة، وأن الحذاء الممزق شيء صغير بجانبها.", null, "Then he understood that his feet were a blessing that carried him every day, that he had never once thanked Allah for them, and that the torn shoe was a small thing beside them."],
    ["zombie-r12", 6, "فهمت نور أن الستين رسالة كلها لمست اثنتي عشرة ثانية من الفيل، وأنها هي رأت الممر كله. وما رأته صار أمانة عندها، وكريم يُظلم الآن أمام الجميع.", null, "Nour saw that all sixty messages had touched twelve seconds of the elephant, and that she had seen the whole corridor. What she had seen was now a trust in her hands, and Karim was being wronged in front of everyone."],
    ["zombie-r14", 8, "أراد هذه المرة أن يكون عقله حاضرًا مع المسألة، يفهم لماذا تُحلّ هكذا، حتى يجد طريقه إليها من أي جهة جاءت.", null, "This time he wanted his mind awake with the problem, understanding why it worked that way, so he could find his way to it from whichever side it came."],
    ["zombie-r15", 5, "لم يكن الطفل يفكر في منصب، ولا في رأي الناس فيه، فرأى ما أمامه وقاله.", null, "The child wasn't thinking about any post, or about what people would think of him, so he saw what was in front of him and said it."],
    ["pig-r9", 5, "ثم تذكرت هلا منحنية على الحاسوب، تكتب للمجموعة كلها وهي جائعة، وتقول «لا بأس» كي لا تُحرج أحدًا. وعرفت رنا أن حق صديقتها في يدها هي الآن، والله يراه ولو لم ينتبه أحد.", null, "Then she pictured Hala bent over the laptop, writing for all of them while she was hungry, saying \"it's fine\" so no one would feel awkward. Rana knew her friend's due was in her own hands now, and Allah saw it even if nobody else had noticed."],
    ["pig-r11", 5, "والجرّة التي ملأها ليحرم الناس من الحكمة صارت هي نفسها ما يدفعه عن الشجرة.", null, "The very pot he had filled to keep wisdom from people was the thing that kept pushing him off the tree."],
    ["pig-r14", 6, "عرف يمان أن الدرجة الكاملة الأولى كانت أرنبه، جاءت مرة ولن تتكرر، وأن الفهم ينمو عند من يتعب عليه يومًا بعد يوم، كما يتعب هذا العامل على أشجاره.", null, "Yaman saw that his first full marks had been his hare: it came once and wasn't coming back. Understanding grows for the one who works at it day after day, the way this man worked at his trees."],
    ["pig-r15", 5, "كانت تملك أكثر مما حلمت به يومًا، ولم تفرح بشيء منه، لأن عينها كانت دائمًا على الشيء التالي.", null, "She owned more than she had ever dreamed of, and took joy in none of it, because her eyes were always on the next thing."],
    ["monkey-r9", 4, "وعرف أن سليمًا أرسل ذلك الوجه الضاحك وحده بعد أن كتب شيئًا ومسحه مرتين، وأن ملصقًا آخر سيزيد جرحًا يحاول صاحبه أن يخفيه.", null, "He knew Salim had sent that laughing face on its own after typing something and deleting it twice, and that one more sticker would deepen a hurt Salim was trying to hide."],
    ["monkey-r11", 8, "كانت تعرف الآن أن صياحهم لا يضرها وهي في الهواء، وأن صديقتيها اللتين انتظرتاها يومين تستحقان أن تصل معهما.", null, "She knew now that their shouting could not hurt her up in the air, and that the two friends who had waited two days for her deserved to have her arrive with them."],
    ["monkey-r15", 8, "وتذكّر كل ما رآه في الطريق، فلم يجد فيه إلا زميلًا عائدًا من رحلة، وظنًّا كاد يجعله يجرح بريئًا.", null, "He went back over everything he had seen on the way, and found only a classmate coming home from a trip, and a suspicion that had nearly made him hurt someone innocent."],
    ["human-r9", 4, "ورأى فيها أن إلياس يحسب حسابه قبل حساب المباراة نفسها، وأن الكلمة التي قالها وعينه على الهاتف صارت عند أخيه وعدًا ينتظره.", null, "He saw in it that Ilyas was counting on him even more than on the match, and that the word he had said with his eyes on his phone had become, for his brother, a promise he was waiting for."],
    ["human-r12", 7, "ورأت أن المجموعة كلها التفّت حول هاتف، كما التفّ أهل الوليمة حول الفروة، وهالة على الدرج تنتظر ما انتظرته هي يومها.", null, "And she saw that the whole group had gathered round a phone, the way the wedding guests had gathered round the fur coat, while Hala sat on the steps waiting for what Layan herself had once waited for."],
    ["human-r14", 7, "وتخيّل عمر في غرفته تلك الليلة، يقرأ الرسائل واحدة بعد واحدة ولا يجد ما يكتبه، وفهم أن وجهيه الضاحكين وصلا إليه كحجرين صغيرين.", null, "He pictured Omar in his room that night, reading the messages one after another and finding nothing to write, and understood that his own two laughing faces had reached Omar like two small stones."],
    ["sabiq-r9", 4, "وفهمت أن العم صابرًا وقف أمام الكاميرا أربع مرات ينتظر طعامه، يستحي أن يرفع رأسه، وأن اللحظة التي فرحت بها كانت عليه ثقيلة.", null, "She understood that Uncle Saber had stood through four takes waiting for his food, too ashamed to lift his head, and that the moment she had been so pleased with had weighed heavily on him."],
    ["sabiq-r12", 9, "فهم تادا أن جدّه أحرق تعب سنة كاملة في دقائق، لأن أهل القرية كانوا أغلى عنده من كل ما يملك.", null, "Tada understood that his grandfather had burned a whole year's work in minutes because the people of the village were dearer to him than everything he owned."],
    ["sabiq-r14", 8, "جاءت يوم الشبكة وهي تعرف أنها لا تقدر أن تنقذ أحدًا، وحين وقعت هي في الحبل رجع الثلاثة كلهم من أجلها.", null, "She had come on the day of the net knowing she could save no one, and when she was the one caught, all three of them came back for her."],
    ["sabiq-r15", 7, "كان يعرف أن صديقه ينتظره في السجن وحياته معلّقة بوعده، فلم يجعل العاصفة ولا التعب عذرًا.", null, "He knew his friend was waiting for him in prison with his life hanging on his word, and he would not let the storm or his exhaustion become an excuse."]
  ].forEach(function (x) {
    var b = all[x[0]] && all[x[0]].body, i = x[1]; if (!b) return;
    b.ar[i] += " " + x[2]; b.en[i] += " " + x[4];
    if (b.ar_f) b.ar_f[i] += " " + (x[3] || x[2]);
  });
})();

window.AKHLAQ_CONTENT.version = "0.31.0-draft-2026-11-27"; // family stories and explicit-meaning lines
