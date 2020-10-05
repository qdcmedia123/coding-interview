function rotate(matrix) {
	const n = matrix.length;
	const x = Math.floor(n/2);
	const y = n - 1;
	for(let i = 0; i < x; i++) {
		for(let j = i; j < y; j++) {
			
			k = matrix[i][j];
			matrix[i][j] = matrix[y -j][i]
			matrix[y-j][i]= matrix[y-i][y-j];
			matrix[y-i][y-j] = matrix[j][y-i]
			matrix[j][y-i] = k
		}
	}

	return matrix;
	
}



const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],

]

console.log(rotate(A));

/*
[
  [ 13, 9, 5, 1 ],
  [ 14, 10, 6, 2 ],
  [ 15, 11, 7, 3 ],
  [ 16, 12, 8, 4 ]
]
*/