<?php
$host='localhost';
$user='user';
$password='password';
$dbname='dbname';

$sql_stud = "SELECT FirstName, LastName 
  FROM Students 
  JOIN Exams 
  WHERE Students.StudentId == Exams.StudentId and Result < 3 
  GROUP BY FirstName, LastName 
  HAVING count(Result) > 2
";

$sql_group = "SELECT Group
  FROM Students 
  JOIN Exams 
  WHERE Students.StudentId == Exams.StudentId and Result < 3 
  GROUP BY Group
  HAVING count(Students.StudentId) > 10
";



$connect = mysqli_connect($host, $user, $password, $dbname);

if (mysqli_connect_errno()){
  echo mysqli_connect_error();
} else {
  $result = mysqli_query($connect, $sql_stud);

  while ($row = mysqli_fetch_assoc($result)) {
    echo "<p>";
    var_export($row);
    echo "<p>";
  };
};

mysqli_close($connect);

?>