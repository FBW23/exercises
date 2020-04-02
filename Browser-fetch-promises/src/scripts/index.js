// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const modal = document.querySelector('.modal');
const x = document.querySelector('.close');

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        modal.style.display ='block';
    },60000);
});

promise
.then(() => console.log('success'))
.catch(()=> console.log('error'))

// close the modal
x.addEventListener('click', function() {
    modal.style.display = 'none'
});