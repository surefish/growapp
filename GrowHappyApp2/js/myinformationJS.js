 mui.plusReady(function () {
            mui.init();
          
            getinfo();//学生信息
            gethealth();//学生健康
       
            
        });
        


function addHeight(){
	    $("#xmName").empty();
		$("#xmsru").empty();
		$("#xmName").append("身高"); //标题
		$("#xmsru").append('<input type="text" id="xmValue" />厘米'); 
		$("#xmsru").append('<input type="hidden" id="xmType" value="sg" />');
		openWindow();
	
}

        
function addWeight(){
	    $("#xmName").empty();
		$("#xmsru").empty();
		$("#xmName").append("体重"); //标题
		$("#xmsru").append('<input type="text" id="xmValue" />kg'); 
		$("#xmsru").append('<input type="hidden" id="xmType" value="tz" />');
		openWindow();
	
}


function goinsert(){
	var r = /^[0-9]+.?[0-9]*$/;
	var xmv=$("#xmValue").val();
	var xtyp=$("#xmType").val();
	var ur="";
	if('sg'==xtyp){
		ur=ip+"newbegin/index/saveHeight";
	}
	if('tz'==xtyp){
		ur=ip+"newbegin/index/saveWeight";
	}
	if (!r.test(xmv)) {
	$('#input').val("0");
	plus.nativeUI.toast("请输入数字", {
		duration: "long"
	});
	return;
}
if ($('#xmValue').val() > 200) {
	$('#xmValue').val("0");
	plus.nativeUI.toast("请输入小于200的数字", {
		duration: "long"
	});
	return;
}

var fud=$('#mySTfuid').val();

var w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
           mui.ajax(ur, {
                data: {fuid: fud,height: xmv},
              dataType: 'text', //服务器返回json格式数据
	          type: 'post', //HTTP请求类型 
	          timeout: 300000, //超时时间设置为10秒；
                success: function (json) {
		          w.close();
		          if('success'==json){
		          	if('sg'==xtyp){
		          	$("#fheight").html(xmv);
		          	$("#sgll").empty();
		          	$("#sgll").removeAttr("onclick");
		          	$("#sgll").html("录入");
		          	}
		          	if('tz'==xtyp){
		          		$("#fweight").html(xmv);
		          		$("#tzll").empty();
		          		$("#tzll").removeAttr("onclick");
		          		$("#tzll").html("录入");
		          	}
		          	closeWindow();
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function getinfo() {
            mui.ajax(ip + "newbegin/myinformation/studentinfo", {
                data: {
                    category: 'news'
                },
                dataType: 'json',//服务器返回json格式数据
                type: 'get',//HTTP请求类型
                success: function (json) {
                    //获得服务器响应
            if (json['student'] != null) {
            	
                 $("#fname").html(json['student'].fname);//性名
                 $("#sex").html(json['student'].fgender);
                 $("#age").html(json['student'].fage);
                 $("#myclass").html(json['student'].studenSchool);
                  $("#myclass").append('<input type="hidden" id="mySTfuid" value="'+json['student'].fuID+'" />')
                 //var s1="小学："+json['student'].studenSchool;
                 //$("#cd_my").append(s1);
                 //alert(ip+json['student'].studenSchoolurl);
                // $("#im2").attr("src",ip+json['student'].studenSchoolurl);
                 plus.storage.setItem("schoolfuid", json['student'].schoolfuid);
                   }

                }
            });
        }

        function gethealth() {
        	//alert("11")
            mui.ajax(ip + "newbegin/myinformation/studentHealth", {
                data: {
                    category: 'news'
                },
                dataType: 'json',//服务器返回json格式数据
                type: 'get',//HTTP请求类型
                success: function (json) {
                    if (json['student'] != null) {
                    	
                    	if(undefined==json['student'].fheight){
                    		$("#fheight").html("0");//身高
                    	}else{
                    		$("#fheight").html(json['student'].fheight);//身高
                    		$("#sgll").empty();
		          	        $("#sgll").removeAttr("onclick");
		          	        $("#sgll").html("录入");
                    		
                    	}
                    	if(undefined==json['student'].fweight){
                    		 $("#fweight").html("0");//体重
                    	}else{
                    		$("#fweight").html(json['student'].fweight);//体重
                    		$("#tzll").empty();
		          		    $("#tzll").removeAttr("onclick");
		          		    $("#tzll").html("录入");
                    	}
                    	
                    	 
                    	 
                         //$("#ftooth").html(json['student'].ftooth);//牙齿
                         $("#ftooth").html("正常");
                         var str1=json['student'].fleftv;//左眼-视力
                         $("#fleftv").html(str1.substr(0, 3)+"<a href=\"opinion_01.html\"><span class=\"ckyj\">视力档案</span></a>"); 
                         var str2=json['student'].frightv;//右眼-视力
                         $("#frightv").html(str2.substr(0, 3));
                         var str3=json['student'].fleftv;//左眼-视力
                         $("#fleftv1").html(str3.substr(0, 3)); 
                         var str4=json['student'].fleftv;//右眼-视力
                         $("#frightv1").html(str4.substr(0, 3));
                         $("#fresult").html(json['student'].fresult+"<span class=\"ckyj\">");  //诊断结果
                    } 
                }
            });
        }
    
    
    
    
    
