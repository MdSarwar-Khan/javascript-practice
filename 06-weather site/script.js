const weather = document.querySelector(".current-weather");
const temp = document.getElementById("temp-value");
const icons = document.getElementById("weather-icon");
const cityname = document.getElementById("city-name");
const humidit = document.getElementById("humid");
const wind = document.getElementById("windy");
const country = document.getElementById("country-name");
const date = document.getElementById("date-time");
const feelslike = document.getElementById("feel");
const weatherdescriptions = document.getElementById("description");
const pressure = document.getElementById("Pressure");
const input = document.getElementById("loc-search");
const searchbtn = document.getElementById("search")
const cloudy = document.getElementById("cloudy");
const windDirection = document.getElementById("wind-direction");




const API_KEY = "c3d3eed6059ab44f875087207db368f0";


async function getWeather() {

    searchbtn.addEventListener("click", async() => {
        const city = input.value;
    
    const url = `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        cityname.innerText = data.location.name;
        country.innerText = data.location.country;
        temp.innerText =  data.current.temperature +"°";
        date.innerText = data.location.localtime;
        pressure.innerText = data.current.pressure;
        humidit.innerText =  data.current.humidity;
        wind.innerText = data.current.wind_speed;
        feelslike.innerText = data.current.feelslike;
        weatherdescriptions.innerText = data.current.weather_descriptions;
        cloudy.innerText = data.current.cloudcover + "%";
        windDirection.innerText = data.current.wind_dir;

    }
    catch (error) {
         console.log("Error:", error);
    }
    });

}

getWeather();

