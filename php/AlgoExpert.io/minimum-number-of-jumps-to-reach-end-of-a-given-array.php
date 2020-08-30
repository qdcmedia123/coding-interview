<?php 
// PHP code for Minimum number of 
// jumps to reach end 
// https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/
// Returns minimum number of jumps 
// to reach arr[n-1] from arr[0] 
function minJumps($arr, $n) 
{ 
	// jumps[n-1] will 
	// hold the result 
	$jumps = array($n); 
	
	if ($n == 0 || $arr[0] == 0) 
		return 999999; 

	$jumps[0] = 0; 

	// Find the minimum number of 
	// jumps to reach arr[i] 
	// from arr[0], and assign 
	// this value to jumps[i] 
	for ($i = 1; $i < $n; $i++) 
	{ 
		$jumps[$i] = 999999; 
		for ($j = 0; $j < $i; $j++) 
		{ 
			if ($i <= $j + $arr[$j] && 
				$jumps[$j] != 999999) 
			{ 
				$jumps[$i] = min($jumps[$i], 
							$jumps[$j] + 1); 
				break; 
			} 
		} 
	} 
	return $jumps[$n-1]; 
} 

	// Driver Code 
	$arr = array(1, 3, 6, 1, 0, 9); 
	$size = count($arr); 
	echo "Minimum number of jumps to reach end is ". 
							minJumps($arr, $size); 
							
// This code is contributed by Sam007 
?> 
