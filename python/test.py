
def permute(nums):
	#defining variable 
	result_parms = [[]]
	for n in nums:
		new_perms = []
		for perm in result_parms:
			for i in range(len(perm) + 1):
				new_perms.append(perm[i:] + [n] + perm[:i])
				result_parms = new_perms;
	return result_parms
#Create the possible number com
my_nums = [1,2,3]
print(permute(my_nums));