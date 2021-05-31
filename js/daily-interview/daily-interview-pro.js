//Given a matrix, transpose it. Transposing a matrix means the rows are now the column and vice-versa.

/*
def transpose(mat):
  # Fill this in.

mat = [
    [1, 2, 3],
    [4, 5, 6],
]

print(transpose(mat))
# [[1, 4],
#  [2, 5], 
#  [3, 6]]
*/

// const mat = [
// 	[1, 2, 3, 5, 6],
// 	[4, 5, 6, 3, 7],
// ];

// // Row are now colocum
// const firstILength = mat[0].length;
// const dLength = mat.length;
// const finalResult = [];

// for (var i = 0; i < firstILength; i++) {
// 	const result = [];
// 	for (var j = 0; j < mat.length; j++) {
// 		result.push(mat[j][i]);
// 	}
// 	finalResult.push(result);
// }

// https://www.geeksforgeeks.org/adding-one-to-number-represented-as-array-of-digits/
const addOneToNumber = (arr) => {
	// Convert the array to string
	const toString = parseInt(arr.join(""));
	// Add 1 to the number
	const addOne = (toString + 1).toString();
	// expload the number and create array
	const explodeStr = addOne.split("");
	// map and parse the string
	const parseStr = explodeStr.map((item) => {
		return parseInt(item);
	});
	return parseStr;
};

const compareVesrion = (v1, v2) => {
	// Split the both version by '.'
	arr1 = v1.split(".");
	arr2 = v2.split(".");
	n = v1.length;
	m = v2.length;

	arr1 = arr1.map((el) => {
		return parseInt(el);
	});
	arr2 = arr2.map((el) => {
		return parseInt(el);
	});

	// Make both array equal
	if (arr1 > arr2) {
		for (var i = arr2.length; i < arr1.length; i++) {
			arr2.push(0);
		}
	}

	if (arr2 > arr1) {
		for (var i = arr1.length; i < arr2.length; i++) {
			arr1.push(0);
		}
	}
	const result = [];

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] > arr2[i]) {
			result.arr1 = true;
			break;
		} else if (arr2[i] > arr1[i]) {
			result.arr2 = true;
			break;
		} else {
			result.arr1 = false;
			result.arr2 = false;
		}
	}

	return result;
};

const findMedian = (arr) => {
	if (!arr || arr.length === 0) return [];
	const r = [];
	for (var i = 0; i < arr.length; i++) {
		let result = [];
		for (var j = 0; j <= i; j++) {
			result.push(arr[j]);
		}
		result = result.sort((a, b) => {
			return a - b;
		});
		r.push(result);
	}

	const medianArr = [];

	for (var i = 0; i < r.length; i++) {
		// get get length of array
		const rIlength = r[i].length;
		// Get the sum of array
		const rISum = r[i].reduce((a, b) => {
			return a + b;
		}, 0);
		const median = rISum / rIlength;
		medianArr.push(median);
	}

	return medianArr;
};

/*
	<FIND THE MISSING NUMBER FROM THE ARRAY >
*/
function bubbleSort(arr) {
	var done = false;

	while (!done) {
		done = true;
		for (var i = 1; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				done = false;
				var tmp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = tmp;
			}
		}
	}
	return arr;
}

function missingArry(arr) {
	const sortArr = bubbleSort(arr);
	const missing = [];
	for (var i = 0; i < sortArr.length - 1; i++) {
		if (arr[i] + 1 !== arr[i + 1]) {
			for (var j = arr[i] + 1; j < arr[i + 1]; j++) {
				missing.push(j);
			}
		}
	}
	return missing;
}

/*
	</If Word is chainable >
*/
function chainedWords(arr) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			let lWordFIndex = arr[i][arr[i].length - 1];
			let fWordSIndex = arr[j][0];
			if (lWordFIndex.toLowerCase() === fWordSIndex.toLowerCase()) {
				result.push(arr[j]);
			}
		}
	}
	return result.length === arr.length;
}

module.exports = {
	addOneToNumber: addOneToNumber,
	compareVesrion: compareVesrion,
	findMedian: findMedian,
	missingArry:missingArry,
	chainedWords:chainedWords
};
