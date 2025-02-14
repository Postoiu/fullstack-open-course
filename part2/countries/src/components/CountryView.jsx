const CountryView = ({ country }) => {
    const capital = country.capital[0];
    const languages = Object.entries(country.languages)
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
        </div>
    )
}

export default CountryView