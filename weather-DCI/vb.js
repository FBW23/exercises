const button = document.querySelector("#button");
const form = document.querySelector("form");
const city = document.querySelector("#city");
let weatherContainer = document.querySelector(".weatherContainer");



const background=[
    {temp:40,color: 'red'},
    {temp:35,color: 'orange'},
    {temp:30,color: 'yellow'},
    {temp:20,color: 'deepskyblue'},
    {temp:10,color: 'purple'},
    {temp:0,color: 'grey'}
]
const search = () => {
    event.preventDefault();

    // const backround=[
    //     {temp:40,color: 'red'},
    //     {temp:35,color: 'orange'},
    //     {temp:30,color: 'yellow'},
    //     {temp:20,color: 'deepskyblue'},
    //     {temp:10,color: 'purple'},
    //     {temp:0,color: 'grey'}
    // ]

    let token = "2ffb5ceea1a5e2bdbecc6469a894dac7";
    let cityToSearch = city.value;
    let urlServiceAddress = `https://api.openweathermap.org/data/2.5/weather/?q=${cityToSearch}&APPID=${token}`;
    console.log(urlServiceAddress);
  


    fetch(urlServiceAddress)

        .then(weatherResponse => {
            console.log(weatherResponse);
            return weatherResponse.json();
        }).then(weatherData => {
            console.log(weatherData);
            let section = document.createElement("section");
            // let weatherContainer = document.createElement("section");
            let title = document.createElement("h1");
            let temp = document.createElement("p");
            let description = document.createElement("span");
            let icon = document.createElement("IMG");
            let wrapper = document.createElement("div");
            let celsius=(weatherData.main.temp-273).toFixed(0);
            let color= background.find(entry => celsius > entry.temp).color;



            
            weatherContainer.appendChild(section);
            section.appendChild(title);
            section.appendChild(temp);
            section.appendChild(wrapper);
            wrapper.appendChild(description);
            wrapper.appendChild(icon);

                      
            title.innerHTML = city.value;
            temp.innerHTML = `${celsius} °C`;
            wrapper.style.display="flex";
            wrapper.style.alignItems="center"
            description.innerHTML = weatherData.weather[0].description;
            description.style.fontSize= "1rem";
            icon.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
            icon.style.height="2rem";
            section.style.backgroundColor=color;
            section.style.margin="1rem";
            section.style.width="10rem";

            if(color==="yellow"){
                section.style.color="black"
            }

        });

}





form.addEventListener("submit", search);

// coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 10000, …}coord: {lon: 13.41, lat: 52.52}weather: [{…}]base: "stations"main: {temp: 286.93, feels_like: 284.1, temp_min: 285.93, temp_max: 287.59, pressure: 1004, …}visibility: 10000wind: {speed: 3.6, deg: 180}clouds: {all: 100}dt: 1588232300sys: {type: 1, id: 1275, country: "DE", sunrise: 1588217769, sunset: 1588271443}timezone: 7200id: 2950159name: "Berlin"cod: 200__proto__: Object