// Write function 
//console.log(twoSum([2, 7, 11, 15], 9));

function twoSum(arr, target) {
	const arrLength = arr.length;
	const result = [];

	for(var i = 0; i < arrLength; i++) {
		for(j = i+1; j < arrLength; j++) {
          if(arr[i] + arr[j] === target){
          	result.push(i);
          	result.push(j)
          }
		}
	}
	return result;
}

console.log(twoSum([2, 7, 11, 15], 9));

// another way 
const twoSum_On_Better = (arr, target) => {
	let numberObjet = {};
	let length = arr.length;

	for(var i = 0; i < length; i++) {
		numberObjet[arr[i]] = i;
	}

	for(var i = 0; i < arr.length; i++) {
		let diff = arr[i] - target;
		if(numberObjet.hasOwnProperty(diff) && numberObjet[diff] !== i) {
			return [i, numberObjet[diff]]
		}
	}

}


// Monotonice array 
const isMono = [1,2,3].every(function(e, i, a) {
	if(i)  return e > a[i-1]; else return true;
})

console.log(isMono)