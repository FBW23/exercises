// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

<<<<<<< HEAD
// start the countdown
let closeBTN = document.querySelector('.close')
let message = document.querySelector('.modal');
const promise1 = new Promise(function (resolve, reject) {
setTimeout(function () {
message.style.display = 'block';
resolve();
}, 10000);
});
function closeDIV (){
document.querySelector('.modal').style.display='none'
}
closeBTN.addEventListener('click', closeDIV);
=======
document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    let promiseOfModal = new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            resolve(modal, body); // give your references 
        }, (2*1000)); // 60 seconds
        // reject(body);
    });
    promiseOfModal.then(function() {
        modal.style.display = "block";
    });
    promiseOfModal.then(function() {
        body.style.background = "black";
    });
    promiseOfModal.catch(function(e) {
        console.error(e);
    });
    const close = document.querySelector('.close');
    close.addEventListener('click', function() {
        modal.style.display = "none";
    });
});
>>>>>>> d2ac006bac3b465ed6d89797d3d5bcdbe9599324
