var a = [23, 45, 12, 67];
a.unshift(34);
console.log(a); // [34, 23, 45, 12, 67]


// Creating array with the range 
let arryRange = [...Array(10).keys()];

// Creating array with the range 
Array.from({length: 10}, (_, i) => i + 1)


//finding all missing elements in an array/range javascript
function findMissingElements(arr) {
  arr = arr.slice(0).sort(function(a,b) {
    return a-b;
  })
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

console.log(findMissingElements([1,5,2,7]));

// Updated: finding all missing elements in an array/range javascript

function findMissingElements(arr, min, max) {
  // Copy the array and sort the array 
  arr = arr.slice(0).sort(function(a,b) {
    return a-b;
  });
  let missing  = [];
  let next = min;
  for(let i = 0; i <= max; i++) {
    if(max > next) {
      missing.push(next);
      next++
    }
    next++;
  }

  return missing;
}
// Find the missing element from the array 
console.log(findMissingElements([1,5,2,7], 1, 10));



var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

console.log(items)


const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }

// Start from next  time 471
const data = [{name: 'hello', id: 34} ,{name: 'hello', id: 34}, {name: 'hello', id: 34}];
const allowed = ['name'];
const map = data.map(function(item) {
  const filtered = Object.keys(item)
  .filter(key => allowed.includes(key))
  .reduce((obj, key) => {
    obj[key] = item[key];
    return obj;
  }, {});

  return filtered;
})

console.log(map);


Math.round(101600 / 10000) * 10000 // --> 100000
Math.floor(101600 / 10000) * 10000 // --> 100000
Math.ceil (101600 / 10000) * 10000 // --> 110000

//How to round up number to nearest 100/1000 depending on number, in JavaScript?

function roundup(v) {
    return Math.pow(10, Math.ceil(Math.log10(v)));
}

console.log(roundup(87));   //   100
console.log(roundup(776));  //  1000
console.log(roundup(2333)); // 10000

//
// 
function bubbleSort(array) {
  var done = false;
  while(!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if(array[i-1] > array[i]) {
        done = false;
        var tmp = array[i-1];
        array[i-1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};



var numbers = [12, 10, 15, 11, 14, 13, 16];
bubbleSort(numbers);
console.log(numbers);

const obj = [
  { id: 10, color: "red" },
  { id: 20, color: "blue" },
  { id: 30, color: "green" }
].reduce((acc, cur) => ({ ...acc, [cur.color]: cur.id }), {})



let properties = {
  folder_name: "test",
  user_email: "test@example.com",
  user_agreed: 1,
  site: "example.com"
};

let mapping = {
  folder_name: "Folder name",
  user_email: "User email",
  user_agreed: "User agreed",
  site: "Site"
};

let mapped = Object.keys(properties).reduce((acc, key) => {
  acc[mapping[key]] = properties[key];
  return acc;
}, {});

console.log(mapped);


const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );


keysMap = {
  name: 'firstName',
  job: 'passion'
};

obj = {
  name: 'Bobo',
  job: 'Front-End Master'
};


console.log(renameKeys(keysMap, obj));
// { firstName: 'Bobo', passion: 'Front-End Master' }

//How do JavaScript closures work?
function foo() {
  const secret = Math.trunc(Math.random()*100)
  return function inner() {
    console.log(`The secret number is ${secret}.`)
  }
}
const f = foo() // `secret` is not directly accessible from outside `foo`
f() // The only way to retrieve `secret`, is to invoke `f`


//How can I clone a JavaScript object except for one key?
let x = {a: 1, b: 2, c: 3, z:26};
let {b, ...y} = x;


//How to print objects except one, without deleting anything (JavaScript)
const obj = {1: {age: 10}, 2: {age: 20}};
let key = 1
console.log(Object.keys(obj).filter(x => x != key).reduce((ac,a) => ({...ac,[a]:obj[a]}),{}));

///Using the new feature Object.fromEntries
const obj = {1: {age: 10}, 2: {age: 20}};
let key = 1
let res = Object.fromEntries(Object.entries(obj).filter(x => x[0] != key));
console.log(res);

//Filter object properties by key in ES6
const raw = {
  item1: { key: 'sdfd', value:'sdfd' },
  item2: { key: 'sdfd', value:'sdfd' },
  item3: { key: 'sdfd', value:'sdfd' }
};

const allowed = ['item1', 'item3'];

const filtered = Object.keys(raw)
  .filter(key => allowed.includes(key))
  .reduce((obj, key) => {
    obj[key] = raw[key];
    return obj;
  }, {});

console.log(filtered);



//How can I remove a specific item from an array?

const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

// array = [2, 9]
console.log(array); 


// Given an array find a pair such that it sums to a given number
let nums = [2, 7, 10, 1, 11, 15, 9]
let target = 11
let numsMap = new Map()
let pairs = nums.reduce((acc, num) => {
  let numToFind = target - num
  if (numsMap.get(numToFind)) {
    return [...acc, [num, numToFind]]
  } else {
    numsMap.set(num, true)
    return [...acc]
  }
}, [])

console.log("Pairs ", pairs)


//JavaScript equivalent of Python's format() function?

String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

var bar1 = 'foobar',
    bar2 = 'jumped',
    bar3 = 'dog';

'The lazy {} {} over the {}'.format(bar3, bar2, bar1);


//The Intl.RelativeTimeFormat object enables language-sensitive relative time formatting.

const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' });

console.log(rtf1.format(3, 'quarter'));
//expected output: "in 3 qtrs."

console.log(rtf1.format(-1, 'day'));
//expected output: "1 day ago"

const rtf2 = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });

