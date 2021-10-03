---
title: requests请求数过多引发的系列问题及解决方法
tags:
  - 爬虫
comments: true
categories: 爬虫
description: 顺其自然，为所当为
abbrlink: 4537a15f
date: 2021-10-03 15:56:01
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/20211003-7.png">

<!-- more -->

## 前言
在爬取卡车之家论坛中的[奥铃卡车](https://so.360che.com/?nsid=4&srt=def&sti=0&q=%E5%A5%A5%E9%93%83&page=1)数据时，遇到的有关requests的问题，详细情况是这样的

目的是爬取[奥铃卡车](https://so.360che.com/?nsid=4&srt=def&sti=0&q=%E5%A5%A5%E9%93%83&page=1)的100页的所有论坛中的帖子数据，包括回帖中的回帖信息，那么关于这个爬虫，有这样几个`需要请求的URL`

```
1、获取帖子列表页的帖子数据，包括标题，时间，简介，缩略图等，这需要一个requests

2、获取帖子进一步的信息，即点击列表页的帖子后，在帖子页面获取的浏览量，回复量等数据，这是第二个requests

3、获取帖子每一页（因为该帖子可能包含多页的回帖）的回帖内容，具体为发布楼层，作者，时间以及帖子的内容，这是第三个发送的请求

4、获取每一个回帖的二级回帖内容（如果存在的话），并且回帖内容因为数量过多也有分页，这也需要一个新的requests
```

所以综上，需要4个requests，那么实际在操作的过程中，发现会发生爬取到一定程度后，程序会被卡住，不再继续爬取到数据

## 一

基于这个问题，我能想到的是可能是因为大量的请求没有及时释放，导致请求堆积而卡住，不再运行，那么关于这个的解决办法如下


```
# 通过在代码中添加以下两行，设置全局的socket超时时间，连接超时则会重新去连接

import socket 
socket.setdefaulttimeout(时间) 
```

## 二

这个卡住的问题解决后，在这个过程中也引发了另一个问题，请求中断

```
requests.exceptions.ChunkedEncodingError: ('Connection broken: IncompleteRead(0 bytes read)', Incomp...
```

那么后来的解决办法是，在requests的请求中添加`stream=True`，如

```
r_3 = self.s.get(link.format(page), headers=self.headers, allow_redirects=False, stream=True)
```

这样一来就解决了中断问题（后续爬取时没有再出现中断），下面是对这个`stream=True`参数的作用的一些知识：

`requests`中的参数`stream`，这个参数不常用，不过很巧妙的一个参数，当下载大的文件的时候，建议使用`stream`模式，默认情况下是`stream=False`，他会立即开始下载文件并存放到内存当中，倘若文件过大就会导致内存不足的情况，详见[requests 中的参数 stream](https://blog.csdn.net/a12355556/article/details/113785207)

## 三

`csv用excel打开后乱码的解决方法是什么`

<p id="div-border-left-red">首先打开空的excel表格，点击页面顶部的“数据”-“自文本”；然后导入csv文件，在弹出的对话框中选择“utf-8”；最后“分隔符号”处勾选“逗号”，点击“加载”按钮即可</p>

![1](http://image.joelyings.com/2021-10-03_1.png)

![2](http://image.joelyings.com/2021-10-03_2.png)

![3](http://image.joelyings.com/2021-10-03_3.png)

![4](http://image.joelyings.com/2021-10-03_4.png)

![5](http://image.joelyings.com/2021-10-03_5.png)




## 参考

[python requests请求卡住问题](https://www.cnblogs.com/niansi/p/7143736.html)
[requests.exceptions.ChunkedEncodingError: ('Connection broken: IncompleteRead(0 bytes read)', Incomp](https://blog.csdn.net/guangheli/article/details/100522297)
[csv用excel打开后乱码的解决方法是什么](https://www.php.cn/topic/excel/477091.html)