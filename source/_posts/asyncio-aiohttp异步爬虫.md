---
title: asyncio+aiohttp异步爬虫
tags:
  - asyncio
  - aiohttp
  - 异步
  - 爬虫
comments: true
categories: 异步
abbrlink: dbe2f5fc
date: 2020-02-28 21:10:13
permalink:
description: 好好活着，天底下就没有比这更大的道理了
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-03-01_1.jpg">

<!-- more -->

## 概念

> 进程：进程是一个具有独立功能的程序关于某个数据集合的一次运行活动。进程是操作系统动态执行的基本单元。
> 线程：一个进程中包含若干线程，当然至少有一个线程，线程可以利用进程所拥有的资源。线程是独立运行和独立调度的基本单元。
> 协程：协程是一种用户态的轻量级线程。协程无需线程上下文切换的开销，也无需原子操作锁定及同步的开销。
> 同步：不同程序单元为了完成某个任务，在执行过程中需靠某种通信方式以协调一致，称这些程序单元是同步执行的。
> 异步：为完成某个任务，不同程序单元之间过程中无需通信协调，也能完成任务的方式，不相关的程序单元之间可以是异步的。
> 多进程：多进程就是利用 CPU 的多核优势，在同一时间并行地执行多个任务。多进程模式优点就是稳定性高，因为一个子进程崩溃了，不会影响主进程和其他子进程，但是操作系统能同时运行的进程数是有限的。
> 多线程：多线程模式通常比多进程快一点，但是也快不到哪去，而且，多线程模式致命的缺点就是任何一个线程挂掉都可能直接造成整个进程崩溃，因为所有线程共享进程的内存。

Python 中使用协程最常用的库莫过于`asyncio`，然后我们还需要了解一些概念：

`event_loop 事件循环`

程序开启一个无限循环，把一些函数注册到事件循环上，当满足事件发生的时候，调用相应的协程函数

`coroutine 协程`

协程对象，指一个使用async关键字定义的函数，它的调用不会立即执行函数，而是会返回一个协程对象。协程对象需要注册到事件循环，由事件循环调用。

`task 任务`

一个协程对象就是一个原生可以挂起的函数，任务则是对协程进一步封装，其中包含了任务的各种状态

`future`

代表将来执行或没有执行的任务的结果。它和task上没有本质上的区别

`async/await 关键字`

python3.5用于定义协程的关键字，async定义一个协程，await用于挂起阻塞的异步调用接口。

---

不知道为什么我一看概念这些东西，讲的简单点的还好，一长就容易走神...所以这里只是简单复制粘贴了下

