const submit = $('#submit');
const modal = $('.modal');

const showModal = function () {
    modal.show();
}

submit.on('click', showModal)
//==========================================

const closingX = $('span');

const hideModal = function () {
    modal.hide();
}
closingX.on('click', hideModal);
//============================================

const tea1 = $('#teaDesc1');
const tea2 = $('#teaDesc2');
const tea3 = $('#teaDesc3');
const teasArray = ["Refreshing", "Good for a cold day", "Soothing and tasty"];

const hoverInTeas = function () {
    tea1.text(teasArray[0]); 
    tea2.text(teasArray[1]);
    tea3.text(teasArray[2]); 
}

tea1.on('mouseover', hoverInTeas);
tea2.on('mouseover', hoverInTeas);
tea3.on('mouseover', hoverInTeas);


// const hoverOutTeas = function() {
// teas.text("Tea Option 1");
// }
// teas.on('mouseout', hoverOutTeas); 