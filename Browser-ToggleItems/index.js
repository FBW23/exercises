<<<<<<< HEAD
// # Toggle Favourite Destinations

// Create a list of your favourite destinations with a button to toggle the list

// **Requirements:**
// - use Bootstrap CDN
// - use `Element.classList` methods

// **Example:**

// ![screenshot](toggle.gif)

// **Bonus:**

// - Let the user select the favourite destination
// - Show in the event object
// - Style the list to your pleasing.

// ![screenshot](select.gif)


const button = document.querySelector('button');
const div = document.querySelector('div');




 function toggleList() {
    
    if(div.classList.contains('d-none')){
         div.classList.remove('d-none');
           button.innerText = 'Hide destinations!'; 
     } else{
         div.classList.add('d-none');
         button.innerText = 'Show destinations!'
         
     }
   
   
 }


 function clickListItem (event){
     const alertInfo = document.querySelector('.alert-info');
     if (alertInfo.classList.contains('d-none')){
         alertInfo.classList.remove('d-none');
        
     }
     const city = event.target.innerText;
     alertInfo.innerText = `You selected ${city}`;
     for(let i=0; i< div; i++){
         div.children[i].classList.remove('active')
     }
     event.target.classList.add('active')
 }


button.addEventListener("click", toggleList);
div.addEventListener('click', clickListItem)



=======
const myList = document.querySelector('.list-group');
const myButton = document.querySelector('button');
//console.log(myList);
//console.log(myButton);
const toggleList = () => {
    if (myList.classList.contains('d-none')) {
        // display block
        myList.classList.remove('d-none');
        myButton.innerText = 'Hide destinations!';
    } else {
        // display none
        myList.classList.add('d-none');
        myButton.innerText = 'Show destinations!';
    }
};
const clickListItem = (event) => {
    const myInfo = document.querySelector('.alert-info');
    if (myInfo.classList.contains('d-none')) {
        myInfo.classList.remove('d-none');
    }
    const city = event.target.innerText;
    //console.log(event.target.innerText);
    myInfo.innerText = 'You selected ' + city;
    for (let i = 0; i < myList.children.length; i++) {
        myList.children[i].classList.remove('active');
    }
    event.target.classList.add('active');
};
myButton.addEventListener('click', toggleList);
myList.addEventListener('click', clickListItem);
>>>>>>> 96b22e3e41e60950287ace6bea84b1ce010f8498