[Python手册中关于asyncio的部分](https://docs.python.org/zh-cn/3.6/library/asyncio-eventloop.html)
[aiohttp手册](https://docs.aiohttp.org/en/stable/client_advanced.html#client-session)

很多网上教的例子都在手册上有了，所以直接看手册就行，下面就来根据实例理解理解吧

## 实例

这个是我爬取站酷网上[“潇湘过客莫念”的雪中悍刀行的插图](https://www.zcool.com.cn/work/ZMjU4MjMzNDg=.html)，如下所示，通过最基本的`requests`抓取图片链接，没有遇到反爬

`get_content`是返回访问图片地址的content数据；`downloader`是将图片保存到本地的方法；`run`是提取目标图片链接并循环访问，并且记录整个过程的耗时

``` python
import time
import requests


def get_content(link):
    r = requests.get(link)
    content = r.content
    return content


def downloader(img):
    content = get_content(img[1])
    with open('D:\\MY\\雪中\\lists2\\' + str(img[0]) + '.jpg', 'wb') as f:
        f.write(content)
    print('下载成功!' + str(img[0]))


def run():
    start = time.time()  # 记录起始时间戳
    base_url = 'https://www.zcool.com.cn/work/content/show?p=2&objectId=6455837'
    r = requests.get(base_url)
    image_list = r.json()['data']['allImageList']
    for i, image in enumerate(image_list):
        downloader((i, image['url']))
    end = time.time()  # 获取结束时间戳
    print('共运行了{}秒'.format(end - start))  # 程序耗时


if __name__ == '__main__':
    run()

```

运行结果：共运行了`99.09104537963867`秒

接着我们来看看通过asyncio+aiohttp的方法的异步爬取，同样的，代码分成三个部分（代码在Python3.6环境运行）


``` python
import asyncio
import time
import aiohttp
import requests


async def get_content(link):
    async with aiohttp.ClientSession() as session:
        response = await session.get(link)
        content = await response.read()
        return content


async def downloader(img):
    content = await get_content(img[1])
    with open('D:\\MY\\雪中\\lists1\\' + str(img[0]) + '.jpg', 'wb') as f:
        f.write(content)
    print('下载成功!' + str(img[0]))


def run():
    start = time.time()  # 记录起始时间戳
    base_url = 'https://www.zcool.com.cn/work/content/show?p=2&objectId=6455837'
    r = requests.get(base_url)
    image_list = r.json()['data']['allImageList']
    loop = asyncio.get_event_loop()
    tasks = [asyncio.ensure_future(downloader((i, image['url']))) for i, image in enumerate(image_list)]
    loop.run_until_complete(asyncio.wait(tasks))
    end = time.time()  # 获取结束时间戳
    print('共运行了{}秒'.format(end - start))  # 程序耗时


if __name__ == '__main__':
    run()

```

运行结果：共运行了`56.29711127281189`秒，跟上面的同步代码比较，节省了一半左右的时间，这里的每张图片大小在几M

那么我们来看看代码是如何执行的

这里需要注意的是`run`方法中增加了`loop = asyncio.get_event_loop()`，就是创建一个`event_loop`事件循环，这个事件循环叫`loop`，然后我们要做的就是把`协程`放到`loop事件循环`中，协程对象不能直接运行，在注册事件循环的时候，其实是`run_until_complete(coroutine)`方法将协程包装成为了一个任务`task`对象，`task`对象是`Future`类的子类，保存了协程运行后的状态，用于未来获取协程的结果

那么哪来的`协程`呢？这里以`async`关键字定义的方法就是一个`协程`，这个方法在调用时不会立即被执行，而是返回一个协程对象，协程对象需要注册到事件循环，由事件循环调用

``` python
tasks = [asyncio.ensure_future(downloader((i, image['url']))) for i, image in enumerate(image_list)]
```

这行代码的作用实际上就是通过循环生成多个`downloader`协程，传入一个元组类型的参数，这个元祖中包含两个参数，然后通过`asyncio.ensure_future()`方法返回`task`任务(一个协程对象就是一个原生可以挂起的函数，任务则是对协程进一步封装，其中包含了任务的各种状态，通过`asyncio.ensure_future(coroutine)`创建`task`,同样的可以通过`loop.create_task(coroutine)`创建`task`)，最终得到一个`tasks`任务列表

``` python
loop.run_until_complete(asyncio.wait(tasks))
```

而这行代码说实话我没有深入的理解，就大概理解为事件循环执行`run_until_complete`方法，等到其中的每一个可等待对象都执行完毕，对于其中的每一个对象，去执行`downloader协程`，运行到`await get_content(img[1])`时挂起当前的协程，去执行`get_content()`这个协程，引用了`aiohttp`里的`ClientSession`类，建立 了一个`session`对象，通过`session.get()`得到`response`以及最后的`content`并最终返回`content`

然后继续执行`downloader`中的保存图片部分

以上就是用asyncio+aiohttp的简单的异步爬虫实例，很明显相较于一般的爬虫能节省很多时间啦

## 参考

[* asyncio.wait如何理解](https://segmentfault.com/q/1010000021653480?utm_source=tag-newest)
[asyncio.wait实现的异步](https://blog.csdn.net/haeasringnar/article/details/100181793)
[* python中重要的模块--asyncio](https://www.cnblogs.com/zhaof/p/8490045.html)
[* 【Python3爬虫】使用异步协程编写爬虫](https://www.cnblogs.com/TM0831/p/10274058.html)


