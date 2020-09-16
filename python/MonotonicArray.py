#https://www.geeksforgeeks.org/python-program-to-check-if-given-array-is-monotonic/
# Try above question because question that you had collected before was too advance
# Python3 program to find sum in Nth group 
  
# Check if given array is Monotonic 
def isMonotonic(A): 
  
    return (all(A[i] <= A[i + 1] for i in range(len(A) - 1)) or
            all(A[i] >= A[i + 1] for i in range(len(A) - 1))) 
  
# Driver program 
A = [6, 5, 4, 1] 
  
# Print required result 
print(isMonotonic(A)) 
  
# This code is written by 
# Sanjit_Prasad 