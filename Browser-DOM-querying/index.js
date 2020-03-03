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
    foodCategories[i].style.width = '30%';
    foodCategories[i].style.paddingTop = '20px';
    foodCategories[i].style.marginLeft = '8px';
    foodCategories[i].style.paddingBottom = '20px';

}

const main = document.querySelector('main');
main.style.display = 'flex';
main.style.justifyContent = 'space-between';

const warning = document.getElementById('warning');
warning.style.fontFamily = 'roboto';
warning.style.fontSize = '30px';
warning.style.textAlign = 'center';

const allergyInfo = document.querySelectorAll('.allergy-info:nth-child(even)');
for (let i = 0; i < allergyInfo.length; i++) {
    allergyInfo[i].style.background = 'yellow';

}
const allAlergyInfo = document.querySelector('.allergies');
allAlergyInfo.style.listStyle = 'none';
allAlergyInfo.style.display = 'flex';
allAlergyInfo.style.flexDirection = 'column';
allAlergyInfo.style.width = '30%';
allAlergyInfo.style.margin = 'auto'


const footer = document.querySelector('footer');
footer.style.display = 'flex';
footer.style.flexDirection = 'row';
footer.style.paddingTop = '50px';
footer.style.justifyContent = 'space-between';
footer.style.margin = 'auto';
footer.style.paddingRight = '300px';
footer.style.paddingLeft = '300px'




const footerDesc = document.querySelectorAll('.food-desc');
for (let i = 0; i < footerDesc.length; i++) {
    footerDesc[i].style.border = 'thick solid orange';
    footerDesc[i].style.borderRadius = '50%';
    footerDesc[i].style.height = '100px';
    footerDesc[i].style.width = '100px';
    footerDesc[i].style.padding = '30px'


}

const h3 = document.querySelectorAll('h3');
h3.forEach((item )=> {
    item.style.paddingTop = '20px';
    item.style.paddingLeft = '8px'
});


