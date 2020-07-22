// SmallestDifferetn(arr1, arr2)
function smallestDifferent(array1, array2) {
	if(array1.lenght === 0 || array2.length === 0) {
		return -1;
	}
	let result = Number.MAX_SAFE_INTEGER;

	for(let i = 0; i < array1.length; i++) {
		for(let j = 0; j < array2.length; j++) {
			if(Math.abs(array1[i] - array2[j]) < result) {
				result = Math.abs(array1[i] - array2[j]);
			}
		}
	}

	return result;
}

const array2 = [1, 3, 15, 65];
const array1 = [40, 25, 5];

console.log(smallestDifferent(array1, array2));

// Smallest in single array 
function getMin(data) {
	return data.reduce(function(r,e,i) {
		let absR = Math.abs(r), absE = Math.abs(e);
		if(absR > absE || i === 0 || (absR === absE && e > r)) r = e
			return r
	})
}

console.log(getMin([1,2,3]))
console.log(getMin([1, -1, 5, 5.5, -4]))
console.log(getMin([-1, 1, 5, 5.5, -4]))