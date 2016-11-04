/* Compare two arrays and return a new array with any items only found in one
of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays. */
'use strict';

function diffArray(arr1, arr2) {

  let combinedArray = arr1.concat(arr2); 

  let filtered = combinedArray.filter(uniqueSort);
  function uniqueSort(value){
    if(arr1.indexOf(value) === -1) {
      return true;
    } else if (arr2.indexOf(value) === -1){
      return true;
    }
  }
  return console.log(filtered);
}


diffArray([1, 2, 99, 3, 5, 6], [1, 2, 3, 4, 5]);