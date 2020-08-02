<?php 
// https://www.geeksforgeeks.org/length-smallest-sub-string-consisting-maximum-distinct-characters/
/* PHP program to find the length of the smallest 
substring consisting of maximum distinct characters */

$NO_OF_CHARS=256; 

// Find maximum distinct characters in any string 
function max_distinct_char($str, $n) 
{ 
	global $NO_OF_CHARS; 
	
	// Initialize all character's count with 0 
	$count = array_fill(0, $NO_OF_CHARS, 0); 
	
	// Increase the count in array if a character 
	// is found 
	for ($i = 0; $i < $n; $i++) 
		$count[ord($str[$i])]++; 
	
	$max_distinct = 0; 
	for ($i = 0; $i < $NO_OF_CHARS; $i++) 
		if ($count[$i] != 0)	 
			$max_distinct++;	 
	
	return $max_distinct; 
} 

function smallesteSubstr_maxDistictChar($str) 
{ 

	$n = strlen($str); // size of given string 

	// Find maximum distinct characters in any string 
	$max_distinct = max_distinct_char($str, $n); 
	$minl = $n; // result 
	
	// Brute force approach to find all substrings 
	for ($i = 0 ; $i < $n ; $i++) 
	{ 
		for ($j = 0; $j < $n; $j++) 
		{ 
			$subs = substr($str, $i, $j); 
			$subs_lenght = strlen($subs); 
			$sub_distinct_char = max_distinct_char($subs, $subs_lenght); 
			
			// We have to check here both conditions together 
			// 1. substring's distinct characters is equal 
			// to maximum distinct characters 
			// 2. substing's length should be minimum 
			if ($subs_lenght < $minl && 
				$max_distinct == $sub_distinct_char) 
			{ 
				$minl = $subs_lenght; 
			} 
		} 
	} 
	return $minl; 
} 

/* Driver code */

	// Input String 
	$str = "AABBBCBB"; 
	
	$len = smallesteSubstr_maxDistictChar($str); 
	echo " The length of the smallest substring"
			." consisting of maximum distinct characters : ".$len; 

// This coe is contributed by mits 
?> 
