const inputID = "#text-input";
const outputID = "#word-list";

  document.getElementById("submit-alphabet").addEventListener("click", function(){
    var printObj = new MyAwesomeWordClass(inputID, outputID);
    printObj.mainJob();
});

////////////////////////////////////////////////////////////////////////////////

class MyAwesomeWordClass {
  constructor(input, output){
    this.in = document.querySelector(input).value;
    this.out = document.querySelector(output);
    this.showListedWords = "";
  }

////////////////////////////////////////////////////////////////////////////////

  mainJob(){
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Æ", "Ø", "Å"];
    var words = this.in
      .split(/[\n <>.,\?/()]/)
      .filter(word => word != "")
      .map(word => word = word.toUpperCase());
    var showListedWords = "";
    var wordObj = this.objectCountCreator(words);
    this.printWordListAlph(wordObj, alphabet, this.out)
  }

////////////////////////////////////////////////////////////////////////////////

  objectCountCreator(wordArr) {                   //Grabs array as parameter
   var a = [], b = [], c = [], prev;              //Creates help variables

   wordArr.sort();                                //Sorts the array
   for(var i = 0; i < wordArr.length; i++){       //For loop goes through array
       if(wordArr[i] !== prev){                   //Checks if current indexed element is equal to previous index
           a.push(wordArr[i]);                    //if no, push word to array
           b.push(1);                             //add one to count
       } else{
           b[b.length-1]++;                       //if yes, + 1 to counter array current index
       }
       prev = wordArr[i];                         //Put element of current index into "prev" variable
   }
   for(var j = 0; j < a.length; j++){             //fills array c with objects consisting the value of array a and b
     c[j] = {id: a[j], count: b[j]};
   }
   return c;
  }

////////////////////////////////////////////////////////////////////////////////

  printWordListAlph(wO, alph, output){                  //Function prints words in alphabetical order. Takes arrays as parameters
    var wordStartsWith = false;                         //bool which purpose is to check if a word starts with the current letter in the alphabet array
    var startWithA = true;                              //bool only used to check if there are words starting with the letter "A", more technically index 0 of alphabet array
    var showListedWords = "";                           //reset wordList
    output.innerHTML = "";

    for(var n = 0; n < alph.length; n++){               //goes through alphabet array
      wordStartsWith = false;

      for(var o = 0; o < wO.length; o++){                                         //Goes through wordObject array
        if(alph[0] === wO[o].id.charAt(0) && startWithA){                         //if a wordobject starts with "A", and startWithA is true
          output.innerHTML += `<li><h1>  ${alph[0]}  </h1></li>`;                 //print a BIG A and set startWithA bool false
          startWithA = false;                                                     //This so that only one "A" may be printed
        }
        if(alph[n] === wO[o].id.charAt(0)){                                       //if the first letter of the current word is the same as the current value of the alphabet array
          showListedWords = `<li>  ${wO[o].id}:   ${wO[o].count}  </li>`;         //Print the word
          output.innerHTML += showListedWords;
        }

        if(alph[n+1] === wO[o].id.charAt(0))                                      //if next indexed letter in alphabet array is equal to first letter of current word in the word array
          wordStartsWith = true;                                                  //set wordStartsWith true
      }
      if(wordStartsWith){                                                         //if wordStartsWith is true
        output.innerHTML += `<li><h1> ${alph[n+1]} </h1></li>`;                   //Print the next indexed letter of alphabet array
      }
    }
  }

}

////////////////////////////////////////////////////////////////////////////////
