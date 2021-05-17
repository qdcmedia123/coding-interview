<?php
class Test {
    public $id = 'apple';
} 
$obj1 = new Test;
$obj2 = $obj1;
$obj2->id = 'orange';
$obj3 = &$obj1;
$obj3->id = 'orange';