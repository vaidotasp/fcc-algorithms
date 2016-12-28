'use strict'

function spinalCase(str) {
  let newStr = str.split(/(?=[A-Z])|[_]|[\s]/);
  newStr = newStr.join('-').toLowerCase();
  return newStr;

  }
   

spinalCase('AllThe-small Things');
