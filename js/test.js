// How the clouser work
function foo() {
	const secrate = Math.trunc(Math.random() * 100);

	return function inner() {
		console.log(`This is outer function variable ${secrate}`);
	}
}

const f = foo();
f();

// Speradeseet operator 
let x = {a: 1, b: 2, c: 3, z:26};

// Remove z and tabke ab to another variable 
let {z, ...abc} = x;

console.log(abc)
console.log(z)

// Filter the below object with key 

const obj = {1: {age: 10}, 2: {age: 20}};
let key = 1;
var filtered = Object.fromEntries(Object.entries(obj).filter(x => x[0] === key));
console.log(filtered)

const raw = {
  item1: { key: 'sdfd', value:'sdfd' },
  item2: { key: 'sdfd', value:'sdfd' },
  item3: { key: 'sdfd', value:'sdfd' }
};

const allowed = ['item1', 'item3'];

// Get the allowed keys in the object 
 filtered = Object.keys(raw).filter(key => allowed.includes(key)).reduce((obj,key) => {
	obj[key] = raw[key];;
	return obj;
}, {})

// console.log(filtered)
const array = [1,2,3];
array.indexOf(2);