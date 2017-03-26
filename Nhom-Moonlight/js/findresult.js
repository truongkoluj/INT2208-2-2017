var start;
var result;
var score = 0;
var id;
var error = [];

function checkErrorValid() {
	if(error[0] === 0 || error[1] === 0 || error[2] === 0 || error[0] === error[1] || error[1] === error[2] || error[2] === error[0]) {
		return false;
		}
	else {
		return true;
		}
	}
	
function init() {
	$('#score').text("Score: " + score);
	num1 = Math.floor(Math.random()*20);
	num2 = Math.floor(Math.random()*20);
	sign = Math.floor(Math.random()*3);
	switch(sign) {
		case 0:
		result = num1 + num2;
		$('#question').text(num1 + " + " + num2 + " = ?");
		break;
		case 1:
		result = num1 - num2;
		$('#question').text(num1 + " - " + num2 + " = ?");
		break;
		case 2:
		result = num1 * num2;
		$('#question').text(num1 + " x " + num2 + " = ?");
		break;
		default:
		break;
		}
	id = Math.floor(Math.random()*4);
	$('#num'+id).text(result);
	error = [];
	for(var i=0; i<3; i++){
		error[i] = Math.floor(Math.random()*10)-5;
		}
	while(checkErrorValid() === false) {
		for(var i=0; i<3; i++){
		 	error[i] = Math.floor(Math.random()*10)-5;
		}
		}
		var j=0;
		for(var i=0; i<4; i++) {
			if(i !== id) {
				$('#num'+i).text(result+error[j]);
				j++;
				}
			}
	}

function rightAnswer() {
	$('#return').text('Đúng rồi!');
	$('#return').css('color','#0C0');
	score++;
	init();
	}

function wrongAnswer() {
	$('#return').text('Sai mất rồi!');
	$('#return').css('color','#F00');
	init();
	}

function started(duration) {
    var documentWidth = $(document).width();
    start = Date.now();
    var intervalSetted = null;

    function timer() {
        var diff = duration - (((Date.now() - start) / 1000) | 0);
        var seconds = (diff % 60) | 0;
        var progresBarWidth = (seconds * documentWidth / duration);

        $('#timer-bar').css({
            width: progresBarWidth + 'px'
        });
		if(progresBarWidth === 0) {
			$('#question').text('Game over');
			document.getElementById("num0").disabled = true;
			document.getElementById("num1").disabled = true;
			document.getElementById("num2").disabled = true;
			document.getElementById("num3").disabled = true;
			}
        if (diff <= 0) {
            clearInterval(intervalSetted);
        }
    }

    timer();
    intervalSetted = setInterval(timer, 1000);
}

$('#num0').on('click', function() {
	if(id === 0) {
		rightAnswer();
		}
	else {
		wrongAnswer();
		}
	});
	
$('#num1').on('click', function() {
	if(id === 1) {
		rightAnswer();
		}
	else {
		wrongAnswer();
		}
	});
	
$('#num2').on('click', function() {
	if(id === 2) {
		rightAnswer();
		}
	else {
		wrongAnswer();
		}
	});
	
$('#num3').on('click', function() {
	if(id === 3) {
		rightAnswer();
		}
	else {
		wrongAnswer();
		}
	});
	
$('#retry').on('click', function() {
	start = Date.now();
	started(30);
	score = 0;
	init();
	document.getElementById("num0").disabled = false;
	document.getElementById("num1").disabled = false;
	document.getElementById("num2").disabled = false;
	document.getElementById("num3").disabled = false;
	});

$(document).ready(function() {
    init();
	started(30);
});