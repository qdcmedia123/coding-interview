function smallestDifference(arr1, arr2){
  if(arr1.length === 0 || arr2.length === 0){ return -1; }
  let result = Number.MAX_SAFE_INTEGER; // (2^53) - 1
  
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(Math.abs(arr1[i] - arr2[j]) < result){
        result = Math.abs(arr1[i] - arr2[j]);
      }
    }    
  }
  return result;
}

const array2 = [1, 3, 15, 65];
const array1 = [40, 25, 5];

console.log(smallestDifference(array1, array2))