//What does an IIFE look like?
(function() {
   var x = 20;
   var y = 20;
   var answer = x + y;
   console.log(answer);
})();


//Factory method pattern
( _ => {

    let factory = new MyEmployeeFactory()

    let types = ["fulltime", "parttime", "contractor"]
    let employees = [];
    for(let i = 0; i < 100; i++) {
     employees.push(factory.createEmployee({type: types[Math.floor( (Math.random(2) * 2) )]})    )}
    
    //....
    employees.forEach( e => {
     console.log(e.speak())
    })

})()

if(err) {
  res.json(ErrorFactory.getError(err))
}

//Singleton pattern
let instance = null

class SingletonClass {

    constructor() {
     this.value = Math.random(100)
    }

    printValue() {
     console.log(this.value)
    }

    static getInstance() {
     if(!instance) {
         instance = new SingletonClass()
     }

     return instance
    }
}

module.exports = SingletonClass

// Inde.xjs
const obj = Singleton.getInstance()
const obj2 = Singleton.getInstance()

obj.printValue()
obj2.printValue()

console.log("Equals:: ", obj === obj2)


//Observer pattern
const http = require('http');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Your own server here');
});

server.on('error', err => {
    console.log(“Error:: “, err)
})

server.listen(3000, '127.0.0.1', () => {
  console.log('Server up and running');
});

//Chain of responsibility
function processRequest(r, chain) {

    let lastResult = null
    let i = 0
    do {
     lastResult = chain[i](r)
     i++
    } while(lastResult != null && i < chain.length)
    if(lastResult != null) {
     console.log("Error: request could not be fulfilled")
    }
}

let chain = [
    function (r) {
     if(typeof r == 'number') {
         console.log("It's a number: ", r)
         return null
     }
     return r
    },
    function (r) {
     if(typeof r == 'string') {
         console.log("It's a string: ", r)
         return null
     }
     return r
    },
    function (r) {
     if(Array.isArray(r)) {
         console.log("It's an array of length: ", r.length)
         return null
     }
     return r
    }
]

processRequest(1, chain)
processRequest([1,2,3], chain)
processRequest('[1,2,3]', chain)
processRequest({}, chain)


// Proxy pattern
/*
A proxy is an object that controls access to another object, called subject. 
Both have identical interface and this allows us to transparently 
swap one for the other. A proxy intercepts all or some of the 
operations that are meant to be executed on the subject, modifying their behavior.
*/
// https://itnext.io/design-patterns-in-nodejs-990fed17c49c


// Adaptar 
//https://blog.logrocket.com/design-patterns-in-node-js-2/
/*
It is used to turn a foreign interface into a common interface. 
Let’s assume that in the project you get the data from some storage using
 the following class.
*/
// Example the serivce that you have created for admin panel is adaptor 
// Another example 
// async.js
var FB = require('fb');
var config = require('config/config');

module.exports = function FacebookAdapter() {
  FB.options({ version: 'v2.8' });
  FB.setAccessToken(config.FB_TOKEN);

  this.fetch = function (pathname, options) {
    return new Promise(
      function (resolve, reject) {
        FB.api(
          pathname,
          'get',
          options,
          function (response) {
            if (!response) {
              reject('Error occurred');
            }

            if (response.error) {
              reject(response.error.message);
            }

            resolve(response);
          }
        );
      }
    );
  };
};


// Decorator pattern
/*
The decorator pattern is definitely one of my top five favorite design patterns because it helps extend 
the functionality of an object in a very elegant way. This pattern is used to 
dynamically extend or even change the behavior of an object during run-time. 
The effect might seem a lot like class inheritance, but this pattern allows you 
to switch between behaviors during the same execution, which is something 
inheritance does not.
*/

class Pizza {
    constructor() {
        this.base_price = 10
    }
    calculatePrice() {
        return this.base_price
    }
}

function addTopping(pizza, topping, price) {

    let prevMethod = pizza.calculatePrice
    pizza.toppings = [...(pizza.toppings || []), topping]
    pizza.calculatePrice = function() {
        return price + prevMethod.apply(pizza)
    }
    return pizza
}

let oPizza = new Pizza()

oPizza = addTopping(
            addTopping(
                oPizza, "muzzarella", 10
            ), "anana", 100
        )

console.log("Toppings: ", oPizza.toppings.join(", "))
console.log("Total price: ", oPizza.calculatePrice())



//////////////////////////////////////
// Router design pattern
//////////////////////////////////////


//////////////////////////////////////
// Middleware
//////////////////////////////////////


//////////////////////////////////////
// Authentical & Authorization
/// Authentication with Json Web Tokens 
/// List you use passportjs etc to auth
/// Authorization means after auth what user is authorized to see because resource to to any operation for certain resource for example CRUD user might need certain permission etc
//////////////////////////////////////
 