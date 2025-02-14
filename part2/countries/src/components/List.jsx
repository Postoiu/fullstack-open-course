const List = ({ filterValue, countries }) => {
    if(filterValue === '') {
        return null;
    }
    
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filterValue))

    if(filteredCountries.length === 1) {
        const filteredCountry = filteredCountries[0];
        const capital = filteredCountry.capital[0];
        const languages = Object.entries(filteredCountry.languages)

        return (
            <div key={filteredCountry.id}>
                <h1>{filteredCountry.name}</h1>
                <p>capital {capital}</p>
                <p>area {filteredCountry.area}</p>

                <h3>languages:</h3>

                <ul>
                    {
                        languages.map(([key, value]) => {
                            return <li key={key}>{value}</li>
                        })
                    }
                </ul>

                <div>
                    <img src={filteredCountry.flags.png} alt={filteredCountry.flags.alt} />
                </div>
            </div>
        )
    }

    if(filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    return (
        filteredCountries.map(country => (
            <p key={country.id}>{country.name}</p>
        ))
    )
}

export default List;