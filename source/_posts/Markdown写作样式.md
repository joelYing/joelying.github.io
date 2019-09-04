---
title: Markdown写作样式
tags: [Markdown]
date: 2019-08-20 14:07:56
permalink:
comments: true
categories: 写作
description: “看，前面漆黑一片，什么也看不到；也不是，天亮后便会很美的”
image:
---

<img class="joel-img" src="http://image.joelyings.com/20190820-1.jpg">

<!-- more -->

## 模板

``` [] hexo\scaffolds\post.md
---
title: {{ title }}
date: {{ date }}
permalink:
categories:
tags: []
description:
image:
---

<img class="joel-img" src="">

<!-- more -->
```

## 注脚

代码:

```
这是注脚[\^1]  # 实际添加注脚的时候，不用加\，\在这里是为了转义
```

效果(注意文章末尾注脚)：

这是注脚[^1]


## 文字背景色块

代码:

```
<span id="inline-blue">站点配置文件</span>，<span id="inline-purple">主题配置文件</span>
```

效果：

<span id="inline-blue">站点配置文件</span>， <span id="inline-purple">主题配置文件</span>

## 引用边框变色

代码:

```
<p id="div-border-left-red">左侧引用边红色</p>
<p id="div-border-top-blue">顶部引用边蓝色</p>
```

效果：

<p id="div-border-left-red">左侧引用边红色</p>
<p id="div-border-top-blue">顶部引用边蓝色</p>


## 主题自带-文本居中

代码:

```
{% cq %}
人海似海却无岸
{% endcq %}
```

效果：

{% cq %}
人海似海却无岸
{% endcq %}

## 主题自带-引用块

代码:

```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

效果:

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

代码:

```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

效果:

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

## 主题自带-``note``标签

代码：
```
<div class="note default"><p>default</p></div>
```

效果：
<div class="note default"><p>default</p></div>

代码：
```
<div class="note primary"><p>primary</p></div>
```

效果：
<div class="note primary"><p>primary</p></div>

代码：
```
<div class="note success"><p>success</p></div>
```

效果：
<div class="note success"><p>success</p></div>

代码：
```
<div class="note info"><p>info</p></div>
```

效果：
<div class="note info"><p>info</p></div>

代码：
```
<div class="note warning"><p>warning</p></div>
```

效果：
<div class="note warning"><p>warning</p></div>

代码：
```
<div class="note danger"><p>danger</p></div>
```

效果：
<div class="note danger"><p>danger</p></div>

代码：
```
<div class="note danger no-icon"><p>danger no-icon</p></div>
```

效果：
<div class="note danger no-icon"><p>danger no-icon</p></div>

可以在<span id="inline-purple">主题配置文件</span>中需要配置下:

```
# Note tag (bs-callout).
note:
  # 风格
  style: flat
  # 要不要图标
  icons: true
  # 圆角矩形
  border_radius: 3
  light_bg_offset:
```

## 主题自带-``label``标签

可以在<span id="inline-purple">主题配置文件</span>中需要配置下:

```
# Label tag.
label: true
```
效果如下（@ 前面的是label的名字，后面的是要显示的文字）：

代码：
```
{% label default@default %}
```

效果：
{% label default@default %}

可以将`default`换成`primary`，`success`，`info`，`warning`，`danger`，试试效果吧！

## 主题自带-``tabs``(选项卡)标签

可以在<span id="inline-purple">主题配置文件</span>中需要配置下:

```
# Tabs tag.
tabs:
  enable: true
  transition:
    tabs: true
    labels: true
  border_radius: 0
```

代码：
```
{% tabs 选项卡, 2 %}
<!-- tab -->
**这是选项卡 1** 呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈……
<!-- endtab -->
<!-- tab -->
**这是选项卡 2**
<!-- endtab -->
<!-- tab -->
**这是选项卡 3** 哇，你找到我了！φ(≧ω≦*)♪～
<!-- endtab -->
{% endtabs %}
```

效果1：
{% tabs 选项卡, 2 %}
<!-- tab -->
**这是选项卡 1** 呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈……
<!-- endtab -->
<!-- tab -->
**这是选项卡 2**
<!-- endtab -->
<!-- tab -->
**这是选项卡 3** 哇，你找到我了！φ(≧ω≦*)♪～
<!-- endtab -->
{% endtabs %}


