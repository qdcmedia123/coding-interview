'use strict';
const dataStructure = {
  low: ['low', 'low'],
  high: ['low', 'high'],
  low1: ['medium', 'low'],
  medium: ['medium', 'medium'],
  high: ['medium', 'high'],
  medium1:['high', 'low'],
  high1:['high', 'medium'],
  high2: ['high', 'high']
};

// Check probability 
function checkProb(s1, s2, datastructure) {
  // Set them in array 
  if(typeof s1 !== 'string' || typeof s2 !== 'string') return false;

   // Third argument must be datastructure 
   if(typeof arguments[2] !== 'object') return false;

   // Check the object
   if(Object.keys(dataStructure).length < 0) {
    return false;
   }

   // Input data compose to array 
   const input = JSON.stringify([s1, s2]);

   // Loop each object 
   for(var key in dataStructure) {
      // Lets forgate key but 
      if(input === JSON.stringify(dataStructure[key])) break;
   }

   return key;
   
}

function threeStepsCalculation(datastructure) {
  // Finding a+b+c
  const aResult = checkProb('low', 'medium', dataStructure);

  // B result 
  const bResult = checkProb('medium', 'medium' , datastructure);

  // A pluse b
  const aPlusB = checkProb(aResult, bResult, datastructure);

  // Check 
  const aPlusbPlusC = checkProb(aPlusB, 'high', datastructure);

  // a+b+c
  //const aPlusbPlusC = checkProb(aPlusb, c, datastructure);

  //return aPlusbPlusC;
  return aPlusbPlusC !== false ? aPlusbPlusC.replace(/[^A-Za-z]$/, '') : false;
}
// Again you we need different three steops 
// In this three st
//console.log(threeStepsCalculation(dataStructure));

function totalRisk(r1, r2) {
  // Validae risk factor 
  const validateRiskFactors = ['low', 'medium', 'high'];

  // Check both risk factor 
  if(validateRiskFactors.indexOf(r1) === -1 || validateRiskFactors.indexOf(r2) === -1) return false;

  var ret = null;

  switch(r1) {
    case 'low':
      ret = (r2 === 'high') ? 'medium' : 'low';
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

// Five risk factor calculation 
function calculateManyRiskFactor(...arg) {
  
  var risk_factor;
  // Let check first risk factor 
  if(Object.values(arg).length < 1) return false;

  // Get the arg values 
  const argValues = Object.values(arg);
  
  // Last one 
  let lastone = argValues;

  // First compute 
  let firstCompute = totalRisk(...argValues.splice(0,2));

  // Secound compute 
  let secoundCompute = totalRisk(...argValues.splice(0,2));

  // Secound compution 
  let thirdCompute = totalRisk(firstCompute, secoundCompute);

  // Final computation 
  return totalRisk(thirdCompute, ...lastone);
  
}


console.log(calculateManyRiskFactor('medium', 'low', 'medium', 'medium', 'medium'))