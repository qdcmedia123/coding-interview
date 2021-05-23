// https://www.geeksforgeeks.org/compare-two-version-numbers/

function compareVesrion(v1, v2) {
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
}

const ans = compareVesrion("1.0.1.1", "1.0.7");
console.log(ans);
