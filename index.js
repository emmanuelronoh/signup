document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const createAccountBtn = document.getElementById('createAccountBtn');
    const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
    const signupForm = document.getElementById('signupForm');
    const togglePasswordBtn = document.getElementById('togglePassword');

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Redirect to login page or show login modal
            window.location.href = 'login.html'; // Example redirect
        });
    }

    if (createAccountBtn) {
        createAccountBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Redirect to create account page or show modal
            window.location.href = 'create-account.html'; // Example redirect
        });
    }

    if (forgotPasswordBtn) {
        forgotPasswordBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Redirect to forgot password page or show modal
            window.location.href = 'forgot-password.html'; // Example redirect
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(signupForm);
            const signupData = {
                email: formData.get('email'),
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                password: formData.get('password')
            };

            // Send signup data to server (simulated by JSON Server)
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            })
            .then(response => response.json())
            .then(data => {
                alert('Account created successfully.');
                console.log(data); // Log response from server (JSON Server)
                // Optionally redirect to login page or show success message
            })
            .catch(error => console.error('Error:', error));
        });
    }

    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', () => {
            const passwordInput = document.getElementById('password');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                togglePasswordBtn.textContent = 'Hide';
            } else {
                passwordInput.type = 'password';
                togglePasswordBtn.textContent = 'Show';
            }
        });
    }
});
