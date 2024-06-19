const apiKey = 'your-api-key-here'; // Replace with your own API key from OpenWeatherMap

document.getElementById('get-weather-btn').addEventListener('click', () => {
  const locationInput = document.getElementById('location-input');
  const location = locationInput.value || 'current';
  getWeather(location);
});

function getWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = document.getElementById('temperature');
      const conditions = document.getElementById('conditions');
      temperature.textContent = `${data.main.temp} °C`;
      conditions.textContent = data.weather[0].description;
    })
    .catch(error => {
      console.error(error);
      alert('Error fetching weather data');
    });
}

// Get the user's current location and fetch the weather data
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temperature = document.getElementById('temperature');
        const conditions = document.getElementById('conditions');
        temperature.textContent = `${data.main.temp} °C`;
        conditions.textContent = data.weather[0].description;
      })
      .catch(error => {
        console.error(error);
        alert('Error fetching weather data');
      });
  });
} else {
  alert('Geolocation is not supported by this browser');
}