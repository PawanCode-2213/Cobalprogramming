
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector(".nav-links");
    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");
    const navLinks = document.querySelectorAll(".nav-links a");

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

    // Add event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener("click", hideMenu);
    });
});



// About US section JSON


    document.addEventListener('DOMContentLoaded', function () {
        const collapsibles = document.querySelectorAll('.collapsible');
        collapsibles.forEach(button => {
            button.addEventListener('click', function () {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        });
    });

    // FAQ Selection

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                button.classList.toggle('active');
    
                if (button.classList.contains('active')) {
                    answer.style.display = 'block';
                } else {
                    answer.style.display = 'none';
                }
            });
        });
    });
    
    //Form Submission JS

// jQuery document ready function
jQuery(document).ready(function($) {

    // Handling main contact form submission
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
            email: $('#email').val(),
            contact: phoneNumber,
            course: $('#course').val(),
            message: $('#message').val()
        };

        // Submit the form via AJAX to Formspree
        submitForm(formData, 'https://formspree.io/f/mqkrrjer');
    });

    // Handling subscription form submission
    $('#subscribeForm').on('submit', function(e) {
        e.preventDefault(); // Prevent form submission

        // Collect form data
        var formData = {
            email: $('#emailSubscribe').val()
        };

        // Submit the form via AJAX to Formspree
        submitForm(formData, 'https://formspree.io/f/mqkrrjer');
    });

    // Function to submit form data via AJAX
    function submitForm(formData, backendURL) {
        $.ajax({
            type: 'POST',
            url: backendURL,
            data: formData,
            dataType: 'json',
            success: function(response) {
                console.log('Form submitted successfully!', response);
                alert('Form submitted successfully! We will get back to you within 24 hours.');
                // Optionally clear the form after successful submission
                $('#myForm')[0].reset(); // Clear main contact form
                $('#subscribeForm')[0].reset(); // Clear subscription form
            },
            error: function(error) {
                console.error('Error submitting form:', error);
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

