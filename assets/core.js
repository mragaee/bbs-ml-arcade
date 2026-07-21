"use strict";
/* ════════════════════════════════════════════════════════════
   MULTIPLAYER BACKEND (optional)
   Paste your Firebase Realtime Database URL here to enable teams,
   e.g. "https://ml-arcade-default-rtdb.firebaseio.com"
   Leave empty ("") for solo mode — the game works fully without it.
   ════════════════════════════════════════════════════════════ */
const BACKEND_URL = "https://co-bbs-ml-arcade-default-rtdb.europe-west1.firebasedatabase.app";
/* ════════════════════════════════════════════════════════════
   I18N — English / العربية
   ════════════════════════════════════════════════════════════ */
const I18N = {
  en: {
    tagline: "Train your brain to train the machines. Three paradigms. Three games. Let's go.",
    done: "DONE", best: "Best score:", back: "← Arcade", backArcade: "Back to Arcade",
    explainTitle: "What's the ML idea here?",
    footer: `BSS Tech Academy · "The AI Blueprint" lab · works offline, no installs, no mercy `,
    lvl1: "Level 1 · Supervised Learning", lvl2: "Level 2 · Unsupervised Learning", lvl3: "Level 3 · Reinforcement Learning",
    card1Title: "The Spam &amp; Ham Classifier", card1Sub: "Learning from labeled data",
    card1Desc: "Study labeled training emails, then classify a flood of new ones before the timer runs out. You <i>are</i> the model.",
    card2Title: "The Cluster Finder", card2Sub: "Finding hidden patterns — no labels",
    card2Desc: "A galaxy of unlabeled data points. Drop centroids and run K-Means to watch the machine discover groups on its own.",
    card3Title: "The Bot Maze Trainer", card3Sub: "Trial &amp; error with rewards",
    card3Desc: "Tune rewards and penalties, then train a Q-learning bot to find the battery — and watch it learn to fear the fire.",

    /* Level 1 */
    l1Name: "The Spam &amp; Ham Classifier", l1Tag: "Supervised",
    l1Explain: `<b>Supervised learning</b> means learning from examples that come with the correct answers (<b>labels</b>). First you'll see <b>training data</b> — emails already stamped SPAM or HAM (not-spam). Your brain will pick up the patterns (ALL CAPS, "FREE!!!", sketchy senders…). Then you'll classify <b>new, unlabeled</b> emails — exactly what a trained spam filter does millions of times a day.`,
    l1Mission: "Your mission",
    l1MissionText: `Phase 1: study <b style="color:var(--text)">10 labeled training emails</b>.<br>Phase 2: classify the mystery emails before the clock runs out — it <b style="color:var(--text)">shrinks as your streak grows</b>!<br>+10 for a correct call, −5 for a wrong one. Higher difficulty = less time, more emails, trickier traps.`,
    l1Start: "Start Training Phase",
    l1TrainProgress: "Training example {i} / {n}",
    l1Memorize: "The machine memorizes patterns from labeled examples…",
    l1Skip: "Skip ahead — I've got the pattern ",
    l1ChipEmail: "Email", l1ChipScore: "Score", l1ChipStreak: "Streak",
    l1From: "From:", l1Ham: "HAM", l1Spam: "SPAM",
    l1StampSpam: "SPAM", l1StampHam: "HAM",
    l1Kbd: "Keyboard: <kbd>←</kbd> HAM &nbsp;·&nbsp; <kbd>→</kbd> SPAM",
    l1Correct: "Correct! +10",
    l1WrongSpam: "That was SPAM! −5", l1WrongHam: "That was legit HAM! −5",
    l1TooSlow: "Too slow! It was {label}",
    l1TitleElite: "Elite spam filter!", l1TitleTrained: "Model trained!", l1TitleNeeds: "Model needs more training…",
    l1AccLabel: "Your model's accuracy on unseen data:", l1FinalScore: "Final score:",
    l1Tp: "Spam caught ", l1Fn: "Spam let through ", l1Fp: "Good mail trashed ", l1Tn: "Good mail kept ",
    l1NoteFp: "{n} false positive(s) — you trashed real mail. In production, that's the costly mistake!",
    l1NoteFn: "{n} spam slipped into the inbox. Tighten that filter!",
    l1NotePerfect: "Perfect confusion matrix — zero false positives, zero false negatives!",
    l1Takeaway: "<b>Takeaway:</b> Supervised learning = learning a mapping from <b>labeled examples</b> to answers, then applying it to data it has never seen. The labels ARE the teacher.",
    l1Again: "Play Again",

    /* Level 2 */
    l2Name: "The Cluster Finder", l2Tag: "Unsupervised",
    l2Explain: `<b>Unsupervised learning</b> gets <b>no labels at all</b> — just raw data. The algorithm's job is to discover hidden structure by itself. Here you'll run <b>K-Means</b>: drop K "centroids" (cluster centers), then each step the algorithm ① assigns every point to its nearest centroid and ② moves each centroid to the middle of its points. Repeat until nothing moves — the machine just <i>found groups nobody told it about</i>. (Real uses: customer segments, galaxy types, playlist vibes.)`,
    l2LegPoint: "unlabeled point", l2LegCentroid: "centroid", l2LegTrue: "dashed = hidden true groups (revealed at the end)",
    l2KTitle: "K — number of clusters",
    l2StatusPlace: "<b>Click the canvas</b> to place your {k} centroids. No answer key — just guess where the groups are!",
    l2StatusMore: "Nice. <b>{n} more centroid{s}</b> to place.",
    l2StatusReady: "All {k} centroids placed. Hit <b>Run 1 K-Means Step</b> (or Auto-Run) and watch the machine work.",
    l2StatusStep: "Step {i}: points grabbed by nearest centroid → centroids slide to their cluster's <b>mean</b>.",
    l2StatusConverged: "<b>Converged in {i} steps!</b> Nothing moves anymore — the clusters are stable. Dashed rings show the hidden true groups.",
    l2ChipIter: "Iteration", l2ChipMess: "Messiness",
    l2Step: "Run 1 K-Means Step", l2Auto: "Auto-Run to Convergence", l2Clear: "Clear Centroids", l2New: "New Random Data",
    l2MessNote: `Messiness = total distance from points to their centroid (inertia). <b style="color:var(--text)">Lower is better.</b>`,
    l2ResTitle: "Clusters discovered!", l2ResLabel: "How close you got to the best possible grouping:",
    l2NoteHigh: "Converged in {i} iterations — you found the same grouping the algorithm finds from the best possible start. Flawless.",
    l2NoteMid: `Converged in {i} iterations. Close to optimal! K-Means can get stuck in "local optima" depending on where centroids start — try new starting spots.`,
    l2NoteLow: "Converged in {i} iterations, but in a weak local optimum. Bad starting centroids → bad clusters. Clear and try dropping them nearer the blobs!",
    l2Takeaway: `<b>Takeaway:</b> Unsupervised learning = discovering structure in data with <b>zero labels</b>. Nobody said "these are the groups" — K-Means found them from geometry alone.`,
    l2AgainBtn: "New Data, Go Again",
    l2CanvasHint: "click to place centroid {i} of {k}",

    /* Level 3 */
    l3Name: "The Bot Maze Trainer", l3Tag: "Reinforcement",
    l3Explain: `<b>Reinforcement learning</b> = no labels, no answer key — just <b>rewards and penalties</b>. The bot wanders by trial and error; every move updates its <b>Q-table</b> ("how good is action A in cell S?"). Watch the amber glow spread <i>backwards</i> from the battery as knowledge propagates. Then try the evil experiment: set the fire penalty to −1 and retrain — the bot will happily take the fiery shortcut, because <b>the bot learns whatever your rewards actually say</b>, not what you meant. (This is how game AIs, robots, and chatbots get fine-tuned.)`,
    l3LegAgent: "agent", l3LegGoal: "battery (goal)", l3LegFire: "fire (penalty, passable)",
    l3LegWall: "wall", l3LegHi: "high Q (good)", l3LegLo: "negative Q (bad)",
    l3Panel: "Reward Engineering",
    l3Rew: "Battery reward", l3Pen: "Fire penalty", l3StepCost: "Step cost", l3StepFixed: "−1 (fixed)", l3Speed: "Training speed",
    l3ChipEp: "Episodes", l3ChipEps: "ε explore",
    l3Chart: "reward per episode (learning curve)",
    l3Train: "Train Bot", l3Pause: "Pause Training", l3Test: "Test Bot (greedy run)", l3Reset: "Reset Brain (clear Q-table)",
    l3StatusStart: "Hit <b>Train Bot</b> and watch it stumble, learn, and conquer.",
    l3StatusWiped: "Brain wiped. The bot knows <b>nothing</b> again. Train it!",
    l3StatusTraining: "Training… watch the <b>amber glow spread backwards from the battery</b> — that's the Q-values propagating.",
    l3StatusGreedy: "Greedy run — no exploring, the bot only uses what it <b>learned</b>.",
    l3StatusExperiment: "Experiment: set penalty to <b>−1</b>, hit <b>Reset Brain</b>, retrain, and test again…",
    l3LostTitle: "The bot got lost!",
    l3LostDetail: "It wandered {steps} steps and never found the battery. It needs more training episodes — hit Train Bot and let ε-greedy exploration do its thing.",
    l3OptTitle: "Optimal path — fully trained!",
    l3OptDetail: "Battery reached in {steps} steps with zero fire damage. That's the best safe route (optimal = {opt}).",
    l3SafeTitle: "Safe... but scenic.",
    l3SafeDetail: "Battery reached in {steps} steps, no fire — but the optimal safe route is {opt}. More training tightens the path.",
    l3FireTitle: "It walked through FIRE.",
    l3FireDetail: "Battery reached in {steps} steps, taking {fires} fire hit(s). With your fire penalty at {pen}, the shortcut was mathematically worth it. The bot learned YOUR values — crank the penalty to −50+ and retrain to see it change its mind.",
    l3Takeaway: "<b>Takeaway:</b> Reinforcement learning = trial &amp; error guided by <b>rewards</b>. Change the rewards and you change the behavior — the bot optimizes what you <i>measure</i>, not what you <i>mean</i>.",
    l3Keep: "Keep Experimenting", l3Pts: "pts",

    /* Teams / multiplayer */
    soloMode: "Solo mode — join a team to compete!",
    teamBtn: "Teams", runBtn: "Arcade Run", boardBtn: "Leaderboard", badgesBtn: "Badges",
    teamTitle: "Teams", teamTag: "Multiplayer",
    setupTitle: "Multiplayer backend not configured",
    setupBody: `Teams need a (free) Firebase Realtime Database:<br>1. Go to <code>console.firebase.google.com</code> → Create project.<br>2. Build → Realtime Database → Create (test mode).<br>3. Copy the database URL (like <code>https://xxx-default-rtdb.firebaseio.com</code>).<br>4. Paste it into <code>BACKEND_URL</code> at the top of the script in <code>index.html</code> and push.`,
    gateTitle: "Play as a team!",
    gateText: "Team Leaders create a team with a photo and approve who gets in. Members join with a username + 4-digit PIN.",
    gateCreate: "Create a Team (Leader)", gateJoin: "Join a Team",
    gatePinNote: "Lab game — pick a PIN you don't use anywhere else.",
    createTitle: "Create your team",
    fTeamName: "Team name", fYourName: "Your username (leader)", fYourName2: "Your username", fPin: "4-digit PIN", fPhoto: "Team photo",
    createBtn: "Create Team", backBtn: "← Back",
    joinTitle: "Join a team", joinPick: "Pick your team:", joinBtn: "Request to Join",
    joinRelogin: "Already approved before? Same username + PIN logs you back in.",
    waitTitle: "Waiting for your Team Leader…",
    waitText: "Ask your leader to open the Teams screen and approve you. This page checks automatically.",
    cancelBtn: "Cancel", pendingTitle: "Waiting for approval", rosterTitle: "Team roster",
    playBtn: "Go Play!", logoutBtn: "Log out",
    approveBtn: "Approve", rejectBtn: "Reject",
    pillLeader: "LEADER", pillPending: "PENDING", pillOk: "IN",
    memberCount: "{n} member(s) · led by {leader}",
    errFill: "Fill in every field!", errPin: "PIN must be exactly 4 digits.",
    errUser: "Username: 2–16 letters/numbers only.",
    errTeamTaken: "That team name is taken — pick another.",
    errWrongPin: "Wrong PIN for that username.", errRejected: "The leader rejected this request.",
    errNet: "Network problem — try again.",
    teamBarWho: "{user} · {team}", approvedToast: "You're in! Welcome to {team}",
    noTeams: "No teams yet — go create the first one!",
    boardTitle: "Team Leaderboard", boardTag: "Live",
    boardSub: "Team score = every member's best Level 1 + 2 + 3 + Arcade Run points, added up.",
    boardEmpty: "No teams yet — be the first Team Leader! ",
    badgesTitle: "Achievements", badgesTag: "Bragging rights",
    badge_perfectFilter: "Perfect Filter", badgeD_perfectFilter: "100% accuracy in the spam classifier",
    badge_streakLord: "Streak Lord", badgeD_streakLord: "An 8+ answer streak in Level 1",
    badge_clusterMaster: "Cluster Whisperer", badgeD_clusterMaster: "Converge in ≤3 steps with 95%+ score",
    badge_fireWalker: "Fire Walker", badgeD_fireWalker: "Teach the bot to walk through fire",
    badge_optimalBot: "Optimal Trainer", badgeD_optimalBot: "A perfect 100-point maze run",
    badge_arcadeChamp: "Arcade Champion", badgeD_arcadeChamp: "240+ total in one Arcade Run",
    runStart: "ARCADE RUN! All 3 levels back-to-back — go!",
    runNext: "Level done! Next up: {game}",
    runDone: "Arcade Run complete — {total} points!",
    badgeToast: "Badge unlocked: {name}!",
    gateLogin: "Log back in", countGo: "GO!",
    diffLabel: "Difficulty",
    diffNames: "Very Easy|Easy|Casual|Normal|Medium|Tricky|Hard|Very Hard|Extreme|Very Difficult",
    diffSet: "Difficulty: {name}",
    diffBonus: "Difficulty bonus \u00d7{m} \u2014 {pts} pts recorded!",
  },

  ar: {
    tagline: "درّب عقلك لتدرّب الآلات. ثلاثة أنماط تعلّم. ثلاث ألعاب. يلا بينا!",
    done: "تم", best: "أفضل نتيجة:", back: "→ الأركيد", backArcade: "العودة إلى الأركيد",
    explainTitle: "ما فكرة تعلّم الآلة هنا؟",
    footer: "أكاديمية BSS التقنية · معمل «مخطط الذكاء الاصطناعي» · يعمل بدون إنترنت، بدون تثبيت، بدون رحمة ",
    lvl1: "المستوى 1 · التعلّم الموجَّه", lvl2: "المستوى 2 · التعلّم غير الموجَّه", lvl3: "المستوى 3 · التعلّم المعزَّز",
    card1Title: "مصنِّف السبام والرسائل السليمة", card1Sub: "التعلّم من بيانات معنونة",
    card1Desc: "ادرس رسائل تدريب معنونة، ثم صنّف سيلًا من الرسائل الجديدة قبل انتهاء الوقت. أنت <i>نفسك</i> النموذج!",
    card2Title: "مكتشف العناقيد", card2Sub: "اكتشاف الأنماط الخفية — بدون تسميات",
    card2Desc: "مجرّة من نقاط بيانات بلا تسميات. ضع المراكز وشغّل K-Means لترى الآلة تكتشف المجموعات بنفسها.",
    card3Title: "مدرّب روبوت المتاهة", card3Sub: "التجربة والخطأ مع المكافآت",
    card3Desc: "اضبط المكافآت والعقوبات ثم درّب روبوت Q-Learning ليصل إلى البطارية — وشاهده يتعلّم الخوف من النار.",

    /* المستوى 1 */
    l1Name: "مصنِّف السبام والرسائل السليمة", l1Tag: "تعلّم موجَّه",
    l1Explain: `<b>التعلّم الموجَّه</b> يعني التعلّم من أمثلة مرفقة بالإجابات الصحيحة (<b>التسميات</b>). أولًا سترى <b>بيانات التدريب</b> — رسائل مختومة مسبقًا «سبام» أو «سليم». سيلتقط عقلك الأنماط (حروف كبيرة، «مجاني!!!»، مرسِل مريب…). بعدها ستصنّف رسائل <b>جديدة بلا تسميات</b> — وهذا بالضبط ما يفعله فلتر السبام المدرَّب ملايين المرات يوميًا.`,
    l1Mission: "مهمتك",
    l1MissionText: `المرحلة 1: ادرس <b style="color:var(--text)">10 رسائل تدريب معنونة</b>.<br>المرحلة 2: صنّف الرسائل الغامضة قبل انتهاء الوقت — وهو <b style="color:var(--text)">يقصر كلما زاد تتابعك</b>!<br>+10 للإجابة الصحيحة و −5 للخاطئة. صعوبة أعلى = وقت أقل ورسائل أكثر وأفخاخ أذكى.`,
    l1Start: "ابدأ مرحلة التدريب",
    l1TrainProgress: "مثال التدريب {i} / {n}",
    l1Memorize: "الآلة تحفظ الأنماط من الأمثلة المعنونة…",
    l1Skip: "تخطَّ — فهمت النمط ",
    l1ChipEmail: "رسالة", l1ChipScore: "النقاط", l1ChipStreak: "التتابع",
    l1From: "من:", l1Ham: "سليم", l1Spam: "سبام",
    l1StampSpam: "سبام", l1StampHam: "سليم",
    l1Kbd: "لوحة المفاتيح: <kbd>←</kbd> سليم &nbsp;·&nbsp; <kbd>→</kbd> سبام",
    l1Correct: "صح! +10",
    l1WrongSpam: "كانت سبام! −5", l1WrongHam: "كانت رسالة سليمة! −5",
    l1TooSlow: "متأخر! كانت {label}",
    l1TitleElite: "فلتر سبام أسطوري!", l1TitleTrained: "تم تدريب النموذج!", l1TitleNeeds: "النموذج يحتاج مزيدًا من التدريب…",
    l1AccLabel: "دقّة نموذجك على بيانات لم يرها من قبل:", l1FinalScore: "النتيجة النهائية:",
    l1Tp: "سبام تم اصطياده ", l1Fn: "سبام تسلّل للبريد ", l1Fp: "رسائل سليمة في القمامة ", l1Tn: "رسائل سليمة سلِمت ",
    l1NoteFp: "{n} إنذار كاذب — رميت بريدًا حقيقيًا في القمامة. في الأنظمة الحقيقية هذا هو الخطأ الأغلى!",
    l1NoteFn: "{n} رسالة سبام تسلّلت إلى البريد. شدّد الفلتر!",
    l1NotePerfect: "مصفوفة ارتباك مثالية — صفر إنذارات كاذبة وصفر سبام متسلّل!",
    l1Takeaway: "<b>الخلاصة:</b> التعلّم الموجَّه = تعلّم قاعدة من <b>أمثلة معنونة</b> إلى إجابات، ثم تطبيقها على بيانات جديدة لم يرها النموذج. التسميات هي المعلّم.",
    l1Again: "العب مرة أخرى",

    /* المستوى 2 */
    l2Name: "مكتشف العناقيد", l2Tag: "غير موجَّه",
    l2Explain: `<b>التعلّم غير الموجَّه</b> لا يحصل على <b>أي تسميات</b> — فقط بيانات خام، ومهمة الخوارزمية اكتشاف البنية الخفية بنفسها. هنا ستشغّل <b>K-Means</b>: ضع K «مراكز»، وفي كل خطوة ① تُسنَد كل نقطة لأقرب مركز ② ينتقل كل مركز إلى منتصف نقاطه. كرّر حتى يتوقف كل شيء عن الحركة — الآلة <i>اكتشفت مجموعات لم يخبرها بها أحد</i>! (استخدامات حقيقية: شرائح العملاء، أنواع المجرات، أجواء قوائم التشغيل.)`,
    l2LegPoint: "نقطة بلا تسمية", l2LegCentroid: "مركز العنقود", l2LegTrue: "المتقطّع = المجموعات الحقيقية المخفية (تنكشف في النهاية)",
    l2KTitle: "K — عدد العناقيد",
    l2StatusPlace: "<b>اضغط على اللوحة</b> لوضع مراكزك الـ{k}. لا يوجد مفتاح إجابة — خمّن أماكن المجموعات!",
    l2StatusMore: "جميل. تبقّى وضع <b>{n}</b> من المراكز.",
    l2StatusReady: "تم وضع المراكز الـ{k}. اضغط <b>شغّل خطوة K-Means</b> (أو التشغيل التلقائي) وشاهد الآلة تعمل.",
    l2StatusStep: "الخطوة {i}: كل نقطة انجذبت لأقرب مركز ← المراكز تنزلق إلى <b>متوسط</b> عنقودها.",
    l2StatusConverged: "<b>تقارُب بعد {i} خطوات!</b> لا شيء يتحرك — العناقيد استقرت. الدوائر المتقطعة تُظهر المجموعات الحقيقية المخفية.",
    l2ChipIter: "التكرار", l2ChipMess: "الفوضى",
    l2Step: "شغّل خطوة K-Means", l2Auto: "تشغيل تلقائي حتى التقارُب", l2Clear: "مسح المراكز", l2New: "بيانات عشوائية جديدة",
    l2MessNote: `الفوضى = مجموع مسافات النقاط عن مراكزها (Inertia). <b style="color:var(--text)">الأقل أفضل.</b>`,
    l2ResTitle: "تم اكتشاف العناقيد!", l2ResLabel: "مدى قربك من أفضل تجميع ممكن:",
    l2NoteHigh: "تقارُب في {i} تكرارات — وصلت لنفس التجميع الذي تجده الخوارزمية من أفضل بداية ممكنة. ممتاز!",
    l2NoteMid: "تقارُب في {i} تكرارات. قريب من الأمثل! قد تعلق K-Means في «حل محلي» حسب أماكن البداية — جرّب أماكن بداية جديدة.",
    l2NoteLow: "تقارُب في {i} تكرارات لكن في حل محلي ضعيف. بداية سيئة ← عناقيد سيئة. امسح المراكز وضعها أقرب للتجمعات!",
    l2Takeaway: "<b>الخلاصة:</b> التعلّم غير الموجَّه = اكتشاف البنية في البيانات <b>بدون أي تسميات</b>. لم يقل أحد «هذه هي المجموعات» — وجدتها K-Means من الهندسة وحدها.",
    l2AgainBtn: "بيانات جديدة، من جديد",
    l2CanvasHint: "اضغط لوضع المركز {i} من {k}",

    /* المستوى 3 */
    l3Name: "مدرّب روبوت المتاهة", l3Tag: "تعلّم معزَّز",
    l3Explain: `<b>التعلّم المعزَّز</b> = لا تسميات ولا مفتاح إجابة — فقط <b>مكافآت وعقوبات</b>. يتجول الروبوت بالتجربة والخطأ؛ وكل حركة تحدّث <b>جدول Q</b> («ما مدى جودة الفعل A في الخلية S؟»). راقب التوهج الكهرماني ينتشر <i>للخلف</i> من البطارية — هكذا تنتقل المعرفة. ثم جرّب التجربة الشريرة: اجعل عقوبة النار −1 وأعد التدريب — سيأخذ الروبوت الطريق المختصر عبر النار بكل سرور، لأن <b>الروبوت يتعلم ما تقوله مكافآتك فعلًا</b>، لا ما تقصده. (هكذا تُدرَّب وكلاء الألعاب والروبوتات وروبوتات المحادثة.)`,
    l3LegAgent: "الوكيل", l3LegGoal: "البطارية (الهدف)", l3LegFire: "نار (عقوبة، يمكن عبورها)",
    l3LegWall: "جدار", l3LegHi: "قيمة Q عالية (جيد)", l3LegLo: "قيمة Q سالبة (سيئ)",
    l3Panel: "هندسة المكافآت",
    l3Rew: "مكافأة البطارية", l3Pen: "عقوبة النار", l3StepCost: "تكلفة الخطوة", l3StepFixed: "−1 (ثابتة)", l3Speed: "سرعة التدريب",
    l3ChipEp: "الحلقات", l3ChipEps: "ε استكشاف",
    l3Chart: "المكافأة لكل حلقة (منحنى التعلّم)",
    l3Train: "درّب الروبوت", l3Pause: "أوقف التدريب", l3Test: "اختبر الروبوت (جولة جشعة)", l3Reset: "امسح الدماغ (جدول Q)",
    l3StatusStart: "اضغط <b>درّب الروبوت</b> وشاهده يتعثر ويتعلم وينتصر.",
    l3StatusWiped: "تم مسح الدماغ. الروبوت لا يعرف <b>شيئًا</b> من جديد. درّبه!",
    l3StatusTraining: "جارٍ التدريب… راقب <b>التوهج الكهرماني ينتشر للخلف من البطارية</b> — هذه قيم Q تنتقل.",
    l3StatusGreedy: "جولة جشعة — بلا استكشاف، الروبوت يستخدم فقط ما <b>تعلّمه</b>.",
    l3StatusExperiment: "تجربة: اجعل عقوبة <b>−1</b>، اضغط <b>امسح الدماغ</b>، درّب من جديد، ثم اختبر…",
    l3LostTitle: "الروبوت تاه!",
    l3LostDetail: "تجوّل {steps} خطوة ولم يجد البطارية. يحتاج مزيدًا من حلقات التدريب — اضغط «درّب الروبوت» ودع استكشاف ε-greedy يقوم بعمله.",
    l3OptTitle: "مسار مثالي — تدريب كامل!",
    l3OptDetail: "وصل للبطارية في {steps} خطوة بدون أي ضرر من النار. هذا أفضل مسار آمن (الأمثل = {opt}).",
    l3SafeTitle: "آمن… لكنه طريق سياحي.",
    l3SafeDetail: "وصل للبطارية في {steps} خطوة بلا نار — لكن المسار الآمن الأمثل هو {opt} خطوة. مزيد من التدريب يقصّر الطريق.",
    l3FireTitle: "مشى وسط النار!",
    l3FireDetail: "وصل للبطارية في {steps} خطوة متلقيًا {fires} ضربة نار. بعقوبة نار = {pen}، كان الاختصار مربحًا رياضيًا. الروبوت تعلّم قيمك أنت — ارفع العقوبة إلى −50 أو أكثر وأعد التدريب ليغيّر رأيه.",
    l3Takeaway: "<b>الخلاصة:</b> التعلّم المعزَّز = تجربة وخطأ تقودهما <b>المكافآت</b>. غيّر المكافآت يتغيّر السلوك — الروبوت يحسّن ما <i>تقيسه</i>، لا ما <i>تقصده</i>.",
    l3Keep: "واصل التجارب", l3Pts: "نقطة",

    /* الفرق */
    soloMode: "وضع فردي — انضم لفريق وابدأ المنافسة!",
    teamBtn: "الفرق", runBtn: "سباق الأركيد", boardBtn: "لوحة الصدارة", badgesBtn: "الأوسمة",
    teamTitle: "الفرق", teamTag: "لعب جماعي",
    setupTitle: "خادم اللعب الجماعي غير مُفعَّل",
    setupBody: `الفرق تحتاج قاعدة بيانات Firebase مجانية:<br>1. افتح <code>console.firebase.google.com</code> ← أنشئ مشروعًا.<br>2. Build ← Realtime Database ← Create (وضع الاختبار).<br>3. انسخ رابط قاعدة البيانات (مثل <code>https://xxx-default-rtdb.firebaseio.com</code>).<br>4. الصقه في <code>BACKEND_URL</code> أعلى السكربت في <code>index.html</code> وارفع التعديل.`,
    gateTitle: "العبوا كفريق!",
    gateText: "قائد الفريق ينشئ الفريق بصورة ويوافق على من يدخل. الأعضاء ينضمون باسم مستخدم + رقم سري من 4 أرقام.",
    gateCreate: "أنشئ فريقًا (قائد)", gateJoin: "انضم لفريق",
    gatePinNote: "لعبة معمل — اختر رقمًا سريًا لا تستخدمه في أي مكان آخر.",
    createTitle: "أنشئ فريقك",
    fTeamName: "اسم الفريق", fYourName: "اسم المستخدم (القائد)", fYourName2: "اسم المستخدم", fPin: "رقم سري من 4 أرقام", fPhoto: "صورة الفريق",
    createBtn: "أنشئ الفريق", backBtn: "→ رجوع",
    joinTitle: "انضم لفريق", joinPick: "اختر فريقك:", joinBtn: "اطلب الانضمام",
    joinRelogin: "تمت الموافقة عليك من قبل؟ نفس الاسم والرقم السري يعيدان دخولك.",
    waitTitle: "في انتظار قائد فريقك…",
    waitText: "اطلب من القائد فتح شاشة الفرق والموافقة عليك. هذه الصفحة تتحقق تلقائيًا.",
    cancelBtn: "إلغاء", pendingTitle: "في انتظار الموافقة", rosterTitle: "أعضاء الفريق",
    playBtn: "يلا نلعب!", logoutBtn: "تسجيل الخروج",
    approveBtn: "موافقة", rejectBtn: "رفض",
    pillLeader: "قائد", pillPending: "بانتظار", pillOk: "عضو",
    memberCount: "{n} عضو · بقيادة {leader}",
    errFill: "املأ كل الحقول!", errPin: "الرقم السري يجب أن يكون 4 أرقام بالضبط.",
    errUser: "اسم المستخدم: 2–16 حرفًا إنجليزيًا/أرقامًا فقط.",
    errTeamTaken: "اسم الفريق محجوز — اختر اسمًا آخر.",
    errWrongPin: "رقم سري خاطئ لهذا الاسم.", errRejected: "القائد رفض هذا الطلب.",
    errNet: "مشكلة في الشبكة — حاول مرة أخرى.",
    teamBarWho: "{user} · {team}", approvedToast: "تم قبولك! أهلًا بك في {team}",
    noTeams: "لا توجد فرق بعد — أنشئ أول فريق!",
    boardTitle: "لوحة صدارة الفرق", boardTag: "مباشر",
    boardSub: "نقاط الفريق = مجموع أفضل نتائج كل عضو في المستويات 1 + 2 + 3 + سباق الأركيد.",
    boardEmpty: "لا توجد فرق بعد — كن أول قائد فريق! ",
    badgesTitle: "الإنجازات", badgesTag: "حق التفاخر",
    badge_perfectFilter: "الفلتر المثالي", badgeD_perfectFilter: "دقة 100% في مصنّف السبام",
    badge_streakLord: "ملك التتابع", badgeD_streakLord: "سلسلة 8+ إجابات صحيحة في المستوى 1",
    badge_clusterMaster: "هامس العناقيد", badgeD_clusterMaster: "تقارُب في ≤3 خطوات بنتيجة 95%+",
    badge_fireWalker: "الماشي على النار", badgeD_fireWalker: "علّم الروبوت المشي وسط النار",
    badge_optimalBot: "المدرّب الأمثل", badgeD_optimalBot: "جولة متاهة مثالية بـ100 نقطة",
    badge_arcadeChamp: "بطل الأركيد", badgeD_arcadeChamp: "240+ نقطة في سباق أركيد واحد",
    runStart: "سباق الأركيد! المستويات الثلاثة وراء بعض — انطلق!",
    runNext: "انتهى المستوى! التالي: {game}",
    runDone: "اكتمل سباق الأركيد — {total} نقطة!",
    badgeToast: "وسام جديد: {name}!",
    gateLogin: "سجّل الدخول من جديد", countGo: "انطلق!",
    diffLabel: "مستوى الصعوبة",
    diffNames: "سهل جدًا|سهل|بسيط|عادي|متوسط|مخادع|صعب|صعب جدًا|قاسٍ|صعب للغاية",
    diffSet: "الصعوبة: {name}",
    diffBonus: "مكافأة الصعوبة \u00d7{m} \u2014 سُجِّلت {pts} نقطة!",
  },
};

