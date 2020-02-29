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
description:
image:
---

<img class="joel-img" src="">

<!-- more -->

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
    # for image in image_list:
    #     print(image['name'], image['url'])
    loop = asyncio.get_event_loop()
    tasks = [asyncio.ensure_future(downloader((i, image['url']))) for i, image in enumerate(image_list)]
    loop.run_until_complete(asyncio.wait(tasks))
    end = time.time()  # 获取结束时间戳
    print('共运行了{}秒'.format(end - start))  # 程序耗时


if __name__ == '__main__':
    run()
    # 共运行了56.29711127281189秒
```

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
    # 共运行了99.09104537963867秒

```