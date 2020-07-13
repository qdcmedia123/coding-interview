<?php
function splitStrings($str) {
        
        return explode('=',trim($str));
 }


$strings = file('languages/ar.txt');

$GetAll = [];

for($i = 0; $i < count($strings); $i++) {

	$exploded = [];

	// explode the string 
	$exp = explode('=',$strings[$i]);

	for($j = 0; $j < count($exp); $j++) {

		$exploded[$j] = $exp[$j];
	}

	$GetAll[$i] = $exploded;

}
echo "<pre>";
print_R($GetAll);
echo "</pre>";

/*
<pre>Array
(
    [0] => Array
        (
            [0] => Repeat email
            [1] => كرر البريد الإلكتروني
        )

    [1] => Array
        (
            [0] => Email
            [1] => البريد الإلكتروني
        )

    [2] => Array
        (
            [0] => Account Details
            [1] => تفاصيل الحساب
        )

)
</pre>CSS Registration Form
*/