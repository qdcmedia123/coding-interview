<?php

//https://stackoverflow.com/questions/2803803/how-to-get-length-of-the-longest-sequence-with-same-characters-in-a-string
// https://stackoverflow.com/questions/2803803/how-to-get-length-of-the-longest-sequence-with-same-characters-in-a-string

//https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript?rq=1

$string = 'aaabababbbbbaaaaabbbbbbbbaa';

$count = strlen($string);
if ($count > 0)
{

    $mostFrequentChar = $curChar = $string[0];
    $maxFreq = $curFreq = 1;
    for ($i = 1; $i < $count; $i++)
    {
        if ($string[$i] == $curChar)
        {
            $curFreq++;
            if ($curFreq > $maxFreq)
            {
                $mostFrequentChar = $curChar;
                $maxFreq = $curFreq;
            }
        }
        else
        {
            $curChar = $string[$i];
            $curFreq = 1;
        }
    }

}

echo $mostFrequentChar . ' ' . $maxFreq;


/*
 * Another way 
 * */
 
//$string =  "aaabababbbbbaaaaabbbbbbbbaa";

//preg_match_all('#(\w)\1+#',$string,$matches);

//echo "<pre>";
//print_r($matches{0});
//echo "</pre>";








