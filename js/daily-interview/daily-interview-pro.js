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

module.exports = {
	addOneToNumber: addOneToNumber,
	compareVesrion: compareVesrion,
};
