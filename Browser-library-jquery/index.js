// Work on your tasks here
// * Use the elements found in the `index.html` to display a modal if the user clicks "Submit" 
// at the end of the form. The user should be able to exit the modal by clicking 
// the `.close-modal` element or another part of the window. ![alt text](./images/modal.png "Modal")

const submit = $('#form');

const modal = () => {
    event.preventDefault();
    const modal = $('.modal');
    modal.show();

    const close = () => {
        modal.hide();
    }

    modal.on("click", close);
};
submit.on('submit', modal);


// * If the user clicks the teapot image at the top of the page, 
// the teapot should rotate by 20degrees. If the user clicks the teapot again,
//  the image should pop back into place.
// ![alt text](./images/teapot.png "Modal")



teapot.toggleClass('teapot-rotate');




// * If the user hovers over the `.tea-desc` nested in the `selection__option`s, 
// the text should change to a random phrase, e.g. "Great tea for a cold night", 
// "Rich in flavours" etc.
// ![alt text](./images/tea-descriptions.png "Modal")

const description = $(".tea-desc");

const randomText = () => {
    const words = ["Great tea for a cold night", "Rich in flavours", "If you don't like coffee"];

    const randomizer = Math.floor(Math.random() * 3);

    const target = $(event.target);
    target.text(words[randomizer]);
}

description.hover(randomText);