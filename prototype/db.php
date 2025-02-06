<?php
// Database configuration
$servername = "localhost"; // Typically localhost for XAMPP
$username = "root";         // Default username for XAMPP
$password = "";             // Default password is empty for XAMPP
$dbname = "mindxpress"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: Set the character set to utf8mb4
$conn->set_charset("utf8mb4");
?>
