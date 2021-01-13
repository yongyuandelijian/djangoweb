"""djangoproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,re_path
from . import view

# 解决daphne不加载静态文件的问题
from django.contrib.staticfiles.views import serve

def return_static(request, path, insecure = True , ** kwargs):
   return serve(request, path, insecure, ** kwargs)

# 定义界面访问的路径和后台方法之间的对照关系
urlpatterns = [
    path('', view.shouye,name='index'),
    re_path(r'index',view.shouye,name='index'),
    path('zhuye', view.zhuye,name='zhuye'),
    path('admin/', admin.site.urls),
    re_path(r'static/(?P<path>.*)$', return_static, name='static'), # 添加这行
]