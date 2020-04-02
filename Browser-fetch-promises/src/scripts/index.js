// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
const modal = document.querySelector('.close');
function clearAlert() {
    window.clearTimeout(timeoutID);
}

function delayedAlert() {
    console.log('hey, before the timeout!');
    timeoutID = new Promise(function(resolve) {
        
        window.setTimeout(resolve, 5000);
    }).then(function () { setTimeout(function(){
        modal.style.display = 'block'
    }); // not being blocked by the code before 
    });
}

window.addEventListener('load', delayedAlert);