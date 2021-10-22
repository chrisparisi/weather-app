const weather = (() => {    
    function convertData(initialData) {
        let name = initialData.name;
        let temperature = initialData.main.temp;
        let feelsLike = initialData.main.feels_like;
        let humidity = initialData.main.humidity;
        let wind = initialData.wind.speed;
        return { name, temperature, feelsLike, humidity, wind };
    }

    async function searchWeather(city) {
        try {
            console.log(city)
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=9332a31235ed4543be73e2188939b796`, {mode: 'cors'});
            let initialData = await response.json();
            let newData = convertData(initialData);
            console.log(newData)
            return newData;
        } catch (error) {
            console.log(error);
        }
    }
    return { searchWeather };
})();
   
export default weather;