let johnHeight,johnMass,markHeight,markMass,johnBMI,markBMI;
johnHeight=1.70;
johnMass=60;
markHeight=1.50;
markMass=60;

johnBMI=johnMass/(Math.pow(johnHeight,2));
markBMI=markMass/(Math.pow(markHeight,2));
console.log(johnBMI+'kg/meter^2');
console.log(markBMI+'kg/meter^2');

let is= markBMI>johnBMI? true:false;
console.log(is);

let sentence = `ìs mark\'s BMI higher than john\'s ? yes cause ${markBMI} > ${johnBMI} , and that is ${is}`;
console.log(sentence);
let name1='mark';
let name2='john';
if (markBMI>johnBMI){
    console.log(name1);
    console.log(markBMI);
}
else{
    console.log(name2);
    console.log(johnBMI);
}