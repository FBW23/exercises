const ul = document.querySelectorAll(".food-category");
colorGenerator = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return myString = `rgb(${r},${g},${b})`;
}
for (let i = 0; i < ul.length; i++) {
    ul[i].style.color = (colorGenerator())
}