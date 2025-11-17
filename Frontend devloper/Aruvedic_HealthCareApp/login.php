<?php 
   include "db.php";

   $username = $_POST['username'];
   $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    if ( mysqli_num_rows($result)==1){
        $row = mysqli_query($conn, $sql);

        if (password_verify($password, $row['password'])) {
            //Redirect to quiz page
            header("Location: DoshaQuiz.html");
            exit();
        } else {
            echo "Invalid password.";
        }
    }