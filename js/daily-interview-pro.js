//Given a matrix, transpose it. Transposing a matrix means the rows are now the column and vice-versa.

/*
def transpose(mat):
  # Fill this in.

mat = [
    [1, 2, 3],
    [4, 5, 6],
]

print(transpose(mat))
# [[1, 4],
#  [2, 5], 
#  [3, 6]]
*/

const mat = [
	[1, 2, 3, 5, 6],
	[4, 5, 6, 3, 7],
];

// Row are now colocum
const firstILength = mat[0].length;
const dLength = mat.length;
const finalResult = [];

for (var i = 0; i < firstILength; i++) {
	const result = [];
	for (var j = 0; j < mat.length; j++) {
		result.push(mat[j][i]);
	}
	finalResult.push(result);
}

console.log(finalResult);
