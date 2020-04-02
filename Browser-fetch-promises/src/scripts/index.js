// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

console.log('anyone out there?');

const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

let promise = new Promise(function (resolve, reject) {
    if (modal.style.display = 'none') {
        resolve(); 
    } else {
        reject(); 
    }
}).then(function () { 
    window.setTimeout(function () {
        modal.style.display = "block";
    }, 2 * 1000);
}).catch(function () { 
    console.log('Some error has occured');
});

const closeFunction = () => {
    modal.style.display = "none";
}

close.addEventListener('click', closeFunction);