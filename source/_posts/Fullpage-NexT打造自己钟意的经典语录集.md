---
title: Fullpage+NexT打造自己钟意的经典语录集
tags:
  - NexT
  - Fullpage
comments: true
categories: Chocolate
description: 生活就像一盒巧克力，你永远不知道下一块是什么味道
abbrlink: e54bf53d
date: 2019-08-26 19:21:43
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/20190826-2.jpg">

<!-- more -->

<!-- <script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.4.0/lib/darkmode-js.min.js"></script>
<script>
  new Darkmode().showWidget();
</script> -->

### 想法

不知道你有没有那种第一眼见到就喜欢的不得了的句子，经典名言，风流诗句，或者是小说中那些霸气无比的对白......

我是喜欢得有很多，而且老是想着把这些话记录在一个本子上，想着以后偶尔翻翻还会觉得，嗯，挺有滋味

由于刚开始制做自己的博客，期间参考了很多位大佬的作品，发现有[一位大哥做的其中一个页面](https://leaferx.online/sentence/)令我感觉棒极了，就是那种每往下滑一页，就是一句很有意思的语句，加上滑动时那种丝滑般的感受，我就也想做一个这样的页面出来，奈何对于前端不是非常了解，好在做过些许爬虫，于是看了看大哥的页面好像用到了一个叫做``fullpage``的东西

于是就开始了自己的倒腾之路......

附上成果地址`https://joelying.github.io/a-word/`

### 实现

#### 第一步

想在NexT博客中也展示这样一个自己独立的页面，就需要新建一个页面啦

```
hexo new page a-word
```

然后在菜单中添加链接，编辑主题配置文件，添加`a-word`到`menu`中，图标参考了`Font Awesome`中的样式，如下:

```diff hexo\themes\next\_config.yml
menu:
  home: / || home
  about: /about/ || user
  tags: /tags/ || tags
  categories: /categories/ || th
  archives: /archives/ || archive
  schedule: /schedule/ || calendar
+ a-word: /a-word/ || align-center
```

然后找到`hexo\themes\next\languages\zh-CN.yml`，在`menu`下添加页面对应的中文名称

```diff hexo\themes\next\languages\zh-CN.yml
menu:
  home: 首页
  archives: 归档
  categories: 分类
  tags: 标签
  about: 关于
  search: 搜索
  schedule: 日程表
  sitemap: 站点地图
  commonweal: 公益 404
+ a-word: 一言
```

这样一来一个新的页面就出现在首页的菜单栏中了，但是点进去却发现里面的样式已经有了，是被NexT渲染过的，有了固定的模样，那么怎么自己来定义一个页面呢？

于是参考[这篇](https://segmentfault.com/q/1010000017576920)文章所说，在配置文件中忽略渲染这个页面即可

在站点配置文件_config.yml中的skip_render项

```
skip_render: diyPage/**
```

这样的话是忽略diyPage文件夹下的所有文件

```
skip_render: page/diyfile.html
```

这样的话应该是只忽略diyfile.html这一个文件,于是将`hexo\source\a-word\index.md`新建页面的md文件添加在后面，如下：

```[] hexo\_config.yml
skip_render: /source/a-word/index.md
```

但是最终我的页面还是新建完成之后的样子，后来再看到[这篇](https://blog.csdn.net/refined_x/article/details/78271382?utm_source=blogxgwz8)文章中的方法二，在md文件的`font-matter`处添加了

```
---
layout: false
---
```

这下重新部署之后发现页面就是一个干净空白的页面了！

#### 第二步

有了自定义的页面，接下来我就去找这个`fullpage`到底是什么样的，Google一番后，在[这里](http://www.dowebok.com/demo/2014/77/index2.html)看到了我想要的效果演示，也找到了这个`fullpage`的[GitHub地址](https://github.com/alvarotrigo/fullPage.js)

这是它的[中文](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs)`Readme`，依据上面所说实现一个`fullpage`页面应该是极其`easy`的......

但是我不一样，我只是个小白......他说的可以用npm安装，我都不知道该放在哪个文件夹下比较好，对不对，代码应该具体些在哪里才有用......

于是乎我开一启了一轮又一轮的尝试......

最终啊，在网上找倒一个[小实例](https://www.jianshu.com/p/3d42b13f0a4e)，参考如下：

```
<!DOCTYPE html>
<html>
<head lang="en">
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
 <title>Fullpage简单例子</title>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.4/jquery.fullpage.css"/>

 <style type="text/css">
    body{
        color:#fff;/*文字为白色*/
    }
    .section1{
       background-color: green;
    }
    .section2{
       background-color: orange;
    }
    .section3{
       background-color: gray;
    }
    .section4{
       background-color: red;
    }
    .slide{
      text-align: center;
      font-size: 20px;
    }
 </style>
</head>

<body>
//开始制作
<div id="fullpage">
 <div class="section section1"><h1>这是第一屏</h1></div>
 <div class="section section2">
   <div class="slide">slide1</div>
   <div class="slide">slide2</div>
   <div class="slide">slide3</div>
   <div class="slide">slide4</div>
   <div class="slide">slide5</div>
   <div class="slide">slide6</div>
 </div>
 <div class="section section3"><h1>这是第三屏</h1></div>
 <div class="section section4"><h1>这是第四屏</h1></div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.4/jquery.fullpage.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.4/jquery.fullpage.js"></script>
<!--激活fullpage效果-->
<script>
    $(document).ready(function(){
      $('#fullpage').fullpage();
    });
</script>
</body>
</html>
```

于是终于能够摸着活生生的`fullpage`页面了！！！，后来在原来的基础上删删改改，一个初步的页面就做好了，实现`fullpage`相关的`js`，`css`文件我都是通过`cdn`加载的，可以在[这里](https://cdnjs.com/)找

```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>XXX</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.css"/>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.js"></script>


</head>
<body>
<div id="fullpage">
	<div class="section active">
        人海似海却无岸
	</div>
	<div class="section">
		哈哈哈
	</div>
	<div class="section">
    	<div class="slide">
			一
    	</div>
    	<div class="slide">
			二
    	</div>
    	<div class="slide">
			三
    	</div>
	</div>
	<div class="section">
		《雪中悍刀行》
	</div>
</div>


<!--激活fullpage效果-->
<script>
$(document).ready(function(){
  $('#fullpage').fullpage();
});
</script>

</body>
</html>
```

#### 第三步

实现了一个初步的页面后，后面的工序就明显了，我想把文字展示在页面居中位置，就要通过`CSS`控制文本位置；还有就是用到不同的字体了，一句话的字体与这句话出自哪里的字体要不同

在找了找大哥的页面源码的时候，发现大哥用的是“有字库”的在线云字体，一开始用的时候，哇，怎么有这么方便字体引用，只需要加几段代码到`<head>`中间就行了呢！

结果我用完，第二天一条短信发了过来：

> 尊敬的****用户您好，您的有字库套餐于现在时间xxxx年xx月xx日剩余库币数为0，请您尽快登录有字库官方网站充值！

我心想，这不会吧，就访问页面这么几次就用不了了吗？结果打开网页一看，得，字体用不了了，唉

气得我emmmm...试过用`CSS`添加外部字体，但是老是没生效，最后想了想，看到了[这篇文章](https://imweb.io/topic/5a016f791f0e50753869bfa3)后找上了GoogleFont，翻墙后，用仅有的几个中文字体......

```
<!-- Google font -->
<link href="https://fonts.googleapis.com/css?family=Noto+Serif+SC&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Zhi+Mang+Xing&display=swap" rel="stylesheet">
```

要使用对应的字体只要再添加对应的`font-family`于想要标签的`CSS`样式中即可

#### 第四步

为了这个页面的第一个`section`看起来不那么枯燥，于是从阿里巴巴矢量库找到了一个矢量图标，给它加了一个不断旋转的效果

最终代码在这：

```
---
title: XXX
date: 2019-08-24 16:06:15
layout: false
---
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>你的标题</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.css"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">

<!-- Google font -->
<link href="https://fonts.googleapis.com/css?family=Noto+Serif+SC&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Zhi+Mang+Xing&display=swap" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.js"></script>

<style type="text/css">
.text {
	text-align: left;
	display: inline-block;
}
.aword {
	font-family: 'Noto Serif SC', serif;
	line-height: 2;
	text-align: center;
}
.aword-active {
	font-family: 'Zhi Mang Xing', cursive;
	line-height: 2;
	text-align: center;
}
.aword-by,.aword-active-by {
	font-family: 'Noto Serif SC', serif;
	margin-left: 1000px;
	line-height: 3;
	color: #555;
}

.aword-p1 {
    text-align: center;
  	width: 500px;
  	margin: 0 auto;
  	margin-top: 250;
}
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

</head>
<body>
<div id="fullpage">
	<div class="section active">
		<div class="aword-active" style="font-size: 70px">
        人海似海却无岸
    	</div>
    	<div class="aword-active-by" style="font-size: 18px; text-align: center;">
        往下翻点击左右两边可以看到更多哦
    	</div>
    	<div class="aword-p1">
    		<img id="img" src="图片">
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
	</div>
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
```

看完之后有没有发现我其实是在吐槽有字库，对我就是在吐槽有字库......

### 参考

[Sentence](https://leaferx.online/sentence/)
[Hexo如何自定义页面模板？](https://segmentfault.com/q/1010000017576920)
[Hexo自定义页面的方法](https://blog.csdn.net/refined_x/article/details/78271382?utm_source=blogxgwz8)
[主题配置](http://theme-next.iissnan.com/theme-settings.html)
[FullPage.js自学笔记（一）](https://www.jianshu.com/p/3d42b13f0a4e)
[fullPage.js](https://cdnjs.com/libraries/fullPage.js)
[fullpage.js结合animate.css实现滚屏动画，详细讲解，附下载地址](https://blog.csdn.net/cplvfx/article/details/80649574)
[自定义字体](https://imweb.io/topic/5a016f791f0e50753869bfa3)
[html-加载css样式的4种方法](https://blog.csdn.net/appleLg/article/details/75433606)
[jQuery全屏滚动插件fullPage.js](http://www.dowebok.com/77.html)
[Github-alvarotrigo/fullPage.js](https://github.com/alvarotrigo/fullPage.js/)
[jQuery全屏滚动插件fullPage.js演示](http://www.dowebok.com/demo/2014/77/)
[HTML/CSS/JS 在线工具](https://c.runoob.com/front-end/61)
[过渡动画（transition）](https://www.jianshu.com/p/2bc4cfc0adb3)
[css + js实现图片不停旋转 鼠标悬停停止旋转](https://blog.csdn.net/u011295864/article/details/84773123)
[css 单行文本居中显示，多行文本左对齐](https://www.cnblogs.com/hw-0409/p/7878253.html)
[css html 如何将图片img标签 水平居中 垂直居中 和水平垂直居中](https://zhidao.baidu.com/question/537179073.html)
[有字库-在线字体](https://www.webfont.com/onlinefont/index)