<?php 



function maxProfit($price, $n, $k) {
 $profit[$k + 1][$n + 1] = 0;

 for($i = 0; $i <= $k; $i++)
 	$profit[$i][0] = 0;

 for($j = 0; $j <=$n; $j++)
 	$profit[0][$j] = 0;

 $prevDiff = NULL;
 for($i = 1; $i <= $k; $i++) {
 	for($j = 1; $j < $n; $j++){
 		$prevDiff = max($prevDiff, $profit[$i -1][$j-1]- $price[$j -1]);
 		$profit[$i][$j] = max($profit[$i][$j -1], $price[$j] + $prevDiff);
 	}
 }
 return $profit[$k][$n-1];
}

// Driver Code 
    $k = 2; 
    $price = array(5, 11, 3, 50,60, 90); 
    $n = sizeof($price); 
/*    echo "Maximum profit is: "
         , maxProfit($price, $n, $k); */
       print_R(maxProfit($price, $n, $k));
  
// This code is contributed by nitin mittal 