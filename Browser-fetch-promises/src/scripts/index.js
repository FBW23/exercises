// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

let message = document.querySelector('.modal');

function timedOut() {
    message.style.display = 'block'
}
setTimeout(timedOut, 60000);
let closeBTN = document.querySelector('.close')

function closeDIV() {
    document.querySelector('.modal').style.display = 'none'

}
closeBTN.addEventListener('click', closeDIV);
