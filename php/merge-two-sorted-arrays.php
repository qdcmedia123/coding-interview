<?php 
// PHP program to merge 
// two sorted arrays 

// Merge $arr1[0..$n1-1] and 
//	 $arr2[0..$n2-1] into 
//	 $arr3[0..$n1+$n2-1] 
function mergeArrays(&$arr1, &$arr2, 
					$n1, $n2, &$arr3) 
{ 
	$i = 0; 
	$j = 0; 
	$k = 0; 

	// Traverse both array 
	while ($i < $n1 && $j < $n2) 
	{ 
		// Check if current element 
		// of first array is smaller 
		// than current element of 
		// second array. If yes, 
		// store first array element 
		// and increment first array 
		// index. Otherwise do same 
		// with second array 
		if ($arr1[$i] < $arr2[$j]) 
			$arr3[$k++] = $arr1[$i++]; 
		else
			$arr3[$k++] = $arr2[$j++]; 
	} 

	// Store remaining elements 
	// of first array 
	while ($i < $n1) 
		$arr3[$k++] = $arr1[$i++]; 

	// Store remaining elements 
	// of second array 
	while ($j < $n2) 
		$arr3[$k++] = $arr2[$j++]; 
} 

// Driver code 
$arr1 = array(1, 3, 5, 7); 
$n1 = sizeof($arr1); 

$arr2 = array(2, 4, 6, 8); 
$n2 = sizeof($arr2); 

$arr3[$n1 + $n2] = array(); 
mergeArrays($arr1, $arr2, $n1, 
				$n2, $arr3); 

echo "Array after merging \n" ; 
for ($i = 0; $i < $n1 + $n2; $i++) 
	echo $arr3[$i] . " "; 

// This code is contributed 
// by ChitraNayal 
?> 
