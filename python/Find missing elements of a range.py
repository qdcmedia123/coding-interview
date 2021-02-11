# An array-based Python3 program to 
# find missing elements from an array 

# Print all elements of range 
# [low, high] that are not
# present in arr[0..n-1] 
def printMissing(arr, n, low, high):

	# Create boolean list of size 
	# high-low+1, each index i 
	# representing wether (i+low)th
	# element found or not.
	points_of_range = [False] * (high-low+1) 
	
	for i in range(n) :
		# if ith element of arr is in range
		# low to high then mark corresponding
		# index as true in array
		if ( low <= arr[i] and arr[i] <= high ) : 
			points_of_range[arr[i]-low] = True

	# Traverse through the range 
	# and print all elements whose value
	# is false
	for x in range(high-low+1) :
		if (points_of_range[x]==False) : 
			print(low+x, end = " ")

# Driver Code 
arr = [1, 3, 5, 4]
n = len(arr)
low, high = 1, 10
printMissing(arr, n, low, high)

# This code is contributed 
# by Shubh Bansal
