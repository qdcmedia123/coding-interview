# Python program to print all 
# the possible combinations 
#https://www.geeksforgeeks.org/python-program-to-print-all-possible-combinations-from-the-three-digits/

def comb(L): 
	# length of the variable 
	arLen = len(L)
	for i in range(arLen): 
		for j in range(arLen): 
			for k in range(arLen): 
				
				# check if the indexes are not 
				# same 
				if (i!=j and j!=k and i!=k): 
					print(L[i], L[j], L[k]) 
					
# Driver Code 
comb([1, 2, 3,4])



def permute(nums):
  result_perms = [[]]
  for n in nums:
    new_perms = []
    for perm in result_perms:
      for i in range(len(perm)+1):
        new_perms.append(perm[:i] + [n] + perm[i:])
        result_perms = new_perms
  return result_perms

my_nums = [1,2,3]
print("Original Cofllection: ",my_nums)
print("Collection of distinct numbers:\n",permute(my_nums))