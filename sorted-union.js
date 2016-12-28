/*Write a function that takes two or more arrays and returns a new array of 
unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, 
but the final array should not be sorted in numerical order.
*/
/* uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4] */
'use strict'


function uniteUnique(arr) {
  
  //turn all arguments (arrays) into a single array of elements
  arr = Array.prototype.slice.call(arguments);


  // flatten or merge arrays' elements into a single array
  arr = arr.reduce(function(prev, curr) {
    return prev.concat(curr);
  });
  
  // finds and removes the dupes, checks the elements position and compares it to
  // the incrementation, first elements index should be the first increment,
  // works because indexOf finds the first intance of the element starting from
  // the left side
  arr = arr.filter(function(elem, index, array) {
    return array.indexOf(elem) === index;
  });
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  
  
  