const T1 = [-3, -14, -5, 7, 8, 42, 8, 3];
const T = [2, -3, 3, 1, 10, 8, 2, 5, 13, -5, 3, -18];

const findMaxValue = (arr) => {
	return arr.indexOf(Math.max.apply(null, arr));
};
function solution(T) {
	// Get the length of the array and pagination
	const tLength = Math.ceil(T.length / 4);
	const nResult = [];
	const nSeason = ["WINTER", "SPRING", "SUMMER", "AUTUMN"];

	// Break the array in four part
	const setResult = [];
	while (T.length) nResult.push(T.splice(0, tLength));
	// Now find the amplitude of each array
	for (let i = 0; i < nResult.length; i++) {
		setResult.push(findAmplititude(nResult[i]));
	}
	// Now find out max value in the array
	const getMaxValue = findMaxValue(setResult);

	// Return the index containing season

	return nSeason[getMaxValue];
}

const findAmplititude = (arr) => {
	// First sort the array
	arr = arr.sort((a, b) => {
		return a - b;
	});

	// Get the min and max value of the array
	let minValue = arr[0];
	let maxValue = arr[arr.length - 1];

	// Check If min value is less then 0 and max value is greater then 0
	if ((minValue < 0 && maxValue > 0) || (minValue > 0 && maxValue < 0)) {
		return Math.abs(minValue) + Math.abs(maxValue);
	} else if (
		(minValue > 0 && maxValue > 0) ||
		(minValue < 0 && maxValue < 0)
	) {
		return Math.abs(maxValue) - Math.abs(minValue);
	} else {
		return null;
	}
};

const sol = solution(T);
console.log(sol);
