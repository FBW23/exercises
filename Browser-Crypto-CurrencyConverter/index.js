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


/////////////////////////////////////// CLASS

class CryptonatorAPI {
    constructor() {
        this.apiUrl = "https://api.cryptonator.com/api/ticker";
        this.conversionEndpoint = "/:conversion";
        this.init();
    }
    init() {
        this.entryField = document.querySelector(".entryField");
        this.outputField = document.querySelector(".outputField");
        this.form = document.querySelector("#conversion-form");
        this.input = document.querySelector("#cryptoInput");
        this.output = document.querySelector("#cryptoOutput");
        this.registerEvents();
    }
    registerEvents() {
        this.inputAmount = document.querySelector("#cryptoInput");
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(`${this.apiUrl}/${this.entryField.value}-${this.outputField.value}`)
                .then(data => data.json())
                .then(
                    response =>
                    (this.output.value = (
                        response.ticker.price * this.input.value
                    ).toFixed(2))
                );
        });
    }
}

const cryptoRate = new CryptonatorAPI();
