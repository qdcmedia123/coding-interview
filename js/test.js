// Given an array find a pair such that it sums to a given number
let nums = [2, 7, 10, 1, 11, 15, 9]
let target = 11
let numMap = new Map();

let pairs = nums.reduce((acc, num) => {
	let numToFind = target - num;

	if(numMap.get(numToFind)) {
		return [...acc, [numToFind, num]]
	} else {
		numMap.set(num, true)
		return [...acc];
	}
}, [])


String.prototype.format = function() {
	var i = 0, args = arguments;
	return this.replace(/{}/g, function() {
		return typeof args[i] !== 'undefined' ? args[i++] : '' ;
	})
	
}
var bar1 = 'foobar',
    bar2 = 'jumped',
    bar3 = 'dog';

// Compute join pints between two number 

function conputeJoinPoint(s1,s2) {
	let s1Array = s1
    .toString(10)
    .split("")
    .map(function (t) {
      return parseInt(t);
    });
  let s2Array = s2
    .toString(10)
    .split("")
    .map(function (t) {
      return parseInt(t);
    });

	// Reduce both variable and add the number 
	let s1Sum = s1Array.reduce(function(a,b) {
		return a + b;
	}) + s1;

	let s2Sum = s1Array.reduce(function(a,b) {
		return a + b;
	}) + s2;

	if(s1Sum !== s2Sum) {
		return conputeJoinPoint(s1Sum, s2Sum);
	}

	return s1Sum;

}

console.log(conputeJoinPoint(471, 480));