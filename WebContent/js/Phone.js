/**
 * Created by sunshine on 2016/7/6.
 */
// 请勿修改，否则可能出错
var userAgent = navigator.userAgent,
    rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
    rFirefox = /(firefox)\/([\w.]+)/,
    rOpera = /(opera).+version\/([\w.]+)/,
    rChrome = /(chrome)\/([\w.]+)/,
    rSafari = /version\/([\w.]+).*(safari)/;
var browser;
var version;
var match;
var ua = userAgent.toLowerCase();
function uaMatch() {
    var match = rMsie.exec(ua);
    if (match != null) {
        return {browser: "IE", version: match[2] || "0"};
    }
    var match = rFirefox.exec(ua);
    if (match != null) {
        return {browser: match[1] || "", version: match[2] || "0"};
    }
    var match = rOpera.exec(ua);
    if (match != null) {
        return {browser: match[1] || "", version: match[2] || "0"};
    }
    var match = rChrome.exec(ua);
    if (match != null) {
        return {browser: match[1] || "", version: match[2] || "0"};
    }
    var match = rSafari.exec(ua);
    if (match != null) {
        return {browser: match[2] || "", version: match[1] || "0"};
    }
    if (match != null) {
        return {browser: "", version: "0"};
    }
}
var browserMatch = uaMatch(ua);
if (browserMatch.browser) {
    browser = browserMatch.browser;
    version = browserMatch.version;
}

