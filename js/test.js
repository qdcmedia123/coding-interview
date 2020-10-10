let nums = [2, 7, 10, 1, 11, 15, 9]
let target = 12
let numMaps = new Map();

let paris = nums.reduce((acc, num) => {
	let numToFind = target - num;
	if(numMaps.get(numToFind)) {
		return [...acc, [num, numToFind]]
	} else {
		numMaps.set(num, true);
		return [...acc]
	}
}, [])

// Another way but only 

function totalRisk(r1, r2) {
	const validateRiskFactor = ['low', 'medium', 'high'];

	// Check both risk factor 
	if(validateRiskFactor.indexOf(r1) === -1 || validateRiskFactor.indexOf(r2) === -1) {
		return false;
	}

	var ret = null;

 	switch(r1) {
 		case 'low':
 			ret = (r2 ==='high') ? 'medium' : 'low';
 			break;
 		case 'medium':
 			ret = r2;
 			break;
 		case 'high':
 			ret = (r2 === 'low') ? 'medium' : 'high';
 			break;
 	}

 	return ret;

}

// Let recursively calculate the value 
function calculateRiskFactor (...args) {
	var risk_factor;
	if(Object.values(args).length < 1) return false;

	const argsValues = Object.values(args);
	if(args.length === 2) {
		return totalRisk(...argsValues.slice());
	} else {
		return calculateRiskFactor(totalRisk(...argsValues.splice(0,2)), ...argsValues)
	}
}

console.log(calculateRiskFactor('medium', 'low', 'medium', 'low', 'high'))