# function:  定义路径对应处理方法
from django.http import HttpResponse
from django.shortcuts import render
# from django.conf import settings
#import os

# 返回字符串的方式
# def shouye(request):
#     htmlpath=os.path.join(settings.BASE_DIR,'common_static/html/index.html')
#     html=''
#     with open(htmlpath,'r',encoding='utf-8') as f:
#         html=f.read()
#     return HttpResponse(html)

# 返回页面方式,需要在settings中去设置template的路径
def shouye(request):
    return render(request,"index.html")

def zhuye(request):
    return render(request,"main.html")