$(document).ready(function () {
  // URL backend.php disesuaikan dengan lokasi penyimpanan file backend.php
  var backendURL = 'http://localhost/oop/perpus/admin/menu_admin/menu_admin.php';

  // Menggunakan jQuery AJAX untuk mengambil data dari backend
  $.ajax({
    url: backendURL,
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      // Menyisipkan data ke dalam tabel HTML
      var tableBody = $('#table-body');
      $.each(data, function (index, book) {
        var row =
          '<tr>' +
          '<td>' +
          (index + 1) +
          '</td>' +
          '<td><img src="../file/img/' +
          book.cover_bk +
          '" style="height: 105px;"></td>' +
          '<td>' +
          book.isbn_bk +
          '</td>' +
          '<td>' +
          book.judul_bk +
          '</td>' +
          '<td>' +
          book.nama_kategori +
          '</td>' +
          '<td>' +
          book.penulis_bk +
          '</td>' +
          '<td>' +
          book.sinop_bk +
          '</td>' +
          '<td>' +
          book.file_bk +
          '</td>' +
          '<td>' +
          book.jml_dwn_bk +
          '</td>' +
          '<td>' +
          '<a href="edit_admin.html"><i class="bi bi-pencil-fill"></i></a>' +
          '<i class="bi bi-trash-fill" style="color: red;"></i>' +
          '</td>' +
          '</tr>';
        tableBody.append(row);
      });
    },
    error: function (error) {
      console.log('Error: ' + error);
    },
  });
});
