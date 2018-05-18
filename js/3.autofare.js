// js
// helper function for output
function writeAnswer(answer) { 
    $('div.answer').append($('<div>').text(answer));
}

function getAutoFare(kilometers,waitingtime,isNight){
	let autofare = (20 + 8 * (kilometers -1) + 4 * waitingtime) 
	return isNight ? autofare + (autofare * 0.5) : autofare
}

function getResult(KM,WT,isNight){
	let answer = "";
  answer += "Given the kilometers \n traveled is " + KM 
  answer += `and the minutes spent waiting in a traffic jam is ${WT}`
  answer += `nd it was ${isNight ? 'night' : 'day'} time`
  answer += `when the end of the journey is reached`
  answer += `then the meter displays the total fare as Rs ${getAutoFare(KM,WT,isNight)}`
  writeAnswer(answer);
}

getResult(6,8,false);

getResult(3.5,4,true);


