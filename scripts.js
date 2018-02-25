const counterElem = document.querySelector("#print-counter"); //Creates element to print data to the HTML
const counterUniq = document.querySelector("#unique-counter");
const counterWord = document.querySelector("#word-counter");
const alphabetList = document.querySelector("#alphabet-list");
const wordList = document.querySelector("#alphabet-list");
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Æ", "Ø", "Å"];

var words = [];
var showListedWords = "";
////////////////////////////////////////////////////////////////////////////////

function mainFunction(){

  var charCounter = document.querySelector("textarea").value.length;
  var textInput = document.querySelector("textarea").value;

  words = textInput                            //We find the words in the array by splitting them with " ",
    .split(/[\n <>.,\?/()]/)                     //then we make sure to filter out "", so it doesn't add to the counter.
    .filter(word => word != "")
    .map(word => word = word.toUpperCase());   //Sets every word to uppercase

  var uniqueWords = words.filter((elem, pos, arr) => arr.indexOf(elem) == pos);

  // var word = [uniqueWords.length];
  // var counter = [uniqueWords.length];
  var wordCounter = words.length;
  var wordObj = wordCountMerger(words);


  console.log(wordObj);
  counterElem.innerHTML = `You have typed ${charCounter} characters.`; //Pushes text and data to the HTML
  counterUniq.innerHTML = `You have typed ${uniqueWords.length} unique words.`;
  counterWord.innerHTML = `You have typed ${wordCounter}  words.`;

  document.getElementById("submit-button").addEventListener("click", function(){
    printWordList(wordObj, alphabet);
});
}
////////////////////////////////////////////////////////////////////////////////

function wordCountMerger(wordArr) {             //Grabs array as parameter
 var a = [], b = [], c = [], prev;              //Creates help variables

 wordArr.sort();                                //Sorts the array
 for(var i = 0; i < wordArr.length; i++){       //For loop goes through array
     if(wordArr[i] !== prev){                   //Checks if current indexed element is equal to previous index
         a.push(wordArr[i]);                    //if no, push word to array
         b.push(1);                             //add one to count
     } else{
         b[b.length-1]++;                       //if yes, + 1 to current index
     }
     prev = wordArr[i];                         //Put element of current index into "prev" variable
 }
 for(var j = 0; j < a.length; j++){             //fills array c with objects consisting the value of array a and b
   c[j] = {id: a[j], count: b[j]};
 }
 return c;
}

////////////////////////////////////////////////////////////////////////////////

function printWordList(wO, alph){                     //Takes arrays as parameters
  var wordStartsWith = false;
  var startWithA = true;
  wordList.innerHTML = "";

  for(var n = 0; n < alph.length; n++){
    wordStartsWith = false;

    for(var o = 0; o < wO.length; o++){
      if(alph[0] === wO[o].id.charAt(0) && startWithA){
        alphabetList.innerHTML += "<li><h1>" + alph[0] + "</h1></li>";
        startWithA = false;
      }
      if(alph[n] === wO[o].id.charAt(0)){
        showListedWords = "<li>" + wO[o].id + ": " + wO[o].count + "</li>";
        wordList.innerHTML += showListedWords;
      }

      if(alph[n+1] === wO[o].id.charAt(0))
        wordStartsWith = true;
    }
    if(wordStartsWith){
      alphabetList.innerHTML += `<li><h1> ${alph[n+1]} </h1></li>`;
    }
  }
  // wordList.innerHTML = "";                      //Reset wordList
  // for(var o = 0; o < wO.length; o++){           //Goes through array, print object key values
  //   showListedWords = "<li>" + wO[o].id + ": " + wO[o].count + "</li>";
  //   wordList.innerHTML += showListedWords;
  // }
}

////////////////////////////////////////////////////////////////////////////////

function printAlphabet(){


}

////////////////////////////////////////////////////////////////////////////////

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);

// wordsObj = words.map( word => ({word}) );

// for(i=0; i <= wordCounter; i++){
//   word[i] = uniqueWords[i];
//   counter[i] = 0;
//   for(j=0; j <= words.length; j++){
//     if(uniqueWords[i] === word[j]){
//     counter[i] += 1;
//    }
//   }
//   //word[i].showValues();
//   console.log(word[i]);
//   console.log(counter.length);
//   console.log(counter);
// }

// class wordObj {
//   constructor(value){
//     this.value = value;
//     this.qty = 1;
//   }
//   showValues(){
//     console.log(this.value);
//     console.log(this.qty);
//   }
// }

// wordObj.sort(function(a, b) {
//   return a.count - b.count;
// });
// console.log(wordObj);