console.log(rtf2.format(2, 'day'));
//expected output: "pasado mañana"


////////////////////////////////////////////////


let sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(20)(3)(4)());

// Check nested object is set 

function checkNested(obj, level,  ...rest) {
  if (obj === undefined) return false
  if (rest.length == 0 && obj.hasOwnProperty(level)) return true
  return checkNested(obj[level], ...rest)
}

// Sunday 1 OCT
const test = { level1:{ level2:{ level3:'level3'} } };
checkNested(test, 'level1', 'level2', 'level3'); // true
checkNested(test, 'level1', 'level2', 'foo'); // fals



// Creating number of start that is selected
const starts = new Array(100).fill(false);
const point = 30;
let getPoints = [];

if (starts.length === 0) return starts;

for (var j = 1; j <= starts.length; j++) {
  if (point === j) {
    for (var i = 0; i < point; ++i) {
      starts[i] = true;
    }
    break;
  }
}

/*
//
const numbers = new Array(100).fill(false);
const points = 5;
const starts = numbers.fill(true, 0, points + 1);
console.log(starts)
*/

/*
// Another way 
const stars  = new Array(100).fill(false);
const points = 5;
let getPoints = [];

for(var i = 0; i < stars.length; i++) {
  if(points > i) {
    stars[i] = true;
  }
}
*/

console.log(starts);

//Replace multiple strings with multiple other strings
var str = "I have a cat, a dog, and a goat.";
var mapObj = {
  cat: "dog",
  dog: "goat",
  goat: "cat",
};
str = str.replace(/cat|dog|goat/gi, function (matched) {
  return mapObj[matched];
});

// Sort the number
const a = [10, -1, 2, 5, 0, 6, 4, -5];

const b = a.sort(function (a, b) {
  return a - b;
});

const str = {
  AUM: 3597,
  investment_amount: 143,
  symbols: {
    BIV: { allocation: 24, qty: 0, marketValue: 34 },
    BSV: { allocation: 26, qty: 0, marketValue: 37 },
    GLD: { allocation: 9, qty: 0, marketValue: 13 },
    VDE: { allocation: 2, qty: 0, marketValue: 2 },
    VOX: { allocation: 19, qty: 0, marketValue: 28 },
    VPL: { allocation: 6, qty: 0, marketValue: 9 },
    VWO: { allocation: 14, qty: 0, marketValue: 20 },
  },
};

