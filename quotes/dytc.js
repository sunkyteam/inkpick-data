// 电影台词数据
const quotes = [
  {
    id: 1,
    content: "恐惧囚禁人的灵魂，希望可以让你自由。",
    author: "",
    source: "《肖申克的救赎》"
  },
  {
    id: 2,
    content: "生命可以归结为一种简单的选择：要么忙于生存，要么赶着去死。",
    author: "",
    source: "《肖申克的救赎》"
  },
  {
    id: 3,
    content: "人，得自个儿成全自个儿。",
    author: "",
    source: "《霸王别姬》"
  },
  {
    id: 4,
    content: "要想人前显贵，必得人后受罪。",
    author: "",
    source: "《霸王别姬》"
  },
  {
    id: 5,
    content: "要往前走，就得先忘掉过去。",
    author: "",
    source: "《阿甘正传》"
  },
  {
    id: 6,
    content: "一个人真正需要的财富就那么一点点，其余的都是用来炫耀的。",
    author: "",
    source: "《阿甘正传》"
  },
  {
    id: 7,
    content: "\"你以后想成为什么样的人？\"\n\"什么意思，难道我以后就不能成为我自己了吗？\"",
    author: "",
    source: "《阿甘正传》"
  },
  {
    id: 8,
    content: "事情总是这样的，只有当你真正感受到对死亡的恐惧，你才会学到要珍惜生命。",
    author: "",
    source: "《这个杀手不太冷》"
  },
  {
    id: 9,
    content: "我们这一生最遗憾的事情之一，就是把我们最糟糕的一面留给了最亲近的人。",
    author: "",
    source: "《这个杀手不太冷》"
  },
  {
    id: 10,
    content: "只要你装得很有钱的样子，他们就会跟你套近乎。",
    author: "",
    source: "《泰坦尼克号》"
  },
  {
    id: 11,
    content: "等你获得真正属于你的幸福之后，你就会明白以前的伤痛其实是一种财富。",
    author: "",
    source: "《泰坦尼克号》"
  },
  {
    id: 12,
    content: "人只有走出来的美丽，没有等出来的辉煌。",
    author: "",
    source: "《美丽人生》"
  },
  {
    id: 13,
    content: "不要憎恨你的敌人，否则你将做出错误的判断。",
    author: "",
    source: "《美丽人生》"
  },
  {
    id: 14,
    content: "人永远不知道，谁哪次不经意的跟你说了再见之后，就真的不会再见了。",
    author: "",
    source: "《千与千寻》"
  },
  {
    id: 15,
    content: "不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。",
    author: "",
    source: "《千与千寻》"
  },
  {
    id: 16,
    content: "我不知道将去何方，但我已经在路上。",
    author: "",
    source: "《千与千寻》"
  },
  {
    id: 17,
    content: "放手一搏，还是要等到年华老去，心中充满遗憾，孤独的迈向黄泉？",
    author: "",
    source: "《盗梦空间》"
  },
  {
    id: 18,
    content: "一颗小小的意念种子，也会生根成形，它可能成就你，也可能毁灭你。",
    author: "",
    source: "《盗梦空间》"
  },
  {
    id: 19,
    content: "它只是你的一条狗，但你却是它的一生。",
    author: "",
    source: "《忠犬八公的故事》"
  },
  {
    id: 20,
    content: "忠诚的意义在于我们不应该忘记爱过的每一个人。",
    author: "",
    source: "《忠犬八公的故事》"
  },
  {
    id: 21,
    content: "你不能放弃，就算跛着脚也要爬上高峰。",
    author: "",
    source: "《楚门的世界》"
  },
  {
    id: 22,
    content: "你无权把一个生命当成一场秀。",
    author: "",
    source: "《楚门的世界》"
  },
  {
    id: 23,
    content: "有时候世界虽然是假的，但并不缺少真心对待我们的人。",
    author: "",
    source: "《楚门的世界》"
  },
  {
    id: 24,
    content: "不是每个人都能成为销魂的船长，但是可以让梦想起航。",
    author: "",
    source: "《海上钢琴师》"
  },
  {
    id: 25,
    content: "太多的选择，太复杂的判断，精神会崩溃的。",
    author: "",
    source: "《海上钢琴师》"
  },
  {
    id: 26,
    content: "阻止了我的脚步的，并不是我所看见的东西，而是我所无法看见的那些东西。",
    author: "",
    source: "《海上钢琴师》"
  },
  {
    id: 27,
    content: "学习是为了完善人生，而非享乐人生。",
    author: "",
    source: "《三傻大闹宝莱坞》"
  },
  {
    id: 28,
    content: "我不要只是生存，我要活得有意义。",
    author: "",
    source: "《机器人总动员》"
  },
  {
    id: 29,
    content: "当你低落时，就请穿上节日盛装。",
    author: "",
    source: "《机器人总动员》"
  },
  {
    id: 30,
    content: "每颗心都需要爱，需要温柔，大方，需要理解。",
    author: "",
    source: "《放牛班的春天》"
  },
  {
    id: 31,
    content: "世事不能说死，有些事情总值得尝试。",
    author: "",
    source: "《放牛班的春天》"
  },
  {
    id: 32,
    content: "你想要啊？你想要就说吧，你不说我怎么知道你想要呢？",
    author: "",
    source: "《大话西游之大圣娶亲》"
  },
  {
    id: 33,
    content: "如果不能跟我喜欢的人在一起，就算让我做玉皇大帝我也不会开心。",
    author: "",
    source: "《大话西游之大圣娶亲》"
  },
  {
    id: 34,
    content: "做人不快乐，长生不老又有什么用。",
    author: "",
    source: "《大话西游之大圣娶亲》"
  },
  {
    id: 35,
    content: "谁都了解生存往往比命运还残酷，只是没人愿意认输，我们都在不断赶路，忘记了出路。",
    author: "",
    source: "《无间道》"
  },
  {
    id: 36,
    content: "你不是我，你不会懂。",
    author: "",
    source: "《无间道》"
  },
  {
    id: 37,
    content: "一直以来，我都认为只能是事情改变人，人改变不了事情，但是他们，改变了一些事情。",
    author: "",
    source: "《无间道》"
  },
  {
    id: 38,
    content: "世界上最漂亮最宝贵的，反而是听不见且看不清的，只能用心才能感受得到。",
    author: "",
    source: "《熔炉》"
  },
  {
    id: 39,
    content: "我们一路奋战，不是为了能改变世界，而是为了不让世界改变我们。",
    author: "",
    source: "《熔炉》"
  },
  {
    id: 40,
    content: "我们来到世界上，都是孤独的旅行，即使身边有人相伴，最终也会各奔东西。",
    author: "",
    source: "《熔炉》"
  },
  {
    id: 41,
    content: "当你说“不”时，你要使“不”听上去像“是”一样好听。",
    author: "",
    source: "《教父》"
  },
  {
    id: 42,
    content: "痛苦和恐惧不是死亡，还有挽回的余地。",
    author: "",
    source: "《教父》"
  },
  {
    id: 43,
    content: "让朋友低估你的优点，让敌人高估你的缺点。",
    author: "",
    source: "《教父》"
  },
  {
    id: 44,
    content: "当人们做不到一些事情的时候，他们就会对你说你也同样不能。",
    author: "",
    source: "《当幸福来敲门》"
  },
  {
    id: 45,
    content: "\"如果我雇佣了一个没有穿着衬衫走进来的人，你会怎么说？\"\n\"他一定穿了一条很棒的裤子。\"",
    author: "",
    source: "《当幸福来敲门》"
  },
  {
    id: 46,
    content: "看得开一点，伤得就会少一点。",
    author: "",
    source: "《龙猫》"
  },
  {
    id: 47,
    content: "生活坏到一定程度就会好起来，因为它无法更坏。",
    author: "",
    source: "《龙猫》"
  },
  {
    id: 48,
    content: "认清这个世界，然后爱它。就这么一辈子，下一世你可能就不在这个世界了。",
    author: "",
    source: "《龙猫》"
  },
  {
    id: 49,
    content: "我爬的越高，眼前的风景便越发迷人。",
    author: "",
    source: "《怦然心动》"
  },
  {
    id: 50,
    content: "幸福就像你身后的影子，你追不到，但是只要你往前走，它就会一直跟着你。",
    author: "",
    source: "《怦然心动》"
  },
  {
    id: 51,
    content: "别听我说，听内心呼唤，这是否是你想要的结果。",
    author: "",
    source: "《怦然心动》"
  },
  {
    id: 52,
    content: "许多的爱不用说，用心感受；许多的情不用听，用时间证明。",
    author: "",
    source: "《触不可及》"
  },
  {
    id: 53,
    content: "这样的年代没有谁是值得信任的，你只能靠自己。",
    author: "",
    source: "《蝙蝠侠：黑暗骑士》"
  },
  {
    id: 54,
    content: "死亡并不可怕，真正可怕的是被人遗忘。",
    author: "",
    source: "《寻梦环游记》"
  },
  {
    id: 55,
    content: "家人是比梦想更重要的事情。",
    author: "",
    source: "《寻梦环游记》"
  },
  {
    id: 56,
    content: "你所看见的，未必是事情的真相。",
    author: "",
    source: "《寻梦环游记》"
  },
  {
    id: 57,
    content: "俗话说笨鸟先飞，我还得笨鸟多飞。",
    author: "",
    source: "《活着》"
  },
  {
    id: 58,
    content: "做人不能忘记四条：话不要说错，床不要睡错，门槛不要踏错，口袋不要摸错。",
    author: "",
    source: "《活着》"
  },
  {
    id: 59,
    content: "生而不养，养而不教，何以为家。",
    author: "",
    source: "《何以为家》"
  },
  {
    id: 60,
    content: "生活是一堆狗屎，不比我的鞋子值钱。",
    author: "",
    source: "《何以为家》"
  },
  {
    id: 61,
    content: "我认为纸上谈兵没什么作用。",
    author: "",
    source: "《乱世佳人》"
  },
  {
    id: 62,
    content: "你把自己的幸福拱手相让，去追求一些根本不会让你幸福的东西。",
    author: "",
    source: "《乱世佳人》"
  },
  {
    id: 63,
    content: "两个不同的人光有爱情是不够的。",
    author: "",
    source: "《乱世佳人》"
  },
  {
    id: 64,
    content: "该来的总归会来，一旦它来了，你就必须勇敢地去面对。",
    author: "",
    source: "《哈利·波特与魔法石》"
  },
  {
    id: 65,
    content: "沉湎于虚幻的梦想，而忘记现实的生活，这是毫无益处的。",
    author: "",
    source: "《哈利·波特与魔法石》"
  },
  {
    id: 66,
    content: "世上并没有绝对的善与恶，差别只在于强者和无法分清事实的弱者。",
    author: "",
    source: "《哈利·波特与魔法石》"
  },
  {
    id: 67,
    content: "幸福，不是长生不老，不是大鱼大肉，不是权倾朝野，幸福是每一个微小的生活愿望达成。",
    author: "",
    source: "《飞屋环游记》"
  },
  {
    id: 68,
    content: "如果你获得了银牌，你总会被遗忘；如果赢得了金牌，你会成为典范。",
    author: "",
    source: "《摔跤吧爸爸》"
  },
  {
    id: 69,
    content: "机遇稍纵即逝，要用你每滴汗水来争取，要坚信你会获得更多，命运也会屈服于你的努力不懈。",
    author: "",
    source: "《摔跤吧爸爸》"
  },
  {
    id: 70,
    content: "最孤独的人最亲切，受过伤的人总是笑得最灿烂，因为他们不愿让身边的人承受一样的痛苦。",
    author: "",
    source: "《素媛》"
  },
  {
    id: 71,
    content: "没有过不去的事，只有过去的故事。",
    author: "",
    source: "《素媛》"
  },
  {
    id: 72,
    content: "太理所当然的幸福让我们麻木，进而使我们错误地认为它已经消失了，但其实幸福一直都在。",
    author: "",
    source: "《素媛》"
  },
  {
    id: 73,
    content: "人生与自我都不是用来战胜的，而是用来相处的。",
    author: "",
    source: "《少年派的奇幻漂流》"
  },
  {
    id: 74,
    content: "人生就是不断的放下，然而难过的是，我都没能好好的和他们道别。",
    author: "",
    source: "《少年派的奇幻漂流》"
  },
  {
    id: 75,
    content: "人哪有好的，只是坏的程度不一样而已。",
    author: "",
    source: "《哈尔的移动城堡》"
  },
  {
    id: 76,
    content: "爱，不是寻找一个完美的人，而是学会用完美的眼光，欣赏那个并不完美的人。",
    author: "",
    source: "《哈尔的移动城堡》"
  },
  {
    id: 77,
    content: "世界上只有一种病，就是穷病。",
    author: "",
    source: "《我不是药神》"
  },
  {
    id: 78,
    content: "你如果不想被坑，就不要先进坑。",
    author: "",
    source: "《我不是药神》"
  },
  {
    id: 79,
    content: "出问题的时候，有人跑有人留。",
    author: "",
    source: "《闻香识女人》"
  },
  {
    id: 80,
    content: "没有什么比残缺的灵魂更可怕，而且那是任何东西都无法填补的。",
    author: "",
    source: "《闻香识女人》"
  },
  {
    id: 81,
    content: "一个人走向末路往往是因为不遗余力地寻找捷径。",
    author: "",
    source: "《闻香识女人》"
  },
  {
    id: 82,
    content: "人生与电影不同，人生，难多了。",
    author: "",
    source: "《天堂电影院》"
  },
  {
    id: 83,
    content: "躲不过的沙暴都是风景。",
    author: "",
    source: "《天堂电影院》"
  },
  {
    id: 84,
    content: "不要让你的悲伤成为困住自己的监牢。",
    author: "",
    source: "《狮子王》"
  },
  {
    id: 85,
    content: "过去那些不好的回忆总是让人难受，但你有两个方法，你可以选择逃避，或是从中学习到教训。",
    author: "",
    source: "《狮子王》"
  },
  {
    id: 86,
    content: "酒要一口一口地喝，路要一步一步地走，步子迈大了，容易扯着蛋。",
    author: "",
    source: "《让子弹飞》"
  },
  {
    id: 87,
    content: "世界上本没有路，有了腿便有了路。",
    author: "",
    source: "《让子弹飞》"
  },
  {
    id: 88,
    content: "人生不能像做菜，把所有的料都准备好了才下锅。",
    author: "",
    source: "《饮食男女》"
  },
  {
    id: 89,
    content: "唯有美食与爱，不可辜负。",
    author: "",
    source: "《饮食男女》"
  },
  {
    id: 90,
    content: "饭桌上其实是有人间的悲欢离合的。",
    author: "",
    source: "《饮食男女》"
  },
  {
    id: 91,
    content: "身体可以被禁锢，但自由的信念会永远传递。",
    author: "",
    source: "《飞越疯人院》"
  },
  {
    id: 92,
    content: "你们一直抱怨这个地方，但是你们却没有勇气走出这里。",
    author: "",
    source: "《飞越疯人院》"
  },
  {
    id: 93,
    content: "我的生活似乎并不需要通过你的肯定。",
    author: "",
    source: "《飞越疯人院》"
  },
  {
    id: 94,
    content: "没有行动力的人，即使拥有百万奖券，也窝囊的不敢兑现。",
    author: "",
    source: "《心灵捕手》"
  },
  {
    id: 95,
    content: "我们永远无法选择出身，但可以选择朋友。",
    author: "",
    source: "《绿皮书》"
  },
  {
    id: 96,
    content: "不管你做什么都要做到极致，上班就认真工作，笑就尽情大笑，吃东西时就像是最后一餐那样去享受。",
    author: "",
    source: "《绿皮书》"
  },
  {
    id: 97,
    content: "我是不知道自己想要什么，但我很清楚自己不想要什么。",
    author: "",
    source: "《喜剧之王》"
  },
  {
    id: 98,
    content: "不要把自己看得太重要，也不要把别人看得太重要。",
    author: "",
    source: "《喜剧之王》"
  },
  {
    id: 99,
    content: "越是试着忘记，越是记得深刻。",
    author: "",
    source: "《天空之城》"
  },
  {
    id: 100,
    content: "有时候，坚持了你最不想干的事情之后，便可得到你最想要的东西。",
    author: "",
    source: "《天空之城》"
  }
];

export default quotes;
