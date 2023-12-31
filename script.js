document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');
    const cityInput = document.getElementById('cityInput');
    const resultDiv = document.getElementById('result');
    const ;

    calculateBtn.addEventListener('click', function () {
        const city = cityInput.value;

        // Make a GET request to the Weatherstack API
        fetch(`http://api.weatherstacconst mySecret = process.env['3566c965a155fb07c44473f67771d367']k.com/current?access_key=${apiKey}&query=${encodeURIComponent(city)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Display the weather data on the web page
                resultDiv.innerHTML = `<p>Temperature in ${city}: ${data.current.temperature}°C</p>`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                resultDiv.innerHTML = '<p>Error fetching weather data</p>';
            });
    });
});