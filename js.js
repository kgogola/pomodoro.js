let time = {
	minutes:0,
	seconds:15,
	
};

let t; // i will put setTimeout function here 
let oneSec=1000;	


window.onload = function()
{

document.querySelector("#stop").disabled = true;
clock(0);



	
	
}





function clock(period) {
	
	if(time.seconds<0 && time.minutes>0)
	{
		time.seconds =59;
		time.minutes--;
	}

	if(time.seconds==0 && time.minutes==0)
	{
	alert("FINISHED!!!!");
	stopB();	
	}
	



if(time.minutes<10)minutes.innerHTML="0"+time.minutes;
else minE.innerHTML=minutes.minutes;

if(time.seconds<10)seconds.innerHTML="0"+time.seconds;
else seconds.innerHTML=time.seconds;
	
time.seconds--;

	
	if(period!=0)t=setTimeout("clock(oneSec)", period); //i did it to display primary time
	
	}
	
	
function stopClock() {
	clearTimeout(t);
	}


function startB()
{
document.querySelector("#stop").disabled = false;

if(start.innerHTML=="START")
{
	clock(1000);
	start.innerHTML="PAUSE";	
	let x = document.querySelector("#stop");
	x.innerHTML="STOP";
}

else
{
	stopClock();
	start.innerHTML="START";
	let x = document.querySelector("#stop");
	x.innerHTML="DONE";	
}


}.js

function stopB()
{
	location.reload();
}









//MY QUESTION:
//It is good custom to add function as a "on click" atribute in HTML ???












