---
title: Valine评论邮件提醒
tags:
  - hexo
  - valine
  - 邮件提醒
comments: true
categories: Hexo
description: 我见青山多妩媚，料青山见我应如是
abbrlink: ed7ca194
date: 2020-02-07 20:30:22
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-02-07_1.jpg">

<!-- more -->

## 前言

总是担心有人给博文留言了却不能及时的看到回复，于是想有没有可以一留言就能提醒作者的功能，正好用的是Valine，于是搜索了下，然后在这里记录下Valine评论通过邮件提醒的方法

Valine官方提供的邮件提醒功能是基于Leancloud的密码重置邮件提醒，可以在`你的应用-设置-邮件模板`中修改

## 步骤

### 前提

参照网上的建议最后决定使用[第三方的邮件提醒](https://github.com/zhaojun1998/Valine-Admin)

当然前提是确保Valine的基础功能是正常的已经能够评论，并且`自带的邮件提醒`是关闭的

``` [] themes\next\_config.yml
valine:
  ...
  notify: false  # 设置notify为false
  ...

```

### 添加

然后进入[Leancloud](https://leancloud.cn/)对应的Valine应用中

点击`云引擎 -> 设置`填写代码库并保存：`https://github.com/zhaojun1998/Valine-Admin`

![](http://image.joelyings.com/2020-02-07_2.png)

切换到部署标签页，点击Git源码部署，分支使用 master，点击部署

![](http://image.joelyings.com/2020-02-07_3.png)

此外，你需要设置云引擎的环境变量以提供必要的信息，点击云引擎的设置页，设置如下信息

![](http://image.joelyings.com/2020-02-07_4.png)

必选参数：

* SITE_NAME    : 网站名称
* SITE_URL     : 网站地址, 最后不要加 / 
* SMTP_USER    : SMTP 服务用户名，一般为邮箱地址
* SMTP_PASS    : SMTP 密码，一般为授权码，而不是邮箱的登陆密码，请自行查询对应邮件服务商的获取方式
* SMTP_SERVICE : 邮件服务提供商，支持 QQ、163、126、Gmail、"Yahoo"、...... ，全部支持请参考 : [Nodemailer Supported services](https://nodemailer.com/smtp/well-known/#supported-services) --- 如这里没有你使用的邮件提供商，请查看[自定义邮件服务器](https://github.com/zhaojun1998/Valine-Admin/blob/master/%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE.md#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%82%AE%E4%BB%B6%E6%9C%8D%E5%8A%A1%E5%99%A8)
* SENDER_NAME  : 寄件人名称

---

若采用企业邮箱，这边的SMTP_SERVICE就不适用了，需要用这三个参数替换：`SMTP_HOST`、`SMTP_PORT`、`SMTP_SECURE`

* SMTP_HOST   : 邮件服务提供商 SMTP 地址，如 `qq : smtp.qq.com`，此项需要自行查询或询问其服务商
* SMTP_PORT   : 邮件服务提供商 SMTP 端口, 此项需要自行查询或询问其服务商
* SMTP_SECURE : 是否启用加密, 默认为 true，一般不需要设置，如有特殊请自行配置。 此项需要自行查询或询问其服务商。

可以看到上图中，我的自定义环境变量还多了2个，分别是：

* TO_EMAIL     ：这个是填收邮件提醒的邮箱地址，若没有这个字段，则将邮件发到SMTP_USER
* TEMPLATE_NAME：设置提醒邮件的主题，目前内置了两款主题，分别为 default 与 rainbow。默认为 default 

---

### SMTP

上面的文档没有介绍怎么获取SMTP授权码，这里说明一下`QQ邮箱`的：

进入QQ邮箱，点击上方的`设置`

![](http://image.joelyings.com/2020-02-07_6.png)

点击`账户`选项，往下拉

![](http://image.joelyings.com/2020-02-07_7.png)

看到这里的`POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务`，开启`POP3/SMTP服务`，然后点击下方的`生成授权码`

![](http://image.joelyings.com/2020-02-07_8.png)

这里会要求你用密保手机发短信，然后点`我已发送`按钮，然后可以看到如下的授权码

![](http://image.joelyings.com/2020-02-07_9.png)

复制到`SMTP_PASS`即可，记得保存

### LeanCloud休眠策略

配置完这些还要注意，免费版的LeanCloud容器，是有强制性休眠策略的，不能 24 小时运行

* 每天必须休眠 6 个小时
* 30 分钟内没有外部请求，则休眠
* 休眠后如果有新的外部请求实例则马上启动（但激活时此次发送邮件会失败）

分析了一下上方的策略，如果不想付费的话，最佳使用方案就设置定时器，每天 7 - 23 点每 20 分钟访问一次，这样可以保持每天的绝大多数时间邮件服务是正常的

**方法一**

附 Linux crontab 定时器代码：
```
*/20 7-23 * * * curl https://你配置的域名前缀.leanapp.cn
```

**方法二**

首先需要先配置下 Web 主机的域名，使用定时器时要用到，配置方式如下：

![](http://image.joelyings.com/2020-02-07_10.png)

后台登录需要账号密码，需要在这里设置，只需要填写 email、password、username，这三个字段即可, 使用 email 作为账号登陆即可。（为了安全考虑，此 email 必须为配置中的 SMTP_USER 或 TO_EMAIL， 否则不允许登录） 

![](http://image.joelyings.com/2020-02-07_11.png)

事实上我是分配到了一个预备环境的域名，不管了，直接跳到定时任务

LeanCloud 自带定时器[推荐]

首先需要添加环境变量，`ADMIN_URL：Web 主机域名`，如图所示（添加后重启容器才会生效），保存

![](http://image.joelyings.com/2020-02-07_12.png)

然后点击`云引擎 - 定时任务`，创建定时任务，按照图片上填写：

![](http://image.joelyings.com/2020-02-07_13.png)

注意, LeanCloud 最近更新了定时器校验规则, 需要将 Cron 表达式写为: `0 */20 7-23 * * ?` 

添加后默认就已启动，启用成功后，每 20 分钟在`云引擎的 - 应用日志`中可以看到提示

完成后记得，在`云引擎-实例`中，重启

![](http://image.joelyings.com/2020-02-07_14.png)

等待重启完毕，在你的博文下评论后，你的邮箱就会收到如下的提醒：

![](http://image.joelyings.com/2020-02-07_5.png)

## 参考

[Valine-Admin](https://github.com/zhaojun1998/Valine-Admin)
[NexT主题设置Valine评论系统邮件提醒](https://www.nhtzj.com/3315416634/#comments)
[hexo next主题 valine评论系统 使用第三方邮件提醒](https://blog.csdn.net/qq_21808961/article/details/84639401)
