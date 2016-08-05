
mui.plusReady(function() {
	
	mui.init();
	//var wobj = plus.webview.getWebviewById('questionnaire_index');
    //wobj.reload(true);
    //plus.webview.getWebviewById('questionnaire_index').reload();
	
	
	var m1=plus.storage.getItem("mytype3");	
	
	 if("1"==m1){//问卷列表
	 	//alert("1");
			menu_01();
		}
		if("2"==m1){//问卷结论
			menu_02();
		}
		if("3"==m1){
			
			menu_03();//学校问卷
		}
		if("4"==m1){
			menu_04();//社会问卷
		}
	});


//1 问卷列表  2问卷结论  3学校问卷  4社会问卷
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
				mui.ajax(ip + "newbegin/mqSurvey/modSurveyList", {
					data: {
						indexPage: indexPage,
						type:type	
					},
					dataType: 'json', //服务器返回json格式数据
					type: 'post', //HTTP请求类型 
					timeout: 30000, //超时时间设置为10秒；
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
                     if(4==type){
				   	 $("#roll4").empty();
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
			        //alert(stList[a].ftype)
			        
			        ht+='<a href="javascript:goNextPage('+fuid1+');">';
					ht+='<div class="item"><div class="left">';
					
					if("xx"==stList[a].ftype){
					   if("0"==stList[a].islook){
					  ht+='<span class="icon"></span>';
					   }
					   ht+='<img src="../img/questionnaire_01.png"></div>';
					}
					if("sh"==stList[a].ftype){
						if("0"==stList[a].islook){
					  ht+='<span class="icon"></span>';
					   }
					ht+='<img src="../img/questionnaire_02.png"></div>';
					}
					ht+='<div class="center"><div class="text">'+stList[a].fname+'</div>';
					ht+='<div class="date">有效期:'+stList[a].fbegindate+'-'+stList[a].fenddate+'</div>';
					ht+='</div><div class="right"><img src="../img/questionnaire_03.png"></div></div></a>';
					//alert(ht)
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
                    if(4==type){
				   	 $("#roll4").append(ht);
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
	 plus.storage.setItem("myHealId1", id.toString());
	 plus.storage.setItem("isafeFuid2", i.toString());
	 /*
	if(1==type){
		plus.storage.setItem("type", "问卷列表");
	}
	if(2==type){
		plus.storage.setItem("type", "问卷结论");
	}
	if(3==type){
		plus.storage.setItem("type", "学校问卷");
	}
	if(4==type){
		plus.storage.setItem("type", "社会问卷");
	}
	 plus.storage.setItem("htype2", type.toString());*/
	showFact('questionnaire_start.html', '首页', '', 'questionnaire_start','');
}




function menu_01()
{   
	 //alert("menu_01()");
	 var div1 = document.getElementById('roll1');  
     div1.style.display="block"; 
     var div2 = document.getElementById('roll2');  
     div2.style.display="none"; 
     var div3 = document.getElementById('roll3');  
     div3.style.display="none";
     var div4 = document.getElementById('roll4');  
     div4.style.display="none";
     var  btn1= document.getElementById('menu1');  
     btn1.style.backgroundColor="white"; 
     btn1.style.color="#86d949";
     var btn2 = document.getElementById('menu2');  
     btn2.style.backgroundColor="#86d949"; 
     btn2.style.color="white";
     var btn3 = document.getElementById('menu3');  
     btn3.style.backgroundColor="#86d949";
     btn3.style.color="white";
     var btn4 = document.getElementById('menu4');  
     btn4.style.backgroundColor="#86d949";
     btn4.style.color="white";
     type=1;
     register();
     
}
function menu_02()
{
	 var div2 = document.getElementById('roll2');  
     div2.style.display="block"; 
     var div1 = document.getElementById('roll1');  
     div1.style.display="none"; 
     var div3 = document.getElementById('roll3');  
     div3.style.display="none";
     var div4 = document.getElementById('roll4');  
     div4.style.display="none";
     var  btn1= document.getElementById('menu2');  
     btn1.style.backgroundColor="white"; 
     btn1.style.color="#86d949";
     var btn2 = document.getElementById('menu1');  
     btn2.style.backgroundColor="#86d949"; 
     btn2.style.color="white";
     var btn3 = document.getElementById('menu3');  
     btn3.style.backgroundColor="#86d949";
     btn3.style.color="white";
     var btn4 = document.getElementById('menu4');  
     btn4.style.backgroundColor="#86d949";
     btn4.style.color="white";
     //type=2;
     //register();
}
function menu_03()
{
	 var div3 = document.getElementById('roll3');  
     div3.style.display="block"; 
     var div2 = document.getElementById('roll2');  
     div2.style.display="none"; 
     var div1 = document.getElementById('roll1');  
     div1.style.display="none";
     var div4 = document.getElementById('roll4');  
     div4.style.display="none";
     var  btn1= document.getElementById('menu3');  
     btn1.style.backgroundColor="white"; 
     btn1.style.color="#86d949";
     var btn2 = document.getElementById('menu2');  
     btn2.style.backgroundColor="#86d949"; 
     btn2.style.color="white";
     var btn3 = document.getElementById('menu1');  
     btn3.style.backgroundColor="#86d949";
     btn3.style.color="white";
     var btn4 = document.getElementById('menu4');  
     btn4.style.backgroundColor="#86d949";
     btn4.style.color="white";
     type=3;
     register();
}
function menu_04()
{
	  var div4 = document.getElementById('roll4');  
     div4.style.display="block"; 
     var div2 = document.getElementById('roll2');  
     div2.style.display="none"; 
     var div3 = document.getElementById('roll3');  
     div3.style.display="none";
     var div1 = document.getElementById('roll1');  
     div1.style.display="none";
     var  btn4= document.getElementById('menu4');  
     btn4.style.backgroundColor="white"; 
     btn4.style.color="#86d949";
     var btn2 = document.getElementById('menu2');  
     btn2.style.backgroundColor="#86d949"; 
     btn2.style.color="white";
     var btn3 = document.getElementById('menu3');  
     btn3.style.backgroundColor="#86d949";
     btn3.style.color="white";
     var btn1 = document.getElementById('menu1');  
     btn1.style.backgroundColor="#86d949";
     btn1.style.color="white";
     type=4;
     register();
}
