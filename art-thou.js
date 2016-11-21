'use strict'
function whatIsInAName(collection, source) {
  var arr = [];
  let target = Object.keys(source);
  console.log(target[0]);
  // console.log(target);
  for (let prop in collection) {
    for (let key in collection[prop]) {
      if (key === target[0]) {
        console.log('key match found', key)
        console.log(source[target]);
        if (source[target] === collection[prop][key]) {
          console.log('perfect match', collection[prop][key]);
          console.log('returning the whole object', collection[prop]);
          arr.push(collection[prop]);
        }
      }
    }
    // console.log(collection[prop]);
    

  }
  
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet"}));
