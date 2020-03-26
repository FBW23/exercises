// soma

let soma1 = document.querySelector("#soma1");
let soma2 = document.querySelector("#soma2");

function resultadoSomaFunc() {
    let resultadoSoma = document.querySelector("#resultadoSoma");
    let nSoma1 = Number(soma1.value);
    let nSoma2 = Number(soma2.value);
    resultadoSoma.value = nSoma1 + nSoma2;
   
}
soma1.addEventListener("change", resultadoSomaFunc);
soma2.addEventListener("change", resultadoSomaFunc);



// SUBTRAÇÃO

let sub1 = document.querySelector("#sub1");
let sub2 = document.querySelector("#sub2");

function resultadoSubFunc() {
    let resultadoSub = document.querySelector("#resultadoSub");
    let nSub1 = Number(sub1.value);
    let nSub2 = Number(sub2.value);
    resultadoSub.value = nSub1 - nSub2;
   
}
sub1.addEventListener("change", resultadoSubFunc);
sub2.addEventListener("change", resultadoSubFunc);



// MULTIPLICAÇÃO
let mult1 = document.querySelector("#mult1");
let mult2 = document.querySelector("#mult2");

function resultadoMultFunc() {
    let resultadoMult = document.querySelector("#resultadoMult")
    let nMult1 = Number(mult1.value);
    let nMult2 = Number(mult2.value);
    resultadoMult.value = nMult1 * nMult2;
   
}
mult1.addEventListener("change", resultadoMultFunc);
mult2.addEventListener("change", resultadoMultFunc);



// DIVISÃO
let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");

function resultadoDivFunc() {
    let resultadoDiv = document.querySelector("#resultadoDiv");
    let nDiv1 = Number(div1.value);
    let nDiv2 = Number(div2.value);
    resultadoDiv.value = nDiv1 / nDiv2;
   
}
div1.addEventListener("change", resultadoDivFunc);
div2.addEventListener("change", resultadoDivFunc);



//MÓDULO PORCENTAGEM

let mod1 = document.querySelector("#mod1");
let mod2 = document.querySelector("#mod2");

function resultadoModFunc() {
    let resultadoMod = document.querySelector("#resultadoMod");
    let nMod1 = Number(mod1.value);
    let nMod2 = Number(mod2.value);
    resultadoMod.value = nMod1 % nMod2;
   
}
mod1.addEventListener("change", resultadoModFunc);
mod2.addEventListener("change", resultadoModFunc);