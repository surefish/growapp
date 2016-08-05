var week1 =0;
var week2 =0;
var week3 =0;
var week4 =0;
var week5 =0;
var week6 =0;
var week7 =0;

var week11=0;
var week22=0;
var week33=0;
var week44=0;
var week55=0;
var week66=0;
var week77=0;
var w;
mui.plusReady(function(){
	mui.init();
    w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
	mui.ajax(ip + "newbegin/myinformation/oldHealthy", {
		data: {
			xm:'011001'
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(json) {
			//获得服务器响应
			w.close();
			var stList = json['student'];
			var ht = '';
			for (var a = 0; a < stList.length; a++){
				if ("0" == stList[a].fweek) {
					//alert(stList[a].fweek);
					//alert(stList[a].fleftv)
					week1=(stList[a].fleftv).substr(0, 3);
					week11=(stList[a].frightv).substr(0, 3)
				}
				if ("1" == stList[a].fweek) {
					week2 = (stList[a].fleftv).substr(0, 3);
					week22=(stList[a].frightv).substr(0, 3)
				}
				if ("2" == stList[a].fweek) {
					week3 = (stList[a].fleftv).substr(0, 3);
					week33=(stList[a].frightv).substr(0, 3)
				}
				if ("3" == stList[a].fweek) {
					week4 = (stList[a].fleftv).substr(0, 3);
					week44=(stList[a].frightv).substr(0, 3)
				}
				if ("4" == stList[a].fweek) {
					week5 = (stList[a].fleftv).substr(0, 3);
					week55=(stList[a].frightv).substr(0, 3);
				}
				if ("5" == stList[a].fweek) {
					week6 = (stList[a].fleftv).substr(0, 3);
					week66=(stList[a].frightv).substr(0, 3);
				}
				if ("6" == stList[a].fweek) {
					week7 = (stList[a].fleftv).substr(0, 3);
					week77=(stList[a].frightv).substr(0, 3);
	            }
				
var ri=1;
var le=2;
var lineChartData = {
	labels: ["第一次", "第二次", "第三次", "第四次", "第五次", "第六次","第七次"],
	datasets: [{
		fillColor: "rgba(220,220,220,0.0)",
		strokeColor: "#3bdfe1",
		pointColor: "#3bdfe1",
		pointStrokeColor: "#3bdfe1",
		data: [5.3,5.3,5.3,5.3,5.3,5.3,5.3]
	}, {
		fillColor: "rgba(151,187,205,0.0)",
		strokeColor: "#FF82AB", 
		pointColor: "#FF82AB",
		pointStrokeColor: "#FF82AB",
		data: [week1,week2,week3,week4,week5,week6,week7]
	}, {
		fillColor: "rgba(151,187,205,0.0)",
		strokeColor: "#3d85c6", 
		pointColor: "#3d85c6",
		pointStrokeColor: "#FF82AB",
		data: [week11,week22,week33,week44,week55,week66,week77]
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
}
});



	});




