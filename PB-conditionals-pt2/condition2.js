let markHeight = 1.74;
let markMass = 74;
let johnHeight = 1.60;
let johnMass = 100;
let markBMI = markMass/(markHeight*markHeight);
console.log(markBMI);
let johnBMI = johnMass/(johnHeight*johnHeight);
console.log(johnBMI);
let valueMarkMMI = markBMI > johnBMI;
console.log(`Is Mark\'s BMI higher than John\'s? Why no, it\'s ${valueMarkMMI} it is?`);
if (markBMI > johnBMI) {
    console.log(`Mark ${markBMI}`);
}else {
    console.log(`John ${johnBMI}`);
}