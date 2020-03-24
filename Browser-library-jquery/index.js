// Work on your tasks here
// Random Phrase
let randomQuote = () => {
    // Array of Phrases
 let phrases = ['Oh a cup of tea is always my cup of tea!', 'Rich in flavours', 'Great tea for a cold night', 'Tooling for a warm tea bag!'];
 
 // Random number 
 let randomNumber = Math.floor((Math.random() * phrases.length));
 return phrases[randomNumber];
 }
console.log(randomQuote()); 



// get html elements 
const submit = $('.submit');
const modal = $('.modal'); 
const html = $('html');
const teapot = $('.image');
const teaDescriptions = $('.tea-desc');
console.log(teaDescriptions);

// close modal

const closeCross = $('.modal-close');
console.log('close cross ', closeCross);

// Show modal function 
const showModal = () => {
    event.preventDefault();
    modal.show();
    console.log('click');
}

// Hide modal funciton
const hideModal = () => {
    event.preventDefault();
    modal.hide();
}

// Rotate the teapot 
const rotate = () => {
    teapot.addClass('teapot-rotate'); // what's dat?

} // .trigger() this sounds cool :D 

// Rotate the teapot back

const rotateBack = () => {

    teapot.toggleClass('teapot-rotate');
}

submit.on('click', showModal); 
closeCross.on('click', hideModal); 
teapot.on('click', rotateBack);
teaDescriptions.forEach
//        ~=Chat=~
// *-*-*-* NICOLO *-*-*-*
/** check
again lagging as fuck
*/

//======== PLAMEN ========

/*
okey
/* 
==== TASK ====  
TOOLS :

.hover()
.text()
randomQuote() 
<-
--------------------
* If the user hovers over the `.tea-desc` nested in the `selection__option`s, 
the text should change to a random phrase, e.g. "Great tea for a cold night", 
"Rich in flavours" etc.
![alt text](./images/tea-descriptions.png "Modal")
*/