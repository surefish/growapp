mui.plusReady(function(){
	mui.init();
	register();
	});
	
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
				mui.ajax(ip + "newbegin/index/showPhoto", {
					data: {
						indexPage:indexPage
					},
					dataType: 'json', //服务器返回json格式数据
					type: 'post', //HTTP请求类型 
					timeout: 10000, //超时时间设置为10秒；
					success: function(json) {
					//服务器返回响应，根据响应结果，分析是否登录成功；
					w.close();
					
				   	$("#roll").empty();
					maxPage=parseInt(json['maxPageNO']);
					var stList = json['student'];
					var ht = '<div class="item">';
					for (var a = 0; a < stList.length; a++) {
						var ip1 = ip + stList[a].furl;
						var fuid1 = "'" + stList[a].fuID + "'";
						var fsudif=stList[a].fstudentFuid;
						ht+='<a href="javascript:goNextPage('+fuid1+');">';
						ht+='<div class="photo">';
						ht+='<img src="' + ip1 + '"><div class="name">'+stList[a].fname+'</div>';
						
						if(fsudif!=undefined){
						ht+='<div class="ck"><input type="checkbox" name="childMenus" value='+fuid1+' ></div>'	
						}
						ht+='</div></a>'
						}
					   ht+='</div>';
					   //alert(ht)
					  $("#roll").append(ht);
					   $("#mypage").empty();
					  var mt="";
					  mt+='<span class="up" onclick="pageUp();">上一页</span>';
					  mt+='<span class="manager" onclick="openck()">管理</span>';
					  mt+='<span class="down" onclick="nextPage()">下一页</span>';
					  $("#mypage").append(mt);
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

//点击管理
function openck(){
	$(".ck").css("display", "block");//显示删除
	$("#mypage").empty();
	var mt="";
	mt+='<span class="up" onclick="gofxclass();">全选</span>';
	mt+='<span class="manager" onclick="openckqx()">取消</span>';
	mt+='<span class="down" onclick="getDelect()">删除选中</span>';	 
	$("#mypage").append(mt);		 
}

//取消
function openckqx(){
	$(".ck").css("display", "none");
	$("#mypage").empty();
	var mt="";
	mt+='<span class="up" onclick="pageUp();">上一页</span>';
	mt+='<span class="manager" onclick="openck()">管理</span>';
	mt+='<span class="down" onclick="nextPage()">下一页</span>';
	$("#mypage").append(mt);
}

//全选
function gofxclass(){
	$("input[name='childMenus']").attr("checked","checked");  
}

var ids = new Array();
function getDelect(){
	
      jQuery("input:checkbox[name=childMenus]:checked").each(function(){
          ids.push(jQuery(this).val());
     });
     //alert(ids.length);
    if(ids.length==0){
    	alert("请选择要删除的个人照片!");
    	return;
    }else{
    	var id=ids.join(",");
    	if(id!=""){
    		w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
    		mui.ajax(ip + "newbegin/index/deletePhoto", {
			data: {
				ids:id
			},
			dataType: 'text', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			success: function(json) {
				//获得服务器响应
				//alert(json);
				w.close();
				if('success'==json){
                    register();
                    ids=[];
					plus.nativeUI.toast("删除照片成功！");
					
				}
			}
		});
    }
 }

}
//班级照片查看详情		
function goNextPage(i){
	
	 plus.storage.setItem("grfuid", i);
	 showFact('photo_detail_bj.html', '首页', '', 'photo_detail_bj','');
}

