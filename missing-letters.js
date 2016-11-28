'use strict'

//always going to be lowercase
//string is the chunk of letters
//string must be converted to unicode values
//find the missing value through unicode
//checking that the values are in the increments of 1
// return the missing value if there is one
// return [undefined] if no such value is found

 function findMissingLetter(str) {
     let checker = str.charCodeAt(0);
     for (let i=0;i<str.length;i++) {
        if (str.charCodeAt(i) - checker === 0 || str.charCodeAt(i) - checker === 1) {
            checker = str.charCodeAt(i);
        } else {
            return String.fromCharCode(str.charCodeAt(i) -1);
        }
      }
      return undefined;
 }


findMissingLetter('abc')
