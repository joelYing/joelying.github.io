---
title: a-word
date: 2019-08-24 16:06:15
layout: false
---
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>言 · 一</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.css"/>
<!-- 在使用字蛛压缩时需要将下一条font-awesome，以及Google font的三条注释，否则报错 -->
<!-- 还有一点，以后注意此页面更新后，字蛛能否自动更新，并压缩新添加的文字 -->
<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
<!-- <link rel="stylesheet" type="text/css" href="http://image.joelyings.com/aword.css" /> -->

<!-- Google font -->
<link href="https://fonts.googleapis.com/css?family=Noto+Serif+SC&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Zhi+Mang+Xing&display=swap" rel="stylesheet">
<!-- font-family: 'ZCOOL XiaoWei', serif; -->
<!-- font-family: 'Zhi Mang Xing', cursive; -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.js"></script>

<!-- 夜间模式 -->
<!-- <script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.4.0/lib/darkmode-js.min.js"></script> -->
<!-- 夜间模式 -->

<!-- 有字库 -->
<!-- <script type="text/javascript" src="http://cdn.repository.webfont.com/wwwroot/js/wf/youziku.api.min.js"></script>

<script type="text/javascript">
   $webfont.load(".aword", "ac0bb6d6e9a34f749410cdabb5d85cf1", "TSSunOld");
   $webfont.load(".aword-by", "ac0bb6d6e9a34f749410cdabb5d85cf1", "TSSunOld");
   /*$webfont.load("#id1,.class1,h1", "ac0bb6d6e9a34f749410cdabb5d85cf1", "TSSunOld");*/
   // $webfont.load(".aword-active", "aa322f4793324e9489db1f729a58fb54", "ChekiangSung");
   /*．．．*/
   $webfont.draw();
</script> -->
<!-- 有字库 -->

<style type="text/css">
/* 字蛛不支持otf */
@font-face {
  font-family: "tsst";
  src: url("../font/tsst.woff2") format("woff2"),
       url("../font/tsst.woff") format("woff"),
       url("../font/tsst.ttf") format("truetype"),
       url("../font/tsst.eot") format("embedded-opentype"),
       url("../font/tsst.svg") format("svg");
       /*url("../font/tsst.otf") format("opentype");*/
}
.text {
	text-align: left;
	display: inline-block;
}
.aword {
	/*font-family: 'Noto Serif SC', serif;*/
	font-family:'tsst';
	/*width: 300px;*/
	/*margin: 50px auto;*/
	/*border: 1px solid red;*/
	line-height: 2;
	text-align: center; /*设置文本水平居中*/
/*	padding: 50px 20px;*/
}
.aword-active {
	font-family: 'Zhi Mang Xing', cursive;
	line-height: 2;
	text-align: center;
	margin-top: 50;
}
.aword-by {
	/*font-family: 'Noto Serif SC', serif;*/
	font-family:'tsst';
	/*margin-left: 1000px;*/
	margin-left: 67%;
	line-height: 3;
	color: #555;
}
.aword-active-by {
	font-family: 'Noto Serif SC', serif;
	line-height: 3;
	color: #555;
    text-align: center;
    margin-top: -20;
}
.aword-p1 {
    text-align: center;
  	width: 500px;
  	margin: 0 auto;
  	margin-top: 250;
}
/*a {
    display: inline-block;
    padding-left: 735px;
    padding-top: 200;
}*/
</style>

<!-- 控制图片旋转 -->
<script>
	var rotateVal = 0 // 旋转角度
	var InterVal // 定时器
	window.onload = function () {
		// 网页加载完成后即运行rotate函数
		rotate()
		// 鼠标悬浮在图片上时，停止旋转，即清除定时器
		document.getElementById('img').onmousemove = function () {
			clearInterval(InterVal)
		}
		// 鼠标离开图片时，继续旋转，即继续运行定时器
		document.getElementById('img').onmouseleave = function () {
			rotate()
		}
	}
	
	// 设置定时器
	function rotate () {
		InterVal = setInterval(function () {
			var img = document.getElementById('img')
			rotateVal += 1
			// 设置旋转属性(顺时针)
			img.style.transform = 'rotate(' + rotateVal + 'deg)'
			// 设置旋转属性(逆时针)
			//img.style.transform = 'rotate(-' + rotateVal + 'deg)'
			// 设置旋转时的动画  匀速0.1s
			img.style.transition = 'linear'
		}, 5) // 数值越小速度越快
	}
</script>
<script>
  new Darkmode().showWidget();
</script>