let LANG = "en";
try { LANG = localStorage.getItem("mlArcadeLang") || "en"; } catch (e) {}
if (!I18N[LANG]) LANG = "en";

function t(key, vars) {
  let s = (I18N[LANG] && I18N[LANG][key]) ?? I18N.en[key] ?? key;
  if (vars) for (const k of Object.keys(vars)) s = s.split("{" + k + "}").join(vars[k]);
  return s;
}
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
}
function setLang(lang) {
  LANG = I18N[lang] ? lang : "en";
  try { localStorage.setItem("mlArcadeLang", LANG); } catch (e) {}
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === "ar" ? "rtl" : "ltr";
  document.getElementById("lang-toggle").textContent = LANG === "ar" ? "English" : "عربي";
  applyI18n();
  /* refresh dynamic/state-dependent text */
  const trainBtn = document.getElementById("l3-train-label");
  if (trainBtn && typeof MazeGame !== "undefined") trainBtn.textContent = MazeGame.training ? t("l3Pause") : t("l3Train");
  if (typeof ClusterGame !== "undefined" && ClusterGame.lastStatus) ClusterGame.setStatus(...ClusterGame.lastStatus);
  if (typeof MazeGame !== "undefined" && MazeGame.lastStatus) MazeGame.setStatus(...MazeGame.lastStatus);
  App.renderDash();
  Difficulty.renderAll();
  const badgeScreen = document.getElementById("screen-badges");
  if (badgeScreen && badgeScreen.classList.contains("active")) Badges.render();
}
function toggleLang() { setLang(LANG === "ar" ? "en" : "ar"); }

