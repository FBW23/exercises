const password = document.querySelector("#password");
const checkbox = document.querySelector("#checkCase");
const passLength = document.querySelector("#passLength");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-';
    for (let i = 0; i < passLength.value; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    if (checkbox.checked) {
        password.innerText = result.toUpperCase();
    } else {
        password.innerText = result;
    }
});
