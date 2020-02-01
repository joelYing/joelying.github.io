---
title: Docker学习记录
tags:
  - Docker
comments: true
categories: Docker
description: 它只是你的一条狗，但你却是它的一生。 -- 《忠犬八公的故事》
abbrlink: ccc89ac0
date: 2020-01-31 13:17:12
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-02-01_2.jpg">

<!-- more -->

### 概念

Docker 使用 Google 公司推出的 Go 语言进行开发实现（k8s也是Go语言），基于 Linux 内核的cgroup，namespace，以及 AUFS 类的 Union FS 等技术，对进程进行封装隔离，属于操作系统层面的虚拟化技术。由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。最初实现是基于 LXC，从 0.7 版本以后开始去除 LXC，转而使用自行开发的 libcontainer，从 1.11 开始，则进一步演进为使用 runC 和 containerd

docker应该是目前最流行的容器解决方案，它的思想来源于集装箱，集装箱的作用是什么？封存、隔离货物。我们把海鲜和水果分别装在不同的集装箱里，由同一艘大船去运输。这是不是要比分两艘船来的方便、快捷、高效呢。举例：公司的开发环境和生产环境不一致，开发出来的程序在开发人员本地能运行，上了生产却运行不了。你懂得，这个时候就要开始甩锅了。这中情况如果用docker就不一样了，我们直接把开发环境build成一个镜像，然后由运维去把这个docker镜像部署上就OK了。环境一毛一样


如下图所示，运行一个容器的过程：

* 去registry中拉取镜像，如果本地已经存在，则直接使用本地镜像
* 根据镜像创建容器
* 给容器分配文件系统，并在最上层挂载一个可读写层。
* 分配网络接口，创建一个允许容器和宿主机访问得网络接口
* 运行指定的程序
* 收集容器的运行状态

