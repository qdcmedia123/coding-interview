<?php 
// PHP program to find 
// the maximum stolen value 

// calculate the maximum 
// stolen value 
function maxLoot($hval, $n) 
{ 
	if ($n == 0) 
		return 0; 
	if ($n == 1) 
		return $hval[0]; 
	if ($n == 2) 
		return max($hval[0], 
				$hval[1]); 

	// dp[i] represent the maximum 
	// value stolen so far after 
	// reaching house i. 
	$dp = array(); 

	// Initialize the 
	// dp[0] and dp[1] 
	$dp[0] = $hval[0]; 
	$dp[1] = max($hval[0], 
				$hval[1]); 

	// Fill remaining positions 
	for ($i = 2; $i < $n; $i++) 
		$dp[$i] = max($hval[$i] + 
					$dp[$i - 2], 
					$dp[$i - 1]); 

	return $dp[$n - 1]; 
} 

// Driver Code 
$hval = array(6, 7, 1, 
			3, 8, 2, 4); 
$n = sizeof($hval); 
echo "Maximum loot possible : ", 
			maxLoot($hval, $n); 
	
// This code is contributed by aj_36 
?> 
