function multiplyBy() {
    num5 = document.getElementById("fifthNumber").value;
    num6 = document.getElementById("sixthNumber").value;
    let result3 = Number(num5) * Number(num6);
    document.getElementById("result3").value = result3;
}

document.getElementById("fifthNumber").addEventListener('change', multiplyBy);
document.getElementById("sixthNumber").addEventListener('change', multiplyBy);

function divideBy() {
    num7 = document.getElementById("seventhNumber").value;
    num8 = document.getElementById("eigthNumber").value;
    let result4 = Number(num7) / Number(num8)
    document.getElementById("result4").value = result4;
}
document.getElementById("seventhNumber").addEventListener('change', divideBy);
document.getElementById("eigthNumber").addEventListener('change', divideBy);

function add() {
    num3 = document.getElementById("thirdNumber").value;
    num4 = document.getElementById("fourthNumber").value;
    let result2 = Number(num3) + Number(num4);
    document.getElementById("result2").value = result2;
}
document.getElementById("thirdNumber").addEventListener('change', add);
document.getElementById("fourthNumber").addEventListener('change', add);

function sub() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    let result = Number(num1) - Number(num2);
    document.getElementById("result").value = result;
}
document.getElementById("firstNumber").addEventListener('change', sub);
document.getElementById("secondNumber").addEventListener('change', sub);