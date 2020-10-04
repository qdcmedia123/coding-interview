const data = [
  { description: "Senior", Amount: 50, Sum: 50 },
  { description: "Senior", Amount: 50, Sum: 50 },
  { description: "Adult", Amount: 75, Sum: 50 },
  { description: "Child", Amount: 35, Sum: 50 },
  { description: "Infant", Amount: 25, Sum: 50 },
];

// let get object keys

// Get the keys
const keys = Object.keys(data[0]).slice(1);
console.log(keys)

const mappedData = data.map(function(content, index, array) {
	// Check index -1 in array is defined 
	if(typeof array[index -1] !== 'undefined') {
		keys.forEach(function(item) {
			content[item] = array[index -1][item] + array[index][item];
		})
		
	} 
	return content;
})

console.log(mappedData)