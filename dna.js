// DNA Pairings using 2d array
'use strict'
function pairElement(str) {

  let answer =[];
  let newStr = str.split('');
  
  for (let i=0; i<newStr.length; i++) {
      switch (newStr[i]) {
          case "A":
            answer.push(newStr[i]);
            answer.push("T")
            break;
          case "T":
            answer.push(newStr[i]);
            answer.push("A");
            break;
          case "C":
            answer.push(newStr[i]);
            answer.push("G")
            break;
          case "G":
            answer.push(newStr[i]);
            answer.push("C")
            break;
      }
  }

  let choppedStr = []
  for (let i=0; i<=answer.length;i++) {
    choppedStr.push(answer.splice(0,2));
    
    }
  choppedStr.push(answer);


  return choppedStr;
}

pairElement("ATCGA");