const { symbols } = str;

/*const mp = symbols.map(function(item) {
 return item;
})*/

Object.entries(symbols).forEach((entry) => {
  let key = entry[0];
  let value = entry[1];
  //use key and value here
  console.log(key);
});

//Iterating over async iterables

const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      },
    };
  },
};

(async function () {
  for await (let num of asyncIterable) {
    console.log(num);
  }
})();

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// How do you make first letter of the string in an uppercase?
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//How do you test for an empty object?
Object.entries(obj).length === 0 && obj.constructor === Object;

//
function AUMGrqphData(data, userSelectedPastMonth = 12) {
  const end = Moment(new Date())
    .subtract(userSelectedPastMonth, "months")
    .format("YYYY-MM-DD");
  const start = new Date();
  const range = moment.range(moment(end), moment(start));
  const different = Array.from(range.by("months"));
  let dateRange = [];
  different.forEach(function (element) {
    dateRange.push(Moment(element).format("YYYY-MM-DD"));
  });

  let sumingOpp = [];

  for (let i = 0; i < dateRange.length - 1; i++) {
    let sumOpp = data.filter(function (item) {
      // Here you have date access
      if (
        Moment(item.created_at).format("YYYY-MM-DD") >=
          Moment(item.created_at).format(dateRange[i]) &&
        Moment(item.created_at).format("YYYY-MM-DD") <=
          Moment(item.created_at).format(dateRange[i + 1])
      ) {
        return item;
      } else {
        return null;
      }
    }, 0);

    sumingOpp[dateRange[i]] = sumOpp;
  }

  let getAllMonthsSummed = [];
  // Now lets sum op the values
  for (var i in sumingOpp) {
    let equitySum = 0;
    let cashValueSum = 0;
    let allObj = [];

    equitySum = sumingOpp[i].reduce(function (prev, cur) {
      return prev + +cur.equity.equityValue;
    }, 0);

    cashValueSum = sumingOpp[i].reduce(function (prev, cur) {
      return prev + +cur.cash.cashBalance;
    }, 0);

    allObj = {
      name: i,
      cash_balance: Math.round(cashValueSum * 1e2) / 1e2,
      equity_value: Math.round(equitySum * 1e2) / 1e2,
    };

    getAllMonthsSummed.push(allObj);
  }

  // Let calculate total
  let totalEquity = getAllMonthsSummed.reduce(function (a, b) {
    return a + +b.equity_value;
  }, 0);

  totalEquity = Math.round(totalEquity);

  let totalCashValue = getAllMonthsSummed.reduce(function (a, b) {
    return a + +b.cash_balance;
  }, 0);

  totalCashValue = Math.round(totalCashValue);

  let AUM = totalEquity + totalCashValue;
  AUM = Math.round(AUM);

  const result = {
    data: getAllMonthsSummed,
    AUM: AUM,
    totalEquity: totalEquity,
    totalCashValue: totalCashValue,
  };

  return result;
}

const data = [
  { description: "Senior", Amount: 50, Sum: 50 },
  { description: "Senior", Amount: 50, Sum: 50 },
  { description: "Adult", Amount: 75, Sum: 50 },
  { description: "Child", Amount: 35, Sum: 50 },
  { description: "Infant", Amount: 25, Sum: 50 },
];

// let get object keys

// Get the keys
const keys = Object.keys(data[0]).slice(1);

const modidy = data.map(function (content, index, array) {
  if (typeof array[index - 1] !== "undefined") {
    keys.forEach(function (item) {
      content[item] = array[index][item] + array[index - 1][item];
    });
    
  } 
  return content;
});
console.log(modidy);

