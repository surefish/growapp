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
				mui.ajax(ip + "newbegin/index/showPhotoGR", {
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
						ht+='<img src="' + ip1 + '"><div class="name">'+stList[a].fname+'</div>'
						ht+='<div class="ck"><input type="checkbox" name="childMenus" value='+fuid1+' ></div>'
						ht+='</div></a>'
						}
					   ht+='</div>';
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

//个人照片查看详情		
function goNextPage(i){
	 plus.storage.setItem("grzpfuid", i);
  
	showFact('photo_detail_gr.html', '首页', '', 'photo_detail_gr','');
}

//点击管理
function openck(){
	$(".ck").css("display", "block");//显示删除
	$("#mypage").empty();
	var mt="";
	mt+='<span class="up" onclick="gofxclass();">分享班级</span>';
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
var idsbj = new Array();
//分享班级
function gofxclass(){
	 jQuery("input:checkbox[name=childMenus]:checked").each(function(){
          idsbj.push(jQuery(this).val());
     });
	 if(idsbj.length==0){
    	alert("请选择要分享的照片!");
    	return;
    }else{
    	var id=idsbj.join(",");
    		if(id!=""){
    		w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
    		mui.ajax(ip + "newbegin/index/addClassPhoto", {
			data: {
				idsbj:id
			},
			dataType: 'text', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			success: function(json) {
				//获得服务器响应
				//alert(json);
				w.close();
				if(''!=json){
                    idsbj=[];
					plus.nativeUI.toast(json);
					
				}
			}
		});
    }
    }
}




var ids = new Array();
function getDelect(){
	
      jQuery("input:checkbox[name=childMenus]:checked").each(function(){
          ids.push(jQuery(this).val());
     });
     //alert(ids.length);
    if(ids.length==0){
    	alert("请选择要删除的照片!");
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




//新建相册
function openWindow() {
	document.getElementById('light').style.display = 'block';
	document.getElementById('fade').style.display = 'block';
}

function closeWindow() {
	document.getElementById('light').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
}

//删除照片提示
function openWindow2() {
	document.getElementById('light2').style.display = 'block';
	document.getElementById('fade2').style.display = 'block';	
}

function closeWindow2() {
	document.getElementById('light2').style.display = 'none';
	document.getElementById('fade2').style.display = 'none';
}






















/**
		 * 拍照
		 * @param  num 图片类型
		 */
		var i = 1;

		function getImage(){
			closeWindow();
			var cmr = plus.camera.getCamera();
			cmr.captureImage(function(p) {
				plus.io.resolveLocalFileSystemURL(p, function(entry) {
					var localurl = entry.toLocalURL();
					//alert("localurl:"+localurl);//file:///storage/emulated/0/Android/data/io.dcloud.HBuilder/.HBuilder/apps/HBuilder/doc/camera/1459998527112.jpg
					//压缩图片并上传
					var ii = localurl.split(".");
					var filename = getTimeName() + "." + ii[ii.length - 1];
					var furl = compressImage(localurl, filename); //压缩并上传
					//alert("filename:"+filename);//201647111051.jpg
					//document.getElementById("head-img").src = localurl;
				}, function(e) {
					outLine("读取拍照文件错误：" + e.message);
				});
			}, function(e) {
				//outLine( "失败："+e.message );
			}, {
				filename: "_doc/camera/",
				index: i
			});
		}
		//从相册选择	
		function galleryImg() {
			closeWindow();
			plus.gallery.pick(function(p) {
				plus.io.resolveLocalFileSystemURL(p, function(entry) {
					//displayFile( entry );
					var localurl = entry.toLocalURL();
					//压缩图片并上传
					var filename = getTimeName() + "." + localurl.split(".")[1];
					var furl = compressImage(localurl, filename);
				}, function(e) {
					outLine("读取拍照文件错误：" + e.message);
				});
			});
		}
		//document.getElementById("head-img1").addEventListener('tap', function(e) {
		//e.stopPropagation();
		//}); 
		//压缩图片
		function compressImage(path, filename) {
			var wt = plus.nativeUI.showWaiting("正在压缩图片， 请等待...　　 ");
			plus.zip.compressImage({
					src: path,
					dst: "_doc/" + filename,
					overwrite: true,
					quality: 20 //压缩图片的质量
				},
				function(event) {
					var target = event.target; // 压缩转换后的图片url路径，以"file://"开头
					var size = event.size; // 压缩转换后图片的大小，单位为字节（Byte）
					var width = event.width; // 压缩转换后图片的实际宽度，单位为px
					var height = event.height; // 压缩转换后图片的实际高度，单位为px
					//document.getElementById("head-img").src = target;
					//document.getElementById("head-img1").src = target;
					//plus.storage.setItem("myicon",target); 
					//上传图片
					wt.close();
					var bts = ["取消", "确定"];
					plus.nativeUI.confirm("是否上传到个人相册？", function(e) {
						var i = e.index;
						if (i == 1) {
							createUpload(target, filename);
						}
					}, "图片上传", bts);
				},
				function(error) {
					plus.nativeUI.toast("图片压缩失败！", {
						duration: "long"
					});
				});
		}
		// 创建上传任务
		function createUpload(path, name) {
			var wt = plus.nativeUI.showWaiting("　　正在上传图片， 请等待...　　 ");
			var task = plus.uploader.createUpload(ip + "newbegin/index/uploadImg?mypoType=" + "gr", {
					method: "POST",
					blocksize: 204800,
					priority: 100
				},
				function(t, status) {
					// 上传完成
					if (status == 200) {
						wt.close();
						
						plus.nativeUI.toast("上传成功！", {
							duration: "long"
						});					
						register();
						plus.storage.setItem("HeadPortrait", name);
						return t.url;
					} else {
						wt.close();
						plus.nativeUI.toast("上传失败，请检查网络，稍后再试！", {
							duration: "long"
						});
					}
				}
			);
			task.addData("userid", plus.storage.getItem("studentId")); //添加参数
			//支持多图
			/*for(var i=0;i<files.length;i++){
				var f=files[i];
				task.addFile(f.path,{key:f.name});
			}*/
			task.addFile(path, {
				key: "img"
			}); //添加文件
			//task.addEventListener( "statechanged", onStateChanged, false );
			task.start();
		}


