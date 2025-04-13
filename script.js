
const apiKey = 'a8c0aa08baa621d25396d0b13203a50e'; 

function getWeather(){
    const city = document.querySelector('#city').value
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;



fetch(apiUrl)   // fetches weather data from OpenWeatherMap API
        .then(response => response.json())
        .then(data => {
            document.querySelector('#city-name').textContent = data.name;
            document.querySelector('#temperature').textContent = `${data.main.temp}°F`;
            document.querySelector('#condition').textContent = data.weather[0].description;

            // Call the recommendation function
            recommendOutfit(data.main.temp, data.weather[0].description);
        })
        .catch(error => console.error('Error:', error));
}



// Recommends outfits based on temperature and weather conditions.

function recommendOutfit(temp, condition) {
    let recommendation = '';
    if (temp < 50) {
        recommendation = 'Cover up with a Jacket, Boots, and Layers';
    } else if (temp > 70) {
        recommendation = 'A cute T-shirt, Shorts, and Sandals';
    } else {
        recommendation = 'Light Jacket, Long sleeve shirt, and Jeans ';
    }

    if (condition.includes('rain')) {
        recommendation += ' with an umbrella and Waterproof Shoes';
    }

    document.querySelector('#recommendation').textContent = recommendation;
}



