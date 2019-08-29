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
<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
<!-- <link rel="stylesheet" type="text/css" href="http://pw407zrf4.bkt.clouddn.com/aword.css" /> -->

<!-- Google font -->
<link href="https://fonts.googleapis.com/css?family=Noto+Serif+SC&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Zhi+Mang+Xing&display=swap" rel="stylesheet">
<!-- font-family: 'ZCOOL XiaoWei', serif; -->
<!-- font-family: 'Zhi Mang Xing', cursive; -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.js"></script>

<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.4.0/lib/darkmode-js.min.js"></script>


<!-- <script type="text/javascript" src="https://cdn.repository.webfont.com/wwwroot/js/wf/youziku.api.min.js"></script> -->

<!-- <script type="text/javascript">
   // $webfont.load(".aword", "ac0bb6d6e9a34f749410cdabb5d85cf1", "TSSunOld");
   // $webfont.load(".aword-by", "ac0bb6d6e9a34f749410cdabb5d85cf1", "TSSunOld");
   // $webfont.load(".aword-active", "aa322f4793324e9489db1f729a58fb54", "ChekiangSung");
   /*．．．*/
   // $webfont.draw();
</script> -->

<style type="text/css">

/*@font-face {
  font-family: 'TianShiSongTiJiuZiXing';
  src: url('TianShiSongTiJiuZiXing.ttf') format('truetype');
}
*/
.text {
	text-align: left;
	display: inline-block;
}
.aword {
	font-family: 'Noto Serif SC', serif;
	/*font-family: 'TianShiSongTiJiuZiXing';*/
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
	font-family: 'Noto Serif SC', serif;
	/*font-family: 'TianShiSongTiJiuZiXing';*/
	margin-left: 1000px;
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
        往下翻点击左右两边可以看到更多哦
    	</div>
    	<div class="aword-p1">
    		<img id="img" src="http://pw407zrf4.bkt.clouddn.com/%E6%96%B9%E5%90%91%E7%9B%98.png">
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
	        小二 上酒
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
	    	</div>
    	</div>
    	<div class="slide">
			<div class="aword" style="font-size: 35px">
				<p class="text">
	        你是我的禅，秀色可“参”
	        	</p>
	    	</div>
	      	<br>
	      	<div class="aword-by" style="font-size: 18px">
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
	    	</div>
    	</div>
	</div>
	<div class="section">
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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
	        ——《雪中悍刀行》
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