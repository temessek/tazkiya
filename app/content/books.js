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
            'وفي آخر العشاء دخلت الأم وقد أنهت غسل القدور، فلم تجد لنفسها إلا الفتات. ابتسمت وقالت: لا بأس، لست جائعة. وصدّقها كريم، وهو يمسح صحنه بآخر لقمة.',
            'وقبل النوم قالت له داليا: هل لاحظت أن أمي لم تأكل؟ قال: قالت إنها ليست جائعة. قالت داليا: هي دائمًا تقول ذلك. سكت كريم، ثم أطفأ النور. وبقي في الظلام يحاول أن يتذكر صحن أمه على العشاء، فلم يجد في ذاكرته إلا صحنه هو.'
          ],
          en: [
            'Karim was twelve, and he knew everything about food in his house: when the bread came out of the oven, where his mother hid the sweets, and which chair at the table got him to the plate first. His sister Dalia, who was ten, used to say laughing: Karim beats everyone to the kitchen, and beats no one to anything else.',
            'On Thursday night their mother made a big pie, cut it into eight pieces and put it in the middle of the table. Before their father had sat down, Karim reached out and took the biggest piece, then took a second one and put it on his plate just in case.',
            'His little brother Anas, who was five, came and found only small pieces left. Dalia came and found a piece with a burnt edge. She said nothing, but she gave Karim\'s plate a long look. Anas reached for Karim\'s second piece, but Karim pulled it away and said: that\'s mine, take from the plate.',
            'At the end of dinner their mother came in, having finished washing the pots, and found only crumbs for herself. She smiled and said: never mind, I\'m not hungry. Karim believed her, wiping his plate clean with his last bite.',
            'Before bed Dalia said to him: did you notice Mum didn\'t eat? He said: she said she wasn\'t hungry. Dalia said: she always says that. Karim was quiet, then turned off the light. In the dark he tried to remember his mother\'s plate at dinner, and found nothing in his memory but his own.'
          ]
        },
        quiz: Q('pig', 1, [
          { correct: 2, q: { ar: 'ماذا فعل كريم قبل أن يجلس الأب إلى المائدة؟', en: 'What did Karim do before his father sat down at the table?' },
            options: [{ ar: 'ساعد أمه في حمل الأطباق', en: 'Helped his mother carry the dishes' }, { ar: 'انتظر حتى يجلس الجميع', en: 'Waited until everyone sat down' }, { ar: 'أخذ أكبر قطعة ثم قطعة ثانية', en: 'Took the biggest piece and then a second one' }],
            why: { ar: 'هذه الدرجة الأولى في البنصر: «أنا أولًا» دائمًا.', en: 'This is the first ring-finger degree: "me first", always.' } },
          { correct: 0, q: { ar: 'ماذا وجد كريم في ذاكرته حين حاول أن يتذكر صحن أمه؟', en: 'What did Karim find in his memory when he tried to remember his mother\'s plate?' },
            options: [{ ar: 'صحنه هو، ولا شيء غيره', en: 'His own plate, and nothing else' }, { ar: 'الفتات الذي بقي لها', en: 'The crumbs left for her' }, { ar: 'القطعة المحروقة الطرف', en: 'The piece with the burnt edge' }],
            why: { ar: 'من يرى رغبته وحدها لا يبقى في ذاكرته إلا صحنه.', en: 'Someone who sees only their own wants remembers nothing but their own plate.' } }
        ]) },

      { title: { ar: 'حين يذكّره أحد', en: 'When someone reminds him' },
        body: {
          ar: [
            'في يوم السبت جاءت الخالة سعاد من السوق، تحمل أكياسًا ثقيلة في يديها، وتمشي ببطء لأن ظهرها يؤلمها. كان كريم جالسًا على الأريكة في المكان الذي يحبه، قرب المروحة، يقرأ مجلة الرسوم.',
            'دخلت الخالة ووضعت الأكياس على الأرض وتنفست بصعوبة. ولم يتحرك كريم. كان مشغولًا بصفحته، ولم يخطر له أن هذا المشهد يخصّه. كان يرى الأكياس ويرى خالته، والصورة تمر أمامه كما تمر صورة في التلفاز، لا تطلب منه شيئًا.',
            'فقالت أمه من المطبخ: يا كريم، خالتك متعبة، احمل عنها الأكياس، وقم لها عن مكانك. فقام كريم فورًا، وحمل الأكياس إلى المطبخ، وأجلس خالته في مكانه قرب المروحة. فقالت: بارك الله فيك يا حبيبي، ومسحت على رأسه.',
            'فرح كريم بالدعاء، وشعر أنه فعل شيئًا جميلًا. وقالت له داليا بعد ذلك وهي ترتب الأكياس: قمتَ حين قالت أمي. لو لم تقل، لبقيت جالسًا قرب المروحة. غضب كريم قليلًا من كلامها، ثم سكت، لأنه عرف أنه صحيح.',
            'في تلك الليلة قال في نفسه: عيناي تعملان جيدًا، فلماذا أحتاج دائمًا إلى من يقول لي؟ ثم أخذ قلمًا أزرق، وكتب على ظهر يده كلمة واحدة: انظر. وفي الصباح، وهو يغسل وجهه، رأى الكلمة على يده، فرفع عينيه عن المغسلة. كانت أمه تمر في الممر تحمل سلة الغسيل وحدها، فأخذها منها قبل أن تقول شيئًا.'
          ],
          en: [
            'On Saturday Aunt Su\'ad came back from the market carrying heavy bags in both hands, walking slowly because her back hurt. Karim was sitting on the sofa in his favourite spot by the fan, reading a comic.',
            'His aunt came in, put the bags on the floor and breathed with difficulty. Karim did not move. He was busy with his page, and it did not cross his mind that this scene had anything to do with him. He saw the bags and he saw his aunt, and the picture passed in front of him like a picture on television, asking nothing of him.',
            'His mother called from the kitchen: Karim, your aunt is tired, carry the bags for her and give her your seat. Karim got up at once, carried the bags to the kitchen, and sat his aunt down in his spot by the fan. She said: may Allah bless you, dear, and stroked his head.',
            'Karim was pleased by the du\'a and felt he had done something lovely. Afterwards Dalia said to him as she put the shopping away: you got up when Mum told you. If she hadn\'t, you\'d still be sitting by the fan. Karim was a little annoyed by what she said, then fell quiet, because he knew it was true.',
            'That night he said to himself: my eyes work fine, so why do I always need someone to tell me? Then he took a blue pen and wrote one word on the back of his hand: look. In the morning, washing his face, he saw the word on his hand and lifted his eyes from the sink. His mother was going down the hallway carrying the laundry basket on her own. He took it from her before she could say a thing.'
          ]
        },
        quiz: Q('pig', 2, [
          { correct: 1, q: { ar: 'متى قام كريم لمساعدة خالته؟', en: 'When did Karim get up to help his aunt?' },
            options: [{ ar: 'حين رآها عند الباب', en: 'When he saw her at the door' }, { ar: 'حين قالت له أمه', en: 'When his mother told him to' }, { ar: 'حين سمعها تتنفس بصعوبة', en: 'When he heard her breathing hard' }],
            why: { ar: 'هذه سمة «الكسل»: نجلس مرتاحين، ولا نرى تعب غيرنا حتى يذكّرنا أحد.', en: 'This is the «laziness» trait: we sit comfortably and do not see others getting tired until someone reminds us.' } },
          { correct: 1, q: { ar: 'ماذا كتب كريم على ظهر يده تلك الليلة؟', en: 'What did Karim write on the back of his hand that night?' },
            options: [{ ar: 'اسم خالته سعاد', en: 'His Aunt Su\'ad\'s name' }, { ar: 'كلمة واحدة: انظر', en: 'One word: look' }, { ar: 'كلمة واحدة: انتظر', en: 'One word: wait' }],
            why: { ar: 'كلمة صغيرة على اليد رفعت عينيه في الصباح، فرأى أمه وحمل عنها قبل أن تطلب.', en: 'One small word on his hand lifted his eyes in the morning, and he saw his mother and carried for her before she asked.' } }
        ]) },

      { title: { ar: 'انتظر ثم انظر', en: 'Wait, then look' },
        body: {
          ar: [
            'في الأسبوع التالي جاء جدهم لزيارتهم، وكان يحب أن يحكي لهم القصص بعد العشاء. وحين رأى كريم يمدّ يده إلى صحن الأرز قبل الجميع، ابتسم وقال: سأحكي لكم قصة صبي صغير كان يأكل مع النبي صلى الله عليه وآله وسلم.',
            'قال الجد: كان عمر بن أبي سلمة رضي الله عنه صبيًّا يتربى في بيت النبي صلى الله عليه وآله وسلم، وكانت يده تطيش في الصحن، تذهب هنا وهناك تبحث عن أطيب اللقم. فقال له النبي صلى الله عليه وآله وسلم: «يَا غُلَامُ، سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ» (صحيح البخاري 5376). وكبر عمر، وكان يقول: ما زالت تلك طريقتي في الأكل بعد ذلك اليوم.',
            'سأل أنس الصغير: ماذا يعني «مما يليك»؟ قال الجد: يعني الطرف القريب منك. خذ نصيبك من جهتك، واترك لكل واحد جهته. ولم ينظر الجد إلى كريم وهو يقول ذلك. لكن كريم نظر إلى يده، فوجدها في وسط صحن الأرز، فأرجعها إلى طرفه بهدوء.',
            'ثم علّمهم الجد لعبة سمّاها «انتظر ثم انظر»: حين تشتهي شيئًا، عُدّ إلى عشرة قبل أن تأخذه. وفي أثناء العد انظر حولك: هل أخذ الجميع؟ هل هناك من هو أتعب منك أو أجوع؟ ثم قرر.',
            'في اليوم التالي، حين وُضع صحن الفاكهة في الوسط، عدّ كريم في نفسه: واحد، اثنان، ثلاثة... ونظر. رأى أن أنس لا يصل إلى الصحن، فقرّبه إليه. ورأى أن أمه لم تجلس بعد، فترك لها أكبر برتقالة، وأخذ لنفسه برتقالة صغيرة يقشرها ببطء. ونظرت إليه أمه نظرة لم يرها منذ زمن.'
          ],
          en: [
            'The next week their grandfather came to visit, and he loved telling them stories after dinner. When he saw Karim reaching for the rice before everyone else, he smiled and said: I\'ll tell you the story of a little boy who was eating with the Prophet, peace and blessings be upon him and his family.',
            'Grandfather said: Umar ibn Abi Salama, may Allah be pleased with him, was a boy growing up in the Prophet\'s house, and his hand used to wander all over the dish, here and there, looking for the tastiest bites. So the Prophet, peace and blessings be upon him and his family, said to him, meaning: "Young man, say Allah\'s name, eat with your right hand, and eat from what is in front of you" (Sahih al-Bukhari 5376). Umar grew up, and he used to say that this stayed his way of eating from that day on.',
            'Little Anas asked: what does "from what is in front of you" mean? Grandfather said: it means the side nearest you. Take your share from your side, and leave each person their own side. Grandfather did not look at Karim as he said it. But Karim looked at his own hand, found it in the middle of the rice dish, and quietly moved it back to his side.',
            'Then Grandfather taught them a game he called "wait, then look": when you want something, count to ten before you take it. While you count, look around: has everyone had some? Is anyone more tired or hungrier than you? Then decide.',
            'The next day, when the fruit bowl was put in the middle, Karim counted to himself: one, two, three... and looked. He saw that Anas couldn\'t reach the bowl, so he moved it closer to him. He saw that his mother had not sat down yet, so he left her the biggest orange and took a small one for himself, peeling it slowly. And his mother gave him a look he had not seen in a long time.'
          ]
        },
        quiz: Q('pig', 3, [
          { correct: 0, q: { ar: 'ما معنى «كُل مما يليك» كما شرحه الجد؟', en: 'What does "eat from what is in front of you" mean, as Grandfather explained it?' },
            options: [{ ar: 'أن تأخذ من الطرف القريب منك', en: 'Take from the side nearest you' }, { ar: 'أن تأكل قبل أن يبرد الطعام', en: 'Eat before the food goes cold' }, { ar: 'أن تبدأ بأطيب اللقم قبل غيرك', en: 'Start with the tastiest bites before others' }],
            why: { ar: 'أدب الطعام يعلّم أن نرى نصيب غيرنا.', en: 'Table manners teach us to see others\' share.' } },
          { correct: 1, q: { ar: 'ماذا رأى كريم حين عدّ ونظر في لعبة «انتظر ثم انظر»؟', en: 'What did Karim see when he counted and looked in the "wait, then look" game?' },
            options: [{ ar: 'أن في الصحن برتقالة واحدة كبيرة', en: 'That there was only one big orange' }, { ar: 'أن أنس لا يصل إلى الصحن وأمه لم تجلس', en: 'That Anas couldn\'t reach the bowl and his mother hadn\'t sat down' }, { ar: 'أن البرتقال لم ينضج بعد كما يجب', en: 'That the oranges were not properly ripe yet' }],
            why: { ar: 'العد يعطي القلب وقتًا ليرى من حوله.', en: 'Counting gives the heart time to see who is around.' } }
        ]) },

      { title: { ar: 'شطيرة ياسمين', en: 'Yasmin\'s sandwich' },
        body: {
          ar: [
            'في رحلة المدرسة إلى الحديقة الكبيرة، جلس الصف كله على العشب ليأكل. فتح كريم حقيبته فوجد فيها شطيرتين من الجبن والزعتر، وهي أحب طعام إليه، وتفاحة حمراء.',
            'وكانت ياسمين، زميلته التي تجلس قريبًا منه، تبحث في حقيبتها طويلًا ثم أغلقتها بهدوء. فهم كريم أنها نسيت طعامها في البيت. لم تقل شيئًا، بل أخرجت كتابًا وتظاهرت بالقراءة، لكنها كانت تنظر إلى الأرض.',
            'شعر كريم بصوتين في داخله. صوت يقول: الشطيرتان لك، وأنت جائع، والطريق طويل. وصوت آخر يقول: انتظر ثم انظر. كان الصوت الأول أعلى، لكنه تذكّر وجه أمه أمام الفتات ليلة الجمعة، وتذكّر كيف قالت إنها ليست جائعة. وفكّر: ربما تقول ياسمين في نفسها الآن الشيء نفسه.',
            'وتذكّر آية قرأها جده في آخر تلك السهرة: ﴿وَمَنْ يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ﴾ (الحشر 59:9). وكان الجد قد قال: الشح أن تريد النفس كل شيء لها، ومن نجا منه أفلح. فقام كريم ووضع شطيرة أمام ياسمين وقال ببساطة: عندي اثنتان.',
            'نظرت إليه ياسمين متفاجئة، ثم ابتسمت وقالت: شكرًا يا كريم. وأكلا معًا وهما يتحدثان عن الطيور في البحيرة، وعن البطة التي كانت تسبح وخلفها ستة صغار. وفي طريق العودة لاحظ كريم أنه لم يعد جائعًا، مع أنه أكل نصف ما كان معه. وفي البيت سألته داليا: كيف كانت الرحلة؟ قال: أجمل رحلة، وكانت شطيرة واحدة تكفيني.'
          ],
          en: [
            'On the school trip to the big park, the whole class sat on the grass to eat. Karim opened his bag and found two cheese and za\'tar sandwiches, his favourite food, and a red apple.',
            'Yasmin, the classmate sitting near him, searched her bag for a long time and then quietly closed it. Karim understood she had left her lunch at home. She said nothing; she took out a book and pretended to read, but she was looking at the ground.',
            'Karim felt two voices inside him. One said: both sandwiches are yours, you\'re hungry, and it\'s a long way home. The other said: wait, then look. The first voice was louder, but he remembered his mother\'s face over the crumbs on Thursday night, and how she had said she wasn\'t hungry. He thought: maybe Yasmin is telling herself the same thing right now.',
            'He remembered a verse his grandfather had recited at the end of that evening, meaning: "Whoever is saved from the greed of his own soul, those are the successful" (al-Hashr 59:9). Grandfather had said: greed is the soul wanting everything for itself, and whoever is saved from it succeeds. So Karim got up, put a sandwich in front of Yasmin and said simply: I\'ve got two.',
            'Yasmin looked at him in surprise, then smiled and said: thank you, Karim. They ate together, talking about the birds on the lake, and the duck swimming with six ducklings behind her. On the way home Karim noticed he was not hungry any more, even though he had eaten half of what he had. At home Dalia asked him: how was the trip? He said: the best trip ever, and one sandwich was enough for me.'
          ]
        },
        quiz: Q('pig', 4, [
          { correct: 2, q: { ar: 'كيف عرف كريم أن ياسمين نسيت طعامها؟', en: 'How did Karim know Yasmin had forgotten her lunch?' },
            options: [{ ar: 'سمعها تقول ذلك لصديقتها', en: 'He heard her tell a friend' }, { ar: 'أخبرته المعلمة قبل الغداء', en: 'The teacher told him before lunch' }, { ar: 'رآها تغلق حقيبتها وتنظر إلى الأرض', en: 'He saw her close her bag and look at the ground' }],
            why: { ar: 'هذه الدرجة الثالثة: أرى الآخرين وحدي، دون أن يقول لي أحد.', en: 'This is the third degree: I see others on my own, without being told.' } },
          { correct: 0, q: { ar: 'ما «الشح» كما شرحه الجد؟', en: 'What is "greed of the soul" as Grandfather explained it?' },
            options: [{ ar: 'أن تريد النفس كل شيء لها', en: 'The soul wanting everything for itself' }, { ar: 'أن يأكل الإنسان قليلًا', en: 'Eating only a little' }, { ar: 'أن يخاف الإنسان أن يجوع في الطريق', en: 'Being afraid of going hungry on the way' }],
            why: { ar: 'من نجا من الشح أفلح، كما في الآية.', en: 'Whoever is saved from greed succeeds, as the verse says.' } }
        ]) },

      { title: { ar: 'النار الصغيرة', en: 'The small fire' },
        body: {
          ar: [
            'مرّ شهر، وصار كريم يرى أشياء كثيرة لم يكن يراها: يرى تعب أمه في المساء، فيرتب الأطباق قبل أن تطلب. ويرى أنس يقف عند الرف العالي، فيعطيه اللعبة التي يريدها. وصارت داليا تقول عنه: كريم صار يسبقنا إلى الخير أحيانًا.',
            'وذات ظهيرة عاد كريم من المدرسة فوجد أنس قد أخذ سيارته الجديدة، التي اشتراها بمصروف شهرين، وكسر عجلتها الأمامية. وقف كريم في باب الغرفة، وشعر بنار تصعد من صدره إلى وجهه.',
            'صرخ: هذه لي! من سمح لك؟ وانتزع السيارة من يد أنس بقوة، فسقط أنس على الأرض وبكى. ثم رفع كريم يده كأنه سيضربه، ووقفت يده في الهواء حين رأى عيني أخيه الخائفتين.',
            'جلس كريم على السرير وقلبه يدق بسرعة. قال في نفسه: تعلّمت أن أرى الناس، وأن أعطي، وأن أنتظر. فمن أين خرجت هذه النار؟ ثم جاءت أمه وجلست بجانبه، وسكتت مدة طويلة. ثم وضعت يدها على يده وقالت: رأيتُ يدك وهي تقف في الهواء. وقفت وحدها يا كريم.',
            'وبعد قليل جاء أنس ووقف عند الباب، وعيناه حمراوان، وفي يده العجلة المكسورة. مدّ كريم يده فأخذ العجلة، ومسح دموع أخيه بكمّه، وقال: سنصلحها معًا. وجلسا على الأرض مع أنبوب الصمغ. وكان كريم يمسك العجلة، ويرى يده ما زالت ترتجف قليلًا، ويسأل نفسه: هذه اليد تعلّمت أن تعطي، فمن يعلّمها أن تهدأ؟'
          ],
          en: [
            'A month went by, and Karim saw many things he had not seen before: he saw his mother\'s tiredness in the evening, and tidied the dishes before she asked. He saw Anas standing at the high shelf, and handed him the toy he wanted. Dalia began to say of him: Karim sometimes gets to the good before us now.',
            'One day Karim came home from school to find that Anas had taken his new car, which he had bought with two months of pocket money, and broken its front wheel. Karim stood in the doorway and felt a fire rising from his chest to his face.',
            'He shouted: that\'s mine! Who said you could? He snatched the car out of Anas\'s hand so hard that Anas fell to the floor and cried. Then Karim raised his hand as if to hit him, and his hand stopped in mid-air when he saw his brother\'s frightened eyes.',
            'Karim sat on the bed with his heart pounding. He said to himself: I have learned to see people, to give, and to wait. So where did this fire come from? Then his mother came and sat beside him, and was quiet for a long time. Then she put her hand on his and said: I saw your hand stop in the air. It stopped on its own, Karim.',
            'A little later Anas came and stood at the door, his eyes red, the broken wheel in his hand. Karim reached out and took the wheel, wiped his brother\'s tears with his sleeve, and said: we\'ll fix it together. They sat on the floor with a tube of glue. Karim held the wheel, saw that his hand was still trembling a little, and asked himself: this hand has learned to give, so who will teach it to be calm?'
          ]
        },
        quiz: Q('pig', 5, [
          { correct: 1, q: { ar: 'ما الذي أوقف يد كريم في آخر لحظة؟', en: 'What stopped Karim\'s hand at the last moment?' },
            options: [{ ar: 'دخول أبيه من باب البيت', en: 'His father coming in the front door' }, { ar: 'رؤية عيني أخيه الخائفتين', en: 'Seeing his brother\'s frightened eyes' }, { ar: 'صوت أمه تناديه من المطبخ', en: 'His mother calling him from the kitchen' }],
            why: { ar: 'ما تعلّمه في البنصر، أن يرى غيره، أوقفه في آخر لحظة.', en: 'What he learned on the ring finger, seeing others, stopped him at the last moment.' } },
          { correct: 0, q: { ar: 'ماذا فعل كريم حين جاء أنس بالعجلة المكسورة؟', en: 'What did Karim do when Anas came with the broken wheel?' },
            options: [{ ar: 'أخذ العجلة وقال: سنصلحها معًا', en: 'Took the wheel and said: we\'ll fix it together' }, { ar: 'أغلق الباب وطلب أن يبقى وحده', en: 'Shut the door and asked to be left alone' }, { ar: 'طلب من أمه سيارة جديدة', en: 'Asked his mother for a new car' }],
            why: { ar: 'رأى أخاه فأصلح ما بينهما. وبقي سؤال اليد التي ترتجف، وهو باب الوسطى: إمساك النفس عند الغضب.', en: 'He saw his brother and mended things between them. The trembling hand is still a question, and it is the door to the middle finger: holding yourself back in anger.' } }
        ]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-monkey', stage: 'monkey', ages: '9-14',
    title: { ar: 'سارة والرمية الحرة', en: 'Sara and the free throw' },
    chapters: [
      { title: { ar: 'المباراة', en: 'The match' },
        body: { ar: [
            'كانت سارة في الحادية عشرة، وكانت أسرع لاعبة في فريق كرة السلة في مدرستها. وكان أخوها التوأم مالك في الفريق نفسه، وصديقتهما رنا تحرس السلة. كانوا يتدربون كل يوم ثلاثاء، ويحلمون بالفوز في بطولة المدارس قبل نهاية الشهر.',
            'في مباراة التدريب الأخيرة، دفعت لاعبة من الفريق الآخر سارة بكتفها، فسقطت على الأرض. قامت سارة بسرعة، ووجهها أحمر، وصرخت: أنتِ تغشين! ثم رمت الكرة بقوة نحو الجدار، فارتدت وأصابت رنا في ذراعها. ولم تنتبه سارة لما حدث لرنا، لأن عينيها كانتا على اللاعبة التي دفعتها.',
            'صفّر المدرب وقال: توقفي يا سارة! لكن سارة لم تتوقف. ظلت تصرخ وتشير بيديها، والكلمات تخرج منها كأنها حجارة. وحاول مالك أن يمسك يدها، فدفعته وقالت: اتركني! وكان كل الفريق ينظر إليها صامتًا، حتى اللاعبات الصغيرات اللواتي كن يعددنها قدوة لهن في الملعب.',
            'أخرجها المدرب من الملعب، فجلست على المقعد تتنفس بسرعة. وبعد دقائق بردت النار، ونظرت حولها: رنا تمسك ذراعها وتعضّ شفتها من الألم، ومالك يقف بعيدًا لا ينظر إليها، واللاعبة التي دفعتها تعتذر للمدرب بهدوء.',
            'في الطريق إلى البيت لم يتكلم مالك. وفي غرفتها جلست سارة على السرير وبكت. كانت تحب رنا، وتحب أخاها، وحين تذكرت وجهيهما في الملعب لم تفهم كيف خرج منها كل ذلك. شعرت كأن شيئًا آخر أمسك يديها وفمها، وتركها هي تتفرج من بعيد. وقالت في نفسها: من الذي كان يقودني هناك؟'
          ], en: [
            'Sara was eleven, and the fastest player on her school basketball team. Her twin brother Malik was on the same team, and their friend Rana guarded the hoop. They trained every Tuesday and dreamed of winning the schools\' tournament before the end of the month.',
            'In the last practice match, a player from the other team pushed Sara with her shoulder and she fell to the floor. Sara jumped up, her face red, and shouted: you\'re cheating! Then she hurled the ball at the wall, and it bounced back and hit Rana on the arm. Sara did not even notice what had happened to Rana, because her eyes were on the player who had pushed her.',
            'The coach blew the whistle and said: stop, Sara! But Sara did not stop. She kept shouting and waving her hands, the words flying out of her like stones. Malik tried to take her hand, and she pushed him and said: leave me alone! The whole team watched her in silence, even the younger players who looked up to her on the court.',
            'The coach sent her off the court, and she sat on the bench breathing fast. After a few minutes the fire cooled, and she looked around: Rana was holding her arm and biting her lip with pain, Malik was standing far off not looking at her, and the player who had pushed her was quietly apologising to the coach.',
            'On the way home Malik did not say a word. In her room Sara sat on her bed and cried. She loved Rana, and she loved her brother, and when she remembered their faces on the court she could not understand how all of that had come out of her. It felt as if something else had taken hold of her hands and her mouth, leaving her watching from far away. She said to herself: who was driving me back there?'
          ] },
        quiz: Q('monkey', 1, [
          { correct: 1, q: { ar: 'ماذا فعلت سارة حين قال لها المدرب «توقفي»؟', en: 'What did Sara do when the coach said "stop"?' },
            options: [{ ar: 'توقفت واعتذرت للاعبة', en: 'She stopped and apologised to the player' }, { ar: 'ظلت تصرخ، ودفعت مالك', en: 'She kept shouting, and pushed Malik' }, { ar: 'خرجت من الملعب باكية', en: 'She walked off the court in tears' }],
            why: { ar: 'الاندفاع يسبق السمع: لم تسمع سارة كلمة المدرب، ولم تشعر بيد أخيها.', en: 'Impulsiveness outruns listening: Sara did not hear the coach\'s word or feel her brother\'s hand.' } },
          { correct: 0, q: { ar: 'ما السؤال الذي سألته سارة لنفسها في آخر الفصل؟', en: 'What question did Sara ask herself at the end of the chapter?' },
            options: [{ ar: 'من الذي كان يقودني هناك؟', en: 'Who was driving me back there?' }, { ar: 'لماذا دفعتني تلك اللاعبة؟', en: 'Why did that player push me?' }, { ar: 'هل سيسامحني مالك؟', en: 'Will Malik forgive me?' }],
            why: { ar: 'الغضب كان يقود، وهي تريد أن تعرف كيف تمسك المقود.', en: 'Anger was driving, and she wants to learn to take the wheel.' } }
        ]) },

      { title: { ar: 'كلمة «توقفي»', en: 'The word "stop"' },
        body: { ar: [
            'بعد العشاء طرقت الأم باب غرفة سارة، وجلست بجانبها. حكت لها سارة كل شيء، ثم قالت: أنا لا أريد أن أكون هكذا يا أمي، لكنني لا أستطيع أن أتوقف. حين أغضب يصير الأمر كأن الفرامل تعطلت.',
            'فكّرت الأم قليلًا ثم قالت: لنتفق على كلمة واحدة. حين أقول لك «توقفي»، أو يقولها المدرب أو مالك، لا تفكري في شيء. جمّدي يديك أولًا، ثم أغلقي فمك ثانية واحدة. وبعدها تكلمي كما تريدين. المهم أن تتوقف اليدان قبل كل شيء.',
            'جرّبت سارة الاتفاق في الأيام التالية. في يوم الأربعاء أخذ مالك جهاز التحكم وغيّر برنامجها، فبدأت ترفع صوتها. فقالت أمها من المطبخ: توقفي. فجمّدت سارة يديها، وكانت يدها اليمنى قد ارتفعت لتأخذ الجهاز بقوة. أنزلتها ببطء.',
            'وفي التدريب يوم الثلاثاء، أخطأت رنا تمريرة سهلة، فشعرت سارة بالنار تصعد. وقبل أن تصرخ قال مالك بهدوء: سارة، توقفي. فتوقفت. كانت النار ما تزال في صدرها، ويداها وفمها ساكنة. وبعد ثانيتين قالت لرنا: لا بأس، المرة القادمة.',
            'في طريق العودة قال مالك: لقد توقفتِ اليوم! قالت سارة: نعم، لكن لأنك قلتها لي. أريد أن أتوقف قبل أن يقولها أحد. ابتسم مالك وقال: هذه خطوة، والخطوة التي بعدها تأتي. وشعرت سارة لأول مرة منذ المباراة أن أخاها رجع قريبًا منها، فأخذت يده ومشيا معًا إلى البيت.'
          ], en: [
            'In the evening their mother knocked on Sara\'s door and sat beside her. Sara told her everything, then said: I don\'t want to be like this, Mum, but I can\'t stop. When I get angry it\'s as if the brakes have failed.',
            'Her mother thought for a moment and said: let\'s agree on one word. When I say "stop" to you, or the coach or Malik says it, don\'t think about anything. Freeze your hands first, then close your mouth for one second. After that, say whatever you like. What matters is that the hands stop before anything else.',
            'Sara tried the agreement over the next days. On Wednesday Malik took the remote and changed her programme, and she began to raise her voice. Her mother called from the kitchen: stop. Sara froze her hands; her right hand had already risen to snatch the remote. She lowered it slowly.',
            'At practice on Tuesday, Rana fumbled an easy pass, and Sara felt the fire rise. Before she could shout, Malik said quietly: Sara, stop. And she stopped. The fire was still in her chest, and her hands and mouth stayed still. After two seconds she said to Rana: never mind, next time.',
            'On the way home Malik said: you stopped today! Sara said: yes, but because you told me to. I want to stop before anyone has to say it. Malik smiled and said: that\'s one step, and the next one will come. And for the first time since the match, Sara felt her brother was close to her again, so she took his hand and they walked home together.'
          ] },
        quiz: Q('monkey', 2, [
          { correct: 2, q: { ar: 'ما الاتفاق الذي علّمته الأم لسارة؟', en: 'What agreement did her mother teach Sara?' },
            options: [{ ar: 'أن تعدّ إلى عشرة قبل أن ترد', en: 'To count to ten before answering' }, { ar: 'أن تخرج من الغرفة كلما غضبت', en: 'To leave the room whenever she got angry' }, { ar: 'أن تجمّد يديها أولًا حين تسمع «توقفي»', en: 'To freeze her hands first when she hears "stop"' }],
            why: { ar: 'إيقاف اليدين أولًا يمنع الأذى قبل أن يقع.', en: 'Stopping the hands first prevents harm before it happens.' } },
          { correct: 0, q: { ar: 'لماذا لم تكتف سارة بما حققته في التدريب؟', en: 'Why was Sara not satisfied with what she managed at practice?' },
            options: [{ ar: 'لأنها أرادت أن تتوقف قبل أن يقولها أحد', en: 'She wanted to stop before anyone had to say it' }, { ar: 'لأن رنا لم تكلمها بعد التدريب', en: 'Rana did not talk to her after practice' }, { ar: 'لأن المدرب لم يلاحظ أنها توقفت', en: 'The coach did not notice she had stopped' }],
            why: { ar: 'التوقف عند الطلب أول العلاج، والتوقف قبل الطلب أجمل منه.', en: 'Stopping when asked is where the cure begins; stopping before being asked is even better.' } }
        ]) },

      { title: { ar: 'القوي الحقيقي', en: 'The truly strong one' },
        body: { ar: [
            'في يوم الجمعة جاء عمهم يوسف، وكان مدربًا قديمًا لكرة السلة. سمع قصة المباراة، فضحك وقال: أعرف هذه النار يا سارة. كنت مثلك حين كنت صغيرًا، حتى سمعت حديثًا غيّر طريقتي في اللعب كلها.',
            'ثم قال: قال النبي صلى الله عليه وآله وسلم: «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ». والصُّرَعة هو الذي يصرع الناس كثيرًا في المصارعة. والقوة التي يمدحها الحديث أن يغلب الإنسان غضبه.',
            'قالت سارة: لكن الغضب يأتي بسرعة يا عمي، أسرع مني! فقال: لذلك علّمنا النبي صلى الله عليه وآله وسلم أن نغيّر وضع الجسد: إذا غضب أحدنا وهو قائم فليجلس، فإن ذهب عنه الغضب وإلا فليضطجع. والجلوس يُبعد اليد عن الضرب، والاضطجاع يُبعدها أكثر، والقلب يهدأ حين يهدأ الجسد.',
            'ثم علّمها العم تمرينًا سمّاه «قِف، تنفّس، اختر». قِف: جمّدي يديك وقدميك. تنفّسي: شهيق إلى أربعة وزفير إلى أربعة، ثلاث مرات. ثم اختاري: ما التصرف الذي سأفخر به بعد ساعة؟ وقال: تمرّني عليه وأنتِ هادئة، كما تتمرنين على الرمية الحرة، حتى يصير جاهزًا وقت المباراة.',
            'ففعلت سارة ذلك كل ليلة قبل النوم، وكان مالك يتمرن معها مازحًا. كانا يتخيلان موقفًا يغضبهما، ثم يقفان ويتنفسان ويختاران. وكانت رنا تضحك منهما وتقول: صرتما مثل لاعبي اليوغا! لكنها في الأسبوع الثاني صارت تتمرن معهما.'
          ], en: [
            'On Friday their uncle Yusuf came over; he had been a basketball coach years ago. He heard the story of the match, laughed and said: I know that fire, Sara. I was like you when I was young, until I heard a hadith that changed the way I played.',
            'Then he said: the Prophet, peace and blessings be upon him and his family, said, meaning: "The strong one is not the one who throws people in wrestling; the strong one is the one who controls himself when angry." The strength the hadith praises is beating your own anger.',
            'Sara said: but anger comes so fast, Uncle, faster than me! He said: that is why the Prophet, peace and blessings be upon him and his family, taught us to change the body\'s position: if one of us gets angry while standing, let him sit; if the anger goes, good, and if not, let him lie down. Sitting moves the hand further from hitting, lying down moves it further still, and the heart calms when the body does.',
            'Then her uncle taught her an exercise he called "stop, breathe, choose". Stop: freeze your hands and feet. Breathe: in for four and out for four, three times. Then choose: what will I be proud of having done an hour from now? He said: practise it while you are calm, the way you practise free throws, so it is ready during the match.',
            'So Sara did it every night before bed, and Malik practised with her, half joking. They would imagine something that made them angry, then stop, breathe and choose. Rana laughed at them and said: you look like yoga players! But in the second week she started practising with them too.'
          ] },
        quiz: Q('monkey', 3, [
          { correct: 1, q: { ar: 'من «الشديد» في الحديث الذي حكاه العم يوسف؟', en: 'Who is "the strong one" in the hadith Uncle Yusuf told?' },
            options: [{ ar: 'من يغلب الناس في المصارعة', en: 'The one who wins at wrestling' }, { ar: 'من يملك نفسه عند الغضب', en: 'The one who controls himself when angry' }, { ar: 'من لا يغضب أبدًا', en: 'The one who never gets angry' }],
            why: { ar: 'القوة الحقيقية أن تغلب غضبك.', en: 'True strength is beating your own anger.' } },
          { correct: 2, q: { ar: 'لماذا نصح العم سارة أن تتمرن وهي هادئة؟', en: 'Why did her uncle advise Sara to practise while calm?' },
            options: [{ ar: 'لأن المدرب سيسألها عنه', en: 'Because the coach would ask her about it' }, { ar: 'لأنها لا تقدر عليه وهي متعبة', en: 'Because she can\'t do it when she is tired' }, { ar: 'ليجهز وقت الغضب، كالرمية الحرة', en: 'So it is ready when anger comes, like a free throw' }],
            why: { ar: 'ما نتمرن عليه في الهدوء نجده وقت الحاجة.', en: 'What we practise in calm is there when we need it.' } }
        ]) },

      { title: { ar: 'البطولة', en: 'The tournament' },
        body: { ar: [
            'جاء يوم البطولة. كانت المدرجات مليئة بالأهالي، وكانت أم سارة ومالك تجلس في الصف الأول، ومعها العم يوسف. وفي الشوط الثاني كان الفريقان متعادلين، والوقت يقترب من نهايته. وكانت سارة تشعر بالتعب في ساقيها، وتعرف أن التعب يجعل الغضب أسرع.',
            'وفجأة دفعت لاعبة من الفريق المنافس سارة دفعة قوية، وسقطت سارة على ركبتها. وفي اللحظة نفسها شعرت بالنار المعروفة تصعد من صدرها إلى وجهها. ورأت مالك ينظر إليها من بعيد، وقد فتح فمه ليقول: توقفي.',
            'لكن سارة سبقته. قالت لنفسها في سرها: قِف. فجمّدت يديها وهي ما تزال على الأرض. ثم تنفست: شهيق إلى أربعة، وزفير إلى أربعة. وتذكّرت نصيحة عمها، فبقيت جالسة لحظة قبل أن تقوم. ثم سألت نفسها: ما الذي سأفخر به بعد ساعة؟',
            'قامت سارة، ونظرت إلى الحكمة، وقالت بصوت عادي: لقد دفعتني. فاحتسبت الحكمة رمية حرة. ووقفت سارة على الخط، وقلبها ما يزال يدق بسرعة، لكن يديها كانتا ثابتتين. ورمت، فدخلت الكرة السلة. وصفّق الجميع، وكان أعلى تصفيق من الصف الأول.',
            'فاز الفريق بنقطة واحدة. وبعد المباراة جاءت اللاعبة التي دفعتها واعتذرت، فصافحتها سارة. وجاء العم يوسف فقال: هذه المرة سبقتِ الكلمة يا سارة. أما مالك فقال ضاحكًا: كدت أقولها، لكنك كنت أسرع مني هذه المرة!'
          ], en: [
            'Tournament day came. The stands were full of families, and Sara and Malik\'s mother sat in the front row with Uncle Yusuf. In the second half the two teams were level, and time was running out. Sara felt the tiredness in her legs, and she knew that tiredness makes anger come faster.',
            'Suddenly a player from the other team gave Sara a hard push, and Sara fell on her knee. At that same moment she felt the familiar fire rising from her chest to her face. She saw Malik looking at her from across the court, his mouth already open to say: stop.',
            'But Sara got there first. She said silently to herself: stop. She froze her hands while still on the floor. Then she breathed: in for four, out for four. She remembered her uncle\'s advice and stayed sitting for a moment before getting up. Then she asked herself: what will I be proud of an hour from now?',
            'Sara got up, looked at the referee, and said in an ordinary voice: she pushed me. The referee gave a free throw. Sara stood on the line, her heart still pounding, but her hands were steady. She threw, and the ball went in. Everyone clapped, and the loudest clapping came from the front row.',
            'The team won by one point. After the match the player who had pushed her came and apologised, and Sara shook her hand. Uncle Yusuf came over and said: this time you got there before the word, Sara. And Malik said, laughing: I nearly said it, but you were faster than me this time!'
          ] },
        quiz: Q('monkey', 4, [
          { correct: 0, q: { ar: 'ما الذي اختلف في البطولة عن مباراة التدريب الأولى؟', en: 'What was different at the tournament from the first practice match?' },
            options: [{ ar: 'توقفت بنفسها قبل أن يقولها أحد', en: 'She stopped herself before anyone said it' }, { ar: 'لم تدفعها أي لاعبة هذه المرة', en: 'No player pushed her this time' }, { ar: 'قال لها مالك «توقفي» في الوقت المناسب', en: 'Malik said "stop" just in time' }],
            why: { ar: 'هذا ملك النفس قبل الطلب، وبه صار الاندفاع قوة في الملعب.', en: 'This is self-mastery before being asked, and with it the rush became strength on the court.' } },
          { correct: 1, q: { ar: 'ماذا قالت سارة للحكمة بعد أن قامت؟', en: 'What did Sara say to the referee after she got up?' },
            options: [{ ar: 'صرخت بأن المنافسة تغش', en: 'She shouted that her opponent was cheating' }, { ar: 'قالت بصوت عادي: لقد دفعتني', en: 'She said in an ordinary voice: she pushed me' }, { ar: 'سكتت وعادت إلى مكانها', en: 'She kept quiet and went back to her place' }],
            why: { ar: 'قالت سارة الحق كاملًا، بصوت لا يؤذي أحدًا.', en: 'Sara said all of what was true, in a voice that hurt no one.' } }
        ]) },

      { title: { ar: 'اعتذار لرنا', en: 'An apology to Rana' },
        body: { ar: [
            'احتفلت الأسرة بالفوز تلك الليلة، وجاءت رنا مع أمها. وحين جلست الصغيرات يأكلن الحلوى، لاحظت سارة أن رنا ما تزال تتجنب أن تقف بجانبها كثيرًا، وأن على ذراعها أثرًا أزرق صغيرًا من الكرة التي رمتها قبل أسابيع.',
            'فكّرت سارة: تعلمت أن أتوقف، وأن أهدأ، وأن أقول الحق بلا صراخ. ورنا تبتسم لي، والأثر الأزرق ما زال على ذراعها، ولم أعتذر عنه قط.',
            'فقامت سارة وأخذت رنا إلى الشرفة، وقالت لها: يا رنا، يوم المباراة الأولى رميت الكرة وأنا غاضبة، فأصابتك. لم أعتذر لك كما يجب. أنا آسفة حقًّا، ولن أرمي شيئًا بعد اليوم وأنا غاضبة. وإن رأيتِني أغضب، فقولي لي: توقفي، وسأتوقف.',
            'سكتت رنا قليلًا، ثم قالت: كنت خائفة منك بعدها، ولم أقل لأحد. لكنني رأيتك اليوم في المباراة، وعرفت أنك تغيرتِ. ثم ضحكت وقالت: والرمية الحرة كانت جميلة! وتعانقتا، ورجعتا إلى الحلوى معًا. ولاحظت سارة أن رنا صارت تجلس بجانبها، وتضحك معها كما كانت تفعل من قبل.',
            'وفي التدريب يوم الثلاثاء التالي، كانت أول كرة لمستها سارة لرنا: تمريرة هادئة من صدرها إلى يدي رنا مباشرة. التقطتها رنا وضحكت، وردّتها إليها بالطريقة نفسها. وصاح المدرب من طرف الملعب: هكذا يبدأ الفريق!'
          ], en: [
            'In the evening the family celebrated the win, and Rana came with her mother. When the girls sat eating sweets, Sara noticed that Rana still avoided standing too close to her, and that there was a small blue mark on her arm from the ball Sara had thrown weeks before.',
            'Sara thought: I\'ve learned to stop, to calm down, and to say what\'s true without shouting. Rana smiles at me, and the blue mark is still on her arm, and I never once said sorry for it.',
            'So Sara got up, took Rana out to the balcony and said: Rana, at the first match I threw the ball when I was angry and it hit you. I never apologised properly. I am truly sorry, and from today I won\'t throw anything when I\'m angry. And if you ever see me getting angry, just tell me: stop, and I will.',
            'Rana was quiet for a moment, then said: I was scared of you after that, and I didn\'t tell anyone. But I saw you at the match today and I knew you had changed. Then she laughed and said: and that free throw was lovely! They hugged and went back to the sweets together. Sara noticed that Rana sat next to her now, laughing with her as she used to before.',
            'At practice the following Tuesday, the first ball Sara touched went to Rana: a gentle chest pass, straight into Rana\'s hands. Rana caught it, laughed, and sent it back the same way. And the coach called from the side of the court: that\'s how a team begins!'
          ] },
        quiz: Q('monkey', 5, [
          { correct: 2, q: { ar: 'ما الذي جعل سارة تعتذر لرنا يوم الاحتفال؟', en: 'What made Sara apologise to Rana on the night of the celebration?' },
            options: [{ ar: 'سؤال من أم رنا عن المباراة', en: 'A question from Rana\'s mother about the match' }, { ar: 'طلب من المدرب بعد الفوز', en: 'A request from the coach after the win' }, { ar: 'الأثر الأزرق على ذراع رنا', en: 'The blue mark on Rana\'s arm' }],
            why: { ar: 'الابتسامة لم تمحُ الأثر، فأصلحت سارة ما كسرته بيدها.', en: 'The smile had not wiped out the mark, so Sara mended what her own hand had broken.' } },
          { correct: 0, q: { ar: 'لمن مرّرت سارة أول كرة في التدريب التالي؟', en: 'Who got Sara\'s first pass at the next practice?' },
            options: [{ ar: 'لرنا، تمريرة هادئة إلى يديها', en: 'Rana, a gentle pass into her hands' }, { ar: 'لمالك، تمريرة سريعة إلى السلة', en: 'Malik, a quick pass towards the hoop' }, { ar: 'للمدرب، ليبدأ التدريب', en: 'The coach, to start the session' }],
            why: { ar: 'اليد التي رمت الكرة غاضبة صارت تمررها بلطف. ومن يسلم الناس من لسانه ويده يقف عند باب السبابة.', en: 'The hand that once hurled the ball in anger now passed it gently. Whoever keeps people safe from their tongue and hand stands at the door of the index finger.' } }
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
      { title: { ar: 'مجموعة الصف', en: 'The class group' },
        body: { ar: [
            'كان يحيى في الثالثة عشرة، وفي هاتفه مجموعة لطلاب صفه يتبادلون فيها الواجبات والنكات. وفي أول الشهر جاءت إلى المدرسة طالبة جديدة اسمها زينب، تتكلم بلهجة غير لهجتهم، وتلبس نظارة سميكة.',
            'وفي المساء كتب أحد الأولاد في المجموعة نكتة عن نظارة زينب، فانهالت الوجوه الضاحكة. ثم كتب آخر نكتة عن لهجتها، ثم ثالث. وكان هشام، صديق يحيى المقرّب، أكثرهم كتابة، يرسم بنفسه صورًا مضحكة ويرسلها، فيزداد الضحك.',
            'كتب يحيى وجهًا ضاحكًا، وقبل أن يرسله توقف إصبعه. تذكّر أخته ندى، وهي في الحادية عشرة، حين انتقلت إلى مدرسة جديدة العام الماضي، وكانت تعود كل يوم باكية لأن البنات يسخرن من حقيبتها القديمة. فمسح الوجه الضاحك قبل أن يصل.',
            'وفي الصباح سأل أباه: «هل الضحك على نكتة في المجموعة أذى، مع أنني لم أكتبها؟». فقرأ له الأب قول النبي صلى الله عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ»، ثم قال: «واللسان اليوم يكتب أيضًا. والوجه الضاحك في المجموعة يجرح كما تجرح الكلمة».',
            'وفي المساء التالي بدأت نكتة جديدة. فكتب يحيى: «يا جماعة، لنتوقف. زينب جديدة، وقد تقرأ ما نكتب». سكتت المجموعة. ثم كتب هشام: «أنت جادّ؟». فكتب يحيى: «نعم». ولم يرد أحد بعدها. ووضع يحيى الهاتف على الطاولة مقلوبًا، وإصبعه ما تزال ترتجف قليلًا، وأطفأ النور.'
          ], en: [
            'Yahya was thirteen, and on his phone was a group for his classmates where they swapped homework and jokes. At the start of the month a new girl named Zaynab came to the school. She spoke with an accent different from theirs and wore thick glasses.',
            'In the evening one of the boys posted a joke in the group about Zaynab\'s glasses, and the laughing faces poured in. Then another posted a joke about her accent, then a third. Hisham, Yahya\'s closest friend, posted the most, drawing funny pictures himself and sending them, and the laughter grew.',
            'Yahya typed a laughing face, and his finger stopped before sending it. He remembered his sister Nada, who is eleven, when she moved to a new school last year and came home crying every day because the girls mocked her old schoolbag. So he deleted the laughing face before it went out.',
            'In the morning he asked his father: "Is laughing at a joke in the group hurting someone, even if I did not write it?" His father read him the words of the Prophet, peace and blessings be upon him and his family: "The Muslim is the one from whose tongue and hand the Muslims are safe." Then he said: "And today the tongue types too. A laughing face in a group wounds just as a word does."',
            'The next evening a new joke started. Yahya wrote: "Guys, let\'s stop. Zaynab is new, and she might read what we write." The group went quiet. Then Hisham wrote: "Are you serious?" Yahya wrote: "Yes." Nobody replied after that. Yahya put the phone face down on the table, his finger still trembling a little, and switched off the light.'
          ] },
        quiz: Q('human', 1, [
          { correct: 1, q: { ar: 'لماذا مسح يحيى الوجه الضاحك قبل أن يرسله؟', en: 'Why did Yahya delete the laughing face before sending it?' },
            options: [{ ar: 'لأن أباه كان ينظر إلى هاتفه', en: 'Because his father was looking at his phone' }, { ar: 'لأنه تذكّر بكاء أخته حين سخرت منها البنات', en: 'Because he remembered his sister crying when the girls mocked her' }, { ar: 'لأن هشام طلب منه ألا يضحك', en: 'Because Hisham asked him not to laugh' }],
            why: { ar: 'من يتذكر ألم غيره يكفّ أذاه.', en: 'Whoever remembers another person\'s pain holds back from hurting.' } },
          { correct: 0, q: { ar: 'كيف شرح الأب أن الحديث يشمل المجموعة على الهاتف؟', en: 'How did the father explain that the hadith includes the group on the phone?' },
            options: [{ ar: 'قال إن اللسان اليوم يكتب أيضًا، والوجه الضاحك يجرح كالكلمة', en: 'He said the tongue types too today, and a laughing face wounds like a word' }, { ar: 'قال إن الذنب على من كتب النكتة وحده، لا على من ضحك', en: 'He said the blame is only on whoever wrote the joke, not on those who laughed' }, { ar: 'قال إن الأفضل أن يخرج يحيى من المجموعة ويرتاح', en: 'He said Yahya had better leave the group and be done with it' }],
            why: { ar: 'هذه الدرجة الأولى في السبابة: كفّ الأذى باليد واللسان.', en: 'This is the first step of the index finger: holding back harm from hand and tongue.' } }
        ]) },

      { title: { ar: 'مشروع ندى', en: 'Nada\'s project' },
        body: { ar: [
            'يوم الأحد طلبت ندى من أخيها أن يساعدها في مشروع العلوم: بركان صغير من الطين يثور بالخل والصودا. فقال يحيى وعيناه على هاتفه: «حسنًا، الأربعاء بعد المدرسة. أعدك». قالها بسرعة، كما تُقال كلمات كثيرة في اليوم. ففرحت ندى، وكتبت الموعد على ورقة وألصقتها على باب الثلاجة.',
            'وجاء الأربعاء. خرج يحيى من المدرسة، فدعاه هشام ليجرّبا في بيته اللعبة الجديدة. فذهب معه، ونسي كل شيء. ولم يرجع إلا بعد المغرب، فوجد ندى جالسة إلى الطاولة، أمامها الطين وزجاجة الخل، والبركان لم يُبنَ.',
            'رفعت ندى عينيها وقالت بهدوء: «انتظرتك ثلاث ساعات». شعر يحيى بشيء ثقيل في صدره. ونظر إلى الورقة على الثلاجة، فرأى خط أخته الصغير: «الأربعاء، يحيى يساعدني». لقد وعدها بنفسه، ثم نسيها كأن الوعد لم يُقل.',
            'وتلك الليلة قال له أبوه: «الإنسان يُعرف بشيئين صغيرين: هل يسلم الناس منه؟ وهل يفي بما قال؟ والوعد الذي تحفظه دون أن يذكّرك به أحد يجعلك إنسانًا يُعتمد عليه».',
            'فقال يحيى لأخته: «أخطأت، ولا عذر عندي». وجلس معها حتى منتصف الليل يبنيان البركان. وفي الصباح ثار البركان أمام صفها، فصفّق الجميع. وفي المساء اشترى يحيى دفترًا صغيرًا، وكتب في أول صفحة: «وعود اليوم». وصار لا ينام حتى يفي بوعد يومه، أو يعتذر ويحدد موعدًا جديدًا يفي به.'
          ], en: [
            'On Sunday Nada asked her brother to help with her science project: a little clay volcano that erupts with vinegar and baking soda. Yahya said with his eyes on his phone: "Fine, Wednesday after school. I promise." He said it quickly, the way so many words get said in a day. Nada was delighted, wrote the date on a sheet of paper and stuck it on the fridge door.',
            'Wednesday came. Yahya left school, and Hisham invited him home to try the new game. He went with him and forgot everything. He did not get back until after maghrib, and found Nada sitting at the table with the clay and the bottle of vinegar in front of her, and no volcano.',
            'Nada looked up and said quietly: "I waited for you for three hours." Yahya felt something heavy in his chest. He looked at the paper on the fridge and saw his little sister\'s handwriting: "Wednesday, Yahya helps me." He had promised her himself, then forgotten as if the promise had never been spoken.',
            'That night his father told him: "A person is known by two small things: are people safe from him? And does he keep what he said? A promise you keep without anyone reminding you makes you someone people can rely on."',
            'So Yahya said to his sister: "I got it wrong, and I have no excuse." He sat with her until midnight building the volcano. In the morning it erupted in front of her class, and everyone clapped. That evening Yahya bought a small notebook and wrote on the first page: "Today\'s promises." From then on he would not sleep until he had kept the day\'s promise, or apologised and set a new time that he kept.'
          ] },
        quiz: Q('human', 2, [
          { correct: 2, q: { ar: 'لماذا لم يُبنَ البركان يوم الأربعاء؟', en: 'Why was the volcano not built on Wednesday?' },
            options: [{ ar: 'لأن ندى نسيت أن تشتري الصودا', en: 'Because Nada forgot to buy the baking soda' }, { ar: 'لأن الطين لم يجف في الوقت', en: 'Because the clay did not dry in time' }, { ar: 'لأن يحيى ذهب ليلعب ونسي وعده', en: 'Because Yahya went to play and forgot his promise' }],
            why: { ar: 'الوعد الذي يُنسى يكسر ثقة من ينتظره.', en: 'A forgotten promise breaks the trust of the one who waits.' } },
          { correct: 0, q: { ar: 'ماذا كتب يحيى في أول صفحة من دفتره الصغير؟', en: 'What did Yahya write on the first page of his small notebook?' },
            options: [{ ar: '«وعود اليوم»', en: '"Today\'s promises"' }, { ar: '«لا أنسى ندى»', en: '"Don\'t forget Nada"' }, { ar: '«مشروع البركان»', en: '"The volcano project"' }],
            why: { ar: 'صار يكتب وعوده، ولا ينام حتى يفي بها أو يعتذر ويحدد موعدًا جديدًا.', en: 'He began writing down his promises, and would not sleep until he kept them or apologised and set a new time.' } }
        ]) },

      { title: { ar: 'نافذة الجار', en: 'The neighbour\'s window' },
        body: { ar: [
            'في عطلة نهاية الأسبوع كان يحيى وهشام يلعبان الكرة في الشارع الخلفي. ركل يحيى الكرة بقوة، فطارت فوق السور وكسرت نافذة صغيرة في بيت العم منصور، الجار الكبير الذي يسكن وحده.',
            'صاح هشام: «اهرب! لم يرنا أحد!». وكاد يحيى يركض معه. ثم تذكّر الدفتر الصغير، وتذكّر وجه ندى وهي تنتظر. فوقف مكانه وقال: «أنا كسرتها، وسأخبره». فنظر إليه هشام متعجبًا، ثم رجع ووقف بجانبه.',
            'طرق يحيى باب العم منصور، وقلبه يدق بسرعة. ولما فتح الرجل الباب قال يحيى: «يا عمي، أنا آسف. ركلت الكرة فكسرت نافذتك. سأدفع ثمنها من مصروفي، وأساعدك في إصلاحها». نظر إليه العم منصور طويلًا، ثم قال: «منذ سنين لم يعتذر لي أحد بهذه الطريقة. ادخل يا بني».',
            'وفي البيت حكى يحيى لأبيه ما حدث، فذكّره الأب بوصية النبي صلى الله عليه وآله وسلم: «وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ». ثم قال مبتسمًا: «كسرتها بقدمك، وستصلحها بيديك».',
            'ويوم السبت ذهب يحيى مع أبيه، فركّبا مع العم منصور زجاجًا جديدًا. وبعد الانتهاء صنع لهما العم منصور الشاي، وحكى عن أيام شبابه حين كان يلعب الكرة في الشارع نفسه. وعند الباب أخرج من خزانته كرة جلدية قديمة، وناولها ليحيى وقال: «هذه لا تكسر النوافذ. كانت تكسر قلوب حراس المرمى».'
          ], en: [
            'At the weekend Yahya and Hisham were playing football in the back street. Yahya kicked the ball hard, and it flew over the wall and broke a small window in the house of Uncle Mansour, the elderly neighbour who lives alone.',
            'Hisham shouted: "Run! Nobody saw us!" Yahya almost ran with him. Then he remembered the little notebook, and Nada\'s face as she waited. So he stood still and said: "I broke it, and I\'m going to tell him." Hisham stared at him in surprise, then came back and stood beside him.',
            'Yahya knocked on Uncle Mansour\'s door, his heart racing. When the man opened it, Yahya said: "Uncle, I\'m sorry. I kicked the ball and broke your window. I\'ll pay for it from my pocket money, and help you fix it." Uncle Mansour looked at him for a long time, then said: "Nobody has apologised to me like that in years. Come in, son."',
            'At home Yahya told his father what had happened, and his father reminded him of the Prophet\'s counsel, peace and blessings be upon him and his family: "Follow a bad deed with a good one and it will wipe it out, and treat people with good character." Then he smiled and said: "You broke it with your foot, and you will mend it with your hands."',
            'On Saturday Yahya went with his father, and together with Uncle Mansour they fitted new glass. Afterwards Uncle Mansour made them tea and told them about his young days, when he played football in that same street. At the door he took an old leather ball out of his cupboard, handed it to Yahya and said: "This one never broke windows. It broke goalkeepers\' hearts."'
          ] },
        quiz: Q('human', 3, [
          { correct: 1, q: { ar: 'ماذا فعل يحيى بعد أن كسر النافذة؟', en: 'What did Yahya do after breaking the window?' },
            options: [{ ar: 'ركض مع هشام، ثم رجع وحده في المساء', en: 'He ran with Hisham, then came back alone in the evening' }, { ar: 'طرق الباب واعترف، وعرض أن يدفع ويساعد في الإصلاح', en: 'He knocked, owned up, and offered to pay and help with the repair' }, { ar: 'ترك ورقة اعتذار تحت باب العم منصور', en: 'He left an apology note under Uncle Mansour\'s door' }],
            why: { ar: 'من أخطأ وقف مكانه، واعترف، وعرض أن يصلح.', en: 'Whoever makes a mistake stays put, owns it, and offers to put it right.' } },
          { correct: 2, q: { ar: 'كيف عمل يحيى بوصية «وأتبع السيئة الحسنة تمحها»؟', en: 'How did Yahya act on the counsel "follow a bad deed with a good one"?' },
            options: [{ ar: 'دفع ثمن الزجاج، ثم ترك لعب الكرة في الشارع', en: 'He paid for the glass, then gave up playing football in the street' }, { ar: 'اعتذر للعم منصور، ثم انتظر أن يسامحه', en: 'He apologised to Uncle Mansour, then waited to be forgiven' }, { ar: 'اعترف، ثم ساعد بيديه في تركيب الزجاج الجديد', en: 'He owned up, then helped fit the new glass with his own hands' }],
            why: { ar: 'الحسنة بعد الخطأ تمحوه، وقد فتحت هنا بابًا لصداقة جديدة.', en: 'A good deed after a mistake wipes it out, and here it opened the door to a new friendship.' } }
        ]) },

      { title: { ar: 'العادة الصغيرة', en: 'The small habit' },
        body: { ar: [
            'بعد أسابيع زار يحيى العم منصور مرة أخرى، فوجده يحاول أن يقرأ رسالة من البنك بعينين متعبتين. قال العم: «صارت الحروف صغيرة جدًّا يا بني». فقرأها يحيى له بصوت واضح، وشرح ما فيها، وكتب له رقم الهاتف الذي يتصل به بخط كبير.',
            'وفي الطريق إلى البيت فكّر يحيى: «ماذا لو فعلت هذا كل أسبوع؟ لم يطلبه مني أحد، ولن يعرفه أحد. والعم منصور وحده، ولا أحد يقرأ له». فقرر أن يزوره كل سبت بعد العصر، ولو نصف ساعة.',
            'وتذكّر حديثًا قرأه في كتاب المدرسة: «أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ تَعَالَى أَدْوَمُهَا وَإِنْ قَلَّ». فقال في نفسه: «شيء صغير أداوم عليه، أحسن من شيء ضخم أفعله مرة ثم أتعب».',
            'في السبت الأول قرأ له الجريدة. وفي الثاني ساعده في ري النباتات على الشرفة. وفي الثالث جاءت ندى معه، وصنعت للعم منصور بطاقة ملونة كتبت عليها: «جارنا العزيز». فعلّقها العم منصور على الحائط، وصار يريها لكل من يزوره.',
            'وفي السبت الرابع كانت المباراة على التلفاز، ويحيى متعب، ولن يعرف أحد إن لم يذهب. وقف عند الباب طويلًا، ثم قال لأبيه: «كأن الواجب أرض، والخير الزائد درج أصعد عليه. واليوم الدرجة ثقيلة». فضحك أبوه. ولبس يحيى حذاءه، وأخذ الجريدة تحت ذراعه، ونزل الدرج.'
          ], en: [
            'A few weeks later Yahya visited Uncle Mansour again, and found him trying to read a letter from the bank with tired eyes. "The letters have got so small, son," he said. So Yahya read it to him in a clear voice, explained what it said, and wrote the phone number he needed to call in big handwriting.',
            'On the way home Yahya thought: "What if I did this every week? Nobody asked me, and nobody will know. But Uncle Mansour is alone, and there is no one to read to him." So he decided to visit him every Saturday after asr, even for half an hour.',
            'He remembered a hadith he had read in his school book: "The deeds most beloved to Allah are the most constant, even if they are small." He said to himself: "Something small I keep doing is better than something huge I do once and then tire of."',
            'On the first Saturday he read him the newspaper. On the second he helped him water the plants on the balcony. On the third Nada came along and made Uncle Mansour a colourful card that said: "Our dear neighbour." Uncle Mansour hung it on the wall and showed it to everyone who visited.',
            'On the fourth Saturday the match was on television, Yahya was tired, and nobody would know if he stayed home. He stood at the door for a long time, then said to his father: "It is as if duty were the ground, and extra good a staircase I climb. Today the step is heavy." His father laughed. Yahya put on his shoes, tucked the newspaper under his arm, and went down the stairs.'
          ] },
        quiz: Q('human', 4, [
          { correct: 0, q: { ar: 'لماذا اختار يحيى عملًا صغيرًا يداوم عليه بدل عمل كبير مرة واحدة؟', en: 'Why did Yahya choose a small deed to keep up rather than a big one done once?' },
            options: [{ ar: 'لأن أحب الأعمال إلى الله أدومها وإن قل', en: 'Because the deeds most beloved to Allah are the most constant, even if small' }, { ar: 'لأن العم منصور طلب منه أن يأتي كل أسبوع', en: 'Because Uncle Mansour asked him to come every week' }, { ar: 'لأن أباه وعده بهدية إن داوم', en: 'Because his father promised him a gift if he kept it up' }],
            why: { ar: 'القليل الدائم يبني الإنسان.', en: 'Small and constant builds a person.' } },
          { correct: 1, q: { ar: 'ماذا قصد يحيى بقوله «الواجب أرض، والخير الزائد درج»؟', en: 'What did Yahya mean by "duty is the ground, and extra good is a staircase"?' },
            options: [{ ar: 'أن الواجب يكفي، ولا حاجة إلى زيادة عليه', en: 'That duty is enough, with no need for anything more' }, { ar: 'أن الواجب أساس يقف عليه، والخير الزائد يرفعه', en: 'That duty is the base he stands on, and extra good lifts him higher' }, { ar: 'أن الخير الزائد أهم من أداء الواجب', en: 'That extra good matters more than doing one\'s duty' }],
            why: { ar: 'هذه الدرجة الثالثة في السبابة: إحسان زائد على الواجب، ولو ثقل في بعض الأيام.', en: 'This is the third step of the index finger: good beyond duty, even on the days it feels heavy.' } }
        ]) },

      { title: { ar: 'زينب في الساحة', en: 'Zaynab in the playground' },
        body: { ar: [
            'في آخر الفصل الدراسي لاحظ يحيى أن زينب ما تزال تجلس وحدها في الاستراحة. توقفت النكات في المجموعة منذ تلك الليلة، ولم يقترب منها أحد. كانت تأكل طعامها ببطء، وتقرأ كتابًا، وترفع عينيها أحيانًا نحو الأولاد الذين يلعبون.',
            'قال يحيى في نفسه: «لم أؤذها، وطلبت من الآخرين أن يتوقفوا. فهل يكفي هذا؟». ثم تذكّر العم منصور قبل السبت الأول: ما كان أحد يؤذيه، وكان وحيدًا.',
            'وفي اليوم التالي، قبل أن يطلب منه أحد، أخبر ندى عن زينب، وطلب منها أن تعرّفها على صديقاتها في المكتبة، لأن زينب تحب القراءة. ثم ذهب إلى هشام وقال: «زينب تحل مسائل الرياضيات الصعبة. تعال نسألها عن المسألة السابعة».',
            'تردد هشام، ثم ذهب معه. وجلسوا ثلاثتهم يحلّون المسائل، وزينب تشرح ببطء وصبر. وفي آخر الاستراحة قال هشام لها بصوت منخفض: «أنا آسف على ما كتبته في المجموعة». فابتسمت زينب وقالت: «شكرًا لأنكم جلستم معي».',
            'وفي الغد سبقتهم زينب إلى الطاولة، وفتحت دفترها على المسألة الثامنة. ونظر يحيى حوله، فرأى ولدًا من الصف الآخر يقف وحده عند السور، ويداه في جيبيه. فقام إليه وقال: «تعال، نحتاج رأسًا رابعًا لهذه المسألة».'
          ], en: [
            'At the end of term Yahya noticed that Zaynab still sat alone at break. The jokes in the group had stopped since that night, and nobody had come near her. She ate her lunch slowly, read a book, and now and then looked up at the children playing.',
            'Yahya said to himself: "I did not hurt her, and I asked the others to stop. Is that enough?" Then he remembered Uncle Mansour before that first Saturday: nobody was hurting him, and he was lonely.',
            'The next day, before anyone asked him, he told Nada about Zaynab and asked her to introduce her to her friends in the library, since Zaynab loves reading. Then he went to Hisham and said: "Zaynab can solve the hard maths problems. Come on, let\'s ask her about number seven."',
            'Hisham hesitated, then went with him. The three of them sat solving problems, with Zaynab explaining slowly and patiently. At the end of break Hisham said to her in a low voice: "I\'m sorry for what I wrote in the group." Zaynab smiled and said: "Thank you for sitting with me."',
            'The next day Zaynab got to the table before them and opened her notebook at problem eight. Yahya looked around and saw a boy from the other class standing alone by the wall, hands in his pockets. He went over to him and said: "Come on, we need a fourth head for this one."'
          ] },
        quiz: Q('human', 5, [
          { correct: 2, q: { ar: 'ما الذي جعل يحيى يسأل نفسه إن كان «ألا يؤذي» يكفي؟', en: 'What made Yahya ask himself whether "not hurting" was enough?' },
            options: [{ ar: 'أن ندى أخبرته أن زينب حزينة', en: 'Nada told him Zaynab was sad' }, { ar: 'أن المعلمة طلبت منه أن يرافقها', en: 'The teacher asked him to keep her company' }, { ar: 'أنه تذكّر العم منصور: ما كان أحد يؤذيه، وكان وحيدًا', en: 'He remembered Uncle Mansour: nobody was hurting him, and he was lonely' }],
            why: { ar: 'السبابة ألا تؤذي، والإبهام أن تبادر بالخير.', en: 'The index finger is not hurting; the thumb is reaching out with good first.' } },
          { correct: 0, q: { ar: 'ماذا فعل يحيى حين رأى ولدًا يقف وحده عند السور؟', en: 'What did Yahya do when he saw a boy standing alone by the wall?' },
            options: [{ ar: 'دعاه ليجلس معهم ويحل المسألة', en: 'He invited him to sit with them and solve the problem' }, { ar: 'أخبر المعلم ليبحث له عن أصدقاء', en: 'He told the teacher to find him some friends' }, { ar: 'انتظر أن يقترب الولد وحده', en: 'He waited for the boy to come over by himself' }],
            why: { ar: 'سبق يحيى إلى الخير قبل أن يُطلب منه، وهذا أول باب الإبهام.', en: 'Yahya reached out with good before anyone asked him, and that is the first door of the thumb.' } }
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
        body: { ar: ['صنعت ماما كعكة بالشوكولاتة، ووضعتها على الطاولة.', 'ركض فارس وأخذ أكبر قطعة.', 'ثم أخذ قطعة ثانية، وقال: «كلها لي!».', 'وجلست القطة على الكرسي تنظر إليه، وذيلها يتحرك يمينًا ويسارًا.'],
          en: ['Mama made a chocolate cake and put it on the table.', 'Faris ran and took the biggest piece.', 'Then he took a second piece and said: "It\'s all mine!"', 'The cat sat on a chair watching him, her tail swishing left and right.'] },
        quiz: Q('pig-kids', 1, [{ correct: 2, q: { ar: 'ماذا قال فارس حين أخذ القطعة الثانية؟', en: 'What did Faris say when he took the second piece?' },
          options: [{ ar: 'تفضلوا', en: 'Help yourselves' }, { ar: 'شكرًا يا ماما', en: 'Thank you, Mama' }, { ar: 'كلها لي!', en: 'It\'s all mine!' }],
          why: { ar: '«كلها لي» صوت «أنا أولًا»، أول سلوكيات البنصر.', en: '"It\'s all mine" is the voice of "me first", the first ring-finger behaviour.' } }]) },
      { title: { ar: 'صحن أخته', en: 'His sister\'s plate' },
        body: { ar: ['جاءت أخته الصغيرة لمى تركض: «كعكة!».', 'ثم وقفت. في الصحن قطعة صغيرة جدًّا.', 'نظرت لمى إلى صحن فارس، وسكتت، وعيناها حزينتان.', 'وأمسكت القطعة الصغيرة بأصابعها، ولم تأكلها.'],
          en: ['His little sister Lama came running: "Cake!"', 'Then she stopped. On the plate was one tiny piece.', 'Lama looked at Faris\'s plate and said nothing, her eyes sad.', 'She held the tiny piece in her fingers, and did not eat it.'] },
        quiz: Q('pig-kids', 2, [{ correct: 1, q: { ar: 'كيف شعرت لمى حين رأت الصحن؟', en: 'How did Lama feel when she saw the plate?' },
          options: [{ ar: 'فرحت وضحكت', en: 'Happy, and she laughed' }, { ar: 'حزنت وسكتت', en: 'Sad, and she went quiet' }, { ar: 'غضبت وصرخت', en: 'Cross, and she shouted' }],
          why: { ar: 'حين نأخذ كل شيء، يحزن غيرنا.', en: 'When we take everything, others feel sad.' } }]) },
      { title: { ar: 'انتظر وانظر', en: 'Wait and look' },
        body: { ar: ['جلست ماما بجانب فارس وقالت: «لنلعب لعبة».', '«قبل أن تأخذ شيئًا، عُدّ على أصابعك إلى عشرة».', '«وفي أثناء العدّ، انظر حولك: هل أخذ الجميع؟».', 'رفع فارس أصابعه العشرة وقال: «هذه لعبة سهلة!».'],
          en: ['Mama sat beside Faris and said: "Let\'s play a game."', '"Before you take something, count to ten on your fingers."', '"And while you count, look around: has everyone had some?"', 'Faris held up all ten fingers and said: "That\'s an easy game!"'] },
        quiz: Q('pig-kids', 3, [{ correct: 0, q: { ar: 'إلى كم يعدّ فارس قبل أن يأخذ؟', en: 'How far does Faris count before he takes?' },
          options: [{ ar: 'إلى عشرة', en: 'To ten' }, { ar: 'إلى ثلاثة', en: 'To three' }, { ar: 'إلى عشرين', en: 'To twenty' }],
          why: { ar: 'العدّ يعطينا وقتًا لنرى غيرنا.', en: 'Counting gives us time to see others.' } }]) },
      { title: { ar: 'واحدة لي وواحدة لكِ', en: 'One for me, one for you' },
        body: { ar: ['عدّ فارس على أصابعه: واحد، اثنان، ثلاثة... عشرة.', 'ونظر حوله، فرأى صحن لمى، وفيه القطعة الصغيرة.', 'فأعطاها قطعته الثانية وقال: «هذه لكِ».', 'ضحكت لمى، وعلى أنفها نقطة شوكولاتة.', 'فضحك فارس معها، وضحكت ماما من المطبخ.'],
          en: ['Faris counted on his fingers: one, two, three... ten.', 'He looked around and saw Lama\'s plate, with the tiny piece on it.', 'So he gave her his second piece and said: "This is for you."', 'Lama laughed, with a dot of chocolate on her nose.', 'Faris laughed with her, and Mama laughed in the kitchen.'] },
        quiz: Q('pig-kids', 4, [{ correct: 2, q: { ar: 'ماذا أعطى فارس لأخته؟', en: 'What did Faris give his sister?' },
          options: [{ ar: 'القطعة الصغيرة الباقية', en: 'The tiny piece that was left' }, { ar: 'سيارته الحمراء الصغيرة', en: 'His little red car' }, { ar: 'قطعته الثانية من الكعكة', en: 'His second piece of cake' }],
          why: { ar: 'العطاء يجعل القلبين يضحكان.', en: 'Giving makes two hearts laugh.' } }]) },
      { title: { ar: 'السيارة الحمراء', en: 'The red car' },
        body: { ar: ['في المساء أخذت لمى سيارة فارس الحمراء.', 'شعر فارس بشيء حار في صدره، وأراد أن يصرخ: «هذه لي!».', 'فعدّ على أصابعه إلى عشرة، والشيء الحار ما زال هناك.', 'ركض إلى ماما وقال: «العدّ لا يطفئه!».', 'ضمّته ماما وقالت: «لهذا الشيء الحار لعبة أخرى. غدًا نتعلمها معًا».'],
          en: ['In the evening Lama took Faris\'s red car.', 'Faris felt something hot in his chest and wanted to shout: "That\'s mine!"', 'So he counted to ten on his fingers, and the hot thing was still there.', 'He ran to Mama and said: "Counting doesn\'t put it out!"', 'Mama hugged him and said: "That hot thing has a different game. We\'ll learn it together tomorrow."'] },
        quiz: Q('pig-kids', 5, [{ correct: 1, q: { ar: 'ماذا فعل فارس حين شعر بالشيء الحار في صدره؟', en: 'What did Faris do when he felt the hot thing in his chest?' },
          options: [{ ar: 'صرخ عليها وأخذ منها السيارة', en: 'Shouted at her and grabbed the car back' }, { ar: 'عدّ إلى عشرة وركض إلى ماما', en: 'Counted to ten and ran to Mama' }, { ar: 'بكى ونام على الكنبة حزينًا', en: 'Cried and fell asleep on the sofa, sad' }],
          why: { ar: 'أمسك فارس صرخته، وجاء يسأل. وإمساك النفس عند الغضب باب الوسطى، الإصبع التالي.', en: 'Faris held his shout back and came to ask. Holding yourself back in anger is the door to the middle finger, the next one.' } }]) }
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
        body: { ar: [
            'بنت جود برجًا من المكعبات: أحمر، ثم أزرق، ثم أصفر.',
            'ووقفت على أطراف أصابعها، ووضعت المكعب الأخير.',
            'صار البرج أطول منها!',
            'صفّقت جود وقالت: «انظروا إلى برجي!».'
          ], en: [
            'Joud built a tower of blocks: red, then blue, then yellow.',
            'She stood on tiptoe and put on the very last block.',
            'The tower was taller than her!',
            'Joud clapped and said: "Look at my tower!"'
          ] },
        quiz: Q('monkey-kids', 1, [
          { correct: 1, q: { ar: 'كيف وضعت جود المكعب الأخير؟', en: 'How did Joud put on the last block?' },
            options: [{ ar: 'صعدت على كرسي المطبخ', en: 'She climbed on a kitchen chair' }, { ar: 'وقفت على أطراف أصابعها', en: 'She stood on tiptoe' }, { ar: 'رفعها أبوها إلى أعلى', en: 'Her father lifted her up high' }],
            why: { ar: 'تعبت جود في برجها حتى صار أطول منها، ففرحت به.', en: 'Joud worked on her tower until it was taller than her, so she was proud of it.' } }
        ]) },

      { title: { ar: 'طاخ!', en: 'Crash!' },
        body: { ar: [
            'جاء أخوها الصغير عمر يحبو، ومدّ يده إلى المكعب الأحمر.',
            'طاخ! وقع البرج كله على الأرض.',
            'ضحك عمر وصفّق: «طاخ! طاخ!».',
            'احمرّ وجه جود، ورفعت يدها لتضربه.'
          ], en: [
            'Her little brother Omar crawled over and reached for the red block.',
            'Crash! The whole tower fell to the floor.',
            'Omar laughed and clapped: "Crash! Crash!"',
            'Joud\'s face went red, and she raised her hand to hit him.'
          ] },
        quiz: Q('monkey-kids', 2, [
          { correct: 2, q: { ar: 'ماذا أرادت جود أن تفعل حين وقع البرج؟', en: 'What did Joud want to do when the tower fell?' },
            options: [{ ar: 'أن تبنيه من جديد', en: 'Build it again' }, { ar: 'أن تنادي أمها', en: 'Call her mother' }, { ar: 'أن تضرب أخاها', en: 'Hit her brother' }],
            why: { ar: 'الغضب يجعل اليد تسبق القلب.', en: 'Anger makes the hand move before the heart thinks.' } }
        ]) },

      { title: { ar: 'توقّفي', en: 'Stop' },
        body: { ar: [
            'وفي الهواء توقفت يد جود.',
            'تذكرت كلمة أبيها: «إذا غضبتِ وأنتِ واقفة، فاجلسي».',
            'فأنزلت يدها، وجلست على الأرض.',
            'وأخذت نفسًا طويلًا، ونفخته ببطء، وقالت: «أعوذ بالله من الشيطان الرجيم».'
          ], en: [
            'Joud\'s hand stopped in mid-air.',
            'She remembered her father\'s words: "If you get angry while you are standing, sit down."',
            'So she lowered her hand and sat on the floor.',
            'She took a long breath, blew it out slowly, and said: "I seek refuge in Allah from the accursed devil."'
          ] },
        quiz: Q('monkey-kids', 3, [
          { correct: 1, q: { ar: 'ماذا فعلت جود لتهدأ؟', en: 'What did Joud do to calm down?' },
            options: [{ ar: 'ركضت إلى غرفتها وأغلقت الباب', en: 'She ran to her room and shut the door' }, { ar: 'جلست وتنفست واستعاذت بالله', en: 'She sat, breathed and sought refuge in Allah' }, { ar: 'جمعت المكعبات وخبأتها عن عمر', en: 'She gathered the blocks and hid them from Omar' }],
            why: { ar: 'الجلوس والنفَس الطويل وذكر الله تطفئ نار الغضب، كما علّمنا النبي صلى الله عليه وآله وسلم.', en: 'Sitting, a long breath and remembering Allah put out the fire of anger, as the Prophet, peace and blessings be upon him and his family, taught us.' } }
        ]) },

      { title: { ar: 'عمر يقلّد جود', en: 'Omar copies Joud' },
        body: { ar: [
            'نظر عمر إلى أخته، ثم جلس مثلها على الأرض.',
            'ونفخ خدّيه، ونفخ نفسًا طويلًا مثلها: «فوووو!».',
            'ضحكت جود، وقالت في نفسها: «عمر صغير، يظن البرج لعبة طاخ».',
            'ثم قالت له بصوت هادئ: «تعال نبنيه معًا».'
          ], en: [
            'Omar looked at his sister, then sat on the floor just like her.',
            'He puffed out his cheeks and blew a long breath, just like her: "Fooooo!"',
            'Joud laughed, and said to herself: "Omar is little. He thinks the tower is a crash game."',
            'Then she said to him in a calm voice: "Come, let\'s build it together."'
          ] },
        quiz: Q('monkey-kids', 4, [
          { correct: 0, q: { ar: 'ماذا فعل عمر حين جلست جود وتنفست؟', en: 'What did Omar do when Joud sat and breathed?' },
            options: [{ ar: 'جلس مثلها ونفخ خدّيه', en: 'He sat like her and puffed his cheeks' }, { ar: 'أخذ المكعب الأحمر وهرب', en: 'He took the red block and crawled off' }, { ar: 'بكى ونادى أمه', en: 'He cried and called for Mum' }],
            why: { ar: 'الصغار يقلّدون ما يرون. رأى عمر أخته تهدأ، فهدأ مثلها.', en: 'Little ones copy what they see. Omar saw his sister calm down, and calmed down like her.' } }
        ]) },

      { title: { ar: 'برج أجمل', en: 'A lovelier tower' },
        body: { ar: [
            'بنى الاثنان برجًا جديدًا: مكعب من جود، ومكعب من عمر.',
            'وفي الأعلى وضع عمر المكعب الأحمر.',
            'ثم مدّ يده إليه من جديد، ونظر إلى جود.',
            'رفعت جود إصبعها وقالت ضاحكة: «لا طاخ هذه المرة!».',
            'فسحب عمر يده، وصفّق للبرج.'
          ], en: [
            'The two of them built a new tower: one block from Joud, one block from Omar.',
            'At the very top, Omar put the red block.',
            'Then he reached out for it again, and looked at Joud.',
            'Joud raised a finger and said, laughing: "No crash this time!"',
            'So Omar pulled his hand back, and clapped for the tower.'
          ] },
        quiz: Q('monkey-kids', 5, [
          { correct: 2, q: { ar: 'ماذا وضع عمر في أعلى البرج الجديد؟', en: 'What did Omar put at the top of the new tower?' },
            options: [{ ar: 'المكعب الأصفر', en: 'The yellow block' }, { ar: 'المكعب الأزرق', en: 'The blue block' }, { ar: 'المكعب الأحمر', en: 'The red block' }],
            why: { ar: 'أمسكت جود يدها، فبنت مع أخيها برجًا أجمل. ومن يسلم الناس من يده يقف عند باب السبابة.', en: 'Joud held her hand back and built a lovelier tower with her brother. Whoever keeps others safe from their hand stands at the door of the index finger.' } }
        ]) }
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
        body: { ar: [
            'في الصباح خرج صالح مع أبيه إلى المخبز.',
            'وأمام البيت المجاور رأى العم سليم جالسًا على كرسيه الأخضر، وعصاه بجانبه.',
            'قال صالح بصوت واضح: «السلام عليكم يا عم سليم!».',
            'فابتسم العم سليم وقال: «وعليكم السلام يا صالح. صوتك أيقظ العصافير!».',
            'ونظر صالح إلى الشجرة، فطارت منها ثلاثة عصافير.'
          ], en: [
            'In the morning Saleh went out with his father to the bakery.',
            'In front of the house next door he saw Uncle Saleem sitting on his green chair, with his walking stick beside him.',
            'Saleh said in a clear voice: "As-salamu alaykum, Uncle Saleem!"',
            'Uncle Saleem smiled and said: "Wa alaykum as-salam, Saleh. Your voice woke up the sparrows!"',
            'Saleh looked up at the tree, and three sparrows flew out of it.'
          ] },
        quiz: Q('human-kids', 1, [
          { correct: 0, q: { ar: 'ماذا قال العم سليم عن صوت صالح؟', en: 'What did Uncle Saleem say about Saleh\'s voice?' },
            options: [{ ar: 'أيقظ العصافير', en: 'It woke up the sparrows' }, { ar: 'عالٍ جدًّا في الصباح', en: 'It is too loud in the morning' }, { ar: 'يشبه صوت أبيه', en: 'It sounds like his father\'s' }],
            why: { ar: 'سلّم صالح بصوت واضح، ففرح جاره وضحك.', en: 'Saleh greeted him in a clear voice, and his neighbour was glad and laughed.' } }
        ]) },

      { title: { ar: 'الأكياس الثقيلة', en: 'The heavy bags' },
        body: { ar: [
            'وفي طريق العودة رأى صالح العم سليم يمشي ببطء، وفي يديه أكياس ثقيلة من السوق.',
            'قال صالح: «يا بابا، هل نساعده؟».',
            'فحمل الأب كيسين كبيرين، وحمل صالح كيسًا صغيرًا فيه خبز ساخن.',
            'وكانت رائحة الخبز طيبة جدًّا، فقرقرت بطن صالح: قررر!',
            'ضحك العم سليم، وأعطاه رغيفًا صغيرًا وقال: «هذا لأقوى حمّال في الحي».'
          ], en: [
            'On the way back Saleh saw Uncle Saleem walking slowly, with heavy bags from the market in his hands.',
            'Saleh said: "Dad, shall we help him?"',
            'So his father carried two big bags, and Saleh carried a small bag of warm bread.',
            'The bread smelled so good that Saleh\'s tummy rumbled: grrrr!',
            'Uncle Saleem laughed, gave him a small loaf and said: "This is for the strongest carrier on our street."'
          ] },
        quiz: Q('human-kids', 2, [
          { correct: 0, q: { ar: 'ماذا كان في الكيس الذي حمله صالح؟', en: 'What was in the bag Saleh carried?' },
            options: [{ ar: 'خبز ساخن', en: 'Warm bread' }, { ar: 'برتقال وتفاح', en: 'Oranges and apples' }, { ar: 'علب حليب', en: 'Cartons of milk' }],
            why: { ar: 'حمل صالح كيسًا صغيرًا بقدر يديه، وساعد بما يستطيع.', en: 'Saleh carried a small bag his hands could manage, and helped as much as he could.' } }
        ]) },

      { title: { ar: 'وعد صالح', en: 'Saleh\'s promise' },
        body: { ar: [
            'عند الباب قال العم سليم: «شكرًا يا صالح. هل تسقي زهوري غدًا؟ سأذهب إلى الطبيب».',
            'قال صالح: «نعم، أعدك!».',
            'وفي الليل أخذ صالح إبريق الماء الصغير الأخضر.',
            'ووضعه بجانب الباب، وقال: «هنا، حتى لا أنسى».'
          ], en: [
            'At the door Uncle Saleem said: "Thank you, Saleh. Will you water my flowers tomorrow? I am going to the doctor."',
            'Saleh said: "Yes, I promise!"',
            'At night Saleh took his little green watering can.',
            'He put it by the front door and said: "Here, so I don\'t forget."'
          ] },
        quiz: Q('human-kids', 3, [
          { correct: 1, q: { ar: 'لماذا وضع صالح الإبريق بجانب الباب؟', en: 'Why did Saleh put the watering can by the door?' },
            options: [{ ar: 'لأن أمه طلبت ذلك', en: 'Because his mother asked him to' }, { ar: 'حتى لا ينسى وعده', en: 'So he would not forget his promise' }, { ar: 'ليملأه بالماء في الصباح', en: 'To fill it with water in the morning' }],
            why: { ar: 'من يحب الوفاء يستعد له من الليل.', en: 'Someone who loves keeping promises gets ready the night before.' } }
        ]) },

      { title: { ar: 'الكرتون أم الوعد؟', en: 'Cartoons or the promise?' },
        body: { ar: [
            'في الصباح كان الكرتون المفضّل على الشاشة.',
            'قال صالح: «حلقة واحدة فقط، ثم أذهب».',
            'ثم مرّت القطة عند الباب، فوقع الإبريق: طنننن!',
            'نظر صالح إلى الإبريق، وتذكّر العم سليم وزهوره.',
            'فأطفأ الشاشة، وحمل الإبريق، وقال للقطة: «الوعد أولًا!».'
          ], en: [
            'In the morning his favourite cartoon was on the screen.',
            'Saleh said: "Just one episode, then I\'ll go."',
            'Then the cat walked past the door, and the watering can fell over: clang!',
            'Saleh looked at the watering can and remembered Uncle Saleem and his flowers.',
            'So he switched off the screen, picked up the can and said to the cat: "The promise comes first!"'
          ] },
        quiz: Q('human-kids', 4, [
          { correct: 2, q: { ar: 'ما الذي جعل صالح يتذكّر وعده؟', en: 'What made Saleh remember his promise?' },
            options: [{ ar: 'نادته أمه من المطبخ', en: 'His mother called him from the kitchen' }, { ar: 'انتهت حلقة الكرتون', en: 'The cartoon episode ended' }, { ar: 'أوقعت القطة الإبريق', en: 'The cat knocked over the watering can' }],
            why: { ar: 'رأى صالح الإبريق الذي وضعه بنفسه، فقدّم وعده على الكرتون.', en: 'Saleh saw the can he had put there himself, and put his promise before the cartoon.' } }
        ]) },

      { title: { ar: 'زهرة صغيرة سرّية', en: 'A small secret flower' },
        body: { ar: [
            'سقى صالح زهور العم سليم كلها، فلمعت أوراقها في الشمس.',
            'ثم رأى خلف الحائط زهرة صغيرة ذابلة، لم يطلب منه أحد أن يسقيها.',
            'فسقاها أيضًا، ولم يخبر أحدًا.',
            'وفي اليوم التالي رجع العم سليم، فوجد الزهرة الصغيرة قد تفتّحت حمراء.',
            'قال متعجبًا: «من سقى زهرتي الصغيرة؟».',
            'فابتسم صالح، وملأ الإبريق من جديد.'
          ], en: [
            'Saleh watered all of Uncle Saleem\'s flowers, and their leaves shone in the sun.',
            'Then behind the wall he saw a small drooping flower. Nobody had asked him to water it.',
            'He watered it too, and told no one.',
            'The next day Uncle Saleem came back and found the little flower had opened, bright red.',
            'He said in surprise: "Who watered my little flower?"',
            'Saleh smiled, and filled the watering can again.'
          ] },
        quiz: Q('human-kids', 5, [
          { correct: 0, q: { ar: 'ماذا فعل صالح بالزهرة الذابلة خلف الحائط؟', en: 'What did Saleh do with the drooping flower behind the wall?' },
            options: [{ ar: 'سقاها ولم يخبر أحدًا', en: 'He watered it and told no one' }, { ar: 'قطفها وأعطاها لأمه', en: 'He picked it and gave it to his mother' }, { ar: 'نقلها إلى الشمس', en: 'He moved it into the sun' }],
            why: { ar: 'سقاها دون أن يطلب منه أحد، فتفتّحت حمراء. والخير الخفي يفتح باب الإبهام.', en: 'He watered it without being asked, and it opened red. Hidden kindness opens the door of the thumb.' } }
        ]) }
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
    title: { ar: 'كم يكفي؟', en: 'How much is enough?' },
    chapters: [
      { title: { ar: 'الإصدار المحدود', en: 'Limited edition' },
        body: { ar: [
            'في الحادية عشرة وخمس وخمسين دقيقة ليلًا كان زياد جالسًا على سريره، والهاتف في يده، والعداد على الشاشة ينزل: أربع دقائق، ثلاث. حذاء رياضي بإصدار محدود، جمع ثمنه من عيديته ومن مصروف أربعة أشهر، وحفظ ألوانه وأرقامه قبل أن يُعلن عنه. وفي مجموعة الأصحاب كان ثمانية يكتبون في اللحظة نفسها: «جاهزون؟». زياد في السادسة عشرة، ويرى نفسه شابًّا لا يطلب كثيرًا. وحين ضغط الزر في الثانية عشرة تمامًا، وظهرت كلمة «تم الطلب»، صرخ صرخة سمعها أخوه بشر من وراء الجدار.',
            'وصل الحذاء بعد أسبوع. فتح زياد العلبة ببطء، وصوّره من ثلاث جهات، ونشر الصورة، فجاءه أربعون قلبًا في ساعة. ولبسه إلى المدرسة، وكان يمشي وعينه على قدميه. وفي المساء نشر فراس، صديقه منذ الابتدائية، صورة اللون الآخر، الأسود والذهبي، الذي نفد في دقيقتين. فنظر زياد إلى حذائه على الأرض، فوجده أقل لمعانًا مما كان في الصباح، وهو هو لم يتغير.',
            'ولما حدث لزياد تلك الليلة وصف قديم. ففي «تهذيب الأخلاق» يقسم ابن مسكويه قوى النفس ثلاثًا: قوة ناطقة يفكر بها الإنسان ويميز، وقوة غضبية يُقدم بها ويدافع، وقوة شهوية يطلب بها الطعام والشراب وسائر اللذات. ولكل قوة فضيلة إذا اعتدلت: الحكمة للناطقة، والشجاعة للغضبية، والعفة للشهوية، فإذا اعتدلت الثلاث وتعاونت ظهرت فضيلة رابعة هي العدالة. والعفة عنده أن تتبع الشهوة العقل، فتطلب بقدر وتقف عند حد. والرغبة في الحذاء عمل القوة الشهوية، وهي قوة خُلقت لتخدم صاحبها. ويبدأ الخلل حين تجلس في مقعد العقل وتقرر عنه.',
            'وقد وصف النبي صلى الله عليه وآله وسلم هذا الجوع الذي لا يشبع: «لَوْ أَنَّ لِابْنِ آدَمَ وَادِيًا مِنْ ذَهَبٍ أَحَبَّ أَنْ يَكُونَ لَهُ وَادِيَانِ» (صحيح البخاري 6439). وادٍ كامل من ذهب، ثم تبدأ العين تبحث عن الثاني. ووضع للغنى ميزانًا آخر: «لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ، وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ» (صحيح البخاري 6446). والعرض متاع الدنيا كله. فالغني بهذا الميزان من شبعت نفسه، ولو كان في خزانته حذاء واحد. وكل من يقرأ هذه السطور، في السادسة عشرة أو في الأربعين، يعرف اللحظة التي يصير فيها الشيء الجديد قديمًا لأن ما هو أجد منه ظهر على الشاشة.',
            'في منتصف الليل فتح زياد المتجر مرة أخرى. كان الأسود والذهبي قد عاد في «إعادة طرح» بسعر أعلى، وفي حسابه ما بقي من العيدية، يكفي بالكاد. أضافه إلى السلة، ووضع إصبعه فوق «إتمام الطلب»، ولم يضغط. بقي الزر مضيئًا، وبقي زياد ينظر إليه، ويحاول أن يتذكر كيف كان شعوره قبل أسبوع، حين ظن أن حذاءً واحدًا يكفي.'
          ], en: [
            'At five to midnight Ziyad was sitting on his bed, phone in hand, a countdown dropping on the screen: four minutes, three. A limited-edition trainer. He had saved for it from his Eid money and four months of allowance, and knew its colours and its numbers before it was even announced. In the friends\' group eight of them were typing at the same moment: "Ready?" Ziyad is sixteen, and thinks of himself as someone who doesn\'t ask for much. When he pressed the button at exactly twelve and the words "Order placed" appeared, he shouted loud enough for his brother Bishr to hear through the wall.',
            'The trainers arrived a week later. Ziyad opened the box slowly, photographed them from three sides and posted the picture, and got forty hearts in an hour. He wore them to school and kept his eyes on his feet as he walked. That evening Firas, his friend since primary school, posted the other colourway, the black-and-gold one that had sold out in two minutes. Ziyad looked at his own pair on the floor. They seemed duller than they had that morning, though nothing about them had changed.',
            'What happened to Ziyad that night has an old description. In "Tahdhib al-Akhlaq" (The Refinement of Character), Ibn Miskawayh divides the powers of the soul into three: a rational power by which a person thinks and discerns, an irascible power by which one steps forward and defends, and an appetitive power by which one seeks food, drink and every other pleasure. Each has its virtue when it is balanced: wisdom for the rational, courage for the irascible, temperance for the appetitive; and when all three are balanced and work together, a fourth virtue appears, justice. Temperance, for him, is desire following reason, asking in measure and stopping at a limit. Wanting the trainers is the work of the appetitive power, a power created to serve its owner. The trouble begins when it takes reason\'s seat and decides in its place.',
            'The Prophet, peace and blessings be upon him and his family, described this hunger that is never full. Meaning: if the son of Adam had a valley of gold, he would love to have two (Sahih al-Bukhari 6439). A whole valley of gold, and the eye starts looking for the second. And he gave wealth another measure. Meaning: wealth is not an abundance of goods; wealth is the richness of the soul (Sahih al-Bukhari 6446). By this measure the rich person is the one whose soul is full, even with a single pair of shoes in the cupboard. Anyone reading these lines, at sixteen or at forty, knows the moment when a new thing turns old because something newer has appeared on the screen.',
            'At midnight Ziyad opened the shop again. The black-and-gold pair was back in a "restock" at a higher price, and what was left of his Eid money would just about cover it. He added it to his cart and rested his finger over "Complete order", without pressing. The button stayed lit, and Ziyad stayed looking at it, trying to remember how it had felt a week earlier, when he thought one pair would be enough.'
          ] },
        quiz: Q('pig-adult', 1, [
          { correct: 0, q: { ar: 'متى بدا حذاء زياد أقل لمعانًا؟', en: 'When did Ziyad\'s trainers start to look duller?' },
            options: [{ ar: 'حين نشر فراس صورة الأسود والذهبي', en: 'When Firas posted the black-and-gold pair' }, { ar: 'حين لبسه إلى المدرسة أول مرة', en: 'When he first wore them to school' }, { ar: 'حين جاءته أربعون علامة إعجاب', en: 'When the forty hearts came in' }],
            why: { ar: 'تغيّر ميزان العين حين رأت ما هو أجد، وبقي الحذاء كما هو.', en: 'The eye\'s measure changed when it saw something newer; the trainers stayed exactly as they were.' } },
          { correct: 2, q: { ar: 'ما فضيلة القوة الشهوية عند ابن مسكويه؟', en: 'What is the virtue of the appetitive power for Ibn Miskawayh?' },
            options: [{ ar: 'الشجاعة', en: 'Courage' }, { ar: 'العدالة', en: 'Justice' }, { ar: 'العفة', en: 'Temperance' }],
            why: { ar: 'الحكمة للناطقة، والشجاعة للغضبية، والعفة للشهوية، والعدالة تظهر حين تعتدل الثلاث.', en: 'Wisdom belongs to the rational, courage to the irascible, temperance to the appetitive, and justice appears when all three are balanced.' } }
        ]) },

      { title: { ar: 'الحساب على أربعة', en: 'Split four ways' },
        body: { ar: [
            'جاء أسبوع الامتحانات، وصار بيت زياد مكان المذاكرة: هو وفراس ونادر وسيف حول طاولة غرفة الجلوس، والكتب مفتوحة، والهواتف مقلوبة على وجوهها، أو هكذا يبدأ كل مساء. وفي الحادية عشرة يرفع أحدهم رأسه ويقول: جعت. فيفتح زياد تطبيق التوصيل، لأنه يعرف المطاعم كلها، ويطلب: وجبة كبيرة لنفسه، وبطاطس إضافية «للجميع»، ومشروبات، وحلوى لا يذكر أحد أنه طلبها. ثم يقسم الحساب على أربعة.',
            'وكان نادر يقول كل ليلة: أنا شبعان، تعشيت في البيت. ويشرب الماء، ويكمل حل المسائل. وفي الليلة الرابعة أرسل زياد في المجموعة كالعادة: «نصيب كل واحد»، والرقم تحته. فكتب نادر بعد دقائق: «حاضر، أحوّله لك آخر الشهر». وكان الرقم في الليالي الأربع أكبر من مصروف نادر في أسبوع، عن طعام لم يأكل منه لقمة. وتذكّر زياد فجأة أن نادر يأتي إليهم كل يوم من المدرسة مباشرة، ولا يمر ببيته. ففهم متأخرًا أن «أنا شبعان» كانت أسهل على نادر من «لا أستطيع».',
            'وفي «إحياء علوم الدين» كتاب سماه أبو حامد الغزالي «كسر الشهوتين»، بدأه بشهوة البطن، وعدّها من أعظم المهلكات، لأن شهوات كثيرة تتفرع منها. ثم عدّد فوائد الجوع المعتدل، ومنها صفاء القلب ورقته، ومنها أن يتذكر الإنسان أهل البلاء والحاجة. ويقول في شرح هذه الفائدة، بالمعنى، إن الشبعان ينسى الجائع، وينسى الجوع نفسه. وهذا ما جرى حول الطاولة أربع ليال: بطاطس «للجميع»، وصديق يشرب الماء، وثلاثة أصدقاء حوله لم يرَ منهم أحد شيئًا.',
            'وجعل الغزالي الأعدل لأكثر الناس أن يأكل الإنسان بقدر لا يحس معه بثقل الطعام ولا بألم الجوع، فالمحمود في الطعام هو الوسط، كما هو في الأخلاق كلها. والسؤال الذي يتركه هذا الباب عملي، لمن في السادسة عشرة ولمن في الأربعين: من الذي يطلب الليلة، أنا أم الموعد؟ فطلب الحادية عشرة صار موعدًا ثابتًا في الجسد، يأتي في وقته، جائعًا كان صاحبه أو شبعان، ويجرّ معه صديقًا يدفع عن طعام لم يأكله.',
            'في الصباح فتح زياد الثلاجة، فوجد أربعة صحون من عشاء أمه، مغطاة، صحنًا لكل ليلة من ليالي المذاكرة، لم يلمسها أحد. وقف أمامها طويلًا والباب مفتوح. وفي المساء، قبل أن يقول أحد «جعت»، أخرج الصحون الأربعة، وسخّنها، ووضعها في وسط الطاولة، وكتب في المجموعة: «عشاء الليلة من مطبخ أمي، ومن اليوم كل واحد يدفع ما يطلبه». ثم كتب لنادر وحده: «انسَ حساب الليالي الماضية، أنا أخطأت في القسمة». ولم يقل نادر تلك الليلة: أنا شبعان.'
          ], en: [
            'Exam week came, and Ziyad\'s house became the place to study: him, Firas, Nader and Saif around the living-room table, books open, phones face down, or at least that is how each evening began. At eleven someone would look up and say: I\'m starving. Ziyad would open the delivery app, because he knew every restaurant, and order: a large meal for himself, extra fries "for everyone", drinks, and a dessert nobody remembered asking for. Then he split the bill four ways.',
            'Every night Nader said: I\'m full, I ate at home. He drank water and carried on with the problems. On the fourth night Ziyad posted in the group as usual: "Each person\'s share", with the number underneath. A few minutes later Nader wrote: "Sure, I\'ll send it at the end of the month." Over four nights that number came to more than Nader\'s pocket money for a week, for food he had not eaten a mouthful of. Ziyad suddenly remembered that Nader came to them every day straight from school, without stopping at home. He understood, late, that "I\'m full" had been easier for Nader to say than "I can\'t."',
            'In "Ihya\' \'Ulum al-Din" (The Revival of the Religious Sciences) there is a book Abu Hamid al-Ghazali called "Breaking the Two Desires". He began it with the appetite of the stomach and counted it among the gravest causes of ruin, because so many other desires branch out from it. Then he listed the benefits of moderate hunger: among them a clearer, softer heart, and remembering those who are tested and in need. Explaining this benefit, he says, in meaning, that the one who is full forgets the hungry, and forgets hunger itself. That is what happened around the table for four nights: fries "for everyone", a friend drinking water, and three friends around him, none of whom saw a thing.',
            'Al-Ghazali held that the most balanced way for most people is to eat in a measure that brings neither the heaviness of food nor the pain of hunger: in food, as in all character, the middle is what is praised. The question this leaves is a practical one, for a sixteen-year-old and a forty-year-old alike: who is ordering tonight, me or the appointment? The eleven o\'clock order had become a fixed appointment in the body. It came on time, hungry or full, and it dragged along a friend paying for food he never ate.',
            'In the morning Ziyad opened the fridge and found four plates of his mother\'s dinner, covered, one for each night of studying, untouched. He stood in front of them for a long time with the door open. That evening, before anyone could say "I\'m starving", he took out the four plates, heated them, put them in the middle of the table, and wrote in the group: "Tonight\'s dinner is from my mum\'s kitchen. From now on everyone pays for what they order." Then he messaged Nader on his own: "Forget the last few nights, I split it wrong." That night Nader did not say: I\'m full.'
          ] },
        quiz: Q('pig-adult', 2, [
          { correct: 2, q: { ar: 'لماذا كان نادر يقول كل ليلة «أنا شبعان»؟', en: 'Why did Nader say "I\'m full" every night?' },
            options: [{ ar: 'لأنه تعشى في بيته قبل أن يأتي إليهم', en: 'Because he had eaten at home before coming over' }, { ar: 'لأنه لا يحب أن يأكل وهو يذاكر', en: 'Because he doesn\'t like eating while he studies' }, { ar: 'لأنها أسهل عليه من «لا أستطيع»', en: 'Because it was easier than saying "I can\'t"' }],
            why: { ar: 'كان نادر يأتي من المدرسة مباشرة، ويدفع ربع حساب لم يأكل منه. والشبعان ينسى الجائع، كما قال الغزالي.', en: 'Nader came straight from school and paid a quarter of a bill he never ate from. The one who is full forgets the hungry, as al-Ghazali said.' } },
          { correct: 1, q: { ar: 'ما الأعدل في الطعام لأكثر الناس عند الغزالي؟', en: 'For most people, what is the most balanced way of eating according to al-Ghazali?' },
            options: [{ ar: 'أن يأكل الإنسان مرة واحدة في اليوم', en: 'To eat once a day' }, { ar: 'ألا يحس بثقل الطعام ولا بألم الجوع', en: 'To feel neither the heaviness of food nor the pain of hunger' }, { ar: 'أن يجوع يومًا ويشبع يومًا', en: 'To go hungry one day and eat fully the next' }],
            why: { ar: 'المحمود في الطعام هو الوسط، ويبقى الإنسان صاحب القرار في متى يأكل وكم يأكل.', en: 'In food the middle is praised, and the person stays the one who decides when and how much to eat.' } }
        ]) },

      { title: { ar: 'المصباح المطفأ', en: 'The lamp put out' },
        body: { ar: [
            'يوم الجمعة صعد الخطيب المنبر، وزياد في الصف الرابع يفكر في الأسود والذهبي، فقد عاد إلى سلته مرة أخرى في الليل. ثم سمع الخطيب يقول: جاء رجل إلى النبي صلى الله عليه وآله وسلم جائعًا، فأرسل إلى بيوت أزواجه، فقلن: ما عندنا إلا الماء. فقال: «مَنْ يَضُمُّ، أَوْ يُضِيفُ هَذَا». فقام رجل من الأنصار رضي الله عنه وقال: أنا. فرفع زياد رأسه.',
            'وأكمل الخطيب: لم يكن عند زوجة الأنصاري إلا قوت صبيانها. فقال لها: هيئي طعامك، وأصلحي سراجك، ونوّمي صبيانك إذا أرادوا العشاء. فلما قدّمت الطعام قامت كأنها تصلح السراج فأطفأته، وجلس الزوجان مع ضيفهما في الظلام يريانه أنهما يأكلان، حتى شبع، وباتا جائعين. فلما غدا الأنصاري إلى النبي صلى الله عليه وآله وسلم قال له: «ضَحِكَ اللَّهُ اللَّيْلَةَ، أَوْ عَجِبَ، مِنْ فَعَالِكُمَا». ونزل فيهما قوله تعالى: ﴿وَيُؤْثِرُونَ عَلَىٰ أَنْفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ ۚ وَمَنْ يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ﴾ (الحشر 59:9). والقصة في صحيح البخاري (3798) عن أبي هريرة رضي الله عنه.',
            'بقيت مع زياد بعد الصلاة تفصيلة واحدة: المصباح. كان الطعام يكفي واحدًا، فاختار الزوجان أن يأكل الضيف وهو لا يدري أنهما جائعان. أطفآ النور ليحفظا له وجهه، فلا يرى نفسه آخذًا من عشاء الصغار. فالعطاء في القصة خرج من القليل الذي يحتاجه صاحبه، ومعه ستر يحفظ كرامة من يأخذ. وعلى باب المسجد تذكّر زياد ورقة علّقها الأستاذ وليد في الصف قبل أسبوع: رحلة الصف إلى الساحل، والدفع قبل الخميس. وتذكّر أن اسم نادر لم يكن في قائمة من دفعوا، وأن نادر قال لفراس حين سأله: «أنا مشغول ذلك اليوم».',
            'وكان ثمن الرحلة قريبًا جدًّا مما بقي في حسابه، أي من ثمن الأسود والذهبي. وفكّر زياد في الشيئين معًا طوال طريق العودة، فلم يجد طريقة يحصل بها على الاثنين. ثم فكّر في المصباح مرة أخرى: إن دفع عن نادر وعرف نادر، صارت الرحلة دينًا عليه أمام الصف كله. فهو يحتاج إلى ظلام من نوع ما. وعرف زياد عن نفسه شيئًا آخر وهو يمشي: الأنصاري أعطى عشاء أولاده، وهو يفكر في أن يعطي ثمن حذاء لا يحتاجه. والمسافة بين الاثنين طويلة، وهو يراها، والطريق يبدأ من حيث يقف.',
            'يوم الأحد ذهب زياد إلى الأستاذ وليد قبل الحصة الأولى، ودفع ثمن رحلة ثانية، وقال: هذه لنادر، ولا أريد أن يعرف أحد. ابتسم الأستاذ، وكتب في دفتره: «من صندوق الصف». وفي يوم الرحلة جلس نادر بجانبه في الحافلة، وقال وهو ينظر من النافذة: «الأستاذ قال إن للصف صندوقًا، لم أكن أعرف». قال زياد: «المهم أنك معنا». واهتز هاتفه في جيبه: «عاد الأسود والذهبي إلى المخزون». فمسح الإشعار بإبهامه، ولم يفتحه.'
          ], en: [
            'On Friday the preacher climbed the minbar while Ziyad, in the fourth row, was thinking about the black-and-gold pair, which had found its way back into his cart the night before. Then he heard the preacher say: a man came hungry to the Prophet, peace and blessings be upon him and his family, who sent to the homes of his wives, and they said: we have nothing but water. So he said, meaning: "Who will take this man in, or host him?" A man of the Ansar, may Allah be pleased with him, stood and said: I will. Ziyad raised his head.',
            'The preacher went on: the Ansari\'s wife had nothing but her children\'s supper. He told her: get your food ready, light your lamp, and put the children to sleep if they ask for supper. When she had served the food she got up as if to fix the lamp and put it out, and the couple sat with their guest in the dark, letting him think they were eating, until he was full; and they spent the night hungry. When the Ansari went to the Prophet the next morning, he told him, meaning: "Allah laughed tonight, or marvelled, at what you two did." And about them came the words of Allah. Meaning: and they prefer others over themselves, even if they are in need; and whoever is saved from the greed of his own soul, those are the successful (al-Hashr 59:9). The story is in Sahih al-Bukhari (3798), from Abu Hurayra, may Allah be pleased with him.',
            'One detail stayed with Ziyad after the prayer: the lamp. The food was enough for one, and the couple chose to let the guest eat without knowing they were hungry. They put out the light to spare his face, so he would not see himself taking the children\'s supper. The giving in the story came out of the little its owners needed, and with it came a covering that kept the receiver\'s dignity whole. At the mosque door Ziyad remembered a sheet Mr Walid had pinned up in class a week earlier: the class trip to the coast, payment by Thursday. And he remembered that Nader\'s name was not on the list of those who had paid, and that when Firas asked him, Nader had said: "I\'m busy that day."',
            'The price of the trip was very close to what was left in his account, which is to say, to the price of the black-and-gold pair. Ziyad turned the two over together all the way home, and found no way to have both. Then he thought of the lamp again: if he paid for Nader and Nader knew, the trip would become a debt hanging over him in front of the whole class. He needed some kind of darkness. And as he walked he saw something else about himself: the Ansari gave away his children\'s supper, and he was thinking about giving the price of a pair of shoes he did not need. The distance between the two is long; he could see it, and the road starts where he stands.',
            'On Sunday Ziyad went to Mr Walid before first lesson, paid for a second place on the trip, and said: this one is for Nader, and I don\'t want anyone to know. The teacher smiled and wrote in his notebook: "From the class fund." On the day of the trip Nader sat next to him on the bus and said, looking out of the window: "Sir said the class has a fund. I never knew." Ziyad said: "What matters is you\'re here." His phone buzzed in his pocket: "The black-and-gold is back in stock." He swiped the notification away with his thumb and did not open it.'
          ] },
        quiz: Q('pig-adult', 3, [
          { correct: 2, q: { ar: 'لماذا أطفأت المرأة الأنصارية المصباح؟', en: 'Why did the Ansari woman put out the lamp?' },
            options: [{ ar: 'لأن زيت السراج قارب أن ينفد', en: 'Because the lamp oil was nearly gone' }, { ar: 'لينام الصغار ولا يطلبوا العشاء', en: 'So the children would sleep and not ask for supper' }, { ar: 'ليأكل الضيف ولا يرى أنهما لا يأكلان', en: 'So the guest could eat without seeing they were not eating' }],
            why: { ar: 'أعطى الزوجان الطعام، وحفظا معه وجه الضيف.', en: 'The couple gave the food, and with it they spared the guest\'s face.' } },
          { correct: 0, q: { ar: 'ماذا طلب زياد من الأستاذ وليد حين دفع عن نادر؟', en: 'What did Ziyad ask Mr Walid when he paid for Nader?' },
            options: [{ ar: 'ألا يعرف أحد أنه هو الذي دفع', en: 'That no one should know he was the one who paid' }, { ar: 'أن يخبر نادر ليشكره أمام الصف', en: 'That Nader be told, so he could thank him in class' }, { ar: 'أن يرد نادر المال بعد الرحلة', en: 'That Nader pay the money back after the trip' }],
            why: { ar: 'هذا مصباح زياد: أعطى، وستر من يأخذ.', en: 'That was Ziyad\'s lamp: he gave, and kept the receiver covered.' } }
        ]) },

      { title: { ar: 'بعد هذه الجولة', en: 'After this round' },
        body: { ar: [
            'أم زياد ممرضة، وفي أيام السبت تعود من نوبة الليل في التاسعة صباحًا. وفي ذلك السبت كان زياد على الأريكة منذ السابعة، في مباراة مصنّفة مع فراس، والسماعة على أذنيه. سمع الباب، وسمع أمه تقول من المدخل: يا زياد، أكياس السوق في السيارة. فقال دون أن يلتفت: حاضر، بعد هذه الجولة.',
            'انتهت الجولة، وبدأت التي بعدها. ونزل بشر، أخوه ذو الأحد عشر عامًا، فحمل الأكياس وحده على مرتين، وأحدها يتمزق من أسفله. ورتبت الأم ما يحتاج إلى الثلاجة، ثم نامت بثياب العمل على طرف السرير. وحين خرج زياد إلى المطبخ عند الظهر كان كل شيء في مكانه، وفي الحوض صحون الفطور، وعلى الثلاجة ورقة بخط بشر: «اللحم في الفريزر يا ماما». فشعر زياد بشيء ثقيل في صدره، وشرب كأس ماء، وعاد إلى الأريكة.',
            'والكسل يأتي في ثياب لطيفة: «حاضر»، و«بعد قليل»، و«بعد هذه الجولة». وقد روى أنس بن مالك رضي الله عنه، وكان يخدم النبي صلى الله عليه وآله وسلم، أنه كان يسمعه يكثر أن يقول: «اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ» (صحيح البخاري 6363). وفي الدعاء يجاور الكسلُ البخلَ، وقد التقيا في بيت زياد ذلك الصباح: راحة يمسكها صاحبها لنفسه، ويترك ثمنها لغيره.',
            'وقال النبي صلى الله عليه وآله وسلم: «لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ» (صحيح البخاري 13). وزياد يحب لنفسه الراحة بعد أسبوع متعب، ويعرف ذلك جيدًا. وأمه عادت من اثنتي عشرة ساعة على قدميها. فالحديث يضع أمامه سؤالًا بسيطًا وصعبًا: هذه الراحة التي أحبها لنفسي، هل أحبها لها؟ وكل من يقرأ هذه السطور يعرف أريكته: مكالمة العمل التي تطول دائمًا وقت ترتيب المائدة، والتعب الذي يظهر حين تبدأ الصحون.',
            'وفي السبت التالي كان زياد في مباراة أخرى حين سمع صوت السيارة. نظر إلى الشاشة: الجولة الأخيرة، والفريق يحتاجه. ثم وضع يد التحكم على الأريكة والمباراة تعمل، ونزل الدرج. وحين صعد بالأكياس كان صوت فراس يخرج من السماعة الملقاة على الأريكة: «أين ذهبت؟!»، وقد خسر ترتيبه عشرين نقطة. وضع زياد الأكياس على الطاولة، وسأل أمه: «ماذا آخذ أيضًا؟». ولم يرجع ليرى كم صار ترتيبه.'
          ], en: [
            'Ziyad\'s mother is a nurse, and on Saturdays she comes home from the night shift at nine in the morning. That Saturday Ziyad had been on the sofa since seven, in a ranked match with Firas, headset on. He heard the door, and heard his mother call from the hallway: Ziyad, the shopping is in the car. Without turning round he said: sure, after this round.',
            'The round ended, and the next one began. Bishr, his eleven-year-old brother, came down and carried the bags up on his own in two trips, one of them tearing at the bottom. Their mother put away what needed the fridge, then fell asleep in her work clothes on the edge of the bed. When Ziyad came into the kitchen at noon everything was in its place, the breakfast dishes were in the sink, and on the fridge was a note in Bishr\'s handwriting: "The meat is in the freezer, Mama." Ziyad felt something heavy in his chest, drank a glass of water, and went back to the sofa.',
            'Laziness arrives in pleasant clothes: "sure", "in a bit", "after this round". Anas ibn Malik, may Allah be pleased with him, who served the Prophet, peace and blessings be upon him and his family, reported that he often heard him say, meaning: "O Allah, I seek refuge in You from worry and grief, from helplessness and laziness, from miserliness and cowardice" (Sahih al-Bukhari 6363). In the du\'a laziness sits right beside miserliness, and the two met in Ziyad\'s house that morning: comfort its owner keeps for himself, while someone else pays for it.',
            'And the Prophet, peace and blessings be upon him and his family, said, meaning: none of you truly believes until he loves for his brother what he loves for himself (Sahih al-Bukhari 13). Ziyad loves rest for himself after a tiring week, and he knows it well. His mother had come home from twelve hours on her feet. So the hadith sets a simple, hard question in front of him: this rest I love for myself, do I love it for her? Everyone reading these lines knows their own sofa: the work call that always runs long just when the table needs laying, the tiredness that turns up as soon as the dishes start.',
            'The next Saturday Ziyad was in another match when he heard the car. He looked at the screen: the last round, and the team needed him. Then he put the controller down on the sofa with the match still running and went down the stairs. When he came back up with the bags, Firas\'s voice was coming out of the headset lying on the sofa: "Where did you go?!", and his rank had dropped twenty points. Ziyad put the bags on the table and asked his mother: "What else can I bring up?" He did not go back to see where his rank stood.'
          ] },
        quiz: Q('pig-adult', 4, [
          { correct: 1, q: { ar: 'من حمل أكياس السوق في السبت الأول؟', en: 'Who carried up the shopping on the first Saturday?' },
            options: [{ ar: 'زياد بعد أن انتهت الجولة', en: 'Ziyad, once the round was over' }, { ar: 'بشر وحده على مرتين', en: 'Bishr, on his own, in two trips' }, { ar: 'الأم قبل أن تنام', en: 'Their mother, before she slept' }],
            why: { ar: 'الكسل يقول «حاضر» ويترك العمل لغيره، وكان بشر هو الذي حمل.', en: 'Laziness says "sure" and leaves the work to someone else; it was Bishr who carried.' } },
          { correct: 2, q: { ar: 'ماذا كان النبي صلى الله عليه وآله وسلم يكثر أن يستعيذ منه في حديث أنس؟', en: 'In Anas\'s hadith, what did the Prophet, peace and blessings be upon him and his family, often seek refuge from?' },
            options: [{ ar: 'الغضب والعجلة، والكذب والحسد، والكبر والرياء', en: 'Anger and haste, lying and envy, pride and showing off' }, { ar: 'الفقر والمرض، والوحدة والخوف، والتعب والسهر', en: 'Poverty and illness, loneliness and fear, fatigue and sleeplessness' }, { ar: 'الهم والحزن، والعجز والكسل، والبخل والجبن', en: 'Worry and grief, helplessness and laziness, miserliness and cowardice' }],
            why: { ar: 'جاء الكسل والبخل في دعاء واحد، ويلتقيان حين يمسك الإنسان راحته لنفسه ويترك ثمنها لغيره.', en: 'Laziness and miserliness come in one du\'a, and they meet when a person keeps comfort for himself and leaves the cost to someone else.' } }
        ]) },

      { title: { ar: 'الظرف والحذاء الموحل', en: 'The envelope and the muddy trainers' },
        body: { ar: [
            'مرّ شهر، والأسود والذهبي ما زال في السلة، يفتحها زياد أحيانًا كما يفتح المرء صورة قديمة. ووجد في نفسه في تلك الأسابيع شيئًا لم يتوقعه: الحماسة التي كان يحملها لكل إصدار جديد باقية بقوتها كلها. ما زال يحب العدادات، ويحفظ التواريخ، ويقارن، ويخاف أن يفوته شيء. فسأل نفسه ذات ليلة: هل عليّ أن أقتل هذا كله فيّ؟',
            'وللغزالي جواب عن هذا السؤال في كتاب «رياضة النفس» من «الإحياء». فالمقصود من المجاهدة عنده رد الشهوة والغضب إلى الاعتدال، وقلعهما من أصلهما غير مطلوب، لأن الشهوة خُلقت لفائدة، ولو انقطعت شهوة الطعام لهلك الإنسان. فالرياضة أن تصير الشهوة منقادة لصاحبها: تتحرك حين يحركها، وتقف حين يوقفها.',
            'وفي الحديث وجهة لهذه القوة نفسها: «احْرِصْ عَلَى مَا يَنْفَعُكَ، وَاسْتَعِنْ بِاللَّهِ وَلَا تَعْجِزْ» (صحيح مسلم 2664). فالحديث يأمر بالحرص، ويختار له ما يُحرص عليه. والحرص الذي كان يسهر على عداد حذاء يستطيع أن يسهر على شيء آخر. فجرّب زياد شيئًا صغيرًا: كل مبلغ كان سيذهب إلى «إعادة طرح» يضعه في ظرف، ويكتب على الظرف ما يريد أن يتعلمه أو يعطيه. وبعد شهر كان في الظرف ثمن دورة في البرمجة أجّلها سنة كاملة، وثمن حذاء طبي مريح لأمه التي تقف اثنتي عشرة ساعة في كل نوبة.',
            'وفي مساء خميس عاد زياد من الدورة، فوجد حذاءه، حذاء الإصدار المحدود، عند الباب، والطين يغطي نصفه الأبيض. كان بشر قد لبسه ليلعب الكرة مع أولاد الحي، لأنه «أسرع حذاء في البيت». وصعدت النار من صدر زياد إلى وجهه في ثانية، وخرجت الكلمة القديمة قبل أن يفكر: «هذا لي!». ودفع باب غرفة بشر بقوة، فارتطم بالجدار.',
            'وقف بشر أمامه، والجورب الموحل ما زال في قدمه، وعيناه على يد أخيه. وكانت يد زياد مرفوعة، تمسك الحذاء من رباطه، وترتجف. وعرفها زياد: هي اليد نفسها التي تركت المباراة، ودفعت عن نادر، وحملت الأكياس. ووقف في الباب لا يعرف ماذا يصنع بها الآن، وخطر له سؤال أثقل من كل ما في الظرف: أمسكتُ رغبتي، فكيف أمسك هذه النار؟'
          ], en: [
            'A month went by. The black-and-gold pair was still in the cart, and Ziyad opened it now and then the way one opens an old photo. In those weeks he found something in himself he had not expected: the excitement he used to feel for every new release was still there, at full strength. He still loved countdowns, memorised dates, compared, and feared missing out. One night he asked himself: do I have to kill all of this in me?',
            'Al-Ghazali answers this question in the book on "Disciplining the Soul" in the "Ihya\'". For him the aim of spiritual striving is to bring desire and anger back to balance; uprooting them is not the goal, because desire was created for a purpose, and if the appetite for food were cut off, a person would perish. Training the soul means making desire obedient to its owner: it moves when he moves it and stops when he stops it.',
            'A hadith gives this very power a direction. Meaning: "Be eager for what benefits you, seek Allah\'s help, and do not give up" (Sahih Muslim 2664). The hadith commands eagerness, and chooses what it should be eager for. The eagerness that stayed up for a trainer countdown could stay up for something else. So Ziyad tried something small: every sum that would have gone to a "restock" went into an envelope, and on the envelope he wrote what he wanted to learn or to give. A month later the envelope held the price of a programming course he had put off for a whole year, and the price of a pair of comfortable nursing shoes for his mother, who stands for twelve hours every shift.',
            'One Thursday evening Ziyad came back from the course and found his trainers, the limited-edition pair, by the door, their white half caked in mud. Bishr had worn them to play football with the boys in the street, because they were "the fastest shoes in the house". The fire rose from Ziyad\'s chest to his face in a second, and the old words were out before he could think: "Those are mine!" He shoved Bishr\'s door open so hard it banged against the wall.',
            'Bishr stood in front of him, a muddy sock still on his foot, his eyes on his brother\'s hand. Ziyad\'s hand was raised, gripping the trainer by its laces, and it was shaking. Ziyad knew that hand: the same hand that had left the match, paid for Nader, and carried the bags. He stood in the doorway not knowing what to do with it now, and a question came to him heavier than everything in the envelope: I have learned to hold my wanting; how do I hold this fire?'
          ] },
        quiz: Q('pig-adult', 5, [
          { correct: 1, q: { ar: 'ما جواب الغزالي عن سؤال زياد: هل عليّ أن أقتل هذا كله فيّ؟', en: 'What is al-Ghazali\'s answer to Ziyad\'s question: do I have to kill all of this in me?' },
            options: [{ ar: 'أن تُقلع الشهوة من أصلها حتى لا تعود', en: 'Uproot desire completely so that it never returns' }, { ar: 'أن تُردّ الشهوة إلى الاعتدال فتنقاد لصاحبها', en: 'Bring desire back to balance so that it obeys its owner' }, { ar: 'أن تُترك الشهوة تقرر ما دامت لا تؤذي أحدًا', en: 'Let desire decide, as long as it harms no one' }],
            why: { ar: 'خُلقت الشهوة لفائدة، والرياضة أن تتحرك حين يحركها صاحبها وتقف حين يوقفها.', en: 'Desire was created for a purpose; training means it moves when its owner moves it and stops when he stops it.' } },
          { correct: 0, q: { ar: 'ماذا جمع زياد في الظرف بعد شهر؟', en: 'What had Ziyad gathered in the envelope after a month?' },
            options: [{ ar: 'ثمن دورة في البرمجة، وحذاء مريح لأمه', en: 'The price of a programming course, and comfortable shoes for his mother' }, { ar: 'ثمن الأسود والذهبي حين عاد إلى المخزون', en: 'The price of the black-and-gold pair when it came back in stock' }, { ar: 'ثمن حذاء كرة لبشر، وهدية لنادر', en: 'The price of football boots for Bishr, and a gift for Nader' }],
            why: { ar: 'بقي الحرص كما هو، وتغيّرت وجهته: «احْرِصْ عَلَى مَا يَنْفَعُكَ». وبقي سؤال النار في يده، وهو باب الوسطى.', en: 'The eagerness stayed as it was and changed direction: "be eager for what benefits you". The fire in his hand is still a question, and it is the door to the middle finger.' } }
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
    title: { ar: 'عشرون ثانية', en: 'Twenty seconds' },
    chapters: [
      { title: { ar: 'عرض رغد', en: 'The Raghad show' },
        body: { ar: [
            'تبدأ حصة الرياضيات، ورغد لا تستطيع أن تجلس ساكنة. ركبتها تهتز تحت الطاولة، والقلم في يدها يُفتح ويُغلق، وقد فتحت تحت الدرج ثلاثة تطبيقات وأغلقتها قبل أن تكمل المعلمة كتابة المسألة. رغد في السادسة عشرة، وفي تقاريرها منذ الروضة جملة لا تتغير: «ذكية، كثيرة الحركة». ولها موهبة يعرفها الصف كله: تسمع الصوت مرة واحدة فتقلّده، من «يا جماعة الخير» التي يبدأ بها أستاذ الفيزياء كل حصة، إلى سعال المديرة في الإذاعة الصباحية. وفي مجموعة الصف يسمّون مقاطعها «عرض رغد».',
            'وفي منتصف الفصل الدراسي جاءت هبة، منقولة من مدينة أخرى. كانت تقرأ في حصة الإنجليزية ببطء، بلهجة لم يسمعها الصف من قبل، وتدفع نظارتها إلى أعلى أنفها بإصبعها بعد كل سطر. وفي الاستراحة رفعت تيماء هاتفها وقالت: «افعليها، هبة!». ترددت رغد ثانية واحدة، ثم فعلتها: عشرون ثانية، القراءة البطيئة، واللهجة، وحركة النظارة. وضحك الجميع. ونشرت تيماء المقطع في المجموعة وكتبت تحته: «للضحك فقط». وفي المساء كان قد شوهد ثلاثمئة مرة، وجاءه ستون وجهًا يضحك، وكتب أحدهم من صف آخر: «الجزء الثاني!». وشعرت رغد بالدفء الذي تعرفه: الضحك كله لها.',
            'وللضحك من الناس اسم صريح في القرآن: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ عَسَىٰ أَنْ يَكُونُوا خَيْرًا مِنْهُمْ وَلَا نِسَاءٌ مِنْ نِسَاءٍ عَسَىٰ أَنْ يَكُنَّ خَيْرًا مِنْهُنَّ﴾ (الحجرات 49:11). وقد عدّ أبو حامد الغزالي السخرية من آفات اللسان في كتاب «آفات اللسان» من «إحياء علوم الدين»، وشرح معناها بأنها استحقار الآخر والاستهانة به، والتنبيه على عيوبه ونقائصه على وجه يُضحك منه. ونبّه على أنها تكون بالكلام، وتكون بالمحاكاة في الفعل والقول، وبالإشارة والإيماء. فالمقطع الذي لم تقل فيه رغد كلمة واحدة من عندها، ولا شتيمة فيه، داخل في هذا التعريف كله.',
            'والكبير الذي يقرأ هذه السطور يعرف العشرين ثانية، وإن تغيّر المسرح: زميل يقلّد لهجة موظف جديد في غرفة الاستراحة، ورسالة صوتية تُحوَّل مع «اسمعوا هذا»، وقريب يقلّد في جلسة العائلة طريقة كلام زوج ابنته. والضحك يأتي سريعًا، ويُصغَّر فيه إنسان ليكبر الحاضرون قليلًا. وفي الآية عبارة تترك السؤال مفتوحًا: ﴿عَسَىٰ أَنْ يَكُنَّ خَيْرًا مِنْهُنَّ﴾. فمن يدري أيهما خير عند الله: التي يُضحك منها، أم التي تُضحك الناس؟',
            'وفي صباح اليوم التالي، عند الخزائن، رأت رغد هبة واقفة، وبنت من صف آخر تمد إليها هاتفها. وكان يخرج من الهاتف صوت رغد وهي تقرأ بلهجة هبة. لم تبكِ هبة. رفعت إصبعها لتدفع نظارتها كعادتها، ثم توقفت يدها في منتصف الطريق، كأنها عرفت الآن فقط أن هذه الحركة مضحكة. ودخلت رغد دورة المياه قبل أن تراها هبة، ووقفت وراء الباب وقلبها يدق، تسمع ضحك الصف يخرج من هاتف في الممر.'
          ], en: [
            'Maths begins, and Raghad cannot sit still. Her knee bounces under the desk, the pen in her hand clicks open and shut, and under the desk she has opened and closed three apps before the teacher has finished writing the problem. Raghad is sixteen, and every school report since kindergarten has carried the same sentence: "Bright, very restless." She also has a gift the whole class knows about: she hears a voice once and can do it, from the physics teacher\'s "right then, good people" that opens every lesson to the head teacher\'s cough over the morning announcements. In the class group her clips are called "the Raghad show".',
            'Halfway through the term Hiba arrived, transferred from another city. In English she read aloud slowly, in an accent the class had never heard, and pushed her glasses up her nose with one finger after every line. At break Taima held up her phone and said: "Do Hiba!" Raghad hesitated for one second, then did it: twenty seconds, the slow reading, the accent, the glasses. Everyone laughed. Taima posted the clip in the group with the caption "just for laughs". By evening it had three hundred views and sixty laughing faces, and someone from another class wrote: "Part two!" Raghad felt the warmth she knew so well: all that laughter was hers.',
            'Laughing at people has a plain name in the Quran. Meaning: O you who believe, let no people mock another people, perhaps they are better than them, nor women other women, perhaps they are better than them (al-Hujurat 49:11). Abu Hamid al-Ghazali counted mockery among the afflictions of the tongue, in the book of that name in the "Ihya\' \'Ulum al-Din" (The Revival of the Religious Sciences), and explained it, in meaning, as belittling and slighting another person, pointing out their faults and shortcomings in a way that makes people laugh. He noted that it can be done in words, or by imitating someone\'s actions and speech, or by gesture and sign. A clip in which Raghad said not one word of her own, and no insult, falls entirely within that definition.',
            'An adult reading this knows those twenty seconds, only on a different stage: a colleague imitating a new employee\'s accent in the staff room, a voice note forwarded with "listen to this", a relative at a family gathering doing the way his son-in-law talks. The laugh comes quickly, and in it one person is made smaller so that everyone else feels a little bigger. And one phrase in the verse leaves the question open. Meaning: perhaps they are better than them. Who knows which is better in the sight of Allah: the one being laughed at, or the one getting the laughs?',
            'The next morning, by the lockers, Raghad saw Hiba standing while a girl from another class held out a phone to her. Out of the phone came Raghad\'s voice, reading in Hiba\'s accent. Hiba did not cry. She lifted a finger to push up her glasses as she always did, and her hand stopped halfway, as if she had only now learned that the gesture was funny. Raghad slipped into the bathroom before Hiba could see her and stood behind the door, heart pounding, listening to the class\'s laughter coming out of a phone in the corridor.'
          ] },
        quiz: Q('monkey-adult', 1, [
          { correct: 0, q: { ar: 'ماذا فعلت يد هبة حين سمعت المقطع عند الخزائن؟', en: 'What did Hiba\'s hand do when she heard the clip by the lockers?' },
            options: [{ ar: 'توقفت في منتصف الطريق', en: 'It stopped halfway to her glasses' }, { ar: 'أخذت الهاتف وحذفت المقطع', en: 'It took the phone and deleted the clip' }, { ar: 'غطّت وجهها وهي تبكي', en: 'It covered her face as she cried' }],
            why: { ar: 'عرفت هبة من المقطع أن حركتها مضحكة، فصارت تخجل منها. وهذا ما تتركه السخرية بعد أن ينتهي الضحك.', en: 'From the clip Hiba learned her gesture was funny, and now she was ashamed of it. That is what mockery leaves behind once the laughing stops.' } },
          { correct: 2, q: { ar: 'بماذا تكون السخرية عند الغزالي في «آفات اللسان»؟', en: 'In what ways can mockery be done, according to al-Ghazali on the afflictions of the tongue?' },
            options: [{ ar: 'بالكلام الجارح أمام صاحبه', en: 'In hurtful words to someone\'s face' }, { ar: 'بالكلام في غياب صاحبه فقط', en: 'Only in words behind someone\'s back' }, { ar: 'بالكلام، والمحاكاة، والإشارة', en: 'In words, by imitation, and by gesture' }],
            why: { ar: 'المحاكاة سخرية ولو لم تقل صاحبتها كلمة واحدة من عندها.', en: 'Imitation is mockery even when the one doing it says not a word of her own.' } }
        ]) },

      { title: { ar: 'الكل يصنع نسخته', en: 'Everyone has their own version' },
        body: { ar: [
            'في المساء جلست رغد إلى العشاء، وهي تقول لنفسها ما يقوله الجميع: ضحك الصف كله، وتيماء هي التي صوّرت ونشرت، وستون شخصًا ضغطوا الوجه الضاحك. ثم رفع أخوها أوس، ذو العشر سنوات، صحنه أمام وجهه كأنه كتاب، وقرأ بصوت بطيء ولهجة غريبة، ودفع إلى أعلى أنفه نظارة لا يلبسها. ضحكت أمها ضحكة قصيرة، ثم سكتت وسألت: من هذه؟ فقال أوس: «هبة! المقطع عند كل أولاد مدرستي».',
            'في غرفتها كتبت رغد لتيماء: «احذفيه من المجموعة». فجاء الرد بعد ثوانٍ: «اهدئي، هي مزحة، والكل يصنع نسخته الآن». وأرسلت معه ملصقًا صوتيًّا صنعه أحدهم من المقطع: ثلاث ثوانٍ من صوت رغد بلهجة هبة. ونظرت رغد إلى الملصق طويلًا. تذكرت أنها فعلتها لأن تيماء قالت «افعليها»، وأن يدها سبقت سؤالها، كما سبقته مرات كثيرة من قبل. وكانت تريد الشيئين معًا: أن تبقى البنت المضحكة في الصف، وألا تكون البنت التي صنعت هذا.',
            'قال النبي صلى الله عليه وآله وسلم: «الرَّجُلُ عَلَى دِينِ خَلِيلِهِ، فَلْيَنْظُرْ أَحَدُكُمْ مَنْ يُخَالِلُ» (سنن أبي داود 4833، وسنن الترمذي 2378). والخليل الصاحب القريب الذي يدخل القلب، والإنسان يأخذ منه دون أن يشعر: ضحكته، وكلماته، وما يراه مضحكًا، وما يراه عاديًّا. والتقليد في أصله قوة نافعة، به يتعلم الطفل الكلام والصلاة وآداب المائدة. والحديث يترك لكل واحد سؤالًا عمليًّا: من أقلّد أنا، وماذا آخذ منه؟',
            'والكبار يقلّدون أيضًا، وتقليدهم أخفى: النبرة التي تتكلم بها مجموعة العمل عن زميل بعينه، والرسالة التي تُحوَّل لأن الجميع حوّلها، والرأي الذي نتبناه لأن أصحابنا تبنّوه قبلنا. والصغار في البيت يرون ذلك كله، ويأخذونه عنا بالحرف والحركة، كما أخذ أوس عن أخته.',
            'قبل النوم طرقت رغد باب أوس، وقالت: «لا تقلّد هبة مرة أخرى، هذا يؤذيها». فنظر إليها من تحت الغطاء، وقال ببساطة: «لكنكِ أنتِ تفعلينها». وبقيت رغد في الباب لا تجد ما تقوله. ثم أطفأت له النور، وعادت إلى غرفتها، وفتحت المقطع مرة أخيرة بلا صوت. وبلا ضحك الصف لم يبقَ فيه إلا بنت تقرأ ببطء بلغة ليست لغتها، وتدفع نظارتها إلى أعلى.'
          ], en: [
            'At dinner that evening Raghad was telling herself what everyone tells themselves: the whole class laughed, Taima was the one who filmed and posted it, and sixty people pressed the laughing face. Then her ten-year-old brother Aws held his plate up in front of his face like a book, read in a slow voice with a strange accent, and pushed up glasses he does not wear. Their mother gave a short laugh, then stopped and asked: who is that? Aws said: "Hiba! Every kid at my school has the clip."',
            'In her room Raghad messaged Taima: "Take it out of the group." The reply came in seconds: "Relax, it\'s a joke, everyone\'s making their own version now." With it came an audio sticker someone had cut from the clip: three seconds of Raghad\'s voice in Hiba\'s accent. Raghad looked at the sticker for a long time. She remembered that she had done it because Taima said "do it", and that her hand had got there before her question, as it had many times before. And she wanted both things at once: to stay the funny girl in the class, and not to be the girl who made this.',
            'The Prophet, peace and blessings be upon him and his family, said, meaning: a person follows the way of his close friend, so let each of you look at whom he takes as a close friend (Sunan Abi Dawud 4833, and Sunan al-Tirmidhi 2378). A close friend is the companion who gets into the heart, and we take from them without noticing: their laugh, their words, what they find funny, what they find normal. Imitation in itself is a useful power; it is how a child learns speech, prayer and table manners. The hadith leaves everyone a practical question: whom do I imitate, and what am I taking from them?',
            'Adults imitate too, and more quietly: the tone a work group takes about one particular colleague, the message forwarded because everyone forwarded it, the opinion we adopt because our friends adopted it first. The young ones at home see all of it, and take it from us word and gesture alike, the way Aws took it from his sister.',
            'Before bed Raghad knocked on Aws\'s door and said: "Don\'t do Hiba again. It hurts her." He looked at her from under the covers and said simply: "But you do it." Raghad stood in the doorway with nothing to say. Then she switched off his light, went back to her room, and played the clip one last time with the sound off. Without the class laughing, all that was left was a girl reading slowly in a language not her own, pushing her glasses up.'
          ] },
        quiz: Q('monkey-adult', 2, [
          { correct: 1, q: { ar: 'ماذا قال أوس حين طلبت منه رغد ألا يقلّد هبة؟', en: 'What did Aws say when Raghad asked him not to imitate Hiba?' },
            options: [{ ar: 'المقطع عند كل أولاد مدرستي', en: 'Every kid at my school has the clip' }, { ar: 'لكنكِ أنتِ تفعلينها', en: 'But you do it' }, { ar: 'كنت أمزح، ولن أعيدها', en: 'I was joking, and I won\'t do it again' }],
            why: { ar: 'قلّد أوس أخته كما قلّدت هي هبة. والصغير يأخذ عن الكبير الحرف والحركة.', en: 'Aws copied his sister as she had copied Hiba. The young take word and gesture alike from the older ones.' } },
          { correct: 0, q: { ar: 'بماذا يوصي حديث «الرَّجُلُ عَلَى دِينِ خَلِيلِهِ»؟', en: 'What does the hadith "a person follows the way of his close friend" advise?' },
            options: [{ ar: 'أن ينظر الإنسان من يخالل', en: 'To look carefully at whom one befriends' }, { ar: 'أن يبتعد الإنسان عن الأصحاب', en: 'To keep away from friends' }, { ar: 'أن يكثر الإنسان من الأصحاب', en: 'To have as many friends as possible' }],
            why: { ar: 'الصاحب يدخل القلب، ويأخذ منه صاحبه دون أن يشعر. ولهذا يُختار.', en: 'A close friend gets into the heart, and we take from them without noticing. That is why they are chosen with care.' } }
        ]) },

      { title: { ar: 'الماء الذي يغلي', en: 'Water on the boil' },
        body: { ar: [
            'بعد يومين كانت رغد تذاكر الكيمياء في غرفتها، والهاتف على السرير، حين دخل أوس وأخذه وركض إلى الصالة. وقبل أن تلحق به كان قد فتح محادثتها مع تيماء، ووقف على الكرسي، وبدأ يقرأ رسائلها بصوت عال، بصوت يقلّدها فيه: نبرتها، وضحكتها القصيرة، وطريقتها في قول «يا بنت». وضحكت ابنة عمهما الصغيرة على الأريكة، وصفّقت.',
            'صعدت النار من صدر رغد إلى وجهها في ثانية. وعرفت الشعور قبل أن تفهمه: هو ما شعرت به هبة عند الخزائن، يصيبها الآن هي، أمام أهل البيت. ولم تفكر. انتزعت الهاتف من يده بقوة، فاختل الكرسي، وسقط أوس، وارتطم فمه بحافة الطاولة. ورأت على شفته خيطًا رفيعًا من الدم. وكانت هي التي صرخت، لا هو: «لا تلمس أغراضي!». ثم ركضت إلى الحمام، وأغلقت الباب بالمفتاح.',
            'وقد وصف الغزالي هذه الثانية في كتاب «ذم الغضب والحقد والحسد» من «الإحياء». فالغضب عنده شعلة نار، إذا اشتعلت غلى بها دم القلب، وانتشر في العروق، وارتفع إلى أعالي البدن كما يرتفع الماء الذي يغلي في القدر، فيحمرّ الوجه والعينان. ويصعد دخانه إلى الرأس فيُظلم العقل، فلا يرى صاحبه العواقب، ولا يسمع النصيحة. وفي القرآن وصف قصير لهذه العجلة التي تسبق الفكر: ﴿وَكَانَ الْإِنْسَانُ عَجُولًا﴾ (الإسراء 17:11).',
            'وكل من يقرأ هذه السطور يعرف الماء الذي يغلي: الكلمة التي تخرج في السيارة قبل أن نصل إلى البيت، والباب الذي يُصفق، والرسالة التي تُكتب في دقيقة ويُعتذر عنها شهرًا. والأب الذي يصرخ «لا تصرخ» يعرفه أكثر من غيره. وما فعلته رغد في ثانيتين يشبه ما فعلته بالمقطع: يد سبقت السؤال. وهذه المرة كان الثمن على شفة أخيها.',
            'في الحمام فتحت رغد الماء، ورفعت رأسها إلى المرآة. كان وجهها أحمر، والعروق ظاهرة في عنقها، وعيناها غريبتين عنها. لقد قلّدت مئة وجه في حياتها، ولم ترَ وجهها هي في هذه اللحظة قط. فغسلته بالماء البارد مرة، ثم مرة، ثم جلست على حافة حوض الاستحمام، تسمع من وراء الباب بكاء أوس، وصوت أمها يهدّئه.'
          ], en: [
            'Two days later Raghad was revising chemistry in her room, her phone on the bed, when Aws came in, grabbed it and ran into the living room. Before she could catch him he had opened her chat with Taima, climbed onto a chair, and started reading her messages out loud in a voice that imitated hers: her tone, her short laugh, the way she says "girl". Their little cousin on the sofa laughed and clapped.',
            'The fire rose from Raghad\'s chest to her face in a second. She knew the feeling before she understood it: it was what Hiba had felt by the lockers, landing on her now, in front of the family. She did not think. She snatched the phone out of his hand, the chair tipped, Aws fell, and his mouth hit the edge of the table. She saw a thin line of blood on his lip. And it was she who screamed, not him: "Don\'t touch my things!" Then she ran to the bathroom and locked the door.',
            'Al-Ghazali described that second in "The Condemnation of Anger, Rancour and Envy", a book of the "Ihya\'". For him, in meaning, anger is a flame: when it catches, the heart\'s blood boils, spreads through the veins and rises to the top of the body the way water rises when it boils in a pot, so the face and the eyes turn red. Its smoke rises to the head and darkens the mind, so the angry person no longer sees consequences or hears advice. And the Quran describes, in a few words, the haste that runs ahead of thought. Meaning: and the human being is ever hasty (al-Isra\' 17:11).',
            'Everyone reading this knows the water on the boil: the word that comes out in the car before we even get home, the door that slams, the message typed in a minute and apologised for over a month. The parent who shouts "stop shouting" knows it better than anyone. What Raghad did in two seconds was like what she had done with the clip: a hand that got there before the question. This time the cost was on her brother\'s lip.',
            'In the bathroom Raghad turned on the tap and looked up into the mirror. Her face was red, the veins stood out in her neck, and her eyes were a stranger\'s. She had imitated a hundred faces in her life, and had never once seen her own face at a moment like this. She washed it with cold water, once, then again, then sat on the edge of the bath, listening through the door to Aws crying and her mother\'s voice calming him.'
          ] },
        quiz: Q('monkey-adult', 3, [
          { correct: 2, q: { ar: 'ماذا كان أوس يفعل بهاتف رغد؟', en: 'What was Aws doing with Raghad\'s phone?' },
            options: [{ ar: 'يلعب لعبة ويرفض أن يعيده', en: 'Playing a game and refusing to give it back' }, { ar: 'يحذف صورها واحدة بعد واحدة', en: 'Deleting her photos one by one' }, { ar: 'يقرأ رسائلها بصوت يقلّدها فيه', en: 'Reading her messages aloud in an imitation of her voice' }],
            why: { ar: 'ذاقت رغد ما ذاقته هبة: أن يُقلَّد صوتها أمام الناس. فاشتعلت النار قبل أن تفكر.', en: 'Raghad tasted what Hiba had tasted: her own voice imitated in front of others. The fire caught before she could think.' } },
          { correct: 0, q: { ar: 'بماذا شبّه الغزالي ارتفاع الغضب في البدن؟', en: 'What did al-Ghazali compare anger rising through the body to?' },
            options: [{ ar: 'بالماء الذي يغلي في القدر', en: 'Water boiling in a pot' }, { ar: 'بالريح التي تقتلع الشجر', en: 'A wind uprooting trees' }, { ar: 'بالسيل الذي يهدم البيوت', en: 'A flood knocking down houses' }],
            why: { ar: 'يغلي دم القلب ويرتفع إلى الوجه فيحمرّ، كما رأت رغد في المرآة.', en: 'The heart\'s blood boils and rises to the face and reddens it, as Raghad saw in the mirror.' } }
        ]) },

      { title: { ar: 'الأناة', en: 'Taking one\'s time' },
        body: { ar: [
            'بعد ساعة طرق أبوها باب الحمام، وقال: «لن أدخل. أنا جالس هنا». وسمعته يجلس على أرض الممر، وظهره إلى الباب. ففتحت رغد الباب قليلًا، وجلست في الجهة الأخرى. قالت: «أمي تقول إن شفته ستُشفى». ثم سكتت طويلًا، وقالت: «كل ما فيّ سرعة يا بابا. تقاريري كلها تقول هذا منذ الروضة».',
            'قال أبوها: «وأنا كنت كذلك. في سنتي الأولى في العمل كتبت لمديري رسالة غاضبة في دقيقة، وقضيت سنة أصلح ما فعلته تلك الدقيقة». ثم حكى لها عن وفد عبد القيس حين قدموا على النبي صلى الله عليه وآله وسلم في المدينة: تسابقوا عن رواحلهم إليه، وانتظر رجل منهم يقال له الأشج، حتى أتى متاعه فلبس ثوبيه، ثم جاء. فقال له النبي صلى الله عليه وآله وسلم: «إِنَّ فِيكَ خَصْلَتَيْنِ يُحِبُّهُمَا اللَّهُ: الْحِلْمُ وَالْأَنَاةُ» (صحيح مسلم 17، وخبر انتظاره في سنن أبي داود 5225). والأناة أن يتمهل الإنسان قبل أن يفعل، فيسبق فكرُه يدَه. وفي رواية أبي داود سأل الأشج: أنا أتخلّق بهما، أم الله جبلني عليهما؟ فقال صلى الله عليه وآله وسلم: «بَلِ اللَّهُ جَبَلَكَ عَلَيْهِمَا».',
            'قالت رغد: «هو جُبل عليهما. وأنا جُبلت على العكس». فقال أبوها: «والأشج سأل لأن الطريقين معروفان: خلق يولد مع صاحبه، وخلق يُكتسب». ثم ذكر لها ما كتبه الغزالي في كتاب «رياضة النفس» من «الإحياء»، بالمعنى: من أراد أن يكتسب خلقًا حسنًا فطريقه أن يتكلف أفعال صاحبه، ويواظب عليها مجاهدًا نفسه، حتى تصير له طبعًا. وجعل الغزالي علاج الغضب بابين: علمًا، أن يتفكر الغاضب في عاقبة غضبه وفي قبح صورته حين يغضب، وعملًا، أن يستعيذ بالله ويغيّر حاله. وقال أبوها: «أنتِ تقلّدين أي إنسان في عشرين ثانية. قلّدي الحلم شهرًا».',
            'وعلّمها ما علّمه النبي صلى الله عليه وآله وسلم لمن غضب: «إِذَا غَضِبَ أَحَدُكُمْ وَهُوَ قَائِمٌ فَلْيَجْلِسْ، فَإِنْ ذَهَبَ عَنْهُ الْغَضَبُ وَإِلَّا فَلْيَضْطَجِعْ» (سنن أبي داود 4782). ورأى النبي صلى الله عليه وآله وسلم رجلًا يسبّ صاحبه وقد احمرّ وجهه، فقال: «إِنِّي لَأَعْلَمُ كَلِمَةً لَوْ قَالَهَا لَذَهَبَ عَنْهُ مَا يَجِدُ، لَوْ قَالَ: أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ» (صحيح البخاري 6115). فاختارت رغد لنفسها ثلاث حركات تقلّدها حتى تصير لها: تجلس، وتضع كفيها مفتوحتين على ركبتيها، وتقول الكلمة. وجعلت خلفية شاشة هاتفها سطرًا واحدًا بخط كبير: «اجلسي أولًا».',
            'في الصباح كان أوس على المائدة، وعلى شفته أثر صغير منتفخ. جلست رغد أمامه وقالت: «آسفة يا أوس. يدي سبقتني، ولن تسبقني إليك مرة أخرى». فنظر إليها، ثم قلّدها بصوت مبالغ فيه: «آسفة يا أوس، يدي سبقتني...»، وانتظر. وشعرت رغد بالحرارة تصعد إلى وجهها من جديد، وهي جالسة أصلًا. فوضعت كفيها على ركبتيها، وقالت الكلمة في سرها، ثم ضحكت وقالت: «الحاجبان أعلى من هذا». فضحك أوس حتى شرق بالحليب.'
          ], en: [
            'An hour later her father knocked on the bathroom door and said: "I\'m not coming in. I\'m sitting here." She heard him sit down on the corridor floor with his back to the door. Raghad opened the door a little and sat down on the other side. She said: "Mum says his lip will heal." Then she was quiet for a long time, and said: "Everything in me is speed, Baba. Every report has said so since kindergarten."',
            'Her father said: "I was the same. In my first year at work I wrote my manager an angry email in one minute, and spent a year repairing what that minute did." Then he told her about the delegation of Abd al-Qays when they came to the Prophet, peace and blessings be upon him and his family, in Madina: they raced from their mounts to reach him, while one of them, a man called al-Ashajj, waited, went to his baggage, put on his two garments, and then came. The Prophet, peace and blessings be upon him and his family, said to him, meaning: there are two traits in you that Allah loves, forbearance and deliberateness (Sahih Muslim 17; the account of his waiting is in Sunan Abi Dawud 5225). Deliberateness means taking your time before you act, so that thought goes ahead of the hand. In Abu Dawud\'s narration al-Ashajj asked: do I put these on by effort, or did Allah create me with them? He, peace and blessings be upon him and his family, answered, meaning: Allah created you with them.',
            'Raghad said: "He was born with them. I was born with the opposite." Her father said: "Al-Ashajj asked because both roads are known: character a person is born with, and character a person earns." Then he told her what al-Ghazali wrote in the book "Disciplining the Soul" of the "Ihya\'", in meaning: whoever wants to acquire a good trait should take on its actions deliberately and keep at them, struggling with the self, until they become nature. And al-Ghazali gave anger a treatment with two doors: knowledge, where the angry person reflects on where anger leads and on how ugly they look in its grip; and action, where they seek refuge in Allah and change their position. Her father said: "You can imitate anyone in twenty seconds. Imitate forbearance for a month."',
            'He taught her what the Prophet, peace and blessings be upon him and his family, taught whoever is angry. Meaning: if one of you becomes angry while standing, let him sit; if the anger leaves him, good, and if not, let him lie down (Sunan Abi Dawud 4782). And the Prophet, peace and blessings be upon him and his family, saw a man insulting another, his face gone red, and said, meaning: I know a word which, if he said it, would take away what he feels; if he said: I seek refuge in Allah from the accursed devil (Sahih al-Bukhari 6115). So Raghad picked three moves to imitate until they became hers: sit down, rest both palms open on her knees, and say the words. And she made her lock screen a single line in large letters: "Sit first."',
            'In the morning Aws was at the breakfast table with a small swollen mark on his lip. Raghad sat down opposite him and said: "Sorry, Aws. My hand got there before me, and it won\'t get to you again." He looked at her, then imitated her in an exaggerated voice: "Sorry, Aws, my hand got there before me..." and waited. Raghad felt the heat climbing to her face again, and she was already sitting. So she put her palms on her knees, said the words under her breath, then laughed and said: "The eyebrows go higher than that." And Aws laughed so hard he choked on his milk.'
          ] },
        quiz: Q('monkey-adult', 4, [
          { correct: 1, q: { ar: 'ما الخصلتان اللتان قال النبي صلى الله عليه وآله وسلم للأشج إن الله يحبهما؟', en: 'What two traits did the Prophet, peace and blessings be upon him and his family, tell al-Ashajj that Allah loves?' },
            options: [{ ar: 'الشجاعة والكرم', en: 'Courage and generosity' }, { ar: 'الحلم والأناة', en: 'Forbearance and deliberateness' }, { ar: 'الصبر والصدق', en: 'Patience and truthfulness' }],
            why: { ar: 'تمهّل الأشج حين تسابق غيره، والأناة أن يسبق الفكرُ الفعل.', en: 'Al-Ashajj took his time while the others raced ahead; deliberateness means thought goes before the act.' } },
          { correct: 2, q: { ar: 'ماذا فعلت رغد حين قلّدها أوس على المائدة؟', en: 'What did Raghad do when Aws imitated her at breakfast?' },
            options: [{ ar: 'أخذت كوب الحليب من يده بقوة', en: 'She snatched the glass of milk from his hand' }, { ar: 'قامت عن المائدة دون أن تتكلم', en: 'She got up from the table without a word' }, { ar: 'وضعت كفيها على ركبتيها، ثم ضحكت', en: 'She put her palms on her knees, then laughed' }],
            why: { ar: 'قلّدت رغد الحلم كما قال أبوها، فوجدت الضحكة مكان الصرخة.', en: 'Raghad imitated forbearance, as her father had said, and found a laugh where the scream used to be.' } }
        ]) },

      { title: { ar: 'الجزء الثاني', en: 'Part two' },
        body: { ar: [
            'في الأسبوع التالي كتبت تيماء في المجموعة: «متى الجزء الثاني يا رغد؟»، ووضعت الملصق الصوتي تحت السؤال. وكانت رغد قد قضت أيامًا تبحث عن طريقة تصلح بها ما فعلت. فكّرت في مقطع اعتذار تنشره للجميع، ثم تخيّلت هبة ترى نفسها في المجموعة مرة أخرى، ولو في اعتذار، فتركت الفكرة. وفي الاستراحة جلست بجانب هبة في المكتبة، وقالت: «المقطع كان مني. أنا آسفة. ماذا تريدين أن أفعل؟». سكتت هبة طويلًا، ثم قالت: «أريد أن يتوقفوا عن تشغيله».',
            'ففعلت رغد الشيء الأصعب. كتبت في المجموعة، باسمها، أمام الجميع: «المقطع الذي صنعته في الاستراحة كان خطأ مني. أرجو من كل من عنده أن يحذفه، ولن يكون له جزء ثانٍ». ثم كتبت لتيماء وحدها أن تحذفه من أصله. وجاءت الردود: بعضهم كتب «احترام»، وبعضهم أرسل وجوهًا تضحك، وكتب أحدهم: «رغد صارت واعظة!». وصار الملصق يُرسَل إليها هي هذه المرة. وعرفت رغد طعم أن تكون موضوع الضحك، وبقيت جالسة، وكفاها على ركبتيها.',
            'وكانت في صدرها في تلك الساعة نار من نوع آخر، نار تريد أن تقف مع هبة. وقد ذكر الغزالي في كتاب الغضب من «الإحياء» للغضب ثلاث درجات: التفريط، أن يفقد الإنسان غضبه فلا يتحرك حين يُظلم أحد أمامه، والإفراط، أن يغلب الغضب حتى يخرج عن سياسة العقل والدين، والاعتدال بينهما، وهو المحمود. وجعل ابن مسكويه في «تهذيب الأخلاق» فضيلة القوة الغضبية الشجاعة، وهي وسط بين التهور والجبن. فالسرعة التي كانت في يد رغد يوم المقطع ويوم الهاتف، صارت في هذه الرسالة إقدامًا في موضعه.',
            'وقال النبي صلى الله عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ» (صحيح البخاري 10). وفي الحديث ذكر اللسان قبل اليد، وفي قصة رغد بدأ الأذى بعشرين ثانية من اللسان، ثم وصل إلى اليد على شفة أخيها. وكل من يقرأ هذه السطور، في السادسة عشرة أو في الأربعين، يعرف من يحتاج أن يسلم منه هذا الأسبوع: زميل يُقلَّد في غيابه، أو ولد يُضحك منه على المائدة، أو مجموعة يُظلم فيها أحد ونحن نقرأ ونسكت.',
            'يوم الخميس جاء دور هبة في القراءة في حصة الإنجليزية. وكانت ركبة رغد تهتز تحت الطاولة كعادتها، وهاتفها مقلوب على وجهه، وعيناها على هبة. وفي الصف الأخير بدأ أحدهم يشغّل الملصق، فالتفتت إليه رغد، ونظرت إليه حتى أطفأه. وأكملت هبة السطر، ثم رفعت إصبعها ودفعت نظارتها إلى أعلى أنفها، حتى آخرها هذه المرة. وبعد الحصة جاءت إلى رغد وقالت: «أنتِ تسمعين اللهجات أحسن من أي أحد. هل تساعدينني في نطق الإنجليزية؟». فابتسمت رغد، وأخرجت دفترها، وسألت نفسها: ماذا تكون الموهبة، إن لم تكن لهذا؟'
          ], en: [
            'The following week Taima wrote in the group: "When\'s part two, Raghad?" and put the audio sticker under the question. Raghad had spent days looking for a way to repair what she had done. She thought of posting an apology clip for everyone, then pictured Hiba seeing herself in the group yet again, even in an apology, and let the idea go. At break she sat next to Hiba in the library and said: "The clip was mine. I\'m sorry. What do you want me to do?" Hiba was quiet for a long while, then said: "I want them to stop playing it."',
            'So Raghad did the hardest thing. She wrote in the group, under her own name, in front of everyone: "The clip I made at break was wrong of me. Please, everyone who has it, delete it. There won\'t be a part two." Then she wrote to Taima alone, asking her to delete the original. The replies came: some wrote "respect", some sent laughing faces, and one wrote: "Raghad\'s turned preacher!" Now the sticker was being sent to her. Raghad learned what it tastes like to be the joke, and she stayed sitting, her palms on her knees.',
            'In that hour there was another kind of fire in her chest, a fire that wanted to stand with Hiba. Al-Ghazali, in the book on anger in the "Ihya\'", gave anger three degrees: deficiency, losing one\'s anger so that one is not moved when someone is wronged in front of them; excess, when anger takes over until it leaves the governance of reason and religion; and the balance between them, which is the praiseworthy one. And Ibn Miskawayh, in "Tahdhib al-Akhlaq" (The Refinement of Character), made courage the virtue of the irascible power, a middle between recklessness and cowardice. The speed that had been in Raghad\'s hand on the day of the clip and the day of the phone had become, in this message, boldness in its proper place.',
            'The Prophet, peace and blessings be upon him and his family, said, meaning: the Muslim is the one from whose tongue and hand the Muslims are safe (Sahih al-Bukhari 10). The hadith mentions the tongue before the hand, and in Raghad\'s story the harm began with twenty seconds of the tongue and reached the hand on her brother\'s lip. Everyone reading this, at sixteen or at forty, knows who needs to be safe from them this week: a colleague imitated behind their back, a child laughed at over dinner, or a group where someone is being wronged while we read and say nothing.',
            'On Thursday it was Hiba\'s turn to read in English. Raghad\'s knee bounced under the desk as always, her phone lay face down, and her eyes were on Hiba. At the back someone started playing the sticker; Raghad turned round and looked at him until he switched it off. Hiba finished the line, then lifted a finger and pushed her glasses up her nose, all the way this time. After the lesson she came over to Raghad and said: "You hear accents better than anyone. Will you help me with my English pronunciation?" Raghad smiled, took out her notebook, and asked herself: what is a gift for, if not for this?'
          ] },
        quiz: Q('monkey-adult', 5, [
          { correct: 0, q: { ar: 'ماذا طلبت هبة حين سألتها رغد ماذا تريد؟', en: 'What did Hiba ask for when Raghad asked what she wanted?' },
            options: [{ ar: 'أن يتوقفوا عن تشغيل المقطع', en: 'That they stop playing the clip' }, { ar: 'أن تعتذر رغد في مقطع للجميع', en: 'That Raghad apologise in a clip for everyone' }, { ar: 'أن تبتعد عنها رغد بقية السنة', en: 'That Raghad keep away from her for the rest of the year' }],
            why: { ar: 'سألت رغد قبل أن تصلح، فأصلحت ما تحتاجه هبة، وحفظت وجهها.', en: 'Raghad asked before she repaired, so she mended what Hiba needed, and spared her face.' } },
          { correct: 1, q: { ar: 'أي درجات الغضب محمودة عند الغزالي؟', en: 'Which degree of anger does al-Ghazali praise?' },
            options: [{ ar: 'التفريط، أن يفقد الإنسان غضبه', en: 'Deficiency, losing one\'s anger' }, { ar: 'الاعتدال بين التفريط والإفراط', en: 'Balance, between deficiency and excess' }, { ar: 'الإفراط، إذا كان الغضب للحق', en: 'Excess, when the anger is for what is right' }],
            why: { ar: 'غضبت رغد لهبة بقدر، وقالت الحق باسمها، وكفاها على ركبتيها. ومن يسلم الناس من لسانه ويده يقف عند باب السبابة.', en: 'Raghad was angry for Hiba in due measure, spoke up under her own name, palms on her knees. Whoever keeps people safe from their tongue and hand stands at the door of the index finger.' } }
        ]) }
    ]
  });
})();

(function () {
  var Q = window.AKHLAQ_BQ;
  window.AKHLAQ_BOOKS.push({
    id: 'book-human-adult', stage: 'human', ages: '15+',
    title: { ar: 'نعم في ثانيتين', en: 'Yes in two seconds' },
    chapters: [
      { title: { ar: 'نعم في ثانيتين', en: 'Yes in two seconds' },
        body: { ar: [
            'ليث في السادسة عشرة، ويقول «نعم» أسرع من أي أحد يعرفه: نعم للمدرب حين يحتاج حارس مرمى، ونعم لأمه حين تطلب الخبز، ونعم لكل من يكتب في مجموعة الصف «من يرسل لي الحل؟». يحب أن يكون الذي يُعتمد عليه، ويحب أكثر من ذلك النظرة التي تأتيه حين يقولها. وفي أول الفصل، بعد صلاة الجمعة، أوقفه الأستاذ فؤاد عند باب المسجد. الأستاذ فؤاد يدير نادي الواجبات للصغار يوم السبت، وقال: «عندي ولد في العاشرة اسمه يوسف، يكره الكسور كرهًا شديدًا، وأمه تعمل يوم السبت. تأخذه كل سبت في العاشرة، حتى آخر الفصل؟». وكان ليث يكتب رسالة في هاتفه، فرفع رأسه وقال: «نعم، أكيد». ثانيتان، وعاد إلى الرسالة.',
            'وفي السبتين الأولين ذهب. يوسف صغير الجسم، يمسك القلم من آخره، ويقول عن كل مسألة «هذه مستحيلة» قبل أن يقرأها. فرسم له ليث بيتزا على الورقة، وقطّعها ثماني قطع، و«أكل» منها ثلاثًا بالقلم، فضحك يوسف لأول مرة وقال: «بقي خمسة أثمان!». وفي آخر الحصة الثانية طوى يوسف ورقة الكسور ووضعها في جيبه، وقال: «السبت القادم أحلّ لك ورقة كاملة وحدي».',
            'وفي ليلة الجمعة الثالثة جاءت رسالة كريم في مجموعة الفريق: «النهائي غدًا العاشرة. حارسنا مريض. ليث، أنت الحارس، ولا تقل لا». وتحتها عشرة ردود: «ليث!»، «البطل!»، «الحارس الأسطوري». ونظر ليث إلى الساعة: العاشرة يوسف، والعاشرة النهائي. وكانت تمر في رأسه آية يحفظها منذ صغره: ﴿وَأَوْفُوا بِالْعَهْدِ ۖ إِنَّ الْعَهْدَ كَانَ مَسْئُولًا﴾ (الإسراء 17:34)، وهو يكتب ويمسح ويكتب. وفي الصباح كتب للأستاذ فؤاد: «السلام عليكم أستاذ، عندي حرارة اليوم، أعتذر». وأرسلها، ولبس قفازيه.',
            'وكل من يقرأ هذه السطور يعرف «نعم» السريعة: «أكيد، أرسله لك الليلة»، و«أتصل بك بعد قليل»، و«نخرج يوم الجمعة» تُقال لولد يعدّ الأيام من الأحد. تخرج الكلمة في ثانيتين لأنها مريحة في لحظتها، ثم تبقى على صاحبها دَينًا. والآية تقول: ﴿إِنَّ الْعَهْدَ كَانَ مَسْئُولًا﴾، فهو سؤال سيأتي، يُسأل عنه صاحبه، ولو نسيه هو.',
            'وفاز الفريق. صدّ ليث ركلة جزاء في آخر دقيقة، فرفعه الأولاد على أكتافهم، ونشر كريم الصورة: ليث في الوسط، والقفازان في الهواء. وبعد الظهر وصل رد الأستاذ فؤاد: «شفاك الله يا ليث. يوسف انتظرك عند الباب ساعة، وفي يده ورقة كسور حلّها كلها وحده. ثم قال: لعله يأتي متأخرًا». وكانت الصورة على حساب ليث منذ ساعتين، والأستاذ فؤاد من متابعيه. فوضع إبهامه على زر الحذف، ثم رفعه: الحذف كذبة ثانية فوق الأولى. وقلب الهاتف على وجهه، وبقي جالسًا على حافة السرير، والقفازان في يديه.'
          ], en: [
            'Layth is sixteen, and he says "yes" faster than anyone he knows: yes to the coach when he needs a goalkeeper, yes to his mother when she asks for bread, yes to anyone in the class group who writes "who can send me the answers?" He likes being the one people rely on, and he likes even more the look he gets when he says it. At the start of term, after Friday prayer, Ustadh Fuad stopped him at the mosque door. Ustadh Fuad runs the Saturday homework club for the little ones, and he said: "I have a ten-year-old called Yusuf who hates fractions with a passion, and his mother works on Saturdays. Will you take him every Saturday at ten, until the end of term?" Layth was typing a message on his phone. He looked up and said: "Yes, sure." Two seconds, and he was back to his message.',
            'For the first two Saturdays he went. Yusuf is small for his age, holds his pencil by the very end, and says "this one\'s impossible" about every problem before reading it. So Layth drew a pizza on the sheet, cut it into eight slices and "ate" three of them with his pen, and Yusuf laughed for the first time: "Five eighths left!" At the end of the second session Yusuf folded the fractions sheet, put it in his pocket and said: "Next Saturday I\'ll solve a whole sheet for you on my own."',
            'On the third Thursday night Karim\'s message arrived in the team group: "Final tomorrow at ten. Our keeper is sick. Layth, you\'re in goal, and don\'t say no." Under it came ten replies: "Layth!", "The hero!", "Legendary keeper." Layth looked at the time: ten o\'clock was Yusuf, and ten o\'clock was the final. A verse he had known since childhood kept passing through his head as he typed, deleted and typed again: "And fulfil the covenant; the covenant will be asked about" (al-Isra 17:34, meaning). In the morning he wrote to Ustadh Fuad: "Assalamu alaykum, Ustadh, I have a fever today, sorry." He sent it, and pulled on his gloves.',
            'Everyone reading these lines knows the quick yes: "Sure, I\'ll send it tonight," "I\'ll call you back in a minute," "We\'ll go out on Friday," said to a child who starts counting the days on Sunday. The word comes out in two seconds because it is comfortable in the moment, and then it stays on its owner like a debt. The verse says the covenant "will be asked about", so it is a question that is coming, put to the one who gave it, even if he himself forgets.',
            'The team won. Layth saved a penalty in the last minute, the boys lifted him onto their shoulders, and Karim posted the photo: Layth in the middle, gloves in the air. In the afternoon Ustadh Fuad\'s reply came: "May Allah heal you, Layth. Yusuf waited for you at the door for an hour, holding a fractions sheet he had solved entirely by himself. Then he said: maybe he is just late." The photo had been on Layth\'s account for two hours, and Ustadh Fuad was one of his followers. He put his thumb on the delete button, then lifted it: deleting it would be a second lie on top of the first. He turned the phone face down and stayed sitting on the edge of the bed, the gloves still in his hands.'
          ] },
        quiz: Q('human-adult', 1, [
          { correct: 1, q: { ar: 'ماذا كتب ليث للأستاذ فؤاد صباح النهائي؟', en: 'What did Layth write to Ustadh Fuad on the morning of the final?' },
            options: [{ ar: '«نسيت أن عندي مباراة، أعتذر»', en: '"I forgot I have a match, sorry"' }, { ar: '«عندي حرارة اليوم، أعتذر»', en: '"I have a fever today, sorry"' }, { ar: '«آتي بعد المباراة، في الحادية عشرة»', en: '"I\'ll come after the match, at eleven"' }],
            why: { ar: 'غطّى الوعد الذي أخلفه بكذبة في سطر واحد.', en: 'He covered the promise he broke with a one-line lie.' } },
          { correct: 0, q: { ar: 'ماذا كان في يد يوسف وهو ينتظر عند الباب؟', en: 'What was Yusuf holding as he waited at the door?' },
            options: [{ ar: 'ورقة كسور حلّها كلها وحده', en: 'A fractions sheet he had solved entirely on his own' }, { ar: 'رسم البيتزا المقطّعة ثماني قطع', en: 'The drawing of the pizza cut into eight' }, { ar: 'ورقة فارغة لم يحل منها شيئًا', en: 'A blank sheet with nothing solved' }],
            why: { ar: 'وفى الصغير بوعده، وانتظر الكبير الذي وعده.', en: 'The little one kept his promise, and waited for the older one who had made his.' } }
        ]) },

      { title: { ar: 'الصوت الذي لا يسكت', en: 'The voice that will not go quiet' },
        body: { ar: [
            'في تلك الليلة لم ينم ليث. كانت المجموعة تمتلئ بالفوز، والصور تتوالى، وفي رأسه صورة واحدة لا يراها أحد غيره: ولد في العاشرة عند باب المسجد، يطوي ورقة ويفتحها. وتذكر حديثًا حفظه في المدرسة ولم يفكر فيه يومًا: «آيَةُ الْمُنَافِقِ ثَلَاثٌ: إِذَا حَدَّثَ كَذَبَ، وَإِذَا وَعَدَ أَخْلَفَ، وَإِذَا اؤْتُمِنَ خَانَ» (صحيح البخاري 33). فعدّ على أصابعه: وعد أخلفه، وحديث كذب فيه، والاثنان في رسالة واحدة. وشعر بالبرد وهو تحت الغطاء.',
            'ولهذا الصوت الذي لا يسكت اسم في القرآن، أقسم الله به: ﴿وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ﴾ (القيامة 75:2)، النفس التي تلوم صاحبها بعد الخطأ. وقد عقد أبو حامد الغزالي في «إحياء علوم الدين» كتابًا في المراقبة والمحاسبة، شبّه فيه العقل بتاجر والنفس بشريكه: يشارطه في أول النهار، ويراقبه في أثنائه، ويحاسبه في آخره على ما ربح وما ضيّع (بالمعنى). واللوم أول هذه المحاسبة، وبعده سؤال أصعب منه: ماذا أفعل الآن؟',
            'وكان أمامه طريقان سهلان. أن يسكت، فينسى الأستاذ فؤاد بعد أسبوع، ويجد ليوسف متطوعًا غيره. أو أن يذهب ويقول: «تحسنت والحمد لله، وأرجع السبت»، فتنتهي القصة بنصف كذبة لا يعرفها أحد. وكتب هذه الرسالة الثانية فعلًا، ونظر إليها طويلًا، ثم مسحها حرفًا حرفًا.',
            'والكبير يعرف هذا المفترق جيدًا: الموعد الذي فات، والتقرير الذي تأخر، والعذر الجاهز الذي يحفظ الوجه ويُبقي الخطأ في مكانه. والاعتراف يُدفع ثمنه الآن، في الوجه وفي الصوت. والعذر يُدفع ثمنه بعد ذلك، وبالتقسيط، لأنه يحتاج كذبة أخرى ليعيش.',
            'يوم الأحد بعد العصر وقف ليث عند باب غرفة الأستاذ فؤاد في المسجد. ولما رآه الأستاذ قال: «الحمد لله على السلامة». فقال ليث بسرعة، قبل أن يتراجع: «ما كانت عندي حرارة يا أستاذ. ذهبت إلى المباراة، وكذبت عليك». وسكت الأستاذ فؤاد طويلًا. ثم فتح الدرج، وأخرج ورقة مطوية مرات كثيرة، وناوله إياها: «هذه ورقة يوسف، تركها لك عند الباب. أما أن يصدقك السبت القادم، فهذا شيء تكسبه أنت». وفتح ليث الورقة في الطريق: الكسور كلها محلولة، وفي آخرها بخط مائل: «لليث».'
          ], en: [
            'That night Layth could not sleep. The group was filling up with the win, photo after photo, and in his head was one picture nobody else could see: a ten-year-old at the mosque door, folding and unfolding a sheet of paper. He remembered a hadith he had memorised at school and never once thought about: "The signs of the hypocrite are three: when he speaks he lies, when he promises he breaks it, and when he is trusted he betrays" (Sahih al-Bukhari 33). He counted on his fingers: a promise broken, a word that was a lie, both in a single message. He felt cold, under the blanket.',
            'This voice that will not go quiet has a name in the Quran, and Allah swears by it: "And I swear by the self-reproaching soul" (al-Qiyama 75:2, meaning), the soul that blames its owner after a wrong. Abu Hamid al-Ghazali devoted a book of his Ihya Ulum al-Din to watchfulness and self-accounting, likening the mind to a merchant and the self to his partner: he sets terms with it at the start of the day, watches it through the day, and at the end of the day takes account of what it earned and what it wasted (in meaning). Blame is the first part of that accounting, and after it comes a harder question: what do I do now?',
            'He had two easy roads in front of him. He could say nothing; Ustadh Fuad would forget within a week and find Yusuf another volunteer. Or he could go and say: "I\'m better, alhamdulillah, I\'ll be back on Saturday," and the story would end with half a lie that nobody would ever know about. He actually typed that second message, looked at it for a long time, then deleted it letter by letter.',
            'Adults know this crossroads well: the missed appointment, the late report, the ready-made excuse that saves face and leaves the mistake where it is. Owning up is paid for now, in the face and in the voice. The excuse is paid for later, in instalments, because it needs another lie to stay alive.',
            'On Sunday after asr Layth stood at the door of Ustadh Fuad\'s room at the mosque. When the Ustadh saw him he said: "Glad to see you well." Layth said quickly, before he could back out: "I didn\'t have a fever, Ustadh. I went to the match, and I lied to you." Ustadh Fuad was silent for a long time. Then he opened his drawer, took out a sheet of paper folded many times over, and handed it to him: "This is Yusuf\'s sheet. He left it for you at the door. As for whether he believes you next Saturday, that is something you will have to earn." Layth unfolded it on the way home: every fraction solved, and at the bottom, in slanting handwriting: "For Layth."'
          ] },
        quiz: Q('human-adult', 2, [
          { correct: 2, q: { ar: 'ماذا عدّ ليث على أصابعه ليلة النهائي؟', en: 'What did Layth count on his fingers on the night of the final?' },
            options: [{ ar: 'الركلات التي صدّها في النهائي', en: 'The shots he saved in the final' }, { ar: 'السبوت الباقية حتى آخر الفصل', en: 'The Saturdays left until the end of term' }, { ar: 'خصلتين من حديث «آية المنافق» في رسالة واحدة', en: 'Two traits from the hadith on "the signs of the hypocrite" in one message' }],
            why: { ar: 'رأى في رسالة واحدة وعدًا أخلفه وكلامًا كذب فيه، فبدأت نفسه تلومه.', en: 'In one message he saw a promise broken and a word that was a lie, and his soul began to reproach him.' } },
          { correct: 1, q: { ar: 'ماذا أعطى الأستاذ فؤاد ليثًا بعد أن اعترف؟', en: 'What did Ustadh Fuad give Layth after he owned up?' },
            options: [{ ar: 'جدولًا جديدًا لأيام السبت', en: 'A new Saturday timetable' }, { ar: 'ورقة يوسف المطوية التي تركها له', en: 'The folded sheet Yusuf had left for him' }, { ar: 'رسالة من أم يوسف تعاتبه فيها', en: 'A note from Yusuf\'s mother reproaching him' }],
            why: { ar: 'أعطاه ورقة الولد الذي انتظره، وترك له أن يكسب ثقته بفعله.', en: 'He gave him the sheet of the boy who had waited, and left it to him to earn that trust by what he did.' } }
        ]) },

      { title: { ar: 'السبت الرابع', en: 'The fourth Saturday' },
        body: { ar: [
            'في السبت التالي كان ليث عند الباب في العاشرة إلا دقيقة. وجاء يوسف مع أخته الكبيرة، فرآه، ومر بجانبه ودخل، وجلس في أبعد طاولة، وفتح دفتر الرسم. قال ليث: «صباح الخير يا يوسف». فقال يوسف وعيناه على الدفتر: «قالوا إنك كنت مريضًا».',
            'وكان يستطيع أن يقول «نعم» ويبدأ الدرس. فجلس أمامه وقال: «ما كنت مريضًا. ذهبت ألعب مباراة، وكذبت على الأستاذ فؤاد. وأنت انتظرتني ساعة. آسف». ورفع يوسف رأسه ببطء، ونظر إليه كمن يرى شيئًا لأول مرة: كبير يعتذر لصغير. ثم سأل: «فزتم؟». قال ليث: «فزنا». فقال يوسف: «إذن أعطني مسألة صعبة».',
            'ثم توالت السبوت. ذهب الحماس الذي كان في السبت الأول، وبقي التعب. وفي السبت الرابع كانت السماء تمطر منذ الفجر، وكان ليث قد سهر على واجب الفيزياء، والمجموعة تقول إن الشباب سيلعبون في الصالة المغلقة. ولو نام، فلن يعرف أحد: الأستاذ فؤاد مسافر هذا الأسبوع، والنادي يفتحه حارس المسجد، ويوسف قد لا يأتي في هذا المطر. وكان يعرف الحديث: «أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ تَعَالَى أَدْوَمُهَا وَإِنْ قَلَّ» (صحيح مسلم 783). وفهم ذلك الصباح لماذا يُحَب الدائم: لأنه يُعمل في اليوم الذي لا حماس فيه.',
            'وكان في الدرس شيء آخر لا يراه أحد. كان يستطيع أن يملي على يوسف الأجوبة، فتمتلئ الورقة وينتهي الوقت. فصار يحضّر في الليل: يرسم فطائر وبرتقالات وساعات، ويكتب لكل سبت مسألة فيها اسم يوسف وكرة قدم. وما كان أحد يفحص تحضيره. وقد سأل جبريل عليه السلام النبي صلى الله عليه وآله وسلم عن الإحسان، فقال: «أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ» (صحيح البخاري 50). وفي الورقة التي لا يراجعها أحد، يبدأ هذا المعنى صغيرًا.',
            'ولبس ليث معطفه، ومشى إلى المسجد تحت المطر، يقول في نفسه إن يوسف لن يأتي في هذا الجو. وكان يوسف واقفًا تحت المظلة الصغيرة عند الباب، وحذاؤه مبلول، والورقة في يده. قال: «قلت لأمي إنك ستأتي». فطوى ليث مظلته، ومسح الماء عن الورقة بطرف كمّه، وجلسا.'
          ], en: [
            'The next Saturday Layth was at the door at one minute to ten. Yusuf arrived with his older sister, saw him, walked past him and went in, sat at the farthest table and opened his drawing book. Layth said: "Good morning, Yusuf." Yusuf said, his eyes on the book: "They said you were sick."',
            'He could have said "yes" and started the lesson. Instead he sat down opposite him and said: "I wasn\'t sick. I went to play a match, and I lied to Ustadh Fuad. And you waited an hour for me. I\'m sorry." Yusuf slowly raised his head and looked at him like someone seeing a thing for the first time: an older boy apologising to a younger one. Then he asked: "Did you win?" Layth said: "We won." And Yusuf said: "Then give me a hard one."',
            'Then the Saturdays came one after another. The enthusiasm of the first Saturday was gone, and the tiredness stayed. On the fourth Saturday it had been raining since dawn, Layth had stayed up late over his physics homework, and the group said the boys were playing in the indoor hall. If he slept in, nobody would know: Ustadh Fuad was away that week, the caretaker was opening the club, and Yusuf might not come in that rain. He knew the hadith: "The deeds most beloved to Allah the Exalted are the most constant, even if they are small" (Sahih Muslim 783). That morning he understood why the constant deed is loved: because it is done on the day with no enthusiasm in it.',
            'There was something else in the lessons that nobody saw. He could have dictated the answers to Yusuf, filled the sheet and run out the clock. Instead he started preparing at night: drawing pies and oranges and clocks, and writing a problem for each Saturday with Yusuf\'s name and a football in it. Nobody ever checked his preparation. Jibril, peace be upon him, asked the Prophet, peace and blessings be upon him and his family, about ihsan, and he said: "That you worship Allah as though you see Him, and if you do not see Him, He sees you" (Sahih al-Bukhari 50). On a sheet nobody will ever check, that meaning begins, small.',
            'Layth put on his coat and walked to the mosque in the rain, telling himself Yusuf would never come in this weather. Yusuf was standing under the little awning by the door, his shoes soaked, the sheet in his hand. He said: "I told my mum you\'d come." Layth folded his umbrella, wiped the rain off the sheet with the edge of his sleeve, and they sat down.'
          ] },
        quiz: Q('human-adult', 3, [
          { correct: 2, q: { ar: 'ماذا قال يوسف بعد أن اعتذر له ليث؟', en: 'What did Yusuf say after Layth apologised to him?' },
            options: [{ ar: '«لن أنتظرك مرة أخرى»', en: '"I won\'t wait for you again"' }, { ar: '«الأستاذ فؤاد حكى لي كل شيء»', en: '"Ustadh Fuad told me everything"' }, { ar: '«فزتم؟»', en: '"Did you win?"' }],
            why: { ar: 'الصدق فتح الباب الذي أغلقته الكذبة، وبدأ الدرس من هناك.', en: 'Honesty opened the door the lie had shut, and the lesson began from there.' } },
          { correct: 1, q: { ar: 'لماذا كان ذهاب ليث في السبت الرابع صعبًا؟', en: 'Why was going on the fourth Saturday hard for Layth?' },
            options: [{ ar: 'لأن يوسف طلب أن ينتقل إلى معلم آخر', en: 'Because Yusuf had asked to move to another tutor' }, { ar: 'لأن المطر والتعب كانا عليه، ولن يعرف أحد إن غاب', en: 'Because of the rain and his tiredness, and nobody would know if he stayed away' }, { ar: 'لأن الأستاذ فؤاد غضب منه ذلك الأسبوع', en: 'Because Ustadh Fuad was angry with him that week' }],
            why: { ar: 'العمل الدائم يُختبر في اليوم الذي يذهب فيه الحماس ولا يراه أحد.', en: 'A constant deed is tested on the day the enthusiasm is gone and nobody is watching.' } }
        ]) },

      { title: { ar: 'الورقة السرية', en: 'The private form' },
        body: { ar: [
            'وفي المدرسة كان مشروع التاريخ: ثلاثة طلاب، وبحث عن الحي القديم في المدينة، وعرض في آخر الشهر. وكان فريق ليث: ليث، وكريم، وعدنان. كريم صاحبه في الفريق وفي المجموعة، يضحك فيضحك الصف، ويعد بالكثير. وعدنان قليل الكلام، يجلس في المقعد الأول، ويكتب كل شيء بخط صغير مرتب. وفي أسابيع البحث ذهب عدنان إلى أرشيف البلدية ثلاث مرات، وصوّر خرائط الحي القديم، وكتب نصف البحث. ووعد كريم بالشرائح أربع مرات، ثم صنعها ليلة العرض في ساعة. وغاب ليث عن لقاء واحد: لقاء السبت، يوم النهائي.',
            'ونجح العرض. وقف كريم يشرح، فأضحك الصف وأقنعه، وصفق المعلم. وبعد العرض وزّع المعلم ورقة صغيرة: «قيّم كل زميل في فريقك من عشرة. الورقة سرية، لا يراها غيري». وقبل أن يكتب ليث شيئًا وصلته رسالة من كريم: «عشرة لي، وعشرة لك، ونريّح بعضنا. وعدنان ما سمعنا له صوتًا في العرض، خمسة تكفيه». وبعدها وجه ضاحك.',
            'وجلس ليث والقلم في يده. كريم صاحبه منذ الابتدائية، وهو الذي رفعه على كتفيه يوم النهائي. وعدنان لا يكاد يعرفه. والورقة سرية، ولن يعرف أحد ما كتب فيها. وكان الإمام قد قرأ في صلاة الفجر آية لم يتوقف عندها من قبل: ﴿وَإِذَا قُلْتُمْ فَاعْدِلُوا وَلَوْ كَانَ ذَا قُرْبَىٰ﴾ (الأنعام 6:152). والقريب هنا كريم، والورقة قول وإن كُتبت بقلم. فكتب: عدنان عشرة. كريم ستة. ثم توقف عند اسمه هو، وكتب: سبعة، وتحتها بخط صغير: «غبت عن لقاء السبت».',
            'والكبير يعرف الورقة السرية وإن تغيّر اسمها: الشهادة في خلاف بين قريبين، والتوصية لزميل نحبه، وتقسيم الفضل في اجتماع العمل حين يُسأل «من صنع هذا؟». وفي هذه المواضع تصير آية أخرى أوضح مما نحب: ﴿وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ﴾ (هود 11:85). والجهد الذي بذله صاحبه من أشيائه.',
            'وبعد أسبوع أعلن المعلم الدرجات: عدنان الأعلى في الفريق، وكريم الأدنى. ونظر كريم إلى ليث نظرة طويلة، ولم يقل شيئًا. وفي المساء كانت المجموعة تتكلم عن سهرة الخميس، ولم يذكر أحد اسم ليث. وفي الصباح وجد ليث على درجه نسخة مصورة من خريطة قديمة، وفي زاويتها بخط صغير مرتب: «هذا شارع مسجدكم قبل ستين سنة. عدنان». فنظر إلى المقعد الأول، فرفع عدنان يده بتحية صغيرة، ورجع إلى دفتره.'
          ], en: [
            'At school there was the history project: three students, research on the old quarter of the city, and a presentation at the end of the month. Layth\'s team was Layth, Karim and Adnan. Karim is his friend on the team and in the group chat; when he laughs the class laughs, and he promises a lot. Adnan says little, sits in the front row and writes everything in small, tidy handwriting. Over the weeks of research Adnan went to the municipal archive three times, photographed the maps of the old quarter, and wrote half the report. Karim promised the slides four times, then made them in an hour the night before. Layth missed one meeting: the Saturday one, the day of the final.',
            'The presentation went well. Karim stood up to explain, made the class laugh and won them over, and the teacher applauded. Afterwards the teacher handed out a small form: "Rate each teammate out of ten. This form is private; nobody sees it but me." Before Layth had written anything, a message came from Karim: "Ten for me, ten for you, and we look after each other. And Adnan, we didn\'t hear a word from him in the presentation, five is plenty." Then a laughing face.',
            'Layth sat with the pen in his hand. Karim had been his friend since primary school, and he was the one who carried him on his shoulders on the day of the final. Adnan he hardly knew. The form was private, and nobody would ever know what he wrote. At fajr the imam had recited a verse he had never paused over before: "And when you speak, be just, even if it concerns a relative" (al-An\'am 6:152, meaning). The relative here was Karim, and the form was speech, even if written with a pen. So he wrote: Adnan, ten. Karim, six. Then he stopped at his own name, wrote seven, and underneath in small letters: "I missed the Saturday meeting."',
            'Adults know the private form, whatever it is called: testimony in a dispute between relatives, a reference for a colleague we like, sharing out the credit in a work meeting when someone asks "who made this?" In those places another verse becomes clearer than we would like: "And do not deprive people of what is theirs" (Hud 11:85, meaning). The effort someone put in is one of the things that are theirs.',
            'A week later the teacher announced the marks: Adnan the highest on the team, Karim the lowest. Karim gave Layth a long look and said nothing. That evening the group was talking about Thursday night plans, and nobody mentioned Layth. In the morning Layth found on his desk a photocopy of an old map, and in its corner, in small tidy handwriting: "This is your mosque\'s street sixty years ago. Adnan." He looked over at the front row; Adnan raised a hand in a small greeting, and went back to his notebook.'
          ] },
        quiz: Q('human-adult', 4, [
          { correct: 1, q: { ar: 'ماذا طلب كريم من ليث في رسالته؟', en: 'What did Karim ask Layth in his message?' },
            options: [{ ar: 'أن يكتبا اسم عدنان على الشرائح', en: 'That they put Adnan\'s name on the slides' }, { ar: 'أن يعطيا بعضهما عشرة، وعدنان خمسة', en: 'That they give each other ten, and Adnan five' }, { ar: 'أن يطلبا من المعلم إعادة العرض', en: 'That they ask the teacher to let them present again' }],
            why: { ar: 'طلب منه أن يبخس جهد عدنان في ورقة لا يراها أحد.', en: 'He asked him to short-change Adnan\'s effort on a form nobody would see.' } },
          { correct: 0, q: { ar: 'ماذا كتب ليث تحت درجته هو في الورقة؟', en: 'What did Layth write under his own mark on the form?' },
            options: [{ ar: '«غبت عن لقاء السبت»', en: '"I missed the Saturday meeting"' }, { ar: '«كتبت نصف البحث»', en: '"I wrote half the report"' }, { ar: '«صنعت الشرائح مع كريم»', en: '"I made the slides with Karim"' }],
            why: { ar: 'عدل مع نفسه كما عدل مع غيره، فذكر غيابه في ورقة لا يراها أحد.', en: 'He was as fair with himself as with others, and noted his own absence on a form nobody would see.' } }
        ]) },

      { title: { ar: 'لمن كانت السبوت؟', en: 'Whose were the Saturdays?' },
        body: { ar: [
            'في آخر الفصل امتُحن يوسف في الكسور، فأخذ سبعة عشر من عشرين. وجاء إلى النادي يركض، والورقة في يده مرفوعة كالكأس. وفرح الأستاذ فؤاد، وقال: «نصوّر المتطوعين مع الأولاد للصفحة، ونكتب: شكرًا لأبطالنا». ووقف المتطوعون في صف، كل صغير بجانب معلمه.',
            'وشعر ليث بشيء يتحرك فيه. الصورة ستنزل على صفحة المسجد، ويراها الشباب في المجموعة، ويراها كريم. وتخيّل التعليقات: «ليث البطل مرة أخرى». وعرف الشعور في اللحظة نفسها: هو الذي كان يأتيه حين يقول «نعم» في ثانيتين. وتذكّر الحديث الذي يفتتح به صحيح البخاري: «إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ» (صحيح البخاري 1). وقد كتب الغزالي في «الإحياء»، في كتاب ذم الجاه والرياء، عن الرياء الخفي: لا يدعو صاحبه إلى العمل، ويفرح صاحبه إذا اطّلع الناس على عمله (بالمعنى). وسأل ليث نفسه: لمن كانت السبوت المبتلة؟',
            'فقال: «أنا أصوّر يا أستاذ». وأخذ الهاتف، ووقف أمامهم، وصوّر يوسف رافعًا ورقته، والأستاذ فؤاد وراءه يضحك. ونزلت الصورة على الصفحة في المساء، وفيها كل الأولاد وكل المتطوعين إلا واحدًا.',
            'وكل من يقرأ هذه السطور يعرف الصورة التي تُلتقط للعمل الطيب: صندوق التبرعات أمام الكاميرا، والزيارة التي تُكتب في الحالة، والمساعدة التي تُحكى في المجلس بتواضع محسوب. وبعض الصور تدعو غيرنا إلى الخير، وتبقى في كل صورة مسألة ليث: لمن كان العمل؟ وفي حديث السبعة الذين يظلهم الله في ظله: «وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لَا تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ» (صحيح البخاري 1423).',
            'وفي الليل جاءته رسالة من كريم، أول رسالة منذ الدرجات: «أخي الصغير يكره الكسور. سمعت أنك... يعني. عندكم مكان في النادي؟». وقرأها ليث مرتين، وكتب: «السبت، العاشرة. أكون عند الباب». وبعد العشاء وصلته رسالة الأستاذ فؤاد: «الفصل القادم، تأخذ يوسف مرة أخرى؟». ففتح ليث التقويم، وعدّ السبوت واحدًا واحدًا، ونظر في مواعيد المباريات، ونام. وفي الصباح كتب: «نعم، إن شاء الله. نظرت في السبوت كلها، وهي لهما». وكانت «نعم» هذه قد أخذت منه ليلة كاملة.'
          ], en: [
            'At the end of term Yusuf sat his fractions test and got seventeen out of twenty. He came running into the club, holding the paper up like a trophy. Ustadh Fuad was delighted and said: "Let\'s take a photo of the volunteers with the children for the page, and write: thank you to our heroes." The volunteers lined up, each little one beside his tutor.',
            'Layth felt something stir inside him. The photo would go up on the mosque page, the boys in the group would see it, Karim would see it. He imagined the comments: "Layth the hero, again." And in the same moment he recognised the feeling: it was the one that came to him whenever he said "yes" in two seconds. He remembered the hadith that opens Sahih al-Bukhari: "Actions are only by intentions" (Sahih al-Bukhari 1). Al-Ghazali wrote in the Ihya, in the book on the blame of status and showing off, about hidden showing off: it does not move a person to act, yet he is pleased when people come to see what he did (in meaning). Layth asked himself: whose were those rainy Saturdays?',
            'So he said: "I\'ll take it, Ustadh." He took the phone, stood in front of them, and photographed Yusuf holding up his paper, with Ustadh Fuad laughing behind him. The photo went up on the page that evening, with every child and every volunteer in it but one.',
            'Everyone reading these lines knows the photo taken of a good deed: the donation box in front of the camera, the visit posted in a status, the help recounted at a gathering with carefully measured modesty. Some photos invite others to do good, and every photo still carries Layth\'s question: whose was the deed? In the hadith of the seven whom Allah shades in His shade: "and a man who gives charity and hides it, so that his left hand does not know what his right hand spends" (Sahih al-Bukhari 1423).',
            'That night a message came from Karim, the first since the marks: "My little brother hates fractions. I heard you... well. Is there room at the club?" Layth read it twice and wrote: "Saturday, ten. I\'ll be at the door." After isha a message came from Ustadh Fuad: "Next term, will you take Yusuf again?" Layth opened his calendar, counted the Saturdays one by one, checked the match fixtures, and went to sleep. In the morning he wrote: "Yes, in sha Allah. I have looked at every Saturday, and they are theirs." This yes had taken him a whole night.'
          ] },
        quiz: Q('human-adult', 5, [
          { correct: 0, q: { ar: 'ماذا فعل ليث حين وقف المتطوعون للصورة؟', en: 'What did Layth do when the volunteers lined up for the photo?' },
            options: [{ ar: 'أخذ الهاتف وصوّرهم، ولم يظهر في الصورة', en: 'He took the phone and photographed them, and was not in the picture' }, { ar: 'وقف بجانب يوسف ورفع معه الورقة', en: 'He stood beside Yusuf and held up the paper with him' }, { ar: 'طلب من الأستاذ ألا تُنشر الصورة', en: 'He asked Ustadh Fuad not to post the photo' }],
            why: { ar: 'رأى في نفسه الرغبة في أن يُرى، فاختار أن يبقى عمله خالصًا.', en: 'He saw in himself the wish to be seen, and chose to keep his deed sincere.' } },
          { correct: 2, q: { ar: 'كيف ردّ ليث على سؤال الأستاذ فؤاد عن الفصل القادم؟', en: 'How did Layth answer Ustadh Fuad\'s question about next term?' },
            options: [{ ar: 'قال «نعم، أكيد» في الحال، كما فعل أول مرة', en: 'He said "yes, sure" at once, as he did the first time' }, { ar: 'اعتذر لأن المباريات تملأ أيام السبت', en: 'He declined because matches fill his Saturdays' }, { ar: 'نظر في التقويم ليلة كاملة، ثم قال نعم في الصباح', en: 'He looked at his calendar overnight, then said yes in the morning' }],
            why: { ar: 'صار يعد بما ينظر أولًا في قدرته على الوفاء به، فصارت «نعم» عهدًا.', en: 'He now promises only after checking he can keep it, and his yes has become a covenant.' } }
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
            options: [{ ar: 'يجمعها ببطء أو يشتريها بالمال الحقيقي', en: 'Collects them slowly or buys them with real money' }, { ar: 'يربحها فقط حين يهزم حسام', en: 'Wins them only by beating Husam' }, { ar: 'تُفتح له مع كل مستوى جديد', en: 'Gets them with each new level' }],
            why: { ar: 'اللعبة تعرض الطريق السريع بالمال كل دقيقة.', en: 'The game offers the quick, paid way every minute.' } },
          { correct: 2, q: { ar: 'ماذا كان يحدث كلما جمع عمّار جوهرة؟', en: 'What happened each time Ammar earned a gem?' },
            options: [{ ar: 'يشعر بالشبع ويتوقف', en: 'He felt satisfied and stopped' }, { ar: 'يحكي لأخته عنها فرحًا', en: 'He happily told his sister about it' }, { ar: 'يشعر أنها قليلة ويريد أكثر', en: 'He felt it was too few and wanted more' }],
            why: { ar: 'هذه علامة البنصر: كلما أخذ أراد أكثر.', en: 'That is the ring-finger sign: the more one takes, the more one wants.' } }
        ]) },
      { title: { ar: 'الزر الأخضر', en: 'The green button' },
        body: {
          ar: [
            'قال عمّار في نفسه: أمي لن تنتبه، إنه مبلغ صغير من مال كثير. ثم ضغط الزر. ظهرت على الشاشة نجوم ذهبية وصوت فرح، وامتلأ صندوقه بألف جوهرة زرقاء. وفي دقائق صار تنينه أكبر من تنين حسام.',
            'وفي الغد ذهب إلى المدرسة وهو يمشي كالملك، وأرى حسام التنين الجديد. فاندهش حسام وقال: كيف فعلت هذا في ليلة واحدة؟ فقال عمّار: سر! وشعر بفرح كبير. لكن الفرح لم يدم أكثر من ساعة. أما حسام فنظر إليه نظرة غريبة، كأنه يعرف أن في الأمر شيئًا لا يُقال.',
            'ففي الاستراحة الثانية جاء ولد آخر بتنين أكبر من تنينه، اشتراه أبوه له في العيد. فشعر عمّار أن تنينه صار صغيرًا من جديد. وعاد الصوت في داخله يقول: تحتاج المزيد، ألف جوهرة أخرى فقط.',
            'وحين أطفأت أمه النور ضغط الزر مرة ثانية، ثم ثالثة. وكان في كل مرة يقول لنفسه: هذه آخر مرة. لكنه لم يكن يشبع. وكان صدره يضيق كلما سمع خطوات أمه في الممر، فيغلق الجهاز بسرعة ويتظاهر بالنوم. وفي الصباح لا يستطيع أن ينظر في عيني أمه.',
            'وصار لا يحب اللعبة كما كان يحبها. صار يلعب وعينه على الجواهر لا على المعركة، ويخاف من اللعبة بدل أن يفرح بها. وكان يسأل نفسه: لماذا لست سعيدًا وعندي كل هذا؟ ولم يجد جوابًا، فكان يغلق الجهاز ويبقى ينظر إلى السقف، والجواهر تلمع في رأسه حتى يغلبه النوم.'
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
            options: [{ ar: 'حتى آخر اليوم الدراسي', en: 'Until the end of the school day' }, { ar: 'ساعة واحدة تقريبًا', en: 'About an hour' }, { ar: 'أسبوعًا كاملًا', en: 'A whole week' }],
            why: { ar: 'فرح الأخذ قصير، ثم تطلب النفس المزيد.', en: 'The joy of taking is short, then the soul asks for more.' } },
          { correct: 0, q: { ar: 'لماذا كان صدر عمّار يضيق حين يسمع خطوات أمه؟', en: 'Why did Ammar\'s chest tighten when he heard his mother\'s footsteps?' },
            options: [{ ar: 'لأنه كان يخفي ما فعله', en: 'Because he was hiding what he had done' }, { ar: 'لأنه لم ينهِ واجبه بعد', en: 'Because he had not finished his homework' }, { ar: 'لأنها منعته من اللعب ليلًا', en: 'Because she had banned playing at night' }],
            why: { ar: 'ما يُخفى عن الأهل يثقل القلب.', en: 'What is hidden from one\'s family weighs on the heart.' } }
        ]) },
      { title: { ar: 'رسالة البنك', en: 'The bank message' },
        body: {
          ar: [
            'بعد أسبوع جلست الأم على الأريكة تنظر إلى هاتفها، ووجهها يتغير. ثم نادت بصوت هادئ: يا عمّار، تعال لحظة. فجاء عمّار وقدماه ثقيلتان. ورأى على شاشتها رسالة من البنك: ثلاث عمليات شراء من متجر الألعاب.',
            'سألته أمه: هل تعرف شيئًا عن هذه؟ فكّر عمّار أن يقول: لا، ربما أخطأ البنك. وكانت الكذبة جاهزة على لسانه. لكنه نظر إلى عيني أمه، فرأى فيهما حزنًا لا غضبًا، فلم يستطع. فالكذبة كانت ستنقذه دقيقة، ثم تبقى في صدره سنة.',
            'قال بصوت منخفض: أنا اشتريتها يا أمي. كنت أريد تنينًا أكبر من تنين حسام. ثم بدأ يبكي، وقال: كل مرة قلت هذه آخر مرة، ولم تكن آخر مرة. لا أعرف لماذا لم أستطع أن أتوقف.',
            'سكتت الأم قليلًا، ثم جلست بجانبه وقالت: شكرًا لأنك صدقت. هذا أصعب من الشراء نفسه. ثم قالت: المال الذي أخذته كان مال البيت، وكنا سنشتري به أشياء نحتاجها. فماذا نفعل الآن؟ البكاء يغسل القلب، وإصلاح الخطأ يحتاج إلى عمل.',
            'اتفقا معًا على أن يرد عمّار جزءًا من المال من مصروفه في الأشهر القادمة، وأن تُحذف البطاقة من الجهاز، وأن يتكلم مع أبيه في المساء. وشعر عمّار بشيء غريب: كان حزينًا، لكن صدره صار أخف مما كان منذ أسبوع. وفي تلك الليلة نام نومًا هادئًا، بلا خوف من خطوات في الممر، ولا جهاز يخفيه تحت الوسادة.'
          ],
          en: [
            'A week later his mother sat on the sofa looking at her phone, her face changing. Then she called in a quiet voice: Ammar, come here a moment. Ammar came on heavy feet. On her screen he saw a message from the bank: three purchases from the games shop.',
            'His mother asked: do you know anything about these? Ammar thought of saying: no, maybe the bank made a mistake. The lie was ready on his tongue. But he looked into his mother\'s eyes and saw sadness there, not anger, and he could not. The lie would have saved him for a minute, then stayed in his chest for a year.',
            'He said quietly: I bought them, Mum. I wanted a dragon bigger than Husam\'s. Then he began to cry and said: every time I said this is the last time, and it wasn\'t. I don\'t know why I couldn\'t stop.',
            'His mother was silent a moment, then sat beside him and said: thank you for telling the truth. That is harder than the buying itself. Then she said: the money you took was the household\'s money; we were going to buy things we need with it. So what do we do now? Tears wash the heart, and mending a mistake takes action.',
            'Together they agreed that Ammar would pay back part of the money from his pocket money in the coming months, that the card would be removed from the tablet, and that he would talk to his father that evening. Ammar felt something strange: he was sad, yet his chest felt lighter than it had for a week. That night he slept peacefully, with no fear of footsteps in the hallway and no tablet hidden under his pillow.'
          ] },
        quiz: Q('pig-2', 3, [
          { correct: 2, q: { ar: 'لماذا لم يكذب عمّار على أمه؟', en: 'Why did Ammar not lie to his mother?' },
            options: [{ ar: 'لأنه خاف أن يكشف البنك الحقيقة', en: 'He feared the bank would reveal the truth' }, { ar: 'لأن أخته رأته وهو يشتري', en: 'His sister had seen him buying' }, { ar: 'لأنه رأى في عينيها حزنًا لا غضبًا', en: 'He saw sadness, not anger, in her eyes' }],
            why: { ar: 'الهدوء يفتح باب الصدق.', en: 'Calm opens the door to honesty.' } },
          { correct: 0, q: { ar: 'ماذا اتفق عمّار وأمه أن يفعلا؟', en: 'What did Ammar and his mother agree to do?' },
            options: [{ ar: 'يرد جزءًا من مصروفه، وتُحذف البطاقة', en: 'He repays part from his pocket money, and the card is removed' }, { ar: 'يُمنع من الجهاز شهرًا، ويعتذر لأبيه', en: 'He loses the tablet for a month and apologises to his father' }, { ar: 'يحذف اللعبة، ويكتب اعتذارًا لأمه', en: 'He deletes the game and writes his mother an apology' }],
            why: { ar: 'إصلاح الخطأ جزء من التوبة منه.', en: 'Repairing a wrong is part of turning back from it.' } }
        ]) },
      { title: { ar: 'من يقود من؟', en: 'Who leads whom?' },
        body: {
          ar: [
            'حين هدأ البيت جلس الأب مع عمّار في الشرفة، وسأله بصوت هادئ: حين كنت تضغط الزر، من الذي كان يقرر؟ أنت أم الرغبة؟ ففكر عمّار طويلًا، ثم قال: الرغبة يا أبي. كنت أشعر أنها تجرّني. كأن في يدي حبلًا مربوطًا بها، وهي تمشي وأنا أتبعها.',
            'قال الأب: هذه هي النفس حين تطلب. وقد وعد الله من يقف أمامها وعدًا عظيمًا، فقال: ﴿وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ ۝ فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ﴾ (النازعات 79:40-41). ثم سأله: في الآية نفس لها هوى، فمن الذي ينهاها؟ ففكر عمّار وقال: صاحبها. فقال الأب: إذن الحبل في يدك أنت، والرغبة تمشي حيث تمشي بها.',
            'ثم قال الأب: الألعاب تُصنع أحيانًا لتجعلك لا تشبع. العروض الخاصة، والصناديق المفاجئة، والعدّ التنازلي، كلها تقول لك: الآن، الآن، وإلا فاتك كل شيء. ومن عرف الحيلة سهل عليه أن يقول: لا، شكرًا. والكبار يقعون فيها أيضًا، والذكي من يعرفها في المرة التالية.',
            'واتفقا على قاعدة جديدة: قبل أي شراء، ولو كان صغيرًا، ينتظر عمّار يومًا كاملًا، ثم يسأل أباه. وقال الأب ضاحكًا: ستتعجب كم رغبة تموت وحدها في يوم واحد!',
            'وجرّب عمّار القاعدة في الأسبوع التالي. ظهر عرض للجواهر، فكتبه في ورقة وانتظر. وفي اليوم التالي نظر إلى الورقة فلم يجد في نفسه شيئًا. فضحك وقال: صدقتَ يا أبي، ماتت الرغبة! ثم مزّق الورقة، وذهب يلعب مع أخته في الحديقة.'
          ],
          en: [
            'When the house had calmed down, his father sat with Ammar on the balcony and asked him quietly: when you pressed the button, who was deciding, you or the wanting? Ammar thought for a long time, then said: the wanting, Dad. I felt it pulling me. As if a rope tied to it was in my hand, and it walked while I followed.',
            'His father said: that is the soul when it demands. And Allah made a great promise to whoever stands firm before it. Meaning: as for one who feared standing before his Lord and restrained the soul from whim, Paradise will be the refuge (al-Nazi\'at 79:40-41). Then he asked: in the verse there is a soul with its whims, so who is it that restrains it? Ammar thought and said: its owner. His father said: so the rope is in your hand, and the wanting goes wherever you lead it.',
            'Then his father said: games are sometimes made to keep you from feeling satisfied. Special offers, surprise chests, countdowns: they all tell you now, now, or you\'ll miss everything. Whoever knows the trick finds it easier to say: no, thank you. Adults fall for it too, and the clever one is whoever spots it the next time.',
            'They agreed on a new rule: before any purchase, however small, Ammar waits a full day, then asks his father. His father laughed and said: you\'ll be amazed how many wants die on their own in a single day!',
            'Ammar tried the rule the next week. An offer for gems appeared, so he wrote it on a slip of paper and waited. The next day he looked at the paper and felt nothing for it. He laughed and said: you were right, Dad, the want died! Then he tore up the paper and went to play with his sister in the garden.'
          ] },
        quiz: Q('pig-2', 4, [
          { correct: 1, q: { ar: 'ما القاعدة الجديدة التي اتفق عليها عمّار وأبوه؟', en: 'What new rule did Ammar and his father agree on?' },
            options: [{ ar: 'يلعب ساعة في الأسبوع، ثم يتوقف', en: 'Play one hour a week, then stop' }, { ar: 'ينتظر يومًا قبل أي شراء، ثم يسأل أباه', en: 'Wait a day before any purchase, then ask his father' }, { ar: 'يشتري من مصروفه هو، دون أن يسأل', en: 'Buy with his own pocket money, without asking' }],
            why: { ar: 'الانتظار يعطي العقل وقتًا ليلحق بالرغبة.', en: 'Waiting gives the mind time to catch up with the want.' } },
          { correct: 2, q: { ar: 'من الذي وعدته الآية بالجنة؟', en: 'Whom does the verse promise Paradise?' },
            options: [{ ar: 'من لم تكن له رغبة أصلًا', en: 'One who had no wants at all' }, { ar: 'من ترك اللعب كله', en: 'One who gave up games altogether' }, { ar: 'من نهى نفسه عن الهوى', en: 'One who restrained the soul from whim' }],
            why: { ar: 'في الآية نفس لها هوى، وصاحبها هو الذي ينهاها، فالحبل في يده.', en: 'In the verse the soul has its whims, and its owner is the one who restrains it: the rope is in his hand.' } }
        ]) },
      { title: { ar: 'هدية حسام', en: 'Husam\'s gift' },
        body: {
          ar: [
            'بعد شهر لم يعد تنين عمّار أكبر تنين في الصف. صار يلعب قليلًا، ويجمع الجواهر ببطء بعد كل معركة، ويفرح بكل واحدة كأنها الأولى. وفي الاستراحة جاءه ولد يريه تنينًا عملاقًا يلمع بالذهب، فنظر إليه عمّار وقال: جميل! ثم عاد يأكل شطيرته.',
            'وبعد أسبوعين جاء حسام إلى المدرسة حزينًا. كان أبوه قد غضب منه لأنه أنفق مالًا كثيرًا في اللعبة، وأخذ منه الجهاز. فجلس عمّار بجانبه وقال: أنا أيضًا فعلت هذا. وحكى له قصته كلها، والزر الأخضر، والبكاء، وقاعدة اليوم الواحد.',
            'فقال حسام: وهل ردّ مصروفك المال؟ قال عمّار: جزء منه، وما زلت أرده. ثم أخرج من حقيبته علبة المعمول التي وضعتها أمه، وفتحها بينهما وقال: خذ، أنت لم تأكل شيئًا اليوم. فابتسم حسام لأول مرة في ذلك اليوم. وجلسا يأكلان معًا ويضحكان من تنانينهما الصغيرة.',
            'وفي الحافلة إلى البيت كانت العلبة الفارغة تخشخش في حقيبته. وتذكّر عمّار ليلة الزر الأخضر، وألف جوهرة لم تفرحه ساعة واحدة. ثم نظر إلى العلبة الفارغة، وابتسم وحده، ونزل في محطته وهو يصفّر.',
            'لكن في المساء حدث شيء آخر. دخلت أخته الصغيرة غرفته، وأخذت الجهاز اللوحي، وضغطت أزرارًا كثيرة، فحذفت قلعته التي بناها في شهرين. وحين رأى عمّار الشاشة فارغة احمرّ وجهه، وصعدت نار في صدره، وارتفعت يده. وأخته واقفة أمامه بعينين واسعتين، والجهاز بينهما يسأل: «هل تريد أن تبني قلعة جديدة؟».'
          ],
          en: [
            'A month later Ammar\'s dragon was no longer the biggest in the class. He played a little, collected gems slowly after each battle, and enjoyed each one as if it were the first. At break a boy came to show him a giant dragon gleaming with gold. Ammar looked at it and said: nice! Then he went back to his sandwich.',
            'Two weeks later Husam came to school sad. His father had been angry because he had spent a lot of money in the game, and had taken the tablet away. Ammar sat beside him and said: I did that too. And he told him the whole story: the green button, the crying, and the one-day rule.',
            'Husam said: and did your pocket money pay it back? Ammar said: part of it; I\'m still paying. Then he took out the box of ma\'moul biscuits his mother had packed, opened it between them and said: here, you haven\'t eaten anything today. Husam smiled for the first time that day. They sat eating together, laughing about their little dragons.',
            'On the bus home the empty box rattled in his bag. Ammar remembered the night of the green button, and a thousand gems that had not made him happy for even an hour. Then he looked at the empty box, smiled to himself, and got off at his stop whistling.',
            'But that evening something else happened. His little sister came into his room, took the tablet, and pressed lots of buttons, deleting the castle he had built over two months. When Ammar saw the empty screen his face went red, fire rose in his chest, and his hand went up. His sister stood in front of him with wide eyes, and between them the tablet asked: "Do you want to build a new castle?"'
          ] },
        quiz: Q('pig-2', 5, [
          { correct: 0, q: { ar: 'ماذا قال عمّار حين أراه ولد تنينًا عملاقًا؟', en: 'What did Ammar say when a boy showed him a giant dragon?' },
            options: [{ ar: 'جميل! ثم عاد يأكل شطيرته', en: 'Nice! Then he went back to his sandwich' }, { ar: 'سأجمع جواهر حتى أسبقه', en: 'I\'ll collect gems until I beat it' }, { ar: 'هذا تنين اشتراه لك أبوك', en: 'Your father bought you that dragon' }],
            why: { ar: 'القناعة تجعل الإنسان يرى ما عند غيره ويفرح بما عنده.', en: 'Contentment lets a person see what others have and still enjoy what is their own.' } },
          { correct: 2, q: { ar: 'ماذا فعلت أخت عمّار الصغيرة بالجهاز؟', en: 'What did Ammar\'s little sister do with the tablet?' },
            options: [{ ar: 'اشترت جواهر جديدة بالبطاقة', en: 'Bought new gems with the card' }, { ar: 'أرسلت صورة التنين إلى حسام', en: 'Sent a picture of the dragon to Husam' }, { ar: 'حذفت القلعة التي بناها في شهرين', en: 'Deleted the castle he had built over two months' }],
            why: { ar: 'ارتفعت يد عمّار، وبقي السؤال: ماذا يفعل بهذه النار؟ وهذا باب الوسطى: إمساك النفس عند الغضب.', en: 'Ammar\'s hand went up, and the question remains: what does he do with this fire? That is the door to the middle finger: holding yourself back in anger.' } }
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
        body: { ar: [
            'كانت شهد في الثالثة عشرة، وكانت تحب الرسم أكثر من أي شيء. وفي مجموعة محادثة الصف، التي فيها ثلاثون تلميذة، نشرت رسمة لقطة جالسة على نافذة، تعبت فيها ثلاثة أيام، ثم انتظرت أن ترى ما تقول صديقاتها.',
            'جاءت قلوب كثيرة، وكتبت صديقتها ديما: ما أجملها! ثم كتبت بنت اسمها نوال: هذه قطة أم بطاطا؟ ووضعت وجهًا يضحك حتى البكاء. وبعد ثوانٍ ضحكت بنتان أخريان بالوجه نفسه.',
            'شعرت شهد بحرارة تصعد من صدرها إلى وجهها. وفي أقل من دقيقة، ودون أن تفكر، ضغطت زر التسجيل وأرسلت رسالة صوتية طويلة. قالت فيها لنوال كلامًا قاسيًا: إنها غيورة، وإنها لا تعرف شيئًا، وإن رسومها هي أقبح ما رأته في حياتها. وكانت الكلمات تخرج أسرع مما تفكر فيه.',
            'ثم أرسلت رسالة ثانية وثالثة. وكانت أصابعها ترتجف، وكلما ردت نوال بكلمة ردت شهد بعشر. وصارت المجموعة كلها تراقب: بعض البنات يضحكن، وبعضهن يكتبن: اهدئي يا شهد، وبعضهن يرسلن وجوهًا مندهشة.',
            'وفجأة كتبت المعلمة، وهي مشرفة المجموعة: توقفن الآن من فضلكن. ثم أغلقت المجموعة فلا يكتب فيها أحد. ووضعت شهد الهاتف على السرير، وصدرها يعلو وينزل، ولم تعرف هل هي غاضبة أم خائفة أم نادمة.',
            'ولم يأتها النوم تلك الليلة. سمعت صوتها في الرسائل يتكرر في رأسها، عاليًا وقاسيًا، ولم تعرف هذا الصوت. وقالت في نفسها: من التي كانت تتكلم بلساني هناك؟'
          ], en: [
            'Shahd was thirteen and loved drawing more than anything. In the class chat group, with thirty girls in it, she posted a drawing of a cat sitting on a window sill. It had taken her three days, and she waited to see what her friends would say.',
            'Lots of hearts came, and her friend Dima wrote: so beautiful! Then a girl called Nawal wrote: is that a cat or a potato? with a face laughing to tears. Seconds later two other girls laughed with the same face.',
            'Shahd felt heat rising from her chest to her face. In less than a minute, without thinking, she pressed record and sent a long voice message. In it she said harsh things to Nawal: that she was jealous, knew nothing, and that her drawings were the ugliest she had ever seen. The words came out faster than she could think them.',
            'Then she sent a second and a third. Her fingers were shaking, and every time Nawal replied with one word, Shahd replied with ten. The whole group was watching: some girls laughed, some wrote: calm down, Shahd, and some sent shocked faces.',
            'Suddenly the teacher, who supervised the group, wrote: stop now, please. Then she locked the group so no one could write. Shahd put the phone on her bed, her chest rising and falling, not knowing whether she was angry, afraid or sorry.',
            'That night she could not sleep. She heard her voice from the messages repeating in her head, loud and harsh, and did not recognise it. She said to herself: who was speaking with my tongue back there?'
          ] },
        quiz: Q('monkey-2', 1, [
          { correct: 2, q: { ar: 'ماذا فعلت شهد حين سخرت نوال من رسمتها؟', en: 'What did Shahd do when Nawal mocked her drawing?' },
            options: [{ ar: 'ردّت عليها بوجه ضاحك مثلها', en: 'Replied with a laughing face of her own' }, { ar: 'خرجت من المجموعة غاضبة', en: 'Left the group in anger' }, { ar: 'أرسلت رسالة صوتية قاسية', en: 'Sent a harsh voice message' }],
            why: { ar: 'الغضب جعل إصبعها أسرع من عقلها.', en: 'Anger made her finger faster than her mind.' } },
          { correct: 0, q: { ar: 'لماذا أغلقت المعلمة المجموعة؟', en: 'Why did the teacher lock the group?' },
            options: [{ ar: 'لتوقف الشجار', en: 'To stop the quarrel' }, { ar: 'لأن الوقت تأخر', en: 'Because it was late' }, { ar: 'لأن نوال اشتكت', en: 'Because Nawal complained' }],
            why: { ar: 'الشجار في المجموعة يكبر أمام الجميع بسرعة.', en: 'A quarrel in a group grows fast in front of everyone.' } }
        ]) },

      { title: { ar: 'لقطة الشاشة', en: 'The screenshot' },
        body: { ar: [
            'قبل أن تصل شهد إلى المدرسة صباحًا، كانت إحدى البنات قد أخذت لقطة شاشة من رسائلها، ونشرتها في مجموعة أخرى. وانتقلت اللقطة من هاتف إلى هاتف، حتى وصلت إلى بنات من صفوف لا تعرفهن.',
            'وفي الساحة كانت البنات ينظرن إليها ويتهامسن. وسمعت واحدة تقول بصوت منخفض: هذه التي صرخت في المجموعة. فشعرت شهد بالخجل يحرق وجهها، وتمنت لو تختفي. رسائل دقيقة واحدة سبقتها إلى كل مكان، وتكلمت عنها قبل أن تتكلم هي.',
            'وكانت ديما واقفة وحدها عند الباب، وعيناها حمراوان. اقتربت منها شهد، فقالت ديما: في رسالتك الثالثة قلتِ إن صديقات نوال كلهن تافهات. وأنا أجلس مع نوال في الرياضيات. هل أنا تافهة يا شهد؟',
            'تجمدت شهد. لم تتذكر أنها قالت ذلك. ففتحت الهاتف وسمعت الرسالة، فإذا الكلمة فيها، واضحة وقاسية. لقد أصابت صديقتها الأقرب وهي تحاول أن تصيب غيرها، كمن يرمي حجرًا في الظلام.',
            'قالت شهد: لم أقصدك يا ديما. فقالت ديما بهدوء: أعرف، لكنك قلتِها. ثم مشت إلى الصف. وبقيت شهد في الساحة وحدها، وعرفت لأول مرة أن الكلمة المرسَلة لا تعود، حتى لو حذفتها.',
            'وفي ذلك اليوم لم تأكل شهد غداءها. كانت تفكر في الدقيقة الواحدة التي أرسلت فيها كل شيء، وفي الأيام الطويلة التي ستحتاجها لتصلح ما فعلته تلك الدقيقة. وتمنت لو تستطيع أن ترجع بالزمن.'
          ], en: [
            'In the morning, before Shahd reached school, one of the girls had taken a screenshot of her messages and posted it in another group. The screenshot moved from phone to phone until it reached girls in classes she did not know.',
            'In the playground the girls looked at her and whispered. She heard one say quietly: that\'s the one who shouted in the group. Shahd felt shame burning her face and wished she could disappear. The messages of one minute had got everywhere ahead of her, and were speaking about her before she could speak.',
            'Dima was standing alone by the door, her eyes red. When Shahd came near, Dima said: in your third message you said all Nawal\'s friends are worthless. I sit with Nawal in maths. Am I worthless, Shahd?',
            'Shahd froze. She did not remember saying that. She opened her phone and listened, and the word was there, clear and harsh. She had hit her closest friend while trying to hit someone else, like throwing a stone in the dark.',
            'Shahd said: I didn\'t mean you, Dima. Dima said quietly: I know, but you said it. Then she walked to class. Shahd stayed alone in the playground, and learned for the first time that a sent word does not come back, even if you delete it.',
            'That day Shahd did not eat her lunch. She was thinking of the single minute in which she had sent everything, and of the long days she would need to mend what that minute had done. She wished she could turn back time.'
          ] },
        quiz: Q('monkey-2', 2, [
          { correct: 0, q: { ar: 'ما الكلمة التي جرحت ديما في رسالة شهد الثالثة؟', en: 'What in Shahd\'s third message hurt Dima?' },
            options: [{ ar: 'أن صديقات نوال كلهن تافهات', en: 'That all Nawal\'s friends were worthless' }, { ar: 'أن ديما لا تفهم شيئًا في الرسم', en: 'That Dima knew nothing about drawing' }, { ar: 'أن ديما غيورة مثل نوال', en: 'That Dima was jealous, like Nawal' }],
            why: { ar: 'كلمة الغضب تصيب أبعد مما نقصد.', en: 'Angry words hit further than we intend.' } },
          { correct: 0, q: { ar: 'ماذا تعلمت شهد عن الكلمة المرسَلة؟', en: 'What did Shahd learn about a sent word?' },
            options: [{ ar: 'أنها لا تعود حتى لو حُذفت', en: 'It does not come back, even if deleted' }, { ar: 'أنها تُنسى بعد يوم أو يومين', en: 'It is forgotten in a day or two' }, { ar: 'أن حذفها يمحوها من كل الهواتف', en: 'Deleting it wipes it from every phone' }],
            why: { ar: 'لقطات الشاشة تحفظ ما نرسله في لحظة الغضب.', en: 'Screenshots keep what we send in a moment of anger.' } }
        ]) },

      { title: { ar: 'الشديد الحقيقي', en: 'The truly strong' },
        body: { ar: [
            'عند المغرب جلست شهد مع خالتها رحاب، وكانت معلمة لغة عربية تزورهم. حكت لها كل شيء وهي تبكي، ثم قالت: حين أغضب يا خالتي أصير شخصًا لا أعرفه، ولا أحبه.',
            'قالت الخالة: أنا أعرفك: أنتِ البنت التي رسمت قطة ثلاثة أيام. والصوت الذي في الرسائل صوت الغضب حين يمسك المقود. وقد قال النبي صلى الله عليه وآله وسلم: «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ».',
            'سألت شهد: لكن كيف أملك نفسي، والغضب أسرع مني؟ قالت الخالة: في زمن الهاتف، الغضب يحتاج إلى ثانية واحدة ليصل إلى ثلاثين شخصًا. فنحن نحتاج إلى فاصل صغير بين الشعور والزر. دعيني أعلمك قاعدة الدقائق الثلاث. إنها صغيرة، لكنها تحمي كثيرًا.',
            'وقالت: إذا غضبتِ من رسالة، فلا تردي بصوتك أبدًا. اكتبي الرد إن شئت، لكن لا ترسليه. ضعي الهاتف بعيدًا، واشربي ماء، وقولي الكلمة التي قال النبي صلى الله عليه وآله وسلم إنها تُذهب الغضب عن صاحبه: أعوذ بالله من الشيطان الرجيم. وبعد ثلاث دقائق اقرئي ما كتبتِ، واسألي: هل أريد أن يرى هذا ثلاثون شخصًا غدًا؟',
            'ضحكت شهد رغم دموعها وقالت: لو فعلت هذا أمس، لما أرسلت شيئًا. فقالت الخالة: ولهذا هي قاعدة. والشديد في زمننا يمسك إصبعه عن الزر.',
            'وقبل أن تنام، كتبت شهد القاعدة على ورقة صغيرة، وألصقتها خلف غطاء هاتفها، حتى تراها كلما فتحته. وكتبت فوقها بخط صغير: ثلاث دقائق، ثم أقرأ، ثم أقرر.'
          ], en: [
            'In the evening Shahd sat with her aunt Rihab, an Arabic teacher who was visiting. She told her everything, crying, then said: when I get angry, Auntie, I turn into someone I don\'t know, and don\'t like.',
            'Her aunt said: I know you. You are the girl who spent three days drawing a cat. The voice in those messages is anger\'s voice when it grabs the wheel. And the Prophet, peace and blessings be upon him and his family, said, meaning: "The strong one is not the one who throws people in wrestling; the strong one is the one who controls himself when angry."',
            'Shahd asked: but how do I control myself when anger is faster than me? Her aunt said: in the age of phones, anger needs one second to reach thirty people. So we need a small gap between the feeling and the button. Let me teach you the three-minute rule. It is small, but it protects a lot.',
            'She said: if a message makes you angry, never reply with your voice. Type a reply if you like, but don\'t send it. Put the phone away, drink some water, and say the words the Prophet, peace and blessings be upon him and his family, said would take anger away from the one who says them: I seek refuge in Allah from the accursed devil. After three minutes, read what you wrote and ask: do I want thirty people to see this tomorrow?',
            'Shahd laughed through her tears and said: if I\'d done that yesterday, I wouldn\'t have sent anything. Her aunt said: that\'s why it\'s a rule. In our time, the strong one holds her finger back from the button.',
            'Before sleeping, Shahd wrote the rule on a small slip and stuck it inside her phone case, so she would see it whenever she opened it. Above it, in small writing: three minutes, then read, then decide.'
          ] },
        quiz: Q('monkey-2', 3, [
          { correct: 2, q: { ar: 'ما قاعدة الدقائق الثلاث؟', en: 'What is the three-minute rule?' },
            options: [{ ar: 'أن ترد كتابة لا صوتًا، بعد ثلاث دقائق', en: 'Reply in writing, not by voice, after three minutes' }, { ar: 'أن تترك الهاتف ثلاث دقائق ثم ترد بهدوء', en: 'Leave the phone three minutes, then reply calmly' }, { ar: 'أن تكتب الرد ولا ترسله، ثم تقرأه بعد ثلاث دقائق', en: 'Type the reply but don\'t send it, then read it after three minutes' }],
            why: { ar: 'الفاصل الصغير بين الشعور والزر يعطي العقل فرصة.', en: 'A small gap between feeling and button gives the mind a chance.' } },
          { correct: 1, q: { ar: 'من الشديد في زمن الهاتف بحسب الخالة؟', en: 'Who is strong in the age of phones, according to the aunt?' },
            options: [{ ar: 'من لا يقرأ التعليقات أبدًا', en: 'Whoever never reads the comments' }, { ar: 'من يمسك إصبعه عن الزر', en: 'Whoever holds her finger back from the button' }, { ar: 'من يرد بكلمات قليلة هادئة', en: 'Whoever replies in a few calm words' }],
            why: { ar: 'الحديث يجعل القوة في ملك النفس عند الغضب.', en: 'The hadith places strength in self-control when angry.' } }
        ]) },

      { title: { ar: 'الاعتذار الصعب', en: 'The hard apology' },
        body: { ar: [
            'في اليوم التالي ذهبت شهد إلى ديما قبل الحصة الأولى، وقالت: كنتِ على حق. قلتُ الكلمة، وكانت ظالمة. أنا آسفة، ولا أطلب أن تسامحيني اليوم، لكني أردت أن تعرفي أنني أعرف خطئي.',
            'نظرت ديما إليها قليلًا، ثم قالت: كنت أنتظر أن تقولي إن نوال هي السبب. فقالت شهد: نوال أخطأت حين سخرت، لكن ما قلته أنا هو خطئي أنا. فابتسمت ديما ابتسامة صغيرة، ومدت يدها. فأمسكتها شهد بقوة، وشعرت أن صداقتهما صارت أقوى مما كانت.',
            'ثم كان الاعتذار الأصعب: نوال. فكرت شهد كثيرًا: هي التي بدأت، لماذا أعتذر لها؟ لكنها تذكرت صوتها في الرسائل، وكلماتها عن رسوم نوال وغيرتها. فعرفت أن خطأ نوال لا يجعل كلامها هي صوابًا.',
            'كتبت لها رسالة خاصة، لا في المجموعة. كتبتها، ثم انتظرت ثلاث دقائق، ثم قرأتها. ثم أرسلتها: أعتذر عن رسائلي الصوتية. ما قلته عن رسومك ظالم وغير صحيح. أتمنى أن نبدأ من جديد.',
            'بعد ساعة ردت نوال: وأنا أعتذر عن تعليق البطاطا. كانت مزحة سخيفة. رسمتك كانت جميلة فعلًا. فضحكت شهد وحدها في غرفتها، وشعرت كأن حجرًا ثقيلًا سقط عن صدرها.',
            'وفي الغد أعادت المعلمة فتح المجموعة، وكتبت فيها: شكرًا للبنات اللواتي أصلحن ما بينهن. فلم تذكر أسماء، لكن شهد عرفت أنها تقصدها، واحمرّ وجهها هذه المرة من الفرح.'
          ], en: [
            'The next day Shahd went to Dima before the first lesson and said: you were right. I said the word, and it was unjust. I\'m sorry. I\'m not asking you to forgive me today, but I wanted you to know that I know my mistake.',
            'Dima looked at her for a moment, then said: I was waiting for you to say Nawal was to blame. Shahd said: Nawal was wrong to mock, but what I said is my own mistake. Dima gave a small smile and held out her hand. Shahd held it tightly and felt their friendship had become stronger than before.',
            'Then came the hardest apology: Nawal. Shahd thought hard: she started it, why should I apologise? But she remembered her voice in the messages, and her words about Nawal\'s drawings and jealousy. She knew that Nawal\'s mistake did not make her own words right.',
            'She wrote her a private message, not in the group. She wrote it, waited three minutes, read it, then sent it: I\'m sorry for my voice messages. What I said about your drawings was unjust and untrue. I hope we can start again.',
            'An hour later Nawal replied: and I\'m sorry about the potato comment. It was a silly joke. Your drawing really was beautiful. Shahd laughed alone in her room and felt as if a heavy stone had fallen from her chest.',
            'The next day the teacher reopened the group and wrote: thank you to the girls who made things right between them. She named no one, but Shahd knew she meant her, and this time her face went red with joy.'
          ] },
        quiz: Q('monkey-2', 4, [
          { correct: 0, q: { ar: 'لماذا اعتذرت شهد لنوال مع أن نوال بدأت؟', en: 'Why did Shahd apologise to Nawal though Nawal started it?' },
            options: [{ ar: 'لأن خطأ نوال لا يجعل كلامها صوابًا', en: 'Nawal\'s mistake did not make her own words right' }, { ar: 'لأن المعلمة طلبت منها ذلك', en: 'The teacher asked her to' }, { ar: 'لأن ديما اشترطت ذلك لتسامحها', en: 'Dima made it a condition of forgiving her' }],
            why: { ar: 'كل واحد مسؤول عن كلماته هو.', en: 'Each person answers for their own words.' } },
          { correct: 2, q: { ar: 'أين أرسلت شهد اعتذارها لنوال؟', en: 'Where did Shahd send her apology to Nawal?' },
            options: [{ ar: 'في المجموعة أمام الجميع', en: 'In the group in front of everyone' }, { ar: 'في ورقة وضعتها في حقيبة نوال', en: 'In a note slipped into Nawal\'s bag' }, { ar: 'في رسالة خاصة بعد ثلاث دقائق', en: 'In a private message, after three minutes' }],
            why: { ar: 'الاعتذار الخاص الهادئ يحفظ الكرامة للطرفين.', en: 'A calm private apology protects both people\'s dignity.' } }
        ]) },

      { title: { ar: 'المجموعة نفسها، شيء آخر', en: 'The same group, something else' },
        body: { ar: [
            'بعد أسبوعين مرضت بنت في الصف اسمها رهف، وغابت عن المدرسة أيامًا. وكانت الامتحانات قريبة. فكرت شهد: المجموعة التي اشتعلت فيها النار يمكن أن تكون مكانًا لشيء آخر. والمجموعة كاليد: تؤذي أو تساعد، بحسب من يحركها.',
            'كتبت في المجموعة: رهف مريضة، والامتحان بعد أسبوع. ما رأيكن أن ترسل كل واحدة منا ملخص درس واحد بخط واضح، فنجمعها لها؟ وبعد دقائق جاءت الردود: أنا آخذ العلوم! وأنا الرياضيات! وكتبت نوال: وأنا أرسم لها بطاقة.',
            'وفي يومين امتلأ ملف كامل بالملخصات، ورسمت نوال بطاقة فيها قطة جالسة على نافذة، وكتبت تحتها: من نوال وشهد. فضحكت شهد حين رأتها، وعرفت أن القطة صارت سرًّا صغيرًا بينهما.',
            'وحين عادت رهف إلى المدرسة قالت إن الملخصات أنقذتها، وإنها حفظت البطاقة في دفترها. وفي الطريق إلى البيت قالت ديما لشهد: أتذكرين حين كانت المجموعة مكانًا للصراخ؟ قالت شهد: أذكر، ولا أريد أن أنسى. لأني إن نسيت قد أعود إليه، وإن تذكرت عرفت الطريق.',
            'وفي المساء نشرت شهد في المجموعة رسمة جديدة: قطتان على نافذة واحدة، إحداهما مستديرة قليلًا كحبة بطاطا. وكتبت تحتها: «إلى رهف، بمناسبة العودة». ثم انتظرت ثلاث دقائق، كعادتها الجديدة، وضغطت الزر. وكان أول تعليق من نوال: وجه يضحك حتى البكاء، ثم قلب.'
          ], en: [
            'Two weeks later a girl in the class called Rahaf fell ill and missed school for days. Exams were close. Shahd thought: the group that caught fire could be a place for something else. A group is like a hand: it harms or helps, depending on who moves it.',
            'She wrote in the group: Rahaf is ill and the exam is in a week. What if each of us sends a summary of one lesson in clear handwriting, and we put them together for her? Minutes later the replies came: I\'ll take science! I\'ll do maths! And Nawal wrote: I\'ll draw her a card.',
            'In two days a whole file filled with summaries, and Nawal drew a card with a cat sitting on a window sill, and wrote underneath: from Nawal and Shahd. Shahd laughed when she saw it, and knew the cat had become a small secret between them.',
            'When Rahaf came back she said the summaries had saved her and that she had kept the card in her notebook. On the way home Dima said to Shahd: remember when the group was a place for shouting? Shahd said: I remember, and I don\'t want to forget. If I forget, I might go back to it; if I remember, I know the way.',
            'In the evening Shahd posted a new drawing in the group: two cats on one window sill, one of them a little round, like a potato. Underneath she wrote: "For Rahaf, welcome back." Then she waited three minutes, her new habit, and pressed the button. The first comment was from Nawal: a face laughing to tears, then a heart.'
          ] },
        quiz: Q('monkey-2', 5, [
          { correct: 1, q: { ar: 'ماذا اقترحت شهد في المجموعة من أجل رهف؟', en: 'What did Shahd suggest in the group for Rahaf?' },
            options: [{ ar: 'أن يتركوها ترتاح حتى تعود', en: 'Let her rest until she came back' }, { ar: 'أن ترسل كل بنت ملخص درس', en: 'That each girl send a lesson summary' }, { ar: 'أن يطلبوا تأجيل امتحانها', en: 'Ask for her exam to be postponed' }],
            why: { ar: 'المكان الذي اشتعلت فيه النار صار مكانًا للخير.', en: 'The place that caught fire became a place for good.' } },
          { correct: 1, q: { ar: 'ماذا رسمت شهد لرهف في آخر القصة؟', en: 'What did Shahd draw for Rahaf at the end of the story?' },
            options: [{ ar: 'قطة واحدة على نافذة، كالرسمة الأولى', en: 'One cat on a window sill, like the first drawing' }, { ar: 'قطتين على نافذة، إحداهما كحبة بطاطا', en: 'Two cats on a window sill, one like a potato' }, { ar: 'باقة ورد، وتحتها بطاقة شكر', en: 'A bunch of flowers with a thank-you card' }],
            why: { ar: 'صارت النكتة التي أشعلت الشجار ضحكة مشتركة. واليد التي أمسكت أذاها صارت تعطي، وهذا باب السبابة.', en: 'The joke that started the quarrel became a shared laugh. The hand that held back its harm now gives, and that is the door to the index finger.' } }
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
        body: { ar: [
            'كان معاذ في الثانية عشرة، وكان يحب العلوم. وفي أول الفصل أعلن المعلم عن مسابقة المشاريع: كل ثلاثة تلاميذ يصنعون مشروعًا واحدًا، ويعرضونه أمام المدرسة كلها بعد شهر، والفائز يمثل المدرسة في مسابقة المدينة.',
            'ثم قرأ المعلم أسماء الفرق، وفي فريق معاذ: معاذ، ونزار، وإياد. ففرح معاذ بنزار، فهو ذكي ويتكلم بثقة، والصف كله يحبه. أما نزار فلوى وجهه حين سمع اسم إياد، وهمس لمعاذ: «انتهينا، سنخسر».',
            'كان إياد قد جاء إلى المدرسة هذا العام من بلد آخر. عربيته بطيئة، يبحث عن الكلمة قبل أن يقولها، ودرجاته في الاختبارات المكتوبة ضعيفة. يجلس في آخر الصف، ولا يرفع يده أبدًا، حتى حين يعرف الجواب. وبعض الأولاد يقلّدون طريقته في الكلام.',
            'وفي الاستراحة قال نزار: «نعمل نحن الاثنين، ونكتب اسمه على المشروع حتى لا يغضب المعلم. هو لن يفهم شيئًا على أي حال». وضحك. وسكت معاذ، فقد خاف أن يخسر صداقة نزار.',
            'وفي الطريق إلى البيت رأى معاذ إيادًا يمشي وحده، وحقيبته الثقيلة على كتف واحد. فتذكر كلام نزار، وشعر بشيء غير مريح في صدره، كأنه وقّع على ورقة ظالمة دون أن يقرأها.',
            'وقال في نفسه: «لو كنت أنا الجديد في بلد لا أعرف لغته جيدًا، هل كنت أحب أن يُكتب اسمي على عمل لم يتركوني أشارك فيه؟». ثم أسرع حتى صار بجانب إياد، وقال: «أنت في فريقنا. نلتقي الخميس في بيتي؟». فرفع إياد عينيه متفاجئًا، وأومأ.'
          ], en: [
            'Muadh was twelve and loved science. At the start of term the teacher announced the project competition: every three pupils would make one project and present it to the whole school a month later, and the winners would represent the school in the city competition.',
            'Then the teacher read out the teams. Muadh\'s team was Muadh, Nizar and Iyad. Muadh was glad to have Nizar: he was clever, spoke with confidence, and the whole class liked him. But Nizar pulled a face when he heard Iyad\'s name, and whispered to Muadh: "That\'s it, we\'re going to lose."',
            'Iyad had come to the school this year from another country. His Arabic was slow; he searched for each word before saying it, and his marks in written tests were weak. He sat at the back of the class and never raised his hand, even when he knew the answer. Some boys copied the way he spoke.',
            'At break Nizar said: "We\'ll do it ourselves, the two of us, and put his name on the project so the teacher doesn\'t get angry. He won\'t understand anything anyway." And he laughed. Muadh said nothing; he was afraid of losing Nizar\'s friendship.',
            'On the way home Muadh saw Iyad walking alone, his heavy bag on one shoulder. He remembered what Nizar had said and felt something uncomfortable in his chest, as if he had signed an unfair paper without reading it.',
            'He said to himself: "If I were the new one, in a country whose language I hardly knew, would I want my name put on work they never let me take part in?" Then he hurried until he was beside Iyad and said: "You\'re on our team. Shall we meet on Thursday at my house?" Iyad looked up in surprise, and nodded.'
          ] },
        quiz: Q('human-2', 1, [
          { correct: 1, q: { ar: 'ماذا اقترح نزار في الاستراحة؟', en: 'What did Nizar suggest at break?' },
            options: [{ ar: 'أن يطلبوا من المعلم نقل إياد إلى فريق آخر', en: 'That they ask the teacher to move Iyad to another team' }, { ar: 'أن يعمل هو ومعاذ وحدهما ويكتبا اسم إياد فقط', en: 'That he and Muadh work alone and just put Iyad\'s name on it' }, { ar: 'أن يعطوا إيادًا أسهل جزء في المشروع', en: 'That they give Iyad the easiest part of the project' }],
            why: { ar: 'إقصاء الزميل وكتابة اسمه فقط ظلم له، ولو بدا حلًّا مريحًا.', en: 'Shutting a teammate out and only writing his name is unfair to him, however convenient it looks.' } },
          { correct: 0, q: { ar: 'ما السؤال الذي سأله معاذ نفسه؟', en: 'What question did Muadh ask himself?' },
            options: [{ ar: 'لو كنت أنا الجديد، هل كنت أحب هذا؟', en: 'If I were the new one, would I want this?' }, { ar: 'هل سيغضب نزار إن خالفته؟', en: 'Will Nizar be angry if I disagree?' }, { ar: 'هل يستطيع إياد أن يشارك حقًّا؟', en: 'Can Iyad really take part?' }],
            why: { ar: 'أن تحب لغيرك ما تحب لنفسك بداية العدل.', en: 'Wanting for others what you want for yourself is where fairness begins.' } }
        ]) },

      { title: { ar: 'يدا إياد', en: 'Iyad\'s hands' },
        body: { ar: [
            'اختار الفريق أن يصنع جهازًا لتنقية الماء من الرمل والحصى والفحم. وفي أول لقاء في بيت معاذ جلس نزار إلى الحاسوب يكتب، وأعطى إيادًا ورقة وقال: «ارسم الشعار، هذا يكفي».',
            'أخذ إياد الورقة بصمت. وكان معاذ ونزار يتجادلان في طريقة قص الزجاجات البلاستيكية، فتشققت الزجاجة الأولى، وانثنت الثانية. فقال إياد بصوت منخفض، وهو يبحث عن الكلمات: «في بلدي... أبي... نصنع هذا».',
            'نظر إليه معاذ مندهشًا: «أنت تعرف كيف؟». فأومأ إياد، وأخذ الزجاجة، وسخّن السكين قليلًا على شمعة، وقصّها قصًّا مستقيمًا نظيفًا. ثم رتب الطبقات بيديه: حصى كبير، ثم صغير، ثم رمل، ثم فحم، في دقائق. وتحركت يداه بثقة لم يرها معاذ فيه من قبل، كأنه في بيته.',
            'وصب الماء العكر من الأعلى، فخرج من الأسفل أصفى بكثير. فصفق معاذ، ورفع نزار حاجبيه وقال: «من أين تعلمت هذا؟». قال إياد: «في بلدي، الماء ما كان دائمًا نظيفًا. كنا نصنع هذا في البيت».',
            'سكت الولدان. وفهم معاذ أن لغة إياد الجديدة هي البطيئة، وأن عقله سريع، وفي يديه علم لا يظهر في الاختبارات المكتوبة. وتذكر كيف كانوا سيكتبون اسمه على عمل لا يعرف عنه شيئًا.',
            'وقبل أن يذهب نزار، أخذ معاذ ورقة الشعار من أمام إياد، وكتب في أعلاها بخط كبير: «المهندس: إياد». ثم قال لنزار بهدوء: «هذا مكانه في الفريق». فلم يرد نزار، لكنه نظر إلى إياد نظرة جديدة.'
          ], en: [
            'The team chose to build a device that cleans water with sand, gravel and charcoal. At the first meeting, at Muadh\'s house, Nizar sat at the computer typing, handed Iyad a sheet of paper and said: "Draw the logo. That\'s enough."',
            'Iyad took the paper without a word. Muadh and Nizar were arguing about how to cut the plastic bottles; the first bottle cracked and the second buckled. Then Iyad said in a low voice, searching for the words: "In my country... my father... we make this."',
            'Muadh looked at him in amazement: "You know how?" Iyad nodded, took the bottle, warmed the knife a little over a candle, and cut it in a clean, straight line. Then he arranged the layers with his hands: large gravel, then small, then sand, then charcoal, in a few minutes. His hands moved with a confidence Muadh had never seen in him, as if he were at home.',
            'He poured the muddy water in at the top, and it came out at the bottom much clearer. Muadh clapped, and Nizar raised his eyebrows: "Where did you learn that?" Iyad said: "In my country the water was not always clean. We made this at home."',
            'The two boys fell silent. Muadh understood that it was Iyad\'s new language that was slow, that his mind was quick, and that his hands held a knowledge that never shows up in written tests. He remembered how they had been about to put his name on work he knew nothing about.',
            'Before Nizar left, Muadh took the logo sheet from in front of Iyad and wrote across the top in big letters: "Engineer: Iyad." Then he said quietly to Nizar: "This is his place on the team." Nizar did not reply, but he looked at Iyad with new eyes.'
          ] },
        quiz: Q('human-2', 2, [
          { correct: 2, q: { ar: 'ماذا اكتشف معاذ عن إياد؟', en: 'What did Muadh discover about Iyad?' },
            options: [{ ar: 'أنه يفهم العربية جيدًا لكنه يخجل', en: 'That he understands Arabic well but is shy' }, { ar: 'أنه يرسم الشعارات أحسن من الجميع', en: 'That he draws logos better than anyone' }, { ar: 'أن في يديه علمًا لا يظهر في الاختبارات المكتوبة', en: 'That his hands hold a knowledge that never shows in written tests' }],
            why: { ar: 'اللغة البطيئة قد يكون وراءها عقل سريع.', en: 'A slow new language can hide a quick mind.' } },
          { correct: 1, q: { ar: 'لماذا كان إياد يعرف صنع جهاز التنقية؟', en: 'Why did Iyad know how to make the water filter?' },
            options: [{ ar: 'رآه في درس علوم في مدرسته القديمة', en: 'He saw it in a science lesson at his old school' }, { ar: 'لأن الماء في بلده ما كان دائمًا نظيفًا', en: 'Because the water in his country was not always clean' }, { ar: 'لأن أباه مهندس في شركة مياه', en: 'Because his father is an engineer at a water company' }],
            why: { ar: 'لكل إنسان قصة وعلم لا نراه من بعيد.', en: 'Every person has a story and a knowledge we cannot see from a distance.' } }
        ]) },

      { title: { ar: 'كلمة في الصف', en: 'A word in class' },
        body: { ar: [
            'في الأسبوع التالي سأل المعلم كل فريق عن تقدمه. فوقف نزار كعادته، وشرح المشروع بكلمات جميلة، ولم يذكر إيادًا مرة واحدة. كان يقول: «نحن صنعنا، نحن جربنا»، و«نحن» عنده هو ومعاذ.',
            'ثم سأل المعلم: «ومن قص الزجاجات بهذه الدقة؟». فضحك ولد من فريق آخر وقال: «أكيد ليس إياد، فهو لا يعرف أن يقول جملة!». وضحك بعض الصف، وأحنى إياد رأسه حتى كاد يلمس الطاولة.',
            'شعر معاذ بقلبه يدق. كان يستطيع أن يسكت، كما سكت في الاستراحة الأولى، فالسكوت أسهل، ولن يغضب منه أحد. ثم تذكر وجه إياد وهو يصب الماء، وكيف خرج صافيًا. وقال في نفسه: «إن سكتُّ الآن، فأنا أضحك معهم».',
            'فرفع يده وقال: «يا أستاذ، إياد هو الذي قص الزجاجات، وهو الذي عرف ترتيب الطبقات. نحن جربنا مرتين وفشلنا، وهو نجح في دقائق. والفكرة كلها من بيته». ثم قال للولد الذي ضحك بهدوء: «ليس كل من يتكلم ببطء يفكر ببطء».',
            'سكت الصف. ونظر المعلم إلى إياد وابتسم: «أحسنت يا إياد، وأحسنت يا معاذ». ثم قرأ على الصف قول النبي صلى الله عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ»، وقال: «والضحكة على زميل تجرحه، ولو سمّيناها مزحة».',
            'ورفع إياد رأسه لأول مرة في ذلك اليوم، ونظر إلى معاذ نظرة لم ينسها معاذ. وفي الاستراحة جاء الولد الذي ضحك، وجلس بجانب إياد، وسأله كيف يُقص البلاستيك بسكين ساخن.'
          ], en: [
            'The next week the teacher asked each team about its progress. Nizar stood up as usual and explained the project in fine words, without mentioning Iyad once. He kept saying: "We built, we tested," and by "we" he meant himself and Muadh.',
            'Then the teacher asked: "And who cut the bottles so precisely?" A boy from another team laughed and said: "Not Iyad, that\'s for sure. He can\'t even say a sentence!" Part of the class laughed, and Iyad bent his head until it nearly touched the desk.',
            'Muadh felt his heart pounding. He could stay quiet, as he had at that first break; silence was easier, and nobody would be angry with him. Then he remembered Iyad\'s face as he poured the water, and how it came out clear. He said to himself: "If I stay quiet now, I am laughing with them."',
            'So he raised his hand and said: "Sir, Iyad is the one who cut the bottles, and the one who knew the order of the layers. We tried twice and failed, and he did it in minutes. The whole idea comes from his home." Then he said calmly to the boy who had laughed: "Speaking slowly is not the same as thinking slowly."',
            'The class went quiet. The teacher looked at Iyad and smiled: "Well done, Iyad, and well done, Muadh." Then he read the class the words of the Prophet, peace and blessings be upon him and his family: "The Muslim is the one from whose tongue and hand the Muslims are safe," and said: "Laughing at a classmate wounds him, even when we call it a joke."',
            'Iyad lifted his head for the first time that day and gave Muadh a look Muadh never forgot. At break the boy who had laughed came and sat next to Iyad and asked him how you cut plastic with a hot knife.'
          ] },
        quiz: Q('human-2', 3, [
          { correct: 0, q: { ar: 'ماذا فعل معاذ حين ضحك الصف على إياد؟', en: 'What did Muadh do when the class laughed at Iyad?' },
            options: [{ ar: 'رفع يده وقال الحقيقة عن عمل إياد', en: 'He raised his hand and told the truth about Iyad\'s work' }, { ar: 'انتظر نهاية الحصة وأخبر المعلم وحده', en: 'He waited for the end of the lesson and told the teacher privately' }, { ar: 'نظر إلى نزار ينتظر أن يتكلم هو', en: 'He looked at Nizar, waiting for him to speak' }],
            why: { ar: 'العدل أن يُنسب العمل إلى صاحبه، ولو كان السكوت أسهل.', en: 'Fairness means giving the work to the one who did it, even when silence is easier.' } },
          { correct: 2, q: { ar: 'ماذا قال معاذ للولد الذي ضحك؟', en: 'What did Muadh say to the boy who laughed?' },
            options: [{ ar: '«اعتذر لإياد أمام الجميع»', en: '"Apologise to Iyad in front of everyone"' }, { ar: '«جرّب أنت أن تقص زجاجة مثله»', en: '"You try cutting a bottle like him"' }, { ar: '«ليس كل من يتكلم ببطء يفكر ببطء»', en: '"Speaking slowly is not the same as thinking slowly"' }],
            why: { ar: 'دافع عن زميله بهدوء، ولم يجرح أحدًا.', en: 'He stood up for his classmate calmly, and wounded no one.' } }
        ]) },

      { title: { ar: 'نزار يغضب ثم يفهم', en: 'Nizar gets angry, then understands' },
        body: { ar: [
            'بعد الحصة لحق نزار بمعاذ في الممر، وقال غاضبًا: «لماذا فعلت هذا؟ جعلتني أبدو كاذبًا أمام الأستاذ!». قال معاذ: «قلت ما فعله إياد فقط. وأنا أيضًا أخطأت في الأول حين سكتُّ عن فكرتك».',
            'قال نزار: «وما المشكلة؟ المهم أن نفوز!». قال معاذ: «إن فزنا وإياد يشعر أنه لا شيء، فلن أفرح». ثم سأله: «أتذكر حين انكسرت ذراعك السنة الماضية، ولم تستطع أن تكتب؟ من كتب عنك الواجبات؟».',
            'سكت نزار. كان معاذ هو الذي كتب عنه شهرًا كاملًا. ثم قال بصوت أخفض: «كنت أظن أنه سيجعلنا نخسر». قال معاذ: «وهو الذي جعل الجهاز يعمل». فلم يجد نزار ما يقوله.',
            'وقبل أن ينام أرسل نزار رسالة إلى إياد: «آسف لأني لم أذكرك في الصف. وغدًا أنت من يشرح ترتيب الطبقات، وأنا أساعدك في الكلمات إن احتجت». فرد إياد بقلب أحمر، وكلمة واحدة: «شكرًا».',
            'وكان معاذ قد قرأ في كتاب جده حديثًا يحبه: «وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ». ففكر فيه وقال في نفسه: «سكوتي في الأول كان خطأ، وكلامي اليوم بالحق حسنة بعده».',
            'وفي اليوم التالي التقى الثلاثة بعد المدرسة. وقف إياد أمام الجهاز يشرح، ونزار يكتب كلماته على بطاقات صغيرة ويصحح له كلمة أحيانًا، ومعاذ يرتب الصور. وحين كتب نزار «الفحمة» بدل «الفحم»، ضحك إياد لأول مرة ضحكة عالية، وصحّحها له.'
          ], en: [
            'After the lesson Nizar caught up with Muadh in the corridor and said angrily: "Why did you do that? You made me look like a liar in front of the teacher!" Muadh said: "I only said what Iyad did. And I got it wrong too, at the start, when I kept quiet about your idea."',
            'Nizar said: "So what? What matters is that we win!" Muadh said: "If we win and Iyad feels like nothing, I won\'t be happy." Then he asked him: "Remember when you broke your arm last year and couldn\'t write? Who wrote your homework for you?"',
            'Nizar fell silent. It was Muadh who had written it for him for a whole month. Then he said more quietly: "I thought he would make us lose." Muadh said: "And he is the one who made the device work." Nizar had nothing to say.',
            'Before going to sleep Nizar sent Iyad a message: "Sorry I didn\'t mention you in class. Tomorrow you explain the order of the layers, and I\'ll help you with the words if you need." Iyad replied with a red heart and one word: "Thanks."',
            'Muadh had read a hadith he loved in his grandfather\'s book: "Follow a bad deed with a good one and it will wipe it out, and treat people with good character." He thought about it and said to himself: "My silence at the start was a mistake, and speaking the truth today is a good deed after it."',
            'The next day the three met after school. Iyad stood by the device explaining, Nizar wrote his words on small cards and corrected a word now and then, and Muadh arranged the photos. When Nizar wrote the wrong word for charcoal, Iyad laughed out loud for the first time, and corrected it for him.'
          ] },
        quiz: Q('human-2', 4, [
          { correct: 1, q: { ar: 'بماذا ذكّر معاذ نزارًا؟', en: 'What did Muadh remind Nizar of?' },
            options: [{ ar: 'بأنه هو الذي اقترح فكرة الجهاز', en: 'That he was the one who suggested the device' }, { ar: 'بأنه كتب عنه الواجبات حين انكسرت ذراعه', en: 'That he wrote his homework for him when his arm was broken' }, { ar: 'بأن المعلم يكافئ الفرق المتعاونة', en: 'That the teacher rewards teams that cooperate' }],
            why: { ar: 'تذكّر حاجتنا إلى غيرنا يجعلنا ألطف مع من يحتاجنا.', en: 'Remembering how we once needed others makes us gentler with those who need us.' } },
          { correct: 0, q: { ar: 'ما الحسنة التي أتبع بها معاذ سكوته الأول؟', en: 'What good deed did Muadh follow his first silence with?' },
            options: [{ ar: 'أنه تكلم بالحق عن عمل إياد أمام الصف', en: 'He spoke the truth about Iyad\'s work in front of the class' }, { ar: 'أنه اعتذر لإياد في رسالة قبل النوم', en: 'He apologised to Iyad in a message before bed' }, { ar: 'أنه ترك لإياد أن يعرض المشروع وحده', en: 'He let Iyad present the project alone' }],
            why: { ar: 'الحديث يوصي أن نتبع السيئة بحسنة تمحوها.', en: 'The hadith counsels following a bad deed with a good one that wipes it out.' } }
        ]) },

      { title: { ar: 'يوم العرض', en: 'Presentation day' },
        body: { ar: [
            'في يوم العرض وقف الفريق أمام المدرسة كلها. بدأ نزار بالمقدمة، ثم تقدم إياد. كانت يداه ترتجفان قليلًا وهو يصب الماء العكر في الجهاز، ويشرح ببطء ووضوح: «حصى كبير، حصى صغير، رمل، فحم». وخرج الماء صافيًا، فصفق الجميع. وفي آخر القاعة وقف أبو إياد يمسح عينيه.',
            'وفاز الفريق بالمركز الثاني. وعند إعلان النتائج قال المعلم: «ولهذا الفريق جائزة إضافية، جائزة روح الفريق، لأن كل واحد فيه كان له مكان حقيقي».',
            'وفي طريق العودة مشى الثلاثة معًا لأول مرة. وكان إياد يتكلم أكثر من أي يوم مضى، يحكي عن نهر قرب بيته القديم، وعن أبيه الذي علّمه صنع الأشياء بيديه. ونزار يسأله، ويصحح له كلمة أحيانًا بلطف.',
            'وفي المساء قال معاذ لأمه: «لم نفز بالأول، وفرحت أكثر مما لو فزنا وإياد خارج الفريق». فابتسمت أمه، وعلّقت شهادة روح الفريق على باب الثلاجة.',
            'وفي الأسبوع التالي رأى معاذ إيادًا في المكتبة وحده، أمامه كتاب العربية، يكتب الكلمات الصعبة في دفتر صغير. لم يطلب منه إياد شيئًا، ولم يطلب منه المعلم شيئًا.',
            'فسحب معاذ الكرسي المجاور، وفتح كتابه، وقال: «أنا أيضًا أحتاج أن أراجع. نقرأ معًا؟». فدفع إياد دفتره الصغير إلى وسط الطاولة، وأشار إلى أول كلمة صعبة.'
          ], en: [
            'On presentation day the team stood before the whole school. Nizar began with the introduction, then Iyad stepped forward. His hands trembled a little as he poured the muddy water into the device and explained slowly and clearly: "Large gravel, small gravel, sand, charcoal." The water came out clear, and everyone clapped. At the back of the hall Iyad\'s father stood wiping his eyes.',
            'The team came second. When the results were announced the teacher said: "And this team gets an extra award, the team spirit award, because every one of them had a real place in it."',
            'On the way home the three walked together for the first time. Iyad talked more than he ever had, telling them about a river near his old home, and about his father who taught him to make things with his hands. Nizar asked him questions, and gently corrected a word now and then.',
            'In the evening Muadh told his mother: "We didn\'t come first, and I was happier than if we had won with Iyad left out." His mother smiled, and stuck the team spirit certificate on the fridge door.',
            'The next week Muadh saw Iyad alone in the library, his Arabic book in front of him, writing the hard words in a small notebook. Iyad had not asked him for anything, and neither had the teacher.',
            'Muadh pulled out the chair beside him, opened his own book and said: "I need to revise too. Shall we read together?" Iyad pushed his little notebook into the middle of the table and pointed to the first hard word.'
          ] },
        quiz: Q('human-2', 5, [
          { correct: 2, q: { ar: 'ما الجائزة الإضافية التي نالها الفريق؟', en: 'What extra award did the team receive?' },
            options: [{ ar: 'جائزة أفضل فكرة علمية', en: 'The best scientific idea award' }, { ar: 'جائزة أحسن عرض أمام الجمهور', en: 'The best presentation award' }, { ar: 'جائزة روح الفريق', en: 'The team spirit award' }],
            why: { ar: 'كان لكل واحد في الفريق مكان حقيقي.', en: 'Every member of the team had a real place in it.' } },
          { correct: 1, q: { ar: 'ماذا فعل معاذ حين رأى إيادًا في المكتبة؟', en: 'What did Muadh do when he saw Iyad in the library?' },
            options: [{ ar: 'أخبر المعلم أن إيادًا يحتاج دروس تقوية', en: 'He told the teacher Iyad needed extra lessons' }, { ar: 'جلس بجانبه ليقرآ معًا دون أن يطلب منه أحد', en: 'He sat beside him to read together, without anyone asking' }, { ar: 'أعطاه دفترًا فيه كلمات المشروع', en: 'He gave him a notebook with the project words' }],
            why: { ar: 'الخير قبل أن يُطلب هو باب الإبهام.', en: 'Good done before anyone asks is the door of the thumb.' } }
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
      { ar: 'حاول كريم أن يتذكر صحن أمه، فلم يجد في ذاكرته إلا صحنه. من في بيتنا يتعب أو يتأخر في الأكل، ولا ننتبه له؟', en: 'Karim tried to remember his mother\'s plate and found only his own. Who in our home gets tired, or eats last, without us noticing?' },
      { ar: 'ما معنى «انتظر ثم انظر»؟ ومتى يمكن أن نجربها في بيتنا؟', en: 'What does "wait, then look" mean? When could we try it at home?' },
      { ar: 'ماذا فعل كريم بشطيرته في النهاية؟ وكيف شعر بعدها؟', en: 'What did Karim do with his sandwich in the end? How did he feel afterwards?' }
    ],
    act: { ar: 'صحن الوسط: في وجبة واحدة هذا الأسبوع نضع الطعام في صحن مشترك، ويبدأ كل واحد بأن يقدّم لمن بجانبه قبل نفسه.', en: 'The middle plate: at one meal this week we put the food in a shared dish, and each person serves the one beside them before themselves.' }
  },
  'book-monkey': {
    q: [
      { ar: 'ماذا حدث لسارة في المباراة حين غضبت؟ ومن تأذى دون أن تقصد؟', en: 'What happened to Sara in the match when she got angry? Who got hurt without her meaning it?' },
      { ar: 'ما الذي ساعد سارة على أن تتوقف؟ وماذا يساعد كل واحد منا حين يغضب؟', en: 'What helped Sara stop? What helps each of us when we get angry?' },
      { ar: 'رأت سارة الأثر الأزرق على ذراع رنا بعد أسابيع، فاعتذرت. هل عندنا اعتذار تأخر، نستطيع أن نقوله هذا الأسبوع؟', en: 'Sara saw the blue mark on Rana\'s arm weeks later, and apologised. Is there an apology we have put off that we could make this week?' }
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
      { ar: 'ماذا شعرت جود حين وقع البرج؟ وماذا أرادت يدها أن تفعل؟', en: 'How did Joud feel when the tower fell? What did her hand want to do?' },
      { ar: 'ماذا فعلت جود لتهدأ؟ لنجرب معًا مثل عمر: نجلس، وننفخ نفسًا طويلًا.', en: 'What did Joud do to calm down? Let\'s try it together like Omar: we sit and blow out one long breath.' },
      { ar: 'قلّد عمر أخته حين هدأت. من في بيتنا يقلّدنا؟ وماذا نحب أن يرى منا؟', en: 'Omar copied his sister when she calmed down. Who copies us at home? What would we like them to see us do?' }
    ],
    act: { ar: 'برج العائلة: نبني برجًا من المكعبات أو العلب، كل واحد يضع قطعة بدوره. وإن وقع ضحكنا وقلنا: نبنيه أجمل.', en: 'The family tower: we build a tower of blocks or boxes, each adding one piece in turn. If it falls, we laugh and say: let\'s build it lovelier.' }
  },
  'book-human-kids': {
    q: [
      { ar: 'ماذا قال صالح حين رأى العم سليم؟ ومن نبدؤه نحن بالسلام غدًا؟', en: 'What did Saleh say when he saw Uncle Saleem? Whom shall we greet first tomorrow?' },
      { ar: 'لماذا وضع صالح الإبريق بجانب الباب؟ وماذا نضع نحن حتى لا ننسى وعدًا؟', en: 'Why did Saleh put the watering can by the door? What could we put out so we do not forget a promise?' },
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
      { ar: 'بدا حذاء زياد أقل لمعانًا حين رأى ما هو أجد منه. ما آخر شيء انتظرناه طويلًا، كبارًا وصغارًا، وكم بقي فرحنا به؟', en: 'Ziyad\'s trainers looked duller the moment he saw something newer. What is the last thing we waited a long time for, adults and young people alike, and how long did the joy last?' },
      { ar: 'كان نادر يقول «أنا شبعان»، وكانت الأم تترك العشاء في الثلاجة ولا تقول شيئًا. من حولنا قد يحتاج شيئًا ولا يطلبه؟ وكيف نعطيه ونحفظ وجهه، كما فعل صاحب المصباح؟', en: 'Nader kept saying "I\'m full", and the mother left dinner in the fridge without a word. Who around us might need something and not ask? How do we give it and spare their face, as the couple with the lamp did?' },
      { ar: 'أي «بعد قليل» يتكرر في بيتنا؟ ومن يحمل الأكياس حين نقولها؟', en: 'Which "in a bit" keeps coming up in our home? And who carries the bags while we say it?' }
    ],
    act: { ar: 'ظرف الانتظار: كل رغبة شراء غير ضرورية هذا الأسبوع تُكتب على ورقة مع ثمنها التقريبي وتوضع في ظرف، ولا تُشترى قبل يوم كامل. وفي آخر الأسبوع نفتح الظرف معًا، ونرى ما بقي من الرغبات، ونختار شيئًا نافعًا أو عطاءً خفيًّا لمن يحتاج. والكبار يبدؤون.', en: 'The waiting envelope: this week every wish to buy something we do not need is written on a slip with its rough price and put in an envelope, and nothing is bought before a full day. At the end of the week we open the envelope together, see which wants are left, and choose something useful, or a quiet gift for someone in need. The adults go first.' }
  },
  'book-monkey-adult': {
    q: [
      { ar: 'كانت عشرون ثانية من التقليد كافية لتوقف يد هبة في منتصف الطريق. متى ضحكنا، كبارًا وصغارًا، من تقليد أحد؟ وماذا بقي عنده بعد أن انتهى الضحك؟', en: 'Twenty seconds of imitation were enough to stop Hiba\'s hand halfway. When have we, adults and young people, laughed at someone being imitated? What stayed with them after the laughing stopped?' },
      { ar: 'قال أوس لأخته: «لكنكِ أنتِ تفعلينها». ماذا يأخذ الصغار في بيتنا عنا نحن، في الغضب وفي الضحك؟', en: 'Aws told his sister: "But you do it." What do the young ones at home take from us, in anger and in laughter?' },
      { ar: 'اختارت رغد ثلاث حركات تقلّدها حتى تصير لها: تجلس، وتضع كفيها على ركبتيها، وتستعيذ بالله. ما حركة كل واحد منا حين تصعد النار؟', en: 'Raghad picked three moves to imitate until they became hers: sit, palms on knees, seek refuge in Allah. What is each of our moves when the fire rises?' }
    ],
    act: { ar: 'اجلس أولًا: نتفق هذا الأسبوع على أن من شعر بالغضب، كبيرًا كان أو صغيرًا، يجلس قبل أن يتكلم ويقول «أعوذ بالله من الشيطان الرجيم»، ومن رآه يجلس لا يكمل الجدال حتى يهدأ. وفي آخر الأسبوع يحكي كل واحد عن مرة جلس فيها. والكبار يبدؤون.', en: 'Sit first: this week we agree that anyone who feels anger rising, adult or child, sits down before speaking and says "I seek refuge in Allah from the accursed devil", and whoever sees them sit does not carry on the argument until they have calmed down. At the end of the week each of us tells of one time they sat. The adults go first.' }
  },
  'book-human-adult': {
    q: [
      { ar: 'قال ليث «نعم» في ثانيتين، ثم غطّاها بكذبة في سطر. ما الوعود السريعة التي قلناها، كبارًا وصغارًا، هذا الشهر؟ وأيها ما زال صاحبه ينتظر؟', en: 'Layth said "yes" in two seconds, then covered it with a one-line lie. What quick promises have we made this month, adults and young people alike? Which of them is someone still waiting for?' },
      { ar: 'قال ليث للأستاذ فؤاد: «ما كانت عندي حرارة». متى اعترفنا بخطأ وكان الاعتراف أثقل من العذر؟ وماذا حدث بعده؟', en: 'Layth told Ustadh Fuad: "I didn\'t have a fever." When did we own up to a mistake when the confession was heavier than the excuse? What happened afterwards?' },
      { ar: 'كتب ليث درجات عادلة في ورقة لا يراها أحد، ودفع ثمنها مع صاحبه. أين يُسأل كل واحد منا عن جهد غيره: في البيت، أو المدرسة، أو العمل؟', en: 'Layth wrote fair marks on a form nobody would see, and paid for it with his friend. Where is each of us asked about the effort of others: at home, at school, or at work?' }
    ],
    act: { ar: 'نعم بعد ليلة: نتفق هذا الأسبوع على أن كل وعد غير عاجل، من الكبار للصغار ومن الصغار للكبار، يُجاب عنه بعد أن ننظر في وقتنا: «أخبرك غدًا». وما وعدنا به نكتبه على ورقة على باب الثلاجة، ومن تأخر في وعد يعتذر بلا عذر جاهز، ويحدد موعدًا جديدًا. والكبار يبدؤون.', en: 'Yes after a night: this week we agree that every promise that is not urgent, from adults to children and from children to adults, is answered only after we check our time: "I\'ll tell you tomorrow." What we promise goes on a sheet on the fridge door, and whoever is late with a promise apologises without a ready-made excuse and sets a new time. The adults go first.' }
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
      { ar: 'قال أبو عمّار: الحبل في يدك، والرغبة تمشي حيث تمشي بها. ما الحيل التي تستعملها الألعاب والإعلانات لتأخذ الحبل منا؟', en: 'Ammar\'s father said: the rope is in your hand, and the wanting goes wherever you lead it. What tricks do games and adverts use to take the rope from us?' }
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
