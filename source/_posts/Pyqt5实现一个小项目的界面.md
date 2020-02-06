---
title: Pyqt5实现一个小项目的界面
tags:
  - pyqt5
comments: true
categories: Pyqt5
description: 天上剑仙三百万，遇我也需尽低眉
abbrlink: 8d24b1e6
date: 2020-02-05 22:28:46
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-02-06_3.jpg">

<!-- more -->

## 安装

安装Pyqt5

``` bash
pip3 install pyqt5 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

安装Qtcreator，[地址](http://download.qt.io/official_releases/qtcreator/)

## 制作

新建参考：[https://www.jianshu.com/p/3be3bfcdd62e](https://www.jianshu.com/p/3be3bfcdd62e)

结果

![](http://image.joelyings.com/2020-02-06_1.png)

## 转换

将.ui的文件转换为.py的文件，cmd命令进入.ui文件所在目录下，运行以下命令

``` bash
pyuic5 -o xxx.py xxx.ui
```

## 参考

[Python制作小软件——1. 安装并使用PyQt5进行界面设计](https://blog.csdn.net/weixin_41929524/article/details/81456308)
[python使用PyQt5，及QtCreator，qt-unified界面设计以及逻辑实现](https://www.cnblogs.com/chen0307/p/9844352.html)
[随笔分类 - PyQt入门教程](https://www.cnblogs.com/linyfeng/category/1546338.html)
[Python制作小软件——4. 利用PyInstaller打包成exe文件](https://blog.csdn.net/weixin_41929524/article/details/81484806)
[Python - 编写可视化界面（Python+PyCharm+PyQt）](https://blog.csdn.net/bailang_zhizun/article/details/79310419)
[]()