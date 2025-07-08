// 古诗词数据
const quotes = [
  {
    id: 1,
    content: "床前明月光，疑是地上霜",
    author: "李白",
    source: "静夜思"
  },
  {
    id: 2,
    content: "春眠不觉晓，处处闻啼鸟",
    author: "孟浩然",
    source: "春晓"
  },
  {
    id: 3,
    content: "两个黄鹂鸣翠柳，一行白鹭上青天",
    author: "杜甫",
    source: "绝句"
  },
  {
    id: 4,
    content: "千山鸟飞绝，万径人踪灭",
    author: "柳宗元",
    source: "江雪"
  },
  {
    id: 5,
    content: "白日依山尽，黄河入海流",
    author: "王之涣",
    source: "登鹳雀楼"
  },
  {
    id: 6,
    content: "海内存知己，天涯若比邻",
    author: "王勃",
    source: "送杜少府"
  },
  {
    id: 7,
    content: "停车坐爱枫林晚，霜叶红于二月花",
    author: "杜牧",
    source: "山行"
  },
  {
    id: 8,
    content: "商女不知亡国恨，隔江犹唱后庭花",
    author: "杜牧",
    source: "泊秦淮"
  },
  {
    id: 9,
    content: "日暮乡关何处是，烟波江上使人愁",
    author: "崔颢",
    source: "黄鹤楼"
  },
  {
    id: 10,
    content: "会当凌绝顶，一览众山小",
    author: "杜甫",
    source: "望岳"
  },
  {
    id: 11,
    content: "独在异乡为异客，每逢佳节倍思亲",
    author: "王维",
    source: "九月九日"
  },
  {
    id: 12,
    content: "劝君更尽一杯酒，西出阳关无故人",
    author: "王维",
    source: "送元二使"
  },
  {
    id: 13,
    content: "葡萄美酒夜光杯，欲饮琵琶马上催",
    author: "王翰",
    source: "凉州词"
  },
  {
    id: 14,
    content: "羌笛何须怨杨柳，春风不度玉门关",
    author: "王之涣",
    source: "凉州词"
  },
  {
    id: 15,
    content: "月落乌啼霜满天，江枫渔火对愁眠",
    author: "张继",
    source: "枫桥夜泊"
  },
  {
    id: 16,
    content: "姑苏城外寒山寺，夜半钟声到客船",
    author: "张继",
    source: "枫桥夜泊"
  },
  {
    id: 17,
    content: "春风又绿江南岸，明月何时照我还",
    author: "王安石",
    source: "泊船瓜洲"
  },
  {
    id: 18,
    content: "爆竹声中一岁除，春风送暖入屠苏",
    author: "王安石",
    source: "元日"
  },
  {
    id: 19,
    content: "不畏浮云遮望眼，自缘身在最高层",
    author: "王安石",
    source: "登飞来峰"
  },
  {
    id: 20,
    content: "春色满园关不住，一枝红杏出墙来",
    author: "叶绍翁",
    source: "游园不值"
  },
  {
    id: 21,
    content: "小荷才露尖尖角，早有蜻蜓立上头",
    author: "杨万里",
    source: "小池"
  },
  {
    id: 22,
    content: "接天莲叶无穷碧，映日荷花别样红",
    author: "杨万里",
    source: "晓出净慈"
  },
  {
    id: 23,
    content: "粉骨碎身浑不怕，要留清白在人间",
    author: "于谦",
    source: "石灰吟"
  },
  {
    id: 24,
    content: "咬定青山不放松，立根原在破岩中",
    author: "郑燮",
    source: "竹石"
  },
  {
    id: 25,
    content: "九州生气恃风雷，万马齐喑究可哀",
    author: "龚自珍",
    source: "己亥杂诗"
  },
  {
    id: 26,
    content: "草长莺飞二月天，拂堤杨柳醉春烟",
    author: "高鼎",
    source: "村居"
  },
  {
    id: 27,
    content: "儿童散学归来早，忙趁东风放纸鸢",
    author: "高鼎",
    source: "村居"
  },
  {
    id: 28,
    content: "毕竟西湖六月中，风光不与四时同",
    author: "杨万里",
    source: "晓出净慈"
  },
  {
    id: 29,
    content: "横看成岭侧成峰，远近高低各不同",
    author: "苏轼",
    source: "题西林壁"
  },
  {
    id: 30,
    content: "水光潋滟晴方好，山色空蒙雨亦奇",
    author: "苏轼",
    source: "饮湖上初"
  },
  {
    id: 31,
    content: "竹外桃花三两枝，春江水暖鸭先知",
    author: "苏轼",
    source: "惠崇春江"
  },
  {
    id: 32,
    content: "欲把西湖比西子，淡妆浓抹总相宜",
    author: "苏轼",
    source: "饮湖上初"
  },
  {
    id: 33,
    content: "忽如一夜春风来，千树万树梨花开",
    author: "岑参",
    source: "白雪歌送"
  },
  {
    id: 34,
    content: "孤帆远影碧空尽，唯见长江天际流",
    author: "李白",
    source: "黄鹤楼送"
  },
  {
    id: 35,
    content: "天生我材必有用，千金散尽还复来",
    author: "李白",
    source: "将进酒"
  },
  {
    id: 36,
    content: "安能摧眉折腰事权贵，使我不得开心颜",
    author: "李白",
    source: "梦游天姥"
  },
  {
    id: 37,
    content: "飞流直下三千尺，疑是银河落九天",
    author: "李白",
    source: "望庐山瀑"
  },
  {
    id: 38,
    content: "两岸猿声啼不住，轻舟已过万重山",
    author: "李白",
    source: "早发白帝"
  },
  {
    id: 39,
    content: "云想衣裳花想容，春风拂槛露华浓",
    author: "李白",
    source: "清平调·"
  },
  {
    id: 40,
    content: "仰天大笑出门去，我辈岂是蓬蒿人",
    author: "李白",
    source: "南陵别儿"
  },
  {
    id: 41,
    content: "露从今夜白，月是故乡明",
    author: "杜甫",
    source: "月夜忆舍"
  },
  {
    id: 42,
    content: "无边落木萧萧下，不尽长江滚滚来",
    author: "杜甫",
    source: "登高"
  },
  {
    id: 43,
    content: "好雨知时节，当春乃发生",
    author: "杜甫",
    source: "春夜喜雨"
  },
  {
    id: 44,
    content: "随风潜入夜，润物细无声",
    author: "杜甫",
    source: "春夜喜雨"
  },
  {
    id: 45,
    content: "出师未捷身先死，长使英雄泪满襟",
    author: "杜甫",
    source: "蜀相"
  },
  {
    id: 46,
    content: "两个黄鹂鸣翠柳，一行白鹭上青天",
    author: "杜甫",
    source: "绝句"
  },
  {
    id: 47,
    content: "窗含西岭千秋雪，门泊东吴万里船",
    author: "杜甫",
    source: "绝句"
  },
  {
    id: 48,
    content: "商女不知亡国恨，隔江犹唱后庭花",
    author: "杜牧",
    source: "泊秦淮"
  },
  {
    id: 49,
    content: "东风不与周郎便，铜雀春深锁二乔",
    author: "杜牧",
    source: "赤壁"
  },
  {
    id: 50,
    content: "停车坐爱枫林晚，霜叶红于二月花",
    author: "杜牧",
    source: "山行"
  },
  {
    id: 51,
    content: "清明时节雨纷纷，路上行人欲断魂",
    author: "杜牧",
    source: "清明"
  },
  {
    id: 52,
    content: "银烛秋光冷画屏，轻罗小扇扑流萤",
    author: "杜牧",
    source: "秋夕"
  },
  {
    id: 53,
    content: "相见时难别亦难，东风无力百花残",
    author: "李商隐",
    source: "无题"
  },
  {
    id: 54,
    content: "春蚕到死丝方尽，蜡炬成灰泪始干",
    author: "李商隐",
    source: "无题"
  },
  {
    id: 55,
    content: "晓镜但愁云鬓改，夜吟应觉月光寒",
    author: "李商隐",
    source: "无题"
  },
  {
    id: 56,
    content: "庄生晓梦迷蝴蝶，望帝春心托杜鹃",
    author: "李商隐",
    source: "锦瑟"
  },
  {
    id: 57,
    content: "此情可待成追忆？只是当时已惘然",
    author: "李商隐",
    source: "锦瑟"
  },
  {
    id: 58,
    content: "君问归期未有期，巴山夜雨涨秋池",
    author: "李商隐",
    source: "夜雨寄北"
  },
  {
    id: 59,
    content: "何当共剪西窗烛，却话巴山夜雨时",
    author: "李商隐",
    source: "夜雨寄北"
  },
  {
    id: 60,
    content: "相见时难别亦难，东风无力百花残",
    author: "李商隐",
    source: "无题"
  },
  {
    id: 61,
    content: "君若扬路尘，妾若浊水泥",
    author: "曹植",
    source: "明月上高楼"
  },
  {
    id: 62,
    content: "愿为西南风，长逝入君怀",
    author: "曹植",
    source: "七哀诗"
  },
  {
    id: 63,
    content: "捐躯赴国难，视死忽如归",
    author: "曹植",
    source: "白马篇"
  },
  {
    id: 64,
    content: "清水出芙蓉，天然去雕饰",
    author: "李白",
    source: "经乱离后"
  },
  {
    id: 65,
    content: "云青青兮欲雨，水澹澹兮生烟",
    author: "李白",
    source: "梦游天姥"
  },
  {
    id: 66,
    content: "举杯邀明月，对影成三人",
    author: "李白",
    source: "月下独酌"
  },
  {
    id: 67,
    content: "凤凰台上凤凰游，凤去台空江自流",
    author: "李白",
    source: "登金陵凤"
  },
  {
    id: 68,
    content: "总为浮云能蔽日，长安不见使人愁",
    author: "李白",
    source: "登金陵凤"
  },
  {
    id: 69,
    content: "长风破浪会有时，直挂云帆济沧海",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 70,
    content: "天生我材必有用，千金散尽还复来",
    author: "李白",
    source: "将进酒"
  },
  {
    id: 71,
    content: "两岸青山相对出，孤帆一片日边来",
    author: "李白",
    source: "望天门山"
  },
  {
    id: 72,
    content: "云想衣裳花想容，春风拂槛露华浓",
    author: "李白",
    source: "清平调·"
  },
  {
    id: 73,
    content: "若非群玉山头见，会向瑶台月下逢",
    author: "李白",
    source: "清平调·"
  },
  {
    id: 74,
    content: "安能摧眉折腰事权贵，使我不得开心颜",
    author: "李白",
    source: "梦游天姥"
  },
  {
    id: 75,
    content: "但使主人能醉客，不知何处是他乡",
    author: "李白",
    source: "客中行"
  },
  {
    id: 76,
    content: "仰天大笑出门去，我辈岂是蓬蒿人",
    author: "李白",
    source: "南陵别儿"
  },
  {
    id: 77,
    content: "抽刀断水水更流，举杯消愁愁更愁",
    author: "李白",
    source: "宣州谢朓"
  },
  {
    id: 78,
    content: "蓬莱文章建安骨，中间小谢又清发",
    author: "李白",
    source: "宣州谢朓"
  },
  {
    id: 79,
    content: "俱怀逸兴壮思飞，欲上青天揽明月",
    author: "李白",
    source: "宣州谢朓"
  },
  {
    id: 80,
    content: "浮云游子意，落日故人情",
    author: "李白",
    source: "送友人"
  },
  {
    id: 81,
    content: "挥手自兹去，萧萧班马鸣",
    author: "李白",
    source: "送友人"
  },
  {
    id: 82,
    content: "山随平野尽，江入大荒流",
    author: "李白",
    source: "渡荆门送"
  },
  {
    id: 83,
    content: "月下飞天镜，云生结海楼",
    author: "李白",
    source: "渡荆门送"
  },
  {
    id: 84,
    content: "仍怜故乡水，万里送行舟",
    author: "李白",
    source: "渡荆门送"
  },
  {
    id: 85,
    content: "早服还丹无世情，琴心三叠道初成",
    author: "李白",
    source: "庐山谣寄"
  },
  {
    id: 86,
    content: "飞流直下三千尺，疑是银河落九天",
    author: "李白",
    source: "望庐山瀑"
  },
  {
    id: 87,
    content: "为君谈笑静胡沙，系虏请缨向天涯",
    author: "李白",
    source: "永王东巡"
  },
  {
    id: 88,
    content: "吴宫花草埋幽径，晋代衣冠成古丘",
    author: "李白",
    source: "登金陵凤"
  },
  {
    id: 89,
    content: "三山半落青天外，二水中分白鹭洲",
    author: "李白",
    source: "登金陵凤"
  },
  {
    id: 90,
    content: "凤凰台上凤凰游，凤去台空江自流",
    author: "李白",
    source: "登金陵凤"
  },
  {
    id: 91,
    content: "总为浮云能蔽日，长安不见使人愁",
    author: "李白",
    source: "登金陵凤"
  },
  {
    id: 92,
    content: "长风破浪会有时，直挂云帆济沧海",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 93,
    content: "金樽清酒斗十千，玉盘珍羞直万钱",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 94,
    content: "停杯投箸不能食，拔剑四顾心茫然",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 95,
    content: "欲渡黄河冰塞川，将登太行雪满山",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 96,
    content: "闲来垂钓碧溪上，忽复乘舟梦日边",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 97,
    content: "行路难！行路难！多歧路，今安在？",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 98,
    content: "大道如青天，我独不得出",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 99,
    content: "羞逐长安社中儿，赤鸡白雉赌梨栗",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 100,
    content: "弹剑作歌奏苦声，曳裾王门不称情",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 101,
    content: "淮阴市井笑韩信，汉朝公卿忌贾生",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 102,
    content: "君不见昔时燕家重郭隗，拥彗折节无嫌猜",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 103,
    content: "剧辛乐毅感恩分，输肝剖胆效英才",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 104,
    content: "昭王白骨萦蔓草，谁人更扫黄金台？",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 105,
    content: "行路难，归去来！",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 106,
    content: "有耳莫洗颍川水，有口莫食首阳蕨",
    author: "李白",
    source: "行路难·"
  },
  {
    id: 107,
    content: "含光混世贵无名，何用孤高比云月？",
    author: "李白",
    source: "行路难·"
  }
];

export default quotes;
