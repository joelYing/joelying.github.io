---
title: Clover主题配置
categories: Clover
tags:
  - CloverConfig
comments: true
description: 毕竟有些人，只是遇见，就已经很美好了
abbrlink: 71f72a8c
date: 2019-08-14 19:13:03
permalink:
image:
---
<img class="joel-img" src="http://image.joelyings.com/20190827-29.jpg" >

<!-- more -->

**在站点配置文件的theme更换主题名称即可切换博客主题，不影响之前一个主题的博客设置**

### zh-CN.yml
---
```
categories: 分类
tags: 标签
archive_a: 归档
archive_b: 归档：%s
page: 第 %d 页
category: 分类
tag: 标签
other_category: 其他
links: 友链
```

### _config.yml
---
```
# Custom nav
nav:
  title: "Joel Ying"

favicon: ""

# Custom background
background:
  color: "#eff0f6"
  image: ""

# Social media
social:
  Dribbble: # https://dribbble.com/clovertuan
  Behance: # https://www.behance.net/clovertuan
  Lofter: # http://clovertuan.lofter.com/
  Instagram: # https://www.instagram.com/clovertuan/
  GitHub: https://github.com/joelYing

# Custom footer
mail: 635328166@qq.com
copyright: All rights reserved @Joel Ying

# Custom menu. You can specific the path or the card style (only useful for category page).
# Two kinds of card style: 'project-card', 'article-card',
# Never mind the name.
menu:
  # Project:
  #   path: /categories/Projects
  #   card: project-card
  # Stuffs:
  #   path: /tags/Stuffs
  #   card: article-card
  home: /
  archives: /archives
  categories: /categories
  tags: /tags
  link: /links
  about: /about

# Specific default categories or tags of home page.
# Post which belongs to `category` or `tag` and don't belongs to `except_category` or `except_tag` will be filtered.
home:
  # set card style of home page
  # category: Projects
  # tag: 算法
  # except_category: 树
  # except_tag:
  #   - 总结
  #   - css

card_style:
  home: project-card
  archive: article-card
  tag: article-card
  category: article-card
  link: article-card
  about: article-card

# category page
category_generator:
  category_per_page: 3
  post_per_category: 3

node_sass:
  outputStyle: nested
  precision: 5
  sourceComments: false
```

### about-index.md
---
```
---
layout: about
title: about
date: 2019-08-12 14:52:23
---

Hi，这里是半个兴趣使然的程序员

```

### category-index.md
---
```
---
layout: category
title: categories
date: 2019-08-12 14:48:57
---

```

### links-index.md
---
```
---
title: links
date: 2019-08-13 10:43:10
---

WeChat: yjl15822897030
QQ: 635328166
MyWeb: www.joelyings.com
Learn From: https://clovertuan.github.io/
```

### tag-index.md
---
```
---
layout: tag
title: tags
date: 2019-08-12 14:44:58
---

```

### 效果图
![](http://image.joelyings.com/clover1.png)
![](http://image.joelyings.com/clover2.png)
![](http://image.joelyings.com/clover3.png)
![](http://image.joelyings.com/clover4.png)
![](http://image.joelyings.com/clover5.png)
![](http://image.joelyings.com/clover6.png)