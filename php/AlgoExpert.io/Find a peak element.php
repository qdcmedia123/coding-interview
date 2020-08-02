<?php 
// https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/
// A PHP program to find a 
// peak element element using 
// divide and conquer 

// A binary search based function 
// that returns index of a peak 
// element 
function findPeakUtil($arr, $low, 
					$high, $n) 
{ 
	// Find index of middle element 
	$mid = $low + ($high - $low) / 2; // (low + high)/2 

	// Compare middle element with 
	// its neighbours (if neighbours exist) 
	if (($mid == 0 || 
		$arr[$mid - 1] <= $arr[$mid]) && 
		($mid == $n - 1 || 
		$arr[$mid + 1] <= $arr[$mid])) 
		return $mid; 

	// If middle element is not peak 
	// and its left neighbour is greater 
	// than it, then left half must 
	// have a peak element 
	else if ($mid > 0 && 
			$arr[$mid - 1] > $arr[$mid]) 
		return findPeakUtil($arr, $low, 
						($mid - 1), $n); 

	// If middle element is not peak 
	// and its right neighbour is 
	// greater than it, then right 
	// half must have a peak element 
	else return(findPeakUtil($arr, ($mid + 1), 
							$high, $n)); 
} 

// A wrapper over recursive 
// function findPeakUtil() 
function findPeak($arr, $n) 
{ 
	return floor(findPeakUtil($arr, 0, 
							$n - 1, $n)); 
} 

// Driver Code 
$arr = array(1, 3, 20, 4, 1, 0); 
$n = sizeof($arr); 
echo "Index of a peak point is ", 
			findPeak($arr, $n); 

// This code is contributed by ajit 
?> 
