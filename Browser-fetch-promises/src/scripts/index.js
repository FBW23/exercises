// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
// start the countdown
let closeBTN = document.querySelector('.close')
let message = document.querySelector('.modalContent');
const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        message.style.display = 'block';
        resolve();
    }, 60000);
});

function closeDIV (){
    document.querySelector('.modalContent').style.display='none'

}
closeBTN.addEventListener('click',closeDIV);
