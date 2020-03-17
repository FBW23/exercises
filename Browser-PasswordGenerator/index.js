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