/* ════════════════════════════════════════════════════════════
   APP SHELL — screen router, persistence, confetti
   ════════════════════════════════════════════════════════════ */
const App = {
  KEY: "mlArcadeV1",
  state: { 1: { best: null, done: false }, 2: { best: null, done: false }, 3: { best: null, done: false }, badges: {}, run: 0 },

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (raw) Object.assign(this.state, JSON.parse(raw));
    } catch (e) { /* private mode etc. — play without persistence */ }
    this.renderDash();
  },
  save() {
    try { localStorage.setItem(this.KEY, JSON.stringify(this.state)); } catch (e) {}
  },
  show(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    window.scrollTo({ top: 0 });
    if (id !== "screen-l3" && typeof MazeGame !== "undefined") MazeGame.pauseTraining();
    if (id !== "screen-l2" && typeof ClusterGame !== "undefined") ClusterGame.stopAuto();
    if (id !== "screen-l1" && typeof SpamGame !== "undefined") SpamGame.stopTimers();
    if (id !== "screen-team") Team.stopPolls();
    if (id === "screen-dash") this.renderDash();
  },
  complete(level, score, passed) {
    const s = this.state[level];
    if (s.best === null || score > s.best) s.best = score;
    if (passed) s.done = true;
    this.save();
    this.renderDash();
    if (passed) this.confetti();
    Team.syncScores();
    ArcadeRun.record(level, score);
  },
  renderDash() {
    for (const lvl of [1, 2, 3]) {
      const s = this.state[lvl] || { best: null, done: false };
      const bestEl = document.getElementById("best-" + lvl);
      if (!bestEl) continue;
      bestEl.textContent = s.best === null ? "—" : s.best;
      document.getElementById("card-" + lvl).classList.toggle("completed", !!s.done);
    }
    const who = document.getElementById("team-bar-who");
    if (!who) return;
    if (Team.session && Team.session.status === "approved") {
      who.innerHTML = `${Team.avatarHtml(Team.session.user)} <b>${esc(t("teamBarWho", { user: Team.session.user, team: Team.session.teamName }))}</b>`;
    } else {
      who.innerHTML = `<span class="avatar" style="background:var(--panel-2)">${icon("users", "color:var(--muted)")}</span> <span>${t("soloMode")}</span>`;
    }
  },
  confetti() {
    const colors = ["#00f2fe", "#a06bff", "#ffb703", "#3ddc84", "#ff5470"];
    for (let i = 0; i < 46; i++) {
      const d = document.createElement("div");
      d.className = "confetti";
      d.style.left = Math.random() * 100 + "vw";
      d.style.background = colors[i % colors.length];
      d.style.animationDuration = 1.8 + Math.random() * 1.6 + "s";
      d.style.animationDelay = Math.random() * 0.4 + "s";
      d.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      document.body.appendChild(d);
      setTimeout(() => d.remove(), 4000);
    }
  },
};

