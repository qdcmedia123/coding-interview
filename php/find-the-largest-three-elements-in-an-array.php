<?php 
// PHP code to find largest 
// three elements in an array 

// Function to print 
// three largest elements 
// https://www.geeksforgeeks.org/find-the-largest-three-elements-in-an-array/
function print3largest($arr, $arr_size) 
{ 
	$i; $first; $second; $third; 

	// There should be atleast 
	// three elements 
	if ($arr_size < 3) 
	{ 
		echo " Invalid Input "; 
		return; 
	} 

	$third = $first = $second = PHP_INT_MIN; 
	for ($i = 0; $i < $arr_size ; $i ++) 
	{ 
		// If current element is 
		// greater than first 
		if ($arr[$i] > $first) 
		{ 
			$third = $second; 
			$second = $first; 
			$first = $arr[$i]; 
		} 

		// If arr[i] is in between first 
		// and second then update second 
		else if ($arr[$i] > $second) 
		{ 
			$third = $second; 
			$second = $arr[$i]; 
		} 

		else if ($arr[$i] > $third) 
			$third = $arr[$i]; 
	} 

	echo "Three largest elements are ", 
	$first, " ", $second, " ", $third; 
} 


// Driver Code 
$arr = array(12, 13, 1, 
			10, 34, 1); 
$n = count($arr); 
print3largest($arr, $n); 

// This code is contributed by anuj_67 and edited by Ayush Singla(@ayusin51). 
?> 
