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
        wind.innerText = data.current.wind_speed + "km/h";
        feelslike.innerText = data.current.feelslike;
        weatherdescriptions.innerText = data.current.weather_descriptions;
        cloudy.innerText = data.current.cloudcover + "%";
        windDirection.innerText = data.current.wind_dir;

        const iconUrl = data.current.weather_icons[0];
        icons.innerHTML = `<img src="${iconUrl}" alt="${data.current.weather_descriptions[0]}">`;      

        setBackground(data.current.weather_descriptions[0]);

    }
    catch (error) {
         console.log("Error:", error);
    }
    });

}

getWeather();

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchbtn.click();
    }
});

const app = document.querySelector(".weather-app");

function setBackground(description) {
    const text = description.toLowerCase();
    let image = "clear.png"; // default (sunny / clear)

    if (text.includes("thunder")) {
        image = "thunder.jpg";
    } else if (text.includes("snow") || text.includes("blizzard") || text.includes("ice")) {
        image = "snow.jpg";
    } else if (text.includes("rain") || text.includes("drizzle") || text.includes("shower")) {
        image = "rain.jpg";
    } else if (text.includes("mist") || text.includes("fog") || text.includes("haze")) {
        image = "fog.jpg";
    } else if (text.includes("cloud") || text.includes("overcast")) {
        image = "clouds.jpg";
    }

    app.style.backgroundImage = `url("weather-img/${image}")`;
}

