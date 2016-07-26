<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<!--  签入成功时触发此事件-->
<SCRIPT language=javascript for=Phone event=OnSignInExSuccess(p1)>
<!--
  AddResult("已签入");
$j("#tcallnum").attr("disabled",false);
 // AddResult('OnSignInExSuccess');
//-->
</SCRIPT>
<!--  签入失败时触发此事件-->
<SCRIPT language=javascript for=Phone event=OnSignInExFailure(P1)>
<!--
  AddResult("签入失败");
  //AddResult('OnSignInExFailure');
//-->
</SCRIPT>
<!--  签出成功时触发此事件-->
<SCRIPT language=javascript for=Phone event=OnSignOutExSuccess(p)>
<!--
    alert("签出成功");
    AddResult("签出成功");
	//AddResult('OnSignOutExSuccess');
//-->
</SCRIPT>
<!--  签出失败时触发此事件-->
<SCRIPT language=javascript for=Phone event=OnSignOutExFailure(p)>
<!--
    AddResult("签出失败");
	AddResult('OnSignOutExFailure');
//-->
</SCRIPT>
<!--内部求助成功触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnInternalHelpSuccess()>
<!--
    AddResult("内部求助成功");
	AddResult('OnInternalHelpSuccess');
//-->
</SCRIPT>
<!--三方求助失败时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnInternalHelpFailure()>
<!--
    AddResult("求助失败");
	AddResult('OnInternalHelpFailure');
//-->
</SCRIPT>
<!-- 取回呼叫成功时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnInternalHelpRefused()>
<!--
	AddResult("取回呼叫成功");
	AddResult('OnInternalHelpRefused');
//-->
</SCRIPT>
<!-- 请求三方通话成功时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnConfJoinSuccess()>
<!--
    AddResult("请求三方通话成功");
	//AddResult('OnConfJoinSuccess');
//-->
</SCRIPT>
<!-- 三方通话成功时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnConfJoinSuccTalk()>
<!--
    AddResult("三方通话成功");
	//AddResult('OnConfJoinSuccTalk');
//-->
</SCRIPT>
<!-- 三方通话失败时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnConfJoinFailure()>
<!--
    AddResult("三方通话失败");
	//AddResult('OnConfJoinFailure');
//-->
</SCRIPT>

<SCRIPT language=javascript for=Phone event=OnAnswerRequestEx(mediatype)>
<!--
 AddResult("有来电呼入");
//-->
</SCRIPT>
<!-- 当座席休息结束时间到达时,触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnRestTimeOut(resttime)>
<!--
	alert("休息时间已到,请取消休息");
	//AddResult("OnRestTimeOut");
//-->
</SCRIPT>
<!--设置呼叫数据成功时触发此事件  --><!--设置呼叫数据失败时触发此事件  --><!--获取呼叫数据成功时触发此事件  --><!--获取呼叫数据失败时触发此事件  --><!--信号检测事件  -->
<SCRIPT language=javascript for=Phone event=OnCallOutDetectResult(result)>
<!--
AddResult("OnCallOutDetectResult");
alert(result);
//-->
</SCRIPT>
<!-- 向用户报音成功时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnReportSoundSuccess()>
<!--
AddResult("OnReportSoundSuccess");
//-->
</SCRIPT>
<!-- 与用户恢复通话时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnReportSndEndTalk()>
<!--
AddResult("OnReportSndEndTalk");
//-->
</SCRIPT>
<!-- 向用户报音失败时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnReportSoundFailure()>
<!--
AddResult("OnReportSoundFailure");
//-->
</SCRIPT>
<!-- 保持成功将顺序触发OnIsTalkingChanged、OnEndMuteUserSuccess、OnHoldSuccess 事件 -->
<SCRIPT language=javascript for=Phone event=OnIsTalkingChanged()>
<!--
//AddResult("OnIsTalkingChanged");
//-->
</SCRIPT>
<!-- OnEndMuteUserSuccess 事件只有在保持呼叫前座席处于静音状态时才触发 -->
<SCRIPT language=javascript for=Phone event=OnEndMuteUserSuccess()>
<!--
AddResult("OnEndMuteUserSuccess");
//-->
</SCRIPT>

