---
title: Django合并Scrapy方法
tags:
  - django
  - scrapy
comments: true
categories: Django
description: 莫笑我渴时无美酒，江湖来做壶
abbrlink: 661146c6
date: 2020-02-05 17:59:39
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-02-06_10.jpeg">

<!-- more -->

## 方法一

以后可能会用到

**Django合并Scrapy方法**

新建一个Django项目
``` bash
django-admin startproject xxx
```

打开新建的django项目，然后新建一个app
``` bash
cd xxx
python manage.py startapp xxxx
```

在django的根目录下，即xxx项目根目录下，创建scrapy项目
``` bash
scrapy startproject xxxxx
cd xxxxx
scrapy genspider xxxxx "yyyyy.com"
```

在scrapy的settings.py文件中添加配置信息
``` bash
import django
os.environ['DJANGO_SETTINGS_MODULE'] = 'xxx.settings'
django.setup()
```

下载[scrapy-djangoitem](https://github.com/scrapy-plugins/scrapy-djangoitem)工具包
``` bash
pip3 install scrapy-djangoitem 
```

在scrapy的items.py中编写
``` bash
import scrapy
from scrapy_djangoitem import DjangoItem
from xxx.models import xxxx
 
 
class abcItem(DjangoItem):
    django_model = xxxx
```

## 方法二

把scrapy框架，移动到Django框架的目录下，打开scrapy中的setting.py，加上：　　　　　
``` python
import os
import sys
sys.path.append(os.path.dirname(os.path.abspath('.')))
os.environ['DJANGO_SETTINGS_MODULE'] = 'django项目名.settings'
import django
django.setup()
```

scrapy中的item.py中引入Django模型类，安装命令：
``` bash
pip install scrapy-djangoitem
```

然后在item中加入Django的模型类：
``` python
from scrapy_djangoitem import DjangoItem
from app import models
class SeoItem (DjangoItem):
    # 此处必须起名为django_model,主爬虫中使用item['title']=xxx
    django_model = models.AbckgModel
```

在scrapy的 pipelines.py中调用save()
``` python
class SeoPipeline(object):
    def process_item(self, item, spider):
        # 插入到数据库
        item.save()
        return  item #将item传给下一个管道继续处理
```