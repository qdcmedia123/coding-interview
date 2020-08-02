<?php 
// php program to find Minimum 
// number of jumps to reach end 

// Returns minimum number of jumps 
// to reach arr[h] from arr[l] 
function minJumps($arr, $l, $h) 
{ 
	
	// Base case: when source and 
	// destination are same 
	if ($h == $l) 
		return 0; 
	
	// When nothing is reachable 
	// from the given source 
	if ($arr[$l] == 0) 
		return INT_MAX; 
	
	// Traverse through all the points 
	// reachable from arr[l]. Recursively 
	// get the minimum number of jumps 
	// needed to reach arr[h] from these 
	// reachable points. 
	$min = 999999; 
	
	for ($i = $l+1; $i <= $h && 
			$i <= $l + $arr[$l]; $i++) 
	{ 
		$jumps = minJumps($arr, $i, $h); 
		
		if($jumps != 999999 && 
					$jumps + 1 < $min) 
			$min = $jumps + 1; 
	} 
	
	return $min; 
} 

// Driver program to test above function 
$arr = array(1, 3, 6, 3, 2, 3, 6, 8, 9, 5); 
$n = count($arr); 

echo "Minimum number of jumps to reach "
	. "end is ". minJumps($arr, 0, $n-1); 
	
// This code is contributed by Sam007 
?> 
