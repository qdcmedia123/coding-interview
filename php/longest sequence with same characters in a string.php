<?php

function getLength($str)
{
  if (''===$str) return 0;
  preg_match_all('!(.)\\1*!', $str, $m);
  
  return max(array_map('strlen', $m[0]));
}


$str1 = 'aabbcccc'; 
$str2 = 'aabbccccaaaaa';
echo getLength($str1); //will get 4
echo getLength($str2); //will get 



function getLongenstString($str)
{
  if (''===$str) return 0;
  preg_match_all('!(.)\\1*!', $str, $m);
  
  return max($m[0]);
}


$str1 = 'aabbcccc'; 
$str2 = 'aabbccccaaaaa';

print_r( getLength($str1)); //will get 4
//echo getLength($str2); //will get 