/* small helpers */
const $ = id => document.getElementById(id);
const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function toast(msg) {
  const d = document.createElement("div");
  d.className = "toast"; d.textContent = msg;
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 2600);
}
const shake = () => { document.body.classList.remove("shake"); void document.body.offsetWidth; document.body.classList.add("shake"); };
const icon = (name, style) => `<svg class="ic"${style ? ` style="${style}"` : ""}><use href="#i-${name}"/></svg>`;
const resIcon = (el, name, colorVar) => { el.innerHTML = icon(name, `color:var(--${colorVar})`); };

/* floating score popup near an element */
function scorePop(text, color, anchorEl) {
  const d = document.createElement("div");
  d.className = "score-pop"; d.textContent = text; d.style.color = color;
  let x = window.innerWidth / 2, y = window.innerHeight / 2;
  if (anchorEl) {
    const r = anchorEl.getBoundingClientRect();
    x = r.left + r.width / 2; y = r.top + 24;
  }
  d.style.left = x + "px"; d.style.top = y + "px";
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 1000);
}

/* 3-2-1-GO overlay */
function countdown(cb) {
  const ov = document.createElement("div");
  ov.className = "count-overlay";
  document.body.appendChild(ov);
  const steps = ["3", "2", "1", t("countGo")];
  let i = 0;
  const tick = () => {
    if (i >= steps.length) { ov.remove(); cb(); return; }
    const isGo = i === steps.length - 1;
    ov.innerHTML = `<span class="${isGo ? "go" : ""}">${steps[i]}</span>`;
    Sound.beep(isGo ? 880 : 440, isGo ? .3 : .12, "triangle", .07);
    i++;
    setTimeout(tick, isGo ? 750 : 650);
  };
  tick();
}

