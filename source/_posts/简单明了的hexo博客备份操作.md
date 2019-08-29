---
title: 简单明了的hexo博客备份操作
tags: [Hexo]
comments: true
date: 2019-08-29 08:58:07
permalink:
categories: Hexo
description: “Good morning, and in case I don't see you, Good afternoon, Good evening, And good night.”
image:
---

<img class="joel-img" src="http://pw407zrf4.bkt.clouddn.com/20190829-3.jpg">

<!-- more -->

<p id="div-border-left-red">这算是我见过相当简单并实际操作后成功备份的操作指南</p>

### 前提

博客搭建完成，并且已发布过文章

远程项目地址为`https://github.com/joelYing/joelYing.github.io.git`(这是我的仓库)，默认分支为`master`

原博客所在项目文件夹为`hexo`，命令均在`git bash`下执行

### 备份

在项目新建分支`source`分支（名称随意），在下图中新建即可

![](http://pw407zrf4.bkt.clouddn.com/20190829-1.png)

设置`source`为默认分支后，点击`update`更新默认分支

![](http://pw407zrf4.bkt.clouddn.com/20190829-2.png)

在任意处新建文件夹`hexo-source`，通过`gitbash`在文件夹下执行`git clone https://github.com/joelYing/joelYing.github.io.git`

进入`hexo-source`下的项目目录`joelYing.github.io`，这时`gitbash`分支名应显示`source`

```
git rm * -r
```
清空文件夹

打开原项目`hexo`文件夹下的`.gitignore`，复制原项目`hexo`文件夹下除`.gitignore`中显示以外的所有文件到`joelYing.github.io`

`.gitignore`文件中记录的是git提交时需要忽略的文件

删除现在`joelYing.github.io`下`themes/主题文件夹`下的`.git`文件，否则主题文件无法push，如果下载的是主题zip解压后的文件夹可忽略此步

```
git add .
git commit -m "xxx"
git push origin source
```

三步提交所有代码到远程仓库即可

博客从一开始就在本地生成，选择复制是为了方便使用远程地址

### 另外

Sublime 同时打开多个文件夹（项目）

打开第二个`project-->add folder to project`

### 参考

[hexo博客备份](https://www.jianshu.com/p/f4214a85eb0e)
