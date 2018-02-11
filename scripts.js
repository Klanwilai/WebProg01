const counterElem = document.querySelector("#print-counter")

var words = [];

function mainFunction(){
  //console.log(document.querySelector("textarea").value.length);

  var charCounter = document.querySelector("textarea").value.length;
  var wordFinder = document.querySelector("textarea").value;

  words = wordFinder.split(" ");

  var wordCounter = words.length;

  console.log(wordCounter);
  counterElem.innerHTML = `You have typed ${charCounter} characters.`;
};

class wordObj = {
  this.value = "";
  this.qty = 0;
}

// wordsObj = words.map( word => ({word}) );
