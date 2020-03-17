
function changeColor() { //button to change color
    let box = document.querySelectorAll('.box');
    for (let i = 0; i < box.length; i++) {
        let newColor = makeColor();
        box[i].style.backgroundColor = newColor;
        box[i].querySelector('.rgb').innerHTML = newColor;
    }


}

function makeColor() {
    // #123FEF instead of rgb(200, 0, 0)
    const charSet = '0123456789ABCDEF';
    let arr = [];
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    let newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
    return newRgb;
}