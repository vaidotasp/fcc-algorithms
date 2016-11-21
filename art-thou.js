'use strict'
function whatIsInAName(collection, source) {
  var arr = [];
  let target = Object.keys(source);
  console.log(target.length);
  
  
  return collection.filter(function (obj) {
    for (let i=0;i<target.length;i++) {
      if (!obj.hasOwnProperty(target[i]) || obj[target[i]] !== source[target[i]]) {
        return false
      }
    }
    return true
  });
}
  


console.log(whatIsInAName([{ "a": 1, "b": 2 }, 
{ "a": 1 }, 
{ "a": 1, "b": 2, "c": 2 }], 
{ "a": 1, "b": 2 }));
