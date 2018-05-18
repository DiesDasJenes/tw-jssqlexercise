// helper function for output
function writeAnswer(answer) { 
    $('div.answer').append($('<div>').text(answer));
}

function kiteGame(numberOfKites) {
    var answer = "";
    
    for(let count = 1; count < numberOfKites+1; count++){
    	if(count % 3 == 0 && count % 5 == 0){
      	answer += " Peche! Ipo kaate! "
      }else if(count % 3 == 0){
      	answer += " Peche! "
      }else if(count % 5 == 0){
      answer += " Ipo kaate! "
      }else{
      	answer = answer + " " + count
      	}
    }
       
  
    
    writeAnswer(answer);
}

kiteGame(100);
