import { useEffect, useState } from 'react'

import List from './components/List'
import countriesService from './services/countries'

function App() {
  const [countries, setCountries] = useState([])
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  const handleInputChange = (event) => {
    setFilterValue(event.target.value)
  }

  return (
    <>
      find countries <input value={filterValue} onChange={handleInputChange} />
      <List filterValue={filterValue} countries={countries} />
    </>
  )
}

export default App
