let num1, num2, num3, num4, num5, num6, num7, num8, num_r4, num_r5;
num1 = document.getElementById("num1");
num2 = document.getElementById("num2");
function sumValues() {
  let result = parseFloat(num1.value) + parseFloat(num2.value);
  if (!isNaN(result)) {
    document.getElementById("result").value = result;
  }
}
num1.addEventListener("change", sumValues);
num2.addEventListener("change", sumValues);

num3 = document.getElementById("num3");
num4 = document.getElementById("num4");
function minValues() {
  let result1 = parseFloat(num3.value) - parseFloat(num4.value);
  if (!isNaN(result1)) {
    document.getElementById("result1").value = result1;
  }
}
num3.addEventListener("change", minValues);
num4.addEventListener("change", minValues);

num5 = document.getElementById("num5");
num6 = document.getElementById("num6");
function mulValues() {
  let result2 = parseFloat(num5.value) * parseFloat(num6.value);
  if (!isNaN(result2)) {
    document.getElementById("result2").value = result2;
  }
}
num5.addEventListener("change", mulValues);
num6.addEventListener("change", mulValues);

num7 = document.getElementById("num7");
num8 = document.getElementById("num8");
function divValues() {
  let result3 = parseFloat(num7.value) / parseFloat(num8.value);
  if (!isNaN(result3)) {
    document.getElementById("result3").value = result3;
  }
}
num7.addEventListener("change", divValues);
num8.addEventListener("change", divValues);

num_r4 = document.getElementById("num_r4");
num_r5 = document.getElementById("num_r5");
function modValues() {
  let result4 = parseFloat(num_r4.value) % parseFloat(num_r5.value);
  if (!isNaN(result4)) {
    document.getElementById("result4").value = result4;
  }
}
num_r4.addEventListener("change", modValues);
num_r5.addEventListener("change", modValues);
