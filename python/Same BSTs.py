# Python3 program to check if given two arrays represent 
# same BST. 
#https://www.geeksforgeeks.org/check-if-two-given-key-sequences-construct-same-bsts/
def sameBSTs(aL1, aL2): 
	
	# Base cases 
	if (len(aL1) != len(aL2)): 
		return False
	if (len(aL1) == 0): 
		return True
	if (aL1[0] != aL2[0]): 
		return False
	
	# Construct two lists from each input array. The first 
	# list contains values smaller than first value, i.e., 
	# left subtree. And second list contains right subtree. 
	aLLeft1 = [] 
	aLRight1 = [] 
	aLLeft2 = [] 
	aLRight2 = [] 
	for i in range(1, len(aL1)): 
		if (aL1[i] < aL1[0]): 
			aLLeft1.append(aL1[i]) 
		else: 
			aLRight1.append(aL1[i]) 
		
		if (aL2[i] < aL2[0]): 
			aLLeft2.append(aL2[i]) 
		else: 
			aLRight2.append(aL2[i]) 
	
	# Recursively compare left and right 
	# subtrees. 
	return sameBSTs(aLLeft1, aLLeft2) and sameBSTs(aLRight1, aLRight2) 

# Driver code 
aL1 = [] 
aL2 = [] 
aL1.append(3) 
aL1.append(5) 
aL1.append(4) 
aL1.append(6) 
aL1.append(1) 
aL1.append(0) 
aL1.append(2) 

aL2.append(3) 
aL2.append(1) 
aL2.append(5) 
aL2.append(2) 
aL2.append(4) 
aL2.append(6) 
aL2.append(0) 

if (sameBSTs(aL1, aL2)): 
	print("true") 
else: 
	print("false") 

# This code is contributed by shubhamsingh10 
