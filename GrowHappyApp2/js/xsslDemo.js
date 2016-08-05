var week1 =1;
var week2 =5;
var week3 =6;
var week4 =0;
var week5 =0;
var week6 =0;
var week7 =0;
var w;
mui.plusReady(function(){
	mui.init();





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
	}]
} 
var options = {  
								scaleshowgridlines: false,
								animation:false
						};
var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData,options);
var c1=document.getElementById("canvas");
c1.style.width="100%";	
	});




