// 提交的时候使用localstorage将用户名和密码存储到本地
function login(){
    var nc=document.getElementsByName('nicheng')[0].value;
    //var mima=document.getElementById('mima').value;
    localStorage.setItem('nicheng',nc);
    // localStorage.setItem('pass',mima);
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