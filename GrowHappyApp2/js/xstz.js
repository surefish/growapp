var week1 =0;
var week2 =0;
var week3 =0;
var week4 =0;
var week5 =0;
var week6 =0;
var week7 =0;

var w;
mui.plusReady(function(){
	mui.init();
    w = plus.nativeUI.showWaiting("　　 请等待...　　 ");
	mui.ajax(ip + "newbegin/index/oldTWeight", {
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
					if(undefined!=stList[a].fweight){
						week1=stList[a].fweight;
					}else{
						week1=0;
					}
					
					
				}
				if ("1" == stList[a].fweek) {
					if(undefined!=stList[a].fweight){
						week2=stList[a].fweight;
					}else{
						week2=0;
					}
					
				}
				if ("2" == stList[a].fweek) {
					if(undefined!=stList[a].fweight){
						week3=stList[a].fweight;
					}else{
						week3=0;
					}
					
				}
				if ("3" == stList[a].fweek) {
					if(undefined!=stList[a].fweight){
						week4=stList[a].fweight;
					}else{
						week4=0;
					}
					
				}
				if ("4" == stList[a].fweek) {
					if(undefined!=stList[a].fweight){
						week5=stList[a].fweight;
					}else{
						week5=0;
					}
					
				}
				if ("5" == stList[a].fweek) {
					if(undefined!=stList[a].fweight){
						week6=stList[a].fweight;
					}else{
						week6=0;
					}
					
				}
				if ("6" == stList[a].fweek) {
					if(undefined!=stList[a].fweight){
						week7=stList[a].fweight;
					}else{
						week7=0;
					}
					
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
		data: [55,55,55,55,55,55,55]
	}, {
		fillColor: "rgba(151,187,205,0.0)",
		strokeColor: "#3d85c6", 
		pointColor: "#3d85c6",
		pointStrokeColor: "#3d85c6",
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
}
});



	});




