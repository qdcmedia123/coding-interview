const riverSizes = input => {
  let results = [];
  input.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (input[y][x] === 1) {
        results.push(checkAdjacent(x, y, input));
      }
    });
  });
  return results;
};

const checkAdjacent = (x, y, input) => {
  input[y][x] = 0; // mark cell as visited
  let size = 1;

  [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]].forEach(([i, j]) => {
    // make sure we don't access a row that doesn't exist
    // then check to see if we have a river
    if (input[j] && input[j][i]) {
      size += checkAdjacent(i, j, input);
    }
  });

  return size;
};


const input = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
];

console.log(riverSizes(input)); // returns [1, 2, 2, 2, 5]