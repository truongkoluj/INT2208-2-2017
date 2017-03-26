var num1, num2, num3;
var sign;
var score = 0;
var start;

function init() {
	$('#score').text("Score: " + score);
	num1 = Math.floor(Math.random()*20)+1;
	num2 = Math.floor(Math.random()*20)+1;
	sign = Math.floor(Math.random()*4);
	switch(sign) {
		case 0:
		num3 = num1 + num2;
		$('#question').text(num1 + " _ " + num2 + " = " + num3);
		break;
		case 1:
		num3 = num1 - num2;
		$('#question').text(num1 + " _ " + num2 + " = " + num3);
		break;
		case 2:
		num3 = num1 * num2;
		$('#question').text(num1 + " _ " + num2 + " = " + num3);
		break;
		case 3:
		var temp = num1 / num2;
		num3 = Math.floor(temp*100)/100;
		$('#question').text(num1 + " _ " + num2 + " = " + num3);
		break;
		default:
		break;
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
			document.getElementById("add").disabled = true;
			document.getElementById("sub").disabled = true;
			document.getElementById("mul").disabled = true;
			document.getElementById("div").disabled = true;
			}
        if (diff <= 0) {
            clearInterval(intervalSetted);
        }
    }

    timer();
    intervalSetted = setInterval(timer, 1000);
}

$('#add').on('click', function() {
	if(num1 + num2 === num3) {
		rightAnswer();
	}
	else {
		wrongAnswer();
		}
	});

$('#sub').on('click', function() {
	if(num1 - num2 === num3) {
		rightAnswer();
	}
	else {
		wrongAnswer();
		}
	});
	
$('#mul').on('click', function() {
	if(num1 * num2 === num3) {
		rightAnswer();
	}
	else {
		wrongAnswer();
		}
	});
	
$('#div').on('click', function() {
	if(sign === 3) {
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
	document.getElementById("add").disabled = false;
	document.getElementById("sub").disabled = false;
	document.getElementById("mul").disabled = false;
	document.getElementById("div").disabled = false;
	});
	
$(document).ready(function() {
    init();
	started(30);
});