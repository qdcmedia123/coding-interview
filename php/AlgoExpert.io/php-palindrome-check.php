<?php 
// https://www.geeksforgeeks.org/php-palindrome-check/
// PHP code to check for Palindrome string in PHP 
// Recursive way using substr() 
function Palindrome($string){ 
      
    // Base codition to end the recursive process 
    if ((strlen($string) == 1) || (strlen($string) == 0)){ 
        echo "Palindrome"; 
    } 
  
    else{ 
          
        // First character is compared with the last one 
        if (substr($string,0,1) == substr($string,(strlen($string) - 1),1)){ 
              
            // Checked letters are discarded and passed for next call 
            return Palindrome(substr($string,1,strlen($string) -2)); 
        } 
        else{  
            echo " Not a Palindrome"; } 
    } 
} 
  
$string = "MALAYALAM"; 
Palindrome($string); 
?>   