let screenLog = document.querySelector('#screen-log');

function logKey() {
    if (event.clientY > 10) {
        screenLog.classList.remove('d-none');
    }
}
document.addEventListener('mousemove', logKey);