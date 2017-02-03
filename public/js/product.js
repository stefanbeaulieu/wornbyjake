$(document).ready(function() {
  // Getting references to the name inout and user container, as well as the table body
  var nameInput = $("#product_name");
  var descriptionInput = $('#product_desc');
  var priceInput = $('#product_price');
  var image = $('#image1');
  

  var userContainer = $(".product-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an User
  $(document).on("click", "#btn-addproduct", handleUserFormSubmit);

  // Getting the intiial list of Users

  // A function to handle what happens when the form is submitted to create a new User
  function handleUserFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertUser function and passing in the value of the name input
    insertProduct({
      prod_name: nameInput.val().trim(),
      prod_desc: descriptionInput.val().trim(),
      // prod_cat: categoryInput.val().trim(),
      prod_price: priceInput.val().trim(),
      prod_image: image.val().trim(),
        
    });
  }

  // A function for creating an user. Calls getUsers upon completion
  function insertProduct(userData) {
  $.ajax({
   type: 'POST',
   url: '/api/products',
   data: JSON.stringify(userData), 
   success: function(data) { alert('data: ' + data); },
   contentType: "application/json",
   dataType: 'json'
});
      
  }

  function getTodos() {
    $.get("/api/products", function(data) {
      console.log("Todos", data);
      todos = data;
      initializeRows();
    });
  }




});

