// Your code goes here!
import * as modulo1 from './percentage.js';
import * as modulo2 from './aspect-ratio.js';



const moduloForm=document.querySelector("#modulo-form")
const modulo1=document.querySelector("#modulo_1");
const modulo2=document.querySelector("#modulo_2");
const moduloResult=document.querySelector("#modulo_result");


moduloForm.addEventListener("submit", modulo);

const modulo=()=>{
    let first=parseInt(modulo1.value);
    let second=modulo2.value;
   let moduloFunction= modulo2.modulo(first,second)
   moduloResult.value=moduloFunction;

}