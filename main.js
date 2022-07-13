const ws = require("nodejs-websocket");
const app = require("express")();
// const router = require("./src/router.js")
const getRandomKeywords = require("./src/getRandomKeywords.js")

console.log("server running...");

var allConn = [] //所有的连接
var preparationPlayer = [] //所有准备的玩家的名字
var maxPlayer = 3; //玩家数到达这个数即开始

var undercoverName = ""; //卧底名
var ordinaryName = []; //非卧底名

var voteEle = [] //玩家列表和投票数
var voteTimes = 0; //一共有多少位玩家投了票

const server = ws.createServer((conn) => {
    //
    conn.on("text", (e) => {
        //
        console.log(e);
        console.log(allConn);
        var data = JSON.parse(e)
        switch (data.Type) {
            case "message": //有玩家发送消息
                sendMessage(e)
                break;
            case "joined": //有玩家加入
                sendAllConn(data.Name)
                break;
            case "preparation": //有玩家准备
                preparation(data);
                break;
            case "Vote": //有玩家投票
                voteHandler(data)
                break;
        }
    })
    conn.on("error", () => {});
    conn.on("close", () => {});
}).listen(10150);

function sendMessage(e) { //广播信息
    server.connections.forEach((conn) => {
        conn.sendText(e);
    })
}
//发新链接当前所有玩家列表
function sendAllConn(name) {
    //更新玩家列表部分
    console.log(allConn);
    allConn.push(name)
    var obj = {
        Type: "getAllConn",
        Conn: allConn,
        Name: "Server"
    }
    console.log(obj);
    server.connections.forEach((conn) => {
        conn.sendText(JSON.stringify(obj));
    })

    //初始化玩家投票对象
    var voteObj = {
        "name": name,
        "voteAmont": 0
    }
    voteEle.push(voteObj);
    console.log(voteEle);
}
//有玩家准备
function preparation(data) {
    //Send Message
    var name = data.Name;
    var message = data.Message;
    preparationPlayer.push(name);
    var preMessage = {
        "Type": "serverMessage",
        "Info": "preparation",
        "Message": message,
        "Name": name
    }
    server.connections.forEach((conn) => { conn.sendText(JSON.stringify(preMessage)) })
        //Game Start
    if (preparationPlayer.length == maxPlayer) {
        var mes = {
            "Type": "serverMessage",
            "Info": "startGame",
            "Message": "游戏开始",
            "Name": "<Server>"
        }
        server.connections.forEach((conn) => { conn.sendText(JSON.stringify(mes)) })
        sendKeyWords()
    }
}
//向玩家发送关键词
function sendKeyWords() {
    //向客户端发送关键字
    //获取关键字
    var kw = getRandomKeywords.getRandomKeywords()

    var kwType = kw.type //类型
    var ucKw = kw.undercover //卧底词
    var orKw = kw.ordinary //非卧底词

    //选出卧底玩家
    ucIndex = getRandomNumber(0, preparationPlayer.length - 1)
    undercoverName = preparationPlayer[ucIndex];

    //根据卧底名索引筛选剩余玩家进入非卧底数组
    for (let i = 0; i <= preparationPlayer.length - 1; i++) {
        //当i不为卧底的索引值时，即该玩家不为卧底
        if (i != ucIndex) {
            //把该玩家列入普通玩家列表
            ordinaryName.push(preparationPlayer[i])
        }
    }

    //结构化对象
    var obj = {
            Type: "serverMessage",
            Info: "sendKw",
            KwType: kwType,
            Ordinarykw: orKw,
            OrdinaryName: ordinaryName,
            Undercoverkw: ucKw,
            UndercoverName: undercoverName
        }
        //发送给所有连接的客户端
    server.connections.forEach((conn) => { conn.sendText(JSON.stringify(obj)) })
}
//处理投票事件
function voteHandler(data) {
    voteTimes = voteTimes + 1;
    var voteName = data.VoteName;
    voteEle.forEach((ele) => {
        //遍历voteEle获取被投票的对象
        if (ele.name == voteName) {
            ele.voteAmont += 1;
        }
    })
    var canEnd = voteTimes == maxPlayer;
    //如果所有人都投票完成
    if (canEnd) {
        //结算投票信息，并获取其中(voteAmont)最大值
        var maxIndex;
        let maxValue = 0;
        for (let i = 0; i < voteEle.length; i++) {
            // i: 对象索引值(下标), voteEle[i]:当前选中的对象
            if (voteEle[i].voteAmont > maxValue) {
                maxValue = voteEle[i].voteAmont;
                maxIndex = i;
            }
            // console.log(typeof voteEle[i]);
        }
        var playerPassed = voteEle[maxIndex]; //被淘汰的玩家
        sendPassedMes(playerPassed);
    }
}
//向指定玩家发送淘汰消息
function sendPassedMes(data) {
    //data: Object
    var passedName = data.name;
    // console.log("data: " + data);
    var obj = {
        "Type": "passed",
        "PassedName": passedName,
        "UndercoverName": undercoverName,
        "OrdinaryName": ordinaryName
    }
    server.connections.forEach((conn) => {
        conn.sendText(JSON.stringify(obj))
    })
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
app.get("/canEnter", (req, res) => {
    if (allConn.length == maxPlayer) {
        res.send("Failed")
        return
    }
    res.send("Successful");
}).listen(10151);