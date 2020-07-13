<?php 
// PHP program to split  
// an array into Two 
// equal sum subarrays 
  
// Returns split point.  
// If not possible,  
// then return -1. 
function findSplitPoint($arr, $n) 
{ 
    // traverse array element and  
    // compute sum of whole array 
    $leftSum = 0; 
    for ( $i = 0 ; $i < $n ; $i++) 
        $leftSum += $arr[$i]; 
  
    // again traverse array and 
    // compute right sum and also  
    // check left_sum equal to  
    // right sum or not 
    $rightSum = 0; 
    for ($i = $n - 1; $i >= 0; $i--) 
    { 
        // add current element 
        // to right_sum 
        $rightSum += $arr[$i]; 
  
        // exclude current element  
        // to the left_sum 
        $leftSum -= $arr[$i] ; 
  
        if ($rightSum == $leftSum) 
            return $i ; 
    } 
  
    // if it is not possible  
    // to split array into  
    // two parts. 
    return -1; 
} 
  
// Prints two parts after  
// finding split point  
// using findSplitPoint() 
function printTwoParts( $arr, $n) 
{ 
    $splitPoint = findSplitPoint($arr, $n); 
  
    if ($splitPoint == -1 or 
        $splitPoint == $n ) 
    { 
        echo "Not Possible" ; 
        return; 
    } 
    for ( $i = 0; $i < $n; $i++) 
    { 
        if($splitPoint == $i) 
            echo "\n"; 
        echo $arr[$i] , " " ; 
    } 
} 



// Driver Code 
$arr = array(1, 2, 3, 4, 5, 5); 
$n = count($arr); 
printTwoParts($arr, $n); 
  
// This code is contributed by anuj_67. 