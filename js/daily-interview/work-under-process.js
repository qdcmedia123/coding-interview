// Find the missing number from this array

const sort = (arr) => {
	let done = false;
	while (!done) {
		done = true;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				var tmp = arr[i + 1];
				arr[i + 1] = arr[i];
				arr[i] = tmp;
				done = false;
			}
		}
	}
	return arr;
};

const findMissing = (arr) => {
	const sortArr = sort(arr);
	const missArr = [];
	// Loop throgh the each item
	for (var i = 0; i < arr.length; i++) {
		// Check if next index is not equal to index + 1
		if (arr[i] + 1 !== arr[i + 1]) {
			for (var j = arr[i] + 1; j < arr[i + 1]; j++) {
				missArr.push(j);
			}
		}
	}
	return missArr;
};
const arr = [10, 1, 3, 9, 6, 7];
console.log(findMissing(arr));
const arr = [1, 2, 3, 10];
console.log(findMissing(arr));

for (var i = 2 + 1; i < 5; i++) {
	console.log(i);
}
