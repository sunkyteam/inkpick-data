// 名人名言数据
const quotes = [
  {
    id: 1,
    content: "世上无难事，只怕有心人",
    author: "中国谚语",
    source: ""
  },
  {
    id: 2,
    content: "知识就是力量",
    author: "弗朗西斯·培根",
    source: ""
  },
  {
    id: 3,
    content: "走自己的路，让别人说去",
    author: "但丁",
    source: ""
  },
  {
    id: 4,
    content: "天才就是百分之九十九的汗水加百分之一灵感",
    author: "爱迪生",
    source: ""
  },
  {
    id: 5,
    content: "生活不是等待风暴过去，而是学会在雨中跳舞",
    author: "维维安·格林",
    source: ""
  },
  {
    id: 6,
    content: "真正的才智是刚毅的志向",
    author: "拿破仑",
    source: ""
  },
  {
    id: 7,
    content: "沉默是最高的轻蔑",
    author: "鲁迅",
    source: ""
  },
  {
    id: 8,
    content: "悲剧将人生有价值的东西毁灭给人看",
    author: "鲁迅",
    source: ""
  },
  {
    id: 9,
    content: "世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的胸怀",
    author: "雨果",
    source: ""
  },
  {
    id: 10,
    content: "婚姻是一座围城，城外的人想进去，城里的人想出来",
    author: "钱钟书",
    source: "《围城》"
  },
  {
    id: 11,
    content: "人总是在接近幸福时倍感幸福，在幸福进行时却患得患失",
    author: "张爱玲",
    source: ""
  },
  {
    id: 12,
    content: "岁月悠悠，衰微只及肌肤；热忱抛却，颓废必致灵魂",
    author: "塞缪尔·厄尔曼",
    source: ""
  },
  {
    id: 13,
    content: "世界上最快乐的事，莫过于为理想而奋斗",
    author: "苏格拉底",
    source: ""
  },
  {
    id: 14,
    content: "快乐不在于事情，而在于我们自己",
    author: "理查德·瓦格纳",
    source: ""
  },
  {
    id: 15,
    content: "我们需要英雄，因为英雄创造历史",
    author: "罗曼·罗兰",
    source: ""
  },
  {
    id: 16,
    content: "勇者愤怒，抽刃向更强者；怯者愤怒，却抽刃向更弱者",
    author: "鲁迅",
    source: ""
  },
  {
    id: 17,
    content: "失败乃成功之母",
    author: "温德尔·菲利普斯",
    source: ""
  },
  {
    id: 18,
    content: "最大的忍辱是牺牲，最大的牺牲是预备反抗",
    author: "老舍",
    source: ""
  },
  {
    id: 19,
    content: "生活是一种律动，须有光有影，有晴有雨",
    author: "老舍",
    source: ""
  },
  {
    id: 20,
    content: "把忍受变成享受，是精神对于物质的最大胜利",
    author: "钱钟书",
    source: ""
  },
  {
    id: 21,
    content: "回忆若是有气味，便是樟脑的香，甜而稳妥",
    author: "张爱玲",
    source: ""
  },
  {
    id: 22,
    content: "以淡字交友，以聋字止谤，以刻字责己",
    author: "李叔同",
    source: ""
  },
  {
    id: 23,
    content: "人生重要的不是所处的位置，而是所朝的方向",
    author: "保罗·柯艾略",
    source: ""
  },
  {
    id: 24,
    content: "未经审视的人生不值得度过",
    author: "苏格拉底",
    source: ""
  },
  {
    id: 25,
    content: "教育不是注满一桶水，而是点燃一把火",
    author: "威廉·巴特勒·叶芝",
    source: ""
  },
  {
    id: 26,
    content: "如果你渴望和平，就要准备战争",
    author: "韦格蒂乌斯",
    source: ""
  },
  {
    id: 27,
    content: "时间就是性命，无端空耗别人时间，无异于谋财害命",
    author: "鲁迅",
    source: ""
  },
  {
    id: 28,
    content: "友谊限于两人范围之内",
    author: "亚当·斯密",
    source: ""
  },
  {
    id: 29,
    content: "独立之精神，自由之思想",
    author: "陈寅恪",
    source: ""
  },
  {
    id: 30,
    content: "草木不经霜雪，则生意不固；人不经忧患，则德慧不成",
    author: "沈近思",
    source: ""
  },
  {
    id: 31,
    content: "即使踏着荆棘，也不觉悲苦；纵有泪可落，亦不是悲凉",
    author: "冰心",
    source: ""
  },
  {
    id: 32,
    content: "只有经历过地狱磨砺，才有创造天堂的力量",
    author: "尼采",
    source: ""
  },
  {
    id: 33,
    content: "真正的平静，不是避开车马喧嚣，而是在心中修篱种菊",
    author: "白落梅",
    source: ""
  },
  {
    id: 34,
    content: "能够放下的越多，就越富有",
    author: "梭罗",
    source: ""
  },
  {
    id: 35,
    content: "和命运结伴而行的人，永远不会迷路",
    author: "塞涅卡",
    source: ""
  },
  {
    id: 36,
    content: "人诗意地栖居在大地上",
    author: "海德格尔",
    source: ""
  },
  {
    id: 37,
    content: "不能听命于自己者，就要受命于他人",
    author: "尼采",
    source: ""
  },
  {
    id: 38,
    content: "人类从历史中学到的唯一教训，就是无法从历史中吸取教训",
    author: "黑格尔",
    source: ""
  },
  {
    id: 39,
    content: "朝闻道，夕死可矣",
    author: "孔子",
    source: "《论语》"
  },
  {
    id: 40,
    content: "志不强者智不达，言不信者行不果",
    author: "墨子",
    source: ""
  },
  {
    id: 41,
    content: "非淡泊无以明志，非宁静无以致远",
    author: "诸葛亮",
    source: ""
  },
  {
    id: 42,
    content: "傻瓜对自己总是确定，智者则充满疑虑",
    author: "罗素",
    source: ""
  },
  {
    id: 43,
    content: "九州生气恃风雷，万马齐喑究可哀",
    author: "龚自珍",
    source: ""
  },
  {
    id: 44,
    content: "修养的花儿在寂静中开过去了，成功的果子便在光明里结实",
    author: "冰心",
    source: ""
  },
  {
    id: 45,
    content: "青春时光转眼即逝",
    author: "贺拉斯",
    source: ""
  },
  {
    id: 46,
    content: "骄傲自满是我们的一座可怕的陷阱",
    author: "老舍",
    source: ""
  },
  {
    id: 47,
    content: "人生下来不是为了拖着锁链，而是为了展开双翼",
    author: "雨果",
    source: ""
  },
  {
    id: 48,
    content: "哪里有阴影，哪里就有光",
    author: "纪伯伦",
    source: ""
  },
  {
    id: 49,
    content: "光明与黑暗交织厮杀，这便是我们所在的世界",
    author: "维克多·雨果",
    source: ""
  },
  {
    id: 50,
    content: "当真理还在穿鞋时，谎言已走遍半个世界",
    author: "马克·吐温",
    source: ""
  },
  {
    id: 51,
    content: "在时间的大钟上，只有两个字——现在",
    author: "莎士比亚",
    source: ""
  },
  {
    id: 52,
    content: "给我一个支点，我就能撬起整个地球",
    author: "阿基米德",
    source: ""
  },
  {
    id: 53,
    content: "当你为错过太阳而哭泣，你也将错过群星",
    author: "泰戈尔",
    source: ""
  },
  {
    id: 54,
    content: "战争不决定谁对了，只决定谁留下了",
    author: "罗素",
    source: ""
  },
  {
    id: 55,
    content: "人生而自由，却无往不在枷锁之中",
    author: "卢梭",
    source: ""
  },
  {
    id: 56,
    content: "存在即合理",
    author: "黑格尔",
    source: ""
  },
  {
    id: 57,
    content: "我思故我在",
    author: "笛卡尔",
    source: ""
  },
  {
    id: 58,
    content: "最大的风险是不冒任何风险",
    author: "马克·扎克伯格",
    source: ""
  },
  {
    id: 59,
    content: "预测未来的最好方式是创造它",
    author: "艾伦·凯",
    source: ""
  },
  {
    id: 60,
    content: "不要问国家能为你做什么，问你能为国家做什么",
    author: "肯尼迪",
    source: ""
  },
  {
    id: 61,
    content: "唯一不变的是变化本身",
    author: "赫拉克利特",
    source: ""
  },
  {
    id: 62,
    content: "生命中只有两种悲剧：一种是得不到想要的，另一种是得到了",
    author: "王尔德",
    source: ""
  },
  {
    id: 63,
    content: "人生如同故事，重要的不是长度，而是精彩程度",
    author: "塞涅卡",
    source: ""
  },
  {
    id: 64,
    content: "教育是把火炬点燃，而不是把容器灌满",
    author: "威廉·巴特勒·叶芝",
    source: ""
  },
  {
    id: 65,
    content: "智慧不仅仅存在于知识中，更存在于运用知识的能力中",
    author: "亚里士多德",
    source: ""
  },
  {
    id: 66,
    content: "我们不但善于破坏一个旧世界，我们还将善于建设一个新世界",
    author: "毛泽东",
    source: ""
  },
  {
    id: 67,
    content: "书籍是人类进步的阶梯",
    author: "高尔基",
    source: ""
  },
  {
    id: 68,
    content: "谎言的代价不仅是它被当真，而是我们再也无法辨别真相",
    author: "乔治·奥威尔",
    source: ""
  },
  {
    id: 69,
    content: "战争是政治的延续",
    author: "克劳塞维茨",
    source: ""
  },
  {
    id: 70,
    content: "活着就是要改变世界，否则活着还有什么意义",
    author: "乔布斯",
    source: ""
  },
  {
    id: 71,
    content: "自由不是无代价的",
    author: "托马斯·潘恩",
    source: ""
  },
  {
    id: 72,
    content: "世界以痛吻我，要我报之以歌",
    author: "泰戈尔",
    source: ""
  },
  {
    id: 73,
    content: "当你说不可能时，只是在表达自己的局限",
    author: "爱因斯坦",
    source: ""
  },
  {
    id: 74,
    content: "教育的根是苦的，但其果实是甜的",
    author: "亚里士多德",
    source: ""
  },
  {
    id: 75,
    content: "我们关心的不是你是否失败，而是你是否甘心失败",
    author: "林肯",
    source: ""
  },
  {
    id: 76,
    content: "树的方向由风决定，人的方向由自己决定",
    author: "卡耐基",
    source: ""
  },
  {
    id: 77,
    content: "最高的道德是爱国心",
    author: "拿破仑",
    source: ""
  },
  {
    id: 78,
    content: "时间是最好的作者，它总会写出完美结局",
    author: "卓别林",
    source: ""
  },
  {
    id: 79,
    content: "科学没有国界，科学家却有祖国",
    author: "巴斯德",
    source: ""
  },
  {
    id: 80,
    content: "生命中最沉重的负担不是工作，而是无聊",
    author: "米兰·昆德拉",
    source: ""
  },
  {
    id: 81,
    content: "艺术是让我们认识真理的谎言",
    author: "毕加索",
    source: ""
  },
  {
    id: 82,
    content: "管理就是预测和计划，组织、指挥、协调以及控制",
    author: "亨利·法约尔",
    source: ""
  },
  {
    id: 83,
    content: "改变世界的不是武器，而是思想",
    author: "维克多·雨果",
    source: ""
  },
  {
    id: 84,
    content: "真正的发现之旅不在于寻找新风景，而在于拥有新眼光",
    author: "普鲁斯特",
    source: ""
  },
  {
    id: 85,
    content: "最有力量的时刻，是坚持到最后一分钟",
    author: "丘吉尔",
    source: ""
  },
  {
    id: 86,
    content: "创新是区别领导者和追随者的唯一标准",
    author: "乔布斯",
    source: ""
  },
  {
    id: 87,
    content: "历史从不重复，但它会押韵",
    author: "马克·吐温",
    source: ""
  },
  {
    id: 88,
    content: "人必须珍藏某种信念，必须握住某种梦想和希望，必须有彩虹，必须有歌可唱，必须有高贵的事物可以投身",
    author: "约翰·杜威",
    source: ""
  },
  {
    id: 89,
    content: "衡量一个人的标准，是看他如何面对逆境",
    author: "柏拉图",
    source: ""
  },
  {
    id: 90,
    content: "最强大的力量是温柔",
    author: "老子",
    source: ""
  },
  {
    id: 91,
    content: "万物皆有裂痕，那是光照进来的地方",
    author: "莱昂纳德·科恩",
    source: ""
  },
  {
    id: 92,
    content: "政治是可能性的艺术",
    author: "俾斯麦",
    source: ""
  },
  {
    id: 93,
    content: "没有伟大的愿望，就没有伟大的天才",
    author: "巴尔扎克",
    source: ""
  },
  {
    id: 94,
    content: "摄影是凝固的时间，诗歌是凝固的情感",
    author: "苏珊·桑塔格",
    source: ""
  },
  {
    id: 95,
    content: "战争太重要了，不能交给将军们",
    author: "克列孟梭",
    source: ""
  },
  {
    id: 96,
    content: "法律沉默时，暴力即发声",
    author: "西塞罗",
    source: ""
  },
  {
    id: 97,
    content: "音乐是表达那些无以言表之物的艺术",
    author: "维克多·雨果",
    source: ""
  },
  {
    id: 98,
    content: "我们需要的不是生存，而是生活",
    author: "亚里士多德",
    source: ""
  },
  {
    id: 99,
    content: "革命尚未成功，同志仍须努力",
    author: "孙中山",
    source: ""
  }

export default quotes;
