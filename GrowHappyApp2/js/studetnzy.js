
	mui.plusReady(function() {
				mui.init();
				golook();
          });
          
         
		var w;
			function golook() {
				 var mytyp=plus.storage.getItem("myzltype");
				//alert(ip+ "newbegin/index/login")
				w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
				//alert(ip+"newbegin/phone/login")
				mui.ajax(ip + "newbegin/index/studLokWork", {
					data: {
						ftype: mytyp
					},
					dataType: 'json', //服务器返回json格式数据
					type: 'post', //HTTP请求类型 
					timeout: 300000, //超时时间设置为10秒；
					success: function(json) {
						//服务器返回响应，根据响应结果，分析是否登录成功；
						w.close();
						$("#roll1").empty();
					
						var stList = json['student'];
			            var ht = '';
				   for (var a = 0; a < stList.length; a++) {
			       // var ip1=ip+stList[a].furl;
			        var fuid1="'"+stList[a].fuID+"'";
			        //alert(ip1);
			        ht+='<div><a href="javascript:goNextPage('+fuid1+');"><div class="item">'+stList[a].fcreateTime;
			        ht+='<span class="mui-icon mui-icon-forward right"></span>';
					ht+='</div></a></div>';	
					    }
				 
				   	 $("#roll1").append(ht);

					},
					error: function(xhr, type, errorThrown) {
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
//查看详情		
function goNextPage(i){
	
	 var id=plus.webview.currentWebview().id;
	 plus.storage.setItem("myzkzyid", id.toString());
	 plus.storage.setItem("myzfuidzy", i.toString());
	
	 //plus.storage.setItem("htype1", type.toString());
	showFact('school_index3.html', '首页', '', 'school_index3','');
}