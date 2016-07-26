<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>签入设置</title>
</head>
<!-- <script src="js/jquery.js"></script> -->
<script src="js/signin.js"></script>
<link href="css/bootstrap.css" type="text/css" rel="stylesheet">
<style>
.container{
      width: 80%;
      margin-left:133px;
      margin-top:35px;
      border: 1px solid #eee;
      padding: 10px;
}
.table{
	margin-bottom:20px;
}
.table tr{
 	margin:5%;
}
.table tr td{
	margin-left:20px;
	margin-right:20px;
	width:150px;
} 

</style>
<body>
<!-- 
<div class="container"> 
    <form class="form-inline ">
        <h4>初始化参数</h4>
        <div >
            OpenEye初始化多个SipServer地址
            <span >是否使用内置OpenEye功能：</span>
            <input  type="checkbox" id="UseWebVoip" name="UseWebVoip" >
        </div>

        <div class="form-group">
            OpenEye初始化多个SipServer地址
            <label >UAP地址:</label>
            <input type="text" class="form-control" id="WebVoipAddress" disabled="disabled"  value="133.160.71.182">
        </div>
        <div class="form-group">
            <label>备用服务器IP:</label>
            <input type="text" class="form-control" id="WebVoipBakSIPServerIP" disabled="disabled"  value="133.160.71.182">
        </div>
        <div class="form-group">
            <label>端口号:</label>
            <input type="text" class="form-control" value="5060" id="WebVoipSIPServerPort" disabled="disabled">
        </div>
        <div class="form-group">
            <label>备用服务器端口:</label>
            <input type="text" class="form-control" value="5060" id="WebVoipBakSIPServerPort" disabled="disabled">
        </div>
        <div class="form-group">
            <label>分机号：</label>
            <input type="text" class="form-control" id="WebVoipAccount" disabled="disabled" value="84460">
        </div>
        <div class="form-group">
            <label >密码:</label>
            <input type="text" class="form-control" id="WebVoipPassword" disabled="disabled">
        </div>
        <div class="form-group">
            <label >主MCP/CCS地址</label>
            <input type="text" class="form-control" id="txtMostlyAddress">
            <span style="color:red">*</span>
        </div>
        <div class="form-group">
            <label >备MCP/CCS地址:</label>
            <input type="text" class="form-control" id="txtSubordinationAddress">
            <span style="color:red">*</span>
        </div>
        <div class="form-group">
            <label >服务器类型:</label>
            <select name="ServerType" class="form-control" id="ServerType" >
                <option selected value="22">MCP</option>
                <option value="20">CCS</option>
            </select>
        </div>
        <div class="form-group" >
            <label >座席签入工号：</label>
            <input type="text" class="form-control" id="txtLabourNo">
            <span style="color:red">*</span>
        </div>
        <div class="form-group">
            <label >密码</label>
            <input type="text" class="form-control" id="password">
            <span style="color:red">*</span>
        </div>
        <div class="form-group">
            <label >通讯进程ID</label>
            <input type="text" class="form-control" id="txtPhoneID" value="40">
            <span style="color:red">*</span>
        </div>
        <div class="form-group">
            <input disabled="disabled" readonly="readonly" type="checkbox" name="autoanswer" onclick="setAutoAnswer()">&nbsp;自动应答
            <input disabled="disabled" readonly="readonly" type="checkbox" name="autowork" >&nbsp;自动进入工作态
            <input disabled="disabled" readonly="readonly" type="checkbox" name="autostudy" >&nbsp;签入后不分配来电
            <input disabled="disabled" readonly="readonly" type="checkbox" name="autorelease" onclick="setAutoRelease()" checked="checked">&nbsp;自动释放
        </div>
    </form>

    <form class="form-inline">
        <h4>签入</h4>
        <div class="form-group">选择要签入的媒体服务器:
            <input  type="checkbox" name="CTISERVER" checked="checked">MS_CTISERVER
            <input  type="checkbox" name="WEBM">MS_WEBM
            <input  type="checkbox" name="MAILM">MS_MAILM
        </div>
        <div class="form-group">
            <select class="form-control" id="SeatType" name="SeatType">媒体类型
                <option value="2">1B1D</option>
                <option selected value="4">PC+PHONE</option>
                <option value="5">2B1D</option>
                <option value="6">6B1D</option>
        </select>
        </div>
        <div class="form-group">座席电话:
       		<input type="text" name="txtPhoneNum" id="txtPhoneNum" value="" class="form-control">
            <span style="color:red">*</span>
        </div>
        <div class="form-group">自动呼出：
            <input type="checkbox" name="auto_call" value="true"/>是
        </div>

    </form>
    <button class="btn btn-default" id="sign">确定签入</button>

