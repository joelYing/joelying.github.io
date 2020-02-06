---
title: Django搭建免费视频网站其一
tags:
  - django
  - 网站
comments: true
categories: Django
description: 世间文字八万个，唯有情字最杀人
abbrlink: 8adedfb3
date: 2020-02-05 14:05:11
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-02-06_2.jpg">

<!-- more -->

## 前言

很早就有一个自己做一个免费视频网站的想法，跟[AGE动漫网](https://www.agefans.tv/)那样，不用开会员，不用等广告该有多好...这不在学Django，所以就打算用Django搭建一个这么样的网站

那么网站的资源怎么来呢？鉴于有很多的视频资源网，比如[这个](http://www.kuyunzy.tv/)，或者[这个](http://www.okzyw.com/)，那么我的初步想法就是写一个爬虫，爬取资源网站的所有视频链接，信息等，再通过Django从数据库中取出这些数据并展示在网站，视频链接还需要每天定时爬取更新

这样一来，就实现了这个网站的基本功能

爬虫是通过scrapy框架写的，没什么太大问题，而且本身这些资源网就有配套的建站CMS可以套用，所以这些网站的页面结构也相对简单

所以主要来讲讲这里Django的应用

[代码传送门](https://github.com/joelYing/LVideo)

## 预想

我想了想这段内容谈不上设计，只是自己的一些预想罢了

我预计初步实现的网站功能如下：

1. 列出各种类型的影片，动漫，提供影片的在线观看
2. 对动漫单独做出一个分页，包含一周更新表
3. 提供一个VIP视频解析接口，解析资源网未更新但是是VIP才能看的视频

---

预设的网站URL：

```
网站首页：https://www.joelyings.com/lvideo/
VIP接口解析视频页：https://www.joelyings.com/lvideo/viparse
最近更新的视频5页：https://www.joelyings.com/lvideo/latest5
播放量排行页：https://www.joelyings.com/lvideo/clicknums
登录：https://www.joelyings.com/lvideo/login
动漫：https://www.joelyings.com/lvideo/dm
电视剧：https://www.joelyings.com/lvideo/tv
综艺：https://www.joelyings.com/lvideo/zy
电影：https://www.joelyings.com/lvideo/mv
其他：https://www.joelyings.com/lvideo/ot
视频详情页：https://www.joelyings.com/lvideo/detail/<video_id>.html
视频播放页：https://www.joelyings.com/lvideo/play/<video_id>.html
```

---

Django中APP类型划分：

考虑到将来可能有多个数据源，所以有source模型，视频信息包含了很多项数据，所以与视频链接分为两个表

<span id="inline-purple">videoAPP</span>

通用的跟视频有关的APP，包含来源source模型、视频信息videoinfo模型、视频播放链接videolink模型

<span id="inline-purple">vip_parseAPP</span>

视频解析接口APP，单独的一个页面，提供多种VIP解析接口，vip接口的模型（表）

---

这里的页面，后续基本上是参照AGE动漫网做的，特别粗糙

页面：(首页、VIP接口页、最近更新(5页)、点击排行、登录、标签类别页、动漫标签页单独特殊化)

这是传说中的`手残符号概念图-_-||`

```

首页
============================================================
LOGO                                                   登录
============================================================
首页 | VIP | 最近更新(5页) | 点击排行                    搜索

============================================================

动漫 | 电影 | 电视剧 | 综艺 |...(每一个标签下自动加载4*5个视频的封面+名称+最新一集)

*        *        *        *        *     |    最近更新的10部  更多

*        *        *        *        *     |  

*        *        *        *        *     |  

*        *        *        *        *     |  

============================================================

友链

============================================================

网站信息

```

---

咳咳咳，下面是初步表结构：

<span id="inline-blue">Source来源表</span>

来源网站ID、来源网站域名、来源网站名称、网站类型（资源网、解析网）、创建时间

<span id="inline-blue">Video详情表</span>

videoID、video名称、别名、封面链接、video演员、导演、类型、地区、更新时间、集数、语言、上映时间、简介、来源网站名称、创建时间

<span id="inline-blue">Video链接表</span>

链接ID、videoID、链接url、来源网站名称、创建时间

<span id="inline-blue">VIP解析接口表</span>

接口ID、接口链接、是否可用、创建时间

<span id="inline-blue">Video点击量表</span>

视频名称，pv，uv

<div class="note info"><p>附</p></div>

PV(访问量)：即Page View，具体是指网站的是页面浏览量或者点击量，页面被刷新一次就计算一次。如果网站被刷新了1000次，那么流量统计工具显示的PV就是1000

UV(独立访客)：即Unique Visitor，访问您网站的一台电脑客户端为一个访客。00:00-24:00内相同的客户端只被计算一次

一个UV可以用很多PV，一个PV也只能对应一个IP。比如，今天访问了一次你的网站，你的UV就加了1，我这次访问浏览了两个页面，你的PV就加2，我访问同一个页面，但刷新了一次，PV也是2

这里为止就是我初步预想的内容，下面就可以着手实现了！

## 实现

### 创建项目

这是我总结的Django项目创建的一般流程：

1、配置项目运行的虚拟环境
2、配置readme、requirements.txt等文件
3、创建项目：django-admin startproject xxx
4、有必要的话拆分settings.py，分为开发、线上不同配置
5、修改settings.py时区，语言等配置
6、创建APP：python3 manage.py startapp xxx
7、配置APP：在settings.py中的INSTALLED_APPS添加APP
8、根据配置好的Models和APP创建数据库表，迁移文件：python3 manage.py makemigrations
9、执行迁移：python3 manage.py migrate；python manage.py dbshell 可以进入sqlite交互界面
10、创建超级用户：python3 manage.py createsuperuser，输入用户名、邮箱密码
11、进入Admin，python3 manage.py runserver 启动项目后可以进入admin页面
12、编写admin，在admin.py中注册之前的models

### 建立模型

建立模型，这样一来也可以通过模型生成的表为scrapy爬虫做准备

首先在video的APP中建立三个模型，分别为Source、VideoInfo、VideoLink，这里就贴Source模型的代码

``` python
class Source(models.Model):
    STATUS_NORMAL = 1
    STATUS_UNNORMAL = 0
    STATUS_ITEMS = (
        (STATUS_NORMAL, '有效地址'),
        (STATUS_UNNORMAL, '无效地址'),
    )
    TYPE_ZIYUAN = 1
    TYPE_JIEXI = 0
    TYPE_ITEMS = (
        (TYPE_ZIYUAN, '资源类'),
        (TYPE_JIEXI, '解析类'),
    )

    domin = models.CharField(max_length=128, verbose_name='来源域名')
    name = models.CharField(max_length=128, verbose_name='来源名称')
    type = models.PositiveIntegerField(default=TYPE_ZIYUAN, choices=TYPE_ITEMS, verbose_name='来源类型')
    is_effect = models.PositiveIntegerField(default=STATUS_NORMAL, choices=STATUS_ITEMS, verbose_name='是否有效')
    format_page = models.CharField(max_length=512, verbose_name='构造初始爬取页链接')
    created_time = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')

    class Meta:
        verbose_name = verbose_name_plural = '来源'

    def __str__(self):
        return self.name
```

没有指定主键的模型，Django会自动添加id作为主键，且自动增长，模型都建好后，可以执行

``` python
python manage.py makemigrations
python manage.py migrate
```

来生成对应的表，这里我用的是mysql，所以需要在settings.py配置中修改如下：

``` python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'lvideo',                   # 数据库名
        'USER': 'root',                     # mysql username
        'PASSWORD': 'xxx',                  # 数据库密码
        'HOST': 'localhost',                # host
        'PORT': '3306',                     # port
        'OPTIONS': {'charset': 'utf8mb4'},  # 设置编码为utf8mb4
    }
}
```

然后在，与settings.py文件同一目录下的`__init__.py`文件中加入：

``` python
import pymysql
pymysql.install_as_MySQLdb()
```

### 展示后台

在videoAPP的admin.py中添加对应模型的admin部分代码：

``` python
@admin.register(Source)
# 这里的site=custom_site是因为我分出一个用户浏览的后台管理，正常情况下只用注册第一条即可
@admin.register(Source, site=custom_site)
class SourceAdmin(admin.ModelAdmin):
    # 模型展示的字段
    list_display = ['domin', 'name', 'type', 'is_effect', 'format_page', 'created_time']
    # 可供创建或修改的字段
    fields = ['domin', 'name', 'is_effect', 'type', 'format_page']

    search_fields = ['domin', 'name']
    actions_on_top = True
    actions_on_bottom = True

    # 编辑页面，默认情况下保存按钮在底部
    save_on_top = True
```

这样一来就可以在后台管理界面添加或者修改数据了

### 添加页面

当前运行项目后

``` python
python manage.py runserver
```

能看到Django的运行成功页面，以及可以进入后台管理页面，但是并没有任何的数据展示页面，所以下面我们来编写这些页面

我们整理一下逻辑，浏览器通过访问特定的url，Django会去找到并处理对应url的view(视图)，视图中写好了我们的一系列逻辑，最后将数据传给指定的HTML页面，最终展现在我们面前的就是被渲染好的HTML页面

所以我们来看`urls.py`文件：

``` python
from django.contrib import admin
from django.urls import path

from LVideo.custom_site import custom_site
from video.views import IndexView, Latest5View, VideoDetailView, VideoPlayView, MoreListView, VideoPlayIndexView, \
    SearchView, ClickView, register, login, logout
from vip_parse.views import VipParseView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('viparse', VipParseView.as_view(), name='vip-parse'),
    path('latest5', Latest5View.as_view(), name='latest5'),
    path('clicknums', ClickView.as_view(), name='clicknums'),
    path('login', login),
    path('register', register),
    path('logout', logout, name='logout'),
    # path('profile', profile, name='profile'),
    path('search', SearchView.as_view(), name='search'),
    path('dm', MoreListView.as_view(), name='dm-list'),
    path('tv', MoreListView.as_view(), name='tv-list'),
    path('zy', MoreListView.as_view(), name='zy-list'),
    path('mv', MoreListView.as_view(), name='mv-list'),
    path('ot', MoreListView.as_view(), name='ot-list'),
    path('detail/<int:video_id>.html', VideoDetailView.as_view(), name='video-detail'),
    path('playindex/<int:video_id>.html', VideoPlayIndexView.as_view(), name='video-play-index'),
    path('play/<int:video_id>/<int:play_id>.html', VideoPlayView.as_view(), name='video-play'),
    path('super_admin/', admin.site.urls),
    path('custom_admin/', custom_site.urls)
]
```

这里列出了网站基本的可访问的路径，第一行path，路径为空指向的就是首页，也是现在的`127.0.0.1:8000`的页面，而`detail/<int:video_id>.html`，类似这种路径，Django视图就能拿到其中的video_id参数

我们可以看到第一行path后面跟的是`IndexView.as_view()`，也就是指向的videoAPP的views.py中的`IndexView`这个视图

``` python
# 这里CommonListView是我继承的ListView
class IndexView(CommonListView):
    # queryset是基础的从数据库中通过指定条件取得的结果集，比如这里我从VideoInfo模型对应的表中取出了类型为动漫的前10条数据
    queryset = VideoInfo.get_type_video_list(VideoInfo.TYPE_DM)[:10]
    # 模板中可以用到的上下文的名称
    context_object_name = 'video_list'
    # 模板所在的相对路径
    template_name = 'video/index_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        # 根据需求添加到上下文中的数据
        context.update({
            'dm_list': super().get_queryset(),
            'mv_list': VideoInfo.get_type_video_list(VideoInfo.TYPE_MV)[:10],
            'tv_list': VideoInfo.get_type_video_list(VideoInfo.TYPE_TV)[:10],
            'zy_list': VideoInfo.get_type_video_list(VideoInfo.TYPE_ZY)[:10],
            'ot_list': VideoInfo.get_type_video_list(VideoInfo.TYPE_OT)[:10],
            'dm_pv_list': VideoInfo.get_hot_video_list(VideoInfo.TYPE_DM)[:10],
            'mv_pv_list': VideoInfo.get_hot_video_list(VideoInfo.TYPE_MV)[:10],
            'tv_pv_list': VideoInfo.get_hot_video_list(VideoInfo.TYPE_TV)[:10],
            'zy_pv_list': VideoInfo.get_hot_video_list(VideoInfo.TYPE_ZY)[:10],
            'ot_pv_list': VideoInfo.get_hot_video_list(VideoInfo.TYPE_OT)[:10],
            'links': Links.get_links()
        })
        return context

```

这里我们将许多数据都带到了模板中用作渲染，而这些获取数据的方法都被我们写在模型下面，如：

``` python
class VideoInfo(models.Model):
    TYPE_DM, TYPE_MV, TYPE_TV, TYPE_ZY, TYPE_OT = '动漫', '电影', '电视剧', '综艺', '其他'
    V_TYPE_LIST = {
        'dm': TYPE_DM,
        'mv': TYPE_MV,
        'tv': TYPE_TV,
        'zy': TYPE_ZY,
        'ot': TYPE_OT
    }
    name = models.CharField(max_length=512, verbose_name='视频名称', db_index=True)
    alias = models.CharField(max_length=512, verbose_name='别名', db_index=True)
    remark = models.CharField(max_length=512, verbose_name='视频备注')
    cover_url = models.CharField(max_length=512, verbose_name='封面链接')
    director = models.CharField(max_length=512, verbose_name='导演')
    actor = models.CharField(max_length=1024, verbose_name='演员')
    first_type = models.CharField(max_length=256, verbose_name='视频类别1')
    second_type = models.CharField(max_length=256, verbose_name='视频类别2')
    region = models.CharField(max_length=256, verbose_name='地区')
    update_time = models.CharField(max_length=128, verbose_name='资源更新时间')
    nums = models.PositiveIntegerField(default=1, verbose_name='总集数')
    release_time = models.CharField(max_length=64, verbose_name='上映年份', db_index=True)
    intro = models.TextField(verbose_name='简介')
    source = models.CharField(max_length=128, verbose_name='来源网站名称')
    created_time = models.CharField(max_length=128, verbose_name='创建时间')

    pv = models.PositiveIntegerField(default=1, verbose_name='页面访问量')
    uv = models.PositiveIntegerField(default=1, verbose_name='独立访客数')

    class Meta:
        verbose_name = verbose_name_plural = '视频信息'

    def __str__(self):
        return self.name

    @classmethod
    def get_type_video_list(cls, v_type):
        """
        返回相关first_type的所有video，并根据update_time倒序
        """
        queryset = cls.objects.filter(first_type=v_type).order_by('-update_time')
        return queryset

    @classmethod
    def get_hot_video_list(cls, v_type):
        """
        返回相关first_type的所有video，并根据pv倒序
        """
        queryset = cls.objects.filter(first_type=v_type).order_by('-pv')
        return queryset

    @classmethod
    def get_video_name(cls, video_id):
        name_list = cls.objects.filter(id=video_id).values('name')
        # 返回的name_list是 <QuerySet [{'name':xxx},]>
        name = name_list[0].get('name')
        return name

    @classmethod
    def latest_video(cls):
        queryset = cls.objects.all().order_by('-update_time')
        return queryset

    @classmethod
    def get_video_pu(cls, v_name):
        v_pu = cls.objects.filter(name=v_name)[0]
        return v_pu
```

这样一来view中只需要调用对应的方法就可以取得数据，model则负责取数据的具体实现，耦合度减小

而要找到view中指定模板文件，我们还需要在settings.py中配置：

``` python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'LVideo', 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'LVideo', 'static'),
]
```

我把templates文件夹放在与settings.py同一目录下，用来存放所有的模板文件，同样的还有static文件夹，用来存放css、js文件

配置好的情况下按住ctrl点击模板文件就可以跳转到对应的html文件，差不多的我们来看首页的html文件

``` html
{% extends "video/base.html" %}

{% block login-register %}
    {% if request.session.is_login %}
        {% include "video/user_model.html" %}
    {% else %}
        {% include "video/model.html" %}
    {% endif %}
{% endblock %}

{% block main %}
    <div class="container videolist">
        <p class="h5" id="more"><a href="{% url 'dm-list' %}">动漫</a></p>
        <div class="row videotype">
            <div class="col-9">
                <ul class="list-inline index-9">
                {% for video in dm_list %}
                    <li class="list-inline-item p-2">
                    <div class="cover_img_span1">
                        <a href="{% url 'video-detail' video.id %}">
                        <span class="cover_remark" title="{{ video.remark }}">{{ video.remark }}</span>
                        <img width="120px" height="165px" class="cover_img" src="{{ video.cover_url }}" title="{{ video.name }}">
                        </a>
                    </div>
                    <a href="{% url 'video-detail' video.id %}">
                        <div class="text-truncate text-center" style="max-width: 120px;" title="{{ video.name }}">{{ video.name }}</div></a>
                    </li>
                {% endfor %}
                </ul>
            </div>
            <div class="col-3 time">
                <div class="row timetable">
                    <span id="time-play">新番时间表</span>
                </div>
{#                {% include 'video/timetable.html' %}#}
                <ul class="list-inline time">
                {% for video in dm_pv_list %}
                    <dl class="row" style="margin-bottom: 0;">
                        <dt class="col-sm-7" style="font-weight: unset;">
                            <a href="{% url 'video-detail' video.id %}">
                                <span class="d-inline-block text-truncate" style="max-width: 150px;" title="{{ video.name }}">{{ video.name }}</span>
                            </a>
                        </dt>
                        <dd class="col-sm-5">
                            <span class="d-inline-block" style="height: 24px; width: 90px; overflow: hidden;">{{ video.update_time }}</span>
                        </dd>
                    </dl>
                {% endfor %}
                </ul>
            </div>
        </div>
        ...
    </div>
{% endblock %}

{% block links %}
    {% for link in links %}
    <span><a href="{{ link.link }}">{{ link.name }}</a></span>
    {% endfor %}
{% endblock %}

```

这里我们的`index_list.html`文件实际上是`extend`继承了`base.html`文件

实际上就是以`base.html`为母板，在上面挖了许多的`block`

而`index_list.html`中`block block_name...endblock`中的内容就是用来填充`block`的

对应的也有`include`某个html文件，即将里面的内容拿到`include`的位置

模板中也有几个需要注意的点，以这一部分为例：

``` html
# dm_list，就是view传入的上下文中的数据集之一，里面包含的是动漫类型的视频信息
{% for video in dm_list %}
    <li class="list-inline-item p-2">
    <div class="cover_img_span1">
        # 这个a标签中的href没有直接写为url路径，而是通过urls.py中对应的url路径的name反向解析成url，实现了低耦合
        <a href="{% url 'video-detail' video.id %}">
        <span class="cover_remark" title="{{ video.remark }}">{{ video.remark }}</span>
        <img width="120px" height="165px" class="cover_img" src="{{ video.cover_url }}" title="{{ video.name }}">
        </a>
    </div>
    <a href="{% url 'video-detail' video.id %}">
        <div class="text-truncate text-center" style="max-width: 120px;" title="{{ video.name }}">{{ video.name }}</div></a>
    </li>
{% endfor %}
```


<p id="div-border-top-purple">按照这样下来之后，就能看到基本的页面，剩下的就是爬虫的开发，以及页面的功能、模板的具体实现，由于这是在项目基本完成之后才写的，中间很多步骤无法连贯起来，但是这里还是记录下大致的过程用来日后可以简单的回溯一下</p>


下一篇大致是许多问题以及细节的处理过程，还有项目部署的大致过程