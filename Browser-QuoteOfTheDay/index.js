const generate = document.querySelector('.generate');
console.log(generate);
const quoteArea = document.querySelector('.quote');
console.log(quoteArea);

function clearText() {
    quoteArea.innerText = `insert quote array here`;
}

generate.addEventListener("click", clearText);
