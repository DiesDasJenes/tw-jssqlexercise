// helper function for output
function writeAnswer(answer) { 
    $('div.answer').append($('<div>').text(answer));
}

function isTrafficJam(numberOfAutoRickshaws, isAfterEightPm) {
    var answer;
    answer = numberOfAutoRickshaws > 40 && !isAfterEightPm;
    writeAnswer(answer);
}

isTrafficJam(30, false);
isTrafficJam(41, false);
isTrafficJam(41, true);
