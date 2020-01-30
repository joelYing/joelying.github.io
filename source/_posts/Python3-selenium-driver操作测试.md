---
title: Python3+selenium+driver操作测试
tags:
  - Python
  - Selenium
comments: true
categories: Selenium
description: 我们一路奋战，不是为了改变世界，而是为了不让世界改变我
abbrlink: fefc1dba
date: 2020-01-22 16:58:48
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-01-22_4_2.jpeg">

<!-- more -->

### 前言
因为要用到Selenium的暴力操作某盘，便写一篇记录一下

#### Selenium
Selenium 是一个用于Web应用程序测试的工具。Selenium测试直接运行在浏览器中，就像真正的用户在操作一样。支持的浏览器包括IE（7, 8, 9, 10, 11），Mozilla Firefox，Safari，Google Chrome，Opera等。

Selenium 是一套完整的web应用程序测试系统，包含了测试的录制（selenium IDE）,编写及运行（Selenium Remote Control）和测试的并行处理（Selenium Grid）。

Selenium的核心Selenium Core基于JsUnit，完全由JavaScript编写，因此可以用于任何支持JavaScript的浏览器上。Selenium可以模拟真实浏览器，自动化测试工具，支持多种浏览器，爬虫中主要用来解决JavaScript渲染问题。

#### PhantomJS
PhantomJS是一个基于webkit的javaScript API。它使用QtWebKit作为它核心浏览器的功能，使用webkit来编译解释执行javaScript代码。任何你可以基于在webkit浏览器做的事情，它都能做到。它不仅是个隐性的浏览器，提供了诸如css选择器、支持wen标准、DOM操作、json、HTML5等，同时也提供了处理文件I/O的操作，从而使你可以向操作系统读写文件等。phantomJS的用处可谓非常广泛诸如网络监测、网页截屏、无需浏览器的wen测试、页面访问自动化等。



[下载地址](http://phantomjs.org/download.html)


### 安装

#### 安装selenium
``` python
pip install selenium
```

安装低指定版本selenium
``` python
pip install selenium==2.48.0
```

#### 安装phantomJS
[下载](http://phantomjs.org/download.html)后，解压到任意一个目录中，右击我的电脑->属性->高级系统设置->环境变量->编辑系统变量中的path，把plantomJS.exe添加到环境变量中即可

#### 安装Chromedriver
chromedriver的版本一定要与Chrome的版本一致，不然就不起作用
有两个下载地址：
1、*[http://chromedriver.storage.googleapis.com/index.html](http://chromedriver.storage.googleapis.com/index.html)*
2、*[https://npm.taobao.org/mirrors/chromedriver/](https://npm.taobao.org/mirrors/chromedriver/)*

首先需要查看你的Chrome版本，在浏览器中输入chrome://version/

下载对应版本号的压缩包，如` 79.0.3945.130`则对应可以下载
```
79.0.3945.16
79.0.3945.36
```
没有64位的就下个32位的

解压压缩包，找到chromedriver.exe复制到chrome的安装目录`C:\Program Files (x86)\Google\Chrome\Application`（复制chromedriver.exe文件的路径并加入到电脑的环境变量中去）

我目前的情况是将chromedriver.exe文件拖到Python的Scripts目录下，同时chromedriver.exe也在`C:\Program Files (x86)\Google\Chrome\Application`但是没有把这个路径放在环境变量，然后可以运行

完成后在cmd下输入chromedriver验证是否安装成功
```
Starting ChromeDriver 79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}) on port 9515
Only local connections are allowed.
Please protect ports used by ChromeDriver and related test frameworks to prevent access by malicious code.
```


### 使用
Selenium基本使用看这里 [https://www.jianshu.com/p/3aa45532e179](https://www.jianshu.com/p/3aa45532e179)

#### phantomJS使用
``` python
browser = webdriver.PhantomJS()
```

使用时如果出现下面的报错信息
```
UserWarning: Selenium support for PhantomJS has been deprecated, please use headless versions of Chrome or Firefox instead
  warnings.warn('Selenium support for PhantomJS has been deprecated, please use headless '
```

意思是selenium已经放弃PhantomJS了，建议使用火狐或者谷歌无界面浏览器

解决方案，降低selenium版本

``` python
pip install selenium==2.48.0
```

#### Chromedriver使用
[可以看看Python3+Selenium 配置Chrome选项](https://www.cnblogs.com/clement-jiao/p/10889234.html)



正常模式
``` python
driver = webdriver.Chrome()
driver.get('http://www.baidu.com/')
print (driver.page_source)
```

chromedriver无界面模式
``` python
chrome_options = webdriver.ChromeOptions()
# 无头浏览器选项
chrome_options.add_argument('--headless')
# 谷歌文档提到需要加上这个属性来规避bug
chrome_options.add_argument('--disable-gpu')
browser = webdriver.Chrome(chrome_options=chrome_options)
browser.get('http://www.baidu.com/')
print(browser.page_source)
```
或
``` python
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
# 无头浏览器选项
chrome_options.add_argument('--headless')
# 谷歌文档提到需要加上这个属性来规避bug
chrome_options.add_argument('--disable-gpu')
browser = webdriver.Chrome(chrome_options=chrome_options)
browser.get('http://www.baidu.com/')
print(browser.page_source)
```

### 栗子
根据id找到对应的节点并输入密码
``` python
url = 'xxx'
pwd = 'xxx'
browser = webdriver.Chrome()
browser.get(url)
browser.find_element_by_id("xxx").send_keys(pwd)
```
键盘回车
``` python
from selenium.webdriver.common.keys import Keys

browser.find_element_by_id("xxx").send_keys(Keys.ENTER)
```
获取包含多个class名称的tag对象时，如：
`class="g-button g-button-blue"`，（中间有空格），建议使用
``` python
browser.find_element_by_css_selector(".g-button.g-button-blue")
```
或者
``` python
browser.find_element_by_css_selector("[class='g-button g-button-blue']")
```
模拟点击
``` python
browser.find_element_by_id("xxx").click()
```