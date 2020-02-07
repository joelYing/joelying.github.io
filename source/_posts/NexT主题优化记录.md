---
title: NexT主题优化记录
categories: Hexo
tags: NexT
comments: true
description: NexT主题优化记录
abbrlink: 8b66fa63
date: 2019-08-15 12:26:13
permalink:
image:
---
<img class="joel-img" src="http://image.joelyings.com/20190820-3.jpg" >

<!-- more -->
### NexT主题优化历程
---

### 一九年八月十五日

正式开始使用NexT作为博客主题，根据[文档](http://theme-next.iissnan.com/getting-started.html)进行基本配置优化


#### 修改主题配置文件

```
Scheme: Muse

language: zh-Hans

menu:
  home: / || home
  about: /about/ || user
  tags: /tags/ || tags
  categories: /categories/ || th
  archives: /archives/ || archive
  schedule: /schedule/ || calendar

avatar:
  url: http://image.joelyings.com/%E6%96%91.jpg

sidebar:
  position: right
  display: post

```

#### NexT 7.3 版本添加自定义样式

最新版本的NexT添加自定义样式，已经找不到``_custom/custom.styl``文件，根据更新内容

在博客目录下的``source``文件夹内，新建一个``_data``文件夹，注意不是主题下的``source``文件夹

然后新建对应的想要添加的样式文件，如下``custom_file_path``中所示，添加首页文章阴影等放在``hexo/source/_data/styles.styl``中

```
# Define custom file paths.
# Create your custom files in site directory `source/_data` and uncomment needed files below.
custom_file_path:
  #head: source/_data/head.swig
  #header: source/_data/header.swig
  #sidebar: source/_data/sidebar.swig
  # postMeta: source/_data/post-meta.swig
  #postBodyEnd: source/_data/post-body-end.swig
  #footer: source/_data/footer.swig
  #bodyEnd: source/_data/body-end.swig
  #variable: source/_data/variables.styl
  #mixin: source/_data/mixins.styl
  style: source/_data/styles.styl
```

#### 修改文章页宽

打开``themes/next/source/css/_variables/base.styl``，找到以下字段并修改为合适的宽度：

```diff
- $content-desktop-large          = 800px
+ $content-desktop-large          = 1000px
- $content-desktop-largest          = 900px
+ $content-desktop-largest          = 1000px
```

#### 修改小型代码块颜色 

``themes\next\source\css\_variables\base.styl``

```diff
- $code-foreground                = $black-light;
+ $code-foreground                = $my-code-foreground;
- $code-background                = $gainsboro;
+ $code-background                = $my-code-background;

// 自定义的颜色
$my-code-foreground = #ff6600  // 用``围出的代码块字体颜色
$my-code-background = #fff  // 用``围出的代码块背景颜色
```
```css
// Code & Code Blocks 用``围出来的的代码块
// --------------------------------------------------
$code-font-family               = $font-family-monospace;
$code-border-radius             = 4px;
$code-font-size                 = 15px;
$code-foreground                = $my-code-foreground;
$code-background                = $my-code-background;
```

修改``hexo/source/_data/styles.styl``，加入自定义样式

```css
// 文章``代码块的自定义样式
code {
    color: #ff0000;
    background: #fbf7f8;
    margin: 2px;
}
```


#### 修改链接文字样式

~~在``hexo/source/_data/styles.styl``中添加~~

修改文件 themes\next\source\css\_common\components\post\post.styl，在末尾添加如下css样式，：

```
//文章内链接文本样式
.post-body p a{
  color: #0593d3;
  border-bottom: none;
  border-bottom: 1px solid #0593d3;
  &:hover {
    color: #fc6423;
    border-bottom: none;
    border-bottom: 1px solid #fc6423;
  }
}
```

其中选择.post-body 是为了不影响标题，选择 p 是为了不影响首页“阅读全文”的显示样式,颜色可以自己定义

#### [Read More]按钮样式

在``hexo/source/_data/styles.styl``中添加：

```[] hexo/source/_data/styles.styl
// [Read More]按钮样式
.post-button .btn {
    color: #555 !important;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    font-size: 15px;
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    border: none !important;
    transition-property: unset;
    padding: 0px 15px;
}

.post-button .btn:hover {
    color: rgb(255, 255, 255) !important;
    border-radius: 3px;
    font-size: 15px;
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    background-image: linear-gradient(90deg, #a166ab 0%, #ef4e7b 25%, #f37055 50%, #ef4e7b 75%, #a166ab 100%);
}
```

#### 网易云音乐外链

```diff hexo\themes\next\layout\_macro\sidebar.swig
  <div class="sidebar-inner">
  ......
+ <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=332 height=86 src="//music.163.com/outchain/player?type=2&id=22842399&auto=1&height=66"></iframe>
  </div>
```

#### 修改旋转头像

在``themes\next\source\css\_common\components\sidebar\sidebar-author.styl``中：

```
.site-author-image {
  border: $site-author-image-border-width solid $site-author-image-border-color;
  display: block;
  height: $site-author-image-height;
  margin: 0 auto;
  max-width: $site-author-image-width;
  padding: $site-author-image-padding;
+   //设置圆形
+  border-radius: 50%;
+  transition: 2s all;
  if (hexo-config('avatar.rounded')) {
    border-radius: 50%;
  }
}

+//旋转
+.site-author-image:hover{
+  transform: rotate(360deg);
+}
```

#### 文章自动显示部分内容

在主题配置文件中，搜索auto_excerpt：

```diff
auto_excerpt:
- enable: false
+ enable: true
  length: 150
```

#### 友情链接

在主题配置文件中搜索关键字`Blog rolls`,添加自己需要的链接

```
links:
  #Title: http://example.com
  baidu: https://www.baidu.com/
  google: https://www.google.com/
```

#### 本地搜索

在Hexo的根目录下执行以下命令。

```
npm install hexo-generator-searchdb --save
```

打开主题配置文件,搜索关键字`local_search`,将`enable`的值设置为 `true`

```
# Local search
# Dependencies: https://github.com/theme-next/hexo-generator-searchdb
local_search:
  enable: true
```

修改`hexo/_config.yml`站点配置文件,末尾新增以下代码:

```
# 本地搜索
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```

### 一九年八月十六日

#### 添加RSS

在Hexo根目录执行安装指令，安装 hexo-generator-feed 插件

```
npm install hexo-generator-feed --save
```

打开站点配置文件，追加feed信息

```
# 设置RSS
feed:
  type: rss2
  path: rss2.html
  limit: 5
  hub:
  content: 'true'
```

打开主题配置文件，找到rss，设置为

```
rss: /atom.xml
```

#### 添加社交链接

在主题配置文件中，找到social属性，添加社交链接，步骤如下

```
social:
  E-Mail: mailto:yourname@gmail.com || envelope
  Google: https://plus.google.com/yourname || google
  Twitter: https://twitter.com/yourname || twitter
  Facebook: https://www.facebook.com/yourname || facebook
```
格式为： 社交平台名称：链接


#### 设置代码高亮

在站点配置文件中，搜索highlight关键词

```
highlight:
  enable: true
  line_number: true
  auto_detect: true
  tab_replace:
```
文字自动检测默认不启动，改成true使其起作用。

再到主题配置文件，搜索highlight_theme关键词，修改代码主题样式
```
# Code Highlight theme
# Available values: normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: night
```

#### 添加复制按钮

在主题配置文件中，搜索关键词`codeblock`，将`copy_button`的`enable`值修改为`true`

`show_result: true`显示复制成功

```
codeblock:
  # Code Highlight theme
  # Available values: normal | night | night eighties | night blue | night bright
  # See: https://github.com/chriskempson/tomorrow-theme
  highlight_theme: night
  # Add copy button on codeblock
  copy_button:
    enable: true
    # Show text copy result.
    show_result: true
    # Available values: default | flat | mac
    style: flat
```

#### 添加阅读次数统计

主题配置文件中，搜索关键词``busuanzi_count``，设置文章阅读次数统计及网站访客量

```
# Show Views/Visitors of the website/page with busuanzi.
# Get more information on http://ibruce.info/2015/04/04/busuanzi
busuanzi_count:
  enable: true
  total_visitors: true
  total_visitors_icon: user
  total_views: true
  total_views_icon: eye
  post_views: true
  post_views_icon: eye
```

#### 添加 README.md

每个项目``README.md``文件可以简单说明这个项目的用途。在Hexo目录下的``source``根目录下添加一个``README.md`` 文件，修改站点配置文件，将``skip_render``参数的值设置为

```
skip_render: README.md
```
再次使用hexo d命令部署博客的时候就不会在渲染``README.md``这个文件。


#### 自定义网站头像

自定义头像可以使用[比特虫](http://www.bitbug.net/)网站制作 将图片的.png格式放在themes/next/source/images

在主题配置文件中，按以下修改
```
favicon:
  small: /images/favicon-16x16-next.png     #你的头像名称
  medium: /images/favicon-32x32-next.png    #你的头像名称
  apple_touch_icon: /images/apple-touch-icon-next.png
  safari_pinned_tab: /images/logo.svg
  #android_manifest: /images/manifest.json
  #ms_browserconfig: /images/browserconfig.xml
```
我的是将图片名直接填在里面，改为如下，当然将图片名修改成上面原来的样式也可以
```
favicon:
  small: /images/favicon_op_16.png
  medium: /images/favicon_op_32.png
  apple_touch_icon: /images/op.jpeg
  # safari_pinned_tab: /images/logo.svg
  # safari_pinned_tab: /images/op.svg
  #android_manifest: /images/manifest.json
  #ms_browserconfig: /images/browserconfig.xml
```

[jpeg转svg文件](https://onlineconvertfree.com/zh/convert-format/jpeg-to-svg/)


#### 开启版权声明

打开主题配置文件,搜索关键字``creative_commons``, ``post``改为``true``
```
creative_commons:
  license: by-nc-sa
  sidebar: false
  post: true
  language:
```

#### 优化url

seo搜索引擎优化认为，网站的最佳结构是三层，但是默认hexo编译的站点打开文章的url是：sitename/year/mounth/day/title四层的结构，url不利于搜索引擎搜索。
因此，我们可以将url直接改成sitename/blog/title的形式，同时title最好是用英文，在站点配置文件搜索permalink关键词，并修改如下
```
url: https://chloneda.github.io/
root: /
permalink: /blog/:title.html
permalink_defaults:
```

#### 修改标签云(tagcloud)颜色

在主题配置文件中开启标签云

```yml themes\next\_config.yml
# TagCloud settings for tags page.
tagcloud:
  # If true, font size, font color and amount of tags can be customized
  enable: true
  # All values below are same as default, change them by yourself
  min: 12 # Minimun font size in px
  max: 30 # Maxium font size in px
  start: "#ccc" # Start color (hex, rgba, hsla or color keywords)
  end: "#111" # End color (hex, rgba, hsla or color keywords)
  amount: 200 # Amount of tags, change it if you have more than 200 tags

```

修改``themes/next/layout/page.swig``文件，加入自定义样式
修改对应参数值即可，参数说明见[Hexo官方文档](https://hexo.io/zh-cn/docs/helpers.html#tagcloud)

```
- {{ tagcloud({min_font: 12, max_font: 30, amount: 200, color: true, start_color: '#ccc', end_color: '#111'}) }}
+ {{ tagcloud({min_font: 13, max_font: 31, amount: 1000, color: true, start_color: '#9733EE', end_color: '#FF512F'}) }}
```

#### 修改文章底部#号标签为图标


修改模板``/themes/next/layout/_macro/post.swig``，搜索``rel="tag">#``，将``#``换成<i class="fa fa-tag"></i>
```
<a href="{{ url_for(tag.path) }}" rel="tag">{{ tag_indicate }} {{ tag.name }}</a>

<a href="{{ url_for(tag.path) }}" rel="tag"><i class="fa fa-tag"></i> {{ tag.name }}</a>
```

#### 隐藏底部”强力驱动”内容

修改``themes/next/_config.yml``文件,将``powered``和``enable``设置为``false``
```
footer:
  # Specify the date when the site was setup. If not defined, current year will be used.
  since: 2019

  # Icon between year and copyright info.
  icon:
    # Icon name in Font Awesome. See: https://fontawesome.com/v4.7.0/icons/
    # `heart` is recommended with animation in red (#ff0000).
    name: user
    # If you want to animate the icon, set it to true.
    animated: false
    # Change the color of icon, using Hex Code.
    color: "#808080"

  # If not defined, `author` from Hexo `_config.yml` will be used.
  copyright:

  powered:
    # Hexo link (Powered by Hexo).
    enable: false
    # Version info of Hexo after Hexo link (vX.X.X).
    version: false

  theme:
    # Theme & scheme info link (Theme - NexT.scheme).
    enable: false
    # Version info of NexT after scheme info (vX.X.X).
    version: false

  # Beian ICP information for Chinese users. See: http://www.beian.miit.gov.cn
  beian:
    enable: false
    icp:
```

#### 文章末尾添加”本文结束”标记

修改在``themes/next/layout/_macro/post.swig``中，在``wechat-subscriber.swig``之前添加如下代码

```
+ <div style="text-align:center;color: #ccc;font-size:14px;">---------------- The End ----------------</div>
      {%- if theme.wechat_subscriber.enable %}
        {{ partial('../_partials/post/wechat-subscriber.swig', {}, {cache: theme.cache.enable}) }}
      {%- endif %}
```

#### 移动端显示``back-to-top``按钮和侧栏

修改主题配置``themes/next/_config.yml``

```
# Enable sidebar on narrow view
onmobile: true
```

#### 设置动态title

``themes/next/source/js/src``下创建``dytitle.js``文件

```
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr('href', "/TEP.png");
        document.title = 'w(ﾟДﾟ)w 出BUG啦！！！！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="shortcut icon"]').attr('href', "/favicon.png");
        document.title = '♪(^∇^*)又好了。。。 ' + OriginTitile;
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});
```

修改``themes/next/layout/layout.swing``,添加``<script type="text/javascript" src="/js/src/dytitle.js"></script>``：

```
<!DOCTYPE html>

{# NexT version #}
{%- set version = next_env('version') %}

<script type="text/javascript" src="/js/src/dytitle.js"></script>
```

#### 侧栏加入已运行的时间

进入`themes/next/layout/_partials/footer.swig`文件，在文件合适的地方(我的是在文件末尾)放上如下代码

```
<!--添加网站的运行时间-->
<div id="days"></div>
<script>
function show_date_time(){
    window.setTimeout("show_date_time()", 1000);
    BirthDay=new Date("08/07/2019 21:13:14");   //修改为自己的blog建站时间 月/日/年 时:分:秒
    today=new Date();
    timeold=(today.getTime()-BirthDay.getTime());
    sectimeold=timeold/1000
    secondsold=Math.floor(sectimeold);
    msPerDay=24*60*60*1000
    e_daysold=timeold/msPerDay
    daysold=Math.floor(e_daysold);
    e_hrsold=(e_daysold-daysold)*24;
    hrsold=setzero(Math.floor(e_hrsold));
    e_minsold=(e_hrsold-hrsold)*60;
    minsold=setzero(Math.floor((e_hrsold-hrsold)*60));
    seconds=setzero(Math.floor((e_minsold-minsold)*60));
    document.getElementById('days').innerHTML="本站已安全运行"+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒";
}
function setzero(i){
    if (i<10)
    {i="0" + i};
    return i;
}
show_date_time();
</script>
```

代码在不同的位置会有不同的效果

#### 点击出现爱心效果
在`/themes/next/source/js/src/love.js`下新建文件`love.js`，没有`src`文件夹可以新建一个，接着把该链接下的代码拷贝粘贴到`love.js`文件中

```
!function (e, t, a) { function n() { c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o(), r() } function r() { for (var e = 0; e < d.length; e++)d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y-- , d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999"); requestAnimationFrame(r) } function o() { var t = "function" == typeof e.onclick && e.onclick; e.onclick = function (e) { t && t(), i(e) } } function i(e) { var a = t.createElement("div"); a.className = "heart", d.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: s() }), t.body.appendChild(a) } function c(e) { var a = t.createElement("style"); a.type = "text/css"; try { a.appendChild(t.createTextNode(e)) } catch (t) { a.styleSheet.cssText = e } t.getElementsByTagName("head")[0].appendChild(a) } function s() { return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" } var d = []; e.requestAnimationFrame = function () { return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) } }(), n() }(window, document);
```

在`\themes\next\layout\_layout.swig`文件中添加：

```
<!DOCTYPE html>

{# NexT version #}
{%- set version = next_env('version') %}

<script type="text/javascript" src="/js/src/dytitle.js"></script>
<!-- 页面点击小红心 -->
<script type="text/javascript" src="/js/src/love.js"></script>
```

#### 更多点击特效

点击下方按钮下载相应的脚本，并置于 themes\next\source\js\src\ 目录下：

{% btn http://image.joelyings.com/fireworks.js, 礼花特效, download fa-lg fa-fw %} {% btn http://image.joelyings.com/explosion.min.js, 爆炸特效, download fa-lg fa-fw %} {% btn http://image.joelyings.com/love.min.js, 浮出爱心, download fa-lg fa-fw %} {% btn http://image.joelyings.com/text.js, 浮出文字, download fa-lg fa-fw %}


在主题自定义布局文件中添加以下代码,``themes\next\layout\_custom\custom.swig``
```
{# 鼠标点击特效 #}
{% if theme.cursor_effect == "fireworks" %}
  <script async src="/js/src/fireworks.js"></script>
{% elseif theme.cursor_effect == "explosion" %}
  <canvas class="fireworks" style="position: fixed;left: 0;top: 0;z-index: 1; pointer-events: none;" ></canvas>
  <script src="//cdn.bootcss.com/animejs/2.2.0/anime.min.js"></script>
  <script async src="/js/src/explosion.min.js"></script>
{% elseif theme.cursor_effect == "love" %}
  <script async src="/js/src/love.min.js"></script>
{% elseif theme.cursor_effect == "text" %}
  <script async src="/js/src/text.js"></script>
{% endif %}
```

如果``custom.swig``文件不存在，需要手动新建并在布局页面中``body``末尾引入：

``themes\next\layout\_layout.swig``
```
      ...
      {% include '_third-party/exturl.swig' %}
      {% include '_third-party/bookmark.swig' %}
      {% include '_third-party/copy-code.swig' %}

+     {% include '_custom/custom.swig' %}
    </body>
  </html>
```
在主题配置文件中添加以下代码：

``themes\next\_config.yml``
```
# mouse click effect: fireworks | explosion | love | text
cursor_effect: fireworks
```
这样即可在配置文件中一键快速切换鼠标点击特效

如果从本地加载 JS 脚本速度较慢，可以考虑将脚本放到 CDN 上再引入


#### 增加内容分享服务

详细参考[theme-next-needmoreshare2](https://github.com/theme-next/theme-next-needmoreshare2),CDN是？

修改`themes/next/_config.yml`主题配置文件，搜索关键字`needmoreshare2`，找到如下代码并做以下修改:

```
# 文章分享功能
needmoreshare2:
  enable: true
  postbottom:
    enable: true
    options:
      iconStyle: default
      boxForm: horizontal
      position: bottomCenter
      networks: Weibo,Wechat,Douban,QQZone,Twitter,Facebook
  float:
    enable: true
    options:
      iconStyle: default
      boxForm: vertical
      position: topRight
      networks: Weibo,Wechat,Douban,QQZone,Twitter,Facebook
```

#### 增加文章字数统计及阅读时常功能

最新请参考[hexo-symbols-count-time](https://github.com/theme-next/hexo-symbols-count-time)

~~安装插件``hexo-wordcount``,执行以下命令:~~

```
npm install hexo-wordcount --save
```

修改`themes/next/_config.yml`主题配置文件，搜索关键字`post_wordcount`,修改如下:

```
post_wordcount:
  item_text: true
  wordcount: true #单篇文章字数
  min2read: true #单篇阅读时长
  totalcount: true #站点总字数
  separated_meta: true
```

#### 博客静态资源压缩优化

用hexo生成静态文件时，默认生成的静态文件存在大量空白，而且css、js都未经压缩，这在一定程度上会影响页面的加载，所以在网上所搜有没有办法来优化这些问题？

答案肯定是有，当然大部分博客都提到了使用gulp来精简代码，而我今天所要跟大家介绍的是hexo-neat插件 。我为啥不选择gulp而使用hexo-neat呢？因为用gulp需要在每次生成静态文件后，即hexo g后，都要另外执行gulp命令才能压缩静态文件；而使用hexo-neat则无须另外执行其他命令即可自动完成压缩功能，即方便了使用习惯。

在站点的根目录下执行以下命令：
```
npm install hexo-neat --save
```
打开`blog/_config.yml`全局配置文件添加如下配置：
```
#静态资源压缩优化
# hexo-neat
neat_enable: true # 启用neat

# 对html优化
neat_html:          
  enable: true
  exclude:
  
# 对css优化
neat_css:
  enable: true
  exclude:
    - '*.min.css'

# 对js优化
neat_js:
  enable: true
  mangle: true
  output:
  compress:
  exclude:
    - '*.min.js'
```

若压缩文件过程中出现压缩某个js文件出错，故不建议对js文件进行优化，将`neat_js`设置为false

#### 看板娘 live2d

详细信息: https://github.com/EYHN/hexo-helper-live2d/blob/master/README.zh-CN.md

安装依赖:
```
npm install --save hexo-helper-live2d
npm install --save live2d-widget-model-wanko
```
站点配置添加:
```
# hexo-helper-live2d配置, 参考https://github.com/EYHN/hexo-helper-live2d/blob/master/README.zh-CN.md
live2d:
  enable: true
  scriptFrom: local
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  tagMode: false
  debug: false
  model:
    use: live2d-widget-model-shizuku
  display:
    # superSample: 2 # 超采样等级
    width: 150
    height: 300
    position: right # 位置
    hOffset: 80
  mobile:
    show: true
  react:
    opacity: 0.7
    # opacityDefault: 0.6 # 默认透明度
    # opacityOnHover: 0.5 # 鼠标移上透明度
  dialog: # Display dialog 显示人物对话框
    enable: true
    hitokoto: true  # 使用一言API
```

#### 页jio心跳

[参考](https://theme-next.org/docs/theme-settings/footer)

```
footer:
  # Specify the date when the site was setup. If not defined, current year will be used.
  since: 2019

  # Icon between year and copyright info.
  icon:
    # Icon name in Font Awesome. See: https://fontawesome.com/v4.7.0/icons/
    # `heart` is recommended with animation in red (#ff0000).
    name: heart
    # If you want to animate the icon, set it to true.
    animated: true
    # Change the color of icon, using Hex Code.
    color: "＃ff0000"
```

### 一九年八月十七日

文章模板功能及写作样式

文章模板功能主要用于通过命令新建文章时，初始化文章设置，参见 Hexo 官方文档的[Front-matter](https://hexo.io/docs/front-matter.html) 和[页面变量](https://hexo.io/zh-cn/docs/variables.html#%E9%A1%B5%E9%9D%A2%E5%8F%98%E9%87%8F)，总结如下：

```
/* ！！！！！！！！！！
** 每一项的 : 后面均有一个空格
** 且 : 为英文符号
** ！！！！！！！！！！
*/

title:
/* 文章标题，可以为中文 */

date:
/* 建立日期，如果自己手动添加，请按固定格式
** 就算不写，页面每篇文章顶部的发表于……也能显示
** 只要在主题配置文件中，配置了 created_at 就行
** 那为什么还要自己加上？
** 自定义文章发布的时间
*/

updated:
/* 更新日期，其它与上面的建立日期类似
** 不过在页面每篇文章顶部，是更新于……
** 在主题配置文件中，是 updated_at
*/

permalink:
/* 若站点配置文件下的 permalink 配置了 title
** 则可以替换文章 URL 里面的 title（文章标题）
*/

categories:
/* 分类，支持多级，比如：
- technology
- computer
- computer-aided-art
则为technology/computer/computer-aided-art
（不适用于 layout: page）
*/

tags:
/* 标签
** 多个可以这样写[标签1,标签2,标签3]
** （不适用于 layout: page）
*/

description:
/* 文章的描述，在每篇文章标题下方显示
** 并且作为网页的 description 元数据
** 如果不写，则自动取 <!-- more -->
** 之前的文字作为网页的 description 元数据
** 建议每篇文章都务必加上！
*/

keywords:
/* 关键字，并且作为网页的 keywords 元数据
** 如果不写，则自动取 tags 里的项
** 作为网页的 keywords 元数据
*/

comments:
/* 是否开启评论
** 默认值是 true
** 要关闭写 false
*/

layout:
/* 页面布局，默认值是 post，默认值可以在
** 站点配置文件中修改 default_layout
** 另：404 页面可能用到，将其值改为 false
*/

type:
/* categories，目录页面
** tags，标签页面
** picture，用来生成 group-pictures
** quote？
** https://reuixiy.github.io/uncategorized/2010/01/01/test.html
*/

photos:
/* Gallery support，用来支持画廊 / 相册，用法如下：
- photo_url_1
- photo_url_2
- photo_url_3
https://reuixiy.github.io/uncategorized/2010/01/01/test.html
*/

link:
/* 文章的外部链接
** https://reuixiy.github.io/uncategorized/2010/01/01/test.html
*/

image:
/* 自定义的文章摘要图片，只在页面展示，文章内消失
** 此项只有参考本文 5.14 节配置好，否则请勿添加！
*/

sticky:
/* 文章置顶
** 此项只有参考本文 5.15 节配置好，否则请勿添加！
*/

password:
/* 文章密码，此项只有参考教程：
** http://shenzekun.cn/hexo的next主题个性化配置教程.html
** 第 24 节，配置好，否则请勿添加！
** 发现还是有 bug 的，就是右键在新标签中打开
** 然后无论是否输入密码，都能看到内容
*/
```

参考模板

```
---
title: {{ title }}
date: {{ date }}
permalink:
categories:
tags: []
description:
image:
---

<img src="https://" alt="" style="width:100%"/>

<!-- more -->

##

##

##

<hr />
```

#### 好玩的写作样式

根据[最新版NexT主题自定义样式方法](https://github.com/theme-next/hexo-theme-next/issues/982)，先在``hexo\source\_data\styles.styl``中添加以下样式：

```
// 按钮样式（为emoji特设）
.btn {
    color: #fff !important;
    text-decoration: none !important;
    border: 2px solid #222 !important;
}
.btn:hover {
    color: #222 !important;
}
// 下载样式
a#download {
display: inline-block;
padding: 0 10px;
color: #000;
background: transparent;
border: 2px solid #000;
border-radius: 2px;
transition: all .5s ease;
font-weight: bold;
&:hover {
background: #000;
color: #fff;
}
}
/ /颜色块-黄
span#inline-yellow {
display:inline;
padding:.2em .6em .3em;
font-size:80%;
font-weight:bold;
line-height:1;
color:#fff;
text-align:center;
white-space:nowrap;
vertical-align:baseline;
border-radius:0;
background-color: #f0ad4e;
}
// 颜色块-绿
span#inline-green {
display:inline;
padding:.2em .6em .3em;
font-size:80%;
font-weight:bold;
line-height:1;
color:#fff;
text-align:center;
white-space:nowrap;
vertical-align:baseline;
border-radius:0;
background-color: #5cb85c;
}
// 颜色块-蓝
span#inline-blue {
display:inline;
padding:.2em .6em .3em;
font-size:80%;
font-weight:bold;
line-height:1;
color:#fff;
text-align:center;
white-space:nowrap;
vertical-align:baseline;
border-radius:0;
background-color: #2780e3;
}
// 颜色块-紫
span#inline-purple {
display:inline;
padding:.2em .6em .3em;
font-size:80%;
font-weight:bold;
line-height:1;
color:#fff;
text-align:center;
white-space:nowrap;
vertical-align:baseline;
border-radius:0;
background-color: #9954bb;
}
// 左侧边框红色块级
p#div-border-left-red {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-left-width: 5px;
border-radius: 3px;
border-left-color: #df3e3e;
}
// 左侧边框黄色块级
p#div-border-left-yellow {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-left-width: 5px;
border-radius: 3px;
border-left-color: #f0ad4e;
}
// 左侧边框绿色块级
p#div-border-left-green {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-left-width: 5px;
border-radius: 3px;
border-left-color: #5cb85c;
}
// 左侧边框蓝色块级
p#div-border-left-blue {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-left-width: 5px;
border-radius: 3px;
border-left-color: #2780e3;
}
// 左侧边框紫色块级
p#div-border-left-purple {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-left-width: 5px;
border-radius: 3px;
border-left-color: #9954bb;
}
// 右侧边框红色块级
p#div-border-right-red {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-right-width: 5px;
border-radius: 3px;
border-right-color: #df3e3e;
}
// 右侧边框黄色块级
p#div-border-right-yellow {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-right-width: 5px;
border-radius: 3px;
border-right-color: #f0ad4e;
}
// 右侧边框绿色块级
p#div-border-right-green {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-right-width: 5px;
border-radius: 3px;
border-right-color: #5cb85c;
}
// 右侧边框蓝色块级
p#div-border-right-blue {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-right-width: 5px;
border-radius: 3px;
border-right-color: #2780e3;
}
// 右侧边框紫色块级
p#div-border-right-purple {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-right-width: 5px;
border-radius: 3px;
border-right-color: #9954bb;
}
// 上侧边框红色
p#div-border-top-red {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-top-width: 5px;
border-radius: 3px;
border-top-color: #df3e3e;
}
// 上侧边框黄色
p#div-border-top-yellow {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-top-width: 5px;
border-radius: 3px;
border-top-color: #f0ad4e;
}
// 上侧边框绿色
p#div-border-top-green {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-top-width: 5px;
border-radius: 3px;
border-top-color: #5cb85c;
}
// 上侧边框蓝色
p#div-border-top-blue {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-top-width: 5px;
border-radius: 3px;
border-top-color: #2780e3;
}
// 上侧边框紫色
p#div-border-top-purple {
display: block;
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-top-width: 5px;
border-radius: 3px;
border-top-color: #9954bb;
}
```

#### 添加注脚
安装插件[^1]
```
npm install hexo-reference --save
```
用法如下：
```
this is a basic footnote[/^1] ##用的时候把/去掉
```
在文章末尾添加：
```
[/^1]: basic footnote content ##用的时候把/去掉
```
this is a basic footnote[^1]

#### 文字背景色块

代码:

```
<span id="inline-blue">站点配置文件</span>，<span id="inline-purple">主题配置文件</span>
```

效果：

<span id="inline-blue">站点配置文件</span>， <span id="inline-purple">主题配置文件</span>

#### 引用边框变色

代码:

```
<p id="div-border-left-red">左侧引用边红色</p>
<p id="div-border-top-blue">顶部引用边蓝色</p>
```

效果：

<p id="div-border-left-red">左侧引用边红色</p>
<p id="div-border-top-blue">顶部引用边蓝色</p>


#### 主题自带-文本居中

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

#### 主题自带-引用块

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

#### 主题自带-``note``标签

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

#### 主题自带-``label``标签

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

#### 主题自带-``tabs``(选项卡)标签

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

效果：
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


说明:源码中, 2表示一开始在第二个选项卡，非必须，若数值为-1则隐藏选项卡内容。更多用法请查看[这个页面](https://almostover.ru/2016-01/hexo-theme-next-test/#Tab-tag-test)


#### 主题自带-下载样式按钮

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

#### 文档中增加图标

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

#### 表格

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


#### 代码块顶部样式

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

#### 自定义样式引用

需加入`hexo/source/_data/styles.styl`的代码：

```
// 自定义的引用样式
blockquote.question {
    color: #555;#颜色
    border-left: 4px solid rgb(16, 152, 173);#边框粗细
    background-color: rgb(227, 242, 253);#背景色
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-bottom: 20px;
}
```
效果：

<blockquote class="question">内容</blockquote>

内容
```
<blockquote class="question">内容</blockquote>
```

#### 自定义样式 数字块

需加入`hexo/source/_data/styles.styl`的代码：

```
// 自定义的数字块
span#inline-toc {
    display: inline-block;
    border-radius: 80% 100% 90% 20%;
    background-color: rgb(227, 242, 253);
    color: #555;
    padding: 0.05em 0.4em;
    margin: 2px 5px 2px 0px;
    line-height: 1.5;
}
```
效果：
1.
```
<span id="inline-toc">1.</span>
```
参考：https://qianling.pw/style/#TOC数字块


#### 为next主题的主页文章添加阴影效果

~~打开`themes/next/source/css/_custom/custom.styl`文件添加:~~

打开`hexo/source/_data/styles.styl`文件添加:

详见 [NexT 7.3 版本添加自定义样式](https://joelying.github.io/blog/NexT主题优化记录.html#NexT 7.3 版本添加自定义样式)

```
// 首页文章添加阴影效果
.post-block {
  // margin-top: 60px;
  margin-bottom: 80px;
  padding: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .4);
}
```

#### 文章摘要图片
俗话说：「图文并茂」，现实中用笔书写文章实现起来比较困难，但在博客上可以很轻松实现😎。首先，文章摘要（excerpt）是指每篇文章（post）在页面（page）上显示的那部分内容，也就是 [Read More] 之前的文章内容。由于它会展示在页面，因此在每篇文章的文章摘要中加一张图片，页面看起来就很美观。但是有时候可能会出现一个问题：你想从文章中选一张图片作为文章摘要图片，而这张图片由于写作要求，必须添加在文章的末尾，这样点 [Read More] 查看文章时，这张图片就会重复出现了。咋办？

前提是在主题配置文件中：
```
文件位置：~/blog/themes/next/_config.yml
excerpt_description: false

auto_excerpt:
  enable: false
```

首先加代码：
```
文件位置：~/blog/themes/next/layout/_macro/post.swig

      {% if is_index %}
        {% if post.description and theme.excerpt_description %}
          {{ post.description }}
          <!--noindex-->
          <div class="post-button text-center">
            <a class="btn" href="{{ url_for(post.path) }}">
              {{ __('post.read_more') }} &raquo;
            </a>
          </div>
          <!--/noindex-->
        {% elif post.excerpt  %}
          {{ post.excerpt }}
+          
+        {% if post.image %}
+        <div class="out-img-topic">
+          <img src={{ post.image }} class="img-topic" />
+        </div>
+        {% endif %}
+          
          <!--noindex-->
          <div class="post-button text-center">
            <a class="btn" href="{{ url_for(post.path) }}{% if theme.scroll_to_more %}#{{ __('post.more') }}{% endif %}" rel="contents">
              {{ __('post.read_more') }} &raquo;
            </a>
          </div>
          <!--/noindex-->

```

为了防止有的图片宽度不够导致风格不够统一，页面不美观，需要在`styles.styl`中加入：
```[] 文件位置：hexo/source/_data/styles.styl
// 自定义的文章摘要图片样式
img.img-topic {
    width: 100%;
}
```
最后编辑有这需求的相关文章时，在`Front-matter`文件最上方以---分隔的区域）加上一行：
```
image: url
```
url即图片的链接地址～

参考：

issue：[https://github.com/iissnan/hexo-theme-next/issues/1190](https://github.com/iissnan/hexo-theme-next/issues/1190)
文章：[http://wellliu.com/2016/12/30/【转】Blog摘要配图/](http://wellliu.com/2016/12/30/【转】Blog摘要配图/)


### 一九年八月十八日

#### 集成Mod分享组件


Step1、获取 AppKey
在 Mob 注册账号后, 点击头像进入后台, 选择`` shareSDK ``添加一个 Web应用:


Step2、在主题配置文件中添加配置:
```
mob_share:
  enable: true
  appkey: ********
```
Step3、在next``/layout/_partials/share/``里面添加``mob_share.swig``:
```
<!--MOB SHARE BEGIN-->
<div class="-hoofoo-share-title">分享到: </div>
<div class="-hoofoo-share-buttons">
    <div class="-mob-share-weibo -hoofoo-share-weibo -hoofoo-share-ui-button"><i class="fa fa-weibo" aria-hidden="true"></i></div>
    <div class="-mob-share-weixin -hoofoo-share-weixin -hoofoo-share-ui-button"><i class="fa fa-weixin" aria-hidden="true"></i></div>
    <div class="-mob-share-qq -hoofoo-share-qq -hoofoo-share-ui-button"><i class="fa fa-qq" aria-hidden="true"></i></div>
    <div class="-mob-share-twitter -hoofoo-share-twitter -hoofoo-share-ui-button"><i class="fa fa-twitter" aria-hidden="true"></i></div>
    <div class="-hoofoo-share-more -hoofoo-share-ui-button -mob-share-open"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
</div>
<div class="-mob-share-ui" style="display: none">
    <ul class="-mob-share-list">
        <li class="-mob-share-weibo"><p>新浪微博</p></li>
        <li class="-mob-share-weixin"><p>微信</p></li>
        <li class="-mob-share-qzone"><p>QQ空间</p></li>
        <li class="-mob-share-qq"><p>QQ好友</p></li>
        <li class="-mob-share-tencentweibo"><p>腾讯微博</p></li>
        <li class="-mob-share-renren"><p>人人网</p></li>
        <li class="-mob-share-kaixin"><p>开心网</p></li>
        <li class="-mob-share-douban"><p>豆瓣</p></li>
        <li class="-mob-share-youdao"><p>有道云笔记</p></li>
        <li class="-mob-share-mingdao"><p>明道</p></li>
        <li class="-mob-share-pengyou"><p>朋友网</p></li>
        <li class="-mob-share-facebook"><p>Facebook</p></li>
        <li class="-mob-share-twitter"><p>Twitter</p></li>
        <li class="-mob-share-pocket"><p>Pocket</p></li>
        <li class="-mob-share-google"><p>Google+</p></li>
        <li class="-mob-share-tumblr"><p>Tumblr</p></li>
        <li class="-mob-share-instapaper"><p>Instapaper</p></li>
        <li class="-mob-share-linkedin"><p>Linkedin</p></li>
    </ul>
    <div class="-mob-share-close">取消</div>
</div>
<div class="-mob-share-ui-bg"></div>
<script id="-mob-share" src="http://f1.webshare.mob.com/code/mob-share.js?appkey={{theme.mob_share.appkey}}"></script>
<!--MOB SHARE END-->
```
Step4、在``next/layout/post.swig``中添加条件分支:
```
{% if theme.jiathis %}
      {% include '_partials/share/jiathis.swig' %}
    {% elseif theme.baidushare %}
      {% include '_partials/share/baidushare.swig' %}
    {% elseif theme.add_this_id %}
      {% include '_partials/share/add-this.swig' %}
    {% elseif theme.duoshuo_shortname and theme.duoshuo_share %}
      {% include '_partials/share/duoshuo_share.swig' %}
    {% elseif theme.mob_share.enable %}
      {% include '_partials/share/mob_share.swig' %}
{% endif %}
```
Step5、在``next/source/css/_common/components/third-party/``里添加样式文件``mob_share.styl``:
```
.-hoofoo-share-buttons{
    display: inline-block;
}
.-hoofoo-share-title{
    font-size: 1.1em;
    font-weight: 200;
}
.-hoofoo-share-ui-button{
    cursor: pointer;
    background-color: #555;
    color: #fff;
    font-size: 24px;
    line-height: 40px;
    width: 40px;
    height: 40px;
    margin: 10px;
    border-radius: 25px;
    float: left;
    transition: background 0.4s;
    -moz-transition: background 0.4s;    /* Firefox 4 */
    -webkit-transition: background 0.4s;    /* Safari 和 Chrome */
    -o-transition: background 0.4s;
}
.-hoofoo-share-weibo:hover{
    background-color: #cf3f41;
}
.-hoofoo-share-weixin:hover{
    background-color: #18a01a;
}
.-hoofoo-share-qq:hover{
    background-color: #950c0c;
}
.-hoofoo-share-twitter:hover{
    background-color: #2ab3e6;
}
.-hoofoo-share-more:hover{
    background-color: #777;
}
.-mob-share-weixin-qrcode-content{
    border-radius: 4px;
    -webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    -o-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}
.-mob-share-weixin-qrcode{
    margin: 5% !important;
    width: 90% !important;
    height: auto !important;
}
.-mob-share-weixin-qrcode-close {
    background-image: url('/lib/fancybox/source/fancybox_sprite.png') !important;//因为兼容问题把vendor改成了lib, 根据自己的路径修改
}
.-mob-share-weixin-qrcode-close {
    overflow: hidden;
    line-height: 100px !important;
    position: absolute !important;
    top: -18px !important;
    right: -18px !important;
    width: 36px !important;
    height: 36px !important;
    cursor: pointer !important;
    z-index: 8040 !important;
}
/*Retina graphics!*/
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
       only screen and (min--moz-device-pixel-ratio: 1.5),
       only screen and (min-device-pixel-ratio: 1.5){
    .-mob-share-weixin-qrcode-close {
        background-image: url('/lib/fancybox/source/fancybox_sprite@2x.png') !important;//因为兼容问题把vendor改成了lib, 根据自己的路径修改
        background-size: 44px 152px !important; /*The size of the normal image, half the size of the hi-res image*/
    }
}
.-mob-share-close{
    height: 4em !important;
    font-size: 0.8em !important;
    line-height: 4em !important;
    background: #555 !important;
    color: #fff !important;
}
```
Step6、同一目录下的`` third-party.styl ``中添加:
```
@import "mob_share";
```
Step7、在``next/layout/_scripts/third-party/``里添加脚本文件``mob_share.swig``:
```
{% if theme.mob_share.enable %}
<script type="text/javascript">
    //微信二维码点击背景关闭
    $('body').delegate('.-mob-share-weixin-qrcode-bg','click', function(){
         $(".-mob-share-weixin-qrcode-close").trigger("click");
    }); 
</script>
{% endif %}
```
Step8、在``next/layout/_layout.swig``的body标签结束前添加:
```
{% include '_scripts/third-party/mob_share.swig' %}
```

#### 先看一则代码

```[] Hello World示例                      
  public static void main(String[] args) {
+   System.out.println("Hello World!");
-   System.out.println("Hello World!");
  }
```
正确姿势, 代码片段开头:
```[language] [title] [url] [link-text]
daima
```
* [language] 是代码语言的名称, 用来设置代码块颜色高亮, 非必须；
* [title] 是顶部左边的说明, 非必须；
* [url] 是顶部右边的超链接地址, 非必须；
* [link text] 如它的字面意思, 超链接的名称, 非必须.
这 4 项应该是根据空格来分隔, 而不是[], 故请不要加[]. 除非如果你想写后面两个, 但不想写前面两个, 那么就必须加[]了, 要这样写: [] [] [url] [link text].

首先关于代码块颜色高亮, 高亮的模式可以在主题配置文件中设置:
```
# Code Highlight theme
# Available value:
#    normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme

highlight_theme: normal
```
要颜色正确高亮, 代码语言的名称肯定要写对, 各种支持语言的名称可以查看这篇文章. 也可以在站点配置文件_config.yml中设置自动高亮:

``blog/_config.yml``
```
highlight:
  enable: true
  line_number: true
# 代码自动高亮
-  auto_detect: false
+  auto_detect: true
```
上边的``diff``是通过在``[language]``填写``diff``, 然后在相应代码前面加上``-``和``+``

顶部的文字样式:
```
// 文章```代码块顶部样式
.highlight figcaption {
    margin: 0em;
    padding: 0.5em;
    background: #eee;
    border-bottom: 1px solid #e9e9e9;
}
.highlight figcaption a {
    color: rgb(80, 115, 184);
}
```

### 一九年八月十九日

#### 设置文章背景

在``hexo\source\_data\styles.styl``文件内增添如下代码：

```
/*设置博文背景*/
.main-inner {
    background: #fff;
    opacity: 0.9;
```
background后为rgb颜色代码，百度来一个rgb色值粘贴即可替换博文背景颜色（替换了也很丑）
opacity后数值为博文背景透明度，可设置0.0-1.0数值，值越小透明度越高。

#### 修改博客字体

在 [Google Fonts](https://fonts.google.com/) 上找到心仪的字体，然后在主题配置文件中为不同的应用场景配置字体：

```[] themes\next\_config.yml
font:
  enable: true

  # 外链字体库地址，例如 //fonts.googleapis.com (默认值)
  host:

  # 全局字体，应用在 body 元素上
  global:
    external: true
    family: Monda

  # 标题字体 (h1, h2, h3, h4, h5, h6)
  headings:
    external: true
    family: Roboto Slab

  # 文章字体
  posts:
    external: true
    family:

  # Logo 字体
  logo:
    external: true
    family:

  # 代码字体，应用于 code 以及代码块
  codes:
    external: true
    family:
```

#### 粒子漂浮聚合

该功能由[theme-next-canvas-nest](https://github.com/theme-next/theme-next-canvas-nest)插件提供，在根目录下执行如下命令：
```
$ git clone https://github.com/theme-next/theme-next-canvas-nest themes/next/source/lib/canvas-nest
```
然后在主题配置文件中设置`` canvas_nest: true ``即可。

Next v6.5.0 及以上版本支持更多的自定义选项：
```[] themes\next\_config.yml
canvas_nest:
  enable: true
  onmobile: true # 是否在移动端显示
  color: '0,0,255' # 动态背景中线条的 RGB 颜色
  opacity: 0.5 # 动态背景中线条透明度
  zIndex: -1 # 动态背景的 z-index 属性值
  count: 99 # 动态背景中线条数量
```

#### Three 三维动效
[theme-next-three](https://github.com/theme-next/theme-next-three)插件提供了三个类型的背景动效，应用效果如下：

在根目录下执行如下命令安装相关依赖：
```
$ git clone https://github.com/theme-next/theme-next-three themes/next/source/lib/three
```
然后在主题配置文件中设置开启对应的动效选项即可。
```[] themes\next\_config.yml
# JavaScript 3D library.
# Dependencies: https://github.com/theme-next/theme-next-three
# three_waves
three_waves: true
# canvas_lines
canvas_lines: false
# canvas_sphere
canvas_sphere: false
```
个人认为在站点中添加动态背景并没有实际的意义，只会凭空增加页面内存占用及 CPU 消耗，所以本站没有添加任何动态背景


#### 随机三角丝带

该功能由 Vue 作者 尤雨溪 首创。本章节中核心代码来源于 DIYgod 编写的 sagiri 主题。

点击下方按钮下载相应的脚本，并置于``themes\next\source\js\``目录下：

[随机三角丝带](https://script-1256884783.file.myqcloud.com/evan-you.js)

在主题自定义布局文件中添加以下代码：
```[] themes\next\layout\_custom\custom.swig
{# 随机三角丝带背景 #}
{% if theme.evanyou %}
  <canvas id="evanyou"></canvas>
  <style>
    #evanyou {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
  </style>
  <script src="/js/evan-you.js"></script>
{% endif %}
```
如果``custom.swig``文件不存在，需要手动新建并在布局页面中``body``末尾引入：
```[] themes\next\layout\_layout.swig
      ...
      {% include '_third-party/exturl.swig' %}
      {% include '_third-party/bookmark.swig' %}
      {% include '_third-party/copy-code.swig' %}

+     {% include '_custom/custom.swig' %}
    </body>
  </html>
```
在主题配置文件中添加以下代码：
```[] themes\next\_config.yml
# colorful trilateral riband background
evanyou: true
```
如果从本地加载 JS 脚本速度较慢，可以考虑将脚本放到 CDN 上再引入

#### 边缘摆动效果

点击下方按钮下载脚本，并置于``themes\next\source\js\``目录下：

[wobblewindow.js](https://script-1256884783.file.myqcloud.com/wobblewindow.js)

在主题自定义布局文件中添加以下代码：
```[] themes\next\layout\_custom\custom.swig
{# wobble窗口摆动特效 #}
{% if theme.wobble %}
  <script src="/js/wobblewindow.js"></script>
  <script>
    //只在桌面版网页启用特效
    if( window.innerWidth > 768  ){
      $(document).ready(function () {
        {% if theme.wobble.header %}
          $('#header').wobbleWindow({
            radius: {{ theme.wobble.radius }},
            movementTop: false,
            movementLeft: false,
            movementRight: false,
            debug: false,
          });
        {% endif %}

        {% if theme.wobble.sidebar %}
          $('#sidebar').wobbleWindow({
            radius: {{ theme.wobble.radius }},
            movementLeft: false,
            movementTop: false,
            movementBottom: false,
            position: 'fixed',
            debug: false,
          });
        {% endif %}

        {% if theme.wobble.footer %}
          $('#footer').wobbleWindow({
            radius: {{ theme.wobble.radius }},
            movementBottom: false,
            movementLeft: false,
            movementRight: false,
            offsetX: {{ theme.wobble.offset }},
            position: 'absolute',
            debug: false,
          });
        {% endif %}
      });
    }
  </script>
{% endif %}

```
如果``custom.swig``文件不存在，需要手动新建并在布局页面中``body``末尾引入：
```

themes\next\layout\_layout.swig
      ...
      {% include '_third-party/exturl.swig' %}
      {% include '_third-party/bookmark.swig' %}
      {% include '_third-party/copy-code.swig' %}

+     {% include '_custom/custom.swig' %}
    </body>
  </html>
```
在自定义样式文件中添加以下样式：

~~themes\next\source\css\_custom\custom.styl~~，NexT7.3版本在``hexo\source\_data\style.styl``添加自定义样式
```
//窗口波动效果相关样式
if hexo-config('wobble')  {
  .sidebar {
    box-shadow: none;
  }

  .wobbleTransparentBK{
    background-color: rgba(0,0,0,0) !important;
  }

  .wobbleTransparentLine{
    border-color: rgba(0,0,0,0) !important;
  }

  //Next.Muse中为Header和Footer添加背景色
  #header, #footer {
    background-color: rgb(245, 245, 245);
  }

  //防止sidebar和footer同时开启动效时堆叠异常
  #sidebar, header {
    z-index: 1 !important;
  }

  //防止挡住页末文章的阅读全文按钮
  .main {
    padding-bottom: 200px;
  }
}
```

``Next.Muse``主题方案中``Header``和`Footer`是没有背景色的，所以需要添加背景色后才能看出边缘摆动效果。另外，实现边缘摆动效果所需的`z-index`属性可能会导致元素堆叠异常，需要添加以上样式来矫正

在主题配置文件中添加以下代码：
```[] themes\next\_config.yml
# window woblle
wobble:
  enable: true  # 是否开启边缘波动效果
  radius: 50  # 波动半径
  sidebar: true  # 开启侧边栏边缘摆动
  header: true  # 开启头部边缘摆动
  footer: true  # 开启脚部边缘摆动
```
用户可以根据需要在配置文件中为选择开启边缘摆动效果的布局元素。刷新浏览器，然后将鼠标移动到布局边缘上尽情的挑逗它吧

如果从本地加载 JS 脚本速度较慢，可以考虑将脚本放到 CDN 上再引入

#### 个性化回到顶部

从[DIYgod](https://diygod.me/)的博客 里扒来的，效果如下：

首先，找到自己喜欢的图片素材放到``source\images\``目录下

你可以点击下方按钮下载本站所使用的小猫上吊素材（ 小猫咪这么可爱，当然要多放点孜然啦…）

[下载图片](http://image.joelyings.com/scroll.png)

然后在自定义样式文件中添加如下代码：
```[] hexo\source\_data\styles.styl
//自定义回到顶部样式
.back-to-top {
  right: 60px;
  width: 70px;  //图片素材宽度
  height: 900px;  //图片素材高度
  top: -900px;
  bottom: unset;
  transition: all .5s ease-in-out;
  background: url("/images/scroll.png");

  //隐藏箭头图标
  > i {
    display: none;
  }

  &.back-to-top-on {
    bottom: unset;
    top: 100vh < (900px + 200px) ? calc( 100vh - 900px - 200px ) : 0px;
  }
}
```
刷新浏览器即可预览效果。


#### 打字特效

> 本章节参考[千灵夙赋 | Hexo 优化汇总 #31](https://qianling.pw/hexo-optimization/)，原文出自[ ]龙笑天下 | 给 WordPress 博客网站添加评论输入打字礼花及震动特效](https://www.ilxtx.com/comment-input-effects.html)

点击下方按钮下载相应的脚本，并置于``themes\next\source\js\``目录下：

[打字特效](https://script-1256884783.file.myqcloud.com/activate-power-mode.min.js)

在主题自定义布局文件中添加以下代码：
```[] themes\next\layout\_custom\custom.swig
{# 打字特效 #}
{% if theme.typing_effect %}
  <script src="/js/activate-power-mode.min.js"></script>
  <script>
    POWERMODE.colorful = {{ theme.typing_effect.colorful }};
    POWERMODE.shake = {{ theme.typing_effect.shake }};
    document.body.addEventListener('input', POWERMODE);
  </script>
{% endif %}
```
如果``custom.swig``文件不存在，需要手动新建并在布局页面中``body``末尾引入：
```diff themes\next\layout\_layout.swig
      ...
      {% include '_third-party/exturl.swig' %}
      {% include '_third-party/bookmark.swig' %}
      {% include '_third-party/copy-code.swig' %}

+     {% include '_custom/custom.swig' %}
    </body>
  </html>
```
在主题配置文件中添加以下代码：
```[] themes\next\_config.yml
# typing effect
typing_effect:
  colorful: true  # 礼花特效
  shake: false  # 震动特效
```
如果从本地加载 JS 脚本速度较慢，可以考虑将脚本放到 CDN 上再引入


#### 添加图片灯箱

添加灯箱功能，实现点击图片后放大聚焦图片，并支持幻灯片播放、全屏播放、缩略图、快速分享到社交媒体等，该功能由[fancyBox](https://github.com/fancyapps/fancybox)提供，效果如下

在根目录下执行以下命令安装相关依赖：
```
$ git clone https://github.com/theme-next/theme-next-fancybox3 themes/next/source/lib/fancybox
```
在主题配置文件中设置``fancybox: true``：
```[] themes\next\_config.yml
fancybox: true
```
刷新浏览器即可生效。

### 一九年八月二十一日

#### 顶部页面加载进度条

详见[https://github.com/theme-next/theme-next-pace](https://github.com/theme-next/theme-next-pace)

[进度条样式-翻墙才能看见具体样式](http://github.hubspot.com/pace/docs/welcome/)

![](http://image.joelyings.com/pace.gif)

进入主题文件夹下，在主题文件夹下，例如`themes\next`下，获取pace的仓库

```
git clone https://github.com/theme-next/theme-next-pace source/lib/pace
```

完成后，在主题配置文件中开启设置，并选择喜欢的进度条样式

```[] themes\next\_config.yml
pace:
  enable: true
  # Themes list:
  # big-counter | bounce | barber-shop | center-atom | center-circle | center-radar | center-simple
  # corner-indicator | fill-left | flat-top | flash | loading-bar | mac-osx | material | minimal
  theme: minimal
```
并且，如果你想使用CDN，那么需要设置:

```[] themes\next\_config.yml
vendors:
  ...
  pace: //cdn.jsdelivr.net/npm/pace-js@1/pace.min.js
  pace_css: //cdn.jsdelivr.net/npm/pace-js@1/themes/blue/pace-theme-minimal.css
```

### 一九年八月二十三日

#### 调整标签页与分类页没有内容的问题

原来只是``hexo new page tags``，之后就没有修改，``hexo\source\tags\index.md``的内容只是：

```[] hexo\source\tags\index.md
---
layout: tag
title: 标签
date: 2019-08-12 14:44:58
---

```

分类页也是如此
```[] hexo\source\categories\index.md
---
layout: category
title: 分类
date: 2019-08-12 14:44:58
---

```

查看[官方文档](https://theme-next.iissnan.com/theme-settings.html#tags-page)之后，发现漏了一步...

正确做法如下：

新建「标签」页面，并在菜单中显示「标签」链接。「标签」页面将展示站点的所有标签，若你的所有文章都未包含标签，此页面将是空的。 底下代码是一篇包含标签的文章的例子：
```
title: 标签测试文章
tags:
  - Testing
  - Another Tag
---
```

请参阅[Hexo的分类与标签](https://hexo.io/zh-cn/docs/front-matter.html#%E5%88%86%E7%B1%BB%E5%92%8C%E6%A0%87%E7%AD%BE)文档，了解如何为文章添加标签或者分类。</p>


{% tabs, 1 %}
<!-- tab 新建页面 -->
在终端窗口下，定位到`Hexo`站点目录下。使用`hexo new page`新建一个页面，命名为`tags`：
```
$ cd your-hexo-site
$ hexo new page tags
```
<!-- endtab -->
<!-- tab 设置页面类型 -->
编辑刚新建的页面，将页面的类型设置为 tags ，主题将自动为这个页面显示标签云。页面内容如下：
```
title: 标签
date: 2014-12-22 12:39:04
type: "tags"
---
```
<!-- endtab -->
<!-- tab 编辑菜单 -->
在菜单中添加链接。编辑<span id="inline-purple">主题配置文件</span>， 添加`tags`到`menu`中，如下:
```
menu:
  home: /
  archives: /archives
  tags: /tags
```
<!-- endtab -->
{% endtabs %}

现在的两个`index.md`文件

```[] hexo\source\tags\index.md
---
title: 标签
date: 2019-08-12 14:44:58
type: "tags"
---
```

分类页也是如此
```[] hexo\source\categories\index.md
---
title: 分类
date: 2019-08-12 14:48:57
type: "categories"
---
```


#### 文章评分

在`next\_config.yml`中搜索`rating`，前往https://widgetpack.com

注册后将Id填入即可，这里的评分方式可以有三种不同的途径，一种默认是登录twitter等社交网站账号才能评分，另一种是根据浏览用户的IP地址评分，还有第三种...，不建议使用第一种

我在这里设置的就是根据IP来的，在widgetpack应用左侧菜单栏中选择`rating`，`setting`，将`Vote via`，设置为`IP address`即可
```
# To get your ID visit https://widgetpack.com
rating:
  enable: true
  id:     # <app_id>
  color:  fc6423
```

也建议在侧栏 > Site > Setting 中勾选 Private 选项(别勾，勾了好像就看不到星星了...)，上面两步勾选后别忘了点击页面右下方的 SAVE SETTING 绿色按钮保存

如果感觉上下留白太多，咋整？浏览器 F12 找元素，调成自己喜欢的值，然后 Copy 到 custom.styl 即可，参考本文 4.2 节。经过上面的配置，默认最下面只会显示 5 颗小星星，简洁但不明了😂，怎么加上文字说明呢？编辑下面这个文件，Ctrl + F 搜索 rating，找到这段，对比我给出的，在绿色这行所示的位置，加上自己想要的说明和样式即可

```[] <!-- 文件位置：~/blog/themes/next/layout/_macro/post.swig -->

        {% if theme.rating.enable %}
          <div class="wp_rating">
+           <div style="color: rgba(0, 0, 0, 0.75); font-size:13px; letter-spacing:3px">(&gt;看完记得五星好评哦亲&lt;)</div>
            <div id="wpac-rating"></div>
          </div>
        {% endif %}
```

#### 评论系统

如果上面你已经注册了`LeanCloud`(没有注册的点[这里](https://leancloud.cn),现在需要实名认证),那么只要把`appid`和`appkey`设置下即可,修改主题配置文件:

```
# 评论系统
# Valine.
# You can get your appid and appkey from https://leancloud.cn
# more info please open https://valine.js.org
valine:
  enable: true
  appid:  #your id
  appkey:  #your key
  notify: false # mail notifier , https://github.com/xCss/Valine/wiki
  verify: false # Verification code
  placeholder: Just go go # comment box placeholder
  avatar: mm # gravatar style
  guest_info: nick,mail,link # custom comment header
  pageSize: 10 # pagination size
```

### 一九年八月二十八日

#### 点击头像回到博客首页

可能是最新版本NexT 7.3的原因，在`/themes/next/layout/_macro/sidebar.swig`中我并没有找到参考其他大佬的可以修改的地方，经过一番查看后

修改文件`hexo\themes\next\layout\_partials\sidebar\site-overview.swig`，增加以下两行代码即可:

```diff hexo\themes\next\layout\_partials\sidebar\site-overview.swig
{%- if theme.avatar.url %}
+ <a href="/">
    <img class="site-author-image" itemprop="image"
      src="{{ url_for( theme.avatar.url | default(theme.images + '/avatar.gif') ) }}"
      alt="{{ author }}">
+ </a>
  {%- endif %}
```
### 二零年一月三十日

#### 修改文章永久链接

设置permalink避免url中出现中文，参考[永久链接](https://hexo.io/zh-cn/docs/permalinks.html)

**方案一**：

安装[hexo-abbrlink](https://github.com/Rozbo/hexo-abbrlink)

``` bash
npm install hexo-abbrlink --save
```

但是有警告
``` bash
$ npm install hexo-abbrlink --save

npm WARN babel-eslint@10.0.2 requires a peer of eslint@>= 4.12.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ hexo-abbrlink@2.0.5
added 39 packages from 24 contributors and audited 16956 packages in 61.105s
found 6 vulnerabilities (4 low, 2 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

意思我缺少了`eslint@>= 4.12.1`等依赖，然后看到这篇[Hexo-abbrlink生成唯一永久文章链接](https://www.jianshu.com/p/c7de2ae59975)

再安装
``` bash
npm install eslint@4.18.2 --save-dev
```

好像不用管这些警告......直接修改如下

``` [_config.yml]
permalink: post/:abbrlink.html
permalink_defaults:

# abbrlink config
abbrlink:
  alg: crc32  # 算法 support crc16(default) and crc32
  rep: hex    # 进制 support dec(default) and hex
```

可选模式：
```
crc16 & hex
crc16 & dec
crc32 & hex
crc32 & dec
```

但是`hexo clean && hexo g && hexo d`报错了，错误表示找不到node-sass模块
``` bash
hexo clean && hexo g && hexo d
ERROR Plugin load failed: hexo-renderer-sass
Error: Cannot find module 'node-sass'

```

解决方法：

``` bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
C:\Users\xx\AppData\Roaming\npm\cnpm -> C:\Users\xx\AppData\Roaming\npm\node_modules\cnpm\bin\cnpm
+ cnpm@6.1.1
added 686 packages from 944 contributors in 136.584s

$ cnpm install node-sass@latest
[npminstall:get] retry GET https://r.npm.taobao.org/lodash after 100ms, retry left 4, error: Error [ResponseTimeoutError]: Response timeout for 60000ms, GET https://r.npm.taobao.org/lodash -1 (connected: 

...

[1/1] scripts.postinstall node-sass@latest finished in 472ms
√ Run 1 scripts
√ All packages installed (179 packages installed from npm registry, used 1m(network 1m), speed 50.48kB/s, json 169(314.75kB), tarball 2.98MB)

```

再次`hexo clean && hexo g && hexo d`

成功

若github出现eslint的安全警告

``` bash
npm update eslint
```

**方案二**：

在_config.yml文件中修改permalink
```
permalink: :year/:month/:day/:category/:id/
permalink_defaults:
```

配置categroy_map
同样在_config.yml中修改category_map, 这里的配置就是将很多category是中文的映射成英文
```
# Category & Tag
default_category: uncatalog
## 为了让中文分组名在网址中显示为英文，我们可以创建分组名映射（category_map）：
category_map:
  Android: android
  Android Studio: android-studio
  C#: Cplusplus
  Python: Python
  SQL: sql
  工具: kits
  微信小程序: wxxcx
  数据库: database
  杂记: petty
  编程练习: programming-practise
tag_map:
```

再看看第一步的配置中`permalink: :year/:month/:day/:category/:id/`其中有`/:id`这个id是自己添加的

因此需要在`scaffolds/post.md`中添加id，如下:
```
---
title: {{ title }}
date: {{ date }}
id: 
tags: 
categories: 
---
```
这就意味着自己每次发布时需要为其制定category和id，id可以自己随便给，同一分类同一天不要重复就好

### 二零年二月七日

#### valine403报错

关于出现Code 403: 访问被api域名白名单拒绝，请检查你的安全域名设置的问题：

我的问题是同时在github和coding上部署了，但是在leancloud的`应用>设置>安全中心>Web安全域名`中只添加了github的域名，因此在coding的那个域名访问时就会出现上述问题，添加域名即可解决问题

#### valine评论邮件提醒

参考：
[NexT主题设置Valine评论系统邮件提醒](https://www.nhtzj.com/3315416634/)
[hexo next主题 valine评论系统 使用第三方邮件提醒](https://blog.csdn.net/qq_21808961/article/details/84639401)

### 站点加速

#### 更改默认Google字体库
访问系统总是会耗费一大部分的时间在加载`google`字体库上, 而且经常加载不成功

方法一: 用国内的CDN库来替代主题中的google字体库, 到`主题配置文件`中设置默认字体库:
```
host: fonts.useso.com
```
方法二: 关掉字体库的引用, 默认加载本地字体库, 到`主题配置文件`设置:
```
font:
  enable: false
```

#### Coding仓库

[Hexo博客之速度优化](https://www.jianshu.com/p/93b63852f0b3)

### 未添加功能
---


#### 自定义样式文件

```
更新于:18-10-18
// Custom styles.
/*******************首页样式*****************************/
// 顶栏宽度
.container .header-inner {
    width: 100%;
}

// .headband {
//     height: 1.5px;
//     background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
// }

// 页面顶部行高
.header {
    line-height: 1.5;
}

// // 页面背景色
// .container {
//     background-color: rgba(0, 0, 0, 0.75);
// }

// 页面留白更改
.header-inner {
    padding-top: 35px;
    padding-bottom: 0px;
}
.posts-expand {
    padding-top: 50px;
}
.posts-expand .post-meta {
    margin: 5px 0px 0px 0px;
}
.post-button {
    margin-top: 0px;
}
// 顶栏宽度
.container .header-inner {
    width: 100%;
}
// 渐变菜带，CSS代码copy自https://githubuniverse.com
// .site-meta {
//     background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
// }

//缩略图指定宽度值显示。
img.img-topic {
    width: 75%;
}


/*******************文章样式*****************************/
// 文章
.post {
    margin-bottom: 50px;
    padding: 45px 36px 36px 36px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    background-color: rgb(255, 255, 255);
}

// 文章标题字体
.posts-expand .post-title {
    font-size: 26px;
    font-weight: 700;
}
// 文章标题动态效果
.posts-expand .post-title-link::before {
    background-image: linear-gradient(90deg, #a166ab 0%, #ef4e7b 25%, #f37055 50%, #ef4e7b 75%, #a166ab 100%);
}
// 文章元数据（meta）留白更改
.posts-expand .post-meta {
    margin: 10px 0px 20px 0px;
}
// 文章的描述description
.posts-expand .post-meta .post-description {
    font-style: italic;
    font-size: 14px;
    margin-top: 30px;
    margin-bottom: 0px;
    color: #666;
}
// [Read More]按钮样式
.post-button .btn {
    color: #555 !important;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    font-size: 15px;
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    border: none !important;
    transition-property: unset;
    padding: 0px 15px;
}

.post-button .btn:hover {
    color: rgb(255, 255, 255) !important;
    border-radius: 3px;
    font-size: 15px;
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    background-image: linear-gradient(90deg, #a166ab 0%, #ef4e7b 25%, #f37055 50%, #ef4e7b 75%, #a166ab 100%);
}
// 去除在页面文章之间的分割线
.posts-expand .post-eof {
    margin: 0px;
    background-color: rgba(255, 255, 255, 0);
}
// 去除页面底部页码上面的横线
.pagination {
    border: none;
    margin: 0px;
}

// 文章内标题样式（左边的竖线）
.post-body h2, h3, h4, h5, h6 {
    border-left: 4px solid rgb(161, 102, 171);
    margin-left: -36px;
    padding-left: 32px;
}
// 去掉图片边框
.posts-expand .post-body img {
    border: none;
    padding: 0px;
}
// 文章``代码块的自定义样式
code {
    margin: 0px 3px;
    border: 1px solid #999;
}

// 文章```代码块顶部样式
.highlight figcaption {
    margin: 0em;
    padding: 0.5em;
    background: #eee;
    border-bottom: 1px solid #e9e9e9;
}
.highlight figcaption a {
    color: rgb(80, 115, 184);
}
// 文章```代码块diff样式
pre .addition {
    background: #e6ffed;
}
pre .deletion {
    background: #ffeef0;
}

//文章内链接文本样式
.post-body p a{
  color: #0593d3;
  border-bottom: none;
  border-bottom: 1px solid #0593d3;
  &:hover {
    color: #fc6423;
    border-bottom: none;
    border-bottom: 1px solid #fc6423;
  }
}

// 自定义的文章摘要图片样式
img.img-topic {
    width: 100%;
}

/*************************侧栏样式****************************/
// 自定义的侧栏时间样式
#days {
    display: block;
    color: rgb(7, 179, 155);
    font-size: 13px;
    margin-top: 15px;
}
// 右下角侧栏按钮样式
.sidebar-toggle {
    right: 10px;
    bottom: 43px;
    background-color: rgba(247, 149, 51, 0.75);
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
}
.page-post-detail .sidebar-toggle-line {
    background: rgb(7, 179, 155);
}
// 右下角返回顶部按钮样式
.back-to-top {
    line-height: 1.5;
    right: 10px;
    padding-right: 5px;
    padding-left: 5px;
    padding-top: 2.5px;
    padding-bottom: 2.5px;
    background-color: rgba(247, 149, 51, 0.75);
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
}

// 侧栏
.sidebar {
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.75);
}
.sidebar-inner {
    margin-top: 30px;
}
// 侧栏顶部文字
.sidebar-nav li {
    font-size: 15px;
    font-weight: bold;
    color: rgb(7, 179, 155);
}
.sidebar-nav li:hover {
    color: rgb(161, 102, 171);
}
.sidebar-nav .sidebar-nav-active {
    color: rgb(7, 179, 155);
    border-bottom-color: rgb(161, 102, 171);
    border-bottom-width: 1.5px;
}
.sidebar-nav .sidebar-nav-active:hover {
    color: rgb(7, 179, 155);
}
// 侧栏站点作者名
.site-author-name {
    display: none;
}
// 侧栏站点描述
.site-description {
    letter-spacing: 5px;
    font-size: 15px;
    font-weight: bold;
    margin-top: 15px;
    margin-left: 13px;
    color: rgb(243, 112, 85);
}
// 侧栏站点文章、分类、标签
.site-state {
    line-height: 1.3;
    margin-left: 12px;
}
.site-state-item {
    padding: 0px 15px;
    border-left: 1.5px solid rgb(161, 102, 171);
}
// 侧栏RSS按钮样式
.feed-link {
    margin-top: 15px;
    margin-left: 7px;
}
.feed-link a {
    color: rgb(255, 255, 255);
    border: 1px solid rgb(158, 158, 158) !important;
    border-radius: 15px;
}
.feed-link a:hover {
    background-color: rgb(161, 102, 171);
}
.feed-link a i {
    color: rgb(255, 255, 255);
}
// 侧栏社交链接
.links-of-author {
    margin-top: 0px;
}
// 侧栏友链标题
.links-of-blogroll-title {
    margin-bottom: 10px;
    margin-top: 15px;
    color: rgba(7, 179, 155, 0.75);
    margin-left: 6px;
    font-size: 15px;
    font-weight: bold;
}
// 侧栏超链接样式（友链的样式）
.sidebar a {
    color: #ccc;
    border-bottom: none;
}
.sidebar a:hover {
    color: rgb(255, 255, 255);
}
// 自定义的侧栏时间样式
#days {
    display: block;
    color: rgb(7, 179, 155);
    font-size: 13px;
    margin-top: 15px;
}
// 侧栏目录链接样式
.post-toc ol a {
    color: rgb(7, 179, 155);
    border-bottom: 1px solid rgb(96, 125, 139);
}
.post-toc ol a:hover {
    color: rgb(161, 102, 171);
    border-bottom-color: rgb(161, 102, 171);
}
// 侧栏目录链接样式之当前目录
.post-toc .nav .active > a {
    color: rgb(161, 102, 171);
    border-bottom-color: rgb(161, 102, 171);
}
.post-toc .nav .active > a:hover {
    color: rgb(161, 102, 171);
    border-bottom-color: rgb(161, 102, 171);
}
/* 修侧栏目录bug，如果主题配置文件_config.yml的toc是wrap: true */
.post-toc ol {
    padding: 0px 10px 5px 10px;
}
/* 侧栏目录默认全展开，已注释
.post-toc .nav .nav-child {
    display: block;
}
*/

/************************移动端样式*******************************/
@media (max-width: 1023px) {
    .container {
        background-color: rgba(0, 0, 0, 0);
    }
    .sidebar {
        // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .feed-link {
        display: none !important;
    }
}
@media (max-width: 767px) {
    .main {
        padding-bottom: 120px;
    }
    .posts-expand {
        margin: 0px;
        padding-top: 10px;
    }
    .posts-expand .post-title {
        font-size: 22px;
    }
    .posts-expand .post-meta {
        font-size: 10px;
    }
    .post {
        margin-bottom: 30px !important;
        padding: 20px 15px 15px 15px !important;
    }
    .post-body h2, h3, h4, h5, h6 {
        margin-left: -15px;
        padding-left: 11px;
    }
    .posts-expand .post-tags {
        margin-top: 10px;
    }
    .post-widgets {
        margin-top: 10px;
    }
    .comments {
        margin: 40px 0px 40px 0px !important;
    }
    .footer {
        // box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
    }
}
.sidebar-active #sidebar-dimmer {
    opacity: 0;
}
// 移动端左上角菜单按钮
.site-nav-toggle {
    top: 35px;
    left: 91px;
    // background-color: #222;
}
.btn-bar {
    background-color: rgb(255, 255, 255);
}
// 移动端菜单
@media (max-width: 767px) {
    .menu {
        text-align: center;
        // box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    }
    .site-nav {
        top: initial;
        background-color: rgba(255, 255, 255, 0.75);
        border-top: none;
        border-bottom: none;
        position: relative;
        z-index: 1024;
    }
}
//移动端顶部
@media (max-width: 767px) {
    .site-title {
        font-size: 28px !important;
        letter-spacing: 0px !important;
    }
    .site-subtitle{
        letter-spacing: 0px !important;
        padding-bottom: 0px !important;
    }
    .site-meta {
        // box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    }
    .menu .menu-item {
        margin: 0px 10px !important;
    }
}
```


#### 添加背景图片
通过``jquery-backstretch``，具体操作呢，编辑文件``/themes/next/layout/_layout.swig``：

```
+  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"></script>;
+  <script>
+  $("body").backstretch("https://背景图.jpg");
+  </script>
</body>
```
加入到文件最后面前面即可。

#### 二维码打赏

得到二维码图片资源后，读者们可将二维码图片放到NexT根目录/source/images/文件夹下。
开启打赏功能
打开主题配置文件，搜索reward关键词，添加打赏的配置信息

```
# Reward
# If true, reward would be displayed in every article by default.
# And you can show or hide one article specially through add page variable `reward: true/false`.
reward:
  enable: true  //默认是false，改为true
  comment: 您的支持是对我最大的鼓励
  wechatpay: /images/wechatpay.jpg  #图片链接或图片相对路径
  alipay: /images/alipay.jpg      #图片链接或图片相对路径
```


#### 添加自定义页面[友链] 未添加

设置菜单项的显示中文文本，打开themes/next/languages/zh-CN.yml文件,搜索 menu 关键字，修改对应中文或者新增
```
menu:
  home: 首页
  archives: 归档
  categories: 分类
  tags: 标签
  about: 关于
  search: 搜索
  # schedule: 日程表
  # sitemap: 站点地图
  # commonweal: 公益404
  # 新增menu
  links: 友链 # 新增该选项表示新增“友链”菜单
```

#### 新增links菜单

在主题配置文件，搜索menu，新增`links: /links/ || link`

```
# 菜单示例配置
menu:
  home: / || home
  reading: /reading/ || book
  archives: /archives/ || archive
  categories: /categories/ || th
  #tags: /tags/ || tags
  about: /about/ || user
  links: /links/ || link
```

hexo根目录下，执行以下命令，新建友链页面
```
hexo new page links
```

修改站点目录下source/links的 index.md 文件
```
---
title: 友链
tags: links
categories: links
comments: false
---
```

#### 添加最近文章栏目

修改`themes/next/layout/_macro/sidebar.swig` 。找到`theme.social`板块代码，在该板块最后的`endif`后隔一行添加如下代码。

```
{# recent posts #}
{% if theme.recent_posts %}
  <div class="links-of-blogroll motion-element {{ "links-of-blogroll-" + theme.recent_posts_layout  }}">
    <div class="links-of-blogroll-title">
      <!-- modify icon to fire by szw -->
      <i class="fa fa-history fa-{{ theme.recent_posts_icon | lower }}" aria-hidden="true"></i>
      {{ theme.recent_posts_title }}
    </div>
    <ul class="links-of-blogroll-list">
      {% set posts = site.posts.sort('-date') %}
      {% for post in posts.slice('0', '5') %}
        <li class="recent_posts_li">
          <a href="{{ url_for(post.path) }}" title="{{ post.title }}" target="_blank">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </div>
{% endif %}
```

编辑`themes/next/source/css/_common/components/sidebar/sidebar-blogroll.styl`

```
li.recent_posts_li {
    text-align: cengter;
    display: block;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

主题配置文件`themes/next/_config.yml`,添加如下代码

```
recent_posts_title: 近期文章
recent_posts_layout: block
recent_posts: true
```

#### 文章置顶功能

移除默认安装的插件：
```
npm uninstall hexo-generator-index --save
```

安装新插件:
```
npm install hexo-generator-index-pin-top --save
```
最后编辑有这需求的相关文章时，在Front-matter（文件最上方以—分隔的区域）加上一行：
```
top: true
```
如果你置顶了多篇，怎么控制顺序呢？设置top的值（大的在前面），比如：
```
# Post a.md
title: a
top: 1

# Post b.md
title: b
top: 10
```
文章 b 便会显示在文章 a 的前面。

#### 添加 TopX 页面
[超深度优化-5.8小节](https://io-oi.me/tech/hexo-next-optimization.html)

### 参考
---

直接访问不了的网站，maybe......需要翻墙哦

#### 翻墙镜像

[https://github.com/googlehosts/hosts](https://github.com/googlehosts/hosts)

#### 近期学习篇

[NexT主题个性定制与深度优化-点击特效 √](http://www.zhuimeng.online/next)
[Hexo 搭建个人博客系列：主题美化篇](http://yearito.cn/posts/hexo-theme-beautify.html)
[Hexo 搭建个人博客系列：进阶设置篇-点击特效等](http://yearito.cn/posts/hexo-advanced-settings.html)
[theme-next!Hexo网站的一次华丽升级](https://moweide.com/2017/08/27/hexo_next_started/)
[Hexo NexT 主题6.x版本的使用配置与美化](https://xian6ge.cn/posts/5b8c41e7/)
[hexo next主题优化，打造个人精致网站](http://eternalzttz.com/hexo-next.html)
[基于Hexo搭建个人博客——进阶篇(从入门到入土)](https://yangbingdong.com/2017/build-blog-hexo-advanced/)
[打造个性超赞博客 Hexo + NexT + GitHub Pages 的超深度优化](https://io-oi.me/tech/hexo-next-optimization.html)
[hexo的next主题个性化教程:打造炫酷网站](http://shenzekun.cn/hexo%E7%9A%84next%E4%B8%BB%E9%A2%98%E4%B8%AA%E6%80%A7%E5%8C%96%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B.html)
[hexo博客框架环境搭建，并使用next主题打造精美的个人博客网站](https://www.qcmoke.site/blog/hexo_next.html)
[Hexo+NexT 打造一个炫酷博客](http://xyua.top/Hexo/hexo_next_blog.html)
[个人主页与 Hexo NexT 博客搭建记录](https://blog.dlzhang.com/posts/32005d86/)
[hexo博客nexT主题美化](https://blog.qizhenjun.com/f669038/)

#### 环境搭建篇

[GitHub+Hexo 搭建个人网站详细教程-知乎](https://zhuanlan.zhihu.com/p/26625249)
[七牛云](https://portal.qiniu.com/create)
[使用 Hexo 搭建 GitHub Page 博客(二)--使用 GitHub 分支保存 Hexo 环境和博文](https://blog.csdn.net/gatieme/article/details/82317704)
[Halo-一款现代化的个人独立博客系统](https://halo.run/)
[如何用Github的gh-pages分支展示自己的项目](https://cloud.tencent.com/developer/article/1391619)
[黑猴子的家：GitHub 之 gh-pages 新手入门](https://www.jianshu.com/p/a2b647f4c999)
[使用Github的gh-pages分支展示一个页面](https://www.cnblogs.com/dear_diary/p/6555011.html)
[使用七牛云图床并实现快速贴图](http://molock.cn/posts/46711/)
[七牛云图床和Markdown使用](https://www.cnblogs.com/ssgeek/p/10854839.html)

#### 个性博客篇

[https://theme-next.org/](https://theme-next.org/)
[学而时习之的博客](http://www.devzhao.com/)
[https://io-oi.me](https://io-oi.me)
[https://blog.dlzhang.com-好人](https://blog.dlzhang.com/)
[https://leaferx.online/](https://leaferx.online/)
[chloneda的博客](https://chloneda.github.io/)
[http://xyua.top](http://xyua.top)
[https://moweide.com/](https://moweide.com/)
[eyhn的博客](https://eyhn.in/)
[https://yangbingdong.com](https://yangbingdong.com)
[cduyzh的博客](http://www.cduyzh.com)
[zhuimeng的博客](http://www.zhuimeng.online)
[shuyelife的博客](https://shuyelife.github.io)
[https://www.qcmoke.site/](https://www.qcmoke.site/)
[http://yearito.cn/](http://yearito.cn/)
[http://eternalzttz.com/](http://eternalzttz.com/)
[http://shenzekun.cn/](http://shenzekun.cn/)
[https://11.tt/](https://11.tt/)
[博客-旋转立方体](https://www.cnblogs.com/php-linux/p/8416122.html)

#### 主题优化篇

[NexT官方主题配置](http://theme-next.iissnan.com/theme-settings.html)
[打造个性超赞博客 Hexo + NexT + GitHub Pages 的超深度优化](https://io-oi.me/tech/hexo-next-optimization.html)
[Github+Hexo一站式部署个人博客](https://www.jianshu.com/p/85192626faf3)
[Hexo+NexT 打造一个炫酷博客--博客杂言非语](http://xyua.top/Hexo/hexo_next_blog.html)
[Hexo博客NexT主题美化之新增看板娘(能说话、能换装)](https://www.jianshu.com/p/89440678ee3c)
[live2d-plugin-2.0 博客已迁移](https://huaji8.top/post/live2d-plugin-2.0/)
[基于Hexo搭建个人博客——进阶篇(从入门到入土)](https://yangbingdong.com/2017/build-blog-hexo-advanced/)
[hexo-helper-live2d中文文档](https://github.com/EYHN/hexo-helper-live2d/blob/master/README.zh-CN.md)
[L2Dwidget用户手册](https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html#instance-method-init)
[2017年最新基于hexo搭建个人免费博客——自定义页面样式一
](http://www.cduyzh.com/hexo-settings-3/)
[NexT主题个性定制与深度优化-爆炸特效](http://www.zhuimeng.online/next)
[Hexo：NexT主题优化之路](http://www.dadroid.cn/posts/dc01d1e2/)
[这应该是最全的hexo博客搭建以及next美化教程](https://me.idealli.com/post/e8d13fc.html)
[畅玩Hexo(2)：NexT主题](https://www.zypnet.cn/7d6b/)
[Hexo + GitHub (Coding) Pages 搭建博客](https://github.com/HarleyWang93/learning/issues/26)
[“为next主题的主页文章添加阴影效果”](https://shuyelife.github.io/post/%E2%80%9C%E4%B8%BAnext%E4%B8%BB%E9%A2%98%E7%9A%84%E4%B8%BB%E9%A1%B5%E6%96%87%E7%AB%A0%E6%B7%BB%E5%8A%A0%E9%98%B4%E5%BD%B1%E6%95%88%E6%9E%9C%E2%80%9D/)
[【搜索优化】Hexo-next百度和谷歌搜索优化](http://www.ehcoo.com/seo.html)
[hexo高阶教程：想让你的博客被更多的人在搜索引擎中搜到吗？](https://blog.csdn.net/sunshine940326/article/details/70936988)
[Hexo博客-NexT主题：使用leancloud进行页面访客统计](https://lfwen.site/2016/05/31/add-count-for-hexo-next/)
[Hexo+Next主题优化-知乎](https://zhuanlan.zhihu.com/p/30836436)
[【转】Blog摘要配图](http://wellliu.com/2016/12/30/%E3%80%90%E8%BD%AC%E3%80%91Blog%E6%91%98%E8%A6%81%E9%85%8D%E5%9B%BE/)
[利用 Hexo + Github Pages 搭建博客并优化 Next 主题教程](https://michael728.github.io/2019/05/19/hexo-blog-full-note/)
[大哥的NexT最新7.3版个性化样式源码](https://github.com/lei2rock/blog/tree/src/source)
[hexo小技巧-首页显示文章摘要及图片](https://ryderchan.github.io/2017/01/26/hexo%E5%B0%8F%E6%8A%80%E5%B7%A7-%E9%A6%96%E9%A1%B5%E6%98%BE%E7%A4%BA%E6%96%87%E7%AB%A0%E6%91%98%E8%A6%81%E5%8F%8A%E5%9B%BE%E7%89%87/)
[进度条样式](http://github.hubspot.com/pace/docs/welcome/)

#### 问题解决篇

[NexT7.3最新自定义样式文件示例](https://github.com/lei2rock/blog)
[NexT主题升级](https://github.com/iissnan/hexo-theme-next/issues/328)
[https://github.com/theme-next/hexo-theme-next/releases](https://github.com/theme-next/hexo-theme-next/releases)
[https://github.com/theme-next/hexo-theme-next/pull/868](https://github.com/theme-next/hexo-theme-next/pull/868)
[https://theme-next.org/](https://theme-next.org/)
[https://github.com/theme-next/hexo-theme-next/issues/982](https://github.com/theme-next/hexo-theme-next/issues/982)
[https://github.com/theme-next/hexo-theme-next/issues/1021帖子在线编辑](https://github.com/theme-next/hexo-theme-next/issues/1021)
[教你顺滑升级6.x版本的NexT主题](https://11.tt/posts/2018/how-to-update-hexo-theme-next/)
[给你的hexo文章列表加上一个固定高度的封面](http://www.devzhao.com/post/29955a8e.html)

[^1]: 注脚测试