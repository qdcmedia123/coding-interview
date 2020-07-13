<?php


function MissingNumber() {
	
	
	$numbers = range(1, 100);

	unset($numbers[55]);
	unset($numbers[0]);
		// missing number 
	return array_diff(range(1,100), $numbers);
}




print_R( MissingNumber());
