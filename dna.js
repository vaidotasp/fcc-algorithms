// DNA Pairings using 2d array
'use strict'
function pairElement(str) {
  
  let answer =[];
  let newStr = str.split('');
  console.log(newStr)
  for (let i=0; i<newStr.length; i++) {
      switch (newStr[i]) {
          case "A":
            answer.push(newStr[i]);
            answer.push("T")
            answer.splice(0,2, "A", "T");
            // code
            break;
          case "T":
            answer.push(newStr[i]);
            answer.push("A")
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
  choppedStr.push(answer.slice(0,2));
  choppedStr.push(answer.slice(2,4));
  choppedStr.push(answer.slice(4,6));
  choppedStr.push(answer.slice(6,8));
  choppedStr.push(answer.slice(8,10));
  console.log(answer)
  console.log(choppedStr);
  return choppedStr;
}

pairElement("ATCGA");
