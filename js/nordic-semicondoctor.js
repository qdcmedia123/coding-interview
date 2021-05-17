var arrayMaxIndex = (array) => {
	return array.indexOf(Math.max.apply(null, array));
};

const solution = (T) => {
	const E = T.length / 4;
	const N = [];
	const S = ["WINTER", "SPRING", "SUMMER", "AUTUMN"];
	while (T.length) N.push(T.splice(0, E));
	console.log(N);
	const m = [];
	for (var i = 0; i < N.length; i++) {
		m.push(findAmplitude(N[i]));
	}
	console.log(`amplitude is` + m);
	const getMaxIndex = arrayMaxIndex(m);
	return S[getMaxIndex];
};

function check(a, n) {
	let ma = a[1] - a[0];

	// Check for both sides adjacent
	// elements that both must be less
	// or both must be greater
	// than current element
	for (let i = 1; i < n - 1; i++) {
		if (
			(a[i] > a[i - 1] && a[i + 1] < a[i]) ||
			(a[i] < a[i - 1] && a[i + 1] > a[i])
		)
			// Update amplitude with max value
			ma = Math.max(ma, Math.abs(a[i] - a[i + 1]));
		else return false;
	}

	return ma;
}

const T1 = [-3, -14, -5, 7, 8, 42, 8, 3];
const T = [2, -3, 3, 1, 10, 8, 2, 5, 13, -5, 3, -18];
//const B = [2, -3, 3, 1, 1, 10, 8, 2, 2, 5, 13, 5, -5, 3, -18, -20];
const getWeather = solution(T1);
console.log(getWeather);

function findAmplitude(arr) {
	// lets sort
	arr = arr.sort(function (a, b) {
		return a - b;
	});
	// Get the first and last element
	const lastEl = arr[arr.length - 1];
	const firstEl = arr[0];

	// Check both combination
	if ((lastEl < 0 && firstEl > 0) || (lastEl > 0 && firstEl < 0)) {
		return Math.abs(lastEl) + Math.abs(firstEl);
	} else if ((lastEl > 0 && firstEl > 0) || (lastEl < 0 && lastEl < 0)) {
		return lastEl - firstEl;
	} else {
		return "null";
	}
}

// //console.log(check(sample[3]));
// console.log(findAmplitude(sample[3]));

// console.log(Math.abs(+3));
