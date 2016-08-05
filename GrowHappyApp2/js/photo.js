mui.plusReady(function() {
			mui.init();
			myclass();
		});
		var mypoType = "";
	
function menu_01() {
			var div1 = document.getElementById('roll1');
			div1.style.display = "block";
			var div2 = document.getElementById('roll2');
			div2.style.display = "none";
			var div3 = document.getElementById('roll3');
			div3.style.display = "none";
			var btn1 = document.getElementById('menu1');
			btn1.style.backgroundColor = "#FF8A01";
			btn1.style.color = "white";
			var btn2 = document.getElementById('menu2');
			btn2.style.backgroundColor = "white";
			btn2.style.color = "#FF8A01";
			var btn3 = document.getElementById('menu3');
			btn3.style.backgroundColor = "white";
			btn3.style.color = "#FF8A01";
			myclass();
		}	
	

function menu_02() {
			var div2 = document.getElementById('roll2');
			div2.style.display = "block";
			var div1 = document.getElementById('roll1');
			div1.style.display = "none";
			var div3 = document.getElementById('roll3');
			div3.style.display = "none";
			var btn2 = document.getElementById('menu2');
			btn2.style.backgroundColor = "#FF8A01";
			btn2.style.color = "white";
			var btn1 = document.getElementById('menu1');
			btn1.style.backgroundColor = "white";
			btn1.style.color = "#FF8A01";
			var btn3 = document.getElementById('menu3');
			btn3.style.backgroundColor = "white";
			btn3.style.color = "#FF8A01";
			mypoType = "gr";
			//查询个人相册
			myGR();
			var a = [{
				title: "拍照"
			}, {
				title: "从手机相册选择"
			}];
			plus.nativeUI.actionSheet({
				cancel: "取消",
				buttons: a
			}, function(b) {
				switch (b.index) {
					case 0:
						break;
					case 1:
						getImage();
						break;
					case 2:
						galleryImg();
						break;
					default:
						break
				}
			})
		}



	function menu_03() {
			var div3 = document.getElementById('roll3');
			div3.style.display = "block";
			var div2 = document.getElementById('roll2');
			div2.style.display = "none";
			var div1 = document.getElementById('roll1');
			div1.style.display = "none";
			var btn3 = document.getElementById('menu3');
			btn3.style.backgroundColor = "#FF8A01";
			btn3.style.color = "white";
			var btn2 = document.getElementById('menu2');
			btn2.style.backgroundColor = "white";
			btn2.style.color = "#FF8A01";
			var btn1 = document.getElementById('menu1');
			btn1.style.backgroundColor = "white";
			btn1.style.color = "#FF8A01";
			mypoType = "ryb";
			myryb();
			var a = [{
				title: "拍照"
			}, {
				title: "从手机相册选择"
			}];
			plus.nativeUI.actionSheet({
				cancel: "取消",
				buttons: a
			}, function(b) {
				switch (b.index) {
					case 0:
						break;
					case 1:
						getImage();
						break;
					case 2:
						galleryImg();
						break;
					default:
						break
				}
			})
		}


//---------------------------------我的班级照片
		function myclass() {
			mui.ajax(ip + "newbegin/index/showPhoto", {
				data: {},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				success: function(json) {
					//获得服务器响应
					$("#roll2").empty();
					$("#roll3").empty();
					$("#roll1").empty();
					var stList = json['student'];
					var ht = '';
					for (var a = 0; a < stList.length; a++) {
						var ip1 = ip + stList[a].furl;
						var fuid1 = "'" + stList[a].fuID + "'";
						var fsudif=stList[a].fstudentFuid;			
						if(undefined==fsudif){
							ht+='<div class="photo"><p>日期：' + stList[a].fname + '/' + stList[a].fcreateTime + '</p><img src="' + ip1 + '"></div>';
						}else{
						ht +='<div class="photo"><p>日期：' + stList[a].fname + '/' + stList[a].fcreateTime + '</p>';
						ht +='<span class="mui-icon mui-icon-trash delete" onclick="godeleteclass('+fuid1+');"></span>';
						ht += '<img src="' + ip1 + '" onclick="goPic('+fuid1+');"></div>';
						}
						
					
					}
					$("#roll1").append(ht);
				}
			});
		}
		//---------------------------------我的班级照片	
		
	    //-----------我的个人照片
		function myGR() {
			//alert("11")
			mui.ajax(ip + "newbegin/index/showPhotoGR", {
				data: {},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				success: function(json) {
					//获得服务器响应
					    $("#roll1").empty();
						$("#roll3").empty();
						$("#roll2").empty();
					var stList = json['student'];
					var ht = '';
					for (var a = 0; a < stList.length; a++) {
						//alert(stList[a].fuID)
						var ip1 = ip + stList[a].furl;
						//alert(ip1)
						var fuid1 = "'" + stList[a].fuID + "'";
						ht +='<div class="photo"><p>日期：' + stList[a].fname + '/' + stList[a].fcreateTime + '</p>';
						ht +='<span class="mui-icon mui-icon-trash delete" onclick="godeleteGR('+fuid1+');"></span>';
						ht += '<img src="' + ip1 + '" onclick="goPic('+fuid1+');">';
						ht += '<span class="mui-icon mui-icon-plus add" onclick="goadd('+fuid1+');"></span></div>';
						
					}
					$("#roll2").append(ht);
					//menu_02()
				}
			});
		}
		//---------------------------------我的个人照片	
		
