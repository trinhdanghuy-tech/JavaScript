const btnLogin = document.querySelector('#login');

const username = "hoidanit@gmail.com";
const password = 123456;

btnLogin.addEventListener('click', function() {
    const inputUsername = document.querySelector('.username').value;
    const inputPassword = document.querySelector('.password').value;

    if (inputUsername === username && Number(inputPassword) === password) {
        alert('Login successful!');
        // Redirect to another page or perform any other action
        window.location.href = 'success.html'; // Example redirection
    } else {
        alert('Invalid username or password.');
    }
});