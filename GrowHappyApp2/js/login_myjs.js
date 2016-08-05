var wgtVer=1;//版本号
	var w;
	mui.plusReady(function() {
				mui.init();
				if($("#ck").attr("checked")){
					var username=plus.storage.getItem("username");
					var pa=plus.storage.getItem("pa");
					$("#username").val(username);
					$("#password").val(pa);
					
				}
				plus.runtime.getProperty(plus.runtime.appid, function(wgtinfo){
                console.log("手机端版本："+wgtinfo.version);
                wgtVer=wgtinfo.version;
                //alert(wgtVer);
//				checkUpdate(); 
                
          });
});
				//var username=plus.storage.getItem("username");
		
	
	
		var first = null;
		mui.back = function() {
			//首次按键，提示‘再按一次退出应用’
			if (!first) {
				first = new Date().getTime();
				mui.toast('再按一次退出应用');
				setTimeout(function() {
					first = null;
				}, 1000);
			} else {
				if (new Date().getTime() - first < 1000) {
					plus.runtime.quit();
				}
			}
		}
		var w;
			function login() {
				//alert(ip+ "newbegin/phone/login")
				w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
				alert(ip+"newbegin/phone/login")
				mui.ajax(ip + "newbegin/phone/login", {
					data: {
						username: $("#username").val(),
						password: $("#password").val()
					},
					dataType: 'json', //服务器返回json格式数据
					type: 'post', //HTTP请求类型 
					timeout: 300000, //超时时间设置为10秒；
					success: function(json) {
						//服务器返回响应，根据响应结果，分析是否登录成功；
						w.close();
						//alert("fh");
						if (json['student'] != null) {
							//alert(json['student'].fuID);
						
							plus.storage.setItem("fname", json['student'].fname);
							plus.storage.setItem("fage", json['student'].fage);
							plus.storage.setItem("username", json['student'].fno);
							plus.storage.setItem("pa", json['student'].fpw);
							plus.storage.setItem("fsex", json['student'].fgender);
							//学生类型
							plus.storage.setItem("fpeopleType", json['student'].fpeopleType);
							
							
							//alert(json['student'].fuID);
							//plus.storage.setItem("score", json['healthyMap'].score);
							plus.storage.setItem("meuntype",'2');//进主界面 显示 健康板块
							
				 			showFact('index.html', '首页', '', 'index',json);
				 			
						}else{
							plus.nativeUI.toast("您输入的账号或密码错误！", {
								duration: "long"
							});
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
			
		 // ------------------------------检测更新 
				function checkUpdate(){
				    var xhr=new XMLHttpRequest();
				    xhr.onreadystatechange=function(){
				        switch(xhr.readyState){
				            case 4:
				            plus.nativeUI.closeWaiting();
				            if(xhr.status==200){
				                var newVer=xhr.responseText; 
 				               // if(wgtVer&&newVer&&(wgtVer!=newVer)){ 
 				               	console.log("服务器版本："+newVer);
 				                if(newVer>wgtVer){	 
				                   var bts=["下次再说","立即升级"];
									plus.nativeUI.confirm("检测到新版本？",function(e){
										var i=e.index;
										if(i==1){
											 downWgt();  // 下载升级包
										}else{
											 
										}
									},"成长快乐",bts); 
				                }else{
				                  //  plus.nativeUI.alert("无新版本可更新！");
				                }
				            }else{
				            }
				            break;
				            default:
				            break;
				       } 
				    }
				    xhr.open('GET',ip + "newbegin/phone/version");
				    xhr.send();
				}
				
				// 下载wgt文件
				var wgtUrl=ip +"newbegin/happgrow.wgt"; 
				function downWgt(){
				    plus.nativeUI.showWaiting("下载升级文件...");
				    plus.downloader.createDownload( wgtUrl, {filename:"_doc/update/"}, function(d,status){
				        if ( status == 200 ) { 
				            console.log("下载升级成功："+d.filename);
				            installWgt(d.filename); // 安装wgt包  
				        } else {
				            console.log("下载升级失败！");
				            plus.nativeUI.alert("下载wgt失败！");
				        }
				       
				    }).start();
				} 
				
				// 更新应用资源
				var wOption = {  
					force: true
				};
				 
				
				function installWgt(path){
				    plus.nativeUI.showWaiting("安装升级文件...");
				    plus.runtime.install(path,wOption,function(){
				        plus.nativeUI.closeWaiting();
				        console.log("安装升级文件成功！");
				        plus.nativeUI.closeWaiting();
				        plus.nativeUI.alert("应用资源更新完成！",function(){
				            plus.runtime.restart();
				        });
				    },function(e){
				        plus.nativeUI.closeWaiting(); 
				        console.log("安装升级文件失败["+e.code+"]："+e.message);
				        plus.nativeUI.alert("安装升级文件失败["+e.code+"]："+e.message);
				    });
				}
				//-------------------------------------------------
		