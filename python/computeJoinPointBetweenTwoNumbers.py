from functools import reduce

# compute join point between two numbers 
def computeJoinPoint(s1, s2):
	s1Array = [int(i) for i in str(s1)]
	s2Array = [int(i) for i in str(s2)]

	# find the sum of num s1Array and s2Array 
	s1Sum = reduce((lambda x, y: x + y), s1Array) + s1;
	s2Sum = reduce((lambda x, y: x + y), s2Array) + s2;

	# Check if the number is same 
	if s1Sum != s2Sum:
		return computeJoinPoint(s1Sum, s2Sum)

	# otherwise return s1 sum
	return s1Sum


print(computeJoinPoint(471, 480))