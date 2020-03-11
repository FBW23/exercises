
const x = document.querySelector('.addition-one');
const y = document.querySelector('.addition-two');
const a = document.querySelector('.sub-one');
const b= document.querySelector('.sub-two');
const c = document.querySelector('.times-one');
const d = document.querySelector('.times-two');
const e = document.querySelector('.div-one');
const f = document.querySelector('.div-two');
const g = document.querySelector('.modul-one');
const h = document.querySelector('.modul');


const calculatesSum = () => {
    let result = document.querySelector('.result-add');
    result.value = Number(x.value) + Number(y.value)   
};
const calculatesSub = () => {
    const resultSub = document.querySelector('.result-sub')
    resultSub.value = Number(a.value) - Number(b.value)   
};
const calculatesTimes = ()=>{
    let resultTimes = document.querySelector('.result-times');
    resultTimes.value = Number(c.value) * Number(d.value)
     
};
const calculatesDiv = ()=>{
    let resultDiv = document.querySelector('.result-div');
    resultDiv.value = Number(e.value) / Number(f.value)
     
};
const calculatesModulo = ()=>{
    let resultModul = document.querySelector('.result-modul');
    resultModul.value = Number(g.value) % Number(g.value)
     
 };

x.addEventListener('change', calculatesSum);
y.addEventListener('change', calculatesSum);
a.addEventListener('change', calculatesSub);
b.addEventListener('change', calculatesSub);
c.addEventListener('change', calculatesTimes);
d.addEventListener('change', calculatesTimes);
e.addEventListener('change', calculatesDiv);
f.addEventListener('change', calculatesDiv);
g.addEventListener('change', calculatesModulo);
h.addEventListener('change', calculatesModulo);


