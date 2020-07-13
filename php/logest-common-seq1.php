<?php

//https://stackoverflow.com/questions/2803803/how-to-get-length-of-the-longest-sequence-with-same-characters-in-a-string
// 

//https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript?rq=1

function getLongestSequence($str)
{
   $sl = strlen($str);
   $longest = 0;
   $string = '';
   
   for($i = 0; $i < $sl; )
   {
       $substr = substr($str, $i);
       
       echo  $substr."<br/>";
       
       $len = strspn($substr, $substr{0});
       
       if($len > $longest)
           $longest = $len;
       $i += $len;
       $string .= $str[$i];
   }

	
   return $longest;
}


//$str1 = 'aabbcccc'; 
//$str2 = 'aabbccccaaaaa';
//echo getLongestSequence($str1); //will get 4


function lcs($a, $b) {
    
    $aSub = substr($a, 0, strlen($a) - 1); // // ABAZD
    $bSub = substr($b, 0, strlen($b) - 1);
    
    
    
    if(strlen($a) === 0 || strlen($b) === 0) 
    {
		return false;
	} else if(char_at($a,strlen($a)-1) === char_at($b,strlen($b)-1)) {
		
		  
		return lcs($aSub, $bSub) . char_at($a,strlen($a)-1);
		
	} else {
		
			$x = lcs($a, $bSub);
			$y = lcs($aSub, $b);
			
			return strlen($x) > strlen($y) ? $x : $y;
		}
    
}

function char_at($str, $pos)
{
  return $str{$pos};
}




//$a = 'ABAZDC';
//$b = 'BACBAD';

//echo lcs($a, $b);



function lcs1 ($a, $b) {

	$aSub = substr($a, 0, strlen($a) -1); // ABAZD
	$bSub = substr($b, 0, strlen($b) - 1); // BACBA
	
	if(strlen($a) === 0 || strlen($b) === 0) {

		return false;

	} else if ($a{strlen($a) - 1} === $b{strlen($b) - 1}){

		return lcs($aSub, $bSub). $a{strlen($a) - 1};
	
	} else {

		$x = lcs($a, $bSub);
		$y = lcs($aSub, $b);

		return strlen($x) > strlen($y) ? $x : $y;
	}

}


// Finding shortest common sequences 

//Edit distance and LCS



