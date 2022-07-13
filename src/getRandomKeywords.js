//风雪天钻工作室[Dsky Snowy Studio©2020]版权所有
//制作时间2020年6月27日
//作者风雪叶钻.
const ls = [{
        "ordinary": "汤圆",
        "undercover": "丸子",
        "type": "食物"
    },
    {
        "ordinary": "哈密瓜",
        "undercover": "西瓜",
        "type": "食物"
    },
    {
        "ordinary": "汉堡包",
        "undercover": "肉夹馍",
        "type": "食物"
    },
    {
        "ordinary": "牛奶",
        "undercover": "豆浆",
        "type": "食物"
    },
    {
        "ordinary": "白菜",
        "undercover": "生菜",
        "type": "食物"
    },
    {
        "ordinary": "辣椒",
        "undercover": "芥末",
        "type": "食物"
    },
    {
        "ordinary": "烤肉",
        "undercover": "涮肉",
        "type": "食物"
    },
    {
        "ordinary": "橙子",
        "undercover": "橘子",
        "type": "食物"
    },
    {
        "ordinary": "葡萄",
        "undercover": "提子",
        "type": "食物"
    },
    {
        "ordinary": "蝴蝶",
        "undercover": "蜜蜂",
        "type": "食物"
    },
    {
        "ordinary": "纸巾",
        "undercover": "手帕",
        "type": "生活"
    },
    {
        "ordinary": "公交",
        "undercover": "地铁",
        "type": "生活"
    },
    {
        "ordinary": "童话",
        "undercover": "神话",
        "type": "影视"
    },
    {
        "ordinary": "面包",
        "undercover": "蛋糕",
        "type": "食物"
    },
    {
        "ordinary": "警察",
        "undercover": "捕快",
        "type": "生活"
    },
    {
        "ordinary": "结婚",
        "undercover": "订婚",
        "type": "生活"
    },
    {
        "ordinary": "魔术师",
        "undercover": "魔法师",
        "type": "影视"
    },
    {
        "ordinary": "双胞胎",
        "undercover": "龙凤胎",
        "type": "生活"
    },
    {
        "ordinary": "图书馆",
        "undercover": "图书店",
        "type": "生活"
    },
    {
        "ordinary": "牛肉干",
        "undercover": "猪肉脯",
        "type": "食物"
    },
    {
        "ordinary": "蜘蛛侠",
        "undercover": "蝙蝠侠",
        "type": "动漫"
    },
    {
        "ordinary": "包青天",
        "undercover": "狄仁杰",
        "type": "影视"
    },
    {
        "ordinary": "洗发露",
        "undercover": "护发素",
        "type": "生活"
    },
    {
        "ordinary": "自行车",
        "undercover": "电动车",
        "type": "生活"
    },
    {
        "ordinary": "神雕侠侣",
        "undercover": "天龙八部",
        "type": "影视"
    },
    {
        "ordinary": "麻婆豆腐",
        "undercover": "皮蛋豆腐",
        "type": "食物"
    },
    {
        "ordinary": "语无伦次",
        "undercover": "词不达意",
        "type": "成语"
    },
    {
        "ordinary": "风扇",
        "undercover": "空调",
        "type": "生活"
    },
    {
        "ordinary": "玻璃",
        "undercover": "镜子",
        "type": "生活"
    },
    {
        "ordinary": "白菜",
        "undercover": "生菜",
        "type": "食物"
    },
    {
        "ordinary": "包子",
        "undercover": "饺子",
        "type": "食物"
    },
    {
        "ordinary": "被子",
        "undercover": "床单",
        "type": "生活"
    },
    {
        "ordinary": "壁纸",
        "undercover": "贴画",
        "type": "生活"
    },
    {
        "ordinary": "风扇",
        "undercover": "空调",
        "type": "生活"
    },
    {
        "ordinary": "饼干",
        "undercover": "薯片",
        "type": "食物"
    },
    {
        "ordinary": "玻璃",
        "undercover": "镜子",
        "type": "生活"
    },
    {
        "ordinary": "纸巾",
        "undercover": "湿巾",
        "type": "生活"
    },
    {
        "ordinary": "唇膏",
        "undercover": "口红",
        "type": "生活"
    },
    {
        "ordinary": "电脑",
        "undercover": "ipad",
        "type": "生活"
    },
    {
        "ordinary": "动物",
        "undercover": "植物",
        "type": "生活"
    },
    {
        "ordinary": "豆浆",
        "undercover": "牛奶",
        "type": "食物"
    },
    {
        "ordinary": "新年",
        "undercover": "跨年",
        "type": "生活"
    },
    {
        "ordinary": "吉他",
        "undercover": "琵琶",
        "type": "生活"
    },
    {
        "ordinary": "玫瑰",
        "undercover": "月季",
        "type": "生活"
    },
    {
        "ordinary": "董永",
        "undercover": "许仙",
        "type": "影视"
    },
    {
        "ordinary": "谢娜",
        "undercover": "李湘",
        "type": "明星"
    },
    {
        "ordinary": "保安",
        "undercover": "保镖",
        "type": "生活"
    },
    {
        "ordinary": "辣椒",
        "undercover": "芥末",
        "type": "食物"
    },
    {
        "ordinary": "金庸",
        "undercover": "古龙",
        "type": "影视"
    },
    {
        "ordinary": "赵敏",
        "undercover": "黄蓉",
        "type": "影视"
    },
    {
        "ordinary": "海豚",
        "undercover": "海狮",
        "type": "动物"
    },
    {
        "ordinary": "水盆",
        "undercover": "水桶",
        "type": "生活"
    },
    {
        "ordinary": "唇膏",
        "undercover": "口红",
        "type": "生活"
    },
    {
        "ordinary": "烤肉",
        "undercover": "涮肉",
        "type": "食物"
    },
    {
        "ordinary": "气泡",
        "undercover": "水泡",
        "type": "生活"
    },
    {
        "ordinary": "纸巾",
        "undercover": "手帕",
        "type": "生活"
    },
    {
        "ordinary": "杭州",
        "undercover": "苏州",
        "type": "生活"
    },
    {
        "ordinary": "蝴蝶",
        "undercover": "蜜蜂",
        "type": "动物"
    },
    {
        "ordinary": "小品",
        "undercover": "话剧",
        "type": "生活"
    },
    {
        "ordinary": "胡子",
        "undercover": "眉毛",
        "type": "生活"
    },
    {
        "ordinary": "作家",
        "undercover": "编剧",
        "type": "影视"
    },
    {
        "ordinary": "奖牌",
        "undercover": "金牌",
        "type": "生活"
    },
    {
        "ordinary": "面包",
        "undercover": "蛋糕",
        "type": "食物"
    },
    {
        "ordinary": "作文",
        "undercover": "论文",
        "type": "生活"
    },
    {
        "ordinary": "油条",
        "undercover": "麻花",
        "type": "食物"
    },
    {
        "ordinary": "枕头",
        "undercover": "抱枕",
        "type": "生活"
    },
    {
        "ordinary": "手机",
        "undercover": "座机",
        "type": "生活"
    },
    {
        "ordinary": "同学",
        "undercover": "同桌",
        "type": "生活"
    },
    {
        "ordinary": "婚纱",
        "undercover": "喜服",
        "type": "生活"
    },
    {
        "ordinary": "菠萝蜜",
        "undercover": "榴莲",
        "type": "食物"
    },
    {
        "ordinary": "鸭舌帽",
        "undercover": "遮阳帽",
        "type": "生活"
    },
    {
        "ordinary": "双胞胎",
        "undercover": "龙凤胎",
        "type": "生活"
    },
    {
        "ordinary": "情人节",
        "undercover": "光棍节",
        "type": "生活"
    },
    {
        "ordinary": "丑小鸭",
        "undercover": "灰姑娘",
        "type": "生活"
    },
    {
        "ordinary": "土豆粉",
        "undercover": "酸辣粉",
        "type": "食物"
    },
    {
        "ordinary": "蜘蛛侠",
        "undercover": "蝙蝠侠",
        "type": "动漫"
    },
    {
        "ordinary": "口香糖",
        "undercover": "木糖醇",
        "type": "食物"
    },
    {
        "ordinary": "酸菜鱼",
        "undercover": "水煮鱼",
        "type": "食物"
    },
    {
        "ordinary": "小笼包",
        "undercover": "灌汤包",
        "type": "食物"
    },
    {
        "ordinary": "生活费",
        "undercover": "零花钱",
        "type": "生活"
    },
    {
        "ordinary": "麦克风",
        "undercover": "扩音器",
        "type": "生活"
    },
    {
        "ordinary": "图书馆",
        "undercover": "图书店",
        "type": "生活"
    },
    {
        "ordinary": "洗衣粉",
        "undercover": "皂角粉",
        "type": "生活"
    },
    {
        "ordinary": "牛肉干",
        "undercover": "猪肉脯",
        "type": "食物"
    },
    {
        "ordinary": "泡泡糖",
        "undercover": "棒棒糖",
        "type": "生活"
    },
    {
        "ordinary": "刘诗诗",
        "undercover": "刘亦菲",
        "type": "明星"
    },
    {
        "ordinary": "甄子丹",
        "undercover": "李连杰",
        "type": "明星"
    },
    {
        "ordinary": "包青天",
        "undercover": "狄仁杰",
        "type": "影视"
    },
    {
        "ordinary": "果粒橙",
        "undercover": "鲜橙多",
        "type": "食物"
    },
    {
        "ordinary": "自行车",
        "undercover": "电动车",
        "type": "生活"
    },
    {
        "ordinary": "铁观音",
        "undercover": "碧螺春",
        "type": "生活"
    },
    {
        "ordinary": "流星花园",
        "undercover": "花样男子",
        "type": "影视"
    },
    {
        "ordinary": "勇往直前",
        "undercover": "全力以赴",
        "type": "成语"
    },
    {
        "ordinary": "鼠目寸光",
        "undercover": "井底之蛙",
        "type": "成语"
    },
    {
        "ordinary": "近视眼镜",
        "undercover": "隐形眼镜",
        "type": "生活"
    },
    {
        "ordinary": "鹅毛",
        "undercover": "鸡毛",
        "type": "生活"
    },
    {
        "ordinary": "盒子",
        "undercover": "箱子",
        "type": "生活"
    },
    {
        "ordinary": "蝴蝶",
        "undercover": "蜜蜂",
        "type": "动物"
    },
    {
        "ordinary": "皇帝",
        "undercover": "太子",
        "type": "生活"
    },
    {
        "ordinary": "婚纱",
        "undercover": "喜服",
        "type": "生活"
    },
    {
        "ordinary": "鸡蛋",
        "undercover": "鸭蛋",
        "type": "食物"
    },
    {
        "ordinary": "卷发",
        "undercover": "直发",
        "type": "食物"
    },
    {
        "ordinary": "烤肉",
        "undercover": "涮肉",
        "type": "食物"
    },
    {
        "ordinary": "辣椒",
        "undercover": "芥末",
        "type": "食物"
    },
    {
        "ordinary": "楼梯",
        "undercover": "电梯",
        "type": "生活"
    },
    {
        "ordinary": "绿茶",
        "undercover": "苦茶",
        "type": "生活"
    },
    {
        "ordinary": "端午节",
        "undercover": "中秋节",
        "type": "生活"
    },
    {
        "ordinary": "饭桶",
        "undercover": "饭碗",
        "type": "生活"
    },
    {
        "ordinary": "干洗机",
        "undercover": "甩干机",
        "type": "生活"
    },
    {
        "ordinary": "钢笔",
        "undercover": "中性笔",
        "type": "生活"
    },
    {
        "ordinary": "高跟鞋",
        "undercover": "增高鞋",
        "type": "生活"
    },
    {
        "ordinary": "公交",
        "undercover": "地铁",
        "type": "交通工具"
    },
    {
        "ordinary": "宫锁心玉",
        "undercover": "宫锁珠帘",
        "type": "影视"
    },
    {
        "ordinary": "冠军",
        "undercover": "第一",
        "type": "生活"
    },
    {
        "ordinary": "海豚",
        "undercover": "海狮",
        "type": "动物"
    },
    {
        "ordinary": "汉堡包",
        "undercover": "肉夹馍",
        "type": "食物"
    },
    {
        "ordinary": "脚踏车",
        "undercover": "自行车",
        "type": "交通工具"
    },
    {
        "ordinary": "老佛爷",
        "undercover": "老天爷",
        "type": "生活"
    },
    {
        "ordinary": "两小无猜",
        "undercover": "青梅竹马",
        "type": "生活"
    },
    {
        "ordinary": "浴缸",
        "undercover": "鱼缸",
        "type": "生活"
    },
    {
        "ordinary": "电动车",
        "undercover": "摩托车",
        "type": "交通工具"
    },
    {
        "ordinary": "眉毛",
        "undercover": "睫毛",
        "type": "生活"
    },
    {
        "ordinary": "书",
        "undercover": "本",
        "type": "生活"
    },
    {
        "ordinary": "筷子",
        "undercover": "竹签",
        "type": "生活"
    },
    {
        "ordinary": "麻雀",
        "undercover": "乌鸦",
        "type": "动物"
    },
    {
        "ordinary": "火车",
        "undercover": "轮船",
        "type": "交通工具"
    },
    {
        "ordinary": "镜子",
        "undercover": "玻璃",
        "type": "生活"
    },
    {
        "ordinary": "手",
        "undercover": "脚",
        "type": "生活"
    },
    {
        "ordinary": "笤帚",
        "undercover": "拖把",
        "type": "生活"
    },
    {
        "ordinary": "铅笔带",
        "undercover": "铅笔盒",
        "type": "生活"
    },
    {
        "ordinary": "那英",
        "undercover": "王菲",
        "type": "明星"
    },
    {
        "ordinary": "盗墓笔记",
        "undercover": "鬼吹灯",
        "type": "影视"
    },
    {
        "ordinary": "散文",
        "undercover": "小说",
        "type": "生活"
    },
    {
        "ordinary": "树枝",
        "undercover": "树干",
        "type": "生活"
    },
    {
        "ordinary": "可口可乐",
        "undercover": "百事",
        "type": "生活"
    },
    {
        "ordinary": "加多宝",
        "undercover": "王老吉",
        "type": "生活"
    },
    {
        "ordinary": "内奸",
        "undercover": "卧底",
        "type": "游戏"
    },
    {
        "ordinary": "海飞丝",
        "undercover": "潘婷",
        "type": "生活"
    },
    {
        "ordinary": "土豆",
        "undercover": "地瓜",
        "type": "食物"
    },
    {
        "ordinary": "本田",
        "undercover": "丰田",
        "type": "交通工具"
    },
    {
        "ordinary": "眉毛",
        "undercover": "睫毛",
        "type": "游戏"
    },
    {
        "ordinary": "和尚",
        "undercover": "尼姑",
        "type": "游戏"
    },
    {
        "ordinary": "肯德基",
        "undercover": "麦当劳",
        "type": "食物"
    },
    {
        "ordinary": "土豆",
        "undercover": "番茄",
        "type": "食物"
    },
    {
        "ordinary": "麦克风",
        "undercover": "音响",
        "type": "生活"
    },
    {
        "ordinary": "熊猫",
        "undercover": "灰熊",
        "type": "生活"
    },
    {
        "ordinary": "矿泉水",
        "undercover": "白开水",
        "type": "生活"
    },
    {
        "ordinary": "抗日战争",
        "undercover": "鸦片战争",
        "type": "生活"
    },
    {
        "ordinary": "天天飞车",
        "undercover": "天天炫舞",
        "type": "游戏"
    },
    {
        "ordinary": "网络游戏",
        "undercover": "手机游戏",
        "type": "游戏"
    },
    {
        "ordinary": "团灭",
        "undercover": "五杀",
        "type": "游戏"
    },
    {
        "ordinary": "叫地主",
        "undercover": "斗地主",
        "type": "游戏"
    },
    {
        "ordinary": "玩电脑",
        "undercover": "玩手机",
        "type": "游戏"
    },
    {
        "ordinary": "道具",
        "undercover": "装备",
        "type": "游戏"
    },
    {
        "ordinary": "斗地主",
        "undercover": "麻将",
        "type": "游戏"
    },
    {
        "ordinary": "消消看",
        "undercover": "连连看",
        "type": "游戏"
    },
    {
        "ordinary": "子弹",
        "undercover": "炸弹",
        "type": "游戏"
    },
    {
        "ordinary": "捉迷藏",
        "undercover": "丢手绢",
        "type": "游戏"
    },
    {
        "ordinary": "剑魂",
        "undercover": "剑圣",
        "type": "游戏"
    },
    {
        "ordinary": "三国杀",
        "undercover": "诸葛连弩",
        "type": "游戏"
    },
    {
        "ordinary": "台式电脑",
        "undercover": "笔记本",
        "type": "游戏"
    },
    {
        "ordinary": "飞车",
        "undercover": "赛车",
        "type": "游戏"
    },
    {
        "ordinary": "魔抗",
        "undercover": "魔免",
        "type": "游戏"
    },
    {
        "ordinary": "物品",
        "undercover": "道具",
        "type": "游戏"
    },
    {
        "ordinary": "审判天使",
        "undercover": "堕落天使",
        "type": "游戏"
    },
    {
        "ordinary": "法攻",
        "undercover": "物攻",
        "type": "游戏"
    },
    {
        "ordinary": "必杀技",
        "undercover": "大招",
        "type": "游戏"
    },
    {
        "ordinary": "暴走",
        "undercover": "酷跑",
        "type": "游戏"
    },
    {
        "ordinary": "全民突击",
        "undercover": "穿越火线",
        "type": "游戏"
    },
    {
        "ordinary": "大富翁",
        "undercover": "斗地主",
        "type": "游戏"
    },
    {
        "ordinary": "炸酱面",
        "undercover": "担担面",
        "type": "食物"
    },
    {
        "ordinary": "跨年",
        "undercover": "春晚",
        "type": "生活"
    },
    {
        "ordinary": "爷爷",
        "undercover": "姥爷",
        "type": "生活"
    },
    {
        "ordinary": "电影",
        "undercover": "电视",
        "type": "生活"
    },
    {
        "ordinary": "粉丝",
        "undercover": "米线",
        "type": "食物"
    },
    {
        "ordinary": "镜子",
        "undercover": "玻璃",
        "type": "生活"
    },
    {
        "ordinary": "蒙牛",
        "undercover": "伊利",
        "type": "食物"
    },
    {
        "ordinary": "薰衣草",
        "undercover": "满天星",
        "type": "生活"
    },
    {
        "ordinary": "臭豆腐",
        "undercover": "豆腐",
        "type": "食物"
    },
    {
        "ordinary": "榨菜",
        "undercover": "泡菜",
        "type": "食物"
    },
    {
        "ordinary": "食用油",
        "undercover": "花生油",
        "type": "生活"
    },
    {
        "ordinary": "红烧排骨",
        "undercover": "红烧牛肉",
        "type": "食物"
    },
    {
        "ordinary": "皮甲",
        "undercover": "皮包",
        "type": "生活"
    },
    {
        "ordinary": "保暖靴",
        "undercover": "雪地靴",
        "type": "生活"
    },
    {
        "ordinary": "QQ糖",
        "undercover": "棉花糖",
        "type": "食物"
    },
    {
        "ordinary": "客厅",
        "undercover": "餐厅",
        "type": "生活"
    },
    {
        "ordinary": "牛肉堡",
        "undercover": "鸡腿堡",
        "type": "生活"
    },
    {
        "ordinary": "教授",
        "undercover": "校长",
        "type": "生活"
    },
    {
        "ordinary": "小妹妹",
        "undercover": "小姑娘",
        "type": "生活"
    },
    {
        "ordinary": "面膜",
        "undercover": "手膜",
        "type": "生活"
    },
    {
        "ordinary": "温泉",
        "undercover": "浴室",
        "type": "生活"
    },
    {
        "ordinary": "板砖",
        "undercover": "瓷砖",
        "type": "生活"
    },
    {
        "ordinary": "蒸鱼",
        "undercover": "水煮鱼",
        "type": "食物"
    },
    {
        "ordinary": "辣翅",
        "undercover": "烤翅",
        "type": "生活"
    },
    {
        "ordinary": "玉米肠",
        "undercover": "火腿肠",
        "type": "生活"
    },
    {
        "ordinary": "东坡肉",
        "undercover": "酱肘子",
        "type": "生活"
    },
    {
        "ordinary": "调和油",
        "undercover": "橄榄油",
        "type": "生活"
    },
    {
        "ordinary": "水饺",
        "undercover": "蒸饺",
        "type": "食物"
    },
    {
        "ordinary": "太阳伞",
        "undercover": "雨伞",
        "type": "生活"
    },
    {
        "ordinary": "罐子",
        "undercover": "坛子",
        "type": "生活"
    },
    {
        "ordinary": "雷公",
        "undercover": "电母",
        "type": "动漫"
    },
    {
        "ordinary": "鸣人",
        "undercover": "佐助",
        "type": "动漫"
    },
    {
        "ordinary": "胡巴",
        "undercover": "大白",
        "type": "动漫"
    },
    {
        "ordinary": "奥特曼",
        "undercover": "迪迦",
        "type": "动漫"
    },
    {
        "ordinary": "炼丹",
        "undercover": "炼金",
        "type": "动漫"
    },
    {
        "ordinary": "恶魔",
        "undercover": "魔女",
        "type": "动漫"
    },
    {
        "ordinary": "公园",
        "undercover": "广场",
        "type": "旅行"
    },
    {
        "ordinary": "三亚",
        "undercover": "马尔代夫",
        "type": "旅行"
    },
    {
        "ordinary": "操场",
        "undercover": "广场",
        "type": "旅行"
    },
    {
        "ordinary": "西双版纳",
        "undercover": "马来西亚",
        "type": "旅行"
    },
    {
        "ordinary": "乌鲁木齐",
        "undercover": "吐鲁番",
        "type": "旅行"
    }
]

exports.getRandomKeywords = function() {
    var index = Math.floor(Math.random() * (ls.length + 1));
    var kw = ls[index];
    return kw
}