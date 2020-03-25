// Work on your tasks here

const submit = $('#submit');
const modal = $('.modal');
const x = $('span');
const teaPot = $('#teapot');
const teaDesc = $('*#tea-desc');
const teaImage = $('*.selection__image');


const showModal = function(){
    modal.show();
}

const hideModal = function(){
    modal.hide();
}

const sentence = function(){
    const input = $('input');
    if(input.text()){
        teaDesc.text('Good for today');
    } else{
        alert('PLease fill in the information!')
    }
   
    
};

const hideSentence = function(){
    teaDesc.text('Tea Option');
};

const moveTeaPot = function(){
    teaPot.style.transform = 'rotate(20deg)'
};

$(document).ready(function(){
    $("#teapot").click(function(){
    $("#teapot").toggleClass("showLayers");
    });
    }); 

teaImage.on('mouseout', hideSentence)
teaImage.on('hover', sentence);
submit.on('click', showModal);
x.on('click', hideModal);
