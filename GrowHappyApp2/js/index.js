mui.plusReady(function() {
	mui.init();
	var id = plus.webview.currentWebview().id;
	plus.storage.setItem("myindex", id.toString()); //当前窗口主键
	var fsex = plus.storage.getItem("fsex"); //性别
	if("男" == fsex) {
		$("#imtx").attr("src", 'img/login_01.jpg'); //男
	}
	if("女" == fsex) {
		$("#imtx").attr("src", 'img/login_03.jpg'); //女
	}

	$("#fname").html(plus.storage.getItem("fname"));
	$("#fage").html(plus.storage.getItem("fage") + "岁");
	security();
	healthy();
	happy();
	getsportnum();
	var m1 = plus.storage.getItem("meuntype");

	if("1" == m1) {
		item_01();
	}
	if("2" == m1) {
		item_02();
	}
	if("3" == m1) {
		item_03();
	}

});

var w;

function security() {
	w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
	//alert(ip+"newbegin/modularSecurity/modSecurity")
	mui.ajax(ip + "newbegin/modularSecurity/modSecurity", {
		data: {
			username: $("#username").val(),
			password: $("#password").val()
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型 
		timeout: 10000, //超时时间设置为10秒；
		success: function(json) {
			//服务器返回响应，根据响应结果，分析是否登录成功；
			w.close();
			//alert("fh");
			if(json['student'] != null) {
				//alert(json['student'].fuID);

				var s1 = json['student'].ftitle;
				var s2 = '<span>' + json['student'].ftag + '</span>';
				$("#cd_my").append(s1 + s2);
				//alert(ip+json['student'].fimagesurl)
				$("#im").attr("src", ip + json['student'].fimagesurl);
				//alert(ip+json['student'].fimagesurl);
				//plus.storage.setItem("score", json['healthyMap'].score);
			} else {
				plus.nativeUI.toast("加载错误哦！", {
					duration: "long"
				});
			}
		},
		error: function(xhr, type, errorThrown) {
			//异常处理； 
			w.close();
			if(type == 'timeout') {
				plus.nativeUI.toast("无法连接服务器，请检查网络！", {
					duration: "long"
				});
			} else {
				plus.nativeUI.toast("异常错误，请联系管理员！", {
					duration: "long"
				});
			}
		}
	});
}
var w1;

function healthy() {
	w1 = plus.nativeUI.showWaiting("　　 请等待...　　 ");
	//alert(ip+"newbegin/modularSecurity/modSecurity")
	mui.ajax(ip + "newbegin/modularHealthy/modHealthy", {
		data: {
			username: $("#username").val(),
			password: $("#password").val()
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型 
		timeout: 10000, //超时时间设置为10秒；
		success: function(json) {
			//服务器返回响应，根据响应结果，分析是否登录成功；
			w1.close();
			//alert("fh");
			if(json['student'] != null) {
				//alert(json['student'].fuID);

				var s1 = json['student'].ftitle;
				var s2 = '<span>' + json['student'].ftag + '</span>';
				$("#cd_my1").append(s1 + s2);
				$("#im1").attr("src", ip + json['student'].fimagesurl);
				//plus.storage.setItem("score", json['healthyMap'].score);
			} else {
				plus.nativeUI.toast("加载错误哦！", {
					duration: "long"
				});
			}
		},
		error: function(xhr, type, errorThrown) {
			//异常处理； 
			w1.close();
			if(type == 'timeout') {
				plus.nativeUI.toast("无法连接服务器，请检查网络！", {
					duration: "long"
				});
			} else {
				plus.nativeUI.toast("异常错误，请联系管理员！", {
					duration: "long"
				});
			}
		}
	});
}

function happy() {
	var w2;

	w2 = plus.nativeUI.showWaiting("　　 请等待...　　 ");
	//alert(ip+"newbegin/modularSecurity/modSecurity")
	mui.ajax(ip + "newbegin/modularHappy/modHappy", {
		data: {
			username: $("#username").val(),
			password: $("#password").val()
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型 
		timeout: 10000, //超时时间设置为10秒；
		success: function(json) {
			//服务器返回响应，根据响应结果，分析是否登录成功；
			w2.close();
			//alert("fh");
			if(json['student'] != null) {
				//alert(json['student'].fuID);

				var s1 = json['student'].ftitle;
				var s2 = '<span>' + json['student'].ftag + '</span>';
				$("#cd_my2").append(s1 + s2);
				$("#im2").attr("src", ip + json['student'].fimagesurl);

				//plus.storage.setItem("score", json['healthyMap'].score);
			} else {
				plus.nativeUI.toast("加载错误哦！", {
					duration: "long"
				});
			}
		},
		error: function(xhr, type, errorThrown) {
			//异常处理； 
			w2.close();
			if(type == 'timeout') {
				plus.nativeUI.toast("无法连接服务器，请检查网络！", {
					duration: "long"
				});
			} else {
				plus.nativeUI.toast("异常错误，请联系管理员！", {
					duration: "long"
				});
			}
		}
	});
}

function item_01() {
	var div1 = document.getElementById('safe');
	div1.style.display = "block";
	var div2 = document.getElementById('health');
	div2.style.display = "none";
	var div3 = document.getElementById('happy');
	div3.style.display = "none";
	var img1 = document.getElementById('menu1');
	img1.src = "img/index_11.jpg";
	var img2 = document.getElementById('menu2');
	img2.src = "img/index_12.jpg";
	var img3 = document.getElementById('menu3');
	img3.src = "img/index_13.jpg";
}

function item_02() {
	var div2 = document.getElementById('health');
	div2.style.display = "block";
	var div1 = document.getElementById('safe');
	div1.style.display = "none";
	var div3 = document.getElementById('happy');
	div3.style.display = "none";
	var img1 = document.getElementById('menu1');
	img1.src = "img/index_26.jpg";
	var img2 = document.getElementById('menu2');
	img2.src = "img/index_24.jpg";
	var img3 = document.getElementById('menu3');
	img3.src = "img/index_13.jpg";
}

function item_03() {
	var div3 = document.getElementById('happy');
	div3.style.display = "block";
	var div2 = document.getElementById('health');
	div2.style.display = "none";
	var div1 = document.getElementById('safe');
	div1.style.display = "none";
	var img1 = document.getElementById('menu1');
	img1.src = "img/index_26.jpg";
	var img2 = document.getElementById('menu2');
	img2.src = "img/index_12.jpg";
	var img3 = document.getElementById('menu3');
	img3.src = "img/index_25.jpg";
}

function getsportnum() //获取运动数据百分比
{
	mui.ajax(ip + "newbegin/modularHealthy/showTodayPercent", {
		data: {			
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型 
		timeout: 10000, //超时时间设置为10秒；
		success: function(json) {
			//服务器返回响应，根据响应结果，分析是否登录成功；
			//alert("fh");
			if(json!= null) {	 			
				json=json*100;					
				$("#MRYD").html(json);
				$(".inside").css("width",json+"%");				
			} else {
				plus.nativeUI.toast("加载错误哦！", {
					duration: "long"
				});
			}
		},
		error: function(xhr, type, errorThrown) {
			//异常处理； 
			if(type == 'timeout') {
				plus.nativeUI.toast("无法连接服务器，请检查网络！", {
					duration: "long"
				});
			} else {
				plus.nativeUI.toast("异常错误，请联系管理员！", {
					duration: "long"
				});
			}
		}
	});
}