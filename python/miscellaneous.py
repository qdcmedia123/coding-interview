from functools import reduce
# li = [5, 8, 10, 20, 50, 100] 
# sum = reduce((lambda x, y: x + y), li) 
# print (sum) 


#sortin 
x = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}
{k: v for k, v in sorted(x.items(), key=lambda item: item[1])}

# sum = reduce((lambda x, y: x + y), data) 
# print (sum) 

#How do I sort a list of dictionaries by a value of the dictionary?
li = [{'name':'Homer', 'age':39}, {'name':'Bart', 'age':10}]
newlist = sorted(list_to_be_sorted, key=lambda k: k['name']) 
# another way 
my_list.sort(lambda x,y : cmp(x['name'], y['name']))

#Sorting associative arrays in Python [duplicate]
people = [
    {'name' : 'Bob', 'number' : '123'},
    {'name' : 'Bill', 'number' : '234'},
    {'name' : 'Dave', 'number' : '567'},
]

sorted(people, key=lambda dct: dct['name'])

#How can I reverse a list in Python?
array=[0,10,20,40]
for i in reversed(array):
	print(i)

#Check if a given key already exists in a dictionary
d = {"key1": 10, "key2": 23}

if "key1" in d:
    print("this will execute")

if "nonexistent key" in d:
    print("this will not")


#Python check that key is defined in dictionary [duplicate]
a = {'foo': 1, 'bar': 2}
'foo' in a #true
'spam' in a #false


#Delete an element from a dictionary
del d[key]
lol = {"hello": "gdbye"}
lol.pop("hello")


#Iterating over dictionaries using 'for' loops
d = {'x': 1, 'y': 2, 'z': 3} 
for key, value in d.items():
	pass

#Check if a given key already exists in a dictionary
d = {"key1": 10, "key2": 23}

if "key1" in d:
    print("this will execute")

if "nonexistent key" in d:
    print("this will not")


