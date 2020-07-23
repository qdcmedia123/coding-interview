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
            $prevDiff = max($prevDiff, $profit[$i - 1][$j - 1] - $price[$j - 1]); 
            $profit[$i][$j] = max($profit[$i][$j - 1], $price[$j] + $prevDiff); 
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





<?php  
// PHP program to print a given 
// matrix in spiral form 
$R = 3; 
$C = 6; 
  
function spiralPrint($m, $n, &$a) 
{ 
    $k = 0; 
    $l = 0; 
  
    /* $k - starting row index 
        $m - ending row index 
        $l - starting column index 
        $n - ending column index 
        $i - iterator 
    */
  
    while ($k < $m && $l < $n) 
    { 
        /* Print the first row from 
           the remaining rows */
        for ($i = $l; $i < $n; ++$i) 
        { 
            echo $a[$k][$i] . " "; 
        } 
        $k++; 
  
        /* Print the last column  
        from the remaining columns */
        for ($i = $k; $i < $m; ++$i) 
        { 
            echo $a[$i][$n - 1] . " "; 
        } 
        $n--; 
  
        /* Print the last row from 
           the remaining rows */
        if ($k < $m) 
        { 
            for ($i = $n - 1; $i >= $l; --$i) 
            { 
                echo $a[$m - 1][$i] . " "; 
            } 
            $m--; 
        } 
  
        /* Print the first column from 
           the remaining columns */
        if ($l < $n) 
        { 
            for ($i = $m - 1; $i >= $k; --$i) 
            { 
                echo $a[$i][$l] . " "; 
            } 
            $l++;  
        }      
    } 
} 
  
// Driver code 
$a = array(array(1, 2, 3, 4, 5, 6), 
           array(7, 8, 9, 10, 11, 12), 
           array(13, 14, 15, 16, 17, 18)); 
  
spiralPrint($R, $C, $a);  //1 2 3 4 5 6 12 18 17 16 15 14 13 7 8 9 10 11
  
// This code is contributed 
// by ChitraNayal 
// 
?> 


