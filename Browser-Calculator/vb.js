


// let input1 = document.querySelector(".input1");
// let input2 = document.querySelector(".input2");

//let input=document.querySelector("input");

// let sum = document.querySelector("#sum");
// let deduct = document.querySelector("#deduct");
// let multiply = document.querySelector("#multiply");
// let divide = document.querySelector("#divide");
// let modulo = document.querySelector("#modulo");




// const sumFunction = () => {

//     let input1 = document.querySelector("#sum .input1");
//     let input2 = document.querySelector("#sum .input2");
//     if (input1.value && input2.value) {
//         let result = document.querySelector("#sum .result");
//         result.value = Number(input1.value) + Number(input2.value);
//     }
// };
// const deductFunction = () => {

//     let input1 = document.querySelector("#deduct .input1");
//     let input2 = document.querySelector("#deduct .input2");
//     if (input1.value && input2.value) {
//         let result = document.querySelector("#deduct .result");
//         result.value = Number(input1.value) - Number(input2.value);
//     }
// };

// const divideFunction = () => {

//     let input1 = document.querySelector("#divide .input1");
//     let input2 = document.querySelector("#divide .input2");
//     if (input1.value && input2.value) {
//         let result = document.querySelector("#divide .result");
//         result.value = Number(input1.value) / Number(input2.value);
//     }
// };

// const multiplyFunction = () => {

//     let input1 = document.querySelector("#multiply .input1");
//     let input2 = document.querySelector("#multiply .input2");
//     if (input1.value && input2.value) {
//         let result = document.querySelector("#multiply .result");
//         result.value = Number(input1.value) * Number(input2.value);
//     }
// };

// const moduloFunction = () => {

//     let input1 = document.querySelector("#modulo .input1");
//     let input2 = document.querySelector("#modulo .input2");
//     if (input1.value && input2.value) {
//         let result = document.querySelector("#modulo .result");
//         result.value = Number(input1.value) % Number(input2.value);
//     }
// };



// sum.addEventListener("change", sumFunction);
// deduct.addEventListener("change", deductFunction);
// divide.addEventListener("change", divideFunction);
// multiply.addEventListener("change", multiplyFunction);
// modulo.addEventListener("change", moduloFunction);




let input1 = document.querySelectorAll(".input1");
let input2 = document.querySelectorAll(".input2");





for (let i = 0; i < input1.length; i++) {
    const calculator = (event) => {
        let operations = ["sum", "deduct", "multiply", "divide", "modulo"];
        let operation = operations[i];
        if (event.target.id.startsWith(operation)) {
            if (document.querySelector(`#${operation} .input1`).value && document.querySelector(`#${operation} .input2`).value) {
                let result = document.querySelector(`#${operation} .result`);
                if (operation === "sum") {
                    result.value = Number(document.querySelector(`#${operation} .input1`).value) + Number(document.querySelector(`#${operation} .input2`).value);
                }
                else if (operation === "deduct") {
                    result.value = Number(document.querySelector(`#${operation} .input1`).value) - Number(document.querySelector(`#${operation} .input2`).value)
                }
                else if (operation === "multiply") {
                    result.value = Number(document.querySelector(`#${operation} .input1`).value) * Number(document.querySelector(`#${operation} .input2`).value)
                }
                else if (operation === "divide") {
                    result.value = Number(document.querySelector(`#${operation} .input1`).value) / Number(document.querySelector(`#${operation} .input2`).value)
                }
                else if (operation === "modulo") {
                    result.value = Number(document.querySelector(`#${operation} .input1`).value) % Number(document.querySelector(`#${operation} .input2`).value)
                }

            }

        }
    };
    input1[i].addEventListener("change", calculator);

    input2[i].addEventListener("change", calculator);

}

