<?php 
//https://www.geeksforgeeks.org/container-with-most-water/
// PHP code for Max 
// Water Container 
function maxArea($A, $len) 
{ 
	$l = 0; 
	$r = $len -1; 
	$area = 0; 
	
	while ($l < $r) 
	{ 
		// Calculating the max area 
		$area = max($area, min($A[$l], 
					$A[$r]) * ($r - $l)); 
						
			if ($A[$l] < $A[$r]) 
				$l += 1; 
				
			else
				$r -= 1; 
	} 
	return $area; 
} 

// Driver code 
$a = array(1, 5, 4, 3); 
$b = array(3, 1, 2, 4, 5); 

$len1 = sizeof($a) / sizeof($a[0]); 
echo maxArea($a, $len1). "\n"; 

$len2 = sizeof($b) / sizeof($b[0]); 
echo maxArea($b, $len2); 
	
// This code is contributed by mits 
?> 