/* animated number count-up on result screens */
function countUp(el, target, fmt) {
  fmt = fmt || (v => v);
  const dur = 900, start = performance.now();
  const frame = now => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/* ════════════════════════════════════════════════════════════
   STARFIELD — ambient animated background
   ════════════════════════════════════════════════════════════ */
const Starfield = {
  stars: [], rafId: null,
  init() {
    const cv = $("stars"), ctx = cv.getContext("2d");
    const size = () => { cv.width = window.innerWidth; cv.height = window.innerHeight; };
    size();
    window.addEventListener("resize", size);
    this.stars = Array.from({ length: 130 }, () => ({
      x: Math.random(), y: Math.random(),
      r: .4 + Math.random() * 1.4,
      s: .00003 + Math.random() * .00009,          /* drift speed */
      p: Math.random() * Math.PI * 2,              /* twinkle phase */
      hue: [Math.random() < .12, Math.random() < .12],
    }));
    const draw = now => {
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (const st of this.stars) {
        st.y -= st.s * cv.height / 60;
        if (st.y < -0.02) { st.y = 1.02; st.x = Math.random(); }
        const tw = .35 + .65 * (0.5 + 0.5 * Math.sin(now / 900 + st.p));
        ctx.beginPath();
        ctx.arc(st.x * cv.width, st.y * cv.height, st.r, 0, Math.PI * 2);
        ctx.fillStyle = st.hue[0] ? `rgba(0,242,254,${tw * .8})` : st.hue[1] ? `rgba(255,183,3,${tw * .7})` : `rgba(232,238,251,${tw * .55})`;
        ctx.fill();
      }
      this.rafId = requestAnimationFrame(draw);
    };
    this.rafId = requestAnimationFrame(draw);
  },
};

/* ════════════════════════════════════════════════════════════
   DIFFICULTY — 1 (very easy) … 10 (very difficult), per game
   ════════════════════════════════════════════════════════════ */
const Difficulty = {
  get(game) { return (App.state.diff && App.state.diff[game]) || 3; },
  set(game, d) { (App.state.diff = App.state.diff || {})[game] = clamp(+d, 1, 10); App.save(); },
  mult(d) { return 1 + (d - 1) / 9; },                       /* score bonus ×1.0 … ×2.0 */
  names() { return t("diffNames").split("|"); },
  change(game, v) {
    this.set(game, v);
    Sound.click();
    toast(t("diffSet", { name: this.names()[this.get(game) - 1] }));
    if (game === 2 && typeof ClusterGame !== "undefined") ClusterGame.open();
    if (game === 3 && typeof MazeGame !== "undefined") { MazeGame.applyDifficulty(); MazeGame.resetBrain(); }
  },
  renderAll() {
    const names = this.names();
    [["l1-diff", 1], ["l2-diff", 2], ["l3-diff", 3]].forEach(([id, g]) => {
      const sel = $(id);
      if (!sel) return;
      sel.innerHTML = names.map((n, i) => `<option value="${i + 1}">${i + 1} — ${n}</option>`).join("");
      sel.value = this.get(g);
    });
  },
  applyBonus(game, raw) {
    const d = this.get(game);
    if (raw <= 0 || d <= 1) return raw;
    const boosted = Math.round(raw * this.mult(d));
    if (boosted > raw) toast(t("diffBonus", { m: this.mult(d).toFixed(1), pts: boosted }));
    return boosted;
  },
};

/* ════════════════════════════════════════════════════════════
   SOUND — WebAudio bleeps, no audio files
   ════════════════════════════════════════════════════════════ */
const Sound = {
  on: true, ctx: null,
  init() {
    try { this.on = localStorage.getItem("mlArcadeSound") !== "off"; } catch (e) {}
    $("sound-toggle").innerHTML = icon(this.on ? "vol" : "volx");
  },
  ensure() {
    if (!this.ctx) { try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
    if (this.ctx && this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },
  beep(freq, dur, type = "sine", gain = 0.07, when = 0) {
    if (!this.on) return;
    const c = this.ensure(); if (!c) return;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(gain, c.currentTime + when);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + when + dur);
    o.connect(g); g.connect(c.destination);
    o.start(c.currentTime + when); o.stop(c.currentTime + when + dur + 0.02);
  },
  good() { this.beep(660, .12); this.beep(880, .16, "sine", .07, .09); },
  bad() { this.beep(190, .22, "sawtooth", .05); },
  click() { this.beep(440, .05, "square", .03); },
  win() { [523, 659, 784, 1047].forEach((f, i) => this.beep(f, .18, "triangle", .08, i * .12)); },
  fire() { this.beep(120, .3, "sawtooth", .07); this.beep(85, .3, "sawtooth", .05, .08); },
  toggle() {
    this.on = !this.on;
    try { localStorage.setItem("mlArcadeSound", this.on ? "on" : "off"); } catch (e) {}
    $("sound-toggle").innerHTML = icon(this.on ? "vol" : "volx");
    if (this.on) this.click();
  },
};

/* ════════════════════════════════════════════════════════════
   NET — Firebase Realtime Database over plain REST (no SDK)
   ════════════════════════════════════════════════════════════ */
const Net = {
  ok: () => !!BACKEND_URL,
  url(p) { return BACKEND_URL.replace(/\/+$/, "") + p + ".json"; },
  async get(p) { const r = await fetch(this.url(p)); if (!r.ok) throw new Error("net"); return r.json(); },
  async put(p, d) { const r = await fetch(this.url(p), { method: "PUT", body: JSON.stringify(d) }); if (!r.ok) throw new Error("net"); return r.json(); },
  async patch(p, d) { const r = await fetch(this.url(p), { method: "PATCH", body: JSON.stringify(d) }); if (!r.ok) throw new Error("net"); return r.json(); },
};
async function pinHash(s) {
  if (crypto && crypto.subtle) {
    const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("mlArcade:" + s));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
  }
  let h = 5381; const str = "mlArcade:" + s;                     /* non-secure-context fallback */
  for (let i = 0; i < str.length; i++) h = (h * 33) ^ str.charCodeAt(i);
  return "djb2_" + (h >>> 0).toString(16);
}

/* ════════════════════════════════════════════════════════════
   TEAM — create / join / approve, session in localStorage
   ════════════════════════════════════════════════════════════ */
const Team = {
  session: null, waitTimer: null, homeTimer: null, joinPick: null, photoData: "",
  VIEWS: ["tv-setup", "tv-gate", "tv-create", "tv-join", "tv-wait", "tv-home"],

  load() { try { this.session = JSON.parse(localStorage.getItem("mlArcadeTeam") || "null"); } catch (e) {} },
  save() { try { localStorage.setItem("mlArcadeTeam", JSON.stringify(this.session)); } catch (e) {} },
  avatarHtml(name) {
    let h = 0;
    for (const ch of String(name)) h = (h * 31 + ch.codePointAt(0)) >>> 0;
    const hue = h % 360;
    return `<span class="avatar" style="background:hsl(${hue} 55% 42%);border-color:hsl(${hue} 60% 55%)">${esc(String(name).slice(0, 1))}</span>`;
  },
  stopPolls() { clearInterval(this.waitTimer); clearInterval(this.homeTimer); this.waitTimer = this.homeTimer = null; },

  open() { App.show("screen-team"); this.route(); },
  route() {
    this.stopPolls();
    if (!Net.ok()) return this.view("setup");
    if (!this.session) return this.view("gate");
    if (this.session.status === "pending") return this.view("wait");
    this.view("home");
  },
  view(v) {
    this.VIEWS.forEach(id => $(id).style.display = "none");
    $("tv-" + v).style.display = "block";
    if (v === "join") this.loadTeams();
    if (v === "wait") this.pollWait();
    if (v === "home") this.refreshHome(true);
  },

  /* ---- photo: resize to ≤240px JPEG data-url ---- */
  handlePhoto(file) {
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, 240 / Math.max(img.width, img.height));
      const cv = document.createElement("canvas");
      cv.width = Math.round(img.width * scale); cv.height = Math.round(img.height * scale);
      cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
      this.photoData = cv.toDataURL("image/jpeg", 0.72);
      const prev = $("tc-preview");
      prev.src = this.photoData; prev.style.display = "inline-block";
      URL.revokeObjectURL(img.src);
    };
    img.src = URL.createObjectURL(file);
  },

  validUser(u) { return /^[a-z0-9_]{2,16}$/.test(u); },
  slug(name) { return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 24) || "team"; },

  async createTeam() {
    const name = $("tc-name").value.trim();
    const user = $("tc-user").value.trim().toLowerCase();
    const pin = $("tc-pin").value.trim();
    const err = $("tc-err");
    err.textContent = "";
    if (!name || !user || !pin) return err.textContent = t("errFill");
    if (!/^\d{4}$/.test(pin)) return err.textContent = t("errPin");
    if (!this.validUser(user)) return err.textContent = t("errUser");
    $("tc-submit").disabled = true;
    try {
      const id = this.slug(name);
      const existing = await Net.get("/teams/" + id + "/name");
      if (existing) { err.textContent = t("errTeamTaken"); return; }
      const hash = await pinHash(pin);
      await Net.put("/teams/" + id, {
        name, photo: this.photoData || "", leader: user, created: Date.now(),
        members: { [user]: { pinHash: hash, status: "leader", scores: this.localScores() } },
      });
      this.session = { teamId: id, teamName: name, user, role: "leader", status: "approved" };
      this.save();
      Sound.win(); toast(t("approvedToast", { team: name }));
      App.renderDash();
      this.route();
    } catch (e) { err.textContent = t("errNet"); }
    finally { $("tc-submit").disabled = false; }
  },

  async loadTeams() {
    const list = $("tj-list");
    list.innerHTML = "<div class='spinner'></div>";
    $("tj-form").style.display = "none";
    try {
      const teams = await Net.get("/teams") || {};
      const ids = Object.keys(teams);
      if (!ids.length) { list.innerHTML = `<div class='muted center'>${t("noTeams")}</div>`; return; }
      list.innerHTML = "";
      ids.forEach(id => {
        const tm = teams[id];
        const row = document.createElement("div");
        row.className = "member-row";
        const n = Object.keys(tm.members || {}).length;
        row.innerHTML = (tm.photo ? `<img class="team-photo" src="${tm.photo}" alt="">` : this.avatarHtml(tm.name)) +
          `<span class="name">${esc(tm.name)}</span><span class="muted" style="font-size:12px">${t("memberCount", { n, leader: esc(tm.leader) })}</span>`;
        row.onclick = () => {
          this.joinPick = { id, name: tm.name, photo: tm.photo };
          $("tj-picked").innerHTML = (tm.photo ? `<img class="team-photo lg" src="${tm.photo}" alt="">` : "") + `<div style="font-weight:800;font-size:18px;margin-top:6px">${esc(tm.name)}</div>`;
          $("tj-form").style.display = "flex";
          $("tj-form").scrollIntoView({ behavior: "smooth", block: "nearest" });
          Sound.click();
        };
        list.appendChild(row);
      });
    } catch (e) { list.innerHTML = `<div class='muted center'>${t("errNet")}</div>`; }
  },

  async requestJoin() {
    const user = $("tj-user").value.trim().toLowerCase();
    const pin = $("tj-pin").value.trim();
    const err = $("tj-err");
    err.textContent = "";
    if (!this.joinPick) return;
    if (!user || !pin) return err.textContent = t("errFill");
    if (!/^\d{4}$/.test(pin)) return err.textContent = t("errPin");
    if (!this.validUser(user)) return err.textContent = t("errUser");
    try {
      const hash = await pinHash(pin);
      const path = "/teams/" + this.joinPick.id + "/members/" + user;
      const existing = await Net.get(path);
      if (existing) {                                     /* re-login */
        if (existing.pinHash !== hash) return err.textContent = t("errWrongPin");
        if (existing.status === "rejected") return err.textContent = t("errRejected");
        this.session = {
          teamId: this.joinPick.id, teamName: this.joinPick.name, user,
          role: existing.status === "leader" ? "leader" : "member",
          status: existing.status === "pending" ? "pending" : "approved",
        };
      } else {                                            /* new join request */
        await Net.put(path, { pinHash: hash, status: "pending", scores: this.localScores() });
        this.session = { teamId: this.joinPick.id, teamName: this.joinPick.name, user, role: "member", status: "pending" };
      }
      this.save();
      App.renderDash();
      this.route();
    } catch (e) { err.textContent = t("errNet"); }
  },

  pollWait() {
    const check = async () => {
      if (!this.session) return;
      try {
        const m = await Net.get("/teams/" + this.session.teamId + "/members/" + this.session.user);
        if (m && (m.status === "approved" || m.status === "leader")) {
          this.session.status = "approved";
          if (m.status === "leader") this.session.role = "leader";
          this.save();
          Sound.win(); toast(t("approvedToast", { team: this.session.teamName }));
          App.renderDash();
          this.syncScores();
          this.route();
        } else if (!m || m.status === "rejected") {
          this.logout();
          toast(t("errRejected"));
        }
      } catch (e) {}
    };
    check();
    this.waitTimer = setInterval(check, 4000);
  },

  async refreshHome(startPoll) {
    if (!this.session) return this.route();
    try {
      const tm = await Net.get("/teams/" + this.session.teamId);
      if (!tm) return this.logout();
      $("th-photo").src = tm.photo || "";
      $("th-photo").style.display = tm.photo ? "block" : "none";
      $("th-name").textContent = tm.name;
      const members = tm.members || {};
      const names = Object.keys(members);
      $("th-sub").textContent = t("memberCount", { n: names.filter(u => members[u].status !== "pending" && members[u].status !== "rejected").length, leader: tm.leader });
      const isLeader = this.session.role === "leader";
      const pending = names.filter(u => members[u].status === "pending");
      $("th-pending-wrap").style.display = pending.length ? "block" : "none";
      $("th-pending").innerHTML = pending.map(u => `
        <div class="member-row">${this.avatarHtml(u)}
        <span class="name">${esc(u)}</span><span class="pill pending">${t("pillPending")}</span>
        ${isLeader ? `<span class="mini-btns">
          <button class="btn good" onclick="Team.decide('${esc(u)}','approved')">${t("approveBtn")}</button>
          <button class="btn danger" onclick="Team.decide('${esc(u)}','rejected')">${t("rejectBtn")}</button></span>` : ""}
        </div>`).join("");
      $("th-members").innerHTML = names
        .filter(u => members[u].status === "approved" || members[u].status === "leader")
        .map(u => {
          const m = members[u];
          return `<div class="member-row">${this.avatarHtml(u)}
            <span class="name">${esc(u)}${u === this.session.user ? ` ${icon("star", "color:var(--amber)")}` : ""}</span>
            <span class="pill ${m.status === "leader" ? "leader" : "ok"}">${m.status === "leader" ? t("pillLeader") : t("pillOk")}</span>
            <span class="pts">${this.totalOf(m.scores)} ${t("l3Pts")}</span></div>`;
        }).join("");
    } catch (e) {}
    if (startPoll) {
      clearInterval(this.homeTimer);
      this.homeTimer = setInterval(() => {
        if (!document.getElementById("screen-team").classList.contains("active")) return this.stopPolls();
        this.refreshHome(false);
      }, 6000);
    }
  },

  async decide(user, status) {
    try {
      await Net.patch("/teams/" + this.session.teamId + "/members/" + user, { status });
      Sound[status === "approved" ? "good" : "bad"]();
      this.refreshHome(false);
    } catch (e) { toast(t("errNet")); }
  },

  logout() {
    this.stopPolls();
    this.session = null;
    this.save();
    App.renderDash();
    this.route();
  },

  localScores() {
    const s = App.state;
    return {
      l1: Math.max(0, s[1].best || 0), l2: Math.max(0, s[2].best || 0),
      l3: Math.max(0, s[3].best || 0), run: s.run || 0,
      badges: Object.keys(s.badges || {}).length,
    };
  },
  totalOf(sc) { sc = sc || {}; return (sc.l1 || 0) + (sc.l2 || 0) + (sc.l3 || 0) + (sc.run || 0); },
  syncScores() {
    if (!Net.ok() || !this.session || this.session.status !== "approved") return;
    Net.patch("/teams/" + this.session.teamId + "/members/" + this.session.user, { scores: this.localScores() }).catch(() => {});
  },
};

