// Finally, moving on to ES10 (Or ES2019)!
// Array.flat: [[1,2],3]).flat() // [1,2,3]
// Array.flatMap: equivalent of map().flat()
// Object.fromEntries: reverse operation from Object.entries (see here)
// String.trimStart() & String.trimEnd(): Remove extra spaces in a string
// Optional Catch binding: remove the need to add a param to the catch (Now you can do } catch {instead of } catch(e) {
// Function.toString has been revisited to have a consistent behaviour 🥳🥳🥳
// Symbol Description
// BigInt — arbitrary large numbers (Thanks @redeyes2015 for correction)
// Improvement on Unicode support for JSON.stringify()
// Array.sort now retains order if keys are equal

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

//Optional Chaining
const test = myObject && myObject.a;
// equivalent to
const test = myObject?.a;

//
let x = 0 || 1; // x is 1 because 0 is falsy
let x = 0 ?? 1; // Since 0 is defined, x is 0

const res = await fetch(...);

// String.prototype.replaceAll()

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const regex = /dog/gi;

console.log(p.replaceAll(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"
