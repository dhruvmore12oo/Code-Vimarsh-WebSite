// JavaScript for Login/Register page (auth.js)

document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    console.log('loginSection:', loginSection);
    const registerSection = document.getElementById('register-section');
    console.log('registerSection:', registerSection);
    const showRegisterLink = document.getElementById('showRegister');
    console.log('showRegisterLink:', showRegisterLink);
    const showLoginLink = document.getElementById('showLogin');

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    const loginErrorMessage = document.getElementById('loginErrorMessage');
    const registerErrorMessage = document.getElementById('registerErrorMessage');

    // Function to show login form and hide registration form
    const showLoginForm = () => {
        loginSection.style.display = 'block';
        registerSection.style.display = 'none';
        loginErrorMessage.textContent = ''; // Clear messages
        registerErrorMessage.textContent = ''; // Clear messages
        loginForm.reset();
        registerForm.reset();
    };

    // Function to show registration form and hide login form
    const showRegisterForm = () => {
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
        loginErrorMessage.textContent = ''; // Clear messages
        registerErrorMessage.textContent = ''; // Clear messages
        loginForm.reset();
        registerForm.reset();
    };

    // Event listeners for toggling forms
    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            showRegisterForm();
        });
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            showLoginForm();
        });
    }

    // Handle Login Form Submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = loginForm['login-username'].value;
            const password = loginForm['login-password'].value;

            if (loginErrorMessage) {
                loginErrorMessage.textContent = ''; // Clear previous errors
            }

            // Client-side validation
            if (username.trim() === '' || password.trim() === '') {
                if (loginErrorMessage) {
                    loginErrorMessage.textContent = 'Please enter both username/email and password.';
                }
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password })
                });

                const data = await response.json();

                if (response.ok) {
                    alert(data.message); // For demonstration
                    window.location.href = 'dashboard.html';
                } else {
                    if (loginErrorMessage) {
                        loginErrorMessage.textContent = data.message || 'Login failed. Please try again.';
                    }
                }
            } catch (error) {
                console.error('Error during login:', error);
                if (loginErrorMessage) {
                    loginErrorMessage.textContent = 'An error occurred. Please try again later.';
                }
            }
        });
    }

    // Handle Register Form Submission
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = registerForm['register-username'].value.trim();
            const email = registerForm['register-email'].value.trim();
            const password = registerForm['register-password'].value;
            const confirmPassword = registerForm['confirm-password'].value;

            if (registerErrorMessage) {
                registerErrorMessage.textContent = ''; // Clear previous errors
            }

            // Client-side validation for registration
            if (username === '' || email === '' || password === '' || confirmPassword === '') {
                if (registerErrorMessage) {
                    registerErrorMessage.textContent = 'All fields are required.';
                }
                return;
            }
            if (password !== confirmPassword) {
                if (registerErrorMessage) {
                    registerErrorMessage.textContent = 'Passwords do not match.';
                }
                return;
            }
            if (password.length < 6) {
                if (registerErrorMessage) {
                    registerErrorMessage.textContent = 'Password must be at least 6 characters long.';
                }
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Registration successful! Please log in.');
                    showLoginForm(); // Switch back to login form after successful registration
                } else {
                    if (registerErrorMessage) {
                        registerErrorMessage.textContent = data.message || 'Registration failed. User might already exist.';
                    }
                }
            } catch (error) {
                console.error('Error during registration:', error);
                if (registerErrorMessage) {
                    registerErrorMessage.textContent = 'An error occurred during registration. Please try again later.';
                }
            }
        });
    }
});

