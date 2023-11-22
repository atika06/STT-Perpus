<?php 
$response = [
    "status" => 200,
    "msg" => "Search successful",
    "body" => [
        "data" => $searchResults
    ]
];

$koneksi = mysqli_connect("localhost", "root", "", "e-perpus");

// Get the search term from the AJAX request
$searchTerm = mysqli_real_escape_string($koneksi, $_GET['searchTerm']); // Menggunakan $_GET['searchTerm']

// Perform a search query (replace with your actual query)
$query = "SELECT * FROM data_buku WHERE judul_bk LIKE '%$searchTerm%' OR sinop_bk LIKE '%$searchTerm%'";
$result = mysqli_query($koneksi, $query);

$searchResults = [];

if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        $searchResults[] = $row;
    }
}

echo json_encode($response);

mysqli_close($koneksi);
