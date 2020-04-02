// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
const myModal = document.querySelector('#myModal');

const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        myModal.style.display = 'block';
        resolve();
    }, 60000);
}).then (function() {
    console.log('success!');
});

const closeModal = document.querySelector('.close');

const closing = function() {
    myModal.style.display = 'none';
};
closeModal.addEventListener('click', closing);