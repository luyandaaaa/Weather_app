// API key for OpenWeatherMap
const apiKey = '3f3ddd58048f265f0b5ec4c455279f3b';

function getWeather() {
    const cityInput = document.getElementById("city-input");
    const city = cityInput.value.trim();
    const weatherDisplay = document.getElementById("weather-display");

    if (!city) {
        showError("Please enter a city name.");
        return;
    }

    // Clear previous error messages
    clearError();

    // Show loading state
    weatherDisplay.style.display = 'none';
    
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch current weather
    fetch(currentWeatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            weatherDisplay.style.display = 'block';
        })
        .catch(error => {
            console.error("Error fetching current weather data:", error);
            showError("City not found. Please try another location.");
        });

    // Fetch forecast
    fetch(forecastUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayHourlyForecast(data);
        })
        .catch(error => {
            console.error("Error fetching forecast data:", error);
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById("temp-div");
    const weatherDivInfo = document.getElementById("weather-info");
    const weatherIcon = document.getElementById("weather-icon");

    // Clear previous data
    weatherDivInfo.innerHTML = '';
    tempDivInfo.innerHTML = '';

    const cityName = data.name;
    const country = data.sys.country;
    const temperature = Math.round(data.main.temp);
    const weatherDescription = capitalizeFirstLetter(data.weather[0].description);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const windSpeed = (data.wind.speed * 3.6).toFixed(1); // Convert m/s to km/h
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const temperatureHTML = `<p>${temperature}°C</p>`;
    const weatherHTML = `
        <p>${cityName}, ${country}</p>
        <p>${weatherDescription}</p>
        <p>Feels like: ${feelsLike}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind: ${windSpeed} km/h</p>`;

    weatherDivInfo.innerHTML = weatherHTML;
    tempDivInfo.innerHTML = temperatureHTML;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = weatherDescription;
}

function displayHourlyForecast(data) {
    const hourlyForecastDiv = document.getElementById("hourly-forecast");
    hourlyForecastDiv.innerHTML = '';

    const forecastList = data.list.slice(0, 8); // Get the next 8 forecasts (24 hours)

    forecastList.forEach(forecast => {
        const dateTime = new Date(forecast.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(forecast.main.temp);
        const iconCode = forecast.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourString = hour === 0 ? '12AM' : hour < 12 ? `${hour}AM` : hour === 12 ? '12PM' : `${hour-12}PM`;

        const forecastHTML = `
            <div class="hourly-item">
                <p>${hourString}</p>
                <img src="${iconUrl}" alt="${forecast.weather[0].description}">
                <p>${temperature}°C</p>
            </div>`;

        hourlyForecastDiv.innerHTML += forecastHTML;
    });
}

function showError(message) {
    clearError();
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.insertBefore(errorDiv, weatherContainer.firstChild);
}

function clearError() {
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

function capitalizeFirstLetter(string) {
    return string.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Allow searching by pressing Enter key
document.getElementById("city-input").addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});