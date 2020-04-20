const targetContainer = document.querySelector(".target1");

class DataFetch {
    constructor(container) {
        this.container = container;
        this.init();
    }
    init() {
        this.form = this.container.parentNode;
        this.registerEvents();
    }
    registerEvents() {
        this.targetUser = this.container.parentNode[0];
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            const url = 'https://api.github.com/users/' + this.targetUser.value + '/repos';

            async function fetchData() {
                const resp = await fetch(url)
                const data = await resp.json()
                return data;
            }

            fetchData().then(data => {
                data.forEach(element => {
                    e.target.innerHTML += `
                        <div class="card mt-3">
                            <div class="card-header">
                                <strong>id:</strong> ${element.id} <strong>name:</strong> ${element.name}
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>description:</strong> ${element.description}</li>
                            </ul>
                        </div>`
                })
            })
        })
    }
}


const usernameData = new DataFetch(targetContainer);