const USER = {'age': 30};
USER.age = 25;
//console.log(USER.age); 25

//What is the output of below code
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} vehicle started`);
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);
    super.start();
  }
}

const car = new Car('BMW');
console.log(car.start());

// What is the output of below code
function Person() { }

Person.prototype.walk = function() {
  return this;
}

Person.run = function() {
  return this;
}

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());



// What is the output of below code
try {
	const squareObj = new Square(10);
console.log(squareObj.area);
} catch (error) {
	console.log(error)
}


class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}

// Ans ReferenceError: Cannot access 'Square' before initialization
// Unlike function declarations, class declarations are not hoisted


//  What is the output of below code
//const num = 0o38;
//console.log(num);
// Ans SyntaxError: Invalid or unexpected token
// If you use an invalid number(outside of 0-7 range) in the octal literal, JavaScript will throw a SyntaxError. In ES5, it treats the octal literal as a decimal number.


// What is the output of below code
const myGenerator = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}

// ANS 4: 1
/*
The generator should not be re-used once the iterator is closed. 
i.e, Upon exiting a loop(on completion or using break & return), 
the generator is closed and trying to iterate over it again does 
not yield any more 
results. Hence, the second loop doesn't print any value.
*/

// 46. What is the output of below code

function* yieldAndReturn() {
  yield 1;
  return 2;
  yield 3;
}
var myGenObj = yieldAndReturn()
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());

// ans 
/*
A return statement in a generator function will make the generator finish. If a value is returned, it will be set as the value property of the object and done property to true. When a generator is finished, subsequent next() calls return an object of this 
form: {value: undefined, done: true}.
*/