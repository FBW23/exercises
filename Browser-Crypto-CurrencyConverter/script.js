const form = document.querySelector('form');
const cryptoSelect = document.querySelector('#crypto-currency');
const currencySelect = document.querySelector('#currency');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');
const baseURL = 'https://api.cryptonator.com/api/ticker/';

function handleSubmit(e) {
    e.preventDefault(); // otherwise it will reload! 
    if(cryptoSelect.value && currencySelect.value) {
        const cryptoValue = cryptoSelect.value;
        const currencyValue = currencySelect.value;
        const url = baseURL + cryptoValue + '-' + currencyValue; 
        // make this correct! 
    
        fetch(url)
        .then((response) => {
            console.log(response);
            return response.json(); // convert json to javascript object
        }).then((data) => {
            try {
                if(data.ticker) {
                    const changeRate = data.ticker.price;
                    const amountValue = amount.value;
                    const calculation = changeRate * amountValue;
                    result.value = calculation; 
                } else {
                    throw(data); // error handling
                }
            }
            catch {
                const myError = data.error;
                result.value = myError; // show error 
                result.style.color = 'red';
            }
        });
    }
    else {
        result.value = 'You have to choose two currencies!'; // show error 
        result.style.color = 'red';
    }
    

}

form.addEventListener('submit', handleSubmit);