
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector(".nav-links");
    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");

    function showMenu() {
        navMenu.classList.add("show");
        menuToggle.style.display = "none";
        menuClose.style.display = "block";
    }

    function hideMenu() {
        navMenu.classList.remove("show");
        menuToggle.style.display = "block";
        menuClose.style.display = "none";
    }

    menuToggle.addEventListener("click", showMenu);
    menuClose.addEventListener("click", hideMenu);
});









$(document).ready(function() {
    // Handling main contact form
    $('#myForm').on('submit', function(e) {
        e.preventDefault(); // Prevent form submission
        
        // Validate phone number
        var phoneNumber = $('#contact').val().trim();
        if (!isValidPhoneNumber(phoneNumber)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // Collect form data
        var formData = {
            name: $('#name').val(),
            email: $('#emailMain').val(),
            contact: phoneNumber, // Use the validated phone number
            course: $('#course').val(),
            message: $('#message').val()
        };

        // Submit the form via AJAX to Formspree
        submitForm(formData, 'https://formspree.io/f/mqkrrjer'); // Replace with your actual Formspree endpoint
    });

    // Handling subscription form
    $('#subscribeForm').on('submit', function(e) {
        e.preventDefault(); // Prevent form submission

        // Collect form data
        var formData = {
            email: $('#emailSubscribe').val()
        };

        // Submit the form via AJAX to Formspree
        submitForm(formData, 'https://formspree.io/f/mqkrrjer'); // Replace with your actual Formspree endpoint
    });

    // Function to submit form data via AJAX
    function submitForm(formData, backendURL) {
        $.ajax({
            type: 'POST',
            url: backendURL,
            data: formData,
            dataType: 'json',
            success: function(response) {
                alert('Form submitted successfully!');
                // Optionally clear the form after successful submission
                $('#myForm')[0].reset(); // Clear main contact form
                $('#subscribeForm')[0].reset(); // Clear subscription form
            },
            error: function(error) {
                alert('Error submitting form. Please try again later.');
            }
        });
    }

    // Function to validate phone number format
    function isValidPhoneNumber(phone) {
        var phoneRegex = /^[0-9]{10}$/; // 10 digits only
        return phoneRegex.test(phone);
    }
});

