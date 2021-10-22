function view(data) {

    const city = document.getElementById('city');
    const temperature = document.getElementById('temperature');
    const feelsLike = document.getElementById('feels-like');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    city.innerText = data.name;
    temperature.innerText = data.temperature;
    feelsLike.innerText = data.feelsLike;
    humidity.innerText = data.humidity;
    wind.innerText = data.wind;
}

export default view;