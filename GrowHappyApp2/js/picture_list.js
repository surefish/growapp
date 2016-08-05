var choose=0;
function openck() {		
	if(choose==0)
	manager();
	else
	cancel();
}
function manager()
{
	choose=1;
	$(".ck").css("display", "block");
	$(".up").html("删除相册");
	$(".down").html("删除选中");
	$(".manager").html("取消");	
}
function cancel()
{
	$(".ck").css("display", "none");
	$(".up").html("上一页");
	$(".down").html("下一页");
	$(".manager").html("管理");
	choose=0;
}
function nextpage()
{
	if(choose==0)
	alert("123");
	else
	{
	openWindow2();	
	}
}
function openWindow() {
	document.getElementById('light').style.display = 'block';
	document.getElementById('fade').style.display = 'block';
}

function closeWindow() {
	document.getElementById('light').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
}
function openWindow2() {
	document.getElementById('light2').style.display = 'block';
	document.getElementById('fade2').style.display = 'block';	
}

function closeWindow2() {
	document.getElementById('light2').style.display = 'none';
	document.getElementById('fade2').style.display = 'none';
}