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

  objectCountCreator(wordArr) {                  
   var a = [], b = [], c = [], prev;             

   wordArr.sort();                               
   for(var i = 0; i < wordArr.length; i++){      
       if(wordArr[i] !== prev){                  
           a.push(wordArr[i]);                   
           b.push(1);                             
       } else{
           b[b.length-1]++;                       
       }
       prev = wordArr[i];                         
   }
   for(var j = 0; j < a.length; j++){            
     c[j] = {id: a[j], count: b[j]};
   }
   return c;
  }

////////////////////////////////////////////////////////////////////////////////

  printWordListAlph(wO, alph, output){
    var wordStartsWith = false;
    var startWithA = true;
    var showListedWords = "";
    output.innerHTML = "";

    for(var n = 0; n < alph.length; n++){
      wordStartsWith = false;

      for(var o = 0; o < wO.length; o++){
        if(alph[0] === wO[o].id.charAt(0) && startWithA){
          output.innerHTML += `<li><h1>  ${alph[0]}  </h1></li>`;
          startWithA = false;
        }
        if(alph[n] === wO[o].id.charAt(0)){
          showListedWords = `<li>  ${wO[o].id}:   ${wO[o].count}  </li>`;
          output.innerHTML += showListedWords;
        }

        if(alph[n+1] === wO[o].id.charAt(0))
          wordStartsWith = true;
      }
      if(wordStartsWith){
        output.innerHTML += `<li><h1> ${alph[n+1]} </h1></li>`;
      }
    }
  }

}

////////////////////////////////////////////////////////////////////////////////
