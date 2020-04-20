class UserNameAPI {
    constructor() {
        this.apiUrl = "https://api.github.com/users/martl/repos";
        this.init();
    }
    init() {
        this.input = document.querySelector(".form-control");
        this.output = document.querySelector(".result");
        this.button = document.querySelector(".btn");
        this.form = document.querySelector("form");
    }
    searchEvents() {
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(`${this.apiUrl}/${this.input.value}-${this.output.value}`)
                .then(data => data.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        output.innerHTML += `<section class='repo'><a href='${data[i].html_url}'>${data[i].name}</a><p>${data[i].description}</p><span>${data[i].pushed_at}</span></section>`;
                    }
                })

            // fetch(`${this.apiUrl}/${this.input.value}-${this.output.value}`)
            //     .then(data => data.json())
            //     .then(response => 
            //         (this.output = input.response.name))
        });
    }
}


const userName = new UserNameAPI();