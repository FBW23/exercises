// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

<<<<<<< HEAD

      timeoutID = new Promise(function(resolve) {
        
        window.setTimeout(resolve, 10000);
    }).then(function () { setTimeout(function(){
        $.colorbox({
            html:"<h2>You've been on the site for 10 seconds! Cool!</h2>",
            className: "cta",
          
          }); 
    });
})
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
>>>>>>> 417289746f360b6b1b3c16981189448568fbd72e
