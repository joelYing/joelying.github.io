---
title: mysql保存数据时含有单引号报错方法
tags:
  - Python
  - mysql
comments: true
categories: Bug
description: 最苦是相思，最远是阴阳
abbrlink: ab3aac4b
date: 2020-01-22 17:22:39
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-01-22_2.jpg">

<!-- more -->

### 方法

mysql在保存视频名称时遇到的数据插入错误，查一下原因发现报错视频名称主要都带有`'`单引号，会导致SQL语句被截断，从而产生错误

解决办法如下：

替换成两个单引号即可
``` python
name = str(name).replace('\'', '\'\'')
```