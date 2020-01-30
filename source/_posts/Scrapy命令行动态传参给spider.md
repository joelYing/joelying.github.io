---
title: Scrapy命令行动态传参给spider
tags:
  - Python
  - Scarpy
comments: true
categories: Scrapy
description: 世间痴情男儿，不论地位高低，大抵都是喜欢女子便是错了，而且希望能一辈子知错不改
abbrlink: e85e0b74
date: 2020-01-23 10:23:33
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-01-23_2.jpg">

<!-- more -->

### scrapy命令行执行传递多个参数给spider 动态传参

在命令行运行scrapy爬虫
``` python
scrapy crawl spider_name
```

若爬虫中有参数可以控制爬取的页数，那么想要在输入命令行命令时传递页数给爬虫，就可以这样做

在spider中定义一个构造函数
``` python
    def __init__(self, pages=None, *args, **kwargs):
        super(LvideoSpider, self).__init__(*args, **kwargs)
        # super().__init__(**kwargs)
        self.pages = pages
        
    ...
    def parse(self, response):
        pages = re.findall(r'当前:1/(\d+)页', response.text, re.S)[0]
        link = response.meta['format_page']
        # 如果self.pages存在，那么就会代替正则取到的页数
        if self.pages:
            pages = self.pages
            print('共' + str(pages) + '页')
        for page in range(1, int(pages) + 1):
            page_link = link.format(page)
            yield Request(page_link, callback=self.parse_video_link,
                          meta={'soucre_name': response.meta['soucre_name'],
                                'domin': response.meta['domin'],
                                'page_link': page_link}, dont_filter=True)
```
 
然后在启动scrapy的时候就可以赋予参数的值：
``` python
scrapy crawl spider_name -a pages=10
```

这样就控制了爬取页数为10页