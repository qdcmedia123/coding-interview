const object1 = { a: 1, b: 2, c: 3 };
// Multiply object value wth 2 each of them 
const mulitply = Object.fromEntries(
	             Object.entries(object1)
	              .map(([key, value]) => [key, value === 1 ? value.toString() : value])
	             );
console.log(mulitply)