<?php
function filter_by_value($array, $index, $value) {
	if(is_array($array) && count($array) > 0) {
		foreach(array_keys($array) as $key) {
			$tmp[$key] = $array[$key][$index];

			if($temp[$key] == $value) {
				$newArray[$key] = $array[$key];
			}
		}
	}
	return $newArray;
}