![](http://image.joelyings.com/2020-02-01_1.png)

docker，最核心的是理解三个概念，分别是：仓库（Registry）、镜像（image）和容器（Container）

<p id="div-border-left-blue">docker-io, docker-engin</p>
是以前早期的版本，版本号是 1.x，默认centos7 安装的是docker-io，最新版是 1.13

<p id="div-border-left-blue">docker-ce</p>
是社区版本，适用于刚刚开始docker 和开发基于docker研发的应用开发者或者小型团队。Ubuntu默认安装的是docker-ce

<p id="div-border-left-blue">docker-ee</p> 
是docker的企业版，适用于企业级开发，同样也适用于开发、分发和运行商务级别的应用的IT 团队


### 安装

[Docker手册](https://docs.docker.com/install/linux/docker-ce/centos/)

Docker 要求 CentOS 系统的内核版本高于 3.10 ，验证你的CentOS 版本是否支持 Docker 

``` bash
uname -a
```

``` bash
[root@VM_0_14_centos ~]# uname -a
Linux VM_0_14_centos 3.10.0-1062.9.1.el7.x86_64 #1 SMP Fri Dec 6 15:49:49 UTC 2019 x86_64 x86_64 x86_64 GNU/Linux
```

CentOS 7，正好可以支持

安装命令

``` bash
yum install docker-ce -y
```

``` bash
[root@VM_0_14_centos ~]# yum install docker-ce -y
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
...   
No package docker-ce available.
Error: Nothing to do
```

需要先安装yum源

``` bash
# 安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的

yum install -y yum-utils device-mapper-persistent-data lvm2
```

``` bash
# 配置Docker的yum源
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

[root@VM_0_14_centos ~]# yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
Loaded plugins: fastestmirror, langpacks
adding repo from: https://download.docker.com/linux/centos/docker-ce.repo
grabbing file https://download.docker.com/linux/centos/docker-ce.repo to /etc/yum.repos.d/docker-ce.repo
repo saved to /etc/yum.repos.d/docker-ce.repo
```

可以查看所有仓库中所有docker版本，并选择特定版本安装

``` bash
yum list docker-ce --showduplicates | sort -r
```

选择下载最新版本

``` bash
yum install docker-ce-19.03.5 -y
```

安装成功

### 常用命令

启动Docker

``` bash
systemctl start docker
```

加入开机启动

``` bash
systemctl enable docker
```

查看版本，验证是否安装成功(有client和service两部分表示docker安装启动都成功了)

``` bash
docker version
```

``` bash
[root@VM_0_14_centos ~]# docker version 
Client: Docker Engine - Community
 Version:           19.03.5
 API version:       1.40
 Go version:        go1.12.12
...

Server: Docker Engine - Community
 Engine:
  Version:          19.03.5
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.12
...
```

查看Docker的使用信息

``` bash
docker info
```

搜索镜像

``` bash
docker search images_name

# NAME列：没有斜线分隔的名字称为顶级仓库，一般属于docker hub官方所有；有斜线分隔符的称为用户仓库或者是项目仓库，docker hub官方允许用户个人注册账户建立自己的仓库。
# DESCRIPTION列：仓库描述
# STARS列：用户表示“赞”的个数 
```

下载镜像

``` bash
docker pull images_name
```

查看当前镜像列表 

``` bash
docker images 
```

更多命令，参考：[这里](http://www.docker.org.cn/dockerppt/106.html)

``` bash
docker ps                       : 查看当前正在运行的容器
docker ps -a                    : 查看所有容器的状态
docker start/stop id/name       : 启动/停止某个容器
docker attach id                : 进入某个容器(使用exit退出后容器也跟着停止运行)
docker exec -ti id              : 启动一个伪终端以交互式的方式进入某个容器（使用exit退出后容器不停止运行）
docker rm id/name               : 删除某个容器
docker rmi id/name              : 删除某个镜像

# 复制ubuntu容器并且重命名为test且运行，然后以伪终端交互式方式进入容器，运行bash
docker run --name test -ti ubuntu /bin/bash  

# 通过当前目录下的Dockerfile创建一个名为soar/centos:7.1的镜像
docker build -t soar/centos:7.1 .  

# 以镜像soar/centos:7.1创建名为test的容器
# 并以后台模式运行，并做端口映射到宿主机2222端口，P参数重启容器宿主机端口会发生改变
docker run -d -p 2222:22 --name test soar/centos:7.1  
```

### 容器管理

命令帮助

``` bash
docker run --help

-d                   # 后台运行容器.
-i                   # 使用交互式访问容器.
-t                   # 分配一个终端，需要与-i结合使用.
--name               # 给容器分配个名字.
--network string     # 使容器加入到一个网络，如不指定，默认就是加到bridge网络（可以使用docker network ls查看），使用docker0的虚拟网卡.
--rm                 # 容器一停，就自动删除.
```

直接创建、启动并登入容器（启动容器的镜像可以不用提前下载，执行run命令的时候会自动下载）
``` bash
docker run --name bbox -it busybox:latest
```

启动一个容器：

``` bash
# 如果容器是一个后台守护进程，那直接start就可以了，如果需要直接进入交互式接口，需要加-ai的参数
docker start -ai bbox 
```

停止一个容器：

``` bash
# stop和kill区别就是：stop是发送15的信号，kill是发送9的信号。kill是强制杀死，有丢失数据的可能，所以一般不建议使用。
docker stop bbox
```

删除一个容器：

``` bash
docker rm bbox 
```

启动一个后台运行的容器：

``` bash
docker run --name web01 -d nginx:1.14-alpine 

docker ps -a

docker inspect web01 | grep IPAddress
```

登入后台运行的容器：

``` bash
docker exec -it web01 /bin/bash
```

查看容器访问日志：

``` bash
# 一般情况下容器只会运行程序这一个进程，日志都是保存在于宿主机上的，可以用下面命令查看。
docker logs web01 
```

### Django镜像

所谓仓库，其实是个镜像仓库，里面有很多别人已经打包好的镜像，可以直接使用docker，pull命令将仓库中的镜像拉到本地，默认的仓库Docker的官方仓库[Docker Hub Registry](https://hub.docker.com/)

因为墙的缘故，官方仓库的速度会比较慢，可以配一个官方的中国加速镜像，方法是：修改`/etc/docker/daemon.json`，加上如下的键值:

``` bash /etc/docker/daemon.json
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

之后重启docker服务即可生效

#### 基于Python3容器制作新的Django镜像

[Python镜像](https://hub.docker.com/_/python?tab=description)

在这里找到想要下载的镜像

``` bash ~
# 下载
docker pull python:3.6.10-alpine

# 后台运行
docker run --name django_v1 -itd python:3.6.10-alpine

# 登录容器
docker exec -it django_v1 sh

# 退出
exit
```

这里如果用`/bin/bash`会报错：
``` bash
[root@VM_0_14_centos ~]# docker exec -it django_v1 /bin/bash
OCI runtime exec failed: exec failed: container_linux.go:346: starting container process caused "exec: \"/bin/bash\": stat /bin/bash: no such file or directory": unknown
```

因为：

我们一般可能会在容器启动后进入容器，常用的是`docker attach 镜像id`，但是启动镜像的时候如果没有带 参数 -it的话，attach进去后可能是日志界面，并不能执行命令。所以我们会用`docker exec -it 镜像id /bin/bash/`

**平常的容器一般都可以执行/bin/bash，但是alpine没有，改成`docker exec -it 镜像id sh`就好了**

进入容器后安装其他依赖
``` bash
cd ~

mkdir .pip

vi .pip/pip.conf

# 添加
[global]
index-url = http://mirrors.aliyun.com/pypi/simple/
# 添加为信任的host
[install]
trusted-host = mirrors.aliyun.com

# 保存
# 安装yum
wget http://yum.baseurl.org/download/3.2/yum-3.2.28.tar.gz
tar xvf yum-3.2.28.tar.gz

...

pip3 install django==2.2.7
pip3 install uwsgi

# 通过yum安装nginx
yum install nginx -y

# 创建软连接
ln -s /usr/local/python3/bin/uwsgi /usr/bin/uwsgi
ln -s /usr/local/python3/bin/django-admin.py /usr/bin/django-admin
```
这就有点麻烦，这个容器中很多Linux命令都没有，需要你自己手动安装很多东西，所以暂时不考虑这种方式


#### 基于Dockerfile制作Django镜像

在需要部署的Django项目的根目录下，添加三个文件`Dockerfile`，`requirements.txt`，`pip conf`

FROM python:3.6 这里指定 Python 版本为目前稳定的 python3.6

``` [] Dockerfile
FROM python:3.6
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY pip.conf /root/.pip/pip.conf
COPY requirements.txt /usr/src/app/
RUN pip install -r /usr/src/app/requirements.txt
RUN rm -rf /usr/src/app
COPY . /usr/src/app
CMD [ "python3", "./manage.py", "runserver", "0.0.0.0:8089"]
```

使用镜像 pip install 相关依赖

``` [] pip.conf
[global]
index-url = http://mirrors.aliyun.com/pypi/simple/
extra-index-url= https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host=
	mirrors.aliyun.com
	pypi.tuna.tsinghua.edu.cn
```

通过这个命令即可生成requirements.txt
``` bash
pip3 freeze > requirements.txt
```

``` [] requirements.txt
...
```

同样在Django根目录下，也就是Dockerfile文件所在的目录

``` bash
docker build -t my_django:v1.0 .
```

其中`-t my_django:v1.0`表示打包的镜像名为`my_django`，tag为`v1.0`，前面说过，tag是可以任意命名的，不一定要是这种格式，注意命令的最后有一个`.`，这个表示打包的上下文（其实就是Dockerfile所在目录）是在当前目录，然后目录下的Dockerfile就会被编译执行

执行完毕后运行`docker images`就会发现多了一个`my_django`镜像

若build过慢，我的是腾讯云下使用的`centos7`服务器，可以

``` bash /etc/docker/daemon.json
# 使用腾讯云dockerhub加速器
# 创建或修改 /etc/docker/daemon.json 文件，并添加如下：

{
   "registry-mirrors": [
       "https://mirror.ccs.tencentyun.com"
  ]
}
```

依次执行以下命令，重新启动 Docker 服务
``` bash
systemctl daemon-reload
systemctl restart docker
```

执行`docker info`命令，返回结果中包含以下内容，则说明配置加速成功
``` bash
Registry Mirrors:
 https://mirror.ccs.tencentyun.com
```

生成镜像成功
``` bash
...

 ---> ec6c706a5f6e
Step 7/9 : RUN rm -rf /usr/src/app
 ---> Running in 318cc576230f
Removing intermediate container 318cc576230f
 ---> 21b97e82ebf7
Step 8/9 : COPY . /usr/src/app
 ---> 793452ffa1d7
Step 9/9 : CMD [ "python3", "./manage.py", "runserver", "0.0.0.0:8089"]
 ---> Running in a3448d5b9541
Removing intermediate container a3448d5b9541
 ---> f5bb78cebbc8
Successfully built f5bb78cebbc8
Successfully tagged my_django:v1.0
```

**开启容器**

这里的`8089`由上面的`Dockerfile`决定
这里的 xxx.xxx.xxx.xxx 为自己服务器公网IP地址
``` bash
# http://xxx.xxx.xxx.xxx:8089
docker run -it --rm -p 8089:8089 --name django_v1 my_django:v1.0
# 或者 http://xxx.xxx.xxx.xxx:8000（端口号随意映射，但要注意开启对应安全组）
docker run -it --rm -p 8000:8089 --name django_v1 my_django:v1.0
```

结果报mysqlclient的错：
``` bash
...mysqlclient 1.3.13 or newer is required; you have 0.7.11.None
```

因为是容器中的文件问题，所以只好到容器中修改

``` bash
# 后台运行
docker run --name django_v1 -d my_django:v1.0
# 登录容器
docker exec -it django_v1 sh

find / -name base.py

# 因为没有vim以及vi，所以得安装，时间有点久
apt-get update
apt-get install vim

vim /usr/local/lib/python3.6/site-packages/django/db/backends/mysql/base.py
```

修改如下，这两行注释掉：
``` python
# if version < (1, 3, 3):
#     raise ImproperlyConfigured("mysqlclient 1.3.3 or newer is required; you have %s" % Database.__version__)
```

然后exit

为了区别，并重新运行添加端口，commit一个新的my_django镜像

``` bash
# docker commit containerID/name images
docker commit -a 'joel' django_v1 my_django:v2.0
```

现在又多了一个镜像

``` bash
[root@VM_0_14_centos LVideo]# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
my_django           v2.0                82eb6e8ad0cc        3 minutes ago       1.08GB
my_django           v1.0                f5bb78cebbc8        About an hour ago   1.03GB
python              3.6                 62f74e9ce5f1        6 days ago          914MB
```

我们可以将镜像提交到`docker hub`

注册hub.docker.com的账号，点击"Repositories"菜单，然后点击"Create Repository +"来创建一个仓库，创建完成后浏览器的窗口不要关闭

``` bash
docker login -u joelying
Password: 
Login Succeeded
# 验证成功，开始进行push操作，此处加了tag，如果不加tag，就是将此镜像的所有版本都push上去
docker push joelying/my_django:v2.0
```

若出现

``` bash
denied: requested access to the resource is denied
```

实际上是因为在将镜像push到自己新建的账户之前，要用docker tag重命名一下，将镜像命名`你的用户名/镜像名`这种形式，不然会push认证不通过，如：
``` bash
[root@VM_0_14_centos LVideo]# docker tag my_django:v2.0 joelying/my_django:v2.0 

[root@VM_0_14_centos LVideo]# docker images
REPOSITORY           TAG                 IMAGE ID            CREATED             SIZE
joelying/my_django   v2.0                82eb6e8ad0cc        15 minutes ago      1.08GB
my_django            v2.0                82eb6e8ad0cc        15 minutes ago      1.08GB
...

# 注意时间很久
[root@VM_0_14_centos LVideo]# docker push joelying/my_django:v2.0
```

这下就push成功

![](http://image.joelyings.com/2020-02-01_3.png)


### 参考

[* Centos7下安装Docker（详细的新手装逼教程）](https://www.cnblogs.com/qgc1995/p/9553572.html)
[Centos6.5下安装docker+升级内核+禁用selinux](https://blog.csdn.net/u013282737/article/details/85246755)
[* Docker与Dockerfile极简入门文档（一目了然）](https://blog.csdn.net/qq_33256688/article/details/80319673)
[* docker（三）：docker镜像管理](https://www.cnblogs.com/ccbloom/p/10979440.html)
[* 编写Dockerfile与项目实践+各类项目dockerfile编写](http://www.kekefund.com/2019/07/10/devops-step1-dockerfile/)
[* docker版Django](http://www.kekefund.com/2017/03/30/docker-django/)
[* Python3.6 使用 Docker 快速部署 Django2.0 项目到阿里云服务器上](https://blog.csdn.net/larger5/article/details/81252773)
[包含镜像分享至docker hub](https://www.cnblogs.com/ccbloom/p/10979440.html)
[Docker：发布自己镜像问题denied: requested access to the resource is denied解决方法](https://blog.csdn.net/shoneworn/article/details/80622268)
[linux python3换pip 源](https://www.cnblogs.com/python-xiakaibi/p/10122430.html)
[linux下yum安装的最简方法](https://blog.csdn.net/iamhuanggua/article/details/60140867)
[linux如何安装yum](https://www.cnblogs.com/ct20150811/p/10696635.html)