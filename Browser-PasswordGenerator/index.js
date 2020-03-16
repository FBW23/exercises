<<<<<<< HEAD
var clipboard = new Clipboard('.copy')
var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  punctuationInput = document.getElementById("punctuation"),
  numbersInput = document.getElementById("numbers"),
  lengthInput = document.getElementById("length"),
  passwordFeild = document.getElementById("pass-field"),
  generateButton = document.getElementById("generate"),
  copyButton = document.getElementById("copy"),
  plength,
  userPassword,
  passwordCharSet;
 
function generate() {
  userPassword = "";
  passwordCharSet = "";
  if (lowercaseInput.checked) {
    passwordCharSet += lowercase;
  }
  if (uppercaseInput.checked) {
    passwordCharSet += uppercase;
  }
  if (punctuationInput.checked) {
    passwordCharSet += punctuation;
  }
  if (numbersInput.checked) {
    passwordCharSet += numbers;
  }
  plength = Number(lengthInput.value);
 
  for (let i = 0; i < plength; i++) {
    userPassword += passwordCharSet.charAt(
      Math.floor(Math.random() * passwordCharSet.length)
    );
  }
  if (userPassword == "") {
    let alertbox = document.getElementById('alert');
    alertbox.innerHTML = "Please select an option before generating"
    alertbox.classList.add('fail');
    setTimeout(function(){ 
      alertbox.classList.remove('fail');
    }, 3000);
  } else {
    passwordFeild.innerHTML = userPassword;
  }
  copyButton.setAttribute("data-clipboard-text", userPassword)
}
generateButton.addEventListener("click", generate);
 
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    let alertbox = document.getElementById('alert');
    alertbox.innerHTML = "Copied!"
    alertbox.classList.add('success');
    setTimeout(function(){ 
      alertbox.classList.remove('success');
    }, 3000);
    
    e.clearSelection();
});
 
clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  let alertbox = document.getElementById('alert');
    alertbox.innerHTML = "Try select the text to copy"
    alertbox.classList.add('fail');
    setTimeout(function(){ 
      alertbox.classList.remove('fail');
    }, 3000);
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
>>>>>>> 5b90449168bd57146388876855e7bc81960504c1
