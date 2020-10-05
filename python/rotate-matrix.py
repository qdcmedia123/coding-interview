import math

def rotate(matrix):
	n = len(matrix)
	x = math.floor(n/2)
	y = n - 1

	for i in range(x):
		for j in range(i, y):
			k = matrix[i][j]
			matrix[i][j] = matrix[y-j][i]
			matrix[y-j][i] = matrix[y-i][y-j]
			matrix[y-i][y-j] = matrix[j][y-i]
			matrix[j][y-i] = k

	return matrix



A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],

]

print(rotate(A))