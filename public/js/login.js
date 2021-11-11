const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log(email, password)

    if (email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
