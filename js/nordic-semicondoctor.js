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

function findAmplitude(arr) {
	arr = arr.sort(function (a, b) {
		return a - b;
	});

	const lastEl = arr[arr.length - 1];
	const firstEl = arr[0];

	if ((lastEl < 0 && firstEl > 0) || (lastEl > 0 && firstEl < 0)) {
		return Math.abs(lastEl) + Math.abs(firstEl);
	} else if ((lastEl > 0 && firstEl > 0) || (lastEl < 0 && lastEl < 0)) {
		return lastEl - firstEl;
	} else {
		return null;
	}
}

const T1 = [-3, -14, -5, 7, 8, 42, 8, 3];
//const T = [2, -3, 3, 1, 10, 8, 2, 5, 13, -5, 3, -18];
//const B = [2, -3, 3, 1, 1, 10, 8, 2, 2, 5, 13, 5, -5, 3, -18, -20];
const getWeather = solution(T1);
console.log(getWeather);
