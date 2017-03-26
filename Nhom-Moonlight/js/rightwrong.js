	var result = "";
	var score = 0;
	var start;
function main() {
	
	}
function init() {
	var resultChooser = Math.floor(Math.random()*2);
	var signChooser = Math.floor(Math.random()*3);
	var num1 = Math.floor(Math.random()*10);
	var num2 = Math.floor(Math.random()*10);
	var num3 = 0;
	if(resultChooser===0) {
		result = false;
		var error = Math.floor(Math.random()*10)+1;
		switch(signChooser) {
			case 0: 
			num3 = num1 + num2 + error;
			$('#question').text(num1 + '+' + num2 + '=' + num3);
			break;
			case 1: 
			num3 = num1 - num2 + error;
			$('#question').text(num1 + '-' + num2 + '=' + num3);
			break;
			case 2: 
			num3 = num1 * num2 + error;
			$('#question').text(num1 + 'x' + num2 + '=' + num3);
			break;
			default: break;
			}
		}
		else {
			result = true;
			switch(signChooser) {
			case 0: 
			num3 = num1 + num2;
			$('#question').text(num1 + '+' + num2 + '=' + num3);
			break;
			case 1: 
			num3 = num1 - num2;
			$('#question').text(num1 + '-' + num2 + '=' + num3);
			break;
			case 2: 
			num3 = num1 * num2;
			$('#question').text(num1 + 'x' + num2 + '=' + num3);
			break;
			default: break;
			}
			}
	}

function rightAnswer() {
	$('#return').text('Chuẩn đấy AHIHI');
	$('#return').css('color','#0C0');
	score++;
	}
	
function wrongAnswer() {
	$('#return').text('Sai mất rôi!');
	$('#return').css('color','#F00');
	}
	
	$('#right').on('click', function() {
		if(result === true) {
			init();
			rightAnswer();
			$('#score').text('Score: ' + score);
			}else {
				wrongAnswer();
				init();
				}
		});
		
	$('#wrong').on('click', function() {
		if(result === false) {
			init();
			rightAnswer();
			$('#score').text('Score: ' + score);
			}else {
				wrongAnswer();
				init();
				}
		});
		
	$('#retry').on('click', function() {
		score = 0;
		$('#score').text('Score: ' + score);
		$('#return').text('Go!Go!');	
		$('#return').css('color','#000');	
		start = Date.now();
		started(30);
		init();
		document.getElementById("right").disabled = false;
		document.getElementById("wrong").disabled = false;
		});
		
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
			document.getElementById("right").disabled = true;
			document.getElementById("wrong").disabled = true;
			}
        if (diff <= 0) {
            clearInterval(intervalSetted);
        }
    }

    timer();
    intervalSetted = setInterval(timer, 1000);
}

 $(document).ready(function(){
	 init();
	 started(30);
	 });
