/* تزكية: محتوى القراءات والعلامات والاختبارات
 * Tazkiya content. Plain JS, UTF-8. Draft for the author's review.
 * كل نص قرآني أو حديث منقول من الحفظ ويحمل verify:true حتى يُطابق على المصحف وكتب الحديث.
 * Scripture in English is a simple meaning, not a translation.
 * Names always describe behaviour, never the person. All children in stories are fictional.
 */
window.AKHLAQ_CONTENT = {
  version: "0.28.0-draft-2026-11-24",
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
          "At that moment Sami's heart woke up. The tablet was not evil, but Sami had forgotten to be present. Any one of us can wake up at any moment."
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
        "ar": "الحاضر القلب يسمع النداء ويستجيب له، وهذا عكس سلوك الغفلة.",
        "en": "A present heart hears the call and answers it. That is the opposite of heedlessness."
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
        "ar": "الانتباه لا يحتاج لومًا للنفس، بل خطوة صغيرة: توقف وانظر واشكر.",
        "en": "Waking up does not need blaming yourself, only a small step: stop, look and give thanks."
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
          "سلوك الخنزير يقول: «طعامي لي». وهذه الآية تعلّمنا العكس: أجمل العطاء أن تعطي ما تحب، لا ما زاد عنك.",
          "وفي آية أخرى: ﴿وَمَنْ يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ﴾ (الحشر 59:9). الشح حرص النفس على أن يكون كل شيء لها، ومن نجا منه أفلح."
        ],
        "en": [
          "The Quran describes some people of Paradise who give food \"despite loving it\": they want it themselves, and still give it to the poor, the orphan and the captive.",
          "Many commentators reported that these verses came down about the Ahl al-Bayt, peace be upon them, when they gave their fast-breaking food to those who knocked at their door and spent the night fasting.",
          "Pig behaviour says: \"My food is mine.\" This verse teaches the opposite: the finest giving is to give what you love, not what you have left over.",
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
          "بعد العد، قرر. أحيانًا ستأخذ، وأحيانًا ستعطي. المهم أنك صرت أنت من يقرر، لا رغبتك."
        ],
        "en": [
          "A practical page. Psychologists have found that being able to delay a want a little is a learnable skill, and that it helps in study, friendship and all of life.",
          "The exercise has two steps. First: \"Wait.\" When you want something, count to ten before taking it.",
          "Second: \"Look.\" While you count, look around: does anyone need this more than me? Has everyone had some? Is anyone tired?",
          "After counting, decide. Sometimes you will take, sometimes you will give. What matters is that you decide, not your craving."
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
        "ar": "العطاء الأجمل أن تعطي ما تحب، وبه يصعد الإنسان من سمات البنصر.",
        "en": "The finest giving is giving what you love; that is how we climb out of ring-finger traits."
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
        "ar": "القوة الحقيقية قوة على النفس، لا على الناس.",
        "en": "Real strength is over yourself, not over people."
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
        "ar": "كلمة السلام تُنهي الشجار، والرد بالمثل يزيده.",
        "en": "A word of peace ends a quarrel; answering in kind makes it bigger."
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
        "ar": "الهدوء لا يعني الضعف: تبتعد بسلام، وتطلب العون إن احتجت.",
        "en": "Calm is not weakness: walk away in peace and ask for help if needed."
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
          "ثم تقول الآية إن الإنسان قد يُرَدّ «أسفل سافلين». ليس شكله هو الذي يسقط، بل سلوكه حين يترك الهداية.",
          "ثم يأتي الاستثناء: «إلا الذين آمنوا وعملوا الصالحات». بالإيمان والعمل الصالح يبقى الإنسان في مكانه الكريم ويصعد.",
          "وفي سورة فاطر يقسم الله الناس ثلاثة: ظالم لنفسه، ومقتصد، وسابق بالخيرات (فاطر 35:32). المقتصد هو الإنسان المعتدل الذي يؤدي ما عليه. وهذه مرتبة السبابة في التطبيق، وفوقها السابقون."
        ],
        "en": [
          "In Surat at-Tin, Allah says He created the human being \"in the finest form\": the most beautiful shape and stature. Your shape is beautiful as Allah made it.",
          "Then the verse says a person may be brought down \"to the lowest of the low\". It is not their shape that falls, but their behaviour, when they leave guidance.",
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
          "وقال أيضًا: «أحب الأعمال إلى الله تعالى أدومها وإن قل». الإنسان لا يحتاج أعمالًا ضخمة ليبقى إنسانًا، بل عملًا صغيرًا يداوم عليه.",
          "اجمع الحديثين: كفّ أذاك، وداوم على خير صغير. هكذا تثبت على السبابة وتتهيأ للإبهام."
        ],
        "en": [
          "The Prophet, peace and blessings be upon him and his family, was asked who a Muslim is. He said it is the one from whose tongue and hand people are safe.",
          "That is the first step on the index finger: nobody is afraid of you. No hitting, no pushing, no mocking, no hurtful words.",
          "He also said, meaning: the deeds most loved by Allah are the most lasting, even if small. A human does not need huge deeds to stay human, only a small good deed kept up.",
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
        "ar": "الله خلق الإنسان في أحسن تقويم، والسلوك هو الذي يرفع أو يُنزل.",
        "en": "Allah created us in the finest form; behaviour is what raises or lowers."
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
          "في سورة فاطر ذكر الله ثلاثة أقسام من الناس، وأعلاها «سابق بالخيرات بإذن الله». و«بإذن الله» تعلّمنا أن السبق نفسه هداية من الله، لا فخر لنا فيه.",
          "وفي سورة الواقعة: ﴿وَالسَّابِقُونَ السَّابِقُونَ ۝ أُولَٰئِكَ الْمُقَرَّبُونَ﴾ (الواقعة 56:10-11). السابقون إلى الخير في الدنيا هم السابقون إلى القرب من الله.",
          "وأمرنا الله بالمسارعة: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ﴾ (آل عمران 3:133). المسارعة ليست ركضًا بالأقدام، بل أن تسبق نفسك إلى الخير قبل أن تتكاسل.",
          "وكلما اتبعت الهداية زادك الله هدى: ﴿وَالَّذِينَ اهْتَدَوْا زَادَهُمْ هُدًى﴾ (محمد 47:17). هكذا يكون الصعود: خطوة تتبع خطوة."
        ],
        "en": [
          "In Surat Fatir, Allah mentions three groups of people, the highest being those \"racing to good deeds by Allah's permission\". \"By Allah's permission\" teaches us that the racing itself is guidance from Allah, nothing to boast about.",
          "In Surat al-Waqi'a (56:10-11), the meaning is: and the foremost, the foremost, they are the ones brought near. Those who are first to good in this life are first in nearness to Allah.",
          "Allah tells us to hurry (Al Imran 3:133), meaning: hasten to forgiveness from your Lord. Hurrying is not running with your feet; it is getting to the good before laziness gets to you.",
          "And the more you follow guidance, the more guidance Allah gives (Muhammad 47:17). That is how climbing works: one step following another."
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
          "لا تخبر أحدًا. واكتب في المساء التالي: هل فعلته؟ وماذا شعرت؟ هكذا تسبق نفسك إلى الخير."
        ],
        "en": [
          "A practical page. The Prophet, peace and blessings be upon him and his family, said, meaning: every act of kindness is charity (Sahih al-Bukhari). Even a smile and a kind word.",
          "Psychologists say small acts of kindness make the doer as happy as the receiver, and planning them ahead makes us actually do them.",
          "The plan: every evening, write one hidden good deed you will do tomorrow: arranging your father's shoes, bringing water to someone thirsty, praying for a friend by name.",
          "Tell nobody. The next evening, write: did I do it? How did it feel? That is how you race ahead of yourself to good."
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
        'تصف آية البقرة قلوبًا قست بعد أن رأت الآيات ﴿فَهِيَ كَالْحِجَارَةِ أَوْ أَشَدُّ قَسْوَةً﴾ (البقرة 2:74). والقسوة لا تأتي دفعة واحدة، بل طبقة فوق طبقة من الإعراض الصغير.',
        'وتأتي آية الحديد سؤالًا رحيمًا: ﴿أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَنْ تَخْشَعَ قُلُوبُهُمْ لِذِكْرِ اللَّهِ﴾ (الحديد 57:16). ليست حكمًا على أحد، بل دعوة إلى أن يبدأ الآن.',
        'ويقول باحثو الانتباه اليوم إن كثيرًا من التطبيقات مصمَّمة لتأخذ انتباهنا أطول وقت ممكن. الغفلة صارت صناعة، واليقظة صارت مقاومة واعية.',
        'خطوات عملية: حدّد أوقاتًا بلا شاشة (بعد الفجر وقبل النوم)، واجعل أول ما تفعله صباحًا ذكرًا لا إشعارًا، واسأل كل مساء: ماذا قرّبني اليوم من الله، وماذا أبعدني؟'
      ],
      en: [
        'In an adult, heedlessness does not look like death. They work, study and laugh, yet the days pass without a single pause to ask: where am I going?',
        'A verse in al-Baqara (2:74) describes hearts that hardened after seeing signs, meaning: they became like stone or even harder. Hardness does not come at once; it builds layer by layer from small turnings-away.',
        'A verse in al-Hadid (57:16) comes as a merciful question, meaning: has the time not come for the believers\' hearts to soften at the remembrance of Allah? It is not a verdict on anyone, but an invitation to begin now.',
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
    why: { ar: 'اليقظة عادة صغيرة ثابتة، لا قرار ضخم ينهار في اليوم التالي.', en: 'Wakefulness is a small steady habit, not a huge decision that collapses the next day.' }
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
        'والعلاج في القرآن ليس كبت الرغبة بل ترتيبها: ﴿وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ ۝ فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ﴾ (النازعات 79:40-41). النهي هنا قيادة: أنت تقود النفس، لا هي تقودك.',
        'تمرين: قبل أي شراء غير ضروري انتظر يومًا كاملًا. وكل أسبوع أعطِ شيئًا تحبه. ولاحظ كيف يخف ضجيج الرغبة كلما مارست العطاء.'
      ],
      en: [
        'Yusuf, peace be upon him, said (12:53), meaning: the self keeps urging towards evil, except where my Lord has mercy. A truthful prophet said it, so no one is beyond needing Allah\'s mercy in struggling with the self.',
        'In adults, pig behaviour does not stop at food: buying what we do not need, comparing ourselves with those who have more, and putting our comfort ahead of the rights of those around us.',
        'Psychologists call it "hedonic adaptation": each want we satisfy soon returns us to the same point, so we ask for more. That turns desire into a race with no finish line.',
        'The Quranic remedy is not crushing desire but ordering it (an-Nazi\'at 79:40-41), meaning: as for the one who feared standing before his Lord and held the self back from its whims, Paradise is the refuge. Holding back here is leadership: you lead the self, it does not lead you.',
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
        'Remember that anger itself is not a flaw; it is a natural feeling. The flaw is letting it drive. Your task is to hold the wheel.'
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
        'أقسم الله في سورة القيامة بالنفس اللوّامة: ﴿وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ﴾ (القيامة 75:2). وهي النفس التي تراجع صاحبها إذا قصّر. وجودها علامة حياة في القلب، لا علامة فشل.',
        'الفرق بين اللوم النافع والضار دقيق. اللوم الضار يقول: «أنا سيئ ولن أتغير». واللوم النافع يقول: «فعلت هذا، وسأصلحه، وغدًا أفعل أحسن».',
        'وفي الحديث: «وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن» (سنن الترمذي). الخطأ لا يُمحى بالحزن عليه وحده، بل بحسنة بعده.',
        'ويؤيد علم النفس هذا: من يحاسب نفسه برفق ويخطط لما بعد الخطأ يتغير أكثر ممن يجلد نفسه.',
        'التمرين: كل مساء دقيقة واحدة، ثلاثة أسئلة: ما الذي أحسنت فيه اليوم فأحمد الله؟ ما الذي قصّرت فيه؟ ما الحسنة التي أُتبعه بها غدًا؟'
      ],
      en: [
        'In Surat al-Qiyama (75:2) Allah swears by the self-reproaching soul: the self that holds its owner to account when they fall short. Its presence is a sign of life in the heart, not a sign of failure.',
        'The line between helpful and harmful self-blame is fine. Harmful blame says: "I am bad and I will never change." Helpful blame says: "I did this, I will fix it, and tomorrow I will do better."',
        'A hadith (Sunan al-Tirmidhi) means: follow a bad deed with a good one and it will erase it, and treat people with good character. A mistake is not erased by sorrow alone, but by a good deed after it.',
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
        'وخطر هذه المرحلة العُجب: أن يرى السابق نفسه فوق غيره. لذلك جاء في آية فاطر «بإذن الله»: السبق هداية تُشكر، لا ميزة يُتباهى بها. ومن علامات السابق أنه يأخذ بيد غيره.',
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
      'وتجنّب أن تقول: «أنت زومبي لا تفهم شيئًا». الوصف الذي يلتصق بالشخص يغلق الباب، والوصف الذي يصف السلوك يفتحه.'
    ],
    en: [
      'Little-finger traits are heedlessness: time passing while the heart is absent. Screens bring it to all of us, so start with yourself as the example before pointing it out to your child.',
      'Point to the little finger calmly and with a smile, describe the behaviour rather than the child, then open the way up straight away.',
      'Say, for example: "I can see the screen has taken an hour from you; that is a little-finger trait. Come, let\'s stop for a minute and count three blessings together."',
      'Avoid saying: "You are a zombie who understands nothing." A label stuck on the person closes the door; a description of the behaviour opens it.'
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
      'سمات البنصر هي التمحور حول الرغبة: «أنا أريد» قبل أن يرى الطفل غيره. والطفل في سنواته الأولى يرى نفسه أولًا بطبيعته، فالمطلوب أن نعلّمه أن يرى، لا أن نعيّره.',
      'أشِر إلى البنصر حين ترى السلوك، ثم ساعده أن ينظر: إلى وجه أخيه، أو تعب جدته، أو نصيب غيره.',
      'قل مثلًا: «أخذ أكبر قطعة قبل الجميع من سمات البنصر. انظر حولك: هل أخذ أخوك؟ ماذا تفعل الآن؟».',
      'وتجنّب أن تقول: «أنت خنزير لا تفكر إلا في بطنك». الطفل يدافع عن نفسه حين يُوصف هو، ويتعلم حين يُوصف فعله.',
      'وامدحه بالإصبع الأعلى حين يحسن: «هذا الذي فعلته الآن من سمات السبابة».'
    ],
    en: [
      'Ring-finger traits are being centred on wanting: "I want" before the child sees anyone else. Young children naturally see themselves first, so the aim is to teach them to see, not to shame them.',
      'Point to the ring finger when you see the behaviour, then help them look: at a sibling\'s face, a grandmother\'s tiredness, someone else\'s share.',
      'Say, for example: "Taking the biggest piece before everyone else is a ring-finger trait. Look around: has your brother had some? What will you do now?"',
      'Avoid saying: "You are a pig who only thinks about your stomach." Children defend themselves when they are labelled, and learn when their action is described.',
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
      'وتجنّب أن تقول وأنت غاضب: «أنت قرد لا تسمع أبدًا». الصراخ على الصراخ يعلّم الصراخ، وكلمة «أبدًا» تغلق باب الصعود.',
      'وحين يتوقف من نفسه، احتفل بذلك: «توقفت فورًا، هذه درجة جديدة».'
    ],
    en: [
      'Middle-finger traits are impulsiveness: a loud voice, rough movement, not stopping. They are strongest when a child is tired, hungry or upset, so teach in calm moments and use the heated moment only to pause.',
      'In the heated moment your low voice is stronger than their loud one. Point to the middle finger without many words, say one word, "stop", then sit with them.',
      'Once they are calm, say, for example: "Raising your voice just now was a middle-finger trait. What made you angry? And what do we do next time: stop, breathe, choose?"',
      'Avoid saying, while angry yourself: "You are a monkey who never listens." Shouting at shouting teaches shouting, and the word "never" closes the way up.',
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
      'وتجنّب أن تقول: «أخيرًا صرت إنسانًا!». فهي توحي بأنه لم يكن إنسانًا قبل ذلك. الطفل إنسان كريم دائمًا، والسلوك هو ما يصعد وينزل.'
    ],
    en: [
      'The index finger is the balanced human: keeps harm away, does what is due, apologises when wrong. It is the finger you will often point to in praise, so make pointing to it a joy that repeats.',
      'When you see human behaviour, point to the index finger and name the exact action; specific praise fixes a behaviour better than general praise.',
      'Say, for example: "You owned up to breaking the cup and apologised; that is an index-finger trait. I\'m proud of your honesty."',
      'Avoid saying: "Finally you\'ve become a human!" It suggests they were not human before. The child is always an honoured human being; it is the behaviour that rises and falls.'
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
      'وتجنّب أن تقول: «أنت أحسن من أخيك، هو ما زال في الوسطى». المقارنة تزرع العُجب في واحد والحزن في الآخر، والسابق الحقيقي يعين أخاه على الصعود.'
    ],
    en: [
      'The thumb is Racing to good: acting before being asked and taking others by the hand. The danger here is a child learning to do good in order to be praised, so keep praise brief and quiet at this stage, and give the thanks to Allah.',
      'Point to the thumb when they take the initiative, and link the action to a prophet\'s example, peace be upon them, rather than comparing them with siblings.',
      'Say, for example: "You cleared the cups before I asked; that is a thumb trait. Praise be to Allah who guided you to it. The Prophet used to help his family like that too."',
      'Avoid saying: "You\'re better than your brother; he\'s still on the middle finger." Comparison plants pride in one child and sadness in the other, and someone truly racing to good helps their brother climb.'
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
      a: { ar: 'الأذى يأتي حين يُلصق الوصف بالطفل نفسه: «أنت خنزير». أما التطبيق فيصف السلوك فقط: «هذه من سمات البنصر». والأصل قرآني، فالقرآن ضرب أمثالًا بالحيوان لسلوك الإنسان لا لهيئته. ونؤكد للطفل دائمًا أن الله خلقه في أحسن تقويم، وأن كل الناس فيهم شيء من هذه السمات، وأن كل واحد يستطيع أن يصعد. ولهذا صارت إشارة الإصبع هي اللغة اليومية بدل اسم الحيوان.', en: 'Harm comes when a label is stuck on the child: "you are a pig". The app only ever describes behaviour: "that is a ring-finger trait". The idea is Quranic: the Quran uses animal images for human behaviour, never for a person\'s form. We always remind the child that Allah created them in the finest form, that everyone has some of these traits, and that everyone can climb. That is why the finger sign, not the animal name, is the everyday language.' } },
    { q: { ar: 'ماذا أفعل إن رفض طفلي النسبة المئوية أو حزن منها؟', en: 'What if my child objects to a percentage or is upset by it?' },
      a: { ar: 'استمع إليه أولًا ولا تجادله. قل له: «النسبة ليست حكمًا عليك، بل صورة لسلوك هذا الأسبوع، وستتغير». وابدأ دائمًا بالجزء الإنساني والاتجاه: «انظر، صعدت هذا الأسبوع». وإن اعترض على رقم بعينه فاسأله: «وكيف تراه أنت؟»، فالتقييم الذاتي جزء من التطبيق، وحواره معك أهم من الرقم نفسه.', en: 'Listen first and do not argue. Say: "The number is not a verdict on you; it is a picture of this week\'s behaviour, and it will change." Always start with the human part and the direction: "Look, you went up this week." If they disagree with a particular number, ask: "How do you see it?" Self-assessment is part of the app, and talking it through with you matters more than the number itself.' } },
    { q: { ar: 'كم مرة نستعمل التطبيق؟', en: 'How often should we use the app?' },
      a: { ar: 'القليل الدائم أفضل: قراءة واحدة قصيرة وأسئلتها في اليوم، ومهمة يوم واحدة، وجلسة أسبوعية هادئة تنظران فيها معًا إلى المزيج. لا تجعله عقوبة بعد خطأ، بل عادة لطيفة في وقت ثابت، كبعد العصر أو قبل النوم.', en: 'A little, consistently, is best: one short reading with its questions each day, one daily mission, and a calm weekly sit-down to look at the mix together. Never use it as a punishment after a mistake; make it a gentle habit at a fixed time, such as after Asr or before bed.' } },
    { q: { ar: 'هل التطبيق نفسه لابن أربع سنوات ولابن اثنتي عشرة سنة وللكبير؟', en: 'Is it the same for a 4-year-old, a 12-year-old and an adult?' },
      a: { ar: 'السلم واحد، والطريقة تختلف. ابن الرابعة يسمع القصص المصورة من والده، ويجيب عن أسئلة المواقف بصوت عالٍ، ويرى الأصابع أكثر من الأرقام. وابن الثانية عشرة يقرأ وحده، ويحل الاختبارات، ويقيّم نفسه. والكبير يقرأ قراءات 15+، ويحاسب نفسه، ويكون قدوة. ولكل قراءة وسم عمري يساعدك على الاختيار.', en: 'The ladder is the same; the way of using it differs. A 4-year-old hears the picture-book stories from a parent, answers the situation questions aloud, and sees fingers more than numbers. A 12-year-old reads alone, does the quizzes and assesses themself. An adult reads the 15+ pages, reviews themself and sets the example. Every reading has an age tag to help you choose.' } },
    { q: { ar: 'هل ينزل طفلي إذا أخطأ؟', en: 'Does my child go down when they make a mistake?' },
      a: { ar: 'تنزل النسبة الإنسانية ببطء شديد، وتصعد بسرعة أكبر بالاعتذار والإصلاح والحسنة بعد السيئة. والفكرة أن يعرف الطفل أن الباب مفتوح دائمًا، وأن الخطأ ليس نهاية، بل فرصة لصعود جديد.', en: 'The human share drops only slowly, and rises faster through apologising, repairing and following a bad deed with a good one. The point is for the child to know the door is always open: a mistake is not an ending but a chance to climb again.' } },
    { q: { ar: 'ما دوري في تأكيد المهام؟', en: 'What is my role in confirming tasks?' },
      a: { ar: 'أنت الشاهد على السلوك الحقيقي في البيت. أكّد المهمة حين تراها فعلًا، وسمِّ الفعل بالتحديد حين تمدحه. ولا تؤكد ما لم يحدث لتفرحه، فالصدق هنا جزء من التربية. وإن لم ينجز المهمة فلا تعلّق بلوم، بل قل: «غدًا فرصة جديدة».', en: 'You are the witness of real behaviour at home. Confirm a task when you have actually seen it, and name the exact action when you praise it. Do not confirm something that did not happen just to please them; honesty here is part of the upbringing. If they did not manage it, skip the blame and say: "Tomorrow is a new chance."' } },
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
        ar: ['افتتاح (دقيقتان): نقرأ «سلم الناس من لسانه ويده»، ونقف عند «أحب الأعمال إلى الله تعالى أدومها وإن قل». فنحن لا نصعد بما نقرأ وحده، بل بما نفعله منه.', 'سؤال (3 دقائق): ما الشيء الذي قرأناه هذا الشهر ولم نفعله بعد؟', 'تمرين (4 دقائق): يختار كل واحد عادة صغيرة مربوطة بشيء ثابت («بعد العشاء أشكر أمي»)، ويكتبها الوالد ليؤكدها في الأسبوع.', D2.ar],
        en: ['Opening (2 min): read "People are safe from his tongue and hand" and pause at "the deeds most loved by Allah are the most lasting, even if small". We climb not by what we read alone, but by what we do with it.', 'Question (3 min): what have we read this month that we have not yet done?', 'Practice (4 min): each person picks one tiny habit tied to a fixed moment ("after dinner I thank my mother"), and the parent writes it down to confirm during the week.', D2.en]
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
    'zombie-q7.why': 'الانتباه لا يحتاج لومًا للنفس، بل خطوة صغيرة: توقفي وانظري واشكري.',
    'zombie-q8.q': 'تستيقظين وأول ما تمدين يدك إليه الهاتف. ما الخطوة الأقرب لليقظة؟',
    'zombie-q9.q': 'تمشين إلى المدرسة، ويلوّح لك جارك. ماذا تفعلين؟',
    'zombie-q10.q': 'ترين السماء ملوّنة وقت المغرب. ماذا تقولين؟',
    'zombie.parent0': 'سمات الخنصر هي الغفلة: أن يمضي الوقت والقلب غائب. وهي أكثر ما يصيبنا جميعًا مع الشاشات، فابدأ بنفسك قدوةً قبل أن تنبّه طفلتك.',
    'zombie.parent1': 'أشِر إلى الخنصر بهدوء وابتسامة، وصِف السلوك لا الطفلة، ثم افتح لها باب الصعود فورًا.',
    'zombie.parent2': 'قل مثلًا: «أرى أن الشاشة أخذتك ساعة، وهذه من سمات الخنصر. تعالي نتوقف دقيقة ونعدّ ثلاث نعم معًا».',
    'zombie.parent3': 'وتجنّب أن تقول: «أنتِ زومبي لا تفهمين شيئًا». الوصف الذي يلتصق بالشخص يغلق الباب، والوصف الذي يصف السلوك يفتحه.',

    /* البنصر */
    'pig-r2.b2': 'سلوك الخنزير يقول: «طعامي لي». وهذه الآية تعلّمنا العكس: أجمل العطاء أن تعطي ما تحبين، لا ما زاد عنك.',
    'pig-r4.b1': 'التمرين له خطوتان. الأولى: «انتظر». حين تشتهين شيئًا، عُدّي إلى عشرة قبل أن تأخذيه.',
    'pig-r4.b2': 'الثانية: «انظر». وأنتِ تعدّين، انظري حولك: هل يحتاج أحد هذا الشيء أكثر مني؟ هل أخذ الجميع؟ هل هناك من هو متعب؟',
    'pig-r4.b3': 'بعد العد، قرري. أحيانًا ستأخذين، وأحيانًا ستعطين. المهم أنكِ صرتِ أنتِ من تقرر، لا رغبتك.',
    'pig-r5.b3': 'والعلاج في القرآن ليس كبت الرغبة بل ترتيبها: ﴿وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ ۝ فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ﴾ (النازعات 79:40-41). النهي هنا قيادة: أنتِ تقودين النفس، لا هي تقودك.',
    'pig-r5.b4': 'تمرين: قبل أي شراء غير ضروري انتظري يومًا كاملًا. وكل أسبوع أعطي شيئًا تحبينه. ولاحظي كيف يخف ضجيج الرغبة كلما مارستِ العطاء.',
    'pig-r6.ask': 'ما الشيء الذي تحبين أن تشاركيه مع صديقتك؟',
    'pig-q3.why': 'العطاء الأجمل أن تعطي ما تحبين، وبه يصعد الإنسان من سمات البنصر.',
    'pig-q4.q': 'بقيت قطعة حلوى واحدة، وأنتِ وأختك تريدانها. ماذا تفعلين؟',
    'pig-q6.q': 'جلستم للأكل من صحن واحد. من أين تأكلين؟',
    'pig-q6.why': '«كُل مما يليك»: تأخذين نصيبك وتتركين لغيرك نصيبهم.',
    'pig-q7.q': 'رأيتِ طعامًا تحبينه على المائدة، ولم يجلس الجميع بعد. ما الخطوة الأولى في التمرين؟',
    'pig-q7.why': '«انتظر ثم انظر»: هكذا تصيرين أنتِ من تقرر لا رغبتك.',
    'pig-q8.q': 'أمك تحمل أكياسًا ثقيلة وأنتِ جالسة تلعبين. ماذا تفعلين؟',
    'pig-q9.q': 'معك كيس حلوى، وأخوك ينظر إليك. ماذا تفعلين؟',
    'pig-q10.q': 'أمك تحمل صحونًا كثيرة إلى المطبخ. ماذا تفعلين؟',
    'pig.parent0': 'سمات البنصر هي التمحور حول الرغبة: «أنا أريد» قبل أن ترى الطفلة غيرها. والطفلة في سنواتها الأولى ترى نفسها أولًا بطبيعتها، فالمطلوب أن نعلّمها أن ترى، لا أن نعيّرها.',
    'pig.parent1': 'أشِر إلى البنصر حين ترى السلوك، ثم ساعدها أن تنظر: إلى وجه أخيها، أو تعب جدتها، أو نصيب غيرها.',
    'pig.parent2': 'قل مثلًا: «أخذ أكبر قطعة قبل الجميع من سمات البنصر. انظري حولك: هل أخذ أخوك؟ ماذا تفعلين الآن؟».',
    'pig.parent3': 'وتجنّب أن تقول: «أنتِ خنزيرة لا تفكرين إلا في بطنك». الطفلة تدافع عن نفسها حين تُوصف هي، وتتعلم حين يُوصف فعلها.',
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
    'monkey.parent3': 'وتجنّب أن تقول وأنت غاضب: «أنتِ قردة لا تسمعين أبدًا». الصراخ على الصراخ يعلّم الصراخ، وكلمة «أبدًا» تغلق باب الصعود.',
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
    'human.parent3': 'وتجنّب أن تقول: «أخيرًا صرتِ إنسانة!». فهي توحي بأنها لم تكن إنسانة قبل ذلك. الطفلة إنسانة كريمة دائمًا، والسلوك هو ما يصعد وينزل.',

    /* الإبهام */
    'sabiq-r2.b2': 'وأمرنا الله بالمسارعة: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ﴾ (آل عمران 3:133). المسارعة ليست ركضًا بالأقدام، بل أن تسبقي نفسك إلى الخير قبل أن تتكاسلي.',
    'sabiq-r3.b4': 'جرّبي هذا الأسبوع: اختاري خلقًا واحدًا من نبي: صبر أيوب، أو صدق يوسف، أو رحمة النبي محمد صلى الله عليه وآله وسلم بالصغار، وطبّقيه يومًا كاملًا.',
    'sabiq-r4.b2': 'الخطة: كل مساء اكتبي عملًا خفيًّا واحدًا ستفعلينه غدًا: ترتيب حذاء أبيك، أو وضع ماء لعطشان، أو دعاء لصديقتك باسمها.',
    'sabiq-r4.b3': 'لا تخبري أحدًا. واكتبي في المساء التالي: هل فعلتُه؟ وماذا شعرتُ؟ هكذا تسبقين نفسك إلى الخير.',
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
          'لم يرضَ النبي صلى الله عليه وآله وسلم أن يُظلم طفل واحد في بيته، ولو بهدية. فالعدل ليس للكبار وحدهم، بل حق لكل صغير أيضًا.',
          'السبابة تعني أن يأخذ كل واحد حقه منك. والقمة أن تحرس العدل حتى في الأشياء الصغيرة: في القسمة، وفي الدور، وفي الكلمة الطيبة.'],
        ar_f: ['عدل النبي صلى الله عليه وآله وسلم ورحمته بالصغار ميزان نزن به أفعالنا.',
          'أعطى بشير بن سعد ابنه النعمان عطية، فقالت أمه: لا أرضى حتى تُشهد رسول الله صلى الله عليه وآله وسلم.',
          'فجاء بشير إلى النبي صلى الله عليه وآله وسلم، فسأله: «أعطيت سائر ولدك مثل هذا؟». قال: لا. فقال: «فاتقوا الله واعدلوا بين أولادكم». فرجع بشير وردّ العطية.',
          'لم يرضَ النبي صلى الله عليه وآله وسلم أن يُظلم طفل واحد في بيته، ولو بهدية. فالعدل ليس للكبار وحدهم، بل حق لكل صغير أيضًا.',
          'السبابة تعني أن يأخذ كل واحد حقه منك. والقمة أن تحرسي العدل حتى في الأشياء الصغيرة: في القسمة، وفي الدور، وفي الكلمة الطيبة.'],
        en: ['The fairness of the Prophet, peace and blessings be upon him and his family, and his mercy to children are a scale for our own deeds.',
          'Bashir ibn Sa\'d gave his son al-Nu\'man a gift, and the boy\'s mother said: I will not be content until you take the Messenger of Allah as witness.',
          'So Bashir came to the Prophet, peace and blessings be upon him and his family, who asked him: "Have you given all your other children the same?" He said no. The Prophet said, meaning: "Then be mindful of Allah and be fair between your children." Bashir went back and took the gift back.',
          'The Prophet would not accept that a single child be treated unfairly at home, even over a present. Fairness is not only for grown-ups; it is every child\'s right too.',
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
        why: { ar: 'أعلى العطاء أن تعطي ما تحتاجه وتحبه، لا ما زاد عنك.', en: 'The highest giving is giving what you need and love, not what you have spare.' } }
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
        why: { ar: 'السابق لا يؤجل الخير، فيسبقه قبل أن يشغله شيء.', en: 'Someone racing to good does not put it off, but gets to it before anything gets in the way.' } },
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
          'كانت حاجتها حقيقية، وطلبها لم يكن خطأ. لكن البيت النبوي تعلّم أن القلب الذي يذكر الله يقوى على التعب، وأن الراحة ليست أول ما يُطلب. هذا عكس سمات البنصر: لا أن نرفض كل راحة، بل ألا نجعل الراحة سيّدتنا.'],
        en: ['Lady Fatima, peace be upon her, ground grain with a hand-mill until it marked her hand. When some captives were brought to the Prophet, peace and blessings be upon him and his family, she went to ask him for a servant to help her, but did not find him.',
          'The Prophet came to them at night, when they had already gone to bed. Ali, peace be upon him, started to get up, and the Prophet said: "Stay where you are." He sat down between them.',
          'Then he said, meaning: "Shall I not teach you something better than what you asked me for?" He taught them to say Allahu akbar thirty-four times, Subhan Allah thirty-three times and al-hamdu lillah thirty-three times at bedtime, and said it was better for them than a servant.',
          'Her need was real, and asking was not wrong. But the Prophet\'s household learned that a heart that remembers Allah grows strong against tiredness, and that comfort is not the first thing to ask for. That is the opposite of the ring-finger trait: not refusing all comfort, but never letting comfort be our master.']
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
          'وهاتان الخصلتان هما عكس سمات الوسطى تمامًا: الاندفاع والعجلة. ولاحظ أن الله «يحبهما»، فالهدوء ليس ضعفًا، بل صفة يحبها الله في عباده.'],
        ar_f: ['جاء وفد من قبيلة عبد القيس إلى المدينة ليلقوا النبي صلى الله عليه وآله وسلم، وكان فيهم رجل يُعرف بأشجّ عبد القيس رضي الله عنه.',
          'فقال له النبي صلى الله عليه وآله وسلم: «إن فيك خصلتين يحبهما الله: الحلم والأناة».',
          'الحلم أن تملكي نفسك حين تغضبين، فلا تسبق يدك ولا لسانك. والأناة أن تتمهلي ولا تستعجلي، فتفكري قبل أن تفعلي.',
          'وهاتان الخصلتان هما عكس سمات الوسطى تمامًا: الاندفاع والعجلة. ولاحظي أن الله «يحبهما»، فالهدوء ليس ضعفًا، بل صفة يحبها الله في عباده.'],
        en: ['A delegation from the tribe of Abd al-Qays came to Madina to meet the Prophet, peace and blessings be upon him and his family. Among them was a man known as al-Ashajj of Abd al-Qays, may Allah be pleased with him.',
          'The Prophet said to him, meaning: "You have two qualities that Allah loves: forbearance and deliberateness."',
          'Forbearance is keeping hold of yourself when you are angry, so neither your hand nor your tongue gets ahead of you. Deliberateness is taking your time instead of rushing, so you think before you act.',
          'These two qualities are the exact opposite of the middle-finger trait: impulsiveness and haste. And notice that Allah "loves" them: calm is not weakness, it is a quality Allah loves in His servants.']
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
      why: { ar: 'ملاحظة الغفلة أول اليقظة، والقلب الحي يرجع.', en: 'Noticing heedlessness is the start of waking, and a living heart comes back.' } }],
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
    end: { ar: "النفس تقول دائمًا: «أنا أولًا». والسباق الحقيقي سباق إلى العطاء، لا إلى الصحن.", en: "The self always says “me first”. The real race is a race to give, not a race to the plate." }
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
  r8.body.ar[3] = 'انتبه حنظلة لغفلته، وهذه أول اليقظة: القلب الحي يلاحظ متى يغيب، ثم يرجع. والمطلوب أن نعود كلما انتبهنا، ساعةً بعد ساعة.';
  r8.body.en[3] = 'Hanzala noticed his own heedlessness, and that is where waking begins: a living heart notices when it drifts, then comes back. What is asked of us is to return whenever we notice, one hour after another.';
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
      'بعد العد، قرر. أحيانًا ستأخذ، وأحيانًا ستعطي. المهم أنك صرت أنت من يقرر، لا رغبتك.'],
    en: ['A practical page. Psychologists have found that being able to delay a want a little is a learnable skill, and that it helps in study, friendship and all of life.',
      'The exercise has two steps. First: "Wait." When you want something, count to ten before taking it.',
      'Second: "Look." While you count, look around: does anyone need this more than me? Has everyone had some? Is anyone tired?',
      'For example: a box of sweets arrives at home, and everyone loves them. You count to ten and look around, and you see your little brother on tiptoe, trying to see inside the box. You give him one first, then take yours. The same sweet, and the decision was yours.',
      'After counting, decide. Sometimes you will take, sometimes you will give. What matters is that you decide, not your craving.']
  };
  r4.body.ar_f = ['صفحة عملية. وجد علماء النفس أن القدرة على تأجيل الرغبة قليلًا مهارة تُتعلَّم، وأنها تساعد الإنسان في الدراسة والصداقة والحياة كلها.',
    'التمرين له خطوتان. الأولى: «انتظر». حين تشتهين شيئًا، عُدّي إلى عشرة قبل أن تأخذيه.',
    'الثانية: «انظر». وأنتِ تعدّين، انظري حولك: هل يحتاج أحد هذا الشيء أكثر مني؟ هل أخذ الجميع؟ هل هناك من هو متعب؟',
    'مثال: وصلت إلى البيت علبة حلوى، والكل يحبها. عددتِ إلى عشرة، ونظرتِ حولك، فرأيتِ أخاكِ الصغير يقف على أطراف أصابعه ليرى ما في العلبة. أعطيتِه أولًا، ثم أخذتِ قطعتك. القطعة نفسها، والقرار قراركِ.',
    'بعد العد، قرري. أحيانًا ستأخذين، وأحيانًا ستعطين. المهم أنكِ صرتِ أنتِ من تقرر، لا رغبتك.'];
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
      'سمات البنصر أن نقول «لي» قبل أن نرى غيرنا. والقمة أن تعطي الشيء الذي تحتاجه أنت، لأنك رأيت حاجة أخيك. وأول الطريق شيء صغير تحبه، تعطيه بوجه راضٍ.'],
    en: ['In the giving of the Prophet, peace and blessings be upon him and his family, we see the picture we walk towards.',
      'A woman brought him a cloak she had woven with her own hands and said: I wove it to clothe you in it. The Prophet, peace and blessings be upon him and his family, took it, needing it, and wore it.',
      'A man among those present saw it on him and said: How beautiful it is! Give it to me to wear. He said, "Yes." Then he folded it and sent it to him.',
      'The people said to the man: The Prophet wore it because he needed it, and then you asked him for it, knowing that he never turns anyone away.',
      'The ring-finger trait is saying "mine" before we see anyone else. The summit is giving the very thing you need, because you saw your brother\'s or sister\'s need. The road starts with one small thing you love, given gladly.']
  };
  r7.body.ar_f = r7.body.ar.slice();
  r7.body.ar_f[4] = 'سمات البنصر أن نقول «لي» قبل أن نرى غيرنا. والقمة أن تعطي الشيء الذي تحتاجينه أنتِ، لأنكِ رأيتِ حاجة أختك. وأول الطريق شيء صغير تحبينه، تعطينه بوجه راضٍ.';
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
  r3.body.ar[3] = 'وهذه الصفات عكس سلوك القرد: هدوء مكان العنف، وسلام مكان الصراخ. جرّب غدًا: إذا قال لك أحد كلمة سيئة في الملعب، قل «سلام» بصوت منخفض، وامشِ بخطوات هادئة، ثم لاحظ ماذا يحدث للشجار.';
  r3.body.en[3] = 'These qualities are the opposite of monkey behaviour: calm in place of roughness, peace in place of shouting. Try it tomorrow: if someone says something nasty to you in the playground, say "peace" in a low voice, walk away with calm steps, and notice what happens to the quarrel.';
  r3.body.ar_f = r3.body.ar.slice();
  r3.body.ar_f[3] = 'وهذه الصفات عكس سلوك القرد: هدوء مكان العنف، وسلام مكان الصراخ. جرّبي غدًا: إذا قال لكِ أحد كلمة سيئة في الملعب، قولي «سلام» بصوت منخفض، وامشي بخطوات هادئة، ثم لاحظي ماذا يحدث للشجار.';
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
  q6.why = { ar: 'الهدوء قوة: تقول «سلام» وتبتعد، وتخبر الكبار إن تكرر.', ar_f: 'الهدوء قوة: تقولين «سلام» وتبتعدين، وتخبرين الكبار إن تكرر.', en: 'Calm is strength: say "peace", walk away, and tell an adult if it happens again.' };

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
  r7.body.ar[4] = 'سمات الوسطى أن يقود الغضب اليد والصوت. وفي القمة قلب يمسك المقود وأثر الجذبة على كتفه، ثم يعطي من جذبه. وأول الطريق إليها: حين يشدّنا أحد من كمّنا، نلتفت إليه بابتسامة قبل أي كلمة.';
  r7.body.en[4] = 'The middle-finger trait is letting anger drive the hand and the voice. At the summit is a heart that holds the wheel with the mark of the tug still on the shoulder, and then gives to the one who tugged. The road there starts small: when someone pulls at our sleeve, we turn to them with a smile before any word.';
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
      'وفي الحديث: «وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن» (سنن الترمذي). الندم على الخطأ أول الطريق، والحسنة بعده هي التي تمحوه.',
      'ويؤيد علم النفس هذا: من يحاسب نفسه برفق ويخطط لما بعد الخطأ يتغير أكثر ممن يجلد نفسه. والحسنة هنا قد تكون صغيرة: أن تطرق باب أخيك وتقول: «كلمة العشاء كانت ثقيلة. آسف».',
      'التمرين: كل مساء دقيقة واحدة، ثلاثة أسئلة: ما الذي أحسنت فيه اليوم فأحمد الله؟ ما الذي قصّرت فيه؟ ما الحسنة التي أُتبعه بها غدًا؟'],
    en: ['Eleven at night, the phone switched off on your chest, and a line you said to your brother at dinner, in front of everyone, keeps coming back. Everyone laughed except him.',
      'The Quran has a name for the voice that replays it: "the self-reproaching soul", and Allah swears by it (al-Qiyama 75:2). It is the self that holds its owner to account when they fall short, and its presence is a sign of life in the heart.',
      'Blame can go two ways. One says: "I\'m bad and I\'ll never change," and leaves you lying heavy until morning. The other says: "I said that, I\'ll put it right, and tomorrow I\'ll do better," and hands you something to do.',
      'A hadith (Sunan al-Tirmidhi) means: follow a bad deed with a good one and it will wipe it out, and treat people with good character. Regret is the start of the road; the good deed after it is what wipes the mistake away.',
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
      'والسبابة أن يأخذ كل واحد حقه منك. والقمة أن تحرس العدل في الأشياء الصغيرة: حين تقسم الكعكة بين إخوتك فتأخذ أنت القطعة الأخيرة، وحين يأتي دور الصغير في اللعبة، وفي الكلمة الطيبة لمن لا يلتفت إليه أحد.'],
    en: ['Al-Nu\'man ibn Bashir, may Allah be pleased with them both, stood on the pulpit as a grown man and told a story from when he was a boy.',
      'He said: my father gave me a gift. My mother, Amra bint Rawaha, may Allah be pleased with her, said: I will not be content until you take the Messenger of Allah, peace and blessings be upon him and his family, as witness.',
      'So his father went to the Prophet, peace and blessings be upon him and his family, who asked him, meaning: "Have you given all your other children the same?" He said no. The Prophet said: "Then be mindful of Allah, and be fair between your children." His father went back and took the gift back.',
      'Al-Nu\'man lost the present that day. Years later he told the story to people from the pulpit: the Prophet, peace and blessings be upon him and his family, wanted every child at home to have their due, even over a single present.',
      'The index finger is everyone getting their due from you. The summit is guarding fairness in small things: when you cut the cake for your brothers and sisters and take the last piece yourself, when it is the little one\'s turn in the game, and in a kind word for the one nobody notices.']
  };
  r7.body.ar_f = r7.body.ar.slice();
  r7.body.ar_f[4] = 'والسبابة أن يأخذ كل واحد حقه منك. والقمة أن تحرسي العدل في الأشياء الصغيرة: حين تقسمين الكعكة بين إخوتك فتأخذين أنتِ القطعة الأخيرة، وحين يأتي دور الصغير في اللعبة، وفي الكلمة الطيبة لمن لا يلتفت إليه أحد.';
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
        'السبت التالي مرضت رنا، وأُلغي توزيع النادي. فاشترت سلمى من مصروفها كيس خبز وعلبة تمر، وأخذت معها أخاها الصغير معاذ يحمل علبة التمر، وصعدا إلى العم صابر بلا ناد ولا كاميرا. المصعد معطّل، والطابق الرابع بعيد.',
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
