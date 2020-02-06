---
title: Django搭建免费视频网站其三
tags:
  - django
  - 网站
comments: true
categories: Django
description: 情，心中青梅，年老仍记年少涩
abbrlink: f3026717
date: 2020-02-06 16:04:20
permalink:
image:
---

<img class="joel-img" src="http://image.joelyings.com/2020-02-06_8.jpg">

<!-- more -->

## 实现

[代码传送门](https://github.com/joelYing/LVideo)

### 登录注册功能

在base.html中挖个block：
```
{% block login-register %}
```

在需要的页面上填补
``` html
{% block login-register %}
    {% if request.session.is_login %}
        {% include "video/user_model.html" %}
    {% else %}
        {% include "video/model.html" %}
    {% endif %}
{% endblock %}
```

包含登录注册的按钮
``` html
<ul class="nav navbar-nav navbar-right">
    <li class="nav-item" id="register-btn"><a data-toggle="modal" data-target="#register" href=""><span class="glyphicon glyphicon-register">注册</span></a></li>&nbsp;
    <li class="nav-item" id="login-btn"><a data-toggle="modal" data-target="#login" href=""><span class="glyphicon glyphicon-login">登录</span></a></li>
</ul>
<!-- 注册窗口 -->
{% include 'video/register.html' %}
<!-- 登录窗口 -->
{% include 'video/login.html' %}
```

登录注册，我采用的是bootstrap的模态框modal

登录部分：
``` html
<div id="login" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content l-register-login">
            <div class="modal-body">
                <button class="close l-register-login" data-dismiss="modal">
                    <span>&times;</span>
                </button>
            </div>
            <div class="modal-title">
                <h1 class="text-center">登录</h1>
            </div>
            <div class="modal-body">
                # 模态框的主体form部分
                <form class="form-group" id="loginform" method="post" action="">
                    {% csrf_token %}
                    <div class="form-group">
                        <label for="">用户名</label>
                        <input class="form-control" type="text" name="username" id="l-username" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="">密码</label>
                        <input class="form-control" type="password" name="password" id="password" placeholder="">
                    </div>
                    <div class="text-left">
                        <span class="alert-warning" id="login-info"></span>
                    </div>
                    <div class="text-right">
                        <button class="btn btn-primary" type="button" id="loginbtn">登录</button>
                        <button class="btn btn-danger" data-dismiss="modal">取消</button>
                    </div>
                    <a href="" data-toggle="modal" data-dismiss="modal" data-target="#register">还没有账号？点我注册</a>
                </form>
            </div>
            <script type="text/javascript">
                {#const token = $('input[name=csrfmiddlewaretoken]').val();#}
                $("#loginbtn").click(function() {
                    $.ajax({
                        {#cache:false,#}
                        type:"POST",
                        url:"/login",
                        dataType:'json',
                        data:{
                            "csrfmiddlewaretoken": '{{ csrf_token }}',
                            "username": $("#l-username").val(),
                            "password": $("#password").val(),
                        },
                        //通过id找到提交form表单，并将表单转成字符串
                        async:true,
                        //异步为真，ajax提交的过程中，同时可以做其他的操作
                        success:function (data) {
                            //jquery3以后，会将回传过来的字符串格式的data自动json解析不用再使用一遍JSON.parse(data)了，不然反而会在控制台报错
                            if(data.status==="success") {
                                {#$("#login-info").text(data.msg);#}
                                {#$('#login').modal('hide');#}
                                window.location.reload();
                            }
                            else if(data.status==="fail"){
                                $('#login-info').text(data.msg);
                            }
                            {#console.log(data);#}
                            {#console.log(data.status);#}
                            {#console.log(data.message);#}
                        },
                    });
                });
                //如果显示了错误信息，修改输入框内容，错误信息隐藏
                $("input").bind('input propertychange', function() {
                    $('#login-info').html('');
                });
            </script>
        </div>
    </div>
</div>
```

登录部分逻辑：

通过ajax提交登录的用户名以及密码，视图层对接收到的用户名密码进行校验，若成功则返回登录成功的信息，并设置session，传回来的信息若成功则会刷新当前页面，同时判断session中`is_login`是否为True，若为True，则登录注册按钮替换为用户名和注销按钮

注意点：

通过ajax给弹出来的模态框中的登录提交按钮添加点击事件
``` javascript
$.ajax({
    type:"POST",           // 请求类型
    url:"/login",          // 请求的路径
    dataType:'json',       // 数据格式
    data:{
        "csrfmiddlewaretoken": '{{ csrf_token }}',  // 避免提交时Forbidden (CSRF token missing or incorrect.)
        "username": $("#l-username").val(),         // 注意取值时用 val()
        "password": $("#password").val(),
    },
    async:true,                                     // 异步为真，ajax提交的过程中，同时可以做其他的操作
    success:function (data) {
        //jquery3以后，会将回传过来的字符串格式的data自动json解析不用再使用一遍JSON.parse(data)了，不然反而会在控制台报错
        if(data.status==="success") {
            window.location.reload();
        }
        else if(data.status==="fail"){              // 若返回的信息中 status为fail ，则打印msg
            $('#login-info').text(data.msg);
        }
    },
});
```

登录部分视图层逻辑：

``` python
def login(request):
    if request.method == 'POST' and request.POST:
        data = request.POST
        username = data.get("username")
        password = data.get("password")
        if username and password:
            custom = Custom.objects.filter(username=username).first()
            if custom:
                now_password = Custom.md5_pwd(password)
                db_password = custom.password
                if now_password == db_password:
                    response = JsonResponse({"status": "success", "msg": "登录成功"})
                    # response.set_cookie('username', username, max_age=7 * 24 * 3600)
                    # response.set_cookie('password', password, max_age=7 * 24 * 3600)
                    # 通过session识别用户并保持用户状态
                    request.session['is_login'] = True
                    request.session['username'] = username
                    return response
                else:
                    return HttpResponse('{"status": "fail", "msg": "密码错误"}')
            else:
                return HttpResponse('{"status": "fail", "msg": "用户不存在"}')
        else:
            return HttpResponse('{"status": "fail", "msg": "用户名或密码为空"}')
    else:
        return HttpResponse('{"status": "fail", "msg": "请求失败"}')
```

注意HttpResponse与JsonResponse使用时的差别！！！

登陆成功后刷新页面过程会判断session.is_login，若是True，就显示`video/user_model.html`中的用户名及注销按钮：
```
{% block login-register %}
    {% if request.session.is_login %}
        {% include "video/user_model.html" %}
    {% else %}
        {% include "video/model.html" %}
    {% endif %}
{% endblock %}
```

注册视图层逻辑：
``` python
def register(request):
    if request.method == "POST" and request.POST:
        data = request.POST
        username = data.get("username")
        email = data.get("email")
        password1 = data.get("password1")
        password2 = data.get("password2")
        custom = Custom.objects.filter(username=username)
        custom_email = Custom.objects.filter(email=email)
        if custom:
            return HttpResponse('{"status": "fail", "msg": "用户名已存在，请重新输入"}')
        if password1 != password2:
            return HttpResponse('{"status": "fail", "msg": "亲~两次密码输入不一致，请重新输入"}')
        if custom_email:  # 邮箱地址唯一
            return HttpResponse('{"status": "fail", "msg": "该邮箱已注册，请换一个邮箱"}')
        else:
            # 注册成功，创建用户
            Custom.objects.create(
                username=username,
                email=email,
                password=Custom.md5_pwd(password1),
            )
            # 重定向到登录页面
            return HttpResponse('{"status": "success", "msg": "注册成功"}')
    else:
        return HttpResponse('{"status": "fail", "msg": "请求失败"}')
```

注销视图层逻辑：

点击注销按钮，如果拿到`is_login`的值为True，那么刷新session，清除了用户的登录状态，然后重定向回index页面，重定向过程判断`is_login`值不存在，就会显示登录注册的按钮

``` python
def logout(request):
    if request.session.get('is_login'):
        request.session.flush()
        # flush会一次性清空session中所有内容，可以使用下面的方法
        # del request.session['is_login']
        # del request.session['user_id']
        # del request.session['user_name']
        return redirect("index")
```

### ajax

ajax传的数据格式：
``` javascript
data:{
    "name": $("#id_name").val(),      // 在"#"号后面是控件id， 所以千万不要搞错了，要不然会出大事的
    "limit": $("#id_limit").val(),
    "address": $("#id_address").val(),
    "start_time": $("#id_start_time").val(),
    "status": $("#id_status").val(),
},
```

view层返回到ajax的数据应该如以下类型：
``` diff
+ return HttpResponse('{"status": "success", "msg": "登录成功"}')
```

而不是
``` diff
- return HttpResponse('{"status": "success"}, {"msg": "登录成功"}')
```

ajax实现发送post请求到服务器并返回结果信息到HTML页面主要逻辑参考：
[https://cloud.tencent.com/developer/article/1145518](https://cloud.tencent.com/developer/article/1145518)
[https://blog.csdn.net/Jayden_Gu/article/details/82386565](https://blog.csdn.net/Jayden_Gu/article/details/82386565)

用ajax实现点击登录弹出对话框登陆，成功后页面不刷新，修改登录为用户名：

[Cookie版参考](https://www.cnblogs.com/chenxi188/p/12176700.html)

ajax发送请求后，在views中，若成功登录的条件符合，接下来就添加给response添加set_cookie为username，这样一来request中就保留了cookie的信息，而再通过判断取得cookie中的username，若为空则用户未登录，若有值则将这个值传入模板中渲染即可


[session版参考](https://www.jianshu.com/p/4f84d0e0c8c9)

解决注销，session保持会话状态的问题，Django的模板中可以直接引用request.session



## 参考
[基础功能逻辑](https://blog.csdn.net/weixin_44239541/article/details/89055637)
[表单提交](https://blog.csdn.net/u012561176/article/details/84552532)
[消息提示](https://blog.csdn.net/qq_26421325/article/details/44153039)
[HttpResponse、render,、redirect](https://blog.csdn.net/miaoqinian/article/details/80668003)
[注册登录弹出模态框](https://www.jianshu.com/p/4ffd7184b611)
[ajax格式](https://www.cnblogs.com/iqian/p/5784972.html)