// Moments
// Subtract date
const startPoint = moment()
  .subtract(filterMonths, "months")
  .format("YYYY-MM-DD");
const range = moment.range(moment(end), moment(start));
const different = Array.from(range.by("months"));

// Sum Opp each object properties
sumOpp = sumingOpp[i].reduce(function (prev, cur) {
  return prev + +cur.value.toFixed(2);
}, 0);

// to fiexd with integer
Math.round(sumOpp * 1e2) / 1e2;

const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
console.log(entries);

//How do JavaScript closures work?
function foo() {
  const secret = Math.trunc(Math.random() * 100);
  return function inner() {
    console.log(`The secret number is ${secret}.`);
  };
}
const f = foo(); // `secret` is not directly accessible from outside `foo`
f(); // The only way to retrieve `secret`, is to invoke `f`

// Mergin two array
const originArray = ["one", "two", "three"];
const newItem = 0;

const newArray = originArray.slice().reverse().concat(newItem).reverse(); // ES5
const newArray2 = [newItem, ...originArray]; // ES6+

////////////////////////////////
function conputeJoinPoint(s1, s2) {
  let s1Array = s1
    .toString(10)
    .split("")
    .map(function (t) {
      return parseInt(t);
    });
  let s2Array = s2
    .toString(10)
    .split("")
    .map(function (t) {
      return parseInt(t);
    });

  let s1Add =
    s1Array.reduce(function (a, b) {
      return a + b;
    }) + s1;

  let s2Add =
    s2Array.reduce(function (a, b) {
      return a + b;
    }) + s2;

  if (s1Add !== s2Add) {
    return conputeJoinPoint(s1Add, s2Add);
  }

  return s2Add;
}

console.log(conputeJoinPoint(471, 480));

function arr_diff(a1, a2) {
  var a = [],
    diff = [];

  for (var i = 0; i < a1.length; i++) {
    a[a1[i]] = true;
  }

  for (var i = 0; i < a2.length; i++) {
    if (a[a2[i]]) {
      delete a[a2[i]];
    } else {
      a[a2[i]] = true;
    }
  }

  for (var k in a) {
    diff.push(k);
  }

  return diff;
}


/*
 * Create ArrayList from array
 * */

var array = [];

array.push(value);

/*
 * Compare two objects in jQuery and get the difference [duplicate]
 * */

var origArray = [
  {
    Name: "Single",
    URL: "xxx",
    ID: 123,
  },
  {
    Name: "Double",
    URL: "yyy",
    ID: 345,
  },
  {
    Name: "Family",
    URL: "zzz",
    ID: 567,
  },
];

var destArray = [
  {
    Name: "Single",
    URL: "xxx",
    ID: 123,
  },
  {
    Name: "Double",
    URL: "yyy",
    ID: 888,
  },
  {
    Name: "Family",
    URL: "zzz",
    ID: 567,
  },
];

function objDiff(array1, array2) {
  var resultArray = [];

  array2.forEach(function (destObj) {
    var check = array1.some(function (origObj) {
      if (origObj.ID == destObj.ID) return true;
    });
    if (!check) {
      destObj.desc = "missing in source";
      resultArray.push(destObj);
    }
  });

  array1.forEach(function (origObj) {
    var check = array2.some(function (destObj) {
      if (origObj.ID == destObj.ID) return true;
    });
    if (!check) {
      origObj.desc = "missing in destination";
      resultArray.push(origObj);
    }
  });

  return resultArray;
}

/*
 * How can I merge properties of two JavaScript objects dynamically?
 * */

let merged = { ...obj1, ...obj2 };

/** There's no limit to the number of objects you can merge.
 *  Later properties overwrite earlier properties with the same name. */
const allRules = { ...obj1, ...obj2, ...obj3 };

/* For the case in question, you would do: */
Object.assign(obj1, obj2);

