---
title: Hexo+Github Pages基础版搭建攻略
categories: Hexo
tags:
  - Hexo
  - Clover
comments: true
description: 毕竟有些人，只是遇见，就已经很美好了
abbrlink: 975ad60a
date: 2019-08-13 12:37:09
permalink:
image:
---
<img class="joel-img" src="http://image.joelyings.com/20190904-8.jpg" >

<!-- more -->
### 引子
---
早就有想做一个个人博客的想法，想写些内容放进去，给自己提个醒，也想把过程分享给大家，所以一开始也在CSDN，简书上发了许多，但是没有一种真正的属于自己的空间的感觉

于是借此机会，正式尝试一下通过Hexo+GitHub来搭建一个个人博客，记录如下


### 概念
---
* **Hexo**
Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页，详情可见[官网]([https://hexo.io/zh-cn/](https://hexo.io/zh-cn/)
)
[Hexo]([https://github.com/hexojs/hexo](https://github.com/hexojs/hexo)
)也是GitHub上的开源项目
* **Github Pages**
这里我们用到了GitHub提供的**GitHub Pages**，**完全免费**、**无须自己购买云服务搭建**、**支持多功能**等，是**GitHub Pages**的优势之处，当然也会有一些限制，比如网站大小不能超过1GB等，但是综合来说**GitHub Pages**依旧是中小型博客或项目主页的最佳选项之一（[参考一]([https://sspai.com/post/54608](https://sspai.com/post/54608)
)）
当然**GitHub Pages**也是有着自己的主题，相对来说比较简单，所以官方推荐了使用[Jekyll](https://jekyllrb.com/)进行对博客的丰富
但是这里我就尝试了用Node.js编写的Hexo来搭建，除此之外还有Go 编写的 Hugo，Python 编写的 Pelican，以及更人性化的 Gridea等


### 步骤
---
* GitHub创建个人仓库
* 安装Git
* 安装Node.js
* 安装Hexo
* 将 GitHub Pages 和 Hexo 关联
* 使用图床
* 完成基础版搭建

#### GitHub创建个人仓库
登录到GitHub，如果没有GitHub账号，[注册一个GitHub账号]([https://github.com/join](https://github.com/join)
)，创建一个名为**username.github.io**的新存储库，其中**username**是你的用户名（或组织名称），如下图
![](http://image.joelyings.com/2019-08-13_171326.png)
![](http://image.joelyings.com/2019-08-13_171003.png)
创建成功之后，你就能看到已经生成了这样的一个名称为**''username.github.io''**的仓库

![](http://image.joelyings.com/2019-08-13_171053.png)

#### 安装Git
简单来说Git是开源的分布式版本控制系统，我们网站在本地搭建好了，需要使用Git将项目同步到GitHub上。如果想了解Git的细节，参考[廖雪峰老师的Git教程](https://www.liaoxuefeng.com/wiki/896043488029600/896067074338496
)，在Windows上使用Git，可以从Git官网直接[下载安装程序](https://git-scm.com/downloads)，然后按默认选项安装即可

安装完成后，右键打开**"Git Bash Here"**，蹦出一个类似命令行窗口的东西，就说明Git安装成功！

![](http://image.joelyings.com/2019-08-13_174055.png)

**在打开的窗口中输入命令设置user.name和user.email配置信息**
```
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub注册邮箱"
```
**生成ssh密钥文件**
```
ssh-keygen -t rsa -C "你的GitHub注册邮箱"
```

然后直接三个回车即可，默认不需要设置密码
然后找到生成的.ssh的文件夹中的id_rsa.pub密钥，将内容全部复制，**.ssh**文件一般在**"C盘下\用户文件夹\管理员文件夹"**下

![](http://image.joelyings.com/2019-08-13_174644.png)

打开[GitHub>Settings>SSH and GPG keys]([https://github.com/settings/keys](https://github.com/settings/keys)
)页面，新建"New SSH Key"，Title为标题，随意填即可，将刚刚复制的id_rsa.pub内容复制进去，最后点击Add SSH key

![](http://image.joelyings.com/2019-08-13_175102.png)
![](http://image.joelyings.com/2019-08-13_175511.png)
![](http://image.joelyings.com/2019-08-13_175527.png)

在Git Bash中检测GitHub公钥设置是否成功，输入
```
ssh git@github.com
```
![](http://image.joelyings.com/2019-08-13_180039.png)

如上则说明成功

这里之所以设置GitHub密钥原因是，通过非对称加密的公钥与私钥来完成加密，公钥放置在GitHub上，私钥放置在自己的电脑里。GitHub要求每次推送代码都是合法用户，所以每次推送都需要输入账号密码验证推送用户是否是合法用户，为了省去每次输入密码的步骤，采用了ssh，当你推送的时候，git就会匹配你的私钥跟GitHub上面的公钥是否是配对的，若是匹配就认为你是合法用户，则允许推送。这样可以保证每次的推送都是正确合法的

#### 安装Node.js
Hexo基于Node.js，[Node.js下载地址]([https://nodejs.org/en/download/](https://nodejs.org/en/download/)
)下载安装包，注意安装Node.js会包含环境变量及npm的安装，例如版本 10.16.2 (includes npm 6.9.0)，安装后

**检测Node.js是否安装成功**，重新打开Git Bash输入

```
node -v
```

出现对应版本号即说明Node.js安装成功，**检测npm是否安装成功**

```
npm -v
```

至此，安装Hexo的环境已经全部搭建完成

#### 安装Hexo

Hexo就是我们个人博客的框架，这里需要在自己的电脑里创建一个文件夹，这里我命名为HexoGP，Hexo框架与以后你自己发布的网站都在这个文件夹中，创建好后，**进入文件夹中 -> Git Bash Here -> 使用npm命令安装Hexo**
```
npm install -g hexo-cli
```
安装完成后，初始化我们的博客，输入：
```
hexo init HexoGP
```
这是HexoGP文件夹下生成的内容

![](http://image.joelyings.com/2019-08-13_194007.png)

**public**文件夹下包含有发表的博文及主要页面的HTML文件，**source**下是发表博文以及其他页面的内容的md文件，**themes**则是下载的主题文件

为了检测网站的雏形，分别按顺序输入一下三条命令**（新建博客文章、生成网页、在本地预览）**：
```
hexo new test
hexo g
hexo s
```
完成后在浏览器输入: http://localhost:4000/，可以看到我们写出的第一篇博文test

![](http://image.joelyings.com/2019-08-12_103210.png)

这是在Hexo默认主题下的页面

**Hexo常用命令**
```
npm install hexo -g                #安装Hexo
npm update hexo -g                 #升级 
hexo init                          #初始化博客
```

**命令简写**
```
hexo n "我的博客" == hexo new "我的博客"    #新建文章
hexo g == hexo generate                   #生成
hexo s == hexo server                     #启动服务预览
hexo d == hexo deploy                     #部署

hexo server                               #Hexo会监视文件变动并自动更新，无须重启服务器
hexo server -s                            #静态模式
hexo server -p 5000                       #更改端口
hexo server -i 192.168.1.1                #自定义 IP
hexo clean                                #清除缓存，若是网页正常情况下可以忽略这条命令
```


#### 将 GitHub Pages 和 Hexo 关联

在我的HexoGP**根目录里_config.yml文件为站点配置文件，根目录里的themes文件夹，里面也有个_config.yml文件，这个称为主题配置文件**，打开站点配置文件_config.yml修改deploy:
```
deploy:
    type: git
    repository: https://github.com/joelYing/joelYing.github.io.git
    branch: master
```
保存站点配置，其实就是让hexo知道你要把Hexo部署在哪个位置，很明显，我们部署在我们GitHub仓库里，最后安装Git部署插件
```
npm install hexo-deployer-git --save
```

![](http://image.joelyings.com/2019-08-12_104023.png)
红框中的出现是由于fsevent是mac系统的，在win或者Linux下使用了，所以会有警告，忽略即可

fsevent的作用是能够检测文件目录的修改，可以记录恶意软件的非法操作，获取恶意软件的完整路径，删除和修改日期

这时，我们分别再输入三条命令，即可在通过xxx.github.io看到我们的博客了
```
hexo clean
hexo g
hexo d
```

![](http://image.joelyings.com/2019-08-12_104309.png)
**可能出现的问题**
在 **hexo d** 部署的时候
```
$ hexo d
INFO  Deploying: git
INFO  Clearing .deploy_git folder...
INFO  Copying files from public folder...
INFO  Copying files from extend dirs...
fatal: LF would be replaced by CRLF in 2019/08/11/hello-world/index.html
FATAL Something's wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
Error: Spawn failed
    at ChildProcess.<anonymous> (D:\HexoGithubPages\HexoGP\node_modules\hexo-util\lib\spawn.js:52:19)
    at ChildProcess.emit (events.js:198:13)
    at ChildProcess.cp.emit (D:\HexoGithubPages\HexoGP\node_modules\cross-spawn\lib\enoent.js:40:29)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:248:12)


fatal: LF would be replaced by CRLF in index.html
```
这时，需要在 **HexoGP\\.deploy_git\\.git** 目录下的config文件中添加 
```
autocrlf = false
safecrlf = false
```
![](http://image.joelyings.com/2019-08-13_190440.png)

### Hexo个性化配置
---
#### 更换主题

Hexo提供了很多[主题](https://hexo.io/themes/)，我在大概浏览了近200多个主题后使用的是**Clover**主题，相对来说十分简洁，当然更多的可能会选择**NexT**主题，这个主题后续也会学习使用

在HexoGP目录（即自己创建博客的文件夹）中打开Git Bash，输入如下，下载**Clover**主题到HexoGP目录中themes下的clover文件夹中



```
git clone https://github.com/esappear/hexo-theme-clover themes/clover
```

![](http://image.joelyings.com/2019-08-13_200005.png)

这是下载完成后**clover**文件夹下的内容，**_config.yml**就是主题配置文件


注意，若是下载**NexT**主题时，使用**Clone with HTTPS**下载到一半下载失败，实际上可能是因为项目太久，tag资源文件太大
```
git clone https://github.com/iissnan/hexo-theme-next themes/next
```

可以尝试将https地址换成ssh地址来clone，如下，这样就可以成功下载
```
git clone git@github.com:iissnan/hexo-theme-next.git themes/next
```

打开HexoGP文件夹下的_config.yml站点配置文件，将theme修改如下:

```
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: clover
```
再次部署网站，hexo g、hexo d，查看效果，就可以看到使用了**Clover**主题的页面

#### 基础使用
由于使用的是**Clover**主图，参考[https://github.com/esappear/hexo-theme-clover](https://github.com/esappear/hexo-theme-clover)

根据Readme上提示，还需 Add hexo-renderer-sass
```
npm install hexo-renderer-sass --save
```
**Clover**主题可以为文章添加概述以及图片等

![](http://image.joelyings.com/2019-08-13_193430.png)

以及添加新的页面

![](http://image.joelyings.com/2019-08-13_193444.png)

我们来新建一篇博文
```
hexo new "Python爬取视频指南"
```
新建之后我们可以在HexoGP文件夹的source文件下的_posts文件夹下找到**Python爬取视频指南.md**，打开之后就可以用Markdown语法进行编辑

![](http://image.joelyings.com/2019-08-13_194329.png)

**tags**表示这篇文章属于Python标签，**categories**表示属于Python分类，**excerpt**表示概述的内容，**photos**就是文章的封面图片了

这里需要注意的是，最开始处的，无论是**title**后面，还是**excerpt**后面跟的冒号，都**必须是英文的冒号 : ，而且冒号后面必须添加一个空格**，否则在生成部署时会报错

其他的配置等等主要是**在站点配置文件中修改站点基本信息，如网站标题、副标题、网站描述、作者、网站头像外部链接、网站语言、时区等**，以及**Clover**的主题配置文件中修改，另外再根据Readme中的描述就能初步完成，发表一篇博文啦

#### 使用图床

图床，当博文中有图片时，若是少量图片，可以直接把图片存放在source文件夹中，但这显然不合理的，因为图片会占据大量的存储的空间，加载的时候相对缓慢 ，这时考虑把博文里的图片上传到某一网站，然后获得外部链接，使用Markdown语法完成图片的插入，这种网站就被成为图床
```
![图片信息](外部链接)
```
这里介绍**七牛云**的使用方法，还有**又拍云**等大家可以自己尝试，注册实名认证七牛云账号就不过多赘述，实际添加图片可以参考[七牛云存储添加自定义域名和域名解析图文教程](https://boke112.com/3870.html)

这里主要看一下华为云如何**自定义域名 CNAME 解析**，进入华为云控制台，域名注册服务，进入域名解析，选择其中的一个域名，点击解析

![](http://image.joelyings.com/2019-08-13_201218.png)

点击添加记录集

![](http://image.joelyings.com/2019-08-13_1.png)

添加如下
![](http://image.joelyings.com/2019-08-13_2.png)

其中，类型选择 CNAME；主机记录：主域名前面的部分，如image.joelyings.com，这里的主机记录就是 image；值就是七牛云域名信息中 CNAME 的值 image.joelyings.com.qiniudns.com

![](http://image.joelyings.com/2019-08-13_3.png)


### 完成基础版搭建
---
From https://joelying.github.io/
![](http://image.joelyings.com/2019-08-13_204402.png)



### 参考
---
[Hexo+Github建站](https://juejin.im/post/5b3ed1d4e51d45194e0b7884#heading-9)
[GitHub+Hexo 搭建个人网站详细教程](https://zhuanlan.zhihu.com/p/26625249)
[Hexo建站教程](https://blog.csdn.net/dta0502/article/details/89607953)
[Github+Hexo一站式部署个人博客(原创)](https://www.jianshu.com/p/85192626faf3)
[GitHub Pages 搭建教程](https://sspai.com/post/54608)
[Hexo文档](https://hexo.io/zh-cn/docs/)
[error YAMLException: can not read a block mapping entry...](https://www.cnblogs.com/wangyuehan/p/9864830.html)
[error git clone时报RPC failed; curl 18 transfer closed with outstanding read data remaining 错误](https://www.cnblogs.com/zjfjava/p/10392150.html)
[git clone 报错：error: RPC failed; curl 18 transfer closed with outstanding read data remaining 解决办法](https://www.jianshu.com/p/ddd1a39dcbc8)
[在git bash 中配置git用户名和邮箱及查看配置信息](https://www.cnblogs.com/mrluotong/p/10192492.html)
[七牛云存储添加自定义域名和域名解析图文教程](https://boke112.com/3870.html)
[网站域名、备案、七牛云图床重新搭建与博客整理](https://www.jianshu.com/p/ebed904d852d)
[如何验证域名已经配置成功--七牛云](https://developer.qiniu.com/fusion/kb/5326/how-to-check-whether-the-configuration-is-successful)

### 样本博客
---
[hexo里面Markdown对图片进行居中、设置大小](http://www.devzhao.com/post/1fd7a4a2.html)
[看板娘](https://www.cnblogs.com/zjfjava/p/10392150.html)
[Halo博客](https://juemuren4449.com/)
[nexT-Muse](https://leaferx.online/)




