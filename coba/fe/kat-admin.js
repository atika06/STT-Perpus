$(document).ready(function () {
    // Add category button click event
    $("#addCategoryBtn").on("click", function () {
      var newCategory = $("#newCategory").val();

      // Check if the category is not empty
      if (newCategory.trim() !== "") {
        // Perform an Ajax request to the PHP script
        $.ajax({
          type: "POST",
          url: "http://localhost/STT-Perpus/coba/be/insert_kategori.php",
          data: { nama_kategori: newCategory }, // Use the correct field name for your PHP script
          dataType: "json", // Expect JSON response
          success: function (response) {
            if (response.status === "success") {
              // Update the category table on the right
              var newCategoryRow = "<tr>" +
                "<td>" + response.nama_kategori + ".</td>" +
                "<td>" + response.nama_kategori + "</td>" +
                "<td><i class='bi bi-trash-fill' style='color: red;'></i></td>" +
                "</tr>";

              $("#categoryTable tbody").append(newCategoryRow);

              // Clear the input field
              $("#newCategory").val("");
            } else {
              // Handle the error case
              console.log("Error:", response.message);
            }
          },
          error: function (error) {
            console.log("Error:", error);
          },
        });
      }
    });
  });