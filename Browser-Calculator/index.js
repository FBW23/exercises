let num1, num2;
num1 = document.getElementById("num1");
num2 = document.getElementById("num2");

function sumValues() {
    let result = parseFloat(num1.value) + parseFloat(num2.value);
    if (!isNaN(result)) {
        document.getElementById("result").value = result;
    }
}
num1.addEventListener('change', sumValues);
num2.addEventListener('change', sumValues);


////
let a, b;
a = document.getElementById("a");
b = document.getElementById("b");

function minValues() {
    let result1 = parseFloat(a.value) - parseFloat(b.value);
    if (!isNaN(result1)) {
        document.getElementById("result1").value = result1;
    }
}
a.addEventListener('change', minValues);
b.addEventListener('change', minValues);



////
let x, y;
x = document.getElementById("x");
y = document.getElementById("y");

function multValues() {
    let result2 = parseFloat(x.value) * parseFloat(y.value);
    if (!isNaN(result2)) {
        document.getElementById("result2").value = result2;
    }
}
x.addEventListener('change', multValues);
y.addEventListener('change', multValues);


//

let n, m;
n = document.getElementById("n");
m = document.getElementById("m");

function divtValues() {
    let result3 = parseFloat(n.value) / parseFloat(m.value);
    if (!isNaN(result3)) {
        document.getElementById("result3").value = result3;
    }
}
n.addEventListener('change', divtValues);
m.addEventListener('change', divtValues);


///

let x1, y1;
x1 = document.getElementById("x1");
y1 = document.getElementById("y1");

function div1Values() {
    let result4 = parseFloat(x1.value) % parseFloat(y1.value);
    if (!isNaN(result4)) {
        document.getElementById("result4").value = result4;
    }
}
x1.addEventListener('change', div1Values);
y1.addEventListener('change', div1Values);