---
title: Python爬取视频指南
date: 2019-08-11 20:20:49
permalink:
categories: Python
tags: [Python]
comments: true
description: 人间烟火，山河远阔，无一是你，无一不是你
image: 
---
<img class="joel-img" src="http://pw407zrf4.bkt.clouddn.com/20190827-28.jpg" >

<!-- more -->
## 前言
前两天尔羽说让我爬一下菜鸟窝的教程视频，这次就跟大家来说说Python爬取视频的经验


## 正文
> https://www.cniao5.com/

菜鸟窝上有很多教程视频，但是这些视频好像没有直接的下载地址，而且有些教程视频还是有期限的，那么问题就产生了
我看的速度比较慢而且视频又很多，没等我看完视频就到期了怎么办？这时候写一个爬虫将这些教程视频下载下来就很好地解决了这个问题

当然，对于某些视频网站的VIP电影、视频之类的，一般情况下是无法在没有开通VIP的情况下用爬虫下载的，因为涉及到利益问题，同时数据传输也是加密的；想要看的话还是得开通会员再进行爬取

回到这次的目标上来，我们要爬取的是
> https://www.cniao5.com/course/lessons/10153

上面的24章，共计202个教程视频

![](http://pw407zrf4.bkt.clouddn.com/20190827-1.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-2.png)

接下来我们来看看我们应该如何获取这些视频
首先我们看一下这个界面的源代码中没有关于课程视频的信息，那么我们点进去一个视频看看

![](http://pw407zrf4.bkt.clouddn.com/20190827-3.png)

通过开发者工具我们可以看到左侧都是这次加载视频是动态加载的信息，我们一个个来看
首先是url，我们可以看到这个链接是 Post 方式请求的（然鹅实际上再通过postman测试可以知道，并不用带上什么参数请求，吓唬人呢...）
![](http://pw407zrf4.bkt.clouddn.com/20190827-4.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-5.png)
这就是url返回的数据，其中 hd 、shd 代表高清、超清的视频类型，而当你访问这个链接后会自动下载一个 m3u8 文件，这介绍一下

m3u8 文件是指UTF-8编码格式的M3U文件。M3U文件是记录了一个索引纯文本文件，打开它时播放软件并不是播放它，而是根据它的索引找到对应的音视频文件的网络地址进行在线播放

![](http://pw407zrf4.bkt.clouddn.com/20190827-6.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-7.png)

而我们下载视频的方式就是通过向m3u8文件中的这些 .ts 的链接发送请求而下载一个个 ts视频流 （暂时这么称呼）
 
下一个就是 chapters ，这里呢则是包含了所有24章视频的一些基本信息

![](http://pw407zrf4.bkt.clouddn.com/20190827-8.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-9.png)

注意这里的 **vid** 参数，之后我们会用到
![](http://pw407zrf4.bkt.clouddn.com/20190827-10.png)
这个就是网页上加载的m3u8 文件

![](http://pw407zrf4.bkt.clouddn.com/20190827-11.png)
这看似乱码的ts文件下载下来后就是一个几秒钟的视频了

![](http://pw407zrf4.bkt.clouddn.com/20190827-12.png)
而我们最后要做的就是将这些 ts 文件合成为一个 mp4 文件

![](http://pw407zrf4.bkt.clouddn.com/20190827-13.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-14.png)

那么如何来操作呢？
## 思路
通过请求 chapters 的链接获取每一个章节中每一个lesson的播放 url 地址（就是返回中带有 hd 、shd的），取出并请求 hd 的链接，下载m3u8文件，匹配m3u8文件中的每一个 ts ，请求 ts 文件对应的链接并下载到本地，最后合成为一个mp4视频

来跟着代码看一下
首先小编是在本地先用代码创建好最终合成视频的存放的空文件夹以便访问
![](http://pw407zrf4.bkt.clouddn.com/20190827-15.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-16.png)

```
def mkd():
    for i in range(1, 25):
        finalpath = 'D:\\Python\\PycharmProject\\FinalCniao5\\{}'.format(i)
        # 判断路径文件是否存在，不存在则创建
        f = os.path.exists(finalpath)
        if not f:
            os.makedirs(finalpath)
            print('make file success...')
        else:
            print('file already exists...')
```

接着创建对应章节的文件夹
```
# 防止 requests 开得太多
s = requests.session()
r_chapters = s.get('https://www.cniao5.com/api/v1/course/10153/chapters')
json_chapters = r_chapters.json()
# print(json_chapters)
for chapter in json_chapters:
    # 每一个章节
    chapter_name = chapter['bsort']
    print(chapter_name)
    # 根据课程数创建对应的课程文件夹
    path1 = self.file_path1.format(chapter_name)  
    f = os.path.exists(path1)
    if not f:
        os.makedirs(path1)
        print('make file success...')
    else:
        print('file already exists...')
```
对章节中的每一个课程，获取其 id、key、file_id 创建对应的课程文件夹（用来保存ts文件）
```
for lessons in chapter['lessons']:
    # 章节下的每一个课程
    lessons_name = 'lessons' + str(lessons['bsort'])
    # 获取其id
    video_id = lessons['video_info']['vid']
    # 获取 key
    key = lessons['key']
    # 后面用到
    file_id = lessons['video_info']['file_id']
    print(lessons_name, video_id)
    # 每个视频创建一个视频id的文件夹
    path = 'D:\\Python\\PycharmProject\\Cniao5\\{}\\{}'.format(chapter_name, lessons_name)
    f = os.path.exists(path)
    # 基于中断后，创建文件时判断，若存在该文件夹则跳过对该视频的下载，若不存在则继续
```
对于之后则需要分为两种情况，我不知道菜鸟窝是怎么想的，你可以看到对于有的视频 vid 有具体的数值，有的则是 0
![](http://pw407zrf4.bkt.clouddn.com/20190827-17.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-18.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-19.png)

也就是说对于 vid 有值的我们可以很容易构造 url 链接从而获取 m3u8 文件进而下载 ts 视频；但是对于没有的来说就麻烦了，我们不能直接构造这个 url 链接
而对于这一类视频则是这样的
![](http://pw407zrf4.bkt.clouddn.com/20190827-20.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-21.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-22.png)

这类视频不是通过 m3u8 来处理视频的而是直接给了一个 mp4 的地址，那么也就是说对于 vid 为0的视频我们需要访问
> https://playvideo.qcloud.com/getplayinfo/v2/1255567694/5285890782726972640

才可以拿到这个视频，那么这个 url 中后面的两个参数是什么呢
这个 ``5285890782726972640`` 我们在上图中可以发现就是之前提到的 **file_id** 这也是我们为什么要获取的原因；而前面的``1255567694``你多看几个就知道这个是不变的

而当你去访问这个 MP4 的链接时菜鸟窝会告诉你，你没有权限请求这个链接，what？
而这时候你要知道所谓爬虫就是模拟人对浏览器进行的操作而获取一定的结果，那么我们可以带上请求头来试试，小编是在用 fiddler 抓包后肯定了这一点，最后测试发现只要带上 header 中的 **referer** 就可以访问

![](http://pw407zrf4.bkt.clouddn.com/20190827-23.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-24.png)

而这个 referer 也是有讲究的，这个后面跟的奇怪的参数正是上述中你们都快忘了的 **key** ，这个是每个 lesson 中都有的

![](http://pw407zrf4.bkt.clouddn.com/20190827-25.png)

![](http://pw407zrf4.bkt.clouddn.com/20190827-26.png)

所以对于这种情况，之后只要把请求 MP4 链接后的内容以二进制方式保存就行

此外还要注意对于 ts 文件，在请求时的前缀是
``https://vodi97egsxf.vod.126.net/vodi97egsxf/``

![](http://pw407zrf4.bkt.clouddn.com/20190827-27.png)
 
而在合并 ts 文件时，我用的是通过Python调用 windows 自带的合成的命令来合成，但是需要注意合成时候的文件名一定按 001，002，...，010，...，099，100...如此排列；而如果按 1，2，3，...，10，11，...，99，100 则合并不会成功

所以在保存时就应该注意指定文件的名称即可

好了看到这里相信你应该有了一个基本的认识了，需要完整源码的也可以联系小编

 