<SCRIPT language=javascript for=Phone event=OnHoldSuccess()>
<!--
AddResult("OnHoldSuccess");
//-->
</SCRIPT>
<!-- 取保持成功时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnGetHoldSuccess()>
<!--
AddResult("OnGetHoldSuccess");
//-->
</SCRIPT>
<!-- 取保持失败时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnGetHoldFailure()>
<!--
AddResult("OnGetHoldFailure");
//-->
</SCRIPT>
<!--退出休息成功时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnCancelRestSuccess()>
<!--
AddResult("OnCancelRestSuccess");
//-->
</SCRIPT>
<!--退出休息失败时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnCancelRestFailure()>
<!--
AddResult("OnCancelRestFailure");
//-->
</SCRIPT>
<!-- PC+PHONE时，用户先挂机触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnRequestReleaseEx()>
<!--
//stop_secs();
AddResult("用户挂机");
//$j("#btn_call_out").attr("disabled",false);
button_ReleaseAnswer();


//-->
</SCRIPT>
<!--调用休息成功时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnRestSuccess()>
<!--
AddResult("OnRestSuccess");
//-->
</SCRIPT>
<!--调用休息失败时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnRestFailure()>
<!--
AddResult("OnRestFailure");
//-->
</SCRIPT>
<!--开始休息成功时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnStartRest()>
<!--
AddResult("OnStartRest");
//-->
</SCRIPT>
<!--开始静音成功时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnBeginMuteUserSuccess()>
<!--
AddResult("OnBeginMuteUserSuccess");
//-->
</SCRIPT>
<!-- 示忙成功时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnSayBusySuccess()>
<!--
AddResult("OnSayBusySuccess");
//-->
</SCRIPT>
<!-- 示忙失败时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnSayBusyFailure()>
<!--
AddResult("OnSayBusyFailure");
//-->
</SCRIPT>
<!-- 示闲成功时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnSayFreeSuccess()>
<!--
AddResult("OnSayFreeSuccess");
//-->
</SCRIPT>
<!-- 示闲失败时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnSayFreeFailure()>
<!--
AddResult("OnSayFreeFailure");
//-->
</SCRIPT>
<!--  开始静音失败时触发此事件-->
<SCRIPT language=javascript for=Phone event=OnBeginMuteUserFailure()>
<!--
AddResult("OnBeginMuteUserFailure");
//-->
</SCRIPT>
<!--  结束静音成功时触发此事件-->
<SCRIPT language=javascript for=Phone event=OnEndMuteUserSuccess()>
<!--
AddResult("OnEndMuteUserSuccess");
//-->
</SCRIPT>
<!--结束静音失败时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnEndMuteUserFailure()>
<!--
AddResult("OnEndMuteUserFailure");
//-->
</SCRIPT>

<SCRIPT language=javascript for=Phone event=OnAnswerRequestEx()>
<!--
 AddResult('有来电');
//-->
</SCRIPT>
<!-- 应答成功触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnAnswerExSuccess(p1)>
<!--
AddResult('OnAnswerExSuccess');
//-->
</SCRIPT>
<!-- 应答失败触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnAnswerExFailure(p1)>
<!--
AddResult('OnAnswerExFailure');
//-->
</SCRIPT>
<!-- 外呼成功触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnCallOutSuccess()>
<!--

AddResult("振铃");

//-->
</SCRIPT>
<!-- 外呼失败触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnCallOutFailure()>
<!--
AddResult("呼叫失败");
//-->
</SCRIPT>
<!-- 外呼成功并且被叫开始通话 -->
<SCRIPT language=javascript for=Phone event=OnCallOutSuccTalk()>
<!--
$j.post("hold.callOut.calloutlog.do?method=callLinked&recordId="+recordId);
reset_time_spent();
show_secs();
AddResult("用户接听");
//-->
</SCRIPT>
<!--申请会场成功时,触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnRequestConferenceSuccess()>
<!--
AddResult("OnRequestConferenceSuccess");
//-->
</SCRIPT>
<!--申请会场失败时,触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnReleaseConferenceSuccess()>
<!--
AddResult("OnReleaseConferenceSuccess");
//-->
</SCRIPT>
<!--释放会场成功按顺序触发OnReleaseExSuccess和OnReceiveAgentStateInfo事件  -->
<SCRIPT language=javascript for=Phone event=OnReleaseExSuccess()>
<!--
stop_secs();
AddResult("挂断");
callWindow=null;
$j.post("hold.callOut.calloutlog.do?method=callDown&recordId="+recordId);
//-->
</SCRIPT>

