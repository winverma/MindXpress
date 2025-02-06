<?php
include 'db.php'; // Include the database connection

// SQL query to select all questions from the database
$sql = "SELECT * FROM questions"; 
$result = $conn->query($sql);

$questions = []; // Initialize an array to store the questions

// Check if any questions were returned
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $questions[] = $row; // Fetch each row and add it to the questions array
    }
}

// Return the questions as a JSON response
header('Content-Type: application/json'); // Set the content type to JSON
echo json_encode($questions); // Encode the questions array as JSON

$conn->close(); // Close the database connection
?>
