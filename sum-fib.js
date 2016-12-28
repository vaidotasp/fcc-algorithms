'use strict';
function sumFibs(num) {
 //get all fibonacci numbers
  //get only those that are odd
  //get only those that are less or equal to num
  //get the sum
  var fibArr = [];
  fibArr[0] = 1;
  fibArr[1] = 1;
  var filterFib = [1];
  for (var i=2; i<num; i++) {
      fibArr[i] = fibArr[i-2] + fibArr[i-1];
      if (fibArr[i] % 2 !== 0 && fibArr[i] <= num) {
        filterFib.push(fibArr[i]);
      }
  }
  
  var sum = filterFib.reduce(add, 0);
  
  function add(a, b) {
    return a + b;
  }
  
  console.log(fibArr);
  console.log(filterFib);
  console.log(sum);
  return sum +1;
}
sumFibs(4);
