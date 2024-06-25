<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $interests = isset($_POST['interest']) ? implode(', ', $_POST['interest']) : '';
    $otherInterest = $_POST['otherInterest'];
    $skills = isset($_POST['skills']) ? implode(', ', $_POST['skills']) : '';
    $country = $_POST['country'];

    $stmt = $conn->prepare("INSERT INTO contacts (name, phone, email, gender, interest, otherInterest, skills, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $name, $phone, $email, $gender, $interests, $otherInterest, $skills, $country);

    if ($stmt->execute()) {
        header("Location: thankyou.php");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
