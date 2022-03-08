const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('passwordtwo'); 
{
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usnameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value();
    const passwordtwoValue = passwordtwo.value();

    if(usernameValue == '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }
}

if(emailValue == '') {
    setErrorFor(email, 'Email cannot be blank');
} else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid.');
} else {
    setSuccessFor(email);
}

if(passwordValue == '') {
    setErrorFor(password, 'Password cannot be blank');
} else {
    setSuccessFor(password);
}

if(passwordtwoValue == '') {
    setErrorFor(passwordtwo, 'PasswordTwo cannot be blank');
} else if(passwordValue !== passwordtwoValue) {
    setErrorFor(passwordtwo, 'Passwords do not match');
} else {
    setSuccessFor(passwordtwo);
}
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; 
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    
}
 