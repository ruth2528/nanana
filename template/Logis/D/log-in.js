const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupLink = document.getElementById("signupLink");

    // Login Form Submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        // Here you might send the data to your backend for user authentication
        // For simplicity, let's just display a message
        message.textContent = `Logged in with Username: ${username}`;
        loginForm.reset(); // Reset the form after submission
    });

    // Redirect to Signup Page when "Sign Up" link is clicked
    signupLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Redirect to the signup page
        window.location.href = "signup.html";
    });
});