---
title: Django+uwsgi+Nginx部署到云服务器
tags: [Django,服务器,uwsgi,Nginx]
comments: true
date: 2020-01-25 19:24:02
permalink:
categories: Django
description:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-01-25_11.jpg">

<!-- more -->
### 前言

当我们在本地运行Django项目

``` python
python3 manager runserver
```

但是，这只适用于Django的开发模式，只支持单用户访问，要想部署到服务器上供大量用户访问，综合网上的许多资料，在此罗列几种不同的Django部署方案

工具：CentOS7腾讯云服务器、 Python3.6、 MySQL5.7、 Django2.2.7、 uwsgi2.0.18、 Nginx1.16.1

### Django(Git)+uwsgi+Nginx

#### 概念
在`python web`开发中，我们经常使用uwsgi配合nginx部署一个web框架，如Django或flask。同时我们又会说，框架和web服务器之间要符合WSGI协议，想更深入理解WSGI和uwsgi的可以看[这里](https://www.jianshu.com/p/679dee0a4193)

Nginx就是一个web服务器，Django或flask就是web框架，只要web服务器和web框架满足WSGI协议，它们就能相互搭配。所以WSGI只是一个协议，一个约定。而不是python的模块、框架等具体的功能

uWSGI，则是实现了WSGI协议的一个web服务器。即用来接受客户端请求，转发响应的程序。实际上，一个uWSGI的web服务器，再加上Django这样的web框架，就已经可以实现网站的功能了。那为什么还需要Nginx呢？

一个普通的个人网站，访问量不大的话，当然可以由uWSGI和Django构成。但是一旦访问量过大，客户端请求连接就要进行长时间的等待。这个时候就出来了分布式服务器，我们可以多来几台web服务器，都能处理请求。但是谁来分配客户端的请求连接和web服务器呢？Nginx就是这样一个管家的存在，由它来分配。这也就是由Nginx实现反向代理，即代理服务器

#### 概述

首先客户端请求服务资源，
nginx作为直接对外的服务接口，接收到客户端发送过来的http请求，会解包、分析，
如果是静态文件请求就根据nginx配置的静态文件目录，返回请求的资源，
如果是动态的请求，nginx就通过配置文件，将请求传递给uWSGI；uWSGI 将接收到的包进行处理，并转发给wsgi，
wsgi根据请求调用django工程的某个文件或函数，处理完后django将返回值交给wsgi，
wsgi将返回值进行打包，转发给uWSGI，
uWSGI接收后转发给nginx，nginx最终将返回值返回给客户端(如浏览器)
*注:不同的组件之间传递信息涉及到数据格式和协议的转换*

**作用**

1. 第一级的nginx并不是必须的，uwsgi完全可以完成整个的和浏览器交互的流程；
2. 在nginx上加上安全性或其他的限制，可以达到保护程序的作用；
3. uWSGI本身是内网接口，开启多个work和processes可能也不够用，而nginx可以代理多台uWSGI完成uWSGI的负载均衡；
4. django在debug=False下对静态文件的处理能力不是很好，而用nginx来处理更加高效。

#### 步骤

##### 安装Python3

在服务器上安装Python3等依赖

``` python
# 进入home目录
cd ~

# 安装相关库
yum -y groupinstall "Development tools"
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel
yum -y install gcc
yum install -y libffi-devel zlib1g-dev
yum install zlib* -y
 
# 下载python3.6安装包
wget https://www.python.org/ftp/python/3.6.8/Python-3.6.8.tgz
 
# 创建一个文件夹
mkdir /usr/local/python3
 
# 解压安装包
tar -zxvf Python-3.6.8.tgz
 
# 进入解压后的目录
cd Python-3.6.8
 
# 配置，使安装路径为/usr/local/python3.6
# 第一个指定安装的路径,不指定的话,安装过程中可能软件所需要的文件复制到其他不同目录,删除软件很不方便,复制软件也不方便.
# 第二个可以提高python10%-20%代码运行速度. 参考：https://blog.csdn.net/whatday/article/details/98053179
# 第三个是为了安装pip需要用到ssl,后面报错会有提到.
./configure --prefix=/usr/local/python3 --enable-optimizations --with-ssl
 
# 编译，安装 时间较长 
make && make install
 
# 创建软连接
ln -s /usr/local/python3/bin/python3 /usr/local/bin/python3
ln -s /usr/local/python3/bin/pip3 /usr/local/bin/pip3
 
# 更新pip
pip3 install --upgrade pip

```

##### 安装mysql

参考[腾讯云Centos7 安装Mysql5.7](https://www.cnblogs.com/yesicando/p/11840803.html)

##### 分支deploy

本地创建并切换到分支deploy

``` git
git checkout -b deploy
```
注：撤回commit

``` git
git reset --soft HEAD^
```

提交前注意在Django项目，配置setting.py中设置：

``` python
DEBUG = False

ALLOWED_HOSTS = ['你的服务器IP或者域名', 'localhost', '127.0.0.1']
```

然后提交本地Django代码至github项目的deploy分支


##### 拉取Django项目

```
git clone https://github.com/xxx/xxx.git
```

[关于在github上 下载源码 clone 非 master 分支的代码](https://blog.csdn.net/u012302552/article/details/80680497)

拉取后默认是master分支，需切换到deploy分支
```
git checkout deploy
```

##### 安装Django+uwsgi+nginx

这样在你的服务器上就有了Django项目的代码，但是我们还没安装Django等第三方库

接着服务器上安装：

``` bash
pip3 install django==2.2.7
pip3 install uwsgi

# 通过yum安装nginx
yum install nginx -y

# 创建软连接
ln -s /usr/local/python3/bin/uwsgi /usr/bin/uwsgi
# ln -s /usr/local/python3/bin/virtualenv /usr/bin/virtualenv
# ln -s /usr/local/python3/bin/gunicorn /usr/bin/gunicorn
ln -s /usr/local/python3/bin/django-admin.py /usr/bin/django-admin
```

##### 测试Django

进入项目根目录

``` python
python3 manage.py runserver
```

我的出现报错：

``` python
django.core.exceptions.ImproperlyConfigured: mysqlclient 1.3.13 or newer is required; you have 0.7.11.None.
```

根据报错安装mysqlclient

``` python
pip3 install mysqlclient
```

又报错：

``` python
ERROR: Command errored out with exit status 1:
     command: /usr/local/python3/bin/python3.6 -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'/tmp/pip-install-p6v1q25n/mysqlclient/setup.py'"'"'; __file__='"'"'/tmp/pip-install-p6v1q25n/mysqlclient/setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' egg_info --egg-base /tmp/pip-install-p6v1q25n/mysqlclient/pip-egg-info
         cwd: /tmp/pip-install-p6v1q25n/mysqlclient/
    Complete output (10 lines):
    /bin/sh: mysql_config: command not found
    Traceback (most recent call last):
      File "<string>", line 1, in <module>
      File "/tmp/pip-install-p6v1q25n/mysqlclient/setup.py", line 18, in <module>
        metadata, options = get_config()
      File "/tmp/pip-install-p6v1q25n/mysqlclient/setup_posix.py", line 53, in get_config
        libs = mysql_config("libs_r")
      File "/tmp/pip-install-p6v1q25n/mysqlclient/setup_posix.py", line 28, in mysql_config
        raise EnvironmentError("%s not found" % (mysql_config.path,))
    OSError: mysql_config not found
    ----------------------------------------
ERROR: Command errored out with exit status 1: python setup.py egg_info Check the logs for full command output.
```

找了找资料，原来需要安装mysqlclient所需依赖，略耗时

``` bash
yum install mysql-devel gcc gcc-devel python-devel
```

再次安装mysqlclient

``` python
pip3 install mysqlclient
```

成功安装，但是再次runserver运行Django 还是报错：

``` python
File "/usr/local/python3/lib/python3.6/site-packages/django/db/backends/mysql/base.py", line 36, in <module>
    raise ImproperlyConfigured('mysqlclient 1.3.13 or newer is required; you have %s.' % Database.__version__)
django.core.exceptions.ImproperlyConfigured: mysqlclient 1.3.13 or newer is required; you have 0.7.11.None.
```

找了找资料，django2.2和pymysql版本不匹配。mysqldb不支持python3

参考[django.core.exceptions.ImproperlyConfigured: mysqlclient 1.3.13 or newer is required; you have 0.9.2](https://blog.csdn.net/weixin_45476498/article/details/100098297)

解决办法：

找到Python安装路劲下的Python36-32\Lib\site-packages\django\db\backends\mysql\base.py文件

``` bash
vi /usr/local/python3/lib/python3.6/site-packages/django/db/backends/mysql/base.py
```

将文件中的如下代码注释即可
``` python
# if version < (1, 3, 3):
#     raise ImproperlyConfigured("mysqlclient 1.3.3 or newer is required; you have %s" % Database.__version__)
```

接着

``` python
python3 manage.py makemigrations

python3 manage.py migrate

python3 manage.py createsuperuser

python3 manage.py runserver
```

期间登录超级管理员却出现CSRF验证失败. 请求被中断.

关闭防火墙试试
``` bash
systemctl stop firewalld.service
```

``` bash
附：
# 一．查看防火墙的状态
systemctl status  firewalld

# 或者
firewall-cmd --state

# 二．关闭防火墙
systemctl stop firewalld.service

# 禁止防火墙在开机时启动
systemctl disable firewalld.service

# 三，开启防火墙
systemctl start firewalld.service

# 防火墙在开机时启动
systemctl enable firewalld.service

# 重启防火墙
systemctl restart firewalld.service
```

然后就可以登录

##### 测试uwsgi

查看安装的uwsgi版本

``` bash
uwsgi --version
```

编写测试脚本，可以与Django项目放在同一级路径下

``` bash
vim test.py
```

``` python
def application(env, start_response):
    start_response('200 OK', [('Content-Type','text/html')])
    return [b"Hello World"]
```
然后运行

``` bash
uwsgi --http :8008 --wsgi-file test.py
```

然后访问：http://服务器IP:8008/

出现`Hello World`则成功

##### 测试uwsgi+Django

执行如下命令来检验uwsgi是否能与django项目成功结合
``` bash
uwsgi --http :8008 --chdir /home/LVideo --wsgi-file LVideo.wsgi.py --master --processes 4 --threads 2 --stats 127.0.0.1:9192
```

常用选项如下所示：
```
http       ：协议类型和端口号
processes  ：开启的进程数量
workers    ：开启的进程数量，等同于processes（官网的说法是spawn the specified number ofworkers / processes）
chdir      ：指定运行目录（chdir to specified directory before apps loading）
wsgi-file  ：载入wsgi-file（load .wsgi file）
stats      ：在指定的地址上，开启状态服务（enable the stats server on the specified address）
threads    ：运行线程。由于GIL的存在，我觉得这个真心没啥用。（run each worker in prethreaded mode with the specified number of threads）
master     ：允许主进程存在（enable master process）
daemonize  ：使进程在后台运行，并将日志打到指定的日志文件或者udp服务器（daemonize uWSGI）。实际上最常用的，还是把运行记录输出到一个本地文件上。
pidfile    ：指定pid文件的位置，记录主进程的pid号。
vacuum     ：当服务器退出的时候自动清理环境，删除unix socket文件和pid文件（try to remove all of the generated file/sockets）

注意：--wsgi-file后面跟的是相对目录
```

访问[http://IP:8008](http://IP:8008)成功，出现你的Django项目的页面

参数太多，可以将其写入ini文件中

我是在Django项目的同级目录下创建lvideo_uwsgi.ini文件，写入如下内容(采用字典格式)

我的`/home`下的文件，LVideo是clone下来的项目：

``` bash
[root@VM_0_14_centos home]# ls
LVideo  lvideo_uwsgi.ini  test.py  uwsgi.log  uwsgi.pid
```

新建lvideo_uwsgi.ini

``` bash
vi lvideo_uwsgi.ini
```

这是参考：

``` python
# lvideo_uwsgi.ini file
[uwsgi]

# Django-related settings
http = :8008
# 真实服务的端口

# Django项目根目录 (绝对路径)
chdir           = /home/LVideo

# wsgi.py文件在项目中的位置
module          = LVideo.wsgi

# process-related settings
# master
master          = true

# 运行的进程数
processes       = 4

# ... with appropriate permissions - may be needed
# chmod-socket    = 664
# clear environment on exit
# 当服务器退出的时候自动清理环境，删除unix socket文件和pid文件
vacuum          = true

# 使进程在后台运行，并将日志打到指定的日志文件或者udp服务器
daemonize = /home/uwsgi.log

# 指定pid文件的位置，记录主进程的pid号
pidfile = /home/uwsgi.pid

# 不记录请求信息的日志,只记录错误以及uWSGI内部消息到日志中
disable-logging = true
```

你可以复制这里的内容，注意修改chdir、module、daemonize、pidfile：

``` python
[uwsgi]

socket          = :8008
chdir           = /home/LVideo
module          = LVideo.wsgi
master          = true
processes       = 4
vacuum          = true
daemonize       = /home/uwsgi.log
pidfile         = /home/uwsgi.pid
disable-logging = true
```

其中的端口有两种，分为：
``` bash
http   =:8008  这是在测试通过浏览器访问时，可以成功
socket =:8008  这是为了与nginx配置时需要的
```
两个颠倒了就会出错，所以浏览器测试完后需要修改回socket

这样保存好后，启动
``` bash
uwsgi --ini lvideo_uwsgi.ini
```
若你的ini文件中是`http   =:8008`则可以通过浏览器访问到8008端口，然后注意修改回`socket   =:8008`

因为我们后面要结合nginx

注：这是配置了daemonize后的uwsgi运行成功的样子
``` bash
[root@VM_0_14_centos home]# uwsgi --ini  lvideo_uwsgi.ini 
[uWSGI] getting INI configuration from lvideo_uwsgi.ini
```

##### 测试Nginx

前面已经通过yum安装了nginx

查看Nginx版本
``` bash
nginx -v
```
然后访问服务器IP就可以看到CentOS的欢迎界面？我TM也不知道为什么不是Nginx的欢迎界面...(好像说是index.html的问题)

看看有没有进程占用80端口

``` bash
lsof -i:80
```

这里有
```
kinsing   11406 root    5u  IPv4 3066592      0t0  TCP VM_0_14_centos:47296->ip255.ip-139-99-50.net:http (ESTABLISHED)
kinsing   11406 root    7u  IPv4 3068905      0t0  TCP VM_0_14_centos:48120->ip255.ip-139-99-50.net:http (ESTABLISHED)
kdevtmpfs 11537 root   15u  IPv4 3021919      0t0  TCP VM_0_14_centos:46146->45.89.230.240:http (ESTABLISHED)
kdevtmpfs 11537 root  175u  IPv4 3068497      0t0  TCP VM_0_14_centos:42542->178.170.189.5:http (SYN_SENT)
kdevtmpfs 11537 root  176u  IPv4 3068779      0t0  TCP VM_0_14_centos:42604->178.170.189.5:http (SYN_SENT)
kdevtmpfs 11537 root  177u  IPv4 3068921      0t0  TCP VM_0_14_centos:42656->178.170.189.5:http (SYN_SENT)
```

挖矿病毒(我买的腾讯的服务器)，等会再处理，说明80端口被占，那么我们就配置为8088端口

输入`nginx -t` 看看nginx.conf在哪

``` bash
[root@VM_0_14_centos ~]# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

然后修改

``` bash
vi /etc/nginx/nginx.conf
```

把server部分用下面的替代

``` bash
server {
    listen       8088;
    server_name  localhost;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    charset UTF-8;
    # 这里存放日志文件
    access_log  /var/log/nginx/LVideo_access.log;
    error_log   /var/log/nginx/LVideo_error.log;

    client_max_body_size 75M;
    location / {
    	# 你的uwsgi_params文件的路径
        include /etc/nginx/uwsgi_params;
        # 你的uwsgi端口
        uwsgi_pass 127.0.0.1:8008;
        # 链接超时时间
        uwsgi_read_timeout 30;
    }
}
```

保存

看看访问8088端口有没有页面

若出现`502 Bad Gateway nginx/1.16.1`

先输入以下命令看看是否有已存在的uwsgi或者nginx进程

``` bash
ps -ef | grep uwsgi

ps -ef | grep nginx
```

有的话可以杀死

``` bash
killall -9 uwsgi

killall -9 nginx
```

然后重新运行uwsgi和nginx

``` bash
uwsgi --ini lvideo_uwsgi.ini

systemctl start nginx.service
```

然后一定一定可以看到8088端口的页面，我发四(前前后后调整了10多次)！！！

如果你的项目界面变得非常low，那么是因为你还没配置nginx解析静态文件

在nginx.conf的`location / {}`前面加上Django项目静态文件夹的路径

```
location /static/ {
	    # 你的static的绝对路径
        alias /home/LVideo/LVideo/static/;
    }
```

##### uwsgi+nginx进程

在启动uwsgi时，如果指定了pid，可以通过pid停止uwsgi，如果没指定，直接kill uwsgi的进程id，会导致uwsgi重启，无法关闭成功


附：
``` bash
# nginx开机自启动
systemctl enable nginx.service

# 终止uwsgi方法
# 1、未指定 daemonize：
Ctrl+c（快捷键可能有所不同）

# 2、指定daemonize和pidfile：
uwsgi --stop uwsgi.pid

# 3、指定daemonize，但未指定pidfile 通过ps，查看uwsgi相关进程
ps aux|grep uwsgi
# kill pid会发送SIGTERM，只会导致重启，而不是结束掉。需要发送SIGINT或SIGQUIT，对应着是INT才可以
killall -s INT /usr/local/bin/uwsgi

# 若出现
-bash: killall: command not found

# 则
# debian、ubuntu系统下：
  apt-get install psmisc

# centos 下：
  yum install psmisc

# 进程查看及杀死：
lsof -i:80

ps -ef | grep nginx

killall -9 nginx
```

##### 提交代码

更新服务器Django代码到github
``` bash
find / -name id_rsa
```

没有ssh钥匙

在 cd ~ 下 :`ssh-keygen -t rsa -C "xxx@xx.com"`

一路回车

可以看到：`Enter file in which to save the key (/root/.ssh/id_rsa)`

``` bash
cat /root/.ssh/id_rsa.pub
```
复制内容到github上即可

### Django(Git)+uwsgi+Nginx+venv

### 参考
#### 一
[django项目部署到服务器+虚拟环境](https://blog.csdn.net/mjp_erhuo/article/details/80361524)
[解决nginx+uwsgi部署Django的所有问题](https://blog.csdn.net/baidu_35085676/article/details/77160040)
[如何把本地的Django项目部署到服务器（亲测）](https://blog.csdn.net/qq_30501975/article/details/80423547)
[centos6.5下配置django+uwsgi+nginx](https://blog.csdn.net/huanbia/article/details/54630180)
[centos下配置django、uwsgi和nginx（亲测成功）](https://blog.csdn.net/chenKFKevin/article/details/78297666)
[Python+Django+Nginx+Uwsgi（史上最全步骤）](https://blog.csdn.net/qq_42314550/article/details/81805328)
[uWSGI+django+nginx的工作原理流程与部署历程](https://blog.csdn.net/c465869935/article/details/53242126)
[Linux vim命令](https://www.cnblogs.com/shanwu369/p/10977244.html)
[uwsgi、wsgi和nginx的区别和关系!!](https://blog.csdn.net/CHENYAoo/article/details/83055108)
#### 二
[linux如何彻底杀掉uwsgi进程](https://blog.csdn.net/weixin_33127753/article/details/87880080)
[uWSGI的安装与配置（官网摘录）](https://blog.csdn.net/chenggong2dm/article/details/43937433)
[centos7 nginx安装/启动/进程状态/杀掉进程](https://www.cnblogs.com/hailang8/p/8664413.html)
[nginx报502错误，日志connect() failed (111: Connection refused) while connecting to upstream的解决](https://blog.csdn.net/weixin_37599606/article/details/81296178)
[Linux 下建立 Git 与 GitHub 的连接并克隆到本地](https://blog.csdn.net/angus_01/article/details/80118088)
#### 三
[使用Django + Vue.js快速而优雅地构建前后端分离项目](https://blog.csdn.net/liuyukuan/article/details/70477095)
