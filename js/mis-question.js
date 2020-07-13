/*
 * 1
 * 
 * */
// What will oupt this code
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}



// To bring expected ouput following need to be used

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  var g = arr[i];
  
  setTimeout(function(i, g) {
    return function() {
      console.log('The index '+ i +'of this number is: ' + g);
    }
  }(i, arr[i]), 3000);
}


/*
 * 2 Understand bind 
 * 
 * */

var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42


// Apply

function personContainer() {
  var person = {  
     name: "James Smith",
     hello: function() {
       console.log(this.name + " says hello " + arguments[1]);
     }
  }
  person.hello.apply(person, arguments);
}


personContainer("world", "mars"); // output: "James Smith says hello mars", note: arguments[0] = "world" , arguments[1] = "mars"         


// Calling function 

var person = {  
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

person.hello("world");  // output: "James Smith says hello world"
person.hello.call({ name: "Jim Smith" }, "world"); // output: "Jim Smith says hello world"

         
/*
 * Scope s
 * */                   

var a = 10;

function Foo() {

  if (true) {
      let a = 4;
  }

  alert(a); // alerts '10' because the 'let' keyword
}
Foo();


function Foo(){
  console.log(this.a);
}
var food = {a: "Magical this"};

Foo.call(food); // food is this




/*
 *  Instance of 
 * */
 
 function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var newCar = new Car('Honda', 'City', 2007);
console.log(newCar instanceof Car); // returns true




var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var howmany = 3;

var elements = array.length / 3;

// var item = items[Math.floor(Math.random()*items.length)];

// Broked 
var borked = [];


for( var i = 0; i < howmany; i++) {

  borked.push(array.splice(0, elements));
}

console.log(borked);


var array3 = array1.filter(function(obj) { return array2.indexOf(obj) == -1; });


