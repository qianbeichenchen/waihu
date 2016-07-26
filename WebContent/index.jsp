<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>外呼测试</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

  </head>
<script src="js/Phone.js"></script>
<script src="js/call.js"></script>
<link href="css/waihu.css" type="text/css" rel="stylesheet">
<link href="css/bootstrap.css" type="text/css" rel="stylesheet">
<body>
<div class="container">
    <div class="form-inline">
        <button id="signin" class="btn btn-default signin">签入</button>
        <button id="signout" class="btn btn-default signout" disabled=true>签出</button>
    </div>

    <div class="form-inline">
        <input type="text" placeholder="请输入手机号" id="phone_num" class="form-control">
        <select id="called" class="form-control" >
            <option>10018</option>
            <option>10010</option>
        </select>
        <button id="out" class="btn btn-default" disabled=true>呼叫</button>
        <button id="release" class="btn btn-default" disabled=true>挂断</button>
    </div>
</div>
</body>
</html>