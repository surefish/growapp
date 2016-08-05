
mui.plusReady(function(){
	mui.init();
	home();
	});
	
	function home(){
		var fc= plus.storage.getItem("wdrybfuid");
	    mui.ajax(ip + "newbegin/index/imaInfo", {
			data: {
				fuid:fc
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			success: function(json) {
			//获得服务器响应
			var ip1 = ip + json['student'].furl;
			
             $("#imzplj").attr("src", ip1); 
             $("#fpname").empty();
             $("#fzpms").empty();
             $("#sczsj").empty();
             $("#fpname").append(json['student'].fname); //照片名
             $("#fzpms").append(json['student'].fremark); //照片描述
			 $("#sczsj").append("上传时间："+json['student'].fcreateTime);	//上传时间
				
			}
		});
	}
	
	
	//班级照  返回 到 个人相册
	function gobackme(){
	    var wobj = plus.webview.getWebviewById("pict_ryb");
        wobj.reload(true);
		mui.back();
	}
	
	var w;
	function gomyupda(){
		var n=$("#newName").val();//照片名
		var m=$("#newzpms").val();//描述
		if(""==n||"更改照片名字"==n){
			alert("请输入要修改的照片名！");
			return;
		}
		if(""==m||"照片描述"==m){
			alert("请输入照片的描述！");
			return;
		}
		var fc= plus.storage.getItem("wdrybfuid");
		w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
	    mui.ajax(ip + "newbegin/index/updatePhoto", {
			data: {
				fuid:fc,
				fname:n,
				fms:m
			},
			dataType: 'text', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			success: function(json) {
			//获得服务器响应
			w.close();
			if('success'==json){
				home();
				closeWindow();
				plus.nativeUI.toast("照片修改成功!");
			 }	
			},error: function(xhr, type, errorThrown) {
						//异常处理； 
						w.close();
						if (type == 'timeout') {
							plus.nativeUI.toast("无法连接服务器，请检查网络！", {
								duration: "long"
							});
						} else {
							plus.nativeUI.toast("登录失败，请联系管理员！", {
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