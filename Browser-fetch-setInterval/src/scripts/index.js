const pomodoroSession = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const timer = document.querySelector('#timer');

let interval = null;
buttons.forEach(element => element.addEventListener('click', () => {
    switch (element.id) {
        case 'btn-plus':
            pomodoroSession.value = parseInt(pomodoroSession.value) + 1;
            break;
        case 'btn-minus':
            pomodoroSession.value = parseInt(pomodoroSession.value) - 1;
            break;
        case 'btn-start':
            if (pomodoroSession.value <= 0) { alert('Please enter a valid number of minutes!') } else {
                countDown()
            }
            break;
        case 'btn-reset':
            document.querySelector('#btn-start').hidden = false;
            clearInterval(interval);
            pomodoroSession.value = 25;
            timer.innerHTML = '<span class="mins">25</span><span> : </span><span class="secs">00</span>';
            break;
        case 'btn-pause':
            let tempInterval = interval;
            clearInterval(interval);
            break;
        case 'btn-continue':
            interval = tempInterval;
            countDown();
            break;
    }
}));
function convertSeconds(s) {
    let min = Math.floor(s / 60);
    let sec = s % 60;
    if (sec < 10) {
        return `${min} : 0${sec}`;
    }
    return `${min} : ${sec}`;
}
function convertMinutes(timeleft) {
    return (timeleft / 60).toFixed(2);
}
function countDown() {
    const timeleft = parseFloat(pomodoroSession.value) * 60;
    let counter = 0;
    document.querySelector('#btn-start').hidden = true;
    function timeIt() {
        document.querySelector('#btn-start').style.display === 'none';
        counter++;
        const minAndSecondsLeft = timeleft - counter;
        timer.innerHTML = convertSeconds(minAndSecondsLeft);
        pomodoroSession.value = convertMinutes(minAndSecondsLeft);
        if (counter === timeleft) {
            clearInterval(interval);
            counter = 0;
            console.log(document.querySelector('#btn-start'));
            document.querySelector('#btn-start').hidden = false;
        }
    }
    interval = setInterval(timeIt, 1000);
}