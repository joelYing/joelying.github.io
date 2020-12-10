---
title: 如何禁止Chrome浏览器http强制跳转https
tags:
  - Chrome
comments: true
categories: Bug
description: '不会处世，我不是私下里，以此为荣吗？'
abbrlink: 6e68c85d
date: 2020-12-09 12:03:16
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/202012091219.jpg">

<!-- more -->

### 因

起因是因为我的博客域名到期了，然后续费之后又经过一系列的[域名解析](http://mblog.joelyings.com/post/8edf7a7d.html)，之后总算能打开我的博客，但是博客图床使用的是HTTP协议，而Chrome强制将其跳转到HTTPS，因此文章的图片不会显示

所以找了找方法，在此记录一下

### 解

本来想打开`http://mblog.joelyings.com/`

结果变成打开`https://mblog.joelyings.com/`

Chrome浏览器强制将我们的请求从http强制跳转到https

<span id="inline-purple">删除域名安全策略</span>

Chrome浏览器地址栏打开`chrome://net-internals/#hsts`，在`Delete domain security policies`处输入根域名，如`joelyings.com`，点击删除

<span id="inline-purple">删除浏览器缓存</span>

Chrome浏览器地址栏打开`chrome://settings/clearBrowserData`，点击清除缓存，这里再打开就能正常打开http协议的地址了

如果还不行，时间范围可以选择“过去24小时”或更长
