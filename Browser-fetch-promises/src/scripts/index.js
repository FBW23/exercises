// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/


      timeoutID = new Promise(function(resolve) {
        
        window.setTimeout(resolve, 10000);
    }).then(function () { setTimeout(function(){
        $.colorbox({
            html:"<h2>You've been on the site for 10 seconds! Cool!</h2>",
            className: "cta",
          
          }); 
    });
})