/** There's no limit to the number of objects you can merge.
 *  All objects get merged into the first object.
 *  Only the object in the first argument is mutated and returned.
 *  Later properties overwrite earlier properties with the same name. */
const allRules = Object.assign({}, obj1, obj2, obj3, etc);

/*
 * Sort array of objects by string property value
 *
 * */

var objs = [
  { first_nom: "Lazslo", last_nom: "Jamf" },
  { first_nom: "Pig", last_nom: "Bodine" },
  { first_nom: "Pirate", last_nom: "Prentice" },
];

function compare(a, b) {
  if (a.last_nom < b.last_nom) return -1;
  if (a.last_nom > b.last_nom) return 1;
  return 0;
}

objs.sort(compare);

/*
 *
 *
 * */

function arrayUnique(array) {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }

  return a;
}

var array1 = ["Vijendra", "Singh"];
var array2 = ["Singh", "Shakya"];
// Merges both arrays and gets unique items
var array3 = arrayUnique(array1.concat(array2));

/*
 * Get all unique values in a JavaScript array (remove duplicates)
 * */

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// usage example:
var a = ["a", 1, "a", 2, "1"];
var unique = a.filter(onlyUnique); // returns ['a', 1, 2, '1']

/*
 * How to remove item from array by value?
 *
 * */

Array.prototype.remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

var ary = ["three", "seven", "eleven"];

ary.remove("seven");

/*  returned value: (Array)
three,eleven
*/

/*
 * How can I add new array elements at the beginning of an array in Javascript?
 * */

var a = [23, 45, 12, 67];
a.unshift(34);
console.log(a); // [34, 23, 45, 12, 67]

/*
 *
 * Remove duplicate values from JS array [duplicate]
 * */

function remove_duplicates(arr) {
  var obj = {};
  var ret_arr = [];
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  for (var key in obj) {
    ret_arr.push(key);
  }
  return ret_arr;
}

var names = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];

remove_duplicates(names);

/*
 * Check if every element in one array is in a second array
 *
 * */

function superbag(sup, sub) {
  sup.sort();
  sub.sort();
  var i, j;
  for (i = 0, j = 0; i < sup.length && j < sub.length; ) {
    if (sup[i] < sub[j]) {
      ++i;
    } else if (sup[i] == sub[j]) {
      ++i;
      ++j;
    } else {
      // sub[j] not in sup, so sub not subbag
      return false;
    }
  }
  // make sure there are no elements left in sub
  return j == sub.length;
}

/*
 * Check if an array is subset of another array
 *
 * */

var PlayerOne = ["B", "C", "A", "D"];
var PlayerTwo = ["D", "C"];

var su = !PlayerTwo.some((val) => PlayerOne.indexOf(val) === -1);

console
  .log(su)

  [
    /*

How do I check if an array includes an object in JavaScript?

*/

    ("joe", "jane", "mary")
  ].includes("jane");
// true

/*
NodeJS - Subtract array from array, not removing all duplicates [duplicate]
*/

Array.prototype.subtract = function (array) {
  array = array.slice();
  return this.filter(function (a) {
    var p = array.indexOf(a);
    if (p === -1) {
      return true;
    }
    array.splice(p, 1);
  });
};

var a = [1, 2, 2, 3, 3, 3],
  b = [1, 2, 3];

/*
compare 2 arrays so that if one array has elements within the other array these elements are eliminated from the other array? [duplicate]
Ask Question
*/

for (var i in array1) {
  for (var j in array2) {
    if (array2[j] == array1[i]) {
      array2.splice(j, 1);
      break;
    }
  }
}

/* How can I merge properties of two JavaScript objects dynamically? */

let merged = { ...obj1, ...obj2 };

/** There's no limit to the number of objects you can merge.
 *  Later properties overwrite earlier properties with the same name. */
const allRules = { ...obj1, ...obj2, ...obj3 };

/*

Removing arrays from other arrays [duplicate]

*/

