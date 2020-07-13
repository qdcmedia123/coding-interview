<?php

//https://stackoverflow.com/questions/2803803/how-to-get-length-of-the-longest-sequence-with-same-characters-in-a-string
// https://stackoverflow.com/questions/2803803/how-to-get-length-of-the-longest-sequence-with-same-characters-in-a-string

//https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript?rq=1



function lcs($a, $b) {
    
    $aSub = substr($a, 0, strlen($a) - 1);
    $bSub = substr($b, 0, strlen($b) - 1);
    
    
    
    if(strlen($a) === 0 || strlen($b) === 0) 
    {
		return false;
	} else if(char_at($a,strlen($a)-1) === char_at($b,strlen($b)-1)) {
		
		  
		return lcs($aSub, $bSub) . char_at($a,strlen($a)-1);
		
	} else {
		
		
			$x = lcs($a, $bSub);
			$y = lcs($aSub, $b);
			
			return strlen($x) < strlen($y) ? $x : $y;
		}
    
}

function char_at($str, $pos)
{
  return $str{$pos};
}



function  Sortest($x, $y) {
	
	// Lendth 
	$m = strlen($x);
	$n = strlen($y);
	
	if($m === 0 || $n === 0) 
	
	{ return $m+$n;}
	
	if(char_at($a,strlen($a)-1) == char_at($b,strlen($b)-1)) {
		
			
	}
}

$a = 'ABAZDC';
$b = 'BACBAD';

echo Sortest($a, $b);




