<<<<<<< HEAD
const password = document.querySelector("#password");
const checkbox = document.querySelector("#checkCase");
const passLength = document.querySelector("#passLength");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-';
    for (let i = 0; i < passLength.value; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    if (checkbox.checked) {
        password.innerText = result.toUpperCase();
    } else {
        password.innerText = result;
    }
});
=======
console.log('Ctrl+Shift+P');
console.log('Can you see me coding? ');

const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!ยง$%&/()=?#,;.:-_';

function getRandomInt() {
    return Math.floor(Math.random() * charset.length);
}

function passwordGenerator(length, mixedCase) {
    let password = '';
    for (let i = 1; i < length + 1; i++) {
        const randomNumber = getRandomInt();
        //console.log('random Number' + randomNumber);
        const randomChar = charset[randomNumber];
        if (mixedCase && i % 3 === 0) {
            // big case // true
            // every third char should be uppercase!
            // every third character should become uppercase
            password += randomChar.toUpperCase();
        } else {
            // small case, easier to do // false
            password += randomChar; // concat

        }
        console.log(password);
    }
    //console.log(password);
    const myInput = document.querySelector('#password');
    myInput.value = password;
    //return password;
}

const handlingInputs = () => {
    const myLength = parseInt(document.querySelector('#length').value);
    console.log(typeof (myLength));
    const myMixedCase = document.querySelector('#tick').checked;
    console.log(myMixedCase);
    const myPassword = passwordGenerator(myLength, myMixedCase);
};

handlingInputs();

const myButton = document.querySelector('#button');
myButton.addEventListener('click', handlingInputs);
//passwordGenerator(20, true);
//passwordGenerator(5, false);
>>>>>>> 2345ab816298e8db4666db4445bed0b81eb30b6c
