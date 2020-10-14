#https://www.geeksforgeeks.org/python-extract-maximum-keys-value-dictionaries/?ref=rp
# Python3 code to demonstrate working of 
# Extract Maximum Keys' value dictionaries 
# Using max() + filter() + lambda 

# initializing list 
test_list = [{"Gfg" : 3, "is" : 7, "Best" : 8}, 
			{"Gfg" : 9, "is" : 2, "Best" : 9}, 
			{"Gfg" : 5, "is" : 4, "Best" : 10}, 
			{"Gfg" : 3, "is" : 6, "Best" : 8}] 

# printing original list 
print("The original list : " + str(test_list)) 

res = [] 

# getting all keys 
all_keys = list(test_list[0].keys()) 
for sub in all_keys: 
	
	# extracting maximum of each keys 
	temp = max(test_list, key = lambda ele: ele[sub]) 
	res_key = list(filter(lambda ele: ele[sub] == temp[sub], test_list)) 
	res.append(res_key) 

# printing result 
print("The extracted maximum key values dictionaries : " + str(res)) 
