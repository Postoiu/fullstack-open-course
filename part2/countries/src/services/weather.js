import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = import.meta.env.VITE_OW_API_KEY;

const getWheather = city => {
    const request = axios.get(`${baseUrl}?q=${city}&units=metric&appid=${apiKey}`)
    return request.then(response => (
        {
            name: response.data.name,
            temp: response.data.main.temp,
            wind: response.data.wind.speed,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        }
    ))
}

export default { getWheather }