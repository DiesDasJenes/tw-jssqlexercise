function writeAnswer(answer) {
    $('div.answer').append($('<div>').text(answer));
}


let ad = [
    ["zara", "dhyaan", "dein"],
    ["mazarat", "chahenge"], // reverse this line
    ["attention", "please"]
];

function transformAd(ad){
	let adverttext = ""
  adverttext += ad[0];
  adverttext += ","
  adverttext += ad[1].reverse()
  adverttext += ","
  adverttext += ad[2]
  let answer = {
    words : adverttext,
    count: ad[0].length + ad[1].length + ad[2].length}
  return answer
}

var answer = transformAd(ad);

writeAnswer("count: " + answer.count)
writeAnswer("text:" +answer.words)