/* ════════════════════════════════════════════════════════════
   BOARD — live team leaderboard
   ════════════════════════════════════════════════════════════ */
const Board = {
  timer: null,
  open() {
    App.show("screen-board");
    this.refresh();
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (!document.getElementById("screen-board").classList.contains("active")) return clearInterval(this.timer);
      this.refresh();
    }, 10000);
  },
  async refresh() {
    const list = $("board-list"), empty = $("board-empty");
    if (!Net.ok()) { list.innerHTML = ""; empty.style.display = "block"; empty.innerHTML = t("setupTitle"); return; }
    if (!list.children.length) list.innerHTML = "<div class='spinner'></div>";
    try {
      const teams = await Net.get("/teams") || {};
      const rows = Object.keys(teams).map(id => {
        const tm = teams[id];
        const members = Object.entries(tm.members || {}).filter(([, m]) => m.status === "approved" || m.status === "leader");
        return {
          name: tm.name, photo: tm.photo,
          score: members.reduce((s, [, m]) => s + Team.totalOf(m.scores), 0),
          members: members.map(([u, m]) => ({ u, pts: Team.totalOf(m.scores) })),
        };
      }).sort((a, b) => b.score - a.score);
      empty.style.display = rows.length ? "none" : "block";
      if (!rows.length) empty.innerHTML = t("boardEmpty");
      list.innerHTML = rows.map((r, i) => `
        <div class="board-card${i === 0 ? " top1" : ""}" style="animation-delay:${i * 70}ms">
          <div class="rank">${i < 3 ? `<svg class="ic fill medal-ic"><use href="#i-award"/></svg><br>` : ""}#${i + 1}</div>
          ${r.photo ? `<img class="team-photo" src="${r.photo}" alt="">` : Team.avatarHtml(r.name)}
          <div class="tinfo"><div class="tname">${esc(r.name)}</div>
            <div class="tmembers">${r.members.map(m => `<span>${esc(m.u)} (${m.pts})</span>`).join(" · ")}</div>
          </div>
          <div class="tscore">${r.score}</div>
        </div>`).join("");
    } catch (e) { list.innerHTML = `<p class="center muted">${t("errNet")}</p>`; }
  },
};

