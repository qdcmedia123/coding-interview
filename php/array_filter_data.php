<?php

//echo "<h1> Menory At Starting ". memory_get_usage()."</h1>";

$records = array(
    array(
        'id' => 2,
        'first_name' => 'John',
        'last_name' => 'Doe',
        'date' => '2017-09-13',
        'category' => 'Laptops & Notebooks',
    ),
    array(
        'id' => 4,
        'first_name' => 'Sally',
        'last_name' => 'Smith',
        'date' => '2017-09-19',
        'category' => 'Stationery',
    ),
    array(
        'id' => 1,
        'first_name' => 'Jane',
        'last_name' => 'Jones',
        'date' => '2017-09-11',
        'category' => 'Laptops & Notebooks',
    ),
    array(
        'id' => 3,
        'first_name' => 'Peter',
        'last_name' => 'Doe',
        'date' => '2017-09-19',
        'category' => 'Stationery',
    )
    ,
    array(
        'id' => 78,
        'first_name' => 'Mac Book',
        'last_name' => 'Doe',
        'date' => '2017-09-20',
        'category' => 'Laptops & Notebooks',
    ),
    array(
        'id' => 79,
        'first_name' => 'Mac Book Pro',
        'last_name' => 'Smith',
        'date' => '2017-09-21',
        'category' => 'Stationery',
    ),
    array(
        'id' => 80,
        'first_name' => 'Mac Book Retina Display',
        'last_name' => 'Jones',
        'date' => '2017-09-19',
        'category' => 'Laptops & Notebooks',
    ),
    array(
        'id' => 81,
        'first_name' => 'Dell Inspiron i3',
        'last_name' => 'Doe',
        'date' => '2017-09-29',
        'category' => 'Laptops',
    )
);



/*
function getSum($records)
{
	 return array_sum(array_map(function($item) { 
    return $item['id']; 
}, $records));

}
*/
//echo getSum($records);

// Get all string implode user name 
//echo getSum($records);

/* Get the name imploded */
function GetAllName($records)
{
	return implode(',',array_map(function($items)
	{
		return $items['first_name'];
	}, $records));
}

/* Sum value of id */
function SumValueOfId($records)
{
	return array_sum(array_map(function($items){
		return $items['id'];
	}, $records));
}

//echo GetAllName($records);

//echo SumValueOfId($records);

// Get the largest number from array
function GetMaxRecord($records)
{
	return max(array_map(function($items){
		
		return $items;
	}, $records));
}

function GetMinRecord($records)
{
	return min(array_map(function($items){
		
	return $items;
	
	},$records));
}
//echo "<pre>";
//print_R(SortByPrice($records));
//echo "</pre>"; 
 
//echo "<pre>";
//print_R(GetMinRecord($records));
//echo "</pre>"; 

function ProductByDESC($data, $method)
{
	return ($data["id"] >= $method["id"]) ? -1 : 1;
}

//usort($records, "HighToLowFetch");

//echo "<pre>";
//print_R($records);
//echo "</pre>"; 

function ProductByASC($data, $method)
{
	return ($data["id"] <= $method["id"]) ? -1: 1;
}



//usort($records, "ProductByASC");
//echo "<pre>";
//print_R($records);
//echo "</pre>"; 
function ProudctByDateASC($data, $method)
{
	return ($data["date"] <= $method["date"]) ? -1: 1;
}


//usort($records, "ProudctByDateASC");
//echo "<pre>";
//print_R($records);
//echo "</pre>"; 

/* Fetch prdouct by price range */
//echo "<pre>";
//print_R(get_defined_functions ());
//echo "</pre>"; 
function ProductByCategory($records,$index, $indexvalue)
{
	
	// Set the variable 
	$data = array_filter (
	array_map(function($items) use (&$index,&$indexvalue)
	{
		
		// Set the index and index value 
		if(isset($items[$index]) && $items[$index] == $indexvalue)
		{
			// Return the array column
			return $items;
		}
		
	}, $records));
	
	// Sort the array
	sort($data);
	
	// Return the that 
	return $data;
}

/* This is new file*/

//usort($records, "ProductByCategory");
//echo "<pre>";
//$var = ProductByCategory($records, 'category','Stationery');
//print_r($var);
//echo "</pre>";
//echo "<h1> At the end of script memory usage ". memory_get_usage()."</h1>";
// Here there is

?>