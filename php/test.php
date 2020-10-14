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
        'id' => 81,
        'first_name' => 'Mac Book Retina Display',
        'last_name' => 'Jones',
        'date' => '2017-09-19',
        'category' => 'Laptops & Notebooks',
    ),
    array(
        'id' => 80,
        'first_name' => 'Dell Inspiron i3',
        'last_name' => 'Doe',
        'date' => '2017-09-29',
        'category' => 'Laptops',
    )
);

function GetAllName($records)
{
    return implode(',', array_map(function($items) {
        return $items['first_name'];
    }, $records));
}

// Calculating sum of array 

function sumValudOfId($records) {
    return array_sum(array_map(function($items) {
        return $items['id'];
    }, $records));
}

//echo sumValudOfId($records);

// Get the largest number of array 
function GetMaxRecords($records) {
    return max(array_map(function($items) {
        return $items;
    }, $records));
}

// Filtering produt 

function productByDesc($data, $method) {
    return $data['id'] <= $method["id"] ? -1 : 1;
}

function ProductByCategory($records, $index, $indexvalue) {
    $data = array_filter(array_map(function($items) use (&$index, &$indexvalue) {
        if(isset($items[$index]) && $items[$index] === $indexvalue) {
            return $items;
        }
    }, $records));

    // Sort the data
     sort($data);

     // Return data 
     return $data;
}



echo "<pre>";
$var = ProductByCategory($records, 'category','Stationery');
print_r($var);
echo "</pre>";
echo "<h1> At the end of script memory usage ". memory_get_usage()."</h1>";
