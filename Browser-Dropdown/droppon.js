let breako = document.querySelectorAll('.nav__link'),



    function hover() {
        for (let i = 0; i < breako.length; i++) {
            breako[i].style.visibility = 'visible';
        }
    }


breako.addEventListener('mouseover', hover)