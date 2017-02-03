<?php
    include_once('/db.php');
    echo "made it";

    $email = $_POST['email'];
    $name = $_POST['name'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $company = $_POST['company'];
    $phone = $_POST['phone'];
    $description = $_POST['description'];

    if(mysql_query("INSERT INTO user VALUES('$email', '$name', '$username', '$password', '$company', '$phone', '$description')"))
        echo "Successfully Inserted";
        else
        echo "Insertion Failed";
?>