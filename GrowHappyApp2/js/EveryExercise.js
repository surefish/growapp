/**
 每日运动JS
 ysh
 **/

mui.plusReady(function(){
	mui.init();
//查询今日运动	
  mryd();
	
});

function mryd(){
	mui.ajax(ip + "newbegin/modularHealthy/showToday", {
			data: {
			},
			dataType: 'text', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			success: function(json) {
				var data = json.split(",");
				if(null!=data[0]){
					$("#sport1").html(data[0]);//坐位体前屈
					plus.storage.setItem("jrsport1", data[0]);
				}
				if(null!=data[1]){
					$("#sport2").html(data[1]);//仰卧起坐
                    plus.storage.setItem("jrsport2", data[1]);
				}
				if(null!=data[2]){
				   $("#sport3").html(data[2]);//跳绳
				    plus.storage.setItem("jrsport3", data[2]);
				}
				
				//alert(data[3]);
				if('优秀'==data[3]){
					$("#check1").empty();
					$('#check1').html("优秀");//坐位体前屈
				}
				if('优秀'==data[4]){
					$("#check2").empty();
					$('#check2').html("优秀");//仰卧起坐
				
				}
				if('优秀'==data[5]){
					$("#check3").empty();
					$('#check3').html("优秀");//跳绳
				}
			
			
				
		if('优秀'!=data[3]){
		document.getElementById("check1").addEventListener('click', function(e) {
		$("#xmName").empty();
		$("#xmsru").empty();
		$("#xmName").append("坐位体前屈"); //标题
		$("#xmsru").append('<input type="text" id="xmValue" />厘米'); 
		$("#xmsru").append('<input type="hidden" id="xmType" value="011001" />');
		openWindow();
	       });
		}
	
		if('优秀'!=data[4]){
		document.getElementById("check2").addEventListener('click', function(e) {
		$("#xmName").empty();
		$("#xmsru").empty();
		$("#xmName").append("仰卧起坐"); //标题
		$("#xmsru").append('<input type="text" id="xmValue" />个');
		$("#xmsru").append('<input type="hidden" id="xmType" value="011003" />');
		openWindow();
	     });
		}
	    if('优秀'!=data[5]){
		document.getElementById("check3").addEventListener('click', function(e) {
		$("#xmName").empty();
		$("#xmsru").empty();
		$("#xmName").append("跳绳"); //标题
		$("#xmsru").append('<input type="text" id="xmValue" />次'); 
		$("#xmsru").append('<input type="hidden" id="xmType" value="011002" />');
		openWindow();
	    });
	    }	
		}
		});
	
}


//提交
function goinsert(){
	var r = /^[0-9]+.?[0-9]*$/;
	var xmv=$("#xmValue").val();
	var xtyp=$("#xmType").val();
	
	if (!r.test(xmv)) {
	$('#input').val("0");
	plus.nativeUI.toast("请输入数字", {
		duration: "long"
	});
	return;
}
if ($('#xmValue').val() > 999) {
	$('#xmValue').val("999");
	plus.nativeUI.toast("请输入小于1000的数字", {
		duration: "long"
	});
	return;
}

var w = plus.nativeUI.showWaiting("　　 请等待...　　 ");

mui.ajax(ip + "newbegin/modularHealthy/insert", {
	data: {
		count: xmv,
		type: xtyp
	},
	dataType: 'text', //服务器返回json格式数据
	type: 'post', //HTTP请求类型 
	timeout: 30000, //超时时间设置为10秒；
	success: function(json) {
		//服务器返回响应，根据响应结果，分析是否登录成功；
		w.close();
		
		var data = json.split(",");
		
		if (xtyp=='011001') {//坐位体前屈
          $("#sport1").html(data[2]);
          plus.storage.setItem("sport1",data[2].toString());
		}
		if (xtyp == '011002') {//跳绳
          $("#sport3").html(data[2]);
           plus.storage.setItem("sport3",data[2].toString());
		}
		if (xtyp == '011003') {//仰卧起坐
         $("#sport2").html(data[2]);
          plus.storage.setItem("sport2",data[2].toString());
		}
		mryd();
		closeWindow();
	},
	error: function(xhr, type, errorThrown) {
		//异常处理； 
		w.close();
		if (type == 'timeout') {
			plus.nativeUI.toast("无法连接服务器，请检查网络！", {
				duration: "long"
			});
		} else {
			plus.nativeUI.toast("系统异常，请联系管理员！", {
				duration: "long"
			});
		}
	}
});
}



  
   	function openWindow() {
	document.getElementById('light').style.display = 'block';
	document.getElementById('fade').style.display = 'block';
    }

    function closeWindow() {
	document.getElementById('light').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
   }
    
    
    
    
    
    
    
    
    function goback(){
	    var id=plus.storage.getItem("myindex");
	    var wobj = plus.webview.getWebviewById(id.toString());
        wobj.reload(true);
		mui.back();
	}
    
    
   