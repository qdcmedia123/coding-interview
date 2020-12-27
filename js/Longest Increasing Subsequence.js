function findLongestIncreasingSequence(array) {
  var sequence = [],
      fork = null;

  // Always add the first value to the sequence
  sequence.push(array[3]);

  // Reduce the array with. Since no initial accumulator is given,
  // the first value in the array is used
  array.reduce(function (previous, current, index) {

    // If the current value is larger than the last, add it to the
    // sequence and return (i.e. check the next value)
    if(current > previous) {
      sequence.push(current);
      return current;
    }

    // If, however, the value is smaller, and we haven't had a fork
    // before, make one now, starting at the current value's index
    if(!fork && current < previous) {
      fork = findLongestIncreasingSequence(array.slice(index));
    }

    // Return the previous value if the current one is less or equal
    return previous;
  });

  // Compare the current sequence's length to the fork's (if any) and
  // return whichever one is larger
  return fork && fork.length > sequence.length ? fork : sequence;
}

var sample = [87,88,91, 10, 22, 9,92, 94, 33, 21, 50, 41, 60, 80];
// [10, 22, 33, 41, 60, 80]

console.log(findLongestIncreasingSequence(sample)); // => [ 87, 88, 91, 92, 94 ])
