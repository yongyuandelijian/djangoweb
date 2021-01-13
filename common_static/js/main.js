//两个需要使用的公共变量，websocket地址
var ws;
var ws_url='ws://127.0.0.1:8000'
//窗口加载事件需要创建ws连接对象和各个状态下的处理
window.onload=function(e){
    // 如果用户名已经被缓存那么将用户名写入页面，如果用户名不存在则让返回登陆页面
    var mingzi=localStorage.getItem('nicheng');
    // console.log('进入了加载页面')
    // alert(mingzi)
    if (mingzi){
        // alert('内容已经修改')
        document.getElementById('mingcheng').innerText='（'+mingzi+'）'
    } else {
        window.location.href="index"
    }

    //处理websocket的功能
    ws=new WebSocket(ws_url);
    //创建websocket在各个状体的事件
    var xiaoxi;
    ws.onopen=function(e){
        xiaoxi='系统消息：websocket创建连接成功';
        console.log(xiaoxi);
        showMessage(xiaoxi);
    }
    ws.onmessage=function(e){
        xiaoxi='系统消息：websocket收到的消息是:',e.data
        console.log(xiaoxi);
    }
    ws.onclose=function(e){
        xiaoxi='系统消息：websocket连接已经关闭';
        console.log(xiaoxi);
        showMessage(xiaoxi);
    }
    ws.onerror=function(e){
        xiaoxi='系统消息：websocket连接出现错误',e;
        console.log(xiaoxi);
        showMessage(xiaoxi);
    }
}

//显示消息到历史消息界面去
function showMessage(xiaoxi){
    //发送消息的时候增加上当前时间，并且增加一个样式(样式稍后在增加)
    var riqi=new Date();
    shijian=riqi.getHours()+":"+riqi.getMinutes()+":"+riqi.getSeconds();
    //获取控件存放消息
    lishixiaoxi=document.getElementsByClassName('zhuti-ys')[0];
    var messagep=document.createElement('p');
    messagep.innerText=xiaoxi+"-"+shijian;
    lishixiaoxi.appendChild(messagep)
    return true;
}

// 判断文本框按下的快捷键
function pdaj(event){
    // console.log(event) 
    // 如果按下了enter需要判断ctrl是否被按下，如果按下，则是换行，否则就是直接发送消息
    if (event.keyCode == '13'){
        if (event.ctrlKey){
            // 换行
            var text=event.target.value
            event.target.value=text+"\n";
        }else{
            // 阻止enter的本来换行功能
            event.preventDefault();
            // 发送消息，这个如果是传参也可以通过event中的target对象来获取value
            fasongXiaoXi()
        }

    }
}

function fasongXiaoXi(){
    // alert(ws.readyState)
    // ws状态合理才能进行方法内容,注意常量的大小写
    if (!ws){ return false;}
    if (ws.readyState != ws.OPEN){return false;}
    // 获取文本域的内容，然后在调用ws.send('xx')
    var temp=document.getElementsByClassName('input-message');
    neirong=temp[0].value
    var xiaoxi=neirong.replace(/^\s*|\s*$/g,"")  // 去除左右侧的空格
    //alert(xiaoxi)
    if (xiaoxi){
        // 文本有内容合法的情况下，发送消息
        ws.send(xiaoxi);
        console.log('消息发送成功！！！');
        temp[0].value='';
        showMessage(xiaoxi);
        return true;
    }else{
        alert('不能发送空消息！！！');
        return false;
    }
}

//发现当设置了window.onload事件后，这个事件失去了功能
function jiazai(){
    alert('jiazai')
    // 如果用户名已经被缓存那么将用户名写入页面，如果用户名不存在则让返回登陆页面
    var mingzi=localStorage.getItem('nicheng');
    // console.log('进入了加载页面')
    // alert(mingzi)
    if (mingzi){
        // alert('内容已经修改')
        document.getElementById('mingcheng').innerText='（'+mingzi+'）'
    } else {
        window.location.href="index"
    }
}

// 注销操作，将页面退回到登陆页面，然后清除localstorage
function zhuxiao(){
    //将websocket关键
    if (ws){
        if (ws.readystate==ws.OPEN){
            ws.close();
        }
    }
    // alert('进入注销操作')
    localStorage.removeItem('nicheng')
    window.location.href="index"
}