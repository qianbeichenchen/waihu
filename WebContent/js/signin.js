var Phone=window.opener.Phone;
window.onload = function () {
    var topPage = document.getElementById("topPage");
    var UseWebVoip = document.getElementById("UseWebVoip");

    var WebVoipAddress = document.getElementById("WebVoipAddress");
    var WebVoipBakSIPServerIP = document.getElementById("WebVoipBakSIPServerIP");
    var WebVoipSIPServerPort = document.getElementById("WebVoipSIPServerPort");
    var WebVoipBakSIPServerPort = document.getElementById("WebVoipBakSIPServerPort");
    var WebVoipAccount = document.getElementById("WebVoipAccount");
    var WebVoipPassword = document.getElementById("WebVoipPassword");

    var txtMostlyAddress = document.getElementById("txtMostlyAddress");
    var ServerType = document.getElementById("ServerType");
    var txtLabourNo = document.getElementById("txtLabourNo");
    var password = document.getElementById("password");
    var txtPhoneID = document.getElementById("txtPhoneID");
    var txtSubordinationAddress = document.getElementById("txtSubordinationAddress");

    var txtPhoneNum = document.getElementById("txtPhoneNum");
    var SeatType = document.getElementById("SeatType");
    var CTISERVER = document.getElementById("CTISERVER");
    var WEBM = document.getElementById("WEBM");
    var MAILM = document.getElementById("MAILM");

    var sign = document.getElementById("sign");
    var auto_call= document.getElementById("auto_call");
    init();

    function getCookie(name){
        var strCookie=document.cookie;
        var arrCookie=strCookie.split("; ");
        for(var i=0;i<arrCookie.length;i++){
            var arr=arrCookie[i].split("=");
            if(arr[0]==name){
                return arr[1];
            }
        }
        return "";
    }

    function rnd(start, end){
        return Math.floor(Math.random() * (end - start) + start);
    }

    function check(phoneNo) {
        if (phoneNo=="")
        {
            return false;
        }
        return phoneNo;
    }

    function init(){
        var openEyeNum=getCookie("openEyeNum");
        txtPhoneNum.value=openEyeNum;
        var  txtMostlyAddress1 = getCookie("txtMostlyAddress");
        txtMostlyAddress.value = txtMostlyAddress1;
        var  txtLabourNo1 = getCookie("txtLabourNo");
        txtLabourNo.value = txtLabourNo1;
        var  password1 = getCookie("password");
        password.value = password1;
    }

    function SetState() {
        //如果checkbox(是否使用内置OpenEye功能)被选中,则用户可以在text中写入值
        if(UseWebVoip.checked)
        {
            WebVoipAddress.disabled = false;
            WebVoipSIPServerPort.disabled = false;
            WebVoipAccount.disabled = false;
            WebVoipPassword.disabled = false;
            WebVoipBakSIPServerIP.disabled = false;
            WebVoipBakSIPServerPort.disabled = false;
        }else{
            WebVoipAddress.disabled= "disabled";
            WebVoipBakSIPServerIP.disabled = "disabled";
            WebVoipBakSIPServerIP.value = "133.160.71.182";
            WebVoipSIPServerPort.disabled="disabled";
            WebVoipSIPServerPort.value="5060";
            WebVoipBakSIPServerPort.disabled = "disabled";
            WebVoipBakSIPServerPort.disabled = "5060";
            WebVoipAccount.disabled="disabled";
            WebVoipAccount.value="84460";
            WebVoipPassword.disabled="disabled";
            WebVoipPassword.value="";
        }

    }

    function Initialize(){

        txtPhoneID.value=rnd(20,200);
        if(UseWebVoip.checked){
            //是否使用接续控件集成的OpenEye
            Phone.UseWebVoip=true;
            //SIP 注册服务器IP 地址
            Phone.WebVoipSIPServerIP=WebVoipAddress.value;
            //SIP 注册服务器端口号
            Phone.WebVoipSIPServerPort =WebVoipSIPServerPort.value;
            //SIP 注册服务器IP 地址
            Phone.WebVoipNeedRegister =true;
            //SIP 注册账号
            Phone.WebVoipAccount=WebVoipAccount.value;
            //SIP 注册密码
            Phone.WebVoipPassword=WebVoipPassword.value;
            //主用服务器IP 地址
            Phone.MainCcsIp=txtMostlyAddress.value;
            //服务器通讯进程号
            Phone.CcsID=ServerType.value;
            //座席工号
            Phone.WorkNo=txtLabourNo.value;
            //密码
            Phone.Password=password.value;
            //接续控件通讯进程ID
            Phone.MyID=txtPhoneID.value;
            //备用服务器的IP
            Phone.BackCcsIP=txtSubordinationAddress.value;
            var result=Phone.Initial();
            if(result=='0')
            {
                alert('初始化成功1');
            }
            else
            {
                alert('初始化失败1，原因是'+Phone.GetPromptByErrorCode(result));
//                return;
            }
        }
        else{
                Phone.MainCcsIp=txtMostlyAddress.value;
                Phone.CcsID=ServerType.value;
                Phone.WorkNo=txtLabourNo.value;
                Phone.Password=password.value;
                Phone.MyID=txtPhoneID.value;
                Phone.BackCcsIP=txtSubordinationAddress.value;

                var result=Phone.Initial();
                if(result=='0')
                {
                    alert('初始化成功2');
                }
                else
                {
                    alert('初始化失败2，原因是 '+Phone.GetPromptByErrorCode(result));
//                    return;
                }
            }
        return true;
    }

    function AutographJoin(){
        if(!check(txtPhoneNum.value))
        {
            alert("请输入座席电话号!");
            txtPhoneNum.focus();
            return;
        }
        if(!check(txtMostlyAddress.value))
        {
            alert("请输入主MCP/CCS地址!");
            txtMostlyAddress.focus();
            return;
        }
        if(!check(txtLabourNo.value))
        {
            alert("请输入坐席签入工号!");
            txtLabourNo.focus();
            return;
        }
        if(!check(password.value))
        {
            alert("请输入密码!");
            password.focus();
            return;
        }
        if(UseWebVoip.checked){
            if(!check(WebVoipAddress.value)){
                alert("请输入UAP地址!");
                WebVoipAddress.focus();
                return;
            }
            if(!check(WebVoipPassword.value)){
                alert("请输入SIP注册密码!");
                WebVoipPassword.focus();
                return;
            }
        }

        /*$.when(function(){
            
        }).done(function(){
            $("#topPage").css("display","");
        });*/

        if(Initialize()){
        	
            if(CTISERVER.checked)
            {
                //签入CTI服务器,WEBM服务器以及MAIL服务器
                if(MAILM.checked && WEBM.checked)
                {
                    var result=Phone.SignInEx('TTT',SeatType.value,txtPhoneNum.value);
                }
                //签入CTI服务器以及MAIL服务器
                else if(MAILM.checked &&(WEBM.checked=='false'))
                {
                    var result=Phone.SignInEx('TFT',SeatType.value,txtPhoneNum.value);
                }
                //签入CTI服务器,WEBM服务器
                else if((MAILM.checked=='false') &&WEBM.checked)
                {
                    var result=Phone.SignInEx('TTF',SeatType.value,txtPhoneNum.value);
                }
                //签入CTI服务器
                else
                {
                    var result=Phone.SignInEx('TFF',SeatType.value,txtPhoneNum.value);
                }
            }
            else
            {
                //签入WEBM服务器以及MAIL服务器
                if(MAILM.checked && WEBM.checked)
                {
                    var result=Phone.SignInEx('FTT',SeatType.value,txtPhoneNum.value);
                }
                //签入MAIL服务器
                else if(MAILM.checked &&(WEBM.checked=='false'))
                {
                    var result=Phone.SignInEx('FFT',SeatType.value,txtPhoneNum.value);
                }
                //签入WEBM服务器
                else
                {
                    var result=Phone.SignInEx('FTF',SeatType.value,txtPhoneNum.value);
                }
            }
//            result = 0;
            if(result=='0')
            {
                //记些cookie把openEye号记下来
                var date=new Date();
                var expireDays=30;
                //将date设置为10天以后的时间
                date.setTime(date.getTime()+expireDays*24*3600*1000);
                //将userId和userName两个cookie设置为10天后过期
                document.cookie="openEyeNum="+txtPhoneNum.value +"; expire="+date.toGMTString()+";path=/";
                document.cookie="txtMostlyAddress="+txtMostlyAddress.value +"; expire="+date.toGMTString()+";path=/";
                document.cookie="txtLabourNo="+txtLabourNo.value +"; expire="+date.toGMTString()+";path=/";
                document.cookie="password="+password.value +"; expire="+date.toGMTString()+";path=/";
                alert("签入成功");
                /*if(auto_call.checked)
                {
                    //设为自动呼
                    $.get("autocall.jsp?auto=true");
                }else
                {
                	//设为不自动呼
                    $.get("autocall.jsp?auto=false");
                }*/
                //设置父窗口外呼、挂断、签出按钮等
                window.opener.document.getElementById("out").disabled = false;
                window.opener.document.getElementById("release").disabled = false;
                window.opener.document.getElementById("signout").disabled = false;
                window.opener.document.getElementById("signin").disabled = true;
                window.close();
            }
            else
            {
                alert("签入失败  "+Phone.GetPromptByErrorCode(result));
            }
        }
    }

    //自动应答
    function setAutoAnswer() {
        /*如果AutoAnswer 设置为True，则接续控件自动应答来话，进入通话状态
         如果AutoAnswer 设置为False，收到请求应答时需座席主动应答（
         */
        Phone.AutoAnswer = autoanswer.checked;
    }

    //自动释放呼叫
    function setAutoRelease() {
        /*如果AutoRelease 设置为True，接续控件将自动释放话路
         如果AutoRelease 设置为False，则需座席主动释放。
         */
        Phone.AutoRelease = autorelease.checked;
    }

    //自动进入工作态  2.1.4
    function setAutoWork() {
        /*如果设置了自动进入空闲态，则座席通话结束将自动进入空闲态，系统将自动给座席分配新的呼叫
         如果没有设置自动进入空闲态，则座席通话结束将自动进入工作态，在工作态时系统不会自动分配新的呼叫。
         */
        Phone.SetAgentAutoEnterIdle(!(autowork.checked));
    }

    /*自动进入学习态(如何避免签入后立即被分配呼叫 ) 2.1.5
     只有在Initial之后，SignInEx之前才有效
     */
    function button_ChangeAgent() {

        if(autostudy.checked)
        {
            /*请求进入某种状态
             第一个参数:8代表学习态
             第二个参数:1代表进入该状态,0代表退出该状态
             第三个参数:附加参数
             */
            var rtn=Phone.ChangeAgentStatus(8,1,0);
        }
        else
        {
            var rtn=Phone.ChangeAgentStatus(8,0,0);
        }
    }

    UseWebVoip.onmousemove = function(){
        SetState();
    }

    sign.onclick = function () {
        AutographJoin();
    }


};