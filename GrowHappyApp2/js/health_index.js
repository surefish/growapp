function menu_01() {
	var div1 = document.getElementById('roll1');
	div1.style.display = "block";
	var div2 = document.getElementById('roll2');
	div2.style.display = "none";
	var div3 = document.getElementById('roll3');
	div3.style.display = "none";
	var btn1 = document.getElementById('menu1');
	btn1.style.backgroundColor = "white";
	btn1.style.color = "#86d949";
	var btn2 = document.getElementById('menu2');
	btn2.style.backgroundColor = "#86d949";
	btn2.style.color = "white";
	var btn3 = document.getElementById('menu3');
	btn3.style.backgroundColor = "#86d949";
	btn3.style.color = "white";
}

function menu_02() {
	var div2 = document.getElementById('roll2');
	div2.style.display = "block";
	var div1 = document.getElementById('roll1');
	div1.style.display = "none";
	var div3 = document.getElementById('roll3');
	div3.style.display = "none";
	var btn2 = document.getElementById('menu2');
	btn2.style.backgroundColor = "white";
	btn2.style.color = "#86d949";
	var btn1 = document.getElementById('menu1');
	btn1.style.backgroundColor = "#86d949";
	btn1.style.color = "white";
	var btn3 = document.getElementById('menu3');
	btn3.style.backgroundColor = "#86d949";
	btn3.style.color = "white";
}

function menu_03() {
	var div3 = document.getElementById('roll3');
	div3.style.display = "block";
	var div2 = document.getElementById('roll2');
	div2.style.display = "none";
	var div1 = document.getElementById('roll1');
	div1.style.display = "none";
	var btn3 = document.getElementById('menu3');
	btn3.style.backgroundColor = "white";
	btn3.style.color = "#86d949";
	var btn2 = document.getElementById('menu2');
	btn2.style.backgroundColor = "#86d949";
	btn2.style.color = "white";
	var btn1 = document.getElementById('menu1');
	btn1.style.backgroundColor = "#86d949";
	btn1.style.color = "white";
}

function openWindow() {
	document.getElementById('light').style.display = 'block';
	document.getElementById('fade').style.display = 'block';
}

function closeWindow() {
	document.getElementById('light').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
}