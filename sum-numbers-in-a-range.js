/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
  
  var large = (arr[0] === (Math.max(...arr))) ? arr[0] : arr[1];
  var small = (arr[0] !== (Math.max(...arr))) ? arr[0] : arr[1];
	var newArr = []
	while (large >= small){
		newArr.push(small);
		small = small + 1;
	}
	
	var sum = newArr.reduce(add, 0) 
	function add(a,b){
		return a+b;
	}
	
  return sum;
}

sumAll([1, 33]);