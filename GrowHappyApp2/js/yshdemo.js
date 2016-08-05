mui.plusReady(function() {
		mui.init();
	var m1=plus.storage.getItem("mytype1");	
	 if("1"==m1){
			menu_01();
		}
		if("2"==m1){
			menu_02();
		}
		if("3"==m1){
			menu_03();
		}
		
	});
	
//1 医院  2 营养 3 心理
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
		var maxPage=maxPage;
		if(parseInt(currentPageNO)<parseInt(maxPage)){
			indexPage=parseInt(currentPageNO)+1
		}
		register();
	};
			function register() {
				w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
				mui.ajax(ip + "newbegin/modularSecurity/modHealthyJ", {
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
                    if(3==type){
				   	 $("#roll3").empty();
				   }  
				   //alert("register()")
					maxPage=parseInt(json['maxPageNO']);
					//alert(maxPage)
					var stList = json['student'];
			        var ht = '';  
				   for (var a = 0; a < stList.length; a++) {
					//alert(stList[a].fuID)
			        var ip1=ip+"newbegin"+stList[a].fimagesurl;
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
                    if(3==type){
				   	 $("#roll3").append(ht);
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
		
function menu_01() {
	var div1 = document.getElementById('roll1');
	div1.style.display = "block";
	var div2 = document.getElementById('roll2');
	div2.style.display = "none";
	var div3 = document.getElementById('roll3');
	div3.style.display = "none";
	var btn1 = document.getElementById('menu1');
	btn1.style.backgroundColor = "white";
	btn1.style.color = "#86d949";
	var btn2 = document.getElementById('menu2');
	btn2.style.backgroundColor = "#86d949";
	btn2.style.color = "white";
	var btn3 = document.getElementById('menu3');
	btn3.style.backgroundColor = "#86d949";
	btn3.style.color = "white";
	 type=1;
	 register();
}

function menu_02() {
	var div2 = document.getElementById('roll2');
	div2.style.display = "block";
	var div1 = document.getElementById('roll1');
	div1.style.display = "none";
	var div3 = document.getElementById('roll3');
	div3.style.display = "none";
	var btn2 = document.getElementById('menu2');
	btn2.style.backgroundColor = "white";
	btn2.style.color = "#86d949";
	var btn1 = document.getElementById('menu1');
	btn1.style.backgroundColor = "#86d949";
	btn1.style.color = "white";
	var btn3 = document.getElementById('menu3');
	btn3.style.backgroundColor = "#86d949";
	btn3.style.color = "white";
	type=2;
	register();
}

function menu_03() {
	var div3 = document.getElementById('roll3');
	div3.style.display = "block";
	var div2 = document.getElementById('roll2');
	div2.style.display = "none";
	var div1 = document.getElementById('roll1');
	div1.style.display = "none";
	var btn3 = document.getElementById('menu3');
	btn3.style.backgroundColor = "white";
	btn3.style.color = "#86d949";
	var btn2 = document.getElementById('menu2');
	btn2.style.backgroundColor = "#86d949";
	btn2.style.color = "white";
	var btn1 = document.getElementById('menu1');
	btn1.style.backgroundColor = "#86d949";
	btn1.style.color = "white";
	type=3;
    register();
}



//查看详情		
function goNextPage(i){
	 var id=plus.webview.currentWebview().id;
	 plus.storage.setItem("myHealId", id.toString());
	 plus.storage.setItem("isafeFuid1", i.toString());
	if(1==type){
		plus.storage.setItem("type", "医院咨询");
	}
	if(2==type){
		plus.storage.setItem("type", "营养指导");
	}
	if(3==type){
		plus.storage.setItem("type", "心理文章");
	}
	 plus.storage.setItem("htype1", type.toString());
	showFact('sports_detail2.html', '首页', '', 'sports_detail2','');
}

function openWindow() {
	document.getElementById('light').style.display = 'block';
	document.getElementById('fade').style.display = 'block';
}

function closeWindow() {
	document.getElementById('light').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
}