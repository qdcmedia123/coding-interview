// How you use from entries 
const object1 = { a: 1, b: 2, c: 3 };
// multiply each object key value with tow 
const object2 = Object.fromEntries(Object.entries(object1).map(([key, val]) => [key, val*2]));
console.log(object2)