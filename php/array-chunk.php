<?php

$array_chunkdata = array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25);
$chunk  = array_chunk($array_chunkdata,5);
$rev_counter = 2;

function for_chunk($chunk_data){

    echo "<td><table>";

      foreach($chunk_data as $key => $chunk_value)
      {
        echo "<tr><td>";
        echo $chunk_value;
        echo "</td></tr>";
      }
      echo "</table></td>";   

}

foreach($chunk as $key => $chunk_data)
{
    if($rev_counter%2==0)
    {   
      for_chunk($chunk_data);
    }
    else
    {
      $chunk_data =  array_reverse($chunk_data);
      
      for_chunk($chunk_data);
     
    } 
  $rev_counter++;
}
?> 
</tr>
</table>