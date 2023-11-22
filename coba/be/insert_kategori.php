<?php

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "e-perpus";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama_kategori = $_POST["nama_kategori"];

    $sql = "INSERT INTO data_buku (nama_kategori) VALUES ('$nama_kategori')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("status" => "success", "nama_kategori" => $nama_kategori));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error: " . $sql . "<br>" . $conn->error));
    }
} else {
    echo json_encode(array("status" => "error", "message" => "Invalid request method"));
}

$conn->close();

?>