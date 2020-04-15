const cryptoType = document.querySelector("#cryptoCurrency");
const cryptoAmount = document.querySelector("#cryptoAmount");
const result = document.querySelector("#result");
const currencyType = document.querySelector("#currency");
const button = document.querySelector("#button");
const form = document.querySelector("form");
const calc = () => {
    event.preventDefault();
    fetch(`https://api.cryptonator.com/api/ticker/${cryptoType.value}-${currencyType.value}`)
        .then(result => result.json())
        .then(data => {
            data.base = cryptoType.value;
            //    // console.log(data.base) 
            data.target = currencyType.value;
            //    // console.log(data.target) 
            price = data.ticker.price;
            result.value =Number(cryptoAmount.value)*price;
        });
};
form.addEventListener("submit", calc);