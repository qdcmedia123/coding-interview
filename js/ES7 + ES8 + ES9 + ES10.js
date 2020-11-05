string.padEnd():
//Exponential Operator:
a ** b ** c //is equal to 
a ** (b ** c)

//Trailing comma:
function add(

    one,

    two,

    three, // It is valid

) {

}

Object.values() and Object.entries():
array.prototype.includes() 

//Async Functions

//ES9 Features:
//RegEx changes 
// Rest/Spread properties
// Asynchronous iteration


//ES10 Features:
Array.flat()
Array.flatmap()
object.fromentries()
String.trimstart() and String.trimend()

// https://medium.com/@amandeepkochhar/javascript-es10-new-features-in-ecmascript-10-es2019-version-2e5ac8c46493

//Optional catch binding
function.toString()
sym.description

//7. Optional Catch Binding

try {
	throw 'myException'; // Generates an exception
} catch {
	// No param is catch 
	console.log("No Params ")
}

// 8. Well Formed JSON.stringify()

// 9. Array Sort Stability
/*
The previous implementation of V8 used an unstable
 QuickSort algorithm for arrays
 containing more than 10 elements.
*/

var items = [
{name: 'Edward', value: 21},
{name: 'Sharpe', value: 37}];

// Sort by value 
items.sort(function(a,b) => {
	return a.value = b.value;
})

// 10. Enhanced toString()
function sum(a, b) {
	return a + b;
}

console.log(sum.toString());