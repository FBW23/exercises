const Handlebars = require("handlebars");
export default class GenerateHtmlTemplate {
  constructor(templateID, destination) {
    this.templateID = templateID;
    this.destination = destination;
  }

  handle(currencyObject) {
    let source = document.getElementById(this.templateID).innerHTML;
    let template = Handlebars.compile(source);
    let output = template(currencyObject);
    this.destination.innerHTML = output;
  }
}
