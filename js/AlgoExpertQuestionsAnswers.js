/*Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].*/
//https://medium.com/@paulrohan/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03


const twoSum = (arr, target) => {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				result.push(i);
				result.push(j);
			}
		}
	}
	return result;
}
//console.log(twoSum([2, 7, 11, 15], 9));
// => Output [ 0, 1 ]


// Much imporved 
const twoSum_On_Better = (arr, target) => {
	let numObject = {};
	for (let i = 0; i < arr.length; i++) {
		let thisNum = arr[i];
		numObject[thisNum] = i;
	}
	for (var i = 0; i < arr.length; i++) {
		let diff = target - arr[i];
		if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
			return [i, numObject[diff]];
		}
	}
}
//console.log(twoSum_On_Better([2, 7, 11, 15], 9));
// Output [ 0, 1 ]

// Move element at the end 
var array = [{"id":"4","name":"Boaz"},{"id":"2","name":"Shareen"},{"id":"3","name":"Simon"},{"id":"1","name":"Miriam"}];

var itemToReplace = array.splice(0, 1); // 0 is the item index, 1 is the count of items you want to remove.
// => [{"id":"4","name":"Boaz"}]

array = array.concat(itemToReplace);

//console.log(array);

// Monotonice array 
const isMono = [1, 2, 3, 4].every(function(e, i, a) { if (i) return e > a[i-1]; else return true; });
console.log(isMono)