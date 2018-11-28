function logged_in() {
	document.getElementById("welcome").style.display = "block";
	document.getElementById("hello_bt").style.display = "none";	
	document.getElementById("login_out").innerHTML = "Logout";
}



var time_show = 1, post_show = 1, my_post;	

function time() {	
	if (time_show == 0) {
		time_show = 1;
		time_on();
	}
	else {
		time_show = 0;
		time_on();
	}
}

function time_on() {
	if (time_show == 1) {
		var t = setTimeout(time_on, 500);
		var now = new Date();
		var y, m, d, h, mi, s, day;
		y = now.getYear() + 1900;
		m = reMonth(now.getMonth());
		d = now.getDate();
		h = reTime(now.getHours());
		mi = reTime(now.getMinutes());
		s = reTime(now.getSeconds());
		day = reDay(now.getDay());
		
		document.getElementById("time_value0").innerHTML = day;	
		//document.getElementById("time_bt").value = "Hide Time";
		
		document.getElementById("time_value1").innerHTML = d + " " + m + " " + y;
		document.getElementById("time_value2").innerHTML = h + " : " + mi + " : " + s;
	}
	else {
		clearTimeout(t);
		//document.getElementById("time_bt").value = "Show Time"
		document.getElementById("time_value0").innerHTML = "";
		document.getElementById("time_value1").innerHTML = ""
		document.getElementById("time_value2").innerHTML = ""
	}
	
}

function reTime(i) {
	if (i<10) {
		i = '0' + i;
	}
	return i;
}

function reDay(i) {
	switch(i) {
		case 0:
			return "Saturday";
			break;
		case 1:
			return "Sunday";
			break;
		case 2:
			return "Monday";
			break;
		case 3:
			return "Tuesday";
			break;
		case 4:
			return "Wednesday";
			break;
		case 5:
			return "Thursday";
			break;
		case 6:
			return "Friday";
			break;
		
	}
}

function reMonth(i) {
	switch(i) {
		case 0:
			return "January";
			break;
		case 1:
			return "February";
			break;
		case 2:
			return "March";
			break;
		case 3:
			return "Apirl";
			break;
		case 4:
			return "May";
			break;
		case 5:
			return "June";
			break;
		case 6:
			return "July";
			break;
		case 7:
			return "August";
			break;
		case 8:
			return "Septemper";
			break;
		case 9:
			return "October";
			break;
		case 10:
			return "November";
			break;
		case 11:
			return "December";
			break;	
	}
}

function post() {	
	if (post_show == 0) {
		post_show = 1;
		post_on();
	}
	else {
		post_show = 0;
		post_on();
	}
}

function post_on() {
	if (post_show == 1) {
		document.getElementById("post").value = "Hide Post";
		document.getElementById("post_value").innerHTML = my_post;
	}
	else {
		my_post = document.getElementById("post_value").innerHTML;
		document.getElementById("post").value = "Show Post";
		document.getElementById("post_value").innerHTML = "";
	}
	
}

//test
function loadajax() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('test').innerHTML = this.responseText;
		}
	}
	xhttp.open("GET", "../html/nar-bar.html", true);
	xhttp.send();
}