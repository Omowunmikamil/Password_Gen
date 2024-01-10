const passwordInput = document.getElementById('password');
const passwordLength = 14;

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+|{}[]~/<>=';

const allCharacters = upperCaseLetters + lowerCaseLetters + numbers + symbols;

function generatePassword() {
    let password = '';

    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (passwordLength > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordInput.value = password;
}

function copyPassword() {
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
}