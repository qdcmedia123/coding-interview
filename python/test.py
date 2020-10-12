from functools import reduce

#Compute join point between two numbers 
def computeJoinPoints(s1, s2):
	s1Array = [int(i) for i in str(s1)]
	s2Array = [int(i) for i in str(s2)]

	#find the sum of num s1Array and s2Array 
	s1Sum = reduce((lambda x, y: x+y), s1Array) + s1
	s2Sum = reduce((lambda x, y: x+y), s2Array) + s2

	#check if both number is equal 
	if s1Sum != s2Sum:
		return computeJoinPoints(s1Sum, s2Sum)

	return s1Sum;

print(computeJoinPoints(471, 480))