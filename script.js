const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// You can add more JavaScript to handle form submissions and validations
document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("signUpName").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    console.log("Sign Up:", { name, email, password });
    // Add your sign-up logic here (e.g., send data to a server)
});

document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;
    console.log("Sign In:", { email, password });
    // Add your sign-in logic here (e.g., send data to a server)
});