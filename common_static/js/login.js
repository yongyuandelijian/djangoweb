// 提交的时候使用localstorage将用户名和密码存储到本地
function login(){
    var nc=document.getElementsByName('nicheng')[0].value;
    var mima=document.getElementById('mima').value;
        
    // 调用服务器的登陆接口来获取到分配给此次会话的唯一标识
    // var huihua=login(nc)  // 需要到后端请求，使用jquery的ajax 
    // 将获取到的标识存储到本地
    localStorage.setItem('huihua',huihua)
    localStorage.setItem('nicheng',nc);
    localStorage.setItem('mima',mima);
    // console.log('写入成功');
    return true;
}

// 如果访问页面昵称存在就将昵称直接填写到位置
function jiazai(){
    var nc=localStorage.getItem('nicheng');
    // alert(nc);
    if (nc){
        document.getElementById('nicheng').value=nc;
    }
}