<SCRIPT language=javascript for=Phone event=OnReceiveAgentStateInfo()>
<!--
//AddResult("OnReceiveAgentStateInfo");
//-->
</SCRIPT>
<!-- 座席加入会场成功 -->
<SCRIPT language=javascript for=Phone event=OnAddAgentToConferenceSuccess()>
<!--
AddResult("OnAddAgentToConferenceSuccess");
//-->
</SCRIPT>
<!--座席加入会场失败  -->
<SCRIPT language=javascript for=Phone event=OnAddAgentToConferenceFailure()>
<!--
AddResult("OnAddAgentToConferenceFailure");
//-->
</SCRIPT>
<!--用户加入会场失败  -->
<SCRIPT language=javascript for=Phone event=OnAddClientToConferenceSuccess()>
<!--
AddResult("OnAddClientToConferenceSuccess");
//-->
</SCRIPT>
<!--用户加入会场失败  -->
<SCRIPT language=javascript for=Phone event=OnAddClientToConferenceFailure()>
<!--
AddResult("OnAddClientToConferenceFailure");
//-->
</SCRIPT>
<!--内呼时，被呼叫座席接收到请求应答的消息会触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnCallInnerSuccess()>
<!--
AddResult("OnCallInnerSuccess");
//-->
</SCRIPT>
<!--内呼时，被呼叫座席应答会触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnCallInnerSuccTalk()>
<!--
AddResult("OnCallInnerSuccTalk");
//-->
</SCRIPT>
<!-- 内呼失败时将触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnCallInnerFailure()>
<!--
AddResult("OnCallInnerFailure");
//-->
</SCRIPT>
<!-- 呼叫进入座席私有队列时将触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnPrivateQueueCallIn(iCallID,caller,called,mediaType)>
<!--
 AddResult("呼叫进入座席私有队列");
//-->
</SCRIPT>
<!-- 呼叫离开座席私有队列时将触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnPrivateQueueCallOut(pCallID,caller,called,mediaType)>
<!--
 AddResult("呼叫离开座席私有队列");
//-->
</SCRIPT>
<!-- 发布公告成功时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnNotifyBulletinSuccess()>
<!--
AddResult("OnNotifyBulletinSuccess");
//-->
</SCRIPT>
<!-- 发布公告成功时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnNotifyBulletinFailure()>
<!--
AddResult("OnNotifyBulletinFailure");
//-->
</SCRIPT>
<!--转移失败触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnTransInnerFailure()>
<!--
AddResult("OnTransInnerFailure");
//-->
</SCRIPT>
<!--转移成功触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnTransInnerSuccess()>
<!--
AddResult("OnTransInnerSuccess");
//-->
</SCRIPT>
<!-- 保持呼叫释放事件 -->
<SCRIPT language=javascript for=Phone event=OnHoldCallRelease()>
<!--
AddResult("OnHoldCallRelease");
//-->
</SCRIPT>
<!--转IVR成功时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnRedirectToAutoSuccess()>
<!--
AddResult("OnRedirectToAutoSuccess");
//-->
</SCRIPT>
<!--转IVR失败时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnRedirectToAutoFailure()>
<!--
AddResult("OnRedirectToAutoFailure");
//-->
</SCRIPT>
<!--挂起转IVR返回座席时触发此事件  -->
<SCRIPT language=javascript for=Phone event=OnReturnFromIvr()>
<!--
AddResult("OnReturnFromIvr");
alert(Phone.QueryCallDataEx(5));
//-->
</SCRIPT>
<!-- 成功转成功时触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnTransferResultNotify(cause)>
<!--
	if(cause=='0')
	{
		alert("操作成功");
	}
	else
	{
		alert("操作失败");
	}
	AddResult("OnTransferResultNotify");
