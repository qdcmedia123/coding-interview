data_list = [-5, -23, 5, 0, 23, -6, 23, 67]
new_list = []

while data_list:
    minimum = data_list[0]  # arbitrary number in list 
    for x in data_list: 
        if x < minimum:
            minimum = x
    new_list.append(minimum)
    data_list.remove(minimum)    

print new_list


# Python program to sort an array without comparison
# operator.
 
def sortArr(arr, n, min, max):
    # Count of elements in given range 
    m = max - min + 1;
     
    # Count frequencies of all elements
    c = [0] * m;
    for i in range(n):
        c[arr[i] - min] += 1;
 
    # Traverse through range. For every
    # element, print it its count times.
    for i in range(m):
        for j in range((c[i])):
            print((i + min), end=" ");
 
# Driver Code
arr = [10, 10, 1, 4, 4, 100, 0];
min = 0; max = 100;
n = len(arr);
sortArr(arr, n, min, max);
 
# This code is contributed by Rajput-Ji