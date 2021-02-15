
// given the array find their pari of sum 
let nums = [2, 7, 10, 1, 11, 15, 9]
let target = 11
let numsMap = new Map()

let paris = nums.reduce((acc, num) => {
	let numToFind = target - num;
	if(numsMap.get(numToFind)) {
		return [...acc, [num, numToFind]]
	} else {
		numsMap.set(num, true);
		return [...acc]
	}
}, []);

console.log(paris)