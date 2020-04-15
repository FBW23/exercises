import "regenerator-runtime/runtime";
export default class FetchPage {
  constructor(newBaseURL) {
    this.baseUrl = newBaseURL;
  }

  async fetchApi(to, from) {
    try {
      let response = await fetch(`${this.baseUrl}${to}-${from}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
