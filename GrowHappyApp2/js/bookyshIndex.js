mui.plusReady(function() {
	mui.init();
	var zz = plus.storage.getItem("zxsj");
	if(undefined!=zz){
		menu_01();
		plus.storage.removeItem("zxsj");
	}else{
		//显示 条形码
mui.ajax(ip + "newbegin/phone/getBarcode", {
			data: {
				
			},
			dataType: 'text', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			success: function(json) {
				//alert(ip+"newbegin/"+json)
				 $("#im2").attr("src",ip+"newbegin/"+json);//条形码
			}
		});
	 
	 menu_02();//选中 优惠卡
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
		var mp=maxPage;
		if(parseInt(currentPageNO)<parseInt(mp)){
			indexPage=parseInt(currentPageNO)+1
		}
		register();
	};
			function register() {
				var m1=plus.storage.getItem("myBookStoreFuid");	
				w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
				mui.ajax(ip + "newbegin/modularHappy/mtBookList", {
					data: {
						indexPage: indexPage,
						fuid:m1
					},
					dataType: 'json', //服务器返回json格式数据
					type: 'post', //HTTP请求类型 
					timeout: 10000, //超时时间设置为10秒；
					success: function(json) {
					//服务器返回响应，根据响应结果，分析是否登录成功；
					w.close();
				   	 $("#roll1").empty();
					maxPage=parseInt(json['maxPageNO']);
					//alert(maxPage)
					var stList = json['student'];
			        var ht = ''; 
			        ht+='<div class="clear">';
				   for (var a = 0; a < stList.length; a++) {
					
			        var ip1=ip+stList[a].furl;
			        var fuid1="'"+stList[a].fuID+"'";
			        //alert(ip1);
			        
			        ht+='<a href="javascript:goNextPage('+fuid1+');"><div class="item"><div class="photo">';
			        ht+='<img src="'+ip1+'"></div><div class="name">'+stList[a].fname+'</div><div class="tip">￥'+stList[a].fprice;
					ht+='</div></div></div></a>';	
	
					    }
				   ht+='</div>';
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
	register();
}
function menu_02() {
	//优惠卡
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
	mui.ajax(ip + "newbegin/phone/getBarcode", {
			data: {
				
			},
			dataType: 'text', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			success: function(json) {
				//alert(ip+"newbegin/"+json)
				 $("#im2").attr("src",ip+"newbegin/"+json);//条形码
			}
		});
	
}
//查看详情		
function goNextPage(i){
	 var id=plus.webview.currentWebview().id;
	 plus.storage.setItem("mydqwinID", id.toString());
	 plus.storage.setItem("mybookFuid", i.toString());
	 
	  plus.storage.setItem("zxsj", "zxsj");
	 
	 //plus.storage.setItem("htype1", type.toString());
	showFact('book_content.html', '首页', '', 'book_content','');
}

