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


#Why does Python start at index -1 (as opposed to 0) when indexing a list from the end? [duplicate]
arr = ["a", "b", "c", "d"]
print(arr[~0])   # d
print(arr[~1])   # c


#Finding the index of an item in a list
["foo", "bar", "baz"].index("bar") #1

#What is the difference between Python's list methods append and extend?

#append: Appends object at the end.
x = [1, 2, 3]
x.append([4, 5])
print (x) #[1, 2, 3, [4, 5]]

#extend: Extends list by appending elements from the iterable.x = [1, 2, 3]
x.extend([4, 5])
print (x)
#gives you: [1, 2, 3, 4, 5]


#How to make a flat list out of list of lists?
l = [[1, 2, 3], [4, 5, 6], [7], [8, 9]]
flat_list = [item for sublist in l for item in sublist]
#which means:
flat_list = []
for sublist in l:
    for item in sublist:
        flat_list.append(item)

#another way 
flatten = lambda l: [item for sublist in l for item in sublist]


#How do I concatenate two lists in Python?
listone = [1,2,3]
listtwo = [4,5,6]
joinedlist = listone + listtwo #[1,2,3,4,5,6]


#How do I merge two dictionaries in a single expression in Python (taking union of dictionaries)?
#In Python 3.5 or greater
z = {**x, **y}

#How do you extract a column from a multi-dimensional array?
data = [
['a', 1, 2], 
['b', 3, 4], 
['c', 5, 6]
]

columns = list(zip(*data))

print("column[0] = {}".format(columns[0]))
print("column[1] = {}".format(columns[1]))
print("column[2] = {}".format(columns[2]))

#another way 
array = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

col1 = [val[1] for val in array]
col2 = [val[2] for val in array]
col3 = [val[3] for val in array]
col4 = [val[4] for val in array]
print(col1)
print(col2)
print(col3)
print(col4)

# Output:
# [1, 5, 9, 13]
# [2, 6, 10, 14]
# [3, 7, 11, 15]
# [4, 8, 12, 16]


#Map, Filter, Reduce
my_pets = ['alfred', 'tabitha', 'william', 'arla']

uppered_pets = list(map(str.upper, my_pets))

print(uppered_pets)

#How to sum dict elements
dict1 = [{'a':2, 'b':3},{'a':3, 'b':4}
dictf = reduce(lambda x, y: dict((k, v + y[k]) for k, v in x.iteritems()), dict1)


#How to sum all the values in a dictionary?
d = {'key1': 1,'key2': 14,'key3': 47}
sum(d.values())