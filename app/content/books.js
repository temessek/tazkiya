/* تزكية: كتب المكتبة (books)، مفصولة عن content.js لتخفيف الشاشة الأولى.
 * تُحمَّل عند فتح المكتبة. الشكل: window.AKHLAQ_BOOKS = [ {id, stage, ages, picture?, title, chapters} ].
 * تتبع إصدار المحتوى 0.17.0-draft-2026-11-18.
 */
/* ───────────── الجولة الخامسة عشرة، 18 نوفمبر 2026: كتب الأصابع (books) ─────────────
 * لكل إصبع كتاب قصير من خمسة فصول (200 إلى 300 كلمة)، بشخصيات خيالية ثابتة في الكتاب، للأعمار 9 إلى 14.
 * يصعد الكتاب درجات الإصبع الثلاث وينتهي عند باب الإصبع التالي. لا آية ولا حديث إلا ما سبق التحقق منه في هذا الملف.
 * بعد كل فصل سؤالا فهم بشكل أسئلة الاختبار (id بالشكل book-zombie-c1q1).
 */
(function () {
  window.AKHLAQ_BOOKS = window.AKHLAQ_BOOKS || [];
  window.AKHLAQ_BQ = function (bid, ci, list) {
    return list.map(function (q, k) {
      q.id = 'book-' + bid + '-c' + ci + 'q' + (k + 1); q.type = 'comprehension'; q.readingId = null; return q;
    });
  };
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-zombie', stage: 'zombie', ages: '9-14',
    title: { ar: 'طارق والعينان المغمضتان', en: 'Tariq and the closed eyes' },
    chapters: [
      { title: { ar: 'يوم بلا أثر', en: 'A day that left no mark' },
        body: {
          ar: [
            'في أول يوم من العطلة استيقظ طارق، وهو في الحادية عشرة، ويده تبحث عن الجهاز قبل أن تفتح عيناه جيدًا. كانت أخته هناء، وهي في التاسعة، تنادي من المطبخ: الفطور جاهز! فقال: دقيقة واحدة. ومرّت الدقيقة، ثم مرّت ساعة.',
            'أكل طارق فطوره والجهاز أمامه. لم يعرف هل كان الخبز طريًّا أو يابسًا، ولم ينتبه أن جدته جلست بجانبه وسألته عن نومه. أجاب بكلمة لا معنى لها، وعاد إلى اللعبة.',
            'في الظهر مرّ ابن عمه جاد، وهو في العاشرة، وقال: سنلعب الكرة في الساحة، تعال! رفع طارق إصبعه وقال: بعد هذه الجولة. وحين انتهت الجولة كانت الشمس قد مالت، وكان جاد قد عاد إلى بيته. ولم يتذكر طارق أن جاد كان ينتظره، ولم يسأل عنه، بل بدأ جولة جديدة كأن شيئًا لم يحدث.',
            'وفي المساء جلست الأسرة معًا. سألت الجدة كل واحد: ما أجمل شيء حدث لك اليوم؟ قالت هناء إنها رأت قطة صغيرة تشرب من بركة المطر. وقال الأب إنه سمع ضحكة جاره المريض لأول مرة منذ أسبوع.',
            'ثم نظرت الجدة إلى طارق. فكّر طويلًا، فلم يجد شيئًا. كان اليوم كله قد مرّ، لكنه لم يترك في قلبه أثرًا واحدًا. شعر طارق بشيء غريب، كأن يومه كان ورقة بيضاء لم يُكتب عليها حرف. لم يقل لأحد، لكنه نام تلك الليلة وهو يفكر: أين ذهب يومي؟'
          ],
          en: [
            'On the first day of the holiday Tariq, who was eleven, woke up with his hand already reaching for the tablet before his eyes were properly open. His sister Hana, who was nine, called from the kitchen: breakfast is ready! He said: one minute. The minute passed, and then an hour.',
            'Tariq ate breakfast with the tablet in front of him. He could not have said whether the bread was soft or stale, and he did not notice that his grandmother had sat down next to him and asked how he had slept. He gave a one-word answer that meant nothing and went back to the game.',
            'At midday his cousin Jad, who was ten, came by and said: we are playing football in the square, come on! Tariq held up a finger and said: after this round. When the round ended the sun was low, and Jad had gone home. Tariq did not remember that Jad had been waiting for him, and did not ask about him; he just started a new round as if nothing had happened.',
            'In the evening the family sat together. Grandmother asked each of them: what was the loveliest thing that happened to you today? Hana said she had seen a little kitten drinking from a rain puddle. Father said he had heard his sick neighbour laugh for the first time in a week.',
            'Then Grandmother looked at Tariq. He thought for a long time and found nothing. The whole day had passed, yet it had not left a single mark on his heart. Tariq felt something strange, as if his day had been a blank page with not one letter written on it. He told no one, but he fell asleep that night wondering: where did my day go?'
          ]
        },
        quiz: Q('zombie', 1, [
          { correct: 1, q: { ar: 'لماذا لم يلعب طارق الكرة مع جاد؟', en: 'Why did Tariq not play football with Jad?' },
            options: [{ ar: 'لأنه كان مريضًا', en: 'Because he was ill' }, { ar: 'لأنه قال «بعد هذه الجولة» حتى ذهب جاد', en: 'Because he kept saying "after this round" until Jad left' }, { ar: 'لأن الساحة كانت مغلقة', en: 'Because the square was closed' }],
            why: { ar: 'الجهاز أخذ وقته دون أن يشعر، وهذه من سمات الخنصر.', en: 'The screen took his time without him noticing: a little-finger trait.' } },
          { correct: 0, q: { ar: 'بماذا شعر طارق حين سألته جدته عن أجمل شيء في يومه؟', en: 'How did Tariq feel when his grandmother asked about the loveliest thing in his day?' },
            options: [{ ar: 'أن يومه كان ورقة بيضاء بلا أثر', en: 'That his day had been a blank page with no mark' }, { ar: 'أنه كان أسعد يوم في حياته', en: 'That it had been the happiest day of his life' }, { ar: 'أنه لم يسمع السؤال', en: 'That he had not heard the question' }],
            why: { ar: 'القلب الغائب لا يحفظ من اليوم شيئًا.', en: 'An absent heart keeps nothing from the day.' } }
        ]) },

      { title: { ar: 'صوت بعيد', en: 'A far-away voice' },
        body: {
          ar: [
            'في صباح اليوم التالي قالت الجدة لطارق بهدوء: يا طارق، لاحظتُ أن الجهاز يأخذك من الناس. جرّب أن تضعه في غرفة أخرى وقت الطعام. قال طارق: حسنًا يا جدتي. وقالها بسرعة، كما يقول المرء كلمة لا يقصدها.',
            'وفي الغداء كان الجهاز بجانب صحنه كالعادة. نسي طارق كلام جدته كأنه لم يسمعه. كانت النصيحة قد وصلت إلى أذنه، ووقفت هناك، ولم تدخل إلى قلبه. كانت مثل صوت بعيد يأتي من وراء نافذة مغلقة.',
            'وفي العصر جاءت لينا، صديقة هناء، تحمل علبة ألوان جديدة. أرادت أن تريها لطارق لأنه يحب الرسم. وقفت عند باب غرفته وقالت: انظر يا طارق! قال: جميل، دون أن يرفع عينيه. فوقفت لينا قليلًا، ثم مضت. وفي الطريق قالت لهناء بصوت منخفض: أخوك لا يراني. وسمع طارق جملتها من بعيد، كما يسمع كل شيء هذه الأيام، ثم عاد إلى الشاشة.',
            'وقبل النوم سقطت هناء في الممر، لأن سلك الشاحن كان ممدودًا على الأرض. لم تتأذّ كثيرًا، لكنها بكت. وتذكّر طارق فجأة أن أباه قال له: لا تترك السلك في الممر. قالها أمس، وقالها قبل أمس، وقالها في الصباح.',
            'جلس طارق على طرف سريره، وقال لنفسه: أنا لا أكره النصيحة. لكن لماذا لا تبقى عندي؟ كان هذا أول سؤال حقيقي يسأله لنفسه منذ أيام. ولم يعرف بعد أن السؤال نفسه كان أول شقّ في النافذة المغلقة.'
          ],
          en: [
            'The next morning Grandmother said to Tariq quietly: Tariq, I have noticed the tablet takes you away from people. Try putting it in another room at mealtimes. Tariq said: okay, Grandma. He said it quickly, the way people say a word they do not really mean.',
            'At lunch the tablet was beside his plate as usual. Tariq had forgotten his grandmother\'s words as if he had never heard them. The advice had reached his ear and stopped there, never getting as far as his heart, like a far-away voice behind a closed window.',
            'In the afternoon Lina, Hana\'s friend, came over with a new box of colours. She wanted to show Tariq, because he loved drawing. She stood at his door and said: look, Tariq! He said: nice, without lifting his eyes. Lina stood there a little longer, then left. On the way out she said to Hana quietly: your brother doesn\'t see me. Tariq heard her faintly, the way he heard everything these days, and went back to the screen.',
            'Before bed Hana tripped in the hallway, because the charger cable was stretched across the floor. She was not badly hurt, but she cried. Tariq suddenly remembered his father saying: don\'t leave the cable in the hallway. He had said it yesterday, and the day before, and again that morning.',
            'Tariq sat on the edge of his bed and said to himself: I don\'t hate advice. So why doesn\'t it stay with me? It was the first real question he had asked himself in days. He did not know yet that the question itself was the first crack in the closed window.'
          ]
        },
        quiz: Q('zombie', 2, [
          { correct: 2, q: { ar: 'لماذا بقي الجهاز بجانب صحن طارق مع أنه قال «حسنًا»؟', en: 'Why was the tablet still beside Tariq\'s plate even though he had said "okay"?' },
            options: [{ ar: 'لأنه أراد أن يغضب جدته', en: 'Because he wanted to upset his grandmother' }, { ar: 'لأن جدته غيّرت رأيها', en: 'Because his grandmother changed her mind' }, { ar: 'لأن النصيحة وصلت إلى أذنه ولم تدخل قلبه', en: 'Because the advice reached his ear but not his heart' }],
            why: { ar: 'هذه سمة «الأذن المغلقة»: تصل النصيحة ولا تدخل القلب.', en: 'This is the «closed ear» trait: the advice arrives but does not reach the heart.' } },
          { correct: 0, q: { ar: 'ما «أول شق في النافذة المغلقة»؟', en: 'What was "the first crack in the closed window"?' },
            options: [{ ar: 'سؤال طارق لنفسه: لماذا لا تبقى النصيحة عندي؟', en: 'Tariq asking himself: why doesn\'t advice stay with me?' }, { ar: 'سقوط هناء في الممر', en: 'Hana tripping in the hallway' }, { ar: 'علبة الألوان الجديدة', en: 'The new box of colours' }],
            why: { ar: 'اليقظة تبدأ بسؤال صادق للنفس.', en: 'Waking begins with an honest question to oneself.' } }
        ]) },

      { title: { ar: 'حين انطفأت الكهرباء', en: 'When the power went out' },
        body: {
          ar: [
            'ثم جاءت الليلة الثالثة، فانقطعت الكهرباء عن الحي كله. انطفأت الشاشة في يد طارق في منتصف الجولة، وانطفأ معها كل ضوء في البيت. قال طارق بضيق: لا! كنت على وشك الفوز! وبحث عن مصباح الهاتف، فوجد البطارية فارغة، فجلس في الظلام لا يعرف ماذا يفعل بيديه.',
            'أشعلت الجدة شمعة ووضعتها في وسط الغرفة. وجلس الجميع حولها، لأنه لم يكن هناك شيء آخر يفعلونه. وفي الصمت سمع طارق أصواتًا لم يكن يسمعها: صرصورًا يغني في الحديقة، وريحًا خفيفة تحرك الستارة، وأنفاس أخته الهادئة.',
            'نظر طارق إلى وجه جدته في ضوء الشمعة. رأى تجاعيد حول عينيها لم يلاحظها من قبل، ورأى يديها ترتجفان قليلًا وهي تمسك كوب الشاي. فسأل فجأة: يا جدتي، هل أنتِ متعبة؟ فابتسمت وقالت: قليلًا يا بني. ركبتي تؤلمني منذ أيام.',
            'منذ أيام! قالها طارق في نفسه. كانت جدته تتألم منذ أيام، وكان هو يجلس بجانبها كل يوم ولا يرى. شعر بشيء يتحرك في صدره، كأن قلبه تقلّب في نومه وبدأ يفتح عينيه.',
            'وحين عادت الكهرباء بعد ساعة، قفزت هناء فرحًا، وأضاءت الشاشة على الطاولة: «أكمل الجولة؟». نظر طارق إليها طويلًا، وسأل نفسه سؤالًا جديدًا: لماذا أفعل هذا كل يوم؟ وماذا أفوّت وأنا أفعله؟ لم يجد الجواب كاملًا. قلب الجهاز على وجهه، والتفت إلى جدته وقال: يا جدتي، حين كنتِ في عمري، ماذا كنتم تفعلون في الليل؟ فضحكت، وبدأت تحكي، ولم ينتبه أحد منهما أن الشمعة ما زالت مشتعلة.'
          ],
          en: [
            'On the third evening the power went out across the whole neighbourhood. The screen in Tariq\'s hand went dark in the middle of a round, and every light in the house went out with it. Tariq said crossly: no! I was about to win! He looked for his phone torch and found the battery empty, so he sat in the dark not knowing what to do with his hands.',
            'Grandmother lit a candle and put it in the middle of the room. Everyone sat around it, because there was nothing else to do. In the silence Tariq heard sounds he had not been hearing: a cricket singing in the garden, a light wind moving the curtain, his sister\'s calm breathing.',
            'Tariq looked at his grandmother\'s face in the candlelight. He saw lines around her eyes he had never noticed, and saw her hands tremble a little as she held her cup of tea. He asked suddenly: Grandma, are you tired? She smiled and said: a little, my son. My knee has been hurting for days.',
            'For days! Tariq said to himself. His grandmother had been in pain for days, and he had sat beside her every day without seeing. He felt something stir in his chest, as if his heart had turned over in its sleep and begun to open its eyes.',
            'When the power came back an hour later, Hana jumped for joy, and the screen on the table lit up: "Continue round?" Tariq looked at it for a long time and asked himself a new question: why do I do this every day? And what am I missing while I do it? He did not find the whole answer. He turned the tablet face down, turned to his grandmother and said: Grandma, when you were my age, what did you do in the evenings? She laughed and began to tell him, and neither of them noticed that the candle was still burning.'
          ]
        },
        quiz: Q('zombie', 3, [
          { correct: 1, q: { ar: 'ماذا لاحظ طارق في ضوء الشمعة ولم يكن يلاحظه من قبل؟', en: 'What did Tariq notice in the candlelight that he had not noticed before?' },
            options: [{ ar: 'أن هناء تخاف من الظلام', en: 'That Hana was afraid of the dark' }, { ar: 'تعب جدته وألم ركبتها', en: 'His grandmother\'s tiredness and her painful knee' }, { ar: 'أن الشمعة توشك أن تنطفئ', en: 'That the candle was about to go out' }],
            why: { ar: 'حين هدأت الشاشة، صار القلب يرى.', en: 'When the screen went quiet, the heart began to see.' } },
          { correct: 2, q: { ar: 'ماذا فعل طارق حين أضاءت الشاشة من جديد؟', en: 'What did Tariq do when the screen lit up again?' },
            options: [{ ar: 'أكمل الجولة التي كاد يفوز بها', en: 'Finished the round he had nearly won' }, { ar: 'أعطى الجهاز لهناء لتلعب به', en: 'Gave the tablet to Hana to play with' }, { ar: 'قلب الجهاز على وجهه وسأل جدته عن أيام صغرها', en: 'Turned the tablet face down and asked his grandmother about her childhood' }],
            why: { ar: 'سأل نفسه: لماذا أفعل هذا؟ ثم اختار جدته. وهذه الدرجة الثالثة في الخنصر: أستيقظ أحيانًا وأسأل لماذا.', en: 'He asked himself why he did it, then chose his grandmother. That is the third little-finger degree: sometimes I wake and ask why.' } }
        ]) },

      { title: { ar: 'الحي والميت', en: 'The living and the dead' },
        body: {
          ar: [
            'في الصباح جلس طارق بجانب جدته وقال: يا جدتي، أشعر أنني كنت نائمًا وأنا مستيقظ. فوضعت يدها على رأسه وقالت: هذا كلام من بدأ يستيقظ حقًّا. ثم أخبرته أن النبي صلى الله عليه وآله وسلم قال: «مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لَا يَذْكُرُ مَثَلُ الْحَيِّ وَالْمَيِّتِ».',
            'قال طارق متعجبًا: الميت؟ لكن الذي لا يذكر الله يمشي ويأكل ويلعب! قالت الجدة: نعم، جسده حي. لكن قلبه نائم، فلا يرى ولا يسمع ولا يشكر. أما الذي يذكر الله، فقلبه حي، يرى النعمة ويرى الناس.',
            'وقرأت له آية من سورة الحديد: ﴿أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَنْ تَخْشَعَ قُلُوبُهُمْ لِذِكْرِ اللَّهِ﴾ (الحديد 57:16). وقالت: كأن الله يسألنا برحمة: أما آن الوقت لتستيقظ القلوب؟',
            'ثم علّمته تمرينًا صغيرًا سمّته «الدقيقة الحاضرة»: يتوقف دقيقة، فيذكر ثلاثة أشياء يراها، وشيئين يسمعهما، ونعمة واحدة يشكر الله عليها. جرّبه طارق فورًا. رأى الشمس على الجدار، وكوب الشاي، ويد جدته. وسمع العصافير وصوت هناء. وقال: الحمد لله على جدتي.',
            'واتفق طارق مع نفسه على شيء صغير: أن يقول «الحمد لله» كل صباح قبل أن يلمس الجهاز، وأن يفعل الدقيقة الحاضرة قبل النوم. وكتب «الحمد لله» على ورقة صغيرة، وألصقها على ظهر الجهاز. وفي صباح اليوم الرابع نسي، وفتح اللعبة مباشرة. وبعد جولتين قلب الجهاز ليشحنه، فرأى الورقة. ضحك وحده، وقالها متأخرًا، ثم وضع الجهاز جانبًا. ورأته جدته من باب المطبخ، فقالت: المهم أنك رجعت.'
          ],
          en: [
            'In the morning Tariq sat beside his grandmother and said: Grandma, I feel as if I have been asleep while I was awake. She put her hand on his head and said: that is what someone who is truly starting to wake would say. Then she told him that the Prophet, peace and blessings be upon him and his family, said, meaning: "The one who remembers his Lord and the one who does not are like the living and the dead."',
            'Tariq said in surprise: dead? But someone who doesn\'t remember Allah still walks and eats and plays! Grandmother said: yes, his body is alive. But his heart is asleep, so it does not see or hear or give thanks. The one who remembers Allah has a living heart that sees blessings and sees people.',
            'And she recited a verse from Surat al-Hadid, meaning: "Has the time not come for the hearts of those who believe to be humbled at the remembrance of Allah?" (al-Hadid 57:16). She said: it is as if Allah is asking us, with mercy: isn\'t it time for hearts to wake up?',
            'Then she taught him a small exercise she called "the present minute": stop for one minute, name three things you see, two things you hear, and one blessing to thank Allah for. Tariq tried it at once. He saw the sun on the wall, the cup of tea, and his grandmother\'s hand. He heard the sparrows and Hana\'s voice. And he said: al-hamdu lillah for my grandmother.',
            'Tariq made a small agreement with himself: to say "al-hamdu lillah" every morning before touching the tablet, and to do the present minute before sleep. He wrote "al-hamdu lillah" on a little slip of paper and stuck it on the back of the tablet. On the fourth morning he forgot and went straight into the game. Two rounds later he turned the tablet over to charge it and saw the slip. He laughed to himself, said it late, and put the tablet aside. His grandmother, watching from the kitchen door, said: what matters is that you came back.'
          ]
        },
        quiz: Q('zombie', 4, [
          { correct: 0, q: { ar: 'لماذا شبّه الحديث الذي لا يذكر الله بالميت؟', en: 'Why does the hadith compare the one who does not remember Allah to the dead?' },
            options: [{ ar: 'لأن قلبه نائم لا يرى ولا يشكر، وإن كان جسده حيًّا', en: 'Because his heart is asleep and neither sees nor thanks, even though his body is alive' }, { ar: 'لأن جسده ضعيف ومريض', en: 'Because his body is weak and ill' }, { ar: 'لأنه يقضي وقته وحده', en: 'Because he spends his time alone' }],
            why: { ar: 'الحياة الحقيقية حياة القلب بذكر الله.', en: 'True life is the life of the heart through remembrance of Allah.' } },
          { correct: 1, q: { ar: 'ماذا فعل طارق في الصباح الذي نسي فيه اتفاقه مع نفسه؟', en: 'What did Tariq do on the morning he forgot his agreement with himself?' },
            options: [{ ar: 'نزع الورقة عن الجهاز لأنه نسي', en: 'Pulled the slip off the tablet because he had forgotten' }, { ar: 'رأى الورقة، فقالها متأخرًا ووضع الجهاز جانبًا', en: 'Saw the slip, said it late and put the tablet aside' }, { ar: 'انتظر حتى ذكّرته جدته', en: 'Waited until his grandmother reminded him' }],
            why: { ar: 'القلب الحي ينسى أحيانًا، ثم يرجع.', en: 'A living heart sometimes forgets, and then comes back.' } }
        ]) },

      { title: { ar: 'عينان تريان', en: 'Eyes that see' },
        body: {
          ar: [
            'بعد أسبوعين لاحظت هناء أن أخاها تغيّر. صار ينظر إلى الناس حين يكلمونه، وصار يضحك من النكتة في وقتها، لا بعدها بدقيقة. وفي يوم قالت له: يا طارق، صرتَ تسمعني! فضحك وقال: كنت أسمعك من قبل، لكنني الآن أنتبه.',
            'وفي عصر يوم جاء جاد إلى الساحة وحده، وجلس على الدرج صامتًا. كان الأولاد يلعبون، ولم ينتبه له أحد. أما طارق فرآه من النافذة. لاحظ كتفيه المنخفضتين، ولاحظ أنه لم يحمل الكرة كعادته.',
            'نزل طارق وجلس بجانبه وسأله: ما بك؟ فقال جاد بعد صمت: أبي سافر للعمل، ولن يعود قبل شهرين. لم يعرف طارق ماذا يقول، فجلس معه فقط، ثم قال: تعال نلعب معًا كل يوم بعد العصر، حتى يعود. فابتسم جاد لأول مرة ذلك اليوم. ولعبا حتى أذان المغرب، ونسي جاد حزنه قليلًا، ونسي طارق الجهاز كله.',
            'وفي المساء رأى طارق جدته تحاول أن تنحني لتلتقط شيئًا سقط تحت الكرسي، وركبتها تؤلمها. فأسرع والتقطه لها قبل أن تطلب. قالت: بارك الله فيك يا بني، من أين صرتَ ترى كل هذا؟',
            'وعلى العشاء دار صحن الحلوى، فوصل إلى طارق أولًا. امتدت يده إلى أكبر قطعة كعادتها، ثم وقفت في الهواء. رأى جاد، وقد بقي معهم للعشاء، ينظر إلى الصحن، ورأى هناء تنتظر دورها، ورأى يده هو، لأول مرة، وهي تسبق الجميع. وبقي طارق لحظة لا يعرف ماذا يفعل بهذه اليد التي صار يراها.'
          ],
          en: [
            'Two weeks later Hana noticed her brother had changed. He looked at people when they spoke to him, and laughed at a joke at the right moment, not a minute later. One day she said: Tariq, you actually hear me now! He laughed and said: I heard you before, but now I pay attention.',
            'One afternoon Jad came to the square alone and sat on the steps in silence. The boys were playing, and nobody noticed him. But Tariq saw him from the window. He noticed his drooping shoulders, and noticed that he had not brought the ball as he usually did.',
            'Tariq went down and sat beside him and asked: what\'s wrong? After a silence Jad said: my dad has gone abroad for work, and won\'t be back for two months. Tariq did not know what to say, so he just sat with him, then said: let\'s play together every day after the afternoon prayer until he comes back. Jad smiled for the first time that day. They played until the sunset call to prayer; Jad forgot his sadness a little, and Tariq forgot the tablet altogether.',
            'In the evening Tariq saw his grandmother trying to bend down for something that had fallen under the chair, her knee hurting. He hurried and picked it up for her before she could ask. She said: may Allah bless you, my son. Since when do you see all this?',
            'At dinner the plate of sweets went round and reached Tariq first. His hand went for the biggest piece, as it always did, then stopped in mid-air. He saw Jad, who had stayed for dinner, looking at the plate; he saw Hana waiting her turn; and for the first time he saw his own hand reaching ahead of everyone. Tariq sat for a moment, not knowing what to do with this hand he could now see.'
          ]
        },
        quiz: Q('zombie', 5, [
          { correct: 2, q: { ar: 'كيف عرف طارق أن جاد حزين؟', en: 'How did Tariq know Jad was sad?' },
            options: [{ ar: 'أخبرته هناء', en: 'Hana told him' }, { ar: 'أرسل له جاد رسالة', en: 'Jad sent him a message' }, { ar: 'لاحظ كتفيه المنخفضتين وأنه لم يحمل الكرة', en: 'He noticed his drooping shoulders and that he had not brought the ball' }],
            why: { ar: 'القلب اليقظ يرى ما لا يُقال.', en: 'A wakeful heart sees what is not said.' } },
          { correct: 1, q: { ar: 'ماذا رأى طارق لأول مرة حين وصل إليه صحن الحلوى؟', en: 'What did Tariq see for the first time when the plate of sweets reached him?' },
            options: [{ ar: 'أن الحلوى لا تكفي الجميع', en: 'That there were not enough sweets for everyone' }, { ar: 'يده هو وهي تمتد إلى أكبر قطعة قبل الجميع', en: 'His own hand reaching for the biggest piece ahead of everyone' }, { ar: 'أن جاد لا يحب الحلوى', en: 'That Jad did not like sweets' }],
            why: { ar: 'العين اليقظة ترى الناس، ثم ترى صاحبها. ورغبته في أن يأخذ أولًا هي باب البنصر.', en: 'Waking eyes see other people, then see their owner. His wish to take first is the door to the ring finger.' } }
        ]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-pig', stage: 'pig', ages: '9-14',
    title: { ar: 'كريم وصحن الوسط', en: 'Karim and the plate in the middle' },
    chapters: [
      { title: { ar: 'أكبر قطعة', en: 'The biggest piece' },
        body: {
          ar: [
            'كان كريم في الثانية عشرة، وكان يعرف كل شيء عن الطعام في بيته: متى يخرج الخبز من الفرن، وأين تخبئ أمه الحلوى، وأي كرسي على المائدة يجلس عليه فيصل إلى الصحن أولًا. وكانت أخته داليا، وهي في العاشرة، تقول عنه ضاحكة: كريم يسبق الجميع إلى المطبخ، ولا يسبق أحدًا إلى غيره.',
            'في ليلة الجمعة صنعت الأم فطيرة كبيرة وقطّعتها ثماني قطع، ووضعتها في وسط المائدة. قبل أن يجلس الأب، مدّ كريم يده وأخذ أكبر قطعة، ثم أخذ قطعة ثانية ووضعها في صحنه احتياطًا.',
            'جاء أخوه الصغير أنس، وهو في الخامسة، فوجد القطع الباقية صغيرة. وجاءت داليا فوجدت قطعة محروقة الطرف. لم تقل شيئًا، لكنها نظرت إلى صحن كريم نظرة طويلة. وأما أنس فمدّ يده إلى قطعة كريم الثانية، فأبعدها كريم عنه وقال: هذه لي، خذ من الصحن.',
            'وفي آخر العشاء دخلت الأم وقد أنهت غسل القدور، فلم تجد لنفسها إلا الفتات. ابتسمت وقالت: لا بأس، لست جائعة. وصدّقها كريم، لأنه لم يرفع عينيه عن صحنه أصلًا.',
            'وقبل النوم قالت له داليا: هل لاحظت أن أمي لم تأكل؟ قال: قالت إنها ليست جائعة. قالت داليا: هي دائمًا تقول ذلك. سكت كريم، ثم أطفأ النور. لم يكن يقصد أن يؤذي أحدًا، لكنه كان يرى رغبته فقط، كأن العالم كله صحن واحد أمامه.'
          ],
          en: [
            'Karim was twelve, and he knew everything about food in his house: when the bread came out of the oven, where his mother hid the sweets, and which chair at the table got him to the plate first. His sister Dalia, who was ten, used to say laughing: Karim beats everyone to the kitchen, and beats no one to anything else.',
            'On Thursday night their mother made a big pie, cut it into eight pieces and put it in the middle of the table. Before their father had sat down, Karim reached out and took the biggest piece, then took a second one and put it on his plate just in case.',
            'His little brother Anas, who was five, came and found only small pieces left. Dalia came and found a piece with a burnt edge. She said nothing, but she gave Karim\'s plate a long look. Anas reached for Karim\'s second piece, but Karim pulled it away and said: that\'s mine, take from the plate.',
            'At the end of dinner their mother came in, having finished washing the pots, and found only crumbs for herself. She smiled and said: never mind, I\'m not hungry. Karim believed her, because he had not lifted his eyes from his plate at all.',
            'Before bed Dalia said to him: did you notice Mum didn\'t eat? He said: she said she wasn\'t hungry. Dalia said: she always says that. Karim was quiet, then turned off the light. He had not meant to hurt anyone, but he saw only what he wanted, as if the whole world were one plate in front of him.'
          ]
        },
        quiz: Q('pig', 1, [
          { correct: 2, q: { ar: 'ماذا فعل كريم قبل أن يجلس الأب إلى المائدة؟', en: 'What did Karim do before his father sat down at the table?' },
            options: [{ ar: 'ساعد أمه في المطبخ', en: 'Helped his mother in the kitchen' }, { ar: 'انتظر الجميع', en: 'Waited for everyone' }, { ar: 'أخذ أكبر قطعة ثم قطعة ثانية', en: 'Took the biggest piece and then a second one' }],
            why: { ar: 'هذه الدرجة الأولى في البنصر: «أنا أولًا» دائمًا.', en: 'This is the first ring-finger degree: "me first", always.' } },
          { correct: 0, q: { ar: 'لماذا صدّق كريم أن أمه ليست جائعة؟', en: 'Why did Karim believe his mother was not hungry?' },
            options: [{ ar: 'لأنه لم يرفع عينيه عن صحنه ليرى حالها', en: 'Because he never lifted his eyes from his plate to see how she was' }, { ar: 'لأنها أكلت قبلهم', en: 'Because she had eaten before them' }, { ar: 'لأن داليا أخبرته', en: 'Because Dalia told him' }],
            why: { ar: 'من يرى رغبته فقط لا يرى تعب غيره.', en: 'Someone who sees only their own wants does not see others\' tiredness.' } }
        ]) },

      { title: { ar: 'حين يذكّره أحد', en: 'When someone reminds him' },
        body: {
          ar: [
            'في يوم السبت جاءت الخالة سعاد من السوق، تحمل أكياسًا ثقيلة في يديها، وتمشي ببطء لأن ظهرها يؤلمها. كان كريم جالسًا على الأريكة في المكان الذي يحبه، قرب المروحة، يقرأ مجلة الرسوم.',
            'دخلت الخالة ووضعت الأكياس على الأرض وتنفست بصعوبة. ولم يتحرك كريم. لم يكن قاسيًا، لكنه كان مشغولًا بصفحته، ولم يخطر له أن هذا المشهد يخصّه. كان يرى الأكياس ويرى خالته، لكن الصورة كانت تمر أمامه كما تمر صورة في التلفاز، لا تطلب منه شيئًا.',
            'فقالت أمه من المطبخ: يا كريم، خالتك متعبة، احمل عنها الأكياس، وقم لها عن مكانك. فقام كريم فورًا، وحمل الأكياس إلى المطبخ، وأجلس خالته في مكانه قرب المروحة. فقالت: بارك الله فيك يا حبيبي، ومسحت على رأسه.',
            'فرح كريم بالدعاء، وشعر أنه فعل شيئًا جميلًا. لكن داليا قالت له بعد ذلك: أنت ولد طيب، لكنك لا ترى وحدك. لو لم تقل أمي، لبقيت جالسًا. غضب كريم قليلًا من كلامها، ثم سكت لأنه عرف أنه صحيح.',
            'في تلك الليلة سأل نفسه: لماذا أحتاج دائمًا إلى من يقول لي؟ عيناي تعملان جيدًا. ثم فهم أن العين ترى الأشياء، لكن القلب هو الذي يقرر أن ينظر. وكان قلبه حتى الآن ينظر إلى ما يريده هو. فقرر أن يجرّب شيئًا جديدًا: أن ينظر إلى الوجوه، لا إلى الصحون فقط.'
          ],
          en: [
            'On Saturday Aunt Su\'ad came back from the market carrying heavy bags in both hands, walking slowly because her back hurt. Karim was sitting on the sofa in his favourite spot by the fan, reading a comic.',
            'His aunt came in, put the bags on the floor and breathed with difficulty. Karim did not move. He was not being unkind; he was busy with his page, and it did not cross his mind that this scene had anything to do with him. He saw the bags and he saw his aunt, but the picture passed in front of him like a picture on television, asking nothing of him.',
            'His mother called from the kitchen: Karim, your aunt is tired, carry the bags for her and give her your seat. Karim got up at once, carried the bags to the kitchen, and sat his aunt down in his spot by the fan. She said: may Allah bless you, dear, and stroked his head.',
            'Karim was pleased by the du\'a and felt he had done something lovely. But Dalia said to him afterwards: you\'re a good boy, but you don\'t see on your own. If Mum hadn\'t said anything, you\'d still be sitting there. Karim was a little annoyed by what she said, then fell quiet, because he knew it was true.',
            'That night he asked himself: why do I always need someone to tell me? My eyes work fine. Then he understood that the eye sees things, but it is the heart that decides to look. Until now his heart had looked at what he wanted. So he decided to try something new: to look at faces, not only at plates.'
          ]
        },
        quiz: Q('pig', 2, [
          { correct: 1, q: { ar: 'متى قام كريم لمساعدة خالته؟', en: 'When did Karim get up to help his aunt?' },
            options: [{ ar: 'حين رآها عند الباب', en: 'When he saw her at the door' }, { ar: 'حين قالت له أمه', en: 'When his mother told him to' }, { ar: 'لم يقم أبدًا', en: 'He never got up' }],
            why: { ar: 'هذه سمة «الكسل»: نجلس مرتاحين، ولا نرى تعب غيرنا حتى يذكّرنا أحد.', en: 'This is the «laziness» trait: we sit comfortably and do not see others getting tired until someone reminds us.' } },
          { correct: 2, q: { ar: 'ماذا قرر كريم أن يجرّب بعد كلام داليا؟', en: 'What did Karim decide to try after Dalia spoke to him?' },
            options: [{ ar: 'أن يجلس بعيدًا عن المروحة', en: 'To sit away from the fan' }, { ar: 'أن يغضب من أخته', en: 'To be angry with his sister' }, { ar: 'أن ينظر إلى الوجوه، لا إلى الصحون فقط', en: 'To look at faces, not only at plates' }],
            why: { ar: 'العين ترى، والقلب يقرر أن ينظر.', en: 'The eye sees; the heart decides to look.' } }
        ]) },

      { title: { ar: 'انتظر ثم انظر', en: 'Wait, then look' },
        body: {
          ar: [
            'في الأسبوع التالي جاء جدهم لزيارتهم، وكان يحب أن يحكي لهم القصص بعد العشاء. وحين رأى كريم يمدّ يده إلى صحن الأرز قبل الجميع، ابتسم وقال: سأحكي لكم قصة صبي صغير كان يأكل مع النبي صلى الله عليه وآله وسلم.',
            'قال الجد: كانت يد الصبي تطيش في الصحن، تذهب هنا وهناك تبحث عن أطيب اللقم. فقال له النبي صلى الله عليه وآله وسلم برفق: «يَا غُلَامُ، سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ». ثلاث كلمات تعلّم أدب الطعام كله.',
            'سأل أنس الصغير: ماذا يعني «مما يليك»؟ قال الجد: يعني الطرف القريب منك. لا تمد يدك إلى نصيب أخيك. خذ نصيبك، واترك لغيرك نصيبه. ثم نظر إلى كريم وغمز له، فضحك الجميع، وضحك كريم معهم وهو يشعر بالخجل.',
            'ثم علّمهم الجد لعبة سمّاها «انتظر ثم انظر»: حين تشتهي شيئًا، عُدّ إلى عشرة قبل أن تأخذه. وفي أثناء العد انظر حولك: هل أخذ الجميع؟ هل هناك من هو أتعب منك أو أجوع؟ ثم قرر.',
            'في اليوم التالي، حين وُضع صحن الفاكهة في الوسط، عدّ كريم في نفسه: واحد، اثنان، ثلاثة... ونظر. رأى أن أنس لا يصل إلى الصحن، فقرّبه إليه. ورأى أن أمه لم تجلس بعد، فترك لها أكبر برتقالة. شعر كريم بشيء غريب: لم يأكل أكثر، لكنه كان أسعد. ونظرت إليه أمه نظرة لم يرها منذ زمن.'
          ],
          en: [
            'The next week their grandfather came to visit, and he loved telling them stories after dinner. When he saw Karim reaching for the rice before everyone else, he smiled and said: I\'ll tell you the story of a little boy who was eating with the Prophet, peace and blessings be upon him and his family.',
            'Grandfather said: the boy\'s hand wandered all over the dish, here and there, looking for the tastiest bites. So the Prophet said to him gently, meaning: "Young man, say Allah\'s name, eat with your right hand, and eat from what is in front of you." Three short sayings that teach all the manners of eating.',
            'Little Anas asked: what does "from what is in front of you" mean? Grandfather said: it means the side nearest you. Don\'t reach into your brother\'s share. Take your share and leave others theirs. Then he looked at Karim and winked, and everyone laughed, and Karim laughed with them, feeling embarrassed.',
            'Then Grandfather taught them a game he called "wait, then look": when you want something, count to ten before you take it. While you count, look around: has everyone had some? Is anyone more tired or hungrier than you? Then decide.',
            'The next day, when the fruit bowl was put in the middle, Karim counted to himself: one, two, three... and looked. He saw that Anas couldn\'t reach the bowl, so he moved it closer to him. He saw that his mother had not sat down yet, so he left her the biggest orange. Karim felt something strange: he had not eaten more, but he was happier. And his mother gave him a look he had not seen in a long time.'
          ]
        },
        quiz: Q('pig', 3, [
          { correct: 0, q: { ar: 'ما معنى «كُل مما يليك» كما شرحه الجد؟', en: 'What does "eat from what is in front of you" mean, as Grandfather explained it?' },
            options: [{ ar: 'أن تأخذ نصيبك من الطرف القريب، وتترك لغيرك نصيبه', en: 'Take your share from the side nearest you and leave others theirs' }, { ar: 'أن تأكل بسرعة', en: 'Eat quickly' }, { ar: 'أن تأكل أطيب اللقم أولًا', en: 'Eat the tastiest bites first' }],
            why: { ar: 'أدب الطعام يعلّم أن نرى نصيب غيرنا.', en: 'Table manners teach us to see others\' share.' } },
          { correct: 1, q: { ar: 'ماذا رأى كريم حين عدّ ونظر في لعبة «انتظر ثم انظر»؟', en: 'What did Karim see when he counted and looked in the "wait, then look" game?' },
            options: [{ ar: 'أن الصحن فيه برتقالة واحدة', en: 'That there was only one orange' }, { ar: 'أن أنس لا يصل إلى الصحن، وأن أمه لم تجلس بعد', en: 'That Anas couldn\'t reach the bowl and his mother had not sat down yet' }, { ar: 'أن الفاكهة غير ناضجة', en: 'That the fruit was not ripe' }],
            why: { ar: 'العد يعطي القلب وقتًا ليرى من حوله.', en: 'Counting gives the heart time to see who is around.' } }
        ]) },

      { title: { ar: 'شطيرة ياسمين', en: 'Yasmin\'s sandwich' },
        body: {
          ar: [
            'في رحلة المدرسة إلى الحديقة الكبيرة، جلس الصف كله على العشب ليأكل. فتح كريم حقيبته فوجد فيها شطيرتين من الجبن والزعتر، وهي أحب طعام إليه، وتفاحة حمراء.',
            'وكانت ياسمين، زميلته التي تجلس قريبًا منه، تبحث في حقيبتها طويلًا ثم أغلقتها بهدوء. فهم كريم أنها نسيت طعامها في البيت. لم تقل شيئًا، بل أخرجت كتابًا وتظاهرت بالقراءة، لكنها كانت تنظر إلى الأرض.',
            'شعر كريم بصوتين في داخله. صوت يقول: الشطيرتان لك، وأنت جائع، والطريق طويل. وصوت آخر يقول: انتظر ثم انظر. كان الصوت الأول أعلى، لكنه تذكّر وجه أمه أمام الفتات ليلة الجمعة، وتذكّر كيف قالت إنها ليست جائعة. وفكّر: ربما تقول ياسمين في نفسها الآن الشيء نفسه.',
            'فتذكّر آية علّمه إياها جده: ﴿وَمَنْ يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ﴾ (الحشر 59:9). وكان الجد قد قال: الشح أن تريد النفس كل شيء لها، ومن نجا منه أفلح. فقام كريم ووضع شطيرة أمام ياسمين وقال ببساطة: عندي اثنتان.',
            'نظرت إليه ياسمين متفاجئة، ثم ابتسمت وقالت: شكرًا يا كريم. وأكلا معًا وهما يتحدثان عن الطيور في البحيرة، وعن البطة التي كانت تسبح وخلفها ستة صغار. وفي طريق العودة لاحظ كريم أنه لم يعد جائعًا، مع أنه أكل نصف ما كان معه. وفي البيت سألته داليا: كيف كانت الرحلة؟ قال: أجمل رحلة، وكانت شطيرة واحدة تكفيني.'
          ],
          en: [
            'On the school trip to the big park, the whole class sat on the grass to eat. Karim opened his bag and found two cheese and za\'tar sandwiches, his favourite food, and a red apple.',
            'Yasmin, the classmate sitting near him, searched her bag for a long time and then quietly closed it. Karim understood she had left her lunch at home. She said nothing; she took out a book and pretended to read, but she was looking at the ground.',
            'Karim felt two voices inside him. One said: both sandwiches are yours, you\'re hungry, and it\'s a long way home. The other said: wait, then look. The first voice was louder, but he remembered his mother\'s face over the crumbs on Thursday night, and how she had said she wasn\'t hungry. He thought: maybe Yasmin is telling herself the same thing right now.',
            'He remembered a verse his grandfather had taught him, meaning: "Whoever is saved from the greed of his own soul, those are the successful" (al-Hashr 59:9). Grandfather had said: greed is the soul wanting everything for itself, and whoever is saved from it succeeds. So Karim got up, put a sandwich in front of Yasmin and said simply: I\'ve got two.',
            'Yasmin looked at him in surprise, then smiled and said: thank you, Karim. They ate together, talking about the birds on the lake, and the duck swimming with six ducklings behind her. On the way home Karim noticed he was not hungry any more, even though he had eaten half of what he had. At home Dalia asked him: how was the trip? He said: the best trip ever, and one sandwich was enough for me.'
          ]
        },
        quiz: Q('pig', 4, [
          { correct: 2, q: { ar: 'كيف عرف كريم أن ياسمين نسيت طعامها؟', en: 'How did Karim know Yasmin had forgotten her lunch?' },
            options: [{ ar: 'قالت له ذلك', en: 'She told him' }, { ar: 'أخبرته المعلمة', en: 'The teacher told him' }, { ar: 'لاحظ أنها بحثت في حقيبتها ثم أغلقتها ونظرت إلى الأرض', en: 'He noticed her search her bag, close it and look at the ground' }],
            why: { ar: 'هذه الدرجة الثالثة: أرى الآخرين وحدي، دون أن يقول لي أحد.', en: 'This is the third degree: I see others on my own, without being told.' } },
          { correct: 0, q: { ar: 'ما «الشح» كما شرحه الجد؟', en: 'What is "greed of the soul" as Grandfather explained it?' },
            options: [{ ar: 'أن تريد النفس كل شيء لها', en: 'The soul wanting everything for itself' }, { ar: 'أن يأكل الإنسان قليلًا', en: 'Eating only a little' }, { ar: 'أن ينسى الطعام في البيت', en: 'Forgetting your lunch at home' }],
            why: { ar: 'من نجا من الشح أفلح، كما في الآية.', en: 'Whoever is saved from greed succeeds, as the verse says.' } }
        ]) },

      { title: { ar: 'النار الصغيرة', en: 'The small fire' },
        body: {
          ar: [
            'مرّ شهر، وصار كريم يرى أشياء كثيرة لم يكن يراها: يرى تعب أمه في المساء، فيرتب الأطباق قبل أن تطلب. ويرى أنس يقف عند الرف العالي، فيعطيه اللعبة التي يريدها. وصارت داليا تقول عنه: كريم صار يسبقنا إلى الخير أحيانًا.',
            'وذات ظهيرة عاد كريم من المدرسة فوجد أنس قد أخذ سيارته الجديدة، التي اشتراها بمصروف شهرين، وكسر عجلتها الأمامية. وقف كريم في باب الغرفة، وشعر بنار تصعد من صدره إلى وجهه.',
            'صرخ: هذه لي! من سمح لك؟ وانتزع السيارة من يد أنس بقوة، فسقط أنس على الأرض وبكى. ولم يكتف كريم بذلك، بل رفع يده كأنه سيضربه، ثم توقف في آخر لحظة حين رأى عيني أخيه الخائفتين.',
            'جلس كريم على السرير وقلبه يدق بسرعة. فكّر: لقد تعلمت أن أرى الناس، وأن أعطي، وأن أنتظر. فلماذا خرجت هذه النار مني فجأة؟ ثم جاءت أمه وجلست بجانبه وقالت بهدوء: صرتَ ترى غيرك يا كريم، وهذا جميل. لكن حين يأخذ أحد ما تحب، يأتي امتحان آخر.',
            'قالت: أن ترى الناس شيء، وأن تمسك نفسك حين تغضب شيء آخر. الأول هو البنصر، والثاني هو الوسطى. ثم ضمّت أنس الذي جاء يعتذر وعيناه حمراوان. فمسح كريم دموع أخيه وقال: سنصلحها معًا. وعرف كريم تلك الليلة أن أمامه إصبعًا جديدًا يصعده، وأن الطريق لا ينتهي عند إصبع واحد.'
          ],
          en: [
            'A month went by, and Karim saw many things he had not seen before: he saw his mother\'s tiredness in the evening, and tidied the dishes before she asked. He saw Anas standing at the high shelf, and handed him the toy he wanted. Dalia began to say of him: Karim sometimes gets to the good before us now.',
            'One day Karim came home from school to find that Anas had taken his new car, which he had bought with two months of pocket money, and broken its front wheel. Karim stood in the doorway and felt a fire rising from his chest to his face.',
            'He shouted: that\'s mine! Who said you could? He snatched the car out of Anas\'s hand so hard that Anas fell to the floor and cried. And Karim did not stop there: he raised his hand as if to hit him, then stopped at the last moment when he saw his brother\'s frightened eyes.',
            'Karim sat on the bed with his heart pounding. He thought: I have learned to see people, to give, and to wait. So why did this fire suddenly burst out of me? Then his mother came and sat beside him and said quietly: you see others now, Karim, and that is lovely. But when someone takes what you love, a different test comes.',
            'She said: seeing people is one thing, and holding yourself back when you are angry is another. The first is the ring finger; the second is the middle finger. Then she hugged Anas, who had come to say sorry with red eyes. Karim wiped his brother\'s tears and said: we\'ll fix it together. And that night Karim knew there was a new finger ahead of him to climb, and that the path does not end at one finger.'
          ]
        },
        quiz: Q('pig', 5, [
          { correct: 1, q: { ar: 'ما الذي أوقف يد كريم في آخر لحظة؟', en: 'What stopped Karim\'s hand at the last moment?' },
            options: [{ ar: 'دخول أبيه', en: 'His father coming in' }, { ar: 'رؤية عيني أخيه الخائفتين', en: 'Seeing his brother\'s frightened eyes' }, { ar: 'صوت الجرس', en: 'The sound of the doorbell' }],
            why: { ar: 'ما تعلّمه في البنصر، أن يرى غيره، أوقفه في آخر لحظة.', en: 'What he learned on the ring finger, seeing others, stopped him at the last moment.' } },
          { correct: 0, q: { ar: 'ما الفرق الذي شرحته الأم بين البنصر والوسطى؟', en: 'What difference did his mother explain between the ring finger and the middle finger?' },
            options: [{ ar: 'البنصر أن ترى الناس، والوسطى أن تمسك نفسك حين تغضب', en: 'The ring finger is seeing people; the middle finger is holding yourself back when angry' }, { ar: 'لا فرق بينهما', en: 'There is no difference' }, { ar: 'البنصر للكبار والوسطى للصغار', en: 'The ring finger is for adults and the middle finger for children' }],
            why: { ar: 'هذا باب الوسطى: إمساك النفس عند الغضب.', en: 'This is the door to the middle finger: holding yourself back in anger.' } }
        ]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-monkey', stage: 'monkey', ages: '9-14',
    title: { ar: 'سارة وفريق البالون', en: 'Sara and the balloon team' },
    chapters: [
      { title: { ar: 'المباراة', en: 'The match' },
        body: {
          ar: [
            'كانت سارة في الحادية عشرة، وكانت أسرع لاعبة في فريق كرة السلة في مدرستها. وكان أخوها التوأم مالك في الفريق نفسه، وصديقتهما رنا تحرس السلة. كانوا يتدربون كل يوم ثلاثاء، ويحلمون بالفوز في بطولة المدارس قبل نهاية الشهر.',
            'في مباراة التدريب الأخيرة، دفعت لاعبة من الفريق الآخر سارة بكتفها، فسقطت على الأرض. قامت سارة بسرعة، ووجهها أحمر، وصرخت: أنتِ تغشين! ثم رمت الكرة بقوة نحو الجدار، فارتدت وأصابت رنا في ذراعها. ولم تنتبه سارة لما حدث لرنا، لأن عينيها كانتا على اللاعبة التي دفعتها.',
            'صفّر المدرب وقال: توقفي يا سارة! لكن سارة لم تتوقف. ظلت تصرخ وتشير بيديها، والكلمات تخرج منها كأنها حجارة. وحاول مالك أن يمسك يدها، فدفعته وقالت: اتركني! وكان كل الفريق ينظر إليها صامتًا، حتى اللاعبات الصغيرات اللواتي كن يعددنها قدوة لهن في الملعب.',
            'أخرجها المدرب من الملعب، فجلست على المقعد تتنفس بسرعة. وبعد دقائق بردت النار، ونظرت حولها: رنا تمسك ذراعها وتعضّ شفتها من الألم، ومالك يقف بعيدًا لا ينظر إليها، واللاعبة التي دفعتها تعتذر للمدرب بهدوء.',
            'في الطريق إلى البيت لم يتكلم مالك. وفي غرفتها جلست سارة على السرير وبكت. لم تكن تريد أن تؤذي رنا، ولم تكن تكره أخاها. لكنها حين غضبت شعرت كأن شيئًا آخر أمسك يديها وفمها، وتركها هي تتفرج من بعيد. قالت في نفسها: من الذي كان يقودني هناك؟'
          ],
          en: [
            'Sara was eleven, and the fastest player on her school basketball team. Her twin brother Malik was on the same team, and their friend Rana guarded the hoop. They trained every Tuesday and dreamed of winning the schools\' tournament before the end of the month.',
            'In the last practice match, a player from the other team pushed Sara with her shoulder and she fell to the floor. Sara jumped up, her face red, and shouted: you\'re cheating! Then she hurled the ball at the wall, and it bounced back and hit Rana on the arm. Sara did not even notice what had happened to Rana, because her eyes were on the player who had pushed her.',
            'The coach blew the whistle and said: stop, Sara! But Sara did not stop. She kept shouting and waving her hands, the words flying out of her like stones. Malik tried to take her hand, and she pushed him and said: leave me alone! The whole team watched her in silence, even the younger players who looked up to her on the court.',
            'The coach sent her off the court, and she sat on the bench breathing fast. After a few minutes the fire cooled, and she looked around: Rana was holding her arm and biting her lip with pain, Malik was standing far off not looking at her, and the player who had pushed her was quietly apologising to the coach.',
            'On the way home Malik did not say a word. In her room Sara sat on her bed and cried. She had not wanted to hurt Rana, and she did not hate her brother. But when she got angry she felt as if something else had taken hold of her hands and her mouth, leaving her watching from far away. She said to herself: who was driving me back there?'
          ]
        },
        quiz: Q('monkey', 1, [
          { correct: 1, q: { ar: 'ماذا فعلت سارة حين قال لها المدرب «توقفي»؟', en: 'What did Sara do when the coach said "stop"?' },
            options: [{ ar: 'توقفت فورًا', en: 'Stopped at once' }, { ar: 'لم تتوقف، وظلت تصرخ وتشير', en: 'Did not stop, and kept shouting and waving' }, { ar: 'ضحكت', en: 'Laughed' }],
            why: { ar: 'هذه سمة «لا يسمع ولا يتوقف» في الوسطى.', en: 'This is the middle-finger trait «not listening, not stopping».' } },
          { correct: 0, q: { ar: 'ما السؤال الذي سألته سارة لنفسها في آخر الفصل؟', en: 'What question did Sara ask herself at the end of the chapter?' },
            options: [{ ar: 'من الذي كان يقودني هناك؟', en: 'Who was driving me back there?' }, { ar: 'لماذا خسرنا المباراة؟', en: 'Why did we lose the match?' }, { ar: 'متى التدريب القادم؟', en: 'When is the next practice?' }],
            why: { ar: 'الغضب كان يقود، وهي تريد أن تعرف كيف تمسك المقود.', en: 'Anger was driving, and she wants to learn to take the wheel.' } }
        ]) },

      { title: { ar: 'كلمة «توقف»', en: 'The word "stop"' },
        body: {
          ar: [
            'بعد العشاء طرقت الأم باب غرفة سارة، وجلست بجانبها. حكت لها سارة كل شيء، ثم قالت: أنا لا أريد أن أكون هكذا يا أمي، لكنني لا أستطيع أن أتوقف. حين أغضب يصير الأمر كأن الفرامل تعطلت.',
            'فكّرت الأم قليلًا ثم قالت: لنتفق على كلمة واحدة. حين أقول لك «توقفي»، أو يقولها المدرب أو مالك، لا تفكري في شيء. جمّدي يديك أولًا، ثم أغلقي فمك ثانية واحدة. وبعدها تكلمي كما تريدين. المهم أن تتوقف اليدان قبل كل شيء.',
            'جرّبت سارة الاتفاق في الأيام التالية. في يوم الأربعاء أخذ مالك جهاز التحكم وغيّر برنامجها، فبدأت ترفع صوتها. فقالت أمها من المطبخ: توقفي. فجمّدت سارة يديها، وكانت يدها اليمنى قد ارتفعت لتأخذ الجهاز بقوة. أنزلتها ببطء.',
            'وفي التدريب يوم الثلاثاء، أخطأت رنا تمريرة سهلة، فشعرت سارة بالنار تصعد. وقبل أن تصرخ قال مالك بهدوء: سارة، توقفي. فتوقفت. لم تكن هادئة من الداخل، لكن يديها وفمها لم يتحركا. وبعد ثانيتين قالت لرنا: لا بأس، المرة القادمة.',
            'في طريق العودة قال مالك: لقد توقفتِ اليوم! قالت سارة: نعم، لكن لأنك قلتها لي. أريد أن أتوقف قبل أن يقولها أحد. ابتسم مالك وقال: هذه خطوة، والخطوة التي بعدها تأتي. وشعرت سارة لأول مرة منذ المباراة أن أخاها رجع قريبًا منها، فأخذت يده ومشيا معًا إلى البيت.'
          ],
          en: [
            'In the evening their mother knocked on Sara\'s door and sat beside her. Sara told her everything, then said: I don\'t want to be like this, Mum, but I can\'t stop. When I get angry it\'s as if the brakes have failed.',
            'Her mother thought for a moment and said: let\'s agree on one word. When I say "stop" to you, or the coach or Malik says it, don\'t think about anything. Freeze your hands first, then close your mouth for one second. After that, say whatever you like. What matters is that the hands stop before anything else.',
            'Sara tried the agreement over the next days. On Wednesday Malik took the remote and changed her programme, and she began to raise her voice. Her mother called from the kitchen: stop. Sara froze her hands; her right hand had already risen to snatch the remote. She lowered it slowly.',
            'At practice on Tuesday, Rana fumbled an easy pass, and Sara felt the fire rise. Before she could shout, Malik said quietly: Sara, stop. And she stopped. She was not calm inside, but her hands and mouth did not move. After two seconds she said to Rana: never mind, next time.',
            'On the way home Malik said: you stopped today! Sara said: yes, but because you told me to. I want to stop before anyone has to say it. Malik smiled and said: that\'s one step, and the next one will come. And for the first time since the match, Sara felt her brother was close to her again, so she took his hand and they walked home together.'
          ]
        },
        quiz: Q('monkey', 2, [
          { correct: 2, q: { ar: 'ما الاتفاق الذي علّمته الأم لسارة؟', en: 'What agreement did her mother teach Sara?' },
            options: [{ ar: 'أن تترك فريق كرة السلة', en: 'To leave the basketball team' }, { ar: 'أن تصرخ في وسادتها', en: 'To shout into her pillow' }, { ar: 'حين تسمع «توقفي» تجمّد يديها أولًا، ثم تغلق فمها ثانية', en: 'When she hears "stop", freeze her hands first, then close her mouth for a second' }],
            why: { ar: 'إيقاف اليدين أولًا يمنع الأذى قبل أن يقع.', en: 'Stopping the hands first prevents harm before it happens.' } },
          { correct: 0, q: { ar: 'لماذا لم تكتف سارة بما حققته في التدريب؟', en: 'Why was Sara not satisfied with what she managed at practice?' },
            options: [{ ar: 'لأنها أرادت أن تتوقف قبل أن يقولها لها أحد', en: 'Because she wanted to stop before anyone had to tell her' }, { ar: 'لأن الفريق خسر', en: 'Because the team lost' }, { ar: 'لأن رنا غضبت منها', en: 'Because Rana was angry with her' }],
            why: { ar: 'التوقف عند الطلب أول العلاج، والتوقف قبل الطلب أجمل منه.', en: 'Stopping when asked is where the cure begins; stopping before being asked is even better.' } }
        ]) },

      { title: { ar: 'القوي الحقيقي', en: 'The truly strong one' },
        body: {
          ar: [
            'في يوم الجمعة جاء عمهم يوسف، وكان مدربًا قديمًا لكرة السلة. سمع قصة المباراة، فضحك وقال: أعرف هذه النار يا سارة. كنت مثلك حين كنت صغيرًا، حتى سمعت حديثًا غيّر طريقتي في اللعب كلها.',
            'ثم قال: قال النبي صلى الله عليه وآله وسلم: «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ». أي إن القوي ليس من يغلب الناس في المصارعة، بل من يغلب غضبه.',
            'قالت سارة: لكن الغضب يأتي بسرعة يا عمي، أسرع مني! فقال: لذلك علّمنا النبي صلى الله عليه وآله وسلم أيضًا أن نغيّر وضع الجسد. من غضب وهو واقف فليجلس، فإن ذهب عنه الغضب وإلا فليضطجع. الجسد إذا هدأ تبعه القلب. والجلوس يجعل اليد أبعد عن الضرب، والاضطجاع يجعلها أبعد. فتغيير وضع الجسد يطفئ النار شيئًا فشيئًا.',
            'ثم علّمها العم تمرينًا سمّاه «قِف، تنفّس، اختر». قِف: جمّدي يديك وقدميك. تنفّسي: شهيق إلى أربعة وزفير إلى أربعة، ثلاث مرات. ثم اختاري: ما التصرف الذي سأفخر به بعد ساعة؟ وقال: تمرّني عليه وأنتِ هادئة، كما تتمرنين على الرمية الحرة، حتى يصير جاهزًا وقت المباراة.',
            'ففعلت سارة ذلك كل ليلة قبل النوم، وكان مالك يتمرن معها مازحًا. كانا يتخيلان موقفًا يغضبهما، ثم يقفان ويتنفسان ويختاران. وكانت رنا تضحك منهما وتقول: صرتما مثل لاعبي اليوغا! لكنها في الأسبوع الثاني صارت تتمرن معهما.'
          ],
          en: [
            'On Friday their uncle Yusuf came over; he had been a basketball coach years ago. He heard the story of the match, laughed and said: I know that fire, Sara. I was like you when I was young, until I heard a hadith that changed the way I played.',
            'Then he said: the Prophet, peace and blessings be upon him and his family, said, meaning: "The strong one is not the one who wins at wrestling; the strong one is the one who controls himself when angry." The strong person is not the one who beats others, but the one who beats his anger.',
            'Sara said: but anger comes so fast, Uncle, faster than me! He said: that is why the Prophet also taught us to change the position of the body. If you get angry standing, sit down; if the anger goes, good, and if not, lie down. When the body calms, the heart follows. Sitting puts the hand further from hitting, and lying down puts it further still. Changing the body\'s position puts the fire out little by little.',
            'Then her uncle taught her an exercise he called "stop, breathe, choose". Stop: freeze your hands and feet. Breathe: in for four and out for four, three times. Then choose: what will I be proud of having done an hour from now? He said: practise it while you are calm, the way you practise free throws, so it is ready during the match.',
            'So Sara did it every night before bed, and Malik practised with her, half joking. They would imagine something that made them angry, then stop, breathe and choose. Rana laughed at them and said: you look like yoga players! But in the second week she started practising with them too.'
          ]
        },
        quiz: Q('monkey', 3, [
          { correct: 1, q: { ar: 'من «الشديد» في الحديث الذي حكاه العم يوسف؟', en: 'Who is "the strong one" in the hadith Uncle Yusuf told?' },
            options: [{ ar: 'من يغلب الناس في المصارعة', en: 'The one who wins at wrestling' }, { ar: 'من يملك نفسه عند الغضب', en: 'The one who controls himself when angry' }, { ar: 'من يرمي الكرة أبعد', en: 'The one who throws the ball furthest' }],
            why: { ar: 'القوة الحقيقية أن تغلب غضبك.', en: 'True strength is beating your own anger.' } },
          { correct: 2, q: { ar: 'لماذا نصح العم سارة أن تتمرن وهي هادئة؟', en: 'Why did her uncle advise Sara to practise while calm?' },
            options: [{ ar: 'لأن التمرين ممل', en: 'Because practice is boring' }, { ar: 'لأن المدرب طلب ذلك', en: 'Because the coach asked' }, { ar: 'ليصير التمرين جاهزًا وقت الغضب، كالرمية الحرة', en: 'So the exercise is ready when anger comes, like a free throw' }],
            why: { ar: 'ما نتمرن عليه في الهدوء نجده وقت الحاجة.', en: 'What we practise in calm is there when we need it.' } }
        ]) },

      { title: { ar: 'البطولة', en: 'The tournament' },
        body: {
          ar: [
            'جاء يوم البطولة. كانت المدرجات مليئة بالأهالي، وكانت أم سارة ومالك تجلس في الصف الأول، ومعها العم يوسف. وفي الشوط الثاني كان الفريقان متعادلين، والوقت يقترب من نهايته. وكانت سارة تشعر بالتعب في ساقيها، وتعرف أن التعب يجعل الغضب أسرع.',
            'وفجأة دفعت لاعبة من الفريق المنافس سارة دفعة قوية، وسقطت سارة على ركبتها. وفي اللحظة نفسها شعرت بالنار المعروفة تصعد من صدرها إلى وجهها. ورأت مالك ينظر إليها من بعيد، وقد فتح فمه ليقول: توقفي.',
            'لكن سارة سبقته. قالت لنفسها في سرها: قِف. فجمّدت يديها وهي ما تزال على الأرض. ثم تنفست: شهيق إلى أربعة، وزفير إلى أربعة. وتذكّرت نصيحة عمها، فبقيت جالسة لحظة قبل أن تقوم. ثم سألت نفسها: ما الذي سأفخر به بعد ساعة؟',
            'قامت سارة، ونظرت إلى الحكمة، وقالت بصوت عادي: لقد دفعتني. فاحتسبت الحكمة رمية حرة. ووقفت سارة على الخط، وقلبها ما يزال يدق بسرعة، لكن يديها كانتا ثابتتين. ورمت، فدخلت الكرة السلة. وصفّق الجميع، وكان أعلى تصفيق من الصف الأول.',
            'فاز الفريق بنقطة واحدة. وبعد المباراة جاءت اللاعبة التي دفعتها واعتذرت، فصافحتها سارة. وجاء العم يوسف فقال: لم تتوقفي هذه المرة لأن أحدًا قالها لك، بل توقفتِ قبله. هذه هي الدرجة التي كنتِ تريدينها. أما مالك فقال ضاحكًا: كدت أقولها، لكنك كنت أسرع مني هذه المرة!'
          ],
          en: [
            'Tournament day came. The stands were full of families, and Sara and Malik\'s mother sat in the front row with Uncle Yusuf. In the second half the two teams were level, and time was running out. Sara felt the tiredness in her legs, and she knew that tiredness makes anger come faster.',
            'Suddenly a player from the other team gave Sara a hard push, and Sara fell on her knee. At that same moment she felt the familiar fire rising from her chest to her face. She saw Malik looking at her from across the court, his mouth already open to say: stop.',
            'But Sara got there first. She said silently to herself: stop. She froze her hands while still on the floor. Then she breathed: in for four, out for four. She remembered her uncle\'s advice and stayed sitting for a moment before getting up. Then she asked herself: what will I be proud of an hour from now?',
            'Sara got up, looked at the referee, and said in an ordinary voice: she pushed me. The referee gave a free throw. Sara stood on the line, her heart still pounding, but her hands were steady. She threw, and the ball went in. Everyone clapped, and the loudest clapping came from the front row.',
            'The team won by one point. After the match the player who had pushed her came and apologised, and Sara shook her hand. Uncle Yusuf came over and said: this time you didn\'t stop because someone told you to; you stopped before they did. That is the degree you wanted. Malik said laughing: I nearly said it, but you were faster than me this time!'
          ]
        },
        quiz: Q('monkey', 4, [
          { correct: 0, q: { ar: 'ما الذي اختلف في البطولة عن مباراة التدريب الأولى؟', en: 'What was different at the tournament from the first practice match?' },
            options: [{ ar: 'توقفت سارة بنفسها قبل أن يقول لها أحد «توقفي»', en: 'Sara stopped herself before anyone said "stop"' }, { ar: 'لم يدفعها أحد', en: 'Nobody pushed her' }, { ar: 'لم تكن أمها حاضرة', en: 'Her mother was not there' }],
            why: { ar: 'هذا ملك النفس قبل الطلب، وبه يصير الاندفاع قوة.', en: 'This is self-mastery before being asked, and with it the rush becomes strength.' } },
          { correct: 1, q: { ar: 'ماذا قالت سارة للحكمة بعد أن قامت؟', en: 'What did Sara say to the referee after she got up?' },
            options: [{ ar: 'صرخت بأن المنافسة تغش', en: 'She shouted that her opponent was cheating' }, { ar: 'قالت بصوت عادي: لقد دفعتني', en: 'She said in an ordinary voice: she pushed me' }, { ar: 'لم تقل شيئًا وخرجت', en: 'She said nothing and walked off' }],
            why: { ar: 'الهدوء لا يعني السكوت عن الحق، بل قوله بلا أذى.', en: 'Calm does not mean keeping quiet about what is right, but saying it without harm.' } }
        ]) },

      { title: { ar: 'اعتذار لرنا', en: 'An apology to Rana' },
        body: {
          ar: [
            'احتفلت الأسرة بالفوز تلك الليلة، وجاءت رنا مع أمها. وحين جلست الصغيرات يأكلن الحلوى، لاحظت سارة أن رنا ما تزال تتجنب أن تقف بجانبها كثيرًا، وأن على ذراعها أثرًا أزرق صغيرًا من الكرة التي رمتها قبل أسابيع.',
            'فكّرت سارة: لقد تعلمت أن أتوقف، وأن أهدأ، وأن أقول الحق بلا صراخ. لكنني لم أصلح ما كسرته قبل ذلك. صحيح أن رنا ابتسمت لي، لكن الابتسامة لا تعني أن الجرح نُسي.',
            'فقامت سارة وأخذت رنا إلى الشرفة، وقالت لها: يا رنا، يوم المباراة الأولى رميت الكرة وأنا غاضبة، فأصابتك. لم أعتذر لك كما يجب. أنا آسفة حقًّا، ولن أرمي شيئًا بعد اليوم وأنا غاضبة. وإن رأيتِني أغضب، فقولي لي: توقفي، وسأتوقف.',
            'سكتت رنا قليلًا، ثم قالت: كنت خائفة منك بعدها، ولم أقل لأحد. لكنني رأيتك اليوم في المباراة، وعرفت أنك تغيرتِ. ثم ضحكت وقالت: والرمية الحرة كانت جميلة! وتعانقتا، ورجعتا إلى الحلوى معًا. ولاحظت سارة أن رنا صارت تجلس بجانبها، وتضحك معها كما كانت تفعل من قبل.',
            'وقبل النوم قالت الأم لسارة: صرتِ تمسكين غضبك، فلا تؤذين أحدًا بيدك. وهذا الآن يفتح لك بابًا جديدًا: أن يسلم الناس منك كل يوم، لا في المباراة وحدها. وأن تصلحي ما أفسدته، وتفي بما وعدتِ. فسألت سارة: وما اسم هذا الباب؟ قالت الأم: السبابة. وهناك ينتظرك الإنسان.'
          ],
          en: [
            'In the evening the family celebrated the win, and Rana came with her mother. When the girls sat eating sweets, Sara noticed that Rana still avoided standing too close to her, and that there was a small blue mark on her arm from the ball Sara had thrown weeks before.',
            'Sara thought: I have learned to stop, to calm down, and to say what is right without shouting. But I have not repaired what I broke before that. It\'s true that Rana smiled at me, but a smile does not mean the hurt is forgotten.',
            'So Sara got up, took Rana out to the balcony and said: Rana, at the first match I threw the ball when I was angry and it hit you. I never apologised properly. I am truly sorry, and from today I won\'t throw anything when I\'m angry. And if you ever see me getting angry, just tell me: stop, and I will.',
            'Rana was quiet for a moment, then said: I was scared of you after that, and I didn\'t tell anyone. But I saw you at the match today and I knew you had changed. Then she laughed and said: and that free throw was lovely! They hugged and went back to the sweets together. Sara noticed that Rana sat next to her now, laughing with her as she used to before.',
            'Before bed her mother said to Sara: you hold your anger now, so you don\'t hurt anyone with your hands. And that opens a new door for you: that people are safe from you every day, not only at matches; that you repair what you spoiled and keep what you promise. Sara asked: and what is that door called? Her mother said: the index finger. That is where being truly human is waiting for you.'
          ]
        },
        quiz: Q('monkey', 5, [
          { correct: 2, q: { ar: 'لماذا اعتذرت سارة لرنا مع أن رنا كانت تبتسم لها؟', en: 'Why did Sara apologise to Rana even though Rana smiled at her?' },
            options: [{ ar: 'لأن أمها أمرتها', en: 'Because her mother told her to' }, { ar: 'لأنها أرادت الحلوى', en: 'Because she wanted the sweets' }, { ar: 'لأن الابتسامة لا تعني أن الجرح نُسي، وهي لم تصلح ما كسرته', en: 'Because a smile does not mean the hurt is forgotten, and she had not repaired what she broke' }],
            why: { ar: 'الإصلاح بعد الخطأ من سمات السبابة.', en: 'Repairing after a mistake is an index-finger trait.' } },
          { correct: 0, q: { ar: 'ما الباب الجديد الذي حدثتها عنه أمها؟', en: 'What new door did her mother tell her about?' },
            options: [{ ar: 'أن يسلم الناس منها كل يوم، وأن تصلح وتفي بوعدها', en: 'That people are safe from her every day, and that she repairs and keeps her promises' }, { ar: 'أن تلعب في فريق أكبر', en: 'To play on a bigger team' }, { ar: 'أن تترك الرياضة', en: 'To give up sport' }],
            why: { ar: 'من ملك نفسه دخل باب السبابة.', en: 'Whoever holds themselves back enters the door of the index finger.' } }
        ]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-human', stage: 'human', ages: '9-14',
    title: { ar: 'يحيى والوعد الصغير', en: 'Yahya and the small promise' },
    chapters: [
      { title: { ar: 'مجموعة الصف', en: 'The class group chat' },
        body: {
          ar: [
            'كان يحيى في الثالثة عشرة، وكان له في هاتفه مجموعة لطلاب صفه يتبادلون فيها الواجبات والنكات. وفي أول الشهر جاءت إلى المدرسة طالبة جديدة اسمها زينب، تتكلم بلهجة مختلفة، وتلبس نظارة سميكة.',
            'في المساء كتب أحد الأولاد في المجموعة نكتة عن نظارة زينب، فضحك الجميع وأرسلوا الوجوه الضاحكة. ثم كتب آخر نكتة عن لهجتها، ثم ثالث. وكان هشام، صديق يحيى المقرّب، يكتب أكثرهم، ويضيف صورًا مضحكة يرسمها بنفسه، فيزداد الضحك في المجموعة.',
            'كتب يحيى وجهًا ضاحكًا، ثم توقف. تذكّر أن أخته ندى، وهي في الحادية عشرة، انتقلت إلى مدرسة جديدة العام الماضي، وكانت تعود كل يوم باكية لأن البنات يسخرن من حقيبتها القديمة. فمسح الوجه الضاحك قبل أن يقرأه أحد.',
            'وفي الصباح سأل أباه: هل الضحك على نكتة في المجموعة أذى، مع أنني لم أكتبها؟ قال الأب: قال النبي صلى الله عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ». واللسان اليوم يكتب أيضًا. والضحكة في المجموعة قد تجرح كما تجرح الكلمة.',
            'فكتب يحيى في المجموعة تلك الليلة: يا جماعة، لنتوقف عن هذا. زينب جديدة، وقد تقرأ ما نكتب. سكت الجميع لحظة، ثم كتب هشام: أنت جادّ؟ فقال يحيى: نعم. ولم يرد أحد بعدها. لم يكن الأمر سهلًا، لكن يحيى نام وهو يشعر أن يده ولسانه نظيفان تلك الليلة.'
          ],
          en: [
            'Yahya was thirteen, and on his phone he had a group for the students in his class where they swapped homework and jokes. At the start of the month a new girl called Zaynab came to the school; she spoke with a different accent and wore thick glasses.',
            'In the evening one of the boys posted a joke in the group about Zaynab\'s glasses, and everyone laughed and sent laughing faces. Then another posted a joke about her accent, then a third. Hisham, Yahya\'s closest friend, was posting the most, adding funny pictures he drew himself, and the laughter in the group grew.',
            'Yahya sent a laughing face, then stopped. He remembered that his sister Nada, who was eleven, had moved to a new school last year and came home crying every day because the girls mocked her old schoolbag. So he deleted the laughing face before anyone could read it.',
            'In the morning he asked his father: is laughing at a joke in the group harmful, even if I didn\'t write it? His father said: the Prophet, peace and blessings be upon him and his family, said, meaning: "The Muslim is the one from whose tongue and hand the Muslims are safe." And today the tongue types too. A laugh in a group chat can wound just as a word can.',
            'So that night Yahya wrote in the group: guys, let\'s stop this. Zaynab is new, and she might read what we write. Everyone went quiet for a moment, then Hisham wrote: are you serious? Yahya said: yes. Nobody replied after that. It was not easy, but Yahya went to sleep feeling that his hand and his tongue were clean that night.'
          ]
        },
        quiz: Q('human', 1, [
          { correct: 1, q: { ar: 'لماذا مسح يحيى الوجه الضاحك؟', en: 'Why did Yahya delete the laughing face?' },
            options: [{ ar: 'لأن أباه رآه', en: 'Because his father saw it' }, { ar: 'لأنه تذكّر حزن أخته حين سخرت منها البنات', en: 'Because he remembered his sister\'s sadness when the girls mocked her' }, { ar: 'لأن هاتفه تعطل', en: 'Because his phone broke' }],
            why: { ar: 'من يتذكر ألم غيره يكفّ أذاه.', en: 'Whoever remembers others\' pain keeps their harm away.' } },
          { correct: 0, q: { ar: 'كيف شرح الأب أن «اللسان» يشمل المجموعة على الهاتف؟', en: 'How did the father explain that "the tongue" includes a group chat?' },
            options: [{ ar: 'قال إن اللسان اليوم يكتب أيضًا، والضحكة قد تجرح كالكلمة', en: 'He said the tongue types too today, and a laugh can wound like a word' }, { ar: 'قال إن الهاتف لا يدخل في الحديث', en: 'He said phones are not included in the hadith' }, { ar: 'قال إن النكتة لا تؤذي أحدًا', en: 'He said jokes never hurt anyone' }],
            why: { ar: 'هذه الدرجة الأولى في السبابة: كفّ الأذى باليد واللسان.', en: 'This is the first index-finger degree: keeping harm away by hand and tongue.' } }
        ]) },

      { title: { ar: 'مشروع ندى', en: 'Nada\'s project' },
        body: {
          ar: [
            'في يوم الأحد طلبت ندى من أخيها أن يساعدها في مشروع العلوم: بركان صغير من الطين يثور بالخل والصودا. فقال يحيى وهو ينظر إلى هاتفه: حسنًا، يوم الأربعاء بعد المدرسة، أعدك. وقالها بسرعة كما يقول الناس كلمات كثيرة في اليوم. ففرحت ندى وكتبت الموعد على ورقة وألصقتها على باب الثلاجة.',
            'وجاء يوم الأربعاء. خرج يحيى من المدرسة، فدعاه هشام ليلعبا في بيته اللعبة الجديدة. فذهب معه، ونسي كل شيء. ولم يرجع إلى البيت إلا بعد المغرب، فوجد ندى جالسة إلى الطاولة وأمامها الطين والخل، والبركان لم يُبنَ.',
            'لم تصرخ ندى، لكنها قالت بهدوء: انتظرتك ثلاث ساعات. شعر يحيى بشيء ثقيل في صدره. نظر إلى الورقة على الثلاجة، فرأى خط أخته الصغير: الأربعاء، يحيى يساعدني. لقد وعدها بنفسه، ثم نسيها كأن الوعد لم يكن.',
            'قال الأب ليحيى تلك الليلة: الإنسان يُعرف بشيئين صغيرين: هل يؤذي الناس؟ وهل يفي بما عليه؟ ولا أحد يحتاج أن يذكّرك بوعدك كل مرة. الوعد الذي تحفظه وحدك يجعلك إنسانًا يُعتمد عليه.',
            'فاعتذر يحيى لأخته اعتذارًا صادقًا، ولم يقدّم أعذارًا، وجلس معها حتى منتصف الليل يبنيان البركان. وثار البركان في الصباح أمام صفها، فصفق الجميع. ومنذ ذلك اليوم صار يحيى يكتب وعوده في دفتر صغير، ولا ينام حتى يفي بوعد اليوم، أو يعتذر ويحدد موعدًا جديدًا يفي به.'
          ],
          en: [
            'On Sunday Nada asked her brother to help with her science project: a small clay volcano that erupts with vinegar and baking soda. Yahya said, looking at his phone: okay, Wednesday after school, I promise. He said it quickly, the way people say a lot of words in a day. Nada was delighted, wrote the time on a note and stuck it on the fridge door.',
            'Wednesday came. Yahya left school, and Hisham invited him over to play his new game. He went with him and forgot everything. He did not get home until after sunset, and found Nada sitting at the table with the clay and the vinegar in front of her, and no volcano built.',
            'Nada did not shout; she said quietly: I waited three hours for you. Yahya felt something heavy in his chest. He looked at the note on the fridge and saw his sister\'s small handwriting: Wednesday, Yahya helps me. He had made the promise himself, then forgotten it as if it had never been.',
            'His father said to him that night: a person is known by two small things: do they hurt people, and do they do what is due from them? And nobody should have to remind you of your promise every time. A promise you keep on your own makes you someone people can rely on.',
            'So Yahya apologised to his sister sincerely, without making excuses, and sat with her until midnight building the volcano. In the morning it erupted in front of her class, and everyone clapped. From that day Yahya wrote his promises in a small notebook, and did not sleep until he had kept that day\'s promise, or apologised and set a new time that he kept.'
          ]
        },
        quiz: Q('human', 2, [
          { correct: 2, q: { ar: 'لماذا لم يُبنَ البركان يوم الأربعاء؟', en: 'Why was the volcano not built on Wednesday?' },
            options: [{ ar: 'لأن ندى نسيت', en: 'Because Nada forgot' }, { ar: 'لأن الخل انتهى', en: 'Because the vinegar ran out' }, { ar: 'لأن يحيى ذهب ليلعب ونسي وعده', en: 'Because Yahya went to play and forgot his promise' }],
            why: { ar: 'الوعد الذي يُنسى يكسر ثقة من ينتظره.', en: 'A forgotten promise breaks the trust of the one waiting.' } },
          { correct: 0, q: { ar: 'ماذا صار يحيى يفعل بوعوده بعد ذلك اليوم؟', en: 'What did Yahya do with his promises after that day?' },
            options: [{ ar: 'يكتبها في دفتر، ولا ينام حتى يفي بها أو يعتذر ويحدد موعدًا جديدًا', en: 'Wrote them in a notebook and did not sleep until he kept them, or apologised and set a new time' }, { ar: 'توقف عن الوعد أبدًا', en: 'Stopped making promises at all' }, { ar: 'صار ينتظر أن يذكّره أبوه', en: 'Waited for his father to remind him' }],
            why: { ar: 'هذه الدرجة الثانية: أداء الواجب والوفاء دون تذكير.', en: 'This is the second degree: doing what is due and keeping promises without reminders.' } }
        ]) },

      { title: { ar: 'نافذة الجار', en: 'The neighbour\'s window' },
        body: {
          ar: [
            'في عطلة نهاية الأسبوع كان يحيى وهشام يلعبان الكرة في الشارع الخلفي. ركل يحيى الكرة بقوة، فطارت فوق السور وكسرت نافذة صغيرة في بيت العم منصور، الجار الكبير الذي يسكن وحده.',
            'قال هشام بسرعة: اهرب! لم يرنا أحد! وكاد يحيى يركض معه. لكنه تذكّر الدفتر الصغير، وتذكّر كلام أبيه عن الإنسان الذي يُعتمد عليه. فوقف مكانه، وقال: لا، أنا كسرتها، وسأخبره. فنظر إليه هشام متعجبًا، ثم وقف بجانبه ولم يهرب.',
            'طرق يحيى باب العم منصور، وقلبه يدق بسرعة. فتح الرجل الباب، فقال يحيى: يا عمي، أنا آسف. ركلت الكرة فكسرت نافذتك. سأدفع ثمنها من مصروفي، وسأساعدك في إصلاحها. نظر العم منصور إليه طويلًا، ثم قال: لم يعتذر لي أحد بهذه الطريقة منذ سنين. ادخل يا بني.',
            'وفي البيت حكى يحيى لأبيه ما حدث. فقال الأب: هذا ما علّمنا إياه النبي صلى الله عليه وآله وسلم حين قال: «وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ». الخطأ يقع من كل الناس، لكن الإنسان لا يخفيه، بل يتبعه بحسنة تمحوه.',
            'ويوم السبت ذهب يحيى مع أبيه، وساعدا العم منصور في تركيب زجاج جديد. وبعد الانتهاء صنع لهما العم منصور الشاي، وحكى لهما عن أيام شبابه. وخرج يحيى وهو يفكر: الخطأ صار بابًا لصداقة جديدة. ولو هربت، لبقيت نافذة مكسورة، وجار وحيد غاضب.'
          ],
          en: [
            'At the weekend Yahya and Hisham were playing football in the back street. Yahya kicked the ball hard, and it flew over the wall and broke a small window in the house of Uncle Mansur, the elderly neighbour who lived alone.',
            'Hisham said quickly: run! Nobody saw us! Yahya nearly ran with him. But he remembered the little notebook, and his father\'s words about being someone people can rely on. So he stayed where he was and said: no, I broke it, and I\'m going to tell him. Hisham looked at him in surprise, then stood beside him and did not run.',
            'Yahya knocked on Uncle Mansur\'s door, his heart pounding. The man opened the door, and Yahya said: Uncle, I\'m sorry. I kicked the ball and broke your window. I\'ll pay for it from my pocket money, and I\'ll help you fix it. Uncle Mansur looked at him for a long time, then said: nobody has apologised to me like this in years. Come in, my son.',
            'At home Yahya told his father what had happened. His father said: this is what the Prophet, peace and blessings be upon him and his family, taught us when he said, meaning: "Follow a bad deed with a good one and it will wipe it out, and treat people with good character." Everyone makes mistakes, but a true human does not hide a mistake; he follows it with a good deed that wipes it out.',
            'On Saturday Yahya went with his father and they helped Uncle Mansur fit new glass. When they had finished, Uncle Mansur made them tea and told them about his younger days. Yahya left thinking: the mistake has become a door to a new friendship. If I had run, there would still be a broken window, and a lonely, angry neighbour.'
          ]
        },
        quiz: Q('human', 3, [
          { correct: 1, q: { ar: 'ماذا فعل يحيى بعد أن كسر النافذة؟', en: 'What did Yahya do after breaking the window?' },
            options: [{ ar: 'هرب مع هشام', en: 'Ran away with Hisham' }, { ar: 'اعترف للعم منصور وعرض أن يدفع ويساعد في الإصلاح', en: 'Owned up to Uncle Mansur and offered to pay and help fix it' }, { ar: 'قال إن هشام كسرها', en: 'Said Hisham broke it' }],
            why: { ar: 'الإنسان لا يخفي خطأه، بل يعترف ويصلح.', en: 'A true human does not hide a mistake, but owns it and repairs it.' } },
          { correct: 2, q: { ar: 'ما معنى «وأتبع السيئة الحسنة تمحها» في هذه القصة؟', en: 'What does "follow a bad deed with a good one and it will wipe it out" mean in this story?' },
            options: [{ ar: 'أن ننسى الخطأ', en: 'To forget the mistake' }, { ar: 'أن نلوم غيرنا', en: 'To blame someone else' }, { ar: 'أن يتبع يحيى الخطأ بعمل طيب يصلحه، كتركيب الزجاج', en: 'That Yahya follows his mistake with a good deed that repairs it, like fitting the glass' }],
            why: { ar: 'الحسنة بعد الخطأ تمحوه وتفتح بابًا جديدًا.', en: 'A good deed after a mistake wipes it out and opens a new door.' } }
        ]) },

      { title: { ar: 'العادة الصغيرة', en: 'The small habit' },
        body: {
          ar: [
            'بعد أسابيع زار يحيى العم منصور مرة أخرى، فوجده يحاول أن يقرأ رسالة من البنك بعينين متعبتين. قال العم: صارت الحروف صغيرة جدًّا يا بني. فقرأها يحيى له بصوت واضح، وشرح له ما فيها، وكتب له رقم الهاتف الذي يجب أن يتصل به بخط كبير.',
            'وفي الطريق إلى البيت فكّر يحيى: ماذا لو فعلت هذا كل أسبوع؟ لم يطلبه مني أحد، ولن يعرفه أحد. لكن العم منصور وحده، ولا أحد يقرأ له. فقرر أن يزوره كل يوم سبت بعد العصر، ولو نصف ساعة.',
            'وتذكّر يحيى حديثًا قرأه في كتاب المدرسة: «أحب الأعمال إلى الله تعالى أدومها وإن قل». فقال في نفسه: لن أفعل شيئًا ضخمًا مرة واحدة ثم أتعب. سأفعل شيئًا صغيرًا، وأداوم عليه.',
            'في السبت الأول قرأ له الجريدة. وفي الثاني ساعده في ري النباتات على الشرفة. وفي الثالث جاءت ندى معه، وصنعت للعم منصور بطاقة ملونة مكتوبًا عليها: جارنا العزيز. فعلّقها العم منصور على الحائط، وكان يريها لكل من يزوره بفخر كبير.',
            'لاحظ يحيى أن شيئًا تغيّر فيه. لم يعد يكتفي بألا يؤذي أحدًا، وأن يفي بوعوده. صار يزيد خيرًا من نفسه أحيانًا، دون أن يُطلب منه. لم يكن يفعل ذلك كل يوم، لكنه صار يحب هذا الشعور. وقال لأبيه: كأن الواجب أرض، والخير الزائد درج يصعد منها.'
          ],
          en: [
            'A few weeks later Yahya visited Uncle Mansur again and found him trying to read a letter from the bank with tired eyes. Uncle Mansur said: the letters have got very small, my son. So Yahya read it to him in a clear voice, explained what it said, and wrote the phone number he needed to call in large letters.',
            'On the way home Yahya thought: what if I did this every week? Nobody asked me to, and nobody will know. But Uncle Mansur is alone, and nobody reads to him. So he decided to visit him every Saturday after the afternoon prayer, even if only for half an hour.',
            'Yahya remembered a hadith he had read in his school book, meaning: "The deeds most loved by Allah are the most lasting, even if small." He said to himself: I won\'t do something huge once and then get tired. I\'ll do something small and keep it up.',
            'On the first Saturday he read him the newspaper. On the second he helped him water the plants on the balcony. On the third Nada came with him and made Uncle Mansur a colourful card that said: our dear neighbour. Uncle Mansur hung it on the wall and proudly showed it to everyone who visited.',
            'Yahya noticed something had changed in him. He was no longer satisfied just with not hurting anyone and keeping his promises. Now and then he added some good of his own, without being asked. He did not do it every day, but he had come to love the feeling. He said to his father: it\'s as if duty is the ground, and the extra good is a staircase going up from it.'
          ]
        },
        quiz: Q('human', 4, [
          { correct: 0, q: { ar: 'لماذا اختار يحيى عملًا صغيرًا يداوم عليه بدل عمل كبير مرة واحدة؟', en: 'Why did Yahya choose a small deed to keep up instead of a big one done once?' },
            options: [{ ar: 'لأن أحب الأعمال إلى الله أدومها وإن قل', en: 'Because the deeds most loved by Allah are the most lasting, even if small' }, { ar: 'لأنه كسول', en: 'Because he was lazy' }, { ar: 'لأن العم منصور طلب ذلك', en: 'Because Uncle Mansur asked for it' }],
            why: { ar: 'القليل الدائم يبني الإنسان.', en: 'A little that lasts builds a person.' } },
          { correct: 1, q: { ar: 'ماذا قصد يحيى بقوله «الواجب أرض، والخير الزائد درج»؟', en: 'What did Yahya mean by "duty is the ground, and extra good is a staircase"?' },
            options: [{ ar: 'أن الواجب غير مهم', en: 'That duty does not matter' }, { ar: 'أن أداء الواجب أساس، والخير الزائد من النفس يرفع الإنسان', en: 'That doing your duty is the base, and good of your own lifts you higher' }, { ar: 'أن عليه أن يصعد الدرج كل يوم', en: 'That he had to climb stairs every day' }],
            why: { ar: 'هذه الدرجة الثالثة في السبابة: إحسان زائد على الواجب أحيانًا.', en: 'This is the third index-finger degree: some extra good beyond duty, sometimes.' } }
        ]) },

      { title: { ar: 'زينب في الساحة', en: 'Zaynab in the playground' },
        body: {
          ar: [
            'في آخر الفصل الدراسي لاحظ يحيى أن زينب ما تزال تجلس وحدها في الاستراحة. توقفت النكات في المجموعة منذ تلك الليلة، لكن أحدًا لم يقترب منها. فهي لم تعد تُؤذى، لكنها أيضًا لم تجد صديقًا. وكانت تأكل طعامها ببطء، وتقرأ كتابًا، وترفع عينيها أحيانًا نحو الأولاد الذين يلعبون.',
            'قال يحيى لنفسه: أنا لم أؤذها، وطلبت من الآخرين أن يتوقفوا. هذا واجبي، وقد أديته. لكن هل يكفي ألا أؤذي؟ ثم تذكّر العم منصور قبل أن يزوره: لم يكن أحد يؤذيه، لكنه كان وحيدًا.',
            'وفي اليوم التالي، قبل أن يطلب منه أحد، أخبر يحيى أخته ندى عن زينب، وطلب منها أن تعرّفها على صديقاتها في المكتبة، لأن زينب تحب القراءة كثيرًا. ثم ذهب إلى هشام وقال: زينب تعرف حل مسائل الرياضيات الصعبة، تعال نسألها.',
            'تردد هشام، ثم ذهب معه. وجلسوا ثلاثتهم يحلون المسائل، وكانت زينب تشرح ببطء وصبر. وفي آخر الاستراحة قال هشام لها بصوت منخفض: أنا آسف على ما كتبته في المجموعة. فابتسمت زينب وقالت: لا بأس، شكرًا لأنكم جلستم معي.',
            'ولما جلسوا إلى العشاء قال الأب ليحيى: حين كففت أذاك صرت إنسانًا يسلم منه الناس. وحين وفيت بوعودك صرت إنسانًا يُعتمد عليه. أما اليوم، فقد سبقت إلى الخير قبل أن يطلبه أحد، وأخذت غيرك معك. وهذا يا بني باب الإبهام، باب السابقين بالخيرات.'
          ],
          en: [
            'At the end of term Yahya noticed that Zaynab still sat alone at break. The jokes in the group had stopped since that night, but nobody had gone near her. She was no longer being hurt, but she had not found a friend either. She ate her lunch slowly, read a book, and now and then looked up at the children playing.',
            'Yahya said to himself: I didn\'t hurt her, and I asked the others to stop. That was my duty, and I did it. But is it enough not to hurt? Then he remembered Uncle Mansur before he started visiting: nobody was hurting him, but he was lonely.',
            'The next day, before anyone asked him, Yahya told his sister Nada about Zaynab and asked her to introduce her to her friends in the library, because Zaynab loved reading. Then he went to Hisham and said: Zaynab knows how to solve the hard maths problems, let\'s go and ask her.',
            'Hisham hesitated, then went with him. The three of them sat solving problems, and Zaynab explained slowly and patiently. At the end of break Hisham said to her quietly: I\'m sorry about what I wrote in the group. Zaynab smiled and said: never mind, thank you for sitting with me.',
            'In the evening his father said to Yahya: when you kept your harm away, you became someone people are safe from. When you kept your promises, you became someone people can rely on. But today you raced to the good before anyone asked, and took others with you. That, my son, is the door of the thumb, the door of those racing to good.'
          ]
        },
        quiz: Q('human', 5, [
          { correct: 2, q: { ar: 'ما الذي جعل يحيى يفكر أن «ألا يؤذي» لا يكفي؟', en: 'What made Yahya think that "not hurting" was not enough?' },
            options: [{ ar: 'أن المعلم وبّخه', en: 'That the teacher told him off' }, { ar: 'أن هشام طلب منه', en: 'That Hisham asked him' }, { ar: 'أنه تذكّر أن العم منصور لم يكن يؤذيه أحد، لكنه كان وحيدًا', en: 'That he remembered Uncle Mansur: nobody was hurting him, but he was lonely' }],
            why: { ar: 'السبابة ألا تؤذي، والإبهام أن تبادر بالخير.', en: 'The index finger is not hurting; the thumb is starting the good.' } },
          { correct: 0, q: { ar: 'لماذا قال الأب إن يحيى وقف عند باب الإبهام؟', en: 'Why did the father say Yahya was at the door of the thumb?' },
            options: [{ ar: 'لأنه سبق إلى الخير قبل أن يُطلب منه، وأخذ غيره معه', en: 'Because he raced to the good before being asked, and took others with him' }, { ar: 'لأنه حلّ مسائل الرياضيات', en: 'Because he solved the maths problems' }, { ar: 'لأنه ترك المجموعة', en: 'Because he left the group chat' }],
            why: { ar: 'المبادرة بالخير وأخذ الآخرين معك هما أول الإبهام.', en: 'Starting the good and taking others with you is where the thumb begins.' } }
        ]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-sabiq', stage: 'sabiq', ages: '9-14',
    title: { ar: 'أسماء والورقة المطوية', en: 'Asma and the folded note' },
    chapters: [
      { title: { ar: 'قبل أن يطلب أحد', en: 'Before anyone asks' },
        body: {
          ar: [
            'كانت أسماء في الثانية عشرة، وكانت عندها عادة غريبة لاحظتها أسرتها: ترى العمل قبل أن يراه غيرها. فإذا جاء الضيوف رتبت الأحذية عند الباب قبل أن يدخلوا، وإذا انتهى العشاء حملت الأطباق قبل أن يقوم أحد. وكان أخوها زياد، وهو في التاسعة، يقول عنها: أسماء عندها عين ثالثة للشغل. وكانت أمها تضحك وتقول: بل عندها قلب يرى.',
            'وفي يوم الجمعة ذهبت الأسرة إلى المسجد الصغير في الحي. وبعد الصلاة خرج الناس، وبقيت السجادات مبعثرة، وبعض المصاحف على الأرض، وكوب ماء فارغ بجانب العمود. ولم يطلب أحد شيئًا من أحد.',
            'وقفت أسماء عند الباب لحظة، ثم رجعت. رفعت المصاحف ووضعتها على الرف، وجمعت الأكواب الفارغة، ورتبت السجادات الصغيرة صفًا واحدًا. ورآها الحاج أبو سليم، خادم المسجد الكبير في السن، فابتسم ابتسامة متعبة وقال: كنت سأفعل هذا وحدي، وظهري يؤلمني. جزاك الله خيرًا.',
            'في الطريق سألها زياد: لماذا رجعتِ؟ لم يطلب منك أحد! قالت أسماء: لأنني رأيت. وإذا رأيتُ خيرًا يحتاج أن يُعمل، فأنا أسرع إليه قبل أن يبرد. ألا تعرف الآية: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ﴾ (آل عمران 3:133)؟',
            'قال زياد: لكنك تتعبين! قالت أسماء ضاحكة: أتعب قليلًا، وأفرح كثيرًا. ثم سكتت وفكّرت: هل كنت أفرح لأن أبا سليم شكرني، أم لأنني عملت الخير؟ ولم تعرف الجواب تلك الليلة، لكن السؤال بقي معها.'
          ],
          en: [
            'Asma was twelve, and she had an odd habit her family had noticed: she saw the work before anyone else did. When guests came she lined up the shoes at the door before they came in, and when dinner was over she carried the plates before anyone got up. Her brother Ziyad, who was nine, used to say: Asma has a third eye for jobs. Their mother would laugh and say: no, she has a heart that sees.',
            'On Friday the family went to the little mosque in the neighbourhood. After the prayer people left, and the prayer rugs were scattered, some copies of the Quran were on the floor, and an empty cup of water stood by a pillar. Nobody asked anyone for anything.',
            'Asma stood at the door for a moment, then went back. She lifted the copies of the Quran onto the shelf, gathered the empty cups, and lined up the small rugs in one row. Hajj Abu Salim, the elderly man who looked after the mosque, saw her and gave a tired smile. He said: I was going to do this alone, and my back hurts. May Allah reward you.',
            'On the way home Ziyad asked her: why did you go back? Nobody asked you to! Asma said: because I saw. When I see good that needs doing, I hurry to it before it goes cold. Don\'t you know the verse, meaning: "Hasten to forgiveness from your Lord" (Al Imran 3:133)?',
            'Ziyad said: but you get tired! Asma laughed and said: I get a little tired and very happy. Then she fell quiet and thought: was I happy because Abu Salim thanked me, or because I did something good? She did not know the answer that night, but the question stayed with her.'
          ]
        },
        quiz: Q('sabiq', 1, [
          { correct: 0, q: { ar: 'لماذا رجعت أسماء إلى المسجد بعد الصلاة؟', en: 'Why did Asma go back into the mosque after the prayer?' },
            options: [{ ar: 'لأنها رأت عملًا يحتاج أن يُعمل، فأسرعت إليه', en: 'Because she saw work that needed doing and hurried to it' }, { ar: 'لأن أباها أمرها', en: 'Because her father told her to' }, { ar: 'لأنها نسيت حقيبتها', en: 'Because she forgot her bag' }],
            why: { ar: 'هذه الدرجة الأولى في الإبهام: مبادرة بالخير قبل الطلب.', en: 'This is the first thumb degree: starting the good before being asked.' } },
          { correct: 2, q: { ar: 'ما السؤال الذي بقي مع أسماء تلك الليلة؟', en: 'What question stayed with Asma that night?' },
            options: [{ ar: 'متى صلاة الجمعة القادمة؟', en: 'When is next Friday\'s prayer?' }, { ar: 'لماذا يتعب أبو سليم؟', en: 'Why does Abu Salim get tired?' }, { ar: 'هل فرحت بشكر أبي سليم أم بعمل الخير نفسه؟', en: 'Was she happy because Abu Salim thanked her, or because of the good deed itself?' }],
            why: { ar: 'السابق يسأل نفسه عن نيته، لا عن عمله فقط.', en: 'Someone racing to good asks about their intention, not only their deed.' } }
        ]) },

      { title: { ar: 'الخير الخفي', en: 'The hidden good' },
        body: {
          ar: [
            'حكت أسماء لجدتها عن سؤالها، فقالت الجدة: هذا سؤال الكبار يا أسماء. وأحسن طريقة لتعرفي الجواب أن تفعلي خيرًا لا يعرفه أحد. فإن فرحتِ به وحدكِ، فقد عرفتِ أن فرحكِ لله.',
            'فأخذت أسماء دفترًا صغيرًا، وصارت تكتب فيه كل مساء خيرًا خفيًّا واحدًا ستفعله غدًا، ثم تطوي الورقة وتخفيها في درج مكتبها. وكانت القاعدة الوحيدة: لا تخبر أحدًا، ولا حتى زياد. وإن سألها أحد عن الأوراق المطوية، تبتسم وتقول: أسرار صغيرة.',
            'في اليوم الأول وضعت قارورة ماء باردة على باب جارتهم العجوز قبل أن تستيقظ. وفي اليوم الثاني رتبت كتب زياد المبعثرة وهو في المدرسة، فظن أن أمه فعلت ذلك. وفي اليوم الثالث دعت لصديقتها جنى باسمها في صلاة الفجر، لأن جنى كانت حزينة على مرض أبيها.',
            'وتذكّرت أسماء حديثًا علّمته إياه المعلمة: «كُلُّ مَعْرُوفٍ صَدَقَةٌ». فقالت في نفسها: الدعاء معروف، والماء البارد معروف، والكتب المرتبة معروف. ولا يحتاج المعروف أن يكون كبيرًا، ولا أن يراه أحد. يكفي أن يكون صادقًا، وأن يصل إلى من يحتاجه.',
            'وبعد أسبوع لاحظت أسماء شيئًا عجيبًا: كانت تفرح بالخير الخفي أكثر من الخير الذي يراه الناس. فلم يكن هناك شكر ولا مدح، بل شعور هادئ في قلبها، كأن سرًّا جميلًا بينها وبين الله. فعرفت جواب سؤالها: الفرح الحقيقي في الخير نفسه، لا في الشكر عليه.'
          ],
          en: [
            'Asma told her grandmother about her question, and her grandmother said: that is a grown-up\'s question, Asma. The best way to find the answer is to do good that nobody knows about. If you are happy with it on your own, then you will know your happiness is for Allah.',
            'So Asma took a small notebook, and every evening she wrote one hidden good deed she would do the next day, then folded the page and hid it in her desk drawer. There was only one rule: tell nobody, not even Ziyad. If anyone asked about the folded pages, she would smile and say: little secrets.',
            'On the first day she left a bottle of cold water at their elderly neighbour\'s door before she woke up. On the second day she tidied Ziyad\'s scattered books while he was at school, and he thought their mother had done it. On the third day she prayed for her friend Jana by name at the dawn prayer, because Jana was sad about her father\'s illness.',
            'Asma remembered a hadith her teacher had taught her, meaning: "Every kindness is charity." She said to herself: a prayer is a kindness, cold water is a kindness, tidy books are a kindness. A kindness does not have to be big, or seen by anyone. It is enough that it is sincere and reaches someone who needs it.',
            'After a week Asma noticed something wonderful: she was happier with the hidden good than with the good people could see. There was no thanks and no praise, only a quiet feeling in her heart, like a lovely secret between her and Allah. So she knew the answer to her question: the real joy is in the good itself, not in being thanked for it.'
          ]
        },
        quiz: Q('sabiq', 2, [
          { correct: 1, q: { ar: 'ما القاعدة الوحيدة للخير الخفي في دفتر أسماء؟', en: 'What was the only rule for the hidden good in Asma\'s notebook?' },
            options: [{ ar: 'أن يكون كبيرًا', en: 'That it must be big' }, { ar: 'ألا تخبر به أحدًا', en: 'To tell nobody about it' }, { ar: 'أن تفعله مرة في الشهر', en: 'To do it once a month' }],
            why: { ar: 'الخير الخفي يعلّم القلب أن يعمل لله.', en: 'Hidden good teaches the heart to act for Allah.' } },
          { correct: 0, q: { ar: 'ما الجواب الذي وجدته أسماء لسؤالها؟', en: 'What answer did Asma find to her question?' },
            options: [{ ar: 'أن الفرح الحقيقي في الخير نفسه، لا في الشكر عليه', en: 'That the real joy is in the good itself, not in being thanked for it' }, { ar: 'أن الخير يجب أن يراه الناس', en: 'That good must be seen by people' }, { ar: 'أن الدفتر الصغير أجمل من الكبير', en: 'That a small notebook is nicer than a big one' }],
            why: { ar: '«كل معروف صدقة»، ولو لم يره أحد.', en: '"Every kindness is charity", even if no one sees it.' } }
        ]) },

      { title: { ar: 'سباق مع جنى', en: 'A race with Jana' },
        body: {
          ar: [
            'في المدرسة أعلنت المعلمة عن «أسبوع الخير»: يكتب كل طالب الأعمال الطيبة التي يفعلها، وفي آخر الأسبوع تُعلّق أسماء أكثر الطلاب خيرًا على لوحة الصف. فقالت جنى لأسماء ضاحكة: سأسبقك هذه المرة!',
            'وبدأ السباق. ساعدت جنى المعلمة في توزيع الكتب، فساعدت أسماء عامل النظافة في حمل السلال. وأعارت جنى قلمها لزميلة، فأعطت أسماء نصف طعامها لطالب نسي طعامه. وكانت الصديقتان تضحكان، وتكتبان، وتتسابقان، والصف كله يتابعهما.',
            'لكن في اليوم الرابع لاحظت أسماء أن شيئًا تغيّر في قلبها. صارت تنظر إلى ورقة جنى لتعرف كم كتبت، وصارت تختار الخير الذي يراه الناس، وتترك الخير الخفي لأنه لا يُكتب في الورقة. وفي المساء نظرت إلى دفترها الصغير، فوجدت أنها لم تكتب فيه شيئًا منذ ثلاثة أيام.',
            'فحكت لجدتها، فقالت الجدة: المسابقة إلى الخير جميلة، وقد مدح الله أهلها فقال: ﴿وَالسَّابِقُونَ السَّابِقُونَ ۝ أُولَٰئِكَ الْمُقَرَّبُونَ﴾ (الواقعة 56:10-11). لكن السباق هنا إلى الله، لا إلى اللوحة. فإذا صار همّك أن تسبقي جنى، فقد نسيتِ إلى أين تركضين.',
            'في اليوم الخامس لم تكتب أسماء في ورقة المدرسة شيئًا جديدًا. بل كتبت في دفترها الصغير خيرًا خفيًّا: أن تقول للمعلمة إن جنى ساعدت أكثر منها هذا الأسبوع. وفي آخر الأسبوع عُلّق اسم جنى على اللوحة، فصفقت أسماء أعلى من الجميع، وشعرت أنها ربحت شيئًا لا يُعلّق على لوحة.'
          ],
          en: [
            'At school the teacher announced "Kindness Week": every student would write down the good deeds they did, and at the end of the week the names of the kindest students would go up on the class board. Jana said to Asma laughing: I\'m going to beat you this time!',
            'And the race began. Jana helped the teacher hand out books, so Asma helped the caretaker carry the baskets. Jana lent a classmate her pen, so Asma gave half her lunch to a boy who had forgotten his. The two friends laughed, wrote things down and raced each other, with the whole class watching.',
            'But on the fourth day Asma noticed something had changed in her heart. She had started looking at Jana\'s sheet to see how much she had written, and choosing the good that people could see, leaving out the hidden good because it could not go on the sheet. In the evening she looked at her little notebook and found she had written nothing in it for three days.',
            'She told her grandmother, who said: racing to good is beautiful, and Allah praised those who do it, saying, meaning: "And the foremost are the foremost; they are the ones brought near" (al-Waqi\'a 56:10-11). But this race is towards Allah, not towards the board. If your aim becomes beating Jana, you have forgotten where you are running to.',
            'On the fifth day Asma wrote nothing new on the school sheet. Instead she wrote a hidden good deed in her little notebook: to tell the teacher that Jana had helped more than her that week. At the end of the week Jana\'s name went up on the board, and Asma clapped louder than anyone, and felt she had won something that could not be pinned on a board.'
          ]
        },
        quiz: Q('sabiq', 3, [
          { correct: 2, q: { ar: 'ما الذي تغيّر في قلب أسماء في اليوم الرابع؟', en: 'What changed in Asma\'s heart on the fourth day?' },
            options: [{ ar: 'تعبت من الخير', en: 'She got tired of doing good' }, { ar: 'غضبت من المعلمة', en: 'She got angry with the teacher' }, { ar: 'صارت تختار الخير الذي يراه الناس لتسبق جنى، وتركت الخير الخفي', en: 'She began choosing good that people could see, to beat Jana, and dropped the hidden good' }],
            why: { ar: 'السباق إلى الخير قد ينقلب سباقًا إلى المدح.', en: 'A race to good can turn into a race for praise.' } },
          { correct: 1, q: { ar: 'ماذا قصدت الجدة بقولها «السباق إلى الله، لا إلى اللوحة»؟', en: 'What did Grandmother mean by "the race is towards Allah, not towards the board"?' },
            options: [{ ar: 'أن المسابقات ممنوعة', en: 'That competitions are forbidden' }, { ar: 'أن غاية السبق رضا الله، لا الفوز على الصديقة', en: 'That the aim of racing is Allah\'s pleasure, not beating your friend' }, { ar: 'أن اللوحة صغيرة', en: 'That the board is small' }],
            why: { ar: 'السابقون مقربون إلى الله، لا إلى اللوحة.', en: 'The foremost are brought near to Allah, not to a board.' } }
        ]) },

      { title: { ar: 'يد زياد', en: 'Ziyad\'s hand' },
        body: {
          ar: [
            'كان زياد يصرخ كثيرًا حين يغضب، ويرمي ألعابه، ثم يندم. وكانت أسماء تقول له: كفى صراخًا! أنت دائمًا هكذا! فيزداد زياد غضبًا، ويدخل غرفته ويغلق الباب بقوة. وكانت أسماء تظن أنها تساعده، لكن الصراخ كان يكبر ولا يصغر.',
            'وبعد أيام سمعت أسماء أمها تتحدث مع زياد بعد أن هدأ. لم تلمه أمها، بل جلست بجانبه وقالت: رأيتك اليوم تتوقف مرة قبل أن ترمي اللعبة. هذه درجة جديدة! فابتسم زياد، ورفع رأسه فخورًا.',
            'فهمت أسماء شيئًا مهمًّا: أن تفعل الخير بنفسك شيء، وأن تأخذ بيد غيرك ليصعد شيء آخر. وأن اللوم يغلق الأبواب، والكلمة الطيبة تفتحها. ففكرت: كيف أعين زياد على الصعود دون أن أشعره أنني أعلى منه؟',
            'فاقترحت عليه لعبة: كل مساء يحكي كل واحد منهما عن مرة غضب فيها، وكيف تصرف. وبدأت هي أولًا، فحكت له أنها غضبت من جنى في أسبوع الخير. فضحك زياد وقال: أنتِ أيضًا تغضبين؟ قالت: طبعًا! وكلنا نتمرن. فصار زياد يحكي لها كل مساء دون خوف.',
            'وتذكّرت أسماء آية سمعتها من جدتها: ﴿وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا﴾ (العنكبوت 29:69). وفهمت أن المجاهدة ليست لها وحدها، بل لكل من يحاول. وبعد شهر جاء زياد إليها فرحًا وقال: اليوم أخذ ولد كرتي في الساحة، فتوقفت وتنفست ولم أصرخ! فعانقته أسماء، وكان فرحها بصعوده أكبر من فرحها بأي خير فعلته وحدها.'
          ],
          en: [
            'Ziyad shouted a lot when he was angry and threw his toys, then felt sorry. Asma used to say to him: stop shouting! You\'re always like this! And Ziyad would get angrier, go into his room and slam the door. Asma thought she was helping him, but the shouting grew instead of shrinking.',
            'One day Asma heard her mother talking to Ziyad after he had calmed down. Her mother did not blame him; she sat beside him and said: I saw you stop once today before you threw the toy. That\'s a new degree! Ziyad smiled and lifted his head proudly.',
            'Asma understood something important: doing good yourself is one thing, and taking someone else by the hand so they climb is another. Blame closes doors, and a kind word opens them. So she wondered: how can I help Ziyad climb without making him feel I am above him?',
            'She suggested a game: every evening each of them would tell the other about a time they had got angry and how they had acted. She went first, and told him she had got angry with Jana during Kindness Week. Ziyad laughed and said: you get angry too? She said: of course! We are all practising. After that Ziyad told her every evening without fear.',
            'Asma remembered a verse she had heard from her grandmother, meaning: "As for those who strive for Us, We will surely guide them to Our ways" (al-Ankabut 29:69). She understood that striving was not only for her, but for everyone who tries. A month later Ziyad came to her happily and said: today a boy took my ball in the playground, and I stopped and breathed and didn\'t shout! Asma hugged him, and her joy at his climb was greater than her joy at any good she had done on her own.'
          ]
        },
        quiz: Q('sabiq', 4, [
          { correct: 0, q: { ar: 'ما الذي تعلّمته أسماء من طريقة أمها مع زياد؟', en: 'What did Asma learn from the way her mother spoke to Ziyad?' },
            options: [{ ar: 'أن اللوم يغلق الأبواب، والكلمة الطيبة تفتحها', en: 'That blame closes doors, and a kind word opens them' }, { ar: 'أن زياد لا يتغير', en: 'That Ziyad never changes' }, { ar: 'أن الصراخ يعلّم الهدوء', en: 'That shouting teaches calm' }],
            why: { ar: 'السابق يعين غيره بالكلمة الطيبة لا باللوم.', en: 'Someone racing to good helps others with kind words, not blame.' } },
          { correct: 2, q: { ar: 'لماذا بدأت أسماء اللعبة بقصة غضبها هي؟', en: 'Why did Asma start the game with a story of her own anger?' },
            options: [{ ar: 'لتفوز في اللعبة', en: 'To win the game' }, { ar: 'لأنها نسيت قصة زياد', en: 'Because she forgot Ziyad\'s story' }, { ar: 'لكي لا يشعر زياد أنها أعلى منه، وأن الجميع يتمرنون', en: 'So Ziyad would not feel she was above him, and would see that everyone practises' }],
            why: { ar: 'هذه الدرجة الثانية: مسابقة وعون للغير، بلا تكبر.', en: 'This is the second degree: racing and helping others, without pride.' } }
        ]) },

      { title: { ar: 'النور فوق اليد', en: 'The light above the hand' },
        body: {
          ar: [
            'في ليلة صيفية جلست أسماء مع جدتها على السطح، تنظران إلى النجوم. قالت أسماء: يا جدتي، صرت أبادر بالخير، وأخفيه، وأعين زياد. هل وصلت إلى آخر الطريق؟',
            'ضحكت الجدة ضحكة طويلة، ثم أمسكت يد أسماء ورفعتها نحو السماء، وقالت: انظري إلى أصابعك. صعدتِ إلى الإبهام، وهذا جميل. لكن هل ترين النور فوق اليد؟ هناك نور الهداية التي أتى بها الأنبياء عليهم السلام، نمشي في ضوئه ما دمنا أحياء.',
            'ثم قالت: قال الله عن الأنبياء: ﴿أُولَٰئِكَ الَّذِينَ هَدَى اللَّهُ ۖ فَبِهُدَاهُمُ اقْتَدِهْ﴾ (الأنعام 6:90). فهداهم قمة يُهتدى بها. وكلما اقتدينا بخلق من أخلاقهم، رأينا خلقًا آخر أمامنا. فالطريق لا ينتهي، وهذا من رحمة الله.',
            'سألت أسماء: لكن كيف أعرف الطريق بعد الإبهام؟ قالت الجدة: بالهداية التي تصعد بكِ من البداية. قال الله: ﴿وَالَّذِينَ اهْتَدَوْا زَادَهُمْ هُدًى﴾ (محمد 47:17). كل خطوة تتبعين فيها الهداية، يزيدكِ الله هداية لخطوة بعدها. وأنتِ تحتاجين الهداية كل يوم، كما يحتاجها زياد.',
            'وقبل أن تنام، كتبت أسماء في دفترها الصغير ورقة جديدة، ولم تكتب فيها خيرًا تفعله، بل دعاء: «اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الْأَخْلَاقِ، لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لَا يَصْرِفُ عَنِّي سَيِّئَهَا إِلَّا أَنْتَ» (من حديث في صحيح مسلم). ثم طوتها ووضعتها في الدرج مع الأوراق الأخرى. وعرفت أنها لم تصل إلى آخر الطريق، بل إلى أوله الحقيقي.'
          ],
          en: [
            'On a summer night Asma sat with her grandmother on the roof, looking at the stars. Asma said: Grandma, I start the good myself now, I hide it, and I help Ziyad. Have I reached the end of the path?',
            'Her grandmother laughed, took Asma\'s hand and lifted it towards the sky, and said: look at your fingers. You have climbed to the thumb, and that is lovely. But do you see the light above the hand? That is the light of guidance the prophets, peace be upon them, brought, and we walk by it as long as we live.',
            'Then she said: Allah said about the prophets, meaning: "Those are the ones Allah guided, so follow their guidance" (al-An\'am 6:90). Their guidance is a summit that guides the way. Each quality we follow shows us another ahead. The path never ends, and that is part of Allah\'s mercy.',
            'Asma asked: but how do I know the way after the thumb? Her grandmother said: by the same guidance that has been lifting you from the start. Allah said, meaning: "And those who are guided, He increases them in guidance" (Muhammad 47:17). Every step in which you follow guidance, Allah gives you more guidance for the next step. And you need guidance every day, just as Ziyad does.',
            'Before she slept, Asma wrote a new page in her little notebook, and this time it was not a good deed to do but a du\'a, meaning: "O Allah, guide me to the best of character, for none guides to the best of it but You, and turn its bad away from me, for none turns its bad away but You" (from a hadith in Sahih Muslim) Then she folded it and put it in the drawer with the other pages. And she knew she had not reached the end of the path, but its true beginning.'
          ]
        },
        quiz: Q('sabiq', 5, [
          { correct: 1, q: { ar: 'ماذا قالت الجدة عن الأنبياء عليهم السلام؟', en: 'What did Grandmother say about the prophets, peace be upon them?' },
            options: [{ ar: 'إنهم قصة قديمة انتهت', en: 'That they are an old story that is over' }, { ar: 'إن هداهم قمة يُهتدى بها', en: 'That their guidance is a summit that guides the way' }, { ar: 'إنهم لا علاقة لهم بأخلاقنا', en: 'That they have nothing to do with our character' }],
            why: { ar: 'الآية تأمر أن نقتدي بهداهم: ﴿فَبِهُدَاهُمُ اقْتَدِهْ﴾.', en: 'The verse tells us to follow their guidance.' } },
          { correct: 0, q: { ar: 'لماذا عرفت أسماء أنها وصلت إلى «أول الطريق الحقيقي» لا آخره؟', en: 'Why did Asma realise she had reached the path\'s "true beginning", not its end?' },
            options: [{ ar: 'لأن كل خطوة في الهداية تفتح خطوة بعدها، وهي تحتاج الهداية كل يوم', en: 'Because every step of guidance opens the next, and she needs guidance every day' }, { ar: 'لأنها نسيت ما تعلمته', en: 'Because she forgot what she had learned' }, { ar: 'لأن جدتها غضبت منها', en: 'Because her grandmother was cross with her' }],
            why: { ar: 'الهداية تُتّبع فيزيدها الله، والطريق لا ينتهي.', en: 'Guidance followed is increased by Allah, and the path never ends.' } }
        ]) }
    ]
  });
  delete window.AKHLAQ_BQ;
})();

/* ───────────── الجولة السادسة عشرة، 18 نوفمبر 2026: كتب مصورة للصغار (4 إلى 8) ─────────────
 * لكل إصبع كتاب من خمس صفحات (3 إلى 4 جمل)، بطل صغير واحد (بنت ثم ولد بالتناوب)، وسؤال لطيف بعد كل صفحة يُقرأ بصوت عال.
 * ينتهي كل كتاب عند باب الإصبع التالي. السرد بضمير الغائب، فلا يحتاج ar_f.
 */
(function () {
  window.AKHLAQ_BQ = window.AKHLAQ_BQ || function (bid, ci, list) {
    return list.map(function (q, k) { q.id = 'book-' + bid + '-c' + ci + 'q' + (k + 1); q.type = 'comprehension'; q.readingId = null; return q; });
  };
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-zombie-kids', stage: 'zombie', ages: '4-8', picture: true,
    title: { ar: 'ريم تفتح عينيها', en: 'Reem opens her eyes' },
    chapters: [
      { title: { ar: 'صباح بلا ألوان', en: 'A morning with no colours' },
        body: { ar: ['استيقظت ريم، ومشت إلى المطبخ وعيناها نصف مغمضتين.', 'أكلت فطورها ولم تنظر إليه.', 'وقالت لها أمها: صباح الخير يا ريم! فلم تسمع.'],
          en: ['Reem woke up and walked to the kitchen with her eyes half closed.', 'She ate her breakfast without looking at it.', 'Her mother said: good morning, Reem! But she did not hear.'] },
        quiz: Q('zombie-kids', 1, [{ correct: 1, q: { ar: 'هل سمعت ريم أمها؟', en: 'Did Reem hear her mother?' },
          options: [{ ar: 'نعم، وقالت صباح النور', en: 'Yes, and she said good morning back' }, { ar: 'لا، لم تسمعها', en: 'No, she did not hear her' }, { ar: 'نامت مرة أخرى', en: 'She went back to sleep' }],
          why: { ar: 'كانت عينا ريم مفتوحتين قليلًا، لكن قلبها كان نائمًا.', en: 'Reem\'s eyes were a little open, but her heart was asleep.' } }]) },
      { title: { ar: 'الطريق الرمادي', en: 'The grey path' },
        body: { ar: ['مشت ريم مع أبيها إلى الحديقة، وعيناها على الأرض.', 'لم ترَ الوردة الصفراء، ولم ترَ العصفور على الغصن.', 'قال أبوها: انظري يا ريم! لكنها ظلت تنظر إلى حذائها.'],
          en: ['Reem walked to the park with her father, her eyes on the ground.', 'She did not see the yellow flower, and she did not see the bird on the branch.', 'Her father said: look, Reem! But she kept looking at her shoes.'] },
        quiz: Q('zombie-kids', 2, [{ correct: 0, q: { ar: 'ماذا لم ترَ ريم في الطريق؟', en: 'What did Reem not see on the path?' },
          options: [{ ar: 'الوردة الصفراء والعصفور', en: 'The yellow flower and the bird' }, { ar: 'حذاءها', en: 'Her shoes' }, { ar: 'الأرض', en: 'The ground' }],
          why: { ar: 'العينان اللتان تنظران إلى الأرض لا تريان الجمال حولهما.', en: 'Eyes looking at the ground do not see the beauty around them.' } }]) },
      { title: { ar: 'العصفور ينادي', en: 'The bird calls' },
        body: { ar: ['غنّى العصفور بصوت عال: تويت، تويت!', 'رفعت ريم رأسها فجأة، ورأت العصفور الصغير.', 'ثم رأت الوردة الصفراء، والسماء الزرقاء، وابتسامة أبيها.', 'قالت ريم: كل هذا كان هنا؟'],
          en: ['The bird sang loudly: tweet, tweet!', 'Reem suddenly lifted her head and saw the little bird.', 'Then she saw the yellow flower, the blue sky, and her father\'s smile.', 'Reem said: was all this here before?'] },
        quiz: Q('zombie-kids', 3, [{ correct: 2, q: { ar: 'ماذا حدث حين رفعت ريم رأسها؟', en: 'What happened when Reem lifted her head?' },
          options: [{ ar: 'طار العصفور بعيدًا', en: 'The bird flew away' }, { ar: 'ركضت إلى البيت', en: 'She ran home' }, { ar: 'رأت العصفور والوردة والسماء وابتسامة أبيها', en: 'She saw the bird, the flower, the sky and her father\'s smile' }],
          why: { ar: 'حين يستيقظ القلب، تصير الدنيا ملوّنة.', en: 'When the heart wakes up, the world fills with colour.' } }]) },
      { title: { ar: 'الحمد لله', en: 'Al-hamdu lillah' },
        body: { ar: ['قال أبوها: كل هذه نعم من الله. ماذا نقول؟', 'قالت ريم: الحمد لله!', 'وصارت تعدّ على أصابعها: العصفور، الوردة، السماء، بابا.', 'ثم ركضت أمام أبيها إلى البيت، تبحث عن شيء جميل خامس.'],
          en: ['Her father said: all these are blessings from Allah. What do we say?', 'Reem said: al-hamdu lillah!', 'And she began counting on her fingers: the bird, the flower, the sky, Daddy.', 'Then she ran ahead of her father towards home, looking for a fifth lovely thing.'] },
        quiz: Q('zombie-kids', 4, [{ correct: 1, q: { ar: 'ماذا قالت ريم حين رأت نعم الله؟', en: 'What did Reem say when she saw Allah\'s blessings?' },
          options: [{ ar: 'أريد أن أعود إلى البيت', en: 'I want to go home' }, { ar: 'الحمد لله', en: 'Al-hamdu lillah' }, { ar: 'انظر يا بابا!', en: 'Look, Daddy!' }],
          why: { ar: 'الشكر يوقظ القلب.', en: 'Giving thanks wakes the heart.' } }]) },
      { title: { ar: 'جدّة متعبة', en: 'A tired grandma' },
        body: { ar: ['رجعت ريم إلى البيت وعيناها مفتوحتان.', 'فرأت جدتها تمسك ظهرها وهي تحمل سلة الخبز.', 'ركضت ريم وقالت: «أحملها عنك يا جدتي!».', 'ضحكت جدتها وقالت: «من علّمك هذا؟». قالت ريم: «العصفور!».'],
          en: ['Reem came home with her eyes wide open.', 'She saw her grandma holding her back as she carried the bread basket.', 'Reem ran and said: "Let me carry it for you, Grandma!"', 'Her grandma laughed: "Who taught you that?" Reem said: "The bird!"'] },
        quiz: Q('zombie-kids', 5, [{ correct: 0, q: { ar: 'ماذا رأت ريم حين رجعت إلى البيت؟', en: 'What did Reem see when she came home?' },
          options: [{ ar: 'جدتها متعبة تحمل سلة الخبز', en: 'Her grandma, tired, carrying the bread basket' }, { ar: 'أمها تطبخ الغداء', en: 'Her mother cooking lunch' }, { ar: 'القطة نائمة على الباب', en: 'The cat asleep by the door' }],
          why: { ar: 'من يستيقظ يرى غيره، وهذا باب البنصر.', en: 'Whoever wakes up sees others: that is the door to the ring finger.' } }]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-pig-kids', stage: 'pig', ages: '4-8', picture: true,
    title: { ar: 'فارس والكعكة الكبيرة', en: 'Faris and the big cake' },
    chapters: [
      { title: { ar: 'كعكة على الطاولة', en: 'A cake on the table' },
        body: { ar: ['صنعت ماما كعكة بالشوكولاتة، ووضعتها على الطاولة.', 'ركض فارس وأخذ أكبر قطعة.', 'ثم أخذ قطعة ثانية، وقال: كلها لي!'],
          en: ['Mama made a chocolate cake and put it on the table.', 'Faris ran and took the biggest piece.', 'Then he took a second piece and said: it\'s all mine!'] },
        quiz: Q('pig-kids', 1, [{ correct: 2, q: { ar: 'ماذا قال فارس حين أخذ القطعة الثانية؟', en: 'What did Faris say when he took the second piece?' },
          options: [{ ar: 'تفضلوا', en: 'Help yourselves' }, { ar: 'شكرًا يا ماما', en: 'Thank you, Mama' }, { ar: 'كلها لي!', en: 'It\'s all mine!' }],
          why: { ar: '«كلها لي» من سمات البنصر.', en: '"It\'s all mine" is a ring-finger trait.' } }]) },
      { title: { ar: 'صحن أخته', en: 'His sister\'s plate' },
        body: { ar: ['جاءت أخته الصغيرة لمى، فوجدت الصحن فارغًا تقريبًا.', 'بقيت قطعة صغيرة جدًّا.', 'نظرت لمى إلى صحن فارس، وسكتت، وعيناها حزينتان.'],
          en: ['His little sister Lama came and found the plate nearly empty.', 'Only one tiny piece was left.', 'Lama looked at Faris\'s plate and said nothing, her eyes sad.'] },
        quiz: Q('pig-kids', 2, [{ correct: 1, q: { ar: 'كيف شعرت لمى؟', en: 'How did Lama feel?' },
          options: [{ ar: 'فرحت كثيرًا', en: 'Very happy' }, { ar: 'حزنت', en: 'Sad' }, { ar: 'نامت', en: 'Sleepy' }],
          why: { ar: 'حين نأخذ كل شيء، يحزن غيرنا.', en: 'When we take everything, others feel sad.' } }]) },
      { title: { ar: 'انتظر وانظر', en: 'Wait and look' },
        body: { ar: ['جلست ماما بجانب فارس وقالت: لنلعب لعبة.', 'قبل أن تأخذ شيئًا، عُدّ إلى عشرة.', 'وفي أثناء العد، انظر حولك: هل أخذ الجميع؟'],
          en: ['Mama sat beside Faris and said: let\'s play a game.', 'Before you take something, count to ten.', 'And while you count, look around: has everyone had some?'] },
        quiz: Q('pig-kids', 3, [{ correct: 0, q: { ar: 'إلى كم يعدّ فارس قبل أن يأخذ؟', en: 'How far does Faris count before he takes?' },
          options: [{ ar: 'إلى عشرة', en: 'To ten' }, { ar: 'إلى مئة', en: 'To a hundred' }, { ar: 'لا يعدّ', en: 'He doesn\'t count' }],
          why: { ar: 'العدّ يعطينا وقتًا لنرى غيرنا.', en: 'Counting gives us time to see others.' } }]) },
      { title: { ar: 'نصف لي ونصف لك', en: 'Half for me, half for you' },
        body: { ar: ['عدّ فارس: واحد، اثنان، ثلاثة... عشرة.', 'ونظر إلى لمى، فرأى صحنها صغيرًا.', 'فأعطاها قطعته الثانية وقال: هذه لكِ.', 'فضحكت لمى، وضحك فارس معها.'],
          en: ['Faris counted: one, two, three... ten.', 'He looked at Lama and saw her plate was small.', 'So he gave her his second piece and said: this is for you.', 'Lama laughed, and Faris laughed with her.'] },
        quiz: Q('pig-kids', 4, [{ correct: 2, q: { ar: 'ماذا أعطى فارس لأخته؟', en: 'What did Faris give his sister?' },
          options: [{ ar: 'لعبته', en: 'His toy' }, { ar: 'لا شيء', en: 'Nothing' }, { ar: 'قطعته الثانية من الكعكة', en: 'His second piece of cake' }],
          why: { ar: 'العطاء يجعل القلبين يضحكان.', en: 'Giving makes two hearts laugh.' } }]) },
      { title: { ar: 'السيارة الحمراء', en: 'The red car' },
        body: { ar: ['في المساء أخذت لمى سيارة فارس الحمراء.', 'شعر فارس بشيء حار في صدره، وأراد أن يصرخ: هذه لي!', 'وضع يده على صدره وقال: كيف أهدأ يا ماما؟', 'قالت ماما: هذا درس الإصبع التالي، الوسطى.'],
          en: ['In the evening Lama took Faris\'s red car.', 'Faris felt something hot in his chest and wanted to shout: that\'s mine!', 'He put his hand on his chest and said: how do I calm down, Mama?', 'Mama said: that is the lesson of the next finger, the middle finger.'] },
        quiz: Q('pig-kids', 5, [{ correct: 1, q: { ar: 'ماذا شعر فارس حين أخذت لمى سيارته؟', en: 'What did Faris feel when Lama took his car?' },
          options: [{ ar: 'شعر بالنعاس', en: 'He felt sleepy' }, { ar: 'شعر بشيء حار في صدره', en: 'He felt something hot in his chest' }, { ar: 'شعر بالجوع', en: 'He felt hungry' }],
          why: { ar: 'إمساك النفس عند الغضب هو باب الوسطى.', en: 'Holding yourself back when angry is the door to the middle finger.' } }]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-monkey-kids', stage: 'monkey', ages: '4-8', picture: true,
    title: { ar: 'جود والبرج الملوّن', en: 'Joud and the colourful tower' },
    chapters: [
      { title: { ar: 'برج عال جدًّا', en: 'A very tall tower' },
        body: { ar: ['بنت جود برجًا من المكعبات الملوّنة: أحمر، أزرق، أصفر.', 'صار البرج أطول منها!', 'وصفّقت جود وقالت: انظروا إلى برجي!'],
          en: ['Joud built a tower of coloured blocks: red, blue, yellow.', 'The tower grew taller than her!', 'Joud clapped and said: look at my tower!'] },
        quiz: Q('monkey-kids', 1, [{ correct: 0, q: { ar: 'ماذا بنت جود؟', en: 'What did Joud build?' },
          options: [{ ar: 'برجًا من المكعبات', en: 'A tower of blocks' }, { ar: 'بيتًا من الرمل', en: 'A sand house' }, { ar: 'طائرة من الورق', en: 'A paper plane' }],
          why: { ar: 'تعبت جود في البرج، ففرحت به.', en: 'Joud worked hard on the tower, so she was proud of it.' } }]) },
      { title: { ar: 'طاخ!', en: 'Crash!' },
        body: { ar: ['جاء أخوها الصغير عمر يحبو، ولمس البرج.', 'طاخ! وقعت المكعبات كلها على الأرض.', 'احمرّ وجه جود، ورفعت يدها لتضربه.'],
          en: ['Her little brother Omar crawled over and touched the tower.', 'Crash! All the blocks fell to the floor.', 'Joud\'s face went red, and she raised her hand to hit him.'] },
        quiz: Q('monkey-kids', 2, [{ correct: 2, q: { ar: 'ماذا أرادت جود أن تفعل حين وقع البرج؟', en: 'What did Joud want to do when the tower fell?' },
          options: [{ ar: 'أن تضحك', en: 'Laugh' }, { ar: 'أن تنام', en: 'Sleep' }, { ar: 'أن تضرب أخاها', en: 'Hit her brother' }],
          why: { ar: 'الغضب يجعل اليد تسبق القلب.', en: 'Anger makes the hand move before the heart thinks.' } }]) },
      { title: { ar: 'توقّفي', en: 'Stop' },
        body: { ar: ['تذكرت جود ما علّمها أبوها: إذا غضبتِ فتوقفي.', 'أنزلت يدها، وجلست على الأرض.', 'وأخذت نفسًا طويلًا، ثم نفسًا آخر، وقالت: أعوذ بالله من الشيطان الرجيم.'],
          en: ['Joud remembered what her father taught her: when you are angry, stop.', 'She lowered her hand and sat down on the floor.', 'She took a long breath, then another, and said: I seek refuge in Allah from the accursed devil.'] },
        quiz: Q('monkey-kids', 3, [{ correct: 1, q: { ar: 'ماذا فعلت جود لتهدأ؟', en: 'What did Joud do to calm down?' },
          options: [{ ar: 'صرخت', en: 'She shouted' }, { ar: 'جلست وتنفست واستعاذت بالله', en: 'She sat, breathed, and sought refuge in Allah' }, { ar: 'رمت المكعبات', en: 'She threw the blocks' }],
          why: { ar: 'الجلوس والتنفس وذكر الله تطفئ نار الغضب.', en: 'Sitting, breathing and remembering Allah put out the fire of anger.' } }]) },
      { title: { ar: 'عمر لا يعرف', en: 'Omar does not know' },
        body: { ar: ['نظرت جود إلى عمر، فرأته يبتسم ويمسك مكعبًا أحمر.', 'قالت في نفسها: عمر صغير، لا يعرف أن البرج مهم.', 'ثم قالت له بصوت هادئ: تعال نبنيه معًا.'],
          en: ['Joud looked at Omar and saw him smiling, holding a red block.', 'She said to herself: Omar is little, he does not know the tower matters.', 'Then she told him in a calm voice: come, let\'s build it together.'] },
        quiz: Q('monkey-kids', 4, [{ correct: 0, q: { ar: 'ماذا قالت جود لعمر في النهاية؟', en: 'What did Joud say to Omar in the end?' },
          options: [{ ar: 'تعال نبنيه معًا', en: 'Come, let\'s build it together' }, { ar: 'اذهب بعيدًا', en: 'Go away' }, { ar: 'لن ألعب معك أبدًا', en: 'I will never play with you' }],
          why: { ar: 'حين يهدأ القلب، يرى عذر غيره.', en: 'When the heart is calm, it sees the other person\'s excuse.' } }]) },
      { title: { ar: 'برج أجمل', en: 'A lovelier tower' },
        body: { ar: ['بنت جود وعمر برجًا جديدًا، أجمل من الأول.', 'وكان عمر يضع مكعبًا، وجود تضع مكعبًا.', 'فرحت أمها وقالت: أمسكتِ نفسك يا جود، والآن جاء وقت فعل الخير.', 'وهذا هو باب السبابة.'],
          en: ['Joud and Omar built a new tower, lovelier than the first.', 'Omar put on a block, then Joud put on a block.', 'Their mother was delighted and said: you held yourself back, Joud; now it is time to do good.', 'And that is the door to the index finger.'] },
        quiz: Q('monkey-kids', 5, [{ correct: 1, q: { ar: 'كيف صار البرج الجديد؟', en: 'What was the new tower like?' },
          options: [{ ar: 'وقع مرة أخرى', en: 'It fell again' }, { ar: 'أجمل من الأول', en: 'Lovelier than the first' }, { ar: 'لم تبنِه جود', en: 'Joud did not build it' }],
          why: { ar: 'من يمسك غضبه يبني أجمل مما هدم الغضب.', en: 'Whoever holds back anger builds something lovelier than anger ever broke.' } }]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-human-kids', stage: 'human', ages: '4-8', picture: true,
    title: { ar: 'صالح وجارنا العم سليم', en: 'Saleh and our neighbour, Uncle Saleem' },
    chapters: [
      { title: { ar: 'السلام عليكم', en: 'As-salamu alaykum' },
        body: { ar: ['في الصباح خرج صالح مع أبيه، فرأى العم سليم، جارهم الكبير.', 'قال صالح بصوت واضح: السلام عليكم يا عم سليم!', 'فابتسم العم سليم وقال: وعليكم السلام يا صالح.'],
          en: ['In the morning Saleh went out with his father and saw Uncle Saleem, their old neighbour.', 'Saleh said in a clear voice: as-salamu alaykum, Uncle Saleem!', 'Uncle Saleem smiled and said: wa alaykum as-salam, Saleh.'] },
        quiz: Q('human-kids', 1, [{ correct: 2, q: { ar: 'ماذا قال صالح حين رأى جاره؟', en: 'What did Saleh say when he saw his neighbour?' },
          options: [{ ar: 'لم يقل شيئًا', en: 'Nothing' }, { ar: 'ابتعد', en: 'Go away' }, { ar: 'السلام عليكم', en: 'As-salamu alaykum' }],
          why: { ar: 'السلام أول خير صغير نقدّمه للناس.', en: 'A greeting of peace is the first small good we give people.' } }]) },
      { title: { ar: 'الأكياس الثقيلة', en: 'The heavy bags' },
        body: { ar: ['رأى صالح العم سليم يحمل أكياسًا ثقيلة من السوق.', 'قال صالح: يا بابا، هل نساعده؟', 'فحمل الأب كيسين، وحمل صالح كيسًا صغيرًا فيه خبز.'],
          en: ['Saleh saw Uncle Saleem carrying heavy bags from the market.', 'Saleh said: Daddy, shall we help him?', 'So his father carried two bags, and Saleh carried a small bag of bread.'] },
        quiz: Q('human-kids', 2, [{ correct: 0, q: { ar: 'ماذا حمل صالح؟', en: 'What did Saleh carry?' },
          options: [{ ar: 'كيسًا صغيرًا فيه خبز', en: 'A small bag of bread' }, { ar: 'لا شيء', en: 'Nothing' }, { ar: 'كل الأكياس', en: 'All the bags' }],
          why: { ar: 'نساعد بقدر ما نستطيع، ولو بشيء صغير.', en: 'We help as much as we can, even with something small.' } }]) },
      { title: { ar: 'وعد صالح', en: 'Saleh\'s promise' },
        body: { ar: ['قال العم سليم: شكرًا يا صالح. هل تسقي زهوري غدًا؟ سأكون عند الطبيب.', 'قال صالح: نعم، أعدك!', 'وفي الليل وضع صالح إبريق الماء الصغير بجانب الباب حتى لا ينسى.'],
          en: ['Uncle Saleem said: thank you, Saleh. Will you water my flowers tomorrow? I will be at the doctor\'s.', 'Saleh said: yes, I promise!', 'That night Saleh put his little watering can by the door so he would not forget.'] },
        quiz: Q('human-kids', 3, [{ correct: 1, q: { ar: 'لماذا وضع صالح الإبريق بجانب الباب؟', en: 'Why did Saleh put the watering can by the door?' },
          options: [{ ar: 'ليلعب به', en: 'To play with it' }, { ar: 'حتى لا ينسى وعده', en: 'So he would not forget his promise' }, { ar: 'ليرميه', en: 'To throw it away' }],
          why: { ar: 'من يحب الوفاء يستعد له.', en: 'Whoever loves keeping promises gets ready for it.' } }]) },
      { title: { ar: 'المطر أم الكرتون؟', en: 'Rain or cartoons?' },
        body: { ar: ['في الصباح كان الكرتون المفضّل على الشاشة.', 'قال صالح: سأشاهد قليلًا ثم أذهب.', 'ثم رأى الإبريق بجانب الباب، فأطفأ الشاشة وقال: الوعد أولًا.'],
          en: ['In the morning his favourite cartoon was on the screen.', 'Saleh said: I\'ll watch a little, then go.', 'Then he saw the watering can by the door, switched off the screen and said: the promise comes first.'] },
        quiz: Q('human-kids', 4, [{ correct: 2, q: { ar: 'ماذا قال صالح حين رأى الإبريق؟', en: 'What did Saleh say when he saw the watering can?' },
          options: [{ ar: 'سأذهب غدًا', en: 'I\'ll go tomorrow' }, { ar: 'لا أريد', en: 'I don\'t want to' }, { ar: 'الوعد أولًا', en: 'The promise comes first' }],
          why: { ar: 'الوفاء بالوعد من أخلاق الإنسان الطيب.', en: 'Keeping a promise is part of good human character.' } }]) },
      { title: { ar: 'زهرة صغيرة سرّية', en: 'A little secret flower' },
        body: { ar: ['سقى صالح الزهور كلها، فلمعت أوراقها في الشمس.', 'ثم رأى زهرة صغيرة ذابلة خلف الحائط، لم يطلب منه أحد أن يسقيها.', 'فسقاها أيضًا، ولم يخبر أحدًا.', 'وفعل الخير قبل أن يُطلب منك هو باب الإبهام.'],
          en: ['Saleh watered all the flowers, and their leaves shone in the sun.', 'Then he saw a small, wilted flower behind the wall that nobody had asked him to water.', 'So he watered it too, and told no one.', 'Doing good before anyone asks you is the door to the thumb.'] },
        quiz: Q('human-kids', 5, [{ correct: 0, q: { ar: 'ماذا فعل صالح بالزهرة الذابلة؟', en: 'What did Saleh do with the wilted flower?' },
          options: [{ ar: 'سقاها ولم يخبر أحدًا', en: 'He watered it and told no one' }, { ar: 'قطفها', en: 'He picked it' }, { ar: 'تركها', en: 'He left it' }],
          why: { ar: 'الخير الخفي الذي لا يطلبه أحد هو سباق الإبهام.', en: 'Hidden good that no one asked for is the thumb\'s race.' } }]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-sabiq-kids', stage: 'sabiq', ages: '4-8', picture: true,
    title: { ar: 'تالا والصندوق الصغير', en: 'Tala and the little box' },
    chapters: [
      { title: { ar: 'صندوق الخير', en: 'The good-deeds box' },
        body: { ar: ['صنعت تالا صندوقًا صغيرًا من الكرتون، ورسمت عليه قلبًا.', 'قالت: سأضع فيه حبة فاصوليا عن كل خير أفعله.', 'لكن بشرط: لا أنتظر أن يطلب مني أحد.'],
          en: ['Tala made a little cardboard box and drew a heart on it.', 'She said: I will put a bean in it for every good thing I do.', 'But on one condition: I will not wait for anyone to ask me.'] },
        quiz: Q('sabiq-kids', 1, [{ correct: 1, q: { ar: 'ماذا تضع تالا في الصندوق؟', en: 'What does Tala put in the box?' },
          options: [{ ar: 'حلوى', en: 'Sweets' }, { ar: 'حبة فاصوليا عن كل خير', en: 'A bean for every good deed' }, { ar: 'ألعابها', en: 'Her toys' }],
          why: { ar: 'الصندوق يذكّر تالا أن تسبق إلى الخير.', en: 'The box reminds Tala to race to good.' } }]) },
      { title: { ar: 'قبل أن تطلب ماما', en: 'Before Mama asks' },
        body: { ar: ['رأت تالا الصحون على الطاولة بعد الغداء.', 'لم تقل ماما شيئًا بعد.', 'فحملت تالا صحنها وصحن أختها إلى المطبخ، ووضعت حبة في الصندوق.'],
          en: ['Tala saw the plates on the table after lunch.', 'Mama had not said anything yet.', 'So Tala carried her plate and her sister\'s plate to the kitchen, and put a bean in the box.'] },
        quiz: Q('sabiq-kids', 2, [{ correct: 0, q: { ar: 'متى حملت تالا الصحون؟', en: 'When did Tala carry the plates?' },
          options: [{ ar: 'قبل أن تطلب ماما', en: 'Before Mama asked' }, { ar: 'بعد أن صرخت ماما', en: 'After Mama shouted' }, { ar: 'لم تحملها', en: 'She did not carry them' }],
          why: { ar: 'السابق يرى الخير فيفعله قبل أن يُطلب منه.', en: 'One who races to good sees it and does it before being asked.' } }]) },
      { title: { ar: 'سباق مع صديقتها', en: 'A race with her friend' },
        body: { ar: ['في المدرسة سقط قلم المعلمة.', 'ركضت تالا لتلتقطه، وركضت صديقتها هيا أيضًا.', 'فالتقطته هيا أولًا، فضحكت تالا وقالت: سبقتِني إلى الخير يا هيا!', 'وفرحت لها من قلبها.'],
          en: ['At school, the teacher\'s pen fell.', 'Tala ran to pick it up, and so did her friend Haya.', 'Haya picked it up first, and Tala laughed and said: you beat me to the good deed, Haya!', 'And she was happy for her with all her heart.'] },
        quiz: Q('sabiq-kids', 3, [{ correct: 2, q: { ar: 'كيف شعرت تالا حين سبقتها هيا؟', en: 'How did Tala feel when Haya got there first?' },
          options: [{ ar: 'غضبت', en: 'Angry' }, { ar: 'بكت', en: 'She cried' }, { ar: 'فرحت لها', en: 'Happy for her' }],
          why: { ar: 'في سباق الخير نفرح لمن سبقنا، ولا نغار منه.', en: 'In the race to good we are happy for whoever gets there first, and we are not jealous.' } }]) },
      { title: { ar: 'الحبّات السرّية', en: 'The secret beans' },
        body: { ar: ['امتلأ الصندوق بالحبّات.', 'سألها أخوها: كم حبة عندك؟ أرني!', 'فابتسمت تالا وقالت: هذا سرّ بيني وبين الله.'],
          en: ['The box filled up with beans.', 'Her brother asked: how many beans have you got? Show me!', 'Tala smiled and said: that is a secret between me and Allah.'] },
        quiz: Q('sabiq-kids', 4, [{ correct: 1, q: { ar: 'لماذا لم تُرِ تالا أخاها الحبّات؟', en: 'Why did Tala not show her brother the beans?' },
          options: [{ ar: 'لأنها نسيت', en: 'She forgot' }, { ar: 'لأن خيرها سرّ بينها وبين الله', en: 'Because her good deeds are a secret between her and Allah' }, { ar: 'لأن الصندوق ضاع', en: 'The box was lost' }],
          why: { ar: 'الخير الخفي لا نعمله ليرانا الناس.', en: 'Hidden good is not done so that people see us.' } }]) },
      { title: { ar: 'اليد كلها', en: 'The whole hand' },
        body: { ar: ['في الليل رفعت تالا يدها، ونظرت إلى أصابعها الخمسة.', 'رأت أن الإبهام يلمس كل الأصابع، ويساعدها على الإمساك.', 'وقالت: كل يوم أبدأ من جديد، ويصعد قلبي إصبعًا إصبعًا.', 'وأنت أيضًا، ما أول خير ستسبق إليه غدًا؟'],
          ar_f: ['في الليل رفعت تالا يدها، ونظرت إلى أصابعها الخمسة.', 'رأت أن الإبهام يلمس كل الأصابع، ويساعدها على الإمساك.', 'وقالت: كل يوم أبدأ من جديد، ويصعد قلبي إصبعًا إصبعًا.', 'وأنتِ أيضًا، ما أول خير ستسبقين إليه غدًا؟'],
          en: ['At night Tala raised her hand and looked at her five fingers.', 'She saw that the thumb touches every finger and helps them hold on.', 'She said: every day I begin again, and my heart climbs finger by finger.', 'And you too: what is the first good thing you will race to tomorrow?'] },
        quiz: Q('sabiq-kids', 5, [{ correct: 0, q: { ar: 'ماذا يفعل الإبهام في اليد؟', en: 'What does the thumb do for the hand?' },
          options: [{ ar: 'يلمس كل الأصابع ويساعدها', en: 'It touches every finger and helps them' }, { ar: 'يختبئ', en: 'It hides' }, { ar: 'لا شيء', en: 'Nothing' }],
          why: { ar: 'السابق بالخيرات يساعد الجميع، ويبدأ الصعود كل يوم من جديد.', en: 'One who races to good helps everyone, and starts the climb anew each day.' } }]) }
    ]
  });
  delete window.AKHLAQ_BQ;
})();

/* ───────────── الجولة السادسة عشرة (تابع): كتابان للكبار والوالدين (15+) ─────────────
 * فصول تأملية قصيرة (250 إلى 300 كلمة). كل فكرة منسوبة إلى كتابها، ولا اقتباس حرفي من كتب الأدب والتزكية:
 * الأفكار معروضة بالمعنى. الآيات والأحاديث المشكولة من النصوص الموثّقة سابقًا فقط. الخطاب بصيغة الجمع، فلا حاجة إلى ar_f.
 */
(function () {
  window.AKHLAQ_BQ = function (bid, ci, list) {
    return list.map(function (q, k) { q.id = 'book-' + bid + '-c' + ci + 'q' + (k + 1); q.type = 'comprehension'; q.readingId = null; return q; });
  };
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-zombie-adult', stage: 'zombie', ages: '15+',
    title: { ar: 'حين يستيقظ القلب', en: 'When the heart wakes' },
    chapters: [
      { title: { ar: 'مشغول طوال اليوم', en: 'Busy all day' },
        body: { ar: [
            'يرن المنبه في السادسة والنصف، فيمد مازن يده إليه، وقبل أن يطفئه يكون قد رأى الرقم: سبع وأربعون رسالة في مجموعة الصف. يقرأ أطرافها وهو يغسل وجهه، ويرسل وجهًا ضاحكًا على نكتة لم يفتحها، ويحفظ «سلسلة الأيام» مع صديقه مهند بصورة للسقف. مازن في السادسة عشرة، من أوائل صفه، ويومه لا فراغ فيه.',
            'المدرسة، ثم الدرس الخصوصي، ثم الواجب ومقطع يعمل في نافذة أخرى، ثم العشاء وسماعة في أذن واحدة. تسأله أمه عن امتحان الكيمياء، فيقول: تمام، ولا يتذكر بعد دقيقة أنها سألت. وفي منتصف الليل ما زال إبهامه يصعد بالشاشة، مقطعًا بعد مقطع، وهو يقول لنفسه: خمس دقائق ثم أنام. ويمر أبوه بالباب فيسأله: كيف كان يومك؟ فيقول: عادي. ثم يحاول أن يتذكر شيئًا واحدًا من اليوم اختاره هو، فلا يجد. كل ما في اليوم جاءه من تلقاء نفسه، ومازن تبعه.',
            'هذه صورة الغفلة كما تبدو اليوم: يوم ممتلئ، وصاحبه غائب عنه. وأكثر الغافلين مشغولون جدًّا، والانشغال أحسن ستار للغفلة، لأنه يشبه الحياة. وقد وصف النبي صلى الله عليه وآله وسلم الفرق بكلمات قليلة: «مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لَا يَذْكُرُ مَثَلُ الْحَيِّ وَالْمَيِّتِ» (صحيح البخاري 6407). جعل الميزان حياة القلب، وترك النشاط والكسل، والنجاح والتعثر، خارج هذا الميزان.',
            'والكبير الذي يقرأ هذه السطور يعرف يوم مازن، وإن اختلفت الشاشة: بريد العمل مكان مجموعة الصف، وأخبار المساء مكان المقاطع، والطعام يؤكل والذهن في اجتماع الغد. والعلامات واحدة عند الجميع: نأكل ولا نذكر من رزقنا، ونسمع أهلنا ولا نصغي إليهم، ونفتح الهاتف بلا سبب ونغلقه ولا نعرف ماذا رأينا. والغفلة تأتي هكذا، شيئًا فشيئًا، مع كثرة الأصوات وتكرار العادة، حتى تصير العادة هي التي تعيش اليوم عنا.',
            'تلك الليلة بقي سؤال أبيه مع مازن في الظلام، وقد تغيّر قليلًا: إن كان يومي كله عاديًّا، فأين كنت أنا فيه؟ ترك الهاتف على الطاولة هذه المرة، وبقي ينظر إلى السقف الذي صوّره في الصباح، ويحاول أن يراه.'
          ], en: [
            'The alarm goes at half past six. Mazen reaches for it, and before he has switched it off he has seen the number: forty-seven messages in the class group. He skims them while washing his face, sends a laughing face to a joke he never opened, and keeps his streak with his friend Muhannad alive with a photo of the ceiling. Mazen is sixteen, near the top of his class, and his day has no empty corners.',
            'School, then private lessons, then homework with a video running in another tab, then dinner with one earbud in. His mother asks about the chemistry test; he says: fine, and a minute later has no memory of her asking. At midnight his thumb is still pushing the feed upwards, clip after clip, while he tells himself: five more minutes, then sleep. His father passes the door and asks: how was your day? He says: normal. Then he tries to recall one thing in the day that he chose himself, and finds nothing. Everything in it simply arrived, and Mazen followed.',
            'This is what heedlessness looks like now: a full day, with its owner absent from it. Most heedless people are very busy, and busyness is the best disguise heedlessness has, because it looks like life. The Prophet, peace and blessings be upon him and his family, put the difference in a few words. Meaning: the one who remembers his Lord and the one who does not are like the living and the dead (Sahih al-Bukhari 6407). He made the life of the heart the measure, and left energy and idleness, success and failure, off the scale.',
            'An adult reading this knows Mazen\'s day, only with a different screen: work email in place of the class group, the evening news in place of the clips, a meal eaten while the mind sits in tomorrow\'s meeting. The signs are the same for everyone: we eat without remembering who provided it, hear our family without listening, open the phone for no reason and close it without knowing what we saw. Heedlessness arrives like this, little by little, through the noise and the repeated habit, until the habit is living our days for us.',
            'That night his father\'s question stayed with Mazen in the dark, slightly changed: if my whole day was normal, where was I in it? This time he left the phone on the table, and lay looking at the ceiling he had photographed that morning, trying to actually see it.'
          ] },
        quiz: Q('zombie-adult', 1, [
          { correct: 1, q: { ar: 'بماذا أجاب مازن حين سأله أبوه عن يومه؟', en: 'What did Mazen answer when his father asked about his day?' },
            options: [{ ar: 'تمام، وامتحان الكيمياء كان سهلًا', en: 'Fine, and the chemistry test was easy' }, { ar: 'عادي', en: 'Normal' }, { ar: 'لم يسمع السؤال لأن السماعة في أذنه', en: 'He did not hear, because his earbud was in' }],
            why: { ar: '«عادي» كلمة يوم مرّ ولم يحضره صاحبه، فلم يجد مازن فيه شيئًا اختاره هو.', en: '"Normal" is the word for a day its owner was not present for; Mazen could find nothing in it he had chosen.' } },
          { correct: 0, q: { ar: 'بماذا وصف الحديث الفرق بين من يذكر ربه ومن لا يذكره؟', en: 'How does the hadith describe the difference between one who remembers his Lord and one who does not?' },
            options: [{ ar: 'الحي والميت', en: 'The living and the dead' }, { ar: 'المشغول والفارغ', en: 'The busy and the idle' }, { ar: 'الناجح والمتعثر', en: 'The successful and the struggling' }],
            why: { ar: 'جعل الحديث الفرق في حياة القلب، ومازن كان مشغولًا وناجحًا، ويومه غائب عنه.', en: 'The hadith places the difference in the life of the heart; Mazen was busy and successful, and absent from his own day.' } }
        ]) },

      { title: { ar: 'اليقظة أول المنازل', en: 'Awakening, the first station' },
        body: { ar: [
            'يوم الأحد وصلت رسالة قصيرة إلى مجموعة الصف: توفي جد مهند فجر اليوم. كان مازن يعرف الرجل؛ كان يقف عند باب المسجد بعد الجمعة ويوزع التمر على الأولاد، ويسأل كل واحد عن اسمه كأنه يسمعه أول مرة. كتب أربعة عشر شخصًا «رحمه الله»، ثم عادت المجموعة بعد ساعة إلى ملصقاتها ونكاتها، كأن شيئًا لم يحدث.',
            'وفي العزاء جلس مازن بجانب مهند. كان القارئ يتلو، والرجال صامتون، والهاتف في جيبه يهتز مرة بعد مرة، فتركه في جيبه. نظر إلى الكرسي الذي كان الجد يجلس عليه في الزاوية، وإلى عصاه المسندة إلى الجدار، وخطر له خاطر جاءه هذه المرة واضحًا: الوقت يمشي، ولي أنا أيضًا آخر. ثم تلا القارئ آية سمعها مازن مرات كثيرة، فسمعها الآن كأنها تسأله باسمه: ﴿أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَنْ تَخْشَعَ قُلُوبُهُمْ لِذِكْرِ اللَّهِ﴾ (الحديد 57:16).',
            'لهذه اللحظة اسم قديم. حين رتّب أبو إسماعيل الهروي الأنصاري في كتابه «منازل السائرين» طريق السائر إلى الله منازل متتابعة، جعل أولها منزلة اليقظة: قبل التوبة، وقبل المحاسبة، وقبل كل عمل من أعمال القلوب، ينتبه القلب من نومه. ثم شرح ابن القيم الكتاب في «مدارج السالكين» وبدأ باليقظة كذلك، لأن ما بعدها يُبنى عليها. وقد تأتي اليقظة من كلمة صادقة، أو مرض قصير، أو موت قريب، أو صمت في آخر الليل.',
            'والآية تخاطب الذين آمنوا: المصلي والصائم وقارئ القرآن، أي تخاطب مازن الذي يصلي الجمعة، وأباه، وكل من يقرأ هذه السطور. وصيغتها سؤال: ﴿أَلَمْ يَأْنِ﴾، أي: أما آن الأوان؟ سؤال يترك الجواب لصاحبه، ويأتمنه على أن يحكم في نفسه بنفسه.',
            'في المساء فتح مازن المجموعة، فكتب ثم مسح، ثم كتب ثم مسح. وفي النهاية أغلقها، وأرسل إلى مهند وحده: «أنا عند بابكم، إن أردت أن نمشي». وبعد دقيقة رأى مهند ينزل الدرج. ومشيا ساعة كاملة، لم يقل فيها أحدهما شيئًا مهمًّا، وكانت أول ساعة في ذلك الأسبوع يتذكرها مازن كلها.'
          ], en: [
            'On Sunday a short message arrived in the class group: Muhannad\'s grandfather had passed away at dawn. Mazen knew the old man. He used to stand at the mosque door after Friday prayer handing out dates to the boys, asking each one his name as if hearing it for the first time. Fourteen people wrote "may Allah have mercy on him", and an hour later the group was back to its stickers and jokes, as if nothing had happened.',
            'At the condolence gathering Mazen sat beside Muhannad. The reciter was reading, the men were silent, and the phone in his pocket buzzed again and again. He left it there. He looked at the chair in the corner where the grandfather used to sit, and at his walking stick propped against the wall, and a thought came to him, clear this time: time is moving, and it has an end for me too. Then the reciter read a verse Mazen had heard many times, and now he heard it as if it were asking him by name. Meaning: has the time not come for the hearts of those who believe to be humbled at the remembrance of Allah? (al-Hadid 57:16).',
            'This moment has an old name. When Abu Isma\'il al-Harawi al-Ansari set out the seeker\'s road to Allah as a sequence of stations in his book "Manazil al-Sa\'irin" (The Stations of the Wayfarers), he made the first of them the station of awakening: before repentance, before self-accounting, before any work of the heart, the heart stirs from its sleep. Ibn al-Qayyim later wrote a commentary on the book, "Madarij al-Salikin", and he too began with awakening, because all that follows is built on it. Awakening may come from a sincere word, a short illness, a death close by, or a silence late at night.',
            'The verse addresses those who believe: the one who prays, fasts and recites. It addresses Mazen, who goes to Friday prayer, and his father, and everyone reading these lines. And it comes as a question: has the time not come? A question leaves the answer with the one asked, and trusts them to judge themselves.',
            'In the evening Mazen opened the group, typed, deleted, typed again, deleted again. In the end he closed it and sent Muhannad a message of his own: "I\'m outside your door, if you want to walk." A minute later he saw Muhannad coming down the stairs. They walked for a whole hour, and neither said anything important, and it was the first hour that week that Mazen remembered from beginning to end.'
          ] },
        quiz: Q('zombie-adult', 2, [
          { correct: 2, q: { ar: 'ما أول المنازل في كتاب «منازل السائرين» للهروي؟', en: 'What is the first station in al-Harawi\'s "Manazil al-Sa\'irin"?' },
            options: [{ ar: 'المحاسبة', en: 'Self-accounting' }, { ar: 'التوبة', en: 'Repentance' }, { ar: 'اليقظة', en: 'Awakening' }],
            why: { ar: 'جعل الهروي اليقظة أول المنازل قبل التوبة والمحاسبة، وبدأ بها ابن القيم في «مدارج السالكين».', en: 'Al-Harawi put awakening first, before repentance and self-accounting, and Ibn al-Qayyim began with it in "Madarij al-Salikin".' } },
          { correct: 0, q: { ar: 'ماذا فعل مازن بعد أن كتب في المجموعة ومسح أكثر من مرة؟', en: 'What did Mazen do after typing and deleting in the group several times?' },
            options: [{ ar: 'أرسل إلى مهند وحده يعرض أن يمشيا معًا', en: 'Messaged Muhannad alone, offering to walk with him' }, { ar: 'كتب في المجموعة رسالة طويلة عن الموت', en: 'Wrote a long message about death in the group' }, { ar: 'خرج من المجموعة كلها', en: 'Left the group altogether' }],
            why: { ar: 'ظهرت اليقظة في فعل صغير: انتبه إلى صديقه، فذهب إليه.', en: 'Awakening showed itself in a small act: he noticed his friend, and went to him.' } }
        ]) },

      { title: { ar: 'هل يتغير الخُلق؟', en: 'Can character change?' },
        body: { ar: [
            'بعد العزاء قرر مازن أن يتغير كله دفعة واحدة. حذف أربعة تطبيقات، وضبط المنبه على الفجر، وكتب جدولًا: ساعة قراءة كل يوم، ورياضة، ولا هاتف بعد التاسعة. صمد الجدول ثلاثة أيام. وفي اليوم الرابع نزّل التطبيقات من جديد «ليرى شيئًا واحدًا فقط»، وسهر حتى الواحدة. وفي الصباح قال له مهند وهو يضحك: أنت هكذا يا مازن، هذا طبعك. فضحك مازن معه، وحمل الجملة في صدره طوال اليوم: هذا طبعي.',
            'والسؤال الذي حمله مازن قديم. ففي «تهذيب الأخلاق» يعرّف ابن مسكويه الخلق بأنه حال للنفس تدعوها إلى أفعالها من غير فكر ولا روية. فالخلق هو الحال التي يخرج منها الفعل سهلًا، والفعل علامتها. ويرى أن هذه الحال قد تكون من أصل المزاج، وقد تُكتسب بالعادة والتدريب حتى تصير كالطبع. فكثير مما نسميه «طبعي» هو عادة طال عليها الزمن.',
            'وفي «إحياء علوم الدين» عقد أبو حامد الغزالي كتاب «رياضة النفس وتهذيب الأخلاق»، وردّ فيه على من يقول إن الأخلاق لا تتغير بحجة يفهمها كل أحد: لو كانت لا تقبل التغيير لبطلت الوصايا والمواعظ والتأديب. ثم سأل: إذا كان البازي المتوحش يؤنَّس، والفرس الجامح يُروَّض، والكلب يتأدب فيمسك الصيد لصاحبه، فكيف يُنكَر ذلك في الإنسان؟',
            'وما حدث لمازن في اليوم الرابع يحدث لأكثر من يبدأ: يريد أن يقفز إلى آخر الدرج، فيتعب ويسقط ويقول: لست من هذا الطريق. والذي تعلّم مهارة يعرف الطريق الآخر. لاعب الكرة الذي يدرّب قدمه اليسرى يخطئ مئة مرة، ثم تطيعه القدم، ثم ينسى يومًا أنها كانت ضعيفة. وكذلك السائر: يستيقظ ثم يغفل ثم يستيقظ، وكل رجوع أقرب من الذي قبله.',
            'في المساء فتح مازن جدوله الكبير، وشطب كل سطر فيه إلا سطرًا صغيرًا: الهاتف يبيت في المطبخ. كتبه على ورقة لاصقة، وألصقها على الشاحن نفسه. وقال لنفسه وهو يطفئ النور: ثلاثون ليلة، ثم نرى ما طبعي.'
          ], en: [
            'After the condolence gathering Mazen decided to change everything at once. He deleted four apps, set his alarm for dawn, and wrote a timetable: an hour of reading a day, exercise, no phone after nine. The timetable held for three days. On the fourth he reinstalled the apps "just to check one thing" and was up until one. The next morning Muhannad laughed and told him: that\'s just you, Mazen. It\'s your nature. Mazen laughed along, and carried the sentence around all day: it\'s my nature.',
            'The question Mazen was carrying is an old one. In "Tahdhib al-Akhlaq" (The Refinement of Character), Ibn Miskawayh defines character as a state of the soul that moves it to its actions without thought or deliberation. Character is the state from which an act comes easily, and the act is its sign. He holds that this state may come from one\'s original temperament, or may be acquired through habit and training until it becomes like nature. Much of what we call "my nature" is a habit that has had a long time to settle.',
            'In "Ihya\' \'Ulum al-Din" (The Revival of the Religious Sciences), Abu Hamid al-Ghazali devoted a book to "Disciplining the Soul and Refining Character", answering those who say character cannot change with an argument anyone can follow: if it could not change, all counsel, admonition and upbringing would be pointless. Then he asked: if a wild hawk can be tamed, an unruly horse broken in, and a dog trained to hold its catch for its master, how can this be denied of a human being?',
            'What happened to Mazen on the fourth day happens to most people who start: they try to leap to the top of the stairs, tire, fall, and decide this road is not for them. Anyone who has learned a skill knows the other way. A footballer training his weaker left foot misses a hundred times, then the foot starts to obey, then one day he forgets it was ever weak. The wayfarer is the same: waking, drifting, waking again, and each return comes sooner than the last.',
            'In the evening Mazen opened his big timetable and crossed out every line but one small one: the phone sleeps in the kitchen. He wrote it on a sticky note and stuck it to the charger itself. As he switched off the light he told himself: thirty nights, then we\'ll see what my nature is.'
          ] },
        quiz: Q('zombie-adult', 3, [
          { correct: 1, q: { ar: 'كيف عرّف ابن مسكويه الخلق في «تهذيب الأخلاق»؟', en: 'How did Ibn Miskawayh define character in "Tahdhib al-Akhlaq"?' },
            options: [{ ar: 'فعل حسن يفعله الإنسان مرة بعد مرة', en: 'A good act a person does again and again' }, { ar: 'حال للنفس تدعوها إلى أفعالها من غير فكر ولا روية', en: 'A state of the soul that moves it to its actions without thought or deliberation' }, { ar: 'مزاج يولد مع الإنسان ولا يتغير', en: 'A temperament one is born with that never changes' }],
            why: { ar: 'الخلق عنده هو الحال التي يسهل منها الفعل، وقد تُكتسب بالعادة والتدريب حتى تصير كالطبع.', en: 'For him character is the state that makes the act easy, and it can be acquired by habit and training until it becomes like nature.' } },
          { correct: 2, q: { ar: 'ماذا أبقى مازن من جدوله الكبير؟', en: 'What did Mazen keep from his big timetable?' },
            options: [{ ar: 'ساعة القراءة كل يوم', en: 'The daily hour of reading' }, { ar: 'المنبه على الفجر', en: 'The dawn alarm' }, { ar: 'أن يبيت الهاتف في المطبخ', en: 'The phone sleeping in the kitchen' }],
            why: { ar: 'جدول كبير سقط في أربعة أيام، وفعل صغير يتكرر ثلاثين ليلة أقرب إلى أن يصير عادة.', en: 'A big timetable fell apart in four days; one small act repeated for thirty nights has a far better chance of becoming habit.' } }
        ]) },

      { title: { ar: 'وقفة في آخر اليوم', en: 'A pause at the end of the day' },
        body: { ar: [
            'في أولى الليالي الثلاثين جلس مازن على سريره بلا هاتف، ولم يعرف ماذا يفعل بالدقائق العشر قبل النوم. فتح دفترًا، وكتب في أعلى الصفحة: ماذا حدث اليوم؟ ثم كتب سطرًا واحدًا وتوقف: «أضعت الحصة الأخيرة كلها في الهاتف، وقلت لأمي إنني ذاكرت». قرأ السطر فثقل عليه، فكتب تحته: «أنا فاشل». ثم أغلق الدفتر بقوة.',
            'هذه الوقفة مع النفس باب قديم في التزكية. كتب فيه الحارث المحاسبي حتى عُرف به، وكتابه «الرعاية لحقوق الله» من أقدم ما كُتب في مراقبة النفس ومعرفة خفاياها. ثم عقد الغزالي في «الإحياء» كتاب «المراقبة والمحاسبة»، ورتّب فيه مقامات متتابعة أولها ثلاثة: أن يشارط الإنسان نفسه في أول النهار على ما يريد، ثم يراقبها في أثناء العمل، ثم يحاسبها في آخره. فاليوم الذي يبدأ بشرط واضح يجد صاحبه في المساء ما يحاسب نفسه عليه، ويختار اليوم بدل أن يجرّه النهار حيث شاء.',
            'وفي القرآن قسم بالنفس التي تلوم صاحبها: ﴿وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ﴾ (القيامة 75:2). فلوم مازن لنفسه تلك الليلة علامة حياة، والغافل لا يلوم نفسه لأنه لا يراها. ويبقى بعد الآية سؤال لكل من يمسك دفتره في المساء: أي لوم هذا؟ لوم يرى الخطأ ويقصد إصلاحه، أم حكم يغلق الدفتر ويقول «أنا فاشل»؟',
            'ومن حكمة المحاسبة أن تبدأ بالشكر. نذكر أولًا ما أعاننا الله عليه من خير، ولو كان صغيرًا، ثم ننظر في التقصير، ثم نختار خطوة واحدة للغد. فالنفس التي لا تسمع إلا اللوم تملّ وتهرب، والنفس التي ترى خيرها تفرح وتطمع في المزيد. وبهذا الميزان تبقى المحاسبة إصلاحًا، وتبتعد عن جلد الذات.',
            'في الليلة الثانية فتح مازن الدفتر من جديد، وقسم الصفحة ثلاثة أسطر. كتب في الأول: «مشيت مع مهند، وشرحت لسديم مسألة الرياضيات». وفي الثاني: «فتحت الهاتف في الحصة ثلاث مرات، بلا سبب». وفي الثالث: «غدًا: أقول لأمي الحقيقة عن المذاكرة». ثم أغلق الدفتر برفق هذه المرة.'
          ], en: [
            'On the first of the thirty nights Mazen sat on his bed without his phone and did not know what to do with the ten minutes before sleep. He opened a notebook and wrote at the top of the page: what happened today? Then he wrote one line and stopped: "Wasted the whole last lesson on my phone, and told Mum I\'d been studying." He read it back, felt its weight, and wrote underneath: "I\'m a failure." Then he slammed the notebook shut.',
            'Pausing with oneself like this is an old door in the work of purifying the soul. Al-Harith al-Muhasibi wrote so much about it that he became known by it, and his book "al-Ri\'aya li-Huquq Allah" (Observing the Rights of Allah) is among the earliest works on watching the soul and knowing its hidden corners. Later al-Ghazali devoted a book of the "Ihya\'" to "Vigilance and Self-Accounting", setting out successive steps, the first three being: to set terms with the soul at the start of the day about what one intends, to watch it while at work, and to hold it to account at the end. A day that begins with clear terms gives its owner something to account for in the evening; he chooses the day instead of letting it drag him wherever it likes.',
            'The Quran swears by the soul that reproaches its owner. Meaning: and I swear by the self-reproaching soul (al-Qiyama 75:2). Mazen\'s self-reproach that night was a sign of life; the heedless do not reproach themselves, because they do not see themselves. And after the verse a question remains for anyone holding a notebook in the evening: what kind of reproach is this? One that sees the mistake and means to mend it, or a verdict that slams the notebook and says "I\'m a failure"?',
            'There is wisdom in beginning the account with gratitude. We first recall the good Allah helped us do, however small, then look at where we fell short, then choose one step for tomorrow. A soul that hears nothing but blame grows weary and runs away; a soul that sees its own good is glad and hopes for more. Kept in this balance, self-accounting stays a work of repair and well away from self-punishment.',
            'On the second night Mazen opened the notebook again and divided the page into three lines. In the first he wrote: "Walked with Muhannad, and explained the maths problem to Sadeem." In the second: "Opened my phone in class three times, for no reason." In the third: "Tomorrow: tell Mum the truth about studying." Then he closed the notebook, gently this time.'
          ] },
        quiz: Q('zombie-adult', 4, [
          { correct: 0, q: { ar: 'ما المقامات الثلاثة الأولى في كتاب «المراقبة والمحاسبة» للغزالي، بترتيبها؟', en: 'What are the first three steps in al-Ghazali\'s "Vigilance and Self-Accounting", in order?' },
            options: [{ ar: 'المشارطة ثم المراقبة ثم المحاسبة', en: 'Setting terms, then vigilance, then accounting' }, { ar: 'المحاسبة ثم المراقبة ثم المشارطة', en: 'Accounting, then vigilance, then setting terms' }, { ar: 'المراقبة ثم المشارطة ثم المحاسبة', en: 'Vigilance, then setting terms, then accounting' }],
            why: { ar: 'يشارط نفسه في الصباح، ويراقبها في النهار، ويحاسبها في المساء.', en: 'Terms are set in the morning, the soul is watched through the day, and accounted for in the evening.' } },
          { correct: 1, q: { ar: 'ما الذي تغيّر في دفتر مازن في الليلة الثانية؟', en: 'What changed in Mazen\'s notebook on the second night?' },
            options: [{ ar: 'كتب صفحة كاملة من اللوم', en: 'He filled a whole page with blame' }, { ar: 'بدأ بخير فعله، ثم تقصيره، ثم خطوة للغد', en: 'He began with something good he had done, then his shortfall, then a step for tomorrow' }, { ar: 'ترك الدفتر وعاد إلى الهاتف', en: 'He dropped the notebook and went back to his phone' }],
            why: { ar: 'المحاسبة التي تبدأ بالشكر تحفظ صاحبها من جلد الذات، فأغلق الدفتر برفق.', en: 'Accounting that starts with gratitude keeps a person from punishing himself, so he closed the notebook gently.' } }
        ]) },

      { title: { ar: 'إيقاظ بلا تجريح', en: 'Waking without wounding' },
        body: { ar: [
            'بعد أسبوعين صار مازن يرى ما فاته طويلًا، وكان أول ما رآه أخته سديم، ذات الاثني عشر عامًا، على الأريكة والهاتف أمام وجهها. وعلى العشاء قال لها أمام الجميع: أنتِ غائبة طوال الوقت، لا تسمعين أحدًا، صرتِ مثل الجدار. سكتت سديم، وأنزلت الهاتف، وأكلت بسرعة، ثم دخلت غرفتها وأغلقت الباب. وبقي مازن ينظر إلى صحنها، وتذكّر وجهه هو حين كانت أمه تقول له الكلام نفسه، وتذكّر أنه كان يغلق الباب أيضًا.',
            'وتذكّر شيئًا آخر انتبه إليه الآن فقط: أمه تركت هذا الكلام منذ أشهر. صارت تضع هاتفها في سلة عند باب المطبخ قبل كل وجبة، وتسأله عن يومه وتنتظر الجواب. فسألها وهو يغسل الصحون: لماذا توقفتِ عن تنبيهي؟ فضحكت وقالت: كنت أنبّهك عشر مرات في اليوم، فصار كلامي صوتًا في الخلفية. فقلت: أسكت أنا، ويتكلم ما أفعله.',
            'وما قالته أمه قاله الغزالي قبل قرون. ففي كتاب «رياضة النفس» من «الإحياء» فصل في تربية الصبيان، يذكر فيه بالمعنى أن الصبي أمانة عند والديه، وقلبه الطاهر جوهرة نفيسة قابلة لكل ما يُنقش عليها. ويوصي إذا ظهر منه فعل جميل أن يُكرم عليه ويُمدح، وإذا أخطأ مرة أن يُتغافل عنه ولا يُكشف ستره، لا سيما إن ستره هو واجتهد في إخفائه، فإن عاد عوتب سرًّا. ويحذّر من كثرة العتاب في كل حين، لأنها تهوّن عليه سماع الملامة، ويسقط بها وقع الكلام من قلبه.',
            'والوصية تصلح لكل من يريد أن يوقظ غيره: للأب مع ابنه، وللأخ مع أخته، وللصديق في المجموعة. فاليقظة تُرى قبل أن تُسمع. الصغير والمراهق يريان كيف نأكل، وكيف نمسك الهاتف، وكيف نصغي إليهما، ويتعلمان من ذلك أكثر مما يتعلمان من الكلام. والكرامة شرط في الطريق كله: نسمّي السلوك باسمه، ويبقى صاحبه أكبر منه.',
            'في الليلة التالية طرق مازن باب سديم وقال: آسف على كلام العشاء. ثم وضع هاتفه في سلة المطبخ، ولم يزد شيئًا. وبعد يومين، قبل العشاء، رأى هاتفها في السلة بجانب هاتفه. وفي المساء نفسه ظهر له إعلان سماعات جديدة، وسماعته تعمل جيدًا، فتوقف إبهامه عنده طويلًا. رأى الرغبة وهي تكبر في صدره، بالوضوح الذي صار يرى به سديم ومهند وأمه. وبقي معه سؤال يفتح الباب التالي: ماذا يفعل الإنسان بما يريد؟'
          ], en: [
            'Two weeks later Mazen was seeing things he had long missed, and the first thing he saw was his twelve-year-old sister Sadeem on the sofa with her phone in front of her face. At dinner he told her in front of everyone: you\'re never here, you don\'t listen to anyone, you\'ve turned into a wall. Sadeem went quiet, lowered the phone, ate quickly, then went to her room and shut the door. Mazen sat looking at her plate. He remembered his own face when his mother used to say the same things to him, and remembered that he used to shut his door too.',
            'He remembered something else, which he noticed only now: his mother had stopped saying those things months ago. She had started putting her own phone in a basket by the kitchen door before every meal, asking about his day and waiting for the answer. So while washing the dishes he asked her: why did you stop telling me off? She laughed and said: I was telling you ten times a day, and my words had become background noise. So I thought: I\'ll keep quiet, and let what I do do the talking.',
            'What his mother said, al-Ghazali said centuries ago. In the book on "Disciplining the Soul" in the "Ihya\'" there is a section on raising children, where he says, in meaning, that a child is a trust in the parents\' hands, and the child\'s pure heart is a precious jewel ready to take whatever is engraved on it. He advises that when the child does something fine, they should be honoured and praised for it; when they slip once, the slip should be overlooked and not exposed, especially if the child has covered it and tried to hide it; and if they repeat it, they should be reproached in private. He warns against reproaching all the time, because it makes blame easy to hear, until words no longer land in the heart.',
            'The advice suits anyone who wants to wake someone else: a father with his son, a brother with his sister, a friend in the group. Wakefulness is seen before it is heard. Children and teenagers watch how we eat, how we hold the phone, how we listen to them, and they learn more from that than from anything we say. And dignity is a condition of the whole road: we call the behaviour by its name, and the person stays bigger than it.',
            'The next evening Mazen knocked on Sadeem\'s door and said: sorry about what I said at dinner. Then he put his phone in the kitchen basket and said nothing more. Two days later, just before dinner, he saw her phone in the basket next to his. That same evening an advert for new headphones appeared on his screen, though his own worked fine, and his thumb stopped on it for a long time. He watched the wanting grow in his chest, as clearly as he now saw Sadeem, Muhannad and his mother. And a question stayed with him that opens the next door: what does a person do with what they want?'
          ] },
        quiz: Q('zombie-adult', 5, [
          { correct: 2, q: { ar: 'ماذا يوصي الغزالي إذا أخطأ الصبي مرة واحدة؟', en: 'What does al-Ghazali advise when a child slips once?' },
            options: [{ ar: 'أن يُنبَّه أمام إخوته ليتعلموا منه', en: 'Point it out in front of the siblings so they learn from it' }, { ar: 'أن يُعاقب فورًا حتى لا يعود', en: 'Punish it at once so it is not repeated' }, { ar: 'أن يُتغافل عنه ولا يُكشف ستره', en: 'Overlook it and do not expose the child' }],
            why: { ar: 'التغافل عن الزلة الأولى يحفظ حياء الصبي وكرامته، فإن عاد عوتب سرًّا.', en: 'Overlooking the first slip protects the child\'s modesty and dignity; if it is repeated, the reproach is private.' } },
          { correct: 0, q: { ar: 'لماذا توقفت أم مازن عن تنبيهه؟', en: 'Why did Mazen\'s mother stop telling him off?' },
            options: [{ ar: 'لأن كثرة تنبيهها جعلت كلامها صوتًا في الخلفية، فاختارت أن يتكلم فعلها', en: 'Her constant reminders had become background noise, so she chose to let her actions speak' }, { ar: 'لأنها يئست من أن يتغير', en: 'She had given up on him changing' }, { ar: 'لأن أباه طلب منها أن تتركه', en: 'His father had asked her to leave him alone' }],
            why: { ar: 'هذا ما حذّر منه الغزالي: كثرة العتاب تهوّن سماع الملامة. والقدوة تبلغ حيث يقف الكلام.', en: 'This is what al-Ghazali warned of: constant reproach makes blame easy to hear. Example reaches where words stop.' } }
        ]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-pig-adult', stage: 'pig', ages: '15+',
    title: { ar: 'البطن والقلب', en: 'The stomach and the heart' },
    chapters: [
      { title: { ar: 'قوى النفس الثلاث', en: 'The three powers of the soul' },
        body: { ar: [
            'قسّم ابن مسكويه في كتابه «تهذيب الأخلاق» قوى النفس ثلاثًا: قوة ناطقة يفكر بها الإنسان ويميز، وقوة غضبية يدفع بها عن نفسه ويقدم، وقوة شهوية يطلب بها الطعام والشراب واللذة. وجعل لكل قوة فضيلة إذا اعتدلت: فالحكمة فضيلة القوة الناطقة، والشجاعة فضيلة الغضبية، والعفة فضيلة الشهوية. فإذا اعتدلت الثلاث وتعاونت، ظهرت فضيلة رابعة هي العدالة.',
            'وأهم ما في هذا التقسيم أن الشهوة ليست شرًّا في ذاتها. فلولا شهوة الطعام لما أكل الإنسان ولا عاش، ولولا الرغبة في الراحة لما نام وتجدد. المشكلة ليست في وجود الرغبة، بل في أن تحكم الرغبة صاحبها بدل أن يحكمها هو. فالعفة عند ابن مسكويه ليست قتل الشهوة، بل ضبطها حتى تخدم العقل ولا تقوده.',
            'وهذا ما يقصده التطبيق بالمرتبة الثانية، مرتبة الشره. فهي ليست وصفًا لإنسان يحب الطعام، بل لحال تصير فيها الرغبة هي التي تقرر: آخذ أكبر قطعة دون أن أنظر حولي، وأريد كل شيء الآن، وأغضب إذا شاركني أحد. وكل واحد منا يمر بهذه الحال أحيانًا، صغيرًا كان أو كبيرًا.',
            'والقرآن يذكّرنا بأن هذه النزعة في النفس معروفة منذ القدم: ﴿إِنَّ النَّفْسَ لَأَمَّارَةٌ بِالسُّوءِ إِلَّا مَا رَحِمَ رَبِّي﴾ (يوسف 12:53). والآية على لسان امرأة العزيز في سياق قصة يوسف عليه السلام، وفيها اعتراف بأن النفس تدفع صاحبها، واستثناء رحيم يفتح باب النجاة.',
            'فأول خطوة في هذا الباب أن نعرف قوانا ولا نخجل منها. فمن عرف أن فيه شهوة تطلب، وعقلًا يزن، استطاع أن يجعل العقل أميرًا والشهوة خادمًا، وهذا هو العمل الذي يتدرب عليه الطفل في البنصر. ولا يتم هذا العمل في يوم واحد، بل يحتاج إلى صبر وتكرار، وإلى بيت يذكّر بلطف ولا يعيّر، ويفرح بكل خطوة صغيرة في الاتجاه الصحيح.'
          ],
          en: [
            'In his book "Tahdhib al-Akhlaq" (The Refinement of Character), Ibn Miskawayh divided the powers of the soul into three: a rational power by which a person thinks and discerns, an irascible power by which one defends and steps forward, and an appetitive power by which one seeks food, drink and pleasure. He gave each power a virtue when it is balanced: wisdom for the rational, courage for the irascible, and temperance for the appetitive. When all three are balanced and work together, a fourth virtue appears: justice.',
            'The most important point in this division is that desire is not evil in itself. Without appetite for food, no one would eat or live; without the wish for rest, no one would sleep and be renewed. The problem is not that desire exists, but that it rules its owner instead of being ruled. For Ibn Miskawayh, temperance is not killing desire but governing it, so that it serves reason rather than leading it.',
            'This is what the app means by the second rank, the rank of greed. It does not describe a person who enjoys food, but a state in which desire makes the decisions: I take the biggest piece without looking around, I want everything now, I get angry if someone shares with me. Each of us passes through this state at times, young or old.',
            'The Quran reminds us that this tendency in the soul has long been known. Meaning (not a translation): indeed the soul commands evil, except whom my Lord has mercy upon (Yusuf 12:53). The words come in the story of Yusuf, peace be upon him, and contain an admission that the soul pushes its owner, and a merciful exception that opens the way to safety.',
            'So the first step here is to know our powers without being ashamed of them. Whoever knows there is a desire in them that asks and a mind that weighs can make the mind the master and the desire the servant. That is the work a child practises at the ring finger. It is not done in a day; it needs patience, repetition, and a home that reminds gently, never shames, and celebrates every small step.'
          ] },
        quiz: Q('pig-adult', 1, [
          { correct: 0, q: { ar: 'ما فضيلة القوة الشهوية عند ابن مسكويه؟', en: 'What is the virtue of the appetitive power according to Ibn Miskawayh?' },
            options: [{ ar: 'العفة', en: 'Temperance' }, { ar: 'الشجاعة', en: 'Courage' }, { ar: 'الحكمة', en: 'Wisdom' }],
            why: { ar: 'جعل الحكمة للناطقة، والشجاعة للغضبية، والعفة للشهوية.', en: 'He gave wisdom to the rational, courage to the irascible, and temperance to the appetitive.' } },
          { correct: 2, q: { ar: 'هل الشهوة شر في ذاتها بحسب هذا الفصل؟', en: 'According to this chapter, is desire evil in itself?' },
            options: [{ ar: 'نعم، ويجب قتلها', en: 'Yes, and it must be killed' }, { ar: 'نعم، عند الصغار فقط', en: 'Yes, only in children' }, { ar: 'لا، المشكلة أن تحكم صاحبها', en: 'No, the problem is when it rules its owner' }],
            why: { ar: 'العفة ضبط الشهوة لا قتلها.', en: 'Temperance is governing desire, not killing it.' } }
        ]) },
      { title: { ar: 'شهوة البطن', en: 'The appetite of the stomach' },
        body: { ar: [
            'في «إحياء علوم الدين» كتاب سماه الغزالي «كسر الشهوتين»، بدأه بشهوة البطن، وعدّها من أعظم المهلكات، لأنها في نظره أصل تتفرع منه شهوات كثيرة. فمن لم يملك نفسه أمام الطعام، صعب عليه أن يملكها أمام ما هو أكبر من الطعام.',
            'وذكر الغزالي في هذا الكتاب فوائد للجوع المعتدل، منها صفاء القلب ورقته، فالقلب الخفيف يحس بلذة الذكر أكثر من القلب المثقل. ومنها أن يتذكر الإنسان أهل الجوع والحاجة، فمن جاع ساعة عرف ما يعانيه من يجوع أيامًا. ومنها كسر شهوات النفس الأخرى، لأن الشبع الدائم في نظره يقوّيها.',
            'لكن الغزالي لم يدعُ إلى تعذيب النفس، بل قرر أن المحمود في الأخلاق كلها هو الوسط بين طرفين. فكما أن الشره مذموم، فإن الإفراط في الحرمان قد يضر الجسد ويشغل القلب. والمقصود أن يكون الإنسان هو الذي يقرر متى يأكل وكم يأكل، لا أن يقرر بطنه عنه.',
            'وهذا مهم جدًّا للوالدين. فليس المطلوب أن نحرم أطفالنا من الحلوى أو نخوّفهم من الطعام، فهذا قد يصنع مشكلة أخرى. بل المطلوب أن نعلمهم وقفة صغيرة قبل الأخذ: أن ينتظروا، وأن ينظروا حولهم، وأن يسألوا هل أخذ الجميع. وهذه الوقفة هي التي تفرق بين الإنسان الذي يأكل وبين الرغبة التي تأكله. ومع التكرار يكتشف الطفل أن الانتظار لا يُنقص لذة الطعام، بل يزيدها، لأنه يأكل وقلبه مطمئن إلى أن الجميع أخذوا نصيبهم.',
            'ومن التجارب اللطيفة في البيت أن نجعل للطعام آدابًا تُمارس معًا، لا قواعد تُفرض بالصراخ: نبدأ باسم الله، ونأكل مما يلينا، وننتظر الكبير، ونترك شيئًا للغائب. فإذا اجتمعت العائلة على هذه الآداب، صار ضبط النفس عادة يومية لا معركة. والطفل الذي يرى أباه ينتظر وأمه تقدّم غيرها يتعلم ذلك دون درس.'
          ],
          en: [
            'In "Ihya\' \'Ulum al-Din" there is a book al-Ghazali called "Breaking the Two Desires". He began it with the appetite of the stomach and counted it among the greatest causes of ruin, because in his view it is a root from which many other desires branch. Whoever cannot master themselves before food will find it hard to master themselves before what is greater than food.',
            'In this book al-Ghazali mentions benefits of moderate hunger, among them purity and tenderness of heart, since a light heart tastes the sweetness of remembrance more than a heavy one. Another is that a person remembers the hungry and the needy: whoever is hungry for an hour learns what someone hungry for days endures. Another is breaking the soul\'s other desires, since in his view constant fullness strengthens them.',
            'But al-Ghazali did not call for tormenting oneself. He held that what is praised in all character is the middle between two extremes. Just as greed is blameworthy, excessive deprivation can harm the body and distract the heart. The point is that the person decides when and how much to eat, not the stomach deciding for them.',
            'This matters greatly for parents. The goal is not to deny children sweets or make them afraid of food, which can create another problem. The goal is to teach them a small pause before taking: to wait, to look around, to ask whether everyone has had some. This pause separates a person who eats from a desire that eats the person. With repetition, the child discovers that waiting does not reduce the pleasure of food but increases it, because they eat with a heart at ease that everyone has had a share.',
            'A gentle practice at home is to make mealtime manners something done together rather than rules imposed by shouting: we begin with the name of Allah, eat from what is in front of us, wait for the eldest, and leave something for whoever is absent. When the family gathers on these manners, self-control becomes a daily habit, not a battle. A child who sees a father wait and a mother serve others first learns it without a lesson.'
          ] },
        quiz: Q('pig-adult', 2, [
          { correct: 1, q: { ar: 'بأي شهوة بدأ الغزالي كتاب «كسر الشهوتين»؟', en: 'Which desire did al-Ghazali begin "Breaking the Two Desires" with?' },
            options: [{ ar: 'شهوة الكلام', en: 'The desire to talk' }, { ar: 'شهوة البطن', en: 'The appetite of the stomach' }, { ar: 'شهوة المال', en: 'The desire for wealth' }],
            why: { ar: 'عدّها أصلًا تتفرع منه شهوات كثيرة.', en: 'He saw it as a root from which many desires branch.' } },
          { correct: 0, q: { ar: 'ما المطلوب من الوالدين بحسب هذا الفصل؟', en: 'What is asked of parents in this chapter?' },
            options: [{ ar: 'تعليم وقفة صغيرة قبل الأخذ', en: 'Teaching a small pause before taking' }, { ar: 'منع الحلوى تمامًا', en: 'Banning sweets entirely' }, { ar: 'تخويف الطفل من الطعام', en: 'Making the child afraid of food' }],
            why: { ar: 'المحمود هو الوسط، والوقفة تعلم الطفل أن يقرر هو.', en: 'The middle way is praised, and the pause teaches the child to decide.' } }
        ]) },
      { title: { ar: 'المصباح المطفأ', en: 'The lamp put out' },
        body: { ar: [
            'في صحيح البخاري (3798) عن أبي هريرة قصة رجل جاء إلى النبي صلى الله عليه وآله وسلم جائعًا، فسأل في بيوت أزواجه فلم يجد عندهن إلا الماء. فقال: من يستضيف هذا الليلة؟ فقام رجل من الأنصار وأخذه إلى بيته.',
            'ولم يكن في بيت الأنصاري إلا طعام أولاده. فاتفق مع زوجته أن تشغل الصغار حتى يناموا، ثم تقدم الطعام للضيف، وتطفئ المصباح كأنها تصلحه. وجلس الزوجان مع ضيفهما في الظلام يحركان أيديهما كأنهما يأكلان، حتى شبع الضيف، وباتا جائعين. فلما أصبح الرجل وغدا إلى النبي صلى الله عليه وآله وسلم أخبره أن الله عجب من صنيعهما، ونزلت فيهما الآية: ﴿وَيُؤْثِرُونَ عَلَىٰ أَنْفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ﴾ (الحشر 59:9).',
            'وفي القصة دروس كثيرة لمن يربي. أولها أن الإيثار لم يكن من فائض، بل من القليل الذي يحتاجه صاحبه. وثانيها أن الزوجين حفظا كرامة الضيف، فأطفآ المصباح حتى لا يشعر أنه يأكل وحده أو يأخذ طعامهما. وثالثها أن هذا الخلق كان عملًا مشتركًا بين الزوجين، اتفقا عليه وتعاونا فيه.',
            'وهذا هو الضد الكامل لمرتبة الشره. فالشره يقول: كلها لي ولو احتاجها غيري. والإيثار يقول: هي لك ولو احتجتها أنا. وبين المرتبتين طريق طويل، لا يُطلب من الطفل أن يقطعه في يوم. بل يكفيه أن يخطو فيه خطوة، ثم خطوة أخرى، وأن يرى في بيته من يمشي أمامه فيه بصبر ومحبة، فيقتدي به دون أن يُؤمر.',
            'فالطفل في البنصر لا يُطلب منه أن يعطي كل ما عنده، بل أن يبدأ بالقسمة: نصف لي ونصف لأخي. ثم يتدرب على أن يقدم غيره أحيانًا. وحين نحكي له هذه القصة، نحكيها بفرح لا بلوم، ليرى أن العطاء شيء يحبه الله ويعجب منه.'
          ],
          en: [
            'In Sahih al-Bukhari (3798), from Abu Hurayra, is the story of a man who came hungry to the Prophet, peace and blessings be upon him and his family. He sent to the homes of his wives and found nothing there but water. So he said: who will host this man tonight? A man of the Ansar stood and took him home.',
            'In the Ansari\'s house there was only the children\'s food. He agreed with his wife that she would keep the little ones busy until they slept, then serve the food to the guest and put out the lamp as if she were fixing it. The couple sat with their guest in the dark, moving their hands as though eating, until the guest was full, and they spent the night hungry. In the morning, when the man went to the Prophet, he told him that Allah had marvelled at what the two of them did, and the verse came down about them. Meaning (not a translation): and they prefer others over themselves, even if they are in need (al-Hashr 59:9).',
            'There are many lessons here for anyone raising children. First, their giving did not come from surplus, but from the little they needed themselves. Second, the couple protected the guest\'s dignity: they put out the lamp so he would not feel he was eating alone or taking their food. Third, this character was shared work between husband and wife, agreed and carried out together.',
            'This is the complete opposite of the rank of greed. Greed says: it is all mine, even if someone else needs it. Preferring others says: it is yours, even if I need it. Between the two ranks lies a long road, and no child is asked to cross it in a day. One step, then another, is enough, following someone at home who walks ahead with patience.',
            'At the ring finger a child is not asked to give away everything, but to begin by sharing: half for me and half for my brother. Then the child practises putting others first now and then. When we tell this story, we tell it with joy, not blame, so the child sees that giving is something Allah loves and marvels at.'
          ] },
        quiz: Q('pig-adult', 3, [
          { correct: 2, q: { ar: 'لماذا أطفأت المرأة الأنصارية المصباح؟', en: 'Why did the Ansari woman put out the lamp?' },
            options: [{ ar: 'لأن الزيت نفد', en: 'Because the oil ran out' }, { ar: 'لينام الضيف', en: 'So the guest would sleep' }, { ar: 'ليأكل الضيف ولا يشعر أنهما لا يأكلان', en: 'So the guest could eat without noticing they were not eating' }],
            why: { ar: 'حفظ الزوجان كرامة الضيف مع إيثاره بالطعام.', en: 'The couple protected the guest\'s dignity while giving him the food.' } },
          { correct: 0, q: { ar: 'ما الخطوة المطلوبة من الطفل في البنصر بحسب هذا الفصل؟', en: 'What step is asked of the child at the ring finger, according to this chapter?' },
            options: [{ ar: 'أن يبدأ بالقسمة', en: 'To begin by sharing' }, { ar: 'أن يعطي كل ما عنده', en: 'To give away everything' }, { ar: 'ألا يأكل أبدًا', en: 'Never to eat' }],
            why: { ar: 'الطريق إلى الإيثار يبدأ بالقسمة، ويكبر شيئًا فشيئًا.', en: 'The road to preferring others begins with sharing and grows step by step.' } }
        ]) },
      { title: { ar: 'نهي النفس عن الهوى', en: 'Restraining the soul from whim' },
        body: { ar: [
            'في سورة النازعات وعد عظيم لمن يقف أمام هواه: ﴿وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ ۝ فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ﴾ (النازعات 79:40-41). والآية لا تقول: من لم يكن له هوى، بل تقول: من نهى نفسه عنه. فالهوى موجود عند الجميع، والفضل لمن يقف أمامه.',
            'وهذا يغير نظرتنا إلى أنفسنا وإلى أبنائنا. فحين يريد الطفل أن يأخذ كل شيء، لا نقول: أنت سيئ لأنك تريد. بل نقول: الرغبة طبيعية، والبطولة أن تمسكها. فالقوة ليست في ألا نشتهي، بل في أن نختار وقت الأخذ ومقداره.',
            'ومما يساعد على نهي النفس أن نجعل للخير معنى قريبًا يراه الطفل. فقد قال النبي صلى الله عليه وآله وسلم: «كُلُّ مَعْرُوفٍ صَدَقَةٌ» (صحيح البخاري 6021). فالقطعة التي يتركها لأخيه صدقة، والدور الذي يتنازل عنه في اللعب صدقة، والكرسي الذي يقدمه لجدته صدقة. وحين يعرف الطفل أن تركه للشيء ليس خسارة، بل عطاء له أجر، يسهل عليه أن يترك.',
            'ومن الأدوات العملية في المسار لعبة العد قبل الأخذ. فالعد إلى عشرة ليس سحرًا، لكنه يعطي العقل وقتًا ليلحق بالرغبة. وفي هذه الثواني القليلة يرى الطفل من حوله، ويتذكر أن غيره يريد أيضًا. ومن تدرب على هذه الوقفة في الطعام، استطاع لاحقًا أن يقفها في المال والألعاب والكلام.',
            'ونحن الكبار أحوج إلى هذه الوقفة من أطفالنا. فشره الكبار قد يكون في الشراء، أو في الهاتف، أو في الرغبة في أن نكون أول من يحصل على كل شيء. والطفل يتعلم من وقفتنا أكثر مما يتعلم من نصيحتنا. فإذا رآنا نترك آخر قطعة لغيرنا، أو نؤجل شراء ما نشتهيه، أو نضع الهاتف حين يكلمنا، عرف أن ضبط النفس ليس درسًا للصغار وحدهم.'
          ],
          en: [
            'In Surat al-Nazi\'at there is a great promise for whoever stands firm before their whims. Meaning (not a translation): as for one who feared standing before his Lord and restrained the soul from whim, Paradise will be the refuge (al-Nazi\'at 79:40-41). The verse does not say: whoever had no whim. It says: whoever restrained the soul from it. Whims exist in everyone; the merit belongs to whoever stands before them.',
            'This changes how we see ourselves and our children. When a child wants to take everything, we do not say: you are bad for wanting. We say: wanting is natural, and the heroism is holding it back. Strength is not in never desiring, but in choosing when to take and how much.',
            'One thing that helps restrain the soul is giving good a close meaning the child can see. The Prophet, peace and blessings be upon him and his family, said, in meaning: every kindness is charity (Sahih al-Bukhari 6021). The piece left for a brother is charity, the turn given up in a game is charity, the chair offered to a grandmother is charity. When a child knows that leaving something is not a loss but a gift with a reward, leaving it becomes easier.',
            'One practical tool in the path is the counting game before taking. Counting to ten is not magic, but it gives the mind time to catch up with the desire. In those few seconds the child sees the people around, and remembers that others want too. Whoever practises this pause with food can later make it with money, toys and words.',
            'We adults need this pause more than our children do. Adult greed may show in shopping, in the phone, or in wanting to be the first to get everything. A child learns more from our pause than from our advice. When they see us leave the last piece for someone else, delay buying what we want, or put the phone down when they speak, they learn that self-control is not a lesson for children alone.'
          ] },
        quiz: Q('pig-adult', 4, [
          { correct: 1, q: { ar: 'من الذي وعدته آية النازعات بالجنة؟', en: 'Whom does the verse of al-Nazi\'at promise Paradise?' },
            options: [{ ar: 'من لم يكن له هوى أصلًا', en: 'One who had no whims at all' }, { ar: 'من نهى نفسه عن الهوى', en: 'One who restrained the soul from whim' }, { ar: 'من أكل أكثر', en: 'One who ate the most' }],
            why: { ar: 'الهوى عند الجميع، والفضل لمن يقف أمامه.', en: 'Everyone has whims; the merit is in standing before them.' } },
          { correct: 2, q: { ar: 'لماذا تنفع لعبة العد قبل الأخذ؟', en: 'Why does the counting game before taking help?' },
            options: [{ ar: 'لأنها تمنع الطعام', en: 'It stops the food' }, { ar: 'لأنها عقاب', en: 'It is a punishment' }, { ar: 'لأنها تعطي العقل وقتًا ليلحق بالرغبة', en: 'It gives the mind time to catch up with the desire' }],
            why: { ar: 'في الثواني القليلة يرى الطفل من حوله.', en: 'In those few seconds the child sees those around.' } }
        ]) },
      { title: { ar: 'مع الطفل: من «كلها لي» إلى «تفضّل»', en: 'With the child: from "all mine" to "please, have some"' },
        body: { ar: [
            'في فصل تربية الصبيان من «الإحياء» يتحدث الغزالي عن آداب الطعام بتفصيل لطيف. فيذكر أن يُعلَّم الطفل ألا يبادر إلى الطعام قبل غيره، وألا يحدّق فيه ولا فيمن يأكل، وألا يسرع في الأكل، وأن يُحبَّب إليه الإيثار بالطعام والقناعة بما حضر. ويذكر أيضًا أن يُقبَّح عنده الإكثار من الأكل بتشبيه ذلك الفعل بفعل البهائم.',
            'وهذا التشبيه قريب جدًّا من فكرة المسار. لكن التطبيق يحرص على شيء دقيق: أن يقع التشبيه على الفعل لا على الطفل. فلا نقول له: أنت مثل الحيوان، بل نقول: هذا الأكل السريع يشبه أكل من لا يعقل، وأنت إنسان تعقل وتختار. فالفرق بين الجملتين هو الفرق بين جرح الكرامة وإيقاظها.',
            'ومن الأمور العملية التي تساعد الطفل في هذه المرحلة أن يمارس القسمة بيده. فبدل أن نقسم نحن الطعام، نعطيه الصحن ليقسمه بين إخوته، ثم يأخذ هو آخر نصيب. وحين يُمدح على ذلك أمام أهله، يشعر أن العطاء يرفعه، لا أن الأخذ هو الذي يرفعه. وهذا يوافق ما أوصى به الغزالي من إكرام الطفل ومدحه إذا ظهر منه فعل جميل.',
            'وإذا أخطأ الطفل وعاد إلى «كلها لي»، فلا نعيّره بما فعل أمس، ولا نجعل الخطأ لقبًا له. فالمسار يتكرر، والطفل يصعد ويهبط ثم يصعد من جديد، كما نفعل نحن الكبار. والمهم أن يعرف الطفل أن الباب مفتوح دائمًا، وأن كل يوم فرصة جديدة ليقول بقلب راضٍ: تفضّل.',
            'وحين يتعلم الطفل أن يمسك يده عن الطعام، سيكتشف أن هناك شيئًا آخر يحتاج أن يمسكه: غضبه حين يأخذ أحد ما يحبه. وقد قال النبي صلى الله عليه وآله وسلم: «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ» (صحيح البخاري 6114). وهنا يبدأ باب الوسطى.'
          ],
          en: [
            'In the section of the "Ihya\'" on raising children, al-Ghazali speaks of table manners in gentle detail. He mentions teaching the child not to rush to food before others, not to stare at it or at those eating, not to eat hastily, and making dear to them the preferring of others with food and contentment with what is served. He also mentions making overeating seem ugly to the child by likening that act to the behaviour of animals.',
            'This comparison is very close to the idea of the path. But the app is careful about one subtle thing: the comparison falls on the act, not on the child. We do not say: you are like an animal. We say: this hasty eating is like the eating of one who does not reason, and you are a human being who reasons and chooses. The difference between the two sentences is the difference between wounding dignity and awakening it.',
            'One practical step at this stage is letting the child share with their own hands. Instead of dividing the food ourselves, we give them the plate to divide among siblings, and they take the last portion. When they are praised for it in front of the family, they feel that giving raises them, not taking. This agrees with al-Ghazali\'s advice to honour and praise a child when something beautiful appears from them.',
            'If the child slips back into "all mine", we do not taunt them with yesterday, nor turn the mistake into a nickname. The path repeats; the child climbs, slips and climbs again, just as we adults do. What matters is that the child knows the door is always open, and every day is a new chance to say with a willing heart: please, have some.',
            'When the child learns to hold back their hand from food, they will discover something else that needs holding: their anger when someone takes what they love. The Prophet, peace and blessings be upon him and his family, said, in meaning: the strong one is not the one who wrestles others down, but the one who controls himself when angry (Sahih al-Bukhari 6114). Here the door to the middle finger opens.'
          ] },
        quiz: Q('pig-adult', 5, [
          { correct: 0, q: { ar: 'على أي شيء يقع التشبيه في المسار؟', en: 'What does the comparison fall on in the path?' },
            options: [{ ar: 'على الفعل لا على الطفل', en: 'On the act, not the child' }, { ar: 'على الطفل نفسه', en: 'On the child themselves' }, { ar: 'على إخوته', en: 'On the siblings' }],
            why: { ar: 'تشبيه الفعل يوقظ الكرامة، وتشبيه الطفل يجرحها.', en: 'Comparing the act awakens dignity; comparing the child wounds it.' } },
          { correct: 1, q: { ar: 'ما الخطوة العملية التي يقترحها الفصل للقسمة؟', en: 'What practical sharing step does the chapter suggest?' },
            options: [{ ar: 'أن يأكل الطفل أولًا', en: 'Let the child eat first' }, { ar: 'أن يقسم الطفل الطعام بيده ويأخذ آخر نصيب', en: 'Let the child divide the food and take the last portion' }, { ar: 'أن يُحرم من الطعام', en: 'Deny the child food' }],
            why: { ar: 'حين يقسم الطفل بنفسه ويُمدح، يشعر أن العطاء يرفعه.', en: 'When the child divides it and is praised, they feel that giving raises them.' } }
        ]) }
    ]
  });
  delete window.AKHLAQ_BQ;
})();

(function () {
  window.AKHLAQ_BQ = function (bid, ci, list) {
    return list.map(function (q, k) { q.id = 'book-' + bid + '-c' + ci + 'q' + (k + 1); q.type = 'comprehension'; q.readingId = null; return q; });
  };
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-monkey-adult', stage: 'monkey', ages: '15+',
    title: { ar: 'نار في الصدر', en: 'Fire in the chest' },
    chapters: [
      { title: { ar: 'حين يسبق الفعل الفكر', en: 'When the act outruns the thought' },
        body: { ar: [
            'المرتبة الثالثة في المسار هي مرتبة الاندفاع. وصاحبها ليس نائمًا كالأول، ولا مشغولًا بالأخذ كالثاني، بل هو سريع جدًّا: يرد قبل أن يسمع، ويضرب قبل أن يفهم، ويقلد ما يراه دون أن يسأل هل هو خير. وقد سمّاها التطبيق باسم يدل على كثرة الحركة وقلة التوقف، وأكثر ما يظهر فيها الغضب.',
            'وفي «إحياء علوم الدين» كتاب سماه الغزالي «ذم الغضب والحقد والحسد»، يصف فيه الغضب بالمعنى بأنه شعلة نار في القلب، وأنه غليان يطلب به الإنسان أن ينتقم ممن آذاه. فإذا اشتعلت هذه النار، صعد دخانها إلى الرأس، فأظلم العقل، فلم يعد الإنسان يرى العواقب، ولا يسمع النصيحة.',
            'وهذا الوصف يفسر لنا ما نراه في أنفسنا وأطفالنا. فالولد الذي يرمي اللعبة على أخيه لا يكون قد فكر في ذلك ثم اختاره، بل تكون النار قد سبقت تفكيره. والشاب الذي يكتب كلمة جارحة في رسالة ثم يندم، لم يكن يقصد أن يجرح، لكن يده كانت أسرع من عقله. وكثيرًا ما يقلد الصغير هذه السرعة ممن حوله، فيتعلمها كما يتعلم الكلام.',
            'ولذلك لا يكفي في هذه المرتبة أن نقول للطفل: لا تغضب. فالغضب يأتي قبل أن يقرر هو. والأنفع أن نعلّمه ما يفعل في اللحظة الأولى، حين يشعر بالحرارة في صدره، قبل أن تصل إلى يده ولسانه.',
            'والخبر الجميل أن هذه اللحظة الأولى يمكن تدريبها. فكما يتعلم الطفل أن يضغط المكابح في دراجته قبل الحفرة، يتعلم أن يتوقف قبل الكلمة الجارحة. وكل مرة ينجح فيها، ولو مرة من عشر، تصير المكابح أقوى، ويصير الفكر أقرب إلى الفعل. وقد يحتاج ذلك إلى أشهر لا أيام، فلا ييأس الوالدان إذا تكرر الانفجار، لأن كل محاولة صادقة تترك أثرًا في القلب، ولو لم يظهر هذا الأثر سريعًا في السلوك.'
          ],
          en: [
            'The third rank on the path is the rank of impulsiveness. Its owner is not asleep like the first, nor busy taking like the second, but very fast: replying before listening, striking before understanding, copying what they see without asking whether it is good. The app named it for much movement and little stopping, and anger shows in it most.',
            'In "Ihya\' \'Ulum al-Din" al-Ghazali has a book called "The Condemnation of Anger, Rancour and Envy", where he describes anger, in meaning, as a flame of fire in the heart, a boiling by which a person seeks revenge on whoever hurt them. When this fire flares, its smoke rises to the head, darkening the mind, so the person no longer sees consequences or hears advice.',
            'This explains what we see in ourselves and our children. The boy who throws a toy at his brother has not thought it over and chosen it; the fire got there before his thinking. The young person who types a wounding word and then regrets it did not mean to wound, but the hand was quicker than the mind. Often the little one copies this speed from those around, learning it as they learn speech.',
            'So at this rank it is not enough to tell a child: do not get angry. Anger arrives before they decide. It helps more to teach them what to do in the first moment, when they feel the heat in the chest, before it reaches hand and tongue.',
            'The good news is that this first moment can be trained. Just as a child learns to squeeze the brakes on a bike before a pothole, they learn to stop before the wounding word. Every time they succeed, even once in ten, the brakes grow stronger and thought comes closer to the act. This may take months, not days, so parents should not despair if outbursts repeat: every sincere attempt leaves a mark on the heart, even if it does not show quickly in behaviour.'
          ] },
        quiz: Q('monkey-adult', 1, [
          { correct: 1, q: { ar: 'بماذا وصف الغزالي الغضب في «ذم الغضب والحقد والحسد»؟', en: 'How did al-Ghazali describe anger in "The Condemnation of Anger, Rancour and Envy"?' },
            options: [{ ar: 'بأنه نوم القلب', en: 'As the heart\'s sleep' }, { ar: 'بأنه شعلة نار في القلب تطلب الانتقام', en: 'As a flame in the heart that seeks revenge' }, { ar: 'بأنه فضيلة دائمًا', en: 'As always a virtue' }],
            why: { ar: 'إذا اشتعلت النار أظلم العقل فلم يرَ العواقب.', en: 'When the fire flares, the mind darkens and cannot see consequences.' } },
          { correct: 0, q: { ar: 'ما الأنفع من قول «لا تغضب» بحسب هذا الفصل؟', en: 'What helps more than saying "do not get angry", according to this chapter?' },
            options: [{ ar: 'تعليم ما يُفعل في اللحظة الأولى', en: 'Teaching what to do in the first moment' }, { ar: 'العقاب الشديد', en: 'Harsh punishment' }, { ar: 'تجاهل الغضب', en: 'Ignoring the anger' }],
            why: { ar: 'اللحظة الأولى يمكن تدريبها كما تُدرَّب المكابح.', en: 'The first moment can be trained, like brakes.' } }
        ]) },
      { title: { ar: 'ثلاث درجات للغضب', en: 'Three degrees of anger' },
        body: { ar: [
            'قد يظن بعض الناس أن الكمال ألا يغضب الإنسان أبدًا. لكن الغزالي في كتاب الغضب من «الإحياء» جعل للغضب ثلاث درجات: درجة التفريط، وهي أن يفقد الإنسان الغضب أصلًا، فلا يغضب حين تُنتهك حرمة أو يُظلم ضعيف؛ ودرجة الإفراط، وهي أن يغلب الغضب حتى يخرج عن سياسة العقل والدين؛ ودرجة الاعتدال بينهما، وهي المحمودة.',
            'فالغضب عنده ليس شرًّا كله. فمن رأى أخاه الصغير يُضرب ولم يتحرك قلبه، فقد نقص منه شيء. ومن غضب لأن أحدًا سبقه في الطابور فصرخ وشتم، فقد زاد عن الحد. والميزان أن يغضب الإنسان في موضعه، وبقدره، ثم يملك نفسه فيما يفعل. فالغضب لله وللحق شيء، والغضب للنفس والكبر شيء آخر.',
            'وهذا قريب مما قاله ابن مسكويه في «تهذيب الأخلاق» عن القوة الغضبية. فقد جعل فضيلتها الشجاعة، وجعل الشجاعة وسطًا بين رذيلتين: التهور، وهو الإقدام حيث لا ينبغي، والجبن، وهو الإحجام حيث ينبغي الإقدام. فالشجاع ليس من لا يخاف، ولا من يندفع في كل شيء، بل من يضع قوته في مكانها.',
            'ولهذا التقسيم أثر كبير في التربية. فلا نريد أطفالًا بلا مشاعر، يسكتون على الظلم ويخافون من كل شيء. ولا نريدهم سريعي الانفجار. بل نريد أن يعرفوا أن الغضب طاقة، وأن الطاقة تحتاج إلى قائد. فالطفل الذي يتعلم قيادة غضبه اليوم، قد يصير غدًا شابًّا يدافع عن المظلوم بحكمة، ولا يؤذي من حوله بلسانه أو يده، ويعرف متى يتكلم ومتى يسكت.',
            'ويمكن أن نقول للطفل: غضبك يخبرك أن شيئًا لم يعجبك، وهذا مفهوم. لكن أنت الذي تقرر ماذا تفعل به. فقد تقوله بكلمة هادئة، أو تطلب المساعدة، أو تبتعد قليلًا حتى تهدأ. وهكذا يصير الغضب رسالة نفهمها، لا عاصفة تقودنا.'
          ],
          en: [
            'Some think perfection means never being angry. But al-Ghazali, in the book on anger in the "Ihya\'", gave anger three degrees: deficiency, losing anger altogether, so that one is not moved when something sacred is violated or a weak person is wronged; excess, when anger dominates until it leaves the governance of reason and religion; and the balance between them, which is praiseworthy.',
            'For him anger is not wholly evil. Whoever sees a little brother being hit and feels nothing has lost something. Whoever is overtaken in a queue and shouts and curses has gone too far. The measure is to be angry in the right place and the right amount, then master oneself in what one does. Anger for Allah and for what is right is one thing; anger for the ego and pride is another.',
            'This is close to what Ibn Miskawayh said in "Tahdhib al-Akhlaq" about the irascible power. He made its virtue courage, and courage a middle between two vices: recklessness, rushing in where one should not, and cowardice, holding back where one should step forward. The brave person is not one who never fears, nor one who rushes into everything, but one who puts their strength in its place.',
            'This division matters a great deal in upbringing. We do not want children without feelings, silent before injustice and afraid of everything. Nor do we want them quick to explode. We want them to know that anger is energy, and energy needs a leader. A child who learns to lead their anger today may become a young person who defends the wronged with wisdom, harms no one with tongue or hand, and knows when to speak and when to stay silent.',
            'We can tell a child: your anger tells you something did not please you, and that is understandable. But you decide what to do with it. You can say it in a calm word, ask for help, or step away until you calm down. So anger becomes a message we understand, not a storm that drives us.'
          ] },
        quiz: Q('monkey-adult', 2, [
          { correct: 2, q: { ar: 'أي درجات الغضب محمودة عند الغزالي؟', en: 'Which degree of anger does al-Ghazali praise?' },
            options: [{ ar: 'التفريط', en: 'Deficiency' }, { ar: 'الإفراط', en: 'Excess' }, { ar: 'الاعتدال', en: 'Balance' }],
            why: { ar: 'فقد الغضب نقص، وغلبته زيادة، والمحمود ما بينهما.', en: 'Losing anger is a lack, being ruled by it is excess; the middle is praised.' } },
          { correct: 0, q: { ar: 'ما الشجاعة عند ابن مسكويه؟', en: 'What is courage according to Ibn Miskawayh?' },
            options: [{ ar: 'وسط بين التهور والجبن', en: 'A middle between recklessness and cowardice' }, { ar: 'ألا يخاف الإنسان أبدًا', en: 'Never feeling fear' }, { ar: 'الاندفاع في كل شيء', en: 'Rushing into everything' }],
            why: { ar: 'الشجاع يضع قوته في مكانها.', en: 'The brave person puts their strength in its place.' } }
        ]) },
      { title: { ar: 'الشديد الحقيقي', en: 'The truly strong' },
        body: { ar: [
            'في ثقافة الأطفال، وفي ثقافة الكبار أحيانًا، يبدو القوي هو الذي يرد الضربة بضربتين، ويرفع صوته أعلى من الجميع. لكن النبي صلى الله عليه وآله وسلم قلب هذا المعنى: «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ» (صحيح البخاري 6114).',
            'والصُّرَعة هو الذي يصرع الناس كثيرًا في المصارعة. فالحديث لا ينكر قوة الجسد، لكنه يقول إن هناك قوة أكبر منها: أن يملك الإنسان نفسه في اللحظة التي تريد فيها النفس أن تنفجر. وهذه القوة لا يراها الناس دائمًا، لأنها تحدث في الداخل، لكنها أصعب من رفع الأثقال. ولذلك يستحق صاحبها أن يُمدح عليها.',
            'وفي القرآن وصف للمتقين يرسم سلّمًا لطيفًا في هذا الباب: ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾ (آل عمران 3:134). فأول الدرجات كظم الغيظ، أي أن تمسكه في صدرك فلا يخرج أذى. ثم العفو، أي أن تترك حقك في الرد. ثم الإحسان، أي أن تقابل الإساءة بالخير.',
            'وهذا السلم مهم في التربية لأنه لا يطلب كل شيء مرة واحدة. فالطفل في الوسطى يتدرب على الدرجة الأولى: أن يمسك يده ولسانه. فإذا أتقنها، صار العفو أسهل. ثم يأتي الإحسان في الإصبع التالي. ولا بأس أن يتعثر الطفل في الدرجة الأولى مرات كثيرة، فالكظم نفسه عمل شاق على الكبار، فكيف بالصغار. والمهم أن يرى أن المحاولة محبوبة، وأن الله يحب من يجاهد نفسه ولو لم ينجح كل مرة.',
            'وحين نحكي هذا للشباب، نحسن أن نضرب لهم أمثلة من حياتهم: اللاعب الذي يُعرقل فيقوم ويكمل اللعب، والتلميذ الذي يُستفز في الساحة فيبتعد، والأخ الذي يُكسر شيء له فيقول: لا بأس. هؤلاء هم الأقوياء حقًّا، ولو لم يصفق لهم أحد.'
          ],
          en: [
            'In children\'s culture, and sometimes in adults\' too, the strong one seems to be whoever returns one blow with two and shouts loudest. But the Prophet, peace and blessings be upon him and his family, overturned this. Meaning (not a translation): the strong one is not the one who throws others down; the strong one is the one who controls himself when angry (Sahih al-Bukhari 6114).',
            'The word used is for someone who often throws people in wrestling. The hadith does not deny bodily strength; it says there is a greater strength: holding oneself at the moment the soul wants to explode. People do not always see this strength because it happens inside, but it is harder than lifting weights. So whoever has it deserves praise.',
            'The Quran describes the God-conscious with a gentle ladder here. Meaning (not a translation): those who restrain their anger and pardon people, and Allah loves those who do good (Al \'Imran 3:134). The first step is restraining anger, holding it in the chest so no harm comes out. Then pardon, giving up the right to retaliate. Then excellence, meeting wrong with good.',
            'This ladder matters because it does not ask for everything at once. A child at the middle finger practises the first step: holding back hand and tongue. Once that is mastered, pardon becomes easier. Excellence comes at the next finger. It is fine for a child to stumble on the first step many times; restraint is hard even for adults, let alone the young. What matters is that they see the attempt is loved, and that Allah loves whoever strives with themselves, even without succeeding every time.',
            'When we tell this to young people, it helps to give examples from their lives: the player tripped who gets up and keeps playing, the pupil provoked in the playground who walks away, the brother whose thing gets broken who says: never mind. These are the truly strong, even if no one claps.'
          ] },
        quiz: Q('monkey-adult', 3, [
          { correct: 1, q: { ar: 'من الشديد بحسب الحديث؟', en: 'Who is strong according to the hadith?' },
            options: [{ ar: 'من يصرع الناس كثيرًا', en: 'One who throws many people down' }, { ar: 'من يملك نفسه عند الغضب', en: 'One who controls himself when angry' }, { ar: 'من يرفع صوته أعلى', en: 'One who shouts loudest' }],
            why: { ar: 'قوة ملك النفس أكبر من قوة الجسد.', en: 'Self-mastery is greater than bodily strength.' } },
          { correct: 2, q: { ar: 'ما ترتيب الدرجات في آية آل عمران 3:134؟', en: 'What is the order of steps in Al \'Imran 3:134?' },
            options: [{ ar: 'العفو ثم الغضب', en: 'Pardon, then anger' }, { ar: 'الإحسان ثم الصراخ', en: 'Excellence, then shouting' }, { ar: 'كظم الغيظ ثم العفو ثم الإحسان', en: 'Restraining anger, then pardon, then excellence' }],
            why: { ar: 'السلم يبدأ بإمساك الغيظ وينتهي بمقابلة الإساءة بالخير.', en: 'The ladder starts with holding anger and ends with meeting wrong with good.' } }
        ]) },
      { title: { ar: 'علاج الغضب بالعلم والعمل', en: 'Treating anger with knowledge and action' },
        body: { ar: [
            'لم يكتف الغزالي في كتاب الغضب بالوصف، بل ذكر علاجه، وجعله من بابين: علم وعمل. فأما العلم فأن يتفكر الإنسان في فضل كظم الغيظ والعفو، وفي عاقبة الغضب، وأن يتذكر أن قدرة الله عليه أعظم من قدرته هو على من أغضبه. ومن لطيف ما ذكره أن يتفكر الغاضب في قبح صورته حين يغضب، فلو رأى وجهه في تلك اللحظة لاستحيا منه.',
            'وأما العمل فأن يستعيذ بالله من الشيطان الرجيم، وأن يغير حاله: فإن كان قائمًا جلس، وإن كان جالسًا اضطجع. وهذا مأخوذ من السنة، ففي سنن أبي داود (4782) أن النبي صلى الله عليه وآله وسلم أمر من غضب وهو قائم أن يجلس، فإن ذهب عنه الغضب وإلا فليضطجع. وذكر الغزالي أيضًا الوضوء، لأن النار تُطفأ بالماء.',
            'وهذه الوسائل قريبة جدًّا من الأطفال. فالجلوس، والتنفس الطويل، وشرب الماء أو غسل الوجه، وقول «أعوذ بالله»، كلها أفعال يستطيعها طفل في الرابعة. وقد جعلها المسار خطوات صغيرة في درجات الوسطى، حتى يجد الطفل في يده شيئًا يفعله حين يغضب، بدل أن يُطلب منه أن يهدأ فقط. ويحسن أن يتدرب عليها في أوقات الهدوء، كاللعب، حتى يتذكرها في وقت الغضب.',
            'والفكرة العميقة هنا أن تغيير الجسد يغير القلب. فمن غيّر وضعه، وأبطأ نفسه، وبرّد وجهه، أعطى عقله فرصة ليعود. وهذا ما تقوله أيضًا تجارب كثير من المربين اليوم، لكن جذوره قديمة في السنة وفي كتب الأدب.',
            'وللوالدين نصيب من هذا العلاج قبل أطفالهم. فالأب الذي يجلس حين يغضب، والأم التي تقول بصوت مسموع «أعوذ بالله» ثم تتنفس قبل أن ترد، يعلّمان أبناءهما الدرس كله دون كلمة. أما الوالد الذي يصرخ وهو يقول لابنه لا تصرخ، فإن ابنه يسمع صوته قبل أن يسمع كلامه، ويتعلم الصراخ لا النهي عنه.'
          ],
          en: [
            'Al-Ghazali did not stop at description in the book on anger; he gave its treatment in two parts: knowledge and action. Knowledge is to reflect on the merit of restraining anger and pardoning, on where anger leads, and to remember that Allah\'s power over us is greater than our power over whoever angered us. One fine point he makes is that the angry person should consider how ugly they look in anger; if they saw their face at that moment, they would be ashamed.',
            'Action is to seek refuge in Allah from the accursed devil and to change one\'s position: if standing, sit; if sitting, lie down. This comes from the Sunna: in Sunan Abi Dawud (4782) the Prophet, peace and blessings be upon him and his family, told whoever is angry while standing to sit, and if the anger did not leave, to lie down. Al-Ghazali also mentions ablution, since fire is put out with water.',
            'These means are very close to children. Sitting, a long breath, drinking water or washing the face, saying "I seek refuge in Allah": a four-year-old can do all of these. The path made them small steps in the middle finger\'s degrees, so the child has something in hand to do when angry, instead of only being told to calm down. It helps to practise them in calm times, like a game, so they are remembered in anger.',
            'The deep idea is that changing the body changes the heart. Whoever changes position, slows their breath and cools their face gives the mind a chance to return. Many educators say the same today, but its roots are old, in the Sunna and in books of adab.',
            'Parents have their share of this treatment before their children. The father who sits when angry, the mother who says aloud "I seek refuge in Allah" and breathes before answering, teach the whole lesson without a word. But a parent who shouts while telling a child not to shout is heard by the voice before the words, and the child learns the shouting, not the warning against it.'
          ] },
        quiz: Q('monkey-adult', 4, [
          { correct: 0, q: { ar: 'من أي بابين جعل الغزالي علاج الغضب؟', en: 'What two parts did al-Ghazali give for treating anger?' },
            options: [{ ar: 'العلم والعمل', en: 'Knowledge and action' }, { ar: 'الصراخ والبكاء', en: 'Shouting and crying' }, { ar: 'النوم والأكل', en: 'Sleep and food' }],
            why: { ar: 'العلم يذكّر بالفضل والعاقبة، والعمل يغير الحال.', en: 'Knowledge recalls merit and consequence; action changes one\'s state.' } },
          { correct: 1, q: { ar: 'ماذا يفعل من غضب وهو قائم بحسب حديث أبي داود؟', en: 'What should someone angry while standing do, per the hadith in Abu Dawud?' },
            options: [{ ar: 'يركض', en: 'Run' }, { ar: 'يجلس', en: 'Sit down' }, { ar: 'يرفع صوته', en: 'Raise their voice' }],
            why: { ar: 'تغيير الجسد يعطي العقل فرصة ليعود.', en: 'Changing the body gives the mind a chance to return.' } }
        ]) },
      { title: { ar: 'مع الطفل: بعد العاصفة', en: 'With the child: after the storm' },
        body: { ar: [
            'أصعب لحظة في تربية الغضب ليست لحظة الانفجار، بل ما بعدها. فإذا هدأ الطفل بعد أن صرخ أو ضرب، يأتي سؤال الوالدين: ماذا نقول له الآن؟ والمسار يقترح ألا تكون هذه اللحظة محاكمة، بل جلسة هادئة نفهم فيها ما حدث معًا.',
            'ومن المفيد أن نسأل الطفل ثلاثة أسئلة بسيطة: ماذا شعرت؟ وأين شعرت به في جسدك؟ وماذا كان يمكن أن تفعل في اللحظة الأولى؟ فالسؤال الأول يعلمه أن يسمي مشاعره، والثاني يعلمه أن ينتبه لإشارات جسده، والثالث يعلمه أن هناك طريقًا آخر في المرة القادمة. ويحسن أن نسمع الإجابات دون أن نقاطع أو نصحح فورًا، فالطفل الذي يشعر بأنه مسموع يهدأ أسرع، ويقبل النصيحة بقلب مفتوح، ويعود إلينا حين يغضب مرة أخرى بدل أن يخفي غضبه عنا.',
            'ولا ينبغي أن نجعل الخطأ لقبًا يلاحق الطفل. فلا نقول له أمام إخوته: أنت دائمًا هكذا، ولا نذكّره بغضب الأمس كلما أخطأ اليوم. فقد سبق أن الغزالي أوصى بالتغافل عن الزلة وترك الإكثار من العتاب، وهذا أولى في الغضب، لأن العتاب الكثير قد يشعل نارًا جديدة.',
            'وإذا أخطأ الطفل في حق أحد، فمن تمام الدرس أن يصلح ما أفسد: أن يعتذر لأخيه، أو يعيد بناء ما هدم، أو يقدم له شيئًا يحبه. فالاعتذار ليس إذلالًا، بل قوة أخرى من قوة ملك النفس. ومن رأى والديه يعتذران حين يخطئان، تعلم أن الاعتذار من أخلاق الكبار.',
            'وحين يتعلم الطفل أن يمسك يده ولسانه، يجد أمامه سؤالًا جديدًا: ماذا أفعل بيدي الآن؟ وهنا يأتي الجزء الأخير من الآية: ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾. فبعد الإمساك يبدأ العطاء، ويبدأ باب السبابة، إصبع الخير العادي الذي يفعله الإنسان كما ينبغي.'
          ],
          en: [
            'The hardest moment in raising a child through anger is not the explosion but what comes after. When the child calms down after shouting or hitting, parents ask: what do we say now? The path suggests this moment should not be a trial, but a calm sitting where we understand together what happened.',
            'We can ask three simple questions: what did you feel? Where did you feel it in your body? What could you have done in the first moment? The first teaches the child to name feelings, the second to notice the body\'s signals, the third that there is another way next time. It helps to hear the answers without interrupting or correcting at once: a child who feels heard calms faster, accepts advice with an open heart, and comes back to us next time instead of hiding their anger.',
            'We should not turn the mistake into a nickname that follows the child. We do not say in front of siblings: you are always like this, nor bring up yesterday\'s anger whenever they slip today. Al-Ghazali, as we saw, advised overlooking a slip and not reproaching too often, and this applies even more to anger, since constant reproach can light a new fire.',
            'If the child wronged someone, completing the lesson means repairing the harm: apologising to a brother, rebuilding what was knocked down, or offering something he loves. An apology is not humiliation but another form of self-mastery. A child who sees parents apologise when they are wrong learns that apology is the character of grown-ups.',
            'When a child learns to hold back hand and tongue, a new question appears: what do I do with my hand now? Here comes the end of the verse quoted earlier: those who restrain anger and pardon people, and Allah loves those who do good. After holding back, giving begins, and so does the door to the index finger: ordinary good, done as a human being should.'
          ] },
        quiz: Q('monkey-adult', 5, [
          { correct: 2, q: { ar: 'ما الأسئلة الثلاثة المقترحة بعد الغضب؟', en: 'What three questions are suggested after anger?' },
            options: [{ ar: 'لماذا أنت سيئ؟ ومن بدأ؟ ومتى تعتذر؟', en: 'Why are you bad? Who started? When will you apologise?' }, { ar: 'لا أسئلة، بل عقاب', en: 'No questions, only punishment' }, { ar: 'ماذا شعرت؟ وأين في جسدك؟ وماذا كان يمكن أن تفعل؟', en: 'What did you feel? Where in your body? What could you have done?' }],
            why: { ar: 'الأسئلة تعلّم الطفل تسمية مشاعره وطريقًا آخر للمرة القادمة.', en: 'The questions teach naming feelings and another way for next time.' } },
          { correct: 0, q: { ar: 'ماذا يبدأ بعد الإمساك عن الأذى؟', en: 'What begins after holding back from harm?' },
            options: [{ ar: 'العطاء وفعل الخير', en: 'Giving and doing good' }, { ar: 'النوم', en: 'Sleep' }, { ar: 'الغضب من جديد', en: 'Anger again' }],
            why: { ar: 'الآية تنتقل من كظم الغيظ إلى الإحسان، وهذا باب السبابة.', en: 'The verse moves from restraining anger to excellence: the door to the index finger.' } }
        ]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-human-adult', stage: 'human', ages: '15+',
    title: { ar: 'إنسان كما ينبغي', en: 'Human as one should be' },
    chapters: [
      { title: { ar: 'في أحسن تقويم', en: 'In the finest form' },
        body: { ar: [
            'قد يبدو غريبًا أن يجعل المسار «الإنسان العادي» مرتبة يُرتقى إليها، كأن الإنسان لا يكون إنسانًا من البداية. لكن القرآن يشرح هذا المعنى: ﴿لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ ۝ ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ﴾ (التين 95:4-6).',
            'فالإنسان خُلق في أحسن صورة وأعدل خلقة، لكنه قد ينزل عن هذا المقام بسلوكه، حتى يصير أدنى مما خُلق له. ثم يأتي الاستثناء: الذين آمنوا وعملوا الصالحات. فالصعود إلى الإنسانية الكاملة ليس شيئًا يُعطى مرة واحدة، بل طريق يُمشى كل يوم بالإيمان والعمل.',
            'وهذا هو الأساس الذي بُنيت عليه أسماء المراتب الأولى في التطبيق. فهي لا تقول إن الطفل حيوان، بل تقول إن هناك أفعالًا تُنزل الإنسان عن مقامه، وأفعالًا ترده إليه. فإذا غفل أو شره أو اندفع، نزل درجة. وإذا استيقظ وقنع وملك نفسه، رجع إلى صورته التي خُلق عليها.',
            'والسبابة في اليد هي إصبع الإنسان الذي رجع إلى مقامه. ليس قديسًا ولا بطلًا خارقًا، بل إنسان يفعل ما ينبغي أن يفعله الإنسان: يصدق، ويفي، ويكف أذاه، ويساعد من يحتاج، ويعتذر إذا أخطأ.',
            'وقد يقول قائل: هذا قليل، فأين المراتب العالية؟ والجواب أن هذا القليل هو الذي يغيب عن كثير من الناس. فكم من إنسان يعرف الكثير ويعبد كثيرًا، ثم يكذب في وعده، ويؤذي جاره، ويقسو على أهله. والمسار يريد أن يبني الأساس قبل البناء.',
            'ولهذا يحسن أن نحتفل مع أطفالنا حين يصلون إلى هذه المرتبة، فهي ليست محطة صغيرة، بل عودة إلى الصورة الحسنة التي خلقهم الله عليها. ونحتفل بلطف لا بمبالغة، حتى لا يظن الطفل أن الخير شيء نادر يستحق الجوائز، بل يعرف أنه صورته الطبيعية التي يحبها الله، ويحبها أهله، ويرتاح لها قلبه هو قبل غيره.'
          ],
          en: [
            'It may seem strange that the path makes "the ordinary human" a rank to rise to, as if a person were not human from the start. But the Quran explains this. Meaning (not a translation): We created the human being in the finest form, then returned him to the lowest of the low, except those who believe and do righteous deeds (al-Tin 95:4-6).',
            'The human being was created in the finest form, yet can fall from that station through behaviour, until lower than what they were made for. Then comes the exception: those who believe and do good. Rising to full humanity is not given once; it is a road walked every day with faith and deeds.',
            'This is the basis for the names of the first ranks in the app. They do not say the child is an animal; they say some acts lower a person from their station and others return them to it. When heedless, greedy or impulsive, one goes down a step. When awake, content and self-possessed, one returns to the form one was created in.',
            'The index finger is the finger of the person who has returned to their station. Not a saint nor a superhero, but someone who does what a human should: tells the truth, keeps promises, holds back harm, helps those in need, apologises when wrong.',
            'Someone may say: that is little; where are the high ranks? The answer is that this little is what many people lack. How many know a great deal and worship a great deal, then break promises, hurt neighbours and are harsh with family. The path wants to lay the foundation before the building.',
            'So it is good to celebrate with our children when they reach this rank. It is not a small stop, but a return to the good form in which Allah created them. We celebrate gently, not lavishly, so the child does not think good is a rare thing deserving prizes, but knows it is their natural form, loved by Allah and by their family, and restful to their own heart first.'
          ] },
        quiz: Q('human-adult', 1, [
          { correct: 1, q: { ar: 'من الذين استثنتهم آيات التين 95:4-6 من النزول؟', en: 'Who are excepted from falling in al-Tin 95:4-6?' },
            options: [{ ar: 'الأقوياء', en: 'The strong' }, { ar: 'الذين آمنوا وعملوا الصالحات', en: 'Those who believe and do righteous deeds' }, { ar: 'الأغنياء', en: 'The wealthy' }],
            why: { ar: 'الصعود إلى الإنسانية الكاملة طريق بالإيمان والعمل.', en: 'Rising to full humanity is a road of faith and deeds.' } },
          { correct: 0, q: { ar: 'لماذا تُعد مرتبة الإنسان العادي مهمة؟', en: 'Why does the ordinary human rank matter?' },
            options: [{ ar: 'لأنها الأساس الذي يغيب عن كثير من الناس', en: 'Because it is the foundation many people lack' }, { ar: 'لأنها آخر المسار', en: 'Because it ends the path' }, { ar: 'لأنها لا تحتاج إلى عمل', en: 'Because it needs no effort' }],
            why: { ar: 'الصدق والوفاء وكف الأذى أساس قبل البناء.', en: 'Truthfulness, loyalty and holding back harm are the foundation before the building.' } }
        ]) },
      { title: { ar: 'كف الأذى أولًا', en: 'Holding back harm first' },
        body: { ar: [
            'قال النبي صلى الله عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ» (صحيح البخاري 10). والحديث قصير، لكنه يضع للخلق الحسن بداية واضحة: قبل أن تعطي الناس شيئًا، لا تأخذ منهم سلامتهم.',
            'واللافت أن الحديث بدأ باللسان قبل اليد. فأذى اللسان أوسع وأخفى: كلمة سخرية في الصف، ولقب جارح، ونقل كلام يفسد بين صديقين، ورسالة غاضبة في مجموعة. وكثير من الأطفال الذين لا يضربون أحدًا يجرحون بألسنتهم كل يوم دون أن ينتبهوا.',
            'وفي «الإحياء» عقد الغزالي كتابًا سماه «آفات اللسان»، عدّد فيه آفات كثيرة، منها الكذب والغيبة والنميمة والسخرية والمراء والجدال. ومجرد معرفة هذه الأسماء يساعد الشاب على أن يرى ما كان لا يراه في كلامه. فمن عرف أن نقل الكلام بين الناس اسمه النميمة، وأن ذكر الغائب بما يكره اسمه الغيبة، صار يتوقف قبل أن يقع فيهما، ويسأل نفسه: هل أحب أن يقال هذا عني؟',
            'ويمكن أن نجعل كف الأذى تمرينًا عمليًّا في البيت. فنسأل في آخر اليوم: هل سلم منك أحد اليوم؟ هل كدت تقول كلمة جارحة ثم أمسكتها؟ ونمدح الإمساك كما نمدح العطاء، لأن ترك الأذى عمل صالح يحتاج إلى جهد.',
            'ولا يعني كف الأذى أن يسكت الإنسان عن الحق أو يقبل الظلم. فالإنسان في هذه المرتبة يعرف أن يقول «لا» بأدب، وأن يدافع عن نفسه وعن غيره دون أن يجرح. والفرق دقيق، لكنه هو الفرق بين القوة والعدوان. ويمكن أن نتدرب مع الأطفال على جمل هادئة واضحة، مثل: لا أحب هذا، أرجوك توقف.',
            'وللوالدين في هذا مسؤولية خاصة. فالطفل الذي يسمع في بيته السخرية من الناس وألقابهم، سيحمل ذلك إلى مدرسته. والبيت الذي يُحفظ فيه اللسان يُخرج أطفالًا يُؤمَن جانبهم.'
          ],
          en: [
            'The Prophet, peace and blessings be upon him and his family, said, in meaning: the Muslim is the one from whose tongue and hand Muslims are safe (Sahih al-Bukhari 10). The hadith is short, yet it gives good character a clear beginning: before giving people anything, do not take away their safety.',
            'Notice that the hadith puts the tongue before the hand. Harm by the tongue is wider and more hidden: a mocking word in class, a hurtful nickname, carrying words that spoil a friendship, an angry message in a group. Many children who never hit anyone wound with their tongues every day without noticing.',
            'In the "Ihya\'" al-Ghazali devoted a book to "The Afflictions of the Tongue", listing many of them, among them lying, backbiting, tale-bearing, mockery and quarrelsome argument. Simply knowing these names helps a young person see what they did not see in their own speech. Whoever knows that carrying words between people is called tale-bearing, and mentioning the absent with what they dislike is called backbiting, starts to pause before falling into them and asks: would I like this said about me?',
            'Holding back harm can become a practice at home. At the end of the day we ask: was anyone safe from you today? Did you almost say a wounding word and hold it back? We praise holding back as we praise giving, because leaving harm is a good deed that takes effort.',
            'Holding back harm does not mean staying silent about what is right or accepting injustice. A person at this rank knows how to say "no" politely and defend themselves and others without wounding. The difference is fine, but it is the difference between strength and aggression. We can practise calm, clear sentences with children, such as: I don\'t like this, please stop.',
            'Parents bear a special responsibility here. A child who hears mockery of people and their nicknames at home will carry it to school. A home where the tongue is guarded raises children others feel safe with.'
          ] },
        quiz: Q('human-adult', 2, [
          { correct: 2, q: { ar: 'بماذا بدأ حديث «المسلم من سلم...»؟', en: 'What does the hadith "the Muslim is the one from whom..." mention first?' },
            options: [{ ar: 'المال', en: 'Wealth' }, { ar: 'اليد', en: 'The hand' }, { ar: 'اللسان', en: 'The tongue' }],
            why: { ar: 'أذى اللسان أوسع وأخفى من أذى اليد.', en: 'Harm by the tongue is wider and more hidden than harm by the hand.' } },
          { correct: 0, q: { ar: 'ماذا سمّى الغزالي كتابه في عيوب الكلام من «الإحياء»؟', en: 'What did al-Ghazali call his book on faults of speech in the "Ihya\'"?' },
            options: [{ ar: 'آفات اللسان', en: 'The Afflictions of the Tongue' }, { ar: 'كسر الشهوتين', en: 'Breaking the Two Desires' }, { ar: 'منازل السائرين', en: 'The Stations of the Wayfarers' }],
            why: { ar: 'عدّد فيه آفات منها الكذب والغيبة والنميمة والسخرية.', en: 'He listed afflictions such as lying, backbiting, tale-bearing and mockery.' } }
        ]) },
      { title: { ar: 'حقوق الصحبة', en: 'The rights of companionship' },
        body: { ar: [
            'الإنسان في هذه المرتبة لا يعيش وحده، بل يعيش بين إخوة وأصدقاء وجيران وزملاء. ولذلك عقد الغزالي في «الإحياء» كتابًا سماه «آداب الألفة والأخوة والصحبة والمعاشرة»، وذكر فيه أن لأخيك عليك حقوقًا، وجعلها ثمانية.',
            'فأولها حق في المال، بأن تواسيه إذا احتاج. وثانيها حق في النفس، بأن تعينه في حاجته بيدك ووقتك. وثالثها حق في اللسان بالسكوت، فتسكت عن عيوبه ولا تنقل ما يسوؤه. ورابعها حق في اللسان بالنطق، فتثني عليه بما فيه من خير وتنصحه برفق. وهذا الحق الرابع يعلمنا أن الصداقة ليست مجاملة دائمة، بل محبة تقول الحق بلطف.',
            'وخامسها العفو عن زلاته وهفواته. وسادسها الدعاء له في حياته وبعد موته. وسابعها الوفاء والإخلاص، بأن تثبت على محبته ولا تتغير عليه. وثامنها التخفيف وترك التكلف، فلا تحمّله ما يشق عليه، ولا تطلب منه أن يتكلف لك.',
            'وهذه الحقوق الثمانية تصلح أن تكون منهجًا كاملًا لتربية الصداقة عند الشباب. فكثير من مشكلات المدرسة سببها أن الصديق لا يعرف ما عليه لصديقه: يفضحه حين يغضب منه، أو يتركه حين يحتاجه، أو يغير عليه إذا جاء صديق جديد. ومنها أيضًا أن يكلّف الصديق صديقه ما لا يطيق، فيطلب منه أن يغش له أو يكذب من أجله، فيظن ذلك وفاء، وهو في الحقيقة ضد الحقوق كلها.',
            'ولنختر مع الطفل حقًّا واحدًا كل أسبوع، ونبحث معه عن موقف يطبقه فيه: أن يدعو لصديقه دون أن يخبره، أو يسكت عن خطأ رآه منه، أو يساعده في واجب صعب. فتصير الأخوة أفعالًا صغيرة لا شعارات.',
            'وحين يجد الشاب صديقًا يعامله بهذه الحقوق، يعرف قيمة الإنسان الذي رجع إلى مقامه، ويحب أن يكون مثله. ثم يسعى أن يكون هو هذا الصديق لغيره.'
          ],
          en: [
            'At this rank a person does not live alone, but among siblings, friends, neighbours and classmates. That is why al-Ghazali devoted a book of the "Ihya\'" to "The Manners of Friendship, Brotherhood, Companionship and Living Together", in which he says your brother has rights over you, and lists eight.',
            'The first is a right in wealth: helping him when in need. The second is a right in person: assisting him with your hands and time. The third is a right of the tongue in silence: keeping quiet about his faults and not passing on what would hurt him. The fourth is a right of the tongue in speech: praising the good in him and advising him gently. This fourth right teaches that friendship is not constant flattery, but love that speaks the truth kindly.',
            'The fifth is pardoning his slips. The sixth is praying for him in life and after death. The seventh is loyalty and sincerity: staying constant in love and not changing towards him. The eighth is lightness and leaving formality: not burdening him, and not asking him to strain himself for you.',
            'These eight rights could be a complete programme for raising friendship among young people. Many school problems come from a friend not knowing what is owed: exposing a friend when angry, leaving them when needed, or turning away when a new friend arrives. Another is asking a friend for what they cannot bear, such as cheating or lying for them, thinking that is loyalty, when in truth it goes against all these rights.',
            'We can choose one right with the child each week and look for a situation to practise it: praying for a friend without telling them, keeping quiet about a mistake they saw, helping with hard homework. Then brotherhood becomes small acts, not slogans.',
            'When a young person finds a friend who treats them with these rights, they know the worth of a person who has returned to their station, and they want to be like that. Then they try to be that friend for others.'
          ] },
        quiz: Q('human-adult', 3, [
          { correct: 1, q: { ar: 'كم حقًّا للأخ ذكر الغزالي في «آداب الألفة والأخوة»؟', en: 'How many rights of a brother did al-Ghazali list in "The Manners of Friendship and Brotherhood"?' },
            options: [{ ar: 'ثلاثة', en: 'Three' }, { ar: 'ثمانية', en: 'Eight' }, { ar: 'عشرون', en: 'Twenty' }],
            why: { ar: 'جعلها ثمانية، من المال إلى ترك التكلف.', en: 'He listed eight, from wealth to leaving formality.' } },
          { correct: 0, q: { ar: 'ما حق اللسان بالسكوت؟', en: 'What is the right of the tongue in silence?' },
            options: [{ ar: 'أن تسكت عن عيوب أخيك ولا تنقل ما يسوؤه', en: 'Keeping quiet about a brother\'s faults and not passing on what hurts him' }, { ar: 'ألا تكلمه أبدًا', en: 'Never speaking to him' }, { ar: 'أن تسكت عن الحق', en: 'Staying silent about what is right' }],
            why: { ar: 'الستر من الوفاء للأخ.', en: 'Covering faults is part of loyalty to a brother.' } }
        ]) },
      { title: { ar: 'العادة الصغيرة الدائمة', en: 'The small, lasting habit' },
        body: { ar: [
            'من أكثر ما يتعب الشباب في طريق الأخلاق أنهم يبدؤون بحماس كبير، ثم يتوقفون بعد أيام. يقرر أحدهم أن يقرأ كل يوم ساعة، أو أن يساعد أهله في كل شيء، ثم ينسى بعد أسبوع ويشعر بالفشل. ثم يظن أن الأخلاق ليست له، وأنه لن يتغير، فيترك الطريق كله بسبب بداية كانت أكبر من طاقته.',
            'وقد علّمنا النبي صلى الله عليه وآله وسلم ميزانًا آخر، ففي الحديث: «أحب الأعمال إلى الله تعالى أدومها وإن قل» (صحيح مسلم، ونحوه في البخاري 6464). فالمحبوب ليس العمل الكبير الذي ينقطع، بل العمل الصغير الذي يدوم.',
            'وهذا يوافق ما سبق من كلام ابن مسكويه في «تهذيب الأخلاق»، أن الخلق قد يُكتسب بالعادة والتدريب حتى يصير كالطبع. فالعادة الصغيرة المتكررة هي التي تصنع الحال الثابتة في النفس، وليس القرار الكبير الذي لا يتكرر.',
            'ولهذا اقترح المسار في مرتبة الإنسان أن يختار الطفل عادة واحدة صغيرة جدًّا: أن يرتب سريره، أو يسلم على جاره، أو يشكر من خدمه، أو يرد الشيء إلى مكانه. ثم يحافظ عليها أسابيع قبل أن يضيف غيرها. والصغر هنا مقصود، لأن الصغير يدوم. ومع الوقت تتصل العادات الصغيرة بعضها ببعض، فيجد الطفل نفسه بعد أشهر إنسانًا مختلفًا، دون أن يشعر أنه حمل عبئًا ثقيلًا في أي يوم.',
            'وإذا أخطأ الإنسان في هذا الطريق، فهناك وصية نبوية جامعة: «وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ» (سنن الترمذي 1987). فلا يقف الشاب عند خطئه يلوم نفسه طويلًا، بل يتبعه بحسنة، ويعود إلى عادته الصغيرة.',
            'وهذا يرفع عن الأطفال والكبار عبء الكمال. فالمطلوب ليس ألا نخطئ، بل أن نعود دائمًا. والعودة نفسها عادة تُتعلم كما تُتعلم سائر العادات.'
          ],
          en: [
            'One of the things that most tires young people on the path of character is starting with great enthusiasm and stopping after a few days. Someone decides to read for an hour daily or help the family with everything, then forgets after a week and feels a failure. Then they think character is not for them, that they will never change, and leave the whole road because of a start bigger than their strength.',
            'The Prophet, peace and blessings be upon him and his family, taught a different measure. Meaning (not a translation): the deeds most beloved to Allah are the most lasting, even if small (Sahih Muslim, and similar in al-Bukhari 6464). What is loved is not the big deed that stops, but the small one that lasts.',
            'This agrees with what we saw from Ibn Miskawayh in "Tahdhib al-Akhlaq": character can be acquired by habit and training until it becomes like nature. The small, repeated habit is what forms a settled state in the soul, not the big decision that is never repeated.',
            'So at the human rank the path suggests the child choose one very small habit: making the bed, greeting a neighbour, thanking whoever served them, putting things back. Then keep it for weeks before adding another. The smallness is deliberate, because what is small lasts. Over time the small habits connect, and after some months the child finds themselves a different person, without having carried a heavy load on any single day.',
            'And when a person slips on this road, there is a comprehensive prophetic counsel. Meaning (not a translation): follow a bad deed with a good one and it will erase it, and treat people with good character (Sunan al-Tirmidhi 1987). So a young person does not stay stuck blaming themselves, but follows the slip with a good deed and returns to the small habit.',
            'This lifts the burden of perfection from children and adults alike. What is asked is not that we never slip, but that we always return. Returning is itself a habit, learned like any other.'
          ] },
        quiz: Q('human-adult', 4, [
          { correct: 2, q: { ar: 'ما أحب الأعمال إلى الله بحسب الحديث؟', en: 'Which deeds are most beloved to Allah according to the hadith?' },
            options: [{ ar: 'أكبرها ولو انقطع', en: 'The biggest, even if they stop' }, { ar: 'أصعبها', en: 'The hardest' }, { ar: 'أدومها وإن قل', en: 'The most lasting, even if small' }],
            why: { ar: 'العمل الصغير الدائم يصنع الخلق الثابت.', en: 'A small lasting deed forms settled character.' } },
          { correct: 1, q: { ar: 'ماذا نفعل إذا أخطأنا بحسب حديث الترمذي؟', en: 'What do we do after slipping, per the hadith in al-Tirmidhi?' },
            options: [{ ar: 'نترك الطريق', en: 'Leave the road' }, { ar: 'نتبع السيئة بحسنة', en: 'Follow the bad deed with a good one' }, { ar: 'نلوم أنفسنا طويلًا', en: 'Blame ourselves at length' }],
            why: { ar: 'المطلوب أن نعود دائمًا، لا ألا نخطئ أبدًا.', en: 'What is asked is always returning, not never slipping.' } }
        ]) },
      { title: { ar: 'مع الطفل: الوعد والقدوة', en: 'With the child: promises and example' },
        body: { ar: [
            'يتعلم الطفل الوفاء بالوعد من وعودنا نحن له أكثر مما يتعلمه من نصائحنا. فالأب الذي يقول «سنخرج إلى الحديقة يوم الجمعة» ثم ينسى، والأم التي تقول «سأشتري لك» لتسكته ثم لا تفعل، يعلّمان الطفل أن الوعد كلمة تُقال لا عهد يُحفظ.',
            'وقد قال الله تعالى: ﴿لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ﴾ (الأحزاب 33:21). فالأخلاق في الإسلام لم تأت كتابًا يُقرأ فقط، بل جاءت في إنسان يُرى ويُقتدى به. وكذلك البيت: الطفل يقرأ والديه قبل أن يقرأ كتبه. وأول ما يقرؤه منهما صدق كلامهما.',
            'ولهذا يحسن أن يكون الوالدان حذرين في وعودهما. فلا يعدان إلا بما يستطيعان، وإذا عجزا عن وعد اعتذرا للطفل بصدق، وشرحا له السبب، وجعلا له موعدًا آخر. فالاعتذار عن الوعد المكسور يعلم الطفل أن الوعد شيء مهم يستحق الاعتذار.',
            'ومن الأفعال الصغيرة التي تبني هذه المرتبة في البيت أن نعطي الطفل مسؤولية حقيقية يفي بها: نبتة يسقيها، أو حيوانًا صغيرًا يطعمه، أو جارًا كبيرًا يطمئن عليه. فالوفاء يكبر حين يجد شيئًا حقيقيًّا يحمله. ونحسن أن نثق بالطفل في هذه المسؤولية، فلا نسحبها منه عند أول تقصير، بل نذكّره بلطف ونعطيه فرصة أخرى، لأن الثقة نفسها تربي الوفاء.',
            'وحين يتقن الطفل الخير المطلوب منه، يبدأ سؤال جديد: هل أنتظر دائمًا أن يُطلب مني الخير؟ وهنا يقف على باب الإبهام، حيث يقول القرآن: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ﴾ (آل عمران 3:133). فالمسارعة أن يرى الإنسان الخير فيسبق إليه قبل أن يطلبه أحد، وقبل أن يراه أحد.',
            'وهذا الانتقال لطيف وطبيعي. فمن تعوّد أن يفي بما وعد، يصير قلبه حساسًا لحاجات الناس، فيبدأ يرى ما لم يُطلب منه، ويحب أن يقدمه. وهذا هو أول السباق.'
          ],
          en: [
            'A child learns to keep promises from the promises we make to them more than from our advice. The father who says "we will go to the park on Friday" and forgets, the mother who says "I will buy it for you" to quiet the child and then does not, teach that a promise is a word said, not a pledge kept.',
            'Allah says, in meaning (not a translation): in the Messenger of Allah you have an excellent example (al-Ahzab 33:21). Character in Islam did not come only as a book to read; it came in a person to be seen and followed. So too at home: a child reads their parents before reading their books. And the first thing they read is whether our words are true.',
            'So parents should be careful with promises. They promise only what they can do, and when they cannot keep one, they apologise sincerely, explain why and set another time. Apologising for a broken promise teaches the child that a promise matters enough to deserve an apology.',
            'One small way to build this rank at home is to give the child a real responsibility to keep: a plant to water, a small animal to feed, an elderly neighbour to check on. Loyalty grows when it has something real to carry. It helps to trust the child with this responsibility and not withdraw it at the first lapse, but remind gently and give another chance, because trust itself nurtures loyalty.',
            'When the child has mastered the good asked of them, a new question begins: must I always wait to be asked? Here they stand at the door of the thumb, where the Quran says, in meaning: and hasten to forgiveness from your Lord (Al \'Imran 3:133). Hastening means seeing the good and racing to it before anyone asks, and before anyone sees.',
            'This transition is gentle and natural. Whoever is used to keeping what they promised develops a heart sensitive to people\'s needs, begins to see what no one asked of them, and loves to offer it. That is the start of the race.'
          ] },
        quiz: Q('human-adult', 5, [
          { correct: 0, q: { ar: 'من أين يتعلم الطفل الوفاء بالوعد أكثر؟', en: 'Where does a child learn to keep promises most?' },
            options: [{ ar: 'من وعود والديه له', en: 'From the promises parents make to them' }, { ar: 'من الكتب وحدها', en: 'From books alone' }, { ar: 'من التلفاز', en: 'From television' }],
            why: { ar: 'الطفل يقرأ والديه قبل أن يقرأ كتبه.', en: 'A child reads their parents before reading books.' } },
          { correct: 2, q: { ar: 'ماذا يفعل الوالدان إذا عجزا عن وعد؟', en: 'What should parents do if they cannot keep a promise?' },
            options: [{ ar: 'يتجاهلان الأمر', en: 'Ignore it' }, { ar: 'يلومان الطفل', en: 'Blame the child' }, { ar: 'يعتذران بصدق ويشرحان ويجعلان موعدًا آخر', en: 'Apologise sincerely, explain and set another time' }],
            why: { ar: 'الاعتذار عن الوعد يعلم أن الوعد مهم.', en: 'Apologising for a promise teaches that promises matter.' } }
        ]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-sabiq-adult', stage: 'sabiq', ages: '15+',
    title: { ar: 'السابقون', en: 'Those who race ahead' },
    chapters: [
      { title: { ar: 'ثلاثة أصناف من المصطفين', en: 'Three kinds among the chosen' },
        body: { ar: [
            'اسم المرتبة الأخيرة في المسار مأخوذ من آية في سورة فاطر، تذكر الذين أورثهم الله الكتاب من عباده الذين اصطفاهم، ثم تقسمهم: ﴿فَمِنْهُمْ ظَالِمٌ لِنَفْسِهِ وَمِنْهُمْ مُقْتَصِدٌ وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ بِإِذْنِ اللَّهِ﴾ (فاطر 35:32).',
            'وقد نقل ابن كثير في تفسيره هذه الآية ما معناه أن الظالم لنفسه هو المفرط في بعض الواجبات المرتكب لبعض المحرمات، وأن المقتصد هو المؤدي للواجبات التارك للمحرمات، وقد يترك بعض المستحبات ويقع في بعض المكروهات، وأن السابق بالخيرات هو الذي يفعل الواجبات والمستحبات، ويترك المحرمات والمكروهات وبعض المباحات.',
            'وفي الآية رحمة واسعة كثيرًا ما ننساها. فالأصناف الثلاثة كلهم من الذين اصطفاهم الله وأورثهم الكتاب، حتى الظالم لنفسه. فلا ينبغي أن ننظر إلى من قصّر نظرة احتقار، ولا أن نعامل الطفل المتعثر كأنه خرج من الطريق. فهو في الطريق، لكنه في أوله. ومن رحمة الله أنه جمعهم في آية واحدة، كأنه يقول لكل واحد منهم: الطريق أمامك، فامشِ فيه بقدر ما تستطيع.',
            'وفي الآية أيضًا أدب عظيم للسابق نفسه: «بإذن الله». فالسبق ليس شطارة ذاتية يفتخر بها صاحبها، بل توفيق من الله. ولذلك يحتاج السابق إلى التواضع أكثر من غيره، لأنه أقرب الناس إلى خطر العجب. والعجب أن يرى الإنسان عمله ولا يرى من وفقه إليه.',
            'وهذا ما يحرص عليه المسار حين يصل الطفل إلى الإبهام. فلا نقول له: صرت أفضل من إخوتك. بل نقول: وفقك الله لخير كثير، فاحمده، واسأله أن يثبتك، وأعن غيرك على أن يصعد كما صعدت. فهذا أحب إلى الله.',
            'والإبهام في اليد يلمس الأصابع كلها ويعينها على الإمساك. وكذلك السابق بالخيرات لا يصعد وحده، بل يمد يده لمن خلفه. ويفرح إذا رآهم يقتربون منه.'
          ],
          en: [
            'The name of the last rank comes from a verse in Surat Fatir that mentions those whom Allah made heirs of the Book among the servants He chose, and then divides them. Meaning (not a translation): among them is one who wrongs himself, among them one who is moderate, and among them one who races ahead in good deeds by Allah\'s permission (Fatir 35:32).',
            'Ibn Kathir, in his commentary on this verse, relates, in meaning, that the one who wrongs himself falls short in some obligations and commits some prohibitions; the moderate fulfils obligations and avoids prohibitions, though he may leave some recommended acts and do some disliked ones; and the one who races ahead does the obligations and the recommended, and leaves the prohibited, the disliked and some of what is permitted.',
            'There is wide mercy in the verse that we often forget. All three kinds are among those Allah chose and made heirs of the Book, even the one who wrongs himself. So we should not look down on whoever falls short, nor treat a stumbling child as if they had left the road. They are on the road, at its beginning. Allah\'s mercy gathers them in one verse, as if telling each: the road is before you, so walk it as far as you can.',
            'The verse also holds a great courtesy for the one who races ahead: "by Allah\'s permission". Racing ahead is not personal cleverness to boast about, but success granted by Allah. So the one who races ahead needs humility more than anyone, being closest to the danger of self-admiration. Self-admiration is seeing one\'s deed and not seeing who granted it.',
            'This is what the path takes care of when a child reaches the thumb. We do not say: now you are better than your siblings. We say: Allah has granted you much good, so thank Him, ask Him to keep you firm, and help others climb as you climbed. That is dearer to Allah.',
            'The thumb touches every finger and helps them hold. So too the one who races to good does not climb alone, but reaches out to those behind. They are glad to see them draw near.'
          ] },
        quiz: Q('sabiq-adult', 1, [
          { correct: 0, q: { ar: 'هل الظالم لنفسه في آية فاطر 35:32 من المصطفين؟', en: 'Is the one who wrongs himself in Fatir 35:32 among the chosen?' },
            options: [{ ar: 'نعم، الأصناف الثلاثة من الذين اصطفاهم الله', en: 'Yes, all three kinds are among those Allah chose' }, { ar: 'لا، هو خارج الطريق', en: 'No, he is off the road' }, { ar: 'لا تذكره الآية', en: 'The verse does not mention him' }],
            why: { ar: 'المتعثر في الطريق، لكنه في أوله.', en: 'The one who stumbles is on the road, at its beginning.' } },
          { correct: 1, q: { ar: 'ماذا تعلمنا كلمة «بإذن الله» في الآية؟', en: 'What do the words "by Allah\'s permission" teach us?' },
            options: [{ ar: 'أن السبق شطارة ذاتية', en: 'That racing ahead is personal cleverness' }, { ar: 'أن السبق توفيق من الله يحتاج إلى التواضع', en: 'That racing ahead is success from Allah that calls for humility' }, { ar: 'أن السابق أفضل من الجميع', en: 'That the racer is better than everyone' }],
            why: { ar: 'السابق أقرب الناس إلى خطر العجب، فيحتاج إلى التواضع.', en: 'The racer is closest to self-admiration, so needs humility.' } }
        ]) },
      { title: { ar: 'سباق إلى المغفرة لا على الناس', en: 'A race to forgiveness, not against people' },
        body: { ar: [
            'يأمر القرآن بالمسارعة صراحة: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ﴾ (آل عمران 3:133). ويصف أهل القمة بالسبق: ﴿وَالسَّابِقُونَ السَّابِقُونَ ۝ أُولَٰئِكَ الْمُقَرَّبُونَ﴾ (الواقعة 56:10-11). فالسباق في هذا الدين ليس عيبًا، بل هو مطلوب.',
            'لكن الآية تحدد وجهة السباق: إلى مغفرة من ربكم. فنحن لا نتسابق على الناس لنهزمهم، بل نتسابق إلى الله لنقترب منه. وهذا فرق كبير في القلب. فالمتسابق على الناس يحزن إذا سبقه غيره، ويفرح إذا تأخروا. أما المتسابق إلى الله فيفرح بكل من يصل، لأن الطريق لا يضيق بالسالكين.',
            'ولهذا كان من علامات السابق الحقيقي أن يفرح بسبق غيره. فإذا رأى أخاه أسرع منه إلى صدقة أو صلاة أو مساعدة، سُرّ بذلك، وحمد الله، وتعلم منه. وإذا وجد في نفسه شيئًا من الغيرة، عالجه بالدعاء لأخيه.',
            'ومن أخطر ما يدخل على هذه المرتبة في المدارس والبيوت أن يتحول الخير إلى مسابقة نقاط ولوحات. فيصير الطفل يساعد ليأخذ نجمة، ويتصدق ليرى اسمه في الأعلى. وهذا قد ينفع في البداية، لكنه إن دام أفسد المقصود، لأن القلب يتعلق بالنجمة لا بالله.',
            'ولذلك يحسن أن نخفف من المقارنة بين الإخوة في الخير. فلا نقول: انظر إلى أخيك كيف يساعد، وأنت لا تفعل. بل نقول: أخوك وجد بابًا للخير، فما الباب الذي ستجده أنت؟ فيصير الخير ميدانًا واسعًا لكل واحد فيه طريق. فهذا يحب أن يساعد بيده، وذاك يحب أن يعطي من ماله القليل، وثالث يحسن الكلمة الطيبة، ورابع يحسن الاستماع. وكلها أبواب إلى الله.',
            'وفي التطبيق صممنا علامات التقدم لتكون بين الطفل ونفسه، لا لوحة يقارن فيها نفسه بغيره. فيسأل الطفل نفسه: هل أنا اليوم أقرب إلى الخير مني أمس؟ ولا يسأل: هل أنا أفضل من أخي؟'
          ],
          en: [
            'The Quran commands hastening openly. Meaning (not a translation): and hasten to forgiveness from your Lord (Al \'Imran 3:133). It describes the people of the summit by racing ahead. Meaning (not a translation): and those who race ahead, those who race ahead, they are the ones brought near (al-Waqi\'a 56:10-11). Racing, in this religion, is not a fault but something asked of us.',
            'But the verse fixes the direction of the race: to forgiveness from your Lord. We do not race against people to defeat them; we race towards Allah to draw near to Him. That is a great difference in the heart. Whoever races against people is sad when overtaken and glad when others fall behind. Whoever races towards Allah is glad at everyone who arrives, because the road never grows narrow for its travellers.',
            'So one sign of the true racer is gladness at another\'s lead. Seeing a brother quicker to charity, prayer or help, they are pleased, praise Allah and learn from him. If they find some jealousy in themselves, they treat it by praying for that brother.',
            'One of the most dangerous things to enter this rank in schools and homes is turning good into a contest of points and charts. The child helps to get a star, gives to see their name at the top. This may help at the start, but if it lasts it spoils the aim, because the heart attaches to the star, not to Allah.',
            'So it is good to lessen comparison between siblings in doing good. We do not say: look how your brother helps, and you don\'t. We say: your brother found a door to good; which door will you find? Then good becomes a wide field where each has a path. One loves to help with their hands, another to give from their little money, a third is good with kind words, a fourth with listening. All are doors to Allah.',
            'In the app, progress markers are designed to be between the child and themselves, not a chart for comparing with others. The child asks: am I closer to good today than yesterday? Not: am I better than my brother?'
          ] },
        quiz: Q('sabiq-adult', 2, [
          { correct: 2, q: { ar: 'إلى أين يكون السباق في آية آل عمران 3:133؟', en: 'Where is the race directed in Al \'Imran 3:133?' },
            options: [{ ar: 'إلى المركز الأول في الصف', en: 'To first place in class' }, { ar: 'على الإخوة', en: 'Against siblings' }, { ar: 'إلى مغفرة من الله', en: 'To forgiveness from Allah' }],
            why: { ar: 'نتسابق إلى الله لا على الناس.', en: 'We race towards Allah, not against people.' } },
          { correct: 0, q: { ar: 'ما علامة السابق الحقيقي بحسب هذا الفصل؟', en: 'What is a sign of the true racer, according to this chapter?' },
            options: [{ ar: 'أن يفرح بسبق غيره', en: 'Being glad when others get ahead' }, { ar: 'أن يحزن إذا سبقه أحد', en: 'Being sad when overtaken' }, { ar: 'أن يجمع أكثر النجوم', en: 'Collecting the most stars' }],
            why: { ar: 'طريق الله لا يضيق بالسالكين.', en: 'The road to Allah never grows narrow for its travellers.' } }
        ]) },
      { title: { ar: 'الخير الخفي', en: 'Hidden good' },
        body: { ar: [
            'إذا كانت المسارعة هي الجناح الأول للسابق، فالإخلاص هو الجناح الثاني. وقد عقد الغزالي في «إحياء علوم الدين» كتابًا سماه «النية والإخلاص والصدق»، يشرح فيه بالمعنى أن العمل الخالص هو الذي خلص باعثه من كل شائبة، فلا يكون الدافع إليه إلا التقرب إلى الله.',
            'وقبله كتب الحارث المحاسبي في «الرعاية لحقوق الله» كثيرًا عن الرياء وأبوابه الخفية، وكيف يدخل على العامل وهو لا يشعر. فقد يبدأ الإنسان العمل لله، ثم يحب أن يراه الناس، ثم يزينه لهم، ثم ينقص منه حين يغيبون. وهذا التدرج الخفي هو ما يحتاج السابق إلى مراقبته.',
            'ولهذا كان من أنفع ما يتدرب عليه الشاب في هذه المرتبة أن يكون له خير لا يعرفه أحد. صدقة صغيرة لا يخبر بها، ودعاء لصديق في ظهر الغيب، ومساعدة لجار دون أن يذكر اسمه. فهذا الخير الخفي يحمي القلب، لأنه لا ينتظر عليه مدحًا ولا شكرًا من أحد. إلا من الله.',
            'وليس معنى هذا أن كل خير ظاهر رياء. فبعض الخير يحتاج أن يُرى ليقتدي به الناس، كالأب الذي يتصدق أمام أبنائه ليعلمهم. والمعيار ليس أن يُرى العمل أو لا يُرى، بل لماذا نعمله، ولمن.',
            'ومن الأسئلة اللطيفة التي يمكن أن نعلّمها للأطفال: لو لم يرني أحد، هل كنت سأفعله؟ وهذا السؤال لا يُراد به التشكيك في كل عمل، بل تنقية القلب شيئًا فشيئًا. فإذا وجد الطفل أنه يفعل الخير ليُمدح، لا نوبخه، بل نفرح بصدقه مع نفسه، ونقول له: جدد نيتك، واجعلها لله، وأكمل عملك.',
            'وحين يتعود الطفل على صندوق خير سري بينه وبين الله، يجد لذة لا يجدها في المدح، ويعرف أن الله يرى ما لا يراه الناس. ويكفيه ذلك.'
          ],
          en: [
            'If hastening is the racer\'s first wing, sincerity is the second. Al-Ghazali devoted a book of "Ihya\' \'Ulum al-Din" to "Intention, Sincerity and Truthfulness", explaining, in meaning, that a sincere deed is one whose motive is purified of every admixture, so that nothing drives it but drawing near to Allah.',
            'Before him, al-Harith al-Muhasibi wrote at length in "al-Ri\'aya li-Huquq Allah" about showing off and its hidden doors, and how it enters a person unawares. One may begin a deed for Allah, then like being seen, then polish it for people, then lessen it when they are gone. This hidden slide is what the racer must watch.',
            'So one of the most useful things a young person can practise at this rank is having good that no one knows: a small charity never mentioned, a prayer for a friend in their absence, help for a neighbour without giving one\'s name. This hidden good protects the heart, because it waits for no praise or thanks from anyone.',
            'This does not mean all visible good is showing off. Some good needs to be seen so people follow it, like a father who gives charity in front of his children to teach them. The measure is not whether a deed is seen, but why we do it, and for whom.',
            'A gentle question we can teach children: if no one saw me, would I still do it? It is not meant to cast doubt on every deed, but to purify the heart little by little. If a child finds they do good to be praised, we do not scold them; we are glad at their honesty and say: renew your intention, make it for Allah, and carry on.',
            'When a child gets used to a secret box of good between them and Allah, they find a sweetness they do not find in praise, and learn that Allah sees what people do not.'
          ] },
        quiz: Q('sabiq-adult', 3, [
          { correct: 1, q: { ar: 'ما العمل الخالص بحسب الغزالي في كتاب «النية والإخلاص والصدق»؟', en: 'What is a sincere deed according to al-Ghazali in "Intention, Sincerity and Truthfulness"?' },
            options: [{ ar: 'العمل الذي يراه الناس', en: 'A deed people see' }, { ar: 'العمل الذي خلص باعثه من كل شائبة', en: 'A deed whose motive is purified of every admixture' }, { ar: 'العمل الكبير فقط', en: 'Only a big deed' }],
            why: { ar: 'الإخلاص أن يكون الدافع التقرب إلى الله وحده.', en: 'Sincerity is that the motive is nearness to Allah alone.' } },
          { correct: 2, q: { ar: 'هل كل خير ظاهر رياء بحسب هذا الفصل؟', en: 'According to this chapter, is all visible good showing off?' },
            options: [{ ar: 'نعم دائمًا', en: 'Yes, always' }, { ar: 'نعم إذا رآه الأطفال', en: 'Yes, if children see it' }, { ar: 'لا، المعيار لماذا نعمله ولمن', en: 'No, the measure is why we do it and for whom' }],
            why: { ar: 'بعض الخير يُظهر ليُقتدى به.', en: 'Some good is shown so others may follow.' } }
        ]) },
      { title: { ar: 'النور فوق اليد', en: 'The light above the hand' },
        body: { ar: [
            'فوق السابقين نور: نور الهداية التي أتى بها الأنبياء عليهم السلام. وقد قال الله تعالى بعد أن ذكر جماعة من الأنبياء: ﴿أُولَٰئِكَ الَّذِينَ هَدَى اللَّهُ ۖ فَبِهُدَاهُمُ اقْتَدِهْ﴾ (الأنعام 6:90). فهدي الأنبياء في المسار قمة يُهتدى بها، نمشي في ضوئها ونقتدي بها.',
            'وهذا مهم جدًّا في التربية، لأن بعض الأطفال المتحمسين قد يظنون أنهم إذا وصلوا إلى الإبهام فقد بلغوا النهاية. والحقيقة أن الإبهام بداية طريق جديد، طريق لا ينتهي ما دام الإنسان حيًّا. وكلما ارتقى الإنسان فيه رأى أمامه درجة أعلى.',
            'ومن أجمل الأمثلة التي نحكيها في هذا الباب ما رواه البخاري (3705) عن علي عليه السلام: أن فاطمة عليها السلام اشتكت ما تلقى من أثر الرحى في يدها، فجاءت تطلب خادمًا. فأتاهما النبي صلى الله عليه وآله وسلم وقد أخذا مضاجعهما، فعلّمهما تسبيحًا وتحميدًا وتكبيرًا عند النوم، وقال بالمعنى إنه خير لهما من خادم.',
            'ففي بيت هو من أشرف البيوت، كانت اليد تتعب من العمل، والقلب يُوجَّه إلى الذكر. وهذا يعلم أبناءنا أن القمة ليست في الراحة، بل في القلب الذي يجد في الله ما يغنيه. وأن أهل البيت عليهم السلام، وهم أقرب الناس إلى النبي، عاشوا التعب والصبر، فلم يكن قربهم إعفاء من العمل، بل نورًا فيه.',
            'وحين نتأمل هذه القمة، نعرف أن طريقنا طويل، فلا نتكبر بما وصلنا إليه، ولا نيأس من بعده. ونردد الدعاء النبوي: «اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الْأَخْلَاقِ، لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لَا يَصْرِفُ عَنِّي سَيِّئَهَا إِلَّا أَنْتَ» (من حديث في صحيح مسلم).',
            'فالأخلاق الحسنة في آخر الأمر هداية من الله، نطلبها منه كل يوم، ونسعى إليها كل يوم.'
          ],
          en: [
            'Above those who race ahead is a light: the light of guidance the prophets, peace be upon them, brought. After naming a group of prophets, Allah says, in meaning (not a translation): those are the ones Allah guided, so follow their guidance (al-An\'am 6:90). In the path, the guidance of the prophets is a summit that guides the way: we walk in its light and follow it.',
            'This matters in upbringing, because some enthusiastic children may think that reaching the thumb means reaching the end. In truth the thumb is the start of a new road, one that does not end while a person lives. The higher one climbs, the higher the next step appears.',
            'One of the finest examples here is what al-Bukhari (3705) relates from Ali, peace be upon him: Fatima, peace be upon her, complained of what the hand mill did to her hand and came asking for a servant. The Prophet, peace and blessings be upon him and his family, came to them as they lay down to sleep and taught them glorification, praise and magnification of Allah at bedtime, saying, in meaning, that it was better for them than a servant.',
            'In one of the noblest of homes, the hand grew tired from work and the heart was turned to remembrance. This teaches our children that the summit is not comfort, but a heart that finds in Allah what suffices it. And that the Ahl al-Bayt, peace be upon them, the closest people to the Prophet, lived with fatigue and patience: their nearness was not exemption from work, but light within it.',
            'When we reflect on this summit, we know our road is long, so we are neither proud of what we reached nor despairing of what lies beyond. And we repeat the prophetic supplication, in meaning: O Allah, guide me to the best of character, for none guides to the best of it but You, and turn its bad away from me, for none turns its bad away but You (from a hadith in Sahih Muslim).',
            'Good character, in the end, is guidance from Allah: we ask Him for it every day and strive for it every day.'
          ] },
        quiz: Q('sabiq-adult', 4, [
          { correct: 0, q: { ar: 'ما مكان الأنبياء في المسار؟', en: 'What is the place of the prophets in the path?' },
            options: [{ ar: 'نور، وهداهم قمة يُهتدى بها', en: 'A light, and their guidance is a summit that guides the way' }, { ar: 'قصص للتسلية فقط', en: 'Stories for entertainment only' }, { ar: 'لا يذكرهم المسار', en: 'The path does not mention them' }],
            why: { ar: 'الآية تأمر بالاقتداء بهداهم.', en: 'The verse commands following their guidance.' } },
          { correct: 2, q: { ar: 'ماذا علّم النبي صلى الله عليه وآله وسلم فاطمة وعليًّا عليهما السلام بدل الخادم؟', en: 'What did the Prophet teach Fatima and Ali instead of a servant?' },
            options: [{ ar: 'أن يناما مبكرًا', en: 'To sleep early' }, { ar: 'أن يتركا العمل', en: 'To stop working' }, { ar: 'تسبيحًا وتحميدًا وتكبيرًا عند النوم', en: 'Glorification, praise and magnification at bedtime' }],
            why: { ar: 'القمة قلب يجد في الله ما يغنيه.', en: 'The summit is a heart that finds sufficiency in Allah.' } }
        ]) },
      { title: { ar: 'مع الطفل: النفس المطمئنة', en: 'With the child: the soul at peace' },
        body: { ar: [
            'في آخر سورة الفجر نداء رقيق: ﴿يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ۝ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَرْضِيَّةً﴾ (الفجر 89:27-28). وهذا النداء هو الغاية التي يمشي إليها المسار كله: نفس هدأت بعد غفلتها وشرهها واندفاعها، واطمأنت إلى ربها.',
            'والطمأنينة ليست كمالًا بلا خطأ، بل سكون القلب بعد الرجوع. فالطفل الذي يخطئ ثم يعتذر ويصلح، فيه شيء من الطمأنينة. والشاب الذي يغضب ثم يستعيذ ويهدأ، يذوق طعمها. والمسار ليس سلمًا يُصعد مرة واحدة، بل يد نفتحها كل صباح ونبدأ من جديد.',
            'ولهذا نوصي الوالدين ألا يجعلوا المراتب محطات نهائية. فقد يصل الطفل إلى الإبهام في أسبوع، ثم يعود إلى الوسطى في يوم صعب. وهذا طبيعي، وهو ما يحدث لنا نحن الكبار. والمهم ألا يشعر الطفل بأنه سقط، بل بأنه يتعلم. ويمكن أن نقول له في تلك الأيام: لقد صعدت من قبل، وتعرف الطريق، وغدًا تصعد من جديد بإذن الله.',
            'وفي هذه المرتبة يحسن أن نعطي الطفل دورًا في مساعدة غيره على الصعود. فيحكي لأخيه الصغير قصة من قصص المسار، أو يساعده على تذكر خطوته، أو يدعو له. فالسابق الحقيقي يمد يده لمن خلفه، كما يمد الإبهام قوته لكل الأصابع. وهذا العطاء يحفظه من العجب، لأنه ينشغل بغيره عن نفسه.',
            'وأجمل ما نتركه لأطفالنا في هذا الطريق ليس الجوائز ولا المراتب، بل صورة بيت يحب الخير ويفرح به، ويستر الخطأ ويصلحه، ويرى في كل يوم فرصة جديدة. وهذه الصورة تبقى في قلب الطفل بعد أن ينسى أسماء المراتب كلها، وتعود إليه حين يصير هو أبًا أو أمًّا، فيبني بيتًا يشبهها.',
            'فإذا كبر الطفل وتذكر يده وأصابعها الخمسة، تذكر معها أن الإنسان يستطيع دائمًا أن يرتقي، وأن باب الله مفتوح لمن أراد الرجوع.'
          ],
          en: [
            'At the end of Surat al-Fajr is a tender call. Meaning (not a translation): O soul at peace, return to your Lord, well pleased and well pleasing (al-Fajr 89:27-28). This call is the goal the whole path walks towards: a soul that has calmed after heedlessness, greed and impulsiveness, and found rest in its Lord.',
            'Peace is not perfection without error, but the stillness of the heart after returning. A child who errs, apologises and repairs has some of this peace. A young person who gets angry, seeks refuge and calms down tastes it. The path is not a ladder climbed once, but a hand we open each morning to begin again.',
            'So we advise parents not to treat the ranks as final stations. A child may reach the thumb in a week, then return to the middle finger on a hard day. This is natural, and it happens to us adults. What matters is that the child does not feel they fell, but that they are learning. On such days we can say: you have climbed before, you know the road, and tomorrow you will climb again, Allah willing.',
            'At this rank it helps to give the child a role in helping others climb: telling a younger sibling one of the path\'s stories, helping them remember their step, praying for them. The true racer reaches out to those behind, as the thumb lends its strength to every finger. This giving protects them from self-admiration, because they are busy with others rather than themselves.',
            'The finest thing we leave our children on this road is not prizes or ranks, but the picture of a home that loves good and delights in it, covers mistakes and mends them, and sees each day as a new chance. This picture stays in the child\'s heart after the names of the ranks are forgotten, and returns when they become a parent and build a home like it.',
            'When the child grows up and remembers their hand and its five fingers, they will remember with it that a person can always rise, and that Allah\'s door is open to whoever wishes to return.'
          ] },
        quiz: Q('sabiq-adult', 5, [
          { correct: 1, q: { ar: 'ما الطمأنينة بحسب هذا الفصل؟', en: 'What is peace of soul according to this chapter?' },
            options: [{ ar: 'كمال بلا خطأ أبدًا', en: 'Perfection without any error' }, { ar: 'سكون القلب بعد الرجوع', en: 'The stillness of the heart after returning' }, { ar: 'الوصول إلى آخر مرتبة مرة واحدة', en: 'Reaching the last rank once and for all' }],
            why: { ar: 'من أخطأ ثم رجع ذاق الطمأنينة.', en: 'Whoever errs and returns tastes peace.' } },
          { correct: 0, q: { ar: 'ماذا لو عاد الطفل من الإبهام إلى الوسطى في يوم صعب؟', en: 'What if a child goes back from the thumb to the middle finger on a hard day?' },
            options: [{ ar: 'هذا طبيعي، وهو يتعلم', en: 'It is natural; they are learning' }, { ar: 'فشل المسار كله', en: 'The whole path has failed' }, { ar: 'يُعاقب', en: 'They are punished' }],
            why: { ar: 'المسار يد نفتحها كل صباح ونبدأ من جديد.', en: 'The path is a hand we open each morning to begin again.' } }
        ]) }
    ]
  });
  delete window.AKHLAQ_BQ;
})();


/* ───────────── الجولة الثامنة عشرة، 18 نوفمبر 2026: السلسلة الثانية لكتب 9 إلى 14 (book-<stage>-2) ─────────────
 * ثلاث بطلات وولدان، في بيئات اليوم: الشاشات، والألعاب والشراء داخلها، ومجموعات المحادثة، ومشروع مدرسي، وخير خفي في الحي والمسجد.
 * لا آية ولا حديث إلا ما سبق التحقق منه. السرد بضمير الغائب.
 */
window.AKHLAQ_BOOKS = window.AKHLAQ_BOOKS || [];
window.AKHLAQ_BQ = function (bid, ci, list) {
  return list.map(function (q, k) { q.id = 'book-' + bid + '-c' + ci + 'q' + (k + 1); q.type = 'comprehension'; q.readingId = null; return q; });
};

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-zombie-2', stage: 'zombie', ages: '9-14',
    title: { ar: 'سلمى والشاشة التي لا تنام', en: 'Salma and the screen that never sleeps' },
    chapters: [
      { title: { ar: 'أول شيء وآخر شيء', en: 'The first thing and the last' },
        body: {
          ar: [
            'كانت سلمى في الثانية عشرة، وكان هاتفها أول شيء تراه في الصباح وآخر شيء تراه في الليل. تفتح عينيها، فتمد يدها إلى الطاولة قبل أن تقول أي كلمة، وتبدأ تمرر الصور والمقاطع بإصبعها، واحدًا بعد واحد، بلا نهاية.',
            'في المطبخ كانت أمها تقول: صباح الخير يا سلمى، هل نمتِ جيدًا؟ فترد سلمى: ممم، وعيناها على الشاشة. وكان أخوها الصغير يحاول أن يريها رسمة رسمها لها في الليل، فتقول: بعد قليل. ولا يأتي هذا القليل أبدًا.',
            'وفي طريق المدرسة لم تكن ترى الشارع ولا الأشجار ولا الناس. كانت تمشي ورأسها منحنٍ، وتعرف الطريق بقدميها لا بعينيها. ومرة كادت تصطدم بعمود الكهرباء، فضحكت صديقتها ميار وقالت: الهاتف سيأخذك يومًا إلى مكان لا تعرفينه.',
            'لم تكن سلمى ترى في ذلك مشكلة. فهي لا تؤذي أحدًا، ودرجاتها في المدرسة جيدة، وكل صديقاتها يفعلن مثلها. لكنها كانت تشعر أحيانًا بشيء غريب في آخر اليوم: تعب كبير، مع أنها لم تفعل شيئًا متعبًا. وربما نسيت ما قرأته في الصباح قبل أن يأتي المساء.',
            'وفي إحدى الليالي، بعد ساعة طويلة من المقاطع، أطفأت الشاشة ونظرت إلى السقف المظلم. حاولت أن تتذكر ماذا رأت في هذه الساعة، فلم تتذكر شيئًا واحدًا. شعرت كأن الساعة سُرقت منها دون أن تنتبه، وسألت نفسها: أين كنت؟ ولم تجد جوابًا، فأعادت تشغيل الشاشة لتهرب من السؤال، ونامت والضوء الأزرق على وجهها.'
          ],
          en: [
            'Salma was twelve, and her phone was the first thing she saw in the morning and the last thing she saw at night. She opened her eyes and reached for the table before saying a word, and began swiping through pictures and clips with her finger, one after another, without end.',
            'In the kitchen her mother would say: good morning, Salma, did you sleep well? Salma would answer: mm, her eyes on the screen. Her little brother tried to show her a drawing he had made for her the night before, and she said: in a minute. That minute never came.',
            'On the way to school she did not see the street, the trees or the people. She walked with her head bent, knowing the way with her feet, not her eyes. Once she nearly walked into a lamp post, and her friend Mayar laughed and said: one day that phone will take you somewhere you don\'t know.',
            'Salma did not see a problem. She hurt no one, her grades were good, and all her friends did the same. But sometimes, at the end of the day, she felt something strange: a deep tiredness, though she had done nothing tiring. And sometimes she forgot what she had read in the morning before evening came.',
            'One night, after a long hour of clips, she switched off the screen and looked at the dark ceiling. She tried to remember what she had seen in that hour and could not recall a single thing. It felt as if the hour had been stolen from her without her noticing, and she asked herself: where was I? She found no answer, so she switched the screen back on to escape the question, and fell asleep with the blue light on her face.'
          ] },
        quiz: Q('zombie-2', 1, [
          { correct: 1, q: { ar: 'ماذا كانت سلمى تفعل أول ما تستيقظ؟', en: 'What did Salma do as soon as she woke up?' },
            options: [{ ar: 'تسلم على أمها', en: 'Greet her mother' }, { ar: 'تمد يدها إلى الهاتف', en: 'Reach for her phone' }, { ar: 'ترتب سريرها', en: 'Make her bed' }],
            why: { ar: 'كان الهاتف أول ما تراه وآخر ما تراه.', en: 'The phone was the first and last thing she saw.' } },
          { correct: 2, q: { ar: 'ماذا فعلت سلمى حين لم تتذكر شيئًا مما رأته في تلك الساعة؟', en: 'What did Salma do when she could not remember anything she had seen in that hour?' },
            options: [{ ar: 'أخبرت أمها بما شعرت به', en: 'Told her mother how she felt' }, { ar: 'وضعت الهاتف خارج غرفتها', en: 'Put the phone outside her room' }, { ar: 'أعادت تشغيل الشاشة لتهرب من السؤال', en: 'Switched the screen back on to escape the question' }],
            why: { ar: 'السؤال «أين كنت؟» كان صعبًا، فهربت منه إلى الشاشة نفسها.', en: 'The question "where was I?" was hard, so she ran from it into the screen itself.' } }
        ]) },
      { title: { ar: 'ست ساعات في دقيقة', en: 'Six hours in a minute' },
        body: {
          ar: [
            'في المدرسة طلبت المعلمة من التلاميذ أن يفتحوا في هواتفهم صفحة «وقت الشاشة»، وأن يكتبوا الرقم دون أن يخبروا أحدًا. فتحت سلمى الصفحة وهي مطمئنة، ثم سكتت. كان الرقم ست ساعات وعشرين دقيقة في اليوم. وظنت أولًا أن الهاتف أخطأ في الحساب.',
            'قالت المعلمة: لنحسب معًا. ست ساعات كل يوم، في أسبوع واحد، كم تصير؟ وكتبت على السبورة: اثنتان وأربعون ساعة. ثم قالت: هذا يقارب يومين كاملين من أسبوعكم، بلياليهما ونهارهما. ماذا كنتم تفعلون لو أُعطيتم يومين إضافيين؟',
            'رفع أحد الأولاد يده وقال: أتعلم ركوب الخيل! وقالت ميار: أزور جدتي في القرية. وقال آخر: أنام! فضحك الجميع. أما سلمى فلم تقل شيئًا، لأنها كانت تفكر في الرسمة التي لم ترها، وفي أمها التي تسأل كل صباح ولا تسمع جوابًا.',
            'وقالت المعلمة في آخر الدرس: في الهاتف نتعلم ونتواصل ونقرأ، وهو نافع لمن يمسكه وهو يعرف لماذا. والسؤال الذي أريدكم أن تأخذوه إلى البيت: في هذه الساعات كلها، أين كنتم أنتم؟ فبعض الساعات نحياها، وبعضها تمر بنا ونحن غائبون.',
            'في البيت جلست سلمى على السرير وفتحت الصفحة مرة أخرى. نظرت إلى الأعمدة الزرقاء الطويلة، يومًا بعد يوم، فبدت لها هذه المرة قطعًا من أيامها، ذهبت ولن تعود. وتذكرت جملة كانت جدتها تكررها: الوقت هو العمر. ثم قامت إلى غرفة أخيها لتسأله عن الرسمة، فوجدته نائمًا والقلم في يده. وقفت عند الباب قليلًا، ثم أطفأت النور وخرجت بهدوء.'
          ],
          en: [
            'At school, the teacher asked the pupils to open the "screen time" page on their phones and write down the number without telling anyone. Salma opened the page calmly, then fell silent. The number was six hours and twenty minutes a day. At first she thought the phone had counted wrong.',
            'The teacher said: let\'s work it out together. Six hours a day, in one week, how much is that? She wrote on the board: forty-two hours. Then she said: that is nearly two whole days of your week, nights and days. What would you do if you were given two extra days?',
            'One boy raised his hand and said: learn to ride a horse! Mayar said: visit my grandmother in the village. Another said: sleep! and everyone laughed. Salma said nothing, because she was thinking of the drawing she had not looked at, and of her mother who asked every morning and heard no answer.',
            'At the end of the lesson the teacher said: on the phone we learn, keep in touch and read, and it serves whoever picks it up knowing why. The question I want you to take home is this: in all those hours, where were you? Some hours we live, and some pass us by while we are somewhere else.',
            'At home Salma sat on her bed and opened the page again. She looked at the tall blue bars, day after day, and this time they looked like pieces of her days, gone and never coming back. She remembered something her grandmother used to say: time is your life. Then she got up and went to her brother\'s room to ask about the drawing, and found him asleep with a pencil still in his hand. She stood in the doorway for a while, then switched off the light and slipped out.'
          ] },
        quiz: Q('zombie-2', 2, [
          { correct: 0, q: { ar: 'كم ساعة تقريبًا كانت سلمى تقضي على الشاشة في الأسبوع؟', en: 'About how many hours a week did Salma spend on the screen?' },
            options: [{ ar: 'نحو اثنتين وأربعين ساعة', en: 'About forty-two hours' }, { ar: 'ست ساعات وعشرين دقيقة', en: 'Six hours and twenty minutes' }, { ar: 'نحو عشرين ساعة', en: 'About twenty hours' }],
            why: { ar: 'ست ساعات وعشرون دقيقة كانت رقم اليوم الواحد، وفي الأسبوع تقارب يومين كاملين.', en: 'Six hours twenty was the figure for one day; over a week it comes close to two whole days.' } },
          { correct: 2, q: { ar: 'ما السؤال الذي أرادت المعلمة أن يأخذه التلاميذ إلى البيت؟', en: 'What question did the teacher want the pupils to take home?' },
            options: [{ ar: 'كم ساعة قضيتم على الهاتف؟', en: 'How many hours did you spend on the phone?' }, { ar: 'ماذا شاهدتم في هذه الساعات؟', en: 'What did you watch in those hours?' }, { ar: 'في هذه الساعات كلها، أين كنتم أنتم؟', en: 'In all those hours, where were you?' }],
            why: { ar: 'الرقم يُحسب في دقيقة، والسؤال عن حضور القلب يبقى بعده.', en: 'The number takes a minute to work out; the question about the heart\'s presence stays after it.' } }
        ]) },
      { title: { ar: 'يوم بلا شحن', en: 'A day without charge' },
        body: {
          ar: [
            'في عطلة نهاية الأسبوع ذهبت العائلة إلى مزرعة الجد في الريف. وفي الطريق اكتشفت سلمى أنها نسيت الشاحن في البيت، وأن البطارية لم يبق فيها إلا القليل. وقبل الظهر انطفأت الشاشة تمامًا، فشعرت كأن يدها صارت فارغة.',
            'في الساعة الأولى كانت تتنقل من غرفة إلى غرفة، وتمد يدها إلى جيبها كل دقائق، ثم تتذكر أن الهاتف ميت. قالت لأمها: أنا أشعر بالملل، ماذا أفعل؟ فابتسمت أمها وقالت: اذهبي إلى جدك، إنه في البستان. وقالت سلمى في نفسها: ماذا يفعل جدي في البستان طوال اليوم بلا هاتف؟',
            'وجدت جدها يسقي أشجار الزيتون. أعطاها دلوًا صغيرًا، وأخذ يحكي لها عن كل شجرة: هذه زرعها أبوه قبل ستين سنة، وهذه أصابها البرد فظنوا أنها ماتت، ثم أخرجت أوراقًا جديدة في الربيع. وسلمى تسمع، وتنظر، وتلمس اللحاء الخشن بيدها.',
            'وفي العصر جلست مع أخيها الصغير تحت شجرة كبيرة، فأخرج من جيبه الرسمة المطوية وقال: هذه لكِ، رسمتها منذ أسبوع. كانت الرسمة لسلمى وهي تضحك، وفوقها شمس كبيرة. نظرت سلمى إليها طويلًا، ثم ضمته وقالت: آسفة، كان يجب أن أراها من قبل.',
            'وفي الليل نظرت إلى السماء، فرأت نجومًا كثيرة لم ترها في المدينة. قالت: يا جدي، أشعر اليوم أنني كنت هنا حقًّا، كل دقيقة كانت لي. فأشار الجد إلى فوق وقال: وهذه النجوم فوق المدينة أيضًا كل ليلة، تخفيها الأضواء قليلًا، ويفوتنا أكثرها لأننا لا نرفع رؤوسنا. وتذكرت سلمى رأسها المنحني في طريق المدرسة، فضحكت، وبقيت تنظر إلى فوق حتى نعست.'
          ],
          en: [
            'At the weekend the family went to Grandfather\'s farm in the countryside. On the way Salma found she had left her charger at home, and the battery had little left. Before noon the screen went dark completely, and her hand felt empty.',
            'In the first hour she wandered from room to room, reaching into her pocket every few minutes, then remembering the phone was dead. She told her mother: I\'m bored, what do I do? Her mother smiled and said: go to your grandfather, he\'s in the orchard. Salma thought: what does Grandpa do in the orchard all day without a phone?',
            'She found him watering the olive trees. He handed her a small bucket and began telling her about each tree: this one his father planted sixty years ago; this one the frost struck and they thought it was dead, then it put out new leaves in spring. Salma listened, looked, and touched the rough bark with her hand.',
            'In the afternoon she sat with her little brother under a big tree. He took the folded drawing from his pocket and said: this is for you, I made it a week ago. It showed Salma laughing, with a big sun above her. Salma looked at it for a long time, then hugged him and said: I\'m sorry, I should have looked at it before.',
            'At night she looked up and saw more stars than she had ever seen in the city. She said: Grandpa, today I feel I was really here. Every minute was mine. Her grandfather pointed up and said: these stars are over the city too, every night. The lights hide them a little, and we miss most of them because we never lift our heads. Salma remembered her bent head on the way to school and laughed, and kept looking up until she grew sleepy.'
          ] },
        quiz: Q('zombie-2', 3, [
          { correct: 1, q: { ar: 'ماذا أعطى الأخ الصغير سلمى تحت الشجرة؟', en: 'What did her little brother give Salma under the tree?' },
            options: [{ ar: 'شاحنًا', en: 'A charger' }, { ar: 'الرسمة التي رسمها لها', en: 'The drawing he had made for her' }, { ar: 'حبة زيتون', en: 'An olive' }],
            why: { ar: 'رأت أخيرًا ما فاتها حين كانت غائبة.', en: 'She finally saw what she had missed while absent.' } },
          { correct: 0, q: { ar: 'ما الذي أوصل سلمى إلى جدها في البستان؟', en: 'What brought Salma to her grandfather in the orchard?' },
            options: [{ ar: 'انطفأ هاتفها فشعرت بالملل، فأرسلتها أمها إليه', en: 'Her phone died, she was bored, and her mother sent her to him' }, { ar: 'طلب منها أبوها أن تساعده في السقي', en: 'Her father asked her to help with the watering' }, { ar: 'أرادت أن تصوّر أشجار الزيتون', en: 'She wanted to take photos of the olive trees' }],
            why: { ar: 'شاحن منسي فتح لها يومًا كاملًا كانت فيه حاضرة بقلبها.', en: 'A forgotten charger opened a whole day in which her heart was present.' } }
        ]) },
      { title: { ar: 'بابان', en: 'Two doors' },
        body: {
          ar: [
            'في الصباح الأخير في المزرعة، جلست سلمى مع جدها بعد صلاة الفجر. وكان الجد يحرك شفتيه بهدوء وهو ينظر إلى الأشجار. فسألته: ماذا تقول يا جدي؟ قال: أذكر الله. كل صباح أشكره على أنني ما زلت أرى هذه الأشجار.',
            'ثم قال: قال النبي صلى الله عليه وآله وسلم: «نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالْفَرَاغُ». سألت سلمى: وما المغبون يا جدي؟ قال: الذي يبيع شيئًا ثمينًا بثمن قليل، كمن يعطي قطعة ذهب ليأخذ حبة حلوى. والفراغ وقتك الحر، حين لا يطلب منك أحد شيئًا.',
            'سكتت سلمى، ثم قالت: الساعات الست كانت من وقتي الحر. يعني الهاتف هو السبب؟ قال الجد: الهاتف أداة، كالسكين: تقطعين بها الخبز، أو تجرحين بها يدك. والسؤال: من يمسك الآخر؟ أنتِ تمسكين الهاتف، أم هو يمسكك؟ والقلب بيت، إن ملأه شيء واحد ضاق على الله وعلى من نحب.',
            'وعلّمها جدها شيئًا صغيرًا: أن تقول «بسم الله» قبل أن تفتح الهاتف، و«الحمد لله» حين تغلقه. قال: هاتان الكلمتان مثل بابين. تدخلين بالأولى وأنت تعرفين لماذا دخلت، وتخرجين بالثانية وأنت شاكرة. ومن دخل بذكر الله وخرج بذكره عرف طريقه في الذهاب والرجوع.',
            'وفي السيارة، وهم عائدون، وضعت سلمى قواعد صغيرة لنفسها: لا هاتف قبل أن تسلم على أمها في الصباح، ولا هاتف على مائدة الطعام، والهاتف ينام خارج غرفتها في الليل. وكتبتها على ورقة، ورسمت تحتها شجرة زيتون صغيرة. وعلّقتها على باب غرفتها حتى تراها كل يوم.'
          ],
          en: [
            'On the last morning at the farm, Salma sat with her grandfather after the dawn prayer. He was moving his lips quietly as he looked at the trees. She asked: what are you saying, Grandpa? He said: I am remembering Allah. Every morning I thank Him that I can still see these trees.',
            'Then he said: the Prophet, peace and blessings be upon him and his family, said, meaning: "There are two blessings in which many people are cheated: health and free time." Salma asked: what does cheated mean here, Grandpa? He said: it is someone who sells something precious for almost nothing, like handing over a gold coin to get one sweet. And free time is your own time, when nobody is asking anything of you.',
            'Salma was quiet, then said: those six hours came out of my free time. So the phone is the reason? Her grandfather said: the phone is a tool, like a knife: you can cut bread with it, or cut your hand. The real question is who is holding whom. Are you holding the phone, or is it holding you? The heart is a house; if one thing fills it, there is little room left for Allah and for the people we love.',
            'He taught her something small: to say "Bismillah" before opening the phone and "Alhamdulillah" when closing it. He said: these two words are like two doors. You go in through the first knowing why you came, and out through the second giving thanks. Whoever goes in and comes out remembering Allah knows the way there and the way back.',
            'In the car on the way home, Salma made herself small rules: no phone before greeting her mother in the morning, no phone at the table, and the phone sleeps outside her room at night. She wrote them on a sheet and drew a small olive tree underneath. She hung it on her bedroom door so she would see it every day.'
          ] },
        quiz: Q('zombie-2', 4, [
          { correct: 1, q: { ar: 'ما النعمتان اللتان ذكرهما الحديث الذي رواه الجد؟', en: 'Which two blessings are named in the hadith Grandfather told?' },
            options: [{ ar: 'المال والبيت', en: 'Wealth and a home' }, { ar: 'الصحة والفراغ', en: 'Health and free time' }, { ar: 'العلم والصبر', en: 'Knowledge and patience' }],
            why: { ar: 'كثير من الناس يبيعون فراغهم بثمن قليل، وساعات سلمى الست كانت من فراغها.', en: 'Many people sell their free time for very little, and Salma\'s six hours came out of hers.' } },
          { correct: 0, q: { ar: 'ما الكلمتان اللتان علّمهما الجد لسلمى؟', en: 'What two words did Grandfather teach Salma?' },
            options: [{ ar: 'بسم الله قبل الفتح، والحمد لله عند الإغلاق', en: 'Bismillah before opening, Alhamdulillah when closing' }, { ar: 'سبحان الله قبل الفتح، وأستغفر الله عند الإغلاق', en: 'Subhan Allah before opening, Astaghfirullah when closing' }, { ar: 'الحمد لله قبل الفتح، وبسم الله عند الإغلاق', en: 'Alhamdulillah before opening, Bismillah when closing' }],
            why: { ar: 'بالأولى تدخل وهي تعرف لماذا دخلت، وبالثانية تخرج شاكرة.', en: 'With the first she goes in knowing why; with the second she comes out giving thanks.' } }
        ]) },
      { title: { ar: 'إعلان الهاتف الجديد', en: 'The new phone advert' },
        body: {
          ar: [
            'في الأسبوع التالي، كانت سلمى تسلم على أمها كل صباح قبل أن تلمس الهاتف. وصارت أمها تحكي لها أشياء صغيرة عن يومها، وصار أخوها يجلس بجانبها على الفطور. وكانت سلمى تتعجب: كيف لم أرَ هذا كله من قبل؟ ما زالت تستعمل الهاتف، لكنها صارت تعرف متى تفتحه ولماذا، ومتى تغلقه.',
            'وفي المدرسة لاحظت أشياء جديدة. رأت أن معلمة الرياضيات تبدو متعبة، وأن بنتًا جديدة في الصف تجلس وحدها في الاستراحة. فذهبت إليها وجلست بجانبها، وعرفت أن اسمها رغد، وأنها تحب الرسم مثل أخيها الصغير.',
            'ثم حدث شيء آخر. جاءت ميار إلى المدرسة بهاتف جديد لامع، كبير الشاشة، بثلاث كاميرات. والتف حولها البنات يلمسنه ويصرخن من الإعجاب. وفي البيت ظهر على الشاشة إعلان الهاتف نفسه، مرة بعد مرة. وكان الإعلان يقول: كن مختلفًا، كن أول من يملكه، وفيه شباب يضحكون وكأن الهاتف هو سبب سعادتهم.',
            'وشعرت سلمى بشيء جديد في صدرها هذه المرة: رغبة قوية. أرادت ذلك الهاتف. هاتفها يعمل جيدًا ولا ينقصه شيء، لكنها أرادت ذلك الهاتف بعينه، وأرادته الآن. وقالت لأمها على العشاء: الكل عنده هاتف جديد إلا أنا! ثم سكتت، وشعرت أن صوتها كان أعلى مما أرادت.',
            'نظرت أمها إليها طويلًا، ثم قالت بهدوء: أسمعكِ. اكتبيه على ورقتك، ونتكلم فيه بعد أسبوع. وفي الليل وقفت سلمى أمام الورقة المعلقة على بابها، وكتبت تحت شجرة الزيتون الصغيرة بخط صغير: «هاتف مثل هاتف ميار؟». ثم بقيت مستيقظة وقتًا طويلًا. كان الهاتف نائمًا خارج الغرفة كما وعدت، والذي أسهرها رغبة في صدرها، صارت تراها بوضوح، ولا تعرف بعد ماذا تفعل بها.'
          ],
          en: [
            'The next week, Salma greeted her mother every morning before touching the phone. Her mother began telling her small things about her day, and her brother started sitting beside her at breakfast. Salma wondered: how did I not see all this before? She still used the phone, but now she knew when she opened it and why, and when to close it.',
            'At school she noticed new things. She saw that the maths teacher looked tired, and that a new girl in class sat alone at break. She went and sat beside her, and found out that her name was Raghad and that she loved drawing, just like Salma\'s little brother.',
            'Then something else happened. Mayar came to school with a shiny new phone with a big screen and three cameras. The girls gathered round, touching it and squealing. At home the same phone\'s advert appeared on the screen again and again. The advert said: be different, be the first to own it, with young people laughing as if the phone were the reason for their happiness.',
            'This time Salma felt something new in her chest: a strong wanting. She wanted that phone. Her own worked perfectly well and lacked nothing, but she wanted that one, and she wanted it now. At dinner she told her mother: everyone has a new phone except me! Then she fell silent, feeling her voice had come out louder than she meant.',
            'Her mother looked at her for a long time, then said quietly: I hear you. Write it on your sheet, and we\'ll talk about it in a week. That night Salma stood in front of the sheet on her door and wrote in small letters under the little olive tree: "A phone like Mayar\'s?" Then she lay awake for a long time. The phone was sleeping outside her room, as she had promised. What kept her awake was the wanting in her chest. She could see it clearly now, and did not yet know what to do with it.'
          ] },
        quiz: Q('zombie-2', 5, [
          { correct: 1, q: { ar: 'ماذا رأت سلمى في المدرسة بعد أن استيقظ قلبها؟', en: 'What did Salma notice at school after her heart woke up?' },
            options: [{ ar: 'أن ميار غاضبة منها', en: 'That Mayar was angry with her' }, { ar: 'معلمة متعبة وبنتًا جديدة تجلس وحدها', en: 'A tired teacher and a new girl sitting alone' }, { ar: 'أن صديقاتها تركن هواتفهن في البيت', en: 'That her friends had left their phones at home' }],
            why: { ar: 'العينان المستيقظتان ترَيان الناس.', en: 'Waking eyes see people.' } },
          { correct: 2, q: { ar: 'ما الذي أسهر سلمى في آخر الكتاب؟', en: 'What kept Salma awake at the end of the book?' },
            options: [{ ar: 'هاتفها، لأنها أخذته إلى غرفتها من جديد', en: 'Her phone, because she had taken it back into her room' }, { ar: 'غضبها من أمها', en: 'Her anger with her mother' }, { ar: 'رغبة قوية في هاتف جديد، وهاتفها يعمل جيدًا', en: 'A strong wish for a new phone, though her own worked well' }],
            why: { ar: 'من استيقظ رأى رغباته بوضوح، وماذا يفعل بها هو باب البنصر.', en: 'Whoever wakes sees their wants clearly; what to do with them is the door to the ring finger.' } }
        ]) }
    ]
  });
})();


(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-pig-2', stage: 'pig', ages: '9-14',
    title: { ar: 'عمّار والجواهر الزرقاء', en: 'Ammar and the blue gems' },
    chapters: [
      { title: { ar: 'مملكة التنانين', en: 'The dragon kingdom' },
        body: {
          ar: [
            'كان عمّار في الحادية عشرة، وكان يحب لعبة على الجهاز اللوحي اسمها «مملكة التنانين». يبني فيها قلعة، ويربي تنانين صغيرة، ويقاتل بها لاعبين من بلاد بعيدة. وكان يلعبها كل يوم بعد أن ينهي واجباته، كما اتفق مع أبيه. وكان يحب صوت التنانين حين تطير، ويحب أن يرى قلعته تكبر حجرًا بعد حجر، ويحكي لأخته الصغيرة عن كل تنين باسمه.',
            'وفي اللعبة شيء اسمه الجواهر الزرقاء. بالجواهر تكبر التنانين بسرعة، وتُفتح صناديق فيها سيوف ودروع لامعة. ويمكن أن يجمع اللاعب الجواهر ببطء بعد كل معركة، أو يشتريها بالمال الحقيقي في ثوانٍ.',
            'وكان ابن خاله حسام قد اشترى جواهر كثيرة، فصار تنينه أكبر تنين في الصف كله. وكان يريه لعمّار كل يوم في الاستراحة، ويقول: تنينك صغير مسكين، لن يصل إلى المستوى العاشر قبل سنة!',
            'فصار عمّار يفكر في الجواهر في كل مكان: في الصف، وعلى الغداء، وقبل النوم. وكلما جمع جوهرة في اللعبة شعر أنها قليلة، وأراد عشرًا. وكلما فتح صندوقًا أراد صندوقًا آخر أكبر منه. واللعبة تعرض عليه كل دقيقة: عرض خاص لك اليوم فقط!',
            'وفي إحدى الليالي، رأى أن أمه نسيت الجهاز اللوحي مفتوحًا على صفحة المتجر، وبطاقتها محفوظة فيه. وظهر على الشاشة زر أخضر كبير: اشترِ ألف جوهرة الآن. فتوقف إصبع عمّار فوق الزر، وقلبه يدق بسرعة. وكان يعرف أن هذا ليس ماله، وأن أمه لم تأذن له. لكن الصوت في داخله كان أعلى من كل شيء.'
          ],
          en: [
            'Ammar was eleven and loved a tablet game called "Dragon Kingdom". In it he built a castle, raised little dragons, and fought players from faraway countries. He played every day after finishing his homework, as agreed with his father. He loved the sound of the dragons flying, loved watching his castle grow stone by stone, and told his little sister about each dragon by name.',
            'The game had something called blue gems. With gems the dragons grew fast, and chests opened with shining swords and shields. A player could collect gems slowly after each battle, or buy them with real money in seconds.',
            'His cousin Husam had bought lots of gems, and his dragon became the biggest in the whole class. He showed it to Ammar every day at break and said: your dragon is a poor little thing; it won\'t reach level ten for a year!',
            'So Ammar began thinking about gems everywhere: in class, at lunch, before sleep. Every gem he earned felt too few, and he wanted ten. Every chest he opened made him want a bigger one. And every minute the game offered him: a special deal, today only!',
            'One night he saw that his mother had left the tablet open on the shop page, with her card saved in it. A big green button appeared on the screen: buy a thousand gems now. Ammar\'s finger stopped above the button, his heart beating fast. He knew it was not his money and that his mother had not allowed it. But the voice inside him was louder than everything.'
          ] },
        quiz: Q('pig-2', 1, [
          { correct: 0, q: { ar: 'كيف يحصل اللاعب على الجواهر الزرقاء؟', en: 'How does a player get blue gems?' },
            options: [{ ar: 'يجمعها ببطء أو يشتريها بالمال الحقيقي', en: 'Collects them slowly or buys them with real money' }, { ar: 'يجدها في الشارع', en: 'Finds them in the street' }, { ar: 'يعطيها المعلم', en: 'The teacher gives them out' }],
            why: { ar: 'اللعبة تعرض الطريق السريع بالمال كل دقيقة.', en: 'The game offers the quick, paid way every minute.' } },
          { correct: 2, q: { ar: 'ماذا كان يحدث كلما جمع عمّار جوهرة؟', en: 'What happened each time Ammar earned a gem?' },
            options: [{ ar: 'يشعر بالشبع ويتوقف', en: 'He felt satisfied and stopped' }, { ar: 'يعطيها لحسام', en: 'He gave it to Husam' }, { ar: 'يشعر أنها قليلة ويريد أكثر', en: 'He felt it was too few and wanted more' }],
            why: { ar: 'هذه علامة البنصر: كلما أخذ أراد أكثر.', en: 'That is the ring-finger sign: the more one takes, the more one wants.' } }
        ]) },
      { title: { ar: 'الزر الأخضر', en: 'The green button' },
        body: {
          ar: [
            'قال عمّار في نفسه: أمي لن تنتبه، إنها جوهرة صغيرة من مال كثير. ثم ضغط الزر. ظهرت على الشاشة نجوم ذهبية وصوت فرح، وامتلأ صندوقه بألف جوهرة زرقاء. وفي دقائق صار تنينه أكبر من تنين حسام.',
            'وفي الغد ذهب إلى المدرسة وهو يمشي كالملك، وأرى حسام التنين الجديد. فاندهش حسام وقال: كيف فعلت هذا في ليلة واحدة؟ فقال عمّار: سر! وشعر بفرح كبير. لكن الفرح لم يدم أكثر من ساعة. أما حسام فنظر إليه نظرة غريبة، كأنه يعرف أن في الأمر شيئًا لا يُقال.',
            'ففي الاستراحة الثانية جاء ولد آخر بتنين أكبر من تنينه، اشتراه أبوه له في العيد. فشعر عمّار أن تنينه صار صغيرًا من جديد. وعاد الصوت في داخله يقول: تحتاج المزيد، ألف جوهرة أخرى فقط.',
            'وحين أطفأت أمه النور ضغط الزر مرة ثانية، ثم ثالثة. وكان في كل مرة يقول لنفسه: هذه آخر مرة. لكنه لم يكن يشبع. وكان صدره يضيق كلما سمع خطوات أمه في الممر، فيغلق الجهاز بسرعة ويتظاهر بالنوم. وفي الصباح لا يستطيع أن ينظر في عيني أمه.',
            'وصار لا يحب اللعبة كما كان يحبها. فقد صار يلعب وعينه على الجواهر لا على المعركة، وصار يخاف من اللعبة بدل أن يفرح بها. وكان يسأل نفسه: لماذا لست سعيدًا وعندي كل هذا؟ ولم يجد جوابًا، فكان يغلق الجهاز ويبقى ينظر إلى السقف، والجواهر تلمع في رأسه حتى يغلبه النوم.'
          ],
          en: [
            'Ammar told himself: Mum won\'t notice; it\'s a small amount out of a lot of money. Then he pressed the button. Golden stars and a happy sound appeared, and his chest filled with a thousand blue gems. Within minutes his dragon was bigger than Husam\'s.',
            'In the morning he walked to school like a king and showed Husam the new dragon. Husam was amazed and said: how did you do that in one night? Ammar said: a secret! and felt very happy. But the happiness lasted no more than an hour. Husam looked at him strangely, as if he knew there was something that could not be said.',
            'At the second break another boy came with a dragon bigger than his, which his father had bought him for Eid. Ammar felt his dragon was small again. The voice inside him returned: you need more, just another thousand gems.',
            'That night he pressed the button a second time, then a third. Each time he told himself: this is the last time. But he was never satisfied. His chest tightened whenever he heard his mother\'s footsteps in the hallway, and he shut the tablet quickly and pretended to sleep. In the morning he could not look his mother in the eye.',
            'He no longer loved the game as before. He played with his eyes on the gems, not the battle, and was afraid of the game instead of enjoying it. He asked himself: why am I not happy when I have all this? He found no answer, so he would close the tablet and stare at the ceiling, the gems glittering in his head until sleep took him.'
          ] },
        quiz: Q('pig-2', 2, [
          { correct: 1, q: { ar: 'كم دام فرح عمّار بالتنين الكبير؟', en: 'How long did Ammar\'s joy in the big dragon last?' },
            options: [{ ar: 'سنة كاملة', en: 'A whole year' }, { ar: 'ساعة واحدة تقريبًا', en: 'About an hour' }, { ar: 'إلى الأبد', en: 'Forever' }],
            why: { ar: 'فرح الأخذ قصير، ثم تطلب النفس المزيد.', en: 'The joy of taking is short, then the soul asks for more.' } },
          { correct: 0, q: { ar: 'لماذا كان صدر عمّار يضيق حين يسمع خطوات أمه؟', en: 'Why did Ammar\'s chest tighten when he heard his mother\'s footsteps?' },
            options: [{ ar: 'لأنه كان يخفي ما فعله', en: 'Because he was hiding what he had done' }, { ar: 'لأنه كان مريضًا', en: 'Because he was ill' }, { ar: 'لأنه خاف من التنين', en: 'Because he feared the dragon' }],
            why: { ar: 'ما يُخفى عن الأهل يثقل القلب.', en: 'What is hidden from one\'s family weighs on the heart.' } }
        ]) },
      { title: { ar: 'رسالة البنك', en: 'The bank message' },
        body: {
          ar: [
            'بعد أسبوع جلست الأم على الأريكة تنظر إلى هاتفها، ووجهها يتغير. ثم نادت بصوت هادئ: يا عمّار، تعال لحظة. فجاء عمّار وقدماه ثقيلتان. ورأى على شاشتها رسالة من البنك: ثلاث عمليات شراء من متجر الألعاب.',
            'سألته أمه: هل تعرف شيئًا عن هذه؟ فكّر عمّار أن يقول: لا، ربما أخطأ البنك. وكانت الكذبة جاهزة على لسانه. لكنه نظر إلى عيني أمه، فرأى فيهما حزنًا لا غضبًا، فلم يستطع. فالكذبة كانت ستنقذه دقيقة، ثم تبقى في صدره سنة.',
            'قال بصوت منخفض: أنا اشتريتها يا أمي. كنت أريد تنينًا أكبر من تنين حسام. ثم بدأ يبكي، وقال: كل مرة قلت هذه آخر مرة، ولم تكن آخر مرة. لا أعرف لماذا لم أستطع أن أتوقف.',
            'سكتت الأم قليلًا، ثم جلست بجانبه وقالت: شكرًا لأنك صدقت. هذا أصعب من الشراء نفسه. ثم قالت: المال الذي أخذته كان مال البيت، وكنا سنشتري به أشياء نحتاجها. فماذا نفعل الآن؟ فالخطأ لا يُصلح بالبكاء وحده، بل بعمل.',
            'اتفقا معًا على أن يرد عمّار جزءًا من المال من مصروفه في الأشهر القادمة، وأن تُحذف البطاقة من الجهاز، وأن يتكلم مع أبيه في المساء. وشعر عمّار بشيء غريب: كان حزينًا، لكن صدره صار أخف مما كان منذ أسبوع. وفي تلك الليلة نام نومًا هادئًا، بلا خوف من خطوات في الممر، ولا جهاز يخفيه تحت الوسادة.'
          ],
          en: [
            'A week later his mother sat on the sofa looking at her phone, her face changing. Then she called in a quiet voice: Ammar, come here a moment. Ammar came on heavy feet. On her screen he saw a message from the bank: three purchases from the games shop.',
            'His mother asked: do you know anything about these? Ammar thought of saying: no, maybe the bank made a mistake. The lie was ready on his tongue. But he looked into his mother\'s eyes and saw sadness there, not anger, and he could not. The lie would have saved him for a minute, then stayed in his chest for a year.',
            'He said quietly: I bought them, Mum. I wanted a dragon bigger than Husam\'s. Then he began to cry and said: every time I said this is the last time, and it wasn\'t. I don\'t know why I couldn\'t stop.',
            'His mother was silent a moment, then sat beside him and said: thank you for telling the truth. That is harder than the buying itself. Then she said: the money you took was the household\'s money; we were going to buy things we need with it. So what do we do now? A mistake is not mended by tears alone, but by action.',
            'Together they agreed that Ammar would pay back part of the money from his pocket money in the coming months, that the card would be removed from the tablet, and that he would talk to his father that evening. Ammar felt something strange: he was sad, yet his chest felt lighter than it had for a week. That night he slept peacefully, with no fear of footsteps in the hallway and no tablet hidden under his pillow.'
          ] },
        quiz: Q('pig-2', 3, [
          { correct: 2, q: { ar: 'لماذا لم يكذب عمّار على أمه؟', en: 'Why did Ammar not lie to his mother?' },
            options: [{ ar: 'لأنه نسي الكذبة', en: 'He forgot the lie' }, { ar: 'لأن أباه كان حاضرًا', en: 'His father was there' }, { ar: 'لأنه رأى في عينيها حزنًا لا غضبًا', en: 'He saw sadness, not anger, in her eyes' }],
            why: { ar: 'الهدوء يفتح باب الصدق.', en: 'Calm opens the door to honesty.' } },
          { correct: 0, q: { ar: 'ماذا اتفق عمّار وأمه أن يفعلا؟', en: 'What did Ammar and his mother agree to do?' },
            options: [{ ar: 'يرد جزءًا من المال من مصروفه وتُحذف البطاقة', en: 'He repays part from his pocket money and the card is removed' }, { ar: 'يشتري ألف جوهرة أخرى', en: 'Buy another thousand gems' }, { ar: 'ينسيان الأمر', en: 'Forget about it' }],
            why: { ar: 'إصلاح الخطأ جزء من التوبة منه.', en: 'Repairing a wrong is part of turning back from it.' } }
        ]) },
      { title: { ar: 'من يقود من؟', en: 'Who leads whom?' },
        body: {
          ar: [
            'حين هدأ البيت جلس الأب مع عمّار في الشرفة. لم يصرخ ولم يعاقبه عقابًا كبيرًا، بل سأله: حين كنت تضغط الزر، من الذي كان يقرر؟ أنت أم الرغبة؟ ففكر عمّار طويلًا، ثم قال: الرغبة يا أبي. كنت أشعر أنها تجرّني. كأن في يدي حبلًا مربوطًا بها، وهي تمشي وأنا أتبعها.',
            'قال الأب: هذه هي النفس حين تطلب. وقد وعد الله من يقف أمامها وعدًا عظيمًا، فقال: ﴿وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ ۝ فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ﴾. والآية لا تقول: من لم تكن له رغبة، بل: من نهى نفسه عنها.',
            'ثم قال الأب: الألعاب تُصنع أحيانًا لتجعلك لا تشبع. العروض الخاصة، والصناديق المفاجئة، والعدّ التنازلي، كلها تقول لك: الآن، الآن، وإلا فاتك كل شيء. فإذا عرفت الحيلة، صار أسهل أن تقول: لا، شكرًا. وأنت لست ضعيفًا لأنك وقعت في الحيلة، فالكبار يقعون فيها أيضًا، لكن القوي من يتعلم منها.',
            'واتفقا على قاعدة جديدة: قبل أي شراء، ولو كان صغيرًا، ينتظر عمّار يومًا كاملًا، ثم يسأل أباه. وقال الأب ضاحكًا: ستتعجب كم رغبة تموت وحدها في يوم واحد!',
            'وجرّب عمّار القاعدة في الأسبوع التالي. ظهر عرض للجواهر، فكتبه في ورقة وانتظر. وفي اليوم التالي نظر إلى الورقة فلم يجد في نفسه شيئًا. فضحك وقال: صدقتَ يا أبي، ماتت الرغبة! ثم مزّق الورقة، وذهب يلعب مع أخته في الحديقة.'
          ],
          en: [
            'In the evening his father sat with Ammar on the balcony. He did not shout or give a big punishment. He asked: when you pressed the button, who was deciding, you or the wanting? Ammar thought for a long time, then said: the wanting, Dad. I felt it pulling me. As if a rope tied to it was in my hand, and it walked while I followed.',
            'His father said: that is the soul when it demands. And Allah made a great promise to whoever stands firm before it. Meaning (not a translation): as for one who feared standing before his Lord and restrained the soul from whim, Paradise will be the refuge. The verse does not say: whoever had no wants, but: whoever restrained the soul from them.',
            'Then his father said: games are sometimes made to keep you from feeling satisfied. Special offers, surprise chests, countdowns: they all tell you now, now, or you\'ll miss everything. Once you know the trick, it gets easier to say: no, thank you. You are not weak for falling for the trick; adults fall for it too. The strong one is whoever learns from it.',
            'They agreed on a new rule: before any purchase, however small, Ammar waits a full day, then asks his father. His father laughed and said: you\'ll be amazed how many wants die on their own in a single day!',
            'Ammar tried the rule the next week. An offer for gems appeared, so he wrote it on a slip of paper and waited. The next day he looked at the paper and felt nothing for it. He laughed and said: you were right, Dad, the want died! Then he tore up the paper and went to play with his sister in the garden.'
          ] },
        quiz: Q('pig-2', 4, [
          { correct: 1, q: { ar: 'ما القاعدة الجديدة التي اتفق عليها عمّار وأبوه؟', en: 'What new rule did Ammar and his father agree on?' },
            options: [{ ar: 'يشتري متى شاء', en: 'Buy whenever he likes' }, { ar: 'ينتظر يومًا كاملًا قبل أي شراء ثم يسأل أباه', en: 'Wait a full day before any purchase, then ask his father' }, { ar: 'لا يلعب أبدًا', en: 'Never play again' }],
            why: { ar: 'الانتظار يعطي العقل وقتًا ليلحق بالرغبة.', en: 'Waiting gives the mind time to catch up with the want.' } },
          { correct: 2, q: { ar: 'من الذي وعدته الآية بالجنة؟', en: 'Whom does the verse promise Paradise?' },
            options: [{ ar: 'من لم تكن له رغبة', en: 'One who had no wants' }, { ar: 'من اشترى أكثر', en: 'One who bought the most' }, { ar: 'من نهى نفسه عن الهوى', en: 'One who restrained the soul from whim' }],
            why: { ar: 'الرغبة عند الجميع، والفضل لمن يقف أمامها.', en: 'Everyone has wants; the merit is in standing before them.' } }
        ]) },
      { title: { ar: 'هدية حسام', en: 'Husam\'s gift' },
        body: {
          ar: [
            'بعد شهر لم يعد تنين عمّار أكبر تنين في الصف، ولم يعد يهمه ذلك. صار يلعب قليلًا، ويجمع الجواهر ببطء، ويفرح بكل واحدة. واكتشف أن الفرح بالشيء الذي تتعب فيه أطول من الفرح بالشيء الذي تشتريه في ثانية. وصار يرى اللعبة كما هي: لعبة جميلة، لا سباقًا ليكون أكبر من غيره.',
            'وبعد أسبوعين جاء حسام إلى المدرسة حزينًا. كان أبوه قد غضب منه لأنه أنفق مالًا كثيرًا في اللعبة، وأخذ منه الجهاز. فجلس عمّار بجانبه وقال: أنا أيضًا فعلت هذا. وحكى له قصته كلها، والزر الأخضر، والبكاء، وقاعدة اليوم الواحد.',
            'فقال حسام: وهل ردّ مصروفك المال؟ قال عمّار: جزء منه، ما زلت أرده. ثم أخرج من حقيبته نصف شطيرته وقال: خذ، أنت لم تأكل شيئًا اليوم. فابتسم حسام لأول مرة في ذلك اليوم. وجلسا يأكلان معًا ويضحكان من تنانينهما الصغيرة.',
            'وفي الطريق إلى البيت كان عمّار يفكر: قبل شهر كنت أريد كل شيء لنفسي، واليوم أعطيت نصف شطيرتي وفرحت. فشعر أن شيئًا في داخله صار أوسع. وتذكر الآية التي قرأها أبوه، وفهم أن نهي النفس لا يجعل القلب أضيق، بل أوسع وأسعد.',
            'لكن في المساء حدث شيء آخر. دخلت أخته الصغيرة غرفته، وأخذت الجهاز اللوحي، وضغطت أزرارًا كثيرة، فحذفت قلعته التي بناها في شهرين. فاحمرّ وجه عمّار، وشعر بنار تصعد في صدره، ورفع يده. وهنا يبدأ درس آخر: درس الوسطى.'
          ],
          en: [
            'A month later Ammar\'s dragon was no longer the biggest in the class, and he no longer cared. He played a little, collected gems slowly, and enjoyed each one. He discovered that the joy in something you work for lasts longer than the joy in something you buy in a second. He saw the game for what it was: a lovely game, not a race to be bigger than others.',
            'One day Husam came to school sad. His father had been angry because he had spent a lot of money in the game, and had taken the tablet away. Ammar sat beside him and said: I did that too. And he told him the whole story: the green button, the crying, and the one-day rule.',
            'Husam said: and did your pocket money pay it back? Ammar said: part of it; I\'m still paying. Then he took half his sandwich from his bag and said: here, you haven\'t eaten anything today. Husam smiled for the first time that day. They sat eating together, laughing about their little dragons.',
            'On the way home Ammar thought: a month ago I wanted everything for myself, and today I gave away half my sandwich and was glad. He felt something inside him had grown wider. He remembered the verse his father had read, and understood that restraining the soul does not make the heart narrower, but wider and happier.',
            'But that evening something else happened. His little sister came into his room, took the tablet, and pressed lots of buttons, deleting the castle he had built over two months. Ammar\'s face went red, he felt fire rising in his chest, and he raised his hand. Here another lesson begins: the lesson of the middle finger.'
          ] },
        quiz: Q('pig-2', 5, [
          { correct: 0, q: { ar: 'ماذا اكتشف عمّار عن الفرح؟', en: 'What did Ammar discover about joy?' },
            options: [{ ar: 'أن الفرح بما نتعب فيه أطول', en: 'That joy in what we work for lasts longer' }, { ar: 'أن الشراء السريع أفضل', en: 'That quick buying is better' }, { ar: 'أن الفرح لا يدوم أبدًا', en: 'That joy never lasts' }],
            why: { ar: 'القناعة تجعل الفرح بالقليل كبيرًا.', en: 'Contentment makes small joys big.' } },
          { correct: 2, q: { ar: 'بماذا ينتهي الكتاب؟', en: 'How does the book end?' },
            options: [{ ar: 'بشراء جواهر جديدة', en: 'Buying new gems' }, { ar: 'بنوم عمّار', en: 'Ammar going to sleep' }, { ar: 'بغضب عمّار من أخته وبداية درس الوسطى', en: 'Ammar\'s anger at his sister and the start of the middle-finger lesson' }],
            why: { ar: 'بعد ضبط الرغبة يأتي ضبط الغضب.', en: 'After governing desire comes governing anger.' } }
        ]) }
    ]
  });
})();


(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-monkey-2', stage: 'monkey', ages: '9-14',
    title: { ar: 'شهد والرسالة التي لم تُرسَل', en: 'Shahd and the message never sent' },
    chapters: [
      { title: { ar: 'الرسمة في المجموعة', en: 'The drawing in the group' },
        body: {
          ar: [
            'كانت شهد في الثالثة عشرة، وكانت تحب الرسم أكثر من أي شيء. وفي مجموعة محادثة الصف، التي فيها ثلاثون تلميذة، نشرت رسمة لقطة جالسة على نافذة، تعبت فيها ثلاثة أيام، ثم انتظرت أن ترى ما تقول صديقاتها.',
            'جاءت قلوب كثيرة، وكتبت صديقتها ديما: ما أجملها! ثم كتبت بنت اسمها نوال: هذه قطة أم بطاطا؟ ووضعت وجهًا يضحك حتى البكاء. وبعد ثوانٍ ضحكت بنتان أخريان بالوجه نفسه.',
            'شعرت شهد بحرارة تصعد من صدرها إلى وجهها. وفي أقل من دقيقة، ودون أن تفكر، ضغطت زر التسجيل وأرسلت رسالة صوتية طويلة. قالت فيها لنوال كلامًا قاسيًا: إنها غيورة، وإنها لا تعرف شيئًا، وإن رسومها هي أقبح ما رأته في حياتها. ولم تكن تقصد كل ذلك، لكنه خرج.',
            'ثم أرسلت رسالة ثانية وثالثة. وكانت أصابعها ترتجف، وكلما ردت نوال بكلمة ردت شهد بعشر. وصارت المجموعة كلها تراقب: بعض البنات يضحكن، وبعضهن يكتبن: اهدئي يا شهد، وبعضهن يرسلن وجوهًا مندهشة.',
            'وفجأة كتبت المعلمة، وهي مشرفة المجموعة: توقفن الآن من فضلكن. ثم أغلقت المجموعة فلا يكتب فيها أحد. ووضعت شهد الهاتف على السرير، وصدرها يعلو وينزل، ولم تعرف هل هي غاضبة أم خائفة أم نادمة.',
            'ولم يأتها النوم تلك الليلة. سمعت صوتها في الرسائل يتكرر في رأسها، عاليًا وقاسيًا، ولم تعرف هذا الصوت. وقالت في نفسها: من التي كانت تتكلم بلساني هناك؟'
          ],
          en: [
            'Shahd was thirteen and loved drawing more than anything. In the class chat group, with thirty girls in it, she posted a drawing of a cat sitting on a window sill. It had taken her three days, and she waited to see what her friends would say.',
            'Lots of hearts came, and her friend Dima wrote: so beautiful! Then a girl called Nawal wrote: is that a cat or a potato? with a face laughing to tears. Seconds later two other girls laughed with the same face.',
            'Shahd felt heat rising from her chest to her face. In less than a minute, without thinking, she pressed record and sent a long voice message. In it she said harsh things to Nawal: that she was jealous, knew nothing, and that her drawings were the ugliest she had ever seen. She did not mean all of it, but it came out.',
            'Then she sent a second and a third. Her fingers were shaking, and every time Nawal replied with one word, Shahd replied with ten. The whole group was watching: some girls laughed, some wrote: calm down, Shahd, and some sent shocked faces.',
            'Suddenly the teacher, who supervised the group, wrote: stop now, please. Then she locked the group so no one could write. Shahd put the phone on her bed, her chest rising and falling, not knowing whether she was angry, afraid or sorry.',
            'That night she could not sleep. She heard her voice from the messages repeating in her head, loud and harsh, and did not recognise it. She said to herself: who was speaking with my tongue back there?'
          ] },
        quiz: Q('monkey-2', 1, [
          { correct: 2, q: { ar: 'ماذا فعلت شهد حين سخرت نوال من رسمتها؟', en: 'What did Shahd do when Nawal mocked her drawing?' },
            options: [{ ar: 'تجاهلت التعليق', en: 'Ignored the comment' }, { ar: 'شكرت صديقاتها', en: 'Thanked her friends' }, { ar: 'أرسلت رسائل صوتية قاسية دون تفكير', en: 'Sent harsh voice messages without thinking' }],
            why: { ar: 'الغضب جعل إصبعها أسرع من عقلها.', en: 'Anger made her finger faster than her mind.' } },
          { correct: 0, q: { ar: 'لماذا أغلقت المعلمة المجموعة؟', en: 'Why did the teacher lock the group?' },
            options: [{ ar: 'لتوقف الشجار', en: 'To stop the quarrel' }, { ar: 'لأن الوقت متأخر', en: 'Because it was late' }, { ar: 'لتنشر رسمة', en: 'To post a drawing' }],
            why: { ar: 'الشجار في المجموعة يكبر أمام الجميع بسرعة.', en: 'A quarrel in a group grows fast in front of everyone.' } }
        ]) },
      { title: { ar: 'لقطة الشاشة', en: 'The screenshot' },
        body: {
          ar: [
            'قبل أن تصل شهد إلى المدرسة صباحًا، كانت إحدى البنات قد أخذت لقطة شاشة من رسائلها، ونشرتها في مجموعة أخرى. وانتقلت اللقطة من هاتف إلى هاتف، حتى وصلت إلى بنات من صفوف لا تعرفهن.',
            'وفي الساحة كانت البنات ينظرن إليها ويتهامسن. وسمعت واحدة تقول بصوت منخفض: هذه التي صرخت في المجموعة. فشعرت شهد بالخجل يحرق وجهها، وتمنت لو تختفي. ولم تكن تعرف أن رسائل دقيقة واحدة يمكن أن تسبقها إلى كل مكان، وتتكلم عنها قبل أن تتكلم هي.',
            'وكانت ديما واقفة وحدها عند الباب، وعيناها حمراوان. اقتربت منها شهد، فقالت ديما: في رسالتك الثالثة قلتِ إن صديقات نوال كلهن تافهات. وأنا أجلس مع نوال في الرياضيات. هل أنا تافهة يا شهد؟',
            'تجمدت شهد. لم تتذكر أنها قالت ذلك. ففتحت الهاتف وسمعت الرسالة، فإذا الكلمة فيها، واضحة وقاسية. لقد أصابت صديقتها الأقرب وهي تحاول أن تصيب غيرها، كمن يرمي حجرًا في الظلام.',
            'قالت شهد: لم أقصدك يا ديما. فقالت ديما بهدوء: أعرف، لكنك قلتِها. ثم مشت إلى الصف. وبقيت شهد في الساحة وحدها، وعرفت لأول مرة أن الكلمة المرسَلة لا تعود، حتى لو حذفتها.',
            'وفي ذلك اليوم لم تأكل شهد غداءها. كانت تفكر في الدقيقة الواحدة التي أرسلت فيها كل شيء، وفي الأيام الطويلة التي ستحتاجها لتصلح ما فعلته تلك الدقيقة. وتمنت لو تستطيع أن ترجع بالزمن.'
          ],
          en: [
            'In the morning, before Shahd reached school, one of the girls had taken a screenshot of her messages and posted it in another group. The screenshot moved from phone to phone until it reached girls in classes she did not know.',
            'In the playground the girls looked at her and whispered. She heard one say quietly: that\'s the one who shouted in the group. Shahd felt shame burning her face and wished she could disappear. She had not known that the messages of one minute could get everywhere ahead of her and speak about her before she spoke.',
            'Dima was standing alone by the door, her eyes red. When Shahd came near, Dima said: in your third message you said all Nawal\'s friends are worthless. I sit with Nawal in maths. Am I worthless, Shahd?',
            'Shahd froze. She did not remember saying that. She opened her phone and listened, and the word was there, clear and harsh. She had hit her closest friend while trying to hit someone else, like throwing a stone in the dark.',
            'Shahd said: I didn\'t mean you, Dima. Dima said quietly: I know, but you said it. Then she walked to class. Shahd stayed alone in the playground, and learned for the first time that a sent word does not come back, even if you delete it.',
            'That day Shahd did not eat her lunch. She was thinking of the single minute in which she had sent everything, and of the long days she would need to mend what that minute had done. She wished she could turn back time.'
          ] },
        quiz: Q('monkey-2', 2, [
          { correct: 1, q: { ar: 'لماذا حزنت ديما؟', en: 'Why was Dima upset?' },
            options: [{ ar: 'لأن رسمتها لم تعجب أحدًا', en: 'Nobody liked her drawing' }, { ar: 'لأن شهد قالت كلمة جارحة أصابتها هي أيضًا', en: 'Shahd said a hurtful word that hit her too' }, { ar: 'لأنها نسيت واجبها', en: 'She forgot her homework' }],
            why: { ar: 'كلمة الغضب تصيب أبعد مما نقصد.', en: 'Angry words hit further than we intend.' } },
          { correct: 0, q: { ar: 'ماذا تعلمت شهد عن الكلمة المرسَلة؟', en: 'What did Shahd learn about a sent word?' },
            options: [{ ar: 'أنها لا تعود حتى لو حُذفت', en: 'It does not come back, even if deleted' }, { ar: 'أنها تُنسى بسرعة', en: 'It is soon forgotten' }, { ar: 'أنها لا تؤذي أحدًا', en: 'It hurts no one' }],
            why: { ar: 'لقطات الشاشة تحفظ ما نرسله في لحظة الغضب.', en: 'Screenshots keep what we send in a moment of anger.' } }
        ]) },
      { title: { ar: 'الشديد الحقيقي', en: 'The truly strong' },
        body: {
          ar: [
            'عند المغرب جلست شهد مع خالتها رحاب، وكانت معلمة لغة عربية تزورهم. حكت لها كل شيء وهي تبكي، ثم قالت: أنا لست بنتًا سيئة يا خالتي، لكني حين أغضب أصير شخصًا آخر. شخصًا لا أحبه.',
            'قالت الخالة: أعرف أنك لست سيئة. الغضب ليس أنتِ، لكنه يحاول أن يقودك. وقد قال النبي صلى الله عليه وآله وسلم: «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ».',
            'سألت شهد: لكن كيف أملك نفسي، والغضب أسرع مني؟ قالت الخالة: في زمن الهاتف، الغضب يحتاج إلى ثانية واحدة ليصل إلى ثلاثين شخصًا. فنحن نحتاج إلى فاصل صغير بين الشعور والزر. دعيني أعلمك قاعدة الدقائق الثلاث. إنها صغيرة، لكنها تحمي كثيرًا.',
            'وقالت: إذا غضبتِ من رسالة، فلا تردي بصوتك أبدًا. اكتبي الرد إن شئت، لكن لا ترسليه. ضعي الهاتف بعيدًا، واشربي ماء، وقولي: أعوذ بالله من الشيطان الرجيم. وبعد ثلاث دقائق اقرئي ما كتبتِ، واسألي: هل أريد أن يرى هذا ثلاثون شخصًا غدًا؟',
            'ضحكت شهد رغم دموعها وقالت: لو فعلت هذا أمس، لما أرسلت شيئًا. فقالت الخالة: ولهذا هي قاعدة. فالقوي ليس من لا يغضب، بل من يمسك يده حين يغضب، وفي زمننا: من يمسك إصبعه عن الزر.',
            'وقبل أن تنام، كتبت شهد القاعدة على ورقة صغيرة، وألصقتها خلف غطاء هاتفها، حتى تراها كلما فتحته. وكتبت فوقها بخط صغير: ثلاث دقائق، ثم أقرأ، ثم أقرر.'
          ],
          en: [
            'In the evening Shahd sat with her aunt Rihab, an Arabic teacher who was visiting. She told her everything, crying, then said: I\'m not a bad girl, Auntie, but when I get angry I become someone else. Someone I don\'t like.',
            'Her aunt said: I know you\'re not bad. Anger isn\'t you, but it tries to lead you. The Prophet, peace and blessings be upon him and his family, said, meaning: "The strong one is not the one who wins at wrestling; the strong one is the one who controls himself when angry."',
            'Shahd asked: but how do I control myself when anger is faster than me? Her aunt said: in the age of phones, anger needs one second to reach thirty people. So we need a small gap between the feeling and the button. Let me teach you the three-minute rule. It is small, but it protects a lot.',
            'She said: if a message makes you angry, never reply with your voice. Type a reply if you like, but don\'t send it. Put the phone away, drink some water, and say: I seek refuge in Allah from the accursed devil. After three minutes, read what you wrote and ask: do I want thirty people to see this tomorrow?',
            'Shahd laughed through her tears and said: if I\'d done that yesterday, I wouldn\'t have sent anything. Her aunt said: that is why it\'s a rule. The strong one is not the one who never gets angry, but the one who holds back her hand when angry; and in our time, the one who holds her finger back from the button.',
            'Before sleeping, Shahd wrote the rule on a small slip and stuck it inside her phone case, so she would see it whenever she opened it. Above it, in small writing: three minutes, then read, then decide.'
          ] },
        quiz: Q('monkey-2', 3, [
          { correct: 2, q: { ar: 'ما قاعدة الدقائق الثلاث؟', en: 'What is the three-minute rule?' },
            options: [{ ar: 'أن ترد بسرعة قبل الجميع', en: 'Reply fast before everyone' }, { ar: 'أن تحذف المجموعة', en: 'Delete the group' }, { ar: 'أن تكتب الرد ولا ترسله، ثم تقرأه بعد ثلاث دقائق', en: 'Type the reply but don\'t send it, then read it after three minutes' }],
            why: { ar: 'الفاصل الصغير بين الشعور والزر يعطي العقل فرصة.', en: 'A small gap between feeling and button gives the mind a chance.' } },
          { correct: 1, q: { ar: 'من الشديد الحقيقي في زمن الهاتف بحسب الخالة؟', en: 'Who is truly strong in the age of phones, according to the aunt?' },
            options: [{ ar: 'من يرد بأقوى الكلمات', en: 'Whoever replies with the strongest words' }, { ar: 'من يمسك إصبعه عن الزر حين يغضب', en: 'Whoever holds her finger back from the button when angry' }, { ar: 'من لا يملك هاتفًا', en: 'Whoever has no phone' }],
            why: { ar: 'الحديث يجعل القوة في ملك النفس عند الغضب.', en: 'The hadith places strength in self-control when angry.' } }
        ]) },
      { title: { ar: 'الاعتذار الصعب', en: 'The hard apology' },
        body: {
          ar: [
            'في اليوم التالي ذهبت شهد إلى ديما قبل الحصة الأولى، وقالت: كنتِ على حق. قلتُ الكلمة، وكانت ظالمة. أنا آسفة، ولا أطلب أن تسامحيني اليوم، لكني أردت أن تعرفي أنني أعرف خطئي.',
            'نظرت ديما إليها قليلًا، ثم قالت: كنت أنتظر أن تقولي إن نوال هي السبب. فقالت شهد: نوال أخطأت حين سخرت، لكن ما قلته أنا هو خطئي أنا. فابتسمت ديما ابتسامة صغيرة، ومدت يدها. فأمسكتها شهد بقوة، وشعرت أن صداقتهما صارت أقوى مما كانت.',
            'ثم كان الاعتذار الأصعب: نوال. فكرت شهد كثيرًا: هي التي بدأت، لماذا أعتذر لها؟ لكنها تذكرت صوتها في الرسائل، وكلماتها عن رسوم نوال وغيرتها. فعرفت أن خطأ غيرها لا يجعل خطأها صوابًا. وأن الاعتذار ليس هزيمة.',
            'كتبت لها رسالة خاصة، لا في المجموعة. كتبتها، ثم انتظرت ثلاث دقائق، ثم قرأتها. ثم أرسلتها: أعتذر عن رسائلي الصوتية. ما قلته عن رسومك ظالم، ولم يكن صحيحًا. أتمنى أن نبدأ من جديد.',
            'بعد ساعة ردت نوال: وأنا أعتذر عن تعليق البطاطا. كانت مزحة سخيفة. رسمتك كانت جميلة فعلًا. فضحكت شهد وحدها في غرفتها، وشعرت كأن حجرًا ثقيلًا سقط عن صدرها.',
            'وفي الغد أعادت المعلمة فتح المجموعة، وكتبت فيها: شكرًا للبنات اللواتي أصلحن ما بينهن. فلم تذكر أسماء، لكن شهد عرفت أنها تقصدها، واحمرّ وجهها هذه المرة من الفرح. وعرفت أن إصلاح الخطأ يحتاج شجاعة أكبر من الغضب نفسه.'
          ],
          en: [
            'The next day Shahd went to Dima before the first lesson and said: you were right. I said the word, and it was unjust. I\'m sorry. I\'m not asking you to forgive me today, but I wanted you to know that I know my mistake.',
            'Dima looked at her for a moment, then said: I was waiting for you to say Nawal was to blame. Shahd said: Nawal was wrong to mock, but what I said is my own mistake. Dima gave a small smile and held out her hand. Shahd held it tightly and felt their friendship had become stronger than before.',
            'Then came the hardest apology: Nawal. Shahd thought hard: she started it, why should I apologise? But she remembered her voice in the messages, and her words about Nawal\'s drawings and jealousy. She knew that someone else\'s mistake does not make hers right. And that an apology is not a defeat.',
            'She wrote her a private message, not in the group. She wrote it, waited three minutes, read it, then sent it: I\'m sorry for my voice messages. What I said about your drawings was unjust and untrue. I hope we can start again.',
            'An hour later Nawal replied: and I\'m sorry about the potato comment. It was a silly joke. Your drawing really was beautiful. Shahd laughed alone in her room and felt as if a heavy stone had fallen from her chest.',
            'The next day the teacher reopened the group and wrote: thank you to the girls who made things right between them. She named no one, but Shahd knew she meant her, and this time her face went red with joy. She knew that mending a mistake takes more courage than anger itself.'
          ] },
        quiz: Q('monkey-2', 4, [
          { correct: 0, q: { ar: 'لماذا اعتذرت شهد لنوال مع أن نوال بدأت؟', en: 'Why did Shahd apologise to Nawal though Nawal started it?' },
            options: [{ ar: 'لأن خطأ غيرها لا يجعل خطأها صوابًا', en: 'Because someone else\'s mistake does not make hers right' }, { ar: 'لأن المعلمة أجبرتها', en: 'Because the teacher forced her' }, { ar: 'لأنها تريد رسمة منها', en: 'Because she wanted a drawing from her' }],
            why: { ar: 'كل واحد مسؤول عن كلماته هو.', en: 'Each person answers for their own words.' } },
          { correct: 2, q: { ar: 'أين أرسلت شهد اعتذارها لنوال؟', en: 'Where did Shahd send her apology to Nawal?' },
            options: [{ ar: 'في المجموعة أمام الجميع', en: 'In the group in front of everyone' }, { ar: 'على السبورة', en: 'On the board' }, { ar: 'في رسالة خاصة بعد ثلاث دقائق', en: 'In a private message after three minutes' }],
            why: { ar: 'الاعتذار الخاص الهادئ يحفظ الكرامة للطرفين.', en: 'A calm private apology protects both people\'s dignity.' } }
        ]) },
      { title: { ar: 'المجموعة نفسها، شيء آخر', en: 'The same group, something else' },
        body: {
          ar: [
            'بعد أسبوعين مرضت بنت في الصف اسمها رهف، وغابت عن المدرسة أيامًا. وكانت الامتحانات قريبة. فكرت شهد: المجموعة التي اشتعلت فيها النار يمكن أن تكون مكانًا لشيء آخر. فالمجموعة ليست سيئة ولا جيدة، بل هي كاليد: تؤذي أو تساعد، بحسب من يحركها.',
            'كتبت في المجموعة: رهف مريضة، والامتحان بعد أسبوع. ما رأيكن أن ترسل كل واحدة منا ملخص درس واحد بخط واضح، فنجمعها لها؟ وبعد دقائق جاءت الردود: أنا آخذ العلوم! وأنا الرياضيات! وكتبت نوال: وأنا أرسم لها بطاقة.',
            'وفي يومين امتلأ ملف كامل بالملخصات، ورسمت نوال بطاقة فيها قطة جالسة على نافذة، وكتبت تحتها: من نوال وشهد. فضحكت شهد حين رأتها، وعرفت أن القطة صارت سرًّا صغيرًا بينهما.',
            'وحين عادت رهف إلى المدرسة قالت إن الملخصات أنقذتها، وإنها حفظت البطاقة في دفترها. وفي الطريق إلى البيت قالت ديما لشهد: أتذكرين حين كانت المجموعة مكانًا للصراخ؟ قالت شهد: أذكر، ولا أريد أن أنسى. لأني إن نسيت قد أعود إليه، وإن تذكرت عرفت الطريق.',
            'وفكرت شهد في الأسابيع الماضية: تعلمت أولًا أن تمسك إصبعها عن الزر، ثم أن تعتذر وتصلح. واليوم اكتشفت شيئًا ثالثًا: أن اليد التي تمسك نفسها عن الأذى، تصير فارغة، ومستعدة لتعطي.',
            'من هنا يُفتح باب السبابة: بعد أن نكف أذانا عن الناس، نبدأ نفعل الخير لهم، كما ينبغي للإنسان أن يفعل. بلا ضجيج، وبلا انتظار للشكر.'
          ],
          en: [
            'Two weeks later a girl in the class called Rahaf fell ill and missed school for days. Exams were close. Shahd thought: the group that caught fire could be a place for something else. A group is neither bad nor good; it is like a hand: it harms or helps, depending on who moves it.',
            'She wrote in the group: Rahaf is ill and the exam is in a week. What if each of us sends a summary of one lesson in clear handwriting, and we put them together for her? Minutes later the replies came: I\'ll take science! I\'ll do maths! And Nawal wrote: I\'ll draw her a card.',
            'In two days a whole file filled with summaries, and Nawal drew a card with a cat sitting on a window sill, and wrote underneath: from Nawal and Shahd. Shahd laughed when she saw it, and knew the cat had become a small secret between them.',
            'When Rahaf came back she said the summaries had saved her and that she had kept the card in her notebook. On the way home Dima said to Shahd: remember when the group was a place for shouting? Shahd said: I remember, and I don\'t want to forget. If I forget, I might go back to it; if I remember, I know the way.',
            'Shahd thought about the past weeks: first she had learned to hold her finger back from the button, then to apologise and repair. Today she found a third thing: a hand that holds itself back from harm becomes free, and ready to give.',
            'And that is the door to the index finger: after we keep our harm from people, we begin to do good for them, as a human being should. Without fuss, and without waiting for thanks.'
          ] },
        quiz: Q('monkey-2', 5, [
          { correct: 1, q: { ar: 'ماذا اقترحت شهد في المجموعة من أجل رهف؟', en: 'What did Shahd suggest in the group for Rahaf?' },
            options: [{ ar: 'أن يتركوها وحدها', en: 'Leave her alone' }, { ar: 'أن ترسل كل بنت ملخص درس', en: 'That each girl send a lesson summary' }, { ar: 'أن يؤجلوا الامتحان', en: 'Postpone the exam' }],
            why: { ar: 'المكان الذي اشتعلت فيه النار صار مكانًا للخير.', en: 'The place that caught fire became a place for good.' } },
          { correct: 0, q: { ar: 'ما الشيء الثالث الذي اكتشفته شهد؟', en: 'What third thing did Shahd discover?' },
            options: [{ ar: 'أن اليد التي تمسك نفسها عن الأذى تصير مستعدة لتعطي', en: 'A hand held back from harm becomes ready to give' }, { ar: 'أن الهاتف سيئ دائمًا', en: 'That phones are always bad' }, { ar: 'أن الرسم لا ينفع', en: 'That drawing is useless' }],
            why: { ar: 'بعد كف الأذى يبدأ فعل الخير، وهذا باب السبابة.', en: 'After holding back harm, doing good begins: the door to the index finger.' } }
        ]) }
    ]
  });
})();


(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-human-2', stage: 'human', ages: '9-14',
    title: { ar: 'معاذ ومشروع الماء النظيف', en: 'Muadh and the clean water project' },
    chapters: [
      { title: { ar: 'فريق من ثلاثة', en: 'A team of three' },
        body: {
          ar: [
            'كان معاذ في الثانية عشرة، وكان يحب العلوم. وفي أول الفصل أعلن المعلم عن مسابقة المشاريع: كل ثلاثة تلاميذ يصنعون مشروعًا واحدًا، ويعرضونه أمام المدرسة كلها بعد شهر، والفائز يمثل المدرسة في مسابقة المدينة.',
            'ثم قرأ المعلم أسماء الفرق. وكان فريق معاذ: معاذ، ونزار، وإياد. ففرح معاذ بنزار، لأنه ذكي ويتكلم بثقة، وكل الصف يحبه. لكن نزار لوى وجهه حين سمع اسم إياد، وهمس لمعاذ: انتهينا، سنخسر.',
            'كان إياد قد جاء إلى المدرسة هذا العام من بلد آخر. وكانت عربيته بطيئة، يبحث عن الكلمات قبل أن يقولها، ودرجاته في الاختبارات المكتوبة ضعيفة. وكان يجلس في آخر الصف، ولا يرفع يده أبدًا، حتى حين يعرف الجواب. حتى إن بعض الأولاد يقلدون طريقته في الكلام.',
            'في الاستراحة قال نزار لمعاذ: سنعمل نحن الاثنين، ونكتب اسمه على المشروع فقط حتى لا يغضب المعلم. هو لن يفهم شيئًا على أي حال. وضحك. ولم يقل معاذ شيئًا، لأنه لم يرد أن يخسر صداقة نزار.',
            'لكن في الطريق إلى البيت، رأى معاذ إيادًا يمشي وحده، وحقيبته ثقيلة على كتف واحد. فتذكر كلام نزار، وشعر بشيء غير مريح في صدره، كأنه وقّع على شيء ظالم دون أن يقرأه.',
            'وقال في نفسه: لو كنت أنا الجديد في بلد لا أعرف لغته جيدًا، هل كنت أحب أن يكتب أحد اسمي على عمل لم يتركني أشارك فيه؟ وعرف أنه لن يحب ذلك أبدًا.'
          ],
          en: [
            'Muadh was twelve and loved science. At the start of term the teacher announced a project competition: every three pupils would make one project and present it to the whole school in a month, and the winner would represent the school in the city competition.',
            'Then the teacher read out the teams. Muadh\'s team was Muadh, Nizar and Iyad. Muadh was pleased about Nizar, who was clever, spoke confidently, and was liked by the whole class. But Nizar pulled a face when he heard Iyad\'s name and whispered to Muadh: we\'re finished, we\'ll lose.',
            'Iyad had come to the school this year from another country. His Arabic was slow; he searched for words before saying them, and his marks in written tests were weak. He sat at the back and never raised his hand, even when he knew the answer. Some boys imitated the way he spoke.',
            'At break Nizar told Muadh: we\'ll do the work, just the two of us, and put his name on the project so the teacher isn\'t angry. He won\'t understand anything anyway. And he laughed. Muadh said nothing, because he did not want to lose Nizar\'s friendship.',
            'But on the way home Muadh saw Iyad walking alone, his heavy bag on one shoulder. He remembered Nizar\'s words and felt something uncomfortable in his chest, as if he had signed something unjust without reading it.',
            'He said to himself: if I were the new one in a country whose language I didn\'t know well, would I like someone to put my name on work they never let me share in? And he knew he would never like that.'
          ] },
        quiz: Q('human-2', 1, [
          { correct: 1, q: { ar: 'ماذا اقترح نزار في الاستراحة؟', en: 'What did Nizar suggest at break?' },
            options: [{ ar: 'أن يقود إياد الفريق', en: 'That Iyad lead the team' }, { ar: 'أن يعمل هو ومعاذ وحدهما ويكتبا اسم إياد فقط', en: 'That he and Muadh work alone and just add Iyad\'s name' }, { ar: 'أن يتركوا المسابقة', en: 'That they quit the competition' }],
            why: { ar: 'إقصاء الزميل الأضعف ظلم ولو كُتب اسمه.', en: 'Shutting out the weaker classmate is unjust even if his name is written.' } },
          { correct: 0, q: { ar: 'ما السؤال الذي سأله معاذ نفسه؟', en: 'What question did Muadh ask himself?' },
            options: [{ ar: 'لو كنت أنا الجديد، هل كنت أحب هذا؟', en: 'If I were the new one, would I like this?' }, { ar: 'كيف أفوز وحدي؟', en: 'How do I win alone?' }, { ar: 'لماذا جاء إياد؟', en: 'Why did Iyad come?' }],
            why: { ar: 'أن تحب لغيرك ما تحب لنفسك بداية العدل.', en: 'Wanting for others what you want for yourself is the start of fairness.' } }
        ]) },
      { title: { ar: 'يدا إياد', en: 'Iyad\'s hands' },
        body: {
          ar: [
            'اختار الفريق أن يصنع جهازًا لتنقية الماء من الرمل والحصى والفحم. وفي أول لقاء في بيت معاذ، جلس نزار على الحاسوب يكتب، وأعطى إيادًا ورقة وقال: ارسم الشعار، هذا يكفي.',
            'أخذ إياد الورقة بصمت. وبينما كان معاذ ونزار يتجادلان في كيفية قص الزجاجات البلاستيكية، كانت الزجاجة الأولى تتشقق، والثانية تنثني. فقال إياد بصوت منخفض، وهو يبحث عن الكلمات: في بلدي... أبي... نصنع هذا.',
            'نظر إليه معاذ مندهشًا وقال: أنت تعرف كيف؟ فأومأ إياد، وأخذ الزجاجة، وسخّن السكين قليلًا على شمعة، وقص الزجاجة قصًّا مستقيمًا نظيفًا. ثم رتب الطبقات بيديه: حصى كبير، ثم صغير، ثم رمل، ثم فحم، في دقائق. تحركت يداه بثقة لم يرها معاذ فيه من قبل، كأنه في بيته.',
            'وصب الماء العكر من الأعلى، فخرج من الأسفل أصفى بكثير. فصفق معاذ، وحتى نزار رفع حاجبيه وقال: من أين تعلمت هذا؟ قال إياد: في بلدي، الماء لم يكن دائمًا نظيفًا. كنا نصنع هذا في البيت.',
            'سكت الولدان. وفهم معاذ أن إيادًا ليس ضعيفًا، بل لغته الجديدة هي البطيئة. وأن في يديه علمًا لا يظهر في الاختبارات المكتوبة. وتذكر كيف كانوا سيكتبون اسمه على عمل لا يعرف عنه شيئًا.',
            'وقبل أن يذهب نزار، قال له معاذ بهدوء: إياد ليس اسمًا على الغلاف. هو جزء من الفريق، وربما أهم جزء. فلم يرد نزار، لكنه نظر إلى إياد نظرة جديدة.'
          ],
          en: [
            'The team chose to make a water filter from sand, gravel and charcoal. At their first meeting at Muadh\'s house, Nizar sat at the computer typing and handed Iyad a sheet: draw the logo, that\'s enough.',
            'Iyad took the sheet silently. While Muadh and Nizar argued about how to cut the plastic bottles, the first bottle cracked and the second bent. Iyad said quietly, searching for words: in my country... my father... we make this.',
            'Muadh looked at him in surprise and said: you know how? Iyad nodded, took the bottle, warmed the knife a little over a candle, and cut a straight, clean line. Then he layered it with his hands: big gravel, then small, then sand, then charcoal, in minutes. His hands moved with a confidence Muadh had never seen in him, as if he were at home.',
            'He poured muddy water in at the top, and it came out much clearer below. Muadh clapped, and even Nizar raised his eyebrows: where did you learn this? Iyad said: in my country the water was not always clean. We made this at home.',
            'The two boys fell silent. Muadh understood that Iyad was not weak; it was his new language that was slow. In his hands was knowledge that did not show in written tests. And he remembered how they had been going to put his name on work he knew nothing about.',
            'Before Nizar left, Muadh told him quietly: Iyad isn\'t a name on the cover. He\'s part of the team, maybe the most important part. Nizar did not reply, but looked at Iyad in a new way.'
          ] },
        quiz: Q('human-2', 2, [
          { correct: 2, q: { ar: 'ماذا اكتشف معاذ عن إياد؟', en: 'What did Muadh discover about Iyad?' },
            options: [{ ar: 'أنه لا يعرف شيئًا', en: 'That he knew nothing' }, { ar: 'أنه يحب الرسم فقط', en: 'That he only liked drawing' }, { ar: 'أن في يديه علمًا لا يظهر في الاختبارات المكتوبة', en: 'That his hands held knowledge that written tests did not show' }],
            why: { ar: 'اللغة البطيئة لا تعني عقلًا ضعيفًا.', en: 'A slow language does not mean a weak mind.' } },
          { correct: 1, q: { ar: 'لماذا كان إياد يعرف صنع جهاز التنقية؟', en: 'Why did Iyad know how to make the filter?' },
            options: [{ ar: 'قرأه في كتاب', en: 'He read it in a book' }, { ar: 'لأن الماء في بلده لم يكن دائمًا نظيفًا', en: 'Because water in his country was not always clean' }, { ar: 'علّمه نزار', en: 'Nizar taught him' }],
            why: { ar: 'لكل إنسان قصة وعلم لا نراه من بعيد.', en: 'Everyone has a story and knowledge we cannot see from afar.' } }
        ]) },
      { title: { ar: 'كلمة في الصف', en: 'A word in class' },
        body: {
          ar: [
            'في الأسبوع التالي سأل المعلم كل فريق عن تقدمه. فوقف نزار، كعادته، وشرح المشروع كله بكلمات جميلة، ولم يذكر إيادًا مرة واحدة. وكان يقول: نحن صنعنا، نحن جربنا، وكأن «نحن» تعني هو ومعاذ.',
            'ثم سأل المعلم: ومن قص الزجاجات بهذه الدقة؟ فضحك ولد من فريق آخر وقال: أكيد ليس إياد، فهو لا يعرف أن يقول جملة! وضحك بعض الصف، وأحنى إياد رأسه حتى كاد يلمس الطاولة.',
            'شعر معاذ بقلبه يدق. كان يمكنه أن يسكت، كما سكت في الاستراحة الأولى. فالسكوت أسهل، ولن يغضب منه أحد. لكنه تذكر وجه إياد وهو يصب الماء، وكيف خرج صافيًا. وقال في نفسه: إن سكتُّ الآن، فأنا أضحك معهم.',
            'فرفع يده وقال: يا أستاذ، إياد هو الذي قص الزجاجات، وهو الذي عرف ترتيب الطبقات. نحن جربنا مرتين وفشلنا، وهو نجح في دقائق. والفكرة كلها من بيته. وقال للولد الذي ضحك بهدوء: ليس كل من يتكلم ببطء يفكر ببطء.',
            'سكت الصف. ونظر المعلم إلى إياد وابتسم وقال: أحسنت يا إياد، وأحسنت يا معاذ. ثم قال للصف كله: النبي صلى الله عليه وآله وسلم قال: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ». والضحك على زميل يجرحه، ولو كان مزحة.',
            'ورفع إياد رأسه لأول مرة في ذلك اليوم، ونظر إلى معاذ نظرة لم ينسها معاذ أبدًا. وفي الاستراحة جاء الولد الذي ضحك، وجلس بجانب إياد، وسأله عن الجهاز.'
          ],
          en: [
            'The next week the teacher asked each team about its progress. Nizar stood, as usual, explained the whole project in fine words, and never mentioned Iyad once. He kept saying: we made, we tested, as if "we" meant him and Muadh.',
            'Then the teacher asked: and who cut the bottles so precisely? A boy from another team laughed and said: definitely not Iyad, he can\'t even say a sentence! Some of the class laughed, and Iyad bent his head until it nearly touched the desk.',
            'Muadh felt his heart pounding. He could stay silent, as he had at that first break. Silence was easier, and no one would be angry with him. But he remembered Iyad\'s face as he poured the water, and how it came out clear. He told himself: if I keep quiet now, I am laughing with them.',
            'So he raised his hand: sir, Iyad cut the bottles, and he knew the order of the layers. We tried twice and failed; he did it in minutes. The whole idea comes from his home. And he told the boy who had laughed, calmly: not everyone who speaks slowly thinks slowly.',
            'The class went quiet. The teacher looked at Iyad, smiled and said: well done, Iyad, and well done, Muadh. Then he told the whole class: the Prophet, peace and blessings be upon him and his family, said, meaning: "The Muslim is the one from whose tongue and hand Muslims are safe." Laughing at a classmate hurts him, even as a joke.',
            'Iyad lifted his head for the first time that day and gave Muadh a look Muadh never forgot. At break the boy who had laughed came and sat beside Iyad and asked him about the filter.'
          ] },
        quiz: Q('human-2', 3, [
          { correct: 0, q: { ar: 'ماذا فعل معاذ حين ضحك الصف على إياد؟', en: 'What did Muadh do when the class laughed at Iyad?' },
            options: [{ ar: 'رفع يده وقال الحقيقة عن عمل إياد', en: 'Raised his hand and told the truth about Iyad\'s work' }, { ar: 'ضحك معهم', en: 'Laughed with them' }, { ar: 'سكت', en: 'Stayed silent' }],
            why: { ar: 'العدل أن يُنسب العمل إلى صاحبه.', en: 'Fairness means giving credit to whoever did the work.' } },
          { correct: 2, q: { ar: 'ماذا قال معاذ للولد الذي ضحك؟', en: 'What did Muadh tell the boy who laughed?' },
            options: [{ ar: 'أنت سيئ', en: 'You\'re bad' }, { ar: 'اسكت', en: 'Be quiet' }, { ar: 'ليس كل من يتكلم ببطء يفكر ببطء', en: 'Not everyone who speaks slowly thinks slowly' }],
            why: { ar: 'دافع عن زميله بهدوء، دون أن يجرح أحدًا.', en: 'He defended his classmate calmly, without wounding anyone.' } }
        ]) },
      { title: { ar: 'نزار يغضب ثم يفهم', en: 'Nizar gets angry, then understands' },
        body: {
          ar: [
            'بعد الحصة لحق نزار بمعاذ في الممر، وقال غاضبًا: لماذا فعلت هذا؟ جعلتني أبدو كاذبًا أمام الأستاذ! قال معاذ: لم أقل إنك كذبت. قلت ما فعله إياد فقط. وأنا أيضًا أخطأت في الأول حين سكت عن فكرتك.',
            'قال نزار: وما المشكلة؟ المهم أن نفوز! قال معاذ: إن فزنا وإياد يشعر أنه لا شيء، فلن أفرح. ثم قال: أتذكر حين انكسرت ذراعك السنة الماضية، ولم تستطع أن تكتب؟ من كتب عنك الواجبات؟',
            'سكت نزار. فقد كان معاذ هو الذي كتب له شهرًا كاملًا. ثم قال بصوت أخفض: كنت أظن أنه سيجعلنا نخسر. قال معاذ: وهو الذي جعل الجهاز يعمل. فلم يجد نزار ما يقوله.',
            'وقبل أن ينام أرسل نزار رسالة إلى إياد: آسف لأني لم أذكرك في الصف. وغدًا أنت من يشرح كيف تُرتب الطبقات، وأنا أساعدك في الكلمات إن احتجت. فرد إياد بقلب أحمر، وكلمة واحدة: شكرًا.',
            'وكان معاذ قد قرأ في كتاب جده حديثًا يحبه: «وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ». فكر فيه وقال في نفسه: سكتُّ في الأول، وكان سكوتي خطأً. ثم تكلمت بالحق، وهذه حسنة بعد السيئة.',
            'ولاحظ معاذ أن الفريق صار أقوى. فنزار يتكلم، وإياد يبني، وهو يكتب ويرتب. ولم يعد أحد منهم اسمًا على الغلاف. وصاروا يلتقون كل يوم بعد المدرسة، ويضحكون أكثر مما يعملون أحيانًا، لكن العمل كان يتقدم.'
          ],
          en: [
            'After the lesson Nizar caught up with Muadh in the corridor and said angrily: why did you do that? You made me look like a liar in front of the teacher! Muadh said: I didn\'t say you lied. I only said what Iyad did. And I was wrong too, at first, when I kept quiet about your idea.',
            'Nizar said: so what? What matters is winning! Muadh said: if we win while Iyad feels he\'s nothing, I won\'t be happy. Then he said: remember when you broke your arm last year and couldn\'t write? Who wrote your homework for you?',
            'Nizar was silent. It had been Muadh, for a whole month. Then he said more quietly: I thought he\'d make us lose. Muadh said: and he\'s the one who made the filter work. Nizar found nothing to say.',
            'That evening Nizar messaged Iyad: sorry I didn\'t mention you in class. Tomorrow you explain how the layers go, and I\'ll help with the words if you need. Iyad replied with a red heart and one word: thanks.',
            'Muadh had read a hadith he loved in his grandfather\'s book. Meaning: "Follow a bad deed with a good one and it will erase it, and treat people with good character." He thought of it and said to himself: I kept quiet at first, and that silence was wrong. Then I spoke the truth, a good deed after the bad.',
            'Muadh noticed the team had grown stronger. Nizar spoke, Iyad built, and he wrote and organised. None of them was a name on the cover any more. They met every day after school, sometimes laughing more than working, but the work moved forward.'
          ] },
        quiz: Q('human-2', 4, [
          { correct: 1, q: { ar: 'بماذا ذكّر معاذ نزارًا؟', en: 'What did Muadh remind Nizar of?' },
            options: [{ ar: 'بدرجاته في الرياضيات', en: 'His maths marks' }, { ar: 'بأنه كتب عنه الواجبات حين انكسرت ذراعه', en: 'That he wrote Nizar\'s homework when his arm was broken' }, { ar: 'بمباراة كرة', en: 'A football match' }],
            why: { ar: 'تذكّر حاجتنا إلى غيرنا يجعلنا ألطف مع المحتاج.', en: 'Remembering our own need for others makes us kinder to those in need.' } },
          { correct: 0, q: { ar: 'ما الحسنة التي أتبع بها معاذ سكوته الأول؟', en: 'What good deed did Muadh follow his first silence with?' },
            options: [{ ar: 'أنه تكلم بالحق عن عمل إياد', en: 'He spoke the truth about Iyad\'s work' }, { ar: 'أنه ترك الفريق', en: 'He left the team' }, { ar: 'أنه اشترى هدية للمعلم', en: 'He bought the teacher a gift' }],
            why: { ar: 'الحديث يأمر أن نتبع السيئة بحسنة تمحوها.', en: 'The hadith tells us to follow a bad deed with a good one that erases it.' } }
        ]) },
      { title: { ar: 'يوم العرض', en: 'Presentation day' },
        body: {
          ar: [
            'في يوم العرض وقف الفريق أمام المدرسة كلها. بدأ نزار بالمقدمة، ثم تقدم إياد. كانت يداه ترتجفان قليلًا، لكنه صب الماء العكر في الجهاز، وشرح ببطء ووضوح: حصى كبير، حصى صغير، رمل، فحم. وخرج الماء صافيًا، فصفق الجميع. وفي آخر القاعة وقف أبو إياد يمسح عينيه.',
            'ولم يفز الفريق بالمركز الأول، بل بالثاني. لكن المعلم قال عند إعلان النتائج: أعطينا هذا الفريق جائزة إضافية، هي جائزة روح الفريق، لأن كل واحد فيه كان له مكان حقيقي.',
            'وفي طريق العودة مشى الثلاثة معًا لأول مرة. وكان إياد يتكلم أكثر من أي يوم مضى، ويحكي عن نهر قرب بيته القديم، وعن أبيه الذي علّمه صنع الأشياء بيديه. ونزار يسأله، ويصحح له كلمة أحيانًا بلطف.',
            'وقال معاذ لأمه في المساء: لم نفز بالأول، لكني فرحت أكثر مما لو فزنا وإياد خارج الفريق. فقالت أمه: هذا هو الإنسان كما ينبغي أن يكون: لا يظلم، ويعطي كل ذي حق حقه.',
            'وفي الأسبوع التالي لاحظ معاذ أن إيادًا يجلس في المكتبة وحده، وأمامه كتاب العربية، وهو يكتب الكلمات الصعبة في دفتر صغير. لم يطلب منه إياد شيئًا، ولم يطلب منه المعلم شيئًا.',
            'لكن معاذ جلس بجانبه، وفتح كتابه، وقال: أنا أيضًا أحتاج أن أراجع. تعال نقرأ معًا. وهنا يبدأ شيء أعلى من العدل: أن تفعل الخير قبل أن يطلبه أحد. وهذا باب الإبهام.'
          ],
          en: [
            'On presentation day the team stood before the whole school. Nizar began with the introduction, then Iyad stepped forward. His hands shook a little, but he poured the muddy water into the filter and explained slowly and clearly: big gravel, small gravel, sand, charcoal. The water came out clear, and everyone clapped. Iyad\'s father stood at the back of the hall, wiping his eyes.',
            'The team did not win first place, but second. When the results were announced, the teacher said: we are giving this team an extra prize, for team spirit, because everyone in it had a real place.',
            'On the way back the three walked together for the first time. Iyad talked more than ever, telling them about a river near his old home and his father who taught him to make things with his hands. Nizar asked him questions and sometimes gently corrected a word.',
            'That evening Muadh told his mother: we didn\'t come first, but I\'m happier than if we\'d won with Iyad left out. His mother said: that is a human being as one should be: doing no injustice, and giving everyone their due.',
            'The next week Muadh noticed Iyad sitting alone in the library with his Arabic book, writing difficult words in a small notebook. Iyad had not asked him for anything, and neither had the teacher.',
            'But Muadh sat beside him, opened his own book and said: I need to revise too. Let\'s read together. Here begins something higher than fairness: doing good before anyone asks. And that is the door to the thumb.'
          ] },
        quiz: Q('human-2', 5, [
          { correct: 2, q: { ar: 'ما الجائزة الإضافية التي نالها الفريق؟', en: 'What extra prize did the team win?' },
            options: [{ ar: 'جائزة أسرع فريق', en: 'Fastest team' }, { ar: 'جائزة أجمل شعار', en: 'Best logo' }, { ar: 'جائزة روح الفريق', en: 'Team spirit' }],
            why: { ar: 'كان لكل واحد في الفريق مكان حقيقي.', en: 'Everyone in the team had a real place.' } },
          { correct: 1, q: { ar: 'ماذا فعل معاذ حين رأى إيادًا في المكتبة؟', en: 'What did Muadh do when he saw Iyad in the library?' },
            options: [{ ar: 'تركه وذهب يلعب', en: 'Left him and went to play' }, { ar: 'جلس بجانبه ليقرآ معًا دون أن يطلب منه أحد', en: 'Sat beside him to read together without being asked' }, { ar: 'أخبر المعلم', en: 'Told the teacher' }],
            why: { ar: 'الخير قبل أن يُطلب هو باب الإبهام.', en: 'Good done before it is asked for is the door to the thumb.' } }
        ]) }
    ]
  });
})();


(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-sabiq-2', stage: 'sabiq', ages: '9-14',
    title: { ar: 'دانة والخبز عند الباب', en: 'Dana and the bread at the door' },
    chapters: [
      { title: { ar: 'الأحذية المبعثرة', en: 'The scattered shoes' },
        body: {
          ar: [
            'كانت دانة في الثانية عشرة، وكانت تذهب مع أمها إلى المسجد كل يوم جمعة. وفي كل مرة كانت ترى الشيء نفسه عند باب مصلى النساء: أحذية كثيرة مبعثرة على الأرض، فوق بعضها، وبعضها أمام الباب تمامًا.',
            'وكانت النساء يخرجن بعد الصلاة فيتعثرن، ويبحثن عن أحذيتهن طويلًا. ورأت دانة مرة امرأة كبيرة تكاد تسقط، فأمسكتها بنت أخرى في آخر لحظة. وكانت كل واحدة تقول: لماذا لا يرتب أحد هذه الأحذية؟ ثم تمشي. ولم تكن واحدة منهن تفكر أنها تستطيع أن تكون هي هذا الأحد.',
            'وفي الجمعة التالية خرجت دانة من الصلاة قبل أن ينتهي الدعاء بقليل، وجلست عند الباب. وبدأت ترتب الأحذية زوجًا زوجًا على الرفوف، الكبيرة في الأسفل، والصغيرة في الأعلى، وتترك الممر فارغًا. تعمل بسرعة، وفي هدوء.',
            'لم يرها أحد، لأن النساء كن ما زلن في الداخل. وحين خرجن وجدن الأحذية مرتبة والممر واسعًا. فقالت إحداهن: ما شاء الله، من رتبها؟ وقالت أخرى: لعله عامل المسجد. ولم تقل دانة شيئًا، بل ابتسمت ولبست حذاءها.',
            'وفي الطريق سألتها أمها: لماذا خرجتِ قبلنا؟ فاحمرّ وجه دانة وقالت: سر صغير يا أمي. فلم تسألها الأم مرة أخرى، لكنها رأت الرفوف المرتبة، وفهمت.',
            'وكانت دانة تشعر بفرح لم تعرفه من قبل. لم يشكرها أحد، ولم يعرف أحد. لكنها شعرت أن الله رأى، وأن هذا يكفي. ونوت أن تعود إلى الرفوف كل جمعة.'
          ],
          en: [
            'Dana was twelve and went with her mother to the masjid every Friday. Each time she saw the same thing at the door of the women\'s prayer hall: lots of shoes scattered on the floor, piled on each other, some right in front of the door.',
            'After the prayer the women came out stumbling and searching a long time for their shoes. Once Dana saw an elderly woman nearly fall, caught at the last moment by another girl. Each woman said: why doesn\'t someone tidy these shoes? Then walked on. None of them thought she could be that someone herself.',
            'The next Friday Dana left the prayer a little before the supplication ended and sat by the door. She began arranging the shoes pair by pair on the racks, big ones below, small ones above, leaving the way clear. She worked quickly and quietly.',
            'No one saw her, because the women were still inside. When they came out they found the shoes in order and the way wide. One said: masha\'Allah, who tidied them? Another said: maybe the caretaker. Dana said nothing, but smiled and put on her shoes.',
            'On the way home her mother asked: why did you leave before us? Dana\'s face went red: a little secret, Mum. Her mother did not ask again, but she had seen the tidy racks, and she understood.',
            'Dana felt a joy she had never known. No one thanked her, and no one knew. But she felt that Allah had seen, and that this was enough. And she resolved to return to the racks every Friday.'
          ] },
        quiz: Q('sabiq-2', 1, [
          { correct: 2, q: { ar: 'ماذا فعلت دانة عند باب مصلى النساء؟', en: 'What did Dana do at the door of the women\'s hall?' },
            options: [{ ar: 'اشتكت إلى الإمام', en: 'Complained to the imam' }, { ar: 'أخذت حذاءها ومشت', en: 'Took her shoes and left' }, { ar: 'رتبت الأحذية قبل أن يخرج أحد', en: 'Arranged the shoes before anyone came out' }],
            why: { ar: 'رأت الحاجة فسبقت إليها، ولم تنتظر أن يطلب أحد.', en: 'She saw the need and raced to it without waiting to be asked.' } },
          { correct: 0, q: { ar: 'لماذا شعرت دانة بالفرح مع أن أحدًا لم يشكرها؟', en: 'Why was Dana happy though no one thanked her?' },
            options: [{ ar: 'لأنها شعرت أن الله رأى، وهذا يكفي', en: 'She felt Allah had seen, and that was enough' }, { ar: 'لأنها أخذت جائزة', en: 'She won a prize' }, { ar: 'لأنها خرجت مبكرًا', en: 'She left early' }],
            why: { ar: 'الخير الخفي فرحه بين العبد وربه.', en: 'The joy of hidden good is between a servant and their Lord.' } }
        ]) },
      { title: { ar: 'المصباح الصغير', en: 'The little lamp' },
        body: {
          ar: [
            'في آخر مصلى النساء كانت تجلس كل جمعة الحاجة نفيسة، جارتهم العجوز، تقرأ القرآن من مصحف كبير الخط. وكان المصباح فوق مكانها قد احترق منذ أسابيع، فكانت تقرّب المصحف من عينيها كثيرًا، وتتعب. وكانت تمسح عينيها بين الحين والحين، ثم تعود إلى القراءة، ولا تشتكي لأحد.',
            'لاحظت دانة ذلك، وفكرت: لو أخبرت الإمام، قد يأخذ إصلاحه وقتًا طويلًا. ثم تذكرت أن في غرفتها مصباحًا صغيرًا يعمل بالبطارية، كانت تقرأ به في الليل. فقررت أن تحضره. وفكرت: أنا أقرأ به القصص، وهي تقرأ به كلام الله، فهي أحق به مني.',
            'وفي الجمعة التالية وصلت إلى المسجد قبل الجميع مع أمها، ووضعت المصباح بجانب مكان الحاجة نفيسة، ووضعت تحته ورقة كتبت فيها بخط جميل: لمن يقرأ القرآن هنا. ولم تكتب اسمها.',
            'وحين جاءت الحاجة نفيسة رأت المصباح والورقة، فأضاءته، وابتسمت ابتسامة واسعة. وقرأت ذلك اليوم صفحات كثيرة دون أن تقرّب المصحف من عينيها. ودانة تراها من بعيد، وقلبها يرقص.',
            'وبعد الصلاة سمعت الحاجة نفيسة تقول لامرأة بجانبها: لا أعرف من وضع هذا المصباح، لكن الله يعرف. اللهم اجزه خيرًا، ونوّر قلبه كما نوّر لي صفحتي.',
            'فشعرت دانة بشيء دافئ يملأ صدرها. لم يكن أحد يعرف أن الدعاء لها، إلا هي والله. وفكرت: هذا أجمل من أي شكر. ونوت أن تشتري بطاريات جديدة من مصروفها كلما ضعف الضوء.'
          ],
          en: [
            'At the back of the women\'s hall every Friday sat Hajja Nafisa, their elderly neighbour, reading the Quran from a large-print mushaf. The lamp above her place had burned out weeks ago, so she held the mushaf very close to her eyes and grew tired. Now and then she wiped her eyes, then went back to reading, complaining to no one.',
            'Dana noticed and thought: if I tell the imam, fixing it may take a long time. Then she remembered a small battery lamp in her room that she used for reading at night. She decided to bring it. She thought: I read stories by it, and she would read the words of Allah; she has more right to it than I do.',
            'The next Friday she reached the masjid before everyone with her mother, set the lamp beside Hajja Nafisa\'s place, and put a note under it in neat writing: for whoever reads the Quran here. She did not write her name.',
            'When Hajja Nafisa came she saw the lamp and the note, switched it on, and smiled widely. That day she read many pages without holding the mushaf close to her eyes. Dana watched from afar, her heart dancing.',
            'After the prayer she heard Hajja Nafisa tell the woman beside her: I don\'t know who put this lamp here, but Allah knows. O Allah, reward them with good, and light their heart as they lit my page.',
            'Dana felt something warm fill her chest. No one knew the prayer was for her, except her and Allah. She thought: this is lovelier than any thanks. And she resolved to buy new batteries from her pocket money whenever the light grew weak.'
          ] },
        quiz: Q('sabiq-2', 2, [
          { correct: 1, q: { ar: 'ماذا كتبت دانة على الورقة تحت المصباح؟', en: 'What did Dana write on the note under the lamp?' },
            options: [{ ar: 'اسمها كاملًا', en: 'Her full name' }, { ar: 'لمن يقرأ القرآن هنا', en: 'For whoever reads the Quran here' }, { ar: 'لا تلمسوا هذا', en: 'Do not touch' }],
            why: { ar: 'لم تكتب اسمها، لأن خيرها لله لا للناس.', en: 'She left out her name, because her good was for Allah, not people.' } },
          { correct: 2, q: { ar: 'بماذا دعت الحاجة نفيسة لمن وضع المصباح؟', en: 'What did Hajja Nafisa pray for whoever left the lamp?' },
            options: [{ ar: 'أن يصير مشهورًا', en: 'That they become famous' }, { ar: 'أن يأتي ليأخذه', en: 'That they come back for it' }, { ar: 'أن يجزيه الله خيرًا وينوّر قلبه', en: 'That Allah reward them and light their heart' }],
            why: { ar: 'دعاء من لا يعرفك في ظهر الغيب أجمل من الشكر.', en: 'A prayer from someone who does not know you is lovelier than thanks.' } }
        ]) },
      { title: { ar: 'سباق مع يزن', en: 'A race with Yazan' },
        body: {
          ar: [
            'كان ليزن، ابن عم دانة، عينان لا يفوتهما شيء. وفي إحدى الجمع رآها وهي ترتب الأحذية، فقال لها بعد الصلاة ضاحكًا: عرفت سرك! فخافت دانة أن يخبر الجميع، وقالت: أرجوك لا تقل لأحد.',
            'قال يزن: لن أقول. لكن عندي فكرة أفضل: سأرتب أحذية الرجال! وفي الجمعة التالية رأته دانة من بعيد يرتب الرفوف عند باب الرجال، ويمسح الغبار عنها بمنديل.',
            'وفي الأسبوع الذي بعده جمع يزن المصاحف المتروكة على الأرض ورتبها على الرفوف. فشعرت دانة بشيء صغير في صدرها يقول: لقد سبقني! وكادت تحزن، لأنها كانت أول من بدأ. ثم خجلت من هذا الشعور، وعرفت أنه لا يليق بمن يعمل لله.',
            'لكنها تذكرت ما قرأه أبوها في البيت: ﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِنْ رَبِّكُمْ﴾. وقال لها يومها: السباق هنا إلى الله، لا على الناس. ومن سبقك إلى الخير فقد زاد الخير في الدنيا، فافرحي له.',
            'فذهبت إلى يزن وقالت: فكرة المصاحف رائعة! غدًا أرتب مصاحف النساء أيضًا. ففرح يزن وقال: إذن صرنا فريقًا سريًّا. وضحكا معًا، واتفقا ألا يخبرا أحدًا. وصار الفريق السري يلتقي بعد كل جمعة دقائق قليلة، يتبادلان فيها أفكارًا جديدة: سجاد يحتاج تنظيفًا، وبرادة ماء فارغة، وكراسي للكبار عند الباب.',
            'وفهمت دانة شيئًا جديدًا: أن السباق إلى الخير لا خاسر فيه. فكل من يصل يفرح، ومن يفرح لغيره يصل أسرع. وصارت تدعو ليزن في صلاتها، دون أن تخبره.'
          ],
          en: [
            'Dana\'s cousin Yazan had eyes that missed nothing. One Friday he saw her arranging the shoes, and after the prayer he laughed and said: I know your secret! Dana was afraid he would tell everyone and said: please don\'t tell anyone.',
            'Yazan said: I won\'t. But I have a better idea: I\'ll arrange the men\'s shoes! The next Friday Dana saw him from afar arranging the racks at the men\'s door and wiping the dust off them with a tissue.',
            'The week after, Yazan gathered the mushafs left on the floor and arranged them on the shelves. Dana felt a small voice in her chest saying: he got ahead of me! She almost felt sad, because she had been the first to start. Then she felt ashamed of the feeling, knowing it did not suit someone working for Allah.',
            'But she remembered what her father had recited at home. Meaning (not a translation): and hasten to forgiveness from your Lord. He had told her that day: the race here is towards Allah, not against people. Whoever gets ahead of you in good has added good to the world, so be glad for them.',
            'So she went to Yazan and said: the mushaf idea is wonderful! Tomorrow I\'ll arrange the women\'s mushafs too. Yazan was delighted and said: then we\'re a secret team. They laughed together and agreed to tell no one. The secret team met for a few minutes after every Friday, swapping new ideas: a carpet that needed cleaning, an empty water cooler, chairs for the elderly by the door.',
            'Dana understood something new: the race to good has no losers. Everyone who arrives is glad, and whoever is glad for others arrives sooner. She began praying for Yazan in her prayers without telling him.'
          ] },
        quiz: Q('sabiq-2', 3, [
          { correct: 0, q: { ar: 'ماذا شعرت دانة أولًا حين سبقها يزن؟', en: 'What did Dana feel at first when Yazan got ahead?' },
            options: [{ ar: 'كادت تحزن لأنه سبقها', en: 'She almost felt sad that he got ahead' }, { ar: 'غضبت وصرخت', en: 'She got angry and shouted' }, { ar: 'لم تهتم', en: 'She did not care' }],
            why: { ar: 'حتى في الخير قد تدخل الغيرة، فنعالجها بالفرح للآخر.', en: 'Even in good, envy can creep in; we treat it by being glad for the other.' } },
          { correct: 1, q: { ar: 'إلى أين يكون السباق بحسب أبي دانة؟', en: 'Where is the race directed, according to Dana\'s father?' },
            options: [{ ar: 'على الناس', en: 'Against people' }, { ar: 'إلى الله', en: 'Towards Allah' }, { ar: 'إلى الجوائز', en: 'Towards prizes' }],
            why: { ar: 'الآية تأمر بالمسارعة إلى مغفرة من الله.', en: 'The verse commands hastening to forgiveness from Allah.' } }
        ]) },
      { title: { ar: 'الخبز عند الباب', en: 'The bread at the door' },
        body: {
          ar: [
            'في الشتاء مرضت الحاجة نفيسة، وصارت لا تخرج من بيتها. وكانت تعيش وحدها، وأولادها في مدينة بعيدة. لا يأتون إلا في العيد. ولاحظت دانة أن نافذتها تبقى مغلقة، وأن أحدًا لا يدخل بيتها ولا يخرج.',
            'فقالت لأمها: يا أمي، هل يمكن أن نشتري لها الخبز كل صباح؟ قالت الأم: فكرة جميلة، لكن الحاجة نفيسة عزيزة النفس، قد تخجل إن عرفت. فاتفقتا على شيء: تضع دانة الخبز في كيس معلق على مقبض بابها، وتطرق مرة واحدة، ثم تمشي.',
            'وكانت دانة تستيقظ قبل المدرسة بربع ساعة، وتأخذ الخبز الساخن من المخبز، وتعلقه، وتطرق، وتمشي بسرعة إلى زاوية الشارع. ومن هناك كانت ترى الباب يُفتح، ويدًا نحيلة تأخذ الكيس.',
            'وبعد أسبوع سمعت الحاجة نفيسة تقول للبائع في المخبز: جزاك الله خيرًا يا بني على الخبز كل صباح. فقال البائع مندهشًا: أي خبز يا حاجة؟ أنا لا أرسل شيئًا! فسكتت الحاجة، ونظرت حولها طويلًا. ثم ابتسمت ابتسامة صغيرة، كأنها فهمت شيئًا.',
            'وكانت دانة قد سمعت هذا وهي واقفة في الصف خلفها، فخفضت رأسها وخرجت بسرعة، وقلبها يدق. لم تكن تريد أن تُعرف. وفي البيت قالت لها أمها: الله يرى، وهو يكفي، وهو الذي يجزي.',
            'وتذكرت دانة آية سمعتها في درس المسجد: ﴿وَالسَّابِقُونَ السَّابِقُونَ ۝ أُولَٰئِكَ الْمُقَرَّبُونَ﴾. وفكرت: ربما يكون القرب من الله هو هذا الشعور الدافئ الذي يأتي بعد كل كيس خبز.'
          ],
          en: [
            'In winter Hajja Nafisa fell ill and stopped leaving her house. She lived alone; her children were in a faraway city. They only came at Eid. Dana noticed that her window stayed shut and that no one went in or out.',
            'She said: Mum, could we buy her bread every morning? Her mother said: a lovely idea, but Hajja Nafisa is proud; she may feel embarrassed if she knows. So they agreed: Dana would hang the bread in a bag on her door handle, knock once, and walk away.',
            'Dana woke a quarter of an hour before school, bought warm bread at the bakery, hung it, knocked, and walked quickly to the corner. From there she saw the door open and a thin hand take the bag.',
            'A week later she heard Hajja Nafisa tell the baker: may Allah reward you, son, for the bread every morning. The baker said in surprise: what bread, Hajja? I don\'t send anything! The Hajja fell silent and looked around for a long time. Then she gave a small smile, as if she had understood something.',
            'Dana had heard this standing in the queue behind her. She lowered her head and slipped out quickly, her heart pounding. She did not want to be known. At home her mother told her: Allah sees, He is enough, and He is the one who rewards.',
            'Dana remembered a verse she had heard in a lesson at the masjid. Meaning (not a translation): and those who race ahead, those who race ahead, they are the ones brought near. She thought: perhaps nearness to Allah is this warm feeling that comes after every bag of bread.'
          ] },
        quiz: Q('sabiq-2', 4, [
          { correct: 2, q: { ar: 'لماذا كانت دانة تطرق مرة واحدة ثم تمشي؟', en: 'Why did Dana knock once and walk away?' },
            options: [{ ar: 'لأنها كانت متأخرة', en: 'She was late' }, { ar: 'لأنها خافت من الحاجة', en: 'She was afraid of the Hajja' }, { ar: 'حتى لا تخجل الحاجة نفيسة ولا يُعرف الخير', en: 'So Hajja Nafisa would not feel embarrassed and the good stay hidden' }],
            why: { ar: 'الخير الخفي يحفظ كرامة من نعطيه.', en: 'Hidden good protects the dignity of the one we give to.' } },
          { correct: 0, q: { ar: 'ماذا قالت الأم لدانة بعد ما حدث في المخبز؟', en: 'What did her mother tell Dana after the bakery?' },
            options: [{ ar: 'الله يرى، وهو يكفي، وهو الذي يجزي', en: 'Allah sees, He is enough, and He rewards' }, { ar: 'أخبري الحاجة الآن', en: 'Tell the Hajja now' }, { ar: 'توقفي عن الخبز', en: 'Stop the bread' }],
            why: { ar: 'السابق لا ينتظر شكر الناس.', en: 'One who races ahead does not wait for people\'s thanks.' } }
        ]) },
      { title: { ar: 'النور فوق اليد', en: 'The light above the hand' },
        body: {
          ar: [
            'في الربيع شُفيت الحاجة نفيسة، وعادت إلى المسجد. وفي أول جمعة جلست بجانب دانة، وقالت لها بصوت منخفض: يا دانة، أريد أن أقول لك شيئًا. أنا لا أعرف من كان يضع الخبز على بابي، لكني دعوت له كل صباح.',
            'ثم وضعت يدها على يد دانة وقالت: ودعوت أيضًا أن يجعل الله من يفعل هذا من السابقين. فلم تقل دانة شيئًا. لكنها شعرت أن الحاجة نفيسة تعرف، وأنها اختارت ألا تقول، لتحفظ السر كما حفظته دانة.',
            'وبعد صلاة العشاء جلست دانة مع أبيها، وسألته: يا أبي، إذا وصلت إلى الإبهام، فماذا بعده؟ هل انتهى الطريق؟ فرفع أبوها يده، وأشار فوق الإبهام وقال: فوق الإبهام نور، وهو هدي الأنبياء عليهم السلام.',
            'ثم قرأ: ﴿لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ﴾. وقال: هدي النبي صلى الله عليه وآله وسلم نور نمشي في ضوئه طول عمرنا. وكلما اقتربنا رأينا كم بقي لنا. وهذا ليس حزنًا، بل هو جمال الطريق.',
            'وعلمها أبوها دعاء تقوله كل صباح: «اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الْأَخْلَاقِ، لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لَا يَصْرِفُ عَنِّي سَيِّئَهَا إِلَّا أَنْتَ».',
            'وفي تلك الليلة نظرت دانة إلى يدها، إصبعًا إصبعًا. تذكرت أيام الغفلة والرغبة والغضب، ورأت أن كل إصبع كان درجة، وأن الطريق لا ينتهي. ونامت وهي تفكر: غدًا خبز، وغدًا أحذية، وغدًا شيء جديد لا يعرفه أحد.'
          ],
          en: [
            'In spring Hajja Nafisa recovered and came back to the masjid. On the first Friday she sat beside Dana and said quietly: Dana, I want to tell you something. I don\'t know who left bread on my door, but I prayed for them every morning.',
            'Then she laid her hand on Dana\'s and said: and I prayed that Allah make whoever did it one of those who race ahead. Dana said nothing. But she felt that Hajja Nafisa knew, and had chosen not to say, to keep the secret as Dana had kept it.',
            'That evening Dana sat with her father and asked: Dad, if I reach the thumb, what comes after? Is the road over? Her father raised his hand, pointed above the thumb and said: above the thumb is a light: the guidance of the prophets, peace be upon them.',
            'Then he recited. Meaning (not a translation): in the Messenger of Allah you have an excellent example. He said: the guidance of the Prophet, peace and blessings be upon him and his family, is a light we walk by all our lives. The closer we come, the more we see how far there is to go. That is not sadness; it is the beauty of the road.',
            'He taught her a supplication to say every morning. Meaning: "O Allah, guide me to the best of character, for none guides to the best of it but You, and turn its bad away from me, for none turns its bad away but You."',
            'That night Dana looked at her hand, finger by finger. She remembered the days of heedlessness, wanting and anger, and saw that each finger had been a step, and that the road does not end. She fell asleep thinking: tomorrow bread, tomorrow shoes, tomorrow something new that no one knows.'
          ] },
        quiz: Q('sabiq-2', 5, [
          { correct: 1, q: { ar: 'ماذا قال الأب عما فوق الإبهام؟', en: 'What did her father say is above the thumb?' },
            options: [{ ar: 'لا شيء، انتهى الطريق', en: 'Nothing; the road is over' }, { ar: 'نور هو هدي الأنبياء عليهم السلام', en: 'A light: the guidance of the prophets, peace be upon them' }, { ar: 'إصبع سادس', en: 'A sixth finger' }],
            why: { ar: 'النور فوق الإبهام هو نور الهداية التي أتى بها الأنبياء عليهم السلام، وبنورهم ورسالاتهم يُهتدى.', en: 'The light above the thumb is the light of guidance the prophets, peace be upon them, brought; by their light and their messages we are guided.' } },
          { correct: 0, q: { ar: 'لماذا لم تقل الحاجة نفيسة إنها تعرف السر؟', en: 'Why did Hajja Nafisa not say she knew the secret?' },
            options: [{ ar: 'لتحفظ السر كما حفظته دانة', en: 'To keep the secret as Dana had kept it' }, { ar: 'لأنها نسيت', en: 'She forgot' }, { ar: 'لأنها غضبت', en: 'She was angry' }],
            why: { ar: 'ستر الخير الخفي أدب جميل من الطرفين.', en: 'Keeping hidden good hidden is a fine courtesy on both sides.' } }
        ]) }
    ]
  });
  delete window.AKHLAQ_BQ;
})();


/* ───────────── الجولة التاسعة عشرة، 18 نوفمبر 2026: «للعائلة» بعد كل كتاب (family) ─────────────
 * ثلاثة أسئلة يطرحها الوالد على العشاء بعد أن ينهي الطفل الكتاب، ونشاط عائلي صغير للأسبوع.
 * الصيغة جماعية (نحن، أنتم)، فلا تحتاج ar_f. بلا مقارنة بين الإخوة، وبلا حكم على أحد.
 */
window.AKHLAQ_FAMILY = window.AKHLAQ_FAMILY || function (map) {
  (window.AKHLAQ_BOOKS || []).forEach(function (b) { if (map[b.id]) b.family = map[b.id]; });
};

window.AKHLAQ_FAMILY({
  'book-zombie': {
    q: [
      { ar: 'متى شعر طارق أنه كان «نائمًا وهو مستيقظ»؟ وهل مرّ بأحد منا يوم يشبه ذلك؟', en: 'When did Tariq feel he had been "asleep while awake"? Has any of us had a day like that?' },
      { ar: 'ماذا رأى طارق حين انقطعت الكهرباء ولم يكن رآه من قبل؟', en: 'What did Tariq see when the power went out that he had never seen before?' },
      { ar: 'ما الشيء الجميل في بيتنا أو في يومنا الذي قد نمر به دون أن ننتبه؟', en: 'What lovely thing in our home or our day might we pass without noticing?' }
    ],
    act: { ar: 'مساء بلا شاشات مرة في الأسبوع: نطفئ الأجهزة ساعة، ونجلس معًا، ويحكي كل واحد عن نعمة رآها اليوم.', en: 'One screen-free evening this week: we switch devices off for an hour, sit together, and each tells of a blessing they noticed today.' }
  },
  'book-pig': {
    q: [
      { ar: 'لماذا كان كريم يأخذ أكبر قطعة؟ وماذا شعر من حوله؟', en: 'Why did Karim take the biggest piece? How did the people around him feel?' },
      { ar: 'ما معنى «انتظر ثم انظر»؟ ومتى يمكن أن نجربها في بيتنا؟', en: 'What does "wait, then look" mean? When could we try it at home?' },
      { ar: 'ماذا فعل كريم بشطيرته في النهاية؟ وكيف شعر بعدها؟', en: 'What did Karim do with his sandwich in the end? How did he feel afterwards?' }
    ],
    act: { ar: 'صحن الوسط: في وجبة واحدة هذا الأسبوع نضع الطعام في صحن مشترك، ويبدأ كل واحد بأن يقدّم لمن بجانبه قبل نفسه.', en: 'The middle plate: at one meal this week we put the food in a shared dish, and each person serves the one beside them before themselves.' }
  },
  'book-monkey': {
    q: [
      { ar: 'ماذا حدث لسارة في المباراة حين غضبت؟ ومن تأذى دون أن تقصد؟', en: 'What happened to Sara in the match when she got angry? Who got hurt without her meaning it?' },
      { ar: 'ما الذي ساعد سارة على أن تتوقف؟ وماذا يساعد كل واحد منا حين يغضب؟', en: 'What helped Sara stop? What helps each of us when we get angry?' },
      { ar: 'لماذا كان اعتذار سارة لرنا قويًّا لا ضعيفًا؟', en: 'Why was Sara\'s apology to Rana strong, not weak?' }
    ],
    act: { ar: 'كلمة السر العائلية: نختار معًا كلمة لطيفة يقولها أي واحد منا حين يرى غيره يغضب، فنتوقف كلنا ونتنفس ثلاث مرات.', en: 'A family code word: together we choose a gentle word anyone can say when they see someone getting angry, and we all stop and take three breaths.' }
  },
  'book-human': {
    q: [
      { ar: 'لماذا نسي يحيى وعده لندى؟ وماذا شعرت ندى؟', en: 'Why did Yahya forget his promise to Nada? How did Nada feel?' },
      { ar: 'ما العادة الصغيرة التي اختارها يحيى؟ وما العادة الصغيرة التي يمكن أن يختارها كل واحد منا؟', en: 'What small habit did Yahya choose? What small habit could each of us choose?' },
      { ar: 'متى وعدنا وعدًا ووفينا به رغم أنه كان صعبًا؟', en: 'When did we make a promise and keep it even though it was hard?' }
    ],
    act: { ar: 'لوح الوعود: نكتب على ورقة في المطبخ وعدًا صغيرًا لكل فرد في العائلة هذا الأسبوع، ونضع علامة حين نفي به، بلا لوم لمن تأخر.', en: 'A promise board: on a sheet in the kitchen we write one small promise for each family member this week and tick it when kept, with no blame for anyone who is late.' }
  },
  'book-sabiq': {
    q: [
      { ar: 'لماذا كانت أسماء تطوي أوراقها ولا تخبر أحدًا؟', en: 'Why did Asma fold her notes and tell no one?' },
      { ar: 'ماذا تعلمت أسماء من السباق مع جنى؟ هل السباق إلى الخير يشبه أي سباق آخر؟', en: 'What did Asma learn from the race with Jana? Is the race to good like any other race?' },
      { ar: 'ما الخير الذي يمكن أن نفعله هذا الأسبوع قبل أن يطلبه منا أحد؟', en: 'What good could we do this week before anyone asks us?' }
    ],
    act: { ar: 'خير سري: يكتب كل واحد منا اسم فرد آخر في العائلة على ورقة مطوية، ويفعل له خيرًا خفيًّا طوال الأسبوع، ونكشف الأسماء يوم الجمعة.', en: 'Secret good: each of us draws another family member\'s name on a folded slip and does them hidden kindnesses all week; we reveal the names on Friday.' }
  }
});


window.AKHLAQ_FAMILY({
  'book-zombie-kids': {
    q: [
      { ar: 'ماذا رأت ريم حين رفعت رأسها؟', en: 'What did Reem see when she lifted her head?' },
      { ar: 'ما ثلاثة أشياء جميلة رأيناها اليوم؟ لنعدّها على أصابعنا.', en: 'What three lovely things did we see today? Let\'s count them on our fingers.' },
      { ar: 'من في بيتنا يحتاج أن نساعده كما ساعدت ريم جدتها؟', en: 'Who in our home could use our help, the way Reem helped her grandma?' }
    ],
    act: { ar: 'نزهة العيون المفتوحة: نمشي معًا مرة هذا الأسبوع، ويبحث كل واحد عن شيء جميل لم ينتبه له من قبل، ونقول عند كل شيء: الحمد لله.', en: 'An open-eyes walk: once this week we walk together, each looking for something lovely we never noticed before, and we say at each one: alhamdulillah.' }
  },
  'book-pig-kids': {
    q: [
      { ar: 'كيف شعرت لمى حين رأت الصحن فارغًا؟', en: 'How did Lama feel when she saw the plate nearly empty?' },
      { ar: 'لنلعب لعبة فارس: إلى كم نعدّ قبل أن نأخذ؟', en: 'Let\'s play Faris\'s game: how far do we count before we take?' },
      { ar: 'ماذا شعر فارس حين أعطى أخته القطعة؟', en: 'How did Faris feel when he gave his sister the piece?' }
    ],
    act: { ar: 'كعكة القسمة: نصنع معًا كعكة صغيرة أو نشتري فاكهة، ويقسمها الصغير بيده على الجميع، ويأخذ نصيبه في الآخر.', en: 'The sharing cake: we make a small cake or buy some fruit together, and the youngest shares it out by hand to everyone, taking their own piece last.' }
  },
  'book-monkey-kids': {
    q: [
      { ar: 'ماذا شعرت جود حين وقع البرج؟', en: 'How did Joud feel when the tower fell?' },
      { ar: 'ماذا فعلت جود لتهدأ؟ لنجرب معًا: نجلس، ونتنفس نفسًا طويلًا.', en: 'What did Joud do to calm down? Let\'s try together: we sit and take one long breath.' },
      { ar: 'كيف صار البرج الثاني؟ ولماذا كان أجمل؟', en: 'What was the second tower like? Why was it lovelier?' }
    ],
    act: { ar: 'برج العائلة: نبني برجًا من المكعبات أو العلب، كل واحد يضع قطعة بدوره. وإن وقع ضحكنا وقلنا: نبنيه أجمل.', en: 'The family tower: we build a tower of blocks or boxes, each adding one piece in turn. If it falls, we laugh and say: let\'s build it lovelier.' }
  },
  'book-human-kids': {
    q: [
      { ar: 'ماذا قال صالح حين رأى العم سليم؟', en: 'What did Saleh say when he saw Uncle Saleem?' },
      { ar: 'لماذا وضع صالح الإبريق بجانب الباب؟', en: 'Why did Saleh put the watering can by the door?' },
      { ar: 'من الجار الذي نحب أن نسلّم عليه أو نساعده هذا الأسبوع؟', en: 'Which neighbour would we like to greet or help this week?' }
    ],
    act: { ar: 'نبتة الوعد: نزرع معًا بذرة في كوب، ويعد كل واحد بأن يسقيها في يومه، ونرى معًا كيف تكبر حين نفي.', en: 'The promise plant: together we plant a seed in a cup; each promises to water it on their day, and we watch together how it grows when we keep our word.' }
  },
  'book-sabiq-kids': {
    q: [
      { ar: 'ماذا تضع تالا في صندوقها؟', en: 'What does Tala put in her box?' },
      { ar: 'لماذا فرحت تالا حين سبقتها هيا؟', en: 'Why was Tala happy when Haya got there first?' },
      { ar: 'ما أول خير نستطيع أن نفعله غدًا قبل أن يطلبه أحد؟', en: 'What is the first good thing we can do tomorrow before anyone asks?' }
    ],
    act: { ar: 'صندوق الخير العائلي: نصنع صندوقًا من الكرتون، ويضع فيه كل واحد حبة عن كل خير فعله قبل أن يُطلب منه، دون أن يخبر أحدًا، ونفتحه معًا آخر الأسبوع.', en: 'The family good-deeds box: we make a cardboard box, and each puts in a bean for every good thing done before being asked, telling no one; we open it together at the end of the week.' }
  }
});


window.AKHLAQ_FAMILY({
  'book-zombie-adult': {
    q: [
      { ar: 'ما أول شيء نمسكه في الصباح، وآخر شيء نراه في الليل؟ هل اخترناه نحن، أم اختارته العادة؟', en: 'What is the first thing we pick up in the morning, and the last thing we look at at night? Did we choose it, or did habit choose it for us?' },
      { ar: 'سقط جدول مازن الكبير في أربعة أيام، وبقي منه سطر واحد. ما السطر الواحد الذي يقدر عليه كل واحد منا ثلاثين ليلة؟', en: 'Mazen\'s big timetable fell apart in four days, and one line survived. What single line could each of us keep for thirty nights?' },
      { ar: 'متى أيقظتنا كلمة من أحد، ومتى جرحتنا؟ وما الفرق بين الكلمتين؟', en: 'When did someone\'s words wake us up, and when did they wound us? What made the difference?' }
    ],
    act: { ar: 'شرط الصباح ووقفة المساء: في الصباح يختار كل واحد أمرًا واحدًا يريد أن يحسنه اليوم. وقبل النوم ثلاث دقائق: خير فعلناه أولًا، ثم غفلة، ثم خطوة للغد. والكبار يبدؤون.', en: 'Morning terms and an evening pause: each morning everyone picks one thing they want to do well that day. Before sleep, three minutes: first a good thing we did, then a moment we were absent, then one step for tomorrow. The adults go first.' }
  },
  'book-pig-adult': {
    q: [
      { ar: 'أين يظهر «الشره» عند الكبار في بيتنا: في الشراء، أو الهاتف، أو غيرهما؟', en: 'Where does "greed" show among the adults in our home: shopping, the phone, or something else?' },
      { ar: 'ما الذي يؤثر في قصة الأنصاري وزوجته أكثر: العطاء من القليل، أم حفظ كرامة الضيف؟', en: 'What moves us more in the story of the Ansari and his wife: giving from little, or protecting the guest\'s dignity?' },
      { ar: 'كيف نعلّم أطفالنا القسمة دون أن نخوفهم من الطعام أو نحرمهم منه؟', en: 'How can we teach our children to share without making them afraid of food or depriving them?' }
    ],
    act: { ar: 'يوم الانتظار: قبل أي شراء غير ضروري هذا الأسبوع، ننتظر يومًا كاملًا، ونكتب ما أردناه على ورقة، ثم نرى معًا كم رغبة بقيت.', en: 'The waiting day: before any unnecessary purchase this week, we wait a full day and write the want on a slip, then see together how many wants remain.' }
  },
  'book-monkey-adult': {
    q: [
      { ar: 'ما إشارات الغضب الأولى في أجسادنا قبل أن يصل إلى ألسنتنا؟', en: 'What are the first signs of anger in our bodies before it reaches our tongues?' },
      { ar: 'أي وسيلة من وسائل التهدئة تناسب كل واحد منا: الجلوس، أو الماء، أو الاستعاذة، أو الابتعاد قليلًا؟', en: 'Which calming means suits each of us: sitting, water, seeking refuge, or stepping away a little?' },
      { ar: 'كيف نجلس مع الطفل بعد العاصفة، فنفهم ما حدث دون محاكمة؟', en: 'How do we sit with a child after the storm and understand what happened without putting them on trial?' }
    ],
    act: { ar: 'ركن الهدوء: نختار معًا مكانًا في البيت فيه وسادة وكأس ماء، يذهب إليه من يغضب، كبيرًا أو صغيرًا، ولا يتبعه أحد حتى يهدأ.', en: 'A calm corner: together we choose a spot at home with a cushion and a glass of water, where anyone who is angry, adult or child, can go, and no one follows until they have calmed down.' }
  },
  'book-human-adult': {
    q: [
      { ar: 'أي وعد قطعناه لأطفالنا ثم نسيناه؟ وكيف نعتذر عنه؟', en: 'Which promise did we make to our children and then forget? How do we apologise for it?' },
      { ar: 'أي حق من حقوق الصحبة الثمانية نحتاجه أكثر في بيتنا الآن؟', en: 'Which of the eight rights of companionship do we most need in our home right now?' },
      { ar: 'ما العادة الصغيرة الدائمة التي يمكن أن تجتمع عليها العائلة كلها؟', en: 'What small lasting habit could the whole family share?' }
    ],
    act: { ar: 'حق الأسبوع: نختار حقًّا واحدًا من حقوق الأخوة، مثل الدعاء في الغيب أو ستر العيب، ويطبقه كل واحد مع فرد آخر في العائلة.', en: 'This week\'s right: we choose one right of brotherhood, such as praying for someone in their absence or covering their faults, and each practises it with another family member.' }
  },
  'book-sabiq-adult': {
    q: [
      { ar: 'كيف نشجع الخير في بيتنا دون أن نحوله إلى نقاط ولوحات ومقارنة؟', en: 'How can we encourage good at home without turning it into points, charts and comparison?' },
      { ar: 'ما الذي يعنيه لنا أن تتعب يد فاطمة عليها السلام من العمل، ويُوجَّه قلبها إلى الذكر؟', en: 'What does it mean to us that Fatima\'s hand, peace be upon her, grew tired from work while her heart was turned to remembrance?' },
      { ar: 'لو لم يرنا أحد، أي خير كنا سنستمر فيه؟', en: 'If no one saw us, which good would we keep doing?' }
    ],
    act: { ar: 'تسبيح النوم: نجتمع هذا الأسبوع ليلة أو ليلتين قبل النوم، فنسبح ونحمد ونكبر معًا، ثم يدعو كل واحد لغيره بالاسم.', en: 'Bedtime glorification: once or twice this week we gather before sleep to glorify, praise and magnify Allah together, then each prays for someone else by name.' }
  }
});


window.AKHLAQ_FAMILY({
  'book-zombie-2': {
    q: [
      { ar: 'ماذا شعرت سلمى حين رأت رقم «وقت الشاشة»؟ وهل نعرف أرقامنا نحن الكبار والصغار؟', en: 'How did Salma feel when she saw her screen-time number? Do we know our own numbers, adults and children?' },
      { ar: 'سأل الجد سلمى: من يمسك الآخر، أنتِ أم الهاتف؟ متى نشعر نحن، الكبار والصغار، أن الهاتف هو الذي يمسكنا؟', en: 'Grandfather asked Salma: who is holding whom, you or the phone? When do we, adults and children, feel that the phone is the one holding us?' },
      { ar: 'أي قاعدة من قواعد سلمى الصغيرة نحب أن نجربها في بيتنا؟', en: 'Which of Salma\'s small rules would we like to try at home?' }
    ],
    act: { ar: 'باب الهاتف: نضع للهواتف كلها، هواتف الكبار أولًا، مكانًا خارج غرف النوم في الليل هذا الأسبوع، ونقول «بسم الله» حين نفتحها في الصباح.', en: 'The phone door: this week every phone, adults\' first, sleeps outside the bedrooms at night, and we say "Bismillah" when we open them in the morning.' }
  },
  'book-pig-2': {
    q: [
      { ar: 'لماذا لم يفرح عمّار طويلًا بالتنين الكبير؟', en: 'Why did Ammar\'s joy in the big dragon not last?' },
      { ar: 'ماذا ساعد عمّار على أن يصدق مع أمه؟ وكيف نجعل الصدق سهلًا في بيتنا؟', en: 'What helped Ammar tell his mother the truth? How can we make honesty easy at home?' },
      { ar: 'ما الحيل التي تستعملها الألعاب والإعلانات لتجعلنا نريد المزيد؟', en: 'What tricks do games and adverts use to make us want more?' }
    ],
    act: { ar: 'ورقة الانتظار: نعلّق ورقة يكتب عليها كل واحد ما يريد شراءه، ولا نشتري شيئًا منها قبل يوم كامل، ثم نشطب معًا ما ماتت رغبته.', en: 'The waiting sheet: we pin up a sheet where each writes what they want to buy; nothing on it is bought before a full day, then together we cross off the wants that faded.' }
  },
  'book-monkey-2': {
    q: [
      { ar: 'لماذا لا تعود الكلمة المرسلة في الهاتف، حتى لو حذفناها؟', en: 'Why does a sent word on a phone never come back, even if we delete it?' },
      { ar: 'ما قاعدة الدقائق الثلاث؟ ومتى كانت ستنفعنا نحن؟', en: 'What is the three-minute rule? When would it have helped us?' },
      { ar: 'كيف تحولت المجموعة نفسها من مكان للصراخ إلى مكان للخير؟', en: 'How did the same group change from a place of shouting into a place of good?' }
    ],
    act: { ar: 'رسالة لطيفة: يرسل كل واحد منا هذا الأسبوع رسالة شكر أو تشجيع لشخص في مجموعة يشارك فيها، بعد أن يقرأها مرة قبل الإرسال.', en: 'A kind message: this week each of us sends a message of thanks or encouragement to someone in a group they belong to, reading it once before sending.' }
  },
  'book-human-2': {
    q: [
      { ar: 'لماذا أراد نزار أن يعمل دون إياد؟ وماذا اكتشف معاذ عن إياد؟', en: 'Why did Nizar want to work without Iyad? What did Muadh discover about Iyad?' },
      { ar: 'كان السكوت أسهل على معاذ. لماذا تكلم؟', en: 'Silence was easier for Muadh. Why did he speak up?' },
      { ar: 'هل نعرف أحدًا في المدرسة أو الحي يجلس وحده؟ ماذا يمكن أن نفعل؟', en: 'Do we know someone at school or in the neighbourhood who sits alone? What could we do?' }
    ],
    act: { ar: 'علم في اليدين: يعلّم كل فرد في العائلة الآخرين شيئًا يحسنه بيديه، كطبخة صغيرة أو إصلاح أو رسم، فنكتشف ما لا تظهره الدرجات.', en: 'Knowledge in the hands: each family member teaches the others something they do well with their hands, a simple dish, a repair or a drawing, and we discover what grades never show.' }
  },
  'book-sabiq-2': {
    q: [
      { ar: 'لماذا لم تكتب دانة اسمها على ورقة المصباح؟', en: 'Why did Dana not write her name on the lamp\'s note?' },
      { ar: 'كيف حفظت دانة كرامة الحاجة نفيسة وهي تساعدها؟', en: 'How did Dana protect Hajja Nafisa\'s dignity while helping her?' },
      { ar: 'من في حينا أو مسجدنا قد يحتاج خيرًا خفيًّا منا؟', en: 'Who in our neighbourhood or masjid might need some hidden good from us?' }
    ],
    act: { ar: 'خير المسجد: نذهب معًا إلى المسجد هذا الأسبوع قبل الصلاة بدقائق، فنرتب الأحذية أو المصاحف، دون أن نخبر أحدًا.', en: 'Good at the masjid: this week we go together to the masjid a few minutes before prayer and tidy the shoes or the mushafs, telling no one.' }
  }
});
delete window.AKHLAQ_FAMILY;