/* ════════════════════════════════════════════════════════════
   BADGES — achievements
   ════════════════════════════════════════════════════════════ */
const Badges = {
  DEFS: [
    { id: "perfectFilter", icon: "crosshair" }, { id: "streakLord", icon: "flame" },
    { id: "clusterMaster", icon: "disc" }, { id: "fireWalker", icon: "flame" },
    { id: "optimalBot", icon: "cpu" }, { id: "arcadeChamp", icon: "crown" },
  ],
  has(id) { return !!(App.state.badges || {})[id]; },
  award(id) {
    if (this.has(id)) return;
    (App.state.badges = App.state.badges || {})[id] = true;
    App.save();
    toast(t("badgeToast", { name: t("badge_" + id) }));
    Sound.win();
    Team.syncScores();
  },
  open() { App.show("screen-badges"); this.render(); },
  render() {
    const grid = $("badge-grid");
    if (!grid) return;
    grid.innerHTML = this.DEFS.map(b => `
      <div class="badge${this.has(b.id) ? " unlocked" : ""}">
        <div class="bicon">${icon(b.icon)}</div>
        <div class="bname">${t("badge_" + b.id)}</div>
        <div class="bdesc">${t("badgeD_" + b.id)}</div>
      </div>`).join("");
  },
};

/* ════════════════════════════════════════════════════════════
   ARCADE RUN — the 3 ML levels back-to-back, across pages
   ════════════════════════════════════════════════════════════ */
