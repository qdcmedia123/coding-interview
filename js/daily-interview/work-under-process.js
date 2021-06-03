const majorityElemn = (arr) => {
	// Defining max count
	let maxCount = 0;
	// Which index is value repeats more
	let indexElem = null;
	// Setting array length
	const arrLength = arr.length;
	// for loop for the array
	for (var i = 0; i < arrLength; i++) {
		// Defining count count will ++ if element repeats
		let count = 0;
		// Looping again the array
		for (var j = 0; j < arrLength; j++) {
			// Check if current arr[i] is matching rest of the array
			if (arr[i] === arr[j]) {
				// Count will increase
				count++;
			}
			// When maxCount is less then count for
			// Example if count is 0 it will not run 0 < 0 false
			// 0 < 1 true
			if (maxCount < count) {
				// then set the last count in count++
				maxCount = count;
			}
		}
		// Have access to the last increased count++
		// Compare with
		if (maxCount > arrLength / 2) {
			indexElem = arr[i];
			break;
		}
	}
	return indexElem ? { element: indexElem, length: maxCount } : null;
};

const arr = [1, 2, 3, 3, 3];

console.log(majorityElemn(arr));
