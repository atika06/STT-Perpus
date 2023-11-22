        $(document).ready(function () {
            $('.konten1').click(function() {
                // Get the value of the clicked button
                var isbn = $(this).data('isbn'); // Assuming 'isbn' is a data attribute containing the ISBN
        
                // Redirect to kategori.html with the selected ISBN as a query parameter
                window.location.href = 'kategori.html?isbn=' + encodeURIComponent(isbn);
            });
            // Function to fetch book details using AJAX
            function fetchBookDetails(isbn) {
                $.ajax({
                    type: 'GET',
                    url: 'getBookDetails.php',
                    data: {isbn: isbn},
                    dataType: 'json',
                    success: function (response) {
                        // Update the HTML content with the fetched details
                        if (response.status === 200) {
                            $('#bookDetails').html(response.body.data[0].judul_bk);  // Update with the desired book detail
                        } else {
                            alert('Error fetching book details: ' + response.msg);
                        }
                    },
                    error: function () {
                        alert('Error fetching book details.');
                    }
                });
            }

            // Extract ISBN from the URL
            var urlParams = new URLSearchParams(window.location.search);
            var isbn = urlParams.get('isbn');

            // Fetch book details based on the extracted ISBN
            if (isbn) {
                fetchBookDetails(isbn);
            }
        });