// Work on your tasks here

// get html elements 
const submit = $('.submit');
console.log(submit);

// Show modal function 
const showModal = () => {
    event.preventDefault();
    const modal = $('.modal-content');
    console.log('click')

// looks like its working
}

// event listener
submit.click('on', showModal);

