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

<img class="joel-img" src="http://image.joelyings.com/2020-02-07_16.jpg">

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

进入github，到存放网站的仓库，`Settings -> Options -> GitHub Pages -> Custom domain -> 填写需要绑定的个人域名` 点击save后，网站上会提示是否成功


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

### 收录

先到[这里](https://ziyuan.baidu.com/site/siteadd#/)，登录账号之后：右上角用户中心 -> 然后左侧站点管理 -> 添加网站

选择`https`协议头，输入你要添加的网站，选择站点属性，再来到验证网站

这里选择CNAME验证，将`xxx.你提交的网站域名`使用CNAME解析到`ziyuan.baidu.com`

完成后点击`完成验证`按钮

为保持验证通过的状态，成功验证后请不要删除该DNS记录，然后等待一会，验证通过即收录网站成功

### sitemap

先安装生成sitemap的插件，在站点的根目录下执行：

``` bash
npm install hexo-generator-sitemap --save
```

<div class="note warning"><p>不用安装hexo-generator-baidu-sitemap，有的教程会告诉你，这个是专门针对百度的sitemap，其实根本不是。这个插件本身最开始只是为了本地搜索做的，用的时候，如果标题里面带有&这种本身有预定义的符号，后续提交的时候会出现解析出错，所以不用安装。</p></div>

安装好了之后，再生成一次网页，也就是执行一次`hexo clean && hexo g && hexo d`

然后会在`/yoursite/public/`下面看到`sitemap.xml`文件

### 提交sitemap

打开百度站长平台，进入你刚刚添加的站点

先点击左侧链接提交，然后点击sitemap

填入`你的站点名称/sitemap.xml`，或者你有自己的域名，只是在coding上托管代码，就填入`域名/sitemap.xml`，如果不确定的话，可以先把这个链接**在浏览器中打开试试**

如果看不到xml页面，请检查你的站点配置文件中的`url`是否改成了你的域名

``` [] _config.yml
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: https://blog.joelyings.com
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
```

然后提交上去，下面会有结果，刷新之后会显示状态正常，后面还有提取的链接数量

<div class="note warning no-icon"><p>被百度收录的过程极其漫长，且注意Github端也部署的话会导致百度抓取超时而发生错误，所以最后我把网站只部署在Coding，于是在站点配置文件的deploy处删去Github的repo，只保留Coding的，然后"hexo clean && hexo g && hexo d"就只会提交到Coding，再把源码提交到Github即可；而Github端，在个人博客仓库的Settings中将"Custom domain"置空，保存后则可以继续访问"https://username.github.io/"</p></div>

sitemap会定期自动更新，如果添加了新页面，想快速收录的话，可以手动更新文件

<div class="note info"><p>site:blog.joelyings.com
可以看你的网站是否被收录了</p></div>


### 自动推送

自动退送的话，Hexo框架已经给我们集成好了，只需要修改主题配置文件：
```
baidu_push: true
```
将这个改成true，在你每次执行hexo d的时候就会自动推送到百度


### 添加蜘蛛协议

蜘蛛协议就是告诉爬虫，你的哪些文件爬虫可以爬取，哪些不能的文件

新建一个robots.txt文件，添加以下内容，然后放到/yoursite/source/文件夹下面：
```
User-agent: *
Allow: /
Allow: /archives/
Allow: /tags/
Allow: /categories/
Allow: /about/

Disallow: /js/
Disallow: /css/
Disallow: /lib/

Sitemap: 刚刚sitemap的地址
```
执行`hexo clean && hexo g && hexo d`，就同步到了coding上了


## 参考

[Hexo 绑定个人域名（华为云版）](https://www.genmcai.com/2019/08/03/hexo_DomainName/)
[个人域名如何同时绑定 github 和 coding 上的博客](https://segmentfault.com/q/1010000004557073)
[Hexo个人博客SEO优化——如何被百度谷歌收录](http://dugblog.coding.me/Hexo/20180625-Hexo-SEO.html)
[同时托管博客到github和coding](https://www.jianshu.com/p/7103fbbe1eba)