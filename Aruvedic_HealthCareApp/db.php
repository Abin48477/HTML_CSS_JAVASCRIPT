<?php 
$conn = mysqli_connect("localhost", "root", "", "ayurvedic_healthcare");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}