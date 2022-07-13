//叶桃工作室版权所有
//制作时间2020年6月27日
//作者叶钻.
const ls = [
        /**你自己的关键词
          * {
          *     "ordinary": "",
          *     "undercover": "",
          *     "type": ""
          * }
          */
]

exports.getRandomKeywords = function() {
    var index = Math.floor(Math.random() * (ls.length + 1));
    var kw = ls[index];
    return kw
}