</div>
 -->
<!-- 
<div id="topPage"
     style="position: absolute;top:0;left: 0;right: 0;bottom: 0;
         z-index: 100;display:none;" >
    <div style="color:#71b643;position: fixed;top: 200px;left: 450px;">
        <span >加载中。。。。</span>
        <img src="2.gif">
    </div>
</div> -->


<div class="container">

    <h4>初始化参数</h4>
    <table  class="table">
        <form >
            <tr>
                <td colspan="6" style="width:100%">
                    <!--OpenEye初始化多个SipServer地址 -->
                    <span >是否使用内置OpenEye功能:</span>
                    <input  type="checkbox" id="UseWebVoip" name="UseWebVoip" >
                </td>
            </tr>
            <tr>

                <!--OpenEye初始化多个SipServer地址 -->
                <td style="width:10%"> UAP地址 ：</td>
                <td >
                    <input type="text" class="form-control" id="WebVoipAddress" disabled="disabled"  value="133.160.71.182">
                </td>
                <td style="width:11%">  备用服务器IP ：</td>
                <td>
                    <input type="text" class="form-control" id="WebVoipBakSIPServerIP" disabled="disabled"  value="133.160.71.182">
                </td>
                <td style="width:10%"> 端口号 ：</td>
                <td>
                    <input type="text" class="form-control" value="5060" id="WebVoipSIPServerPort" disabled="disabled">
                </td >
            </tr>
            <tr>
                <td> 备用服务器端口：</td>
                <td>
                    <input type="text" class="form-control" value="5060" id="WebVoipBakSIPServerPort" disabled="disabled">
                </td >
                <td> 分机号：</td>
                <td>
                    <input type="text" class="form-control" id="WebVoipAccount" disabled="disabled" value="84460">
                </td >
                <td> 密码：</td>
                <td>
                    <input type="text" class="form-control" id="WebVoipPassword" disabled="disabled">
                </td >
            </tr>
            <tr>
                <td> 主MCP/CCS地址：</td>
                <td>
                    <input type="text" class="form-control" id="txtMostlyAddress">
                </td >
                <td> 备MCP/CCS地址：</td>
                <td>
                    <input type="text" class="form-control" id="txtSubordinationAddress">
                </td >
                <td> 服务器类型：</td>
                <td>
                    <select name="ServerType" class="form-control" id="ServerType" >
                        <option selected value="22">MCP</option>
                        <option value="20">CCS</option>
                    </select>
                </td >
            </tr>
            <tr>
                <td > 座席签入工号：</td>
                <td>
                    <input type="text" class="form-control" id="txtLabourNo">
                </td >
                <td> 密码：</td>
                <td>
                    <input type="text" class="form-control" id="password">
                </td >
                <td> 通讯进程ID：</td>
                <td>
                    <input type="text" class="form-control" id="txtPhoneID" value="40">
                </td >
            </tr>
            <tr>
                <td colspan="6" style="width:100%">
                    <input disabled="disabled" readonly="readonly" type="checkbox" name="autoanswer" onclick="setAutoAnswer()">&nbsp;自动应答
                    <input disabled="disabled" readonly="readonly" type="checkbox" name="autowork" >&nbsp;自动进入工作态
                    <input disabled="disabled" readonly="readonly" type="checkbox" name="autostudy" >&nbsp;签入后不分配来电
                    <input disabled="disabled" readonly="readonly" type="checkbox" name="autorelease" onclick="setAutoRelease()" checked="checked">&nbsp;自动释放
                </td >
            </tr>

        </form>
    </table>
    <h4>签入</h4>
    <table class="table">
        <form>
            <tr>
                <td colspan="6" style="width:100%"> 选择要签入的媒体服务器：
                    <input  type="checkbox" id="CTISERVER" checked="checked">MS_CTISERVER
                    <input  type="checkbox" id="WEBM">MS_WEBM
                    <input  type="checkbox" id="MAILM">MS_MAILM
                </td>
            </tr>
            <tr>
                <td style="width:10%">媒体类型：</td>
                <td>
                    <select class="form-control" id="SeatType" name="SeatType">
                        <option value="2">1B1D</option>
                        <option selected value="4">PC+PHONE</option>
                        <option value="5">2B1D</option>
                        <option value="6">6B1D</option>
                    </select>
                </td>
                <td style="width:10%">座席电话：</td>
                <td>
                    <input type="text" name="txtPhoneNum" id="txtPhoneNum" value="" class="form-control">
                </td>
                <td colspan="2">自动呼出：
                    <input type="checkbox" name="auto_call" value="true"/>是
                </td>
            </tr>
        </form>
    </table>
    <button class="btn btn-default" id="sign">确定签入</button>
</div>
</body>
</html>