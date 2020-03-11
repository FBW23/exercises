const body = document.querySelector('body');
console.log(body);

const logKey = () => {
    if (event.clientY > 10) {
        body.classList.remove('d-none')
    }
};

window.addEventListener('mousemove', logKey);