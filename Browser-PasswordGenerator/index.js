



const generatePassword =()=>{
    event.preventDefault();

    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
    const chatArr= charset.split('');
    //const number = document.querySelector('#number');
    const randomChar =chatArr[Math.floor(Math.random() * chatArr.length)]
    const myLength = document.querySelector('#length').value;
    const password = document.querySelector('#password')
    if (EventTarget.checked){
        password.value = randomChar[2].toUpperCase;
    } else{
        password.value = randomChar*myLength
    }
}


const button = document.querySelector('button');
button.addEventListener('click', generatePassword);

