---
title: Hexo自定义页面引用外部字体
tags: [Hexo]
comments: true
date: 2019-10-15 14:59:33
permalink:
categories: Hexo
description: 宁在雨中高歌死
image:
---

<img class="joel-img" src="http://image.joelyings.com/20191015-3.jpg">

<!-- more -->

## 前言

之前写过一篇[Fullpage+NexT打造自己钟意的经典语录集](https://joelying.github.io/blog/Fullpage-NexT%E6%89%93%E9%80%A0%E8%87%AA%E5%B7%B1%E9%92%9F%E6%84%8F%E7%9A%84%E7%BB%8F%E5%85%B8%E8%AF%AD%E5%BD%95%E9%9B%86.html)，其中也提到了当时采用的字体是Google的一种宋体，但是感觉还是差了点

而且在有字库上也看到了喜欢的字体-[田氏宋体旧字形](https://cdn.res.webfont.com/fonts/46724.html)，但是这个好像还得花钱，于是想尽办法，最终找到了实现的方法！

## 流程

### 下载字体
要想使用`田氏宋体旧字形`，那么首先我们得拿到这个字体，于是在[这里](http://font.chinaz.com/120816346470.htm)，我把它下载下来了~

下载后得到了一个ttf文件(最好使用英文重命名一下)，但是光有一个这个文件，我发现并不能改变实际展示出来的字体，于是乎找了找[资料](https://blog.csdn.net/h_maggie/article/details/80851916)，最终把ttf字体格式转成多种字体格式，像这样

```css
@font-face {
  font-family: "tsst";
  src: url("../font/tsst.woff2") format("woff2"),
       url("../font/tsst.woff") format("woff"),
       url("../font/tsst.ttf") format("truetype"),
       url("../font/tsst.eot") format("embedded-opentype"),
       url("../font/tsst.svg") format("svg"),
       url("../font/tsst.otf") format("opentype");
}
```

### 格式转换

那么如何转呢？

简单，进入[https://www.fontke.com/tool/fontface/](https://www.fontke.com/tool/fontface/)这个网站，将ttf字体文件上传，然后点击生成，就可以拿到一个包含其它格式的压缩包了

![](http://image.joelyings.com/20191015-1.png)

### 字体引用

在`站点文件根目录下的source文件夹下`新建一个`font`文件夹，将上述得到的多种格式压缩包解压后的全部文件移动到`font`文件夹下，这是我试了好久才成功的......

![](http://image.joelyings.com/20191015-2.png)

我选择的是直接把CSS写在文件中，如下

```css
<style type="text/css">
@font-face {
  font-family: "tsst";
  src: url("../font/tsst.woff2") format("woff2"),
       url("../font/tsst.woff") format("woff"),
       url("../font/tsst.ttf") format("truetype"),
       url("../font/tsst.eot") format("embedded-opentype"),
       url("../font/tsst.svg") format("svg"),
       url("../font/tsst.otf") format("opentype");
}

.aword {
	font-family:'tsst';
}
</style>
```

然后字体就改变了！！！

![](http://image.joelyings.com/20191015-4.png)

这里可能还要注意的是文件的渲染问题了，我的配置只是在该index.md文件开头处加上了

```
---
layout: false
---
```

但是没有在全局配置文件的`skip_render`处，选择不渲染该文件

还有一点就是页面加载起来可能有点慢

## 参考

[田氏宋体旧字形字体](http://font.chinaz.com/120816346470.htm)
[@font-face生成器](https://www.fontke.com/tool/fontface/)
[css3里面怎么引用外部字体包，不再是单调的微软雅黑和宋体](https://blog.csdn.net/h_maggie/article/details/80851916)
[hexo的yelee主题使用本地自己指定的自定义字体](https://blog.csdn.net/appleyuchi/article/details/92846473)
[hexo博客next主题添加自定义字体comic neue](https://leflacon.github.io/7167e0bc/)
[Hexo如何自定义页面模板？](https://segmentfault.com/q/1010000017576920/a-1020000017713585)
[Hexo不渲染.md或者.html](https://blog.csdn.net/ganzhilin520/article/details/79057774)
[awesome blog type-Hexo NexT主题自定义友链页面](https://leafjame.github.io/posts/1123041323.html)
[解决引用外部字体后页面加载速度变慢](https://blog.csdn.net/appleyuchi/article/details/93362783)