var a = [
  [2823832908, 10071920],
  [5384625228, 10924221],
  [8488934028, 313411415],
  [2823828588, 10071580],
  [5224682868, 14919881],
  [8155986228, 560217208],
  [3458951628, 10071570],
  [6382592388, 25064430],
  [5021452668, 10924221],
  [8827673748, 59397160],
  [8647215588, 26343621],
];

b = [
  [8488934028, 313411415],
  [8647215588, 26343621],
];

var result = [];
a.forEach(function (elem, idx, arr) {
  var sig = JSON.stringify(elem);
  var match = false;
  for (var i = 0; i < b.length; i++) {
    if (sig == JSON.stringify(b[i])) {
      match = true;
      break;
    }
  }
  if (match === false) {
    result.push(elem);
  }
});

console.log(result);

/*
Sort/intersect two arrays into two new ones. [duplicate]
*/

var currentList = ["Daniel", "Lara", "Horst"];
var newList = ["Mario", "Lara"];

var toDelete = [];
var toAdd = [];
for (var i = 0; i < newList.length; i++) {
  if (currentList.indexOf(newList[i]) > -1) toAdd.push(newList[i]);
}

for (var i = 0; i < currentList.length; i++) {
  if (newList.indexOf(currentList[i]) == -1) toDelete.push(currentList[i]);
}

console.log("dele", toDelete);
console.log("add", toAdd);

/*
How can I remove values from an array that are in another array without making a big long function? [duplicate]
*/

var arr1 = [
  "how",
  "can",
  "i",
  "remove",
  "values",
  "from",
  "an",
  "array",
  "that",
  "are",
  "in",
  "another",
  "array",
];

var arr2 = ["can", "i", "an", "are", "in"];

var arr3 = arr1.filter(function (a) {
  return arr2.indexOf(a) == -1;
});
console.log(arr3);

/*
Javascript arrays: remove all elements contained in another array
*/

// If I have this array:
var myArray = ["a", "b", "c", "d", "e", "f", "g"];

// and this one:
var toRemove = ["b", "c", "g"];

//Use the Array.filter() method:

myArray = myArray.filter(function (el) {
  return toRemove.indexOf(el) < 0;
});

//Small improvement, as browser support for Array.includes() has increased:

myArray = myArray.filter(function (el) {
  return !toRemove.includes(el);
});

//Next adaption using arrow functions:

myArray = myArray.filter((el) => !toRemove.includes(el));

/*
Subtracts values one list from another in javascript
*/

var a = [1, 2, 2, 2, 5];
var b = [2];
var bDict = b.reduce(function (d, n) {
  d[n] = true;

  return d;
}, Object.create(null));

var result = a.filter(function (n) {
  return !bDict[n];
});

console.log(result);

/*
How to extend an existing JavaScript array with another array, without creating a new array
*/

Array.prototype.push.apply(a, b);

/*
Compare 2 arrays which returns difference
*/

var array1 = [1, 2, 3, 4, 5, 6];
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var difference = [];

jQuery.grep(array2, function (el) {
  if (jQuery.inArray(el, array1) == -1) difference.push(el);
});

//alert(" the difference is " + difference);​ // Changed variable name

/*
How to use underscore's “intersection” on objects?
*/

_.intersectionObjects = function (array) {
  var slice = Array.prototype.slice; // added this line as a utility
  var rest = slice.call(arguments, 1);
  return _.filter(_.uniq(array), function (item) {
    return _.every(rest, function (other) {
      //return _.indexOf(other, item) >= 0;
      return _.any(other, function (element) {
        return _.isEqual(element, item);
      });
    });
  });
};

/* Comparing two arrays in Javascript */

function matches(outer) {
  return function (el) {
    if (outer.length !== el.length) return false;
    return el.every(function (x) {
      return outer.indexOf(x) > -1;
    });
  };
}

//Iterate over y and return a list of arrays that aren't in x.

