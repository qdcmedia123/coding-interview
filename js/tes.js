function findLongestIncreasingSequence(array) {
	var sequence = [], fork = null;

	// Slice the firt array value to the 
	sequence.push(array[0]);

	// Reduce the array with privious, current, index 
	array.reduce(function(previous, current, index) {
		if(current > previous) {
			sequence.push(current);
			return current;
		}

		if(previous > current) {
			fork = findLongestIncreasingSequence(array.slice(index));
		}

		return previous;
	});

	return fork && fork.length > sequence.length ? fork : sequence;
}

var sample = [87,88,91, 10, 22, 9,92, 94, 33, 21, 50, 41, 60, 80];

console.log(findLongestIncreasingSequence(sample)); // => [ 87, 88, 91, 92, 94 ])
