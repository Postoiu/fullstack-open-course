import CountryView from "./CountryView";
import ListItem from "./ListItem";

const List = ({ filterValue, countries }) => {
    if(filterValue === '') {
        return null;
    }
    
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filterValue))

    if(filteredCountries.length === 1) {
        const filteredCountry = filteredCountries[0];
        return <CountryView country={filteredCountry} />
    }

    if(filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    return (
        filteredCountries.map(country => (
            <ListItem key={country.id} country={country} />
        ))
    )
}

export default List;