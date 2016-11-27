'use strict'
function translatePigLatin(str) {
  let vowels = ["a", "i", "o", "u","e","y"];
  let splitString = str.split('');
  let answer ='';
  
  
  notVowelfirst(vowels, str);
  checkFirstLetter(vowels, str);
  
  
  function checkFirstLetter(vowels, str) {
    for (let i=0;i<vowels.length;i++) {
      if (splitString[0] === vowels[i]) {
        answer = str + "way";
        
      }
    }  
  }
  
  function notVowelfirst(vowels, str) {
    for (let i=0; i<vowels.length; i++) {
      if (splitString.indexOf(vowels[i]) !== -1) {
        answer = str.slice(str.indexOf(vowels[i])) + 
        str.slice(0, str.indexOf(vowels[i])) + 'ay' ;
      }
    }
  }


  return answer;
}
console.log(translatePigLatin("mineses"));