function finder(x, y) {
  return y.filter(function (el) {
    return !x.some(matches(el));
  });
}

finder(x, y);

/*
How do I get the difference between an associative array and a regular array in Javascript?
*/

array1 = [5, 1, 3];
array2 = { 1: 15, 2: 20, 3: 10, 4: 5, 5: 50 };

var result = {};
for (var i in array2) {
  if (array1.indexOf(+i) < 0) {
    result[i] = array2[i];
  }
}

alert(JSON.stringify(result));

// https://www.npmjs.com/package/jQuery

/* How to determine if object is in array [duplicate] */

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }

  return false;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

var i,
  j,
  temparray = [],
  chunk = 10;

for (i = 0, j = array.length; i < j; i += chunk) {
  temparray.push(array.slice(i, i + chunk));
  // do whatever
}

console.log(temparray);



var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var howmany = 3;

var elements = Math.ceil(array.length / howmany);

// var item = items[Math.floor(Math.random()*items.length)];

// Broked
var borked = [];

for (var i = 0; i < howmany; i++) {
  borked.push(array.splice(0, elements));
}

console.log(borked);

var array3 = array1.filter(function (obj) {
  return array2.indexOf(obj) == -1;
});

//////////////////////////////////////////////
// march 10 2020 form
//////////////////////////////////////////////

// Q. array unique
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// usage example:
var a = ["a", 1, "a", 2, "1"];
var unique = a.filter(onlyUnique); // returns ['a', 1, 2, '1']

// Q array unique  es6
// usage example:
var myArray = ["a", 1, "a", 2, "1"];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i);

// unique is ['a', 1, 2, '1']

// Q. Array unique
var myArray = ["a", 1, "a", 2, "1"];

let unique = [...new Set(myArray)];

////////////////////////////////////////////////////////////////////
// MIS QUESTION IS HERE
///////////////////////////////////////////////////////////////////

/*
 * 1
 *
 * */
// What will oupt this code
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 3000);
}

// To bring expected ouput following need to be used

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function
  // has access to the correct index
  var g = arr[i];

  setTimeout(
    (function (i, g) {
      return function () {
        console.log("The index " + i + "of this number is: " + g);
      };
    })(i, arr[i]),
    3000
  );
}

/*
 * 2 Understand bind
 *
 * */

var module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

// Apply

function personContainer() {
  var person = {
    name: "James Smith",
    hello: function () {
      console.log(this.name + " says hello " + arguments[1]);
    },
  };
  person.hello.apply(person, arguments);
}

personContainer("world", "mars"); // output: "James Smith says hello mars", note: arguments[0] = "world" , arguments[1] = "mars"

// Calling function

var person = {
  name: "James Smith",
  hello: function (thing) {
    console.log(this.name + " says hello " + thing);
  },
};

person.hello("world"); // output: "James Smith says hello world"
person.hello.call({ name: "Jim Smith" }, "world"); // output: "Jim Smith says hello world"

/*
 * Scope s
 * */

var a = 10;

function Foo() {
  if (true) {
    let a = 4;
  }

  alert(a); // alerts '10' because the 'let' keyword
}
Foo();

function Foo() {
  console.log(this.a);
}
var food = { a: "Magical this" };

Foo.call(food); // food is this

////////////////////////////////////////////////////////////////////
// MIS ENS QUESTION ENDS HERE
///////////////////////////////////////////////////////////////////

/*
 *  Instance of
 * */

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var newCar = new Car("Honda", "City", 2007);
console.log(newCar instanceof Car); // returns true

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var howmany = 3;

var elements = array.length / 3;

// var item = items[Math.floor(Math.random()*items.length)];

// Broked
var borked = [];

for (var i = 0; i < howmany; i++) {
  borked.push(array.splice(0, elements));
}

console.log(borked);

var array3 = array1.filter(function (obj) {
  return array2.indexOf(obj) == -1;
});
