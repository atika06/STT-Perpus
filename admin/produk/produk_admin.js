$(document).ready(function () {
  var backendURL = 'http://localhost/oop/perpus/admin/produk/produk_admin.php';

  $('form').submit(function (event) {
    event.preventDefault();

    var cover_bk = $('#cover').val();
    var judul_bk = $('#judul').val();
    var isbn_bk = $('#isbn').val();
    var nama_kategori = $('#kategori').val();
    var sinop_bk = $('#sinopsis').val();
    var file_bk = $('#file').val();

    $.ajax({
      url: backendURL,
      type: 'POST',
      data: {
        cover_bk: cover_bk,
        judul_bk: judul_bk,
        isbn_bk: isbn_bk,
        nama_kategori: nama_kategori,
        sinop_bk: sinop_bk,
        file_bk: file_bk,
      },
      success: function (data) {
        // Check if the response is valid (modify this based on your expected response)
        if (data && data.success) {
          alert('Data successfully submitted.');
        } else {
          alert('Unexpected response from the server.');
        }
      },
      error: function (xhr, status, error) {
        console.log('Error: ' + error);
        // Additional error handling can be added here
        alert('Failed to submit data. Check the console for details.');
      },
    });
  });
});
