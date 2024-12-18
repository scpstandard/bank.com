document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const validUsername = 'stevenfstelzer76264';
    const validPassword = '12Hell-Raiser00';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    // usernameError.style.display = 'none';
    // passwordError.style.display = 'none';

    let valid = true;
    if (username !== validUsername) {
        usernameError.style.display = 'block';
        valid = false;
    }
    if (password !== validPassword) {
        passwordError.style.display = 'block';
        valid = false;
    }

    if (valid) {
        window.location.href = 'transfer.html';
    }

});





function myFunction() {
    var x = document.getElementById("password")
    var y = document.getElementById("hide1")
    var z = document.getElementById("hide2")

    if(x.type === 'password'){
        x.type="text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display ="none";
        z.style.display = "block";
    }
};