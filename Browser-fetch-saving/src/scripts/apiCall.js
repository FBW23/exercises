

export default class Client {
    constructor () {
        //Your token goes here
<<<<<<< HEAD
        this.token = "dc6d26d6";
=======
        this.token = "4da339a9";
>>>>>>> bc113b5484ecc7f51da1bc1d22f504f7c9ba48f7
    }

    async getMovieData(movie) {
        let response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${this.token}`);
        let data = await response.json();
        return data;
    }
}
<<<<<<< HEAD
=======
export { Client }
>>>>>>> bc113b5484ecc7f51da1bc1d22f504f7c9ba48f7
