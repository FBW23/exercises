import "../styles/main.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import FetchPAge from "./lib/fetchPage";
import generateTemplate from "./lib/template";

const baseURL = "https://api.cryptonator.com/api/ticker/";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  let exchangeApi = new FetchPAge(baseURL);
  new generateTemplate("currencies-template", document.body).handle();
  let form = document.querySelector("form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    let cryptoCurrency = document.getElementById("crypto-currency").value;
    let amount = document.getElementById("amount").value;
    let currency = document.getElementById("currency").value;
    exchangeApi.fetchApi(cryptoCurrency, currency).then(data => {
      document.getElementById("result").value = Math.floor(
        data.ticker.price * amount
      ).toFixed(3);
    });
  });
});
