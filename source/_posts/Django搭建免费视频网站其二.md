---
title: Django搭建免费视频网站其二
tags:
  - django
  - 网站
comments: true
categories: Django
description: 易事，难事，风雨事，江湖事，王朝事，天下事，都不过一剑的事
abbrlink: b15ef11a
date: 2020-02-05 22:27:25
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-02-06_5.jpg">

<!-- more -->

## 实现

[代码传送门](https://github.com/joelYing/LVideo)

### 模板

#### 自定义tag

这是在练习Django时做的博客项目中用到的，在这里记录，目的是为了把评论功能做成一个即插即用的组件

用到了Django的template tag（自定义标签）的接口，使得在任何需要添加评论的地方，只要使用

```
{% comment_block request.path %}
```

即可，之所以叫comment_block，是因为comment是Django的内置tag，用来做大块代码的注释，类似for循环和if判断，这些都是内置的，所以我们需要自定义一个tag

在commentAPP下新建templatetags目录，同时新增`__init__.py`与`comment_block.py`文件

在`comment_block.py`中编写自定义标签的代码：
``` python
from django import template

from comment.forms import CommentForm
from comment.models import Comment


register = template.Library()


@register.inclusion_tag('comment/block.html')
def comment_block(target):
    return {
        'target': target,               # 评论目标博文的url
        'comment_form': CommentForm(),  # 评论表单
        'comment_list': Comment.get_by_target(target),  # 根据博文路径获取的博文下的评论
    }
```

方法会返回以上的内容，包括target(目标文章)，comment_form(评论表单的样式)，comment_list(根据target得到的评论的list)，去渲染 comment/block.html 模板文件

``` html comment/block.html
<hr/>
<div class="comment">
    <form class="form-group" action="/comment/" method="post">
        {% csrf_token %}
        <input name="target" type="hidden" value="{{ target }}">
        {{ comment_form }}
        <input type="submit" value="写好了">
    </form>

    <!-- 评论列表 -->
    <ul class="list-group">
        {% for comment in comment_list %}
        <li class="list-group-item">
            <div class="nickname">
                <a href="{{ comment.website }}">{{ comment.nickname }}</a>
                <span>{{ comment.created_time }}</span>
            </div>
            <div class="comment-content">
                <!-- 关闭Django模板自动转码功能 ，如不关怎会出现页面上的评论内容是这样的：<p>hahahahahhahahahahahhaha</p> -->
                {% autoescape off %}
                {{ comment.content }}
                {% endautoescape %}
            </div>
        </li>
        {% endfor %}
    </ul>
</div>
```

将value的值`target`渲染好后，带上comment_form参数，文件中的form最后发送一个post请求到`/comment/`的路由，根据url.py中的路由规则，请求得到的闭包发送给CommentView

```
class CommentView(TemplateView):
    http_method_names = ['post']
    template_name = 'comment/result.html'

    def post(self, request, *args, **kwargs):
        comment_form = CommentForm(request.POST)
        target = request.POST.get('target')

        if comment_form.is_valid():
            instance = comment_form.save(commit=False)
            instance.target = target
            instance.save()
            succeed = True
            return redirect(target)
        else:
            succeed = False

        context = {
            'succeed': succeed,
            'form': comment_form,
            'target': target,
        }
        return self.render_to_response(context)
```

在CommentView中的post方法接收这些参数，验证comment_form，并保存数据到instance，存到数据库中，成功后返回

在博文详情页面加上评论功能：

``` html detail.html
{% extends "./base.html" %}
<!-- 加载自定义的标签 -->
{% load comment_block %}

...

{% block main %}
{% if post %}
<h1>{{ post.title }}</h1>
<div>
    <span>分类：<a href="{% url 'category-list' post.category_id %}">{{ post.category.name }}</a></span>
    <span>作者：<a href="{% url 'author' post.owner.id %}">{{ post.owner.username }}</a></span>
</div>
<hr/>
<p>
    {% autoescape off %}
    {{ post.content_html }}
    {% endautoescape %}
</p>
{% endif %}

<!-- 使用标签，传入参数request.path，即target -->
{% comment_block request.path %}
{% endblock %}
```

Django模板中可以使用`request`参数，`request.path`就是当前博文页面的url，将其作为参数传递给自定义的`comment_block`标签的方法，此时`def comment_block(target)`中传入的target参数就是`request.path`

评论表单提交的流程：
```
1. 在文章页面下方的表单中(detail.html)页面中，加载{% load comment_block %} comment_block标签
2. 引用的时候，{% comment_block request.path %}，传入参数request.path，即当前文章所在的url
3. 在comment_block.py中定义了方法，需要传入的参数为target，这样做就使得 target=request.path
```

{% blockquote Django企业开发实战, 胡阳 %}
用户填写评论，提交表单 -> CommentForm处理表单 -> 验证通过 -> 保存数据到instance -> instance.save方法把数据保存到数据库 -> 用户刷新页面 -> 通过comment_block模板自定义标签获取并展示数据
{% endblockquote %}

#### spaceless

```
{% spaceless %}
```

标签的作用是 去除Django模板因使用for循环而产生的很多空行

#### autoescape

作用是关闭Django模板的自动转码功能

``` html
{% autoescape off %}
{{ post.content_html }}
{% endautoescape %}
```

#### forloop

[django forloop添加序号和增加一对多数据示例](https://www.cnblogs.com/chenkeven/articles/9340961.html)

#### title属性

``` html
<span class="rank_text_name" title="{{ video.name }}">{{ video.name }}</span></a>
```
为`span`添加`title`属性，鼠标移到元素上时显示title中的内容

避免用户看不到某些视频名称过长而因truncate缩减，导致看不见视频全称的情况

#### remark

[参考这篇](https://www.cnblogs.com/Jack1ee/p/5426757.html)

具体内容：
```
1、首先当然是要插入一张图片啦，
代码如下：<a href="#" target="_blank"><img src="images/13.png" width="240" heigth="240"></a>
图片路径自己定义。

2、定义一个层在图片上。这里要用到定位。position。
<div class="con_img"><img src=""><span class="ms"></span></div>
.con_img{position: relative; width: 240px; height: 240px;}
.ms{position: absolute; bottom: 0;left: 0; width: 240px; height: 25px; background: #000;}
```

修改如下

``` html 
<div class="cover_img_span3">
    <a href="{% url 'video-detail' video.id %}">
    <span class="cover_remark" title="{{ video.remark }}">{{ video.remark }}</span>
    <img width="180px" height="236px" class="type-list-card-img" src="{{ video.cover_url }}" title="{{ video.name }}">
    </a>
</div>
```

为视频封面右下角添加remark备注
```
# css部分
.cover_img_span3 {
    position: relative;
    width: 194px;
    height: 250px;
}

span.cover_remark {
    font-weight: normal;
    font-size: 0.9em;
    vertical-align: middle;
    text-align: right;
    background-color: rgba(0,0,0,0.65);
    color: #ffffff;
    /* border: 0.5px solid rgba(0.1,0.1,0.1,0.5); */
    padding: 1px 5px;
    border-radius: 2.5px;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    bottom: 0;
    right: 0;
}
```

#### 解析接口

解析接口页面模板主要部分：

``` html
{% extends "video/base.html" %}

...

{% block main %}
    <div class="container">
    <div class="vip-logo">VIP视频在线解析</div>
    <div class="parse-search">
        <form id="str-post" class="input-group" method="post" action='{% url 'vip-parse' %}'>
            {% csrf_token %}
            <input type="text" id="input-url" class="form-control" placeholder="请输入播放地址后解析,支持爱奇艺,优酷,土豆等VIP视频播放地址">
            <div class="input-group-append">
                <label class="path" style="width: 200px">
                  <select class="form-control" id="p-selected">
                      {% for parse_interface in parse_interfaces %}
                          <option value="{{ parse_interface.parse_url }}">{{ parse_interface.name }}</option>
                      {% endfor %}
                  </select>
                </label>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>
        </form>
        <iframe  src="http://image.joelyings.com/2020-01-11-8.gif" height="548px" width="100%" id="player" scrolling="no" frameborder="0"></iframe>
        <script type="text/javascript">
            $("#str-post").submit(function () {
            $("html,body").animate({
                scrollTop: $(".parse-search").offset().top
            }, 200);
            $('#player').attr("src", document.getElementById("p-selected").value + $("#input-url").val());
            $('#player').attr("style","height: 548px!important;");
            return false;
        })
        </script>
        
    </div>
    </div>
{% endblock %}

```

添加了一个select下拉按钮，里面包含从数据库取出来的解析接口url及名称：

``` html
<select class="form-control" id="p-selected">
  {% for parse_interface in parse_interfaces %}
      <option value="{{ parse_interface.parse_url }}">{{ parse_interface.name }}</option>
  {% endfor %}
</select>
```

为提交解析的按钮`Submit`添加[jQuery事件](https://www.w3school.com.cn/jquery/event_submit.asp)，将接口与待解析的链接[拼接](http://tool.liumingye.cn/video/js/video.js?0122)起来

参考：
``` javascript
$("#str-post").submit(function () {
    $("html,body").animate({
        scrollTop: $(".search").offset().top
    }, 200);
    $('#player').attr("src", $(".am-selected").find('.am-checked').data('value') + $("#str-post").serializeArray()[0].value);
    $('#player').attr("style","height: 548px!important;");
    return false;
})
```

修改后：

``` html
<form id="str-post" class="input-group" method="post" action='{% url 'vip-parse' %}'>
    ...
    <button type="submit" class="btn btn-primary mb-2">Submit</button>
    ...

<iframe  src="http://image.joelyings.com/2020-01-11-8.gif" height="548px" width="100%" id="player" scrolling="no" frameborder="0"></iframe>
```

``` javascript
<script type="text/javascript">
    // 为id为str-post的表单添加
    $("#str-post").submit(function () {
    $("html,body").animate({
        scrollTop: $(".parse-search").offset().top
    }, 200);
    // 为iframe修改播放源
    $('#player').attr("src", document.getElementById("p-selected").value + $("#input-url").val());
    $('#player').attr("style","height: 548px!important;");
    return false;
})
</script>
```

### 模型

#### datetimefield

Django中模型的时间字段定义为datetimefield时，爬虫向这个字段插入同样时间格式的str数据时，可以成功

[如何在Django中添加没有微秒的 DateTimeField 属性详解](https://www.jb51.net/article/155630.htm)

### 视图

#### 多个视频类型共用一个视图逻辑

每个分类的`更多`页面通过获取请求的url路径最后部分，根据models中对应的类型，通过一个view进行获取不同类型的queryset，这样就不用每一个`更多`页面都写一个模板，可以共用一个模板，只是传入的queryset会根据请求路径的不同而不同

``` python
# 模型部分
class VideoInfo(models.Model):
    TYPE_DM, TYPE_MV, TYPE_TV, TYPE_ZY, TYPE_OT = '动漫', '电影', '电视剧', '综艺', '其他'
    V_TYPE_LIST = {
        'dm': TYPE_DM,
        'mv': TYPE_MV,
        'tv': TYPE_TV,
        'zy': TYPE_ZY,
        'ot': TYPE_OT
    }
    ...

# '更多页面'视图
class MoreListView(CommonListView):
    paginate_by = 10
    template_name = 'video/more_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context.update({
            # 传入导航菜单对应视频类型的菜单名称
            'button': VideoInfo.V_TYPE_LIST[str(self.request.path).replace('/', '')],
            'links': Links.get_links(),
        })
        return context

    def get_queryset(self):
        # 获取请求的路径
        request_path = str(self.request.path).replace('/', '')
        # 根据模型层定义的字典获取对应的视频类型
        v_type = VideoInfo.V_TYPE_LIST[request_path]
        # 通过模型层的方法获取对应视频类型的信息queryset，并去模板中渲染
        queryset = VideoInfo.get_type_video_list(v_type)
        return queryset

```



### 样式

#### bootstrap

[text-utilities](https://v4.bootcss.com/docs/4.3/content/typography/#text-utilities)

对于较长的文本内容，可以通过添加 .text-truncate 类将文本截断并添加省略号。 元素必须是 display: inline-block 或 display: block 类型

[inline](https://v4.bootcss.com/docs/4.3/content/typography/#inline)

在同一行  Remove a list’s bullets and apply some light margin with a combination of two classes, .list-inline and .list-inline-item.

[文本对齐](https://v4.bootcss.com/docs/4.3/utilities/text/#%E6%96%87%E6%9C%AC%E5%AF%B9%E9%BD%90)

使用文本对齐类可以轻松地将文本重新对齐到组件

[间距](https://v4.bootcss.com/docs/4.3/utilities/spacing/)

控制视频封面间距

[bootstrap导航条](https://www.jianshu.com/p/37f6622adb2d)

也就是ul标签中所有a标签的href属性都失效了，后来也是一顿搜索，发现，bootstrap把href属性当id处理，只链接到当前页面的位置，而外部跳转链接被屏蔽


### 管理

#### 在两个site中注册APP

```
@admin.register(Post, site=custom_site) # custom_site
@admin.register(Post)                   # 默认的site
class PostAdmin(BaseOwnerAdmin):
    ...
```


### 其他功能

#### 分页

[Django 分页 , 只显示最近的几页( 只显示靠近的几页 )](https://blog.csdn.net/LingHuChong20/article/details/103017114)

``` html
{% block paginate %}
{% if is_paginated %}
    <nav aria-label="Page navigation ">
        <ul class="pagination  justify-content-center">
            {% if page_obj.has_previous %}
                {% if page_obj.number >= max_left_item_count|add:max_left_item_count %}
                    <li class="page-item"><a class="page-link" href="?page=1">&laquo;&laquo;</a></li>
                {% endif %}
                <li  class="page-item"><a class="page-link" href="?page={{ page_obj.previous_page_number }}">&laquo;</a></li>
            {% else %}
                <li class="page-item"><a class="page-link" href="?page=1">&laquo;&laquo;</a></li>
            {% endif %}

            {% for i in page_obj.paginator.page_range %}
                {% if page_obj.number == i %}
                    <li class="page-item active">
                        <span  class="page-link" >{{ i }} <span  class="sr-only page-link">(current)</span></span>
                    </li>
                {%  elif  page_obj.number|add:max_left_item_count >= i and  i|add:max_left_item_count  >= page_obj.number  %}
                    <li  class="page-item"><a class="page-link" href="?page={{ i }}">{{ i }}</a></li>
                {% endif %}
            {% endfor %}

            {% if page_obj.has_next %}
                <li  class=" page-item"><a class="page-link" href="?page={{ page_obj.next_page_number }}">&raquo;</a></li>
                {% if  page_obj.paginator.num_pages >  page_obj.number|add:max_left_item_count  %}
                    <li  class=" page-item"><a class="page-link" href="?page={{ page_obj.paginator.num_pages }}">&raquo;&raquo;</a></li>
                {% endif %}
            {% else %}
                <li  class=" page-item"><a class="page-link" href="?page={{ page_obj.paginator.num_pages }}">&raquo;&raquo;</a></li>
            {% endif %}
        </ul>
    </nav>
{% endif %}
{% endblock %}
```

#### Scrapy连接池

连接池的作用：

异步调用`do_insert`函数，dbpool会选择连接池中的一个连接对象在独立线程中调用`insert_db`，其中参数item会被传给`do_insert`的第二个参数，传给`do_insert`的第一个参数是一个Transaction对象，其接口与Cursor对象类似，可以调用execute方法执行SQL语句，`do_insert`执行后，连接对象会自动调用commit方法

#### pv/uv

Django的models中添加了pv\uv这两个字段，默认为1，但是运行爬虫时，若没有数据存入这两个字段则会报错，因为其默认是不为空的，将数据库中原本的默认值改为null倒是可以继续爬虫了；

而为爬虫添加pv uv默认为1的值，存入数据库也没问题，后续两个值的增加也不会对更新语句有反应


### Bug

<div class="note danger no-icon"><p>Reverse for 'xxx' with arguments '('',)' not found. 1 pattern(s) tried: ['Category/(?P<category_id>\d+)$']</p></div>

主要原因：

urls里面设置参数的匹配正则是`'category/<int:category_id>'`，在html文件中做反向解析的时候又没有参数传递过去

url配置：

```
path('category/<int:category_id>', CategoryView.as_view(), name='category-list'),
```

最后发现是在具体的list.html以及detail.html的文件中给分类标签，虽然加上了
```
{% url 'category-list' cate.id %}
```
但是cate并不是循环中的值，没有类似以下循环
```
{% for cate in navs %}
...
{% endfor %}
```

---

<div class="note danger no-icon"><p>GET /static/css/bootstrap.css HTTP/1.1 404 1789</p></div>

原因：

没有加载static中的css资源，css路径：myblog/themes/bootstrap/static/css/bootstrap.css

正确操作：

THEME的值是前面settings.py中定义的'bootstrap'，将`templates`改为`static`
```
STATIC_URL = '/static/'
STATIC_ROOT = 'tmp/static'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'themes', THEME, 'static')
]
```
之前是templates 所以找不到static文件夹

然后在模板中加上

``` html
{% load static %}
<link rel="stylesheet" type="text/css" href="{% static 'css/bootstrap.css' %}">
```

即可

---

<div class="note danger no-icon"><p>AssertionError: Cannot filter a query once a slice has been taken</p></div>

问题：获取切片后的数据集无法再进行筛选查询！
``` python
VideoDetailView(DetailView):
    queryset = VideoInfo.latest_video()
    ...
    pk_url_kwarg = 'video_id'
```

`latest_video()`方法部分如下：
``` python
queryset = cls.objects.all().order_by('-update_time')[:300]  
```

`[:300]`进行了切片，相当于已经经过了一次filter，而重写的`pk_url_kwarg`相当于DetailView的`get_object()`方法，

通过指定的参数`video_id`来filter上面的queryset数据集，而问题就在于已经切片过的数据集不能再进行筛选，所以后来修改

`latest_video()`方法如下：
``` python
queryset = cls.objects.all().order_by('-update_time')
```

不在模型层对其进行切片操作，可以把切片放在视图层

---

<div class="note danger no-icon"><p>搜索关键词得不到相关视频时，出现的页面底部存在空白</p></div>

修改如下

``` html
{% if video_list %}
    {% for video in video_list %}
    ...
    {% endfor %}
{% else %}
    # 若搜索关键词找不到相关视频
    <div class="none-videolist" style="height: 100%;background-color: #202020;block-size: 1000px;">
        <p class="h5" style="text-align: center;">未找到视频资源</p>
    </div>
{% endif %}
```

---

<div class="note danger no-icon"><p>条件检索后点击下一页查询条件丢失</p></div>

情况跟[这个](https://blog.csdn.net/qq_42219101/article/details/96967243)大致相似：

在执行完搜索之后，然后到搜索结果的下一页的时候，会出现搜索的结果消失，只在地址栏中留下了，而没有关键词
```
# 正常情况
127.0.0.1:8000/search?keyword=三生&page=2

# 现在的问题
127.0.0.1:8000/search/?page=2
```

搜索的结果全部消失

解决换页搜索失效还可以[通过JavaScript获取当前路径参数](https://blog.csdn.net/secowo/article/details/99685726)

但是最后还是通过修改`search_pagination.html`，在跳转页码的时候需要把搜索条件拼接到跳转页码的href上

``` html video/pagination.html
# 没有通过关键词搜索情况下的分页

{% block paginate %}
{% if is_paginated %}
    <nav aria-label="Page navigation ">
        <ul class="pagination  justify-content-center">
            {% if page_obj.has_previous %}
                {% if page_obj.number >= max_left_item_count|add:max_left_item_count %}
                    <li class="page-item"><a class="page-link" href="?page=1">&laquo;&laquo;</a></li>
                {% endif %}
                <li  class="page-item"><a class="page-link" href="?page={{ page_obj.previous_page_number }}">&laquo;</a></li>
            {% else %}
                <li class="page-item"><a class="page-link" href="?page=1">&laquo;&laquo;</a></li>
            {% endif %}
            ...
{% endif %}
{% endblock %}
```

``` html video/search_pagination.html
# 关键词搜索后的分页，区别在于 href="?keyword={{ keyword }}&page=1"

{% if is_paginated %}
    <nav aria-label="Page navigation ">
        <ul class="pagination  justify-content-center">
            {% if page_obj.has_previous %}
                {% if page_obj.number >= max_left_item_count|add:max_left_item_count %}
                    <li class="page-item"><a class="page-link" href="?keyword={{ keyword }}&page=1">&laquo;&laquo;</a></li>
                {% endif %}
                <li  class="page-item"><a class="page-link" href="?keyword={{ keyword }}&page={{ page_obj.previous_page_number }}">&laquo;</a></li>
            {% else %}
                <li class="page-item"><a class="page-link" href="?keyword={{ keyword }}&page=1">&laquo;&laquo;</a></li>
            {% endif %}
            ...
{% endif %}
```

判断是否有关键词在上下文中：
``` html
{% if keyword %}
    {% include "video/search_pagination.html" %}
{% else %}
    {% include "video/pagination.html" %}
{% endif %}
```

搜索视图的代码：

``` python
class SearchView(CommonListView):
    paginate_by = 10
    template_name = 'video/more_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context.update({
            'keyword': self.request.GET.get('keyword', ''),
        })
        return context

    def get_queryset(self):
        queryset = super().get_queryset()
        keyword = self.request.GET.get('keyword')
        if not keyword:
            return queryset
        return queryset.filter(Q(name__icontains=keyword) | Q(alias__icontains=keyword))
```

---

<div class="note danger no-icon"><p>UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: xxx QuerySet.</p></div>

经过搜索是由于： 所得的数据是无效的，故而分页出现错误

修改方法，在获得的数据之后对所得的数据进行排序
``` python
lists = Article.objects.filter(
        Q(title__icontains=word) | Q(context__icontains=word)).order_by('-created_time')
```

---

<div class="note danger"><p>封面链接是否有效需要在爬虫中就处理完毕，若失效则添加失效的封面链接代替</p></div>

---

<div class="note danger no-icon"><p>models文件没什么问题，APP也都注册了，但就是出现No changes detected</p></div>

models文件没什么问题，APP也都注册了，但修改models文件后再进行`makemigrations`，就是出现No changes detected

``` bash
(LVideo) E:\LVideo>python3 manage.py makemigrations
No changes detected
```

于是一个个APP注册，如：
``` bash
(LVideo) E:\LVideo>python3 manage.py makemigrations video
Migrations for 'video':
  video\migrations\0001_initial.py
    - Create model Source
    - Create model VideoInfo
    - Create model VideoLink
    - Create model VideoPU
```

---

<div class="note danger no-icon"><p>遇到视频信息中包含韩文的问题</p></div>

默认爬虫会保存韩文的`HTML实体编码 entity code`，类似`&#44608;&#45824;&#49457;`的编码，而不是保存为韩文字

为了避免这种情况，需要通过Python的html库
``` python
content = html.unescape(html_entity)
```

保证将要存入的内容转换后再存入数据库

---

<div class="note danger no-icon"><p>ajax的post请求，出现Forbidden (CSRF token missing or incorrect.)</p></div>

ajax 的post请求,Forbidden (CSRF token missing or incorrect.)错误[解决办法](https://blog.csdn.net/weixin_43790705/article/details/87867172)：

在data中添加`csrfmiddlewaretoken` 
``` javascript
<script>
    ...
    data:{
        "csrfmiddlewaretoken": '{{ csrf_token }}',
        ...
    },
    ...
</script>
```

或者，参考[这篇](https://blog.csdn.net/qq_36963372/article/details/82713044)

注意是val()
``` javascript
<script>
    // 这里添加token
    var token = $('input[name=csrfmiddlewaretoken]').val();
    function check() {
         ...
        $.ajax({
            url: '{% url '' %}',
            type: 'post',
            // 这里加上
            data: {csrfmiddlewaretoken: token},
            dataType: 'json',
            success: function (data) {
                
            }
        })
    }
</script>
```

---

<div class="note danger no-icon"><p>补充Hexo的一个问题：Nunjucks Error:  [Line 35, Column 13] unknown block tag: xxx</p></div>

在提交有
```
{% xxx %}
```

这种格式的文本时，一定要包上三个`点号`，两边只包上一个点号，会导致报错


### 备选

#### 播放器

[videojs](https://github.com/videojs/video.js)
[plyr](https://github.com/sampotts/plyr)
[flv.js](https://github.com/bilibili/flv.js)
[用JW Player,ckplayer,Smartideo搭建视频直播站-支持各大视频网站和rtmp](https://www.iaodun.com/faq/technical/2502.html)