const ArcadeRun = {
  KEY: "mlArcadeRun",
  ORDER: ["supervised.html", "unsupervised.html", "reinforcement.html"],
  read() { try { return JSON.parse(localStorage.getItem(this.KEY) || "null"); } catch (e) { return null; } },
  write(s) { try { s ? localStorage.setItem(this.KEY, JSON.stringify(s)) : localStorage.removeItem(this.KEY); } catch (e) {} },
  start() {
    this.write({ active: true, scores: {} });
    toast(t("runStart"));
    Sound.win();
    setTimeout(() => location.href = this.ORDER[0], 900);
  },
  record(level, score) {
    const s = this.read();
    if (!s || !s.active || level < 1 || level > 3) return;
    s.scores["l" + level] = Math.max(0, score);
    if (level < 3) {
      this.write(s);
      toast(t("runNext", { game: t(level === 1 ? "card2Title" : "card3Title").replace(/&amp;/g, "&") }));
      setTimeout(() => location.href = this.ORDER[level], 2400);
    } else {
      this.write(null);
      const total = (s.scores.l1 || 0) + (s.scores.l2 || 0) + (s.scores.l3 || 0);
      if (total > (App.state.run || 0)) { App.state.run = total; App.save(); }
      if (total >= 240) Badges.award("arcadeChamp");
      toast(t("runDone", { total }));
      Sound.win();
      App.confetti();
      Team.syncScores();
      setTimeout(() => location.href = "index.html", 2600);
    }
  },
};

/* ════════════════════════════════════════════════════════════
   CORE — shared page chrome + boot (call Core.boot() on every page)
   ════════════════════════════════════════════════════════════ */
const Core = {
  CHROME: `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
  <symbol id="i-zap" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></symbol>
  <symbol id="i-nodes" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></symbol>
  <symbol id="i-cpu" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></symbol>
  <symbol id="i-trophy" viewBox="0 0 24 24"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v6a5 5 0 0 1-10 0V4z"/><path d="M7 6H4a2 2 0 0 0 2 4h1"/><path d="M17 6h3a2 2 0 0 1-2 4h-1"/></symbol>
  <symbol id="i-users" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
  <symbol id="i-flag" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></symbol>
  <symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></symbol>
  <symbol id="i-play" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></symbol>
  <symbol id="i-skip" viewBox="0 0 24 24"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></symbol>
  <symbol id="i-trash" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></symbol>
  <symbol id="i-inbox" viewBox="0 0 24 24"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></symbol>
  <symbol id="i-replay" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></symbol>
  <symbol id="i-sliders" viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></symbol>
  <symbol id="i-ff" viewBox="0 0 24 24"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></symbol>
  <symbol id="i-shuffle" viewBox="0 0 24 24"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></symbol>
  <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></symbol>
  <symbol id="i-flame" viewBox="0 0 24 24"><path d="M12 2c1.5 4 5.5 6 5.5 11a5.5 5.5 0 0 1-11 0c0-2.5 1.3-4.7 2.9-6.2.1 2 1 3.2 2.4 3.6-.9-2.7-.4-6 0.2-8.4z"/></symbol>
  <symbol id="i-battery" viewBox="0 0 24 24"><rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="10" x2="23" y2="14"/><polyline points="11 8 8 12 10 12 8 16"/></symbol>
  <symbol id="i-crown" viewBox="0 0 24 24"><path d="M2 18h20"/><path d="M4 18l-1.5-9L8 12l4-8 4 8 5.5-3L20 18z"/></symbol>
  <symbol id="i-disc" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></symbol>
  <symbol id="i-vol" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></symbol>
  <symbol id="i-volx" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></symbol>
  <symbol id="i-logout" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></symbol>
  <symbol id="i-login" viewBox="0 0 24 24"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></symbol>
  <symbol id="i-send" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></symbol>
  <symbol id="i-star" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></symbol>
  <symbol id="i-userplus" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></symbol>
  <symbol id="i-bulb" viewBox="0 0 24 24"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M12 2a7 7 0 0 1 4.2 12.6c-.8.6-1.2 1.4-1.2 2.4H9c0-1-.4-1.8-1.2-2.4A7 7 0 0 1 12 2z"/></symbol>
  <symbol id="i-key" viewBox="0 0 24 24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m3 3L22 7l-3-3"/></symbol>
  <symbol id="i-alert" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></symbol>
  <symbol id="i-checkc" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></symbol>
  <symbol id="i-xc" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></symbol>
  <symbol id="i-flask" viewBox="0 0 24 24"><path d="M10 2v6.34L4.55 17.8A2 2 0 0 0 6.34 21h11.32a2 2 0 0 0 1.79-3.2L14 8.34V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/><line x1="7" y1="15" x2="17" y2="15"/></symbol>
  <symbol id="i-refresh" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></symbol>
  <symbol id="i-crosshair" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></symbol>
  <symbol id="i-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></symbol>
</svg>
<canvas id="stars"></canvas>
<button class="lang-toggle" id="lang-toggle" onclick="toggleLang()">عربي</button>
<button class="sound-toggle" id="sound-toggle" onclick="Sound.toggle()"><svg class="ic"><use href="#i-vol"/></svg></button>`,
  boot() {
    document.body.insertAdjacentHTML("afterbegin", this.CHROME);
    Team.load();
    Sound.init();
    App.load();
    setLang(LANG);
    Starfield.init();
    Difficulty.renderAll();
    const photo = $("tc-photo");
    if (photo) photo.addEventListener("change", e => Team.handlePhoto(e.target.files[0]));
  },
};
