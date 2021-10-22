import view from './modules/view';
import weather from './modules/weather';

const searchField = document.getElementById('search');
const button = document.getElementById('searchButton');

document.addEventListener('DOMContentLoaded', loadPage);
button.addEventListener('click', searchCity);

async function loadPage() {
    let city = 'San Luis Obispo';
    let initialCity = await weather.searchWeather(city);
    view(initialCity);
}

async function searchCity() {
    let city = searchField.value;
    let cityData = await weather.searchWeather(city);
    searchField.value = '';
    view(cityData);
}