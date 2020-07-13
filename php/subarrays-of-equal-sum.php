<?php 
// PHP program to divide the array into two 
// subarrays with the same sum on removing 
// exactly one integer from the array 

// Uitlity function to prthe sub-array 
function printSubArray($arr, $start, $end) 
{ 
	echo "[ "; 
	for ($i = $start; $i <= $end; $i++) 
		echo $arr[$i] . " "; 
	echo "] "; 
} 

// Function that divides the 
// array into two subarrays 
// with the same sum 
function divideArray($arr, $n) 
{ 
	
	// sum stores sum of all 
	// elements of the array 
	$sum = 0; 
	for ($i = 0; $i < $n; $i++) 
		$sum += $arr[$i]; 

	// sum stores sum till previous 
	// index of the array 
	$sum_so_far = 0; 

	for ($i = 0; $i < $n; $i++) 
	{ 
		
		// If on removing arr[i], 
		// we get equals left 
		// and right half 
		if (2 * $sum_so_far + $arr[$i] == $sum) 
		{ 
			echo "The array can be divided into" . 
				"two subarrays with equal sum\nThe". 
				" two subarrays are - "; 
			printSubArray($arr, 0, $i - 1); 
			printSubArray($arr, $i + 1, $n - 1); 

			return true; 
		} 
		
		// add current element 
		// to sum_so_far 
		$sum_so_far += $arr[$i]; 
	} 

	// The array cannot be divided 
	echo "The array cannot be divided into two ". 
		"subarrays with equal sum"; 

	return false; 
} 

	// Driver code 
	$arr = array(6, 2, 3, 2, 1); 
	$n = sizeof($arr); 

	divideArray($arr, $n); 
	
// This code is contributed by Anuj_67 
?> 