//-----------我的荣誉榜
		function myryb() {
			//alert("11")
			mui.ajax(ip + "newbegin/index/showPhotoRYB", {
				data: {},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				success: function(json) {
					//获得服务器响应
					    $("#roll1").empty();
						$("#roll2").empty();
						$("#roll3").empty();
					var stList = json['student'];
					var ht = '';
					for (var a = 0; a < stList.length; a++) {
						//alert(stList[a].fuID)
						
						var ip1 = ip + stList[a].furl;
						var fuid1 = "'" + stList[a].fuID + "'";
						ht +='<div class="photo"><p>日期：' + stList[a].fname + '/' + stList[a].fcreateTime + '</p>';
						ht +='<span class="mui-icon mui-icon-trash delete" onclick="godeleteryb('+fuid1+');"></span>';
						ht += '<img src="' + ip1 + '" onclick="goPic('+fuid1+');"></div>';
					}
					$("#roll3").append(ht);
					//menu_02()
				}
			});
		}
		//---------------------------------我的荣誉榜





		function goadd(i){

			var btnArray = ['否', '是'];
			mui.confirm('您确定将该相片加入班级', '添加', btnArray, function(e) {
				if (e.index == 1) {
					
						mui.ajax(ip + "newbegin/index/addClassPhoto", {
			              data: {
				              fuid:i
			                   },
			                    dataType: 'text', //服务器返回json格式数据
			                    type: 'get', //HTTP请求类型
			                    success: function(json) {
				                       //获得服务器响应
				                       if('success'==json){
				                       	  mui.toast("分享班级成功！") ;
				                       }else  if('ycz'==json){
				                       	 mui.toast("您已分享过该照片!") ;
				                       }
				                     
				
			                    }
		                 });
					
				} else {
					//mui.toast("您选择了否") ;
				}
			})
			
		}


























function godeleteGR(i){
			var btnArray = ['否', '是'];
			mui.confirm('您确定删除该相片', '删除', btnArray, function(e) {
				if (e.index == 1) {
					mui.ajax(ip + "newbegin/index/deletePhoto", {
			              data: {
				              fuid:i
			                   },
			                    dataType: 'text', //服务器返回json格式数据
			                    type: 'get', //HTTP请求类型
			                    success: function(json) {
				                       //获得服务器响应
				                       //alert(json)
				                       mypoType = "gr";
				                       myGR();
				                       mui.toast("删除成功") ;
			                    }
		                 });
					
				} else {
					//mui.toast("您选择了否") ;
				}
			})
		}
		
		function godeleteclass(i){
			var btnArray = ['否', '是'];
			mui.confirm('您确定删除该相片', '删除', btnArray, function(e) {
				if (e.index == 1) {
					mui.ajax(ip + "newbegin/index/deletePhoto", {
			              data: {
				              fuid:i
			                   },
			                    dataType: 'text', //服务器返回json格式数据
			                    type: 'get', //HTTP请求类型
			                    success: function(json) {
				                       //获得服务器响应
				                       //alert(json)
				                       
				                       myclass();
				                       mui.toast("删除成功") ;
			                    }
		                 });
					
				} else {
					//mui.toast("您选择了否") ;
				}
			})
		}
		function godeleteryb(i){
			var btnArray = ['否', '是'];
			mui.confirm('您确定删除该相片', '删除', btnArray, function(e) {
				if (e.index == 1) {
					mui.ajax(ip + "newbegin/index/deletePhoto", {
			              data: {
				              fuid:i
			                   },
			                    dataType: 'text', //服务器返回json格式数据
			                    type: 'get', //HTTP请求类型
			                    success: function(json) {
				                       //获得服务器响应
				                       mypoType = "ryb";
			                           myryb();
				                       mui.toast("删除成功") ;
			                    }
		                 });
					
				} else {
					//mui.toast("您选择了否") ;
				}
			})
		}






































/**
		 * 拍照
		 * @param  num 图片类型
		 */
		var i = 1;

		function getImage() {
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
			var task = plus.uploader.createUpload(ip + "newbegin/index/uploadImg?mypoType=" + mypoType, {
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
						if("gr"==mypoType){
							myGR();
						}
						if("ryb"==mypoType){
							myryb();
						}
						
						
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
