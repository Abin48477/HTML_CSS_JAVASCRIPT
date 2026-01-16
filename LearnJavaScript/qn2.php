<?php
// 1. Connect to database
$conn = mysqli_connect("localhost", "root", "", "college");

if (!$conn) {
    die("Database not connected");
}

// 2. Function to check username & password
function checkLogin($username, $password) {
    global $conn;

    $sql = "SELECT * FROM student 
            WHERE username='$username' 
            AND password='$password'";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        header("Location: dashboard.php");
        exit();
    } else {
        echo " Invalid username or password";
    }
}

// 3. When login button is clicked
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    checkLogin($username, $password);
}
?>

<!-- 4. Simple Login Form -->
<form method="post">
    <h2>Login</h2>

    <input type="text" name="username" placeholder="Username" required><br><br>

    <input type="password" name="password" placeholder="Password" required><br><br>

    <button type="submit" name="login">Login</button>
</form>
