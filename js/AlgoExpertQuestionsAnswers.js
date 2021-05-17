const twoSum = (arr, target) => {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};
//console.log(twoSum([2, 7, 11, 15], 9));
// => Output [ 0, 1 ]

// Much imporved
const twoSum_On_Better = (arr, target) => {
  let numObject = {};
  for (let i = 0; i < arr.length; i++) {
    let thisNum = arr[i];
    numObject[thisNum] = i;
  }
  for (var i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
      return [i, numObject[diff]];
      // If you need sum add the following things
      //return [arr[i], arr[numObject[diff]]];
    }
  }
};
//console.log(twoSum_On_Better([2, 7, 11, 15], 9));
// Output [ 0, 1 ]

// Move element at the end
var array = [
  { id: "4", name: "Boaz" },
  { id: "2", name: "Shareen" },
  { id: "3", name: "Simon" },
  { id: "1", name: "Miriam" },
];

var itemToReplace = array.splice(0, 1); // 0 is the item index, 1 is the count of items you want to remove.
// => [{"id":"4","name":"Boaz"}]

array = array.concat(itemToReplace);

//console.log(array);

// Monotonice array
const isMono = [1, 2, 3, 4].every(function (e, i, a) {
  if (i) return e > a[i - 1];
  else return true;
});
//console.log(isMono)

// SMALLEST DIFFERENT IN SINGLE ARRAY
function getMin(data) {
  return data.reduce(function (r, e, i) {
    let absR = Math.abs(r),
      absE = Math.abs(e);
    if (absR > absE || i == 0 || (absR == absE && e > r)) r = e;
    return r;
  });
}

/*console.log(getMin([1.5, -1, 0, 5, 5.5, -4]))
console.log(getMin([1.5, -1, 5, 5.5, -4]))
console.log(getMin([1, -1, 5, 5.5, -4]))
console.log(getMin([-1, 1, 5, 5.5, -4]))*/

// SMALLEST DIFFERENT BETWEEN TWO ARRAY INTEGER
function smallestDifference(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return -1;
  }
  let result = Number.MAX_SAFE_INTEGER; // (2^53) - 1

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) < result) {
        result = Math.abs(arr1[i] - arr2[j]);
      }
    }
  }
  return result;
}

const array2 = [1, 3, 15, 65];
const array1 = [40, 25, 5];

console.log(smallestDifference(array1, array2));

// Sub Array Sort

const array4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Should print something like this

[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

function run(input, result) {
  if (input.length == 0) {
    return result;
  }

  // add the first row to result
  result = result.concat(input.shift()); // [ 1, 2, 3, 4 ]

  // add the last element of each remaining row
  /*
      result [
        1,  2,  3, 4,
        8, 12, 16
      ]
    */
  input.forEach(function (rightEnd) {
    result.push(rightEnd.pop()); // get the last element from each array
  });

  // add the last row in reverse order
  result = result.concat(input.pop().reverse());

  // add the first element in each remaining row (going upwards)
  var tmp = [];
  input.forEach(function (leftEnd) {
    tmp.push(leftEnd.shift());
  });
  result = result.concat(tmp.reverse());

  return run(input, result);
}

var result = run(array4, []);

console.log("result", result);

/////////////////////////////////////////////////////
// JAVASCRIPT SUB ARRAY SORT
/////////////////////////////////////////////////////
let array = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
for (let sub of array) {
  sub.sort((a, b) => a - b);
}

console.log(array);

// Object entries
const obj = {};

// Key and value iteration
for (const [key, value] of Object.entries(obj)) {
}

// Entries
Object.entries(obj).forEach((entry) => {
  // entrie[0] is key
  // entries[1] is value
});
