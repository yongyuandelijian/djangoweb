import time
# 定义方法来处理websocket
async def websocket_application(scope,receive,send):
    while True:
        receive_content=await receive()  # 将接收到的内容全部获取到,接受到的是一个字典
        print(receive_content)
        # 需要处理三种情况，1 收到请求连接，则接受，2 收到请求断开，则断开，3 受到普通消息，则打印出来
        if receive_content['type']=='websocket.connect':
            await send({'type':'websocket.accept'})
            shijian=time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time()))
            print('<{shijian}> 已连接服务器 ！！！'.format(shijian=shijian))
        elif receive_content['type']=='websocket.disconnect':
            break
        elif receive_content['type']=='websocket.receive':
            huifu="服务器收到的消息是：",receive_content['text']
            print(huifu)
            await send({
                'type':'websocket.send',
                'text': 'server have receive your message'
            })
        else:
            pass
    shijian=time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time()))
    print('<{shijian}> 连接已经断开！！！'.format(shijian=shijian))