const firstValue = document.querySelector("#add1");
const secondValue = document.querySelector("#add2");
const operator = document.querySelector("#operator");
const result = document.querySelector("#addres");

operator.addEventListener("change", () => {
    switch (operator.value) {
        case '+':
            result.value = parseInt(firstValue.value) + parseInt(secondValue.value);
            break;
        case '-':
            result.value = parseInt(firstValue.value) - parseInt(secondValue.value);
            break;
        case '*':
            result.value = parseInt(firstValue.value) * parseInt(secondValue.value);
            break;
        case '/':
            result.value = parseInt(firstValue.value) / parseInt(secondValue.value);
            break;
        case '%':
            result.value = parseInt(firstValue.value) % parseInt(secondValue.value);
            break;
    }
});