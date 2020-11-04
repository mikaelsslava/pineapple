<?php

  header('Access-Control-Allow-Origin: http://127.0.0.1:3000');
  header("Access-Control-Allow-Methods: POST");
  header("Access-Control-Allow-Headers: Content-Type, Authorization");
  header("Content-type:application/json");
  $data = json_decode(file_get_contents("php://input"));
  echo "received data";
  print_r($data);

?>
