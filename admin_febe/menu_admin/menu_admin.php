<?php
// Konfigurasi database
$host = "localhost";
$username = "root";
$password = "";
$database = "e-perpus";

// Koneksi ke database
$conn = new mysqli($host, $username, $password, $database);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Query untuk mengambil data dari tabel "data_buku"
$query = "SELECT * FROM data_buku";
$result = $conn->query($query);

// Mengambil data dari hasil query
$data_buku = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data_buku[] = $row;
    }
}

// Menutup koneksi database
$conn->close();

// Mengirim data sebagai respons JSON
header('Content-Type: application/json');
echo json_encode($data_buku);
?>
