$(document).ready(function() {
    // Event handler for when .konten1 is clicked
    $('.konten1').click(function() {
        // Get the value of the clicked button
        var isbn = $(this).data('isbn'); // Assuming 'isbn' is a data attribute containing the ISBN

        // Redirect to kategori.html with the selected ISBN as a query parameter
        window.location.href = 'kategori.html?dwl=' + encodeURIComponent(isbn);
    });

    // Extract query parameters from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var isbn = urlParams.get('isbn'); // Assuming 'isbn' is the parameter name

    // Check if isbn is null
    if (isbn === null) {
        console.error('Error: ISBN parameter is null.');
        console.log('URL:', window.location.href);
        // Handle the situation where ISBN is null, for example, display a message or redirect
    } else {
        console.log('ISBN:', isbn); // Log the retrieved ISBN for debugging

        // Fetch additional data using AJAX
        $.ajax({
            url: 'http://localhost/STT-Perpus/coba/be/dwl.php', // API
            type: 'GET',
            data: { isbn: isbn }, // Pass the ISBN as a parameter to the server
            dataType: 'json',
            success: function(response) {
                if (response.status === 200) {
                    var filteredData = response.body.data.filter(book => book.isbn_bk === isbn);
                    
                    // Display the filtered data
                    displayBookData(filteredData);
                } else {
                    console.error('Error:', response.msg);
                }
            },
            error: function(xhr, status, error) {
                console.error('AJAX Error:', status, error);
            }
        });
    }

    function displayBookData(bookData) {
        // Build the HTML content based on the server response
        var dwlProduk = $('#dwl-produk');
        dwlProduk.empty();

        // Sort the bookData array by the 'isbn_bk' property
        bookData.sort((a, b) => a.isbn_bk.localeCompare(b.isbn_bk));

        for (var i = 0; i < Math.min(bookData.length, 10); i++) {
            var book = bookData[i];
            var htmlContent = `
                <div class="row justify-content-center row-produk">
                    <div class="col konten1 d-flex justify-content-center">
                        <img src="img/${book.cover_bk}.jpg" alt="">
                    </div>
                    <div class="col konten1">
                        <p><strong>${book.judul_bk}</strong><br>${book.nama_kategori} <br><br><br> 
                            <strong>Sinopsis:</strong><br>${book.sinop_bk}
                        </p>
                    </div>
                </div>
                <div class="row justify-content-center row-produk">
                    <div class="col konten1 d-flex justify-content-center">
                    </div>
                    <div class="col konten1 col-download">
                        <button type="button" class="btn btn-dark"><strong>Download</strong></button>
                    </div>
                </div>`;

            // Append the HTML content to the #dwl-produk element
            dwlProduk.html(htmlContent);
        }
    }
});
