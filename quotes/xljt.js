// 心灵鸡汤数据
const quotes = [
  { id: 1, content: "只会幻想而不行动的人，永远也体会不到收获果实时的喜悦。", author: "", source: "" },
  { id: 2, content: "嘲讽是一种力量，消极的力量。赞扬也是一种力量，但却是用心的力量。", author: "", source: "" },
  { id: 3, content: "目标坚定是性格的力量源泉，也是成功利器，缺它天才也会徒劳。", author: "", source: "" },
  { id: 4, content: "青春就像一只容器，装满了不安躁动青涩与偶尔的疯狂。", author: "", source: "" },
  { id: 5, content: "同伴，不一定非要走到最后，某一段路上，对方给自己带来的朗朗笑声，那就已经足够。", author: "", source: "" },
  { id: 6, content: "不去期望，失去了不会伤心，得到了便是惊喜。", author: "", source: "" },
  { id: 7, content: "咱们什么都没有，唯一的本钱就是青春。梦想让我与众不一样，奋斗让我改变命运!", author: "", source: "" },
  { id: 8, content: "障碍与失败，是通往成功最稳靠的踏脚石，肯研究利用它们，便能从失败中培养出成功。", author: "", source: "" },
  { id: 9, content: "失去金钱的人损失甚少，失去健康的人损失极多，失去勇气的人损失一切。", author: "", source: "" },
  { id: 10, content: "踏平坎坷成大道，推倒障碍成浮桥，熬过黑暗是黎明。", author: "", source: "" },
  { id: 11, content: "恐惧自我受苦的人，已经正因自我的恐惧在受苦。", author: "", source: "" },
  { id: 12, content: "成功的信念在人脑中的作用就如闹钟，会在你需要时将你唤醒。", author: "", source: "" },
  { id: 13, content: "过错是暂时的遗憾，而错过则是永远的遗憾！", author: "", source: "" },
  { id: 14, content: "人生就像一杯没有加糖的咖啡，喝起来是苦涩的，回味起来却有久久不会退去的余香。", author: "", source: "" },
  { id: 15, content: "如果你向神求助，说明你相信神的能力；如果神没有帮助你，说明神相信你的能力。", author: "", source: "" },
  { id: 16, content: "真正的强者，不是流泪的人，而是含泪奔跑的人。", author: "", source: "" },
  { id: 17, content: "人生路上纵失一切，只要一息尚存，便有理由不绝望，失去的或能在新层次复得。", author: "", source: "" },
  { id: 18, content: "不要生气要争气，不要看破要突破，不要嫉妒要欣赏，不要托延要积极，不要心动要行动。", author: "", source: "" },
  { id: 19, content: "生命之灯因热情而点燃，生命之舟因拼搏而前行。", author: "", source: "" },
  { id: 20, content: "拥有梦想只是一种智力，实现梦想才是一种能力。", author: "", source: "" },
  { id: 21, content: "只有一条路不能选择——那就是放弃的路；只有一条路不能拒绝——那就是成长的路。", author: "", source: "" },
  { id: 22, content: "人的才华如海绵里的水，不挤压难流出，流出后才能吸收新源泉。", author: "", source: "" },
  { id: 23, content: "每天醒来，最大资产是24小时——生命中尚未利用的材料。", author: "", source: "" },
  { id: 24, content: "如果要挖井，就要挖到水出为止。", author: "", source: "" },
  { id: 25, content: "成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成。", author: "", source: "" },
  { id: 26, content: "努力了不一定能够成功，但是放弃了肯定是失败。", author: "", source: "" },
  { id: 27, content: "无论才能知识多么卓著，如果缺乏热情，则无异纸上画饼充饥，无补于事。", author: "", source: "" },
  { id: 28, content: "如同磁铁吸引四周的铁粉，热情也能吸引周围的人，改变周围的情况。", author: "", source: "" },
  { id: 29, content: "网络事业创造了富裕，又延续了平等。", author: "", source: "" },
  { id: 30, content: "好的想法是十分钱一打，真正无价的是能够实现这些想法的人。", author: "", source: "" },
  { id: 31, content: "人格的完善是本，财富的确立是末。", author: "", source: "" },
  { id: 32, content: "高峰只对攀登它而不是仰望它的人来说才有真正意义。", author: "", source: "" },
  { id: 33, content: "贫穷是不需要计划的，致富才需要一个周密的计划——并去实践它。", author: "", source: "" },
  { id: 34, content: "智者一切求自己，愚者一切求他人。", author: "", source: "" },
  { id: 35, content: "没有一种不通过蔑视忍受和奋斗就可以征服的命运。", author: "", source: "" },
  { id: 36, content: "苦想没盼头，苦干有奔头。", author: "", source: "" },
  { id: 37, content: "当一个小小的心念变成成为行为时，便能成了习惯；从而形成性格，而性格就决定你一生的成败。", author: "", source: "" },
  { id: 38, content: "自己打败自己是最可悲的失败，自己战胜自己是最可贵的胜利。", author: "", source: "" },
  { id: 39, content: "每个人都有潜在的能量，只是很容易：被习惯所掩盖，被时间所迷离，被惰性所消磨。", author: "", source: "" },
  { id: 40, content: "在实现理想的路途中，必须排除一切干扰，特别是要看清那些美丽的诱惑。", author: "", source: "" },
  { id: 41, content: "人生低谷时，才知谁不离不弃，那些未曾在意的感动，温暖人心。", author: "", source: "" },
  { id: 42, content: "人生从无真正绝境，心怀信念种子，终能走出困境，让生命重开花。", author: "", source: "" },
  { id: 43, content: "过去的习惯，决定今天的你，所以，过去的懒惰，决定你今天的一败涂地。", author: "", source: "" },
  { id: 44, content: "别以为付出就有回报，学会有效工作，是经营强项的重要课程。", author: "", source: "" },
  { id: 45, content: "每个人都有自己独立的空间，再好的朋友也是应该亲密有间的，别总把自己不当外人。", author: "", source: "" },
  { id: 46, content: "生活总让人遍体鳞伤，但今日的苦与痛，终会化作光照亮前路。", author: "", source: "" },
  { id: 47, content: "人生在世，总要多个心眼保护自己，并不是心计越高越高城府越深，而是大浪淘沙依然坚强的幸福。", author: "", source: "" },
  { id: 48, content: "要想改变我们的人生，第一步就是要改变我们的心态。只要心态是正确的，我们的世界就会的光明的。", author: "", source: "" },
  { id: 49, content: "人生目标确定容易实现难，但如果不去行动，那么连实现的可能也不会有。", author: "", source: "" },
  { id: 50, content: "如果你不肯付出一时的努力去博取成功，那么你可能就要用一生的耐心去忍受失败。", author: "", source: "" },
  { id: 51, content: "没有伞的孩子，必须努力奔跑！", author: "", source: "" },
  { id: 52, content: "你不勇敢，没人替你坚强。", author: "", source: "" },
  { id: 53, content: "如果心胸不似海，又怎能有海一样的事业。", author: "", source: "" },
  { id: 54, content: "只有经历过地狱般的折磨，才有征服天堂的力量。只有流过血的手指才能弹出世间的绝唱。", author: "", source: "" },
  { id: 55, content: "穷则思变，差则思勤！没有比人更高的山没有比脚更长的路。", author: "", source: "" },
  { id: 56, content: "人生就像一杯茶，不会苦一辈子，但总会苦一阵子。", author: "", source: "" },
  { id: 57, content: "成功的关键在于相信自己有成功的能力。", author: "", source: "" },
  { id: 58, content: "不要等待机会，而要创造机会。", author: "", source: "" },
  { id: 59, content: "昨晚多几分钟的准备，今天少几小时的麻烦。", author: "", source: "" },
  { id: 60, content: "大多数人想要改造这个世界，但却罕有人想改造自己。", author: "", source: "" },
  { id: 61, content: "未曾失败的人恐怕也未曾成功过。", author: "", source: "" },
  { id: 62, content: "人生伟业的建立，不在能知，乃在能行。", author: "", source: "" },
  { id: 63, content: "挫折其实就是迈向成功所应缴的学费。", author: "", source: "" },
  { id: 64, content: "任何的限制，都是从自己的内心开始的。", author: "", source: "" },
  { id: 65, content: "忘掉失败，不过要牢记失败中的教训。", author: "", source: "" },
  { id: 66, content: "不是境况造就人，而是人造就境况。", author: "", source: "" },
  { id: 67, content: "含泪播种的人一定能含笑收获。", author: "", source: "" },
  { id: 68, content: "靠山山会倒，靠水水会流，靠自己永远不倒。", author: "", source: "" },
  { id: 69, content: "欲望以提升热忱，毅力以磨平高山。", author: "", source: "" },
  { id: 70, content: "只要路是对的，就不怕路远。", author: "", source: "" },
  { id: 71, content: "一滴蜂蜜比一加仑胆汁能够捕到更多的苍蝇。", author: "", source: "" },
  { id: 72, content: "真心的对别人产生点兴趣，是推销员最重要的品格。", author: "", source: "" },
  { id: 73, content: "自古成功在尝试。", author: "", source: "" },
  { id: 74, content: "一个能从别人的观念来看事情，能了解别人心灵活动的人，永远不必为自己的前途担心。", author: "", source: "" },
  { id: 75, content: "当一个人先从自己的内心开始奋斗，他就是个有价值的人。", author: "", source: "" },
  { id: 76, content: "生命对某些人来说是美丽的，这些人的一生都为某个目标而奋斗。", author: "", source: "" },
  { id: 77, content: "推销产品要针对顾客的心，不要针对顾客的头。", author: "", source: "" },
  { id: 78, content: "没有人富有得可以不要别人的帮助，也没有人穷得不能在某方面给他人帮助。", author: "", source: "" },
  { id: 79, content: "凡真心尝试助人者，没有不帮到自己的。", author: "", source: "" },
  { id: 80, content: "积极者相信只有推动自己才能推动世界，只要推动自己就能推动世界。", author: "", source: "" },
  { id: 81, content: "每日代价渐高，因生命在缩短，故要更积极，抓住不会重来的今天。", author: "", source: "" },
  { id: 82, content: "一个人最大的破产是绝望，最大的资产是希望。", author: "", source: "" },
  { id: 83, content: "行动是成功的阶梯，行动越多，登得越高。", author: "", source: "" },
  { id: 84, content: "环境永远不会十全十美，消极的人受环境控制，积极的人却控制环境。", author: "", source: "" },
  { id: 85, content: "事实上，成功仅代表了你工作的1%，成功是99%失败的结果。", author: "", source: "" },
  { id: 86, content: "要想自己存在就得让对方存在，树砍光了，斧头也就没有把了。", author: "", source: "" },
  { id: 87, content: "成功的法则极为简单，但简单并不代表容易。", author: "", source: "" },
  { id: 88, content: "寒暄若只打招呼，与猴叫无异；正确寒暄要在短话中显关怀。", author: "", source: "" },
  { id: 89, content: "一个胜利者不会放弃，而一个放弃者永远不会胜利。", author: "", source: "" },
  { id: 90, content: "拿望远镜看别人，拿放大镜看自己。", author: "", source: "" },
  { id: 91, content: "生活的磨盘很重，你以为它是在碾碎你，其实它是在教会你细腻，并帮你呈上生活的细节。", author: "", source: "" },
  { id: 92, content: "别让任何人消耗你内心的晴朗，生活应该是被热爱的人和事填满的。", author: "", source: "" },
  { id: 93, content: "所有的艰难时刻都会过去，就像所有的晴朗日子都会到来一样自然。", author: "", source: "" },
  { id: 94, content: "你不必光芒万丈，也不必有什么特殊的意义，你只需要做你自己，安心等待那个对你心动的人。", author: "", source: "" },
  { id: 95, content: "把时间分给睡眠、书籍、运动与热爱，而非浪费在无聊人事上。", author: "", source: "" },
  { id: 96, content: "生活里有一点我不是太喜欢，就是它总让更懂事的人来承担糟糕的感受和结果。", author: "", source: "" },
  { id: 97, content: "慢慢理解世界，慢慢更新自己，一路人生，要去开心，要去期待，要去热爱。", author: "", source: "" },
  { id: 98, content: "别总说来日方长，这世上挥手之间的都是人走茶凉。", author: "", source: "" },
  { id: 99, content: "你今天的努力，是幸运的伏笔，当下的付出，是明日的花开。", author: "", source: "" },
  { id: 100, content: "别让生活蹂躏了你的眉目和深情。", author: "", source: "" },
  { id: 101, content: "人生就是一场漫长的自娱自乐，讨别人欢心只是小聪明，每天都能讨得自己开心才是硬道理。", author: "", source: "" },
  { id: 102, content: "世界上所有的惊喜和好运，都是你累积的温柔和善良。", author: "", source: "" },
  { id: 103, content: "别太纠结于当下，也别太忧虑未来，当你经历过一些事情的时候，眼前的风景已经和从前不一样了。", author: "", source: "" },
  { id: 104, content: "人生没有白走的路，每一步都算数。", author: "", source: "" },
  { id: 105, content: "生活总会给你答案，但不会马上把一切都告诉你。", author: "", source: "" },
  { id: 106, content: "你必须培养一些爱好，积攒一些微笑的期待和快乐，这样，才不会被又不可及的梦和无法掌控的爱所拖垮。", author: "", source: "" },
  { id: 107, content: "愿你遍历山河，觉得人间值得。", author: "", source: "" },
  { id: 108, content: "生活不可能像你想象得那么好，但也不会像你想象得那么糟。人的脆弱和坚强都超乎自己的想象。", author: "", source: "" },
  { id: 109, content: "所谓成长，就是逼着你一个人，踉踉跄跄地受伤，跌跌撞撞地坚强。", author: "", source: "" },
  { id: 110, content: "时间会治愈一切，即使现在的你觉得世界一片黑暗，也请相信，黎明总会到来。", author: "", source: "" },
  { id: 111, content: "不要因为结束而哭泣，要为曾经发生过而微笑。", author: "", source: "" },
  { id: 112, content: "重要的不是你从哪里来，而是你要到哪里去。去向何方，比身处何地更重要。", author: "", source: "" },
  { id: 113, content: "生活就像骑自行车，要想保持平衡，就必须不断前进。", author: "", source: "" },
  { id: 114, content: "真正的平静，不是避开车马喧嚣，而是在心中修篱种菊。", author: "", source: "" },
  { id: 115, content: "与其讨好别人，不如武装自己；与其逃避现实，不如笑对人生。", author: "", source: "" },
  { id: 116, content: "生活不是一场赛跑，而是一次旅行，重要的不是目的地，而是沿途的风景以及看风景的心情。", author: "", source: "" },
  { id: 117, content: "当你感到迷茫的时候，请你抬头看看月亮。", author: "", source: "" },
  { id: 118, content: "别让任何人告诉你，你成不了才。如果你有梦想，就要去捍卫它。", author: "", source: "" },
  { id: 119, content: "人生就像一场舞会，教会你最初舞步的人，未必能陪你走到散场。", author: "", source: "" },
  { id: 120, content: "你今天的选择，决定了你明天的样子。", author: "", source: "" },
  { id: 121, content: "日子像念珠一样，一天接一天滑过，串成周月年，要让每颗珠子都发光。", author: "", source: "" },
  { id: 122, content: "别总抱怨生活欠了你什么，其实生活根本不知道你是谁。", author: "", source: "" },
  { id: 123, content: "把弯路走直是聪明，因找捷径；把直路走弯是豁达，因多看风景。", author: "", source: "" },
  { id: 124, content: "不必羡慕别人的生活，每个人都有自己的渡口和码头。", author: "", source: "" },
  { id: 125, content: "有时需出去走走，呼吸新鲜空气，提醒自己是谁，想成为什么样的人。", author: "", source: "" },
  { id: 126, content: "快乐不是因为拥有的多，而是计较的少。", author: "", source: "" },
  { id: 127, content: "你现在的付出，都会是沉淀，默默铺路，让你成为更好的人。", author: "", source: "" },
  { id: 128, content: "生活中最大的幸福，是坚信有人爱着我们。", author: "", source: "" },
  { id: 129, content: "不是所有努力都有结果，但总有努力，能从冰封土地培育出万朵蔷薇。", author: "", source: "" },
  { id: 130, content: "时间最公平，不多给一分不少给一秒，你珍惜它，它就珍惜你。", author: "", source: "" },
  { id: 131, content: "人生像白开水，每天都喝，别羡慕别人饮料，未必有它解渴。", author: "", source: "" },
  { id: 132, content: "勇敢不是不害怕，而是害怕时还能坚持去做。", author: "", source: "" },
  { id: 133, content: "别让未来的你，讨厌现在不努力的自己。", author: "", source: "" },
  { id: 134, content: "生命中最美好的东西，往往在最意想不到的时刻出现。", author: "", source: "" },
  { id: 135, content: "如果你觉得现在走的辛苦，那就证明你在走上坡路。", author: "", source: "" },
  { id: 136, content: "世界上没有绝对的公平，只有相对的努力。", author: "", source: "" },
  { id: 137, content: "别让压力挤走快乐，昨日已过无法改，收拾心情重新出发。", author: "", source: "" },
  { id: 138, content: "你若盛开，清风自来；你若精彩，天自安排。", author: "", source: "" },
  { id: 139, content: "人生没有彩排，每一天都是现场直播。", author: "", source: "" },
  { id: 140, content: "很多时候，我们缺的不是能力，而是勇气。", author: "", source: "" },
  { id: 141, content: "生活总会给你第二次机会，叫明天。", author: "", source: "" },
  { id: 142, content: "别把自己看得太重要，也别把自己看得太轻。", author: "", source: "" },
  { id: 143, content: "每一个不曾起舞的日子，都是对生命的辜负。", author: "", source: "" },
  { id: 144, content: "与其在风雨中逃避，不如在雷电中舞蹈，淋透也是领略生命快意。", author: "", source: "" },
  { id: 145, content: "生活不是等待暴风雨过去，而是学会在雨中漫步。", author: "", source: "" },
  { id: 146, content: "当你停下来休息的时候，别忘了别人还在奔跑。", author: "", source: "" },
  { id: 147, content: "人生的路靠自己走，真正能保护你的，是自己的人格与文化选择。", author: "", source: "" },
  { id: 148, content: "不为模糊未来担忧，只为清楚现在努力。", author: "", source: "" },
  { id: 149, content: "生活的美好在丰富多彩，要让生活有意义，就要不断充实它。", author: "", source: "" },
  { id: 150, content: "改不了环境可改自己，改不了事实可改态度，改不了过去可改现在。", author: "", source: "" },
  { id: 151, content: "成功的人不是从未被击倒，而是被击倒后仍积极迈向成功。", author: "", source: "" },
  { id: 152, content: "生活就像一面镜子，你笑，它也笑；你哭，它也哭。", author: "", source: "" },
  { id: 153, content: "别让任何人的忽视、憎恨或否定，阻挡你成为最好的自己。", author: "", source: "" },
  { id: 154, content: "人生最重要的不是所站的位置，而是所朝的方向。", author: "", source: "" },
  { id: 155, content: "努力不是为感动谁，而是让自己有能力跳出厌恶的圈子，拥有选择权。", author: "", source: "" },
  { id: 156, content: "生命不是要超越别人，而是要超越自己。", author: "", source: "" },
  { id: 157, content: "抱怨是最消耗能量的无益举动，与其抱怨，不如改变。", author: "", source: "" },
  { id: 158, content: "命运如同手中掌纹，无论多曲折，终掌握在自己手中。", author: "", source: "" },
  { id: 159, content: "没有过不去的坎，只有过不去的人。", author: "", source: "" },
  { id: 160, content: "你今天的态度，决定了你明天的高度。", author: "", source: "" },
  { id: 161, content: "生活中每个瞬间都可能是新开始，别让过去遗憾耽误未来美好。", author: "", source: "" },
  { id: 162, content: "有时坚持最不想干的事之后，会得到最想要的东西。", author: "", source: "" },
  { id: 163, content: "别让情绪左右你的决定，要让理智为你导航。", author: "", source: "" },
  { id: 164, content: "人生的幸福，不在于拥有多少，而在于从拥有中感受多少快乐。", author: "", source: "" },
  { id: 165, content: "路是自己选的，后悔的话，也只能往自己肚子里咽。", author: "", source: "" },
  { id: 166, content: "当你感到无助的时候，别忘了，你自己就是一道光。", author: "", source: "" },
  { id: 167, content: "生活不是一场辩论赛，不需要非要争个输赢。", author: "", source: "" },
  { id: 168, content: "每一次跌倒，都是为更高飞翔的蓄力。", author: "", source: "" },
  { id: 169, content: "别让琐碎小事占据太多精力，影响你前进的步伐。", author: "", source: "" },
  { id: 170, content: "真正的快乐，在于放下计较，而非拥有多少。", author: "", source: "" },
  { id: 171, content: "人生像马拉松，不在乎跑多快，而在乎能否坚持到终点。", author: "", source: "" },
  { id: 172, content: "你所经历的艰难，都会成为你未来的勋章。", author: "", source: "" },
  { id: 173, content: "别让别人的评价，定义你的价值。", author: "", source: "" },
  { id: 174, content: "生活的真谛，在于珍惜每一个当下。", author: "", source: "" },
  { id: 175, content: "努力的意义，在于当好运来临时，你能够接住它。", author: "", source: "" },
  { id: 176, content: "不是因为看到希望才坚持，而是因为坚持才看到希望。", author: "", source: "" },
  { id: 177, content: "人生没有如果，只有后果和结果。", author: "", source: "" },
  { id: 178, content: "别在该奋斗的年纪，选择了安逸。", author: "", source: "" },
  { id: 179, content: "你若不勇敢，谁替你坚强；你若不努力，谁替你实现梦想。", author: "", source: "" },
  { id: 180, content: "生活中的每一个挑战，都是成长的机会。", author: "", source: "" },
  { id: 181, content: "别让过去的错误，惩罚现在的自己。", author: "", source: "" },
  { id: 182, content: "幸福像蝴蝶，越追越远；静下心来，它却会悄悄落在你身上。", author: "", source: "" },
  { id: 183, content: "成功不是偶然，它属于有准备、肯努力的人。", author: "", source: "" },
  { id: 184, content: "人生像一杯茶，平淡是本色，苦涩是历程，清香是馈赠。", author: "", source: "" },
  { id: 185, content: "别让外界喧嚣，扰乱你内心的平静。", author: "", source: "" },
  { id: 186, content: "优秀的人都有沉默时光，那是付出多却无果的日子，叫做扎根。", author: "", source: "" },
  { id: 187, content: "生活不是缺少美，而是缺少发现美的眼睛。", author: "", source: "" },
  { id: 188, content: "你今天的努力，是为了明天有更多的选择。", author: "", source: "" },
  { id: 189, content: "别让梦想只停留在梦里，要让它成为现实。", author: "", source: "" },
  { id: 190, content: "人生的路，每一步都算数，每一步都重要。", author: "", source: "" },
  { id: 191, content: "困难像弹簧，你强它就弱，你弱它就强。", author: "", source: "" },
  { id: 192, content: "别让负面情绪，消耗你的正能量。", author: "", source: "" },
  { id: 193, content: "生活中的每一个小确幸，都值得被珍惜。", author: "", source: "" },
  { id: 194, content: "成功的路上，没有捷径，只有脚踏实地。", author: "", source: "" },
  { id: 195, content: "你若对生活微笑，生活也会对你微笑。", author: "", source: "" },
  { id: 196, content: "别在失意时放弃，别在得意时忘形。", author: "", source: "" },
  { id: 197, content: "人生像一场旅行，重要的不是目的地，而是沿途风景与心情。", author: "", source: "" },
  { id: 198, content: "努力的人，运气都不会太差。", author: "", source: "" },
  { id: 199, content: "别让别人的看法，左右你的人生。", author: "", source: "" }
];

export default quotes;
