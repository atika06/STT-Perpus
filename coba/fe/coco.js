$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/STT-Perpus/coba/be/co.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            if (response.status === 200) {
                displayBookData(response.body.data);
            } else {
                console.error('Error:', response.msg);
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', status, error);
        }
    });

    function displayBookData(bookData) {
        // Sort the bookData array by the 'nama_kategori' property
        // bookData.sort((a, b) => a.nama_kategori.localeCompare(b.nama_kategori));
    
        var homeFav = $('#home-fav');
    
        for (var i = 0; i < Math.min(bookData.length, 5); i++) {
            var book = bookData[i];
    
            var bookHtml = `
                <div class="col-lg-2 konten1 d-flex justify-content-around">
                    <a href="produk.html?dwl=${book.isbn_bk}" id="cov-bk">
                    <img class="img-fav" src="img/${book.cover_bk}" value="${book.isbn_bk}">
                    </a>
                </div>
               `;
    
            homeFav.append(bookHtml);
        }
    }
    $('#searchTerm').click(function() {
        // Get the value of the clicked button
        var cari = $(this).val();

        // Redirect to kategori.html with the selected category as a query parameter
        window.location.href = 'search.html?cari=' + encodeURIComponent(cari);
    });
    $('.btn-cat').click(function() {
        // Get the value of the clicked button
        var category = $(this).val();

        // Redirect to kategori.html with the selected category as a query parameter
        window.location.href = 'kategori.html?category=' + encodeURIComponent(category);
    });
    $('#cov-bk').click(function() {
        // Get the value of the clicked button
        var cover = $(this).val();

        // Redirect to kategori.html with the selected category as a query parameter
        window.location.href = 'produk.html?dwl=' + encodeURIComponent(cover);
    });
});
