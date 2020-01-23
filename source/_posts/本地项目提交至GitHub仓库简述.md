---
title: 本地项目提交至GitHub仓库简述
tags: [Git,github]
comments: true
date: 2020-01-23 18:02:49
permalink:
categories: Git
description: 美好的东西从来不会寻求关注
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-01-23_3.jpg">

<!-- more -->

适用情况：本地有一个项目，github上新建了一个仓库

只需要进行下面几步就能把本地项目上传到Github：

1、在本地创建一个版本库（即文件夹），通过git init把它变成Git仓库

2、把项目下的文件复制到这个文件夹里面，再通过git add .把项目添加到仓库

3、再通过git commit -m "注释内容"把项目提交到仓库

4、看C盘的用户目录下有没有.ssh目录，有的话看下里面有没有id_rsa和id_rsa.pub这两个文件，没有就通过下面命令创建

```
ssh-keygen -t rsa -C "youremail@example.com"
```

然后登录Github，找到右上角的图标，打开点进里面的Settings，再选中里面的SSH and GPG KEYS，点击右上角的New SSH key，然后Title里面随便填，再把刚才`id_rsa.pub`里面的内容复制到Title下面的Key内容框里面，最后点击Add SSH key，这样就完成了SSH Key的加密

5、新建一个远程仓库，通过`git remote add origin https://github.com/xxx/xxx.git`将本地仓库和远程仓库进行关联

6、最后通过
```
git push -u origin master
```
把本地仓库的项目推送到远程仓库（也就是Github）上，（若新建远程仓库的时候自动创建了README文件会报错，`error: failed to push some refs to 'https://github.com/xxx/xxx.git'` ）

这时候可以，强制合并

```
git push -u origin master --force
```

以后只需要`git push origin master`即可