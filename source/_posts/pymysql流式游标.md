---
title: pymysql流式游标
tags:
  - pymysql
  - Python
  - mysql
comments: true
categories: MySQL
description: 世间万般难事皆可在女子大腿上办妥
abbrlink: 432e7c82
date: 2020-01-23 10:25:53
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-01-23_1.jpg">

<!-- more -->

Python通过pymysql操作向mysql读取千万、百万级别的数据库时

如果用传统的``fetchall()``或``fetchone()``方法，都是先默认在内存里缓存下所有行然后再处理，大量的数据会导致内存资源消耗光，内存容易溢出

此时则建议使用``SSCursor``(流式游标)，避免客户端占用大量内存

这个 cursor 实际上没有缓存下来任何数据，它不会读取所有所有到内存中，它的做法是从储存块中读取记录，并且一条一条返回给你,使用迭代器而不用 fetchall ,即省内存又能很快拿到数据

例：

``` python
def select_pan_url(self):
    db = pymysql.connect(host='localhost', port=3306, user='root', passwd='', db='')
    cursor = db.cursor(cursor=pymysql.cursors.SSDictCursor)

    select_sql = "select `name`, `detail_url`, `pan_title`, `pan_psw`, `pan_real_url` from agepan_wj"
    try:
        cursor.execute(select_sql)
        # 在处理大量数据时可以分割进行
        datas = cursor.fetchall()
        for pan in datas:
            self.row_lists.append(pan)
    except Exception as e:
        print('取数据失败', e)
        db.rollback()
    finally:
        cursor.close()
        db.close()
```

需要注意的是：

因为``SSCursor``是没有缓存的游标，结果集只要没取完，这个``connect``是不能再处理别的``sql``，包括另外生成一个``cursor`` 也不行的，如果需要干别的，请另外再生成一个连接对象

每次读取后处理数据要快，不能超过 60 s，否则``mysql``将会断开这次连接

也可以修改``SET NET_WRITE_TIMEOUT = xx``来增加超时间隔

