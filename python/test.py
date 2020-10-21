ini_dict = [{'equity':'', 'a':5, 'b':10, 'c':90}, 
         {'equity':'','a':45, 'b':78},             {'equity':'', 'a':90, 'c':10}] 
result = {}
for d in ini_dict:
	for k in d.keys():
		if k == 'equity':
			result[k] = d[k]
		else:
			result[k] = result.get(k,0) + d[k]

print(result)