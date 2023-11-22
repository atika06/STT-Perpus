$(function () {
    $.ajax({
        type: 'GET',
        url: 'http://localhost/STT-Perpus/user/be/data.php',
        dataType: 'json',
        success: function (data) {
            if (data.status === 200) {
                var books = data.body.data;

                // Iterate through each book in the array
                $.each(books, function (index, book) {
                    var judul = book.judul_bk;
                    var cover = book.cover_bk;
                    var kategori = book.nama_kategori;
                    var truncatedSinop = book.sinop_bk.length > 100 ? book.sinop_bk.substring(0, 100) + "..." : book.sinop_bk;
                    // Append HTML content for each book
                    $('#daftar-isi').append(
                        '<div class="col-md-3 konten1 d-flex justify-content-center">' +
                        '<img src="img/' + cover + '" alt="">' +
                        '</div>' +
                        '<div class="col-md-3 konten1">' +
                        '<p><strong><a href="" style="color: inherit;text-decoration: none;">' + judul + '</a></strong><br>' + kategori + '<br><br><br>' + truncatedSinop + '</p>' +
                        '</div>'
                    );
                });
            } else {
                // Handle error case
                console.error("Error: " + data.msg);
            }
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error: " + status + " - " + error);
        }
    });
});
