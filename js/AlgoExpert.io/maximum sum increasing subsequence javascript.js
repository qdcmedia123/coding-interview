//https://repl.it/@hunsoo/Maximum-Sum-Increasing-Subsequence#main.js
function maxSumIncreasingSubsequence(array) {
	// we start from the single element at the corresponding index
	const localMax = array.map(el => [el, [el]]);
	
	// start from the second element
	for (let i = 1; i < array.length; i++) {
		// check all previous results  
		for (let j = 0; j < i; j++) {
			// if we can add the current element to this previous result
			// and beat the current best result, replace the current with a new one
			const [subSum, subSequence] = localMax[j];
			if (array[j] < array[i] && // strictly increasing
					subSum + array[i] > localMax[i][0]) { // the new sum is bigger
				localMax[i] = [subSum + array[i], subSequence.concat([array[i]])]; // replace the current interemediate result
			}
		}
	}
	// pick the subsequence with the maximum sum
	return localMax.reduce((max, local) => local[0] > max[0] ? local : max);
}

maxSumIncreasingSubsequence([10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50])