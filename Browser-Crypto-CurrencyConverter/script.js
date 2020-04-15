const convertButton = document.querySelector(`button`);
const crypto = document.getElementById(`selectedCrypto`);
const currency = document.getElementById(`selectedCurrency`);
const baseUrl = `https://api.cryptonator.com/api/ticker`;
let amountOfCrypto = document.querySelector(`.amountOfCrypto`);
let costOfCrypto = document.querySelector(`.costOfCrypto`);

convertButton.addEventListener(`click`, e => {
  e.preventDefault();
  const url = `${baseUrl}/${crypto.value}-${currency.value}`;
  console;
  console.log(url);
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .then(data => {
      console.log(data);
      let price = data.ticker.price;
      let convert = amountOfCrypto.value * price;
      costOfCrypto.value = convert.toFixed(2);
      console.log(amountOfCrypto.value * price);
    })
    .catch(e => {
      console.log(e);
    });
});

