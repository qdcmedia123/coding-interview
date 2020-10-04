function computeJoinPoint(x, y) {
	const s1Array = x.toString().split("").map(function(t) {
		return parseInt(t);
	})

	const s2Array = y.toString().split("").map(function(t) {
		return parseInt(t);
	})

	// Reduce and add each of the 
	const s1sum = s1Array.reduce((a,b) => {
		return a + b
	}) + x;

	const s2Sum = s2Array.reduce((a,b) => {
		return a + b;
	}) + y;

	if(s1sum !== s2Sum) {
		return computeJoinPoint(s1sum, s2Sum);
	}

	return s1sum;
}

console.log(computeJoinPoint(471, 480));