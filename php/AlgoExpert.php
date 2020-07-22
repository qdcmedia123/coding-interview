<?php 
// PHP program to find out maximum 
// profit by buying and selling a  
// share atmost k times given stock 
// price of n days 
  
// Function to find out maximum 
// profit by buying & selling a  
// share atmost k times given  
// stock price of n days 
function maxProfit($price, $n, $k) 
{ 
      
    // table to store results  
    // of subproblems profit[t][i] 
    // stores maximum profit using 
    // atmost t transactions up to 
    // day i (including day i) 
    $profit[$k + 1][$n + 1]=0; 
  
    // For day 0, you can't  
    // earn money irrespective 
    // of how many times you trade 
    for ($i = 0; $i <= $k; $i++) 
        $profit[$i][0] = 0; 
  
    // profit is 0 if we don't 
    // do any transation 
    // (i.e. k =0) 
    for ($j = 0; $j <= $n; $j++) 
        $profit[0][$j] = 0; 
  
    // fill the table in 
    // bottom-up fashion 
    $prevDiff = NULL; 
    for ($i = 1; $i <= $k; $i++) { 
        for ($j = 1; $j < $n; $j++) { 
            $prevDiff = max($prevDiff, $profit[$i - 1][$j - 1] -  
                                               $price[$j - 1]); 
            $profit[$i][$j] = max($profit[$i][$j - 1], 
                              $price[$j] + $prevDiff); 
        } 
    } 
    return $profit[$k][$n - 1]; 
} 

 // Driver Code 
    $k = 2; 
    $price = array(5, 11, 3, 50,60, 90); 
    $n = sizeof($price); 
    echo "Maximum profit is: "
         , maxProfit($price, $n, $k); 
  
// This code is contributed by nitin mittal 
?> 

