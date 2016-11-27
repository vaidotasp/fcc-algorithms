'use strict'
function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let splitString = str.split('');
  let answer ='';
  
  checkFirstLetter(vowels, str);
  notVowelfirst(vowels, str);
  
  function checkFirstLetter(vowels, str) {
    for (let i=0;i<vowels.length;i++) {
      if (splitString[0] === vowels[i]) {
        answer = str + "way";
        
      }
    }  
  }
  
  function notVowelfirst(vowels, str) {
    console.log(vowels, str);
    console.log(splitString.indexOf(vowels[0]))
    splitString.map(function(obj) {
      if ()
    })
  }
  
  
  console.log(answer);
  
}
console.log(translatePigLatin("onsonant"));


