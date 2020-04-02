// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

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
    .catch(error => console.error(error));

// close the modal
x.addEventListener('click', function () {
    modal.style.display = 'none'
});