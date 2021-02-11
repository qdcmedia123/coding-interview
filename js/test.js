function findMissingElements(arr) {
  arr = arr.slice(0).sort(function(a,b) {
    return a-b
  });
  let next = 1;
  let missing = [];
  for(let i = 0; i < arr.length; i++) {
    while(next < arr[i]) {
      missing.push(next);
      next++;
    }
    next++;
  }

  return missing;

}

console.log(findMissingElements([1,5,2,7], 1, 10));