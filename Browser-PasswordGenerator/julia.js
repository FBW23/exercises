const generatePassword = () => {
    event.preventDefault();
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
    const chatArr = charset.split('');
    //const number = document.querySelector('#number');
    const myLength = document.querySelector('#length').value; // make it a number!
    const password = document.querySelector('#password');
    let newPassword = [];
    //if (EventTarget.checked) {
    //password.value = randomChar * myLength
    for (let i = 0; i < parseInt(myLength); i++) {
        const randomChar = chatArr[Math.floor(Math.random() * chatArr.length)]
        newPassword.push(randomChar);
    }

    // loop end here
    newPassword = newPassword.map(function(item, index) {
        const checkbox = document.querySelector('#checkbox');
        if (checkbox.checked && index % 3 === 0) {
            return item.toUpperCase();
        }
        return item;
    })

    console.log(newPassword);
    password.value = newPassword.join('');
}

const button = document.querySelector('button');
button.addEventListener('click', generatePassword);