
const baseURL = 'https://api.cryptonator.com/api/ticker/';

let url;

// Grab references to all the DOM elements you'll need to manipulate

const searchCrypto = document.querySelector('.search-number');
const form = document.querySelector('form');
const selectCrypto = document.querySelector('#crypto-currency');
const selectCurrency = document.querySelector('#currency');
const result = document.querySelector('#result');

function displayResults(json){
    const change = json.ticker.price;
    const amount = searchCrypto.value;
    const calculation = amount * change;
    result.value = calculation;

};

function fetchResults(e){
    e.preventDefault();
   const chosenCrypto = selectCrypto.value;
   const chosenCurrency = selectCurrency.value;

   url = baseURL + chosenCrypto + '-' + chosenCurrency ;
   fetch(url).then((response)=>{
     return response.json();  
   }).then(function(json){
       displayResults(json);
   })
};



form.addEventListener('submit' , fetchResults);