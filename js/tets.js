const array4 = [[1,2,3,4],
 [5,6,7,8],
 [9,10,11,12],
 [13,14,15,16]];

function run(input, result) { 
	// Check the length of input 
	if(input.length === 0) return result;

	// Add the first two rows to the result 
	result = result.concat(input.shift()); // [first index]

	// Add the last element for each remaining rows 
	input.forEach(function(rightEnd) {
		result.push(rightEnd.pop());
	});

	// add the last two rows in reverse order 
	result = result.concat(input.pop().reverse());

	// Add the first element in each remaining rows 
	

	var tmp = [];
	input.forEach(function(leftEnd) {
		tmp.push(leftEnd.shift());
	})

	result = result.concat(tmp.reverse());

	return run(input, result);
	
}

 var result = run(array4, []);

console.log('result', result);