// Wait until the page is fully loaded
window.addEventListener("load", function () {
    // Add 'loaded' class to body to hide the preloader
    document.body.classList.add('loaded');

    // Hide the preloader when the page is loaded
    const loader = document.getElementById('loader'); // Assuming your loader has an id of "loader"
    if (loader) {
        loader.style.display = 'none'; // Hide the preloader
    }

    // Initialize the typing animation
    new Typed("#typed-text", {
        strings: [
            "Welcome to My Portfolio",
            "I am Misheck Onduso",
            "A Passionate Computer Scientist",
            "Web Developer | Graphic Designer | ML Enthusiast",
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: "|",
    });

    // Add event listener to CTA button
    document.getElementById('cta-button').addEventListener('click', function () {
        const messageContainer = document.getElementById('message-container');
        messageContainer.style.display = 'block'; // Show the message
        messageContainer.innerHTML = '🎉 Surprise! Here is your surprise message! 🎉'; // Display surprise message
    });
});

// Smooth Scroll for internal links (anchors)
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href').slice(1); // Get target id without the "#"
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjusting for fixed header height
                behavior: 'smooth',
            });
        }
    });
});

// Contact Form Validation (if you have a contact form in the portfolio)
const contactForm = document.getElementById('contact-form'); // Assuming your contact form has an id of "contact-form"

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const nameInput = document.getElementById('name'); // Assuming you have an input with id "name"
        const emailInput = document.getElementById('email'); // Assuming you have an input with id "email"
        const messageInput = document.getElementById('message'); // Assuming you have a textarea with id "message"
        
        let valid = true;

        // Reset previous error messages
        const errorMessage = document.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }

        // Validate Name (must be filled)
        if (nameInput.value.trim() === '') {
            valid = false;
            nameInput.classList.add('error');
        } else {
            nameInput.classList.remove('error');
        }

        // Validate Email (must be a valid email format)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            valid = false;
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }

        // Validate Message (must be filled)
        if (messageInput.value.trim() === '') {
            valid = false;
            messageInput.classList.add('error');
        } else {
            messageInput.classList.remove('error');
        }

        // If the form is not valid, prevent submission
        if (!valid) {
            e.preventDefault();
            showErrorMessage('Please fill out all required fields correctly.');
        }
    });
}

// Function to show an error message in the contact form
function showErrorMessage(message) {
    const formContainer = document.querySelector('.contact-form-container'); // Assuming the form has a container div
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = message;
    formContainer.appendChild(errorDiv);
}

// Adding an "error" class to input fields when they are invalid
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim() !== '') {
            this.classList.remove('error');
        }
    });
});
