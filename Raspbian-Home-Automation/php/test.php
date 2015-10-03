<?php

exec('sudo python /var/www/pythonSPI/mainex.py', $out);  

echo json_encode($out); 
?>
 