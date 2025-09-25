// JavaScript for Dark Mode Toggle
const themeToggleButton = document.getElementById('theme-toggle');

// Function to toggle dark mode on the website
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Update button text based on theme
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        themeToggleButton.textContent = 'Switch to Dark Mode';
    }
});

// JavaScript for Contact Form Validation
const contactForm = document.getElementById('contact-form');

// Validate form fields when the form is submitted
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission to validate it first

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate name
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate message
    if (message === '') {
        alert('Please enter a message.');
        return;
    }

    // If all validations pass, simulate a successful form submission
    alert('Form submitted successfully!');
    contactForm.reset(); // Reset the form fields
});
