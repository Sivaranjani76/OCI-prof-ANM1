const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

// Function to fetch weather data
function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name!');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found!');
            } else {
                displayWeather(data);
            }
        })
        .catch(error => {
            alert('Error fetching weather data.');
            console.error(error);
        });
}

// Function to display the weather data
function displayWeather(data) {
    const weatherDisplay = document.getElementById('weather-display');

    weatherDisplay.innerHTML = `
        <div class="weather-detail"><strong>City:</strong> ${data.name}, ${data.sys.country}</div>
        <div class="weather-detail"><strong>Temperature:</strong> ${data.main.temp}°C</div>
        <div class="weather-detail"><strong>Weather:</strong> ${data.weather[0].description}</div>
        <div class="weather-detail"><strong>Humidity:</strong> ${data.main.humidity}%</div>
        <div class="weather-detail"><strong>Wind Speed:</strong> ${data.wind.speed} m/s</div>
    `;
}
