<?php
$con=mysqli_connect("localhost","Database_Username","Your_Database_Password","my_db");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

mysqli_query($con,"INSERT INTO urlhistory (Urls)
VALUES ('Url'");

mysqli_close($con);
?>
