
const body = document.querySelector('body')
const letsAsapear = () => {

    if (event.clientY > 10) {
        body.classList.remove('invisible')
    }
}

window.addEventListener('mousemove', letsAsapear)