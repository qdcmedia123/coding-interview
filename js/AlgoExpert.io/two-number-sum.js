var twoSum = function(nums, target) {
    //hash table
    var hash = {};

    for(let i=0; i<=nums.length; i++){
      //current number
        var currentNumber = nums[i];
        //difference in the target and current number
        var requiredNumber = target - currentNumber;
        // find the difference number from hashTable
        const index2 = hash[requiredNumber];

        // if number found, return index 
        // it will return undefined if not found
        if(index2 != undefined) {
            return [index2, i]
        } else {
           // if not number found, we add the number into the hashTable
            hash[currentNumber] = i;

        }
    }
};

const arr = [2, 7, 11, 15];
const sum = 9;
console.log(twoSum(arr, sum))


