// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

console.log(' out there?');

const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

const promise = new Promise(function (resolve, reject) {
    window.setTimeout(function () {
        modal.style.display = "block";
        resolve();
    }, 60 * 1000);
}).then(function () {
    console.log('successfully shown modal');
}).catch(function () {
    console.log('Some error has occured');
});

const closeFunction = () => {
    modal.style.display = "none";
}

close.addEventListener('click', closeFunction);