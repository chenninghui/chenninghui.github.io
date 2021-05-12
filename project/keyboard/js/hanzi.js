
// 数组中随机取
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

var inputText = document.getElementById("inputText");
var tips = document.getElementById("tips");

var myLetters = document.getElementById("myLetters");
var str = '的一是了我不人在他有这个上们来到时大地为子中你说生国年着就那和要她出也得里后自以会家可下而过天去能对小多然于心学么之都好看起发当没成只如事把还用第样道想作种开美总从无情己面最女但现前些所同日手又行意动方期它头经长儿回位分爱老因很给名法间斯知世什两次使身者被高已亲其进此话常与活正感见明问力理尔点文几定本公特做外孩相西果走将月十实向声车全信重三机工物气每并别真打太新比才便夫再书部水像眼等体却加电主界门利海受听表德少克代员许稜先口由死安写性马光白或住难望教命花结乐色更拉东神记处让母父应直字场平报友关放至张认接告入笑内英军候民岁往何度山觉路带万男边风解叫任金快原吃妈变通师立象数四失满战远格士音轻目条呢病始达深完今提求清王化空业思切怎非找片罗钱紶吗语元喜曾离飞科言干流欢约各即指合反题必该论交终林请医晚制球决窢传画保读运及则房早院量苦火布品近坐产答星精视五连司巴奇管类未朋且婚台夜青北队久乎越观落尽形影红爸百令周吧识步希亚术留市半热送兴造谈容极随演收首根讲整式取照办强石古华諣拿计您装似足双妻尼转诉米称丽客南领节衣站黑刻统断福城故历惊脸选包紧争另建维绝树系伤示愿持千史谁准联妇纪基买志静阿诗独复痛消社算算义竟确酒需单治卡幸兰念举仅钟怕共毛句息功官待究跟穿室易游程号居考突皮哪费倒价图具刚脑永歌响商礼细专黄块脚味灵改据般破引食仍存众注笔甚某沉血备习校默务土微娘须试怀料调广蜖苏显赛查密议底列富梦错座参八除跑亮假印设线温虽掉京初养香停际致阳纸李纳验助激够严证帝饭忘趣支春集丈木研班普导顿睡展跳获艺六波察群皇段急庭创区奥器谢弟店否害草排背止组州朝封睛板角况曲馆育忙质河续哥呼若推境遇雨标姐充围案伦护冷警贝著雪索剧啊船险烟依斗值帮汉慢佛肯闻唱沙局伯族低玩资屋击速顾泪洲团圣旁堂兵七露园牛哭旅街劳型烈姑陈莫鱼异抱宝权鲁简态级票怪祖云规窗散迷油旧适乡架恩投弹铁博雷府压超负勒杂醒洗采毫嘴毕九冰既状乱景席珍童顶派素脱农疑练野按犯拍征坏骨余承置臓彩灯巨琴免环姆暗换技翻束增忍餐洛塞缺忆判欧层付阵玛批岛项狗休懂武革良恶恋委拥娜妙探呀营退摇弄桌熟诺宣银势奖宫忽套康供优课鸟喊降夏困刘罪亡鞋健模败伴守挥鲜财孤枪禁恐伙杰迹妹藸遍盖副坦牌江顺秋萨菜划授归浪听凡预奶雄升碃编典袋莱含盛济蒙棋端腿招释介烧误';
var hanziArrs =str.split("");
var sound = document.getElementById("audio");
var resultBox = document.getElementById("resultBox");

// 总字数
var hanziLength = localStorage.getItem("hanziLength")||30;
var maxl = hanziLength;
var oldLetterArr =  getRandomArrayElements(hanziArrs, maxl);
// 输入时间集合
var times = [];
var letterNum = document.getElementById("letterNum");
var separateBox = document.getElementsByClassName("separateBox")[0];
window.onload = function(){
    letterNum.innerHTML = maxl;
    inputText.setAttribute("maxlength",maxl);
    inputText.setAttribute("rows",Math.ceil(maxl/30));
    inputText.setAttribute("οnchange",'this.value=this.value.substring(0, '+maxl+')');
    inputText.setAttribute("οnkeyup",'this.value=this.value.substring(0, '+maxl+')');
    inputText.setAttribute("οnkeydown",'this.value=this.value.substring(0, '+maxl+')');
    var rows = Math.ceil(maxl/30);
    for(var i=0;i<rows;i++){
        separateBox.innerHTML+='<div></div>'
    }

    for(var i=0;i<oldLetterArr.length;i++){
        testLetter.innerHTML += '<span class="old">'+oldLetterArr[i]+'</span>'
    }
}

var oldSpans = document.getElementsByClassName("old");
var newLetterArr;
var resultBtn = document.getElementById("resultBtn");

function showResult(){
    resultBtn.style.display = "none";
    startBtn.style.display = "none";
    tips.style.color = 'green';
    tips.style.borderRadius = '30px';
    tips.style.boxShadow = 'inset 0 0 30px green';
    clearInterval(checkOver);
    clearInterval(timer);
    var str = inputText.value;
    newLettersArr = str.split("");
    for(var i=0;i<newLettersArr.length;i++){ 
        myLetters.innerHTML += '<span class="new">'+newLettersArr[i]+'</span>'
    }
    inputText.style.display = "none";
    myLetters.style.display = "block";
    var newSpans = document.getElementsByClassName("new");

    for(var j=0;j<oldLetterArr.length;j++){
        if(newLettersArr[j]!==oldLetterArr[j]){
            oldSpans[j].setAttribute("class","old err");
            newSpans[j].setAttribute("class","new err");
        }else{
            oldSpans[j].setAttribute("class","old right");
            newSpans[j].setAttribute("class","new right");
        }
    }
}

// 刷新
function reload(){
    window.location.reload();
}

var popup = document.getElementById("popup");
var textNum = document.getElementById("textNum");
var nextOpen = document.getElementById("nextOpen");
var nextClose = document.getElementById("nextClose");
var setTips = document.getElementById("setTips");

function newSetup(){
    popup.style.display = "block";
    textNum.value = localStorage.getItem("hanziLength")||20;
    
}
function closePop(){
    if(textNum.value>19&&textNum.value<=500){
        localStorage.setItem("hanziLength",parseInt(textNum.value));
        
        var num = localStorage.getItem("hanziLength")||30;
        inputText.setAttribute("maxlength",maxl);
        inputText.setAttribute("οnchange",'this.value=this.value.substring(0, '+num+')');
        inputText.setAttribute("οnkeyup",'this.value=this.value.substring(0, '+num+')');
        inputText.setAttribute("οnkeydown",'this.value=this.value.substring(0, '+num+')');
        popup.style.display = "none";
        window.location.reload();
    }else{
        textNum.value= 0;
        setTips.innerHTML = '<span style="color:red;margin-top:30px;">请输入20-500之间的整数</span>'
        popup.style.display = "block";
    }
    
}