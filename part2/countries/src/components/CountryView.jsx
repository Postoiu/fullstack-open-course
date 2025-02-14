import { useEffect, useState } from "react";

import weatherService from '../services/weather'

const CountryView = ({ country }) => {
    const [weatherData, setWeatherData] = useState({})

    const capital = country.capital[0];
    const languages = Object.entries(country.languages)

    useEffect(() => {
        weatherService
            .getWheather(capital)
            .then(data => {
                setWeatherData(data)
            })
    }, [])

    return (
        <div key={country.id}>
            <h1>{country.name}</h1>
            <p>capital {capital}</p>
            <p>area {country.area}</p>

            <h3>languages:</h3>

            <ul>
                {
                    languages.map(([key, value]) => {
                        return <li key={key}>{value}</li>
                    })
                }
            </ul>

            <div>
                <img src={country.flags.png} alt={country.flags.alt} />
            </div>

            <div>
                <h2>Weather in {weatherData.name}</h2>
                <p>temperature {weatherData.temp} Celcius</p>
                <div className="icon-container">
                    <img src={weatherData.icon} alt="Weather icon" />
                </div>
                <p>wind {weatherData.wind} m/s</p>
            </div>
        </div>
    )
}

export default CountryView