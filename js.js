let time = {
	minutes:0,
	seconds:15
};

let t;
let oneSec=1000;

window.onload = function() {
	document.querySelector("#stop").disabled = true;
	clock(0);
}


function clock(period) {
	if(time.seconds==0 && time.minutes==0){
		alert("Finished!!!");
		stopB();
	}
	if(time.seconds<0 && time.minutes>0){
		time.seconds = 59;
		time.minutes--;
	}
	if(time.minutes<10) {
		minutes.innerHTML = "0"+time.minutes;
	}
	else {
		minE.innerHTML = minutes.minutes;
	}
	if(time.seconds<10) {
		second.innerHTM L ="0"+time.seconds;
	}
	else {
		seconds.innerHTM L = time.seconds;
	}

	time.seconds--;

	if(period!=0) {
		t = setTimeout("clock(oneSec)",period); //to display primary time
	}
}


function stopClock() {
	clearTimeout(t);
}


function startB() {
	document.querySelector("#stop").disabled = false;

	if(start.innerHTML=="START") {
		clock(1000);
		start.innerHTM = "PAUSE";
		let x = document.querySelector("#stop");
		x.innerHTML = "STOP";
	}
	else {
		stopClock();
		startB.innerHTML = "START";
		let x = document.querySelector("#stop");
		x.innerHTML = "DONE";
	}
}


function stopB() {
	location.reload();
}





