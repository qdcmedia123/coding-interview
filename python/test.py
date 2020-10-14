# Initialising list of dictionary 
ini_dict = [{'a':5, 'b':10, 'c':90}, 
			{'a':45, 'b':78}, 
			{'a':90, 'c':10}] 

result = {}

for d in ini_dict:
	for i in d.keys():
		print(result.get(i,0))
		result[i] = result.get(i,0) + d[i]

#print(result)