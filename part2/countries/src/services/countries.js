import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => {
        return response.data.map(country => (
            {
                name: country.name.common,
                id: country.cca2,
                capital: country.capital,
                area: country.area,
                languages: country.languages,
                flags: country.flags
            }
        ))
    })
}

export default { getAll }