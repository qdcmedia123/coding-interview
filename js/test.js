// Creating unique array number 

function uniqueArray(array, size) {
	var result = [];

	// First array and size must be equal 
	if(array.length !== size) {
		return;
	}
	array.forEach(function iter(parts) {
		return function (v) {
			var temp = parts.concat(v);
			if(parts.includes(v)) {
				return;
			}
			if(temp.length === size) {
				result.push(temp);
				return;
			}

			array.forEach(iter(temp));
		}
	}([]))
	return result;
}
console.log(uniqueArray([1,2,3], 3));