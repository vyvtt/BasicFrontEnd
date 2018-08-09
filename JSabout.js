// JavaScript Document

var t;
var curentIndex = 1;

function next() {
	clearInterval(t);
	if (curentIndex < 6){
		curentIndex++;
		document.getElementById("imgSlide") .src = "Image/about" + curentIndex + ".jpg";
	}
	else {
		curentIndex = 1;
		document.getElementById("imgSlide") .src = "Image/about" + curentIndex + ".jpg";
	}
	t = setInterval("next()", 4000);
}

function back() {
	clearInterval(t);
	if (curentIndex > 1){
		curentIndex--;
		document.getElementById("imgSlide") .src = "Image/about" + curentIndex + ".jpg";
	}
	else {
		curentIndex = 6;
		document.getElementById("imgSlide") .src = "Image/about" + curentIndex + ".jpg";
	}
	t = setInterval("next()", 4000);
}

t = setInterval("next()", 4000);