showweboffice("014D83A5-7E35-11D3-8AF9-00C0DF245E51");
//在不同浏览器下兼容控件 并且创建Phone对象
function showweboffice(classid) {

    if (browser == "IE") {
        document.write('<!-- 用来产生编辑状态的ActiveX控件的JS脚本-->   ');
        document.write('<!-- 因为微软的ActiveX新机制，需要一个外部引入的js-->   ');
        document.write('<object id="Phone" name="Phone" classid="clsid:'+classid+'"  VIEWASTEXT> ');
        document.write('<PARAM NAME="MyID" VALUE="40">');
        document.write('<PARAM NAME="WebVoipAddress" VALUE="">');
        
        document.write('<PARAM NAME="MainCcsIP" VALUE="">');
        document.write('<PARAM NAME="BackCcsIP" VALUE="">');
        document.write('<PARAM NAME="WorkNo" VALUE="0">');
        document.write('<PARAM NAME="DesktopNo" VALUE="1000">');
        document.write('<PARAM NAME="Password" VALUE="">');
        document.write('<PARAM NAME="TimeOut" VALUE="10000">');
        document.write('<PARAM NAME="RecordFileDir" VALUE="c:\windows\temp">');
        document.write(' <PARAM NAME="CardType" VALUE="3">');
        document.write('<PARAM NAME="AutoAnswer" VALUE="0">');
        document.write('<param name="MenuButtonStyle" value="7">   ');
        document.write('<param NAME="Toolbars" value="0">');
        document.write('<PARAM NAME="AutoRelease" VALUE="0">');
        document.write('<PARAM NAME="AutoReconnect" VALUE="0">');
        document.write('<PARAM NAME="HaveBell" VALUE="-1">');
        document.write('<PARAM NAME="BellTime" VALUE="3">');
        document.write('<PARAM NAME="CcsID" VALUE="20">');
        document.write('<PARAM NAME="PlayStep" VALUE="2">');
        document.write('<PARAM NAME="FreeStatus" VALUE="0">');
        document.write('<PARAM NAME="TimerEnabled" VALUE="0">');
        document.write('<PARAM NAME="TimerInterval" VALUE="1000">');
        document.write('<PARAM NAME="MediaPlay" VALUE="0">');
        document.write('<PARAM NAME="MediaFileName" VALUE="">');
        document.write('<PARAM NAME="Version" VALUE="3">');
        document.write('<PARAM NAME="AgentType" VALUE="2">');
        document.write('<PARAM NAME="ConvoyDirection" VALUE="1">');
        document.write('<PARAM NAME="ConvoyMode" VALUE="1">');
        document.write('<PARAM NAME="WFSMode" VALUE="2">');
        document.write('<PARAM NAME="PMSMode" VALUE="1">');
        document.write('<PARAM NAME="AutoRecord" VALUE="0">');
        document.write('<PARAM NAME="PlayMode" VALUE="1">');
        document.write('<PARAM NAME="StreamServerAddr" VALUE="">');
        document.write('<PARAM NAME="StreamFastPlayStep" VALUE="3">');
        document.write('<PARAM NAME="IsQccing" VALUE="0">');
        document.write('<PARAM NAME="IsAutoEnterWork" VALUE="0">');
        document.write('<PARAM NAME="Account" VALUE="">');
        document.write('<PARAM NAME="AccountPassword" VALUE="">');
        document.write('<PARAM NAME="AutoReleasePhoneCall" VALUE="0">');
        document.write('<PARAM NAME="PlaySystem" VALUE="0">');
        document.write('<PARAM NAME="UseWebVoip" VALUE="0">');
        document.write('<PARAM NAME="WebVoipSIPServerIP" VALUE="">');
        document.write('<PARAM NAME="WebVoipSIPServerPort" VALUE="5060">');
        document.write('<PARAM NAME="WebVoipNeedRegister" VALUE="-1">');
        document.write('<PARAM NAME="WebVoipAccount" VALUE="">');
        document.write('<PARAM NAME="WebVoipPassword" VALUE="">');
        document.write('<PARAM NAME="NiceCLSIP" VALUE="">');
        document.write('<PARAM NAME="NiceCLSPort" VALUE="2050">');
        document.write('<PARAM NAME="bCanHold" VALUE="0">');
        document.write('<PARAM NAME="bCanIntercept" VALUE="0">');
        document.write('<PARAM NAME="WebVoipBakSIPServerIP" VALUE="">');
        document.write('<PARAM NAME="WebVoipBakSIPServerPort" VALUE="5060">');
        /*document.write('<SPAN STYLE="color:red">不能装载文档控件。请在检查浏览器的选项中检查浏览器的安全设置。</SPAN>   ');*/
        document.write('</object>');
        Events();
    }
    else if (browser == "firefox") {
        document.write('<object id="Phone"  ');
        document.write('MyID="40"');
        document.write('MainCcsIP=""');
        document.write('BackCcsIP=""');
        document.write('WorkNo="0"');
        document.write('DesktopNo="1000"');
        document.write('Password=""');
        document.write('TimeOut="10000"');
        document.write('RecordFileDir="c:\windows\temp"');
        document.write('CardType="3"');
        document.write('AutoAnswer="0"');
        document.write('MenuButtonStyle="7"');
        document.write('Toolbars ="0"');
        document.write('AutoRelease ="0"');
        document.write('AutoReconnect ="0"');
        document.write('HaveBell ="-1"');
        document.write('BellTime ="3"');
        document.write('CcsID ="20"');
        document.write('PlayStep ="2"');
        document.write('FreeStatus ="0"');
        document.write('TimerEnabled ="0"');
        document.write('TimerInterval ="1000"');
        document.write('MediaPlay ="0"');
        document.write('MediaFileName =""');
        document.write('Version ="3"');
        document.write('AgentType ="2"');
        document.write('ConvoyDirection ="1"');
        document.write('ConvoyMode ="1"');
        document.write('WFSMode ="2"');
        document.write('PMSMode ="1"');
        document.write('AutoRecord ="0"');
        document.write('PlayMode ="1"');
        document.write('StreamServerAddr =""');
        document.write('StreamFastPlayStep ="3"');
        document.write('IsQccing ="0"');
        document.write('IsAutoEnterWork ="0"');
        document.write('Account =""');
        document.write('AccountPassword =""');
        document.write('AutoReleasePhoneCall ="0"');
        document.write('PlaySystem ="0"');
        document.write('UseWebVoip ="0"');
        document.write('WebVoipSIPServerIP =""');
        document.write('WebVoipSIPServerPort ="5060"');
        document.write('WebVoipNeedRegister ="-1"');
        document.write('WebVoipAccount =""');
        document.write('WebVoipPassword =""');
        document.write('NiceCLSIP =""');
        document.write('NiceCLSPort ="2050"');
        document.write('bCanHold ="0"');
        document.write('bCanIntercept ="0"');
        document.write('WebVoipBakSIPServerIP =""');
        document.write('WebVoipBakSIPServerPort ="5060"');

        document.write('clsid="{'+classid+'}" >');
        /*document.write('<SPAN STYLE="color:red">尚未安装NTKO Web FireFox跨浏览器插件。请点击<a href="ntkoplugins.xpi">安装组1件</a></SPAN>   ');*/
        document.write('</object>');
        Events();
    }
    else if (browser == "chrome") {
        // clsid="{'+classid+'}"
        document.write('<object id="Phone" name="Phone" ' );
        document.write('clsid="{014D83A5-7E35-11D3-8AF9-00C0DF245E51}"');
        document.write('_MyID ="40"');
        document.write('_MainCcsIP =""');
        document.write('_BackCcsIP =""');
        document.write('_WorkNo ="0"');
        document.write('_DesktopNo ="1000"');
        document.write('_Password =""');
        document.write('_TimeOut ="10000"');
        document.write('_RecordFileDir ="c:\windows\temp"');
        document.write('_CardType ="3"');
        document.write('_AutoAnswer ="0"');
        document.write('_MenuButtonStyle ="7"');
        document.write('_Toolbars ="0"');
        document.write('_AutoRelease ="0"');
        document.write('_AutoReconnect ="0"');
        document.write('_HaveBell ="-1"');
        document.write('_BellTime ="3"');
        document.write('_CcsID ="20"');
        document.write('_PlayStep ="2"');
        document.write('_FreeStatus ="0"');
        document.write('_TimerEnabled ="0"');
        document.write('_TimerInterval ="1000"');
        document.write('_MediaPlay ="0"');
        document.write('_MediaFileName =""');
        document.write('_Version ="3"');
        document.write('_AgentType ="2"');
        document.write('_ConvoyDirection ="1"');
        document.write('_ConvoyMode ="1"');
        document.write('_WFSMode ="2"');
        document.write('_PMSMode ="1"');
        document.write('_AutoRecord ="0"');
        document.write('_PlayMode ="1"');
        document.write('_StreamServerAddr =""');
        document.write('_StreamFastPlayStep ="3"');
        document.write('_IsQccing ="0"');
        document.write('_IsAutoEnterWork ="0"');
        document.write('_Account =""');
        document.write('_AccountPassword =""');
        document.write('_AutoReleasePhoneCall ="0"');
        document.write('_PlaySystem ="0"');
        document.write('_UseWebVoip ="0"');
        document.write('_WebVoipSIPServerIP =""');
        document.write('_WebVoipSIPServerPort ="5060"');
        document.write('_WebVoipNeedRegister ="-1"');
        document.write('_WebVoipAccount =""');
        document.write('_WebVoipPassword =""');
        document.write('_NiceCLSIP =""');
        document.write('_NiceCLSPort ="2050"');
        document.write('_bCanHold ="0"');
        document.write('_bCanIntercept ="0"');
        document.write('_WebVoipBakSIPServerIP =""');
        document.write('_WebVoipBakSIPServerPort ="5060">');
       /* document.write('<SPAN STYLE="color:red">尚未安装NTKO Web Chrome跨浏览器插件。请点击</SPAN>   ');*/
        document.write('</object>');
        Events();

    }
    else if (browser == "opera") {
        alert("sorry,ntko web控件暂时不支持opera!");
    }
    else if (browser == "safari") {
        alert("sorry,ntko web控件暂时不支持safari!");
    }
}


  function AddResult(Result)
  {
    alert(Result);
  }
