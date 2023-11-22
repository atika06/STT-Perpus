<?php
$respon = [
    "status" => 200,
    "msg" => "",
    "body" => [
        "data" => []
    ]
];

$koneksi = mysqli_connect("localhost", "root", "", "e-perpus");
$query = mysqli_query($koneksi, "SELECT * FROM data_buku");

if ($query) {
    $respon['msg'] = "Proses berhasil";

    while ($row = mysqli_fetch_assoc($query)) {
        $bookData = [
            "isbn_bk" => $row['isbn_bk'],
            "judul_bk" => $row['judul_bk'],
            "nama_kategori" => $row['nama_kategori'],
            "penulis_bk" => $row['penulis_bk'],
            "sinop_bk" => $row['sinop_bk'],
            "cover_bk" => $row['cover_bk']
        ];

        $respon['body']['data'][] = $bookData;
    }
} else {
    $respon['status'] = 401;
    $respon['msg'] = "Proses gagal, ada masalah di database";
}

echo json_encode($respon);
?>
