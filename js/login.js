const correctUsername = 'admin';
const correctPassword = 'admin';

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword){
    alert('Вхід успішний!');
    window.location.href = 'index.html';
    }else{
        alert('Не вірний логін чи пароль');
    }
})