var week1 =0;
var week2 =0;
var week3 =0;
var week4 =0;
var week5 =0;
var week6 =0;
var week7 =0;
var fsex="";
mui.plusReady(function() {
	mui.init();
    fsex=plus.storage.getItem("fsex");
	var m1=plus.storage.getItem("jrsport3");	
	if('女'==fsex){
       $("#jrshuj1").html(m1+"/117");
	}
	if('男'==fsex){
       $("#jrshuj1").html(m1+"/109");
	}
	mui.ajax(ip + "newbegin/modularHealthy/showAnalysis", {
		data: {
			xm:'011002'
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(json) {
			//获得服务器响应
			var stList = json['student'];
			var ht = '';
			for (var a = 0; a < stList.length; a++) {
				//var fuid1="'"+stList[a].fuID+"'";
				//alert(stList[a].fcount);
				if ("week1" == stList[a].fweek) {
					week1 = stList[a].fcount;
				}
				if ("week2" == stList[a].fweek) {
					week2 = stList[a].fcount;
				}
				if ("week3" == stList[a].fweek) {
					week3 = stList[a].fcount;
				}
				if ("week4" == stList[a].fweek) {
					week4 = stList[a].fcount;
				}
				if ("week5" == stList[a].fweek) {
					week5 = stList[a].fcount;
				}
				if ("week6" == stList[a].fweek) {
					week6 = stList[a].fcount;
				}
				if ("week7" == stList[a].fweek) {
					week7 = stList[a].fcount;
				}
 
				//alert(fuid1);
				//alert(stList[a].fweek)
				//alert(stList[a].fcount)
			}
			  var alw=parseInt(week1)+parseInt(week2)+parseInt(week3)+parseInt(week4)+parseInt(week5)+parseInt(week6)+parseInt(week7);
              var lw=parseFloat(alw/7).toFixed(2);
              var lwb=percentNum(alw,7);
              //alert(lw);
              //alert(lwb);
              $("#gsyzwc").html(lw+"/"+lwb);
              getPJS();
    
var ri=1;
var le=2;
var data1="";
if('女'==fsex){
      data1=[117,117,117,117,117,117,117];
	}
	if('男'==fsex){
       data1=[109,109,109,109,109,109,109];
	}

var lineChartData = {
	labels: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六","星期日"],
	datasets: [{
		fillColor: "rgba(220,220,220,0.0)",
		strokeColor: "#3bdfe1",
		pointColor: "#3bdfe1",
		pointStrokeColor: "#3bdfe1",
		data: data1
	}, {
		fillColor: "rgba(151,187,205,0.0)",
		strokeColor: "#FF82AB", 
		pointColor: "#FF82AB",
		pointStrokeColor: "#FF82AB",
		data: [week1,week2,week3,week4,week5,week6,week7]
	}]
} 
var options = {  
								scaleshowgridlines: false,
								animation:false
						};
var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData,options);
var c1=document.getElementById("canvas");
c1.style.width="100%";
           
		}
	});


function percentNum(num, num2) { 
     return (Math.round(num / num2 * 100) / 100.00 + "%"); //小数点后两位百分比
}


});


function getPJS(){
w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
mui.ajax(ip + "newbegin/modularHealthy/ranking", {
			data: {xm1:'011002'},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			success: function(json) {
			//获得服务器响应
			  w.close();
			 if (json['student'] != null){
			 	var a1=json['student'].averageClass;
			 	
                 $("#jrbjpm").html(a1+"/"+json['student'].rankingClass);
			 }
			}
		});
	
}