效果2：
{% tabs %}
<!-- tab first tab@heart -->
 first
<!-- endtab -->
<!-- tab  second tab-->
 second
<!-- endtab -->
{% endtabs %}

说明:源码中, 2表示一开始在第二个选项卡，非必须，若数值为-1则隐藏选项卡内容。更多用法请查看[这个页面](https://almostover.ru/2016-01/hexo-theme-next-test/#Tab-tag-test)


## 主题自带-下载样式按钮

代码：
```
{% btn https://www.baidu.com, 点击下载百度, download fa-lg fa-fw %}
```

效果:：
{% btn https://www.baidu.com, 点击下载百度, download fa-lg fa-fw %}

关于按钮的更多使用可以前往这个[页面](https://almostover.ru/2016-01/hexo-theme-next-test/#Button-tag-test)查看

代码：
```
<a id="download" href="https://git-scm.com/download/win"><i class="fa fa-download"></i><span> Download Now</span>
</a>
```

效果: <a id="download" href="https://git-scm.com/download/win"><i class="fa fa-download"></i><span> Download Now</span>
</a>

这也是调用了[Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started)的方法

## 文档中增加图标

代码：

```
- <i class="fa fa-pencil"></i>支持Markdown
<i>Hexo 支持 GitHub Flavored Markdown 的所有功能，甚至可以整合 Octopress 的大多数插件</i>
- <i class="fa fa-cloud-upload"></i>一件部署
<i>只需一条指令即可部署到Github Pages，或其他网站</i>
- <i class="fa fa-cog"></i>丰富的插件
<i>Hexo 拥有强大的插件系统，安装插件可以让 Hexo 支持 Jade, CoffeeScript</i>
```

效果：
- <i class="fa fa-pencil"></i>支持Markdown
<i>Hexo 支持 GitHub Flavored Markdown 的所有功能，甚至可以整合 Octopress 的大多数插件</i>
- <i class="fa fa-cloud-upload"></i>一件部署
<i>只需一条指令即可部署到Github Pages，或其他网站</i>
- <i class="fa fa-cog"></i>丰富的插件
<i>Hexo 拥有强大的插件系统，安装插件可以让 Hexo 支持 Jade, CoffeeScript</i>

代码：

```
 <i class="fa fa-github"></i>
 <i class="fa fa-github fa-lg"></i>
 <i class="fa fa-github fa-2x"></i>
```

效果：

<i class="fa fa-github"></i>，<i class="fa fa-github fa-lg"></i>，<i class="fa fa-github fa-2x"></i>

采用的是Font Awesome的图标

## 表格

注意表格横线的冒号----：，此表示是否居中

代码：

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

效果：

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


## 代码块顶部样式

这里指的是\`\`\`代码块，而不是行内代码块（`代码`），它的用法如下：

```[language] [title] [url] [link-text]
中间写代码，顶部不会出现[language]，但是已经应用在代码当中
```

[language] 是代码语言的名称，用来设置代码块颜色高亮，非必须；
[title] 是顶部左边的说明，非必须；
[url] 是顶部右边的超链接地址，非必须；
[link text] 如它的字面意思，超链接的名称，非必须

亲测这 4 项应该是根据空格来分隔，而不是[]，故请不要加[]。除非如果你想写后面两个，但不想写前面两个，那么就必须加[]了，要这样写：[] [] [url] [link text]

例如：

```python 测试
r = request.get("www.baidu.com")
print(r.text)
```

红色-和绿色+的样式哪来的？哈哈哈，原来这也是一种语言，叫diff，所以你只需在 [language] 这写diff，然后在相应代码前面加上-和+就行了

```diff 测试
+ r = request.get("www.baidu.com")
- print(r.text)
```

当然，要是你不满意顶部的文字样式，也可以自己在``hexo/source/_data/styles.styl``自定义：

```[] 文件位置：~hexo/source/_data/styles.styl
// 文章```代码块顶部样式
.highlight figcaption {
    margin: 0em;
    padding: 0.5em;
    background: #1D1F21;
    border-bottom: 0px solid #e9e9e9;
}
.highlight figcaption a {
    color: rgb(80, 115, 184);
}
```

[^1]: 注脚的内容
