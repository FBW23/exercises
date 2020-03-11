let soma1 = document.querySelector("#soma1");
let soma2 = document.querySelector("#soma2");
let resultadoSoma = document.querySelector("#resultadoSoma");


function resultadoSomaFunc() {

    let nSoma1 = Number(soma1.value);
    let nSoma2 = Number(soma2.value);
    let res = nSoma1 + nSoma2;
}

soma1.addEventListener("change", resultadoSomaFunc);
soma2.addEventListener("change", resultadoSomaFunc);
resultadoSoma.addEventListener("change", resultadoSomaFunc);