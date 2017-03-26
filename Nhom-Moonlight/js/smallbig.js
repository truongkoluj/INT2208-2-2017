var num = [];
var score = 0;
var start;
var intervalSetted = null;

function findMin() {
	
	var min = num[0];
	if(num.length>1) {
	for(var i=0; i<num.length; i++) {
		if(num[i]<min) {
			min=num[i];
			}
		}
	}
	return min;
}

function checkExist() {
	if(num.length>1){
	for(var i=0; i<num.length-1; i++) {
		for(var j=i+1; j<num.length; j++){
			if(num[i]===num[j]){
				return false;}
			}
		}
	}
	return true;
	}

function checkDone() {
	for(var i=0; i<6; i++) {
		if(num[i]!==100) {
			return false;
			}
		}
		return true;
	}	
	
function init() {
	num = [];
	for(var i=0; i<6; i++) {
		num[i] = Math.floor(Math.random()*20)-10;
		while(checkExist()===false) {
			num[i] = Math.floor(Math.random()*20)-10;
			}
		}
	}
	
	function setNumber() {
		for(var i=0; i<6; i++) {
			document.getElementById("num"+i).disabled=false;
			}
		$('#num0').text(num[0]);
		$('#num1').text(num[1]);
		$('#num2').text(num[2]);
		$('#num3').text(num[3]);
		$('#num4').text(num[4]);
		$('#num5').text(num[5]);
		}
		
	function started(duration) {
    var documentWidth = $(document).width();
    start = Date.now();
    intervalSetted = null;

    function timer() {
        var diff = duration - (((Date.now() - start) / 1000) | 0);
        var seconds = (diff % 60) | 0;
        var progresBarWidth = (seconds * documentWidth / duration);

        $('#timer-bar').css({
            width: progresBarWidth + 'px'
        });
		if(progresBarWidth === 0) {
			over();
			}
        if (diff <= 0) {
            clearInterval(intervalSetted);
        }
    }

    timer();
    intervalSetted = setInterval(timer, 1000);
}
function over() {
	$('#num0').text('-');
			$('#num1').text('O');
			$('#num2').text('V');
			$('#num3').text('E');
			$('#num4').text('R');
			$('#num5').text('-');
			for(var i=0; i<6; i++) {
			document.getElementById("num"+i).disabled=true;
			}
	}
	$('#play').on('click', function() {
		setNumber();
		document.getElementById("play").disabled=true;
		started(30);
		});
		
	$('#retry').on('click', function() {
		document.getElementById("play").disabled=false;
		for(var i=0; i<6; i++) {
			document.getElementById("num"+i).disabled=true;
			}
		score = 0;
		$('#score').text("Score: " + score);
		init();
		$('#num0').text('R');
		$('#num1').text('E');
		$('#num2').text('A');
		$('#num3').text('D');
		$('#num4').text('Y');
		$('#num5').text('?');
		clearInterval(intervalSetted);
		});	
		
	$('#num0').on('click',function() {
		if(num[0]===findMin()) {
			document.getElementById("num0").disabled=true;
			num[0]=100;
			score++;
			if(checkDone()) {
				init();
				setNumber();
			}
			$('#score').text("Score: " + score);
			}
		else{
			over();
			start = Date.now() - 30000;
			}
		});
		
		$('#num1').on('click',function() {
		if(num[1]===findMin()) {
			document.getElementById('num1').disabled=true;
			num[1]=100;
			score++;
			if(checkDone()) {
				init();
				setNumber();
			}
			$('#score').text("Score: " + score);
			}
		else{
			over();
			start = Date.now() - 30000;
			}
		});
		
		$('#num2').on('click',function() {
		if(num[2]===findMin()) {
			document.getElementById("num2").disabled=true;
			num[2]=100;
			score++;
			if(checkDone()) {
				init();
				setNumber();
			}
			$('#score').text("Score: " + score);
			}
		else{
			over();
			start = Date.now() - 30000;
			}
		});
		
		$('#num3').on('click',function() {
		if(num[3]===findMin()) {
			document.getElementById("num3").disabled=true;
			num[3]=100;
			score++;
			if(checkDone()) {
				init();
				setNumber();
			}
			$('#score').text("Score: " + score);
			}
		else{
			over();
			start = Date.now() - 30000;
			}
		});
		
		$('#num4').on('click',function() {
		if(num[4]===findMin()) {
			document.getElementById("num4").disabled=true;
			num[4]=100;
			score++;
			if(checkDone()) {
				init();
				setNumber();
			}
			$('#score').text("Score: " + score);
			}
		else{
			over();
			start = Date.now() - 30000;
			}
		});
		
		$('#num5').on('click',function() {
		if(num[5]===findMin()) {
			document.getElementById("num5").disabled=true;
			num[5]=100;
			score++;
			if(checkDone()) {
				init();
				setNumber();
			}
			$('#score').text("Score: " + score);
			}
		else{
			over();
			start = Date.now() - 30000;
			}
		});
		
	$(document).ready(function(){
		for(var i=0; i<6; i++) {
			document.getElementById("num"+i).disabled=true;
			}
		init();
		
		});