</head>
<body>
<div id="fullpage">
	<div class="section active">
		<div class="aword-active" style="font-size: 70px">
        人海似海却无岸
    	</div>
    	<div class="aword-active-by" style="font-size: 1px">
        往下翻点击左右两边可能看到更多哦
    	</div>
    	<div class="aword-p1">
    		<img id="img" src="http://image.joelyings.com/%E6%96%B9%E5%90%91%E7%9B%98.png">
    	</div>
	</div>
	<div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我喝过很烈的酒，也放过不该放的手<br>
	        从前不会回头，往后不会将就
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        现在的世道，纯粹，这种美好的事物，越来越少
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 二零二一年一月三十一日
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年一手画圆，不见拍在种桂头顶<br>
	        种桂整个人就陷入地面，头颅和四肢一同炸裂<br>
	        好似给人用大锤砸成了一块肉饼，比起五马分尸还要凄惨
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        仙人抚顶<br>
            可不止是结发受长生一个用处
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        鲜血溅了陆沉一身，可她只是痴然发呆，无动于衷
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她单纯，却不是蠢货<br>
            见微知著，几乎是大族子女的天赋
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年才要再画一圆，让陆沉和种桂做一对亡命鸳鸯共赴黄泉<br>她突然抬头问道：“我想知道你到底跟马贼是不是一伙的，求求你，别骗我。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年摇了摇头<br>
	        她终于心死如灰烬，平静等待
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年也不怜香惜玉，依旧是仙人抚顶的起手式，不过又一次被打搅<br>
	        她冷不丁撕心裂肺哭出声，“我不想死！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年走过去，走了几步距离，她便坐在地上滑退了几步距离<br>
	        徐凤年不再前行，蹲下身，伸出手，“瓷瓶还我。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        还握有小瓶的她烫手般丢出，她情急之下，丢掷得没有准头<br>
	        徐凤年探手一抓，就驭物在手，放回书箱
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆沉好像积攒了二十年的心机城府都在一瞬间爆发出来，声音打颤道<br>
	        “徐公子你要如何才能不杀我？我是南朝甲字陆家的嫡孙女<br>
	        我和种桂不同，没有任何抱负可言，只想好好活着，出嫁以后相夫教子”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “只要公子不杀我，只要不玷污我的身子<br>
	        我便是给你做牛做马半年时间，也心甘情愿<br>
	        而且我许诺，回到陆家，绝不提今日事情半句，只说种桂是死于百人马贼。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        瞧见那名书生模样的男子嘴角勾起，隐约有讥讽意思<br>
	        醒悟有了纰漏的陆沉马上改口说道<br>
	        “只说是种桂某日死在前往西河州持节令府邸的旅程中，我半点不知情！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        说到这里，她秋波起涟漪，熠熠生辉，泛起一股果决<br>
	        咬着嘴唇，缓缓说道：“公子不杀我，我便说是与种桂有过鱼水之欢<br>
	        到时候种家假若不信，让嬷嬷验身，也寻不到破绽。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她言下之意，只要是个男人就明白<br>
	        她是愿意以清白之身做代价，换取活命了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年发出啧啧声，感慨真是天高高不过人心
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆沉见他没有暴起杀人的意思，伸手捋起鬓角一缕散乱青丝，继续说道<br>
	        “小女子也不敢奢望公子一同回到陆家，但既然公子手握把柄<br>
	        我陆家清誉南朝，当然不允许这般天大丑闻流出，更不愿因此惹上种家”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “也就不用担心我不对公子百依百顺，只需远远牵扯<br>
	        陆沉愿意做公子的牵线木偶，相信以公子出类拔萃的身手和心智<br>
	        一定可以找到既能控制陆沉又能不入险地的两全法子。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年要去掏枣子，发现囊中空无一物，缩回手后笑道<br>
	        “你很聪明啊，怎么会被种桂这个纨绔子弟当傻子逗弄？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆沉竟然有胆量笑了笑，自嘲道<br>
	        “不是种桂如何，而是种家底蕴胜过陆家<br>
	        否则一个偏房子弟，如何能与一个甲字嫡孙女称得上门当户对。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年点了点头，深以为然，果然是个有慧根的豪阀女子<br>
	        陆沉刹那间眼神冰冷，咬牙道：“你还是想杀我！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        才起杀意的徐凤年好奇问道：“女子的直觉？”<br>
            她反问道：“难道不是？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        没等徐凤年有所动作，陆沉站起身，疯了一般冲向他，自寻死路<br>
	        一阵毫无章法的拳打脚踢，哭腔可怜<br>
	        “你这个王八蛋，大魔头，我跟你拼了！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她唠唠叨叨，骂人跟打人一个德行<br>
	        翻来覆去就那么几个古板路数，都是不痛不痒
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年一巴掌把她凶狠拍飞出去，直接将其打懵了<br>
	        看着捂着脸的疯女人，说道：“杀不杀你，看你接下来的表现<br>
	        你先埋了种桂，然后跟我一起去西河州腹地，用得着你。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆沉如获大赦，眼神焕发光彩，瞥了一眼种桂的模糊尸体<br>
	        冷笑道：“不收尸才好。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她脸上顿时又挨了一巴掌，整个人都翻了个身<br>
	        重重摔在黄沙地面上，像一只土灰麻雀
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年讥讽道：“男人冷血，指不定走狗屎还能当个枭雄<br>
	        你一个娘们，这么没心没肺的，很讨喜吗？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆沉低下头，两颊各自挨了一耳光的她惊怯温顺道：“我知错了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年以一记仙人抚顶砸出一个大坑，权且当成种桂的坟茔<br>
	        看着她一点一点一块一块将那滩血肉搬入坑内<br>
	        问了一些种家和陆家的事情，她一一作答，并无丝毫掺假
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        间隙时她小心翼翼问道：“是公子杀退了那些马贼？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年没有作声，只是耐心看着她捡回泥土覆盖<br>
	        勉强填平以后，还不忘跳着踩踏，让填埋痕迹不那么明显<br>
	        她安静下来后，歪着脑袋问道<br>
	        “种桂种桂。公子你说，以后这儿会不会长出一棵桂树？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年骂道：“你脑子有病。”<br>
            满身血污的女子竟是敛衽施了一个万福，妩媚横生，笑容说道：“求公子救我。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年扯了扯嘴角，“你真是病入膏肓，失心疯，没救了。”<br>
	        女子孤零零站在坟茔上，只是笑脸凄美<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 女子种桂》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        见这名负笈挂剑的年轻男人仍是练习闭口禅<br>
	        陆沉也不气馁，刨根问底<br>
	        “骑马出行，三十里一停，你难道是北凉人？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年正在给她的马匹刷洗，也不抬头<br>
	        离去放好水囊，翻身上马，继续前行
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        性子执拗起来的陆沉艰辛跟上，并驾齐驱<br>
	        侧头凝视这个满身云遮雾绕的年轻人，痴情女看情郎一般<br>
	        徐凤年终于开口，“改了主意，将你送到安全地方，我就离开。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆沉眼神迷离
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年讥讽道：“前一刻还要死要活，恨不得跟种桂同葬一穴<br>
	        怎么转眼间就连收尸都不乐意了，是你如此，还是你们大姓女子都如此？<br>
	        你这样的，就算收了做通房丫鬟，说不定哪天晚上就给你勒死，睡不安稳。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆沉认真思索片刻，似乎在自省，缓缓回答道<br>
	        “我这辈子最恨别人骗我，我曾经对自己说过<br>
	        以后嫁了谁，这个男人花心也无妨<br>
	        睡了别家女子，但一定要跟我招呼一声，而且不领进家门恶心我”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        <br>
	        “我都会不介意，我会继续持家有道<br>
	        但我若是最后一个知晓他和女子苟合，成了笑话<br>
	        肯定恨不得拿剪刀剪了他子孙根<br>
	        再去画烂那婆娘的整张脸，让她一辈子勾引不了男人！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年笑道：“你长得不像这种女人<br>
	        在吴家遗址初次见你，误以为你挺好相处的<br>
	        是那种受了委屈也不敢回娘家诉苦的小女子。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆沉咬着嘴唇说道：“可我就是这种女人。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年似笑非笑，“我是不是应该直接一巴掌拍烂你的头颅？”<br>
    		她媚眼如丝，“公子可不许如此绝情。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年一笑置之，跟她说话，见她做事，很有意思<br>
	        跟文章喜不平一个道理，总是让人出乎意料
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她察觉到这位徐公子谈兴不错，就顺杆子往上爬，柔声道<br>
	        “我猜公子一定出自武林世家，而不是种桂这类将门子孙<br>
	        因为公子杀人，会愧疚。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年捧腹大笑，“你知道个卵！”<br>
    		她歪着脑袋，一脸天真无邪，问道：“难道我猜错了？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年笑骂道：“少跟我装模作样<br>
	        我见过的漂亮娘子，多到数不过来<br>
	        你的姿色不到七十文，不值一提。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆沉也不计较这份贬低，自言自语道：“我本来就不是好看的女子。”<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        陆沉看到这个动作，笑着从袖中抽出一柄匕首，直白道<br>
	        “本想着找机会一下刺死你的。现在匕首是交给你，还是丢掉？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年头也不转，说道<br>
	        “留着吧，你要是下一个三十里路前还不掏出来<br>
	        你也会跟种桂一样死得不明不白。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆沉开心笑道：“我赌对了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年莫名其妙感慨道：“这个江湖，高手常有，高人不常在。”<br>
    		陆沉问道：“那公子你是高手还是高人？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年摇头道：“做不来高人。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        两人夜宿荒漠，在一处背风山坡坡底歇脚，昼夜温差极大<br>
	        徐凤年拾了许多枯枝丢入火堆，除了悄悄养剑和维持篝火，一夜都在假眠<br>
	        破晓时分，见她还在打瞌睡，就独自走到坡顶，仰望着天色
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        突然间，徐凤年掠回坡脚，眼神复杂盯着那个颤颤巍巍手提匕首的女子<br>
	        她竟是心狠到拿匕首在自己脸上划出了四道血槽，皮开肉绽<br>
	        这得是如何坚韧心性的女子，才做得出这种行径？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        其实以两人心智，心知肚明，每走一步，临近西河州城<br>
	        她极有可能是离黄泉路近了一步，种陆两家不乏城府修炼成精的枭雄角色<br>
	        身负绝学的种桂身死人亡，而她一个弱女子却反常活下<br>
	        想要蒙混过关，继续有一份富贵生活，几乎是不可能的事情
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        连徐凤年都想不到她如何能够编出天衣无缝的理由<br>
	        他嘴上说是要把她送至安全地点，事实上<br>
	        昔日可以为她遮天蔽日的树荫下<br>
	        对姓陆的女子来说，那将会是世间最不安全的险境
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这一对命运无缘无故交织在一起的男女，似乎谁都不是好东西
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        破相以后，说是仇家杀死种桂，再放她生还<br>
	        当成对种陆两家的羞辱<br>
	        她才硬生生从一局死局棋盘上做眼，生出了一气
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        只是这样的手法，对女人而言，是不是代价太大了？<br>
	        是不是太过决绝了？男女皆惜命<br>
	        男子惜命，女子惜容，更是常理
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年当下涌起戾气，几乎有一举杀死她的冲动<br>
	        只是随后缓缓吐出一口浊气，压抑下杀机
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        女子望向眼前那个只知姓不知名的年轻男人，眼神痴呆<br>
	        不是泪流两颊，而是血流满面
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这个曾经自己说自己不好看的女子，视线终于不再涣散，泛起一些泪水
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她噙着泪水，笑着说：“疼。”<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 疼》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        没有敲门，一个客栈伙计就大大咧咧推门而入<br>
	        陆沉连忙抓起头巾，转过头去慌乱裹缠<br>
	        伙计一手端着大木盘，盛放有几样马虎粗糙的伙食
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			他无意间瞅见陆沉的脸庞，吓了一跳，差点被砸翻盘子<br>
			火急火燎放下食物，跑出去才跨过门槛，就大声嚷嚷<br>
			“快来看快来看，屋里有个丑八怪，老子白天见鬼了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			陆沉扯住徐凤年袖口，但徐凤年轻轻一抖<br>
			大步出门，把那个口无遮拦的倒霉虫一脚踢得陷入院墙，生死不知<br>
			回屋后，陆沉黯然道：“我本来就很丑。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年平静道<br>
			“对，是不好看。脸上画花了，好看才怪<br>
			但谁敢说出口，入了我耳朵，我就让他……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她接口道：“去死？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年一本正经道<br>
			“哪能呢，我又不是魔头，向来喜欢以貌服人，实在不行才会以德服人。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			陆沉盯着这个说不清是好人还是坏人的书生<br>
			抿紧嘴唇，似笑非笑，摇头道：“一点都不好笑。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年一笑置之，分发了碗碟餐食，然后埋头狼吞虎咽<br>
			陆沉一手掩面，细嚼慢咽，一幅食不言的淑媛风范<br>
			跟徐凤年同时放下筷子，她犹豫了一下，说道<br>
			“刚才以为你会说些漂亮的言辞来安慰我。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年见她还有剩余饭菜，也不客气，一并搬到眼前，边吃边说道<br>
			“你不是说过最恨别人骗你吗，不管你信不信<br>
			在我眼中，你还是那个秀秀气气的女子<br>
			不好看，但也难看不到哪里去。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			陆沉问道：“当真？”<br>
			徐凤年低头吃饭，点了点头
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			风暴弥漫了小半个下午，逐渐趋于平静，徐凤年推开窗户望去<br>
			天色已经不至于耽误行程，和陆沉走出院子<br>
			触了霉头的客栈伙计已经被抬走，也不见客栈方面有任何寻衅报复
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年在街上帮她购置了一顶帷帽，策马缓行<br>
			兴许是明知终点将至，陆沉言语活泼了几分<br>
			也开始乐意主动询问徐凤年一些江湖轶事
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			从吴家九剑破万骑铺散开了说去，也不存在试探的企图<br>
			一对男女都有意无意淡了心机城府<br>
			陆沉本身也是内里性子跳脱的女子，否则也不至于会单独跟种桂出行游览
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			有聚就有散<br>
			临近州城，驿道宽度已经不输北凉几条主道
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			陆沉望向那座庞然大物一般趴在黄沙上的雄伟城池<br>
			心有惊悸，咬着嘴唇，痴呆出神<br>
			许久，往后望去，想要看一眼那个男子，道别一声也好<br>
			只是却已经不见他踪影
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她笑了笑，看不见人，仍是调转马头，挥了挥手<br>
			远处，看到这一幕的徐凤年慢慢后仰，躺在马背上，叼了一根野草茎
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 挥手》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        生命可以归结为一种简单的选择：要么忙于生存，要么赶着去死
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《肖申克的救赎》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        懦怯囚禁人的灵魂，希望可以感受自由<br>
	        强者自救，圣者渡人
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《肖申克的救赎》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        希望是件美丽的东西，也许是最好的东西<br>
	        美好的东西是永远不会死的
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《肖申克的救赎》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        每个人都是自己的上帝<br>
	        如果你自己都放弃自己了，还有谁会救你？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《肖申克的救赎》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我们一路奋战，不是为了能改变世界，而是为了不让世界改变我们
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《熔炉》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        现实如水母，看似美好无害实质总是致命伤人
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《熔炉》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我们来到世界上，都是孤独的旅行<br>
	        即使身边有人相伴，最终也会各奔东西
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《熔炉》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        世界上最美丽最珍贵的，反而是听不见且看不清的，只有用心才能感受得到
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《熔炉》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人可以不断犯错，但绝不能犯要命的错
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《教父》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        不要憎恨你的敌人，那会影响你的判断力
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《教父》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人并非生来就伟大，而是越活越伟大
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《教父》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人是为了活着本身而活着，而不是为了活着之外的任何事物而活着
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《活着》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        以笑的方式哭，在死亡的伴随下活着
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《活着》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        没有什么比时间更具有说服力了<br>
	        因为时间无需通知我们就可以改变一切
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《活着》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        你的命是爹娘给的，你不要命了也得先去问问他们
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《活着》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        世界上只有一种病，穷病，这种病你没法治，你也治不过来
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《我不是药神》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人间最高贵的是善良，是对生命的致敬
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《我不是药神》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        把手握紧，里面什么也没有<br>
	        把手放开，你得到的是一切
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《指环王》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我宁愿和你共度凡人短暂的一生<br>
	        也不愿一个人看尽这世界的沧海桑田
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《指环王》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        幸福的家庭都是相似的，不幸的家庭各有各的不幸
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《指环王》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        或许有一天，人类变得萎缩懦弱，舍弃朋友，断绝友谊<br>
	        但今天决不会这样
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《指环王》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人生不能像做菜，把所有的材料都准备好了才下锅
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《饮食男女》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        什么叫做“可惜”啊，要心中有个“惜”字儿，才知道可惜
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《饮食男女》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        其实一家人，住在一个屋檐下，照样可以各过各的日子<br>
	        可是从心里产生的那种顾忌，才是一个家之所以为家的意义
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《饮食男女》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        世界上本没有路，有了腿便有了路
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《让子弹飞》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        如果你活着，早晚都会死<br>
	        如果你死了，你就永远活着
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《让子弹飞》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        暴力永远不能取胜，保持尊严，才会赢得真正的胜利
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《绿皮书》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        不管你做什么，都要做到极致，工作就工作，笑就笑<br>
	        吃饭的时候要像是最后一餐那样去享受
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《绿皮书》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这世界上有各种各样的人，恰巧我们成为了朋友<br>
	        这不是缘分，仅仅只是我们本就应该是朋友
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《绿皮书》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        成为天才是不够的，改变人们的想法更需要勇气
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《绿皮书》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        身体可以被禁锢，但自由的信念会永远传递
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《飞越疯人院》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        你们一直抱怨这个地方，但是你们却没有勇气走出这里
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《飞越疯人院》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        世上最美好的是人心，最可怕的也是人心
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《西西里的美丽传说》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人们根本不爱美丽，美丽是不被原谅的，美丽是用来被蹂踊的
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《西西里的美丽传说》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        总有些人，悄悄地来，默默地等<br>
	        如灯照亮了我们的行程，温暖了我们的人生
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《西西里的美丽传说》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        所有的遇见，并非偶然，所有的考验，都有它的意义
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《西西里的美丽传说》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        有些风景，一旦入眼入心，即便刹那，也是永恒
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《西西里的美丽传说》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        出来混，迟早是要还的
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《无间道》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        往往都是事情改变人，人却改变不了事情
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《无间道》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        谁都了解生存往往比命运还残酷，只是没人愿意认输
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《无间道》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        过去就让它过去，明天还要开始啊
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《无间道》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        七宗罪：傲慢、妒忌、暴怒、懒惰、贪婪、贪食、色欲
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《七宗罪》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        逃离地狱之路，长而艰难，离开之后，迎来光明
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《七宗罪》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        冷漠也是一种解决之道<br>
	        沉溺于毒品要比面对人生艰辛容易，偷窃比赚钱容易<br>
	        打小孩比养小孩容易，爱很费心成本昂贵
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《七宗罪》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        要想别人听你说话，拍拍他的肩膀是不够的，必须给予他震撼
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《七宗罪》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        你爬了十层楼，可能才达到别人的地下室
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《寄生虫》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        过得好的人，更容易成为好人
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《寄生虫》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        最好的计划就是没有计划<br>
	        因旦定了计划，人生就绝对不会按照计划来<br>
	        所以做人就得没有计划，没有计划也就不会出差错
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《寄生虫》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        在当今的年代，做一个人极其不易<br>
	        做一个有血有肉的人，而不是东拼西凑地揉合起一些人格特质
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《消失的爱人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        婚姻就是互相妥协、努力经营<br>
	        然后更加努力地经营、沟通和妥协，随后再来一轮经营<br>
	        凡入此门者，请万勿心存侥幸
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《消失的爱人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        爱情是这世上难以言尽的无常，它有着诸般化身<br>
	        爱情交织着谎言，交织着怨恨，甚至交织着谋杀<br>
	        盛放的爱逃不开恨，它是一朵娇艳欲滴的玫瑰，散发出一抹幽幽的血腥
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《消失的爱人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        如果你打算要办一件事，而你又想知道此事是否妥当<br>
	        那就想象一下那件事堂而皇之地印在报纸上，全世界的人都看得到
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《消失的爱人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        小时候，谁都觉得自己的未来闪闪发光，不是吗？<br>
	        但是一旦长大，没有一件事会遂自己心愿
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《被嫌弃的松子的一生》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        要么伤心地长吁短叹，要么沉醉于悲伤中<br>
	        要么草草的了结了一生，要么笑着搪塞过去，将错就错
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《被嫌弃的松子的一生》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人的心灵是脆弱的，难以做到为自己恨的人祈祷<br>
	        原谅不可原谅的人，并为之祈祷，这就是上帝的爱
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《被嫌弃的松子的一生》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        想要在这个世界上留下自己活过的证据，因为好不容易生而为人
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《被嫌弃的松子的一生》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        不管何时何地，做你想做的事永远都不嫌晚
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《美国往事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        孤独并不可怕，可怕的是恐惧孤独
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《美国往事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        你要一直不停地往前走，不然你不会知道生活还会给你什么
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《美国往事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这里必须说说恐惧，它是生活惟一真正的对手，因为只有恐惧才能打败生活
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《少年派的奇幻漂流》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人生就是不断的放下，但最遗憾的是，我们来不及好好告别
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《少年派的奇幻漂流》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        如果我们在人生中体验的每一次转变都让我们在生活中走得更远<br>
	        那么，我们就真正的体验到了生活想让我们体验的东西
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《少年派的奇幻漂流》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        沾沾自喜者只管自喜就是，但就别人说三道四则属多管闲事
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《罗生门》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        较之希望得到什么，我们更多是同"能够"得到什么达成妥协
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《罗生门》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        撒谎是人之本性，在大多数时间里我们甚至都不能对自己诚实<br>
	        那是因为人们太脆弱了所以才撒谎，甚至是对自己撒谎
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《罗生门》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我所认为最深沉的爱，就是我把自己活成了你的样子
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《这个杀手不太冷》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        事情总是这样的<br>
	        只有当你真正感受到对死亡的恐惧，你才会学到要珍惜生命
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《这个杀手不太冷》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        有些爱，也许从未说出口，才愈加显得珍贵
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《这个杀手不太冷》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        隐藏真相很痛苦，就算怀着秘密抓住了幸福，想必也不会有真正的幸福感受<br>
	        肯定会终生抱着自负的念头，没有片刻得到安宁
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《嫌疑人x的献身》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        日子就像喝茶一样，只会苦一阵子，不会苦一辈子
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《嫌疑人x的献身》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        自以为是永远都是大敌，因为本可看到的东西也会视而不见
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《嫌疑人x的献身》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        赵珣悄悄伸手，想要牵住她的手，被她轻轻瞪眼<br>
	        年轻藩王悻悻然抽回手<br>
	        非但没有被她的不识趣而恼火，反而满心欣喜
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你请神仙我请真武》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这样的她，才最像那个此生注定不可求的女子<br>
	        名义上已经殉情的上任靖安王妃裴南苇
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你请神仙我请真武》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        若是呼之即来挥之即去，对自己百依百顺<br>
	        就算身边女子面容酷似裴南苇<br>
	        赵珣也不会恩宠绵绵，早就视同鸡肋
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你请神仙我请真武》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        赵珣环视一周，青州水师在他眼中气势雄壮<br>
	        他也有信心将青州水师打造得比广陵水师还要威武无敌
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你请神仙我请真武》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        此时心中雄心勃勃，伸出一只手<br>
	        指向江面，颇有指点江山意味说道<br>
	        “南苇，父王当年根本掌控不住青州水师，更别提让青党俯首<br>
	        可我做到了，只用了一年时间！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你请神仙我请真武》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        女子柔声道<br>
	        “陆先生是张首辅孙太师都交口赞誉的栋梁大才，在襄樊本就委屈了<br>
	        你万万不能因为陆先生对我不喜，就对陆先生有丝毫怨言<br>
	        若是陆先生只以你的喜好而低眉附和，那才会让人小看了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你请神仙我请真武》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        赵珣闻声心中更喜，点头道<br>
	        “这个你放心，有我赵珣一日富贵，必不让陆先生一日贫寒<br>
	        燕敕王赵炳能给纳兰右慈的，我给陆先生只会更多。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你请神仙我请真武》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        女子冷清训斥道<br>
	        “说这些花言巧语有何意义？<br>
	        你明知陆先生岂会在意那些虚名虚利？<br>
	        你的性子，太浮了！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你请神仙我请真武》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        赵珣哈哈大笑道：“也对。是该静下心来。”<br>
	        一阵沉默
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你请神仙我请真武》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        赵珣望向八百里春神湖，低声道<br>
	        “总有一日，我要将春神湖送你，赵珣立誓，此言非虚！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你请神仙我请真武》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        女子嘴角一翘<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你请神仙我请真武》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        不同于这位靖安王的大快人心，赵珣身边的她眼神黯然<br>
	        同样是女子，自然有些心有戚戚然
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        乱世之中，女子，尤其是有姿色的美人，有几人能够幸免于难？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        赵珣善解人意地身体前倾，拍了拍她的手背，眼神温柔道<br>
	        “放心，我赵珣此生必不辜负你。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她正要说话，猛然起身<br>
	        一把近乎蛮横地将赵珣从椅子上拖拽而起<br>
	        然后将他护在自己身后
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        当她看到那个并不陌生又很陌生的背影后<br>
	        如遭雷击，脸色惨白，身躯开始不由自主地剧烈颤抖<br>
	        以至于攥紧年轻藩王的五指力道极重
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        赵珣因为疼痛而满脸痛苦，但是跟她如出一辙<br>
	        当他看到那个背影后，刹那间忘却了刺痛，只有胆寒<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        她死死咬住嘴唇，渗出血丝而不自知<br>
	        靖安王赵珣瞬间就是冷汗浸透后背<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        这已经是赵珣第二次沦为落汤鸡了<br>
	        上一次是靖安王世子殿下的时候，在春神湖<br>
	        这一次已经是贵为藩王，换成了在广陵江
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        真名本该是舒羞的女子<br>
	        戴着那张自己精心打造的生根面皮<br>
	        她站在不远处，嘴角鲜血流溢，不敢正视徐凤年<br>
	        颤声道：“世子殿下……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        突然意识到这个年轻人已经不再是那个世子殿下<br>
	        舒羞匆忙轻声道：“王爷，舒羞这些年没有对不起北凉<br>
	        陆诩离开青州的消息也是奴婢传递给拂水房的<br>
	        奴婢只是……只是没有……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        说到这里，她已经说不出一个字
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        当她等了片刻，并没有等到那位北凉王痛下杀手<br>
	        然后她抬起头，只看到他举目远眺<br>
	        视线投注在了一艘尤为巍峨的黄龙楼船之上
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她一咬牙，跃身跳入江中<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 南渡北归时》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        广陵江上，一艘灯火通明的黄龙楼船之上<br>
	        一对男女并肩站在船头赏景
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        身穿离阳藩王蟒袍的年轻男子轻声道：“让你受委屈了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        绝美女子轻轻握住他的手，摇了摇头<br>
	        她笑脸温柔<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        赵珣愁眉不展，眺望江面那些水师楼船星星点点的灯火<br>
	        她伸手帮他抚平额头<br>
	        他笑了笑，“走，回船舱！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        两人回到形同牢笼的豪奢住处<br>
	        船舱内有一架造工精美的雕花衣架<br>
	        衣架上，竟是一件富丽堂皇的正黄龙袍！
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        纳兰右慈当时登门做客之时<br>
	        这位硕果仅存的春秋谋士身边，便跟着一位手捧龙袍的婢女
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这段时日以来，离阳藩王赵珣一次次抚摸龙袍<br>
	        一次次眼神痴迷，默默数着那一条条金龙
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        今夜，他再次来到衣架前<br>
	        伸手摸着龙袍上的金龙<br>
	        最后甚至蹲下身，摸着底部那些“海水江涯”。
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这个年轻男人突然抬起头望向她，笑问道<br>
	        “你可知道，这件龙袍四正龙四行龙，分明只看得见八条金龙<br>
	        数目为何不是九五之尊里的那个九？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她想了想，“皇帝本就是真龙天子，穿上龙袍便是九了？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他起身哈哈大笑，伸手捏了捏她的脸颊，摇头道<br>
	        “你错喽，最后一条金龙绣在内襟之上，你不信去掀开衣襟看看。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她犹豫了一下<br>
	        始终不去触碰那件世间所有男子都梦寐以求的衣服
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        赵珣突然取下那件龙袍，让女子站好<br>
	        然后竟是帮她穿上了那件龙袍！
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她从头到尾都呆滞当场，不知所措
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        赵珣一丝不苟地帮女子正了正龙袍衣襟之后<br>
	        后退几步，眼眶泛红，柔声笑道<br>
	        “我知道，在靖安道就有很多人骂你是什么女藩王，说你是红颜祸水<br>
	        可我不在乎。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她欲言又止
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        赵珣任由泪水流淌<br>
	        “我知道你不是她，不是她……<br>
	        我也不在乎你是谁安插在我身边的谍子死士。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “一开始很在乎，如今根本不在乎……<br>
	        为什么？我喜欢你啊，我只是喜欢你啊<br>
	        哪怕你现在换了一张容颜，我还是喜欢你……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        舒羞咬着嘴唇，渗出丝丝缕缕的鲜血
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        赵珣突然露出笑脸，弯腰作揖，柔声道：“夫君见过娘子。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        屋内烛火明亮<br>
	        她身穿龙袍，如女子穿嫁衣
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她缓缓施了一个万福，嗓音婉约道：“陛下。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 16px">
	        —— 《雪中悍刀行 · 章节名 · 雪中的江湖，有人有始有终》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        杏花是靖安王府上的精锐死士，从赵衡传到了赵珣手上<br>
	        她琴棋书画样样精通，护人和杀人也肯定更精通
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风起凤飞，柳环卖花声》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她可以为了护卫陆诩坦然赴死<br>
	        也可以因为赵珣一句话而不眨眼地杀掉他陆诩<br>
	        陆诩眼瞎，可心知肚明，而且也不会因此对她或是靖安王生出芥蒂<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风起凤飞，柳环卖花声》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        陆诩听着灯花燃烧时嗤嗤作响的细微声音，笑道<br>
	        “杏花，世间声音无数，你最喜欢哪一种？”<br>
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风起凤飞，柳环卖花声》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        杏花相貌平平，不过声音清脆，极为悦耳，身段也婀娜动人<br>
	        因为要读书以及偶尔的代笔，她就坐在陆诩旁边的椅子上，微笑道<br>
	        “公子，奴婢不知。不过公子若是给出一些选择，奴婢可以作答。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风起凤飞，柳环卖花声》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩轻轻点头，略作思量，娓娓道来<br>
	        “泉声，琴声，松涛声，竹啸声，山禽声<br>
	        芭蕉雨声，落叶声，稚子读书声，名妓歌曲声，少女挑担卖花声。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风起凤飞，柳环卖花声》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        杏花掩嘴笑道：“奴婢肯定选卖花声呀。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风起凤飞，柳环卖花声》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩哑然失笑<br>
	        “忘了你叫杏花。不过我告诉你<br>
	        前朝有一位被称作诗家天子的大文豪，说法便是与你一样<br>
	        也说那千百种天地清籁，就数市井深巷的卖花声为第一<br>
	        最是能断人肝肠。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风起凤飞，柳环卖花声》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        杏花疑惑问道：“公子，这是为何？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风起凤飞，柳环卖花声》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	         陆诩在她面前，大概是处处有求于人，也就不吝言笑了<br>
	         “这些年我也一直在想原因，什么时候想通了再告诉你一声。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风起凤飞，柳环卖花声》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        跟陆诩朝夕相处，杏花也随意了许多，打趣道：“也有公子不明白的事情啊？”<br>
	        “有很多。”...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风起凤飞，柳环卖花声》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        杏花换个方位，替陆公子遮挡吹入巷弄的寒风，柔声道<br>
	        “公子是做大事的人，不拘小节。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 书生得意气，先生的背影》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩笑道<br>
	        “既说一屋不扫何以扫天下，又说行大事者不拘小节<br>
	        古人古书古语，说得真是让后人犯糊涂<br>
	        不过我一个瞎子，打扫屋子，确实就只能靠你了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 书生得意气，先生的背影》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        杏花眼神流转，“奴婢很乐意。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 书生得意气，先生的背影》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩伸出手，似乎是酒壮人胆，想要抚摸柳灵宝的光洁脸颊<br>
	        可当柳灵宝凑过脸，他已经缩回手，轻声道<br>
	        “咱们有幸相依为命，尽量多活几年。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 书生得意气，先生的背影》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩脑袋后仰，靠在墙壁上，“你这个瞎子。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 书生得意气，先生的背影》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        杏花突然压低声音道<br>
	        “陆公子，若是你想去北凉，柳灵宝便是死也要护着你出城。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 书生得意气，先生的背影》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩愣了一下，摇头洒然笑道<br>
	        “我自有打算。这儿挺好的。”<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 书生得意气，先生的背影》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        太安城皇城一处边缘地带，小院屋门半掩<br>
	        目盲年轻人与相依为命的侍女，两人雪夜围炉煮酒
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她小心翼翼递给陆诩一杯热酒，这几年朝夕相处，两人早已心有灵犀<br>
	        虽目盲却自然而然接过酒杯，在陆诩低头饮酒的时候，她感叹道<br>
	        “唉，才二十来年太平光景，就又要兵荒马乱了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩嘴角翘起<br>
	        “咱俩大概能算是运气好的，恰好刚刚活在这二十年里头<br>
	        永徽前期，和今年祥符三年入夏以后的中原百姓<br>
	        之前的老人，现在的孩子，都得胆战心惊活着。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她展颜一笑，“公子说的是。”<br>
	        陆诩转头“望向”半掩半开的屋门，嘴唇抿起，神色恬静
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她望向公子的侧脸，她眼神痴痴<br>
	        她没有任何奢望，只希望自己能够陪在他身边，直到看到公子缓缓白头<br>
	        而公子却永远不会看到她白发苍苍的不堪老态
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩缓缓回过头，打破这份宁静<br>
	        “我今天已经遣散赵勾谍子了，什么话都能说。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        杏花犹豫道：“公子，你会不会偶尔也感到寂寞？”<br>
	        目盲年轻人笑着摇头，“我啊，醯鸡处瓮，怡然自得。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        杏花吐了吐舌头，“公子宁静淡泊，真是厉害。”<br>
	        他自嘲道：“井蛙说海，夏虫语冰，才是厉害。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她听不太懂，也就没有说话
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩突然说道<br>
	        “记得我家乡有泉水，被大奉朝茶圣誉为天下第九名泉<br>
	        若是将泉水倒入杯中，水面过杯而不外溢，甚至能够浮起铜钱。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        杏花瞪大那双秋水眼眸，“真有这么神奇？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩哈哈大笑<br>
	        “水浮铜钱，肯定是假，不过如醇酒沾杯，倒是真事<br>
	        如果有机会，以后咱们用那里的泉水煮酒。”<br>
	        杏花使劲点头
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩微微仰起头，小声道：“此泉最可人，春风十八回。”<br>
	        她好奇问道：“公子，是谁作的诗，挺好的。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩伸出手指，指了指自己，笑脸温柔<br>
	        杏花立即一本正经道：“真是顶好的诗文！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩指了指她，“你这马屁拍得不太好。”<br>
	        杏花有些赧颜
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩向身边的女子轻轻摊开一只手掌<br>
	        她如遭雷击，怯怯柔柔<br>
	        终于鼓起勇气伸出她有些冰凉的纤细柔荑，放在他的手心上
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陆诩握紧她的手，说道<br>
	        “杏花，我是个瞎子，以后你就帮我看看那些大好河山<br>
	        你看见了，我就看见了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她哽咽道：“公子别嫌弃我笨。”<br>
	        陆诩摇头柔声道：“夫君不敢。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        屋外大雪纷飞落人间，屋内人心温暖如春
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那名她看不穿深浅的年轻剑士，起身端着茶碗向他们走来<br>
	        很不客气地一屁股坐下，跟年轻藩王相视而坐
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 姑娘好刀法》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年微笑着不说话，对于那名不知名剑客的冒昧打搅并不以为意
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 姑娘好刀法》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那人落座后，神情肃穆，一本正经道<br>
	        “不料世间竟有与我一般英俊的男子，幸会幸会。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 姑娘好刀法》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        樊小柴忍不住嘴角抽搐，见过不要脸的<br>
	        她这辈子还真没见过这么不要脸的<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 姑娘好刀法》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        樊小柴语气平淡地撂下一句：“你是我爹？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 姑娘好刀法》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那人略作思量，平声静气道<br>
	        “自然不是，不过我可以做姑娘的夫君。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 姑娘好刀法》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        喝茶比樊小柴要慢许多的徐凤年听到这句话后，差点一口喷出去
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 姑娘好刀法》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        樊小柴微微一笑，好似并不恼怒这个登徒子的浪荡言语<br>
	        只是刀却已出鞘寸余<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 姑娘好刀法》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        樊小柴脸色苍白，眼神愈发阴沉
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        等到茶摊掌柜的把三碗定神汤端到桌上后，那人点头道<br>
	        “当然没有恶意，我自入江湖以来<br>
	        一直以为会与徽山大雪坪那位轩辕紫衣结为神仙眷侣”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “但是见到眼前这位姑娘以后，便觉得那名女子必定要错过我这良配了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年不得不重复道：“厉害。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那人又转头对樊小柴善解人意道<br>
	        “姑娘想杀我也无不可，不过最好喝过了茶汤，再寻个僻静宽敞的地方<br>
	        届时我肯定不还手，任由姑娘出刀。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        樊小柴深呼吸一口气，五指死死握紧刀柄，咬牙切齿道：“你找死？！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        结果那人给出一个谁都没有想到的混账答案<br>
	        他神色无比认真，“我找你。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        樊小柴眼神中透出视死如归的毅然决然，不顾一切地拔刀出鞘<br>
	        就在刀尖即将彻底露出浑身气势攀至顶点的瞬间
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一直脸色刻板的年轻剑客破天荒微微一笑<br>
	        身体微微前倾向樊小柴，左手双指并拢<br>
	        电光火石之间，指向了樊小柴眉心<br>
	        停留在距离她眉心寸余的位置
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        动静之中，大有意味
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        樊小柴身体迅猛后仰，试图避其锋芒<br>
	        但是那人松开双指后，手掌轻轻按住她的肩头
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        樊小柴嘴角渗出触目惊心的猩红血丝<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        樊小柴嘴唇紧闭<br>
        	事实上她此时此刻已是满口淤血，连说出一个滚字都做不到了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        但她仍然不愿意吐出
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        如果说北凉王徐凤年是她这辈子最想杀的人物<br>
	        那么眼前这个脑子被驴踢过不止一次的家伙，可以排在第二位<br>
	        已经超过早年亲手将她变成拂水房死士的褚禄山！<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        那名年轻剑客望着樊小柴的背影，欲言又止，最后还是没能说出什么话
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他转头看向徐凤年，问道<br>
	        “你要么是不曾习武的平常人，要么是擅长练气的顶尖人物<br>
	        否则我不至于捕捉不到你气机流转的独到之处”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “但既然你有胆子悬佩凉刀招摇过市<br>
	        身边又有……这位姑娘同行，相信身份不简单，那么……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年安静等待下文
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        只是这一次年轻剑客果然又没有让人失望，“那么敢问这位姑娘的芳名？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年微笑道：“以前叫樊小钗，钗子的钗，如今叫樊小柴，柴火的柴。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那人点头道：“如我所料，都是好名字！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年无言以对<br>
        	自己闯荡江湖这么多年，终于又遇着脸皮厚度不相上下的对手了？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        只是自己当年最落魄的那趟江湖，好歹除了脸皮还是靠脸的<br>
	        与村妇小娘们讨水喝，堪称所向披靡从无败绩<br>
	        可眼前这位，那纯粹是靠一张脸皮啊
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那人想了想<br>
	        “算了，本来还想跟你打听一件事，现在不需要了<br>
	        反正去不去武当山，已经无所谓。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        已经知道年轻剑客身份的徐凤年笑问道<br>
	        “为什么无所谓？难道你真的不去跟那位北凉王一争高下？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        年轻剑客满脸错愕道：“你知道我是谁？”<br>
        	徐凤年点头
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他揉了揉下巴，恍然大悟道<br>
	        “你能够仅凭相貌就猜出我的身份，殊为不易<br>
	        不过话说回来，也在情理之中。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年开始有些理解樊小柴的心情了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        樊小柴已经转回身，白碗搁放在桌面上，死死盯住那人，“我必杀你！”<br>
        	那人既无讥讽也无恼火，咧嘴一笑，阳光灿烂，“随你喜欢。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年好奇道：“你不是开玩笑？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那人正襟危坐，沉声道<br>
	        “我从不与人开玩笑！真正喜欢一个人，难道不应该正是一见钟情才对？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “我想不是相濡以沫才会喜欢上一个人<br>
	         而是喜欢上一个人后，才会相濡以沫<br>
	         怎么，你不信？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年看着这张年轻脸庞，有些恍惚<br>
        	他想起了羊皮裘老头儿和那位酆都绿袍
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        原来，如今江湖，亦有痴人<br>
        	不可理喻，不用理喻
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年笑着轻声道：“我相信。”<br>
        	樊小柴面无表情问道：“你是谁？！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年情不自禁地揉眉头<br>
	        果不其然，对面这个家伙又开始伤人于无形了<br>
	        “小柴姑娘，我喜欢你，与你喜欢不喜欢我，没有关系。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        然后他对樊小柴眨了眨眼睛<br>
	        “如果有一天，我不再喜欢你了，不要奇怪。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        樊小柴的情绪几近崩溃，怒吼道：“你到底是谁！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        年轻剑客直到这个时候，才按住腰间剑柄<br>
	        眼神清澈，望着她笑道：“太白剑宗，陈天元！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他略作停顿，大声道：“所以！我不喜欢你之时，只有陈天元剑断之时！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        附近那几桌，只要是刚好在喝茶汤或是嚼饼的年轻男女<br>
	        无一例外都当场一口喷出<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        徐凤年慢悠悠举起茶碗，没有急着喝茶汤<br>
	        举目远望，怔怔出神
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        此人此时此景<br>
        	他人别时那景
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        曾经有位喜欢抠脚的糟老头，气哼哼说，“什么老剑神！就是剑神！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        曾经有位穷的叮当都不响的木剑游侠儿，豪气万丈说<br>
	        “如果有天江湖上出现了一位姓温的绝代剑客，不用怀疑，那就是我了！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        有人已不在世间<br>
        	有人已经不在江湖
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        有人则还在眼前
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        陈天元问道：“你请客？”<br>
	        徐凤年点头道：“你请我定神汤，我回请你绿蚁酒，有何不妥？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陈天元认真道：“没有不妥，只不过我不喝酒。”<br>
        	徐凤年讶异道：“天底下还有不喝酒的剑客？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陈天元指了指自己，一脸天经地义道：“我就是啊。”<br>
        	徐凤年看着桌上两坛绿蚁酒，有些尴尬<br>
        	...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 如今江湖亦有痴人》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        一袭青衫的陈天元缓缓站起身，脸色平静<br>
	        “今日起，我佩剑更名为木柴。”<br>
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 剑开云海》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这句话，显然只是向樊小柴一人而说
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 剑开云海》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年忍住笑意，瞥了眼她<br>
        	后者像是全然无动于衷<br>
        	...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 剑开云海》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        只是即便见识了“真人露相”的陈天元<br>
	        樊小柴仍是打心眼不喜欢，甚至可以说更加深恶痛绝
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 剑气满北凉》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        你喜欢我，不需要理由<br>
        	我不喜欢你，有万般理由
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 剑气满北凉》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        世间情爱，自古辛酸
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 剑气满北凉》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        刘公公原本对这些不痛不痒的溜须拍马早该习以为常<br>
	        只是今天此时却尤其开怀
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        揉了揉没有半点胡须的下巴，眺望远方<br>
	        尖锐嗓音也柔和了几分，“咱家之所以对这座无名石崖记得这般清楚……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        就在所有人都静听下文的时候<br>
	        这位位高权重的掌印太监却已经渐渐压抑声音，细微若蚊蝇颤翅<br>
	        以至于让人分辨不清老人到底有没有自言自语
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人当然在说话<br>
	        有些话烂在肚子里大半辈子了，不吐不快
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        可当那些言语悠悠然爬到嘴边，就又像吝啬的老酒鬼<br>
	        拎出一坛珍藏数十年的老酒，只愿独饮了<br>
	        最好是旁人能看不能喝，只能看着我一人喝<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        老人收起思绪，眼神安详，远远望去
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        当年在那里，还记得他羞赧地挑中那名黄花少女背自己过河<br>
	        两名结伴游学的同乡士子都默契地拣选了两位中年妇人
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        到了龙驹河中段的时候<br>
	        他还亲眼看到那个平日里求学最为严谨刻板的家伙<br>
	        偷偷摸摸捏着那妇人的丰满微黑胸脯<br>
	        他同窗好友脸上的那种满足神情，如同进士及第
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        而另外一位同窗虽然平日里胆大包天，在那会儿反倒缩手缩脚
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        倒是背他的妇人爽朗笑着<br>
	        腾出一只手来抓住他的手掌，啪啦一下往自己胸口上按去<br>
	        然后用浓重的西北地方乡音说了句，摸一下不收钱<br>
	        可要想摸个够，只要五文钱
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        唯独他始终规规矩矩<br>
	        既是读圣贤书之人的礼数约束，内心也有几分不忍
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        更是趴在她纤细的腰肢后背上<br>
	        生怕自己一个吓着她，结果她一个身形不稳<br>
	        两人就真要变成同命鸳鸯做一双水鬼了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        背过河后，他也想与两位同窗一样多给几文钱<br>
	        只是她不要，低下的眼眉，轻捻着衣角，羞羞怯怯
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那次相遇与相别，就再无相聚了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        也许他对她的念念不忘，不是真的有多喜欢她<br>
	        而是怀念那个仍是读书人的自己罢了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        但也许，那个年轻刘姓读书人，的的确确始终喜欢她<br>
	        说不出清浅，说不出多少，而且也不用去思量到底有多喜欢
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人突然没来由涌起一股冲劲<br>
	        抬头看了眼天色，转身沉声笑道
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “咱家要去渡口那边瞧上一眼<br>
	        宋公公，马公公，你们二位就不用跟着了<br>
	        咱家去去就回，尽量争取不要摸黑回驿馆。”<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        两人临近岸边渡口的时候，老妇人问道：“累不累？”<br>
        	年轻人笑道：“婆婆你这么轻，怎么会累。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	然后年轻人打趣道<br>
        	“婆婆你年轻的时候肯定很好看，上门求亲的人肯定很多。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	虽然穷苦但穿着干净的老妇人会心一笑<br>
        	她没有点头，也没有说不是<br>
        	...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	...<br>
        	老妇人缓缓走向渡口
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	然后她看到了一位衣着稀奇古怪的老人<br>
        	一眼就看到了，哪怕他身边站着两位同样身穿“红衣”的老人
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	离阳印绶监掌印太监，刘公公，也是如此
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	他欲言又止<br>
        	而她只是轻轻浅浅笑着，微微撇过头，伸出枯瘦手指，理了理鬓角
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	他望着她，刚想要向前踏出一步<br>
        	最终还是自嘲一笑，收回脚步，转身大步离去
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	而她，依旧是像很多很多年前那样<br>
        	对着那位年轻读书人的背影，依旧像当年那位黄花少女，轻轻挥手
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 公子黄花，江湖依旧》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这趟出关来到久违的江湖<br>
	        并没有太多高手架子的剑池宗主也仅是换上一双崭新素青布鞋
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        此时以白布裱成袼褙、多层叠起纳而成的鞋底已经磨损大半<br>
	        这让宋念卿浮起一丝遗憾
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        此生专注于剑道，从未有过儿女情长<br>
	        与那嫁入剑池的娴静女子也止步于相敬如宾
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        只是不知为何，大敌当前，生死一线<br>
	        不知为何却记起了年轻时那一夜掀起她的盖头<br>
	        烛光映照之下她的羞赧容颜
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这么多年发乎情止乎礼<br>
	        竟然不知她何时慢慢成了一位霜发老妪<br>
	        也不知她何时亲手制成了这双鞋子
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        两人离别，接过视为累赘的行囊，他只当作女子持家的天经地义
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        此时才知当时若是能接过行囊，念一声她的小名，道一声谢，该有多好
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        宋念卿记起了许多往事<br>
	        正值壮年，携带十二剑，意气风发去武帝城挑战天下第一人
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她在他离家时，亦是没有多言，只是婉约笑脸<br>
	        帮着他仔细理了理衣裳，送至门口<br>
	        独独站在那儿，没有等到他的回头
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        后来宋念卿返家，冷着脸与她在家门口擦肩而过<br>
	        她欲言又止，只是挤出干净的笑脸，一点都没有委屈幽怨
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        宋念卿以往总是在不关心之余，难免有些阴郁<br>
	        怎么找了这么个闷葫芦无趣的女子，如何配得上自己的剑？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这一抹要不得的致命恍惚，本该让宋念卿的蓄势受挫<br>
	        不曾想恍惚之间，生平第一次心起愧疚<br>
	        宋念卿只觉得剑心在刹那之间净如琉璃<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        宋念卿低头深深看了眼鞋面，微微一笑<br>
	        任由六缕剑气在磨盘中烟消云散，任由飞木滚石扑面
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			轻轻踩了踩脚下仅存完整的街面，重重吐出一口浊气<br>
			终于压抑不住喉咙翻涌的鲜血，吐在身前<br>
			很快被尘埃遮掩得消失不见
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			宋念卿轻声道：“是时候为你走一趟江湖了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			宋念卿一踩地面，开始狂奔<br>
        	最后一剑，亦是最后一次走江湖<br>
        	...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最后一趟江湖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
			师徒三人走后，老妇人坐在池畔，仪态安详，微笑道<br>
			“念卿，以前都是我等你，等了很多年很多次<br>
			不管多久，最后总能等着你回家。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 珠帘，铁甲（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她将那枯瘦双手叠放在膝盖上，当年红妆渐渐已白首
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 珠帘，铁甲（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			一生之中，习惯凝望他的背影<br>
			夫妻之间的言语，甚至也许不如丈夫与弟子传授剑道那么多
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 珠帘，铁甲（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			每次他离开剑池，返回剑池<br>
        	她都会站在剑池门口
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 珠帘，铁甲（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			他也从不看她一眼<br>
        	她不悔
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 珠帘，铁甲（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			老人闭上眼睛，喃喃道：“念卿，现在是你等我了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 珠帘，铁甲（上）》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        就在两位天人在云端之上谈论整座人间命数的时候<br>
	        离阳，北凉道，幽州，胭脂郡，在那个叫倒马关的小地方
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        有位腰肢纤细胸脯却颇为壮观的秀美小娘<br>
	        在从村子孩童嘴中得知那人出现在集市上后
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她鼓起勇气一路小跑到那里，想要问他<br>
			能不能请他回她家里吃一顿粗茶淡饭
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她站在那堵黄土小墙不远处<br>
			满头大汗，不得不双手叉腰，低头弯腰大口喘气<br>
			她没有看到那个自己连想念也不敢的身影
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			想念想念，一经想起便念念不忘了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她知道她和他是两个世界的人<br>
			在那座清凉山北凉王府见到他之前，就已经这般认命的认知<br>
			在那之后，更是如此
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			得知他出现在倒马关后，她原本正要为右松做饭<br>
			她其实可以让右松去请他，但是她没有
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她让右松去淘米择菜，然后她跑去倒马关集市<br>
			因为这样一来，他到了她家后，就要等她做完饭才能吃饭
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她觉得他再忙，也许都会答应的<br>
			答应在她不远处的地方多待片刻<br>
			对她来说，那就足够了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			再多，他不会给，她也不会要
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			名叫许清的她站在原地，直起腰肢<br>
			擦了擦额头汗水，笑了笑<br>
			心满意足<br>
			好像自己已经见过了他
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			只是她转身走出几步后，又忍不住回头看了一眼<br>
			她有些脸红
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 野草》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        凝脂腴态的大丫头红薯坐在回廊栏杆上，拿着一柄小铜镜<br>
	        双手沾满了类似胭脂的鲜血，一点一点被涂在嘴唇上<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最好真好》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        这名在王府上下公认羸弱软绵如一尾锦鲤<br>
	        需要主子施舍喂食才能存活的大丫鬟同样不看青鸟<br>
	        只是歪了歪脑袋，对着镜子笑眯眯道：“美吗？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最好真好》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        青鸟微微嗤笑一声<br>
        	万籁无声中，异常刺耳
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最好真好》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯抿了抿嘴唇<br>
	        月夜雪地反光下，那张脸庞十分妖冶动人，娇媚道：“比你美就好。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最好真好》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        青鸟转身离开，留下淡淡一句话：“你老得快。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最好真好》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯也不反驳，媚眼朦胧自说自话<br>
	        “活不到人老珠黄的那天，真好。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 最好真好》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        红薯看到眉宇清爽与平时不太一样的世子殿下，怔怔出神<br>
	        即便朝夕相处，她仍然极少看到这样的世子殿下
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你是禅》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        原名红麝的她咬了咬纤薄嘴唇，然后跟着笑了笑，天生的尤物狐媚
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你是禅》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        大柱国徐骁曾笑言这小女子，便是进宫做了妃子都可争宠不败
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 你是禅》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        徐凤年默不作声
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        连北凉王徐骁都称赞她有一副玲珑心肝的红薯柔声道<br>
	        “公子，红薯本来就是死士<br>
	        不去死，活着做什么，可不就是帮主子杀人吗？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年轻轻咬了她的耳垂一口，命令道<br>
	        “不许这么说，更不许这么做！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她身躯一颤，向后靠了靠<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        徐凤年离远了采矶万佛窟，和她一起上马，驰骋向敦煌城<br>
	        红薯问道：“公子，佛门说六道轮回，真的有吗？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年平静说道：“信则有，不信则无。”<br>
        	她犹豫了一下，回眸望去
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        生下来就注定是那说死就死的命<br>
	        总想着把身子给了公子，她才死得心甘情愿<br>
	        早些死，若是真有转世，那就这辈子抓紧虔诚信佛<br>
	        投胎再做一名好看些的女子，指不定还能遇见他
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她不想活到人老珠黄，活到皱纹巴巴的那一天，太丑了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年突然说道<br>
	        “红薯，以后我有了女儿，不管是哪个女子的<br>
	        都由你来帮着教她梳妆打扮，教她涂抹胭脂，好不好？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她眨巴眨巴着眼眸，红着脸问道<br>
	        “可我只是一个不值钱的丫鬟。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年沉声道<br>
	        “我是男人，你是女人，就这么简单<br>
	        再说什么值钱不值钱，看我不打你。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯低下头，随即抬头痴痴望向他<br>
        	城外，公子丫鬟两相欢？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 山中相厌城外相欢》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        脱了华贵蟒袍，徐凤年去了房间，倒头就睡
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 吃红薯》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯轻轻走来，坐在床头，听着轻微鼾声，有些心酸<br>
	        游历之前他从来不曾打鼾的，这得有多累，才会如此？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 吃红薯》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        侧身躺下，凝望着近在咫尺的安详脸庞，红薯轻声道<br>
	        “公子，你是奴婢的了，只是奴婢一人的，不贪心，就一天也很好。”<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 吃红薯》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯侧过身，一手托着腮帮<br>
	        另一只手双指抹过她公子的睫毛，柔声道<br>
	        “公子，你的睫毛可长了，以前做梦都想摸上一摸。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一袭龙袍七八分》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年没有阻拦她的小动作，说道<br>
	        “红薯，等我离开敦煌城，你也回北凉<br>
	        别做什么死士棋子了，以后做我的侧妃<br>
	        徐骁也会答应的，他有一点很好，对谁都不问身世<br>
	        连青党女子陆丞燕都做得，你就做不得？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一袭龙袍七八分》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯摇了摇头<br>
        	这兴许是她这辈子第一次不答应
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一袭龙袍七八分》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年转过身皱紧眉头<br>
        	看似性子柔弱却骨子里异常执着的红薯眨了眨眸子<br>
        	“做了牵线木偶一样的侧妃，还怎么杀人啊？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一袭龙袍七八分》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年没好气道：“你喜欢杀人？”<br>
        	她毫不犹豫点了点头
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一袭龙袍七八分》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年瞪眼<br>
        	红薯躲入他怀中，悄悄说道<br>
        	“公子喜欢只当一个做样子的北凉世子吗？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一袭龙袍七八分》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年叹气道：“将心比心，道理我懂，可你就不许我不讲理吗？”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一袭龙袍七八分》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯如小猫儿一般蜷缩在他怀里<br>
	        “是红薯不讲理，奴婢本该万事都听主子的。”<br>
	        ...
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一袭龙袍七八分》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯拿走了食盒，坐下后轻声道<br>
        	“奴婢要是今天死了，公子会不会记住红薯一辈子？”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 吴家九剑》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年平静道<br>
	        “红薯，你要是敢死，我就敢忘记你，忘得一干二净<br>
	        我说到做到”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 吴家九剑》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯红了眼睛，却是开怀笑着说道：“公子真无情。”<br>
	        ...
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 吴家九剑》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        红薯笑了笑，自己有了一场好隆重的死法<br>
        	死之前总要拉上几百人去陪葬
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 满城皆敌》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        如此一来，敦煌城就彻底干净了<br>
        	到时候就轮到连她都不知底细的北凉势力开始接手
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 满城皆敌》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        上一次出北凉时，听潮阁李义山面授机宜，便是如此算计的<br>
	        步步不差，她毫无怨言<br>
        	出了北凉，就再不回北凉
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 满城皆敌》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯回首望北<br>
        	公子走好
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 满城皆敌》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她却不知，敦煌城大门<br>
        	一名书生模样的负剑年轻人，面对五百骑兵<br>
        	一夫当关，为她独守城门
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 满城皆敌》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        茅柔怒极，沉闷下令道：“杀！”<br>
        	她眼中那一人，一人一剑
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一步不得入》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        身前五百骑，身后是城门<br>
        	徐凤年不动如山
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一步不得入》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        哪怕魔道第一人洛阳驾临，敦煌城也只是一人对一人
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一步不得入》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年习武以前还有诸多对于江湖的美好遐想<br>
	        但是真正疯魔习武以后，就从不想去做什么英雄好汉<br>
	        但既然身后是自己的女人，别说五百骑<br>
	        五千骑，他也会站在这里
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一步不得入》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我死前守城门<br>
        	教你们一步不得入！
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一步不得入》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        红薯形单影只，站在空落落的宫门前<br>
        	伸出一指，重重抹了抹天生猩红如胭脂的嘴唇
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 有人血衣拖刀入城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她由衷笑了笑，可惜没大雪<br>
	        否则就真是白茫茫一片死得一干二净
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 有人血衣拖刀入城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        就当红薯准备出手杀人时，人海渐次分开<br>
        	五百骑不曾有一骑入城，只有一人血衣背剑拖刀入城
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 有人血衣拖刀入城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一身鲜红，已经看不清衣衫原本颜色<br>
       		他手中提着一颗女子头颅
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 有人血衣拖刀入城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这名背剑拖刀的年轻人丢出头颅，抹了抹满脸血污，说道<br>
	        “这娘们好像叫茅柔，说只要杀了我，就给他手下吹箫<br>
	        我就一刀搅烂了她的嘴巴，想来这辈子是没法子做那活了。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 有人血衣拖刀入城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        然后他指了指红薯，“她是老子的女人，谁要杀她，来，先问过我。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 有人血衣拖刀入城》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        茕茕孑立在宫门外的红薯一袭锦衣无风飘摇<br>
	        眼眶湿润，眼眸赤红，五指成钩
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        几乎刹那入魔
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        徐凤年自然轻而易举地驭剑刺透茅锐手掌<br>
	        刺破另外一颗眼珠，笑道：“我的女人，好看吗？可惜你看不到了。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        分明是笑，可看他那一身鲜血浸染的红衣<br>
	        还有那扭曲的英俊脸孔，实在是让人看着颤栗心寒
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年不急于杀死茅锐，归鞘春雷立在地上<br>
	        双手搭在刀鞘上，问道<br>
	        “谁敢与我一战？！便是群殴也无妨，老子单挑你们一群！”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这实在不是一个能逗人发笑的笑话
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这名原本只被当做宫中裙下面首的年轻人<br>
	        满身血腥渗出的滔天戾气<br>
        	还有那几乎所向无敌的剑气和刀意
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这一刻，不知道有多少老一辈枭雄都感慨，生子当如此！
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        徐凤年缓缓入城，听到这里，冷笑道<br>
	        “那时候徐叔叔再去给红薯收尸？掬一把同情泪？”<br>
        	徐璞神情不变，点了点头
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        察觉到他的勃然杀意，徐璞隐约不悦<br>
	        甚至都不去刻意隐藏，直白说道：“殿下如此计较这些儿女情长？”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年缓步入城，一个字一个字平淡道：“放你娘的臭屁！”<br>
        	徐璞并未出声
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        沉默许久，大概可以望见巨仙宫的养令斋屋顶翘檐<br>
	        徐凤年好像自说自话道<br>
	        “我今天保不住一个女人<br>
	        以后即便做了北凉王，接手三十万铁骑，你觉得我能保得住什么？”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐璞哈哈大笑，整整二十年啊<br>
	        积郁心中二十年的愤懑，一扫而空，笑出了眼泪<br>
	        ...
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年负剑提刀前行，大局已定，更是无人敢拦<br>
	        径直走到锦衣女子眼前，抬起手作势要打
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她泪眼婆娑，根本不躲
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯死死抱住这个红衣血人，死死咬着嘴唇，咬破以后，猩红叠猩红
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年只是伸手捏了捏她脸颊，瞪眼道<br>
	        “你要死了，你以为我真能忘记你？<br>
	        做丫鬟的，你就不能让你家公子省省心？<br>
	        退一步说，做女人的，就不能让你男人给你遮遮风挡挡雨？”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 腥红叠猩红》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        她望着这个背影，记起那一日在殿内<br>
	        她穿龙袍坐龙椅，一刻欢愉抵一生
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 孤城白首》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        此时才知道，跟姑姑这样<br>
	        在选择一座孤城终老，为一个男人变作白首<br>
	        也不是多么可怕的事情
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 孤城白首》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年突然转身，展颜一笑
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 孤城白首》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红薯刹那失神，不知此生他最终到底会爱上哪一名幸运的女子<br>
	        姜泥？红薯打心眼不喜好这个活着就只是为了报仇的亡国公主<br>
	        她觉得要更大气一些的女子，才配得上公子去爱
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 孤城白首》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        当然，这仅是红薯心中所想，至于公子如何抉择，她都支持<br>
	        ...
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 孤城白首》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        红薯目送徐璞离开后，转身走去屋子<br>
	        打开大门，然后迅速关上门
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大白猫，小地瓜》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        屋内所有桌椅凳子都裹有棉布<br>
	        还有一只似乎是用作小儿眠睡的精致摇篮
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大白猫，小地瓜》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        蹑手蹑脚走向摇篮的她<br>
	        此时的笑脸，比任何时候都要温暖
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大白猫，小地瓜》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她蹲在摇篮前，轻柔称呼道<br>
	        “我的小地瓜，快快长大，然后去吓你爹一大跳吧。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大白猫，小地瓜》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        一座“无人问津”的隐蔽宅子<br>
	        丰腴女子弯腰护着那个刚刚学会走路的小孩子<br>
	        脚步摇摇晃晃的孩子伸手去抓那张悬挂门口的珠帘
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 珠帘，铁甲（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			作为孩子的娘亲，她此时的眼眸中<br>
			有宠溺，有疼爱，有愧疚，有遗憾
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 珠帘，铁甲（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她蹲下身，抱住那个孩子<br>
        	大人的脸颊贴着孩子的脸颊
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 珠帘，铁甲（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她柔声道：“徐念凉，我的小地瓜，长大以后，一定要去找你爹哦。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 珠帘，铁甲（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
			徐凤年闭上眼睛<br>
        	你一定要在敦煌城好好活着，一定要等我<br>
        	...
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
			敦煌城<br>
        	深夜中，一位睡眠本就极浅的女子<br>
        	当孩子啼哭起来，她很快就披衣起身<br>
        	从摇篮中温柔抱起孩子，孩子很快就破涕为笑
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她低头看着那张稚嫩的笑脸，她也笑了
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她轻轻摇晃手臂，悠悠哼唱起来<br>
			“小地瓜呀小地瓜，快长大呀快长大……”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人笑了笑<br>
	        “答应不答应，是你徐凤年的事情，我就传话来的<br>
	        从今往后，凉莽要死要活，跟我没有半颗铜钱关系了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年缓缓站起身，拍拍手，笑道<br>
	        “要不然打一架？我这么多年始终记得前辈一句话<br>
	        不管打不打得过，打过了再说！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人一本正经道<br>
	        “不打了不打了，前辈就要有前辈的风度<br>
	        何况你小子受了伤，即便打赢你，一样有趁人之危的嫌疑。”<br>
	        徐凤年笑而不语
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人老脸一红，瞪眼道：“臭小子！别得寸进尺！”<br>
        	徐凤年哈哈大笑
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人伸出手掌拍了拍这个年轻藩王的肩膀，神情有些惆怅<br>
	        “从你小子当年第一次差点淹死在听潮湖底，被我所救<br>
	        到你后来隔三岔五跑下去潜水闭气，要不然就是给我捎东西吃<br>
	        真说起来，我是看着你从一个孩子，变成如今的北凉王……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年有些难为情，尴尬道<br>
	        “早年心情不好的时候，经常拎着事物到湖底去逗弄前辈<br>
	        还希望前辈别放在心上”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人顿时满头黑线<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        徐凤年突然望着老人的背影，喊道<br>
	        “老头子，我这辈子能够坚信年少时的念头，去武当提刀习武<br>
	        是因为在湖底见到了你，才让我相信这个天下，的确是有高手的。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        江湖有高手，有神仙人物，一人真能万人敌<br>
	        才有机会真的凭借一己之力报仇
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        所以徐凤年无比感激这个琵琶骨被钉入铁链的老人<br>
	        这个让他咬牙坚持在武道上攀登的江湖前辈
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人没有回头，大声喊道：“矫情！有本事……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人突然发现自己竟然说不出什么话来打击这个臭小子<br>
	        有本事当上天下第一？这家伙没死在王仙芝手上<br>
	        与拓拔菩萨转战千里，太安城内更是一人战两人
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        江湖如此，庙堂沙场，何曾输了？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        到最后，已经快到坡脚的老人吼道<br>
	        “徐凤年，有本事就死在我后头！<br>
	        你小子记住了，到时候别忘了给爷爷我弄点好酒好肉！”<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        老人咳嗽起来，双手握拳撑在膝盖上，沉声道<br>
	        “我本是公主坟大念头的……罢了，这些事就不多说了<br>
	        总之我在离开北凉前是想着去中原江湖的<br>
	        却得到另一个老头子的密信，说是敦煌城那边有玄机，希望我能最后做件事”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “只可惜我只做成了一半……<br>
	        陶满武，你记住，尽快让那个人知道，越快越好！<br>
	        让他知道他在北边不止有个女人<br>
	        更重要的是那个女人，给他生了个孩子！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陶满武微微张大嘴巴，显然有些不知所措
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人苦笑道<br>
	        “顾不得你这丫头会不会帮忙了<br>
	        说句良心话，不帮也是情理之中<br>
	        不管怎么说，我总算死得安心些。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        说完这句话，老人艰难伸手入袖<br>
	        这个动作吓得耶律斜轸和三名扈从都如临大敌
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        不过老人只是拿出一本并不厚的泛黄书籍<br>
	        轻轻抛给小姑娘，自嘲道<br>
	        “他送给我的一部刀谱，后来他自己也添加过一些招式<br>
	        我大致看得懂，可惜全都学不会，小丫头，送你了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陶满武双手接过那部刀谱，捧在怀中，眼眶湿润<br>
        	她知道，老人是真的要走了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人伸出大拇指，指了指自己，笑道<br>
	        “小丫头，记住喽，白头发老爷爷我啊，叫楚狂奴<br>
	        是那个人一生当中，见到的第一位绝世高手！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        老人扯了扯嘴角，闭上眼睛，自言自语道<br>
	        “给那湖水泡过的鸡腿，狗日的……竟然还真好吃……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 无他无中原》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        中年人这才发现院子里除了徒弟，还有个木钗布裙的少女<br>
	        正拎着水勺给院子里墙角根处的一棵小树浇水<br>
	        看到中年人，腼腆一笑，有些手足无措
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徒弟跟那头相依为命多年的老毛驴叙过旧，大大咧咧跟师父介绍道<br>
	        “师父，这是阿草，是我在这里的邻居，这棵桃花还是她找来种下的<br>
	        阿草爹娘也是很好相处的，他们家在街头那边开了家小粥铺子<br>
	        阿草平时也会去城里闹市处卖花，杏花，桃花，兰花，都卖<br>
	        师父你要是去了阿草她家，就能闻到满满一院子的花香”<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        他多看了几眼那个身材消瘦的贫家少女，她背对他们这对师徒，耳根子通红<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        一头雾水的少女红着脸说道：“邓叔叔，我是知道李大哥名字的。”<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        李怀念转头望着那个自己让她留在远处的少女<br>
	        她拎着那只竹编花篮，翘首以望<br>
        	篮中杏花已经卖完，桃花还有三两枝<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        少女羞涩难当，不过邓叔叔这么一说<br>
	        原本从来不敢奢望与李大哥成为夫妻的她心中的忐忑少了许多
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	她又想，这么没有架子的桃花剑神，这么好说话的一个长辈<br>
        	应该是真的不是那种响当当的江湖大侠吧？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	少女突然觉得自己这么认为，很对不起李大哥和邓叔叔<br>
        	悄悄吐了吐舌头<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        年轻人摇头道<br>
	        “师父，还是算了吧，我本来早就想离开这里了<br>
	        只是……只是怕师父到了西蜀找不到我，这才没有离开。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        原本脸色并不显怒容的中年人听到这句话后<br>
	        不知为何竟是骤然阴沉下来，好似被触及了逆鳞
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        言语一直云淡风轻的中年人，微微提高嗓音，略带责怪意味<br>
	        “你就没有告诉他们，你师父姓什么叫什么？！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        年轻人愣了一下，低下头道<br>
	        “当时对方气势汹汹找上门来，打生打死的，徒弟不小心忘了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        中年人冷哼一声，“我看是不愿意说出口吧？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        年轻人憨憨笑道<br>
	        “说出去多丢人，白叫人知道师父你找了这么个没出息的徒弟<br>
	        再说了，我真没脸没皮报上你的名号，谁信呐？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        中年人愕然<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        他突然想起很多往事<br>
	        这个徒弟总是嫌弃他这个当师父的，行走江湖不够宗师风范，没有神仙风采<br>
	        总是要他要多注意派头，总是愤懑于他的名头被谁压下了<br>
	        恨不得整个离阳都知道他的师父才是当之无愧的天下第一人
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        可是，那个少年似乎从来没有想过<br>
	        让天下人知道他那个师父其实收了个徒弟<br>
	        从来没有想过让江湖知道那个人的徒弟，到底叫什么名字
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        整座江湖，没有人知道那个牵驴少年的名字<br>
	        甚至连桃花剑神的徒弟姓什么都不知道吧
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        自从他收了这个徒弟后，两人一起行走江湖<br>
	        再有路见不平，这才会在徒弟的连累下不得不出手
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        每次他救了人就要不耐烦地离开<br>
	        徒弟便会磨磨蹭蹭跟所救之人笑道<br>
	        我师父那是桃花剑神邓太阿，你们千万别忘了啊！
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        你师父是桃花剑神邓太阿<br>
        	那我邓太阿的徒弟又是谁？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        中年人轻轻呼吸一口气<br>
	        看着那张已经长出些许青涩胡茬子的年轻脸庞<br>
	        然后转头望向那个卖花少女，笑道<br>
	        “小姑娘，我叫邓太阿，我的徒弟叫李怀念。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一头雾水的少女红着脸说道<br>
	        “邓叔叔，我是知道李大哥名字的。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        邓太阿扪心自问，用自己才能听到的声音伤感道<br>
	        “可是这个狗娘养的江湖不知道。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        那一晚，邓太阿满身酒气，和徒弟李怀念缓步走在小巷中
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			邓太阿突然说道<br>
			“买猪看圈，娶媳看娘<br>
			听你的说法，听雨楼那个女子显然不适合你<br>
			倒是阿草，是能够陪着你过日子的女子。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			李怀念嘿嘿一笑
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			邓太阿拍了拍徒弟的肩膀，没来由说了一句<br>
			“师父这辈子没为你做过什么事情……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			李怀念欲言又止，邓太阿摆了摆手<br>
			打断了徒弟想要说的话，继续说道<br>
			“你想不想是你的事情，师父不管<br>
			既然你如今多半是要在西蜀这边安家了<br>
			那师父总要尽量让这里不要陷入兵荒马乱的境地”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			“加上师父本就想要去北凉一趟，你也别担心<br>
			当今天下，不管是离阳太安城还是凉莽边关<br>
			只要师父自己想走，就没有人拦得住师父。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			年轻人小声道<br>
			“师父，如果成家立业<br>
			以后恐怕就很难再跟你一起闯荡江湖了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			邓太阿笑道：“以后有事没事，我都会常来西蜀看看你们。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			年轻人犹豫了一下，问道<br>
			“师父，我不是徐凤年那样的人物<br>
			没能让师父有个可以不辱没你名声的弟子，对不起。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			邓太阿正色摇头道：“你错了，有你这个徒弟，已经是最好了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			离阳江湖有曹长卿有徐凤年这样的风流人物，当然很好<br>
        	但我邓太阿有你这样的徒弟，是最好
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			天底下如果有人要你过得不好<br>
			很简单，先问过我这个做师父的答应不答应
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
			中年人想起昨夜师徒二人坐在小院里谈心的末尾<br>
			徒弟跟他说就不要跟剑雨楼计较什么了，他当时点头答应了<br>
			徒弟信不过，又重复了一遍<br>
			他笑着说当徒弟的尚且这么好说话，他这个做师父的能差到哪里去
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			事实上邓太阿还有句话没有说出口<br>
			他这个师父从来就没有跟谁好说话过<br>
			对吴家剑冢是如此，对江湖也是如此
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			所以摊上他这么个爱管闲事又心慈手软的徒弟<br>
			是他邓太阿这辈子除了练剑有成之外，最大的麻烦<br>
			也是最大的骄傲
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 中原宗师，尽至关外》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她直截了当道<br>
	        “既然公子不是北莽蛮子，那我就可以说些敞亮话了<br>
	        如有冒犯，请公子不要生气<br>
	        只要公子能保住司马家族一百二十四口人<br>
	        不论公子索要什么，只要我给得起，我一定给！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年没有说话<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        徐凤年转头看着这个女子，眼神恍惚<br>
        	她瞬间眼神冰冷起来，无形中语气也冷硬了几分<br>
        	“我说过，只要我给得起，公子都可以拿走！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她这辈子实在是见过太多男子在她面前露出这种神色了<br>
	        早年是外城权贵，后来是内城枭雄<br>
	        比如董家的董铁翎，李家的那父子三人<br>
	        还有那些个自恃榜上高手便言语轻佻的男子
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她面无表情道：“但是公子要的，我只会给一次。”<br>
        	她早就不是那种会以为江湖处处有侠义的无知少女了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这么多年，为了这个家族<br>
	        她顺应西域这座城的规矩，也做了许多超出道义底线的事情<br>
	        残酷，血腥，肮脏，阴谋，算计，陷阱
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        但是对她自己来说，有件事，始终守住了底线<br>
	        她原本以为再过几年，也许最多十年<br>
	        西域都不会再对她这个柴夫人的容颜津津乐道<br>
	        不会再有年轻人也会对她的身段垂涎三尺<br>
	        那么她就算对得起那个记忆早就模糊只剩下一个姓氏的丈夫了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年没有因为误会而恼羞成怒，只是笑了笑<br>
	        “柴夫人想多了，只是你让我想起了一个很重要的人。”<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        柴夫人嫣然一笑，轻轻点头<br>
	        “对啊，在堂堂北凉王眼中<br>
	        恐怕除了北莽百万大军压境，就再没有大事了<br>
	        除了离阳皇帝和北莽女帝，也再没有什么大人物了吧？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年讶然道：“猜出来了？”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她沉默片刻，微笑道<br>
	        “本来是随口胡诌的<br>
	        王爷肯定是只有在无足轻重的女子面前，才这么容易被套话，对吧？”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年也不否认什么，忍俊不禁道：“这么记仇，不好。”<br>
        	这下轮到柴夫人目瞪口呆了，“你真是北凉王！”<br>
        	...
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        柴夫人笑着轻轻摇着头<br>
	        似乎是不敢相信自己脚下这块渗满鲜血的土壤<br>
	        有一天会出现这幅世外桃源的美好画面<br>
        	但她下意识伸手捋了捋一缕散乱的鬓角青丝，动作轻柔地捋往耳后
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 两人之战，两国之战（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        当时在城内，徐凤年与拓拔菩萨大战在即<br>
	        她承诺只要徐凤年出手帮助司马家族稳住局势<br>
	        那么她和家族就会尽力为北凉出力死战一次<br>
	        大概徐凤年和柴冬笛都没有想到，需要她这么快就兑现承诺<br>
	        而徐凤年更没有想到，这个女子竟然真的就亲自带人出战了
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一诺千金<br>
       		这四个字，没有半点水分
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        侠，女子也做得<br>
        	侠气，女子也不少
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        柴夫人柔声道：“王爷真不把柴冬笛当外人呀。”<br>
        	徐凤年举起双手，苦兮兮求饶道：“柴夫人，你就放过我吧。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	柴夫人在马背上捧腹大笑<br>
        	徐凤年的眼角余光，有意无意瞥了一下那边<br>
        	峰峦起伏啊<br>
        	徐凤年其实心无杂念，有些追思，有些枉然
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	...<br>
        	柴夫人突然笑了，眨了眨眼眸，转头俏皮道<br>
        	“我是个姿色……还过得去的女子<br>
        	不管对王爷怎么想，都还是想着能让男子喜欢的<br>
        	尤其是那种不是一眼见着我就想着饿虎扑羊的男子<br>
        	如果他时时刻刻正人君子，心里头，会失落的。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			“就像王爷说有些得意，只能与某些女子说<br>
			我这些很不守妇道的言语，也只能跟王爷说了。”<br>
			...
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
			柴夫人抿起嘴唇，痴痴望着他<br>
			...
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
			徐凤年抱拳送行，然后便缓缓前行<br>
			冷不丁柴夫人在身后轻轻喊道：“徐凤年。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年根本就没有转头，快马加鞭
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			柴夫人笑着大声道：“我柴冬笛在西域等你！我要给你生孩子！”<br>
			徐凤年落荒而逃
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
			很多很多年后，西域凤州一座城头<br>
			大雪停歇后，妇人已白头，坐在轮椅上<br>
			膝盖上搁着温暖厚重的毯子，笑望向远方，合眼而睡
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			一个恍惚，好像便等了很多年<br>
        	老妇人泪眼婆娑，小声呢喃
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			弥留之际，她突然竭力睁开眼眸<br>
        	她终于笑了
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她视线模糊，用心且用力地望向那个蹲在身边的人<br>
			沙哑道：“有些晚哦。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			那个人点头道：“让你久等了。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她微微摇头，试图抬起手，似乎是想着理一理鬓颊发丝<br>
        	但是她实在没有那份精气神了<br>
        	所以她有些遗憾
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			那个人帮她拢了拢毯子，柔声道：“放心，你还是很好看。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她低下头，嘴唇微动<br>
        	他嗯了一声，说道：“好的。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她说<br>
        	下辈子<br>
        	她闭上眼睛
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			初见，他便是这么温柔<br>
			最后一次见，还是如此<br>
        	不管有没有下辈子，都没有关系了
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			城头之上，夕阳西下<br>
        	老人，她叫柴冬笛<br>
        	老人，他叫徐凤年
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 侠客行（三）》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        女子一如既往，默不作声<br>
	        端上温热适宜的饭菜，小筷子夹菜吃着<br>
	        偶尔打量一眼，那个一只脚架在长凳上<br>
	        只顾自己狼吞虎咽的男子，从不愿与她多说一句话的男子<br>
	        便是她的夫君了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        却也从来不见她如何把幽怨委屈摆在那张清清秀秀的脸面上
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        张边关总喜欢说她之所以这般好脾气，是畏惧他的家世<br>
	        瘦死骆驼比马大，他张边关再没出息，也是张巨鹿的儿子<br>
	        她能不小心翼翼伺候着？<br>
	        只是每次说到这点，张边关总要自己给自己一个大嘴巴<br>
	        说花鸟鱼虫才用伺候这两个混账字
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        然后她就偷着笑，直到张边关瞪她，她才撇过头<br>
	        只是嘴角那份淡淡笑意不见清减就是了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        这一晚的深夜，张边关在她熟睡之后，悄悄呜咽起来
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “我是怕自己喜欢你，更怕你喜欢上我，才这样的啊。”<br>
        	“我怎么会不想要一个听话懂事的孩子，儿子女儿都很好啊。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “可我是张巨鹿的儿子，我做的越多，错的就越多<br>
	        如果我把真相跟你说了，你是逃走？可你能逃到哪里去？<br>
	        不逃，活得就能比当下更轻松了？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “你再笨，陪着我死的时候也会醒悟过来，可我宁肯到那个时候你再来恨我<br>
	        只想着让你这会儿糊糊涂涂埋怨着我不争气，没出息，不当家<br>媳妇，这辈子就当我欠你了，如果真有下辈子，我肯定还你……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        张边关满脸泪水，胡乱擦干净以后，渐渐昏昏沉沉睡去
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那个背对他面墙而睡，整夜纹丝不动的温婉女子<br>
	        直到听到夫君的鼾声，这才缓缓睁开眼<br>
	        她的眼神，温柔依旧<br>
	        一如她当年走下轿子那一天，被他掀起红盖头那一刻<br>
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        第二天清晨，张边关又没心没肺般吃过早点，大步出门离家<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        今天的首辅大人幼子，依旧还是那个太安城甚至是天底下最值得嘲弄的世家子
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        可那女子呢？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        女子安安静静做着一件又一件的琐碎家务<br>
	        她手头没有事情的时候，就斜坐在内院门槛上<br>
	        望向院门，等着他回家<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 家事国事天下事》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        张巨鹿招招手，让管事又搬来一条小板凳，坐下后问道<br>
	        “这趟来的由头，是不是蔓儿跟你要了一封休书？觉着一口郁气出不得？<br>
	        都嫁鸡随鸡嫁狗随狗那么多年了，却在这个关头弃你而去？<br>
	        有种夫妻本是同林鸟大难临头各自飞的憋屈感觉？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 离阳失其鹿（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			被接连问了好几个问题的张边关摇头道：“她这么做，我不介意。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 离阳失其鹿（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			张巨鹿欲言又止，最后只是说道<br>
			“别恼她，张家三个儿媳妇，就数她最不容易<br>
			难为她做这个恶人了，这般聪慧心善的良家女子<br>
			是我们张家对不住她。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 离阳失其鹿（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			张边关直直望向这个爹，后者反问道：“明白了吗？”<br>
        	张边关猛然间记起一事，顿时哽咽起来
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 离阳失其鹿（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			女子无情时，负人最狠<br>
        	女子痴情时，感人最深
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 离阳失其鹿（中）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
			一条狭窄巷弄里的僻静院落，一个女子安静坐在内院门槛上<br>
			外院柴门开着，她望着门外
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size:18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 西北遍地起狼烟，京城人人得太平》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			像是在等人回家
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size:18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 西北遍地起狼烟，京城人人得太平》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她偶尔会听见那些贩卖冰糖葫芦的悠扬吆喝声从远处传来<br>
			但可能是这条巷子实在太小了，见不着那些小贩扛着糖葫芦的身影从门口经过
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size:18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 西北遍地起狼烟，京城人人得太平》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她伸手放在腹部，柔声道：“边关，我和孩子都很好。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size:18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 西北遍地起狼烟，京城人人得太平》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			但我们都很想你
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size:18px;margin-left:60%">
	        —— 《雪中悍刀行 · 章节名 · 西北遍地起狼烟，京城人人得太平》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
			桓温辞世的第二年，离阳新帝为永徽年间第一人张巨鹿平反<br>
			追封安国公，美谥文正
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 事了拂衣（下）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			有个姿色并不如何出众的温婉妇人<br>
			带着已经可以背诵许多儒家经籍的孩子<br>
			看着那一排坟墓，让她儿子依次磕头过去
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 事了拂衣（下）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			最后娘俩并肩坐在一块刻有张边关这个名字的碑前<br>
			孩子像往年一样，为他爹，为他爷爷<br>
			为母子两人和一位女子之外的那张家一家人，大声读书
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 事了拂衣（下）》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        苏酥恶狠狠道<br>
	        “你再这样，我可就使坏了啊<br>
	        孤男寡女的，我脱衣服了，真脱了啊<br>
	        我先脱为敬，姑娘你看着办，随意。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大雨撑小伞，指玄对金刚》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她面朝苏酥，歪了歪脑袋，依稀可见嘴角翘起
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大雨撑小伞，指玄对金刚》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        苏酥无可奈何，伸手将油纸伞往她那边推了推，说道<br>
	        “得，你厉害，你是女侠。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大雨撑小伞，指玄对金刚》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一起站着淋雨，苏酥实在扛不住大雨稀里哗啦往身上冲刷，郑重其事道<br>
	        “姑娘，你真不怕淋出病来？要是病倒在我家门口，可没钱帮你治病。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大雨撑小伞，指玄对金刚》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她靠近苏酥，一起撑伞<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大雨撑小伞，指玄对金刚》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
			这个貌不惊人的年轻人本名苏瑛，他的父亲是蜀国皇帝<br>
			他的亲叔叔是那个大名鼎鼎死守国门的西蜀剑皇<br>
        	但他始终只觉得自己叫苏酥更顺口一些，也更轻松惬意一些<br>
        	只是那个在整日浪荡北莽那座小城的小人物，做着自己都觉得滑稽的白日梦
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 少侠和魔头》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	所以在和她来到南诏后<br>
        	除了勉强应酬那些十几年前都是高不可攀的年迈权贵<br>
        	更喜欢带着她去外头散心透气，而目盲的她也从不拒绝<br>
        	背着古琴与他一起走江湖，走他心目中的江湖
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 少侠和魔头》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	他说他这辈子最想当大侠，她说好<br>
        	然后她亲手帮他买了一名大侠该有的绝世宝剑<br>
        	帮他装扮了一身看着就像世家子的行头<br>
        	教他行侠仗义的时候如何开场说话，如何假装高人风范
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 少侠和魔头》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	她来做杀人如麻的女魔头，他来当那个打败魔头的大侠<br>
        	...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 少侠和魔头》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        突然，苏酥猛然惊醒，疯狂一般冲出屋子<br>
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 少侠和魔头》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			然后他看到她飘然离去，落在了芦笙场之中，站在了那些甲士之前
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 少侠和魔头》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			苏酥突然哭笑起来<br>
        	这个在异国他乡胆小如鼠了二十来年的年轻人<br>
        	这个在前不久两人演戏中还傻乎乎崴脚的蹩脚少侠<br>
        	第一次满肚子的豪气，趴在栏杆上，扯开嗓子吼了一句
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 少侠和魔头》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			“媳妇，等我！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 少侠和魔头》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			只是薛宋官没有让他豪气干云太久<br>
			她扯去包裹古琴的棉布后，轻拨一根琴弦<br>
			美人靠后的苏酥就立即晕厥过去
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 少侠和魔头》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			然后目盲的她转头“回望”了一眼
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 少侠和魔头》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她只是有些遗憾，都说曲散人终<br>
        	她见不到，他听不到<br>
        	...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 少侠和魔头》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			苏酥转过头，笑脸灿烂<br>
			“如果，我是说如果有一天，我能够真正放下一切陪你去行走江湖了<br>
			我要是跟新认识的大侠宗师们说一句<br>
			当年跟天下第一人的徐凤年还跟我蹭吃蹭喝过，会不会很有面子？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			女子想到自己当年在北莽，还差一点就在雨巷中杀了那位年轻藩王<br>
			会心一笑，“不能再有面子了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			苏酥笑意醉人<br>
			“虽然还是很嫉妒徐凤年，但世上有种人，不管如何<br>
			只要认识了，你都讨厌不起来。是吧？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			目盲女琴师笑着没有说话
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			苏酥小心翼翼问道<br>
			“你真的……不喜欢他？<br>
			说实话，如果我是女子的话，恐怕也会对他恋恋不忘的。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她无奈道<br>
			“喜欢他做什么？因为徐凤年长得玉树临风？<br>
			可我是个瞎子啊。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			苏酥挠了挠头，总觉得这个理由有哪里不对
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她趴在栏杆上<br>
			“以后我们去中原江湖的话<br>
			还是我扮演杀人如麻的女魔头，你假扮行侠仗义的少侠？”<br>
        	苏酥望着远方，眼神坚毅，“不了！我们神仙眷侣！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			目盲女子破天荒红了脸，扭过头，轻声道<br>
			“酥酥，我是个瞎子。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			苏酥低下头，看着她留给自己的后脑勺，温柔道<br>
			“我知道。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			这位指玄境界的女子高手柔柔怯怯道：“我岁数也比你大。”<br>
        	苏酥笑道：“我也知道。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她转过头，抬起头，“望着”苏酥，似笑非笑道<br>
			“如果以后到了佳丽无数的中原江湖，给我发现你多瞅了几眼女侠仙子<br>
			我薛宋官就把她们直接打杀了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			苏酥悻悻然道：“这个嘛……以前真不知道，不过现在也知道了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她嫣然一笑，“骗你的。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			苏酥伸出手掌轻轻放在她的额头，“我虽然不是瞎子，但我眼里，只有你。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 大珠小珠落玉盘（上）》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
			徐凤年好奇问道：“薛姑娘可是有话要帮苏酥或是陆老夫子转告？”<br>
			背负琴囊的目盲女子摇头道：“苏酥对北凉的愧疚，我来偿还。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 北莽压境拒北城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年停下脚步<br>
			“那你有没有想过，一旦你死在凉州关外<br>
			苏酥一辈子都抹不平的遗憾，谁来弥补？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 北莽压境拒北城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			薛宋官一如既往地语气清冷道<br>
			“我只知道，苏酥活得不开心<br>
			我能做到的事情却没有做，我这辈子也不会开心。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 北莽压境拒北城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年摇头沉声道：“薛宋官，我劝你回西蜀，回到苏酥身边！”<br>
			薛宋官同样摇头道：“我绝不能让他继续觉得‘百无一用是苏酥’！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 北莽压境拒北城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年脱口道：“你有没有想过苏酥到底想要什么，又是最想要什么？”<br>
        	薛宋官转头，目盲的她轻轻“望向”这位年轻藩王
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 北莽压境拒北城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年顿时无言以对<br>
        	自己那些不为人知的所做之事，与这位看似不可理喻的执拗女子，有什么两样？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 北莽压境拒北城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年重重吐出一口浊气，苦笑道：“那就留下来吧。”<br>
        	薛宋官点了点头<br>
        	两人继续前行，徐凤年突然说道：“这会儿，酥饼肯定在胡乱吃醋。”<br>
        	薛宋官会心一笑，嘴角翘起，满脸温柔
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 北莽压境拒北城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年哼哼道：“薛姑娘，你竟然能看上酥饼这种家伙，真是……”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 北莽压境拒北城》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			年轻藩王没有继续说下去，薛宋官笑道<br>
			“王爷是想说瞎了眼吧，可我本来就是个瞎子啊。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 北莽压境拒北城》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        七窍微微流血的中年书生转身<br>
	        似乎想要伸手去触碰妻子，但终究没有这个勇气<br>
	        走到院门口与女儿擦肩而过时，柔声道<br>
	        “青锋，以后就由你照顾你娘了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 指玄对指玄》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        妇人猛然喊道：“轩辕敬城，你要去哪里”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 指玄对指玄》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        中年书生继续前行，温言笑道：“去牯牛降大雪坪<br>
        	把这个家扫地扫干净了，你们便真正自由了<br>
        	圣人说一屋不扫何以扫天下，可惜轩辕敬城这辈子也就只能做到这一步了”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 指玄对指玄》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “轩辕敬城不后悔当年娶你。”<br>
	        ...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 指玄对指玄》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        ...<br>
	        她跨过门槛，看也不看那具血肉模糊的尸体，笑道<br>
	        “这又如何，轩辕敬城不是咱们娘俩知道的那个轩辕敬城<br>
	        我就得悔青了肠子，哭得梨花带雨去求他回心转意<br>
	        然后与他相敬如宾，在徽山一起白头偕老？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 天象对天象》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        轩辕青锋泪流满面，道<br>
	        “娘，你当真一点都不心疼？”<br>
        	她笑了笑，道<br>
        	“我啊，早就不知心疼的感觉了<br>
        	你要想去，就去大雪坪吧，娘想一个人好好静一会儿。”<br>
        	...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 天象对天象》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        她终于启封一坛酒，搬来一套尘封多年的酒具，酒具是那男人自制而成<br>
	        反正除了习武，那人仿佛没有不擅长的事情
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 当归》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			独坐的她盛了一杯酒，放在桌上<br>
			好似对于喝不喝酒，犹豫不决<br>
			她没来由开始恼恨自己，伸手猛地拍掉酒杯
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 当归》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			半响后她起身去拿回酒杯，才发现杯底刻有两行小字，字迹清逸出尘
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 当归》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	“人生当苦无妨，良人当归即好。”<br>
        	...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 当归》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
        	轩辕敬城说过一句话，娘难得记下了<br>
        	男儿腹中才华千万斤，不及女子胸前四两重
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
        	已不再年轻的女子眼神柔和，笑道<br>
        	“一杯桂酒入嘴去，两朵桃花脸上来。”<br>
        	轩辕青锋平淡道：“这是爹写的。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
        	她平静道<br>
        	“轩辕敬城说了那么多写了那么多，总有几句会记住的<br>
        	古籍记载招摇山多古桂，可娘亲上山时，已经所剩不多<br>
        	其中又以那株唐桂最年老最茂盛<br>
        	每到秋季，桂子如雨，荣而不媚”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她犹豫了一下，缓缓道：“就好似轩辕敬城为人处世。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			轩辕青锋握紧酒杯，抬头死死盯住她<br>
			咬牙哽咽道：“现在再说我爹的好，岂不讽刺至极”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她淡然道：“娘可曾说过轩辕敬城的不好”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			轩辕青锋嘴角咬破，渗出血丝在酒杯中，声音颤抖问道<br>
			“娘，你喜欢过爹吗，哪怕是一点点？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她摇头道：“不知。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			轩辕青锋发疯般冷笑连连，道<br>
			“那便是从未喜欢过了。可怜爹为你读书二十年<br>
			读出一了个千百年来天底下最滑稽可笑的陆地神仙”<br>
        	她没有反驳
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			轩辕青锋丢掉酒杯，霍然起身，背对她时，沉声道<br>
			“娘，你放心<br>
			爹耗费心神才造就眼下局面<br>
			青锋一定会拼死让徽山不倒，好让娘过一个安安稳稳的晚年”<br>
			她还是没有出声
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			等到轩辕青锋离开庭院，她才缓慢起身<br>
			拎起烫手酒壶不觉疼痛，径直走往大雪坪
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			雨过天晴，大雪坪风景怡然
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她来到崖畔，展露出一个谁都不曾见过的凄美笑颜<br>
			“敬城，不与你赌气了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			她纵身一跃
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 赌气》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			附：<br>
			即便这仅是看似中年的道人早已超脱，此时仍是喟叹道<br>
			“轩辕敬城，既然明知强求不来，那般付出，又是何苦来哉？<br>
			一身才华，贫道生平仅见<br>
			若是用在徽山以外，天地何人何事能让你束手束脚？<br>
			怎就为了一名女子，便赌上一切，只为了能远远瞧上几眼？<br>
			相争不如不争啊”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 等红衣》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			“还有你这痴情却不懂情的女子<br>
			纲常伦理道德羞耻，不顾便也不顾了，怎的连谁对你好都罔顾了？<br>
			你口口声声不挂念轩辕敬城，可若真不挂念<br>
			为何要如何让轩辕敬城不痛快，便如何悖逆行事？<br>
			人与人相遇，结缘无非善孽两种，孽缘就不是缘了？”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 等红衣》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			以后你就会明白，有些女子，明知很不好，可就是放不下的
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 等红衣》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年纳闷问道：“你跟我说这些做什么”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她托着腮帮，无形中将胸脯搁在桌面上<br>
	        呈现出两团晃眼的丰硕，媚眼笑道<br>
	        “你这才入江湖的雏儿，酒里没有蒙汗药，就不许老娘在碗底抹上一些吗”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年瞪眼道：“你”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她笑道：“敢吃老娘的豆腐，你有几条命<br>
	        等会儿把你脱光了丢到砧板上，先剁下你的那条小蚯蚓，做下酒菜<br>
	        你说滋味该是如何”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年摇摇坠坠，她愈发开心了<br>
        	结果摇了半天，她也没瞧见这俊逸书生倒下
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        直到察觉到眼前年轻公子哥一双勾人丹凤眸子眯起<br>
	        她才咬着嘴唇愤恨道：“逗我好玩吗”<br>
        	徐凤年坐直以后，哈哈笑道：“好玩。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        结果，女子噗嗤一声，笑道<br>
	        “傻乎乎的俊哥儿，老娘其实没在你碗底抹药，谁玩谁呢”<br>
        	徐凤年愕然
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她柔声道<br>
	        “你走吧，别意气用事，上山去了那座寨子，就算掉进了大火坑<br>就算你运气好，有过硬身手傍身，被你爬出来，怎么也得掉一层皮。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年柔声道<br>
	        “谢过你了，知道方才你扮恶人，是想帮我脱身<br>
	        被捅上一刀换活命，不过就是丢了一身家当，怎么看都是赚的。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她笑了笑，没有言语<br>
        	徐凤年低头喝了口酒<br>
        	两两无言
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她突然说道<br>
	        “以往我不是这般菩萨心肠的，只不过你长得跟我男人有几分相像而已。”<br>
        	徐凤年一本正经点头道：“由此可知你男人是何等的风流倜傥。”
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        女子娇笑着泼了一碗酒过来<br>
        	徐凤年轻轻伸出手，揽雀式<br>
        	无比玄妙地将酒水凝成一块，然后重新放回她眼前碗中<br>
        	谁说覆水难收<br>
        	...
        	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 揽雀收覆水》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        这名也曾素手研墨红袖添香的女子，也曾做过人肉包子的青竹娘<br>
	        醉眼惺忪，泪眼朦胧
	        </div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 这么高》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “我那夫君，没做过什么坏事，好事倒是做了太多<br>
	        府上丫鬟都是苦命孩子，犯了纰漏，他都不舍得说重了<br>
	        都由我来白脸红脸一并唱了<br>
	        家里租赁出去的庄稼地，年份不好<br>
	        说是收了欠条，可堆了一年又一年<br>
	        哪有去讨要过？怎么就这么死了？”
	        </div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 这么高》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “你们既然是替天行道的英雄好汉，劫富济贫就是<br>
	        为何连人都杀光了才肯罢休？你们杀的，都是不比你们坏的好人啊”
	        </div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 这么高》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年平静道<br>
	        “我上次见到远嫁的大姐，劝她回家，她不肯<br>
	        说初嫁从亲再嫁由身。我知道她在等人。”
	        </div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 这么高》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        妇人哭笑了一声，“等到没有”<br>
	        徐凤年点头道：“等到了，可我宁愿没有等到。”<br>
	        她撇过头，胡乱擦了擦眼泪，不再喝酒，也不再抽泣<br>
	        两人沉默以对
	        </div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 这么高》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        砰一声，喝醉了的她脑袋侧着敲在桌面上<br>
	        她嘴唇颤抖平伸出一只手，柔声道<br>
	        “我女儿，若是活着，该有这么高了吧”<br>
        	她伸出去的手掌略微抬高了一些<br>
        	那只按在桌面上的手，五指僵硬，“要更高一些。”
        	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 这么高》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年说道<br>
	        “我啊，重新捡起刀习武以后<br>
	        好像就没做过半次跟行侠仗义搭边的好事<br>
	        今天不讲理一次，你说想杀谁，我就杀谁。”
	        </div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 这么高》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她只是痴痴扭头，望着这个愈发陌生的陌生人，问道<br>
	        “你杀了人，我女儿就能活着，被我看着一点一点长高吗”
	        </div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 这么高》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年背好那柄春秋剑，往山上行去<br>
	        ...
	        </div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 这么高》
	    	</div>
    	</div>
        <div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			...<br>
	        青竹娘一脸愕然，然后喃喃自语：“死了终于死了”<br>
        	徐凤年点头道：“死得不能再死了，不骗你。”
        	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风情胸间来》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        青竹娘趴在桌面上怔怔出神<br>
	        高耸双峰又出来吓唬人了不是？就不怕压塌了桌子啊？<br>
	        徐凤年正大光明瞧了几眼，笑问道：“会骑马”<br>
	        青竹娘媚眼一抛，“老娘连人肉包子都会做，怎么不会骑马。”
	        </div>
		      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风情胸间来》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年眼神古怪，点头恍然道：“会骑马啊。”<br>
	        青竹娘媚眼如丝，桌底一脚轻柔踩在这名负剑游子的脚背上<br>
	        柔声道：“可不是哩？公子不信的话......”
	        </div>
		      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风情胸间来》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年摇头道：“我不是随便的男人。”<br>
	        青竹娘停下挑逗，眼皮低敛，轻声道：“我是随便的女人，是吧。”<br>
	        言语末尾，甚至连疑问语气都不曾有<br>
	        ...
	        </div>
		      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风情胸间来》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年这才慢慢起身，绕着酒桌走到青竹娘身边，将她一把抱起<br>
			把她抱到自己那匹马上，仰起头说道<br>
			“青竹娘，去蓟州，以后找个看得上眼的男人，再嫁了便是<br>
			谁敢碎嘴你，我让两位当家的撕破他们嘴巴。”
			</div>
		      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风情胸间来》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			马背上，还带着酒劲的少妇突然哭了起来<br>
			弯腰抱住这名游学书生的脑袋，只是不肯松手
			</div>
		      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风情胸间来》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			很久，很久<br>
        	徐凤年终于无比艰辛出声道：“我喘不过气了。”<br>
        	忠义寨汉子们都看傻眼了，何况青竹娘竟然还有像小娘子娇羞的时候
        	</div>
		      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风情胸间来》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
			徐凤年轻声道<br>
			“好好活着，天底下就没有比这更大的道理了。”<br>
        	她点了点头，擦去泪水
        	</div>
		      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 风情胸间来》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陈芝豹停下马，转身望去
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一小队稀稀疏疏的骑兵尾随而至，胯下战马长途追击，俱是早已疲惫不堪
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        见到为首的负剑女子，一身干涸血迹<br>
	        陈芝豹嘴角的苦涩一笑，一闪而逝
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他调转马头，将水囊轻巧抛掷过去，可惜她没有去接
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        两人相距五十步<br>
	        陈芝豹笑道：“就你们这种不考虑体力的截杀，来两千骑都未必能挡下我。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        已经两昼夜没有合眼的女子冷漠说道<br>
	        “典雄畜抽调的六百铁浮屠和韦甫诚派遣的八百弩手，都死了<br>
	        真是出息得很，都穿上了北莽甲胄。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陈芝豹云淡风轻说道<br>
	        “杀他们做什么，他们可都没有反。只是不凑巧出现在西域而已。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐渭熊平缓了一下呼吸
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陈芝豹没有急于有所动静，仍是勒马而停<br>
	        长枪一端指向马蹄下的黄沙，“我没有想到会是你来，否则也就不多此一举了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐渭熊讥讽道：“还有你陈芝豹没有预料到的战事”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陈芝豹淡然道<br>
	        “算倒是算到了，只是不想承认<br>
	        不知为何，每当我想到那些最不想出现的情景，往往都会出现，一次都没有例外。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐渭熊直接问道：“你真要反出北凉”<br>
	        陈芝豹微微侧了侧脑袋，反问道：“谁说的”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐渭熊不再准备说话，轻轻吐纳，背后古剑颤抖不止
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陈芝豹仍是没有提起长枪哪怕一寸一尺的迹象<br>
	        “我小时候，我不想我爹替义父去死<br>
	        结果他二话不说带着六十二位陈家子弟去断后，他还是去了。<br>
	        第二次，我不想世子殿下拒绝入京做安享富贵的驸马，他没去。<br>
	        上一次，我不想他活着从北莽回到北凉，他活下来了。<br>
	        这一次，我不想看到你，你来了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陈芝豹终于提起那杆梅子酒些许<br>
	        “这些年，我什么都没有做，我想义父慢慢老死在北凉王的位置上<br>
	        现在，我仍是不想做那不忠不义的逆臣逆子<br>
	        所以先前哪怕明知道世子殿下三次出行，我仍是袖手旁观<br>
	        最后一次不想做什么，好像偏偏又出现了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        陈芝豹弯腰从挂囊中取出一枚枪头，嵌入那一杆本就不完整的梅子酒
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        低头时，这位白衣缓缓说道<br>
	        “梧桐院子那个叫青鸟的丫鬟，是枪仙王绣的女儿，我知道<br>
	        那杆刹那枪留在了武库，我也知道<br>
	        她被培养成死士，以后专门用作杀我，我还是一清二楚。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “徐渭熊，既然你是那个躲躲藏藏了二十多年的死士甲<br>
	        我陈芝豹今天就让你死<br>
	        毕竟，你生前最后见到的男人，还是我。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “我会带着你的尸体去西蜀，做十年的蜀王妃。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 截杀截杀截杀》
	    	</div>
    	</div>
    </div>
    <div class="section">
        <div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她出身米脂那个盛产美人的地儿，而她又是方圆百里的佼佼者<br>
	        许多姿色不如她的女子都已成为官爷军爷们的侍妾<br>
	        或是养在好几进大私宅里的金丝雀，她不羡慕<br>
	        只觉得守在这儿，守在右松身边就很好了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 小娘不知羞》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她站直了腰，擦了擦汗水<br>
        	只是不知那位他们恩人的徐公子如何了<br>
        	她俏脸一红，轻轻骂了自个儿一句不知羞<br>
        	...
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 小娘不知羞》
	    	</div>
    	</div>
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        许清愣了一下，眨了眨眼睛，以为自己看花眼了<br>
	        使劲眨眼后，还是觉得不可思议
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他的身影，怎么跟那位两次途经倒马关的公子哥如此相像
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那人转过身，许清立即如释重负，但当她看到他的眼神，又提心吊胆
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        相貌不是一个人，但眸子和眼神又太像了<br>
	        许清整个人都懵了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        明知眼前这位高不可攀的年轻藩王，注定不可能是那个人<br>
	        但她在这一刻，很不合时宜地想起了那个人，真的很想他了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        小娘许清知道自己不应该这样的，可她就是这样了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年其实也愣了一下，但很快想清楚其中缘由<br>
	        板上钉钉是皇甫秤的多此一举，不过事已至此，他也不想多说什么
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        走到她身前，接过箱子，淡然说道<br>
	        “本王自己穿衣就行，你在院子等着便是，一炷香后离开<br>
	        跟门外的王绿亭说一声，本王说了，蟒袍不错<br>
	        还有，让他先别急着离开王府。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        许清茫然点头，也不知道听进去了没有<br>
        	徐凤年转过身，笑了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        在他走上台阶的时候<br>
	        背后突然传来一声怯生生但已经肯定是那女子这辈子最大胆识的喊声：“徐公子”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他没有停下脚步<br>
        	她涨红了脸，更是满头汗水<br>
        	几缕鬓角发丝黏在脸颊上，抬起手臂，偷偷擦了擦
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她开心地笑了，不是他啊<br>
        	不是才好<br>
        	不是的话，说不定还能再见
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她还欠他钱呢<br>
        	他说是一千五百两银子，要她还五十年
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她自己都不愿意承认，答应去金缕织造局，是听他说过自己是陵州游学的士子
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 为他人作嫁衣裳》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        姓温的店小二顺着竹子的手指，看到有女子撑伞过桥，姗姗而来<br>
        	他站起身，笑容灿烂
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        初见她时，是返乡时在镇上集市的那场萍水相逢<br>
	        那时候她的朋友都在笑话他这个瘸子，言语不善<br>
	        把他当做了揩油的登徒子，只有她不一样
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        以前，小年说他是见一个女子喜欢一个，对谁都一见钟情<br>
	        他自己原本以为遇上那回家之前的女子之时，会是最后一个一见钟情的女人<br>
	        事实上也确实如此，那之后，他就不再对谁一见倾心了<br>可是遇上小镇上的她后，他觉得如果这辈子都能跟她过日子的话<br>
	        平平淡淡，就已经比什么都强
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他小跑出去，她刚走下桥
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        小镇小有小的好，没那么男女授受不亲的刻板礼数<br>
	        而她也不怕这些，倾斜了一下油纸伞<br>
	        脸色微红着，替他挡雨
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他在她这儿，从不油嘴滑舌<br>
	        而且事实上回家以后，他就再不像从前那样口无遮拦<br>
	        老实本分，平平凡凡，大概这也是她喜欢他的地方
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        搁在以往，才见着一个女子，他就敢当面调戏一句<br>
	        “姑娘，哥哥我帮你把生米煮成熟饭吧。”<br>
	        若是女子不理睬，他还会说<br>
	        “姑娘你能遇见我是修了三辈子的福，不嫁给我，肯定是倒了八辈子的霉。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        若是女子恼羞成怒，他还有无数后手
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        可是他如今不一样了<br>
	        那时候，见着水灵女子，都是满脑子想着滚被窝<br>
	        现在站在她身边，却连牵手的胆量也没有
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        江湖里，有他<br>
	        江湖外，有她<br>
	        老天爷不欠他温华什么了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她低下头，鼓起勇气说道：“我爹帮我说了一门亲事，我没答应。”<br>
	        他挠了挠头，没说话<br>
	        她抿着嘴
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他突然笑道：“要不，咱们以后生个儿子吧！”<br>
        	她微微张大嘴巴，一脸错愕
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他长呼出一口气，不像是在开玩笑，说道<br>
	        “当年跟我一个兄弟订了一门娃娃亲，谁生了女儿谁吃亏<br>
	        当然，要是咱们生了个女儿，也很好。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        她撇过头，涨红了脸，但似乎点了点头<br>
	        他无意中低下头，看见她不撑伞的那只手又习惯性拧着衣角<br>
	        他一咬牙，终于壮起胆子又握住她的手<br>
        	她轻轻抽了抽手，然后就由着他握住
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        温华咧嘴笑着<br>
        	不握剑了<br>
        	握着她的手，这样的江湖，比什么都好
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 江湖之远》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	魔头谢灵抱住头颅贴在胸口，仰头发出一阵刺破耳膜的野兽嘶吼<br>
	        	房梁颤动，抖落了许多灰尘
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 两颗头颅两行泪》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	谢灵根本不去看战场那边，双眼淌出泪水<br>
	        	低头在娘子额头亲了一下，然后替她抹上睁大瞪圆的双眸
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 两颗头颅两行泪》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	她曾说过<br>
	        	喂，老鬼，输了就输了呗，输给洛阳哩，又不丢人<br>
	        	要不咱们种田养鸡鸭去好了，一起老死，不也挺好<br>
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 两颗头颅两行泪》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	他没答应，说要再与洛阳誓死一战<br>
	        	这些年疯狂杀人夺心吃肝，越发人不像人，鬼不像鬼<br>
	        	可她也从不嫌弃
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 两颗头颅两行泪》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	本以为这辈子多半赢不过洛阳，会死不瞑目，为何你却先死了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 两颗头颅两行泪》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	她说真有那一天，假使只差一丝一毫<br>
	        	就可以打败那个高高在上的洛阳<br>
	        	那就剥开她的胸膛，吃了她的心肝
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 两颗头颅两行泪》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	谢灵两行清泪变血泪！
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 两颗头颅两行泪》
	    	</div>
    	</div>
    </div>
    <div class="section">
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	身材魁梧的蒙离不知何时出现在城门附近的阴影中，眼神复杂，脸色黯然
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	这个沉默寡言的汉子，自从十二年前自己主动请求外放到雪莲城<br>
	        	兢兢业业帮助宋煌煌做出了平地起高楼的壮举<br>两栋高达八层的鸳鸯楼，便是在富饶的西蜀烟柳之地，也是独树一帜
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	十多年的出生入死，一次次死战后独自包扎伤口<br>
	        	一次次站在远处望着那个背影，看得见，抓不住，求不得<br>
	        	蒙离背靠城墙，神色阴晴不定
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	在这个刀口舔血讨生活的汉子眼中，宋夫人就像插在银瓶中的一束妖娆海棠<br>
	        	他愿意老老实实站在远处远观，看着花慢慢凋零<br>但如果有人想要折花入袖，不管那个人是谁，是什么身份，蒙离都会揪心
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	不知何时，宋夫人佩好凉刀，策马来到城墙根下<br>
	        	蒙离站在深重阴影中，照理说她不该看清他的异样神态<br>
	        	宋夫人突然伸出一只手掌在鼻子附近扇了扇<br>
	        	促狭道：“蒙离，我怎么闻到一股醋味”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	 蒙离瞬间涨红了脸，不知所措<br>
	        	 宋夫人翻身下马，率先牵马而行，蒙离犹豫了一下，快步跟上<br>
	        	 宋夫人柔声道：“蒙离，你的心思，我早就清楚”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	 在宋夫人大概是在酝酿些温和措辞的时候<br>
	        	 蒙离已经苦涩开口道：“夫人，我也知道的。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	 宋夫人停下脚步，拍了拍蒙离的肩膀<br>
	        	 第一次正面凝视着这个面貌粗糙心思细腻的汉子<br>
	        	 她神采飞扬，那双秋水长眸流光溢彩，手指向中原，豪迈道
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	 “蒙离，堂堂七尺男儿，大丈夫何必小女子作态<br>
	        	 也许我宋煌煌一辈子都不会喜欢你<br>
	        	 但是你可以让我一辈子都记住有个叫蒙离的男人，如何！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	 “凉莽边境已经狼烟四起，中原腹地很快也要战鼓喧嚣，你这些年间苦读兵书<br>是想继续留在雪莲城蹉跎光阴，还是出去打拼一番”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	 蒙离久久沉默不语，终于说道：“夫人，我可以不去北凉边军，而是去两辽吗”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	 宋夫人将手中马缰递给蒙离<br>
	        	 大笑道：“这有何不可，今日此时起，拂水房雪荷楼就只当蒙离已经死了。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	 蒙离猛然上马，掉转马头，纵马奔出十几步后，再度人马转身<br>
	        	 握紧拳头在胸口重重一锤<br>
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	 “宋煌煌，我蒙离喜欢你十二年了，也竭尽全力护着你十二年了<br>
	        	 我不后悔，哪怕到现在，仍是很开心<br>
	        	 以后如果我出人头地了，一定回雪莲城找你<br>若是不幸死在了两辽边关，希望每年清明时分，能给我遥祭几杯酒！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	 宋夫人大声笑道：“有本事就别死了！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	 蒙离就此离城，单身匹马前往两辽
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 · 章节名 · 一桩买卖》
	    	</div>
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我与鹭对望一眼，望穿千年，他，身披黑金蟒袍
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 二零一九年九月二十四日
	    	</div>
    	</div>
    </div>
	<div class="section">
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	古道，执封天之念， 山河苍生大善，九山海需道劫来 ，吾命无量在
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 耳根 《我欲封天》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	大江南，大江北<br>
	        	南山南，北凉北<br>
	        	南方有江南，三千里<br>
	        	北方有墓碑，三十万
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 烽火戏诸侯 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	天不生夫子，万古长如夜
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 猫腻 《将夜》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	再从头，多少美好不放手
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 风凌天下 《傲世九重天》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	我王林一生，不拜天地，不信鬼神，只跪父母，只敬司徒！
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 耳根 《仙逆》
	    	</div>
    	</div>
    </div>
	<div class="section">
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	一身转战三千里，一剑曾当百万师
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 王维 《老将行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	我见青山多妩媚，料青山见我应如是
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 辛弃疾 《贺新郎·甚矣吾衰矣》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	今朝有酒今朝醉，明日愁来明日愁
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 罗隐 《自遣》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	且将新火试新茶，诗酒趁年华
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 苏轼 《望江南·超然台作》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	待到秋来九月八，我花开后百花杀
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 黄巢 《不第后赋菊》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        	为天地立心，为生民立命，为往圣继绝学，为万世开太平
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 北宋·张载
	    	</div>
    	</div>
    </div>
	<div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        宇宙便是最大的黑暗<br>
	        所谓光明，只是黑暗允许存在的光明
				</p>
	    	</div>
    	</div>
    </div>
	<div class="section">
		<div class="aword" style="font-size: 35px">
			<p class="text">
        画地为牢<br>
        牢以内，是只有我的天地<br>
        牢以外，难道就不是我圈住的天地了？
        	</p>
    	</div>
      	<br>
      	<div class="aword-by" style="font-size: 18px">
        —— 二零一九年九月十三日
    	</div>
    </div>
	<div class="section">
		<div class="aword" style="font-size: 35px">
			<p class="text">
        第一秒，远处青山与我视线之间缓缓降下一层雨幕，如棉沙落地，其声极细<br>
        下一瞬，雨幕如万丈城墙般缓缓逼近眼前，无数雨滴在我眼前急速坠落，如银瓶乍破<br>
        再回神，我与青山间的这方天地早已牢牢地被笼罩在滂沱雨柱之中
        	</p>
    	</div>
      	<br>
      	<div class="aword-by" style="font-size: 18px">
        —— 二零一九年九月六日
    	</div>
    </div>
	<div class="section">
		<div class="aword" style="font-size: 35px">
			<p class="text">
        北凉寒苦参差百万户，多少铁衣裹枯骨<br>
        来来来，试看谁是阳间人屠<br>
        来来来，试听谁在敲美人鼓
        	</p>
    	</div>
      	<br>
      	<div class="aword-by" style="font-size: 18px">
        —— 《雪中悍刀行》
    	</div>
    </div>
    <div class="section">
		<div class="aword" style="font-size: 35px">
			<p class="text">
        “大秦，洛阳！”
        	</p>
    	</div>
      	<br>
      	<div class="aword-by" style="font-size: 18px">
        —— 《雪中悍刀行人物-洛阳》
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那一天，拒北城外，北莽孤注一掷，四十万铁骑压境<br>
    		穿上藩王蟒袍的徐凤年独自掠下城头，腰佩凉刀<br>
    		姜泥身披缟素，登上城头，将紫檀剑匣重重竖放在战鼓之下<br>
    		她深呼吸一口气后，双手拿起鼓槌，开始擂鼓！
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	        </div>
    	</div>
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        当第一声北凉战鼓在天地间响起<br>
    		城外独自站在北莽大军阵前的徐凤年，鬓角飞扬，双袖飘摇，飘然如神仙
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	        </div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一道身形如流星坠落在战场上，刚刚站在徐凤年左侧<br>
	        中年人双手负后，腰间悬挂一柄寻常铁剑，洒然道：“邓太阿在此！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        鼓声中，又一道身影急坠而下，站在了徐凤年右手边<br>
	        她只是高声说出自己的名字，“洛阳！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一人持枪从天而降重重砸落在战场上，高声道：“北凉徐偃兵！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一袭紫衣如虹掠下，女子神色冷漠道：“徽山大雪坪，轩辕青锋。”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一袭腥红如血的袍子飞旋而下，“徐婴！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一声声战鼓<br>
    		一道道流星坠落<br>
    		在年轻藩王左右两侧依次排开
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	     	“隋斜谷！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “东越剑池柴青山！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “武当俞兴瑞！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “吴家剑冢吴六鼎！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “剑侍翠花。”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “西蜀薛宋官。”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “龙虎山齐仙侠！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “武帝城于新郎！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	       “楼荒！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	         “龙宫程白霜！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “南疆毛舒朗！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “南诏韦淼！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        在北莽骑军和拒北城之间的那条横线之上<br>
	        十八人，十八位武道宗师，就这么齐聚拒北城外
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        江湖千年未曾有，以后千年更不会有
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        什么是真正的天下无敌<br>
    		这就是
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        北凉铁骑的马蹄声战鼓声，何其壮烈<br>
    		西北关外，大军阵前，那一声声自报名号，又何其尽显中原风流？
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        姜泥擂鼓如雷，怒喝道：“杀！”<br>
    		绝代风采一如当年北凉王妃吴素
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年握紧凉刀，默念道：“杀！”
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        几乎同时，一线之上的所有宗师，都念了一个杀字
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        他们要以十八人，拒敌四十万骑军！
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《中原宗师，尽至关外》
	    	</div>
    	</div>
	</div>
	<div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        开拓视野，冲破艰险，洞悉所有，贴近生活，寻找真爱，感受彼此<br>
	        这就是人生的目的
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《白日梦想家》
	        </div>
    	</div>
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我们一路奋战，不是为了改变世界，而是为了不让世界改变我
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《熔炉》
	        </div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        有的朋友常是一闪而逝，就像路上的行人一样
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《伴我同行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        如果能让你免受伤害，我宁愿回到最初，从不曾靠近你
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《蝴蝶效应》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        没有你，良辰美景可与何人说？
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《天使爱美丽》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        留下来...<br>
			或者我跟你走！
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《海角七号》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        美好的东西从来不会寻求关注
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《白日梦想家》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我对所有的事情都厌倦的时候，我就会想到你<br>
	        想到你在世界的某个地方生活着，存在着，我就愿意忍受一切<br>
	        你的存在对我很重要
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《美国往事》
	    	</div>
    	</div>
	</div>
	<div class="section">
		<div class="aword" style="font-size: 35px">
			<p class="text">
        你要忍，忍到春暖花开<br>
        你要走，走到灯火通明<br>
        你要看过世界辽阔，再评判是好是坏<br>
        你要留足劲变好，再站在不敢想象的人身边，旗鼓相当<br>
        你要变成想象中那个样子，这件事一步也不能让
        	</p>
    	</div>
      	<br>
      	<div class="aword-by" style="font-size: 18px">
        —— 网易云《告白の夜》小提琴演奏视频下评论
    	</div>
    </div>
	<div class="section">
		<div class="aword" style="font-size: 35px">
			<p class="text">
        山雨已来风满楼
        	</p>
    	</div>
      	<br>
      	<div class="aword-by" style="font-size: 18px">
        —— 二零一九年八月二十九日
    	</div>
    </div>
    <div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        世间剑士独我李淳罡一人，世间名剑独我木马牛一柄
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行 - 李淳罡》
	    	</div>
    	</div>
    </div>
	<div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        小二 上酒
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        五十年鸿业，说与山鬼听
	    		</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人生当苦无妨，良人当归即好
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        江南好，最好是红衣
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        女子无情时，负人最狠<br>
	        女子痴情时，感人最深
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        最苦是相思，最远是阴阳
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        需知做人逆势如饮酒，顺势如倒茶
	    		</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        唯我大楚，宁在雨中高歌死，不愿寄人篱下活
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        辽东猛虎 啸杀中原<br>
			西北天狼 独卧大岗
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        你想要江湖，我便给你一座，<br>
	        你想要天下，我就给你一个。<br>
	        而我呢，就想要个儿子，<br>
	        你给不给？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        天不生我李淳罡，剑道万古如长夜
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        书上说，天下没有不散的宴席<br>
			不要怕，书上还说了，人生何处不相逢
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        天上剑仙三百万，遇我也需尽低眉
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        世间文字八万个，唯有情字最杀人
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        有些事对了，其他事都错了也不要紧
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        情之一字，不知所起，不知所栖，不知所结，不知所解，不知所踪，不知所终
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        世事无奈人无奈，能说之时不想说，想说之时已是不能说
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        有些女子，明知很不好，可就是放不下的
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人生不如意之事七八九，苦事；终归还能与人言一二三，幸事
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        你是我的禅，秀色可参
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        温华笑容盎然：“馒头白啊白，白不过姑娘胸脯。” <br>
			徐凤年笑意醉人：“荷尖翘啊翘，翘不过小娘屁股。”
			</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        此剑抚平天下不平事，此剑无愧世间有愧人
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        易事，难事，风雨事，江湖事，王朝事，天下事，都不过一剑的事
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 28px">
				<p class="text">
	        九天之云滚滚下垂。 <br>
			整座武当山紫气浩荡。 <br>
			他朗声道：“贫道五百年前散人吕洞玄，五十年前龙虎山齐玄帧，如今武当洪洗象，已修得七百年功德。” <br>
			“贫道立誓，愿为天地正道再修三百年！” <br>
			“只求天地开一线，让徐脂虎飞升！” <br>
			年轻道士声如洪钟，响彻天地间。 <br>
			“求徐脂虎乘鹤飞升！” <br>
			黄鹤齐鸣。 <br>
			有一袭红衣骑鹤入天门。
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        李淳罡愿世间心诚剑士人人会两袖青蛇<br>
			李淳罡愿天下惊艳后辈人人可剑开天门
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        红豆生南国，春来发枝冬凋敝，相思不如不相思
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        北凉 死战
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        蜉蝣撼大树，可敬不自量
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        一个波澜壮阔的时代，就让那些英雄，在各自战场上轰轰烈烈去死<br>
	        让那些枭雄，在庙堂上勾心斗角机关算尽<br>
	        求名求利求仁求义，各有所求各有所得，各有所求不得<br>
	        所有风流人物，无论敌我，都尽显风流
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人活一世，成年后不论是苦是福，那都怨不得天地父母了
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        隆冬飘雪时分，凉刀出鞘，横放竖锋，无人时切雪，有人时割头饮血
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        自己提笔写书，不如清风翻书人看书
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        “我喝过很烈的酒，也放过不该放的手，从前不会回头，往后不会将就。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        情到深处，知悔不愿悔
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        什么叫喜欢一个人？那就是见到对方之前，不知情为何物，错过之后，更不知情为何物
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我心净时，何时不见如来<br>
	        我心净处，何处不是西天
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        穷地方的人，命苦，但很多人吃苦的同时，不认命
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 30px">
				<p class="text">
	        送君千里直至峻岭变平川，惜别伤离临请饮酒六两三<br>
			一两愿你江南多雨带油伞，二两愿你酷暑可以轻摇扇<br>
			三两愿你入冬莫忘添衣衫，四两愿你年年多聚无离散<br>
			五两愿你无病无忧心常宽，六两愿你无风无雨长相欢<br>
			六两三，余下三<br>
			我在西北，一关接一关<br>
			与你相隔，一山又一山<br>
			最后只愿我，知道你平安
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 30px">
				<p class="text">
	        君只见，君只见听潮湖万鲤跳龙门 <br>
			独不见清凉山，有名石碑不计数 <br>
			君只见，君只见葫芦口头颅筑京观 <br>
			独不见高墙下，死人骸骨相撑拄 <br>
			君只见，君只见凉州北策马啸西风 <br>
			独不见边关南，琅琅书声出破庐 <br>
			君只见，君只见三十万铁骑甲天下 <br>
			独不见北凉人，家家户户皆缟素
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
	</div>
	<div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        世间万般难事皆可在女子大腿上办妥
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
		<div class="slide">
			<div class="aword" style="font-size: 30px">
				<p class="text">
	        天地无用，不入我眼。日月无用，不可同在。昆仑无用，不来就我<br>
	        恻隐无用，道貌岸然。清净无用，两袖空空。大江无用，东去不返<br>
	        风雪无用，不能饱暖。青草无用，一岁一枯。因果无用，皆是定数<br>
	        江湖无用，两两相忘……<br>
	        参禅无用，成甚么佛？！
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        世间痴情男儿，不论地位高低<br>
	        大抵都是喜欢女子便是错了，而且希望能一辈子知错不改
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        无醇酒美人，不愿来此人间<br>
	        无快剑挚友，不愿老此江湖
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        有些话不说透，自欺欺人，就可以糊涂一世，打打闹闹轻轻松松<br>
			可挑明了，便是仙人也断然没有斡旋余地
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        情，心中青梅<br>
	        年老仍记年少涩
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        无匣也无鞘，暗室夜常明<br>
	        三尺木马牛，可折天下兵<br>
	        欲知天将雨，铮铮发龙鸣<br>
	        提剑走人间，百鬼夜遁行<br>
	        飞过广陵江，八百蛟龙惊<br>
	        世人不知何所求，那袭青衫放声笑：天不生我李淳罡，剑道万古如长夜！
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        莫说我穷得叮当响，大袖揽清风<br>
	        莫讥我困时无处眠，天地做床被<br>
	        莫笑我渴时无美酒，大江是酒壶……<br>
	        世上无我这般幸运人，无我这般幸运人啊……
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        李淳罡大声道：“剑来！” <br>
			徽山所有剑士的数百佩剑一齐出鞘，向大雪坪飞来<br>
			龙虎山道士合式千柄桃木剑一概出鞘，浩浩荡荡飞向牯牛大岗<br>
			两波飞剑<br>
			遮天蔽日<br>
			这一日，李淳罡再入陆地剑仙境界
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        姜泥誓杀徐凤年！
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        当洪洗象抛出桃木剑的那一刻，天雷滚滚，声势顿时压过了江涛<br>
			似有天人高坐云端，向人间大声怒喝道：“吕洞玄，你大胆！” <br>
			洪洗象仰头大笑道：“贫道胆大包天已有八百年了！” <br>
			依然在鞘的桃木剑先是在江面悬停片刻，然后一闪而逝<br>
			天上天人顿时噤声！ <br>
			李玉斧望着江面，没有转头<br>
			小师叔走了，三尺气概，千古风流
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        曹长卿朗声道：“徐凤年！就请你替李淳罡、替王仙芝、替剑九黄，<br>
	        替所有已死在江湖的江湖人，教那些庙堂中人知道，何谓江湖！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        褚禄山猛然间抱拳道：“那就有请诸位，与我褚禄山再走一趟曳落河！”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        莫道书生无胆气，敢叫天地沉入海
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        那我可就真要来一次人间无敌了！
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        徐凤年趴在窗栏上，微笑道：“很简单啊，因为我娘亲曾经对我说过，<br>
	        世道不好，女子活得更难，尤其是漂亮的女子，尤其身不由己，<br>
	        所以我娘要我长大后，能不欺负就不要欺负，能善待几分就善待几分。”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我曾醉酒鞭名马，我曾年少掷千金，我曾春雷换春秋
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        风雪中，老人盘腿而坐，轻声笑道：<br>
	        “都说沙场有刀，不怕死于马背。江湖有酒，不怕死于酩酊。<br>
	        贫道从来不敢杀人，连那酒也总喝不尽兴，一生从没有活得豪气，最后走这一遭……”<br>
	        老道人仿佛在与天地言语，大声道：“且尽兴！”<br>
	        老人伸出手指，直刺双眼<br>
	        然后这位黄紫老真人颤颤巍巍抬起那鲜血淋漓的右手食指，在眉心划出一抹印痕<br>
	        如开天眼
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        轩辕敬城请老祖宗赴死！
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人睡如小死，一睡不醒即大死
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        试问天上仙人，谁敢来此人间？
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        小二 上酒
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《雪中悍刀行》
	    	</div>
    	</div>
	</div>
	<div class="section">
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        我见过沧海的云，巫峡的雨<br>
我见过一月的雪覆于白山，又渐变于葱茏<br>
我在峨眉的林里云兴霞蔚，一径之后，雾水成露，沾于衣襟<br>
我听过柔橹漂浮，声声入水，又归于沉寂<br>
我看到春风，八里十里，衣袖带花<br>
无论何时忆起，它们实在是人生可喜，但都不如我此刻遇到的你
	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 无名
	        </div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        人的脆弱和坚强都超乎自己的想象
	        <br>
			有时 我可能脆弱得一句话就泪流满面
			<br>
			有时 也发现自己咬着牙走了很长的路
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 莫泊桑 《一生》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        别垂头丧气哦<br>
	        显矮
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 锐雯
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        所谓的世间，不就是你吗
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 《人间失格》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        突然很喜欢惊鸿一瞥这个词<br>
			一见钟情太肤浅<br>
			日久生情太苍白<br>
			别人眉来眼去<br>
			我只偷看你那么一眼
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 锐雯
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        有时候我昨天遇到一个人<br>
			感觉她非常有意思<br>
			印象深刻<br>
			但后来就再也碰不上了<br>
			人生就是这样
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 锐雯
	    	</div>
    	</div>
		<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	            	总有一阵风会吹过我再吹过你<br>
					总有一个瞬间我们之前的距离是零
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 锐雯
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	            	记忆是相见的一种方式
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 锐雯
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	            	没有绝望的形势，只有绝望的人
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 锐雯
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	            	“前天我右腿撞到石头，当时觉得疼了一阵也就没事了，今天才发现那一块已经青紫”<br>
					人生很多事情都要延迟许久许久才会感觉到疼<br>
					你能想象吗，也许等到你四十多岁的某个夏夜，开车回家，在某个路口等红绿灯的时候<br>
					你突然反应过来，十九岁的时候，那个人说的那句话原来是这个意思
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 锐雯
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	            	孤独意味着自由和发现<br>
					沙漠孤岛比一座城市更激动人心
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 锐雯
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	            	我想你应该很忙，所以看前面三个字就好了
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 锐雯
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	            	人的一生<br>
	            	最难以保存的，是时间<br>
	            	最终能留下的，是记忆<br>
	            	而能够同时承载两者的，唯有文字
				</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        —— 锐雯
	    	</div>
    	</div>
	</div>
	<!-- <div class="section">
	</div> -->
</div>


<!--激活fullpage效果-->
<script>
$(document).ready(function(){
  $('#fullpage').fullpage();
});
$(document).on('click', '.aword-p1', function(){
  fullpage_api.moveSectionDown();
});
</script>

</body>
</html>