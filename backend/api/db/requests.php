<?php

class dbRequests {
  private $con;

  public function __construct() {

    $config = include('../config/dev.php');

    $this->$con= new mysqli(
      $config['dbHost'],
      $config['dbUser'],
      $config['dbPassword'],
      $config['dbName']
    );

    if (mysqli_connect_errno()) {
        printf("Connection failed: %s\n", mysqli_connect_error());
        exit();
    }
  }

  public function insertEmail($email) {

    $query = 'INSERT INTO email_list (email) VALUES ("{$email}")';
    echo $query;

    if ($this->$con->query($query)) {

      printf("%d Row successfully inserted into the database!\n ", $this->$con->affected_rows);
    } else {

      printf("Error: %s\n", $this->$con->sqlstate);
    }

    $this->$con->close();
  }
}


?>
