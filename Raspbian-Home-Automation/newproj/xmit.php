<?php

//exec('sudo python /var/www/python/low.py');  
//	$in = array[(3,12,3,0,0,0,0,0,0,0)
	  

$q = $_REQUEST["q"];
 //exec('sudo python /var/www/pythonSPI/sendbytes.py',$in, $out);
 
 $result = shell_exec('sudo python /var/www/pythonSPI/sendbytes.py ' .  json_encode($q));

// Execute the python script with the JSON data
 
// Decode the result 
 

// This will contain: array('status' => 'Yes!')
var_dump( $result );
 
?>
 