//-->
</SCRIPT>
<!--转移失败触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnTransInnerFailure()>
<!--
AddResult("OnTransInnerFailure");
//-->
</SCRIPT>
<!--转移成功触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnTransInnerSuccess()>
<!--
AddResult("OnTransInnerSuccess");
//-->
</SCRIPT>
<!-- 转队列时，首先触发OnBeforeTrans 事件，然后开始执行转队列操作。-->
<SCRIPT language=javascript for=Phone event=OnBeforeTrans()>
<!--
AddResult("OnBeforeTrans");
//-->
</SCRIPT>
<!--转队列失败时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnRedirectToOtherFailure()>
<!--
AddResult("OnRedirectToOtherFailure");
//-->
</SCRIPT>
<!--转队列成功时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnRedirectToOtherSuccess()>
<!--
AddResult("OnRedirectToOtherSuccess");
//-->
</SCRIPT>
<!--呼叫转移成功时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnTransOutSuccess()>
<!--
AddResult("OnTransOutSuccess");
//-->
</SCRIPT>
<!--呼叫转移失败时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnTransOutFailure>
<!--
AddResult("OnTransOutFailure");
//-->
</SCRIPT>
<!--座席设置自己的呼叫转移，包括取消呼叫转移，设置前转或者忙转成功时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnSetTransferSuccess()>
<!--
AddResult("OnSetTransferSuccess");
//-->
</SCRIPT>
<!--座席设置自己的呼叫转移，包括取消呼叫转移，设置前转或者忙转成功时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnSetTransferFailure()>
<!--
AddResult("OnSetTransferFailure");
//-->
</SCRIPT>
<!--监听话务员通话成功时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnSuperviseTrunkSuccess()>
<!--
AddResult("OnSuperviseTrunkSuccess");
//-->
</SCRIPT>
<!--监听话务员通话失败时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnSuperviseTrunkFailure()>
<!--
AddResult("OnSuperviseTrunkFailure");
//-->
</SCRIPT>
<!--插入成功时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnInsertSuccess()>
<!--
AddResult("OnInsertSuccess");
//-->
</SCRIPT>
<!--插入失败时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnInsertFailure()>
<!--
AddResult("OnInsertFailure");
//-->
</SCRIPT>
<!--质检员将话务员强制示闲成功时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnAgentForceIdleSuccess()>
<!--
AddResult("OnAgentForceIdleSuccess");
//-->
</SCRIPT>
<!--质检员将话务员强制示闲失败时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnAgentForceIdleFailure()>
<!--
AddResult("OnAgentForceIdleFailure");
//-->
</SCRIPT>
<!--质检员将座席强制示忙成功时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnAgentForceBusySuccess()>
<!--
AddResult("OnAgentForceBusySuccess");
//-->
</SCRIPT>
<!--质检员将座席强制示忙失败时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnAgentForceBusyFailure()>
<!--
AddResult("OnAgentForceBusyFailure");
//-->
</SCRIPT>
<!--质检员将座席强制签出成功时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnAgentForceOutSuccess()>
<!--
AddResult("OnAgentForceOutSuccess");
//-->
</SCRIPT>
<!--质检员将座席强制签出失败时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnAgentForceOutFailure()>
<!--
AddResult("OnAgentForceOutFailure");
//-->
</SCRIPT>
<!--质检员将座席强制签出指定媒体服务器成功时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnAgentForceOutSuccess()>
<!--
AddResult("OnAgentForceOutSuccess");
//-->
</SCRIPT>
<!--质检员将座席强制签出指定媒体服务器失败时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnAgentForceOutFailure()>
<!--
AddResult("OnAgentForceOutFailure");
//-->
</SCRIPT>
<!--质检员对指定座席的话路进行拦截，拦截成功时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnInterceptSuccess()>
<!--
AddResult("OnInterceptSuccess");
//-->
</SCRIPT>
<!--质检员对指定座席的话路进行拦截，拦截失败时，触发此事件 -->
<SCRIPT language=javascript for=Phone event=OnInterceptFailure()>
<!--
AddResult("OnInterceptFailure");
//-->
</SCRIPT>
<!-- 录音成功事件 -->
<SCRIPT language=javascript for=Phone event=OnRecordSuccess()>
<!--
//AddResult("OnRecordSuccess");
//-->
</SCRIPT>
<!-- 录音失败事件 -->
<SCRIPT language=javascript for=Phone event=OnRecordFailure()>
<!--
AddResult("OnRecordFailure");
//-->
</SCRIPT>
<!-- 停止录音成功事件 -->
<SCRIPT language=javascript for=Phone event=OnStopRecordSuccess()>
<!--
AddResult("OnStopRecordSuccess");
//-->
</SCRIPT>
<!-- 停止录音失败事件 -->
<SCRIPT language=javascript for=Phone event=OnStopRecordFailure()>
<!--
AddResult("OnStopRecordFailure");
//-->
</SCRIPT>
<!-- 放音成功事件 -->
<SCRIPT language=javascript for=Phone event=OnPlaySuccess()>
<!--
AddResult("OnPlaySuccess");
//-->
</SCRIPT>
<!-- 放音失败事件 -->
<SCRIPT language=javascript for=Phone event=OnPlayFailure()>
<!--
AddResult("OnPlayFailure");
//-->
</SCRIPT>
<!-- 停止播放成功事件 -->
<SCRIPT language=javascript for=Phone event=OnStopPlaySuccess()>
<!--
AddResult("OnStopPlaySuccess");
//-->
</SCRIPT>
<!-- 停止播放失败事件 -->
<SCRIPT language=javascript for=Phone event=OnStopPlayFailure()>
<!--
AddResult("OnStopPlayFailure");
//-->
</SCRIPT>
<!-- 暂停播放成功事件 -->
<SCRIPT language=javascript for=Phone event=OnPausePlaySuccess()>
<!--
AddResult("OnPausePlaySuccess");
//-->
</SCRIPT>
<!-- 暂停播放失败事件 -->
<SCRIPT language=javascript for=Phone event=OnPausePlayFailure()>
<!--
AddResult("OnPausePlayFailure");
//-->
</SCRIPT>
<!-- 继续放音成功事件 -->
<SCRIPT language=javascript for=Phone event=OnContinuePlaySuccess()>
<!--
AddResult("OnContinuePlaySuccess");
//-->
</SCRIPT>
<!-- 继续放音失败事件 -->
<SCRIPT language=javascript for=Phone event=OnContinuePlayFailure()>
<!--
AddResult("OnContinuePlayFailure");
//-->
</SCRIPT>
<!-- 快进成功事件 -->
<SCRIPT language=javascript for=Phone event=OnForePlaySuccess()>
<!--
AddResult("OnForePlaySuccess");
//-->
</SCRIPT>
<!-- 快进失败事件 -->
<SCRIPT language=javascript for=Phone event=OnForePlayFailure()>
<!--
AddResult("OnForePlayFailure");
//-->
</SCRIPT>
<!-- 快退成功事件 -->
<SCRIPT language=javascript for=Phone event=OnBackPlaySuccess()>
<!--
AddResult("OnBackPlaySuccess");
//-->
</SCRIPT>
<!-- 快退失败事件 -->
<SCRIPT language=javascript for=Phone event=OnBackPlayFailure()>
<!--
AddResult("OnBackPlayFailure");
//-->
</SCRIPT>
<!-- 定时触发 -->
<SCRIPT language=javascript for=Phone event=OnTimer()>
<!--
AddResult("定时器成功触发");
//-->
</SCRIPT>
</head>
<body>
	<input type="button" value="外呼" onclick="button_Answer()">
    <OBJECT style="LEFT: 0px; TOP: 0px; VISIBILITY: hidden" name="Phone" name="Phone" classid="clsid:014D83A5-7E35-11D3-8AF9-00C0DF245E51" VIEWASTEXT>
    	<PARAM NAME="CcsID" VALUE="22">
    	<PARAM NAME="MainCcsIP" VALUE="133.244.206.102">
    	<PARAM NAME="BackCcsIP" VALUE="133.244.206.102">
    	<PARAM NAME="WorkNo" VALUE="7820">
    	<PARAM NAME="Password" VALUE="Hh1234">
    	<PARAM NAME="MyID" VALUE="40">
    	<PARAM NAME="AgentType " VALUE="AGENT_TYPE_PC_PHONE">
    	
    </OBJECT>
</body>
</html>
<script src="./js/jquery-1.8.1.min.js"></script>
<script>
function AddResult(Result)
{
	alert(Result);
}
function button_Answer() 
{
	//应答某一媒体类型的呼叫
	  var result=Phone.Initial();
		alert("123"+Phone.UserName);
		alert("IsInitial"+Phone.IsInitial);
		alert("IsConnected"+Phone.IsConnected);
		alert("IsLogon"+Phone.IsLogon);
	  if(result=='0')
      {
          alert('初始化成功2');
      }
      else
      {
          alert('初始化失败2，原因是 '+Phone.GetPromptByErrorCode(result));
//          return;
      }
	
}
</script>