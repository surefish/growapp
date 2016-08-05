mui.plusReady(function(){
	mui.init();
	var m1=plus.storage.getItem("mytype2");	
	 if("1"==m1){
			menu_01();
		}
	  if("2"==m1){
		    menu_02();
		}

	});
//1亲子活动   2社会活动 
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
				mui.ajax(ip + "newbegin/modularSecurity/modHappyJ", {
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
					if(1==type){
				   	 $("#roll1").empty();
				   }
				   if(2==type){
				   	 $("#roll2").empty();
				   }
                   
				   //alert("register()")
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
				   if(1==type){
				   	 $("#roll1").append(ht);
				   }
				   if(2==type){
				   	 $("#roll2").append(ht);
				   }
           
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
	 plus.storage.setItem("myHappyId", id.toString());
	 plus.storage.setItem("isHappyFuid1", i.toString());
	if(1==type){
		plus.storage.setItem("type", "亲子活动");
	}
	if(2==type){
		plus.storage.setItem("type", "社会活动");
	}
	//类型
	plus.storage.setItem("htype1", type.toString());
	showFact('happy_detail.html', '首页', '', 'happy_detail','');
}




function menu_01() {
	var div1 = document.getElementById('roll1');
	div1.style.display = "block";
	var div2 = document.getElementById('roll2');
	div2.style.display = "none";
	var btn1 = document.getElementById('menu1');
	btn1.style.backgroundColor = "white";
	btn1.style.color = "#ff8a01";
	var btn2 = document.getElementById('menu2');
	btn2.style.backgroundColor = "#ff8a01";
	btn2.style.color = "white";
	type=1;
	register();
}
function menu_02() {
	var div2 = document.getElementById('roll2');
	div2.style.display = "block";
	var div1 = document.getElementById('roll1');
	div1.style.display = "none";
	var btn2 = document.getElementById('menu2');
	btn2.style.backgroundColor = "white";
	btn2.style.color = "#ff8a01";
	var btn1 = document.getElementById('menu1');
	btn1.style.backgroundColor = "#ff8a01";
	btn1.style.color = "white";
	type=2;
	register();
}