function Events(){
	/* 外呼失败触发此事件 */
    document.write('<script language=javascript for=Phone event=OnCallOutFailure()>AddResult("呼出失败");</SCRIPT>');
    /*签入成功*/
    document.write('<SCRIPT language=javascript for=Phone event=OnSignInExSuccess(p1)>AddResult("已签入");</script>');
    /*  签入失败时触发此事件*/
    document.write('<script language=javascript for=Phone event=OnSignInExFailure()>AddResult("签入失败");</script>');
    /*  签出成功时触发此事件*/
    document.write('<script language=javascript for=Phone event=OnSignOutExSuccess(p)>AddResult("签出成功");</script>');
    /*  签出失败时触发此事件*/
    document.write('<script language=javascript for=Phone event=OnSignOutExFailure(p)>AddResult("签出失败");</script>');
    /*内部求助成功触发此事件 */
    document.write('<script language=javascript for=Phone event=OnInternalHelpSuccess()>AddResult("内部求助成功");</script>');
    /*三方求助失败时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnInternalHelpFailure()>AddResult("求助失败");</script>');
    /* 取回呼叫成功时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnInternalHelpRefused()>AddResult("取回呼叫成功");</script>');
    /* 请求三方通话成功时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnConfJoinSuccess()>AddResult("请求三方通话成功");</script>');
    /* 三方通话成功时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnConfJoinSuccTalk()>AddResult("三方通话成功");</script>');
    /* 三方通话失败时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnConfJoinFailure()>AddResult("三方通话失败");</script>');

    document.write('<script language=javascript for=Phone event=OnAnswerRequestEx(mediatype)>AddResult("有来电呼入");</script>');
    /* 当座席休息结束时间到达时,触发此事件 */
    document.write('<script language=javascript for=Phone event=OnRestTimeOut(resttime)>AddResult("休息时间已到,请取消休息");</script>');
    /*设置呼叫数据成功时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnCallOutDetectResult(result)>AddResult("OnCallOutDetectResult");</script>');
    /* 向用户报音成功时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnReportSoundSuccess()>AddResult("OnReportSoundSuccess");</script>');
    /* 与用户恢复通话时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnReportSndEndTalk()>AddResult("OnReportSndEndTalk");</script>');
    /* 向用户报音失败时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnReportSoundFailure()>AddResult("OnReportSoundFailure");</script>');
    /* 保持成功将顺序触发OnIsTalkingChanged、OnEndMuteUserSuccess、OnHoldSuccess 事件 */
    document.write('<script language=javascript for=Phone event=OnIsTalkingChanged()> </SCRIPT>');
    /* OnEndMuteUserSuccess 事件只有在保持呼叫前座席处于静音状态时才触发 */
    document.write('<script language=javascript for=Phone event=OnEndMuteUserSuccess()>AddResult("OnEndMuteUserSuccess");</script>');
    document.write('<script language=javascript for=Phone event=OnHoldSuccess()>AddResult("OnHoldSuccess");</script>');
    /* 取保持成功时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnGetHoldSuccess()>AddResult("OnGetHoldSuccess");</script>');
    /* 取保持失败时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnGetHoldFailure()>AddResult("OnGetHoldFailure");</script>');
    /*退出休息成功时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnCancelRestSuccess()>AddResult("OnCancelRestSuccess");</script>');
    /*退出休息失败时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnCancelRestFailure()>AddResult("OnCancelRestFailure");</script>');
    /* PC+PHONE时，用户先挂机触发此事件 */
    document.write('<script language=javascript for=Phone event=OnRequestReleaseEx()>AddResult("用户挂机");</script>');
    /*调用休息成功时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnRestSuccess()>AddResult("OnRestSuccess");</script>');
    /*调用休息失败时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnRestFailure()>AddResult("OnRestFailure");</script>');
    /*开始休息成功时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnStartRest()>AddResult("OnStartRest");</script>');
    /*开始静音成功时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnBeginMuteUserSuccess()>AddResult("OnBeginMuteUserSuccess");</script>');
    /* 示忙成功时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnSayBusySuccess()>AddResult("OnSayBusySuccess");</script>');
    /* 示忙失败时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnSayBusyFailure()>AddResult("OnSayBusyFailure");</script>');
    /* 示闲成功时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnSayFreeSuccess()>AddResult("OnSayFreeSuccess");</script>');
    /* 示闲失败时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnSayFreeFailure()>AddResult("OnSayFreeFailure");</script>');
    /*  开始静音失败时触发此事件*/
    document.write('<script language=javascript for=Phone event=OnBeginMuteUserFailure()>AddResult("OnBeginMuteUserFailure");</script>');
    /*  结束静音成功时触发此事件*/
    document.write('<script language=javascript for=Phone event=OnEndMuteUserSuccess()>AddResult("OnEndMuteUserSuccess");</script>');
    /*结束静音失败时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnEndMuteUserFailure()> AddResult("OnEndMuteUserFailure");</script>');

    document.write('<script language=javascript for=Phone event=OnAnswerRequestEx()> AddResult("有来电") </script>');
    /* 应答成功触发此事件 */
    document.write('<script language=javascript for=Phone event=OnAnswerExSuccess(p1)> AddResult("OnAnswerExSuccess") </script>');
    /* 应答失败触发此事件 */
    document.write('<script language=javascript for=Phone event=OnAnswerExFailure(p1)> AddResult("OnAnswerExFailure") </script>');
    /* 外呼成功触发此事件 */
    document.write('<script language=javascript for=Phone event=OnCallOutSuccess()> AddResult("振铃") </script>');

    /* 外呼成功并且被叫开始通话 */
    document.write('<script language=javascript for=Phone event=OnCallOutSuccTalk()> AddResult("用户接听") </script>');
    /*申请会场成功时,触发此事件  */
    document.write('<script language=javascript for=Phone event=OnRequestConferenceSuccess()> AddResult("OnRequestConferenceSuccess") </script>');
    /*申请会场失败时,触发此事件  */
    document.write('<script language=javascript for=Phone event=OnReleaseConferenceSuccess()> AddResult("OnReleaseConferenceSuccess") </script>');
    /*释放会场成功按顺序触发OnReleaseExSuccess和OnReceiveAgentStateInfo事件  */
    document.write('<script language=javascript for=Phone event=OnReleaseExSuccess()> AddResult("挂断") </script>');
    /*座席状态通知事件*/
    document.write('<script language=javascript for=Phone event=OnReceiveAgentStateInfo()></SCRIPT >');
    /* 座席加入会场成功 */
    document.write('<script language=javascript for=Phone event=OnAddAgentToConferenceSuccess()> AddResult("OnAddAgentToConferenceSuccess") </script>');
    /*座席加入会场失败  */
    document.write('<script language=javascript for=Phone event=OnAddAgentToConferenceFailure()> AddResult("OnAddAgentToConferenceFailure") </script>');
    /*用户加入会场失败  */
    document.write('<script language=javascript for=Phone event=OnAddClientToConferenceSuccess()> AddResult("OnAddClientToConferenceSuccess") </script>');
    /*用户加入会场失败  */
    document.write('<script language=javascript for=Phone event=OnAddClientToConferenceFailure()> AddResult("OnAddClientToConferenceFailure") </script>');
    /*内呼时，被呼叫座席接收到请求应答的消息会触发此事件  */
    document.write('<script language=javascript for=Phone event=OnCallInnerSuccess()> AddResult("OnCallInnerSuccess") </script>');
    /*内呼时，被呼叫座席应答会触发此事件  */
    document.write('<script language=javascript for=Phone event=OnCallInnerSuccTalk()> AddResult("OnCallInnerSuccTalk") </script>');
    /* 内呼失败时将触发此事件 */
    document.write('<script language=javascript for=Phone event=OnCallInnerFailure()> AddResult("OnCallInnerFailure") </script>');
    /* 呼叫进入座席私有队列时将触发此事件 */
    document.write('<script language=javascript for=Phone event=OnPrivateQueueCallIn(iCallID,caller,called,mediaType)> AddResult("呼叫进入座席私有队列") </script>');
    /* 呼叫离开座席私有队列时将触发此事件 */
    document.write('<script language=javascript for=Phone event=OnPrivateQueueCallOut(pCallID,caller,called,mediaType)> AddResult("呼叫离开座席私有队列") </script>');
    /* 发布公告成功时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnNotifyBulletinSuccess()> AddResult("OnNotifyBulletinSuccess") </script>');
    /* 发布公告成功时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnNotifyBulletinFailure()> AddResult("OnNotifyBulletinFailure") </script>');
    /*转移失败触发此事件  */
    document.write('<script language=javascript for=Phone event=OnTransInnerFailure()> AddResult("OnTransInnerFailure") </script>');
    /*转移成功触发此事件  */
    document.write('<script language=javascript for=Phone event=OnTransInnerSuccess()> AddResult("OnTransInnerSuccess") </script>');
    /* 保持呼叫释放事件 */
    document.write('<script language=javascript for=Phone event=OnHoldCallRelease()> AddResult("OnHoldCallRelease") </script>');
    /*转IVR成功时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnRedirectToAutoSuccess()> AddResult("OnRedirectToAutoSuccess") </script>');
    /*转IVR失败时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnRedirectToAutoFailure()> AddResult("OnRedirectToAutoFailure") </script>');
    /*挂起转IVR返回座席时触发此事件  */
    document.write('<script language=javascript for=Phone event=OnReturnFromIvr()> AddResult("OnReturnFromIvr");</SCRIPT>');
    /* 成功转成功时触发此事件 */
    document.write('<script language=javascript for=Phone event=OnTransferResultNotify(cause)></SCRIPT > ');
    /*转移失败触发此事件 */
    document.write('<script language=javascript for=Phone event=OnTransInnerFailure()> AddResult("OnTransInnerFailure") </script>');
    /*转移成功触发此事件 */
    document.write('<script language=javascript for=Phone event=OnTransInnerSuccess()> AddResult("OnTransInnerSuccess") </script>');
    /* 转队列时，首先触发OnBeforeTrans 事件，然后开始执行转队列操作。*/
    document.write('<script language=javascript for=Phone event=OnBeforeTrans()> AddResult("OnBeforeTrans") </script>');
    /*转队列失败时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnRedirectToOtherFailure()> AddResult("OnRedirectToOtherFailure") </script>');
    /*转队列成功时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnRedirectToOtherSuccess()> AddResult("OnRedirectToOtherSuccess") </script>');
    /*呼叫转移成功时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnTransOutSuccess()> AddResult("OnTransOutSuccess") </script>');
    /*呼叫转移失败时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnTransOutFailure> AddResult("OnTransOutFailure") </script>');
    /*座席设置自己的呼叫转移，包括取消呼叫转移，设置前转或者忙转成功时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnSetTransferSuccess()> AddResult("OnSetTransferSuccess") </script>');
    /*座席设置自己的呼叫转移，包括取消呼叫转移，设置前转或者忙转成功时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnSetTransferFailure()> AddResult("OnSetTransferFailure") </script>');
    /*监听话务员通话成功时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnSuperviseTrunkSuccess()> AddResult("OnSuperviseTrunkSuccess") </script>');
    /*监听话务员通话失败时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnSuperviseTrunkFailure()> AddResult("OnSuperviseTrunkFailure") </script>');
    /*插入成功时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnInsertSuccess()> AddResult("OnInsertSuccess") </script>');
    /*插入失败时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnInsertFailure()> AddResult("OnInsertFailure") </script>');
    /*质检员将话务员强制示闲成功时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnAgentForceIdleSuccess()> AddResult("OnAgentForceIdleSuccess") </script>');
    /*质检员将话务员强制示闲失败时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnAgentForceIdleFailure()> AddResult("OnAgentForceIdleFailure") </script>');
    /*质检员将座席强制示忙成功时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnAgentForceBusySuccess()> AddResult("OnAgentForceBusySuccess") </script>');
    /*质检员将座席强制示忙失败时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnAgentForceBusyFailure()> AddResult("OnAgentForceBusyFailure") </script>');
    /*质检员将座席强制签出成功时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnAgentForceOutSuccess()> AddResult("OnAgentForceOutSuccess") </script>');
    /*质检员将座席强制签出失败时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnAgentForceOutFailure()> AddResult("OnAgentForceOutFailure") </script>');
    /*质检员将座席强制签出指定媒体服务器成功时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnAgentForceOutSuccess()> AddResult("OnAgentForceOutSuccess") </script>');
    /*质检员将座席强制签出指定媒体服务器失败时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnAgentForceOutFailure()> AddResult("OnAgentForceOutFailure") </script>');
    /*质检员对指定座席的话路进行拦截，拦截成功时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnInterceptSuccess()> AddResult("OnInterceptSuccess") </script>');
    /*质检员对指定座席的话路进行拦截，拦截失败时，触发此事件 */
    document.write('<script language=javascript for=Phone event=OnInterceptFailure()> AddResult("OnInterceptFailure") </script>');
    /* 录音成功事件 */
    document.write('<script language=javascript for=Phone event=OnRecordSuccess()> AddResult("OnRecordSuccess") </script>');
    /* 录音失败事件 */
    document.write('<script language=javascript for=Phone event=OnRecordFailure()> AddResult("OnRecordFailure") </script>');
    /* 停止录音成功事件 */
    document.write('<script language=javascript for=Phone event=OnStopRecordSuccess()> AddResult("OnStopRecordSuccess") </script>');
    /* 停止录音失败事件 */
    document.write('<script language=javascript for=Phone event=OnStopRecordFailure()> AddResult("OnStopRecordFailure") </script>');
    /* 放音成功事件 */
    document.write('<script language=javascript for=Phone event=OnPlaySuccess()> AddResult("OnPlaySuccess") </script>');
    /* 放音失败事件 */
    document.write('<script language=javascript for=Phone event=OnPlayFailure()> AddResult("OnPlayFailure") </script>');
    /* 停止播放成功事件 */
    document.write('<script language=javascript for=Phone event=OnStopPlaySuccess()> AddResult("OnStopPlaySuccess") </script>');
    /* 停止播放失败事件 */
    document.write('<script language=javascript for=Phone event=OnStopPlayFailure()> AddResult("OnStopPlayFailure") </script>');
    /* 暂停播放成功事件 */
    document.write('<script language=javascript for=Phone event=OnPausePlaySuccess()> AddResult("OnPausePlaySuccess") </script>');
    /* 暂停播放失败事件 */
    document.write('<script language=javascript for=Phone event=OnPausePlayFailure()> AddResult("OnPausePlayFailure") </script>');
    /* 继续放音成功事件 */
    document.write('<script language=javascript for=Phone event=OnContinuePlaySuccess()> AddResult("OnContinuePlaySuccess") </script>');
    /* 继续放音失败事件 */
    document.write('<script language=javascript for=Phone event=OnContinuePlayFailure()> AddResult("OnContinuePlayFailure") </script>');
    /* 快进成功事件 */
    document.write('<script language=javascript for=Phone event=OnForePlaySuccess()> AddResult("OnForePlaySuccess") </script>');
    /* 快进失败事件 */
    document.write('<script language=javascript for=Phone event=OnForePlayFailure()> AddResult("OnForePlayFailure") </script>');
    /* 快退成功事件 */
    document.write('<script language=javascript for=Phone event=OnBackPlaySuccess()> AddResult("OnBackPlaySuccess") </script>');
    /* 快退失败事件 */
    document.write('<script language=javascript for=Phone event=OnBackPlayFailure()> AddResult("OnBackPlayFailure") </script>');
    /* 定时触发 */
    document.write('<script language=javascript for=Phone event=OnTimer()> AddResult("定时器成功触发") </script>');
    /* 释放失败 */
    document.write('<script language=javascript for=Phone event=OnReleaseFailure()> AddResult("释放失败") </script>');
    document.write('<script language=javascript for=Phone event=OnReleaseExFailure()> AddResult("扩展释放失败") </script>');
    document.write('<script language=javascript for=Phone event=OnReleaseExSuccess()> AddResult("扩展释放成功") </script>');
}

