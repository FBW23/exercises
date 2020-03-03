let body = document.querySelector('body');


body.style.fontFamily = 'arial';

document.querySelector('.title').style.textAlign = ('center');
let categories = document.querySelectorAll('.category');


for (let i = 0; i < categories.length; i++) {
    categories[i].style.color = 'pink';
    categories[i].style.fontStyle = "italic";
}



let foodCategories = document.querySelectorAll('.food-category');

function colorGenerator() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}


for (let i = 0; i < foodCategories.length; i++) {
    foodCategories[i].style.backgroundColor = colorGenerator();
    foodCategories[i].style.display = 'flex';
    foodCategories[i].style.flexDirection = 'row';
    foodCategories[i].style.width = '200px';
    foodCategories[i].style.heigth = '500px';
    foodCategories[i].style.alignItems = ('')
}