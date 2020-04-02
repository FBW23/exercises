// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

import moment from 'moment';

let newCountDown;

// \/ All of your javascript should go here \/
console.log('is anybody there?');

class Countdown {
    constructor(selector, endDate) {
        this.selector = this.selectEle(selector);
        this.endDate = moment(endDate);
        this.theNow = moment();
        this.duration = this.endDate - this.theNow;
        console.log(this.duration);
        this.updateInterval = 1000;
        this.splitUp = {
            days: this.selectEle("#days", this.selector), 
            hours: this.selectEle('#hours', this.selector),
            minutes: this.selectEle('#minutes', this.selector),
            seconds: this.selectEle('#seconds', this.selector)
        }
        this.time = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        this.updateHandler();
        console.log("constructor");
    }

    updateHandler() {
        console.log("updateHandler");
        setInterval(() => {
            this.duration = moment.duration(this.duration - this.updateInterval, ' milliseconds');
            console.log(this.duration);
            this.time.days = this.duration.days() + this.duration.years() * 365;
            this.time.hours = this.duration.hours();
            this.time.minutes = this.duration.minutes();
            this.time.seconds = this.duration.seconds();
            this.render();
        }, this.updateInterval)
    }

    template() {
        console.log("template");
        const {
            days,
            hours,
            minutes,
            seconds
        } = this.time;
        return `
        <p id="days">${days} Days</p>
        <p id="hours">${hours} Hours</p>
        <p id="minutes">${minutes} Minutes</p>
        <p id="seconds">${seconds} Seconds</p>
        `

    }
    render() {
        console.log("render");
        this.selector.innerHTML = this.template();
    }
    selectEle(selector, parentElement) {
        if (parentElement) {
            return parentElement.querySelector(selector)
        }
        return document.querySelector(selector)
    }
}

newCountDown = new Countdown("#left", {
    year: 2020,
    month: 5,
    day: 1
});

// let countdownTemplate =
//     //     `
//     // <p id="days">${moment().format('dddd')}</p>
//     // <p id="hours">${moment().hour()} Hours</p>
//     // <p id="minutes">${moment().minute()} Minutes</p>
//     // <p id="seconds">${moment().seconds()} Seconds</p>
//     // <p id="seconds"> TEST</p>
//     // `;


//     `
// <p id="days">${moment().add(1, 'year').calendar()}</p>
// `

// const sectionLeft = document.querySelector('.left');
// sectionLeft.innerHTML = countdownTemplate;

// moment("20111031", "YYYYMMDD").fromNow(); // 8 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 8 years ago
// moment().startOf('day').fromNow(); // 14 hours ago
// moment().endOf('day').fromNow(); // in 10 hours
// moment().startOf('hour').fromNow();