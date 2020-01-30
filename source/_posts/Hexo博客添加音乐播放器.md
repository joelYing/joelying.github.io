---
title: Hexo博客添加音乐播放器
tags:
  - Hexo
comments: true
categories: Hexo
description: 对我来说，记忆也成为了相见的一种方式
abbrlink: 8e2e1c08
date: 2019-09-04 11:09:44
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/20190904-7.jpg">

<!-- more -->

### 前言

之前添加的就是网易云的播放外链，但是只有一首歌，后来就找了找能不能添加更多的歌曲，就发现了可以添加网易云歌单，还有使用APlayer

### 网易云单曲外链

首先进入网页版网易云，点击播放一首歌，进入``https://music.163.com/#/song?id=208902``的页面，可以在页面中看到如下图所示

![](http://image.joelyings.com/20190904-1.png)

点击后，进入如下页面

![](http://image.joelyings.com/20190904-2.png)

然后可以选择尺寸大小，及是否自动播放等，最后复制下方的HTML代码，然后在``themes\next\layout\_macro\sidebar.swig``中添加即可

```diff themes\next\layout\_macro\sidebar.swig
	<div class="sidebar-inner">
	...
+   <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=332 height=86 src="//music.163.com/outchain/player?type=2&id=22842399&auto=1&height=66"></iframe>

    </div>
```

在侧栏导航栏中就会出现该歌曲，但要注意的是有的歌曲因版权限制是无法生成外链的，就算拼成了外链的连接也无法播放

### 网易云歌单外链

进入你的歌单页面，如``https://music.163.com/#/playlist?id=歌单ID``

![](http://image.joelyings.com/20190904-3.png)

点击生成外链播放器，注意如果歌单中包含因版权问题无法播放(即成阴影色的歌曲)，那么该歌单无法生成外链

![](http://image.joelyings.com/20190904-4.png)

选择尺寸等选项后复制HTML代码，添加到上述位置即可

### APlayer播放器

[官方文档](https://aplayer.js.org/#/zh-Hans/)，[Github地址](https://github.com/MoePlayer/APlayer)

可以通过npm下载，再把下载好的dist文件夹(hexo项目\node_modules\aplayer\dist)复制到``\themes\next\source``中
```
npm install aplayer --save
```

在``themes\next\layout\_layout.swig``的``<body></body>``标签中的任意位置添加下面代码

```html themes\next\layout\_layout.swig
  <!-- APlayer播放器 -->
  <link rel="stylesheet" href="/dist/APlayer.min.css">
  <div id="aplayer"></div>
  <script type="text/javascript" src="/dist/APlayer.min.js"></script>
  <script type="text/javascript" src="/dist/aplayermusic.js"></script>
  <!-- APlayer播放器 -->
```

其中id为`aplayer`就是你要在浏览器放置的地方，样式z-index则是为了让播放器显示载最上面一层

然后再`themes\next\source\dist\`建立一个js文件，名字任意，我建的是`aplayermusic.js`，在其中写下如下代码
注意`container`对应id为`aplayer`，别改了上面忘了下面

```JavaScript themes\next\source\dist\aplayermusic.js
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: 'SURPRISE-DRIVE',
            artist: '松冈充',
            url: 'http://music.163.com/song/media/outer/url?id=29751409.mp3',
            cover: 'http://p1.music.126.net/Oo0kXusaoF9DGwjAJFeAtA==/6671836558494023.jpg',
            lrc: '/./dist/music/lrc/29751409.lrc',
            theme: '#46718b'
        }
    ]
});
```

其中audio标签下，就是加进去的歌曲，由于把lrcType: 3注释了，所以lrc歌词文件不会生效

详细参数的配置可以参考[官方文档](https://aplayer.js.org/#/zh-Hans/)

```
name: 'SURPRISE-DRIVE',
artist: '松冈充',
url: 'http://music.163.com/song/media/outer/url?id=29751409.mp3',
cover: 'http://p1.music.126.net/Oo0kXusaoF9DGwjAJFeAtA==/6671836558494023.jpg',
lrc: '/./dist/music/lrc/29751409.lrc',
theme: '#46718b'
```

<p id="div-border-left-blue">name</p>

歌名

<p id="div-border-left-blue">artist</p>

作曲家，这两个云音乐上就有

<p id="div-border-left-blue">url</p>

网易云默认外链链接：`http://music.163.com/song/media/outer/url?id=ID数字.mp3`

<p id="div-border-left-blue">cover</p>

封面图`http://p1.music.126.net/Oo0kXusaoF9DGwjAJFeAtA==/6671836558494023.jpg`
在歌曲页面右键点击检查，或按F12调出开发者工具，点击下图中最左侧按钮

![](http://image.joelyings.com/20190904-5.png)

然后点击封面图片

![](http://image.joelyings.com/20190904-6.png)

图中http开头的链接即是`cover`链接

<p id="div-border-left-blue">lrc</p>

歌词文件 `/./dist/music/lrc/29751409.lrc`

[下载](https://github.com/jitwxs/163MusicLyrics/releases)green-version.zip文件，在本地解压后运行，输入网易云歌曲ID即可下载歌词，详细操作参考[项目README文件](https://github.com/jitwxs/163MusicLyrics/blob/master/README.md)

<p id="div-border-left-blue">theme</p>

是更高优先级的主题色




### 参考

[Hexo+Next添加网易云音乐](https://blog.csdn.net/Mculover666/article/details/90700059)
[为hexo博客yilia模版添加aplayer音乐播放器](https://qianlei6148.github.io/2018/10/13/%E4%B8%BA%E5%8D%9A%E5%AE%A2%E6%B7%BB%E5%8A%A0aplayer%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8/)
[hexo上的aplayer应用](https://blog.yleao.com/2018/0902/hexo%E4%B8%8A%E7%9A%84aplayer%E5%BA%94%E7%94%A8.html)
[hexo-Next主题美化<二>](http://lyxf.live/posts/51370)
[ZonyLrcToolsX](https://github.com/GameBelial/ZonyLrcToolsX/releases)
[音乐直链搜索](https://music.liuzhijin.cn/)
[杨天音乐外链](http://www.ytmp3.cn/)
[https://gist.github.com/3rogue/5b03fbe499b2bfff91d1ef15a2583d55](https://gist.github.com/3rogue/5b03fbe499b2bfff91d1ef15a2583d55)
[163MusicLyrics](https://github.com/jitwxs/163MusicLyrics)
[网易云音乐直接下载](https://greasyfork.org/zh-CN/scripts/33046-%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD)
[APlayer文档](https://aplayer.js.org/#/zh-Hans/)