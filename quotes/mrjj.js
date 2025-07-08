// 每日金句数据
const quotes = [
  {
    id: 1,
    content: "人类只有一个地球，人类也只有一个共同的未来。",
    author: "",
    source: "人民日报"
  },
  {
    id: 2,
    content: "“键对键”不能代替“面对面”。",
    author: "",
    source: "人民日报"
  },
  {
    id: 3,
    content: "命是自己的，运却和整个国家相关联。",
    author: "",
    source: "人民日报"
  },
  {
    id: 4,
    content: "“正步”人生，从未“稍息”。",
    author: "",
    source: "人民日报"
  },
  {
    id: 5,
    content: "星光不问赶路人，历史属于奋斗者。",
    author: "",
    source: "人民日报"
  },
  {
    id: 6,
    content: "一寸山河一寸血，一抔热土一抔魂。",
    author: "",
    source: "人民日报"
  },
  {
    id: 7,
    content: "乘风好去，长空万里，直下看山河。",
    author: "",
    source: "人民日报"
  },
  {
    id: 8,
    content: "真相不是一块橡皮泥，可以随意揉捏。",
    author: "",
    source: "人民日报"
  },
  {
    id: 9,
    content: "朝着阳光生长，黑夜就不再漫长。",
    author: "",
    source: "人民日报"
  },
  {
    id: 10,
    content: "手里拿锤子的人，看什么都像钉子。",
    author: "",
    source: "人民日报"
  },
  {
    id: 11,
    content: "船的力量在帆上，人的力量在心上。",
    author: "",
    source: "人民日报"
  },
  {
    id: 12,
    content: "“富脑袋”和“富口袋”一样重要。",
    author: "",
    source: "人民日报"
  },
  {
    id: 13,
    content: "一位英雄就是一个标杆，一群英雄就是一片高原。",
    author: "",
    source: "人民日报"
  },
  {
    id: 14,
    content: "肩并肩坐在一起，是人类最美的姿态；",
    author: "",
    source: "人民日报"
  },
  {
    id: 15,
    content: "心，永远都会是身体里最强壮的部位。",
    author: "",
    source: "人民日报"
  },
  {
    id: 16,
    content: "全村的龙已经把最硬的鳞给你，哪怕自己伤痕累累。",
    author: "",
    source: "人民日报"
  },
  {
    id: 17,
    content: "拼手速的时代，不妨让子弹多飞一会儿。",
    author: "",
    source: "人民日报"
  },
  {
    id: 18,
    content: "衣白褂，破楼兰，赤子切记平安还。",
    author: "",
    source: "人民日报"
  },
  {
    id: 19,
    content: "守正且创新，身正且行直，怀珠且抱玉。",
    author: "",
    source: "人民日报"
  },
  {
    id: 20,
    content: "青山无言，永怀碧血；日月行天，以鉴丹心。",
    author: "",
    source: "人民日报"
  },
  {
    id: 21,
    content: "已识乾坤大，犹怜草木青。",
    author: "",
    source: "人民日报"
  },
  {
    id: 22,
    content: "只看得见数字的加减乘除，却忽视了生活的五颜六色。",
    author: "",
    source: "人民日报"
  },
  {
    id: 23,
    content: "干惊天动地事，做隐姓埋名人。",
    author: "",
    source: "人民日报"
  },
  {
    id: 24,
    content: "没有任何一朵花，一开始便是花。",
    author: "",
    source: "人民日报"
  },
  {
    id: 25,
    content: "爱国是最大的公约数。",
    author: "",
    source: "人民日报"
  },
  {
    id: 26,
    content: "树立“高线”，划清“红线”，兜牢“底线”。",
    author: "",
    source: "人民日报"
  },
  {
    id: 27,
    content: "个人的努力是加法，一个团队的努力是乘法。",
    author: "",
    source: "人民日报"
  },
  {
    id: 28,
    content: "与君远相知，不道云海深。",
    author: "",
    source: "人民日报"
  },
  {
    id: 29,
    content: "昨天的太阳，晒不干今天的衣服。",
    author: "",
    source: "人民日报"
  },
  {
    id: 30,
    content: "不忘本来，吸收外来，面向未来。",
    author: "",
    source: "人民日报"
  },
  {
    id: 31,
    content: "在“乡村时空”中增添一层“文化时空”。",
    author: "",
    source: "人民日报"
  },
  {
    id: 32,
    content: "你的高密度阅读能力在渐渐失去。",
    author: "",
    source: "人民日报"
  },
  {
    id: 33,
    content: "拉直这些问号。",
    author: "",
    source: "人民日报"
  },
  {
    id: 34,
    content: "将奖牌的成色换成了金色。",
    author: "",
    source: "人民日报"
  },
  {
    id: 35,
    content: "学习是为了让家乡摆脱贫困，而不是摆脱我们贫困的家乡。",
    author: "",
    source: "人民日报"
  },
  {
    id: 36,
    content: "最大的“甲方”当是对美好生活的向往。",
    author: "",
    source: "人民日报"
  },
  {
    id: 37,
    content: "剑已配妥，学校也是江湖；酒尚余温，人生没有退路。",
    author: "",
    source: "人民日报"
  },
  {
    id: 38,
    content: "面对一个“舆论广场”，需要打造一个“舆论主场”。",
    author: "",
    source: "人民日报"
  },
  {
    id: 39,
    content: "西山苍苍，东海茫茫。不惧风雨，心系远方。",
    author: "",
    source: "人民日报"
  },
  {
    id: 40,
    content: "人生万事须自为，跬步江山即寥廓。",
    author: "",
    source: "人民日报"
  },
  {
    id: 41,
    content: "在“躺平”和“支棱”之间做“仰卧起坐”。",
    author: "",
    source: "人民日报"
  },
  {
    id: 42,
    content: "不论树的影子有多长，根永远扎在土里。",
    author: "",
    source: "人民日报"
  },
  {
    id: 43,
    content: "现代人的原子化生活。",
    author: "",
    source: "人民日报"
  },
  {
    id: 44,
    content: "越来越多的“读者”开始以“听众”“观众”的角色来“读书”。",
    author: "",
    source: "人民日报"
  },
  {
    id: 45,
    content: "在一撇一捺、一点一滴的坚持中。",
    author: "",
    source: "人民日报"
  },
  {
    id: 46,
    content: "吸睛不能辣眼睛，玩梗不能恶趣味。",
    author: "",
    source: "人民日报"
  },
  {
    id: 47,
    content: "当伸出手指指责别人的时候，还有三根手指正指向自己。",
    author: "",
    source: "人民日报"
  },
  {
    id: 48,
    content: "激发起和强队“掰手腕”的斗志。",
    author: "",
    source: "人民日报"
  },
  {
    id: 49,
    content: "人之寿夭在元气，国之长短在风俗。",
    author: "",
    source: "人民日报"
  },
  {
    id: 50,
    content: "聚拢来是烟火，摊开来是人间。",
    author: "",
    source: "人民日报"
  },
  {
    id: 51,
    content: "人到半山不停步，船到中流当奋楫。",
    author: "",
    source: "人民日报"
  },
  {
    id: 52,
    content: "樱花绽放之前，就要抱着凋零的决心。",
    author: "",
    source: "人民日报"
  },
  {
    id: 53,
    content: "你是从诗三百篇中涉水而来，到我身边躺下已是楚辞苍茫。",
    author: "",
    source: "人民日报"
  },
  {
    id: 54,
    content: "生活最佳状态是冷冷清清地风风火火。",
    author: "",
    source: "人民日报"
  },
  {
    id: 55,
    content: "每个人带着一生的历史，半个月的哀乐，在街上走。",
    author: "",
    source: "人民日报"
  },
  {
    id: 56,
    content: "科学与艺术在山脚分手，在山顶重逢。",
    author: "",
    source: "人民日报"
  },
  {
    id: 57,
    content: "当我在尘埃里难以自拔，你们为我的骨头注入江河。",
    author: "",
    source: "人民日报"
  },
  {
    id: 58,
    content: "“地表短期最大规模人口迁徙”，折射中国人才有的情怀。",
    author: "",
    source: "人民日报"
  },
  {
    id: 59,
    content: "不负期待，活出自己的主场。",
    author: "",
    source: "人民日报"
  },
  {
    id: 60,
    content: "新的世界加速拼图，不会友情提示。",
    author: "",
    source: "人民日报"
  }
];

export default quotes;
