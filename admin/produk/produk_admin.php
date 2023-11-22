<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "e-perpus";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$cover = isset($_POST['cover_bk']) ? $_POST['cover_bk'] : '';
$judul = isset($_POST['judul_bk']) ? $_POST['judul_bk'] : '';
$isbn = isset($_POST['isbn_bk']) ? $_POST['isbn_bk'] : '';
$kategori = isset($_POST['nama_kategori']) ? $_POST['nama_kategori'] : '';
$sinopsis = isset($_POST['sinop_bk']) ? $_POST['sinop_bk'] : '';
$file = isset($_POST['file_bk']) ? $_POST['file_bk'] : '';

$sql = "INSERT INTO data_buku (cover_bk, judul_bk, isbn_bk, nama_kategori, sinop_bk, file_bk) 
        VALUES ('$cover', '$judul', '$isbn', '$kategori', '$sinopsis', '$file')";

if ($conn->query($sql) === TRUE) {
    echo "Data berhasil ditambahkan";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
