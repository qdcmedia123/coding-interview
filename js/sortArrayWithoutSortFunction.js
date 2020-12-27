// const data = [
//   { description: "Senior", Amount: 50, Sum: 50 },
//   { description: "Senior", Amount: 50, Sum: 50 },
//   { description: "Adult", Amount: 75, Sum: 50 },
//   { description: "Child", Amount: 35, Sum: 50 },
//   { description: "Infant", Amount: 25, Sum: 50 },
// ];

// const keys = Object.keys(data[0]).slice(1);
// const modify = data.map(function(content, index, array) {
// 	if(typeof array[index-1] !== 'undefined') {
// 		keys.forEach(function(item) {
// 			content[item] = array[index][item] + array[index -1][item];
// 		})
// 	}
// 	return content;
// })

// console.log(modify)

function bubbleSort(array) {
	var done = false;
	while(!done) {
		done = true;
		for (var i = 1; i < array.length; i++) {
			if(array[i-1] > array[i]) {
				done = false;
				var tmp = array[i-1];
				array[i-1] = array[i];
				array[i] = tmp;
			}
		}
	}

	return array;
}


var numbers = [12, 10, 15, 11, 14, 13, 16];
bubbleSort(numbers);
console.log(numbers);