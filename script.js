let cityName = document.querySelector("#cityName");
let tempt = document.querySelector("#tempt");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let searchbar = document.querySelector("#searchbar");
let btn = document.querySelector("#btn");
let weatherImages = document.querySelector(".weatherImages");
let weatherData = document.querySelector(".weather");
let errormsg = document.querySelector("#errormsg");

const apiKey = "a7aa2f641081111552de16d30d1416d5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        errormsg.style.display = "block";  
        weatherData.style.display = "none";  
    } else {
        var data = await response.json();
        
      
        errormsg.style.display = "none";  
        weatherData.style.display = "block"; 
        
       
        cityName.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = Math.round(data.wind.speed) + " km/hr";
        tempt.innerHTML = Math.round(data.main.temp) + "°c";

        if (data.weather[0].main == "Clouds") {
            weatherImages.src = "cloud1.png";
        } else if (data.weather[0].main == "Rain") {
            weatherImages.src = "thunder.png";
        } else if (data.weather[0].main == "Clear") {
            weatherImages.src = "sunny.png";
        }
    }
}


btn.addEventListener("click", () => {
    checkWeather(searchbar.value);
});
