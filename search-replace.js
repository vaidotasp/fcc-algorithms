'use strict'
function myReplace(str, before, after) {
  let newArr = str.split(' ');
  for (let i=0; i<newArr.length;i++) {
    if (newArr[i] === before) {
      if(before.charAt(0) === before.charAt(0).toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
      }
      newArr[i] = after;
    }
  }
  return newArr.join(' ');
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
