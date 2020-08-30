<?php 
// https://www.geeksforgeeks.org/given-two-strings-find-first-string-subsequence-second/
// Iterative PHP program to check if 
// a string is subsequence of another 
// string 

// Returns true if str1[] is 
// a subsequence of str2[]. 
// m is length of str1 and n 
// is length of str2 
function isSubSequence($str1, $str2, 
							$m, $n) 
{ 
	// For index of str1 
	$j = 0; 
	
	// Traverse str2 and str1, 
	// and compare current 
	// character of str2 with 
	// first unmatched char of 
	// str1, if matched then 
	// move ahead in str1 
	for($i = 0; $i < $n and
		$j < $m; $i++) 
		if ($str1[$j] == $str2[$i]) 
			$j++; 
	
	// If all characters of 
	// str1 were found in str2 
	return ($j == $m); 
} 

	// Driver Code 
	$str1 = "gksrek"; 
	$str2 = "geeksforgeeks"; 
	$m = strlen($str1); 
	$n = strlen($str2); 
	
	if(isSubSequence($str1, $str2, $m, $n)) 
		echo "Yes "; 
	else
		echo "No"; 

// This code is contributed by anuj_67. 
?> 
