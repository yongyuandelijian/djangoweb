"""
ASGI config for djangoproject project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from .websocket import websocket_application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoproject.settings')

# 修改下源码，由于源码默认只处理http所以我们将这里更新下
http_application = get_asgi_application()



# 我们自己定义一个方法来处理扩展处理websocket,三个参数分别是范围，接收，发送三个对象
async def application(scope, receive, send):
    if scope['type']=='http':
        print("开始处理http请求")
        await http_application(scope,receive,send)  # 使用原方法处理http相关的请求
    elif scope['type']=='websocket':
        print("开始处理websocket请求")
        await websocket_application(scope,receive,send)
    else:
        raise ValueError('不能识别的请求类型',scope['type'])