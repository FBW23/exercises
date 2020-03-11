const feldA = document.querySelector("#add1");
const feldB = document.querySelector("#add2");
const feldC = document.querySelector("#operator");
const result = document.querySelector("#addres");

feldC.addEventListener("change", () => {
    switch (feldC.value) {
        case '+':
            result.value = parseInt(feldA.value) + parseInt(feldB.value);
            break;
        case '-':
            result.value = parseInt(feldA.value) - parseInt(feldB.value);
            break;
        case '*':
            result.value = parseInt(feldA.value) * parseInt(feldB.value);
            break;
        case '/':
            result.value = parseInt(feldA.value) / parseInt(feldB.value);
            break;
        case '%':
            result.value = parseInt(feldA.value) % parseInt(feldB.value);
            break;
    }
});