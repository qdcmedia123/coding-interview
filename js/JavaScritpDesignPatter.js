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



//////////////////////////////////////
// Router design pattern
//////////////////////////////////////


//////////////////////////////////////
// Middleware
//////////////////////////////////////
