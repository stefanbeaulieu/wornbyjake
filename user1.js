$(document).ready(function() {
    // Getting references to the name inout and user container, as well as the table body
    var nameInput = $("#name");
    var usernameInput = $('#username');
    var emailInput = $('#email');
    var passInput = $('#password');
    var companyInput = $('#company');
    var phoneInput = $('#phone');
    var descInput = $('#description')


    var userContainer = $(".user-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an User
    $('#btn-signup').on("click", handleUserFormSubmit);
    $(document).on("click", ".delete-user", handleDeleteButtonPress);

    // Getting the intiial list of Users
    getUsers();

    // A function to handle what happens when the form is submitted to create a new User
    function handleUserFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!nameInput.val().trim().trim()) {
            return;
        }
        // Calling the upsertUser function and passing in the value of the name input
        upsertUser({
            name: nameInput.val().trim(),
            username: usernameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passInput.val().trim(),
            company_name: companyInput.val().trim(),
            phone_number: phoneInput.val().trim(),
            profile_desc: descInput.val().trim()

        });
    }

    // A function for creating an user. Calls getUsers upon completion
    function upsertUser(userData) {
        $.post("/api/users", userData)
            .then(getUsers);
    }

    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
        var listItemData = $(this).parent("td").parent("tr").data("user");
        var id = listItemData.id;
        $.ajax({
                method: "DELETE",
                url: "/api/users/" + id
            })
            .done(getUsers);
    }
});