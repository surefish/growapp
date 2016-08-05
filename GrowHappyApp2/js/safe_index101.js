mui.plusReady(function() {
		mui.init();
        menu_03();
		
				
	});
	//1 急救  2 安全 3 突发
	var type=1;	
    var indexPage = 1;
	var w;
	var maxPage=0;
	
	//上一页
	function pageUp(){
		var currentPageNO=indexPage;
		if(currentPageNO>1){
			indexPage=indexPage-1;
		}
	     register();
	}	
	//下一页
	function nextPage(){
		var currentPageNO=indexPage;
		var mp=maxPage;
		if(parseInt(currentPageNO)<parseInt(mp)){
			indexPage=parseInt(currentPageNO)+1
		}
		register();
	};
			function register() {
				w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
				mui.ajax(ip + "newbegin/modularSecurity/modSecurityJ", {
					data: {
						indexPage: indexPage,
						type:type	
					},
					dataType: 'json', //服务器返回json格式数据
					type: 'post', //HTTP请求类型 
					timeout: 10000, //超时时间设置为10秒；
					success: function(json) {
					//服务器返回响应，根据响应结果，分析是否登录成功；
					w.close();
					//alert(type);
					//alert(type);
				
				   	 $("#roll1").empty();
				 
					maxPage=parseInt(json['maxPageNO']);
					//alert(maxPage)
					var stList = json['student'];
			        var ht = '';  
				   for (var a = 0; a < stList.length; a++) {
					//alert(stList[a].fuID)
			         var ip1=stList[a].fimagesurl;
			        var fuid1="'"+stList[a].fuID+"'";
			        //alert(ip1);
			        ht+='<a href="javascript:goNextPage('+fuid1+');">';
					ht+='<div class="item"><div class="left"><img src="'+ip1+'"></div>';
					ht+='<div class="right"><div class="right_title">'+	stList[a].ftitle;
					ht+='</div><div class="right_text">'+stList[a].ftag+'</div></div></div></a>';		
		
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
		
		
	
		
function goNextPage(i){
	
	var id=plus.webview.currentWebview().id;
    plus.storage.setItem("wId", "emergency_treatment");
	plus.storage.setItem("isafeFuid", i.toString());
    plus.storage.setItem("type", "安全气象");

	showFact('safe_detail.html', '首页', '', 'isafe_detail','');
}
	

function menu_03()//安全气象
{    
	 type=3;
     register();
}



	