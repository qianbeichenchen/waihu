window.onload = function () {


    var out = document.getElementById("out");
    var release = document.getElementById("release");
    var signin = document.getElementById("signin");
    var signout = document.getElementById("signout");

    out.onclick = function () {
    	var phonenum = document.getElementById("phone_num").value;
    	var called = document.getElementById("called").value;
    	if(phonenum==""||phonenum.length!=11){
            alert("请输入手机号或者请检查输入是否正确");
            return;
        }
        //应答某一媒体类型的呼叫
        var rtn =Phone.CallOutEx3(5,called,phonenum,'',0,3,'');
    };
    release.onclick = function (){
        //释放
        var rea = Phone.ReleaseCall();
    };
    signin.onclick = function (){
        //签入
        window.open('signin.jsp','child');
    }
    signout.onclick = function () {
        //签出
        var re = Phone.SignOutEx();
        out.disabled=true;
        release.disabled=true;

    }

}