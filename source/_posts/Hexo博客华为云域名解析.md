---
title: Hexo博客华为云域名解析
tags:
  - hexo
  - 域名解析
  - 华为云
comments: true
categories: Hexo
description: The first rule of Fight Club is you do not talk about Fight Club
abbrlink: 8edf7a7d
date: 2020-02-07 12:32:22
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-02-07_1.jpg">

<!-- more -->

## 步骤

Hexo 绑定个人域名（华为云）

### 购买域名

进入华为云域名注册 [https://www.huaweicloud.com/product/domain.html](https://www.huaweicloud.com/product/domain.html)，搜索自己喜欢的域名

选择自己喜欢的域名（建议选择常见的，比如说：com，cn，net之类的，考虑到兼容性的问题），然后进行购买

选择好要购买的期限和域名信息模板（没有的自己建一个，里面的要填写的信息没有特别要讲究的）

要注意的就是域名购买后，域名信息要实名认证成功后，购买的域名才可以被解析（通俗的说：能被使用）

### 绑定域名

前提是域名到账户上，并且成功实名认证后

进入华为云控制台，在华为云服务搜索框中搜素 云解析服务 DNS，然后进入。

一般来说是在公网解析中，在里面可以看到你购买成功的域名，然后点击解析，不用管其它的，直接点击进行设置。填入信息后，确定即可添加成功。

<table>
<thead>
<tr>
<th align="left">填写目录</th>
<th align="left">填写信息</th>
</tr>
</thead>
<tbody><tr>
<td align="left">主机记录</td>
<td align="left">旁边有个问号，里面有详解，我是直接填了<code>www</code></td>
</tr>
<tr>
<td align="left">类型</td>
<td align="left">普通的只需要A、CNAME（详情的可以看后面的跟的说明），我选择的是<code>CNAME</code></td>
</tr>
<tr>
<td align="left">别名</td>
<td align="left">不用管，没用到，选<code>否</code></td>
</tr>
<tr>
<td align="left">线路类型</td>
<td align="left">普通的<code>全网默认</code>就行了</td>
</tr>
<tr>
<td align="left">TTL</td>
<td align="left">默认，<code>5分钟</code></td>
</tr>
<tr>
<td align="left">值</td>
<td align="left">CNAME： 填写需要绑定的域名（例：genmcai.github.io） A： 填写需要绑定的IP（查看方法放下面）</td>
</tr>
<tr>
<td align="left">权重</td>
<td align="left">可选参数，解析记录的权重，可选参数，默认值为1。取值范围：0~100。当域名有多条某一类型的解析记录时，根据权重数值选择解析记录，权重数值越高，优先级越高</td>
</tr>
</tbody></table>

IP查看方法

Ctrl+R 进入 运行 输入 cmd ，输入命令 Ping 域名(例：Ping genmcai.github.io)

下面出现的IPv4地址即是 A 所需的值

进入github，到存放网站的仓库，Settings -> Options -> GitHub Pages -> Custom domain -> 填写需要绑定的个人域名 点击save后，网站上会提示是否成功


### 最后一步

在hexo的根目录下source 中添加一个无后缀名的文件（文件名：CNAME），里面内容填写你绑定的域名

至于有些同学会问怎么写入，这个可以直接先txt填入内容后删掉后缀名，或者用VS code之类的打开无后缀名的文件，也能写入

这一步可以说挺重要的，如果没有这个文件，`hexo g -d`提交后，页面就会变成404，这个时候重复第3个步骤就能恢复，不过每次都这样很麻烦，而且可能会清空博客访问记录

至此，个人域名的绑定就结束了，重新使用自己的个人域名进行访问，就能访问到绑定的hexo了。如果出现错误，有可能是主题版本的原因，也有可能是其他的原因

## 两端部署

原本博客是在github的，访问[https://joelying.github.io/](https://joelying.github.io/)即可进入，后来用华为云的域名`blog.joelyings.com`解析`joelying.github.io`，就可以通过访问`blog.joeyings.com`进入博客

如果只想部署在coding上的hexo项目通过域名访问，可以解除了`GitHub Pages -> Custom domain`中绑定的`blog.joelyings.com`，也就是现在可以访问原来的[https://joelying.github.io/](https://joelying.github.io/)（github）

然后在coding的hexo项目的静态网站中设置要绑定的域名（华为云）

在华为云域名解析设置中添加`CNAME`记录指向`xxx.coding-pages.com`

当显示的已绑定域名`blog.joelyings.com`的证书状态为`正常`时，就可以成功访问`blog.joelyings.com`

即现在可以访问[blog.joelyings.com](blog.joelyings.com)（coding）

---

当然要想两端都部署，然后通过一个域名访问的话：

1. 要在github的`xxx.github,io`的项目settings中的`Options -> GitHub Pages -> Custom domain`处添加你的域名，并确保在（华为云）域名解析处有指向`xxx.github,io`的CNAME解析，在`Custom domain`处看到`Your site is ready to be published at https://xxx.xxx.com`就成功

2. 在coding的项目的静态网站（默认没有静态网站的可以去项目设置的功能开关中打开构建与部署）设置中，添加绑带域名，也确保华为云域名解析设置中添加`CNAME`记录指向`xxx.coding-pages.com`


## SEO优化

参考[这篇](http://dugblog.coding.me/Hexo/20180625-Hexo-SEO.html)


先到这里，登录账号之后：右上角用户中心 -> 然后左侧站点管理 -> 添加网站

## 参考

[Hexo 绑定个人域名（华为云版）](https://www.genmcai.com/2019/08/03/hexo_DomainName/)
[个人域名如何同时绑定 github 和 coding 上的博客](https://segmentfault.com/q/1010000004557073)