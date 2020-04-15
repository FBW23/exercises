// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

<<<<<<< HEAD
const modal = document.querySelector('.modal');
const x = document.querySelector('.close');

const promise = new Promise((resolve, reject) => {
    resolve(setTimeout(() => {
        modal.style.display = 'block';
    }, 60000)), error => {
        reject(Error('Promise failed'));
    };
});

promise
    .then(() => console.log('success'))
    .catch(error => console.error(error))
    .finally(() => console.log('done'));
    
// close the modal
x.addEventListener('click', function () {
    modal.style.display = 'none'
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
>>>>>>> 9ba87cb0a9fca9a168a5bae0239513b32156a335
});