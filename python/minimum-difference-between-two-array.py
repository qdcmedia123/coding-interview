import sys

array2 = [1, 3, 15, 65];
array1 = [40, 25, 5];

def smallestDifference(array1, array2):
	if len(array1) == 0 or len(array2) == 0:
		return None

	numbers = sys.maxsize

	for i in range(len(array1)):
		for j in range(len(array2)):
			if abs(array1[i] - array2[j]) < numbers:
				numbers = abs(array1[i] - array2[j])

	return numbers


print(smallestDifference(array1, array2))