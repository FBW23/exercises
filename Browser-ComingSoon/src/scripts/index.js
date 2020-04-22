import '../styles/main.scss'

class Countdown {
    constructor(selector, endDate) {
      this.selector = selector;
      this.endDate = endDate;
      this.updateInterval = 1000;
      this.calcResult();
    }
    calcResult() {
      const { selector, endDate } = this;
      setInterval(() => {
        let now = new Date().getTime();
        let remaining = endDate - now;
        let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        if (days <= 9) {
          days = "0" + days;
        }
        let hours = Math.floor(remaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        if (hours <= 9) {
          hours = "0" + hours;
        }
        let minutes = Math.floor(remaining % (1000 * 60 * 60) / (1000 * 60));
        if (minutes <= 9) {
          minutes = "0" + minutes;
        }
        let seconds = Math.floor(remaining % (1000 * 60) / 1000);
        if (seconds <= 9) {
          seconds = "0" + seconds;
        }
        let result = days + " days." + " " + hours + " hours." + " " + minutes + " minutes." + " " + seconds + " seconds.";
        document.querySelector(selector).innerHTML = result;
      }, this.updateInterval);
    }
  }
  const countDate = new Date("Sep 18, 2020 00:00:00").getTime();
  const myCountdown = new Countdown(".target", countDate);