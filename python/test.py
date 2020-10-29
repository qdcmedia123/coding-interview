# is monotonic array 
def isMonotonic(A):
	return (all(A[i] >= A[i+1] for i in range(len(A)-1)) or 
		all(A[i] <= A[i+1] for i in range(len(A) -1)))

print(isMonotonic([1,2,1]))