function addCity(event) {
    event.preventDefault();
    
    let input = document.querySelector("#search-input");
    let city = document.querySelector("#city");
    city.textContent = input.value;
    searchCity(city.textContent);
    
}
function searchCity(city) {
    let apiKey = "64f96a0b2d38108e7c3432831d7cf1ae";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(addTemperature);    
}

function addTime(date){
    days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let hours = date.getHours;
    let minutes = date.getMinutes;

    let day = days[date.getDay];
    
}
function addTemperature(response){
    let temperature = document.querySelector("#temp");
    temperature.innerHTML = Math.round(response.data.main.temp);

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.main.humidity;

    let wind = document.querySelector("#wind");
    wind.innerHTML = response.data.wind.speed;

    let city = document.querySelector("#city");
    city.textContent = response.data.name;

    let country = document.querySelector("#country");
    country.textContent = response.data.sys.country;

    let descrip = document.querySelector("#description");
    descrip.textContent = response.data.weather[0].description;

    let icon = document.querySelector("#icon");
    let iconUrl = `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png">`;
    icon.innerHTML = iconUrl;

    console.log(response.data.weather[0].icon);
}

let eventform = document.querySelector("#search-form");
eventform.addEventListener("click", addCity);