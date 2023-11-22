$(document).ready(function () {
  // Function to fetch and display data in the table
  function fetchData() {
    $.ajax({
      type: 'GET',
      url: 'fetch_kategori.php', // Create a new PHP file to fetch data
      dataType: 'json',
      success: function (response) {
        if (response.status === 'success') {
          // Clear existing table data
          $('tbody').empty();

          // Iterate through the received data and append rows to the table
          $.each(response.data, function (index, item) {
            var row = '<tr>' + '<td>' + (index + 1) + '</td>' + '<td>' + item.nama_kategori + '</td>' + '<td>Aksi</td>' + '</tr>';
            $('tbody').append(row);
          });
        } else {
          console.error('Error fetching data: ' + response.message);
        }
      },
      error: function (xhr, status, error) {
        console.error('AJAX Error: ' + status + ' - ' + error);
      },
    });
  }

  // Call the fetchData function when the page loads
  fetchData();

  // Handle form submission
  $('#insert_kategori').submit(function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data
    var formData = $(this).serialize();

    // Send an AJAX request to the backend PHP script
    $.ajax({
      type: 'POST',
      url: 'insert_kategori.php',
      data: formData,
      dataType: 'json',
      success: function (response) {
        if (response.status === 'success') {
          // If the backend successfully processes the form, fetch and update data
          alert('Kategori berhasil ditambahkan: ' + response.nama_kategori);
          fetchData(); // Fetch and update data in the table
        } else {
          // If there's an error in the backend processing, display an error message
          alert('Error: ' + response.message);
        }
      },
      error: function (xhr, status, error) {
        // Handle AJAX errors here
        console.error('AJAX Error: ' + status + ' - ' + error);
      },
    });
  });
});
