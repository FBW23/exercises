class Client {
    constructor () {
        //Your token goes here
        this.token = "ff8df0bd";
    }

    async getMovieData(movie) {
        let response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${this.token}`);
        let data = await response.json();
        return data;
    }
}

export default { Client } 