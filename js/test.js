// How can i remove specific items form the array 
const arra = [1,2];

const index = arra.indexOf(1);
if(index > -1) {
	arra.splice(index, 1);
}


let nums = [2, 7, 10, 1, 11, 15, 9]
let target = 11
let numsMap = new Map();
let pairs = nums.reduce((acc, num)=> {
	let numberToFind = target - num;
	if(numsMap.get(numberToFind)) {
		return [...acc, [numberToFind, num]]
	} else {
		numsMap.set(num, true);
		return [...acc]
	}
}, [])

console.log(pairs)

// Breaking the array 
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,34,435];

var howmany = 3;

var elements = Math.ceil(array.length / howmany);
var broked = [];

for(var i = 0; i < howmany; i ++) {
	broked.push(array.splice(0, elements))
}

console.log(broked)

// How call, apply and bind works 

var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function welcome(msg1, msg2) {
	console.log(`${this.firstName}` + `${msg1 + msg2}`);
}

// Call use the paramater with one by one 
let sayHello = welcome.call(employee1,'How', 'are you')

// Bind with the array 
let sayHelloApply = welcome.apply(employee2, ['how', 'are you']);

// bind 
let sayHelloBind = welcome.bind(employee2);
let sayHelloNow = sayHelloBind('How', 'are you')



// Apply max value 
var num = [1,2];
var mx = Math.max.apply(null, num);
var min = Math.min.apply(null, num)
console.log(mx)