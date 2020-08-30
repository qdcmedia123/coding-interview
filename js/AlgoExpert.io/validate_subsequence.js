// https://medium.com/@depakborhara/algo-corner-validate-subsequence-21f8fdda9a91
function isValidSubsequence(array, sequence) {
  let counter = 0

 for(let i = 0; i < array.length; i++){
  let curNum = array[i]
  if(sequence[counter] === curNum){
   counter++
  }
  if(counter === sequence.length){
   return true;
  }
  
 }
 return false}


 /*

 array = [5,1,22,25,6,-1,8,10]
subsequence = [1,6,-1,10]

Answer: true*/