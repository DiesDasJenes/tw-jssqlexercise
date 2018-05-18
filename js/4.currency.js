function writeAnswer(answer) { 
    $('div.answer').append($('<div>').text(answer));
}

var validCurrency = [5,10,20,50,100];

function writeSum(input){
let sum = 0;
	for(let i = 0; i < input.length; i++){
  	if(validCurrency.includes(input[i]) ){
    	sum += input[i];
    }else{
    	break;
    }  
  }
  writeAnswer(sum);
}

writeSum([10,20,100]);
writeSum([20,50,10,20,13,500])
