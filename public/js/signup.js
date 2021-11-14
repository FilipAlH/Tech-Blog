const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

    if (response.ok) {
        const result = await fetch('/', {
            method: 'GET'
        });
        if (result.ok) {
            document.location.pathname = '/'
        } else {
            console.log('failed to retrieve homepage')
        }
    } else {
        alert('Failed to log in');
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);